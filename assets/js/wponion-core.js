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
				el.removeClass('hidden');
				el.find(':input').removeClass('wponion-dependent');
			},
			hide: function hide(el) {
				el.addClass('hidden');
				el.find(':input').addClass('wponion-dependent');
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

var _validation = __webpack_require__(/*! ../core/validation */ "./src/js/core/validation.js");

var _validation2 = _interopRequireDefault(_validation);

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
					this.maybe_js_validate_elem(this.option('js_validate', false), this.element);
				}
			}
		}
	}, {
		key: 'maybe_js_validate_elem',
		value: function maybe_js_validate_elem($args, $elem) {
			if (_validation2.default.get_form()) {
				this.js_validate_elem($args, $elem);
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
			$exists = array_merge($exists, { 'PHP Args': {}, 'JS Args': {} });

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
			ignore: '.wponion-dependent,.wponion-validation-ignore',
			errorPlacement: function errorPlacement(error, element) {
				element.trigger('wponion_js_validation_message', { error: error, element: element });
			},
			errorClass: 'wponion-error',
			errorElement: 'p'
		};
		if (this.form) {
			this.form.validate(this.rules);
		}
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

			if (jQuery('form#post').length > 0 && jQuery('input#post_ID').length > 0 && jQuery('input#original_publish').length > 0) {
				//return jQuery( 'form#post' );
			}
			return jQuery('form.wponion-form').length > 0 ? jQuery('form.wponion-form') : false;
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

				if ($elem.find('span.example_output span.value')) {
					$elem.find('span.example_output span.value').html(jQuery(this).val());
				}

				if ($elem.find('input#url')) {
					$elem.find('input#url').val($data.attr('href'));
				}

				if ($elem.find('input#title')) {
					$elem.find('input#title').val($data.text());
				}

				if ($elem.find('input#target')) {
					$elem.find('input#target').val($data.attr('target'));
				}

				if ($elem.find('span.url span.value')) {
					$elem.find('span.url span.value').html($data.attr('href'));
				}

				if ($elem.find('span.title span.value')) {
					$elem.find('span.title span.value').html($data.text());
				}

				if ($elem.find('span.target span.value')) {
					$elem.find('span.target span.value').html($data.attr('target'));
				}
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

/***/ "./src/js/modules/bulk-edit.js":
/*!*************************************!*\
  !*** ./src/js/modules/bulk-edit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (window, document, $) {
	$(window).on('load', function () {
		$(document).on('click', '#bulk_edit', function () {
			var $final_args = { post_ids: [] },
			    $bulk_edit = $('#bulk-edit');

			$bulk_edit.find('#bulk-titles').children().each(function () {
				$final_args.post_ids.push($(this).attr('id').replace(/^(ttle)/i, ''));
			});

			$bulk_edit.find('.wponion-quick-edit-fieldset').each(function () {
				$final_args = (0, _index.array_merge)($(this).serializeObject(), $final_args);
			});

			return _core2.default.ajax('save-bulk-edit', {
				method: 'POST',
				async: false,
				cache: false,
				data: $final_args
			});
		});
	});
}(window, document, jQuery);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WPOnion_Quick_Edit = function (_WPOnion_Module) {
	_inherits(WPOnion_Quick_Edit, _WPOnion_Module);

	function WPOnion_Quick_Edit() {
		_classCallCheck(this, WPOnion_Quick_Edit);

		return _possibleConstructorReturn(this, (WPOnion_Quick_Edit.__proto__ || Object.getPrototypeOf(WPOnion_Quick_Edit)).apply(this, arguments));
	}

	_createClass(WPOnion_Quick_Edit, [{
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

	return WPOnion_Quick_Edit;
}(_module2.default);

exports.default = function (window, document, $, wp) {
	$(window).on('load', function () {
		var $list = $('#the-list');
		if ($list.length > 0) {
			$list.on('click', '.editinline', function () {
				var post_id = jQuery(this).closest('tr').attr('id');
				post_id = post_id.replace('post-', '');
				$('tr#edit-' + post_id).find('.wponion-framework').each(function () {
					new WPOnion_Quick_Edit(jQuery(this), post_id);
				});
			});
		}
	});
}(window, document, jQuery, wp);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.wponion_metabox_module = __webpack_require__(/*! ./modules/metabox */ "./src/js/modules/metabox.js").default;
window.wponion_bulk_edit = __webpack_require__(/*! ./modules/bulk-edit */ "./src/js/modules/bulk-edit.js").default;
window.wponion_quick_edit = __webpack_require__(/*! ./modules/quick-edit */ "./src/js/modules/quick-edit.js").default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvYXJyYXkvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9pbmZvL2luaV9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2ludHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfYm9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC94bWwvdXRmOF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sX2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9fd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Nsb25lX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jb3B5X3RvX2NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGV2aWNlX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGlmZl9kYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19hZnRlcl9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2JlZm9yZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19zYW1lX2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdGFiX2ZvY3VzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3dpbmRvd19hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvb2tnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9waXBlX2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9wbGFpbl9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcXVlcnlfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3JhbmRfbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3Njcm9sbF9wb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3RvX3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90aW1lX3Rha2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90b19qc19mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3VybF9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdmFsaWRhdGVTaW5nbGVKU0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvd2luZG93X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93cmFwX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZGF0ZV9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9maWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZvbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ29vZ2xlX21hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ljb25fcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2Vfc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2VfdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW5wdXRtYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0aXplLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9maWVsZF90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2ltYWdlX3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvYnVsay1lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21ldGFib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvcXVpY2stZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3JzL2JhY2tib25lLW1vZGFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIl0sIm5hbWVzIjpbIkpTX1BhcnNlX0FyZ3MiLCIkYXJncyIsIiRkZWZhdWx0cyIsIiRpc19uZXN0ZWQiLCJhcmdzIiwiZGVmYXVsdHMiLCJuZXN0ZWQiLCJwYXJzZSIsIiRfa2V5IiwiJGlzX2RlZXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXlfbWVyZ2UiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImFyZ2wiLCJsZW5ndGgiLCJhcmciLCJyZXRPYmoiLCJrIiwiYXJnaWwiLCJqIiwiaSIsImN0IiwidG9TdHIiLCJPYmplY3QiLCJ0b1N0cmluZyIsInJldEFyciIsImNvbmNhdCIsImhhc093blByb3BlcnR5IiwicGFyc2VJbnQiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsImFycmF5X21lcmdlX3JlY3Vyc2l2ZSIsImFycjEiLCJhcnIyIiwiYXJyYXlNZXJnZSIsInJlcXVpcmUiLCJpZHgiLCJwdXNoIiwiYXJyYXlfdmFsdWVzIiwiaW5wdXQiLCJ0bXBBcnIiLCJrZXkiLCJjb3VudCIsIm1peGVkVmFyIiwibW9kZSIsImNudCIsImluX2FycmF5IiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcmdTdHJpY3QiLCJzdHJpY3QiLCJtaWNyb3RpbWUiLCJnZXRBc0Zsb2F0IiwicyIsIm5vdyIsInBlcmZvcm1hbmNlIiwidGltaW5nIiwibmF2aWdhdGlvblN0YXJ0IiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lIiwiZmxvb3IiLCJjYWxsX3VzZXJfZnVuYyIsImNiIiwicGFyYW1ldGVycyIsImNhbGxVc2VyRnVuY0FycmF5IiwiY2FsbF91c2VyX2Z1bmNfYXJyYXkiLCIkZ2xvYmFsIiwid2luZG93IiwiZ2xvYmFsIiwiZnVuYyIsInNjb3BlIiwidmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4iLCJtYXRjaCIsIkZ1bmN0aW9uIiwiZXZhbCIsIkVycm9yIiwiYXBwbHkiLCJmdW5jdGlvbl9leGlzdHMiLCJmdW5jTmFtZSIsImluaV9nZXQiLCJ2YXJuYW1lIiwiJGxvY3V0dXMiLCJwaHAiLCJpbmkiLCJsb2NhbF92YWx1ZSIsInVuZGVmaW5lZCIsImV4cGxvZGUiLCJkZWxpbWl0ZXIiLCJzdHJpbmciLCJsaW1pdCIsInNwbGl0Iiwiam9pbiIsInNwbGljZSIsImltcGxvZGUiLCJnbHVlIiwicGllY2VzIiwicmV0VmFsIiwidEdsdWUiLCJtZDUiLCJzdHIiLCJoYXNoIiwiY3J5cHRvIiwibWQ1c3VtIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsImUiLCJ1dGY4RW5jb2RlIiwieGwiLCJfcm90YXRlTGVmdCIsImxWYWx1ZSIsImlTaGlmdEJpdHMiLCJfYWRkVW5zaWduZWQiLCJsWCIsImxZIiwibFg0IiwibFk0IiwibFg4IiwibFk4IiwibFJlc3VsdCIsIl9GIiwieCIsInkiLCJ6IiwiX0ciLCJfSCIsIl9JIiwiX0ZGIiwiYSIsImIiLCJjIiwiZCIsImFjIiwiX0dHIiwiX0hIIiwiX0lJIiwiX2NvbnZlcnRUb1dvcmRBcnJheSIsImxXb3JkQ291bnQiLCJsTWVzc2FnZUxlbmd0aCIsImxOdW1iZXJPZldvcmRzVGVtcDEiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAyIiwibE51bWJlck9mV29yZHMiLCJsV29yZEFycmF5IiwibEJ5dGVQb3NpdGlvbiIsImxCeXRlQ291bnQiLCJjaGFyQ29kZUF0IiwiX3dvcmRUb0hleCIsIndvcmRUb0hleFZhbHVlIiwid29yZFRvSGV4VmFsdWVUZW1wIiwibEJ5dGUiLCJsQ291bnQiLCJzdWJzdHIiLCJBQSIsIkJCIiwiQ0MiLCJERCIsIlMxMSIsIlMxMiIsIlMxMyIsIlMxNCIsIlMyMSIsIlMyMiIsIlMyMyIsIlMyNCIsIlMzMSIsIlMzMiIsIlMzMyIsIlMzNCIsIlM0MSIsIlM0MiIsIlM0MyIsIlM0NCIsInRlbXAiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlX3N0ciIsImFycmF5Iiwic3RyQXJyIiwiU3RyaW5nIiwicmVwbGFjZSIsInNhbCIsInAiLCJsYXN0T2JqIiwiY2hyIiwidG1wIiwidmFsdWUiLCJwb3N0TGVmdEJyYWNrZXRQb3MiLCJrZXlzIiwia2V5c0xlbiIsIl9maXhTdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGFyQXQiLCJpbmRleE9mIiwic3RyX3JlcGxhY2UiLCJzZWFyY2giLCJzdWJqZWN0IiwiY291bnRPYmoiLCJyZXBsIiwic2wiLCJmbCIsImYiLCJyIiwicmEiLCJzYSIsInN0cnRvbG93ZXIiLCJzdHJ0b3VwcGVyIiwidG9VcHBlckNhc2UiLCJiYXNlNjRfZGVjb2RlIiwiZW5jb2RlZERhdGEiLCJkZWNvZGVVVEY4c3RyaW5nIiwibWFwIiwiYXRvYiIsIkJ1ZmZlciIsImI2NCIsIm8xIiwibzIiLCJvMyIsImgxIiwiaDIiLCJoMyIsImg0IiwiYml0cyIsImRlYyIsImZyb21DaGFyQ29kZSIsImJhc2U2NF9lbmNvZGUiLCJzdHJpbmdUb0VuY29kZSIsImVuY29kZVVURjhzdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b1NvbGlkQnl0ZXMiLCJwMSIsImJ0b2EiLCJlbmMiLCJib29sdmFsIiwiaXNBcnJheSIsImVtcHR5IiwidW5kZWYiLCJsZW4iLCJlbXB0eVZhbHVlcyIsImZsb2F0dmFsIiwicGFyc2VGbG9hdCIsImludHZhbCIsImJhc2UiLCJ0eXBlIiwiaXNOYU4iLCJpc0Zpbml0ZSIsImNlaWwiLCJpc19hcnJheSIsIl9nZXRGdW5jTmFtZSIsImZuIiwibmFtZSIsImV4ZWMiLCJfaXNBcnJheSIsImluaVZhbCIsImFzU3RyaW5nIiwiYXNGdW5jIiwiaXNfYm9vbCIsImlzX2NhbGxhYmxlIiwic3ludGF4T25seSIsImNhbGxhYmxlTmFtZSIsIm1ldGhvZCIsInZhbGlkRnVuY3Rpb25OYW1lIiwiZ2V0RnVuY05hbWUiLCJpc19mbG9hdCIsImlzX2ludCIsImlzX251bGwiLCJpc19udW1lcmljIiwid2hpdGVzcGFjZSIsImlzX29iamVjdCIsImlzX3NjYWxhciIsInRlc3QiLCJpc19zdHJpbmciLCJpc3NldCIsImwiLCJ1dGY4X2VuY29kZSIsImFyZ1N0cmluZyIsInV0ZnRleHQiLCJzdGFydCIsImVuZCIsInN0cmluZ2wiLCJuIiwiYzEiLCJSYW5nZUVycm9yIiwiYzIiLCJhcnIiLCJsaXN0SUQiLCJ0YWciLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIml0ZW0iLCIkZGF0YSIsInJldHVybl9odG1sIiwiSSIsIksiLCIkdmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiJGFycmF5IiwiJGtleSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdGVkIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJzZWxlY3RvciIsInN0ZXAiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJfc3RlcCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWJzIiwiaXNOdW1iZXJpYyIsInZhbCIsImNoZWNrUHgiLCJjaGVja1BjdCIsImNoZWNrRW0iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYXRlSW5pdGlhbCIsImRhdGVGaW5hbCIsIm1zIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIm1pbGxpc2Vjb25kIiwiZW50cmllcyIsImZpbHRlciIsImRhdGVBIiwiZGF0ZUIiLCIkZWxlbSIsImpRdWVyeSIsInRvSVNPU3RyaW5nIiwiaGlkZGVuIiwiJE9LUyIsInByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWUiLCJwcm9wZXJ0eSIsInNoaWZ0IiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJkYXRhIiwiY3JlYXRlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwibG9jYXRpb24iLCJyYW5kb20iLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJjYWxsYmFjayIsInRpdGxlIiwidGltZUVuZCIsIiRhcmdzX2tleSIsIiRjb250ZW50c19rZXkiLCJ1cmwiLCJyZWR1Y2UiLCJ2IiwiJHN0cmluZyIsIiRjb250ZW50cyIsIiRfayIsIldQT25pb24iLCIkdHlwZSIsIndwb25pb25fZmllbGRzIiwiYXR0ciIsIiR3aGVyZV90b19maW5kIiwiJGlkIiwiZmllbGRJRCIsImZpbmQiLCIkdmFyX2lkIiwiJGRlZmF1bHQiLCJpc0ZpZWxkIiwid2luZG93QXJncyIsInRleHQiLCIkaXNfc2hvdyIsImZhZGVJbiIsImZhZGVPdXQiLCIkaGFuZGxlIiwiJGpzb24iLCJkZWJ1Z19pbmZvIiwiJGRlZmluZWRfdmFycyIsIm9uIiwicHJldmVudERlZmF1bHQiLCJzd2FsIiwidHh0IiwiaHRtbCIsInNob3dDb25maXJtQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJzaG93Q2xvc2VCdXR0b24iLCJhbmltYXRpb24iLCJ3aWR0aCIsIm9uQmVmb3JlT3BlbiIsImVuYWJsZUxvYWRpbmciLCJvbk9wZW4iLCJqc29uVmlldyIsImRpc2FibGVMb2FkaW5nIiwidGhlbiIsInJlc3VsdCIsInNldHRpbmdzX2FyZ3MiLCJvcHRpb24iLCJpc19kZWJ1ZyIsImZpZWxkX2RlYnVnX2luZm8iLCIkdmFycyIsIiR1dHh0IiwiJG10eHQiLCIkYWN0aW9uIiwiJG9uU3VjY2VzcyIsIiRvbkVycm9yIiwiJG9uQWx3YXlzIiwib25TdWNjZXNzIiwib25BbHdheXMiLCJvbkVycm9yIiwiJGFqYXgiLCJhamF4IiwiZG9uZSIsInJlcyIsImZhaWwiLCJhbHdheXMiLCJjb21waWxlZCIsIm9wdGlvbnMiLCJldmFsdWF0ZSIsImludGVycG9sYXRlIiwiZXNjYXBlIiwidmFyaWFibGUiLCJfIiwidGVtcGxhdGUiLCIkZWxlbWVudCIsInBhcmFtIiwibmVzdGFibGUiLCJwYXJlbnQiLCIkdGhpcyIsIiRlbCIsImluaXQiLCJydWxlc2V0IiwiZGVwcyIsImNyZWF0ZVJ1bGVzZXQiLCJkZXBSb290IiwiZW5hYmxlIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImFkZENsYXNzIiwiY2hlY2tUYXJnZXRzIiwiaW5zdGFuY2UiLCJlYWNoIiwiV1BPbmlvbl9EZXBlbmRlbmN5IiwiaXNfanF1ZXJ5IiwiaXNfdW5kZWZpbmVkIiwiJHNlbGVjdG9yIiwiJGNvbnRleHQiLCIkY29uZmlnIiwic2V0X2FyZ3MiLCJmaWVsZF9kZWJ1ZyIsImNvbmZpZyIsImpzX2Vycm9yX2hhbmRsZXIiLCJqc192YWxpZGF0b3IiLCJlcnIiLCJlcnJvciIsImFwcGVuZFRvIiwiZWxlbWVudCIsImpzX2Vycm9yIiwibWF5YmVfanNfdmFsaWRhdGVfZWxlbSIsIldQT25pb25fVmFsaWRhdGlvbiIsImdldF9mb3JtIiwianNfdmFsaWRhdGVfZWxlbSIsInJ1bGVzIiwiJGFyZyIsIiR3cG9uaW9uIiwianNfZnVuYyIsIiRleGlzdHMiLCIkd3Bvbmlvbl9kZWJ1ZyIsImdldCIsImlkIiwiYWRkIiwiJGluZm8iLCIkYXJyIiwiRmllbGQiLCJNb2R1bGUiLCJVbmlxdWUiLCIkZm91bmQiLCJoYXNDbGFzcyIsIiRJRCIsInRpcHB5IiwiYXJyb3ciLCJhcnJvd1R5cGUiLCJwbGFjZW1lbnQiLCJ0aGVtZSIsIiRkIiwiJG5vdGljZV90eHQiLCJfYXJncyIsIiRhamF4X2tleSIsInBsdWdpbl9pZCIsIiRfaW5zdGFuY2VzIiwiJGNsYXNzIiwiZ2V0X2ZpZWxkX2NsYXNzIiwid3AiLCJob29rcyIsImFkZEFjdGlvbiIsImluaXRfZmllbGQiLCJXUE9uaW9uX01vZHVsZSIsInNldF9lbGVtZW50Iiwic2V0X2NvbnR4dCIsIm1vZHVsZV9pbml0IiwiZWxlbSIsIiRjb250eHQiLCJjb250ZXh0IiwiV1BPbmlvbl9WYWxpZGF0b3IiLCJmb3JtIiwiaW52YWxpZEhhbmRsZXIiLCJzaWJsaW5ncyIsInJlbW92ZSIsImJlZm9yZSIsImlnbm9yZSIsImVycm9yUGxhY2VtZW50IiwidHJpZ2dlciIsImVycm9yQ2xhc3MiLCJlcnJvckVsZW1lbnQiLCJ2YWxpZGF0ZSIsImFjY29yZGlvbiIsImhlYWRlciIsImNvbGxhcHNpYmxlIiwiYW5pbWF0ZSIsImhlaWdodFN0eWxlIiwiYWN0aXZlIiwiaWNvbnMiLCJJRHRvRWxlbWVudCIsIldQT25pb25fRmllbGQiLCIkaW5wdXRzIiwicmVtb3ZlQXR0ciIsInByb3AiLCJjaG9zZW4iLCJoYW5kbGVfYXJncyIsIiRjbG9uZV93cmFwIiwiJGFkZF9idG4iLCIkbGltaXQiLCIkZXJvcl9tc2ciLCJlcnJvcl9tc2ciLCIkc29ydCIsInNvcnQiLCJpdGVtcyIsImhhbmRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJ1aSIsImNzcyIsInN0b3AiLCJXUE9uaW9uQ2xvbmVyIiwiYWRkX2J0biIsImNsb25lX2VsZW0iLCJyZW1vdmVfYnRuIiwidGVtcGxhdGVBZnRlclJlbmRlciIsIiRlIiwid3Bvbmlvbl9maWVsZCIsInJlbG9hZCIsInNvcnRhYmxlIiwib25MaW1pdFJlYWNoZWQiLCIkaHRtbCIsInByZXBlbmQiLCIkX19FIiwic2V0VGltZW91dCIsInNob3dfYW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsImhpZGVfYW5pbWF0aW9uIiwid3BDb2xvclBpY2tlciIsIiRzZXR0aW5ncyIsIiR2aWV3IiwiYXBwZW5kIiwicGx1Z2lucyIsInJhbmdlUGx1Z2luIiwiZmxhdHBpY2tyIiwiJHJldHVybiIsIiRfZCIsIiR2YWwiLCJjdXJyZW50VGFyZ2V0Iiwid2Vic2FmZSIsImZvbnRzIiwiYnVpbGRfb3B0aW9ucyIsInZhcmlhbnRzIiwiZ29vZ2xlX2ZvbnRzIiwiJHZhcmlhbnQiLCIkaHRtbF90ZW1wIiwiJGlucHV0IiwiJHByZXZpZXciLCJ3cF9tZWRpYV9mcmFtZSIsIiRhZGQiLCIkZWRpdCIsIiRjbGVhciIsIiRtYW5hZ2UiLCJpZHMiLCJ3aGF0Iiwic3RhdGUiLCJtZWRpYSIsImdhbGxlcnkiLCJsaWJyYXJ5IiwiZnJhbWUiLCJtdWx0aXBsZSIsIm9wZW4iLCJlZGl0Iiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJzZWxlY3RlZElkcyIsIm1vZGVscyIsImF0dGFjaG1lbnQiLCJ0b0pTT04iLCJzaXplcyIsInRodW1iIiwidGh1bWJuYWlsIiwiJHRtcCIsInRhcmdldCIsIiRwYXJlbnQiLCIkaW1hZ2VfaWQiLCIkayIsIiR2IiwiY3Vyc29yIiwic2Nyb2xsU2Vuc2l0aXZpdHkiLCJmb3JjZVBsYWNlaG9sZGVyU2l6ZSIsImhlbHBlciIsIm9wYWNpdHkiLCIkaXRlbSIsImhlaWdodCIsIiRtYXAiLCJkZXRhaWxzIiwiZGV0YWlsc0F0dHJpYnV0ZSIsIiRfaW5zdGFuY2UiLCJnZW9jb21wbGV0ZSIsImJpbmQiLCJsYXRMbmciLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJsYXQiLCJsbmciLCIkZ3JvdXBfd3JhcCIsIiRlcnJvcl9tc2ciLCJjbGljayIsIm9uUmVtb3ZlIiwic2V0dGluZ3MiLCIkX3RoaXMiLCIkcmVtb3ZlX2J0biIsIiR3b3JrIiwiZWxlbXMiLCJwb3B1cCIsImVsbSIsImluaXRfdG9vbHRpcCIsInBvcHVwX3Rvb2x0aXAiLCIkdHAiLCIkZWxtIiwiJGluc3RhbmNlIiwiJGhlaWdodCIsIiRpY29uIiwiY2xvc2VNb2RhbCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsIiRyZXMiLCJzdWNjZXNzIiwicmVzZXRWYWxpZGF0aW9uTWVzc2FnZSIsInNob3dWYWxpZGF0aW9uRXJyb3IiLCIkcG9wdXAiLCJhbGxvd091dHNpZGVDbGljayIsImN1c3RvbUNsYXNzIiwiJHBvcHVwX2VsZW0iLCIkcHJldmlld19hZGQiLCJtZWRpYV9pbnN0YW5jZSIsImhvb2siLCJkb0FjdGlvbiIsImZpcnN0IiwiYXR0cmlidXRlcyIsImlucHV0bWFzayIsIiR0aGlzX2VsZW0iLCIkdGFiIiwiZ2xvYmFsX3ZhbGlkYXRlIiwiYWZ0ZXIiLCJlcSIsImltYWdlIiwic2hvd19wcmV2aWV3Iiwic2VsZWN0MiIsInNlbGVjdGl6ZSIsIiRlbmFibGVkIiwiJGRpc2FibGVkIiwiY29ubmVjdFdpdGgiLCJmb250X3dlaWdodF9zdHlsZSIsIiRmb250X2ZpZWxkIiwiJGZvbnQiLCIkZm9udF93ZWlnaHRfc3R5bGUiLCJmb250X3N0eWxlIiwiJHRhZyIsIiRjb2xvciIsIiRhbGlnbiIsIiRmb250U2l6ZSIsIiRsaW5lSGVpZ2h0IiwiJGJhY2tVUEZvbnQiLCIkZGlyZWN0aW9uIiwiJGxldHRlclNwYWNpbmciLCJocmVmIiwid2VpZ2h0IiwiJF9hdHRycyIsIiR0ZXh0IiwiJHdlaWdodF92YWwiLCIkc3R5bGVfdmFsIiwiZnJhbWVfdGl0bGUiLCJ1cGxvYWRfdHlwZSIsImJ1dHRvbiIsImluc2VydF90aXRsZSIsIiR0ZXh0YXJlYSIsIndwTGluayIsIiRkZXAiLCJjb250cm9sbGVyIiwiJGNvbnRyb2xsZXIiLCIkY29uZGl0aW9uIiwiY29uZGl0aW9uIiwiJGZpZWxkIiwiJElOUFVUIiwiY29udHh0IiwiY3JlYXRlUnVsZSIsImluY2x1ZGUiLCIkZmlkIiwiJGlzX2xvYWRpbmciLCJ3cG9pbWciLCJpbWciLCJ0ZXN0RGltZW5zaW9ucyIsIm5hdHVyYWxXaWR0aCIsIiR0b29sdGlwX2tleSIsInZhbGlkX2pzb24iLCJ1cGRhdGVEdXJhdGlvbiIsIm9uU2hvdyIsImNvbnRlbnQiLCJmZXRjaCIsInJlc3AiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicG9wcGVySW5zdGFuY2UiLCJjYXRjaCIsIm9uSGlkZGVuIiwicG9wcGVyT3B0aW9ucyIsIm1vZGlmaWVycyIsInByZXZlbnRPdmVyZmxvdyIsIiRpbWFnZSIsImltYWdlVXJsIiwiYmFja2dyb3VuZCIsImJhY2tkcm9wIiwiJG1jZV9lZGl0b3IiLCJ0aW55TUNFUHJlSW5pdCIsIm1jZUluaXQiLCIkcXVpY2tfdGFncyIsInF0SW5pdCIsIiRORVdfSUQiLCIkdGV4dEFyZWEiLCJjbG9uZSIsIiRhY3R1YWxfSUQiLCIkYWN0dWFsX2h0bWwiLCIkcmVnZXgiLCJ0aW55bWNlIiwidGlueU1DRSIsInF1aWNrdGFncyIsIiQiLCIkZmluYWxfYXJncyIsInBvc3RfaWRzIiwiJGJ1bGtfZWRpdCIsImNoaWxkcmVuIiwic2VyaWFsaXplT2JqZWN0IiwiYXN5bmMiLCJjYWNoZSIsIldQT25pb25fTWV0YWJveF9Nb2R1bGUiLCJtZW51Iiwic2F2ZV9oYW5kbGVyIiwibmV4dCIsImlzIiwic2xpZGVUb2dnbGUiLCJzbGlkZVVwIiwiJGhyZWYiLCIkd3Bvbmlvbl9oZWxwZXIiLCJ1cmxfcGFyYW1zIiwiJHNlY3Rpb24iLCIkcGFyZW50X2FjdGl2ZXMiLCIkY3VycmVudCIsIiRiYXNlIiwiJGhpZGRlbiIsImJsb2NrIiwibWVzc2FnZSIsIm92ZXJsYXlDU1MiLCIkZmllbGRzIiwiJHZhbHVlcyIsInNlcmlhbGl6ZSIsInVuYmxvY2siLCJXUE9uaW9uX1F1aWNrX0VkaXQiLCJwb3N0X2lkIiwidmFsdWVzIiwiZmllbGRBcmdzIiwiJGxpc3QiLCJjbG9zZXN0Iiwid3Bvbmlvbl9tZXRhYm94X21vZHVsZSIsImRlZmF1bHQiLCJ3cG9uaW9uX2J1bGtfZWRpdCIsIndwb25pb25fcXVpY2tfZWRpdCIsIndwb25pb25fbmV3X2ZpZWxkIiwid3Bvbmlvbl9tb2RhbCIsIiR3cG8iLCIkd3BfaG9vayIsImFwcGx5RmlsdGVycyIsInRleHRhcmVhIiwiaW1hZ2Vfc2VsZWN0Iiwic3dpdGNoZXIiLCJjb2xvcl9wYWxldHRlIiwiaWNvbl9waWNrZXIiLCJmb250X3NlbGVjdG9yIiwiZ3JvdXAiLCJ3cF9lZGl0b3IiLCJyZWxvYWRfd3BfZWRpdG9yIiwiZmllbGRzZXQiLCJ3cF9saW5rcyIsImNoZWNrYm94X3JhZGlvIiwia2V5dmFsdWVfcGFpciIsImNvbG9yX3BpY2tlciIsImRhdGVfcGlja2VyIiwiaW1hZ2VfcG9wdXAiLCJ1cGxvYWQiLCJpbWFnZV91cGxvYWQiLCJqcXVlcnlfdGFiIiwiZmllbGRfdG9vbHRpcCIsImNsb25lX2VsZW1lbnQiLCJzb3J0ZXIiLCJnb29nbGVfbWFwcyIsInR5cG9ncmFwaHkiLCJvZW1iZWQiLCJ0b2dnbGVDbGFzcyIsIiR3cG9mX2RpdiIsIiR3aWRnZXQiLCJsb2FkaW5nX3NjcmVlbiIsIldQT25pb25fV1BfTW9kYWwiLCJCYWNrYm9uZSIsIlZpZXciLCJleHRlbmQiLCJ0ZW1wbGF0ZXMiLCJldmVudHMiLCJhY3RpdmVfcGFnZSIsImFjdGl2ZV9zZWN0aW9uIiwiaW5pdGlhbGl6ZSIsImxlZnRfbWVudSIsImhpZGVfbWVudSIsImJpbmRBbGwiLCJpbml0X3RlbXBsYXRlcyIsInJlbmRlciIsIiRtIiwiZnJhbWVfbWVudV9pdGVtIiwicm91dGVyX21lbnVfaXRlbSIsInBhZ2VfY29udGVudCIsInNlY3Rpb25fY29udGVudCIsIiRjb250ZW50IiwiJF9jb250ZW50IiwiJF9tZW51IiwicHJlc2VydmVGb2N1cyIsImZvY3VzIiwiaGFuZGxlX2xlZnRfbWVudV9jbGljayIsIiR0YXJnZXQiLCIkc2hvd190YXJnZXQiLCJoYW5kbGVfdGFiX2NsaWNrIiwiJHBhZ2UiLCJoYXMiLCJ1bmRlbGVnYXRlRXZlbnRzIiwib2ZmIiwic2F2ZU1vZGFsIiwiZG9Ob3RoaW5nIiwiJG9wdGlvbnMiLCJjbGFzc05hbWUiLCJtb2RhbCIsImdldF9sZWZ0X21lbnUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FB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Y0FBVyxLQUFLdGEsT0FBTCxDQUFjLFdBQWQ7QUFIb0IsR0FBVixFQUluQixLQUFLQSxPQUFMLENBQWMsT0FBZCxDQUptQixDQUF0QjtBQUtBOzs7O2tDQUVlO0FBQ2YsT0FBSXVKLFVBQVUsS0FBZDtBQUNBLE9BQUksS0FBS3ZKLE9BQUwsQ0FBYyxNQUFkLENBQUosRUFBNkI7QUFDNUJ1SixjQUFVLEVBQVY7O0FBRUFsSixNQUFFb0IsSUFBRixDQUFRLEtBQUt6QixPQUFMLENBQWMsTUFBZCxDQUFSLEVBQWdDLFVBQUVySixLQUFGLEVBQVNRLElBQVQsRUFBbUI7QUFDbERvUyxhQUFTcFMsSUFBVCxJQUFvQixPQUFPUixNQUFPLFlBQVAsQ0FBUCxLQUFpQyxXQUFuQyxHQUFtREEsTUFBTyxZQUFQLENBQW5ELEdBQTJFQSxNQUFPLE9BQVAsQ0FBN0Y7QUFDQSxLQUZEO0FBR0E7QUFDRCxVQUFPNFMsT0FBUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNRixtQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzXCIpO1xuIiwiY2xhc3MgSlNfUGFyc2VfQXJncyB7XHJcblx0Y29uc3RydWN0b3IoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfbmVzdGVkID0gZmFsc2UgKSB7XHJcblx0XHR0aGlzLmFyZ3MgICAgID0gJGFyZ3M7XHJcblx0XHR0aGlzLmRlZmF1bHRzID0gJGRlZmF1bHRzO1xyXG5cdFx0dGhpcy5uZXN0ZWQgICA9ICRpc19uZXN0ZWQ7XHJcblx0XHR0aGlzLnBhcnNlKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmdzO1xyXG5cdH1cclxuXHJcblx0cGFyc2UoKSB7XHJcblx0XHRmb3IoIGxldCAkX2tleSBpbiB0aGlzLmRlZmF1bHRzICkge1xyXG5cdFx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5uZXN0ZWQgJiYgdHlwZW9mICB0aGlzLmRlZmF1bHRzWyAkX2tleSBdID09PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0XHR0aGlzLmFyZ3NbICRfa2V5IF0gPSBuZXcgSlNfUGFyc2VfQXJncyggdGhpcy5hcmdzWyAkX2tleSBdLCB0aGlzLmRlZmF1bHRzWyAkX2tleSBdLCB0aGlzLm5lc3RlZCApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzWyAkX2tleSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IHRoaXMuZGVmYXVsdHNbICRfa2V5IF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfZGVlcCA9IGZhbHNlICkgPT4gbmV3IEpTX1BhcnNlX0FyZ3MoICRhcmdzLCAkZGVmYXVsdHMsICRpc19kZWVwICk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X21lcmdlKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2FycmF5X21lcmdlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IE5hdGVcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBqb3NoXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjEgPSB7XCJjb2xvclwiOiBcInJlZFwiLCAwOiAyLCAxOiA0fVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIyID0gezA6IFwiYVwiLCAxOiBcImJcIiwgXCJjb2xvclwiOiBcImdyZWVuXCIsIFwic2hhcGVcIjogXCJ0cmFwZXpvaWRcIiwgMjogNH1cbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X21lcmdlKCRhcnIxLCAkYXJyMilcbiAgLy8gICByZXR1cm5zIDE6IHtcImNvbG9yXCI6IFwiZ3JlZW5cIiwgMDogMiwgMTogNCwgMjogXCJhXCIsIDM6IFwiYlwiLCBcInNoYXBlXCI6IFwidHJhcGV6b2lkXCIsIDQ6IDR9XG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGFycjEgPSBbXVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRhcnIyID0gezE6IFwiZGF0YVwifVxuICAvLyAgIGV4YW1wbGUgMjogYXJyYXlfbWVyZ2UoJGFycjEsICRhcnIyKVxuICAvLyAgIHJldHVybnMgMjogezA6IFwiZGF0YVwifVxuXG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgdmFyIGFyZ2wgPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGFyZztcbiAgdmFyIHJldE9iaiA9IHt9O1xuICB2YXIgayA9ICcnO1xuICB2YXIgYXJnaWwgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGN0ID0gMDtcbiAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIHJldEFyciA9IHRydWU7XG5cbiAgZm9yIChpID0gMDsgaSA8IGFyZ2w7IGkrKykge1xuICAgIGlmICh0b1N0ci5jYWxsKGFyZ3NbaV0pICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXRBcnIgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXRBcnIpIHtcbiAgICByZXRBcnIgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgICByZXRBcnIgPSByZXRBcnIuY29uY2F0KGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0QXJyO1xuICB9XG5cbiAgZm9yIChpID0gMCwgY3QgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAodG9TdHIuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICBmb3IgKGogPSAwLCBhcmdpbCA9IGFyZy5sZW5ndGg7IGogPCBhcmdpbDsgaisrKSB7XG4gICAgICAgIHJldE9ialtjdCsrXSA9IGFyZ1tqXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrIGluIGFyZykge1xuICAgICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgaWYgKHBhcnNlSW50KGssIDEwKSArICcnID09PSBrKSB7XG4gICAgICAgICAgICByZXRPYmpbY3QrK10gPSBhcmdba107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldE9ialtrXSA9IGFyZ1trXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0T2JqO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5X21lcmdlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X21lcmdlX3JlY3Vyc2l2ZShhcnIxLCBhcnIyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYXJyYXlfbWVyZ2VfcmVjdXJzaXZlL1xuICAvLyBvcmlnaW5hbCBieTogU3ViaGFzaXMgRGViXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMSA9IHsnY29sb3InOiB7J2Zhdm9yaXRlJzogJ3JlZCd9LCAwOiA1fVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIyID0gezA6IDEwLCAnY29sb3InOiB7J2Zhdm9yaXRlJzogJ2dyZWVuJywgMDogJ2JsdWUnfX1cbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X21lcmdlX3JlY3Vyc2l2ZSgkYXJyMSwgJGFycjIpXG4gIC8vICAgcmV0dXJucyAxOiB7J2NvbG9yJzogeydmYXZvcml0ZSc6IHswOiAncmVkJywgMTogJ2dyZWVuJ30sIDA6ICdibHVlJ30sIDE6IDUsIDE6IDEwfVxuICAvLyAgICAgICAgdGVzdDogc2tpcC0xXG5cbiAgdmFyIGFycmF5TWVyZ2UgPSByZXF1aXJlKCcuLi9hcnJheS9hcnJheV9tZXJnZScpO1xuICB2YXIgaWR4ID0gJyc7XG5cbiAgaWYgKGFycjEgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycjEpID09PSAnW29iamVjdCBBcnJheV0nICYmIGFycjIgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycjIpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgZm9yIChpZHggaW4gYXJyMikge1xuICAgICAgYXJyMS5wdXNoKGFycjJbaWR4XSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFycjEgJiYgYXJyMSBpbnN0YW5jZW9mIE9iamVjdCAmJiBhcnIyICYmIGFycjIgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICBmb3IgKGlkeCBpbiBhcnIyKSB7XG4gICAgICBpZiAoaWR4IGluIGFycjEpIHtcbiAgICAgICAgaWYgKF90eXBlb2YoYXJyMVtpZHhdKSA9PT0gJ29iamVjdCcgJiYgKHR5cGVvZiBhcnIyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhcnIyKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYXJyMVtpZHhdID0gYXJyYXlNZXJnZShhcnIxW2lkeF0sIGFycjJbaWR4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyMVtpZHhdID0gYXJyMltpZHhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnIxW2lkeF0gPSBhcnIyW2lkeF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycjE7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlfbWVyZ2VfcmVjdXJzaXZlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcnJheV92YWx1ZXMoaW5wdXQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9hcnJheV92YWx1ZXMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X3ZhbHVlcygge2ZpcnN0bmFtZTogJ0tldmluJywgc3VybmFtZTogJ3ZhbiBab25uZXZlbGQnfSApXG4gIC8vICAgcmV0dXJucyAxOiBbICdLZXZpbicsICd2YW4gWm9ubmV2ZWxkJyBdXG5cbiAgdmFyIHRtcEFyciA9IFtdO1xuICB2YXIga2V5ID0gJyc7XG5cbiAgZm9yIChrZXkgaW4gaW5wdXQpIHtcbiAgICB0bXBBcnJbdG1wQXJyLmxlbmd0aF0gPSBpbnB1dFtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRtcEFycjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheV92YWx1ZXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvdW50KG1peGVkVmFyLCBtb2RlKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY291bnQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogV2FsZG8gTWFscXVpIFNpbHZhIChodHRwOi8vd2FsZG8ubWFscXVpLmluZm8pXG4gIC8vICAgIGlucHV0IGJ5OiBtZXJhYmlcbiAgLy8gYnVnZml4ZWQgYnk6IFNvcmVuIEhhbnNlblxuICAvLyBidWdmaXhlZCBieTogT2xpdmllciBMb3V2aWduZXMgKGh0dHA6Ly9tZy1jcmVhLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogY291bnQoW1swLDBdLFswLC00XV0sICdDT1VOVF9SRUNVUlNJVkUnKVxuICAvLyAgIHJldHVybnMgMTogNlxuICAvLyAgIGV4YW1wbGUgMjogY291bnQoeydvbmUnIDogWzEsMiwzLDQsNV19LCAnQ09VTlRfUkVDVVJTSVZFJylcbiAgLy8gICByZXR1cm5zIDI6IDZcblxuICB2YXIga2V5O1xuICB2YXIgY250ID0gMDtcblxuICBpZiAobWl4ZWRWYXIgPT09IG51bGwgfHwgdHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKG1peGVkVmFyLmNvbnN0cnVjdG9yICE9PSBBcnJheSAmJiBtaXhlZFZhci5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAobW9kZSA9PT0gJ0NPVU5UX1JFQ1VSU0lWRScpIHtcbiAgICBtb2RlID0gMTtcbiAgfVxuICBpZiAobW9kZSAhPT0gMSkge1xuICAgIG1vZGUgPSAwO1xuICB9XG5cbiAgZm9yIChrZXkgaW4gbWl4ZWRWYXIpIHtcbiAgICBpZiAobWl4ZWRWYXIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY250Kys7XG4gICAgICBpZiAobW9kZSA9PT0gMSAmJiBtaXhlZFZhcltrZXldICYmIChtaXhlZFZhcltrZXldLmNvbnN0cnVjdG9yID09PSBBcnJheSB8fCBtaXhlZFZhcltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKSB7XG4gICAgICAgIGNudCArPSBjb3VudChtaXhlZFZhcltrZXldLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY250O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvdW50LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbl9hcnJheShuZWVkbGUsIGhheXN0YWNrLCBhcmdTdHJpY3QpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbl9hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiB2bGFkbyBob3ViYVxuICAvLyBpbXByb3ZlZCBieTogSm9uYXMgU2NpYW5ndWxhIFN0cmVldCAoSm9uaTJCYWNrKVxuICAvLyAgICBpbnB1dCBieTogQmlsbHlcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBpbl9hcnJheSgndmFuJywgWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpbl9hcnJheSgndmxhZG8nLCB7MDogJ0tldmluJywgdmxhZG86ICd2YW4nLCAxOiAnWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddKVxuICAvLyAgIGV4YW1wbGUgMzogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddLCBmYWxzZSlcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGluX2FycmF5KDEsIFsnMScsICcyJywgJzMnXSwgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG5cbiAgdmFyIGtleSA9ICcnO1xuICB2YXIgc3RyaWN0ID0gISFhcmdTdHJpY3Q7XG5cbiAgLy8gd2UgcHJldmVudCB0aGUgZG91YmxlIGNoZWNrIChzdHJpY3QgJiYgYXJyW2tleV0gPT09IG5kbCkgfHwgKCFzdHJpY3QgJiYgYXJyW2tleV0gPT09IG5kbClcbiAgLy8gaW4ganVzdCBvbmUgZm9yLCBpbiBvcmRlciB0byBpbXByb3ZlIHRoZSBwZXJmb3JtYW5jZVxuICAvLyBkZWNpZGluZyB3aWNoIHR5cGUgb2YgY29tcGFyYXRpb24gd2lsbCBkbyBiZWZvcmUgd2FsayBhcnJheVxuICBpZiAoc3RyaWN0KSB7XG4gICAgZm9yIChrZXkgaW4gaGF5c3RhY2spIHtcbiAgICAgIGlmIChoYXlzdGFja1trZXldID09PSBuZWVkbGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoa2V5IGluIGhheXN0YWNrKSB7XG4gICAgICBpZiAoaGF5c3RhY2tba2V5XSA9PSBuZWVkbGUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluX2FycmF5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtaWNyb3RpbWUoZ2V0QXNGbG9hdCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21pY3JvdGltZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gaW1wcm92ZWQgYnk6IER1bWl0cnUgVXp1biAoaHR0cDovL2R1enVuLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICR0aW1lU3RhbXAgPSBtaWNyb3RpbWUodHJ1ZSlcbiAgLy8gICBleGFtcGxlIDE6ICR0aW1lU3RhbXAgPiAxMDAwMDAwMDAwICYmICR0aW1lU3RhbXAgPCAyMDAwMDAwMDAwXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiAvXjBcXC5bMC05XXsxLDZ9IFswLTldezEwLDEwfSQvLnRlc3QobWljcm90aW1lKCkpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG5cbiAgdmFyIHM7XG4gIHZhciBub3c7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG5vdyA9IChwZXJmb3JtYW5jZS5ub3coKSArIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWU2KSAvIDFlNiArICcgJyArIHM7XG4gIH0gZWxzZSB7XG4gICAgbm93ID0gKERhdGUubm93ID8gRGF0ZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlMykgLyAxZTMgKyAnICcgKyBzO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWljcm90aW1lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRpbWUoKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdGltZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEdlZWtGRyAoaHR0cDovL2dlZWtmZy5ibG9nc3BvdC5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogbWV0amF5XG4gIC8vIGltcHJvdmVkIGJ5OiBIS01cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gdGltZSgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICR0aW1lU3RhbXAgPiAxMDAwMDAwMDAwICYmICR0aW1lU3RhbXAgPCAyMDAwMDAwMDAwXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgcmV0dXJuIE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1lLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsX3VzZXJfZnVuYyhjYiwgcGFyYW1ldGVycykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NhbGxfdXNlcl9mdW5jL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kcyBvbiBjYWxsX3VzZXJfZnVuY19hcnJheSB3aGljaCBpbiB0dXJuIGRlcGVuZHMgb24gdGhlIGBjYmAgdGhhdCBpcyBwYXNzZWQsXG4gIC8vICAgICAgbm90ZSAxOiB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgYGV2YWxgLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jKCdpc05hTicsICdhJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICB2YXIgY2FsbFVzZXJGdW5jQXJyYXkgPSByZXF1aXJlKCcuLi9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScpO1xuICBwYXJhbWV0ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIGNhbGxVc2VyRnVuY0FycmF5KGNiLCBwYXJhbWV0ZXJzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxsX3VzZXJfZnVuYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsX3VzZXJfZnVuY19hcnJheShjYiwgcGFyYW1ldGVycykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NhbGxfdXNlcl9mdW5jX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogVGhpYWdvIE1hdGEgKGh0dHA6Ly90aGlhZ29tYXRhLmJsb2cuY29tKVxuICAvLyAgcmV2aXNlZCBieTogSm9uIEhvaGxlXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRpbmcgb24gdGhlIGBjYmAgdGhhdCBpcyBwYXNzZWQsXG4gIC8vICAgICAgbm90ZSAxOiB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgYGV2YWxgIGFuZC9vciBgbmV3IEZ1bmN0aW9uYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbJ2EnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsxXSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgdmFyIGZ1bmM7XG4gIHZhciBzY29wZSA9IG51bGw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIGlmICh0eXBlb2YgY2IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZnVuYyA9ICRnbG9iYWxbY2JdO1xuICAgIH0gZWxzZSBpZiAoY2IubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICBmdW5jID0gbmV3IEZ1bmN0aW9uKG51bGwsICdyZXR1cm4gJyArIGNiKSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy1mdW5jXG4gICAgfVxuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjYikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBmdW5jID0gZXZhbChjYlswXSArIFwiWydcIiArIGNiWzFdICsgXCInXVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMgPSBjYlswXVtjYlsxXV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYlswXV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2NvcGUgPSAkZ2xvYmFsW2NiWzBdXTtcbiAgICAgIH0gZWxzZSBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIHNjb3BlID0gZXZhbChjYlswXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3R5cGVvZihjYlswXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBzY29wZSA9IGNiWzBdO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmdW5jID0gY2I7XG4gIH1cblxuICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZnVuYyArICcgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jLmFwcGx5KHNjb3BlLCBwYXJhbWV0ZXJzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxsX3VzZXJfZnVuY19hcnJheS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnVuY3Rpb25fZXhpc3RzKGZ1bmNOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZnVuY3Rpb25fZXhpc3RzL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFN0ZXZlIENsYXlcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBmdW5jdGlvbl9leGlzdHMoJ2lzRmluaXRlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgaWYgKHR5cGVvZiBmdW5jTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBmdW5jTmFtZSA9ICRnbG9iYWxbZnVuY05hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBmdW5jTmFtZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdW5jdGlvbl9leGlzdHMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaV9nZXQodmFybmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luaV9nZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIGluaSB2YWx1ZXMgbXVzdCBiZSBzZXQgYnkgaW5pX3NldCBvciBtYW51YWxseSB3aXRoaW4gYW4gaW5pIGZpbGVcbiAgLy8gICBleGFtcGxlIDE6IGluaV9zZXQoJ2RhdGUudGltZXpvbmUnLCAnQXNpYS9Ib25nX0tvbmcnKVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX2dldCgnZGF0ZS50aW1lem9uZScpXG4gIC8vICAgcmV0dXJucyAxOiAnQXNpYS9Ib25nX0tvbmcnXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcbiAgJGxvY3V0dXMucGhwLmluaSA9ICRsb2N1dHVzLnBocC5pbmkgfHwge307XG5cbiAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0gJiYgJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWU7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pX2dldC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHBsb2RlKGRlbGltaXRlciwgc3RyaW5nLCBsaW1pdCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2V4cGxvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogZXhwbG9kZSgnICcsICdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6IFsgJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnIF1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIgfHwgdHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0cmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoZGVsaW1pdGVyID09PSAnJyB8fCBkZWxpbWl0ZXIgPT09IGZhbHNlIHx8IGRlbGltaXRlciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIGRlbGltaXRlciA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGVsaW1pdGVyKSkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBzdHJpbmcgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBzdHJpbmcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHN0cmluZykpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB7XG4gICAgICAwOiAnJ1xuICAgIH07XG4gIH1cbiAgaWYgKGRlbGltaXRlciA9PT0gdHJ1ZSkge1xuICAgIGRlbGltaXRlciA9ICcxJztcbiAgfVxuXG4gIC8vIEhlcmUgd2UgZ28uLi5cbiAgZGVsaW1pdGVyICs9ICcnO1xuICBzdHJpbmcgKz0gJyc7XG5cbiAgdmFyIHMgPSBzdHJpbmcuc3BsaXQoZGVsaW1pdGVyKTtcblxuICBpZiAodHlwZW9mIGxpbWl0ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHM7XG5cbiAgLy8gU3VwcG9ydCBmb3IgbGltaXRcbiAgaWYgKGxpbWl0ID09PSAwKSBsaW1pdCA9IDE7XG5cbiAgLy8gUG9zaXRpdmUgbGltaXRcbiAgaWYgKGxpbWl0ID4gMCkge1xuICAgIGlmIChsaW1pdCA+PSBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIHJldHVybiBzLnNsaWNlKDAsIGxpbWl0IC0gMSkuY29uY2F0KFtzLnNsaWNlKGxpbWl0IC0gMSkuam9pbihkZWxpbWl0ZXIpXSk7XG4gIH1cblxuICAvLyBOZWdhdGl2ZSBsaW1pdFxuICBpZiAoLWxpbWl0ID49IHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcy5zcGxpY2Uocy5sZW5ndGggKyBsaW1pdCk7XG4gIHJldHVybiBzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cGxvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW1wbG9kZShnbHVlLCBwaWVjZXMpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbXBsb2RlL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFdhbGRvIE1hbHF1aSBTaWx2YSAoaHR0cDovL3dhbGRvLm1hbHF1aS5pbmZvKVxuICAvLyBpbXByb3ZlZCBieTogSXRzYWNvbiAoaHR0cDovL3d3dy5pdHNhY29uLm5ldC8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogaW1wbG9kZSgnICcsIFsnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCddKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG4gIC8vICAgZXhhbXBsZSAyOiBpbXBsb2RlKCcgJywge2ZpcnN0OidLZXZpbicsIGxhc3Q6ICd2YW4gWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAyOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICB2YXIgaSA9ICcnO1xuICB2YXIgcmV0VmFsID0gJyc7XG4gIHZhciB0R2x1ZSA9ICcnO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcGllY2VzID0gZ2x1ZTtcbiAgICBnbHVlID0gJyc7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBwaWVjZXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBpZWNlcykpID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGllY2VzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuIHBpZWNlcy5qb2luKGdsdWUpO1xuICAgIH1cbiAgICBmb3IgKGkgaW4gcGllY2VzKSB7XG4gICAgICByZXRWYWwgKz0gdEdsdWUgKyBwaWVjZXNbaV07XG4gICAgICB0R2x1ZSA9IGdsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXRWYWw7XG4gIH1cblxuICByZXR1cm4gcGllY2VzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltcGxvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1kNShzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9tZDUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBXZWJ0b29sa2l0LmluZm8gKGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvLylcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIG5vdGUgMTogS2VlcCBpbiBtaW5kIHRoYXQgaW4gYWNjb3JkYW5jZSB3aXRoIFBIUCwgdGhlIHdob2xlIHN0cmluZyBpcyBidWZmZXJlZCBhbmQgdGhlblxuICAvLyAgICAgIG5vdGUgMTogaGFzaGVkLiBJZiBhdmFpbGFibGUsIHdlJ2QgcmVjb21tZW5kIHVzaW5nIE5vZGUncyBuYXRpdmUgY3J5cHRvIG1vZHVsZXMgZGlyZWN0bHlcbiAgLy8gICAgICBub3RlIDE6IGluIGEgc3RlYW1pbmcgZmFzaGlvbiBmb3IgZmFzdGVyIGFuZCBtb3JlIGVmZmljaWVudCBoYXNoaW5nXG4gIC8vICAgZXhhbXBsZSAxOiBtZDUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJzZlNjU4ZDRiZmNiNTljYzEzZjk2YzE0NDUwYWM0MGI5J1xuXG4gIHZhciBoYXNoO1xuICB0cnkge1xuICAgIHZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgICB2YXIgbWQ1c3VtID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpO1xuICAgIG1kNXN1bS51cGRhdGUoc3RyKTtcbiAgICBoYXNoID0gbWQ1c3VtLmRpZ2VzdCgnaGV4Jyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYXNoID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgdmFyIHV0ZjhFbmNvZGUgPSByZXF1aXJlKCcuLi94bWwvdXRmOF9lbmNvZGUnKTtcbiAgdmFyIHhsO1xuXG4gIHZhciBfcm90YXRlTGVmdCA9IGZ1bmN0aW9uIF9yb3RhdGVMZWZ0KGxWYWx1ZSwgaVNoaWZ0Qml0cykge1xuICAgIHJldHVybiBsVmFsdWUgPDwgaVNoaWZ0Qml0cyB8IGxWYWx1ZSA+Pj4gMzIgLSBpU2hpZnRCaXRzO1xuICB9O1xuXG4gIHZhciBfYWRkVW5zaWduZWQgPSBmdW5jdGlvbiBfYWRkVW5zaWduZWQobFgsIGxZKSB7XG4gICAgdmFyIGxYNCwgbFk0LCBsWDgsIGxZOCwgbFJlc3VsdDtcbiAgICBsWDggPSBsWCAmIDB4ODAwMDAwMDA7XG4gICAgbFk4ID0gbFkgJiAweDgwMDAwMDAwO1xuICAgIGxYNCA9IGxYICYgMHg0MDAwMDAwMDtcbiAgICBsWTQgPSBsWSAmIDB4NDAwMDAwMDA7XG4gICAgbFJlc3VsdCA9IChsWCAmIDB4M0ZGRkZGRkYpICsgKGxZICYgMHgzRkZGRkZGRik7XG4gICAgaWYgKGxYNCAmIGxZNCkge1xuICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweDgwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgICBpZiAobFg0IHwgbFk0KSB7XG4gICAgICBpZiAobFJlc3VsdCAmIDB4NDAwMDAwMDApIHtcbiAgICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweEMwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweDQwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIGxYOCBeIGxZODtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9GID0gZnVuY3Rpb24gX0YoeCwgeSwgeikge1xuICAgIHJldHVybiB4ICYgeSB8IH54ICYgejtcbiAgfTtcbiAgdmFyIF9HID0gZnVuY3Rpb24gX0coeCwgeSwgeikge1xuICAgIHJldHVybiB4ICYgeiB8IHkgJiB+ejtcbiAgfTtcbiAgdmFyIF9IID0gZnVuY3Rpb24gX0goeCwgeSwgeikge1xuICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH07XG4gIHZhciBfSSA9IGZ1bmN0aW9uIF9JKHgsIHksIHopIHtcbiAgICByZXR1cm4geSBeICh4IHwgfnopO1xuICB9O1xuXG4gIHZhciBfRkYgPSBmdW5jdGlvbiBfRkYoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0YoYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfR0cgPSBmdW5jdGlvbiBfR0coYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0coYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfSEggPSBmdW5jdGlvbiBfSEgoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0goYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfSUkgPSBmdW5jdGlvbiBfSUkoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0koYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfY29udmVydFRvV29yZEFycmF5ID0gZnVuY3Rpb24gX2NvbnZlcnRUb1dvcmRBcnJheShzdHIpIHtcbiAgICB2YXIgbFdvcmRDb3VudDtcbiAgICB2YXIgbE1lc3NhZ2VMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc1RlbXAxID0gbE1lc3NhZ2VMZW5ndGggKyA4O1xuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc1RlbXAyID0gKGxOdW1iZXJPZldvcmRzVGVtcDEgLSBsTnVtYmVyT2ZXb3Jkc1RlbXAxICUgNjQpIC8gNjQ7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzID0gKGxOdW1iZXJPZldvcmRzVGVtcDIgKyAxKSAqIDE2O1xuICAgIHZhciBsV29yZEFycmF5ID0gbmV3IEFycmF5KGxOdW1iZXJPZldvcmRzIC0gMSk7XG4gICAgdmFyIGxCeXRlUG9zaXRpb24gPSAwO1xuICAgIHZhciBsQnl0ZUNvdW50ID0gMDtcbiAgICB3aGlsZSAobEJ5dGVDb3VudCA8IGxNZXNzYWdlTGVuZ3RoKSB7XG4gICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgICAgbEJ5dGVQb3NpdGlvbiA9IGxCeXRlQ291bnQgJSA0ICogODtcbiAgICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgc3RyLmNoYXJDb2RlQXQobEJ5dGVDb3VudCkgPDwgbEJ5dGVQb3NpdGlvbjtcbiAgICAgIGxCeXRlQ291bnQrKztcbiAgICB9XG4gICAgbFdvcmRDb3VudCA9IChsQnl0ZUNvdW50IC0gbEJ5dGVDb3VudCAlIDQpIC8gNDtcbiAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgMHg4MCA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAyXSA9IGxNZXNzYWdlTGVuZ3RoIDw8IDM7XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDFdID0gbE1lc3NhZ2VMZW5ndGggPj4+IDI5O1xuICAgIHJldHVybiBsV29yZEFycmF5O1xuICB9O1xuXG4gIHZhciBfd29yZFRvSGV4ID0gZnVuY3Rpb24gX3dvcmRUb0hleChsVmFsdWUpIHtcbiAgICB2YXIgd29yZFRvSGV4VmFsdWUgPSAnJztcbiAgICB2YXIgd29yZFRvSGV4VmFsdWVUZW1wID0gJyc7XG4gICAgdmFyIGxCeXRlO1xuICAgIHZhciBsQ291bnQ7XG5cbiAgICBmb3IgKGxDb3VudCA9IDA7IGxDb3VudCA8PSAzOyBsQ291bnQrKykge1xuICAgICAgbEJ5dGUgPSBsVmFsdWUgPj4+IGxDb3VudCAqIDggJiAyNTU7XG4gICAgICB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnMCcgKyBsQnl0ZS50b1N0cmluZygxNik7XG4gICAgICB3b3JkVG9IZXhWYWx1ZSA9IHdvcmRUb0hleFZhbHVlICsgd29yZFRvSGV4VmFsdWVUZW1wLnN1YnN0cih3b3JkVG9IZXhWYWx1ZVRlbXAubGVuZ3RoIC0gMiwgMik7XG4gICAgfVxuICAgIHJldHVybiB3b3JkVG9IZXhWYWx1ZTtcbiAgfTtcblxuICB2YXIgeCA9IFtdO1xuICB2YXIgaztcbiAgdmFyIEFBO1xuICB2YXIgQkI7XG4gIHZhciBDQztcbiAgdmFyIEREO1xuICB2YXIgYTtcbiAgdmFyIGI7XG4gIHZhciBjO1xuICB2YXIgZDtcbiAgdmFyIFMxMSA9IDc7XG4gIHZhciBTMTIgPSAxMjtcbiAgdmFyIFMxMyA9IDE3O1xuICB2YXIgUzE0ID0gMjI7XG4gIHZhciBTMjEgPSA1O1xuICB2YXIgUzIyID0gOTtcbiAgdmFyIFMyMyA9IDE0O1xuICB2YXIgUzI0ID0gMjA7XG4gIHZhciBTMzEgPSA0O1xuICB2YXIgUzMyID0gMTE7XG4gIHZhciBTMzMgPSAxNjtcbiAgdmFyIFMzNCA9IDIzO1xuICB2YXIgUzQxID0gNjtcbiAgdmFyIFM0MiA9IDEwO1xuICB2YXIgUzQzID0gMTU7XG4gIHZhciBTNDQgPSAyMTtcblxuICBzdHIgPSB1dGY4RW5jb2RlKHN0cik7XG4gIHggPSBfY29udmVydFRvV29yZEFycmF5KHN0cik7XG4gIGEgPSAweDY3NDUyMzAxO1xuICBiID0gMHhFRkNEQUI4OTtcbiAgYyA9IDB4OThCQURDRkU7XG4gIGQgPSAweDEwMzI1NDc2O1xuXG4gIHhsID0geC5sZW5ndGg7XG4gIGZvciAoayA9IDA7IGsgPCB4bDsgayArPSAxNikge1xuICAgIEFBID0gYTtcbiAgICBCQiA9IGI7XG4gICAgQ0MgPSBjO1xuICAgIEREID0gZDtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTMTEsIDB4RDc2QUE0NzgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgMV0sIFMxMiwgMHhFOEM3Qjc1Nik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzEzLCAweDI0MjA3MERCKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDNdLCBTMTQsIDB4QzFCRENFRUUpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgNF0sIFMxMSwgMHhGNTdDMEZBRik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyA1XSwgUzEyLCAweDQ3ODdDNjJBKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTMTMsIDB4QTgzMDQ2MTMpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgN10sIFMxNCwgMHhGRDQ2OTUwMSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzExLCAweDY5ODA5OEQ4KTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDldLCBTMTIsIDB4OEI0NEY3QUYpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTMTMsIDB4RkZGRjVCQjEpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgMTFdLCBTMTQsIDB4ODk1Q0Q3QkUpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTMTEsIDB4NkI5MDExMjIpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgMTNdLCBTMTIsIDB4RkQ5ODcxOTMpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTMTMsIDB4QTY3OTQzOEUpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgMTVdLCBTMTQsIDB4NDlCNDA4MjEpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgMV0sIFMyMSwgMHhGNjFFMjU2Mik7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyA2XSwgUzIyLCAweEMwNDBCMzQwKTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzIzLCAweDI2NUU1QTUxKTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDBdLCBTMjQsIDB4RTlCNkM3QUEpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgNV0sIFMyMSwgMHhENjJGMTA1RCk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAxMF0sIFMyMiwgMHgyNDQxNDUzKTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzIzLCAweEQ4QTFFNjgxKTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDRdLCBTMjQsIDB4RTdEM0ZCQzgpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgOV0sIFMyMSwgMHgyMUUxQ0RFNik7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAxNF0sIFMyMiwgMHhDMzM3MDdENik7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAzXSwgUzIzLCAweEY0RDUwRDg3KTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDhdLCBTMjQsIDB4NDU1QTE0RUQpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMjEsIDB4QTlFM0U5MDUpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMl0sIFMyMiwgMHhGQ0VGQTNGOCk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzIzLCAweDY3NkYwMkQ5KTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDEyXSwgUzI0LCAweDhEMkE0QzhBKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDVdLCBTMzEsIDB4RkZGQTM5NDIpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgOF0sIFMzMiwgMHg4NzcxRjY4MSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxMV0sIFMzMywgMHg2RDlENjEyMik7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAxNF0sIFMzNCwgMHhGREU1MzgwQyk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzMxLCAweEE0QkVFQTQ0KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDRdLCBTMzIsIDB4NEJERUNGQTkpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgN10sIFMzMywgMHhGNkJCNEI2MCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAxMF0sIFMzNCwgMHhCRUJGQkM3MCk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMzMSwgMHgyODlCN0VDNik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAwXSwgUzMyLCAweEVBQTEyN0ZBKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMzMsIDB4RDRFRjMwODUpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgNl0sIFMzNCwgMHg0ODgxRDA1KTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDldLCBTMzEsIDB4RDlENEQwMzkpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgMTJdLCBTMzIsIDB4RTZEQjk5RTUpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMzMsIDB4MUZBMjdDRjgpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMl0sIFMzNCwgMHhDNEFDNTY2NSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyAwXSwgUzQxLCAweEY0MjkyMjQ0KTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDddLCBTNDIsIDB4NDMyQUZGOTcpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTNDMsIDB4QUI5NDIzQTcpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgNV0sIFM0NCwgMHhGQzkzQTAzOSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFM0MSwgMHg2NTVCNTlDMyk7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAzXSwgUzQyLCAweDhGMENDQzkyKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzQzLCAweEZGRUZGNDdEKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDFdLCBTNDQsIDB4ODU4NDVERDEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgOF0sIFM0MSwgMHg2RkE4N0U0Rik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxNV0sIFM0MiwgMHhGRTJDRTZFMCk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyA2XSwgUzQzLCAweEEzMDE0MzE0KTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDEzXSwgUzQ0LCAweDRFMDgxMUExKTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTNDEsIDB4Rjc1MzdFODIpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgMTFdLCBTNDIsIDB4QkQzQUYyMzUpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMl0sIFM0MywgMHgyQUQ3RDJCQik7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA5XSwgUzQ0LCAweEVCODZEMzkxKTtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIEFBKTtcbiAgICBiID0gX2FkZFVuc2lnbmVkKGIsIEJCKTtcbiAgICBjID0gX2FkZFVuc2lnbmVkKGMsIENDKTtcbiAgICBkID0gX2FkZFVuc2lnbmVkKGQsIEREKTtcbiAgfVxuXG4gIHZhciB0ZW1wID0gX3dvcmRUb0hleChhKSArIF93b3JkVG9IZXgoYikgKyBfd29yZFRvSGV4KGMpICsgX3dvcmRUb0hleChkKTtcblxuICByZXR1cm4gdGVtcC50b0xvd2VyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1kNS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2Vfc3RyKHN0ciwgYXJyYXkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3N0ci9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogQ2FncmkgRWtpblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogSmFja1xuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogTUlPX0tPRFVLSSAoaHR0cDovL21pby1rb2R1a2kuYmxvZ3Nwb3QuY29tLylcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogc3RhZzAxOVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBEcmVhbWVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFphaWRlIChodHRwOi8vemFpZGVzdGhpbmdzLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERhdmlkIFBlc3RhIChodHRwOi8vZGF2aWRwZXN0YS5jb20vKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBqZWljcXVlc3RcbiAgLy8gICAgICBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gbm8gYXJndW1lbnQgaXMgc3BlY2lmaWVkLCB3aWxsIHB1dCB2YXJpYWJsZXMgaW4gZ2xvYmFsIHNjb3BlLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBXaGVuIGEgcGFydGljdWxhciBhcmd1bWVudCBoYXMgYmVlbiBwYXNzZWQsIGFuZCB0aGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogcmV0dXJuZWQgdmFsdWUgaXMgZGlmZmVyZW50IHBhcnNlX3N0ciBvZiBQSFAuXG4gIC8vICAgICAgICAgICBub3RlIDE6IEZvciBleGFtcGxlLCBhPWI9YyZkPT09PWNcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV9zdHIoJ2ZpcnN0PWZvbyZzZWNvbmQ9YmFyJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDE6IHsgZmlyc3Q6ICdmb28nLCBzZWNvbmQ6ICdiYXInIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiBwYXJzZV9zdHIoJ3N0cl9hPUphY2srYW5kK0ppbGwrZGlkbiUyN3Qrc2VlK3RoZSt3ZWxsLicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyAyOiB7IHN0cl9hOiBcIkphY2sgYW5kIEppbGwgZGlkbid0IHNlZSB0aGUgd2VsbC5cIiB9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHZhciAkYWJjID0gezM6J2EnfVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiBwYXJzZV9zdHIoJ2FbYl1bXCJjXCJdPWRlZiZhW3FdPXQrNScsICRhYmMpXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGFiY1xuICAvLyAgICAgICAgcmV0dXJucyAzOiB7XCIzXCI6XCJhXCIsXCJhXCI6e1wiYlwiOntcImNcIjpcImRlZlwifSxcInFcIjpcInQgNVwifX1cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV9zdHIoJ2FbXVtdPXZhbHVlJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDQ6IHtcImFcIjp7XCIwXCI6e1wiMFwiOlwidmFsdWVcIn19fVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHBhcnNlX3N0cignYT0xJmFbXT0yJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgNTogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDU6IHtcImFcIjp7XCIwXCI6XCIyXCJ9fVxuXG4gIHZhciBzdHJBcnIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC9eJi8sICcnKS5yZXBsYWNlKC8mJC8sICcnKS5zcGxpdCgnJicpO1xuICB2YXIgc2FsID0gc3RyQXJyLmxlbmd0aDtcbiAgdmFyIGk7XG4gIHZhciBqO1xuICB2YXIgY3Q7XG4gIHZhciBwO1xuICB2YXIgbGFzdE9iajtcbiAgdmFyIG9iajtcbiAgdmFyIGNocjtcbiAgdmFyIHRtcDtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgcG9zdExlZnRCcmFja2V0UG9zO1xuICB2YXIga2V5cztcbiAgdmFyIGtleXNMZW47XG5cbiAgdmFyIF9maXhTdHIgPSBmdW5jdGlvbiBfZml4U3RyKHN0cikge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xuICB9O1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG5cbiAgaWYgKCFhcnJheSkge1xuICAgIGFycmF5ID0gJGdsb2JhbDtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBzYWw7IGkrKykge1xuICAgIHRtcCA9IHN0ckFycltpXS5zcGxpdCgnPScpO1xuICAgIGtleSA9IF9maXhTdHIodG1wWzBdKTtcbiAgICB2YWx1ZSA9IHRtcC5sZW5ndGggPCAyID8gJycgOiBfZml4U3RyKHRtcFsxXSk7XG5cbiAgICB3aGlsZSAoa2V5LmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgaWYgKGtleS5pbmRleE9mKCdcXHgwMCcpID4gLTEpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgwLCBrZXkuaW5kZXhPZignXFx4MDAnKSk7XG4gICAgfVxuXG4gICAgaWYgKGtleSAmJiBrZXkuY2hhckF0KDApICE9PSAnWycpIHtcbiAgICAgIGtleXMgPSBbXTtcbiAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGtleS5jaGFyQXQoaikgPT09ICdbJyAmJiAhcG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gaiArIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ10nKSB7XG4gICAgICAgICAgaWYgKHBvc3RMZWZ0QnJhY2tldFBvcykge1xuICAgICAgICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5LnNsaWNlKDAsIHBvc3RMZWZ0QnJhY2tldFBvcyAtIDEpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIocG9zdExlZnRCcmFja2V0UG9zLCBqIC0gcG9zdExlZnRCcmFja2V0UG9zKSk7XG4gICAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSAwO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChqICsgMSkgIT09ICdbJykge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICBrZXlzID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBrZXlzWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNociA9IGtleXNbMF0uY2hhckF0KGopO1xuXG4gICAgICAgIGlmIChjaHIgPT09ICcgJyB8fCBjaHIgPT09ICcuJyB8fCBjaHIgPT09ICdbJykge1xuICAgICAgICAgIGtleXNbMF0gPSBrZXlzWzBdLnN1YnN0cigwLCBqKSArICdfJyArIGtleXNbMF0uc3Vic3RyKGogKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHIgPT09ICdbJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9iaiA9IGFycmF5O1xuXG4gICAgICBmb3IgKGogPSAwLCBrZXlzTGVuID0ga2V5cy5sZW5ndGg7IGogPCBrZXlzTGVuOyBqKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tqXS5yZXBsYWNlKC9eWydcIl0vLCAnJykucmVwbGFjZSgvWydcIl0kLywgJycpO1xuICAgICAgICBsYXN0T2JqID0gb2JqO1xuXG4gICAgICAgIGlmICgoa2V5ID09PSAnJyB8fCBrZXkgPT09ICcgJykgJiYgaiAhPT0gMCkge1xuICAgICAgICAgIC8vIEluc2VydCBuZXcgZGltZW5zaW9uXG4gICAgICAgICAgY3QgPSAtMTtcblxuICAgICAgICAgIGZvciAocCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgaWYgKCtwID4gY3QgJiYgcC5tYXRjaCgvXlxcZCskL2cpKSB7XG4gICAgICAgICAgICAgICAgY3QgPSArcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGtleSA9IGN0ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHByaW1pdGl2ZSB2YWx1ZSwgcmVwbGFjZSB3aXRoIG9iamVjdFxuICAgICAgICBpZiAoT2JqZWN0KG9ialtrZXldKSAhPT0gb2JqW2tleV0pIHtcbiAgICAgICAgICBvYmpba2V5XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gb2JqW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxhc3RPYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlX3N0ci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJfcmVwbGFjZShzZWFyY2gsIHJlcGxhY2UsIHN1YmplY3QsIGNvdW50T2JqKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvc3RyX3JlcGxhY2UvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogR2FicmllbCBQYWRlcm5pXG4gIC8vIGltcHJvdmVkIGJ5OiBQaGlsaXAgUGV0ZXJzb25cbiAgLy8gaW1wcm92ZWQgYnk6IFNpbW9uIFdpbGxpc29uIChodHRwOi8vc2ltb253aWxsaXNvbi5uZXQpXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gIHJldmlzZWQgYnk6IEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAoaHR0cDovL3d3dy5qc2Zyb21oZWxsLmNvbSlcbiAgLy8gYnVnZml4ZWQgYnk6IEFudG9uIE9uZ3NvblxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IE9sZWcgRXJlbWVldlxuICAvLyBidWdmaXhlZCBieTogR2xlbiBBcmFzb24gKGh0dHA6Ly9DYW5hZGlhbkRvbWFpblJlZ2lzdHJ5LmNhKVxuICAvLyBidWdmaXhlZCBieTogR2xlbiBBcmFzb24gKGh0dHA6Ly9DYW5hZGlhbkRvbWFpblJlZ2lzdHJ5LmNhKVxuICAvLyAgICBpbnB1dCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IE9sZWcgRXJlbWVldlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGNvdW50T2JqIHBhcmFtZXRlciAob3B0aW9uYWwpIGlmIHVzZWQgbXVzdCBiZSBwYXNzZWQgaW4gYXMgYVxuICAvLyAgICAgIG5vdGUgMTogb2JqZWN0LiBUaGUgY291bnQgd2lsbCB0aGVuIGJlIHdyaXR0ZW4gYnkgcmVmZXJlbmNlIGludG8gaXQncyBgdmFsdWVgIHByb3BlcnR5XG4gIC8vICAgZXhhbXBsZSAxOiBzdHJfcmVwbGFjZSgnICcsICcuJywgJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluLnZhbi5ab25uZXZlbGQnXG4gIC8vICAgZXhhbXBsZSAyOiBzdHJfcmVwbGFjZShbJ3tuYW1lfScsICdsJ10sIFsnaGVsbG8nLCAnbSddLCAne25hbWV9LCBsYXJzJylcbiAgLy8gICByZXR1cm5zIDI6ICdoZW1tbywgbWFycydcbiAgLy8gICBleGFtcGxlIDM6IHN0cl9yZXBsYWNlKEFycmF5KCdTJywnRicpLCd4JywnQVNERkFTREYnKVxuICAvLyAgIHJldHVybnMgMzogJ0F4RHhBeER4J1xuICAvLyAgIGV4YW1wbGUgNDogdmFyIGNvdW50T2JqID0ge31cbiAgLy8gICBleGFtcGxlIDQ6IHN0cl9yZXBsYWNlKFsnQScsJ0QnXSwgWyd4JywneSddICwgJ0FTREZBU0RGJyAsIGNvdW50T2JqKVxuICAvLyAgIGV4YW1wbGUgNDogdmFyICRyZXN1bHQgPSBjb3VudE9iai52YWx1ZVxuICAvLyAgIHJldHVybnMgNDogNFxuXG4gIHZhciBpID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgdGVtcCA9ICcnO1xuICB2YXIgcmVwbCA9ICcnO1xuICB2YXIgc2wgPSAwO1xuICB2YXIgZmwgPSAwO1xuICB2YXIgZiA9IFtdLmNvbmNhdChzZWFyY2gpO1xuICB2YXIgciA9IFtdLmNvbmNhdChyZXBsYWNlKTtcbiAgdmFyIHMgPSBzdWJqZWN0O1xuICB2YXIgcmEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIHZhciBzYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgcyA9IFtdLmNvbmNhdChzKTtcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuXG4gIGlmICgodHlwZW9mIHNlYXJjaCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc2VhcmNoKSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXBsYWNlID09PSAnc3RyaW5nJykge1xuICAgIHRlbXAgPSByZXBsYWNlO1xuICAgIHJlcGxhY2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2VhcmNoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICByZXBsYWNlW2ldID0gdGVtcDtcbiAgICB9XG4gICAgdGVtcCA9ICcnO1xuICAgIHIgPSBbXS5jb25jYXQocmVwbGFjZSk7XG4gICAgcmEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpZiAodHlwZW9mIGNvdW50T2JqICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvdW50T2JqLnZhbHVlID0gMDtcbiAgfVxuXG4gIGZvciAoaSA9IDAsIHNsID0gcy5sZW5ndGg7IGkgPCBzbDsgaSsrKSB7XG4gICAgaWYgKHNbaV0gPT09ICcnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yIChqID0gMCwgZmwgPSBmLmxlbmd0aDsgaiA8IGZsOyBqKyspIHtcbiAgICAgIHRlbXAgPSBzW2ldICsgJyc7XG4gICAgICByZXBsID0gcmEgPyByW2pdICE9PSB1bmRlZmluZWQgPyByW2pdIDogJycgOiByWzBdO1xuICAgICAgc1tpXSA9IHRlbXAuc3BsaXQoZltqXSkuam9pbihyZXBsKTtcbiAgICAgIGlmICh0eXBlb2YgY291bnRPYmogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvdW50T2JqLnZhbHVlICs9IHRlbXAuc3BsaXQoZltqXSkubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNhID8gcyA6IHNbMF07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyX3JlcGxhY2UuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cnRvbG93ZXIoc3RyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvc3RydG9sb3dlci9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgZXhhbXBsZSAxOiBzdHJ0b2xvd2VyKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdrZXZpbiB2YW4gem9ubmV2ZWxkJ1xuXG4gIHJldHVybiAoc3RyICsgJycpLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RydG9sb3dlci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RydG91cHBlcihzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJ0b3VwcGVyL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICBleGFtcGxlIDE6IHN0cnRvdXBwZXIoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tFVklOIFZBTiBaT05ORVZFTEQnXG5cbiAgcmV0dXJuIChzdHIgKyAnJykudG9VcHBlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJ0b3VwcGVyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZGVjb2RlKGVuY29kZWREYXRhKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2RlY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IFRodW5kZXIubVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBBbWFuIEd1cHRhXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogUGVsbGVudGVzcXVlIE1hbGVzdWFkYVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2RlY29kZSgnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PScpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9kZWNvZGUoJ1lRPT0nKVxuICAvLyAgIHJldHVybnMgMjogJ2EnXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZGVjb2RlKCc0cHlUSU1PZ0lHeGhJRzF2WkdVPScpXG4gIC8vICAgcmV0dXJucyAzOiAn4pyTIMOgIGxhIG1vZGUnXG5cbiAgLy8gZGVjb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGRlY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBkZWNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZGVjb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBHb2luZyBiYWNrd2FyZHM6IGZyb20gYnl0ZXN0cmVhbSwgdG8gcGVyY2VudC1lbmNvZGluZywgdG8gb3JpZ2luYWwgc3RyaW5nLlxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYXRvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVVEY4c3RyaW5nKHdpbmRvdy5hdG9iKGVuY29kZWREYXRhKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGVuY29kZWREYXRhLCAnYmFzZTY0JykudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gIH1cblxuICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgdmFyIG8xO1xuICB2YXIgbzI7XG4gIHZhciBvMztcbiAgdmFyIGgxO1xuICB2YXIgaDI7XG4gIHZhciBoMztcbiAgdmFyIGg0O1xuICB2YXIgYml0cztcbiAgdmFyIGkgPSAwO1xuICB2YXIgYWMgPSAwO1xuICB2YXIgZGVjID0gJyc7XG4gIHZhciB0bXBBcnIgPSBbXTtcblxuICBpZiAoIWVuY29kZWREYXRhKSB7XG4gICAgcmV0dXJuIGVuY29kZWREYXRhO1xuICB9XG5cbiAgZW5jb2RlZERhdGEgKz0gJyc7XG5cbiAgZG8ge1xuICAgIC8vIHVucGFjayBmb3VyIGhleGV0cyBpbnRvIHRocmVlIG9jdGV0cyB1c2luZyBpbmRleCBwb2ludHMgaW4gYjY0XG4gICAgaDEgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDIgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDMgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDQgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG5cbiAgICBiaXRzID0gaDEgPDwgMTggfCBoMiA8PCAxMiB8IGgzIDw8IDYgfCBoNDtcblxuICAgIG8xID0gYml0cyA+PiAxNiAmIDB4ZmY7XG4gICAgbzIgPSBiaXRzID4+IDggJiAweGZmO1xuICAgIG8zID0gYml0cyAmIDB4ZmY7XG5cbiAgICBpZiAoaDMgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xKTtcbiAgICB9IGVsc2UgaWYgKGg0ID09PSA2NCkge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSwgbzIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMiwgbzMpO1xuICAgIH1cbiAgfSB3aGlsZSAoaSA8IGVuY29kZWREYXRhLmxlbmd0aCk7XG5cbiAgZGVjID0gdG1wQXJyLmpvaW4oJycpO1xuXG4gIHJldHVybiBkZWNvZGVVVEY4c3RyaW5nKGRlYy5yZXBsYWNlKC9cXDArJC8sICcnKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0X2RlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0X2VuY29kZShzdHJpbmdUb0VuY29kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Jhc2U2NF9lbmNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUeWxlciBBa2lucyAoaHR0cDovL3J1bWtpbi5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBCYXlyb24gR3VldmFyYVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGltcHJvdmVkIGJ5OiBJbmRpZ283NDRcbiAgLy8gICBleGFtcGxlIDE6IGJhc2U2NF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ1MyVjJhVzRnZG1GdUlGcHZibTVsZG1Wc1pBPT0nXG4gIC8vICAgZXhhbXBsZSAyOiBiYXNlNjRfZW5jb2RlKCdhJylcbiAgLy8gICByZXR1cm5zIDI6ICdZUT09J1xuICAvLyAgIGV4YW1wbGUgMzogYmFzZTY0X2VuY29kZSgn4pyTIMOgIGxhIG1vZGUnKVxuICAvLyAgIHJldHVybnMgMzogJzRweVRJTU9nSUd4aElHMXZaR1U9J1xuXG4gIC8vIGVuY29kZVVURjhzdHJpbmcoKVxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBlbmNvZGUgcHJvcGVybHkgVVRGOCBzdHJpbmdcbiAgLy8gQWRhcHRlZCBmcm9tIFNvbHV0aW9uICMxIGF0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZ1xuICB2YXIgZW5jb2RlVVRGOHN0cmluZyA9IGZ1bmN0aW9uIGVuY29kZVVURjhzdHJpbmcoc3RyKSB7XG4gICAgLy8gZmlyc3Qgd2UgdXNlIGVuY29kZVVSSUNvbXBvbmVudCB0byBnZXQgcGVyY2VudC1lbmNvZGVkIFVURi04LFxuICAgIC8vIHRoZW4gd2UgY29udmVydCB0aGUgcGVyY2VudCBlbmNvZGluZ3MgaW50byByYXcgYnl0ZXMgd2hpY2hcbiAgICAvLyBjYW4gYmUgZmVkIGludG8gdGhlIGJhc2U2NCBlbmNvZGluZyBhbGdvcml0aG0uXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIHRvU29saWRCeXRlcyhtYXRjaCwgcDEpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcgKyBwMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShlbmNvZGVVVEY4c3RyaW5nKHN0cmluZ1RvRW5jb2RlKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKHN0cmluZ1RvRW5jb2RlKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIH1cblxuICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgdmFyIG8xO1xuICB2YXIgbzI7XG4gIHZhciBvMztcbiAgdmFyIGgxO1xuICB2YXIgaDI7XG4gIHZhciBoMztcbiAgdmFyIGg0O1xuICB2YXIgYml0cztcbiAgdmFyIGkgPSAwO1xuICB2YXIgYWMgPSAwO1xuICB2YXIgZW5jID0gJyc7XG4gIHZhciB0bXBBcnIgPSBbXTtcblxuICBpZiAoIXN0cmluZ1RvRW5jb2RlKSB7XG4gICAgcmV0dXJuIHN0cmluZ1RvRW5jb2RlO1xuICB9XG5cbiAgc3RyaW5nVG9FbmNvZGUgPSBlbmNvZGVVVEY4c3RyaW5nKHN0cmluZ1RvRW5jb2RlKTtcblxuICBkbyB7XG4gICAgLy8gcGFjayB0aHJlZSBvY3RldHMgaW50byBmb3VyIGhleGV0c1xuICAgIG8xID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuICAgIG8yID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuICAgIG8zID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuXG4gICAgYml0cyA9IG8xIDw8IDE2IHwgbzIgPDwgOCB8IG8zO1xuXG4gICAgaDEgPSBiaXRzID4+IDE4ICYgMHgzZjtcbiAgICBoMiA9IGJpdHMgPj4gMTIgJiAweDNmO1xuICAgIGgzID0gYml0cyA+PiA2ICYgMHgzZjtcbiAgICBoNCA9IGJpdHMgJiAweDNmO1xuXG4gICAgLy8gdXNlIGhleGV0cyB0byBpbmRleCBpbnRvIGI2NCwgYW5kIGFwcGVuZCByZXN1bHQgdG8gZW5jb2RlZCBzdHJpbmdcbiAgICB0bXBBcnJbYWMrK10gPSBiNjQuY2hhckF0KGgxKSArIGI2NC5jaGFyQXQoaDIpICsgYjY0LmNoYXJBdChoMykgKyBiNjQuY2hhckF0KGg0KTtcbiAgfSB3aGlsZSAoaSA8IHN0cmluZ1RvRW5jb2RlLmxlbmd0aCk7XG5cbiAgZW5jID0gdG1wQXJyLmpvaW4oJycpO1xuXG4gIHZhciByID0gc3RyaW5nVG9FbmNvZGUubGVuZ3RoICUgMztcblxuICByZXR1cm4gKHIgPyBlbmMuc2xpY2UoMCwgciAtIDMpIDogZW5jKSArICc9PT0nLnNsaWNlKHIgfHwgMyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0X2VuY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYm9vbHZhbChtaXhlZFZhcikge1xuICAvLyBvcmlnaW5hbCBieTogV2lsbCBSb3dlXG4gIC8vICAgZXhhbXBsZSAxOiBib29sdmFsKHRydWUpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBib29sdmFsKGZhbHNlKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGJvb2x2YWwoMClcbiAgLy8gICByZXR1cm5zIDM6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA0OiBib29sdmFsKDAuMClcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA1OiBib29sdmFsKCcnKVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDY6IGJvb2x2YWwoJzAnKVxuICAvLyAgIHJldHVybnMgNjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDc6IGJvb2x2YWwoW10pXG4gIC8vICAgcmV0dXJucyA3OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgODogYm9vbHZhbCgnJylcbiAgLy8gICByZXR1cm5zIDg6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA5OiBib29sdmFsKG51bGwpXG4gIC8vICAgcmV0dXJucyA5OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMTA6IGJvb2x2YWwodW5kZWZpbmVkKVxuICAvLyAgIHJldHVybnMgMTA6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAxMTogYm9vbHZhbCgndHJ1ZScpXG4gIC8vICAgcmV0dXJucyAxMTogdHJ1ZVxuXG4gIGlmIChtaXhlZFZhciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobWl4ZWRWYXIgPT09IDAgfHwgbWl4ZWRWYXIgPT09IDAuMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gJycgfHwgbWl4ZWRWYXIgPT09ICcwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG1peGVkVmFyKSAmJiBtaXhlZFZhci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobWl4ZWRWYXIgPT09IG51bGwgfHwgbWl4ZWRWYXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2x2YWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW1wdHkobWl4ZWRWYXIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9lbXB0eS9cbiAgLy8gb3JpZ2luYWwgYnk6IFBoaWxpcHBlIEJhdW1hbm5cbiAgLy8gICAgaW5wdXQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgaW5wdXQgYnk6IExIXG4gIC8vICAgIGlucHV0IGJ5OiBTdG95YW4gS3lvc2V2IChodHRwOi8vd3d3LnN2ZXN0Lm9yZy8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogRnJhbmNlc2NvXG4gIC8vIGltcHJvdmVkIGJ5OiBNYXJjIEphbnNlblxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICBleGFtcGxlIDE6IGVtcHR5KG51bGwpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBlbXB0eSh1bmRlZmluZWQpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiBlbXB0eShbXSlcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGVtcHR5KHt9KVxuICAvLyAgIHJldHVybnMgNDogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNTogZW1wdHkoeydhRnVuYycgOiBmdW5jdGlvbiAoKSB7IGFsZXJ0KCdodW1wdHknKTsgfSB9KVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcblxuICB2YXIgdW5kZWY7XG4gIHZhciBrZXk7XG4gIHZhciBpO1xuICB2YXIgbGVuO1xuICB2YXIgZW1wdHlWYWx1ZXMgPSBbdW5kZWYsIG51bGwsIGZhbHNlLCAwLCAnJywgJzAnXTtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSBlbXB0eVZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChtaXhlZFZhciA9PT0gZW1wdHlWYWx1ZXNbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICgodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoa2V5IGluIG1peGVkVmFyKSB7XG4gICAgICBpZiAobWl4ZWRWYXIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtcHR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsb2F0dmFsKG1peGVkVmFyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZmxvYXR2YWwvXG4gIC8vIG9yaWdpbmFsIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSBuYXRpdmUgcGFyc2VGbG9hdCgpIG1ldGhvZCBvZiBKYXZhU2NyaXB0IHJldHVybnMgTmFOXG4gIC8vICAgICAgbm90ZSAxOiB3aGVuIGl0IGVuY291bnRlcnMgYSBzdHJpbmcgYmVmb3JlIGFuIGludCBvciBmbG9hdCB2YWx1ZS5cbiAgLy8gICBleGFtcGxlIDE6IGZsb2F0dmFsKCcxNTAuMDNfcGFnZS1zZWN0aW9uJylcbiAgLy8gICByZXR1cm5zIDE6IDE1MC4wM1xuICAvLyAgIGV4YW1wbGUgMjogZmxvYXR2YWwoJ3BhZ2U6IDMnKVxuICAvLyAgIGV4YW1wbGUgMjogZmxvYXR2YWwoJy01MCArIDgnKVxuICAvLyAgIHJldHVybnMgMjogMFxuICAvLyAgIHJldHVybnMgMjogLTUwXG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQobWl4ZWRWYXIpIHx8IDA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmxvYXR2YWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW50dmFsKG1peGVkVmFyLCBiYXNlKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW50dmFsL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHN0ZW5zaVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgICBpbnB1dCBieTogTWF0dGVvXG4gIC8vICAgZXhhbXBsZSAxOiBpbnR2YWwoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogMFxuICAvLyAgIGV4YW1wbGUgMjogaW50dmFsKDQuMilcbiAgLy8gICByZXR1cm5zIDI6IDRcbiAgLy8gICBleGFtcGxlIDM6IGludHZhbCg0MiwgOClcbiAgLy8gICByZXR1cm5zIDM6IDQyXG4gIC8vICAgZXhhbXBsZSA0OiBpbnR2YWwoJzA5JylcbiAgLy8gICByZXR1cm5zIDQ6IDlcbiAgLy8gICBleGFtcGxlIDU6IGludHZhbCgnMWUnLCAxNilcbiAgLy8gICByZXR1cm5zIDU6IDMwXG4gIC8vICAgZXhhbXBsZSA2OiBpbnR2YWwoMHgyMDAwMDAwMDEpXG4gIC8vICAgcmV0dXJucyA2OiA4NTg5OTM0NTkzXG4gIC8vICAgZXhhbXBsZSA3OiBpbnR2YWwoJzB4ZmYnLCAwKVxuICAvLyAgIHJldHVybnMgNzogMjU1XG4gIC8vICAgZXhhbXBsZSA4OiBpbnR2YWwoJzAxMCcsIDApXG4gIC8vICAgcmV0dXJucyA4OiA4XG5cbiAgdmFyIHRtcCwgbWF0Y2g7XG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKTtcblxuICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuICttaXhlZFZhcjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChiYXNlID09PSAwKSB7XG4gICAgICBtYXRjaCA9IG1peGVkVmFyLm1hdGNoKC9eXFxzKjAoeD8pL2kpO1xuICAgICAgYmFzZSA9IG1hdGNoID8gbWF0Y2hbMV0gPyAxNiA6IDggOiAxMDtcbiAgICB9XG4gICAgdG1wID0gcGFyc2VJbnQobWl4ZWRWYXIsIGJhc2UgfHwgMTApO1xuICAgIHJldHVybiBpc05hTih0bXApIHx8ICFpc0Zpbml0ZSh0bXApID8gMCA6IHRtcDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShtaXhlZFZhcikpIHtcbiAgICByZXR1cm4gbWl4ZWRWYXIgPCAwID8gTWF0aC5jZWlsKG1peGVkVmFyKSA6IE1hdGguZmxvb3IobWl4ZWRWYXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50dmFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2FycmF5KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IE5hdGhhbiBTZXB1bHZlZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBDb3JkXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBNYW5pc2hcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBJbiBMb2N1dHVzLCBqYXZhc2NyaXB0IG9iamVjdHMgYXJlIGxpa2UgcGhwIGFzc29jaWF0aXZlIGFycmF5cyxcbiAgLy8gICAgICBub3RlIDE6IHRodXMgSmF2YVNjcmlwdCBvYmplY3RzIHdpbGwgYWxzb1xuICAvLyAgICAgIG5vdGUgMTogcmV0dXJuIHRydWUgaW4gdGhpcyBmdW5jdGlvbiAoZXhjZXB0IGZvciBvYmplY3RzIHdoaWNoIGluaGVyaXQgcHJvcGVydGllcyxcbiAgLy8gICAgICBub3RlIDE6IGJlaW5nIHRodXMgdXNlZCBhcyBvYmplY3RzKSxcbiAgLy8gICAgICBub3RlIDE6IHVubGVzcyB5b3UgZG8gaW5pX3NldCgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnLCAwKSxcbiAgLy8gICAgICBub3RlIDE6IGluIHdoaWNoIGNhc2Ugb25seSBnZW51aW5lIEphdmFTY3JpcHQgYXJyYXlzXG4gIC8vICAgICAgbm90ZSAxOiB3aWxsIHJldHVybiB0cnVlXG4gIC8vICAgZXhhbXBsZSAxOiBpc19hcnJheShbJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2FycmF5KCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19hcnJheSh7MDogJ0tldmluJywgMTogJ3ZhbicsIDI6ICdab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGluaV9zZXQoJ2xvY3V0dXMub2JqZWN0c0FzQXJyYXlzJywgMClcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2FycmF5KHswOiAnS2V2aW4nLCAxOiAndmFuJywgMjogJ1pvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGlzX2FycmF5KGZ1bmN0aW9uIHRtcF9hICgpeyB0aGlzLm5hbWUgPSAnS2V2aW4nIH0pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuXG4gIHZhciBfZ2V0RnVuY05hbWUgPSBmdW5jdGlvbiBfZ2V0RnVuY05hbWUoZm4pIHtcbiAgICB2YXIgbmFtZSA9IC9cXFcqZnVuY3Rpb25cXHMrKFtcXHckXSspXFxzKlxcKC8uZXhlYyhmbik7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gJyhBbm9ueW1vdXMpJztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVbMV07XG4gIH07XG4gIHZhciBfaXNBcnJheSA9IGZ1bmN0aW9uIF9pc0FycmF5KG1peGVkVmFyKSB7XG4gICAgLy8gcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgLy8gVGhlIGFib3ZlIHdvcmtzLCBidXQgbGV0J3MgZG8gdGhlIGV2ZW4gbW9yZSBzdHJpbmdlbnQgYXBwcm9hY2g6XG4gICAgLy8gKHNpbmNlIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgY291bGQgYmUgb3ZlcnJpZGRlbilcbiAgICAvLyBOdWxsLCBOb3QgYW4gb2JqZWN0LCBubyBsZW5ndGggcHJvcGVydHkgc28gY291bGRuJ3QgYmUgYW4gQXJyYXkgKG9yIFN0cmluZylcbiAgICBpZiAoIW1peGVkVmFyIHx8ICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBtaXhlZFZhci5sZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBsZW4gPSBtaXhlZFZhci5sZW5ndGg7XG4gICAgbWl4ZWRWYXJbbWl4ZWRWYXIubGVuZ3RoXSA9ICdib2d1cyc7XG4gICAgLy8gVGhlIG9ubHkgd2F5IEkgY2FuIHRoaW5rIG9mIHRvIGdldCBhcm91bmQgdGhpcyAob3Igd2hlcmUgdGhlcmUgd291bGQgYmUgdHJvdWJsZSlcbiAgICAvLyB3b3VsZCBiZSB0byBoYXZlIGFuIG9iamVjdCBkZWZpbmVkXG4gICAgLy8gd2l0aCBhIGN1c3RvbSBcImxlbmd0aFwiIGdldHRlciB3aGljaCBjaGFuZ2VkIGJlaGF2aW9yIG9uIGVhY2ggY2FsbFxuICAgIC8vIChvciBhIHNldHRlciB0byBtZXNzIHVwIHRoZSBmb2xsb3dpbmcgYmVsb3cpIG9yIGEgY3VzdG9tXG4gICAgLy8gc2V0dGVyIGZvciBudW1lcmljIHByb3BlcnRpZXMsIGJ1dCBldmVuIHRoYXQgd291bGQgbmVlZCB0byBsaXN0ZW4gZm9yXG4gICAgLy8gc3BlY2lmaWMgaW5kZXhlczsgYnV0IHRoZXJlIHNob3VsZCBiZSBubyBmYWxzZSBuZWdhdGl2ZXNcbiAgICAvLyBhbmQgc3VjaCBhIGZhbHNlIHBvc2l0aXZlIHdvdWxkIG5lZWQgdG8gcmVseSBvbiBsYXRlciBKYXZhU2NyaXB0XG4gICAgLy8gaW5ub3ZhdGlvbnMgbGlrZSBfX2RlZmluZVNldHRlcl9fXG4gICAgaWYgKGxlbiAhPT0gbWl4ZWRWYXIubGVuZ3RoKSB7XG4gICAgICAvLyBXZSBrbm93IGl0J3MgYW4gYXJyYXkgc2luY2UgbGVuZ3RoIGF1dG8tY2hhbmdlZCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBhXG4gICAgICAvLyBudW1lcmljIHByb3BlcnR5IGF0IGl0cyBsZW5ndGggZW5kLCBzbyBzYWZlbHkgZ2V0IHJpZCBvZiBvdXIgYm9ndXMgZWxlbWVudFxuICAgICAgbWl4ZWRWYXIubGVuZ3RoIC09IDE7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gR2V0IHJpZCBvZiB0aGUgcHJvcGVydHkgd2UgYWRkZWQgb250byBhIG5vbi1hcnJheSBvYmplY3Q7IG9ubHkgcG9zc2libGVcbiAgICAvLyBzaWRlLWVmZmVjdCBpcyBpZiB0aGUgdXNlciBhZGRzIGJhY2sgdGhlIHByb3BlcnR5IGxhdGVyLCBpdCB3aWxsIGl0ZXJhdGVcbiAgICAvLyB0aGlzIHByb3BlcnR5IGluIHRoZSBvbGRlciBvcmRlciBwbGFjZW1lbnQgaW4gSUUgKGFuIG9yZGVyIHdoaWNoIHNob3VsZCBub3RcbiAgICAvLyBiZSBkZXBlbmRlZCBvbiBhbnl3YXlzKVxuICAgIGRlbGV0ZSBtaXhlZFZhclttaXhlZFZhci5sZW5ndGhdO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBpZiAoIW1peGVkVmFyIHx8ICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheShtaXhlZFZhcik7XG5cbiAgaWYgKGlzQXJyYXkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpbmlWYWwgPSAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnLi4vaW5mby9pbmlfZ2V0JykoJ2xvY3V0dXMub2JqZWN0c0FzQXJyYXlzJykgOiB1bmRlZmluZWQpIHx8ICdvbic7XG4gIGlmIChpbmlWYWwgPT09ICdvbicpIHtcbiAgICB2YXIgYXNTdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpO1xuICAgIHZhciBhc0Z1bmMgPSBfZ2V0RnVuY05hbWUobWl4ZWRWYXIuY29uc3RydWN0b3IpO1xuXG4gICAgaWYgKGFzU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyAmJiBhc0Z1bmMgPT09ICdPYmplY3QnKSB7XG4gICAgICAvLyBNb3N0IGxpa2VseSBhIGxpdGVyYWwgYW5kIGludGVuZGVkIGFzIGFzc29jLiBhcnJheVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2Jvb2wobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19ib29sL1xuICAvLyBvcmlnaW5hbCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQ291cnNlc1dlYiAoaHR0cDovL3d3dy5jb3Vyc2Vzd2ViLm5ldC8pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19ib29sKGZhbHNlKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfYm9vbCgwKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09IHRydWUgfHwgbWl4ZWRWYXIgPT09IGZhbHNlOyAvLyBGYXN0ZXIgKGluIEZGKSB0aGFuIHR5cGUgY2hlY2tpbmdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19ib29sLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2NhbGxhYmxlKG1peGVkVmFyLCBzeW50YXhPbmx5LCBjYWxsYWJsZU5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19jYWxsYWJsZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBGcmFuw6dvaXNcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgdmFyaWFibGUgY2FsbGFibGVOYW1lIGNhbm5vdCB3b3JrIGFzIGEgc3RyaW5nIHZhcmlhYmxlIHBhc3NlZCBieVxuICAvLyAgICAgIG5vdGUgMTogcmVmZXJlbmNlIGFzIGluIFBIUCAoc2luY2UgSmF2YVNjcmlwdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmdcbiAgLy8gICAgICBub3RlIDE6IHN0cmluZ3MgYnkgcmVmZXJlbmNlKSwgYnV0IGluc3RlYWQgd2lsbCB0YWtlIHRoZSBuYW1lIG9mXG4gIC8vICAgICAgbm90ZSAxOiBhIGdsb2JhbCB2YXJpYWJsZSBhbmQgc2V0IHRoYXQgaW5zdGVhZC5cbiAgLy8gICAgICBub3RlIDE6IFdoZW4gdXNlZCBvbiBhbiBvYmplY3QsIGRlcGVuZHMgb24gYSBjb25zdHJ1Y3RvciBwcm9wZXJ0eVxuICAvLyAgICAgIG5vdGUgMTogYmVpbmcga2VwdCBvbiB0aGUgb2JqZWN0IHByb3RvdHlwZVxuICAvLyAgICAgIG5vdGUgMjogRGVwZW5kaW5nIG9uIHRoZSBgY2FsbGFibGVOYW1lYCB0aGF0IGlzIHBhc3NlZCwgdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGV2YWwuXG4gIC8vICAgICAgbm90ZSAyOiBUaGUgZXZhbCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDI6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDI6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2NhbGxhYmxlKCdpc19jYWxsYWJsZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19jYWxsYWJsZSgnYm9ndXNGdW5jdGlvbicsIHRydWUpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlIC8vIGdpdmVzIHRydWUgYmVjYXVzZSBkb2VzIG5vdCBkbyBzdHJpY3QgY2hlY2tpbmdcbiAgLy8gICBleGFtcGxlIDM6IGZ1bmN0aW9uIFNvbWVDbGFzcyAoKSB7fVxuICAvLyAgIGV4YW1wbGUgMzogU29tZUNsYXNzLnByb3RvdHlwZS5zb21lTWV0aG9kID0gZnVuY3Rpb24gKCl7fVxuICAvLyAgIGV4YW1wbGUgMzogdmFyIHRlc3RPYmogPSBuZXcgU29tZUNsYXNzKClcbiAgLy8gICBleGFtcGxlIDM6IGlzX2NhbGxhYmxlKFt0ZXN0T2JqLCAnc29tZU1ldGhvZCddLCB0cnVlLCAnbXlWYXInKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSBteVZhclxuICAvLyAgIHJldHVybnMgMzogJ1NvbWVDbGFzczo6c29tZU1ldGhvZCdcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2NhbGxhYmxlKGZ1bmN0aW9uICgpIHt9KVxuICAvLyAgIHJldHVybnMgNDogdHJ1ZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIG1ldGhvZCA9ICcnO1xuICB2YXIgdmFsaWRGdW5jdGlvbk5hbWUgPSBmYWxzZTtcblxuICB2YXIgZ2V0RnVuY05hbWUgPSBmdW5jdGlvbiBnZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcblxuICBpZiAodHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9ICRnbG9iYWw7XG4gICAgbWV0aG9kID0gbWl4ZWRWYXI7XG4gICAgbmFtZSA9IG1peGVkVmFyO1xuICAgIHZhbGlkRnVuY3Rpb25OYW1lID0gISFuYW1lLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMiAmJiBfdHlwZW9mKG1peGVkVmFyWzBdKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1peGVkVmFyWzFdID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9IG1peGVkVmFyWzBdO1xuICAgIG1ldGhvZCA9IG1peGVkVmFyWzFdO1xuICAgIG5hbWUgPSAob2JqLmNvbnN0cnVjdG9yICYmIGdldEZ1bmNOYW1lKG9iai5jb25zdHJ1Y3RvcikpICsgJzo6JyArIG1ldGhvZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3ludGF4T25seSB8fCB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoY2FsbGFibGVOYW1lKSB7XG4gICAgICAkZ2xvYmFsW2NhbGxhYmxlTmFtZV0gPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHZhbGlkRnVuY3Rpb25OYW1lIGF2b2lkcyBleHBsb2l0c1xuICBpZiAodmFsaWRGdW5jdGlvbk5hbWUgJiYgdHlwZW9mIGV2YWwobWV0aG9kKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2NhbGxhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2Zsb2F0KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfZmxvYXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogV2ViRGV2SG9ibyAoaHR0cDovL3dlYmRldmhvYm8uYmxvZ3Nwb3QuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgICAgbm90ZSAxOiAxLjAgaXMgc2ltcGxpZmllZCB0byAxIGJlZm9yZSBpdCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGZ1bmN0aW9uLCB0aGlzIG1ha2VzXG4gIC8vICAgICAgbm90ZSAxOiBpdCBkaWZmZXJlbnQgZnJvbSB0aGUgUEhQIGltcGxlbWVudGF0aW9uLiBXZSBjYW4ndCBmaXggdGhpcyB1bmZvcnR1bmF0ZWx5LlxuICAvLyAgIGV4YW1wbGUgMTogaXNfZmxvYXQoMTg2LjMxKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHJldHVybiArbWl4ZWRWYXIgPT09IG1peGVkVmFyICYmICghaXNGaW5pdGUobWl4ZWRWYXIpIHx8ICEhKG1peGVkVmFyICUgMSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2Zsb2F0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2ludChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2ludC9cbiAgLy8gb3JpZ2luYWwgYnk6IEFsZXhcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gIHJldmlzZWQgYnk6IE1hdHQgQnJhZGxleVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBub3RlIDE6IDEuMCBpcyBzaW1wbGlmaWVkIHRvIDEgYmVmb3JlIGl0IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgZnVuY3Rpb24sIHRoaXMgbWFrZXNcbiAgLy8gICAgICBub3RlIDE6IGl0IGRpZmZlcmVudCBmcm9tIHRoZSBQSFAgaW1wbGVtZW50YXRpb24uIFdlIGNhbid0IGZpeCB0aGlzIHVuZm9ydHVuYXRlbHkuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19pbnQoMjMpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19pbnQoJzIzJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19pbnQoMjMuNSlcbiAgLy8gICByZXR1cm5zIDM6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA0OiBpc19pbnQodHJ1ZSlcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG5cbiAgcmV0dXJuIG1peGVkVmFyID09PSArbWl4ZWRWYXIgJiYgaXNGaW5pdGUobWl4ZWRWYXIpICYmICEobWl4ZWRWYXIgJSAxKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19pbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfbnVsbChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX251bGwvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfbnVsbCgnMjMnKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzX251bGwobnVsbClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09IG51bGw7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfbnVsbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfbnVtZXJpYyhtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX251bWVyaWMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogRGF2aWRcbiAgLy8gaW1wcm92ZWQgYnk6IHRhaXRoXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBUaW0gZGUgS29uaW5nXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IERlbmlzIENoZW51IChodHRwOi8vc2hub3VsbGUubmV0KVxuICAvLyAgIGV4YW1wbGUgMTogaXNfbnVtZXJpYygxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19udW1lcmljKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19udW1lcmljKCcgKzE4Ni4zMWUyJylcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGlzX251bWVyaWMoJycpXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNTogaXNfbnVtZXJpYyhbXSlcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA2OiBpc19udW1lcmljKCcxICcpXG4gIC8vICAgcmV0dXJucyA2OiBmYWxzZVxuXG4gIHZhciB3aGl0ZXNwYWNlID0gWycgJywgJ1xcbicsICdcXHInLCAnXFx0JywgJ1xcZicsICdcXHgwYicsICdcXHhhMCcsICdcXHUyMDAwJywgJ1xcdTIwMDEnLCAnXFx1MjAwMicsICdcXHUyMDAzJywgJ1xcdTIwMDQnLCAnXFx1MjAwNScsICdcXHUyMDA2JywgJ1xcdTIwMDcnLCAnXFx1MjAwOCcsICdcXHUyMDA5JywgJ1xcdTIwMEEnLCAnXFx1MjAwQicsICdcXHUyMDI4JywgJ1xcdTIwMjknLCAnXFx1MzAwMCddLmpvaW4oJycpO1xuXG4gIC8vIEB0b2RvOiBCcmVhayB0aGlzIHVwIHVzaW5nIG1hbnkgc2luZ2xlIGNvbmRpdGlvbnMgd2l0aCBlYXJseSByZXR1cm5zXG4gIHJldHVybiAodHlwZW9mIG1peGVkVmFyID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnICYmIHdoaXRlc3BhY2UuaW5kZXhPZihtaXhlZFZhci5zbGljZSgtMSkpID09PSAtMSkgJiYgbWl4ZWRWYXIgIT09ICcnICYmICFpc05hTihtaXhlZFZhcik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfbnVtZXJpYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19vYmplY3QobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19vYmplY3QvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19vYmplY3QoJzIzJylcbiAgLy8gICByZXR1cm5zIDE6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19vYmplY3Qoe2ZvbzogJ2Jhcid9KVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfb2JqZWN0KG51bGwpXG4gIC8vICAgcmV0dXJucyAzOiBmYWxzZVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBtaXhlZFZhciAhPT0gbnVsbCAmJiAodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpID09PSAnb2JqZWN0Jztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19vYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19zY2FsYXIobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19zY2FsYXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vICAgZXhhbXBsZSAxOiBpc19zY2FsYXIoMTg2LjMxKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfc2NhbGFyKHswOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICByZXR1cm4gKC9ib29sZWFufG51bWJlcnxzdHJpbmcvLnRlc3QodHlwZW9mIG1peGVkVmFyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobWl4ZWRWYXIpKVxuICApO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX3NjYWxhci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfc3RyaW5nKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfc3RyaW5nL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IGlzX3N0cmluZygnMjMnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfc3RyaW5nKDIzLjUpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiB0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX3N0cmluZy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNzZXQoKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNzZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogRnJlbXlDb21wYW55XG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogaXNzZXQoIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDE6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAyOiBpc3NldCggJ0tldmluIHZhbiBab25uZXZlbGQnIClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICB2YXIgYSA9IGFyZ3VtZW50cztcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgdW5kZWY7XG5cbiAgaWYgKGwgPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtcHR5IGlzc2V0Jyk7XG4gIH1cblxuICB3aGlsZSAoaSAhPT0gbCkge1xuICAgIGlmIChhW2ldID09PSB1bmRlZiB8fCBhW2ldID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzc2V0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1dGY4X2VuY29kZShhcmdTdHJpbmcpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91dGY4X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHNvd2JlcnJ5XG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBZdmVzIFN1Y2FldFxuICAvLyBpbXByb3ZlZCBieToga2lyaWxsb2lkXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBVbHJpY2hcbiAgLy8gYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gICBleGFtcGxlIDE6IHV0ZjhfZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIGlmIChhcmdTdHJpbmcgPT09IG51bGwgfHwgdHlwZW9mIGFyZ1N0cmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyAucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpLnJlcGxhY2UoL1xcci9nLCBcIlxcblwiKTtcbiAgdmFyIHN0cmluZyA9IGFyZ1N0cmluZyArICcnO1xuICB2YXIgdXRmdGV4dCA9ICcnO1xuICB2YXIgc3RhcnQ7XG4gIHZhciBlbmQ7XG4gIHZhciBzdHJpbmdsID0gMDtcblxuICBzdGFydCA9IGVuZCA9IDA7XG4gIHN0cmluZ2wgPSBzdHJpbmcubGVuZ3RoO1xuICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZ2w7IG4rKykge1xuICAgIHZhciBjMSA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuICAgIHZhciBlbmMgPSBudWxsO1xuXG4gICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICBlbmQrKztcbiAgICB9IGVsc2UgaWYgKGMxID4gMTI3ICYmIGMxIDwgMjA0OCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiA2IHwgMTkyLCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2UgaWYgKChjMSAmIDB4RjgwMCkgIT09IDB4RDgwMCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiAxMiB8IDIyNCwgYzEgPj4gNiAmIDYzIHwgMTI4LCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vycm9nYXRlIHBhaXJzXG4gICAgICBpZiAoKGMxICYgMHhGQzAwKSAhPT0gMHhEODAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgdHJhaWwgc3Vycm9nYXRlIGF0ICcgKyBuKTtcbiAgICAgIH1cbiAgICAgIHZhciBjMiA9IHN0cmluZy5jaGFyQ29kZUF0KCsrbik7XG4gICAgICBpZiAoKGMyICYgMHhGQzAwKSAhPT0gMHhEQzAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgbGVhZCBzdXJyb2dhdGUgYXQgJyArIChuIC0gMSkpO1xuICAgICAgfVxuICAgICAgYzEgPSAoKGMxICYgMHgzRkYpIDw8IDEwKSArIChjMiAmIDB4M0ZGKSArIDB4MTAwMDA7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDE4IHwgMjQwLCBjMSA+PiAxMiAmIDYzIHwgMTI4LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH1cbiAgICBpZiAoZW5jICE9PSBudWxsKSB7XG4gICAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICB9XG4gICAgICB1dGZ0ZXh0ICs9IGVuYztcbiAgICAgIHN0YXJ0ID0gZW5kID0gbiArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIHN0cmluZ2wpO1xuICB9XG5cbiAgcmV0dXJuIHV0ZnRleHQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRmOF9lbmNvZGUuanMubWFwIiwiLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2NvdW50X3ZhbHVlcycgXSAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9jb3VudF92YWx1ZXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9maWxsJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmlsbCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbGxfa2V5cycgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWxsX2tleXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9maWx0ZXInIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmlsdGVyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmxpcCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZsaXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9rZXlfZXhpc3RzJyBdICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfa2V5X2V4aXN0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2tleXMnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9rZXlzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfbWFwJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21hcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3JldmVyc2UnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9yZXZlcnNlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfc2VhcmNoJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3NlYXJjaCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3N1bScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9zdW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV91bmlxdWUnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfdW5pcXVlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnY3VycmVudCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2N1cnJlbnQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdlbmQnIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvZW5kJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAna2V5JyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2tleScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ25leHQnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9uZXh0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncG9zJyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3BvcycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByZXYnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9wcmV2JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmFuZ2UnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3JhbmdlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmVzZXQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3Jlc2V0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc2l6ZW9mJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3NpemVvZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ25sMmJyJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL25sMmJyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbnVtYmVyX2Zvcm1hdCcgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbnVtYmVyX2Zvcm1hdCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByaW50ZicgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3NwcmludGYnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3NwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfcmVwZWF0JyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfcmVwZWF0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyX3NwbGl0JyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3NwbGl0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyX3dvcmRfY291bnQnIF0gICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3dvcmRfY291bnQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJpcF90YWdzJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJpcF90YWdzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyaXBzbGFzaGVzJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyaXBzbGFzaGVzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3Ryc3RyJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3Ryc3RyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RydHInIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydHInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2cHJpbnRmJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy92cHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndnNwcmludGYnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvdnNwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd3b3Jkd3JhcCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy93b3Jkd3JhcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByaW50X3InIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvcHJpbnRfcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3NlcmlhbGl6ZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvc2VyaWFsaXplJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndW5zZXJpYWxpemUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci91bnNlcmlhbGl6ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Zhcl9leHBvcnQnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvdmFyX2V4cG9ydCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Zhcl9kdW1wJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvdmFyX2R1bXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2ZXJzaW9uX2NvbXBhcmUnIF0gICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvaW5mby92ZXJzaW9uX2NvbXBhcmUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdsdHJpbScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9sdHJpbScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3J0cmltJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3J0cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndHJpbScgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvdHJpbScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3dhbGsnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV93YWxrJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfd2Fsa19yZWN1cnNpdmUnIF0gID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3dhbGtfcmVjdXJzaXZlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGF0ZV9wYXJzZScgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL2RhdGVfcGFyc2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdnZXRkYXRlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZ2V0ZGF0ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2Jhc2VuYW1lJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9maWxlc3lzdGVtL2Jhc2VuYW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGlybmFtZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vZGlybmFtZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3BhdGhpbmZvJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9maWxlc3lzdGVtL3BhdGhpbmZvJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGF0ZScgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL2RhdGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJ0b3RpbWUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvc3RydG90aW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaHR0cF9idWlsZF9xdWVyeScgXSAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfZG91YmxlJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19kb3VibGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19pbnRlZ2VyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2ludGVnZXInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19sb25nJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2xvbmcnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19yZWFsJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3JlYWwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc191bmljb2RlJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3VuaWNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19idWZmZXInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2J1ZmZlcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2RvdWJsZXZhbCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZG91YmxldmFsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZ2V0dHlwZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9nZXR0eXBlJyApO1xyXG5cclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV9tZXJnZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWVyZ2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfbWVyZ2VfcmVjdXJzaXZlJyBdID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlX3JlY3Vyc2l2ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV92YWx1ZXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfdmFsdWVzJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NvdW50JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9jb3VudCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbl9hcnJheScgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvaW5fYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnbWljcm90aW1lJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0aW1lJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvdGltZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjYWxsX3VzZXJfZnVuYycgXSAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY2FsbF91c2VyX2Z1bmNfYXJyYXknIF0gID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Z1bmN0aW9uX2V4aXN0cycgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9mdW5jdGlvbl9leGlzdHMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1bmlxaWQnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvbWlzYy91bmlxaWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZXhwbG9kZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbXBsb2RlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ21kNScgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwYXJzZV9zdHInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc3RyX3JlcGxhY2UnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc3RydG9sb3dlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJ0b3VwcGVyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jhc2U2NF9kZWNvZGUnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdiYXNlNjRfZW5jb2RlJyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwYXJzZV91cmwnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3BhcnNlX3VybCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Jhd3VybGRlY29kZScgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmF3dXJsZW5jb2RlJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxlbmNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1cmxkZWNvZGUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGRlY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VybGVuY29kZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jvb2x2YWwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvYm9vbHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdlbXB0eScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2VtcHR5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Zsb2F0dmFsJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZmxvYXR2YWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaW50dmFsJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pbnR2YWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYXJyYXknIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19ib29sJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2Jvb2wnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfY2FsbGFibGUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19jYWxsYWJsZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19mbG9hdCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2Zsb2F0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2ludCcgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfaW50JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX251bGwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVsbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19udW1lcmljJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX251bWVyaWMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfb2JqZWN0JyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc2NhbGFyJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19zY2FsYXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc3RyaW5nJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19zdHJpbmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNzZXQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc3NldCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwYXJzZV9hcmdzJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnanMtcGFyc2UtYXJncycgKTtcclxuXHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV90b19jc3YnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19jc3YnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9faHRtbF9hdHRyJyBdID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbF9hdHRyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX2h0bWwnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2h0bWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9fd2luZG93JyBdICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9fd2luZG93JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3dyYXBfYXJyYXknIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3dyYXBfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnb2tnJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvb2tnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ29rcycgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL29rcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwbGFpbl9vYmplY3QnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9wbGFpbl9vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfb2JqZWN0X2xpa2UnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfb2JqZWN0X2xpa2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYXJyYXlfbGlrZScgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfb2JqZWN0X2xpa2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY2xvbmVfb2JqZWN0JyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY2xvbmVfb2JqZWN0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2FmdGVyX2RhdGUnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2FmdGVyX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYmVmb3JlX2RhdGUnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfYmVmb3JlX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc2FtZV9kYXRlJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfc2FtZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Zvcm1hdF9kdXJhdGlvbicgXSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdkaWZmX2RheXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9kaWZmX2RheXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfdW5kZWZpbmVkJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdW5kZWZpbmVkJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3RhYl9mb2N1c2VkJyBdICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3RhYl9mb2N1c2VkJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3Njcm9sbF90b190b3AnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF90b190b3AnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY29weV90b19jbGlwJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY29weV90b19jbGlwJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3Njcm9sbF9wb3MnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF9wb3MnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfd2luZG93X2FyZycgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfd2luZG93X2FyZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICd3aW5kb3dfYXJnJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RldmljZV90eXBlJyBdICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RldmljZV90eXBlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RlYnVnJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RpbWVfdGFrZW4nICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndGltZV90YWtlbicgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdGltZV90YWtlbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwaXBlX2xvZycgXSAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9waXBlX2xvZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjb3VudGVyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3VudGVyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RvX2pxdWVyeScgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0b19qc19mdW5jJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qc19mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3JhbmRfbWQ1JyBdICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3JhbmRfbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3VybF9wYXJhbXMnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3VybF9wYXJhbXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncXVlcnlfc3RyaW5nJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcXVlcnlfc3RyaW5nJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2pxdWVyeScgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjc3NfdW5pdHMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jc3NfdW5pdHMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdqc29uX3RvX2NzdicgXSAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9qc29uX3RvX2NzdicgKTsiLCIvKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGFycmF5IGVsZW1lbnRzIGludG8gPGxpPiB0YWdzIGFuZCBhcHBlbmRzIHRoZW0gdG8gdGhlIGxpc3Qgb2YgdGhlIGdpdmVuIGlkLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCksIGFuZCBhbiBhbm9ueW1vdXMgaW5uZXIgY2xvc3VyZSB0byBjcmVhdGUgYSBsaXN0IG9mIGh0bWwgdGFncy5cclxuICogQHBhcmFtIGFyclxyXG4gKiBAcGFyYW0gbGlzdElEXHJcbiAqIEBwYXJhbSB0YWdcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggYXJyLCBsaXN0SUQsIHRhZyA9ICdsaScgKSA9PiAoIGVsID0+ICggKCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjJyArIGxpc3RJRCApICksICggZWwuaW5uZXJIVE1MICs9IGFyci5tYXAoIGl0ZW0gPT4gYDwke3RhZ30+JHtpdGVtfTwvJHt0YWd9PmAgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oICcnICkgKSApICkoKTsiLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5pbXBvcnQgaXNfb2JqZWN0X2xpa2UgZnJvbSAnLi9pc19vYmplY3RfbGlrZSc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEgKSA9PiB7XHJcblx0bGV0IHJldHVybl9odG1sID0gJyc7XHJcblx0Zm9yKCBsZXQgSSBpbiAkZGF0YSApIHtcclxuXHRcdGlmKCBpc19vYmplY3QoICRkYXRhWyBJIF0gKSApIHtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInO1xyXG5cdFx0XHRmb3IoIGxldCBLIGluICRkYXRhWyBJIF0gKSB7XHJcblx0XHRcdFx0bGV0ICR2YWx1ZSA9ICggaXNfb2JqZWN0X2xpa2UoICRkYXRhWyBJIF1bIEsgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXVsgSyBdICkgOiAkZGF0YVsgSSBdWyBLIF07XHJcblx0XHRcdFx0cmV0dXJuX2h0bWwgKz0gJHZhbHVlICsgJyAnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybl9odG1sICs9ICdcIic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgJHZhbHVlID0gKCBpc19vYmplY3RfbGlrZSggJGRhdGFbIEkgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXSApIDogJGRhdGFbIEkgXTtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInICsgJHZhbHVlICsgJ1wiICc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXR1cm5faHRtbDtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJGFycmF5ICkgPT4ge1xyXG5cdGZvciggbGV0ICRrZXkgaW4gJGFycmF5ICkge1xyXG5cdFx0d2luZG93WyAka2V5IF0gPSAkYXJyYXlbICRrZXkgXTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZXMgQSBDbG9uZSBvZiBnaXZlbiB2YWx1ZS5cclxuICogQHBhcmFtICRkYXRhXHJcbiAqIEByZXR1cm5zIHthbnl9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEgKSA9PiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggJGRhdGEgKSApOyIsIi8qKlxyXG4gKiBDb3B5IGEgc3RyaW5nIHRvIHRoZSBjbGlwYm9hcmQuIE9ubHkgd29ya3MgYXMgYSByZXN1bHQgb2YgdXNlciBhY3Rpb24gKGkuZS4gaW5zaWRlIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIpLlxyXG4gKiBDcmVhdGUgYSBuZXcgPHRleHRhcmVhPiBlbGVtZW50LCBmaWxsIGl0IHdpdGggdGhlIHN1cHBsaWVkIGRhdGEgYW5kIGFkZCBpdCB0byB0aGUgSFRNTCBkb2N1bWVudC5cclxuICogVXNlIFNlbGVjdGlvbi5nZXRSYW5nZUF0KCl0byBzdG9yZSB0aGUgc2VsZWN0ZWQgcmFuZ2UgKGlmIGFueSkuXHJcbiAqIFVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpIHRvIGNvcHkgdG8gdGhlIGNsaXBib2FyZC5cclxuICogUmVtb3ZlIHRoZSA8dGV4dGFyZWE+IGVsZW1lbnQgZnJvbSB0aGUgSFRNTCBkb2N1bWVudC4gRmluYWxseSwgdXNlIFNlbGVjdGlvbigpLmFkZFJhbmdlKCkgdG8gcmVjb3ZlciB0aGUgb3JpZ2luYWwgc2VsZWN0ZWQgcmFuZ2UgKGlmIGFueSkuXHJcbiAqIEBwYXJhbSBzdHJcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gc3RyID0+IHtcclxuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZXh0YXJlYScgKTtcclxuXHRlbC52YWx1ZSA9IHN0cjtcclxuXHRlbC5zZXRBdHRyaWJ1dGUoICdyZWFkb25seScsICcnICk7XHJcblx0ZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdGVsLnN0eWxlLmxlZnQgICAgID0gJy05OTk5cHgnO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGVsICk7XHJcblx0Y29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yYW5nZUNvdW50ID4gMCA/IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoIDAgKSA6IGZhbHNlO1xyXG5cdGVsLnNlbGVjdCgpO1xyXG5cdGRvY3VtZW50LmV4ZWNDb21tYW5kKCAnY29weScgKTtcclxuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKCBlbCApO1xyXG5cdGlmKCBzZWxlY3RlZCApIHtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UoIHNlbGVjdGVkICk7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBDcmVhdGVzIGEgY291bnRlciB3aXRoIHRoZSBzcGVjaWZpZWQgcmFuZ2UsIHN0ZXAgYW5kIGR1cmF0aW9uIGZvciB0aGUgc3BlY2lmaWVkIHNlbGVjdG9yLlxyXG4gKiBDaGVjayBpZiBzdGVwIGhhcyB0aGUgcHJvcGVyIHNpZ24gYW5kIGNoYW5nZSBpdCBhY2NvcmRpbmdseS5cclxuICogVXNlIHNldEludGVydmFsKCkgaW4gY29tYmluYXRpb24gd2l0aCBNYXRoLmFicygpIGFuZCBNYXRoLmZsb29yKCkgdG8gY2FsY3VsYXRlIHRoZSB0aW1lIGJldHdlZW4gZWFjaCBuZXcgdGV4dCBkcmF3LlxyXG4gKiBVc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigpLmlubmVySFRNTCB0byB1cGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50LlxyXG4gKiBPbWl0IHRoZSBmb3VydGggcGFyYW1ldGVyLCBzdGVwLCB0byB1c2UgYSBkZWZhdWx0IHN0ZXAgb2YgMS4gT21pdCB0aGUgZmlmdGggcGFyYW1ldGVyLCBkdXJhdGlvbiwgdG8gdXNlIGEgZGVmYXVsdCBkdXJhdGlvbiBvZiAyMDAwbXMuXHJcbiAqIEBwYXJhbSBzZWxlY3RvclxyXG4gKiBAcGFyYW0gc3RhcnRcclxuICogQHBhcmFtIGVuZFxyXG4gKiBAcGFyYW0gc3RlcFxyXG4gKiBAcGFyYW0gZHVyYXRpb25cclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBzZWxlY3Rvciwgc3RhcnQsIGVuZCwgc3RlcCA9IDEsIGR1cmF0aW9uID0gMjAwMCApID0+IHtcclxuXHRsZXQgY3VycmVudCA9IHN0YXJ0LFxyXG5cdFx0X3N0ZXAgICA9ICggZW5kIC0gc3RhcnQgKSAqIHN0ZXAgPCAwID8gLXN0ZXAgOiBzdGVwLFxyXG5cdFx0dGltZXIgICA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblx0XHRcdGN1cnJlbnQgKz0gX3N0ZXA7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gY3VycmVudDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBlbmQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGNsZWFySW50ZXJ2YWwoIHRpbWVyICk7XHJcblx0XHR9LCBNYXRoLmFicyggTWF0aC5mbG9vciggZHVyYXRpb24gLyAoIGVuZCAtIHN0YXJ0ICkgKSApICk7XHJcblx0cmV0dXJuIHRpbWVyO1xyXG59OyIsImNvbnN0IGlzTnVtYmVyaWMgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX251bWVyaWMnICk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB7XHJcblx0dmFyIHMgPSB2YWw7XHJcblx0aWYoIGlzTnVtYmVyaWMoIHZhbCApICkge1xyXG5cdFx0cmV0dXJuIHZhbCArICdweCc7XHJcblx0fSBlbHNlIGlmKCB2YWwuaW5kZXhPZiggJ3B4JyApID4gLTEgfHwgdmFsLmluZGV4T2YoICclJyApID4gLTEgfHwgdmFsLmluZGV4T2YoICdlbScgKSA+IC0xICkge1xyXG5cdFx0bGV0IGNoZWNrUHggID0gcy5yZXBsYWNlKCAncHgnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrUGN0ID0gcy5yZXBsYWNlKCAnJScsICcnICk7XHJcblx0XHRsZXQgY2hlY2tFbSAgPSBzLnJlcGxhY2UoICdlbScsICcnICk7XHJcblx0XHRpZiggaXNOdW1iZXJpYyggY2hlY2tQeCApIHx8IGlzTnVtYmVyaWMoIGNoZWNrUGN0ICkgfHwgaXNOdW1iZXJpYyggY2hlY2tFbSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcwcHgnO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJzBweCc7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBEZXRlY3RzIHdldGhlciB0aGUgd2Vic2l0ZSBpcyBiZWluZyBvcGVuZWQgaW4gYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIFVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IHByb3BlcnR5IHRvIGZpZ3VyZSBvdXQgaWYgdGhlIGRldmljZSBpcyBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPyAnTW9iaWxlJyA6ICdEZXNrdG9wJzsiLCIvKipcclxuICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gZGF0ZXMuXHJcbiAqIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gRGF0ZSBvYmplY3RzLlxyXG4gKiBAcGFyYW0gZGF0ZUluaXRpYWxcclxuICogQHBhcmFtIGRhdGVGaW5hbFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVJbml0aWFsLCBkYXRlRmluYWwgKSA9PiAoIGRhdGVGaW5hbCAtIGRhdGVJbml0aWFsICkgLyAoIDEwMDAgKiAzNjAwICogMjQgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgaHVtYW4gcmVhZGFibGUgZm9ybWF0IG9mIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gKiBEaXZpZGUgbXMgd2l0aCB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIHRvIG9idGFpbiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIGZvciBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIGFuZCBtaWxsaXNlY29uZC5cclxuICogVXNlIE9iamVjdC5lbnRyaWVzKCkgd2l0aCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKCkgdG8ga2VlcCBvbmx5IG5vbi16ZXJvIHZhbHVlcy5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSB0byBjcmVhdGUgdGhlIHN0cmluZyBmb3IgZWFjaCB2YWx1ZSwgcGx1cmFsaXppbmcgYXBwcm9wcmlhdGVseS5cclxuICogVXNlIFN0cmluZy5wcm90b3R5cGUuam9pbignLCAnKSB0byBjb21iaW5lIHRoZSB2YWx1ZXMgaW50byBhIHN0cmluZy5cclxuICogQHBhcmFtIG1zXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IG1zID0+IHtcclxuXHRpZiggbXMgPCAwICkgbXMgPSAtbXM7XHJcblx0Y29uc3QgdGltZSA9IHtcclxuXHRcdGRheTogTWF0aC5mbG9vciggbXMgLyA4NjQwMDAwMCApLFxyXG5cdFx0aG91cjogTWF0aC5mbG9vciggbXMgLyAzNjAwMDAwICkgJSAyNCxcclxuXHRcdG1pbnV0ZTogTWF0aC5mbG9vciggbXMgLyA2MDAwMCApICUgNjAsXHJcblx0XHRzZWNvbmQ6IE1hdGguZmxvb3IoIG1zIC8gMTAwMCApICUgNjAsXHJcblx0XHRtaWxsaXNlY29uZDogTWF0aC5mbG9vciggbXMgKSAlIDEwMDBcclxuXHR9O1xyXG5cdHJldHVybiBPYmplY3QuZW50cmllcyggdGltZSApXHJcblx0XHRcdFx0IC5maWx0ZXIoIHZhbCA9PiB2YWxbIDEgXSAhPT0gMCApXHJcblx0XHRcdFx0IC5tYXAoICggWyBrZXksIHZhbCBdICkgPT4gYCR7dmFsfSAke2tleX0ke3ZhbCAhPT0gMSA/ICdzJyA6ICcnfWAgKVxyXG5cdFx0XHRcdCAuam9pbiggJywgJyApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYWZ0ZXIgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvciAoPikgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYWZ0ZXIgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPiBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGJlZm9yZSBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgbGVzcyB0aGFuIG9wZXJhdG9yICg8KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBiZWZvcmUgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPCBkYXRlQjsiLCJpbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gJy4vaXNfdW5kZWZpbmVkJztcclxuaW1wb3J0IGlzX3N0cmluZyBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfc3RyaW5nJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBnaXZlbiBPYmplY3QgLyBWYWx1ZSBpcyBhIGpRdWVyeSBJbnN0YW5jZS5cclxuICogQHBhcmFtICRlbGVtXHJcbiAqIEByZXR1cm5zIHtib29sZWFufCp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRlbGVtICkgJiYgZmFsc2UgPT09IGlzX3N0cmluZyggJGVsZW0gKSAmJiAkZWxlbS5qUXVlcnkgKTsiLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5pbXBvcnQgaXNfYXJyYXkgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5JztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpcyBvYmplY3QtbGlrZS5cclxuICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBudWxsIGFuZCBpdHMgdHlwZW9mIGlzIGVxdWFsIHRvICdvYmplY3QnLlxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIHZhbCApID0+IHtcclxuXHRyZXR1cm4gKCBpc19vYmplY3QoIHZhbCApIHx8IGlzX2FycmF5KCB2YWwgKSApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgdGhlIHNhbWUgYXMgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKSBhbmQgc3RyaWN0IGVxdWFsaXR5IGNoZWNraW5nICg9PT0pIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBLnRvSVNPU3RyaW5nKCkgPT09IGRhdGVCLnRvSVNPU3RyaW5nKCk7IiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciB0YWIgb2YgdGhlIHBhZ2UgaXMgZm9jdXNlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKiBVc2UgdGhlIERvY3VtZW50LmhpZGRlbiBwcm9wZXJ0eSwgaW50cm9kdWNlZCBieSB0aGUgUGFnZSBWaXNpYmlsaXR5IEFQSSB0byBjaGVjayBpZiB0aGUgYnJvd3NlciB0YWIgb2YgdGhlIHBhZ2UgaXMgdmlzaWJsZSBvciBoaWRkZW4uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAhZG9jdW1lbnQuaGlkZGVuOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB1bmRlZmluZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBzdHJpY3QgZXF1YWxpdHkgb3BlcmF0b3IgdG8gY2hlY2sgaWYgdGhlIHZhbHVlIGFuZCBvZiB2YWwgYXJlIGVxdWFsIHRvIHVuZGVmaW5lZC5cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IHZhbCA9PT0gdW5kZWZpbmVkOyIsImltcG9ydCBpc191bmRlZmluZWQgZnJvbSAnLi9pc191bmRlZmluZWQnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB3aW5kb3cgaGFzIGdpdmVuIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5ICkgPT4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3dbICRrZXkgXSApICk7IiwibGV0ICRPS1MgICAgICAgPSAoIHByb3BlcnRpZXMsIG9iaiwgZGVmYXVsdFZhbHVlLCBkZWxpbWl0ZXIgPSAnLycgKSA9PiB7XHJcblx0cHJvcGVydGllcyAgID0gKCB0eXBlb2YgcHJvcGVydGllcyA9PT0gJ3N0cmluZycgKSA/IHByb3BlcnRpZXMuc3BsaXQoIGRlbGltaXRlciApIDogWyBwcm9wZXJ0aWVzIF07XHJcblx0bGV0IHByb3BlcnR5ID0gcHJvcGVydGllcy5zaGlmdCgpO1xyXG5cclxuXHRpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxuXHJcblx0aWYoIHByb3BlcnRpZXMubGVuZ3RoICkge1xyXG5cdFx0cHJvcGVydGllcyA9IHByb3BlcnRpZXMuam9pbiggZGVsaW1pdGVyICk7XHJcblx0XHRyZXR1cm4gJE9LUyggcHJvcGVydGllcywgb2JqWyBwcm9wZXJ0eSBdLCBkZWZhdWx0VmFsdWUsIGRlbGltaXRlciApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gb2JqWyBwcm9wZXJ0eSBdO1xyXG5cdH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSAkT0tTOyIsImxldCAkT0tTICAgICAgID0gKCBwcm9wZXJ0aWVzLCB2YWx1ZSwgb2JqLCBkZWxpbWl0ZXIgPSAnLycgKSA9PiB7XHJcblx0cHJvcGVydGllcyAgID0gKCB0eXBlb2YgcHJvcGVydGllcyA9PT0gJ3N0cmluZycgKSA/IHByb3BlcnRpZXMuc3BsaXQoIGRlbGltaXRlciApIDogWyBwcm9wZXJ0aWVzIF07XHJcblx0bGV0IHByb3BlcnR5ID0gcHJvcGVydGllcy5zaGlmdCgpO1xyXG5cclxuXHRpZiggcHJvcGVydGllcy5sZW5ndGggKSB7XHJcblx0XHRwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5qb2luKCBkZWxpbWl0ZXIgKTtcclxuXHJcblx0XHRpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdG9ialsgcHJvcGVydHkgXSA9IHt9O1xyXG5cdFx0fSBlbHNlIGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdICE9PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKCAnT2JqZWN0IHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiIGFscmVhZHkgaGFzIG5vbiBvYmplY3QgdmFsdWU6Jywgb2JqWyBwcm9wZXJ0eSBdLCAnSXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGFuIGVtcHR5IG9iamVjdCcgKTtcclxuXHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHR9IGVsc2UgaWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0ubGVuZ3RoICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0aWYoICggL15bMC05XSskLyApLnRlc3QoIHByb3BlcnR5ICkgKSB7XHJcblx0XHRcdFx0cHJvcGVydHkgPSBwYXJzZUludCggcHJvcGVydHkgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUcnkgdG8gc2V0IG5vbiBudW1lcmljIHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiIHRvIGFycmF5OicsIG9ialsgcHJvcGVydHkgXSwgJ1RoZSBhcnJheSB3aWxsIGJlIGJlIHJlcGxhY2VkIHdpdGggYW4gZW1wdHkgb2JqZWN0JyApO1xyXG5cdFx0XHRcdG9ialsgcHJvcGVydHkgXSA9IHt9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQkT0tTKCBwcm9wZXJ0aWVzLCB2YWx1ZSwgb2JqWyBwcm9wZXJ0eSBdLCBkZWxpbWl0ZXIgKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0b2JqWyBwcm9wZXJ0eSBdID0gdmFsdWU7XHJcblx0fVxyXG5cdHJldHVybiBvYmo7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gJE9LUzsiLCIvKipcclxuICogTG9ncyBhIHZhbHVlIGFuZCByZXR1cm5zIGl0LlxyXG4gKiBVc2UgY29uc29sZS5sb2cgdG8gbG9nIHRoZSBzdXBwbGllZCB2YWx1ZSwgY29tYmluZWQgd2l0aCB0aGUgfHwgb3BlcmF0b3IgdG8gcmV0dXJuIGl0LlxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZGF0YSA9PiBjb25zb2xlLmxvZyggZGF0YSApIHx8IGRhdGE7IiwibW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAoIHR5cGVvZiBPYmplY3RbICdjcmVhdGUnIF0gIT09ICd1bmRlZmluZWQnICkgPyBPYmplY3QuY3JlYXRlKCBudWxsICkgOiB7fTsiLCIvKipcclxuICogUmV0dXJuIHZhbHVlIGZyb20gUXVlcnlTdHJpbmdcclxuICogQHBhcmFtIG5hbWVcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBuYW1lICkgPT4ge1xyXG5cdG5hbWUgICAgICAgID0gbmFtZS5yZXBsYWNlKCAvW1xcW10vLCBcIlxcXFxbXCIgKS5yZXBsYWNlKCAvW1xcXV0vLCBcIlxcXFxdXCIgKTtcclxuXHR2YXIgcmVnZXggICA9IG5ldyBSZWdFeHAoIFwiW1xcXFw/Jl1cIiArIG5hbWUgKyBcIj0oW14mI10qKVwiICksXHJcblx0XHRyZXN1bHRzID0gcmVnZXguZXhlYyggbG9jYXRpb24uc2VhcmNoICk7XHJcblx0cmV0dXJuIHJlc3VsdHMgPT0gbnVsbCA/IFwiXCIgOiBkZWNvZGVVUklDb21wb25lbnQoIHJlc3VsdHNbIDEgXS5yZXBsYWNlKCAvXFwrL2csIFwiIFwiICkgKTtcclxufTsiLCJpbXBvcnQgbWQ1IGZyb20gJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JztcclxuXHJcbi8qKlxyXG4gKiBVbmlxdWUgcmFuZG9tIG1kNVxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiBTdHJpbmcoIG1kNSggTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICkgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHBhZ2UuXHJcbiAqIFVzZSBwYWdlWE9mZnNldCBhbmQgcGFnZVlPZmZzZXQgaWYgdGhleSBhcmUgZGVmaW5lZCwgb3RoZXJ3aXNlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcC4gWW91IGNhbiBvbWl0IGVsIHRvIHVzZSBhIGRlZmF1bHQgdmFsdWUgb2Ygd2luZG93LlxyXG4gKiBAcGFyYW0gZWxcclxuICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZWwgPSB3aW5kb3cgKSA9PiAoIHtcclxuXHR4OiBlbC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVhPZmZzZXQgOiBlbC5zY3JvbGxMZWZ0LFxyXG5cdHk6IGVsLnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWU9mZnNldCA6IGVsLnNjcm9sbFRvcFxyXG59ICk7IiwiLyoqXHJcbiAqIFNtb290aC1zY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXHJcbiAqIEdldCBkaXN0YW5jZSBmcm9tIHRvcCB1c2luZyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIG9yIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLlxyXG4gKiBTY3JvbGwgYnkgYSBmcmFjdGlvbiBvZiB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wLiBVc2Ugd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHRvIGFuaW1hdGUgdGhlIHNjcm9sbGluZy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xyXG5cdGNvbnN0IGMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdGlmKCBjID4gMCApIHtcclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjcm9sbFRvVG9wICk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oIDAsIGMgLSBjIC8gOCApO1xyXG5cdH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggY2FsbGJhY2ssIHRpdGxlID0gJ1RpbWVUYWtlbicgKSA9PiB7XHJcblx0Y29uc29sZS50aW1lKCB0aXRsZSApO1xyXG5cdGNvbnN0IHIgPSBjYWxsYmFjaygpO1xyXG5cdGNvbnNvbGUudGltZUVuZCggdGl0bGUgKTtcclxuXHRyZXR1cm4gcjtcclxufTsiLCJpbXBvcnQgaXNfanF1ZXJ5IGZyb20gJy4vaXNfanF1ZXJ5JztcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIEdpdmVuIFN0cmluZyBpbnRvIEEgalF1ZXJ5IE9iamVjdC5cclxuICogQHBhcmFtICRlbGVtXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4ge1xyXG5cdGlmKCBmYWxzZSA9PT0gaXNfanF1ZXJ5KCAkZWxlbSApICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeSggJGVsZW0gKTtcclxuXHR9XHJcblx0cmV0dXJuICRlbGVtO1xyXG59OyIsImltcG9ydCBpc19vYmplY3RfbGlrZSBmcm9tICcuL2lzX29iamVjdF9saWtlJztcclxuaW1wb3J0IHZhbGlkYXRlSlNGdW5jIGZyb20gJy4vdmFsaWRhdGVTaW5nbGVKU0Z1bmMnO1xyXG5pbXBvcnQgZW1wdHkgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2VtcHR5JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSwgJGFyZ3Nfa2V5ID0gJ2pzX2FyZ3MnLCAkY29udGVudHNfa2V5ID0gJ2pzX2NvbnRlbnRzJyApID0+IHtcclxuXHRpZiggdHJ1ZSA9PT0gaXNfb2JqZWN0X2xpa2UoICRkYXRhICkgKSB7XHJcblx0XHRmb3IoIGxldCAka2V5IGluICRkYXRhICkge1xyXG5cdFx0XHRpZiggIWVtcHR5KCAkZGF0YVsgJGtleSBdICkgKSB7XHJcblx0XHRcdFx0JGRhdGFbICRrZXkgXSA9IHZhbGlkYXRlSlNGdW5jKCAkZGF0YVsgJGtleSBdLCAkYXJnc19rZXksICRjb250ZW50c19rZXkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gJGRhdGE7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBjdXJyZW50IFVSTC5cclxuICogVXNlIFN0cmluZy5tYXRjaCgpIHdpdGggYW4gYXBwcm9wcmlhdGUgcmVndWxhciBleHByZXNzaW9uIHRvIGdldCBhbGwga2V5LXZhbHVlIHBhaXJzLFxyXG4gKiBBcnJheS5wcm90b3R5cGUucmVkdWNlKCkgdG8gbWFwIGFuZCBjb21iaW5lIHRoZW0gaW50byBhIHNpbmdsZSBvYmplY3QuXHJcbiAqIFBhc3MgbG9jYXRpb24uc2VhcmNoIGFzIHRoZSBhcmd1bWVudCB0byBhcHBseSB0byB0aGUgY3VycmVudCB1cmwuXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge1QgfCB7fX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdXJsID0+XHJcblx0KCB1cmwubWF0Y2goIC8oW14/PSZdKykoPShbXiZdKikpL2cgKSB8fCBbXSApLnJlZHVjZShcclxuXHRcdCggYSwgdiApID0+ICggKCBhWyB2LnNsaWNlKCAwLCB2LmluZGV4T2YoICc9JyApICkgXSA9IHYuc2xpY2UoIHYuaW5kZXhPZiggJz0nICkgKyAxICkgKSwgYSApLFxyXG5cdFx0e31cclxuXHQpOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSBcImxvY3V0dXMvcGhwL3Zhci9pc19vYmplY3RcIjtcclxuaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tIFwiLi9pc191bmRlZmluZWRcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkc3RyaW5nLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBpc19vYmplY3QoICRzdHJpbmcgKSAmJiBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc3RyaW5nWyAkYXJnc19rZXkgXSApIHx8IGZhbHNlID09PSBpc191bmRlZmluZWQoICRzdHJpbmdbICRjb250ZW50c19rZXkgXSApICkge1xyXG5cdFx0bGV0ICRhcmdzICAgICA9ICggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRhcmdzX2tleSBdO1xyXG5cdFx0bGV0ICRjb250ZW50cyA9ICggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdID09PSBmYWxzZSApID8gZmFsc2UgOiAkc3RyaW5nWyAkY29udGVudHNfa2V5IF07XHJcblx0XHRpZiggJGFyZ3MgPT09IGZhbHNlICYmICRjb250ZW50cyAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIGlmKCAkYXJncyAhPT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGFyZ3MsICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICRzdHJpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkc3RyaW5nO1xyXG59O1xyXG4iLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgSlMgT2JqZWN0IEludG8gV2luZG93IEFyZ3MuXHJcbiAqIEBwYXJhbSAka2V5XHJcbiAqIEBwYXJhbSAkdmFsdWVcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5LCAkdmFsdWUgKSA9PiB7XHJcblx0aWYoIGlzX29iamVjdCggJGtleSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJF9rIGluICRrZXkgKSB7XHJcblx0XHRcdHdpbmRvd1sgJF9rIF0gPSAka2V5WyAkX2sgXTtcclxuXHRcdH1cclxuXHR9XHJcblx0d2luZG93WyAka2V5IF0gPSAkdmFsdWU7XHJcbn07IiwiLyoqXHJcbiAqIENhc3RzIHRoZSBwcm92aWRlZCB2YWx1ZSBhcyBhbiBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUuaXNBcnJheSgpIHRvIGRldGVybWluZSBpZiB2YWwgaXMgYW4gYXJyYXkgYW5kIHJldHVybiBpdCBhcy1pcyBvciBlbmNhcHN1bGF0ZWQgaW4gYW4gYXJyYXkgYWNjb3JkaW5nbHkuXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMgeypbXX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXSk7IiwiLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuaW1wb3J0IHtcblx0YXJyYXlfbWVyZ2UsXG5cdGNhbGxfdXNlcl9mdW5jLFxuXHRjbG9uZV9vYmplY3QsXG5cdGlzX2pxdWVyeSxcblx0aXNfbnVsbCxcblx0aXNfb2JqZWN0X2xpa2UsXG5cdGlzX3VuZGVmaW5lZCxcblx0aXNfd2luZG93X2FyZyxcblx0bWQ1LFxuXHRtaWNyb3RpbWUsXG5cdHJhbmRfbWQ1LFxuXHRzdHJ0b2xvd2VyLFxuXHR0b19qcXVlcnksXG5cdHRvX2pzX2Z1bmMsXG59IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQT25pb24ge1xuXHRzdGF0aWMganNfZnVuYyggJGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRvX2pzX2Z1bmMoICRkYXRhLCAnd3Bvbmlvbl9qc19hcmdzJywgJ3dwb25pb25fanNfY29udGVudHMnICk7XG5cdH1cblxuXHRzdGF0aWMgcmFuZF9pZCgpIHtcblx0XHRyZXR1cm4gbWQ1KCAnd3Bvbmlvbl9yYW5kXycgKyBtaWNyb3RpbWUoKSArIHJhbmRfbWQ1KCkgKTtcblx0fVxuXG5cdHN0YXRpYyB2YWxpZF9qc29uKCBvYmogKSB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2UoIG9iaiApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBBIFNpbmdsZSBDbGFzcyBGb3IgdGhlIEdpdmVuIEVsZW1lbnQuXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHN0YXRpYyBnZXRfZmllbGRfY2xhc3MoICR0eXBlICkge1xuXHRcdCR0eXBlID0gc3RydG9sb3dlciggJHR5cGUgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3cud3Bvbmlvbl9maWVsZHNbICR0eXBlIF0gKSApIHtcblx0XHRcdHJldHVybiB3aW5kb3cud3Bvbmlvbl9maWVsZHNbICR0eXBlIF07XG5cdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3dbICd3cG9uaW9uXycgKyAkdHlwZSArICdfZmllbGQnIF0gKSApIHtcblx0XHRcdHJldHVybiB3aW5kb3dbICd3cG9uaW9uXycgKyAkdHlwZSArICdfZmllbGQnIF07XG5cdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3dbICR0eXBlIF0gKSApIHtcblx0XHRcdHJldHVybiB3aW5kb3dbICR0eXBlIF07XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkIElELlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgZmllbGRJRCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuIHRvX2pxdWVyeSggJGVsZW0gKS5hdHRyKCAnZGF0YS13cG9uaW9uLWpzaWQnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBGaWVsZCBIVE1MIE9iamVjdCBVc2luZyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkd2hlcmVfdG9fZmluZFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzdGF0aWMgSUR0b0VsZW1lbnQoICRlbGVtLCAkd2hlcmVfdG9fZmluZCA9IGZhbHNlICkge1xuXHRcdGxldCAkaWQgPSBXUE9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0aWYoIGZhbHNlICE9PSAkd2hlcmVfdG9fZmluZCAmJiBpc19qcXVlcnkoICR3aGVyZV90b19maW5kICkgKSB7XG5cdFx0XHRyZXR1cm4gJHdoZXJlX3RvX2ZpbmQuZmluZCggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiJyApO1xuXHRcdH1cblx0XHRyZXR1cm4galF1ZXJ5KCAnLndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkaWQgKyAnXCJdJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBnaXZlbiB2YWx1ZSBpcyBhbiBqUXVlcnkgaW5zdGFuY2UuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc0ZpZWxkKCAkZWxlbSApIHtcblx0XHRyZXR1cm4gKCBpc19qcXVlcnkoICRlbGVtICkgKSA/ICggdGhpcy5maWVsZElEKCAkZWxlbSApICkgOiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIFdpbmRvdyBBcmdzLlxuXHQgKiBAcGFyYW0gJHZhcl9pZFxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgd2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRyZXR1cm4gKCBpc193aW5kb3dfYXJnKCAkdmFyX2lkICkgKSA/IHdpbmRvd1sgJHZhcl9pZCBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzICYgUmV0dXJucyBGaWVsZCBBcmdzLlxuXHQgKiBAcGFyYW0gJHZhcl9pZFxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgZmllbGRBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdCR2YXJfaWQgPSAoIHRoaXMuaXNGaWVsZCggJHZhcl9pZCApICkgPyB0aGlzLmZpZWxkSUQoICR2YXJfaWQgKSA6ICR2YXJfaWQ7XG5cdFx0cmV0dXJuICggJHZhcl9pZCApID8gY2xvbmVfb2JqZWN0KCB0aGlzLndpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ICkgKSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoY2VrcyBhbmQgcmV0dXJucyBnbG9iYWwgdHJhbnNsYXRpb24gc3RyaW5nLlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyB0eHQoICRrZXksICRkZWZhdWx0ID0gJ3N0cmluZ19kZWZhdWx0X25vdF9mb3VuZCcgKSB7XG5cdFx0cmV0dXJuICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggV1BPbmlvbi50ZXh0WyAka2V5IF0gKSApID8gV1BPbmlvbi50ZXh0WyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIExvYWRpbmcgU2NyZWVuLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICRpc19zaG93XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGxvYWRpbmdfc2NyZWVuKCAkZWxlbSwgJGlzX3Nob3cgPSB0cnVlICkge1xuXHRcdCRlbGVtID0gdG9fanF1ZXJ5KCAkZWxlbSApLmZpbmQoICcucGFnZS1sb2FkZXInICk7XG5cdFx0aWYoIHRydWUgPT09ICRpc19zaG93ICkge1xuXHRcdFx0cmV0dXJuICRlbGVtLmZhZGVJbiggJ3Nsb3cnICk7XG5cdFx0fVxuXHRcdHJldHVybiAkZWxlbS5mYWRlT3V0KCAnc2xvdycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEdsb2JhbCBEZWJ1ZyBWaWV3IFBPUFVQLlxuXHQgKi9cblx0c3RhdGljIGdsb2JhbF9kZWJ1ZygpIHtcblx0XHRsZXQgJGhhbmRsZSA9IGpRdWVyeSggJ2Eud3Bvbmlvbi1nbG9iYWwtZGVidWctaGFuZGxlJyApLFxuXHRcdFx0JGpzb24gICA9IHt9O1xuXHRcdGlmKCBXUE9uaW9uLmRlYnVnX2luZm8gPT09IG51bGwgJiYgJGhhbmRsZS5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRkZWZpbmVkX3ZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKTtcblx0XHRcdGlmKCBpc19vYmplY3RfbGlrZSggJGRlZmluZWRfdmFycyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICRkZWZpbmVkX3ZhcnMgKSB7XG5cdFx0XHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApICkge1xuXHRcdFx0XHRcdFx0JGpzb25bICRkZWZpbmVkX3ZhcnNbICRrZXkgXSBdID0gV1BPbmlvbi53aW5kb3dBcmdzKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0V1BPbmlvbi5kZWJ1Z19pbmZvID0gJGpzb247XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JGhhbmRsZS5vbiggJ2NsaWNrJywgKCAoIGUgKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzd2FsKCB7XG5cdFx0XHRcdHRpdGxlOiBXUE9uaW9uLnR4dCggJ2dsb2JhbF9qc29uX291dHB1dCcsICdHbG9iYWwgV1BPbmlvbiBEZWJ1ZyBEYXRhJyApLFxuXHRcdFx0XHRodG1sOiBqUXVlcnkoICcjd3BvbmlvbmRlYnVnaW5mb3BvcHVwID4gZGl2JyApLFxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFdQT25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0dldCBKU09OIE91dHB1dCcgKSxcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCkgPT4gc3dhbC5lbmFibGVMb2FkaW5nKCksXG5cdFx0XHRcdG9uT3BlbjogKCkgPT4ge1xuXHRcdFx0XHRcdGpRdWVyeSggJyNzd2FsMi1jb250ZW50ICN3cG9uaW9uLWdsb2JhbC1kZWJ1Zy1jb250ZW50JyApLmpzb25WaWV3KCBXUE9uaW9uLmRlYnVnX2luZm8gKTtcblx0XHRcdFx0XHRzd2FsLmRpc2FibGVMb2FkaW5nKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XG5cdFx0XHRcdGlmKCByZXN1bHQudmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN3YWwoIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAnNjAwcHgnLFxuXHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggV1BPbmlvbi5kZWJ1Z19pbmZvICkgKyAnPC90ZXh0YXJlYT4nLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBhbmQgUmV0cml2ZXMgVmFsdWVzIGZyb20gJHdwb25pb24uc2V0dGluZ3Ncblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIG9wdGlvbiggJGtleSwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRsZXQgJGFyZ3MgPSBXUE9uaW9uLnNldHRpbmdzX2FyZ3M7XG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApIHtcblx0XHRcdHJldHVybiAkYXJnc1sgJGtleSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0cnVlIGlmIFdQT25pb24gRGVidWcgaXMgZW5hYmxlZC5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNfZGVidWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnZGVidWcnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2F0aGVyIEFsbCBGaWVsZCBKUyBDb2Rlcy5cblx0ICovXG5cdHN0YXRpYyBmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggV1BPbmlvbi5pc19kZWJ1ZygpICYmIGlzX251bGwoIFdQT25pb24uZmllbGRfZGVidWdfaW5mbyApICkge1xuXHRcdFx0bGV0ICR2YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICksXG5cdFx0XHRcdCRqc29uID0ge30sXG5cdFx0XHRcdCR1dHh0ID0gV1BPbmlvbi50eHQoICd1bm1vZGlmaWVkX2RlYnVnJyApLFxuXHRcdFx0XHQkbXR4dCA9IFdQT25pb24udHh0KCAnbW9kaWZpZWRfZGVidWcnICk7XG5cblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHZhcnMgKSB7XG5cdFx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRkYXRhICAgICAgICAgICAgICAgICAgICAgICA9IFdQT25pb24ud2luZG93QXJncyggJHZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF0gICAgICAgICAgPSB7fTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkdXR4dCBdID0gJGRhdGEuZGVidWdfaW5mbyB8fCAkZGF0YTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkbXR4dCBdID0ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFdQT25pb24uZmllbGRfZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDdXN0b20gQWpheCBXcmFwcGVyIEZvciBqUXVlcnkuQWpheCgpXG5cdCAqIEBwYXJhbSAkYWN0aW9uXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKiBAcGFyYW0gJG9uU3VjY2Vzc1xuXHQgKiBAcGFyYW0gJG9uRXJyb3Jcblx0ICogQHBhcmFtICRvbkFsd2F5c1xuXHQgKi9cblx0c3RhdGljIGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSwgJG9uU3VjY2VzcyA9IGZhbHNlLCAkb25FcnJvciA9IGZhbHNlLCAkb25BbHdheXMgPSBmYWxzZSApIHtcblx0XHRsZXQgJGRlZmF1bHRzID0ge1xuXHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0dXJsOiBXUE9uaW9uLm9wdGlvbiggJ2FqYXhfdXJsJyApLFxuXHRcdFx0XHRvblN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0XHRvbkFsd2F5czogZmFsc2UsXG5cdFx0XHRcdG9uRXJyb3I6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdCRhamF4ICAgICA9IGZhbHNlO1xuXG5cdFx0aWYoIGlzX29iamVjdF9saWtlKCAkYWN0aW9uICkgKSB7XG5cdFx0XHQkZGF0YSA9ICRhY3Rpb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRkZWZhdWx0cy51cmwgKz0gJyYnICsgV1BPbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICkgKyAnPScgKyAkYWN0aW9uO1xuXHRcdH1cblxuXHRcdCRkZWZhdWx0cyAgPSBhcnJheV9tZXJnZSggJGRlZmF1bHRzLCAkZGF0YSApO1xuXHRcdCRvblN1Y2Nlc3MgPSAoIGlzX3VuZGVmaW5lZCggJG9uU3VjY2VzcyApIHx8IGZhbHNlID09PSAkb25TdWNjZXNzICkgPyAkZGVmYXVsdHMub25TdWNjZXNzIDogJG9uU3VjY2Vzcztcblx0XHQkb25BbHdheXMgID0gKCBpc191bmRlZmluZWQoICRvbkVycm9yICkgfHwgZmFsc2UgPT09ICRvbkVycm9yICkgPyAkZGVmYXVsdHMub25BbHdheXMgOiAkb25BbHdheXM7XG5cdFx0JG9uRXJyb3IgICA9ICggaXNfdW5kZWZpbmVkKCAkb25BbHdheXMgKSB8fCBmYWxzZSA9PT0gJG9uQWx3YXlzICkgPyAkZGVmYXVsdHMub25FcnJvciA6ICRvbkVycm9yO1xuXHRcdCRhamF4ICAgICAgPSBqUXVlcnkuYWpheCggJGRlZmF1bHRzICk7XG5cblxuXHRcdGlmKCAkb25TdWNjZXNzICkge1xuXHRcdFx0JGFqYXguZG9uZSggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uU3VjY2VzcywgcmVzICkgKTtcblx0XHR9XG5cblx0XHRpZiggJG9uRXJyb3IgKSB7XG5cdFx0XHQkYWpheC5mYWlsKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25FcnJvciwgcmVzICkgKTtcblx0XHR9XG5cblx0XHRpZiggJG9uQWx3YXlzICkge1xuXHRcdFx0JGFqYXguYWx3YXlzKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25BbHdheXMsIHJlcyApICk7XG5cdFx0fVxuXHRcdHJldHVybiAkYWpheDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFdQT25pb24gVGVtcGxhdGUgZm9yIHVuZGVyc2NvcmUuXG5cdCAqIEBwYXJhbSAkaWRcblx0ICogQHJldHVybnMge2Z1bmN0aW9uKCo9KTogKn1cblx0ICovXG5cdHN0YXRpYyB0ZW1wbGF0ZSggJGlkICkge1xuXHRcdGxldCBjb21waWxlZCxcblx0XHRcdG9wdGlvbnMgPSB7XG5cdFx0XHRcdGV2YWx1YXRlOiAvPCMoW1xcc1xcU10rPykjPi9nLFxuXHRcdFx0XHRpbnRlcnBvbGF0ZTogL1xce1xce1xceyhbXFxzXFxTXSs/KVxcfVxcfVxcfS9nLFxuXHRcdFx0XHRlc2NhcGU6IC9cXHtcXHsoW15cXH1dKz8pXFx9XFx9KD8hXFx9KS9nLFxuXHRcdFx0XHR2YXJpYWJsZTogJ2RhdGEnXG5cdFx0XHR9O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhICkge1xuXHRcdFx0Y29tcGlsZWQgPSBjb21waWxlZCB8fCBfLnRlbXBsYXRlKCAkaWQsIG9wdGlvbnMgKTtcblx0XHRcdHJldHVybiBjb21waWxlZCggZGF0YSApO1xuXHRcdH07XG5cdH1cblxuXHQvL0B0b2RvIE1pZ3JhdGUgUGx1Z2luIERlYnVnIEluZm8uXG59XG4iLCJpbXBvcnQgeyBhcnJheV9tZXJnZSwgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0c3RhdGljIGFkZCggJGtleSwgJHZhbHVlICkge1xuXHRcdGlmKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXG5cdFx0aWYoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gJHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9IGFycmF5X21lcmdlKCAkdmFsdWUsIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGdldCggJGtleSwgJGRlZmF1bHQgPSBmYWxzZSApIHtcblx0XHRpZiggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiAoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApID8gJGRlZmF1bHQgOiB0aGlzLmRlYnVnX2luZm9bICRrZXkgXTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9oZWxwZXJzL2RlcGVuZGVuY3knO1xuaW1wb3J0IHsgYXJyYXlfbWVyZ2UgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciggJGVsZW1lbnQgPSB1bmRlZmluZWQsIHBhcmFtID0ge30gKSB7XG5cdFx0dGhpcy5wYXJhbSAgICAgICAgID0gYXJyYXlfbWVyZ2UoIHsgbmVzdGFibGU6IGZhbHNlLCBwYXJlbnQ6IGZhbHNlIH0sIHBhcmFtICk7XG5cdFx0bGV0ICR0aGlzICAgICAgICAgID0gdGhpcztcblx0XHR0aGlzLmJhc2UgICAgICAgICAgPSB7fTtcblx0XHR0aGlzLmJhc2UuJGVsICAgICAgPSAkZWxlbWVudDtcblx0XHR0aGlzLmJhc2UuaW5pdCAgICAgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmJhc2UucnVsZXNldCA9IGpRdWVyeS5kZXBzLmNyZWF0ZVJ1bGVzZXQoKTtcblx0XHRcdHRoaXMuYmFzZS5kZXBSb290KCk7XG5cdFx0XHRqUXVlcnkuZGVwcy5lbmFibGUoIHRoaXMuYmFzZS4kZWwsIHRoaXMuYmFzZS5ydWxlc2V0LCB7XG5cdFx0XHRcdHNob3c6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0ZWwucmVtb3ZlQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRoaWRlOiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdGVsLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkuYWRkQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0bG9nOiBmYWxzZSxcblx0XHRcdFx0Y2hlY2tUYXJnZXRzOiBmYWxzZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbnN0YW5jZSA9IFtdO1xuXHRcdHRoaXMuYmFzZS5kZXBSb290ICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS4kZWwuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1oYXMtZGVwZW5kZW5jeScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5iYXNlLmluc3RhbmNlID0gbmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksICR0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRcdFx0bmVzdGFibGU6ICR0aGlzLnBhcmFtLm5lc3RhYmxlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiAoIHRydWUgPT09ICR0aGlzLnBhcmFtLm5lc3RhYmxlICkgPyAkdGhpcy5iYXNlLiRlbCA6ICR0aGlzLnBhcmFtLnBhcmVudCxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5iYXNlLmluaXQoKTtcblx0fVxufVxuIiwiLy9pbXBvcnQgeyBhcnJheV9tZXJnZSwgZW1wdHksIGlzX2NhbGxhYmxlLCBpc19qcXVlcnksIGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuLy9jb25zdCB0b19qcXVlcnkgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS50b19qcXVlcnk7XG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZTp0cnVlICovXG5cbmNvbnN0IGFycmF5X21lcmdlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmFycmF5X21lcmdlO1xuY29uc3QgZW1wdHkgICAgICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuZW1wdHk7XG5jb25zdCBpc19jYWxsYWJsZSAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5pc19jYWxsYWJsZTtcbmNvbnN0IGlzX2pxdWVyeSAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2pxdWVyeTtcbmNvbnN0IGlzX3VuZGVmaW5lZCA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX3VuZGVmaW5lZDtcblxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi9kZWJ1Zyc7XG5pbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi9tb2R1bGUnO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdGlvbiBmcm9tICcuLi9jb3JlL3ZhbGlkYXRpb24nO1xuXG4vKipcbiAqIFdQT25pb24gRmllbGQgQWJzdHJhY3QgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyA9IG51bGwgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQgKTtcblx0XHR0aGlzLnNldF9hcmdzKCBmYWxzZSApO1xuXHRcdHRoaXMuZmllbGRfZGVidWcoKTtcblx0XHR0aGlzLmNvbmZpZyA9ICRjb25maWc7XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5qc19lcnJvcl9oYW5kbGVyKCk7XG5cdFx0dGhpcy5qc192YWxpZGF0b3IoKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGVyci5lcnJvci5hcHBlbmRUbyggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHR9XG5cblx0anNfZXJyb3JfaGFuZGxlciggZWxlbWVudCA9IHRoaXMuZWxlbWVudCApIHtcblx0XHRlbGVtZW50Lm9uKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCAnPiAud3Bvbmlvbi1maWVsZHNldCA6aW5wdXQnLCAoIGUsIGRhdGEgKSA9PiB0aGlzLmpzX2Vycm9yKCBkYXRhICkgKTtcblx0fVxuXG5cdGpzX3ZhbGlkYXRvcigpIHtcblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSApIHtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSB7XG5cdFx0XHRcdHRoaXMubWF5YmVfanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApO1xuXHRcdH1cblx0fVxuXG5cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0fSApO1xuXHR9XG5cblxuXHRoYW5kbGVfYXJncyggJGFyZywgJGtleSA9IGZhbHNlICkge1xuXHRcdGxldCAkYXJncyAgID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApLFxuXHRcdFx0JGV4aXN0cyA9ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHQkZXhpc3RzICAgICA9IGFycmF5X21lcmdlKCAkZXhpc3RzLCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0gKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGtleSApIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdID0gJGFyZ3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdWyAka2V5IF0gPSAkYXJncztcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksICRleGlzdHMgKTtcblx0XHRyZXR1cm4gJGFyZ3M7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggZmFsc2UgIT09ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0ICRpbmZvID0gdGhpcy5vcHRpb24oICdkZWJ1Z19pbmZvJyApLFxuXHRcdFx0JGFyciAgPSB7fTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkaW5mbyApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSBlbXB0eSggJGluZm8gKSApIHtcblx0XHRcdFx0JGFyclsgJ1JhdyBGaWVsZCBBcmdzJyBdID0gJGluZm9bICdSYXcgRmllbGQgQXJncycgXTtcblx0XHRcdFx0JGFyci5GaWVsZCAgICAgICAgICAgICAgID0gJGluZm9bICdGaWVsZCBBcmdzJyBdO1xuXHRcdFx0XHQkYXJyWyAnRmllbGQgRXJyb3JzJyBdICAgPSAkaW5mb1sgJ0ZpZWxkIEVycm9ycycgXTtcblx0XHRcdFx0JGFyclsgJ0ZpZWxkIFZhbHVlJyBdICAgID0gJGluZm9bICdGaWVsZCBWYWx1ZScgXTtcblx0XHRcdFx0JGFyclsgJ1BsdWdpbiBJRCcgXSAgICAgID0gJGluZm9bICdQbHVnaW4gSUQnIF07XG5cdFx0XHRcdCRhcnIuTW9kdWxlICAgICAgICAgICAgICA9ICRpbmZvLk1vZHVsZTtcblx0XHRcdFx0JGFyci5VbmlxdWUgICAgICAgICAgICAgID0gJGluZm8uVW5pcXVlO1xuXHRcdFx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiAkYXJyLCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgJGZvdW5kID0gZmFsc2U7XG5cdFx0aWYoICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0bGV0ICRJRCAgID0gdGhpcy5pZCgpLFxuXHRcdFx0XHQkZWxlbSA9IGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9JyArICRJRCArICddJyApO1xuXHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdFx0JGZvdW5kID0gJGVsZW07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRmb3VuZCA9IHRoaXMuZWxlbWVudDtcblx0XHR9XG5cblx0XHRpZiggZmFsc2UgIT09ICRmb3VuZCApIHtcblx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApXG5cdFx0XHRcdCAgLmF0dHIoICd0aXRsZScsICR3cG9uaW9uLnR4dCggJ2NsaWNrX3RvX3ZpZXdfZGVidWdfaW5mbycsICdDbGljayBUbyBWaWV3IEZpZWxkIERlYnVnIEluZm8nICkgKVxuXHRcdFx0XHQgIC50aXBweSgge1xuXHRcdFx0XHRcdCAgYXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0ICBhcnJvd1R5cGU6ICdyb3VuZCcsXG5cdFx0XHRcdFx0ICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHRcdCAgdGhlbWU6ICdsaWdodCcsXG5cdFx0XHRcdFx0ICBhbmltYXRpb246ICdzY2FsZSdcblx0XHRcdFx0ICB9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZCAgICAgICAgICA9ICR0aGlzLmlkKCkgKyAnZGVidWdJTkZPJyxcblx0XHRcdFx0XHQkbm90aWNlX3R4dCA9ICc8cCBjbGFzcz1cXCd3cG9uaW9uLWZpZWxkLWRlYnVnLW5vdGljZVxcJz4nICsgJHdwb25pb24ub3B0aW9uKCAnZGVidWdfbm90aWNlJyApICsgJzwvcD4nLFxuXHRcdFx0XHRcdCRlbGVtICAgICAgID0galF1ZXJ5KCAnPGRpdiBpZD1cIicgKyAkZCArICdcIiBjbGFzcz1cIndwb25pb24tZmllbGQtZGVidWctcG9wdXBcIiA+PGRpdiBpZD1cIicgKyAkZCArICdcIiA+PC9kaXY+JyArICRub3RpY2VfdHh0ICsgJzwvZGl2PicgKTtcblx0XHRcdFx0bGV0ICRkYXRhICAgICAgID0gJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICk7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRodG1sOiAkZWxlbSxcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogJHdwb25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0FzIEpTT04nICksXG5cdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRvbk9wZW46ICgpID0+IGpRdWVyeSggJyNzd2FsMi1jb250ZW50ID4gZGl2ID4gIycgKyAkZCApLmpzb25WaWV3KCAkZGF0YSApXG5cdFx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICkgKSArICc8L3RleHRhcmVhPidcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRvcHRpb25zKCkge1xuXHRcdGlmKCB0aGlzLl9hcmdzID09PSBmYWxzZSApIHtcblx0XHRcdHRoaXMuX2FyZ3MgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCB0aGlzLmlkKCkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2FyZ3M7XG5cdH1cblxuXHRvcHRpb24oICRrZXkgPSAnJywgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRsZXQgJGFyZ3MgPSB0aGlzLm9wdGlvbnMoKTtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSA/ICRhcmdzWyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdGlkKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdG1vZHVsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdtb2R1bGUnLCBmYWxzZSApO1xuXHR9XG5cblx0cGx1Z2luX2lkKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ3BsdWdpbl9pZCcsIGZhbHNlICk7XG5cdH1cblxuXHRhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30gKSB7XG5cdFx0bGV0ICRhamF4X2tleSAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApO1xuXHRcdGxldCAkZGVmYXVsdCAgICAgICAgICA9IHtcblx0XHRcdHBsdWdpbl9pZDogdGhpcy5wbHVnaW5faWQoKSxcblx0XHRcdG1vZHVsZTogdGhpcy5tb2R1bGUoKSxcblx0XHR9O1xuXHRcdCRkZWZhdWx0WyAkYWpheF9rZXkgXSA9ICRhY3Rpb247XG5cdFx0JGRhdGEuZGF0YSAgICAgICAgICAgID0gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkZGF0YS5kYXRhICkgKSA/IGFycmF5X21lcmdlKCAkZGVmYXVsdCwgJGRhdGEuZGF0YSApIDogJGRlZmF1bHQ7XG5cblx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJGRhdGEgKTtcblx0fVxuXG5cdGluaXRfZmllbGQoICRlbGVtLCAkdHlwZSApIHtcblx0XHRsZXQgJF9pbnN0YW5jZXMgPSBbXTtcblx0XHRpZiggIWlzX2pxdWVyeSggJGVsZW0gKSApIHtcblx0XHRcdCRlbGVtID0gdGhpcy5lbGVtZW50LmZpbmQoICRlbGVtICk7XG5cdFx0fVxuXHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0JGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGNsYXNzID0gJHdwb25pb24uZ2V0X2ZpZWxkX2NsYXNzKCAkdHlwZSApO1xuXHRcdFx0aWYoIGZhbHNlICE9PSAkY2xhc3MgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYoIGlzX2NhbGxhYmxlKCAkY2xhc3MgKSApIHtcblx0XHRcdFx0XHRcdCRfaW5zdGFuY2VzLnB1c2goIG5ldyAkY2xhc3MoIGpRdWVyeSggdGhpcyApICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGpRdWVyeSggdGhpcyApICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICdFcnJvcjogJyArIGUgKyAnIHwgRm9yIDogJyArICR0eXBlICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdHJlbG9hZCgpIHtcblx0XHR3cC5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfcmVsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaWNvbl9waWNrZXInLCAnaWNvbl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicsICdmb250X3NlbGVjdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYWNjb3JkaW9uJywgJ2FjY29yZGlvbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdyb3VwJywgJ2dyb3VwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dDpub3QoLndwb25pb24taW5wdXRtYXNrKScsICd0ZXh0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dGFyZWEnLCAndGV4dGFyZWEnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1iYWNrZ3JvdW5kJywgJ2JhY2tncm91bmQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pbWFnZV9zZWxlY3QnLCAnaW1hZ2Vfc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc2VsZWN0JywgJ3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN3aXRjaGVyJywgJ3N3aXRjaGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGFsZXR0ZScsICdjb2xvcl9wYWxldHRlJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJywgJ3dwX2VkaXRvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZpZWxkc2V0JywgJ2ZpZWxkc2V0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1pbnB1dG1hc2tdJywgJ2lucHV0bWFzaycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2xpbmsnLCAnd3BfbGlua3MnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jaGVja2JveCcsICdjaGVja2JveF9yYWRpbycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXJhZGlvJywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQta2V5X3ZhbHVlJywgJ2tleXZhbHVlX3BhaXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9waWNrZXInLCAnY29sb3JfcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZGF0ZV9waWNrZXInLCAnZGF0ZV9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nYWxsZXJ5JywgJ2dhbGxlcnknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC11cGxvYWQnLCAndXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2UnLCAnaW1hZ2VfdXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGFiJywgJ2pxdWVyeV90YWInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZmllbGQtdG9vbHRpcCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ29vZ2xlX21hcHMnLCAnZ29vZ2xlX21hcHMnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24taGVscCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLXdyYXAtdG9vbHRpcCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2xvbmUnLCAnY2xvbmVfZWxlbWVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuc2VsZWN0MicsICdzZWxlY3QyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5jaG9zZW4nLCAnY2hvc2VuJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3RpemUnLCAnc2VsZWN0aXplJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc29ydGVyJywgJ3NvcnRlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXR5cG9ncmFwaHknLCAndHlwb2dyYXBoeScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW9lbWJlZCcsICdvZW1iZWQnICk7XG5cdFx0d3AuaG9va3MuYWRkQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfcmVsb2FkJyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0X2FyZ3MoICRhcmdzICkge1xuXHRcdHRoaXMuX2FyZ3MgPSAkYXJncztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldF9maWVsZF9wYXJlbnRfYnlfaWQoICRlbGVtICkge1xuXHRcdGxldCAkSUQgPSAkd3Bvbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdHJldHVybiBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRJRCArICdcIl0nICk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQgKSB7XG5cdFx0aWYoICEkc2VsZWN0b3IualF1ZXJ5ICkge1xuXHRcdFx0JHNlbGVjdG9yID0galF1ZXJ5KCAkc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0dGhpcy5zZXRfZWxlbWVudCggJHNlbGVjdG9yICk7XG5cdFx0dGhpcy5zZXRfY29udHh0KCAkY29udGV4dCApO1xuXHRcdHRoaXMubW9kdWxlX2luaXQoKTtcblx0fVxuXG5cdG1vZHVsZV9pbml0KCkge1xuXHR9XG5cblx0c2V0X2VsZW1lbnQoICRlbGVtICkge1xuXHRcdGlmKCAhJGVsZW0ualF1ZXJ5ICkge1xuXHRcdFx0JGVsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbSA9ICRlbGVtO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0X2NvbnR4dCggJGNvbnR4dCApIHtcblx0XHR0aGlzLmNvbnRleHQgPSAkY29udHh0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IGhvb2soKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy53cC5ob29rcztcblx0fVxuXG5cdGdldCBlbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW07XG5cdH1cblxuXHRnZXQgY29udHh0KCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHQ7XG5cdH1cblxufVxuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbl9WYWxpZGF0b3Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmZvcm0gID0gV1BPbmlvbl9WYWxpZGF0b3IuZ2V0X2Zvcm0oKTtcblx0XHR0aGlzLnJ1bGVzID0ge1xuXHRcdFx0aW52YWxpZEhhbmRsZXI6ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnI3B1Ymxpc2gnICkucmVtb3ZlQ2xhc3MoICdidXR0b24tcHJpbWFyeS1kaXNhYmxlZCcgKTtcblx0XHRcdFx0alF1ZXJ5KCAnI2FqYXgtbG9hZGluZycgKS5hdHRyKCAnc3R5bGUnLCAnJyApO1xuXHRcdFx0XHR0aGlzLmZvcm0uc2libGluZ3MoICcjbWVzc2FnZScgKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5mb3JtLmJlZm9yZSggJzxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJlcnJvclwiPjxwPicgKyAkd3Bvbmlvbi50eHQoICd2YWxpZGF0aW9uX3N1bW1hcnknICkgKyAnPC9wPjwvZGl2PicgKTtcblx0XHRcdH0sXG5cdFx0XHRpZ25vcmU6ICcud3Bvbmlvbi1kZXBlbmRlbnQsLndwb25pb24tdmFsaWRhdGlvbi1pZ25vcmUnLFxuXHRcdFx0ZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKCBlcnJvciwgZWxlbWVudCApIHtcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCB7IGVycm9yLCBlbGVtZW50IH0gKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvckNsYXNzOiAnd3Bvbmlvbi1lcnJvcicsXG5cdFx0XHRlcnJvckVsZW1lbnQ6ICdwJ1xuXHRcdH07XG5cdFx0aWYoIHRoaXMuZm9ybSApIHtcblx0XHRcdHRoaXMuZm9ybS52YWxpZGF0ZSggdGhpcy5ydWxlcyApO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXRfZm9ybSgpIHtcblx0XHRpZiggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSNwb3N0JyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS5sZW5ndGggPiAwICYmIGpRdWVyeSggJ2lucHV0I29yaWdpbmFsX3B1Ymxpc2gnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdC8vcmV0dXJuIGpRdWVyeSggJ2Zvcm0jcG9zdCcgKTtcblx0XHR9XG5cdFx0cmV0dXJuICggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApID8galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkgOiBmYWxzZTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYWNjb3JkaW9uKCB7XG5cdFx0XHRcdGhlYWRlcjogJz4gLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdGFuaW1hdGU6IDE1MCxcblx0XHRcdFx0aGVpZ2h0U3R5bGU6ICdjb250ZW50Jyxcblx0XHRcdFx0YWN0aXZlOiBqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2lzX29wZW4nICksXG5cdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0J2hlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LXJpZ2h0Jyxcblx0XHRcdFx0XHQnYWN0aXZlSGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctZG93bidcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0Lndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGlucHV0cyA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dJyApLm9uKCAnY2xpY2snLCAoKSA9PiAkaW5wdXRzLnJlbW92ZUF0dHIoICduYW1lJyApICk7XG5cblx0XHRcdCRpbnB1dHMub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5maW5kKCAnaW5wdXRbdHlwZT1yYWRpb10saW5wdXRbdHlwZT1jaGVja2JveF0nICkucHJvcCggJ2NoZWNrZWQnLCB0cnVlICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5jaG9zZW4oIHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnY2hvc2VuJywge30gKSApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbi8qIGdsb2JhbCBzZXRUaW1lb3V0OnRydWUgKi9cbi8qIGdsb2JhbCB3cG9uaW9uX2ZpZWxkOnRydWUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgICAgICAgID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjbG9uZScsIHt9ICkgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGNsb25lX3dyYXAgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tY2xvbmUtd3JhcCcgKSxcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtYWRkXScgKSxcblx0XHRcdC8vJHJlbW92ZV9idG4gPSAkY2xvbmVfd3JhcC5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1yZW1vdmVdJyApLFxuXHRcdFx0JGxpbWl0ICAgICAgPSAoICRhcmcubGltaXQgIT09IHVuZGVmaW5lZCApID8gJGFyZy5saW1pdCA6IGZhbHNlLFxuXHRcdFx0Ly8kaXNfdG9hc3QgICA9ICggJGFyZy50b2FzdF9lcnJvciAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLnRvYXN0X2Vycm9yIDogdHJ1ZSxcblx0XHRcdCRlcm9yX21zZyAgID0gJGFyZy5lcnJvcl9tc2csXG5cdFx0XHQkc29ydCAgICAgICA9ICggJGFyZy5zb3J0ICE9PSBmYWxzZSApID8ge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tZmllbGQtY2xvbmUtc29ydGVyJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWNsb25lci1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKSxcblx0XHRcdFx0c3RvcDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKSxcblx0XHRcdH0gOiBmYWxzZTtcblxuXHRcdCRjbG9uZV93cmFwLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46ICRhZGRfYnRuLFxuXHRcdFx0bGltaXQ6ICRsaW1pdCxcblx0XHRcdGNsb25lX2VsZW06ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRyZW1vdmVfYnRuOiAnYS53cG9uaW9uLXJlbW92ZScsXG5cdFx0XHR0ZW1wbGF0ZTogJHRoaXMub3B0aW9uKCAnY2xvbmVfdGVtcGxhdGUnICksXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlICkgPT4gd3Bvbmlvbl9maWVsZCggJGUuZmluZCggJz4gZGl2Lndwb25pb24tZmllbGQtY2xvbmU6bGFzdC1jaGlsZCcgKSApLnJlbG9hZCgpLFxuXHRcdFx0c29ydGFibGU6ICRzb3J0LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvKmlmKCAkaXNfdG9hc3QgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0Ly8gQHRvZG8gQWRkIFRvYXN0IE9wdGlvbi5cblx0XHRcdFx0XHQvISp3cG8udG9zdCgge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJlcnJvclwiLFxuXHRcdFx0XHRcdFx0dGl0bGU6ICRlcm9yX21zZyxcblx0XHRcdFx0XHR9ICk7KiEvXG5cdFx0XHRcdH0gZWxzZSB7Ki9cblx0XHRcdFx0bGV0ICRodG1sID0galF1ZXJ5KCAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj4nICsgJGVyb3JfbXNnICsgJzwvZGl2PicgKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLnByZXBlbmQoICRodG1sICk7XG5cdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuZmFkZUluKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJF9fRSA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+ICRfX0UuZmFkZU91dCggJ3Nsb3cnLCAoKSA9PiAkX19FLnJlbW92ZSgpICksIDEwMDAgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQvL31cblx0XHRcdH0sXG5cdFx0XHRzaG93X2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLnNob3csXG5cdFx0XHRoaWRlX2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLmhpZGUsXG5cdFx0fSApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS53cENvbG9yUGlja2VyKCk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ3NldHRpbmdzJyApICksXG5cdFx0XHQkdmlldztcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc2V0dGluZ3MudGhlbWUgKSApIHtcblx0XHRcdCR2aWV3ID0gJHNldHRpbmdzLnRoZW1lO1xuXHRcdFx0ZGVsZXRlICRzZXR0aW5ncy50aGVtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHZpZXcgPSAnZGVmYXVsdCc7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0alF1ZXJ5KCAnYm9keScgKVxuXHRcdFx0XHQuYXBwZW5kKCBqUXVlcnkoICc8ZGl2IGNsYXNzPVwid3Bvbmlvbi1kYXRlcGlja2VyLScgKyAkdmlldyArICdcIiBpZD1cIicgKyB0aGlzLmlkKCkgKyAnXCI+PC9kaXY+JyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1kYXRlcGlja2VyLXJhbmdlJyApICkge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKVsgMCBdO1xuXHRcdFx0aWYoICRzZXR0aW5ncy5wbHVnaW5zID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zID0gW107XG5cdFx0XHR9XG5cblx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zLnB1c2goIG5ldyByYW5nZVBsdWdpbiggeyBpbnB1dDogJGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLXRvLWRhdGVdJyApWyAwIF0gfSApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItZnJvbS1kYXRlXScgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQnICkuZmxhdHBpY2tyKCAkc2V0dGluZ3MgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGdldCB3ZWJzYWZlKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl93ZWJzYWZlX2ZvbnRzJyApO1xuXHR9XG5cblx0Z2V0IGdvb2dsZV9mb250cygpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ2ZvbnRzJyApO1xuXHR9XG5cblx0YnVpbGRfb3B0aW9ucyggZGF0YSApIHtcblx0XHRsZXQgJHJldHVybiA9ICcnO1xuXHRcdGZvciggbGV0ICRfZCBpbiBkYXRhICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIGRhdGFbICRfZCBdICkgKSB7XG5cdFx0XHRcdCRyZXR1cm4gKz0gYDxvcHRpb24gdmFsdWU9XCIkeyRfZH1cIj4ke2RhdGFbICRfZCBdfTwvb3B0aW9uPmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHRsZXQgJHZhbCAgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpLFxuXHRcdFx0XHQkaHRtbCA9IG51bGw7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLndlYnNhZmUuZm9udHMgWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMud2Vic2FmZS52YXJpYW50cyApO1xuXHRcdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgJHZhcmlhbnQgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkuaHRtbCggJGh0bWwgKTtcblxuXHRcdFx0aWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnY2hvc2VuJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hvc2VuOnVwZGF0ZWQnICk7XG5cdFx0XHR9IGVsc2UgaWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnc2VsZWN0MicgKSApIHtcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGh0bWxfdGVtcCA9ICR0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXG5cdFx0XHQkaW5wdXQgICAgID0gJGVsZW0uZmluZCggJ2lucHV0I2ltYWdlX2lkJyApLFxuXHRcdFx0JHByZXZpZXcgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3JyApLFxuXHRcdFx0d3BfbWVkaWFfZnJhbWUsXG5cdFx0XHQkYWRkICAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1hZGRdJyApLFxuXHRcdFx0JGVkaXQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktZWRpdF0nICksXG5cdFx0XHQkY2xlYXIgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1jbGVhcl0nICksXG5cdFx0XHQkbWFuYWdlICAgID0gZnVuY3Rpb24oICR0eXBlICkge1xuXHRcdFx0XHRsZXQgaWRzICAgPSAkaW5wdXQudmFsKCksXG5cdFx0XHRcdFx0d2hhdCAgPSAoICR0eXBlID09PSAnZWRpdCcgKSA/ICdlZGl0JyA6ICdhZGQnLFxuXHRcdFx0XHRcdHN0YXRlID0gKCB3aGF0ID09PSAnYWRkJyAmJiAhaWRzLmxlbmd0aCApID8gJ2dhbGxlcnknIDogJ2dhbGxlcnktZWRpdCc7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cblx0XHRcdFx0aWYoIHN0YXRlID09PSAnZ2FsbGVyeScgKSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdFx0XHRmcmFtZTogJ3Bvc3QnLFxuXHRcdFx0XHRcdFx0c3RhdGU6ICdnYWxsZXJ5Jyxcblx0XHRcdFx0XHRcdG11bHRpcGxlOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhLmdhbGxlcnkuZWRpdCggJ1tnYWxsZXJ5IGlkcz1cIicgKyBpZHMgKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCB3aGF0ID09PSAnYWRkJyApIHtcblx0XHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLnNldFN0YXRlKCAnZ2FsbGVyeS1saWJyYXJ5JyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAndXBkYXRlJywgZnVuY3Rpb24oIHNlbGVjdGlvbiApIHtcblx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRJZHMgPSBzZWxlY3Rpb24ubW9kZWxzLm1hcCggZnVuY3Rpb24oIGF0dGFjaG1lbnQgKSB7XG5cdFx0XHRcdFx0XHRsZXQgaXRlbSA9IGF0dGFjaG1lbnQudG9KU09OKCk7XG5cdFx0XHRcdFx0XHRpZiggaXRlbS5zaXplcyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCB0aHVtYiA9ICggdHlwZW9mIGl0ZW0uc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gaXRlbS5zaXplcy50aHVtYm5haWwudXJsIDogaXRlbS51cmwsXG5cdFx0XHRcdFx0XHRcdCR0bXAgID0galF1ZXJ5KCAkaHRtbF90ZW1wICk7XG5cdFx0XHRcdFx0XHQkdG1wLmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnLCBpdGVtLmlkICk7XG5cdFx0XHRcdFx0XHQkdG1wLmZpbmQoICdpbWcnICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBpdGVtLnVybCApLmF0dHIoICdzcmMnLCB0aHVtYiApLnJlbW92ZUNsYXNzKCAnaGlkZScgKTtcblx0XHRcdFx0XHRcdCRwcmV2aWV3LmFwcGVuZCggJHRtcCApO1xuXHRcdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWhlbHAnICkudGlwcHkoKTtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmlkO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRsZXQgJGU7XG5cdFx0XHRcdFx0Zm9yKCAkZSBpbiBzZWxlY3RlZElkcyApIHtcblx0XHRcdFx0XHRcdGlmKCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gZmFsc2UgfHwgc2VsZWN0ZWRJZHNbICRlIF0gPT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgc2VsZWN0ZWRJZHNbICRlIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRpbnB1dC52YWwoIHNlbGVjdGVkSWRzLmpvaW4oICcsJyApICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fTtcblxuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcblx0XHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRlZGl0LnNob3coKTtcblx0XHRcdFx0JGNsZWFyLnNob3coKTtcblx0XHRcdFx0JGFkZC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2FkZCcgKSApO1xuXG5cdFx0JGVkaXQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdlZGl0JyApICk7XG5cblx0XHQkY2xlYXIub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkY2xlYXIuaGlkZSgpO1xuXHRcdFx0JGVkaXQuaGlkZSgpO1xuXHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpLndwb25pb24taW1hZ2UtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBhcmVudCAgID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHRcdCRpbWFnZV9pZCA9ICRwYXJlbnQuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcgKSxcblx0XHRcdFx0JHZhbHVlICAgID0gJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKTtcblx0XHRcdGpRdWVyeS5lYWNoKCAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApLCBmdW5jdGlvbiggJGssICR2ICkge1xuXHRcdFx0XHRpZiggJHYgPT09ICRpbWFnZV9pZCApIHtcblx0XHRcdFx0XHQkdmFsdWUuc3BsaWNlKCAkaywgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRpbnB1dC52YWwoICR2YWx1ZS5qb2luKCAnLCcgKSApO1xuXHRcdFx0JHBhcmVudC5mYWRlT3V0KCAoKSA9PiAkcGFyZW50LnJlbW92ZSgpICk7XG5cdFx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHR9ICk7XG5cblx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblxuXHRcdGlmKCAkcHJldmlldy5oYXNDbGFzcyggJ2dhbGxlcnktc29ydGFibGUnICkgKSB7XG5cdFx0XHQkcHJldmlldy5zb3J0YWJsZSgge1xuXHRcdFx0XHRpdGVtczogJz4gZGl2Jyxcblx0XHRcdFx0Y3Vyc29yOiAnbW92ZScsXG5cdFx0XHRcdHNjcm9sbFNlbnNpdGl2aXR5OiA0MCxcblx0XHRcdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRoZWxwZXI6ICdjbG9uZScsXG5cdFx0XHRcdG9wYWNpdHk6IDAuNjUsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdGxldCAkaXRlbSA9IHVpLml0ZW07XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICd3aWR0aCcsICRpdGVtLndpZHRoKCkgKTtcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ2hlaWdodCcsICRpdGVtLmhlaWdodCgpICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cbiIsIi8qIGdsb2JhbCBnb29nbGU6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRtYXAgICAgICAgICAgICAgID0gdGhpcy5vcHRpb24oICdtYXAnLCB7fSApO1xuXHRcdCRtYXAuZGV0YWlscyAgICAgICAgICA9ICcjZ21hcF9maWVsZHNfJyArIHRoaXMuaWQoKTtcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xuXHRcdGlmKCAneWVzJyA9PT0gdGhpcy5vcHRpb24oICdzaG93X21hcCcgKSApIHtcblx0XHRcdCRtYXAubWFwID0gJyNnbWFwXycgKyB0aGlzLmlkKCk7XG5cdFx0fVxuXG5cdFx0bGV0ICRfaW5zdGFuY2UgPSB0aGlzLmVsZW0uZmluZCggJ2Rpdi5zZWFyY2hib3ggPiBpbnB1dCcgKTtcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcblx0XHQkX2luc3RhbmNlLmJpbmQoICdnZW9jb2RlOmRyYWdnZWQnLCAoIGV2ZW50LCBsYXRMbmcgKSA9PiB7XG5cdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcblx0XHRcdGdlb2NvZGVyLmdlb2NvZGUoIHtcblx0XHRcdFx0J2xvY2F0aW9uJzoge1xuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXG5cdFx0XHRcdFx0bG5nOiBwYXJzZUZsb2F0KCBsYXRMbmcubG5nKCkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0XHRcdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggJ2ZpbGxEZXRhaWxzJywgcmVzdWx0c1sgMCBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLyogZ2xvYmFsIHNldFRpbWVvdXQ6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGFkZCAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiBidXR0b25bZGF0YS13cG9uaW9uLWdyb3VwLWFkZF0nICksXG5cdFx0XHQkZ3JvdXBfd3JhcCA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAnICksXG5cdFx0XHQkbGltaXQgICAgICA9ICR0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0JGVycm9yX21zZyAgPSAkdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtd3JhcCcgKSwgJ2FjY29yZGlvbicgKTtcblxuXHRcdCRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24tY29udGVudCA+IC53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicgKVxuXHRcdFx0XHRcdFx0ICAuY2xpY2soKTtcblx0XHR9ICk7XG5cblx0XHQkZ3JvdXBfd3JhcC5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiAkYWRkLFxuXHRcdFx0bGltaXQ6IHBhcnNlSW50KCAkbGltaXQgKSxcblx0XHRcdGNsb25lX2VsZW06ICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdncm91cF90ZW1wbGF0ZScgKSxcblx0XHRcdG9uUmVtb3ZlOiBmdW5jdGlvbiggJGVsZW0gKSB7XG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0XHRpZiggalF1ZXJ5KCAnYm9keScgKS5maW5kKCAnbGluayNlZGl0b3ItYnV0dG9ucy1jc3MnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdGpRdWVyeSggJ2JvZHknIClcblx0XHRcdFx0XHRcdC5hcHBlbmQoICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaWQ9XCJlZGl0b3ItYnV0dG9ucy1jc3NcIiBocmVmPVwiJyArICR3cG9uaW9uLnNldHRpbmdzKCAnd3BlZGl0b3JfYnV0dG9uc19jc3MnICkgKyAnXCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJhbGxcIj4nICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZGF0YSA9ICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGdyb3VwX3dyYXAsICdhY2NvcmRpb24nICk7XG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRkYXRhICk7XG5cdFx0XHRcdCRkYXRhLmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0XHRcdHdwb25pb25fZmllbGQoICRkYXRhICkucmVsb2FkKCk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGRhdGEuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJyApLCAncmVsb2FkX3dwX2VkaXRvcicgKTtcblx0XHRcdH0sXG5cdFx0XHRzb3J0YWJsZToge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWFjY29yZGlvbi1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RvcDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJGh0bWwgPSBqUXVlcnkoICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPicgKyAkZXJyb3JfbXNnICsgJzwvZGl2PicgKS5oaWRlKCk7XG5cdFx0XHRcdCRhZGQuYmVmb3JlKCAkaHRtbCApO1xuXHRcdFx0XHQkYWRkLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuZmFkZUluKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJF9fRSA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JF9fRS5mYWRlT3V0KCAnc2xvdycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkX19FLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0sIDEwMDAgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLypnbG9iYWwgc3dhbDp0cnVlKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRfdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJF90aGlzLmVsZW1lbnQsXG5cdFx0XHQkYXJncyAgICAgICA9ICRfdGhpcy5vcHRpb25zKCksXG5cdFx0XHQkaW5wdXQgICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1pbnB1dCcgKSxcblx0XHRcdCRyZW1vdmVfYnRuID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24taWNvbnBpY2tlci1yZW1vdmVdJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLWFkZF0nICksXG5cdFx0XHQkcHJldmlldyAgICA9ICRlbGVtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXG5cdFx0bGV0ICR3b3JrID0ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsZW1zOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdHBvcHVwOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsbTogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBBIE5ldyBJbnN0YW5jZSBmb3IgVG9vbFRpcC5cblx0XHRcdCAqL1xuXHRcdFx0aW5pdF90b29sdGlwOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCAkYXJncy5wb3B1cF90b29sdGlwICE9PSAnZmFsc2UnICkge1xuXHRcdFx0XHRcdGxldCAkdHAgPSAoIHR5cGVvZiAkYXJncy5wb3B1cF90b29sdGlwID09PSAnb2JqZWN0JyApID8gJGFyZ3MucG9wdXBfdG9vbHRpcCA6IHt9O1xuXHRcdFx0XHRcdGlmKCAkd29yay5lbGVtcy5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JHdvcmsuZWxlbXMudGlwcHkoICR0cCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSW5pdHMgRm9yIGVhY2ggYW5kIGV2ZXJ5IFBPUFVQLlxuXHRcdFx0ICogQHBhcmFtICRlbG1cblx0XHRcdCAqIEBwYXJhbSAkaW5zdGFuY2Vcblx0XHRcdCAqL1xuXHRcdFx0aW5pdDogZnVuY3Rpb24oICRlbG0sICRpbnN0YW5jZSApIHtcblx0XHRcdFx0JHdvcmsuZWxtICAgPSAkZWxtO1xuXHRcdFx0XHQkd29yay5wb3B1cCA9ICRpbnN0YW5jZTtcblx0XHRcdFx0JHdvcmsuZWxlbXMgPSAkd29yay5lbG0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cdFx0XHRcdGxldCAkaGVpZ2h0ID0gJHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcgKTtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcsICRoZWlnaHQgKTtcblx0XHRcdFx0JHdvcmsuc2VsZWN0KCk7XG5cdFx0XHRcdCR3b3JrLmlucHV0KCk7XG5cdFx0XHRcdCR3b3JrLmVsZW1zLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJGljb24gPSBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1pY29uJyApO1xuXHRcdFx0XHRcdCRpbnB1dC52YWwoICRpY29uICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0XHRzd2FsLmNsb3NlTW9kYWwoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQkd29yay5pbml0X3Rvb2x0aXAoKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFdvcmtzIHdpdGggUE9QVVAgSW5wdXQgU2VhcmNoLlxuXHRcdFx0ICovXG5cdFx0XHRpbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0nICkub24oICdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdvcmsuZWxlbXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKS5zZWFyY2goIG5ldyBSZWdFeHAoICR2YWwsICdpJyApICkgPCAwICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYW5kbGVzIFNlbGVjdGJveCBpbiBwb3B1cC5cblx0XHRcdCAqL1xuXHRcdFx0c2VsZWN0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgc2VsZWN0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblx0XHRcdFx0XHQkd3Bvbmlvbi5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0XHQnd3Bvbmlvbi1pY29uLWxpYic6ICR2YWwsXG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHdvcmsuZWxtLCAkd29yay5wb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLmRpc2FibGVMb2FkaW5nKClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmKCAkaW5wdXQudmFsKCkgPT09ICcnICkge1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQmx1ciBFdmVuIC8gY2hhbmdlIGV2ZW4gaW4gaW5wdXRmaWVsZC5cblx0XHQgKi9cblx0XHQkaW5wdXQub24oICdrZXl1cCBibHVyIGNoYW5nZSBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYoICR2YWwgIT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnPGkgY2xhc3M9XCInICsgJHZhbCArICdcIj48L2k+JyApLnNob3coKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBBZGQgQnV0dG9uIENsaWNrIEV2ZW50LlxuXHRcdCAqL1xuXHRcdCRhZGRfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkcG9wdXAgPSBzd2FsKCB7XG5cdFx0XHRcdHRpdGxlOiAkZWxlbS5maW5kKCAnLndwb25pb24tZmllbGQtdGl0bGUgaDQnICkuaHRtbCgpLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHRhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHR3aWR0aDogJzcwMHB4Jyxcblx0XHRcdFx0Y3VzdG9tQ2xhc3M6ICd3cG9uaW9uLWljb24tcGlja2VyLW1vZGVsJyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdCRfdGhpcy5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvblN1Y2Nlc3M6ICggJHJlcyApID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHBvcHVwX2VsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkcG9wdXBfZWxlbSwgJHBvcHVwICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25FcnJvcjogKCkgPT4gJHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxuXHRcdFx0XHRcdFx0b25BbHdheXM6ICgpID0+ICRwb3B1cC5kaXNhYmxlTG9hZGluZygpLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgUmVtb3ZlIEJ1dHRvbiBFdmVudC5cblx0XHQgKi9cblx0XHQkcmVtb3ZlX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRpbnB1dCAgICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3X2FkZCA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXctYWRkJyApLFxuXHRcdFx0JHByZXZpZXcgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcgLndwb25pb24tcHJldmlldycgKTtcblxuXHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gbnVsbDtcblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHByZXZpZXdfYWRkLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3LnNob3coKTtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25faW1hZ2VfdXBsb2FkX3VwZGF0ZWQnLCAkaW5wdXQsICRwcmV2aWV3LCAkcHJldmlld19hZGQgKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlld19hZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkdGhpcy5tZWRpYV9pbnN0YW5jZSApIHtcblx0XHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gd3AubWVkaWEoIHtcblx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdHRpdGxlOiAkdGhpcy5vcHRpb24oICdmcmFtZV90aXRsZScsIFwiU2VsZWN0IEltYWdlXCIgKSxcblx0XHRcdH0gKTtcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9uKCAnc2VsZWN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gJHRoaXMubWVkaWFfaW5zdGFuY2Uuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKS5hdHRyaWJ1dGVzO1xuXHRcdFx0XHRsZXQgdGh1bWJuYWlsICA9ICggdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsLnVybCA6IGF0dGFjaG1lbnQudXJsO1xuXHRcdFx0XHQkcHJldmlldy5maW5kKCAnaW1nJyApLmF0dHIoICdzcmMnLCB0aHVtYm5haWwgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGF0dGFjaG1lbnQudXJsICk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuaWQgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3LmZpbmQoICcud3Bvbmlvbi1pbWFnZS1yZW1vdmUnICkub24oICdjbGljaycsICgpID0+ICRpbnB1dC52YWwoICcnICkudHJpZ2dlciggJ2NoYW5nZScgKSApO1xuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJHNldHRpbmdzID0gdGhpcy5vcHRpb24oICdpbnB1dG1hc2snICk7XG5cdFx0XHRpZiggJHNldHRpbmdzICkge1xuXHRcdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCAkc2V0dGluZ3MsICdJbnB1dE1hc2snICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5pbnB1dG1hc2soICRzZXR0aW5ncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGhpc19lbGVtID0gJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi10YWItd3JhcCAnICk7XG5cblx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpIGEnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bGV0ICRfdGhpcyA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0JF90aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi10YWItY3VycmVudCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLmhpZGUoKTtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi10YWItcGFnZScgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHRsZXQgJHRhYiA9ICRfdGhpcy5hdHRyKCAnZGF0YS10YWItbmFtZScgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdkaXYjd3Bvbmlvbi10YWItJyArICR0YWIgKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICkuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCBhJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaTpmaXJzdC1jaGlsZCBhJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2lzX3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5nbG9iYWxfdmFsaWRhdGUgPSBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWtleXZhbHVlX3dyYXAnICkuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWFjdGlvbi1jb250YWluZXIgID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1rZXl2YWx1ZS1hZGRdJyApLFxuXHRcdFx0bGltaXQ6ICggLTEgPT09IHRoaXMub3B0aW9uKCAnbGltaXQnICkgKSA/IG51bGwgOiB0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0Y2xvbmVfZWxlbTogJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24ta2V5dmFsdWUtZmllbGQgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLXJlbW92ZV0nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnaHRtbF90ZW1wbGF0ZScgKSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZWxlbS5maW5kKCAnPiBkaXY6bGFzdC1jaGlsZCcgKSApO1xuXHRcdFx0fSxcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRodG1sID0galF1ZXJ5KCAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj4nICsgdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICkgKyAnPC9kaXY+JyApXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLmFmdGVyKCAkaHRtbCApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5mYWRlSW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkX19FID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX19FLmZhZGVPdXQoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCRfX0UucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSwgMTAwMCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIGVyci5lbGVtZW50LnBhcmVudCgpLnBhcmVudCgpICk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRhcmdzXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCB0cnVlICE9PSBpc191bmRlZmluZWQoICRhcmdzLmtleSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDAgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3Mua2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGlmKCB0cnVlICE9PSBpc191bmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMSApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy52YWx1ZSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVlID09PSBpc191bmRlZmluZWQoICRhcmdzLmtleSApICYmIHRydWUgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFOdGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqTXRZekF4TVNBMk5pNHhORFUyTmpFc0lESXdNVEl2TURJdk1EWXRNVFE2TlRZNk1qY2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVEJHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJVVTVOMEUzT0VFMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlVVNU4wRTNPRGsxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROQ0JYYVc1a2IzZHpJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRNMk1EVTJRekpHUWtWRVJUQXhNVGsxTlVWQ1JUQXpSVUU0UWpSRU5VSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFHQkFRRUJRUUdCUVVHQ1FZRkJna0xDQVlHQ0FzTUNnb0xDZ29NRUF3TURBd01EQkFNRGc4UUR3NE1FeE1VRkJNVEhCc2JHeHdmSHg4Zkh4OGZIeDhmQVFjSEJ3ME1EUmdRRUJnYUZSRVZHaDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHgvL3dBQVJDQUVUQVJNREFSRUFBaEVCQXhFQi84UUFpUUFCQUFNQUF3RUJBQUFBQUFBQUFBQUFBQVFGQmdFREJ3SUlBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFCQXdNREFRTUdCdzhDQXdrQUFBQUJBQUlERVFRRklSSUdNVUVUQjFGaGNZRWlNcEdoc2NGQ2doVGhVbUp5a3FLeXdpTXpjN04wRlRZa045SFRGK0pEVTVPalZEVlZGaEVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9WS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJT3VlZUtDTXlTdURHRHFTZzZJOHZqWG1qWjIvV3EzNVFFSGV5NHQ1UGNsWS84QUZjRDhpRHNRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGTnllWGJiUlIvZnVKL0pIM1VHYjNJT2R5RHNqdkxtUDkzSzl2bURpRUVsbWN5YkJRVGtqemhwK01oQklaeWE5YlFPWkcveW1oQitJb0pNZktXLzk1Yit0cnYrSVFTWStTWTkzdkI3UE9SVWZFU2dreDVqR1NlN2NOSDQxVy9wVVFTMlBZOW9leHdjMDlIQTFCUWNvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lNM3lxYjl2QkY5NjB1L0tOUDFVRmJpb0czTi9EQzhibU9QdER5Z0NwUWFTVGoyTWVQWllZejVXdVB6MVFSWk9MUUVmczVuQStjQW9JeitMM1k5eVpoOU5SOHlDTTdqMlZCMGpEdk9ITitjaEJHa3htU2pOSFc4bnFhVDhpRG9mSE5HYVBZNXA4aEJDRDQzSU5keDFqbTR4cEo5OXpuTjlIVDVrRm1nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWd4L0o1OStVTGYvQ1kxdjYzNnlEbmk3Qy9KaDNaRzF4UHJGUG5RYTlBUUVCQVFRTTQrT1BHVHVjMEVsdTBFanRPaURFYmtHN3hNWmp4dHV3OWRnUDVXdnpvSmFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0RBWnFmdk1yY3VIVGVRUHE2Zk1ndU9HeGt2dUpld0FOcjY2b05PZ0lDQWc0YzVyV2x6aUd0SFVuUUlLWGxrN1JqR3RCcjNqeFFqdEFDREhzSmM0TkhVbWc5YUQwcGpReGpXam8wQUQxSU9VQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRZk1rc2NiZHozQm84cFFSSk14WnMwYVM4L2dqVDQ2SUlVdWJuZHBHME04NTFLQ1ZpN21XV09hU1oxUTAxOUFwcWd3RTBwZEs5MzN6aWZoS0RZOE5ZUmkzdVAwNVNSNmdBZ25aUE4yT1BaKzFkdmxQdXhOMWQ2L0lncU1UeXQ4OThZcnNOWkZLYVJFYWJUNUNmT2cwNkNweWZKTWZaQXNEdStuN0kyZEFmT1VHU3lHY3lGKzR0a2VXeEU2Uk4wYjE3ZktndE9Vdjd1d3hzSDBoSFZ6ZlExb0NDb3c3VEpsYlJ0Sy90V0VqekJ3SlFlaklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJS3JPdGR0aGQ5RUVnK2swUVZDQWd0R2tRNEM2bEpvVEhKcjU2RUJCNS92UWFwK1R1TVp4aXlGdlJrMCsvMjZEUWJpZTMwb012SlBKSTh2a2NYdmNhdWM0a2tuMGxCODcwRm5OeVhMUzJyYll6RU1BbzV3MGM3MHU2b0t6ZWc3N0VHUzlnakd1NlJvcDYwRjF6YVVmM1NKamVqSVJVZVFsenZtUVIrSXNNbWJpTktoalh1UDVKSHpvTitnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2k1U0x2TE4vbGI3UTlTRFBVUUtJSm1mY0lPS3ZGYUY3WXdQUzU0SitKQmdBNGtnZVZCcnVUV0Y3TGpjWXkzZ2RJeUdMMnkzV2hMVzlucVFaWjl2ZE05K0Y3ZlMwaEIxRnhIWFJCeHZRTjZDNDRtd1M1NjJEaFZyZHp2V0dFajQwSHh5ZWN2emwxVTEydTJqMUFJTFhnVWU2N3VwdnZJMnRIMWovQU5sQnRVQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJ3QkJCNkhRb012UEgzY3I0ejlGeEZmUWcrV2lwSG5RT2R5OXppYlczKytlUHpHL2RRWVVTRUVFZFFhaEJjUWN4enNOQjM0ZUFLQVBhMGo0Z0VFOXZpQmtEcExiUU9iMmdCdytWeFFkZzVoaHBOTGpFeDFQdk9BWWZsYWc1YmtPQ3o2eTJqb25IeWJ3UHpYSURjUHcrN0pNR1E3ajhGN2czOU9pQ3o0OWdNZlpYN3JpM3ZtWFhzRnJHdExTUVQxT2hLRERYMDVsdlo1Q2FsNzNHdnJRYlR3K2hBeDF6UDJ5UzdQVXhvUDY2RFZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNDaXpFT3k2MzAwa0ZmWDJvSTF0SHZ1STJEdGNFRlg0aTNCKzAybHYyTlk2VDhvMC9WUVkrcUJWQXFnVlFLb0ZVSEllNGRIRWV0Qnh1UWVtOEtoRWZINEhEcks1N3orVnQvVlFYcUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3I4ekZ1dDJ5QWFzZHFmTWZ1b0s3RzdmdHNlNDAxK09pRG5rdkZQN3pOSE95NDdtV05teWhidWFSVW55anlvTXpjZUgrYWovZFBpbUhtZHQvU1FRTGppUElZUGV0SFAvaGtQL1JxZ2dUNHpKMjRyUGF5eER5dlk1dnloQkdKSU9xRGpjZ2JrRGNnYmtIc09EZzdqRDJjVktGc0xLanprVlB4bEJOUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFSFZjeENXM2taNVI5MUJtalVHbmFFSFl5NHVHZTVJNXZvSkNEdFprcjFuU1FuMDYvS2c3NDh6ZEErMDBQK0w1RUZoYlhWek1SdmdMR242UlAzRUhaUFoybHdLVHdzbEg0YlE3NVVGZk54VGowMWQxbEdDZTF0Vy9JUWdyNXZEN0F2SkxUTkdld05jQ0I4SUtDQkw0YVJFa3hYN21qc0RvNi9HSEJCRGI0YjVFWERBNjVpTUZSdmNOMjdiMjBiVDUwSG9ER2hyUTBkR2lnOVNEbEFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGRmUyTTR1bjdHRnpYbXJTQnBycWc1aHc5eS9WNUVZOC9WQk5pdzF1MzMzRjUrQUlKa2NFTVg3dGdiNkFnKzBCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkZ5bVJoeHVPdWIrZHJuUTJzYnBaR3NBTGkxZ3FhQWtDdnJRUU9MOHN4UEpMT1M1eDVlM3VYN0pZWmcxc2pTUlVFaHBjS083RFZCYnlQREkzUFBSb0xqVHpDcUNwNHZ5akg4a3g4bDlZeHl4d3h5bUJ6WncxcnR6V3RkVWJYUEZLUEhhZ3VFQkFRUnNsZnc0L0hYTi9NSE9odFluelNOWUFYRnJHbHgyZ2tDdW5sUVlqL3JaeFgvMnQ5LzVjUC9OUVNMSHhpNGhjekNLVDdUYUEwQWtuamJ0MS9odWtJK0JCdG81STVZMnlSdUQ0M2dPWTlwQmE1cEZRUVIxQlFmU0FnSUNBZ0lLYmpuS3Nmbi90bjJPT2FQN0ZMM012ZkJyYXUxMWJ0Yy9UVHRRWEtBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FncGViZjRqbVA2U1g5QW9QSmVOdnlIRkxYRDhxaDNUWXZJOTVCa29oMmJabnNINXJBNXZuQkhhZzlyTnpCZFkwM051OFN3VFFsOFVqZFE1cm0xQkNERWVDZitLM1g5ZEovSmlRVE0zNG0yZHBrbjR2RVdFK2F2NGlSTEhiMTJnZzBjQVd0a2NTM3RvMmlEbkJlSmRuZTVKbUt5bGhQaHNqS2FSUlhGZHJpZWpkem14dUJQWlZ2bVFiTkJUOHgveFBNLzBVLzhzb0tyd3Avd1hIL2pUL3ozb0pQaUphWXlmaU9SZmZNWWU1aGMrMmtkVGMyYjZHMDloTHFEem9LWGlHY3VjUjRXeDVTZUUzSDJRU2QxRTUyd3VqNzR0YU4xSFVBcnBvZ044Vko3a1FPeGVCdWNqR1dSbThsaExpeUdTUm9jWTl3amNIRnRhRW5hZ3ZPVWMzeG5IaERGT3g5eGtMZ0F3Mk1IdFBJSnBVK1FWMEhsN0VGSEQ0cVRXOHJQNzl4Kzh4TnJJUTF0eThQZTJ2bkRvNGo4RlVGL3l2bFJ3ZUVqekZ2YWpJV3Izc0R5eVhZQkhJUFprQjJ2RGhXZzlhQzd0NTRyaTNpdUlYYm9wbU5ramNPMXJoVUg0Q2dvOFh5dzVIbEdSd3R2YVZ0OGEwZDlmZDVvWkRRYkJIdDh1NzZYWWc0NGp5My9BUFJmM0QvU2ZaZnNNM2Nmdk84MzlmYTkxbE9pQ3Z6dmlSYTJXU2t4ZUtzSjh6a1lhaWFLM0IydElwVWJtdGtKSTdhTjA2SU9jRjRqMjE3a284WGxjZlBoc2pOcERGY0E3WGs5QUhPYkdRVDJWYWdzVHlzeDh5SEc1N1h1eExCMzlyZDk1WHZLRFZ1emFLZTY3NlI2SVBybVhLb3VOWWorNFBoKzB2ZEkyS0tEZjNlNHVxVDdXMS9SclNlaUN6eHVRaHY4WmJaQ1AyWXJtRmt3cWZkRDJoMUNmTWdxdUljcWR5T0M3dW1XbjJlMGduTU52S1hsNWxEZFM3YnNadDBJN1Q4U0MvUUVCQVFFQkFRRUJBUUVGTHpiL0VjeC9TUy9vRkJSOER4ZG5sZkRLeng5NHpmYjNEYmhyeDJqL1VTRU9IbmFkUWdxdUY1Uzh3Ti9lOEx5NzZtTnIzNHlZKzY1cEJkdEZleHc5cHZucUVEd3Bua3QrQVplZUxTU0tlNGV3L2hOdG95RUUvd2NzYmFMaTc3eHJRYm02bmYzMG4waUdhTmJYeURyNjBIejR5MmR1N2prRjhRRzNkdGNNRUVvMGNBOEhjMEhyMkErcEJ0c2ROSk5qN1dhUTFra2hqZTgrZHpRU2dyK1kvNG5tZjZLZitXVUhuWENlRlovSjhidGIyMDVQZDQ2M2tNZ1paeENUWXpiSTVwcHRtakdwRmZkUVhyUENpVzZsWWM3eUM4eXNNYmc1a0xpNW8wclVFdmZOMTgxRUZ2ejIxdDdYZ0dSdHJlTVJRUXdNWkZHMFVEV3RlMEFCQjJlRzl2RkJ3ckdDTnROOGJwSG50TG52Y1NTZ3cwdDF5cC9pVm1ickNXRUdRdmJZQ0pyYmtnQ0tLaldnc3JKRHFhZkg1MEZwazdqeGN5V1B1TEM2NC9ZdXQ3bGpvNUFIc3FBNGRSVzVPbzZqem9MdmpYRzhqSndFNERPUjkxTzVrc0lhWE5lV3RMaTZNN21Gdzlra1U5Q0N2NFR5YzJQQjc0WCtsMXg0eVFTeG5xZHRlNmIrVjdBOUNDYjRXWXVTMjQ0Y2pjNjNtWGxkZFRQUFV0SklaOE9ydldncC9ES1o4Tmh5aWFQOTVIY1NQWjZXdGVRZ28rQlhYaUJiNHFXZkFZbTF2SUxtWnpwcnVkemU5YzhVQkRxenhtZzdOTzFCTzVMWWVLdkliYUNHOHdsckM2MmxFMEU4RXNiWld1QXBvNTF3L1EvTUVGOTRodzNOcGI0Yms0WlM3eEU4WnUydDdZcGFDUnVuNFduclFjY21naDVMeTdIWVpwMzJWdFpUWGs1cFZwTTdlN2lyWHlhRWVsQlI0dmtzMWo0V1g5bzh1R1JzNVpNWXhsZmFEcFhhVVA0TFhPcCtLZzlBNGxoaGh1TzJPUG9CTEZHRFBUdGxmN1Qvd0E0b0xkQVFFQkFRRUJBUUVCQVFWSEw0SnArTDVXR0NOMHMwbHJLMk9KZ0xuT2NXbWdEUnFTZ2crRzlwZDJuQzhkYjNjTWx2Y003N2ZESzBzZTJzOGhGV3VBSXFEVkJEOFNlSlNackdOdnJGcEdYeC83UzNMUGVlMEdwWUthMTdXK2Ywb0kzaEppNzIwNHZkMjJSdEpiWjhsM0llNW5qZEc1ekhReE5ydGNBYUdoQ0Nxc2JQbVhCTHU2dDdESFB6ZUNuZVpJV1JFbVZwTkIwYUh1QnBRTzlrZzlmS2dYdGh6SG5kNWFSWkhIT3d1QnQ1TzlsamxKNzE1RlduUndZNHVwVUQyUUJXdXVpRDA1akdzYUdORkd0QURRT2dBUVZmSzRacCtNWmFHR04wczBscE0yT05nTG5PY1l5QUdnYWtsQlcrR2xuZDJmRGJHM3U0SkxlNFladDhNclhNZUt6UElxMXdCMUJRYWRCUWMrdHJtNjRoazdlMmlmUFBKRzBNaWphWHZjZDdUbzF0U1VIMXdhMnVMYmlXTWd1WW53enh3MGtpa2FXUGFkeDBMVFFoQm5lVWNkNUhqZVRqbFhHb2hjeXlzRWQvWkhxOEFBYUNvcUhCbzZhZ2l1cUNQZGNyOFFzM2J1eDJONDdQaXBwaHNrdnAzUFlHTk9oY3h6MlJiVDZLbnlhb054Z2NkY1k3RTIxbmMzVWw3Y1JOL2JYVXpuUGM5N2lTZFhFbWdyUWVaQjV6emJpV2JsNVZKYjR5R1E0elBtQjEvTEd4em1SdWlmN1JlNENqZnY5ZXFEMUszZ2l0NEk0SVdoa1VMV3h4dEhRTmFLQWZBZ3cvaGhqTCswYm5HMzFwTGJ0bnV5Nk1UUnVZSHNPN1Z1NENvUVZkclljdzRKZjNjZUx4N3N6Z0xtVHZZNFlxbVJoTkI5RVBlSFVvQ2RwQnBWQktOenovbHQ1YndpMHVPTlltSisrNW03eDhjNzZhYlFhUlBOZGFlelR5OWlEZFpiR3daTEYzV09tL2RYTVRvaWVwRzRVRHZTRHFneC9oZmhzdmJOeUY5bUlwSXIxNWlzNGhLMHRQYzJzWVkwdEJwVnAwMTdhSUt0L0Q4ako0bFNSbUNUK3d2dUdaU1NRc2QzSm1Zd25idXB0M2Q0ODFGZWlEMDlBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkF6K1dpeEdGdk1sSlNsdEU1N1FmcFA2TWI5WnhBUWVTOFFreUhIczdoY3hmUExyYmtyWkdYRGoyT2ZMN0xqMmRkanZRU2c5cGM1cldsemlBMENwSjBBQVFkRmxmMkY5RDMxbGN4WFVJSmFaWVh0a2J1SFVibWtpdXFCZTM5aFl3OTllM01WckNTR2lXWjdZMjdqMEc1eEFyb2c3VEpHSSs4TGdJNmJ0OVJ0cDFyWHlJSUVYSStQVFRpM2h5bHBKT1NRSW1UeE9lU09vMmgxVUV1OGpobHM1NHBuYklYeHZiSytvRzFwYVE0MU9nb0VHYngyTHdtTTRUa0xYRFhmMjJ5RU55NFQ5NUhMN1JqTzRib3cxdWlDTDRSZjRYQi9HbS9TUWFtK3krSnNDMFgxN0JhRjN1aWVWa2RmUnVJUWRsbmYyTjdGMzFuY1JYTUowN3lGN1pHK1RxMGtJTUh5ei9BSFI0ei9EUDZUMEczYm04TTY4TmsyL3RqZUE3VGJDVmhscjVObGQzeElQalAvOEF3V1IvcFp2NWJrR2E4SXY4TGcvalRmcElOVmZaYkZXRzAzMTVCYUIzdTkvSXlPdm8zRWVSQjIyMTNhM1VJbXRabVR3dTkyU0p3ZTA5dWhhU0VIYWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lQT2ZGckp4enlZdmpZblpiaTltYk5kelBjMWpXUkIyeHBjWGFVcnVkOVZCejRoeThVeUhEL3N0aGs3SjArTjJTV1VVZHhFWEZzWTJGalFIVlBzZEI1VUdwNFRuUm0rTldkNjUyNmNON3E1OHZleCt5NG44YjN2V2d6ZkRSL1lPYTVuamJ2WnRidjhBMTJQSFpROVdqNnBwOVZBNW1QNzl6WEM4YmFOMXJiSDdka0IxRkIwYWZxaW4xa0ZqelRqR1N6MS9aUnoza2R0eHVDajc2THZITWxlK3AvQjJVOTBDcnRLbEJtK1JjZDhKWU1WY0MydTRJYjFzYnpDK0c1Zk8vdkdqUU9ZSFNEVjNYUkJlY0l5RjFlK0d6bjNMekxKRkRjd2g3dFNXc0RnMnA4emRFRUh3OS8yd3YveGJ6K1dnbWVGd3VqNGYwdEN3WFpkY2ZaekpVTUVsVHQzVURqU3ZYUkJYMlBBK0xXY2NrL05iKzN1c3ZjU09kTEpMZHVpWnIwMmt1aGNUVFUxUVZXSmZnTVY0ajQ2UGkxNFpNZmV0TWQzQzF6bnNCSWRSdTUzVUNnY05UUW9KM2lQWlhsOXozQldkbk02M25uaDJDZG52TWFYdjN1Rk8wTXFndDc3d2c0cS9GdWdzMlNRWHpXL3NyMHlQYzR2SFRlMG5aVHkwYUVIUnd6TzNtVTRCazRiNXhmZDQrSzR0bnlPTlhPYUlpV2x4N1NLN2ZVZytPQTVUKzFlR0UyUjJoeHRmdEVqR25vWEEreUQ2U2d5K0FtOE83eUYrUjVma1pMM01YVG5PbWljMjZEWXhVN1FERTBWMDhob09nUVNMUE5jWXdYTE1kTnhTK2tseDE5SUlNallQRXdZd1BjR3RlMHl0YldtNm8xSjA2MEtEMk5BUUVCQVFFQkFRRUJBUUVCQVFFQkFKQUZUb0FnOHE0L2ljZnpqbHVheStUaU54aTRDSUxTUGM1Z05EUmhCWVduUnJha2ZoSU5WLzBzNEgvd0RXZit2Y2Y4eEJuZUFTTzQ3elBMY1VtZFNDWnhtc2E5dTBiaFN2YTZJNi9pb0xUeElnZmo3dkQ4cWhIdDR5NGJIZFU2bTNsTkQ4cGI5WkIxK0dzVDhsa00xeXVjSGRrSnpEYVY2aUNNai9BSU5iOVZCVmM3bHRMM24xbGkrUVhUN1hBTmdFakFDV3NkSWQzdE9kMlZjTnU3czh5RG5QTThKOExpYmwxaEZhM2w5TEc1dHN5T1UzUkVoYVExeExuU05ZQWRTZ3NmRG9nK0dsd0FkUUxzSDRDVUhWNGUvN1lYLzR0NS9MUWRYRHJxOXRQQ2E3dWJLb3VvbTNMb25ORlMwZzZ1SDRvMVFWbkVNUjRhWG1HWmU1eTlqbXlraGMrN2JkWExvWE5mdVB1dEQyRjJuYnJWQkhqeUhHYmp4THcwZkg0STRiRzNmM2JwWTI3QkpJZDFYRHRJNkFWUVcvaUZsRzRyeEF3T1FleDBrZHZDWHl0WUt1N3ZjOFBJSDRMU1NnMVdSOFErSjJtTWZmUjVHRzVPMnNWdkU4T2xjN3Niczk1djFnRUdkNEpqTHUyNERsNzI3YVdTWkpseGNNYVJUMk82SUR0ZnZqVStoQjg4S3hzdVQ4S2Jxd2gvZlRpNGJFRG9DOE9xMGVzaEJFNEZrZUNQeExjZG5iT3d0Y3RaRjBVN3J5R0ZoZlJ4b1MrUWU4UGRJSnJVSUxOMlo0VS9rbGppY0RnckhKenlQclBkd1JSTVpBMXJoN1llSTNidG8xMEk3TmRVSG9DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNENHVJSXJpQ1NDVUV4VE1kSElBUzBscmhRMGMwZ2pUdENDSGhjRmljSmFHMHhsdUxlM2M4eU9ZSE9mVjVBQkpjOHVkMEE3VUU5QlYzZkdNSGQ1ZURNVDIyN0pXMjBRM0RYeU1JMmtrVmExd2E3cjJoQk15R1BzOGpaVFdWNUdKcldkdTJXTWtpbzY5V2tFZXBCeGpjYlk0eXhpc2JHSVEyc0lJampCSnBVa25WeEpPcDdVSFJtZVA0WE5RdGh5bG95NVl5cFlYVkRtMTY3WHRJY0srWW9JT000SnhIR3lkN2FZeUpzblkrVGRNNFYwOWt5bDlQVWdsNHZqV0Z4VmhQWVdGdjNObmNGenBvdThrY0NYdERYYXZjNGlyUjJJUHJIOGV3K094Y21MczdmdXJDVVBENGQ3M1Y3d1VkN1RuRjJvODZEc3hHRnhtSXNSWTQ2SHViVnBjNFI3blAxY2FuVjVjZmpRVkZ4NGNjSnVMazNFbUxqRWhPNGhqNUkyVnJYM0dPYXo0a0V1VGh2R0h2c25qSHh4dXg3KzhzekNYUmJIMURxL3N5M2RxMGU5VkJJdk9QWWU4eWR2azdtM0VsOWFOTElKUzU0RFdtdFJ0QkRUN3g2aEJYeCtIdkRJNzM3WXpGUkNhdTRBbDVqQjgwUmQzZjVxQzludDRaN2VTM2xidWhsWVkzczFGV3VGQ05LVTBRUnNSaHNiaDdKdGxqb2U0dFd1TG14N25QMWNhblY1Y2ZqUVFzdnd2aStZbTcvSVkrT1djKzlLMHVpZTZtbnRPakxDNzFvSk9HNDVnOExHNW1NczQ3WVBvSHZiVXZjQjBEbnVKY2ZXVUZpZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0QvLzJRPT0nO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuYmVmb3JlKCAnPHNwYW4gY2xhc3M9XCJzcGlubmVyIHdwb25pb24tc3Bpbm5lclwiPjwvc3Bhbj4nICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNob3dfcHJldmlldyggZSApICk7XG5cdH1cblxuXHRzaG93X3ByZXZpZXcoKSB7XG5cdFx0bGV0ICR2YWx1ZSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLnZhbCgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5hZGRDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHQkd3Bvbmlvbi5hamF4KCAnb2VtYmVkLXByZXZpZXcnLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dmFsdWU6ICR2YWx1ZSxcblx0XHRcdH1cblx0XHR9LCAoIHJlcyApID0+IHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcblx0XHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5odG1sKCByZXMuZGF0YSApO1xuXHRcdFx0fVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcblx0XHRcdFx0Lmh0bWwoICc8aW1nIGNsYXNzPVwid3Bvbmlvbi1uby1wcmV2aWV3XCIgc3JjPVwiJyArIHRoaXMuaW1hZ2UgKyAnXCIvPicgKTtcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLXNwaW5uZXInICkucmVtb3ZlQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgPSB0aGlzLm9wdGlvbiggJ3NlbGVjdDInLCB7fSApO1xuXHRcdHRoaXMuZWxlbWVudC5zZWxlY3QyKCB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnICkgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRmaWVsZF9kZWJ1Zygpe1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnc2VsZWN0aXplJywge30gKTtcblxuXHRcdGlmKCAhaXNfdW5kZWZpbmVkKCAkYXJnLnRoZW1lICkgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoICRhcmcudGhlbWUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCAnc2VsZWN0aXplLWRlZmF1bHQnICk7XG5cdFx0fVxuXG5cdFx0JGFyZyA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKTtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoICdmb3JtLWNvbnRyb2wnICkuc2VsZWN0aXplKCAkYXJnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR2YXIgJHRoaXMgICAgID0gdGhpcy5lbGVtZW50LFxuXHRcdFx0JGVuYWJsZWQgID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWVuYWJsZWQnICksXG5cdFx0XHQkZGlzYWJsZWQgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZGlzYWJsZWQnICk7XG5cblx0XHQkZW5hYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRkaXNhYmxlZCxcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0dXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHR2YXIgJGVsID0gdWkuaXRlbS5maW5kKCAnaW5wdXQnICk7XG5cblx0XHRcdFx0aWYoIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoICd3cG9uaW9uLWVuYWJsZWQnICkgKSB7XG5cdFx0XHRcdFx0JGVsLmF0dHIoICduYW1lJywgJGVsLmF0dHIoICduYW1lJyApLnJlcGxhY2UoICdkaXNhYmxlZCcsICdlbmFibGVkJyApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsLmF0dHIoICduYW1lJywgJGVsLmF0dHIoICduYW1lJyApLnJlcGxhY2UoICdlbmFibGVkJywgJ2Rpc2FibGVkJyApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkdGhpcy50cmlnZ2VyKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBhdm9pZCBjb25mbGljdFxuXHRcdCRkaXNhYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRlbmFibGVkLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICd1aS1zb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBjc3NfdW5pdHMgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZm9udF93ZWlnaHRfc3R5bGUgPSBmYWxzZTtcblx0XHRsZXQgJGVsICAgICAgICAgICAgICAgID0gdGhpcy5lbGVtZW50O1xuXHRcdGxldCAkcHJldmlldyAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZvbnQtcHJldmlldycgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgICAgID0gdGhpcztcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0XG5cdFx0XHRcdCRmb250X2ZpZWxkICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicgKSxcblx0XHRcdFx0JGZvbnQgICAgICAgICAgICAgID0gJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkudmFsKCksXG5cdFx0XHRcdCRmb250X3dlaWdodF9zdHlsZSA9ICR0aGlzLmZvbnRfc3R5bGUoICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLnZhbCgpICksXG5cdFx0XHRcdCR0YWcgICAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC10YWcgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkY29sb3IgICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWZpZWxkLWNvbG9yX3BpY2tlciBpbnB1dC53cC1jb2xvci1waWNrZXInICkudmFsKCksXG5cdFx0XHRcdCRhbGlnbiAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1hbGlnbiBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRmb250U2l6ZSAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1zaXplIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGluZUhlaWdodCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGluZS1oZWlnaHQgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdCRiYWNrVVBGb250ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1iYWNrdXAtZm9udCBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRkaXJlY3Rpb24gICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1kaXJlY3Rpb24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGV0dGVyLXNwYWNpbmcgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdGhyZWYgICAgICAgICAgICAgICA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9JyArICRmb250ICsgJzonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCxcblx0XHRcdFx0aHRtbCAgICAgICAgICAgICAgID0gJzxsaW5rIGhyZWY9XCInICsgaHJlZiArICdcIiBjbGFzcz1cIndwc2YtZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICsgJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPic7XG5cblx0XHRcdGlmKCBqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5hdHRyKCAnaHJlZicsIGhyZWYgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggJ2hlYWQnICkuYXBwZW5kKCBodG1sICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZm9udFNpemUgPT09ICcnIHx8ICRmb250U2l6ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkZm9udFNpemUgPSAnMThweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGV0dGVyU3BhY2luZyA9PT0gJycgfHwgJGxldHRlclNwYWNpbmcgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgPSAnMXB4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYoICRsaW5lSGVpZ2h0ID09PSAnJyB8fCAkbGluZUhlaWdodCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkbGluZUhlaWdodCA9ICcyMHB4Jztcblx0XHRcdH1cblxuXG5cdFx0XHRsZXQgJF9hdHRycyA9ICcgZm9udC1mYW1pbHk6JyArICRmb250ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC13ZWlnaHQ6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQgKyAnOyAnICtcblx0XHRcdFx0JyBmb250LXN0eWxlOicgKyAkZm9udF93ZWlnaHRfc3R5bGUuc3R5bGUgKyAnOyAnICtcblx0XHRcdFx0JyB0ZXh0LWFsaWduOicgKyAkYWxpZ24gKyAnOyAnICtcblx0XHRcdFx0JyBjb2xvcjogJyArICRjb2xvciArICc7JyArXG5cdFx0XHRcdCcgZm9udC1zaXplOicgKyBjc3NfdW5pdHMoICRmb250U2l6ZSApICsgJzsgJyArXG5cdFx0XHRcdCcgbGV0dGVyLXNwYWNpbmc6JyArIGNzc191bml0cyggJGxldHRlclNwYWNpbmcgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxpbmUtaGVpZ2h0OicgKyBjc3NfdW5pdHMoICRsaW5lSGVpZ2h0ICkgKyAnOyAnO1xuXG5cblx0XHRcdGxldCAkdGV4dCA9ICRwcmV2aWV3LnRleHQoKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5hcHBlbmQoIGpRdWVyeSggJzwnICsgJHRhZyArICc+JyArICR0ZXh0ICsgJzwvJyArICR0YWcgKyAnID4nICkgKTtcblx0XHRcdCRwcmV2aWV3LmZpbmQoICR0YWcgKS5hdHRyKCBcInN0eWxlXCIsICRfYXR0cnMgKTtcblxuXHRcdH0gKTtcblx0fVxuXG5cdGZvbnRfc3R5bGUoICRpbmZvICkge1xuXHRcdGxldCAkd2VpZ2h0X3ZhbCA9ICc0MDAnLFxuXHRcdFx0JHN0eWxlX3ZhbCAgPSAnbm9ybWFsJztcblxuXHRcdHN3aXRjaCggJGluZm8gKSB7XG5cdFx0XHRjYXNlICcxMDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzEwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzEwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzcwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzcwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc5MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdCRzdHlsZV92YWwgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7IHdlaWdodDogJHdlaWdodF92YWwsIHN0eWxlOiAkc3R5bGVfdmFsIH07XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFkZCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbicgKSxcblx0XHRcdCRpbnB1dCAgICA9ICRlbGVtLmZpbmQoICdpbnB1dFt0eXBlPXRleHRdJyApLFxuXHRcdFx0JHNldHRpbmdzID0gJHRoaXMub3B0aW9ucygpLCB3cF9tZWRpYV9mcmFtZTtcblxuXHRcdCRhZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHdwX21lZGlhX2ZyYW1lICkge1xuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHR0aXRsZTogJHNldHRpbmdzLnNldHRpbmdzLmZyYW1lX3RpdGxlLFxuXHRcdFx0XHRsaWJyYXJ5OiB7XG5cdFx0XHRcdFx0dHlwZTogJHNldHRpbmdzLnNldHRpbmdzLnVwbG9hZF90eXBlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRcdHRleHQ6ICRzZXR0aW5ncy5zZXR0aW5ncy5pbnNlcnRfdGl0bGUsXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSB3cF9tZWRpYV9mcmFtZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpO1xuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmF0dHJpYnV0ZXMudXJsICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gKTtcblx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHRleHRhcmVhID0gJGVsZW0uZmluZCggJ3RleHRhcmVhJyApO1xuXHRcdCRlbGVtLmZpbmQoICcjd3Bvbmlvbi13cC1saW5rLXBpY2tlciA+IGJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGV4dGFyZWEudmFsKCAnJyApO1xuXHRcdFx0aWYoICF3aW5kb3cud3BMaW5rICkge1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHR0aXRsZTogJHdwb25pb24udGV4dCggJ3dwX2xpbmtfZXJyb3JfdGl0bGUnLCAnV1AgTGluayBKUyBMaWIgTm90IEZvdW5kJyApLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy53cExpbmsub3BlbiggJHRleHRhcmVhLmF0dHIoICdpZCcgKSApO1xuXHRcdH0gKTtcblxuXG5cdFx0JHRleHRhcmVhLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApLmh0bWwoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApLnZhbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkudmFsKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN0YXJnZXQnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0YXJnZXQnICkudmFsKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEudGV4dCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuLi9jb3JlL2RlYnVnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGxldCAkZGVwID0gdGhpcy5vcHRpb24oICdkZXBlbmRlbmN5JyApO1xuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRlcC5jb250cm9sbGVyICkge1xuXHRcdFx0bGV0ICRjb250cm9sbGVyID0gJGRlcC5jb250cm9sbGVyIFsgJGtleSBdLFxuXHRcdFx0XHQkY29uZGl0aW9uICA9ICRkZXAuY29uZGl0aW9uIFsgJGtleSBdLFxuXHRcdFx0XHQkdmFsdWUgICAgICA9ICRkZXAudmFsdWUgWyAka2V5IF0sXG5cdFx0XHRcdCRmaWVsZCAgICAgID0gJ1tkYXRhLWRlcGVuZC1pZD1cIicgKyAkY29udHJvbGxlciArICdcIl0nO1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZy5uZXN0YWJsZSApIHtcblx0XHRcdFx0bGV0ICRJTlBVVCA9IHRoaXMuY29uZmlnLnBhcmVudC5maW5kKCAnW2RhdGEtZGVwZW5kLWlkPScgKyAkY29udHJvbGxlciArICddJyApO1xuXHRcdFx0XHRpZiggJElOUFVULmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0JGZpZWxkID0gJ1tkYXRhLXdwb25pb24tanNpZD1cIicgKyAkd3Bvbmlvbi5maWVsZElEKCAkSU5QVVQgKSArICdcIl06aW5wdXQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmNyZWF0ZVJ1bGUoICRmaWVsZCwgJGNvbmRpdGlvbiwgJHZhbHVlICkgKTtcblx0XHRcdHRoaXMuc2V0X2NvbnR4dCggdGhpcy5jb250eHQuaW5jbHVkZSggdGhpcy5lbGVtZW50ICkgKTtcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ0RlcGVuZGVuY3knOiAkZGVwLCAnTmVzdGFibGUgRGVwZW5kZW5jeSc6IHRoaXMuY29uZmlnLm5lc3RhYmxlIH0gKTtcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRmaWQgICAgICAgICA9IHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1maWVsZC1qc2lkJyApLFxuXHRcdFx0JGlzX2xvYWRpbmcgID0gbnVsbCxcblx0XHRcdHdwb2ltZyAgICAgICA9ICggaW1nLCBjYWxsYmFjayApID0+IHtcblx0XHRcdFx0Y29uc3QgdGVzdERpbWVuc2lvbnMgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRcdGlmKCBpbWcubmF0dXJhbFdpZHRoICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggdGVzdERpbWVuc2lvbnMgKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA1ICk7XG5cdFx0XHR9O1xuXHRcdGxldCAkdG9vbHRpcF9rZXkgPSBmYWxzZTtcblx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJ3dwb25pb24taGVscCc7XG5cdFx0fSBlbHNlIGlmKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLXdyYXAtdG9vbHRpcCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cmFwX3Rvb2x0aXAnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAkZmlkICsgJ3Rvb2x0aXAnO1xuXHRcdH1cblxuXHRcdC8vbGV0ICR0b29sdGlwX2tleSA9ICggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkgPyAnZmllbGRfaGVscCcgOiAkZmlkICsgJ3Rvb2x0aXAnLFxuXHRcdGxldCAkYXJnID0gKCB0cnVlID09PSAkd3Bvbmlvbi52YWxpZF9qc29uKCAkZmlkICkgKSA/IEpTT04ucGFyc2UoICRmaWQgKSA6IHRoaXMub3B0aW9uKCAkdG9vbHRpcF9rZXksIGZhbHNlICk7XG5cblxuXHRcdGlmKCBmYWxzZSA9PT0gJGFyZyApIHtcblx0XHRcdGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHknICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweScgKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHktYXJncycgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH0gZWxzZSBpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICd0aXBweS1hcmdzJyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ3RpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggJGFyZyApIHtcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcblx0XHRcdGlmKCAkYXJnLmltYWdlICE9PSB1bmRlZmluZWQgJiYgJGFyZy5pbWFnZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdCRhcmcuaHRtbCAgICAgICAgICAgPSAnI3dwb3RwaW1nJztcblx0XHRcdFx0JGFyZy51cGRhdGVEdXJhdGlvbiA9IDIwMDA7XG5cdFx0XHRcdCRhcmcub25TaG93ICAgICAgICAgPSBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XG5cdFx0XHRcdFx0Y29uc3QgY29udGVudCA9IHRoaXMucXVlcnlTZWxlY3RvciggJy50aXBweS1jb250ZW50JyApO1xuXHRcdFx0XHRcdGlmKCAkaXNfbG9hZGluZyApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGlzX2xvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0ZmV0Y2goICRhcmcuaW1hZ2UgKS50aGVuKCByZXNwID0+IHJlc3AuYmxvYigpICkudGhlbiggYmxvYiA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB1cmwgICAgICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcblx0XHRcdFx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt1cmx9XCI+YDtcblx0XHRcdFx0XHRcdHdwb2ltZyggY29udGVudC5xdWVyeVNlbGVjdG9yKCAnaW1nJyApLCBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS51cGRhdGUgKTtcblx0XHRcdFx0XHRcdCRpc19sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0fSApLmNhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb250ZW50LmlubmVySFRNTCA9ICdMb2FkaW5nIGZhaWxlZCc7XG5cdFx0XHRcdFx0XHQkaXNfbG9hZGluZyAgICAgICA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5vbkhpZGRlbiAgICAgICA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnN0IGNvbnRlbnQgICAgID0gdGhpcy5xdWVyeVNlbGVjdG9yKCAnLnRpcHB5LWNvbnRlbnQnICk7XG5cdFx0XHRcdFx0Y29udGVudC5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5wb3BwZXJPcHRpb25zICA9IHsgbW9kaWZpZXJzOiB7IHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9LCBoaWRlOiB7IGVuYWJsZWQ6IGZhbHNlIH0gfSB9O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYXJnID0ge307XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50aXBweSggdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJHRvb2x0aXBfa2V5ICkgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkaW1hZ2UgPSAoIGlzX3VuZGVmaW5lZCggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApICkgKSA/IHRoaXMuZWxlbWVudC5hdHRyKCAnc3JjJyApIDogdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApO1xuXHRcdHN3YWwoIHtcblx0XHRcdGltYWdlVXJsOiAkaW1hZ2UsXG5cdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdGJhY2tkcm9wOiBgcmdiYSgwLDAsMCwwLjQ0KWBcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkLCByYW5kX21kNSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkbWNlX2VkaXRvciAgPSB0aW55TUNFUHJlSW5pdC5tY2VJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRxdWlja190YWdzICA9IHRpbnlNQ0VQcmVJbml0LnF0SW5pdFsgdGhpcy5vcHRpb24oICd3cGVkaXRvcl9pZCcgKSBdLFxuXHRcdFx0XHQkTkVXX0lEICAgICAgPSAnd3Bvbmlvbi13cC1lZGl0b3ItJyArIHJhbmRfbWQ1KCksXG5cdFx0XHRcdCR0ZXh0QXJlYSAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuY2xvbmUoKSxcblx0XHRcdFx0JGFjdHVhbF9JRCAgID0gJHRleHRBcmVhLmF0dHIoICdpZCcgKSxcblx0XHRcdFx0JGFjdHVhbF9odG1sID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKS5odG1sKCksXG5cdFx0XHRcdCRyZWdleCAgICAgICA9IG5ldyBSZWdFeHAoICRhY3R1YWxfSUQsIFwiZ1wiICk7XG5cdFx0XHQkYWN0dWFsX2h0bWwgICAgID0gJGFjdHVhbF9odG1sLnJlcGxhY2UoICRyZWdleCwgJE5FV19JRCApO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoICRhY3R1YWxfaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5wYXJlbnQoKS5hcHBlbmQoICR0ZXh0QXJlYSApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYTpub3QoIycgKyAkYWN0dWFsX0lEICsgJyknICkucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLmF0dHIoICdpZCcsICRORVdfSUQgKTtcblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRtY2VfZWRpdG9yICkgKSB7XG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcblx0XHRcdFx0dGlueW1jZS5pbml0KCAkbWNlX2VkaXRvciApO1xuXHRcdFx0XHR0aW55TUNFLmV4ZWNDb21tYW5kKCAnbWNlQWRkRWRpdG9yJywgZmFsc2UsICcjJyArICRORVdfSUQgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRxdWlja190YWdzICkgKSB7XG5cdFx0XHRcdCRxdWlja190YWdzLmlkID0gJE5FV19JRDtcblx0XHRcdFx0cXVpY2t0YWdzKCAkcXVpY2tfdGFncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgYXJyYXlfbWVyZ2UgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcjYnVsa19lZGl0JywgKCkgPT4ge1xuXHRcdFx0bGV0ICRmaW5hbF9hcmdzID0geyBwb3N0X2lkczogW10gfSxcblx0XHRcdFx0JGJ1bGtfZWRpdCAgPSAkKCAnI2J1bGstZWRpdCcgKTtcblxuXHRcdFx0JGJ1bGtfZWRpdC5maW5kKCAnI2J1bGstdGl0bGVzJyApLmNoaWxkcmVuKCkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzLnBvc3RfaWRzLnB1c2goICQoIHRoaXMgKS5hdHRyKCAnaWQnICkucmVwbGFjZSggL14odHRsZSkvaSwgJycgKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcud3Bvbmlvbi1xdWljay1lZGl0LWZpZWxkc2V0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkZmluYWxfYXJncyA9IGFycmF5X21lcmdlKCAkKCB0aGlzICkuc2VyaWFsaXplT2JqZWN0KCksICRmaW5hbF9hcmdzICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAnc2F2ZS1idWxrLWVkaXQnLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRhc3luYzogZmFsc2UsXG5cdFx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHRcdFx0ZGF0YTogJGZpbmFsX2FyZ3MsXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLm1lbnUoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICdoMi5hamF4LWNvbnRhaW5lciBidXR0b24nLCB0aGlzLnNhdmVfaGFuZGxlciApO1xuXHR9XG5cblxuXHRtZW51KCkge1xuXHRcdGxldCAkZWxlbSA9IHRoaXMuZWxlbWVudDtcblx0XHQkZWxlbS5vbiggJ2NsaWNrJywgJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSBhJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdkcm9wZG93bicgKSApIHtcblx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5pcyggJzp2aXNpYmxlJyApICkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSB1bCcgKS5zbGlkZVVwKCAnZmFzdCcgKTtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJGhyZWYgICAgICAgICAgID0gJHdwb25pb25faGVscGVyLnVybF9wYXJhbXMoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWhyZWYnICkgKSxcblx0XHRcdFx0XHQkcGFyZW50ICAgICAgICAgPSAnd3Bvbmlvbi10YWItJyArICRocmVmWyAncGFyZW50LWlkJyBdLFxuXHRcdFx0XHRcdCRzZWN0aW9uICAgICAgICA9ICggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgKSA/ICRwYXJlbnQgKyAnLScgKyAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gOiBmYWxzZSxcblx0XHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tcGFyZW50LXdyYXBzJyApLFxuXHRcdFx0XHRcdCRjdXJyZW50ICAgICAgICA9ICRlbGVtLmZpbmQoICdkaXYjJyArICRwYXJlbnQgKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdCRwYXJlbnRfYWN0aXZlcy5oaWRlKCk7XG5cblx0XHRcdFx0aWYoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICYmICRocmVmWyAncGFyZW50LWlkJyBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICcgZGl2IycgKyAkc2VjdGlvbiApLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRjdXJyZW50LnNob3coKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGEuYWN0aXZlICcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZSAnICk7XG5cdFx0XHRcdCQoIHRoaXMgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSA+IGxpID4gYScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhW2RhdGEtd3Bvbmlvbi1pZD1cIndwb25pb25fbWVudV8nICsgJGhyZWZbICdwYXJlbnQtaWQnIF0gKyAnXCJdJyApXG5cdFx0XHRcdFx0IC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXG5cdHNhdmVfaGFuZGxlciggZSApIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0aGlzICAgPSB0aGlzLFxuXHRcdFx0JHBhcmVudCA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0JGJhc2UgICA9ICRwYXJlbnQucGFyZW50KCkucGFyZW50KCksXG5cdFx0XHQkaGlkZGVuID0gJHBhcmVudC5maW5kKCAnZGl2Lndwb25pb24tbWV0YWJveC1zZWN1cmUtZGF0YScgKTtcblxuXHRcdCRiYXNlLmJsb2NrKCB7IG1lc3NhZ2U6IG51bGwsIG92ZXJsYXlDU1M6IHsgYmFja2dyb3VuZDogJyMwMDAnLCBvcGFjaXR5OiAwLjcgfSB9ICk7XG5cblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXHRcdGxldCAkZmllbGRzID0gJHBhcmVudC5wYXJlbnQoKS5maW5kKCAnOmlucHV0JyApO1xuXHRcdGxldCAkdmFsdWVzID0gJGZpZWxkcy5zZXJpYWxpemUoKTtcblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblxuXHRcdCR3cG9uaW9uLmFqYXgoICdzYXZlX21ldGFib3gnLCB7IGRhdGE6ICR2YWx1ZXMgfSwgZnVuY3Rpb24oIHJlcyApIHtcblx0XHRcdCRiYXNlLmh0bWwoIHJlcyApO1xuXHRcdFx0JGJhc2UudW5ibG9jaygpO1xuXHRcdFx0d3Bvbmlvbl9maWVsZCggJGJhc2UuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0JCggJ2Rpdi5wb3N0Ym94Lndwb25pb24tbWV0YWJveCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBXUE9uaW9uX01ldGFib3hfTW9kdWxlKCAkKCB0aGlzICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBXUE9uaW9uX1F1aWNrX0VkaXQgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdG1vZHVsZV9pbml0KCkge1xuXHRcdHRoaXMucG9zdF9pZCA9IHRoaXMuY29udHh0O1xuXHRcdGxldCAkaWQgICAgICA9ICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApICsgJ18nICsgdGhpcy5wb3N0X2lkO1xuXHRcdHRoaXMudmFsdWVzICA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGlkLCBmYWxzZSApO1xuXG5cdFx0aWYoIHRoaXMudmFsdWVzLmh0bWwgKSB7XG5cdFx0XHR0aGlzLnZhbHVlcy5odG1sID0galF1ZXJ5KCB0aGlzLnZhbHVlcy5odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuaHRtbCggdGhpcy52YWx1ZXMuaHRtbC5maW5kKCAnPiBkaXYnICkgKTtcblx0XHR9XG5cblx0XHR3cG9uaW9uX2ZpZWxkKCB0aGlzLmVsZW1lbnQgKS5yZWxvYWQoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgd3AgKSA9PiB7XG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRsZXQgJGxpc3QgPSAkKCAnI3RoZS1saXN0JyApO1xuXHRcdGlmKCAkbGlzdC5sZW5ndGggPiAwICkge1xuXHRcdFx0JGxpc3Qub24oICdjbGljaycsICcuZWRpdGlubGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgcG9zdF9pZCA9IGpRdWVyeSggdGhpcyApLmNsb3Nlc3QoICd0cicgKS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdHBvc3RfaWQgICAgID0gcG9zdF9pZC5yZXBsYWNlKCAncG9zdC0nLCAnJyApO1xuXHRcdFx0XHQkKCAndHIjZWRpdC0nICsgcG9zdF9pZCApLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bmV3IFdQT25pb25fUXVpY2tfRWRpdCggalF1ZXJ5KCB0aGlzICksIHBvc3RfaWQgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdwICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc193aW5kb3dfYXJnIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRvciBmcm9tICcuL2NvcmUvdmFsaWRhdGlvbic7XG5cbndpbmRvdy53cG9uaW9uX21ldGFib3hfbW9kdWxlID0gcmVxdWlyZSggJy4vbW9kdWxlcy9tZXRhYm94JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbl9idWxrX2VkaXQgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvYnVsay1lZGl0JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbl9xdWlja19lZGl0ICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvcXVpY2stZWRpdCcgKS5kZWZhdWx0O1xuLy93aW5kb3cud3Bvbmlvbl9jdXN0b21pemVyX21vZHVsZSA9IHJlcXVpcmUoICcuL21vZHVsZXMvY3VzdG9taXplcicgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2NvcmUnICkuZGVmYXVsdDtcbndpbmRvdy4kd3Bvbmlvbl9kZWJ1ZyAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9kZWJ1ZycgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uX2hlbHBlciAgICAgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKTtcbndpbmRvdy53cG9uaW9uX25ld19maWVsZCAgICAgID0gKCAkY2xhc3MgKSA9PiAoIGlzX3dpbmRvd19hcmcoICRjbGFzcyApICkgPyB3aW5kb3dbICRjbGFzcyBdIDogZmFsc2U7XG53aW5kb3cud3Bvbmlvbl9maWVsZCAgICAgICAgICA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyBXUE9uaW9uX0ZpZWxkKCAkZWxlbSwgJGNvbnR4dCApO1xud2luZG93Lndwb25pb25fbW9kYWwgICAgICAgICAgPSByZXF1aXJlKCAnLi4vdmVuZG9ycy9iYWNrYm9uZS1tb2RhbCcgKS5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9ICggKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgJCwgJHdwbyApID0+IHtcblx0bGV0ICR3cF9ob29rID0gd3AuaG9va3M7XG5cblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCAoKSA9PiB7XG5cdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9pbml0JyApO1xuXG5cdFx0d2luZG93Lndwb25pb25fZmllbGRzID0gJHdwX2hvb2suYXBwbHlGaWx0ZXJzKCAnd3Bvbmlvbl9maWVsZHNfZnVuY3Rpb25zJywge1xuXHRcdFx0dGV4dDogcmVxdWlyZSggJy4vZmllbGRzL3RleHQnICkuZGVmYXVsdCxcblx0XHRcdHRleHRhcmVhOiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dGFyZWEnICkuZGVmYXVsdCxcblx0XHRcdGJhY2tncm91bmQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrZ3JvdW5kJyApLmRlZmF1bHQsXG5cdFx0XHRpbWFnZV9zZWxlY3Q6IHJlcXVpcmUoICcuL2ZpZWxkcy9pbWFnZV9zZWxlY3QnICkuZGVmYXVsdCxcblx0XHRcdHN3aXRjaGVyOiByZXF1aXJlKCAnLi9maWVsZHMvc3dpdGNoZXInICkuZGVmYXVsdCxcblx0XHRcdGNvbG9yX3BhbGV0dGU6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9wYWxldHRlJyApLmRlZmF1bHQsXG5cdFx0XHRzZWxlY3Q6IHJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QnICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdDI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QyJyApLmRlZmF1bHQsXG5cdFx0XHRjaG9zZW46IHJlcXVpcmUoICcuL2ZpZWxkcy9jaG9zZW4nICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdGl6ZTogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdGl6ZScgKS5kZWZhdWx0LFxuXHRcdFx0aWNvbl9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9pY29uX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0Zm9udF9zZWxlY3RvcjogcmVxdWlyZSggJy4vZmllbGRzL2ZvbnRfc2VsZWN0b3InICkuZGVmYXVsdCxcblx0XHRcdGFjY29yZGlvbjogcmVxdWlyZSggJy4vZmllbGRzL2FjY29yZGlvbicgKS5kZWZhdWx0LFxuXHRcdFx0Z3JvdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9ncm91cCcgKS5kZWZhdWx0LFxuXHRcdFx0d3BfZWRpdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvd3BfZWRpdG9yJyApLmRlZmF1bHQsXG5cdFx0XHRyZWxvYWRfd3BfZWRpdG9yOiByZXF1aXJlKCAnLi9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3InICkuZGVmYXVsdCxcblx0XHRcdGZpZWxkc2V0OiByZXF1aXJlKCAnLi9maWVsZHMvZmllbGRzZXQnICkuZGVmYXVsdCxcblx0XHRcdGlucHV0bWFzazogcmVxdWlyZSggJy4vZmllbGRzL2lucHV0bWFzaycgKS5kZWZhdWx0LFxuXHRcdFx0d3BfbGlua3M6IHJlcXVpcmUoICcuL2ZpZWxkcy93cF9saW5rcycgKS5kZWZhdWx0LFxuXHRcdFx0Y2hlY2tib3hfcmFkaW86IHJlcXVpcmUoICcuL2ZpZWxkcy9jaGVja2JveF9yYWRpbycgKS5kZWZhdWx0LFxuXHRcdFx0a2V5dmFsdWVfcGFpcjogcmVxdWlyZSggJy4vZmllbGRzL2tleXZhbHVlX3BhaXInICkuZGVmYXVsdCxcblx0XHRcdGNvbG9yX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0ZGF0ZV9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9kYXRlX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0Z2FsbGVyeTogcmVxdWlyZSggJy4vZmllbGRzL2dhbGxlcnknICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3BvcHVwOiByZXF1aXJlKCAnLi9oZWxwZXJzL2ltYWdlX3BvcHVwJyApLmRlZmF1bHQsXG5cdFx0XHR1cGxvYWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy91cGxvYWQnICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3VwbG9hZDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3VwbG9hZCcgKS5kZWZhdWx0LFxuXHRcdFx0anF1ZXJ5X3RhYjogcmVxdWlyZSggJy4vZmllbGRzL2pxdWVyeV90YWInICkuZGVmYXVsdCxcblx0XHRcdGZpZWxkX3Rvb2x0aXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvZmllbGRfdG9vbHRpcCcgKS5kZWZhdWx0LFxuXHRcdFx0Y2xvbmVfZWxlbWVudDogcmVxdWlyZSggJy4vZmllbGRzL2Nsb25lX2VsZW1lbnQnICkuZGVmYXVsdCxcblx0XHRcdHNvcnRlcjogcmVxdWlyZSggJy4vZmllbGRzL3NvcnRlcicgKS5kZWZhdWx0LFxuXHRcdFx0Z29vZ2xlX21hcHM6IHJlcXVpcmUoICcuL2ZpZWxkcy9nb29nbGVfbWFwcycgKS5kZWZhdWx0LFxuXHRcdFx0dHlwb2dyYXBoeTogcmVxdWlyZSggJy4vZmllbGRzL3R5cG9ncmFwaHknICkuZGVmYXVsdCxcblx0XHRcdG9lbWJlZDogcmVxdWlyZSggJy4vZmllbGRzL29lbWJlZCcgKS5kZWZhdWx0LFxuXHRcdH0gKTtcblx0XHQkd3BvLnNldHRpbmdzX2FyZ3MgICAgPSAkd3BvLndpbmRvd0FyZ3MoICd3cG9uaW9uX2NvcmUnLCB7fSApO1xuXHRcdCR3cG8udGV4dCAgICAgICAgICAgICA9ICR3cG8ud2luZG93QXJncyggJ3dwb25pb25faWw4bicsIHt9ICk7XG5cdFx0JHdwby5kZWJ1Z19pbmZvICAgICAgID0gbnVsbDtcblx0XHQkd3BvLmZpZWxkX2RlYnVnX2luZm8gPSBudWxsO1xuXG5cdFx0aWYoICQoICcjd3BvdHBpbWcnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0JCggJ2JvZHknICkuYXBwZW5kKCAnPGRpdiBpZD1cIndwb3RwaW1nXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO21pbi13aWR0aDozMDBweDttaW4taGVpZ2h0OjQwMHB4O1wiPi4uPC9kaXY+JyApO1xuXHRcdH1cblxuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlID4gc3Ryb25nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcblx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LWRvd24nICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctcmlnaHQnICk7XG5cdFx0fSApO1xuXG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cblx0XHQvKipcblx0XHQgKiBUcmlnZ2VycyBIb29rIFdpdGggV2lkZ2V0cy5cblx0XHQgKi9cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnd2lkZ2V0LWFkZGVkIHdpZGdldC11cGRhdGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkd2lkZ2V0ICkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJHdpZGdldCApO1xuXHRcdFx0d3Bvbmlvbl9maWVsZCggJHdpZGdldCApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fdGhlbWVfaW5pdCcsICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZW5kZXJzIFZhbGlkYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdG5ldyBXUE9uaW9uX1ZhbGlkYXRvcigpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhbmRsZXMgRmllbGRzIGluaXQuXG5cdFx0XHQgKi9cblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJCggdGhpcyApICk7XG5cdFx0XHRcdHdwb25pb25fZmllbGQoICQoIHRoaXMgKSApLnJlbG9hZCgpO1xuXHRcdFx0fSApO1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXG5cdFx0JHdwby5sb2FkaW5nX3NjcmVlbiggJHdwb2ZfZGl2LCBmYWxzZSApO1xuXHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0JyApO1xuXHR9ICkgKTtcblx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2xvYWRlZCcgKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgd3AsIGpRdWVyeSwgJHdwb25pb24gKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9qcy9jb3JlL2NvcmUnO1xuXG5jb25zdCBXUE9uaW9uX1dQX01vZGFsID0gQmFja2JvbmUuVmlldy5leHRlbmQoIHtcblx0dGVtcGxhdGVzOiB7fSxcblxuXHRldmVudHM6IHtcblx0XHRcImNsaWNrIC5tZWRpYS1tb2RhbC1jbG9zZVwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tY2FuY2VsXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1va1wiOiBcInNhdmVNb2RhbFwiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLW1lbnUgYVwiOiBcImhhbmRsZV9sZWZ0X21lbnVfY2xpY2tcIixcblx0XHRcImNsaWNrIC5tZWRpYS1yb3V0ZXIgYVwiOiBcImhhbmRsZV90YWJfY2xpY2tcIixcblx0fSxcblxuXHRhY3RpdmVfcGFnZTogbnVsbCxcblxuXHRhY3RpdmVfc2VjdGlvbjogbnVsbCxcblxuXHRpbml0aWFsaXplOiAoIG9wdGlvbnMgKSA9PiB7XG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IGZhbHNlLFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHRcdGh0bWw6IGZhbHNlLFxuXHRcdH0sIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMubGVmdF9tZW51ID0gb3B0aW9uc1sgJ2xlZnRfbWVudScgXTtcblx0XHR0aGlzLmh0bWwgICAgICA9IG9wdGlvbnNbICdodG1sJyBdO1xuXHRcdHRoaXMuaGlkZV9tZW51ID0gb3B0aW9uc1sgJ2hpZGVfbWVudScgXTtcblxuXHRcdF8uYmluZEFsbCggdGhpcywgJ3JlbmRlcicsICdwcmVzZXJ2ZUZvY3VzJywgJ2Nsb3NlTW9kYWwnLCAnc2F2ZU1vZGFsJywgJ2RvTm90aGluZycgKTtcblx0XHR0aGlzLmluaXRfdGVtcGxhdGVzKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblxuXHRpbml0X3RlbXBsYXRlczogKCkgPT4ge1xuXHRcdGxldCAkbSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdtb2RhbCcgKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0gID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnZnJhbWUtbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3JvdXRlci1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy53aW5kb3cgICAgICAgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnaHRtbCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdwYWdlX2NvbnRlbnQnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnc2VjdGlvbl9jb250ZW50JyBdICk7XG5cdH0sXG5cblx0cmVuZGVyOiAoKSA9PiB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdHRoaXMuJGVsLmF0dHIoICd0YWJpbmRleCcsICcwJyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMud2luZG93KCkgKTtcblxuXHRcdGlmKCB0aGlzLmxlZnRfbWVudSApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5sZWZ0X21lbnUsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0oIHtcblx0XHRcdFx0XHR1cmw6IGtleSxcblx0XHRcdFx0XHRuYW1lOiB2YWx1ZSxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRpZiggdGhpcy5odG1sICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmh0bWwsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0bGV0ICRjb250ZW50ID0gJCggdGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50KCB7XG5cdFx0XHRcdFx0aWQ6IGtleSxcblx0XHRcdFx0XHR0aXRsZTogdmFsdWVbICd0aXRsZScgXSxcblx0XHRcdFx0XHRodG1sOiB2YWx1ZVsgJ2h0bWwnIF0sXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzZWN0aW9ucycgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdF8uZWFjaCggdmFsdWVbICdzZWN0aW9ucycgXSwgKCB2YWwsIGsgKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJF9jb250ZW50ID0galF1ZXJ5KCB0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRcdFx0XHRpZDoga2V5ICsgXCJfXCIgKyBrLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiB2YWxbICd0aXRsZScgXSxcblx0XHRcdFx0XHRcdFx0XHRodG1sOiB2YWxbICdodG1sJyBdLFxuXHRcdFx0XHRcdFx0XHR9ICkgKSxcblx0XHRcdFx0XHRcdFx0JF9tZW51ICAgID0gdGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSggeyB1cmw6IGssIG5hbWU6IHZhbFsgJ3RpdGxlJyBdIH0gKTtcblxuXHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbFsgJ3NpZGViYXInIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLWNvbnRlbnQnICkuYXBwZW5kKCAkX2NvbnRlbnQgKTtcblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtcm91dGVyJyApLmFwcGVuZCggJF9tZW51ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzaWRlYmFyJyBdICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbHVlWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0JHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0aGlzLiQoICcubWVkaWEtbWVudSBhOmZpcnN0LWNoaWxkJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IC53cG9uaW9uLW1vZGFsLWNvbnRlbnQ6bm90KC5oaWRkZW4pIC5tZWRpYS1mcmFtZS1yb3V0ZXIgYTpmaXJzdC1jaGlsZCcgKVxuXHRcdFx0LnRyaWdnZXIoICdjbGljaycgKTtcblxuXHRcdGlmKCB0aGlzLmhpZGVfbWVudSA9PT0gdHJ1ZSApIHtcblx0XHRcdHRoaXMuJCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtbWVudScgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub24oIFwiZm9jdXNpblwiLCB0aGlzLnByZXNlcnZlRm9jdXMgKTtcblx0XHRqUXVlcnkoICdib2R5JyApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSApLmFwcGVuZCggdGhpcy4kZWwgKTtcblx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHR9LFxuXG5cdGhhbmRsZV9sZWZ0X21lbnVfY2xpY2s6ICggZSApID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0YXJnZXQgPSAkKCBlLnRhcmdldCApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1tZW51IGEuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0bGV0ICRzaG93X3RhcmdldCA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2IycgKyAkdGFyZ2V0LmF0dHIoICdocmVmJyApICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0JHNob3dfdGFyZ2V0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuXG5cdFx0aWYoICRzaG93X3RhcmdldC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5oYXNDbGFzcyggJ2hpZGRlbicgKSApIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkucmVtb3ZlQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9XG5cdFx0dGhpcy5hY3RpdmVfcGFnZSAgICA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9IG51bGw7XG5cdH0sXG5cblx0aGFuZGxlX3RhYl9jbGljazogKCBlICkgPT4ge1xuXHRcdGxldCAkdGFyZ2V0ICAgICAgICAgPSAkKCBlLnRhcmdldCApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkcGFnZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUtbWVudSBhLmFjdGl2ZScgKS5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJGJhc2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKTtcblxuXG5cdFx0JHRhcmdldC5wYXJlbnQoKS5maW5kKCAnLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCRiYXNlLmZpbmQoICcud3Bvbmlvbi1zZWN0aW9uLW1vZGFsLWNvbnRlbnQnICkuaGlkZSgpO1xuXHRcdCRiYXNlLmZpbmQoICcjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKyAnXycgKyB0aGlzLmFjdGl2ZV9zZWN0aW9uICkuc2hvdygpO1xuXHR9LFxuXG5cdHByZXNlcnZlRm9jdXM6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRpZiggdGhpcy4kZWxbIDAgXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsLmhhcyggZS50YXJnZXQgKS5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHRcdH1cblx0fSxcblxuXHRjbG9zZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vZmYoIFwiZm9jdXNpblwiICk7XG5cdFx0alF1ZXJ5KCBcImJvZHlcIiApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiYXV0b1wiIH0gKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9LFxuXG5cdHNhdmVNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCggZSApO1xuXHR9LFxuXG5cdGRvTm90aGluZzogZnVuY3Rpb24oIGUgKSB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRvcHRpb25zID0ge30gKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGlkOiBmYWxzZSxcblx0XHRcdGRhdGE6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1tb2RhbCcsXG5cdFx0XHRtb2RhbDoge30sXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdH0sICRvcHRpb25zICk7XG5cblx0XHRuZXcgV1BPbmlvbl9XUF9Nb2RhbCggXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogdGhpcy5nZXRfbGVmdF9tZW51KCksXG5cdFx0XHRodG1sOiB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLFxuXHRcdFx0aGlkZV9tZW51OiB0aGlzLm9wdGlvbnNbICdoaWRlX21lbnUnIF0sXG5cdFx0fSwgdGhpcy5vcHRpb25zWyAnbW9kYWwnIF0gKSApO1xuXHR9XG5cblx0Z2V0X2xlZnRfbWVudSgpIHtcblx0XHRsZXQgJHJldHVybiA9IGZhbHNlO1xuXHRcdGlmKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdICkge1xuXHRcdFx0JHJldHVybiA9IHt9O1xuXG5cdFx0XHRfLmVhY2goIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sICggJGRhdGEsICRrZXkgKSA9PiB7XG5cdFx0XHRcdCRyZXR1cm5bICRrZXkgXSA9ICggdHlwZW9mICRkYXRhWyAnbWVudV90aXRsZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/ICRkYXRhWyAnbWVudV90aXRsZScgXSA6ICRkYXRhWyAndGl0bGUnIF07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==