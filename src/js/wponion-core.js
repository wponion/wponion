import WPOnion_Field from './core/field';
import { is_window_arg } from 'vsp-js-helper/index';
import WPOnion_Dependency from './core/dependency';
import WPOnion_Validator from './core/validation';

window.wponion_metabox_module = require( './modules/metabox' ).default;
window.wponion_bulk_edit      = require( './modules/bulk-edit' ).default;
window.wponion_guttenberg     = require( './modules/guttenberg' ).default;
window.wponion_quick_edit     = require( './modules/quick-edit' ).default;
window.$wponion               = require( './core/core' ).default;
window.$wponion_debug         = require( './core/debug' ).default;
window.$wponion_helper        = require( 'vsp-js-helper/index' );
window.wponion_modal          = require( '../vendors/backbone-modal' ).default;
window.wponion_new_field      = ( $class ) => ( is_window_arg( $class ) ) ? window[ $class ] : false;
window.wponion_field          = ( $elem, $contxt = {} ) => new WPOnion_Field( $elem, $contxt );
window.wponion_fields         = {
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

	$( document ).on( 'ready', () => {
		$wpo.settings_args    = $wpo.windowArgs( 'wponion_core', {} );
		$wpo.text             = $wpo.windowArgs( 'wponion_il8n', {} );
		$wpo.debug_info       = null;
		$wpo.field_debug_info = null;

		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );
		if( $wpof_div.length > 0 ) {
			$wp_hook.doAction( 'wponion_before_theme_init', $wpof_div );
			$wpof_div.each( function() {
				$wp_hook.doAction( 'wponion_theme_init', $( this ) );
			} );
			$wp_hook.doAction( 'wponion_after_theme_init', $wpof_div );
		}
	} );

	$( window ).on( 'load', ( () => {
		$wp_hook.doAction( 'wponion_before_init' );

		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );

		window.$wponion.submenu_indicator( $( document ).find( '.wponion-submenu-i' ) );

		$( document ).on( 'click', '.wponion-field-debug-code > strong', function() {
			jQuery( this ).next().slideToggle();
			jQuery( this ).toggleClass( 'dashicons-arrow-down' ).toggleClass( 'dashicons-arrow-right' );
		} );

		window.wponion_fields = $wp_hook.applyFilters( 'wponion_fields_functions', window.wponion_fields );

		/**
		 * Triggers Hook With Widgets.
		 */
		$( document ).on( 'widget-added widget-updated', function( event, $widget ) {
			wponion_field( $widget ).reload();
			new WPOnion_Dependency( $widget );
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
				wponion_field( $( this ) ).reload();
				new WPOnion_Dependency( $( this ) );
			} );
			$wp_hook.doAction( 'wponion_after_fields_init', $wpof_div );
		}

		$wpo.loading_screen( $wpof_div, false );
		$wp_hook.doAction( 'wponion_init' );
	} ) );
	$wp_hook.doAction( 'wponion_loaded' );
} )( window, document, wp, jQuery, $wponion );
