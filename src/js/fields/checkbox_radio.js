import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.element.find( '.wponion-custom-value-input' ).length > 0 ) {
			let $custom_input = this.element.find( '.wponion-custom-value-input' );
			let $radios       = this.element.find( 'input[type=radio]' );
			let $checkbox     = this.element.find( 'input[type=checkbox]' );

			$custom_input.moveAttr( 'name', 'data-name' );

			$radios.each( ( i, e ) => {
				if( jQuery( e ).is( ':checked' ) ) {
					if( jQuery( e ).parent().find( '.wponion-custom-value-input' ).length > 0 ) {
						$custom_input.moveAttr( 'name', 'data-name' );
						jQuery( e ).parent().find( '.wponion-custom-value-input' ).moveAttr( 'data-name', 'name' );
					}
				}
			} );

			$radios.on( 'click', ( e ) => {
				$custom_input.moveAttr( 'name', 'data-name' );
				if( jQuery( e.currentTarget ).parent().find( '.wponion-custom-value-input' ).length > 0 ) {
					jQuery( e.currentTarget )
						.parent()
						.find( '.wponion-custom-value-input' )
						.moveAttr( 'data-name', 'name' );
				}
			} );

			$checkbox.each( ( i, e ) => {
				if( jQuery( e ).parent().find( '.wponion-custom-value-input' ).length > 0 ) {
					if( jQuery( e ).is( ':checked' ) ) {
						jQuery( e ).moveAttr( 'name', 'data-name' );
						jQuery( e ).parent().find( '.wponion-custom-value-input' ).moveAttr( 'data-name', 'name' );
					} else {
						jQuery( e ).moveAttr( 'name', 'data-name' );
						jQuery( e ).parent().find( '.wponion-custom-value-input' ).moveAttr( 'name', 'data-name' );
					}
				}
			} );

			$checkbox.on( 'click', ( e ) => {
				if( jQuery( e.currentTarget ).parent().find( '.wponion-custom-value-input' ).length > 0 ) {
					if( jQuery( e.currentTarget ).is( ':checked' ) ) {
						jQuery( e.currentTarget ).moveAttr( 'name', 'data-name' );
						jQuery( e.currentTarget )
							.parent()
							.find( '.wponion-custom-value-input' )
							.moveAttr( 'data-name', 'name' );
					} else {
						jQuery( e.currentTarget )
							.parent()
							.find( '.wponion-custom-value-input' )
							.moveAttr( 'name', 'data-name' );
					}
				}
			} );
		}
	}
}

export default ( ( w ) => {
	w.wponion_register_field( 'checkbox', ( $elem ) => new field( $elem ) );
	w.wponion_register_field( 'radio', ( $elem ) => new field( $elem ) );
} )( window );

