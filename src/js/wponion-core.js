import WPOnion_Validator from './core/validation';
import { createHooks } from '@wordpress/hooks';

// VSP JS Helper Global.
window.vsp_js_helper = require( 'vsp-js-helper/index' ).default;

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
} );

/**
 * WPonion Modules.
 */
require( './helpers/system-info' ).default;
require( './modules/settings' ).default;
require( './modules/metabox' ).default;
require( './modules/wp-pointers' ).default;
require( './modules/media-fields' ).default;
require( './modules/bulk-edit' ).default;
require( './modules/quick-edit' ).default;
require( './modules/page-actions' ).default;


window.wponion.ajaxer         = require( './core/ajaxer' ).WPOnion_Ajaxer;
window.wponion.ajax           = require( './core/ajaxer' ).default;
window.wponion.debug          = require( './core/debug' ).default;
window.wponion.core           = require( './core/core' ).default;
window.wponion.field_abstract = require( './core/field' ).default;
window.wponion.dependency     = require( './core/dependency' ).default;

require( './wponion-fields' );

export default ( ( window, document, wp, $ ) => {
	// Document On Load.
	$( () => {
		window.wponion_setup();
		window.wponion.hooks.doAction( 'wponion_after_setup' );

		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );
		if( $wpof_div.length > 0 ) {
			window.wponion.hooks.doAction( 'wponion_before_theme_init', $wpof_div );
			$wpof_div.each( function() {
				window.wponion_theme( $( this ) );
			} );
			window.wponion.hooks.doAction( 'wponion_after_theme_init', $wpof_div );
		}

		$( '#woocommerce-product-data' ).on( 'woocommerce_variations_loaded', function() {
			window.wponion_field( '.wponion-framework.wponion-woocommerce-variation' ).reload();
		} );

		$( '#variable_product_options' ).on( 'woocommerce_variations_added', function() {
			window.wponion_field( '.wponion-framework.wponion-woocommerce-variation' ).reload();
		} );
	} );

	// Window On Load.
	$( window ).on( 'load', ( () => {
		if( !window.wponion._.isUndefined( window.Backbone ) ) {
			window.wponion.modal = require( './wpmodel' ).default;
		}

		window.wponion.hooks.doAction( 'wponion_before_init' );

		window.wponion_field( 'body' ).reload_global_fields();

		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );

		window.wponion_notice( $wpof_div.find( '.wponion-element-wp_notice, .wponion-element-notice' ) );

		// Triggers Hook With Widgets.
		$( document ).on( 'widget-added widget-updated', function( event, $widget ) {
			window.wponion_field( $widget ).reload();
			window.wponion_dependency( $widget );
		} );

		// Triggers When New Menu Item Added.
		$( document ).on( 'menu-item-added', function( event, $menu ) {
			window.wponion_field( $menu ).reload();
			window.wponion_dependency( $menu );
		} );

		if( $wpof_div.length > 0 ) {
			new WPOnion_Validator();

			window.wponion.hooks.doAction( 'wponion_before_fields_init', $wpof_div );
			$wpof_div.each( function() {
				window.wponion_field( $( this ) ).reload();
				window.wponion_dependency( $( this ) );
			} );
			window.wponion.hooks.doAction( 'wponion_after_fields_init', $wpof_div );
		}
		window.wponion.hooks.doAction( 'wponion_init' );
	} ) );

	window.wponion.hooks.doAction( 'wponion_loaded' );
} )( window, document, wp, jQuery );

