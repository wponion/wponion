import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $wrap      = this.element.find( '> .row > .wponion-fieldset > .wponion-tab-wrap' ),
			$menu_wrap = $wrap.find( '> ul.wponion-tab-menus' ),
			$tab_pages = $wrap ;

		$menu_wrap.find( ' li a' ).on( 'click', function( e ) {
			e.preventDefault();
			let $elem = jQuery( this );
			$elem.parent().parent().find( '.wponion-tab-current' ).removeClass( 'wponion-tab-current' );
			$elem.parent().addClass( 'wponion-tab-current' );
			$elem.find( '.wponion-tab-page' ).hide();
			$elem.find( '.wponion-tab-page' ).removeClass( 'wponion-tab-current' );
			let $tab = $elem.attr( 'data-tab-name' );
			$tab_pages.find( '> div' ).hide().removeClass( 'wponion-tab-current' );
			$tab_pages.find( '> div#wponion-tab-' + $tab ).addClass( 'wponion-tab-current' ).show();
		} );

		if( $menu_wrap.find( '> li.current' ).length > 0 ) {
			$menu_wrap.find( '> li.current a' ).trigger( 'click' );
		} else {
			$menu_wrap.find( '> li:first-child a' ).trigger( 'click' );
		}
	}
}
