import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.element.chosen( this.handle_args( this.option( 'chosen', {} ), 'chosen' ) );
		return this;
	}

	field_debug() {
	}
}

export default ( ( w ) => w.wponion_register_field( 'chosen', ( $elem ) => new field( $elem ) ) )( window );
