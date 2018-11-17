import WPOnion_Module from '../core/module';
import $wponion from '../core/core';
import is_string from 'locutus/php/var/is_string';
import is_null from 'locutus/php/var/is_null';
import is_object_like from 'vsp-js-helper/parts/is_object_like';
import is_undefined from 'vsp-js-helper/parts/is_undefined';

export default class extends WPOnion_Module {
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
