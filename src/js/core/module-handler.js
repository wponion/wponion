import WPO_Module from './class/module-base';
import WPOnion_Module_Settings from './modules/settings';
import WPOnion_Module_Metabox from './modules/metabox';
import WPOnion_Module_Quick_Edit from './modules/quick-edit';
import wponion_module_wp_pointers from './modules/wp-pointers';
import wponion_module_system_info from './modules/system-info';
import wponion_module_customizer from './modules/customizer';
import { is_jquery } from 'vsp-js-helper/index';

/**
 * Inits Settings Module.
 */
let wponion_module_settings = function( $element ) {
	if( is_jquery( $element ) && WPO_Module.is_valid( $element ) && $element.hasClass( 'wponion-module-settings' ) ) {
		new WPOnion_Module_Settings( $element );
	}
};

/**
 * Inits Bulk Edit Module
 */
let wponion_module_bulk_edit = function() {
	jQuery( document ).on( 'click', '#bulk_edit', () => {
		let $final_args = { post_ids: [] },
			$bulk_edit  = jQuery( '#bulk-edit' );

		$bulk_edit.find( '#bulk-titles' ).children().each( function() {
			$final_args.post_ids.push( jQuery( this ).attr( 'id' ).replace( /^(ttle)/i, '' ) );
		} );

		$bulk_edit.find( '.wponion-quick-edit-fieldset' ).each( function() {
			$final_args = window.wponion._.merge( jQuery( this ).serializeJSON(), $final_args );
		} );

		return window.wpo_core.ajax( 'save-bulk-edit', {
			method: 'POST',
			async: false,
			cache: false,
			data: $final_args
		} ).send();
	} );
};

/**
 * Inits Media Fields Module.
 */
let wponion_module_media_fields = function() {
	/**
	 * Fixes Media POPUP Modal To Work With WPonion.
	 */
	const fix_media_ui = () => {
		let $table  = jQuery( '.compat-attachment-fields' ),
			$fields = $table.find( '.wponion-framework' );

		$fields.each( function() {
			jQuery( this ).parent().parent().remove();
			$table.before( jQuery( this ).parent().html() );
		} );

		$table.parent().find( '.wponion-framework' ).each( function() {
			window.wponion_field_reload_all( jQuery( this ) );
		} );
	};

	if( jQuery( '.compat-attachment-fields' ).length > 0 && jQuery( 'body' ).hasClass( 'post-type-attachment' ) ) {
		fix_media_ui();
	} else {
		if( typeof wp.media !== 'undefined' && typeof wp.media.frames.browse !== 'undefined' ) {
			wp.media.frames.browse.on( 'edit:attachment', () => {
				fix_media_ui();
				wp.media.frames.edit.on( 'attachment:compat:ready', () => fix_media_ui() );
			} );
		}
	}
};

/**
 * Inits Metabox Module.
 */
let wponion_module_metabox = function( $element ) {
	$element = $element || jQuery( 'div.postbox.wponion-metabox' );
	if( $element.hasClass( 'wponion-metabox' ) ) {
		new WPOnion_Module_Metabox( $element );
	}
};

/**
 * Inits Page Actions Module.
 */
let wponion_module_page_actions = function() {
	let $html = window.wpo_core.windowArgs( 'wponion_page_actions', false );

	if( false !== $html ) {
		$html        = jQuery( $html );
		let $pgtitle = jQuery( '.page-title-action' ),
			$heading = jQuery( '.wp-heading-inline' );
		if( $pgtitle.length > 0 ) {
			$pgtitle.after( $html );
		} else if( $heading.length > 0 ) {
			$heading.after( $html );
		}
	}
};

/**
 * Inits Quick Edit Module.
 */
let wponion_module_quick_edit = function() {
	let $list = jQuery( '#the-list' );
	if( $list.length > 0 ) {
		$list.on( 'click', '.editinline', function() {
			let post_id = jQuery( this ).closest( 'tr' ).attr( 'id' );
			post_id     = post_id.replace( 'post-', '' );
			jQuery( 'tr#edit-' + post_id ).find( '.wponion-framework' ).each( function() {
				new WPOnion_Module_Quick_Edit( jQuery( this ), { post_id: post_id } );
			} );
		} );
	}
};

/**
 * Registers Module Function With current window.
 */
let module_functions = function() {
	window.wponion_module_settings     = wponion_module_settings;
	window.wponion_module_bulk_edit    = wponion_module_bulk_edit;
	window.wponion_module_media_fields = wponion_module_media_fields;
	window.wponion_module_metabox      = wponion_module_metabox;
	window.wponion_module_page_actions = wponion_module_page_actions;
	window.wponion_module_quick_edit   = wponion_module_quick_edit;
	window.wponion_module_wp_pointers  = wponion_module_wp_pointers;
	window.wponion_module_system_info  = wponion_module_system_info;
	window.wponion_module_customizer   = wponion_module_customizer;
};

export {
	module_functions,
	wponion_module_settings,
	wponion_module_bulk_edit,
	wponion_module_media_fields,
	wponion_module_metabox,
	wponion_module_page_actions,
	wponion_module_quick_edit,
	wponion_module_wp_pointers,
	wponion_module_system_info,
	wponion_module_customizer,
};


