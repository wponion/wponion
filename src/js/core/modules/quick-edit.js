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
		this.values  = window.wpo_core.fieldArgs( this.element.attr( 'data-wpo-quick-edit-id' ) + '_' + this.post_id, false );

		if( !window.wponion._.isUndefined( this.values ) && !window.wponion._.isUndefined( this.values.html ) ) {
			this.values.html = jQuery( this.values.html );
			this.element.html( this.values.html.find( '> div' ) );
		}
		window.wponion_field_reload_all( this.element );
		window.wponion_dependency( this.element );
	}
}
