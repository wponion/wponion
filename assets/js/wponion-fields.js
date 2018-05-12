//@codekit-append ./parts/wponion-jquery-noclf-header.js
//@codekit-append ../assets/js/*.js
//@codekit-append ./parts/wponion-jquery-noclf-footer.js
"use strict";
( function (window, document, $, wponion,wphooks) {
'use strict';

/**
 * Input Mask JS Handler.
 * @param $elem
 */
wponion.fields.input_mask = function ($elem) {
	if (1 >= $elem.length) {
		$elem.each(function () {
			var $settings = wponion.field_js_args($(this));
			if ($settings['inputmask'] !== undefined) {
				$settings = $settings['inputmask'];
			}
			$(this).inputmask($settings);
		});
	}
};

/**
 * Hooked To Auto Reload Fields.
 */
wphooks.addAction('wponion_reload_fields', function () {
	wponion.fields.input_mask(wponion_elem().find(".wponion-inputmask input[data-wponion-inputmask]"));
});


})
( window, document, jQuery, wponion, wp.hooks );

//# sourceMappingURL=wponion-fields.js.map