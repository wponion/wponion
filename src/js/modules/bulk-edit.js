import $wponion from '../core/core';
import { array_merge } from 'vsp-js-helper/index';


export default ( ( window, document, $ ) => {
	$( window ).on( 'load', () => {
		$( document ).on( 'click', '#bulk_edit', () => {
			let $final_args = { post_ids: [] },
				$bulk_edit  = $( '#bulk-edit' );

			$bulk_edit.find( '#bulk-titles' ).children().each( function() {
				$final_args.post_ids.push( $( this ).attr( 'id' ).replace( /^(ttle)/i, '' ) );
			} );

			$bulk_edit.find( '.wponion-quick-edit-fieldset' ).each( function() {
				$final_args = array_merge( $( this ).serializeObject(), $final_args );
			} );

			$wponion.ajax( 'save-bulk-edit', {
				method: 'POST',
				data: $final_args,
			} );
		} );
	} );
} )( window, document, jQuery );
