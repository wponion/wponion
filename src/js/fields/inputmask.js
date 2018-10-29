import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

export default class extends WPOnion_Field {
	init() {
		if( this.element.length > 0 ) {
			let $settings = this.option( 'inputmask' );
			if( $settings ) {
				$settings = $wponion.js_func( $settings );
				this.element.inputmask( $settings );
			}
		}
	}
}
