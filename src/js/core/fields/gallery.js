import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let wp_media_frame,
			$this      = this,
			$html_temp = $this.option( 'html_template' ),
			$input     = this.element.find( 'input#image_id' ),
			$preview   = this.element.find( '.wponion-image-preview' ),
			$add       = this.element.find( 'button[data-wponion-gallery-add]' ),
			$edit      = this.element.find( 'button[data-wponion-gallery-edit]' ),
			$clear     = this.element.find( 'button[data-wponion-gallery-clear]' ),
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
						$this.init_field( '.wponion-help', 'tooltip' );
						$this.init_field( 'img', 'image_popup' );
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

		this.init_field( $preview.find( 'img' ), 'image_popup' );

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
