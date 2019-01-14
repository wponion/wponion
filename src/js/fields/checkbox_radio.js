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

			$custom_input.each( function() {
				jQuery( this ).attr( 'data-name', jQuery( this ).attr( 'name' ) );
				jQuery( this ).removeAttr( 'name' );
			} );


			$radios.each( ( i, e ) => {
				if( jQuery( e ).is( ':checked' ) ) {
					if( jQuery( e ).parent().find( '.wponion-custom-value-input' ).length > 0 ) {
						$custom_input.removeAttr( 'name' );
						let $i = jQuery( e ).parent().find( '.wponion-custom-value-input' );
						$i.attr( 'name', $i.attr( 'data-name' ) );
					}
				}
			} );

			$radios.on( 'click', ( e ) => {
				if( jQuery( e.currentTarget ).parent().find( '.wponion-custom-value-input' ).length > 0 ) {
					$custom_input.removeAttr( 'name' );
					let $i = jQuery( e.currentTarget ).parent().find( '.wponion-custom-value-input' );
					$i.attr( 'name', $i.attr( 'data-name' ) );
				}
			} );

			$checkbox.each( ( i, e ) => {
				if( jQuery( e ).is( ':checked' ) ) {
					if( jQuery( e ).parent().find( '.wponion-custom-value-input' ).length > 0 ) {
						jQuery( e ).removeAttr( 'name' );
						let $i = jQuery( e ).parent().find( '.wponion-custom-value-input' );
						$i.attr( 'name', $i.attr( 'data-name' ) );
					}
				}
			} );

			$checkbox.on( 'click', ( e ) => {
				if( jQuery( e.currentTarget ).parent().find( '.wponion-custom-value-input' ).length > 0 ) {
					jQuery( e.currentTarget ).removeAttr( 'name' );
					let $i = jQuery( e.currentTarget ).parent().find( '.wponion-custom-value-input' );
					$i.attr( 'name', $i.attr( 'data-name' ) );
				}
			} );
		}
	}
}

export default ( ( w ) => w.wponion_register_field( 'checkbox_radio', ( $elem ) => new field( $elem ) ) )( window );

