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
				case 'wp':
					this.init_wp();
					break;
			}
		} );
	}

	/**
	 * Inits WordPress.
	 */
	init_wp() {
		this.element.block( { message: null, overlayCSS: { background: '#000', opacity: 0.7 } } );
		this.fetch_fields( ( res ) => {
			let $instance = new window.wponion.modal( this.option( 'modal_config' ), res.html );
			$instance.on( 'open', ( $elem ) => {
				window.wponion.core.script_tag( res.script );
				window.wponion_field( $elem ).reload();
				this.record_fields( $elem );
			} );

			$instance.open();
			this.element.unblock();
		}, ( res ) => wponion_error_swal( res ), () => {
			this.element.unblock();
		} );
	}

	/**
	 * Records Fields Event.
	 * @param $element
	 */
	record_fields( $element ) {
		$element.on( 'blur change click dblclick error keydown keypress keyup select', () => {
			let $hidden = this.element.find( '.wponion-modal-hidden-data' );
			let $inputs = $element.find( ':input' ).serializeArray();
			$hidden.html( '' );
			for( let $i in $inputs ) {
				if( $inputs.hasOwnProperty( $i ) ) {
					$hidden.append( '<input type="hidden" name="' + $inputs[ $i ].name + '" value="' + $inputs[ $i ].value + '">' );
				}
			}
		} );
	}

	/**
	 * Fetchs Fields From Ajax.
	 * @param $success
	 * @param $error
	 * @param $always
	 */
	fetch_fields( $success, $error, $always ) {
		this.ajax( 'modal-fields', { always: $always, success: $success, error: $error } ).send();
	}

	/**
	 * Handles SweatAlert
	 */
	init_sweatalert() {
		let $args          = this.option( 'modal_config' );
		let $validation    = false;
		$args.preConfirm   = () => {
			return new Promise( ( resolve, reject ) => {
				return ( $validation.form.valid() ) ? resolve() : reject();
			} ).catch( () => {
				return false;
			} );
		};
		$args.onBeforeOpen = () => {
			let $mainelem = this.element.find( '#swal2-content' );
			window.swal.showLoading();
			this.fetch_fields( ( res ) => {
					window.wponion.core.script_tag( res.script );
					let $html = '<form method="post">' + res.html + '</form>';
					$mainelem.html( jQuery( $html ) );
					$validation = new WPOnion_Validator( $mainelem.find( '> form' ) );
					$mainelem.show();
					window.wponion_field( $mainelem ).reload();
				},
				( res ) => wponion_error_swal( res ),
				() => window.swal.hideLoading() );

			this.record_fields( $mainelem );
		};
		$args              = this.handle_args( $args, 'SweatAlert Modal' );
		$args.target       = this.element[ 0 ];
		swal.fire( $args );
	}
}

export default ( ( w ) => w.wponion_register_field( 'modal', ( $elem ) => new field( $elem ) ) )( window );
