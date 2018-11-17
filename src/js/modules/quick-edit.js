import WPOnion_Module from '../core/module';
import $wponion from '../core/core';

export default class extends WPOnion_Module {
	module_init() {
		this.post_id = this.contxt;
		let $id      = $wponion.fieldID( this.element ) + '_' + this.post_id;
		this.values  = $wponion.fieldArgs( $id, false );
		console.log( this.values );
		wponion_field( this.element ).reload();
	}
}
