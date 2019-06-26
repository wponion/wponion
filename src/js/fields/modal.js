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
			let $instance   = new window.wponion.modal( this.option( 'modal_config' ), res.html );
			let $validation = false;
			//<form method="post" class="wponion-wp-modal-form">

			$instance.on( 'before_render', ( $elem ) => {
				let $parent = $elem.find( '.wponion-modal-content-container' )
								   .parent();
				$elem.find( '.wponion-modal-content-container' ).remove();
				$parent.append( '<form method="post" class="wponion-wp-modal-form"><div class="wponion-modal-content-container"></div></form>' );
			} );

			$instance.on( 'open', ( $elem ) => {
				window.wponion.core.script_tag( res.script );
				$validation = new WPOnion_Validator( jQuery( '.wponion-wp-modal-form' ) );
				window.wponion_dependency( $elem );
				window.wponion_field( $elem ).reload();
			} );

			$instance.on( 'save_modal', ( $elem ) => {
				if( $validation.form.valid() ) {
					this.convert_form_fields( $elem );
					$instance.closeModal();
				}
			} );
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
		let $inputs = $element.find( ':input' ).serializeJSON();
		this.ajax( 'modal-fields', {
			element_lock: this.element,
			blockUI: {
				message: window.wponion.core.txt( 'saving', 'Saving...' ),
				overlayCSS: {
					background: '#fff',
					opacity: 0.7
				}
			},
			data: this.parse_args( $inputs, {
				modal_action: 'save_fields'
			} ),
		} ).send();
	}

	/**
	 * Fetchs Fields From Ajax.
	 * @param $success
	 */
	fetch_fields( $success ) {
		this.ajax( 'modal-fields', {
			element_lock: this.element,
			blockUI: { message: null, overlayCSS: { background: '#fff', opacity: 0.7 } },
			data: this.parse_args( this.option( 'ajax_args', {} ), { modal_action: 'featch_fields' } ),
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
				window.wponion_dependency( $mainelem );
			};
			$args              = this.handle_args( $args, 'SweatAlert Modal' );
			$args.target       = this.element[ 0 ];
			swal.fire( $args );
		} );
	}
}

export default ( ( w ) => w.wponion_register_field( 'modal', ( $elem ) => new field( $elem ) ) )( window );
