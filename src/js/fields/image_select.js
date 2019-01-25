import WPOnion_Field from '../core/field';

class Field extends WPOnion_Field {
	init() {
		let $this = this;
		this.element.find( 'img' ).each( function() {
			if( jQuery( this )[ 0 ].complete ) {
				if( jQuery( this ).parent().parent().hasClass( 'wponion-checkbox-radio-tooltip' ) ) {
					jQuery( this ).parent().parent().addClass( 'wponion-field-tooltip' );
					$this.init_field( jQuery( this ).parent().parent(), 'tooltip' );
				}
			} else {
				jQuery( this ).on( 'load', function() {
					if( jQuery( this ).parent().parent().hasClass( 'wponion-checkbox-radio-tooltip' ) ) {
						jQuery( this ).parent().parent().addClass( 'wponion-field-tooltip' );
						$this.init_field( jQuery( this ).parent().parent(), 'tooltip' );
					}
				} );
			}
		} );
	}
}

export default ( ( w ) => w.wponion_register_field( 'image_select', ( $elem ) => new Field( $elem ) ) )( window );
