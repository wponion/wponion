import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.element.find( '.faq .faq-title' ).hasClass( 'active' ) ) {
			this.element.find( '.faq .faq-title.active' ).closest( '.faq' ).find( '.faq-inner' ).show();
		}
		this.element.find( '.faq .faq-title' ).on( 'click', function() {
			if( jQuery( this ).hasClass( 'active' ) ) {
				jQuery( this ).removeClass( 'active' ).closest( '.faq' ).find( '.faq-content' ).slideUp( 200 );
			} else {
				jQuery( this ).addClass( 'active' ).closest( '.faq' ).find( '.faq-content' ).slideDown( 200 );
			}
		} );
	}
}
