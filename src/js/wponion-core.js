/**
 * Stores Global Debug Info.
 * @type {null}
 */
$wponion.debug_info = null;

/**
 * Stores Field Debug Info.
 * @type {null}
 */
$wponion.field_debug_info = null;

/**
 * Stores Global Settings Args.
 * @type {null}
 */
$wponion.settings_args = null;

/**
 * Stores All Global Translation String.
 * @type {null}
 */
$wponion.text = null;

/**
 * Stores All Instance ina object.
 * @type {{}}
 * @private
 */
$wponion._instances = {};

/**
 * Creates A Instance of Swal Tost.
 */
$wponion.tost = swal.mixin( {
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	customClass: 'wpsweatalert2',
	onOpen: ( () => {
		let $height = parseInt( jQuery( "#wpadminbar" ).actual( 'height' ) ) + 3;
		jQuery( "div.wpsweatalert2" ).parent().css( 'top', $height + 'px' );
	} ),
	timer: 4000
} );

/**
 * Returns Field JS ID
 * @type {function(*)}
 */
$wponion.field_js_id = ( ( $elem ) => {
	return $elem.attr( 'data-wponion-jsid' );
} );

/**
 * Checks and returns variable from window object.
 * @type {function(*=, *=)}
 */
$wponion.js_args = ( ( $var_id, $default ) => {
	$default = $default || {};
	if ( $var_id ) {
		if ( typeof window[ $var_id ] === 'undefined' || window[ $var_id ] === undefined ) {
			return $default;
		}
		return window[ $var_id ];
	}

	return $default;
} );

/**
 * Checks And Returns Field Args.
 * @type {function(*=, *=)}
 */
$wponion.field_args = ( ( $elem, $default ) => {
	$default = $default || {};
	return JSON.parse( JSON.stringify( $wponion.js_args( $wponion.field_js_id( $elem ), $default ) ) );
} );

/**
 * Returns URL String into a object
 * @example http://example.com?q1=22&q2=49 turns into
 * { q1 : 22 , q2 : 49 }
 * @type {function(*=)}
 */
$wponion.url_to_object = ( ( $url ) => {
	return ( $url || document.location.search ).replace( /(^\?)/, '' ).split( "&" ).map( function ( n ) {
		return n = n.split( "=" ), this[ n[ 0 ] ] = n[ 1 ], this
	}.bind( {} ) )[ 0 ];
} );

/**
 * Chceks and returns global translation string.
 * @type {function(*, *=)}
 */
$wponion.txt = ( ( $key, $default ) => {
	$default = $default || 'string_default_not_found';
	return ( $wponion.text[ $key ] !== undefined ) ? $wponion.text[ $key ] : $default;
} );

/**
 * Handles Loading Screen.
 * @type {function(*)}
 */
$wponion.loading_screen = ( ( $elem ) => {
	$elem.find( '.wponion-page-loader' ).fadeOut( 'slow' );
	return $wponion;
} );

/**
 * Handles Global Debug View.
 * @type {function()}
 */
$wponion.global_debug_view = ( () => {
	let $handle = jQuery( "a.wponion-global-debug-handle" );

	if ( $wponion.debug_info === null ) {
		if ( $handle.length > 0 ) {
			let $defined_vars = $wponion.js_args( 'wponion_defined_vars' ),
				$json         = {};
			jQuery.each( $defined_vars, ( ( $i, $el ) => {
				$json[ $el ] = $wponion.js_args( $el );
			} ) );
			$wponion.debug_info = $json;
		}
	}

	$handle.on( 'click', ( ( e ) => {
		e.preventDefault();
		let $debug_popup = swal( {
			title: $wponion.txt( 'global_json_output', "Global WPOnion Debug Data" ),
			html: jQuery( '#wponiondebuginfopopup > div' ),
			showConfirmButton: true,
			confirmButtonText: $wponion.txt( 'get_json_output', 'Get JSON Output' ),
			showCloseButton: false,
			animation: false,
			width: '800px',
			onBeforeOpen: ( () => {
				swal.enableLoading();
			} ),

			onOpen: ( () => {
				jQuery( '#swal2-content #wponion-global-debug-content' )
					.jsonView( $wponion.debug_info )
					.overlayScrollbars( {
						className: "os-theme-dark",
						resize: "vertical",
					} );
				swal.disableLoading();
			} )
		} ).then( ( result ) => {
			if ( result.value ) {
				return swal( {
					width: '600px',
					html: '<textarea style="min-width:550px; min-height:300px">' + JSON.stringify( $wponion.debug_info ) + '</textarea>'
				} )
			}
		} );
	} ) );
	return $wponion;
} );

/**
 * Checks and Retrives Values from $wponion.settings
 * @type {function(*, *=)}
 */
