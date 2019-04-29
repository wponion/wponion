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
  var wphooks = window.wponion.hooks,
      $wpcc = wp.customize.controlConstructor,
      $wpc = wp.customize.Control,
      $wpoch = {
    values: function values($values) {
      $.each($values, function ($k, $vs) {
        $.each($vs, function ($e, $ep) {
          $values = $ep;
        });
      });
      return $values;
    },
    save: function save($instance) {
      var $value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (window.wponion._.isUndefined($value)) {
        $value = $wpoch.values($instance.container.find(':input').serializeJSON());
      }

      $instance.setting.set($value);
    }
  };
  /**
   * Field Clone.
   */

  $wpcc.wponion_field_clone = $wpc.extend({
    ready: function ready() {
      var _this = this;

      this.container.on('change', function () {
        return $wpoch.save(_this);
      });
      this.container.on('wponion_field_updated', function () {
        return $wpoch.save(_this);
      });
    }
  });
  $wpcc.wponion_field_fieldset = $wpcc.wponion_field_clone;
  $wpcc.wponion_field_accordion = $wpcc.wponion_field_clone;
  $wpcc.wponion_field_group = $wpcc.wponion_field_clone;
  $wpcc.wponion_field_icon_picker = $wpcc.wponion_field_clone;
  /**
   * Field Checkbox.
   */

  $wpcc.wponion_field_checkbox = $wpc.extend({
    ready: function ready() {
      var _this2 = this;

      this.container.on('change', function () {
        return $wpoch.save(_this2);
      });
    }
  });
  $wpcc.wponion_field_radio = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_button_set = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_color_picker = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_input_group = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_font_picker = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_date_picker = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_image_select = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_image = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_gallery = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_wp_link = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_background = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_color_group = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_link_color = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_spacing = $wpcc.wponion_field_checkbox;
  $wpcc.wponion_field_dimensions = $wpcc.wponion_field_checkbox;
  /**
   * Field Sorter.
   */

  $wpcc.wponion_field_sorter = $wpc.extend({
    ready: function ready() {
      var _this3 = this;

      this.container.on('wponion_field_updated', function () {
        return $wpoch.save(_this3);
      });
    }
  });
  /**
   * Key Value Pair.
   */

  $wpcc.wponion_field_key_value = $wpc.extend({
    ready: function ready() {
      var _this4 = this;

      this.container.on('change', ':input', function () {
        return $wpoch.save(_this4);
      });
      this.container.on('wponion_field_updated', function () {
        return $wpoch.save(_this4);
      });
    }
  });
  /**
   * Inits Customizer Instance.
   */

  wphooks.addAction('wponion_init', 'wponion_core', function () {
    $('.wponion-module-customizer-framework.wponion-framework').each(function () {});
  });
})(window, document, jQuery, wp);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dwb25pb24tY3VzdG9taXplci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJkb2N1bWVudCIsIiQiLCJ3cCIsIndwaG9va3MiLCJ3cG9uaW9uIiwiaG9va3MiLCIkd3BjYyIsImN1c3RvbWl6ZSIsImNvbnRyb2xDb25zdHJ1Y3RvciIsIiR3cGMiLCJDb250cm9sIiwiJHdwb2NoIiwidmFsdWVzIiwiJHZhbHVlcyIsImVhY2giLCIkayIsIiR2cyIsIiRlIiwiJGVwIiwic2F2ZSIsIiRpbnN0YW5jZSIsIiR2YWx1ZSIsInVuZGVmaW5lZCIsIl8iLCJpc1VuZGVmaW5lZCIsImNvbnRhaW5lciIsImZpbmQiLCJzZXJpYWxpemVKU09OIiwic2V0dGluZyIsInNldCIsIndwb25pb25fZmllbGRfY2xvbmUiLCJleHRlbmQiLCJyZWFkeSIsIm9uIiwid3Bvbmlvbl9maWVsZF9maWVsZHNldCIsIndwb25pb25fZmllbGRfYWNjb3JkaW9uIiwid3Bvbmlvbl9maWVsZF9ncm91cCIsIndwb25pb25fZmllbGRfaWNvbl9waWNrZXIiLCJ3cG9uaW9uX2ZpZWxkX2NoZWNrYm94Iiwid3Bvbmlvbl9maWVsZF9yYWRpbyIsIndwb25pb25fZmllbGRfYnV0dG9uX3NldCIsIndwb25pb25fZmllbGRfY29sb3JfcGlja2VyIiwid3Bvbmlvbl9maWVsZF9pbnB1dF9ncm91cCIsIndwb25pb25fZmllbGRfZm9udF9waWNrZXIiLCJ3cG9uaW9uX2ZpZWxkX2RhdGVfcGlja2VyIiwid3Bvbmlvbl9maWVsZF9pbWFnZV9zZWxlY3QiLCJ3cG9uaW9uX2ZpZWxkX2ltYWdlIiwid3Bvbmlvbl9maWVsZF9nYWxsZXJ5Iiwid3Bvbmlvbl9maWVsZF93cF9saW5rIiwid3Bvbmlvbl9maWVsZF9iYWNrZ3JvdW5kIiwid3Bvbmlvbl9maWVsZF9jb2xvcl9ncm91cCIsIndwb25pb25fZmllbGRfbGlua19jb2xvciIsIndwb25pb25fZmllbGRfc3BhY2luZyIsIndwb25pb25fZmllbGRfZGltZW5zaW9ucyIsIndwb25pb25fZmllbGRfc29ydGVyIiwid3Bvbmlvbl9maWVsZF9rZXlfdmFsdWUiLCJhZGRBY3Rpb24iLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxDQUFFLFVBQUVBLE1BQUYsRUFBVUMsUUFBVixFQUFvQkMsQ0FBcEIsRUFBdUJDLEVBQXZCLEVBQStCO0FBQ2hDLE1BQUlDLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxPQUFQLENBQWVDLEtBQTdCO0FBQUEsTUFDQ0MsS0FBSyxHQUFLSixFQUFFLENBQUNLLFNBQUgsQ0FBYUMsa0JBRHhCO0FBQUEsTUFFQ0MsSUFBSSxHQUFNUCxFQUFFLENBQUNLLFNBQUgsQ0FBYUcsT0FGeEI7QUFBQSxNQUdDQyxNQUFNLEdBQUk7QUFDVEMsVUFBTSxFQUFFLGdCQUFFQyxPQUFGLEVBQWU7QUFD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QUFHQSxHQUpEO0FBTUEsQ0F4RkQsRUF3RktmLE1BeEZMLEVBd0ZhQyxRQXhGYixFQXdGdUJ5RCxNQXhGdkIsRUF3RitCdkQsRUF4Ri9CLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3dwb25pb24tY3VzdG9taXplci5qc1wiKTtcbiIsIiggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0bGV0IHdwaG9va3MgPSB3aW5kb3cud3Bvbmlvbi5ob29rcyxcblx0XHQkd3BjYyAgID0gd3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvcixcblx0XHQkd3BjICAgID0gd3AuY3VzdG9taXplLkNvbnRyb2wsXG5cdFx0JHdwb2NoICA9IHtcblx0XHRcdHZhbHVlczogKCAkdmFsdWVzICkgPT4ge1xuXHRcdFx0XHQkLmVhY2goICR2YWx1ZXMsIGZ1bmN0aW9uKCAkaywgJHZzICkge1xuXHRcdFx0XHRcdCQuZWFjaCggJHZzLCBmdW5jdGlvbiggJGUsICRlcCApIHtcblx0XHRcdFx0XHRcdCR2YWx1ZXMgPSAkZXA7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHJldHVybiAkdmFsdWVzO1xuXHRcdFx0fSxcblx0XHRcdHNhdmU6ICggJGluc3RhbmNlLCAkdmFsdWUgPSB1bmRlZmluZWQgKSA9PiB7XG5cdFx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkdmFsdWUgKSApIHtcblx0XHRcdFx0XHQkdmFsdWUgPSAkd3BvY2gudmFsdWVzKCAkaW5zdGFuY2UuY29udGFpbmVyLmZpbmQoICc6aW5wdXQnIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC5zZXJpYWxpemVKU09OKCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkaW5zdGFuY2Uuc2V0dGluZy5zZXQoICR2YWx1ZSApO1xuXHRcdFx0fSxcblx0XHR9O1xuXG5cdC8qKlxuXHQgKiBGaWVsZCBDbG9uZS5cblx0ICovXG5cdCR3cGNjLndwb25pb25fZmllbGRfY2xvbmUgPSAkd3BjLmV4dGVuZCgge1xuXHRcdHJlYWR5OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLm9uKCAnY2hhbmdlJywgKCkgPT4gJHdwb2NoLnNhdmUoIHRoaXMgKSApO1xuXHRcdFx0dGhpcy5jb250YWluZXIub24oICd3cG9uaW9uX2ZpZWxkX3VwZGF0ZWQnLCAoKSA9PiAkd3BvY2guc2F2ZSggdGhpcyApICk7XG5cdFx0fVxuXHR9ICk7XG5cdCR3cGNjLndwb25pb25fZmllbGRfZmllbGRzZXQgICAgPSAkd3BjYy53cG9uaW9uX2ZpZWxkX2Nsb25lO1xuXHQkd3BjYy53cG9uaW9uX2ZpZWxkX2FjY29yZGlvbiAgID0gJHdwY2Mud3Bvbmlvbl9maWVsZF9jbG9uZTtcblx0JHdwY2Mud3Bvbmlvbl9maWVsZF9ncm91cCAgICAgICA9ICR3cGNjLndwb25pb25fZmllbGRfY2xvbmU7XG5cdCR3cGNjLndwb25pb25fZmllbGRfaWNvbl9waWNrZXIgPSAkd3BjYy53cG9uaW9uX2ZpZWxkX2Nsb25lO1xuXG5cdC8qKlxuXHQgKiBGaWVsZCBDaGVja2JveC5cblx0ICovXG5cdCR3cGNjLndwb25pb25fZmllbGRfY2hlY2tib3ggPSAkd3BjLmV4dGVuZCgge1xuXHRcdHJlYWR5OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLm9uKCAnY2hhbmdlJywgKCkgPT4gJHdwb2NoLnNhdmUoIHRoaXMgKSApO1xuXHRcdH0sXG5cdH0gKTtcblx0JHdwY2Mud3Bvbmlvbl9maWVsZF9yYWRpbyAgICAgICAgPSAkd3BjYy53cG9uaW9uX2ZpZWxkX2NoZWNrYm94O1xuXHQkd3BjYy53cG9uaW9uX2ZpZWxkX2J1dHRvbl9zZXQgICA9ICR3cGNjLndwb25pb25fZmllbGRfY2hlY2tib3g7XG5cdCR3cGNjLndwb25pb25fZmllbGRfY29sb3JfcGlja2VyID0gJHdwY2Mud3Bvbmlvbl9maWVsZF9jaGVja2JveDtcblx0JHdwY2Mud3Bvbmlvbl9maWVsZF9pbnB1dF9ncm91cCAgPSAkd3BjYy53cG9uaW9uX2ZpZWxkX2NoZWNrYm94O1xuXHQkd3BjYy53cG9uaW9uX2ZpZWxkX2ZvbnRfcGlja2VyICA9ICR3cGNjLndwb25pb25fZmllbGRfY2hlY2tib3g7XG5cdCR3cGNjLndwb25pb25fZmllbGRfZGF0ZV9waWNrZXIgID0gJHdwY2Mud3Bvbmlvbl9maWVsZF9jaGVja2JveDtcblx0JHdwY2Mud3Bvbmlvbl9maWVsZF9pbWFnZV9zZWxlY3QgPSAkd3BjYy53cG9uaW9uX2ZpZWxkX2NoZWNrYm94O1xuXHQkd3BjYy53cG9uaW9uX2ZpZWxkX2ltYWdlICAgICAgICA9ICR3cGNjLndwb25pb25fZmllbGRfY2hlY2tib3g7XG5cdCR3cGNjLndwb25pb25fZmllbGRfZ2FsbGVyeSAgICAgID0gJHdwY2Mud3Bvbmlvbl9maWVsZF9jaGVja2JveDtcblx0JHdwY2Mud3Bvbmlvbl9maWVsZF93cF9saW5rICAgICAgPSAkd3BjYy53cG9uaW9uX2ZpZWxkX2NoZWNrYm94O1xuXHQkd3BjYy53cG9uaW9uX2ZpZWxkX2JhY2tncm91bmQgICA9ICR3cGNjLndwb25pb25fZmllbGRfY2hlY2tib3g7XG5cdCR3cGNjLndwb25pb25fZmllbGRfY29sb3JfZ3JvdXAgID0gJHdwY2Mud3Bvbmlvbl9maWVsZF9jaGVja2JveDtcblx0JHdwY2Mud3Bvbmlvbl9maWVsZF9saW5rX2NvbG9yICAgPSAkd3BjYy53cG9uaW9uX2ZpZWxkX2NoZWNrYm94O1xuXHQkd3BjYy53cG9uaW9uX2ZpZWxkX3NwYWNpbmcgICAgICA9ICR3cGNjLndwb25pb25fZmllbGRfY2hlY2tib3g7XG5cdCR3cGNjLndwb25pb25fZmllbGRfZGltZW5zaW9ucyAgID0gJHdwY2Mud3Bvbmlvbl9maWVsZF9jaGVja2JveDtcblxuXHQvKipcblx0ICogRmllbGQgU29ydGVyLlxuXHQgKi9cblx0JHdwY2Mud3Bvbmlvbl9maWVsZF9zb3J0ZXIgPSAkd3BjLmV4dGVuZCgge1xuXHRcdHJlYWR5OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLm9uKCAnd3Bvbmlvbl9maWVsZF91cGRhdGVkJywgKCkgPT4gJHdwb2NoLnNhdmUoIHRoaXMgKSApO1xuXHRcdH1cblx0fSApO1xuXG5cdC8qKlxuXHQgKiBLZXkgVmFsdWUgUGFpci5cblx0ICovXG5cdCR3cGNjLndwb25pb25fZmllbGRfa2V5X3ZhbHVlID0gJHdwYy5leHRlbmQoIHtcblx0XHRyZWFkeTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5vbiggJ2NoYW5nZScsICc6aW5wdXQnLCAoKSA9PiAkd3BvY2guc2F2ZSggdGhpcyApICk7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5vbiggJ3dwb25pb25fZmllbGRfdXBkYXRlZCcsICgpID0+ICR3cG9jaC5zYXZlKCB0aGlzICkgKTtcblx0XHR9XG5cdH0gKTtcblxuXHQvKipcblx0ICogSW5pdHMgQ3VzdG9taXplciBJbnN0YW5jZS5cblx0ICovXG5cdHdwaG9va3MuYWRkQWN0aW9uKCAnd3Bvbmlvbl9pbml0JywgJ3dwb25pb25fY29yZScsICggKCkgPT4ge1xuXHRcdCQoICcud3Bvbmlvbi1tb2R1bGUtY3VzdG9taXplci1mcmFtZXdvcmsud3Bvbmlvbi1mcmFtZXdvcmsnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cblx0XHR9ICk7XG5cdH0gKSApO1xuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=