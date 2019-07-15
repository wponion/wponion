import {
	call_user_func,
	parse_args,
	function_exists,
	create_function,
	to_jquery,
	is_callable, call_user_func_array, is_url, url_params, parse_str, parse_url
} from 'vsp-js-helper/index';
import { remove_query_arg } from 'wordpress-js-ports';

/**
 * Ajax Handler.
 */
export class WPOnion_Ajaxer {
	/**
	 *
	 * @param $arg
	 */
	constructor( $arg ) {
		this.default        = {
			type: 'POST',
			url: ( window.wponion._.isUndefined( window.ajaxurl ) ) ? window.ajaxurl : false,
			data: {},
			success: false,
			error: false,
			always: false,
			action: false,
		};
		this.default_config = {
			button_lock: false,
			loading_text: window.wpo_core.txt( 'processing' ),
			response_element: false,
			element_lock: false,
			blockUI: {
				message: false,
				overlayCSS: {
					background: '#000',
					opacity: 0.7
				}
			},
			spinner: 'spinner is-active',
		};
		this.all_default    = parse_args( this.default_config, this.default );
		this.config         = {};
		this.run_config     = {};
		let $config         = parse_args( $arg, this.all_default, false );

		for( let $id in this.default_config ) {
			if( this.default_config.hasOwnProperty( $id ) ) {
				if( false === window.wponion._.isUndefined( $config[ $id ] ) ) {
					this.run_config[ $id ] = $config[ $id ];
					delete $config[ $id ];
				}

				if( false === window.wponion._.isUndefined( $arg[ $id ] ) ) {
					this.run_config[ $id ] = $arg[ $id ];
				}
			}
		}

		this.config = $config;
	}

	/**
	 * Creates A Callable Callback function based on the code data.
	 *
	 * @param $code
	 * @param $args
	 */
	create_function( $code = false, $args = '' ) {
		return this.single_callback( create_function( $args, $code ) );
	}

	/**
	 * Validates & Triggers A Single Callback Function.
	 * @param $callback
	 */
	single_callback( $callback ) {
		if( window.wponion._.isFunction( $callback ) ) {
			call_user_func( $callback );
		} else if( window.wponion._.isString( $callback ) && false !== function_exists( $callback ) ) {
			call_user_func( $callback );
		} else if( window.wponion._.isString( $callback ) ) {
			this.create_function( $callback );
		} else if( window.wponion._.isObject( $callback ) ) {
			for( let $key in $callback ) {
				if( $callback.hasOwnProperty( $key ) ) {
					this.single_callback( $callback[ $key ] );
				}
			}
		}
	}

	/**
	 * Handles An Array of Callable Ajax Functions.
	 * @param data
	 * @returns {*}
	 */
	handle_callbacks( data ) {
		if( window.wponion._.isObject( data ) ) {
			if( false === window.wponion._.isUndefined( data.callback ) ) {
				let $callbacks = data.callback;

				if( false !== window.wponion._.isString( $callbacks ) ) {
					this.single_callback( $callbacks );
				} else if( false !== window.wponion._.isObject( $callbacks ) ) {
					for( let $key in $callbacks ) {
						if( $callbacks.hasOwnProperty( $key ) ) {
							this.single_callback( $callbacks[ $key ] );
						}
					}
				}
				delete data.callback;
			}
		}
		return data;
	}

	/**
	 * Handles Response Element.
	 * @param data
	 */
	handle_response( data = {} ) {
		if( false !== this.run_config.response_element ) {
			let $elem = to_jquery( this.run_config.response_element );
			if( $elem.length > 0 ) {
				if( false === window.wponion._.isUndefined( data.msg ) && window.wponion._.isString( data.msg ) ) {
					$elem.html( data.msg );
				} else if( false === window.wponion._.isUndefined( data.html ) && window.wponion._.isString( data.html ) ) {
					$elem.html( data.html );
				} else if( window.wponion._.isString( data ) ) {
					$elem.html( data );
				}
			}
		}

	}

	/**
	 * Triggered On Ajax onSuccess
	 * @param data
	 */
	onSuccess( data ) {
		this.handle_callbacks( data );
		this.handle_response( data );
		if( false !== this.config.success ) {
			if( is_callable( this.config.success ) ) {
				call_user_func_array( this.config.success, [ data, this ] );
			}
		}
	}

	/**
	 * Triggered On Ajax onError
	 * @param data
	 */
	onError( data ) {
		this.handle_callbacks( data );
		this.handle_response( data );
		if( false !== this.config.error ) {
			if( is_callable( this.config.error ) ) {
				call_user_func_array( this.config.error, [ data, this ] );
			}
		}
	}

	/**
	 * Triggered On Ajax onAlways
	 * @param data
	 */
	onAlways( data ) {
		this.unlock();
		if( false !== this.config.always ) {
			if( is_callable( this.config.always ) ) {
				call_user_func_array( this.config.always, [ data, this ] );
			}
		}
	}

