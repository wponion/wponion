import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		let $this      = this,
			$elem      = $this.element,
			$this_elem = $elem.find( '> .wponion-fieldset > .wponion-tab-wrap ' );

		$this_elem.find( '> ul.wponion-tab-menus li a' ).on( 'click', function( e ) {
			e.preventDefault();
			let $_this = jQuery( this );
			$_this.parent().parent().find( '.wponion-tab-current' ).removeClass( 'wponion-tab-current' );
			$_this.parent().addClass( 'wponion-tab-current' );
			$elem.find( '.wponion-tab-page' ).hide();
			$elem.find( '.wponion-tab-page' ).removeClass( 'wponion-tab-current' );
			let $tab = $_this.attr( 'data-tab-name' );
			$elem.find( 'div#wponion-tab-' + $tab ).addClass( 'wponion-tab-current' ).show();
		} );

		if( $this_elem.find( '> ul.wponion-tab-menus li.current' ).length > 0 ) {
			$this_elem.find( '> ul.wponion-tab-menus li.current a' ).trigger( 'click' );
		} else {
			$this_elem.find( '> ul.wponion-tab-menus li:first-child a' ).trigger( 'click' );
		}
	}
}

export default ( ( w ) => w.wponion_render_field( 'jquery_tab', ( $elem ) => new field( $elem ) ) )( window );
