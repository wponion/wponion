import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		let $this      = this,
			$elem      = $this.element,
			$html_temp = $this.option( 'html_template' ),
			$input     = $elem.find( 'input#image_id' ),
			$preview   = $elem.find( '.wponion-image-preview' ),
			wp_media_frame,
			$add       = $elem.find( 'button[data-wponion-gallery-add]' ),
			$edit      = $elem.find( 'button[data-wponion-gallery-edit]' ),
			$clear     = $elem.find( 'button[data-wponion-gallery-clear]' ),
			$manage    = function( $type ) {
				let ids   = $input.val(),
					what  = ( $type === 'edit' ) ? 'edit' : 'add',
					state = ( what === 'add' && !ids.length ) ? 'gallery' : 'gallery-edit';

				if( typeof wp === 'undefined' || !wp.media || !wp.media.gallery ) {
					return;
				}

				$preview.html( '' );

				if( state === 'gallery' ) {
					wp_media_frame = wp.media( {
						library: { type: 'image' },
						frame: 'post',
						state: 'gallery',
						multiple: true
					} );
					wp_media_frame.open();
				} else {
					wp_media_frame = wp.media.gallery.edit( '[gallery ids="' + ids + '"]' );
					if( what === 'add' ) {
						wp_media_frame.setState( 'gallery-library' );
					}
				}

				wp_media_frame.on( 'update', function( selection ) {
					let selectedIds = selection.models.map( function( attachment ) {
						let item = attachment.toJSON();
						if( item.sizes === undefined ) {
							return false;
						}

						let thumb = ( typeof item.sizes.thumbnail !== 'undefined' ) ? item.sizes.thumbnail.url : item.url,
							$tmp  = jQuery( $html_temp );
						$tmp.attr( 'data-wponion-image_id', item.id );
						$tmp.find( 'img' ).attr( 'data-fullsize', item.url ).attr( 'src', thumb ).removeClass( 'hide' );
						$preview.append( $tmp );
						$preview.find( '.wponion-help' ).tippy();
						return item.id;
					} );
					let $e;
					for( $e in selectedIds ) {
						if( selectedIds[ $e ] === false || selectedIds[ $e ] === '' ) {
							delete selectedIds[ $e ];
						}
					}
					$input.val( selectedIds.join( ',' ) ).trigger( 'change' );
				} );
			};

		$input.on( 'change', function() {
			if( jQuery( this ).val() === '' ) {
				$add.show();
				$edit.hide();
				$clear.hide();
			} else {
				$edit.show();
				$clear.show();
				$add.hide();
			}
		} );

		$add.on( 'click', () => $manage( 'add' ) );

		$edit.on( 'click', () => $manage( 'edit' ) );

		$clear.on( 'click', function() {
			$input.val( '' );
			$preview.html( '' );
			$clear.hide();
			$edit.hide();
			$add.show();
		} );

		$preview.on( 'click', 'img', ( event ) => this.init_field( event.target, 'image_popup' ) );

		$preview.on( 'click', 'i.wponion-image-remove', function() {
			let $parent   = jQuery( this ).parent(),
				$image_id = $parent.attr( 'data-wponion-image_id' ),
				$value    = $input.val().split( ',' );
			jQuery.each( $input.val().split( ',' ), function( $k, $v ) {
				if( $v === $image_id ) {
					$value.splice( $k, 1 );
				}
			} );

			$input.val( $value.join( ',' ) );
			$parent.fadeOut( () => $parent.remove() );
			$input.trigger( 'change' );
		} );

		$input.trigger( 'change' );

		if( $preview.hasClass( 'gallery-sortable' ) ) {
			$preview.sortable( {
				items: '> div',
				cursor: 'move',
				scrollSensitivity: 40,
				forcePlaceholderSize: true,
				placeholder: 'sortable-placeholder',
				helper: 'clone',
				opacity: 0.65,
				start: function( event, ui ) {
					let $item = ui.item;
					$preview.find( '.sortable-placeholder' ).css( 'width', $item.width() );
					$preview.find( '.sortable-placeholder' ).css( 'height', $item.height() );
				}
			} );
		}
	}
}

export default ( ( w ) => w.wponion_render_field( 'gallery', ( $elem ) => new field( $elem ) ) )( window );
