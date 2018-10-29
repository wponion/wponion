import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		let $dep = this.option( 'dependency' );
		for( let $key in $dep[ 'controller' ] ) {
			let $controller = $dep[ 'controller' ][ $key ],
				$condition  = $dep[ 'condition' ][ $key ],
				$value      = $dep[ 'value' ][ $key ];
			this.contxt     = this.contxt.createRule( '[data-depend-id="' + $controller + '"]', $condition, $value );
			this.contxt.include( jQuery( this.element ) );
		}
	}
}
