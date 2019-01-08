class WPOnion_Modern_Theme {
	constructor( $elem ) {
		this.element = $elem;

		if( this.element.hasClass( 'wponion-submenu-single-page' ) ) {
			this.init_submenu();
		}

		if( this.element.hasClass( 'wponion-single-page' ) ) {
			this.init_submenu();
			this.init_main_menu();
		}
	}

	init_submenu() {
		let $this = this;
		$this.element.find( '.wponion-submenus.subsubsub a' ).on( 'click', function( e ) {
			e.preventDefault();
			let $href = $wponion_helper.url_params( jQuery( this ).attr( 'href' ) );

			if( false === $wponion_helper.is_undefined( $href[ 'section-id' ] ) && false === $wponion_helper.is_undefined( $href[ 'parent-id' ] ) ) {
				let $parent      = 'wponion-tab-' + $href[ 'parent-id' ],
					$section     = $parent + '-' + $href[ 'section-id' ],
					$all_actives = $this.element.find( 'div#' + $parent + ' div.wponion-section-wraps' ),
					$current     = $this.element.find( 'div#' + $parent + ' div#' + $section );
				$all_actives.hide();
				$current.show();
				jQuery( this ).parent().parent().find( 'a.current' ).removeClass( 'current' );
				jQuery( this ).addClass( 'current' );
			} else {
				jQuery( '.wponion-framework.wponion-module-settings .page-loader' ).show();
				window.location.href = jQuery( this ).attr( 'href' );
			}
		} );
	}

	init_main_menu() {
		let $this = this;
		$this.element.find( 'nav.nav-tab-wrapper a' ).on( 'click', function( e ) {
			e.preventDefault();
			let $href = $wponion_helper.url_params( jQuery( this ).attr( 'href' ) );

			if( false === $wponion_helper.is_undefined( $href[ 'parent-id' ] ) ) {
				let $parent      = 'wponion-tab-' + $href[ 'parent-id' ];
				let $all_actives = $this.element.find( ' div.wponion-parent-wraps' );
				let $current     = $this.element.find( 'div#' + $parent );
				$all_actives.hide();
				$current.show();
				jQuery( this ).parent().find( 'a.nav-tab-active ' ).removeClass( 'nav-tab-active ' );
				jQuery( this ).addClass( 'nav-tab-active ' );
			} else {
				jQuery( '.wponion-framework.wponion-module-settings .page-loader' ).show();
				window.location.href = jQuery( this ).attr( 'href' );
			}
		} );
	}
}

( ( window, document, wp ) => {
	wp.hooks.addAction( 'wponion_theme_init', 'wponion_core', ( $elem ) => {
		if( $elem.hasClass( 'wponion-modern-theme' ) ) {
			new WPOnion_Modern_Theme( $elem );
		}
	} );
} )( window, document, wp );
