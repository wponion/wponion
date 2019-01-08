import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		let $image = ( window.wpo._.isUndefined( this.element.attr( 'data-fullsize' ) ) ) ? this.element.attr( 'src' ) : this.element.attr( 'data-fullsize' );
		swal( {
			imageUrl: $image,
			animation: false,
			background: 'transparent',
			showConfirmButton: false,
			backdrop: `rgba(0,0,0,0.44)`
		} );
	}
}
