import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		let $arg = this.option( 'select2', {} );
		this.element.select2( this.handle_args( $arg ) );
		return this;
	}
	field_debug(){

	}
}
