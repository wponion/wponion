import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	init() {
		this.element.find( '> .row > .wponion-fieldset > .wponion-fieldset-wrap' )
			.each( ( i, elem ) => window.wponion_dependency( jQuery( elem ), {
				nestable: true,
				parent: this.element
			} ) );
	}
}
