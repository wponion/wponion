'use strict';

(function (window, document, $, wp, wponion, wphooks) {
	wponion.themes.wp = {
		submenu_single_page: function submenu_single_page() {
			wponion_elem().find('.wponion-submenus.subsubsub a').on('click', function (e) {
				e.preventDefault();
				var $href = $(this).attr('href');
				$href = wponion.url_param($href);

				if ($href['section-id'] !== undefined && $href['parent-id'] !== undefined) {
					var $parent = 'wponion-tab-' + $href['parent-id'];
					var $section = $parent + '-' + $href['section-id'];
					var $all_actives = wponion_elem().find('div#' + $parent + ' div.wponion-section-wraps');
					var $current = wponion_elem().find('div#' + $parent + ' div#' + $section);

					$all_actives.hide();
					$current.show();
					$(this).parent().parent().find('a.current').removeClass('current');
					$(this).addClass('current');
				} else {
					window.location.href = $(this).attr('href');
				}
			});
		},
		mainmenu_single_page: function mainmenu_single_page() {
			wponion_elem().find('nav.nav-tab-wrapper a').on('click', function (e) {
				e.preventDefault();

				var $href = $(this).attr('href');
				$href = wponion.url_param($href);

				if ($href['parent-id'] !== undefined) {
					var $parent = 'wponion-tab-' + $href['parent-id'];
					var $all_actives = wponion_elem().find(' div.wponion-parent-wraps');
					var $current = wponion_elem().find('div#' + $parent);

					$all_actives.hide();
					$current.show();
					$(this).parent().find('a.nav-tab-active ').removeClass('nav-tab-active ');
					$(this).addClass('nav-tab-active ');
				} else {
					window.location.href = $(this).attr('href');
				}
			});
		}

	};

	wphooks.addAction('wponion_loaded', function () {
		$(window).on('load', function () {});

		$(document).on('ready', function () {
			if (wponion_elem().hasClass('wponion-submenu-single-page')) {
				wponion.themes.wp.submenu_single_page();
			}

			if (wponion_elem().hasClass('wponion-single-page')) {
				wponion.themes.wp.mainmenu_single_page();
				wponion.themes.wp.submenu_single_page();
			}
		});
	});
})(window, document, jQuery, wp, wponion, wp.hooks);
//# sourceMappingURL=wponion-wp-theme.js.map