	/**
	 * Trigger An Ajax Request.
	 * @param $arg
	 * @returns {*}
	 */
	send( $arg = false ) {
		if( false === $arg ) {
			this.lock();
			let $default_ajaxurl = window.wpo_core.option( 'ajaxurl', window.ajaxurl );
			let $config          = window.wponion._.clone( this.config );
			if( false !== $config.url ) {
				let $url_params = {};
				if( false !== is_url( $config.url ) ) {
					$url_params = url_params( $config.url );
					for( let $key in $url_params ) {
						if( $url_params.hasOwnProperty( $key ) ) {
							$config.url = remove_query_arg( $key, $config.url );
						}
					}
					$config.data = parse_args( $config.data, $url_params );
				} else {
					let $url_data = parse_url( $config.url );
					if( typeof $url_data.query !== 'undefined' ) {
						parse_str( $url_data.query, $url_params );
						$config.url  = $default_ajaxurl;
						$config.data = parse_args( $config.data, $url_params );
					} else {
						$config.url = $default_ajaxurl;
					}
				}
			} else {
				$config.url = $default_ajaxurl;
			}


			if( false !== $config.action ) {
				$config.data.action = $config.action;
				delete $config.action;
			}

			if( typeof $config.success !== 'undefined' ) {
				delete $config.success;
			}
			if( typeof $config.always !== 'undefined' ) {
				delete $config.always;
			}
			if( typeof $config.error !== 'undefined' ) {
				delete $config.error;
			}

			this.instance = window.wp.ajax.send( $config );
			this.instance.done( ( data ) => this.onSuccess( data ) );
			this.instance.fail( ( data ) => this.onError( data ) );
			this.instance.always( ( data ) => this.onAlways( data ) );
			return this.instance;
		} else {
			let $_arg     = parse_args( this.config, this.run_config );
			$_arg         = parse_args( $arg, $_arg, true );
			let $instance = new WPOnion_Ajaxer( $_arg );
			return $instance.send();
		}
	}

	/**
	 * Lock
	 */
	lock() {
		this.button_lock_unlock( false );
		this.element_lock_unlock( false );
	}

	/**
	 * UnLock
	 */
	unlock() {
		this.button_lock_unlock( true );
		this.element_lock_unlock( true );
	}

	/**
	 * Unblock / Block An Element
	 * @param $unlock
	 */
	element_lock_unlock( $unlock = false ) {
		if( false !== this.run_config.element_lock ) {
			let $elem = to_jquery( this.run_config.element_lock );
			if( $elem.length > 0 ) {
				if( false === $unlock ) {
					$elem.block( this.run_config.blockUI );
				} else {
					$elem.unblock();
				}
			}
		}
	}

	/**
	 * Unblock / Block A Button.
	 * @param $unlock
	 */
	button_lock_unlock( $unlock = false ) {
		if( false !== this.run_config.button_lock ) {
			let $elem = to_jquery( this.run_config.button_lock );
			if( $elem.length > 0 ) {
				if( false === $unlock ) {
					$elem.wponion_button( {
						loadingText: this.run_config.loading_text,
						spinner: this.run_config.spinner,
					} ).wponion_button( 'loading' );
				} else {
					$elem.wponion_button( 'reset' );
				}
			}
		}
	}
}

/**
 * WPOnion Quick Ajaxer.
 */
export function init_ajaxer() {
	let $class = '[data-wponion-inline-ajax], .wponion-ajax, .wponion-ajax-get, .wponion-ajax-post, .wponion-inline-ajax, .wponion-inline-ajax-get, .wponion-inline-ajax-post';
	jQuery( document ).on( 'click', $class, ( e ) => {
		let $elem  = jQuery( e.currentTarget ),
			$_data = $elem.data(),
			$args  = {
				url: false,
			};


		if( false === window.wponion._.isUndefined( $elem.attr( 'data-wponion-inline-ajax' ) ) ) {
			let $fid1  = $elem.attr( 'data-wponion-inline-ajax' );
			let $fid2  = $elem.attr( 'id' );
			let $js_id = $wponion.jsid( $elem );
			let $_args = [];
			$_args.push( $wponion.fieldArgs( $js_id, false ) );
			$_args.push( $wponion.fieldArgs( $fid1, false ) );
			$_args.push( $wponion.fieldArgs( $fid2, false ) );

			for( let $k in $_args ) {
				if( $_args.hasOwnProperty( $k ) && false !== $_args[ $k ] && window.wponion._.isObject( $_args[ $k ] ) ) {
					if( $_args[ $k ].hasOwnProperty( 'inline_ajax' ) && false === window.wponion._.isUndefined( $_args[ $k ].inline_ajax ) && window.wponion._.isObject( $_args[ $k ].inline_ajax ) ) {
						$args = $_args[ $k ].inline_ajax;
					}
				}
			}
		} else {
			if( $elem.hasClass( 'wponion-ajax-get' ) || $elem.hasClass( 'wponion-inline-ajax-get' ) ) {
				$args.type = 'GET';
			} else if( $elem.hasClass( 'wponion-ajax-post' ) || $elem.hasClass( 'wponion-inline-ajax-post' ) ) {
				$args.type = 'POST';
			} else if( $elem.hasClass( 'wponion-ajax' ) || $elem.hasClass( 'wponion-inline-ajax' ) && typeof $_data.type !== 'undefined' ) {
				$args.type = $_data.type;
			}

			if( false === window.wponion._.isUndefined( $_data.url ) ) {
				$args.url = $_data.url;
			} else if( false === window.wponion._.isUndefined( $_data.href ) ) {
				$args.url = $_data.href;
			} else if( $elem.attr( 'href' ) ) {
				$args.url = $elem.attr( 'href' );
			}

			if( false === window.wponion._.isUndefined( $_data[ 'ajax-data' ] ) ) {
				$args.data = $_data[ 'ajax-data' ];
			}

			if( false === window.wponion._.isUndefined( $_data.action ) ) {
				$args.action = $_data.action;
			}
		}

		$args.button_lock = $elem;
		window.wponion_ajax( window.wpo_core.js_func( $args ) ).send();
	} );
}
