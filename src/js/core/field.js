/* global swal:true */

const is_jquery = require( 'vsp-js-helper/index' ).is_jquery;

import $wponion from './core';
import $wponion_debug from './debug';
import WPOnion_Module from './module';
import WPOnion_Validation from '../core/validation';

/**
 * WPOnion Field Abstract Class.
 */
export default class extends WPOnion_Module {
	/**
	 * WPOnion Field Class Constructor.
	 * @param $selector
	 * @param $context
	 * @param $config
	 */
	constructor( $selector, $context = null, $config = null ) {
		super( $selector, $context );

		if( !this.element.hasClass( 'wponion-field-inited' ) ) {
			this.set_args( false );
			this.field_debug();
			this.config = $config;
			this.init();
			this.js_error_handler();
			this.js_validator();
			this.element.addClass( 'wponion-field-inited' );
		}
	}

	/**
	 * Function Used To Init Field.
	 * This needs to be overriden extending class.
	 */
	init() {
	}

	/**
	 * Handles javascript error placement.
	 * @param err
	 */
	js_error( err ) {
		err.error.appendTo( this.element.find( '.wponion-fieldset' ) );
	}

	/**
	 * Creates An Trigger Hook To Handle JS Error Placement
	 * @use constructor
	 * @param element
	 */
	js_error_handler( element = this.element ) {
		element.on( 'wponion_js_validation_message', '> .row > .wponion-fieldset :input', ( e, data ) => this.js_error( data ) );
	}

	/**
	 * Checks if validation is required for current field.
	 */
	js_validator() {
		if( false === window.wponion._.isUndefined( this.option( 'js_validate', false ) ) ) {
			if( false !== this.option( 'js_validate', false ) ) {
				this.maybe_js_validate_elem( this.option( 'js_validate', false ), this.element );
			}
		}
	}

	/**
	 * Checks if current page has form and enable validations.
	 * @param $args
	 * @param $elem
	 */
	maybe_js_validate_elem( $args, $elem ) {
		if( WPOnion_Validation.get_form() ) {
			this.js_validate_elem( $args, $elem );
		}
	}

	/**
	 * Adds Rule To Each and every input to validate JS Lib.
	 * @param $args
	 * @param $elem
	 */
	js_validate_elem( $args, $elem ) {
		if( WPOnion_Validation.get_form() ) {
			$elem.find( ':input' ).each( function() {
				jQuery( this ).rules( 'add', $args );
			} );
		}
	}

	/**
	 * This function used by each and every field.
	 * This function will also convert Simple JS function code into callable JS code & returns it
	 * Plus it also store the value in debug array if debug enabled.
	 * @param $arg
	 * @param $key
	 * @returns {*|$data}
	 */
	handle_args( $arg, $key = false ) {
		let $args   = $wponion.js_func( $arg ),
			$exists = $wponion_debug.get( this.id(), { 'php': {}, 'javascript': {} } );
		$exists     = window.wponion._.merge( { 'php': {}, 'javascript': {} }, $exists );

		if( false === $key ) {
			$exists.javascript = $args;
		} else {
			$exists.javascript [ $key ] = $args;
		}
		$wponion_debug.add( this.id(), $exists );
		return $args;
	}

	/**
	 * Handles Field Debug POPUP.
	 */
	field_debug() {
		if( false !== $wponion_debug.get( this.id() ) ) {
			return;
		}

		let $info = this.option( 'debug_info' );

		if( false === window.wponion._.isUndefined( $info ) ) {
			if( false === window.wponion._.isEmpty( $info ) ) {
				$wponion_debug.add( this.id(), { 'php': $info, 'javascript': {} } );
			}
		}

		let $found = false;
		if( !this.element.hasClass( 'wponion-field-debug' ) ) {
			let $ID   = this.id(),
				$elem = jQuery( 'div.wponion-element[data-wponion-jsid=' + $ID + ']' );
			if( $elem.hasClass( 'wponion-field-debug' ) ) {
				$found = $elem;
			}
		} else {
			$found = this.element;
		}

		if( false !== $found ) {
			let $this = this;

			$found.find( '> .row > .wponion-field-title > h4' )
				  .tippy( {
					  content: $wponion.txt( 'click_to_view_debug_info', 'Click To View Field Debug Info' ),
					  arrow: true,
					  arrowType: 'round',
					  placement: 'bottom',
					  theme: 'light',
					  animation: 'scale',
					  appendTo: this.get_field_parent_by_id( this.element )[ 0 ],
				  } );

			$found.find( '> .row > .wponion-field-title > h4' ).on( 'click', () => {
				let $d          = $this.id() + 'debugINFO',
					$notice_txt = '<p class=\'wponion-field-debug-notice\'>' + $wponion.option( 'debug_notice' ) + '</p>',
					$elem       = jQuery( '<div id="' + $d + '" class="wponion-field-debug-popup" ><div id="' + $d + '" ></div>' + $notice_txt + '</div>' );
				let $data       = $wponion_debug.get( $this.id() );
				swal.fire( {
					html: $elem,
					showConfirmButton: true,
					confirmButtonText: $wponion.txt( 'get_json_output', 'As JSON' ),
					showCloseButton: false,
					width: '800px',
					onOpen: () => jQuery( '#swal2-content > div > #' + $d ).jsonView( $data )
				} ).then( ( result ) => {
					if( result.value ) {
						swal.fire( {
							width: '600px',
							html: '<textarea style="min-width:550px; min-height:300px">' + JSON.stringify( $wponion_debug.get( $this.id() ) ) + '</textarea>'
						} );
					}
				} );
			} );
		}
	}

