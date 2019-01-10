import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

class field extends WPOnion_Field {
	init() {
		let $fid         = this.element.attr( 'data-field-jsid' );
		let $tooltip_key = false;
		if( true === this.element.hasClass( 'wponion-help' ) ) {
			$tooltip_key = 'wponion-help';
		} else if( true === this.element.hasClass( 'wponion-wrap-tooltip' ) ) {
			$tooltip_key = 'wrap_tooltip';
		} else {
			$tooltip_key = $fid + 'tooltip';
		}

		let $arg = ( true === $wponion.valid_json( $fid ) ) ? JSON.parse( $fid ) : this.option( $tooltip_key, false );

		const state = {
			isFetching: false,
			canFetch: true
		};

		if( false === $arg ) {
			if( $wponion.valid_json( this.element.attr( 'data-tippy' ) ) ) {
				$arg = JSON.parse( this.element.attr( 'data-tippy' ) );
			} else if( $wponion.valid_json( this.element.attr( 'data-tippy-args' ) ) ) {
				$arg = JSON.parse( this.element.attr( 'data-tippy-args' ) );
			} else if( $wponion.valid_json( this.element.attr( 'tippy-args' ) ) ) {
				$arg = JSON.parse( this.element.attr( 'tippy-args' ) );
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

		delete $arg.image;
		delete $arg.icon;
		this.element.tippy( this.handle_args( $arg, $tooltip_key ) );
	}
}

export default ( ( w ) => w.wponion_render_field( 'field_tooltip', ( $elem ) => new field( $elem ) ) )( window );