$wponion.settings = ( ( $key, $default ) => {
	$default = $default || {};
	if ( $wponion.settings_args[ $key ] !== undefined ) {
		return $wponion.settings_args[ $key ];
	}
	return $default;
} );

/**
 * Checks if current instance is debug.
 * @returns {*}
 */
$wponion.is_debug = function () {
	return $wponion.settings( 'debug' );
};

/**
 * Gather All Field JS Codes.
 * @private
 */
$wponion.__field_debug_info = function () {
	if ( $wponion.is_debug() ) {
		if ( $wponion.field_debug_info === null ) {
			let $defined_vars = $wponion.js_args( 'wponion_defined_vars' ),
				$json         = {},
				$utxt         = $wponion.txt( "unmodified_debug" ),
				$mtxt         = $wponion.txt( "modified_debug" );
			jQuery.each( $defined_vars, ( ( $i, $el ) => {
				let $data             = $wponion.js_args( $el );
				$json[ $el ]          = {};
				$json[ $el ][ $utxt ] = $data[ 'debug_info' ] || $data;
				$json[ $el ][ $mtxt ] = {};
			} ) );

			$wponion.field_debug_info = $json;
		}
	}
	return $wponion;
};

/**
 * Stores Updated Plugin Debug Info.
 * @param $elemid
 * @param $key
 * @param $value
 * @returns {{}}
 * @private
 */
$wponion.__plugin_debug_info = function ( $elemid, $key, $value ) {
	if ( $wponion.is_debug() ) {
		if ( typeof $elemid === 'object' ) {
			$elemid = $wponion.field_js_id( $elemid );
		}

		let $mtxt = $wponion.txt( "modified_debug" );

		if ( $wponion.field_debug_info[ $elemid ] !== undefined ) {
			if ( $wponion.field_debug_info[ $elemid ][ $mtxt ][ $key ] === undefined ) {
				$wponion.field_debug_info[ $elemid ][ $mtxt ][ $key ] = $value;
			}
		}
	}
	return $wponion;
};

/**
 * Gets Plugin Debug Info.
 * @param $elemid
 * @returns {*}
 * @private
 */
$wponion._get_debug_info = function ( $elemid ) {
	if ( $wponion.is_debug() ) {
		if ( typeof $elemid === 'object' ) {
			$elemid = $wponion.field_js_id( $elemid );
		}

		if ( $wponion.field_debug_info[ $elemid ] !== undefined ) {
			return $wponion.field_debug_info[ $elemid ];
		}
	}
	return {};
};

/**
 * Checks and returns a arg from field js args.
 * @param $elem
 * @param $key
 * @param $default
 * @returns {*}
 */
$wponion.get_js_arg = function ( $elem, $key, $default ) {
	$default = $default || {};
	let $arg = $wponion.js_args( $elem, $default );
	if ( $arg[ $key ] !== undefined ) {
		return $arg[ $key ];
	}
	return $default;
};

/**
 * Returns Module Name From Field.
 * @param $elem
 * @returns {*}
 */
$wponion.get_module = function ( $elem ) {
	return $wponion.get_js_arg( $elem, 'module', false );
};

/**
 * Returns Plugin ID From Field.
 * @param $elem
 * @returns {*}
 */
$wponion.get_plugin_id = function ( $elem ) {
	return $wponion.get_js_arg( $elem, 'plugin_id', false );
};

/**
 * Handles Array Merge.
 * @returns {*}
 */
$wponion.array_merge = function () {
	var args   = Array.prototype.slice.call( arguments )
	var argl   = args.length
	var arg
	var retObj = {}
	var k      = ''
	var argil  = 0
	var j      = 0
	var i      = 0
	var ct     = 0
	var toStr  = Object.prototype.toString
	var retArr = true
	for ( i = 0; i < argl; i++ ) {
		if ( toStr.call( args[ i ] ) !== '[object Array]' ) {
			retArr = false
			break
		}
	}
	if ( retArr ) {
		retArr = []
		for ( i = 0; i < argl; i++ ) {
			retArr = retArr.concat( args[ i ] )
		}
		return retArr
	}
	for ( i = 0, ct = 0; i < argl; i++ ) {
		arg = args[ i ]
		if ( toStr.call( arg ) === '[object Array]' ) {
			for ( j = 0, argil = arg.length; j < argil; j++ ) {
				retObj[ ct++ ] = arg[ j ]
			}
		} else {
			for ( k in arg ) {
				if ( arg.hasOwnProperty( k ) ) {
					if ( parseInt( k, 10 ) + '' === k ) {
						retObj[ ct++ ] = arg[ k ]
					} else {
						retObj[ k ] = arg[ k ]
					}
				}
			}
		}
	}
	return retObj
};

