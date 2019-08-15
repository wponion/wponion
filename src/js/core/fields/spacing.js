import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	init() {
		this.element.find( 'button' ).on( 'click', () => {
			if( this.element.find( '.wponion-spacing-input-all' ).is( ':hidden' ) ) {
				this.element.find( '.wponion-spacing-input' ).addClass( 'hidden' );
				this.element.find( '.wponion-spacing-input-all' ).removeClass( 'hidden' );
				this.element.find( 'button > i' ).attr( 'class', 'dashicons dashicons-editor-expand' );
				this.element.find( '.wponion-spacing-input' ).find( 'input' ).val( '' );
			} else {
				this.element.find( '.wponion-spacing-input' ).removeClass( 'hidden' );
				this.element.find( '.wponion-spacing-input-all' ).addClass( 'hidden' );
				this.element.find( 'button > i' ).attr( 'class', 'dashicons dashicons-editor-contract' );
				this.element.find( '.wponion-spacing-input:not(.wponion-spacing-input-all)' )
					.find( 'input' )
					.val( this.element.find( '.wponion-spacing-input-all' ).find( 'input' ).val() );

				this.element.find( '.wponion-spacing-input-all' ).find( 'input' ).val( '' );
			}
		} );
	}
}

