import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		if( this.element.length > 0 ) {
			let $settings = this.option( 'inputmask' );
			if( $settings ) {
				$settings = this.handle_args( $settings, 'InputMask' );
				this.element.inputmask( $settings );
			}
		}
	}
}

export default ( ( w ) => w.wponion_register_field( 'inputmask', ( $elem ) => new field( $elem ) ) )( window );
