import WPOnion_Cloner from '../plugins/wpo-cloner';

/**
 * jQuery Functions.
 */
export default {
	/**
	 * Animate CSS Related Functions.
	 */
	animateCss: function( animationName, callback ) {
		let animationEnd = ( function( el ) {
			let animations = {
				animation: 'animationend',
				OAnimation: 'oAnimationEnd',
				MozAnimation: 'mozAnimationEnd',
				WebkitAnimation: 'webkitAnimationEnd',
			};

			for( let t in animations ) {
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

	/**
	 * Copy Element Attr To Another Attr.
	 * @param from
	 * @param to
	 */
	copyAttr: function( from, to ) {
		if( jQuery( this ).length > 1 ) {
			jQuery( this ).each( function() {
				jQuery( this ).copyAttr( from, to );
			} );
		} else {
			let $existing = jQuery( this ).attr( from );
			if( !window.wponion._.isUndefined( $existing ) ) {
				jQuery( this ).attr( to, $existing );
			}
		}
	},

	/**
	 * Move Element Attr To Another Attr.
	 * @param from
	 * @param to
	 */
	moveAttr: function( from, to ) {
		if( jQuery( this ).length > 1 ) {
			jQuery( this ).each( function() {
				jQuery( this ).moveAttr( from, to );
			} );
		} else {
			jQuery( this ).copyAttr( from, to );
			jQuery( this ).removeAttr( from );
		}
	},

	/**
	 * A Custom Wrap Class To Handle Tippy Instance
	 * @param $arguments
	 * @returns {*}
	 */
	tippy: function( $arguments ) {
		let tippy_helper = {
			create_instance: function( $elem, $arguments ) {
				$arguments = ( typeof $arguments === 'undefined' ) ? {} : $arguments;
				if( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					let $_instance_id = 'Tippy' + window.wpo_core.rand_id();
					$elem.attr( 'data-tippy-instance-id', $_instance_id );

					let $title      = $elem.attr( 'title' ),
						$data_tippy = $elem.attr( 'data-tippy' );

					if( $title && $title !== '' && window.wponion._.isUndefined( $arguments.content ) ) {
						$arguments.content = $title;
					}

					if( $data_tippy && $data_tippy !== '' && window.wponion._.isUndefined( $arguments.content ) ) {
						$arguments.content = $data_tippy;
					}

					window[ $_instance_id ] = window.tippy( $elem[ 0 ], $arguments );
					return true;
				}
				return false;
			},
			get_instance: function( $elem ) {
				if( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					return false;
				}
				let $_instance_id = $elem.attr( 'data-tippy-instance-id' );
				return ( undefined !== window[ $_instance_id ] ) ? window[ $_instance_id ] : false;
			}
		};

		if( this.length > 1 ) {
			this.each( function() {
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
	tippy_get: function() {
		if( jQuery( this ).attr( 'data-tippy-instance-id' ) === undefined ) {
			return false;
		}
		let $_instance_id = jQuery( this ).attr( 'data-tippy-instance-id' );
		return ( undefined !== window[ $_instance_id ] ) ? window[ $_instance_id ] : false;
	},

	/**
	 * @used in WPPointers
	 * @param fn
	 * @constructor
	 */
	WPOnion_onAvailable: function( fn ) {
		let sel = this.selector,
			timer;
		if( this.length > 0 ) {
			fn.call( this );
		} else {
			timer = setInterval( function() {
				if( $( sel ).length > 0 ) {
					fn.call( $( sel ) );
					clearInterval( timer );
				}
			}, 300 );
		}
	},

	/**
	 * Adds Bootstrap Button Element
	 */
	wponion_button: function Plugin( option ) {
		return this.each( function() {
			var $this   = jQuery( this );
			var data    = $this.data( 'wpobs.button' );
			var options = typeof option === 'object' && option;

			if( !data ) {
				$this.data( 'wpobs.button', ( data = new window.wponion.plugins.bs_button( this, options ) ) );
			}
			data.setState( option );
		} );
	},

	/**
	 * Adds WPOnion Cloner Script.
	 */
	WPOnionCloner: WPOnion_Cloner,
};
