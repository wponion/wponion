/**
 * Returns WPOnionElement Instance.
 * @returns {*}
 */
let wponion_elem = function () {
	return wponion.elem;
};

/**
 * WPOnion Core Functions.
 */
( function (window, document, $, wp, wponion, wphooks) {
	/**
	 * WPOnion Core Element To Work With.
	 * @type {*|HTMLElement}
	 */
	wponion.elem = $( '.wponion-framework' );

	wponion.settings_args = null;

	/**
	 * Handles Framework ToolTip Functions.
	 * @constructor
	 */
	wponion.tooltip = ( ($elem) => {
		if ( $elem.length > 0 ) {
			return $elem.each( function () {
				let $data = wponion.field_js_args( $( this ).parent().parent(), {} ),
					$settings = {
						arrow: true,
						arrowType: 'sharp',
					};

				if ( $data[ 'field_help' ] !== undefined ) {
					$settings = $data[ 'field_help' ];
				}
				tippy( $( this )[ 0 ], $settings );
			} );
		}
	} );

	/**
	 * Handles Fields ToolTip.
	 * @type {function(*)}
	 */
	wponion.tooltip_field = ( ($elem) => {
		if ( $elem.length > 0 ) {
			return $elem.each( function () {
				let $data = wponion.field_js_args( $( this ), {} );
				let $fieldID = $( this ).data( 'field-jsid' );
				if ( $data[ $fieldID + 'tooltip' ] !== undefined ) {
					tippy( $( this )[ 0 ], $data[ $fieldID + 'tooltip' ] );
				}
			} );
		}
	} );

	wponion.settings = ( ($key, $default) => {
		if ( wponion.settings_args[ $key ] !== undefined ) {
			return wponion.settings_args[ $key ];
		}
		return $default;
	} );

	/**
	 * Handles Field Dependency.
	 * @type {function()}
	 */
	wponion.dependency = ( ($is_sub) => {
		if ( wponion.elem.find( '.wponion-has-dependency' ).length > 0 ) {
			let $app = {


				/**
				 * Inits dependency framework.
				 * @type {function()}
				 */
				init: ( () => {
					$app.ruleset = $.deps.createRuleset();

					let $config = {
						show: function ($el) {
							$el.removeClass( 'hidden' );
						},
						hide: function ($el) {
							$el.addClass( 'hidden' );
						},
						log: wponion.settings( 'debug' ),
						checkTargets: false,
					};

					if ( $is_sub !== undefined ) {
						$app.dep_sub();
					} else {
						$app.dep_root();
					}

					$.deps.enable( wponion.elem, $app.ruleset, $config );
				} ),

				dep_root: ( () => {
					wponion_elem().find( '.wponion-has-dependency' ).each( function () {
						let $elem = $( this ),
							$dep_data = wponion.field_js_args( $elem, {} ),
							$_rules = $app.ruleset;

						if ( $dep_data[ 'dependency' ] !== undefined ) {
							let $controller = $dep_data[ 'dependency' ][ 'controller' ],
								$condition = $dep_data[ 'dependency' ][ 'condition' ],
								$value = $dep_data[ 'dependency' ][ 'value' ];

							$.each( $controller, ( ($i, $el) => {
								let $_value = $value[ $i ] || '',
									$_condition = $condition[ $i ] || $condition[ 0 ];
								console.log( $el );
								console.log( $controller );
								console.log( $_value );
								let $_ruless = $_rules.createRule( '[data-depend-id="' + $el + '"]', $_condition, $_value );
								$_ruless.include( $elem );
							} ) );
						}
					} );
				} )
			};

			$app.init();
		}
	} );

	/**
	 * Triggers A Hook To Reload All Fields.
	 * @type {function()}
	 */
	wponion.reload = ( () => {
		wponion.dependency();
		wponion.tooltip( wponion.elem.find( ' .wponion-help' ) );
		wponion.tooltip_field( wponion.elem.find( '.wponion-field-tooltip' ) );
		wphooks.doAction( "wponion_reload_fields" );
	} );

	/**
	 * Checks for Document / Window for the elemnts JS settings. if exists it returns or default will be returned.
	 * @type {function(*, *)}
	 */
	wponion.field_js_args = ( ($elem, $default) => {
		let $js_id = $elem.attr( "data-wponion-jsid" );
		return wponion.window_vars( $js_id, $default );
	} );

	/**
	 * Checks And Returns Variable From Window.
	 * @type {function(*=, *)}
	 */
	wponion.window_vars = ( ($var_id, $default) => {
		if ( $var_id ) {
			if ( typeof window[ $var_id ] === 'undefined' || window[ $var_id ] === undefined ) {
				return $default;
			}
			return window[ $var_id ];
		}

		return $default;
	} );

	/**
	 * Returns URL Query String as object
	 * @example http://example.com?q1=22&q2=49 turns into {q1:22,q2:49}
	 * @param str
	 * @returns {any}
	 */
	wponion.url_param = function (str) {
		return ( str || document.location.search ).replace( /(^\?)/, '' ).split( "&" ).map( function (n) {
			return n = n.split( "=" ), this[ n[ 0 ] ] = n[ 1 ], this
		}.bind( {} ) )[ 0 ];
	};


	/**
	 * Below Code Runs On Document Ready
	 */
	$( document ).on( "ready", ( () => {
	} ) );

	/**
	 * Below Code Runs On Window.load
	 */
	$( window ).on( "load", ( () => {
		wponion.settings_args = wponion.window_vars( 'wponion_core', {} );
		wponion.reload();
		wphooks.doAction( 'wponion_init' );
	} ) );

	/**
	 * Hook Fired To Make sure all fields are using it.
	 */
	wphooks.doAction( "wponion_loaded" );

} )( window, document, jQuery, wp, wponion, wp.hooks );
