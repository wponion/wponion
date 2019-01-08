class WPOnion_WP_Theme {
	constructor( $elem ) {
		this.element = $elem;
		if( this.element.hasClass( 'wponion-submenu-single-page' ) ) {
			this.init_submenu();
		}

		if( this.element.hasClass( 'wponion-single-page' ) ) {
			this.init_main_menu();
			this.init_submenu();
		}
	}

	init_submenu() {
		let $this = this;
		$this.element.find( '.wponion-submenus.subsubsub a' ).on( 'click', function( e ) {
			e.preventDefault();
			let $href = window.wponion.helper.url_params( jQuery( this ).attr( 'href' ) );

			if( false === window.wponion._.isUndefined( $href[ 'section-id' ] ) && false === window.wponion._.isUndefined( $href[ 'parent-id' ] ) ) {
				let $parent      = 'wponion-tab-' + $href[ 'parent-id' ],
					$section     = $parent + '-' + $href[ 'section-id' ],
					$all_actives = $this.element.find( 'div#' + $parent + ' div.wponion-section-wraps' ),
					$current     = $this.element.find( 'div#' + $parent + ' div#' + $section );
				$all_actives.hide();
				$current.show();
				jQuery( this ).parent().parent().find( 'a.current' ).removeClass( 'current' );
				jQuery( this ).addClass( 'current' );
			} else {
				window.location.href = jQuery( this ).attr( 'href' );
			}
		} );
	}

	init_main_menu() {
		let $this = this;
		$this.element.find( 'nav.nav-tab-wrapper a' ).on( 'click', function( e ) {
			e.preventDefault();
			let $href = window.wponion.helper.url_params( jQuery( this ).attr( 'href' ) );

			if( false === window.wponion._.isUndefined( $href[ 'parent-id' ] ) ) {
				let $parent      = 'wponion-tab-' + $href[ 'parent-id' ],
					$all_actives = $this.element.find( ' div.wponion-parent-wraps' ),
					$current     = $this.element.find( 'div#' + $parent );
				$all_actives.hide();
				$current.show();
				jQuery( this ).parent().find( 'a.nav-tab-active ' ).removeClass( 'nav-tab-active ' );
				jQuery( this ).addClass( 'nav-tab-active ' );
			} else {
				window.location.href = jQuery( this ).attr( 'href' );
			}
		} );
	}
}

( ( window, document, wp ) => {
	wp.hooks.addAction( 'wponion_theme_init', 'wponion_core', ( $elem ) => {
		if( $elem.hasClass( 'wponion-wp-theme' ) ) {
			new WPOnion_WP_Theme( $elem );
		}
	} );
} )( window, document, wp );
