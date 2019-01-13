import WPOnion_Dependency from '../core/dependency';
import WPOnion_Validation from '../core/validation';

export default ( ( window ) => {
	jQuery( window ).on( 'load', () => {
		/**
		 * Global Variable
		 * window.wponion.vc / window.wponion_vc
		 * @type {{fields: {abstract: ({new(*=, *=, *=): {param_name: *, save(*=, *): (undefined), vc_save(*=, *=): boolean, simple_array(*): *, key_value_array(*=): string, key_value_multi_array(*=): string, sorter_values(*=): *, encode_content(*=): *, is_vc_param_elem(*=): boolean, init_single_field: {(*=, *=): void, (*=, *=): void}, init(), js_error(*): void, js_error_handler(*=): void, js_validator(): void, maybe_js_validate_elem(*=, *=): void, js_validate_elem(*=, *): void, handle_args(*=, *=): (*|$data), field_debug(): (undefined), options(): *, option(*=, *=): *, id(): *, module(): *, plugin_id(): *, ajax(*=, *=): *, init_field(*=, *=): void, reload(): *, set_args(*): *, get_field_parent_by_id(*=): (*|jQuery|HTMLElement), module_init(), set_element(*=): *, set_contxt(*): *, hook: *, element: *, contxt: *}, new(*=, *=, *=): {param_name: *, save(*=, *): (undefined), vc_save(*=, *=): boolean, simple_array(*): *, key_value_array(*=): string, key_value_multi_array(*=): string, sorter_values(*=): *, encode_content(*=): *, is_vc_param_elem(*=): boolean, init_single_field: {(*=, *=): void, (*=, *=): void}, init(), js_error(*): void, js_error_handler(*=): void, js_validator(): void, maybe_js_validate_elem(*=, *=): void, js_validate_elem(*=, *): void, handle_args(*=, *=): (*|$data), field_debug(): (undefined), options(): *, option(*=, *=): *, id(): *, module(): *, plugin_id(): *, ajax(*=, *=): *, init_field(*=, *=): void, reload(): *, set_args(*): *, get_field_parent_by_id(*=): (*|jQuery|HTMLElement), module_init(), set_element(*=): *, set_contxt(*): *, hook: *, element: *, contxt: *}, new(*=, *=): {param_name: *, save(*=, *): (undefined), vc_save(*=, *=): boolean, simple_array(*): *, key_value_array(*=): string, key_value_multi_array(*=): string, sorter_values(*=): *, encode_content(*=): *, is_vc_param_elem(*=): boolean, init_single_field: {(*=, *=): void, (*=, *=): void}, init(), js_error(*): void, js_error_handler(*=): void, js_validator(): void, maybe_js_validate_elem(*=, *=): void, js_validate_elem(*=, *): void, handle_args(*=, *=): (*|$data), field_debug(): (undefined), options(): *, option(*=, *=): *, id(): *, module(): *, plugin_id(): *, ajax(*=, *=): *, init_field(*=, *=): void, reload(): *, set_args(*): *, get_field_parent_by_id(*=): (*|jQuery|HTMLElement), module_init(), set_element(*=): *, set_contxt(*): *, hook: *, element: *, contxt: *}, prototype: {param_name: *, save(*=, *): (undefined), vc_save(*=, *=): boolean, simple_array(*): *, key_value_array(*=): string, key_value_multi_array(*=): string, sorter_values(*=): *, encode_content(*=): *, is_vc_param_elem(*=): boolean, init_single_field: {(*=, *=): void, (*=, *=): void}, init(), js_error(*): void, js_error_handler(*=): void, js_validator(): void, maybe_js_validate_elem(*=, *=): void, js_validate_elem(*=, *): void, handle_args(*=, *=): (*|$data), field_debug(): (undefined), options(): *, option(*=, *=): *, id(): *, module(): *, plugin_id(): *, ajax(*=, *=): *, init_field(*=, *=): void, reload(): *, set_args(*): *, get_field_parent_by_id(*=): (*|jQuery|HTMLElement), module_init(), set_element(*=): *, set_contxt(*): *, hook: *, element: *, contxt: *}}|*)}}}
		 */
		window.wponion.vc = window.wponion_vc = {
			fields: {
				abstract: require( './visual-composer/field' ).default,
			},
		};

		/**
		 * Simple Function To Init WPonion VC Module.
		 */
		window.wponion_vc_init = () => {
			let $element = jQuery( '.wponion-framework.wponion-module-vc' );

			if( $element.length > 0 ) {
				$element.each( function() {
					window.wponion_field( jQuery( this ) ).reload();
					window.wponion_vc_field( jQuery( this ) ).reload();
				} );

				/**
				 * Handles WPOnion VC Field Dependency.
				 */
				new WPOnion_Dependency( $element, {}, {
					log: false,
					show: ( el ) => {
						el.parent().parent().parent().slideDown();
						el.find( ':input' ).removeClass( 'wponion-dependent' );
					},
					hide: ( el ) => {
						el.parent().parent().parent().slideUp();
						el.find( ':input' ).addClass( 'wponion-dependent' );
					},
				} );

				/**
				 * Handles WPOnion VC Field Validations.
				 */
				new WPOnion_Validation( jQuery( '.wpb_edit_form_elements' ) );
			}
		};

		/**
		 * WPonion VC Field Class Insstance Creator.
		 * @param $elem
		 * @param $contxt
		 * @returns {window.wponion.vc.fields.abstract}
		 */
		window.wponion_vc_field = ( $elem, $contxt = {} ) => new window.wponion.vc.fields.abstract( $elem, $contxt );

		/**
		 * Function Used outside of WPOnion To Create VC Field
		 * @param $init_method
		 * @param $methods
		 * @returns {{init: *, new(): $class, prototype: $class}}
		 */
		window.wponion_create_vc_field = ( $init_method, $methods = false ) => {
			let $org_class = require( './visual-composer/field' ).default;
			let $class     = class extends $org_class {
			};

			$class.prototype.init = $init_method;

			if( window.wponion._.isObject( $methods ) ) {
				for( let $key in $methods ) {
					if( $methods.hasOwnProperty( $key ) ) {
						$class.prototype[ $key ] = $methods[ $key ];
					}
				}
			}
			return $class;
		};

		/**
		 * Loads All Required Fields.
		 */
		require( './visual-composer/single-value' );
		require( './visual-composer/all-fields' );
		require( './visual-composer/select' );
		require( './visual-composer/checkbox-radio' );
	} );
} )( window );
