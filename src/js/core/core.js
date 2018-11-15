/* global swal:true */
import {
	array_merge,
	call_user_func,
	clone_object,
	is_jquery,
	is_null,
	is_object_like,
	is_undefined,
	is_window_arg,
	md5,
	microtime,
	rand_md5,
	strtolower,
	to_jquery,
	to_js_func,
} from 'vsp-js-helper/index';


export default class WPOnion {
	static js_func( $data ) {
		return to_js_func( $data, 'wponion_js_args', 'wponion_js_contents' );
	}

	static rand_id() {
		return md5( 'wponion_rand_' + microtime() + rand_md5() );
	}

	static valid_json( obj ) {
		try {
			JSON.parse( obj );
			return true;
		} catch( e ) {
			return false;
		}
	}

	/**
	 * Returns A Single Class For the Given Element.
	 * @param $type
	 * @returns {boolean}
	 */
	static get_field_class( $type ) {
		$type = strtolower( $type );

		if( false === is_undefined( window.wponion_fields[ $type ] ) ) {
			return window.wponion_fields[ $type ];
		} else if( false === is_undefined( window[ 'wponion_' + $type + '_field' ] ) ) {
			return window[ 'wponion_' + $type + '_field' ];
		} else if( false === is_undefined( window[ $type ] ) ) {
			return window[ $type ];
		}
		return false;
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
		return ( $var_id ) ? clone_object( this.windowArgs( $var_id, $default ) ) : $default;
	}

	/**
	 * Chceks and returns global translation string.
	 * @param $key
	 * @param $default
	 * @returns {string}
	 */
	static txt( $key, $default = 'string_default_not_found' ) {
		return ( false === is_undefined( WPOnion.text[ $key ] ) ) ? WPOnion.text[ $key ] : $default;
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
			if( is_object_like( $defined_vars ) ) {
				for( let $key in $defined_vars ) {
					if( false === is_undefined( $defined_vars[ $key ] ) ) {
						$json[ $defined_vars[ $key ] ] = WPOnion.windowArgs( $defined_vars[ $key ] );
					}
				}
				WPOnion.debug_info = $json;
			}
		}

		$handle.on( 'click', ( ( e ) => {
			e.preventDefault();
			swal( {
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
					return swal( {
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
		if( false === is_undefined( $args[ $key ] ) ) {
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
		if( WPOnion.is_debug() && is_null( WPOnion.field_debug_info ) ) {
			let $vars = WPOnion.windowArgs( 'wponion_defined_vars' ),
				$json = {},
				$utxt = WPOnion.txt( 'unmodified_debug' ),
				$mtxt = WPOnion.txt( 'modified_debug' );

			for( let $key in $vars ) {
				if( false === is_undefined( $vars[ $key ] ) ) {
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
			},
			$ajax     = false;

		if( is_object_like( $action ) ) {
			$data = $action;
		} else {
			$defaults.url += '&' + WPOnion.option( 'ajax_action_key' ) + '=' + $action;
		}

		$defaults  = array_merge( $defaults, $data );
		$onSuccess = ( is_undefined( $onSuccess ) || false === $onSuccess ) ? $defaults.onSuccess : $onSuccess;
		$onAlways  = ( is_undefined( $onError ) || false === $onError ) ? $defaults.onAlways : $onAlways;
		$onError   = ( is_undefined( $onAlways ) || false === $onAlways ) ? $defaults.onError : $onError;
		$ajax      = jQuery.ajax( $defaults );


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
			compiled = compiled || _.template( $id, options );
			return compiled( data );
		};
	}

	//@todo Migrate Plugin Debug Info.
}
