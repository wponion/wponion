import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

export default class extends WPOnion_Field {
	init() {
		this.element.find( '.wponion-accordion-wrap' ).each( function() {
			jQuery( this ).accordion( {
				header: '> .wponion-accordion-title',
				collapsible: true,
				animate: 150,
				heightStyle: 'content',
				active: jQuery( this ).hasClass( 'is_open' ),
				icons: {
					'header': 'dashicons dashicons-arrow-right',
					'activeHeader': 'dashicons dashicons-arrow-down'
				}
			} );
		} );
	}

	js_error( err ) {
		let $elem = $wponion.IDtoElement( err.element, this.element );
		if( $elem ) {
			err.error.appendTo( $elem.find( '> .wponion-fieldset' ) );
		}
	}
}
