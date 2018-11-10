import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		this.element.find( '.wponion-keyvalue_wrap' ).WPOnionCloner( {
			add_btn: this.element.find( '.wponion-fieldset > .wponion-keyvalue-action-container  > button[data-wponion-keyvalue-add]' ),
			limit: ( -1 === this.option( 'limit' ) ) ? null : this.option( 'limit' ),
			clone_elem: '> .wponion-fieldset > .wponion-keyvalue-field',
			remove_btn: '.wponion-keyvalue-field > button[data-wponion-keyvalue-remove]',
			template: this.option( 'html_template' ),
			templateAfterRender: ( $elem ) => this.hook.doAction( 'wponion_key_value_updated', $elem ),
			onRemove: ( $elem ) => {
				$elem.parent().remove();
				this.hook.doAction( 'wponion_key_value_updated', $elem );
			},
			onLimitReached: () => {
				let $html = jQuery( '<div class="alert alert-warning" role="alert">' + this.option( 'error_msg' ) + '</div>' )
					.hide();
				this.element.find( '.wponion-keyvalue_wrap' ).after( $html );
				this.element.find( 'div.alert' ).fadeIn( function() {
					let $__E = jQuery( this );
					setTimeout( function() {
						$__E.fadeOut( 'slow', function() {
							$__E.remove();
						} );
					}, 1000 );
				} );
			}
		} );
	}
}


