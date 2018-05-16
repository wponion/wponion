'use strict';

/**
 * Returns WPOnionElement Instance.
 * @returns {*}
 */
var wponion_elem = function wponion_elem() {
	return wponion.elem;
};

/**
 * WPOnion Core Functions.
 */
(function (window, document, $, wp, wponion, wphooks) {
	/**
  * WPOnion Core Element To Work With.
  * @type {*|HTMLElement}
  */
	wponion.elem = $('.wponion-framework');

	wponion.settings_args = null;

	/**
  * Handles Framework ToolTip Functions.
  * @constructor
  */
	wponion.tooltip = function ($elem) {
		if ($elem.length > 0) {
			return $elem.each(function () {
				var $data = wponion.field_js_args($(this).parent().parent(), {}),
				    $settings = {
					arrow: true,
					arrowType: 'sharp'
				};

				if ($data['field_help'] !== undefined) {
					$settings = $data['field_help'];
				}
				tippy($(this)[0], $settings);
			});
		}
	};

	/**
  * Handles Fields ToolTip.
  * @type {function(*)}
  */
	wponion.tooltip_field = function ($elem) {
		if ($elem.length > 0) {
			return $elem.each(function () {
				var $data = wponion.field_js_args($(this), {});
				var $fieldID = $(this).data('field-jsid');
				if ($data[$fieldID + 'tooltip'] !== undefined) {
					tippy($(this)[0], $data[$fieldID + 'tooltip']);
				}
			});
		}
	};

	wponion.settings = function ($key, $default) {
		if (wponion.settings_args[$key] !== undefined) {
			return wponion.settings_args[$key];
		}
		return $default;
	};

	/**
  * Handles Field Dependency.
  * @type {function()}
  */
	wponion.dependency = function ($is_sub) {
		if (wponion.elem.find('.wponion-has-dependency').length > 0) {
			var $app = {

				/**
     * Inits dependency framework.
     * @type {function()}
     */
				init: function init() {
					$app.ruleset = $.deps.createRuleset();

					var $config = {
						show: function show($el) {
							$el.removeClass('hidden');
						},
						hide: function hide($el) {
							$el.addClass('hidden');
						},
						log: wponion.settings('debug'),
						checkTargets: false
					};

					if ($is_sub !== undefined) {
						$app.dep_sub();
					} else {
						$app.dep_root();
					}

					$.deps.enable(wponion.elem, $app.ruleset, $config);
				},

				dep_root: function dep_root() {
					wponion_elem().find('.wponion-has-dependency').each(function () {
						var $elem = $(this),
						    $dep_data = wponion.field_js_args($elem, {}),
						    $_rules = $app.ruleset;

						if ($dep_data['dependency'] !== undefined) {
							var $controller = $dep_data['dependency']['controller'],
							    $condition = $dep_data['dependency']['condition'],
							    $value = $dep_data['dependency']['value'];

							$.each($controller, function ($i, $el) {
								var $_value = $value[$i] || '',
								    $_condition = $condition[$i] || $condition[0],
								    $_ruless = $_rules.createRule('[data-depend-id="' + $el + '"]', $_condition, $_value);
								$_ruless.include($elem);
							});
						}
					});
				}
			};

			$app.init();
		}
	};

	/**
  * Triggers A Hook To Reload All Fields.
  * @type {function()}
  */
	wponion.reload = function () {
		wponion.dependency();
		wponion.tooltip(wponion.elem.find(' .wponion-help'));
		wponion.tooltip_field(wponion.elem.find('.wponion-field-tooltip'));
		wphooks.doAction("wponion_reload_fields");
	};

	/**
  * Checks for Document / Window for the elemnts JS settings. if exists it returns or default will be returned.
  * @type {function(*, *)}
  */
	wponion.field_js_args = function ($elem, $default) {
		var $js_id = $elem.attr("data-wponion-jsid");
		return wponion.window_vars($js_id, $default);
	};

	/**
  * Checks And Returns Variable From Window.
  * @type {function(*=, *)}
  */
	wponion.window_vars = function ($var_id, $default) {
		if ($var_id) {
			if (typeof window[$var_id] === 'undefined' || window[$var_id] === undefined) {
				return $default;
			}
			return window[$var_id];
		}

		return $default;
	};

	/**
  * Returns URL Query String as object
  * @example http://example.com?q1=22&q2=49 turns into {q1:22,q2:49}
  * @param str
  * @returns {any}
  */
	wponion.url_param = function (str) {
		return (str || document.location.search).replace(/(^\?)/, '').split("&").map(function (n) {
			return n = n.split("="), this[n[0]] = n[1], this;
		}.bind({}))[0];
	};

	/**
  * Handles WPOnion Settings Page Loading Screen.
  * @type {function()}
  */
	wponion.handle_loading_screen = function () {
		if (wponion_elem().hasClass('wponion-settings-module')) {
			if (wponion_elem().find('.wponion-page-loader').length > 0) {
				wponion_elem().find('.wponion-page-loader').fadeOut('slow', function () {
					$(this).hide();
				});
			}

			window.onbeforeunload = function () {
				wponion_elem().find('.wponion-page-loader').show();
			};
		}
	};

	/**
  * Below Code Runs On Window.load
  */
	$(window).on("load", function () {
		wponion.settings_args = wponion.window_vars('wponion_core', {});
		wponion.reload();
		wponion.handle_loading_screen();
		wphooks.doAction('wponion_init');
	});

	/**
  * Hook Fired To Make sure all fields are using it.
  */
	wphooks.doAction("wponion_loaded");
})(window, document, jQuery, wp, wponion, wp.hooks);
//# sourceMappingURL=wponion-core.js.map