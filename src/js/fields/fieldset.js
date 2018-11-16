import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

export default class extends WPOnion_Field {
	js_error( err ) {
		let $elem = $wponion.IDtoElement( err.element, this.element );
		if( $elem ) {
			err.error.appendTo( $elem.find( '> .wponion-fieldset' ) );
		}
	}
}
