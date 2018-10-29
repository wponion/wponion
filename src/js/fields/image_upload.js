import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		let $this        = this,
			$elem        = $this.element,
			$input       = $elem.find( 'input#image_id' ),
			$preview_add = $elem.find( '.wponion-image-preview .wponion-preview-add' ),
			$preview     = $elem.find( '.wponion-image-preview .wponion-preview' ), wp_media_frame;

		$input.on( 'change', function() {
			if( jQuery( this ).val() === '' ) {
				$preview.hide();
				$preview_add.show();
			} else {
				$preview_add.hide();
				$preview.show();
			}

			$this.hook.doAction( 'wponion_image_upload_updated', $input, $preview, $preview_add );
		} );

		$preview_add.on( 'click', function() {
			if( typeof wp === 'undefined' || !wp.media || !wp.media.gallery ) {
				return;
			}

			if( wp_media_frame ) {
				wp_media_frame.open();
				return;
			}

			wp_media_frame = wp.media( { library: { type: 'image' } } );
			wp_media_frame.on( 'select', function() {
				let attachment = wp_media_frame.state().get( 'selection' ).first().attributes;
				let thumbnail  = ( typeof attachment.sizes !== 'undefined' && typeof attachment.sizes.thumbnail !== 'undefined' ) ? attachment.sizes.thumbnail.url : attachment.url;
				$preview.find( 'img' ).attr( 'src', thumbnail ).attr( 'data-fullsize', attachment.url );
				$input.val( attachment.id ).trigger( 'change' );
			} );
			wp_media_frame.open();
		} );

		$preview.find( ".wponion-image-remove" ).on( 'click', () => $input.val( '' ).trigger( 'change' ) );
		$preview.on( 'click', 'img', ( event ) => this.init_field( event.target, 'image_popup' ) );
	}
}

