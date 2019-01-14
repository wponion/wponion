import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.element.find( 'input.wponion-color-picker-element' ).wpColorPicker();
	}
}

export default ( ( w ) => w.wponion_register_field( 'color_picker', ( $elem ) => new field( $elem ) ) )( window );
