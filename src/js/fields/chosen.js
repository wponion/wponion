import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $arg = this.option( 'chosen', {} );

		$arg = this.handle_args( $arg, 'chosen' );
		this.element.chosen( $arg );
		return this;
	}

	field_debug() {
	}
}

export default ( ( w ) => w.wponion_register_field( 'chosen', ( $elem ) => new field( $elem ) ) )( window );
