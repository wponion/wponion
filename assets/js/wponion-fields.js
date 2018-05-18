'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
		if (this.elem.length > 0) {
			var $settings = this.arg('inputmask');
			if ($settings) {
				this.elem.inputmask($settings);
				wpo.__plugin_debug_info(this.elem, 'inputmask', $settings);
			}
		}
		return this;
	};

	/**
  * Handles Maxlength Field.
  */
	wpf.maxlength = function () {
		if (this.elem.length > 0) {
			var $settings = this.arg('max_length');
			if ($settings) {
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

				this.elem.maxlength($settings);
				wpo.__plugin_debug_info(this.elem, 'max_length', $settings);
			}
		}
		return this;
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
		return this;
	};

	/**
  * Icon Picker Field Handler.
  */
	wpf.icon_picker = function () {
		var $_this = this,
		    $elem = $_this.elem,
		    $args = $_this.args(),
		    $input = $elem.find(".wponion-icon-picker-input"),
		    $remove_btn = $elem.find('button.wponion-remove-icon'),
		    $add_btn = $elem.find("button.wponion-add-icon"),
		    $preview = $elem.find('span.wponion-icon-preview');

		var $manager = {

			/**
    * Stores POPUP Information.
    */
			elems: null,

			/**
    * Stores POPUP Information.
    */
			popup: null,

			/**
    * Stores POPUP Information.
    */
			popupel: null,
			/**
    * Creates A New Instance for ToolTip.
    */
			init_tooltip: function init_tooltip() {
				if ($args['popup_tooltip'] !== 'false') {
					var $tp = _typeof($args['popup_tooltip']) === 'object' ? $args['popup_tooltip'] : {};
					if ($manager.elems.length > 0) {
						$manager.elems.each(function () {
							tippy($(this)[0], $tp);
						});
					}
				}
			},

			/**
    * Inits For each and every POPUP.
    * @param $popupel
    * @param $instance
    */
			init: function init($popupel, $instance) {
				$manager.popupel = $popupel;
				$manager.popup = $instance;
				$manager.elems = $manager.popupel.find("span.wponion-icon-preview");
				var $height = $manager.popupel.find('.wponion-icon-picker-container-scroll').css('height');
				$manager.popupel.find('.wponion-icon-picker-container-scroll').css('height', $height);
				$manager.select();
				$manager.input();
				$manager.elems.on('click', function () {
					var $icon = $(this).attr('data-icon');
					$input.val($icon).trigger('change');
					swal.closeModal();
				});
				$manager.init_tooltip();
			},

			/**
    * Works with POPUP Input Search.
    */
			input: function input() {
				$manager.popupel.find('div.wponion-icon-picker-model-header input[type=text]').on('keyup', function () {
					var $val = $(this).val();
					$manager.elems.each(function () {
						if ($(this).attr('data-icon').search(new RegExp($val, 'i')) < 0) {
							$(this).parent().hide();
						} else {
							$(this).parent().show();
						}
					});
				});
			},

			/**
    * Handles Selectbox in popup.
    */
			select: function select() {
				$manager.popupel.find('div.wponion-icon-picker-model-header select').on('change', function () {
					swal.enableLoading();
					var $val = $(this).val();
					wpo.ajax('icon_picker', {
						data: {
							"wponion-icon-lib": $val
						}
					}, function ($res) {
						if ($res.success) {
							swal.resetValidationError();
							$($manager.popupel).find("#swal2-content").html($res.data).show();
							$($manager.popupel).find('#swal2-content .wponion-icon-picker-container-scroll').overlayScrollbars({
								className: "os-theme-dark",
								resize: "vertical"
							});
							$manager.init();
						} else {
							$($manager.popupel).find(".wponion-icon-picker-container-scroll").remove();
							$manager.popup.showValidationError($res.data);
						}
					}, function () {
						$manager.popup.showValidationError(wpo.txt('unknown_ajax_error'));
					}, function () {
						$manager.popup.disableLoading();
					});
				});
			}
		};

		if ($input.val() === '') {
			$remove_btn.hide();
			$preview.hide();
		}

		/**
   * Handles Blur Even / change even in inputfield.
   */
		$input.on('keyup blur change keypress', function () {
			var $val = $(this).val();

			if ($val !== '') {
				$preview.html('<i class="' + $val + '"></i>').show();
				$remove_btn.show();
			} else {
				$preview.hide();
				$remove_btn.hide();
			}
		});

		/**
   * Handles Add Button Click Event.
   */
		$add_btn.on('click', function () {
			var $popup = swal({
				title: $elem.find(".wponion-field-title h4").html(),
				animation: false,
				allowOutsideClick: false,
				showConfirmButton: false,
				showCloseButton: true,
				width: '700px',
				customClass: "wponion-icon-picker-model",
				onBeforeOpen: function onBeforeOpen($elem) {
					swal.enableLoading();
					$_this.ajax('icon_picker', {
						onSuccess: function onSuccess($res) {
							if ($res.success) {
								swal.resetValidationError();
								var $popup_elem = $($elem);
								$popup_elem.find("#swal2-content").html($res.data).show();
								$popup_elem.find('#swal2-content .wponion-icon-picker-container-scroll').overlayScrollbars({ className: "os-theme-dark", resize: "vertical" });
								$manager.init($popup_elem, $popup);
							} else {
								wpo.tost({
									type: 'error',
									title: $res.data
								});
								$popup.showValidationError($res.data);
							}
						},
						onError: function onError() {
							$popup.showValidationError(wpo.txt('unknown_ajax_error'));
						},
						onAlways: function onAlways() {
							$popup.disableLoading();
						}
					});
				}
			});
		});

		/**
   * Handles Remove Button Event.
   */
		$remove_btn.on('click', function () {
			$input.val('');
			$preview.hide();
			$remove_btn.hide();
		});
	};

	/**
  * Reloads All Fields Instance. For the given key.
  */
	wpf.reload = function () {
		wphooks.addAction('wponion_before_fields_reload');
		var $elem = this.elem;
		this.init_field('input[data-wponion-inputmask]', 'inputmask');
		this.init_field('[data-wponion-maxlength]', 'maxlength');
		this.field_debug();

		this.init_field('.wponion-element-icon_picker', 'icon_picker');
		wphooks.addAction('wponion_after_fields_reload');
	};

	wphooks.addAction('wponion_before_init', function () {
		$wpf('.wponion-framework').reload();
	});
})(window, document, jQuery, $wponion, wp);
//# sourceMappingURL=wponion-fields.js.map