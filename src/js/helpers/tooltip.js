import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

/**
 * WPOnion Field ToolTip
 */
class field extends WPOnion_Field {
	tooltip_arg() {
		let $tooltipkey = this.element.attr( 'data-wponion-tooltip-id' );
		let $tooltips   = {
			'wponion-help': this.option( 'wponion-help', false ),
			'wrap_tooltip': this.option( 'wrap_tooltip', false )
		};

		$tooltips[ $tooltipkey ]                                        = this.option( $tooltipkey, false );
		$tooltips[ this.element.attr( 'data-field-jsid' ) + 'tooltip' ] = this.option( this.element.attr( 'data-field-jsid' ) + 'tooltip', false );
		$tooltips[ this.element.attr( 'data-field-jsid' ) ]             = this.option( this.element.attr( 'data-field-jsid' ), false );

		for( var $k in $tooltips ) {
			if( $tooltips.hasOwnProperty( $k ) && window.wponion._.isObject( $tooltips[ $k ] ) ) {
				this.tooltipkey = $k;
				return $tooltips[ $k ];
			}
		}
		return {};
	}

	/**
	 * Handle Each And Every Single Field ToolTip.
	 */
	init() {
		this.tooltipkey = null;
		let $fid        = this.element.attr( 'data-field-jsid' );

		let $arg = ( true === $wponion.valid_json( $fid ) ) ? JSON.parse( $fid ) : this.tooltip_arg();
		//let $arg = ( true === $wponion.valid_json( $fid ) ) ? JSON.parse( $fid ) : this.option( $tooltip_key, false );

		const state = {
			isFetching: false,
			canFetch: true
		};

		if( false === $arg ) {
			let $classToCheck = [ 'data-tippy', 'data-tippy-args', 'tippy-args' ];
			let $found        = false;
			for( let $k in $classToCheck ) {
				if( $classToCheck.hasOwnProperty( $k ) ) {
					let $attr = this.element.attr( $classToCheck[ $k ] );
					if( $attr ) {
						if( $wponion.valid_json( $attr ) ) {
							$arg   = JSON.parse( $attr );
							$found = $classToCheck[ $k ];
							break;
						} else if( false !== this.option( $attr, false ) ) {
							$arg   = this.option( $attr, false );
							$found = $classToCheck[ $k ];
							break;
						}
					}
				}
			}
		}

		if( $arg ) {
			$arg.performance = false;
			if( $arg.image !== undefined && $arg.image !== false ) {
				let $image          = $arg.image;
				$arg.interactive    = true;
				$arg.content        = 'Loading...';
				//$arg.html           = '#wpotpimg';
				$arg.updateDuration = 2000;
				$arg.onShow         = async function( tip ) {
					if( state.isFetching || !state.canFetch ) {
						return;
					}
					state.isFetching = true;
					state.canFetch   = false;

					try {
						const response = await fetch( $image );
						const blob     = await response.blob();
						const url      = URL.createObjectURL( blob );
						if( tip.state.isVisible ) {
							tip.setContent( '<div style="min-width:25px;min-height:25px;"><img style="display: inline-block; width:100%; height:100%;" src="' + url + '"/></div>' );
						}
					} catch( e ) {
						tip.setContent( `Fetch failed. ${e}` );
					} finally {
						state.isFetching = false;
					}
				};
				$arg.onHidden       = ( tip ) => {
					state.canFetch = true;
					tip.setContent( 'Loading...' );
				};
				$arg.popperOptions  = {
					modifiers: {
						preventOverflow: {
							enabled: false
						},
						hide: {
							enabled: false
						}
					}
				};
			}
		} else {
			$arg = {};
		}

		if( false === window.wponion._.isUndefined( $arg.followCursor ) && true === $arg.followCursor && window.wponion._.isUndefined( $arg.appendTo ) ) {
			$arg.appendTo = () => {
				return document.body;
			};
		} else if( window.wponion._.isUndefined( $arg.appendTo ) ) {
			if( jQuery( 'div.wponion-element[data-wponion-jsid=' + this.id() + ']' ).length > 0 ) {
				$arg.appendTo = () => {
					return jQuery( 'div.wponion-element[data-wponion-jsid=' + this.id() + ']' )[ 0 ];
				};
			} else {
				$arg.appendTo = () => {
					return document.body;
				};
			}
		}

		delete $arg.image;
		delete $arg.icon;
		this.element.tippy( this.handle_args( $arg, this.tooltipkey ) );
	}
}

export default ( ( w ) => w.wponion_register_field( 'tooltip', ( $elem ) => new field( $elem ) ) )( window );
