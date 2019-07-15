import WPOnion_Module from '../class/module-base';

/**
 * WPOnion Metabox Module Handler.
 */
export default class extends WPOnion_Module {
	/**
	 * Inits Module.
	 */
	module_init() {
		this.ui_menu_handler();
		this.element.on( 'click', 'h2.ajax-container button', this.save_handler );
		jQuery( document ).on( 'postbox-moved', function( event, $element ) {
			$element = jQuery( $element );
			if( jQuery( '#postbox-container-1 ' ).find( '#' + $element.attr( 'id' ) ).length > 0 ) {
				$element.addClass( 'wponion-metabox-side-metabox' );
				$element.addClass( 'wponion-metabox-side' );
			} else {
				$element.removeClass( 'wponion-metabox-side-metabox' );
				$element.removeClass( 'wponion-metabox-side' );
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

		window.wpo_core.ajax( 'save_metabox', {
			data: $values,
			success: ( res ) => {
				$base.html( res.html );
				let $elem = $base.find( '.wponion-framework' );
				window.wponion_field_reload_all( $elem );
				window.wponion_init_theme( $elem );
			},
			always: () => $base.unblock(),
			error: ( res ) => window.wponion_error_swal( res ).fire(),
		} ).send();
	}
}
