import { parse_args } from 'vsp-js-helper/index';

export default function() {
	/**
	 * Triggers Theme Init.
	 * @param $element
	 * @returns {{addAction, removeAction, applyFilters, removeFilter, addFilter, doAction}}
	 */
	window.wponion_init_theme = ( $element ) => {
		let $args = parse_args( window.wponion.class.module_base.arg( $element, false ), {
			theme: '',
			module: '',
			unique: ','
		} );

		if( !window.wponion._.isEmpty( $args.theme ) ) {
			window.wponion.hooks.doAction( 'wponion_before_theme_init', $element, $args.module, $args.unique, $args.theme );

			window.wponion.hooks.doAction( `wponion_before_${$args.theme}_theme_init`, $element, $args.module, $args.unique, $args.theme );
			window.wponion.hooks.doAction( `wponion_${$args.theme}_theme_init`, $element, $args.module, $args.unique, $args.theme );
			window.wponion.hooks.doAction( `wponion_after_${$args.theme}_theme_init`, $element, $args.module, $args.unique, $args.theme );

			window.wponion.hooks.doAction( 'wponion_after_theme_init', $element, $args.module, $args.unique, $args.theme );
		} else {
			window.wponion.hooks.doAction( 'wponion_theme_init', $element, $args.module, $args.unique, $args.theme );
		}
	};

	/**
	 * Registers A Theme With WPOnion
	 * @param $theme
	 * @param $callback
	 * @return {*}
	 */
	window.wponion_register_theme = ( $theme, $callback ) => window.wponion.hooks.addAction( `wponion_${$theme}_theme_init`, 'wponion_core', $callback );

	/**
	 * Function Used outside of WPOnion To Create
	 * @param $init_method
	 * @param $methods
	 * @returns {{init: *, new(): $class, prototype: $class}}
	 */
	window.wponion_create_theme_class = ( $init_method, $methods = false ) => {
		let $org_class        = window.wponion.class.theme_base,
			$class            = class extends $org_class {
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
}
