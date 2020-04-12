import WPOnion_Theme_Base from '../class/theme-base';

export default class WP_WC_WP_Lite extends WPOnion_Theme_Base {
	init() {
		if( 'settings' === this.module ) {
			let $main = this.element.find( '.wponion-container-wraps:not(.hidden)' );
			if( $main.hasClass( 'wponion-has-containers' ) ) {
				this.hide_element_non_ui( $main.find( '.wponion-sub-container-wraps:not(.hidden)' ) );
			} else {
				this.hide_element_non_ui( $main );
			}
			this.settings_main_menu();
			this.settings_submenu();
			this.settings_init_search_input();
		}

		if( 'metabox' === this.module && 'wp' === this.theme || 'wc' === this.theme ) {
			this.settings_main_menu();
			this.settings_submenu();
		}
	}

	settings_main_menu() {
		let $elem = ( this.element.hasClass( 'wponion-wc-theme' ) ) ? '.main-navigation nav a' : '.main-navigation .nav-tab-wrapper a';
		this.element.find( $elem ).on( 'click', ( e ) => {
			let $elem = jQuery( e.currentTarget );

			if( $elem.hasClass( 'wpo-internal-href' ) && !e.ctrlKey && e.which !== 2 && e.which !== 3 ) {
				let $href = window.wponion.helper.url_params( $elem.attr( 'href' ) );

				if( false === window.wponion._.isUndefined( $href[ 'container-id' ] ) ) {
					let $lookup = this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] );
					if( $lookup.length > 0 ) {
						e.preventDefault();
						this.element.parent().find( 'input[name="container-id"]' ).val( $href[ 'container-id' ] );
						this.element.find( '.wponion-container-wraps' ).hide();
						$lookup.show();
						if( this.element.hasClass( 'wponion-wc-theme' ) ) {
							this.element.find( 'nav a.wpo-tab-active' ).removeClass( 'wpo-tab-active' );
							$elem.addClass( 'wpo-tab-active' );
						} else {
							this.element.find( 'nav.nav-tab-wrapper a.nav-tab-active' ).removeClass( 'nav-tab-active' );
							$elem.addClass( 'nav-tab-active' );
						}

						if( $lookup.find( '.wponion-submenus' ).length > 0 ) {
							if( $lookup.find( '.wponion-submenus a.current' ).length === 0 ) {
								$lookup.find( '.wponion-submenus li:first-child a' ).click();
							} else {
								$lookup.find( '.wponion-submenus a.current' ).click();
							}
						} else {
							this.hide_element_non_ui( $lookup );
						}
					} else if( false === $elem.hasClass( 'disabled' ) ) {
						//window.location.href = $elem.attr( 'href' );
					}
				} else if( false === $elem.hasClass( 'disabled' ) ) {
					//window.location.href = $elem.attr( 'href' );
				}
			}
		} );
	}

	settings_submenu() {
		this.element.find( '.wponion-submenus a' ).on( 'click', ( e ) => {
			let $elem = jQuery( e.currentTarget );
			if( $elem.hasClass( 'wpo-internal-href' ) && !e.ctrlKey && e.which !== 2 && e.which !== 3 ) {
				let $found = false,
					$href  = window.wponion.helper.url_params( $elem.attr( 'href' ) );

				if( false === window.wponion._.isUndefined( $href[ 'container-id' ] ) ) {
					let $base_lookup = this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] );
					if( $base_lookup.length > 0 ) {
						if( false === window.wponion._.isUndefined( $href[ 'sub-container-id' ] ) ) {
							let $lookup = $base_lookup.find( 'div#wponion-tab-' + $href[ 'container-id' ] + '-' + $href[ 'sub-container-id' ] );
							if( $lookup.length > 0 ) {
								e.preventDefault();
								let $parent = this.element.parent();
								$parent.find( 'input[name="container-id"]' ).val( $href[ 'container-id' ] );
								$parent.find( 'input[name="sub-container-id"]' ).val( $href[ 'sub-container-id' ] );
								this.element.find( 'div#wponion-tab-' + $href[ 'container-id' ] + ' .wponion-sub-container-wraps ' )
									.hide();
								$lookup.show();
								$base_lookup.find( '.wponion-submenus a.current' ).removeClass( 'current' );
								$elem.addClass( 'current' );
								$found = true;
								this.hide_element_non_ui( $lookup );
							}
						}
					}
				}

				if( false === $found && false === $elem.hasClass( 'disabled' ) ) {
					//window.location.href = $elem.attr( 'href' );
				}
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
				this.element.find( '.wponion-submenus' ).parent().addClass( 'wponion-search-unmatched' );
				this.element.find( '.content-outer-wrap' ).addClass( 'full-width' );
				this.element.find( '.wponion-has-callback' ).addClass( 'wponion-search-unmatched' );
				this.element.find( '.wponion-has-callback' ).removeClass( 'wponion-search-matched' );

				$parent_wraps.each( ( i, $parent ) => {
					$parent = jQuery( $parent );
					$parent.find( '> .wponion-element' ).addClass( 'wponion-search-unmatched' );
					$parent.find( '> .wponion-element' ).removeClass( 'wponion-search-matched' );
					$parent.find( '> .wponion-element' ).each( ( i, $element ) => {
						$element = jQuery( $element );
						$element.find( '.wponion-element-title > h4, .wponion-desc' ).each( ( i, e ) => {
							if( this.is_search_matched( jQuery( e ), value ) ) {
								$element.addClass( 'wponion-search-matched' );
								$element.removeClass( 'wponion-search-unmatched' );
								$parent.addClass( 'wponion-search-matched' );
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
	 * @param $container
	 */
	hide_element_non_ui( $container ) {
		if( WPOnion_Theme_Base.has_only_uifields( $container ) ) {
			this.element.find( '.action-buttons' ).hide();
			this.element.find( 'footer' ).hide();
			this.element.find( 'button.wponion-save' ).hide();
		} else {
			this.element.find( '.action-buttons' ).show();
			this.element.find( 'footer' ).show();
			this.element.find( 'button.wponion-save' ).show();
		}
	}
}
