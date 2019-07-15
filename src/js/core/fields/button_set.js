import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.remove_active();
		this.add_active();
		this.element.find( ':input' ).on( 'click', ( e ) => {
			this.remove_active();
			this.add_active();
			this.element.trigger( 'wponion_field_updated' );
		} );
	}

	/**
	 * Remove Active Class.
	 */
	remove_active() {
		this.element.find( ':input' ).each( ( i, e ) => {
			let $e = jQuery( e );
			if( !$e.is( ':checked' ) ) {
				$e.parent().parent().removeClass( this.option( 'active' ) ).addClass( this.option( 'inactive' ) );
			}
		} );
	}

	/**
	 * Adds Active Class.
	 */
	add_active() {
		this.element.find( ':input' ).each( ( i, e ) => {
			let $e = jQuery( e );
			if( $e.is( ':checked' ) ) {
				$e.parent().parent().addClass( this.option( 'active' ) ).removeClass( this.option( 'inactive' ) );
			}
		} );
	}
}
