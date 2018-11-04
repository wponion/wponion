/**
 * @param window = Window Object
 * @param document = Document Object
 * @param $ = jQuery Object
 * @param wpo = $wponion object
 * @param wp = $wponion.theme object.
 */
( ( window, document, $, wpo, wp ) => {
	let wphooks = wp.hooks;

	/**
	 * Customizer Functions.
	 * @type {{link_customize_settings: function(*), cloneable_update: function(*), cloneable: function(*=)}}
	 */
	let $wponion_customizer = {
		/**
		 * Adds data-customize-settings-link attribute.
		 */
		link_customize_settings: ( ( $elem ) => {
			$elem.find( 'input , textarea' ).each( function() {
				$( this ).attr( "data-customize-setting-link", true );
			} )
		} ),

		/**
		 * Links WIth KeyValue to auto get and save data.
		 */
		cloneable_update: ( ( $control ) => {
			let $values = $control.container.find( ':input' )
								  .inputToArray( { key: 'name', value: true } );
			let $input  = $control.container.find( 'input.wponion_cloneable_value' );

			$.each( $values, function( $k, $vs ) {
				$.each( $vs, function( $e, $ep ) {
					$values = $ep;
				} );
			} );

			$input.val( JSON.stringify( $values ) );
			$input.trigger( 'change' );
		} ),

		/**
		 * Links WIth KeyValue to auto get and save data.
		 */
		get_keyval_data: ( ( $control ) => {
			let $values = $control.container.find( ':input' )
								  .inputToArray( { key: 'name', value: true } );
			$.each( $values, function( $k, $vs ) {
				$.each( $vs, function( $e, $ep ) {
					$values = $ep;
				} );
			} );

			return $values;
		} ),

		/**
		 * Enables Cloneable fields.
		 */
		cloneable: ( ( $control ) => {
			$control.container.on( 'change', ':input', function() {
				if( !$( this ).hasClass( 'wponion_cloneable_value' ) ) {
					$wponion_customizer.cloneable_update( $control );
				}
			} )
		} ),
	};

	let $wpc = wp.customize.controlConstructor;

	/**
	 * Handles Key Value field in customizer.
	 */
	$wpc.wponion_field_key_value = wp.customize.Control.extend( {
		ready: function() {
			let control = this;
			wphooks.addAction( 'wponion_key_value_updated', ( ( $elem ) => {
				let $val = $wponion_customizer.get_keyval_data( control );
				control.setting.set( $val );
			} ), 11 );

			control.container.on( 'change', 'input[type=text]', function() {
				let $val = $wponion_customizer.get_keyval_data( control );
				control.setting.set( $val );
			} );
		}
	} );

	$wpc.wponion_field_checkbox = wp.customize.Control.extend( {
		ready: function() {
			let control = this;
			control.container.on( 'change', ':input', function() {
				let $val = $wponion_customizer.get_keyval_data( control );
				control.setting.set( $val );
			} );
		}
	} );


	/**
	 * Handles Fieldset And Checkbox Field.
	 */
	$wpc.wponion_field_fieldset = wp.customize.Control.extend( {
		ready: function() {
			$wponion_customizer.cloneable( this );
		}
	} );

	/**
	 * Handles Image Picker.
	 */
	$wpc.wponion_field_image = $wpc.wponion_field_gallery = wp.customize.Control.extend( {
		initialize: function( id, options ) {
			let $html  = $( '<div>' + options.params.content + '</div>' );
			let $input = $html.find( 'input#image_id' );
			$input.attr( 'data-customize-setting-link', $html.find( 'input#image_id' ).attr( 'name' ) );
			options.params.content = $html.html();
			wp.customize.Control.prototype.initialize.call( this, id, options );
		},
	} );


	/**
	 * Inits Customizer Instance.
	 */
	wphooks.addAction( 'wponion_init', ( () => {
		$( ".wponion-module-customizer-framework.wponion-framework" ).each( function() {
			$wponion_customizer.link_customize_settings( $( this ) );
		} );
	} ) );

} )( window, document, jQuery, $wponion, wp );
