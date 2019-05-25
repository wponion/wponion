export default ( ( window, document, $, wp ) => {
	$( window ).on( 'load', () => {
		let $html = window.wponion.core.windowArgs( 'wponion_page_actions', false );

		if( false !== $html ) {
			$html = jQuery( $html );
			if( jQuery( '.page-title-action' ).length > 0 ) {
				jQuery( '.page-title-action' ).after( $html );

			} else if( jQuery( '.wp-heading-inline' ).length > 0 ) {
				jQuery( '.wp-heading-inline' ).after( $html );
			}
		}
	} );
} )( window, document, jQuery, wp );

