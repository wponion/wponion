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
		let $height = parseInt( jQuery( "#wpadminbar" ).height() ) + 3;
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
	$elem.find( '.page-loader' ).fadeOut( 'slow' );
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
					.jsonView( $wponion.debug_info );
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
 * Calculate md5 hash of the string
 */
$wponion.md5 = ( function () {
	"use strict";

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Copyright (C) Paul Johnston 1999 - 2000.
	 * Updated by Greg Holt 2000 - 2001.
	 * See http://pajhome.org.uk/site/legal.html for details.
	 */

	/*
	 * Convert a 32-bit number to a hex string with ls-byte first
	 */
	var hex_chr = "0123456789abcdef";

	function rhex ( num ) {
		var str = "", j;
		for ( j = 0; j <= 3; j++ )
			str += hex_chr.charAt( ( num >> ( j * 8 + 4 ) ) & 0x0F ) +
				hex_chr.charAt( ( num >> ( j * 8 ) ) & 0x0F );
		return str;
	}

	/*
	 * Convert a string to a sequence of 16-word blocks, stored as an array.
	 * Append padding bits and the length, as described in the MD5 standard.
	 */
	function str2blks_MD5 ( str ) {
		var nblk = ( ( str.length + 8 ) >> 6 ) + 1,
			blks = new Array( nblk * 16 ),
			i;
		for ( i = 0; i < nblk * 16; i++ ) blks[ i ] = 0;
		for ( i = 0; i < str.length; i++ )
			blks[ i >> 2 ] |= str.charCodeAt( i ) << ( ( i % 4 ) * 8 );
		blks[ i >> 2 ] |= 0x80 << ( ( i % 4 ) * 8 );
		blks[ nblk * 16 - 2 ] = str.length * 8;
		return blks;
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function add ( x, y ) {
		var lsw = ( x & 0xFFFF ) + ( y & 0xFFFF );
		var msw = ( x >> 16 ) + ( y >> 16 ) + ( lsw >> 16 );
		return ( msw << 16 ) | ( lsw & 0xFFFF );
	}

	/*
	 * Bitwise rotate a 32-bit number to the left
	 */
	function rol ( num, cnt ) {
		return ( num << cnt ) | ( num >>> ( 32 - cnt ) );
	}

	/*
	 * These functions implement the basic operation for each round of the
	 * algorithm.
	 */
	function cmn ( q, a, b, x, s, t ) {
		return add( rol( add( add( a, q ), add( x, t ) ), s ), b );
	}

	function ff ( a, b, c, d, x, s, t ) {
		return cmn( ( b & c ) | ( ( ~b ) & d ), a, b, x, s, t );
	}

	function gg ( a, b, c, d, x, s, t ) {
		return cmn( ( b & d ) | ( c & ( ~d ) ), a, b, x, s, t );
	}

	function hh ( a, b, c, d, x, s, t ) {
		return cmn( b ^ c ^ d, a, b, x, s, t );
	}

	function ii ( a, b, c, d, x, s, t ) {
		return cmn( c ^ ( b | ( ~d ) ), a, b, x, s, t );
	}

	/*
	 * Take a string and return the hex representation of its MD5.
	 */
	function calcMD5 ( str ) {
		var x = str2blks_MD5( str );
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;

		var i, olda, oldb, oldc, oldd;

		for ( i = 0; i < x.length; i += 16 ) {
			olda = a;
			oldb = b;
			oldc = c;
			oldd = d;

			a = ff( a, b, c, d, x[ i + 0 ], 7, -680876936 );
			d = ff( d, a, b, c, x[ i + 1 ], 12, -389564586 );
			c = ff( c, d, a, b, x[ i + 2 ], 17, 606105819 );
			b = ff( b, c, d, a, x[ i + 3 ], 22, -1044525330 );
			a = ff( a, b, c, d, x[ i + 4 ], 7, -176418897 );
			d = ff( d, a, b, c, x[ i + 5 ], 12, 1200080426 );
			c = ff( c, d, a, b, x[ i + 6 ], 17, -1473231341 );
			b = ff( b, c, d, a, x[ i + 7 ], 22, -45705983 );
			a = ff( a, b, c, d, x[ i + 8 ], 7, 1770035416 );
			d = ff( d, a, b, c, x[ i + 9 ], 12, -1958414417 );
			c = ff( c, d, a, b, x[ i + 10 ], 17, -42063 );
			b = ff( b, c, d, a, x[ i + 11 ], 22, -1990404162 );
			a = ff( a, b, c, d, x[ i + 12 ], 7, 1804603682 );
			d = ff( d, a, b, c, x[ i + 13 ], 12, -40341101 );
			c = ff( c, d, a, b, x[ i + 14 ], 17, -1502002290 );
			b = ff( b, c, d, a, x[ i + 15 ], 22, 1236535329 );

			a = gg( a, b, c, d, x[ i + 1 ], 5, -165796510 );
			d = gg( d, a, b, c, x[ i + 6 ], 9, -1069501632 );
			c = gg( c, d, a, b, x[ i + 11 ], 14, 643717713 );
			b = gg( b, c, d, a, x[ i + 0 ], 20, -373897302 );
			a = gg( a, b, c, d, x[ i + 5 ], 5, -701558691 );
			d = gg( d, a, b, c, x[ i + 10 ], 9, 38016083 );
			c = gg( c, d, a, b, x[ i + 15 ], 14, -660478335 );
			b = gg( b, c, d, a, x[ i + 4 ], 20, -405537848 );
			a = gg( a, b, c, d, x[ i + 9 ], 5, 568446438 );
			d = gg( d, a, b, c, x[ i + 14 ], 9, -1019803690 );
			c = gg( c, d, a, b, x[ i + 3 ], 14, -187363961 );
			b = gg( b, c, d, a, x[ i + 8 ], 20, 1163531501 );
			a = gg( a, b, c, d, x[ i + 13 ], 5, -1444681467 );
			d = gg( d, a, b, c, x[ i + 2 ], 9, -51403784 );
			c = gg( c, d, a, b, x[ i + 7 ], 14, 1735328473 );
			b = gg( b, c, d, a, x[ i + 12 ], 20, -1926607734 );

			a = hh( a, b, c, d, x[ i + 5 ], 4, -378558 );
			d = hh( d, a, b, c, x[ i + 8 ], 11, -2022574463 );
			c = hh( c, d, a, b, x[ i + 11 ], 16, 1839030562 );
			b = hh( b, c, d, a, x[ i + 14 ], 23, -35309556 );
			a = hh( a, b, c, d, x[ i + 1 ], 4, -1530992060 );
			d = hh( d, a, b, c, x[ i + 4 ], 11, 1272893353 );
			c = hh( c, d, a, b, x[ i + 7 ], 16, -155497632 );
			b = hh( b, c, d, a, x[ i + 10 ], 23, -1094730640 );
			a = hh( a, b, c, d, x[ i + 13 ], 4, 681279174 );
			d = hh( d, a, b, c, x[ i + 0 ], 11, -358537222 );
			c = hh( c, d, a, b, x[ i + 3 ], 16, -722521979 );
			b = hh( b, c, d, a, x[ i + 6 ], 23, 76029189 );
			a = hh( a, b, c, d, x[ i + 9 ], 4, -640364487 );
			d = hh( d, a, b, c, x[ i + 12 ], 11, -421815835 );
			c = hh( c, d, a, b, x[ i + 15 ], 16, 530742520 );
			b = hh( b, c, d, a, x[ i + 2 ], 23, -995338651 );

			a = ii( a, b, c, d, x[ i + 0 ], 6, -198630844 );
			d = ii( d, a, b, c, x[ i + 7 ], 10, 1126891415 );
			c = ii( c, d, a, b, x[ i + 14 ], 15, -1416354905 );
			b = ii( b, c, d, a, x[ i + 5 ], 21, -57434055 );
			a = ii( a, b, c, d, x[ i + 12 ], 6, 1700485571 );
			d = ii( d, a, b, c, x[ i + 3 ], 10, -1894986606 );
			c = ii( c, d, a, b, x[ i + 10 ], 15, -1051523 );
			b = ii( b, c, d, a, x[ i + 1 ], 21, -2054922799 );
			a = ii( a, b, c, d, x[ i + 8 ], 6, 1873313359 );
			d = ii( d, a, b, c, x[ i + 15 ], 10, -30611744 );
			c = ii( c, d, a, b, x[ i + 6 ], 15, -1560198380 );
			b = ii( b, c, d, a, x[ i + 13 ], 21, 1309151649 );
			a = ii( a, b, c, d, x[ i + 4 ], 6, -145523070 );
			d = ii( d, a, b, c, x[ i + 11 ], 10, -1120210379 );
			c = ii( c, d, a, b, x[ i + 2 ], 15, 718787259 );
			b = ii( b, c, d, a, x[ i + 9 ], 21, -343485551 );

			a = add( a, olda );
			b = add( b, oldb );
			c = add( c, oldc );
			d = add( d, oldd );
		}
		return rhex( a ) + rhex( b ) + rhex( c ) + rhex( d );
	}

	return calcMD5;
} )();

/**
 * Unique random md5
 * @returns {String}
 */
$wponion.randomMD5 = function () {
	return String( $wponion.md5( Math.random() + '-' + Math.random() + '-' + Math.random() ) );
};

/**
 * Checks if the provided argument is a valid JSON.
 * @param obj
 * @returns {boolean}
 */
$wponion.valid_json = obj => {
	try {
		JSON.parse( obj );
		return true;
	} catch ( e ) {
		return false;
	}
};

/**
 * Handles WPOnion Template for underscore.
 * @type {Function}
 */
$wponion.template = _.memoize( function ( $id ) {
	var compiled,
		options = {
			evaluate: /<#([\s\S]+?)#>/g,
			interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
			escape: /\{\{([^\}]+?)\}\}(?!\})/g,
			variable: 'data'
		};

	return function ( data ) {
		compiled = compiled || _.template( $id, options );
		return compiled( data );
	};
} );

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

		$( '[data-depend-id=wponionmodel]' ).on( 'click', function () {
			let $instnace = new WPO_Modal( {
				id: "getVideoModal",
				hide_menu: true,
				data: {
					page4: {
						title: "Page 4",
						sections: {
							section1: {
								title: "Page 4.1",
								html: "Page 4.1 Content",
							},
							section2: {
								title: "Page 4.2",
								sidebar: "SomeContent",
								html: "Page 4.2 Content",
							}

						}
					}, page1: {
						title: "Page1",
						menu_title: "Menu Page1",
						html: " Page 1 Content",
						sidebar: "SomeContent",
					},

					page2: {
						title: "Page 2",
						html: " Page 2 Content ",
						sidebar: false,
					},
					page3: {
						title: "Page 3",
						html: " Page 3 Content ",
					},

				}
			} );
		} )
	} ) );

	$wph.doAction( 'wponion_loaded' );

} )( window, document, jQuery, $wponion, wp );

