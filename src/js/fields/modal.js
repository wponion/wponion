import WPOnion_Field from '../core/field';
import WPOnion_Validator from '../core/validation';

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
		let $validation    = false;
		$args.preConfirm   = () => {
			return new Promise( ( resolve, reject ) => {
				let $a = $validation.form.valid();
				if( $a ) {
					return resolve();
				}
				return reject();
			} ).catch( () => {
				return false;
			} );
		};
		$args.onBeforeOpen = () => {
			let $mainelem = this.element.find( '#swal2-content' );
			let $hidden   = this.element.find( '.wponion-modal-hidden-data' );
			window.swal.showLoading();
			this.ajax( 'modal-popup-fields', {
				data: {
					unique: this.option( 'unique' ),
					field_path: this.option( 'field_path' ),
				},
				always: () => window.swal.hideLoading(),
				success: ( res ) => {
					let $html = '<form method="post">' + res + '</form>';
					$mainelem.html( jQuery( $html ) );
					$validation = new WPOnion_Validator( $mainelem.find( '> form' ) );
					$mainelem.show();
					window.wponion_field( $mainelem ).reload();
				},
				error: () => {
					window.swal.fire( {
						type: 'error',
						text: window.wponion.core.txt( 'unknown_ajax_error' ),
					} );
				},
			} ).send();

			//wponion_field( $mainelem ).reload();
			$mainelem.on( 'blur change click dblclick error keydown keypress keyup select', () => {
				let $inputs = $mainelem.find( ':input' ).serializeArray();
				$hidden.html( '' );
				for( let $i in $inputs ) {
					if( $inputs.hasOwnProperty( $i ) ) {
						$hidden.append( '<input type="hidden" name="' + $inputs[ $i ].name + '" value="' + $inputs[ $i ].value + '">' );
					}
				}
			} );
		};
		$args              = this.handle_args( $args, 'SweatAlert Modal' );
		$args.target       = this.element[ 0 ];
		swal.fire( $args );
	}
}

export default ( ( w ) => w.wponion_register_field( 'modal', ( $elem ) => new field( $elem ) ) )( window );
