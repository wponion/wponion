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
		this.menu();
		this.element.on( 'click', 'h2.ajax-container button', this.save_handler );
	}

	/**
	 * Handles Metabox Menu's
	 */
	menu() {
		let $elem = this.element;
		$elem.on( 'click', 'ul.wponion-metabox-parent-menu li a', function( e ) {
			e.preventDefault();
			if( jQuery( this ).hasClass( 'dropdown' ) ) {
				if( jQuery( this ).next( 'ul' ).is( ':visible' ) ) {
					jQuery( this ).next( 'ul' ).slideToggle( 'fast' );
				} else {
					$elem.find( 'ul.wponion-metabox-parent-menu li ul' ).slideUp( 'fast' );
					jQuery( this ).next( 'ul' ).slideToggle( 'fast' );
				}
			} else {
				let $href           = window.wponion.helper.url_params( jQuery( this ).attr( 'data-href' ) ),
					$parent         = 'wponion-tab-' + $href[ 'container-id' ],
					$section        = ( $href[ 'sub-container-id' ] !== undefined ) ? $parent + '-' + $href[ 'sub-container-id' ] : false,
					$parent_actives = $elem.find( 'div.wponion-parent-wraps' ),
					$current        = $elem.find( 'div#' + $parent );

				$elem.find( 'div.wponion-section-wraps' ).hide();
				$parent_actives.hide();

				if( $href[ 'sub-container-id' ] !== undefined && $href[ 'container-id' ] !== undefined ) {
					$current.find( 'div.wponion-section-wraps' ).hide();
					$current.find( ' div#' + $section ).show();
				}

				$current.show();

				$elem.find( 'ul.wponion-metabox-parent-menu a.active ' ).removeClass( 'active ' );
				jQuery( this ).addClass( 'active' );
				$elem.find( 'ul.wponion-metabox-parent-menu > li > a' ).removeClass( 'active' );
				$elem.find( 'ul.wponion-metabox-parent-menu a[data-wponion-id="wponion_menu_' + $href[ 'container-id' ] + '"]' )
					 .addClass( 'active' );
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
		let $values = $fields.serialize();
		$hidden.find( 'input' ).removeAttr( 'name' );

		$wponion.ajax( 'save_metabox', { data: $values }, function( res ) {
			$base.html( res );
			$base.unblock();
			window.wponion_field( $base.find( '.wponion-framework' ) ).reload();
		} );
	}
}

export default ( ( window, document, $ ) => {
	$( function() {
		$( 'div.postbox.wponion-metabox' ).each( function() {
			new WPOnion_Metabox_Module( $( this ), false );
		} );
	} );
} )( window, document, jQuery );

