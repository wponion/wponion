import $wponion from '../core/core';

export default ( ( window, document, $ ) => {
	$( window ).on( 'load', () => {
		$( document ).on( 'click', '#bulk_edit', () => {
			let $final_args = { post_ids: [] },
				$bulk_edit  = $( '#bulk-edit' );

			$bulk_edit.find( '#bulk-titles' ).children().each( function() {
				$final_args.post_ids.push( $( this ).attr( 'id' ).replace( /^(ttle)/i, '' ) );
			} );

			$bulk_edit.find( '.wponion-quick-edit-fieldset' ).each( function() {
				$final_args = window.wponion._.merge( $( this ).serializeJSON(), $final_args );
			} );

			return $wponion.ajax( 'save-bulk-edit', {
				method: 'POST',
				async: false,
				cache: false,
				data: $final_args,
			} );
		} );
	} );
} )( window, document, jQuery );
