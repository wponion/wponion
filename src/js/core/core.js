import {
	call_user_func,
	is_jquery,
	is_window_arg,
	window_arg,
	md5,
	microtime,
	rand_md5,
	to_jquery,
	to_js_func,
	is_callable,
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
			success: $onSuccess,
			always: $onError,
			error: $onAlways,
		};

		if( window.wponion._.isObject( $action ) ) {
			$data = $action;
		} else {
			$defaults.url += '&' + WPOnion.option( 'ajax_action_key' ) + '=' + $action;
		}

		$defaults = window.wponion._.merge( $defaults, $data );

		let $old_success = $defaults.success;
		let $old_always  = $defaults.always;

		$defaults.success = ( res, instance ) => {
			return new Promise( ( resolve ) => {
				return WPOnion.handle_ajax_response( res, resolve );
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
	}

	/**
	 * Handles Ajax Requests.
	 * @param res
	 * @param resolve
	 */
	static handle_ajax_response( res, resolve ) {
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
				window.wponion.core.script_tag( res.wpo_core.localizer );
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

	/**
	 * Appends Script Data To Existing Thing.
	 * @param $html
	 * @return {jQuery}
	 */
	static script_tag( $html ) {
		if( window.wponion._.isObject( $html ) ) {
			for( let $i in $html ) {
				if( $html.hasOwnProperty( $i ) ) {
					window_arg( $i, $html[ $i ] );
				}
			}
		}
	}
}
