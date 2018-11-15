import $wponion from './core';


export default class WPOnion_Validator {
	constructor( elem ) {
		this.elem = elem;
		this.form = WPOnion_Validator.get_form();

		this.rules = {
			invalidHandler: () => {
				jQuery( '#publish' ).removeClass( 'button-primary-disabled' );
				jQuery( '#ajax-loading' ).attr( 'style', '' );
				this.form.siblings( '#message' ).remove();
				this.form.before( '<div id="message" class="error"><p>' + $wponion.txt( 'validation_summary' ) + '</p></div>' );
			},
			//ignore: ':not([class|="wponion"])',
			errorPlacement: function( error, element ) {
				element.trigger( 'wponion_js_validation_message', { error, element } );
			},
			errorClass: 'wponion-error',
			errorElement: 'p'
		};

		this.rules = {};


		//this.form.parsley( this.rules );

		/*this.elem.find( '.wponion-element.wponion-js-validate' ).each( function() {
			let $args = $wponion.fieldArgs( $wponion.fieldID( jQuery( this ) ), false );
			if( false === is_undefined( $args.00 ) ) {
				jQuery( this ).find( ':input' ).each( function() {
					jQuery( this ).rules( 'add', $args.js_validate );
				} );
			}
		} );*/
	}

	static get_form() {
		return jQuery( 'form.wponion-form' );
	}
}

