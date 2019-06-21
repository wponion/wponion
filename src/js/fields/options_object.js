import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.element.find( '.json-output' ).jsonView( this.option( 'values' ) );
	}

}

export default ( ( w ) => w.wponion_register_field( 'options_object', ( $elem ) => new field( $elem ) ) )( window );
