"use strict";

/**
 * @param window = Window Object
 * @param document = Document Object
 * @param $ = jQuery Object
 * @param wpo = $wponion object
 * @param wpf = $wonion.field object
 * @param wpt = $wponion.theme object.
 */
(function (window, document, $, wpo, wp) {
	var $wpf = wpo._field();
	var wpf = $wpf.fn;
	var wphooks = wp.hooks;

	/**
  * Input Mask JS Handler.
  */
	wpf.inputmask = function () {
		if (this.elem.find("input[data-wponion-inputmask]").length > 0) {
			this.elem.find("input[data-wponion-inputmask]").each(function () {
				var $settings = wpo.field_args($(this));
				if ($settings['inputmask'] !== undefined) {
					$(this).inputmask($settings['inputmask']);
					wpo.__plugin_debug_info($(this), 'inputmask', $settings['inputmask']);
				}
			});
		}
		return wpo;
	};

	/**
  * Handles Maxlength Field.
  */
	wpf.maxlength = function () {
		if (this.elem.find("[data-wponion-maxlength]").length > 0) {
			this.elem.find("[data-wponion-maxlength]").each(function () {
				var $settings = wpo.field_args($(this), {});
				if ($settings['max_length'] !== undefined) {

					$settings = $settings['max_length'];
					$settings['appendToParent'] = true;

					if ($settings['threshold'] !== undefined) {
						$settings['threshold'] = parseInt($settings['threshold']);
					}

					if ($settings['warningClass'] === undefined) {
						$settings['warningClass'] = 'badge badge-success';
					}

					if ($settings['limitReachedClass'] === undefined) {
						$settings['limitReachedClass'] = 'badge badge-danger';
					}

					$(this).maxlength($settings);
					wpo.__plugin_debug_info($(this), 'max_length', $settings);
				}
			});
		}
		return wpo;
	};

	/**
  * Renders Fields Debug Popup.
  */
	wpf.field_debug = function () {
		if (this.elem.find('.wponion-field-debug').length > 0) {
			var $elem = this.elem;

			$elem.find('.wponion-field-debug a.wponion-field-debug-handle').on('click', function () {
				var $data = wpo._get_debug_info($(this), {});
				var $divID = wpo.field_js_id($(this)) + 'debugINFO',
				    $notice_txt = "<p class='wponion-field-debug-notice'>" + wpo.settings('debug_notice') + "</p>",
				    $elem = $("<div id='" + $divID + "' class='wponion-field-debug-popup' ><div id='" + $divID + "' ></div> " + $notice_txt + "</div>");

				var $ops = swal({
					html: $elem,
					showConfirmButton: true,
					confirmButtonText: wpo.txt('get_json_output', 'Get JSON Output'),
					showCloseButton: false,
					width: '800px',
					onOpen: function onOpen() {
						$('#swal2-content > div > #' + $divID).jsonView($data).overlayScrollbars({
							className: "os-theme-dark",
							resize: "vertical"
						});
					}
				}).then(function (result) {
					if (result.value) {
						swal({
							width: '600px',
							html: '<textarea style="min-width:550px; min-height:300px">' + JSON.stringify($data) + '</textarea>'
						});
					}
				});
			});
		}
		return wpo;
	};

	/**
  * Reloads All Fields Instance. For the given key.
  */
	wpf.reload = function () {
		wphooks.addAction('wponion_before_fields_reload');
		this.inputmask().maxlength().field_debug();
		wphooks.addAction('wponion_after_fields_reload');
	};

	wphooks.addAction('wponion_before_init', function () {
		console.time("O");
		$wpf('.wponion-framework').reload();
		console.timeEnd("O");
	});
})(window, document, jQuery, $wponion, wp);
//# sourceMappingURL=wponion-fields.js.map