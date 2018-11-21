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
			$exists = array_merge({ 'PHP Args': {}, 'JS Args': {} }, $exists);

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
			var _this3 = this;

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

				$found.find('> .wponion-fieldset .wponion-field-debug-code-gen').on('click', function () {
					swal({
						html: _this3.option('debug_field_code'),
						width: '800px',
						showCloseButton: true,
						heightAuto: false,
						showConfirmButton: false,
						animation: false
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
			this.init_field('.wponion-element-heading', 'heading');
			this.init_field('.wponion-element-subheading', 'subheading');
			this.init_field('.wponion-element-content', 'content');
			this.init_field('.wponion-element-jambo_content', 'jambo_content');
			this.init_field('.wponion-element-backup', 'backup');
			this.init_field('.wponion-element-notice', 'notice');

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

/***/ "./src/js/fields/backup.js":
/*!*********************************!*\
  !*** ./src/js/fields/backup.js ***!
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

			this.tooltip();

			this.element.find('input[type="file"]').on('change', function (e) {
				_this2.handle_backup_import(e.currentTarget);
			});

			this.element.find('a.download_backup').on('click', function (e) {
				var $file = _this2.option('base_unique');
				$file = $file + '-' + _this2.module();
				var date = new Date();
				var str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + date.getMinutes() + date.getSeconds();
				$file = $file + '-' + str;
				_this2.force_download(JSON.parse(_this2.element.find('.backup_textarea textarea').html()), $file);
			});

			this.element.find('a.new_backup ').on('click', function (e) {
				_this2.block_form();
				_this2.ajax('new-module-data-backup', {
					data: {
						unique: _this2.option('base_unique'),
						extra: _this2.get_extra_value()
					},
					onSuccess: function onSuccess(e) {
						if (e.success) {
							_this2.tooltip(true);
							_this2.element.find('.backup_lists').html(e.data);
							_this2.tooltip();
						} else {
							_this2.swal_error(e.data);
						}
					},
					onAlways: function onAlways(e) {
						return _this2.unblock_form();
					}
				});
			});

			this.element.on('click', '.delete_backup', function (e) {
				_this2.block_form();
				var $ins = jQuery('div.tippy-popper .tippy-content .delete_backup').tippy_get();
				if ($ins.instances[0]) {
					$ins.instances[0].destroy();
				}
				_this2.ajax('delete-module-data-backup', {
					data: {
						unique: _this2.option('base_unique'),
						extra: _this2.get_extra_value(),
						backup_id: jQuery(e.currentTarget).attr('data-backupid')
					},
					onSuccess: function onSuccess(e) {
						if (e.success) {
							_this2.tooltip(true);
							_this2.element.find('.backup_lists').html(e.data);
							_this2.tooltip();
						} else {
							_this2.swal_error(e.data);
						}
					},
					onAlways: function onAlways() {
						return _this2.unblock_form();
					}
				});
			});

			this.element.on('click', '.restore_backup', function (e) {
				_this2.restore_backup(jQuery(e.currentTarget).attr('data-backupid'));
			});

			this.element.on('blur', '.restore_textarea textarea', function (e) {
				try {
					_this2.restore_backup(JSON.parse(jQuery(e.currentTarget).val()));
					jQuery(e.currentTarget).val('').html('');
				} catch (e) {
					_this2.swal_error(_this2.option('invalid_format'));
				}
			});
		}
	}, {
		key: 'swal_error',
		value: function swal_error(msg) {
			swal({
				type: 'error',
				title: msg
			});
		}
	}, {
		key: 'tooltip',
		value: function tooltip() {
			var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			var $this = this;
			if (true === remove) {
				this.element.find('.backup_lists li').each(function () {
					var $elem = jQuery(this).find('> a')[0];
					$elem._tippy.destroy();
				});
			} else {
				this.element.find('.backup_lists li').each(function () {
					$this.show_tooltip(jQuery(this).find('>a'));
				});
			}
		}
	}, {
		key: 'block_form',
		value: function block_form() {
			jQuery(document).find('button').attr('disabled', 'disabled');
		}
	}, {
		key: 'unblock_form',
		value: function unblock_form() {
			jQuery(document).find('button').removeAttr('disabled');
		}
	}, {
		key: 'force_download',
		value: function force_download(exportObj, exportName) {
			var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
			var downloadAnchorNode = document.createElement('a');
			downloadAnchorNode.setAttribute('href', dataStr);
			downloadAnchorNode.setAttribute('download', exportName + '.json');
			document.body.appendChild(downloadAnchorNode); // required for firefox
			downloadAnchorNode.click();
			downloadAnchorNode.remove();
		}
	}, {
		key: 'restore_backup',
		value: function restore_backup(backup_id) {
			var _this3 = this;

			this.block_form();
			this.ajax('restore-module-data-backup', {
				data: {
					unique: this.option('base_unique'),
					extra: this.get_extra_value(),
					backup_id: backup_id
				},
				onSuccess: function onSuccess(e) {
					if (e.success) {
						swal({
							type: 'success',
							title: e.data
						});
					} else {
						_this3.swal_error(e.data);
					}
				},
				onAlways: function onAlways() {
					return _this3.unblock_form();
				}
			});
		}
	}, {
		key: 'handle_backup_import',
		value: function handle_backup_import($elem) {
			var _this4 = this;

			if ($elem.files && $elem.files[0]) {
				var $file = $elem.files[0];

				if ($file.type !== 'application/json') {
					this.swal_error(this.option('invalid_format'));
				} else {

					var reader = new FileReader();
					reader.onload = function (e) {
						_this4.restore_backup(JSON.parse(e.target.result));
					};
					reader.readAsText($file);
				}
			}
		}
	}, {
		key: 'show_tooltip',
		value: function show_tooltip($elem) {
			var $backupid = $elem.attr('data-backupid');
			tippy($elem[0], {
				arrow: true,
				appendTo: this.element[0],
				arrowType: 'round',
				content: '<button data-backupid="' + $backupid + '" type="button" class="restore_backup button button-secondary button-small"><i class="dashicons-image-rotate dashicons"></i> </button> | <button data-backupid="' + $backupid + '" type="button" class="delete_backup button button-secondary button-small"><i class="dashicons-trash dashicons"></i> </button>',
				interactive: true,
				theme: 'translucent',
				onShown: function onShown() {
					jQuery('div.tippy-popper .tippy-content .delete_backup').tippy({
						arrow: true,
						arrowType: 'skinny',
						content: _core2.default.txt('delete'),
						theme: 'light-border',
						interactive: false,
						placement: 'bottom'
					});

					jQuery('div.tippy-popper .tippy-content .restore_backup').tippy({
						arrow: true,
						arrowType: 'skinny',
						content: _core2.default.txt('restore'),
						theme: 'light-border',
						placement: 'bottom'
					});
				},
				placement: 'right'
			});
		}
	}, {
		key: 'get_extra_value',
		value: function get_extra_value() {
			if (jQuery('form#post input#post_ID').length === 1) {
				return jQuery('form#post input#post_ID').val();
			}
			return false;
		}
	}]);

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

/***/ "./src/js/fields/content.js":
/*!**********************************!*\
  !*** ./src/js/fields/content.js ***!
  \**********************************/
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

/***/ "./src/js/fields/heading.js":
/*!**********************************!*\
  !*** ./src/js/fields/heading.js ***!
  \**********************************/
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

/***/ "./src/js/fields/jambo_content.js":
/*!****************************************!*\
  !*** ./src/js/fields/jambo_content.js ***!
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

/***/ "./src/js/fields/notice.js":
/*!*********************************!*\
  !*** ./src/js/fields/notice.js ***!
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

/***/ "./src/js/fields/subheading.js":
/*!*************************************!*\
  !*** ./src/js/fields/subheading.js ***!
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
			var $fid = this.element.attr('data-field-jsid');
			var $tooltip_key = false;
			if (true === this.element.hasClass('wponion-help')) {
				$tooltip_key = 'wponion-help';
			} else if (true === this.element.hasClass('wponion-wrap-tooltip')) {
				$tooltip_key = 'wrap_tooltip';
			} else {
				$tooltip_key = $fid + 'tooltip';
			}

			var $arg = true === _core2.default.valid_json($fid) ? JSON.parse($fid) : this.option($tooltip_key, false);

			var state = {
				isFetching: false,
				canFetch: true
			};

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
					var $image = $arg.image;
					$arg.interactive = true;
					$arg.content = 'Loading...';
					//$arg.html           = '#wpotpimg';
					$arg.updateDuration = 2000;
					$arg.onShow = async function (tip) {
						if (state.isFetching || !state.canFetch) {
							return;
						}
						state.isFetching = true;
						state.canFetch = false;

						try {
							var response = await fetch($image);
							var blob = await response.blob();
							var url = URL.createObjectURL(blob);
							if (tip.state.isVisible) {
								tip.setContent('<div style="min-width:25px;min-height:25px;"><img style="display: inline-block; width:100%; height:100%;" src="' + url + '"/></div>');
							}
						} catch (e) {
							tip.setContent('Fetch failed. ' + e);
						} finally {
							state.isFetching = false;
						}
					};
					$arg.onHidden = function (tip) {
						state.canFetch = true;
						tip.setContent('Loading...');
					};
					$arg.popperOptions = {
						modifiers: {
							preventOverflow: {
								enabled: false
							},
							hide: {
								enabled: false
							}
						}
					};
				}
			} else {
				$arg = {};
			}

			delete $arg.image;
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
			oembed: __webpack_require__(/*! ./fields/oembed */ "./src/js/fields/oembed.js").default,
			heading: __webpack_require__(/*! ./fields/heading */ "./src/js/fields/heading.js").default,
			subheading: __webpack_require__(/*! ./fields/subheading */ "./src/js/fields/subheading.js").default,
			jambo_content: __webpack_require__(/*! ./fields/jambo_content */ "./src/js/fields/jambo_content.js").default,
			notice: __webpack_require__(/*! ./fields/notice */ "./src/js/fields/notice.js").default,
			content: __webpack_require__(/*! ./fields/content */ "./src/js/fields/content.js").default,
			backup: __webpack_require__(/*! ./fields/backup */ "./src/js/fields/backup.js").default
		});
		$wpo.settings_args = $wpo.windowArgs('wponion_core', {});
		$wpo.text = $wpo.windowArgs('wponion_il8n', {});
		$wpo.debug_info = null;
		$wpo.field_debug_info = null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvYXJyYXkvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9pbmZvL2luaV9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2ludHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfYm9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC94bWwvdXRmOF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sX2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9fd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Nsb25lX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jb3B5X3RvX2NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGV2aWNlX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGlmZl9kYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19hZnRlcl9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2JlZm9yZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19zYW1lX2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdGFiX2ZvY3VzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3dpbmRvd19hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvb2tnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9waXBlX2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9wbGFpbl9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcXVlcnlfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3JhbmRfbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3Njcm9sbF9wb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3RvX3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90aW1lX3Rha2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90b19qc19mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3VybF9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdmFsaWRhdGVTaW5nbGVKU0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvd2luZG93X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93cmFwX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9iYWNrdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2RhdGVfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9mb250X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2dvb2dsZV9tYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9oZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaWNvbl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qYW1ib19jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0aXplLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3ViaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZmllbGRfdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9pbWFnZV9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2J1bGstZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXRhYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1aWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dwb25pb24tY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9ycy9iYWNrYm9uZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiJdLCJuYW1lcyI6WyJKU19QYXJzZV9BcmdzIiwiJGFyZ3MiLCIkZGVmYXVsdHMiLCIkaXNfbmVzdGVkIiwiYXJncyIsImRlZmF1bHRzIiwibmVzdGVkIiwicGFyc2UiLCIkX2tleSIsIiRpc19kZWVwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5X21lcmdlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcmdsIiwibGVuZ3RoIiwiYXJnIiwicmV0T2JqIiwiayIsImFyZ2lsIiwiaiIsImkiLCJjdCIsInRvU3RyIiwiT2JqZWN0IiwidG9TdHJpbmciLCJyZXRBcnIiLCJjb25jYXQiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJhcnJheV9tZXJnZV9yZWN1cnNpdmUiLCJhcnIxIiwiYXJyMiIsImFycmF5TWVyZ2UiLCJyZXF1aXJlIiwiaWR4IiwicHVzaCIsImFycmF5X3ZhbHVlcyIsImlucHV0IiwidG1wQXJyIiwia2V5IiwiY291bnQiLCJtaXhlZFZhciIsIm1vZGUiLCJjbnQiLCJpbl9hcnJheSIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJnU3RyaWN0Iiwic3RyaWN0IiwibWljcm90aW1lIiwiZ2V0QXNGbG9hdCIsInMiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRpbWluZyIsIm5hdmlnYXRpb25TdGFydCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwidGltZSIsImZsb29yIiwiY2FsbF91c2VyX2Z1bmMiLCJjYiIsInBhcmFtZXRlcnMiLCJjYWxsVXNlckZ1bmNBcnJheSIsImNhbGxfdXNlcl9mdW5jX2FycmF5IiwiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsImZ1bmMiLCJzY29wZSIsInZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuIiwibWF0Y2giLCJGdW5jdGlvbiIsImV2YWwiLCJFcnJvciIsImFwcGx5IiwiZnVuY3Rpb25fZXhpc3RzIiwiZnVuY05hbWUiLCJpbmlfZ2V0IiwidmFybmFtZSIsIiRsb2N1dHVzIiwicGhwIiwiaW5pIiwibG9jYWxfdmFsdWUiLCJ1bmRlZmluZWQiLCJleHBsb2RlIiwiZGVsaW1pdGVyIiwic3RyaW5nIiwibGltaXQiLCJzcGxpdCIsImpvaW4iLCJzcGxpY2UiLCJpbXBsb2RlIiwiZ2x1ZSIsInBpZWNlcyIsInJldFZhbCIsInRHbHVlIiwibWQ1Iiwic3RyIiwiaGFzaCIsImNyeXB0byIsIm1kNXN1bSIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJlIiwidXRmOEVuY29kZSIsInhsIiwiX3JvdGF0ZUxlZnQiLCJsVmFsdWUiLCJpU2hpZnRCaXRzIiwiX2FkZFVuc2lnbmVkIiwibFgiLCJsWSIsImxYNCIsImxZNCIsImxYOCIsImxZOCIsImxSZXN1bHQiLCJfRiIsIngiLCJ5IiwieiIsIl9HIiwiX0giLCJfSSIsIl9GRiIsImEiLCJiIiwiYyIsImQiLCJhYyIsIl9HRyIsIl9ISCIsIl9JSSIsIl9jb252ZXJ0VG9Xb3JkQXJyYXkiLCJsV29yZENvdW50IiwibE1lc3NhZ2VMZW5ndGgiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAxIiwibE51bWJlck9mV29yZHNUZW1wMiIsImxOdW1iZXJPZldvcmRzIiwibFdvcmRBcnJheSIsImxCeXRlUG9zaXRpb24iLCJsQnl0ZUNvdW50IiwiY2hhckNvZGVBdCIsIl93b3JkVG9IZXgiLCJ3b3JkVG9IZXhWYWx1ZSIsIndvcmRUb0hleFZhbHVlVGVtcCIsImxCeXRlIiwibENvdW50Iiwic3Vic3RyIiwiQUEiLCJCQiIsIkNDIiwiREQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJ0ZW1wIiwidG9Mb3dlckNhc2UiLCJwYXJzZV9zdHIiLCJhcnJheSIsInN0ckFyciIsIlN0cmluZyIsInJlcGxhY2UiLCJzYWwiLCJwIiwibGFzdE9iaiIsImNociIsInRtcCIsInZhbHVlIiwicG9zdExlZnRCcmFja2V0UG9zIiwia2V5cyIsImtleXNMZW4iLCJfZml4U3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckF0IiwiaW5kZXhPZiIsInN0cl9yZXBsYWNlIiwic2VhcmNoIiwic3ViamVjdCIsImNvdW50T2JqIiwicmVwbCIsInNsIiwiZmwiLCJmIiwiciIsInJhIiwic2EiLCJzdHJ0b2xvd2VyIiwic3RydG91cHBlciIsInRvVXBwZXJDYXNlIiwiYmFzZTY0X2RlY29kZSIsImVuY29kZWREYXRhIiwiZGVjb2RlVVRGOHN0cmluZyIsIm1hcCIsImF0b2IiLCJCdWZmZXIiLCJiNjQiLCJvMSIsIm8yIiwibzMiLCJoMSIsImgyIiwiaDMiLCJoNCIsImJpdHMiLCJkZWMiLCJmcm9tQ2hhckNvZGUiLCJiYXNlNjRfZW5jb2RlIiwic3RyaW5nVG9FbmNvZGUiLCJlbmNvZGVVVEY4c3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG9Tb2xpZEJ5dGVzIiwicDEiLCJidG9hIiwiZW5jIiwiYm9vbHZhbCIsImlzQXJyYXkiLCJlbXB0eSIsInVuZGVmIiwibGVuIiwiZW1wdHlWYWx1ZXMiLCJmbG9hdHZhbCIsInBhcnNlRmxvYXQiLCJpbnR2YWwiLCJiYXNlIiwidHlwZSIsImlzTmFOIiwiaXNGaW5pdGUiLCJjZWlsIiwiaXNfYXJyYXkiLCJfZ2V0RnVuY05hbWUiLCJmbiIsIm5hbWUiLCJleGVjIiwiX2lzQXJyYXkiLCJpbmlWYWwiLCJhc1N0cmluZyIsImFzRnVuYyIsImlzX2Jvb2wiLCJpc19jYWxsYWJsZSIsInN5bnRheE9ubHkiLCJjYWxsYWJsZU5hbWUiLCJtZXRob2QiLCJ2YWxpZEZ1bmN0aW9uTmFtZSIsImdldEZ1bmNOYW1lIiwiaXNfZmxvYXQiLCJpc19pbnQiLCJpc19udWxsIiwiaXNfbnVtZXJpYyIsIndoaXRlc3BhY2UiLCJpc19vYmplY3QiLCJpc19zY2FsYXIiLCJ0ZXN0IiwiaXNfc3RyaW5nIiwiaXNzZXQiLCJsIiwidXRmOF9lbmNvZGUiLCJhcmdTdHJpbmciLCJ1dGZ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJzdHJpbmdsIiwibiIsImMxIiwiUmFuZ2VFcnJvciIsImMyIiwiYXJyIiwibGlzdElEIiwidGFnIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJpdGVtIiwiJGRhdGEiLCJyZXR1cm5faHRtbCIsIkkiLCJLIiwiJHZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIiRhcnJheSIsIiRrZXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZCIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2VsZWN0b3IiLCJzdGVwIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiX3N0ZXAiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFicyIsImlzTnVtYmVyaWMiLCJ2YWwiLCJjaGVja1B4IiwiY2hlY2tQY3QiLCJjaGVja0VtIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGF0ZUluaXRpYWwiLCJkYXRlRmluYWwiLCJtcyIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJtaWxsaXNlY29uZCIsImVudHJpZXMiLCJmaWx0ZXIiLCJkYXRlQSIsImRhdGVCIiwiJGVsZW0iLCJqUXVlcnkiLCJ0b0lTT1N0cmluZyIsImhpZGRlbiIsIiRPS1MiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlIiwicHJvcGVydHkiLCJzaGlmdCIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiZGF0YSIsImNyZWF0ZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImxvY2F0aW9uIiwicmFuZG9tIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwiY2FsbGJhY2siLCJ0aXRsZSIsInRpbWVFbmQiLCIkYXJnc19rZXkiLCIkY29udGVudHNfa2V5IiwidXJsIiwicmVkdWNlIiwidiIsIiRzdHJpbmciLCIkY29udGVudHMiLCIkX2siLCJXUE9uaW9uIiwiJHR5cGUiLCJ3cG9uaW9uX2ZpZWxkcyIsImF0dHIiLCIkd2hlcmVfdG9fZmluZCIsIiRpZCIsImZpZWxkSUQiLCJmaW5kIiwiJHZhcl9pZCIsIiRkZWZhdWx0IiwiaXNGaWVsZCIsIndpbmRvd0FyZ3MiLCJ0ZXh0IiwiJGlzX3Nob3ciLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGhhbmRsZSIsIiRqc29uIiwiZGVidWdfaW5mbyIsIiRkZWZpbmVkX3ZhcnMiLCJvbiIsInByZXZlbnREZWZhdWx0Iiwic3dhbCIsInR4dCIsImh0bWwiLCJzaG93Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2hvd0Nsb3NlQnV0dG9uIiwiYW5pbWF0aW9uIiwid2lkdGgiLCJvbkJlZm9yZU9wZW4iLCJlbmFibGVMb2FkaW5nIiwib25PcGVuIiwianNvblZpZXciLCJkaXNhYmxlTG9hZGluZyIsInRoZW4iLCJyZXN1bHQiLCJzZXR0aW5nc19hcmdzIiwib3B0aW9uIiwiaXNfZGVidWciLCJmaWVsZF9kZWJ1Z19pbmZvIiwiJHZhcnMiLCIkdXR4dCIsIiRtdHh0IiwiJGFjdGlvbiIsIiRvblN1Y2Nlc3MiLCIkb25FcnJvciIsIiRvbkFsd2F5cyIsIm9uU3VjY2VzcyIsIm9uQWx3YXlzIiwib25FcnJvciIsIiRhamF4IiwiYWpheCIsImRvbmUiLCJyZXMiLCJmYWlsIiwiYWx3YXlzIiwiY29tcGlsZWQiLCJvcHRpb25zIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsInZhcmlhYmxlIiwiXyIsInRlbXBsYXRlIiwiJGVsZW1lbnQiLCJwYXJhbSIsIm5lc3RhYmxlIiwicGFyZW50IiwiJHRoaXMiLCIkZWwiLCJpbml0IiwicnVsZXNldCIsImRlcHMiLCJjcmVhdGVSdWxlc2V0IiwiZGVwUm9vdCIsImVuYWJsZSIsInNob3ciLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJhZGRDbGFzcyIsImNoZWNrVGFyZ2V0cyIsImluc3RhbmNlIiwiZWFjaCIsIldQT25pb25fRGVwZW5kZW5jeSIsImlzX2pxdWVyeSIsImlzX3VuZGVmaW5lZCIsIiRzZWxlY3RvciIsIiRjb250ZXh0IiwiJGNvbmZpZyIsInNldF9hcmdzIiwiZmllbGRfZGVidWciLCJjb25maWciLCJqc19lcnJvcl9oYW5kbGVyIiwianNfdmFsaWRhdG9yIiwiZXJyIiwiZXJyb3IiLCJhcHBlbmRUbyIsImVsZW1lbnQiLCJqc19lcnJvciIsIm1heWJlX2pzX3ZhbGlkYXRlX2VsZW0iLCJXUE9uaW9uX1ZhbGlkYXRpb24iLCJnZXRfZm9ybSIsImpzX3ZhbGlkYXRlX2VsZW0iLCJydWxlcyIsIiRhcmciLCIkd3BvbmlvbiIsImpzX2Z1bmMiLCIkZXhpc3RzIiwiJHdwb25pb25fZGVidWciLCJnZXQiLCJpZCIsImFkZCIsIiRpbmZvIiwiJGFyciIsIkZpZWxkIiwiTW9kdWxlIiwiVW5pcXVlIiwiJGZvdW5kIiwiaGFzQ2xhc3MiLCIkSUQiLCJ0aXBweSIsImFycm93IiwiYXJyb3dUeXBlIiwicGxhY2VtZW50IiwidGhlbWUiLCIkZCIsIiRub3RpY2VfdHh0IiwiaGVpZ2h0QXV0byIsIl9hcmdzIiwiJGFqYXhfa2V5IiwicGx1Z2luX2lkIiwiJF9pbnN0YW5jZXMiLCIkY2xhc3MiLCJnZXRfZmllbGRfY2xhc3MiLCJ3cCIsImhvb2tzIiwiYWRkQWN0aW9uIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwic2V0X2VsZW1lbnQiLCJzZXRfY29udHh0IiwibW9kdWxlX2luaXQiLCJlbGVtIiwiJGNvbnR4dCIsImNvbnRleHQiLCJXUE9uaW9uX1ZhbGlkYXRvciIsImZvcm0iLCJpbnZhbGlkSGFuZGxlciIsInNpYmxpbmdzIiwicmVtb3ZlIiwiYmVmb3JlIiwiaWdub3JlIiwiZXJyb3JQbGFjZW1lbnQiLCJ0cmlnZ2VyIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsInZhbGlkYXRlIiwiYWNjb3JkaW9uIiwiaGVhZGVyIiwiY29sbGFwc2libGUiLCJhbmltYXRlIiwiaGVpZ2h0U3R5bGUiLCJhY3RpdmUiLCJpY29ucyIsIklEdG9FbGVtZW50IiwiV1BPbmlvbl9GaWVsZCIsInRvb2x0aXAiLCJoYW5kbGVfYmFja3VwX2ltcG9ydCIsImN1cnJlbnRUYXJnZXQiLCIkZmlsZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmb3JjZV9kb3dubG9hZCIsImJsb2NrX2Zvcm0iLCJ1bmlxdWUiLCJleHRyYSIsImdldF9leHRyYV92YWx1ZSIsInN1Y2Nlc3MiLCJzd2FsX2Vycm9yIiwidW5ibG9ja19mb3JtIiwiJGlucyIsInRpcHB5X2dldCIsImluc3RhbmNlcyIsImRlc3Ryb3kiLCJiYWNrdXBfaWQiLCJyZXN0b3JlX2JhY2t1cCIsIm1zZyIsIl90aXBweSIsInNob3dfdG9vbHRpcCIsInJlbW92ZUF0dHIiLCJleHBvcnRPYmoiLCJleHBvcnROYW1lIiwiZGF0YVN0ciIsImRvd25sb2FkQW5jaG9yTm9kZSIsImNsaWNrIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwidGFyZ2V0IiwicmVhZEFzVGV4dCIsIiRiYWNrdXBpZCIsImNvbnRlbnQiLCJpbnRlcmFjdGl2ZSIsIm9uU2hvd24iLCIkaW5wdXRzIiwicHJvcCIsImNob3NlbiIsImhhbmRsZV9hcmdzIiwiJGNsb25lX3dyYXAiLCIkYWRkX2J0biIsIiRsaW1pdCIsIiRlcm9yX21zZyIsImVycm9yX21zZyIsIiRzb3J0Iiwic29ydCIsIml0ZW1zIiwiaGFuZGxlIiwicGxhY2Vob2xkZXIiLCJldmVudCIsInVpIiwiY3NzIiwic3RvcCIsIldQT25pb25DbG9uZXIiLCJhZGRfYnRuIiwiY2xvbmVfZWxlbSIsInJlbW92ZV9idG4iLCJ0ZW1wbGF0ZUFmdGVyUmVuZGVyIiwiJGUiLCJ3cG9uaW9uX2ZpZWxkIiwicmVsb2FkIiwic29ydGFibGUiLCJvbkxpbWl0UmVhY2hlZCIsIiRodG1sIiwicHJlcGVuZCIsIiRfX0UiLCJzZXRUaW1lb3V0Iiwic2hvd19hbmltYXRpb24iLCJhbmltYXRpb25zIiwiaGlkZV9hbmltYXRpb24iLCJ3cENvbG9yUGlja2VyIiwiJHNldHRpbmdzIiwiJHZpZXciLCJhcHBlbmQiLCJwbHVnaW5zIiwicmFuZ2VQbHVnaW4iLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsIndlYnNhZmUiLCJmb250cyIsImJ1aWxkX29wdGlvbnMiLCJ2YXJpYW50cyIsImdvb2dsZV9mb250cyIsIiR2YXJpYW50IiwiJGh0bWxfdGVtcCIsIiRpbnB1dCIsIiRwcmV2aWV3Iiwid3BfbWVkaWFfZnJhbWUiLCIkYWRkIiwiJGVkaXQiLCIkY2xlYXIiLCIkbWFuYWdlIiwiaWRzIiwid2hhdCIsInN0YXRlIiwibWVkaWEiLCJnYWxsZXJ5IiwibGlicmFyeSIsImZyYW1lIiwibXVsdGlwbGUiLCJvcGVuIiwiZWRpdCIsInNldFN0YXRlIiwic2VsZWN0aW9uIiwic2VsZWN0ZWRJZHMiLCJtb2RlbHMiLCJhdHRhY2htZW50IiwidG9KU09OIiwic2l6ZXMiLCJ0aHVtYiIsInRodW1ibmFpbCIsIiR0bXAiLCIkcGFyZW50IiwiJGltYWdlX2lkIiwiJGsiLCIkdiIsImN1cnNvciIsInNjcm9sbFNlbnNpdGl2aXR5IiwiZm9yY2VQbGFjZWhvbGRlclNpemUiLCJoZWxwZXIiLCJvcGFjaXR5IiwiJGl0ZW0iLCJoZWlnaHQiLCIkbWFwIiwiZGV0YWlscyIsImRldGFpbHNBdHRyaWJ1dGUiLCIkX2luc3RhbmNlIiwiZ2VvY29tcGxldGUiLCJiaW5kIiwibGF0TG5nIiwiZ2VvY29kZXIiLCJnb29nbGUiLCJtYXBzIiwiR2VvY29kZXIiLCJnZW9jb2RlIiwibGF0IiwibG5nIiwiJGdyb3VwX3dyYXAiLCIkZXJyb3JfbXNnIiwib25SZW1vdmUiLCJzZXR0aW5ncyIsIiRfdGhpcyIsIiRyZW1vdmVfYnRuIiwiJHdvcmsiLCJlbGVtcyIsInBvcHVwIiwiZWxtIiwiaW5pdF90b29sdGlwIiwicG9wdXBfdG9vbHRpcCIsIiR0cCIsIiRlbG0iLCIkaW5zdGFuY2UiLCIkaGVpZ2h0IiwiJGljb24iLCJjbG9zZU1vZGFsIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiJHJlcyIsInJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwiJHBvcHVwIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjdXN0b21DbGFzcyIsIiRwb3B1cF9lbGVtIiwiJHByZXZpZXdfYWRkIiwibWVkaWFfaW5zdGFuY2UiLCJob29rIiwiZG9BY3Rpb24iLCJmaXJzdCIsImF0dHJpYnV0ZXMiLCJpbnB1dG1hc2siLCIkdGhpc19lbGVtIiwiJHRhYiIsImdsb2JhbF92YWxpZGF0ZSIsImFmdGVyIiwiZXEiLCJpbWFnZSIsInNob3dfcHJldmlldyIsInNlbGVjdDIiLCJzZWxlY3RpemUiLCIkZW5hYmxlZCIsIiRkaXNhYmxlZCIsImNvbm5lY3RXaXRoIiwiZm9udF93ZWlnaHRfc3R5bGUiLCIkZm9udF9maWVsZCIsIiRmb250IiwiJGZvbnRfd2VpZ2h0X3N0eWxlIiwiZm9udF9zdHlsZSIsIiR0YWciLCIkY29sb3IiLCIkYWxpZ24iLCIkZm9udFNpemUiLCIkbGluZUhlaWdodCIsIiRiYWNrVVBGb250IiwiJGRpcmVjdGlvbiIsIiRsZXR0ZXJTcGFjaW5nIiwiaHJlZiIsIndlaWdodCIsIiRfYXR0cnMiLCIkdGV4dCIsIiR3ZWlnaHRfdmFsIiwiJHN0eWxlX3ZhbCIsImZyYW1lX3RpdGxlIiwidXBsb2FkX3R5cGUiLCJidXR0b24iLCJpbnNlcnRfdGl0bGUiLCIkdGV4dGFyZWEiLCJ3cExpbmsiLCIkZGVwIiwiY29udHJvbGxlciIsIiRjb250cm9sbGVyIiwiJGNvbmRpdGlvbiIsImNvbmRpdGlvbiIsIiRmaWVsZCIsIiRJTlBVVCIsImNvbnR4dCIsImNyZWF0ZVJ1bGUiLCJpbmNsdWRlIiwiJGZpZCIsIiR0b29sdGlwX2tleSIsInZhbGlkX2pzb24iLCJpc0ZldGNoaW5nIiwiY2FuRmV0Y2giLCIkaW1hZ2UiLCJ1cGRhdGVEdXJhdGlvbiIsIm9uU2hvdyIsInRpcCIsInJlc3BvbnNlIiwiZmV0Y2giLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNWaXNpYmxlIiwic2V0Q29udGVudCIsIm9uSGlkZGVuIiwicG9wcGVyT3B0aW9ucyIsIm1vZGlmaWVycyIsInByZXZlbnRPdmVyZmxvdyIsImltYWdlVXJsIiwiYmFja2dyb3VuZCIsImJhY2tkcm9wIiwiJG1jZV9lZGl0b3IiLCJ0aW55TUNFUHJlSW5pdCIsIm1jZUluaXQiLCIkcXVpY2tfdGFncyIsInF0SW5pdCIsIiRORVdfSUQiLCIkdGV4dEFyZWEiLCJjbG9uZSIsIiRhY3R1YWxfSUQiLCIkYWN0dWFsX2h0bWwiLCIkcmVnZXgiLCJ0aW55bWNlIiwidGlueU1DRSIsInF1aWNrdGFncyIsIiQiLCIkZmluYWxfYXJncyIsInBvc3RfaWRzIiwiJGJ1bGtfZWRpdCIsImNoaWxkcmVuIiwic2VyaWFsaXplT2JqZWN0IiwiYXN5bmMiLCJjYWNoZSIsIldQT25pb25fTWV0YWJveF9Nb2R1bGUiLCJtZW51Iiwic2F2ZV9oYW5kbGVyIiwibmV4dCIsImlzIiwic2xpZGVUb2dnbGUiLCJzbGlkZVVwIiwiJGhyZWYiLCIkd3Bvbmlvbl9oZWxwZXIiLCJ1cmxfcGFyYW1zIiwiJHNlY3Rpb24iLCIkcGFyZW50X2FjdGl2ZXMiLCIkY3VycmVudCIsIiRiYXNlIiwiJGhpZGRlbiIsImJsb2NrIiwibWVzc2FnZSIsIm92ZXJsYXlDU1MiLCIkZmllbGRzIiwiJHZhbHVlcyIsInNlcmlhbGl6ZSIsInVuYmxvY2siLCJXUE9uaW9uX1F1aWNrX0VkaXQiLCJwb3N0X2lkIiwidmFsdWVzIiwiZmllbGRBcmdzIiwiJGxpc3QiLCJjbG9zZXN0Iiwid3Bvbmlvbl9tZXRhYm94X21vZHVsZSIsImRlZmF1bHQiLCJ3cG9uaW9uX2J1bGtfZWRpdCIsIndwb25pb25fcXVpY2tfZWRpdCIsIndwb25pb25fbmV3X2ZpZWxkIiwid3Bvbmlvbl9tb2RhbCIsIiR3cG8iLCIkd3BfaG9vayIsImFwcGx5RmlsdGVycyIsInRleHRhcmVhIiwiaW1hZ2Vfc2VsZWN0Iiwic3dpdGNoZXIiLCJjb2xvcl9wYWxldHRlIiwiaWNvbl9waWNrZXIiLCJmb250X3NlbGVjdG9yIiwiZ3JvdXAiLCJ3cF9lZGl0b3IiLCJyZWxvYWRfd3BfZWRpdG9yIiwiZmllbGRzZXQiLCJ3cF9saW5rcyIsImNoZWNrYm94X3JhZGlvIiwia2V5dmFsdWVfcGFpciIsImNvbG9yX3BpY2tlciIsImRhdGVfcGlja2VyIiwiaW1hZ2VfcG9wdXAiLCJ1cGxvYWQiLCJpbWFnZV91cGxvYWQiLCJqcXVlcnlfdGFiIiwiZmllbGRfdG9vbHRpcCIsImNsb25lX2VsZW1lbnQiLCJzb3J0ZXIiLCJnb29nbGVfbWFwcyIsInR5cG9ncmFwaHkiLCJvZW1iZWQiLCJoZWFkaW5nIiwic3ViaGVhZGluZyIsImphbWJvX2NvbnRlbnQiLCJub3RpY2UiLCJiYWNrdXAiLCJ0b2dnbGVDbGFzcyIsIiR3cG9mX2RpdiIsIiR3aWRnZXQiLCJsb2FkaW5nX3NjcmVlbiIsIldQT25pb25fV1BfTW9kYWwiLCJCYWNrYm9uZSIsIlZpZXciLCJleHRlbmQiLCJ0ZW1wbGF0ZXMiLCJldmVudHMiLCJhY3RpdmVfcGFnZSIsImFjdGl2ZV9zZWN0aW9uIiwiaW5pdGlhbGl6ZSIsImxlZnRfbWVudSIsImhpZGVfbWVudSIsImJpbmRBbGwiLCJpbml0X3RlbXBsYXRlcyIsInJlbmRlciIsIiRtIiwiZnJhbWVfbWVudV9pdGVtIiwicm91dGVyX21lbnVfaXRlbSIsInBhZ2VfY29udGVudCIsInNlY3Rpb25fY29udGVudCIsIiRjb250ZW50IiwiJF9jb250ZW50IiwiJF9tZW51IiwicHJlc2VydmVGb2N1cyIsImZvY3VzIiwiaGFuZGxlX2xlZnRfbWVudV9jbGljayIsIiR0YXJnZXQiLCIkc2hvd190YXJnZXQiLCJoYW5kbGVfdGFiX2NsaWNrIiwiJHBhZ2UiLCJoYXMiLCJ1bmRlbGVnYXRlRXZlbnRzIiwib2ZmIiwic2F2ZU1vZGFsIiwiZG9Ob3RoaW5nIiwiJG9wdGlvbnMiLCJjbGFzc05hbWUiLCJtb2RhbCIsImdldF9sZWZ0X21lbnUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZE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LEVBQTZCO0FBQzVCbU0sY0FBVSxFQUFWOztBQUVBOUwsTUFBRW9CLElBQUYsQ0FBUSxLQUFLekIsT0FBTCxDQUFjLE1BQWQsQ0FBUixFQUFnQyxVQUFFckosS0FBRixFQUFTUSxJQUFULEVBQW1CO0FBQ2xEZ1YsYUFBU2hWLElBQVQsSUFBb0IsT0FBT1IsTUFBTyxZQUFQLENBQVAsS0FBaUMsV0FBbkMsR0FBbURBLE1BQU8sWUFBUCxDQUFuRCxHQUEyRUEsTUFBTyxPQUFQLENBQTdGO0FBQ0EsS0FGRDtBQUdBO0FBQ0QsVUFBT3dWLE9BQVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTUYsbUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3dwb25pb24tY29yZS5qc1wiKTtcbiIsImNsYXNzIEpTX1BhcnNlX0FyZ3Mge1xyXG5cdGNvbnN0cnVjdG9yKCAkYXJncyA9IHt9LCAkZGVmYXVsdHMgPSB7fSwgJGlzX25lc3RlZCA9IGZhbHNlICkge1xyXG5cdFx0dGhpcy5hcmdzICAgICA9ICRhcmdzO1xyXG5cdFx0dGhpcy5kZWZhdWx0cyA9ICRkZWZhdWx0cztcclxuXHRcdHRoaXMubmVzdGVkICAgPSAkaXNfbmVzdGVkO1xyXG5cdFx0dGhpcy5wYXJzZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuYXJncztcclxuXHR9XHJcblxyXG5cdHBhcnNlKCkge1xyXG5cdFx0Zm9yKCBsZXQgJF9rZXkgaW4gdGhpcy5kZWZhdWx0cyApIHtcclxuXHRcdFx0aWYoIHRydWUgPT09IHRoaXMubmVzdGVkICYmIHR5cGVvZiAgdGhpcy5kZWZhdWx0c1sgJF9rZXkgXSA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gbmV3IEpTX1BhcnNlX0FyZ3MoIHRoaXMuYXJnc1sgJF9rZXkgXSwgdGhpcy5kZWZhdWx0c1sgJF9rZXkgXSwgdGhpcy5uZXN0ZWQgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiggdHlwZW9mIHRoaXMuYXJnc1sgJF9rZXkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFyZ3NbICRfa2V5IF0gPSB0aGlzLmRlZmF1bHRzWyAkX2tleSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAkYXJncyA9IHt9LCAkZGVmYXVsdHMgPSB7fSwgJGlzX2RlZXAgPSBmYWxzZSApID0+IG5ldyBKU19QYXJzZV9BcmdzKCAkYXJncywgJGRlZmF1bHRzLCAkaXNfZGVlcCApOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcnJheV9tZXJnZSgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9hcnJheV9tZXJnZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBOYXRlXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogam9zaFxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIxID0ge1wiY29sb3JcIjogXCJyZWRcIiwgMDogMiwgMTogNH1cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMiA9IHswOiBcImFcIiwgMTogXCJiXCIsIFwiY29sb3JcIjogXCJncmVlblwiLCBcInNoYXBlXCI6IFwidHJhcGV6b2lkXCIsIDI6IDR9XG4gIC8vICAgZXhhbXBsZSAxOiBhcnJheV9tZXJnZSgkYXJyMSwgJGFycjIpXG4gIC8vICAgcmV0dXJucyAxOiB7XCJjb2xvclwiOiBcImdyZWVuXCIsIDA6IDIsIDE6IDQsIDI6IFwiYVwiLCAzOiBcImJcIiwgXCJzaGFwZVwiOiBcInRyYXBlem9pZFwiLCA0OiA0fVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRhcnIxID0gW11cbiAgLy8gICBleGFtcGxlIDI6IHZhciAkYXJyMiA9IHsxOiBcImRhdGFcIn1cbiAgLy8gICBleGFtcGxlIDI6IGFycmF5X21lcmdlKCRhcnIxLCAkYXJyMilcbiAgLy8gICByZXR1cm5zIDI6IHswOiBcImRhdGFcIn1cblxuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIHZhciBhcmdsID0gYXJncy5sZW5ndGg7XG4gIHZhciBhcmc7XG4gIHZhciByZXRPYmogPSB7fTtcbiAgdmFyIGsgPSAnJztcbiAgdmFyIGFyZ2lsID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjdCA9IDA7XG4gIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciByZXRBcnIgPSB0cnVlO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBhcmdsOyBpKyspIHtcbiAgICBpZiAodG9TdHIuY2FsbChhcmdzW2ldKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0QXJyID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAocmV0QXJyKSB7XG4gICAgcmV0QXJyID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IGFyZ2w7IGkrKykge1xuICAgICAgcmV0QXJyID0gcmV0QXJyLmNvbmNhdChhcmdzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldEFycjtcbiAgfVxuXG4gIGZvciAoaSA9IDAsIGN0ID0gMDsgaSA8IGFyZ2w7IGkrKykge1xuICAgIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKHRvU3RyLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgZm9yIChqID0gMCwgYXJnaWwgPSBhcmcubGVuZ3RoOyBqIDwgYXJnaWw7IGorKykge1xuICAgICAgICByZXRPYmpbY3QrK10gPSBhcmdbal07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoayBpbiBhcmcpIHtcbiAgICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGlmIChwYXJzZUludChrLCAxMCkgKyAnJyA9PT0gaykge1xuICAgICAgICAgICAgcmV0T2JqW2N0KytdID0gYXJnW2tdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXRPYmpba10gPSBhcmdba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldE9iajtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheV9tZXJnZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcnJheV9tZXJnZV9yZWN1cnNpdmUoYXJyMSwgYXJyMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2FycmF5X21lcmdlX3JlY3Vyc2l2ZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFN1Ymhhc2lzIERlYlxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjEgPSB7J2NvbG9yJzogeydmYXZvcml0ZSc6ICdyZWQnfSwgMDogNX1cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMiA9IHswOiAxMCwgJ2NvbG9yJzogeydmYXZvcml0ZSc6ICdncmVlbicsIDA6ICdibHVlJ319XG4gIC8vICAgZXhhbXBsZSAxOiBhcnJheV9tZXJnZV9yZWN1cnNpdmUoJGFycjEsICRhcnIyKVxuICAvLyAgIHJldHVybnMgMTogeydjb2xvcic6IHsnZmF2b3JpdGUnOiB7MDogJ3JlZCcsIDE6ICdncmVlbid9LCAwOiAnYmx1ZSd9LCAxOiA1LCAxOiAxMH1cbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMVxuXG4gIHZhciBhcnJheU1lcmdlID0gcmVxdWlyZSgnLi4vYXJyYXkvYXJyYXlfbWVyZ2UnKTtcbiAgdmFyIGlkeCA9ICcnO1xuXG4gIGlmIChhcnIxICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIxKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBhcnIyICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIyKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGZvciAoaWR4IGluIGFycjIpIHtcbiAgICAgIGFycjEucHVzaChhcnIyW2lkeF0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcnIxICYmIGFycjEgaW5zdGFuY2VvZiBPYmplY3QgJiYgYXJyMiAmJiBhcnIyIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgZm9yIChpZHggaW4gYXJyMikge1xuICAgICAgaWYgKGlkeCBpbiBhcnIxKSB7XG4gICAgICAgIGlmIChfdHlwZW9mKGFycjFbaWR4XSkgPT09ICdvYmplY3QnICYmICh0eXBlb2YgYXJyMiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYXJyMikpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGFycjFbaWR4XSA9IGFycmF5TWVyZ2UoYXJyMVtpZHhdLCBhcnIyW2lkeF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycjFbaWR4XSA9IGFycjJbaWR4XTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyMVtpZHhdID0gYXJyMltpZHhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnIxO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5X21lcmdlX3JlY3Vyc2l2ZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXJyYXlfdmFsdWVzKGlucHV0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYXJyYXlfdmFsdWVzL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBhcnJheV92YWx1ZXMoIHtmaXJzdG5hbWU6ICdLZXZpbicsIHN1cm5hbWU6ICd2YW4gWm9ubmV2ZWxkJ30gKVxuICAvLyAgIHJldHVybnMgMTogWyAnS2V2aW4nLCAndmFuIFpvbm5ldmVsZCcgXVxuXG4gIHZhciB0bXBBcnIgPSBbXTtcbiAgdmFyIGtleSA9ICcnO1xuXG4gIGZvciAoa2V5IGluIGlucHV0KSB7XG4gICAgdG1wQXJyW3RtcEFyci5sZW5ndGhdID0gaW5wdXRba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0bXBBcnI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlfdmFsdWVzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb3VudChtaXhlZFZhciwgbW9kZSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NvdW50L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IFdhbGRvIE1hbHF1aSBTaWx2YSAoaHR0cDovL3dhbGRvLm1hbHF1aS5pbmZvKVxuICAvLyAgICBpbnB1dCBieTogbWVyYWJpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBTb3JlbiBIYW5zZW5cbiAgLy8gYnVnZml4ZWQgYnk6IE9saXZpZXIgTG91dmlnbmVzIChodHRwOi8vbWctY3JlYS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGNvdW50KFtbMCwwXSxbMCwtNF1dLCAnQ09VTlRfUkVDVVJTSVZFJylcbiAgLy8gICByZXR1cm5zIDE6IDZcbiAgLy8gICBleGFtcGxlIDI6IGNvdW50KHsnb25lJyA6IFsxLDIsMyw0LDVdfSwgJ0NPVU5UX1JFQ1VSU0lWRScpXG4gIC8vICAgcmV0dXJucyAyOiA2XG5cbiAgdmFyIGtleTtcbiAgdmFyIGNudCA9IDA7XG5cbiAgaWYgKG1peGVkVmFyID09PSBudWxsIHx8IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChtaXhlZFZhci5jb25zdHJ1Y3RvciAhPT0gQXJyYXkgJiYgbWl4ZWRWYXIuY29uc3RydWN0b3IgIT09IE9iamVjdCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKG1vZGUgPT09ICdDT1VOVF9SRUNVUlNJVkUnKSB7XG4gICAgbW9kZSA9IDE7XG4gIH1cbiAgaWYgKG1vZGUgIT09IDEpIHtcbiAgICBtb2RlID0gMDtcbiAgfVxuXG4gIGZvciAoa2V5IGluIG1peGVkVmFyKSB7XG4gICAgaWYgKG1peGVkVmFyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNudCsrO1xuICAgICAgaWYgKG1vZGUgPT09IDEgJiYgbWl4ZWRWYXJba2V5XSAmJiAobWl4ZWRWYXJba2V5XS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgbWl4ZWRWYXJba2V5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSkge1xuICAgICAgICBjbnQgKz0gY291bnQobWl4ZWRWYXJba2V5XSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3VudC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5fYXJyYXkobmVlZGxlLCBoYXlzdGFjaywgYXJnU3RyaWN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW5fYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogdmxhZG8gaG91YmFcbiAgLy8gaW1wcm92ZWQgYnk6IEpvbmFzIFNjaWFuZ3VsYSBTdHJlZXQgKEpvbmkyQmFjaylcbiAgLy8gICAgaW5wdXQgYnk6IEJpbGx5XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogaW5fYXJyYXkoJ3ZhbicsIFsnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaW5fYXJyYXkoJ3ZsYWRvJywgezA6ICdLZXZpbicsIHZsYWRvOiAndmFuJywgMTogJ1pvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGluX2FycmF5KDEsIFsnMScsICcyJywgJzMnXSlcbiAgLy8gICBleGFtcGxlIDM6IGluX2FycmF5KDEsIFsnMScsICcyJywgJzMnXSwgZmFsc2UpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgZXhhbXBsZSA0OiBpbl9hcnJheSgxLCBbJzEnLCAnMicsICczJ10sIHRydWUpXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuXG4gIHZhciBrZXkgPSAnJztcbiAgdmFyIHN0cmljdCA9ICEhYXJnU3RyaWN0O1xuXG4gIC8vIHdlIHByZXZlbnQgdGhlIGRvdWJsZSBjaGVjayAoc3RyaWN0ICYmIGFycltrZXldID09PSBuZGwpIHx8ICghc3RyaWN0ICYmIGFycltrZXldID09PSBuZGwpXG4gIC8vIGluIGp1c3Qgb25lIGZvciwgaW4gb3JkZXIgdG8gaW1wcm92ZSB0aGUgcGVyZm9ybWFuY2VcbiAgLy8gZGVjaWRpbmcgd2ljaCB0eXBlIG9mIGNvbXBhcmF0aW9uIHdpbGwgZG8gYmVmb3JlIHdhbGsgYXJyYXlcbiAgaWYgKHN0cmljdCkge1xuICAgIGZvciAoa2V5IGluIGhheXN0YWNrKSB7XG4gICAgICBpZiAoaGF5c3RhY2tba2V5XSA9PT0gbmVlZGxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGtleSBpbiBoYXlzdGFjaykge1xuICAgICAgaWYgKGhheXN0YWNrW2tleV0gPT0gbmVlZGxlKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbl9hcnJheS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWljcm90aW1lKGdldEFzRmxvYXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9taWNyb3RpbWUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGltcHJvdmVkIGJ5OiBEdW1pdHJ1IFV6dW4gKGh0dHA6Ly9kdXp1bi5tZSlcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gbWljcm90aW1lKHRydWUpXG4gIC8vICAgZXhhbXBsZSAxOiAkdGltZVN0YW1wID4gMTAwMDAwMDAwMCAmJiAkdGltZVN0YW1wIDwgMjAwMDAwMDAwMFxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogL14wXFwuWzAtOV17MSw2fSBbMC05XXsxMCwxMH0kLy50ZXN0KG1pY3JvdGltZSgpKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBzO1xuICB2YXIgbm93O1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBub3cgPSAocGVyZm9ybWFuY2Uubm93KCkgKyBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlNikgLyAxZTYgKyAnICcgKyBzO1xuICB9IGVsc2Uge1xuICAgIG5vdyA9IChEYXRlLm5vdyA/IERhdGUubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTMpIC8gMWUzICsgJyAnICsgcztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pY3JvdGltZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0aW1lKCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3RpbWUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBHZWVrRkcgKGh0dHA6Ly9nZWVrZmcuYmxvZ3Nwb3QuY29tKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IG1ldGpheVxuICAvLyBpbXByb3ZlZCBieTogSEtNXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHRpbWVTdGFtcCA9IHRpbWUoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkdGltZVN0YW1wID4gMTAwMDAwMDAwMCAmJiAkdGltZVN0YW1wIDwgMjAwMDAwMDAwMFxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmMoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZHMgb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkgd2hpY2ggaW4gdHVybiBkZXBlbmRzIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuYygnaXNOYU4nLCAnYScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgdmFyIGNhbGxVc2VyRnVuY0FycmF5ID0gcmVxdWlyZSgnLi4vZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknKTtcbiAgcGFyYW1ldGVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBjYWxsVXNlckZ1bmNBcnJheShjYiwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuY19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IFRoaWFnbyBNYXRhIChodHRwOi8vdGhpYWdvbWF0YS5ibG9nLmNvbSlcbiAgLy8gIHJldmlzZWQgYnk6IEpvbiBIb2hsZVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kaW5nIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYCBhbmQvb3IgYG5ldyBGdW5jdGlvbmAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWydhJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbMV0pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gIHZhciBmdW5jO1xuICB2YXIgc2NvcGUgPSBudWxsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICBpZiAodHlwZW9mIGNiID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZ1bmMgPSAkZ2xvYmFsW2NiXTtcbiAgICB9IGVsc2UgaWYgKGNiLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbihudWxsLCAncmV0dXJuICcgKyBjYikoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICAgIH1cbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2IpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgZnVuYyA9IGV2YWwoY2JbMF0gKyBcIlsnXCIgKyBjYlsxXSArIFwiJ11cIik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jID0gY2JbMF1bY2JbMV1dO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JbMF1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjb3BlID0gJGdsb2JhbFtjYlswXV07XG4gICAgICB9IGVsc2UgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBzY29wZSA9IGV2YWwoY2JbMF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF90eXBlb2YoY2JbMF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgc2NvcGUgPSBjYlswXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZnVuYyA9IGNiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGZ1bmMgKyAnIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gZnVuYy5hcHBseShzY29wZSwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmNfYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZ1bmN0aW9uX2V4aXN0cyhmdW5jTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Z1bmN0aW9uX2V4aXN0cy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBTdGV2ZSBDbGF5XG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogZnVuY3Rpb25fZXhpc3RzKCdpc0Zpbml0ZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgICAgICB0ZXN0OiBza2lwLTFcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuXG4gIGlmICh0eXBlb2YgZnVuY05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgZnVuY05hbWUgPSAkZ2xvYmFsW2Z1bmNOYW1lXTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgZnVuY05hbWUgPT09ICdmdW5jdGlvbic7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnVuY3Rpb25fZXhpc3RzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmlfZ2V0KHZhcm5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbmlfZ2V0L1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSBpbmkgdmFsdWVzIG11c3QgYmUgc2V0IGJ5IGluaV9zZXQgb3IgbWFudWFsbHkgd2l0aGluIGFuIGluaSBmaWxlXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfc2V0KCdkYXRlLnRpbWV6b25lJywgJ0FzaWEvSG9uZ19Lb25nJylcbiAgLy8gICBleGFtcGxlIDE6IGluaV9nZXQoJ2RhdGUudGltZXpvbmUnKVxuICAvLyAgIHJldHVybnMgMTogJ0FzaWEvSG9uZ19Lb25nJ1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG4gICRsb2N1dHVzLnBocC5pbmkgPSAkbG9jdXR1cy5waHAuaW5pIHx8IHt9O1xuXG4gIGlmICgkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdICYmICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICgkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaV9nZXQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwbG9kZShkZWxpbWl0ZXIsIHN0cmluZywgbGltaXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9leHBsb2RlL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IGV4cGxvZGUoJyAnLCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiBbICdLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJyBdXG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyIHx8IHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHJpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGRlbGltaXRlciA9PT0gJycgfHwgZGVsaW1pdGVyID09PSBmYWxzZSB8fCBkZWxpbWl0ZXIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRlbGltaXRlcikpID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygc3RyaW5nID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2Ygc3RyaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzdHJpbmcpKSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgMDogJydcbiAgICB9O1xuICB9XG4gIGlmIChkZWxpbWl0ZXIgPT09IHRydWUpIHtcbiAgICBkZWxpbWl0ZXIgPSAnMSc7XG4gIH1cblxuICAvLyBIZXJlIHdlIGdvLi4uXG4gIGRlbGltaXRlciArPSAnJztcbiAgc3RyaW5nICs9ICcnO1xuXG4gIHZhciBzID0gc3RyaW5nLnNwbGl0KGRlbGltaXRlcik7XG5cbiAgaWYgKHR5cGVvZiBsaW1pdCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBzO1xuXG4gIC8vIFN1cHBvcnQgZm9yIGxpbWl0XG4gIGlmIChsaW1pdCA9PT0gMCkgbGltaXQgPSAxO1xuXG4gIC8vIFBvc2l0aXZlIGxpbWl0XG4gIGlmIChsaW1pdCA+IDApIHtcbiAgICBpZiAobGltaXQgPj0gcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICByZXR1cm4gcy5zbGljZSgwLCBsaW1pdCAtIDEpLmNvbmNhdChbcy5zbGljZShsaW1pdCAtIDEpLmpvaW4oZGVsaW1pdGVyKV0pO1xuICB9XG5cbiAgLy8gTmVnYXRpdmUgbGltaXRcbiAgaWYgKC1saW1pdCA+PSBzLmxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHMuc3BsaWNlKHMubGVuZ3RoICsgbGltaXQpO1xuICByZXR1cm4gcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHBsb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGltcGxvZGUoZ2x1ZSwgcGllY2VzKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW1wbG9kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBXYWxkbyBNYWxxdWkgU2lsdmEgKGh0dHA6Ly93YWxkby5tYWxxdWkuaW5mbylcbiAgLy8gaW1wcm92ZWQgYnk6IEl0c2Fjb24gKGh0dHA6Ly93d3cuaXRzYWNvbi5uZXQvKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGltcGxvZGUoJyAnLCBbJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnXSlcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogaW1wbG9kZSgnICcsIHtmaXJzdDonS2V2aW4nLCBsYXN0OiAndmFuIFpvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMjogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgdmFyIGkgPSAnJztcbiAgdmFyIHJldFZhbCA9ICcnO1xuICB2YXIgdEdsdWUgPSAnJztcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHBpZWNlcyA9IGdsdWU7XG4gICAgZ2x1ZSA9ICcnO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgcGllY2VzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwaWVjZXMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBpZWNlcykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybiBwaWVjZXMuam9pbihnbHVlKTtcbiAgICB9XG4gICAgZm9yIChpIGluIHBpZWNlcykge1xuICAgICAgcmV0VmFsICs9IHRHbHVlICsgcGllY2VzW2ldO1xuICAgICAgdEdsdWUgPSBnbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0VmFsO1xuICB9XG5cbiAgcmV0dXJuIHBpZWNlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbXBsb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZDUoc3RyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvbWQ1L1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBub3RlIDE6IEtlZXAgaW4gbWluZCB0aGF0IGluIGFjY29yZGFuY2Ugd2l0aCBQSFAsIHRoZSB3aG9sZSBzdHJpbmcgaXMgYnVmZmVyZWQgYW5kIHRoZW5cbiAgLy8gICAgICBub3RlIDE6IGhhc2hlZC4gSWYgYXZhaWxhYmxlLCB3ZSdkIHJlY29tbWVuZCB1c2luZyBOb2RlJ3MgbmF0aXZlIGNyeXB0byBtb2R1bGVzIGRpcmVjdGx5XG4gIC8vICAgICAgbm90ZSAxOiBpbiBhIHN0ZWFtaW5nIGZhc2hpb24gZm9yIGZhc3RlciBhbmQgbW9yZSBlZmZpY2llbnQgaGFzaGluZ1xuICAvLyAgIGV4YW1wbGUgMTogbWQ1KCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICc2ZTY1OGQ0YmZjYjU5Y2MxM2Y5NmMxNDQ1MGFjNDBiOSdcblxuICB2YXIgaGFzaDtcbiAgdHJ5IHtcbiAgICB2YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gICAgdmFyIG1kNXN1bSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgICBtZDVzdW0udXBkYXRlKHN0cik7XG4gICAgaGFzaCA9IG1kNXN1bS5kaWdlc3QoJ2hleCcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFzaCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHZhciB1dGY4RW5jb2RlID0gcmVxdWlyZSgnLi4veG1sL3V0ZjhfZW5jb2RlJyk7XG4gIHZhciB4bDtcblxuICB2YXIgX3JvdGF0ZUxlZnQgPSBmdW5jdGlvbiBfcm90YXRlTGVmdChsVmFsdWUsIGlTaGlmdEJpdHMpIHtcbiAgICByZXR1cm4gbFZhbHVlIDw8IGlTaGlmdEJpdHMgfCBsVmFsdWUgPj4+IDMyIC0gaVNoaWZ0Qml0cztcbiAgfTtcblxuICB2YXIgX2FkZFVuc2lnbmVkID0gZnVuY3Rpb24gX2FkZFVuc2lnbmVkKGxYLCBsWSkge1xuICAgIHZhciBsWDQsIGxZNCwgbFg4LCBsWTgsIGxSZXN1bHQ7XG4gICAgbFg4ID0gbFggJiAweDgwMDAwMDAwO1xuICAgIGxZOCA9IGxZICYgMHg4MDAwMDAwMDtcbiAgICBsWDQgPSBsWCAmIDB4NDAwMDAwMDA7XG4gICAgbFk0ID0gbFkgJiAweDQwMDAwMDAwO1xuICAgIGxSZXN1bHQgPSAobFggJiAweDNGRkZGRkZGKSArIChsWSAmIDB4M0ZGRkZGRkYpO1xuICAgIGlmIChsWDQgJiBsWTQpIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gMHg4MDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICB9XG4gICAgaWYgKGxYNCB8IGxZNCkge1xuICAgICAgaWYgKGxSZXN1bHQgJiAweDQwMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiBsUmVzdWx0IF4gMHhDMDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsUmVzdWx0IF4gMHg0MDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxSZXN1bHQgXiBsWDggXiBsWTg7XG4gICAgfVxuICB9O1xuXG4gIHZhciBfRiA9IGZ1bmN0aW9uIF9GKHgsIHksIHopIHtcbiAgICByZXR1cm4geCAmIHkgfCB+eCAmIHo7XG4gIH07XG4gIHZhciBfRyA9IGZ1bmN0aW9uIF9HKHgsIHksIHopIHtcbiAgICByZXR1cm4geCAmIHogfCB5ICYgfno7XG4gIH07XG4gIHZhciBfSCA9IGZ1bmN0aW9uIF9IKHgsIHksIHopIHtcbiAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9O1xuICB2YXIgX0kgPSBmdW5jdGlvbiBfSSh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHkgXiAoeCB8IH56KTtcbiAgfTtcblxuICB2YXIgX0ZGID0gZnVuY3Rpb24gX0ZGKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9GKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0dHID0gZnVuY3Rpb24gX0dHKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9HKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0hIID0gZnVuY3Rpb24gX0hIKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9IKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0lJID0gZnVuY3Rpb24gX0lJKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9JKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX2NvbnZlcnRUb1dvcmRBcnJheSA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKSB7XG4gICAgdmFyIGxXb3JkQ291bnQ7XG4gICAgdmFyIGxNZXNzYWdlTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICB2YXIgbE51bWJlck9mV29yZHNUZW1wMSA9IGxNZXNzYWdlTGVuZ3RoICsgODtcbiAgICB2YXIgbE51bWJlck9mV29yZHNUZW1wMiA9IChsTnVtYmVyT2ZXb3Jkc1RlbXAxIC0gbE51bWJlck9mV29yZHNUZW1wMSAlIDY0KSAvIDY0O1xuICAgIHZhciBsTnVtYmVyT2ZXb3JkcyA9IChsTnVtYmVyT2ZXb3Jkc1RlbXAyICsgMSkgKiAxNjtcbiAgICB2YXIgbFdvcmRBcnJheSA9IG5ldyBBcnJheShsTnVtYmVyT2ZXb3JkcyAtIDEpO1xuICAgIHZhciBsQnl0ZVBvc2l0aW9uID0gMDtcbiAgICB2YXIgbEJ5dGVDb3VudCA9IDA7XG4gICAgd2hpbGUgKGxCeXRlQ291bnQgPCBsTWVzc2FnZUxlbmd0aCkge1xuICAgICAgbFdvcmRDb3VudCA9IChsQnl0ZUNvdW50IC0gbEJ5dGVDb3VudCAlIDQpIC8gNDtcbiAgICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gbFdvcmRBcnJheVtsV29yZENvdW50XSB8IHN0ci5jaGFyQ29kZUF0KGxCeXRlQ291bnQpIDw8IGxCeXRlUG9zaXRpb247XG4gICAgICBsQnl0ZUNvdW50Kys7XG4gICAgfVxuICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgbEJ5dGVQb3NpdGlvbiA9IGxCeXRlQ291bnQgJSA0ICogODtcbiAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gbFdvcmRBcnJheVtsV29yZENvdW50XSB8IDB4ODAgPDwgbEJ5dGVQb3NpdGlvbjtcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMl0gPSBsTWVzc2FnZUxlbmd0aCA8PCAzO1xuICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAxXSA9IGxNZXNzYWdlTGVuZ3RoID4+PiAyOTtcbiAgICByZXR1cm4gbFdvcmRBcnJheTtcbiAgfTtcblxuICB2YXIgX3dvcmRUb0hleCA9IGZ1bmN0aW9uIF93b3JkVG9IZXgobFZhbHVlKSB7XG4gICAgdmFyIHdvcmRUb0hleFZhbHVlID0gJyc7XG4gICAgdmFyIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcnO1xuICAgIHZhciBsQnl0ZTtcbiAgICB2YXIgbENvdW50O1xuXG4gICAgZm9yIChsQ291bnQgPSAwOyBsQ291bnQgPD0gMzsgbENvdW50KyspIHtcbiAgICAgIGxCeXRlID0gbFZhbHVlID4+PiBsQ291bnQgKiA4ICYgMjU1O1xuICAgICAgd29yZFRvSGV4VmFsdWVUZW1wID0gJzAnICsgbEJ5dGUudG9TdHJpbmcoMTYpO1xuICAgICAgd29yZFRvSGV4VmFsdWUgPSB3b3JkVG9IZXhWYWx1ZSArIHdvcmRUb0hleFZhbHVlVGVtcC5zdWJzdHIod29yZFRvSGV4VmFsdWVUZW1wLmxlbmd0aCAtIDIsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZFRvSGV4VmFsdWU7XG4gIH07XG5cbiAgdmFyIHggPSBbXTtcbiAgdmFyIGs7XG4gIHZhciBBQTtcbiAgdmFyIEJCO1xuICB2YXIgQ0M7XG4gIHZhciBERDtcbiAgdmFyIGE7XG4gIHZhciBiO1xuICB2YXIgYztcbiAgdmFyIGQ7XG4gIHZhciBTMTEgPSA3O1xuICB2YXIgUzEyID0gMTI7XG4gIHZhciBTMTMgPSAxNztcbiAgdmFyIFMxNCA9IDIyO1xuICB2YXIgUzIxID0gNTtcbiAgdmFyIFMyMiA9IDk7XG4gIHZhciBTMjMgPSAxNDtcbiAgdmFyIFMyNCA9IDIwO1xuICB2YXIgUzMxID0gNDtcbiAgdmFyIFMzMiA9IDExO1xuICB2YXIgUzMzID0gMTY7XG4gIHZhciBTMzQgPSAyMztcbiAgdmFyIFM0MSA9IDY7XG4gIHZhciBTNDIgPSAxMDtcbiAgdmFyIFM0MyA9IDE1O1xuICB2YXIgUzQ0ID0gMjE7XG5cbiAgc3RyID0gdXRmOEVuY29kZShzdHIpO1xuICB4ID0gX2NvbnZlcnRUb1dvcmRBcnJheShzdHIpO1xuICBhID0gMHg2NzQ1MjMwMTtcbiAgYiA9IDB4RUZDREFCODk7XG4gIGMgPSAweDk4QkFEQ0ZFO1xuICBkID0gMHgxMDMyNTQ3NjtcblxuICB4bCA9IHgubGVuZ3RoO1xuICBmb3IgKGsgPSAwOyBrIDwgeGw7IGsgKz0gMTYpIHtcbiAgICBBQSA9IGE7XG4gICAgQkIgPSBiO1xuICAgIENDID0gYztcbiAgICBERCA9IGQ7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAwXSwgUzExLCAweEQ3NkFBNDc4KTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDFdLCBTMTIsIDB4RThDN0I3NTYpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMl0sIFMxMywgMHgyNDIwNzBEQik7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAzXSwgUzE0LCAweEMxQkRDRUVFKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTMTEsIDB4RjU3QzBGQUYpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgNV0sIFMxMiwgMHg0Nzg3QzYyQSk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyA2XSwgUzEzLCAweEE4MzA0NjEzKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDddLCBTMTQsIDB4RkQ0Njk1MDEpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgOF0sIFMxMSwgMHg2OTgwOThEOCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyA5XSwgUzEyLCAweDhCNDRGN0FGKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzEzLCAweEZGRkY1QkIxKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDExXSwgUzE0LCAweDg5NUNEN0JFKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzExLCAweDZCOTAxMTIyKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDEzXSwgUzEyLCAweEZEOTg3MTkzKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDE0XSwgUzEzLCAweEE2Nzk0MzhFKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDE1XSwgUzE0LCAweDQ5QjQwODIxKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMjEsIDB4RjYxRTI1NjIpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgNl0sIFMyMiwgMHhDMDQwQjM0MCk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAxMV0sIFMyMywgMHgyNjVFNUE1MSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyAwXSwgUzI0LCAweEU5QjZDN0FBKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDVdLCBTMjEsIDB4RDYyRjEwNUQpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMTBdLCBTMjIsIDB4MjQ0MTQ1Myk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMyMywgMHhEOEExRTY4MSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyA0XSwgUzI0LCAweEU3RDNGQkM4KTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDldLCBTMjEsIDB4MjFFMUNERTYpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMTRdLCBTMjIsIDB4QzMzNzA3RDYpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgM10sIFMyMywgMHhGNEQ1MEQ4Nyk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyA4XSwgUzI0LCAweDQ1NUExNEVEKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzIxLCAweEE5RTNFOTA1KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDJdLCBTMjIsIDB4RkNFRkEzRjgpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgN10sIFMyMywgMHg2NzZGMDJEOSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyAxMl0sIFMyNCwgMHg4RDJBNEM4QSk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzMxLCAweEZGRkEzOTQyKTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDhdLCBTMzIsIDB4ODc3MUY2ODEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMzMsIDB4NkQ5RDYxMjIpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMTRdLCBTMzQsIDB4RkRFNTM4MEMpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgMV0sIFMzMSwgMHhBNEJFRUE0NCk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA0XSwgUzMyLCAweDRCREVDRkE5KTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMzMsIDB4RjZCQjRCNjApO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMTBdLCBTMzQsIDB4QkVCRkJDNzApO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMzEsIDB4Mjg5QjdFQzYpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgMF0sIFMzMiwgMHhFQUExMjdGQSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAzXSwgUzMzLCAweEQ0RUYzMDg1KTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDZdLCBTMzQsIDB4NDg4MUQwNSk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzMxLCAweEQ5RDREMDM5KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDEyXSwgUzMyLCAweEU2REI5OUU1KTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzMzLCAweDFGQTI3Q0Y4KTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDJdLCBTMzQsIDB4QzRBQzU2NjUpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgMF0sIFM0MSwgMHhGNDI5MjI0NCk7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyA3XSwgUzQyLCAweDQzMkFGRjk3KTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDE0XSwgUzQzLCAweEFCOTQyM0E3KTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDVdLCBTNDQsIDB4RkM5M0EwMzkpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTNDEsIDB4NjU1QjU5QzMpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgM10sIFM0MiwgMHg4RjBDQ0M5Mik7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFM0MywgMHhGRkVGRjQ3RCk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyAxXSwgUzQ0LCAweDg1ODQ1REQxKTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTNDEsIDB4NkZBODdFNEYpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgMTVdLCBTNDIsIDB4RkUyQ0U2RTApO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgNl0sIFM0MywgMHhBMzAxNDMxNCk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyAxM10sIFM0NCwgMHg0RTA4MTFBMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzQxLCAweEY3NTM3RTgyKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDExXSwgUzQyLCAweEJEM0FGMjM1KTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTNDMsIDB4MkFEN0QyQkIpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgOV0sIFM0NCwgMHhFQjg2RDM5MSk7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBBQSk7XG4gICAgYiA9IF9hZGRVbnNpZ25lZChiLCBCQik7XG4gICAgYyA9IF9hZGRVbnNpZ25lZChjLCBDQyk7XG4gICAgZCA9IF9hZGRVbnNpZ25lZChkLCBERCk7XG4gIH1cblxuICB2YXIgdGVtcCA9IF93b3JkVG9IZXgoYSkgKyBfd29yZFRvSGV4KGIpICsgX3dvcmRUb0hleChjKSArIF93b3JkVG9IZXgoZCk7XG5cbiAgcmV0dXJuIHRlbXAudG9Mb3dlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZDUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlX3N0cihzdHIsIGFycmF5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9wYXJzZV9zdHIvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IENhZ3JpIEVraW5cbiAgLy8gICAgICBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE1JT19LT0RVS0kgKGh0dHA6Ly9taW8ta29kdWtpLmJsb2dzcG90LmNvbS8pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgICAgICBpbnB1dCBieTogRHJlYW1lclxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBaYWlkZSAoaHR0cDovL3phaWRlc3RoaW5ncy5jb20vKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBEYXZpZCBQZXN0YSAoaHR0cDovL2RhdmlkcGVzdGEuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogamVpY3F1ZXN0XG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBXaGVuIG5vIGFyZ3VtZW50IGlzIHNwZWNpZmllZCwgd2lsbCBwdXQgdmFyaWFibGVzIGluIGdsb2JhbCBzY29wZS5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBhIHBhcnRpY3VsYXIgYXJndW1lbnQgaGFzIGJlZW4gcGFzc2VkLCBhbmQgdGhlXG4gIC8vICAgICAgICAgICBub3RlIDE6IHJldHVybmVkIHZhbHVlIGlzIGRpZmZlcmVudCBwYXJzZV9zdHIgb2YgUEhQLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBGb3IgZXhhbXBsZSwgYT1iPWMmZD09PT1jXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcGFyc2Vfc3RyKCdmaXJzdD1mb28mc2Vjb25kPWJhcicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyAxOiB7IGZpcnN0OiAnZm9vJywgc2Vjb25kOiAnYmFyJyB9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgMjogcGFyc2Vfc3RyKCdzdHJfYT1KYWNrK2FuZCtKaWxsK2RpZG4lMjd0K3NlZSt0aGUrd2VsbC4nLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMjogeyBzdHJfYTogXCJKYWNrIGFuZCBKaWxsIGRpZG4ndCBzZWUgdGhlIHdlbGwuXCIgfVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiB2YXIgJGFiYyA9IHszOidhJ31cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcGFyc2Vfc3RyKCdhW2JdW1wiY1wiXT1kZWYmYVtxXT10KzUnLCAkYWJjKVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRhYmNcbiAgLy8gICAgICAgIHJldHVybnMgMzoge1wiM1wiOlwiYVwiLFwiYVwiOntcImJcIjp7XCJjXCI6XCJkZWZcIn0sXCJxXCI6XCJ0IDVcIn19XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogcGFyc2Vfc3RyKCdhW11bXT12YWx1ZScsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyA0OiB7XCJhXCI6e1wiMFwiOntcIjBcIjpcInZhbHVlXCJ9fX1cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiBwYXJzZV9zdHIoJ2E9MSZhW109MicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyA1OiB7XCJhXCI6e1wiMFwiOlwiMlwifX1cblxuICB2YXIgc3RyQXJyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvXiYvLCAnJykucmVwbGFjZSgvJiQvLCAnJykuc3BsaXQoJyYnKTtcbiAgdmFyIHNhbCA9IHN0ckFyci5sZW5ndGg7XG4gIHZhciBpO1xuICB2YXIgajtcbiAgdmFyIGN0O1xuICB2YXIgcDtcbiAgdmFyIGxhc3RPYmo7XG4gIHZhciBvYmo7XG4gIHZhciBjaHI7XG4gIHZhciB0bXA7XG4gIHZhciBrZXk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHBvc3RMZWZ0QnJhY2tldFBvcztcbiAgdmFyIGtleXM7XG4gIHZhciBrZXlzTGVuO1xuXG4gIHZhciBfZml4U3RyID0gZnVuY3Rpb24gX2ZpeFN0cihzdHIpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKTtcbiAgfTtcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuXG4gIGlmICghYXJyYXkpIHtcbiAgICBhcnJheSA9ICRnbG9iYWw7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgc2FsOyBpKyspIHtcbiAgICB0bXAgPSBzdHJBcnJbaV0uc3BsaXQoJz0nKTtcbiAgICBrZXkgPSBfZml4U3RyKHRtcFswXSk7XG4gICAgdmFsdWUgPSB0bXAubGVuZ3RoIDwgMiA/ICcnIDogX2ZpeFN0cih0bXBbMV0pO1xuXG4gICAgd2hpbGUgKGtleS5jaGFyQXQoMCkgPT09ICcgJykge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDEpO1xuICAgIH1cblxuICAgIGlmIChrZXkuaW5kZXhPZignXFx4MDAnKSA+IC0xKSB7XG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMCwga2V5LmluZGV4T2YoJ1xceDAwJykpO1xuICAgIH1cblxuICAgIGlmIChrZXkgJiYga2V5LmNoYXJBdCgwKSAhPT0gJ1snKSB7XG4gICAgICBrZXlzID0gW107XG4gICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSAwO1xuXG4gICAgICBmb3IgKGogPSAwOyBqIDwga2V5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChrZXkuY2hhckF0KGopID09PSAnWycgJiYgIXBvc3RMZWZ0QnJhY2tldFBvcykge1xuICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IGogKyAxO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5jaGFyQXQoaikgPT09ICddJykge1xuICAgICAgICAgIGlmIChwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zbGljZSgwLCBwb3N0TGVmdEJyYWNrZXRQb3MgLSAxKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleXMucHVzaChrZXkuc3Vic3RyKHBvc3RMZWZ0QnJhY2tldFBvcywgaiAtIHBvc3RMZWZ0QnJhY2tldFBvcykpO1xuICAgICAgICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoaiArIDEpICE9PSAnWycpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAga2V5cyA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGogPSAwOyBqIDwga2V5c1swXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjaHIgPSBrZXlzWzBdLmNoYXJBdChqKTtcblxuICAgICAgICBpZiAoY2hyID09PSAnICcgfHwgY2hyID09PSAnLicgfHwgY2hyID09PSAnWycpIHtcbiAgICAgICAgICBrZXlzWzBdID0ga2V5c1swXS5zdWJzdHIoMCwgaikgKyAnXycgKyBrZXlzWzBdLnN1YnN0cihqICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hyID09PSAnWycpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvYmogPSBhcnJheTtcblxuICAgICAgZm9yIChqID0gMCwga2V5c0xlbiA9IGtleXMubGVuZ3RoOyBqIDwga2V5c0xlbjsgaisrKSB7XG4gICAgICAgIGtleSA9IGtleXNbal0ucmVwbGFjZSgvXlsnXCJdLywgJycpLnJlcGxhY2UoL1snXCJdJC8sICcnKTtcbiAgICAgICAgbGFzdE9iaiA9IG9iajtcblxuICAgICAgICBpZiAoKGtleSA9PT0gJycgfHwga2V5ID09PSAnICcpICYmIGogIT09IDApIHtcbiAgICAgICAgICAvLyBJbnNlcnQgbmV3IGRpbWVuc2lvblxuICAgICAgICAgIGN0ID0gLTE7XG5cbiAgICAgICAgICBmb3IgKHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgIGlmICgrcCA+IGN0ICYmIHAubWF0Y2goL15cXGQrJC9nKSkge1xuICAgICAgICAgICAgICAgIGN0ID0gK3A7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBrZXkgPSBjdCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBwcmltaXRpdmUgdmFsdWUsIHJlcGxhY2Ugd2l0aCBvYmplY3RcbiAgICAgICAgaWYgKE9iamVjdChvYmpba2V5XSkgIT09IG9ialtrZXldKSB7XG4gICAgICAgICAgb2JqW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9IG9ialtrZXldO1xuICAgICAgfVxuXG4gICAgICBsYXN0T2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZV9zdHIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyX3JlcGxhY2Uoc2VhcmNoLCByZXBsYWNlLCBzdWJqZWN0LCBjb3VudE9iaikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cl9yZXBsYWNlL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEdhYnJpZWwgUGFkZXJuaVxuICAvLyBpbXByb3ZlZCBieTogUGhpbGlwIFBldGVyc29uXG4gIC8vIGltcHJvdmVkIGJ5OiBTaW1vbiBXaWxsaXNvbiAoaHR0cDovL3NpbW9ud2lsbGlzb24ubmV0KVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICByZXZpc2VkIGJ5OiBKb25hcyBSYW9uaSBTb2FyZXMgU2lsdmEgKGh0dHA6Ly93d3cuanNmcm9taGVsbC5jb20pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBBbnRvbiBPbmdzb25cbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbGVnIEVyZW1lZXZcbiAgLy8gYnVnZml4ZWQgYnk6IEdsZW4gQXJhc29uIChodHRwOi8vQ2FuYWRpYW5Eb21haW5SZWdpc3RyeS5jYSlcbiAgLy8gYnVnZml4ZWQgYnk6IEdsZW4gQXJhc29uIChodHRwOi8vQ2FuYWRpYW5Eb21haW5SZWdpc3RyeS5jYSlcbiAgLy8gICAgaW5wdXQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBPbGVnIEVyZW1lZXZcbiAgLy8gICAgICBub3RlIDE6IFRoZSBjb3VudE9iaiBwYXJhbWV0ZXIgKG9wdGlvbmFsKSBpZiB1c2VkIG11c3QgYmUgcGFzc2VkIGluIGFzIGFcbiAgLy8gICAgICBub3RlIDE6IG9iamVjdC4gVGhlIGNvdW50IHdpbGwgdGhlbiBiZSB3cml0dGVuIGJ5IHJlZmVyZW5jZSBpbnRvIGl0J3MgYHZhbHVlYCBwcm9wZXJ0eVxuICAvLyAgIGV4YW1wbGUgMTogc3RyX3JlcGxhY2UoJyAnLCAnLicsICdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbi52YW4uWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogc3RyX3JlcGxhY2UoWyd7bmFtZX0nLCAnbCddLCBbJ2hlbGxvJywgJ20nXSwgJ3tuYW1lfSwgbGFycycpXG4gIC8vICAgcmV0dXJucyAyOiAnaGVtbW8sIG1hcnMnXG4gIC8vICAgZXhhbXBsZSAzOiBzdHJfcmVwbGFjZShBcnJheSgnUycsJ0YnKSwneCcsJ0FTREZBU0RGJylcbiAgLy8gICByZXR1cm5zIDM6ICdBeER4QXhEeCdcbiAgLy8gICBleGFtcGxlIDQ6IHZhciBjb3VudE9iaiA9IHt9XG4gIC8vICAgZXhhbXBsZSA0OiBzdHJfcmVwbGFjZShbJ0EnLCdEJ10sIFsneCcsJ3knXSAsICdBU0RGQVNERicgLCBjb3VudE9iailcbiAgLy8gICBleGFtcGxlIDQ6IHZhciAkcmVzdWx0ID0gY291bnRPYmoudmFsdWVcbiAgLy8gICByZXR1cm5zIDQ6IDRcblxuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIHRlbXAgPSAnJztcbiAgdmFyIHJlcGwgPSAnJztcbiAgdmFyIHNsID0gMDtcbiAgdmFyIGZsID0gMDtcbiAgdmFyIGYgPSBbXS5jb25jYXQoc2VhcmNoKTtcbiAgdmFyIHIgPSBbXS5jb25jYXQocmVwbGFjZSk7XG4gIHZhciBzID0gc3ViamVjdDtcbiAgdmFyIHJhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHIpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB2YXIgc2EgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIHMgPSBbXS5jb25jYXQocyk7XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoKHR5cGVvZiBzZWFyY2ggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHNlYXJjaCkpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVwbGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICB0ZW1wID0gcmVwbGFjZTtcbiAgICByZXBsYWNlID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IHNlYXJjaC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmVwbGFjZVtpXSA9IHRlbXA7XG4gICAgfVxuICAgIHRlbXAgPSAnJztcbiAgICByID0gW10uY29uY2F0KHJlcGxhY2UpO1xuICAgIHJhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHIpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjb3VudE9iaiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb3VudE9iai52YWx1ZSA9IDA7XG4gIH1cblxuICBmb3IgKGkgPSAwLCBzbCA9IHMubGVuZ3RoOyBpIDwgc2w7IGkrKykge1xuICAgIGlmIChzW2ldID09PSAnJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAoaiA9IDAsIGZsID0gZi5sZW5ndGg7IGogPCBmbDsgaisrKSB7XG4gICAgICB0ZW1wID0gc1tpXSArICcnO1xuICAgICAgcmVwbCA9IHJhID8gcltqXSAhPT0gdW5kZWZpbmVkID8gcltqXSA6ICcnIDogclswXTtcbiAgICAgIHNbaV0gPSB0ZW1wLnNwbGl0KGZbal0pLmpvaW4ocmVwbCk7XG4gICAgICBpZiAodHlwZW9mIGNvdW50T2JqICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb3VudE9iai52YWx1ZSArPSB0ZW1wLnNwbGl0KGZbal0pLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzYSA/IHMgOiBzWzBdO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cl9yZXBsYWNlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJ0b2xvd2VyKHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cnRvbG93ZXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgIGV4YW1wbGUgMTogc3RydG9sb3dlcignS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAna2V2aW4gdmFuIHpvbm5ldmVsZCdcblxuICByZXR1cm4gKHN0ciArICcnKS50b0xvd2VyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnRvbG93ZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cnRvdXBwZXIoc3RyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvc3RydG91cHBlci9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgZXhhbXBsZSAxOiBzdHJ0b3VwcGVyKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLRVZJTiBWQU4gWk9OTkVWRUxEJ1xuXG4gIHJldHVybiAoc3RyICsgJycpLnRvVXBwZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RydG91cHBlci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0X2RlY29kZShlbmNvZGVkRGF0YSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Jhc2U2NF9kZWNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUeWxlciBBa2lucyAoaHR0cDovL3J1bWtpbi5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQW1hbiBHdXB0YVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBJbmRpZ283NDRcbiAgLy8gICBleGFtcGxlIDE6IGJhc2U2NF9kZWNvZGUoJ1MyVjJhVzRnZG1GdUlGcHZibTVsZG1Wc1pBPT0nKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG4gIC8vICAgZXhhbXBsZSAyOiBiYXNlNjRfZGVjb2RlKCdZUT09JylcbiAgLy8gICByZXR1cm5zIDI6ICdhJ1xuICAvLyAgIGV4YW1wbGUgMzogYmFzZTY0X2RlY29kZSgnNHB5VElNT2dJR3hoSUcxdlpHVT0nKVxuICAvLyAgIHJldHVybnMgMzogJ+KckyDDoCBsYSBtb2RlJ1xuXG4gIC8vIGRlY29kZVVURjhzdHJpbmcoKVxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBkZWNvZGUgcHJvcGVybHkgVVRGOCBzdHJpbmdcbiAgLy8gQWRhcHRlZCBmcm9tIFNvbHV0aW9uICMxIGF0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZ1xuICB2YXIgZGVjb2RlVVRGOHN0cmluZyA9IGZ1bmN0aW9uIGRlY29kZVVURjhzdHJpbmcoc3RyKSB7XG4gICAgLy8gR29pbmcgYmFja3dhcmRzOiBmcm9tIGJ5dGVzdHJlYW0sIHRvIHBlcmNlbnQtZW5jb2RpbmcsIHRvIG9yaWdpbmFsIHN0cmluZy5cbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfSkuam9pbignJykpO1xuICB9O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmF0b2IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVRGOHN0cmluZyh3aW5kb3cuYXRvYihlbmNvZGVkRGF0YSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihlbmNvZGVkRGF0YSwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGYtOCcpO1xuICB9XG5cbiAgdmFyIGI2NCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIHZhciBvMTtcbiAgdmFyIG8yO1xuICB2YXIgbzM7XG4gIHZhciBoMTtcbiAgdmFyIGgyO1xuICB2YXIgaDM7XG4gIHZhciBoNDtcbiAgdmFyIGJpdHM7XG4gIHZhciBpID0gMDtcbiAgdmFyIGFjID0gMDtcbiAgdmFyIGRlYyA9ICcnO1xuICB2YXIgdG1wQXJyID0gW107XG5cbiAgaWYgKCFlbmNvZGVkRGF0YSkge1xuICAgIHJldHVybiBlbmNvZGVkRGF0YTtcbiAgfVxuXG4gIGVuY29kZWREYXRhICs9ICcnO1xuXG4gIGRvIHtcbiAgICAvLyB1bnBhY2sgZm91ciBoZXhldHMgaW50byB0aHJlZSBvY3RldHMgdXNpbmcgaW5kZXggcG9pbnRzIGluIGI2NFxuICAgIGgxID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGgyID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGgzID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGg0ID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuXG4gICAgYml0cyA9IGgxIDw8IDE4IHwgaDIgPDwgMTIgfCBoMyA8PCA2IHwgaDQ7XG5cbiAgICBvMSA9IGJpdHMgPj4gMTYgJiAweGZmO1xuICAgIG8yID0gYml0cyA+PiA4ICYgMHhmZjtcbiAgICBvMyA9IGJpdHMgJiAweGZmO1xuXG4gICAgaWYgKGgzID09PSA2NCkge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSk7XG4gICAgfSBlbHNlIGlmIChoNCA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSwgbzIsIG8zKTtcbiAgICB9XG4gIH0gd2hpbGUgKGkgPCBlbmNvZGVkRGF0YS5sZW5ndGgpO1xuXG4gIGRlYyA9IHRtcEFyci5qb2luKCcnKTtcblxuICByZXR1cm4gZGVjb2RlVVRGOHN0cmluZyhkZWMucmVwbGFjZSgvXFwwKyQvLCAnJykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NF9kZWNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9lbmNvZGUoc3RyaW5nVG9FbmNvZGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogQmF5cm9uIEd1ZXZhcmFcbiAgLy8gaW1wcm92ZWQgYnk6IFRodW5kZXIubVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyBidWdmaXhlZCBieTogUGVsbGVudGVzcXVlIE1hbGVzdWFkYVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09J1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2VuY29kZSgnYScpXG4gIC8vICAgcmV0dXJucyAyOiAnWVE9PSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9lbmNvZGUoJ+KckyDDoCBsYSBtb2RlJylcbiAgLy8gICByZXR1cm5zIDM6ICc0cHlUSU1PZ0lHeGhJRzF2WkdVPSdcblxuICAvLyBlbmNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZW5jb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGVuY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBlbmNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIGZpcnN0IHdlIHVzZSBlbmNvZGVVUklDb21wb25lbnQgdG8gZ2V0IHBlcmNlbnQtZW5jb2RlZCBVVEYtOCxcbiAgICAvLyB0aGVuIHdlIGNvbnZlcnQgdGhlIHBlcmNlbnQgZW5jb2RpbmdzIGludG8gcmF3IGJ5dGVzIHdoaWNoXG4gICAgLy8gY2FuIGJlIGZlZCBpbnRvIHRoZSBiYXNlNjQgZW5jb2RpbmcgYWxnb3JpdGhtLlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiB0b1NvbGlkQnl0ZXMobWF0Y2gsIHAxKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnICsgcDEpO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoZW5jb2RlVVRGOHN0cmluZyhzdHJpbmdUb0VuY29kZSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdHJpbmdUb0VuY29kZSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICB9XG5cbiAgdmFyIGI2NCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIHZhciBvMTtcbiAgdmFyIG8yO1xuICB2YXIgbzM7XG4gIHZhciBoMTtcbiAgdmFyIGgyO1xuICB2YXIgaDM7XG4gIHZhciBoNDtcbiAgdmFyIGJpdHM7XG4gIHZhciBpID0gMDtcbiAgdmFyIGFjID0gMDtcbiAgdmFyIGVuYyA9ICcnO1xuICB2YXIgdG1wQXJyID0gW107XG5cbiAgaWYgKCFzdHJpbmdUb0VuY29kZSkge1xuICAgIHJldHVybiBzdHJpbmdUb0VuY29kZTtcbiAgfVxuXG4gIHN0cmluZ1RvRW5jb2RlID0gZW5jb2RlVVRGOHN0cmluZyhzdHJpbmdUb0VuY29kZSk7XG5cbiAgZG8ge1xuICAgIC8vIHBhY2sgdGhyZWUgb2N0ZXRzIGludG8gZm91ciBoZXhldHNcbiAgICBvMSA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcbiAgICBvMiA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcbiAgICBvMyA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcblxuICAgIGJpdHMgPSBvMSA8PCAxNiB8IG8yIDw8IDggfCBvMztcblxuICAgIGgxID0gYml0cyA+PiAxOCAmIDB4M2Y7XG4gICAgaDIgPSBiaXRzID4+IDEyICYgMHgzZjtcbiAgICBoMyA9IGJpdHMgPj4gNiAmIDB4M2Y7XG4gICAgaDQgPSBiaXRzICYgMHgzZjtcblxuICAgIC8vIHVzZSBoZXhldHMgdG8gaW5kZXggaW50byBiNjQsIGFuZCBhcHBlbmQgcmVzdWx0IHRvIGVuY29kZWQgc3RyaW5nXG4gICAgdG1wQXJyW2FjKytdID0gYjY0LmNoYXJBdChoMSkgKyBiNjQuY2hhckF0KGgyKSArIGI2NC5jaGFyQXQoaDMpICsgYjY0LmNoYXJBdChoNCk7XG4gIH0gd2hpbGUgKGkgPCBzdHJpbmdUb0VuY29kZS5sZW5ndGgpO1xuXG4gIGVuYyA9IHRtcEFyci5qb2luKCcnKTtcblxuICB2YXIgciA9IHN0cmluZ1RvRW5jb2RlLmxlbmd0aCAlIDM7XG5cbiAgcmV0dXJuIChyID8gZW5jLnNsaWNlKDAsIHIgLSAzKSA6IGVuYykgKyAnPT09Jy5zbGljZShyIHx8IDMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NF9lbmNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJvb2x2YWwobWl4ZWRWYXIpIHtcbiAgLy8gb3JpZ2luYWwgYnk6IFdpbGwgUm93ZVxuICAvLyAgIGV4YW1wbGUgMTogYm9vbHZhbCh0cnVlKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogYm9vbHZhbChmYWxzZSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBib29sdmFsKDApXG4gIC8vICAgcmV0dXJucyAzOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNDogYm9vbHZhbCgwLjApXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNTogYm9vbHZhbCgnJylcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA2OiBib29sdmFsKCcwJylcbiAgLy8gICByZXR1cm5zIDY6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA3OiBib29sdmFsKFtdKVxuICAvLyAgIHJldHVybnMgNzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDg6IGJvb2x2YWwoJycpXG4gIC8vICAgcmV0dXJucyA4OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgOTogYm9vbHZhbChudWxsKVxuICAvLyAgIHJldHVybnMgOTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDEwOiBib29sdmFsKHVuZGVmaW5lZClcbiAgLy8gICByZXR1cm5zIDEwOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMTE6IGJvb2x2YWwoJ3RydWUnKVxuICAvLyAgIHJldHVybnMgMTE6IHRydWVcblxuICBpZiAobWl4ZWRWYXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSAwIHx8IG1peGVkVmFyID09PSAwLjApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobWl4ZWRWYXIgPT09ICcnIHx8IG1peGVkVmFyID09PSAnMCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShtaXhlZFZhcikgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSBudWxsIHx8IG1peGVkVmFyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29sdmFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVtcHR5KG1peGVkVmFyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZW1wdHkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQaGlsaXBwZSBCYXVtYW5uXG4gIC8vICAgIGlucHV0IGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgIGlucHV0IGJ5OiBMSFxuICAvLyAgICBpbnB1dCBieTogU3RveWFuIEt5b3NldiAoaHR0cDovL3d3dy5zdmVzdC5vcmcvKVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IEZyYW5jZXNjb1xuICAvLyBpbXByb3ZlZCBieTogTWFyYyBKYW5zZW5cbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgZXhhbXBsZSAxOiBlbXB0eShudWxsKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogZW1wdHkodW5kZWZpbmVkKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogZW1wdHkoW10pXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgZXhhbXBsZSA0OiBlbXB0eSh7fSlcbiAgLy8gICByZXR1cm5zIDQ6IHRydWVcbiAgLy8gICBleGFtcGxlIDU6IGVtcHR5KHsnYUZ1bmMnIDogZnVuY3Rpb24gKCkgeyBhbGVydCgnaHVtcHR5Jyk7IH0gfSlcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG5cbiAgdmFyIHVuZGVmO1xuICB2YXIga2V5O1xuICB2YXIgaTtcbiAgdmFyIGxlbjtcbiAgdmFyIGVtcHR5VmFsdWVzID0gW3VuZGVmLCBudWxsLCBmYWxzZSwgMCwgJycsICcwJ107XG5cbiAgZm9yIChpID0gMCwgbGVuID0gZW1wdHlWYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAobWl4ZWRWYXIgPT09IGVtcHR5VmFsdWVzW2ldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGtleSBpbiBtaXhlZFZhcikge1xuICAgICAgaWYgKG1peGVkVmFyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbXB0eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmbG9hdHZhbChtaXhlZFZhcikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Zsb2F0dmFsL1xuICAvLyBvcmlnaW5hbCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgbmF0aXZlIHBhcnNlRmxvYXQoKSBtZXRob2Qgb2YgSmF2YVNjcmlwdCByZXR1cm5zIE5hTlxuICAvLyAgICAgIG5vdGUgMTogd2hlbiBpdCBlbmNvdW50ZXJzIGEgc3RyaW5nIGJlZm9yZSBhbiBpbnQgb3IgZmxvYXQgdmFsdWUuXG4gIC8vICAgZXhhbXBsZSAxOiBmbG9hdHZhbCgnMTUwLjAzX3BhZ2Utc2VjdGlvbicpXG4gIC8vICAgcmV0dXJucyAxOiAxNTAuMDNcbiAgLy8gICBleGFtcGxlIDI6IGZsb2F0dmFsKCdwYWdlOiAzJylcbiAgLy8gICBleGFtcGxlIDI6IGZsb2F0dmFsKCctNTAgKyA4JylcbiAgLy8gICByZXR1cm5zIDI6IDBcbiAgLy8gICByZXR1cm5zIDI6IC01MFxuXG4gIHJldHVybiBwYXJzZUZsb2F0KG1peGVkVmFyKSB8fCAwO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsb2F0dmFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGludHZhbChtaXhlZFZhciwgYmFzZSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2ludHZhbC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBzdGVuc2lcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICAgaW5wdXQgYnk6IE1hdHRlb1xuICAvLyAgIGV4YW1wbGUgMTogaW50dmFsKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6IDBcbiAgLy8gICBleGFtcGxlIDI6IGludHZhbCg0LjIpXG4gIC8vICAgcmV0dXJucyAyOiA0XG4gIC8vICAgZXhhbXBsZSAzOiBpbnR2YWwoNDIsIDgpXG4gIC8vICAgcmV0dXJucyAzOiA0MlxuICAvLyAgIGV4YW1wbGUgNDogaW50dmFsKCcwOScpXG4gIC8vICAgcmV0dXJucyA0OiA5XG4gIC8vICAgZXhhbXBsZSA1OiBpbnR2YWwoJzFlJywgMTYpXG4gIC8vICAgcmV0dXJucyA1OiAzMFxuICAvLyAgIGV4YW1wbGUgNjogaW50dmFsKDB4MjAwMDAwMDAxKVxuICAvLyAgIHJldHVybnMgNjogODU4OTkzNDU5M1xuICAvLyAgIGV4YW1wbGUgNzogaW50dmFsKCcweGZmJywgMClcbiAgLy8gICByZXR1cm5zIDc6IDI1NVxuICAvLyAgIGV4YW1wbGUgODogaW50dmFsKCcwMTAnLCAwKVxuICAvLyAgIHJldHVybnMgODogOFxuXG4gIHZhciB0bXAsIG1hdGNoO1xuXG4gIHZhciB0eXBlID0gdHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcik7XG5cbiAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiArbWl4ZWRWYXI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoYmFzZSA9PT0gMCkge1xuICAgICAgbWF0Y2ggPSBtaXhlZFZhci5tYXRjaCgvXlxccyowKHg/KS9pKTtcbiAgICAgIGJhc2UgPSBtYXRjaCA/IG1hdGNoWzFdID8gMTYgOiA4IDogMTA7XG4gICAgfVxuICAgIHRtcCA9IHBhcnNlSW50KG1peGVkVmFyLCBiYXNlIHx8IDEwKTtcbiAgICByZXR1cm4gaXNOYU4odG1wKSB8fCAhaXNGaW5pdGUodG1wKSA/IDAgOiB0bXA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobWl4ZWRWYXIpKSB7XG4gICAgcmV0dXJuIG1peGVkVmFyIDwgMCA/IE1hdGguY2VpbChtaXhlZFZhcikgOiBNYXRoLmZsb29yKG1peGVkVmFyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19hcnJheShtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBOYXRoYW4gU2VwdWx2ZWRhXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogQ29yZFxuICAvLyBidWdmaXhlZCBieTogTWFuaXNoXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogSW4gTG9jdXR1cywgamF2YXNjcmlwdCBvYmplY3RzIGFyZSBsaWtlIHBocCBhc3NvY2lhdGl2ZSBhcnJheXMsXG4gIC8vICAgICAgbm90ZSAxOiB0aHVzIEphdmFTY3JpcHQgb2JqZWN0cyB3aWxsIGFsc29cbiAgLy8gICAgICBub3RlIDE6IHJldHVybiB0cnVlIGluIHRoaXMgZnVuY3Rpb24gKGV4Y2VwdCBmb3Igb2JqZWN0cyB3aGljaCBpbmhlcml0IHByb3BlcnRpZXMsXG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyB0aHVzIHVzZWQgYXMgb2JqZWN0cyksXG4gIC8vICAgICAgbm90ZSAxOiB1bmxlc3MgeW91IGRvIGluaV9zZXQoJ2xvY3V0dXMub2JqZWN0c0FzQXJyYXlzJywgMCksXG4gIC8vICAgICAgbm90ZSAxOiBpbiB3aGljaCBjYXNlIG9ubHkgZ2VudWluZSBKYXZhU2NyaXB0IGFycmF5c1xuICAvLyAgICAgIG5vdGUgMTogd2lsbCByZXR1cm4gdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMTogaXNfYXJyYXkoWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19hcnJheSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfYXJyYXkoezA6ICdLZXZpbicsIDE6ICd2YW4nLCAyOiAnWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgZXhhbXBsZSA0OiBpbmlfc2V0KCdsb2N1dHVzLm9iamVjdHNBc0FycmF5cycsIDApXG4gIC8vICAgZXhhbXBsZSA0OiBpc19hcnJheSh7MDogJ0tldmluJywgMTogJ3ZhbicsIDI6ICdab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA1OiBpc19hcnJheShmdW5jdGlvbiB0bXBfYSAoKXsgdGhpcy5uYW1lID0gJ0tldmluJyB9KVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcblxuICB2YXIgX2dldEZ1bmNOYW1lID0gZnVuY3Rpb24gX2dldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuICB2YXIgX2lzQXJyYXkgPSBmdW5jdGlvbiBfaXNBcnJheShtaXhlZFZhcikge1xuICAgIC8vIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIC8vIFRoZSBhYm92ZSB3b3JrcywgYnV0IGxldCdzIGRvIHRoZSBldmVuIG1vcmUgc3RyaW5nZW50IGFwcHJvYWNoOlxuICAgIC8vIChzaW5jZSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIGNvdWxkIGJlIG92ZXJyaWRkZW4pXG4gICAgLy8gTnVsbCwgTm90IGFuIG9iamVjdCwgbm8gbGVuZ3RoIHByb3BlcnR5IHNvIGNvdWxkbid0IGJlIGFuIEFycmF5IChvciBTdHJpbmcpXG4gICAgaWYgKCFtaXhlZFZhciB8fCAodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgbWl4ZWRWYXIubGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgbGVuID0gbWl4ZWRWYXIubGVuZ3RoO1xuICAgIG1peGVkVmFyW21peGVkVmFyLmxlbmd0aF0gPSAnYm9ndXMnO1xuICAgIC8vIFRoZSBvbmx5IHdheSBJIGNhbiB0aGluayBvZiB0byBnZXQgYXJvdW5kIHRoaXMgKG9yIHdoZXJlIHRoZXJlIHdvdWxkIGJlIHRyb3VibGUpXG4gICAgLy8gd291bGQgYmUgdG8gaGF2ZSBhbiBvYmplY3QgZGVmaW5lZFxuICAgIC8vIHdpdGggYSBjdXN0b20gXCJsZW5ndGhcIiBnZXR0ZXIgd2hpY2ggY2hhbmdlZCBiZWhhdmlvciBvbiBlYWNoIGNhbGxcbiAgICAvLyAob3IgYSBzZXR0ZXIgdG8gbWVzcyB1cCB0aGUgZm9sbG93aW5nIGJlbG93KSBvciBhIGN1c3RvbVxuICAgIC8vIHNldHRlciBmb3IgbnVtZXJpYyBwcm9wZXJ0aWVzLCBidXQgZXZlbiB0aGF0IHdvdWxkIG5lZWQgdG8gbGlzdGVuIGZvclxuICAgIC8vIHNwZWNpZmljIGluZGV4ZXM7IGJ1dCB0aGVyZSBzaG91bGQgYmUgbm8gZmFsc2UgbmVnYXRpdmVzXG4gICAgLy8gYW5kIHN1Y2ggYSBmYWxzZSBwb3NpdGl2ZSB3b3VsZCBuZWVkIHRvIHJlbHkgb24gbGF0ZXIgSmF2YVNjcmlwdFxuICAgIC8vIGlubm92YXRpb25zIGxpa2UgX19kZWZpbmVTZXR0ZXJfX1xuICAgIGlmIChsZW4gIT09IG1peGVkVmFyLmxlbmd0aCkge1xuICAgICAgLy8gV2Uga25vdyBpdCdzIGFuIGFycmF5IHNpbmNlIGxlbmd0aCBhdXRvLWNoYW5nZWQgd2l0aCB0aGUgYWRkaXRpb24gb2YgYVxuICAgICAgLy8gbnVtZXJpYyBwcm9wZXJ0eSBhdCBpdHMgbGVuZ3RoIGVuZCwgc28gc2FmZWx5IGdldCByaWQgb2Ygb3VyIGJvZ3VzIGVsZW1lbnRcbiAgICAgIG1peGVkVmFyLmxlbmd0aCAtPSAxO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIEdldCByaWQgb2YgdGhlIHByb3BlcnR5IHdlIGFkZGVkIG9udG8gYSBub24tYXJyYXkgb2JqZWN0OyBvbmx5IHBvc3NpYmxlXG4gICAgLy8gc2lkZS1lZmZlY3QgaXMgaWYgdGhlIHVzZXIgYWRkcyBiYWNrIHRoZSBwcm9wZXJ0eSBsYXRlciwgaXQgd2lsbCBpdGVyYXRlXG4gICAgLy8gdGhpcyBwcm9wZXJ0eSBpbiB0aGUgb2xkZXIgb3JkZXIgcGxhY2VtZW50IGluIElFIChhbiBvcmRlciB3aGljaCBzaG91bGQgbm90XG4gICAgLy8gYmUgZGVwZW5kZWQgb24gYW55d2F5cylcbiAgICBkZWxldGUgbWl4ZWRWYXJbbWl4ZWRWYXIubGVuZ3RoXTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgaWYgKCFtaXhlZFZhciB8fCAodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXkobWl4ZWRWYXIpO1xuXG4gIGlmIChpc0FycmF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaW5pVmFsID0gKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJy4uL2luZm8vaW5pX2dldCcpKCdsb2N1dHVzLm9iamVjdHNBc0FycmF5cycpIDogdW5kZWZpbmVkKSB8fCAnb24nO1xuICBpZiAoaW5pVmFsID09PSAnb24nKSB7XG4gICAgdmFyIGFzU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKTtcbiAgICB2YXIgYXNGdW5jID0gX2dldEZ1bmNOYW1lKG1peGVkVmFyLmNvbnN0cnVjdG9yKTtcblxuICAgIGlmIChhc1N0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgYXNGdW5jID09PSAnT2JqZWN0Jykge1xuICAgICAgLy8gTW9zdCBsaWtlbHkgYSBsaXRlcmFsIGFuZCBpbnRlbmRlZCBhcyBhc3NvYy4gYXJyYXlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19hcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19ib29sKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfYm9vbC9cbiAgLy8gb3JpZ2luYWwgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IENvdXJzZXNXZWIgKGh0dHA6Ly93d3cuY291cnNlc3dlYi5uZXQvKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfYm9vbChmYWxzZSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2Jvb2woMClcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgcmV0dXJuIG1peGVkVmFyID09PSB0cnVlIHx8IG1peGVkVmFyID09PSBmYWxzZTsgLy8gRmFzdGVyIChpbiBGRikgdGhhbiB0eXBlIGNoZWNraW5nXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfYm9vbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19jYWxsYWJsZShtaXhlZFZhciwgc3ludGF4T25seSwgY2FsbGFibGVOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfY2FsbGFibGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogRnJhbsOnb2lzXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIHZhcmlhYmxlIGNhbGxhYmxlTmFtZSBjYW5ub3Qgd29yayBhcyBhIHN0cmluZyB2YXJpYWJsZSBwYXNzZWQgYnlcbiAgLy8gICAgICBub3RlIDE6IHJlZmVyZW5jZSBhcyBpbiBQSFAgKHNpbmNlIEphdmFTY3JpcHQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nXG4gIC8vICAgICAgbm90ZSAxOiBzdHJpbmdzIGJ5IHJlZmVyZW5jZSksIGJ1dCBpbnN0ZWFkIHdpbGwgdGFrZSB0aGUgbmFtZSBvZlxuICAvLyAgICAgIG5vdGUgMTogYSBnbG9iYWwgdmFyaWFibGUgYW5kIHNldCB0aGF0IGluc3RlYWQuXG4gIC8vICAgICAgbm90ZSAxOiBXaGVuIHVzZWQgb24gYW4gb2JqZWN0LCBkZXBlbmRzIG9uIGEgY29uc3RydWN0b3IgcHJvcGVydHlcbiAgLy8gICAgICBub3RlIDE6IGJlaW5nIGtlcHQgb24gdGhlIG9iamVjdCBwcm90b3R5cGVcbiAgLy8gICAgICBub3RlIDI6IERlcGVuZGluZyBvbiB0aGUgYGNhbGxhYmxlTmFtZWAgdGhhdCBpcyBwYXNzZWQsIHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBldmFsLlxuICAvLyAgICAgIG5vdGUgMjogVGhlIGV2YWwgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAyOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAyOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19jYWxsYWJsZSgnaXNfY2FsbGFibGUnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfY2FsbGFibGUoJ2JvZ3VzRnVuY3Rpb24nLCB0cnVlKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZSAvLyBnaXZlcyB0cnVlIGJlY2F1c2UgZG9lcyBub3QgZG8gc3RyaWN0IGNoZWNraW5nXG4gIC8vICAgZXhhbXBsZSAzOiBmdW5jdGlvbiBTb21lQ2xhc3MgKCkge31cbiAgLy8gICBleGFtcGxlIDM6IFNvbWVDbGFzcy5wcm90b3R5cGUuc29tZU1ldGhvZCA9IGZ1bmN0aW9uICgpe31cbiAgLy8gICBleGFtcGxlIDM6IHZhciB0ZXN0T2JqID0gbmV3IFNvbWVDbGFzcygpXG4gIC8vICAgZXhhbXBsZSAzOiBpc19jYWxsYWJsZShbdGVzdE9iaiwgJ3NvbWVNZXRob2QnXSwgdHJ1ZSwgJ215VmFyJylcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gbXlWYXJcbiAgLy8gICByZXR1cm5zIDM6ICdTb21lQ2xhc3M6OnNvbWVNZXRob2QnXG4gIC8vICAgZXhhbXBsZSA0OiBpc19jYWxsYWJsZShmdW5jdGlvbiAoKSB7fSlcbiAgLy8gICByZXR1cm5zIDQ6IHRydWVcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgb2JqID0ge307XG4gIHZhciBtZXRob2QgPSAnJztcbiAgdmFyIHZhbGlkRnVuY3Rpb25OYW1lID0gZmFsc2U7XG5cbiAgdmFyIGdldEZ1bmNOYW1lID0gZnVuY3Rpb24gZ2V0RnVuY05hbWUoZm4pIHtcbiAgICB2YXIgbmFtZSA9IC9cXFcqZnVuY3Rpb25cXHMrKFtcXHckXSspXFxzKlxcKC8uZXhlYyhmbik7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gJyhBbm9ueW1vdXMpJztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVbMV07XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZycpIHtcbiAgICBvYmogPSAkZ2xvYmFsO1xuICAgIG1ldGhvZCA9IG1peGVkVmFyO1xuICAgIG5hbWUgPSBtaXhlZFZhcjtcbiAgICB2YWxpZEZ1bmN0aW9uTmFtZSA9ICEhbmFtZS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1peGVkVmFyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBtaXhlZFZhci5sZW5ndGggPT09IDIgJiYgX3R5cGVvZihtaXhlZFZhclswXSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtaXhlZFZhclsxXSA9PT0gJ3N0cmluZycpIHtcbiAgICBvYmogPSBtaXhlZFZhclswXTtcbiAgICBtZXRob2QgPSBtaXhlZFZhclsxXTtcbiAgICBuYW1lID0gKG9iai5jb25zdHJ1Y3RvciAmJiBnZXRGdW5jTmFtZShvYmouY29uc3RydWN0b3IpKSArICc6OicgKyBtZXRob2Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN5bnRheE9ubHkgfHwgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB2YWxpZEZ1bmN0aW9uTmFtZSBhdm9pZHMgZXhwbG9pdHNcbiAgaWYgKHZhbGlkRnVuY3Rpb25OYW1lICYmIHR5cGVvZiBldmFsKG1ldGhvZCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICBpZiAoY2FsbGFibGVOYW1lKSB7XG4gICAgICAkZ2xvYmFsW2NhbGxhYmxlTmFtZV0gPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19jYWxsYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19mbG9hdChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2Zsb2F0L1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IFdlYkRldkhvYm8gKGh0dHA6Ly93ZWJkZXZob2JvLmJsb2dzcG90LmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgICAgIG5vdGUgMTogMS4wIGlzIHNpbXBsaWZpZWQgdG8gMSBiZWZvcmUgaXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBmdW5jdGlvbiwgdGhpcyBtYWtlc1xuICAvLyAgICAgIG5vdGUgMTogaXQgZGlmZmVyZW50IGZyb20gdGhlIFBIUCBpbXBsZW1lbnRhdGlvbi4gV2UgY2FuJ3QgZml4IHRoaXMgdW5mb3J0dW5hdGVseS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2Zsb2F0KDE4Ni4zMSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICByZXR1cm4gK21peGVkVmFyID09PSBtaXhlZFZhciAmJiAoIWlzRmluaXRlKG1peGVkVmFyKSB8fCAhIShtaXhlZFZhciAlIDEpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19mbG9hdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19pbnQobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19pbnQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBBbGV4XG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogV2ViRGV2SG9ibyAoaHR0cDovL3dlYmRldmhvYm8uYmxvZ3Nwb3QuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICByZXZpc2VkIGJ5OiBNYXR0IEJyYWRsZXlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiAxLjAgaXMgc2ltcGxpZmllZCB0byAxIGJlZm9yZSBpdCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGZ1bmN0aW9uLCB0aGlzIG1ha2VzXG4gIC8vICAgICAgbm90ZSAxOiBpdCBkaWZmZXJlbnQgZnJvbSB0aGUgUEhQIGltcGxlbWVudGF0aW9uLiBXZSBjYW4ndCBmaXggdGhpcyB1bmZvcnR1bmF0ZWx5LlxuICAvLyAgIGV4YW1wbGUgMTogaXNfaW50KDIzKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfaW50KCcyMycpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfaW50KDIzLjUpXG4gIC8vICAgcmV0dXJucyAzOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNDogaXNfaW50KHRydWUpXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuXG4gIHJldHVybiBtaXhlZFZhciA9PT0gK21peGVkVmFyICYmIGlzRmluaXRlKG1peGVkVmFyKSAmJiAhKG1peGVkVmFyICUgMSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfaW50LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX251bGwobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19udWxsL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IGlzX251bGwoJzIzJylcbiAgLy8gICByZXR1cm5zIDE6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19udWxsKG51bGwpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG5cbiAgcmV0dXJuIG1peGVkVmFyID09PSBudWxsO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX251bGwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX251bWVyaWMobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19udW1lcmljL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IERhdmlkXG4gIC8vIGltcHJvdmVkIGJ5OiB0YWl0aFxuICAvLyBidWdmaXhlZCBieTogVGltIGRlIEtvbmluZ1xuICAvLyBidWdmaXhlZCBieTogV2ViRGV2SG9ibyAoaHR0cDovL3dlYmRldmhvYm8uYmxvZ3Nwb3QuY29tLylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBEZW5pcyBDaGVudSAoaHR0cDovL3Nobm91bGxlLm5ldClcbiAgLy8gICBleGFtcGxlIDE6IGlzX251bWVyaWMoMTg2LjMxKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfbnVtZXJpYygnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfbnVtZXJpYygnICsxODYuMzFlMicpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgZXhhbXBsZSA0OiBpc19udW1lcmljKCcnKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGlzX251bWVyaWMoW10pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNjogaXNfbnVtZXJpYygnMSAnKVxuICAvLyAgIHJldHVybnMgNjogZmFsc2VcblxuICB2YXIgd2hpdGVzcGFjZSA9IFsnICcsICdcXG4nLCAnXFxyJywgJ1xcdCcsICdcXGYnLCAnXFx4MGInLCAnXFx4YTAnLCAnXFx1MjAwMCcsICdcXHUyMDAxJywgJ1xcdTIwMDInLCAnXFx1MjAwMycsICdcXHUyMDA0JywgJ1xcdTIwMDUnLCAnXFx1MjAwNicsICdcXHUyMDA3JywgJ1xcdTIwMDgnLCAnXFx1MjAwOScsICdcXHUyMDBBJywgJ1xcdTIwMEInLCAnXFx1MjAyOCcsICdcXHUyMDI5JywgJ1xcdTMwMDAnXS5qb2luKCcnKTtcblxuICAvLyBAdG9kbzogQnJlYWsgdGhpcyB1cCB1c2luZyBtYW55IHNpbmdsZSBjb25kaXRpb25zIHdpdGggZWFybHkgcmV0dXJuc1xuICByZXR1cm4gKHR5cGVvZiBtaXhlZFZhciA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJyAmJiB3aGl0ZXNwYWNlLmluZGV4T2YobWl4ZWRWYXIuc2xpY2UoLTEpKSA9PT0gLTEpICYmIG1peGVkVmFyICE9PSAnJyAmJiAhaXNOYU4obWl4ZWRWYXIpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX251bWVyaWMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfb2JqZWN0KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfb2JqZWN0L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfb2JqZWN0KCcyMycpXG4gIC8vICAgcmV0dXJucyAxOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfb2JqZWN0KHtmb286ICdiYXInfSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IGlzX29iamVjdChudWxsKVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gbWl4ZWRWYXIgIT09IG51bGwgJiYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSA9PT0gJ29iamVjdCc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfb2JqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfc2NhbGFyKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfc2NhbGFyL1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyAgIGV4YW1wbGUgMTogaXNfc2NhbGFyKDE4Ni4zMSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX3NjYWxhcih7MDogJ0tldmluIHZhbiBab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgcmV0dXJuICgvYm9vbGVhbnxudW1iZXJ8c3RyaW5nLy50ZXN0KHR5cGVvZiBtaXhlZFZhciA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1peGVkVmFyKSlcbiAgKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19zY2FsYXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX3N0cmluZyhtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX3N0cmluZy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19zdHJpbmcoJzIzJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX3N0cmluZygyMy41KVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICByZXR1cm4gdHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19zdHJpbmcuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzc2V0KCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzc2V0L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEZyZW15Q29tcGFueVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICBleGFtcGxlIDE6IGlzc2V0KCB1bmRlZmluZWQsIHRydWUpXG4gIC8vICAgcmV0dXJucyAxOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMjogaXNzZXQoICdLZXZpbiB2YW4gWm9ubmV2ZWxkJyApXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG5cbiAgdmFyIGEgPSBhcmd1bWVudHM7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHVuZGVmO1xuXG4gIGlmIChsID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbXB0eSBpc3NldCcpO1xuICB9XG5cbiAgd2hpbGUgKGkgIT09IGwpIHtcbiAgICBpZiAoYVtpXSA9PT0gdW5kZWYgfHwgYVtpXSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc3NldC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXRmOF9lbmNvZGUoYXJnU3RyaW5nKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXRmOF9lbmNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBXZWJ0b29sa2l0LmluZm8gKGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvLylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBzb3diZXJyeVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyBpbXByb3ZlZCBieTogWXZlcyBTdWNhZXRcbiAgLy8gaW1wcm92ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogVWxyaWNoXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyBidWdmaXhlZCBieToga2lyaWxsb2lkXG4gIC8vICAgZXhhbXBsZSAxOiB1dGY4X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICBpZiAoYXJnU3RyaW5nID09PSBudWxsIHx8IHR5cGVvZiBhcmdTdHJpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gLnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKS5yZXBsYWNlKC9cXHIvZywgXCJcXG5cIik7XG4gIHZhciBzdHJpbmcgPSBhcmdTdHJpbmcgKyAnJztcbiAgdmFyIHV0ZnRleHQgPSAnJztcbiAgdmFyIHN0YXJ0O1xuICB2YXIgZW5kO1xuICB2YXIgc3RyaW5nbCA9IDA7XG5cbiAgc3RhcnQgPSBlbmQgPSAwO1xuICBzdHJpbmdsID0gc3RyaW5nLmxlbmd0aDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmdsOyBuKyspIHtcbiAgICB2YXIgYzEgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcbiAgICB2YXIgZW5jID0gbnVsbDtcblxuICAgIGlmIChjMSA8IDEyOCkge1xuICAgICAgZW5kKys7XG4gICAgfSBlbHNlIGlmIChjMSA+IDEyNyAmJiBjMSA8IDIwNDgpIHtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gNiB8IDE5MiwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfSBlbHNlIGlmICgoYzEgJiAweEY4MDApICE9PSAweEQ4MDApIHtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTIgfCAyMjQsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN1cnJvZ2F0ZSBwYWlyc1xuICAgICAgaWYgKChjMSAmIDB4RkMwMCkgIT09IDB4RDgwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5tYXRjaGVkIHRyYWlsIHN1cnJvZ2F0ZSBhdCAnICsgbik7XG4gICAgICB9XG4gICAgICB2YXIgYzIgPSBzdHJpbmcuY2hhckNvZGVBdCgrK24pO1xuICAgICAgaWYgKChjMiAmIDB4RkMwMCkgIT09IDB4REMwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5tYXRjaGVkIGxlYWQgc3Vycm9nYXRlIGF0ICcgKyAobiAtIDEpKTtcbiAgICAgIH1cbiAgICAgIGMxID0gKChjMSAmIDB4M0ZGKSA8PCAxMCkgKyAoYzIgJiAweDNGRikgKyAweDEwMDAwO1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiAxOCB8IDI0MCwgYzEgPj4gMTIgJiA2MyB8IDEyOCwgYzEgPj4gNiAmIDYzIHwgMTI4LCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9XG4gICAgaWYgKGVuYyAhPT0gbnVsbCkge1xuICAgICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICAgIHV0ZnRleHQgKz0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuICAgICAgdXRmdGV4dCArPSBlbmM7XG4gICAgICBzdGFydCA9IGVuZCA9IG4gKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPiBzdGFydCkge1xuICAgIHV0ZnRleHQgKz0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBzdHJpbmdsKTtcbiAgfVxuXG4gIHJldHVybiB1dGZ0ZXh0O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0ZjhfZW5jb2RlLmpzLm1hcCIsIi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9jb3VudF92YWx1ZXMnIF0gICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfY291bnRfdmFsdWVzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmlsbCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZpbGwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9maWxsX2tleXMnIF0gICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmlsbF9rZXlzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmlsdGVyJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZpbHRlcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZsaXAnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9mbGlwJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfa2V5X2V4aXN0cycgXSAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2tleV9leGlzdHMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9rZXlzJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfa2V5cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X21hcCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9tYXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9yZXZlcnNlJyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfcmV2ZXJzZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3NlYXJjaCcgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9zZWFyY2gnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9zdW0nIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfc3VtJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfdW5pcXVlJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3VuaXF1ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2N1cnJlbnQnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9jdXJyZW50JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZW5kJyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2VuZCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2tleScgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9rZXknICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICduZXh0JyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvbmV4dCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3BvcycgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9wb3MnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwcmV2JyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcHJldicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3JhbmdlJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9yYW5nZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Jlc2V0JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9yZXNldCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3NpemVvZicgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9zaXplb2YnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdubDJicicgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9ubDJicicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ251bWJlcl9mb3JtYXQnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL251bWJlcl9mb3JtYXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwcmludGYnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9wcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzcHJpbnRmJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zcHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyX3JlcGVhdCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGVhdCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cl9zcGxpdCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl9zcGxpdCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cl93b3JkX2NvdW50JyBdICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl93b3JkX2NvdW50JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyaXBfdGFncycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyaXBfdGFncycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cmlwc2xhc2hlcycgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cmlwc2xhc2hlcycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cnN0cicgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnN0cicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cnRyJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnRyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndnByaW50ZicgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvdnByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ZzcHJpbnRmJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3ZzcHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnd29yZHdyYXAnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvd29yZHdyYXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwcmludF9yJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3ByaW50X3InICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzZXJpYWxpemUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3NlcmlhbGl6ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Vuc2VyaWFsaXplJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvdW5zZXJpYWxpemUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2YXJfZXhwb3J0JyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3Zhcl9leHBvcnQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2YXJfZHVtcCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3Zhcl9kdW1wJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndmVyc2lvbl9jb21wYXJlJyBdICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2luZm8vdmVyc2lvbl9jb21wYXJlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbHRyaW0nIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbHRyaW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdydHJpbScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9ydHJpbScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3RyaW0nIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3RyaW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV93YWxrJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfd2FsaycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3dhbGtfcmVjdXJzaXZlJyBdICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV93YWxrX3JlY3Vyc2l2ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2RhdGVfcGFyc2UnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9kYXRlX3BhcnNlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZ2V0ZGF0ZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL2dldGRhdGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdiYXNlbmFtZScgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZmlsZXN5c3RlbS9iYXNlbmFtZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2Rpcm5hbWUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9maWxlc3lzdGVtL2Rpcm5hbWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwYXRoaW5mbycgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZmlsZXN5c3RlbS9wYXRoaW5mbycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2RhdGUnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9kYXRlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RydG90aW1lJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL3N0cnRvdGltZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2h0dHBfYnVpbGRfcXVlcnknIF0gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvaHR0cF9idWlsZF9xdWVyeScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2RvdWJsZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfZG91YmxlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfaW50ZWdlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19pbnRlZ2VyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfbG9uZycgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19sb25nJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfcmVhbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19yZWFsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfdW5pY29kZScgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc191bmljb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfYnVmZmVyJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19idWZmZXInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkb3VibGV2YWwnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2RvdWJsZXZhbCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2dldHR5cGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZ2V0dHlwZScgKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfbWVyZ2UnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X21lcmdlX3JlY3Vyc2l2ZScgXSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdmFsdWVzJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjb3VudCcgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvY291bnQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaW5fYXJyYXknIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ21pY3JvdGltZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndGltZScgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY2FsbF91c2VyX2Z1bmMnIF0gICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NhbGxfdXNlcl9mdW5jX2FycmF5JyBdICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdmdW5jdGlvbl9leGlzdHMnIF0gICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndW5pcWlkJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL21pc2MvdW5pcWlkJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2V4cGxvZGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL2V4cGxvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaW1wbG9kZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvaW1wbG9kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdtZDUnIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9tZDUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncGFyc2Vfc3RyJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcGFyc2Vfc3RyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3N0cl9yZXBsYWNlJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl9yZXBsYWNlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3N0cnRvbG93ZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnRvbG93ZXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc3RydG91cHBlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG91cHBlcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdiYXNlNjRfZGVjb2RlJyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9kZWNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYmFzZTY0X2VuY29kZScgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9iYXNlNjRfZW5jb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncGFyc2VfdXJsJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9wYXJzZV91cmwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyYXd1cmxkZWNvZGUnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3Jhd3VybGRlY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Jhd3VybGVuY29kZScgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndXJsZGVjb2RlJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC91cmxkZWNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1cmxlbmNvZGUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGVuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdib29sdmFsJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2Jvb2x2YWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZW1wdHknIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9lbXB0eScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdmbG9hdHZhbCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2Zsb2F0dmFsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2ludHZhbCcgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaW50dmFsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2FycmF5JyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYm9vbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19ib29sJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2NhbGxhYmxlJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfZmxvYXQnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19mbG9hdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19pbnQnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2ludCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19udWxsJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX251bGwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfbnVtZXJpYycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19udW1lcmljJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX29iamVjdCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3NjYWxhcicgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfc2NhbGFyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3N0cmluZycgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfc3RyaW5nJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzc2V0JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNzZXQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncGFyc2VfYXJncycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2pzLXBhcnNlLWFyZ3MnICk7XHJcblxyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9fY3N2JyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9fY3N2JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX2h0bWxfYXR0cicgXSA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0cicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV90b19odG1sJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX3dpbmRvdycgXSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX3dpbmRvdycgKTtcclxubW9kdWxlLmV4cG9ydHNbICd3cmFwX2FycmF5JyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93cmFwX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ29rZycgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL29rZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdva3MnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9va3MnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncGxhaW5fb2JqZWN0JyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcGxhaW5fb2JqZWN0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX29iamVjdF9saWtlJyBdICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX29iamVjdF9saWtlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2FycmF5X2xpa2UnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX29iamVjdF9saWtlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Nsb25lX29iamVjdCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2Nsb25lX29iamVjdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19hZnRlcl9kYXRlJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19hZnRlcl9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2JlZm9yZV9kYXRlJyBdICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2JlZm9yZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3NhbWVfZGF0ZScgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3NhbWVfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdmb3JtYXRfZHVyYXRpb24nIF0gICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9mb3JtYXRfZHVyYXRpb24nICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZGlmZl9kYXlzJyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGlmZl9kYXlzJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3VuZGVmaW5lZCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3VuZGVmaW5lZCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc190YWJfZm9jdXNlZCcgXSAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc190YWJfZm9jdXNlZCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzY3JvbGxfdG9fdG9wJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9zY3JvbGxfdG9fdG9wJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NvcHlfdG9fY2xpcCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2NvcHlfdG9fY2xpcCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzY3JvbGxfcG9zJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9zY3JvbGxfcG9zJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3dpbmRvd19hcmcnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnd2luZG93X2FyZycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvd2luZG93X2FyZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdkZXZpY2VfdHlwZScgXSAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9kZXZpY2VfdHlwZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdkZWJ1ZycgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RpbWVfdGFrZW4nIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RpbWVfdGFrZW4nICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncGlwZV9sb2cnIF0gICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcGlwZV9sb2cnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY291bnRlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY291bnRlcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0b19qcXVlcnknIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qcXVlcnknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndG9fanNfZnVuYycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdG9fanNfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdyYW5kX21kNScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9yYW5kX21kNScgKTtcclxubW9kdWxlLmV4cG9ydHNbICd1cmxfcGFyYW1zJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy91cmxfcGFyYW1zJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3F1ZXJ5X3N0cmluZycgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3F1ZXJ5X3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19qcXVlcnknIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19qcXVlcnknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY3NzX3VuaXRzJyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY3NzX3VuaXRzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnanNvbl90b19jc3YnIF0gICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvanNvbl90b19jc3YnICk7IiwiLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBhcnJheSBlbGVtZW50cyBpbnRvIDxsaT4gdGFncyBhbmQgYXBwZW5kcyB0aGVtIHRvIHRoZSBsaXN0IG9mIHRoZSBnaXZlbiBpZC5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigpLCBhbmQgYW4gYW5vbnltb3VzIGlubmVyIGNsb3N1cmUgdG8gY3JlYXRlIGEgbGlzdCBvZiBodG1sIHRhZ3MuXHJcbiAqIEBwYXJhbSBhcnJcclxuICogQHBhcmFtIGxpc3RJRFxyXG4gKiBAcGFyYW0gdGFnXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGFyciwgbGlzdElELCB0YWcgPSAnbGknICkgPT4gKCBlbCA9PiAoICggZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnIycgKyBsaXN0SUQgKSApLCAoIGVsLmlubmVySFRNTCArPSBhcnIubWFwKCBpdGVtID0+IGA8JHt0YWd9PiR7aXRlbX08LyR7dGFnfT5gIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCAnJyApICkgKSApKCk7IiwiaW1wb3J0IGlzX29iamVjdCBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0JztcclxuaW1wb3J0IGlzX29iamVjdF9saWtlIGZyb20gJy4vaXNfb2JqZWN0X2xpa2UnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhICkgPT4ge1xyXG5cdGxldCByZXR1cm5faHRtbCA9ICcnO1xyXG5cdGZvciggbGV0IEkgaW4gJGRhdGEgKSB7XHJcblx0XHRpZiggaXNfb2JqZWN0KCAkZGF0YVsgSSBdICkgKSB7XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJztcclxuXHRcdFx0Zm9yKCBsZXQgSyBpbiAkZGF0YVsgSSBdICkge1xyXG5cdFx0XHRcdGxldCAkdmFsdWUgPSAoIGlzX29iamVjdF9saWtlKCAkZGF0YVsgSSBdWyBLIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF1bIEsgXSApIDogJGRhdGFbIEkgXVsgSyBdO1xyXG5cdFx0XHRcdHJldHVybl9odG1sICs9ICR2YWx1ZSArICcgJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnXCInO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0ICR2YWx1ZSA9ICggaXNfb2JqZWN0X2xpa2UoICRkYXRhWyBJIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF0gKSA6ICRkYXRhWyBJIF07XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJyArICR2YWx1ZSArICdcIiAnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmV0dXJuX2h0bWw7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAoICRhcnJheSApID0+IHtcclxuXHRmb3IoIGxldCAka2V5IGluICRhcnJheSApIHtcclxuXHRcdHdpbmRvd1sgJGtleSBdID0gJGFycmF5WyAka2V5IF07XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBDcmVhdGVzIEEgQ2xvbmUgb2YgZ2l2ZW4gdmFsdWUuXHJcbiAqIEBwYXJhbSAkZGF0YVxyXG4gKiBAcmV0dXJucyB7YW55fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhICkgPT4gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoICRkYXRhICkgKTsiLCIvKipcclxuICogQ29weSBhIHN0cmluZyB0byB0aGUgY2xpcGJvYXJkLiBPbmx5IHdvcmtzIGFzIGEgcmVzdWx0IG9mIHVzZXIgYWN0aW9uIChpLmUuIGluc2lkZSBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyKS5cclxuICogQ3JlYXRlIGEgbmV3IDx0ZXh0YXJlYT4gZWxlbWVudCwgZmlsbCBpdCB3aXRoIHRoZSBzdXBwbGllZCBkYXRhIGFuZCBhZGQgaXQgdG8gdGhlIEhUTUwgZG9jdW1lbnQuXHJcbiAqIFVzZSBTZWxlY3Rpb24uZ2V0UmFuZ2VBdCgpdG8gc3RvcmUgdGhlIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBVc2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKSB0byBjb3B5IHRvIHRoZSBjbGlwYm9hcmQuXHJcbiAqIFJlbW92ZSB0aGUgPHRleHRhcmVhPiBlbGVtZW50IGZyb20gdGhlIEhUTUwgZG9jdW1lbnQuIEZpbmFsbHksIHVzZSBTZWxlY3Rpb24oKS5hZGRSYW5nZSgpIHRvIHJlY292ZXIgdGhlIG9yaWdpbmFsIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBAcGFyYW0gc3RyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiB7XHJcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGV4dGFyZWEnICk7XHJcblx0ZWwudmFsdWUgPSBzdHI7XHJcblx0ZWwuc2V0QXR0cmlidXRlKCAncmVhZG9ubHknLCAnJyApO1xyXG5cdGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRlbC5zdHlsZS5sZWZ0ICAgICA9ICctOTk5OXB4JztcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbCApO1xyXG5cdGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA+IDAgPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KCAwICkgOiBmYWxzZTtcclxuXHRlbC5zZWxlY3QoKTtcclxuXHRkb2N1bWVudC5leGVjQ29tbWFuZCggJ2NvcHknICk7XHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCggZWwgKTtcclxuXHRpZiggc2VsZWN0ZWQgKSB7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKCBzZWxlY3RlZCApO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBhIGNvdW50ZXIgd2l0aCB0aGUgc3BlY2lmaWVkIHJhbmdlLCBzdGVwIGFuZCBkdXJhdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBzZWxlY3Rvci5cclxuICogQ2hlY2sgaWYgc3RlcCBoYXMgdGhlIHByb3BlciBzaWduIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkuXHJcbiAqIFVzZSBzZXRJbnRlcnZhbCgpIGluIGNvbWJpbmF0aW9uIHdpdGggTWF0aC5hYnMoKSBhbmQgTWF0aC5mbG9vcigpIHRvIGNhbGN1bGF0ZSB0aGUgdGltZSBiZXR3ZWVuIGVhY2ggbmV3IHRleHQgZHJhdy5cclxuICogVXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKS5pbm5lckhUTUwgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cclxuICogT21pdCB0aGUgZm91cnRoIHBhcmFtZXRlciwgc3RlcCwgdG8gdXNlIGEgZGVmYXVsdCBzdGVwIG9mIDEuIE9taXQgdGhlIGZpZnRoIHBhcmFtZXRlciwgZHVyYXRpb24sIHRvIHVzZSBhIGRlZmF1bHQgZHVyYXRpb24gb2YgMjAwMG1zLlxyXG4gKiBAcGFyYW0gc2VsZWN0b3JcclxuICogQHBhcmFtIHN0YXJ0XHJcbiAqIEBwYXJhbSBlbmRcclxuICogQHBhcmFtIHN0ZXBcclxuICogQHBhcmFtIGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggc2VsZWN0b3IsIHN0YXJ0LCBlbmQsIHN0ZXAgPSAxLCBkdXJhdGlvbiA9IDIwMDAgKSA9PiB7XHJcblx0bGV0IGN1cnJlbnQgPSBzdGFydCxcclxuXHRcdF9zdGVwICAgPSAoIGVuZCAtIHN0YXJ0ICkgKiBzdGVwIDwgMCA/IC1zdGVwIDogc3RlcCxcclxuXHRcdHRpbWVyICAgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHRjdXJyZW50ICs9IF9zdGVwO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGN1cnJlbnQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gZW5kO1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBjbGVhckludGVydmFsKCB0aW1lciApO1xyXG5cdFx0fSwgTWF0aC5hYnMoIE1hdGguZmxvb3IoIGR1cmF0aW9uIC8gKCBlbmQgLSBzdGFydCApICkgKSApO1xyXG5cdHJldHVybiB0aW1lcjtcclxufTsiLCJjb25zdCBpc051bWJlcmljID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19udW1lcmljJyApO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4ge1xyXG5cdHZhciBzID0gdmFsO1xyXG5cdGlmKCBpc051bWJlcmljKCB2YWwgKSApIHtcclxuXHRcdHJldHVybiB2YWwgKyAncHgnO1xyXG5cdH0gZWxzZSBpZiggdmFsLmluZGV4T2YoICdweCcgKSA+IC0xIHx8IHZhbC5pbmRleE9mKCAnJScgKSA+IC0xIHx8IHZhbC5pbmRleE9mKCAnZW0nICkgPiAtMSApIHtcclxuXHRcdGxldCBjaGVja1B4ICA9IHMucmVwbGFjZSggJ3B4JywgJycgKTtcclxuXHRcdGxldCBjaGVja1BjdCA9IHMucmVwbGFjZSggJyUnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrRW0gID0gcy5yZXBsYWNlKCAnZW0nLCAnJyApO1xyXG5cdFx0aWYoIGlzTnVtYmVyaWMoIGNoZWNrUHggKSB8fCBpc051bWJlcmljKCBjaGVja1BjdCApIHx8IGlzTnVtYmVyaWMoIGNoZWNrRW0gKSApIHtcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAnMHB4JztcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuICcwcHgnO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogRGV0ZWN0cyB3ZXRoZXIgdGhlIHdlYnNpdGUgaXMgYmVpbmcgb3BlbmVkIGluIGEgbW9iaWxlIGRldmljZSBvciBhIGRlc2t0b3AvbGFwdG9wLlxyXG4gKiBVc2UgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gdGVzdCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCBwcm9wZXJ0eSB0byBmaWd1cmUgb3V0IGlmIHRoZSBkZXZpY2UgaXMgYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApID8gJ01vYmlsZScgOiAnRGVza3RvcCc7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgKGluIGRheXMpIGJldHdlZW4gdHdvIGRhdGVzLlxyXG4gKiBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgKGluIGRheXMpIGJldHdlZW4gdHdvIERhdGUgb2JqZWN0cy5cclxuICogQHBhcmFtIGRhdGVJbml0aWFsXHJcbiAqIEBwYXJhbSBkYXRlRmluYWxcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlSW5pdGlhbCwgZGF0ZUZpbmFsICkgPT4gKCBkYXRlRmluYWwgLSBkYXRlSW5pdGlhbCApIC8gKCAxMDAwICogMzYwMCAqIDI0ICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGh1bWFuIHJlYWRhYmxlIGZvcm1hdCBvZiB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICogRGl2aWRlIG1zIHdpdGggdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyB0byBvYnRhaW4gdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyBmb3IgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCBhbmQgbWlsbGlzZWNvbmQuXHJcbiAqIFVzZSBPYmplY3QuZW50cmllcygpIHdpdGggQXJyYXkucHJvdG90eXBlLmZpbHRlcigpIHRvIGtlZXAgb25seSBub24temVybyB2YWx1ZXMuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCkgdG8gY3JlYXRlIHRoZSBzdHJpbmcgZm9yIGVhY2ggdmFsdWUsIHBsdXJhbGl6aW5nIGFwcHJvcHJpYXRlbHkuXHJcbiAqIFVzZSBTdHJpbmcucHJvdG90eXBlLmpvaW4oJywgJykgdG8gY29tYmluZSB0aGUgdmFsdWVzIGludG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBtc1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBtcyA9PiB7XHJcblx0aWYoIG1zIDwgMCApIG1zID0gLW1zO1xyXG5cdGNvbnN0IHRpbWUgPSB7XHJcblx0XHRkYXk6IE1hdGguZmxvb3IoIG1zIC8gODY0MDAwMDAgKSxcclxuXHRcdGhvdXI6IE1hdGguZmxvb3IoIG1zIC8gMzYwMDAwMCApICUgMjQsXHJcblx0XHRtaW51dGU6IE1hdGguZmxvb3IoIG1zIC8gNjAwMDAgKSAlIDYwLFxyXG5cdFx0c2Vjb25kOiBNYXRoLmZsb29yKCBtcyAvIDEwMDAgKSAlIDYwLFxyXG5cdFx0bWlsbGlzZWNvbmQ6IE1hdGguZmxvb3IoIG1zICkgJSAxMDAwXHJcblx0fTtcclxuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoIHRpbWUgKVxyXG5cdFx0XHRcdCAuZmlsdGVyKCB2YWwgPT4gdmFsWyAxIF0gIT09IDAgKVxyXG5cdFx0XHRcdCAubWFwKCAoIFsga2V5LCB2YWwgXSApID0+IGAke3ZhbH0gJHtrZXl9JHt2YWwgIT09IDEgPyAncycgOiAnJ31gIClcclxuXHRcdFx0XHQgLmpvaW4oICcsICcgKTtcclxufTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGFmdGVyIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIHRoZSBncmVhdGVyIHRoYW4gb3BlcmF0b3IgKD4pIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGNvbWVzIGFmdGVyIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBID4gZGF0ZUI7IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBiZWZvcmUgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGxlc3MgdGhhbiBvcGVyYXRvciAoPCkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYmVmb3JlIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBIDwgZGF0ZUI7IiwiaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICcuL2lzX3VuZGVmaW5lZCc7XHJcbmltcG9ydCBpc19zdHJpbmcgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZyc7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgZ2l2ZW4gT2JqZWN0IC8gVmFsdWUgaXMgYSBqUXVlcnkgSW5zdGFuY2UuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkZWxlbSApICYmIGZhbHNlID09PSBpc19zdHJpbmcoICRlbGVtICkgJiYgJGVsZW0ualF1ZXJ5ICk7IiwiaW1wb3J0IGlzX29iamVjdCBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0JztcclxuaW1wb3J0IGlzX2FycmF5IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19hcnJheSc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaXMgb2JqZWN0LWxpa2UuXHJcbiAqIENoZWNrIGlmIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBub3QgbnVsbCBhbmQgaXRzIHR5cGVvZiBpcyBlcXVhbCB0byAnb2JqZWN0Jy5cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCB2YWwgKSA9PiB7XHJcblx0cmV0dXJuICggaXNfb2JqZWN0KCB2YWwgKSB8fCBpc19hcnJheSggdmFsICkgKTtcclxufTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIHRoZSBzYW1lIGFzIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKCkgYW5kIHN0cmljdCBlcXVhbGl0eSBjaGVja2luZyAoPT09KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQS50b0lTT1N0cmluZygpID09PSBkYXRlQi50b0lTT1N0cmluZygpOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIGZvY3VzZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBEb2N1bWVudC5oaWRkZW4gcHJvcGVydHksIGludHJvZHVjZWQgYnkgdGhlIFBhZ2UgVmlzaWJpbGl0eSBBUEkgdG8gY2hlY2sgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gIWRvY3VtZW50LmhpZGRlbjsiLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdW5kZWZpbmVkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqIFVzZSB0aGUgc3RyaWN0IGVxdWFsaXR5IG9wZXJhdG9yIHRvIGNoZWNrIGlmIHRoZSB2YWx1ZSBhbmQgb2YgdmFsIGFyZSBlcXVhbCB0byB1bmRlZmluZWQuXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB2YWwgPT09IHVuZGVmaW5lZDsiLCJpbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gJy4vaXNfdW5kZWZpbmVkJztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgd2luZG93IGhhcyBnaXZlbiB2YXJpYWJsZS5cclxuICogQHBhcmFtICRrZXlcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSApID0+ICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93WyAka2V5IF0gKSApOyIsImxldCAkT0tTICAgICAgID0gKCBwcm9wZXJ0aWVzLCBvYmosIGRlZmF1bHRWYWx1ZSwgZGVsaW1pdGVyID0gJy8nICkgPT4ge1xyXG5cdHByb3BlcnRpZXMgICA9ICggdHlwZW9mIHByb3BlcnRpZXMgPT09ICdzdHJpbmcnICkgPyBwcm9wZXJ0aWVzLnNwbGl0KCBkZWxpbWl0ZXIgKSA6IFsgcHJvcGVydGllcyBdO1xyXG5cdGxldCBwcm9wZXJ0eSA9IHByb3BlcnRpZXMuc2hpZnQoKTtcclxuXHJcblx0aWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHR9XHJcblxyXG5cdGlmKCBwcm9wZXJ0aWVzLmxlbmd0aCApIHtcclxuXHRcdHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmpvaW4oIGRlbGltaXRlciApO1xyXG5cdFx0cmV0dXJuICRPS1MoIHByb3BlcnRpZXMsIG9ialsgcHJvcGVydHkgXSwgZGVmYXVsdFZhbHVlLCBkZWxpbWl0ZXIgKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIG9ialsgcHJvcGVydHkgXTtcclxuXHR9XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gJE9LUzsiLCJsZXQgJE9LUyAgICAgICA9ICggcHJvcGVydGllcywgdmFsdWUsIG9iaiwgZGVsaW1pdGVyID0gJy8nICkgPT4ge1xyXG5cdHByb3BlcnRpZXMgICA9ICggdHlwZW9mIHByb3BlcnRpZXMgPT09ICdzdHJpbmcnICkgPyBwcm9wZXJ0aWVzLnNwbGl0KCBkZWxpbWl0ZXIgKSA6IFsgcHJvcGVydGllcyBdO1xyXG5cdGxldCBwcm9wZXJ0eSA9IHByb3BlcnRpZXMuc2hpZnQoKTtcclxuXHJcblx0aWYoIHByb3BlcnRpZXMubGVuZ3RoICkge1xyXG5cdFx0cHJvcGVydGllcyA9IHByb3BlcnRpZXMuam9pbiggZGVsaW1pdGVyICk7XHJcblxyXG5cdFx0aWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRvYmpbIHByb3BlcnR5IF0gPSB7fTtcclxuXHRcdH0gZWxzZSBpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSAhPT0gJ29iamVjdCcgKSB7XHJcblx0XHRcdGNvbnNvbGUud2FybiggJ09iamVjdCBwcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIiBhbHJlYWR5IGhhcyBub24gb2JqZWN0IHZhbHVlOicsIG9ialsgcHJvcGVydHkgXSwgJ0l0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBhbiBlbXB0eSBvYmplY3QnICk7XHJcblx0XHRcdG9ialsgcHJvcGVydHkgXSA9IHt9O1xyXG5cdFx0fSBlbHNlIGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdLmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdGlmKCAoIC9eWzAtOV0rJC8gKS50ZXN0KCBwcm9wZXJ0eSApICkge1xyXG5cdFx0XHRcdHByb3BlcnR5ID0gcGFyc2VJbnQoIHByb3BlcnR5ICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVHJ5IHRvIHNldCBub24gbnVtZXJpYyBwcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIiB0byBhcnJheTonLCBvYmpbIHByb3BlcnR5IF0sICdUaGUgYXJyYXkgd2lsbCBiZSBiZSByZXBsYWNlZCB3aXRoIGFuIGVtcHR5IG9iamVjdCcgKTtcclxuXHRcdFx0XHRvYmpbIHByb3BlcnR5IF0gPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0JE9LUyggcHJvcGVydGllcywgdmFsdWUsIG9ialsgcHJvcGVydHkgXSwgZGVsaW1pdGVyICk7XHJcblx0fSBlbHNlIHtcclxuXHRcdG9ialsgcHJvcGVydHkgXSA9IHZhbHVlO1xyXG5cdH1cclxuXHRyZXR1cm4gb2JqO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9ICRPS1M7IiwiLyoqXHJcbiAqIExvZ3MgYSB2YWx1ZSBhbmQgcmV0dXJucyBpdC5cclxuICogVXNlIGNvbnNvbGUubG9nIHRvIGxvZyB0aGUgc3VwcGxpZWQgdmFsdWUsIGNvbWJpbmVkIHdpdGggdGhlIHx8IG9wZXJhdG9yIHRvIHJldHVybiBpdC5cclxuICogQHBhcmFtIGRhdGFcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGEgPT4gY29uc29sZS5sb2coIGRhdGEgKSB8fCBkYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gKCkgPT4gKCB0eXBlb2YgT2JqZWN0WyAnY3JlYXRlJyBdICE9PSAndW5kZWZpbmVkJyApID8gT2JqZWN0LmNyZWF0ZSggbnVsbCApIDoge307IiwiLyoqXHJcbiAqIFJldHVybiB2YWx1ZSBmcm9tIFF1ZXJ5U3RyaW5nXHJcbiAqIEBwYXJhbSBuYW1lXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggbmFtZSApID0+IHtcclxuXHRuYW1lICAgICAgICA9IG5hbWUucmVwbGFjZSggL1tcXFtdLywgXCJcXFxcW1wiICkucmVwbGFjZSggL1tcXF1dLywgXCJcXFxcXVwiICk7XHJcblx0dmFyIHJlZ2V4ICAgPSBuZXcgUmVnRXhwKCBcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIiApLFxyXG5cdFx0cmVzdWx0cyA9IHJlZ2V4LmV4ZWMoIGxvY2F0aW9uLnNlYXJjaCApO1xyXG5cdHJldHVybiByZXN1bHRzID09IG51bGwgPyBcIlwiIDogZGVjb2RlVVJJQ29tcG9uZW50KCByZXN1bHRzWyAxIF0ucmVwbGFjZSggL1xcKy9nLCBcIiBcIiApICk7XHJcbn07IiwiaW1wb3J0IG1kNSBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNSc7XHJcblxyXG4vKipcclxuICogVW5pcXVlIHJhbmRvbSBtZDVcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gU3RyaW5nKCBtZDUoIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSApICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBwYWdlLlxyXG4gKiBVc2UgcGFnZVhPZmZzZXQgYW5kIHBhZ2VZT2Zmc2V0IGlmIHRoZXkgYXJlIGRlZmluZWQsIG90aGVyd2lzZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AuIFlvdSBjYW4gb21pdCBlbCB0byB1c2UgYSBkZWZhdWx0IHZhbHVlIG9mIHdpbmRvdy5cclxuICogQHBhcmFtIGVsXHJcbiAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGVsID0gd2luZG93ICkgPT4gKCB7XHJcblx0eDogZWwucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VYT2Zmc2V0IDogZWwuc2Nyb2xsTGVmdCxcclxuXHR5OiBlbC5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVlPZmZzZXQgOiBlbC5zY3JvbGxUb3BcclxufSApOyIsIi8qKlxyXG4gKiBTbW9vdGgtc2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlLlxyXG4gKiBHZXQgZGlzdGFuY2UgZnJvbSB0b3AgdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCBvciBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcC5cclxuICogU2Nyb2xsIGJ5IGEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcC4gVXNlIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB0byBhbmltYXRlIHRoZSBzY3JvbGxpbmcuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcclxuXHRjb25zdCBjID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRpZiggYyA+IDAgKSB7XHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY3JvbGxUb1RvcCApO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKCAwLCBjIC0gYyAvIDggKTtcclxuXHR9XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAoIGNhbGxiYWNrLCB0aXRsZSA9ICdUaW1lVGFrZW4nICkgPT4ge1xyXG5cdGNvbnNvbGUudGltZSggdGl0bGUgKTtcclxuXHRjb25zdCByID0gY2FsbGJhY2soKTtcclxuXHRjb25zb2xlLnRpbWVFbmQoIHRpdGxlICk7XHJcblx0cmV0dXJuIHI7XHJcbn07IiwiaW1wb3J0IGlzX2pxdWVyeSBmcm9tICcuL2lzX2pxdWVyeSc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBHaXZlbiBTdHJpbmcgaW50byBBIGpRdWVyeSBPYmplY3QuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+IHtcclxuXHRpZiggZmFsc2UgPT09IGlzX2pxdWVyeSggJGVsZW0gKSApIHtcclxuXHRcdHJldHVybiBqUXVlcnkoICRlbGVtICk7XHJcblx0fVxyXG5cdHJldHVybiAkZWxlbTtcclxufTsiLCJpbXBvcnQgaXNfb2JqZWN0X2xpa2UgZnJvbSAnLi9pc19vYmplY3RfbGlrZSc7XHJcbmltcG9ydCB2YWxpZGF0ZUpTRnVuYyBmcm9tICcuL3ZhbGlkYXRlU2luZ2xlSlNGdW5jJztcclxuaW1wb3J0IGVtcHR5IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9lbXB0eSc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IGlzX29iamVjdF9saWtlKCAkZGF0YSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGF0YSApIHtcclxuXHRcdFx0aWYoICFlbXB0eSggJGRhdGFbICRrZXkgXSApICkge1xyXG5cdFx0XHRcdCRkYXRhWyAka2V5IF0gPSB2YWxpZGF0ZUpTRnVuYyggJGRhdGFbICRrZXkgXSwgJGFyZ3Nfa2V5LCAkY29udGVudHNfa2V5ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRkYXRhO1xyXG59O1xyXG4iLCIvKipcclxuICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgY3VycmVudCBVUkwuXHJcbiAqIFVzZSBTdHJpbmcubWF0Y2goKSB3aXRoIGFuIGFwcHJvcHJpYXRlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBnZXQgYWxsIGtleS12YWx1ZSBwYWlycyxcclxuICogQXJyYXkucHJvdG90eXBlLnJlZHVjZSgpIHRvIG1hcCBhbmQgY29tYmluZSB0aGVtIGludG8gYSBzaW5nbGUgb2JqZWN0LlxyXG4gKiBQYXNzIGxvY2F0aW9uLnNlYXJjaCBhcyB0aGUgYXJndW1lbnQgdG8gYXBwbHkgdG8gdGhlIGN1cnJlbnQgdXJsLlxyXG4gKiBAcGFyYW0gdXJsXHJcbiAqIEByZXR1cm5zIHtUIHwge319XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHVybCA9PlxyXG5cdCggdXJsLm1hdGNoKCAvKFtePz0mXSspKD0oW14mXSopKS9nICkgfHwgW10gKS5yZWR1Y2UoXHJcblx0XHQoIGEsIHYgKSA9PiAoICggYVsgdi5zbGljZSggMCwgdi5pbmRleE9mKCAnPScgKSApIF0gPSB2LnNsaWNlKCB2LmluZGV4T2YoICc9JyApICsgMSApICksIGEgKSxcclxuXHRcdHt9XHJcblx0KTsiLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gXCJsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0XCI7XHJcbmltcG9ydCBpc191bmRlZmluZWQgZnJvbSBcIi4vaXNfdW5kZWZpbmVkXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICggJHN0cmluZywgJGFyZ3Nfa2V5ID0gJ2pzX2FyZ3MnLCAkY29udGVudHNfa2V5ID0gJ2pzX2NvbnRlbnRzJyApID0+IHtcclxuXHRpZiggdHJ1ZSA9PT0gaXNfb2JqZWN0KCAkc3RyaW5nICkgJiYgZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gKSB8fCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gKSApIHtcclxuXHRcdGxldCAkYXJncyAgICAgPSAoICRzdHJpbmdbICRhcmdzX2tleSBdID09PSBmYWxzZSApID8gZmFsc2UgOiAkc3RyaW5nWyAkYXJnc19rZXkgXTtcclxuXHRcdGxldCAkY29udGVudHMgPSAoICRzdHJpbmdbICRjb250ZW50c19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdO1xyXG5cdFx0aWYoICRhcmdzID09PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkY29udGVudHMgKTtcclxuXHRcdH0gZWxzZSBpZiggJGFyZ3MgIT09IGZhbHNlICYmICRjb250ZW50cyAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oICRhcmdzLCAkY29udGVudHMgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAkc3RyaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gJHN0cmluZztcclxufTtcclxuIiwiaW1wb3J0IGlzX29iamVjdCBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0JztcclxuXHJcbi8qKlxyXG4gKiBTZXRzIEpTIE9iamVjdCBJbnRvIFdpbmRvdyBBcmdzLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcGFyYW0gJHZhbHVlXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSwgJHZhbHVlICkgPT4ge1xyXG5cdGlmKCBpc19vYmplY3QoICRrZXkgKSApIHtcclxuXHRcdGZvciggbGV0ICRfayBpbiAka2V5ICkge1xyXG5cdFx0XHR3aW5kb3dbICRfayBdID0gJGtleVsgJF9rIF07XHJcblx0XHR9XHJcblx0fVxyXG5cdHdpbmRvd1sgJGtleSBdID0gJHZhbHVlO1xyXG59OyIsIi8qKlxyXG4gKiBDYXN0cyB0aGUgcHJvdmlkZWQgdmFsdWUgYXMgYW4gYXJyYXkgaWYgaXQncyBub3Qgb25lLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLmlzQXJyYXkoKSB0byBkZXRlcm1pbmUgaWYgdmFsIGlzIGFuIGFycmF5IGFuZCByZXR1cm4gaXQgYXMtaXMgb3IgZW5jYXBzdWxhdGVkIGluIGFuIGFycmF5IGFjY29yZGluZ2x5LlxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHsqW119XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiAoQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF0pOyIsIi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmltcG9ydCB7XG5cdGFycmF5X21lcmdlLFxuXHRjYWxsX3VzZXJfZnVuYyxcblx0Y2xvbmVfb2JqZWN0LFxuXHRpc19qcXVlcnksXG5cdGlzX251bGwsXG5cdGlzX29iamVjdF9saWtlLFxuXHRpc191bmRlZmluZWQsXG5cdGlzX3dpbmRvd19hcmcsXG5cdG1kNSxcblx0bWljcm90aW1lLFxuXHRyYW5kX21kNSxcblx0c3RydG9sb3dlcixcblx0dG9fanF1ZXJ5LFxuXHR0b19qc19mdW5jLFxufSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uIHtcblx0c3RhdGljIGpzX2Z1bmMoICRkYXRhICkge1xuXHRcdHJldHVybiB0b19qc19mdW5jKCAkZGF0YSwgJ3dwb25pb25fanNfYXJncycsICd3cG9uaW9uX2pzX2NvbnRlbnRzJyApO1xuXHR9XG5cblx0c3RhdGljIHJhbmRfaWQoKSB7XG5cdFx0cmV0dXJuIG1kNSggJ3dwb25pb25fcmFuZF8nICsgbWljcm90aW1lKCkgKyByYW5kX21kNSgpICk7XG5cdH1cblxuXHRzdGF0aWMgdmFsaWRfanNvbiggb2JqICkge1xuXHRcdHRyeSB7XG5cdFx0XHRKU09OLnBhcnNlKCBvYmogKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgQSBTaW5nbGUgQ2xhc3MgRm9yIHRoZSBHaXZlbiBFbGVtZW50LlxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0X2ZpZWxkX2NsYXNzKCAkdHlwZSApIHtcblx0XHQkdHlwZSA9IHN0cnRvbG93ZXIoICR0eXBlICk7XG5cblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93Lndwb25pb25fZmllbGRzWyAkdHlwZSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93Lndwb25pb25fZmllbGRzWyAkdHlwZSBdO1xuXHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93WyAnd3Bvbmlvbl8nICsgJHR5cGUgKyAnX2ZpZWxkJyBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93WyAnd3Bvbmlvbl8nICsgJHR5cGUgKyAnX2ZpZWxkJyBdO1xuXHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93WyAkdHlwZSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93WyAkdHlwZSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkSUQoICRlbGVtICkge1xuXHRcdHJldHVybiB0b19qcXVlcnkoICRlbGVtICkuYXR0ciggJ2RhdGEtd3Bvbmlvbi1qc2lkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgRmllbGQgSFRNTCBPYmplY3QgVXNpbmcgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJHdoZXJlX3RvX2ZpbmRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c3RhdGljIElEdG9FbGVtZW50KCAkZWxlbSwgJHdoZXJlX3RvX2ZpbmQgPSBmYWxzZSApIHtcblx0XHRsZXQgJGlkID0gV1BPbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdoZXJlX3RvX2ZpbmQgJiYgaXNfanF1ZXJ5KCAkd2hlcmVfdG9fZmluZCApICkge1xuXHRcdFx0cmV0dXJuICR3aGVyZV90b19maW5kLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIicgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGpRdWVyeSggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiXScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gdmFsdWUgaXMgYW4galF1ZXJ5IGluc3RhbmNlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNGaWVsZCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaXNfanF1ZXJ5KCAkZWxlbSApICkgPyAoIHRoaXMuZmllbGRJRCggJGVsZW0gKSApIDogZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBXaW5kb3cgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIHdpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0cmV0dXJuICggaXNfd2luZG93X2FyZyggJHZhcl9pZCApICkgPyB3aW5kb3dbICR2YXJfaWQgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyAmIFJldHVybnMgRmllbGQgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkQXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHQkdmFyX2lkID0gKCB0aGlzLmlzRmllbGQoICR2YXJfaWQgKSApID8gdGhpcy5maWVsZElEKCAkdmFyX2lkICkgOiAkdmFyX2lkO1xuXHRcdHJldHVybiAoICR2YXJfaWQgKSA/IGNsb25lX29iamVjdCggdGhpcy53aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCApICkgOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGNla3MgYW5kIHJldHVybnMgZ2xvYmFsIHRyYW5zbGF0aW9uIHN0cmluZy5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgdHh0KCAka2V5LCAkZGVmYXVsdCA9ICdzdHJpbmdfZGVmYXVsdF9ub3RfZm91bmQnICkge1xuXHRcdHJldHVybiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoIFdQT25pb24udGV4dFsgJGtleSBdICkgKSA/IFdQT25pb24udGV4dFsgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBMb2FkaW5nIFNjcmVlbi5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkaXNfc2hvd1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBsb2FkaW5nX3NjcmVlbiggJGVsZW0sICRpc19zaG93ID0gdHJ1ZSApIHtcblx0XHQkZWxlbSA9IHRvX2pxdWVyeSggJGVsZW0gKS5maW5kKCAnLnBhZ2UtbG9hZGVyJyApO1xuXHRcdGlmKCB0cnVlID09PSAkaXNfc2hvdyApIHtcblx0XHRcdHJldHVybiAkZWxlbS5mYWRlSW4oICdzbG93JyApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGVsZW0uZmFkZU91dCggJ3Nsb3cnICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBHbG9iYWwgRGVidWcgVmlldyBQT1BVUC5cblx0ICovXG5cdHN0YXRpYyBnbG9iYWxfZGVidWcoKSB7XG5cdFx0bGV0ICRoYW5kbGUgPSBqUXVlcnkoICdhLndwb25pb24tZ2xvYmFsLWRlYnVnLWhhbmRsZScgKSxcblx0XHRcdCRqc29uICAgPSB7fTtcblx0XHRpZiggV1BPbmlvbi5kZWJ1Z19pbmZvID09PSBudWxsICYmICRoYW5kbGUubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkZGVmaW5lZF92YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICk7XG5cdFx0XHRpZiggaXNfb2JqZWN0X2xpa2UoICRkZWZpbmVkX3ZhcnMgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVmaW5lZF92YXJzICkge1xuXHRcdFx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRcdCRqc29uWyAkZGVmaW5lZF92YXJzWyAka2V5IF0gXSA9IFdQT25pb24ud2luZG93QXJncyggJGRlZmluZWRfdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFdQT25pb24uZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCRoYW5kbGUub24oICdjbGljaycsICggKCBlICkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3dhbCgge1xuXHRcdFx0XHR0aXRsZTogV1BPbmlvbi50eHQoICdnbG9iYWxfanNvbl9vdXRwdXQnLCAnR2xvYmFsIFdQT25pb24gRGVidWcgRGF0YScgKSxcblx0XHRcdFx0aHRtbDogalF1ZXJ5KCAnI3dwb25pb25kZWJ1Z2luZm9wb3B1cCA+IGRpdicgKSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBXUE9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdHZXQgSlNPTiBPdXRwdXQnICksXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICgpID0+IHN3YWwuZW5hYmxlTG9hZGluZygpLFxuXHRcdFx0XHRvbk9wZW46ICgpID0+IHtcblx0XHRcdFx0XHRqUXVlcnkoICcjc3dhbDItY29udGVudCAjd3Bvbmlvbi1nbG9iYWwtZGVidWctY29udGVudCcgKS5qc29uVmlldyggV1BPbmlvbi5kZWJ1Z19pbmZvICk7XG5cdFx0XHRcdFx0c3dhbC5kaXNhYmxlTG9hZGluZygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBzd2FsKCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoIFdQT25pb24uZGVidWdfaW5mbyApICsgJzwvdGV4dGFyZWE+Jyxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgYW5kIFJldHJpdmVzIFZhbHVlcyBmcm9tICR3cG9uaW9uLnNldHRpbmdzXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBvcHRpb24oICRrZXksICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gV1BPbmlvbi5zZXR0aW5nc19hcmdzO1xuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gJGFyZ3NbICRrZXkgXTtcblx0XHR9XG5cdFx0cmV0dXJuICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBXUE9uaW9uIERlYnVnIGlzIGVuYWJsZWQuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzX2RlYnVnKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ2RlYnVnJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdhdGhlciBBbGwgRmllbGQgSlMgQ29kZXMuXG5cdCAqL1xuXHRzdGF0aWMgZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIFdQT25pb24uaXNfZGVidWcoKSAmJiBpc19udWxsKCBXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gKSApIHtcblx0XHRcdGxldCAkdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApLFxuXHRcdFx0XHQkanNvbiA9IHt9LFxuXHRcdFx0XHQkdXR4dCA9IFdQT25pb24udHh0KCAndW5tb2RpZmllZF9kZWJ1ZycgKSxcblx0XHRcdFx0JG10eHQgPSBXUE9uaW9uLnR4dCggJ21vZGlmaWVkX2RlYnVnJyApO1xuXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICR2YXJzICkge1xuXHRcdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHZhcnNbICRrZXkgXSApICkge1xuXHRcdFx0XHRcdGxldCAkZGF0YSAgICAgICAgICAgICAgICAgICAgICAgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICR2YXJzWyAka2V5IF0gKTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdICAgICAgICAgID0ge307XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJHV0eHQgXSA9ICRkYXRhLmRlYnVnX2luZm8gfHwgJGRhdGE7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJG10eHQgXSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gPSAkanNvbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3VzdG9tIEFqYXggV3JhcHBlciBGb3IgalF1ZXJ5LkFqYXgoKVxuXHQgKiBAcGFyYW0gJGFjdGlvblxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICogQHBhcmFtICRvblN1Y2Nlc3Ncblx0ICogQHBhcmFtICRvbkVycm9yXG5cdCAqIEBwYXJhbSAkb25BbHdheXNcblx0ICovXG5cdHN0YXRpYyBhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30sICRvblN1Y2Nlc3MgPSBmYWxzZSwgJG9uRXJyb3IgPSBmYWxzZSwgJG9uQWx3YXlzID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRkZWZhdWx0cyA9IHtcblx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdHVybDogV1BPbmlvbi5vcHRpb24oICdhamF4X3VybCcgKSxcblx0XHRcdFx0b25TdWNjZXNzOiBmYWxzZSxcblx0XHRcdFx0b25BbHdheXM6IGZhbHNlLFxuXHRcdFx0XHRvbkVycm9yOiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHQkYWpheCAgICAgPSBmYWxzZTtcblxuXHRcdGlmKCBpc19vYmplY3RfbGlrZSggJGFjdGlvbiApICkge1xuXHRcdFx0JGRhdGEgPSAkYWN0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZGVmYXVsdHMudXJsICs9ICcmJyArIFdQT25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApICsgJz0nICsgJGFjdGlvbjtcblx0XHR9XG5cblx0XHQkZGVmYXVsdHMgID0gYXJyYXlfbWVyZ2UoICRkZWZhdWx0cywgJGRhdGEgKTtcblx0XHQkb25TdWNjZXNzID0gKCBpc191bmRlZmluZWQoICRvblN1Y2Nlc3MgKSB8fCBmYWxzZSA9PT0gJG9uU3VjY2VzcyApID8gJGRlZmF1bHRzLm9uU3VjY2VzcyA6ICRvblN1Y2Nlc3M7XG5cdFx0JG9uQWx3YXlzICA9ICggaXNfdW5kZWZpbmVkKCAkb25FcnJvciApIHx8IGZhbHNlID09PSAkb25FcnJvciApID8gJGRlZmF1bHRzLm9uQWx3YXlzIDogJG9uQWx3YXlzO1xuXHRcdCRvbkVycm9yICAgPSAoIGlzX3VuZGVmaW5lZCggJG9uQWx3YXlzICkgfHwgZmFsc2UgPT09ICRvbkFsd2F5cyApID8gJGRlZmF1bHRzLm9uRXJyb3IgOiAkb25FcnJvcjtcblx0XHQkYWpheCAgICAgID0galF1ZXJ5LmFqYXgoICRkZWZhdWx0cyApO1xuXG5cblx0XHRpZiggJG9uU3VjY2VzcyApIHtcblx0XHRcdCRhamF4LmRvbmUoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvblN1Y2Nlc3MsIHJlcyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRvbkVycm9yICkge1xuXHRcdFx0JGFqYXguZmFpbCggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uRXJyb3IsIHJlcyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRvbkFsd2F5cyApIHtcblx0XHRcdCRhamF4LmFsd2F5cyggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uQWx3YXlzLCByZXMgKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGFqYXg7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBXUE9uaW9uIFRlbXBsYXRlIGZvciB1bmRlcnNjb3JlLlxuXHQgKiBAcGFyYW0gJGlkXG5cdCAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSk6ICp9XG5cdCAqL1xuXHRzdGF0aWMgdGVtcGxhdGUoICRpZCApIHtcblx0XHRsZXQgY29tcGlsZWQsXG5cdFx0XHRvcHRpb25zID0ge1xuXHRcdFx0XHRldmFsdWF0ZTogLzwjKFtcXHNcXFNdKz8pIz4vZyxcblx0XHRcdFx0aW50ZXJwb2xhdGU6IC9cXHtcXHtcXHsoW1xcc1xcU10rPylcXH1cXH1cXH0vZyxcblx0XHRcdFx0ZXNjYXBlOiAvXFx7XFx7KFteXFx9XSs/KVxcfVxcfSg/IVxcfSkvZyxcblx0XHRcdFx0dmFyaWFibGU6ICdkYXRhJ1xuXHRcdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiggZGF0YSApIHtcblx0XHRcdGNvbXBpbGVkID0gY29tcGlsZWQgfHwgXy50ZW1wbGF0ZSggJGlkLCBvcHRpb25zICk7XG5cdFx0XHRyZXR1cm4gY29tcGlsZWQoIGRhdGEgKTtcblx0XHR9O1xuXHR9XG5cblx0Ly9AdG9kbyBNaWdyYXRlIFBsdWdpbiBEZWJ1ZyBJbmZvLlxufVxuIiwiaW1wb3J0IHsgYXJyYXlfbWVyZ2UsIGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdHN0YXRpYyBhZGQoICRrZXksICR2YWx1ZSApIHtcblx0XHRpZiggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblxuXHRcdGlmKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9ICR2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSBhcnJheV9tZXJnZSggJHZhbHVlLCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXQoICRrZXksICRkZWZhdWx0ID0gZmFsc2UgKSB7XG5cdFx0aWYoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSA/ICRkZWZhdWx0IDogdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF07XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vaGVscGVycy9kZXBlbmRlbmN5JztcbmltcG9ydCB7IGFycmF5X21lcmdlIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRlbGVtZW50ID0gdW5kZWZpbmVkLCBwYXJhbSA9IHt9ICkge1xuXHRcdHRoaXMucGFyYW0gICAgICAgICA9IGFycmF5X21lcmdlKCB7IG5lc3RhYmxlOiBmYWxzZSwgcGFyZW50OiBmYWxzZSB9LCBwYXJhbSApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5iYXNlICAgICAgICAgID0ge307XG5cdFx0dGhpcy5iYXNlLiRlbCAgICAgID0gJGVsZW1lbnQ7XG5cdFx0dGhpcy5iYXNlLmluaXQgICAgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLnJ1bGVzZXQgPSBqUXVlcnkuZGVwcy5jcmVhdGVSdWxlc2V0KCk7XG5cdFx0XHR0aGlzLmJhc2UuZGVwUm9vdCgpO1xuXHRcdFx0alF1ZXJ5LmRlcHMuZW5hYmxlKCB0aGlzLmJhc2UuJGVsLCB0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRzaG93OiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdGVsLnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuXHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0aGlkZTogKCBlbCApID0+IHtcblx0XHRcdFx0XHRlbC5hZGRDbGFzcyggJ2hpZGRlbicgKTtcblx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLmFkZENsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxvZzogZmFsc2UsXG5cdFx0XHRcdGNoZWNrVGFyZ2V0czogZmFsc2UsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblx0XHR0aGlzLmJhc2UuaW5zdGFuY2UgPSBbXTtcblx0XHR0aGlzLmJhc2UuZGVwUm9vdCAgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmJhc2UuJGVsLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24taGFzLWRlcGVuZGVuY3knICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHRoaXMuYmFzZS5pbnN0YW5jZSA9IG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koIGpRdWVyeSggdGhpcyApLCAkdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0XHRcdG5lc3RhYmxlOiAkdGhpcy5wYXJhbS5uZXN0YWJsZSxcblx0XHRcdFx0XHRcdHBhcmVudDogKCB0cnVlID09PSAkdGhpcy5wYXJhbS5uZXN0YWJsZSApID8gJHRoaXMuYmFzZS4kZWwgOiAkdGhpcy5wYXJhbS5wYXJlbnQsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdHRoaXMuYmFzZS5pbml0KCk7XG5cdH1cbn1cbiIsIi8vaW1wb3J0IHsgYXJyYXlfbWVyZ2UsIGVtcHR5LCBpc19jYWxsYWJsZSwgaXNfanF1ZXJ5LCBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4Jztcbi8vY29uc3QgdG9fanF1ZXJ5ICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkudG9fanF1ZXJ5O1xuLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGU6dHJ1ZSAqL1xuXG5jb25zdCBhcnJheV9tZXJnZSAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5hcnJheV9tZXJnZTtcbmNvbnN0IGVtcHR5ICAgICAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmVtcHR5O1xuY29uc3QgaXNfY2FsbGFibGUgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfY2FsbGFibGU7XG5jb25zdCBpc19qcXVlcnkgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5pc19qcXVlcnk7XG5jb25zdCBpc191bmRlZmluZWQgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5pc191bmRlZmluZWQ7XG5cbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICR3cG9uaW9uX2RlYnVnIGZyb20gJy4vZGVidWcnO1xuaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4vbW9kdWxlJztcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRpb24gZnJvbSAnLi4vY29yZS92YWxpZGF0aW9uJztcblxuLyoqXG4gKiBXUE9uaW9uIEZpZWxkIEFic3RyYWN0IENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQsICRjb25maWcgPSBudWxsICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250ZXh0ICk7XG5cdFx0dGhpcy5zZXRfYXJncyggZmFsc2UgKTtcblx0XHR0aGlzLmZpZWxkX2RlYnVnKCk7XG5cdFx0dGhpcy5jb25maWcgPSAkY29uZmlnO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHRcdHRoaXMuanNfZXJyb3JfaGFuZGxlcigpO1xuXHRcdHRoaXMuanNfdmFsaWRhdG9yKCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0fVxuXG5cdGpzX2Vycm9yX2hhbmRsZXIoIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudC5vbiggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgJz4gLndwb25pb24tZmllbGRzZXQgOmlucHV0JywgKCBlLCBkYXRhICkgPT4gdGhpcy5qc19lcnJvciggZGF0YSApICk7XG5cdH1cblxuXHRqc192YWxpZGF0b3IoKSB7XG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApICkge1xuXHRcdFx0XHR0aGlzLm1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRtYXliZV9qc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIFdQT25pb25fVmFsaWRhdGlvbi5nZXRfZm9ybSgpICkge1xuXHRcdFx0dGhpcy5qc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKTtcblx0XHR9XG5cdH1cblxuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0JGVsZW0uZmluZCggJzppbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRoYW5kbGVfYXJncyggJGFyZywgJGtleSA9IGZhbHNlICkge1xuXHRcdGxldCAkYXJncyAgID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApLFxuXHRcdFx0JGV4aXN0cyA9ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHQkZXhpc3RzICAgICA9IGFycmF5X21lcmdlKCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0sICRleGlzdHMgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGtleSApIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdID0gJGFyZ3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdWyAka2V5IF0gPSAkYXJncztcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksICRleGlzdHMgKTtcblx0XHRyZXR1cm4gJGFyZ3M7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggZmFsc2UgIT09ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0ICRpbmZvID0gdGhpcy5vcHRpb24oICdkZWJ1Z19pbmZvJyApLFxuXHRcdFx0JGFyciAgPSB7fTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkaW5mbyApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSBlbXB0eSggJGluZm8gKSApIHtcblx0XHRcdFx0JGFyclsgJ1JhdyBGaWVsZCBBcmdzJyBdID0gJGluZm9bICdSYXcgRmllbGQgQXJncycgXTtcblx0XHRcdFx0JGFyci5GaWVsZCAgICAgICAgICAgICAgID0gJGluZm9bICdGaWVsZCBBcmdzJyBdO1xuXHRcdFx0XHQkYXJyWyAnRmllbGQgRXJyb3JzJyBdICAgPSAkaW5mb1sgJ0ZpZWxkIEVycm9ycycgXTtcblx0XHRcdFx0JGFyclsgJ0ZpZWxkIFZhbHVlJyBdICAgID0gJGluZm9bICdGaWVsZCBWYWx1ZScgXTtcblx0XHRcdFx0JGFyclsgJ1BsdWdpbiBJRCcgXSAgICAgID0gJGluZm9bICdQbHVnaW4gSUQnIF07XG5cdFx0XHRcdCRhcnIuTW9kdWxlICAgICAgICAgICAgICA9ICRpbmZvLk1vZHVsZTtcblx0XHRcdFx0JGFyci5VbmlxdWUgICAgICAgICAgICAgID0gJGluZm8uVW5pcXVlO1xuXHRcdFx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiAkYXJyLCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgJGZvdW5kID0gZmFsc2U7XG5cdFx0aWYoICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0bGV0ICRJRCAgID0gdGhpcy5pZCgpLFxuXHRcdFx0XHQkZWxlbSA9IGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9JyArICRJRCArICddJyApO1xuXHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdFx0JGZvdW5kID0gJGVsZW07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRmb3VuZCA9IHRoaXMuZWxlbWVudDtcblx0XHR9XG5cblx0XHRpZiggZmFsc2UgIT09ICRmb3VuZCApIHtcblx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApXG5cdFx0XHRcdCAgLmF0dHIoICd0aXRsZScsICR3cG9uaW9uLnR4dCggJ2NsaWNrX3RvX3ZpZXdfZGVidWdfaW5mbycsICdDbGljayBUbyBWaWV3IEZpZWxkIERlYnVnIEluZm8nICkgKVxuXHRcdFx0XHQgIC50aXBweSgge1xuXHRcdFx0XHRcdCAgYXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0ICBhcnJvd1R5cGU6ICdyb3VuZCcsXG5cdFx0XHRcdFx0ICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHRcdCAgdGhlbWU6ICdsaWdodCcsXG5cdFx0XHRcdFx0ICBhbmltYXRpb246ICdzY2FsZSdcblx0XHRcdFx0ICB9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZCAgICAgICAgICA9ICR0aGlzLmlkKCkgKyAnZGVidWdJTkZPJyxcblx0XHRcdFx0XHQkbm90aWNlX3R4dCA9ICc8cCBjbGFzcz1cXCd3cG9uaW9uLWZpZWxkLWRlYnVnLW5vdGljZVxcJz4nICsgJHdwb25pb24ub3B0aW9uKCAnZGVidWdfbm90aWNlJyApICsgJzwvcD4nLFxuXHRcdFx0XHRcdCRlbGVtICAgICAgID0galF1ZXJ5KCAnPGRpdiBpZD1cIicgKyAkZCArICdcIiBjbGFzcz1cIndwb25pb24tZmllbGQtZGVidWctcG9wdXBcIiA+PGRpdiBpZD1cIicgKyAkZCArICdcIiA+PC9kaXY+JyArICRub3RpY2VfdHh0ICsgJzwvZGl2PicgKTtcblx0XHRcdFx0bGV0ICRkYXRhICAgICAgID0gJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICk7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRodG1sOiAkZWxlbSxcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogJHdwb25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0FzIEpTT04nICksXG5cdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRvbk9wZW46ICgpID0+IGpRdWVyeSggJyNzd2FsMi1jb250ZW50ID4gZGl2ID4gIycgKyAkZCApLmpzb25WaWV3KCAkZGF0YSApXG5cdFx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICkgKSArICc8L3RleHRhcmVhPidcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0IC53cG9uaW9uLWZpZWxkLWRlYnVnLWNvZGUtZ2VuJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRodG1sOiB0aGlzLm9wdGlvbiggJ2RlYnVnX2ZpZWxkX2NvZGUnICksXG5cdFx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdGhlaWdodEF1dG86IGZhbHNlLFxuXHRcdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0b3B0aW9ucygpIHtcblx0XHRpZiggdGhpcy5fYXJncyA9PT0gZmFsc2UgKSB7XG5cdFx0XHR0aGlzLl9hcmdzID0gJHdwb25pb24ud2luZG93QXJncyggdGhpcy5pZCgpICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9hcmdzO1xuXHR9XG5cblx0b3B0aW9uKCAka2V5ID0gJycsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gdGhpcy5vcHRpb25zKCk7XG5cdFx0cmV0dXJuICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkgPyAkYXJnc1sgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHRpZCgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICk7XG5cdH1cblxuXHRtb2R1bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnbW9kdWxlJywgZmFsc2UgKTtcblx0fVxuXG5cdHBsdWdpbl9pZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdwbHVnaW5faWQnLCBmYWxzZSApO1xuXHR9XG5cblx0YWpheCggJGFjdGlvbiA9ICcnLCAkZGF0YSA9IHt9ICkge1xuXHRcdGxldCAkYWpheF9rZXkgICAgICAgICA9ICR3cG9uaW9uLm9wdGlvbiggJ2FqYXhfYWN0aW9uX2tleScgKTtcblx0XHRsZXQgJGRlZmF1bHQgICAgICAgICAgPSB7XG5cdFx0XHRwbHVnaW5faWQ6IHRoaXMucGx1Z2luX2lkKCksXG5cdFx0XHRtb2R1bGU6IHRoaXMubW9kdWxlKCksXG5cdFx0fTtcblx0XHQkZGVmYXVsdFsgJGFqYXhfa2V5IF0gPSAkYWN0aW9uO1xuXHRcdCRkYXRhLmRhdGEgICAgICAgICAgICA9ICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGRhdGEuZGF0YSApICkgPyBhcnJheV9tZXJnZSggJGRlZmF1bHQsICRkYXRhLmRhdGEgKSA6ICRkZWZhdWx0O1xuXG5cdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICRkYXRhICk7XG5cdH1cblxuXHRpbml0X2ZpZWxkKCAkZWxlbSwgJHR5cGUgKSB7XG5cdFx0bGV0ICRfaW5zdGFuY2VzID0gW107XG5cdFx0aWYoICFpc19qcXVlcnkoICRlbGVtICkgKSB7XG5cdFx0XHQkZWxlbSA9IHRoaXMuZWxlbWVudC5maW5kKCAkZWxlbSApO1xuXHRcdH1cblx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXHRcdCRlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRjbGFzcyA9ICR3cG9uaW9uLmdldF9maWVsZF9jbGFzcyggJHR5cGUgKTtcblx0XHRcdGlmKCBmYWxzZSAhPT0gJGNsYXNzICkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmKCBpc19jYWxsYWJsZSggJGNsYXNzICkgKSB7XG5cdFx0XHRcdFx0XHQkX2luc3RhbmNlcy5wdXNoKCBuZXcgJGNsYXNzKCBqUXVlcnkoIHRoaXMgKSApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBqUXVlcnkoIHRoaXMgKSApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCAnRXJyb3I6ICcgKyBlICsgJyB8IEZvciA6ICcgKyAkdHlwZSApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRyZWxvYWQoKSB7XG5cdFx0d3AuaG9va3MuYWRkQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX3JlbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWljb25fcGlja2VyJywgJ2ljb25fcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZm9udF9waWNrZXInLCAnZm9udF9zZWxlY3RvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWFjY29yZGlvbicsICdhY2NvcmRpb24nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1ncm91cCcsICdncm91cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHQ6bm90KC53cG9uaW9uLWlucHV0bWFzayknLCAndGV4dCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHRhcmVhJywgJ3RleHRhcmVhJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja2dyb3VuZCcsICdiYWNrZ3JvdW5kJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2Vfc2VsZWN0JywgJ2ltYWdlX3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNlbGVjdCcsICdzZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zd2l0Y2hlcicsICdzd2l0Y2hlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BhbGV0dGUnLCAnY29sb3JfcGFsZXR0ZScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2VkaXRvcicsICd3cF9lZGl0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1maWVsZHNldCcsICdmaWVsZHNldCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICdpbnB1dFtkYXRhLXdwb25pb24taW5wdXRtYXNrXScsICdpbnB1dG1hc2snICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC13cF9saW5rJywgJ3dwX2xpbmtzJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2hlY2tib3gnLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1yYWRpbycsICdjaGVja2JveF9yYWRpbycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWtleV92YWx1ZScsICdrZXl2YWx1ZV9wYWlyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGlja2VyJywgJ2NvbG9yX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWRhdGVfcGlja2VyJywgJ2RhdGVfcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ2FsbGVyeScsICdnYWxsZXJ5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdXBsb2FkJywgJ3VwbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlJywgJ2ltYWdlX3VwbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRhYicsICdqcXVlcnlfdGFiJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWZpZWxkLXRvb2x0aXAnLCAnZmllbGRfdG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdvb2dsZV9tYXBzJywgJ2dvb2dsZV9tYXBzJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWhlbHAnLCAnZmllbGRfdG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi13cmFwLXRvb2x0aXAnLCAnZmllbGRfdG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNsb25lJywgJ2Nsb25lX2VsZW1lbnQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdDInLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuY2hvc2VuJywgJ2Nob3NlbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuc2VsZWN0aXplJywgJ3NlbGVjdGl6ZScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNvcnRlcicsICdzb3J0ZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10eXBvZ3JhcGh5JywgJ3R5cG9ncmFwaHknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1vZW1iZWQnLCAnb2VtYmVkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaGVhZGluZycsICdoZWFkaW5nJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3ViaGVhZGluZycsICdzdWJoZWFkaW5nJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29udGVudCcsICdjb250ZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtamFtYm9fY29udGVudCcsICdqYW1ib19jb250ZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwJywgJ2JhY2t1cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW5vdGljZScsICdub3RpY2UnICk7XG5cblx0XHR3cC5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRfYXJncyggJGFyZ3MgKSB7XG5cdFx0dGhpcy5fYXJncyA9ICRhcmdzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggJGVsZW0gKSB7XG5cdFx0bGV0ICRJRCA9ICR3cG9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0cmV0dXJuIGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJElEICsgJ1wiXScgKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCApIHtcblx0XHRpZiggISRzZWxlY3Rvci5qUXVlcnkgKSB7XG5cdFx0XHQkc2VsZWN0b3IgPSBqUXVlcnkoICRzZWxlY3RvciApO1xuXHRcdH1cblx0XHR0aGlzLnNldF9lbGVtZW50KCAkc2VsZWN0b3IgKTtcblx0XHR0aGlzLnNldF9jb250eHQoICRjb250ZXh0ICk7XG5cdFx0dGhpcy5tb2R1bGVfaW5pdCgpO1xuXHR9XG5cblx0bW9kdWxlX2luaXQoKSB7XG5cdH1cblxuXHRzZXRfZWxlbWVudCggJGVsZW0gKSB7XG5cdFx0aWYoICEkZWxlbS5qUXVlcnkgKSB7XG5cdFx0XHQkZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtID0gJGVsZW07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRfY29udHh0KCAkY29udHh0ICkge1xuXHRcdHRoaXMuY29udGV4dCA9ICRjb250eHQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgaG9vaygpIHtcblx0XHRyZXR1cm4gd2luZG93LndwLmhvb2tzO1xuXHR9XG5cblx0Z2V0IGVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbTtcblx0fVxuXG5cdGdldCBjb250eHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dDtcblx0fVxuXG59XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uX1ZhbGlkYXRvciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZm9ybSAgPSBXUE9uaW9uX1ZhbGlkYXRvci5nZXRfZm9ybSgpO1xuXHRcdHRoaXMucnVsZXMgPSB7XG5cdFx0XHRpbnZhbGlkSGFuZGxlcjogKCkgPT4ge1xuXHRcdFx0XHRqUXVlcnkoICcjcHVibGlzaCcgKS5yZW1vdmVDbGFzcyggJ2J1dHRvbi1wcmltYXJ5LWRpc2FibGVkJyApO1xuXHRcdFx0XHRqUXVlcnkoICcjYWpheC1sb2FkaW5nJyApLmF0dHIoICdzdHlsZScsICcnICk7XG5cdFx0XHRcdHRoaXMuZm9ybS5zaWJsaW5ncyggJyNtZXNzYWdlJyApLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmZvcm0uYmVmb3JlKCAnPGRpdiBpZD1cIm1lc3NhZ2VcIiBjbGFzcz1cImVycm9yXCI+PHA+JyArICR3cG9uaW9uLnR4dCggJ3ZhbGlkYXRpb25fc3VtbWFyeScgKSArICc8L3A+PC9kaXY+JyApO1xuXHRcdFx0fSxcblx0XHRcdGlnbm9yZTogJy53cG9uaW9uLWRlcGVuZGVudCwud3Bvbmlvbi12YWxpZGF0aW9uLWlnbm9yZScsXG5cdFx0XHRlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oIGVycm9yLCBlbGVtZW50ICkge1xuXHRcdFx0XHRlbGVtZW50LnRyaWdnZXIoICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsIHsgZXJyb3IsIGVsZW1lbnQgfSApO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yQ2xhc3M6ICd3cG9uaW9uLWVycm9yJyxcblx0XHRcdGVycm9yRWxlbWVudDogJ3AnXG5cdFx0fTtcblx0XHRpZiggdGhpcy5mb3JtICkge1xuXHRcdFx0dGhpcy5mb3JtLnZhbGlkYXRlKCB0aGlzLnJ1bGVzICk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGdldF9mb3JtKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QnICkubGVuZ3RoID4gMCAmJiBqUXVlcnkoICdpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjb3JpZ2luYWxfcHVibGlzaCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0Ly9yZXR1cm4galF1ZXJ5KCAnZm9ybSNwb3N0JyApO1xuXHRcdH1cblx0XHRyZXR1cm4gKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkgPyBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKSA6IGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oIHtcblx0XHRcdFx0aGVhZGVyOiAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0YW5pbWF0ZTogMTUwLFxuXHRcdFx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxuXHRcdFx0XHRhY3RpdmU6IGpRdWVyeSggdGhpcyApLmhhc0NsYXNzKCAnaXNfb3BlbicgKSxcblx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHQnaGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctcmlnaHQnLFxuXHRcdFx0XHRcdCdhY3RpdmVIZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1kb3duJ1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLnRvb2x0aXAoKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1cImZpbGVcIl0nICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLmhhbmRsZV9iYWNrdXBfaW1wb3J0KCBlLmN1cnJlbnRUYXJnZXQgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2EuZG93bmxvYWRfYmFja3VwJyApLm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGZpbGUgPSB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApO1xuXHRcdFx0JGZpbGUgICAgID0gJGZpbGUgKyAnLScgKyB0aGlzLm1vZHVsZSgpO1xuXHRcdFx0bGV0IGRhdGUgID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBzdHIgICA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArICggZGF0ZS5nZXRNb250aCgpICsgMSApICsgJy0nICsgZGF0ZS5nZXREYXRlKCkgKyAnLScgKyBkYXRlLmdldEhvdXJzKCkgKyBkYXRlLmdldE1pbnV0ZXMoKSArIGRhdGUuZ2V0U2Vjb25kcygpO1xuXHRcdFx0JGZpbGUgICAgID0gJGZpbGUgKyAnLScgKyBzdHI7XG5cdFx0XHR0aGlzLmZvcmNlX2Rvd25sb2FkKCBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfdGV4dGFyZWEgdGV4dGFyZWEnICkuaHRtbCgpICksICRmaWxlICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdhLm5ld19iYWNrdXAgJyApLm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHRcdHRoaXMuYWpheCggJ25ldy1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoIHRydWUgKTtcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cycgKS5odG1sKCBlLmRhdGEgKTtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25BbHdheXM6ICggZSApID0+IHRoaXMudW5ibG9ja19mb3JtKCksXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLmRlbGV0ZV9iYWNrdXAnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHRcdGxldCAkaW5zID0galF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAuZGVsZXRlX2JhY2t1cCcgKS50aXBweV9nZXQoKTtcblx0XHRcdGlmKCAkaW5zLmluc3RhbmNlc1sgMCBdICkge1xuXHRcdFx0XHQkaW5zLmluc3RhbmNlc1sgMCBdLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWpheCggJ2RlbGV0ZS1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXG5cdFx0XHRcdFx0YmFja3VwX2lkOiBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCB0cnVlICk7XG5cdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMnICkuaHRtbCggZS5kYXRhICk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy5yZXN0b3JlX2JhY2t1cCcsICggZSApID0+IHtcblx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkuYXR0ciggJ2RhdGEtYmFja3VwaWQnICkgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oICdibHVyJywgJy5yZXN0b3JlX3RleHRhcmVhIHRleHRhcmVhJywgKCBlICkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSApICk7XG5cdFx0XHRcdGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCAnJyApLmh0bWwoICcnICk7XG5cdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIHRoaXMub3B0aW9uKCAnaW52YWxpZF9mb3JtYXQnICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRzd2FsX2Vycm9yKCBtc2cgKSB7XG5cdFx0c3dhbCgge1xuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdHRpdGxlOiBtc2dcblx0XHR9ICk7XG5cdH1cblxuXHR0b29sdGlwKCByZW1vdmUgPSBmYWxzZSApIHtcblx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXHRcdGlmKCB0cnVlID09PSByZW1vdmUgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMgbGknICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCAkZWxlbSA9IGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGEnIClbIDAgXTtcblx0XHRcdFx0JGVsZW0uX3RpcHB5LmRlc3Ryb3koKTtcblx0XHRcdH0gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzIGxpJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkdGhpcy5zaG93X3Rvb2x0aXAoIGpRdWVyeSggdGhpcyApLmZpbmQoICc+YScgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdGJsb2NrX2Zvcm0oKSB7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLmZpbmQoICdidXR0b24nICkuYXR0ciggJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyApO1xuXHR9XG5cblx0dW5ibG9ja19mb3JtKCkge1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLnJlbW92ZUF0dHIoICdkaXNhYmxlZCcgKTtcblx0fVxuXG5cdGZvcmNlX2Rvd25sb2FkKCBleHBvcnRPYmosIGV4cG9ydE5hbWUgKSB7XG5cdFx0dmFyIGRhdGFTdHIgICAgICAgICAgICA9IFwiZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCxcIiArIGVuY29kZVVSSUNvbXBvbmVudCggSlNPTi5zdHJpbmdpZnkoIGV4cG9ydE9iaiApICk7XG5cdFx0dmFyIGRvd25sb2FkQW5jaG9yTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdhJyApO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoICdocmVmJywgZGF0YVN0ciApO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoICdkb3dubG9hZCcsIGV4cG9ydE5hbWUgKyAnLmpzb24nICk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZG93bmxvYWRBbmNob3JOb2RlICk7IC8vIHJlcXVpcmVkIGZvciBmaXJlZm94XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLmNsaWNrKCk7XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnJlbW92ZSgpO1xuXHR9XG5cblx0cmVzdG9yZV9iYWNrdXAoIGJhY2t1cF9pZCApIHtcblx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHR0aGlzLmFqYXgoICdyZXN0b3JlLW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcblx0XHRcdFx0YmFja3VwX2lkOiBiYWNrdXBfaWQsXG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGUuZGF0YSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdH0gKTtcblx0fVxuXG5cdGhhbmRsZV9iYWNrdXBfaW1wb3J0KCAkZWxlbSApIHtcblx0XHRpZiggJGVsZW0uZmlsZXMgJiYgJGVsZW0uZmlsZXNbIDAgXSApIHtcblx0XHRcdGxldCAkZmlsZSA9ICRlbGVtLmZpbGVzWyAwIF07XG5cblx0XHRcdGlmKCAkZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vanNvbicgKSB7XG5cdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggdGhpcy5vcHRpb24oICdpbnZhbGlkX2Zvcm1hdCcgKSApO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRsZXQgcmVhZGVyICAgID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9ICggZSApID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlc3RvcmVfYmFja3VwKCBKU09OLnBhcnNlKCBlLnRhcmdldC5yZXN1bHQgKSApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dCggJGZpbGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzaG93X3Rvb2x0aXAoICRlbGVtICkge1xuXHRcdGxldCAkYmFja3VwaWQgPSAkZWxlbS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKTtcblx0XHR0aXBweSggJGVsZW1bIDAgXSwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRhcHBlbmRUbzogdGhpcy5lbGVtZW50WyAwIF0sXG5cdFx0XHRhcnJvd1R5cGU6ICdyb3VuZCcsXG5cdFx0XHRjb250ZW50OiAnPGJ1dHRvbiBkYXRhLWJhY2t1cGlkPVwiJyArICRiYWNrdXBpZCArICdcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZXN0b3JlX2JhY2t1cCBidXR0b24gYnV0dG9uLXNlY29uZGFyeSBidXR0b24tc21hbGxcIj48aSBjbGFzcz1cImRhc2hpY29ucy1pbWFnZS1yb3RhdGUgZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4gfCA8YnV0dG9uIGRhdGEtYmFja3VwaWQ9XCInICsgJGJhY2t1cGlkICsgJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZV9iYWNrdXAgYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNtYWxsXCI+PGkgY2xhc3M9XCJkYXNoaWNvbnMtdHJhc2ggZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4nLFxuXHRcdFx0aW50ZXJhY3RpdmU6IHRydWUsXG5cdFx0XHR0aGVtZTogJ3RyYW5zbHVjZW50Jyxcblx0XHRcdG9uU2hvd246ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAuZGVsZXRlX2JhY2t1cCcgKS50aXBweSgge1xuXHRcdFx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdGFycm93VHlwZTogJ3NraW5ueScsXG5cdFx0XHRcdFx0Y29udGVudDogJHdwb25pb24udHh0KCAnZGVsZXRlJyApLFxuXHRcdFx0XHRcdHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZTogZmFsc2UsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLnJlc3RvcmVfYmFja3VwJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0YXJyb3dUeXBlOiAnc2tpbm55Jyxcblx0XHRcdFx0XHRjb250ZW50OiAkd3Bvbmlvbi50eHQoICdyZXN0b3JlJyApLFxuXHRcdFx0XHRcdHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcblx0XHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxuXHRcdH0gKTtcblx0fVxuXG5cdGdldF9leHRyYV92YWx1ZSgpIHtcblx0XHRpZiggalF1ZXJ5KCAnZm9ybSNwb3N0IGlucHV0I3Bvc3RfSUQnICkubGVuZ3RoID09PSAxICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jcG9zdCBpbnB1dCNwb3N0X0lEJyApLnZhbCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0Lndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGlucHV0cyA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dJyApLm9uKCAnY2xpY2snLCAoKSA9PiAkaW5wdXRzLnJlbW92ZUF0dHIoICduYW1lJyApICk7XG5cblx0XHRcdCRpbnB1dHMub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5maW5kKCAnaW5wdXRbdHlwZT1yYWRpb10saW5wdXRbdHlwZT1jaGVja2JveF0nICkucHJvcCggJ2NoZWNrZWQnLCB0cnVlICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5jaG9zZW4oIHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnY2hvc2VuJywge30gKSApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbi8qIGdsb2JhbCBzZXRUaW1lb3V0OnRydWUgKi9cbi8qIGdsb2JhbCB3cG9uaW9uX2ZpZWxkOnRydWUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgICAgICAgID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjbG9uZScsIHt9ICkgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGNsb25lX3dyYXAgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tY2xvbmUtd3JhcCcgKSxcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtYWRkXScgKSxcblx0XHRcdC8vJHJlbW92ZV9idG4gPSAkY2xvbmVfd3JhcC5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1yZW1vdmVdJyApLFxuXHRcdFx0JGxpbWl0ICAgICAgPSAoICRhcmcubGltaXQgIT09IHVuZGVmaW5lZCApID8gJGFyZy5saW1pdCA6IGZhbHNlLFxuXHRcdFx0Ly8kaXNfdG9hc3QgICA9ICggJGFyZy50b2FzdF9lcnJvciAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLnRvYXN0X2Vycm9yIDogdHJ1ZSxcblx0XHRcdCRlcm9yX21zZyAgID0gJGFyZy5lcnJvcl9tc2csXG5cdFx0XHQkc29ydCAgICAgICA9ICggJGFyZy5zb3J0ICE9PSBmYWxzZSApID8ge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tZmllbGQtY2xvbmUtc29ydGVyJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWNsb25lci1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKSxcblx0XHRcdFx0c3RvcDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKSxcblx0XHRcdH0gOiBmYWxzZTtcblxuXHRcdCRjbG9uZV93cmFwLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46ICRhZGRfYnRuLFxuXHRcdFx0bGltaXQ6ICRsaW1pdCxcblx0XHRcdGNsb25lX2VsZW06ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRyZW1vdmVfYnRuOiAnYS53cG9uaW9uLXJlbW92ZScsXG5cdFx0XHR0ZW1wbGF0ZTogJHRoaXMub3B0aW9uKCAnY2xvbmVfdGVtcGxhdGUnICksXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlICkgPT4gd3Bvbmlvbl9maWVsZCggJGUuZmluZCggJz4gZGl2Lndwb25pb24tZmllbGQtY2xvbmU6bGFzdC1jaGlsZCcgKSApLnJlbG9hZCgpLFxuXHRcdFx0c29ydGFibGU6ICRzb3J0LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvKmlmKCAkaXNfdG9hc3QgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0Ly8gQHRvZG8gQWRkIFRvYXN0IE9wdGlvbi5cblx0XHRcdFx0XHQvISp3cG8udG9zdCgge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJlcnJvclwiLFxuXHRcdFx0XHRcdFx0dGl0bGU6ICRlcm9yX21zZyxcblx0XHRcdFx0XHR9ICk7KiEvXG5cdFx0XHRcdH0gZWxzZSB7Ki9cblx0XHRcdFx0bGV0ICRodG1sID0galF1ZXJ5KCAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj4nICsgJGVyb3JfbXNnICsgJzwvZGl2PicgKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLnByZXBlbmQoICRodG1sICk7XG5cdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuZmFkZUluKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJF9fRSA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+ICRfX0UuZmFkZU91dCggJ3Nsb3cnLCAoKSA9PiAkX19FLnJlbW92ZSgpICksIDEwMDAgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQvL31cblx0XHRcdH0sXG5cdFx0XHRzaG93X2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLnNob3csXG5cdFx0XHRoaWRlX2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLmhpZGUsXG5cdFx0fSApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS53cENvbG9yUGlja2VyKCk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRzZXR0aW5ncyA9IHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnICkgKSxcblx0XHRcdCR2aWV3O1xuXG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRzZXR0aW5ncy50aGVtZSApICkge1xuXHRcdFx0JHZpZXcgPSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0XHRkZWxldGUgJHNldHRpbmdzLnRoZW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdmlldyA9ICdkZWZhdWx0Jztcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdC5hcHBlbmQoIGpRdWVyeSggJzxkaXYgY2xhc3M9XCJ3cG9uaW9uLWRhdGVwaWNrZXItJyArICR2aWV3ICsgJ1wiIGlkPVwiJyArIHRoaXMuaWQoKSArICdcIj48L2Rpdj4nICkgKTtcblx0XHR9XG5cblx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWRhdGVwaWNrZXItcmFuZ2UnICkgKSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHRpZiggJHNldHRpbmdzLnBsdWdpbnMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JHNldHRpbmdzLnBsdWdpbnMgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0JHNldHRpbmdzLnBsdWdpbnMucHVzaCggbmV3IHJhbmdlUGx1Z2luKCB7IGlucHV0OiAkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItdG8tZGF0ZV0nIClbIDAgXSB9ICkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci1mcm9tLWRhdGVdJyApLmZsYXRwaWNrciggJHNldHRpbmdzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzZXR0aW5ncy5hcHBlbmRUbyA9IGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpIClbIDAgXTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCcgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0Z2V0IHdlYnNhZmUoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX3dlYnNhZmVfZm9udHMnICk7XG5cdH1cblxuXHRnZXQgZ29vZ2xlX2ZvbnRzKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9nZm9udHMnICk7XG5cdH1cblxuXHRidWlsZF9vcHRpb25zKCBkYXRhICkge1xuXHRcdGxldCAkcmV0dXJuID0gJyc7XG5cdFx0Zm9yKCBsZXQgJF9kIGluIGRhdGEgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggZGF0YVsgJF9kIF0gKSApIHtcblx0XHRcdFx0JHJldHVybiArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7JF9kfVwiPiR7ZGF0YVsgJF9kIF19PC9vcHRpb24+YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICRyZXR1cm47XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tZm9udC1zZWxlY3RvcicgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHtcblx0XHRcdGxldCAkdmFsICA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCksXG5cdFx0XHRcdCRodG1sID0gbnVsbDtcblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHRoaXMud2Vic2FmZS5mb250cyBbICR2YWwgXSApICkge1xuXHRcdFx0XHQkaHRtbCA9IHRoaXMuYnVpbGRfb3B0aW9ucyggdGhpcy53ZWJzYWZlLnZhcmlhbnRzICk7XG5cdFx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKTtcblx0XHRcdH1cblx0XHRcdGxldCAkdmFyaWFudCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS5odG1sKCAkaHRtbCApO1xuXG5cdFx0XHRpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdjaG9zZW4nICkgKSB7XG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaG9zZW46dXBkYXRlZCcgKTtcblx0XHRcdH0gZWxzZSBpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdzZWxlY3QyJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkaHRtbF90ZW1wID0gJHRoaXMub3B0aW9uKCAnaHRtbF90ZW1wbGF0ZScgKSxcblx0XHRcdCRpbnB1dCAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXG5cdFx0XHQkcHJldmlldyAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcnICksXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSxcblx0XHRcdCRhZGQgICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWFkZF0nICksXG5cdFx0XHQkZWRpdCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1lZGl0XScgKSxcblx0XHRcdCRjbGVhciAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWNsZWFyXScgKSxcblx0XHRcdCRtYW5hZ2UgICAgPSBmdW5jdGlvbiggJHR5cGUgKSB7XG5cdFx0XHRcdGxldCBpZHMgICA9ICRpbnB1dC52YWwoKSxcblx0XHRcdFx0XHR3aGF0ICA9ICggJHR5cGUgPT09ICdlZGl0JyApID8gJ2VkaXQnIDogJ2FkZCcsXG5cdFx0XHRcdFx0c3RhdGUgPSAoIHdoYXQgPT09ICdhZGQnICYmICFpZHMubGVuZ3RoICkgPyAnZ2FsbGVyeScgOiAnZ2FsbGVyeS1lZGl0JztcblxuXHRcdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcblxuXHRcdFx0XHRpZiggc3RhdGUgPT09ICdnYWxsZXJ5JyApIHtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdFx0XHRsaWJyYXJ5OiB7IHR5cGU6ICdpbWFnZScgfSxcblx0XHRcdFx0XHRcdGZyYW1lOiAncG9zdCcsXG5cdFx0XHRcdFx0XHRzdGF0ZTogJ2dhbGxlcnknLFxuXHRcdFx0XHRcdFx0bXVsdGlwbGU6IHRydWVcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEuZ2FsbGVyeS5lZGl0KCAnW2dhbGxlcnkgaWRzPVwiJyArIGlkcyArICdcIl0nICk7XG5cdFx0XHRcdFx0aWYoIHdoYXQgPT09ICdhZGQnICkge1xuXHRcdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUuc2V0U3RhdGUoICdnYWxsZXJ5LWxpYnJhcnknICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICd1cGRhdGUnLCBmdW5jdGlvbiggc2VsZWN0aW9uICkge1xuXHRcdFx0XHRcdGxldCBzZWxlY3RlZElkcyA9IHNlbGVjdGlvbi5tb2RlbHMubWFwKCBmdW5jdGlvbiggYXR0YWNobWVudCApIHtcblx0XHRcdFx0XHRcdGxldCBpdGVtID0gYXR0YWNobWVudC50b0pTT04oKTtcblx0XHRcdFx0XHRcdGlmKCBpdGVtLnNpemVzID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bGV0IHRodW1iID0gKCB0eXBlb2YgaXRlbS5zaXplcy50aHVtYm5haWwgIT09ICd1bmRlZmluZWQnICkgPyBpdGVtLnNpemVzLnRodW1ibmFpbC51cmwgOiBpdGVtLnVybCxcblx0XHRcdFx0XHRcdFx0JHRtcCAgPSBqUXVlcnkoICRodG1sX3RlbXAgKTtcblx0XHRcdFx0XHRcdCR0bXAuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcsIGl0ZW0uaWQgKTtcblx0XHRcdFx0XHRcdCR0bXAuZmluZCggJ2ltZycgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGl0ZW0udXJsICkuYXR0ciggJ3NyYycsIHRodW1iICkucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xuXHRcdFx0XHRcdFx0JHByZXZpZXcuYXBwZW5kKCAkdG1wICk7XG5cdFx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLndwb25pb24taGVscCcgKS50aXBweSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0uaWQ7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGxldCAkZTtcblx0XHRcdFx0XHRmb3IoICRlIGluIHNlbGVjdGVkSWRzICkge1xuXHRcdFx0XHRcdFx0aWYoIHNlbGVjdGVkSWRzWyAkZSBdID09PSBmYWxzZSB8fCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBzZWxlY3RlZElkc1sgJGUgXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGlucHV0LnZhbCggc2VsZWN0ZWRJZHMuam9pbiggJywnICkgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9O1xuXG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xuXHRcdFx0XHQkYWRkLnNob3coKTtcblx0XHRcdFx0JGVkaXQuaGlkZSgpO1xuXHRcdFx0XHQkY2xlYXIuaGlkZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGVkaXQuc2hvdygpO1xuXHRcdFx0XHQkY2xlYXIuc2hvdygpO1xuXHRcdFx0XHQkYWRkLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQkYWRkLm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnYWRkJyApICk7XG5cblx0XHQkZWRpdC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2VkaXQnICkgKTtcblxuXHRcdCRjbGVhci5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcblx0XHRcdCRjbGVhci5oaWRlKCk7XG5cdFx0XHQkZWRpdC5oaWRlKCk7XG5cdFx0XHQkYWRkLnNob3coKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2ltZycsICggZXZlbnQgKSA9PiB0aGlzLmluaXRfZmllbGQoIGV2ZW50LnRhcmdldCwgJ2ltYWdlX3BvcHVwJyApICk7XG5cblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2kud3Bvbmlvbi1pbWFnZS1yZW1vdmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkcGFyZW50ICAgPSBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKSxcblx0XHRcdFx0JGltYWdlX2lkID0gJHBhcmVudC5hdHRyKCAnZGF0YS13cG9uaW9uLWltYWdlX2lkJyApLFxuXHRcdFx0XHQkdmFsdWUgICAgPSAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApO1xuXHRcdFx0alF1ZXJ5LmVhY2goICRpbnB1dC52YWwoKS5zcGxpdCggJywnICksIGZ1bmN0aW9uKCAkaywgJHYgKSB7XG5cdFx0XHRcdGlmKCAkdiA9PT0gJGltYWdlX2lkICkge1xuXHRcdFx0XHRcdCR2YWx1ZS5zcGxpY2UoICRrLCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0JGlucHV0LnZhbCggJHZhbHVlLmpvaW4oICcsJyApICk7XG5cdFx0XHQkcGFyZW50LmZhZGVPdXQoICgpID0+ICRwYXJlbnQucmVtb3ZlKCkgKTtcblx0XHRcdCRpbnB1dC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdH0gKTtcblxuXHRcdCRpbnB1dC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXG5cdFx0aWYoICRwcmV2aWV3Lmhhc0NsYXNzKCAnZ2FsbGVyeS1zb3J0YWJsZScgKSApIHtcblx0XHRcdCRwcmV2aWV3LnNvcnRhYmxlKCB7XG5cdFx0XHRcdGl0ZW1zOiAnPiBkaXYnLFxuXHRcdFx0XHRjdXJzb3I6ICdtb3ZlJyxcblx0XHRcdFx0c2Nyb2xsU2Vuc2l0aXZpdHk6IDQwLFxuXHRcdFx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdzb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdGhlbHBlcjogJ2Nsb25lJyxcblx0XHRcdFx0b3BhY2l0eTogMC42NSxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0bGV0ICRpdGVtID0gdWkuaXRlbTtcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ3dpZHRoJywgJGl0ZW0ud2lkdGgoKSApO1xuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnaGVpZ2h0JywgJGl0ZW0uaGVpZ2h0KCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuIiwiLyogZ2xvYmFsIGdvb2dsZTp0cnVlICovXG5pbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJG1hcCAgICAgICAgICAgICAgPSB0aGlzLm9wdGlvbiggJ21hcCcsIHt9ICk7XG5cdFx0JG1hcC5kZXRhaWxzICAgICAgICAgID0gJyNnbWFwX2ZpZWxkc18nICsgdGhpcy5pZCgpO1xuXHRcdCRtYXAuZGV0YWlsc0F0dHJpYnV0ZSA9ICdkYXRhLW1hcC12YWx1ZSc7XG5cdFx0aWYoICd5ZXMnID09PSB0aGlzLm9wdGlvbiggJ3Nob3dfbWFwJyApICkge1xuXHRcdFx0JG1hcC5tYXAgPSAnI2dtYXBfJyArIHRoaXMuaWQoKTtcblx0XHR9XG5cblx0XHRsZXQgJF9pbnN0YW5jZSA9IHRoaXMuZWxlbS5maW5kKCAnZGl2LnNlYXJjaGJveCA+IGlucHV0JyApO1xuXHRcdCRfaW5zdGFuY2UuZ2VvY29tcGxldGUoIHRoaXMuaGFuZGxlX2FyZ3MoICRtYXAgKSApO1xuXHRcdCRfaW5zdGFuY2UuYmluZCggJ2dlb2NvZGU6ZHJhZ2dlZCcsICggZXZlbnQsIGxhdExuZyApID0+IHtcblx0XHRcdGxldCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXHRcdFx0dGhpcy5lbGVtLmZpbmQoICcubWFwX2ZpZWxkcyA6aW5wdXQnICkudmFsKCAnJyApO1xuXHRcdFx0Z2VvY29kZXIuZ2VvY29kZSgge1xuXHRcdFx0XHQnbG9jYXRpb24nOiB7XG5cdFx0XHRcdFx0bGF0OiBwYXJzZUZsb2F0KCBsYXRMbmcubGF0KCkgKSxcblx0XHRcdFx0XHRsbmc6IHBhcnNlRmxvYXQoIGxhdExuZy5sbmcoKSApXG5cdFx0XHRcdH1cblx0XHRcdH0sIGZ1bmN0aW9uKCByZXN1bHRzICkge1xuXHRcdFx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCAnZmlsbERldGFpbHMnLCByZXN1bHRzWyAwIF0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG4vKiBnbG9iYWwgc2V0VGltZW91dDp0cnVlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkYWRkICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IGJ1dHRvbltkYXRhLXdwb25pb24tZ3JvdXAtYWRkXScgKSxcblx0XHRcdCRncm91cF93cmFwID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCcgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gJHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHQkZXJyb3JfbXNnICA9ICR0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC13cmFwJyApLCAnYWNjb3JkaW9uJyApO1xuXG5cdFx0JGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi1jb250ZW50ID4gLndwb25pb24tZ3JvdXAtYWN0aW9uID4gYnV0dG9uJyApXG5cdFx0XHRcdFx0XHQgIC5jbGljaygpO1xuXHRcdH0gKTtcblxuXHRcdCRncm91cF93cmFwLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46ICRhZGQsXG5cdFx0XHRsaW1pdDogcGFyc2VJbnQoICRsaW1pdCApLFxuXHRcdFx0Y2xvbmVfZWxlbTogJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24tZ3JvdXAtYWN0aW9uID4gYnV0dG9uJyxcblx0XHRcdHRlbXBsYXRlOiB0aGlzLm9wdGlvbiggJ2dyb3VwX3RlbXBsYXRlJyApLFxuXHRcdFx0b25SZW1vdmU6IGZ1bmN0aW9uKCAkZWxlbSApIHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG5cdFx0XHRcdGlmKCBqUXVlcnkoICdib2R5JyApLmZpbmQoICdsaW5rI2VkaXRvci1idXR0b25zLWNzcycgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCAnYm9keScgKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCggJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBpZD1cImVkaXRvci1idXR0b25zLWNzc1wiIGhyZWY9XCInICsgJHdwb25pb24uc2V0dGluZ3MoICd3cGVkaXRvcl9idXR0b25zX2NzcycgKSArICdcIiB0eXBlPVwidGV4dC9jc3NcIiBtZWRpYT1cImFsbFwiPicgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRkYXRhID0gJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZ3JvdXBfd3JhcCwgJ2FjY29yZGlvbicgKTtcblx0XHRcdFx0dGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgJGRhdGEgKTtcblx0XHRcdFx0JGRhdGEuZmluZCggJy53cG9uaW9uLWdyb3VwLXJlbW92ZScgKS50aXBweSgpO1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkZ3JvdXBfd3JhcC5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcDpsYXN0LWNoaWxkJyApLCB7IG5lc3RhYmxlOiB0cnVlIH0gKTtcblx0XHRcdFx0d3Bvbmlvbl9maWVsZCggJGRhdGEgKS5yZWxvYWQoKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZGF0YS5maW5kKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InICksICdyZWxvYWRfd3BfZWRpdG9yJyApO1xuXHRcdFx0fSxcblx0XHRcdHNvcnRhYmxlOiB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tYWNjb3JkaW9uLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdG9wOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdHVpLml0ZW0ucmVtb3ZlQXR0ciggJ3N0eWxlJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0sXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCAkaHRtbCA9IGpRdWVyeSggJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgcm9sZT1cImFsZXJ0XCI+JyArICRlcnJvcl9tc2cgKyAnPC9kaXY+JyApLmhpZGUoKTtcblx0XHRcdFx0JGFkZC5iZWZvcmUoICRodG1sICk7XG5cdFx0XHRcdCRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5mYWRlSW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkX19FID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX19FLmZhZGVPdXQoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCRfX0UucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSwgMTAwMCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbi8qZ2xvYmFsIHN3YWw6dHJ1ZSovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkX3RoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICA9ICRfdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFyZ3MgICAgICAgPSAkX3RoaXMub3B0aW9ucygpLFxuXHRcdFx0JGlucHV0ICAgICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItaW5wdXQnICksXG5cdFx0XHQkcmVtb3ZlX2J0biA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItcmVtb3ZlXScgKSxcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24taWNvbnBpY2tlci1hZGRdJyApLFxuXHRcdFx0JHByZXZpZXcgICAgPSAkZWxlbS5maW5kKCAnc3Bhbi53cG9uaW9uLWljb24tcHJldmlldycgKTtcblxuXHRcdGxldCAkd29yayA9IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRlbGVtczogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRwb3B1cDogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRlbG06IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgQSBOZXcgSW5zdGFuY2UgZm9yIFRvb2xUaXAuXG5cdFx0XHQgKi9cblx0XHRcdGluaXRfdG9vbHRpcDogKCkgPT4ge1xuXHRcdFx0XHRpZiggJGFyZ3MucG9wdXBfdG9vbHRpcCAhPT0gJ2ZhbHNlJyApIHtcblx0XHRcdFx0XHRsZXQgJHRwID0gKCB0eXBlb2YgJGFyZ3MucG9wdXBfdG9vbHRpcCA9PT0gJ29iamVjdCcgKSA/ICRhcmdzLnBvcHVwX3Rvb2x0aXAgOiB7fTtcblx0XHRcdFx0XHRpZiggJHdvcmsuZWxlbXMubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCR3b3JrLmVsZW1zLnRpcHB5KCAkdHAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEluaXRzIEZvciBlYWNoIGFuZCBldmVyeSBQT1BVUC5cblx0XHRcdCAqIEBwYXJhbSAkZWxtXG5cdFx0XHQgKiBAcGFyYW0gJGluc3RhbmNlXG5cdFx0XHQgKi9cblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCAkZWxtLCAkaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR3b3JrLmVsbSAgID0gJGVsbTtcblx0XHRcdFx0JHdvcmsucG9wdXAgPSAkaW5zdGFuY2U7XG5cdFx0XHRcdCR3b3JrLmVsZW1zID0gJHdvcmsuZWxtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXHRcdFx0XHRsZXQgJGhlaWdodCA9ICR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnICk7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnLCAkaGVpZ2h0ICk7XG5cdFx0XHRcdCR3b3JrLnNlbGVjdCgpO1xuXHRcdFx0XHQkd29yay5pbnB1dCgpO1xuXHRcdFx0XHQkd29yay5lbGVtcy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRpY29uID0galF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKTtcblx0XHRcdFx0XHQkaW5wdXQudmFsKCAkaWNvbiApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdFx0c3dhbC5jbG9zZU1vZGFsKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0JHdvcmsuaW5pdF90b29sdGlwKCk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBXb3JrcyB3aXRoIFBPUFVQIElucHV0IFNlYXJjaC5cblx0XHRcdCAqL1xuXHRcdFx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBpbnB1dFt0eXBlPXRleHRdJyApLm9uKCAna2V5dXAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXHRcdFx0XHRcdCR3b3JrLmVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICkuc2VhcmNoKCBuZXcgUmVnRXhwKCAkdmFsLCAnaScgKSApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSGFuZGxlcyBTZWxlY3Rib3ggaW4gcG9wdXAuXG5cdFx0XHQgKi9cblx0XHRcdHNlbGVjdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIHNlbGVjdCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdwb25pb24uYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0J3dwb25pb24taWNvbi1saWInOiAkdmFsLFxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCAkcmVzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICR3b3JrLmVsbSwgJHdvcmsucG9wdXAgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5kaXNhYmxlTG9hZGluZygpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiggJGlucHV0LnZhbCgpID09PSAnJyApIHtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIEJsdXIgRXZlbiAvIGNoYW5nZSBldmVuIGluIGlucHV0ZmllbGQuXG5cdFx0ICovXG5cdFx0JGlucHV0Lm9uKCAna2V5dXAgYmx1ciBjaGFuZ2Uga2V5cHJlc3MnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmKCAkdmFsICE9PSAnJyApIHtcblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJzxpIGNsYXNzPVwiJyArICR2YWwgKyAnXCI+PC9pPicgKS5zaG93KCk7XG5cdFx0XHRcdCRyZW1vdmVfYnRuLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQWRkIEJ1dHRvbiBDbGljayBFdmVudC5cblx0XHQgKi9cblx0XHQkYWRkX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBvcHVwID0gc3dhbCgge1xuXHRcdFx0XHR0aXRsZTogJGVsZW0uZmluZCggJy53cG9uaW9uLWZpZWxkLXRpdGxlIGg0JyApLmh0bWwoKSxcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0YWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0d2lkdGg6ICc3MDBweCcsXG5cdFx0XHRcdGN1c3RvbUNsYXNzOiAnd3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbCcsXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0XHQkX3RoaXMuYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiAkYXJncy5lbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25TdWNjZXNzOiAoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0bGV0ICRwb3B1cF9lbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHBvcHVwX2VsZW0sICRwb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uRXJyb3I6ICgpID0+ICRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiAkcG9wdXAuZGlzYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIFJlbW92ZSBCdXR0b24gRXZlbnQuXG5cdFx0ICovXG5cdFx0JHJlbW92ZV9idG4ub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkaW5wdXQgICAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXG5cdFx0XHQkcHJldmlld19hZGQgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3LWFkZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXcnICk7XG5cblx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IG51bGw7XG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcHJldmlld19hZGQuaGlkZSgpO1xuXHRcdFx0XHQkcHJldmlldy5zaG93KCk7XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2ltYWdlX3VwbG9hZF91cGRhdGVkJywgJGlucHV0LCAkcHJldmlldywgJHByZXZpZXdfYWRkICk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXdfYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJHRoaXMubWVkaWFfaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHR0aXRsZTogJHRoaXMub3B0aW9uKCAnZnJhbWVfdGl0bGUnLCBcIlNlbGVjdCBJbWFnZVwiICksXG5cdFx0XHR9ICk7XG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9ICR0aGlzLm1lZGlhX2luc3RhbmNlLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCkuYXR0cmlidXRlcztcblx0XHRcdFx0bGV0IHRodW1ibmFpbCAgPSAoIHR5cGVvZiBhdHRhY2htZW50LnNpemVzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwgIT09ICd1bmRlZmluZWQnICkgPyBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbC51cmwgOiBhdHRhY2htZW50LnVybDtcblx0XHRcdFx0JHByZXZpZXcuZmluZCggJ2ltZycgKS5hdHRyKCAnc3JjJywgdGh1bWJuYWlsICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBhdHRhY2htZW50LnVybCApO1xuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmlkICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gKTtcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlldy5maW5kKCAnLndwb25pb24taW1hZ2UtcmVtb3ZlJyApLm9uKCAnY2xpY2snLCAoKSA9PiAkaW5wdXQudmFsKCAnJyApLnRyaWdnZXIoICdjaGFuZ2UnICkgKTtcblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2ltZycsICggZXZlbnQgKSA9PiB0aGlzLmluaXRfZmllbGQoIGV2ZW50LnRhcmdldCwgJ2ltYWdlX3BvcHVwJyApICk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnaW5wdXRtYXNrJyApO1xuXHRcdFx0aWYoICRzZXR0aW5ncyApIHtcblx0XHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnSW5wdXRNYXNrJyApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5wdXRtYXNrKCAkc2V0dGluZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGhpc19lbGVtID0gJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi10YWItd3JhcCAnICk7XG5cblx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpIGEnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bGV0ICRfdGhpcyA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0JF90aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi10YWItY3VycmVudCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLmhpZGUoKTtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi10YWItcGFnZScgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHRsZXQgJHRhYiA9ICRfdGhpcy5hdHRyKCAnZGF0YS10YWItbmFtZScgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdkaXYjd3Bvbmlvbi10YWItJyArICR0YWIgKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICkuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCBhJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaTpmaXJzdC1jaGlsZCBhJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2lzX3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5nbG9iYWxfdmFsaWRhdGUgPSBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWtleXZhbHVlX3dyYXAnICkuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWFjdGlvbi1jb250YWluZXIgID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1rZXl2YWx1ZS1hZGRdJyApLFxuXHRcdFx0bGltaXQ6ICggLTEgPT09IHRoaXMub3B0aW9uKCAnbGltaXQnICkgKSA/IG51bGwgOiB0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0Y2xvbmVfZWxlbTogJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24ta2V5dmFsdWUtZmllbGQgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLXJlbW92ZV0nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnaHRtbF90ZW1wbGF0ZScgKSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZWxlbS5maW5kKCAnPiBkaXY6bGFzdC1jaGlsZCcgKSApO1xuXHRcdFx0fSxcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRodG1sID0galF1ZXJ5KCAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj4nICsgdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICkgKyAnPC9kaXY+JyApXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLmFmdGVyKCAkaHRtbCApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5mYWRlSW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkX19FID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX19FLmZhZGVPdXQoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCRfX0UucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSwgMTAwMCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIGVyci5lbGVtZW50LnBhcmVudCgpLnBhcmVudCgpICk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRhcmdzXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCB0cnVlICE9PSBpc191bmRlZmluZWQoICRhcmdzLmtleSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDAgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3Mua2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGlmKCB0cnVlICE9PSBpc191bmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMSApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy52YWx1ZSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVlID09PSBpc191bmRlZmluZWQoICRhcmdzLmtleSApICYmIHRydWUgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5pbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80UUFZUlhocFpnQUFTVWtxQUFnQUFBQUFBQUFBQUFBQUFQL3NBQkZFZFdOcmVRQUJBQVFBQUFBOEFBRC80UU50YUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THdBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpNdFl6QXhNU0EyTmk0eE5EVTJOakVzSURJd01USXZNREl2TURZdE1UUTZOVFk2TWpjZ0lDQWdJQ0FnSUNJK0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0UxTlBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZiVzB2SWlCNGJXeHVjenB6ZEZKbFpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMM05VZVhCbEwxSmxjMjkxY21ObFVtVm1JeUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiWEJOVFRwUGNtbG5hVzVoYkVSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9UQkdORVZEUWpnNFJEQXhSVEF4TVRoQk1rUkRORVUyTnpoRlFrRXpSRGdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UlVVNU4wRTNPRUUxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSVVU1TjBFM09EazFPVU5GTVRGRk5UZzFSVVZCTUVVNU4wSTJRa1pCTXpJaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5DQlhhVzVrYjNkeklqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZORE0yTURVMlF6SkdRa1ZFUlRBeE1UazFOVVZDUlRBelJVRTRRalJFTlVJaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9FVkdORVZEUWpnNFJEQXhSVEF4TVRoQk1rUkRORVUyTnpoRlFrRXpSRGdpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo3LzdnQU9RV1J2WW1VQVpNQUFBQUFCLzlzQWhBQUdCQVFFQlFRR0JRVUdDUVlGQmdrTENBWUdDQXNNQ2dvTENnb01FQXdNREF3TURCQU1EZzhRRHc0TUV4TVVGQk1USEJzYkd4d2ZIeDhmSHg4Zkh4OGZBUWNIQncwTURSZ1FFQmdhRlJFVkdoOGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeC8vd0FBUkNBRVRBUk1EQVJFQUFoRUJBeEVCLzhRQWlRQUJBQU1BQXdFQkFBQUFBQUFBQUFBQUFBUUZCZ0VEQndJSUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVBQUJBd01EQVFNR0J3OENBd2tBQUFBQkFBSURFUVFGSVJJR01VRVRCMUZoY1lFaU1wR2hzY0ZDZ2hUaFVtSnlrcUt5d2lNemM3TjBGVFlrTjlIVEYrSkRVNU9qVkRWVkZoRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFQL2FBQXdEQVFBQ0VRTVJBRDhBL1ZLQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lPdWVlS0NNeVN1REdEcVNnNkk4dmpYbWpaMi9XcTM1UUVIZXk0dDVQY2xZLzhBRmNEOGlEc1FFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUZOeWVYYmJSUi9mdUovSkgzVUdiM0lPZHlEc2p2TG1QOTNLOXZtRGlFRWxtY3liQlFUa2p6aHArTWhCSVp5YTliUU9aRy95bWhCK0lvSk1mS1cvOTViK3RyditJUVNZK1NZOTN2QjdQT1JVZkVTZ2t4NWpHU2U3Y05INDFXL3BVUVMyUFk5b2V4d2MwOUhBMUJRY29DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSU0zeXFiOXZCRjk2MHUvS05QMVVGYmlvRzNOL0RDOGJtT1B0RHlnQ3BRYVNUajJNZVBaWVl6NVd1UHoxUVJaT0xRRWZzNW5BK2NBb0l6K0wzWTl5Wmg5TlI4eUNNN2oyVkIwakR2T0hOK2NoQkdreG1Tak5IVzhucWFUOGlEb2ZITkdhUFk1cDhoQkNENDNJTmR4MWptNHhwSjk5em5OOUhUNWtGbWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3gvSjU5K1VMZi9DWTF2NjM2eURuaTdDL0poM1pHMXhQckZQblFhOUFRRUJBUVFNNCtPUEdUdWMwRWx1MEVqdE9pREVia0c3eE1aanh0dXc5ZGdQNVd2em9KYUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDREFacWZ2TXJjdUhUZVFQcTZmTWd1T0d4a3Z1SmV3QU5yNjZvTk9nSUNBZzRjNXJXbHppR3RIVW5RSUtYbGs3UmpHdEJyM2p4UWp0QUNESHNKYzROSFVtZzlhRDBwalF4aldqbzBBRDFJT1VCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFmTWtzY2JkejNCbzhwUVJKTXhaczBhUzgvZ2pUNDZJSVV1Ym5kcEcwTTg1MUtDVmk3bVdXT2FTWjFRMDE5QXBxZ3dFMHBkSzkzM3ppZmhLRFk4TllSaTN1UDA1U1I2Z0FnblpQTjJPUForMWR2bFB1eE4xZDYvSWdxTVR5dDg5OFlyc05aRkthUkVhYlQ1Q2ZPZzA2Q3B5ZkpNZlpBc0R1K243STJkQWZPVUdTeUdjeUYrNHRrZVd4RTZSTjBiMTdmS2d0T1V2N3V3eHNIMGhIVnpmUTFvQ0NvdzdUSmxiUnRLL3RXRWp6QndKUWVqSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lLck90ZHRoZDlFRWcrazBRVkNBZ3RHa1E0QzZsSm9USEpyNTZFQkI1L3ZRYXArVHVNWnhpeUZ2UmswKy8yNkRRYmllMzBvTXZKUEpJOHZrY1h2Y2F1YzRra24wbEI4NzBGbk55WExTMnJiWXpFTUFvNXcwYzcwdTZvS3plZzc3RUdTOWdqR3U2Um9wNjBGMXphVWYzU0pqZWpJUlVlUWx6dm1RUitJc01tYmlOS2hqWHVQNUpIem9OK2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnaTVTTHZMTi9sYjdROVNEUFVRS0lKbWZjSU9LdkZhRjdZd1BTNTRKK0pCZ0E0a2dlVkJydVRXRjdMamNZeTNnZEl5R0wyeTNXaExXOW5xUVpaOXZkTTkrRjdmUzBoQjFGeEhYUkJ4dlFONkM0NG13UzU2MkRoVnJkenZXR0VqNDBIeHllY3Z6bDFVMTJ1MmoxQUlMWGdVZTY3dXB2dkkydEgxai9BTmxCdFVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQndCQkI2SFFvTXZQSDNjcjR6OUZ4RmZRZytXaXBIblFPZHk5emliVzMrK2VQekcvZFFZVVNFRUVkUWFoQmNRY3h6c05CMzRlQUtBUGEwajRnRUU5dmlCa0RwTGJRT2IyZ0J3K1Z4UWRnNWhocE5MakV4MVB2T0FZZmxhZzVia09DejZ5Mmpvbkh5YndQelhJRGNQdys3Sk1HUTdqOEY3ZzM5T2lDejQ5Z01mWlg3cmkzdm1YWHNGckd0TFNRVDFPaEtERFgwNWx2WjVDYWw3M0d2clFiVHcraEF4MXpQMnlTN1BVeG9QNjZEVklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0NpekVPeTYzMDBrRmZYMm9JMXRIdnVJMkR0Y0VGWDRpM0IrMDJsdjJOWTZUOG8wL1ZRWStxQlZBcWdWUUtvRlVISWU0ZEhFZXRCeHVRZW04S2hFZkg0SERySzU3eitWdC9WUVhxQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Fncjh6RnV0MnlBYXNkcWZNZnVvSzdHN2Z0c2U0MDErT2lEbmt2RlA3ek5IT3k0N21XTm15aGJ1YVJVbnlqeW9NemNlSCthai9kUGltSG1kdC9TUVFMamlQSVlQZXRIUC9oa1AvUnFnZ1Q0ekoyNHJQYXl4RHl2WTV2eWhCR0pJT3FEamNnYmtEY2dia0hzT0RnN2pEMmNWS0ZzTEtqemtWUHhsQk5RRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVIVmN4Q1cza1o1UjkxQm1qVUduYUVIWXk0dUdlNUk1dm9KQ0R0WmtyMW5TUW4wNi9LZzc0OHpkQSswMFArTDVFRmhiWFZ6TVJ2Z0xHbjZSUDNFSFpQWjJsd0tUd3NsSDRiUTc1VUZmTnhUajAxZDFsR0NlMXRXL0lRZ3I1dkQ3QXZKTFROR2V3TmNDQjhJS0NCTDRhUkVreFg3bWpzRG82L0dIQkJEYjRiNUVYREE2NWlNRlJ2Y04yN2IyMGJUNTBIb0RHaHJRMGRHaWc5U0RsQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUZGZTJNNHVuN0dGelhtclNCcHJxZzVodzl5L1Y1RVk4L1ZCTml3MXUzMzNGNStBSUprY0VNWDd0Z2I2QWcrMEJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJCRnltUmh4dU91Yitkcm5RMnNicFpHc0FMaTFncWFBa0N2clFRT0w4c3hQSkxPUzV4NWUzdVg3SllaZzFzalNSVUVocGNLTzdEVkJieVBESTNQUFJvTGpUekNxQ3A0dnlqSDhreDhsOVl4eXh3eHltQnpadzFydHpXdGRVYlhQRktQSGFndUVCQVFSc2xmdzQvSFhOL01IT2h0WW56U05ZQVhGckdseDJna0N1bmxRWWovclp4WC8ydDkvNWNQL05RU0xIeGk0aGN6Q0tUN1RhQTBBa25qYnQxL2h1a0krQkJ0bzVJNVkyeVJ1RDQzZ09ZOXBCYTVwRlFRUjFCUWZTQWdJQ0FnSUtiam5Lc2ZuL3RuMk9PYVA3RkwzTXZmQnJhdTExYnRjL1RUdFFYS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdwZWJmNGptUDZTWDlBb1BKZU52eUhGTFhEOHFoM1RZdkk5NUJrb2gyYlpuc0g1ckE1dm5CSGFnOXJOekJkWTAzTnU4U3dUUWw4VWpkUTVybTFCQ0RFZUNmK0szWDlkSi9KaVFUTTM0bTJkcGtuNHZFV0UrYXY0aVJMSGIxMmdnMGNBV3RrY1MzdG8yaURuQmVKZG5lNUptS3lsaFBoc2pLYVJSWEZkcmllamR6bXh1QlBaVnZtUWJOQlQ4eC94UE0vMFUvOHNvS3J3cC93WEgvalQvejNvSlBpSmFZeWZpT1JmZk1ZZTVoYysya2RUYzJiNkcwOWhMcUR6b0tYaUdjdWNSNFd4NVNlRTNIMlFTZDFFNTJ3dWo3NHRhTjFIVUFycG9nTjhWSjdrUU94ZUJ1Y2pHV1JtOGxoTGl5R1NSb2NZOXdqY0hGdGFFbmFndk9VYzN4bkhoREZPeDl4a0xnQXcyTUh0UElKcFUrUVYwSGw3RUZIRDRxVFc4clA3OXgrOHhOcklRMXR5OFBlMnZuRG80ajhGVUYveXZsUndlRWp6RnZhaklXcjNzRHl5WFlCSElQWmtCMnZEaFdnOWFDN3Q1NHJpM2l1SVhib3BtTmtqY08xcmhVSDRDZ284WHl3NUhsR1J3dHZhVnQ4YTBkOWZkNW9aRFFiQkh0OHU3NlhZZzQ0ankzL0FQUmYzRC9TZlpmc00zY2Z2TzgzOWZhOTFsT2lDdnp2aVJhMldTa3hlS3NKOHprWWFpYUszQjJ0SXBVYm10a0pJN2FOMDZJT2NGNGoyMTdrbzhYbGNmUGhzak5wREZjQTdYazlBSE9iR1FUMlZhZ3NUeXN4OHlIRzU3WHV4TEIzOXJkOTVYdktEVnV6YUtlNjc2UjZJUHJtWEtvdU5Zais0UGgrMHZkSTJLS0RmM2U0dXFUN1cxL1JyU2VpQ3p4dVFodjhaYlpDUDJZcm1Ga3dxZmREMmgxQ2ZNZ3F1SWNxZHlPQzd1bVduMmUwZ25NTnZLWGw1bERkUzdic1p0MEk3VDhTQy9RRUJBUUVCQVFFQkFRRUZMemIvRWN4L1NTL29GQlI4RHhkbmxmREt6eDk0emZiM0RiaHJ4MmovVVNFT0huYWRRZ3F1RjVTOHdOL2U4THk3Nm1OcjM0eVkrNjVwQmR0RmV4dzlwdm5xRUR3cG5rdCtBWmVlTFNTS2U0ZXcvaE50b3lFRS93Y3NiYUxpNzd4clFibTZuZjMwbjBpR2FOYlh5RHI2MEh6NHkyZHU3amtGOFFHM2R0Y01FRW8wY0E4SGMwSHIyQStwQnRzZE5KTmo3V2FRMWtraGplOCtkelFTZ3IrWS80bm1mNktmK1dVSG5YQ2VGWi9KOGJ0YjIwNVBkNDYza01nWlp4Q1RZemJJNXBwdG1qR3BGZmRRWHJQQ2lXNmxZYzd5Qzh5c01iZzVrTGk1bzByVUV2Zk4xODFFRnZ6MjF0N1hnR1J0cmVNUlFRd01aRkcwVURXdGUwQUJCMmVHOXZGQndyR0NOdE44YnBIbnRMbnZjU1NndzB0MXlwL2lWbWJyQ1dFR1F2YllDSnJia2dDS0tqV2dzckpEcWFmSDUwRnBrN2p4Y3lXUHVMQzY0L1l1dDdsam81QUhzcUE0ZFJXNU9vNmp6b0x2alhHOGpKd0U0RE9SOTFPNWtzSWFYTmVXdExpNk03bUZ3OWtrVTlDQ3Y0VHljMlBCNzRYK2wxeDR5UVN4bnFkdGU2YitWN0E5Q0NiNFdZdVMyNDRjamM2M21YbGRkVFBQVXRKSVo4T3J2V2dwL0RLWjhOaHlpYVA5NUhjU1BaNld0ZVFnbytCWFhpQmI0cVdmQVltMXZJTG1aenBydWR6ZTljOFVCRHF6eG1nN05PMUJPNUxZZUt2SWJhQ0c4d2xyQzYybEUwRThFc2JaV3VBcG81MXcvUS9NRUY5NGh3M05wYjRiazRaUzd4RThadTJ0N1lwYUNSdW40V25yUWNjbWdoNUx5N0hZWnAzMlZ0WlRYazVwVnBNN2U3aXJYeWFFZWxCUjR2a3MxajRXWDlvOHVHUnM1Wk1ZeGxmYURwWGFVUDRMWE9wK0tnOUE0bGhoaHVPMk9Qb0JMRkdEUFR0bGY3VC93QTRvTGRBUUVCQVFFQkFRRUJBUVZITDRKcCtMNVdHQ04wczBscksyT0pnTG5PY1dtZ0RScVNnZytHOXBkMm5DOGRiM2NNbHZjTTc3ZkRLMHNlMnM4aEZXdUFJcURWQkQ4U2VKU1pyR052ckZwR1h4LzdTM0xQZWUwR3BZS2ExN1crZjBvSTNoSmk3MjA0dmQyMlJ0SmJaOGwzSWU1bmpkRzV6SFF4TnJ0Y0FhR2hDQ3FzYlBtWEJMdTZ0N0RIUHplQ25lWklXUkVtVnBOQjBhSHVCcFFPOWtnOWZLZ1h0aHpIbmQ1YVJaSEhPd3VCdDVPOWxqbEo3MTVGV25Sd1k0dXBVRDJRQld1dWlEMDVqR3NhR05GR3RBRFFPZ0FRVmZLNFpwK01aYUdHTjBzMGxwTTJPTmdMbk9jWXlBR2dha2xCVytHbG5kMmZEYkczdTRKTGU0WVp0OE1yWE1lS3pQSXExd0IxQlFhZEJRYyt0cm02NGhrN2UyaWZQUEpHME1pamFYdmNkN1RvMXRTVUgxd2EydUxiaVdNZ3VZbnd6eHcwa2lrYVdQYWR4MExUUWhCbmVVY2Q1SGplVGpsWEdvaGN5eXNFZC9aSHE4QUFhQ29xSEJvNmFnaXVxQ1BkY3I4UXMzYnV4Mk40N1BpcHBoc2t2cDNQWUdOT2hjeHoyUmJUNktueWFvTnhnY2RjWTdFMjFuYzNVbDdjUk4vYlhVem5QYzk3aVNkWEVtZ3JRZVpCNXp6YmlXYmw1VkpiNHlHUTR6UG1CMS9MR3h6bVJ1aWY3UmU0Q2pmdjllcUQxSzNnaXQ0STRJV2hrVUxXeHh0SFFOYUtBZkFndy9oaGpMKzBibkczMXBMYnRudXk2TVRSdVlIc083VnU0Q29RVmRyWWN3NEpmM2NlTHg3c3pnTG1Udlk0WXFtUmhOQjlFUGVIVW9DZHBCcFZCS056ei9sdDVid2kwdU9OWW1KKys1bTd4OGM3NmFiUWFSUE5kYWV6VHk5aURkWmJHd1pMRjNXT20vZFhNVG9pZXBHNFVEdlNEcWd4L2hmaHN2Yk55RjltSXBJcjE1aXM0aEswdFBjMnNZWTB0QnBWcDAxN2FJS3QvRDhqSjRsU1JtQ1Qrd3Z1R1pTU1FzZDNKbVl3bmJ1cHQzZDQ4MUZlaUQwOUFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJCQXorV2l4R0Z2TWxKU2x0RTU3UWZwUDZNYjlaeEFRZVM4UWt5SEhzN2hjeGZQTHJia3JaR1hEajJPZkw3TGoyZGRqdlFTZzlwYzVyV2x6aUEwQ3BKMEFBUWRGbGYyRjlEMzFsY3hYVUlKYVpZWHRrYnVIVWJta2l1cUJlMzloWXc5OWUzTVZyQ1NHaVdaN1kyN2owRzV4QXJvZzdUSkdJKzhMZ0k2YnQ5UnRwMXJYeUlJRVhJK1BUVGkzaHlscEpPU1FJbVR4T2VTT28yaDFVRXU4amhsczU0cG5iSVh4dmJLK29HMXBhUTQxT2dvRUdieDJMd21NNFRrTFhEWGYyMnlFTnk0VDk1SEw3UmpPNGJvdzF1aUNMNFJmNFhCL0dtL1NRYW0reStKc0MwWDE3QmFGM3VpZVZrZGZSdUlRZGxuZjJON0YzMW5jUlhNSjA3eUY3WkcrVHEwa0lNSHl6L0FIUjR6L0RQNlQwRzNibThNNjhOazIvdGplQTdUYkNWaGxyNU5sZDN4SVBqUC84QXdXUi9wWnY1YmtHYThJdjhMZy9qVGZwSU5WZlpiRldHMDMxNUJhQjN1OS9JeU92bzNFZVJCMjIxM2EzVUltdFptVHd1OTJTSndlMDl1aGFTRUhhZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSVBPZkZySnh6eVl2alluWmJpOW1iTmR6UGMxaldSQjJ4cGNYYVVydWQ5VkJ6NGh5OFV5SEQvc3RoazdKMCtOMlNXVVVkeEVYRnNZMkZqUUhWUHNkQjVVR3A0VG5SbStOV2Q2NTI2Y043cTU4dmV4K3k0bjhiM3ZXZ3pmRFIvWU9hNW5qYnZadGJ2OEExMlBIWlE5V2o2cHA5VkE1bVA3OXpYQzhiYU4xcmJIN2RrQjFGQjBhZnFpbjFrRmp6VGpHU3oxL1pSejNrZHR4dUNqNzZMdkhNbGUrcC9CMlU5MENydEtsQm0rUmNkOEpZTVZjQzJ1NEliMXNiekMrRzVmTy92R2pRT1lIU0RWM1hSQmVjSXlGMWUrR3puM0x6TEpGRGN3aDd0U1dzRGcycDh6ZEVFSHc5LzJ3di94YnorV2dtZUZ3dWo0ZjB0Q3dYWmRjZlp6SlVNRWxUdDNVRGpTdlhSQlgyUEErTFdjY2svTmIrM3VzdmNTT2RMSkxkdWlacjAya3VoY1RUVTFRVldKZmdNVjRqNDZQaTE0Wk1mZXRNZDNDMXpuc0JJZFJ1NTNVQ2djTlRRb0ozaVBaWGw5ejNCV2RuTTYzbm5oMkNkbnZNYVh2M3VGTzBNcWd0Nzd3ZzRxL0Z1Z3MyU1FYelcvc3IweVBjNHZIVGUwblpUeTBhRUhSd3pPM21VNEJrNGI1eGZkNCtLNHRueU9OWE9hSWlXbHg3U0s3ZlVnK09BNVQrMWVHRTJSMmh4dGZ0RWpHbm9YQSt5RDZTZ3krQW04Tzd5RitSNWZrWkwzTVhUbk9taWMyNkRZeFU3UURFMFYwOGhvT2dRU0xQTmNZd1hMTWROeFMra2x4MTlJSU1qWVBFd1l3UGNHdGUweXRiV202bzFKMDYwS0QyTkFRRUJBUUVCQVFFQkFRRUJBUUVCQUpBRlRvQWc4cTQvaWNmempsdWF5K1RpTnhpNENJTFNQYzVnTkRSaEJZV25ScmFrZmhJTlYvMHM0SC93RFdmK3ZjZjh4Qm5lQVNPNDd6UExjVW1kU0NaeG1zYTl1MGJoU3ZhNkk2L2lvTFR4SWdmajd2RDhxaEh0NHk0YkhkVTZtM2xORDhwYjlaQjErR3NUOGxrTTF5dWNIZGtKekRhVjZpQ01qL0FJTmI5VkJWYzdsdEwzbjFsaStRWFQ3WEFOZ0VqQUNXc2RJZDN0T2QyVmNOdTdzOHlEblBNOEo4TGlibDFoRmEzbDlMRzV0c3lPVTNSRWhhUTF4TG5TTllBZFNnc2ZEb2crR2x3QWRRTHNINENVSFY0ZS83WVgvNHQ1L0xRZFhEcnE5dFBDYTd1YktvdW9tM0xvbk5GUzBnNnVING8xUVZuRU1SNGFYbUdaZTV5OWpteWtoYys3YmRYTG9YTmZ1UHV0RDJGMm5iclZCSGp5SEdianhMdzBmSDRJNGJHM2YzYnBZMjdCSklkMVhEdEk2QVZRVy9pRmxHNHJ4QXdPUWV4MGtkdkNYeXRZS3U3dmM4UElINExTU2cxV1I4UStKMm1NZmZSNUdHNU8yc1Z2RThPbGM3c2JzOTV2MWdFR2Q0SmpMdTI0RGw3MjdhV1NaSmx4Y01hUlQyTzZJRHRmdmpVK2hCODhLeHN1VDhLYnF3aC9mVGk0YkVEb0M4T3EwZXNoQkU0RmtlQ1B4TGNkbmJPd3RjdFpGMFU3cnlHRmhmUnhvUytRZThQZElKclVJTE4yWjRVL2tsamljRGdySEp6eVByUGR3UlJNWkExcmg3WWVJM2J0bzEwSTdOZFVIb0NBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Q0dUlJcmlDU0NVRXhUTWRISUFTMGxyaFEwYzBnalR0Q0NIaGNGaWNKYUcweGx1TGUzYzh5T1lIT2ZWNUFCSmM4dWQwQTdVRTlCVjNmR01IZDVlRE1UMjI3SlcyMFEzRFh5TUkya2tWYTF3YTdyMmhCTXlHUHM4alpUV1Y1R0pyV2R1MldNa2lvNjlXa0VlcEJ4amNiWTR5eGlzYkdJUTJzSUlqakJKcFVrblZ4Sk9wN1VIUm1lUDRYTlF0aHlsb3k1WXlwWVhWRG0xNjdYdEljSytZb0lPTTRKeEhHeWQ3YVl5SnNuWStUZE00VjA5a3lsOVBVZ2w0dmpXRnhWaFBZV0Z2M05uY0Z6cG91OGtjQ1h0RFhhdmM0aXJSMklQckg4ZXcrT3hjbUxzN2Z1ckNVUEQ0ZDczVjd3VWQ3VG5GMm84NkRzeEdGeG1Jc1JZNDZIdWJWcGM0UjduUDFjYW5WNWNmalFWRng0Y2NKdUxrM0VtTGpFaE80aGo1STJWclgzR09hejRrRXVUaHZHSHZzbmpIeHh1eDcrOHN6Q1hSYkgxRHEvc3kzZHEwZTlWQkl2T1BZZTh5ZHZrN20zRWw5YU5MSUpTNTREV210UnRCRFQ3eDZoQlh4K0h2REk3MzdZekZSQ2F1NEFsNWpCODBSZDNmNXFDOW50NFo3ZVMzbGJ1aGxZWTNzMUZXdUZDTktVMFFSc1Joc2JoN0p0bGpvZTR0V3VMbXg3blAxY2FuVjVjZmpRUXN2d3ZpK1ltNy9JWStPV2MrOUswdWllNm1udE9qTEM3MW9KT0c0NWc4TEc1bU1zNDdZUG9IdmJVdmNCMERudUpjZldVRmlnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDRC8vMlE9PSc7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5iZWZvcmUoICc8c3BhbiBjbGFzcz1cInNwaW5uZXIgd3Bvbmlvbi1zcGlubmVyXCI+PC9zcGFuPicgKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHRoaXMuc2hvd19wcmV2aWV3KCBlICkgKTtcblx0fVxuXG5cdHNob3dfcHJldmlldygpIHtcblx0XHRsZXQgJHZhbHVlID0gdGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkudmFsKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdCR3cG9uaW9uLmFqYXgoICdvZW1iZWQtcHJldmlldycsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR2YWx1ZTogJHZhbHVlLFxuXHRcdFx0fVxuXHRcdH0sICggcmVzICkgPT4ge1xuXHRcdFx0aWYoIGZhbHNlID09PSByZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmh0bWwoIHJlcy5kYXRhICk7XG5cdFx0XHR9XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5yZW1vdmVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnc2VsZWN0MicsIHt9ICk7XG5cdFx0dGhpcy5lbGVtZW50LnNlbGVjdDIoIHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcgKSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGZpZWxkX2RlYnVnKCl7XG5cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3RpemUnLCB7fSApO1xuXG5cdFx0aWYoICFpc191bmRlZmluZWQoICRhcmcudGhlbWUgKSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcyggJGFyZy50aGVtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoICdzZWxlY3RpemUtZGVmYXVsdCcgKTtcblx0XHR9XG5cblx0XHQkYXJnID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApO1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyggJ2Zvcm0tY29udHJvbCcgKS5zZWxlY3RpemUoICRhcmcgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHZhciAkdGhpcyAgICAgPSB0aGlzLmVsZW1lbnQsXG5cdFx0XHQkZW5hYmxlZCAgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZW5hYmxlZCcgKSxcblx0XHRcdCRkaXNhYmxlZCA9ICR0aGlzLmZpbmQoICcud3Bvbmlvbi1kaXNhYmxlZCcgKTtcblxuXHRcdCRlbmFibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGRpc2FibGVkLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICd1aS1zb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0XHR1cGRhdGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdHZhciAkZWwgPSB1aS5pdGVtLmZpbmQoICdpbnB1dCcgKTtcblxuXHRcdFx0XHRpZiggdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tZW5hYmxlZCcgKSApIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2Rpc2FibGVkJywgJ2VuYWJsZWQnICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2VuYWJsZWQnLCAnZGlzYWJsZWQnICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIGF2b2lkIGNvbmZsaWN0XG5cdFx0JGRpc2FibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGVuYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgY3NzX3VuaXRzIGZyb20gJ3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmZvbnRfd2VpZ2h0X3N0eWxlID0gZmFsc2U7XG5cdFx0bGV0ICRlbCAgICAgICAgICAgICAgICA9IHRoaXMuZWxlbWVudDtcblx0XHRsZXQgJHByZXZpZXcgICAgICAgICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1mb250LXByZXZpZXcnICk7XG5cdFx0bGV0ICR0aGlzICAgICAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldFxuXHRcdFx0XHQkZm9udF9maWVsZCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtZm9udF9waWNrZXInICksXG5cdFx0XHRcdCRmb250ICAgICAgICAgICAgICA9ICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi1mb250LXNlbGVjdG9yJyApLnZhbCgpLFxuXHRcdFx0XHQkZm9udF93ZWlnaHRfc3R5bGUgPSAkdGhpcy5mb250X3N0eWxlKCAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS52YWwoKSApLFxuXHRcdFx0XHQkdGFnICAgICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtdGFnIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGNvbG9yICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1maWVsZC1jb2xvcl9waWNrZXIgaW5wdXQud3AtY29sb3ItcGlja2VyJyApLnZhbCgpLFxuXHRcdFx0XHQkYWxpZ24gICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYWxpZ24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkZm9udFNpemUgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtc2l6ZSBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0JGxpbmVIZWlnaHQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxpbmUtaGVpZ2h0IGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHQkYmFja1VQRm9udCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwLWZvbnQgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkZGlyZWN0aW9uICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtZGlyZWN0aW9uIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxldHRlci1zcGFjaW5nIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHRocmVmICAgICAgICAgICAgICAgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PScgKyAkZm9udCArICc6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQsXG5cdFx0XHRcdGh0bWwgICAgICAgICAgICAgICA9ICc8bGluayBocmVmPVwiJyArIGhyZWYgKyAnXCIgY2xhc3M9XCJ3cHNmLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSArICdcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz4nO1xuXG5cdFx0XHRpZiggalF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0alF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkuYXR0ciggJ2hyZWYnLCBocmVmICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoICdoZWFkJyApLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGZvbnRTaXplID09PSAnJyB8fCAkZm9udFNpemUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGZvbnRTaXplID0gJzE4cHgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGxldHRlclNwYWNpbmcgPT09ICcnIHx8ICRsZXR0ZXJTcGFjaW5nID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nID0gJzFweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGluZUhlaWdodCA9PT0gJycgfHwgJGxpbmVIZWlnaHQgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxpbmVIZWlnaHQgPSAnMjBweCc7XG5cdFx0XHR9XG5cblxuXHRcdFx0bGV0ICRfYXR0cnMgPSAnIGZvbnQtZmFtaWx5OicgKyAkZm9udCArICc7ICcgK1xuXHRcdFx0XHQnIGZvbnQtd2VpZ2h0OicgKyAkZm9udF93ZWlnaHRfc3R5bGUud2VpZ2h0ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC1zdHlsZTonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLnN0eWxlICsgJzsgJyArXG5cdFx0XHRcdCcgdGV4dC1hbGlnbjonICsgJGFsaWduICsgJzsgJyArXG5cdFx0XHRcdCcgY29sb3I6ICcgKyAkY29sb3IgKyAnOycgK1xuXHRcdFx0XHQnIGZvbnQtc2l6ZTonICsgY3NzX3VuaXRzKCAkZm9udFNpemUgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxldHRlci1zcGFjaW5nOicgKyBjc3NfdW5pdHMoICRsZXR0ZXJTcGFjaW5nICkgKyAnOyAnICtcblx0XHRcdFx0JyBsaW5lLWhlaWdodDonICsgY3NzX3VuaXRzKCAkbGluZUhlaWdodCApICsgJzsgJztcblxuXG5cdFx0XHRsZXQgJHRleHQgPSAkcHJldmlldy50ZXh0KCk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuYXBwZW5kKCBqUXVlcnkoICc8JyArICR0YWcgKyAnPicgKyAkdGV4dCArICc8LycgKyAkdGFnICsgJyA+JyApICk7XG5cdFx0XHQkcHJldmlldy5maW5kKCAkdGFnICkuYXR0ciggXCJzdHlsZVwiLCAkX2F0dHJzICk7XG5cblx0XHR9ICk7XG5cdH1cblxuXHRmb250X3N0eWxlKCAkaW5mbyApIHtcblx0XHRsZXQgJHdlaWdodF92YWwgPSAnNDAwJyxcblx0XHRcdCRzdHlsZV92YWwgID0gJ25vcm1hbCc7XG5cblx0XHRzd2l0Y2goICRpbmZvICkge1xuXHRcdFx0Y2FzZSAnMTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICcxMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzMwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzMwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc1MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzkwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzkwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpdGFsaWMnOlxuXHRcdFx0XHQkc3R5bGVfdmFsID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4geyB3ZWlnaHQ6ICR3ZWlnaHRfdmFsLCBzdHlsZTogJHN0eWxlX3ZhbCB9O1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRhZGQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b24nICksXG5cdFx0XHQkaW5wdXQgICAgPSAkZWxlbS5maW5kKCAnaW5wdXRbdHlwZT10ZXh0XScgKSxcblx0XHRcdCRzZXR0aW5ncyA9ICR0aGlzLm9wdGlvbnMoKSwgd3BfbWVkaWFfZnJhbWU7XG5cblx0XHQkYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB3cF9tZWRpYV9mcmFtZSApIHtcblx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcblx0XHRcdFx0dGl0bGU6ICRzZXR0aW5ncy5zZXR0aW5ncy5mcmFtZV90aXRsZSxcblx0XHRcdFx0bGlicmFyeToge1xuXHRcdFx0XHRcdHR5cGU6ICRzZXR0aW5ncy5zZXR0aW5ncy51cGxvYWRfdHlwZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRidXR0b246IHtcblx0XHRcdFx0XHR0ZXh0OiAkc2V0dGluZ3Muc2V0dGluZ3MuaW5zZXJ0X3RpdGxlLFxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAnc2VsZWN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gd3BfbWVkaWFfZnJhbWUuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKTtcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5hdHRyaWJ1dGVzLnVybCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0ZXh0YXJlYSA9ICRlbGVtLmZpbmQoICd0ZXh0YXJlYScgKTtcblx0XHQkZWxlbS5maW5kKCAnI3dwb25pb24td3AtbGluay1waWNrZXIgPiBidXR0b24nICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JHRleHRhcmVhLnZhbCggJycgKTtcblx0XHRcdGlmKCAhd2luZG93LndwTGluayApIHtcblx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0dGl0bGU6ICR3cG9uaW9uLnRleHQoICd3cF9saW5rX2Vycm9yX3RpdGxlJywgJ1dQIExpbmsgSlMgTGliIE5vdCBGb3VuZCcgKSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cud3BMaW5rLm9wZW4oICR0ZXh0YXJlYS5hdHRyKCAnaWQnICkgKTtcblx0XHR9ICk7XG5cblxuXHRcdCR0ZXh0YXJlYS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRkYXRhID0galF1ZXJ5KCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4uZXhhbXBsZV9vdXRwdXQgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4uZXhhbXBsZV9vdXRwdXQgc3Bhbi52YWx1ZScgKS5odG1sKCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3VybCcgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3VybCcgKS52YWwoICRkYXRhLmF0dHIoICdocmVmJyApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN0aXRsZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApLnZhbCggJGRhdGEudGV4dCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGFyZ2V0JyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdGFyZ2V0JyApLnZhbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnVybCBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLmF0dHIoICdocmVmJyApICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi50aXRsZSBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50aXRsZSBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi4vY29yZS9kZWJ1Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRsZXQgJGRlcCA9IHRoaXMub3B0aW9uKCAnZGVwZW5kZW5jeScgKTtcblx0XHRmb3IoIGxldCAka2V5IGluICRkZXAuY29udHJvbGxlciApIHtcblx0XHRcdGxldCAkY29udHJvbGxlciA9ICRkZXAuY29udHJvbGxlciBbICRrZXkgXSxcblx0XHRcdFx0JGNvbmRpdGlvbiAgPSAkZGVwLmNvbmRpdGlvbiBbICRrZXkgXSxcblx0XHRcdFx0JHZhbHVlICAgICAgPSAkZGVwLnZhbHVlIFsgJGtleSBdLFxuXHRcdFx0XHQkZmllbGQgICAgICA9ICdbZGF0YS1kZXBlbmQtaWQ9XCInICsgJGNvbnRyb2xsZXIgKyAnXCJdJztcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcubmVzdGFibGUgKSB7XG5cdFx0XHRcdGxldCAkSU5QVVQgPSB0aGlzLmNvbmZpZy5wYXJlbnQuZmluZCggJ1tkYXRhLWRlcGVuZC1pZD0nICsgJGNvbnRyb2xsZXIgKyAnXScgKTtcblx0XHRcdFx0aWYoICRJTlBVVC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdCRmaWVsZCA9ICdbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJHdwb25pb24uZmllbGRJRCggJElOUFVUICkgKyAnXCJdOmlucHV0Jztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5jcmVhdGVSdWxlKCAkZmllbGQsICRjb25kaXRpb24sICR2YWx1ZSApICk7XG5cdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmluY2x1ZGUoIHRoaXMuZWxlbWVudCApICk7XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCB7ICdEZXBlbmRlbmN5JzogJGRlcCwgJ05lc3RhYmxlIERlcGVuZGVuY3knOiB0aGlzLmNvbmZpZy5uZXN0YWJsZSB9ICk7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkZmlkICAgICAgICAgPSB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZmllbGQtanNpZCcgKTtcblx0XHRsZXQgJHRvb2x0aXBfa2V5ID0gZmFsc2U7XG5cdFx0aWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24taGVscCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cG9uaW9uLWhlbHAnO1xuXHRcdH0gZWxzZSBpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi13cmFwLXRvb2x0aXAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3JhcF90b29sdGlwJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJGZpZCArICd0b29sdGlwJztcblx0XHR9XG5cblx0XHRsZXQgJGFyZyA9ICggdHJ1ZSA9PT0gJHdwb25pb24udmFsaWRfanNvbiggJGZpZCApICkgPyBKU09OLnBhcnNlKCAkZmlkICkgOiB0aGlzLm9wdGlvbiggJHRvb2x0aXBfa2V5LCBmYWxzZSApO1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSB7XG5cdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcblx0XHRcdGNhbkZldGNoOiB0cnVlXG5cdFx0fTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGFyZyApIHtcblx0XHRcdGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHknICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweScgKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHktYXJncycgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH0gZWxzZSBpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICd0aXBweS1hcmdzJyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ3RpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggJGFyZyApIHtcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcblx0XHRcdGlmKCAkYXJnLmltYWdlICE9PSB1bmRlZmluZWQgJiYgJGFyZy5pbWFnZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdGxldCAkaW1hZ2UgICAgICAgICAgPSAkYXJnLmltYWdlO1xuXHRcdFx0XHQkYXJnLmludGVyYWN0aXZlICAgID0gdHJ1ZTtcblx0XHRcdFx0JGFyZy5jb250ZW50ICAgICAgICA9ICdMb2FkaW5nLi4uJztcblx0XHRcdFx0Ly8kYXJnLmh0bWwgICAgICAgICAgID0gJyN3cG90cGltZyc7XG5cdFx0XHRcdCRhcmcudXBkYXRlRHVyYXRpb24gPSAyMDAwO1xuXHRcdFx0XHQkYXJnLm9uU2hvdyAgICAgICAgID0gYXN5bmMgZnVuY3Rpb24oIHRpcCApIHtcblx0XHRcdFx0XHRpZiggc3RhdGUuaXNGZXRjaGluZyB8fCAhc3RhdGUuY2FuRmV0Y2ggKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoICAgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCAkaW1hZ2UgKTtcblx0XHRcdFx0XHRcdGNvbnN0IGJsb2IgICAgID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXHRcdFx0XHRcdFx0Y29uc3QgdXJsICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdFx0XHRpZiggdGlwLnN0YXRlLmlzVmlzaWJsZSApIHtcblx0XHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICc8ZGl2IHN0eWxlPVwibWluLXdpZHRoOjI1cHg7bWluLWhlaWdodDoyNXB4O1wiPjxpbWcgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1wiIHNyYz1cIicgKyB1cmwgKyAnXCIvPjwvZGl2PicgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoIGBGZXRjaCBmYWlsZWQuICR7ZX1gICk7XG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcub25IaWRkZW4gICAgICAgPSAoIHRpcCApID0+IHtcblx0XHRcdFx0XHRzdGF0ZS5jYW5GZXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICdMb2FkaW5nLi4uJyApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLnBvcHBlck9wdGlvbnMgID0ge1xuXHRcdFx0XHRcdG1vZGlmaWVyczoge1xuXHRcdFx0XHRcdFx0cHJldmVudE92ZXJmbG93OiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aGlkZToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYXJnID0ge307XG5cdFx0fVxuXG5cdFx0ZGVsZXRlICRhcmcuaW1hZ2U7XG5cdFx0dGhpcy5lbGVtZW50LnRpcHB5KCB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAkdG9vbHRpcF9rZXkgKSApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRpbWFnZSA9ICggaXNfdW5kZWZpbmVkKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICkgKSApID8gdGhpcy5lbGVtZW50LmF0dHIoICdzcmMnICkgOiB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICk7XG5cdFx0c3dhbCgge1xuXHRcdFx0aW1hZ2VVcmw6ICRpbWFnZSxcblx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0YmFja2Ryb3A6IGByZ2JhKDAsMCwwLDAuNDQpYFxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQsIHJhbmRfbWQ1IH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRtY2VfZWRpdG9yICA9IHRpbnlNQ0VQcmVJbml0Lm1jZUluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JHF1aWNrX3RhZ3MgID0gdGlueU1DRVByZUluaXQucXRJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRORVdfSUQgICAgICA9ICd3cG9uaW9uLXdwLWVkaXRvci0nICsgcmFuZF9tZDUoKSxcblx0XHRcdFx0JHRleHRBcmVhICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5jbG9uZSgpLFxuXHRcdFx0XHQkYWN0dWFsX0lEICAgPSAkdGV4dEFyZWEuYXR0ciggJ2lkJyApLFxuXHRcdFx0XHQkYWN0dWFsX2h0bWwgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoKSxcblx0XHRcdFx0JHJlZ2V4ICAgICAgID0gbmV3IFJlZ0V4cCggJGFjdHVhbF9JRCwgXCJnXCIgKTtcblx0XHRcdCRhY3R1YWxfaHRtbCAgICAgPSAkYWN0dWFsX2h0bWwucmVwbGFjZSggJHJlZ2V4LCAkTkVXX0lEICk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCggJGFjdHVhbF9odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLnBhcmVudCgpLmFwcGVuZCggJHRleHRBcmVhICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhOm5vdCgjJyArICRhY3R1YWxfSUQgKyAnKScgKS5yZW1vdmUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuYXR0ciggJ2lkJywgJE5FV19JRCApO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJG1jZV9lZGl0b3IgKSApIHtcblx0XHRcdFx0JG1jZV9lZGl0b3Iuc2VsZWN0b3IgPSAnIycgKyAkTkVXX0lEO1xuXHRcdFx0XHR0aW55bWNlLmluaXQoICRtY2VfZWRpdG9yICk7XG5cdFx0XHRcdHRpbnlNQ0UuZXhlY0NvbW1hbmQoICdtY2VBZGRFZGl0b3InLCBmYWxzZSwgJyMnICsgJE5FV19JRCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHF1aWNrX3RhZ3MgKSApIHtcblx0XHRcdFx0JHF1aWNrX3RhZ3MuaWQgPSAkTkVXX0lEO1xuXHRcdFx0XHRxdWlja3RhZ3MoICRxdWlja190YWdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBhcnJheV9tZXJnZSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJyNidWxrX2VkaXQnLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGZpbmFsX2FyZ3MgPSB7IHBvc3RfaWRzOiBbXSB9LFxuXHRcdFx0XHQkYnVsa19lZGl0ICA9ICQoICcjYnVsay1lZGl0JyApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcjYnVsay10aXRsZXMnICkuY2hpbGRyZW4oKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JGZpbmFsX2FyZ3MucG9zdF9pZHMucHVzaCggJCggdGhpcyApLmF0dHIoICdpZCcgKS5yZXBsYWNlKCAvXih0dGxlKS9pLCAnJyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRidWxrX2VkaXQuZmluZCggJy53cG9uaW9uLXF1aWNrLWVkaXQtZmllbGRzZXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzID0gYXJyYXlfbWVyZ2UoICQoIHRoaXMgKS5zZXJpYWxpemVPYmplY3QoKSwgJGZpbmFsX2FyZ3MgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICdzYXZlLWJ1bGstZWRpdCcsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGFzeW5jOiBmYWxzZSxcblx0XHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiAkZmluYWxfYXJncyxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuLi9jb3JlL21vZHVsZSc7XG5cbmNsYXNzIFdQT25pb25fTWV0YWJveF9Nb2R1bGUgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdG1vZHVsZV9pbml0KCkge1xuXHRcdHRoaXMubWVudSgpO1xuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJ2gyLmFqYXgtY29udGFpbmVyIGJ1dHRvbicsIHRoaXMuc2F2ZV9oYW5kbGVyICk7XG5cdH1cblxuXG5cdG1lbnUoKSB7XG5cdFx0bGV0ICRlbGVtID0gdGhpcy5lbGVtZW50O1xuXHRcdCRlbGVtLm9uKCAnY2xpY2snLCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGxpIGEnLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2Ryb3Bkb3duJyApICkge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLmlzKCAnOnZpc2libGUnICkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLnNsaWRlVG9nZ2xlKCAnZmFzdCcgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGxpIHVsJyApLnNsaWRlVXAoICdmYXN0JyApO1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkaHJlZiAgICAgICAgICAgPSAkd3Bvbmlvbl9oZWxwZXIudXJsX3BhcmFtcyggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaHJlZicgKSApLFxuXHRcdFx0XHRcdCRwYXJlbnQgICAgICAgICA9ICd3cG9uaW9uLXRhYi0nICsgJGhyZWZbICdwYXJlbnQtaWQnIF0sXG5cdFx0XHRcdFx0JHNlY3Rpb24gICAgICAgID0gKCAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gIT09IHVuZGVmaW5lZCApID8gJHBhcmVudCArICctJyArICRocmVmWyAnc2VjdGlvbi1pZCcgXSA6IGZhbHNlLFxuXHRcdFx0XHRcdCRwYXJlbnRfYWN0aXZlcyA9ICRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1wYXJlbnQtd3JhcHMnICksXG5cdFx0XHRcdFx0JGN1cnJlbnQgICAgICAgID0gJGVsZW0uZmluZCggJ2RpdiMnICsgJHBhcmVudCApO1xuXG5cdFx0XHRcdCRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1zZWN0aW9uLXdyYXBzJyApLmhpZGUoKTtcblx0XHRcdFx0JHBhcmVudF9hY3RpdmVzLmhpZGUoKTtcblxuXHRcdFx0XHRpZiggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgJiYgJGhyZWZbICdwYXJlbnQtaWQnIF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHQkY3VycmVudC5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJyBkaXYjJyArICRzZWN0aW9uICkuc2hvdygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JGN1cnJlbnQuc2hvdygpO1xuXG5cdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgYS5hY3RpdmUgJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlICcgKTtcblx0XHRcdFx0JCggdGhpcyApLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51ID4gbGkgPiBhJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGFbZGF0YS13cG9uaW9uLWlkPVwid3Bvbmlvbl9tZW51XycgKyAkaHJlZlsgJ3BhcmVudC1pZCcgXSArICdcIl0nIClcblx0XHRcdFx0XHQgLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cblx0c2F2ZV9oYW5kbGVyKCBlICkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHRoaXMgICA9IHRoaXMsXG5cdFx0XHQkcGFyZW50ID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHQkYmFzZSAgID0gJHBhcmVudC5wYXJlbnQoKS5wYXJlbnQoKSxcblx0XHRcdCRoaWRkZW4gPSAkcGFyZW50LmZpbmQoICdkaXYud3Bvbmlvbi1tZXRhYm94LXNlY3VyZS1kYXRhJyApO1xuXG5cdFx0JGJhc2UuYmxvY2soIHsgbWVzc2FnZTogbnVsbCwgb3ZlcmxheUNTUzogeyBiYWNrZ3JvdW5kOiAnIzAwMCcsIG9wYWNpdHk6IDAuNyB9IH0gKTtcblxuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnaWQnICkgKTtcblx0XHR9ICk7XG5cdFx0bGV0ICRmaWVsZHMgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoICc6aW5wdXQnICk7XG5cdFx0bGV0ICR2YWx1ZXMgPSAkZmllbGRzLnNlcmlhbGl6ZSgpO1xuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLnJlbW92ZUF0dHIoICduYW1lJyApO1xuXG5cdFx0JHdwb25pb24uYWpheCggJ3NhdmVfbWV0YWJveCcsIHsgZGF0YTogJHZhbHVlcyB9LCBmdW5jdGlvbiggcmVzICkge1xuXHRcdFx0JGJhc2UuaHRtbCggcmVzICk7XG5cdFx0XHQkYmFzZS51bmJsb2NrKCk7XG5cdFx0XHR3cG9uaW9uX2ZpZWxkKCAkYmFzZS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIHdwICkgPT4ge1xuXHQkKCBmdW5jdGlvbigpIHtcblx0XHQkKCAnZGl2LnBvc3Rib3gud3Bvbmlvbi1tZXRhYm94JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fTWV0YWJveF9Nb2R1bGUoICQoIHRoaXMgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIFdQT25pb25fUXVpY2tfRWRpdCBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5wb3N0X2lkID0gdGhpcy5jb250eHQ7XG5cdFx0bGV0ICRpZCAgICAgID0gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICkgKyAnXycgKyB0aGlzLnBvc3RfaWQ7XG5cdFx0dGhpcy52YWx1ZXMgID0gJHdwb25pb24uZmllbGRBcmdzKCAkaWQsIGZhbHNlICk7XG5cblx0XHRpZiggdGhpcy52YWx1ZXMuaHRtbCApIHtcblx0XHRcdHRoaXMudmFsdWVzLmh0bWwgPSBqUXVlcnkoIHRoaXMudmFsdWVzLmh0bWwgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5odG1sKCB0aGlzLnZhbHVlcy5odG1sLmZpbmQoICc+IGRpdicgKSApO1xuXHRcdH1cblxuXHRcdHdwb25pb25fZmllbGQoIHRoaXMuZWxlbWVudCApLnJlbG9hZCgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdGxldCAkbGlzdCA9ICQoICcjdGhlLWxpc3QnICk7XG5cdFx0aWYoICRsaXN0Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkbGlzdC5vbiggJ2NsaWNrJywgJy5lZGl0aW5saW5lJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBwb3N0X2lkID0galF1ZXJ5KCB0aGlzICkuY2xvc2VzdCggJ3RyJyApLmF0dHIoICdpZCcgKTtcblx0XHRcdFx0cG9zdF9pZCAgICAgPSBwb3N0X2lkLnJlcGxhY2UoICdwb3N0LScsICcnICk7XG5cdFx0XHRcdCQoICd0ciNlZGl0LScgKyBwb3N0X2lkICkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRuZXcgV1BPbmlvbl9RdWlja19FZGl0KCBqUXVlcnkoIHRoaXMgKSwgcG9zdF9pZCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3dpbmRvd19hcmcgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdG9yIGZyb20gJy4vY29yZS92YWxpZGF0aW9uJztcblxud2luZG93Lndwb25pb25fbWV0YWJveF9tb2R1bGUgPSByZXF1aXJlKCAnLi9tb2R1bGVzL21ldGFib3gnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uX2J1bGtfZWRpdCAgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9idWxrLWVkaXQnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uX3F1aWNrX2VkaXQgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9xdWljay1lZGl0JyApLmRlZmF1bHQ7XG4vL3dpbmRvdy53cG9uaW9uX2N1c3RvbWl6ZXJfbW9kdWxlID0gcmVxdWlyZSggJy4vbW9kdWxlcy9jdXN0b21pemVyJyApLmRlZmF1bHQ7XG53aW5kb3cuJHdwb25pb24gICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvY29yZScgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uX2RlYnVnICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2RlYnVnJyApLmRlZmF1bHQ7XG53aW5kb3cuJHdwb25pb25faGVscGVyICAgICAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApO1xud2luZG93Lndwb25pb25fbmV3X2ZpZWxkICAgICAgPSAoICRjbGFzcyApID0+ICggaXNfd2luZG93X2FyZyggJGNsYXNzICkgKSA/IHdpbmRvd1sgJGNsYXNzIF0gOiBmYWxzZTtcbndpbmRvdy53cG9uaW9uX2ZpZWxkICAgICAgICAgID0gKCAkZWxlbSwgJGNvbnR4dCA9IHt9ICkgPT4gbmV3IFdQT25pb25fRmllbGQoICRlbGVtLCAkY29udHh0ICk7XG53aW5kb3cud3Bvbmlvbl9tb2RhbCAgICAgICAgICA9IHJlcXVpcmUoICcuLi92ZW5kb3JzL2JhY2tib25lLW1vZGFsJyApLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gKCAoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCAkLCAkd3BvICkgPT4ge1xuXHRsZXQgJHdwX2hvb2sgPSB3cC5ob29rcztcblxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoICgpID0+IHtcblx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2luaXQnICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZHMgPSAkd3BfaG9vay5hcHBseUZpbHRlcnMoICd3cG9uaW9uX2ZpZWxkc19mdW5jdGlvbnMnLCB7XG5cdFx0XHR0ZXh0OiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dCcgKS5kZWZhdWx0LFxuXHRcdFx0dGV4dGFyZWE6IHJlcXVpcmUoICcuL2ZpZWxkcy90ZXh0YXJlYScgKS5kZWZhdWx0LFxuXHRcdFx0YmFja2dyb3VuZDogcmVxdWlyZSggJy4vZmllbGRzL2JhY2tncm91bmQnICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3NlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRcdFx0c3dpdGNoZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zd2l0Y2hlcicgKS5kZWZhdWx0LFxuXHRcdFx0Y29sb3JfcGFsZXR0ZTogcmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BhbGV0dGUnICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRcdFx0c2VsZWN0MjogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdDInICkuZGVmYXVsdCxcblx0XHRcdGNob3NlbjogcmVxdWlyZSggJy4vZmllbGRzL2Nob3NlbicgKS5kZWZhdWx0LFxuXHRcdFx0c2VsZWN0aXplOiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0aXplJyApLmRlZmF1bHQsXG5cdFx0XHRpY29uX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2ljb25fcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRmb250X3NlbGVjdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvZm9udF9zZWxlY3RvcicgKS5kZWZhdWx0LFxuXHRcdFx0YWNjb3JkaW9uOiByZXF1aXJlKCAnLi9maWVsZHMvYWNjb3JkaW9uJyApLmRlZmF1bHQsXG5cdFx0XHRncm91cDogcmVxdWlyZSggJy4vZmllbGRzL2dyb3VwJyApLmRlZmF1bHQsXG5cdFx0XHR3cF9lZGl0b3I6IHJlcXVpcmUoICcuL2ZpZWxkcy93cF9lZGl0b3InICkuZGVmYXVsdCxcblx0XHRcdHJlbG9hZF93cF9lZGl0b3I6IHJlcXVpcmUoICcuL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvcicgKS5kZWZhdWx0LFxuXHRcdFx0ZmllbGRzZXQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9maWVsZHNldCcgKS5kZWZhdWx0LFxuXHRcdFx0aW5wdXRtYXNrOiByZXF1aXJlKCAnLi9maWVsZHMvaW5wdXRtYXNrJyApLmRlZmF1bHQsXG5cdFx0XHR3cF9saW5rczogcmVxdWlyZSggJy4vZmllbGRzL3dwX2xpbmtzJyApLmRlZmF1bHQsXG5cdFx0XHRjaGVja2JveF9yYWRpbzogcmVxdWlyZSggJy4vZmllbGRzL2NoZWNrYm94X3JhZGlvJyApLmRlZmF1bHQsXG5cdFx0XHRrZXl2YWx1ZV9wYWlyOiByZXF1aXJlKCAnLi9maWVsZHMva2V5dmFsdWVfcGFpcicgKS5kZWZhdWx0LFxuXHRcdFx0Y29sb3JfcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRkYXRlX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2RhdGVfcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRnYWxsZXJ5OiByZXF1aXJlKCAnLi9maWVsZHMvZ2FsbGVyeScgKS5kZWZhdWx0LFxuXHRcdFx0aW1hZ2VfcG9wdXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvaW1hZ2VfcG9wdXAnICkuZGVmYXVsdCxcblx0XHRcdHVwbG9hZDogcmVxdWlyZSggJy4vZmllbGRzL3VwbG9hZCcgKS5kZWZhdWx0LFxuXHRcdFx0aW1hZ2VfdXBsb2FkOiByZXF1aXJlKCAnLi9maWVsZHMvaW1hZ2VfdXBsb2FkJyApLmRlZmF1bHQsXG5cdFx0XHRqcXVlcnlfdGFiOiByZXF1aXJlKCAnLi9maWVsZHMvanF1ZXJ5X3RhYicgKS5kZWZhdWx0LFxuXHRcdFx0ZmllbGRfdG9vbHRpcDogcmVxdWlyZSggJy4vaGVscGVycy9maWVsZF90b29sdGlwJyApLmRlZmF1bHQsXG5cdFx0XHRjbG9uZV9lbGVtZW50OiByZXF1aXJlKCAnLi9maWVsZHMvY2xvbmVfZWxlbWVudCcgKS5kZWZhdWx0LFxuXHRcdFx0c29ydGVyOiByZXF1aXJlKCAnLi9maWVsZHMvc29ydGVyJyApLmRlZmF1bHQsXG5cdFx0XHRnb29nbGVfbWFwczogcmVxdWlyZSggJy4vZmllbGRzL2dvb2dsZV9tYXBzJyApLmRlZmF1bHQsXG5cdFx0XHR0eXBvZ3JhcGh5OiByZXF1aXJlKCAnLi9maWVsZHMvdHlwb2dyYXBoeScgKS5kZWZhdWx0LFxuXHRcdFx0b2VtYmVkOiByZXF1aXJlKCAnLi9maWVsZHMvb2VtYmVkJyApLmRlZmF1bHQsXG5cdFx0XHRoZWFkaW5nOiByZXF1aXJlKCAnLi9maWVsZHMvaGVhZGluZycgKS5kZWZhdWx0LFxuXHRcdFx0c3ViaGVhZGluZzogcmVxdWlyZSggJy4vZmllbGRzL3N1YmhlYWRpbmcnICkuZGVmYXVsdCxcblx0XHRcdGphbWJvX2NvbnRlbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9qYW1ib19jb250ZW50JyApLmRlZmF1bHQsXG5cdFx0XHRub3RpY2U6IHJlcXVpcmUoICcuL2ZpZWxkcy9ub3RpY2UnICkuZGVmYXVsdCxcblx0XHRcdGNvbnRlbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb250ZW50JyApLmRlZmF1bHQsXG5cdFx0XHRiYWNrdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrdXAnICkuZGVmYXVsdCxcblx0XHR9ICk7XG5cdFx0JHdwby5zZXR0aW5nc19hcmdzICAgID0gJHdwby53aW5kb3dBcmdzKCAnd3Bvbmlvbl9jb3JlJywge30gKTtcblx0XHQkd3BvLnRleHQgICAgICAgICAgICAgPSAkd3BvLndpbmRvd0FyZ3MoICd3cG9uaW9uX2lsOG4nLCB7fSApO1xuXHRcdCR3cG8uZGVidWdfaW5mbyAgICAgICA9IG51bGw7XG5cdFx0JHdwby5maWVsZF9kZWJ1Z19pbmZvID0gbnVsbDtcblxuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlID4gc3Ryb25nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcblx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LWRvd24nICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctcmlnaHQnICk7XG5cdFx0fSApO1xuXG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cblx0XHQvKipcblx0XHQgKiBUcmlnZ2VycyBIb29rIFdpdGggV2lkZ2V0cy5cblx0XHQgKi9cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnd2lkZ2V0LWFkZGVkIHdpZGdldC11cGRhdGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkd2lkZ2V0ICkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJHdpZGdldCApO1xuXHRcdFx0d3Bvbmlvbl9maWVsZCggJHdpZGdldCApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fdGhlbWVfaW5pdCcsICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZW5kZXJzIFZhbGlkYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdG5ldyBXUE9uaW9uX1ZhbGlkYXRvcigpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhbmRsZXMgRmllbGRzIGluaXQuXG5cdFx0XHQgKi9cblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJCggdGhpcyApICk7XG5cdFx0XHRcdHdwb25pb25fZmllbGQoICQoIHRoaXMgKSApLnJlbG9hZCgpO1xuXHRcdFx0fSApO1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXG5cdFx0JHdwby5sb2FkaW5nX3NjcmVlbiggJHdwb2ZfZGl2LCBmYWxzZSApO1xuXHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0JyApO1xuXHR9ICkgKTtcblx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2xvYWRlZCcgKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgd3AsIGpRdWVyeSwgJHdwb25pb24gKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9qcy9jb3JlL2NvcmUnO1xuXG5jb25zdCBXUE9uaW9uX1dQX01vZGFsID0gQmFja2JvbmUuVmlldy5leHRlbmQoIHtcblx0dGVtcGxhdGVzOiB7fSxcblxuXHRldmVudHM6IHtcblx0XHRcImNsaWNrIC5tZWRpYS1tb2RhbC1jbG9zZVwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tY2FuY2VsXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1va1wiOiBcInNhdmVNb2RhbFwiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLW1lbnUgYVwiOiBcImhhbmRsZV9sZWZ0X21lbnVfY2xpY2tcIixcblx0XHRcImNsaWNrIC5tZWRpYS1yb3V0ZXIgYVwiOiBcImhhbmRsZV90YWJfY2xpY2tcIixcblx0fSxcblxuXHRhY3RpdmVfcGFnZTogbnVsbCxcblxuXHRhY3RpdmVfc2VjdGlvbjogbnVsbCxcblxuXHRpbml0aWFsaXplOiAoIG9wdGlvbnMgKSA9PiB7XG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IGZhbHNlLFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHRcdGh0bWw6IGZhbHNlLFxuXHRcdH0sIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMubGVmdF9tZW51ID0gb3B0aW9uc1sgJ2xlZnRfbWVudScgXTtcblx0XHR0aGlzLmh0bWwgICAgICA9IG9wdGlvbnNbICdodG1sJyBdO1xuXHRcdHRoaXMuaGlkZV9tZW51ID0gb3B0aW9uc1sgJ2hpZGVfbWVudScgXTtcblxuXHRcdF8uYmluZEFsbCggdGhpcywgJ3JlbmRlcicsICdwcmVzZXJ2ZUZvY3VzJywgJ2Nsb3NlTW9kYWwnLCAnc2F2ZU1vZGFsJywgJ2RvTm90aGluZycgKTtcblx0XHR0aGlzLmluaXRfdGVtcGxhdGVzKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblxuXHRpbml0X3RlbXBsYXRlczogKCkgPT4ge1xuXHRcdGxldCAkbSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdtb2RhbCcgKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0gID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnZnJhbWUtbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3JvdXRlci1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy53aW5kb3cgICAgICAgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnaHRtbCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdwYWdlX2NvbnRlbnQnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnc2VjdGlvbl9jb250ZW50JyBdICk7XG5cdH0sXG5cblx0cmVuZGVyOiAoKSA9PiB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdHRoaXMuJGVsLmF0dHIoICd0YWJpbmRleCcsICcwJyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMud2luZG93KCkgKTtcblxuXHRcdGlmKCB0aGlzLmxlZnRfbWVudSApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5sZWZ0X21lbnUsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0oIHtcblx0XHRcdFx0XHR1cmw6IGtleSxcblx0XHRcdFx0XHRuYW1lOiB2YWx1ZSxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRpZiggdGhpcy5odG1sICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmh0bWwsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0bGV0ICRjb250ZW50ID0gJCggdGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50KCB7XG5cdFx0XHRcdFx0aWQ6IGtleSxcblx0XHRcdFx0XHR0aXRsZTogdmFsdWVbICd0aXRsZScgXSxcblx0XHRcdFx0XHRodG1sOiB2YWx1ZVsgJ2h0bWwnIF0sXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzZWN0aW9ucycgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdF8uZWFjaCggdmFsdWVbICdzZWN0aW9ucycgXSwgKCB2YWwsIGsgKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJF9jb250ZW50ID0galF1ZXJ5KCB0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRcdFx0XHRpZDoga2V5ICsgXCJfXCIgKyBrLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiB2YWxbICd0aXRsZScgXSxcblx0XHRcdFx0XHRcdFx0XHRodG1sOiB2YWxbICdodG1sJyBdLFxuXHRcdFx0XHRcdFx0XHR9ICkgKSxcblx0XHRcdFx0XHRcdFx0JF9tZW51ICAgID0gdGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSggeyB1cmw6IGssIG5hbWU6IHZhbFsgJ3RpdGxlJyBdIH0gKTtcblxuXHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbFsgJ3NpZGViYXInIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLWNvbnRlbnQnICkuYXBwZW5kKCAkX2NvbnRlbnQgKTtcblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtcm91dGVyJyApLmFwcGVuZCggJF9tZW51ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzaWRlYmFyJyBdICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbHVlWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0JHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0aGlzLiQoICcubWVkaWEtbWVudSBhOmZpcnN0LWNoaWxkJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IC53cG9uaW9uLW1vZGFsLWNvbnRlbnQ6bm90KC5oaWRkZW4pIC5tZWRpYS1mcmFtZS1yb3V0ZXIgYTpmaXJzdC1jaGlsZCcgKVxuXHRcdFx0LnRyaWdnZXIoICdjbGljaycgKTtcblxuXHRcdGlmKCB0aGlzLmhpZGVfbWVudSA9PT0gdHJ1ZSApIHtcblx0XHRcdHRoaXMuJCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtbWVudScgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub24oIFwiZm9jdXNpblwiLCB0aGlzLnByZXNlcnZlRm9jdXMgKTtcblx0XHRqUXVlcnkoICdib2R5JyApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSApLmFwcGVuZCggdGhpcy4kZWwgKTtcblx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHR9LFxuXG5cdGhhbmRsZV9sZWZ0X21lbnVfY2xpY2s6ICggZSApID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0YXJnZXQgPSAkKCBlLnRhcmdldCApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1tZW51IGEuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0bGV0ICRzaG93X3RhcmdldCA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2IycgKyAkdGFyZ2V0LmF0dHIoICdocmVmJyApICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0JHNob3dfdGFyZ2V0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuXG5cdFx0aWYoICRzaG93X3RhcmdldC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5oYXNDbGFzcyggJ2hpZGRlbicgKSApIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkucmVtb3ZlQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9XG5cdFx0dGhpcy5hY3RpdmVfcGFnZSAgICA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9IG51bGw7XG5cdH0sXG5cblx0aGFuZGxlX3RhYl9jbGljazogKCBlICkgPT4ge1xuXHRcdGxldCAkdGFyZ2V0ICAgICAgICAgPSAkKCBlLnRhcmdldCApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkcGFnZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUtbWVudSBhLmFjdGl2ZScgKS5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJGJhc2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKTtcblxuXG5cdFx0JHRhcmdldC5wYXJlbnQoKS5maW5kKCAnLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCRiYXNlLmZpbmQoICcud3Bvbmlvbi1zZWN0aW9uLW1vZGFsLWNvbnRlbnQnICkuaGlkZSgpO1xuXHRcdCRiYXNlLmZpbmQoICcjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKyAnXycgKyB0aGlzLmFjdGl2ZV9zZWN0aW9uICkuc2hvdygpO1xuXHR9LFxuXG5cdHByZXNlcnZlRm9jdXM6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRpZiggdGhpcy4kZWxbIDAgXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsLmhhcyggZS50YXJnZXQgKS5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHRcdH1cblx0fSxcblxuXHRjbG9zZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vZmYoIFwiZm9jdXNpblwiICk7XG5cdFx0alF1ZXJ5KCBcImJvZHlcIiApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiYXV0b1wiIH0gKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9LFxuXG5cdHNhdmVNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCggZSApO1xuXHR9LFxuXG5cdGRvTm90aGluZzogZnVuY3Rpb24oIGUgKSB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRvcHRpb25zID0ge30gKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGlkOiBmYWxzZSxcblx0XHRcdGRhdGE6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1tb2RhbCcsXG5cdFx0XHRtb2RhbDoge30sXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdH0sICRvcHRpb25zICk7XG5cblx0XHRuZXcgV1BPbmlvbl9XUF9Nb2RhbCggXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogdGhpcy5nZXRfbGVmdF9tZW51KCksXG5cdFx0XHRodG1sOiB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLFxuXHRcdFx0aGlkZV9tZW51OiB0aGlzLm9wdGlvbnNbICdoaWRlX21lbnUnIF0sXG5cdFx0fSwgdGhpcy5vcHRpb25zWyAnbW9kYWwnIF0gKSApO1xuXHR9XG5cblx0Z2V0X2xlZnRfbWVudSgpIHtcblx0XHRsZXQgJHJldHVybiA9IGZhbHNlO1xuXHRcdGlmKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdICkge1xuXHRcdFx0JHJldHVybiA9IHt9O1xuXG5cdFx0XHRfLmVhY2goIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sICggJGRhdGEsICRrZXkgKSA9PiB7XG5cdFx0XHRcdCRyZXR1cm5bICRrZXkgXSA9ICggdHlwZW9mICRkYXRhWyAnbWVudV90aXRsZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/ICRkYXRhWyAnbWVudV90aXRsZScgXSA6ICRkYXRhWyAndGl0bGUnIF07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==