/**
 * Custom Ajax Wrapper for jQuery.ajax();
 * @param $action
 * @param $data
 * @param $onSuccess
 * @param $onError
 * @param $onAlways
 * @returns {*}
 */
$wponion.ajax = function ( $action, $data, $onSuccess, $onError, $onAlways ) {
	let $defaults = {
		url: $wponion.settings( 'ajax_url' ),
		method: "post",
	};
	$data         = $data || {};
	if ( typeof $action === 'object' ) {
		$data = $action;
	} else {
		$defaults[ 'url' ] = $defaults[ 'url' ] + '&' + $wponion.settings( 'ajax_action_key' ) + '=' + $action;
	}

	$defaults = $wponion.array_merge( $defaults, $data );

	if ( $defaults.onSuccess !== undefined ) {
		$onSuccess = $defaults.onSuccess;
	}

	if ( $defaults.onError !== undefined ) {
		$onError = $defaults.onError;
	}

	if ( $defaults.onAlways !== undefined ) {
		$onAlways = $defaults.onAlways;
	}

	let $ajax = jQuery.ajax( $defaults );

	$ajax.done( function ( res ) {
		if ( $onSuccess !== undefined ) {
			$onSuccess( res );
		}
	} );

	$ajax.fail( function ( res ) {
		if ( $onError !== undefined ) {
			$onError( res );
		}
	} );

	$ajax.always( function ( res ) {
		if ( $onAlways !== undefined ) {
			$onAlways( res );
		}
	} );

	return $ajax;
};

/**
 * Triggers An Update.
 * @param $elem
 */
$wponion.trigger_update_select = function ( $elem ) {
	if ( $elem.hasClass( 'chosen' ) ) {
		$elem.trigger( 'chosen:updated' );
	} else if ( $elem.hasClass( 'select2' ) ) {
		$elem.trigger( 'change' );
	} else if ( $elem.hasClass( 'selectize' ) ) {

	}
};

/**
 * Saves A Instance to array.
 * @param $field_id
 * @param $instance
 */
$wponion.save_instance = function ( $field_id, $instance ) {
	if ( $wponion._instances[ $field_id ] === undefined ) {
		$wponion._instances[ $field_id ] = $instance;
	}
};

/**
 * Returns A Saved Instance.
 * @param $elem
 * @returns {*}
 */
$wponion.get = function ( $elem ) {
	if ( typeof $elem !== 'string' ) {
		$elem = $wponion.field_js_id( $elem );
	}
	if ( $wponion._instances[ $elem ] !== undefined ) {
		return $wponion._instances[ $elem ];
	}
	return false;
};

/**
 * Converts Simple function string into JS functions.
 * @param $string
 * @returns {*}
 */
$wponion.validate_single_function = function ( $string ) {
	if ( typeof $string === 'object' ) {
		let $args     = ( $string[ 'wponion_js_args' ] === false ) ? false : $string[ 'wponion_js_args' ];
		let $contents = ( $string[ 'wponion_js_contents' ] === false ) ? false : $string[ 'wponion_js_contents' ];
		if ( $args === false && $contents !== false ) {
			return new Function( $contents );
		} else if ( $args !== false && $contents !== false ) {
			return new Function( $args, $contents );
		} else {
			return $string;
		}
	}
	return $string;
};

/**
 * Handles a array of data to check if there any function string that needs to be converted.
 * @param $data
 * @returns {*}
 */
$wponion.validate_js_function = function ( $data ) {
	if ( typeof $data === 'object' || $data === 'array' ) {
		for ( var $_d in $data ) {
			$data[ $_d ] = $wponion.validate_single_function( $data[ $_d ] );
		}
	}
	return $data;

};

/**
 * @param window = Window Object
 * @param document = Document Object
 * @param $ = jQuery Object
 * @param wpo = $wponion object
 * @param wp = WordPress object
 */
( ( window, document, $, wpo, wp ) => {
	let $wph = wp.hooks;

	$( window ).on( 'load', ( () => {
		/**
		 * Retrives Basic Varaibles.
		 */
		wpo.settings_args = wpo.js_args( 'wponion_core', {} ); // Stores Basic Settings.
		wpo.text = wpo.js_args( 'wponion_i18n', {} ); // Stores Translation Strings.
		wpo.__field_debug_info();

		/**
		 * Triggers Before any of the core js functions called.
		 */
		$wph.doAction( 'wponion_before_init' );
		wpo.global_debug_view();
		wpo.loading_screen( $( '.wponion-framework' ) );

		/**
		 * Triggered after all fields are set.
		 */
		$wph.doAction( 'wponion_init' );
	} ) );

	$wph.doAction( 'wponion_loaded' );

} )( window, document, jQuery, $wponion, wp );