import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $this        = this,
			$elem        = $this.element,
			$input       = $elem.find( 'input#image_id' ),
			$preview_add = $elem.find( '.wponion-image-preview .wponion-preview-add' ),
			$preview     = $elem.find( '.wponion-image-preview .wponion-preview' );

		$this.media_instance = null;
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

			if( $this.media_instance ) {
				$this.media_instance.open();
				return;
			}

			$this.media_instance = wp.media( {
				library: { type: 'image' },
				title: $this.option( 'frame_title', 'Select Image' ),
			} );
			$this.media_instance.on( 'select', function() {
				let attachment = $this.media_instance.state().get( 'selection' ).first().attributes;
				let thumbnail  = ( typeof attachment.sizes !== 'undefined' && typeof attachment.sizes.thumbnail !== 'undefined' ) ? attachment.sizes.thumbnail.url : attachment.url;
				$preview.find( 'img' ).attr( 'src', thumbnail ).attr( 'data-fullsize', attachment.url );
				$input.val( attachment.id ).trigger( 'change' );
			} );
			$this.media_instance.open();
		} );

		$preview.find( '.wponion-image-remove' ).on( 'click', () => $input.val( '' ).trigger( 'change' ) );
		this.init_field( $preview.find( 'img' ), 'image_popup' );
	}
}

export default ( ( w ) => w.wponion_register_field( 'image_upload', ( $elem ) => new field( $elem ) ) )( window );
