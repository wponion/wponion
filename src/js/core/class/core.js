import {
	to_js_func,
	to_jquery,
	microtime,
	rand_md5,
	md5,
	is_jquery,
	is_callable,
	call_user_func,
	window_arg
} from 'vsp-js-helper/index';

let $core = {};

/**
 * Validates & Converts into Callable JS Functions.
 * @param $data
 * @returns {Array|Object}
 */
$core.js_func = ( $data ) => to_js_func( $data, 'wponion_js_args', 'wponion_js_contents' );

/**
 * Generates A Random ID.
 */
$core.rand_id = () => md5( 'wponion_rand_' + microtime() + rand_md5() );

/**
 * Chceks and returns global translation string.
 * @param $key
 * @param $default
 * @returns {string}
 */
$core.txt = ( $key, $default = 'string_default_not_found' ) => ( false === window.wponion._.isUndefined( window.wponion_il8n[ $key ] ) ) ? window.wponion_il8n[ $key ] : $default;

/**
 * Returns Field ID.
 * @param $elem
 * @returns {*}
 */
$core.jsid = ( $elem ) => to_jquery( $elem ).attr( 'data-wponion-jsid' );

/**
 * Checks if given value is an jQuery instance.
 * @param $elem
 * @returns {*}
 */
$core.isField = ( $elem ) => ( window.wpo_core.jsid( to_jquery( $elem ) ) );

/**
 * Returns Window Args.
 * @param $var_id
 * @param $default
 * @returns {*}
 */
$core.windowArgs = ( $var_id, $default = {} ) => ( !window.wponion._.isUndefined( $var_id ) ) ? window[ $var_id ] : $default;

/**
 * Returns true if WPOnion Debug is enabled.
 * @returns {*}
 */
$core.is_debug = () => $core.option( 'debug' );

/**
 * Checks if given string is a valid JSON.
 * @param obj
 * @returns {boolean}
 */
$core.valid_json = ( obj ) => {
	try {
		JSON.parse( obj );
		return true;
	} catch( e ) {
		return false;
	}
};

/**
 * Gets Field HTML Object Using Field ID.
 * @param $elem
 * @param $where
 * @returns {*}
 * @constructor
 */
$core.IDtoElement = ( $elem, $where = false ) => {
	let $find_id = `.wponion-element[data-wponion-jsid="${window.wpo_core.jsid( $elem )}"`;
	return ( false !== $where && is_jquery( $where ) ) ? $where.find( $find_id ) : jQuery( $find_id );
};

/**
 * Checks & Returns Field Args.
 * @param $var_id
 * @param $default
 * @returns {*}
 */
$core.fieldArgs = ( $var_id, $default = {} ) => {
	$var_id = ( window.wpo_core.isField( $var_id ) ) ? window.wpo_core.jsid( $var_id ) : $var_id;
	return ( $var_id ) ? window.wponion._.clone( window.wpo_core.windowArgs( $var_id, $default ) ) : $default;
};

/**
 * Checks and Retrives Values from $wponion.settings
 * @param $key
 * @param $default
 * @returns {*}
 */
$core.option = ( $key, $default = {} ) => {
	let $args = window.wpo_core.windowArgs( 'wponion_core', false );
	return ( !window.wponion._.isUndefined( $args ) && !window.wponion._.isUndefined( $args[ $key ] ) ) ? $args[ $key ] : $default
};

/**
 * Custom Ajax Wrapper For jQuery.Ajax()
 * @param $action
 * @param $data
 * @param $onSuccess
 * @param $onError
 * @param $onAlways
 */
$core.ajax = ( $action = '', $data = {}, $onSuccess = false, $onError = false, $onAlways = false ) => {
	let $defaults = {
		method: 'post',
		url: window.wpo_core.option( 'ajax_url' ),
		success: $onSuccess,
		always: $onError,
		error: $onAlways,
	};

	if( window.wponion._.isObject( $action ) ) {
		$data = $action;
	} else {
		$defaults.url += '&' + window.wpo_core.option( 'ajax_action_key' ) + '=' + $action;
	}

	$defaults = window.wponion._.merge( $defaults, $data );

	let $old_success = $defaults.success;
	let $old_always  = $defaults.always;

	$defaults.success = ( res, instance ) => {
		return new Promise( ( resolve ) => {
			return window.wpo_core.handle_ajax_response( res, resolve );
		} ).then( () => {
			instance.unlock();
			if( is_callable( $old_success ) ) {
				call_user_func( $old_success, res, instance );
			}
		} ).catch( () => {
			instance.unlock();
			if( is_callable( $old_success ) ) {
				call_user_func( $old_success, res, instance );
			}
		} );
	};
	$defaults.always  = ( res, instance ) => {
		instance.lock();
		if( is_callable( $old_always ) ) {
			call_user_func( $old_always, res, instance );
		}
	};

	return window.wponion_ajax( $defaults );
};

/**
 * Handles Ajax Requests.
 * @param res
 * @param resolve
 */
$core.handle_ajax_response = ( res, resolve ) => {
	if( false === window.wponion._.isUndefined( res.wpo_core ) ) {

		if( false === window.wponion._.isUndefined( res.wpo_core.styles_html ) ) {
			let $styles = jQuery( res.wpo_core.styles_html );
			jQuery.each( $styles, function() {
				let $id = jQuery( this ).attr( 'href' );
				if( jQuery( document ).find( 'link[href="' + $id + '"]' ).length === 0 ) {
					jQuery( this ).appendTo( 'body' );
				}
			} );
		}

		if( false === window.wponion._.isUndefined( res.wpo_core.localizer ) ) {
			if( window.wponion._.isObject( res.wpo_core.localizer ) ) {
				for( let $i in res.wpo_core.localizer ) {
					if( res.wpo_core.localizer.hasOwnProperty( $i ) ) {
						window_arg( $i, res.wpo_core.localizer[ $i ] );
					}
				}
			}
		}

		if( false === window.wponion._.isUndefined( res.wpo_core.scripts_html ) ) {
			let $script      = jQuery( '<div>' + res.wpo_core.scripts_html + '</div>' ),
				$srcs        = [];
			$script          = $script.find( 'script' );
			let $load_script = ( $script ) => {
				if( $script ) {
					jQuery.ajax( {
						url: $script,
						dataType: 'script',
						cache: true,
						success: () => {
							$srcs.shift();
							$load_script( $srcs[ 0 ] );
						}
					} );
				} else if( is_callable( resolve ) ) {
					resolve();
				}
			};
			$script.each( function() {
				let $id = jQuery( this ).attr( 'src' );
				if( jQuery( document ).find( 'script[src="' + $id + '"]' ).length === 0 ) {
					$srcs.push( $id );
				}
			} );
			$load_script( $srcs[ 0 ] );
		} else if( is_callable( resolve ) ) {
			resolve();
		}
	} else if( is_callable( resolve ) ) {
		resolve();
	}
};

/**
 * Handles WPOnion Template for underscore.
 * @param $id
 * @returns {function(*=): *}
 */
$core.template = ( $id ) => {
	let compiled, options = {
		evaluate: /<#([\s\S]+?)#>/g,
		interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
		escape: /\{\{([^\}]+?)\}\}(?!\})/g,
		variable: 'data'
	};
	return function( data ) {
		compiled = compiled || window.wponion._.template( $id, options );
		return compiled( data );
	};
};

export default $core;
