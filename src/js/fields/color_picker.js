import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		this.element.find( 'input' ).wpColorPicker();
	}
}

