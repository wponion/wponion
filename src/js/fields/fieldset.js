import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

class field extends WPOnion_Field {
	/**
	 * Handles Javascript Error Placement.
	 * @param err
	 */
	js_error( err ) {
		let $elem = $wponion.IDtoElement( err.element, this.element );
		if( $elem ) {
			err.error.appendTo( $elem.find( '> .wponion-fieldset' ) );
		}
	}
}

export default ( ( w ) => w.wponion_register_field( 'fieldset', ( $elem ) => new field( $elem ) ) )( window );
