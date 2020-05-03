import WPOnion_Field from '../../class/field';
import { call_user_func_array, is_callable } from "vsp-js-helper/index";

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $wordpress_fileld = window.wponion.hooks.applyFilters( 'wponion_dependency_global_fields_map', {
			'post_format': 'input[name=post_format]',
			'page_template': 'select#page_template',
			'menu_order': 'input#menu_order',
			'parent_id': 'select#parent_id',
			'post_status': 'select#post_status',
			'visibility': 'input[name=visibility]'
		} );

		let $dep                = this.option( 'dependency' ),
			$all_rules_instance = {},
			$rules_instance     = false,
			$settings           = ( !window.wponion._.isUndefined( $dep.settings ) ) ? $dep.settings : {},
			$onEnable           = ( !window.wponion._.isUndefined( $settings.onEnable ) ) ? $settings.onEnable : false,
			$onDisable          = ( !window.wponion._.isUndefined( $settings.onDisable ) ) ? $settings.onDisable : false;

		$settings.onEnable = ( event, subject ) => {
			if( is_callable( $onEnable ) ) {
				call_user_func_array( $onEnable, [ event, subject ] );
			}
		};

		$settings.onDisable = ( event, subject ) => {
			if( is_callable( $onDisable ) ) {
				call_user_func_array( $onDisable, [ event, subject ] );
			}
		};

		$settings = this.handle_args( $settings, 'dependency_settings' );

		if( !window.wponion._.isUndefined( $dep.rules ) ) {
			for( let $key in $dep.rules ) {
				if( $dep.rules.hasOwnProperty( $key ) ) {
					let $rules                  = {};
					$all_rules_instance[ $key ] = {};
					for( let $i in $dep.rules[ $key ] ) {
						if( $dep.rules[ $key ].hasOwnProperty( $i ) ) {
							let $field_id                            = ( !window.wponion._.isUndefined( $wordpress_fileld[ $i ] ) ) ? $wordpress_fileld[ $i ] : '[data-depend-id="' + $i + '"]';
							$rules[ $field_id ]                      = $dep.rules[ $key ][ $i ];
							$all_rules_instance[ $key ][ $field_id ] = $dep.rules[ $key ][ $i ];
						}
					}

					if( false === $rules_instance ) {
						$rules_instance = this.element.WPOnion_dependsOn( $rules, $settings );
					} else {
						$rules_instance.or( $rules );
					}
				}
			}
		}

		window.wponion.class.field_debug.add( this.id(), { 'Dependency': { 'Rules': $all_rules_instance, } } );
	}
}
