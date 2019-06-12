import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.global_validate = false;
		this.element.find( '.wponion-keyvalue_wrap' ).WPOnionCloner( {
			add_btn: this.element.find( '> .row > .wponion-fieldset > .wponion-keyvalue-action-container  > button[data-wponion-keyvalue-add]' ),
			sortable: {
				items: '.wponion-keyvalue-field',
				handle: '.sortable-handler',
				placeholder: 'wponion-accordion-placeholder',
				start: function( event, ui ) {
					ui.item.css( 'background-color', '#eeee' );
				},
				stop: ( event, ui ) => {
					ui.item.removeAttr( 'style' );
					this.element.trigger( 'change' );
					this.element.trigger( 'wponion_field_updated' );
				}

			},
			limit: ( -1 === this.option( 'limit' ) ) ? null : this.option( 'limit' ),
			clone_elem: '> .row > .wponion-fieldset > .wponion-keyvalue-field',
			remove_btn: '.wponion-keyvalue-field > button[data-wponion-keyvalue-remove]',
			template: this.option( 'html_template' ),
			templateAfterRender: ( $elem ) => {
				this.hook.doAction( 'wponion_key_value_updated', $elem );
				this.element.trigger( 'change' );
				this.element.trigger( 'wponion_field_updated' );
				this.js_validate_elem( this.option( 'js_validate', false ), $elem.find( '> div:last-child' ) );
			},
			onRemove: ( $elem ) => {
				$elem.parent().remove();
				this.element.trigger( 'change' );
				this.element.trigger( 'wponion_field_updated' );
				this.hook.doAction( 'wponion_key_value_updated', $elem );
			},
			onLimitReached: () => {
				if( this.element.find( 'div.alert' ).length === 0 ) {
					this.element.find( '.wponion-keyvalue_wrap' ).after( jQuery( this.option( 'error_msg' ) ).hide() );
					this.element.find( 'div.alert' ).slideDown();
					window.wponion_notice( this.element.find( 'div.alert, div.notice' ) );
				}
			}
		} );
	}

	/**
	 * Handles Javascript Error Placement.
	 * @param err
	 */
	js_error( err ) {
		err.error.appendTo( err.element.parent().parent() );
	}

	/**
	 * Handles Javascript Validation Inputs
	 * @param $args
	 * @param $elem
	 */
	js_validate_elem( $args, $elem ) {
		if( false === window.wponion._.isObject( $args ) ) {
			return false;
		}
		if( true !== window.wponion._.isUndefined( $args.key ) ) {
			$elem.find( '.wponion-keyvalue-field' ).each( function() {
				jQuery( this ).find( '> div' ).eq( 0 ).find( ':input' ).rules( 'add', $args.key );
			} );
		}
		if( true !== window.wponion._.isUndefined( $args.value ) ) {
			$elem.find( '.wponion-keyvalue-field' ).each( function() {
				jQuery( this ).find( '> div' ).eq( 1 ).find( ':input' ).rules( 'add', $args.value );
			} );
		}

		if( true === window.wponion._.isUndefined( $args.key ) && true === window.wponion._.isUndefined( $args.value ) ) {
			$elem.find( ':input' ).each( function() {
				jQuery( this ).rules( 'add', $args );
			} );
		}
	}
}

export default ( ( w ) => w.wponion_register_field( 'key_value', ( $elem ) => new field( $elem ) ) )( window );
