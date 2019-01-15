class WPOnion_Fresh_Theme {
	constructor( $elem ) {
		this.element = $elem;
		this.init_submenu();
		this.init_main_menu();
		this.init_sticky_header();
		this.init_search_input();
	}

	init_sticky_header() {
		if( this.element.find( '.wponion-header-sticky' ).length === 1 ) {
			let $this        = this.element.find( '.wponion-header-sticky' ),
				$window      = jQuery( window ),
				$inner       = $this.find( '.wponion-settings-header-inner' ),
				padding      = parseInt( $inner.css( 'padding-left' ) ) + parseInt( $inner.css( 'padding-right' ) ),
				offset       = 32,
				scrollTop    = 0,
				lastTop      = 0,
				ticking      = false,
				stickyUpdate = function() {
					let offsetTop = $this.offset().top,
						stickyTop = Math.max( offset, offsetTop - scrollTop ),
						winWidth  = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 );

					if( stickyTop <= offset && winWidth > 782 ) {
						$inner.css( { width: $this.outerWidth() - padding } );
						$this.css( { height: $this.outerHeight() } ).addClass( 'wponion-settings-header-sticky' );
					} else {
						$inner.removeAttr( 'style' );
						$this.removeAttr( 'style' ).removeClass( 'wponion-settings-header-sticky' );
					}

				},
				requestTick  = function() {
					if( !ticking ) {
						requestAnimationFrame( function() {
							stickyUpdate();
							ticking = false;
						} );
					}
					ticking = true;

				},
				onSticky     = function() {
					scrollTop = $window.scrollTop();
					requestTick();

				};

			$window.on( 'scroll resize', onSticky );

			onSticky();
		}
	}

	init_main_menu() {
		this.element.find( 'ul.wpo-ftnav > li > a' ).on( 'click', ( e ) => {
			e.preventDefault();

			let $elem = jQuery( e.currentTarget ),
				$href = window.wponion.helper.url_params( $elem.attr( 'href' ) );

			if( $elem.hasClass( 'dropdown' ) ) {
				$elem.parent().find( '> ul' ).slideToggle();
			} else {
				if( false === window.wponion._.isUndefined( $href[ 'parent-id' ] ) ) {
					let $parent      = 'wponion-tab-' + $href[ 'parent-id' ];
					let $all_actives = this.element.find( 'div.wponion-parent-wraps' );
					let $current     = this.element.find( 'div#' + $parent );
					if( $current.length > 0 ) {
						$all_actives.hide();
						$current.show();
						$elem.parent().parent().find( 'a.active:not(ul.meta-submenu li a)' ).removeClass( 'active' );
						$elem.addClass( 'active' );
					} else {
						window.location.href = $elem.attr( 'href' );
					}
				} else {
					window.location.href = $elem.attr( 'href' );
				}
			}
		} );
	}

	init_submenu() {
		this.element.find( '.wpo-ftnav .meta-submenu a' ).on( 'click', ( e ) => {
			e.preventDefault();
			let $elem = jQuery( e.currentTarget );
			let $href = window.wponion.helper.url_params( $elem.attr( 'href' ) );

			if( false === window.wponion._.isUndefined( $href[ 'section-id' ] ) && false === window.wponion._.isUndefined( $href[ 'parent-id' ] ) ) {
				let $parent      = 'wponion-tab-' + $href[ 'parent-id' ],
					$section     = $parent + '-' + $href[ 'section-id' ],
					$all_actives = this.element.find( 'div#' + $parent + ' div.wponion-section-wraps' ),
					$current     = this.element.find( 'div#' + $parent + ' div#' + $section );

				if( $current.length > 0 ) {
					$all_actives.hide();

					jQuery( 'div.wponion-parent-wraps' ).hide();
					jQuery( 'div#' + $parent ).show();

					$current.show();
					this.element.find( '.wpo-ftnav  a' ).removeClass( 'active' );
					$elem.parent().parent().parent().find( '> a' ).addClass( 'active' );
					$elem.addClass( 'active' );
				} else {
					window.location.href = $elem.attr( 'href' );
				}
			} else {
				window.location.href = $elem.attr( 'href' );
			}

		} );
	}

	init_search_input() {
		let $input = this.element.find( '.action-search' ).find( 'input' );

		$input.on( 'change keyup', ( e ) => {
			let value         = jQuery( e.currentTarget ).val(),
				$wrapper      = this.element.find( '.wponion-sections' ),
				$parent_wraps = $wrapper.find( '.wponion-parent-wraps' );


			if( value.length > 3 ) {
				this.element.find( '.menu-wrap' ).addClass( 'wponion-search-unmatched' );
				this.element.find( '.content-wrap' ).addClass( 'full-width' );
				$parent_wraps.addClass( 'wponion-search-matched' );
				$parent_wraps.find( '.wponion-section-wraps' ).addClass( 'wponion-search-matched' );
				$parent_wraps.each( ( i, $parent ) => {
					$parent = jQuery( $parent );
					if( $parent.find( '.wponion-section-wraps' ).length > 0 ) {
						$parent.find( '.wponion-section-wraps' ).each( ( i, $section ) => {
							$section = jQuery( $section );
							$section.find( '> .wponion-element' ).addClass( 'wponion-search-unmatched' );
							$section.find( '> .wponion-element' ).removeClass( 'wponion-search-matched' );
							$section.find( '> .wponion-element' ).each( ( i, $element ) => {
								$element = jQuery( $element );
								$element.find( '.wponion-element-title > h4, .wponion-desc' ).each( ( i, e ) => {
									if( this.is_search_matched( jQuery( e ), value ) ) {
										$element.addClass( 'wponion-search-matched' );
										$element.removeClass( 'wponion-search-unmatched' );
									}
								} );
							} );
						} );

					} else {
						$parent.find( '> .wponion-element' ).addClass( 'wponion-search-unmatched' );
						$parent.find( '> .wponion-element' ).removeClass( 'wponion-search-matched' );
						$parent.find( '> .wponion-element' ).each( ( i, $element ) => {
							$element = jQuery( $element );
							$element.find( '.wponion-element-title > h4, .wponion-desc' ).each( ( i, e ) => {
								if( this.is_search_matched( jQuery( e ), value ) ) {
									$element.addClass( 'wponion-search-matched' );
									$element.removeClass( 'wponion-search-unmatched' );
								}
							} );
						} );
					}
				} );
			} else {
				this.element.find( '.wponion-search-unmatched' ).removeClass( 'wponion-search-unmatched' );
				this.element.find( '.wponion-search-matched' ).removeClass( 'wponion-search-matched' );
				this.element.find( '.content-wrap' ).removeClass( 'full-width' );
			}
		} );
	}

	/**
	 *
	 * @param $title
	 * @param $search
	 * @returns {*}
	 */
	is_search_matched( $title, $search ) {
		return $title.text().match( new RegExp( '.*?' + $search + '.*?', 'i' ) );
	}
}

( ( window, document, wp ) => {
	window.wponion.hooks.addAction( 'wponion_theme_init', 'wponion_core', function( $elem ) {
		if( $elem.hasClass( 'wponion-fresh-theme' ) ) {
			new WPOnion_Fresh_Theme( $elem );
		}
	} );
} )( window, document, wp );
