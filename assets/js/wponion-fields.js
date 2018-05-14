'use strict';

//@codekit-append ./parts/wponion-jquery-noclf-header.js
//@codekit-append ./fields/*.js
//@codekit-append ./parts/wponion-jquery-noclf-footer.js
(function (window, document, $, wponion, wphooks) {
	/**
  * Input Mask JS Handler.
  * @param $elem
  */
	wponion.fields.input_mask = function ($elem) {
		if (1 >= $elem.length) {
			$elem.each(function () {
				var $settings = wponion.field_js_args($(this));
				if ($settings['inputmask'] !== undefined) {
					$(this).inputmask($settings['inputmask']);
				}
			});
		}
	};

	/**
  * Hooked To Auto Reload Fields.
  */
	wphooks.addAction('wponion_reload_fields', function () {
		wponion.fields.input_mask(wponion_elem().find("input[data-wponion-inputmask]"));
	});
	wponion.fields.max_length = function ($elem) {
		if ($elem.length > 0) {
			$elem.each(function () {
				var $settings = wponion.field_js_args($(this), {});
				if ($settings['max_length'] !== undefined) {
					$settings = $settings['max_length'];
					$settings['appendToParent'] = true;

					if ($settings['warningClass'] === undefined) {
						$settings['warningClass'] = 'badge badge-success';
					}

					if ($settings['limitReachedClass'] === undefined) {
						$settings['limitReachedClass'] = 'badge badge-danger';
					}

					$(this).maxlength($settings);
				}

				console.log(wponion.field_js_args($(this), {}));
			});
		}
	};

	/**
  * Hooked To Auto Reload Fields.
  */
	wphooks.addAction('wponion_reload_fields', function () {
		wponion.fields.max_length(wponion_elem().find("[data-wponion-maxlength]"));
	});
})(window, document, jQuery, wponion, wp.hooks);
//# sourceMappingURL=wponion-fields.js.map