import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( !window.wponion_is_library_exists( 'accordion', 'jquery' ) ) {
			return;
		}
		this.element.find( '.wponion-accordion-wrap' ).each( function() {
			jQuery( this ).accordion( {
				header: '> .wponion-accordion-title',
				collapsible: true,
				animate: 150,
				heightStyle: 'content',
				icons: {
					'header': 'dashicons dashicons-arrow-right',
					'activeHeader': 'dashicons dashicons-arrow-down'
				}
			} );

			if( !jQuery( this ).hasClass( 'is_open' ) ) {
				jQuery( this ).accordion( 'option', 'active', false );
			}
		} );
	}

	/**
	 * Handles Javascript Error Placement.
	 * @param err
	 */
	js_error( err ) {
		let $elem = window.wpo_core.IDtoElement( err.element, this.element );
		if( $elem ) {
			err.error.appendTo( $elem.find( '> .row > .wponion-fieldset' ) );
		}
	}
}
