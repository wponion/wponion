import WPOnion_Field from '../../class/field';

/**
 * Image POPUP View Class.
 */
export default class extends WPOnion_Field {
	/**
	 * Handles Image POPUP View.
	 */
	init() {
		this.element.on( 'click', () => {
			let $image = ( window.wponion._.isUndefined( this.element.attr( 'data-fullsize' ) ) ) ? this.element.attr( 'src' ) : this.element.attr( 'data-fullsize' );
			swal.fire( {
				imageUrl: $image,
				animation: false,
				background: 'transparent',
				showConfirmButton: false,
				backdrop: `rgba(0, 0, 0, 0.44)`
			} );
		} );
	}
}
