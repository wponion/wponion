import WPOnion_Module from '../core/module';
import WPOnion_Validator from '../core/validation';

/**
 *
 */
class WPOnion_Settings_Module extends WPOnion_Module {
	/**
	 * Inits Module.
	 */
	module_init() {
		this.ui_menu_handler();

		if( this.element.hasClass( 'wponion-ajax-save' ) ) {
			this.element.on( 'click', 'button.wponion-save', ( e ) => {
				e.preventDefault();
				let $data               = jQuery( 'form.wponion-form' ).serializeJSON();
				$data.action            = 'wponion-ajax';
				$data[ 'wponion-ajax' ] = 'save_settings';
				wponion_ajax( {
					data: $data,
					element_lock: jQuery( 'button.wponion-save' ),
					success: ( response ) => {
						let $elem = jQuery( response.form );
						jQuery( 'body' ).find( 'script#wponion_field_js_vars' ).append( response.script );
						this.element.parent().html( $elem.find( '.wponion-form' ).html() );
						let $settings = window.wponion._.clone( window.wponion.core.option( 'settings_ajax' ) );

						if( window.wponion._.isObject( $settings ) ) {
							if( false === window.wponion._.isUndefined( $settings.toast ) ) {
								delete $settings.toast;
								wponion_swal_toast().fire( $settings );
							} else {
								window.swal.fire( window.wponion._.merge( {
									type: 'success'
								}, $settings ) );
							}
						} else {
							window.swal.fire( {
								type: 'success',
								title: $settings,
							} );
						}

						let $elm = jQuery( '.wponion-framework' );
						new WPOnion_Validator();
						window.wponion_theme( $elm );
						window.wponion_field( $elm ).reload();
						wponion_dependency( $elm );
					},
					error: () => {
						this.element.parent().submit();
					}
				} ).send();
			} );
		}
	}
}

export default ( ( window, document, $ ) => {
	$( function() {
		window.wponion.hooks.addAction( 'wponion_theme_init', 'wponion-core', ( $elem ) => {
			new WPOnion_Settings_Module( $elem, false );
		} );
	} );
} )( window, document, jQuery );
