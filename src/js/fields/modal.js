import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.element.find( '>  .row > .wponion-fieldset > button[type="button"]' ).on( 'click', () => {
			switch( this.option( 'modal_type' ) ) {
				case 'swal':
				case 'sweetalert':
				case 'alert':
					this.init_sweatalert();
					break;
			}
		} );
	}

	init_sweatalert() {
		let $args          = this.option( 'modal_config' );
		//$args.html         = this.option( 'modal_html' );
		let $modal         = this.element.find( '>  .row > .wponion-fieldset > .wponion-modal-html' );
		$args.html         = '<div class="wponion-framework">' + this.option( 'modal_html' ) + '</div>';
		$args.onBeforeOpen = () => {
			let $mainelem = this.element.find( '#swal2-content .wponion-framework' );
			wponion_field( $mainelem ).reload();
			/*$mainelem.on( 'blur change click dblclick error keydown keypress keyup select', () => {
				console.log( $mainelem.find( ':input' ).serializeArray() );
				console.log( $mainelem.html() );
			} );*/
		};
		$args              = this.handle_args( $args, 'SweatAlert Modal' );
		$args.target       = this.element[ 0 ];
		swal.fire( $args );
	}
}

export default ( ( w ) => w.wponion_register_field( 'modal', ( $elem ) => new field( $elem ) ) )( window );
