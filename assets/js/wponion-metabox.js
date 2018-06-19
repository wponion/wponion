'use strict';

/**
 * WPOnion Metabox.
 * @param selector
 * @param context
 * @returns {$wponion_metabox}
 */
var $wponion_metabox = function $wponion_metabox(selector, context) {
	this.init(selector, context);
	this.menu();
	return this;
};

/**
 * WPOnion Metabox Functions
 * @type {{constructor: $wponion_field, init: $wponion_field.init}}
 */
$wponion_metabox.fn = $wponion_metabox.prototype = $wponion_theme.prototype;

/**
 * @param window = Window Object
 * @param document = Document Object
 * @param $ = jQuery Object
 * @param wpo = $wponion object
 * @param wp = $wponion.theme object.
 */
(function (window, document, $, wpo, wp, metabox) {
	var wphooks = wp.hooks;

	/**
  * Handles Metabox Side Menu.
  */
	metabox.fn.menu = function () {
		var $elem = this.elem;
		$elem.on('click', 'ul.meta-menu li a', function (e) {
			e.preventDefault();
			if ($(this).hasClass('dropdown')) {
				if ($(this).next('ul').is(':visible')) {
					$(this).next('ul').slideToggle('fast');
				} else {
					$elem.find('ul.meta-menu li ul').slideUp('fast');
					$(this).next('ul').slideToggle('fast');
				}
			} else {
				var $href = $(this).attr('href');
				$href = wpo.url_to_object($href);
				if ($href['section-id'] !== undefined && $href['parent-id'] !== undefined) {
					var $parent = 'wponion-tab-' + $href['parent-id'];
					var $section = $parent + '-' + $href['section-id'];
					var $all_actives = $elem.find(' div.wponion-parent-wraps');
					var $current = $elem.find('div#' + $parent);
					$all_actives.hide();
					$current.find('div.wponion-section-wraps').hide();
					$current.show();
					$current.find(' div#' + $section).show();
					$elem.find('ul.meta-menu a.active ').removeClass('active ');
					$(this).addClass('active');
				}
			}
		});
	};

	/**
  * Inits Customizer Instance.
  */
	wphooks.addAction('wponion_init', function () {
		$('div.postbox.wponion-metabox').each(function () {
			new $wponion_metabox($(this), false);
		});
	});
})(window, document, jQuery, $wponion, wp, $wponion_metabox);
//# sourceMappingURL=wponion-metabox.js.map