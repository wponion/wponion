import WPOnion_Field from '../core/field';
import is_undefined from 'vsp-js-helper/parts/is_undefined';

export default class extends WPOnion_Field {
	init() {
		this.global_validate = false;
		this.element.find( '.wponion-keyvalue_wrap' ).WPOnionCloner( {
			add_btn: this.element.find( '.wponion-fieldset > .wponion-keyvalue-action-container  > button[data-wponion-keyvalue-add]' ),
			limit: ( -1 === this.option( 'limit' ) ) ? null : this.option( 'limit' ),
			clone_elem: '> .wponion-fieldset > .wponion-keyvalue-field',
			remove_btn: '.wponion-keyvalue-field > button[data-wponion-keyvalue-remove]',
			template: this.option( 'html_template' ),
			templateAfterRender: ( $elem ) => {
				this.hook.doAction( 'wponion_key_value_updated', $elem );
				this.js_validate_elem( this.option( 'js_validate', false ), $elem.find( '> div:last-child' ) );
			},
			onRemove: ( $elem ) => {
				$elem.parent().remove();
				this.hook.doAction( 'wponion_key_value_updated', $elem );
			},
			onLimitReached: () => {
				if( this.element.find( 'div.alert' ).length > 0 ) {

				} else {
					this.element.find( '.wponion-keyvalue_wrap' ).after( jQuery( this.option( 'error_msg' ) ).hide() );
					this.element.find( 'div.alert' ).slideDown();
					wponion_notice( this.element.find( 'div.alert' ) );
				}
			}
		} );
	}

	js_error( err ) {
		err.error.appendTo( err.element.parent().parent() );
	}

	/**
	 *
	 * @param $args
	 * @param $elem
	 */
	js_validate_elem( $args, $elem ) {
		if( true !== is_undefined( $args.key ) ) {
			$elem.find( '.wponion-keyvalue-field' ).each( function() {
				jQuery( this ).find( '> div' ).eq( 0 ).find( ':input' ).rules( 'add', $args.key );
			} );
		}
		if( true !== is_undefined( $args.value ) ) {
			$elem.find( '.wponion-keyvalue-field' ).each( function() {
				jQuery( this ).find( '> div' ).eq( 1 ).find( ':input' ).rules( 'add', $args.value );
			} );
		}

		if( true === is_undefined( $args.key ) && true === is_undefined( $args.value ) ) {
			$elem.find( ':input' ).each( function() {
				jQuery( this ).rules( 'add', $args );
			} );
		}
	}
}


