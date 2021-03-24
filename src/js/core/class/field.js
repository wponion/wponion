import { is_callable, call_user_func_array } from 'vsp-js-helper/index';
import WPOnion_Field_Base from './field-base';

export default class WPOnion_Field extends WPOnion_Field_Base {
	/**
	 * @param $selector
	 * @param $args
	 */
	constructor( $selector, $args = {} ) {
		super( $selector, $args );

		if( 'DIV' === this.element.prop( 'tagName' ) && this.element.hasClass( 'wponion-element' ) ) {
			this.field_debug();
			this.js_validator();
			this.dependency();
			this.maybe_init_subfields();
		}

		this.init();
		this.maybe_add_inited_class();
	}

	/**
	 * Adds Field Inited class
	 */
	maybe_add_inited_class() {
		this.element.addClass( 'wponion-field-inited' );
	}

	/**
	 * Validate if its a nested element and if it is then it triggers field reload.
	 */
	maybe_init_subfields() {
		if( this.element.hasClass( 'wponion-has-nested-fields' ) ) {
			window.wponion_field_reload( this.element );
		}
	}

	init() {
	}

	/**
	 * Handles Field Debug POPUP.
	 */
	field_debug() {
		if( !window.wpo_core.is_debug() ) {
			return;
		}

		if( false !== window.wponion.class.field_debug.get( this.id() ) ) {
			return;
		}

		let $info = this.option( 'debug_info' );

		if( false === window.wponion._.isUndefined( $info ) && false === window.wponion._.isEmpty( $info ) ) {
			window.wponion.class.field_debug.add( this.id(), { 'php': $info, 'javascript': {} } );
		}

		let $found = this.element;

		if( !this.element.hasClass( 'wponion-field-debug' ) ) {
			let $elem = jQuery( 'div.wponion-element[data-wponion-jsid=' + this.id() + ']' );
			$found    = ( $elem.hasClass( 'wponion-field-debug' ) ) ? $elem : $found;
		}

		if( false !== $found ) {
			$found.find( '> .wpo-row > .wponion-field-title > h4' ).tippy( {
				content: window.wpo_core.txt( 'click_to_view_debug_info', 'Click To View Field Debug Info' ),
				arrow: tippy.roundArrow,
				placement: 'bottom',
				theme: 'light',
				animation: 'scale',
				appendTo: this.get_field_parent_by_id( this.element )[ 0 ],
			} );

			$found.find( '> .wpo-row > .wponion-field-title > h4' ).on( 'click', () => {
				let $d          = this.id() + 'debugINFO',
					$notice_txt = `<p class="wponion-field-debug-notice">${window.wpo_core.option( 'debug_notice' )}</p>`,
					$elem       = jQuery( `<div id="${$d}" class="wponion-field-debug-popup"><div id="${$d}" ></div>${$notice_txt}</div>` ),
					$data       = window.wponion.class.field_debug.get( this.id(), {} );

				window.swal.fire( {
					html: $elem,
					showConfirmButton: true,
					confirmButtonText: window.wpo_core.txt( 'get_json_output', 'As JSON' ),
					showCloseButton: false,
					width: '800px',
					didOpen: () => jQuery( '#swal2-content > div > #' + $d ).jsonView( $data )
				} ).then( ( result ) => {
					if( result.value ) {
						$data = JSON.stringify( $data );
						window.swal.fire( {
							width: '600px',
							html: `<textarea style="min-width:550px; min-height:300px">${$data}</textarea>`
						} );
					}
				} );
			} );
		}
	}

	/**
	 * Handles javascript error placement.
	 * @param err
	 */
	js_error( err ) {
		//console.log( this.element, err );
		if( window.wpo_core.jsid( err.element ) === window.wpo_core.jsid( this.element ) ) {
			err.error.appendTo( this.element.find( '.wponion-fieldset' ) );
		}
	}

	/**
	 * Creates An Trigger Hook To Handle JS Error Placement
	 * @use constructor
	 * @param element
	 */
	js_error_handler( element = this.element ) {
		element.on( 'wponion_js_validation_message', '> .wpo-row > .wponion-fieldset :input', ( e, data ) => this.js_error( data ) );
	}

