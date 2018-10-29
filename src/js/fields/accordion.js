import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		this.element.find( '.wponion-accordion-wrap' ).each( function() {
			jQuery( this ).accordion( {
				header: '> .wponion-accordion-title',
				collapsible: true,
				animate: 250,
				heightStyle: 'content',
				active: jQuery( this ).hasClass( 'is_open' ),
				icons: {
					'header': 'dashicons dashicons-arrow-right',
					'activeHeader': 'dashicons dashicons-arrow-down'
				}
			} );
		} )
	}
}
