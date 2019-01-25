import WPOnion_Module from '../core/module';

/**
 *
 */
class WPOnion_Settings_Module extends WPOnion_Module {
	/**
	 * Inits Module.
	 */
	module_init() {
		this.ui_menu_handler();
	}
}

export default ( ( window, document, $ ) => {
	$( function() {
		$( 'div.wponion-framework.wponion-settings' ).each( function() {
			new WPOnion_Settings_Module( $( this ), false );
		} );
	} );
} )( window, document, jQuery );

