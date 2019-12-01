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

		/*if( false !== window.wponion.class.field_debug.get( this.id() ) ) {
			return;
		}*/

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
			$found.find( '> .row > .wponion-field-title > h4' ).tippy( {
				content: window.wpo_core.txt( 'click_to_view_debug_info', 'Click To View Field Debug Info' ),
				arrow: true,
				arrowType: 'round',
				placement: 'bottom',
				theme: 'light',
				animation: 'scale',
				appendTo: this.get_field_parent_by_id( this.element )[ 0 ],
			} );

			$found.find( '> .row > .wponion-field-title > h4' ).on( 'click', () => {
				let $d          = this.id() + 'debugINFO',
					$notice_txt = `<p class="wponion-field-debug-notice">${window.wpo_core.option( 'debug_notice' )}</p>`,
					$elem       = jQuery( `<div id="${$d}" class="wponion-field-debug-popup"><div id="${$d}" ></div>${$notice_txt}</div>` ),
					$data       = window.wponion.class.field_debug.get( this.id() );
				console.log( $data );
				window.swal.fire( {
					html: $elem,
					showConfirmButton: true,
					confirmButtonText: window.wpo_core.txt( 'get_json_output', 'As JSON' ),
					showCloseButton: false,
					width: '800px',
					onOpen: () => jQuery( '#swal2-content > div > #' + $d ).jsonView( $data )
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
		element.on( 'wponion_js_validation_message', '> .row > .wponion-fieldset :input', ( e, data ) => this.js_error( data ) );
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
			this.element.on( 'wponion_add_dependency', ( event, rules, config ) => {
				let $dep = this.option( 'dependency' );
				for( let $key in $dep ) {
					if( $dep.hasOwnProperty( $key ) ) {
						let $controller = $dep[ $key ].controller,
							$condition  = $dep[ $key ].condition,
							$value      = $dep[ $key ].value,
							$field      = '[data-depend-id="' + $controller + '"]';

						if( false !== config.nestable ) {
							let $INPUT = config.parent.find( $field );
							if( $INPUT.length > 0 ) {
								$field = '[data-wponion-jsid="' + window.wpo_core.jsid( $INPUT ) + '"]:input';
							}
						}
						rules.createRule( $field, $condition, $value ).include( this.element );
					}
				}
				//console.log( this.id(), this.option( 'dependency' ), this.element );
				window.wponion.class.field_debug.add( this.id(), {
					'Dependency': $dep,
					'Nestable Dependency': config.nestable
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
