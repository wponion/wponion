import WPOnion_VC_Field from './field';

class field extends WPOnion_VC_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.is_vc_param_elem() ) {
			this.element.find( 'input' ).addClass( 'wpb_vc_param_value' );
		}
	}
}

export default ( ( w ) => {
	w.wponion_register_field( 'image_upload', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'upload', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'icon_picker', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'gallery', ( $elem ) => new field( $elem ), 'vc' );
} )( window );
