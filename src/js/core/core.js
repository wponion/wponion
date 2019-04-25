/* global swal:true */
import {
	call_user_func,
	is_jquery,
	is_window_arg,
	md5,
	microtime,
	rand_md5,
	to_jquery,
	to_js_func,
} from 'vsp-js-helper/index';

/**
 * Base WPonion JS Class.
 */
export default class WPOnion {
	/**
	 * Validates & Converts into Callable JS Functions.
	 * @param $data
	 * @returns {*|$data}
	 */
	static js_func( $data ) {
		return to_js_func( $data, 'wponion_js_args', 'wponion_js_contents' );
	}

	/**
	 * Generates A Random ID.
	 */
	static rand_id() {
		return md5( 'wponion_rand_' + microtime() + rand_md5() );
	}

	/**
	 * Checks if given string is a valid JSON.
	 * @param obj
	 * @returns {boolean}
	 */
	static valid_json( obj ) {
		try {
			JSON.parse( obj );
			return true;
		} catch( e ) {
			return false;
		}
	}

	/**
	 * Returns Field ID.
	 * @param $elem
	 * @returns {*}
	 */
	static fieldID( $elem ) {
		return to_jquery( $elem ).attr( 'data-wponion-jsid' );
	}

	/**
	 * Gets Field HTML Object Using Field ID.
	 * @param $elem
	 * @param $where_to_find
	 * @returns {*}
	 * @constructor
	 */
	static IDtoElement( $elem, $where_to_find = false ) {
		let $id = WPOnion.fieldID( $elem );
		if( false !== $where_to_find && is_jquery( $where_to_find ) ) {
			return $where_to_find.find( '.wponion-element[data-wponion-jsid="' + $id + '"' );
		}
		return jQuery( '.wponion-element[data-wponion-jsid="' + $id + '"]' );
	}

	/**
	 * Checks if given value is an jQuery instance.
	 * @param $elem
	 * @returns {*}
	 */
	static isField( $elem ) {
		return ( is_jquery( $elem ) ) ? ( this.fieldID( $elem ) ) : false;
	}

	/**
	 * Returns Window Args.
	 * @param $var_id
	 * @param $default
	 * @returns {*}
	 */
	static windowArgs( $var_id, $default = {} ) {
		return ( is_window_arg( $var_id ) ) ? window[ $var_id ] : $default;
	}

	/**
	 * Checks & Returns Field Args.
	 * @param $var_id
	 * @param $default
	 * @returns {*}
	 */
	static fieldArgs( $var_id, $default = {} ) {
		$var_id = ( this.isField( $var_id ) ) ? this.fieldID( $var_id ) : $var_id;
		return ( $var_id ) ? window.wponion._.clone( this.windowArgs( $var_id, $default ) ) : $default;
	}

	/**
	 * Chceks and returns global translation string.
	 * @param $key
	 * @param $default
	 * @returns {string}
	 */
	static txt( $key, $default = 'string_default_not_found' ) {
		return ( false === window.wponion._.isUndefined( WPOnion.text[ $key ] ) ) ? WPOnion.text[ $key ] : $default;
	}

	/**
	 * Handles Loading Screen.
	 * @param $elem
	 * @param $is_show
	 * @returns {*}
	 */
	static loading_screen( $elem, $is_show = true ) {
		$elem = to_jquery( $elem ).find( '.page-loader' );
		if( true === $is_show ) {
			return $elem.fadeIn( 'slow' );
		}
		return $elem.fadeOut( 'slow' );
	}

	/**
	 * Handles Global Debug View POPUP.
	 */
	static global_debug() {
		let $handle = jQuery( 'a.wponion-global-debug-handle' ),
			$json   = {};
		if( WPOnion.debug_info === null && $handle.length > 0 ) {
			let $defined_vars = WPOnion.windowArgs( 'wponion_defined_vars' );
			if( window.wponion._.isObject( $defined_vars ) ) {
				for( let $key in $defined_vars ) {
					if( $defined_vars.hasOwnProperty( $key ) && false === window.wponion._.isUndefined( $defined_vars[ $key ] ) ) {
						$json[ $defined_vars[ $key ] ] = WPOnion.windowArgs( $defined_vars[ $key ] );
					}
				}
				WPOnion.debug_info = $json;
			}
		}

		$handle.on( 'click', ( ( e ) => {
			e.preventDefault();
			swal.fire( {
				title: WPOnion.txt( 'global_json_output', 'Global WPOnion Debug Data' ),
				html: jQuery( '#wponiondebuginfopopup > div' ),
				showConfirmButton: true,
				confirmButtonText: WPOnion.txt( 'get_json_output', 'Get JSON Output' ),
				showCloseButton: false,
				animation: false,
				width: '800px',
				onBeforeOpen: () => swal.enableLoading(),
				onOpen: () => {
					jQuery( '#swal2-content #wponion-global-debug-content' ).jsonView( WPOnion.debug_info );
					swal.disableLoading();
				},
			} ).then( ( result ) => {
				if( result.value ) {
					return swal.fire( {
						width: '600px',
						html: '<textarea style="min-width:550px; min-height:300px">' + JSON.stringify( WPOnion.debug_info ) + '</textarea>',
					} );
				}
			} );
		} ) );
	}

