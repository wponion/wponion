/**
 * 3rd Party Library
 */
import { createHooks } from '@wordpress/hooks';
import vsp_js_helper from 'vsp-js-helper/index';

/**
 * WPOnion Helpers
 */
import register_events from './core/global-events';
import instance_handler from './core/instance-handler';
import {
	module_functions,
	wponion_module_settings,
	wponion_module_bulk_edit,
	wponion_module_media_fields,
	wponion_module_metabox,
	wponion_module_page_actions,
	wponion_module_quick_edit,
	wponion_module_wp_pointers,
	wponion_module_system_info,
} from './core/module-handler';
import { wponion_register_themes, wponion_theme_init } from './core/themes';
import { wponion_register_fields } from './core/fields';

/**
 * WPOnion Functions
 */
import jquery_functions from './core/functions/jquery';
import core_functions from './core/functions/core';
import themes_functions from './core/functions/themes';
import fields_functions from './core/functions/fields';
import plugins_functions from './core/functions/plugins';
import utilites_functions from './core/functions/utilites';

/**
 * WPOnion Plugins
 */
import wpo_button from './core/plugins/wpo-buttons';
import { init_ajaxer, WPOnion_Ajaxer } from './core/plugins/ajaxer';
import WPOnion_Validator from './core/plugins/validator';

/**
 * WPOnion Core Classes
 */
import WPOnion_Core from './core/class/core';
import WPOnion_Debug from './core/class/debug';
import WPOnion_Base from './core/class/base';
import WPOnion_Theme_Base from './core/class/theme-base';
import WPOnion_Module_Base from './core/class/module-base';
import WPOnion_Field_Base from './core/class/field-base';
import WPOnion_Field from './core/class/field';
import WPOnion_Dependency from './core/class/dependency';

( ( window, document, wp, $ ) => {

	if( typeof window.wponion === 'undefined' ) {
		// Register Core Related Functions
		core_functions();

		// Register WPOnion Themes Related Functions
		themes_functions();

		// Register WPOnion Fields Related Functions
		fields_functions();

		// Register WPOnion Module Related Functions.
		module_functions();

		// Register WPOnion Addons Related Functions
		plugins_functions();

		// Register WPOnion Utilites Related Functions
		utilites_functions();

		/**
		 * Extends jQuery Functions list With
		 * Functions Provided by WPOnion
		 */
		$.fn = $.extend( $.fn, jquery_functions );

		window.wpo_core                  = WPOnion_Core;
		window.wponion                   = {};
		window.wponion.instances         = {};
		window.wponion.plugins           = {};
		window.wponion.class             = {};
		window.wponion._                 = window.lodash.noConflict();
		window.wponion.hooks             = createHooks();
		window.wponion.helper            = vsp_js_helper;
		window.wponion.instances.module  = new instance_handler();
		window.wponion.instances.fields  = new instance_handler();
		window.wponion.instances.global  = new instance_handler();
		window.wponion.plugins.bs_button = wpo_button;
		window.wponion.plugins.ajaxer    = WPOnion_Ajaxer;
		window.wponion.plugins.validator = WPOnion_Validator;
		window.wponion.class.base        = WPOnion_Base;
		window.wponion.class.theme_base  = WPOnion_Theme_Base;
		window.wponion.class.module_base = WPOnion_Module_Base;
		window.wponion.class.field_debug = new WPOnion_Debug();
		window.wponion.class.field_base  = WPOnion_Field_Base;
		window.wponion.class.field       = WPOnion_Field;
		window.wponion.class.dependency  = WPOnion_Dependency;
	}

	$( () => {
		window.wponion.hooks.doAction( 'wponion_before_init' );

		// Register Core Fields
		wponion_register_fields();

		// Register Core Themes
		wponion_register_themes();

		// Register Required Events
		register_events();

		// Init Ajaxer
		init_ajaxer();

		// Init Javascript Validation
		window.wponion_validator();

		// INIT All Basic Fields
		window.wponion_field_reload_all();

		// Init Themes
		wponion_theme_init();

		// Init Settings Module
		wponion_module_settings();

		// Inits Bulk Edit Module.
		wponion_module_bulk_edit();

		// Inits Media Fields Module.
		wponion_module_media_fields();

		// Inits Metabox Module.
		wponion_module_metabox();

		// Inits Page Actions Module.
		wponion_module_page_actions();

		// Inits Quick Edit Module.
		wponion_module_quick_edit();

		// Inits WPPointers Module.
		wponion_module_wp_pointers();

		// Inits System Info Module.
		wponion_module_system_info();

		window.wponion.hooks.doAction( 'wponion_init' );
	} );

	/*$( window ).on( 'load', () => {
	} );*/
} )( window, document, window.wp, jQuery );
