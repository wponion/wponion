/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/wponion-customizer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/wponion-customizer.js":
/*!**************************************!*\
  !*** ./src/js/wponion-customizer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (window, document, $, wp) {
  var wphooks = window.wponion.hooks;
  /**
   * Customizer Functions.
   * @type {{link_customize_settings: function(*), cloneable_update: function(*), cloneable: function(*=)}}
   */

  var $wponion_customizer = {
    /**
     * Adds data-customize-settings-link attribute.
     */
    link_customize_settings: function link_customize_settings($elem) {
      $elem.find('input , textarea').each(function () {
        $(this).attr('data-customize-setting-link', true);
      });
    },

    /**
     * Links WIth KeyValue to auto get and save data.
     */
    cloneable_update: function cloneable_update($control) {
      var $values = $control.container.find(':input').inputToArray({
        key: 'name',
        value: true
      });
      var $input = $control.container.find('input.wponion_cloneable_value');
      $.each($values, function ($k, $vs) {
        $.each($vs, function ($e, $ep) {
          $values = $ep;
        });
      });
      $input.val(JSON.stringify($values));
      $input.trigger('change');
    },

    /**
     * Links WIth KeyValue to auto get and save data.
     */
    get_keyval_data: function get_keyval_data($control) {
      var $values = $control.container.find(':input').inputToArray({
        key: 'name',
        value: true
      });
      $.each($values, function ($k, $vs) {
        $.each($vs, function ($e, $ep) {
          $values = $ep;
        });
      });
      return $values;
    },

    /**
     * Enables Cloneable fields.
     */
    cloneable: function cloneable($control) {
      $control.container.on('change', ':input', function () {
        if (!$(this).hasClass('wponion_cloneable_value')) {
          $wponion_customizer.cloneable_update($control);
        }
      });
    }
  };
  var $wpc = wp.customize.controlConstructor;
  /**
   * Handles Key Value field in customizer.
   */

  $wpc.wponion_field_key_value = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;
      wphooks.addAction('wponion_key_value_updated', 'wponion_core', function () {
        var $val = $wponion_customizer.get_keyval_data(control);
        control.setting.set($val);
      }, 11);
      control.container.on('change', 'input[type=text]', function () {
        var $val = $wponion_customizer.get_keyval_data(control);
        control.setting.set($val);
      });
    }
  });
  /**
   * Handles Checkbox Field in Customizer.
   */

  $wpc.wponion_field_checkbox = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;
      control.container.on('change', ':input', function () {
        var $val = $wponion_customizer.get_keyval_data(control);
        control.setting.set($val);
      });
    }
  });
  /**
   * Handles Fieldset And Checkbox Field.
   */

  $wpc.wponion_field_fieldset = wp.customize.Control.extend({
    ready: function ready() {
      $wponion_customizer.cloneable(this);
    }
  });
  /**
   * Handles Image Picker.
   */

  $wpc.wponion_field_image = $wpc.wponion_field_gallery = wp.customize.Control.extend({
    initialize: function initialize(id, options) {
      var $html = $('<div>' + options.params.content + '</div>');
      var $input = $html.find('input#image_id');
      $input.attr('data-customize-setting-link', $html.find('input#image_id').attr('name'));
      options.params.content = $html.html();
      wp.customize.Control.prototype.initialize.call(this, id, options);
    }
  });
  /**
   * Inits Customizer Instance.
   */

  wphooks.addAction('wponion_init', 'wponion_core', function () {
    $('.wponion-module-customizer-framework.wponion-framework').each(function () {
      $wponion_customizer.link_customize_settings($(this));
    });
  });
})(window, document, jQuery, wp);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dwb25pb24tY3VzdG9taXplci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJkb2N1bWVudCIsIiQiLCJ3cCIsIndwaG9va3MiLCJ3cG9uaW9uIiwiaG9va3MiLCIkd3Bvbmlvbl9jdXN0b21pemVyIiwibGlua19jdXN0b21pemVfc2V0dGluZ3MiLCIkZWxlbSIsImZpbmQiLCJlYWNoIiwiYXR0ciIsImNsb25lYWJsZV91cGRhdGUiLCIkY29udHJvbCIsIiR2YWx1ZXMiLCJjb250YWluZXIiLCJpbnB1dFRvQXJyYXkiLCJrZXkiLCJ2YWx1ZSIsIiRpbnB1dCIsIiRrIiwiJHZzIiwiJGUiLCIkZXAiLCJ2YWwiLCJKU09OIiwic3RyaW5naWZ5IiwidHJpZ2dlciIsImdldF9rZXl2YWxfZGF0YSIsImNsb25lYWJsZSIsIm9uIiwiaGFzQ2xhc3MiLCIkd3BjIiwiY3VzdG9taXplIiwiY29udHJvbENvbnN0cnVjdG9yIiwid3Bvbmlvbl9maWVsZF9rZXlfdmFsdWUiLCJDb250cm9sIiwiZXh0ZW5kIiwicmVhZHkiLCJjb250cm9sIiwiYWRkQWN0aW9uIiwiJHZhbCIsInNldHRpbmciLCJzZXQiLCJ3cG9uaW9uX2ZpZWxkX2NoZWNrYm94Iiwid3Bvbmlvbl9maWVsZF9maWVsZHNldCIsIndwb25pb25fZmllbGRfaW1hZ2UiLCJ3cG9uaW9uX2ZpZWxkX2dhbGxlcnkiLCJpbml0aWFsaXplIiwiaWQiLCJvcHRpb25zIiwiJGh0bWwiLCJwYXJhbXMiLCJjb250ZW50IiwiaHRtbCIsInByb3RvdHlwZSIsImNhbGwiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFF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Ozs7QUFHQS9DLFNBQU8sQ0FBQ3FDLFNBQVIsQ0FBbUIsY0FBbkIsRUFBbUMsY0FBbkMsRUFBcUQsWUFBTTtBQUMxRHZDLEtBQUMsQ0FBRSx3REFBRixDQUFELENBQThEUyxJQUE5RCxDQUFvRSxZQUFXO0FBQzlFSix5QkFBbUIsQ0FBQ0MsdUJBQXBCLENBQTZDTixDQUFDLENBQUUsSUFBRixDQUE5QztBQUNBLEtBRkQ7QUFHQSxHQUpEO0FBTUEsQ0E5SEQsRUE4SEtGLE1BOUhMLEVBOEhhQyxRQTlIYixFQThIdUJ5RCxNQTlIdkIsRUE4SCtCdkQsRUE5SC9CLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3dwb25pb24tY3VzdG9taXplci5qc1wiKTtcbiIsIiggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcclxuXHRsZXQgd3Bob29rcyA9IHdpbmRvdy53cG9uaW9uLmhvb2tzO1xyXG5cclxuXHQvKipcclxuXHQgKiBDdXN0b21pemVyIEZ1bmN0aW9ucy5cclxuXHQgKiBAdHlwZSB7e2xpbmtfY3VzdG9taXplX3NldHRpbmdzOiBmdW5jdGlvbigqKSwgY2xvbmVhYmxlX3VwZGF0ZTogZnVuY3Rpb24oKiksIGNsb25lYWJsZTogZnVuY3Rpb24oKj0pfX1cclxuXHQgKi9cclxuXHRsZXQgJHdwb25pb25fY3VzdG9taXplciA9IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkcyBkYXRhLWN1c3RvbWl6ZS1zZXR0aW5ncy1saW5rIGF0dHJpYnV0ZS5cclxuXHRcdCAqL1xyXG5cdFx0bGlua19jdXN0b21pemVfc2V0dGluZ3M6ICggKCAkZWxlbSApID0+IHtcclxuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0ICwgdGV4dGFyZWEnICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCggdGhpcyApLmF0dHIoICdkYXRhLWN1c3RvbWl6ZS1zZXR0aW5nLWxpbmsnLCB0cnVlICk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIExpbmtzIFdJdGggS2V5VmFsdWUgdG8gYXV0byBnZXQgYW5kIHNhdmUgZGF0YS5cclxuXHRcdCAqL1xyXG5cdFx0Y2xvbmVhYmxlX3VwZGF0ZTogKCAoICRjb250cm9sICkgPT4ge1xyXG5cdFx0XHRsZXQgJHZhbHVlcyA9ICRjb250cm9sLmNvbnRhaW5lci5maW5kKCAnOmlucHV0JyApXHJcblx0XHRcdFx0XHRcdFx0XHQgIC5pbnB1dFRvQXJyYXkoIHsga2V5OiAnbmFtZScsIHZhbHVlOiB0cnVlIH0gKTtcclxuXHRcdFx0bGV0ICRpbnB1dCAgPSAkY29udHJvbC5jb250YWluZXIuZmluZCggJ2lucHV0Lndwb25pb25fY2xvbmVhYmxlX3ZhbHVlJyApO1xyXG5cclxuXHRcdFx0JC5lYWNoKCAkdmFsdWVzLCBmdW5jdGlvbiggJGssICR2cyApIHtcclxuXHRcdFx0XHQkLmVhY2goICR2cywgZnVuY3Rpb24oICRlLCAkZXAgKSB7XHJcblx0XHRcdFx0XHQkdmFsdWVzID0gJGVwO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0JGlucHV0LnZhbCggSlNPTi5zdHJpbmdpZnkoICR2YWx1ZXMgKSApO1xyXG5cdFx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHRcdH0gKSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIExpbmtzIFdJdGggS2V5VmFsdWUgdG8gYXV0byBnZXQgYW5kIHNhdmUgZGF0YS5cclxuXHRcdCAqL1xyXG5cdFx0Z2V0X2tleXZhbF9kYXRhOiAoICggJGNvbnRyb2wgKSA9PiB7XHJcblx0XHRcdGxldCAkdmFsdWVzID0gJGNvbnRyb2wuY29udGFpbmVyLmZpbmQoICc6aW5wdXQnIClcclxuXHRcdFx0XHRcdFx0XHRcdCAgLmlucHV0VG9BcnJheSggeyBrZXk6ICduYW1lJywgdmFsdWU6IHRydWUgfSApO1xyXG5cdFx0XHQkLmVhY2goICR2YWx1ZXMsIGZ1bmN0aW9uKCAkaywgJHZzICkge1xyXG5cdFx0XHRcdCQuZWFjaCggJHZzLCBmdW5jdGlvbiggJGUsICRlcCApIHtcclxuXHRcdFx0XHRcdCR2YWx1ZXMgPSAkZXA7XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gJHZhbHVlcztcclxuXHRcdH0gKSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEVuYWJsZXMgQ2xvbmVhYmxlIGZpZWxkcy5cclxuXHRcdCAqL1xyXG5cdFx0Y2xvbmVhYmxlOiAoICggJGNvbnRyb2wgKSA9PiB7XHJcblx0XHRcdCRjb250cm9sLmNvbnRhaW5lci5vbiggJ2NoYW5nZScsICc6aW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiggISQoIHRoaXMgKS5oYXNDbGFzcyggJ3dwb25pb25fY2xvbmVhYmxlX3ZhbHVlJyApICkge1xyXG5cdFx0XHRcdFx0JHdwb25pb25fY3VzdG9taXplci5jbG9uZWFibGVfdXBkYXRlKCAkY29udHJvbCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0fSApLFxyXG5cdH07XHJcblxyXG5cdGxldCAkd3BjID0gd3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3RvcjtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBLZXkgVmFsdWUgZmllbGQgaW4gY3VzdG9taXplci5cclxuXHQgKi9cclxuXHQkd3BjLndwb25pb25fZmllbGRfa2V5X3ZhbHVlID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XHJcblx0XHRyZWFkeTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBjb250cm9sID0gdGhpcztcclxuXHRcdFx0d3Bob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2tleV92YWx1ZV91cGRhdGVkJywgJ3dwb25pb25fY29yZScsICggKCkgPT4ge1xyXG5cdFx0XHRcdGxldCAkdmFsID0gJHdwb25pb25fY3VzdG9taXplci5nZXRfa2V5dmFsX2RhdGEoIGNvbnRyb2wgKTtcclxuXHRcdFx0XHRjb250cm9sLnNldHRpbmcuc2V0KCAkdmFsICk7XHJcblx0XHRcdH0gKSwgMTEgKTtcclxuXHJcblx0XHRcdGNvbnRyb2wuY29udGFpbmVyLm9uKCAnY2hhbmdlJywgJ2lucHV0W3R5cGU9dGV4dF0nLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgJHZhbCA9ICR3cG9uaW9uX2N1c3RvbWl6ZXIuZ2V0X2tleXZhbF9kYXRhKCBjb250cm9sICk7XHJcblx0XHRcdFx0Y29udHJvbC5zZXR0aW5nLnNldCggJHZhbCApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIENoZWNrYm94IEZpZWxkIGluIEN1c3RvbWl6ZXIuXHJcblx0ICovXHJcblx0JHdwYy53cG9uaW9uX2ZpZWxkX2NoZWNrYm94ID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XHJcblx0XHRyZWFkeTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBjb250cm9sID0gdGhpcztcclxuXHRcdFx0Y29udHJvbC5jb250YWluZXIub24oICdjaGFuZ2UnLCAnOmlucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0ICR2YWwgPSAkd3Bvbmlvbl9jdXN0b21pemVyLmdldF9rZXl2YWxfZGF0YSggY29udHJvbCApO1xyXG5cdFx0XHRcdGNvbnRyb2wuc2V0dGluZy5zZXQoICR2YWwgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBGaWVsZHNldCBBbmQgQ2hlY2tib3ggRmllbGQuXHJcblx0ICovXHJcblx0JHdwYy53cG9uaW9uX2ZpZWxkX2ZpZWxkc2V0ID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XHJcblx0XHRyZWFkeTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdCR3cG9uaW9uX2N1c3RvbWl6ZXIuY2xvbmVhYmxlKCB0aGlzICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIEltYWdlIFBpY2tlci5cclxuXHQgKi9cclxuXHQkd3BjLndwb25pb25fZmllbGRfaW1hZ2UgPSAkd3BjLndwb25pb25fZmllbGRfZ2FsbGVyeSA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oIGlkLCBvcHRpb25zICkge1xyXG5cdFx0XHRsZXQgJGh0bWwgID0gJCggJzxkaXY+JyArIG9wdGlvbnMucGFyYW1zLmNvbnRlbnQgKyAnPC9kaXY+JyApO1xyXG5cdFx0XHRsZXQgJGlucHV0ID0gJGh0bWwuZmluZCggJ2lucHV0I2ltYWdlX2lkJyApO1xyXG5cdFx0XHQkaW5wdXQuYXR0ciggJ2RhdGEtY3VzdG9taXplLXNldHRpbmctbGluaycsICRodG1sLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKS5hdHRyKCAnbmFtZScgKSApO1xyXG5cdFx0XHRvcHRpb25zLnBhcmFtcy5jb250ZW50ID0gJGh0bWwuaHRtbCgpO1xyXG5cdFx0XHR3cC5jdXN0b21pemUuQ29udHJvbC5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKCB0aGlzLCBpZCwgb3B0aW9ucyApO1xyXG5cdFx0fSxcclxuXHR9ICk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEN1c3RvbWl6ZXIgSW5zdGFuY2UuXHJcblx0ICovXHJcblx0d3Bob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2luaXQnLCAnd3Bvbmlvbl9jb3JlJywgKCAoKSA9PiB7XHJcblx0XHQkKCAnLndwb25pb24tbW9kdWxlLWN1c3RvbWl6ZXItZnJhbWV3b3JrLndwb25pb24tZnJhbWV3b3JrJyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkd3Bvbmlvbl9jdXN0b21pemVyLmxpbmtfY3VzdG9taXplX3NldHRpbmdzKCAkKCB0aGlzICkgKTtcclxuXHRcdH0gKTtcclxuXHR9ICkgKTtcclxuXHJcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==