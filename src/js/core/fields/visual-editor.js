import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	init() {
		this.element.find( 'div#box-controls input[type=checkbox]' ).on( 'change', ( e ) => {
			let $elm = jQuery( e.currentTarget );
			if( $elm.prop( 'checked' ) ) {
				jQuery( '.wpo-css-builder-field-bottom' ).attr( 'readonly', 'readonly' );
				jQuery( '.wpo-css-builder-field-left' ).attr( 'readonly', 'readonly' );
				jQuery( '.wpo-css-builder-field-right' ).attr( 'readonly', 'readonly' );
				jQuery( '.wpo-css-builder-field-bottom-right' ).attr( 'readonly', 'readonly' );
				jQuery( '.wpo-css-builder-field-bottom-left' ).attr( 'readonly', 'readonly' );
				jQuery( '.wpo-css-builder-field-top-left' ).attr( 'readonly', 'readonly' );
				this.update_bind( true );
			} else {
				jQuery( '.wpo-css-builder-field-bottom' ).removeAttr( 'readonly' );
				jQuery( '.wpo-css-builder-field-left' ).removeAttr( 'readonly' );
				jQuery( '.wpo-css-builder-field-right' ).removeAttr( 'readonly' );
				jQuery( '.wpo-css-builder-field-bottom-right' ).removeAttr( 'readonly' );
				jQuery( '.wpo-css-builder-field-bottom-left' ).removeAttr( 'readonly' );
				jQuery( '.wpo-css-builder-field-top-left' ).removeAttr( 'readonly' );
				this.update_bind( false );
			}
		} );
	}

	update_bind( $status ) {
		if( true === $status ) {
			jQuery( '.wpo-css-builder-field-padding-top' ).on( 'keyup', ( e ) => {
				this.element.find( '.wpo-padding:not(.wpo-css-builder-field-padding-top)' )
					.val( jQuery( e.currentTarget ).val() );
			} );
			jQuery( '.wpo-css-builder-field-border-top' ).on( 'keyup', ( e ) => {
				this.element.find( '.wpo-border:not(.wpo-css-builder-field-border-top)' )
					.val( jQuery( e.currentTarget ).val() );
			} );
			jQuery( '.wpo-css-builder-field-margin-top' ).on( 'keyup', ( e ) => {
				this.element.find( '.wpo-margin:not(.wpo-css-builder-field-margin-top)' )
					.val( jQuery( e.currentTarget ).val() );
			} );
			jQuery( '.wpo-css-builder-field-border-top-right-radius' ).on( 'keyup', ( e ) => {
				this.element.find( '.wpo-border-radius:not(.wpo-css-builder-field-border-top-right-radius)' )
					.val( jQuery( e.currentTarget ).val() );
			} );
		} else {
			jQuery( '.wpo-css-builder-field-padding-top' ).off( 'keyup' );
			jQuery( '.wpo-css-builder-field-border-top' ).off( 'keyup' );
			jQuery( '.wpo-css-builder-field-margin-top' ).off( 'keyup' );
			jQuery( '.wpo-css-builder-field-border-top-right-radius' ).off( 'keyup' );
		}
	}
}
