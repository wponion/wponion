import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

/*global swal:true*/

class field extends WPOnion_Field {
	init() {
		let $_this      = this,
			$elem       = $_this.element,
			$args       = $_this.options(),
			$input      = $elem.find( '.wponion-icon-picker-input' ),
			$remove_btn = $elem.find( 'button[data-wponion-iconpicker-remove]' ),
			$add_btn    = $elem.find( 'button[data-wponion-iconpicker-add]' ),
			$preview    = $elem.find( 'span.wponion-icon-preview' );

		let $work = {
			/**
			 * Stores POPUP Information.
			 */
			elems: null,
			/**
			 * Stores POPUP Information.
			 */
			popup: null,
			/**
			 * Stores POPUP Information.
			 */
			elm: null,
			/**
			 * Creates A New Instance for ToolTip.
			 */
			init_tooltip: () => {
				if( $args.popup_tooltip !== 'false' ) {
					let $tp = ( typeof $args.popup_tooltip === 'object' ) ? $args.popup_tooltip : {};
					if( $work.elems.length > 0 ) {
						$work.elems.tippy( $tp );
					}
				}
			},
			/**
			 * Inits For each and every POPUP.
			 * @param $elm
			 * @param $instance
			 */
			init: function( $elm, $instance ) {
				$work.elm   = $elm;
				$work.popup = $instance;
				$work.elems = $work.elm.find( 'span.wponion-icon-preview' );
				let $height = $work.elm.find( '.wponion-icon-picker-container-scroll' ).css( 'height' );
				$work.elm.find( '.wponion-icon-picker-container-scroll' ).css( 'height', $height );
				$work.select();
				$work.input();
				$work.elems.on( 'click', function() {
					let $icon = jQuery( this ).attr( 'data-icon' );
					$input.val( $icon ).trigger( 'change' );
					swal.closeModal();
				} );
				$work.init_tooltip();
			},
			/**
			 * Works with POPUP Input Search.
			 */
			input: function() {
				$work.elm.find( 'div.wponion-icon-picker-model-header input[type=text]' ).on( 'keyup', function() {
					let $val = jQuery( this ).val();
					$work.elems.each( function() {
						if( jQuery( this ).attr( 'data-icon' ).search( new RegExp( $val, 'i' ) ) < 0 ) {
							jQuery( this ).parent().hide();
						} else {
							jQuery( this ).parent().show();
						}
					} );
				} );
			},
			/**
			 * Handles Selectbox in popup.
			 */
			select: function() {
				$work.elm.find( 'div.wponion-icon-picker-model-header select' ).on( 'change', function() {
					swal.enableLoading();
					let $val = jQuery( this ).val();
					$wponion.ajax( 'icon_picker', {
							data: {
								'wponion-icon-lib': $val,
								enabled: $args.enabled,
								disabled: $args.disabled,
							}
						},
						( $res ) => {
							if( $res.success ) {
								swal.resetValidationMessage();
								jQuery( $work.elm ).find( '#swal2-content' ).html( $res.data ).show();
								jQuery( $work.elm ).find( '#swal2-content .wponion-icon-picker-container-scroll' );
								$work.init( $work.elm, $work.popup );
							} else {
								jQuery( $work.elm ).find( '.wponion-icon-picker-container-scroll' ).remove();
								$work.popup.showValidationError( $res.data );
							}
						},
						() => $work.popup.showValidationError( $wponion.txt( 'unknown_ajax_error' ) ),
						() => $work.popup.disableLoading()
					);
				} );
			}
		};

		if( $input.val() === '' ) {
			$remove_btn.hide();
			$preview.hide();
		}

		/**
		 * Handles Blur Even / change even in inputfield.
		 */
		$input.on( 'keyup blur change keypress', function() {
			let $val = jQuery( this ).val();

			if( $val !== '' ) {
				$preview.html( '<i class="' + $val + '"></i>' ).show();
				$remove_btn.show();
			} else {
				$preview.hide();
				$remove_btn.hide();
			}
		} );

		/**
		 * Handles Add Button Click Event.
		 */
		$add_btn.on( 'click', function() {
			let $popup = swal( {
				title: $elem.find( '.wponion-field-title h4' ).html(),
				animation: false,
				allowOutsideClick: false,
				showConfirmButton: false,
				showCloseButton: true,
				width: '700px',
				customClass: 'wponion-icon-picker-model',
				onBeforeOpen: ( $elem ) => {
					swal.enableLoading();
					$_this.ajax( 'icon_picker', {
						data: {
							enabled: $args.enabled,
							disabled: $args.disabled,
						},
						onSuccess: ( $res ) => {
							if( $res.success ) {
								swal.resetValidationMessage();
								let $popup_elem = jQuery( $elem );
								$popup_elem.find( '#swal2-content' ).html( $res.data ).show();
								$popup_elem.find( '#swal2-content .wponion-icon-picker-container-scroll' );
								$work.init( $popup_elem, $popup );
							} else {
								$popup.showValidationError( $res.data );
							}
						},
						onError: () => $popup.showValidationError( $wponion.txt( 'unknown_ajax_error' ) ),
						onAlways: () => $popup.disableLoading(),
					} );
				}
			} );
		} );

		/**
		 * Handles Remove Button Event.
		 */
		$remove_btn.on( 'click', function() {
			$input.val( '' );
			$preview.hide();
			$remove_btn.hide();
		} );

		return this;
	}
}

export default ( ( w ) => w.wponion_render_field( 'icon_picker', ( $elem ) => new field( $elem ) ) )( window );
