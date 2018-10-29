import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		if( this.element.find( 'input.wponion-custom-value-input' ).length > 0 ) {
			let $inputs = this.element.find( 'input.wponion-custom-value-input' );
			this.element.find( 'input[type=radio]' ).on( 'click', () => $inputs.removeAttr( 'name' ) );

			$inputs.on( 'click', function() {
				$( this ).parent().find( 'input[type=radio],input[type=checkbox]' ).prop( "checked", true );
				$( this ).attr( 'name', $( this ).attr( 'data-name' ) );
			} );
		}
	}
}


