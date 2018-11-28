import array_merge from 'locutus/php/array/array_merge';
import to_jquery from 'vsp-js-helper/parts/to_jquery';
import is_undefined from 'vsp-js-helper/parts/is_undefined';
import is_object_like from 'vsp-js-helper/parts/is_object_like';
import is_string from 'locutus/php/var/is_string';
import call_user_func from 'locutus/php/funchand/call_user_func';
import function_exists from 'locutus/php/funchand/function_exists';
import create_function from 'locutus/php/funchand/create_function';
import gettype from 'locutus/php/var/gettype';

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
			method: 'GET',
			data: {},
			url: ( typeof window.ajaxurl !== 'undefined' ) ? window.ajaxurl : false,
		};
		this.default_configs = {
			response_element: false,
			button: false,
			element: false,
			spinner: '<span class="spinner"></span>',
		};
		this.instance        = null;
		this.ajax_args       = array_merge( this.defaults, $ajax_args );
		this.ajax_config     = array_merge( this.default_configs, $ajax_config );
		this.ajax();
	}

	create_function( $code = false, $args = '' ) {
		return this.single_callback( create_function( $args, $code ) );
	}

	single_callback( $callback ) {
		if( 'function' === gettype( $callback ) ) {
			call_user_func( $callback );
		} else if( is_string( $callback ) && false !== function_exists( $callback ) ) {
			call_user_func( $callback );
		} else if( is_string( $callback ) ) {
			this.create_function( $callback );
		} else if( is_object_like( $callback ) ) {
			for( let $key in $callback ) {
				this.single_callback( $callback[ $key ] );
			}
		}
	}


	handle_callbacks( data ) {
		if( is_object_like( data ) ) {
			if( false === is_undefined( data.callback ) ) {
				let $callbacks = data.callback;

				if( false !== is_string( $callbacks ) ) {
					this.single_callback( $callbacks );
				} else if( false !== is_object_like( $callbacks ) ) {
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
	}

	onFail( data ) {
		this.handle_callbacks( data );
	}

	onAlways( data ) {
		this.button_unlock();
	}

	ajax() {
		this.button_lock();

		let $config = this.ajax_args;

		if( typeof $config.success !== 'undefined' ) {
			delete $config.success;
		}
		if( typeof $config.always !== 'undefined' ) {
			delete $config.always;
		}
		if( typeof $config.fail !== 'undefined' ) {
			delete $config.fail;
		}

		this.instance = window.wp.ajax.send( $config );
		this.instance.done( ( data ) => this.onSuccess( data ) );
		this.instance.fail( ( data ) => this.onFail( data ) );
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


export default ( ( $, document, wp ) => {
	$( () => {
		$( document ).on( 'click', '.wponion-inline-ajax', ( e ) => {
			let $this        = $( e.currentTarget ),
				$method      = $this.data( 'method' ),
				$url         = $this.data( 'url' ),
				$ajax_action = $this.data( 'ajax-action' );

			let $args = {
				method: $method
			};

			if( $url ) {
				$args.url = $url;
			}

			if( $ajax_action ) {
				$args.url = ajaxurl + '?action=' + $ajax_action;
			}

			new WPOnion_Ajaxer( $args, {
				button: $( e.currentTarget ),
			} );
		} );
	} );

} )( jQuery, document, window.wp );
