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
		this.fetch_fields( ( res ) => {
			let $instance = new window.wponion.modal( this.option( 'modal_config' ), res.html );
			$instance.on( 'open', ( $elem ) => {
				window.wponion.core.script_tag( res.script );
				window.wponion_field( $elem ).reload();
			} );

			$instance.on( 'save_modal', ( $elem ) => this.convert_form_fields( $elem ) );
			$instance.open();
		} );
	}

	/**
	 * Records Fields Event.
	 * @param $element
	 */
	record_fields( $element ) {
		$element.on( 'blur change click dblclick error keydown keypress keyup select', () => {
			this.convert_form_fields( $element );
		} );
	}

	/**
	 * Converts Form Fields Inot Inputs.
	 * @param $element
	 */
	convert_form_fields( $element ) {
		let $hidden = this.element.find( '.wponion-modal-hidden-data' );
		let $inputs = $element.find( ':input' ).serializeArray();
		$hidden.html( '' );
		for( let $i in $inputs ) {
			if( $inputs.hasOwnProperty( $i ) ) {
				let $html = '<textarea class="wpo-hidden" name="' + $inputs[ $i ].name + '">' + $inputs[ $i ].value + '</textarea>';
				$hidden.append( $html );
			}
		}
	}

	/**
	 * Fetchs Fields From Ajax.
	 * @param $success
	 * @param $error
	 * @param $always
	 */
	fetch_fields( $success ) {
		this.element.block( { message: null, overlayCSS: { background: '#fff', opacity: 0.7 } } );
		this.ajax( 'modal-fields', {
			data: this.parse_args( this.option( 'ajax_args', {} ), {
				modal_values: this.element.find( '.wponion-modal-hidden-data :input' ).serializeJSON(),
			} ),
			always: () => this.element.unblock(),
			success: $success,
			error: ( res ) => wponion_error_swal( res ).fire()
		} ).send();
	}

	/**
	 * Handles SweatAlert
	 */
	init_sweatalert() {
		this.fetch_fields( ( res ) => {
			let $args          = this.option( 'modal_config' );
			let $validation    = false;
			$args.preConfirm   = () => {
				return new Promise( ( resolve, reject ) => {
					if( $validation.form.valid() ) {
						this.convert_form_fields( this.element.find( '#swal2-content' ) );
						resolve();
					}
					return reject();
				} ).catch( () => {
					return false;
				} );
			};
			$args.onBeforeOpen = () => {
				let $mainelem = this.element.find( '#swal2-content' );
				window.wponion.core.script_tag( res.script );
				let $html = '<form method="post">' + res.html + '</form>';
				$mainelem.html( jQuery( $html ) );
				$validation = new WPOnion_Validator( $mainelem.find( '> form' ) );
				$mainelem.show();
				window.wponion_field( $mainelem ).reload();
			};
			$args              = this.handle_args( $args, 'SweatAlert Modal' );
			$args.target       = this.element[ 0 ];
			swal.fire( $args );
		} );
	}
}

export default ( ( w ) => w.wponion_register_field( 'modal', ( $elem ) => new field( $elem ) ) )( window );
