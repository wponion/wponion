import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

class field extends WPOnion_Field {
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

	js_error( err ) {
		let $elem = $wponion.IDtoElement( err.element, this.element );
		if( $elem ) {
			err.error.appendTo( $elem.find( '> .wponion-fieldset' ) );
		}
	}
}

export default ( ( w ) => w.wponion_render_field( 'accordion', ( $elem ) => new field( $elem ) ) )( window );
