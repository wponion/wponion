'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Stores Global Debug Info.
 * @type {null}
 */
$wponion.debug_info = null;

/**
 * Stores Field Debug Info.
 * @type {null}
 */
$wponion.field_debug_info = null;

/**
 * Stores Global Settings Args.
 * @type {null}
 */
$wponion.settings_args = null;

/**
 * Stores All Global Translation String.
 * @type {null}
 */
$wponion.text = null;

/**
 * Creates A Instance of Swal Tost.
 */
$wponion.tost = swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	customClass: 'wpsweatalert2',
	onOpen: function onOpen() {
		var $height = parseInt(jQuery("#wpadminbar").actual('height')) + 3;
		jQuery("div.wpsweatalert2").parent().css('top', $height + 'px');
	},
	timer: 4000
});

/**
 * Returns Field JS ID
 * @type {function(*)}
 */
$wponion.field_js_id = function ($elem) {
	return $elem.attr('data-wponion-jsid');
};

/**
 * Checks and returns variable from window object.
 * @type {function(*=, *=)}
 */
$wponion.js_args = function ($var_id, $default) {
	$default = $default || {};
	if ($var_id) {
		if (typeof window[$var_id] === 'undefined' || window[$var_id] === undefined) {
			return $default;
		}
		return window[$var_id];
	}

	return $default;
};

/**
 * Checks And Returns Field Args.
 * @type {function(*=, *=)}
 */
$wponion.field_args = function ($elem, $default) {
	$default = $default || {};
	return JSON.parse(JSON.stringify($wponion.js_args($wponion.field_js_id($elem), $default)));
};

/**
 * Returns URL String into a object
 * @example http://example.com?q1=22&q2=49 turns into
 * { q1 : 22 , q2 : 49 }
 * @type {function(*=)}
 */
$wponion.url_to_object = function ($url) {
	return ($url || document.location.search).replace(/(^\?)/, '').split("&").map(function (n) {
		return n = n.split("="), this[n[0]] = n[1], this;
	}.bind({}))[0];
};

/**
 * Chceks and returns global translation string.
 * @type {function(*, *=)}
 */
$wponion.txt = function ($key, $default) {
	$default = $default || 'string_default_not_found';
	return $wponion.text[$key] !== undefined ? $wponion.text[$key] : $default;
};

/**
 * Handles Loading Screen.
 * @type {function(*)}
 */
$wponion.loading_screen = function ($elem) {
	$elem.find('.wponion-page-loader').fadeOut('slow');
	return $wponion;
};

/**
 * Handles Global Debug View.
 * @type {function()}
 */
$wponion.global_debug_view = function () {
	var $handle = jQuery("a.wponion-global-debug-handle");

	if ($wponion.debug_info === null) {
		if ($handle.length > 0) {
			var $defined_vars = $wponion.js_args('wponion_defined_vars'),
			    $json = {};
			jQuery.each($defined_vars, function ($i, $el) {
				$json[$el] = $wponion.js_args($el);
			});
			$wponion.debug_info = $json;
		}
	}

	$handle.on('click', function (e) {
		e.preventDefault();
		var $debug_popup = swal({
			title: $wponion.txt('global_json_output', "Global WPOnion Debug Data"),
			html: jQuery('#wponiondebuginfopopup > div'),
			showConfirmButton: true,
			confirmButtonText: $wponion.txt('get_json_output', 'Get JSON Output'),
			showCloseButton: false,
			animation: false,
			width: '800px',
			onBeforeOpen: function onBeforeOpen() {
				swal.enableLoading();
			},

			onOpen: function onOpen() {
				jQuery('#swal2-content #wponion-global-debug-content').jsonView($wponion.debug_info).overlayScrollbars({
					className: "os-theme-dark",
					resize: "vertical"
				});
				swal.disableLoading();
			}
		}).then(function (result) {
			if (result.value) {
				return swal({
					width: '600px',
					html: '<textarea style="min-width:550px; min-height:300px">' + JSON.stringify($wponion.debug_info) + '</textarea>'
				});
			}
		});
	});
	return $wponion;
};

/**
 * Checks and Retrives Values from $wponion.settings
 * @type {function(*, *=)}
 */
$wponion.settings = function ($key, $default) {
	$default = $default || {};
	if ($wponion.settings_args[$key] !== undefined) {
		return $wponion.settings_args[$key];
	}
	return $default;
};

/**
 * Checks if current instance is debug.
 * @returns {*}
 */
$wponion.is_debug = function () {
	return $wponion.settings('debug');
};

/**
 * Gather All Field JS Codes.
 * @private
 */
$wponion.__field_debug_info = function () {
	if ($wponion.is_debug()) {
		if ($wponion.field_debug_info === null) {
			var $defined_vars = $wponion.js_args('wponion_defined_vars'),
			    $json = {},
			    $utxt = $wponion.txt("unmodified_debug"),
			    $mtxt = $wponion.txt("modified_debug");
			jQuery.each($defined_vars, function ($i, $el) {
				var $data = $wponion.js_args($el);
				$json[$el] = {};
				$json[$el][$utxt] = $data['debug_info'] || $data;
				$json[$el][$mtxt] = {};
			});

			$wponion.field_debug_info = $json;
		}
	}
	return $wponion;
};

/**
 * Stores Updated Plugin Debug Info.
 * @param $elemid
 * @param $key
 * @param $value
 * @returns {{}}
 * @private
 */
$wponion.__plugin_debug_info = function ($elemid, $key, $value) {
	if ($wponion.is_debug()) {
		if ((typeof $elemid === 'undefined' ? 'undefined' : _typeof($elemid)) === 'object') {
			$elemid = $wponion.field_js_id($elemid);
		}

		var $mtxt = $wponion.txt("modified_debug");

		if ($wponion.field_debug_info[$elemid] !== undefined) {
			if ($wponion.field_debug_info[$elemid][$mtxt][$key] === undefined) {
				$wponion.field_debug_info[$elemid][$mtxt][$key] = $value;
			}
		}
	}
	return $wponion;
};

/**
 * Gets Plugin Debug Info.
 * @param $elemid
 * @returns {*}
 * @private
 */
$wponion._get_debug_info = function ($elemid) {
	if ($wponion.is_debug()) {
		if ((typeof $elemid === 'undefined' ? 'undefined' : _typeof($elemid)) === 'object') {
			$elemid = $wponion.field_js_id($elemid);
		}

		if ($wponion.field_debug_info[$elemid] !== undefined) {
			return $wponion.field_debug_info[$elemid];
		}
	}
	return {};
};

/**
 * @param window = Window Object
 * @param document = Document Object
 * @param $ = jQuery Object
 * @param wpo = $wponion object
 * @param wpf = $wonion.field object
 * @param wpt = $wponion.theme object.
 */
(function (window, document, $, wpo, wp) {
	var $wph = wp.hooks;

	$(window).on('load', function () {
		/**
   * Retrives Basic Varaibles.
   */
		wpo.settings_args = wpo.js_args('wponion_core', {});
		wpo.text = wpo.js_args('wponion_i18n', {});

		wpo.__field_debug_info();

		/**
   * Triggers Before any of the core js functions called.
   */
		$wph.doAction('wponion_before_init');

		wpo.global_debug_view();
		wpo.loading_screen($('.wponion-framework'));

		/**
   * Triggered after all fields are set.
   */
		$wph.doAction('wponion_init');
	});

	$wph.doAction('wponion_loaded');
})(window, document, jQuery, $wponion, wp);
//# sourceMappingURL=wponion-core.js.map