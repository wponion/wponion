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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/wponion-core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-parse-args/index.js":
/*!*********************************************!*\
  !*** ./node_modules/js-parse-args/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JS_Parse_Args = function () {
	function JS_Parse_Args() {
		var $args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var $defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var $is_nested = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		_classCallCheck(this, JS_Parse_Args);

		this.args = $args;
		this.defaults = $defaults;
		this.nested = $is_nested;
		this.parse();
		return this.args;
	}

	_createClass(JS_Parse_Args, [{
		key: 'parse',
		value: function parse() {
			for (var $_key in this.defaults) {
				if (true === this.nested && _typeof(this.defaults[$_key]) === 'object') {
					this.args[$_key] = new JS_Parse_Args(this.args[$_key], this.defaults[$_key], this.nested);
				} else {
					if (typeof this.args[$_key] === 'undefined') {
						this.args[$_key] = this.defaults[$_key];
					}
				}
			}
		}
	}]);

	return JS_Parse_Args;
}();

exports.default = function () {
	var $args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var $defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var $is_deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	return new JS_Parse_Args($args, $defaults, $is_deep);
};

/***/ }),

/***/ "./node_modules/locutus/php/array/array_merge.js":
/*!*******************************************************!*\
  !*** ./node_modules/locutus/php/array/array_merge.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function array_merge() {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/array_merge/
  // original by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Nate
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //    input by: josh
  //   example 1: var $arr1 = {"color": "red", 0: 2, 1: 4}
  //   example 1: var $arr2 = {0: "a", 1: "b", "color": "green", "shape": "trapezoid", 2: 4}
  //   example 1: array_merge($arr1, $arr2)
  //   returns 1: {"color": "green", 0: 2, 1: 4, 2: "a", 3: "b", "shape": "trapezoid", 4: 4}
  //   example 2: var $arr1 = []
  //   example 2: var $arr2 = {1: "data"}
  //   example 2: array_merge($arr1, $arr2)
  //   returns 2: {0: "data"}

  var args = Array.prototype.slice.call(arguments);
  var argl = args.length;
  var arg;
  var retObj = {};
  var k = '';
  var argil = 0;
  var j = 0;
  var i = 0;
  var ct = 0;
  var toStr = Object.prototype.toString;
  var retArr = true;

  for (i = 0; i < argl; i++) {
    if (toStr.call(args[i]) !== '[object Array]') {
      retArr = false;
      break;
    }
  }

  if (retArr) {
    retArr = [];
    for (i = 0; i < argl; i++) {
      retArr = retArr.concat(args[i]);
    }
    return retArr;
  }

  for (i = 0, ct = 0; i < argl; i++) {
    arg = args[i];
    if (toStr.call(arg) === '[object Array]') {
      for (j = 0, argil = arg.length; j < argil; j++) {
        retObj[ct++] = arg[j];
      }
    } else {
      for (k in arg) {
        if (arg.hasOwnProperty(k)) {
          if (parseInt(k, 10) + '' === k) {
            retObj[ct++] = arg[k];
          } else {
            retObj[k] = arg[k];
          }
        }
      }
    }
  }

  return retObj;
};
//# sourceMappingURL=array_merge.js.map

/***/ }),

/***/ "./node_modules/locutus/php/array/array_merge_recursive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/locutus/php/array/array_merge_recursive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function array_merge_recursive(arr1, arr2) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/array_merge_recursive/
  // original by: Subhasis Deb
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  //   example 1: var $arr1 = {'color': {'favorite': 'red'}, 0: 5}
  //   example 1: var $arr2 = {0: 10, 'color': {'favorite': 'green', 0: 'blue'}}
  //   example 1: array_merge_recursive($arr1, $arr2)
  //   returns 1: {'color': {'favorite': {0: 'red', 1: 'green'}, 0: 'blue'}, 1: 5, 1: 10}
  //        test: skip-1

  var arrayMerge = __webpack_require__(/*! ../array/array_merge */ "./node_modules/locutus/php/array/array_merge.js");
  var idx = '';

  if (arr1 && Object.prototype.toString.call(arr1) === '[object Array]' && arr2 && Object.prototype.toString.call(arr2) === '[object Array]') {
    for (idx in arr2) {
      arr1.push(arr2[idx]);
    }
  } else if (arr1 && arr1 instanceof Object && arr2 && arr2 instanceof Object) {
    for (idx in arr2) {
      if (idx in arr1) {
        if (_typeof(arr1[idx]) === 'object' && (typeof arr2 === 'undefined' ? 'undefined' : _typeof(arr2)) === 'object') {
          arr1[idx] = arrayMerge(arr1[idx], arr2[idx]);
        } else {
          arr1[idx] = arr2[idx];
        }
      } else {
        arr1[idx] = arr2[idx];
      }
    }
  }

  return arr1;
};
//# sourceMappingURL=array_merge_recursive.js.map

/***/ }),

/***/ "./node_modules/locutus/php/array/array_values.js":
/*!********************************************************!*\
  !*** ./node_modules/locutus/php/array/array_values.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function array_values(input) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/array_values/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: array_values( {firstname: 'Kevin', surname: 'van Zonneveld'} )
  //   returns 1: [ 'Kevin', 'van Zonneveld' ]

  var tmpArr = [];
  var key = '';

  for (key in input) {
    tmpArr[tmpArr.length] = input[key];
  }

  return tmpArr;
};
//# sourceMappingURL=array_values.js.map

/***/ }),

/***/ "./node_modules/locutus/php/array/count.js":
/*!*************************************************!*\
  !*** ./node_modules/locutus/php/array/count.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function count(mixedVar, mode) {
  //  discuss at: http://locutus.io/php/count/
  // original by: Kevin van Zonneveld (http://kvz.io)
  //    input by: Waldo Malqui Silva (http://waldo.malqui.info)
  //    input by: merabi
  // bugfixed by: Soren Hansen
  // bugfixed by: Olivier Louvignes (http://mg-crea.com/)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: count([[0,0],[0,-4]], 'COUNT_RECURSIVE')
  //   returns 1: 6
  //   example 2: count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE')
  //   returns 2: 6

  var key;
  var cnt = 0;

  if (mixedVar === null || typeof mixedVar === 'undefined') {
    return 0;
  } else if (mixedVar.constructor !== Array && mixedVar.constructor !== Object) {
    return 1;
  }

  if (mode === 'COUNT_RECURSIVE') {
    mode = 1;
  }
  if (mode !== 1) {
    mode = 0;
  }

  for (key in mixedVar) {
    if (mixedVar.hasOwnProperty(key)) {
      cnt++;
      if (mode === 1 && mixedVar[key] && (mixedVar[key].constructor === Array || mixedVar[key].constructor === Object)) {
        cnt += count(mixedVar[key], 1);
      }
    }
  }

  return cnt;
};
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "./node_modules/locutus/php/array/in_array.js":
/*!****************************************************!*\
  !*** ./node_modules/locutus/php/array/in_array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function in_array(needle, haystack, argStrict) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/in_array/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: vlado houba
  // improved by: Jonas Sciangula Street (Joni2Back)
  //    input by: Billy
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld'])
  //   returns 1: true
  //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'})
  //   returns 2: false
  //   example 3: in_array(1, ['1', '2', '3'])
  //   example 3: in_array(1, ['1', '2', '3'], false)
  //   returns 3: true
  //   returns 3: true
  //   example 4: in_array(1, ['1', '2', '3'], true)
  //   returns 4: false

  var key = '';
  var strict = !!argStrict;

  // we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] === ndl)
  // in just one for, in order to improve the performance
  // deciding wich type of comparation will do before walk array
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        // eslint-disable-line eqeqeq
        return true;
      }
    }
  }

  return false;
};
//# sourceMappingURL=in_array.js.map

/***/ }),

/***/ "./node_modules/locutus/php/datetime/microtime.js":
/*!********************************************************!*\
  !*** ./node_modules/locutus/php/datetime/microtime.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function microtime(getAsFloat) {
  //  discuss at: http://locutus.io/php/microtime/
  // original by: Paulo Freitas
  // improved by: Dumitru Uzun (http://duzun.me)
  //   example 1: var $timeStamp = microtime(true)
  //   example 1: $timeStamp > 1000000000 && $timeStamp < 2000000000
  //   returns 1: true
  //   example 2: /^0\.[0-9]{1,6} [0-9]{10,10}$/.test(microtime())
  //   returns 2: true

  var s;
  var now;
  if (typeof performance !== 'undefined' && performance.now) {
    now = (performance.now() + performance.timing.navigationStart) / 1e3;
    if (getAsFloat) {
      return now;
    }

    // Math.round(now)
    s = now | 0;

    return Math.round((now - s) * 1e6) / 1e6 + ' ' + s;
  } else {
    now = (Date.now ? Date.now() : new Date().getTime()) / 1e3;
    if (getAsFloat) {
      return now;
    }

    // Math.round(now)
    s = now | 0;

    return Math.round((now - s) * 1e3) / 1e3 + ' ' + s;
  }
};
//# sourceMappingURL=microtime.js.map

/***/ }),

/***/ "./node_modules/locutus/php/datetime/time.js":
/*!***************************************************!*\
  !*** ./node_modules/locutus/php/datetime/time.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function time() {
  //  discuss at: http://locutus.io/php/time/
  // original by: GeekFG (http://geekfg.blogspot.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: metjay
  // improved by: HKM
  //   example 1: var $timeStamp = time()
  //   example 1: var $result = $timeStamp > 1000000000 && $timeStamp < 2000000000
  //   returns 1: true

  return Math.floor(new Date().getTime() / 1000);
};
//# sourceMappingURL=time.js.map

/***/ }),

/***/ "./node_modules/locutus/php/funchand/call_user_func.js":
/*!*************************************************************!*\
  !*** ./node_modules/locutus/php/funchand/call_user_func.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function call_user_func(cb, parameters) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/call_user_func/
  // original by: Brett Zamir (http://brett-zamir.me)
  // improved by: Diplom@t (http://difane.com/)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //      note 1: Depends on call_user_func_array which in turn depends on the `cb` that is passed,
  //      note 1: this function can use `eval`.
  //      note 1: The `eval` input is however checked to only allow valid function names,
  //      note 1: So it should not be unsafer than uses without eval (seeing as you can)
  //      note 1: already pass any function to be executed here.
  //   example 1: call_user_func('isNaN', 'a')
  //   returns 1: true

  var callUserFuncArray = __webpack_require__(/*! ../funchand/call_user_func_array */ "./node_modules/locutus/php/funchand/call_user_func_array.js");
  parameters = Array.prototype.slice.call(arguments, 1);
  return callUserFuncArray(cb, parameters);
};
//# sourceMappingURL=call_user_func.js.map

/***/ }),

/***/ "./node_modules/locutus/php/funchand/call_user_func_array.js":
/*!*******************************************************************!*\
  !*** ./node_modules/locutus/php/funchand/call_user_func_array.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function call_user_func_array(cb, parameters) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/call_user_func_array/
  // original by: Thiago Mata (http://thiagomata.blog.com)
  //  revised by: Jon Hohle
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Diplom@t (http://difane.com/)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //      note 1: Depending on the `cb` that is passed,
  //      note 1: this function can use `eval` and/or `new Function`.
  //      note 1: The `eval` input is however checked to only allow valid function names,
  //      note 1: So it should not be unsafer than uses without eval (seeing as you can)
  //      note 1: already pass any function to be executed here.
  //   example 1: call_user_func_array('isNaN', ['a'])
  //   returns 1: true
  //   example 2: call_user_func_array('isNaN', [1])
  //   returns 2: false

  var $global = typeof window !== 'undefined' ? window : global;
  var func;
  var scope = null;

  var validJSFunctionNamePattern = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;

  if (typeof cb === 'string') {
    if (typeof $global[cb] === 'function') {
      func = $global[cb];
    } else if (cb.match(validJSFunctionNamePattern)) {
      func = new Function(null, 'return ' + cb)(); // eslint-disable-line no-new-func
    }
  } else if (Object.prototype.toString.call(cb) === '[object Array]') {
    if (typeof cb[0] === 'string') {
      if (cb[0].match(validJSFunctionNamePattern)) {
        func = eval(cb[0] + "['" + cb[1] + "']"); // eslint-disable-line no-eval
      }
    } else {
      func = cb[0][cb[1]];
    }

    if (typeof cb[0] === 'string') {
      if (typeof $global[cb[0]] === 'function') {
        scope = $global[cb[0]];
      } else if (cb[0].match(validJSFunctionNamePattern)) {
        scope = eval(cb[0]); // eslint-disable-line no-eval
      }
    } else if (_typeof(cb[0]) === 'object') {
      scope = cb[0];
    }
  } else if (typeof cb === 'function') {
    func = cb;
  }

  if (typeof func !== 'function') {
    throw new Error(func + ' is not a valid function');
  }

  return func.apply(scope, parameters);
};
//# sourceMappingURL=call_user_func_array.js.map

/***/ }),

/***/ "./node_modules/locutus/php/funchand/function_exists.js":
/*!**************************************************************!*\
  !*** ./node_modules/locutus/php/funchand/function_exists.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function function_exists(funcName) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/function_exists/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Steve Clay
  // improved by: Legaev Andrey
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: function_exists('isFinite')
  //   returns 1: true
  //        test: skip-1

  var $global = typeof window !== 'undefined' ? window : global;

  if (typeof funcName === 'string') {
    funcName = $global[funcName];
  }

  return typeof funcName === 'function';
};
//# sourceMappingURL=function_exists.js.map

/***/ }),

/***/ "./node_modules/locutus/php/info/ini_get.js":
/*!**************************************************!*\
  !*** ./node_modules/locutus/php/info/ini_get.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ini_get(varname) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/ini_get/
  // original by: Brett Zamir (http://brett-zamir.me)
  //      note 1: The ini values must be set by ini_set or manually within an ini file
  //   example 1: ini_set('date.timezone', 'Asia/Hong_Kong')
  //   example 1: ini_get('date.timezone')
  //   returns 1: 'Asia/Hong_Kong'

  var $global = typeof window !== 'undefined' ? window : global;
  $global.$locutus = $global.$locutus || {};
  var $locutus = $global.$locutus;
  $locutus.php = $locutus.php || {};
  $locutus.php.ini = $locutus.php.ini || {};

  if ($locutus.php.ini[varname] && $locutus.php.ini[varname].local_value !== undefined) {
    if ($locutus.php.ini[varname].local_value === null) {
      return '';
    }
    return $locutus.php.ini[varname].local_value;
  }

  return '';
};
//# sourceMappingURL=ini_get.js.map

/***/ }),

/***/ "./node_modules/locutus/php/strings/explode.js":
/*!*****************************************************!*\
  !*** ./node_modules/locutus/php/strings/explode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function explode(delimiter, string, limit) {
  //  discuss at: http://locutus.io/php/explode/
  // original by: Kevin van Zonneveld (http://kvz.io)
  //   example 1: explode(' ', 'Kevin van Zonneveld')
  //   returns 1: [ 'Kevin', 'van', 'Zonneveld' ]

  if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') {
    return null;
  }
  if (delimiter === '' || delimiter === false || delimiter === null) {
    return false;
  }
  if (typeof delimiter === 'function' || (typeof delimiter === 'undefined' ? 'undefined' : _typeof(delimiter)) === 'object' || typeof string === 'function' || (typeof string === 'undefined' ? 'undefined' : _typeof(string)) === 'object') {
    return {
      0: ''
    };
  }
  if (delimiter === true) {
    delimiter = '1';
  }

  // Here we go...
  delimiter += '';
  string += '';

  var s = string.split(delimiter);

  if (typeof limit === 'undefined') return s;

  // Support for limit
  if (limit === 0) limit = 1;

  // Positive limit
  if (limit > 0) {
    if (limit >= s.length) {
      return s;
    }
    return s.slice(0, limit - 1).concat([s.slice(limit - 1).join(delimiter)]);
  }

  // Negative limit
  if (-limit >= s.length) {
    return [];
  }

  s.splice(s.length + limit);
  return s;
};
//# sourceMappingURL=explode.js.map

/***/ }),

/***/ "./node_modules/locutus/php/strings/implode.js":
/*!*****************************************************!*\
  !*** ./node_modules/locutus/php/strings/implode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function implode(glue, pieces) {
  //  discuss at: http://locutus.io/php/implode/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Waldo Malqui Silva (http://waldo.malqui.info)
  // improved by: Itsacon (http://www.itsacon.net/)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: implode(' ', ['Kevin', 'van', 'Zonneveld'])
  //   returns 1: 'Kevin van Zonneveld'
  //   example 2: implode(' ', {first:'Kevin', last: 'van Zonneveld'})
  //   returns 2: 'Kevin van Zonneveld'

  var i = '';
  var retVal = '';
  var tGlue = '';

  if (arguments.length === 1) {
    pieces = glue;
    glue = '';
  }

  if ((typeof pieces === 'undefined' ? 'undefined' : _typeof(pieces)) === 'object') {
    if (Object.prototype.toString.call(pieces) === '[object Array]') {
      return pieces.join(glue);
    }
    for (i in pieces) {
      retVal += tGlue + pieces[i];
      tGlue = glue;
    }
    return retVal;
  }

  return pieces;
};
//# sourceMappingURL=implode.js.map

/***/ }),

/***/ "./node_modules/locutus/php/strings/md5.js":
/*!*************************************************!*\
  !*** ./node_modules/locutus/php/strings/md5.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function md5(str) {
  //  discuss at: http://locutus.io/php/md5/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Michael White (http://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (http://kvz.io)
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  //      note 1: Keep in mind that in accordance with PHP, the whole string is buffered and then
  //      note 1: hashed. If available, we'd recommend using Node's native crypto modules directly
  //      note 1: in a steaming fashion for faster and more efficient hashing
  //   example 1: md5('Kevin van Zonneveld')
  //   returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'

  var hash;
  try {
    var crypto = __webpack_require__(/*! crypto */ "crypto");
    var md5sum = crypto.createHash('md5');
    md5sum.update(str);
    hash = md5sum.digest('hex');
  } catch (e) {
    hash = undefined;
  }

  if (hash !== undefined) {
    return hash;
  }

  var utf8Encode = __webpack_require__(/*! ../xml/utf8_encode */ "./node_modules/locutus/php/xml/utf8_encode.js");
  var xl;

  var _rotateLeft = function _rotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  };

  var _addUnsigned = function _addUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  };

  var _F = function _F(x, y, z) {
    return x & y | ~x & z;
  };
  var _G = function _G(x, y, z) {
    return x & z | y & ~z;
  };
  var _H = function _H(x, y, z) {
    return x ^ y ^ z;
  };
  var _I = function _I(x, y, z) {
    return y ^ (x | ~z);
  };

  var _FF = function _FF(a, b, c, d, x, s, ac) {
    a = _addUnsigned(a, _addUnsigned(_addUnsigned(_F(b, c, d), x), ac));
    return _addUnsigned(_rotateLeft(a, s), b);
  };

  var _GG = function _GG(a, b, c, d, x, s, ac) {
    a = _addUnsigned(a, _addUnsigned(_addUnsigned(_G(b, c, d), x), ac));
    return _addUnsigned(_rotateLeft(a, s), b);
  };

  var _HH = function _HH(a, b, c, d, x, s, ac) {
    a = _addUnsigned(a, _addUnsigned(_addUnsigned(_H(b, c, d), x), ac));
    return _addUnsigned(_rotateLeft(a, s), b);
  };

  var _II = function _II(a, b, c, d, x, s, ac) {
    a = _addUnsigned(a, _addUnsigned(_addUnsigned(_I(b, c, d), x), ac));
    return _addUnsigned(_rotateLeft(a, s), b);
  };

  var _convertToWordArray = function _convertToWordArray(str) {
    var lWordCount;
    var lMessageLength = str.length;
    var lNumberOfWordsTemp1 = lMessageLength + 8;
    var lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - lNumberOfWordsTemp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
    var lWordArray = new Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | str.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };

  var _wordToHex = function _wordToHex(lValue) {
    var wordToHexValue = '';
    var wordToHexValueTemp = '';
    var lByte;
    var lCount;

    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      wordToHexValueTemp = '0' + lByte.toString(16);
      wordToHexValue = wordToHexValue + wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2);
    }
    return wordToHexValue;
  };

  var x = [];
  var k;
  var AA;
  var BB;
  var CC;
  var DD;
  var a;
  var b;
  var c;
  var d;
  var S11 = 7;
  var S12 = 12;
  var S13 = 17;
  var S14 = 22;
  var S21 = 5;
  var S22 = 9;
  var S23 = 14;
  var S24 = 20;
  var S31 = 4;
  var S32 = 11;
  var S33 = 16;
  var S34 = 23;
  var S41 = 6;
  var S42 = 10;
  var S43 = 15;
  var S44 = 21;

  str = utf8Encode(str);
  x = _convertToWordArray(str);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  xl = x.length;
  for (k = 0; k < xl; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = _addUnsigned(a, AA);
    b = _addUnsigned(b, BB);
    c = _addUnsigned(c, CC);
    d = _addUnsigned(d, DD);
  }

  var temp = _wordToHex(a) + _wordToHex(b) + _wordToHex(c) + _wordToHex(d);

  return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ "./node_modules/locutus/php/strings/parse_str.js":
/*!*******************************************************!*\
  !*** ./node_modules/locutus/php/strings/parse_str.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parse_str(str, array) {
  // eslint-disable-line camelcase
  //       discuss at: http://locutus.io/php/parse_str/
  //      original by: Cagri Ekin
  //      improved by: Michael White (http://getsprink.com)
  //      improved by: Jack
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: stag019
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: MIO_KODUKI (http://mio-koduki.blogspot.com/)
  // reimplemented by: stag019
  //         input by: Dreamer
  //         input by: Zaide (http://zaidesthings.com/)
  //         input by: David Pesta (http://davidpesta.com/)
  //         input by: jeicquest
  //      bugfixed by: Rafał Kukawski
  //           note 1: When no argument is specified, will put variables in global scope.
  //           note 1: When a particular argument has been passed, and the
  //           note 1: returned value is different parse_str of PHP.
  //           note 1: For example, a=b=c&d====c
  //        example 1: var $arr = {}
  //        example 1: parse_str('first=foo&second=bar', $arr)
  //        example 1: var $result = $arr
  //        returns 1: { first: 'foo', second: 'bar' }
  //        example 2: var $arr = {}
  //        example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', $arr)
  //        example 2: var $result = $arr
  //        returns 2: { str_a: "Jack and Jill didn't see the well." }
  //        example 3: var $abc = {3:'a'}
  //        example 3: parse_str('a[b]["c"]=def&a[q]=t+5', $abc)
  //        example 3: var $result = $abc
  //        returns 3: {"3":"a","a":{"b":{"c":"def"},"q":"t 5"}}
  //        example 4: var $arr = {}
  //        example 4: parse_str('a[][]=value', $arr)
  //        example 4: var $result = $arr
  //        returns 4: {"a":{"0":{"0":"value"}}}
  //        example 5: var $arr = {}
  //        example 5: parse_str('a=1&a[]=2', $arr)
  //        example 5: var $result = $arr
  //        returns 5: {"a":{"0":"2"}}

  var strArr = String(str).replace(/^&/, '').replace(/&$/, '').split('&');
  var sal = strArr.length;
  var i;
  var j;
  var ct;
  var p;
  var lastObj;
  var obj;
  var chr;
  var tmp;
  var key;
  var value;
  var postLeftBracketPos;
  var keys;
  var keysLen;

  var _fixStr = function _fixStr(str) {
    return decodeURIComponent(str.replace(/\+/g, '%20'));
  };

  var $global = typeof window !== 'undefined' ? window : global;
  $global.$locutus = $global.$locutus || {};
  var $locutus = $global.$locutus;
  $locutus.php = $locutus.php || {};

  if (!array) {
    array = $global;
  }

  for (i = 0; i < sal; i++) {
    tmp = strArr[i].split('=');
    key = _fixStr(tmp[0]);
    value = tmp.length < 2 ? '' : _fixStr(tmp[1]);

    while (key.charAt(0) === ' ') {
      key = key.slice(1);
    }

    if (key.indexOf('\x00') > -1) {
      key = key.slice(0, key.indexOf('\x00'));
    }

    if (key && key.charAt(0) !== '[') {
      keys = [];
      postLeftBracketPos = 0;

      for (j = 0; j < key.length; j++) {
        if (key.charAt(j) === '[' && !postLeftBracketPos) {
          postLeftBracketPos = j + 1;
        } else if (key.charAt(j) === ']') {
          if (postLeftBracketPos) {
            if (!keys.length) {
              keys.push(key.slice(0, postLeftBracketPos - 1));
            }

            keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos));
            postLeftBracketPos = 0;

            if (key.charAt(j + 1) !== '[') {
              break;
            }
          }
        }
      }

      if (!keys.length) {
        keys = [key];
      }

      for (j = 0; j < keys[0].length; j++) {
        chr = keys[0].charAt(j);

        if (chr === ' ' || chr === '.' || chr === '[') {
          keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
        }

        if (chr === '[') {
          break;
        }
      }

      obj = array;

      for (j = 0, keysLen = keys.length; j < keysLen; j++) {
        key = keys[j].replace(/^['"]/, '').replace(/['"]$/, '');
        lastObj = obj;

        if ((key === '' || key === ' ') && j !== 0) {
          // Insert new dimension
          ct = -1;

          for (p in obj) {
            if (obj.hasOwnProperty(p)) {
              if (+p > ct && p.match(/^\d+$/g)) {
                ct = +p;
              }
            }
          }

          key = ct + 1;
        }

        // if primitive value, replace with object
        if (Object(obj[key]) !== obj[key]) {
          obj[key] = {};
        }

        obj = obj[key];
      }

      lastObj[key] = value;
    }
  }
};
//# sourceMappingURL=parse_str.js.map

/***/ }),

/***/ "./node_modules/locutus/php/strings/str_replace.js":
/*!*********************************************************!*\
  !*** ./node_modules/locutus/php/strings/str_replace.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function str_replace(search, replace, subject, countObj) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/str_replace/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Gabriel Paderni
  // improved by: Philip Peterson
  // improved by: Simon Willison (http://simonwillison.net)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // bugfixed by: Anton Ongson
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Oleg Eremeev
  // bugfixed by: Glen Arason (http://CanadianDomainRegistry.ca)
  // bugfixed by: Glen Arason (http://CanadianDomainRegistry.ca)
  //    input by: Onno Marsman (https://twitter.com/onnomarsman)
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Oleg Eremeev
  //      note 1: The countObj parameter (optional) if used must be passed in as a
  //      note 1: object. The count will then be written by reference into it's `value` property
  //   example 1: str_replace(' ', '.', 'Kevin van Zonneveld')
  //   returns 1: 'Kevin.van.Zonneveld'
  //   example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars')
  //   returns 2: 'hemmo, mars'
  //   example 3: str_replace(Array('S','F'),'x','ASDFASDF')
  //   returns 3: 'AxDxAxDx'
  //   example 4: var countObj = {}
  //   example 4: str_replace(['A','D'], ['x','y'] , 'ASDFASDF' , countObj)
  //   example 4: var $result = countObj.value
  //   returns 4: 4

  var i = 0;
  var j = 0;
  var temp = '';
  var repl = '';
  var sl = 0;
  var fl = 0;
  var f = [].concat(search);
  var r = [].concat(replace);
  var s = subject;
  var ra = Object.prototype.toString.call(r) === '[object Array]';
  var sa = Object.prototype.toString.call(s) === '[object Array]';
  s = [].concat(s);

  var $global = typeof window !== 'undefined' ? window : global;
  $global.$locutus = $global.$locutus || {};
  var $locutus = $global.$locutus;
  $locutus.php = $locutus.php || {};

  if ((typeof search === 'undefined' ? 'undefined' : _typeof(search)) === 'object' && typeof replace === 'string') {
    temp = replace;
    replace = [];
    for (i = 0; i < search.length; i += 1) {
      replace[i] = temp;
    }
    temp = '';
    r = [].concat(replace);
    ra = Object.prototype.toString.call(r) === '[object Array]';
  }

  if (typeof countObj !== 'undefined') {
    countObj.value = 0;
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? r[j] !== undefined ? r[j] : '' : r[0];
      s[i] = temp.split(f[j]).join(repl);
      if (typeof countObj !== 'undefined') {
        countObj.value += temp.split(f[j]).length - 1;
      }
    }
  }
  return sa ? s : s[0];
};
//# sourceMappingURL=str_replace.js.map

/***/ }),

/***/ "./node_modules/locutus/php/strings/strtolower.js":
/*!********************************************************!*\
  !*** ./node_modules/locutus/php/strings/strtolower.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function strtolower(str) {
  //  discuss at: http://locutus.io/php/strtolower/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  //   example 1: strtolower('Kevin van Zonneveld')
  //   returns 1: 'kevin van zonneveld'

  return (str + '').toLowerCase();
};
//# sourceMappingURL=strtolower.js.map

/***/ }),

/***/ "./node_modules/locutus/php/strings/strtoupper.js":
/*!********************************************************!*\
  !*** ./node_modules/locutus/php/strings/strtoupper.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function strtoupper(str) {
  //  discuss at: http://locutus.io/php/strtoupper/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  //   example 1: strtoupper('Kevin van Zonneveld')
  //   returns 1: 'KEVIN VAN ZONNEVELD'

  return (str + '').toUpperCase();
};
//# sourceMappingURL=strtoupper.js.map

/***/ }),

/***/ "./node_modules/locutus/php/url/base64_decode.js":
/*!*******************************************************!*\
  !*** ./node_modules/locutus/php/url/base64_decode.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function base64_decode(encodedData) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/base64_decode/
  // original by: Tyler Akins (http://rumkin.com)
  // improved by: Thunder.m
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  //    input by: Aman Gupta
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Pellentesque Malesuada
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Indigo744
  //   example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==')
  //   returns 1: 'Kevin van Zonneveld'
  //   example 2: base64_decode('YQ==')
  //   returns 2: 'a'
  //   example 3: base64_decode('4pyTIMOgIGxhIG1vZGU=')
  //   returns 3: '✓ à la mode'

  // decodeUTF8string()
  // Internal function to decode properly UTF8 string
  // Adapted from Solution #1 at https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
  var decodeUTF8string = function decodeUTF8string(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(str.split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  };

  if (typeof window !== 'undefined') {
    if (typeof window.atob !== 'undefined') {
      return decodeUTF8string(window.atob(encodedData));
    }
  } else {
    return new Buffer(encodedData, 'base64').toString('utf-8');
  }

  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1;
  var o2;
  var o3;
  var h1;
  var h2;
  var h3;
  var h4;
  var bits;
  var i = 0;
  var ac = 0;
  var dec = '';
  var tmpArr = [];

  if (!encodedData) {
    return encodedData;
  }

  encodedData += '';

  do {
    // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(encodedData.charAt(i++));
    h2 = b64.indexOf(encodedData.charAt(i++));
    h3 = b64.indexOf(encodedData.charAt(i++));
    h4 = b64.indexOf(encodedData.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 === 64) {
      tmpArr[ac++] = String.fromCharCode(o1);
    } else if (h4 === 64) {
      tmpArr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmpArr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < encodedData.length);

  dec = tmpArr.join('');

  return decodeUTF8string(dec.replace(/\0+$/, ''));
};
//# sourceMappingURL=base64_decode.js.map

/***/ }),

/***/ "./node_modules/locutus/php/url/base64_encode.js":
/*!*******************************************************!*\
  !*** ./node_modules/locutus/php/url/base64_encode.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function base64_encode(stringToEncode) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/base64_encode/
  // original by: Tyler Akins (http://rumkin.com)
  // improved by: Bayron Guevara
  // improved by: Thunder.m
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  // bugfixed by: Pellentesque Malesuada
  // improved by: Indigo744
  //   example 1: base64_encode('Kevin van Zonneveld')
  //   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
  //   example 2: base64_encode('a')
  //   returns 2: 'YQ=='
  //   example 3: base64_encode('✓ à la mode')
  //   returns 3: '4pyTIMOgIGxhIG1vZGU='

  // encodeUTF8string()
  // Internal function to encode properly UTF8 string
  // Adapted from Solution #1 at https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
  var encodeUTF8string = function encodeUTF8string(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into the base64 encoding algorithm.
    return encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
      return String.fromCharCode('0x' + p1);
    });
  };

  if (typeof window !== 'undefined') {
    if (typeof window.btoa !== 'undefined') {
      return window.btoa(encodeUTF8string(stringToEncode));
    }
  } else {
    return new Buffer(stringToEncode).toString('base64');
  }

  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1;
  var o2;
  var o3;
  var h1;
  var h2;
  var h3;
  var h4;
  var bits;
  var i = 0;
  var ac = 0;
  var enc = '';
  var tmpArr = [];

  if (!stringToEncode) {
    return stringToEncode;
  }

  stringToEncode = encodeUTF8string(stringToEncode);

  do {
    // pack three octets into four hexets
    o1 = stringToEncode.charCodeAt(i++);
    o2 = stringToEncode.charCodeAt(i++);
    o3 = stringToEncode.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < stringToEncode.length);

  enc = tmpArr.join('');

  var r = stringToEncode.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
};
//# sourceMappingURL=base64_encode.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/boolval.js":
/*!*************************************************!*\
  !*** ./node_modules/locutus/php/var/boolval.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function boolval(mixedVar) {
  // original by: Will Rowe
  //   example 1: boolval(true)
  //   returns 1: true
  //   example 2: boolval(false)
  //   returns 2: false
  //   example 3: boolval(0)
  //   returns 3: false
  //   example 4: boolval(0.0)
  //   returns 4: false
  //   example 5: boolval('')
  //   returns 5: false
  //   example 6: boolval('0')
  //   returns 6: false
  //   example 7: boolval([])
  //   returns 7: false
  //   example 8: boolval('')
  //   returns 8: false
  //   example 9: boolval(null)
  //   returns 9: false
  //   example 10: boolval(undefined)
  //   returns 10: false
  //   example 11: boolval('true')
  //   returns 11: true

  if (mixedVar === false) {
    return false;
  }

  if (mixedVar === 0 || mixedVar === 0.0) {
    return false;
  }

  if (mixedVar === '' || mixedVar === '0') {
    return false;
  }

  if (Array.isArray(mixedVar) && mixedVar.length === 0) {
    return false;
  }

  if (mixedVar === null || mixedVar === undefined) {
    return false;
  }

  return true;
};
//# sourceMappingURL=boolval.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/empty.js":
/*!***********************************************!*\
  !*** ./node_modules/locutus/php/var/empty.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function empty(mixedVar) {
  //  discuss at: http://locutus.io/php/empty/
  // original by: Philippe Baumann
  //    input by: Onno Marsman (https://twitter.com/onnomarsman)
  //    input by: LH
  //    input by: Stoyan Kyosev (http://www.svest.org/)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Francesco
  // improved by: Marc Jansen
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  //   example 1: empty(null)
  //   returns 1: true
  //   example 2: empty(undefined)
  //   returns 2: true
  //   example 3: empty([])
  //   returns 3: true
  //   example 4: empty({})
  //   returns 4: true
  //   example 5: empty({'aFunc' : function () { alert('humpty'); } })
  //   returns 5: false

  var undef;
  var key;
  var i;
  var len;
  var emptyValues = [undef, null, false, 0, '', '0'];

  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixedVar === emptyValues[i]) {
      return true;
    }
  }

  if ((typeof mixedVar === 'undefined' ? 'undefined' : _typeof(mixedVar)) === 'object') {
    for (key in mixedVar) {
      if (mixedVar.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  return false;
};
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/floatval.js":
/*!**************************************************!*\
  !*** ./node_modules/locutus/php/var/floatval.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function floatval(mixedVar) {
  //  discuss at: http://locutus.io/php/floatval/
  // original by: Michael White (http://getsprink.com)
  //      note 1: The native parseFloat() method of JavaScript returns NaN
  //      note 1: when it encounters a string before an int or float value.
  //   example 1: floatval('150.03_page-section')
  //   returns 1: 150.03
  //   example 2: floatval('page: 3')
  //   example 2: floatval('-50 + 8')
  //   returns 2: 0
  //   returns 2: -50

  return parseFloat(mixedVar) || 0;
};
//# sourceMappingURL=floatval.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/intval.js":
/*!************************************************!*\
  !*** ./node_modules/locutus/php/var/intval.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function intval(mixedVar, base) {
  //  discuss at: http://locutus.io/php/intval/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: stensi
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Rafał Kukawski (http://blog.kukawski.pl)
  //    input by: Matteo
  //   example 1: intval('Kevin van Zonneveld')
  //   returns 1: 0
  //   example 2: intval(4.2)
  //   returns 2: 4
  //   example 3: intval(42, 8)
  //   returns 3: 42
  //   example 4: intval('09')
  //   returns 4: 9
  //   example 5: intval('1e', 16)
  //   returns 5: 30
  //   example 6: intval(0x200000001)
  //   returns 6: 8589934593
  //   example 7: intval('0xff', 0)
  //   returns 7: 255
  //   example 8: intval('010', 0)
  //   returns 8: 8

  var tmp, match;

  var type = typeof mixedVar === 'undefined' ? 'undefined' : _typeof(mixedVar);

  if (type === 'boolean') {
    return +mixedVar;
  } else if (type === 'string') {
    if (base === 0) {
      match = mixedVar.match(/^\s*0(x?)/i);
      base = match ? match[1] ? 16 : 8 : 10;
    }
    tmp = parseInt(mixedVar, base || 10);
    return isNaN(tmp) || !isFinite(tmp) ? 0 : tmp;
  } else if (type === 'number' && isFinite(mixedVar)) {
    return mixedVar < 0 ? Math.ceil(mixedVar) : Math.floor(mixedVar);
  } else {
    return 0;
  }
};
//# sourceMappingURL=intval.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_array.js":
/*!**************************************************!*\
  !*** ./node_modules/locutus/php/var/is_array.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function is_array(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_array/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Legaev Andrey
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Nathan Sepulveda
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Cord
  // bugfixed by: Manish
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      note 1: In Locutus, javascript objects are like php associative arrays,
  //      note 1: thus JavaScript objects will also
  //      note 1: return true in this function (except for objects which inherit properties,
  //      note 1: being thus used as objects),
  //      note 1: unless you do ini_set('locutus.objectsAsArrays', 0),
  //      note 1: in which case only genuine JavaScript arrays
  //      note 1: will return true
  //   example 1: is_array(['Kevin', 'van', 'Zonneveld'])
  //   returns 1: true
  //   example 2: is_array('Kevin van Zonneveld')
  //   returns 2: false
  //   example 3: is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'})
  //   returns 3: true
  //   example 4: ini_set('locutus.objectsAsArrays', 0)
  //   example 4: is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'})
  //   returns 4: false
  //   example 5: is_array(function tmp_a (){ this.name = 'Kevin' })
  //   returns 5: false

  var _getFuncName = function _getFuncName(fn) {
    var name = /\W*function\s+([\w$]+)\s*\(/.exec(fn);
    if (!name) {
      return '(Anonymous)';
    }
    return name[1];
  };
  var _isArray = function _isArray(mixedVar) {
    // return Object.prototype.toString.call(mixedVar) === '[object Array]';
    // The above works, but let's do the even more stringent approach:
    // (since Object.prototype.toString could be overridden)
    // Null, Not an object, no length property so couldn't be an Array (or String)
    if (!mixedVar || (typeof mixedVar === 'undefined' ? 'undefined' : _typeof(mixedVar)) !== 'object' || typeof mixedVar.length !== 'number') {
      return false;
    }
    var len = mixedVar.length;
    mixedVar[mixedVar.length] = 'bogus';
    // The only way I can think of to get around this (or where there would be trouble)
    // would be to have an object defined
    // with a custom "length" getter which changed behavior on each call
    // (or a setter to mess up the following below) or a custom
    // setter for numeric properties, but even that would need to listen for
    // specific indexes; but there should be no false negatives
    // and such a false positive would need to rely on later JavaScript
    // innovations like __defineSetter__
    if (len !== mixedVar.length) {
      // We know it's an array since length auto-changed with the addition of a
      // numeric property at its length end, so safely get rid of our bogus element
      mixedVar.length -= 1;
      return true;
    }
    // Get rid of the property we added onto a non-array object; only possible
    // side-effect is if the user adds back the property later, it will iterate
    // this property in the older order placement in IE (an order which should not
    // be depended on anyways)
    delete mixedVar[mixedVar.length];
    return false;
  };

  if (!mixedVar || (typeof mixedVar === 'undefined' ? 'undefined' : _typeof(mixedVar)) !== 'object') {
    return false;
  }

  var isArray = _isArray(mixedVar);

  if (isArray) {
    return true;
  }

  var iniVal = ( true ? __webpack_require__(/*! ../info/ini_get */ "./node_modules/locutus/php/info/ini_get.js")('locutus.objectsAsArrays') : undefined) || 'on';
  if (iniVal === 'on') {
    var asString = Object.prototype.toString.call(mixedVar);
    var asFunc = _getFuncName(mixedVar.constructor);

    if (asString === '[object Object]' && asFunc === 'Object') {
      // Most likely a literal and intended as assoc. array
      return true;
    }
  }

  return false;
};
//# sourceMappingURL=is_array.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_bool.js":
/*!*************************************************!*\
  !*** ./node_modules/locutus/php/var/is_bool.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function is_bool(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_bool/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: CoursesWeb (http://www.coursesweb.net/)
  //   example 1: is_bool(false)
  //   returns 1: true
  //   example 2: is_bool(0)
  //   returns 2: false

  return mixedVar === true || mixedVar === false; // Faster (in FF) than type checking
};
//# sourceMappingURL=is_bool.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_callable.js":
/*!*****************************************************!*\
  !*** ./node_modules/locutus/php/var/is_callable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function is_callable(mixedVar, syntaxOnly, callableName) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_callable/
  // original by: Brett Zamir (http://brett-zamir.me)
  //    input by: François
  // improved by: Brett Zamir (http://brett-zamir.me)
  //      note 1: The variable callableName cannot work as a string variable passed by
  //      note 1: reference as in PHP (since JavaScript does not support passing
  //      note 1: strings by reference), but instead will take the name of
  //      note 1: a global variable and set that instead.
  //      note 1: When used on an object, depends on a constructor property
  //      note 1: being kept on the object prototype
  //      note 2: Depending on the `callableName` that is passed, this function can use eval.
  //      note 2: The eval input is however checked to only allow valid function names,
  //      note 2: So it should not be unsafer than uses without eval (seeing as you can)
  //      note 2: already pass any function to be executed here.
  //   example 1: is_callable('is_callable')
  //   returns 1: true
  //   example 2: is_callable('bogusFunction', true)
  //   returns 2: true // gives true because does not do strict checking
  //   example 3: function SomeClass () {}
  //   example 3: SomeClass.prototype.someMethod = function (){}
  //   example 3: var testObj = new SomeClass()
  //   example 3: is_callable([testObj, 'someMethod'], true, 'myVar')
  //   example 3: var $result = myVar
  //   returns 3: 'SomeClass::someMethod'
  //   example 4: is_callable(function () {})
  //   returns 4: true

  var $global = typeof window !== 'undefined' ? window : global;

  var validJSFunctionNamePattern = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;

  var name = '';
  var obj = {};
  var method = '';
  var validFunctionName = false;

  var getFuncName = function getFuncName(fn) {
    var name = /\W*function\s+([\w$]+)\s*\(/.exec(fn);
    if (!name) {
      return '(Anonymous)';
    }
    return name[1];
  };

  if (typeof mixedVar === 'string') {
    obj = $global;
    method = mixedVar;
    name = mixedVar;
    validFunctionName = !!name.match(validJSFunctionNamePattern);
  } else if (typeof mixedVar === 'function') {
    return true;
  } else if (Object.prototype.toString.call(mixedVar) === '[object Array]' && mixedVar.length === 2 && _typeof(mixedVar[0]) === 'object' && typeof mixedVar[1] === 'string') {
    obj = mixedVar[0];
    method = mixedVar[1];
    name = (obj.constructor && getFuncName(obj.constructor)) + '::' + method;
  } else {
    return false;
  }

  if (syntaxOnly || typeof obj[method] === 'function') {
    if (callableName) {
      $global[callableName] = name;
    }
    return true;
  }

  // validFunctionName avoids exploits
  if (validFunctionName && typeof eval(method) === 'function') {
    // eslint-disable-line no-eval
    if (callableName) {
      $global[callableName] = name;
    }
    return true;
  }

  return false;
};
//# sourceMappingURL=is_callable.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_float.js":
/*!**************************************************!*\
  !*** ./node_modules/locutus/php/var/is_float.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function is_float(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_float/
  // original by: Paulo Freitas
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // improved by: WebDevHobo (http://webdevhobo.blogspot.com/)
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  //      note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
  //      note 1: it different from the PHP implementation. We can't fix this unfortunately.
  //   example 1: is_float(186.31)
  //   returns 1: true

  return +mixedVar === mixedVar && (!isFinite(mixedVar) || !!(mixedVar % 1));
};
//# sourceMappingURL=is_float.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_int.js":
/*!************************************************!*\
  !*** ./node_modules/locutus/php/var/is_int.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function is_int(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_int/
  // original by: Alex
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: WebDevHobo (http://webdevhobo.blogspot.com/)
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  //  revised by: Matt Bradley
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  //      note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
  //      note 1: it different from the PHP implementation. We can't fix this unfortunately.
  //   example 1: is_int(23)
  //   returns 1: true
  //   example 2: is_int('23')
  //   returns 2: false
  //   example 3: is_int(23.5)
  //   returns 3: false
  //   example 4: is_int(true)
  //   returns 4: false

  return mixedVar === +mixedVar && isFinite(mixedVar) && !(mixedVar % 1);
};
//# sourceMappingURL=is_int.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_null.js":
/*!*************************************************!*\
  !*** ./node_modules/locutus/php/var/is_null.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function is_null(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_null/
  // original by: Kevin van Zonneveld (http://kvz.io)
  //   example 1: is_null('23')
  //   returns 1: false
  //   example 2: is_null(null)
  //   returns 2: true

  return mixedVar === null;
};
//# sourceMappingURL=is_null.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_numeric.js":
/*!****************************************************!*\
  !*** ./node_modules/locutus/php/var/is_numeric.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function is_numeric(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_numeric/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: David
  // improved by: taith
  // bugfixed by: Tim de Koning
  // bugfixed by: WebDevHobo (http://webdevhobo.blogspot.com/)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Denis Chenu (http://shnoulle.net)
  //   example 1: is_numeric(186.31)
  //   returns 1: true
  //   example 2: is_numeric('Kevin van Zonneveld')
  //   returns 2: false
  //   example 3: is_numeric(' +186.31e2')
  //   returns 3: true
  //   example 4: is_numeric('')
  //   returns 4: false
  //   example 5: is_numeric([])
  //   returns 5: false
  //   example 6: is_numeric('1 ')
  //   returns 6: false

  var whitespace = [' ', '\n', '\r', '\t', '\f', '\x0b', '\xa0', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u200B', '\u2028', '\u2029', '\u3000'].join('');

  // @todo: Break this up using many single conditions with early returns
  return (typeof mixedVar === 'number' || typeof mixedVar === 'string' && whitespace.indexOf(mixedVar.slice(-1)) === -1) && mixedVar !== '' && !isNaN(mixedVar);
};
//# sourceMappingURL=is_numeric.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_object.js":
/*!***************************************************!*\
  !*** ./node_modules/locutus/php/var/is_object.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function is_object(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_object/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Legaev Andrey
  // improved by: Michael White (http://getsprink.com)
  //   example 1: is_object('23')
  //   returns 1: false
  //   example 2: is_object({foo: 'bar'})
  //   returns 2: true
  //   example 3: is_object(null)
  //   returns 3: false

  if (Object.prototype.toString.call(mixedVar) === '[object Array]') {
    return false;
  }
  return mixedVar !== null && (typeof mixedVar === 'undefined' ? 'undefined' : _typeof(mixedVar)) === 'object';
};
//# sourceMappingURL=is_object.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_scalar.js":
/*!***************************************************!*\
  !*** ./node_modules/locutus/php/var/is_scalar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function is_scalar(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_scalar/
  // original by: Paulo Freitas
  //   example 1: is_scalar(186.31)
  //   returns 1: true
  //   example 2: is_scalar({0: 'Kevin van Zonneveld'})
  //   returns 2: false

  return (/boolean|number|string/.test(typeof mixedVar === "undefined" ? "undefined" : _typeof(mixedVar))
  );
};
//# sourceMappingURL=is_scalar.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/is_string.js":
/*!***************************************************!*\
  !*** ./node_modules/locutus/php/var/is_string.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function is_string(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_string/
  // original by: Kevin van Zonneveld (http://kvz.io)
  //   example 1: is_string('23')
  //   returns 1: true
  //   example 2: is_string(23.5)
  //   returns 2: false

  return typeof mixedVar === 'string';
};
//# sourceMappingURL=is_string.js.map

/***/ }),

/***/ "./node_modules/locutus/php/var/isset.js":
/*!***********************************************!*\
  !*** ./node_modules/locutus/php/var/isset.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isset() {
  //  discuss at: http://locutus.io/php/isset/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: FremyCompany
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  //   example 1: isset( undefined, true)
  //   returns 1: false
  //   example 2: isset( 'Kevin van Zonneveld' )
  //   returns 2: true

  var a = arguments;
  var l = a.length;
  var i = 0;
  var undef;

  if (l === 0) {
    throw new Error('Empty isset');
  }

  while (i !== l) {
    if (a[i] === undef || a[i] === null) {
      return false;
    }
    i++;
  }

  return true;
};
//# sourceMappingURL=isset.js.map

/***/ }),

/***/ "./node_modules/locutus/php/xml/utf8_encode.js":
/*!*****************************************************!*\
  !*** ./node_modules/locutus/php/xml/utf8_encode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function utf8_encode(argString) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Ulrich
  // bugfixed by: Rafał Kukawski (http://blog.kukawski.pl)
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld')
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var string = argString + '';
  var utftext = '';
  var start;
  var end;
  var stringl = 0;

  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
    } else if ((c1 & 0xF800) !== 0xD800) {
      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    } else {
      // surrogate pairs
      if ((c1 & 0xFC00) !== 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) !== 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(c1 >> 18 | 240, c1 >> 12 & 63 | 128, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
};
//# sourceMappingURL=utf8_encode.js.map

/***/ }),

/***/ "./node_modules/vsp-js-helper/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vsp-js-helper/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//module.exports[ 'array_count_values' ]    = require( 'locutus/php/array/array_count_values' );
//module.exports[ 'array_fill' ]            = require( 'locutus/php/array/array_fill' );
//module.exports[ 'array_fill_keys' ]       = require( 'locutus/php/array/array_fill_keys' );
//module.exports[ 'array_filter' ]          = require( 'locutus/php/array/array_filter' );
//module.exports[ 'array_flip' ]            = require( 'locutus/php/array/array_flip' );
//module.exports[ 'array_key_exists' ]      = require( 'locutus/php/array/array_key_exists' );
//module.exports[ 'array_keys' ]            = require( 'locutus/php/array/array_keys' );
//module.exports[ 'array_map' ]             = require( 'locutus/php/array/array_map' );
//module.exports[ 'array_reverse' ]         = require( 'locutus/php/array/array_reverse' );
//module.exports[ 'array_search' ]          = require( 'locutus/php/array/array_search' );
//module.exports[ 'array_sum' ]             = require( 'locutus/php/array/array_sum' );
//module.exports[ 'array_unique' ]          = require( 'locutus/php/array/array_unique' );
//module.exports[ 'current' ]               = require( 'locutus/php/array/current' );
//module.exports[ 'end' ]                   = require( 'locutus/php/array/end' );
//module.exports[ 'key' ]                   = require( 'locutus/php/array/key' );
//module.exports[ 'next' ]                  = require( 'locutus/php/array/next' );
//module.exports[ 'pos' ]                   = require( 'locutus/php/array/pos' );
//module.exports[ 'prev' ]                  = require( 'locutus/php/array/prev' );
//module.exports[ 'range' ]                 = require( 'locutus/php/array/range' );
//module.exports[ 'reset' ]                 = require( 'locutus/php/array/reset' );
//module.exports[ 'sizeof' ]                = require( 'locutus/php/array/sizeof' );
//module.exports[ 'nl2br' ]                 = require( 'locutus/php/strings/nl2br' );
//module.exports[ 'number_format' ]         = require( 'locutus/php/strings/number_format' );
//module.exports[ 'printf' ]                = require( 'locutus/php/strings/printf' );
//module.exports[ 'sprintf' ]               = require( 'locutus/php/strings/sprintf' );
//module.exports[ 'str_repeat' ]            = require( 'locutus/php/strings/str_repeat' );
//module.exports[ 'str_split' ]             = require( 'locutus/php/strings/str_split' );
//module.exports[ 'str_word_count' ]        = require( 'locutus/php/strings/str_word_count' );
//module.exports[ 'strip_tags' ]            = require( 'locutus/php/strings/strip_tags' );
//module.exports[ 'stripslashes' ]          = require( 'locutus/php/strings/stripslashes' );
//module.exports[ 'strstr' ]                = require( 'locutus/php/strings/strstr' );
//module.exports[ 'strtr' ]                 = require( 'locutus/php/strings/strtr' );
//module.exports[ 'vprintf' ]               = require( 'locutus/php/strings/vprintf' );
//module.exports[ 'vsprintf' ]              = require( 'locutus/php/strings/vsprintf' );
//module.exports[ 'wordwrap' ]              = require( 'locutus/php/strings/wordwrap' );
//module.exports[ 'print_r' ]               = require( 'locutus/php/var/print_r' );
//module.exports[ 'serialize' ]             = require( 'locutus/php/var/serialize' );
//module.exports[ 'unserialize' ]           = require( 'locutus/php/var/unserialize' );
//module.exports[ 'var_export' ]            = require( 'locutus/php/var/var_export' );
//module.exports[ 'var_dump' ]              = require( 'locutus/php/var/var_dump' );
//module.exports[ 'version_compare' ]       = require( 'locutus/php/info/version_compare' );
//module.exports[ 'ltrim' ]                 = require( 'locutus/php/strings/ltrim' );
//module.exports[ 'rtrim' ]                 = require( 'locutus/php/strings/rtrim' );
//module.exports[ 'trim' ]                  = require( 'locutus/php/strings/trim' );
//module.exports[ 'array_walk' ]            = require( 'locutus/php/array/array_walk' );
//module.exports[ 'array_walk_recursive' ]  = require( 'locutus/php/array/array_walk_recursive' );
//module.exports[ 'date_parse' ]            = require( 'locutus/php/datetime/date_parse' );
//module.exports[ 'getdate' ]               = require( 'locutus/php/datetime/getdate' );
//module.exports[ 'basename' ]              = require( 'locutus/php/filesystem/basename' );
//module.exports[ 'dirname' ]               = require( 'locutus/php/filesystem/dirname' );
//module.exports[ 'pathinfo' ]              = require( 'locutus/php/filesystem/pathinfo' );
//module.exports[ 'date' ]                  = require( 'locutus/php/datetime/date' );
//module.exports[ 'strtotime' ]             = require( 'locutus/php/datetime/strtotime' );
//module.exports[ 'http_build_query' ]      = require( 'locutus/php/url/http_build_query' );
//module.exports[ 'is_double' ]             = require( 'locutus/php/var/is_double' );
//module.exports[ 'is_integer' ]            = require( 'locutus/php/var/is_integer' );
//module.exports[ 'is_long' ]               = require( 'locutus/php/var/is_long' );
//module.exports[ 'is_real' ]               = require( 'locutus/php/var/is_real' );
//module.exports[ 'is_unicode' ]            = require( 'locutus/php/var/is_unicode' );
//module.exports[ 'is_buffer' ]             = require( 'locutus/php/var/is_buffer' );
//module.exports[ 'doubleval' ]             = require( 'locutus/php/var/doubleval' );
//module.exports[ 'gettype' ]               = require( 'locutus/php/var/gettype' );

module.exports['array_merge'] = __webpack_require__(/*! locutus/php/array/array_merge */ "./node_modules/locutus/php/array/array_merge.js");
module.exports['array_merge_recursive'] = __webpack_require__(/*! locutus/php/array/array_merge_recursive */ "./node_modules/locutus/php/array/array_merge_recursive.js");
module.exports['array_values'] = __webpack_require__(/*! locutus/php/array/array_values */ "./node_modules/locutus/php/array/array_values.js");
module.exports['count'] = __webpack_require__(/*! locutus/php/array/count */ "./node_modules/locutus/php/array/count.js");
module.exports['in_array'] = __webpack_require__(/*! locutus/php/array/in_array */ "./node_modules/locutus/php/array/in_array.js");
module.exports['microtime'] = __webpack_require__(/*! locutus/php/datetime/microtime */ "./node_modules/locutus/php/datetime/microtime.js");
module.exports['time'] = __webpack_require__(/*! locutus/php/datetime/time */ "./node_modules/locutus/php/datetime/time.js");
module.exports['call_user_func'] = __webpack_require__(/*! locutus/php/funchand/call_user_func */ "./node_modules/locutus/php/funchand/call_user_func.js");
module.exports['call_user_func_array'] = __webpack_require__(/*! locutus/php/funchand/call_user_func_array */ "./node_modules/locutus/php/funchand/call_user_func_array.js");
module.exports['function_exists'] = __webpack_require__(/*! locutus/php/funchand/function_exists */ "./node_modules/locutus/php/funchand/function_exists.js");
//module.exports[ 'uniqid' ]                = require( 'locutus/php/misc/uniqid' );
module.exports['explode'] = __webpack_require__(/*! locutus/php/strings/explode */ "./node_modules/locutus/php/strings/explode.js");
module.exports['implode'] = __webpack_require__(/*! locutus/php/strings/implode */ "./node_modules/locutus/php/strings/implode.js");
module.exports['md5'] = __webpack_require__(/*! locutus/php/strings/md5 */ "./node_modules/locutus/php/strings/md5.js");
module.exports['parse_str'] = __webpack_require__(/*! locutus/php/strings/parse_str */ "./node_modules/locutus/php/strings/parse_str.js");
module.exports['str_replace'] = __webpack_require__(/*! locutus/php/strings/str_replace */ "./node_modules/locutus/php/strings/str_replace.js");
module.exports['strtolower'] = __webpack_require__(/*! locutus/php/strings/strtolower */ "./node_modules/locutus/php/strings/strtolower.js");
module.exports['strtoupper'] = __webpack_require__(/*! locutus/php/strings/strtoupper */ "./node_modules/locutus/php/strings/strtoupper.js");
module.exports['base64_decode'] = __webpack_require__(/*! locutus/php/url/base64_decode */ "./node_modules/locutus/php/url/base64_decode.js");
module.exports['base64_encode'] = __webpack_require__(/*! locutus/php/url/base64_encode */ "./node_modules/locutus/php/url/base64_encode.js");
//module.exports[ 'parse_url' ]             = require( 'locutus/php/url/parse_url' );
//module.exports[ 'rawurldecode' ]          = require( 'locutus/php/url/rawurldecode' );
//module.exports[ 'rawurlencode' ]          = require( 'locutus/php/url/rawurlencode' );
//module.exports[ 'urldecode' ]             = require( 'locutus/php/url/urldecode' );
//module.exports[ 'urlencode' ]             = require( 'locutus/php/url/urlencode' );
module.exports['boolval'] = __webpack_require__(/*! locutus/php/var/boolval */ "./node_modules/locutus/php/var/boolval.js");
module.exports['empty'] = __webpack_require__(/*! locutus/php/var/empty */ "./node_modules/locutus/php/var/empty.js");
module.exports['floatval'] = __webpack_require__(/*! locutus/php/var/floatval */ "./node_modules/locutus/php/var/floatval.js");
module.exports['intval'] = __webpack_require__(/*! locutus/php/var/intval */ "./node_modules/locutus/php/var/intval.js");
module.exports['is_array'] = __webpack_require__(/*! locutus/php/var/is_array */ "./node_modules/locutus/php/var/is_array.js");
module.exports['is_bool'] = __webpack_require__(/*! locutus/php/var/is_bool */ "./node_modules/locutus/php/var/is_bool.js");
module.exports['is_callable'] = __webpack_require__(/*! locutus/php/var/is_callable */ "./node_modules/locutus/php/var/is_callable.js");
module.exports['is_float'] = __webpack_require__(/*! locutus/php/var/is_float */ "./node_modules/locutus/php/var/is_float.js");
module.exports['is_int'] = __webpack_require__(/*! locutus/php/var/is_int */ "./node_modules/locutus/php/var/is_int.js");
module.exports['is_null'] = __webpack_require__(/*! locutus/php/var/is_null */ "./node_modules/locutus/php/var/is_null.js");
module.exports['is_numeric'] = __webpack_require__(/*! locutus/php/var/is_numeric */ "./node_modules/locutus/php/var/is_numeric.js");
module.exports['is_object'] = __webpack_require__(/*! locutus/php/var/is_object */ "./node_modules/locutus/php/var/is_object.js");
module.exports['is_scalar'] = __webpack_require__(/*! locutus/php/var/is_scalar */ "./node_modules/locutus/php/var/is_scalar.js");
module.exports['is_string'] = __webpack_require__(/*! locutus/php/var/is_string */ "./node_modules/locutus/php/var/is_string.js");
module.exports['isset'] = __webpack_require__(/*! locutus/php/var/isset */ "./node_modules/locutus/php/var/isset.js");
module.exports['parse_args'] = __webpack_require__(/*! js-parse-args */ "./node_modules/js-parse-args/index.js");

//module.exports[ 'array_to_csv' ]       = require( './parts/array_to_csv' );
module.exports['array_to_html_attr'] = __webpack_require__(/*! ./parts/array_to_html_attr */ "./node_modules/vsp-js-helper/parts/array_to_html_attr.js");
module.exports['array_to_html'] = __webpack_require__(/*! ./parts/array_to_html */ "./node_modules/vsp-js-helper/parts/array_to_html.js");
module.exports['array_to_window'] = __webpack_require__(/*! ./parts/array_to_window */ "./node_modules/vsp-js-helper/parts/array_to_window.js");
module.exports['wrap_array'] = __webpack_require__(/*! ./parts/wrap_array */ "./node_modules/vsp-js-helper/parts/wrap_array.js");
module.exports['okg'] = __webpack_require__(/*! ./parts/okg */ "./node_modules/vsp-js-helper/parts/okg.js");
module.exports['oks'] = __webpack_require__(/*! ./parts/oks */ "./node_modules/vsp-js-helper/parts/oks.js");
module.exports['plain_object'] = __webpack_require__(/*! ./parts/plain_object */ "./node_modules/vsp-js-helper/parts/plain_object.js");
module.exports['is_object_like'] = __webpack_require__(/*! ./parts/is_object_like */ "./node_modules/vsp-js-helper/parts/is_object_like.js");
module.exports['is_array_like'] = __webpack_require__(/*! ./parts/is_object_like */ "./node_modules/vsp-js-helper/parts/is_object_like.js");
module.exports['clone_object'] = __webpack_require__(/*! ./parts/clone_object */ "./node_modules/vsp-js-helper/parts/clone_object.js");
module.exports['is_after_date'] = __webpack_require__(/*! ./parts/is_after_date */ "./node_modules/vsp-js-helper/parts/is_after_date.js");
module.exports['is_before_date'] = __webpack_require__(/*! ./parts/is_before_date */ "./node_modules/vsp-js-helper/parts/is_before_date.js");
module.exports['is_same_date'] = __webpack_require__(/*! ./parts/is_same_date */ "./node_modules/vsp-js-helper/parts/is_same_date.js");
module.exports['format_duration'] = __webpack_require__(/*! ./parts/format_duration */ "./node_modules/vsp-js-helper/parts/format_duration.js");
module.exports['diff_days'] = __webpack_require__(/*! ./parts/diff_days */ "./node_modules/vsp-js-helper/parts/diff_days.js");
module.exports['is_undefined'] = __webpack_require__(/*! ./parts/is_undefined */ "./node_modules/vsp-js-helper/parts/is_undefined.js");
module.exports['is_tab_focused'] = __webpack_require__(/*! ./parts/is_tab_focused */ "./node_modules/vsp-js-helper/parts/is_tab_focused.js");
module.exports['scroll_to_top'] = __webpack_require__(/*! ./parts/scroll_to_top */ "./node_modules/vsp-js-helper/parts/scroll_to_top.js");
module.exports['copy_to_clip'] = __webpack_require__(/*! ./parts/copy_to_clip */ "./node_modules/vsp-js-helper/parts/copy_to_clip.js");
module.exports['scroll_pos'] = __webpack_require__(/*! ./parts/scroll_pos */ "./node_modules/vsp-js-helper/parts/scroll_pos.js");
module.exports['is_window_arg'] = __webpack_require__(/*! ./parts/is_window_arg */ "./node_modules/vsp-js-helper/parts/is_window_arg.js");
module.exports['window_arg'] = __webpack_require__(/*! ./parts/window_arg */ "./node_modules/vsp-js-helper/parts/window_arg.js");
module.exports['device_type'] = __webpack_require__(/*! ./parts/device_type */ "./node_modules/vsp-js-helper/parts/device_type.js");
module.exports['debug'] = __webpack_require__(/*! ./parts/time_taken */ "./node_modules/vsp-js-helper/parts/time_taken.js");
module.exports['time_taken'] = __webpack_require__(/*! ./parts/time_taken */ "./node_modules/vsp-js-helper/parts/time_taken.js");
module.exports['pipe_log'] = __webpack_require__(/*! ./parts/pipe_log */ "./node_modules/vsp-js-helper/parts/pipe_log.js");
module.exports['counter'] = __webpack_require__(/*! ./parts/counter */ "./node_modules/vsp-js-helper/parts/counter.js");
module.exports['to_jquery'] = __webpack_require__(/*! ./parts/to_jquery */ "./node_modules/vsp-js-helper/parts/to_jquery.js");
module.exports['to_js_func'] = __webpack_require__(/*! ./parts/to_js_func */ "./node_modules/vsp-js-helper/parts/to_js_func.js");
module.exports['rand_md5'] = __webpack_require__(/*! ./parts/rand_md5 */ "./node_modules/vsp-js-helper/parts/rand_md5.js");
module.exports['url_params'] = __webpack_require__(/*! ./parts/url_params */ "./node_modules/vsp-js-helper/parts/url_params.js");
module.exports['query_string'] = __webpack_require__(/*! ./parts/query_string */ "./node_modules/vsp-js-helper/parts/query_string.js");
module.exports['is_jquery'] = __webpack_require__(/*! ./parts/is_jquery */ "./node_modules/vsp-js-helper/parts/is_jquery.js");
module.exports['css_units'] = __webpack_require__(/*! ./parts/css_units */ "./node_modules/vsp-js-helper/parts/css_units.js");
//module.exports[ 'json_to_csv' ]        = require( './parts/json_to_csv' );

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/array_to_html.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/array_to_html.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts the given array elements into <li> tags and appends them to the list of the given id.
 * Use Array.prototype.map(), document.querySelector(), and an anonymous inner closure to create a list of html tags.
 * @param arr
 * @param listID
 * @param tag
 * @returns {*}
 */
module.exports = function (arr, listID) {
  var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'li';
  return function (el) {
    return el = document.querySelector('#' + listID), el.innerHTML += arr.map(function (item) {
      return '<' + tag + '>' + item + '</' + tag + '>';
    }).join('');
  }();
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/array_to_html_attr.js":
/*!****************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/array_to_html_attr.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is_object = __webpack_require__(/*! locutus/php/var/is_object */ "./node_modules/locutus/php/var/is_object.js");

var _is_object2 = _interopRequireDefault(_is_object);

var _is_object_like = __webpack_require__(/*! ./is_object_like */ "./node_modules/vsp-js-helper/parts/is_object_like.js");

var _is_object_like2 = _interopRequireDefault(_is_object_like);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function ($data) {
	var return_html = '';
	for (var I in $data) {
		if ((0, _is_object2.default)($data[I])) {
			return_html += ' ' + I + '="';
			for (var K in $data[I]) {
				var $value = (0, _is_object_like2.default)($data[I][K]) ? JSON.stringify($data[I][K]) : $data[I][K];
				return_html += $value + ' ';
			}
			return_html += '"';
		} else {
			var _$value = (0, _is_object_like2.default)($data[I]) ? JSON.stringify($data[I]) : $data[I];
			return_html += ' ' + I + '="' + _$value + '" ';
		}
	}
	return return_html;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/array_to_window.js":
/*!*************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/array_to_window.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ($array) {
	for (var $key in $array) {
		window[$key] = $array[$key];
	}
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/clone_object.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/clone_object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates A Clone of given value.
 * @param $data
 * @returns {any}
 */
module.exports = function ($data) {
  return JSON.parse(JSON.stringify($data));
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/copy_to_clip.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/copy_to_clip.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copy a string to the clipboard. Only works as a result of user action (i.e. inside a click event listener).
 * Create a new <textarea> element, fill it with the supplied data and add it to the HTML document.
 * Use Selection.getRangeAt()to store the selected range (if any).
 * Use document.execCommand('copy') to copy to the clipboard.
 * Remove the <textarea> element from the HTML document. Finally, use Selection().addRange() to recover the original selected range (if any).
 * @param str
 */
module.exports = function (str) {
	var el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	if (selected) {
		document.getSelection().removeAllRanges();
		document.getSelection().addRange(selected);
	}
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/counter.js":
/*!*****************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/counter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a counter with the specified range, step and duration for the specified selector.
 * Check if step has the proper sign and change it accordingly.
 * Use setInterval() in combination with Math.abs() and Math.floor() to calculate the time between each new text draw.
 * Use document.querySelector().innerHTML to update the value of the selected element.
 * Omit the fourth parameter, step, to use a default step of 1. Omit the fifth parameter, duration, to use a default duration of 2000ms.
 * @param selector
 * @param start
 * @param end
 * @param step
 * @param duration
 * @returns {number}
 */
module.exports = function (selector, start, end) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2000;

  var current = start,
      _step = (end - start) * step < 0 ? -step : step,
      timer = setInterval(function () {
    current += _step;
    document.querySelector(selector).innerHTML = current;
    if (current >= end) document.querySelector(selector).innerHTML = end;
    if (current >= end) clearInterval(timer);
  }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/css_units.js":
/*!*******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/css_units.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isNumberic = __webpack_require__(/*! locutus/php/var/is_numeric */ "./node_modules/locutus/php/var/is_numeric.js");

module.exports = function (val) {
	var s = val;
	if (isNumberic(val)) {
		return val + 'px';
	} else if (val.indexOf('px') > -1 || val.indexOf('%') > -1 || val.indexOf('em') > -1) {
		var checkPx = s.replace('px', '');
		var checkPct = s.replace('%', '');
		var checkEm = s.replace('em', '');
		if (isNumberic(checkPx) || isNumberic(checkPct) || isNumberic(checkEm)) {
			return val;
		} else {
			return '0px';
		}
	} else {
		return '0px';
	}
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/device_type.js":
/*!*********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/device_type.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Detects wether the website is being opened in a mobile device or a desktop/laptop.
 * Use a regular expression to test the navigator.userAgent property to figure out if the device is a mobile device or a desktop/laptop.
 * @returns {string}
 */
module.exports = function () {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
  );
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/diff_days.js":
/*!*******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/diff_days.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns the difference (in days) between two dates.
 * Calculate the difference (in days) between two Date objects.
 * @param dateInitial
 * @param dateFinal
 * @returns {number}
 */
module.exports = function (dateInitial, dateFinal) {
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/format_duration.js":
/*!*************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/format_duration.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Returns the human readable format of the given number of milliseconds.
 * Divide ms with the appropriate values to obtain the appropriate values for day, hour, minute, second and millisecond.
 * Use Object.entries() with Array.prototype.filter() to keep only non-zero values.
 * Use Array.prototype.map() to create the string for each value, pluralizing appropriately.
 * Use String.prototype.join(', ') to combine the values into a string.
 * @param ms
 * @returns {string}
 */
module.exports = function (ms) {
	if (ms < 0) ms = -ms;
	var time = {
		day: Math.floor(ms / 86400000),
		hour: Math.floor(ms / 3600000) % 24,
		minute: Math.floor(ms / 60000) % 60,
		second: Math.floor(ms / 1000) % 60,
		millisecond: Math.floor(ms) % 1000
	};
	return Object.entries(time).filter(function (val) {
		return val[1] !== 0;
	}).map(function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    key = _ref2[0],
		    val = _ref2[1];

		return val + ' ' + key + (val !== 1 ? 's' : '');
	}).join(', ');
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_after_date.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_after_date.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if a date is after another date.
 * Use the greater than operator (>) to check if the first date comes after the second one.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
module.exports = function (dateA, dateB) {
  return dateA > dateB;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_before_date.js":
/*!************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_before_date.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if a date is before another date.
 * Use the less than operator (<) to check if the first date comes before the second one.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
module.exports = function (dateA, dateB) {
  return dateA < dateB;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_jquery.js":
/*!*******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_jquery.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is_undefined = __webpack_require__(/*! ./is_undefined */ "./node_modules/vsp-js-helper/parts/is_undefined.js");

var _is_undefined2 = _interopRequireDefault(_is_undefined);

var _is_string = __webpack_require__(/*! locutus/php/var/is_string */ "./node_modules/locutus/php/var/is_string.js");

var _is_string2 = _interopRequireDefault(_is_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check if given Object / Value is a jQuery Instance.
 * @param $elem
 * @returns {boolean|*}
 */
module.exports = function ($elem) {
  return false === (0, _is_undefined2.default)($elem) && false === (0, _is_string2.default)($elem) && $elem.jQuery;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_object_like.js":
/*!************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_object_like.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is_object = __webpack_require__(/*! locutus/php/var/is_object */ "./node_modules/locutus/php/var/is_object.js");

var _is_object2 = _interopRequireDefault(_is_object);

var _is_array = __webpack_require__(/*! locutus/php/var/is_array */ "./node_modules/locutus/php/var/is_array.js");

var _is_array2 = _interopRequireDefault(_is_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a value is object-like.
 * Check if the provided value is not null and its typeof is equal to 'object'.
 * @param val
 * @returns {boolean}
 */
module.exports = function (val) {
  return (0, _is_object2.default)(val) || (0, _is_array2.default)(val);
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_same_date.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_same_date.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if a date is the same as another date.
 * Use Date.prototype.toISOString() and strict equality checking (===) to check if the first date is the same as the second one.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
module.exports = function (dateA, dateB) {
  return dateA.toISOString() === dateB.toISOString();
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_tab_focused.js":
/*!************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_tab_focused.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns true if the browser tab of the page is focused, false otherwise.
 * Use the Document.hidden property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.
 * @returns {boolean}
 */
module.exports = function () {
  return !document.hidden;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_undefined.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_undefined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns true if the specified value is undefined, false otherwise.
 * Use the strict equality operator to check if the value and of val are equal to undefined.
 * @param val
 * @returns {boolean}
 */
module.exports = function (val) {
  return val === undefined;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_window_arg.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_window_arg.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is_undefined = __webpack_require__(/*! ./is_undefined */ "./node_modules/vsp-js-helper/parts/is_undefined.js");

var _is_undefined2 = _interopRequireDefault(_is_undefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if window has given variable.
 * @param $key
 * @returns {boolean}
 */
module.exports = function ($key) {
  return false === (0, _is_undefined2.default)(window[$key]);
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/okg.js":
/*!*************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/okg.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $OKS = function $OKS(properties, obj, defaultValue) {
	var delimiter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

	properties = typeof properties === 'string' ? properties.split(delimiter) : [properties];
	var property = properties.shift();

	if (typeof obj[property] === 'undefined') {
		return defaultValue;
	}

	if (properties.length) {
		properties = properties.join(delimiter);
		return $OKS(properties, obj[property], defaultValue, delimiter);
	} else {
		return obj[property];
	}
};
module.exports = $OKS;

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/oks.js":
/*!*************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/oks.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var $OKS = function $OKS(properties, value, obj) {
	var delimiter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

	properties = typeof properties === 'string' ? properties.split(delimiter) : [properties];
	var property = properties.shift();

	if (properties.length) {
		properties = properties.join(delimiter);

		if (typeof obj[property] === 'undefined') {
			obj[property] = {};
		} else if (_typeof(obj[property]) !== 'object') {
			console.warn('Object property "' + property + '" already has non object value:', obj[property], 'It will be replaced with an empty object');
			obj[property] = {};
		} else if (_typeof(obj[property]) === 'object' && typeof obj[property].length !== 'undefined') {
			if (/^[0-9]+$/.test(property)) {
				property = parseInt(property);
			} else {
				console.warn('Try to set non numeric property "' + property + '" to array:', obj[property], 'The array will be be replaced with an empty object');
				obj[property] = {};
			}
		}
		$OKS(properties, value, obj[property], delimiter);
	} else {
		obj[property] = value;
	}
	return obj;
};
module.exports = $OKS;

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/pipe_log.js":
/*!******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/pipe_log.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Logs a value and returns it.
 * Use console.log to log the supplied value, combined with the || operator to return it.
 * @param data
 * @returns {*}
 */
module.exports = function (data) {
  return console.log(data) || data;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/plain_object.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/plain_object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return typeof Object['create'] !== 'undefined' ? Object.create(null) : {};
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/query_string.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/query_string.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return value from QueryString
 * @param name
 * @returns {string}
 */
module.exports = function (name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/rand_md5.js":
/*!******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/rand_md5.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _md = __webpack_require__(/*! locutus/php/strings/md5 */ "./node_modules/locutus/php/strings/md5.js");

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Unique random md5
 * @returns {String}
 */
module.exports = function () {
  return String((0, _md2.default)(Math.random() + '-' + Math.random() + '-' + Math.random()));
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/scroll_pos.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/scroll_pos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns the scroll position of the current page.
 * Use pageXOffset and pageYOffset if they are defined, otherwise scrollLeft and scrollTop. You can omit el to use a default value of window.
 * @param el
 * @returns {{x: number, y: number}}
 */
module.exports = function () {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  };
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/scroll_to_top.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/scroll_to_top.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Smooth-scrolls to the top of the page.
 * Get distance from top using document.documentElement.scrollTop or document.body.scrollTop.
 * Scroll by a fraction of the distance from the top. Use window.requestAnimationFrame() to animate the scrolling.
 */
module.exports = function () {
	var c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 8);
	}
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/time_taken.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/time_taken.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (callback) {
	var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'TimeTaken';

	console.time(title);
	var r = callback();
	console.timeEnd(title);
	return r;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/to_jquery.js":
/*!*******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/to_jquery.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is_jquery = __webpack_require__(/*! ./is_jquery */ "./node_modules/vsp-js-helper/parts/is_jquery.js");

var _is_jquery2 = _interopRequireDefault(_is_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns Given String into A jQuery Object.
 * @param $elem
 * @returns {*}
 */
module.exports = function ($elem) {
  if (false === (0, _is_jquery2.default)($elem)) {
    return jQuery($elem);
  }
  return $elem;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/to_js_func.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/to_js_func.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is_object_like = __webpack_require__(/*! ./is_object_like */ "./node_modules/vsp-js-helper/parts/is_object_like.js");

var _is_object_like2 = _interopRequireDefault(_is_object_like);

var _validateSingleJSFunc = __webpack_require__(/*! ./validateSingleJSFunc */ "./node_modules/vsp-js-helper/parts/validateSingleJSFunc.js");

var _validateSingleJSFunc2 = _interopRequireDefault(_validateSingleJSFunc);

var _empty = __webpack_require__(/*! locutus/php/var/empty */ "./node_modules/locutus/php/var/empty.js");

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function ($data) {
	var $args_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js_args';
	var $contents_key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'js_contents';

	if (true === (0, _is_object_like2.default)($data)) {
		for (var $key in $data) {
			if (!(0, _empty2.default)($data[$key])) {
				$data[$key] = (0, _validateSingleJSFunc2.default)($data[$key], $args_key, $contents_key);
			}
		}
	}
	return $data;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/url_params.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/url_params.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns an object containing the parameters of the current URL.
 * Use String.match() with an appropriate regular expression to get all key-value pairs,
 * Array.prototype.reduce() to map and combine them into a single object.
 * Pass location.search as the argument to apply to the current url.
 * @param url
 * @returns {T | {}}
 */
module.exports = function (url) {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
    return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
  }, {});
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/validateSingleJSFunc.js":
/*!******************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/validateSingleJSFunc.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is_object = __webpack_require__(/*! locutus/php/var/is_object */ "./node_modules/locutus/php/var/is_object.js");

var _is_object2 = _interopRequireDefault(_is_object);

var _is_undefined = __webpack_require__(/*! ./is_undefined */ "./node_modules/vsp-js-helper/parts/is_undefined.js");

var _is_undefined2 = _interopRequireDefault(_is_undefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function ($string) {
	var $args_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js_args';
	var $contents_key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'js_contents';

	if (true === (0, _is_object2.default)($string) && false === (0, _is_undefined2.default)($string[$args_key]) || false === (0, _is_undefined2.default)($string[$contents_key])) {
		var $args = $string[$args_key] === false ? false : $string[$args_key];
		var $contents = $string[$contents_key] === false ? false : $string[$contents_key];
		if ($args === false && $contents !== false) {
			return new Function($contents);
		} else if ($args !== false && $contents !== false) {
			return new Function($args, $contents);
		} else {
			return $string;
		}
	}
	return $string;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/window_arg.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/window_arg.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is_object = __webpack_require__(/*! locutus/php/var/is_object */ "./node_modules/locutus/php/var/is_object.js");

var _is_object2 = _interopRequireDefault(_is_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets JS Object Into Window Args.
 * @param $key
 * @param $value
 */
module.exports = function ($key, $value) {
	if ((0, _is_object2.default)($key)) {
		for (var $_k in $key) {
			window[$_k] = $key[$_k];
		}
	}
	window[$key] = $value;
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/wrap_array.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/wrap_array.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Casts the provided value as an array if it's not one.
 * Use Array.prototype.isArray() to determine if val is an array and return it as-is or encapsulated in an array accordingly.
 * @param val
 * @returns {*[]}
 */
module.exports = function (val) {
  return Array.isArray(val) ? val : [val];
};

/***/ }),

/***/ "./src/js/core/core.js":
/*!*****************************!*\
  !*** ./src/js/core/core.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global swal:true */


var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPOnion = function () {
	function WPOnion() {
		_classCallCheck(this, WPOnion);
	}

	_createClass(WPOnion, null, [{
		key: 'js_func',
		value: function js_func($data) {
			return (0, _index.to_js_func)($data, 'wponion_js_args', 'wponion_js_contents');
		}
	}, {
		key: 'rand_id',
		value: function rand_id() {
			return (0, _index.md5)('wponion_rand_' + (0, _index.microtime)() + (0, _index.rand_md5)());
		}
	}, {
		key: 'valid_json',
		value: function valid_json(obj) {
			try {
				JSON.parse(obj);
				return true;
			} catch (e) {
				return false;
			}
		}

		/**
   * Returns A Single Class For the Given Element.
   * @param $type
   * @returns {boolean}
   */

	}, {
		key: 'get_field_class',
		value: function get_field_class($type) {
			$type = (0, _index.strtolower)($type);

			if (false === (0, _index.is_undefined)(window.wponion_fields[$type])) {
				return window.wponion_fields[$type];
			} else if (false === (0, _index.is_undefined)(window['wponion_' + $type + '_field'])) {
				return window['wponion_' + $type + '_field'];
			} else if (false === (0, _index.is_undefined)(window[$type])) {
				return window[$type];
			}
			return false;
		}

		/**
   * Returns Field ID.
   * @param $elem
   * @returns {*}
   */

	}, {
		key: 'fieldID',
		value: function fieldID($elem) {
			return (0, _index.to_jquery)($elem).attr('data-wponion-jsid');
		}

		/**
   * Gets Field HTML Object Using Field ID.
   * @param $elem
   * @param $where_to_find
   * @returns {*}
   * @constructor
   */

	}, {
		key: 'IDtoElement',
		value: function IDtoElement($elem) {
			var $where_to_find = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var $id = WPOnion.fieldID($elem);
			if (false !== $where_to_find && (0, _index.is_jquery)($where_to_find)) {
				return $where_to_find.find('.wponion-element[data-wponion-jsid="' + $id + '"');
			}
			return jQuery('.wponion-element[data-wponion-jsid="' + $id + '"]');
		}

		/**
   * Checks if given value is an jQuery instance.
   * @param $elem
   * @returns {*}
   */

	}, {
		key: 'isField',
		value: function isField($elem) {
			return (0, _index.is_jquery)($elem) ? this.fieldID($elem) : false;
		}

		/**
   * Returns Window Args.
   * @param $var_id
   * @param $default
   * @returns {*}
   */

	}, {
		key: 'windowArgs',
		value: function windowArgs($var_id) {
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return (0, _index.is_window_arg)($var_id) ? window[$var_id] : $default;
		}

		/**
   * Checks & Returns Field Args.
   * @param $var_id
   * @param $default
   * @returns {*}
   */

	}, {
		key: 'fieldArgs',
		value: function fieldArgs($var_id) {
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			$var_id = this.isField($var_id) ? this.fieldID($var_id) : $var_id;
			return $var_id ? (0, _index.clone_object)(this.windowArgs($var_id, $default)) : $default;
		}

		/**
   * Chceks and returns global translation string.
   * @param $key
   * @param $default
   * @returns {string}
   */

	}, {
		key: 'txt',
		value: function txt($key) {
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'string_default_not_found';

			return false === (0, _index.is_undefined)(WPOnion.text[$key]) ? WPOnion.text[$key] : $default;
		}

		/**
   * Handles Loading Screen.
   * @param $elem
   * @param $is_show
   * @returns {*}
   */

	}, {
		key: 'loading_screen',
		value: function loading_screen($elem) {
			var $is_show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			$elem = (0, _index.to_jquery)($elem).find('.page-loader');
			if (true === $is_show) {
				return $elem.fadeIn('slow');
			}
			return $elem.fadeOut('slow');
		}

		/**
   * Handles Global Debug View POPUP.
   */

	}, {
		key: 'global_debug',
		value: function global_debug() {
			var $handle = jQuery('a.wponion-global-debug-handle'),
			    $json = {};
			if (WPOnion.debug_info === null && $handle.length > 0) {
				var $defined_vars = WPOnion.windowArgs('wponion_defined_vars');
				if ((0, _index.is_object_like)($defined_vars)) {
					for (var $key in $defined_vars) {
						if (false === (0, _index.is_undefined)($defined_vars[$key])) {
							$json[$defined_vars[$key]] = WPOnion.windowArgs($defined_vars[$key]);
						}
					}
					WPOnion.debug_info = $json;
				}
			}

			$handle.on('click', function (e) {
				e.preventDefault();
				swal({
					title: WPOnion.txt('global_json_output', 'Global WPOnion Debug Data'),
					html: jQuery('#wponiondebuginfopopup > div'),
					showConfirmButton: true,
					confirmButtonText: WPOnion.txt('get_json_output', 'Get JSON Output'),
					showCloseButton: false,
					animation: false,
					width: '800px',
					onBeforeOpen: function onBeforeOpen() {
						return swal.enableLoading();
					},
					onOpen: function onOpen() {
						jQuery('#swal2-content #wponion-global-debug-content').jsonView(WPOnion.debug_info);
						swal.disableLoading();
					}
				}).then(function (result) {
					if (result.value) {
						return swal({
							width: '600px',
							html: '<textarea style="min-width:550px; min-height:300px">' + JSON.stringify(WPOnion.debug_info) + '</textarea>'
						});
					}
				});
			});
		}

		/**
   * Checks and Retrives Values from $wponion.settings
   * @param $key
   * @param $default
   * @returns {*}
   */

	}, {
		key: 'option',
		value: function option($key) {
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var $args = WPOnion.settings_args;
			if (false === (0, _index.is_undefined)($args[$key])) {
				return $args[$key];
			}
			return $default;
		}

		/**
   * Returns true if WPOnion Debug is enabled.
   * @returns {*}
   */

	}, {
		key: 'is_debug',
		value: function is_debug() {
			return this.option('debug');
		}

		/**
   * Gather All Field JS Codes.
   */

	}, {
		key: 'field_debug',
		value: function field_debug() {
			if (WPOnion.is_debug() && (0, _index.is_null)(WPOnion.field_debug_info)) {
				var $vars = WPOnion.windowArgs('wponion_defined_vars'),
				    $json = {},
				    $utxt = WPOnion.txt('unmodified_debug'),
				    $mtxt = WPOnion.txt('modified_debug');

				for (var $key in $vars) {
					if (false === (0, _index.is_undefined)($vars[$key])) {
						var $data = WPOnion.windowArgs($vars[$key]);
						$json[$vars[$key]] = {};
						$json[$vars[$key]][$utxt] = $data.debug_info || $data;
						$json[$vars[$key]][$mtxt] = {};
					}
				}
				WPOnion.field_debug_info = $json;
			}
		}

		/**
   * Custom Ajax Wrapper For jQuery.Ajax()
   * @param $action
   * @param $data
   * @param $onSuccess
   * @param $onError
   * @param $onAlways
   */

	}, {
		key: 'ajax',
		value: function ajax() {
			var $action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var $data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var $onSuccess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var $onError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
			var $onAlways = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

			var $defaults = {
				method: 'post',
				url: WPOnion.option('ajax_url'),
				onSuccess: false,
				onAlways: false,
				onError: false
			},
			    $ajax = false;

			if ((0, _index.is_object_like)($action)) {
				$data = $action;
			} else {
				$defaults.url += '&' + WPOnion.option('ajax_action_key') + '=' + $action;
			}

			$defaults = (0, _index.array_merge)($defaults, $data);
			$onSuccess = (0, _index.is_undefined)($onSuccess) || false === $onSuccess ? $defaults.onSuccess : $onSuccess;
			$onAlways = (0, _index.is_undefined)($onError) || false === $onError ? $defaults.onAlways : $onAlways;
			$onError = (0, _index.is_undefined)($onAlways) || false === $onAlways ? $defaults.onError : $onError;
			$ajax = jQuery.ajax($defaults);

			if ($onSuccess) {
				$ajax.done(function (res) {
					return (0, _index.call_user_func)($onSuccess, res);
				});
			}

			if ($onError) {
				$ajax.fail(function (res) {
					return (0, _index.call_user_func)($onError, res);
				});
			}

			if ($onAlways) {
				$ajax.always(function (res) {
					return (0, _index.call_user_func)($onAlways, res);
				});
			}
			return $ajax;
		}

		/**
   * Handles WPOnion Template for underscore.
   * @param $id
   * @returns {function(*=): *}
   */

	}, {
		key: 'template',
		value: function template($id) {
			var compiled = void 0,
			    options = {
				evaluate: /<#([\s\S]+?)#>/g,
				interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
				escape: /\{\{([^\}]+?)\}\}(?!\})/g,
				variable: 'data'
			};

			return function (data) {
				compiled = compiled || _.template($id, options);
				return compiled(data);
			};
		}

		//@todo Migrate Plugin Debug Info.

	}]);

	return WPOnion;
}();

exports.default = WPOnion;

/***/ }),

/***/ "./src/js/core/debug.js":
/*!******************************!*\
  !*** ./src/js/core/debug.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, null, [{
		key: 'add',
		value: function add($key, $value) {
			if ((0, _index.is_undefined)(this.debug_info)) {
				this.debug_info = {};
			}

			if ((0, _index.is_undefined)(this.debug_info[$key])) {
				this.debug_info[$key] = $value;
			} else {
				this.debug_info[$key] = (0, _index.array_merge)($value, this.debug_info[$key]);
			}
		}
	}, {
		key: 'get',
		value: function get($key) {
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if ((0, _index.is_undefined)(this.debug_info)) {
				this.debug_info = {};
			}

			return (0, _index.is_undefined)(this.debug_info[$key]) ? $default : this.debug_info[$key];
		}
	}]);

	return _class;
}();

exports.default = _class;

/***/ }),

/***/ "./src/js/core/dependency.js":
/*!***********************************!*\
  !*** ./src/js/core/dependency.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dependency = __webpack_require__(/*! ../helpers/dependency */ "./src/js/helpers/dependency.js");

var _dependency2 = _interopRequireDefault(_dependency);

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function _class() {
	var _this = this;

	var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
	var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	_classCallCheck(this, _class);

	this.param = (0, _index.array_merge)({ nestable: false, parent: false }, param);
	var $this = this;
	this.base = {};
	this.base.$el = $element;
	this.base.init = function () {
		_this.base.ruleset = jQuery.deps.createRuleset();
		_this.base.depRoot();
		jQuery.deps.enable(_this.base.$el, _this.base.ruleset, {
			show: function show(el) {
				return el.removeClass('hidden');
			},
			hide: function hide(el) {
				return el.addClass('hidden');
			},
			log: false,
			checkTargets: false
		});
	};
	this.base.instance = [];
	this.base.depRoot = function () {
		_this.base.$el.each(function () {
			jQuery(this).find('.wponion-has-dependency').each(function () {
				$this.base.instance = new _dependency2.default(jQuery(this), $this.base.ruleset, {
					nestable: $this.param.nestable,
					parent: true === $this.param.nestable ? $this.base.$el : $this.param.parent
				});
			});
		});
	};

	this.base.init();
};

exports.default = _class;

/***/ }),

/***/ "./src/js/core/field.js":
/*!******************************!*\
  !*** ./src/js/core/field.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(/*! ./core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

var _debug = __webpack_require__(/*! ./debug */ "./src/js/core/debug.js");

var _debug2 = _interopRequireDefault(_debug);

var _module = __webpack_require__(/*! ./module */ "./src/js/core/module.js");

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { array_merge, empty, is_callable, is_jquery, is_undefined } from 'vsp-js-helper/index';
//const to_jquery    = require( 'vsp-js-helper/index' ).to_jquery;
/* global swal:true */
/* global console:true */

var array_merge = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").array_merge;
var empty = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").empty;
var is_callable = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").is_callable;
var is_jquery = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").is_jquery;
var is_undefined = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").is_undefined;

/**
 * WPOnion Field Abstract Class.
 */
var _class = function (_WPOnion_Module) {
	_inherits(_class, _WPOnion_Module);

	function _class($selector, $context) {
		var $config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, $selector, $context));

		_this.set_args(false);
		_this.field_debug();
		_this.config = $config;
		_this.init();
		_this.js_error_handler();
		_this.js_validator();
		return _this;
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {}
	}, {
		key: 'js_error',
		value: function js_error(err) {
			err.error.appendTo(this.element.find('.wponion-fieldset'));
		}
	}, {
		key: 'js_error_handler',
		value: function js_error_handler() {
			var _this2 = this;

			var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

			element.on('wponion_js_validation_message', '> .wponion-fieldset :input', function (e, data) {
				return _this2.js_error(data);
			});
		}
	}, {
		key: 'js_validator',
		value: function js_validator() {
			if (false === is_undefined(this.option('js_validate', false))) {
				if (false !== this.option('js_validate', false)) {
					this.js_validate_elem(this.option('js_validate', false), this.element);
				}
			}
		}
	}, {
		key: 'js_validate_elem',
		value: function js_validate_elem($args, $elem) {
			$elem.find(':input').each(function () {
				jQuery(this).rules('add', $args);
			});
		}
	}, {
		key: 'handle_args',
		value: function handle_args($arg) {
			var $key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var $args = _core2.default.js_func($arg),
			    $exists = _debug2.default.get(this.id(), { 'PHP Args': {}, 'JS Args': {} });

			if (false === $key) {
				$exists['JS Args'] = $args;
			} else {
				$exists['JS Args'][$key] = $args;
			}
			_debug2.default.add(this.id(), $exists);
			return $args;
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {
			if (false !== _debug2.default.get(this.id())) {
				return;
			}

			var $info = this.option('debug_info'),
			    $arr = {};

			if (false === is_undefined($info)) {
				if (false === empty($info)) {
					$arr['Raw Field Args'] = $info['Raw Field Args'];
					$arr.Field = $info['Field Args'];
					$arr['Field Errors'] = $info['Field Errors'];
					$arr['Field Value'] = $info['Field Value'];
					$arr['Plugin ID'] = $info['Plugin ID'];
					$arr.Module = $info.Module;
					$arr.Unique = $info.Unique;
					_debug2.default.add(this.id(), { 'PHP Args': $arr, 'JS Args': {} });
				}
			}

			var $found = false;
			if (!this.element.hasClass('wponion-field-debug')) {
				var $ID = this.id(),
				    $elem = jQuery('div.wponion-element[data-wponion-jsid=' + $ID + ']');
				if ($elem.hasClass('wponion-field-debug')) {
					$found = $elem;
				}
			} else {
				$found = this.element;
			}

			if (false !== $found) {
				var $this = this;

				$found.find('> .wponion-field-title > h4').attr('title', _core2.default.txt('click_to_view_debug_info', 'Click To View Field Debug Info')).tippy({
					arrow: true,
					arrowType: 'round',
					placement: 'bottom',
					theme: 'light',
					animation: 'scale'
				});

				$found.find('> .wponion-field-title > h4').on('click', function () {
					var $d = $this.id() + 'debugINFO',
					    $notice_txt = '<p class=\'wponion-field-debug-notice\'>' + _core2.default.option('debug_notice') + '</p>',
					    $elem = jQuery('<div id="' + $d + '" class="wponion-field-debug-popup" ><div id="' + $d + '" ></div>' + $notice_txt + '</div>');
					var $data = _debug2.default.get($this.id());
					swal({
						html: $elem,
						showConfirmButton: true,
						confirmButtonText: _core2.default.txt('get_json_output', 'As JSON'),
						showCloseButton: false,
						width: '800px',
						onOpen: function onOpen() {
							return jQuery('#swal2-content > div > #' + $d).jsonView($data);
						}
					}).then(function (result) {
						if (result.value) {
							swal({
								width: '600px',
								html: '<textarea style="min-width:550px; min-height:300px">' + JSON.stringify(_debug2.default.get($this.id())) + '</textarea>'
							});
						}
					});
				});
			}
		}
	}, {
		key: 'options',
		value: function options() {
			if (this._args === false) {
				this._args = _core2.default.windowArgs(this.id());
			}
			return this._args;
		}
	}, {
		key: 'option',
		value: function option() {
			var $key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var $args = this.options();
			return false === is_undefined($args[$key]) ? $args[$key] : $default;
		}
	}, {
		key: 'id',
		value: function id() {
			return _core2.default.fieldID(this.element);
		}
	}, {
		key: 'module',
		value: function module() {
			return this.option('module', false);
		}
	}, {
		key: 'plugin_id',
		value: function plugin_id() {
			return this.option('plugin_id', false);
		}
	}, {
		key: 'ajax',
		value: function ajax() {
			var $action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var $data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var $ajax_key = _core2.default.option('ajax_action_key');
			var $default = {
				plugin_id: this.plugin_id(),
				module: this.module()
			};
			$default[$ajax_key] = $action;
			$data.data = false === is_undefined($data.data) ? array_merge($default, $data.data) : $default;

			return _core2.default.ajax($data);
		}
	}, {
		key: 'init_field',
		value: function init_field($elem, $type) {
			var $_instances = [];
			if (!is_jquery($elem)) {
				$elem = this.element.find($elem);
			}
			var $this = this;
			$elem.each(function () {
				var $class = _core2.default.get_field_class($type);
				if (false !== $class) {
					try {
						if (is_callable($class)) {
							$_instances.push(new $class(jQuery(this)));
						}
					} catch (e) {
						console.log(jQuery(this));
						console.log('Error: ' + e + ' | For : ' + $type);
						console.log('--------------------------------------------------------');
					}
				}
			});
		}
	}, {
		key: 'reload',
		value: function reload() {
			wp.hooks.addAction('wponion_before_fields_reload');
			this.init_field('.wponion-element-icon_picker', 'icon_picker');
			this.init_field('.wponion-element-font_picker', 'font_selector');
			this.init_field('.wponion-element-accordion', 'accordion');
			this.init_field('.wponion-element-group', 'group');
			this.init_field('.wponion-element-text:not(.wponion-inputmask)', 'text');
			this.init_field('.wponion-element-textarea', 'textarea');
			this.init_field('.wponion-element-background', 'background');
			this.init_field('.wponion-element-image_select', 'image_select');
			this.init_field('.wponion-element-select', 'select');
			this.init_field('.wponion-element-switcher', 'switcher');
			this.init_field('.wponion-element-color_palette', 'color_palette');
			this.init_field('.wponion-element-wp_editor', 'wp_editor');
			this.init_field('.wponion-element-fieldset', 'fieldset');
			this.init_field('input[data-wponion-inputmask]', 'inputmask');
			this.init_field('.wponion-element-wp_link', 'wp_links');
			this.init_field('.wponion-element-checkbox', 'checkbox_radio');
			this.init_field('.wponion-element-radio', 'checkbox_radio');
			this.init_field('.wponion-element-key_value', 'keyvalue_pair');
			this.init_field('.wponion-element-color_picker', 'color_picker');
			this.init_field('.wponion-element-date_picker', 'date_picker');
			this.init_field('.wponion-element-gallery', 'gallery');
			this.init_field('.wponion-element-upload', 'upload');
			this.init_field('.wponion-element-image', 'image_upload');
			this.init_field('.wponion-element-tab', 'jquery_tab');
			this.init_field('.wponion-field-tooltip', 'field_tooltip');
			this.init_field('.wponion-element-google_maps', 'google_maps');
			this.init_field('.wponion-help', 'field_tooltip');
			this.init_field('.wponion-wrap-tooltip', 'field_tooltip');
			this.init_field('.wponion-element-clone', 'clone_element');
			this.init_field('.select2', 'select2');
			this.init_field('.chosen', 'chosen');
			this.init_field('.selectize', 'selectize');
			this.init_field('.wponion-element-sorter', 'sorter');
			this.init_field('.wponion-element-typography', 'typography');
			this.init_field('.wponion-element-oembed', 'oembed');
			wp.hooks.addAction('wponion_after_fields_reload');
			return this;
		}
	}, {
		key: 'set_args',
		value: function set_args($args) {
			this._args = $args;
			return this;
		}
	}, {
		key: 'get_field_parent_by_id',
		value: function get_field_parent_by_id($elem) {
			var $ID = _core2.default.fieldID($elem);
			return jQuery('div.wponion-element[data-wponion-jsid="' + $ID + '"]');
		}
	}]);

	return _class;
}(_module2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/core/module.js":
/*!*******************************!*\
  !*** ./src/js/core/module.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class($selector, $context) {
		_classCallCheck(this, _class);

		if (!$selector.jQuery) {
			$selector = jQuery($selector);
		}
		this.set_element($selector);
		this.set_contxt($context);
		this.module_init();
	}

	_createClass(_class, [{
		key: "module_init",
		value: function module_init() {}
	}, {
		key: "set_element",
		value: function set_element($elem) {
			if (!$elem.jQuery) {
				$elem = jQuery($elem);
			}
			this.elem = $elem;
			return this;
		}
	}, {
		key: "set_contxt",
		value: function set_contxt($contxt) {
			this.context = $contxt;
			return this;
		}
	}, {
		key: "hook",
		get: function get() {
			return window.wp.hooks;
		}
	}, {
		key: "element",
		get: function get() {
			return this.elem;
		}
	}, {
		key: "contxt",
		get: function get() {
			return this.context;
		}
	}]);

	return _class;
}();

exports.default = _class;

/***/ }),

/***/ "./src/js/core/validation.js":
/*!***********************************!*\
  !*** ./src/js/core/validation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(/*! ./core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPOnion_Validator = function () {
	function WPOnion_Validator() {
		var _this = this;

		_classCallCheck(this, WPOnion_Validator);

		this.form = WPOnion_Validator.get_form();
		this.rules = {
			invalidHandler: function invalidHandler() {
				jQuery('#publish').removeClass('button-primary-disabled');
				jQuery('#ajax-loading').attr('style', '');
				_this.form.siblings('#message').remove();
				_this.form.before('<div id="message" class="error"><p>' + _core2.default.txt('validation_summary') + '</p></div>');
			},
			ignore: false,
			errorPlacement: function errorPlacement(error, element) {
				element.trigger('wponion_js_validation_message', { error: error, element: element });
			},
			errorClass: 'wponion-error',
			errorElement: 'p'
		};
		this.form.validate(this.rules);
	}

	_createClass(WPOnion_Validator, null, [{
		key: 'get_form',
		value: function get_form() {
			if (jQuery('form.wponion-form').length > 0) {
				return jQuery('form.wponion-form');
			}

			if (jQuery('form#your-profile').length > 0) {
				return jQuery('form#your-profile');
			}
			return jQuery('form.wponion-form');
		}
	}]);

	return WPOnion_Validator;
}();

exports.default = WPOnion_Validator;

/***/ }),

/***/ "./src/js/fields/accordion.js":
/*!************************************!*\
  !*** ./src/js/fields/accordion.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			this.element.find('.wponion-accordion-wrap').each(function () {
				jQuery(this).accordion({
					header: '> .wponion-accordion-title',
					collapsible: true,
					animate: 150,
					heightStyle: 'content',
					active: jQuery(this).hasClass('is_open'),
					icons: {
						'header': 'dashicons dashicons-arrow-right',
						'activeHeader': 'dashicons dashicons-arrow-down'
					}
				});
			});
		}
	}, {
		key: 'js_error',
		value: function js_error(err) {
			var $elem = _core2.default.IDtoElement(err.element, this.element);
			if ($elem) {
				err.error.appendTo($elem.find('> .wponion-fieldset'));
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/background.js":
/*!*************************************!*\
  !*** ./src/js/fields/background.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
  _inherits(_class, _WPOnion_Field);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/checkbox_radio.js":
/*!*****************************************!*\
  !*** ./src/js/fields/checkbox_radio.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			if (this.element.find('input.wponion-custom-value-input').length > 0) {
				var $inputs = this.element.find('input.wponion-custom-value-input');
				this.element.find('input[type=radio]').on('click', function () {
					return $inputs.removeAttr('name');
				});

				$inputs.on('click', function () {
					jQuery(this).parent().find('input[type=radio],input[type=checkbox]').prop('checked', true);
					jQuery(this).attr('name', jQuery(this).attr('data-name'));
				});
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/chosen.js":
/*!*********************************!*\
  !*** ./src/js/fields/chosen.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			this.element.chosen(this.handle_args(this.option('chosen', {})));
			return this;
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/clone_element.js":
/*!****************************************!*\
  !*** ./src/js/fields/clone_element.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global setTimeout:true */
/* global wponion_field:true */
var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $arg = this.handle_args(this.option('clone', {}));
			var $this = this,
			    $elem = $this.element,
			    $clone_wrap = $elem.find('div.wponion-clone-wrap'),
			    $add_btn = $elem.find('button[data-wponion-clone-add]'),

			//$remove_btn = $clone_wrap.find( 'button[data-wponion-clone-remove]' ),
			$limit = $arg.limit !== undefined ? $arg.limit : false,

			//$is_toast   = ( $arg.toast_error !== undefined ) ? $arg.toast_error : true,
			$eror_msg = $arg.error_msg,
			    $sort = $arg.sort !== false ? {
				items: '.wponion-field-clone',
				handle: '.wponion-field-clone-sorter',
				placeholder: 'wponion-cloner-placeholder',
				start: function start(event, ui) {
					return ui.item.css('background-color', '#eeee');
				},
				stop: function stop(event, ui) {
					return ui.item.removeAttr('style');
				}
			} : false;

			$clone_wrap.WPOnionCloner({
				add_btn: $add_btn,
				limit: $limit,
				clone_elem: '.wponion-field-clone',
				remove_btn: 'a.wponion-remove',
				template: $this.option('clone_template'),
				templateAfterRender: function templateAfterRender($e) {
					return wponion_field($e.find('> div.wponion-field-clone:last-child')).reload();
				},
				sortable: $sort,
				onLimitReached: function onLimitReached() {
					/*if( $is_toast === true ) {
     	// @todo Add Toast Option.
     	/!*wpo.tost( {
     		type: "error",
     		title: $eror_msg,
     	} );*!/
     } else {*/
					var $html = jQuery('<div class="alert alert-warning" role="alert">' + $eror_msg + '</div>').hide();
					$add_btn.parent().prepend($html);
					$add_btn.parent().find('div.alert').fadeIn(function () {
						var $__E = jQuery(this);
						setTimeout(function () {
							return $__E.fadeOut('slow', function () {
								return $__E.remove();
							});
						}, 1000);
					});
					//}
				},
				show_animation: $arg.animations.show,
				hide_animation: $arg.animations.hide
			});
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/color_palette.js":
/*!****************************************!*\
  !*** ./src/js/fields/color_palette.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
  _inherits(_class, _WPOnion_Field);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/color_picker.js":
/*!***************************************!*\
  !*** ./src/js/fields/color_picker.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			this.element.find('input').wpColorPicker();
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/date_picker.js":
/*!**************************************!*\
  !*** ./src/js/fields/date_picker.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $this = this,
			    $elem = $this.element,
			    $settings = this.handle_args(this.option('settings')),
			    $view = void 0;

			if (false === (0, _index.is_undefined)($settings.theme)) {
				$view = $settings.theme;
				delete $settings.theme;
			} else {
				$view = 'default';
			}

			if (jQuery('div#' + this.id()).length === 0) {
				jQuery('body').append(jQuery('<div class="wponion-datepicker-' + $view + '" id="' + this.id() + '"></div>'));
			}

			if ($elem.hasClass('wponion-datepicker-range')) {
				$settings.appendTo = jQuery('div#' + this.id())[0];
				if ($settings.plugins === undefined) {
					$settings.plugins = [];
				}

				$settings.plugins.push(new rangePlugin({ input: $elem.find('input[data-wponion-datepicker-to-date]')[0] }));
				$elem.find('input[data-wponion-datepicker-from-date]').flatpickr($settings);
			} else {
				$settings.appendTo = jQuery('div#' + this.id())[0];
				$elem.find('input').flatpickr($settings);
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/fieldset.js":
/*!***********************************!*\
  !*** ./src/js/fields/fieldset.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'js_error',
		value: function js_error(err) {
			var $elem = _core2.default.IDtoElement(err.element, this.element);
			if ($elem) {
				err.error.appendTo($elem.find('> .wponion-fieldset'));
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/font_selector.js":
/*!****************************************!*\
  !*** ./src/js/fields/font_selector.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'build_options',
		value: function build_options(data) {
			var $return = '';
			for (var $_d in data) {
				if (false === (0, _index.is_undefined)(data[$_d])) {
					$return += '<option value="' + $_d + '">' + data[$_d] + '</option>';
				}
			}
			return $return;
		}
	}, {
		key: 'init',
		value: function init() {
			var _this2 = this;

			this.element.find('select.wponion-font-selector').on('change', function (e) {
				var $val = jQuery(e.currentTarget).val(),
				    $html = null;

				if (false === (0, _index.is_undefined)(_this2.websafe.fonts[$val])) {
					$html = _this2.build_options(_this2.websafe.variants);
				} else if (false === (0, _index.is_undefined)(_this2.google_fonts[$val])) {
					$html = _this2.build_options(_this2.google_fonts[$val]);
				}
				var $variant = _this2.element.find('select.wponion-variant-selector').html($html);

				if ($variant.hasClass('chosen')) {
					$variant.trigger('chosen:updated');
				} else if ($variant.hasClass('select2')) {
					$variant.trigger('change');
				}
			});
		}
	}, {
		key: 'websafe',
		get: function get() {
			return _core2.default.windowArgs('wponion_websafe_fonts');
		}
	}, {
		key: 'google_fonts',
		get: function get() {
			return _core2.default.windowArgs('wponion_gfonts');
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/gallery.js":
/*!**********************************!*\
  !*** ./src/js/fields/gallery.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			var $this = this,
			    $elem = $this.element,
			    $html_temp = $this.option('html_template'),
			    $input = $elem.find('input#image_id'),
			    $preview = $elem.find('.wponion-image-preview'),
			    wp_media_frame = void 0,
			    $add = $elem.find('button[data-wponion-gallery-add]'),
			    $edit = $elem.find('button[data-wponion-gallery-edit]'),
			    $clear = $elem.find('button[data-wponion-gallery-clear]'),
			    $manage = function $manage($type) {
				var ids = $input.val(),
				    what = $type === 'edit' ? 'edit' : 'add',
				    state = what === 'add' && !ids.length ? 'gallery' : 'gallery-edit';

				if (typeof wp === 'undefined' || !wp.media || !wp.media.gallery) {
					return;
				}

				$preview.html('');

				if (state === 'gallery') {
					wp_media_frame = wp.media({
						library: { type: 'image' },
						frame: 'post',
						state: 'gallery',
						multiple: true
					});
					wp_media_frame.open();
				} else {
					wp_media_frame = wp.media.gallery.edit('[gallery ids="' + ids + '"]');
					if (what === 'add') {
						wp_media_frame.setState('gallery-library');
					}
				}

				wp_media_frame.on('update', function (selection) {
					var selectedIds = selection.models.map(function (attachment) {
						var item = attachment.toJSON();
						if (item.sizes === undefined) {
							return false;
						}

						var thumb = typeof item.sizes.thumbnail !== 'undefined' ? item.sizes.thumbnail.url : item.url,
						    $tmp = jQuery($html_temp);
						$tmp.attr('data-wponion-image_id', item.id);
						$tmp.find('img').attr('data-fullsize', item.url).attr('src', thumb).removeClass('hide');
						$preview.append($tmp);
						$preview.find('.wponion-help').tippy();
						return item.id;
					});
					var $e = void 0;
					for ($e in selectedIds) {
						if (selectedIds[$e] === false || selectedIds[$e] === '') {
							delete selectedIds[$e];
						}
					}
					$input.val(selectedIds.join(',')).trigger('change');
				});
			};

			$input.on('change', function () {
				if (jQuery(this).val() === '') {
					$add.show();
					$edit.hide();
					$clear.hide();
				} else {
					$edit.show();
					$clear.show();
					$add.hide();
				}
			});

			$add.on('click', function () {
				return $manage('add');
			});

			$edit.on('click', function () {
				return $manage('edit');
			});

			$clear.on('click', function () {
				$input.val('');
				$preview.html('');
				$clear.hide();
				$edit.hide();
				$add.show();
			});

			$preview.on('click', 'img', function (event) {
				return _this2.init_field(event.target, 'image_popup');
			});

			$preview.on('click', 'i.wponion-image-remove', function () {
				var $parent = jQuery(this).parent(),
				    $image_id = $parent.attr('data-wponion-image_id'),
				    $value = $input.val().split(',');
				jQuery.each($input.val().split(','), function ($k, $v) {
					if ($v === $image_id) {
						$value.splice($k, 1);
					}
				});

				$input.val($value.join(','));
				$parent.fadeOut(function () {
					return $parent.remove();
				});
				$input.trigger('change');
			});

			$input.trigger('change');

			if ($preview.hasClass('gallery-sortable')) {
				$preview.sortable({
					items: '> div',
					cursor: 'move',
					scrollSensitivity: 40,
					forcePlaceholderSize: true,
					placeholder: 'sortable-placeholder',
					helper: 'clone',
					opacity: 0.65,
					start: function start(event, ui) {
						var $item = ui.item;
						$preview.find('.sortable-placeholder').css('width', $item.width());
						$preview.find('.sortable-placeholder').css('height', $item.height());
					}
				});
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/google_maps.js":
/*!**************************************!*\
  !*** ./src/js/fields/google_maps.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global google:true */


var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			var $map = this.option('map', {});
			$map.details = '#gmap_fields_' + this.id();
			$map.detailsAttribute = 'data-map-value';
			if ('yes' === this.option('show_map')) {
				$map.map = '#gmap_' + this.id();
			}

			var $_instance = this.elem.find('div.searchbox > input');
			$_instance.geocomplete(this.handle_args($map));
			$_instance.bind('geocode:dragged', function (event, latLng) {
				var geocoder = new google.maps.Geocoder();
				_this2.elem.find('.map_fields :input').val('');
				geocoder.geocode({
					'location': {
						lat: parseFloat(latLng.lat()),
						lng: parseFloat(latLng.lng())
					}
				}, function (results) {
					$_instance.geocomplete('fillDetails', results[0]);
				});
			});
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/group.js":
/*!********************************!*\
  !*** ./src/js/fields/group.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _dependency = __webpack_require__(/*! ../core/dependency */ "./src/js/core/dependency.js");

var _dependency2 = _interopRequireDefault(_dependency);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global setTimeout:true */
var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			var $this = this,
			    $add = this.element.find('> .wponion-fieldset > button[data-wponion-group-add]'),
			    $group_wrap = this.element.find('> .wponion-fieldset > .wponion-group-wrap'),
			    $limit = $this.option('limit'),
			    $error_msg = $this.option('error_msg');

			this.init_field(this.element.find('.wponion-group-wrap'), 'accordion');

			$group_wrap.find('> .wponion-accordion-wrap').each(function () {
				new _dependency2.default(jQuery(this), { nestable: true });
			});

			this.element.find('.wponion-group-remove').tippy();
			this.element.on('click', '.wponion-group-remove', function () {
				jQuery(this).parent().parent().find('> .wponion-accordion-content > .wponion-group-action > button').click();
			});

			$group_wrap.WPOnionCloner({
				add_btn: $add,
				limit: parseInt($limit),
				clone_elem: '> .wponion-fieldset > .wponion-accordion-wrap',
				remove_btn: '.wponion-group-action > button',
				template: this.option('group_template'),
				onRemove: function onRemove($elem) {
					$elem.parent().parent().parent().remove();
					if (jQuery('body').find('link#editor-buttons-css').length === 0) {
						jQuery('body').append('<link rel="stylesheet" id="editor-buttons-css" href="' + _core2.default.settings('wpeditor_buttons_css') + '" type="text/css" media="all">');
					}
				},
				templateAfterRender: function templateAfterRender() {
					var $data = $group_wrap.find('> .wponion-accordion-wrap:last-child');
					_this2.init_field($group_wrap, 'accordion');
					_this2.js_validate_elem(_this2.option('js_validate', false), $data);
					$data.find('.wponion-group-remove').tippy();
					new _dependency2.default($group_wrap.find('> .wponion-accordion-wrap:last-child'), { nestable: true });
					wponion_field($data).reload();
					_this2.init_field($data.find('.wponion-element-wp_editor'), 'reload_wp_editor');
				},
				sortable: {
					items: '.wponion-accordion-wrap',
					handle: '.wponion-accordion-title',
					placeholder: 'wponion-accordion-placeholder',
					start: function start(event, ui) {
						ui.item.css('background-color', '#eeee');
					},
					stop: function stop(event, ui) {
						ui.item.removeAttr('style');
					}

				},
				onLimitReached: function onLimitReached() {
					var $html = jQuery('<div class="alert alert-warning" role="alert">' + $error_msg + '</div>').hide();
					$add.before($html);
					$add.parent().find('div.alert').fadeIn(function () {
						var $__E = jQuery(this);
						setTimeout(function () {
							$__E.fadeOut('slow', function () {
								$__E.remove();
							});
						}, 1000);
					});
				}
			});
		}
	}, {
		key: 'js_error',
		value: function js_error(err) {
			var $elem = _core2.default.IDtoElement(err.element, this.element);
			if ($elem) {
				err.error.appendTo($elem.find('> .wponion-fieldset'));
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/icon_picker.js":
/*!**************************************!*\
  !*** ./src/js/fields/icon_picker.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global swal:true*/

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $_this = this,
			    $elem = $_this.element,
			    $args = $_this.options(),
			    $input = $elem.find('.wponion-icon-picker-input'),
			    $remove_btn = $elem.find('button[data-wponion-iconpicker-remove]'),
			    $add_btn = $elem.find('button[data-wponion-iconpicker-add]'),
			    $preview = $elem.find('span.wponion-icon-preview');

			var $work = {
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
				elm: null,
				/**
     * Creates A New Instance for ToolTip.
     */
				init_tooltip: function init_tooltip() {
					if ($args.popup_tooltip !== 'false') {
						var $tp = _typeof($args.popup_tooltip) === 'object' ? $args.popup_tooltip : {};
						if ($work.elems.length > 0) {
							$work.elems.tippy($tp);
						}
					}
				},
				/**
     * Inits For each and every POPUP.
     * @param $elm
     * @param $instance
     */
				init: function init($elm, $instance) {
					$work.elm = $elm;
					$work.popup = $instance;
					$work.elems = $work.elm.find('span.wponion-icon-preview');
					var $height = $work.elm.find('.wponion-icon-picker-container-scroll').css('height');
					$work.elm.find('.wponion-icon-picker-container-scroll').css('height', $height);
					$work.select();
					$work.input();
					$work.elems.on('click', function () {
						var $icon = jQuery(this).attr('data-icon');
						$input.val($icon).trigger('change');
						swal.closeModal();
					});
					$work.init_tooltip();
				},
				/**
     * Works with POPUP Input Search.
     */
				input: function input() {
					$work.elm.find('div.wponion-icon-picker-model-header input[type=text]').on('keyup', function () {
						var $val = jQuery(this).val();
						$work.elems.each(function () {
							if (jQuery(this).attr('data-icon').search(new RegExp($val, 'i')) < 0) {
								jQuery(this).parent().hide();
							} else {
								jQuery(this).parent().show();
							}
						});
					});
				},
				/**
     * Handles Selectbox in popup.
     */
				select: function select() {
					$work.elm.find('div.wponion-icon-picker-model-header select').on('change', function () {
						swal.enableLoading();
						var $val = jQuery(this).val();
						_core2.default.ajax('icon_picker', {
							data: {
								'wponion-icon-lib': $val,
								enabled: $args.enabled,
								disabled: $args.disabled
							}
						}, function ($res) {
							if ($res.success) {
								swal.resetValidationMessage();
								jQuery($work.elm).find('#swal2-content').html($res.data).show();
								jQuery($work.elm).find('#swal2-content .wponion-icon-picker-container-scroll');
								$work.init($work.elm, $work.popup);
							} else {
								jQuery($work.elm).find('.wponion-icon-picker-container-scroll').remove();
								$work.popup.showValidationError($res.data);
							}
						}, function () {
							return $work.popup.showValidationError(_core2.default.txt('unknown_ajax_error'));
						}, function () {
							return $work.popup.disableLoading();
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
				var $val = jQuery(this).val();

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
					title: $elem.find('.wponion-field-title h4').html(),
					animation: false,
					allowOutsideClick: false,
					showConfirmButton: false,
					showCloseButton: true,
					width: '700px',
					customClass: 'wponion-icon-picker-model',
					onBeforeOpen: function onBeforeOpen($elem) {
						swal.enableLoading();
						$_this.ajax('icon_picker', {
							data: {
								enabled: $args.enabled,
								disabled: $args.disabled
							},
							onSuccess: function onSuccess($res) {
								if ($res.success) {
									swal.resetValidationMessage();
									var $popup_elem = jQuery($elem);
									$popup_elem.find('#swal2-content').html($res.data).show();
									$popup_elem.find('#swal2-content .wponion-icon-picker-container-scroll');
									$work.init($popup_elem, $popup);
								} else {
									$popup.showValidationError($res.data);
								}
							},
							onError: function onError() {
								return $popup.showValidationError(_core2.default.txt('unknown_ajax_error'));
							},
							onAlways: function onAlways() {
								return $popup.disableLoading();
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

			return this;
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/image_select.js":
/*!***************************************!*\
  !*** ./src/js/fields/image_select.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
  _inherits(_class, _WPOnion_Field);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/image_upload.js":
/*!***************************************!*\
  !*** ./src/js/fields/image_upload.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			var $this = this,
			    $elem = $this.element,
			    $input = $elem.find('input#image_id'),
			    $preview_add = $elem.find('.wponion-image-preview .wponion-preview-add'),
			    $preview = $elem.find('.wponion-image-preview .wponion-preview');

			$this.media_instance = null;
			$input.on('change', function () {
				if (jQuery(this).val() === '') {
					$preview.hide();
					$preview_add.show();
				} else {
					$preview_add.hide();
					$preview.show();
				}

				$this.hook.doAction('wponion_image_upload_updated', $input, $preview, $preview_add);
			});

			$preview_add.on('click', function () {
				if (typeof wp === 'undefined' || !wp.media || !wp.media.gallery) {
					return;
				}

				if ($this.media_instance) {
					$this.media_instance.open();
					return;
				}

				$this.media_instance = wp.media({
					library: { type: 'image' },
					title: $this.option('frame_title', "Select Image")
				});
				$this.media_instance.on('select', function () {
					var attachment = $this.media_instance.state().get('selection').first().attributes;
					var thumbnail = typeof attachment.sizes !== 'undefined' && typeof attachment.sizes.thumbnail !== 'undefined' ? attachment.sizes.thumbnail.url : attachment.url;
					$preview.find('img').attr('src', thumbnail).attr('data-fullsize', attachment.url);
					$input.val(attachment.id).trigger('change');
				});
				$this.media_instance.open();
			});

			$preview.find('.wponion-image-remove').on('click', function () {
				return $input.val('').trigger('change');
			});
			$preview.on('click', 'img', function (event) {
				return _this2.init_field(event.target, 'image_popup');
			});
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/inputmask.js":
/*!************************************!*\
  !*** ./src/js/fields/inputmask.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			if (this.element.length > 0) {
				var $settings = this.option('inputmask');
				if ($settings) {
					$settings = this.handle_args($settings, 'InputMask');
					this.element.inputmask($settings);
				}
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/jquery_tab.js":
/*!*************************************!*\
  !*** ./src/js/fields/jquery_tab.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $this = this,
			    $elem = $this.element,
			    $this_elem = $elem.find('> .wponion-fieldset > .wponion-tab-wrap ');

			$this_elem.find('> ul.wponion-tab-menus li a').on('click', function (e) {
				e.preventDefault();
				var $_this = jQuery(this);
				$_this.parent().parent().find('.wponion-tab-current').removeClass('wponion-tab-current');
				$_this.parent().addClass('wponion-tab-current');
				$elem.find('.wponion-tab-page').hide();
				$elem.find('.wponion-tab-page').removeClass('wponion-tab-current');
				var $tab = $_this.attr('data-tab-name');
				$elem.find('div#wponion-tab-' + $tab).addClass('wponion-tab-current').show();
			});

			if ($this_elem.find('> ul.wponion-tab-menus li.current').length > 0) {
				$this_elem.find('> ul.wponion-tab-menus li.current a').trigger('click');
			} else {
				$this_elem.find('> ul.wponion-tab-menus li:first-child a').trigger('click');
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/keyvalue_pair.js":
/*!****************************************!*\
  !*** ./src/js/fields/keyvalue_pair.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _is_undefined = __webpack_require__(/*! vsp-js-helper/parts/is_undefined */ "./node_modules/vsp-js-helper/parts/is_undefined.js");

var _is_undefined2 = _interopRequireDefault(_is_undefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			this.global_validate = false;
			this.element.find('.wponion-keyvalue_wrap').WPOnionCloner({
				add_btn: this.element.find('.wponion-fieldset > .wponion-keyvalue-action-container  > button[data-wponion-keyvalue-add]'),
				limit: -1 === this.option('limit') ? null : this.option('limit'),
				clone_elem: '> .wponion-fieldset > .wponion-keyvalue-field',
				remove_btn: '.wponion-keyvalue-field > button[data-wponion-keyvalue-remove]',
				template: this.option('html_template'),
				templateAfterRender: function templateAfterRender($elem) {
					_this2.hook.doAction('wponion_key_value_updated', $elem);
					_this2.js_validate_elem(_this2.option('js_validate', false), $elem.find('> div:last-child'));
				},
				onRemove: function onRemove($elem) {
					$elem.parent().remove();
					_this2.hook.doAction('wponion_key_value_updated', $elem);
				},
				onLimitReached: function onLimitReached() {
					var $html = jQuery('<div class="alert alert-warning" role="alert">' + _this2.option('error_msg') + '</div>').hide();
					_this2.element.find('.wponion-keyvalue_wrap').after($html);
					_this2.element.find('div.alert').fadeIn(function () {
						var $__E = jQuery(this);
						setTimeout(function () {
							$__E.fadeOut('slow', function () {
								$__E.remove();
							});
						}, 1000);
					});
				}
			});
		}
	}, {
		key: 'js_error',
		value: function js_error(err) {
			err.error.appendTo(err.element.parent().parent());
		}

		/**
   *
   * @param $args
   * @param $elem
   */

	}, {
		key: 'js_validate_elem',
		value: function js_validate_elem($args, $elem) {
			if (true !== (0, _is_undefined2.default)($args.key)) {
				$elem.find('.wponion-keyvalue-field').each(function () {
					jQuery(this).find('> div').eq(0).find(':input').rules('add', $args.key);
				});
			}
			if (true !== (0, _is_undefined2.default)($args.value)) {
				$elem.find('.wponion-keyvalue-field').each(function () {
					jQuery(this).find('> div').eq(1).find(':input').rules('add', $args.value);
				});
			}

			if (true === (0, _is_undefined2.default)($args.key) && true === (0, _is_undefined2.default)($args.value)) {
				$elem.find(':input').each(function () {
					jQuery(this).rules('add', $args);
				});
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/oembed.js":
/*!*********************************!*\
  !*** ./src/js/fields/oembed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			this.image = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTBGNEVDQjg4RDAxRTAxMThBMkRDNEU2NzhFQkEzRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5N0E3OEE1OUNFMTFFNTg1RUVBMEU5N0I2QkZBMzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUU5N0E3ODk1OUNFMTFFNTg1RUVBMEU5N0I2QkZBMzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNCBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDM2MDU2QzJGQkVERTAxMTk1NUVCRTAzRUE4QjRENUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEVGNEVDQjg4RDAxRTAxMThBMkRDNEU2NzhFQkEzRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAETARMDAREAAhEBAxEB/8QAiQABAAMAAwEBAAAAAAAAAAAAAAQFBgEDBwIIAQEAAAAAAAAAAAAAAAAAAAAAEAABAwMDAQMGBw8CAwkAAAABAAIDEQQFIRIGMUETB1FhcYEiMpGhscFCghThUmJykqKywiMzc7N0FTYkN9HTF+JDU5OjVDVVFhEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/VKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOueeKCMySuDGDqSg6I8vjXmjZ2/Wq35QEHey4t5PclY/8AFcD8iDsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFNyeXbbRR/fuJ/JH3UGb3IOdyDsjvLmP93K9vmDiEElmcybBQTkjzhp+MhBIZya9bQOZG/ymhB+IoJMfKW/95b+trv+IQSY+SY93vB7PORUfESgkx5jGSe7cNH41W/pUQS2PY9oexwc09HA1BQcoCAgICAgICAgICAgICAgICAgICAgICAgIM3yqb9vBF960u/KNP1UFbioG3N/DC8bmOPtDygCpQaSTj2MePZYYz5WuPz1QRZOLQEfs5nA+cAoIz+L3Y9yZh9NR8yCM7j2VB0jDvOHN+chBGkxmSjNHW8nqaT8iDofHNGaPY5p8hBCD43INdx1jm4xpJ99znN9HT5kFmgICAgICAgICAgICAgICAgICAgICAgICAgx/J59+ULf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';
			this.element.find('.wponion-oembed-preview').before('<span class="spinner wponion-spinner"></span>');
			this.element.find(':input').on('change', function (e) {
				return _this2.show_preview(e);
			});
		}
	}, {
		key: 'show_preview',
		value: function show_preview() {
			var _this3 = this;

			var $value = this.element.find(':input').val();
			this.element.find('.wponion-spinner').addClass('is-active');
			_core2.default.ajax('oembed-preview', {
				method: 'POST',
				data: {
					value: $value
				}
			}, function (res) {
				if (false === res.success) {
					_this3.element.find('.wponion-oembed-preview').html('<img class="wponion-no-preview" src="' + _this3.image + '"/>');
				} else {
					_this3.element.find('.wponion-oembed-preview').html(res.data);
				}
			}, function () {
				_this3.element.find('.wponion-oembed-preview').html('<img class="wponion-no-preview" src="' + _this3.image + '"/>');
			}, function () {
				_this3.element.find('.wponion-spinner').removeClass('is-active');
			});
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/select.js":
/*!*********************************!*\
  !*** ./src/js/fields/select.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
  _inherits(_class, _WPOnion_Field);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/select2.js":
/*!**********************************!*\
  !*** ./src/js/fields/select2.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $arg = this.option('select2', {});
			this.element.select2(this.handle_args($arg));
			return this;
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/selectize.js":
/*!************************************!*\
  !*** ./src/js/fields/selectize.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $arg = this.option('selectize', {});

			if (!(0, _index.is_undefined)($arg.theme)) {
				this.element.parent().addClass($arg.theme);
			} else {
				this.element.parent().addClass('selectize-default');
			}

			$arg = _core2.default.js_func($arg);
			this.element.removeClass('form-control').selectize($arg);
			return this;
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/sorter.js":
/*!*********************************!*\
  !*** ./src/js/fields/sorter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $this = this.element,
			    $enabled = $this.find('.wponion-enabled'),
			    $disabled = $this.find('.wponion-disabled');

			$enabled.sortable({
				connectWith: $disabled,
				placeholder: 'ui-sortable-placeholder',
				update: function update(event, ui) {
					var $el = ui.item.find('input');

					if (ui.item.parent().hasClass('wponion-enabled')) {
						$el.attr('name', $el.attr('name').replace('disabled', 'enabled'));
					} else {
						$el.attr('name', $el.attr('name').replace('enabled', 'disabled'));
					}

					$this.trigger('wponion-sorter-updated');
				}
			});

			// avoid conflict
			$disabled.sortable({
				connectWith: $enabled,
				placeholder: 'ui-sortable-placeholder'
			});
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/switcher.js":
/*!***********************************!*\
  !*** ./src/js/fields/switcher.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
  _inherits(_class, _WPOnion_Field);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/text.js":
/*!*******************************!*\
  !*** ./src/js/fields/text.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
  _inherits(_class, _WPOnion_Field);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/textarea.js":
/*!***********************************!*\
  !*** ./src/js/fields/textarea.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
  _inherits(_class, _WPOnion_Field);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/typography.js":
/*!*************************************!*\
  !*** ./src/js/fields/typography.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _css_units = __webpack_require__(/*! vsp-js-helper/parts/css_units */ "./node_modules/vsp-js-helper/parts/css_units.js");

var _css_units2 = _interopRequireDefault(_css_units);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			this.font_weight_style = false;
			var $el = this.element;
			var $preview = this.element.find('.wponion-font-preview');
			var $this = this;
			this.element.find(':input').on('change', function () {
				var $font_field = $el.find('.wponion-element-font_picker'),
				    $font = $font_field.find('.wponion-font-selector').val(),
				    $font_weight_style = $this.font_style($font_field.find('.wponion-variant-selector').val()),
				    $tag = $el.find('.wponion-element-tag select').val(),
				    $color = $el.find('.wponion-field-color_picker input.wp-color-picker').val(),
				    $align = $el.find('.wponion-element-align select').val(),
				    $fontSize = $el.find('.wponion-element-size input').val(),
				    $lineHeight = $el.find('.wponion-element-line-height input').val(),
				    $backUPFont = $el.find('.wponion-element-backup-font select').val(),
				    $direction = $el.find('.wponion-element-direction select').val(),
				    $letterSpacing = $el.find('.wponion-element-letter-spacing input').val(),
				    href = 'https://fonts.googleapis.com/css?family=' + $font + ':' + $font_weight_style.weight,
				    html = '<link href="' + href + '" class="wpsf-font-preview-' + $this.id() + '" rel="stylesheet" type="text/css" />';

				if (jQuery('.wponion-font-preview-' + $this.id()).length > 0) {
					jQuery('.wponion-font-preview-' + $this.id()).attr('href', href);
				} else {
					jQuery('head').append(html);
				}

				if ($fontSize === '' || $fontSize === undefined) {
					$fontSize = '18px';
				}

				if ($letterSpacing === '' || $letterSpacing === undefined) {
					$letterSpacing = '1px';
				}

				if ($lineHeight === '' || $lineHeight === undefined) {
					$lineHeight = '20px';
				}

				var $_attrs = ' font-family:' + $font + '; ' + ' font-weight:' + $font_weight_style.weight + '; ' + ' font-style:' + $font_weight_style.style + '; ' + ' text-align:' + $align + '; ' + ' color: ' + $color + ';' + ' font-size:' + (0, _css_units2.default)($fontSize) + '; ' + ' letter-spacing:' + (0, _css_units2.default)($letterSpacing) + '; ' + ' line-height:' + (0, _css_units2.default)($lineHeight) + '; ';

				var $text = $preview.text();
				$preview.html('');
				$preview.append(jQuery('<' + $tag + '>' + $text + '</' + $tag + ' >'));
				$preview.find($tag).attr("style", $_attrs);
			});
		}
	}, {
		key: 'font_style',
		value: function font_style($info) {
			var $weight_val = '400',
			    $style_val = 'normal';

			switch ($info) {
				case '100':
					$weight_val = '100';
					break;
				case '100italic':
					$weight_val = '100';
					$style_val = 'italic';
					break;
				case '300':
					$weight_val = '300';
					break;
				case '300italic':
					$weight_val = '300';
					$style_val = 'italic';
					break;
				case '500':
					$weight_val = '500';
					break;
				case '500italic':
					$weight_val = '500';
					$style_val = 'italic';
					break;
				case '700':
					$weight_val = '700';
					break;
				case '700italic':
					$weight_val = '700';
					$style_val = 'italic';
					break;
				case '900':
					$weight_val = '900';
					break;
				case '900italic':
					$weight_val = '900';
					$style_val = 'italic';
					break;
				case 'italic':
					$style_val = 'italic';
					break;
			}
			return { weight: $weight_val, style: $style_val };
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/upload.js":
/*!*********************************!*\
  !*** ./src/js/fields/upload.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $this = this,
			    $elem = $this.element,
			    $add = $elem.find('button'),
			    $input = $elem.find('input[type=text]'),
			    $settings = $this.options(),
			    wp_media_frame = void 0;

			$add.on('click', function (e) {
				e.preventDefault();

				if (typeof wp === 'undefined' || !wp.media || !wp.media.gallery) {
					return;
				}

				if (wp_media_frame) {
					wp_media_frame.open();
					return;
				}

				wp_media_frame = wp.media({
					title: $settings.settings.frame_title,
					library: {
						type: $settings.settings.upload_type
					},
					button: {
						text: $settings.settings.insert_title
					}
				});

				wp_media_frame.on('select', function () {
					var attachment = wp_media_frame.state().get('selection').first();
					$input.val(attachment.attributes.url).trigger('change');
				});
				wp_media_frame.open();
			});
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/wp_editor.js":
/*!************************************!*\
  !*** ./src/js/fields/wp_editor.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
  _inherits(_class, _WPOnion_Field);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/fields/wp_links.js":
/*!***********************************!*\
  !*** ./src/js/fields/wp_links.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global swal:true */
var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $this = this,
			    $elem = $this.element,
			    $textarea = $elem.find('textarea');
			$elem.find('#wponion-wp-link-picker > button').on('click', function () {
				$textarea.val('');
				if (!window.wpLink) {
					swal({
						type: 'error',
						title: _core2.default.text('wp_link_error_title', 'WP Link JS Lib Not Found')
					});
				}

				window.wpLink.open($textarea.attr('id'));
			});

			$textarea.on('change', function () {
				var $data = jQuery(jQuery(this).val());
				$elem.find('span.example_output span.value').html(jQuery(this).val());
				$elem.find('input#url').val($data.attr('href'));
				$elem.find('input#title').val($data.text());
				$elem.find('input#target').val($data.attr('target'));
				$elem.find('span.url span.value').html($data.attr('href'));
				$elem.find('span.title span.value').html($data.text());
				$elem.find('span.target span.value').html($data.attr('target'));
			});
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/helpers/dependency.js":
/*!**************************************!*\
  !*** ./src/js/helpers/dependency.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

var _debug = __webpack_require__(/*! ../core/debug */ "./src/js/core/debug.js");

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class($selector, $contxt, $config) {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, $selector, $contxt, $config));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $dep = this.option('dependency');
			for (var $key in $dep.controller) {
				var $controller = $dep.controller[$key],
				    $condition = $dep.condition[$key],
				    $value = $dep.value[$key],
				    $field = '[data-depend-id="' + $controller + '"]';
				if (false !== this.config.nestable) {
					var $INPUT = this.config.parent.find('[data-depend-id=' + $controller + ']');
					if ($INPUT.length > 0) {
						$field = '[data-wponion-jsid="' + _core2.default.fieldID($INPUT) + '"]:input';
					}
				}
				this.set_contxt(this.contxt.createRule($field, $condition, $value));
				this.set_contxt(this.contxt.include(this.element));
			}
			_debug2.default.add(this.id(), { 'Dependency': $dep, 'Nestable Dependency': this.config.nestable });
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/helpers/field_tooltip.js":
/*!*****************************************!*\
  !*** ./src/js/helpers/field_tooltip.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $fid = this.element.attr('data-field-jsid'),
			    $is_loading = null,
			    wpoimg = function wpoimg(img, callback) {
				var testDimensions = setInterval(function () {
					if (img.naturalWidth) {
						clearInterval(testDimensions);
						callback();
					}
				}, 5);
			};
			var $tooltip_key = false;
			if (true === this.element.hasClass('wponion-help')) {
				$tooltip_key = 'wponion-help';
			} else if (true === this.element.hasClass('wponion-wrap-tooltip')) {
				$tooltip_key = 'wrap_tooltip';
			} else {
				$tooltip_key = $fid + 'tooltip';
			}

			//let $tooltip_key = ( true === this.element.hasClass( 'wponion-help' ) ) ? 'field_help' : $fid + 'tooltip',
			var $arg = true === _core2.default.valid_json($fid) ? JSON.parse($fid) : this.option($tooltip_key, false);

			if (false === $arg) {
				if (_core2.default.valid_json(this.element.attr('data-tippy'))) {
					$arg = JSON.parse(this.element.attr('data-tippy'));
				} else if (_core2.default.valid_json(this.element.attr('data-tippy-args'))) {
					$arg = JSON.parse(this.element.attr('data-tippy-args'));
				} else if (_core2.default.valid_json(this.element.attr('tippy-args'))) {
					$arg = JSON.parse(this.element.attr('tippy-args'));
				}
			}

			if ($arg) {
				$arg.performance = false;
				if ($arg.image !== undefined && $arg.image !== false) {
					$arg.html = '#wpotpimg';
					$arg.updateDuration = 2000;
					$arg.onShow = function (instance) {
						var content = this.querySelector('.tippy-content');
						if ($is_loading) {
							return;
						}
						$is_loading = true;

						fetch($arg.image).then(function (resp) {
							return resp.blob();
						}).then(function (blob) {
							var url = URL.createObjectURL(blob);
							content.innerHTML = '<img src="' + url + '">';
							wpoimg(content.querySelector('img'), instance.popperInstance.update);
							$is_loading = false;
						}).catch(function () {
							content.innerHTML = 'Loading failed';
							$is_loading = false;
						});
					};
					$arg.onHidden = function () {
						var content = this.querySelector('.tippy-content');
						content.innerHTML = '';
					};
					$arg.popperOptions = { modifiers: { preventOverflow: { enabled: false }, hide: { enabled: false } } };
				}
			} else {
				$arg = {};
			}
			this.element.tippy(this.handle_args($arg, $tooltip_key));
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/helpers/image_popup.js":
/*!***************************************!*\
  !*** ./src/js/helpers/image_popup.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $image = (0, _index.is_undefined)(this.element.attr('data-fullsize')) ? this.element.attr('src') : this.element.attr('data-fullsize');
			swal({
				imageUrl: $image,
				animation: false,
				background: 'transparent',
				showConfirmButton: false,
				backdrop: 'rgba(0,0,0,0.44)'
			});
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/helpers/reload_wp_editor.js":
/*!********************************************!*\
  !*** ./src/js/helpers/reload_wp_editor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			if (this.element.length > 0) {
				var $mce_editor = tinyMCEPreInit.mceInit[this.option('wpeditor_id')],
				    $quick_tags = tinyMCEPreInit.qtInit[this.option('wpeditor_id')],
				    $NEW_ID = 'wponion-wp-editor-' + (0, _index.rand_md5)(),
				    $textArea = this.element.find('textarea').clone(),
				    $actual_ID = $textArea.attr('id'),
				    $actual_html = this.element.find('.wponion-fieldset').html(),
				    $regex = new RegExp($actual_ID, "g");
				$actual_html = $actual_html.replace($regex, $NEW_ID);

				this.element.find('.wponion-fieldset').html($actual_html);
				this.element.find('textarea').parent().append($textArea);
				this.element.find('textarea:not(#' + $actual_ID + ')').remove();
				this.element.find('textarea').attr('id', $NEW_ID);

				if (false === (0, _index.is_undefined)($mce_editor)) {
					$mce_editor.selector = '#' + $NEW_ID;
					tinymce.init($mce_editor);
					tinyMCE.execCommand('mceAddEditor', false, '#' + $NEW_ID);
				}

				if (false === (0, _index.is_undefined)($quick_tags)) {
					$quick_tags.id = $NEW_ID;
					quicktags($quick_tags);
				}
			}
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/modules/metabox.js":
/*!***********************************!*\
  !*** ./src/js/modules/metabox.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ../core/module */ "./src/js/core/module.js");

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WPOnion_Metabox_Module = function (_WPOnion_Module) {
	_inherits(WPOnion_Metabox_Module, _WPOnion_Module);

	function WPOnion_Metabox_Module() {
		_classCallCheck(this, WPOnion_Metabox_Module);

		return _possibleConstructorReturn(this, (WPOnion_Metabox_Module.__proto__ || Object.getPrototypeOf(WPOnion_Metabox_Module)).apply(this, arguments));
	}

	_createClass(WPOnion_Metabox_Module, [{
		key: 'module_init',
		value: function module_init() {
			this.menu();
			this.element.on('click', 'h2.ajax-container button', this.save_handler);
		}
	}, {
		key: 'menu',
		value: function menu() {
			var $elem = this.element;
			$elem.on('click', 'ul.wponion-metabox-parent-menu li a', function (e) {
				e.preventDefault();
				if (jQuery(this).hasClass('dropdown')) {
					if (jQuery(this).next('ul').is(':visible')) {
						jQuery(this).next('ul').slideToggle('fast');
					} else {
						$elem.find('ul.wponion-metabox-parent-menu li ul').slideUp('fast');
						jQuery(this).next('ul').slideToggle('fast');
					}
				} else {
					var $href = $wponion_helper.url_params(jQuery(this).attr('data-href')),
					    $parent = 'wponion-tab-' + $href['parent-id'],
					    $section = $href['section-id'] !== undefined ? $parent + '-' + $href['section-id'] : false,
					    $parent_actives = $elem.find('div.wponion-parent-wraps'),
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
		}
	}, {
		key: 'save_handler',
		value: function save_handler(e) {
			e.preventDefault();
			var $this = this,
			    $parent = jQuery(this).parent(),
			    $base = $parent.parent().parent(),
			    $hidden = $parent.find('div.wponion-metabox-secure-data');

			$base.block({ message: null, overlayCSS: { background: '#000', opacity: 0.7 } });

			$hidden.find('input').each(function () {
				jQuery(this).attr('name', jQuery(this).attr('id'));
			});
			var $fields = $parent.parent().find(':input');
			var $values = $fields.serialize();
			$hidden.find('input').removeAttr('name');

			$wponion.ajax('save_metabox', { data: $values }, function (res) {
				$base.html(res);
				$base.unblock();
				wponion_field($base.find('.wponion-framework')).reload();
			});
		}
	}]);

	return WPOnion_Metabox_Module;
}(_module2.default);

exports.default = function (window, document, $, wp) {
	$(function () {
		$('div.postbox.wponion-metabox').each(function () {
			new WPOnion_Metabox_Module($(this), false);
		});
	});
}(window, document, jQuery, wp);

/***/ }),

/***/ "./src/js/modules/quick-edit.js":
/*!**************************************!*\
  !*** ./src/js/modules/quick-edit.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ../core/module */ "./src/js/core/module.js");

var _module2 = _interopRequireDefault(_module);

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

var _is_string = __webpack_require__(/*! locutus/php/var/is_string */ "./node_modules/locutus/php/var/is_string.js");

var _is_string2 = _interopRequireDefault(_is_string);

var _is_null = __webpack_require__(/*! locutus/php/var/is_null */ "./node_modules/locutus/php/var/is_null.js");

var _is_null2 = _interopRequireDefault(_is_null);

var _is_object_like = __webpack_require__(/*! vsp-js-helper/parts/is_object_like */ "./node_modules/vsp-js-helper/parts/is_object_like.js");

var _is_object_like2 = _interopRequireDefault(_is_object_like);

var _is_undefined = __webpack_require__(/*! vsp-js-helper/parts/is_undefined */ "./node_modules/vsp-js-helper/parts/is_undefined.js");

var _is_undefined2 = _interopRequireDefault(_is_undefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WPOnion_Module) {
	_inherits(_class, _WPOnion_Module);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'module_init',
		value: function module_init() {
			this.post_id = this.contxt;
			var $id = _core2.default.fieldID(this.element) + '_' + this.post_id;
			this.values = _core2.default.fieldArgs($id, false);

			if (this.values.html) {
				this.values.html = jQuery(this.values.html);
				this.element.parent().html(this.values.html.find('> div'));
			}

			wponion_field(this.element).reload();
		}
	}]);

	return _class;
}(_module2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/wponion-core.js":
/*!********************************!*\
  !*** ./src/js/wponion-core.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _field = __webpack_require__(/*! ./core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

var _dependency = __webpack_require__(/*! ./core/dependency */ "./src/js/core/dependency.js");

var _dependency2 = _interopRequireDefault(_dependency);

var _validation = __webpack_require__(/*! ./core/validation */ "./src/js/core/validation.js");

var _validation2 = _interopRequireDefault(_validation);

var _quickEdit = __webpack_require__(/*! ./modules/quick-edit */ "./src/js/modules/quick-edit.js");

var _quickEdit2 = _interopRequireDefault(_quickEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.wponion_metabox_module = __webpack_require__(/*! ./modules/metabox */ "./src/js/modules/metabox.js").default;
//window.wponion_customizer_module = require( './modules/customizer' ).default;
window.$wponion = __webpack_require__(/*! ./core/core */ "./src/js/core/core.js").default;
window.$wponion_debug = __webpack_require__(/*! ./core/debug */ "./src/js/core/debug.js").default;
window.$wponion_helper = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");
window.wponion_new_field = function ($class) {
	return (0, _index.is_window_arg)($class) ? window[$class] : false;
};
window.wponion_field = function ($elem) {
	var $contxt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	return new _field2.default($elem, $contxt);
};
window.wponion_modal = __webpack_require__(/*! ../vendors/backbone-modal */ "./src/vendors/backbone-modal.js").default;

module.exports = function (window, document, wp, $, $wpo) {
	var $wp_hook = wp.hooks;

	$(window).on('load', function () {
		$wp_hook.doAction('wponion_before_init');

		window.wponion_fields = $wp_hook.applyFilters('wponion_fields_functions', {
			text: __webpack_require__(/*! ./fields/text */ "./src/js/fields/text.js").default,
			textarea: __webpack_require__(/*! ./fields/textarea */ "./src/js/fields/textarea.js").default,
			background: __webpack_require__(/*! ./fields/background */ "./src/js/fields/background.js").default,
			image_select: __webpack_require__(/*! ./fields/image_select */ "./src/js/fields/image_select.js").default,
			switcher: __webpack_require__(/*! ./fields/switcher */ "./src/js/fields/switcher.js").default,
			color_palette: __webpack_require__(/*! ./fields/color_palette */ "./src/js/fields/color_palette.js").default,
			select: __webpack_require__(/*! ./fields/select */ "./src/js/fields/select.js").default,
			select2: __webpack_require__(/*! ./fields/select2 */ "./src/js/fields/select2.js").default,
			chosen: __webpack_require__(/*! ./fields/chosen */ "./src/js/fields/chosen.js").default,
			selectize: __webpack_require__(/*! ./fields/selectize */ "./src/js/fields/selectize.js").default,
			icon_picker: __webpack_require__(/*! ./fields/icon_picker */ "./src/js/fields/icon_picker.js").default,
			font_selector: __webpack_require__(/*! ./fields/font_selector */ "./src/js/fields/font_selector.js").default,
			accordion: __webpack_require__(/*! ./fields/accordion */ "./src/js/fields/accordion.js").default,
			group: __webpack_require__(/*! ./fields/group */ "./src/js/fields/group.js").default,
			wp_editor: __webpack_require__(/*! ./fields/wp_editor */ "./src/js/fields/wp_editor.js").default,
			reload_wp_editor: __webpack_require__(/*! ./helpers/reload_wp_editor */ "./src/js/helpers/reload_wp_editor.js").default,
			fieldset: __webpack_require__(/*! ./fields/fieldset */ "./src/js/fields/fieldset.js").default,
			inputmask: __webpack_require__(/*! ./fields/inputmask */ "./src/js/fields/inputmask.js").default,
			wp_links: __webpack_require__(/*! ./fields/wp_links */ "./src/js/fields/wp_links.js").default,
			checkbox_radio: __webpack_require__(/*! ./fields/checkbox_radio */ "./src/js/fields/checkbox_radio.js").default,
			keyvalue_pair: __webpack_require__(/*! ./fields/keyvalue_pair */ "./src/js/fields/keyvalue_pair.js").default,
			color_picker: __webpack_require__(/*! ./fields/color_picker */ "./src/js/fields/color_picker.js").default,
			date_picker: __webpack_require__(/*! ./fields/date_picker */ "./src/js/fields/date_picker.js").default,
			gallery: __webpack_require__(/*! ./fields/gallery */ "./src/js/fields/gallery.js").default,
			image_popup: __webpack_require__(/*! ./helpers/image_popup */ "./src/js/helpers/image_popup.js").default,
			upload: __webpack_require__(/*! ./fields/upload */ "./src/js/fields/upload.js").default,
			image_upload: __webpack_require__(/*! ./fields/image_upload */ "./src/js/fields/image_upload.js").default,
			jquery_tab: __webpack_require__(/*! ./fields/jquery_tab */ "./src/js/fields/jquery_tab.js").default,
			field_tooltip: __webpack_require__(/*! ./helpers/field_tooltip */ "./src/js/helpers/field_tooltip.js").default,
			clone_element: __webpack_require__(/*! ./fields/clone_element */ "./src/js/fields/clone_element.js").default,
			sorter: __webpack_require__(/*! ./fields/sorter */ "./src/js/fields/sorter.js").default,
			google_maps: __webpack_require__(/*! ./fields/google_maps */ "./src/js/fields/google_maps.js").default,
			typography: __webpack_require__(/*! ./fields/typography */ "./src/js/fields/typography.js").default,
			oembed: __webpack_require__(/*! ./fields/oembed */ "./src/js/fields/oembed.js").default
		});
		$wpo.settings_args = $wpo.windowArgs('wponion_core', {});
		$wpo.text = $wpo.windowArgs('wponion_il8n', {});
		$wpo.debug_info = null;
		$wpo.field_debug_info = null;

		if ($('#wpotpimg').length === 0) {
			$('body').append('<div id="wpotpimg" style="display: none;min-width:300px;min-height:400px;">..</div>');
		}

		$(document).on('click', '.wponion-field-debug-code > strong', function () {
			jQuery(this).next().slideToggle();
			jQuery(this).toggleClass('dashicons-arrow-down').toggleClass('dashicons-arrow-right');
		});

		var $wpof_div = $('.wponion-framework:not(.wponion-module-quick_edit-framework)');

		/**
   * Triggers Hook With Widgets.
   */
		$(document).on('widget-added widget-updated', function (event, $widget) {
			new _dependency2.default($widget);
			wponion_field($widget).reload();
		});

		if ($wpof_div.length > 0) {
			$wp_hook.doAction('wponion_before_theme_init', $wpof_div);
			$wpof_div.each(function () {
				$wp_hook.doAction('wponion_theme_init', $(this));
			});
			$wp_hook.doAction('wponion_after_theme_init', $wpof_div);

			/**
    * Renders Validation.
    */
			new _validation2.default();

			/**
    * Handles Fields init.
    */
			$wp_hook.doAction('wponion_before_fields_init', $wpof_div);
			$wpof_div.each(function () {
				new _dependency2.default($(this));
				wponion_field($(this)).reload();
			});
			$wp_hook.doAction('wponion_after_fields_init', $wpof_div);
		}

		if (jQuery('#the-list').length > 0) {
			jQuery('#the-list').on('click', '.editinline', function () {
				var post_id = jQuery(this).closest('tr').attr('id');
				post_id = post_id.replace('post-', '');
				$('tr#edit-' + post_id).find('.wponion-framework').each(function () {
					new _quickEdit2.default(jQuery(this), post_id);
				});
			});
		}

		$wpo.loading_screen($wpof_div, false);
		$wp_hook.doAction('wponion_init');
	});

	$wp_hook.doAction('wponion_loaded');
}(window, document, wp, jQuery, $wponion);

/***/ }),

/***/ "./src/vendors/backbone-modal.js":
/*!***************************************!*\
  !*** ./src/vendors/backbone-modal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(/*! ../js/core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPOnion_WP_Modal = Backbone.View.extend({
	templates: {},

	events: {
		"click .media-modal-close": "closeModal",
		"click #btn-cancel": "closeModal",
		"click #btn-ok": "saveModal",
		"click .media-menu a": "handle_left_menu_click",
		"click .media-router a": "handle_tab_click"
	},

	active_page: null,

	active_section: null,

	initialize: function initialize(options) {
		options = _.extend({
			left_menu: false,
			hide_menu: false,
			html: false
		}, options);

		undefined.left_menu = options['left_menu'];
		undefined.html = options['html'];
		undefined.hide_menu = options['hide_menu'];

		_.bindAll(undefined, 'render', 'preserveFocus', 'closeModal', 'saveModal', 'doNothing');
		undefined.init_templates();
		undefined.render();
	},

	init_templates: function init_templates() {
		var $m = _core2.default.option('modal');
		undefined.templates.frame_menu_item = _core2.default.template($m['frame-menu-item']);
		undefined.templates.router_menu_item = _core2.default.template($m['router-menu-item']);
		undefined.templates.window = _core2.default.template($m['html']);
		undefined.templates.page_content = _core2.default.template($m['page_content']);
		undefined.templates.section_content = _core2.default.template($m['section_content']);
	},

	render: function render() {
		'use strict';

		undefined.$el.attr('tabindex', '0').append(undefined.templates.window());

		if (undefined.left_menu) {
			_.each(undefined.left_menu, function (value, key) {
				undefined.$('.media-menu').append(undefined.templates.frame_menu_item({
					url: key,
					name: value
				}));
			});
		}

		if (undefined.html) {
			_.each(undefined.html, function (value, key) {
				var $content = $(undefined.templates.page_content({
					id: key,
					title: value['title'],
					html: value['html']
				}));

				if (typeof value['sections'] !== 'undefined') {
					$content.find('.media-sidebar').remove();
					_.each(value['sections'], function (val, k) {
						var $_content = jQuery(undefined.templates.section_content({
							id: key + "_" + k,
							title: val['title'],
							html: val['html']
						})),
						    $_menu = undefined.templates.router_menu_item({ url: k, name: val['title'] });

						$_content.find('.media-sidebar').hide();
						if (typeof val['sidebar'] !== 'undefined') {
							if (value['sidebar'] !== false) {
								$_content.find('.media-sidebar').append(val['sidebar']).show();
							}
						}

						$content.find('.media-frame-content').append($_content);
						$content.find('.media-router').append($_menu);
					});
					undefined.$('.wponion-modal-content-container').append($content);
				} else {
					$content.find('.media-sidebar').hide();
					if (typeof value['sidebar'] !== "undefined") {
						if (value['sidebar'] !== false) {
							$content.find('.media-sidebar').append(value['sidebar']).show();
						}
					}
					$content.find('.media-frame-router').addClass('hidden');
					$this.$('.wponion-modal-content-container').append($content);
				}
			});
		}

		undefined.$('.media-menu a:first-child').trigger('click');
		undefined.$('.wponion-modal-content-container > .wponion-modal-content:not(.hidden) .media-frame-router a:first-child').trigger('click');

		if (undefined.hide_menu === true) {
			undefined.$('.media-frame').addClass('hide-menu');
		}

		jQuery(document).on("focusin", undefined.preserveFocus);
		jQuery('body').css({ "overflow": "hidden" }).append(undefined.$el);
		undefined.$el.focus();
	},

	handle_left_menu_click: function handle_left_menu_click(e) {
		e.preventDefault();
		var $target = $(e.target);
		$(undefined.$el).find('.media-menu a.active').removeClass('active');
		$target.addClass('active');
		var $show_target = $(undefined.$el).find('.wponion-modal-content-container > div#' + $target.attr('href'));
		$(undefined.$el).find('.wponion-modal-content-container > div').addClass('hidden');
		$show_target.removeClass('hidden');

		if ($show_target.find('.media-frame-router').hasClass('hidden')) {
			$(undefined.$el).find('.media-frame').addClass('hide-router');
		} else {
			$(undefined.$el).find('.media-frame').removeClass('hide-router');
		}
		undefined.active_page = $target.attr('href');
		undefined.active_section = null;
	},

	handle_tab_click: function handle_tab_click(e) {
		var $target = $(e.target);
		undefined.active_section = $target.attr('href');
		var $page = $(undefined.$el).find('.media-frame-menu a.active').attr('href');
		var $base = $(undefined.$el).find('.wponion-modal-content-container > #' + undefined.active_page);

		$target.parent().find('.active').removeClass('active');
		$target.addClass('active');
		$base.find('.wponion-section-modal-content').hide();
		$base.find('#' + undefined.active_page + '_' + undefined.active_section).show();
	},

	preserveFocus: function preserveFocus(e) {
		"use strict";

		if (undefined.$el[0] !== e.target && !undefined.$el.has(e.target).length) {
			undefined.$el.focus();
		}
	},

	closeModal: function closeModal(e) {
		"use strict";

		e.preventDefault();
		undefined.undelegateEvents();
		jQuery(document).off("focusin");
		jQuery("body").css({ "overflow": "auto" });
		undefined.remove();
	},

	saveModal: function saveModal(e) {
		"use strict";

		undefined.closeModal(e);
	},

	doNothing: function doNothing(e) {
		"use strict";

		e.preventDefault();
	}
});

var _class = function () {
	function _class() {
		var $options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, _class);

		this.options = _.extend({
			id: false,
			data: false,
			className: 'wponion-modal',
			modal: {},
			hide_menu: false
		}, $options);

		new WPOnion_WP_Modal(_.extend({
			left_menu: this.get_left_menu(),
			html: this.options['data'],
			hide_menu: this.options['hide_menu']
		}, this.options['modal']));
	}

	_createClass(_class, [{
		key: "get_left_menu",
		value: function get_left_menu() {
			var $return = false;
			if (this.options['data']) {
				$return = {};

				_.each(this.options['data'], function ($data, $key) {
					$return[$key] = typeof $data['menu_title'] !== 'undefined' ? $data['menu_title'] : $data['title'];
				});
			}
			return $return;
		}
	}]);

	return _class;
}();

exports.default = _class;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvYXJyYXkvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9pbmZvL2luaV9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2ludHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfYm9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC94bWwvdXRmOF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sX2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9fd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Nsb25lX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jb3B5X3RvX2NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGV2aWNlX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGlmZl9kYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19hZnRlcl9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2JlZm9yZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19zYW1lX2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdGFiX2ZvY3VzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3dpbmRvd19hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvb2tnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9waXBlX2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9wbGFpbl9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcXVlcnlfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3JhbmRfbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3Njcm9sbF9wb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3RvX3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90aW1lX3Rha2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90b19qc19mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3VybF9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdmFsaWRhdGVTaW5nbGVKU0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvd2luZG93X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93cmFwX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZGF0ZV9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9maWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZvbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ29vZ2xlX21hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ljb25fcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2Vfc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2VfdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW5wdXRtYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0aXplLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9maWVsZF90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2ltYWdlX3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbWV0YWJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9xdWljay1lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiXSwibmFtZXMiOlsiSlNfUGFyc2VfQXJncyIsIiRhcmdzIiwiJGRlZmF1bHRzIiwiJGlzX25lc3RlZCIsImFyZ3MiLCJkZWZhdWx0cyIsIm5lc3RlZCIsInBhcnNlIiwiJF9rZXkiLCIkaXNfZGVlcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheV9tZXJnZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiYXJnbCIsImxlbmd0aCIsImFyZyIsInJldE9iaiIsImsiLCJhcmdpbCIsImoiLCJpIiwiY3QiLCJ0b1N0ciIsIk9iamVjdCIsInRvU3RyaW5nIiwicmV0QXJyIiwiY29uY2F0IiwiaGFzT3duUHJvcGVydHkiLCJwYXJzZUludCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiYXJyYXlfbWVyZ2VfcmVjdXJzaXZlIiwiYXJyMSIsImFycjIiLCJhcnJheU1lcmdlIiwicmVxdWlyZSIsImlkeCIsInB1c2giLCJhcnJheV92YWx1ZXMiLCJpbnB1dCIsInRtcEFyciIsImtleSIsImNvdW50IiwibWl4ZWRWYXIiLCJtb2RlIiwiY250IiwiaW5fYXJyYXkiLCJuZWVkbGUiLCJoYXlzdGFjayIsImFyZ1N0cmljdCIsInN0cmljdCIsIm1pY3JvdGltZSIsImdldEFzRmxvYXQiLCJzIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aW1pbmciLCJuYXZpZ2F0aW9uU3RhcnQiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWUiLCJmbG9vciIsImNhbGxfdXNlcl9mdW5jIiwiY2IiLCJwYXJhbWV0ZXJzIiwiY2FsbFVzZXJGdW5jQXJyYXkiLCJjYWxsX3VzZXJfZnVuY19hcnJheSIsIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJmdW5jIiwic2NvcGUiLCJ2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiIsIm1hdGNoIiwiRnVuY3Rpb24iLCJldmFsIiwiRXJyb3IiLCJhcHBseSIsImZ1bmN0aW9uX2V4aXN0cyIsImZ1bmNOYW1lIiwiaW5pX2dldCIsInZhcm5hbWUiLCIkbG9jdXR1cyIsInBocCIsImluaSIsImxvY2FsX3ZhbHVlIiwidW5kZWZpbmVkIiwiZXhwbG9kZSIsImRlbGltaXRlciIsInN0cmluZyIsImxpbWl0Iiwic3BsaXQiLCJqb2luIiwic3BsaWNlIiwiaW1wbG9kZSIsImdsdWUiLCJwaWVjZXMiLCJyZXRWYWwiLCJ0R2x1ZSIsIm1kNSIsInN0ciIsImhhc2giLCJjcnlwdG8iLCJtZDVzdW0iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwiZSIsInV0ZjhFbmNvZGUiLCJ4bCIsIl9yb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsIl9hZGRVbnNpZ25lZCIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiX0YiLCJ4IiwieSIsInoiLCJfRyIsIl9IIiwiX0kiLCJfRkYiLCJhIiwiYiIsImMiLCJkIiwiYWMiLCJfR0ciLCJfSEgiLCJfSUkiLCJfY29udmVydFRvV29yZEFycmF5IiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNUZW1wMSIsImxOdW1iZXJPZldvcmRzVGVtcDIiLCJsTnVtYmVyT2ZXb3JkcyIsImxXb3JkQXJyYXkiLCJsQnl0ZVBvc2l0aW9uIiwibEJ5dGVDb3VudCIsImNoYXJDb2RlQXQiLCJfd29yZFRvSGV4Iiwid29yZFRvSGV4VmFsdWUiLCJ3b3JkVG9IZXhWYWx1ZVRlbXAiLCJsQnl0ZSIsImxDb3VudCIsInN1YnN0ciIsIkFBIiwiQkIiLCJDQyIsIkREIiwiUzExIiwiUzEyIiwiUzEzIiwiUzE0IiwiUzIxIiwiUzIyIiwiUzIzIiwiUzI0IiwiUzMxIiwiUzMyIiwiUzMzIiwiUzM0IiwiUzQxIiwiUzQyIiwiUzQzIiwiUzQ0IiwidGVtcCIsInRvTG93ZXJDYXNlIiwicGFyc2Vfc3RyIiwiYXJyYXkiLCJzdHJBcnIiLCJTdHJpbmciLCJyZXBsYWNlIiwic2FsIiwicCIsImxhc3RPYmoiLCJjaHIiLCJ0bXAiLCJ2YWx1ZSIsInBvc3RMZWZ0QnJhY2tldFBvcyIsImtleXMiLCJrZXlzTGVuIiwiX2ZpeFN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXJBdCIsImluZGV4T2YiLCJzdHJfcmVwbGFjZSIsInNlYXJjaCIsInN1YmplY3QiLCJjb3VudE9iaiIsInJlcGwiLCJzbCIsImZsIiwiZiIsInIiLCJyYSIsInNhIiwic3RydG9sb3dlciIsInN0cnRvdXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImJhc2U2NF9kZWNvZGUiLCJlbmNvZGVkRGF0YSIsImRlY29kZVVURjhzdHJpbmciLCJtYXAiLCJhdG9iIiwiQnVmZmVyIiwiYjY0IiwibzEiLCJvMiIsIm8zIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJiaXRzIiwiZGVjIiwiZnJvbUNoYXJDb2RlIiwiYmFzZTY0X2VuY29kZSIsInN0cmluZ1RvRW5jb2RlIiwiZW5jb2RlVVRGOHN0cmluZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvU29saWRCeXRlcyIsInAxIiwiYnRvYSIsImVuYyIsImJvb2x2YWwiLCJpc0FycmF5IiwiZW1wdHkiLCJ1bmRlZiIsImxlbiIsImVtcHR5VmFsdWVzIiwiZmxvYXR2YWwiLCJwYXJzZUZsb2F0IiwiaW50dmFsIiwiYmFzZSIsInR5cGUiLCJpc05hTiIsImlzRmluaXRlIiwiY2VpbCIsImlzX2FycmF5IiwiX2dldEZ1bmNOYW1lIiwiZm4iLCJuYW1lIiwiZXhlYyIsIl9pc0FycmF5IiwiaW5pVmFsIiwiYXNTdHJpbmciLCJhc0Z1bmMiLCJpc19ib29sIiwiaXNfY2FsbGFibGUiLCJzeW50YXhPbmx5IiwiY2FsbGFibGVOYW1lIiwibWV0aG9kIiwidmFsaWRGdW5jdGlvbk5hbWUiLCJnZXRGdW5jTmFtZSIsImlzX2Zsb2F0IiwiaXNfaW50IiwiaXNfbnVsbCIsImlzX251bWVyaWMiLCJ3aGl0ZXNwYWNlIiwiaXNfb2JqZWN0IiwiaXNfc2NhbGFyIiwidGVzdCIsImlzX3N0cmluZyIsImlzc2V0IiwibCIsInV0ZjhfZW5jb2RlIiwiYXJnU3RyaW5nIiwidXRmdGV4dCIsInN0YXJ0IiwiZW5kIiwic3RyaW5nbCIsIm4iLCJjMSIsIlJhbmdlRXJyb3IiLCJjMiIsImFyciIsImxpc3RJRCIsInRhZyIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiaXRlbSIsIiRkYXRhIiwicmV0dXJuX2h0bWwiLCJJIiwiSyIsIiR2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCIkYXJyYXkiLCIka2V5IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInNlbGVjdG9yIiwic3RlcCIsImR1cmF0aW9uIiwiY3VycmVudCIsIl9zdGVwIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJhYnMiLCJpc051bWJlcmljIiwidmFsIiwiY2hlY2tQeCIsImNoZWNrUGN0IiwiY2hlY2tFbSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRhdGVJbml0aWFsIiwiZGF0ZUZpbmFsIiwibXMiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwibWlsbGlzZWNvbmQiLCJlbnRyaWVzIiwiZmlsdGVyIiwiZGF0ZUEiLCJkYXRlQiIsIiRlbGVtIiwialF1ZXJ5IiwidG9JU09TdHJpbmciLCJoaWRkZW4iLCIkT0tTIiwicHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZSIsInByb3BlcnR5Iiwic2hpZnQiLCJjb25zb2xlIiwid2FybiIsImxvZyIsImRhdGEiLCJjcmVhdGUiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJsb2NhdGlvbiIsInJhbmRvbSIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsImNhbGxiYWNrIiwidGl0bGUiLCJ0aW1lRW5kIiwiJGFyZ3Nfa2V5IiwiJGNvbnRlbnRzX2tleSIsInVybCIsInJlZHVjZSIsInYiLCIkc3RyaW5nIiwiJGNvbnRlbnRzIiwiJF9rIiwiV1BPbmlvbiIsIiR0eXBlIiwid3Bvbmlvbl9maWVsZHMiLCJhdHRyIiwiJHdoZXJlX3RvX2ZpbmQiLCIkaWQiLCJmaWVsZElEIiwiZmluZCIsIiR2YXJfaWQiLCIkZGVmYXVsdCIsImlzRmllbGQiLCJ3aW5kb3dBcmdzIiwidGV4dCIsIiRpc19zaG93IiwiZmFkZUluIiwiZmFkZU91dCIsIiRoYW5kbGUiLCIkanNvbiIsImRlYnVnX2luZm8iLCIkZGVmaW5lZF92YXJzIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsInN3YWwiLCJ0eHQiLCJodG1sIiwic2hvd0NvbmZpcm1CdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsInNob3dDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbiIsIndpZHRoIiwib25CZWZvcmVPcGVuIiwiZW5hYmxlTG9hZGluZyIsIm9uT3BlbiIsImpzb25WaWV3IiwiZGlzYWJsZUxvYWRpbmciLCJ0aGVuIiwicmVzdWx0Iiwic2V0dGluZ3NfYXJncyIsIm9wdGlvbiIsImlzX2RlYnVnIiwiZmllbGRfZGVidWdfaW5mbyIsIiR2YXJzIiwiJHV0eHQiLCIkbXR4dCIsIiRhY3Rpb24iLCIkb25TdWNjZXNzIiwiJG9uRXJyb3IiLCIkb25BbHdheXMiLCJvblN1Y2Nlc3MiLCJvbkFsd2F5cyIsIm9uRXJyb3IiLCIkYWpheCIsImFqYXgiLCJkb25lIiwicmVzIiwiZmFpbCIsImFsd2F5cyIsImNvbXBpbGVkIiwib3B0aW9ucyIsImV2YWx1YXRlIiwiaW50ZXJwb2xhdGUiLCJlc2NhcGUiLCJ2YXJpYWJsZSIsIl8iLCJ0ZW1wbGF0ZSIsIiRlbGVtZW50IiwicGFyYW0iLCJuZXN0YWJsZSIsInBhcmVudCIsIiR0aGlzIiwiJGVsIiwiaW5pdCIsInJ1bGVzZXQiLCJkZXBzIiwiY3JlYXRlUnVsZXNldCIsImRlcFJvb3QiLCJlbmFibGUiLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJoaWRlIiwiYWRkQ2xhc3MiLCJjaGVja1RhcmdldHMiLCJpbnN0YW5jZSIsImVhY2giLCJXUE9uaW9uX0RlcGVuZGVuY3kiLCJpc19qcXVlcnkiLCJpc191bmRlZmluZWQiLCIkc2VsZWN0b3IiLCIkY29udGV4dCIsIiRjb25maWciLCJzZXRfYXJncyIsImZpZWxkX2RlYnVnIiwiY29uZmlnIiwianNfZXJyb3JfaGFuZGxlciIsImpzX3ZhbGlkYXRvciIsImVyciIsImVycm9yIiwiYXBwZW5kVG8iLCJlbGVtZW50IiwianNfZXJyb3IiLCJqc192YWxpZGF0ZV9lbGVtIiwicnVsZXMiLCIkYXJnIiwiJHdwb25pb24iLCJqc19mdW5jIiwiJGV4aXN0cyIsIiR3cG9uaW9uX2RlYnVnIiwiZ2V0IiwiaWQiLCJhZGQiLCIkaW5mbyIsIiRhcnIiLCJGaWVsZCIsIk1vZHVsZSIsIlVuaXF1ZSIsIiRmb3VuZCIsImhhc0NsYXNzIiwiJElEIiwidGlwcHkiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiJGQiLCIkbm90aWNlX3R4dCIsIl9hcmdzIiwiJGFqYXhfa2V5IiwicGx1Z2luX2lkIiwiJF9pbnN0YW5jZXMiLCIkY2xhc3MiLCJnZXRfZmllbGRfY2xhc3MiLCJ3cCIsImhvb2tzIiwiYWRkQWN0aW9uIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwic2V0X2VsZW1lbnQiLCJzZXRfY29udHh0IiwibW9kdWxlX2luaXQiLCJlbGVtIiwiJGNvbnR4dCIsImNvbnRleHQiLCJXUE9uaW9uX1ZhbGlkYXRvciIsImZvcm0iLCJnZXRfZm9ybSIsImludmFsaWRIYW5kbGVyIiwic2libGluZ3MiLCJyZW1vdmUiLCJiZWZvcmUiLCJpZ25vcmUiLCJlcnJvclBsYWNlbWVudCIsInRyaWdnZXIiLCJlcnJvckNsYXNzIiwiZXJyb3JFbGVtZW50IiwidmFsaWRhdGUiLCJhY2NvcmRpb24iLCJoZWFkZXIiLCJjb2xsYXBzaWJsZSIsImFuaW1hdGUiLCJoZWlnaHRTdHlsZSIsImFjdGl2ZSIsImljb25zIiwiSUR0b0VsZW1lbnQiLCJXUE9uaW9uX0ZpZWxkIiwiJGlucHV0cyIsInJlbW92ZUF0dHIiLCJwcm9wIiwiY2hvc2VuIiwiaGFuZGxlX2FyZ3MiLCIkY2xvbmVfd3JhcCIsIiRhZGRfYnRuIiwiJGxpbWl0IiwiJGVyb3JfbXNnIiwiZXJyb3JfbXNnIiwiJHNvcnQiLCJzb3J0IiwiaXRlbXMiLCJoYW5kbGUiLCJwbGFjZWhvbGRlciIsImV2ZW50IiwidWkiLCJjc3MiLCJzdG9wIiwiV1BPbmlvbkNsb25lciIsImFkZF9idG4iLCJjbG9uZV9lbGVtIiwicmVtb3ZlX2J0biIsInRlbXBsYXRlQWZ0ZXJSZW5kZXIiLCIkZSIsIndwb25pb25fZmllbGQiLCJyZWxvYWQiLCJzb3J0YWJsZSIsIm9uTGltaXRSZWFjaGVkIiwiJGh0bWwiLCJwcmVwZW5kIiwiJF9fRSIsInNldFRpbWVvdXQiLCJzaG93X2FuaW1hdGlvbiIsImFuaW1hdGlvbnMiLCJoaWRlX2FuaW1hdGlvbiIsIndwQ29sb3JQaWNrZXIiLCIkc2V0dGluZ3MiLCIkdmlldyIsImFwcGVuZCIsInBsdWdpbnMiLCJyYW5nZVBsdWdpbiIsImZsYXRwaWNrciIsIiRyZXR1cm4iLCIkX2QiLCIkdmFsIiwiY3VycmVudFRhcmdldCIsIndlYnNhZmUiLCJmb250cyIsImJ1aWxkX29wdGlvbnMiLCJ2YXJpYW50cyIsImdvb2dsZV9mb250cyIsIiR2YXJpYW50IiwiJGh0bWxfdGVtcCIsIiRpbnB1dCIsIiRwcmV2aWV3Iiwid3BfbWVkaWFfZnJhbWUiLCIkYWRkIiwiJGVkaXQiLCIkY2xlYXIiLCIkbWFuYWdlIiwiaWRzIiwid2hhdCIsInN0YXRlIiwibWVkaWEiLCJnYWxsZXJ5IiwibGlicmFyeSIsImZyYW1lIiwibXVsdGlwbGUiLCJvcGVuIiwiZWRpdCIsInNldFN0YXRlIiwic2VsZWN0aW9uIiwic2VsZWN0ZWRJZHMiLCJtb2RlbHMiLCJhdHRhY2htZW50IiwidG9KU09OIiwic2l6ZXMiLCJ0aHVtYiIsInRodW1ibmFpbCIsIiR0bXAiLCJ0YXJnZXQiLCIkcGFyZW50IiwiJGltYWdlX2lkIiwiJGsiLCIkdiIsImN1cnNvciIsInNjcm9sbFNlbnNpdGl2aXR5IiwiZm9yY2VQbGFjZWhvbGRlclNpemUiLCJoZWxwZXIiLCJvcGFjaXR5IiwiJGl0ZW0iLCJoZWlnaHQiLCIkbWFwIiwiZGV0YWlscyIsImRldGFpbHNBdHRyaWJ1dGUiLCIkX2luc3RhbmNlIiwiZ2VvY29tcGxldGUiLCJiaW5kIiwibGF0TG5nIiwiZ2VvY29kZXIiLCJnb29nbGUiLCJtYXBzIiwiR2VvY29kZXIiLCJnZW9jb2RlIiwibGF0IiwibG5nIiwiJGdyb3VwX3dyYXAiLCIkZXJyb3JfbXNnIiwiY2xpY2siLCJvblJlbW92ZSIsInNldHRpbmdzIiwiJF90aGlzIiwiJHJlbW92ZV9idG4iLCIkd29yayIsImVsZW1zIiwicG9wdXAiLCJlbG0iLCJpbml0X3Rvb2x0aXAiLCJwb3B1cF90b29sdGlwIiwiJHRwIiwiJGVsbSIsIiRpbnN0YW5jZSIsIiRoZWlnaHQiLCIkaWNvbiIsImNsb3NlTW9kYWwiLCJlbmFibGVkIiwiZGlzYWJsZWQiLCIkcmVzIiwic3VjY2VzcyIsInJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwiJHBvcHVwIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjdXN0b21DbGFzcyIsIiRwb3B1cF9lbGVtIiwiJHByZXZpZXdfYWRkIiwibWVkaWFfaW5zdGFuY2UiLCJob29rIiwiZG9BY3Rpb24iLCJmaXJzdCIsImF0dHJpYnV0ZXMiLCJpbnB1dG1hc2siLCIkdGhpc19lbGVtIiwiJHRhYiIsImdsb2JhbF92YWxpZGF0ZSIsImFmdGVyIiwiZXEiLCJpbWFnZSIsInNob3dfcHJldmlldyIsInNlbGVjdDIiLCJzZWxlY3RpemUiLCIkZW5hYmxlZCIsIiRkaXNhYmxlZCIsImNvbm5lY3RXaXRoIiwiZm9udF93ZWlnaHRfc3R5bGUiLCIkZm9udF9maWVsZCIsIiRmb250IiwiJGZvbnRfd2VpZ2h0X3N0eWxlIiwiZm9udF9zdHlsZSIsIiR0YWciLCIkY29sb3IiLCIkYWxpZ24iLCIkZm9udFNpemUiLCIkbGluZUhlaWdodCIsIiRiYWNrVVBGb250IiwiJGRpcmVjdGlvbiIsIiRsZXR0ZXJTcGFjaW5nIiwiaHJlZiIsIndlaWdodCIsIiRfYXR0cnMiLCIkdGV4dCIsIiR3ZWlnaHRfdmFsIiwiJHN0eWxlX3ZhbCIsImZyYW1lX3RpdGxlIiwidXBsb2FkX3R5cGUiLCJidXR0b24iLCJpbnNlcnRfdGl0bGUiLCIkdGV4dGFyZWEiLCJ3cExpbmsiLCIkZGVwIiwiY29udHJvbGxlciIsIiRjb250cm9sbGVyIiwiJGNvbmRpdGlvbiIsImNvbmRpdGlvbiIsIiRmaWVsZCIsIiRJTlBVVCIsImNvbnR4dCIsImNyZWF0ZVJ1bGUiLCJpbmNsdWRlIiwiJGZpZCIsIiRpc19sb2FkaW5nIiwid3BvaW1nIiwiaW1nIiwidGVzdERpbWVuc2lvbnMiLCJuYXR1cmFsV2lkdGgiLCIkdG9vbHRpcF9rZXkiLCJ2YWxpZF9qc29uIiwidXBkYXRlRHVyYXRpb24iLCJvblNob3ciLCJjb250ZW50IiwiZmV0Y2giLCJyZXNwIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBvcHBlckluc3RhbmNlIiwiY2F0Y2giLCJvbkhpZGRlbiIsInBvcHBlck9wdGlvbnMiLCJtb2RpZmllcnMiLCJwcmV2ZW50T3ZlcmZsb3ciLCIkaW1hZ2UiLCJpbWFnZVVybCIsImJhY2tncm91bmQiLCJiYWNrZHJvcCIsIiRtY2VfZWRpdG9yIiwidGlueU1DRVByZUluaXQiLCJtY2VJbml0IiwiJHF1aWNrX3RhZ3MiLCJxdEluaXQiLCIkTkVXX0lEIiwiJHRleHRBcmVhIiwiY2xvbmUiLCIkYWN0dWFsX0lEIiwiJGFjdHVhbF9odG1sIiwiJHJlZ2V4IiwidGlueW1jZSIsInRpbnlNQ0UiLCJxdWlja3RhZ3MiLCJXUE9uaW9uX01ldGFib3hfTW9kdWxlIiwibWVudSIsInNhdmVfaGFuZGxlciIsIm5leHQiLCJpcyIsInNsaWRlVG9nZ2xlIiwic2xpZGVVcCIsIiRocmVmIiwiJHdwb25pb25faGVscGVyIiwidXJsX3BhcmFtcyIsIiRzZWN0aW9uIiwiJHBhcmVudF9hY3RpdmVzIiwiJGN1cnJlbnQiLCIkIiwiJGJhc2UiLCIkaGlkZGVuIiwiYmxvY2siLCJtZXNzYWdlIiwib3ZlcmxheUNTUyIsIiRmaWVsZHMiLCIkdmFsdWVzIiwic2VyaWFsaXplIiwidW5ibG9jayIsInBvc3RfaWQiLCJ2YWx1ZXMiLCJmaWVsZEFyZ3MiLCJ3cG9uaW9uX21ldGFib3hfbW9kdWxlIiwiZGVmYXVsdCIsIndwb25pb25fbmV3X2ZpZWxkIiwid3Bvbmlvbl9tb2RhbCIsIiR3cG8iLCIkd3BfaG9vayIsImFwcGx5RmlsdGVycyIsInRleHRhcmVhIiwiaW1hZ2Vfc2VsZWN0Iiwic3dpdGNoZXIiLCJjb2xvcl9wYWxldHRlIiwiaWNvbl9waWNrZXIiLCJmb250X3NlbGVjdG9yIiwiZ3JvdXAiLCJ3cF9lZGl0b3IiLCJyZWxvYWRfd3BfZWRpdG9yIiwiZmllbGRzZXQiLCJ3cF9saW5rcyIsImNoZWNrYm94X3JhZGlvIiwia2V5dmFsdWVfcGFpciIsImNvbG9yX3BpY2tlciIsImRhdGVfcGlja2VyIiwiaW1hZ2VfcG9wdXAiLCJ1cGxvYWQiLCJpbWFnZV91cGxvYWQiLCJqcXVlcnlfdGFiIiwiZmllbGRfdG9vbHRpcCIsImNsb25lX2VsZW1lbnQiLCJzb3J0ZXIiLCJnb29nbGVfbWFwcyIsInR5cG9ncmFwaHkiLCJvZW1iZWQiLCJ0b2dnbGVDbGFzcyIsIiR3cG9mX2RpdiIsIiR3aWRnZXQiLCJjbG9zZXN0IiwiV1BPbmlvbl9RdWlja19FZGl0IiwibG9hZGluZ19zY3JlZW4iLCJXUE9uaW9uX1dQX01vZGFsIiwiQmFja2JvbmUiLCJWaWV3IiwiZXh0ZW5kIiwidGVtcGxhdGVzIiwiZXZlbnRzIiwiYWN0aXZlX3BhZ2UiLCJhY3RpdmVfc2VjdGlvbiIsImluaXRpYWxpemUiLCJsZWZ0X21lbnUiLCJoaWRlX21lbnUiLCJiaW5kQWxsIiwiaW5pdF90ZW1wbGF0ZXMiLCJyZW5kZXIiLCIkbSIsImZyYW1lX21lbnVfaXRlbSIsInJvdXRlcl9tZW51X2l0ZW0iLCJwYWdlX2NvbnRlbnQiLCJzZWN0aW9uX2NvbnRlbnQiLCIkY29udGVudCIsIiRfY29udGVudCIsIiRfbWVudSIsInByZXNlcnZlRm9jdXMiLCJmb2N1cyIsImhhbmRsZV9sZWZ0X21lbnVfY2xpY2siLCIkdGFyZ2V0IiwiJHNob3dfdGFyZ2V0IiwiaGFuZGxlX3RhYl9jbGljayIsIiRwYWdlIiwiaGFzIiwidW5kZWxlZ2F0ZUV2ZW50cyIsIm9mZiIsInNhdmVNb2RhbCIsImRvTm90aGluZyIsIiRvcHRpb25zIiwiY2xhc3NOYW1lIiwibW9kYWwiLCJnZXRfbGVmdF9tZW51Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7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dWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy93cG9uaW9uLWNvcmUuanNcIik7XG4iLCJjbGFzcyBKU19QYXJzZV9BcmdzIHtcclxuXHRjb25zdHJ1Y3RvciggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19uZXN0ZWQgPSBmYWxzZSApIHtcclxuXHRcdHRoaXMuYXJncyAgICAgPSAkYXJncztcclxuXHRcdHRoaXMuZGVmYXVsdHMgPSAkZGVmYXVsdHM7XHJcblx0XHR0aGlzLm5lc3RlZCAgID0gJGlzX25lc3RlZDtcclxuXHRcdHRoaXMucGFyc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLmFyZ3M7XHJcblx0fVxyXG5cclxuXHRwYXJzZSgpIHtcclxuXHRcdGZvciggbGV0ICRfa2V5IGluIHRoaXMuZGVmYXVsdHMgKSB7XHJcblx0XHRcdGlmKCB0cnVlID09PSB0aGlzLm5lc3RlZCAmJiB0eXBlb2YgIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0gPT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IG5ldyBKU19QYXJzZV9BcmdzKCB0aGlzLmFyZ3NbICRfa2V5IF0sIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0sIHRoaXMubmVzdGVkICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3NbICRfa2V5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gdGhpcy5kZWZhdWx0c1sgJF9rZXkgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19kZWVwID0gZmFsc2UgKSA9PiBuZXcgSlNfUGFyc2VfQXJncyggJGFyZ3MsICRkZWZhdWx0cywgJGlzX2RlZXAgKTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXJyYXlfbWVyZ2UoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYXJyYXlfbWVyZ2UvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogTmF0ZVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IGpvc2hcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMSA9IHtcImNvbG9yXCI6IFwicmVkXCIsIDA6IDIsIDE6IDR9XG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjIgPSB7MDogXCJhXCIsIDE6IFwiYlwiLCBcImNvbG9yXCI6IFwiZ3JlZW5cIiwgXCJzaGFwZVwiOiBcInRyYXBlem9pZFwiLCAyOiA0fVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfbWVyZ2UoJGFycjEsICRhcnIyKVxuICAvLyAgIHJldHVybnMgMToge1wiY29sb3JcIjogXCJncmVlblwiLCAwOiAyLCAxOiA0LCAyOiBcImFcIiwgMzogXCJiXCIsIFwic2hhcGVcIjogXCJ0cmFwZXpvaWRcIiwgNDogNH1cbiAgLy8gICBleGFtcGxlIDI6IHZhciAkYXJyMSA9IFtdXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGFycjIgPSB7MTogXCJkYXRhXCJ9XG4gIC8vICAgZXhhbXBsZSAyOiBhcnJheV9tZXJnZSgkYXJyMSwgJGFycjIpXG4gIC8vICAgcmV0dXJucyAyOiB7MDogXCJkYXRhXCJ9XG5cbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICB2YXIgYXJnbCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgYXJnO1xuICB2YXIgcmV0T2JqID0ge307XG4gIHZhciBrID0gJyc7XG4gIHZhciBhcmdpbCA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY3QgPSAwO1xuICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgcmV0QXJyID0gdHJ1ZTtcblxuICBmb3IgKGkgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgaWYgKHRvU3RyLmNhbGwoYXJnc1tpXSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldEFyciA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJldEFycikge1xuICAgIHJldEFyciA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmdsOyBpKyspIHtcbiAgICAgIHJldEFyciA9IHJldEFyci5jb25jYXQoYXJnc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXRBcnI7XG4gIH1cblxuICBmb3IgKGkgPSAwLCBjdCA9IDA7IGkgPCBhcmdsOyBpKyspIHtcbiAgICBhcmcgPSBhcmdzW2ldO1xuICAgIGlmICh0b1N0ci5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIGZvciAoaiA9IDAsIGFyZ2lsID0gYXJnLmxlbmd0aDsgaiA8IGFyZ2lsOyBqKyspIHtcbiAgICAgICAgcmV0T2JqW2N0KytdID0gYXJnW2pdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGsgaW4gYXJnKSB7XG4gICAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBpZiAocGFyc2VJbnQoaywgMTApICsgJycgPT09IGspIHtcbiAgICAgICAgICAgIHJldE9ialtjdCsrXSA9IGFyZ1trXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0T2JqW2tdID0gYXJnW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRPYmo7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlfbWVyZ2UuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXJyYXlfbWVyZ2VfcmVjdXJzaXZlKGFycjEsIGFycjIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9hcnJheV9tZXJnZV9yZWN1cnNpdmUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBTdWJoYXNpcyBEZWJcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIxID0geydjb2xvcic6IHsnZmF2b3JpdGUnOiAncmVkJ30sIDA6IDV9XG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjIgPSB7MDogMTAsICdjb2xvcic6IHsnZmF2b3JpdGUnOiAnZ3JlZW4nLCAwOiAnYmx1ZSd9fVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfbWVyZ2VfcmVjdXJzaXZlKCRhcnIxLCAkYXJyMilcbiAgLy8gICByZXR1cm5zIDE6IHsnY29sb3InOiB7J2Zhdm9yaXRlJzogezA6ICdyZWQnLCAxOiAnZ3JlZW4nfSwgMDogJ2JsdWUnfSwgMTogNSwgMTogMTB9XG4gIC8vICAgICAgICB0ZXN0OiBza2lwLTFcblxuICB2YXIgYXJyYXlNZXJnZSA9IHJlcXVpcmUoJy4uL2FycmF5L2FycmF5X21lcmdlJyk7XG4gIHZhciBpZHggPSAnJztcblxuICBpZiAoYXJyMSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyMSkgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgYXJyMiAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyMikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBmb3IgKGlkeCBpbiBhcnIyKSB7XG4gICAgICBhcnIxLnB1c2goYXJyMltpZHhdKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJyMSAmJiBhcnIxIGluc3RhbmNlb2YgT2JqZWN0ICYmIGFycjIgJiYgYXJyMiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIGZvciAoaWR4IGluIGFycjIpIHtcbiAgICAgIGlmIChpZHggaW4gYXJyMSkge1xuICAgICAgICBpZiAoX3R5cGVvZihhcnIxW2lkeF0pID09PSAnb2JqZWN0JyAmJiAodHlwZW9mIGFycjIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFycjIpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBhcnIxW2lkeF0gPSBhcnJheU1lcmdlKGFycjFbaWR4XSwgYXJyMltpZHhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnIxW2lkeF0gPSBhcnIyW2lkeF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycjFbaWR4XSA9IGFycjJbaWR4XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyMTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X3ZhbHVlcyhpbnB1dCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2FycmF5X3ZhbHVlcy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfdmFsdWVzKCB7Zmlyc3RuYW1lOiAnS2V2aW4nLCBzdXJuYW1lOiAndmFuIFpvbm5ldmVsZCd9IClcbiAgLy8gICByZXR1cm5zIDE6IFsgJ0tldmluJywgJ3ZhbiBab25uZXZlbGQnIF1cblxuICB2YXIgdG1wQXJyID0gW107XG4gIHZhciBrZXkgPSAnJztcblxuICBmb3IgKGtleSBpbiBpbnB1dCkge1xuICAgIHRtcEFyclt0bXBBcnIubGVuZ3RoXSA9IGlucHV0W2tleV07XG4gIH1cblxuICByZXR1cm4gdG1wQXJyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5X3ZhbHVlcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY291bnQobWl4ZWRWYXIsIG1vZGUpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jb3VudC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBXYWxkbyBNYWxxdWkgU2lsdmEgKGh0dHA6Ly93YWxkby5tYWxxdWkuaW5mbylcbiAgLy8gICAgaW5wdXQgYnk6IG1lcmFiaVxuICAvLyBidWdmaXhlZCBieTogU29yZW4gSGFuc2VuXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbGl2aWVyIExvdXZpZ25lcyAoaHR0cDovL21nLWNyZWEuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBjb3VudChbWzAsMF0sWzAsLTRdXSwgJ0NPVU5UX1JFQ1VSU0lWRScpXG4gIC8vICAgcmV0dXJucyAxOiA2XG4gIC8vICAgZXhhbXBsZSAyOiBjb3VudCh7J29uZScgOiBbMSwyLDMsNCw1XX0sICdDT1VOVF9SRUNVUlNJVkUnKVxuICAvLyAgIHJldHVybnMgMjogNlxuXG4gIHZhciBrZXk7XG4gIHZhciBjbnQgPSAwO1xuXG4gIGlmIChtaXhlZFZhciA9PT0gbnVsbCB8fCB0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAobWl4ZWRWYXIuY29uc3RydWN0b3IgIT09IEFycmF5ICYmIG1peGVkVmFyLmNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmIChtb2RlID09PSAnQ09VTlRfUkVDVVJTSVZFJykge1xuICAgIG1vZGUgPSAxO1xuICB9XG4gIGlmIChtb2RlICE9PSAxKSB7XG4gICAgbW9kZSA9IDA7XG4gIH1cblxuICBmb3IgKGtleSBpbiBtaXhlZFZhcikge1xuICAgIGlmIChtaXhlZFZhci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjbnQrKztcbiAgICAgIGlmIChtb2RlID09PSAxICYmIG1peGVkVmFyW2tleV0gJiYgKG1peGVkVmFyW2tleV0uY29uc3RydWN0b3IgPT09IEFycmF5IHx8IG1peGVkVmFyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkpIHtcbiAgICAgICAgY250ICs9IGNvdW50KG1peGVkVmFyW2tleV0sIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y291bnQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluX2FycmF5KG5lZWRsZSwgaGF5c3RhY2ssIGFyZ1N0cmljdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHZsYWRvIGhvdWJhXG4gIC8vIGltcHJvdmVkIGJ5OiBKb25hcyBTY2lhbmd1bGEgU3RyZWV0IChKb25pMkJhY2spXG4gIC8vICAgIGlucHV0IGJ5OiBCaWxseVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGluX2FycmF5KCd2YW4nLCBbJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGluX2FycmF5KCd2bGFkbycsIHswOiAnS2V2aW4nLCB2bGFkbzogJ3ZhbicsIDE6ICdab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpbl9hcnJheSgxLCBbJzEnLCAnMicsICczJ10pXG4gIC8vICAgZXhhbXBsZSAzOiBpbl9hcnJheSgxLCBbJzEnLCAnMicsICczJ10sIGZhbHNlKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddLCB0cnVlKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcblxuICB2YXIga2V5ID0gJyc7XG4gIHZhciBzdHJpY3QgPSAhIWFyZ1N0cmljdDtcblxuICAvLyB3ZSBwcmV2ZW50IHRoZSBkb3VibGUgY2hlY2sgKHN0cmljdCAmJiBhcnJba2V5XSA9PT0gbmRsKSB8fCAoIXN0cmljdCAmJiBhcnJba2V5XSA9PT0gbmRsKVxuICAvLyBpbiBqdXN0IG9uZSBmb3IsIGluIG9yZGVyIHRvIGltcHJvdmUgdGhlIHBlcmZvcm1hbmNlXG4gIC8vIGRlY2lkaW5nIHdpY2ggdHlwZSBvZiBjb21wYXJhdGlvbiB3aWxsIGRvIGJlZm9yZSB3YWxrIGFycmF5XG4gIGlmIChzdHJpY3QpIHtcbiAgICBmb3IgKGtleSBpbiBoYXlzdGFjaykge1xuICAgICAgaWYgKGhheXN0YWNrW2tleV0gPT09IG5lZWRsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChrZXkgaW4gaGF5c3RhY2spIHtcbiAgICAgIGlmIChoYXlzdGFja1trZXldID09IG5lZWRsZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5fYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1pY3JvdGltZShnZXRBc0Zsb2F0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvbWljcm90aW1lL1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyBpbXByb3ZlZCBieTogRHVtaXRydSBVenVuIChodHRwOi8vZHV6dW4ubWUpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHRpbWVTdGFtcCA9IG1pY3JvdGltZSh0cnVlKVxuICAvLyAgIGV4YW1wbGUgMTogJHRpbWVTdGFtcCA+IDEwMDAwMDAwMDAgJiYgJHRpbWVTdGFtcCA8IDIwMDAwMDAwMDBcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IC9eMFxcLlswLTldezEsNn0gWzAtOV17MTAsMTB9JC8udGVzdChtaWNyb3RpbWUoKSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICB2YXIgcztcbiAgdmFyIG5vdztcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbm93ID0gKHBlcmZvcm1hbmNlLm5vdygpICsgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTYpIC8gMWU2ICsgJyAnICsgcztcbiAgfSBlbHNlIHtcbiAgICBub3cgPSAoRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWUzKSAvIDFlMyArICcgJyArIHM7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWNyb3RpbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGltZSgpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC90aW1lL1xuICAvLyBvcmlnaW5hbCBieTogR2Vla0ZHIChodHRwOi8vZ2Vla2ZnLmJsb2dzcG90LmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBtZXRqYXlcbiAgLy8gaW1wcm92ZWQgYnk6IEhLTVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICR0aW1lU3RhbXAgPSB0aW1lKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJHRpbWVTdGFtcCA+IDEwMDAwMDAwMDAgJiYgJHRpbWVTdGFtcCA8IDIwMDAwMDAwMDBcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICByZXR1cm4gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jKGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRzIG9uIGNhbGxfdXNlcl9mdW5jX2FycmF5IHdoaWNoIGluIHR1cm4gZGVwZW5kcyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmMoJ2lzTmFOJywgJ2EnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHZhciBjYWxsVXNlckZ1bmNBcnJheSA9IHJlcXVpcmUoJy4uL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5Jyk7XG4gIHBhcmFtZXRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gY2FsbFVzZXJGdW5jQXJyYXkoY2IsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jX2FycmF5KGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmNfYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUaGlhZ28gTWF0YSAoaHR0cDovL3RoaWFnb21hdGEuYmxvZy5jb20pXG4gIC8vICByZXZpc2VkIGJ5OiBKb24gSG9obGVcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZGluZyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAgYW5kL29yIGBuZXcgRnVuY3Rpb25gLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsnYSddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWzFdKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICB2YXIgZnVuYztcbiAgdmFyIHNjb3BlID0gbnVsbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmdW5jID0gJGdsb2JhbFtjYl07XG4gICAgfSBlbHNlIGlmIChjYi5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgIGZ1bmMgPSBuZXcgRnVuY3Rpb24obnVsbCwgJ3JldHVybiAnICsgY2IpKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LWZ1bmNcbiAgICB9XG4gIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNiKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIGZ1bmMgPSBldmFsKGNiWzBdICsgXCJbJ1wiICsgY2JbMV0gKyBcIiddXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZnVuYyA9IGNiWzBdW2NiWzFdXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiWzBdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY29wZSA9ICRnbG9iYWxbY2JbMF1dO1xuICAgICAgfSBlbHNlIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgc2NvcGUgPSBldmFsKGNiWzBdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKGNiWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNjb3BlID0gY2JbMF07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZ1bmMgPSBjYjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihmdW5jICsgJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmMuYXBwbHkoc2NvcGUsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jX2FycmF5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmdW5jdGlvbl9leGlzdHMoZnVuY05hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mdW5jdGlvbl9leGlzdHMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogU3RldmUgQ2xheVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGZ1bmN0aW9uX2V4aXN0cygnaXNGaW5pdGUnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgICAgICAgdGVzdDogc2tpcC0xXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICBpZiAodHlwZW9mIGZ1bmNOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGZ1bmNOYW1lID0gJGdsb2JhbFtmdW5jTmFtZV07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIGZ1bmNOYW1lID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZ1bmN0aW9uX2V4aXN0cy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5pX2dldCh2YXJuYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW5pX2dldC9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgaW5pIHZhbHVlcyBtdXN0IGJlIHNldCBieSBpbmlfc2V0IG9yIG1hbnVhbGx5IHdpdGhpbiBhbiBpbmkgZmlsZVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX3NldCgnZGF0ZS50aW1lem9uZScsICdBc2lhL0hvbmdfS29uZycpXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfZ2V0KCdkYXRlLnRpbWV6b25lJylcbiAgLy8gICByZXR1cm5zIDE6ICdBc2lhL0hvbmdfS29uZydcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuICAkbG9jdXR1cy5waHAuaW5pID0gJGxvY3V0dXMucGhwLmluaSB8fCB7fTtcblxuICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXSAmJiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmlfZ2V0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cGxvZGUoZGVsaW1pdGVyLCBzdHJpbmcsIGxpbWl0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZXhwbG9kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBleHBsb2RlKCcgJywgJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogWyAnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCcgXVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCB0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChkZWxpbWl0ZXIgPT09ICcnIHx8IGRlbGltaXRlciA9PT0gZmFsc2UgfHwgZGVsaW1pdGVyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZGVsaW1pdGVyID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkZWxpbWl0ZXIpKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHN0cmluZyA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHN0cmluZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc3RyaW5nKSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIDA6ICcnXG4gICAgfTtcbiAgfVxuICBpZiAoZGVsaW1pdGVyID09PSB0cnVlKSB7XG4gICAgZGVsaW1pdGVyID0gJzEnO1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBnby4uLlxuICBkZWxpbWl0ZXIgKz0gJyc7XG4gIHN0cmluZyArPSAnJztcblxuICB2YXIgcyA9IHN0cmluZy5zcGxpdChkZWxpbWl0ZXIpO1xuXG4gIGlmICh0eXBlb2YgbGltaXQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gcztcblxuICAvLyBTdXBwb3J0IGZvciBsaW1pdFxuICBpZiAobGltaXQgPT09IDApIGxpbWl0ID0gMTtcblxuICAvLyBQb3NpdGl2ZSBsaW1pdFxuICBpZiAobGltaXQgPiAwKSB7XG4gICAgaWYgKGxpbWl0ID49IHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgcmV0dXJuIHMuc2xpY2UoMCwgbGltaXQgLSAxKS5jb25jYXQoW3Muc2xpY2UobGltaXQgLSAxKS5qb2luKGRlbGltaXRlcildKTtcbiAgfVxuXG4gIC8vIE5lZ2F0aXZlIGxpbWl0XG4gIGlmICgtbGltaXQgPj0gcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzLnNwbGljZShzLmxlbmd0aCArIGxpbWl0KTtcbiAgcmV0dXJuIHM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwbG9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbXBsb2RlKGdsdWUsIHBpZWNlcykge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2ltcGxvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogV2FsZG8gTWFscXVpIFNpbHZhIChodHRwOi8vd2FsZG8ubWFscXVpLmluZm8pXG4gIC8vIGltcHJvdmVkIGJ5OiBJdHNhY29uIChodHRwOi8vd3d3Lml0c2Fjb24ubmV0LylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBpbXBsb2RlKCcgJywgWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IGltcGxvZGUoJyAnLCB7Zmlyc3Q6J0tldmluJywgbGFzdDogJ3ZhbiBab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIHZhciBpID0gJyc7XG4gIHZhciByZXRWYWwgPSAnJztcbiAgdmFyIHRHbHVlID0gJyc7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBwaWVjZXMgPSBnbHVlO1xuICAgIGdsdWUgPSAnJztcbiAgfVxuXG4gIGlmICgodHlwZW9mIHBpZWNlcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGllY2VzKSkgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwaWVjZXMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm4gcGllY2VzLmpvaW4oZ2x1ZSk7XG4gICAgfVxuICAgIGZvciAoaSBpbiBwaWVjZXMpIHtcbiAgICAgIHJldFZhbCArPSB0R2x1ZSArIHBpZWNlc1tpXTtcbiAgICAgIHRHbHVlID0gZ2x1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfVxuXG4gIHJldHVybiBwaWVjZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1wbG9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21kNS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiBLZWVwIGluIG1pbmQgdGhhdCBpbiBhY2NvcmRhbmNlIHdpdGggUEhQLCB0aGUgd2hvbGUgc3RyaW5nIGlzIGJ1ZmZlcmVkIGFuZCB0aGVuXG4gIC8vICAgICAgbm90ZSAxOiBoYXNoZWQuIElmIGF2YWlsYWJsZSwgd2UnZCByZWNvbW1lbmQgdXNpbmcgTm9kZSdzIG5hdGl2ZSBjcnlwdG8gbW9kdWxlcyBkaXJlY3RseVxuICAvLyAgICAgIG5vdGUgMTogaW4gYSBzdGVhbWluZyBmYXNoaW9uIGZvciBmYXN0ZXIgYW5kIG1vcmUgZWZmaWNpZW50IGhhc2hpbmdcbiAgLy8gICBleGFtcGxlIDE6IG1kNSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnNmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjknXG5cbiAgdmFyIGhhc2g7XG4gIHRyeSB7XG4gICAgdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIHZhciBtZDVzdW0gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgbWQ1c3VtLnVwZGF0ZShzdHIpO1xuICAgIGhhc2ggPSBtZDVzdW0uZGlnZXN0KCdoZXgnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB2YXIgdXRmOEVuY29kZSA9IHJlcXVpcmUoJy4uL3htbC91dGY4X2VuY29kZScpO1xuICB2YXIgeGw7XG5cbiAgdmFyIF9yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gX3JvdGF0ZUxlZnQobFZhbHVlLCBpU2hpZnRCaXRzKSB7XG4gICAgcmV0dXJuIGxWYWx1ZSA8PCBpU2hpZnRCaXRzIHwgbFZhbHVlID4+PiAzMiAtIGlTaGlmdEJpdHM7XG4gIH07XG5cbiAgdmFyIF9hZGRVbnNpZ25lZCA9IGZ1bmN0aW9uIF9hZGRVbnNpZ25lZChsWCwgbFkpIHtcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0O1xuICAgIGxYOCA9IGxYICYgMHg4MDAwMDAwMDtcbiAgICBsWTggPSBsWSAmIDB4ODAwMDAwMDA7XG4gICAgbFg0ID0gbFggJiAweDQwMDAwMDAwO1xuICAgIGxZNCA9IGxZICYgMHg0MDAwMDAwMDtcbiAgICBsUmVzdWx0ID0gKGxYICYgMHgzRkZGRkZGRikgKyAobFkgJiAweDNGRkZGRkZGKTtcbiAgICBpZiAobFg0ICYgbFk0KSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgfVxuICAgIGlmIChsWDQgfCBsWTQpIHtcbiAgICAgIGlmIChsUmVzdWx0ICYgMHg0MDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX0YgPSBmdW5jdGlvbiBfRih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB5IHwgfnggJiB6O1xuICB9O1xuICB2YXIgX0cgPSBmdW5jdGlvbiBfRyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB6IHwgeSAmIH56O1xuICB9O1xuICB2YXIgX0ggPSBmdW5jdGlvbiBfSCh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfTtcbiAgdmFyIF9JID0gZnVuY3Rpb24gX0koeCwgeSwgeikge1xuICAgIHJldHVybiB5IF4gKHggfCB+eik7XG4gIH07XG5cbiAgdmFyIF9GRiA9IGZ1bmN0aW9uIF9GRihhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRihiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9HRyA9IGZ1bmN0aW9uIF9HRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRyhiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9ISCA9IGZ1bmN0aW9uIF9ISChhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSChiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9JSSA9IGZ1bmN0aW9uIF9JSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSShiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9jb252ZXJ0VG9Xb3JkQXJyYXkgPSBmdW5jdGlvbiBfY29udmVydFRvV29yZEFycmF5KHN0cikge1xuICAgIHZhciBsV29yZENvdW50O1xuICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDIgPSAobE51bWJlck9mV29yZHNUZW1wMSAtIGxOdW1iZXJPZldvcmRzVGVtcDEgJSA2NCkgLyA2NDtcbiAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNUZW1wMiArIDEpICogMTY7XG4gICAgdmFyIGxXb3JkQXJyYXkgPSBuZXcgQXJyYXkobE51bWJlck9mV29yZHMgLSAxKTtcbiAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGxCeXRlQ291bnQgPSAwO1xuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCBzdHIuY2hhckNvZGVBdChsQnl0ZUNvdW50KSA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgICAgbEJ5dGVDb3VudCsrO1xuICAgIH1cbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAweDgwIDw8IGxCeXRlUG9zaXRpb247XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XG4gICAgcmV0dXJuIGxXb3JkQXJyYXk7XG4gIH07XG5cbiAgdmFyIF93b3JkVG9IZXggPSBmdW5jdGlvbiBfd29yZFRvSGV4KGxWYWx1ZSkge1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZSA9ICcnO1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnJztcbiAgICB2YXIgbEJ5dGU7XG4gICAgdmFyIGxDb3VudDtcblxuICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XG4gICAgICBsQnl0ZSA9IGxWYWx1ZSA+Pj4gbENvdW50ICogOCAmIDI1NTtcbiAgICAgIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcwJyArIGxCeXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgIHdvcmRUb0hleFZhbHVlID0gd29yZFRvSGV4VmFsdWUgKyB3b3JkVG9IZXhWYWx1ZVRlbXAuc3Vic3RyKHdvcmRUb0hleFZhbHVlVGVtcC5sZW5ndGggLSAyLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRUb0hleFZhbHVlO1xuICB9O1xuXG4gIHZhciB4ID0gW107XG4gIHZhciBrO1xuICB2YXIgQUE7XG4gIHZhciBCQjtcbiAgdmFyIENDO1xuICB2YXIgREQ7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgUzExID0gNztcbiAgdmFyIFMxMiA9IDEyO1xuICB2YXIgUzEzID0gMTc7XG4gIHZhciBTMTQgPSAyMjtcbiAgdmFyIFMyMSA9IDU7XG4gIHZhciBTMjIgPSA5O1xuICB2YXIgUzIzID0gMTQ7XG4gIHZhciBTMjQgPSAyMDtcbiAgdmFyIFMzMSA9IDQ7XG4gIHZhciBTMzIgPSAxMTtcbiAgdmFyIFMzMyA9IDE2O1xuICB2YXIgUzM0ID0gMjM7XG4gIHZhciBTNDEgPSA2O1xuICB2YXIgUzQyID0gMTA7XG4gIHZhciBTNDMgPSAxNTtcbiAgdmFyIFM0NCA9IDIxO1xuXG4gIHN0ciA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgeCA9IF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKTtcbiAgYSA9IDB4Njc0NTIzMDE7XG4gIGIgPSAweEVGQ0RBQjg5O1xuICBjID0gMHg5OEJBRENGRTtcbiAgZCA9IDB4MTAzMjU0NzY7XG5cbiAgeGwgPSB4Lmxlbmd0aDtcbiAgZm9yIChrID0gMDsgayA8IHhsOyBrICs9IDE2KSB7XG4gICAgQUEgPSBhO1xuICAgIEJCID0gYjtcbiAgICBDQyA9IGM7XG4gICAgREQgPSBkO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxXSwgUzEyLCAweEU4QzdCNzU2KTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzExLCAweEY1N0MwRkFGKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyA3XSwgUzE0LCAweEZENDY5NTAxKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFMxMywgMHhGRkZGNUJCMSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxM10sIFMxMiwgMHhGRDk4NzE5Myk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzIxLCAweEY2MUUyNTYyKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMF0sIFMyNCwgMHhFOUI2QzdBQSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMjMsIDB4RDhBMUU2ODEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgQUEpO1xuICAgIGIgPSBfYWRkVW5zaWduZWQoYiwgQkIpO1xuICAgIGMgPSBfYWRkVW5zaWduZWQoYywgQ0MpO1xuICAgIGQgPSBfYWRkVW5zaWduZWQoZCwgREQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBfd29yZFRvSGV4KGEpICsgX3dvcmRUb0hleChiKSArIF93b3JkVG9IZXgoYykgKyBfd29yZFRvSGV4KGQpO1xuXG4gIHJldHVybiB0ZW1wLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV9zdHIoc3RyLCBhcnJheSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2Vfc3RyL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBDYWdyaSBFa2luXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogc3RhZzAxOVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogWmFpZGUgKGh0dHA6Ly96YWlkZXN0aGluZ3MuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogRGF2aWQgUGVzdGEgKGh0dHA6Ly9kYXZpZHBlc3RhLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGplaWNxdWVzdFxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWQsIHdpbGwgcHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUuXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gYSBwYXJ0aWN1bGFyIGFyZ3VtZW50IGhhcyBiZWVuIHBhc3NlZCwgYW5kIHRoZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiByZXR1cm5lZCB2YWx1ZSBpcyBkaWZmZXJlbnQgcGFyc2Vfc3RyIG9mIFBIUC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogRm9yIGV4YW1wbGUsIGE9Yj1jJmQ9PT09Y1xuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3N0cignZmlyc3Q9Zm9vJnNlY29uZD1iYXInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMTogeyBmaXJzdDogJ2ZvbycsIHNlY29uZDogJ2JhcicgfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3N0cignc3RyX2E9SmFjaythbmQrSmlsbCtkaWRuJTI3dCtzZWUrdGhlK3dlbGwuJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHsgc3RyX2E6IFwiSmFjayBhbmQgSmlsbCBkaWRuJ3Qgc2VlIHRoZSB3ZWxsLlwiIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRhYmMgPSB7MzonYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3N0cignYVtiXVtcImNcIl09ZGVmJmFbcV09dCs1JywgJGFiYylcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkYWJjXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtcIjNcIjpcImFcIixcImFcIjp7XCJiXCI6e1wiY1wiOlwiZGVmXCJ9LFwicVwiOlwidCA1XCJ9fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3N0cignYVtdW109dmFsdWUnLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNDoge1wiYVwiOntcIjBcIjp7XCIwXCI6XCJ2YWx1ZVwifX19XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogcGFyc2Vfc3RyKCdhPTEmYVtdPTInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNToge1wiYVwiOntcIjBcIjpcIjJcIn19XG5cbiAgdmFyIHN0ckFyciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL14mLywgJycpLnJlcGxhY2UoLyYkLywgJycpLnNwbGl0KCcmJyk7XG4gIHZhciBzYWwgPSBzdHJBcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBjdDtcbiAgdmFyIHA7XG4gIHZhciBsYXN0T2JqO1xuICB2YXIgb2JqO1xuICB2YXIgY2hyO1xuICB2YXIgdG1wO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBwb3N0TGVmdEJyYWNrZXRQb3M7XG4gIHZhciBrZXlzO1xuICB2YXIga2V5c0xlbjtcblxuICB2YXIgX2ZpeFN0ciA9IGZ1bmN0aW9uIF9maXhTdHIoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gIH07XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgYXJyYXkgPSAkZ2xvYmFsO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNhbDsgaSsrKSB7XG4gICAgdG1wID0gc3RyQXJyW2ldLnNwbGl0KCc9Jyk7XG4gICAga2V5ID0gX2ZpeFN0cih0bXBbMF0pO1xuICAgIHZhbHVlID0gdG1wLmxlbmd0aCA8IDIgPyAnJyA6IF9maXhTdHIodG1wWzFdKTtcblxuICAgIHdoaWxlIChrZXkuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJ1xceDAwJykgPiAtMSkge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCdcXHgwMCcpKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICYmIGtleS5jaGFyQXQoMCkgIT09ICdbJykge1xuICAgICAga2V5cyA9IFtdO1xuICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ1snICYmICFwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSBqICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY2hhckF0KGopID09PSAnXScpIHtcbiAgICAgICAgICBpZiAocG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc2xpY2UoMCwgcG9zdExlZnRCcmFja2V0UG9zIC0gMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cihwb3N0TGVmdEJyYWNrZXRQb3MsIGogLSBwb3N0TGVmdEJyYWNrZXRQb3MpKTtcbiAgICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGogKyAxKSAhPT0gJ1snKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleXNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY2hyID0ga2V5c1swXS5jaGFyQXQoaik7XG5cbiAgICAgICAgaWYgKGNociA9PT0gJyAnIHx8IGNociA9PT0gJy4nIHx8IGNociA9PT0gJ1snKSB7XG4gICAgICAgICAga2V5c1swXSA9IGtleXNbMF0uc3Vic3RyKDAsIGopICsgJ18nICsga2V5c1swXS5zdWJzdHIoaiArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNociA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqID0gYXJyYXk7XG5cbiAgICAgIGZvciAoaiA9IDAsIGtleXNMZW4gPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW47IGorKykge1xuICAgICAgICBrZXkgPSBrZXlzW2pdLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgICAgIGxhc3RPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKChrZXkgPT09ICcnIHx8IGtleSA9PT0gJyAnKSAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgLy8gSW5zZXJ0IG5ldyBkaW1lbnNpb25cbiAgICAgICAgICBjdCA9IC0xO1xuXG4gICAgICAgICAgZm9yIChwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICBpZiAoK3AgPiBjdCAmJiBwLm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgICAgICAgICAgICBjdCA9ICtwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gY3QgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJpbWl0aXZlIHZhbHVlLCByZXBsYWNlIHdpdGggb2JqZWN0XG4gICAgICAgIGlmIChPYmplY3Qob2JqW2tleV0pICE9PSBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGFzdE9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vfc3RyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cl9yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZSwgc3ViamVjdCwgY291bnRPYmopIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJfcmVwbGFjZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBHYWJyaWVsIFBhZGVybmlcbiAgLy8gaW1wcm92ZWQgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyBpbXByb3ZlZCBieTogU2ltb24gV2lsbGlzb24gKGh0dHA6Ly9zaW1vbndpbGxpc29uLm5ldClcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgcmV2aXNlZCBieTogSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIChodHRwOi8vd3d3LmpzZnJvbWhlbGwuY29tKVxuICAvLyBidWdmaXhlZCBieTogQW50b24gT25nc29uXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogT2xlZyBFcmVtZWV2XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBHbGVuIEFyYXNvbiAoaHR0cDovL0NhbmFkaWFuRG9tYWluUmVnaXN0cnkuY2EpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBHbGVuIEFyYXNvbiAoaHR0cDovL0NhbmFkaWFuRG9tYWluUmVnaXN0cnkuY2EpXG4gIC8vICAgIGlucHV0IGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogT2xlZyBFcmVtZWV2XG4gIC8vICAgICAgbm90ZSAxOiBUaGUgY291bnRPYmogcGFyYW1ldGVyIChvcHRpb25hbCkgaWYgdXNlZCBtdXN0IGJlIHBhc3NlZCBpbiBhcyBhXG4gIC8vICAgICAgbm90ZSAxOiBvYmplY3QuIFRoZSBjb3VudCB3aWxsIHRoZW4gYmUgd3JpdHRlbiBieSByZWZlcmVuY2UgaW50byBpdCdzIGB2YWx1ZWAgcHJvcGVydHlcbiAgLy8gICBleGFtcGxlIDE6IHN0cl9yZXBsYWNlKCcgJywgJy4nLCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4udmFuLlpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IHN0cl9yZXBsYWNlKFsne25hbWV9JywgJ2wnXSwgWydoZWxsbycsICdtJ10sICd7bmFtZX0sIGxhcnMnKVxuICAvLyAgIHJldHVybnMgMjogJ2hlbW1vLCBtYXJzJ1xuICAvLyAgIGV4YW1wbGUgMzogc3RyX3JlcGxhY2UoQXJyYXkoJ1MnLCdGJyksJ3gnLCdBU0RGQVNERicpXG4gIC8vICAgcmV0dXJucyAzOiAnQXhEeEF4RHgnXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgY291bnRPYmogPSB7fVxuICAvLyAgIGV4YW1wbGUgNDogc3RyX3JlcGxhY2UoWydBJywnRCddLCBbJ3gnLCd5J10gLCAnQVNERkFTREYnICwgY291bnRPYmopXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9IGNvdW50T2JqLnZhbHVlXG4gIC8vICAgcmV0dXJucyA0OiA0XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciB0ZW1wID0gJyc7XG4gIHZhciByZXBsID0gJyc7XG4gIHZhciBzbCA9IDA7XG4gIHZhciBmbCA9IDA7XG4gIHZhciBmID0gW10uY29uY2F0KHNlYXJjaCk7XG4gIHZhciByID0gW10uY29uY2F0KHJlcGxhY2UpO1xuICB2YXIgcyA9IHN1YmplY3Q7XG4gIHZhciByYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgdmFyIHNhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHMpID09PSAnW29iamVjdCBBcnJheV0nO1xuICBzID0gW10uY29uY2F0KHMpO1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG5cbiAgaWYgKCh0eXBlb2Ygc2VhcmNoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWFyY2gpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlcGxhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgdGVtcCA9IHJlcGxhY2U7XG4gICAgcmVwbGFjZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzZWFyY2gubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJlcGxhY2VbaV0gPSB0ZW1wO1xuICAgIH1cbiAgICB0ZW1wID0gJyc7XG4gICAgciA9IFtdLmNvbmNhdChyZXBsYWNlKTtcbiAgICByYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgY291bnRPYmogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY291bnRPYmoudmFsdWUgPSAwO1xuICB9XG5cbiAgZm9yIChpID0gMCwgc2wgPSBzLmxlbmd0aDsgaSA8IHNsOyBpKyspIHtcbiAgICBpZiAoc1tpXSA9PT0gJycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKGogPSAwLCBmbCA9IGYubGVuZ3RoOyBqIDwgZmw7IGorKykge1xuICAgICAgdGVtcCA9IHNbaV0gKyAnJztcbiAgICAgIHJlcGwgPSByYSA/IHJbal0gIT09IHVuZGVmaW5lZCA/IHJbal0gOiAnJyA6IHJbMF07XG4gICAgICBzW2ldID0gdGVtcC5zcGxpdChmW2pdKS5qb2luKHJlcGwpO1xuICAgICAgaWYgKHR5cGVvZiBjb3VudE9iaiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY291bnRPYmoudmFsdWUgKz0gdGVtcC5zcGxpdChmW2pdKS5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2EgPyBzIDogc1swXTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJfcmVwbGFjZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RydG9sb3dlcihzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJ0b2xvd2VyL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICBleGFtcGxlIDE6IHN0cnRvbG93ZXIoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ2tldmluIHZhbiB6b25uZXZlbGQnXG5cbiAgcmV0dXJuIChzdHIgKyAnJykudG9Mb3dlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJ0b2xvd2VyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJ0b3VwcGVyKHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cnRvdXBwZXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgIGV4YW1wbGUgMTogc3RydG91cHBlcignS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS0VWSU4gVkFOIFpPTk5FVkVMRCdcblxuICByZXR1cm4gKHN0ciArICcnKS50b1VwcGVyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnRvdXBwZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9kZWNvZGUoZW5jb2RlZERhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZGVjb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEFtYW4gR3VwdGFcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZGVjb2RlKCdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09JylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2RlY29kZSgnWVE9PScpXG4gIC8vICAgcmV0dXJucyAyOiAnYSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9kZWNvZGUoJzRweVRJTU9nSUd4aElHMXZaR1U9JylcbiAgLy8gICByZXR1cm5zIDM6ICfinJMgw6AgbGEgbW9kZSdcblxuICAvLyBkZWNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZGVjb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGRlY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBkZWNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hdG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcod2luZG93LmF0b2IoZW5jb2RlZERhdGEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5jb2RlZERhdGEsICdiYXNlNjQnKS50b1N0cmluZygndXRmLTgnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBkZWMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlZERhdGE7XG4gIH1cblxuICBlbmNvZGVkRGF0YSArPSAnJztcblxuICBkbyB7XG4gICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcbiAgICBoMSA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMiA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMyA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoNCA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcblxuICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuXG4gICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcbiAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XG4gICAgbzMgPSBiaXRzICYgMHhmZjtcblxuICAgIGlmIChoMyA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xuICAgIH0gZWxzZSBpZiAoaDQgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgZW5jb2RlZERhdGEubGVuZ3RoKTtcblxuICBkZWMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZW5jb2RlKHN0cmluZ1RvRW5jb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJheXJvbiBHdWV2YXJhXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PSdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9lbmNvZGUoJ2EnKVxuICAvLyAgIHJldHVybnMgMjogJ1lRPT0nXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZW5jb2RlKCfinJMgw6AgbGEgbW9kZScpXG4gIC8vICAgcmV0dXJucyAzOiAnNHB5VElNT2dJR3hoSUcxdlpHVT0nXG5cbiAgLy8gZW5jb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGVuY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBlbmNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZW5jb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBmaXJzdCB3ZSB1c2UgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGdldCBwZXJjZW50LWVuY29kZWQgVVRGLTgsXG4gICAgLy8gdGhlbiB3ZSBjb252ZXJ0IHRoZSBwZXJjZW50IGVuY29kaW5ncyBpbnRvIHJhdyBieXRlcyB3aGljaFxuICAgIC8vIGNhbiBiZSBmZWQgaW50byB0aGUgYmFzZTY0IGVuY29kaW5nIGFsZ29yaXRobS5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5idG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nVG9FbmNvZGUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBlbmMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghc3RyaW5nVG9FbmNvZGUpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9FbmNvZGU7XG4gIH1cblxuICBzdHJpbmdUb0VuY29kZSA9IGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpO1xuXG4gIGRvIHtcbiAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXG4gICAgbzEgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzIgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzMgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICBiaXRzID0gbzEgPDwgMTYgfCBvMiA8PCA4IHwgbzM7XG5cbiAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xuICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XG4gICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xuICAgIGg0ID0gYml0cyAmIDB4M2Y7XG5cbiAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xuICAgIHRtcEFyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xuICB9IHdoaWxlIChpIDwgc3RyaW5nVG9FbmNvZGUubGVuZ3RoKTtcblxuICBlbmMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgdmFyIHIgPSBzdHJpbmdUb0VuY29kZS5sZW5ndGggJSAzO1xuXG4gIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBib29sdmFsKG1peGVkVmFyKSB7XG4gIC8vIG9yaWdpbmFsIGJ5OiBXaWxsIFJvd2VcbiAgLy8gICBleGFtcGxlIDE6IGJvb2x2YWwodHJ1ZSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGJvb2x2YWwoZmFsc2UpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogYm9vbHZhbCgwKVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDQ6IGJvb2x2YWwoMC4wKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGJvb2x2YWwoJycpXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNjogYm9vbHZhbCgnMCcpXG4gIC8vICAgcmV0dXJucyA2OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNzogYm9vbHZhbChbXSlcbiAgLy8gICByZXR1cm5zIDc6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA4OiBib29sdmFsKCcnKVxuICAvLyAgIHJldHVybnMgODogZmFsc2VcbiAgLy8gICBleGFtcGxlIDk6IGJvb2x2YWwobnVsbClcbiAgLy8gICByZXR1cm5zIDk6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAxMDogYm9vbHZhbCh1bmRlZmluZWQpXG4gIC8vICAgcmV0dXJucyAxMDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDExOiBib29sdmFsKCd0cnVlJylcbiAgLy8gICByZXR1cm5zIDExOiB0cnVlXG5cbiAgaWYgKG1peGVkVmFyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gMCB8fCBtaXhlZFZhciA9PT0gMC4wKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSAnJyB8fCBtaXhlZFZhciA9PT0gJzAnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWl4ZWRWYXIpICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gbnVsbCB8fCBtaXhlZFZhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vbHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbXB0eShtaXhlZFZhcikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2VtcHR5L1xuICAvLyBvcmlnaW5hbCBieTogUGhpbGlwcGUgQmF1bWFublxuICAvLyAgICBpbnB1dCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICBpbnB1dCBieTogTEhcbiAgLy8gICAgaW5wdXQgYnk6IFN0b3lhbiBLeW9zZXYgKGh0dHA6Ly93d3cuc3Zlc3Qub3JnLylcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBGcmFuY2VzY29cbiAgLy8gaW1wcm92ZWQgYnk6IE1hcmMgSmFuc2VuXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogZW1wdHkobnVsbClcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGVtcHR5KHVuZGVmaW5lZClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IGVtcHR5KFtdKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogZW1wdHkoe30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG4gIC8vICAgZXhhbXBsZSA1OiBlbXB0eSh7J2FGdW5jJyA6IGZ1bmN0aW9uICgpIHsgYWxlcnQoJ2h1bXB0eScpOyB9IH0pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuXG4gIHZhciB1bmRlZjtcbiAgdmFyIGtleTtcbiAgdmFyIGk7XG4gIHZhciBsZW47XG4gIHZhciBlbXB0eVZhbHVlcyA9IFt1bmRlZiwgbnVsbCwgZmFsc2UsIDAsICcnLCAnMCddO1xuXG4gIGZvciAoaSA9IDAsIGxlbiA9IGVtcHR5VmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKG1peGVkVmFyID09PSBlbXB0eVZhbHVlc1tpXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChrZXkgaW4gbWl4ZWRWYXIpIHtcbiAgICAgIGlmIChtaXhlZFZhci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxvYXR2YWwobWl4ZWRWYXIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mbG9hdHZhbC9cbiAgLy8gb3JpZ2luYWwgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIG5hdGl2ZSBwYXJzZUZsb2F0KCkgbWV0aG9kIG9mIEphdmFTY3JpcHQgcmV0dXJucyBOYU5cbiAgLy8gICAgICBub3RlIDE6IHdoZW4gaXQgZW5jb3VudGVycyBhIHN0cmluZyBiZWZvcmUgYW4gaW50IG9yIGZsb2F0IHZhbHVlLlxuICAvLyAgIGV4YW1wbGUgMTogZmxvYXR2YWwoJzE1MC4wM19wYWdlLXNlY3Rpb24nKVxuICAvLyAgIHJldHVybnMgMTogMTUwLjAzXG4gIC8vICAgZXhhbXBsZSAyOiBmbG9hdHZhbCgncGFnZTogMycpXG4gIC8vICAgZXhhbXBsZSAyOiBmbG9hdHZhbCgnLTUwICsgOCcpXG4gIC8vICAgcmV0dXJucyAyOiAwXG4gIC8vICAgcmV0dXJucyAyOiAtNTBcblxuICByZXR1cm4gcGFyc2VGbG9hdChtaXhlZFZhcikgfHwgMDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbG9hdHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnR2YWwobWl4ZWRWYXIsIGJhc2UpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbnR2YWwvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc3RlbnNpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgIGlucHV0IGJ5OiBNYXR0ZW9cbiAgLy8gICBleGFtcGxlIDE6IGludHZhbCgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAwXG4gIC8vICAgZXhhbXBsZSAyOiBpbnR2YWwoNC4yKVxuICAvLyAgIHJldHVybnMgMjogNFxuICAvLyAgIGV4YW1wbGUgMzogaW50dmFsKDQyLCA4KVxuICAvLyAgIHJldHVybnMgMzogNDJcbiAgLy8gICBleGFtcGxlIDQ6IGludHZhbCgnMDknKVxuICAvLyAgIHJldHVybnMgNDogOVxuICAvLyAgIGV4YW1wbGUgNTogaW50dmFsKCcxZScsIDE2KVxuICAvLyAgIHJldHVybnMgNTogMzBcbiAgLy8gICBleGFtcGxlIDY6IGludHZhbCgweDIwMDAwMDAwMSlcbiAgLy8gICByZXR1cm5zIDY6IDg1ODk5MzQ1OTNcbiAgLy8gICBleGFtcGxlIDc6IGludHZhbCgnMHhmZicsIDApXG4gIC8vICAgcmV0dXJucyA3OiAyNTVcbiAgLy8gICBleGFtcGxlIDg6IGludHZhbCgnMDEwJywgMClcbiAgLy8gICByZXR1cm5zIDg6IDhcblxuICB2YXIgdG1wLCBtYXRjaDtcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpO1xuXG4gIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gK21peGVkVmFyO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGJhc2UgPT09IDApIHtcbiAgICAgIG1hdGNoID0gbWl4ZWRWYXIubWF0Y2goL15cXHMqMCh4PykvaSk7XG4gICAgICBiYXNlID0gbWF0Y2ggPyBtYXRjaFsxXSA/IDE2IDogOCA6IDEwO1xuICAgIH1cbiAgICB0bXAgPSBwYXJzZUludChtaXhlZFZhciwgYmFzZSB8fCAxMCk7XG4gICAgcmV0dXJuIGlzTmFOKHRtcCkgfHwgIWlzRmluaXRlKHRtcCkgPyAwIDogdG1wO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKG1peGVkVmFyKSkge1xuICAgIHJldHVybiBtaXhlZFZhciA8IDAgPyBNYXRoLmNlaWwobWl4ZWRWYXIpIDogTWF0aC5mbG9vcihtaXhlZFZhcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnR2YWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfYXJyYXkobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogTmF0aGFuIFNlcHVsdmVkYVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IENvcmRcbiAgLy8gYnVnZml4ZWQgYnk6IE1hbmlzaFxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IEluIExvY3V0dXMsIGphdmFzY3JpcHQgb2JqZWN0cyBhcmUgbGlrZSBwaHAgYXNzb2NpYXRpdmUgYXJyYXlzLFxuICAvLyAgICAgIG5vdGUgMTogdGh1cyBKYXZhU2NyaXB0IG9iamVjdHMgd2lsbCBhbHNvXG4gIC8vICAgICAgbm90ZSAxOiByZXR1cm4gdHJ1ZSBpbiB0aGlzIGZ1bmN0aW9uIChleGNlcHQgZm9yIG9iamVjdHMgd2hpY2ggaW5oZXJpdCBwcm9wZXJ0aWVzLFxuICAvLyAgICAgIG5vdGUgMTogYmVpbmcgdGh1cyB1c2VkIGFzIG9iamVjdHMpLFxuICAvLyAgICAgIG5vdGUgMTogdW5sZXNzIHlvdSBkbyBpbmlfc2V0KCdsb2N1dHVzLm9iamVjdHNBc0FycmF5cycsIDApLFxuICAvLyAgICAgIG5vdGUgMTogaW4gd2hpY2ggY2FzZSBvbmx5IGdlbnVpbmUgSmF2YVNjcmlwdCBhcnJheXNcbiAgLy8gICAgICBub3RlIDE6IHdpbGwgcmV0dXJuIHRydWVcbiAgLy8gICBleGFtcGxlIDE6IGlzX2FycmF5KFsnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfYXJyYXkoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX2FycmF5KHswOiAnS2V2aW4nLCAxOiAndmFuJywgMjogJ1pvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaW5pX3NldCgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnLCAwKVxuICAvLyAgIGV4YW1wbGUgNDogaXNfYXJyYXkoezA6ICdLZXZpbicsIDE6ICd2YW4nLCAyOiAnWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNTogaXNfYXJyYXkoZnVuY3Rpb24gdG1wX2EgKCl7IHRoaXMubmFtZSA9ICdLZXZpbicgfSlcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG5cbiAgdmFyIF9nZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIF9nZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcbiAgdmFyIF9pc0FycmF5ID0gZnVuY3Rpb24gX2lzQXJyYXkobWl4ZWRWYXIpIHtcbiAgICAvLyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAvLyBUaGUgYWJvdmUgd29ya3MsIGJ1dCBsZXQncyBkbyB0aGUgZXZlbiBtb3JlIHN0cmluZ2VudCBhcHByb2FjaDpcbiAgICAvLyAoc2luY2UgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyBjb3VsZCBiZSBvdmVycmlkZGVuKVxuICAgIC8vIE51bGwsIE5vdCBhbiBvYmplY3QsIG5vIGxlbmd0aCBwcm9wZXJ0eSBzbyBjb3VsZG4ndCBiZSBhbiBBcnJheSAob3IgU3RyaW5nKVxuICAgIGlmICghbWl4ZWRWYXIgfHwgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG1peGVkVmFyLmxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGxlbiA9IG1peGVkVmFyLmxlbmd0aDtcbiAgICBtaXhlZFZhclttaXhlZFZhci5sZW5ndGhdID0gJ2JvZ3VzJztcbiAgICAvLyBUaGUgb25seSB3YXkgSSBjYW4gdGhpbmsgb2YgdG8gZ2V0IGFyb3VuZCB0aGlzIChvciB3aGVyZSB0aGVyZSB3b3VsZCBiZSB0cm91YmxlKVxuICAgIC8vIHdvdWxkIGJlIHRvIGhhdmUgYW4gb2JqZWN0IGRlZmluZWRcbiAgICAvLyB3aXRoIGEgY3VzdG9tIFwibGVuZ3RoXCIgZ2V0dGVyIHdoaWNoIGNoYW5nZWQgYmVoYXZpb3Igb24gZWFjaCBjYWxsXG4gICAgLy8gKG9yIGEgc2V0dGVyIHRvIG1lc3MgdXAgdGhlIGZvbGxvd2luZyBiZWxvdykgb3IgYSBjdXN0b21cbiAgICAvLyBzZXR0ZXIgZm9yIG51bWVyaWMgcHJvcGVydGllcywgYnV0IGV2ZW4gdGhhdCB3b3VsZCBuZWVkIHRvIGxpc3RlbiBmb3JcbiAgICAvLyBzcGVjaWZpYyBpbmRleGVzOyBidXQgdGhlcmUgc2hvdWxkIGJlIG5vIGZhbHNlIG5lZ2F0aXZlc1xuICAgIC8vIGFuZCBzdWNoIGEgZmFsc2UgcG9zaXRpdmUgd291bGQgbmVlZCB0byByZWx5IG9uIGxhdGVyIEphdmFTY3JpcHRcbiAgICAvLyBpbm5vdmF0aW9ucyBsaWtlIF9fZGVmaW5lU2V0dGVyX19cbiAgICBpZiAobGVuICE9PSBtaXhlZFZhci5sZW5ndGgpIHtcbiAgICAgIC8vIFdlIGtub3cgaXQncyBhbiBhcnJheSBzaW5jZSBsZW5ndGggYXV0by1jaGFuZ2VkIHdpdGggdGhlIGFkZGl0aW9uIG9mIGFcbiAgICAgIC8vIG51bWVyaWMgcHJvcGVydHkgYXQgaXRzIGxlbmd0aCBlbmQsIHNvIHNhZmVseSBnZXQgcmlkIG9mIG91ciBib2d1cyBlbGVtZW50XG4gICAgICBtaXhlZFZhci5sZW5ndGggLT0gMTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBHZXQgcmlkIG9mIHRoZSBwcm9wZXJ0eSB3ZSBhZGRlZCBvbnRvIGEgbm9uLWFycmF5IG9iamVjdDsgb25seSBwb3NzaWJsZVxuICAgIC8vIHNpZGUtZWZmZWN0IGlzIGlmIHRoZSB1c2VyIGFkZHMgYmFjayB0aGUgcHJvcGVydHkgbGF0ZXIsIGl0IHdpbGwgaXRlcmF0ZVxuICAgIC8vIHRoaXMgcHJvcGVydHkgaW4gdGhlIG9sZGVyIG9yZGVyIHBsYWNlbWVudCBpbiBJRSAoYW4gb3JkZXIgd2hpY2ggc2hvdWxkIG5vdFxuICAgIC8vIGJlIGRlcGVuZGVkIG9uIGFueXdheXMpXG4gICAgZGVsZXRlIG1peGVkVmFyW21peGVkVmFyLmxlbmd0aF07XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGlmICghbWl4ZWRWYXIgfHwgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNBcnJheSA9IF9pc0FycmF5KG1peGVkVmFyKTtcblxuICBpZiAoaXNBcnJheSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGluaVZhbCA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnKSA6IHVuZGVmaW5lZCkgfHwgJ29uJztcbiAgaWYgKGluaVZhbCA9PT0gJ29uJykge1xuICAgIHZhciBhc1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcik7XG4gICAgdmFyIGFzRnVuYyA9IF9nZXRGdW5jTmFtZShtaXhlZFZhci5jb25zdHJ1Y3Rvcik7XG5cbiAgICBpZiAoYXNTdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmIGFzRnVuYyA9PT0gJ09iamVjdCcpIHtcbiAgICAgIC8vIE1vc3QgbGlrZWx5IGEgbGl0ZXJhbCBhbmQgaW50ZW5kZWQgYXMgYXNzb2MuIGFycmF5XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfYXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfYm9vbChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2Jvb2wvXG4gIC8vIG9yaWdpbmFsIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBDb3Vyc2VzV2ViIChodHRwOi8vd3d3LmNvdXJzZXN3ZWIubmV0LylcbiAgLy8gICBleGFtcGxlIDE6IGlzX2Jvb2woZmFsc2UpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19ib29sKDApXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiBtaXhlZFZhciA9PT0gdHJ1ZSB8fCBtaXhlZFZhciA9PT0gZmFsc2U7IC8vIEZhc3RlciAoaW4gRkYpIHRoYW4gdHlwZSBjaGVja2luZ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2Jvb2wuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfY2FsbGFibGUobWl4ZWRWYXIsIHN5bnRheE9ubHksIGNhbGxhYmxlTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2NhbGxhYmxlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IEZyYW7Dp29pc1xuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSB2YXJpYWJsZSBjYWxsYWJsZU5hbWUgY2Fubm90IHdvcmsgYXMgYSBzdHJpbmcgdmFyaWFibGUgcGFzc2VkIGJ5XG4gIC8vICAgICAgbm90ZSAxOiByZWZlcmVuY2UgYXMgaW4gUEhQIChzaW5jZSBKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZ1xuICAvLyAgICAgIG5vdGUgMTogc3RyaW5ncyBieSByZWZlcmVuY2UpLCBidXQgaW5zdGVhZCB3aWxsIHRha2UgdGhlIG5hbWUgb2ZcbiAgLy8gICAgICBub3RlIDE6IGEgZ2xvYmFsIHZhcmlhYmxlIGFuZCBzZXQgdGhhdCBpbnN0ZWFkLlxuICAvLyAgICAgIG5vdGUgMTogV2hlbiB1c2VkIG9uIGFuIG9iamVjdCwgZGVwZW5kcyBvbiBhIGNvbnN0cnVjdG9yIHByb3BlcnR5XG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyBrZXB0IG9uIHRoZSBvYmplY3QgcHJvdG90eXBlXG4gIC8vICAgICAgbm90ZSAyOiBEZXBlbmRpbmcgb24gdGhlIGBjYWxsYWJsZU5hbWVgIHRoYXQgaXMgcGFzc2VkLCB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgZXZhbC5cbiAgLy8gICAgICBub3RlIDI6IFRoZSBldmFsIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMjogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMjogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogaXNfY2FsbGFibGUoJ2lzX2NhbGxhYmxlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2NhbGxhYmxlKCdib2d1c0Z1bmN0aW9uJywgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWUgLy8gZ2l2ZXMgdHJ1ZSBiZWNhdXNlIGRvZXMgbm90IGRvIHN0cmljdCBjaGVja2luZ1xuICAvLyAgIGV4YW1wbGUgMzogZnVuY3Rpb24gU29tZUNsYXNzICgpIHt9XG4gIC8vICAgZXhhbXBsZSAzOiBTb21lQ2xhc3MucHJvdG90eXBlLnNvbWVNZXRob2QgPSBmdW5jdGlvbiAoKXt9XG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgdGVzdE9iaiA9IG5ldyBTb21lQ2xhc3MoKVxuICAvLyAgIGV4YW1wbGUgMzogaXNfY2FsbGFibGUoW3Rlc3RPYmosICdzb21lTWV0aG9kJ10sIHRydWUsICdteVZhcicpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9IG15VmFyXG4gIC8vICAgcmV0dXJucyAzOiAnU29tZUNsYXNzOjpzb21lTWV0aG9kJ1xuICAvLyAgIGV4YW1wbGUgNDogaXNfY2FsbGFibGUoZnVuY3Rpb24gKCkge30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgbWV0aG9kID0gJyc7XG4gIHZhciB2YWxpZEZ1bmN0aW9uTmFtZSA9IGZhbHNlO1xuXG4gIHZhciBnZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIGdldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gJGdsb2JhbDtcbiAgICBtZXRob2QgPSBtaXhlZFZhcjtcbiAgICBuYW1lID0gbWl4ZWRWYXI7XG4gICAgdmFsaWRGdW5jdGlvbk5hbWUgPSAhIW5hbWUubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAyICYmIF90eXBlb2YobWl4ZWRWYXJbMF0pID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbWl4ZWRWYXJbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gbWl4ZWRWYXJbMF07XG4gICAgbWV0aG9kID0gbWl4ZWRWYXJbMV07XG4gICAgbmFtZSA9IChvYmouY29uc3RydWN0b3IgJiYgZ2V0RnVuY05hbWUob2JqLmNvbnN0cnVjdG9yKSkgKyAnOjonICsgbWV0aG9kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzeW50YXhPbmx5IHx8IHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdmFsaWRGdW5jdGlvbk5hbWUgYXZvaWRzIGV4cGxvaXRzXG4gIGlmICh2YWxpZEZ1bmN0aW9uTmFtZSAmJiB0eXBlb2YgZXZhbChtZXRob2QpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfY2FsbGFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfZmxvYXQobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19mbG9hdC9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICAgICBub3RlIDE6IDEuMCBpcyBzaW1wbGlmaWVkIHRvIDEgYmVmb3JlIGl0IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgZnVuY3Rpb24sIHRoaXMgbWFrZXNcbiAgLy8gICAgICBub3RlIDE6IGl0IGRpZmZlcmVudCBmcm9tIHRoZSBQSFAgaW1wbGVtZW50YXRpb24uIFdlIGNhbid0IGZpeCB0aGlzIHVuZm9ydHVuYXRlbHkuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19mbG9hdCgxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgcmV0dXJuICttaXhlZFZhciA9PT0gbWl4ZWRWYXIgJiYgKCFpc0Zpbml0ZShtaXhlZFZhcikgfHwgISEobWl4ZWRWYXIgJSAxKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfZmxvYXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfaW50KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfaW50L1xuICAvLyBvcmlnaW5hbCBieTogQWxleFxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFdlYkRldkhvYm8gKGh0dHA6Ly93ZWJkZXZob2JvLmJsb2dzcG90LmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgcmV2aXNlZCBieTogTWF0dCBCcmFkbGV5XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIG5vdGUgMTogMS4wIGlzIHNpbXBsaWZpZWQgdG8gMSBiZWZvcmUgaXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBmdW5jdGlvbiwgdGhpcyBtYWtlc1xuICAvLyAgICAgIG5vdGUgMTogaXQgZGlmZmVyZW50IGZyb20gdGhlIFBIUCBpbXBsZW1lbnRhdGlvbi4gV2UgY2FuJ3QgZml4IHRoaXMgdW5mb3J0dW5hdGVseS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2ludCgyMylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2ludCgnMjMnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX2ludCgyMy41KVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2ludCh0cnVlKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09ICttaXhlZFZhciAmJiBpc0Zpbml0ZShtaXhlZFZhcikgJiYgIShtaXhlZFZhciAlIDEpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2ludC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19udWxsKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfbnVsbC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19udWxsKCcyMycpXG4gIC8vICAgcmV0dXJucyAxOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfbnVsbChudWxsKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHJldHVybiBtaXhlZFZhciA9PT0gbnVsbDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19udWxsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19udW1lcmljKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfbnVtZXJpYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBEYXZpZFxuICAvLyBpbXByb3ZlZCBieTogdGFpdGhcbiAgLy8gYnVnZml4ZWQgYnk6IFRpbSBkZSBLb25pbmdcbiAgLy8gYnVnZml4ZWQgYnk6IFdlYkRldkhvYm8gKGh0dHA6Ly93ZWJkZXZob2JvLmJsb2dzcG90LmNvbS8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogRGVuaXMgQ2hlbnUgKGh0dHA6Ly9zaG5vdWxsZS5uZXQpXG4gIC8vICAgZXhhbXBsZSAxOiBpc19udW1lcmljKDE4Ni4zMSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX251bWVyaWMoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX251bWVyaWMoJyArMTg2LjMxZTInKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaXNfbnVtZXJpYygnJylcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA1OiBpc19udW1lcmljKFtdKVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDY6IGlzX251bWVyaWMoJzEgJylcbiAgLy8gICByZXR1cm5zIDY6IGZhbHNlXG5cbiAgdmFyIHdoaXRlc3BhY2UgPSBbJyAnLCAnXFxuJywgJ1xccicsICdcXHQnLCAnXFxmJywgJ1xceDBiJywgJ1xceGEwJywgJ1xcdTIwMDAnLCAnXFx1MjAwMScsICdcXHUyMDAyJywgJ1xcdTIwMDMnLCAnXFx1MjAwNCcsICdcXHUyMDA1JywgJ1xcdTIwMDYnLCAnXFx1MjAwNycsICdcXHUyMDA4JywgJ1xcdTIwMDknLCAnXFx1MjAwQScsICdcXHUyMDBCJywgJ1xcdTIwMjgnLCAnXFx1MjAyOScsICdcXHUzMDAwJ10uam9pbignJyk7XG5cbiAgLy8gQHRvZG86IEJyZWFrIHRoaXMgdXAgdXNpbmcgbWFueSBzaW5nbGUgY29uZGl0aW9ucyB3aXRoIGVhcmx5IHJldHVybnNcbiAgcmV0dXJuICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdudW1iZXInIHx8IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZycgJiYgd2hpdGVzcGFjZS5pbmRleE9mKG1peGVkVmFyLnNsaWNlKC0xKSkgPT09IC0xKSAmJiBtaXhlZFZhciAhPT0gJycgJiYgIWlzTmFOKG1peGVkVmFyKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19udW1lcmljLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX29iamVjdChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX29iamVjdC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICBleGFtcGxlIDE6IGlzX29iamVjdCgnMjMnKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzX29iamVjdCh7Zm9vOiAnYmFyJ30pXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19vYmplY3QobnVsbClcbiAgLy8gICByZXR1cm5zIDM6IGZhbHNlXG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG1peGVkVmFyICE9PSBudWxsICYmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgPT09ICdvYmplY3QnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX29iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX3NjYWxhcihtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX3NjYWxhci9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gICBleGFtcGxlIDE6IGlzX3NjYWxhcigxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19zY2FsYXIoezA6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiAoL2Jvb2xlYW58bnVtYmVyfHN0cmluZy8udGVzdCh0eXBlb2YgbWl4ZWRWYXIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihtaXhlZFZhcikpXG4gICk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfc2NhbGFyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19zdHJpbmcobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19zdHJpbmcvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfc3RyaW5nKCcyMycpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19zdHJpbmcoMjMuNSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgcmV0dXJuIHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfc3RyaW5nLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc3NldCgpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc3NldC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBGcmVteUNvbXBhbnlcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgZXhhbXBsZSAxOiBpc3NldCggdW5kZWZpbmVkLCB0cnVlKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzc2V0KCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcgKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBhID0gYXJndW1lbnRzO1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciB1bmRlZjtcblxuICBpZiAobCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgaXNzZXQnKTtcbiAgfVxuXG4gIHdoaWxlIChpICE9PSBsKSB7XG4gICAgaWYgKGFbaV0gPT09IHVuZGVmIHx8IGFbaV0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNzZXQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHV0ZjhfZW5jb2RlKGFyZ1N0cmluZykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3V0ZjhfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc293YmVycnlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IFl2ZXMgU3VjYWV0XG4gIC8vIGltcHJvdmVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFVscmljaFxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyAgIGV4YW1wbGUgMTogdXRmOF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgaWYgKGFyZ1N0cmluZyA9PT0gbnVsbCB8fCB0eXBlb2YgYXJnU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIC5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpO1xuICB2YXIgc3RyaW5nID0gYXJnU3RyaW5nICsgJyc7XG4gIHZhciB1dGZ0ZXh0ID0gJyc7XG4gIHZhciBzdGFydDtcbiAgdmFyIGVuZDtcbiAgdmFyIHN0cmluZ2wgPSAwO1xuXG4gIHN0YXJ0ID0gZW5kID0gMDtcbiAgc3RyaW5nbCA9IHN0cmluZy5sZW5ndGg7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nbDsgbisrKSB7XG4gICAgdmFyIGMxID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG4gICAgdmFyIGVuYyA9IG51bGw7XG5cbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIGVuZCsrO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAxMjcgJiYgYzEgPCAyMDQ4KSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDYgfCAxOTIsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDEyIHwgMjI0LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdXJyb2dhdGUgcGFpcnNcbiAgICAgIGlmICgoYzEgJiAweEZDMDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCB0cmFpbCBzdXJyb2dhdGUgYXQgJyArIG4pO1xuICAgICAgfVxuICAgICAgdmFyIGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoKytuKTtcbiAgICAgIGlmICgoYzIgJiAweEZDMDApICE9PSAweERDMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCBsZWFkIHN1cnJvZ2F0ZSBhdCAnICsgKG4gLSAxKSk7XG4gICAgICB9XG4gICAgICBjMSA9ICgoYzEgJiAweDNGRikgPDwgMTApICsgKGMyICYgMHgzRkYpICsgMHgxMDAwMDtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTggfCAyNDAsIGMxID4+IDEyICYgNjMgfCAxMjgsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfVxuICAgIGlmIChlbmMgIT09IG51bGwpIHtcbiAgICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICAgIHV0ZnRleHQgKz0gZW5jO1xuICAgICAgc3RhcnQgPSBlbmQgPSBuICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgc3RyaW5nbCk7XG4gIH1cblxuICByZXR1cm4gdXRmdGV4dDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4X2VuY29kZS5qcy5tYXAiLCIvL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfY291bnRfdmFsdWVzJyBdICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2NvdW50X3ZhbHVlcycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbGwnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWxsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmlsbF9rZXlzJyBdICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZpbGxfa2V5cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbHRlcicgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWx0ZXInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9mbGlwJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmxpcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2tleV9leGlzdHMnIF0gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9rZXlfZXhpc3RzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfa2V5cycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2tleXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9tYXAnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWFwJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfcmV2ZXJzZScgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3JldmVyc2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9zZWFyY2gnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfc2VhcmNoJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfc3VtJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3N1bScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3VuaXF1ZScgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV91bmlxdWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdjdXJyZW50JyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvY3VycmVudCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2VuZCcgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9lbmQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdrZXknIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkva2V5JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbmV4dCcgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L25leHQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwb3MnIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcG9zJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJldicgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3ByZXYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyYW5nZScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcmFuZ2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyZXNldCcgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcmVzZXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzaXplb2YnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvc2l6ZW9mJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbmwyYnInIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbmwyYnInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdudW1iZXJfZm9ybWF0JyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9udW1iZXJfZm9ybWF0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJpbnRmJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3ByaW50ZicgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cl9yZXBlYXQnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl9yZXBlYXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfc3BsaXQnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfc3BsaXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfd29yZF9jb3VudCcgXSAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfd29yZF9jb3VudCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cmlwX3RhZ3MnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cmlwX3RhZ3MnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJpcHNsYXNoZXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJpcHNsYXNoZXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJzdHInIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJzdHInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJ0cicgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0cicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ZwcmludGYnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3ZwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2c3ByaW50ZicgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy92c3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3dvcmR3cmFwJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3dvcmR3cmFwJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJpbnRfcicgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9wcmludF9yJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc2VyaWFsaXplJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9zZXJpYWxpemUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1bnNlcmlhbGl6ZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3Vuc2VyaWFsaXplJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndmFyX2V4cG9ydCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci92YXJfZXhwb3J0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndmFyX2R1bXAnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci92YXJfZHVtcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ZlcnNpb25fY29tcGFyZScgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9pbmZvL3ZlcnNpb25fY29tcGFyZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2x0cmltJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL2x0cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncnRyaW0nIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd0cmltJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy90cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfd2FsaycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3dhbGsnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV93YWxrX3JlY3Vyc2l2ZScgXSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfd2Fsa19yZWN1cnNpdmUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkYXRlX3BhcnNlJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZGF0ZV9wYXJzZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2dldGRhdGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9nZXRkYXRlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYmFzZW5hbWUnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vYmFzZW5hbWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkaXJuYW1lJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZmlsZXN5c3RlbS9kaXJuYW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncGF0aGluZm8nIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vcGF0aGluZm8nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkYXRlJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZGF0ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cnRvdGltZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9zdHJ0b3RpbWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdodHRwX2J1aWxkX3F1ZXJ5JyBdICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2h0dHBfYnVpbGRfcXVlcnknICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19kb3VibGUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2RvdWJsZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2ludGVnZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfaW50ZWdlcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2xvbmcnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbG9uZycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX3JlYWwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfcmVhbCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX3VuaWNvZGUnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfdW5pY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2J1ZmZlcicgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfYnVmZmVyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZG91YmxldmFsJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9kb3VibGV2YWwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdnZXR0eXBlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2dldHR5cGUnICk7XHJcblxyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X21lcmdlJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV9tZXJnZV9yZWN1cnNpdmUnIF0gPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWVyZ2VfcmVjdXJzaXZlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3ZhbHVlcycgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV92YWx1ZXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY291bnQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2NvdW50JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2luX2FycmF5JyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9pbl9hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdtaWNyb3RpbWUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvbWljcm90aW1lJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RpbWUnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS90aW1lJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NhbGxfdXNlcl9mdW5jJyBdICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjYWxsX3VzZXJfZnVuY19hcnJheScgXSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZnVuY3Rpb25fZXhpc3RzJyBdICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VuaXFpZCcgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9taXNjL3VuaXFpZCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdleHBsb2RlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9leHBsb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2ltcGxvZGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL2ltcGxvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnbWQ1JyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX3N0cicgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJfcmVwbGFjZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfcmVwbGFjZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJ0b2xvd2VyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b2xvd2VyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3N0cnRvdXBwZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnRvdXBwZXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYmFzZTY0X2RlY29kZScgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9iYXNlNjRfZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jhc2U2NF9lbmNvZGUnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2VuY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX3VybCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmF3dXJsZGVjb2RlJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxkZWNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyYXd1cmxlbmNvZGUnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3Jhd3VybGVuY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VybGRlY29kZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndXJsZW5jb2RlJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC91cmxlbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYm9vbHZhbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2VtcHR5JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZW1wdHknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZmxvYXR2YWwnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbnR2YWwnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2ludHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19hcnJheScgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2Jvb2wnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfYm9vbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19jYWxsYWJsZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2Zsb2F0JyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfZmxvYXQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfaW50JyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19pbnQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfbnVsbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19udWxsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX251bWVyaWMnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19vYmplY3QnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zY2FsYXInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zdHJpbmcnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc3NldCcgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzc2V0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX2FyZ3MnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdqcy1wYXJzZS1hcmdzJyApO1xyXG5cclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX2NzdicgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2NzdicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV90b19odG1sX2F0dHInIF0gPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sX2F0dHInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9faHRtbCcgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV90b193aW5kb3cnIF0gICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b193aW5kb3cnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnd3JhcF9hcnJheScgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvd3JhcF9hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdva2cnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9va2cnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnb2tzJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvb2tzJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BsYWluX29iamVjdCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BsYWluX29iamVjdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19vYmplY3RfbGlrZScgXSAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19vYmplY3RfbGlrZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19hcnJheV9saWtlJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19vYmplY3RfbGlrZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjbG9uZV9vYmplY3QnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jbG9uZV9vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYWZ0ZXJfZGF0ZScgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfYWZ0ZXJfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19iZWZvcmVfZGF0ZScgXSAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19iZWZvcmVfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zYW1lX2RhdGUnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19zYW1lX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZm9ybWF0X2R1cmF0aW9uJyBdICAgID0gcmVxdWlyZSggJy4vcGFydHMvZm9ybWF0X2R1cmF0aW9uJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RpZmZfZGF5cycgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RpZmZfZGF5cycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc191bmRlZmluZWQnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc191bmRlZmluZWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfdGFiX2ZvY3VzZWQnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdGFiX2ZvY3VzZWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc2Nyb2xsX3RvX3RvcCcgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3RvX3RvcCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjb3B5X3RvX2NsaXAnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3B5X3RvX2NsaXAnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc2Nyb2xsX3BvcycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3BvcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc193aW5kb3dfYXJnJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc193aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3dpbmRvd19hcmcnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZGV2aWNlX3R5cGUnIF0gICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGV2aWNlX3R5cGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZGVidWcnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdGltZV90YWtlbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0aW1lX3Rha2VuJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BpcGVfbG9nJyBdICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BpcGVfbG9nJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NvdW50ZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2NvdW50ZXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndG9fanF1ZXJ5JyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdG9fanF1ZXJ5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RvX2pzX2Z1bmMnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pzX2Z1bmMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncmFuZF9tZDUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcmFuZF9tZDUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndXJsX3BhcmFtcycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdXJsX3BhcmFtcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdxdWVyeV9zdHJpbmcnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9xdWVyeV9zdHJpbmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfanF1ZXJ5JyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfanF1ZXJ5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Nzc191bml0cycgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2Nzc191bml0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2pzb25fdG9fY3N2JyBdICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2pzb25fdG9fY3N2JyApOyIsIi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gYXJyYXkgZWxlbWVudHMgaW50byA8bGk+IHRhZ3MgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgbGlzdCBvZiB0aGUgZ2l2ZW4gaWQuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKSwgYW5kIGFuIGFub255bW91cyBpbm5lciBjbG9zdXJlIHRvIGNyZWF0ZSBhIGxpc3Qgb2YgaHRtbCB0YWdzLlxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBsaXN0SURcclxuICogQHBhcmFtIHRhZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBhcnIsIGxpc3RJRCwgdGFnID0gJ2xpJyApID0+ICggZWwgPT4gKCAoIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbGlzdElEICkgKSwgKCBlbC5pbm5lckhUTUwgKz0gYXJyLm1hcCggaXRlbSA9PiBgPCR7dGFnfT4ke2l0ZW19PC8ke3RhZ30+YCApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbiggJycgKSApICkgKSgpOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcbmltcG9ydCBpc19vYmplY3RfbGlrZSBmcm9tICcuL2lzX29iamVjdF9saWtlJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IHtcclxuXHRsZXQgcmV0dXJuX2h0bWwgPSAnJztcclxuXHRmb3IoIGxldCBJIGluICRkYXRhICkge1xyXG5cdFx0aWYoIGlzX29iamVjdCggJGRhdGFbIEkgXSApICkge1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIic7XHJcblx0XHRcdGZvciggbGV0IEsgaW4gJGRhdGFbIEkgXSApIHtcclxuXHRcdFx0XHRsZXQgJHZhbHVlID0gKCBpc19vYmplY3RfbGlrZSggJGRhdGFbIEkgXVsgSyBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdWyBLIF0gKSA6ICRkYXRhWyBJIF1bIEsgXTtcclxuXHRcdFx0XHRyZXR1cm5faHRtbCArPSAkdmFsdWUgKyAnICc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJ1wiJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCAkdmFsdWUgPSAoIGlzX29iamVjdF9saWtlKCAkZGF0YVsgSSBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdICkgOiAkZGF0YVsgSSBdO1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIicgKyAkdmFsdWUgKyAnXCIgJztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJldHVybl9odG1sO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gKCAkYXJyYXkgKSA9PiB7XHJcblx0Zm9yKCBsZXQgJGtleSBpbiAkYXJyYXkgKSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICRhcnJheVsgJGtleSBdO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBBIENsb25lIG9mIGdpdmVuIHZhbHVlLlxyXG4gKiBAcGFyYW0gJGRhdGFcclxuICogQHJldHVybnMge2FueX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCAkZGF0YSApICk7IiwiLyoqXHJcbiAqIENvcHkgYSBzdHJpbmcgdG8gdGhlIGNsaXBib2FyZC4gT25seSB3b3JrcyBhcyBhIHJlc3VsdCBvZiB1c2VyIGFjdGlvbiAoaS5lLiBpbnNpZGUgYSBjbGljayBldmVudCBsaXN0ZW5lcikuXHJcbiAqIENyZWF0ZSBhIG5ldyA8dGV4dGFyZWE+IGVsZW1lbnQsIGZpbGwgaXQgd2l0aCB0aGUgc3VwcGxpZWQgZGF0YSBhbmQgYWRkIGl0IHRvIHRoZSBIVE1MIGRvY3VtZW50LlxyXG4gKiBVc2UgU2VsZWN0aW9uLmdldFJhbmdlQXQoKXRvIHN0b3JlIHRoZSBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogVXNlIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JykgdG8gY29weSB0byB0aGUgY2xpcGJvYXJkLlxyXG4gKiBSZW1vdmUgdGhlIDx0ZXh0YXJlYT4gZWxlbWVudCBmcm9tIHRoZSBIVE1MIGRvY3VtZW50LiBGaW5hbGx5LCB1c2UgU2VsZWN0aW9uKCkuYWRkUmFuZ2UoKSB0byByZWNvdmVyIHRoZSBvcmlnaW5hbCBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogQHBhcmFtIHN0clxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xyXG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RleHRhcmVhJyApO1xyXG5cdGVsLnZhbHVlID0gc3RyO1xyXG5cdGVsLnNldEF0dHJpYnV0ZSggJ3JlYWRvbmx5JywgJycgKTtcclxuXHRlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0ZWwuc3R5bGUubGVmdCAgICAgPSAnLTk5OTlweCc7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZWwgKTtcclxuXHRjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJhbmdlQ291bnQgPiAwID8gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCggMCApIDogZmFsc2U7XHJcblx0ZWwuc2VsZWN0KCk7XHJcblx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoICdjb3B5JyApO1xyXG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoIGVsICk7XHJcblx0aWYoIHNlbGVjdGVkICkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZSggc2VsZWN0ZWQgKTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZXMgYSBjb3VudGVyIHdpdGggdGhlIHNwZWNpZmllZCByYW5nZSwgc3RlcCBhbmQgZHVyYXRpb24gZm9yIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3IuXHJcbiAqIENoZWNrIGlmIHN0ZXAgaGFzIHRoZSBwcm9wZXIgc2lnbiBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5LlxyXG4gKiBVc2Ugc2V0SW50ZXJ2YWwoKSBpbiBjb21iaW5hdGlvbiB3aXRoIE1hdGguYWJzKCkgYW5kIE1hdGguZmxvb3IoKSB0byBjYWxjdWxhdGUgdGhlIHRpbWUgYmV0d2VlbiBlYWNoIG5ldyB0ZXh0IGRyYXcuXHJcbiAqIFVzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCkuaW5uZXJIVE1MIHRvIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQuXHJcbiAqIE9taXQgdGhlIGZvdXJ0aCBwYXJhbWV0ZXIsIHN0ZXAsIHRvIHVzZSBhIGRlZmF1bHQgc3RlcCBvZiAxLiBPbWl0IHRoZSBmaWZ0aCBwYXJhbWV0ZXIsIGR1cmF0aW9uLCB0byB1c2UgYSBkZWZhdWx0IGR1cmF0aW9uIG9mIDIwMDBtcy5cclxuICogQHBhcmFtIHNlbGVjdG9yXHJcbiAqIEBwYXJhbSBzdGFydFxyXG4gKiBAcGFyYW0gZW5kXHJcbiAqIEBwYXJhbSBzdGVwXHJcbiAqIEBwYXJhbSBkdXJhdGlvblxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIHNlbGVjdG9yLCBzdGFydCwgZW5kLCBzdGVwID0gMSwgZHVyYXRpb24gPSAyMDAwICkgPT4ge1xyXG5cdGxldCBjdXJyZW50ID0gc3RhcnQsXHJcblx0XHRfc3RlcCAgID0gKCBlbmQgLSBzdGFydCApICogc3RlcCA8IDAgPyAtc3RlcCA6IHN0ZXAsXHJcblx0XHR0aW1lciAgID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHRcdFx0Y3VycmVudCArPSBfc3RlcDtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBjdXJyZW50O1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGVuZDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgY2xlYXJJbnRlcnZhbCggdGltZXIgKTtcclxuXHRcdH0sIE1hdGguYWJzKCBNYXRoLmZsb29yKCBkdXJhdGlvbiAvICggZW5kIC0gc3RhcnQgKSApICkgKTtcclxuXHRyZXR1cm4gdGltZXI7XHJcbn07IiwiY29uc3QgaXNOdW1iZXJpYyA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYycgKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IHtcclxuXHR2YXIgcyA9IHZhbDtcclxuXHRpZiggaXNOdW1iZXJpYyggdmFsICkgKSB7XHJcblx0XHRyZXR1cm4gdmFsICsgJ3B4JztcclxuXHR9IGVsc2UgaWYoIHZhbC5pbmRleE9mKCAncHgnICkgPiAtMSB8fCB2YWwuaW5kZXhPZiggJyUnICkgPiAtMSB8fCB2YWwuaW5kZXhPZiggJ2VtJyApID4gLTEgKSB7XHJcblx0XHRsZXQgY2hlY2tQeCAgPSBzLnJlcGxhY2UoICdweCcsICcnICk7XHJcblx0XHRsZXQgY2hlY2tQY3QgPSBzLnJlcGxhY2UoICclJywgJycgKTtcclxuXHRcdGxldCBjaGVja0VtICA9IHMucmVwbGFjZSggJ2VtJywgJycgKTtcclxuXHRcdGlmKCBpc051bWJlcmljKCBjaGVja1B4ICkgfHwgaXNOdW1iZXJpYyggY2hlY2tQY3QgKSB8fCBpc051bWJlcmljKCBjaGVja0VtICkgKSB7XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJzBweCc7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiAnMHB4JztcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIERldGVjdHMgd2V0aGVyIHRoZSB3ZWJzaXRlIGlzIGJlaW5nIG9wZW5lZCBpbiBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogVXNlIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHRlc3QgdGhlIG5hdmlnYXRvci51c2VyQWdlbnQgcHJvcGVydHkgdG8gZmlndXJlIG91dCBpZiB0aGUgZGV2aWNlIGlzIGEgbW9iaWxlIGRldmljZSBvciBhIGRlc2t0b3AvbGFwdG9wLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSA/ICdNb2JpbGUnIDogJ0Rlc2t0b3AnOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIChpbiBkYXlzKSBiZXR3ZWVuIHR3byBkYXRlcy5cclxuICogQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIChpbiBkYXlzKSBiZXR3ZWVuIHR3byBEYXRlIG9iamVjdHMuXHJcbiAqIEBwYXJhbSBkYXRlSW5pdGlhbFxyXG4gKiBAcGFyYW0gZGF0ZUZpbmFsXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUluaXRpYWwsIGRhdGVGaW5hbCApID0+ICggZGF0ZUZpbmFsIC0gZGF0ZUluaXRpYWwgKSAvICggMTAwMCAqIDM2MDAgKiAyNCApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBodW1hbiByZWFkYWJsZSBmb3JtYXQgb2YgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAqIERpdmlkZSBtcyB3aXRoIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMgdG8gb2J0YWluIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMgZm9yIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgYW5kIG1pbGxpc2Vjb25kLlxyXG4gKiBVc2UgT2JqZWN0LmVudHJpZXMoKSB3aXRoIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoKSB0byBrZWVwIG9ubHkgbm9uLXplcm8gdmFsdWVzLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpIHRvIGNyZWF0ZSB0aGUgc3RyaW5nIGZvciBlYWNoIHZhbHVlLCBwbHVyYWxpemluZyBhcHByb3ByaWF0ZWx5LlxyXG4gKiBVc2UgU3RyaW5nLnByb3RvdHlwZS5qb2luKCcsICcpIHRvIGNvbWJpbmUgdGhlIHZhbHVlcyBpbnRvIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gbXNcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gbXMgPT4ge1xyXG5cdGlmKCBtcyA8IDAgKSBtcyA9IC1tcztcclxuXHRjb25zdCB0aW1lID0ge1xyXG5cdFx0ZGF5OiBNYXRoLmZsb29yKCBtcyAvIDg2NDAwMDAwICksXHJcblx0XHRob3VyOiBNYXRoLmZsb29yKCBtcyAvIDM2MDAwMDAgKSAlIDI0LFxyXG5cdFx0bWludXRlOiBNYXRoLmZsb29yKCBtcyAvIDYwMDAwICkgJSA2MCxcclxuXHRcdHNlY29uZDogTWF0aC5mbG9vciggbXMgLyAxMDAwICkgJSA2MCxcclxuXHRcdG1pbGxpc2Vjb25kOiBNYXRoLmZsb29yKCBtcyApICUgMTAwMFxyXG5cdH07XHJcblx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCB0aW1lIClcclxuXHRcdFx0XHQgLmZpbHRlciggdmFsID0+IHZhbFsgMSBdICE9PSAwIClcclxuXHRcdFx0XHQgLm1hcCggKCBbIGtleSwgdmFsIF0gKSA9PiBgJHt2YWx9ICR7a2V5fSR7dmFsICE9PSAxID8gJ3MnIDogJyd9YCApXHJcblx0XHRcdFx0IC5qb2luKCAnLCAnICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBhZnRlciBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgZ3JlYXRlciB0aGFuIG9wZXJhdG9yICg+KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBhZnRlciB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQSA+IGRhdGVCOyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYmVmb3JlIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIHRoZSBsZXNzIHRoYW4gb3BlcmF0b3IgKDwpIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGNvbWVzIGJlZm9yZSB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQSA8IGRhdGVCOyIsImltcG9ydCBpc191bmRlZmluZWQgZnJvbSAnLi9pc191bmRlZmluZWQnO1xyXG5pbXBvcnQgaXNfc3RyaW5nIGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19zdHJpbmcnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGdpdmVuIE9iamVjdCAvIFZhbHVlIGlzIGEgalF1ZXJ5IEluc3RhbmNlLlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+ICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGVsZW0gKSAmJiBmYWxzZSA9PT0gaXNfc3RyaW5nKCAkZWxlbSApICYmICRlbGVtLmpRdWVyeSApOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcbmltcG9ydCBpc19hcnJheSBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfYXJyYXknO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGlzIG9iamVjdC1saWtlLlxyXG4gKiBDaGVjayBpZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IG51bGwgYW5kIGl0cyB0eXBlb2YgaXMgZXF1YWwgdG8gJ29iamVjdCcuXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggdmFsICkgPT4ge1xyXG5cdHJldHVybiAoIGlzX29iamVjdCggdmFsICkgfHwgaXNfYXJyYXkoIHZhbCApICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyB0aGUgc2FtZSBhcyBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpIGFuZCBzdHJpY3QgZXF1YWxpdHkgY2hlY2tpbmcgKD09PSkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgaXMgdGhlIHNhbWUgYXMgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEudG9JU09TdHJpbmcoKSA9PT0gZGF0ZUIudG9JU09TdHJpbmcoKTsiLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyBmb2N1c2VkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqIFVzZSB0aGUgRG9jdW1lbnQuaGlkZGVuIHByb3BlcnR5LCBpbnRyb2R1Y2VkIGJ5IHRoZSBQYWdlIFZpc2liaWxpdHkgQVBJIHRvIGNoZWNrIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyB2aXNpYmxlIG9yIGhpZGRlbi5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+ICFkb2N1bWVudC5oaWRkZW47IiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKiBVc2UgdGhlIHN0cmljdCBlcXVhbGl0eSBvcGVyYXRvciB0byBjaGVjayBpZiB0aGUgdmFsdWUgYW5kIG9mIHZhbCBhcmUgZXF1YWwgdG8gdW5kZWZpbmVkLlxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4gdmFsID09PSB1bmRlZmluZWQ7IiwiaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICcuL2lzX3VuZGVmaW5lZCc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHdpbmRvdyBoYXMgZ2l2ZW4gdmFyaWFibGUuXHJcbiAqIEBwYXJhbSAka2V5XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXkgKSA9PiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJGtleSBdICkgKTsiLCJsZXQgJE9LUyAgICAgICA9ICggcHJvcGVydGllcywgb2JqLCBkZWZhdWx0VmFsdWUsIGRlbGltaXRlciA9ICcvJyApID0+IHtcclxuXHRwcm9wZXJ0aWVzICAgPSAoIHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnc3RyaW5nJyApID8gcHJvcGVydGllcy5zcGxpdCggZGVsaW1pdGVyICkgOiBbIHByb3BlcnRpZXMgXTtcclxuXHRsZXQgcHJvcGVydHkgPSBwcm9wZXJ0aWVzLnNoaWZ0KCk7XHJcblxyXG5cdGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblx0fVxyXG5cclxuXHRpZiggcHJvcGVydGllcy5sZW5ndGggKSB7XHJcblx0XHRwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5qb2luKCBkZWxpbWl0ZXIgKTtcclxuXHRcdHJldHVybiAkT0tTKCBwcm9wZXJ0aWVzLCBvYmpbIHByb3BlcnR5IF0sIGRlZmF1bHRWYWx1ZSwgZGVsaW1pdGVyICk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBvYmpbIHByb3BlcnR5IF07XHJcblx0fVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9ICRPS1M7IiwibGV0ICRPS1MgICAgICAgPSAoIHByb3BlcnRpZXMsIHZhbHVlLCBvYmosIGRlbGltaXRlciA9ICcvJyApID0+IHtcclxuXHRwcm9wZXJ0aWVzICAgPSAoIHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnc3RyaW5nJyApID8gcHJvcGVydGllcy5zcGxpdCggZGVsaW1pdGVyICkgOiBbIHByb3BlcnRpZXMgXTtcclxuXHRsZXQgcHJvcGVydHkgPSBwcm9wZXJ0aWVzLnNoaWZ0KCk7XHJcblxyXG5cdGlmKCBwcm9wZXJ0aWVzLmxlbmd0aCApIHtcclxuXHRcdHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmpvaW4oIGRlbGltaXRlciApO1xyXG5cclxuXHRcdGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHR9IGVsc2UgaWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gIT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oICdPYmplY3QgcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCIgYWxyZWFkeSBoYXMgbm9uIG9iamVjdCB2YWx1ZTonLCBvYmpbIHByb3BlcnR5IF0sICdJdCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYW4gZW1wdHkgb2JqZWN0JyApO1xyXG5cdFx0XHRvYmpbIHByb3BlcnR5IF0gPSB7fTtcclxuXHRcdH0gZWxzZSBpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9ialsgcHJvcGVydHkgXS5sZW5ndGggIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRpZiggKCAvXlswLTldKyQvICkudGVzdCggcHJvcGVydHkgKSApIHtcclxuXHRcdFx0XHRwcm9wZXJ0eSA9IHBhcnNlSW50KCBwcm9wZXJ0eSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RyeSB0byBzZXQgbm9uIG51bWVyaWMgcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCIgdG8gYXJyYXk6Jywgb2JqWyBwcm9wZXJ0eSBdLCAnVGhlIGFycmF5IHdpbGwgYmUgYmUgcmVwbGFjZWQgd2l0aCBhbiBlbXB0eSBvYmplY3QnICk7XHJcblx0XHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCRPS1MoIHByb3BlcnRpZXMsIHZhbHVlLCBvYmpbIHByb3BlcnR5IF0sIGRlbGltaXRlciApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRvYmpbIHByb3BlcnR5IF0gPSB2YWx1ZTtcclxuXHR9XHJcblx0cmV0dXJuIG9iajtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSAkT0tTOyIsIi8qKlxyXG4gKiBMb2dzIGEgdmFsdWUgYW5kIHJldHVybnMgaXQuXHJcbiAqIFVzZSBjb25zb2xlLmxvZyB0byBsb2cgdGhlIHN1cHBsaWVkIHZhbHVlLCBjb21iaW5lZCB3aXRoIHRoZSB8fCBvcGVyYXRvciB0byByZXR1cm4gaXQuXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBkYXRhID0+IGNvbnNvbGUubG9nKCBkYXRhICkgfHwgZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9ICgpID0+ICggdHlwZW9mIE9iamVjdFsgJ2NyZWF0ZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/IE9iamVjdC5jcmVhdGUoIG51bGwgKSA6IHt9OyIsIi8qKlxyXG4gKiBSZXR1cm4gdmFsdWUgZnJvbSBRdWVyeVN0cmluZ1xyXG4gKiBAcGFyYW0gbmFtZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIG5hbWUgKSA9PiB7XHJcblx0bmFtZSAgICAgICAgPSBuYW1lLnJlcGxhY2UoIC9bXFxbXS8sIFwiXFxcXFtcIiApLnJlcGxhY2UoIC9bXFxdXS8sIFwiXFxcXF1cIiApO1xyXG5cdHZhciByZWdleCAgID0gbmV3IFJlZ0V4cCggXCJbXFxcXD8mXVwiICsgbmFtZSArIFwiPShbXiYjXSopXCIgKSxcclxuXHRcdHJlc3VsdHMgPSByZWdleC5leGVjKCBsb2NhdGlvbi5zZWFyY2ggKTtcclxuXHRyZXR1cm4gcmVzdWx0cyA9PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudCggcmVzdWx0c1sgMSBdLnJlcGxhY2UoIC9cXCsvZywgXCIgXCIgKSApO1xyXG59OyIsImltcG9ydCBtZDUgZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9tZDUnO1xyXG5cclxuLyoqXHJcbiAqIFVuaXF1ZSByYW5kb20gbWQ1XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IFN0cmluZyggbWQ1KCBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKSApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgcGFnZS5cclxuICogVXNlIHBhZ2VYT2Zmc2V0IGFuZCBwYWdlWU9mZnNldCBpZiB0aGV5IGFyZSBkZWZpbmVkLCBvdGhlcndpc2Ugc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wLiBZb3UgY2FuIG9taXQgZWwgdG8gdXNlIGEgZGVmYXVsdCB2YWx1ZSBvZiB3aW5kb3cuXHJcbiAqIEBwYXJhbSBlbFxyXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBlbCA9IHdpbmRvdyApID0+ICgge1xyXG5cdHg6IGVsLnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWE9mZnNldCA6IGVsLnNjcm9sbExlZnQsXHJcblx0eTogZWwucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VZT2Zmc2V0IDogZWwuc2Nyb2xsVG9wXHJcbn0gKTsiLCIvKipcclxuICogU21vb3RoLXNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS5cclxuICogR2V0IGRpc3RhbmNlIGZyb20gdG9wIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3Agb3IgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AuXHJcbiAqIFNjcm9sbCBieSBhIGZyYWN0aW9uIG9mIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3AuIFVzZSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgdG8gYW5pbWF0ZSB0aGUgc2Nyb2xsaW5nLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0aWYoIGMgPiAwICkge1xyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggc2Nyb2xsVG9Ub3AgKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbyggMCwgYyAtIGMgLyA4ICk7XHJcblx0fVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gKCBjYWxsYmFjaywgdGl0bGUgPSAnVGltZVRha2VuJyApID0+IHtcclxuXHRjb25zb2xlLnRpbWUoIHRpdGxlICk7XHJcblx0Y29uc3QgciA9IGNhbGxiYWNrKCk7XHJcblx0Y29uc29sZS50aW1lRW5kKCB0aXRsZSApO1xyXG5cdHJldHVybiByO1xyXG59OyIsImltcG9ydCBpc19qcXVlcnkgZnJvbSAnLi9pc19qcXVlcnknO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgR2l2ZW4gU3RyaW5nIGludG8gQSBqUXVlcnkgT2JqZWN0LlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiB7XHJcblx0aWYoIGZhbHNlID09PSBpc19qcXVlcnkoICRlbGVtICkgKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5KCAkZWxlbSApO1xyXG5cdH1cclxuXHRyZXR1cm4gJGVsZW07XHJcbn07IiwiaW1wb3J0IGlzX29iamVjdF9saWtlIGZyb20gJy4vaXNfb2JqZWN0X2xpa2UnO1xyXG5pbXBvcnQgdmFsaWRhdGVKU0Z1bmMgZnJvbSAnLi92YWxpZGF0ZVNpbmdsZUpTRnVuYyc7XHJcbmltcG9ydCBlbXB0eSBmcm9tICdsb2N1dHVzL3BocC92YXIvZW1wdHknO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBpc19vYmplY3RfbGlrZSggJGRhdGEgKSApIHtcclxuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRhdGEgKSB7XHJcblx0XHRcdGlmKCAhZW1wdHkoICRkYXRhWyAka2V5IF0gKSApIHtcclxuXHRcdFx0XHQkZGF0YVsgJGtleSBdID0gdmFsaWRhdGVKU0Z1bmMoICRkYXRhWyAka2V5IF0sICRhcmdzX2tleSwgJGNvbnRlbnRzX2tleSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkZGF0YTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGN1cnJlbnQgVVJMLlxyXG4gKiBVc2UgU3RyaW5nLm1hdGNoKCkgd2l0aCBhbiBhcHByb3ByaWF0ZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZ2V0IGFsbCBrZXktdmFsdWUgcGFpcnMsXHJcbiAqIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKSB0byBtYXAgYW5kIGNvbWJpbmUgdGhlbSBpbnRvIGEgc2luZ2xlIG9iamVjdC5cclxuICogUGFzcyBsb2NhdGlvbi5zZWFyY2ggYXMgdGhlIGFyZ3VtZW50IHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHVybC5cclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7VCB8IHt9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB1cmwgPT5cclxuXHQoIHVybC5tYXRjaCggLyhbXj89Jl0rKSg9KFteJl0qKSkvZyApIHx8IFtdICkucmVkdWNlKFxyXG5cdFx0KCBhLCB2ICkgPT4gKCAoIGFbIHYuc2xpY2UoIDAsIHYuaW5kZXhPZiggJz0nICkgKSBdID0gdi5zbGljZSggdi5pbmRleE9mKCAnPScgKSArIDEgKSApLCBhICksXHJcblx0XHR7fVxyXG5cdCk7IiwiaW1wb3J0IGlzX29iamVjdCBmcm9tIFwibG9jdXR1cy9waHAvdmFyL2lzX29iamVjdFwiO1xyXG5pbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gXCIuL2lzX3VuZGVmaW5lZFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoICRzdHJpbmcsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IGlzX29iamVjdCggJHN0cmluZyApICYmIGZhbHNlID09PSBpc191bmRlZmluZWQoICRzdHJpbmdbICRhcmdzX2tleSBdICkgfHwgZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdICkgKSB7XHJcblx0XHRsZXQgJGFyZ3MgICAgID0gKCAkc3RyaW5nWyAkYXJnc19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGFyZ3Nfa2V5IF07XHJcblx0XHRsZXQgJGNvbnRlbnRzID0gKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRjb250ZW50c19rZXkgXTtcclxuXHRcdGlmKCAkYXJncyA9PT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2UgaWYoICRhcmdzICE9PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkYXJncywgJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJHN0cmluZztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRzdHJpbmc7XHJcbn07XHJcbiIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcblxyXG4vKipcclxuICogU2V0cyBKUyBPYmplY3QgSW50byBXaW5kb3cgQXJncy5cclxuICogQHBhcmFtICRrZXlcclxuICogQHBhcmFtICR2YWx1ZVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXksICR2YWx1ZSApID0+IHtcclxuXHRpZiggaXNfb2JqZWN0KCAka2V5ICkgKSB7XHJcblx0XHRmb3IoIGxldCAkX2sgaW4gJGtleSApIHtcclxuXHRcdFx0d2luZG93WyAkX2sgXSA9ICRrZXlbICRfayBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR3aW5kb3dbICRrZXkgXSA9ICR2YWx1ZTtcclxufTsiLCIvKipcclxuICogQ2FzdHMgdGhlIHByb3ZpZGVkIHZhbHVlIGFzIGFuIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5pc0FycmF5KCkgdG8gZGV0ZXJtaW5lIGlmIHZhbCBpcyBhbiBhcnJheSBhbmQgcmV0dXJuIGl0IGFzLWlzIG9yIGVuY2Fwc3VsYXRlZCBpbiBhbiBhcnJheSBhY2NvcmRpbmdseS5cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7KltdfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4gKEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdKTsiLCIvKiBnbG9iYWwgc3dhbDp0cnVlICovXG5pbXBvcnQge1xuXHRhcnJheV9tZXJnZSxcblx0Y2FsbF91c2VyX2Z1bmMsXG5cdGNsb25lX29iamVjdCxcblx0aXNfanF1ZXJ5LFxuXHRpc19udWxsLFxuXHRpc19vYmplY3RfbGlrZSxcblx0aXNfdW5kZWZpbmVkLFxuXHRpc193aW5kb3dfYXJnLFxuXHRtZDUsXG5cdG1pY3JvdGltZSxcblx0cmFuZF9tZDUsXG5cdHN0cnRvbG93ZXIsXG5cdHRvX2pxdWVyeSxcblx0dG9fanNfZnVuYyxcbn0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbiB7XG5cdHN0YXRpYyBqc19mdW5jKCAkZGF0YSApIHtcblx0XHRyZXR1cm4gdG9fanNfZnVuYyggJGRhdGEsICd3cG9uaW9uX2pzX2FyZ3MnLCAnd3Bvbmlvbl9qc19jb250ZW50cycgKTtcblx0fVxuXG5cdHN0YXRpYyByYW5kX2lkKCkge1xuXHRcdHJldHVybiBtZDUoICd3cG9uaW9uX3JhbmRfJyArIG1pY3JvdGltZSgpICsgcmFuZF9tZDUoKSApO1xuXHR9XG5cblx0c3RhdGljIHZhbGlkX2pzb24oIG9iaiApIHtcblx0XHR0cnkge1xuXHRcdFx0SlNPTi5wYXJzZSggb2JqICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEEgU2luZ2xlIENsYXNzIEZvciB0aGUgR2l2ZW4gRWxlbWVudC5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c3RhdGljIGdldF9maWVsZF9jbGFzcyggJHR5cGUgKSB7XG5cdFx0JHR5cGUgPSBzdHJ0b2xvd2VyKCAkdHlwZSApO1xuXG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvdy53cG9uaW9uX2ZpZWxkc1sgJHR5cGUgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy53cG9uaW9uX2ZpZWxkc1sgJHR5cGUgXTtcblx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJ3dwb25pb25fJyArICR0eXBlICsgJ19maWVsZCcgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvd1sgJ3dwb25pb25fJyArICR0eXBlICsgJ19maWVsZCcgXTtcblx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJHR5cGUgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvd1sgJHR5cGUgXTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZElEKCAkZWxlbSApIHtcblx0XHRyZXR1cm4gdG9fanF1ZXJ5KCAkZWxlbSApLmF0dHIoICdkYXRhLXdwb25pb24tanNpZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIEZpZWxkIEhUTUwgT2JqZWN0IFVzaW5nIEZpZWxkIElELlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICR3aGVyZV90b19maW5kXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHN0YXRpYyBJRHRvRWxlbWVudCggJGVsZW0sICR3aGVyZV90b19maW5kID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRpZCA9IFdQT25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRpZiggZmFsc2UgIT09ICR3aGVyZV90b19maW5kICYmIGlzX2pxdWVyeSggJHdoZXJlX3RvX2ZpbmQgKSApIHtcblx0XHRcdHJldHVybiAkd2hlcmVfdG9fZmluZC5maW5kKCAnLndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkaWQgKyAnXCInICk7XG5cdFx0fVxuXHRcdHJldHVybiBqUXVlcnkoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIl0nICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGdpdmVuIHZhbHVlIGlzIGFuIGpRdWVyeSBpbnN0YW5jZS5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzRmllbGQoICRlbGVtICkge1xuXHRcdHJldHVybiAoIGlzX2pxdWVyeSggJGVsZW0gKSApID8gKCB0aGlzLmZpZWxkSUQoICRlbGVtICkgKSA6IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgV2luZG93IEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyB3aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdHJldHVybiAoIGlzX3dpbmRvd19hcmcoICR2YXJfaWQgKSApID8gd2luZG93WyAkdmFyX2lkIF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgJiBSZXR1cm5zIEZpZWxkIEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZEFyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0JHZhcl9pZCA9ICggdGhpcy5pc0ZpZWxkKCAkdmFyX2lkICkgKSA/IHRoaXMuZmllbGRJRCggJHZhcl9pZCApIDogJHZhcl9pZDtcblx0XHRyZXR1cm4gKCAkdmFyX2lkICkgPyBjbG9uZV9vYmplY3QoIHRoaXMud2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgKSApIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hjZWtzIGFuZCByZXR1cm5zIGdsb2JhbCB0cmFuc2xhdGlvbiBzdHJpbmcuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljIHR4dCggJGtleSwgJGRlZmF1bHQgPSAnc3RyaW5nX2RlZmF1bHRfbm90X2ZvdW5kJyApIHtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCBXUE9uaW9uLnRleHRbICRrZXkgXSApICkgPyBXUE9uaW9uLnRleHRbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgTG9hZGluZyBTY3JlZW4uXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJGlzX3Nob3dcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgbG9hZGluZ19zY3JlZW4oICRlbGVtLCAkaXNfc2hvdyA9IHRydWUgKSB7XG5cdFx0JGVsZW0gPSB0b19qcXVlcnkoICRlbGVtICkuZmluZCggJy5wYWdlLWxvYWRlcicgKTtcblx0XHRpZiggdHJ1ZSA9PT0gJGlzX3Nob3cgKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW0uZmFkZUluKCAnc2xvdycgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRlbGVtLmZhZGVPdXQoICdzbG93JyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgR2xvYmFsIERlYnVnIFZpZXcgUE9QVVAuXG5cdCAqL1xuXHRzdGF0aWMgZ2xvYmFsX2RlYnVnKCkge1xuXHRcdGxldCAkaGFuZGxlID0galF1ZXJ5KCAnYS53cG9uaW9uLWdsb2JhbC1kZWJ1Zy1oYW5kbGUnICksXG5cdFx0XHQkanNvbiAgID0ge307XG5cdFx0aWYoIFdQT25pb24uZGVidWdfaW5mbyA9PT0gbnVsbCAmJiAkaGFuZGxlLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGRlZmluZWRfdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApO1xuXHRcdFx0aWYoIGlzX29iamVjdF9saWtlKCAkZGVmaW5lZF92YXJzICkgKSB7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGRlZmluZWRfdmFycyApIHtcblx0XHRcdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGRlZmluZWRfdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0XHQkanNvblsgJGRlZmluZWRfdmFyc1sgJGtleSBdIF0gPSBXUE9uaW9uLndpbmRvd0FyZ3MoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRXUE9uaW9uLmRlYnVnX2luZm8gPSAkanNvbjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkaGFuZGxlLm9uKCAnY2xpY2snLCAoICggZSApID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHN3YWwoIHtcblx0XHRcdFx0dGl0bGU6IFdQT25pb24udHh0KCAnZ2xvYmFsX2pzb25fb3V0cHV0JywgJ0dsb2JhbCBXUE9uaW9uIERlYnVnIERhdGEnICksXG5cdFx0XHRcdGh0bWw6IGpRdWVyeSggJyN3cG9uaW9uZGVidWdpbmZvcG9wdXAgPiBkaXYnICksXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogV1BPbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnR2V0IEpTT04gT3V0cHV0JyApLFxuXHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoKSA9PiBzd2FsLmVuYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0b25PcGVuOiAoKSA9PiB7XG5cdFx0XHRcdFx0alF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgI3dwb25pb24tZ2xvYmFsLWRlYnVnLWNvbnRlbnQnICkuanNvblZpZXcoIFdQT25pb24uZGVidWdfaW5mbyApO1xuXHRcdFx0XHRcdHN3YWwuZGlzYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gc3dhbCgge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRodG1sOiAnPHRleHRhcmVhIHN0eWxlPVwibWluLXdpZHRoOjU1MHB4OyBtaW4taGVpZ2h0OjMwMHB4XCI+JyArIEpTT04uc3RyaW5naWZ5KCBXUE9uaW9uLmRlYnVnX2luZm8gKSArICc8L3RleHRhcmVhPicsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGFuZCBSZXRyaXZlcyBWYWx1ZXMgZnJvbSAkd3Bvbmlvbi5zZXR0aW5nc1xuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgb3B0aW9uKCAka2V5LCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IFdQT25pb24uc2V0dGluZ3NfYXJncztcblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkge1xuXHRcdFx0cmV0dXJuICRhcmdzWyAka2V5IF07XG5cdFx0fVxuXHRcdHJldHVybiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgV1BPbmlvbiBEZWJ1ZyBpcyBlbmFibGVkLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc19kZWJ1ZygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdkZWJ1ZycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXIgQWxsIEZpZWxkIEpTIENvZGVzLlxuXHQgKi9cblx0c3RhdGljIGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBXUE9uaW9uLmlzX2RlYnVnKCkgJiYgaXNfbnVsbCggV1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHRsZXQgJHZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKSxcblx0XHRcdFx0JGpzb24gPSB7fSxcblx0XHRcdFx0JHV0eHQgPSBXUE9uaW9uLnR4dCggJ3VubW9kaWZpZWRfZGVidWcnICksXG5cdFx0XHRcdCRtdHh0ID0gV1BPbmlvbi50eHQoICdtb2RpZmllZF9kZWJ1ZycgKTtcblxuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkdmFycyApIHtcblx0XHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICR2YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRsZXQgJGRhdGEgICAgICAgICAgICAgICAgICAgICAgID0gV1BPbmlvbi53aW5kb3dBcmdzKCAkdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXSAgICAgICAgICA9IHt9O1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF1bICR1dHh0IF0gPSAkZGF0YS5kZWJ1Z19pbmZvIHx8ICRkYXRhO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF1bICRtdHh0IF0gPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0V1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvID0gJGpzb247XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBBamF4IFdyYXBwZXIgRm9yIGpRdWVyeS5BamF4KClcblx0ICogQHBhcmFtICRhY3Rpb25cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqIEBwYXJhbSAkb25TdWNjZXNzXG5cdCAqIEBwYXJhbSAkb25FcnJvclxuXHQgKiBAcGFyYW0gJG9uQWx3YXlzXG5cdCAqL1xuXHRzdGF0aWMgYWpheCggJGFjdGlvbiA9ICcnLCAkZGF0YSA9IHt9LCAkb25TdWNjZXNzID0gZmFsc2UsICRvbkVycm9yID0gZmFsc2UsICRvbkFsd2F5cyA9IGZhbHNlICkge1xuXHRcdGxldCAkZGVmYXVsdHMgPSB7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHR1cmw6IFdQT25pb24ub3B0aW9uKCAnYWpheF91cmwnICksXG5cdFx0XHRcdG9uU3VjY2VzczogZmFsc2UsXG5cdFx0XHRcdG9uQWx3YXlzOiBmYWxzZSxcblx0XHRcdFx0b25FcnJvcjogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0JGFqYXggICAgID0gZmFsc2U7XG5cblx0XHRpZiggaXNfb2JqZWN0X2xpa2UoICRhY3Rpb24gKSApIHtcblx0XHRcdCRkYXRhID0gJGFjdGlvbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGRlZmF1bHRzLnVybCArPSAnJicgKyBXUE9uaW9uLm9wdGlvbiggJ2FqYXhfYWN0aW9uX2tleScgKSArICc9JyArICRhY3Rpb247XG5cdFx0fVxuXG5cdFx0JGRlZmF1bHRzICA9IGFycmF5X21lcmdlKCAkZGVmYXVsdHMsICRkYXRhICk7XG5cdFx0JG9uU3VjY2VzcyA9ICggaXNfdW5kZWZpbmVkKCAkb25TdWNjZXNzICkgfHwgZmFsc2UgPT09ICRvblN1Y2Nlc3MgKSA/ICRkZWZhdWx0cy5vblN1Y2Nlc3MgOiAkb25TdWNjZXNzO1xuXHRcdCRvbkFsd2F5cyAgPSAoIGlzX3VuZGVmaW5lZCggJG9uRXJyb3IgKSB8fCBmYWxzZSA9PT0gJG9uRXJyb3IgKSA/ICRkZWZhdWx0cy5vbkFsd2F5cyA6ICRvbkFsd2F5cztcblx0XHQkb25FcnJvciAgID0gKCBpc191bmRlZmluZWQoICRvbkFsd2F5cyApIHx8IGZhbHNlID09PSAkb25BbHdheXMgKSA/ICRkZWZhdWx0cy5vbkVycm9yIDogJG9uRXJyb3I7XG5cdFx0JGFqYXggICAgICA9IGpRdWVyeS5hamF4KCAkZGVmYXVsdHMgKTtcblxuXG5cdFx0aWYoICRvblN1Y2Nlc3MgKSB7XG5cdFx0XHQkYWpheC5kb25lKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25TdWNjZXNzLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25FcnJvciApIHtcblx0XHRcdCRhamF4LmZhaWwoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkVycm9yLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25BbHdheXMgKSB7XG5cdFx0XHQkYWpheC5hbHdheXMoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkFsd2F5cywgcmVzICkgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRhamF4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgV1BPbmlvbiBUZW1wbGF0ZSBmb3IgdW5kZXJzY29yZS5cblx0ICogQHBhcmFtICRpZFxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0pOiAqfVxuXHQgKi9cblx0c3RhdGljIHRlbXBsYXRlKCAkaWQgKSB7XG5cdFx0bGV0IGNvbXBpbGVkLFxuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZXZhbHVhdGU6IC88IyhbXFxzXFxTXSs/KSM+L2csXG5cdFx0XHRcdGludGVycG9sYXRlOiAvXFx7XFx7XFx7KFtcXHNcXFNdKz8pXFx9XFx9XFx9L2csXG5cdFx0XHRcdGVzY2FwZTogL1xce1xceyhbXlxcfV0rPylcXH1cXH0oPyFcXH0pL2csXG5cdFx0XHRcdHZhcmlhYmxlOiAnZGF0YSdcblx0XHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0XHRjb21waWxlZCA9IGNvbXBpbGVkIHx8IF8udGVtcGxhdGUoICRpZCwgb3B0aW9ucyApO1xuXHRcdFx0cmV0dXJuIGNvbXBpbGVkKCBkYXRhICk7XG5cdFx0fTtcblx0fVxuXG5cdC8vQHRvZG8gTWlncmF0ZSBQbHVnaW4gRGVidWcgSW5mby5cbn1cbiIsImltcG9ydCB7IGFycmF5X21lcmdlLCBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRzdGF0aWMgYWRkKCAka2V5LCAkdmFsdWUgKSB7XG5cdFx0aWYoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cblx0XHRpZiggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSAkdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gYXJyYXlfbWVyZ2UoICR2YWx1ZSwgdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZ2V0KCAka2V5LCAkZGVmYXVsdCA9IGZhbHNlICkge1xuXHRcdGlmKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkgPyAkZGVmYXVsdCA6IHRoaXMuZGVidWdfaW5mb1sgJGtleSBdO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2hlbHBlcnMvZGVwZW5kZW5jeSc7XG5pbXBvcnQgeyBhcnJheV9tZXJnZSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkZWxlbWVudCA9IHVuZGVmaW5lZCwgcGFyYW0gPSB7fSApIHtcblx0XHR0aGlzLnBhcmFtICAgICAgICAgPSBhcnJheV9tZXJnZSggeyBuZXN0YWJsZTogZmFsc2UsIHBhcmVudDogZmFsc2UgfSwgcGFyYW0gKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuYmFzZSAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuYmFzZS4kZWwgICAgICA9ICRlbGVtZW50O1xuXHRcdHRoaXMuYmFzZS5pbml0ICAgICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS5ydWxlc2V0ID0galF1ZXJ5LmRlcHMuY3JlYXRlUnVsZXNldCgpO1xuXHRcdFx0dGhpcy5iYXNlLmRlcFJvb3QoKTtcblx0XHRcdGpRdWVyeS5kZXBzLmVuYWJsZSggdGhpcy5iYXNlLiRlbCwgdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0c2hvdzogKCBlbCApID0+IGVsLnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApLFxuXHRcdFx0XHRoaWRlOiAoIGVsICkgPT4gZWwuYWRkQ2xhc3MoICdoaWRkZW4nICksXG5cdFx0XHRcdGxvZzogZmFsc2UsXG5cdFx0XHRcdGNoZWNrVGFyZ2V0czogZmFsc2UsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblx0XHR0aGlzLmJhc2UuaW5zdGFuY2UgPSBbXTtcblx0XHR0aGlzLmJhc2UuZGVwUm9vdCAgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmJhc2UuJGVsLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24taGFzLWRlcGVuZGVuY3knICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHRoaXMuYmFzZS5pbnN0YW5jZSA9IG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koIGpRdWVyeSggdGhpcyApLCAkdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0XHRcdG5lc3RhYmxlOiAkdGhpcy5wYXJhbS5uZXN0YWJsZSxcblx0XHRcdFx0XHRcdHBhcmVudDogKCB0cnVlID09PSAkdGhpcy5wYXJhbS5uZXN0YWJsZSApID8gJHRoaXMuYmFzZS4kZWwgOiAkdGhpcy5wYXJhbS5wYXJlbnQsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdHRoaXMuYmFzZS5pbml0KCk7XG5cdH1cbn1cbiIsIi8vaW1wb3J0IHsgYXJyYXlfbWVyZ2UsIGVtcHR5LCBpc19jYWxsYWJsZSwgaXNfanF1ZXJ5LCBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4Jztcbi8vY29uc3QgdG9fanF1ZXJ5ICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkudG9fanF1ZXJ5O1xuLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGU6dHJ1ZSAqL1xuXG5jb25zdCBhcnJheV9tZXJnZSAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5hcnJheV9tZXJnZTtcbmNvbnN0IGVtcHR5ICAgICAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmVtcHR5O1xuY29uc3QgaXNfY2FsbGFibGUgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfY2FsbGFibGU7XG5jb25zdCBpc19qcXVlcnkgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5pc19qcXVlcnk7XG5jb25zdCBpc191bmRlZmluZWQgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5pc191bmRlZmluZWQ7XG5cbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICR3cG9uaW9uX2RlYnVnIGZyb20gJy4vZGVidWcnO1xuaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4vbW9kdWxlJztcblxuLyoqXG4gKiBXUE9uaW9uIEZpZWxkIEFic3RyYWN0IENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQsICRjb25maWcgPSBudWxsICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250ZXh0ICk7XG5cdFx0dGhpcy5zZXRfYXJncyggZmFsc2UgKTtcblx0XHR0aGlzLmZpZWxkX2RlYnVnKCk7XG5cdFx0dGhpcy5jb25maWcgPSAkY29uZmlnO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHRcdHRoaXMuanNfZXJyb3JfaGFuZGxlcigpO1xuXHRcdHRoaXMuanNfdmFsaWRhdG9yKCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0fVxuXG5cdGpzX2Vycm9yX2hhbmRsZXIoIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudC5vbiggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgJz4gLndwb25pb24tZmllbGRzZXQgOmlucHV0JywgKCBlLCBkYXRhICkgPT4gdGhpcy5qc19lcnJvciggZGF0YSApICk7XG5cdH1cblxuXHRqc192YWxpZGF0b3IoKSB7XG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApICkge1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0JGVsZW0uZmluZCggJzppbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRoYW5kbGVfYXJncyggJGFyZywgJGtleSA9IGZhbHNlICkge1xuXHRcdGxldCAkYXJncyAgID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApLFxuXHRcdFx0JGV4aXN0cyA9ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0gKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGtleSApIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdID0gJGFyZ3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdWyAka2V5IF0gPSAkYXJncztcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksICRleGlzdHMgKTtcblx0XHRyZXR1cm4gJGFyZ3M7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggZmFsc2UgIT09ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0ICRpbmZvID0gdGhpcy5vcHRpb24oICdkZWJ1Z19pbmZvJyApLFxuXHRcdFx0JGFyciAgPSB7fTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkaW5mbyApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSBlbXB0eSggJGluZm8gKSApIHtcblx0XHRcdFx0JGFyclsgJ1JhdyBGaWVsZCBBcmdzJyBdID0gJGluZm9bICdSYXcgRmllbGQgQXJncycgXTtcblx0XHRcdFx0JGFyci5GaWVsZCAgICAgICAgICAgICAgID0gJGluZm9bICdGaWVsZCBBcmdzJyBdO1xuXHRcdFx0XHQkYXJyWyAnRmllbGQgRXJyb3JzJyBdICAgPSAkaW5mb1sgJ0ZpZWxkIEVycm9ycycgXTtcblx0XHRcdFx0JGFyclsgJ0ZpZWxkIFZhbHVlJyBdICAgID0gJGluZm9bICdGaWVsZCBWYWx1ZScgXTtcblx0XHRcdFx0JGFyclsgJ1BsdWdpbiBJRCcgXSAgICAgID0gJGluZm9bICdQbHVnaW4gSUQnIF07XG5cdFx0XHRcdCRhcnIuTW9kdWxlICAgICAgICAgICAgICA9ICRpbmZvLk1vZHVsZTtcblx0XHRcdFx0JGFyci5VbmlxdWUgICAgICAgICAgICAgID0gJGluZm8uVW5pcXVlO1xuXHRcdFx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiAkYXJyLCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgJGZvdW5kID0gZmFsc2U7XG5cdFx0aWYoICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0bGV0ICRJRCAgID0gdGhpcy5pZCgpLFxuXHRcdFx0XHQkZWxlbSA9IGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9JyArICRJRCArICddJyApO1xuXHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdFx0JGZvdW5kID0gJGVsZW07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRmb3VuZCA9IHRoaXMuZWxlbWVudDtcblx0XHR9XG5cblx0XHRpZiggZmFsc2UgIT09ICRmb3VuZCApIHtcblx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApXG5cdFx0XHRcdCAgLmF0dHIoICd0aXRsZScsICR3cG9uaW9uLnR4dCggJ2NsaWNrX3RvX3ZpZXdfZGVidWdfaW5mbycsICdDbGljayBUbyBWaWV3IEZpZWxkIERlYnVnIEluZm8nICkgKVxuXHRcdFx0XHQgIC50aXBweSgge1xuXHRcdFx0XHRcdCAgYXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0ICBhcnJvd1R5cGU6ICdyb3VuZCcsXG5cdFx0XHRcdFx0ICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHRcdCAgdGhlbWU6ICdsaWdodCcsXG5cdFx0XHRcdFx0ICBhbmltYXRpb246ICdzY2FsZSdcblx0XHRcdFx0ICB9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZCAgICAgICAgICA9ICR0aGlzLmlkKCkgKyAnZGVidWdJTkZPJyxcblx0XHRcdFx0XHQkbm90aWNlX3R4dCA9ICc8cCBjbGFzcz1cXCd3cG9uaW9uLWZpZWxkLWRlYnVnLW5vdGljZVxcJz4nICsgJHdwb25pb24ub3B0aW9uKCAnZGVidWdfbm90aWNlJyApICsgJzwvcD4nLFxuXHRcdFx0XHRcdCRlbGVtICAgICAgID0galF1ZXJ5KCAnPGRpdiBpZD1cIicgKyAkZCArICdcIiBjbGFzcz1cIndwb25pb24tZmllbGQtZGVidWctcG9wdXBcIiA+PGRpdiBpZD1cIicgKyAkZCArICdcIiA+PC9kaXY+JyArICRub3RpY2VfdHh0ICsgJzwvZGl2PicgKTtcblx0XHRcdFx0bGV0ICRkYXRhICAgICAgID0gJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICk7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRodG1sOiAkZWxlbSxcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogJHdwb25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0FzIEpTT04nICksXG5cdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRvbk9wZW46ICgpID0+IGpRdWVyeSggJyNzd2FsMi1jb250ZW50ID4gZGl2ID4gIycgKyAkZCApLmpzb25WaWV3KCAkZGF0YSApXG5cdFx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICkgKSArICc8L3RleHRhcmVhPidcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRvcHRpb25zKCkge1xuXHRcdGlmKCB0aGlzLl9hcmdzID09PSBmYWxzZSApIHtcblx0XHRcdHRoaXMuX2FyZ3MgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCB0aGlzLmlkKCkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2FyZ3M7XG5cdH1cblxuXHRvcHRpb24oICRrZXkgPSAnJywgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRsZXQgJGFyZ3MgPSB0aGlzLm9wdGlvbnMoKTtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSA/ICRhcmdzWyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdGlkKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdG1vZHVsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdtb2R1bGUnLCBmYWxzZSApO1xuXHR9XG5cblx0cGx1Z2luX2lkKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ3BsdWdpbl9pZCcsIGZhbHNlICk7XG5cdH1cblxuXHRhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30gKSB7XG5cdFx0bGV0ICRhamF4X2tleSAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApO1xuXHRcdGxldCAkZGVmYXVsdCAgICAgICAgICA9IHtcblx0XHRcdHBsdWdpbl9pZDogdGhpcy5wbHVnaW5faWQoKSxcblx0XHRcdG1vZHVsZTogdGhpcy5tb2R1bGUoKSxcblx0XHR9O1xuXHRcdCRkZWZhdWx0WyAkYWpheF9rZXkgXSA9ICRhY3Rpb247XG5cdFx0JGRhdGEuZGF0YSAgICAgICAgICAgID0gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkZGF0YS5kYXRhICkgKSA/IGFycmF5X21lcmdlKCAkZGVmYXVsdCwgJGRhdGEuZGF0YSApIDogJGRlZmF1bHQ7XG5cblx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJGRhdGEgKTtcblx0fVxuXG5cdGluaXRfZmllbGQoICRlbGVtLCAkdHlwZSApIHtcblx0XHRsZXQgJF9pbnN0YW5jZXMgPSBbXTtcblx0XHRpZiggIWlzX2pxdWVyeSggJGVsZW0gKSApIHtcblx0XHRcdCRlbGVtID0gdGhpcy5lbGVtZW50LmZpbmQoICRlbGVtICk7XG5cdFx0fVxuXHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0JGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGNsYXNzID0gJHdwb25pb24uZ2V0X2ZpZWxkX2NsYXNzKCAkdHlwZSApO1xuXHRcdFx0aWYoIGZhbHNlICE9PSAkY2xhc3MgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYoIGlzX2NhbGxhYmxlKCAkY2xhc3MgKSApIHtcblx0XHRcdFx0XHRcdCRfaW5zdGFuY2VzLnB1c2goIG5ldyAkY2xhc3MoIGpRdWVyeSggdGhpcyApICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGpRdWVyeSggdGhpcyApICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICdFcnJvcjogJyArIGUgKyAnIHwgRm9yIDogJyArICR0eXBlICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdHJlbG9hZCgpIHtcblx0XHR3cC5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfcmVsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaWNvbl9waWNrZXInLCAnaWNvbl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicsICdmb250X3NlbGVjdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYWNjb3JkaW9uJywgJ2FjY29yZGlvbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdyb3VwJywgJ2dyb3VwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dDpub3QoLndwb25pb24taW5wdXRtYXNrKScsICd0ZXh0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dGFyZWEnLCAndGV4dGFyZWEnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1iYWNrZ3JvdW5kJywgJ2JhY2tncm91bmQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pbWFnZV9zZWxlY3QnLCAnaW1hZ2Vfc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc2VsZWN0JywgJ3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN3aXRjaGVyJywgJ3N3aXRjaGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGFsZXR0ZScsICdjb2xvcl9wYWxldHRlJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJywgJ3dwX2VkaXRvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZpZWxkc2V0JywgJ2ZpZWxkc2V0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1pbnB1dG1hc2tdJywgJ2lucHV0bWFzaycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2xpbmsnLCAnd3BfbGlua3MnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jaGVja2JveCcsICdjaGVja2JveF9yYWRpbycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXJhZGlvJywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQta2V5X3ZhbHVlJywgJ2tleXZhbHVlX3BhaXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9waWNrZXInLCAnY29sb3JfcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZGF0ZV9waWNrZXInLCAnZGF0ZV9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nYWxsZXJ5JywgJ2dhbGxlcnknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC11cGxvYWQnLCAndXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2UnLCAnaW1hZ2VfdXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGFiJywgJ2pxdWVyeV90YWInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZmllbGQtdG9vbHRpcCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ29vZ2xlX21hcHMnLCAnZ29vZ2xlX21hcHMnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24taGVscCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLXdyYXAtdG9vbHRpcCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2xvbmUnLCAnY2xvbmVfZWxlbWVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuc2VsZWN0MicsICdzZWxlY3QyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5jaG9zZW4nLCAnY2hvc2VuJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3RpemUnLCAnc2VsZWN0aXplJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc29ydGVyJywgJ3NvcnRlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXR5cG9ncmFwaHknLCAndHlwb2dyYXBoeScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW9lbWJlZCcsICdvZW1iZWQnICk7XG5cdFx0d3AuaG9va3MuYWRkQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfcmVsb2FkJyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0X2FyZ3MoICRhcmdzICkge1xuXHRcdHRoaXMuX2FyZ3MgPSAkYXJncztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldF9maWVsZF9wYXJlbnRfYnlfaWQoICRlbGVtICkge1xuXHRcdGxldCAkSUQgPSAkd3Bvbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdHJldHVybiBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRJRCArICdcIl0nICk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQgKSB7XG5cdFx0aWYoICEkc2VsZWN0b3IualF1ZXJ5ICkge1xuXHRcdFx0JHNlbGVjdG9yID0galF1ZXJ5KCAkc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0dGhpcy5zZXRfZWxlbWVudCggJHNlbGVjdG9yICk7XG5cdFx0dGhpcy5zZXRfY29udHh0KCAkY29udGV4dCApO1xuXHRcdHRoaXMubW9kdWxlX2luaXQoKTtcblx0fVxuXG5cdG1vZHVsZV9pbml0KCkge1xuXHR9XG5cblx0c2V0X2VsZW1lbnQoICRlbGVtICkge1xuXHRcdGlmKCAhJGVsZW0ualF1ZXJ5ICkge1xuXHRcdFx0JGVsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbSA9ICRlbGVtO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0X2NvbnR4dCggJGNvbnR4dCApIHtcblx0XHR0aGlzLmNvbnRleHQgPSAkY29udHh0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IGhvb2soKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy53cC5ob29rcztcblx0fVxuXG5cdGdldCBlbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW07XG5cdH1cblxuXHRnZXQgY29udHh0KCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHQ7XG5cdH1cblxufVxuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbl9WYWxpZGF0b3Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmZvcm0gID0gV1BPbmlvbl9WYWxpZGF0b3IuZ2V0X2Zvcm0oKTtcblx0XHR0aGlzLnJ1bGVzID0ge1xuXHRcdFx0aW52YWxpZEhhbmRsZXI6ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnI3B1Ymxpc2gnICkucmVtb3ZlQ2xhc3MoICdidXR0b24tcHJpbWFyeS1kaXNhYmxlZCcgKTtcblx0XHRcdFx0alF1ZXJ5KCAnI2FqYXgtbG9hZGluZycgKS5hdHRyKCAnc3R5bGUnLCAnJyApO1xuXHRcdFx0XHR0aGlzLmZvcm0uc2libGluZ3MoICcjbWVzc2FnZScgKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5mb3JtLmJlZm9yZSggJzxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJlcnJvclwiPjxwPicgKyAkd3Bvbmlvbi50eHQoICd2YWxpZGF0aW9uX3N1bW1hcnknICkgKyAnPC9wPjwvZGl2PicgKTtcblx0XHRcdH0sXG5cdFx0XHRpZ25vcmU6IGZhbHNlLFxuXHRcdFx0ZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKCBlcnJvciwgZWxlbWVudCApIHtcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCB7IGVycm9yLCBlbGVtZW50IH0gKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvckNsYXNzOiAnd3Bvbmlvbi1lcnJvcicsXG5cdFx0XHRlcnJvckVsZW1lbnQ6ICdwJ1xuXHRcdH07XG5cdFx0dGhpcy5mb3JtLnZhbGlkYXRlKCB0aGlzLnJ1bGVzICk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0X2Zvcm0oKSB7XG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICk7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICk7XG5cdFx0fVxuXHRcdHJldHVybiBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oIHtcblx0XHRcdFx0aGVhZGVyOiAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0YW5pbWF0ZTogMTUwLFxuXHRcdFx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxuXHRcdFx0XHRhY3RpdmU6IGpRdWVyeSggdGhpcyApLmhhc0NsYXNzKCAnaXNfb3BlbicgKSxcblx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHQnaGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctcmlnaHQnLFxuXHRcdFx0XHRcdCdhY3RpdmVIZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1kb3duJ1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkaW5wdXRzID0gdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1yYWRpb10nICkub24oICdjbGljaycsICgpID0+ICRpbnB1dHMucmVtb3ZlQXR0ciggJ25hbWUnICkgKTtcblxuXHRcdFx0JGlucHV0cy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLmZpbmQoICdpbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XScgKS5wcm9wKCAnY2hlY2tlZCcsIHRydWUgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmNob3NlbiggdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjaG9zZW4nLCB7fSApICkgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuLyogZ2xvYmFsIHNldFRpbWVvdXQ6dHJ1ZSAqL1xuLyogZ2xvYmFsIHdwb25pb25fZmllbGQ6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyAgICAgICAgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ2Nsb25lJywge30gKSApO1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkY2xvbmVfd3JhcCA9ICRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1jbG9uZS13cmFwJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1hZGRdJyApLFxuXHRcdFx0Ly8kcmVtb3ZlX2J0biA9ICRjbG9uZV93cmFwLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLXJlbW92ZV0nICksXG5cdFx0XHQkbGltaXQgICAgICA9ICggJGFyZy5saW1pdCAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLmxpbWl0IDogZmFsc2UsXG5cdFx0XHQvLyRpc190b2FzdCAgID0gKCAkYXJnLnRvYXN0X2Vycm9yICE9PSB1bmRlZmluZWQgKSA/ICRhcmcudG9hc3RfZXJyb3IgOiB0cnVlLFxuXHRcdFx0JGVyb3JfbXNnICAgPSAkYXJnLmVycm9yX21zZyxcblx0XHRcdCRzb3J0ICAgICAgID0gKCAkYXJnLnNvcnQgIT09IGZhbHNlICkgPyB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tZmllbGQtY2xvbmUnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1maWVsZC1jbG9uZS1zb3J0ZXInLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tY2xvbmVyLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6ICggZXZlbnQsIHVpICkgPT4gdWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApLFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0ucmVtb3ZlQXR0ciggJ3N0eWxlJyApLFxuXHRcdFx0fSA6IGZhbHNlO1xuXG5cdFx0JGNsb25lX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZF9idG4sXG5cdFx0XHRsaW1pdDogJGxpbWl0LFxuXHRcdFx0Y2xvbmVfZWxlbTogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdHJlbW92ZV9idG46ICdhLndwb25pb24tcmVtb3ZlJyxcblx0XHRcdHRlbXBsYXRlOiAkdGhpcy5vcHRpb24oICdjbG9uZV90ZW1wbGF0ZScgKSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGUgKSA9PiB3cG9uaW9uX2ZpZWxkKCAkZS5maW5kKCAnPiBkaXYud3Bvbmlvbi1maWVsZC1jbG9uZTpsYXN0LWNoaWxkJyApICkucmVsb2FkKCksXG5cdFx0XHRzb3J0YWJsZTogJHNvcnQsXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8qaWYoICRpc190b2FzdCA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0XHQvLyBAdG9kbyBBZGQgVG9hc3QgT3B0aW9uLlxuXHRcdFx0XHRcdC8hKndwby50b3N0KCB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImVycm9yXCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogJGVyb3JfbXNnLFxuXHRcdFx0XHRcdH0gKTsqIS9cblx0XHRcdFx0fSBlbHNlIHsqL1xuXHRcdFx0XHRsZXQgJGh0bWwgPSBqUXVlcnkoICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPicgKyAkZXJvcl9tc2cgKyAnPC9kaXY+JyApXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkucHJlcGVuZCggJGh0bWwgKTtcblx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5mYWRlSW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkX19FID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gJF9fRS5mYWRlT3V0KCAnc2xvdycsICgpID0+ICRfX0UucmVtb3ZlKCkgKSwgMTAwMCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdC8vfVxuXHRcdFx0fSxcblx0XHRcdHNob3dfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuc2hvdyxcblx0XHRcdGhpZGVfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuaGlkZSxcblx0XHR9ICk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLndwQ29sb3JQaWNrZXIoKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRzZXR0aW5ncyA9IHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnICkgKSxcblx0XHRcdCR2aWV3O1xuXG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRzZXR0aW5ncy50aGVtZSApICkge1xuXHRcdFx0JHZpZXcgPSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0XHRkZWxldGUgJHNldHRpbmdzLnRoZW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdmlldyA9ICdkZWZhdWx0Jztcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdC5hcHBlbmQoIGpRdWVyeSggJzxkaXYgY2xhc3M9XCJ3cG9uaW9uLWRhdGVwaWNrZXItJyArICR2aWV3ICsgJ1wiIGlkPVwiJyArIHRoaXMuaWQoKSArICdcIj48L2Rpdj4nICkgKTtcblx0XHR9XG5cblx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWRhdGVwaWNrZXItcmFuZ2UnICkgKSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHRpZiggJHNldHRpbmdzLnBsdWdpbnMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JHNldHRpbmdzLnBsdWdpbnMgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0JHNldHRpbmdzLnBsdWdpbnMucHVzaCggbmV3IHJhbmdlUGx1Z2luKCB7IGlucHV0OiAkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItdG8tZGF0ZV0nIClbIDAgXSB9ICkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci1mcm9tLWRhdGVdJyApLmZsYXRwaWNrciggJHNldHRpbmdzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzZXR0aW5ncy5hcHBlbmRUbyA9IGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpIClbIDAgXTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCcgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0Z2V0IHdlYnNhZmUoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX3dlYnNhZmVfZm9udHMnICk7XG5cdH1cblxuXHRnZXQgZ29vZ2xlX2ZvbnRzKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9nZm9udHMnICk7XG5cdH1cblxuXHRidWlsZF9vcHRpb25zKCBkYXRhICkge1xuXHRcdGxldCAkcmV0dXJuID0gJyc7XG5cdFx0Zm9yKCBsZXQgJF9kIGluIGRhdGEgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggZGF0YVsgJF9kIF0gKSApIHtcblx0XHRcdFx0JHJldHVybiArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7JF9kfVwiPiR7ZGF0YVsgJF9kIF19PC9vcHRpb24+YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICRyZXR1cm47XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tZm9udC1zZWxlY3RvcicgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHtcblx0XHRcdGxldCAkdmFsICA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCksXG5cdFx0XHRcdCRodG1sID0gbnVsbDtcblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHRoaXMud2Vic2FmZS5mb250cyBbICR2YWwgXSApICkge1xuXHRcdFx0XHQkaHRtbCA9IHRoaXMuYnVpbGRfb3B0aW9ucyggdGhpcy53ZWJzYWZlLnZhcmlhbnRzICk7XG5cdFx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKTtcblx0XHRcdH1cblx0XHRcdGxldCAkdmFyaWFudCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS5odG1sKCAkaHRtbCApO1xuXG5cdFx0XHRpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdjaG9zZW4nICkgKSB7XG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaG9zZW46dXBkYXRlZCcgKTtcblx0XHRcdH0gZWxzZSBpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdzZWxlY3QyJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkaHRtbF90ZW1wID0gJHRoaXMub3B0aW9uKCAnaHRtbF90ZW1wbGF0ZScgKSxcblx0XHRcdCRpbnB1dCAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXG5cdFx0XHQkcHJldmlldyAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcnICksXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSxcblx0XHRcdCRhZGQgICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWFkZF0nICksXG5cdFx0XHQkZWRpdCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1lZGl0XScgKSxcblx0XHRcdCRjbGVhciAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWNsZWFyXScgKSxcblx0XHRcdCRtYW5hZ2UgICAgPSBmdW5jdGlvbiggJHR5cGUgKSB7XG5cdFx0XHRcdGxldCBpZHMgICA9ICRpbnB1dC52YWwoKSxcblx0XHRcdFx0XHR3aGF0ICA9ICggJHR5cGUgPT09ICdlZGl0JyApID8gJ2VkaXQnIDogJ2FkZCcsXG5cdFx0XHRcdFx0c3RhdGUgPSAoIHdoYXQgPT09ICdhZGQnICYmICFpZHMubGVuZ3RoICkgPyAnZ2FsbGVyeScgOiAnZ2FsbGVyeS1lZGl0JztcblxuXHRcdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcblxuXHRcdFx0XHRpZiggc3RhdGUgPT09ICdnYWxsZXJ5JyApIHtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdFx0XHRsaWJyYXJ5OiB7IHR5cGU6ICdpbWFnZScgfSxcblx0XHRcdFx0XHRcdGZyYW1lOiAncG9zdCcsXG5cdFx0XHRcdFx0XHRzdGF0ZTogJ2dhbGxlcnknLFxuXHRcdFx0XHRcdFx0bXVsdGlwbGU6IHRydWVcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEuZ2FsbGVyeS5lZGl0KCAnW2dhbGxlcnkgaWRzPVwiJyArIGlkcyArICdcIl0nICk7XG5cdFx0XHRcdFx0aWYoIHdoYXQgPT09ICdhZGQnICkge1xuXHRcdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUuc2V0U3RhdGUoICdnYWxsZXJ5LWxpYnJhcnknICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICd1cGRhdGUnLCBmdW5jdGlvbiggc2VsZWN0aW9uICkge1xuXHRcdFx0XHRcdGxldCBzZWxlY3RlZElkcyA9IHNlbGVjdGlvbi5tb2RlbHMubWFwKCBmdW5jdGlvbiggYXR0YWNobWVudCApIHtcblx0XHRcdFx0XHRcdGxldCBpdGVtID0gYXR0YWNobWVudC50b0pTT04oKTtcblx0XHRcdFx0XHRcdGlmKCBpdGVtLnNpemVzID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bGV0IHRodW1iID0gKCB0eXBlb2YgaXRlbS5zaXplcy50aHVtYm5haWwgIT09ICd1bmRlZmluZWQnICkgPyBpdGVtLnNpemVzLnRodW1ibmFpbC51cmwgOiBpdGVtLnVybCxcblx0XHRcdFx0XHRcdFx0JHRtcCAgPSBqUXVlcnkoICRodG1sX3RlbXAgKTtcblx0XHRcdFx0XHRcdCR0bXAuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcsIGl0ZW0uaWQgKTtcblx0XHRcdFx0XHRcdCR0bXAuZmluZCggJ2ltZycgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGl0ZW0udXJsICkuYXR0ciggJ3NyYycsIHRodW1iICkucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xuXHRcdFx0XHRcdFx0JHByZXZpZXcuYXBwZW5kKCAkdG1wICk7XG5cdFx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLndwb25pb24taGVscCcgKS50aXBweSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0uaWQ7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGxldCAkZTtcblx0XHRcdFx0XHRmb3IoICRlIGluIHNlbGVjdGVkSWRzICkge1xuXHRcdFx0XHRcdFx0aWYoIHNlbGVjdGVkSWRzWyAkZSBdID09PSBmYWxzZSB8fCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBzZWxlY3RlZElkc1sgJGUgXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGlucHV0LnZhbCggc2VsZWN0ZWRJZHMuam9pbiggJywnICkgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9O1xuXG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xuXHRcdFx0XHQkYWRkLnNob3coKTtcblx0XHRcdFx0JGVkaXQuaGlkZSgpO1xuXHRcdFx0XHQkY2xlYXIuaGlkZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGVkaXQuc2hvdygpO1xuXHRcdFx0XHQkY2xlYXIuc2hvdygpO1xuXHRcdFx0XHQkYWRkLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQkYWRkLm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnYWRkJyApICk7XG5cblx0XHQkZWRpdC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2VkaXQnICkgKTtcblxuXHRcdCRjbGVhci5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcblx0XHRcdCRjbGVhci5oaWRlKCk7XG5cdFx0XHQkZWRpdC5oaWRlKCk7XG5cdFx0XHQkYWRkLnNob3coKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2ltZycsICggZXZlbnQgKSA9PiB0aGlzLmluaXRfZmllbGQoIGV2ZW50LnRhcmdldCwgJ2ltYWdlX3BvcHVwJyApICk7XG5cblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2kud3Bvbmlvbi1pbWFnZS1yZW1vdmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkcGFyZW50ICAgPSBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKSxcblx0XHRcdFx0JGltYWdlX2lkID0gJHBhcmVudC5hdHRyKCAnZGF0YS13cG9uaW9uLWltYWdlX2lkJyApLFxuXHRcdFx0XHQkdmFsdWUgICAgPSAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApO1xuXHRcdFx0alF1ZXJ5LmVhY2goICRpbnB1dC52YWwoKS5zcGxpdCggJywnICksIGZ1bmN0aW9uKCAkaywgJHYgKSB7XG5cdFx0XHRcdGlmKCAkdiA9PT0gJGltYWdlX2lkICkge1xuXHRcdFx0XHRcdCR2YWx1ZS5zcGxpY2UoICRrLCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0JGlucHV0LnZhbCggJHZhbHVlLmpvaW4oICcsJyApICk7XG5cdFx0XHQkcGFyZW50LmZhZGVPdXQoICgpID0+ICRwYXJlbnQucmVtb3ZlKCkgKTtcblx0XHRcdCRpbnB1dC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdH0gKTtcblxuXHRcdCRpbnB1dC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXG5cdFx0aWYoICRwcmV2aWV3Lmhhc0NsYXNzKCAnZ2FsbGVyeS1zb3J0YWJsZScgKSApIHtcblx0XHRcdCRwcmV2aWV3LnNvcnRhYmxlKCB7XG5cdFx0XHRcdGl0ZW1zOiAnPiBkaXYnLFxuXHRcdFx0XHRjdXJzb3I6ICdtb3ZlJyxcblx0XHRcdFx0c2Nyb2xsU2Vuc2l0aXZpdHk6IDQwLFxuXHRcdFx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdzb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdGhlbHBlcjogJ2Nsb25lJyxcblx0XHRcdFx0b3BhY2l0eTogMC42NSxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0bGV0ICRpdGVtID0gdWkuaXRlbTtcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ3dpZHRoJywgJGl0ZW0ud2lkdGgoKSApO1xuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnaGVpZ2h0JywgJGl0ZW0uaGVpZ2h0KCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuIiwiLyogZ2xvYmFsIGdvb2dsZTp0cnVlICovXG5pbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJG1hcCAgICAgICAgICAgICAgPSB0aGlzLm9wdGlvbiggJ21hcCcsIHt9ICk7XG5cdFx0JG1hcC5kZXRhaWxzICAgICAgICAgID0gJyNnbWFwX2ZpZWxkc18nICsgdGhpcy5pZCgpO1xuXHRcdCRtYXAuZGV0YWlsc0F0dHJpYnV0ZSA9ICdkYXRhLW1hcC12YWx1ZSc7XG5cdFx0aWYoICd5ZXMnID09PSB0aGlzLm9wdGlvbiggJ3Nob3dfbWFwJyApICkge1xuXHRcdFx0JG1hcC5tYXAgPSAnI2dtYXBfJyArIHRoaXMuaWQoKTtcblx0XHR9XG5cblx0XHRsZXQgJF9pbnN0YW5jZSA9IHRoaXMuZWxlbS5maW5kKCAnZGl2LnNlYXJjaGJveCA+IGlucHV0JyApO1xuXHRcdCRfaW5zdGFuY2UuZ2VvY29tcGxldGUoIHRoaXMuaGFuZGxlX2FyZ3MoICRtYXAgKSApO1xuXHRcdCRfaW5zdGFuY2UuYmluZCggJ2dlb2NvZGU6ZHJhZ2dlZCcsICggZXZlbnQsIGxhdExuZyApID0+IHtcblx0XHRcdGxldCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXHRcdFx0dGhpcy5lbGVtLmZpbmQoICcubWFwX2ZpZWxkcyA6aW5wdXQnICkudmFsKCAnJyApO1xuXHRcdFx0Z2VvY29kZXIuZ2VvY29kZSgge1xuXHRcdFx0XHQnbG9jYXRpb24nOiB7XG5cdFx0XHRcdFx0bGF0OiBwYXJzZUZsb2F0KCBsYXRMbmcubGF0KCkgKSxcblx0XHRcdFx0XHRsbmc6IHBhcnNlRmxvYXQoIGxhdExuZy5sbmcoKSApXG5cdFx0XHRcdH1cblx0XHRcdH0sIGZ1bmN0aW9uKCByZXN1bHRzICkge1xuXHRcdFx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCAnZmlsbERldGFpbHMnLCByZXN1bHRzWyAwIF0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG4vKiBnbG9iYWwgc2V0VGltZW91dDp0cnVlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkYWRkICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IGJ1dHRvbltkYXRhLXdwb25pb24tZ3JvdXAtYWRkXScgKSxcblx0XHRcdCRncm91cF93cmFwID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCcgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gJHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHQkZXJyb3JfbXNnICA9ICR0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC13cmFwJyApLCAnYWNjb3JkaW9uJyApO1xuXG5cdFx0JGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi1jb250ZW50ID4gLndwb25pb24tZ3JvdXAtYWN0aW9uID4gYnV0dG9uJyApXG5cdFx0XHRcdFx0XHQgIC5jbGljaygpO1xuXHRcdH0gKTtcblxuXHRcdCRncm91cF93cmFwLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46ICRhZGQsXG5cdFx0XHRsaW1pdDogcGFyc2VJbnQoICRsaW1pdCApLFxuXHRcdFx0Y2xvbmVfZWxlbTogJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24tZ3JvdXAtYWN0aW9uID4gYnV0dG9uJyxcblx0XHRcdHRlbXBsYXRlOiB0aGlzLm9wdGlvbiggJ2dyb3VwX3RlbXBsYXRlJyApLFxuXHRcdFx0b25SZW1vdmU6IGZ1bmN0aW9uKCAkZWxlbSApIHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG5cdFx0XHRcdGlmKCBqUXVlcnkoICdib2R5JyApLmZpbmQoICdsaW5rI2VkaXRvci1idXR0b25zLWNzcycgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCAnYm9keScgKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCggJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBpZD1cImVkaXRvci1idXR0b25zLWNzc1wiIGhyZWY9XCInICsgJHdwb25pb24uc2V0dGluZ3MoICd3cGVkaXRvcl9idXR0b25zX2NzcycgKSArICdcIiB0eXBlPVwidGV4dC9jc3NcIiBtZWRpYT1cImFsbFwiPicgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRkYXRhID0gJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZ3JvdXBfd3JhcCwgJ2FjY29yZGlvbicgKTtcblx0XHRcdFx0dGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgJGRhdGEgKTtcblx0XHRcdFx0JGRhdGEuZmluZCggJy53cG9uaW9uLWdyb3VwLXJlbW92ZScgKS50aXBweSgpO1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkZ3JvdXBfd3JhcC5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcDpsYXN0LWNoaWxkJyApLCB7IG5lc3RhYmxlOiB0cnVlIH0gKTtcblx0XHRcdFx0d3Bvbmlvbl9maWVsZCggJGRhdGEgKS5yZWxvYWQoKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZGF0YS5maW5kKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InICksICdyZWxvYWRfd3BfZWRpdG9yJyApO1xuXHRcdFx0fSxcblx0XHRcdHNvcnRhYmxlOiB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tYWNjb3JkaW9uLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdG9wOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdHVpLml0ZW0ucmVtb3ZlQXR0ciggJ3N0eWxlJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0sXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCAkaHRtbCA9IGpRdWVyeSggJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgcm9sZT1cImFsZXJ0XCI+JyArICRlcnJvcl9tc2cgKyAnPC9kaXY+JyApLmhpZGUoKTtcblx0XHRcdFx0JGFkZC5iZWZvcmUoICRodG1sICk7XG5cdFx0XHRcdCRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5mYWRlSW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkX19FID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX19FLmZhZGVPdXQoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCRfX0UucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSwgMTAwMCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG4vKmdsb2JhbCBzd2FsOnRydWUqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJF90aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkX3RoaXMuZWxlbWVudCxcblx0XHRcdCRhcmdzICAgICAgID0gJF90aGlzLm9wdGlvbnMoKSxcblx0XHRcdCRpbnB1dCAgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWlucHV0JyApLFxuXHRcdFx0JHJlbW92ZV9idG4gPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLXJlbW92ZV0nICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItYWRkXScgKSxcblx0XHRcdCRwcmV2aWV3ICAgID0gJGVsZW0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cblx0XHRsZXQgJHdvcmsgPSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxlbXM6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0cG9wdXA6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxtOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDcmVhdGVzIEEgTmV3IEluc3RhbmNlIGZvciBUb29sVGlwLlxuXHRcdFx0ICovXG5cdFx0XHRpbml0X3Rvb2x0aXA6ICgpID0+IHtcblx0XHRcdFx0aWYoICRhcmdzLnBvcHVwX3Rvb2x0aXAgIT09ICdmYWxzZScgKSB7XG5cdFx0XHRcdFx0bGV0ICR0cCA9ICggdHlwZW9mICRhcmdzLnBvcHVwX3Rvb2x0aXAgPT09ICdvYmplY3QnICkgPyAkYXJncy5wb3B1cF90b29sdGlwIDoge307XG5cdFx0XHRcdFx0aWYoICR3b3JrLmVsZW1zLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkd29yay5lbGVtcy50aXBweSggJHRwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbml0cyBGb3IgZWFjaCBhbmQgZXZlcnkgUE9QVVAuXG5cdFx0XHQgKiBAcGFyYW0gJGVsbVxuXHRcdFx0ICogQHBhcmFtICRpbnN0YW5jZVxuXHRcdFx0ICovXG5cdFx0XHRpbml0OiBmdW5jdGlvbiggJGVsbSwgJGluc3RhbmNlICkge1xuXHRcdFx0XHQkd29yay5lbG0gICA9ICRlbG07XG5cdFx0XHRcdCR3b3JrLnBvcHVwID0gJGluc3RhbmNlO1xuXHRcdFx0XHQkd29yay5lbGVtcyA9ICR3b3JrLmVsbS5maW5kKCAnc3Bhbi53cG9uaW9uLWljb24tcHJldmlldycgKTtcblx0XHRcdFx0bGV0ICRoZWlnaHQgPSAkd29yay5lbG0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkuY3NzKCAnaGVpZ2h0JyApO1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkuY3NzKCAnaGVpZ2h0JywgJGhlaWdodCApO1xuXHRcdFx0XHQkd29yay5zZWxlY3QoKTtcblx0XHRcdFx0JHdvcmsuaW5wdXQoKTtcblx0XHRcdFx0JHdvcmsuZWxlbXMub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkaWNvbiA9IGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICk7XG5cdFx0XHRcdFx0JGlucHV0LnZhbCggJGljb24gKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHRcdHN3YWwuY2xvc2VNb2RhbCgpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdCR3b3JrLmluaXRfdG9vbHRpcCgpO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogV29ya3Mgd2l0aCBQT1BVUCBJbnB1dCBTZWFyY2guXG5cdFx0XHQgKi9cblx0XHRcdGlucHV0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XScgKS5vbiggJ2tleXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblx0XHRcdFx0XHQkd29yay5lbGVtcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1pY29uJyApLnNlYXJjaCggbmV3IFJlZ0V4cCggJHZhbCwgJ2knICkgKSA8IDAgKSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLmhpZGUoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhbmRsZXMgU2VsZWN0Ym94IGluIHBvcHVwLlxuXHRcdFx0ICovXG5cdFx0XHRzZWxlY3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBzZWxlY3QnICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXHRcdFx0XHRcdCR3cG9uaW9uLmFqYXgoICdpY29uX3BpY2tlcicsIHtcblx0XHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRcdCd3cG9uaW9uLWljb24tbGliJzogJHZhbCxcblx0XHRcdFx0XHRcdFx0XHRlbmFibGVkOiAkYXJncy5lbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCggJHJlcyApID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkd29yay5lbG0sICR3b3JrLnBvcHVwICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuZGlzYWJsZUxvYWRpbmcoKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYoICRpbnB1dC52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBCbHVyIEV2ZW4gLyBjaGFuZ2UgZXZlbiBpbiBpbnB1dGZpZWxkLlxuXHRcdCAqL1xuXHRcdCRpbnB1dC5vbiggJ2tleXVwIGJsdXIgY2hhbmdlIGtleXByZXNzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXG5cdFx0XHRpZiggJHZhbCAhPT0gJycgKSB7XG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICc8aSBjbGFzcz1cIicgKyAkdmFsICsgJ1wiPjwvaT4nICkuc2hvdygpO1xuXHRcdFx0XHQkcmVtb3ZlX2J0bi5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIEFkZCBCdXR0b24gQ2xpY2sgRXZlbnQuXG5cdFx0ICovXG5cdFx0JGFkZF9idG4ub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRwb3B1cCA9IHN3YWwoIHtcblx0XHRcdFx0dGl0bGU6ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1maWVsZC10aXRsZSBoNCcgKS5odG1sKCksXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IHRydWUsXG5cdFx0XHRcdHdpZHRoOiAnNzAwcHgnLFxuXHRcdFx0XHRjdXN0b21DbGFzczogJ3dwb25pb24taWNvbi1waWNrZXItbW9kZWwnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0JF90aGlzLmFqYXgoICdpY29uX3BpY2tlcicsIHtcblx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uU3VjY2VzczogKCAkcmVzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGxldCAkcG9wdXBfZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICRwb3B1cF9lbGVtLCAkcG9wdXAgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvbkVycm9yOiAoKSA9PiAkcG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXG5cdFx0XHRcdFx0XHRvbkFsd2F5czogKCkgPT4gJHBvcHVwLmRpc2FibGVMb2FkaW5nKCksXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBSZW1vdmUgQnV0dG9uIEV2ZW50LlxuXHRcdCAqL1xuXHRcdCRyZW1vdmVfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGlucHV0ICAgICAgID0gJGVsZW0uZmluZCggJ2lucHV0I2ltYWdlX2lkJyApLFxuXHRcdFx0JHByZXZpZXdfYWRkID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcgLndwb25pb24tcHJldmlldy1hZGQnICksXG5cdFx0XHQkcHJldmlldyAgICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3JyApO1xuXG5cdFx0JHRoaXMubWVkaWFfaW5zdGFuY2UgPSBudWxsO1xuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0XHQkcHJldmlld19hZGQuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHByZXZpZXdfYWRkLmhpZGUoKTtcblx0XHRcdFx0JHByZXZpZXcuc2hvdygpO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbWFnZV91cGxvYWRfdXBkYXRlZCcsICRpbnB1dCwgJHByZXZpZXcsICRwcmV2aWV3X2FkZCApO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3X2FkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoICR0aGlzLm1lZGlhX2luc3RhbmNlICkge1xuXHRcdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2UgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHRsaWJyYXJ5OiB7IHR5cGU6ICdpbWFnZScgfSxcblx0XHRcdFx0dGl0bGU6ICR0aGlzLm9wdGlvbiggJ2ZyYW1lX3RpdGxlJywgXCJTZWxlY3QgSW1hZ2VcIiApLFxuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSAkdGhpcy5tZWRpYV9pbnN0YW5jZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpLmF0dHJpYnV0ZXM7XG5cdFx0XHRcdGxldCB0aHVtYm5haWwgID0gKCB0eXBlb2YgYXR0YWNobWVudC5zaXplcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwudXJsIDogYXR0YWNobWVudC51cmw7XG5cdFx0XHRcdCRwcmV2aWV3LmZpbmQoICdpbWcnICkuYXR0ciggJ3NyYycsIHRodW1ibmFpbCApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgYXR0YWNobWVudC51cmwgKTtcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5pZCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9ICk7XG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWltYWdlLXJlbW92ZScgKS5vbiggJ2NsaWNrJywgKCkgPT4gJGlucHV0LnZhbCggJycgKS50cmlnZ2VyKCAnY2hhbmdlJyApICk7XG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkc2V0dGluZ3MgPSB0aGlzLm9wdGlvbiggJ2lucHV0bWFzaycgKTtcblx0XHRcdGlmKCAkc2V0dGluZ3MgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncyA9IHRoaXMuaGFuZGxlX2FyZ3MoICRzZXR0aW5ncywgJ0lucHV0TWFzaycgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmlucHV0bWFzayggJHNldHRpbmdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0aGlzX2VsZW0gPSAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLXRhYi13cmFwICcgKTtcblxuXHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkgYScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRsZXQgJF90aGlzID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLXRhYi1jdXJyZW50JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkuaGlkZSgpO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdGxldCAkdGFiID0gJF90aGlzLmF0dHIoICdkYXRhLXRhYi1uYW1lJyApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2RpdiN3cG9uaW9uLXRhYi0nICsgJHRhYiApLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKS5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50IGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpOmZpcnN0LWNoaWxkIGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gJ3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmdsb2JhbF92YWxpZGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtYWN0aW9uLWNvbnRhaW5lciAgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLWFkZF0nICksXG5cdFx0XHRsaW1pdDogKCAtMSA9PT0gdGhpcy5vcHRpb24oICdsaW1pdCcgKSApID8gbnVsbCA6IHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtcmVtb3ZlXScsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRlbGVtLmZpbmQoICc+IGRpdjpsYXN0LWNoaWxkJyApICk7XG5cdFx0XHR9LFxuXHRcdFx0b25SZW1vdmU6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2tleV92YWx1ZV91cGRhdGVkJywgJGVsZW0gKTtcblx0XHRcdH0sXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGh0bWwgPSBqUXVlcnkoICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPicgKyB0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKSArICc8L2Rpdj4nIClcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWtleXZhbHVlX3dyYXAnICkuYWZ0ZXIoICRodG1sICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnZGl2LmFsZXJ0JyApLmZhZGVJbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRfX0UgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRfX0UuZmFkZU91dCggJ3Nsb3cnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JF9fRS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGVyci5lcnJvci5hcHBlbmRUbyggZXJyLmVsZW1lbnQucGFyZW50KCkucGFyZW50KCkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIHRydWUgIT09IGlzX3VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMCApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy5rZXkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0aWYoIHRydWUgIT09IGlzX3VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gZGl2JyApLmVxKCAxICkuZmluZCggJzppbnB1dCcgKS5ydWxlcyggJ2FkZCcsICRhcmdzLnZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYoIHRydWUgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgJiYgdHJ1ZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJzppbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucnVsZXMoICdhZGQnLCAkYXJncyApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5pbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80UUFZUlhocFpnQUFTVWtxQUFnQUFBQUFBQUFBQUFBQUFQL3NBQkZFZFdOcmVRQUJBQVFBQUFBOEFBRC80UU50YUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THdBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpNdFl6QXhNU0EyTmk0eE5EVTJOakVzSURJd01USXZNREl2TURZdE1UUTZOVFk2TWpjZ0lDQWdJQ0FnSUNJK0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0UxTlBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZiVzB2SWlCNGJXeHVjenB6ZEZKbFpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMM05VZVhCbEwxSmxjMjkxY21ObFVtVm1JeUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiWEJOVFRwUGNtbG5hVzVoYkVSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9UQkdORVZEUWpnNFJEQXhSVEF4TVRoQk1rUkRORVUyTnpoRlFrRXpSRGdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UlVVNU4wRTNPRUUxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSVVU1TjBFM09EazFPVU5GTVRGRk5UZzFSVVZCTUVVNU4wSTJRa1pCTXpJaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5DQlhhVzVrYjNkeklqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZORE0yTURVMlF6SkdRa1ZFUlRBeE1UazFOVVZDUlRBelJVRTRRalJFTlVJaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9FVkdORVZEUWpnNFJEQXhSVEF4TVRoQk1rUkRORVUyTnpoRlFrRXpSRGdpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo3LzdnQU9RV1J2WW1VQVpNQUFBQUFCLzlzQWhBQUdCQVFFQlFRR0JRVUdDUVlGQmdrTENBWUdDQXNNQ2dvTENnb01FQXdNREF3TURCQU1EZzhRRHc0TUV4TVVGQk1USEJzYkd4d2ZIeDhmSHg4Zkh4OGZBUWNIQncwTURSZ1FFQmdhRlJFVkdoOGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeC8vd0FBUkNBRVRBUk1EQVJFQUFoRUJBeEVCLzhRQWlRQUJBQU1BQXdFQkFBQUFBQUFBQUFBQUFBUUZCZ0VEQndJSUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVBQUJBd01EQVFNR0J3OENBd2tBQUFBQkFBSURFUVFGSVJJR01VRVRCMUZoY1lFaU1wR2hzY0ZDZ2hUaFVtSnlrcUt5d2lNemM3TjBGVFlrTjlIVEYrSkRVNU9qVkRWVkZoRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFQL2FBQXdEQVFBQ0VRTVJBRDhBL1ZLQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lPdWVlS0NNeVN1REdEcVNnNkk4dmpYbWpaMi9XcTM1UUVIZXk0dDVQY2xZLzhBRmNEOGlEc1FFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUZOeWVYYmJSUi9mdUovSkgzVUdiM0lPZHlEc2p2TG1QOTNLOXZtRGlFRWxtY3liQlFUa2p6aHArTWhCSVp5YTliUU9aRy95bWhCK0lvSk1mS1cvOTViK3RyditJUVNZK1NZOTN2QjdQT1JVZkVTZ2t4NWpHU2U3Y05INDFXL3BVUVMyUFk5b2V4d2MwOUhBMUJRY29DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSU0zeXFiOXZCRjk2MHUvS05QMVVGYmlvRzNOL0RDOGJtT1B0RHlnQ3BRYVNUajJNZVBaWVl6NVd1UHoxUVJaT0xRRWZzNW5BK2NBb0l6K0wzWTl5Wmg5TlI4eUNNN2oyVkIwakR2T0hOK2NoQkdreG1Tak5IVzhucWFUOGlEb2ZITkdhUFk1cDhoQkNENDNJTmR4MWptNHhwSjk5em5OOUhUNWtGbWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3gvSjU5K1VMZi9DWTF2NjM2eURuaTdDL0poM1pHMXhQckZQblFhOUFRRUJBUVFNNCtPUEdUdWMwRWx1MEVqdE9pREVia0c3eE1aanh0dXc5ZGdQNVd2em9KYUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDREFacWZ2TXJjdUhUZVFQcTZmTWd1T0d4a3Z1SmV3QU5yNjZvTk9nSUNBZzRjNXJXbHppR3RIVW5RSUtYbGs3UmpHdEJyM2p4UWp0QUNESHNKYzROSFVtZzlhRDBwalF4aldqbzBBRDFJT1VCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFmTWtzY2JkejNCbzhwUVJKTXhaczBhUzgvZ2pUNDZJSVV1Ym5kcEcwTTg1MUtDVmk3bVdXT2FTWjFRMDE5QXBxZ3dFMHBkSzkzM3ppZmhLRFk4TllSaTN1UDA1U1I2Z0FnblpQTjJPUForMWR2bFB1eE4xZDYvSWdxTVR5dDg5OFlyc05aRkthUkVhYlQ1Q2ZPZzA2Q3B5ZkpNZlpBc0R1K243STJkQWZPVUdTeUdjeUYrNHRrZVd4RTZSTjBiMTdmS2d0T1V2N3V3eHNIMGhIVnpmUTFvQ0NvdzdUSmxiUnRLL3RXRWp6QndKUWVqSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lLck90ZHRoZDlFRWcrazBRVkNBZ3RHa1E0QzZsSm9USEpyNTZFQkI1L3ZRYXArVHVNWnhpeUZ2UmswKy8yNkRRYmllMzBvTXZKUEpJOHZrY1h2Y2F1YzRra24wbEI4NzBGbk55WExTMnJiWXpFTUFvNXcwYzcwdTZvS3plZzc3RUdTOWdqR3U2Um9wNjBGMXphVWYzU0pqZWpJUlVlUWx6dm1RUitJc01tYmlOS2hqWHVQNUpIem9OK2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnaTVTTHZMTi9sYjdROVNEUFVRS0lKbWZjSU9LdkZhRjdZd1BTNTRKK0pCZ0E0a2dlVkJydVRXRjdMamNZeTNnZEl5R0wyeTNXaExXOW5xUVpaOXZkTTkrRjdmUzBoQjFGeEhYUkJ4dlFONkM0NG13UzU2MkRoVnJkenZXR0VqNDBIeHllY3Z6bDFVMTJ1MmoxQUlMWGdVZTY3dXB2dkkydEgxai9BTmxCdFVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQndCQkI2SFFvTXZQSDNjcjR6OUZ4RmZRZytXaXBIblFPZHk5emliVzMrK2VQekcvZFFZVVNFRUVkUWFoQmNRY3h6c05CMzRlQUtBUGEwajRnRUU5dmlCa0RwTGJRT2IyZ0J3K1Z4UWRnNWhocE5MakV4MVB2T0FZZmxhZzVia09DejZ5Mmpvbkh5YndQelhJRGNQdys3Sk1HUTdqOEY3ZzM5T2lDejQ5Z01mWlg3cmkzdm1YWHNGckd0TFNRVDFPaEtERFgwNWx2WjVDYWw3M0d2clFiVHcraEF4MXpQMnlTN1BVeG9QNjZEVklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0NpekVPeTYzMDBrRmZYMm9JMXRIdnVJMkR0Y0VGWDRpM0IrMDJsdjJOWTZUOG8wL1ZRWStxQlZBcWdWUUtvRlVISWU0ZEhFZXRCeHVRZW04S2hFZkg0SERySzU3eitWdC9WUVhxQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Fncjh6RnV0MnlBYXNkcWZNZnVvSzdHN2Z0c2U0MDErT2lEbmt2RlA3ek5IT3k0N21XTm15aGJ1YVJVbnlqeW9NemNlSCthai9kUGltSG1kdC9TUVFMamlQSVlQZXRIUC9oa1AvUnFnZ1Q0ekoyNHJQYXl4RHl2WTV2eWhCR0pJT3FEamNnYmtEY2dia0hzT0RnN2pEMmNWS0ZzTEtqemtWUHhsQk5RRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVIVmN4Q1cza1o1UjkxQm1qVUduYUVIWXk0dUdlNUk1dm9KQ0R0WmtyMW5TUW4wNi9LZzc0OHpkQSswMFArTDVFRmhiWFZ6TVJ2Z0xHbjZSUDNFSFpQWjJsd0tUd3NsSDRiUTc1VUZmTnhUajAxZDFsR0NlMXRXL0lRZ3I1dkQ3QXZKTFROR2V3TmNDQjhJS0NCTDRhUkVreFg3bWpzRG82L0dIQkJEYjRiNUVYREE2NWlNRlJ2Y04yN2IyMGJUNTBIb0RHaHJRMGRHaWc5U0RsQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUZGZTJNNHVuN0dGelhtclNCcHJxZzVodzl5L1Y1RVk4L1ZCTml3MXUzMzNGNStBSUprY0VNWDd0Z2I2QWcrMEJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJCRnltUmh4dU91Yitkcm5RMnNicFpHc0FMaTFncWFBa0N2clFRT0w4c3hQSkxPUzV4NWUzdVg3SllaZzFzalNSVUVocGNLTzdEVkJieVBESTNQUFJvTGpUekNxQ3A0dnlqSDhreDhsOVl4eXh3eHltQnpadzFydHpXdGRVYlhQRktQSGFndUVCQVFSc2xmdzQvSFhOL01IT2h0WW56U05ZQVhGckdseDJna0N1bmxRWWovclp4WC8ydDkvNWNQL05RU0xIeGk0aGN6Q0tUN1RhQTBBa25qYnQxL2h1a0krQkJ0bzVJNVkyeVJ1RDQzZ09ZOXBCYTVwRlFRUjFCUWZTQWdJQ0FnSUtiam5Lc2ZuL3RuMk9PYVA3RkwzTXZmQnJhdTExYnRjL1RUdFFYS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdwZWJmNGptUDZTWDlBb1BKZU52eUhGTFhEOHFoM1RZdkk5NUJrb2gyYlpuc0g1ckE1dm5CSGFnOXJOekJkWTAzTnU4U3dUUWw4VWpkUTVybTFCQ0RFZUNmK0szWDlkSi9KaVFUTTM0bTJkcGtuNHZFV0UrYXY0aVJMSGIxMmdnMGNBV3RrY1MzdG8yaURuQmVKZG5lNUptS3lsaFBoc2pLYVJSWEZkcmllamR6bXh1QlBaVnZtUWJOQlQ4eC94UE0vMFUvOHNvS3J3cC93WEgvalQvejNvSlBpSmFZeWZpT1JmZk1ZZTVoYysya2RUYzJiNkcwOWhMcUR6b0tYaUdjdWNSNFd4NVNlRTNIMlFTZDFFNTJ3dWo3NHRhTjFIVUFycG9nTjhWSjdrUU94ZUJ1Y2pHV1JtOGxoTGl5R1NSb2NZOXdqY0hGdGFFbmFndk9VYzN4bkhoREZPeDl4a0xnQXcyTUh0UElKcFUrUVYwSGw3RUZIRDRxVFc4clA3OXgrOHhOcklRMXR5OFBlMnZuRG80ajhGVUYveXZsUndlRWp6RnZhaklXcjNzRHl5WFlCSElQWmtCMnZEaFdnOWFDN3Q1NHJpM2l1SVhib3BtTmtqY08xcmhVSDRDZ284WHl3NUhsR1J3dHZhVnQ4YTBkOWZkNW9aRFFiQkh0OHU3NlhZZzQ0ankzL0FQUmYzRC9TZlpmc00zY2Z2TzgzOWZhOTFsT2lDdnp2aVJhMldTa3hlS3NKOHprWWFpYUszQjJ0SXBVYm10a0pJN2FOMDZJT2NGNGoyMTdrbzhYbGNmUGhzak5wREZjQTdYazlBSE9iR1FUMlZhZ3NUeXN4OHlIRzU3WHV4TEIzOXJkOTVYdktEVnV6YUtlNjc2UjZJUHJtWEtvdU5Zais0UGgrMHZkSTJLS0RmM2U0dXFUN1cxL1JyU2VpQ3p4dVFodjhaYlpDUDJZcm1Ga3dxZmREMmgxQ2ZNZ3F1SWNxZHlPQzd1bVduMmUwZ25NTnZLWGw1bERkUzdic1p0MEk3VDhTQy9RRUJBUUVCQVFFQkFRRUZMemIvRWN4L1NTL29GQlI4RHhkbmxmREt6eDk0emZiM0RiaHJ4MmovVVNFT0huYWRRZ3F1RjVTOHdOL2U4THk3Nm1OcjM0eVkrNjVwQmR0RmV4dzlwdm5xRUR3cG5rdCtBWmVlTFNTS2U0ZXcvaE50b3lFRS93Y3NiYUxpNzd4clFibTZuZjMwbjBpR2FOYlh5RHI2MEh6NHkyZHU3amtGOFFHM2R0Y01FRW8wY0E4SGMwSHIyQStwQnRzZE5KTmo3V2FRMWtraGplOCtkelFTZ3IrWS80bm1mNktmK1dVSG5YQ2VGWi9KOGJ0YjIwNVBkNDYza01nWlp4Q1RZemJJNXBwdG1qR3BGZmRRWHJQQ2lXNmxZYzd5Qzh5c01iZzVrTGk1bzByVUV2Zk4xODFFRnZ6MjF0N1hnR1J0cmVNUlFRd01aRkcwVURXdGUwQUJCMmVHOXZGQndyR0NOdE44YnBIbnRMbnZjU1NndzB0MXlwL2lWbWJyQ1dFR1F2YllDSnJia2dDS0tqV2dzckpEcWFmSDUwRnBrN2p4Y3lXUHVMQzY0L1l1dDdsam81QUhzcUE0ZFJXNU9vNmp6b0x2alhHOGpKd0U0RE9SOTFPNWtzSWFYTmVXdExpNk03bUZ3OWtrVTlDQ3Y0VHljMlBCNzRYK2wxeDR5UVN4bnFkdGU2YitWN0E5Q0NiNFdZdVMyNDRjamM2M21YbGRkVFBQVXRKSVo4T3J2V2dwL0RLWjhOaHlpYVA5NUhjU1BaNld0ZVFnbytCWFhpQmI0cVdmQVltMXZJTG1aenBydWR6ZTljOFVCRHF6eG1nN05PMUJPNUxZZUt2SWJhQ0c4d2xyQzYybEUwRThFc2JaV3VBcG81MXcvUS9NRUY5NGh3M05wYjRiazRaUzd4RThadTJ0N1lwYUNSdW40V25yUWNjbWdoNUx5N0hZWnAzMlZ0WlRYazVwVnBNN2U3aXJYeWFFZWxCUjR2a3MxajRXWDlvOHVHUnM1Wk1ZeGxmYURwWGFVUDRMWE9wK0tnOUE0bGhoaHVPMk9Qb0JMRkdEUFR0bGY3VC93QTRvTGRBUUVCQVFFQkFRRUJBUVZITDRKcCtMNVdHQ04wczBscksyT0pnTG5PY1dtZ0RScVNnZytHOXBkMm5DOGRiM2NNbHZjTTc3ZkRLMHNlMnM4aEZXdUFJcURWQkQ4U2VKU1pyR052ckZwR1h4LzdTM0xQZWUwR3BZS2ExN1crZjBvSTNoSmk3MjA0dmQyMlJ0SmJaOGwzSWU1bmpkRzV6SFF4TnJ0Y0FhR2hDQ3FzYlBtWEJMdTZ0N0RIUHplQ25lWklXUkVtVnBOQjBhSHVCcFFPOWtnOWZLZ1h0aHpIbmQ1YVJaSEhPd3VCdDVPOWxqbEo3MTVGV25Sd1k0dXBVRDJRQld1dWlEMDVqR3NhR05GR3RBRFFPZ0FRVmZLNFpwK01aYUdHTjBzMGxwTTJPTmdMbk9jWXlBR2dha2xCVytHbG5kMmZEYkczdTRKTGU0WVp0OE1yWE1lS3pQSXExd0IxQlFhZEJRYyt0cm02NGhrN2UyaWZQUEpHME1pamFYdmNkN1RvMXRTVUgxd2EydUxiaVdNZ3VZbnd6eHcwa2lrYVdQYWR4MExUUWhCbmVVY2Q1SGplVGpsWEdvaGN5eXNFZC9aSHE4QUFhQ29xSEJvNmFnaXVxQ1BkY3I4UXMzYnV4Mk40N1BpcHBoc2t2cDNQWUdOT2hjeHoyUmJUNktueWFvTnhnY2RjWTdFMjFuYzNVbDdjUk4vYlhVem5QYzk3aVNkWEVtZ3JRZVpCNXp6YmlXYmw1VkpiNHlHUTR6UG1CMS9MR3h6bVJ1aWY3UmU0Q2pmdjllcUQxSzNnaXQ0STRJV2hrVUxXeHh0SFFOYUtBZkFndy9oaGpMKzBibkczMXBMYnRudXk2TVRSdVlIc083VnU0Q29RVmRyWWN3NEpmM2NlTHg3c3pnTG1Udlk0WXFtUmhOQjlFUGVIVW9DZHBCcFZCS056ei9sdDVid2kwdU9OWW1KKys1bTd4OGM3NmFiUWFSUE5kYWV6VHk5aURkWmJHd1pMRjNXT20vZFhNVG9pZXBHNFVEdlNEcWd4L2hmaHN2Yk55RjltSXBJcjE1aXM0aEswdFBjMnNZWTB0QnBWcDAxN2FJS3QvRDhqSjRsU1JtQ1Qrd3Z1R1pTU1FzZDNKbVl3bmJ1cHQzZDQ4MUZlaUQwOUFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJCQXorV2l4R0Z2TWxKU2x0RTU3UWZwUDZNYjlaeEFRZVM4UWt5SEhzN2hjeGZQTHJia3JaR1hEajJPZkw3TGoyZGRqdlFTZzlwYzVyV2x6aUEwQ3BKMEFBUWRGbGYyRjlEMzFsY3hYVUlKYVpZWHRrYnVIVWJta2l1cUJlMzloWXc5OWUzTVZyQ1NHaVdaN1kyN2owRzV4QXJvZzdUSkdJKzhMZ0k2YnQ5UnRwMXJYeUlJRVhJK1BUVGkzaHlscEpPU1FJbVR4T2VTT28yaDFVRXU4amhsczU0cG5iSVh4dmJLK29HMXBhUTQxT2dvRUdieDJMd21NNFRrTFhEWGYyMnlFTnk0VDk1SEw3UmpPNGJvdzF1aUNMNFJmNFhCL0dtL1NRYW0reStKc0MwWDE3QmFGM3VpZVZrZGZSdUlRZGxuZjJON0YzMW5jUlhNSjA3eUY3WkcrVHEwa0lNSHl6L0FIUjR6L0RQNlQwRzNibThNNjhOazIvdGplQTdUYkNWaGxyNU5sZDN4SVBqUC84QXdXUi9wWnY1YmtHYThJdjhMZy9qVGZwSU5WZlpiRldHMDMxNUJhQjN1OS9JeU92bzNFZVJCMjIxM2EzVUltdFptVHd1OTJTSndlMDl1aGFTRUhhZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSVBPZkZySnh6eVl2alluWmJpOW1iTmR6UGMxaldSQjJ4cGNYYVVydWQ5VkJ6NGh5OFV5SEQvc3RoazdKMCtOMlNXVVVkeEVYRnNZMkZqUUhWUHNkQjVVR3A0VG5SbStOV2Q2NTI2Y043cTU4dmV4K3k0bjhiM3ZXZ3pmRFIvWU9hNW5qYnZadGJ2OEExMlBIWlE5V2o2cHA5VkE1bVA3OXpYQzhiYU4xcmJIN2RrQjFGQjBhZnFpbjFrRmp6VGpHU3oxL1pSejNrZHR4dUNqNzZMdkhNbGUrcC9CMlU5MENydEtsQm0rUmNkOEpZTVZjQzJ1NEliMXNiekMrRzVmTy92R2pRT1lIU0RWM1hSQmVjSXlGMWUrR3puM0x6TEpGRGN3aDd0U1dzRGcycDh6ZEVFSHc5LzJ3di94YnorV2dtZUZ3dWo0ZjB0Q3dYWmRjZlp6SlVNRWxUdDNVRGpTdlhSQlgyUEErTFdjY2svTmIrM3VzdmNTT2RMSkxkdWlacjAya3VoY1RUVTFRVldKZmdNVjRqNDZQaTE0Wk1mZXRNZDNDMXpuc0JJZFJ1NTNVQ2djTlRRb0ozaVBaWGw5ejNCV2RuTTYzbm5oMkNkbnZNYVh2M3VGTzBNcWd0Nzd3ZzRxL0Z1Z3MyU1FYelcvc3IweVBjNHZIVGUwblpUeTBhRUhSd3pPM21VNEJrNGI1eGZkNCtLNHRueU9OWE9hSWlXbHg3U0s3ZlVnK09BNVQrMWVHRTJSMmh4dGZ0RWpHbm9YQSt5RDZTZ3krQW04Tzd5RitSNWZrWkwzTVhUbk9taWMyNkRZeFU3UURFMFYwOGhvT2dRU0xQTmNZd1hMTWROeFMra2x4MTlJSU1qWVBFd1l3UGNHdGUweXRiV202bzFKMDYwS0QyTkFRRUJBUUVCQVFFQkFRRUJBUUVCQUpBRlRvQWc4cTQvaWNmempsdWF5K1RpTnhpNENJTFNQYzVnTkRSaEJZV25ScmFrZmhJTlYvMHM0SC93RFdmK3ZjZjh4Qm5lQVNPNDd6UExjVW1kU0NaeG1zYTl1MGJoU3ZhNkk2L2lvTFR4SWdmajd2RDhxaEh0NHk0YkhkVTZtM2xORDhwYjlaQjErR3NUOGxrTTF5dWNIZGtKekRhVjZpQ01qL0FJTmI5VkJWYzdsdEwzbjFsaStRWFQ3WEFOZ0VqQUNXc2RJZDN0T2QyVmNOdTdzOHlEblBNOEo4TGlibDFoRmEzbDlMRzV0c3lPVTNSRWhhUTF4TG5TTllBZFNnc2ZEb2crR2x3QWRRTHNINENVSFY0ZS83WVgvNHQ1L0xRZFhEcnE5dFBDYTd1YktvdW9tM0xvbk5GUzBnNnVING8xUVZuRU1SNGFYbUdaZTV5OWpteWtoYys3YmRYTG9YTmZ1UHV0RDJGMm5iclZCSGp5SEdianhMdzBmSDRJNGJHM2YzYnBZMjdCSklkMVhEdEk2QVZRVy9pRmxHNHJ4QXdPUWV4MGtkdkNYeXRZS3U3dmM4UElINExTU2cxV1I4UStKMm1NZmZSNUdHNU8yc1Z2RThPbGM3c2JzOTV2MWdFR2Q0SmpMdTI0RGw3MjdhV1NaSmx4Y01hUlQyTzZJRHRmdmpVK2hCODhLeHN1VDhLYnF3aC9mVGk0YkVEb0M4T3EwZXNoQkU0RmtlQ1B4TGNkbmJPd3RjdFpGMFU3cnlHRmhmUnhvUytRZThQZElKclVJTE4yWjRVL2tsamljRGdySEp6eVByUGR3UlJNWkExcmg3WWVJM2J0bzEwSTdOZFVIb0NBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Q0dUlJcmlDU0NVRXhUTWRISUFTMGxyaFEwYzBnalR0Q0NIaGNGaWNKYUcweGx1TGUzYzh5T1lIT2ZWNUFCSmM4dWQwQTdVRTlCVjNmR01IZDVlRE1UMjI3SlcyMFEzRFh5TUkya2tWYTF3YTdyMmhCTXlHUHM4alpUV1Y1R0pyV2R1MldNa2lvNjlXa0VlcEJ4amNiWTR5eGlzYkdJUTJzSUlqakJKcFVrblZ4Sk9wN1VIUm1lUDRYTlF0aHlsb3k1WXlwWVhWRG0xNjdYdEljSytZb0lPTTRKeEhHeWQ3YVl5SnNuWStUZE00VjA5a3lsOVBVZ2w0dmpXRnhWaFBZV0Z2M05uY0Z6cG91OGtjQ1h0RFhhdmM0aXJSMklQckg4ZXcrT3hjbUxzN2Z1ckNVUEQ0ZDczVjd3VWQ3VG5GMm84NkRzeEdGeG1Jc1JZNDZIdWJWcGM0UjduUDFjYW5WNWNmalFWRng0Y2NKdUxrM0VtTGpFaE80aGo1STJWclgzR09hejRrRXVUaHZHSHZzbmpIeHh1eDcrOHN6Q1hSYkgxRHEvc3kzZHEwZTlWQkl2T1BZZTh5ZHZrN20zRWw5YU5MSUpTNTREV210UnRCRFQ3eDZoQlh4K0h2REk3MzdZekZSQ2F1NEFsNWpCODBSZDNmNXFDOW50NFo3ZVMzbGJ1aGxZWTNzMUZXdUZDTktVMFFSc1Joc2JoN0p0bGpvZTR0V3VMbXg3blAxY2FuVjVjZmpRUXN2d3ZpK1ltNy9JWStPV2MrOUswdWllNm1udE9qTEM3MW9KT0c0NWc4TEc1bU1zNDdZUG9IdmJVdmNCMERudUpjZldVRmlnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDRC8vMlE9PSc7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5iZWZvcmUoICc8c3BhbiBjbGFzcz1cInNwaW5uZXIgd3Bvbmlvbi1zcGlubmVyXCI+PC9zcGFuPicgKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHRoaXMuc2hvd19wcmV2aWV3KCBlICkgKTtcblx0fVxuXG5cdHNob3dfcHJldmlldygpIHtcblx0XHRsZXQgJHZhbHVlID0gdGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkudmFsKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdCR3cG9uaW9uLmFqYXgoICdvZW1iZWQtcHJldmlldycsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR2YWx1ZTogJHZhbHVlLFxuXHRcdFx0fVxuXHRcdH0sICggcmVzICkgPT4ge1xuXHRcdFx0aWYoIGZhbHNlID09PSByZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmh0bWwoIHJlcy5kYXRhICk7XG5cdFx0XHR9XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5yZW1vdmVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnc2VsZWN0MicsIHt9ICk7XG5cdFx0dGhpcy5lbGVtZW50LnNlbGVjdDIoIHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcgKSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGZpZWxkX2RlYnVnKCl7XG5cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3RpemUnLCB7fSApO1xuXG5cdFx0aWYoICFpc191bmRlZmluZWQoICRhcmcudGhlbWUgKSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcyggJGFyZy50aGVtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoICdzZWxlY3RpemUtZGVmYXVsdCcgKTtcblx0XHR9XG5cblx0XHQkYXJnID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApO1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyggJ2Zvcm0tY29udHJvbCcgKS5zZWxlY3RpemUoICRhcmcgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHZhciAkdGhpcyAgICAgPSB0aGlzLmVsZW1lbnQsXG5cdFx0XHQkZW5hYmxlZCAgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZW5hYmxlZCcgKSxcblx0XHRcdCRkaXNhYmxlZCA9ICR0aGlzLmZpbmQoICcud3Bvbmlvbi1kaXNhYmxlZCcgKTtcblxuXHRcdCRlbmFibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGRpc2FibGVkLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICd1aS1zb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0XHR1cGRhdGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdHZhciAkZWwgPSB1aS5pdGVtLmZpbmQoICdpbnB1dCcgKTtcblxuXHRcdFx0XHRpZiggdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tZW5hYmxlZCcgKSApIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2Rpc2FibGVkJywgJ2VuYWJsZWQnICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2VuYWJsZWQnLCAnZGlzYWJsZWQnICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIGF2b2lkIGNvbmZsaWN0XG5cdFx0JGRpc2FibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGVuYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IGNzc191bml0cyBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2Nzc191bml0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5mb250X3dlaWdodF9zdHlsZSA9IGZhbHNlO1xuXHRcdGxldCAkZWwgICAgICAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0bGV0ICRwcmV2aWV3ICAgICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZm9udC1wcmV2aWV3JyApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXRcblx0XHRcdFx0JGZvbnRfZmllbGQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJyApLFxuXHRcdFx0XHQkZm9udCAgICAgICAgICAgICAgPSAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tZm9udC1zZWxlY3RvcicgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRfd2VpZ2h0X3N0eWxlID0gJHRoaXMuZm9udF9zdHlsZSggJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkudmFsKCkgKSxcblx0XHRcdFx0JHRhZyAgICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXRhZyBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRjb2xvciAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZmllbGQtY29sb3JfcGlja2VyIGlucHV0LndwLWNvbG9yLXBpY2tlcicgKS52YWwoKSxcblx0XHRcdFx0JGFsaWduICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWFsaWduIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRTaXplICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXNpemUgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdCRsaW5lSGVpZ2h0ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1saW5lLWhlaWdodCBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0JGJhY2tVUEZvbnQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2t1cC1mb250IHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGRpcmVjdGlvbiAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWRpcmVjdGlvbiBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1sZXR0ZXItc3BhY2luZyBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0aHJlZiAgICAgICAgICAgICAgID0gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT0nICsgJGZvbnQgKyAnOicgKyAkZm9udF93ZWlnaHRfc3R5bGUud2VpZ2h0LFxuXHRcdFx0XHRodG1sICAgICAgICAgICAgICAgPSAnPGxpbmsgaHJlZj1cIicgKyBocmVmICsgJ1wiIGNsYXNzPVwid3BzZi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKyAnXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+JztcblxuXHRcdFx0aWYoIGpRdWVyeSggJy53cG9uaW9uLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdGpRdWVyeSggJy53cG9uaW9uLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSApLmF0dHIoICdocmVmJywgaHJlZiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0alF1ZXJ5KCAnaGVhZCcgKS5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRmb250U2l6ZSA9PT0gJycgfHwgJGZvbnRTaXplID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRmb250U2l6ZSA9ICcxOHB4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYoICRsZXR0ZXJTcGFjaW5nID09PSAnJyB8fCAkbGV0dGVyU3BhY2luZyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyA9ICcxcHgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGxpbmVIZWlnaHQgPT09ICcnIHx8ICRsaW5lSGVpZ2h0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRsaW5lSGVpZ2h0ID0gJzIwcHgnO1xuXHRcdFx0fVxuXG5cblx0XHRcdGxldCAkX2F0dHJzID0gJyBmb250LWZhbWlseTonICsgJGZvbnQgKyAnOyAnICtcblx0XHRcdFx0JyBmb250LXdlaWdodDonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCArICc7ICcgK1xuXHRcdFx0XHQnIGZvbnQtc3R5bGU6JyArICRmb250X3dlaWdodF9zdHlsZS5zdHlsZSArICc7ICcgK1xuXHRcdFx0XHQnIHRleHQtYWxpZ246JyArICRhbGlnbiArICc7ICcgK1xuXHRcdFx0XHQnIGNvbG9yOiAnICsgJGNvbG9yICsgJzsnICtcblx0XHRcdFx0JyBmb250LXNpemU6JyArIGNzc191bml0cyggJGZvbnRTaXplICkgKyAnOyAnICtcblx0XHRcdFx0JyBsZXR0ZXItc3BhY2luZzonICsgY3NzX3VuaXRzKCAkbGV0dGVyU3BhY2luZyApICsgJzsgJyArXG5cdFx0XHRcdCcgbGluZS1oZWlnaHQ6JyArIGNzc191bml0cyggJGxpbmVIZWlnaHQgKSArICc7ICc7XG5cblxuXHRcdFx0bGV0ICR0ZXh0ID0gJHByZXZpZXcudGV4dCgpO1xuXHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcblx0XHRcdCRwcmV2aWV3LmFwcGVuZCggalF1ZXJ5KCAnPCcgKyAkdGFnICsgJz4nICsgJHRleHQgKyAnPC8nICsgJHRhZyArICcgPicgKSApO1xuXHRcdFx0JHByZXZpZXcuZmluZCggJHRhZyApLmF0dHIoIFwic3R5bGVcIiwgJF9hdHRycyApO1xuXG5cdFx0fSApO1xuXHR9XG5cblx0Zm9udF9zdHlsZSggJGluZm8gKSB7XG5cdFx0bGV0ICR3ZWlnaHRfdmFsID0gJzQwMCcsXG5cdFx0XHQkc3R5bGVfdmFsICA9ICdub3JtYWwnO1xuXG5cdFx0c3dpdGNoKCAkaW5mbyApIHtcblx0XHRcdGNhc2UgJzEwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzEwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczMDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzMwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzMwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc1MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzcwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzcwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNzAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc5MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzkwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzkwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaXRhbGljJzpcblx0XHRcdFx0JHN0eWxlX3ZhbCA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHsgd2VpZ2h0OiAkd2VpZ2h0X3ZhbCwgc3R5bGU6ICRzdHlsZV92YWwgfTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkYWRkICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uJyApLFxuXHRcdFx0JGlucHV0ICAgID0gJGVsZW0uZmluZCggJ2lucHV0W3R5cGU9dGV4dF0nICksXG5cdFx0XHQkc2V0dGluZ3MgPSAkdGhpcy5vcHRpb25zKCksIHdwX21lZGlhX2ZyYW1lO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggd3BfbWVkaWFfZnJhbWUgKSB7XG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdHRpdGxlOiAkc2V0dGluZ3Muc2V0dGluZ3MuZnJhbWVfdGl0bGUsXG5cdFx0XHRcdGxpYnJhcnk6IHtcblx0XHRcdFx0XHR0eXBlOiAkc2V0dGluZ3Muc2V0dGluZ3MudXBsb2FkX3R5cGVcblx0XHRcdFx0fSxcblx0XHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdFx0dGV4dDogJHNldHRpbmdzLnNldHRpbmdzLmluc2VydF90aXRsZSxcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9IHdwX21lZGlhX2ZyYW1lLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuYXR0cmlidXRlcy51cmwgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGV4dGFyZWEgPSAkZWxlbS5maW5kKCAndGV4dGFyZWEnICk7XG5cdFx0JGVsZW0uZmluZCggJyN3cG9uaW9uLXdwLWxpbmstcGlja2VyID4gYnV0dG9uJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCR0ZXh0YXJlYS52YWwoICcnICk7XG5cdFx0XHRpZiggIXdpbmRvdy53cExpbmsgKSB7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdHRpdGxlOiAkd3Bvbmlvbi50ZXh0KCAnd3BfbGlua19lcnJvcl90aXRsZScsICdXUCBMaW5rIEpTIExpYiBOb3QgRm91bmQnICksXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LndwTGluay5vcGVuKCAkdGV4dGFyZWEuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXG5cblx0XHQkdGV4dGFyZWEub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkZGF0YSA9IGpRdWVyeSggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkuaHRtbCggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkudmFsKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApLnZhbCggJGRhdGEudGV4dCgpICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdGFyZ2V0JyApLnZhbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEudGV4dCgpICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuaW1wb3J0ICR3cG9uaW9uX2RlYnVnIGZyb20gJy4uL2NvcmUvZGVidWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRkZXAgPSB0aGlzLm9wdGlvbiggJ2RlcGVuZGVuY3knICk7XG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVwLmNvbnRyb2xsZXIgKSB7XG5cdFx0XHRsZXQgJGNvbnRyb2xsZXIgPSAkZGVwLmNvbnRyb2xsZXIgWyAka2V5IF0sXG5cdFx0XHRcdCRjb25kaXRpb24gID0gJGRlcC5jb25kaXRpb24gWyAka2V5IF0sXG5cdFx0XHRcdCR2YWx1ZSAgICAgID0gJGRlcC52YWx1ZSBbICRrZXkgXSxcblx0XHRcdFx0JGZpZWxkICAgICAgPSAnW2RhdGEtZGVwZW5kLWlkPVwiJyArICRjb250cm9sbGVyICsgJ1wiXSc7XG5cdFx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnLm5lc3RhYmxlICkge1xuXHRcdFx0XHRsZXQgJElOUFVUID0gdGhpcy5jb25maWcucGFyZW50LmZpbmQoICdbZGF0YS1kZXBlbmQtaWQ9JyArICRjb250cm9sbGVyICsgJ10nICk7XG5cdFx0XHRcdGlmKCAkSU5QVVQubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHQkZmllbGQgPSAnW2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICR3cG9uaW9uLmZpZWxkSUQoICRJTlBVVCApICsgJ1wiXTppbnB1dCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0X2NvbnR4dCggdGhpcy5jb250eHQuY3JlYXRlUnVsZSggJGZpZWxkLCAkY29uZGl0aW9uLCAkdmFsdWUgKSApO1xuXHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5pbmNsdWRlKCB0aGlzLmVsZW1lbnQgKSApO1xuXHRcdH1cblx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnRGVwZW5kZW5jeSc6ICRkZXAsICdOZXN0YWJsZSBEZXBlbmRlbmN5JzogdGhpcy5jb25maWcubmVzdGFibGUgfSApO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGZpZCAgICAgICAgID0gdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZpZWxkLWpzaWQnICksXG5cdFx0XHQkaXNfbG9hZGluZyAgPSBudWxsLFxuXHRcdFx0d3BvaW1nICAgICAgID0gKCBpbWcsIGNhbGxiYWNrICkgPT4ge1xuXHRcdFx0XHRjb25zdCB0ZXN0RGltZW5zaW9ucyA9IHNldEludGVydmFsKCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGltZy5uYXR1cmFsV2lkdGggKSB7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKCB0ZXN0RGltZW5zaW9ucyApO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDUgKTtcblx0XHRcdH07XG5cdFx0bGV0ICR0b29sdGlwX2tleSA9IGZhbHNlO1xuXHRcdGlmKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWhlbHAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3Bvbmlvbi1oZWxwJztcblx0XHR9IGVsc2UgaWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24td3JhcC10b29sdGlwJyApICkge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJ3dyYXBfdG9vbHRpcCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICRmaWQgKyAndG9vbHRpcCc7XG5cdFx0fVxuXG5cdFx0Ly9sZXQgJHRvb2x0aXBfa2V5ID0gKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWhlbHAnICkgKSA/ICdmaWVsZF9oZWxwJyA6ICRmaWQgKyAndG9vbHRpcCcsXG5cdFx0bGV0ICRhcmcgPSAoIHRydWUgPT09ICR3cG9uaW9uLnZhbGlkX2pzb24oICRmaWQgKSApID8gSlNPTi5wYXJzZSggJGZpZCApIDogdGhpcy5vcHRpb24oICR0b29sdGlwX2tleSwgZmFsc2UgKTtcblxuXG5cdFx0aWYoIGZhbHNlID09PSAkYXJnICkge1xuXHRcdFx0aWYoICR3cG9uaW9uLnZhbGlkX2pzb24oIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweScgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5JyApICk7XG5cdFx0XHR9IGVsc2UgaWYoICR3cG9uaW9uLnZhbGlkX2pzb24oIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweS1hcmdzJyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHktYXJncycgKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ3RpcHB5LWFyZ3MnICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAndGlwcHktYXJncycgKSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCAkYXJnICkge1xuXHRcdFx0JGFyZy5wZXJmb3JtYW5jZSA9IGZhbHNlO1xuXHRcdFx0aWYoICRhcmcuaW1hZ2UgIT09IHVuZGVmaW5lZCAmJiAkYXJnLmltYWdlICE9PSBmYWxzZSApIHtcblx0XHRcdFx0JGFyZy5odG1sICAgICAgICAgICA9ICcjd3BvdHBpbWcnO1xuXHRcdFx0XHQkYXJnLnVwZGF0ZUR1cmF0aW9uID0gMjAwMDtcblx0XHRcdFx0JGFyZy5vblNob3cgICAgICAgICA9IGZ1bmN0aW9uKCBpbnN0YW5jZSApIHtcblx0XHRcdFx0XHRjb25zdCBjb250ZW50ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCAnLnRpcHB5LWNvbnRlbnQnICk7XG5cdFx0XHRcdFx0aWYoICRpc19sb2FkaW5nICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkaXNfbG9hZGluZyA9IHRydWU7XG5cblx0XHRcdFx0XHRmZXRjaCggJGFyZy5pbWFnZSApLnRoZW4oIHJlc3AgPT4gcmVzcC5ibG9iKCkgKS50aGVuKCBibG9iID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IHVybCAgICAgICAgID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXHRcdFx0XHRcdFx0Y29udGVudC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3VybH1cIj5gO1xuXHRcdFx0XHRcdFx0d3BvaW1nKCBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoICdpbWcnICksIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSApO1xuXHRcdFx0XHRcdFx0JGlzX2xvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9ICkuY2F0Y2goICgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gJ0xvYWRpbmcgZmFpbGVkJztcblx0XHRcdFx0XHRcdCRpc19sb2FkaW5nICAgICAgID0gZmFsc2U7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLm9uSGlkZGVuICAgICAgID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y29uc3QgY29udGVudCAgICAgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoICcudGlwcHktY29udGVudCcgKTtcblx0XHRcdFx0XHRjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLnBvcHBlck9wdGlvbnMgID0geyBtb2RpZmllcnM6IHsgcHJldmVudE92ZXJmbG93OiB7IGVuYWJsZWQ6IGZhbHNlIH0sIGhpZGU6IHsgZW5hYmxlZDogZmFsc2UgfSB9IH07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRhcmcgPSB7fTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnRpcHB5KCB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAkdG9vbHRpcF9rZXkgKSApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRpbWFnZSA9ICggaXNfdW5kZWZpbmVkKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICkgKSApID8gdGhpcy5lbGVtZW50LmF0dHIoICdzcmMnICkgOiB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICk7XG5cdFx0c3dhbCgge1xuXHRcdFx0aW1hZ2VVcmw6ICRpbWFnZSxcblx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0YmFja2Ryb3A6IGByZ2JhKDAsMCwwLDAuNDQpYFxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQsIHJhbmRfbWQ1IH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRtY2VfZWRpdG9yICA9IHRpbnlNQ0VQcmVJbml0Lm1jZUluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JHF1aWNrX3RhZ3MgID0gdGlueU1DRVByZUluaXQucXRJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRORVdfSUQgICAgICA9ICd3cG9uaW9uLXdwLWVkaXRvci0nICsgcmFuZF9tZDUoKSxcblx0XHRcdFx0JHRleHRBcmVhICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5jbG9uZSgpLFxuXHRcdFx0XHQkYWN0dWFsX0lEICAgPSAkdGV4dEFyZWEuYXR0ciggJ2lkJyApLFxuXHRcdFx0XHQkYWN0dWFsX2h0bWwgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoKSxcblx0XHRcdFx0JHJlZ2V4ICAgICAgID0gbmV3IFJlZ0V4cCggJGFjdHVhbF9JRCwgXCJnXCIgKTtcblx0XHRcdCRhY3R1YWxfaHRtbCAgICAgPSAkYWN0dWFsX2h0bWwucmVwbGFjZSggJHJlZ2V4LCAkTkVXX0lEICk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCggJGFjdHVhbF9odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLnBhcmVudCgpLmFwcGVuZCggJHRleHRBcmVhICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhOm5vdCgjJyArICRhY3R1YWxfSUQgKyAnKScgKS5yZW1vdmUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuYXR0ciggJ2lkJywgJE5FV19JRCApO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJG1jZV9lZGl0b3IgKSApIHtcblx0XHRcdFx0JG1jZV9lZGl0b3Iuc2VsZWN0b3IgPSAnIycgKyAkTkVXX0lEO1xuXHRcdFx0XHR0aW55bWNlLmluaXQoICRtY2VfZWRpdG9yICk7XG5cdFx0XHRcdHRpbnlNQ0UuZXhlY0NvbW1hbmQoICdtY2VBZGRFZGl0b3InLCBmYWxzZSwgJyMnICsgJE5FV19JRCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHF1aWNrX3RhZ3MgKSApIHtcblx0XHRcdFx0JHF1aWNrX3RhZ3MuaWQgPSAkTkVXX0lEO1xuXHRcdFx0XHRxdWlja3RhZ3MoICRxdWlja190YWdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLm1lbnUoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICdoMi5hamF4LWNvbnRhaW5lciBidXR0b24nLCB0aGlzLnNhdmVfaGFuZGxlciApO1xuXHR9XG5cblxuXHRtZW51KCkge1xuXHRcdGxldCAkZWxlbSA9IHRoaXMuZWxlbWVudDtcblx0XHQkZWxlbS5vbiggJ2NsaWNrJywgJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSBhJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdkcm9wZG93bicgKSApIHtcblx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5pcyggJzp2aXNpYmxlJyApICkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSB1bCcgKS5zbGlkZVVwKCAnZmFzdCcgKTtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJGhyZWYgICAgICAgICAgID0gJHdwb25pb25faGVscGVyLnVybF9wYXJhbXMoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWhyZWYnICkgKSxcblx0XHRcdFx0XHQkcGFyZW50ICAgICAgICAgPSAnd3Bvbmlvbi10YWItJyArICRocmVmWyAncGFyZW50LWlkJyBdLFxuXHRcdFx0XHRcdCRzZWN0aW9uICAgICAgICA9ICggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgKSA/ICRwYXJlbnQgKyAnLScgKyAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gOiBmYWxzZSxcblx0XHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tcGFyZW50LXdyYXBzJyApLFxuXHRcdFx0XHRcdCRjdXJyZW50ICAgICAgICA9ICRlbGVtLmZpbmQoICdkaXYjJyArICRwYXJlbnQgKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdCRwYXJlbnRfYWN0aXZlcy5oaWRlKCk7XG5cblx0XHRcdFx0aWYoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICYmICRocmVmWyAncGFyZW50LWlkJyBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICcgZGl2IycgKyAkc2VjdGlvbiApLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRjdXJyZW50LnNob3coKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGEuYWN0aXZlICcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZSAnICk7XG5cdFx0XHRcdCQoIHRoaXMgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSA+IGxpID4gYScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhW2RhdGEtd3Bvbmlvbi1pZD1cIndwb25pb25fbWVudV8nICsgJGhyZWZbICdwYXJlbnQtaWQnIF0gKyAnXCJdJyApXG5cdFx0XHRcdFx0IC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXG5cdHNhdmVfaGFuZGxlciggZSApIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0aGlzICAgPSB0aGlzLFxuXHRcdFx0JHBhcmVudCA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0JGJhc2UgICA9ICRwYXJlbnQucGFyZW50KCkucGFyZW50KCksXG5cdFx0XHQkaGlkZGVuID0gJHBhcmVudC5maW5kKCAnZGl2Lndwb25pb24tbWV0YWJveC1zZWN1cmUtZGF0YScgKTtcblxuXHRcdCRiYXNlLmJsb2NrKCB7IG1lc3NhZ2U6IG51bGwsIG92ZXJsYXlDU1M6IHsgYmFja2dyb3VuZDogJyMwMDAnLCBvcGFjaXR5OiAwLjcgfSB9ICk7XG5cblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXHRcdGxldCAkZmllbGRzID0gJHBhcmVudC5wYXJlbnQoKS5maW5kKCAnOmlucHV0JyApO1xuXHRcdGxldCAkdmFsdWVzID0gJGZpZWxkcy5zZXJpYWxpemUoKTtcblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblxuXHRcdCR3cG9uaW9uLmFqYXgoICdzYXZlX21ldGFib3gnLCB7IGRhdGE6ICR2YWx1ZXMgfSwgZnVuY3Rpb24oIHJlcyApIHtcblx0XHRcdCRiYXNlLmh0bWwoIHJlcyApO1xuXHRcdFx0JGJhc2UudW5ibG9jaygpO1xuXHRcdFx0d3Bvbmlvbl9maWVsZCggJGJhc2UuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0JCggJ2Rpdi5wb3N0Ym94Lndwb25pb24tbWV0YWJveCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBXUE9uaW9uX01ldGFib3hfTW9kdWxlKCAkKCB0aGlzICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuaW1wb3J0IGlzX3N0cmluZyBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfc3RyaW5nJztcbmltcG9ydCBpc19udWxsIGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19udWxsJztcbmltcG9ydCBpc19vYmplY3RfbGlrZSBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2lzX29iamVjdF9saWtlJztcbmltcG9ydCBpc191bmRlZmluZWQgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9pc191bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5wb3N0X2lkID0gdGhpcy5jb250eHQ7XG5cdFx0bGV0ICRpZCAgICAgID0gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICkgKyAnXycgKyB0aGlzLnBvc3RfaWQ7XG5cdFx0dGhpcy52YWx1ZXMgID0gJHdwb25pb24uZmllbGRBcmdzKCAkaWQsIGZhbHNlICk7XG5cblx0XHRpZiggdGhpcy52YWx1ZXMuaHRtbCApIHtcblx0XHRcdHRoaXMudmFsdWVzLmh0bWwgPSBqUXVlcnkoIHRoaXMudmFsdWVzLmh0bWwgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5odG1sKCB0aGlzLnZhbHVlcy5odG1sLmZpbmQoICc+IGRpdicgKSApO1xuXHRcdH1cblxuXHRcdHdwb25pb25fZmllbGQoIHRoaXMuZWxlbWVudCApLnJlbG9hZCgpO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfd2luZG93X2FyZyB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0b3IgZnJvbSAnLi9jb3JlL3ZhbGlkYXRpb24nO1xuaW1wb3J0IFdQT25pb25fUXVpY2tfRWRpdCBmcm9tICcuL21vZHVsZXMvcXVpY2stZWRpdCc7XG5cbndpbmRvdy53cG9uaW9uX21ldGFib3hfbW9kdWxlID0gcmVxdWlyZSggJy4vbW9kdWxlcy9tZXRhYm94JyApLmRlZmF1bHQ7XG4vL3dpbmRvdy53cG9uaW9uX2N1c3RvbWl6ZXJfbW9kdWxlID0gcmVxdWlyZSggJy4vbW9kdWxlcy9jdXN0b21pemVyJyApLmRlZmF1bHQ7XG53aW5kb3cuJHdwb25pb24gICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvY29yZScgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uX2RlYnVnICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2RlYnVnJyApLmRlZmF1bHQ7XG53aW5kb3cuJHdwb25pb25faGVscGVyICAgICAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApO1xud2luZG93Lndwb25pb25fbmV3X2ZpZWxkICAgICAgPSAoICRjbGFzcyApID0+ICggaXNfd2luZG93X2FyZyggJGNsYXNzICkgKSA/IHdpbmRvd1sgJGNsYXNzIF0gOiBmYWxzZTtcbndpbmRvdy53cG9uaW9uX2ZpZWxkICAgICAgICAgID0gKCAkZWxlbSwgJGNvbnR4dCA9IHt9ICkgPT4gbmV3IFdQT25pb25fRmllbGQoICRlbGVtLCAkY29udHh0ICk7XG53aW5kb3cud3Bvbmlvbl9tb2RhbCAgICAgICAgICA9IHJlcXVpcmUoICcuLi92ZW5kb3JzL2JhY2tib25lLW1vZGFsJyApLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gKCAoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCAkLCAkd3BvICkgPT4ge1xuXHRsZXQgJHdwX2hvb2sgPSB3cC5ob29rcztcblxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoICgpID0+IHtcblx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2luaXQnICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZHMgPSAkd3BfaG9vay5hcHBseUZpbHRlcnMoICd3cG9uaW9uX2ZpZWxkc19mdW5jdGlvbnMnLCB7XG5cdFx0XHR0ZXh0OiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dCcgKS5kZWZhdWx0LFxuXHRcdFx0dGV4dGFyZWE6IHJlcXVpcmUoICcuL2ZpZWxkcy90ZXh0YXJlYScgKS5kZWZhdWx0LFxuXHRcdFx0YmFja2dyb3VuZDogcmVxdWlyZSggJy4vZmllbGRzL2JhY2tncm91bmQnICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3NlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRcdFx0c3dpdGNoZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zd2l0Y2hlcicgKS5kZWZhdWx0LFxuXHRcdFx0Y29sb3JfcGFsZXR0ZTogcmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BhbGV0dGUnICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRcdFx0c2VsZWN0MjogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdDInICkuZGVmYXVsdCxcblx0XHRcdGNob3NlbjogcmVxdWlyZSggJy4vZmllbGRzL2Nob3NlbicgKS5kZWZhdWx0LFxuXHRcdFx0c2VsZWN0aXplOiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0aXplJyApLmRlZmF1bHQsXG5cdFx0XHRpY29uX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2ljb25fcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRmb250X3NlbGVjdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvZm9udF9zZWxlY3RvcicgKS5kZWZhdWx0LFxuXHRcdFx0YWNjb3JkaW9uOiByZXF1aXJlKCAnLi9maWVsZHMvYWNjb3JkaW9uJyApLmRlZmF1bHQsXG5cdFx0XHRncm91cDogcmVxdWlyZSggJy4vZmllbGRzL2dyb3VwJyApLmRlZmF1bHQsXG5cdFx0XHR3cF9lZGl0b3I6IHJlcXVpcmUoICcuL2ZpZWxkcy93cF9lZGl0b3InICkuZGVmYXVsdCxcblx0XHRcdHJlbG9hZF93cF9lZGl0b3I6IHJlcXVpcmUoICcuL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvcicgKS5kZWZhdWx0LFxuXHRcdFx0ZmllbGRzZXQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9maWVsZHNldCcgKS5kZWZhdWx0LFxuXHRcdFx0aW5wdXRtYXNrOiByZXF1aXJlKCAnLi9maWVsZHMvaW5wdXRtYXNrJyApLmRlZmF1bHQsXG5cdFx0XHR3cF9saW5rczogcmVxdWlyZSggJy4vZmllbGRzL3dwX2xpbmtzJyApLmRlZmF1bHQsXG5cdFx0XHRjaGVja2JveF9yYWRpbzogcmVxdWlyZSggJy4vZmllbGRzL2NoZWNrYm94X3JhZGlvJyApLmRlZmF1bHQsXG5cdFx0XHRrZXl2YWx1ZV9wYWlyOiByZXF1aXJlKCAnLi9maWVsZHMva2V5dmFsdWVfcGFpcicgKS5kZWZhdWx0LFxuXHRcdFx0Y29sb3JfcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRkYXRlX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2RhdGVfcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRnYWxsZXJ5OiByZXF1aXJlKCAnLi9maWVsZHMvZ2FsbGVyeScgKS5kZWZhdWx0LFxuXHRcdFx0aW1hZ2VfcG9wdXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvaW1hZ2VfcG9wdXAnICkuZGVmYXVsdCxcblx0XHRcdHVwbG9hZDogcmVxdWlyZSggJy4vZmllbGRzL3VwbG9hZCcgKS5kZWZhdWx0LFxuXHRcdFx0aW1hZ2VfdXBsb2FkOiByZXF1aXJlKCAnLi9maWVsZHMvaW1hZ2VfdXBsb2FkJyApLmRlZmF1bHQsXG5cdFx0XHRqcXVlcnlfdGFiOiByZXF1aXJlKCAnLi9maWVsZHMvanF1ZXJ5X3RhYicgKS5kZWZhdWx0LFxuXHRcdFx0ZmllbGRfdG9vbHRpcDogcmVxdWlyZSggJy4vaGVscGVycy9maWVsZF90b29sdGlwJyApLmRlZmF1bHQsXG5cdFx0XHRjbG9uZV9lbGVtZW50OiByZXF1aXJlKCAnLi9maWVsZHMvY2xvbmVfZWxlbWVudCcgKS5kZWZhdWx0LFxuXHRcdFx0c29ydGVyOiByZXF1aXJlKCAnLi9maWVsZHMvc29ydGVyJyApLmRlZmF1bHQsXG5cdFx0XHRnb29nbGVfbWFwczogcmVxdWlyZSggJy4vZmllbGRzL2dvb2dsZV9tYXBzJyApLmRlZmF1bHQsXG5cdFx0XHR0eXBvZ3JhcGh5OiByZXF1aXJlKCAnLi9maWVsZHMvdHlwb2dyYXBoeScgKS5kZWZhdWx0LFxuXHRcdFx0b2VtYmVkOiByZXF1aXJlKCAnLi9maWVsZHMvb2VtYmVkJyApLmRlZmF1bHQsXG5cdFx0fSApO1xuXHRcdCR3cG8uc2V0dGluZ3NfYXJncyAgICA9ICR3cG8ud2luZG93QXJncyggJ3dwb25pb25fY29yZScsIHt9ICk7XG5cdFx0JHdwby50ZXh0ICAgICAgICAgICAgID0gJHdwby53aW5kb3dBcmdzKCAnd3Bvbmlvbl9pbDhuJywge30gKTtcblx0XHQkd3BvLmRlYnVnX2luZm8gICAgICAgPSBudWxsO1xuXHRcdCR3cG8uZmllbGRfZGVidWdfaW5mbyA9IG51bGw7XG5cblx0XHRpZiggJCggJyN3cG90cGltZycgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHQkKCAnYm9keScgKS5hcHBlbmQoICc8ZGl2IGlkPVwid3BvdHBpbWdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7bWluLXdpZHRoOjMwMHB4O21pbi1oZWlnaHQ6NDAwcHg7XCI+Li48L2Rpdj4nICk7XG5cdFx0fVxuXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWZpZWxkLWRlYnVnLWNvZGUgPiBzdHJvbmcnLCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuXHRcdFx0alF1ZXJ5KCB0aGlzIClcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LWRvd24nIClcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LXJpZ2h0JyApO1xuXHRcdH0gKTtcblxuXHRcdGxldCAkd3BvZl9kaXYgPSAkKCAnLndwb25pb24tZnJhbWV3b3JrOm5vdCgud3Bvbmlvbi1tb2R1bGUtcXVpY2tfZWRpdC1mcmFtZXdvcmspJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcnMgSG9vayBXaXRoIFdpZGdldHMuXG5cdFx0ICovXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ3dpZGdldC1hZGRlZCB3aWRnZXQtdXBkYXRlZCcsIGZ1bmN0aW9uKCBldmVudCwgJHdpZGdldCApIHtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICR3aWRnZXQgKTtcblx0XHRcdHdwb25pb25fZmllbGQoICR3aWRnZXQgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cblx0XHRpZiggJHdwb2ZfZGl2Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX3RoZW1lX2luaXQnLCAkKCB0aGlzICkgKTtcblx0XHRcdH0gKTtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmVuZGVycyBWYWxpZGF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRuZXcgV1BPbmlvbl9WYWxpZGF0b3IoKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYW5kbGVzIEZpZWxkcyBpbml0LlxuXHRcdFx0ICovXG5cdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICQoIHRoaXMgKSApO1xuXHRcdFx0XHR3cG9uaW9uX2ZpZWxkKCAkKCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdH0gKTtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICcjdGhlLWxpc3QnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdGpRdWVyeSggJyN0aGUtbGlzdCcgKS5vbiggJ2NsaWNrJywgJy5lZGl0aW5saW5lJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBwb3N0X2lkID0galF1ZXJ5KCB0aGlzICkuY2xvc2VzdCggJ3RyJyApLmF0dHIoICdpZCcgKTtcblx0XHRcdFx0cG9zdF9pZCAgICAgPSBwb3N0X2lkLnJlcGxhY2UoICdwb3N0LScsICcnICk7XG5cdFx0XHRcdCQoICd0ciNlZGl0LScgKyBwb3N0X2lkICkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRuZXcgV1BPbmlvbl9RdWlja19FZGl0KCBqUXVlcnkoIHRoaXMgKSwgcG9zdF9pZCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0JHdwby5sb2FkaW5nX3NjcmVlbiggJHdwb2ZfZGl2LCBmYWxzZSApO1xuXHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0JyApO1xuXHR9ICkgKTtcblxuXHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fbG9hZGVkJyApO1xuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCBqUXVlcnksICR3cG9uaW9uICk7XG5cbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9qcy9jb3JlL2NvcmUnO1xuXG5jb25zdCBXUE9uaW9uX1dQX01vZGFsID0gQmFja2JvbmUuVmlldy5leHRlbmQoIHtcblx0dGVtcGxhdGVzOiB7fSxcblxuXHRldmVudHM6IHtcblx0XHRcImNsaWNrIC5tZWRpYS1tb2RhbC1jbG9zZVwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tY2FuY2VsXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1va1wiOiBcInNhdmVNb2RhbFwiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLW1lbnUgYVwiOiBcImhhbmRsZV9sZWZ0X21lbnVfY2xpY2tcIixcblx0XHRcImNsaWNrIC5tZWRpYS1yb3V0ZXIgYVwiOiBcImhhbmRsZV90YWJfY2xpY2tcIixcblx0fSxcblxuXHRhY3RpdmVfcGFnZTogbnVsbCxcblxuXHRhY3RpdmVfc2VjdGlvbjogbnVsbCxcblxuXHRpbml0aWFsaXplOiAoIG9wdGlvbnMgKSA9PiB7XG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IGZhbHNlLFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHRcdGh0bWw6IGZhbHNlLFxuXHRcdH0sIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMubGVmdF9tZW51ID0gb3B0aW9uc1sgJ2xlZnRfbWVudScgXTtcblx0XHR0aGlzLmh0bWwgICAgICA9IG9wdGlvbnNbICdodG1sJyBdO1xuXHRcdHRoaXMuaGlkZV9tZW51ID0gb3B0aW9uc1sgJ2hpZGVfbWVudScgXTtcblxuXHRcdF8uYmluZEFsbCggdGhpcywgJ3JlbmRlcicsICdwcmVzZXJ2ZUZvY3VzJywgJ2Nsb3NlTW9kYWwnLCAnc2F2ZU1vZGFsJywgJ2RvTm90aGluZycgKTtcblx0XHR0aGlzLmluaXRfdGVtcGxhdGVzKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblxuXHRpbml0X3RlbXBsYXRlczogKCkgPT4ge1xuXHRcdGxldCAkbSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdtb2RhbCcgKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0gID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnZnJhbWUtbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3JvdXRlci1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy53aW5kb3cgICAgICAgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnaHRtbCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdwYWdlX2NvbnRlbnQnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnc2VjdGlvbl9jb250ZW50JyBdICk7XG5cdH0sXG5cblx0cmVuZGVyOiAoKSA9PiB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdHRoaXMuJGVsLmF0dHIoICd0YWJpbmRleCcsICcwJyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMud2luZG93KCkgKTtcblxuXHRcdGlmKCB0aGlzLmxlZnRfbWVudSApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5sZWZ0X21lbnUsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0oIHtcblx0XHRcdFx0XHR1cmw6IGtleSxcblx0XHRcdFx0XHRuYW1lOiB2YWx1ZSxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRpZiggdGhpcy5odG1sICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmh0bWwsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0bGV0ICRjb250ZW50ID0gJCggdGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50KCB7XG5cdFx0XHRcdFx0aWQ6IGtleSxcblx0XHRcdFx0XHR0aXRsZTogdmFsdWVbICd0aXRsZScgXSxcblx0XHRcdFx0XHRodG1sOiB2YWx1ZVsgJ2h0bWwnIF0sXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzZWN0aW9ucycgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdF8uZWFjaCggdmFsdWVbICdzZWN0aW9ucycgXSwgKCB2YWwsIGsgKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJF9jb250ZW50ID0galF1ZXJ5KCB0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRcdFx0XHRpZDoga2V5ICsgXCJfXCIgKyBrLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiB2YWxbICd0aXRsZScgXSxcblx0XHRcdFx0XHRcdFx0XHRodG1sOiB2YWxbICdodG1sJyBdLFxuXHRcdFx0XHRcdFx0XHR9ICkgKSxcblx0XHRcdFx0XHRcdFx0JF9tZW51ICAgID0gdGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSggeyB1cmw6IGssIG5hbWU6IHZhbFsgJ3RpdGxlJyBdIH0gKTtcblxuXHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbFsgJ3NpZGViYXInIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLWNvbnRlbnQnICkuYXBwZW5kKCAkX2NvbnRlbnQgKTtcblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtcm91dGVyJyApLmFwcGVuZCggJF9tZW51ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzaWRlYmFyJyBdICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbHVlWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0JHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0aGlzLiQoICcubWVkaWEtbWVudSBhOmZpcnN0LWNoaWxkJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IC53cG9uaW9uLW1vZGFsLWNvbnRlbnQ6bm90KC5oaWRkZW4pIC5tZWRpYS1mcmFtZS1yb3V0ZXIgYTpmaXJzdC1jaGlsZCcgKVxuXHRcdFx0LnRyaWdnZXIoICdjbGljaycgKTtcblxuXHRcdGlmKCB0aGlzLmhpZGVfbWVudSA9PT0gdHJ1ZSApIHtcblx0XHRcdHRoaXMuJCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtbWVudScgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub24oIFwiZm9jdXNpblwiLCB0aGlzLnByZXNlcnZlRm9jdXMgKTtcblx0XHRqUXVlcnkoICdib2R5JyApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSApLmFwcGVuZCggdGhpcy4kZWwgKTtcblx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHR9LFxuXG5cdGhhbmRsZV9sZWZ0X21lbnVfY2xpY2s6ICggZSApID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0YXJnZXQgPSAkKCBlLnRhcmdldCApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1tZW51IGEuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0bGV0ICRzaG93X3RhcmdldCA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2IycgKyAkdGFyZ2V0LmF0dHIoICdocmVmJyApICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0JHNob3dfdGFyZ2V0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuXG5cdFx0aWYoICRzaG93X3RhcmdldC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5oYXNDbGFzcyggJ2hpZGRlbicgKSApIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkucmVtb3ZlQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9XG5cdFx0dGhpcy5hY3RpdmVfcGFnZSAgICA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9IG51bGw7XG5cdH0sXG5cblx0aGFuZGxlX3RhYl9jbGljazogKCBlICkgPT4ge1xuXHRcdGxldCAkdGFyZ2V0ICAgICAgICAgPSAkKCBlLnRhcmdldCApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkcGFnZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUtbWVudSBhLmFjdGl2ZScgKS5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJGJhc2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKTtcblxuXG5cdFx0JHRhcmdldC5wYXJlbnQoKS5maW5kKCAnLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCRiYXNlLmZpbmQoICcud3Bvbmlvbi1zZWN0aW9uLW1vZGFsLWNvbnRlbnQnICkuaGlkZSgpO1xuXHRcdCRiYXNlLmZpbmQoICcjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKyAnXycgKyB0aGlzLmFjdGl2ZV9zZWN0aW9uICkuc2hvdygpO1xuXHR9LFxuXG5cdHByZXNlcnZlRm9jdXM6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRpZiggdGhpcy4kZWxbIDAgXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsLmhhcyggZS50YXJnZXQgKS5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHRcdH1cblx0fSxcblxuXHRjbG9zZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vZmYoIFwiZm9jdXNpblwiICk7XG5cdFx0alF1ZXJ5KCBcImJvZHlcIiApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiYXV0b1wiIH0gKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9LFxuXG5cdHNhdmVNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCggZSApO1xuXHR9LFxuXG5cdGRvTm90aGluZzogZnVuY3Rpb24oIGUgKSB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRvcHRpb25zID0ge30gKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGlkOiBmYWxzZSxcblx0XHRcdGRhdGE6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1tb2RhbCcsXG5cdFx0XHRtb2RhbDoge30sXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdH0sICRvcHRpb25zICk7XG5cblx0XHRuZXcgV1BPbmlvbl9XUF9Nb2RhbCggXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogdGhpcy5nZXRfbGVmdF9tZW51KCksXG5cdFx0XHRodG1sOiB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLFxuXHRcdFx0aGlkZV9tZW51OiB0aGlzLm9wdGlvbnNbICdoaWRlX21lbnUnIF0sXG5cdFx0fSwgdGhpcy5vcHRpb25zWyAnbW9kYWwnIF0gKSApO1xuXHR9XG5cblx0Z2V0X2xlZnRfbWVudSgpIHtcblx0XHRsZXQgJHJldHVybiA9IGZhbHNlO1xuXHRcdGlmKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdICkge1xuXHRcdFx0JHJldHVybiA9IHt9O1xuXG5cdFx0XHRfLmVhY2goIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sICggJGRhdGEsICRrZXkgKSA9PiB7XG5cdFx0XHRcdCRyZXR1cm5bICRrZXkgXSA9ICggdHlwZW9mICRkYXRhWyAnbWVudV90aXRsZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/ICRkYXRhWyAnbWVudV90aXRsZScgXSA6ICRkYXRhWyAndGl0bGUnIF07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==