	/**
	 * Gathers Field Options Data from window.wponion array.
	 * @returns {*}
	 */
	options() {
		if( this._args === false ) {
			this._args = $wponion.windowArgs( this.id() );
		}
		return this._args;
	}

	/**
	 * Checks if a given option key exists and if so then it returns it value
	 * or it returns the default value.
	 * @param $key
	 * @param $default
	 * @returns {*}
	 */
	option( $key = '', $default = {} ) {
		let $args = this.options();
		return ( false === window.wponion._.isUndefined( $args[ $key ] ) ) ? $args[ $key ] : $default;
	}

	/**
	 * Returns WPOnion JS Field ID
	 * @returns {*}
	 */
	id() {
		return $wponion.fieldID( this.element );
	}

	/**
	 * Returns Field's Module Slug.
	 * @returns {*}
	 */
	module() {
		return this.option( 'module', false );
	}

	/**
	 * Triggers An Ajax Action.
	 * @param $action
	 * @param $data
	 */
	ajax( $action = '', $data = {} ) {
		let $ajax_key         = $wponion.option( 'ajax_action_key' );
		let $default          = { module: this.module() };
		$default[ $ajax_key ] = $action;
		$data.data            = ( false === window.wponion._.isUndefined( $data.data ) ) ? window.wponion._.merge( $default, $data.data ) : $default;
		return $wponion.ajax( $data );
	}

	/**
	 * Inits A Single Element.
	 * @param $type
	 * @param $elem
	 */
	init_single_field( $type, $elem ) {
		wponion_init_field( $type, $elem );
	}

	/**
	 * Inits A Single Field Type
	 * @uses init_single_field.
	 * @param $elem
	 * @param $type
	 */
	init_field( $elem, $type ) {
		if( !is_jquery( $elem ) ) {
			$elem = this.element.find( $elem );
		}

		if( $elem.length > 0 ) {
			$elem.each( ( i, e ) => this.init_single_field( $type, jQuery( e ) ) );
		}
	}

	/**
	 * Reloads All Field Type Inside This Field.
	 */
	reload() {
		window.wponion.hooks.doAction( 'wponion_before_fields_reload', this );

		this.init_field( '.wponion-element-accordion', 'accordion' );
		this.init_field( '.wponion-element-background', 'background' );
		this.init_field( '.wponion-element-backup', 'backup' );
		this.init_field( '.wponion-element-checkbox', 'checkbox_radio' );
		this.init_field( '.wponion-element-radio', 'checkbox_radio' );
		this.init_field( '.wponion-element-clone', 'clone_element' );
		this.init_field( '.wponion-element-color_palette', 'color_palette' );
		this.init_field( '.wponion-element-color_picker', 'color_picker' );
		this.init_field( '.wponion-element-select', 'select' );
		this.init_field( '.wponion-element-icon_picker', 'icon_picker' );
		this.init_field( '.wponion-element-font_picker', 'font_selector' );
		this.init_field( '.wponion-element-group', 'group' );
		this.init_field( '.wponion-element-text:not(.wponion-inputmask)', 'text' );
		this.init_field( '.wponion-element-textarea', 'textarea' );
		this.init_field( '.wponion-element-image_select', 'image_select' );
		this.init_field( '.wponion-element-switcher', 'switcher' );
		this.init_field( '.wponion-element-wp_editor', 'wp_editor' );
		this.init_field( '.wponion-element-fieldset', 'fieldset' );
		this.init_field( '.wponion-element-wp_link', 'wp_links' );
		this.init_field( '.wponion-element-key_value', 'keyvalue_pair' );
		this.init_field( '.wponion-element-date_picker', 'date_picker' );
		this.init_field( '.wponion-element-gallery', 'gallery' );
		this.init_field( '.wponion-element-upload', 'upload' );
		this.init_field( '.wponion-element-image', 'image_upload' );
		this.init_field( '.wponion-element-button_set', 'button_set' );
		this.init_field( '.wponion-element-tab', 'jquery_tab' );
		this.init_field( '.wponion-element-google_maps', 'google_maps' );
		this.init_field( '.wponion-element-sorter', 'sorter' );
		this.init_field( '.wponion-element-typography', 'typography' );
		this.init_field( '.wponion-element-oembed', 'oembed' );
		this.init_field( '.wponion-element-heading', 'heading' );
		this.init_field( '.wponion-element-subheading', 'subheading' );
		this.init_field( '.wponion-element-content', 'content' );
		this.init_field( '.wponion-element-jambo_content', 'jambo_content' );
		this.init_field( '.wponion-element-notice', 'notice' );
		this.init_field( '.wponion-element-faq', 'faq' );

		this.init_field( '.wponion-field-tooltip', 'tooltip' );
		this.init_field( '.wponion-help', 'tooltip' );
		this.init_field( '[wponion-help]', 'tooltip' );
		this.init_field( '.wponion-wrap-tooltip', 'tooltip' );

		this.init_field( 'input[data-wponion-inputmask]', 'inputmask' );
		this.init_field( '.select2', 'select2' );
		this.init_field( '.chosen', 'chosen' );
		this.init_field( '.selectize', 'selectize' );

		window.wponion.hooks.doAction( 'wponion_after_fields_reload', this );
		return this;
	}

	/**
	 * Sets Args Data.
	 * @param $args
	 */
	set_args( $args ) {
		this._args = $args;
		return this;
	}

	/**
	 * Returns Field Parent By data-wponion-jsid attribute.
	 * @param $elem
	 * @returns {*|jQuery|HTMLElement}
	 */
	get_field_parent_by_id( $elem ) {
		let $ID = $wponion.fieldID( $elem );
		return jQuery( 'div.wponion-element[data-wponion-jsid="' + $ID + '"]' );
	}
}
