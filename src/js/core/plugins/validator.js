/**
 * WPOnion Field Validator Helper Class
 */
export default class WPOnion_Validator {
	/**
	 * Helper Class For WPOnion JS Field Validation.
	 */
	constructor( form = false ) {
		this.form  = ( false === form ) ? WPOnion_Validator.get_form() : form;
		this.rules = {
			invalidHandler: () => {
				jQuery( '#publish' ).removeClass( 'button-primary-disabled' );
				jQuery( '#ajax-loading' ).attr( 'style', '' );
				this.form.siblings( '#wponion-error-messages' ).remove();
				this.form.before( '<div id="wponion-error-messages" class="error"><p>' + window.wpo_core.txt( 'validation_summary' ) + '</p></div>' );
			},
			ignore: '.wponion-dependent,.wponion-validation-ignore',
			errorPlacement: function( error, element ) {
				element.trigger( 'wponion_js_validation_message', { error, element } );
			},
			errorClass: 'wponion-error',
			errorElement: 'p'
		};

		if( this.form ) {
			this.form.validate( this.rules );
		}
	}

	/**
	 * Finds & Returns form Data.
	 * @returns {*}
	 */
	static get_form() {
		if( jQuery( 'form.wponion-form' ).length > 0 ) {
			return jQuery( 'form.wponion-form' );
		}

		if( jQuery( 'form.wponion-wp-modal-form ' ).length > 0 ) {
			return jQuery( 'form.wponion-wp-modal-form ' );
		}

		if( jQuery( 'form.customize-controls' ).length > 0 ) {
			return jQuery( 'form.customize-controls' );
		}

		if( jQuery( 'form#your-profile' ).length > 0 ) {
			return jQuery( 'form#your-profile' );
		}

		if( jQuery( 'form#update-nav-menu' ).length > 0 ) {
			return jQuery( 'form#update-nav-menu' );
		}

		if( jQuery( 'form#post' ).length > 0 && jQuery( 'input#post_ID' ).length > 0 && jQuery( 'input#original_publish' ).length > 0 ) {
			return jQuery( 'form#post' );
		}

		return false;
	}
}
