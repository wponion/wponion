import WPOnion_Module from '../core/module';
import $wponion from '../core/core';

/**
 * WPOnion Metabox Module Handler.
 */
class WPOnion_Metabox_Module extends WPOnion_Module {
	/**
	 * Inits Module.
	 */
	module_init() {
		this.ui_menu_handler();
		this.element.on( 'click', 'h2.ajax-container button', this.save_handler );
		jQuery( document ).on( 'postbox-moved', function( event, $element ) {
			let $id = jQuery( $element ).attr( 'id' );
			if( jQuery( '#postbox-container-1 ' ).find( '#' + $id ).length > 0 ) {
				jQuery( $element ).addClass( 'wponion-metabox-side-metabox' );
				jQuery( $element ).addClass( 'wponion-metabox-side' );
			} else {
				jQuery( $element ).removeClass( 'wponion-metabox-side-metabox' );
				jQuery( $element ).removeClass( 'wponion-metabox-side' );
			}
		} );
	}

	/**
	 * Handles Ajax Save Handler.
	 * @param e
	 */
	save_handler( e ) {
		e.preventDefault();
		let $parent = jQuery( this ).parent(),
			$base   = $parent.parent().parent(),
			$hidden = $parent.find( 'div.wponion-metabox-secure-data' );

		$base.block( { message: null, overlayCSS: { background: '#000', opacity: 0.7 } } );

		$hidden.find( 'input' ).each( function() {
			jQuery( this ).attr( 'name', jQuery( this ).attr( 'id' ) );
		} );
		let $fields = $parent.parent().find( ':input' );
		let $values = $fields.serializeJSON();
		$hidden.find( 'input' ).removeAttr( 'name' );

		$wponion.ajax( 'save_metabox', {
			data: $values,
			success: ( res ) => {
				$base.html( res.html );
				let $elem = $base.find( '.wponion-framework' );
				window.wponion_field( $elem ).reload();
				window.wponion_theme( $elem );
			},
			always: () => $base.unblock(),
			error: ( res ) => wponion_error_swal( res ).fire(),
		} ).send();
	}
}

export default ( ( window, document, $ ) => {
	$( function() {
		$( 'div.postbox.wponion-metabox' ).each( function() {
			new WPOnion_Metabox_Module( $( this ), false );
		} );
	} );
} )( window, document, jQuery );

