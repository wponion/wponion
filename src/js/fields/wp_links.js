import WPOnion_Field from '../core/field';
/* global wpLinkL10n:true */
export default class extends WPOnion_Field {
	init() {
		let $this     = this,
			$elem     = $this.element,
			$textarea = $elem.find( 'textarea' );
		$elem.find( '#wponion-wp-link-picker > button' ).on( 'click', function() {
			$textarea.val( '' );
			let $dialog = !window.wpLink && jQuery.fn.wpdialog && jQuery( '#wp-link' ).length ? {
				$link: !1,
				open: function() {
					this.$link = jQuery( '#wp-link' ).wpdialog( {
						title: wpLinkL10n.title,
						width: 480,
						height: 'auto',
						modal: !0,
						dialogClass: 'wp-dialog',
						zIndex: 3e5
					} );
				},
				close: function() {
					this.$link.wpdialog( 'close' );
				}
			} : window.wpLink;
			$dialog.open( $textarea.attr( 'id' ) );
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
