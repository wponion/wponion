import WPOnion_Module from '../class/module-base';

/**
 * Handle WPOnion Settings
 */
export default class extends WPOnion_Module {

	/**
	 * Inits Module.
	 */
	module_init() {
		this.ui_menu_handler();
		if( this.element.hasClass( 'wponion-ajax-save' ) ) {
			jQuery( 'body' ).on( 'click', 'button.wponion-save', ( e ) => {
				e.preventDefault();
				var validator = jQuery( 'form.wponion-form' ).validate();

				if( validator.form() ) {
					let $data               = jQuery( 'form.wponion-form' ).serializeJSON();
					$data.action            = 'wponion-ajax';
					$data[ 'wponion-ajax' ] = 'save_settings';
					window.wponion_ajax( {
						data: $data,
						element_lock: jQuery( 'button.wponion-save' ),
						success: ( response ) => {
							let $elem     = jQuery( response.form ),
								$settings = window.wponion._.clone( window.wpo_core.option( 'settings_ajax' ) );

							window.wpo_core.handle_ajax_response( response );
							this.element.parent().html( $elem.find( '.wponion-form' ).html() );

							if( window.wponion._.isObject( $settings ) ) {
								if( false === window.wponion._.isUndefined( $settings.toast ) ) {
									delete $settings.toast;
									window.wponion_swal_toast().fire( $settings );
								} else {
									window.swal.fire( window.wponion._.merge( { type: 'success' }, $settings ) );
								}
							} else {
								window.swal.fire( { type: 'success', title: $settings, } );
							}

							let $elm = jQuery( '.wponion-framework' );
							window.wponion_validator();
							window.wponion_field_reload_all( $elm );
							window.wponion_init_theme( $elm );
							window.wponion_dependency( $elm );
						},
						error: () => this.element.parent().submit()
					} ).send();
				}
			} );
		}
	}
}
