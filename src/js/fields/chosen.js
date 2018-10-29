import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		this.element.chosen( this.handle_args( this.option( 'chosen', {} ) ) );
		return this;
	}

	field_debug() {

	}
}
