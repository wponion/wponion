import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $arg = this.option( 'select2', {} );
		if( window.wponion._.isUndefined( $arg.dropdownParent ) ) {
			$arg.dropdownParent = this.get_field_parent_by_id( this.element );
		}
		$arg = this.handle_args( $arg, 'select2' );
		this.element.select2( this.handle_args( $arg ) );
		return this;
	}

	field_debug() {
	}
}

export default ( ( w ) => w.wponion_register_field( 'select2', ( $elem ) => new field( $elem ) ) )( window );