/**
 * Tippy Custom Wrap Code.
 */
jQuery.fn.extend( {
	/**
	 * A Custom Wrap Class To Handle Tippy Instance
	 * @param $arguments
	 * @returns {*}
	 */
	tippy: function ( $arguments ) {
		let tippy_helper = {
			create_instance: function ( $elem, $arguments ) {
				if ( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					let $_instance_id = 'Tippy' + $wponion.randomMD5();
					$elem.attr( 'data-tippy-instance-id', $_instance_id );
					window[ $_instance_id ] = new tippy( $elem[ 0 ], $arguments );
					return true;
				}
				return false;
			},
			get_instance: function ( $elem ) {
				if ( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					return false;
				}
				var $_instance_id = $elem.attr( 'data-tippy-instance-id' );
				return ( undefined !== window[ $_instance_id ] ) ? window[ $_instance_id ] : false;
			}
		};

		if ( this.length > 1 ) {
			this.each( function () {
				tippy_helper.create_instance( jQuery( this ), $arguments );
			} );
			return true;
		} else {
			let $status = tippy_helper.create_instance( jQuery( this ), $arguments );
			return ( true === $status ) ? tippy_helper.get_instance( jQuery( this ) ) : false;
		}
	},

	/**
	 * Returns An Active instance
	 * @returns {boolean}
	 */
	tippy_get: function () {
		if ( jQuery( this ).attr( 'data-tippy-instance-id' ) === undefined ) {
			return false;
		}
		var $_instance_id = jQuery( this ).attr( 'data-tippy-instance-id' );
		return ( undefined !== window[ $_instance_id ] ) ? window[ $_instance_id ] : false;
	},
} );


//@codekit-append wpmodel.js