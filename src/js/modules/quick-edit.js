import WPOnion_Module from '../core/module';
import $wponion from '../core/core';

class WPOnion_Quick_Edit extends WPOnion_Module {
	module_init() {
		this.post_id = this.contxt;
		let $id      = $wponion.fieldID( this.element ) + '_' + this.post_id;
		this.values  = $wponion.fieldArgs( $id, false );

		if( this.values.html ) {
			this.values.html = jQuery( this.values.html );
			this.element.parent().html( this.values.html.find( '> div' ) );
		}

		wponion_field( this.element ).reload();
	}
}

export default ( ( window, document, $, wp ) => {
	$( window ).on( 'load', () => {
		let $list = $( '#the-list' );
		if( $list.length > 0 ) {
			$list.on( 'click', '.editinline', function() {
				let post_id = jQuery( this ).closest( 'tr' ).attr( 'id' );
				post_id     = post_id.replace( 'post-', '' );
				$( 'tr#edit-' + post_id ).find( '.wponion-framework' ).each( function() {
					new WPOnion_Quick_Edit( jQuery( this ), post_id );
				} );
			} );
		}
	} );
} )( window, document, jQuery, wp );

