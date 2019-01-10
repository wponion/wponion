import WPOnion_Dependency from './core/dependency';
import WPOnion_Validator from './core/validation';
import { createHooks } from '@wordpress/hooks';

// VSP JS Helper Global.
window.vsp_js_helper = require( 'vsp-js-helper/index' );

require( './helpers/functions' );

// WPOnion Core Source.
window.wponion = window.wponion || Object.create( {
	/**
	 * Lodash noConflict Variable.
	 */
	_: window.lodash.noConflict(),

	/**
	 * Curated collection of useful JavaScript snippets.
	 * @see https://www.npmjs.com/package/vsp-js-helper
	 */
	helper: window.vsp_js_helper,

	/**
	 * A lightweight & efficient EventManager for JavaScript.
	 * @see https://www.npmjs.com/package/@wordpress/hooks
	 */
	hooks: createHooks(),

	/**
	 * WPonion Modules.
	 */
	metabox: require( './modules/metabox' ).default,
	media_fields: require( './modules/media-fields' ).default,
	bulk_edit: require( './modules/bulk-edit' ).default,
	guttenberg: require( './modules/guttenberg' ).default,
	woocommerce: require( './modules/woocommerce' ).default,
	quick_edit: require( './modules/quick-edit' ).default,
	visual_composer: require( './modules/visual-composer' ).default,
	modal: require( '../vendors/backbone-modal' ).default,
	ajaxer: require( './core/ajaxer' ).WPOnion_Ajaxer,
	ajax: require( './core/ajaxer' ).default,
	debug: require( './core/debug' ).default,
	core: require( './core/core' ).default,
	field_abstract: require( './core/field' ).default,
} );

// Core Fields.
window.wponion.fields = Object.create( {
	text: require( './fields/text' ).default,
	textarea: require( './fields/textarea' ).default,
	background: require( './fields/background' ).default,
	image_select: require( './fields/image_select' ).default,
	switcher: require( './fields/switcher' ).default,
	color_palette: require( './fields/color_palette' ).default,
	select: require( './fields/select' ).default,
	select2: require( './fields/select2' ).default,
	chosen: require( './fields/chosen' ).default,
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
} );

module.exports = ( ( window, document, wp, $, $wpo ) => {
	// Document On Load.
	$( () => {
		window.wponion_setup();
		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );
		if( $wpof_div.length > 0 ) {
			window.wponion.hooks.doAction( 'wponion_before_theme_init', $wpof_div );
			$wpof_div.each( function() {
				window.wponion.hooks.doAction( 'wponion_theme_init', $( this ) );
			} );
			window.wponion.hooks.doAction( 'wponion_after_theme_init', $wpof_div );
		}
	} );

	// Window On Load.
	$( window ).on( 'load', ( () => {

		window.wponion.hooks.doAction( 'wponion_before_init' );

		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );

		window.wponion_notice( $wpof_div.find( '.wponion-element-wp_notice, .wponion-element-notice' ) );

		window.wponion.core.submenu_indicator( $( document ).find( '.wponion-submenu-i' ) );

		// Triggers Field Debug Data.
		$( document ).on( 'click', '.wponion-field-debug-code > strong', function() {
			jQuery( this ).next().slideToggle();
			jQuery( this ).toggleClass( 'dashicons-arrow-down' ).toggleClass( 'dashicons-arrow-right' );
		} );

		// Triggers Hook With Widgets.
		$( document ).on( 'widget-added widget-updated', function( event, $widget ) {
			window.wponion_field( $widget ).reload();
			new WPOnion_Dependency( $widget );
		} );

		// Triggers When New Menu Item Added.
		$( document ).on( 'menu-item-added', function( event, $menu ) {
			window.wponion_field( $menu ).reload();
			new WPOnion_Dependency( $menu );
		} );


		if( $wpof_div.length > 0 ) {
			// Renders Validation.
			new WPOnion_Validator();

			// Handles Fields init.
			window.wponion.hooks.doAction( 'wponion_before_fields_init', $wpof_div );
			$wpof_div.each( function() {
				window.wponion_field( $( this ) ).reload();
				new WPOnion_Dependency( $( this ) );
			} );
			window.wponion.hooks.doAction( 'wponion_after_fields_init', $wpof_div );
		}

		$wpo.core.loading_screen( $wpof_div, false );

		window.wponion.hooks.doAction( 'wponion_init' );

	} ) );

	window.wponion.hooks.doAction( 'wponion_loaded' );

} )( window, document, wp, jQuery, window.wponion );