	/**
	 * Checks and Retrives Values from $wponion.settings
	 * @param $key
	 * @param $default
	 * @returns {*}
	 */
	static option( $key, $default = {} ) {
		let $args = WPOnion.settings_args;
		if( false === window.wponion._.isUndefined( $args ) && false === window.wponion._.isUndefined( $args[ $key ] ) ) {
			return $args[ $key ];
		}
		return $default;
	}

	/**
	 * Returns true if WPOnion Debug is enabled.
	 * @returns {*}
	 */
	static is_debug() {
		return this.option( 'debug' );
	}

	/**
	 * Gather All Field JS Codes.
	 */
	static field_debug() {
		if( WPOnion.is_debug() && window.wponion._.isNull( WPOnion.field_debug_info ) ) {
			let $vars = WPOnion.windowArgs( 'wponion_defined_vars' ),
				$json = {},
				$utxt = WPOnion.txt( 'unmodified_debug' ),
				$mtxt = WPOnion.txt( 'modified_debug' );

			for( let $key in $vars ) {
				if( $vars.hasOwnProperty( $key ) && false === window.wponion._.isUndefined( $vars[ $key ] ) ) {
					let $data                       = WPOnion.windowArgs( $vars[ $key ] );
					$json[ $vars[ $key ] ]          = {};
					$json[ $vars[ $key ] ][ $utxt ] = $data.debug_info || $data;
					$json[ $vars[ $key ] ][ $mtxt ] = {};
				}
			}
			WPOnion.field_debug_info = $json;
		}
	}

	/**
	 * Custom Ajax Wrapper For jQuery.Ajax()
	 * @param $action
	 * @param $data
	 * @param $onSuccess
	 * @param $onError
	 * @param $onAlways
	 */
	static ajax( $action = '', $data = {}, $onSuccess = false, $onError = false, $onAlways = false ) {
		let $defaults = {
			method: 'post',
			url: WPOnion.option( 'ajax_url' ),
			onSuccess: false,
			onAlways: false,
			onError: false,
		};

		if( window.wponion._.isObject( $action ) ) {
			$data = $action;
		} else {
			$defaults.url += '&' + WPOnion.option( 'ajax_action_key' ) + '=' + $action;
		}

		$defaults  = window.wponion._.merge( $defaults, $data );
		$onSuccess = ( window.wponion._.isUndefined( $onSuccess ) || false === $onSuccess ) ? $defaults.onSuccess : $onSuccess;
		$onAlways  = ( window.wponion._.isUndefined( $onError ) || false === $onError ) ? $defaults.onAlways : $onAlways;
		$onError   = ( window.wponion._.isUndefined( $onAlways ) || false === $onAlways ) ? $defaults.onError : $onError;
		let $ajax  = jQuery.ajax( $defaults );


		if( $onSuccess ) {
			$ajax.done( ( res ) => call_user_func( $onSuccess, res ) );
		}

		if( $onError ) {
			$ajax.fail( ( res ) => call_user_func( $onError, res ) );
		}

		if( $onAlways ) {
			$ajax.always( ( res ) => call_user_func( $onAlways, res ) );
		}
		return $ajax;
	}

	/**
	 * Handles WPOnion Template for underscore.
	 * @param $id
	 * @returns {function(*=): *}
	 */
	static template( $id ) {
		let compiled,
			options = {
				evaluate: /<#([\s\S]+?)#>/g,
				interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
				escape: /\{\{([^\}]+?)\}\}(?!\})/g,
				variable: 'data'
			};

		return function( data ) {
			compiled = compiled || window.wponion._.template( $id, options );
			return compiled( data );
		};
	}
}
