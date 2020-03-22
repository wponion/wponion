import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( !window.wponion_is_library_exists( 'accordion', 'jquery' ) ) {
			return;
		}
		let $main_element = this.element;
		$main_element.find( '.wponion-accordion-wrap' ).each( function() {
			jQuery( this ).accordion( {
				header: '> .wponion-accordion-title',
				collapsible: true,
				animate: 150,
				heightStyle: 'content',
				icons: {
					'header': 'wpoic-caret-right',
					'activeHeader': 'wpoic-caret-down'
				}
			} );
			if( !jQuery( this ).hasClass( 'is_open' ) ) {
				jQuery( this ).accordion( 'option', 'active', false );
			}
			window.wponion_dependency( jQuery( this ), { nestable: true, parent: $main_element } );
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
