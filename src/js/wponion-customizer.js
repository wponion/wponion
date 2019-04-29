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
	$wpcc.wponion_field_fieldset    = $wpcc.wponion_field_clone;
	$wpcc.wponion_field_accordion   = $wpcc.wponion_field_clone;
	$wpcc.wponion_field_group       = $wpcc.wponion_field_clone;
	$wpcc.wponion_field_icon_picker = $wpcc.wponion_field_clone;

	/**
	 * Field Checkbox.
	 */
	$wpcc.wponion_field_checkbox = $wpc.extend( {
		ready: function() {
			this.container.on( 'change', () => $wpoch.save( this ) );
		},
	} );
	$wpcc.wponion_field_radio        = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_button_set   = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_color_picker = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_input_group  = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_font_picker  = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_date_picker  = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_image_select = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_image        = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_gallery      = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_wp_link      = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_background   = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_color_group  = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_link_color   = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_spacing      = $wpcc.wponion_field_checkbox;
	$wpcc.wponion_field_dimensions   = $wpcc.wponion_field_checkbox;

	/**
	 * Field Sorter.
	 */
	$wpcc.wponion_field_sorter = $wpc.extend( {
		ready: function() {
			this.container.on( 'wponion_field_updated', () => $wpoch.save( this ) );
		}
	} );

	/**
	 * Key Value Pair.
	 */
	$wpcc.wponion_field_key_value = $wpc.extend( {
		ready: function() {
			this.container.on( 'change', ':input', () => $wpoch.save( this ) );
			this.container.on( 'wponion_field_updated', () => $wpoch.save( this ) );
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
