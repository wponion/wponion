import WPOnion_Field from '../core/field';
import $wponion from '../core/core';
/* global swal:true */
export default class extends WPOnion_Field {
	init() {
		let $this     = this,
			$elem     = $this.element,
			$textarea = $elem.find( 'textarea' );
		$elem.find( '#wponion-wp-link-picker > button' ).on( 'click', function() {
			$textarea.val( '' );
			if( !window.wpLink ) {
				swal( {
					type: 'error',
					title: $wponion.text( 'wp_link_error_title', 'WP Link JS Lib Not Found' ),
				} );
			}

			window.wpLink.open( $textarea.attr( 'id' ) );
		} );


		$textarea.on( 'change', function() {
			let $data = jQuery( jQuery( this ).val() );
			$elem.find( 'span.example_output span.value' ).html( jQuery( this ).val() );
			$elem.find( 'input#url' ).val( $data.attr( 'href' ) );
			$elem.find( 'input#title' ).val( $data.text() );
			$elem.find( 'input#target' ).val( $data.attr( 'target' ) );
			$elem.find( 'span.url span.value' ).html( $data.attr( 'href' ) );
			$elem.find( 'span.title span.value' ).html( $data.text() );
			$elem.find( 'span.target span.value' ).html( $data.attr( 'target' ) );
		} );
	}
}
