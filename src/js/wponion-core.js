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

	/**
	 * Handles Framework ToolTip Functions.
	 * @constructor
	 */
	wponion.tooltip = ( ($elem) => {
		if ( 1 >= $elem.length ) {
			return $elem.each( function () {
				$( this ).tooltip();
			} );
		}
	} );

	/**
	 * Triggers A Hook To Reload All Fields.
	 * @type {function()}
	 */
	wponion.reload = ( () => {
		wponion.tooltip( wponion.elem.find( '.wponion-help' ) );
		wphooks.doAction( "wponion_reload_fields" );
		wponion.elem.trigger( 'reload' );
	} );

	/**
	 * Checks for Document / Window for the elemnts JS settings. if exists it returns or default will be returned.
	 * @type {function(*, *)}
	 */
	wponion.field_js_args = ( ($elem, $default) => {
		let $js_id = $elem.attr( "data-wponion-jsid" );
		if ( $js_id ) {
			if ( typeof window[ $js_id ] === undefined || window[ $js_id ] === undefined ) {
				return $default;
			}
			return window[ $js_id ];
		}

		return $default;
	} );

	/**
	 * Below Code Runs On Document Ready
	 */
	$( document ).on( "ready", ( () => {
	} ) );

	/**
	 * Below Code Runs On Window.load
	 */
	$( window ).on( "load", ( () => {
		wponion.reload();
		wphooks.doAction( 'wponion_init' );
	} ) );

	wphooks.doAction( "wponion_loaded" );

} )( window, document, jQuery, wp, wponion, wp.hooks );
