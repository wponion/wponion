import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.element.find( '.json-output' ).jsonView( this.option( 'values' ) );
	}
}
