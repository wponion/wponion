import WPOnion_Theme_Base from '../class/theme-base';

export default class WP_Modern extends WPOnion_Theme_Base {
	init() {
		if( 'settings' === this.module ) {
			this.settings_init_sticky_header();
			this.settings_init_search_input();
		}
	}

	settings_init_sticky_header() {
		if( this.element.find( '.header-sticky' ).length === 1 ) {
			let $this        = this.element.find( '.header-sticky' ),
				$window      = jQuery( window ),
				$inner       = $this.find( '> .inner-container' ),
				padding      = parseInt( $inner.css( 'padding-left' ) ) + parseInt( $inner.css( 'padding-right' ) ),
				offset       = 32,
				scrollTop    = 0,
				ticking      = false,
				stickyUpdate = function() {
					let offsetTop = $this.offset().top,
						stickyTop = Math.max( offset, offsetTop - scrollTop ),
						winWidth  = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 );

					if( stickyTop <= offset && winWidth > 782 ) {
						$inner.css( { width: $this.outerWidth() - padding } );
						$this.css( { height: $this.outerHeight() } ).addClass( 'header-sticky-in' );
					} else {
						$inner.removeAttr( 'style' );
						$this.removeAttr( 'style' ).removeClass( 'header-sticky-in' );
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

	settings_init_search_input() {
		let $input = this.element.find( '.action-search' ).find( 'input' );
		$input.on( 'change keyup', ( e ) => {
			let value         = jQuery( e.currentTarget ).val(),
				$parent_wraps = this.element.find( '.wponion-container-wraps' );
			this.element.find( '.search-no-result' ).hide();
			if( value.length > 3 ) {
				this.element.find( '.menu-wrap' ).addClass( 'wponion-search-unmatched' );
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
							if( this.is_search_matched( jQuery( e ), value ) ) {
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
}
