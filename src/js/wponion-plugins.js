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
	/**
	 * Base Constructor.
	 */
	constructor: $wponion_field,

	/**
	 * Inits Class.
	 * @param selector
	 * @param context
	 * @returns {$wponion_field}
	 */
	init: function ( selector, context ) {
		if ( !selector.jQuery ) {
			selector = jQuery( selector );
		}
		this.elem   = selector;
		this.contxt = context;
		this._args  = false;
		return this;
	},

	/**
	 * Creates A New instance for the given field array.
	 * @param $elem
	 * @param $callback
	 */
	init_field: function ( $elem, $callback ) {
		if ( !$elem.jQuery ) {
			$elem = this.elem.find( $elem );
		}
		$elem.each( function () {
			if ( $wponion_field.fn[ $callback ] !== undefined ) {
				var $_data = $wponion_field( jQuery( this ) );
				$_data[ 'handle_callback' ]( $callback );
			}
		} )
	},

	/**
	 * Handles Instance Callback when created using init_field.
	 * @param $callback
	 */
	handle_callback: function ( $callback ) {
		if ( this.elem.length > 0 ) {
			this[ $callback ]();
		}
	},

	/**
	 * Returns Fields Args.
	 * @returns {*}
	 */
	args: function () {
		if ( this._args === false ) {
			this._args = $wponion.field_args( this.elem, {} );
		}
		return this._args;

	},

	/**
	 * Checks and returns a array key.
	 * @param $key
	 * @param $default
	 * @returns {*}
	 */
	arg: function ( $key, $default ) {
		$default  = $default || {};
		var $args = this.args();
		if ( $args[ $key ] !== undefined ) {
			return $args[ $key ];
		}
		return $default;
	},

	/**
	 * Returns Module Details.
	 * @returns {*}
	 */
	module: function () {
		var $args = this.args();
		if ( $args[ 'module' ] !== undefined ) {
			return $args[ 'module' ];
		}
		return false;
	},

	/**
	 * Returns Plugin ID For the current field.
	 * @returns {*}
	 */
	plugin_id: function () {
		var $args = this.args();
		if ( $args[ 'plugin_id' ] !== undefined ) {
			return $args[ 'plugin_id' ];
		}
		return false;
	},

	/**
	 * Handles Ajax Requests.
	 * @param $action
	 * @param $data
	 * @returns {*}
	 */
	ajax: function ( $action, $data ) {
		var $ajaxKEY         = $wponion.settings( 'ajax_action_key' );
		var $default         = {
			plugin_id: this.plugin_id(),
			module: this.module(),
		};
		$default[ $ajaxKEY ] = $action;

		var $data = $wponion.array_merge( {
			data: $default
		}, $data );
		return $wponion.ajax( $data );
	},
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
	},
	args: function () {
		return $wponion.field_args( this.elem, {} );
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