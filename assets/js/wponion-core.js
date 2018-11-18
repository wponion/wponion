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

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

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

			_core2.default.ajax('save-bulk-edit', {
				method: 'POST',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvYXJyYXkvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9pbmZvL2luaV9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2ludHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfYm9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC94bWwvdXRmOF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sX2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9fd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Nsb25lX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jb3B5X3RvX2NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGV2aWNlX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGlmZl9kYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19hZnRlcl9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2JlZm9yZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19zYW1lX2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdGFiX2ZvY3VzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3dpbmRvd19hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvb2tnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9waXBlX2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9wbGFpbl9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcXVlcnlfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3JhbmRfbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3Njcm9sbF9wb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3RvX3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90aW1lX3Rha2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90b19qc19mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3VybF9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdmFsaWRhdGVTaW5nbGVKU0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvd2luZG93X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93cmFwX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZGF0ZV9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9maWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZvbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ29vZ2xlX21hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ljb25fcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2Vfc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2VfdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW5wdXRtYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0aXplLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9maWVsZF90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2ltYWdlX3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvYnVsay1lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21ldGFib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvcXVpY2stZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3JzL2JhY2tib25lLW1vZGFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIl0sIm5hbWVzIjpbIkpTX1BhcnNlX0FyZ3MiLCIkYXJncyIsIiRkZWZhdWx0cyIsIiRpc19uZXN0ZWQiLCJhcmdzIiwiZGVmYXVsdHMiLCJuZXN0ZWQiLCJwYXJzZSIsIiRfa2V5IiwiJGlzX2RlZXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXlfbWVyZ2UiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImFyZ2wiLCJsZW5ndGgiLCJhcmciLCJyZXRPYmoiLCJrIiwiYXJnaWwiLCJqIiwiaSIsImN0IiwidG9TdHIiLCJPYmplY3QiLCJ0b1N0cmluZyIsInJldEFyciIsImNvbmNhdCIsImhhc093blByb3BlcnR5IiwicGFyc2VJbnQiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsImFycmF5X21lcmdlX3JlY3Vyc2l2ZSIsImFycjEiLCJhcnIyIiwiYXJyYXlNZXJnZSIsInJlcXVpcmUiLCJpZHgiLCJwdXNoIiwiYXJyYXlfdmFsdWVzIiwiaW5wdXQiLCJ0bXBBcnIiLCJrZXkiLCJjb3VudCIsIm1peGVkVmFyIiwibW9kZSIsImNudCIsImluX2FycmF5IiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcmdTdHJpY3QiLCJzdHJpY3QiLCJtaWNyb3RpbWUiLCJnZXRBc0Zsb2F0IiwicyIsIm5vdyIsInBlcmZvcm1hbmNlIiwidGltaW5nIiwibmF2aWdhdGlvblN0YXJ0IiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lIiwiZmxvb3IiLCJjYWxsX3VzZXJfZnVuYyIsImNiIiwicGFyYW1ldGVycyIsImNhbGxVc2VyRnVuY0FycmF5IiwiY2FsbF91c2VyX2Z1bmNfYXJyYXkiLCIkZ2xvYmFsIiwid2luZG93IiwiZ2xvYmFsIiwiZnVuYyIsInNjb3BlIiwidmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4iLCJtYXRjaCIsIkZ1bmN0aW9uIiwiZXZhbCIsIkVycm9yIiwiYXBwbHkiLCJmdW5jdGlvbl9leGlzdHMiLCJmdW5jTmFtZSIsImluaV9nZXQiLCJ2YXJuYW1lIiwiJGxvY3V0dXMiLCJwaHAiLCJpbmkiLCJsb2NhbF92YWx1ZSIsInVuZGVmaW5lZCIsImV4cGxvZGUiLCJkZWxpbWl0ZXIiLCJzdHJpbmciLCJsaW1pdCIsInNwbGl0Iiwiam9pbiIsInNwbGljZSIsImltcGxvZGUiLCJnbHVlIiwicGllY2VzIiwicmV0VmFsIiwidEdsdWUiLCJtZDUiLCJzdHIiLCJoYXNoIiwiY3J5cHRvIiwibWQ1c3VtIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsImUiLCJ1dGY4RW5jb2RlIiwieGwiLCJfcm90YXRlTGVmdCIsImxWYWx1ZSIsImlTaGlmdEJpdHMiLCJfYWRkVW5zaWduZWQiLCJsWCIsImxZIiwibFg0IiwibFk0IiwibFg4IiwibFk4IiwibFJlc3VsdCIsIl9GIiwieCIsInkiLCJ6IiwiX0ciLCJfSCIsIl9JIiwiX0ZGIiwiYSIsImIiLCJjIiwiZCIsImFjIiwiX0dHIiwiX0hIIiwiX0lJIiwiX2NvbnZlcnRUb1dvcmRBcnJheSIsImxXb3JkQ291bnQiLCJsTWVzc2FnZUxlbmd0aCIsImxOdW1iZXJPZldvcmRzVGVtcDEiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAyIiwibE51bWJlck9mV29yZHMiLCJsV29yZEFycmF5IiwibEJ5dGVQb3NpdGlvbiIsImxCeXRlQ291bnQiLCJjaGFyQ29kZUF0IiwiX3dvcmRUb0hleCIsIndvcmRUb0hleFZhbHVlIiwid29yZFRvSGV4VmFsdWVUZW1wIiwibEJ5dGUiLCJsQ291bnQiLCJzdWJzdHIiLCJBQSIsIkJCIiwiQ0MiLCJERCIsIlMxMSIsIlMxMiIsIlMxMyIsIlMxNCIsIlMyMSIsIlMyMiIsIlMyMyIsIlMyNCIsIlMzMSIsIlMzMiIsIlMzMyIsIlMzNCIsIlM0MSIsIlM0MiIsIlM0MyIsIlM0NCIsInRlbXAiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlX3N0ciIsImFycmF5Iiwic3RyQXJyIiwiU3RyaW5nIiwicmVwbGFjZSIsInNhbCIsInAiLCJsYXN0T2JqIiwiY2hyIiwidG1wIiwidmFsdWUiLCJwb3N0TGVmdEJyYWNrZXRQb3MiLCJrZXlzIiwia2V5c0xlbiIsIl9maXhTdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGFyQXQiLCJpbmRleE9mIiwic3RyX3JlcGxhY2UiLCJzZWFyY2giLCJzdWJqZWN0IiwiY291bnRPYmoiLCJyZXBsIiwic2wiLCJmbCIsImYiLCJyIiwicmEiLCJzYSIsInN0cnRvbG93ZXIiLCJzdHJ0b3VwcGVyIiwidG9VcHBlckNhc2UiLCJiYXNlNjRfZGVjb2RlIiwiZW5jb2RlZERhdGEiLCJkZWNvZGVVVEY4c3RyaW5nIiwibWFwIiwiYXRvYiIsIkJ1ZmZlciIsImI2NCIsIm8xIiwibzIiLCJvMyIsImgxIiwiaDIiLCJoMyIsImg0IiwiYml0cyIsImRlYyIsImZyb21DaGFyQ29kZSIsImJhc2U2NF9lbmNvZGUiLCJzdHJpbmdUb0VuY29kZSIsImVuY29kZVVURjhzdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b1NvbGlkQnl0ZXMiLCJwMSIsImJ0b2EiLCJlbmMiLCJib29sdmFsIiwiaXNBcnJheSIsImVtcHR5IiwidW5kZWYiLCJsZW4iLCJlbXB0eVZhbHVlcyIsImZsb2F0dmFsIiwicGFyc2VGbG9hdCIsImludHZhbCIsImJhc2UiLCJ0eXBlIiwiaXNOYU4iLCJpc0Zpbml0ZSIsImNlaWwiLCJpc19hcnJheSIsIl9nZXRGdW5jTmFtZSIsImZuIiwibmFtZSIsImV4ZWMiLCJfaXNBcnJheSIsImluaVZhbCIsImFzU3RyaW5nIiwiYXNGdW5jIiwiaXNfYm9vbCIsImlzX2NhbGxhYmxlIiwic3ludGF4T25seSIsImNhbGxhYmxlTmFtZSIsIm1ldGhvZCIsInZhbGlkRnVuY3Rpb25OYW1lIiwiZ2V0RnVuY05hbWUiLCJpc19mbG9hdCIsImlzX2ludCIsImlzX251bGwiLCJpc19udW1lcmljIiwid2hpdGVzcGFjZSIsImlzX29iamVjdCIsImlzX3NjYWxhciIsInRlc3QiLCJpc19zdHJpbmciLCJpc3NldCIsImwiLCJ1dGY4X2VuY29kZSIsImFyZ1N0cmluZyIsInV0ZnRleHQiLCJzdGFydCIsImVuZCIsInN0cmluZ2wiLCJuIiwiYzEiLCJSYW5nZUVycm9yIiwiYzIiLCJhcnIiLCJsaXN0SUQiLCJ0YWciLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIml0ZW0iLCIkZGF0YSIsInJldHVybl9odG1sIiwiSSIsIksiLCIkdmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiJGFycmF5IiwiJGtleSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdGVkIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJzZWxlY3RvciIsInN0ZXAiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJfc3RlcCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWJzIiwiaXNOdW1iZXJpYyIsInZhbCIsImNoZWNrUHgiLCJjaGVja1BjdCIsImNoZWNrRW0iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYXRlSW5pdGlhbCIsImRhdGVGaW5hbCIsIm1zIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIm1pbGxpc2Vjb25kIiwiZW50cmllcyIsImZpbHRlciIsImRhdGVBIiwiZGF0ZUIiLCIkZWxlbSIsImpRdWVyeSIsInRvSVNPU3RyaW5nIiwiaGlkZGVuIiwiJE9LUyIsInByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWUiLCJwcm9wZXJ0eSIsInNoaWZ0IiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJkYXRhIiwiY3JlYXRlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwibG9jYXRpb24iLCJyYW5kb20iLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJjYWxsYmFjayIsInRpdGxlIiwidGltZUVuZCIsIiRhcmdzX2tleSIsIiRjb250ZW50c19rZXkiLCJ1cmwiLCJyZWR1Y2UiLCJ2IiwiJHN0cmluZyIsIiRjb250ZW50cyIsIiRfayIsIldQT25pb24iLCIkdHlwZSIsIndwb25pb25fZmllbGRzIiwiYXR0ciIsIiR3aGVyZV90b19maW5kIiwiJGlkIiwiZmllbGRJRCIsImZpbmQiLCIkdmFyX2lkIiwiJGRlZmF1bHQiLCJpc0ZpZWxkIiwid2luZG93QXJncyIsInRleHQiLCIkaXNfc2hvdyIsImZhZGVJbiIsImZhZGVPdXQiLCIkaGFuZGxlIiwiJGpzb24iLCJkZWJ1Z19pbmZvIiwiJGRlZmluZWRfdmFycyIsIm9uIiwicHJldmVudERlZmF1bHQiLCJzd2FsIiwidHh0IiwiaHRtbCIsInNob3dDb25maXJtQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJzaG93Q2xvc2VCdXR0b24iLCJhbmltYXRpb24iLCJ3aWR0aCIsIm9uQmVmb3JlT3BlbiIsImVuYWJsZUxvYWRpbmciLCJvbk9wZW4iLCJqc29uVmlldyIsImRpc2FibGVMb2FkaW5nIiwidGhlbiIsInJlc3VsdCIsInNldHRpbmdzX2FyZ3MiLCJvcHRpb24iLCJpc19kZWJ1ZyIsImZpZWxkX2RlYnVnX2luZm8iLCIkdmFycyIsIiR1dHh0IiwiJG10eHQiLCIkYWN0aW9uIiwiJG9uU3VjY2VzcyIsIiRvbkVycm9yIiwiJG9uQWx3YXlzIiwib25TdWNjZXNzIiwib25BbHdheXMiLCJvbkVycm9yIiwiJGFqYXgiLCJhamF4IiwiZG9uZSIsInJlcyIsImZhaWwiLCJhbHdheXMiLCJjb21waWxlZCIsIm9wdGlvbnMiLCJldmFsdWF0ZSIsImludGVycG9sYXRlIiwiZXNjYXBlIiwidmFyaWFibGUiLCJfIiwidGVtcGxhdGUiLCIkZWxlbWVudCIsInBhcmFtIiwibmVzdGFibGUiLCJwYXJlbnQiLCIkdGhpcyIsIiRlbCIsImluaXQiLCJydWxlc2V0IiwiZGVwcyIsImNyZWF0ZVJ1bGVzZXQiLCJkZXBSb290IiwiZW5hYmxlIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImFkZENsYXNzIiwiY2hlY2tUYXJnZXRzIiwiaW5zdGFuY2UiLCJlYWNoIiwiV1BPbmlvbl9EZXBlbmRlbmN5IiwiaXNfanF1ZXJ5IiwiaXNfdW5kZWZpbmVkIiwiJHNlbGVjdG9yIiwiJGNvbnRleHQiLCIkY29uZmlnIiwic2V0X2FyZ3MiLCJmaWVsZF9kZWJ1ZyIsImNvbmZpZyIsImpzX2Vycm9yX2hhbmRsZXIiLCJqc192YWxpZGF0b3IiLCJlcnIiLCJlcnJvciIsImFwcGVuZFRvIiwiZWxlbWVudCIsImpzX2Vycm9yIiwianNfdmFsaWRhdGVfZWxlbSIsInJ1bGVzIiwiJGFyZyIsIiR3cG9uaW9uIiwianNfZnVuYyIsIiRleGlzdHMiLCIkd3Bvbmlvbl9kZWJ1ZyIsImdldCIsImlkIiwiYWRkIiwiJGluZm8iLCIkYXJyIiwiRmllbGQiLCJNb2R1bGUiLCJVbmlxdWUiLCIkZm91bmQiLCJoYXNDbGFzcyIsIiRJRCIsInRpcHB5IiwiYXJyb3ciLCJhcnJvd1R5cGUiLCJwbGFjZW1lbnQiLCJ0aGVtZSIsIiRkIiwiJG5vdGljZV90eHQiLCJfYXJncyIsIiRhamF4X2tleSIsInBsdWdpbl9pZCIsIiRfaW5zdGFuY2VzIiwiJGNsYXNzIiwiZ2V0X2ZpZWxkX2NsYXNzIiwid3AiLCJob29rcyIsImFkZEFjdGlvbiIsImluaXRfZmllbGQiLCJXUE9uaW9uX01vZHVsZSIsInNldF9lbGVtZW50Iiwic2V0X2NvbnR4dCIsIm1vZHVsZV9pbml0IiwiZWxlbSIsIiRjb250eHQiLCJjb250ZXh0IiwiV1BPbmlvbl9WYWxpZGF0b3IiLCJmb3JtIiwiZ2V0X2Zvcm0iLCJpbnZhbGlkSGFuZGxlciIsInNpYmxpbmdzIiwicmVtb3ZlIiwiYmVmb3JlIiwiaWdub3JlIiwiZXJyb3JQbGFjZW1lbnQiLCJ0cmlnZ2VyIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsInZhbGlkYXRlIiwiYWNjb3JkaW9uIiwiaGVhZGVyIiwiY29sbGFwc2libGUiLCJhbmltYXRlIiwiaGVpZ2h0U3R5bGUiLCJhY3RpdmUiLCJpY29ucyIsIklEdG9FbGVtZW50IiwiV1BPbmlvbl9GaWVsZCIsIiRpbnB1dHMiLCJyZW1vdmVBdHRyIiwicHJvcCIsImNob3NlbiIsImhhbmRsZV9hcmdzIiwiJGNsb25lX3dyYXAiLCIkYWRkX2J0biIsIiRsaW1pdCIsIiRlcm9yX21zZyIsImVycm9yX21zZyIsIiRzb3J0Iiwic29ydCIsIml0ZW1zIiwiaGFuZGxlIiwicGxhY2Vob2xkZXIiLCJldmVudCIsInVpIiwiY3NzIiwic3RvcCIsIldQT25pb25DbG9uZXIiLCJhZGRfYnRuIiwiY2xvbmVfZWxlbSIsInJlbW92ZV9idG4iLCJ0ZW1wbGF0ZUFmdGVyUmVuZGVyIiwiJGUiLCJ3cG9uaW9uX2ZpZWxkIiwicmVsb2FkIiwic29ydGFibGUiLCJvbkxpbWl0UmVhY2hlZCIsIiRodG1sIiwicHJlcGVuZCIsIiRfX0UiLCJzZXRUaW1lb3V0Iiwic2hvd19hbmltYXRpb24iLCJhbmltYXRpb25zIiwiaGlkZV9hbmltYXRpb24iLCJ3cENvbG9yUGlja2VyIiwiJHNldHRpbmdzIiwiJHZpZXciLCJhcHBlbmQiLCJwbHVnaW5zIiwicmFuZ2VQbHVnaW4iLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsImN1cnJlbnRUYXJnZXQiLCJ3ZWJzYWZlIiwiZm9udHMiLCJidWlsZF9vcHRpb25zIiwidmFyaWFudHMiLCJnb29nbGVfZm9udHMiLCIkdmFyaWFudCIsIiRodG1sX3RlbXAiLCIkaW5wdXQiLCIkcHJldmlldyIsIndwX21lZGlhX2ZyYW1lIiwiJGFkZCIsIiRlZGl0IiwiJGNsZWFyIiwiJG1hbmFnZSIsImlkcyIsIndoYXQiLCJzdGF0ZSIsIm1lZGlhIiwiZ2FsbGVyeSIsImxpYnJhcnkiLCJmcmFtZSIsIm11bHRpcGxlIiwib3BlbiIsImVkaXQiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsInNlbGVjdGVkSWRzIiwibW9kZWxzIiwiYXR0YWNobWVudCIsInRvSlNPTiIsInNpemVzIiwidGh1bWIiLCJ0aHVtYm5haWwiLCIkdG1wIiwidGFyZ2V0IiwiJHBhcmVudCIsIiRpbWFnZV9pZCIsIiRrIiwiJHYiLCJjdXJzb3IiLCJzY3JvbGxTZW5zaXRpdml0eSIsImZvcmNlUGxhY2Vob2xkZXJTaXplIiwiaGVscGVyIiwib3BhY2l0eSIsIiRpdGVtIiwiaGVpZ2h0IiwiJG1hcCIsImRldGFpbHMiLCJkZXRhaWxzQXR0cmlidXRlIiwiJF9pbnN0YW5jZSIsImdlb2NvbXBsZXRlIiwiYmluZCIsImxhdExuZyIsImdlb2NvZGVyIiwiZ29vZ2xlIiwibWFwcyIsIkdlb2NvZGVyIiwiZ2VvY29kZSIsImxhdCIsImxuZyIsIiRncm91cF93cmFwIiwiJGVycm9yX21zZyIsImNsaWNrIiwib25SZW1vdmUiLCJzZXR0aW5ncyIsIiRfdGhpcyIsIiRyZW1vdmVfYnRuIiwiJHdvcmsiLCJlbGVtcyIsInBvcHVwIiwiZWxtIiwiaW5pdF90b29sdGlwIiwicG9wdXBfdG9vbHRpcCIsIiR0cCIsIiRlbG0iLCIkaW5zdGFuY2UiLCIkaGVpZ2h0IiwiJGljb24iLCJjbG9zZU1vZGFsIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiJHJlcyIsInN1Y2Nlc3MiLCJyZXNldFZhbGlkYXRpb25NZXNzYWdlIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsIiRwb3B1cCIsImFsbG93T3V0c2lkZUNsaWNrIiwiY3VzdG9tQ2xhc3MiLCIkcG9wdXBfZWxlbSIsIiRwcmV2aWV3X2FkZCIsIm1lZGlhX2luc3RhbmNlIiwiaG9vayIsImRvQWN0aW9uIiwiZmlyc3QiLCJhdHRyaWJ1dGVzIiwiaW5wdXRtYXNrIiwiJHRoaXNfZWxlbSIsIiR0YWIiLCJnbG9iYWxfdmFsaWRhdGUiLCJhZnRlciIsImVxIiwiaW1hZ2UiLCJzaG93X3ByZXZpZXciLCJzZWxlY3QyIiwic2VsZWN0aXplIiwiJGVuYWJsZWQiLCIkZGlzYWJsZWQiLCJjb25uZWN0V2l0aCIsImZvbnRfd2VpZ2h0X3N0eWxlIiwiJGZvbnRfZmllbGQiLCIkZm9udCIsIiRmb250X3dlaWdodF9zdHlsZSIsImZvbnRfc3R5bGUiLCIkdGFnIiwiJGNvbG9yIiwiJGFsaWduIiwiJGZvbnRTaXplIiwiJGxpbmVIZWlnaHQiLCIkYmFja1VQRm9udCIsIiRkaXJlY3Rpb24iLCIkbGV0dGVyU3BhY2luZyIsImhyZWYiLCJ3ZWlnaHQiLCIkX2F0dHJzIiwiJHRleHQiLCIkd2VpZ2h0X3ZhbCIsIiRzdHlsZV92YWwiLCJmcmFtZV90aXRsZSIsInVwbG9hZF90eXBlIiwiYnV0dG9uIiwiaW5zZXJ0X3RpdGxlIiwiJHRleHRhcmVhIiwid3BMaW5rIiwiJGRlcCIsImNvbnRyb2xsZXIiLCIkY29udHJvbGxlciIsIiRjb25kaXRpb24iLCJjb25kaXRpb24iLCIkZmllbGQiLCIkSU5QVVQiLCJjb250eHQiLCJjcmVhdGVSdWxlIiwiaW5jbHVkZSIsIiRmaWQiLCIkaXNfbG9hZGluZyIsIndwb2ltZyIsImltZyIsInRlc3REaW1lbnNpb25zIiwibmF0dXJhbFdpZHRoIiwiJHRvb2x0aXBfa2V5IiwidmFsaWRfanNvbiIsInVwZGF0ZUR1cmF0aW9uIiwib25TaG93IiwiY29udGVudCIsImZldGNoIiwicmVzcCIsImJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwb3BwZXJJbnN0YW5jZSIsImNhdGNoIiwib25IaWRkZW4iLCJwb3BwZXJPcHRpb25zIiwibW9kaWZpZXJzIiwicHJldmVudE92ZXJmbG93IiwiJGltYWdlIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3AiLCIkbWNlX2VkaXRvciIsInRpbnlNQ0VQcmVJbml0IiwibWNlSW5pdCIsIiRxdWlja190YWdzIiwicXRJbml0IiwiJE5FV19JRCIsIiR0ZXh0QXJlYSIsImNsb25lIiwiJGFjdHVhbF9JRCIsIiRhY3R1YWxfaHRtbCIsIiRyZWdleCIsInRpbnltY2UiLCJ0aW55TUNFIiwicXVpY2t0YWdzIiwiJCIsIiRmaW5hbF9hcmdzIiwicG9zdF9pZHMiLCIkYnVsa19lZGl0IiwiY2hpbGRyZW4iLCJzZXJpYWxpemVPYmplY3QiLCJXUE9uaW9uX01ldGFib3hfTW9kdWxlIiwibWVudSIsInNhdmVfaGFuZGxlciIsIm5leHQiLCJpcyIsInNsaWRlVG9nZ2xlIiwic2xpZGVVcCIsIiRocmVmIiwiJHdwb25pb25faGVscGVyIiwidXJsX3BhcmFtcyIsIiRzZWN0aW9uIiwiJHBhcmVudF9hY3RpdmVzIiwiJGN1cnJlbnQiLCIkYmFzZSIsIiRoaWRkZW4iLCJibG9jayIsIm1lc3NhZ2UiLCJvdmVybGF5Q1NTIiwiJGZpZWxkcyIsIiR2YWx1ZXMiLCJzZXJpYWxpemUiLCJ1bmJsb2NrIiwiV1BPbmlvbl9RdWlja19FZGl0IiwicG9zdF9pZCIsInZhbHVlcyIsImZpZWxkQXJncyIsIiRsaXN0IiwiY2xvc2VzdCIsIndwb25pb25fbWV0YWJveF9tb2R1bGUiLCJkZWZhdWx0Iiwid3Bvbmlvbl9idWxrX2VkaXQiLCJ3cG9uaW9uX3F1aWNrX2VkaXQiLCJ3cG9uaW9uX25ld19maWVsZCIsIndwb25pb25fbW9kYWwiLCIkd3BvIiwiJHdwX2hvb2siLCJhcHBseUZpbHRlcnMiLCJ0ZXh0YXJlYSIsImltYWdlX3NlbGVjdCIsInN3aXRjaGVyIiwiY29sb3JfcGFsZXR0ZSIsImljb25fcGlja2VyIiwiZm9udF9zZWxlY3RvciIsImdyb3VwIiwid3BfZWRpdG9yIiwicmVsb2FkX3dwX2VkaXRvciIsImZpZWxkc2V0Iiwid3BfbGlua3MiLCJjaGVja2JveF9yYWRpbyIsImtleXZhbHVlX3BhaXIiLCJjb2xvcl9waWNrZXIiLCJkYXRlX3BpY2tlciIsImltYWdlX3BvcHVwIiwidXBsb2FkIiwiaW1hZ2VfdXBsb2FkIiwianF1ZXJ5X3RhYiIsImZpZWxkX3Rvb2x0aXAiLCJjbG9uZV9lbGVtZW50Iiwic29ydGVyIiwiZ29vZ2xlX21hcHMiLCJ0eXBvZ3JhcGh5Iiwib2VtYmVkIiwidG9nZ2xlQ2xhc3MiLCIkd3BvZl9kaXYiLCIkd2lkZ2V0IiwibG9hZGluZ19zY3JlZW4iLCJXUE9uaW9uX1dQX01vZGFsIiwiQmFja2JvbmUiLCJWaWV3IiwiZXh0ZW5kIiwidGVtcGxhdGVzIiwiZXZlbnRzIiwiYWN0aXZlX3BhZ2UiLCJhY3RpdmVfc2VjdGlvbiIsImluaXRpYWxpemUiLCJsZWZ0X21lbnUiLCJoaWRlX21lbnUiLCJiaW5kQWxsIiwiaW5pdF90ZW1wbGF0ZXMiLCJyZW5kZXIiLCIkbSIsImZyYW1lX21lbnVfaXRlbSIsInJvdXRlcl9tZW51X2l0ZW0iLCJwYWdlX2NvbnRlbnQiLCJzZWN0aW9uX2NvbnRlbnQiLCIkY29udGVudCIsIiRfY29udGVudCIsIiRfbWVudSIsInByZXNlcnZlRm9jdXMiLCJmb2N1cyIsImhhbmRsZV9sZWZ0X21lbnVfY2xpY2siLCIkdGFyZ2V0IiwiJHNob3dfdGFyZ2V0IiwiaGFuZGxlX3RhYl9jbGljayIsIiRwYWdlIiwiaGFzIiwidW5kZWxlZ2F0ZUV2ZW50cyIsIm9mZiIsInNhdmVNb2RhbCIsImRvTm90aGluZyIsIiRvcHRpb25zIiwiY2xhc3NOYW1lIiwibW9kYWwiLCJnZXRfbGVmdF9tZW51Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFB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QUwsQ0FBYyxNQUFkLENBQUosRUFBNkI7QUFDNUJxSixjQUFVLEVBQVY7O0FBRUFoSixNQUFFb0IsSUFBRixDQUFRLEtBQUt6QixPQUFMLENBQWMsTUFBZCxDQUFSLEVBQWdDLFVBQUVySixLQUFGLEVBQVNRLElBQVQsRUFBbUI7QUFDbERrUyxhQUFTbFMsSUFBVCxJQUFvQixPQUFPUixNQUFPLFlBQVAsQ0FBUCxLQUFpQyxXQUFuQyxHQUFtREEsTUFBTyxZQUFQLENBQW5ELEdBQTJFQSxNQUFPLE9BQVAsQ0FBN0Y7QUFDQSxLQUZEO0FBR0E7QUFDRCxVQUFPMFMsT0FBUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNRixtQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzXCIpO1xuIiwiY2xhc3MgSlNfUGFyc2VfQXJncyB7XHJcblx0Y29uc3RydWN0b3IoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfbmVzdGVkID0gZmFsc2UgKSB7XHJcblx0XHR0aGlzLmFyZ3MgICAgID0gJGFyZ3M7XHJcblx0XHR0aGlzLmRlZmF1bHRzID0gJGRlZmF1bHRzO1xyXG5cdFx0dGhpcy5uZXN0ZWQgICA9ICRpc19uZXN0ZWQ7XHJcblx0XHR0aGlzLnBhcnNlKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmdzO1xyXG5cdH1cclxuXHJcblx0cGFyc2UoKSB7XHJcblx0XHRmb3IoIGxldCAkX2tleSBpbiB0aGlzLmRlZmF1bHRzICkge1xyXG5cdFx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5uZXN0ZWQgJiYgdHlwZW9mICB0aGlzLmRlZmF1bHRzWyAkX2tleSBdID09PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0XHR0aGlzLmFyZ3NbICRfa2V5IF0gPSBuZXcgSlNfUGFyc2VfQXJncyggdGhpcy5hcmdzWyAkX2tleSBdLCB0aGlzLmRlZmF1bHRzWyAkX2tleSBdLCB0aGlzLm5lc3RlZCApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzWyAkX2tleSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IHRoaXMuZGVmYXVsdHNbICRfa2V5IF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfZGVlcCA9IGZhbHNlICkgPT4gbmV3IEpTX1BhcnNlX0FyZ3MoICRhcmdzLCAkZGVmYXVsdHMsICRpc19kZWVwICk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X21lcmdlKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2FycmF5X21lcmdlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IE5hdGVcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBqb3NoXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjEgPSB7XCJjb2xvclwiOiBcInJlZFwiLCAwOiAyLCAxOiA0fVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIyID0gezA6IFwiYVwiLCAxOiBcImJcIiwgXCJjb2xvclwiOiBcImdyZWVuXCIsIFwic2hhcGVcIjogXCJ0cmFwZXpvaWRcIiwgMjogNH1cbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X21lcmdlKCRhcnIxLCAkYXJyMilcbiAgLy8gICByZXR1cm5zIDE6IHtcImNvbG9yXCI6IFwiZ3JlZW5cIiwgMDogMiwgMTogNCwgMjogXCJhXCIsIDM6IFwiYlwiLCBcInNoYXBlXCI6IFwidHJhcGV6b2lkXCIsIDQ6IDR9XG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGFycjEgPSBbXVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRhcnIyID0gezE6IFwiZGF0YVwifVxuICAvLyAgIGV4YW1wbGUgMjogYXJyYXlfbWVyZ2UoJGFycjEsICRhcnIyKVxuICAvLyAgIHJldHVybnMgMjogezA6IFwiZGF0YVwifVxuXG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgdmFyIGFyZ2wgPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGFyZztcbiAgdmFyIHJldE9iaiA9IHt9O1xuICB2YXIgayA9ICcnO1xuICB2YXIgYXJnaWwgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGN0ID0gMDtcbiAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIHJldEFyciA9IHRydWU7XG5cbiAgZm9yIChpID0gMDsgaSA8IGFyZ2w7IGkrKykge1xuICAgIGlmICh0b1N0ci5jYWxsKGFyZ3NbaV0pICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXRBcnIgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXRBcnIpIHtcbiAgICByZXRBcnIgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgICByZXRBcnIgPSByZXRBcnIuY29uY2F0KGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0QXJyO1xuICB9XG5cbiAgZm9yIChpID0gMCwgY3QgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAodG9TdHIuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICBmb3IgKGogPSAwLCBhcmdpbCA9IGFyZy5sZW5ndGg7IGogPCBhcmdpbDsgaisrKSB7XG4gICAgICAgIHJldE9ialtjdCsrXSA9IGFyZ1tqXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrIGluIGFyZykge1xuICAgICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgaWYgKHBhcnNlSW50KGssIDEwKSArICcnID09PSBrKSB7XG4gICAgICAgICAgICByZXRPYmpbY3QrK10gPSBhcmdba107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldE9ialtrXSA9IGFyZ1trXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0T2JqO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5X21lcmdlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X21lcmdlX3JlY3Vyc2l2ZShhcnIxLCBhcnIyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYXJyYXlfbWVyZ2VfcmVjdXJzaXZlL1xuICAvLyBvcmlnaW5hbCBieTogU3ViaGFzaXMgRGViXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMSA9IHsnY29sb3InOiB7J2Zhdm9yaXRlJzogJ3JlZCd9LCAwOiA1fVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIyID0gezA6IDEwLCAnY29sb3InOiB7J2Zhdm9yaXRlJzogJ2dyZWVuJywgMDogJ2JsdWUnfX1cbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X21lcmdlX3JlY3Vyc2l2ZSgkYXJyMSwgJGFycjIpXG4gIC8vICAgcmV0dXJucyAxOiB7J2NvbG9yJzogeydmYXZvcml0ZSc6IHswOiAncmVkJywgMTogJ2dyZWVuJ30sIDA6ICdibHVlJ30sIDE6IDUsIDE6IDEwfVxuICAvLyAgICAgICAgdGVzdDogc2tpcC0xXG5cbiAgdmFyIGFycmF5TWVyZ2UgPSByZXF1aXJlKCcuLi9hcnJheS9hcnJheV9tZXJnZScpO1xuICB2YXIgaWR4ID0gJyc7XG5cbiAgaWYgKGFycjEgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycjEpID09PSAnW29iamVjdCBBcnJheV0nICYmIGFycjIgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycjIpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgZm9yIChpZHggaW4gYXJyMikge1xuICAgICAgYXJyMS5wdXNoKGFycjJbaWR4XSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFycjEgJiYgYXJyMSBpbnN0YW5jZW9mIE9iamVjdCAmJiBhcnIyICYmIGFycjIgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICBmb3IgKGlkeCBpbiBhcnIyKSB7XG4gICAgICBpZiAoaWR4IGluIGFycjEpIHtcbiAgICAgICAgaWYgKF90eXBlb2YoYXJyMVtpZHhdKSA9PT0gJ29iamVjdCcgJiYgKHR5cGVvZiBhcnIyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhcnIyKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYXJyMVtpZHhdID0gYXJyYXlNZXJnZShhcnIxW2lkeF0sIGFycjJbaWR4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyMVtpZHhdID0gYXJyMltpZHhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnIxW2lkeF0gPSBhcnIyW2lkeF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycjE7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlfbWVyZ2VfcmVjdXJzaXZlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcnJheV92YWx1ZXMoaW5wdXQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9hcnJheV92YWx1ZXMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X3ZhbHVlcygge2ZpcnN0bmFtZTogJ0tldmluJywgc3VybmFtZTogJ3ZhbiBab25uZXZlbGQnfSApXG4gIC8vICAgcmV0dXJucyAxOiBbICdLZXZpbicsICd2YW4gWm9ubmV2ZWxkJyBdXG5cbiAgdmFyIHRtcEFyciA9IFtdO1xuICB2YXIga2V5ID0gJyc7XG5cbiAgZm9yIChrZXkgaW4gaW5wdXQpIHtcbiAgICB0bXBBcnJbdG1wQXJyLmxlbmd0aF0gPSBpbnB1dFtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRtcEFycjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheV92YWx1ZXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvdW50KG1peGVkVmFyLCBtb2RlKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY291bnQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogV2FsZG8gTWFscXVpIFNpbHZhIChodHRwOi8vd2FsZG8ubWFscXVpLmluZm8pXG4gIC8vICAgIGlucHV0IGJ5OiBtZXJhYmlcbiAgLy8gYnVnZml4ZWQgYnk6IFNvcmVuIEhhbnNlblxuICAvLyBidWdmaXhlZCBieTogT2xpdmllciBMb3V2aWduZXMgKGh0dHA6Ly9tZy1jcmVhLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogY291bnQoW1swLDBdLFswLC00XV0sICdDT1VOVF9SRUNVUlNJVkUnKVxuICAvLyAgIHJldHVybnMgMTogNlxuICAvLyAgIGV4YW1wbGUgMjogY291bnQoeydvbmUnIDogWzEsMiwzLDQsNV19LCAnQ09VTlRfUkVDVVJTSVZFJylcbiAgLy8gICByZXR1cm5zIDI6IDZcblxuICB2YXIga2V5O1xuICB2YXIgY250ID0gMDtcblxuICBpZiAobWl4ZWRWYXIgPT09IG51bGwgfHwgdHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKG1peGVkVmFyLmNvbnN0cnVjdG9yICE9PSBBcnJheSAmJiBtaXhlZFZhci5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAobW9kZSA9PT0gJ0NPVU5UX1JFQ1VSU0lWRScpIHtcbiAgICBtb2RlID0gMTtcbiAgfVxuICBpZiAobW9kZSAhPT0gMSkge1xuICAgIG1vZGUgPSAwO1xuICB9XG5cbiAgZm9yIChrZXkgaW4gbWl4ZWRWYXIpIHtcbiAgICBpZiAobWl4ZWRWYXIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY250Kys7XG4gICAgICBpZiAobW9kZSA9PT0gMSAmJiBtaXhlZFZhcltrZXldICYmIChtaXhlZFZhcltrZXldLmNvbnN0cnVjdG9yID09PSBBcnJheSB8fCBtaXhlZFZhcltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKSB7XG4gICAgICAgIGNudCArPSBjb3VudChtaXhlZFZhcltrZXldLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY250O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvdW50LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbl9hcnJheShuZWVkbGUsIGhheXN0YWNrLCBhcmdTdHJpY3QpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbl9hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiB2bGFkbyBob3ViYVxuICAvLyBpbXByb3ZlZCBieTogSm9uYXMgU2NpYW5ndWxhIFN0cmVldCAoSm9uaTJCYWNrKVxuICAvLyAgICBpbnB1dCBieTogQmlsbHlcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBpbl9hcnJheSgndmFuJywgWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpbl9hcnJheSgndmxhZG8nLCB7MDogJ0tldmluJywgdmxhZG86ICd2YW4nLCAxOiAnWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddKVxuICAvLyAgIGV4YW1wbGUgMzogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddLCBmYWxzZSlcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGluX2FycmF5KDEsIFsnMScsICcyJywgJzMnXSwgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG5cbiAgdmFyIGtleSA9ICcnO1xuICB2YXIgc3RyaWN0ID0gISFhcmdTdHJpY3Q7XG5cbiAgLy8gd2UgcHJldmVudCB0aGUgZG91YmxlIGNoZWNrIChzdHJpY3QgJiYgYXJyW2tleV0gPT09IG5kbCkgfHwgKCFzdHJpY3QgJiYgYXJyW2tleV0gPT09IG5kbClcbiAgLy8gaW4ganVzdCBvbmUgZm9yLCBpbiBvcmRlciB0byBpbXByb3ZlIHRoZSBwZXJmb3JtYW5jZVxuICAvLyBkZWNpZGluZyB3aWNoIHR5cGUgb2YgY29tcGFyYXRpb24gd2lsbCBkbyBiZWZvcmUgd2FsayBhcnJheVxuICBpZiAoc3RyaWN0KSB7XG4gICAgZm9yIChrZXkgaW4gaGF5c3RhY2spIHtcbiAgICAgIGlmIChoYXlzdGFja1trZXldID09PSBuZWVkbGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoa2V5IGluIGhheXN0YWNrKSB7XG4gICAgICBpZiAoaGF5c3RhY2tba2V5XSA9PSBuZWVkbGUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluX2FycmF5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtaWNyb3RpbWUoZ2V0QXNGbG9hdCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21pY3JvdGltZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gaW1wcm92ZWQgYnk6IER1bWl0cnUgVXp1biAoaHR0cDovL2R1enVuLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICR0aW1lU3RhbXAgPSBtaWNyb3RpbWUodHJ1ZSlcbiAgLy8gICBleGFtcGxlIDE6ICR0aW1lU3RhbXAgPiAxMDAwMDAwMDAwICYmICR0aW1lU3RhbXAgPCAyMDAwMDAwMDAwXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiAvXjBcXC5bMC05XXsxLDZ9IFswLTldezEwLDEwfSQvLnRlc3QobWljcm90aW1lKCkpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG5cbiAgdmFyIHM7XG4gIHZhciBub3c7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG5vdyA9IChwZXJmb3JtYW5jZS5ub3coKSArIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWU2KSAvIDFlNiArICcgJyArIHM7XG4gIH0gZWxzZSB7XG4gICAgbm93ID0gKERhdGUubm93ID8gRGF0ZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlMykgLyAxZTMgKyAnICcgKyBzO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWljcm90aW1lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRpbWUoKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdGltZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEdlZWtGRyAoaHR0cDovL2dlZWtmZy5ibG9nc3BvdC5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogbWV0amF5XG4gIC8vIGltcHJvdmVkIGJ5OiBIS01cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gdGltZSgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICR0aW1lU3RhbXAgPiAxMDAwMDAwMDAwICYmICR0aW1lU3RhbXAgPCAyMDAwMDAwMDAwXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgcmV0dXJuIE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1lLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsX3VzZXJfZnVuYyhjYiwgcGFyYW1ldGVycykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NhbGxfdXNlcl9mdW5jL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kcyBvbiBjYWxsX3VzZXJfZnVuY19hcnJheSB3aGljaCBpbiB0dXJuIGRlcGVuZHMgb24gdGhlIGBjYmAgdGhhdCBpcyBwYXNzZWQsXG4gIC8vICAgICAgbm90ZSAxOiB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgYGV2YWxgLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jKCdpc05hTicsICdhJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICB2YXIgY2FsbFVzZXJGdW5jQXJyYXkgPSByZXF1aXJlKCcuLi9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScpO1xuICBwYXJhbWV0ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIGNhbGxVc2VyRnVuY0FycmF5KGNiLCBwYXJhbWV0ZXJzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxsX3VzZXJfZnVuYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsX3VzZXJfZnVuY19hcnJheShjYiwgcGFyYW1ldGVycykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NhbGxfdXNlcl9mdW5jX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogVGhpYWdvIE1hdGEgKGh0dHA6Ly90aGlhZ29tYXRhLmJsb2cuY29tKVxuICAvLyAgcmV2aXNlZCBieTogSm9uIEhvaGxlXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRpbmcgb24gdGhlIGBjYmAgdGhhdCBpcyBwYXNzZWQsXG4gIC8vICAgICAgbm90ZSAxOiB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgYGV2YWxgIGFuZC9vciBgbmV3IEZ1bmN0aW9uYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbJ2EnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsxXSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgdmFyIGZ1bmM7XG4gIHZhciBzY29wZSA9IG51bGw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIGlmICh0eXBlb2YgY2IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZnVuYyA9ICRnbG9iYWxbY2JdO1xuICAgIH0gZWxzZSBpZiAoY2IubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICBmdW5jID0gbmV3IEZ1bmN0aW9uKG51bGwsICdyZXR1cm4gJyArIGNiKSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy1mdW5jXG4gICAgfVxuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjYikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBmdW5jID0gZXZhbChjYlswXSArIFwiWydcIiArIGNiWzFdICsgXCInXVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMgPSBjYlswXVtjYlsxXV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYlswXV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2NvcGUgPSAkZ2xvYmFsW2NiWzBdXTtcbiAgICAgIH0gZWxzZSBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIHNjb3BlID0gZXZhbChjYlswXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3R5cGVvZihjYlswXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBzY29wZSA9IGNiWzBdO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmdW5jID0gY2I7XG4gIH1cblxuICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZnVuYyArICcgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jLmFwcGx5KHNjb3BlLCBwYXJhbWV0ZXJzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxsX3VzZXJfZnVuY19hcnJheS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnVuY3Rpb25fZXhpc3RzKGZ1bmNOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZnVuY3Rpb25fZXhpc3RzL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFN0ZXZlIENsYXlcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBmdW5jdGlvbl9leGlzdHMoJ2lzRmluaXRlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgaWYgKHR5cGVvZiBmdW5jTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBmdW5jTmFtZSA9ICRnbG9iYWxbZnVuY05hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBmdW5jTmFtZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdW5jdGlvbl9leGlzdHMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaV9nZXQodmFybmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luaV9nZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIGluaSB2YWx1ZXMgbXVzdCBiZSBzZXQgYnkgaW5pX3NldCBvciBtYW51YWxseSB3aXRoaW4gYW4gaW5pIGZpbGVcbiAgLy8gICBleGFtcGxlIDE6IGluaV9zZXQoJ2RhdGUudGltZXpvbmUnLCAnQXNpYS9Ib25nX0tvbmcnKVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX2dldCgnZGF0ZS50aW1lem9uZScpXG4gIC8vICAgcmV0dXJucyAxOiAnQXNpYS9Ib25nX0tvbmcnXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcbiAgJGxvY3V0dXMucGhwLmluaSA9ICRsb2N1dHVzLnBocC5pbmkgfHwge307XG5cbiAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0gJiYgJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWU7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pX2dldC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHBsb2RlKGRlbGltaXRlciwgc3RyaW5nLCBsaW1pdCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2V4cGxvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogZXhwbG9kZSgnICcsICdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6IFsgJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnIF1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIgfHwgdHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0cmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoZGVsaW1pdGVyID09PSAnJyB8fCBkZWxpbWl0ZXIgPT09IGZhbHNlIHx8IGRlbGltaXRlciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIGRlbGltaXRlciA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGVsaW1pdGVyKSkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBzdHJpbmcgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBzdHJpbmcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHN0cmluZykpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB7XG4gICAgICAwOiAnJ1xuICAgIH07XG4gIH1cbiAgaWYgKGRlbGltaXRlciA9PT0gdHJ1ZSkge1xuICAgIGRlbGltaXRlciA9ICcxJztcbiAgfVxuXG4gIC8vIEhlcmUgd2UgZ28uLi5cbiAgZGVsaW1pdGVyICs9ICcnO1xuICBzdHJpbmcgKz0gJyc7XG5cbiAgdmFyIHMgPSBzdHJpbmcuc3BsaXQoZGVsaW1pdGVyKTtcblxuICBpZiAodHlwZW9mIGxpbWl0ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHM7XG5cbiAgLy8gU3VwcG9ydCBmb3IgbGltaXRcbiAgaWYgKGxpbWl0ID09PSAwKSBsaW1pdCA9IDE7XG5cbiAgLy8gUG9zaXRpdmUgbGltaXRcbiAgaWYgKGxpbWl0ID4gMCkge1xuICAgIGlmIChsaW1pdCA+PSBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIHJldHVybiBzLnNsaWNlKDAsIGxpbWl0IC0gMSkuY29uY2F0KFtzLnNsaWNlKGxpbWl0IC0gMSkuam9pbihkZWxpbWl0ZXIpXSk7XG4gIH1cblxuICAvLyBOZWdhdGl2ZSBsaW1pdFxuICBpZiAoLWxpbWl0ID49IHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcy5zcGxpY2Uocy5sZW5ndGggKyBsaW1pdCk7XG4gIHJldHVybiBzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cGxvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW1wbG9kZShnbHVlLCBwaWVjZXMpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbXBsb2RlL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFdhbGRvIE1hbHF1aSBTaWx2YSAoaHR0cDovL3dhbGRvLm1hbHF1aS5pbmZvKVxuICAvLyBpbXByb3ZlZCBieTogSXRzYWNvbiAoaHR0cDovL3d3dy5pdHNhY29uLm5ldC8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogaW1wbG9kZSgnICcsIFsnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCddKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG4gIC8vICAgZXhhbXBsZSAyOiBpbXBsb2RlKCcgJywge2ZpcnN0OidLZXZpbicsIGxhc3Q6ICd2YW4gWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAyOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICB2YXIgaSA9ICcnO1xuICB2YXIgcmV0VmFsID0gJyc7XG4gIHZhciB0R2x1ZSA9ICcnO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcGllY2VzID0gZ2x1ZTtcbiAgICBnbHVlID0gJyc7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBwaWVjZXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBpZWNlcykpID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGllY2VzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuIHBpZWNlcy5qb2luKGdsdWUpO1xuICAgIH1cbiAgICBmb3IgKGkgaW4gcGllY2VzKSB7XG4gICAgICByZXRWYWwgKz0gdEdsdWUgKyBwaWVjZXNbaV07XG4gICAgICB0R2x1ZSA9IGdsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXRWYWw7XG4gIH1cblxuICByZXR1cm4gcGllY2VzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltcGxvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1kNShzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9tZDUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBXZWJ0b29sa2l0LmluZm8gKGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvLylcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIG5vdGUgMTogS2VlcCBpbiBtaW5kIHRoYXQgaW4gYWNjb3JkYW5jZSB3aXRoIFBIUCwgdGhlIHdob2xlIHN0cmluZyBpcyBidWZmZXJlZCBhbmQgdGhlblxuICAvLyAgICAgIG5vdGUgMTogaGFzaGVkLiBJZiBhdmFpbGFibGUsIHdlJ2QgcmVjb21tZW5kIHVzaW5nIE5vZGUncyBuYXRpdmUgY3J5cHRvIG1vZHVsZXMgZGlyZWN0bHlcbiAgLy8gICAgICBub3RlIDE6IGluIGEgc3RlYW1pbmcgZmFzaGlvbiBmb3IgZmFzdGVyIGFuZCBtb3JlIGVmZmljaWVudCBoYXNoaW5nXG4gIC8vICAgZXhhbXBsZSAxOiBtZDUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJzZlNjU4ZDRiZmNiNTljYzEzZjk2YzE0NDUwYWM0MGI5J1xuXG4gIHZhciBoYXNoO1xuICB0cnkge1xuICAgIHZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgICB2YXIgbWQ1c3VtID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpO1xuICAgIG1kNXN1bS51cGRhdGUoc3RyKTtcbiAgICBoYXNoID0gbWQ1c3VtLmRpZ2VzdCgnaGV4Jyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYXNoID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgdmFyIHV0ZjhFbmNvZGUgPSByZXF1aXJlKCcuLi94bWwvdXRmOF9lbmNvZGUnKTtcbiAgdmFyIHhsO1xuXG4gIHZhciBfcm90YXRlTGVmdCA9IGZ1bmN0aW9uIF9yb3RhdGVMZWZ0KGxWYWx1ZSwgaVNoaWZ0Qml0cykge1xuICAgIHJldHVybiBsVmFsdWUgPDwgaVNoaWZ0Qml0cyB8IGxWYWx1ZSA+Pj4gMzIgLSBpU2hpZnRCaXRzO1xuICB9O1xuXG4gIHZhciBfYWRkVW5zaWduZWQgPSBmdW5jdGlvbiBfYWRkVW5zaWduZWQobFgsIGxZKSB7XG4gICAgdmFyIGxYNCwgbFk0LCBsWDgsIGxZOCwgbFJlc3VsdDtcbiAgICBsWDggPSBsWCAmIDB4ODAwMDAwMDA7XG4gICAgbFk4ID0gbFkgJiAweDgwMDAwMDAwO1xuICAgIGxYNCA9IGxYICYgMHg0MDAwMDAwMDtcbiAgICBsWTQgPSBsWSAmIDB4NDAwMDAwMDA7XG4gICAgbFJlc3VsdCA9IChsWCAmIDB4M0ZGRkZGRkYpICsgKGxZICYgMHgzRkZGRkZGRik7XG4gICAgaWYgKGxYNCAmIGxZNCkge1xuICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweDgwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgICBpZiAobFg0IHwgbFk0KSB7XG4gICAgICBpZiAobFJlc3VsdCAmIDB4NDAwMDAwMDApIHtcbiAgICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweEMwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweDQwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIGxYOCBeIGxZODtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9GID0gZnVuY3Rpb24gX0YoeCwgeSwgeikge1xuICAgIHJldHVybiB4ICYgeSB8IH54ICYgejtcbiAgfTtcbiAgdmFyIF9HID0gZnVuY3Rpb24gX0coeCwgeSwgeikge1xuICAgIHJldHVybiB4ICYgeiB8IHkgJiB+ejtcbiAgfTtcbiAgdmFyIF9IID0gZnVuY3Rpb24gX0goeCwgeSwgeikge1xuICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH07XG4gIHZhciBfSSA9IGZ1bmN0aW9uIF9JKHgsIHksIHopIHtcbiAgICByZXR1cm4geSBeICh4IHwgfnopO1xuICB9O1xuXG4gIHZhciBfRkYgPSBmdW5jdGlvbiBfRkYoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0YoYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfR0cgPSBmdW5jdGlvbiBfR0coYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0coYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfSEggPSBmdW5jdGlvbiBfSEgoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0goYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfSUkgPSBmdW5jdGlvbiBfSUkoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0koYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfY29udmVydFRvV29yZEFycmF5ID0gZnVuY3Rpb24gX2NvbnZlcnRUb1dvcmRBcnJheShzdHIpIHtcbiAgICB2YXIgbFdvcmRDb3VudDtcbiAgICB2YXIgbE1lc3NhZ2VMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc1RlbXAxID0gbE1lc3NhZ2VMZW5ndGggKyA4O1xuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc1RlbXAyID0gKGxOdW1iZXJPZldvcmRzVGVtcDEgLSBsTnVtYmVyT2ZXb3Jkc1RlbXAxICUgNjQpIC8gNjQ7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzID0gKGxOdW1iZXJPZldvcmRzVGVtcDIgKyAxKSAqIDE2O1xuICAgIHZhciBsV29yZEFycmF5ID0gbmV3IEFycmF5KGxOdW1iZXJPZldvcmRzIC0gMSk7XG4gICAgdmFyIGxCeXRlUG9zaXRpb24gPSAwO1xuICAgIHZhciBsQnl0ZUNvdW50ID0gMDtcbiAgICB3aGlsZSAobEJ5dGVDb3VudCA8IGxNZXNzYWdlTGVuZ3RoKSB7XG4gICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgICAgbEJ5dGVQb3NpdGlvbiA9IGxCeXRlQ291bnQgJSA0ICogODtcbiAgICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgc3RyLmNoYXJDb2RlQXQobEJ5dGVDb3VudCkgPDwgbEJ5dGVQb3NpdGlvbjtcbiAgICAgIGxCeXRlQ291bnQrKztcbiAgICB9XG4gICAgbFdvcmRDb3VudCA9IChsQnl0ZUNvdW50IC0gbEJ5dGVDb3VudCAlIDQpIC8gNDtcbiAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgMHg4MCA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAyXSA9IGxNZXNzYWdlTGVuZ3RoIDw8IDM7XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDFdID0gbE1lc3NhZ2VMZW5ndGggPj4+IDI5O1xuICAgIHJldHVybiBsV29yZEFycmF5O1xuICB9O1xuXG4gIHZhciBfd29yZFRvSGV4ID0gZnVuY3Rpb24gX3dvcmRUb0hleChsVmFsdWUpIHtcbiAgICB2YXIgd29yZFRvSGV4VmFsdWUgPSAnJztcbiAgICB2YXIgd29yZFRvSGV4VmFsdWVUZW1wID0gJyc7XG4gICAgdmFyIGxCeXRlO1xuICAgIHZhciBsQ291bnQ7XG5cbiAgICBmb3IgKGxDb3VudCA9IDA7IGxDb3VudCA8PSAzOyBsQ291bnQrKykge1xuICAgICAgbEJ5dGUgPSBsVmFsdWUgPj4+IGxDb3VudCAqIDggJiAyNTU7XG4gICAgICB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnMCcgKyBsQnl0ZS50b1N0cmluZygxNik7XG4gICAgICB3b3JkVG9IZXhWYWx1ZSA9IHdvcmRUb0hleFZhbHVlICsgd29yZFRvSGV4VmFsdWVUZW1wLnN1YnN0cih3b3JkVG9IZXhWYWx1ZVRlbXAubGVuZ3RoIC0gMiwgMik7XG4gICAgfVxuICAgIHJldHVybiB3b3JkVG9IZXhWYWx1ZTtcbiAgfTtcblxuICB2YXIgeCA9IFtdO1xuICB2YXIgaztcbiAgdmFyIEFBO1xuICB2YXIgQkI7XG4gIHZhciBDQztcbiAgdmFyIEREO1xuICB2YXIgYTtcbiAgdmFyIGI7XG4gIHZhciBjO1xuICB2YXIgZDtcbiAgdmFyIFMxMSA9IDc7XG4gIHZhciBTMTIgPSAxMjtcbiAgdmFyIFMxMyA9IDE3O1xuICB2YXIgUzE0ID0gMjI7XG4gIHZhciBTMjEgPSA1O1xuICB2YXIgUzIyID0gOTtcbiAgdmFyIFMyMyA9IDE0O1xuICB2YXIgUzI0ID0gMjA7XG4gIHZhciBTMzEgPSA0O1xuICB2YXIgUzMyID0gMTE7XG4gIHZhciBTMzMgPSAxNjtcbiAgdmFyIFMzNCA9IDIzO1xuICB2YXIgUzQxID0gNjtcbiAgdmFyIFM0MiA9IDEwO1xuICB2YXIgUzQzID0gMTU7XG4gIHZhciBTNDQgPSAyMTtcblxuICBzdHIgPSB1dGY4RW5jb2RlKHN0cik7XG4gIHggPSBfY29udmVydFRvV29yZEFycmF5KHN0cik7XG4gIGEgPSAweDY3NDUyMzAxO1xuICBiID0gMHhFRkNEQUI4OTtcbiAgYyA9IDB4OThCQURDRkU7XG4gIGQgPSAweDEwMzI1NDc2O1xuXG4gIHhsID0geC5sZW5ndGg7XG4gIGZvciAoayA9IDA7IGsgPCB4bDsgayArPSAxNikge1xuICAgIEFBID0gYTtcbiAgICBCQiA9IGI7XG4gICAgQ0MgPSBjO1xuICAgIEREID0gZDtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTMTEsIDB4RDc2QUE0NzgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgMV0sIFMxMiwgMHhFOEM3Qjc1Nik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzEzLCAweDI0MjA3MERCKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDNdLCBTMTQsIDB4QzFCRENFRUUpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgNF0sIFMxMSwgMHhGNTdDMEZBRik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyA1XSwgUzEyLCAweDQ3ODdDNjJBKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTMTMsIDB4QTgzMDQ2MTMpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgN10sIFMxNCwgMHhGRDQ2OTUwMSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzExLCAweDY5ODA5OEQ4KTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDldLCBTMTIsIDB4OEI0NEY3QUYpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTMTMsIDB4RkZGRjVCQjEpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgMTFdLCBTMTQsIDB4ODk1Q0Q3QkUpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTMTEsIDB4NkI5MDExMjIpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgMTNdLCBTMTIsIDB4RkQ5ODcxOTMpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTMTMsIDB4QTY3OTQzOEUpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgMTVdLCBTMTQsIDB4NDlCNDA4MjEpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgMV0sIFMyMSwgMHhGNjFFMjU2Mik7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyA2XSwgUzIyLCAweEMwNDBCMzQwKTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzIzLCAweDI2NUU1QTUxKTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDBdLCBTMjQsIDB4RTlCNkM3QUEpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgNV0sIFMyMSwgMHhENjJGMTA1RCk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAxMF0sIFMyMiwgMHgyNDQxNDUzKTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzIzLCAweEQ4QTFFNjgxKTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDRdLCBTMjQsIDB4RTdEM0ZCQzgpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgOV0sIFMyMSwgMHgyMUUxQ0RFNik7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAxNF0sIFMyMiwgMHhDMzM3MDdENik7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAzXSwgUzIzLCAweEY0RDUwRDg3KTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDhdLCBTMjQsIDB4NDU1QTE0RUQpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMjEsIDB4QTlFM0U5MDUpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMl0sIFMyMiwgMHhGQ0VGQTNGOCk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzIzLCAweDY3NkYwMkQ5KTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDEyXSwgUzI0LCAweDhEMkE0QzhBKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDVdLCBTMzEsIDB4RkZGQTM5NDIpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgOF0sIFMzMiwgMHg4NzcxRjY4MSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxMV0sIFMzMywgMHg2RDlENjEyMik7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAxNF0sIFMzNCwgMHhGREU1MzgwQyk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzMxLCAweEE0QkVFQTQ0KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDRdLCBTMzIsIDB4NEJERUNGQTkpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgN10sIFMzMywgMHhGNkJCNEI2MCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAxMF0sIFMzNCwgMHhCRUJGQkM3MCk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMzMSwgMHgyODlCN0VDNik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAwXSwgUzMyLCAweEVBQTEyN0ZBKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMzMsIDB4RDRFRjMwODUpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgNl0sIFMzNCwgMHg0ODgxRDA1KTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDldLCBTMzEsIDB4RDlENEQwMzkpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgMTJdLCBTMzIsIDB4RTZEQjk5RTUpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMzMsIDB4MUZBMjdDRjgpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMl0sIFMzNCwgMHhDNEFDNTY2NSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyAwXSwgUzQxLCAweEY0MjkyMjQ0KTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDddLCBTNDIsIDB4NDMyQUZGOTcpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTNDMsIDB4QUI5NDIzQTcpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgNV0sIFM0NCwgMHhGQzkzQTAzOSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFM0MSwgMHg2NTVCNTlDMyk7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAzXSwgUzQyLCAweDhGMENDQzkyKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzQzLCAweEZGRUZGNDdEKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDFdLCBTNDQsIDB4ODU4NDVERDEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgOF0sIFM0MSwgMHg2RkE4N0U0Rik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxNV0sIFM0MiwgMHhGRTJDRTZFMCk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyA2XSwgUzQzLCAweEEzMDE0MzE0KTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDEzXSwgUzQ0LCAweDRFMDgxMUExKTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTNDEsIDB4Rjc1MzdFODIpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgMTFdLCBTNDIsIDB4QkQzQUYyMzUpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMl0sIFM0MywgMHgyQUQ3RDJCQik7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA5XSwgUzQ0LCAweEVCODZEMzkxKTtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIEFBKTtcbiAgICBiID0gX2FkZFVuc2lnbmVkKGIsIEJCKTtcbiAgICBjID0gX2FkZFVuc2lnbmVkKGMsIENDKTtcbiAgICBkID0gX2FkZFVuc2lnbmVkKGQsIEREKTtcbiAgfVxuXG4gIHZhciB0ZW1wID0gX3dvcmRUb0hleChhKSArIF93b3JkVG9IZXgoYikgKyBfd29yZFRvSGV4KGMpICsgX3dvcmRUb0hleChkKTtcblxuICByZXR1cm4gdGVtcC50b0xvd2VyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1kNS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2Vfc3RyKHN0ciwgYXJyYXkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3N0ci9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogQ2FncmkgRWtpblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogSmFja1xuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogTUlPX0tPRFVLSSAoaHR0cDovL21pby1rb2R1a2kuYmxvZ3Nwb3QuY29tLylcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogc3RhZzAxOVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBEcmVhbWVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFphaWRlIChodHRwOi8vemFpZGVzdGhpbmdzLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERhdmlkIFBlc3RhIChodHRwOi8vZGF2aWRwZXN0YS5jb20vKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBqZWljcXVlc3RcbiAgLy8gICAgICBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gbm8gYXJndW1lbnQgaXMgc3BlY2lmaWVkLCB3aWxsIHB1dCB2YXJpYWJsZXMgaW4gZ2xvYmFsIHNjb3BlLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBXaGVuIGEgcGFydGljdWxhciBhcmd1bWVudCBoYXMgYmVlbiBwYXNzZWQsIGFuZCB0aGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogcmV0dXJuZWQgdmFsdWUgaXMgZGlmZmVyZW50IHBhcnNlX3N0ciBvZiBQSFAuXG4gIC8vICAgICAgICAgICBub3RlIDE6IEZvciBleGFtcGxlLCBhPWI9YyZkPT09PWNcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV9zdHIoJ2ZpcnN0PWZvbyZzZWNvbmQ9YmFyJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDE6IHsgZmlyc3Q6ICdmb28nLCBzZWNvbmQ6ICdiYXInIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiBwYXJzZV9zdHIoJ3N0cl9hPUphY2srYW5kK0ppbGwrZGlkbiUyN3Qrc2VlK3RoZSt3ZWxsLicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyAyOiB7IHN0cl9hOiBcIkphY2sgYW5kIEppbGwgZGlkbid0IHNlZSB0aGUgd2VsbC5cIiB9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHZhciAkYWJjID0gezM6J2EnfVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiBwYXJzZV9zdHIoJ2FbYl1bXCJjXCJdPWRlZiZhW3FdPXQrNScsICRhYmMpXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGFiY1xuICAvLyAgICAgICAgcmV0dXJucyAzOiB7XCIzXCI6XCJhXCIsXCJhXCI6e1wiYlwiOntcImNcIjpcImRlZlwifSxcInFcIjpcInQgNVwifX1cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV9zdHIoJ2FbXVtdPXZhbHVlJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDQ6IHtcImFcIjp7XCIwXCI6e1wiMFwiOlwidmFsdWVcIn19fVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHBhcnNlX3N0cignYT0xJmFbXT0yJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgNTogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDU6IHtcImFcIjp7XCIwXCI6XCIyXCJ9fVxuXG4gIHZhciBzdHJBcnIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC9eJi8sICcnKS5yZXBsYWNlKC8mJC8sICcnKS5zcGxpdCgnJicpO1xuICB2YXIgc2FsID0gc3RyQXJyLmxlbmd0aDtcbiAgdmFyIGk7XG4gIHZhciBqO1xuICB2YXIgY3Q7XG4gIHZhciBwO1xuICB2YXIgbGFzdE9iajtcbiAgdmFyIG9iajtcbiAgdmFyIGNocjtcbiAgdmFyIHRtcDtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgcG9zdExlZnRCcmFja2V0UG9zO1xuICB2YXIga2V5cztcbiAgdmFyIGtleXNMZW47XG5cbiAgdmFyIF9maXhTdHIgPSBmdW5jdGlvbiBfZml4U3RyKHN0cikge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xuICB9O1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG5cbiAgaWYgKCFhcnJheSkge1xuICAgIGFycmF5ID0gJGdsb2JhbDtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBzYWw7IGkrKykge1xuICAgIHRtcCA9IHN0ckFycltpXS5zcGxpdCgnPScpO1xuICAgIGtleSA9IF9maXhTdHIodG1wWzBdKTtcbiAgICB2YWx1ZSA9IHRtcC5sZW5ndGggPCAyID8gJycgOiBfZml4U3RyKHRtcFsxXSk7XG5cbiAgICB3aGlsZSAoa2V5LmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgaWYgKGtleS5pbmRleE9mKCdcXHgwMCcpID4gLTEpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgwLCBrZXkuaW5kZXhPZignXFx4MDAnKSk7XG4gICAgfVxuXG4gICAgaWYgKGtleSAmJiBrZXkuY2hhckF0KDApICE9PSAnWycpIHtcbiAgICAgIGtleXMgPSBbXTtcbiAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGtleS5jaGFyQXQoaikgPT09ICdbJyAmJiAhcG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gaiArIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ10nKSB7XG4gICAgICAgICAgaWYgKHBvc3RMZWZ0QnJhY2tldFBvcykge1xuICAgICAgICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5LnNsaWNlKDAsIHBvc3RMZWZ0QnJhY2tldFBvcyAtIDEpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIocG9zdExlZnRCcmFja2V0UG9zLCBqIC0gcG9zdExlZnRCcmFja2V0UG9zKSk7XG4gICAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSAwO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChqICsgMSkgIT09ICdbJykge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICBrZXlzID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBrZXlzWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNociA9IGtleXNbMF0uY2hhckF0KGopO1xuXG4gICAgICAgIGlmIChjaHIgPT09ICcgJyB8fCBjaHIgPT09ICcuJyB8fCBjaHIgPT09ICdbJykge1xuICAgICAgICAgIGtleXNbMF0gPSBrZXlzWzBdLnN1YnN0cigwLCBqKSArICdfJyArIGtleXNbMF0uc3Vic3RyKGogKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHIgPT09ICdbJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9iaiA9IGFycmF5O1xuXG4gICAgICBmb3IgKGogPSAwLCBrZXlzTGVuID0ga2V5cy5sZW5ndGg7IGogPCBrZXlzTGVuOyBqKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tqXS5yZXBsYWNlKC9eWydcIl0vLCAnJykucmVwbGFjZSgvWydcIl0kLywgJycpO1xuICAgICAgICBsYXN0T2JqID0gb2JqO1xuXG4gICAgICAgIGlmICgoa2V5ID09PSAnJyB8fCBrZXkgPT09ICcgJykgJiYgaiAhPT0gMCkge1xuICAgICAgICAgIC8vIEluc2VydCBuZXcgZGltZW5zaW9uXG4gICAgICAgICAgY3QgPSAtMTtcblxuICAgICAgICAgIGZvciAocCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgaWYgKCtwID4gY3QgJiYgcC5tYXRjaCgvXlxcZCskL2cpKSB7XG4gICAgICAgICAgICAgICAgY3QgPSArcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGtleSA9IGN0ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHByaW1pdGl2ZSB2YWx1ZSwgcmVwbGFjZSB3aXRoIG9iamVjdFxuICAgICAgICBpZiAoT2JqZWN0KG9ialtrZXldKSAhPT0gb2JqW2tleV0pIHtcbiAgICAgICAgICBvYmpba2V5XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gb2JqW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxhc3RPYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlX3N0ci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJfcmVwbGFjZShzZWFyY2gsIHJlcGxhY2UsIHN1YmplY3QsIGNvdW50T2JqKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvc3RyX3JlcGxhY2UvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogR2FicmllbCBQYWRlcm5pXG4gIC8vIGltcHJvdmVkIGJ5OiBQaGlsaXAgUGV0ZXJzb25cbiAgLy8gaW1wcm92ZWQgYnk6IFNpbW9uIFdpbGxpc29uIChodHRwOi8vc2ltb253aWxsaXNvbi5uZXQpXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gIHJldmlzZWQgYnk6IEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAoaHR0cDovL3d3dy5qc2Zyb21oZWxsLmNvbSlcbiAgLy8gYnVnZml4ZWQgYnk6IEFudG9uIE9uZ3NvblxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IE9sZWcgRXJlbWVldlxuICAvLyBidWdmaXhlZCBieTogR2xlbiBBcmFzb24gKGh0dHA6Ly9DYW5hZGlhbkRvbWFpblJlZ2lzdHJ5LmNhKVxuICAvLyBidWdmaXhlZCBieTogR2xlbiBBcmFzb24gKGh0dHA6Ly9DYW5hZGlhbkRvbWFpblJlZ2lzdHJ5LmNhKVxuICAvLyAgICBpbnB1dCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IE9sZWcgRXJlbWVldlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGNvdW50T2JqIHBhcmFtZXRlciAob3B0aW9uYWwpIGlmIHVzZWQgbXVzdCBiZSBwYXNzZWQgaW4gYXMgYVxuICAvLyAgICAgIG5vdGUgMTogb2JqZWN0LiBUaGUgY291bnQgd2lsbCB0aGVuIGJlIHdyaXR0ZW4gYnkgcmVmZXJlbmNlIGludG8gaXQncyBgdmFsdWVgIHByb3BlcnR5XG4gIC8vICAgZXhhbXBsZSAxOiBzdHJfcmVwbGFjZSgnICcsICcuJywgJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluLnZhbi5ab25uZXZlbGQnXG4gIC8vICAgZXhhbXBsZSAyOiBzdHJfcmVwbGFjZShbJ3tuYW1lfScsICdsJ10sIFsnaGVsbG8nLCAnbSddLCAne25hbWV9LCBsYXJzJylcbiAgLy8gICByZXR1cm5zIDI6ICdoZW1tbywgbWFycydcbiAgLy8gICBleGFtcGxlIDM6IHN0cl9yZXBsYWNlKEFycmF5KCdTJywnRicpLCd4JywnQVNERkFTREYnKVxuICAvLyAgIHJldHVybnMgMzogJ0F4RHhBeER4J1xuICAvLyAgIGV4YW1wbGUgNDogdmFyIGNvdW50T2JqID0ge31cbiAgLy8gICBleGFtcGxlIDQ6IHN0cl9yZXBsYWNlKFsnQScsJ0QnXSwgWyd4JywneSddICwgJ0FTREZBU0RGJyAsIGNvdW50T2JqKVxuICAvLyAgIGV4YW1wbGUgNDogdmFyICRyZXN1bHQgPSBjb3VudE9iai52YWx1ZVxuICAvLyAgIHJldHVybnMgNDogNFxuXG4gIHZhciBpID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgdGVtcCA9ICcnO1xuICB2YXIgcmVwbCA9ICcnO1xuICB2YXIgc2wgPSAwO1xuICB2YXIgZmwgPSAwO1xuICB2YXIgZiA9IFtdLmNvbmNhdChzZWFyY2gpO1xuICB2YXIgciA9IFtdLmNvbmNhdChyZXBsYWNlKTtcbiAgdmFyIHMgPSBzdWJqZWN0O1xuICB2YXIgcmEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIHZhciBzYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgcyA9IFtdLmNvbmNhdChzKTtcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuXG4gIGlmICgodHlwZW9mIHNlYXJjaCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc2VhcmNoKSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXBsYWNlID09PSAnc3RyaW5nJykge1xuICAgIHRlbXAgPSByZXBsYWNlO1xuICAgIHJlcGxhY2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2VhcmNoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICByZXBsYWNlW2ldID0gdGVtcDtcbiAgICB9XG4gICAgdGVtcCA9ICcnO1xuICAgIHIgPSBbXS5jb25jYXQocmVwbGFjZSk7XG4gICAgcmEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpZiAodHlwZW9mIGNvdW50T2JqICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvdW50T2JqLnZhbHVlID0gMDtcbiAgfVxuXG4gIGZvciAoaSA9IDAsIHNsID0gcy5sZW5ndGg7IGkgPCBzbDsgaSsrKSB7XG4gICAgaWYgKHNbaV0gPT09ICcnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yIChqID0gMCwgZmwgPSBmLmxlbmd0aDsgaiA8IGZsOyBqKyspIHtcbiAgICAgIHRlbXAgPSBzW2ldICsgJyc7XG4gICAgICByZXBsID0gcmEgPyByW2pdICE9PSB1bmRlZmluZWQgPyByW2pdIDogJycgOiByWzBdO1xuICAgICAgc1tpXSA9IHRlbXAuc3BsaXQoZltqXSkuam9pbihyZXBsKTtcbiAgICAgIGlmICh0eXBlb2YgY291bnRPYmogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvdW50T2JqLnZhbHVlICs9IHRlbXAuc3BsaXQoZltqXSkubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNhID8gcyA6IHNbMF07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyX3JlcGxhY2UuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cnRvbG93ZXIoc3RyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvc3RydG9sb3dlci9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgZXhhbXBsZSAxOiBzdHJ0b2xvd2VyKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdrZXZpbiB2YW4gem9ubmV2ZWxkJ1xuXG4gIHJldHVybiAoc3RyICsgJycpLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RydG9sb3dlci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RydG91cHBlcihzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJ0b3VwcGVyL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICBleGFtcGxlIDE6IHN0cnRvdXBwZXIoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tFVklOIFZBTiBaT05ORVZFTEQnXG5cbiAgcmV0dXJuIChzdHIgKyAnJykudG9VcHBlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJ0b3VwcGVyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZGVjb2RlKGVuY29kZWREYXRhKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2RlY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IFRodW5kZXIubVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBBbWFuIEd1cHRhXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogUGVsbGVudGVzcXVlIE1hbGVzdWFkYVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2RlY29kZSgnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PScpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9kZWNvZGUoJ1lRPT0nKVxuICAvLyAgIHJldHVybnMgMjogJ2EnXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZGVjb2RlKCc0cHlUSU1PZ0lHeGhJRzF2WkdVPScpXG4gIC8vICAgcmV0dXJucyAzOiAn4pyTIMOgIGxhIG1vZGUnXG5cbiAgLy8gZGVjb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGRlY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBkZWNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZGVjb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBHb2luZyBiYWNrd2FyZHM6IGZyb20gYnl0ZXN0cmVhbSwgdG8gcGVyY2VudC1lbmNvZGluZywgdG8gb3JpZ2luYWwgc3RyaW5nLlxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYXRvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVVEY4c3RyaW5nKHdpbmRvdy5hdG9iKGVuY29kZWREYXRhKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGVuY29kZWREYXRhLCAnYmFzZTY0JykudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gIH1cblxuICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgdmFyIG8xO1xuICB2YXIgbzI7XG4gIHZhciBvMztcbiAgdmFyIGgxO1xuICB2YXIgaDI7XG4gIHZhciBoMztcbiAgdmFyIGg0O1xuICB2YXIgYml0cztcbiAgdmFyIGkgPSAwO1xuICB2YXIgYWMgPSAwO1xuICB2YXIgZGVjID0gJyc7XG4gIHZhciB0bXBBcnIgPSBbXTtcblxuICBpZiAoIWVuY29kZWREYXRhKSB7XG4gICAgcmV0dXJuIGVuY29kZWREYXRhO1xuICB9XG5cbiAgZW5jb2RlZERhdGEgKz0gJyc7XG5cbiAgZG8ge1xuICAgIC8vIHVucGFjayBmb3VyIGhleGV0cyBpbnRvIHRocmVlIG9jdGV0cyB1c2luZyBpbmRleCBwb2ludHMgaW4gYjY0XG4gICAgaDEgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDIgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDMgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDQgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG5cbiAgICBiaXRzID0gaDEgPDwgMTggfCBoMiA8PCAxMiB8IGgzIDw8IDYgfCBoNDtcblxuICAgIG8xID0gYml0cyA+PiAxNiAmIDB4ZmY7XG4gICAgbzIgPSBiaXRzID4+IDggJiAweGZmO1xuICAgIG8zID0gYml0cyAmIDB4ZmY7XG5cbiAgICBpZiAoaDMgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xKTtcbiAgICB9IGVsc2UgaWYgKGg0ID09PSA2NCkge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSwgbzIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMiwgbzMpO1xuICAgIH1cbiAgfSB3aGlsZSAoaSA8IGVuY29kZWREYXRhLmxlbmd0aCk7XG5cbiAgZGVjID0gdG1wQXJyLmpvaW4oJycpO1xuXG4gIHJldHVybiBkZWNvZGVVVEY4c3RyaW5nKGRlYy5yZXBsYWNlKC9cXDArJC8sICcnKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0X2RlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0X2VuY29kZShzdHJpbmdUb0VuY29kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Jhc2U2NF9lbmNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUeWxlciBBa2lucyAoaHR0cDovL3J1bWtpbi5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBCYXlyb24gR3VldmFyYVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGltcHJvdmVkIGJ5OiBJbmRpZ283NDRcbiAgLy8gICBleGFtcGxlIDE6IGJhc2U2NF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ1MyVjJhVzRnZG1GdUlGcHZibTVsZG1Wc1pBPT0nXG4gIC8vICAgZXhhbXBsZSAyOiBiYXNlNjRfZW5jb2RlKCdhJylcbiAgLy8gICByZXR1cm5zIDI6ICdZUT09J1xuICAvLyAgIGV4YW1wbGUgMzogYmFzZTY0X2VuY29kZSgn4pyTIMOgIGxhIG1vZGUnKVxuICAvLyAgIHJldHVybnMgMzogJzRweVRJTU9nSUd4aElHMXZaR1U9J1xuXG4gIC8vIGVuY29kZVVURjhzdHJpbmcoKVxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBlbmNvZGUgcHJvcGVybHkgVVRGOCBzdHJpbmdcbiAgLy8gQWRhcHRlZCBmcm9tIFNvbHV0aW9uICMxIGF0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZ1xuICB2YXIgZW5jb2RlVVRGOHN0cmluZyA9IGZ1bmN0aW9uIGVuY29kZVVURjhzdHJpbmcoc3RyKSB7XG4gICAgLy8gZmlyc3Qgd2UgdXNlIGVuY29kZVVSSUNvbXBvbmVudCB0byBnZXQgcGVyY2VudC1lbmNvZGVkIFVURi04LFxuICAgIC8vIHRoZW4gd2UgY29udmVydCB0aGUgcGVyY2VudCBlbmNvZGluZ3MgaW50byByYXcgYnl0ZXMgd2hpY2hcbiAgICAvLyBjYW4gYmUgZmVkIGludG8gdGhlIGJhc2U2NCBlbmNvZGluZyBhbGdvcml0aG0uXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIHRvU29saWRCeXRlcyhtYXRjaCwgcDEpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcgKyBwMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShlbmNvZGVVVEY4c3RyaW5nKHN0cmluZ1RvRW5jb2RlKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKHN0cmluZ1RvRW5jb2RlKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIH1cblxuICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgdmFyIG8xO1xuICB2YXIgbzI7XG4gIHZhciBvMztcbiAgdmFyIGgxO1xuICB2YXIgaDI7XG4gIHZhciBoMztcbiAgdmFyIGg0O1xuICB2YXIgYml0cztcbiAgdmFyIGkgPSAwO1xuICB2YXIgYWMgPSAwO1xuICB2YXIgZW5jID0gJyc7XG4gIHZhciB0bXBBcnIgPSBbXTtcblxuICBpZiAoIXN0cmluZ1RvRW5jb2RlKSB7XG4gICAgcmV0dXJuIHN0cmluZ1RvRW5jb2RlO1xuICB9XG5cbiAgc3RyaW5nVG9FbmNvZGUgPSBlbmNvZGVVVEY4c3RyaW5nKHN0cmluZ1RvRW5jb2RlKTtcblxuICBkbyB7XG4gICAgLy8gcGFjayB0aHJlZSBvY3RldHMgaW50byBmb3VyIGhleGV0c1xuICAgIG8xID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuICAgIG8yID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuICAgIG8zID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuXG4gICAgYml0cyA9IG8xIDw8IDE2IHwgbzIgPDwgOCB8IG8zO1xuXG4gICAgaDEgPSBiaXRzID4+IDE4ICYgMHgzZjtcbiAgICBoMiA9IGJpdHMgPj4gMTIgJiAweDNmO1xuICAgIGgzID0gYml0cyA+PiA2ICYgMHgzZjtcbiAgICBoNCA9IGJpdHMgJiAweDNmO1xuXG4gICAgLy8gdXNlIGhleGV0cyB0byBpbmRleCBpbnRvIGI2NCwgYW5kIGFwcGVuZCByZXN1bHQgdG8gZW5jb2RlZCBzdHJpbmdcbiAgICB0bXBBcnJbYWMrK10gPSBiNjQuY2hhckF0KGgxKSArIGI2NC5jaGFyQXQoaDIpICsgYjY0LmNoYXJBdChoMykgKyBiNjQuY2hhckF0KGg0KTtcbiAgfSB3aGlsZSAoaSA8IHN0cmluZ1RvRW5jb2RlLmxlbmd0aCk7XG5cbiAgZW5jID0gdG1wQXJyLmpvaW4oJycpO1xuXG4gIHZhciByID0gc3RyaW5nVG9FbmNvZGUubGVuZ3RoICUgMztcblxuICByZXR1cm4gKHIgPyBlbmMuc2xpY2UoMCwgciAtIDMpIDogZW5jKSArICc9PT0nLnNsaWNlKHIgfHwgMyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0X2VuY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYm9vbHZhbChtaXhlZFZhcikge1xuICAvLyBvcmlnaW5hbCBieTogV2lsbCBSb3dlXG4gIC8vICAgZXhhbXBsZSAxOiBib29sdmFsKHRydWUpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBib29sdmFsKGZhbHNlKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGJvb2x2YWwoMClcbiAgLy8gICByZXR1cm5zIDM6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA0OiBib29sdmFsKDAuMClcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA1OiBib29sdmFsKCcnKVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDY6IGJvb2x2YWwoJzAnKVxuICAvLyAgIHJldHVybnMgNjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDc6IGJvb2x2YWwoW10pXG4gIC8vICAgcmV0dXJucyA3OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgODogYm9vbHZhbCgnJylcbiAgLy8gICByZXR1cm5zIDg6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA5OiBib29sdmFsKG51bGwpXG4gIC8vICAgcmV0dXJucyA5OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMTA6IGJvb2x2YWwodW5kZWZpbmVkKVxuICAvLyAgIHJldHVybnMgMTA6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAxMTogYm9vbHZhbCgndHJ1ZScpXG4gIC8vICAgcmV0dXJucyAxMTogdHJ1ZVxuXG4gIGlmIChtaXhlZFZhciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobWl4ZWRWYXIgPT09IDAgfHwgbWl4ZWRWYXIgPT09IDAuMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gJycgfHwgbWl4ZWRWYXIgPT09ICcwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG1peGVkVmFyKSAmJiBtaXhlZFZhci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobWl4ZWRWYXIgPT09IG51bGwgfHwgbWl4ZWRWYXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2x2YWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW1wdHkobWl4ZWRWYXIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9lbXB0eS9cbiAgLy8gb3JpZ2luYWwgYnk6IFBoaWxpcHBlIEJhdW1hbm5cbiAgLy8gICAgaW5wdXQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgaW5wdXQgYnk6IExIXG4gIC8vICAgIGlucHV0IGJ5OiBTdG95YW4gS3lvc2V2IChodHRwOi8vd3d3LnN2ZXN0Lm9yZy8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogRnJhbmNlc2NvXG4gIC8vIGltcHJvdmVkIGJ5OiBNYXJjIEphbnNlblxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICBleGFtcGxlIDE6IGVtcHR5KG51bGwpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBlbXB0eSh1bmRlZmluZWQpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiBlbXB0eShbXSlcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGVtcHR5KHt9KVxuICAvLyAgIHJldHVybnMgNDogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNTogZW1wdHkoeydhRnVuYycgOiBmdW5jdGlvbiAoKSB7IGFsZXJ0KCdodW1wdHknKTsgfSB9KVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcblxuICB2YXIgdW5kZWY7XG4gIHZhciBrZXk7XG4gIHZhciBpO1xuICB2YXIgbGVuO1xuICB2YXIgZW1wdHlWYWx1ZXMgPSBbdW5kZWYsIG51bGwsIGZhbHNlLCAwLCAnJywgJzAnXTtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSBlbXB0eVZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChtaXhlZFZhciA9PT0gZW1wdHlWYWx1ZXNbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICgodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoa2V5IGluIG1peGVkVmFyKSB7XG4gICAgICBpZiAobWl4ZWRWYXIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtcHR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsb2F0dmFsKG1peGVkVmFyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZmxvYXR2YWwvXG4gIC8vIG9yaWdpbmFsIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSBuYXRpdmUgcGFyc2VGbG9hdCgpIG1ldGhvZCBvZiBKYXZhU2NyaXB0IHJldHVybnMgTmFOXG4gIC8vICAgICAgbm90ZSAxOiB3aGVuIGl0IGVuY291bnRlcnMgYSBzdHJpbmcgYmVmb3JlIGFuIGludCBvciBmbG9hdCB2YWx1ZS5cbiAgLy8gICBleGFtcGxlIDE6IGZsb2F0dmFsKCcxNTAuMDNfcGFnZS1zZWN0aW9uJylcbiAgLy8gICByZXR1cm5zIDE6IDE1MC4wM1xuICAvLyAgIGV4YW1wbGUgMjogZmxvYXR2YWwoJ3BhZ2U6IDMnKVxuICAvLyAgIGV4YW1wbGUgMjogZmxvYXR2YWwoJy01MCArIDgnKVxuICAvLyAgIHJldHVybnMgMjogMFxuICAvLyAgIHJldHVybnMgMjogLTUwXG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQobWl4ZWRWYXIpIHx8IDA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmxvYXR2YWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW50dmFsKG1peGVkVmFyLCBiYXNlKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW50dmFsL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHN0ZW5zaVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgICBpbnB1dCBieTogTWF0dGVvXG4gIC8vICAgZXhhbXBsZSAxOiBpbnR2YWwoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogMFxuICAvLyAgIGV4YW1wbGUgMjogaW50dmFsKDQuMilcbiAgLy8gICByZXR1cm5zIDI6IDRcbiAgLy8gICBleGFtcGxlIDM6IGludHZhbCg0MiwgOClcbiAgLy8gICByZXR1cm5zIDM6IDQyXG4gIC8vICAgZXhhbXBsZSA0OiBpbnR2YWwoJzA5JylcbiAgLy8gICByZXR1cm5zIDQ6IDlcbiAgLy8gICBleGFtcGxlIDU6IGludHZhbCgnMWUnLCAxNilcbiAgLy8gICByZXR1cm5zIDU6IDMwXG4gIC8vICAgZXhhbXBsZSA2OiBpbnR2YWwoMHgyMDAwMDAwMDEpXG4gIC8vICAgcmV0dXJucyA2OiA4NTg5OTM0NTkzXG4gIC8vICAgZXhhbXBsZSA3OiBpbnR2YWwoJzB4ZmYnLCAwKVxuICAvLyAgIHJldHVybnMgNzogMjU1XG4gIC8vICAgZXhhbXBsZSA4OiBpbnR2YWwoJzAxMCcsIDApXG4gIC8vICAgcmV0dXJucyA4OiA4XG5cbiAgdmFyIHRtcCwgbWF0Y2g7XG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKTtcblxuICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuICttaXhlZFZhcjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChiYXNlID09PSAwKSB7XG4gICAgICBtYXRjaCA9IG1peGVkVmFyLm1hdGNoKC9eXFxzKjAoeD8pL2kpO1xuICAgICAgYmFzZSA9IG1hdGNoID8gbWF0Y2hbMV0gPyAxNiA6IDggOiAxMDtcbiAgICB9XG4gICAgdG1wID0gcGFyc2VJbnQobWl4ZWRWYXIsIGJhc2UgfHwgMTApO1xuICAgIHJldHVybiBpc05hTih0bXApIHx8ICFpc0Zpbml0ZSh0bXApID8gMCA6IHRtcDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShtaXhlZFZhcikpIHtcbiAgICByZXR1cm4gbWl4ZWRWYXIgPCAwID8gTWF0aC5jZWlsKG1peGVkVmFyKSA6IE1hdGguZmxvb3IobWl4ZWRWYXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50dmFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2FycmF5KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IE5hdGhhbiBTZXB1bHZlZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBDb3JkXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBNYW5pc2hcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBJbiBMb2N1dHVzLCBqYXZhc2NyaXB0IG9iamVjdHMgYXJlIGxpa2UgcGhwIGFzc29jaWF0aXZlIGFycmF5cyxcbiAgLy8gICAgICBub3RlIDE6IHRodXMgSmF2YVNjcmlwdCBvYmplY3RzIHdpbGwgYWxzb1xuICAvLyAgICAgIG5vdGUgMTogcmV0dXJuIHRydWUgaW4gdGhpcyBmdW5jdGlvbiAoZXhjZXB0IGZvciBvYmplY3RzIHdoaWNoIGluaGVyaXQgcHJvcGVydGllcyxcbiAgLy8gICAgICBub3RlIDE6IGJlaW5nIHRodXMgdXNlZCBhcyBvYmplY3RzKSxcbiAgLy8gICAgICBub3RlIDE6IHVubGVzcyB5b3UgZG8gaW5pX3NldCgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnLCAwKSxcbiAgLy8gICAgICBub3RlIDE6IGluIHdoaWNoIGNhc2Ugb25seSBnZW51aW5lIEphdmFTY3JpcHQgYXJyYXlzXG4gIC8vICAgICAgbm90ZSAxOiB3aWxsIHJldHVybiB0cnVlXG4gIC8vICAgZXhhbXBsZSAxOiBpc19hcnJheShbJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2FycmF5KCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19hcnJheSh7MDogJ0tldmluJywgMTogJ3ZhbicsIDI6ICdab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGluaV9zZXQoJ2xvY3V0dXMub2JqZWN0c0FzQXJyYXlzJywgMClcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2FycmF5KHswOiAnS2V2aW4nLCAxOiAndmFuJywgMjogJ1pvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGlzX2FycmF5KGZ1bmN0aW9uIHRtcF9hICgpeyB0aGlzLm5hbWUgPSAnS2V2aW4nIH0pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuXG4gIHZhciBfZ2V0RnVuY05hbWUgPSBmdW5jdGlvbiBfZ2V0RnVuY05hbWUoZm4pIHtcbiAgICB2YXIgbmFtZSA9IC9cXFcqZnVuY3Rpb25cXHMrKFtcXHckXSspXFxzKlxcKC8uZXhlYyhmbik7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gJyhBbm9ueW1vdXMpJztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVbMV07XG4gIH07XG4gIHZhciBfaXNBcnJheSA9IGZ1bmN0aW9uIF9pc0FycmF5KG1peGVkVmFyKSB7XG4gICAgLy8gcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgLy8gVGhlIGFib3ZlIHdvcmtzLCBidXQgbGV0J3MgZG8gdGhlIGV2ZW4gbW9yZSBzdHJpbmdlbnQgYXBwcm9hY2g6XG4gICAgLy8gKHNpbmNlIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgY291bGQgYmUgb3ZlcnJpZGRlbilcbiAgICAvLyBOdWxsLCBOb3QgYW4gb2JqZWN0LCBubyBsZW5ndGggcHJvcGVydHkgc28gY291bGRuJ3QgYmUgYW4gQXJyYXkgKG9yIFN0cmluZylcbiAgICBpZiAoIW1peGVkVmFyIHx8ICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBtaXhlZFZhci5sZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBsZW4gPSBtaXhlZFZhci5sZW5ndGg7XG4gICAgbWl4ZWRWYXJbbWl4ZWRWYXIubGVuZ3RoXSA9ICdib2d1cyc7XG4gICAgLy8gVGhlIG9ubHkgd2F5IEkgY2FuIHRoaW5rIG9mIHRvIGdldCBhcm91bmQgdGhpcyAob3Igd2hlcmUgdGhlcmUgd291bGQgYmUgdHJvdWJsZSlcbiAgICAvLyB3b3VsZCBiZSB0byBoYXZlIGFuIG9iamVjdCBkZWZpbmVkXG4gICAgLy8gd2l0aCBhIGN1c3RvbSBcImxlbmd0aFwiIGdldHRlciB3aGljaCBjaGFuZ2VkIGJlaGF2aW9yIG9uIGVhY2ggY2FsbFxuICAgIC8vIChvciBhIHNldHRlciB0byBtZXNzIHVwIHRoZSBmb2xsb3dpbmcgYmVsb3cpIG9yIGEgY3VzdG9tXG4gICAgLy8gc2V0dGVyIGZvciBudW1lcmljIHByb3BlcnRpZXMsIGJ1dCBldmVuIHRoYXQgd291bGQgbmVlZCB0byBsaXN0ZW4gZm9yXG4gICAgLy8gc3BlY2lmaWMgaW5kZXhlczsgYnV0IHRoZXJlIHNob3VsZCBiZSBubyBmYWxzZSBuZWdhdGl2ZXNcbiAgICAvLyBhbmQgc3VjaCBhIGZhbHNlIHBvc2l0aXZlIHdvdWxkIG5lZWQgdG8gcmVseSBvbiBsYXRlciBKYXZhU2NyaXB0XG4gICAgLy8gaW5ub3ZhdGlvbnMgbGlrZSBfX2RlZmluZVNldHRlcl9fXG4gICAgaWYgKGxlbiAhPT0gbWl4ZWRWYXIubGVuZ3RoKSB7XG4gICAgICAvLyBXZSBrbm93IGl0J3MgYW4gYXJyYXkgc2luY2UgbGVuZ3RoIGF1dG8tY2hhbmdlZCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBhXG4gICAgICAvLyBudW1lcmljIHByb3BlcnR5IGF0IGl0cyBsZW5ndGggZW5kLCBzbyBzYWZlbHkgZ2V0IHJpZCBvZiBvdXIgYm9ndXMgZWxlbWVudFxuICAgICAgbWl4ZWRWYXIubGVuZ3RoIC09IDE7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gR2V0IHJpZCBvZiB0aGUgcHJvcGVydHkgd2UgYWRkZWQgb250byBhIG5vbi1hcnJheSBvYmplY3Q7IG9ubHkgcG9zc2libGVcbiAgICAvLyBzaWRlLWVmZmVjdCBpcyBpZiB0aGUgdXNlciBhZGRzIGJhY2sgdGhlIHByb3BlcnR5IGxhdGVyLCBpdCB3aWxsIGl0ZXJhdGVcbiAgICAvLyB0aGlzIHByb3BlcnR5IGluIHRoZSBvbGRlciBvcmRlciBwbGFjZW1lbnQgaW4gSUUgKGFuIG9yZGVyIHdoaWNoIHNob3VsZCBub3RcbiAgICAvLyBiZSBkZXBlbmRlZCBvbiBhbnl3YXlzKVxuICAgIGRlbGV0ZSBtaXhlZFZhclttaXhlZFZhci5sZW5ndGhdO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBpZiAoIW1peGVkVmFyIHx8ICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheShtaXhlZFZhcik7XG5cbiAgaWYgKGlzQXJyYXkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpbmlWYWwgPSAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnLi4vaW5mby9pbmlfZ2V0JykoJ2xvY3V0dXMub2JqZWN0c0FzQXJyYXlzJykgOiB1bmRlZmluZWQpIHx8ICdvbic7XG4gIGlmIChpbmlWYWwgPT09ICdvbicpIHtcbiAgICB2YXIgYXNTdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpO1xuICAgIHZhciBhc0Z1bmMgPSBfZ2V0RnVuY05hbWUobWl4ZWRWYXIuY29uc3RydWN0b3IpO1xuXG4gICAgaWYgKGFzU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyAmJiBhc0Z1bmMgPT09ICdPYmplY3QnKSB7XG4gICAgICAvLyBNb3N0IGxpa2VseSBhIGxpdGVyYWwgYW5kIGludGVuZGVkIGFzIGFzc29jLiBhcnJheVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2Jvb2wobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19ib29sL1xuICAvLyBvcmlnaW5hbCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQ291cnNlc1dlYiAoaHR0cDovL3d3dy5jb3Vyc2Vzd2ViLm5ldC8pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19ib29sKGZhbHNlKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfYm9vbCgwKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09IHRydWUgfHwgbWl4ZWRWYXIgPT09IGZhbHNlOyAvLyBGYXN0ZXIgKGluIEZGKSB0aGFuIHR5cGUgY2hlY2tpbmdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19ib29sLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2NhbGxhYmxlKG1peGVkVmFyLCBzeW50YXhPbmx5LCBjYWxsYWJsZU5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19jYWxsYWJsZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBGcmFuw6dvaXNcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgdmFyaWFibGUgY2FsbGFibGVOYW1lIGNhbm5vdCB3b3JrIGFzIGEgc3RyaW5nIHZhcmlhYmxlIHBhc3NlZCBieVxuICAvLyAgICAgIG5vdGUgMTogcmVmZXJlbmNlIGFzIGluIFBIUCAoc2luY2UgSmF2YVNjcmlwdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmdcbiAgLy8gICAgICBub3RlIDE6IHN0cmluZ3MgYnkgcmVmZXJlbmNlKSwgYnV0IGluc3RlYWQgd2lsbCB0YWtlIHRoZSBuYW1lIG9mXG4gIC8vICAgICAgbm90ZSAxOiBhIGdsb2JhbCB2YXJpYWJsZSBhbmQgc2V0IHRoYXQgaW5zdGVhZC5cbiAgLy8gICAgICBub3RlIDE6IFdoZW4gdXNlZCBvbiBhbiBvYmplY3QsIGRlcGVuZHMgb24gYSBjb25zdHJ1Y3RvciBwcm9wZXJ0eVxuICAvLyAgICAgIG5vdGUgMTogYmVpbmcga2VwdCBvbiB0aGUgb2JqZWN0IHByb3RvdHlwZVxuICAvLyAgICAgIG5vdGUgMjogRGVwZW5kaW5nIG9uIHRoZSBgY2FsbGFibGVOYW1lYCB0aGF0IGlzIHBhc3NlZCwgdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGV2YWwuXG4gIC8vICAgICAgbm90ZSAyOiBUaGUgZXZhbCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDI6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDI6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2NhbGxhYmxlKCdpc19jYWxsYWJsZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19jYWxsYWJsZSgnYm9ndXNGdW5jdGlvbicsIHRydWUpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlIC8vIGdpdmVzIHRydWUgYmVjYXVzZSBkb2VzIG5vdCBkbyBzdHJpY3QgY2hlY2tpbmdcbiAgLy8gICBleGFtcGxlIDM6IGZ1bmN0aW9uIFNvbWVDbGFzcyAoKSB7fVxuICAvLyAgIGV4YW1wbGUgMzogU29tZUNsYXNzLnByb3RvdHlwZS5zb21lTWV0aG9kID0gZnVuY3Rpb24gKCl7fVxuICAvLyAgIGV4YW1wbGUgMzogdmFyIHRlc3RPYmogPSBuZXcgU29tZUNsYXNzKClcbiAgLy8gICBleGFtcGxlIDM6IGlzX2NhbGxhYmxlKFt0ZXN0T2JqLCAnc29tZU1ldGhvZCddLCB0cnVlLCAnbXlWYXInKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSBteVZhclxuICAvLyAgIHJldHVybnMgMzogJ1NvbWVDbGFzczo6c29tZU1ldGhvZCdcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2NhbGxhYmxlKGZ1bmN0aW9uICgpIHt9KVxuICAvLyAgIHJldHVybnMgNDogdHJ1ZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIG1ldGhvZCA9ICcnO1xuICB2YXIgdmFsaWRGdW5jdGlvbk5hbWUgPSBmYWxzZTtcblxuICB2YXIgZ2V0RnVuY05hbWUgPSBmdW5jdGlvbiBnZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcblxuICBpZiAodHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9ICRnbG9iYWw7XG4gICAgbWV0aG9kID0gbWl4ZWRWYXI7XG4gICAgbmFtZSA9IG1peGVkVmFyO1xuICAgIHZhbGlkRnVuY3Rpb25OYW1lID0gISFuYW1lLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMiAmJiBfdHlwZW9mKG1peGVkVmFyWzBdKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1peGVkVmFyWzFdID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9IG1peGVkVmFyWzBdO1xuICAgIG1ldGhvZCA9IG1peGVkVmFyWzFdO1xuICAgIG5hbWUgPSAob2JqLmNvbnN0cnVjdG9yICYmIGdldEZ1bmNOYW1lKG9iai5jb25zdHJ1Y3RvcikpICsgJzo6JyArIG1ldGhvZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3ludGF4T25seSB8fCB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoY2FsbGFibGVOYW1lKSB7XG4gICAgICAkZ2xvYmFsW2NhbGxhYmxlTmFtZV0gPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHZhbGlkRnVuY3Rpb25OYW1lIGF2b2lkcyBleHBsb2l0c1xuICBpZiAodmFsaWRGdW5jdGlvbk5hbWUgJiYgdHlwZW9mIGV2YWwobWV0aG9kKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2NhbGxhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2Zsb2F0KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfZmxvYXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogV2ViRGV2SG9ibyAoaHR0cDovL3dlYmRldmhvYm8uYmxvZ3Nwb3QuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgICAgbm90ZSAxOiAxLjAgaXMgc2ltcGxpZmllZCB0byAxIGJlZm9yZSBpdCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGZ1bmN0aW9uLCB0aGlzIG1ha2VzXG4gIC8vICAgICAgbm90ZSAxOiBpdCBkaWZmZXJlbnQgZnJvbSB0aGUgUEhQIGltcGxlbWVudGF0aW9uLiBXZSBjYW4ndCBmaXggdGhpcyB1bmZvcnR1bmF0ZWx5LlxuICAvLyAgIGV4YW1wbGUgMTogaXNfZmxvYXQoMTg2LjMxKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHJldHVybiArbWl4ZWRWYXIgPT09IG1peGVkVmFyICYmICghaXNGaW5pdGUobWl4ZWRWYXIpIHx8ICEhKG1peGVkVmFyICUgMSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2Zsb2F0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2ludChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2ludC9cbiAgLy8gb3JpZ2luYWwgYnk6IEFsZXhcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gIHJldmlzZWQgYnk6IE1hdHQgQnJhZGxleVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBub3RlIDE6IDEuMCBpcyBzaW1wbGlmaWVkIHRvIDEgYmVmb3JlIGl0IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgZnVuY3Rpb24sIHRoaXMgbWFrZXNcbiAgLy8gICAgICBub3RlIDE6IGl0IGRpZmZlcmVudCBmcm9tIHRoZSBQSFAgaW1wbGVtZW50YXRpb24uIFdlIGNhbid0IGZpeCB0aGlzIHVuZm9ydHVuYXRlbHkuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19pbnQoMjMpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19pbnQoJzIzJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19pbnQoMjMuNSlcbiAgLy8gICByZXR1cm5zIDM6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA0OiBpc19pbnQodHJ1ZSlcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG5cbiAgcmV0dXJuIG1peGVkVmFyID09PSArbWl4ZWRWYXIgJiYgaXNGaW5pdGUobWl4ZWRWYXIpICYmICEobWl4ZWRWYXIgJSAxKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19pbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfbnVsbChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX251bGwvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfbnVsbCgnMjMnKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzX251bGwobnVsbClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09IG51bGw7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfbnVsbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfbnVtZXJpYyhtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX251bWVyaWMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogRGF2aWRcbiAgLy8gaW1wcm92ZWQgYnk6IHRhaXRoXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBUaW0gZGUgS29uaW5nXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IERlbmlzIENoZW51IChodHRwOi8vc2hub3VsbGUubmV0KVxuICAvLyAgIGV4YW1wbGUgMTogaXNfbnVtZXJpYygxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19udW1lcmljKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19udW1lcmljKCcgKzE4Ni4zMWUyJylcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGlzX251bWVyaWMoJycpXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNTogaXNfbnVtZXJpYyhbXSlcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA2OiBpc19udW1lcmljKCcxICcpXG4gIC8vICAgcmV0dXJucyA2OiBmYWxzZVxuXG4gIHZhciB3aGl0ZXNwYWNlID0gWycgJywgJ1xcbicsICdcXHInLCAnXFx0JywgJ1xcZicsICdcXHgwYicsICdcXHhhMCcsICdcXHUyMDAwJywgJ1xcdTIwMDEnLCAnXFx1MjAwMicsICdcXHUyMDAzJywgJ1xcdTIwMDQnLCAnXFx1MjAwNScsICdcXHUyMDA2JywgJ1xcdTIwMDcnLCAnXFx1MjAwOCcsICdcXHUyMDA5JywgJ1xcdTIwMEEnLCAnXFx1MjAwQicsICdcXHUyMDI4JywgJ1xcdTIwMjknLCAnXFx1MzAwMCddLmpvaW4oJycpO1xuXG4gIC8vIEB0b2RvOiBCcmVhayB0aGlzIHVwIHVzaW5nIG1hbnkgc2luZ2xlIGNvbmRpdGlvbnMgd2l0aCBlYXJseSByZXR1cm5zXG4gIHJldHVybiAodHlwZW9mIG1peGVkVmFyID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnICYmIHdoaXRlc3BhY2UuaW5kZXhPZihtaXhlZFZhci5zbGljZSgtMSkpID09PSAtMSkgJiYgbWl4ZWRWYXIgIT09ICcnICYmICFpc05hTihtaXhlZFZhcik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfbnVtZXJpYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19vYmplY3QobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19vYmplY3QvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19vYmplY3QoJzIzJylcbiAgLy8gICByZXR1cm5zIDE6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19vYmplY3Qoe2ZvbzogJ2Jhcid9KVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfb2JqZWN0KG51bGwpXG4gIC8vICAgcmV0dXJucyAzOiBmYWxzZVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBtaXhlZFZhciAhPT0gbnVsbCAmJiAodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpID09PSAnb2JqZWN0Jztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19vYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19zY2FsYXIobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19zY2FsYXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vICAgZXhhbXBsZSAxOiBpc19zY2FsYXIoMTg2LjMxKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfc2NhbGFyKHswOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICByZXR1cm4gKC9ib29sZWFufG51bWJlcnxzdHJpbmcvLnRlc3QodHlwZW9mIG1peGVkVmFyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobWl4ZWRWYXIpKVxuICApO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX3NjYWxhci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfc3RyaW5nKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfc3RyaW5nL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IGlzX3N0cmluZygnMjMnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfc3RyaW5nKDIzLjUpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiB0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX3N0cmluZy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNzZXQoKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNzZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogRnJlbXlDb21wYW55XG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogaXNzZXQoIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDE6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAyOiBpc3NldCggJ0tldmluIHZhbiBab25uZXZlbGQnIClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICB2YXIgYSA9IGFyZ3VtZW50cztcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgdW5kZWY7XG5cbiAgaWYgKGwgPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtcHR5IGlzc2V0Jyk7XG4gIH1cblxuICB3aGlsZSAoaSAhPT0gbCkge1xuICAgIGlmIChhW2ldID09PSB1bmRlZiB8fCBhW2ldID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzc2V0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1dGY4X2VuY29kZShhcmdTdHJpbmcpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91dGY4X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHNvd2JlcnJ5XG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBZdmVzIFN1Y2FldFxuICAvLyBpbXByb3ZlZCBieToga2lyaWxsb2lkXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBVbHJpY2hcbiAgLy8gYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gICBleGFtcGxlIDE6IHV0ZjhfZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIGlmIChhcmdTdHJpbmcgPT09IG51bGwgfHwgdHlwZW9mIGFyZ1N0cmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyAucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpLnJlcGxhY2UoL1xcci9nLCBcIlxcblwiKTtcbiAgdmFyIHN0cmluZyA9IGFyZ1N0cmluZyArICcnO1xuICB2YXIgdXRmdGV4dCA9ICcnO1xuICB2YXIgc3RhcnQ7XG4gIHZhciBlbmQ7XG4gIHZhciBzdHJpbmdsID0gMDtcblxuICBzdGFydCA9IGVuZCA9IDA7XG4gIHN0cmluZ2wgPSBzdHJpbmcubGVuZ3RoO1xuICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZ2w7IG4rKykge1xuICAgIHZhciBjMSA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuICAgIHZhciBlbmMgPSBudWxsO1xuXG4gICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICBlbmQrKztcbiAgICB9IGVsc2UgaWYgKGMxID4gMTI3ICYmIGMxIDwgMjA0OCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiA2IHwgMTkyLCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2UgaWYgKChjMSAmIDB4RjgwMCkgIT09IDB4RDgwMCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiAxMiB8IDIyNCwgYzEgPj4gNiAmIDYzIHwgMTI4LCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vycm9nYXRlIHBhaXJzXG4gICAgICBpZiAoKGMxICYgMHhGQzAwKSAhPT0gMHhEODAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgdHJhaWwgc3Vycm9nYXRlIGF0ICcgKyBuKTtcbiAgICAgIH1cbiAgICAgIHZhciBjMiA9IHN0cmluZy5jaGFyQ29kZUF0KCsrbik7XG4gICAgICBpZiAoKGMyICYgMHhGQzAwKSAhPT0gMHhEQzAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgbGVhZCBzdXJyb2dhdGUgYXQgJyArIChuIC0gMSkpO1xuICAgICAgfVxuICAgICAgYzEgPSAoKGMxICYgMHgzRkYpIDw8IDEwKSArIChjMiAmIDB4M0ZGKSArIDB4MTAwMDA7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDE4IHwgMjQwLCBjMSA+PiAxMiAmIDYzIHwgMTI4LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH1cbiAgICBpZiAoZW5jICE9PSBudWxsKSB7XG4gICAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICB9XG4gICAgICB1dGZ0ZXh0ICs9IGVuYztcbiAgICAgIHN0YXJ0ID0gZW5kID0gbiArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIHN0cmluZ2wpO1xuICB9XG5cbiAgcmV0dXJuIHV0ZnRleHQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRmOF9lbmNvZGUuanMubWFwIiwiLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2NvdW50X3ZhbHVlcycgXSAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9jb3VudF92YWx1ZXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9maWxsJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmlsbCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbGxfa2V5cycgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWxsX2tleXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9maWx0ZXInIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmlsdGVyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmxpcCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZsaXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9rZXlfZXhpc3RzJyBdICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfa2V5X2V4aXN0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2tleXMnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9rZXlzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfbWFwJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21hcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3JldmVyc2UnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9yZXZlcnNlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfc2VhcmNoJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3NlYXJjaCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3N1bScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9zdW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV91bmlxdWUnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfdW5pcXVlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnY3VycmVudCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2N1cnJlbnQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdlbmQnIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvZW5kJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAna2V5JyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2tleScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ25leHQnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9uZXh0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncG9zJyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3BvcycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByZXYnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9wcmV2JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmFuZ2UnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3JhbmdlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmVzZXQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3Jlc2V0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc2l6ZW9mJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3NpemVvZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ25sMmJyJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL25sMmJyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbnVtYmVyX2Zvcm1hdCcgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbnVtYmVyX2Zvcm1hdCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByaW50ZicgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3NwcmludGYnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3NwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfcmVwZWF0JyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfcmVwZWF0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyX3NwbGl0JyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3NwbGl0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyX3dvcmRfY291bnQnIF0gICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3dvcmRfY291bnQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJpcF90YWdzJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJpcF90YWdzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyaXBzbGFzaGVzJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyaXBzbGFzaGVzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3Ryc3RyJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3Ryc3RyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RydHInIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydHInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2cHJpbnRmJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy92cHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndnNwcmludGYnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvdnNwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd3b3Jkd3JhcCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy93b3Jkd3JhcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByaW50X3InIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvcHJpbnRfcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3NlcmlhbGl6ZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvc2VyaWFsaXplJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndW5zZXJpYWxpemUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci91bnNlcmlhbGl6ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Zhcl9leHBvcnQnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvdmFyX2V4cG9ydCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Zhcl9kdW1wJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvdmFyX2R1bXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2ZXJzaW9uX2NvbXBhcmUnIF0gICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvaW5mby92ZXJzaW9uX2NvbXBhcmUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdsdHJpbScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9sdHJpbScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3J0cmltJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3J0cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndHJpbScgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvdHJpbScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3dhbGsnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV93YWxrJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfd2Fsa19yZWN1cnNpdmUnIF0gID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3dhbGtfcmVjdXJzaXZlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGF0ZV9wYXJzZScgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL2RhdGVfcGFyc2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdnZXRkYXRlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZ2V0ZGF0ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2Jhc2VuYW1lJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9maWxlc3lzdGVtL2Jhc2VuYW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGlybmFtZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vZGlybmFtZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3BhdGhpbmZvJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9maWxlc3lzdGVtL3BhdGhpbmZvJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGF0ZScgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL2RhdGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJ0b3RpbWUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvc3RydG90aW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaHR0cF9idWlsZF9xdWVyeScgXSAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfZG91YmxlJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19kb3VibGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19pbnRlZ2VyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2ludGVnZXInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19sb25nJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2xvbmcnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19yZWFsJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3JlYWwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc191bmljb2RlJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3VuaWNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19idWZmZXInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2J1ZmZlcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2RvdWJsZXZhbCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZG91YmxldmFsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZ2V0dHlwZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9nZXR0eXBlJyApO1xyXG5cclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV9tZXJnZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWVyZ2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfbWVyZ2VfcmVjdXJzaXZlJyBdID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlX3JlY3Vyc2l2ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV92YWx1ZXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfdmFsdWVzJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NvdW50JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9jb3VudCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbl9hcnJheScgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvaW5fYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnbWljcm90aW1lJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0aW1lJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvdGltZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjYWxsX3VzZXJfZnVuYycgXSAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY2FsbF91c2VyX2Z1bmNfYXJyYXknIF0gID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Z1bmN0aW9uX2V4aXN0cycgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9mdW5jdGlvbl9leGlzdHMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1bmlxaWQnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvbWlzYy91bmlxaWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZXhwbG9kZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbXBsb2RlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ21kNScgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwYXJzZV9zdHInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc3RyX3JlcGxhY2UnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc3RydG9sb3dlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJ0b3VwcGVyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jhc2U2NF9kZWNvZGUnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdiYXNlNjRfZW5jb2RlJyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwYXJzZV91cmwnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3BhcnNlX3VybCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Jhd3VybGRlY29kZScgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmF3dXJsZW5jb2RlJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxlbmNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1cmxkZWNvZGUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGRlY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VybGVuY29kZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jvb2x2YWwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvYm9vbHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdlbXB0eScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2VtcHR5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Zsb2F0dmFsJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZmxvYXR2YWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaW50dmFsJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pbnR2YWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYXJyYXknIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19ib29sJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2Jvb2wnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfY2FsbGFibGUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19jYWxsYWJsZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19mbG9hdCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2Zsb2F0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2ludCcgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfaW50JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX251bGwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVsbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19udW1lcmljJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX251bWVyaWMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfb2JqZWN0JyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc2NhbGFyJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19zY2FsYXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc3RyaW5nJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19zdHJpbmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNzZXQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc3NldCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwYXJzZV9hcmdzJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnanMtcGFyc2UtYXJncycgKTtcclxuXHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV90b19jc3YnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19jc3YnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9faHRtbF9hdHRyJyBdID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbF9hdHRyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX2h0bWwnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2h0bWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9fd2luZG93JyBdICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9fd2luZG93JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3dyYXBfYXJyYXknIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3dyYXBfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnb2tnJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvb2tnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ29rcycgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL29rcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwbGFpbl9vYmplY3QnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9wbGFpbl9vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfb2JqZWN0X2xpa2UnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfb2JqZWN0X2xpa2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYXJyYXlfbGlrZScgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfb2JqZWN0X2xpa2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY2xvbmVfb2JqZWN0JyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY2xvbmVfb2JqZWN0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2FmdGVyX2RhdGUnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2FmdGVyX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYmVmb3JlX2RhdGUnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfYmVmb3JlX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc2FtZV9kYXRlJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfc2FtZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Zvcm1hdF9kdXJhdGlvbicgXSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdkaWZmX2RheXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9kaWZmX2RheXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfdW5kZWZpbmVkJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdW5kZWZpbmVkJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3RhYl9mb2N1c2VkJyBdICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3RhYl9mb2N1c2VkJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3Njcm9sbF90b190b3AnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF90b190b3AnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY29weV90b19jbGlwJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY29weV90b19jbGlwJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3Njcm9sbF9wb3MnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF9wb3MnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfd2luZG93X2FyZycgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfd2luZG93X2FyZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICd3aW5kb3dfYXJnJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RldmljZV90eXBlJyBdICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RldmljZV90eXBlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RlYnVnJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RpbWVfdGFrZW4nICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndGltZV90YWtlbicgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdGltZV90YWtlbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwaXBlX2xvZycgXSAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9waXBlX2xvZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjb3VudGVyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3VudGVyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RvX2pxdWVyeScgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0b19qc19mdW5jJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qc19mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3JhbmRfbWQ1JyBdICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3JhbmRfbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3VybF9wYXJhbXMnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3VybF9wYXJhbXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncXVlcnlfc3RyaW5nJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcXVlcnlfc3RyaW5nJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2pxdWVyeScgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjc3NfdW5pdHMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jc3NfdW5pdHMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdqc29uX3RvX2NzdicgXSAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9qc29uX3RvX2NzdicgKTsiLCIvKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGFycmF5IGVsZW1lbnRzIGludG8gPGxpPiB0YWdzIGFuZCBhcHBlbmRzIHRoZW0gdG8gdGhlIGxpc3Qgb2YgdGhlIGdpdmVuIGlkLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCksIGFuZCBhbiBhbm9ueW1vdXMgaW5uZXIgY2xvc3VyZSB0byBjcmVhdGUgYSBsaXN0IG9mIGh0bWwgdGFncy5cclxuICogQHBhcmFtIGFyclxyXG4gKiBAcGFyYW0gbGlzdElEXHJcbiAqIEBwYXJhbSB0YWdcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggYXJyLCBsaXN0SUQsIHRhZyA9ICdsaScgKSA9PiAoIGVsID0+ICggKCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjJyArIGxpc3RJRCApICksICggZWwuaW5uZXJIVE1MICs9IGFyci5tYXAoIGl0ZW0gPT4gYDwke3RhZ30+JHtpdGVtfTwvJHt0YWd9PmAgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oICcnICkgKSApICkoKTsiLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5pbXBvcnQgaXNfb2JqZWN0X2xpa2UgZnJvbSAnLi9pc19vYmplY3RfbGlrZSc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEgKSA9PiB7XHJcblx0bGV0IHJldHVybl9odG1sID0gJyc7XHJcblx0Zm9yKCBsZXQgSSBpbiAkZGF0YSApIHtcclxuXHRcdGlmKCBpc19vYmplY3QoICRkYXRhWyBJIF0gKSApIHtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInO1xyXG5cdFx0XHRmb3IoIGxldCBLIGluICRkYXRhWyBJIF0gKSB7XHJcblx0XHRcdFx0bGV0ICR2YWx1ZSA9ICggaXNfb2JqZWN0X2xpa2UoICRkYXRhWyBJIF1bIEsgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXVsgSyBdICkgOiAkZGF0YVsgSSBdWyBLIF07XHJcblx0XHRcdFx0cmV0dXJuX2h0bWwgKz0gJHZhbHVlICsgJyAnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybl9odG1sICs9ICdcIic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgJHZhbHVlID0gKCBpc19vYmplY3RfbGlrZSggJGRhdGFbIEkgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXSApIDogJGRhdGFbIEkgXTtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInICsgJHZhbHVlICsgJ1wiICc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXR1cm5faHRtbDtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJGFycmF5ICkgPT4ge1xyXG5cdGZvciggbGV0ICRrZXkgaW4gJGFycmF5ICkge1xyXG5cdFx0d2luZG93WyAka2V5IF0gPSAkYXJyYXlbICRrZXkgXTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZXMgQSBDbG9uZSBvZiBnaXZlbiB2YWx1ZS5cclxuICogQHBhcmFtICRkYXRhXHJcbiAqIEByZXR1cm5zIHthbnl9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEgKSA9PiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggJGRhdGEgKSApOyIsIi8qKlxyXG4gKiBDb3B5IGEgc3RyaW5nIHRvIHRoZSBjbGlwYm9hcmQuIE9ubHkgd29ya3MgYXMgYSByZXN1bHQgb2YgdXNlciBhY3Rpb24gKGkuZS4gaW5zaWRlIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIpLlxyXG4gKiBDcmVhdGUgYSBuZXcgPHRleHRhcmVhPiBlbGVtZW50LCBmaWxsIGl0IHdpdGggdGhlIHN1cHBsaWVkIGRhdGEgYW5kIGFkZCBpdCB0byB0aGUgSFRNTCBkb2N1bWVudC5cclxuICogVXNlIFNlbGVjdGlvbi5nZXRSYW5nZUF0KCl0byBzdG9yZSB0aGUgc2VsZWN0ZWQgcmFuZ2UgKGlmIGFueSkuXHJcbiAqIFVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpIHRvIGNvcHkgdG8gdGhlIGNsaXBib2FyZC5cclxuICogUmVtb3ZlIHRoZSA8dGV4dGFyZWE+IGVsZW1lbnQgZnJvbSB0aGUgSFRNTCBkb2N1bWVudC4gRmluYWxseSwgdXNlIFNlbGVjdGlvbigpLmFkZFJhbmdlKCkgdG8gcmVjb3ZlciB0aGUgb3JpZ2luYWwgc2VsZWN0ZWQgcmFuZ2UgKGlmIGFueSkuXHJcbiAqIEBwYXJhbSBzdHJcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gc3RyID0+IHtcclxuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZXh0YXJlYScgKTtcclxuXHRlbC52YWx1ZSA9IHN0cjtcclxuXHRlbC5zZXRBdHRyaWJ1dGUoICdyZWFkb25seScsICcnICk7XHJcblx0ZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdGVsLnN0eWxlLmxlZnQgICAgID0gJy05OTk5cHgnO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGVsICk7XHJcblx0Y29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yYW5nZUNvdW50ID4gMCA/IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoIDAgKSA6IGZhbHNlO1xyXG5cdGVsLnNlbGVjdCgpO1xyXG5cdGRvY3VtZW50LmV4ZWNDb21tYW5kKCAnY29weScgKTtcclxuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKCBlbCApO1xyXG5cdGlmKCBzZWxlY3RlZCApIHtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UoIHNlbGVjdGVkICk7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBDcmVhdGVzIGEgY291bnRlciB3aXRoIHRoZSBzcGVjaWZpZWQgcmFuZ2UsIHN0ZXAgYW5kIGR1cmF0aW9uIGZvciB0aGUgc3BlY2lmaWVkIHNlbGVjdG9yLlxyXG4gKiBDaGVjayBpZiBzdGVwIGhhcyB0aGUgcHJvcGVyIHNpZ24gYW5kIGNoYW5nZSBpdCBhY2NvcmRpbmdseS5cclxuICogVXNlIHNldEludGVydmFsKCkgaW4gY29tYmluYXRpb24gd2l0aCBNYXRoLmFicygpIGFuZCBNYXRoLmZsb29yKCkgdG8gY2FsY3VsYXRlIHRoZSB0aW1lIGJldHdlZW4gZWFjaCBuZXcgdGV4dCBkcmF3LlxyXG4gKiBVc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigpLmlubmVySFRNTCB0byB1cGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50LlxyXG4gKiBPbWl0IHRoZSBmb3VydGggcGFyYW1ldGVyLCBzdGVwLCB0byB1c2UgYSBkZWZhdWx0IHN0ZXAgb2YgMS4gT21pdCB0aGUgZmlmdGggcGFyYW1ldGVyLCBkdXJhdGlvbiwgdG8gdXNlIGEgZGVmYXVsdCBkdXJhdGlvbiBvZiAyMDAwbXMuXHJcbiAqIEBwYXJhbSBzZWxlY3RvclxyXG4gKiBAcGFyYW0gc3RhcnRcclxuICogQHBhcmFtIGVuZFxyXG4gKiBAcGFyYW0gc3RlcFxyXG4gKiBAcGFyYW0gZHVyYXRpb25cclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBzZWxlY3Rvciwgc3RhcnQsIGVuZCwgc3RlcCA9IDEsIGR1cmF0aW9uID0gMjAwMCApID0+IHtcclxuXHRsZXQgY3VycmVudCA9IHN0YXJ0LFxyXG5cdFx0X3N0ZXAgICA9ICggZW5kIC0gc3RhcnQgKSAqIHN0ZXAgPCAwID8gLXN0ZXAgOiBzdGVwLFxyXG5cdFx0dGltZXIgICA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblx0XHRcdGN1cnJlbnQgKz0gX3N0ZXA7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gY3VycmVudDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBlbmQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGNsZWFySW50ZXJ2YWwoIHRpbWVyICk7XHJcblx0XHR9LCBNYXRoLmFicyggTWF0aC5mbG9vciggZHVyYXRpb24gLyAoIGVuZCAtIHN0YXJ0ICkgKSApICk7XHJcblx0cmV0dXJuIHRpbWVyO1xyXG59OyIsImNvbnN0IGlzTnVtYmVyaWMgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX251bWVyaWMnICk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB7XHJcblx0dmFyIHMgPSB2YWw7XHJcblx0aWYoIGlzTnVtYmVyaWMoIHZhbCApICkge1xyXG5cdFx0cmV0dXJuIHZhbCArICdweCc7XHJcblx0fSBlbHNlIGlmKCB2YWwuaW5kZXhPZiggJ3B4JyApID4gLTEgfHwgdmFsLmluZGV4T2YoICclJyApID4gLTEgfHwgdmFsLmluZGV4T2YoICdlbScgKSA+IC0xICkge1xyXG5cdFx0bGV0IGNoZWNrUHggID0gcy5yZXBsYWNlKCAncHgnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrUGN0ID0gcy5yZXBsYWNlKCAnJScsICcnICk7XHJcblx0XHRsZXQgY2hlY2tFbSAgPSBzLnJlcGxhY2UoICdlbScsICcnICk7XHJcblx0XHRpZiggaXNOdW1iZXJpYyggY2hlY2tQeCApIHx8IGlzTnVtYmVyaWMoIGNoZWNrUGN0ICkgfHwgaXNOdW1iZXJpYyggY2hlY2tFbSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcwcHgnO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJzBweCc7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBEZXRlY3RzIHdldGhlciB0aGUgd2Vic2l0ZSBpcyBiZWluZyBvcGVuZWQgaW4gYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIFVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IHByb3BlcnR5IHRvIGZpZ3VyZSBvdXQgaWYgdGhlIGRldmljZSBpcyBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPyAnTW9iaWxlJyA6ICdEZXNrdG9wJzsiLCIvKipcclxuICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gZGF0ZXMuXHJcbiAqIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gRGF0ZSBvYmplY3RzLlxyXG4gKiBAcGFyYW0gZGF0ZUluaXRpYWxcclxuICogQHBhcmFtIGRhdGVGaW5hbFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVJbml0aWFsLCBkYXRlRmluYWwgKSA9PiAoIGRhdGVGaW5hbCAtIGRhdGVJbml0aWFsICkgLyAoIDEwMDAgKiAzNjAwICogMjQgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgaHVtYW4gcmVhZGFibGUgZm9ybWF0IG9mIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gKiBEaXZpZGUgbXMgd2l0aCB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIHRvIG9idGFpbiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIGZvciBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIGFuZCBtaWxsaXNlY29uZC5cclxuICogVXNlIE9iamVjdC5lbnRyaWVzKCkgd2l0aCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKCkgdG8ga2VlcCBvbmx5IG5vbi16ZXJvIHZhbHVlcy5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSB0byBjcmVhdGUgdGhlIHN0cmluZyBmb3IgZWFjaCB2YWx1ZSwgcGx1cmFsaXppbmcgYXBwcm9wcmlhdGVseS5cclxuICogVXNlIFN0cmluZy5wcm90b3R5cGUuam9pbignLCAnKSB0byBjb21iaW5lIHRoZSB2YWx1ZXMgaW50byBhIHN0cmluZy5cclxuICogQHBhcmFtIG1zXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IG1zID0+IHtcclxuXHRpZiggbXMgPCAwICkgbXMgPSAtbXM7XHJcblx0Y29uc3QgdGltZSA9IHtcclxuXHRcdGRheTogTWF0aC5mbG9vciggbXMgLyA4NjQwMDAwMCApLFxyXG5cdFx0aG91cjogTWF0aC5mbG9vciggbXMgLyAzNjAwMDAwICkgJSAyNCxcclxuXHRcdG1pbnV0ZTogTWF0aC5mbG9vciggbXMgLyA2MDAwMCApICUgNjAsXHJcblx0XHRzZWNvbmQ6IE1hdGguZmxvb3IoIG1zIC8gMTAwMCApICUgNjAsXHJcblx0XHRtaWxsaXNlY29uZDogTWF0aC5mbG9vciggbXMgKSAlIDEwMDBcclxuXHR9O1xyXG5cdHJldHVybiBPYmplY3QuZW50cmllcyggdGltZSApXHJcblx0XHRcdFx0IC5maWx0ZXIoIHZhbCA9PiB2YWxbIDEgXSAhPT0gMCApXHJcblx0XHRcdFx0IC5tYXAoICggWyBrZXksIHZhbCBdICkgPT4gYCR7dmFsfSAke2tleX0ke3ZhbCAhPT0gMSA/ICdzJyA6ICcnfWAgKVxyXG5cdFx0XHRcdCAuam9pbiggJywgJyApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYWZ0ZXIgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvciAoPikgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYWZ0ZXIgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPiBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGJlZm9yZSBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgbGVzcyB0aGFuIG9wZXJhdG9yICg8KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBiZWZvcmUgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPCBkYXRlQjsiLCJpbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gJy4vaXNfdW5kZWZpbmVkJztcclxuaW1wb3J0IGlzX3N0cmluZyBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfc3RyaW5nJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBnaXZlbiBPYmplY3QgLyBWYWx1ZSBpcyBhIGpRdWVyeSBJbnN0YW5jZS5cclxuICogQHBhcmFtICRlbGVtXHJcbiAqIEByZXR1cm5zIHtib29sZWFufCp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRlbGVtICkgJiYgZmFsc2UgPT09IGlzX3N0cmluZyggJGVsZW0gKSAmJiAkZWxlbS5qUXVlcnkgKTsiLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5pbXBvcnQgaXNfYXJyYXkgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5JztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpcyBvYmplY3QtbGlrZS5cclxuICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBudWxsIGFuZCBpdHMgdHlwZW9mIGlzIGVxdWFsIHRvICdvYmplY3QnLlxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIHZhbCApID0+IHtcclxuXHRyZXR1cm4gKCBpc19vYmplY3QoIHZhbCApIHx8IGlzX2FycmF5KCB2YWwgKSApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgdGhlIHNhbWUgYXMgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKSBhbmQgc3RyaWN0IGVxdWFsaXR5IGNoZWNraW5nICg9PT0pIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBLnRvSVNPU3RyaW5nKCkgPT09IGRhdGVCLnRvSVNPU3RyaW5nKCk7IiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciB0YWIgb2YgdGhlIHBhZ2UgaXMgZm9jdXNlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKiBVc2UgdGhlIERvY3VtZW50LmhpZGRlbiBwcm9wZXJ0eSwgaW50cm9kdWNlZCBieSB0aGUgUGFnZSBWaXNpYmlsaXR5IEFQSSB0byBjaGVjayBpZiB0aGUgYnJvd3NlciB0YWIgb2YgdGhlIHBhZ2UgaXMgdmlzaWJsZSBvciBoaWRkZW4uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAhZG9jdW1lbnQuaGlkZGVuOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB1bmRlZmluZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBzdHJpY3QgZXF1YWxpdHkgb3BlcmF0b3IgdG8gY2hlY2sgaWYgdGhlIHZhbHVlIGFuZCBvZiB2YWwgYXJlIGVxdWFsIHRvIHVuZGVmaW5lZC5cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IHZhbCA9PT0gdW5kZWZpbmVkOyIsImltcG9ydCBpc191bmRlZmluZWQgZnJvbSAnLi9pc191bmRlZmluZWQnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB3aW5kb3cgaGFzIGdpdmVuIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5ICkgPT4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3dbICRrZXkgXSApICk7IiwibGV0ICRPS1MgICAgICAgPSAoIHByb3BlcnRpZXMsIG9iaiwgZGVmYXVsdFZhbHVlLCBkZWxpbWl0ZXIgPSAnLycgKSA9PiB7XHJcblx0cHJvcGVydGllcyAgID0gKCB0eXBlb2YgcHJvcGVydGllcyA9PT0gJ3N0cmluZycgKSA/IHByb3BlcnRpZXMuc3BsaXQoIGRlbGltaXRlciApIDogWyBwcm9wZXJ0aWVzIF07XHJcblx0bGV0IHByb3BlcnR5ID0gcHJvcGVydGllcy5zaGlmdCgpO1xyXG5cclxuXHRpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxuXHJcblx0aWYoIHByb3BlcnRpZXMubGVuZ3RoICkge1xyXG5cdFx0cHJvcGVydGllcyA9IHByb3BlcnRpZXMuam9pbiggZGVsaW1pdGVyICk7XHJcblx0XHRyZXR1cm4gJE9LUyggcHJvcGVydGllcywgb2JqWyBwcm9wZXJ0eSBdLCBkZWZhdWx0VmFsdWUsIGRlbGltaXRlciApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gb2JqWyBwcm9wZXJ0eSBdO1xyXG5cdH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSAkT0tTOyIsImxldCAkT0tTICAgICAgID0gKCBwcm9wZXJ0aWVzLCB2YWx1ZSwgb2JqLCBkZWxpbWl0ZXIgPSAnLycgKSA9PiB7XHJcblx0cHJvcGVydGllcyAgID0gKCB0eXBlb2YgcHJvcGVydGllcyA9PT0gJ3N0cmluZycgKSA/IHByb3BlcnRpZXMuc3BsaXQoIGRlbGltaXRlciApIDogWyBwcm9wZXJ0aWVzIF07XHJcblx0bGV0IHByb3BlcnR5ID0gcHJvcGVydGllcy5zaGlmdCgpO1xyXG5cclxuXHRpZiggcHJvcGVydGllcy5sZW5ndGggKSB7XHJcblx0XHRwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5qb2luKCBkZWxpbWl0ZXIgKTtcclxuXHJcblx0XHRpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdG9ialsgcHJvcGVydHkgXSA9IHt9O1xyXG5cdFx0fSBlbHNlIGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdICE9PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKCAnT2JqZWN0IHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiIGFscmVhZHkgaGFzIG5vbiBvYmplY3QgdmFsdWU6Jywgb2JqWyBwcm9wZXJ0eSBdLCAnSXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGFuIGVtcHR5IG9iamVjdCcgKTtcclxuXHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHR9IGVsc2UgaWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0ubGVuZ3RoICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0aWYoICggL15bMC05XSskLyApLnRlc3QoIHByb3BlcnR5ICkgKSB7XHJcblx0XHRcdFx0cHJvcGVydHkgPSBwYXJzZUludCggcHJvcGVydHkgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUcnkgdG8gc2V0IG5vbiBudW1lcmljIHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiIHRvIGFycmF5OicsIG9ialsgcHJvcGVydHkgXSwgJ1RoZSBhcnJheSB3aWxsIGJlIGJlIHJlcGxhY2VkIHdpdGggYW4gZW1wdHkgb2JqZWN0JyApO1xyXG5cdFx0XHRcdG9ialsgcHJvcGVydHkgXSA9IHt9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQkT0tTKCBwcm9wZXJ0aWVzLCB2YWx1ZSwgb2JqWyBwcm9wZXJ0eSBdLCBkZWxpbWl0ZXIgKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0b2JqWyBwcm9wZXJ0eSBdID0gdmFsdWU7XHJcblx0fVxyXG5cdHJldHVybiBvYmo7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gJE9LUzsiLCIvKipcclxuICogTG9ncyBhIHZhbHVlIGFuZCByZXR1cm5zIGl0LlxyXG4gKiBVc2UgY29uc29sZS5sb2cgdG8gbG9nIHRoZSBzdXBwbGllZCB2YWx1ZSwgY29tYmluZWQgd2l0aCB0aGUgfHwgb3BlcmF0b3IgdG8gcmV0dXJuIGl0LlxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZGF0YSA9PiBjb25zb2xlLmxvZyggZGF0YSApIHx8IGRhdGE7IiwibW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAoIHR5cGVvZiBPYmplY3RbICdjcmVhdGUnIF0gIT09ICd1bmRlZmluZWQnICkgPyBPYmplY3QuY3JlYXRlKCBudWxsICkgOiB7fTsiLCIvKipcclxuICogUmV0dXJuIHZhbHVlIGZyb20gUXVlcnlTdHJpbmdcclxuICogQHBhcmFtIG5hbWVcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBuYW1lICkgPT4ge1xyXG5cdG5hbWUgICAgICAgID0gbmFtZS5yZXBsYWNlKCAvW1xcW10vLCBcIlxcXFxbXCIgKS5yZXBsYWNlKCAvW1xcXV0vLCBcIlxcXFxdXCIgKTtcclxuXHR2YXIgcmVnZXggICA9IG5ldyBSZWdFeHAoIFwiW1xcXFw/Jl1cIiArIG5hbWUgKyBcIj0oW14mI10qKVwiICksXHJcblx0XHRyZXN1bHRzID0gcmVnZXguZXhlYyggbG9jYXRpb24uc2VhcmNoICk7XHJcblx0cmV0dXJuIHJlc3VsdHMgPT0gbnVsbCA/IFwiXCIgOiBkZWNvZGVVUklDb21wb25lbnQoIHJlc3VsdHNbIDEgXS5yZXBsYWNlKCAvXFwrL2csIFwiIFwiICkgKTtcclxufTsiLCJpbXBvcnQgbWQ1IGZyb20gJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JztcclxuXHJcbi8qKlxyXG4gKiBVbmlxdWUgcmFuZG9tIG1kNVxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiBTdHJpbmcoIG1kNSggTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICkgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHBhZ2UuXHJcbiAqIFVzZSBwYWdlWE9mZnNldCBhbmQgcGFnZVlPZmZzZXQgaWYgdGhleSBhcmUgZGVmaW5lZCwgb3RoZXJ3aXNlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcC4gWW91IGNhbiBvbWl0IGVsIHRvIHVzZSBhIGRlZmF1bHQgdmFsdWUgb2Ygd2luZG93LlxyXG4gKiBAcGFyYW0gZWxcclxuICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZWwgPSB3aW5kb3cgKSA9PiAoIHtcclxuXHR4OiBlbC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVhPZmZzZXQgOiBlbC5zY3JvbGxMZWZ0LFxyXG5cdHk6IGVsLnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWU9mZnNldCA6IGVsLnNjcm9sbFRvcFxyXG59ICk7IiwiLyoqXHJcbiAqIFNtb290aC1zY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXHJcbiAqIEdldCBkaXN0YW5jZSBmcm9tIHRvcCB1c2luZyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIG9yIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLlxyXG4gKiBTY3JvbGwgYnkgYSBmcmFjdGlvbiBvZiB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wLiBVc2Ugd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHRvIGFuaW1hdGUgdGhlIHNjcm9sbGluZy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xyXG5cdGNvbnN0IGMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdGlmKCBjID4gMCApIHtcclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjcm9sbFRvVG9wICk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oIDAsIGMgLSBjIC8gOCApO1xyXG5cdH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggY2FsbGJhY2ssIHRpdGxlID0gJ1RpbWVUYWtlbicgKSA9PiB7XHJcblx0Y29uc29sZS50aW1lKCB0aXRsZSApO1xyXG5cdGNvbnN0IHIgPSBjYWxsYmFjaygpO1xyXG5cdGNvbnNvbGUudGltZUVuZCggdGl0bGUgKTtcclxuXHRyZXR1cm4gcjtcclxufTsiLCJpbXBvcnQgaXNfanF1ZXJ5IGZyb20gJy4vaXNfanF1ZXJ5JztcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIEdpdmVuIFN0cmluZyBpbnRvIEEgalF1ZXJ5IE9iamVjdC5cclxuICogQHBhcmFtICRlbGVtXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4ge1xyXG5cdGlmKCBmYWxzZSA9PT0gaXNfanF1ZXJ5KCAkZWxlbSApICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeSggJGVsZW0gKTtcclxuXHR9XHJcblx0cmV0dXJuICRlbGVtO1xyXG59OyIsImltcG9ydCBpc19vYmplY3RfbGlrZSBmcm9tICcuL2lzX29iamVjdF9saWtlJztcclxuaW1wb3J0IHZhbGlkYXRlSlNGdW5jIGZyb20gJy4vdmFsaWRhdGVTaW5nbGVKU0Z1bmMnO1xyXG5pbXBvcnQgZW1wdHkgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2VtcHR5JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSwgJGFyZ3Nfa2V5ID0gJ2pzX2FyZ3MnLCAkY29udGVudHNfa2V5ID0gJ2pzX2NvbnRlbnRzJyApID0+IHtcclxuXHRpZiggdHJ1ZSA9PT0gaXNfb2JqZWN0X2xpa2UoICRkYXRhICkgKSB7XHJcblx0XHRmb3IoIGxldCAka2V5IGluICRkYXRhICkge1xyXG5cdFx0XHRpZiggIWVtcHR5KCAkZGF0YVsgJGtleSBdICkgKSB7XHJcblx0XHRcdFx0JGRhdGFbICRrZXkgXSA9IHZhbGlkYXRlSlNGdW5jKCAkZGF0YVsgJGtleSBdLCAkYXJnc19rZXksICRjb250ZW50c19rZXkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gJGRhdGE7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBjdXJyZW50IFVSTC5cclxuICogVXNlIFN0cmluZy5tYXRjaCgpIHdpdGggYW4gYXBwcm9wcmlhdGUgcmVndWxhciBleHByZXNzaW9uIHRvIGdldCBhbGwga2V5LXZhbHVlIHBhaXJzLFxyXG4gKiBBcnJheS5wcm90b3R5cGUucmVkdWNlKCkgdG8gbWFwIGFuZCBjb21iaW5lIHRoZW0gaW50byBhIHNpbmdsZSBvYmplY3QuXHJcbiAqIFBhc3MgbG9jYXRpb24uc2VhcmNoIGFzIHRoZSBhcmd1bWVudCB0byBhcHBseSB0byB0aGUgY3VycmVudCB1cmwuXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge1QgfCB7fX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdXJsID0+XHJcblx0KCB1cmwubWF0Y2goIC8oW14/PSZdKykoPShbXiZdKikpL2cgKSB8fCBbXSApLnJlZHVjZShcclxuXHRcdCggYSwgdiApID0+ICggKCBhWyB2LnNsaWNlKCAwLCB2LmluZGV4T2YoICc9JyApICkgXSA9IHYuc2xpY2UoIHYuaW5kZXhPZiggJz0nICkgKyAxICkgKSwgYSApLFxyXG5cdFx0e31cclxuXHQpOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSBcImxvY3V0dXMvcGhwL3Zhci9pc19vYmplY3RcIjtcclxuaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tIFwiLi9pc191bmRlZmluZWRcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkc3RyaW5nLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBpc19vYmplY3QoICRzdHJpbmcgKSAmJiBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc3RyaW5nWyAkYXJnc19rZXkgXSApIHx8IGZhbHNlID09PSBpc191bmRlZmluZWQoICRzdHJpbmdbICRjb250ZW50c19rZXkgXSApICkge1xyXG5cdFx0bGV0ICRhcmdzICAgICA9ICggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRhcmdzX2tleSBdO1xyXG5cdFx0bGV0ICRjb250ZW50cyA9ICggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdID09PSBmYWxzZSApID8gZmFsc2UgOiAkc3RyaW5nWyAkY29udGVudHNfa2V5IF07XHJcblx0XHRpZiggJGFyZ3MgPT09IGZhbHNlICYmICRjb250ZW50cyAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIGlmKCAkYXJncyAhPT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGFyZ3MsICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICRzdHJpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkc3RyaW5nO1xyXG59O1xyXG4iLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgSlMgT2JqZWN0IEludG8gV2luZG93IEFyZ3MuXHJcbiAqIEBwYXJhbSAka2V5XHJcbiAqIEBwYXJhbSAkdmFsdWVcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5LCAkdmFsdWUgKSA9PiB7XHJcblx0aWYoIGlzX29iamVjdCggJGtleSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJF9rIGluICRrZXkgKSB7XHJcblx0XHRcdHdpbmRvd1sgJF9rIF0gPSAka2V5WyAkX2sgXTtcclxuXHRcdH1cclxuXHR9XHJcblx0d2luZG93WyAka2V5IF0gPSAkdmFsdWU7XHJcbn07IiwiLyoqXHJcbiAqIENhc3RzIHRoZSBwcm92aWRlZCB2YWx1ZSBhcyBhbiBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUuaXNBcnJheSgpIHRvIGRldGVybWluZSBpZiB2YWwgaXMgYW4gYXJyYXkgYW5kIHJldHVybiBpdCBhcy1pcyBvciBlbmNhcHN1bGF0ZWQgaW4gYW4gYXJyYXkgYWNjb3JkaW5nbHkuXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMgeypbXX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXSk7IiwiLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuaW1wb3J0IHtcblx0YXJyYXlfbWVyZ2UsXG5cdGNhbGxfdXNlcl9mdW5jLFxuXHRjbG9uZV9vYmplY3QsXG5cdGlzX2pxdWVyeSxcblx0aXNfbnVsbCxcblx0aXNfb2JqZWN0X2xpa2UsXG5cdGlzX3VuZGVmaW5lZCxcblx0aXNfd2luZG93X2FyZyxcblx0bWQ1LFxuXHRtaWNyb3RpbWUsXG5cdHJhbmRfbWQ1LFxuXHRzdHJ0b2xvd2VyLFxuXHR0b19qcXVlcnksXG5cdHRvX2pzX2Z1bmMsXG59IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQT25pb24ge1xuXHRzdGF0aWMganNfZnVuYyggJGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRvX2pzX2Z1bmMoICRkYXRhLCAnd3Bvbmlvbl9qc19hcmdzJywgJ3dwb25pb25fanNfY29udGVudHMnICk7XG5cdH1cblxuXHRzdGF0aWMgcmFuZF9pZCgpIHtcblx0XHRyZXR1cm4gbWQ1KCAnd3Bvbmlvbl9yYW5kXycgKyBtaWNyb3RpbWUoKSArIHJhbmRfbWQ1KCkgKTtcblx0fVxuXG5cdHN0YXRpYyB2YWxpZF9qc29uKCBvYmogKSB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2UoIG9iaiApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBBIFNpbmdsZSBDbGFzcyBGb3IgdGhlIEdpdmVuIEVsZW1lbnQuXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHN0YXRpYyBnZXRfZmllbGRfY2xhc3MoICR0eXBlICkge1xuXHRcdCR0eXBlID0gc3RydG9sb3dlciggJHR5cGUgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3cud3Bvbmlvbl9maWVsZHNbICR0eXBlIF0gKSApIHtcblx0XHRcdHJldHVybiB3aW5kb3cud3Bvbmlvbl9maWVsZHNbICR0eXBlIF07XG5cdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3dbICd3cG9uaW9uXycgKyAkdHlwZSArICdfZmllbGQnIF0gKSApIHtcblx0XHRcdHJldHVybiB3aW5kb3dbICd3cG9uaW9uXycgKyAkdHlwZSArICdfZmllbGQnIF07XG5cdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3dbICR0eXBlIF0gKSApIHtcblx0XHRcdHJldHVybiB3aW5kb3dbICR0eXBlIF07XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkIElELlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgZmllbGRJRCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuIHRvX2pxdWVyeSggJGVsZW0gKS5hdHRyKCAnZGF0YS13cG9uaW9uLWpzaWQnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBGaWVsZCBIVE1MIE9iamVjdCBVc2luZyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkd2hlcmVfdG9fZmluZFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzdGF0aWMgSUR0b0VsZW1lbnQoICRlbGVtLCAkd2hlcmVfdG9fZmluZCA9IGZhbHNlICkge1xuXHRcdGxldCAkaWQgPSBXUE9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0aWYoIGZhbHNlICE9PSAkd2hlcmVfdG9fZmluZCAmJiBpc19qcXVlcnkoICR3aGVyZV90b19maW5kICkgKSB7XG5cdFx0XHRyZXR1cm4gJHdoZXJlX3RvX2ZpbmQuZmluZCggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiJyApO1xuXHRcdH1cblx0XHRyZXR1cm4galF1ZXJ5KCAnLndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkaWQgKyAnXCJdJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBnaXZlbiB2YWx1ZSBpcyBhbiBqUXVlcnkgaW5zdGFuY2UuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc0ZpZWxkKCAkZWxlbSApIHtcblx0XHRyZXR1cm4gKCBpc19qcXVlcnkoICRlbGVtICkgKSA/ICggdGhpcy5maWVsZElEKCAkZWxlbSApICkgOiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIFdpbmRvdyBBcmdzLlxuXHQgKiBAcGFyYW0gJHZhcl9pZFxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgd2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRyZXR1cm4gKCBpc193aW5kb3dfYXJnKCAkdmFyX2lkICkgKSA/IHdpbmRvd1sgJHZhcl9pZCBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzICYgUmV0dXJucyBGaWVsZCBBcmdzLlxuXHQgKiBAcGFyYW0gJHZhcl9pZFxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgZmllbGRBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdCR2YXJfaWQgPSAoIHRoaXMuaXNGaWVsZCggJHZhcl9pZCApICkgPyB0aGlzLmZpZWxkSUQoICR2YXJfaWQgKSA6ICR2YXJfaWQ7XG5cdFx0cmV0dXJuICggJHZhcl9pZCApID8gY2xvbmVfb2JqZWN0KCB0aGlzLndpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ICkgKSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoY2VrcyBhbmQgcmV0dXJucyBnbG9iYWwgdHJhbnNsYXRpb24gc3RyaW5nLlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyB0eHQoICRrZXksICRkZWZhdWx0ID0gJ3N0cmluZ19kZWZhdWx0X25vdF9mb3VuZCcgKSB7XG5cdFx0cmV0dXJuICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggV1BPbmlvbi50ZXh0WyAka2V5IF0gKSApID8gV1BPbmlvbi50ZXh0WyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIExvYWRpbmcgU2NyZWVuLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICRpc19zaG93XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGxvYWRpbmdfc2NyZWVuKCAkZWxlbSwgJGlzX3Nob3cgPSB0cnVlICkge1xuXHRcdCRlbGVtID0gdG9fanF1ZXJ5KCAkZWxlbSApLmZpbmQoICcucGFnZS1sb2FkZXInICk7XG5cdFx0aWYoIHRydWUgPT09ICRpc19zaG93ICkge1xuXHRcdFx0cmV0dXJuICRlbGVtLmZhZGVJbiggJ3Nsb3cnICk7XG5cdFx0fVxuXHRcdHJldHVybiAkZWxlbS5mYWRlT3V0KCAnc2xvdycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEdsb2JhbCBEZWJ1ZyBWaWV3IFBPUFVQLlxuXHQgKi9cblx0c3RhdGljIGdsb2JhbF9kZWJ1ZygpIHtcblx0XHRsZXQgJGhhbmRsZSA9IGpRdWVyeSggJ2Eud3Bvbmlvbi1nbG9iYWwtZGVidWctaGFuZGxlJyApLFxuXHRcdFx0JGpzb24gICA9IHt9O1xuXHRcdGlmKCBXUE9uaW9uLmRlYnVnX2luZm8gPT09IG51bGwgJiYgJGhhbmRsZS5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRkZWZpbmVkX3ZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKTtcblx0XHRcdGlmKCBpc19vYmplY3RfbGlrZSggJGRlZmluZWRfdmFycyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICRkZWZpbmVkX3ZhcnMgKSB7XG5cdFx0XHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApICkge1xuXHRcdFx0XHRcdFx0JGpzb25bICRkZWZpbmVkX3ZhcnNbICRrZXkgXSBdID0gV1BPbmlvbi53aW5kb3dBcmdzKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0V1BPbmlvbi5kZWJ1Z19pbmZvID0gJGpzb247XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JGhhbmRsZS5vbiggJ2NsaWNrJywgKCAoIGUgKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzd2FsKCB7XG5cdFx0XHRcdHRpdGxlOiBXUE9uaW9uLnR4dCggJ2dsb2JhbF9qc29uX291dHB1dCcsICdHbG9iYWwgV1BPbmlvbiBEZWJ1ZyBEYXRhJyApLFxuXHRcdFx0XHRodG1sOiBqUXVlcnkoICcjd3BvbmlvbmRlYnVnaW5mb3BvcHVwID4gZGl2JyApLFxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFdQT25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0dldCBKU09OIE91dHB1dCcgKSxcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCkgPT4gc3dhbC5lbmFibGVMb2FkaW5nKCksXG5cdFx0XHRcdG9uT3BlbjogKCkgPT4ge1xuXHRcdFx0XHRcdGpRdWVyeSggJyNzd2FsMi1jb250ZW50ICN3cG9uaW9uLWdsb2JhbC1kZWJ1Zy1jb250ZW50JyApLmpzb25WaWV3KCBXUE9uaW9uLmRlYnVnX2luZm8gKTtcblx0XHRcdFx0XHRzd2FsLmRpc2FibGVMb2FkaW5nKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XG5cdFx0XHRcdGlmKCByZXN1bHQudmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN3YWwoIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAnNjAwcHgnLFxuXHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggV1BPbmlvbi5kZWJ1Z19pbmZvICkgKyAnPC90ZXh0YXJlYT4nLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBhbmQgUmV0cml2ZXMgVmFsdWVzIGZyb20gJHdwb25pb24uc2V0dGluZ3Ncblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIG9wdGlvbiggJGtleSwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRsZXQgJGFyZ3MgPSBXUE9uaW9uLnNldHRpbmdzX2FyZ3M7XG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApIHtcblx0XHRcdHJldHVybiAkYXJnc1sgJGtleSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0cnVlIGlmIFdQT25pb24gRGVidWcgaXMgZW5hYmxlZC5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNfZGVidWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnZGVidWcnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2F0aGVyIEFsbCBGaWVsZCBKUyBDb2Rlcy5cblx0ICovXG5cdHN0YXRpYyBmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggV1BPbmlvbi5pc19kZWJ1ZygpICYmIGlzX251bGwoIFdQT25pb24uZmllbGRfZGVidWdfaW5mbyApICkge1xuXHRcdFx0bGV0ICR2YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICksXG5cdFx0XHRcdCRqc29uID0ge30sXG5cdFx0XHRcdCR1dHh0ID0gV1BPbmlvbi50eHQoICd1bm1vZGlmaWVkX2RlYnVnJyApLFxuXHRcdFx0XHQkbXR4dCA9IFdQT25pb24udHh0KCAnbW9kaWZpZWRfZGVidWcnICk7XG5cblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHZhcnMgKSB7XG5cdFx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRkYXRhICAgICAgICAgICAgICAgICAgICAgICA9IFdQT25pb24ud2luZG93QXJncyggJHZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF0gICAgICAgICAgPSB7fTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkdXR4dCBdID0gJGRhdGEuZGVidWdfaW5mbyB8fCAkZGF0YTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkbXR4dCBdID0ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFdQT25pb24uZmllbGRfZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDdXN0b20gQWpheCBXcmFwcGVyIEZvciBqUXVlcnkuQWpheCgpXG5cdCAqIEBwYXJhbSAkYWN0aW9uXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKiBAcGFyYW0gJG9uU3VjY2Vzc1xuXHQgKiBAcGFyYW0gJG9uRXJyb3Jcblx0ICogQHBhcmFtICRvbkFsd2F5c1xuXHQgKi9cblx0c3RhdGljIGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSwgJG9uU3VjY2VzcyA9IGZhbHNlLCAkb25FcnJvciA9IGZhbHNlLCAkb25BbHdheXMgPSBmYWxzZSApIHtcblx0XHRsZXQgJGRlZmF1bHRzID0ge1xuXHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0dXJsOiBXUE9uaW9uLm9wdGlvbiggJ2FqYXhfdXJsJyApLFxuXHRcdFx0XHRvblN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0XHRvbkFsd2F5czogZmFsc2UsXG5cdFx0XHRcdG9uRXJyb3I6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdCRhamF4ICAgICA9IGZhbHNlO1xuXG5cdFx0aWYoIGlzX29iamVjdF9saWtlKCAkYWN0aW9uICkgKSB7XG5cdFx0XHQkZGF0YSA9ICRhY3Rpb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRkZWZhdWx0cy51cmwgKz0gJyYnICsgV1BPbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICkgKyAnPScgKyAkYWN0aW9uO1xuXHRcdH1cblxuXHRcdCRkZWZhdWx0cyAgPSBhcnJheV9tZXJnZSggJGRlZmF1bHRzLCAkZGF0YSApO1xuXHRcdCRvblN1Y2Nlc3MgPSAoIGlzX3VuZGVmaW5lZCggJG9uU3VjY2VzcyApIHx8IGZhbHNlID09PSAkb25TdWNjZXNzICkgPyAkZGVmYXVsdHMub25TdWNjZXNzIDogJG9uU3VjY2Vzcztcblx0XHQkb25BbHdheXMgID0gKCBpc191bmRlZmluZWQoICRvbkVycm9yICkgfHwgZmFsc2UgPT09ICRvbkVycm9yICkgPyAkZGVmYXVsdHMub25BbHdheXMgOiAkb25BbHdheXM7XG5cdFx0JG9uRXJyb3IgICA9ICggaXNfdW5kZWZpbmVkKCAkb25BbHdheXMgKSB8fCBmYWxzZSA9PT0gJG9uQWx3YXlzICkgPyAkZGVmYXVsdHMub25FcnJvciA6ICRvbkVycm9yO1xuXHRcdCRhamF4ICAgICAgPSBqUXVlcnkuYWpheCggJGRlZmF1bHRzICk7XG5cblxuXHRcdGlmKCAkb25TdWNjZXNzICkge1xuXHRcdFx0JGFqYXguZG9uZSggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uU3VjY2VzcywgcmVzICkgKTtcblx0XHR9XG5cblx0XHRpZiggJG9uRXJyb3IgKSB7XG5cdFx0XHQkYWpheC5mYWlsKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25FcnJvciwgcmVzICkgKTtcblx0XHR9XG5cblx0XHRpZiggJG9uQWx3YXlzICkge1xuXHRcdFx0JGFqYXguYWx3YXlzKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25BbHdheXMsIHJlcyApICk7XG5cdFx0fVxuXHRcdHJldHVybiAkYWpheDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFdQT25pb24gVGVtcGxhdGUgZm9yIHVuZGVyc2NvcmUuXG5cdCAqIEBwYXJhbSAkaWRcblx0ICogQHJldHVybnMge2Z1bmN0aW9uKCo9KTogKn1cblx0ICovXG5cdHN0YXRpYyB0ZW1wbGF0ZSggJGlkICkge1xuXHRcdGxldCBjb21waWxlZCxcblx0XHRcdG9wdGlvbnMgPSB7XG5cdFx0XHRcdGV2YWx1YXRlOiAvPCMoW1xcc1xcU10rPykjPi9nLFxuXHRcdFx0XHRpbnRlcnBvbGF0ZTogL1xce1xce1xceyhbXFxzXFxTXSs/KVxcfVxcfVxcfS9nLFxuXHRcdFx0XHRlc2NhcGU6IC9cXHtcXHsoW15cXH1dKz8pXFx9XFx9KD8hXFx9KS9nLFxuXHRcdFx0XHR2YXJpYWJsZTogJ2RhdGEnXG5cdFx0XHR9O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhICkge1xuXHRcdFx0Y29tcGlsZWQgPSBjb21waWxlZCB8fCBfLnRlbXBsYXRlKCAkaWQsIG9wdGlvbnMgKTtcblx0XHRcdHJldHVybiBjb21waWxlZCggZGF0YSApO1xuXHRcdH07XG5cdH1cblxuXHQvL0B0b2RvIE1pZ3JhdGUgUGx1Z2luIERlYnVnIEluZm8uXG59XG4iLCJpbXBvcnQgeyBhcnJheV9tZXJnZSwgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0c3RhdGljIGFkZCggJGtleSwgJHZhbHVlICkge1xuXHRcdGlmKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXG5cdFx0aWYoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gJHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9IGFycmF5X21lcmdlKCAkdmFsdWUsIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGdldCggJGtleSwgJGRlZmF1bHQgPSBmYWxzZSApIHtcblx0XHRpZiggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiAoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApID8gJGRlZmF1bHQgOiB0aGlzLmRlYnVnX2luZm9bICRrZXkgXTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9oZWxwZXJzL2RlcGVuZGVuY3knO1xuaW1wb3J0IHsgYXJyYXlfbWVyZ2UgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciggJGVsZW1lbnQgPSB1bmRlZmluZWQsIHBhcmFtID0ge30gKSB7XG5cdFx0dGhpcy5wYXJhbSAgICAgICAgID0gYXJyYXlfbWVyZ2UoIHsgbmVzdGFibGU6IGZhbHNlLCBwYXJlbnQ6IGZhbHNlIH0sIHBhcmFtICk7XG5cdFx0bGV0ICR0aGlzICAgICAgICAgID0gdGhpcztcblx0XHR0aGlzLmJhc2UgICAgICAgICAgPSB7fTtcblx0XHR0aGlzLmJhc2UuJGVsICAgICAgPSAkZWxlbWVudDtcblx0XHR0aGlzLmJhc2UuaW5pdCAgICAgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmJhc2UucnVsZXNldCA9IGpRdWVyeS5kZXBzLmNyZWF0ZVJ1bGVzZXQoKTtcblx0XHRcdHRoaXMuYmFzZS5kZXBSb290KCk7XG5cdFx0XHRqUXVlcnkuZGVwcy5lbmFibGUoIHRoaXMuYmFzZS4kZWwsIHRoaXMuYmFzZS5ydWxlc2V0LCB7XG5cdFx0XHRcdHNob3c6ICggZWwgKSA9PiBlbC5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKSxcblx0XHRcdFx0aGlkZTogKCBlbCApID0+IGVsLmFkZENsYXNzKCAnaGlkZGVuJyApLFxuXHRcdFx0XHRsb2c6IGZhbHNlLFxuXHRcdFx0XHRjaGVja1RhcmdldHM6IGZhbHNlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cdFx0dGhpcy5iYXNlLmluc3RhbmNlID0gW107XG5cdFx0dGhpcy5iYXNlLmRlcFJvb3QgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLiRlbC5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJy53cG9uaW9uLWhhcy1kZXBlbmRlbmN5JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlzLmJhc2UuaW5zdGFuY2UgPSBuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgJHRoaXMuYmFzZS5ydWxlc2V0LCB7XG5cdFx0XHRcdFx0XHRuZXN0YWJsZTogJHRoaXMucGFyYW0ubmVzdGFibGUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6ICggdHJ1ZSA9PT0gJHRoaXMucGFyYW0ubmVzdGFibGUgKSA/ICR0aGlzLmJhc2UuJGVsIDogJHRoaXMucGFyYW0ucGFyZW50LFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHR0aGlzLmJhc2UuaW5pdCgpO1xuXHR9XG59XG4iLCIvL2ltcG9ydCB7IGFycmF5X21lcmdlLCBlbXB0eSwgaXNfY2FsbGFibGUsIGlzX2pxdWVyeSwgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG4vL2NvbnN0IHRvX2pxdWVyeSAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLnRvX2pxdWVyeTtcbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbi8qIGdsb2JhbCBjb25zb2xlOnRydWUgKi9cblxuY29uc3QgYXJyYXlfbWVyZ2UgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuYXJyYXlfbWVyZ2U7XG5jb25zdCBlbXB0eSAgICAgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5lbXB0eTtcbmNvbnN0IGlzX2NhbGxhYmxlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2NhbGxhYmxlO1xuY29uc3QgaXNfanF1ZXJ5ICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfanF1ZXJ5O1xuY29uc3QgaXNfdW5kZWZpbmVkID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfdW5kZWZpbmVkO1xuXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuL2RlYnVnJztcbmltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuL21vZHVsZSc7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBBYnN0cmFjdCBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0LCAkY29uZmlnID0gbnVsbCApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udGV4dCApO1xuXHRcdHRoaXMuc2V0X2FyZ3MoIGZhbHNlICk7XG5cdFx0dGhpcy5maWVsZF9kZWJ1ZygpO1xuXHRcdHRoaXMuY29uZmlnID0gJGNvbmZpZztcblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmpzX2Vycm9yX2hhbmRsZXIoKTtcblx0XHR0aGlzLmpzX3ZhbGlkYXRvcigpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdH1cblxuXHRqc19lcnJvcl9oYW5kbGVyKCBlbGVtZW50ID0gdGhpcy5lbGVtZW50ICkge1xuXHRcdGVsZW1lbnQub24oICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsICc+IC53cG9uaW9uLWZpZWxkc2V0IDppbnB1dCcsICggZSwgZGF0YSApID0+IHRoaXMuanNfZXJyb3IoIGRhdGEgKSApO1xuXHR9XG5cblx0anNfdmFsaWRhdG9yKCkge1xuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApICkge1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApIHtcblx0XHRcdFx0dGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aGFuZGxlX2FyZ3MoICRhcmcsICRrZXkgPSBmYWxzZSApIHtcblx0XHRsZXQgJGFyZ3MgICA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKSxcblx0XHRcdCRleGlzdHMgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cblx0XHRpZiggZmFsc2UgPT09ICRrZXkgKSB7XG5cdFx0XHQkZXhpc3RzWyAnSlMgQXJncycgXSA9ICRhcmdzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZXhpc3RzWyAnSlMgQXJncycgXVsgJGtleSBdID0gJGFyZ3M7XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCAkZXhpc3RzICk7XG5cdFx0cmV0dXJuICRhcmdzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIGZhbHNlICE9PSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCAkaW5mbyA9IHRoaXMub3B0aW9uKCAnZGVidWdfaW5mbycgKSxcblx0XHRcdCRhcnIgID0ge307XG5cblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGluZm8gKSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gZW1wdHkoICRpbmZvICkgKSB7XG5cdFx0XHRcdCRhcnJbICdSYXcgRmllbGQgQXJncycgXSA9ICRpbmZvWyAnUmF3IEZpZWxkIEFyZ3MnIF07XG5cdFx0XHRcdCRhcnIuRmllbGQgICAgICAgICAgICAgICA9ICRpbmZvWyAnRmllbGQgQXJncycgXTtcblx0XHRcdFx0JGFyclsgJ0ZpZWxkIEVycm9ycycgXSAgID0gJGluZm9bICdGaWVsZCBFcnJvcnMnIF07XG5cdFx0XHRcdCRhcnJbICdGaWVsZCBWYWx1ZScgXSAgICA9ICRpbmZvWyAnRmllbGQgVmFsdWUnIF07XG5cdFx0XHRcdCRhcnJbICdQbHVnaW4gSUQnIF0gICAgICA9ICRpbmZvWyAnUGx1Z2luIElEJyBdO1xuXHRcdFx0XHQkYXJyLk1vZHVsZSAgICAgICAgICAgICAgPSAkaW5mby5Nb2R1bGU7XG5cdFx0XHRcdCRhcnIuVW5pcXVlICAgICAgICAgICAgICA9ICRpbmZvLlVuaXF1ZTtcblx0XHRcdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ1BIUCBBcmdzJzogJGFyciwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0ICRmb3VuZCA9IGZhbHNlO1xuXHRcdGlmKCAhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdGxldCAkSUQgICA9IHRoaXMuaWQoKSxcblx0XHRcdFx0JGVsZW0gPSBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyAkSUQgKyAnXScgKTtcblx0XHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRcdCRmb3VuZCA9ICRlbGVtO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZm91bmQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHNlICE9PSAkZm91bmQgKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKVxuXHRcdFx0XHQgIC5hdHRyKCAndGl0bGUnLCAkd3Bvbmlvbi50eHQoICdjbGlja190b192aWV3X2RlYnVnX2luZm8nLCAnQ2xpY2sgVG8gVmlldyBGaWVsZCBEZWJ1ZyBJbmZvJyApIClcblx0XHRcdFx0ICAudGlwcHkoIHtcblx0XHRcdFx0XHQgIGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdCAgYXJyb3dUeXBlOiAncm91bmQnLFxuXHRcdFx0XHRcdCAgcGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0XHQgIHRoZW1lOiAnbGlnaHQnLFxuXHRcdFx0XHRcdCAgYW5pbWF0aW9uOiAnc2NhbGUnXG5cdFx0XHRcdCAgfSApO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGQgICAgICAgICAgPSAkdGhpcy5pZCgpICsgJ2RlYnVnSU5GTycsXG5cdFx0XHRcdFx0JG5vdGljZV90eHQgPSAnPHAgY2xhc3M9XFwnd3Bvbmlvbi1maWVsZC1kZWJ1Zy1ub3RpY2VcXCc+JyArICR3cG9uaW9uLm9wdGlvbiggJ2RlYnVnX25vdGljZScgKSArICc8L3A+Jyxcblx0XHRcdFx0XHQkZWxlbSAgICAgICA9IGpRdWVyeSggJzxkaXYgaWQ9XCInICsgJGQgKyAnXCIgY2xhc3M9XCJ3cG9uaW9uLWZpZWxkLWRlYnVnLXBvcHVwXCIgPjxkaXYgaWQ9XCInICsgJGQgKyAnXCIgPjwvZGl2PicgKyAkbm90aWNlX3R4dCArICc8L2Rpdj4nICk7XG5cdFx0XHRcdGxldCAkZGF0YSAgICAgICA9ICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApO1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0aHRtbDogJGVsZW0sXG5cdFx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6ICR3cG9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdBcyBKU09OJyApLFxuXHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdFx0b25PcGVuOiAoKSA9PiBqUXVlcnkoICcjc3dhbDItY29udGVudCA+IGRpdiA+ICMnICsgJGQgKS5qc29uVmlldyggJGRhdGEgKVxuXHRcdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApICkgKyAnPC90ZXh0YXJlYT4nXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0b3B0aW9ucygpIHtcblx0XHRpZiggdGhpcy5fYXJncyA9PT0gZmFsc2UgKSB7XG5cdFx0XHR0aGlzLl9hcmdzID0gJHdwb25pb24ud2luZG93QXJncyggdGhpcy5pZCgpICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9hcmdzO1xuXHR9XG5cblx0b3B0aW9uKCAka2V5ID0gJycsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gdGhpcy5vcHRpb25zKCk7XG5cdFx0cmV0dXJuICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkgPyAkYXJnc1sgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHRpZCgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICk7XG5cdH1cblxuXHRtb2R1bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnbW9kdWxlJywgZmFsc2UgKTtcblx0fVxuXG5cdHBsdWdpbl9pZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdwbHVnaW5faWQnLCBmYWxzZSApO1xuXHR9XG5cblx0YWpheCggJGFjdGlvbiA9ICcnLCAkZGF0YSA9IHt9ICkge1xuXHRcdGxldCAkYWpheF9rZXkgICAgICAgICA9ICR3cG9uaW9uLm9wdGlvbiggJ2FqYXhfYWN0aW9uX2tleScgKTtcblx0XHRsZXQgJGRlZmF1bHQgICAgICAgICAgPSB7XG5cdFx0XHRwbHVnaW5faWQ6IHRoaXMucGx1Z2luX2lkKCksXG5cdFx0XHRtb2R1bGU6IHRoaXMubW9kdWxlKCksXG5cdFx0fTtcblx0XHQkZGVmYXVsdFsgJGFqYXhfa2V5IF0gPSAkYWN0aW9uO1xuXHRcdCRkYXRhLmRhdGEgICAgICAgICAgICA9ICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGRhdGEuZGF0YSApICkgPyBhcnJheV9tZXJnZSggJGRlZmF1bHQsICRkYXRhLmRhdGEgKSA6ICRkZWZhdWx0O1xuXG5cdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICRkYXRhICk7XG5cdH1cblxuXHRpbml0X2ZpZWxkKCAkZWxlbSwgJHR5cGUgKSB7XG5cdFx0bGV0ICRfaW5zdGFuY2VzID0gW107XG5cdFx0aWYoICFpc19qcXVlcnkoICRlbGVtICkgKSB7XG5cdFx0XHQkZWxlbSA9IHRoaXMuZWxlbWVudC5maW5kKCAkZWxlbSApO1xuXHRcdH1cblx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXHRcdCRlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRjbGFzcyA9ICR3cG9uaW9uLmdldF9maWVsZF9jbGFzcyggJHR5cGUgKTtcblx0XHRcdGlmKCBmYWxzZSAhPT0gJGNsYXNzICkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmKCBpc19jYWxsYWJsZSggJGNsYXNzICkgKSB7XG5cdFx0XHRcdFx0XHQkX2luc3RhbmNlcy5wdXNoKCBuZXcgJGNsYXNzKCBqUXVlcnkoIHRoaXMgKSApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBqUXVlcnkoIHRoaXMgKSApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCAnRXJyb3I6ICcgKyBlICsgJyB8IEZvciA6ICcgKyAkdHlwZSApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRyZWxvYWQoKSB7XG5cdFx0d3AuaG9va3MuYWRkQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX3JlbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWljb25fcGlja2VyJywgJ2ljb25fcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZm9udF9waWNrZXInLCAnZm9udF9zZWxlY3RvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWFjY29yZGlvbicsICdhY2NvcmRpb24nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1ncm91cCcsICdncm91cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHQ6bm90KC53cG9uaW9uLWlucHV0bWFzayknLCAndGV4dCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHRhcmVhJywgJ3RleHRhcmVhJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja2dyb3VuZCcsICdiYWNrZ3JvdW5kJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2Vfc2VsZWN0JywgJ2ltYWdlX3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNlbGVjdCcsICdzZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zd2l0Y2hlcicsICdzd2l0Y2hlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BhbGV0dGUnLCAnY29sb3JfcGFsZXR0ZScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2VkaXRvcicsICd3cF9lZGl0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1maWVsZHNldCcsICdmaWVsZHNldCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICdpbnB1dFtkYXRhLXdwb25pb24taW5wdXRtYXNrXScsICdpbnB1dG1hc2snICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC13cF9saW5rJywgJ3dwX2xpbmtzJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2hlY2tib3gnLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1yYWRpbycsICdjaGVja2JveF9yYWRpbycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWtleV92YWx1ZScsICdrZXl2YWx1ZV9wYWlyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGlja2VyJywgJ2NvbG9yX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWRhdGVfcGlja2VyJywgJ2RhdGVfcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ2FsbGVyeScsICdnYWxsZXJ5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdXBsb2FkJywgJ3VwbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlJywgJ2ltYWdlX3VwbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRhYicsICdqcXVlcnlfdGFiJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWZpZWxkLXRvb2x0aXAnLCAnZmllbGRfdG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdvb2dsZV9tYXBzJywgJ2dvb2dsZV9tYXBzJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWhlbHAnLCAnZmllbGRfdG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi13cmFwLXRvb2x0aXAnLCAnZmllbGRfdG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNsb25lJywgJ2Nsb25lX2VsZW1lbnQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdDInLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuY2hvc2VuJywgJ2Nob3NlbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuc2VsZWN0aXplJywgJ3NlbGVjdGl6ZScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNvcnRlcicsICdzb3J0ZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10eXBvZ3JhcGh5JywgJ3R5cG9ncmFwaHknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1vZW1iZWQnLCAnb2VtYmVkJyApO1xuXHRcdHdwLmhvb2tzLmFkZEFjdGlvbiggJ3dwb25pb25fYWZ0ZXJfZmllbGRzX3JlbG9hZCcgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldF9hcmdzKCAkYXJncyApIHtcblx0XHR0aGlzLl9hcmdzID0gJGFyZ3M7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRfZmllbGRfcGFyZW50X2J5X2lkKCAkZWxlbSApIHtcblx0XHRsZXQgJElEID0gJHdwb25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRyZXR1cm4galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkSUQgKyAnXCJdJyApO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0ICkge1xuXHRcdGlmKCAhJHNlbGVjdG9yLmpRdWVyeSApIHtcblx0XHRcdCRzZWxlY3RvciA9IGpRdWVyeSggJHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0X2VsZW1lbnQoICRzZWxlY3RvciApO1xuXHRcdHRoaXMuc2V0X2NvbnR4dCggJGNvbnRleHQgKTtcblx0XHR0aGlzLm1vZHVsZV9pbml0KCk7XG5cdH1cblxuXHRtb2R1bGVfaW5pdCgpIHtcblx0fVxuXG5cdHNldF9lbGVtZW50KCAkZWxlbSApIHtcblx0XHRpZiggISRlbGVtLmpRdWVyeSApIHtcblx0XHRcdCRlbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdH1cblx0XHR0aGlzLmVsZW0gPSAkZWxlbTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldF9jb250eHQoICRjb250eHQgKSB7XG5cdFx0dGhpcy5jb250ZXh0ID0gJGNvbnR4dDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldCBob29rKCkge1xuXHRcdHJldHVybiB3aW5kb3cud3AuaG9va3M7XG5cdH1cblxuXHRnZXQgZWxlbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtO1xuXHR9XG5cblx0Z2V0IGNvbnR4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0O1xuXHR9XG5cbn1cbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQT25pb25fVmFsaWRhdG9yIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5mb3JtICA9IFdQT25pb25fVmFsaWRhdG9yLmdldF9mb3JtKCk7XG5cdFx0dGhpcy5ydWxlcyA9IHtcblx0XHRcdGludmFsaWRIYW5kbGVyOiAoKSA9PiB7XG5cdFx0XHRcdGpRdWVyeSggJyNwdWJsaXNoJyApLnJlbW92ZUNsYXNzKCAnYnV0dG9uLXByaW1hcnktZGlzYWJsZWQnICk7XG5cdFx0XHRcdGpRdWVyeSggJyNhamF4LWxvYWRpbmcnICkuYXR0ciggJ3N0eWxlJywgJycgKTtcblx0XHRcdFx0dGhpcy5mb3JtLnNpYmxpbmdzKCAnI21lc3NhZ2UnICkucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuZm9ybS5iZWZvcmUoICc8ZGl2IGlkPVwibWVzc2FnZVwiIGNsYXNzPVwiZXJyb3JcIj48cD4nICsgJHdwb25pb24udHh0KCAndmFsaWRhdGlvbl9zdW1tYXJ5JyApICsgJzwvcD48L2Rpdj4nICk7XG5cdFx0XHR9LFxuXHRcdFx0aWdub3JlOiBmYWxzZSxcblx0XHRcdGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiggZXJyb3IsIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGVsZW1lbnQudHJpZ2dlciggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgeyBlcnJvciwgZWxlbWVudCB9ICk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3JDbGFzczogJ3dwb25pb24tZXJyb3InLFxuXHRcdFx0ZXJyb3JFbGVtZW50OiAncCdcblx0XHR9O1xuXHRcdHRoaXMuZm9ybS52YWxpZGF0ZSggdGhpcy5ydWxlcyApO1xuXHR9XG5cblx0c3RhdGljIGdldF9mb3JtKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApO1xuXHRcdH1cblx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYWNjb3JkaW9uKCB7XG5cdFx0XHRcdGhlYWRlcjogJz4gLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdGFuaW1hdGU6IDE1MCxcblx0XHRcdFx0aGVpZ2h0U3R5bGU6ICdjb250ZW50Jyxcblx0XHRcdFx0YWN0aXZlOiBqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2lzX29wZW4nICksXG5cdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0J2hlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LXJpZ2h0Jyxcblx0XHRcdFx0XHQnYWN0aXZlSGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctZG93bidcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0Lndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGlucHV0cyA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dJyApLm9uKCAnY2xpY2snLCAoKSA9PiAkaW5wdXRzLnJlbW92ZUF0dHIoICduYW1lJyApICk7XG5cblx0XHRcdCRpbnB1dHMub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5maW5kKCAnaW5wdXRbdHlwZT1yYWRpb10saW5wdXRbdHlwZT1jaGVja2JveF0nICkucHJvcCggJ2NoZWNrZWQnLCB0cnVlICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5jaG9zZW4oIHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnY2hvc2VuJywge30gKSApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbi8qIGdsb2JhbCBzZXRUaW1lb3V0OnRydWUgKi9cbi8qIGdsb2JhbCB3cG9uaW9uX2ZpZWxkOnRydWUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgICAgICAgID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjbG9uZScsIHt9ICkgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGNsb25lX3dyYXAgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tY2xvbmUtd3JhcCcgKSxcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtYWRkXScgKSxcblx0XHRcdC8vJHJlbW92ZV9idG4gPSAkY2xvbmVfd3JhcC5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1yZW1vdmVdJyApLFxuXHRcdFx0JGxpbWl0ICAgICAgPSAoICRhcmcubGltaXQgIT09IHVuZGVmaW5lZCApID8gJGFyZy5saW1pdCA6IGZhbHNlLFxuXHRcdFx0Ly8kaXNfdG9hc3QgICA9ICggJGFyZy50b2FzdF9lcnJvciAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLnRvYXN0X2Vycm9yIDogdHJ1ZSxcblx0XHRcdCRlcm9yX21zZyAgID0gJGFyZy5lcnJvcl9tc2csXG5cdFx0XHQkc29ydCAgICAgICA9ICggJGFyZy5zb3J0ICE9PSBmYWxzZSApID8ge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tZmllbGQtY2xvbmUtc29ydGVyJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWNsb25lci1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKSxcblx0XHRcdFx0c3RvcDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKSxcblx0XHRcdH0gOiBmYWxzZTtcblxuXHRcdCRjbG9uZV93cmFwLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46ICRhZGRfYnRuLFxuXHRcdFx0bGltaXQ6ICRsaW1pdCxcblx0XHRcdGNsb25lX2VsZW06ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRyZW1vdmVfYnRuOiAnYS53cG9uaW9uLXJlbW92ZScsXG5cdFx0XHR0ZW1wbGF0ZTogJHRoaXMub3B0aW9uKCAnY2xvbmVfdGVtcGxhdGUnICksXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlICkgPT4gd3Bvbmlvbl9maWVsZCggJGUuZmluZCggJz4gZGl2Lndwb25pb24tZmllbGQtY2xvbmU6bGFzdC1jaGlsZCcgKSApLnJlbG9hZCgpLFxuXHRcdFx0c29ydGFibGU6ICRzb3J0LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvKmlmKCAkaXNfdG9hc3QgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0Ly8gQHRvZG8gQWRkIFRvYXN0IE9wdGlvbi5cblx0XHRcdFx0XHQvISp3cG8udG9zdCgge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJlcnJvclwiLFxuXHRcdFx0XHRcdFx0dGl0bGU6ICRlcm9yX21zZyxcblx0XHRcdFx0XHR9ICk7KiEvXG5cdFx0XHRcdH0gZWxzZSB7Ki9cblx0XHRcdFx0bGV0ICRodG1sID0galF1ZXJ5KCAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj4nICsgJGVyb3JfbXNnICsgJzwvZGl2PicgKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLnByZXBlbmQoICRodG1sICk7XG5cdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuZmFkZUluKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJF9fRSA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+ICRfX0UuZmFkZU91dCggJ3Nsb3cnLCAoKSA9PiAkX19FLnJlbW92ZSgpICksIDEwMDAgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQvL31cblx0XHRcdH0sXG5cdFx0XHRzaG93X2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLnNob3csXG5cdFx0XHRoaWRlX2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLmhpZGUsXG5cdFx0fSApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS53cENvbG9yUGlja2VyKCk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ3NldHRpbmdzJyApICksXG5cdFx0XHQkdmlldztcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc2V0dGluZ3MudGhlbWUgKSApIHtcblx0XHRcdCR2aWV3ID0gJHNldHRpbmdzLnRoZW1lO1xuXHRcdFx0ZGVsZXRlICRzZXR0aW5ncy50aGVtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHZpZXcgPSAnZGVmYXVsdCc7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0alF1ZXJ5KCAnYm9keScgKVxuXHRcdFx0XHQuYXBwZW5kKCBqUXVlcnkoICc8ZGl2IGNsYXNzPVwid3Bvbmlvbi1kYXRlcGlja2VyLScgKyAkdmlldyArICdcIiBpZD1cIicgKyB0aGlzLmlkKCkgKyAnXCI+PC9kaXY+JyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1kYXRlcGlja2VyLXJhbmdlJyApICkge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKVsgMCBdO1xuXHRcdFx0aWYoICRzZXR0aW5ncy5wbHVnaW5zID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zID0gW107XG5cdFx0XHR9XG5cblx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zLnB1c2goIG5ldyByYW5nZVBsdWdpbiggeyBpbnB1dDogJGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLXRvLWRhdGVdJyApWyAwIF0gfSApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItZnJvbS1kYXRlXScgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQnICkuZmxhdHBpY2tyKCAkc2V0dGluZ3MgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGdldCB3ZWJzYWZlKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl93ZWJzYWZlX2ZvbnRzJyApO1xuXHR9XG5cblx0Z2V0IGdvb2dsZV9mb250cygpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ2ZvbnRzJyApO1xuXHR9XG5cblx0YnVpbGRfb3B0aW9ucyggZGF0YSApIHtcblx0XHRsZXQgJHJldHVybiA9ICcnO1xuXHRcdGZvciggbGV0ICRfZCBpbiBkYXRhICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIGRhdGFbICRfZCBdICkgKSB7XG5cdFx0XHRcdCRyZXR1cm4gKz0gYDxvcHRpb24gdmFsdWU9XCIkeyRfZH1cIj4ke2RhdGFbICRfZCBdfTwvb3B0aW9uPmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHRsZXQgJHZhbCAgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpLFxuXHRcdFx0XHQkaHRtbCA9IG51bGw7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLndlYnNhZmUuZm9udHMgWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMud2Vic2FmZS52YXJpYW50cyApO1xuXHRcdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgJHZhcmlhbnQgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkuaHRtbCggJGh0bWwgKTtcblxuXHRcdFx0aWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnY2hvc2VuJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hvc2VuOnVwZGF0ZWQnICk7XG5cdFx0XHR9IGVsc2UgaWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnc2VsZWN0MicgKSApIHtcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGh0bWxfdGVtcCA9ICR0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXG5cdFx0XHQkaW5wdXQgICAgID0gJGVsZW0uZmluZCggJ2lucHV0I2ltYWdlX2lkJyApLFxuXHRcdFx0JHByZXZpZXcgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3JyApLFxuXHRcdFx0d3BfbWVkaWFfZnJhbWUsXG5cdFx0XHQkYWRkICAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1hZGRdJyApLFxuXHRcdFx0JGVkaXQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktZWRpdF0nICksXG5cdFx0XHQkY2xlYXIgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1jbGVhcl0nICksXG5cdFx0XHQkbWFuYWdlICAgID0gZnVuY3Rpb24oICR0eXBlICkge1xuXHRcdFx0XHRsZXQgaWRzICAgPSAkaW5wdXQudmFsKCksXG5cdFx0XHRcdFx0d2hhdCAgPSAoICR0eXBlID09PSAnZWRpdCcgKSA/ICdlZGl0JyA6ICdhZGQnLFxuXHRcdFx0XHRcdHN0YXRlID0gKCB3aGF0ID09PSAnYWRkJyAmJiAhaWRzLmxlbmd0aCApID8gJ2dhbGxlcnknIDogJ2dhbGxlcnktZWRpdCc7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cblx0XHRcdFx0aWYoIHN0YXRlID09PSAnZ2FsbGVyeScgKSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdFx0XHRmcmFtZTogJ3Bvc3QnLFxuXHRcdFx0XHRcdFx0c3RhdGU6ICdnYWxsZXJ5Jyxcblx0XHRcdFx0XHRcdG11bHRpcGxlOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhLmdhbGxlcnkuZWRpdCggJ1tnYWxsZXJ5IGlkcz1cIicgKyBpZHMgKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCB3aGF0ID09PSAnYWRkJyApIHtcblx0XHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLnNldFN0YXRlKCAnZ2FsbGVyeS1saWJyYXJ5JyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAndXBkYXRlJywgZnVuY3Rpb24oIHNlbGVjdGlvbiApIHtcblx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRJZHMgPSBzZWxlY3Rpb24ubW9kZWxzLm1hcCggZnVuY3Rpb24oIGF0dGFjaG1lbnQgKSB7XG5cdFx0XHRcdFx0XHRsZXQgaXRlbSA9IGF0dGFjaG1lbnQudG9KU09OKCk7XG5cdFx0XHRcdFx0XHRpZiggaXRlbS5zaXplcyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCB0aHVtYiA9ICggdHlwZW9mIGl0ZW0uc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gaXRlbS5zaXplcy50aHVtYm5haWwudXJsIDogaXRlbS51cmwsXG5cdFx0XHRcdFx0XHRcdCR0bXAgID0galF1ZXJ5KCAkaHRtbF90ZW1wICk7XG5cdFx0XHRcdFx0XHQkdG1wLmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnLCBpdGVtLmlkICk7XG5cdFx0XHRcdFx0XHQkdG1wLmZpbmQoICdpbWcnICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBpdGVtLnVybCApLmF0dHIoICdzcmMnLCB0aHVtYiApLnJlbW92ZUNsYXNzKCAnaGlkZScgKTtcblx0XHRcdFx0XHRcdCRwcmV2aWV3LmFwcGVuZCggJHRtcCApO1xuXHRcdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWhlbHAnICkudGlwcHkoKTtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmlkO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRsZXQgJGU7XG5cdFx0XHRcdFx0Zm9yKCAkZSBpbiBzZWxlY3RlZElkcyApIHtcblx0XHRcdFx0XHRcdGlmKCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gZmFsc2UgfHwgc2VsZWN0ZWRJZHNbICRlIF0gPT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgc2VsZWN0ZWRJZHNbICRlIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRpbnB1dC52YWwoIHNlbGVjdGVkSWRzLmpvaW4oICcsJyApICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fTtcblxuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcblx0XHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRlZGl0LnNob3coKTtcblx0XHRcdFx0JGNsZWFyLnNob3coKTtcblx0XHRcdFx0JGFkZC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2FkZCcgKSApO1xuXG5cdFx0JGVkaXQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdlZGl0JyApICk7XG5cblx0XHQkY2xlYXIub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkY2xlYXIuaGlkZSgpO1xuXHRcdFx0JGVkaXQuaGlkZSgpO1xuXHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpLndwb25pb24taW1hZ2UtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBhcmVudCAgID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHRcdCRpbWFnZV9pZCA9ICRwYXJlbnQuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcgKSxcblx0XHRcdFx0JHZhbHVlICAgID0gJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKTtcblx0XHRcdGpRdWVyeS5lYWNoKCAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApLCBmdW5jdGlvbiggJGssICR2ICkge1xuXHRcdFx0XHRpZiggJHYgPT09ICRpbWFnZV9pZCApIHtcblx0XHRcdFx0XHQkdmFsdWUuc3BsaWNlKCAkaywgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRpbnB1dC52YWwoICR2YWx1ZS5qb2luKCAnLCcgKSApO1xuXHRcdFx0JHBhcmVudC5mYWRlT3V0KCAoKSA9PiAkcGFyZW50LnJlbW92ZSgpICk7XG5cdFx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHR9ICk7XG5cblx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblxuXHRcdGlmKCAkcHJldmlldy5oYXNDbGFzcyggJ2dhbGxlcnktc29ydGFibGUnICkgKSB7XG5cdFx0XHQkcHJldmlldy5zb3J0YWJsZSgge1xuXHRcdFx0XHRpdGVtczogJz4gZGl2Jyxcblx0XHRcdFx0Y3Vyc29yOiAnbW92ZScsXG5cdFx0XHRcdHNjcm9sbFNlbnNpdGl2aXR5OiA0MCxcblx0XHRcdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRoZWxwZXI6ICdjbG9uZScsXG5cdFx0XHRcdG9wYWNpdHk6IDAuNjUsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdGxldCAkaXRlbSA9IHVpLml0ZW07XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICd3aWR0aCcsICRpdGVtLndpZHRoKCkgKTtcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ2hlaWdodCcsICRpdGVtLmhlaWdodCgpICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cbiIsIi8qIGdsb2JhbCBnb29nbGU6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRtYXAgICAgICAgICAgICAgID0gdGhpcy5vcHRpb24oICdtYXAnLCB7fSApO1xuXHRcdCRtYXAuZGV0YWlscyAgICAgICAgICA9ICcjZ21hcF9maWVsZHNfJyArIHRoaXMuaWQoKTtcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xuXHRcdGlmKCAneWVzJyA9PT0gdGhpcy5vcHRpb24oICdzaG93X21hcCcgKSApIHtcblx0XHRcdCRtYXAubWFwID0gJyNnbWFwXycgKyB0aGlzLmlkKCk7XG5cdFx0fVxuXG5cdFx0bGV0ICRfaW5zdGFuY2UgPSB0aGlzLmVsZW0uZmluZCggJ2Rpdi5zZWFyY2hib3ggPiBpbnB1dCcgKTtcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcblx0XHQkX2luc3RhbmNlLmJpbmQoICdnZW9jb2RlOmRyYWdnZWQnLCAoIGV2ZW50LCBsYXRMbmcgKSA9PiB7XG5cdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcblx0XHRcdGdlb2NvZGVyLmdlb2NvZGUoIHtcblx0XHRcdFx0J2xvY2F0aW9uJzoge1xuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXG5cdFx0XHRcdFx0bG5nOiBwYXJzZUZsb2F0KCBsYXRMbmcubG5nKCkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0XHRcdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggJ2ZpbGxEZXRhaWxzJywgcmVzdWx0c1sgMCBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLyogZ2xvYmFsIHNldFRpbWVvdXQ6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGFkZCAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiBidXR0b25bZGF0YS13cG9uaW9uLWdyb3VwLWFkZF0nICksXG5cdFx0XHQkZ3JvdXBfd3JhcCA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAnICksXG5cdFx0XHQkbGltaXQgICAgICA9ICR0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0JGVycm9yX21zZyAgPSAkdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtd3JhcCcgKSwgJ2FjY29yZGlvbicgKTtcblxuXHRcdCRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24tY29udGVudCA+IC53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicgKVxuXHRcdFx0XHRcdFx0ICAuY2xpY2soKTtcblx0XHR9ICk7XG5cblx0XHQkZ3JvdXBfd3JhcC5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiAkYWRkLFxuXHRcdFx0bGltaXQ6IHBhcnNlSW50KCAkbGltaXQgKSxcblx0XHRcdGNsb25lX2VsZW06ICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdncm91cF90ZW1wbGF0ZScgKSxcblx0XHRcdG9uUmVtb3ZlOiBmdW5jdGlvbiggJGVsZW0gKSB7XG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0XHRpZiggalF1ZXJ5KCAnYm9keScgKS5maW5kKCAnbGluayNlZGl0b3ItYnV0dG9ucy1jc3MnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdGpRdWVyeSggJ2JvZHknIClcblx0XHRcdFx0XHRcdC5hcHBlbmQoICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaWQ9XCJlZGl0b3ItYnV0dG9ucy1jc3NcIiBocmVmPVwiJyArICR3cG9uaW9uLnNldHRpbmdzKCAnd3BlZGl0b3JfYnV0dG9uc19jc3MnICkgKyAnXCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJhbGxcIj4nICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZGF0YSA9ICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGdyb3VwX3dyYXAsICdhY2NvcmRpb24nICk7XG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRkYXRhICk7XG5cdFx0XHRcdCRkYXRhLmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0XHRcdHdwb25pb25fZmllbGQoICRkYXRhICkucmVsb2FkKCk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGRhdGEuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJyApLCAncmVsb2FkX3dwX2VkaXRvcicgKTtcblx0XHRcdH0sXG5cdFx0XHRzb3J0YWJsZToge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWFjY29yZGlvbi1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RvcDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJGh0bWwgPSBqUXVlcnkoICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPicgKyAkZXJyb3JfbXNnICsgJzwvZGl2PicgKS5oaWRlKCk7XG5cdFx0XHRcdCRhZGQuYmVmb3JlKCAkaHRtbCApO1xuXHRcdFx0XHQkYWRkLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuZmFkZUluKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJF9fRSA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JF9fRS5mYWRlT3V0KCAnc2xvdycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkX19FLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0sIDEwMDAgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLypnbG9iYWwgc3dhbDp0cnVlKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRfdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJF90aGlzLmVsZW1lbnQsXG5cdFx0XHQkYXJncyAgICAgICA9ICRfdGhpcy5vcHRpb25zKCksXG5cdFx0XHQkaW5wdXQgICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1pbnB1dCcgKSxcblx0XHRcdCRyZW1vdmVfYnRuID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24taWNvbnBpY2tlci1yZW1vdmVdJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLWFkZF0nICksXG5cdFx0XHQkcHJldmlldyAgICA9ICRlbGVtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXG5cdFx0bGV0ICR3b3JrID0ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsZW1zOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdHBvcHVwOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsbTogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBBIE5ldyBJbnN0YW5jZSBmb3IgVG9vbFRpcC5cblx0XHRcdCAqL1xuXHRcdFx0aW5pdF90b29sdGlwOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCAkYXJncy5wb3B1cF90b29sdGlwICE9PSAnZmFsc2UnICkge1xuXHRcdFx0XHRcdGxldCAkdHAgPSAoIHR5cGVvZiAkYXJncy5wb3B1cF90b29sdGlwID09PSAnb2JqZWN0JyApID8gJGFyZ3MucG9wdXBfdG9vbHRpcCA6IHt9O1xuXHRcdFx0XHRcdGlmKCAkd29yay5lbGVtcy5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JHdvcmsuZWxlbXMudGlwcHkoICR0cCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSW5pdHMgRm9yIGVhY2ggYW5kIGV2ZXJ5IFBPUFVQLlxuXHRcdFx0ICogQHBhcmFtICRlbG1cblx0XHRcdCAqIEBwYXJhbSAkaW5zdGFuY2Vcblx0XHRcdCAqL1xuXHRcdFx0aW5pdDogZnVuY3Rpb24oICRlbG0sICRpbnN0YW5jZSApIHtcblx0XHRcdFx0JHdvcmsuZWxtICAgPSAkZWxtO1xuXHRcdFx0XHQkd29yay5wb3B1cCA9ICRpbnN0YW5jZTtcblx0XHRcdFx0JHdvcmsuZWxlbXMgPSAkd29yay5lbG0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cdFx0XHRcdGxldCAkaGVpZ2h0ID0gJHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcgKTtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcsICRoZWlnaHQgKTtcblx0XHRcdFx0JHdvcmsuc2VsZWN0KCk7XG5cdFx0XHRcdCR3b3JrLmlucHV0KCk7XG5cdFx0XHRcdCR3b3JrLmVsZW1zLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJGljb24gPSBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1pY29uJyApO1xuXHRcdFx0XHRcdCRpbnB1dC52YWwoICRpY29uICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0XHRzd2FsLmNsb3NlTW9kYWwoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQkd29yay5pbml0X3Rvb2x0aXAoKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFdvcmtzIHdpdGggUE9QVVAgSW5wdXQgU2VhcmNoLlxuXHRcdFx0ICovXG5cdFx0XHRpbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0nICkub24oICdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdvcmsuZWxlbXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKS5zZWFyY2goIG5ldyBSZWdFeHAoICR2YWwsICdpJyApICkgPCAwICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYW5kbGVzIFNlbGVjdGJveCBpbiBwb3B1cC5cblx0XHRcdCAqL1xuXHRcdFx0c2VsZWN0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgc2VsZWN0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblx0XHRcdFx0XHQkd3Bvbmlvbi5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0XHQnd3Bvbmlvbi1pY29uLWxpYic6ICR2YWwsXG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHdvcmsuZWxtLCAkd29yay5wb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLmRpc2FibGVMb2FkaW5nKClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmKCAkaW5wdXQudmFsKCkgPT09ICcnICkge1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQmx1ciBFdmVuIC8gY2hhbmdlIGV2ZW4gaW4gaW5wdXRmaWVsZC5cblx0XHQgKi9cblx0XHQkaW5wdXQub24oICdrZXl1cCBibHVyIGNoYW5nZSBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYoICR2YWwgIT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnPGkgY2xhc3M9XCInICsgJHZhbCArICdcIj48L2k+JyApLnNob3coKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBBZGQgQnV0dG9uIENsaWNrIEV2ZW50LlxuXHRcdCAqL1xuXHRcdCRhZGRfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkcG9wdXAgPSBzd2FsKCB7XG5cdFx0XHRcdHRpdGxlOiAkZWxlbS5maW5kKCAnLndwb25pb24tZmllbGQtdGl0bGUgaDQnICkuaHRtbCgpLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHRhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHR3aWR0aDogJzcwMHB4Jyxcblx0XHRcdFx0Y3VzdG9tQ2xhc3M6ICd3cG9uaW9uLWljb24tcGlja2VyLW1vZGVsJyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdCRfdGhpcy5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvblN1Y2Nlc3M6ICggJHJlcyApID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHBvcHVwX2VsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkcG9wdXBfZWxlbSwgJHBvcHVwICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25FcnJvcjogKCkgPT4gJHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxuXHRcdFx0XHRcdFx0b25BbHdheXM6ICgpID0+ICRwb3B1cC5kaXNhYmxlTG9hZGluZygpLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgUmVtb3ZlIEJ1dHRvbiBFdmVudC5cblx0XHQgKi9cblx0XHQkcmVtb3ZlX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRpbnB1dCAgICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3X2FkZCA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXctYWRkJyApLFxuXHRcdFx0JHByZXZpZXcgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcgLndwb25pb24tcHJldmlldycgKTtcblxuXHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gbnVsbDtcblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHByZXZpZXdfYWRkLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3LnNob3coKTtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25faW1hZ2VfdXBsb2FkX3VwZGF0ZWQnLCAkaW5wdXQsICRwcmV2aWV3LCAkcHJldmlld19hZGQgKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlld19hZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkdGhpcy5tZWRpYV9pbnN0YW5jZSApIHtcblx0XHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gd3AubWVkaWEoIHtcblx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdHRpdGxlOiAkdGhpcy5vcHRpb24oICdmcmFtZV90aXRsZScsIFwiU2VsZWN0IEltYWdlXCIgKSxcblx0XHRcdH0gKTtcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9uKCAnc2VsZWN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gJHRoaXMubWVkaWFfaW5zdGFuY2Uuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKS5hdHRyaWJ1dGVzO1xuXHRcdFx0XHRsZXQgdGh1bWJuYWlsICA9ICggdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsLnVybCA6IGF0dGFjaG1lbnQudXJsO1xuXHRcdFx0XHQkcHJldmlldy5maW5kKCAnaW1nJyApLmF0dHIoICdzcmMnLCB0aHVtYm5haWwgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGF0dGFjaG1lbnQudXJsICk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuaWQgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3LmZpbmQoICcud3Bvbmlvbi1pbWFnZS1yZW1vdmUnICkub24oICdjbGljaycsICgpID0+ICRpbnB1dC52YWwoICcnICkudHJpZ2dlciggJ2NoYW5nZScgKSApO1xuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJHNldHRpbmdzID0gdGhpcy5vcHRpb24oICdpbnB1dG1hc2snICk7XG5cdFx0XHRpZiggJHNldHRpbmdzICkge1xuXHRcdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCAkc2V0dGluZ3MsICdJbnB1dE1hc2snICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5pbnB1dG1hc2soICRzZXR0aW5ncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGhpc19lbGVtID0gJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi10YWItd3JhcCAnICk7XG5cblx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpIGEnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bGV0ICRfdGhpcyA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0JF90aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi10YWItY3VycmVudCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLmhpZGUoKTtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi10YWItcGFnZScgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHRsZXQgJHRhYiA9ICRfdGhpcy5hdHRyKCAnZGF0YS10YWItbmFtZScgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdkaXYjd3Bvbmlvbi10YWItJyArICR0YWIgKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICkuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCBhJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaTpmaXJzdC1jaGlsZCBhJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2lzX3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5nbG9iYWxfdmFsaWRhdGUgPSBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWtleXZhbHVlX3dyYXAnICkuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWFjdGlvbi1jb250YWluZXIgID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1rZXl2YWx1ZS1hZGRdJyApLFxuXHRcdFx0bGltaXQ6ICggLTEgPT09IHRoaXMub3B0aW9uKCAnbGltaXQnICkgKSA/IG51bGwgOiB0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0Y2xvbmVfZWxlbTogJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24ta2V5dmFsdWUtZmllbGQgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLXJlbW92ZV0nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnaHRtbF90ZW1wbGF0ZScgKSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZWxlbS5maW5kKCAnPiBkaXY6bGFzdC1jaGlsZCcgKSApO1xuXHRcdFx0fSxcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRodG1sID0galF1ZXJ5KCAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj4nICsgdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICkgKyAnPC9kaXY+JyApXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLmFmdGVyKCAkaHRtbCApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5mYWRlSW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkX19FID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX19FLmZhZGVPdXQoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCRfX0UucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSwgMTAwMCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIGVyci5lbGVtZW50LnBhcmVudCgpLnBhcmVudCgpICk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRhcmdzXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCB0cnVlICE9PSBpc191bmRlZmluZWQoICRhcmdzLmtleSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDAgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3Mua2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGlmKCB0cnVlICE9PSBpc191bmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMSApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy52YWx1ZSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVlID09PSBpc191bmRlZmluZWQoICRhcmdzLmtleSApICYmIHRydWUgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFOdGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqTXRZekF4TVNBMk5pNHhORFUyTmpFc0lESXdNVEl2TURJdk1EWXRNVFE2TlRZNk1qY2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVEJHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJVVTVOMEUzT0VFMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlVVNU4wRTNPRGsxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROQ0JYYVc1a2IzZHpJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRNMk1EVTJRekpHUWtWRVJUQXhNVGsxTlVWQ1JUQXpSVUU0UWpSRU5VSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFHQkFRRUJRUUdCUVVHQ1FZRkJna0xDQVlHQ0FzTUNnb0xDZ29NRUF3TURBd01EQkFNRGc4UUR3NE1FeE1VRkJNVEhCc2JHeHdmSHg4Zkh4OGZIeDhmQVFjSEJ3ME1EUmdRRUJnYUZSRVZHaDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHgvL3dBQVJDQUVUQVJNREFSRUFBaEVCQXhFQi84UUFpUUFCQUFNQUF3RUJBQUFBQUFBQUFBQUFBQVFGQmdFREJ3SUlBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFCQXdNREFRTUdCdzhDQXdrQUFBQUJBQUlERVFRRklSSUdNVUVUQjFGaGNZRWlNcEdoc2NGQ2doVGhVbUp5a3FLeXdpTXpjN04wRlRZa045SFRGK0pEVTVPalZEVlZGaEVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9WS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJT3VlZUtDTXlTdURHRHFTZzZJOHZqWG1qWjIvV3EzNVFFSGV5NHQ1UGNsWS84QUZjRDhpRHNRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGTnllWGJiUlIvZnVKL0pIM1VHYjNJT2R5RHNqdkxtUDkzSzl2bURpRUVsbWN5YkJRVGtqemhwK01oQklaeWE5YlFPWkcveW1oQitJb0pNZktXLzk1Yit0cnYrSVFTWStTWTkzdkI3UE9SVWZFU2dreDVqR1NlN2NOSDQxVy9wVVFTMlBZOW9leHdjMDlIQTFCUWNvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lNM3lxYjl2QkY5NjB1L0tOUDFVRmJpb0czTi9EQzhibU9QdER5Z0NwUWFTVGoyTWVQWllZejVXdVB6MVFSWk9MUUVmczVuQStjQW9JeitMM1k5eVpoOU5SOHlDTTdqMlZCMGpEdk9ITitjaEJHa3htU2pOSFc4bnFhVDhpRG9mSE5HYVBZNXA4aEJDRDQzSU5keDFqbTR4cEo5OXpuTjlIVDVrRm1nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWd4L0o1OStVTGYvQ1kxdjYzNnlEbmk3Qy9KaDNaRzF4UHJGUG5RYTlBUUVCQVFRTTQrT1BHVHVjMEVsdTBFanRPaURFYmtHN3hNWmp4dHV3OWRnUDVXdnpvSmFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0RBWnFmdk1yY3VIVGVRUHE2Zk1ndU9HeGt2dUpld0FOcjY2b05PZ0lDQWc0YzVyV2x6aUd0SFVuUUlLWGxrN1JqR3RCcjNqeFFqdEFDREhzSmM0TkhVbWc5YUQwcGpReGpXam8wQUQxSU9VQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRZk1rc2NiZHozQm84cFFSSk14WnMwYVM4L2dqVDQ2SUlVdWJuZHBHME04NTFLQ1ZpN21XV09hU1oxUTAxOUFwcWd3RTBwZEs5MzN6aWZoS0RZOE5ZUmkzdVAwNVNSNmdBZ25aUE4yT1BaKzFkdmxQdXhOMWQ2L0lncU1UeXQ4OThZcnNOWkZLYVJFYWJUNUNmT2cwNkNweWZKTWZaQXNEdStuN0kyZEFmT1VHU3lHY3lGKzR0a2VXeEU2Uk4wYjE3ZktndE9Vdjd1d3hzSDBoSFZ6ZlExb0NDb3c3VEpsYlJ0Sy90V0VqekJ3SlFlaklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJS3JPdGR0aGQ5RUVnK2swUVZDQWd0R2tRNEM2bEpvVEhKcjU2RUJCNS92UWFwK1R1TVp4aXlGdlJrMCsvMjZEUWJpZTMwb012SlBKSTh2a2NYdmNhdWM0a2tuMGxCODcwRm5OeVhMUzJyYll6RU1BbzV3MGM3MHU2b0t6ZWc3N0VHUzlnakd1NlJvcDYwRjF6YVVmM1NKamVqSVJVZVFsenZtUVIrSXNNbWJpTktoalh1UDVKSHpvTitnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2k1U0x2TE4vbGI3UTlTRFBVUUtJSm1mY0lPS3ZGYUY3WXdQUzU0SitKQmdBNGtnZVZCcnVUV0Y3TGpjWXkzZ2RJeUdMMnkzV2hMVzlucVFaWjl2ZE05K0Y3ZlMwaEIxRnhIWFJCeHZRTjZDNDRtd1M1NjJEaFZyZHp2V0dFajQwSHh5ZWN2emwxVTEydTJqMUFJTFhnVWU2N3VwdnZJMnRIMWovQU5sQnRVQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJ3QkJCNkhRb012UEgzY3I0ejlGeEZmUWcrV2lwSG5RT2R5OXppYlczKytlUHpHL2RRWVVTRUVFZFFhaEJjUWN4enNOQjM0ZUFLQVBhMGo0Z0VFOXZpQmtEcExiUU9iMmdCdytWeFFkZzVoaHBOTGpFeDFQdk9BWWZsYWc1YmtPQ3o2eTJqb25IeWJ3UHpYSURjUHcrN0pNR1E3ajhGN2czOU9pQ3o0OWdNZlpYN3JpM3ZtWFhzRnJHdExTUVQxT2hLRERYMDVsdlo1Q2FsNzNHdnJRYlR3K2hBeDF6UDJ5UzdQVXhvUDY2RFZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNDaXpFT3k2MzAwa0ZmWDJvSTF0SHZ1STJEdGNFRlg0aTNCKzAybHYyTlk2VDhvMC9WUVkrcUJWQXFnVlFLb0ZVSEllNGRIRWV0Qnh1UWVtOEtoRWZINEhEcks1N3orVnQvVlFYcUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3I4ekZ1dDJ5QWFzZHFmTWZ1b0s3RzdmdHNlNDAxK09pRG5rdkZQN3pOSE95NDdtV05teWhidWFSVW55anlvTXpjZUgrYWovZFBpbUhtZHQvU1FRTGppUElZUGV0SFAvaGtQL1JxZ2dUNHpKMjRyUGF5eER5dlk1dnloQkdKSU9xRGpjZ2JrRGNnYmtIc09EZzdqRDJjVktGc0xLanprVlB4bEJOUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFSFZjeENXM2taNVI5MUJtalVHbmFFSFl5NHVHZTVJNXZvSkNEdFprcjFuU1FuMDYvS2c3NDh6ZEErMDBQK0w1RUZoYlhWek1SdmdMR242UlAzRUhaUFoybHdLVHdzbEg0YlE3NVVGZk54VGowMWQxbEdDZTF0Vy9JUWdyNXZEN0F2SkxUTkdld05jQ0I4SUtDQkw0YVJFa3hYN21qc0RvNi9HSEJCRGI0YjVFWERBNjVpTUZSdmNOMjdiMjBiVDUwSG9ER2hyUTBkR2lnOVNEbEFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGRmUyTTR1bjdHRnpYbXJTQnBycWc1aHc5eS9WNUVZOC9WQk5pdzF1MzMzRjUrQUlKa2NFTVg3dGdiNkFnKzBCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkZ5bVJoeHVPdWIrZHJuUTJzYnBaR3NBTGkxZ3FhQWtDdnJRUU9MOHN4UEpMT1M1eDVlM3VYN0pZWmcxc2pTUlVFaHBjS083RFZCYnlQREkzUFBSb0xqVHpDcUNwNHZ5akg4a3g4bDlZeHl4d3h5bUJ6WncxcnR6V3RkVWJYUEZLUEhhZ3VFQkFRUnNsZnc0L0hYTi9NSE9odFluelNOWUFYRnJHbHgyZ2tDdW5sUVlqL3JaeFgvMnQ5LzVjUC9OUVNMSHhpNGhjekNLVDdUYUEwQWtuamJ0MS9odWtJK0JCdG81STVZMnlSdUQ0M2dPWTlwQmE1cEZRUVIxQlFmU0FnSUNBZ0lLYmpuS3Nmbi90bjJPT2FQN0ZMM012ZkJyYXUxMWJ0Yy9UVHRRWEtBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FncGViZjRqbVA2U1g5QW9QSmVOdnlIRkxYRDhxaDNUWXZJOTVCa29oMmJabnNINXJBNXZuQkhhZzlyTnpCZFkwM051OFN3VFFsOFVqZFE1cm0xQkNERWVDZitLM1g5ZEovSmlRVE0zNG0yZHBrbjR2RVdFK2F2NGlSTEhiMTJnZzBjQVd0a2NTM3RvMmlEbkJlSmRuZTVKbUt5bGhQaHNqS2FSUlhGZHJpZWpkem14dUJQWlZ2bVFiTkJUOHgveFBNLzBVLzhzb0tyd3Avd1hIL2pUL3ozb0pQaUphWXlmaU9SZmZNWWU1aGMrMmtkVGMyYjZHMDloTHFEem9LWGlHY3VjUjRXeDVTZUUzSDJRU2QxRTUyd3VqNzR0YU4xSFVBcnBvZ044Vko3a1FPeGVCdWNqR1dSbThsaExpeUdTUm9jWTl3amNIRnRhRW5hZ3ZPVWMzeG5IaERGT3g5eGtMZ0F3Mk1IdFBJSnBVK1FWMEhsN0VGSEQ0cVRXOHJQNzl4Kzh4TnJJUTF0eThQZTJ2bkRvNGo4RlVGL3l2bFJ3ZUVqekZ2YWpJV3Izc0R5eVhZQkhJUFprQjJ2RGhXZzlhQzd0NTRyaTNpdUlYYm9wbU5ramNPMXJoVUg0Q2dvOFh5dzVIbEdSd3R2YVZ0OGEwZDlmZDVvWkRRYkJIdDh1NzZYWWc0NGp5My9BUFJmM0QvU2ZaZnNNM2Nmdk84MzlmYTkxbE9pQ3Z6dmlSYTJXU2t4ZUtzSjh6a1lhaWFLM0IydElwVWJtdGtKSTdhTjA2SU9jRjRqMjE3a284WGxjZlBoc2pOcERGY0E3WGs5QUhPYkdRVDJWYWdzVHlzeDh5SEc1N1h1eExCMzlyZDk1WHZLRFZ1emFLZTY3NlI2SVBybVhLb3VOWWorNFBoKzB2ZEkyS0tEZjNlNHVxVDdXMS9SclNlaUN6eHVRaHY4WmJaQ1AyWXJtRmt3cWZkRDJoMUNmTWdxdUljcWR5T0M3dW1XbjJlMGduTU52S1hsNWxEZFM3YnNadDBJN1Q4U0MvUUVCQVFFQkFRRUJBUUVGTHpiL0VjeC9TUy9vRkJSOER4ZG5sZkRLeng5NHpmYjNEYmhyeDJqL1VTRU9IbmFkUWdxdUY1Uzh3Ti9lOEx5NzZtTnIzNHlZKzY1cEJkdEZleHc5cHZucUVEd3Bua3QrQVplZUxTU0tlNGV3L2hOdG95RUUvd2NzYmFMaTc3eHJRYm02bmYzMG4waUdhTmJYeURyNjBIejR5MmR1N2prRjhRRzNkdGNNRUVvMGNBOEhjMEhyMkErcEJ0c2ROSk5qN1dhUTFra2hqZTgrZHpRU2dyK1kvNG5tZjZLZitXVUhuWENlRlovSjhidGIyMDVQZDQ2M2tNZ1paeENUWXpiSTVwcHRtakdwRmZkUVhyUENpVzZsWWM3eUM4eXNNYmc1a0xpNW8wclVFdmZOMTgxRUZ2ejIxdDdYZ0dSdHJlTVJRUXdNWkZHMFVEV3RlMEFCQjJlRzl2RkJ3ckdDTnROOGJwSG50TG52Y1NTZ3cwdDF5cC9pVm1ickNXRUdRdmJZQ0pyYmtnQ0tLaldnc3JKRHFhZkg1MEZwazdqeGN5V1B1TEM2NC9ZdXQ3bGpvNUFIc3FBNGRSVzVPbzZqem9MdmpYRzhqSndFNERPUjkxTzVrc0lhWE5lV3RMaTZNN21Gdzlra1U5Q0N2NFR5YzJQQjc0WCtsMXg0eVFTeG5xZHRlNmIrVjdBOUNDYjRXWXVTMjQ0Y2pjNjNtWGxkZFRQUFV0SklaOE9ydldncC9ES1o4Tmh5aWFQOTVIY1NQWjZXdGVRZ28rQlhYaUJiNHFXZkFZbTF2SUxtWnpwcnVkemU5YzhVQkRxenhtZzdOTzFCTzVMWWVLdkliYUNHOHdsckM2MmxFMEU4RXNiWld1QXBvNTF3L1EvTUVGOTRodzNOcGI0Yms0WlM3eEU4WnUydDdZcGFDUnVuNFduclFjY21naDVMeTdIWVpwMzJWdFpUWGs1cFZwTTdlN2lyWHlhRWVsQlI0dmtzMWo0V1g5bzh1R1JzNVpNWXhsZmFEcFhhVVA0TFhPcCtLZzlBNGxoaGh1TzJPUG9CTEZHRFBUdGxmN1Qvd0E0b0xkQVFFQkFRRUJBUUVCQVFWSEw0SnArTDVXR0NOMHMwbHJLMk9KZ0xuT2NXbWdEUnFTZ2crRzlwZDJuQzhkYjNjTWx2Y003N2ZESzBzZTJzOGhGV3VBSXFEVkJEOFNlSlNackdOdnJGcEdYeC83UzNMUGVlMEdwWUthMTdXK2Ywb0kzaEppNzIwNHZkMjJSdEpiWjhsM0llNW5qZEc1ekhReE5ydGNBYUdoQ0Nxc2JQbVhCTHU2dDdESFB6ZUNuZVpJV1JFbVZwTkIwYUh1QnBRTzlrZzlmS2dYdGh6SG5kNWFSWkhIT3d1QnQ1TzlsamxKNzE1RlduUndZNHVwVUQyUUJXdXVpRDA1akdzYUdORkd0QURRT2dBUVZmSzRacCtNWmFHR04wczBscE0yT05nTG5PY1l5QUdnYWtsQlcrR2xuZDJmRGJHM3U0SkxlNFladDhNclhNZUt6UElxMXdCMUJRYWRCUWMrdHJtNjRoazdlMmlmUFBKRzBNaWphWHZjZDdUbzF0U1VIMXdhMnVMYmlXTWd1WW53enh3MGtpa2FXUGFkeDBMVFFoQm5lVWNkNUhqZVRqbFhHb2hjeXlzRWQvWkhxOEFBYUNvcUhCbzZhZ2l1cUNQZGNyOFFzM2J1eDJONDdQaXBwaHNrdnAzUFlHTk9oY3h6MlJiVDZLbnlhb054Z2NkY1k3RTIxbmMzVWw3Y1JOL2JYVXpuUGM5N2lTZFhFbWdyUWVaQjV6emJpV2JsNVZKYjR5R1E0elBtQjEvTEd4em1SdWlmN1JlNENqZnY5ZXFEMUszZ2l0NEk0SVdoa1VMV3h4dEhRTmFLQWZBZ3cvaGhqTCswYm5HMzFwTGJ0bnV5Nk1UUnVZSHNPN1Z1NENvUVZkclljdzRKZjNjZUx4N3N6Z0xtVHZZNFlxbVJoTkI5RVBlSFVvQ2RwQnBWQktOenovbHQ1YndpMHVPTlltSisrNW03eDhjNzZhYlFhUlBOZGFlelR5OWlEZFpiR3daTEYzV09tL2RYTVRvaWVwRzRVRHZTRHFneC9oZmhzdmJOeUY5bUlwSXIxNWlzNGhLMHRQYzJzWVkwdEJwVnAwMTdhSUt0L0Q4ako0bFNSbUNUK3d2dUdaU1NRc2QzSm1Zd25idXB0M2Q0ODFGZWlEMDlBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkF6K1dpeEdGdk1sSlNsdEU1N1FmcFA2TWI5WnhBUWVTOFFreUhIczdoY3hmUExyYmtyWkdYRGoyT2ZMN0xqMmRkanZRU2c5cGM1cldsemlBMENwSjBBQVFkRmxmMkY5RDMxbGN4WFVJSmFaWVh0a2J1SFVibWtpdXFCZTM5aFl3OTllM01WckNTR2lXWjdZMjdqMEc1eEFyb2c3VEpHSSs4TGdJNmJ0OVJ0cDFyWHlJSUVYSStQVFRpM2h5bHBKT1NRSW1UeE9lU09vMmgxVUV1OGpobHM1NHBuYklYeHZiSytvRzFwYVE0MU9nb0VHYngyTHdtTTRUa0xYRFhmMjJ5RU55NFQ5NUhMN1JqTzRib3cxdWlDTDRSZjRYQi9HbS9TUWFtK3krSnNDMFgxN0JhRjN1aWVWa2RmUnVJUWRsbmYyTjdGMzFuY1JYTUowN3lGN1pHK1RxMGtJTUh5ei9BSFI0ei9EUDZUMEczYm04TTY4TmsyL3RqZUE3VGJDVmhscjVObGQzeElQalAvOEF3V1IvcFp2NWJrR2E4SXY4TGcvalRmcElOVmZaYkZXRzAzMTVCYUIzdTkvSXlPdm8zRWVSQjIyMTNhM1VJbXRabVR3dTkyU0p3ZTA5dWhhU0VIYWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lQT2ZGckp4enlZdmpZblpiaTltYk5kelBjMWpXUkIyeHBjWGFVcnVkOVZCejRoeThVeUhEL3N0aGs3SjArTjJTV1VVZHhFWEZzWTJGalFIVlBzZEI1VUdwNFRuUm0rTldkNjUyNmNON3E1OHZleCt5NG44YjN2V2d6ZkRSL1lPYTVuamJ2WnRidjhBMTJQSFpROVdqNnBwOVZBNW1QNzl6WEM4YmFOMXJiSDdka0IxRkIwYWZxaW4xa0ZqelRqR1N6MS9aUnoza2R0eHVDajc2THZITWxlK3AvQjJVOTBDcnRLbEJtK1JjZDhKWU1WY0MydTRJYjFzYnpDK0c1Zk8vdkdqUU9ZSFNEVjNYUkJlY0l5RjFlK0d6bjNMekxKRkRjd2g3dFNXc0RnMnA4emRFRUh3OS8yd3YveGJ6K1dnbWVGd3VqNGYwdEN3WFpkY2ZaekpVTUVsVHQzVURqU3ZYUkJYMlBBK0xXY2NrL05iKzN1c3ZjU09kTEpMZHVpWnIwMmt1aGNUVFUxUVZXSmZnTVY0ajQ2UGkxNFpNZmV0TWQzQzF6bnNCSWRSdTUzVUNnY05UUW9KM2lQWlhsOXozQldkbk02M25uaDJDZG52TWFYdjN1Rk8wTXFndDc3d2c0cS9GdWdzMlNRWHpXL3NyMHlQYzR2SFRlMG5aVHkwYUVIUnd6TzNtVTRCazRiNXhmZDQrSzR0bnlPTlhPYUlpV2x4N1NLN2ZVZytPQTVUKzFlR0UyUjJoeHRmdEVqR25vWEEreUQ2U2d5K0FtOE83eUYrUjVma1pMM01YVG5PbWljMjZEWXhVN1FERTBWMDhob09nUVNMUE5jWXdYTE1kTnhTK2tseDE5SUlNallQRXdZd1BjR3RlMHl0YldtNm8xSjA2MEtEMk5BUUVCQVFFQkFRRUJBUUVCQVFFQkFKQUZUb0FnOHE0L2ljZnpqbHVheStUaU54aTRDSUxTUGM1Z05EUmhCWVduUnJha2ZoSU5WLzBzNEgvd0RXZit2Y2Y4eEJuZUFTTzQ3elBMY1VtZFNDWnhtc2E5dTBiaFN2YTZJNi9pb0xUeElnZmo3dkQ4cWhIdDR5NGJIZFU2bTNsTkQ4cGI5WkIxK0dzVDhsa00xeXVjSGRrSnpEYVY2aUNNai9BSU5iOVZCVmM3bHRMM24xbGkrUVhUN1hBTmdFakFDV3NkSWQzdE9kMlZjTnU3czh5RG5QTThKOExpYmwxaEZhM2w5TEc1dHN5T1UzUkVoYVExeExuU05ZQWRTZ3NmRG9nK0dsd0FkUUxzSDRDVUhWNGUvN1lYLzR0NS9MUWRYRHJxOXRQQ2E3dWJLb3VvbTNMb25ORlMwZzZ1SDRvMVFWbkVNUjRhWG1HWmU1eTlqbXlraGMrN2JkWExvWE5mdVB1dEQyRjJuYnJWQkhqeUhHYmp4THcwZkg0STRiRzNmM2JwWTI3QkpJZDFYRHRJNkFWUVcvaUZsRzRyeEF3T1FleDBrZHZDWHl0WUt1N3ZjOFBJSDRMU1NnMVdSOFErSjJtTWZmUjVHRzVPMnNWdkU4T2xjN3Niczk1djFnRUdkNEpqTHUyNERsNzI3YVdTWkpseGNNYVJUMk82SUR0ZnZqVStoQjg4S3hzdVQ4S2Jxd2gvZlRpNGJFRG9DOE9xMGVzaEJFNEZrZUNQeExjZG5iT3d0Y3RaRjBVN3J5R0ZoZlJ4b1MrUWU4UGRJSnJVSUxOMlo0VS9rbGppY0RnckhKenlQclBkd1JSTVpBMXJoN1llSTNidG8xMEk3TmRVSG9DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNENHVJSXJpQ1NDVUV4VE1kSElBUzBscmhRMGMwZ2pUdENDSGhjRmljSmFHMHhsdUxlM2M4eU9ZSE9mVjVBQkpjOHVkMEE3VUU5QlYzZkdNSGQ1ZURNVDIyN0pXMjBRM0RYeU1JMmtrVmExd2E3cjJoQk15R1BzOGpaVFdWNUdKcldkdTJXTWtpbzY5V2tFZXBCeGpjYlk0eXhpc2JHSVEyc0lJampCSnBVa25WeEpPcDdVSFJtZVA0WE5RdGh5bG95NVl5cFlYVkRtMTY3WHRJY0srWW9JT000SnhIR3lkN2FZeUpzblkrVGRNNFYwOWt5bDlQVWdsNHZqV0Z4VmhQWVdGdjNObmNGenBvdThrY0NYdERYYXZjNGlyUjJJUHJIOGV3K094Y21MczdmdXJDVVBENGQ3M1Y3d1VkN1RuRjJvODZEc3hHRnhtSXNSWTQ2SHViVnBjNFI3blAxY2FuVjVjZmpRVkZ4NGNjSnVMazNFbUxqRWhPNGhqNUkyVnJYM0dPYXo0a0V1VGh2R0h2c25qSHh4dXg3KzhzekNYUmJIMURxL3N5M2RxMGU5VkJJdk9QWWU4eWR2azdtM0VsOWFOTElKUzU0RFdtdFJ0QkRUN3g2aEJYeCtIdkRJNzM3WXpGUkNhdTRBbDVqQjgwUmQzZjVxQzludDRaN2VTM2xidWhsWVkzczFGV3VGQ05LVTBRUnNSaHNiaDdKdGxqb2U0dFd1TG14N25QMWNhblY1Y2ZqUVFzdnd2aStZbTcvSVkrT1djKzlLMHVpZTZtbnRPakxDNzFvSk9HNDVnOExHNW1NczQ3WVBvSHZiVXZjQjBEbnVKY2ZXVUZpZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0QvLzJRPT0nO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuYmVmb3JlKCAnPHNwYW4gY2xhc3M9XCJzcGlubmVyIHdwb25pb24tc3Bpbm5lclwiPjwvc3Bhbj4nICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNob3dfcHJldmlldyggZSApICk7XG5cdH1cblxuXHRzaG93X3ByZXZpZXcoKSB7XG5cdFx0bGV0ICR2YWx1ZSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLnZhbCgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5hZGRDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHQkd3Bvbmlvbi5hamF4KCAnb2VtYmVkLXByZXZpZXcnLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dmFsdWU6ICR2YWx1ZSxcblx0XHRcdH1cblx0XHR9LCAoIHJlcyApID0+IHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcblx0XHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5odG1sKCByZXMuZGF0YSApO1xuXHRcdFx0fVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcblx0XHRcdFx0Lmh0bWwoICc8aW1nIGNsYXNzPVwid3Bvbmlvbi1uby1wcmV2aWV3XCIgc3JjPVwiJyArIHRoaXMuaW1hZ2UgKyAnXCIvPicgKTtcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLXNwaW5uZXInICkucmVtb3ZlQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgPSB0aGlzLm9wdGlvbiggJ3NlbGVjdDInLCB7fSApO1xuXHRcdHRoaXMuZWxlbWVudC5zZWxlY3QyKCB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnICkgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRmaWVsZF9kZWJ1Zygpe1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnc2VsZWN0aXplJywge30gKTtcblxuXHRcdGlmKCAhaXNfdW5kZWZpbmVkKCAkYXJnLnRoZW1lICkgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoICRhcmcudGhlbWUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCAnc2VsZWN0aXplLWRlZmF1bHQnICk7XG5cdFx0fVxuXG5cdFx0JGFyZyA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKTtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoICdmb3JtLWNvbnRyb2wnICkuc2VsZWN0aXplKCAkYXJnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR2YXIgJHRoaXMgICAgID0gdGhpcy5lbGVtZW50LFxuXHRcdFx0JGVuYWJsZWQgID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWVuYWJsZWQnICksXG5cdFx0XHQkZGlzYWJsZWQgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZGlzYWJsZWQnICk7XG5cblx0XHQkZW5hYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRkaXNhYmxlZCxcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0dXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHR2YXIgJGVsID0gdWkuaXRlbS5maW5kKCAnaW5wdXQnICk7XG5cblx0XHRcdFx0aWYoIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoICd3cG9uaW9uLWVuYWJsZWQnICkgKSB7XG5cdFx0XHRcdFx0JGVsLmF0dHIoICduYW1lJywgJGVsLmF0dHIoICduYW1lJyApLnJlcGxhY2UoICdkaXNhYmxlZCcsICdlbmFibGVkJyApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsLmF0dHIoICduYW1lJywgJGVsLmF0dHIoICduYW1lJyApLnJlcGxhY2UoICdlbmFibGVkJywgJ2Rpc2FibGVkJyApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkdGhpcy50cmlnZ2VyKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBhdm9pZCBjb25mbGljdFxuXHRcdCRkaXNhYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRlbmFibGVkLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICd1aS1zb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBjc3NfdW5pdHMgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZm9udF93ZWlnaHRfc3R5bGUgPSBmYWxzZTtcblx0XHRsZXQgJGVsICAgICAgICAgICAgICAgID0gdGhpcy5lbGVtZW50O1xuXHRcdGxldCAkcHJldmlldyAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZvbnQtcHJldmlldycgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgICAgID0gdGhpcztcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0XG5cdFx0XHRcdCRmb250X2ZpZWxkICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicgKSxcblx0XHRcdFx0JGZvbnQgICAgICAgICAgICAgID0gJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkudmFsKCksXG5cdFx0XHRcdCRmb250X3dlaWdodF9zdHlsZSA9ICR0aGlzLmZvbnRfc3R5bGUoICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLnZhbCgpICksXG5cdFx0XHRcdCR0YWcgICAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC10YWcgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkY29sb3IgICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWZpZWxkLWNvbG9yX3BpY2tlciBpbnB1dC53cC1jb2xvci1waWNrZXInICkudmFsKCksXG5cdFx0XHRcdCRhbGlnbiAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1hbGlnbiBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRmb250U2l6ZSAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1zaXplIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGluZUhlaWdodCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGluZS1oZWlnaHQgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdCRiYWNrVVBGb250ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1iYWNrdXAtZm9udCBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRkaXJlY3Rpb24gICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1kaXJlY3Rpb24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGV0dGVyLXNwYWNpbmcgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdGhyZWYgICAgICAgICAgICAgICA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9JyArICRmb250ICsgJzonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCxcblx0XHRcdFx0aHRtbCAgICAgICAgICAgICAgID0gJzxsaW5rIGhyZWY9XCInICsgaHJlZiArICdcIiBjbGFzcz1cIndwc2YtZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICsgJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPic7XG5cblx0XHRcdGlmKCBqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5hdHRyKCAnaHJlZicsIGhyZWYgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggJ2hlYWQnICkuYXBwZW5kKCBodG1sICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZm9udFNpemUgPT09ICcnIHx8ICRmb250U2l6ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkZm9udFNpemUgPSAnMThweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGV0dGVyU3BhY2luZyA9PT0gJycgfHwgJGxldHRlclNwYWNpbmcgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgPSAnMXB4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYoICRsaW5lSGVpZ2h0ID09PSAnJyB8fCAkbGluZUhlaWdodCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkbGluZUhlaWdodCA9ICcyMHB4Jztcblx0XHRcdH1cblxuXG5cdFx0XHRsZXQgJF9hdHRycyA9ICcgZm9udC1mYW1pbHk6JyArICRmb250ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC13ZWlnaHQ6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQgKyAnOyAnICtcblx0XHRcdFx0JyBmb250LXN0eWxlOicgKyAkZm9udF93ZWlnaHRfc3R5bGUuc3R5bGUgKyAnOyAnICtcblx0XHRcdFx0JyB0ZXh0LWFsaWduOicgKyAkYWxpZ24gKyAnOyAnICtcblx0XHRcdFx0JyBjb2xvcjogJyArICRjb2xvciArICc7JyArXG5cdFx0XHRcdCcgZm9udC1zaXplOicgKyBjc3NfdW5pdHMoICRmb250U2l6ZSApICsgJzsgJyArXG5cdFx0XHRcdCcgbGV0dGVyLXNwYWNpbmc6JyArIGNzc191bml0cyggJGxldHRlclNwYWNpbmcgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxpbmUtaGVpZ2h0OicgKyBjc3NfdW5pdHMoICRsaW5lSGVpZ2h0ICkgKyAnOyAnO1xuXG5cblx0XHRcdGxldCAkdGV4dCA9ICRwcmV2aWV3LnRleHQoKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5hcHBlbmQoIGpRdWVyeSggJzwnICsgJHRhZyArICc+JyArICR0ZXh0ICsgJzwvJyArICR0YWcgKyAnID4nICkgKTtcblx0XHRcdCRwcmV2aWV3LmZpbmQoICR0YWcgKS5hdHRyKCBcInN0eWxlXCIsICRfYXR0cnMgKTtcblxuXHRcdH0gKTtcblx0fVxuXG5cdGZvbnRfc3R5bGUoICRpbmZvICkge1xuXHRcdGxldCAkd2VpZ2h0X3ZhbCA9ICc0MDAnLFxuXHRcdFx0JHN0eWxlX3ZhbCAgPSAnbm9ybWFsJztcblxuXHRcdHN3aXRjaCggJGluZm8gKSB7XG5cdFx0XHRjYXNlICcxMDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzEwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzEwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzcwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzcwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc5MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdCRzdHlsZV92YWwgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7IHdlaWdodDogJHdlaWdodF92YWwsIHN0eWxlOiAkc3R5bGVfdmFsIH07XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFkZCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbicgKSxcblx0XHRcdCRpbnB1dCAgICA9ICRlbGVtLmZpbmQoICdpbnB1dFt0eXBlPXRleHRdJyApLFxuXHRcdFx0JHNldHRpbmdzID0gJHRoaXMub3B0aW9ucygpLCB3cF9tZWRpYV9mcmFtZTtcblxuXHRcdCRhZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHdwX21lZGlhX2ZyYW1lICkge1xuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHR0aXRsZTogJHNldHRpbmdzLnNldHRpbmdzLmZyYW1lX3RpdGxlLFxuXHRcdFx0XHRsaWJyYXJ5OiB7XG5cdFx0XHRcdFx0dHlwZTogJHNldHRpbmdzLnNldHRpbmdzLnVwbG9hZF90eXBlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRcdHRleHQ6ICRzZXR0aW5ncy5zZXR0aW5ncy5pbnNlcnRfdGl0bGUsXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSB3cF9tZWRpYV9mcmFtZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpO1xuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmF0dHJpYnV0ZXMudXJsICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gKTtcblx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHRleHRhcmVhID0gJGVsZW0uZmluZCggJ3RleHRhcmVhJyApO1xuXHRcdCRlbGVtLmZpbmQoICcjd3Bvbmlvbi13cC1saW5rLXBpY2tlciA+IGJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGV4dGFyZWEudmFsKCAnJyApO1xuXHRcdFx0aWYoICF3aW5kb3cud3BMaW5rICkge1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHR0aXRsZTogJHdwb25pb24udGV4dCggJ3dwX2xpbmtfZXJyb3JfdGl0bGUnLCAnV1AgTGluayBKUyBMaWIgTm90IEZvdW5kJyApLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy53cExpbmsub3BlbiggJHRleHRhcmVhLmF0dHIoICdpZCcgKSApO1xuXHRcdH0gKTtcblxuXG5cdFx0JHRleHRhcmVhLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApLmh0bWwoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApLnZhbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0aXRsZScgKS52YWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKS52YWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnVybCBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLmF0dHIoICdocmVmJyApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50aXRsZSBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuLi9jb3JlL2RlYnVnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGxldCAkZGVwID0gdGhpcy5vcHRpb24oICdkZXBlbmRlbmN5JyApO1xuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRlcC5jb250cm9sbGVyICkge1xuXHRcdFx0bGV0ICRjb250cm9sbGVyID0gJGRlcC5jb250cm9sbGVyIFsgJGtleSBdLFxuXHRcdFx0XHQkY29uZGl0aW9uICA9ICRkZXAuY29uZGl0aW9uIFsgJGtleSBdLFxuXHRcdFx0XHQkdmFsdWUgICAgICA9ICRkZXAudmFsdWUgWyAka2V5IF0sXG5cdFx0XHRcdCRmaWVsZCAgICAgID0gJ1tkYXRhLWRlcGVuZC1pZD1cIicgKyAkY29udHJvbGxlciArICdcIl0nO1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZy5uZXN0YWJsZSApIHtcblx0XHRcdFx0bGV0ICRJTlBVVCA9IHRoaXMuY29uZmlnLnBhcmVudC5maW5kKCAnW2RhdGEtZGVwZW5kLWlkPScgKyAkY29udHJvbGxlciArICddJyApO1xuXHRcdFx0XHRpZiggJElOUFVULmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0JGZpZWxkID0gJ1tkYXRhLXdwb25pb24tanNpZD1cIicgKyAkd3Bvbmlvbi5maWVsZElEKCAkSU5QVVQgKSArICdcIl06aW5wdXQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmNyZWF0ZVJ1bGUoICRmaWVsZCwgJGNvbmRpdGlvbiwgJHZhbHVlICkgKTtcblx0XHRcdHRoaXMuc2V0X2NvbnR4dCggdGhpcy5jb250eHQuaW5jbHVkZSggdGhpcy5lbGVtZW50ICkgKTtcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ0RlcGVuZGVuY3knOiAkZGVwLCAnTmVzdGFibGUgRGVwZW5kZW5jeSc6IHRoaXMuY29uZmlnLm5lc3RhYmxlIH0gKTtcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRmaWQgICAgICAgICA9IHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1maWVsZC1qc2lkJyApLFxuXHRcdFx0JGlzX2xvYWRpbmcgID0gbnVsbCxcblx0XHRcdHdwb2ltZyAgICAgICA9ICggaW1nLCBjYWxsYmFjayApID0+IHtcblx0XHRcdFx0Y29uc3QgdGVzdERpbWVuc2lvbnMgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRcdGlmKCBpbWcubmF0dXJhbFdpZHRoICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggdGVzdERpbWVuc2lvbnMgKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA1ICk7XG5cdFx0XHR9O1xuXHRcdGxldCAkdG9vbHRpcF9rZXkgPSBmYWxzZTtcblx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJ3dwb25pb24taGVscCc7XG5cdFx0fSBlbHNlIGlmKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLXdyYXAtdG9vbHRpcCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cmFwX3Rvb2x0aXAnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAkZmlkICsgJ3Rvb2x0aXAnO1xuXHRcdH1cblxuXHRcdC8vbGV0ICR0b29sdGlwX2tleSA9ICggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkgPyAnZmllbGRfaGVscCcgOiAkZmlkICsgJ3Rvb2x0aXAnLFxuXHRcdGxldCAkYXJnID0gKCB0cnVlID09PSAkd3Bvbmlvbi52YWxpZF9qc29uKCAkZmlkICkgKSA/IEpTT04ucGFyc2UoICRmaWQgKSA6IHRoaXMub3B0aW9uKCAkdG9vbHRpcF9rZXksIGZhbHNlICk7XG5cblxuXHRcdGlmKCBmYWxzZSA9PT0gJGFyZyApIHtcblx0XHRcdGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHknICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweScgKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHktYXJncycgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH0gZWxzZSBpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICd0aXBweS1hcmdzJyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ3RpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggJGFyZyApIHtcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcblx0XHRcdGlmKCAkYXJnLmltYWdlICE9PSB1bmRlZmluZWQgJiYgJGFyZy5pbWFnZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdCRhcmcuaHRtbCAgICAgICAgICAgPSAnI3dwb3RwaW1nJztcblx0XHRcdFx0JGFyZy51cGRhdGVEdXJhdGlvbiA9IDIwMDA7XG5cdFx0XHRcdCRhcmcub25TaG93ICAgICAgICAgPSBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XG5cdFx0XHRcdFx0Y29uc3QgY29udGVudCA9IHRoaXMucXVlcnlTZWxlY3RvciggJy50aXBweS1jb250ZW50JyApO1xuXHRcdFx0XHRcdGlmKCAkaXNfbG9hZGluZyApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGlzX2xvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0ZmV0Y2goICRhcmcuaW1hZ2UgKS50aGVuKCByZXNwID0+IHJlc3AuYmxvYigpICkudGhlbiggYmxvYiA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB1cmwgICAgICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcblx0XHRcdFx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt1cmx9XCI+YDtcblx0XHRcdFx0XHRcdHdwb2ltZyggY29udGVudC5xdWVyeVNlbGVjdG9yKCAnaW1nJyApLCBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS51cGRhdGUgKTtcblx0XHRcdFx0XHRcdCRpc19sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0fSApLmNhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb250ZW50LmlubmVySFRNTCA9ICdMb2FkaW5nIGZhaWxlZCc7XG5cdFx0XHRcdFx0XHQkaXNfbG9hZGluZyAgICAgICA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5vbkhpZGRlbiAgICAgICA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnN0IGNvbnRlbnQgICAgID0gdGhpcy5xdWVyeVNlbGVjdG9yKCAnLnRpcHB5LWNvbnRlbnQnICk7XG5cdFx0XHRcdFx0Y29udGVudC5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5wb3BwZXJPcHRpb25zICA9IHsgbW9kaWZpZXJzOiB7IHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9LCBoaWRlOiB7IGVuYWJsZWQ6IGZhbHNlIH0gfSB9O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYXJnID0ge307XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50aXBweSggdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJHRvb2x0aXBfa2V5ICkgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkaW1hZ2UgPSAoIGlzX3VuZGVmaW5lZCggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApICkgKSA/IHRoaXMuZWxlbWVudC5hdHRyKCAnc3JjJyApIDogdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApO1xuXHRcdHN3YWwoIHtcblx0XHRcdGltYWdlVXJsOiAkaW1hZ2UsXG5cdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdGJhY2tkcm9wOiBgcmdiYSgwLDAsMCwwLjQ0KWBcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkLCByYW5kX21kNSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkbWNlX2VkaXRvciAgPSB0aW55TUNFUHJlSW5pdC5tY2VJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRxdWlja190YWdzICA9IHRpbnlNQ0VQcmVJbml0LnF0SW5pdFsgdGhpcy5vcHRpb24oICd3cGVkaXRvcl9pZCcgKSBdLFxuXHRcdFx0XHQkTkVXX0lEICAgICAgPSAnd3Bvbmlvbi13cC1lZGl0b3ItJyArIHJhbmRfbWQ1KCksXG5cdFx0XHRcdCR0ZXh0QXJlYSAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuY2xvbmUoKSxcblx0XHRcdFx0JGFjdHVhbF9JRCAgID0gJHRleHRBcmVhLmF0dHIoICdpZCcgKSxcblx0XHRcdFx0JGFjdHVhbF9odG1sID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKS5odG1sKCksXG5cdFx0XHRcdCRyZWdleCAgICAgICA9IG5ldyBSZWdFeHAoICRhY3R1YWxfSUQsIFwiZ1wiICk7XG5cdFx0XHQkYWN0dWFsX2h0bWwgICAgID0gJGFjdHVhbF9odG1sLnJlcGxhY2UoICRyZWdleCwgJE5FV19JRCApO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoICRhY3R1YWxfaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5wYXJlbnQoKS5hcHBlbmQoICR0ZXh0QXJlYSApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYTpub3QoIycgKyAkYWN0dWFsX0lEICsgJyknICkucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLmF0dHIoICdpZCcsICRORVdfSUQgKTtcblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRtY2VfZWRpdG9yICkgKSB7XG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcblx0XHRcdFx0dGlueW1jZS5pbml0KCAkbWNlX2VkaXRvciApO1xuXHRcdFx0XHR0aW55TUNFLmV4ZWNDb21tYW5kKCAnbWNlQWRkRWRpdG9yJywgZmFsc2UsICcjJyArICRORVdfSUQgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRxdWlja190YWdzICkgKSB7XG5cdFx0XHRcdCRxdWlja190YWdzLmlkID0gJE5FV19JRDtcblx0XHRcdFx0cXVpY2t0YWdzKCAkcXVpY2tfdGFncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBhcnJheV9tZXJnZSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJyNidWxrX2VkaXQnLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGZpbmFsX2FyZ3MgPSB7IHBvc3RfaWRzOiBbXSB9LFxuXHRcdFx0XHQkYnVsa19lZGl0ICA9ICQoICcjYnVsay1lZGl0JyApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcjYnVsay10aXRsZXMnICkuY2hpbGRyZW4oKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JGZpbmFsX2FyZ3MucG9zdF9pZHMucHVzaCggJCggdGhpcyApLmF0dHIoICdpZCcgKS5yZXBsYWNlKCAvXih0dGxlKS9pLCAnJyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRidWxrX2VkaXQuZmluZCggJy53cG9uaW9uLXF1aWNrLWVkaXQtZmllbGRzZXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzID0gYXJyYXlfbWVyZ2UoICQoIHRoaXMgKS5zZXJpYWxpemVPYmplY3QoKSwgJGZpbmFsX2FyZ3MgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0JHdwb25pb24uYWpheCggJ3NhdmUtYnVsay1lZGl0Jywge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YTogJGZpbmFsX2FyZ3MsXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcblxuY2xhc3MgV1BPbmlvbl9NZXRhYm94X01vZHVsZSBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5tZW51KCk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnaDIuYWpheC1jb250YWluZXIgYnV0dG9uJywgdGhpcy5zYXZlX2hhbmRsZXIgKTtcblx0fVxuXG5cblx0bWVudSgpIHtcblx0XHRsZXQgJGVsZW0gPSB0aGlzLmVsZW1lbnQ7XG5cdFx0JGVsZW0ub24oICdjbGljaycsICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgbGkgYScsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmhhc0NsYXNzKCAnZHJvcGRvd24nICkgKSB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuaXMoICc6dmlzaWJsZScgKSApIHtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgbGkgdWwnICkuc2xpZGVVcCggJ2Zhc3QnICk7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLnNsaWRlVG9nZ2xlKCAnZmFzdCcgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0ICRocmVmICAgICAgICAgICA9ICR3cG9uaW9uX2hlbHBlci51cmxfcGFyYW1zKCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1ocmVmJyApICksXG5cdFx0XHRcdFx0JHBhcmVudCAgICAgICAgID0gJ3dwb25pb24tdGFiLScgKyAkaHJlZlsgJ3BhcmVudC1pZCcgXSxcblx0XHRcdFx0XHQkc2VjdGlvbiAgICAgICAgPSAoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICkgPyAkcGFyZW50ICsgJy0nICsgJGhyZWZbICdzZWN0aW9uLWlkJyBdIDogZmFsc2UsXG5cdFx0XHRcdFx0JHBhcmVudF9hY3RpdmVzID0gJGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLXBhcmVudC13cmFwcycgKSxcblx0XHRcdFx0XHQkY3VycmVudCAgICAgICAgPSAkZWxlbS5maW5kKCAnZGl2IycgKyAkcGFyZW50ICk7XG5cblx0XHRcdFx0JGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMuaGlkZSgpO1xuXG5cdFx0XHRcdGlmKCAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gIT09IHVuZGVmaW5lZCAmJiAkaHJlZlsgJ3BhcmVudC1pZCcgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICdkaXYud3Bvbmlvbi1zZWN0aW9uLXdyYXBzJyApLmhpZGUoKTtcblx0XHRcdFx0XHQkY3VycmVudC5maW5kKCAnIGRpdiMnICsgJHNlY3Rpb24gKS5zaG93KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkY3VycmVudC5zaG93KCk7XG5cblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhLmFjdGl2ZSAnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUgJyApO1xuXHRcdFx0XHQkKCB0aGlzICkuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgPiBsaSA+IGEnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgYVtkYXRhLXdwb25pb24taWQ9XCJ3cG9uaW9uX21lbnVfJyArICRocmVmWyAncGFyZW50LWlkJyBdICsgJ1wiXScgKVxuXHRcdFx0XHRcdCAuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblxuXHRzYXZlX2hhbmRsZXIoIGUgKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCAkdGhpcyAgID0gdGhpcyxcblx0XHRcdCRwYXJlbnQgPSBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKSxcblx0XHRcdCRiYXNlICAgPSAkcGFyZW50LnBhcmVudCgpLnBhcmVudCgpLFxuXHRcdFx0JGhpZGRlbiA9ICRwYXJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLW1ldGFib3gtc2VjdXJlLWRhdGEnICk7XG5cblx0XHQkYmFzZS5ibG9jayggeyBtZXNzYWdlOiBudWxsLCBvdmVybGF5Q1NTOiB7IGJhY2tncm91bmQ6ICcjMDAwJywgb3BhY2l0eTogMC43IH0gfSApO1xuXG5cdFx0JGhpZGRlbi5maW5kKCAnaW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCAnbmFtZScsIGpRdWVyeSggdGhpcyApLmF0dHIoICdpZCcgKSApO1xuXHRcdH0gKTtcblx0XHRsZXQgJGZpZWxkcyA9ICRwYXJlbnQucGFyZW50KCkuZmluZCggJzppbnB1dCcgKTtcblx0XHRsZXQgJHZhbHVlcyA9ICRmaWVsZHMuc2VyaWFsaXplKCk7XG5cdFx0JGhpZGRlbi5maW5kKCAnaW5wdXQnICkucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cblx0XHQkd3Bvbmlvbi5hamF4KCAnc2F2ZV9tZXRhYm94JywgeyBkYXRhOiAkdmFsdWVzIH0sIGZ1bmN0aW9uKCByZXMgKSB7XG5cdFx0XHQkYmFzZS5odG1sKCByZXMgKTtcblx0XHRcdCRiYXNlLnVuYmxvY2soKTtcblx0XHRcdHdwb25pb25fZmllbGQoICRiYXNlLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgd3AgKSA9PiB7XG5cdCQoIGZ1bmN0aW9uKCkge1xuXHRcdCQoICdkaXYucG9zdGJveC53cG9uaW9uLW1ldGFib3gnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9NZXRhYm94X01vZHVsZSggJCggdGhpcyApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdwICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuLi9jb3JlL21vZHVsZSc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgV1BPbmlvbl9RdWlja19FZGl0IGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLnBvc3RfaWQgPSB0aGlzLmNvbnR4dDtcblx0XHRsZXQgJGlkICAgICAgPSAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKSArICdfJyArIHRoaXMucG9zdF9pZDtcblx0XHR0aGlzLnZhbHVlcyAgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRpZCwgZmFsc2UgKTtcblxuXHRcdGlmKCB0aGlzLnZhbHVlcy5odG1sICkge1xuXHRcdFx0dGhpcy52YWx1ZXMuaHRtbCA9IGpRdWVyeSggdGhpcy52YWx1ZXMuaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmh0bWwoIHRoaXMudmFsdWVzLmh0bWwuZmluZCggJz4gZGl2JyApICk7XG5cdFx0fVxuXG5cdFx0d3Bvbmlvbl9maWVsZCggdGhpcy5lbGVtZW50ICkucmVsb2FkKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIHdwICkgPT4ge1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0bGV0ICRsaXN0ID0gJCggJyN0aGUtbGlzdCcgKTtcblx0XHRpZiggJGxpc3QubGVuZ3RoID4gMCApIHtcblx0XHRcdCRsaXN0Lm9uKCAnY2xpY2snLCAnLmVkaXRpbmxpbmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IHBvc3RfaWQgPSBqUXVlcnkoIHRoaXMgKS5jbG9zZXN0KCAndHInICkuYXR0ciggJ2lkJyApO1xuXHRcdFx0XHRwb3N0X2lkICAgICA9IHBvc3RfaWQucmVwbGFjZSggJ3Bvc3QtJywgJycgKTtcblx0XHRcdFx0JCggJ3RyI2VkaXQtJyArIHBvc3RfaWQgKS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG5ldyBXUE9uaW9uX1F1aWNrX0VkaXQoIGpRdWVyeSggdGhpcyApLCBwb3N0X2lkICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfd2luZG93X2FyZyB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0b3IgZnJvbSAnLi9jb3JlL3ZhbGlkYXRpb24nO1xuXG53aW5kb3cud3Bvbmlvbl9tZXRhYm94X21vZHVsZSA9IHJlcXVpcmUoICcuL21vZHVsZXMvbWV0YWJveCcgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb25fYnVsa19lZGl0ICAgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL2J1bGstZWRpdCcgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb25fcXVpY2tfZWRpdCAgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL3F1aWNrLWVkaXQnICkuZGVmYXVsdDtcbi8vd2luZG93Lndwb25pb25fY3VzdG9taXplcl9tb2R1bGUgPSByZXF1aXJlKCAnLi9tb2R1bGVzL2N1c3RvbWl6ZXInICkuZGVmYXVsdDtcbndpbmRvdy4kd3BvbmlvbiAgICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9jb3JlJyApLmRlZmF1bHQ7XG53aW5kb3cuJHdwb25pb25fZGVidWcgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvZGVidWcnICkuZGVmYXVsdDtcbndpbmRvdy4kd3Bvbmlvbl9oZWxwZXIgICAgICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICk7XG53aW5kb3cud3Bvbmlvbl9uZXdfZmllbGQgICAgICA9ICggJGNsYXNzICkgPT4gKCBpc193aW5kb3dfYXJnKCAkY2xhc3MgKSApID8gd2luZG93WyAkY2xhc3MgXSA6IGZhbHNlO1xud2luZG93Lndwb25pb25fZmllbGQgICAgICAgICAgPSAoICRlbGVtLCAkY29udHh0ID0ge30gKSA9PiBuZXcgV1BPbmlvbl9GaWVsZCggJGVsZW0sICRjb250eHQgKTtcbndpbmRvdy53cG9uaW9uX21vZGFsICAgICAgICAgID0gcmVxdWlyZSggJy4uL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwnICkuZGVmYXVsdDtcblxubW9kdWxlLmV4cG9ydHMgPSAoICggd2luZG93LCBkb2N1bWVudCwgd3AsICQsICR3cG8gKSA9PiB7XG5cdGxldCAkd3BfaG9vayA9IHdwLmhvb2tzO1xuXG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICggKCkgPT4ge1xuXHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfaW5pdCcgKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkcyA9ICR3cF9ob29rLmFwcGx5RmlsdGVycyggJ3dwb25pb25fZmllbGRzX2Z1bmN0aW9ucycsIHtcblx0XHRcdHRleHQ6IHJlcXVpcmUoICcuL2ZpZWxkcy90ZXh0JyApLmRlZmF1bHQsXG5cdFx0XHR0ZXh0YXJlYTogcmVxdWlyZSggJy4vZmllbGRzL3RleHRhcmVhJyApLmRlZmF1bHQsXG5cdFx0XHRiYWNrZ3JvdW5kOiByZXF1aXJlKCAnLi9maWVsZHMvYmFja2dyb3VuZCcgKS5kZWZhdWx0LFxuXHRcdFx0aW1hZ2Vfc2VsZWN0OiByZXF1aXJlKCAnLi9maWVsZHMvaW1hZ2Vfc2VsZWN0JyApLmRlZmF1bHQsXG5cdFx0XHRzd2l0Y2hlcjogcmVxdWlyZSggJy4vZmllbGRzL3N3aXRjaGVyJyApLmRlZmF1bHQsXG5cdFx0XHRjb2xvcl9wYWxldHRlOiByZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGFsZXR0ZScgKS5kZWZhdWx0LFxuXHRcdFx0c2VsZWN0OiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0JyApLmRlZmF1bHQsXG5cdFx0XHRzZWxlY3QyOiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0MicgKS5kZWZhdWx0LFxuXHRcdFx0Y2hvc2VuOiByZXF1aXJlKCAnLi9maWVsZHMvY2hvc2VuJyApLmRlZmF1bHQsXG5cdFx0XHRzZWxlY3RpemU6IHJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3RpemUnICkuZGVmYXVsdCxcblx0XHRcdGljb25fcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvaWNvbl9waWNrZXInICkuZGVmYXVsdCxcblx0XHRcdGZvbnRfc2VsZWN0b3I6IHJlcXVpcmUoICcuL2ZpZWxkcy9mb250X3NlbGVjdG9yJyApLmRlZmF1bHQsXG5cdFx0XHRhY2NvcmRpb246IHJlcXVpcmUoICcuL2ZpZWxkcy9hY2NvcmRpb24nICkuZGVmYXVsdCxcblx0XHRcdGdyb3VwOiByZXF1aXJlKCAnLi9maWVsZHMvZ3JvdXAnICkuZGVmYXVsdCxcblx0XHRcdHdwX2VkaXRvcjogcmVxdWlyZSggJy4vZmllbGRzL3dwX2VkaXRvcicgKS5kZWZhdWx0LFxuXHRcdFx0cmVsb2FkX3dwX2VkaXRvcjogcmVxdWlyZSggJy4vaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yJyApLmRlZmF1bHQsXG5cdFx0XHRmaWVsZHNldDogcmVxdWlyZSggJy4vZmllbGRzL2ZpZWxkc2V0JyApLmRlZmF1bHQsXG5cdFx0XHRpbnB1dG1hc2s6IHJlcXVpcmUoICcuL2ZpZWxkcy9pbnB1dG1hc2snICkuZGVmYXVsdCxcblx0XHRcdHdwX2xpbmtzOiByZXF1aXJlKCAnLi9maWVsZHMvd3BfbGlua3MnICkuZGVmYXVsdCxcblx0XHRcdGNoZWNrYm94X3JhZGlvOiByZXF1aXJlKCAnLi9maWVsZHMvY2hlY2tib3hfcmFkaW8nICkuZGVmYXVsdCxcblx0XHRcdGtleXZhbHVlX3BhaXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9rZXl2YWx1ZV9wYWlyJyApLmRlZmF1bHQsXG5cdFx0XHRjb2xvcl9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9waWNrZXInICkuZGVmYXVsdCxcblx0XHRcdGRhdGVfcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvZGF0ZV9waWNrZXInICkuZGVmYXVsdCxcblx0XHRcdGdhbGxlcnk6IHJlcXVpcmUoICcuL2ZpZWxkcy9nYWxsZXJ5JyApLmRlZmF1bHQsXG5cdFx0XHRpbWFnZV9wb3B1cDogcmVxdWlyZSggJy4vaGVscGVycy9pbWFnZV9wb3B1cCcgKS5kZWZhdWx0LFxuXHRcdFx0dXBsb2FkOiByZXF1aXJlKCAnLi9maWVsZHMvdXBsb2FkJyApLmRlZmF1bHQsXG5cdFx0XHRpbWFnZV91cGxvYWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9pbWFnZV91cGxvYWQnICkuZGVmYXVsdCxcblx0XHRcdGpxdWVyeV90YWI6IHJlcXVpcmUoICcuL2ZpZWxkcy9qcXVlcnlfdGFiJyApLmRlZmF1bHQsXG5cdFx0XHRmaWVsZF90b29sdGlwOiByZXF1aXJlKCAnLi9oZWxwZXJzL2ZpZWxkX3Rvb2x0aXAnICkuZGVmYXVsdCxcblx0XHRcdGNsb25lX2VsZW1lbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9jbG9uZV9lbGVtZW50JyApLmRlZmF1bHQsXG5cdFx0XHRzb3J0ZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zb3J0ZXInICkuZGVmYXVsdCxcblx0XHRcdGdvb2dsZV9tYXBzOiByZXF1aXJlKCAnLi9maWVsZHMvZ29vZ2xlX21hcHMnICkuZGVmYXVsdCxcblx0XHRcdHR5cG9ncmFwaHk6IHJlcXVpcmUoICcuL2ZpZWxkcy90eXBvZ3JhcGh5JyApLmRlZmF1bHQsXG5cdFx0XHRvZW1iZWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9vZW1iZWQnICkuZGVmYXVsdCxcblx0XHR9ICk7XG5cdFx0JHdwby5zZXR0aW5nc19hcmdzICAgID0gJHdwby53aW5kb3dBcmdzKCAnd3Bvbmlvbl9jb3JlJywge30gKTtcblx0XHQkd3BvLnRleHQgICAgICAgICAgICAgPSAkd3BvLndpbmRvd0FyZ3MoICd3cG9uaW9uX2lsOG4nLCB7fSApO1xuXHRcdCR3cG8uZGVidWdfaW5mbyAgICAgICA9IG51bGw7XG5cdFx0JHdwby5maWVsZF9kZWJ1Z19pbmZvID0gbnVsbDtcblxuXHRcdGlmKCAkKCAnI3dwb3RwaW1nJyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdCQoICdib2R5JyApLmFwcGVuZCggJzxkaXYgaWQ9XCJ3cG90cGltZ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTttaW4td2lkdGg6MzAwcHg7bWluLWhlaWdodDo0MDBweDtcIj4uLjwvZGl2PicgKTtcblx0XHR9XG5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAnLndwb25pb24tZmllbGQtZGVidWctY29kZSA+IHN0cm9uZycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyggJ2Rhc2hpY29ucy1hcnJvdy1kb3duJyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LXJpZ2h0JyApO1xuXHRcdH0gKTtcblxuXHRcdGxldCAkd3BvZl9kaXYgPSAkKCAnLndwb25pb24tZnJhbWV3b3JrOm5vdCgud3Bvbmlvbi1tb2R1bGUtcXVpY2tfZWRpdC1mcmFtZXdvcmspJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcnMgSG9vayBXaXRoIFdpZGdldHMuXG5cdFx0ICovXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ3dpZGdldC1hZGRlZCB3aWRnZXQtdXBkYXRlZCcsIGZ1bmN0aW9uKCBldmVudCwgJHdpZGdldCApIHtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICR3aWRnZXQgKTtcblx0XHRcdHdwb25pb25fZmllbGQoICR3aWRnZXQgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cblx0XHRpZiggJHdwb2ZfZGl2Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX3RoZW1lX2luaXQnLCAkKCB0aGlzICkgKTtcblx0XHRcdH0gKTtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmVuZGVycyBWYWxpZGF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRuZXcgV1BPbmlvbl9WYWxpZGF0b3IoKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYW5kbGVzIEZpZWxkcyBpbml0LlxuXHRcdFx0ICovXG5cdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICQoIHRoaXMgKSApO1xuXHRcdFx0XHR3cG9uaW9uX2ZpZWxkKCAkKCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdH0gKTtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdH1cblxuXHRcdCR3cG8ubG9hZGluZ19zY3JlZW4oICR3cG9mX2RpdiwgZmFsc2UgKTtcblx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25faW5pdCcgKTtcblx0fSApICk7XG5cdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9sb2FkZWQnICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCBqUXVlcnksICR3cG9uaW9uICk7XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vanMvY29yZS9jb3JlJztcblxuY29uc3QgV1BPbmlvbl9XUF9Nb2RhbCA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKCB7XG5cdHRlbXBsYXRlczoge30sXG5cblx0ZXZlbnRzOiB7XG5cdFx0XCJjbGljayAubWVkaWEtbW9kYWwtY2xvc2VcIjogXCJjbG9zZU1vZGFsXCIsXG5cdFx0XCJjbGljayAjYnRuLWNhbmNlbFwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tb2tcIjogXCJzYXZlTW9kYWxcIixcblx0XHRcImNsaWNrIC5tZWRpYS1tZW51IGFcIjogXCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrXCIsXG5cdFx0XCJjbGljayAubWVkaWEtcm91dGVyIGFcIjogXCJoYW5kbGVfdGFiX2NsaWNrXCIsXG5cdH0sXG5cblx0YWN0aXZlX3BhZ2U6IG51bGwsXG5cblx0YWN0aXZlX3NlY3Rpb246IG51bGwsXG5cblx0aW5pdGlhbGl6ZTogKCBvcHRpb25zICkgPT4ge1xuXHRcdG9wdGlvbnMgPSBfLmV4dGVuZCgge1xuXHRcdFx0bGVmdF9tZW51OiBmYWxzZSxcblx0XHRcdGhpZGVfbWVudTogZmFsc2UsXG5cdFx0XHRodG1sOiBmYWxzZSxcblx0XHR9LCBvcHRpb25zICk7XG5cblx0XHR0aGlzLmxlZnRfbWVudSA9IG9wdGlvbnNbICdsZWZ0X21lbnUnIF07XG5cdFx0dGhpcy5odG1sICAgICAgPSBvcHRpb25zWyAnaHRtbCcgXTtcblx0XHR0aGlzLmhpZGVfbWVudSA9IG9wdGlvbnNbICdoaWRlX21lbnUnIF07XG5cblx0XHRfLmJpbmRBbGwoIHRoaXMsICdyZW5kZXInLCAncHJlc2VydmVGb2N1cycsICdjbG9zZU1vZGFsJywgJ3NhdmVNb2RhbCcsICdkb05vdGhpbmcnICk7XG5cdFx0dGhpcy5pbml0X3RlbXBsYXRlcygpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH0sXG5cblx0aW5pdF90ZW1wbGF0ZXM6ICgpID0+IHtcblx0XHRsZXQgJG0gICAgICAgICAgICAgICAgICAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnbW9kYWwnICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ2ZyYW1lLW1lbnUtaXRlbScgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0gPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdyb3V0ZXItbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMud2luZG93ICAgICAgICAgICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ2h0bWwnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5wYWdlX2NvbnRlbnQgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAncGFnZV9jb250ZW50JyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50ICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3NlY3Rpb25fY29udGVudCcgXSApO1xuXHR9LFxuXG5cdHJlbmRlcjogKCkgPT4ge1xuXHRcdCd1c2Ugc3RyaWN0Jztcblx0XHR0aGlzLiRlbC5hdHRyKCAndGFiaW5kZXgnLCAnMCcgKS5hcHBlbmQoIHRoaXMudGVtcGxhdGVzLndpbmRvdygpICk7XG5cblx0XHRpZiggdGhpcy5sZWZ0X21lbnUgKSB7XG5cdFx0XHRfLmVhY2goIHRoaXMubGVmdF9tZW51LCAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRcdHRoaXMuJCggJy5tZWRpYS1tZW51JyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtKCB7XG5cdFx0XHRcdFx0dXJsOiBrZXksXG5cdFx0XHRcdFx0bmFtZTogdmFsdWUsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuaHRtbCApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5odG1sLCAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCAkY29udGVudCA9ICQoIHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCgge1xuXHRcdFx0XHRcdGlkOiBrZXksXG5cdFx0XHRcdFx0dGl0bGU6IHZhbHVlWyAndGl0bGUnIF0sXG5cdFx0XHRcdFx0aHRtbDogdmFsdWVbICdodG1sJyBdLFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2VjdGlvbnMnIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRfLmVhY2goIHZhbHVlWyAnc2VjdGlvbnMnIF0sICggdmFsLCBrICkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICRfY29udGVudCA9IGpRdWVyeSggdGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50KCB7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGtleSArIFwiX1wiICsgayxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogdmFsWyAndGl0bGUnIF0sXG5cdFx0XHRcdFx0XHRcdFx0aHRtbDogdmFsWyAnaHRtbCcgXSxcblx0XHRcdFx0XHRcdFx0fSApICksXG5cdFx0XHRcdFx0XHRcdCRfbWVudSAgICA9IHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0oIHsgdXJsOiBrLCBuYW1lOiB2YWxbICd0aXRsZScgXSB9ICk7XG5cblx0XHRcdFx0XHRcdCRfY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWxbICdzaWRlYmFyJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbFsgJ3NpZGViYXInIF0gKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1jb250ZW50JyApLmFwcGVuZCggJF9jb250ZW50ICk7XG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXJvdXRlcicgKS5hcHBlbmQoICRfbWVudSApO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicgKS5hcHBlbmQoICRjb250ZW50ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmhpZGUoKTtcblx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0XHRcdGlmKCB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuYXBwZW5kKCB2YWx1ZVsgJ3NpZGViYXInIF0gKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtZnJhbWUtcm91dGVyJyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdFx0XHRcdCR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicgKS5hcHBlbmQoICRjb250ZW50ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUgYTpmaXJzdC1jaGlsZCcgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAud3Bvbmlvbi1tb2RhbC1jb250ZW50Om5vdCguaGlkZGVuKSAubWVkaWEtZnJhbWUtcm91dGVyIGE6Zmlyc3QtY2hpbGQnIClcblx0XHRcdC50cmlnZ2VyKCAnY2xpY2snICk7XG5cblx0XHRpZiggdGhpcy5oaWRlX21lbnUgPT09IHRydWUgKSB7XG5cdFx0XHR0aGlzLiQoICcubWVkaWEtZnJhbWUnICkuYWRkQ2xhc3MoICdoaWRlLW1lbnUnICk7XG5cdFx0fVxuXG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9uKCBcImZvY3VzaW5cIiwgdGhpcy5wcmVzZXJ2ZUZvY3VzICk7XG5cdFx0alF1ZXJ5KCAnYm9keScgKS5jc3MoIHsgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiIH0gKS5hcHBlbmQoIHRoaXMuJGVsICk7XG5cdFx0dGhpcy4kZWwuZm9jdXMoKTtcblx0fSxcblxuXHRoYW5kbGVfbGVmdF9tZW51X2NsaWNrOiAoIGUgKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCAkdGFyZ2V0ID0gJCggZS50YXJnZXQgKTtcblx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtbWVudSBhLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdGxldCAkc2hvd190YXJnZXQgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IGRpdiMnICsgJHRhcmdldC5hdHRyKCAnaHJlZicgKSApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2JyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdCRzaG93X3RhcmdldC5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKTtcblxuXHRcdGlmKCAkc2hvd190YXJnZXQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuaGFzQ2xhc3MoICdoaWRkZW4nICkgKSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkuYWRkQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lJyApLnJlbW92ZUNsYXNzKCAnaGlkZS1yb3V0ZXInICk7XG5cdFx0fVxuXHRcdHRoaXMuYWN0aXZlX3BhZ2UgICAgPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSBudWxsO1xuXHR9LFxuXG5cdGhhbmRsZV90YWJfY2xpY2s6ICggZSApID0+IHtcblx0XHRsZXQgJHRhcmdldCAgICAgICAgID0gJCggZS50YXJnZXQgKTtcblx0XHR0aGlzLmFjdGl2ZV9zZWN0aW9uID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJHBhZ2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lLW1lbnUgYS5hY3RpdmUnICkuYXR0ciggJ2hyZWYnICk7XG5cdFx0bGV0ICRiYXNlICAgICAgICAgICA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gIycgKyB0aGlzLmFjdGl2ZV9wYWdlICk7XG5cblxuXHRcdCR0YXJnZXQucGFyZW50KCkuZmluZCggJy5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JHRhcmdldC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkYmFzZS5maW5kKCAnLndwb25pb24tc2VjdGlvbi1tb2RhbC1jb250ZW50JyApLmhpZGUoKTtcblx0XHQkYmFzZS5maW5kKCAnIycgKyB0aGlzLmFjdGl2ZV9wYWdlICsgJ18nICsgdGhpcy5hY3RpdmVfc2VjdGlvbiApLnNob3coKTtcblx0fSxcblxuXHRwcmVzZXJ2ZUZvY3VzOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0aWYoIHRoaXMuJGVsWyAwIF0gIT09IGUudGFyZ2V0ICYmICF0aGlzLiRlbC5oYXMoIGUudGFyZ2V0ICkubGVuZ3RoICkge1xuXHRcdFx0dGhpcy4kZWwuZm9jdXMoKTtcblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnVuZGVsZWdhdGVFdmVudHMoKTtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub2ZmKCBcImZvY3VzaW5cIiApO1xuXHRcdGpRdWVyeSggXCJib2R5XCIgKS5jc3MoIHsgXCJvdmVyZmxvd1wiOiBcImF1dG9cIiB9ICk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fSxcblxuXHRzYXZlTW9kYWw6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHR0aGlzLmNsb3NlTW9kYWwoIGUgKTtcblx0fSxcblxuXHRkb05vdGhpbmc6IGZ1bmN0aW9uKCBlICkge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkb3B0aW9ucyA9IHt9ICkge1xuXHRcdHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRpZDogZmFsc2UsXG5cdFx0XHRkYXRhOiBmYWxzZSxcblx0XHRcdGNsYXNzTmFtZTogJ3dwb25pb24tbW9kYWwnLFxuXHRcdFx0bW9kYWw6IHt9LFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHR9LCAkb3B0aW9ucyApO1xuXG5cdFx0bmV3IFdQT25pb25fV1BfTW9kYWwoIF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IHRoaXMuZ2V0X2xlZnRfbWVudSgpLFxuXHRcdFx0aHRtbDogdGhpcy5vcHRpb25zWyAnZGF0YScgXSxcblx0XHRcdGhpZGVfbWVudTogdGhpcy5vcHRpb25zWyAnaGlkZV9tZW51JyBdLFxuXHRcdH0sIHRoaXMub3B0aW9uc1sgJ21vZGFsJyBdICkgKTtcblx0fVxuXG5cdGdldF9sZWZ0X21lbnUoKSB7XG5cdFx0bGV0ICRyZXR1cm4gPSBmYWxzZTtcblx0XHRpZiggdGhpcy5vcHRpb25zWyAnZGF0YScgXSApIHtcblx0XHRcdCRyZXR1cm4gPSB7fTtcblxuXHRcdFx0Xy5lYWNoKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLCAoICRkYXRhLCAka2V5ICkgPT4ge1xuXHRcdFx0XHQkcmV0dXJuWyAka2V5IF0gPSAoIHR5cGVvZiAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gIT09ICd1bmRlZmluZWQnICkgPyAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gOiAkZGF0YVsgJ3RpdGxlJyBdO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRyZXR1cm4gJHJldHVybjtcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=