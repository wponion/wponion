import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {

		//this.element.find( '.hover-effect .wponion-field-title h4' ).append( ' | <small>Hover</small>' );
		this.element.find( 'div#enable_hover' ).on( 'click', 'input[type=checkbox]', ( e ) => {
			let $elem = jQuery( e.currentTarget );
			if( $elem.prop( 'checked' ) ) {
				this.element.find( 'div.hover-effect' ).slideDown();
			} else {
				this.element.find( 'div.hover-effect' ).slideUp();
				this.element.find( 'div.hover-effect :input' ).val( '' ).trigger( 'change' );
			}
		} );
	}
}
