import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( window.wponion_is_library_exists( 'wpColorPicker', 'jquery' ) ) {
			this.element.find( 'input.wponion-color-picker-element' ).wpColorPicker();
		}
	}
}
