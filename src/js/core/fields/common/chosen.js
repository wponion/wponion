import WPOnion_Field from '../../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( window.wponion_is_library_exists( 'chosen', 'jquery' ) ) {
			this.element.chosen( this.handle_args( this.option( 'chosen', {} ), 'chosen' ) );
		}
	}

	maybe_add_inited_class() {
	}
}
