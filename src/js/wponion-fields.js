/**
 * @param window = Window Object
 * @param document = Document Object
 * @param $ = jQuery Object
 * @param wpo = $wponion object
 * @param wpf = $wonion.field object
 * @param wpt = $wponion.theme object.
 */
( ( window, document, $, wpo, wp ) => {
	let $wpf    = wpo._field();
	let wpf     = $wpf.fn;
	let wphooks = wp.hooks;

	/**
	 * Input Mask JS Handler.
	 */
	wpf.inputmask = function () {
		if ( this.elem.length > 0 ) {
			let $settings = this.arg( 'inputmask' );
			if ( $settings ) {
				this.elem.inputmask( $settings );
				wpo.__plugin_debug_info( this.elem, 'inputmask', $settings );
			}
		}
		return this;
	};

	/**
	 * Handles Maxlength Field.
	 */
	wpf.maxlength = function () {
		if ( this.elem.length > 0 ) {
			let $settings = this.arg( 'max_length' );
			if ( $settings ) {
				$settings[ 'appendToParent' ] = true;

				if ( $settings[ 'threshold' ] !== undefined ) {
					$settings[ 'threshold' ] = parseInt( $settings[ 'threshold' ] );
				}

				if ( $settings[ 'warningClass' ] === undefined ) {
					$settings[ 'warningClass' ] = 'badge badge-success';
				}

				if ( $settings[ 'limitReachedClass' ] === undefined ) {
					$settings[ 'limitReachedClass' ] = 'badge badge-danger';
				}

				this.elem.maxlength( $settings );
				wpo.__plugin_debug_info( this.elem, 'max_length', $settings );
			}
		}
		return this;
	};

	/**
	 * Renders Fields Debug Popup.
	 */
	wpf.field_debug = function () {
		if ( this.elem.find( '.wponion-field-debug' ).length > 0 ) {
			let $elem = this.elem;

			$elem.find( '.wponion-field-debug a.wponion-field-debug-handle' ).on( 'click', function () {
				let $data       = wpo._get_debug_info( $( this ), {} );
				let $divID      = wpo.field_js_id( $( this ) ) + 'debugINFO',
					$notice_txt = "<p class='wponion-field-debug-notice'>" + wpo.settings( 'debug_notice' ) + "</p>",
					$elem       = $( "<div id='" + $divID + "' class='wponion-field-debug-popup' ><div id='" + $divID + "' ></div> " + $notice_txt + "</div>" );

				let $ops = swal( {
					html: $elem,
					showConfirmButton: true,
					confirmButtonText: wpo.txt( 'get_json_output', 'Get JSON Output' ),
					showCloseButton: false,
					width: '800px',
					onOpen: ( () => {
						$( '#swal2-content > div > #' + $divID ).jsonView( $data ).overlayScrollbars( {
							className: "os-theme-dark",
							resize: "vertical",
						} );
					} )
				} ).then( ( result ) => {
					if ( result.value ) {
						swal( {
							width: '600px',
							html: '<textarea style="min-width:550px; min-height:300px">' + JSON.stringify( $data ) + '</textarea>'
						} )
					}
				} );
			} )
		}
		return this;
	};

	/**
	 * Icon Picker Field Handler.
	 */
	wpf.icon_picker = function () {
		let $_this      = this,
			$elem       = $_this.elem,
			$args       = $_this.args(),
			$input      = $elem.find( ".wponion-icon-picker-input" ),
			$remove_btn = $elem.find( 'button.wponion-remove-icon' ),
			$add_btn    = $elem.find( "button.wponion-add-icon" ),
			$preview    = $elem.find( 'span.wponion-icon-preview' );

		let $manager = {

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
			popupel: null,
			/**
			 * Creates A New Instance for ToolTip.
			 */
			init_tooltip: () => {
				if ( $args[ 'popup_tooltip' ] !== 'false' ) {
					let $tp = ( typeof $args[ 'popup_tooltip' ] === 'object' ) ? $args[ 'popup_tooltip' ] : {};
					if ( $manager.elems.length > 0 ) {
						$manager.elems.each( function () {
							tippy( $( this )[ 0 ], $tp );
						} );
					}
				}
			},

			/**
			 * Inits For each and every POPUP.
			 * @param $popupel
			 * @param $instance
			 */
			init: function ( $popupel, $instance ) {
				$manager.popupel = $popupel;
				$manager.popup   = $instance;
				$manager.elems   = $manager.popupel.find( "span.wponion-icon-preview" );
				let $height      = $manager.popupel.find( '.wponion-icon-picker-container-scroll' ).css( 'height' );
				$manager.popupel.find( '.wponion-icon-picker-container-scroll' ).css( 'height', $height );
				$manager.select();
				$manager.input();
				$manager.elems.on( 'click', function () {
					let $icon = $( this ).attr( 'data-icon' );
					$input.val( $icon ).trigger( 'change' );
					swal.closeModal();
				} );
				$manager.init_tooltip();
			},

			/**
			 * Works with POPUP Input Search.
			 */
			input: function () {
				$manager.popupel.find( 'div.wponion-icon-picker-model-header input[type=text]' )
						.on( 'keyup', function () {
							let $val = $( this ).val();
							$manager.elems.each( function () {
								if ( $( this ).attr( 'data-icon' ).search( new RegExp( $val, 'i' ) ) < 0 ) {
									$( this ).parent().hide();
								} else {
									$( this ).parent().show();
								}
							} );
						} );
			},

			/**
			 * Handles Selectbox in popup.
			 */
			select: function () {
				$manager.popupel.find( 'div.wponion-icon-picker-model-header select' ).on( 'change', function () {
					swal.enableLoading();
					let $val = $( this ).val();
					wpo.ajax( 'icon_picker', {
						data: {
							"wponion-icon-lib": $val,
						}
					}, ( $res ) => {
						if ( $res.success ) {
							swal.resetValidationError();
							$( $manager.popupel ).find( "#swal2-content" ).html( $res.data ).show();
							$( $manager.popupel )
								.find( '#swal2-content .wponion-icon-picker-container-scroll' )
								.overlayScrollbars( {
									className: "os-theme-dark",
									resize: "vertical",
								} );
							$manager.init();

						} else {
							$( $manager.popupel ).find( ".wponion-icon-picker-container-scroll" ).remove();
							$manager.popup.showValidationError( $res.data );
						}
					}, () => {
						$manager.popup.showValidationError( wpo.txt( 'unknown_ajax_error' ) );
					}, () => {
						$manager.popup.disableLoading();
					} );
				} );
			}
		};

		if ( $input.val() === '' ) {
			$remove_btn.hide();
			$preview.hide();
		}

		/**
		 * Handles Blur Even / change even in inputfield.
		 */
		$input.on( 'keyup blur change keypress', function () {
			let $val = $( this ).val();

			if ( $val !== '' ) {
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
		$add_btn.on( 'click', function () {
			let $popup = swal( {
				title: $elem.find( ".wponion-field-title h4" ).html(),
				animation: false,
				allowOutsideClick: false,
				showConfirmButton: false,
				showCloseButton: true,
				width: '700px',
				customClass: "wponion-icon-picker-model",
				onBeforeOpen: ( $elem ) => {
					swal.enableLoading();
					$_this.ajax( 'icon_picker', {
						onSuccess: ( $res ) => {
							if ( $res.success ) {
								swal.resetValidationError();
								let $popup_elem = $( $elem );
								$popup_elem.find( "#swal2-content" ).html( $res.data ).show();
								$popup_elem.find( '#swal2-content .wponion-icon-picker-container-scroll' )
										   .overlayScrollbars( { className: "os-theme-dark", resize: "vertical", } );
								$manager.init( $popup_elem, $popup );
							} else {
								wpo.tost( {
									type: 'error',
									title: $res.data,
								} );
								$popup.showValidationError( $res.data );
							}
						},
						onError: () => {
							$popup.showValidationError( wpo.txt( 'unknown_ajax_error' ) );
						},
						onAlways: () => {
							$popup.disableLoading();
						},
					} );
				}
			} );
		} );

		/**
		 * Handles Remove Button Event.
		 */
		$remove_btn.on( 'click', function () {
			$input.val( '' );
			$preview.hide();
			$remove_btn.hide();
		} );
	};

	/**
	 * Reloads All Fields Instance. For the given key.
	 */
	wpf.reload = function () {
		wphooks.addAction( 'wponion_before_fields_reload' );
		let $elem = this.elem;
		this.init_field( 'input[data-wponion-inputmask]', 'inputmask' );
		this.init_field( '[data-wponion-maxlength]', 'maxlength' );
		this.field_debug();

		this.init_field( '.wponion-element-icon_picker', 'icon_picker' );
		wphooks.addAction( 'wponion_after_fields_reload' );
	};

	wphooks.addAction( 'wponion_before_init', ( () => {
		$wpf( '.wponion-framework' ).reload();
	} ) );

} )( window, document, jQuery, $wponion, wp );
