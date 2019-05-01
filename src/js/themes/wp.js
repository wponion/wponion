class WP {
	constructor( $elem ) {
		this.element = $elem;
		if( this.element.hasClass( 'wponion-settings' ) ) {
			this.settings_menu_handler();
			this.settings_init_search_input();
		}
		if( this.element.hasClass( 'wponion-metabox' ) ) {
			this.metabox_menu_handler();
		}
	}

	metabox_menu_handler() {
		this.settings_main_menu();
		this.settings_submenu();
	}

	settings_menu_handler() {
		if( this.element.hasClass( 'wponion-single-page' ) ) {
			this.settings_main_menu();
			this.settings_submenu();
		}
		if( this.element.hasClass( 'wponion-submenu-single-page' ) ) {
			this.settings_submenu();
		}
	}

	settings_main_menu() {
		this.element.find( '.main-navigation .nav-tab-wrapper a' ).on( 'click', ( e ) => {
			e.preventDefault();
			let $elem = jQuery( e.currentTarget );
			let $href = window.wponion.helper.url_params( $elem.attr( 'href' ) );

			if( false === window.wponion._.isUndefined( $href[ 'container-id' ] ) ) {
				let $lookup = this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] );
				if( $lookup.length > 0 ) {
					this.element.find( '.wponion-container-wraps' ).hide();
					$lookup.show();
					this.element.find( 'nav.nav-tab-wrapper a.nav-tab-active' ).removeClass( 'nav-tab-active' );
					$elem.addClass( 'nav-tab-active' );
					$lookup.find( '.wponion-submenus a.current' ).click();
				} else {
					window.location.href = $elem.attr( 'href' );
				}
			} else {
				window.location.href = $elem.attr( 'href' );
			}
		} );
	}

	settings_submenu() {
		this.element.find( '.wponion-submenus a' ).on( 'click', ( e ) => {
			e.preventDefault();
			let $elem = jQuery( e.currentTarget );
			let $href = window.wponion.helper.url_params( $elem.attr( 'href' ) );

			if( false === window.wponion._.isUndefined( $href[ 'container-id' ] ) ) {
				let $lookup = this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] );
				if( $lookup.length > 0 ) {
					$lookup.find( '.wponion-submenus a.current' ).removeClass( 'current' );
					$elem.addClass( 'current' );

					if( false === window.wponion._.isUndefined( $href[ 'sub-container-id' ] ) ) {
						$lookup = $lookup.find( 'div#wponion-tab-' + $href[ 'container-id' ] + '-' + $href[ 'sub-container-id' ] );
						if( $lookup.length > 0 ) {
							this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] + ' .wponion-sub-container-wraps ' )
								.hide();
							$lookup.show();
						} else {
							window.location.href = $elem.attr( 'href' );
						}
					} else {
						window.location.href = $elem.attr( 'href' );
					}
				} else {
					window.location.href = $elem.attr( 'href' );
				}
			} else {
				window.location.href = $elem.attr( 'href' );
			}
		} );
	}

	settings_init_search_input() {
		let $input = this.element.find( '.action-search' ).find( 'input' );

		$input.on( 'change keyup', ( e ) => {
			let value         = jQuery( e.currentTarget ).val(),
				$parent_wraps = this.element.find( '.wponion-container-wraps' );
			this.element.find( '.search-no-result' ).hide();

			if( value.length > 3 ) {
				this.element.find( '.wponion-submenus' ).addClass( 'wponion-search-unmatched' );
				this.element.find( '.content-outer-wrap' ).addClass( 'full-width' );
				$parent_wraps.addClass( 'wponion-search-matched' );
				this.element.find( '.wponion-has-callback' ).addClass( 'wponion-search-unmatched' );
				this.element.find( '.wponion-has-callback' ).removeClass( 'wponion-search-matched' );

				$parent_wraps.each( ( i, $parent ) => {
					$parent = jQuery( $parent );
					$parent.find( '> .wponion-element' ).addClass( 'wponion-search-unmatched' );
					$parent.find( '> .wponion-element' ).removeClass( 'wponion-search-matched' );
					$parent.find( '> .wponion-element' ).each( ( i, $element ) => {
						$element = jQuery( $element );
						$element.find( '.wponion-element-title > h4, .wponion-desc' ).each( ( i, e ) => {
							if( this.settings_is_search_matched( jQuery( e ), value ) ) {
								$element.addClass( 'wponion-search-matched' );
								$element.removeClass( 'wponion-search-unmatched' );
							}
						} );
					} );
				} );

				if( this.element.find( '.wponion-element:visible' ).length === 0 ) {
					this.element.find( '.search-no-result' ).show();
				}
			} else {
				this.element.find( '.search-no-result' ).hide();
				this.element.find( '.wponion-search-unmatched' ).removeClass( 'wponion-search-unmatched' );
				this.element.find( '.wponion-search-matched' ).removeClass( 'wponion-search-matched' );
				this.element.find( '.content-outer-wrap' ).removeClass( 'full-width' );
			}
		} );
	}

	/**
	 *
	 * @param $title
	 * @param $search
	 * @returns {*}
	 */
	settings_is_search_matched( $title, $search ) {
		return $title.text().match( new RegExp( '.*?' + $search + '.*?', 'i' ) );
	}
}

( ( window ) => {
	window.wponion.hooks.addAction( 'wponion_theme_init', 'wponion_core', ( $elem ) => {
		if( $elem.hasClass( 'wponion-wp-theme' ) ) {
			new WP( $elem );
		}
	} );
} )( window );
