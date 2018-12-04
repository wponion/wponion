export default ( ( window, document, $, wp ) => {
	const fix_media_ui = () => {
		let $table  = jQuery( '.compat-attachment-fields' ),
			$fields = $table.find( '.wponion-framework' );
		$fields.each( function() {
			jQuery( this ).parent().parent().remove();
			$table.before( jQuery( this ).parent().html() );
		} );

		wponion_setup();
		wponion_field( $table.parent().find( '.wponion-framework' ) ).reload();
	};
	$( window ).on( 'load', () => {
		if( $( '.compat-attachment-fields' ).length > 0 && $( 'body' ).hasClass( 'post-type-attachment' ) ) {
			fix_media_ui();
		} else {
			if( typeof wp.media !== 'undefined' ) {
				wp.media.frames.browse.on( 'edit:attachment', () => {
					fix_media_ui();
					wp.media.frames.edit.on( 'attachment:compat:ready', () => fix_media_ui() );
				} );
			}
		}
	} );
} )( window, document, jQuery, wp );

