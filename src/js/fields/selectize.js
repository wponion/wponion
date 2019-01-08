import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

class field extends WPOnion_Field {
	init() {
		let $arg = this.option( 'selectize', {} );

		if( !window.wponion._.isUndefined( $arg.theme ) ) {
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

export default ( ( w ) => w.wponion_render_field( 'selectize', ( $elem ) => new field( $elem ) ) )( window );
