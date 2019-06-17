import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		let $options   = this.handle_args( this.parse_args( this.option( 'spinner' ), {
			min: 1,
			max: 100,
			step: 1,
		} ), 'Spinner' );
		let $input     = this.element.find( 'input[type=text]' ),
			$elem_init = ( this.element.find( '.wponion-input-group' ).length > 0 ) ? this.element.find( '.wponion-input-group' ) : $input;
		$options.spin  = ( event, ui ) => $input.val( ui.value ).trigger( 'change' );
		$elem_init.spinner( $options );
	}
}

export default ( ( w ) => w.wponion_register_field( 'spinner', ( $elem ) => new field( $elem ) ) )( window );
