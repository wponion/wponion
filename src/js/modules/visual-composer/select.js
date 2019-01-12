import WPOnion_VC_Field from './field';

class field extends WPOnion_VC_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.is_vc_param_elem() ) {
			let $select = this.element.find( 'select' );
			if( $select.length === 1 && 'multiple' === $select.attr( 'multiple' ) ) {
				this.save( $select.val(), 'array' );
				$select.on( 'change', ( e ) => this.save( jQuery( e.currentTarget ).val(), 'array' ) );
			}
		}
	}
}

export default ( ( w ) => {
	w.wponion_register_field( 'select', ( $elem ) => new field( $elem ), 'vc' );
} )( window );
