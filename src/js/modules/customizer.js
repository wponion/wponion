class WPOnion_Customizer_Module {
	static init() {
	}

	static link_settings( $elem ) {
		$elem.find( 'input, textarea' ).each( function() {
			jQuery( this ).attr( 'data-customize-settings-link', true );
		} );
	}

	static cloneable_update( $control ) {
		let $values = $control.container.find( ':input' ).inputToArray( { key: 'name', value: true, } ),
			$input  = $control.container.find( 'input.wponion_cloneable_value' );

		for( let $_key in $values ) {
			if( $values.hasOwnProperty( $_key ) ) {
				for( let $_k in $values[ $_key ] ) {
					if( $values[ $_key ].hasOwnProperty( $_k ) ) {
						$values = $values[ $_key ][ $_k ];
					}
				}
			}
		}
		$input.val( JSON.stringify( $values ) ).trigger( 'change' );
	}

	static get_keyval_data( $control ) {
		let $values = $control.container.find( ':input' ).inputToArray( { key: 'name', value: true } );

		for( let $_key in $values ) {
			if( $values.hasOwnProperty( $_key ) ) {
				for( let $_k in $values[ $_key ] ) {
					if( $values[ $_key ].hasOwnProperty( $_k ) ) {
						$values = $values[ $_key ][ $_k ];
					}
				}
			}
		}

		return $values;
	}

	static cloneable( $control ) {
		$control.container.on( 'change', ':input', ( e ) => {
			if( !jQuery( e.target ).hasClass( 'wponion_cloneable_value' ) ) {
				this.cloneable_update( $control );
			}
		} );
	}
}

export default ( ( window, document, $, wp ) => {
	window.wponion.hooks.addAction( 'wponion_init', 'wponion_core', () => {
		let $elem = $( '.wponion-module-customizer-framework.wponion-framework' );
		if( $elem.length > 0 ) {
			let $wpoc                     = wp.customize.controlConstructor;
			$wpoc.wponion_field_key_value = require( '../fields/customizer/key_value' ).default;
			$wpoc                         = window.wponion.hooks.applyFilters( 'wponion_customizer_fields', $wpoc );

			$elem.each( () => {
				WPOnion_Customizer_Module.link_settings( jQuery( this ) );
			} );
		}
	} );
} )( window, document, jQuery, window.wp );
