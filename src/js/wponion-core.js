import WPOnion_Dependency from './core/dependency';
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
require( './modules/settings' ).default;
require( './modules/metabox' ).default;
require( './modules/wp-pointers' ).default;
require( './modules/media-fields' ).default;
require( './modules/bulk-edit' ).default;
require( './modules/guttenberg' ).default;
require( './modules/woocommerce' ).default;
require( './modules/quick-edit' ).default;
require( './modules/visual-composer' ).default;

window.wponion.modal          = require( '../vendors/backbone-modal' ).default;
window.wponion.ajaxer         = require( './core/ajaxer' ).WPOnion_Ajaxer;
window.wponion.ajax           = require( './core/ajaxer' ).default;
window.wponion.debug          = require( './core/debug' ).default;
window.wponion.core           = require( './core/core' ).default;
window.wponion.field_abstract = require( './core/field' ).default;

require( './wponion-fields' );

export default ( ( window, document, wp, $ ) => {
	// Document On Load.
	$( () => {
		window.wponion_setup();
		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );
		if( $wpof_div.length > 0 ) {
			window.wponion.hooks.doAction( 'wponion_before_theme_init', $wpof_div );
			$wpof_div.each( function() {
				window.wponion_theme( $( this ) );
			} );
			window.wponion.hooks.doAction( 'wponion_after_theme_init', $wpof_div );
		}
	} );

	// Window On Load.
	$( window ).on( 'load', ( () => {

		window.wponion.hooks.doAction( 'wponion_before_init' );

		let $wpof_div = $( '.wponion-framework:not(.wponion-module-quick_edit-framework)' );

		window.wponion_notice( $wpof_div.find( '.wponion-element-wp_notice, .wponion-element-notice' ) );

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

		window.wponion.hooks.doAction( 'wponion_init' );

	} ) );

	window.wponion.hooks.doAction( 'wponion_loaded' );

} )( window, document, wp, jQuery );
