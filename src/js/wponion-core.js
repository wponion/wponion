import { is_window_arg, plain_object } from 'vsp-js-helper/index';
import WPOnion_Dependency from './core/dependency';
import WPOnion_Validator from './core/validation';


/*
 * Global Variables.
 */
window.wponion        = window.wponion || plain_object();
window.$wponion       = window.$wponion || plain_object();
window.vsp_js_helper  = require( 'vsp-js-helper/index' );
window.wponion.helper = require( 'vsp-js-helper/index' );

/*
 * WPonion Modules.
 */
window.wponion.metabox        = require( './modules/metabox' ).default;
window.wponion.media_fields   = require( './modules/media-fields' ).default;
window.wponion.bulk_edit      = require( './modules/bulk-edit' ).default;
window.wponion.guttenberg     = require( './modules/guttenberg' ).default;
window.wponion.quick_edit     = require( './modules/quick-edit' ).default;
window.wponion.modal          = require( '../vendors/backbone-modal' ).default;
window.wponion.ajaxer         = require( './core/ajaxer' ).WPOnion_Ajaxer;
window.wponion.ajax           = require( './core/ajaxer' ).default;
window.wponion.debug          = require( './core/debug' ).default;
window.wponion.core           = require( './core/core' ).default;
window.wponion.field_abstract = require( './core/field' ).default;


/*
 * Global Functions.
 */
window.wponion_new_field    = ( $class ) => ( is_window_arg( $class ) ) ? window[ $class ] : false;
window.wponion_field        = ( $elem, $contxt = {} ) => new window.wponion.field_abstract( $elem, $contxt );
window.wponion_notice       = ( $elem ) => {
	if( $elem.find( '.wponion-remove' ).length > 0 ) {
		$elem.each( function() {
			let $_el = jQuery( this );
			jQuery( this ).find( '.wponion-remove' ).on( 'click', function() {
				$_el.slideUp( 'slow', function() {
					$_el.remove();
				} );
			} );
		} );
		return $elem;
	}

	let $auto = $elem.attr( 'data-autoclose' );
	if( $auto ) {
		$auto = parseInt( $auto );
		setTimeout( () => {
			$elem.slideUp( 'slow', () => {
				$elem.remove();
			} );
		}, $auto );
	}
};
window.wponion_setup        = () => {
	window.wponion.core.settings_args    = window.wponion.core.windowArgs( 'wponion_core', {} );
	window.wponion.core.text             = window.wponion.core.windowArgs( 'wponion_il8n', {} );
	window.wponion.core.debug_info       = null;
	window.wponion.core.field_debug_info = null;
};
window.wponion_render_field = ( $type, $callback ) => {
	window.wp.hooks.addAction( 'wponion_init_field_' + $type, 'wponion_core', ( $elem ) => {
		try {
			$callback( $elem );
		} catch( e ) {
			console.log( arguments, ' \n Error: ' + e + '  \n For : wponion_init_field_accordion' );
		}
	} );
};

window.wponion.fields = {
	text: require( './fields/text' ).default,
	textarea: require( './fields/textarea' ).default,
	background: require( './fields/background' ).default,
	image_select: require( './fields/image_select' ).default,
	switcher: require( './fields/switcher' ).default,
	color_palette: require( './fields/color_palette' ).default,
	select: require( './fields/select' ).default,
	select2: require( './fields/select2' ).default,
	chosen: require( './fields/chosen' ).default,
	selectize: require( './fields/selectize' ).default,
	icon_picker: require( './fields/icon_picker' ).default,
	font_selector: require( './fields/font_selector' ).default,
	accordion: require( './fields/accordion' ).default,
	group: require( './fields/group' ).default,
	wp_editor: require( './fields/wp_editor' ).default,
	reload_wp_editor: require( './helpers/reload_wp_editor' ).default,
	fieldset: require( './fields/fieldset' ).default,
	inputmask: require( './fields/inputmask' ).default,
	wp_links: require( './fields/wp_links' ).default,
	checkbox_radio: require( './fields/checkbox_radio' ).default,
	keyvalue_pair: require( './fields/keyvalue_pair' ).default,
	color_picker: require( './fields/color_picker' ).default,
	date_picker: require( './fields/date_picker' ).default,
	gallery: require( './fields/gallery' ).default,
	image_popup: require( './helpers/image_popup' ).default,
	upload: require( './fields/upload' ).default,
	image_upload: require( './fields/image_upload' ).default,
	jquery_tab: require( './fields/jquery_tab' ).default,
	field_tooltip: require( './helpers/field_tooltip' ).default,
	clone_element: require( './fields/clone_element' ).default,
	sorter: require( './fields/sorter' ).default,
	google_maps: require( './fields/google_maps' ).default,
	typography: require( './fields/typography' ).default,
	oembed: require( './fields/oembed' ).default,
	heading: require( './fields/heading' ).default,
	subheading: require( './fields/subheading' ).default,
	jambo_content: require( './fields/jambo_content' ).default,
	notice: require( './fields/notice' ).default,
	content: require( './fields/content' ).default,
	backup: require( './fields/backup' ).default,
};

module.exports = ( ( window, document, wp, $, $wpo ) => {
	let $wp_hook = wp.hooks;

	/**
	 * Document On Load.
	 */
	$( () => {
		window.wponion_setup();

		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );
		if( $wpof_div.length > 0 ) {
			$wp_hook.doAction( 'wponion_before_theme_init', $wpof_div );
			$wpof_div.each( function() {
				$wp_hook.doAction( 'wponion_theme_init', $( this ) );
			} );
			$wp_hook.doAction( 'wponion_after_theme_init', $wpof_div );
		}
	} );

	/**
	 * Window On Load.
	 */
	$( window ).on( 'load', ( () => {
		$wp_hook.doAction( 'wponion_before_init' );

		window.wponion.fields = wp.hooks.applyFilters( 'wponion_fields_functions', window.wponion.fields );

		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );

		window.wponion_notice( $wpof_div.find( '.wponion-element-wp_notice, .wponion-element-notice' ) );

		window.wponion.core.submenu_indicator( $( document ).find( '.wponion-submenu-i' ) );

		/**
		 * Triggers Field Debug Data.
		 */
		$( document ).on( 'click', '.wponion-field-debug-code > strong', function() {
			jQuery( this ).next().slideToggle();
			jQuery( this ).toggleClass( 'dashicons-arrow-down' ).toggleClass( 'dashicons-arrow-right' );
		} );

		/**
		 * Triggers Hook With Widgets.
		 */
		$( document ).on( 'widget-added widget-updated', function( event, $widget ) {
			window.wponion_field( $widget ).reload();
			new WPOnion_Dependency( $widget );
		} );

		/**
		 * Triggers When New Menu Item Added.
		 */
		$( document ).on( 'menu-item-added', function( event, $menu ) {
			window.wponion_field( $menu ).reload();
			new WPOnion_Dependency( $menu );
		} );


		if( $wpof_div.length > 0 ) {
			/**
			 * Renders Validation.
			 */
			new WPOnion_Validator();

			/**
			 * Handles Fields init.
			 */
			$wp_hook.doAction( 'wponion_before_fields_init', $wpof_div );
			$wpof_div.each( function() {
				window.wponion_field( $( this ) ).reload();
				new WPOnion_Dependency( $( this ) );
			} );
			$wp_hook.doAction( 'wponion_after_fields_init', $wpof_div );
		}

		$wpo.core.loading_screen( $wpof_div, false );
		$wp_hook.doAction( 'wponion_init' );
	} ) );

	$wp_hook.doAction( 'wponion_loaded' );
} )( window, document, wp, jQuery, window.wponion );
