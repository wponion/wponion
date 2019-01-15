import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.remove_active_class();
		this.add_active_class();
		this.element.find( ':input' ).on( 'click', ( e ) => {
			this.remove_active_class();
			this.add_active_class();
		} );
	}

	/**
	 * Remove Active Class.
	 */
	remove_active_class() {
		this.element.find( ':input' ).each( ( i, e ) => {
			let $e = jQuery( e );
			if( !$e.is( ':checked' ) ) {
				$e.parent().parent().removeClass( this.option( 'active' ) );
				$e.parent().parent().addClass( this.option( 'inactive' ) );
			}
		} );
	}

	/**
	 * Adds Active Class.
	 */
	add_active_class() {
		this.element.find( ':input' ).each( ( i, e ) => {
			let $e = jQuery( e );
			if( $e.is( ':checked' ) ) {
				$e.parent().parent().addClass( this.option( 'active' ) );
				$e.parent().parent().removeClass( this.option( 'inactive' ) );
			}
		} );
	}
}

export default ( ( w ) => w.wponion_register_field( 'button_set', ( $elem ) => new field( $elem ) ) )( window );
