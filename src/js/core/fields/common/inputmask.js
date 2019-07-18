import WPOnion_Field from '../../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.element.length > 0 ) {
			let $settings = this.option( 'inputmask' );
			if( $settings ) {
				this.element.inputmask( this.handle_args( $settings, 'inputmask' ) );
			}
		}
	}

	maybe_add_inited_class() {
	}
}
