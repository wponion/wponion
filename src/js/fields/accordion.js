import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
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
		let $elem = $wponion.IDtoElement( err.element, this.element );
		if( $elem ) {
			err.error.appendTo( $elem.find( '> .row > .wponion-fieldset' ) );
		}
	}
}

export default ( ( w ) => w.wponion_register_field( 'accordion', ( $elem ) => new field( $elem ) ) )( window );
