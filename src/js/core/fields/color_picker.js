import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.element.find( 'input.wponion-color-picker-element' ).length > 0 ) {
			let $data       = this.option( 'settings', {} );
			$data           = ( !window.wponion._.isObject( $data ) ) ? {} : $data;
			let $save_color = ( $color ) => {
					let $value   = '';
					let $display = '';
					if( !window.wponion._.isNull( $color ) ) {
						$value   = $color.toHEXA().toString();
						$display = $color.toHEXA().toString();
						if( !window.wponion._.isUndefined( $instance._representation ) ) {
							switch( $instance._representation ) {
								case 'HEXA':
									$value = $color.toHEXA().toString();
									break;
								case 'RGBA':
									$value = $color.toRGBA().toString();
									break;
								case 'HSLA':
									$value = $color.toHSLA().toString();
									break;
								case 'HSVA':
									$value = $color.toHSVA().toString();
									break;
								case 'CMYK':
									$value = $color.toCMYK().toString();
									break;
							}
						}
					}

					this.element.find( 'input.wponion-color-picker-element' ).val( $value );
					this.element.find( 'input.wponion-color-picker-element' ).trigger( 'change' );
					this.element.find( 'span.cpickr-bg' ).css( 'background-color', $display );
				},
				$args       = this.parse_args( $data, {
					theme: 'classic',
					comparison: false,
					components: {
						preview: true,
						opacity: true,
						hue: true,
						interaction: {
							hex: false,
							rgba: false,
							hsla: false,
							hsva: false,
							cmyk: false,
							input: false,
							clear: false,
							save: false
						}
					}
				} );

			let $is_inline     = $args.inline;
			let $is_show_input = $args.components.interaction.input;
			$args.appClass     = 'wpo-color-picker';
			$args.default      = this.element.find( 'input.wponion-color-picker-element' ).val() || '#fff';
			$args              = this.handle_args( $args, 'colorpicker' );
			$args.el           = this.element.find( 'div.wponion-color-picker-element' )[ 0 ];

			if( $is_inline && $is_show_input ) {
				$args.components.interaction.input = false;
			}

			let $instance = new Pickr( $args ),
				$input    = this.element.find( 'input.wponion-color-picker-element' );

			$instance.on( 'save', $save_color );
			$instance.on( 'change', $save_color );
			$instance.on( 'swatchselect', $save_color );
			$instance.on( 'init', () => {
				if( true === $is_inline ) {
					if( true !== $is_show_input ) {
						this.element.find( '.wponion-color-picker-element' ).hide();
						this.element.find( '.pickr' ).hide();
					}
				}
			} );

			$input.on( 'click', () => $instance.show() );
			this.element.find( '.cpickr-bg' ).on( 'click', () => $instance.show() );
			$input.on( 'blur', function() {
				$instance.setColor( $input.val() );
			} );
		}
	}
}
