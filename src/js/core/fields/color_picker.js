import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.element.find( 'input.wponion-color-picker-element' ).length > 0 ) {
			let $args       = this.parse_args( this.option( 'settings' ), {
				theme: 'classic',
				comparison: false,
				components: {
					preview: true,
					opacity: true,
					hue: true,
					interaction: {
						hex: true,
						rgba: true,
						hsla: true,
						hsva: true,
						cmyk: true,
						input: false,
						clear: false,
						save: false
					}
				}
			} );
			$args.el        = this.element.find( 'div.wponion-color-picker-element' )[ 0 ];
			$args.appClass  = 'wpo-color-picker';
			let $instance   = new Pickr( this.handle_args( $args, 'colorpicker' ) );
			let $save_color = ( $color, $instance ) => {
				let $value = $color.toHEXA().toString();
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
				this.element.find( 'input.wponion-color-picker-element' ).val( $value );
			};


			$instance.on( 'save', $save_color );
			$instance.on( 'change', $save_color );
			$instance.on( 'swatchselect', $save_color );
			$instance.on( 'init', () => {
				if( !window.wponion._.isUndefined( $args.inline ) && true === $args.inline ) {
					this.element.find( '.pickr' ).hide();
				}
			} );


		}
	}
}
