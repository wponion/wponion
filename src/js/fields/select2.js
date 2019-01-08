import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		let $arg = this.option( 'select2', {} );
		this.element.select2( this.handle_args( $arg ) );
		return this;
	}

	field_debug() {

	}
}

export default ( ( w ) => w.wponion_render_field( 'select2', ( $elem ) => new field( $elem ) ) )( window );
