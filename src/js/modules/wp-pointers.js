import $wponion from '../core/core';

export default ( ( window, $ ) => {
	$.fn.WPOnion_onAvailable = function( fn ) {
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
	};

	$( window ).on( 'load', () => {
		let $pointers_group = $wponion.windowArgs( 'wp_pointers', false );

		if( $pointers_group ) {
			for( let $group_id in $pointers_group ) {
				if( !$pointers_group.hasOwnProperty( $group_id ) ) {
					continue;
				}

				for( let $pointer_key in $pointers_group[ $group_id ] ) {
					if( !$pointers_group[ $group_id ].hasOwnProperty( $pointer_key ) ) {
						continue;
					}

					let $pointer = $pointers_group[ $group_id ][ $pointer_key ];

					if( !$pointer.show ) {
						$pointer.show = 'open';
					}

					let $handler = {
						content: '<h3>' + $pointer.title + '</h3><p>' + $pointer.text + '</p>',
						pointerWidth: parseInt( $pointer.width ),
						pointerClass: 'wp-pointer pointerplus' + $pointer.class,
						position: {
							edge: $pointer.edge,
							align: $pointer.align
						},
						close: () => $.post( window.ajaxurl, { pointer: $pointer_key, action: 'dismiss-wp-pointer' } ),
					};

					$handler.buttons = function( event, t ) {
						let $button;

						if( $pointer.jsnext ) {
							let jsnext = new Function( 't', '$', $pointer.jsnext );
							return jsnext( t, jQuery );
						} else if( $pointer.next ) {
							$button = jQuery( '<a id="pointer-close" class="button action">Next</a>' );
							$button.bind( 'click.pointer', function() {
								t.element.pointer( 'close' );
								jQuery( $pointers_group[ $group_id ][ $pointer.next ].selector ).pointer( 'open' );
								if( $pointers_group[ $group_id ][ $pointer.next ].icon_class !== '' ) {
									$( '.pp-' + $pointer.next + ' .pp-pointer-content h3' )
										.addClass( 'dashicons-before' )
										.addClass( $pointers_group[ $group_id ][ $pointer.next ].icon_class );
								}
							} );
							return $button;
						} else {
							let close  = 'Dismiss',
								button = jQuery( '<a class="close" href="#">' + close + '</a>' );
							return button.bind( 'click.pointer', function( e ) {
								e.preventDefault();
								t.element.pointer( 'close' );
							} );
						}
					};

					$( $pointer.selector ).WPOnion_onAvailable( () => {
						let setup = () => $( $pointer.selector ).pointer( $handler ).pointer( $pointer.show );
						setup();
					} );
				}
			}

			for( let $id in $pointers_group ) {
				if( $pointers_group.hasOwnProperty( $id ) ) {
					for( let $pid in $pointers_group[ $id ] ) {
						if( $pointers_group[ $id ].hasOwnProperty( $pid ) ) {
							let $pointer = $pointers_group[ $id ][ $pid ];
							if( $pointers_group[ $id ][ $pointer.next ] ) {
								jQuery( $pointers_group[ $id ][ $pointer.next ].selector ).pointer( 'close' );
							}
						}
					}
				}
			}
		}
	} );
} )( window, jQuery );
