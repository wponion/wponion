let $wpo_modal_app = Backbone.View.extend( {
	/**
	 * Stores All Modal Template.
	 */
	templates: {},

	events: {
		"click .media-modal-close": "closeModal",
		"click #btn-cancel": "closeModal",
		"click #btn-ok": "saveModal",
		"click .media-menu a": "handle_left_menu_click",
		"click .media-router a": "handle_tab_click",
	},

	active_page: null,

	active_section: null,

	/**
	 * Inits Modal.
	 */
	initialize: function ( options ) {
		options = _.extend( {
			left_menu: false,
			hide_menu: false,
			html: false,
		}, options );


		this.left_menu = options[ 'left_menu' ];
		this.html      = options[ 'html' ];
		this.hide_menu = options[ 'hide_menu' ];
		"use strict";
		_.bindAll( this, 'render', 'preserveFocus', 'closeModal', 'saveModal', 'doNothing' );
		this.init_templates();
		this.render();
	},

	/**
	 * Inits Templates.
	 */
	init_templates: function () {
		let $modal                      = $wponion.settings( 'modal' );
		this.templates.frame_menu_item  = $wponion.template( $modal[ 'frame-menu-item' ] );
		this.templates.router_menu_item = $wponion.template( $modal[ 'router-menu-item' ] );
		this.templates.window           = $wponion.template( $modal[ 'html' ] );
		this.templates.page_content     = $wponion.template( $modal[ 'page_content' ] );
		this.templates.section_content  = $wponion.template( $modal[ 'section_content' ] );
	},

	/**
	 * Renders HTML.
	 */
	render: function () {
		"use strict";
		let $this = this;
		$this.$el.attr( 'tabindex', '0' ).append( $this.templates.window() );

		if ( $this.left_menu ) {
			_.each( $this.left_menu, function ( value, key ) {
				$this.$( '.media-menu' ).append( $this.templates.frame_menu_item( {
					url: key,
					name: value,
				} ) );
			} );
		}

		if ( this.html ) {
			_.each( $this.html, function ( value, key ) {
				if ( typeof value[ 'sections' ] !== "undefined" ) {
					let $content = $this.templates.page_content( {
						id: key,
						title: value[ 'title' ],
						html: value[ 'html' ],
					} );
					$content     = $( $content );
					$content.find( '.media-sidebar' ).remove();

					_.each( value[ 'sections' ], function ( val, k ) {
						let $_content = $this.templates.section_content( {
							id: key + "_" + k,
							title: val[ 'title' ],
							html: val[ 'html' ],
						} );
						let $_menu    = $this.templates.router_menu_item( { url: k, name: val[ 'title' ] } );

						$_content = $( $_content );
						$_content.find( '.media-sidebar' ).hide();
						if ( typeof val[ 'sidebar' ] !== "undefined" ) {
							if ( value[ 'sidebar' ] !== false ) {
								$_content.find( '.media-sidebar' ).append( val[ 'sidebar' ] ).show();
							}
						}

						$content.find( '.media-frame-content' ).append( $_content );
						$content.find( '.media-router' ).append( $_menu );
					} );

					$this.$( '.wponion-modal-content-container' ).append( $content );
				} else {
					let $content = $this.templates.page_content( {
						id: key,
						title: value[ 'title' ],
						html: value[ 'html' ],
					} );

					$content = $( $content );
					$content.find( '.media-sidebar' ).hide();

					if ( typeof value[ 'sidebar' ] !== "undefined" ) {
						if ( value[ 'sidebar' ] !== false ) {
							$content.find( '.media-sidebar' ).append( value[ 'sidebar' ] ).show();
						}
					}

					$content.find( '.media-frame-router' ).addClass( 'hidden' );
					$this.$( '.wponion-modal-content-container' ).append( $content );
				}
			} )
		}

		$this.$( '.media-menu a:first-child' ).trigger( 'click' );
		$this.$( '.wponion-modal-content-container > .wponion-modal-content:not(.hidden) .media-frame-router a:first-child' )
			 .trigger( 'click' );


		if ( $this.hide_menu === true ) {
			$this.$( '.media-frame' ).addClass( 'hide-menu' );
		}

		jQuery( document ).on( "focusin", this.preserveFocus );
		jQuery( "body" ).css( { "overflow": "hidden" } ).append( $this.$el );
		$this.$el.focus();
	},

	/**
	 * Handles Left Menu Click Event.
	 * @param e
	 */
	handle_left_menu_click: function ( e ) {
		e.preventDefault();
		let $target = $( e.target );
		$( this.$el ).find( '.media-menu a.active' ).removeClass( 'active' );
		$target.addClass( 'active' );
		let $show_target = $( this.$el ).find( '.wponion-modal-content-container > div#' + $target.attr( 'href' ) );
		$( this.$el ).find( '.wponion-modal-content-container > div' ).addClass( 'hidden' );
		$show_target.removeClass( 'hidden' );

		if ( $show_target.find( '.media-frame-router' ).hasClass( 'hidden' ) ) {
			$( this.$el ).find( '.media-frame' ).addClass( 'hide-router' );
		} else {
			$( this.$el ).find( '.media-frame' ).removeClass( 'hide-router' );
		}
		this.active_page    = $target.attr( 'href' );
		this.active_section = null;
	},

	handle_tab_click: function ( e ) {
		e.preventDefault();
		let $target         = $( e.target );
		this.active_section = $target.attr( 'href' );
		let $page           = $( this.$el ).find( '.media-frame-menu a.active' ).attr( 'href' );
		let $base           = $( this.$el ).find( '.wponion-modal-content-container > #' + this.active_page );


		$target.parent().find( '.active' ).removeClass( 'active' );
		$target.addClass( 'active' );
		$base.find( '.wponion-section-modal-content' ).hide();
		$base.find( '#' + this.active_page + '_' + this.active_section ).show();

	},

	/**
	 * Ensures that keyboard focus remains within the Modal dialog.
	 * @param e {object} A jQuery-normalized event object.
	 */
	preserveFocus: function ( e ) {
		"use strict";
		if ( this.$el[ 0 ] !== e.target && !this.$el.has( e.target ).length ) {
			this.$el.focus();
		}
	},

	/**
	 * Closes the modal and cleans up after the instance.
	 * @param e {object} A jQuery-normalized event object.
	 */
	closeModal: function ( e ) {
		"use strict";

		e.preventDefault();
		this.undelegateEvents();
		jQuery( document ).off( "focusin" );
		jQuery( "body" ).css( { "overflow": "auto" } );
		this.remove();
	},

	/**
	 * Responds to the btn-ok.click event
	 * @param e {object} A jQuery-normalized event object.
	 * @todo You should make this your own.
	 */
	saveModal: function ( e ) {
		"use strict";
		this.closeModal( e );
	},

	/**
	 * Ensures that events do nothing.
	 * @param e {object} A jQuery-normalized event object.
	 * @todo You should probably delete this and add your own handlers.
	 */
	doNothing: function ( e ) {
		"use strict";
		e.preventDefault();
	}

} );

/**
 *
 */
class WPO_Modal {
	constructor ( $options ) {
		this.options = ( typeof $options === "undefined" ) ? {} : $options;
		this.options = _.extend( {
			id: false,
			data: false,
			className: "wponion-modal",
			modal: {},
			hide_menu: false,
		}, this.options );

		let $ex_options = _.extend( {
			left_menu: this.get_left_menu(),
			html: this.options[ 'data' ],
			hide_menu: this.options[ 'hide_menu' ],
		}, this.options[ 'modal' ] );

		new $wpo_modal_app( $ex_options );
	}

	get_left_menu () {
		let $return = false;
		if ( this.options[ 'data' ] ) {
			$return = {};
			_.each( this.options[ 'data' ], function ( $data, $key ) {
				if ( typeof $data[ 'menu_title' ] !== "undefined" ) {
					$return[ $key ] = $data[ 'menu_title' ];
				} else {
					$return[ $key ] = $data[ 'title' ];
				}

			} )
		}
		return $return;
	}


}
