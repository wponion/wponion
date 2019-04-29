( ( window, document, $, wp ) => {
	let wphooks = window.wponion.hooks,
		$wpcc   = wp.customize.controlConstructor,
		$wpc    = wp.customize.Control,
		$wpoch  = {
			values: ( $values ) => {
				$.each( $values, function( $k, $vs ) {
					$.each( $vs, function( $e, $ep ) {
						$values = $ep;
					} );
				} );
				return $values;
			},
			save: ( $instance, $value = undefined ) => {
				if( window.wponion._.isUndefined( $value ) ) {
					$value = $wpoch.values( $instance.container.find( ':input' )
													 .serializeJSON() );
				}
				$instance.setting.set( $value );
			},
		};

	/**
	 * Field Clone.
	 */
	$wpcc.wponion_field_clone = $wpc.extend( {
		ready: function() {
			this.container.on( 'change', () => $wpoch.save( this ) );
			this.container.on( 'wponion_field_updated', () => $wpoch.save( this ) );
		}
	} );

	$wpcc.wponion_field_checkbox = $wpc.extend( {
		ready: function() {
			this.container.on( 'change', () => $wpoch.save( this ) );
		},
	});


	$wpcc.wponion_field_text = $wpc.extend( {
		ready: function() {
			/**/
		}
	} );


	/**
	 * Inits Customizer Instance.
	 */
	wphooks.addAction( 'wponion_init', 'wponion_core', ( () => {
		$( '.wponion-module-customizer-framework.wponion-framework' ).each( function() {

		} );
	} ) );

} )( window, document, jQuery, wp );
