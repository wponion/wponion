import {
	to_jquery,
	call_user_func,
	parse_str,
	is_url,
	url_params,
	is_callable,
	call_user_func_array,
	function_exists,
	create_function,
} from 'vsp-js-helper/index';
import $wponion from './core';
import { remove_query_arg } from 'wordpress-js-ports';


/**
 * WPOnion Custom Ajax Handler.
 */
export class WPOnion_Ajaxer {
	/**
	 * @param $ajax_args
	 * @param $ajax_config
	 */
	constructor( $ajax_args, $ajax_config ) {
		this.defaults        = {
			method: 'POST',
			url: ( typeof window.ajaxurl !== 'undefined' ) ? window.ajaxurl : false,
			data: {},
			success: false,
			error: false,
			always: false,
			action: false,
		};
		this.default_configs = {
			response_element: false,
			button: false,
			element: false,
			spinner: '<span class="spinner"></span>',
		};
		this.instance        = null;
		/**
		 * @type {WPOnion_Ajaxer.defaults}
		 */
		this.ajax_args = window.wpo._.merge( this.defaults, $ajax_args );
		this.ajax_config = window.wpo._.merge( this.default_configs, $ajax_config );
		this.ajax();
	}

	create_function( $code = false, $args = '' ) {
		return this.single_callback( create_function( $args, $code ) );
	}

	single_callback( $callback ) {
		if( window.wpo._.isFunction( $callback ) ) {
			call_user_func( $callback );
		} else if( window.wpo._.isString( $callback ) && false !== function_exists( $callback ) ) {
			call_user_func( $callback );
		} else if( window.wpo._.isString( $callback ) ) {
			this.create_function( $callback );
		} else if( window.wpo._.isObject( $callback ) ) {
			for( let $key in $callback ) {
				this.single_callback( $callback[ $key ] );
			}
		}
	}

	handle_callbacks( data ) {
		if( window.wpo._.isObject( data ) ) {
			if( false === window.wpo._.isUndefined( data.callback ) ) {
				let $callbacks = data.callback;

				if( false !== window.wpo._.isString( $callbacks ) ) {
					this.single_callback( $callbacks );
				} else if( false !== window.wpo._.isObject( $callbacks ) ) {
					for( let $key in $callbacks ) {
						this.single_callback( $callbacks[ $key ] );
					}
				}
				delete data.callback;
			}
		}
		return data;
	}

	onSuccess( data ) {
		this.handle_callbacks( data );

		if( false !== this.ajax_args.success ) {
			if( is_callable( this.ajax_args.success ) ) {
				call_user_func_array( this.ajax_args.success, [ data ] );
			}
		}
	}

	onError( data ) {
		this.handle_callbacks( data );
		if( false !== this.ajax_args.error ) {
			if( is_callable( this.ajax_args.error ) ) {
				call_user_func_array( this.ajax_args.error, [ data ] );
			}
		}
	}

	onAlways( data ) {
		this.button_unlock();
		if( false !== this.ajax_args.always ) {
			if( is_callable( this.ajax_args.always ) ) {
				call_user_func_array( this.ajax_args.always, [ data ] );
			}
		}
	}

