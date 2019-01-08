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
			if( typeof callback === 'function' ) {
				callback( jQuery( this ) );
			}
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
				$arguments = ( typeof $arguments === 'undefined' ) ? {} : $arguments;
				if( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					var $_instance_id = 'Tippy' + $wponion.rand_id();
					$elem.attr( 'data-tippy-instance-id', $_instance_id );

					var $title      = $elem.attr( 'title' );
					var $data_tippy = $elem.attr( 'data-tippy' );

					if( $title && $title !== '' ) {
						if( typeof $arguments.content === 'undefined' ) {
							$arguments.content = $title;
						}
					}

					if( $data_tippy && $data_tippy !== '' ) {
						if( typeof $arguments.content === 'undefined' ) {
							$arguments.content = $data_tippy;
						}
					}

					window[ $_instance_id ] = tippy( $elem[ 0 ], $arguments );
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

//@wponion-inline ../../node_modules/form-serializer/dist/jquery.serialize-object.min.js
( function( window, document, wp, $ ) {
//@wponion-inline ../vendors/jquery-interdependencies/jquery-interdependencies.js
//@wponion-inline ../vendors/bootstrap/button.js
//@wponion-inline ../vendors/json-view/json-view.js
//@wponion-inline ../vendors/wp-js-hooks.js
//@wponion-inline ../vendors/blockUI/blockUI.js
//@wponion-inline ../../node_modules/tippy.js/dist/tippy.all.min.js
//@wponion-inline ../../node_modules/sweetalert2/dist/sweetalert2.all.min.js
//@wponion-inline ../vendors/geocomplete/geocomplete.js
} )( window, document, wp, jQuery );
//@wponion-inline ../../node_modules/jquery-validation/dist/jquery.validate.js
//@wponion-prepend ../../node_modules/jquery-validation/dist/additional-methods.js
