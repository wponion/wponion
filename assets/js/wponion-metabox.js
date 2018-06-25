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
	this.elem.on('click', 'h2.ajax-container button', this.save_handler);
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
		$elem.on('click', 'ul.wponion-metabox-parent-menu li a', function (e) {
			e.preventDefault();
			if ($(this).hasClass('dropdown')) {
				if ($(this).next('ul').is(':visible')) {
					$(this).next('ul').slideToggle('fast');
				} else {
					$elem.find('ul.wponion-metabox-parent-menu li ul').slideUp('fast');
					$(this).next('ul').slideToggle('fast');
				}
			} else {
				var $href = $(this).attr('data-href');
				$href = wpo.url_to_object($href);

				var $parent = 'wponion-tab-' + $href['parent-id'],
				    $section = $href['section-id'] !== undefined ? $parent + '-' + $href['section-id'] : false,
				    $parent_actives = $elem.find('div.wponion-parent-wrap'),
				    $current = $elem.find('div#' + $parent);

				$elem.find('div.wponion-section-wraps').hide();
				$parent_actives.hide();

				if ($href['section-id'] !== undefined && $href['parent-id'] !== undefined) {
					$current.find('div.wponion-section-wraps').hide();
					$current.find(' div#' + $section).show();
				}

				$current.show();

				$elem.find('ul.wponion-metabox-parent-menu a.active ').removeClass('active ');
				$(this).addClass('active');
				$elem.find('ul.wponion-metabox-parent-menu > li > a').removeClass('active');
				$elem.find('ul.wponion-metabox-parent-menu a[data-wponion-id="wponion_menu_' + $href['parent-id'] + '"]').addClass('active');
			}
		});
	};

	/**
  * Handles Metabox AjaxSave.
  * @param e
  */
	metabox.fn.save_handler = function (e) {
		e.preventDefault();
		var $this = this;
		var $parent = $(this).parent(),
		    $base = $parent.parent().parent(),
		    $fields = $parent.parent().find(':input'),
		    $hidden = $parent.find('div.wponion-metabox-secure-data');

		$base.block({
			message: null,
			overlayCSS: {
				background: '#000',
				opacity: 0.7
			}
		});

		$hidden.find('input').each(function () {
			$(this).attr('name', $(this).attr('id'));
		});
		var $values = $fields.serialize();
		$hidden.find('input').removeAttr('name');

		$wponion.ajax('save_metabox', { data: $values }, function (res) {
			$base.html(res);
			$base.unblock();
			wponion_field($base.find('.wponion-framework')).reload();
		});
	};

	/**
  * Inits Customizer Instance.
  */
	wphooks.addAction('wponion_init', function () {});

	$(document).on('ready', function () {
		$('div.postbox.wponion-metabox').each(function () {
			new $wponion_metabox($(this), false);
		});
	});
})(window, document, jQuery, $wponion, wp, $wponion_metabox);
//# sourceMappingURL=wponion-metabox.js.map