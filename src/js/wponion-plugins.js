/**
 * WPOnion Field Handler.
 * @param selector
 * @param context
 * @returns {*}
 */
var $wponion_field = function ( selector, context ) {
	return $wponion_field.fn.init( selector, context );
};

/**
 * WPOnion Field Functions
 * @type {{constructor: $wponion_field, init: $wponion_field.init}}
 */
$wponion_field.fn = $wponion_field.prototype = {
	constructor: $wponion_field,
	init: function ( selector, context ) {
		if ( !selector.jQuery ) {
			selector = jQuery( selector );
		}
		this.elem   = selector;
		this.contxt = context;
		return this;
	}
};


/**
 * WPOnion Theme Handler & Functions.
 * @param selector
 * @param context
 */
var $wponion_theme = function ( selector, context ) {
	return $wponion_theme.fn.init( selector, context );
};

/**
 * WPOnion Theme Handler & Functions.
 * @type {{constructor: $wponion_theme, init: $wponion_theme.init}}
 */
$wponion_theme.fn = $wponion_theme.prototype = {
	constructor: $wponion_theme,
	init: function ( selector, context ) {
		if ( !selector.jQuery ) {
			selector = jQuery( selector );
		}
		this.elem   = selector;
		this.contxt = context;
		return this;
	}
};

/**
 * Base Gloabl WPOnion Functions & Vars.
 * @type {{}}
 */
var $wponion = {
	/**
	 * Returns An Prototype instance of field.
	 * @returns {{constructor: $wponion_field, init: $wponion_field.init}}
	 * @private
	 */
	_field: function () {
		return $wponion_field
	},

	/**
	 * Returns An Prototype instance of theme
	 * @returns {{constructor: $wponion_theme, init: $wponion_theme.init}}
	 * @private
	 */
	_theme: function () {
		return $wponion_theme
	},

	/**
	 * Returns An Instance of field
	 * @param selector
	 * @param context
	 * @returns {*}
	 */
	field: function ( selector, context ) {
		return $wponion_field( selector, context );
	},

	/**
	 * Returns An Instance of theme
	 * @param selector
	 * @param context
	 * @returns {*}
	 */
	theme: function ( selector, context ) {
		return $wponion_field( selector, context );
	},
};

/**
 * Simple JS Addons.
 */
//@codekit-append ../../node_modules/sweetalert2/dist/sweetalert2.all.js
//@codekit-append ../vendors/json-view/json-view.js
//@codekit-append ../vendors/wp-js-hooks.js
//@codekit-append ../vendors/jquery-interdependencies/jquery-interdependencies.js
//@codekit-append ../../node_modules/jquery.actual/jquery.actual.js
//@codekit-append ../../node_modules/tippy.js/dist/tippy.all.js
//@codekit-append ../../node_modules/overlayscrollbars/js/jquery.overlayScrollbars.js
//@codekit-append ../../node_modules/bootstrap-maxlength/src/bootstrap-maxlength.js