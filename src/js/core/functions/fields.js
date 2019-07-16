export default function() {
	/**
	 * Returns A Abstract Class Instance.
	 * @param $elem
	 * @param $args
	 * @return {window.wponion.class.field}
	 */
	window.wponion_field = ( $elem, $args = {} ) => new window.wponion.class.field( $elem, $args );

	/**
	 * Function Used outside of WPOnion To Create
	 * @param $init_method
	 * @param $methods
	 * @returns {{init: *, new(): $class, prototype: $class}}
	 */
	window.wponion_create_field_class = ( $init_method, $methods = false ) => {
		let $org_class = window.wponion.class.field,
			$class     = class extends $org_class {
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
	 * Registers With A Field Callback Hook.
	 * @param $type
	 * @param $callback
	 */
	window.wponion_register_field = ( $type, $callback ) => {
		window.wponion.hooks.addAction( `wponion_init_field_${$type}`, 'wponion_core', ( $elem ) => {
			try {
				new $callback( $elem, {} );
			} catch( e ) {
				console.error( arguments, ' \n' + e + '  \nFor : wponion_init_field_' + $type );
			}
		} );
	};

	/**
	 * @param $field_type
	 * @param $argument
	 * @param $log_err
	 */
	window.wponion_init_field = ( $field_type, $argument, $log_err = true ) => {
		if( window.wponion.hooks.hasAction( 'wponion_init_field_' + $field_type ) ) {
			window.wponion.hooks.doAction( 'wponion_init_field_' + $field_type, $argument );
		} else {
			window.wponion_field( $argument );
			if( window.wpo_core.is_debug() && true === $log_err ) {
				console.debug( `WPOnion Field Type : ${$field_type} Init Function Not Found`, `\nAction Used : wponion_init_field_${$field_type}` );
			}
		}
	};

	/**
	 * @param $element
	 */
	window.wponion_field_reload_all = function( $element ) {
		window.wponion_field_reload( $element );
		window.wponion_field_reload_global( $element );
	};

	/**
	 * Reloads / Inits Local Fields.
	 * @param $elem
	 */
	window.wponion_field_reload = function( $elem ) {
		$elem = $elem || jQuery( '.wponion-framework' );
		window.wponion.hooks.doAction( 'wponion_before_fields_reload', $elem );
		window.wponion_get_fields( $elem, '.wponion-element[data-wponion-field-type]' ).each( function() {
			if( !jQuery( this ).hasClass( 'wponion-field-inited' ) ) {
				window.wponion_init_field( jQuery( this ).data( 'wponion-field-type' ), jQuery( this ) );
			}
		} );
		window.wponion.hooks.doAction( 'wponion_after_fields_reload', $elem );
	};

	/**
	 * Reloads / Inits Global Fields.
	 * @param $element Element To Find
	 */
	window.wponion_field_reload_global = function( $element ) {
		$element              = $element || jQuery( 'body' );
		let $element_to_check = {
			'input[data-wponion-inputmask]': 'inputmask',
			'.select2': 'select2',
			'.chosen': 'chosen',
			'.selectize': 'selectize',
			'.wponion-field-tooltip': 'tooltip',
			'.wponion-help': 'tooltip',
			'[wponion-help]': 'tooltip',
			'[wponion-img-popup]': 'image_popup',
		};

		for( let $key in $element_to_check ) {
			if( $element_to_check.hasOwnProperty( $key ) && $element.find( $key ).length > 0 ) {
				$element.find( $key ).each( function() {
					window.wponion_init_field( $element_to_check[ $key ], jQuery( this ) );
				} );
			}
		}
	};
}
