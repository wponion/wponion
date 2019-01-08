import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		this.element.find( 'input' ).wpColorPicker();
	}
}

export default ( ( w ) => w.wponion_render_field( 'color_picker', ( $elem ) => new field( $elem ) ) )( window );
