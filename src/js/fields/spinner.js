import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		let $input     = this.element.find( 'input[type=text]' ),
			$elem_init = $input;
		console.log( this.element.find( '.wponion-input-group' ) );
		if( this.element.find( '.wponion-input-group' ).length > 0 ) {
			$elem_init = this.element.find( '.wponion-input-group' );
		}


		$elem_init.spinner( {
			max: 100,
			min: 1,
			step: 1,
			spin: ( event, ui ) => $input.val( ui.value ).trigger( 'change' )
		} );
	}
}

export default ( ( w ) => w.wponion_register_field( 'spinner', ( $elem ) => new field( $elem ) ) )( window );
