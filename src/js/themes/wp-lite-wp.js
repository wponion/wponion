class WP {
	constructor( $elem ) {
		this.element = $elem;
		if( this.element.hasClass( 'wponion-settings' ) ) {
			this.settings_menu_handler();
			this.settings_init_search_input();
		}
		if( this.element.hasClass( 'wponion-metabox' ) && ( this.element.hasClass( 'wponion-wp-theme' ) && this.element.hasClass( 'wponion-wc-theme' ) ) ) {
			this.metabox_menu_handler();
		}
	}

	metabox_menu_handler() {
		this.settings_main_menu();
		this.settings_submenu();
	}

	settings_menu_handler() {
		this.settings_main_menu();
		this.settings_submenu();
	}


	settings_main_menu() {
		let $elem = ( this.element.hasClass( 'wponion-wc-theme' ) ) ? '.main-navigation nav a' : '.main-navigation .nav-tab-wrapper a';
		this.element.find( $elem ).on( 'click', ( e ) => {
			e.preventDefault();
			let $elem = jQuery( e.currentTarget );
			let $href = window.wponion.helper.url_params( $elem.attr( 'href' ) );

			if( false === window.wponion._.isUndefined( $href[ 'container-id' ] ) ) {
				let $lookup = this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] );
				if( $lookup.length > 0 ) {
					this.element.find( '.wponion-container-wraps' ).hide();
					$lookup.show();
					if( this.element.hasClass( 'wponion-wc-theme' ) ) {
						this.element.find( 'nav a.wpo-tab-active' ).removeClass( 'wpo-tab-active' );
						$elem.addClass( 'wpo-tab-active' );
					}else{
						this.element.find( 'nav.nav-tab-wrapper a.nav-tab-active' ).removeClass( 'nav-tab-active' );
						$elem.addClass( 'nav-tab-active' );
					}
					if( $lookup.find( '.wponion-submenus a.current' ).length === 0 ) {
						$lookup.find( '.wponion-submenus li:first-child a' ).click();
					} else {
						$lookup.find( '.wponion-submenus a.current' ).click();
					}
				} else if( false === $elem.hasClass( 'disabled' ) ) {
					window.location.href = $elem.attr( 'href' );
				}
			} else if( false === $elem.hasClass( 'disabled' ) ) {
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
				let $base_lookup = this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] );
				if( $base_lookup.length > 0 ) {
					if( false === window.wponion._.isUndefined( $href[ 'sub-container-id' ] ) ) {
						let $lookup = $base_lookup.find( 'div#wponion-tab-' + $href[ 'container-id' ] + '-' + $href[ 'sub-container-id' ] );
						if( $lookup.length > 0 ) {
							this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] + ' .wponion-sub-container-wraps ' )
								.hide();
							$lookup.show();
							$base_lookup.find( '.wponion-submenus a.current' ).removeClass( 'current' );
							$elem.addClass( 'current' );
						} else if( false === $elem.hasClass( 'disabled' ) ) {
							window.location.href = $elem.attr( 'href' );
						}
					} else if( false === $elem.hasClass( 'disabled' ) ) {
						window.location.href = $elem.attr( 'href' );
					}
				} else if( false === $elem.hasClass( 'disabled' ) ) {
					window.location.href = $elem.attr( 'href' );
				}
			} else if( false === $elem.hasClass( 'disabled' ) ) {
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
		if( $elem.hasClass( 'wponion-wp-theme' ) || $elem.hasClass( 'wponion-wp_lite-theme' ) || $elem.hasClass( 'wponion-wc-theme' ) ) {
			new WP( $elem );
		}
	} );
} )( window );
