import WPOnion_Module from '../class/module-base';

/**
 * WPOnion Quick Edit Module Handler.
 */
export default class extends WPOnion_Module {
	/**
	 * Module Init.
	 */
	module_init() {
		this.post_id = this.get_arg( 'post_id', false );
		this.values  = window.wpo_core.fieldArgs( window.wpo_core.fieldID( this.element ) + '_' + this.post_id, false );

		if( this.values.html ) {
			this.values.html = jQuery( this.values.html );
			this.element.parent().html( this.values.html.find( '> div' ) );
		}

		window.wponion_field_reload_all( this.element );
	}
}
