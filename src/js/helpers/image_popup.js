import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		let $image = ( window.wponion._.isUndefined( this.element.attr( 'data-fullsize' ) ) ) ? this.element.attr( 'src' ) : this.element.attr( 'data-fullsize' );
		swal( {
			imageUrl: $image,
			animation: false,
			background: 'transparent',
			showConfirmButton: false,
			backdrop: `rgba(0,0,0,0.44)`
		} );
	}
}

export default ( ( w ) => w.wponion_register_field( 'image_popup', ( $elem ) => new field( $elem ) ) )( window );
