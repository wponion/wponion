import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $this     = this,
			$elem     = $this.element,
			$add      = $elem.find( 'button' ),
			$input    = $elem.find( 'input[type=text]' ),
			$settings = $this.option( 'settings', {
				frame_title: 'Upload',
				upload_type: 'image',
				insert_title: 'Use',
			} ), wp_media_frame;

		$add.on( 'click', function( e ) {
			e.preventDefault();

			if( typeof wp === 'undefined' || !wp.media || !wp.media.gallery ) {
				return;
			}

			if( wp_media_frame ) {
				wp_media_frame.open();
				return;
			}

			wp_media_frame = wp.media( {
				title: $settings.frame_title,
				library: {
					type: $settings.upload_type
				},
				button: {
					text: $settings.insert_title,
				}
			} );

			wp_media_frame.on( 'select', function() {
				let attachment = wp_media_frame.state().get( 'selection' ).first();
				$input.val( attachment.attributes.url ).trigger( 'change' );
			} );
			wp_media_frame.open();
		} );
	}
}

export default ( ( w ) => w.wponion_register_field( 'upload', ( $elem ) => new field( $elem ) ) )( window );