	/**
	 * Checks if validation is required for current field.
	 */
	js_validator() {
		if( false === window.wponion._.isUndefined( this.option( 'js_validate', false ) ) ) {
			this.js_error_handler();
			if( false !== this.option( 'js_validate', false ) ) {
				this.maybe_js_validate_elem( this.option( 'js_validate', false ), this.element );
			}
		}
	}

	/**
	 * Checks if current page has form and enable validations.
	 * @param $args
	 * @param $elem
	 */
	maybe_js_validate_elem( $args, $elem ) {
		try {
			$elem.find( ':input' ).each( function() {
				jQuery( this ).rules( 'add', $args );
			} );
		} catch( e ) {
			console.log( e );
		}
	}

	dependency() {
		if( this.element.hasClass( 'wponion-has-dependency' ) ) {
			let $wordpress_fileld = window.wponion.hooks.applyFilters( 'wponion_dependency_global_fields_map', {
				'post_format': 'input[name=post_format]',
				'page_template': 'select#page_template',
				'menu_order': 'input#menu_order',
				'parent_id': 'select#parent_id',
				'post_status': 'select#post_status',
				'visibility': 'input[name=visibility]'
			} );

			this.element.on( 'wponion_add_dependency', ( event, config ) => {
				let $dep                = this.option( 'dependency' ),
					$all_rules_instance = {},
					$rules_instance     = false,
					$settings           = ( !window.wponion._.isUndefined( $dep.settings ) ) ? $dep.settings : {},
					$onEnable           = ( !window.wponion._.isUndefined( $settings.onEnable ) ) ? $settings.onEnable : false,
					$onDisable          = ( !window.wponion._.isUndefined( $settings.onDisable ) ) ? $settings.onDisable : false;
				$settings               = ( !window.wponion._.isObject( $dep.settings ) ) ? {} : $settings;
				$settings.onEnable      = ( event, subject ) => {
					subject.find( ':input' ).removeClass( 'wponion-dependent' );
					if( is_callable( $onEnable ) ) {
						call_user_func_array( $onEnable, [ event, subject ] );
					}
				};
				$settings.onDisable     = ( event, subject ) => {
					subject.find( ':input' ).addClass( 'wponion-dependent' );
					if( is_callable( $onDisable ) ) {
						call_user_func_array( $onDisable, [ event, subject ] );
					}
				};
				$settings               = this.handle_args( $settings, 'dependency_settings' );

				if( !window.wponion._.isUndefined( $dep.rules ) ) {
					for( let $key in $dep.rules ) {
						if( $dep.rules.hasOwnProperty( $key ) ) {
							let $rules                  = {};
							$all_rules_instance[ $key ] = {};
							for( let $i in $dep.rules[ $key ] ) {
								if( $dep.rules[ $key ].hasOwnProperty( $i ) ) {
									let $field_id = ( !window.wponion._.isUndefined( $wordpress_fileld[ $i ] ) ) ? $wordpress_fileld[ $i ] : '[data-depend-id="' + $i + '"]';
									if( false !== config.nestable ) {
										let $INPUT = config.parent.find( $field_id );
										if( $INPUT.length > 0 ) {
											$field_id = '[data-wponion-jsid="' + window.wpo_core.jsid( $INPUT ) + '"]:input';
										}
									}
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

				window.wponion.class.field_debug.add( this.id(), {
					'Dependency': {
						'Rules': $all_rules_instance,
						'Nested': config.nestable,
					}
				} );
			} );
		}
	}

	/**
	 * Inits A Single Field Type
	 * @uses init_single_field.
	 * @param $elem
	 * @param $type
	 */
	init_field( $elem, $type ) {
		if( !window.wponion.helper.is_jquery( $elem ) ) {
			$elem = this.element.find( $elem );
		}

		if( $elem.length > 1 ) {
			$elem.each( ( i, e ) => window.wponion_init_field( $type, jQuery( e ) ) );
		} else if( $elem.length === 1 ) {
			window.wponion_init_field( $type, $elem );
		}
	}
}
