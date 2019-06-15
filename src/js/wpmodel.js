/**
 * Events : before_close, after_close, page_open_{page}, section_open_{page}_{section}
 */
export default Backbone.View.extend( {
	// Stores All Templates HTML.
	templates: {},

	// Registers Events.
	events: {
		'click .media-modal-close': 'closeModal',
		'click #btn-cancel': 'closeModal',
		'click #btn-ok': 'saveModal',
		'click .media-menu a': 'handle_main_menu',
		'click .media-router a': 'handle_tab_click',
	},

	// Stores Active Page.
	active_page: null,

	// Stores Active Section.
	active_section: null,

	/**
	 * Inits Modal Class.
	 * @param $modal_options
	 * @param $html
	 */
	initialize: function( $modal_options = {}, $html = {} ) {
		this.options    = _.extend( {
			size: 'small',
		}, $modal_options );
		this.modal_html = $html;

		'use strict';
		_.bindAll( this, 'render', 'preserveFocus', 'closeModal', 'saveModal' );
	},

	/**
	 * Opens Modal.
	 */
	open: function() {
		this.trigger( 'before_open' );
		this.init_templates();
		this.render();
		this.trigger( 'open' );
	},

	/**
	 * Inits Templates.
	 */
	init_templates: function() {
		let $modal                      = window.wponion.core.option( 'modal' );
		this.templates.frame_menu_item  = window.wponion.core.template( $modal.frame_menu_item );
		this.templates.router_menu_item = window.wponion.core.template( $modal.router_menu_item );
		this.templates.window           = window.wponion.core.template( $modal.html );
		this.templates.page_content     = window.wponion.core.template( $modal.page_content );
		this.templates.section_content  = window.wponion.core.template( $modal.section_content );
		this.trigger( 'template_loaded' );
	},

	/**
	 * Returns Container Defaults.
	 * @return {{sidebar: boolean, html: boolean, id: boolean, title: boolean}}
	 */
	container_defaults: function() {
		return { id: false, title: false, html: false, sidebar: false };
	},

	/**
	 * Activates First Menu.
	 */
	activate_main_menu: function( $sub_menu = false ) {
		if( false === $sub_menu ) {
			if( this.$el.find( '.media-menu > .media-menu-item.active' ).length === 0 ) {
				this.$el.find( '.media-menu > .media-menu-item:first-child' ).click();
			}
		} else {
			if( $sub_menu.find( '.media-frame-router .media-router > .active' ).length === 0 ) {
				$sub_menu.find( '.media-frame-router .media-router > a:first-child' ).click();
			}
		}
	},

	/**
	 * Renders Main HTML.
	 */
	render: function() {
		this.$el.attr( 'tabindex', '0' ).append( this.templates.window() );
		this.$wpomodal = this.$el.find( '.wponion-wp-modal' );
		if( !window.wponion._.isUndefined( this.modal_html.title ) && !window.wponion._.isUndefined( this.modal_html.html ) ) {
			this.render_single();
		} else {
			this.render_containers();
			this.activate_main_menu();
		}

		this.$wpomodal.addClass( 'wponion-wp-modal-' + this.options.size );
		jQuery( document ).on( 'focusin', this.preserveFocus );
		jQuery( 'body' ).css( { 'overflow': 'hidden' } ).append( this.$el );
		this.$el.focus();
	},

	/**
	 * Renders Single Layout View.
	 */
	render_single: function() {
		this.active_page = this.modal_html.id;
		this.$wpomodal.addClass( 'wponion-single-modal-view' );
		this.$el.find( '.media-frame-menu' ).remove();
		let $_content = this.render_single_content( false, false, this.templates.page_content );
		this.$el.find( '.wponion-modal-content-container > div' ).removeClass( 'hidden' );
		if( window.wponion._.isUndefined( this.modal_html.sections ) ) {
			jQuery( this.$el ).find( '.media-frame' ).addClass( 'hide-router' );
		} else {
			this.render_sub_containers( this.modal_html, $_content );
			this.activate_main_menu( this.$el );
		}
	},

	/**
	 * Renders Single Content.
	 * @param $container
	 * @param $appendTo
	 * @param $template
	 * @param $parent_id
	 * @return {n.fn.init|jQuery|HTMLElement}
	 */
	render_single_content: function( $container = false, $appendTo = false, $template = false, $parent_id = '' ) {
		$container    = ( false === $container ) ? this.modal_html : $container;
		$container    = _.extend( this.container_defaults(), $container );
		let $_content = jQuery( $template( { id: $parent_id + $container.id, title: $container.title } ) );

		$_content.find( '.media-sidebar' ).addClass( 'hidden' );

		if( !$container.sections ) {
			$_content.find( '.media-content' ).html( $container.html );
			if( false !== $container.sidebar && window.wponion._.isString( $container.sidebar ) ) {
				$_content.find( '.media-sidebar' ).html( $container.sidebar ).removeClass( 'hidden' );
			}
		}

		$_content.find( '.media-frame-title' ).addClass( 'hidden' );

		if( false !== $container.title && window.wponion._.isString( $container.title ) ) {
			$_content.find( '.media-frame-title' ).removeClass( 'hidden' );
		}

		let $elem = ( $appendTo ) ? $appendTo : this.$el.find( '.wponion-modal-content-container' );
		$elem.append( $_content );
		return $_content;
	},

	/**
	 * Renders Sub Containers.
	 * @param $container
	 * @param $parent_content
	 */
	render_sub_containers: function( $container, $parent_content ) {
		for( let $s in $container.sections ) {
			if( $container.sections.hasOwnProperty( $s ) ) {
				let $sub_container = _.extend( this.container_defaults(), $container.sections[ $s ] );
				this.render_section_menu( $sub_container, $parent_content );
				this.render_single_content( $sub_container, $parent_content.find( '.media-frame-content' ), this.templates.section_content, $container.id + '_' );
			}
		}
	},

	/**
	 * Renders Base Containers.
	 */
	render_containers: function() {
		for( let $i in this.modal_html ) {
			if( this.modal_html.hasOwnProperty( $i ) ) {
				let $container = _.extend( this.container_defaults(), this.modal_html[ $i ] );
				this.render_left_menu( $container );
				if( false !== $container.id ) {
					let $content = this.render_single_content( $container, false, this.templates.page_content );

					if( !$container.sections ) {
						$content.find( '.media-frame-router' ).addClass( 'hidden' );
					} else {
						this.render_sub_containers( $container, $content );
					}
				}
			}
		}
	},

	/**
	 * Handles Left Menu Click.
	 * @param e
	 */
	handle_main_menu: function( e ) {
		e.preventDefault();
		let $target = jQuery( e.target );
		jQuery( this.$el ).find( '.media-menu a.active' ).removeClass( 'active' );
		$target.addClass( 'active' );
		let $show_target = jQuery( this.$el )
			.find( '.wponion-modal-content-container > div#' + $target.attr( 'href' ) );
		jQuery( this.$el ).find( '.wponion-modal-content-container > div' ).addClass( 'hidden' );
		$show_target.removeClass( 'hidden' );

		if( $show_target.find( '.media-frame-router' ).hasClass( 'hidden' ) ) {
			jQuery( this.$el ).find( '.media-frame' ).addClass( 'hide-router' );
		} else {
			jQuery( this.$el ).find( '.media-frame' ).removeClass( 'hide-router' );
		}

		this.active_page    = $target.attr( 'href' );
		this.active_section = null;
		this.trigger( 'page_open_' + this.active_page );
		this.activate_main_menu( $show_target );
	},

	/**
	 * Handles Section Click.
	 * @param e
	 */
	handle_tab_click: function( e ) {
		e.preventDefault();
		let $target         = jQuery( e.target );
		this.active_section = $target.attr( 'href' );
		let $base           = jQuery( this.$el ).find( '.wponion-modal-content-container > #' + this.active_page );

		$target.parent().find( '.active' ).removeClass( 'active' );
		$target.addClass( 'active' );
		$base.find( '.wponion-section-modal-content' ).hide();
		$base.find( '#' + this.active_page + '_' + this.active_section ).show();
		this.trigger( 'section_open_'.this.active_page + '_' + this.active_section );
	},

	/**
	 * Renders LeftSide Menu.
	 * @param $p
	 */
	render_left_menu( $p ) {
		if( false === window.wponion._.isUndefined( $p.separator ) && true === $p.separator ) {
			this.$el.find( '.media-menu' ).append( '<a class="separator"></a>' );
		} else {
			this.$el.find( '.media-menu' ).append( this.templates.frame_menu_item( { url: $p.id, name: $p.title } ) );
		}
	},

	/**
	 * Renders Section Menu.
	 * @param $p
	 * @param $appendTo
	 */
	render_section_menu( $p, $appendTo ) {
		$appendTo.find( '.media-router' ).append( this.templates.router_menu_item( { url: $p.id, name: $p.title } ) );
	},

	/**
	 * Ensures that keyboard focus remains within the Modal dialog.
	 * @param e {object} A jQuery-normalized event object.
	 */
	preserveFocus: function( e ) {
		'use strict';
		if( this.$el[ 0 ] !== e.target && !this.$el.has( e.target ).length ) {
			this.$el.focus();
		}
	},

	/**
	 * Closes the modal and cleans up after the instance.
	 * @param e {object} A jQuery-normalized event object.
	 */
	closeModal: function( e ) {
		'use strict';
		this.trigger( 'before_close' );
		e.preventDefault();
		this.undelegateEvents();
		jQuery( document ).off( 'focusin' );
		jQuery( 'body' ).css( { 'overflow': 'auto' } );
		this.remove();
		this.trigger( 'after_close' );
	},

	/**
	 * Responds to the btn-ok.click event
	 * @param e {object} A jQuery-normalized event object.
	 * @todo You should make this your own.
	 */
	saveModal: function( e ) {
		'use strict';
		this.closeModal( e );
	},
} );