	ajax() {
		this.button_lock();
		let $config = window.wpo._.clone( this.ajax_args );
		if( false !== $config.url ) {
			if( false !== is_url( $config.url ) ) {
				let $url_params = url_params( $config.url );
				for( let $key in $url_params ) {
					$config.url = remove_query_arg( $key, $config.url );
				}
				$config.data = window.wpo._.merge( $config.data, $url_params );
			} else {
				let $url_params = {};
				parse_str( $config.url, $url_params );
				$config.url  = ajaxurl;
				$config.data = window.wpo._.merge( $config.data, $url_params );
			}
		} else {
			$config.url = ajaxurl;
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
	}

	has_config( $key = '' ) {
		return ( typeof this.ajax_config[ $key ] !== 'undefined' );
	}

	config( $key = '', $default = false ) {
		return ( this.has_config( $key ) ) ? this.ajax_config[ $key ] : $default;
	}

	button_lock() {
		if( false !== this.config( 'button' ) ) {
			let $button = to_jquery( this.config( 'button' ) );
			if( $button ) {
				$button.wpo_button( 'processing' );
				$button.attr( 'disabled', 'disabled' );

				if( this.config( 'spinner' ) ) {
					let $spinner = jQuery( this.config( 'spinner' ) );
					$spinner.addClass( 'is-active' );
					$button.parent().append( $spinner );
				}
			}
		}
	}

	button_unlock() {
		if( false !== this.config( 'button' ) ) {
			let $button = to_jquery( this.config( 'button' ) );
			if( $button ) {
				$button.wpo_button( 'complete' );
				$button.removeAttr( 'disabled' );
				let $spinner = $button.next();
				if( $spinner.hasClass( 'spinner' ) ) {
					$spinner.remove();
				} else {
					$button.parent().find( '.spinner' ).remove();
				}
			}
		}
	}
}


export default ( ( $, document ) => {
	$( () => {
		let $class = '[data-wponion-inline-ajax], .wponion-ajax, .wponion-ajax-get, .wponion-ajax-post, .wponion-inline-ajax, .wponion-inline-ajax-get, .wponion-inline-ajax-post';
		$( document ).on( 'click', $class, ( e ) => {

			let $elem  = $( e.currentTarget ),
				$_data = $elem.data(),
				$args  = {
					url: false,
				};

			if( $elem.attr( 'data-wponion-inline-ajax' ) !== 'undefined' ) {
				let $fid1  = $elem.attr( 'data-wponion-inline-ajax' );
				let $fid2  = $elem.attr( 'id' );
				let $js_id = $wponion.fieldID( $elem );
				let $args  = {};
				if( $js_id ) {
					let $_args = $wponion.fieldArgs( $js_id, false );
					if( false !== window.wpo._.isUndefined( $_args.inline_ajax ) ) {
						$args = $_args.inline_ajax;
					}
				} else if( false !== $wponion.fieldArgs( $fid1, false ) ) {
					let $_args = $wponion.fieldArgs( $fid1, false );
					if( false === window.wpo._.isUndefined( $_args.inline_ajax ) ) {
						$args = $_args.inline_ajax;
					}
				} else if( false !== $wponion.fieldArgs( $fid2, false ) ) {
					let $_args = $wponion.fieldArgs( $fid2, false );
					if( false === window.wpo._.isUndefined( $_args.inline_ajax ) ) {
						$args = $_args.inline_ajax;
					}
				}
			} else {
				if( $elem.hasClass( 'wponion-ajax-get' ) || $elem.hasClass( 'wponion-inline-ajax-get' ) ) {
					$args.method = 'GET';
				} else if( $elem.hasClass( 'wponion-ajax-post' ) || $elem.hasClass( 'wponion-inline-ajax-post' ) ) {
					$args.method = 'POST';
				} else if( $elem.hasClass( 'wponion-ajax' ) || $elem.hasClass( 'wponion-inline-ajax' ) && typeof $_data.method !== 'undefined' ) {
					$args.method = $_data.method;
				}

				if( typeof $_data.url !== 'undefined' ) {
					$args.url = $_data.url;
				} else if( typeof $_data.href !== 'undefined' ) {
					$args.url = $_data.href;
				} else if( $elem.attr( 'href' ) ) {
					$args.url = $elem.attr( 'href' );
				}

				if( typeof $_data[ 'ajax-data' ] !== 'undefined' ) {
					$args.data = $_data[ 'ajax-data' ];
				}

				if( typeof $_data.action !== 'undefined' ) {
					$args.action = $_data.action;
				}
			}


			new WPOnion_Ajaxer( $args, {
				button: $elem,
			} );

		} );
	} );
} )( jQuery, document );
