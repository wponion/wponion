import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		if( this.element.find( 'input.wponion-custom-value-input' ).length > 0 ) {
			let $inputs = this.element.find( 'input.wponion-custom-value-input' );
			this.element.find( 'input[type=radio]' ).on( 'click', () => $inputs.removeAttr( 'name' ) );

			$inputs.on( 'click', function() {
				jQuery( this ).parent().find( 'input[type=radio],input[type=checkbox]' ).prop( 'checked', true );
				jQuery( this ).attr( 'name', jQuery( this ).attr( 'data-name' ) );
			} );
		}
	}
}

export default ( ( w ) => w.wponion_render_field( 'checkbox_radio', ( $elem ) => new field( $elem ) ) )( window );

