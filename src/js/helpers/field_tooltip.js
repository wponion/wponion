import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

export default class extends WPOnion_Field {
	init() {
		let $fid         = this.element.attr( 'data-field-jsid' ),
			$is_loading  = null,
			wpoimg       = ( img, callback ) => {
				const testDimensions = setInterval( () => {
					if( img.naturalWidth ) {
						clearInterval( testDimensions );
						callback();
					}
				}, 5 );
			},
			$tooltip_key = ( true === this.element.hasClass( 'wponion-help' ) ) ? 'field_help' : $fid + 'tooltip',
			$arg         = ( true === $wponion.valid_json( $fid ) ) ? JSON.parse( $fid ) : this.option( $tooltip_key, false );

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
				$arg.html           = '#wpotpimg';
				$arg.updateDuration = 2000;
				$arg.onShow         = function( instance ) {
					const content = this.querySelector( '.tippy-content' );
					if( $is_loading ) {
						return;
					}
					$is_loading = true;

					fetch( $arg.image ).then( resp => resp.blob() ).then( blob => {
						const url         = URL.createObjectURL( blob );
						content.innerHTML = `<img src="${url}">`;
						wpoimg( content.querySelector( 'img' ), instance.popperInstance.update );
						$is_loading = false;
					} ).catch( () => {
						content.innerHTML = 'Loading failed';
						$is_loading       = false;
					} );
				};
				$arg.onHidden       = function() {
					const content     = this.querySelector( '.tippy-content' );
					content.innerHTML = '';
				};
				$arg.popperOptions  = { modifiers: { preventOverflow: { enabled: false }, hide: { enabled: false } } };
			}
		} else {
			$arg = {};
		}

		this.element.tippy( $arg );
	}
}
