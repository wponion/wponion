/**
 * Animate CSS Related Functions.
 */
jQuery.fn.extend( {
	animateCss: function( animationName, callback ) {
		var animationEnd = ( function( el ) {
			var animations = {
				animation: 'animationend',
				OAnimation: 'oAnimationEnd',
				MozAnimation: 'mozAnimationEnd',
				WebkitAnimation: 'webkitAnimationEnd',
			};

			for( var t in animations ) {
				if( el.style[ t ] !== undefined ) {
					return animations[ t ];
				}
			}
		} )( document.createElement( 'div' ) );

		this.addClass( 'animated ' + animationName ).one( animationEnd, function() {
			jQuery( this ).removeClass( 'animated ' + animationName );
			if( typeof callback === 'function' ) callback( jQuery( this ) );
		} );

		return this;
	},
} );

/**
 * Tippy Custom Wrap Code.
 */
jQuery.fn.extend( {
	/**
	 * A Custom Wrap Class To Handle Tippy Instance
	 * @param $arguments
	 * @returns {*}
	 */
	tippy: function( $arguments ) {
		var tippy_helper = {
			create_instance: function( $elem, $arguments ) {
				if( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					var $_instance_id = 'Tippy' + $wponion.rand_id();
					$elem.attr( 'data-tippy-instance-id', $_instance_id );
					window[ $_instance_id ] = new tippy( $elem[ 0 ], $arguments );
					return true;
				}
				return false;
			},
			get_instance: function( $elem ) {
				if( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					return false;
				}
				var $_instance_id = $elem.attr( 'data-tippy-instance-id' );
				return ( undefined !== window[ $_instance_id ] ) ? window[ $_instance_id ] : false;
			}
		};

		if( this.length > 1 ) {
			this.each( function() {
				tippy_helper.create_instance( jQuery( this ), $arguments );
			} );
			return true;
		} else {
			var $status = tippy_helper.create_instance( jQuery( this ), $arguments );
			return ( true === $status ) ? tippy_helper.get_instance( jQuery( this ) ) : false;
		}
	},

	/**
	 * Returns An Active instance
	 * @returns {boolean}
	 */
	tippy_get: function() {
		if( jQuery( this ).attr( 'data-tippy-instance-id' ) === undefined ) {
			return false;
		}
		var $_instance_id = jQuery( this ).attr( 'data-tippy-instance-id' );
		return ( undefined !== window[ $_instance_id ] ) ? window[ $_instance_id ] : false;
	},
} );

/**
 * // @ wponion-append ../vendors/jquery-interdependencies/jquery-interdependencies.js
 * // @ wponion-append ../../node_modules/jquery.actual/jquery.actual.js
 * // @ wponion-append ../../node_modules/bootstrap-maxlength/bootstrap-maxlength.min.js
 * // @ wponion-append ../vendors/inputToArray.js
 * // @ wponion-append ../../node_modules/overlayscrollbars/js/jquery.overlayScrollbars.min.js
 * Simple JS Addons.
 */

( function( window, document, wp, $ ) {

//@wponion-inline ../vendors/jquery-interdependencies/jquery-interdependencies.js
//@wponion-inline ../vendors/json-view/json-view.js
//@wponion-inline ../vendors/wp-js-hooks.js
//@wponion-inline ../vendors/blockUI/blockUI.js
//@wponion-inline ../../node_modules/tippy.js/dist/tippy.all.min.js
//@wponion-inline ../../node_modules/sweetalert2/dist/sweetalert2.all.min.js
//@wponion-inline ../../node_modules/geocomplete/jquery.geocomplete.min.js
} )( window, document, wp, jQuery );
