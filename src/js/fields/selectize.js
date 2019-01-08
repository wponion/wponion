import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

export default class extends WPOnion_Field {
	init() {
		let $arg = this.option( 'selectize', {} );

		if( !window.wpo._.isUndefined( $arg.theme ) ) {
			this.element.parent().addClass( $arg.theme );
		} else {
			this.element.parent().addClass( 'selectize-default' );
		}

		$arg = $wponion.js_func( $arg );
		this.element.removeClass( 'form-control' ).selectize( $arg );
		return this;
	}

	field_debug() {

	}
}
