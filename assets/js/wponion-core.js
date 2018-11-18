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
			oembed: __webpack_require__(/*! ./fields/oembed */ "./src/js/fields/oembed.js").default,
			heading: __webpack_require__(/*! ./fields/heading */ "./src/js/fields/heading.js").default,
			subheading: __webpack_require__(/*! ./fields/subheading */ "./src/js/fields/subheading.js").default,
			jambo_content: __webpack_require__(/*! ./fields/jambo_content */ "./src/js/fields/jambo_content.js").default,
			notice: __webpack_require__(/*! ./fields/notice */ "./src/js/fields/notice.js").default,
			content: __webpack_require__(/*! ./fields/content */ "./src/js/fields/content.js").default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvYXJyYXkvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9pbmZvL2luaV9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2ludHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfYm9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC94bWwvdXRmOF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sX2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9fd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Nsb25lX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jb3B5X3RvX2NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGV2aWNlX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGlmZl9kYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19hZnRlcl9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2JlZm9yZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19zYW1lX2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdGFiX2ZvY3VzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3dpbmRvd19hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvb2tnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9waXBlX2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9wbGFpbl9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcXVlcnlfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3JhbmRfbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3Njcm9sbF9wb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3RvX3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90aW1lX3Rha2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90b19qc19mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3VybF9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdmFsaWRhdGVTaW5nbGVKU0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvd2luZG93X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93cmFwX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2RhdGVfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9mb250X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2dvb2dsZV9tYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9oZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaWNvbl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qYW1ib19jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0aXplLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3ViaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZmllbGRfdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9pbWFnZV9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2J1bGstZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXRhYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1aWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dwb25pb24tY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9ycy9iYWNrYm9uZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiJdLCJuYW1lcyI6WyJKU19QYXJzZV9BcmdzIiwiJGFyZ3MiLCIkZGVmYXVsdHMiLCIkaXNfbmVzdGVkIiwiYXJncyIsImRlZmF1bHRzIiwibmVzdGVkIiwicGFyc2UiLCIkX2tleSIsIiRpc19kZWVwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5X21lcmdlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcmdsIiwibGVuZ3RoIiwiYXJnIiwicmV0T2JqIiwiayIsImFyZ2lsIiwiaiIsImkiLCJjdCIsInRvU3RyIiwiT2JqZWN0IiwidG9TdHJpbmciLCJyZXRBcnIiLCJjb25jYXQiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJhcnJheV9tZXJnZV9yZWN1cnNpdmUiLCJhcnIxIiwiYXJyMiIsImFycmF5TWVyZ2UiLCJyZXF1aXJlIiwiaWR4IiwicHVzaCIsImFycmF5X3ZhbHVlcyIsImlucHV0IiwidG1wQXJyIiwia2V5IiwiY291bnQiLCJtaXhlZFZhciIsIm1vZGUiLCJjbnQiLCJpbl9hcnJheSIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJnU3RyaWN0Iiwic3RyaWN0IiwibWljcm90aW1lIiwiZ2V0QXNGbG9hdCIsInMiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRpbWluZyIsIm5hdmlnYXRpb25TdGFydCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwidGltZSIsImZsb29yIiwiY2FsbF91c2VyX2Z1bmMiLCJjYiIsInBhcmFtZXRlcnMiLCJjYWxsVXNlckZ1bmNBcnJheSIsImNhbGxfdXNlcl9mdW5jX2FycmF5IiwiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsImZ1bmMiLCJzY29wZSIsInZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuIiwibWF0Y2giLCJGdW5jdGlvbiIsImV2YWwiLCJFcnJvciIsImFwcGx5IiwiZnVuY3Rpb25fZXhpc3RzIiwiZnVuY05hbWUiLCJpbmlfZ2V0IiwidmFybmFtZSIsIiRsb2N1dHVzIiwicGhwIiwiaW5pIiwibG9jYWxfdmFsdWUiLCJ1bmRlZmluZWQiLCJleHBsb2RlIiwiZGVsaW1pdGVyIiwic3RyaW5nIiwibGltaXQiLCJzcGxpdCIsImpvaW4iLCJzcGxpY2UiLCJpbXBsb2RlIiwiZ2x1ZSIsInBpZWNlcyIsInJldFZhbCIsInRHbHVlIiwibWQ1Iiwic3RyIiwiaGFzaCIsImNyeXB0byIsIm1kNXN1bSIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJlIiwidXRmOEVuY29kZSIsInhsIiwiX3JvdGF0ZUxlZnQiLCJsVmFsdWUiLCJpU2hpZnRCaXRzIiwiX2FkZFVuc2lnbmVkIiwibFgiLCJsWSIsImxYNCIsImxZNCIsImxYOCIsImxZOCIsImxSZXN1bHQiLCJfRiIsIngiLCJ5IiwieiIsIl9HIiwiX0giLCJfSSIsIl9GRiIsImEiLCJiIiwiYyIsImQiLCJhYyIsIl9HRyIsIl9ISCIsIl9JSSIsIl9jb252ZXJ0VG9Xb3JkQXJyYXkiLCJsV29yZENvdW50IiwibE1lc3NhZ2VMZW5ndGgiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAxIiwibE51bWJlck9mV29yZHNUZW1wMiIsImxOdW1iZXJPZldvcmRzIiwibFdvcmRBcnJheSIsImxCeXRlUG9zaXRpb24iLCJsQnl0ZUNvdW50IiwiY2hhckNvZGVBdCIsIl93b3JkVG9IZXgiLCJ3b3JkVG9IZXhWYWx1ZSIsIndvcmRUb0hleFZhbHVlVGVtcCIsImxCeXRlIiwibENvdW50Iiwic3Vic3RyIiwiQUEiLCJCQiIsIkNDIiwiREQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJ0ZW1wIiwidG9Mb3dlckNhc2UiLCJwYXJzZV9zdHIiLCJhcnJheSIsInN0ckFyciIsIlN0cmluZyIsInJlcGxhY2UiLCJzYWwiLCJwIiwibGFzdE9iaiIsImNociIsInRtcCIsInZhbHVlIiwicG9zdExlZnRCcmFja2V0UG9zIiwia2V5cyIsImtleXNMZW4iLCJfZml4U3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckF0IiwiaW5kZXhPZiIsInN0cl9yZXBsYWNlIiwic2VhcmNoIiwic3ViamVjdCIsImNvdW50T2JqIiwicmVwbCIsInNsIiwiZmwiLCJmIiwiciIsInJhIiwic2EiLCJzdHJ0b2xvd2VyIiwic3RydG91cHBlciIsInRvVXBwZXJDYXNlIiwiYmFzZTY0X2RlY29kZSIsImVuY29kZWREYXRhIiwiZGVjb2RlVVRGOHN0cmluZyIsIm1hcCIsImF0b2IiLCJCdWZmZXIiLCJiNjQiLCJvMSIsIm8yIiwibzMiLCJoMSIsImgyIiwiaDMiLCJoNCIsImJpdHMiLCJkZWMiLCJmcm9tQ2hhckNvZGUiLCJiYXNlNjRfZW5jb2RlIiwic3RyaW5nVG9FbmNvZGUiLCJlbmNvZGVVVEY4c3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG9Tb2xpZEJ5dGVzIiwicDEiLCJidG9hIiwiZW5jIiwiYm9vbHZhbCIsImlzQXJyYXkiLCJlbXB0eSIsInVuZGVmIiwibGVuIiwiZW1wdHlWYWx1ZXMiLCJmbG9hdHZhbCIsInBhcnNlRmxvYXQiLCJpbnR2YWwiLCJiYXNlIiwidHlwZSIsImlzTmFOIiwiaXNGaW5pdGUiLCJjZWlsIiwiaXNfYXJyYXkiLCJfZ2V0RnVuY05hbWUiLCJmbiIsIm5hbWUiLCJleGVjIiwiX2lzQXJyYXkiLCJpbmlWYWwiLCJhc1N0cmluZyIsImFzRnVuYyIsImlzX2Jvb2wiLCJpc19jYWxsYWJsZSIsInN5bnRheE9ubHkiLCJjYWxsYWJsZU5hbWUiLCJtZXRob2QiLCJ2YWxpZEZ1bmN0aW9uTmFtZSIsImdldEZ1bmNOYW1lIiwiaXNfZmxvYXQiLCJpc19pbnQiLCJpc19udWxsIiwiaXNfbnVtZXJpYyIsIndoaXRlc3BhY2UiLCJpc19vYmplY3QiLCJpc19zY2FsYXIiLCJ0ZXN0IiwiaXNfc3RyaW5nIiwiaXNzZXQiLCJsIiwidXRmOF9lbmNvZGUiLCJhcmdTdHJpbmciLCJ1dGZ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJzdHJpbmdsIiwibiIsImMxIiwiUmFuZ2VFcnJvciIsImMyIiwiYXJyIiwibGlzdElEIiwidGFnIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJpdGVtIiwiJGRhdGEiLCJyZXR1cm5faHRtbCIsIkkiLCJLIiwiJHZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIiRhcnJheSIsIiRrZXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZCIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2VsZWN0b3IiLCJzdGVwIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiX3N0ZXAiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFicyIsImlzTnVtYmVyaWMiLCJ2YWwiLCJjaGVja1B4IiwiY2hlY2tQY3QiLCJjaGVja0VtIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGF0ZUluaXRpYWwiLCJkYXRlRmluYWwiLCJtcyIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJtaWxsaXNlY29uZCIsImVudHJpZXMiLCJmaWx0ZXIiLCJkYXRlQSIsImRhdGVCIiwiJGVsZW0iLCJqUXVlcnkiLCJ0b0lTT1N0cmluZyIsImhpZGRlbiIsIiRPS1MiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlIiwicHJvcGVydHkiLCJzaGlmdCIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiZGF0YSIsImNyZWF0ZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImxvY2F0aW9uIiwicmFuZG9tIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwiY2FsbGJhY2siLCJ0aXRsZSIsInRpbWVFbmQiLCIkYXJnc19rZXkiLCIkY29udGVudHNfa2V5IiwidXJsIiwicmVkdWNlIiwidiIsIiRzdHJpbmciLCIkY29udGVudHMiLCIkX2siLCJXUE9uaW9uIiwiJHR5cGUiLCJ3cG9uaW9uX2ZpZWxkcyIsImF0dHIiLCIkd2hlcmVfdG9fZmluZCIsIiRpZCIsImZpZWxkSUQiLCJmaW5kIiwiJHZhcl9pZCIsIiRkZWZhdWx0IiwiaXNGaWVsZCIsIndpbmRvd0FyZ3MiLCJ0ZXh0IiwiJGlzX3Nob3ciLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGhhbmRsZSIsIiRqc29uIiwiZGVidWdfaW5mbyIsIiRkZWZpbmVkX3ZhcnMiLCJvbiIsInByZXZlbnREZWZhdWx0Iiwic3dhbCIsInR4dCIsImh0bWwiLCJzaG93Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2hvd0Nsb3NlQnV0dG9uIiwiYW5pbWF0aW9uIiwid2lkdGgiLCJvbkJlZm9yZU9wZW4iLCJlbmFibGVMb2FkaW5nIiwib25PcGVuIiwianNvblZpZXciLCJkaXNhYmxlTG9hZGluZyIsInRoZW4iLCJyZXN1bHQiLCJzZXR0aW5nc19hcmdzIiwib3B0aW9uIiwiaXNfZGVidWciLCJmaWVsZF9kZWJ1Z19pbmZvIiwiJHZhcnMiLCIkdXR4dCIsIiRtdHh0IiwiJGFjdGlvbiIsIiRvblN1Y2Nlc3MiLCIkb25FcnJvciIsIiRvbkFsd2F5cyIsIm9uU3VjY2VzcyIsIm9uQWx3YXlzIiwib25FcnJvciIsIiRhamF4IiwiYWpheCIsImRvbmUiLCJyZXMiLCJmYWlsIiwiYWx3YXlzIiwiY29tcGlsZWQiLCJvcHRpb25zIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsInZhcmlhYmxlIiwiXyIsInRlbXBsYXRlIiwiJGVsZW1lbnQiLCJwYXJhbSIsIm5lc3RhYmxlIiwicGFyZW50IiwiJHRoaXMiLCIkZWwiLCJpbml0IiwicnVsZXNldCIsImRlcHMiLCJjcmVhdGVSdWxlc2V0IiwiZGVwUm9vdCIsImVuYWJsZSIsInNob3ciLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJhZGRDbGFzcyIsImNoZWNrVGFyZ2V0cyIsImluc3RhbmNlIiwiZWFjaCIsIldQT25pb25fRGVwZW5kZW5jeSIsImlzX2pxdWVyeSIsImlzX3VuZGVmaW5lZCIsIiRzZWxlY3RvciIsIiRjb250ZXh0IiwiJGNvbmZpZyIsInNldF9hcmdzIiwiZmllbGRfZGVidWciLCJjb25maWciLCJqc19lcnJvcl9oYW5kbGVyIiwianNfdmFsaWRhdG9yIiwiZXJyIiwiZXJyb3IiLCJhcHBlbmRUbyIsImVsZW1lbnQiLCJqc19lcnJvciIsIm1heWJlX2pzX3ZhbGlkYXRlX2VsZW0iLCJXUE9uaW9uX1ZhbGlkYXRpb24iLCJnZXRfZm9ybSIsImpzX3ZhbGlkYXRlX2VsZW0iLCJydWxlcyIsIiRhcmciLCIkd3BvbmlvbiIsImpzX2Z1bmMiLCIkZXhpc3RzIiwiJHdwb25pb25fZGVidWciLCJnZXQiLCJpZCIsImFkZCIsIiRpbmZvIiwiJGFyciIsIkZpZWxkIiwiTW9kdWxlIiwiVW5pcXVlIiwiJGZvdW5kIiwiaGFzQ2xhc3MiLCIkSUQiLCJ0aXBweSIsImFycm93IiwiYXJyb3dUeXBlIiwicGxhY2VtZW50IiwidGhlbWUiLCIkZCIsIiRub3RpY2VfdHh0IiwiaGVpZ2h0QXV0byIsIl9hcmdzIiwiJGFqYXhfa2V5IiwicGx1Z2luX2lkIiwiJF9pbnN0YW5jZXMiLCIkY2xhc3MiLCJnZXRfZmllbGRfY2xhc3MiLCJ3cCIsImhvb2tzIiwiYWRkQWN0aW9uIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwic2V0X2VsZW1lbnQiLCJzZXRfY29udHh0IiwibW9kdWxlX2luaXQiLCJlbGVtIiwiJGNvbnR4dCIsImNvbnRleHQiLCJXUE9uaW9uX1ZhbGlkYXRvciIsImZvcm0iLCJpbnZhbGlkSGFuZGxlciIsInNpYmxpbmdzIiwicmVtb3ZlIiwiYmVmb3JlIiwiaWdub3JlIiwiZXJyb3JQbGFjZW1lbnQiLCJ0cmlnZ2VyIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsInZhbGlkYXRlIiwiYWNjb3JkaW9uIiwiaGVhZGVyIiwiY29sbGFwc2libGUiLCJhbmltYXRlIiwiaGVpZ2h0U3R5bGUiLCJhY3RpdmUiLCJpY29ucyIsIklEdG9FbGVtZW50IiwiV1BPbmlvbl9GaWVsZCIsIiRpbnB1dHMiLCJyZW1vdmVBdHRyIiwicHJvcCIsImNob3NlbiIsImhhbmRsZV9hcmdzIiwiJGNsb25lX3dyYXAiLCIkYWRkX2J0biIsIiRsaW1pdCIsIiRlcm9yX21zZyIsImVycm9yX21zZyIsIiRzb3J0Iiwic29ydCIsIml0ZW1zIiwiaGFuZGxlIiwicGxhY2Vob2xkZXIiLCJldmVudCIsInVpIiwiY3NzIiwic3RvcCIsIldQT25pb25DbG9uZXIiLCJhZGRfYnRuIiwiY2xvbmVfZWxlbSIsInJlbW92ZV9idG4iLCJ0ZW1wbGF0ZUFmdGVyUmVuZGVyIiwiJGUiLCJ3cG9uaW9uX2ZpZWxkIiwicmVsb2FkIiwic29ydGFibGUiLCJvbkxpbWl0UmVhY2hlZCIsIiRodG1sIiwicHJlcGVuZCIsIiRfX0UiLCJzZXRUaW1lb3V0Iiwic2hvd19hbmltYXRpb24iLCJhbmltYXRpb25zIiwiaGlkZV9hbmltYXRpb24iLCJ3cENvbG9yUGlja2VyIiwiJHNldHRpbmdzIiwiJHZpZXciLCJhcHBlbmQiLCJwbHVnaW5zIiwicmFuZ2VQbHVnaW4iLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsImN1cnJlbnRUYXJnZXQiLCJ3ZWJzYWZlIiwiZm9udHMiLCJidWlsZF9vcHRpb25zIiwidmFyaWFudHMiLCJnb29nbGVfZm9udHMiLCIkdmFyaWFudCIsIiRodG1sX3RlbXAiLCIkaW5wdXQiLCIkcHJldmlldyIsIndwX21lZGlhX2ZyYW1lIiwiJGFkZCIsIiRlZGl0IiwiJGNsZWFyIiwiJG1hbmFnZSIsImlkcyIsIndoYXQiLCJzdGF0ZSIsIm1lZGlhIiwiZ2FsbGVyeSIsImxpYnJhcnkiLCJmcmFtZSIsIm11bHRpcGxlIiwib3BlbiIsImVkaXQiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsInNlbGVjdGVkSWRzIiwibW9kZWxzIiwiYXR0YWNobWVudCIsInRvSlNPTiIsInNpemVzIiwidGh1bWIiLCJ0aHVtYm5haWwiLCIkdG1wIiwidGFyZ2V0IiwiJHBhcmVudCIsIiRpbWFnZV9pZCIsIiRrIiwiJHYiLCJjdXJzb3IiLCJzY3JvbGxTZW5zaXRpdml0eSIsImZvcmNlUGxhY2Vob2xkZXJTaXplIiwiaGVscGVyIiwib3BhY2l0eSIsIiRpdGVtIiwiaGVpZ2h0IiwiJG1hcCIsImRldGFpbHMiLCJkZXRhaWxzQXR0cmlidXRlIiwiJF9pbnN0YW5jZSIsImdlb2NvbXBsZXRlIiwiYmluZCIsImxhdExuZyIsImdlb2NvZGVyIiwiZ29vZ2xlIiwibWFwcyIsIkdlb2NvZGVyIiwiZ2VvY29kZSIsImxhdCIsImxuZyIsIiRncm91cF93cmFwIiwiJGVycm9yX21zZyIsImNsaWNrIiwib25SZW1vdmUiLCJzZXR0aW5ncyIsIiRfdGhpcyIsIiRyZW1vdmVfYnRuIiwiJHdvcmsiLCJlbGVtcyIsInBvcHVwIiwiZWxtIiwiaW5pdF90b29sdGlwIiwicG9wdXBfdG9vbHRpcCIsIiR0cCIsIiRlbG0iLCIkaW5zdGFuY2UiLCIkaGVpZ2h0IiwiJGljb24iLCJjbG9zZU1vZGFsIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiJHJlcyIsInN1Y2Nlc3MiLCJyZXNldFZhbGlkYXRpb25NZXNzYWdlIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsIiRwb3B1cCIsImFsbG93T3V0c2lkZUNsaWNrIiwiY3VzdG9tQ2xhc3MiLCIkcG9wdXBfZWxlbSIsIiRwcmV2aWV3X2FkZCIsIm1lZGlhX2luc3RhbmNlIiwiaG9vayIsImRvQWN0aW9uIiwiZmlyc3QiLCJhdHRyaWJ1dGVzIiwiaW5wdXRtYXNrIiwiJHRoaXNfZWxlbSIsIiR0YWIiLCJnbG9iYWxfdmFsaWRhdGUiLCJhZnRlciIsImVxIiwiaW1hZ2UiLCJzaG93X3ByZXZpZXciLCJzZWxlY3QyIiwic2VsZWN0aXplIiwiJGVuYWJsZWQiLCIkZGlzYWJsZWQiLCJjb25uZWN0V2l0aCIsImZvbnRfd2VpZ2h0X3N0eWxlIiwiJGZvbnRfZmllbGQiLCIkZm9udCIsIiRmb250X3dlaWdodF9zdHlsZSIsImZvbnRfc3R5bGUiLCIkdGFnIiwiJGNvbG9yIiwiJGFsaWduIiwiJGZvbnRTaXplIiwiJGxpbmVIZWlnaHQiLCIkYmFja1VQRm9udCIsIiRkaXJlY3Rpb24iLCIkbGV0dGVyU3BhY2luZyIsImhyZWYiLCJ3ZWlnaHQiLCIkX2F0dHJzIiwiJHRleHQiLCIkd2VpZ2h0X3ZhbCIsIiRzdHlsZV92YWwiLCJmcmFtZV90aXRsZSIsInVwbG9hZF90eXBlIiwiYnV0dG9uIiwiaW5zZXJ0X3RpdGxlIiwiJHRleHRhcmVhIiwid3BMaW5rIiwiJGRlcCIsImNvbnRyb2xsZXIiLCIkY29udHJvbGxlciIsIiRjb25kaXRpb24iLCJjb25kaXRpb24iLCIkZmllbGQiLCIkSU5QVVQiLCJjb250eHQiLCJjcmVhdGVSdWxlIiwiaW5jbHVkZSIsIiRmaWQiLCIkaXNfbG9hZGluZyIsIndwb2ltZyIsImltZyIsInRlc3REaW1lbnNpb25zIiwibmF0dXJhbFdpZHRoIiwiJHRvb2x0aXBfa2V5IiwidmFsaWRfanNvbiIsInVwZGF0ZUR1cmF0aW9uIiwib25TaG93IiwiY29udGVudCIsImZldGNoIiwicmVzcCIsImJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwb3BwZXJJbnN0YW5jZSIsImNhdGNoIiwib25IaWRkZW4iLCJwb3BwZXJPcHRpb25zIiwibW9kaWZpZXJzIiwicHJldmVudE92ZXJmbG93IiwiJGltYWdlIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3AiLCIkbWNlX2VkaXRvciIsInRpbnlNQ0VQcmVJbml0IiwibWNlSW5pdCIsIiRxdWlja190YWdzIiwicXRJbml0IiwiJE5FV19JRCIsIiR0ZXh0QXJlYSIsImNsb25lIiwiJGFjdHVhbF9JRCIsIiRhY3R1YWxfaHRtbCIsIiRyZWdleCIsInRpbnltY2UiLCJ0aW55TUNFIiwicXVpY2t0YWdzIiwiJCIsIiRmaW5hbF9hcmdzIiwicG9zdF9pZHMiLCIkYnVsa19lZGl0IiwiY2hpbGRyZW4iLCJzZXJpYWxpemVPYmplY3QiLCJhc3luYyIsImNhY2hlIiwiV1BPbmlvbl9NZXRhYm94X01vZHVsZSIsIm1lbnUiLCJzYXZlX2hhbmRsZXIiLCJuZXh0IiwiaXMiLCJzbGlkZVRvZ2dsZSIsInNsaWRlVXAiLCIkaHJlZiIsIiR3cG9uaW9uX2hlbHBlciIsInVybF9wYXJhbXMiLCIkc2VjdGlvbiIsIiRwYXJlbnRfYWN0aXZlcyIsIiRjdXJyZW50IiwiJGJhc2UiLCIkaGlkZGVuIiwiYmxvY2siLCJtZXNzYWdlIiwib3ZlcmxheUNTUyIsIiRmaWVsZHMiLCIkdmFsdWVzIiwic2VyaWFsaXplIiwidW5ibG9jayIsIldQT25pb25fUXVpY2tfRWRpdCIsInBvc3RfaWQiLCJ2YWx1ZXMiLCJmaWVsZEFyZ3MiLCIkbGlzdCIsImNsb3Nlc3QiLCJ3cG9uaW9uX21ldGFib3hfbW9kdWxlIiwiZGVmYXVsdCIsIndwb25pb25fYnVsa19lZGl0Iiwid3Bvbmlvbl9xdWlja19lZGl0Iiwid3Bvbmlvbl9uZXdfZmllbGQiLCJ3cG9uaW9uX21vZGFsIiwiJHdwbyIsIiR3cF9ob29rIiwiYXBwbHlGaWx0ZXJzIiwidGV4dGFyZWEiLCJpbWFnZV9zZWxlY3QiLCJzd2l0Y2hlciIsImNvbG9yX3BhbGV0dGUiLCJpY29uX3BpY2tlciIsImZvbnRfc2VsZWN0b3IiLCJncm91cCIsIndwX2VkaXRvciIsInJlbG9hZF93cF9lZGl0b3IiLCJmaWVsZHNldCIsIndwX2xpbmtzIiwiY2hlY2tib3hfcmFkaW8iLCJrZXl2YWx1ZV9wYWlyIiwiY29sb3JfcGlja2VyIiwiZGF0ZV9waWNrZXIiLCJpbWFnZV9wb3B1cCIsInVwbG9hZCIsImltYWdlX3VwbG9hZCIsImpxdWVyeV90YWIiLCJmaWVsZF90b29sdGlwIiwiY2xvbmVfZWxlbWVudCIsInNvcnRlciIsImdvb2dsZV9tYXBzIiwidHlwb2dyYXBoeSIsIm9lbWJlZCIsImhlYWRpbmciLCJzdWJoZWFkaW5nIiwiamFtYm9fY29udGVudCIsIm5vdGljZSIsInRvZ2dsZUNsYXNzIiwiJHdwb2ZfZGl2IiwiJHdpZGdldCIsImxvYWRpbmdfc2NyZWVuIiwiV1BPbmlvbl9XUF9Nb2RhbCIsIkJhY2tib25lIiwiVmlldyIsImV4dGVuZCIsInRlbXBsYXRlcyIsImV2ZW50cyIsImFjdGl2ZV9wYWdlIiwiYWN0aXZlX3NlY3Rpb24iLCJpbml0aWFsaXplIiwibGVmdF9tZW51IiwiaGlkZV9tZW51IiwiYmluZEFsbCIsImluaXRfdGVtcGxhdGVzIiwicmVuZGVyIiwiJG0iLCJmcmFtZV9tZW51X2l0ZW0iLCJyb3V0ZXJfbWVudV9pdGVtIiwicGFnZV9jb250ZW50Iiwic2VjdGlvbl9jb250ZW50IiwiJGNvbnRlbnQiLCIkX2NvbnRlbnQiLCIkX21lbnUiLCJwcmVzZXJ2ZUZvY3VzIiwiZm9jdXMiLCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrIiwiJHRhcmdldCIsIiRzaG93X3RhcmdldCIsImhhbmRsZV90YWJfY2xpY2siLCIkcGFnZSIsImhhcyIsInVuZGVsZWdhdGVFdmVudHMiLCJvZmYiLCJzYXZlTW9kYWwiLCJkb05vdGhpbmciLCIkb3B0aW9ucyIsImNsYXNzTmFtZSIsIm1vZGFsIiwiZ2V0X2xl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Ozs7QUF3S0MsbUJBQTZCO0FBQUEsTUFBaEJ3ZSxRQUFnQix1RUFBTCxFQUFLOztBQUFBOztBQUM1QixPQUFLbmMsT0FBTCxHQUFlSyxFQUFFK1osTUFBRixDQUFVO0FBQ3hCL1csT0FBSSxLQURvQjtBQUV4QnpJLFNBQU0sS0FGa0I7QUFHeEJ3aEIsY0FBVyxlQUhhO0FBSXhCQyxVQUFPLEVBSmlCO0FBS3hCMUIsY0FBVztBQUxhLEdBQVYsRUFNWndCLFFBTlksQ0FBZjs7QUFRQSxNQUFJbEMsZ0JBQUosQ0FBc0I1WixFQUFFK1osTUFBRixDQUFVO0FBQy9CTSxjQUFXLEtBQUs0QixhQUFMLEVBRG9CO0FBRS9CeGUsU0FBTSxLQUFLa0MsT0FBTCxDQUFjLE1BQWQsQ0FGeUI7QUFHL0IyYSxjQUFXLEtBQUszYSxPQUFMLENBQWMsV0FBZDtBQUhvQixHQUFWLEVBSW5CLEtBQUtBLE9BQUwsQ0FBYyxPQUFkLENBSm1CLENBQXRCO0FBS0E7Ozs7a0NBRWU7QUFDZixPQUFJd0osVUFBVSxLQUFkO0FBQ0EsT0FBSSxLQUFLeEosT0FBTCxDQUFjLE1BQWQsQ0FBSixFQUE2QjtBQUM1QndKLGNBQVUsRUFBVjs7QUFFQW5KLE1BQUVvQixJQUFGLENBQVEsS0FBS3pCLE9BQUwsQ0FBYyxNQUFkLENBQVIsRUFBZ0MsVUFBRXJKLEtBQUYsRUFBU1EsSUFBVCxFQUFtQjtBQUNsRHFTLGFBQVNyUyxJQUFULElBQW9CLE9BQU9SLE1BQU8sWUFBUCxDQUFQLEtBQWlDLFdBQW5DLEdBQW1EQSxNQUFPLFlBQVAsQ0FBbkQsR0FBMkVBLE1BQU8sT0FBUCxDQUE3RjtBQUNBLEtBRkQ7QUFHQTtBQUNELFVBQU82UyxPQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE1GLG1DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy93cG9uaW9uLWNvcmUuanNcIik7XG4iLCJjbGFzcyBKU19QYXJzZV9BcmdzIHtcclxuXHRjb25zdHJ1Y3RvciggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19uZXN0ZWQgPSBmYWxzZSApIHtcclxuXHRcdHRoaXMuYXJncyAgICAgPSAkYXJncztcclxuXHRcdHRoaXMuZGVmYXVsdHMgPSAkZGVmYXVsdHM7XHJcblx0XHR0aGlzLm5lc3RlZCAgID0gJGlzX25lc3RlZDtcclxuXHRcdHRoaXMucGFyc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLmFyZ3M7XHJcblx0fVxyXG5cclxuXHRwYXJzZSgpIHtcclxuXHRcdGZvciggbGV0ICRfa2V5IGluIHRoaXMuZGVmYXVsdHMgKSB7XHJcblx0XHRcdGlmKCB0cnVlID09PSB0aGlzLm5lc3RlZCAmJiB0eXBlb2YgIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0gPT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IG5ldyBKU19QYXJzZV9BcmdzKCB0aGlzLmFyZ3NbICRfa2V5IF0sIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0sIHRoaXMubmVzdGVkICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3NbICRfa2V5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gdGhpcy5kZWZhdWx0c1sgJF9rZXkgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19kZWVwID0gZmFsc2UgKSA9PiBuZXcgSlNfUGFyc2VfQXJncyggJGFyZ3MsICRkZWZhdWx0cywgJGlzX2RlZXAgKTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXJyYXlfbWVyZ2UoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYXJyYXlfbWVyZ2UvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogTmF0ZVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IGpvc2hcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMSA9IHtcImNvbG9yXCI6IFwicmVkXCIsIDA6IDIsIDE6IDR9XG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjIgPSB7MDogXCJhXCIsIDE6IFwiYlwiLCBcImNvbG9yXCI6IFwiZ3JlZW5cIiwgXCJzaGFwZVwiOiBcInRyYXBlem9pZFwiLCAyOiA0fVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfbWVyZ2UoJGFycjEsICRhcnIyKVxuICAvLyAgIHJldHVybnMgMToge1wiY29sb3JcIjogXCJncmVlblwiLCAwOiAyLCAxOiA0LCAyOiBcImFcIiwgMzogXCJiXCIsIFwic2hhcGVcIjogXCJ0cmFwZXpvaWRcIiwgNDogNH1cbiAgLy8gICBleGFtcGxlIDI6IHZhciAkYXJyMSA9IFtdXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGFycjIgPSB7MTogXCJkYXRhXCJ9XG4gIC8vICAgZXhhbXBsZSAyOiBhcnJheV9tZXJnZSgkYXJyMSwgJGFycjIpXG4gIC8vICAgcmV0dXJucyAyOiB7MDogXCJkYXRhXCJ9XG5cbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICB2YXIgYXJnbCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgYXJnO1xuICB2YXIgcmV0T2JqID0ge307XG4gIHZhciBrID0gJyc7XG4gIHZhciBhcmdpbCA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY3QgPSAwO1xuICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgcmV0QXJyID0gdHJ1ZTtcblxuICBmb3IgKGkgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgaWYgKHRvU3RyLmNhbGwoYXJnc1tpXSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldEFyciA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJldEFycikge1xuICAgIHJldEFyciA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmdsOyBpKyspIHtcbiAgICAgIHJldEFyciA9IHJldEFyci5jb25jYXQoYXJnc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXRBcnI7XG4gIH1cblxuICBmb3IgKGkgPSAwLCBjdCA9IDA7IGkgPCBhcmdsOyBpKyspIHtcbiAgICBhcmcgPSBhcmdzW2ldO1xuICAgIGlmICh0b1N0ci5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIGZvciAoaiA9IDAsIGFyZ2lsID0gYXJnLmxlbmd0aDsgaiA8IGFyZ2lsOyBqKyspIHtcbiAgICAgICAgcmV0T2JqW2N0KytdID0gYXJnW2pdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGsgaW4gYXJnKSB7XG4gICAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBpZiAocGFyc2VJbnQoaywgMTApICsgJycgPT09IGspIHtcbiAgICAgICAgICAgIHJldE9ialtjdCsrXSA9IGFyZ1trXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0T2JqW2tdID0gYXJnW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRPYmo7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlfbWVyZ2UuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXJyYXlfbWVyZ2VfcmVjdXJzaXZlKGFycjEsIGFycjIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9hcnJheV9tZXJnZV9yZWN1cnNpdmUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBTdWJoYXNpcyBEZWJcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIxID0geydjb2xvcic6IHsnZmF2b3JpdGUnOiAncmVkJ30sIDA6IDV9XG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjIgPSB7MDogMTAsICdjb2xvcic6IHsnZmF2b3JpdGUnOiAnZ3JlZW4nLCAwOiAnYmx1ZSd9fVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfbWVyZ2VfcmVjdXJzaXZlKCRhcnIxLCAkYXJyMilcbiAgLy8gICByZXR1cm5zIDE6IHsnY29sb3InOiB7J2Zhdm9yaXRlJzogezA6ICdyZWQnLCAxOiAnZ3JlZW4nfSwgMDogJ2JsdWUnfSwgMTogNSwgMTogMTB9XG4gIC8vICAgICAgICB0ZXN0OiBza2lwLTFcblxuICB2YXIgYXJyYXlNZXJnZSA9IHJlcXVpcmUoJy4uL2FycmF5L2FycmF5X21lcmdlJyk7XG4gIHZhciBpZHggPSAnJztcblxuICBpZiAoYXJyMSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyMSkgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgYXJyMiAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyMikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBmb3IgKGlkeCBpbiBhcnIyKSB7XG4gICAgICBhcnIxLnB1c2goYXJyMltpZHhdKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJyMSAmJiBhcnIxIGluc3RhbmNlb2YgT2JqZWN0ICYmIGFycjIgJiYgYXJyMiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIGZvciAoaWR4IGluIGFycjIpIHtcbiAgICAgIGlmIChpZHggaW4gYXJyMSkge1xuICAgICAgICBpZiAoX3R5cGVvZihhcnIxW2lkeF0pID09PSAnb2JqZWN0JyAmJiAodHlwZW9mIGFycjIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFycjIpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBhcnIxW2lkeF0gPSBhcnJheU1lcmdlKGFycjFbaWR4XSwgYXJyMltpZHhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnIxW2lkeF0gPSBhcnIyW2lkeF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycjFbaWR4XSA9IGFycjJbaWR4XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyMTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X3ZhbHVlcyhpbnB1dCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2FycmF5X3ZhbHVlcy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfdmFsdWVzKCB7Zmlyc3RuYW1lOiAnS2V2aW4nLCBzdXJuYW1lOiAndmFuIFpvbm5ldmVsZCd9IClcbiAgLy8gICByZXR1cm5zIDE6IFsgJ0tldmluJywgJ3ZhbiBab25uZXZlbGQnIF1cblxuICB2YXIgdG1wQXJyID0gW107XG4gIHZhciBrZXkgPSAnJztcblxuICBmb3IgKGtleSBpbiBpbnB1dCkge1xuICAgIHRtcEFyclt0bXBBcnIubGVuZ3RoXSA9IGlucHV0W2tleV07XG4gIH1cblxuICByZXR1cm4gdG1wQXJyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5X3ZhbHVlcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY291bnQobWl4ZWRWYXIsIG1vZGUpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jb3VudC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBXYWxkbyBNYWxxdWkgU2lsdmEgKGh0dHA6Ly93YWxkby5tYWxxdWkuaW5mbylcbiAgLy8gICAgaW5wdXQgYnk6IG1lcmFiaVxuICAvLyBidWdmaXhlZCBieTogU29yZW4gSGFuc2VuXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbGl2aWVyIExvdXZpZ25lcyAoaHR0cDovL21nLWNyZWEuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBjb3VudChbWzAsMF0sWzAsLTRdXSwgJ0NPVU5UX1JFQ1VSU0lWRScpXG4gIC8vICAgcmV0dXJucyAxOiA2XG4gIC8vICAgZXhhbXBsZSAyOiBjb3VudCh7J29uZScgOiBbMSwyLDMsNCw1XX0sICdDT1VOVF9SRUNVUlNJVkUnKVxuICAvLyAgIHJldHVybnMgMjogNlxuXG4gIHZhciBrZXk7XG4gIHZhciBjbnQgPSAwO1xuXG4gIGlmIChtaXhlZFZhciA9PT0gbnVsbCB8fCB0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAobWl4ZWRWYXIuY29uc3RydWN0b3IgIT09IEFycmF5ICYmIG1peGVkVmFyLmNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmIChtb2RlID09PSAnQ09VTlRfUkVDVVJTSVZFJykge1xuICAgIG1vZGUgPSAxO1xuICB9XG4gIGlmIChtb2RlICE9PSAxKSB7XG4gICAgbW9kZSA9IDA7XG4gIH1cblxuICBmb3IgKGtleSBpbiBtaXhlZFZhcikge1xuICAgIGlmIChtaXhlZFZhci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjbnQrKztcbiAgICAgIGlmIChtb2RlID09PSAxICYmIG1peGVkVmFyW2tleV0gJiYgKG1peGVkVmFyW2tleV0uY29uc3RydWN0b3IgPT09IEFycmF5IHx8IG1peGVkVmFyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkpIHtcbiAgICAgICAgY250ICs9IGNvdW50KG1peGVkVmFyW2tleV0sIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y291bnQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluX2FycmF5KG5lZWRsZSwgaGF5c3RhY2ssIGFyZ1N0cmljdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHZsYWRvIGhvdWJhXG4gIC8vIGltcHJvdmVkIGJ5OiBKb25hcyBTY2lhbmd1bGEgU3RyZWV0IChKb25pMkJhY2spXG4gIC8vICAgIGlucHV0IGJ5OiBCaWxseVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGluX2FycmF5KCd2YW4nLCBbJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGluX2FycmF5KCd2bGFkbycsIHswOiAnS2V2aW4nLCB2bGFkbzogJ3ZhbicsIDE6ICdab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpbl9hcnJheSgxLCBbJzEnLCAnMicsICczJ10pXG4gIC8vICAgZXhhbXBsZSAzOiBpbl9hcnJheSgxLCBbJzEnLCAnMicsICczJ10sIGZhbHNlKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddLCB0cnVlKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcblxuICB2YXIga2V5ID0gJyc7XG4gIHZhciBzdHJpY3QgPSAhIWFyZ1N0cmljdDtcblxuICAvLyB3ZSBwcmV2ZW50IHRoZSBkb3VibGUgY2hlY2sgKHN0cmljdCAmJiBhcnJba2V5XSA9PT0gbmRsKSB8fCAoIXN0cmljdCAmJiBhcnJba2V5XSA9PT0gbmRsKVxuICAvLyBpbiBqdXN0IG9uZSBmb3IsIGluIG9yZGVyIHRvIGltcHJvdmUgdGhlIHBlcmZvcm1hbmNlXG4gIC8vIGRlY2lkaW5nIHdpY2ggdHlwZSBvZiBjb21wYXJhdGlvbiB3aWxsIGRvIGJlZm9yZSB3YWxrIGFycmF5XG4gIGlmIChzdHJpY3QpIHtcbiAgICBmb3IgKGtleSBpbiBoYXlzdGFjaykge1xuICAgICAgaWYgKGhheXN0YWNrW2tleV0gPT09IG5lZWRsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChrZXkgaW4gaGF5c3RhY2spIHtcbiAgICAgIGlmIChoYXlzdGFja1trZXldID09IG5lZWRsZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5fYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1pY3JvdGltZShnZXRBc0Zsb2F0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvbWljcm90aW1lL1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyBpbXByb3ZlZCBieTogRHVtaXRydSBVenVuIChodHRwOi8vZHV6dW4ubWUpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHRpbWVTdGFtcCA9IG1pY3JvdGltZSh0cnVlKVxuICAvLyAgIGV4YW1wbGUgMTogJHRpbWVTdGFtcCA+IDEwMDAwMDAwMDAgJiYgJHRpbWVTdGFtcCA8IDIwMDAwMDAwMDBcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IC9eMFxcLlswLTldezEsNn0gWzAtOV17MTAsMTB9JC8udGVzdChtaWNyb3RpbWUoKSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICB2YXIgcztcbiAgdmFyIG5vdztcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbm93ID0gKHBlcmZvcm1hbmNlLm5vdygpICsgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTYpIC8gMWU2ICsgJyAnICsgcztcbiAgfSBlbHNlIHtcbiAgICBub3cgPSAoRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWUzKSAvIDFlMyArICcgJyArIHM7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWNyb3RpbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGltZSgpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC90aW1lL1xuICAvLyBvcmlnaW5hbCBieTogR2Vla0ZHIChodHRwOi8vZ2Vla2ZnLmJsb2dzcG90LmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBtZXRqYXlcbiAgLy8gaW1wcm92ZWQgYnk6IEhLTVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICR0aW1lU3RhbXAgPSB0aW1lKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJHRpbWVTdGFtcCA+IDEwMDAwMDAwMDAgJiYgJHRpbWVTdGFtcCA8IDIwMDAwMDAwMDBcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICByZXR1cm4gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jKGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRzIG9uIGNhbGxfdXNlcl9mdW5jX2FycmF5IHdoaWNoIGluIHR1cm4gZGVwZW5kcyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmMoJ2lzTmFOJywgJ2EnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHZhciBjYWxsVXNlckZ1bmNBcnJheSA9IHJlcXVpcmUoJy4uL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5Jyk7XG4gIHBhcmFtZXRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gY2FsbFVzZXJGdW5jQXJyYXkoY2IsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jX2FycmF5KGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmNfYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUaGlhZ28gTWF0YSAoaHR0cDovL3RoaWFnb21hdGEuYmxvZy5jb20pXG4gIC8vICByZXZpc2VkIGJ5OiBKb24gSG9obGVcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZGluZyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAgYW5kL29yIGBuZXcgRnVuY3Rpb25gLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsnYSddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWzFdKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICB2YXIgZnVuYztcbiAgdmFyIHNjb3BlID0gbnVsbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmdW5jID0gJGdsb2JhbFtjYl07XG4gICAgfSBlbHNlIGlmIChjYi5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgIGZ1bmMgPSBuZXcgRnVuY3Rpb24obnVsbCwgJ3JldHVybiAnICsgY2IpKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LWZ1bmNcbiAgICB9XG4gIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNiKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIGZ1bmMgPSBldmFsKGNiWzBdICsgXCJbJ1wiICsgY2JbMV0gKyBcIiddXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZnVuYyA9IGNiWzBdW2NiWzFdXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiWzBdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY29wZSA9ICRnbG9iYWxbY2JbMF1dO1xuICAgICAgfSBlbHNlIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgc2NvcGUgPSBldmFsKGNiWzBdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKGNiWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNjb3BlID0gY2JbMF07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZ1bmMgPSBjYjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihmdW5jICsgJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmMuYXBwbHkoc2NvcGUsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jX2FycmF5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmdW5jdGlvbl9leGlzdHMoZnVuY05hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mdW5jdGlvbl9leGlzdHMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogU3RldmUgQ2xheVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGZ1bmN0aW9uX2V4aXN0cygnaXNGaW5pdGUnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgICAgICAgdGVzdDogc2tpcC0xXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICBpZiAodHlwZW9mIGZ1bmNOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGZ1bmNOYW1lID0gJGdsb2JhbFtmdW5jTmFtZV07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIGZ1bmNOYW1lID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZ1bmN0aW9uX2V4aXN0cy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5pX2dldCh2YXJuYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW5pX2dldC9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgaW5pIHZhbHVlcyBtdXN0IGJlIHNldCBieSBpbmlfc2V0IG9yIG1hbnVhbGx5IHdpdGhpbiBhbiBpbmkgZmlsZVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX3NldCgnZGF0ZS50aW1lem9uZScsICdBc2lhL0hvbmdfS29uZycpXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfZ2V0KCdkYXRlLnRpbWV6b25lJylcbiAgLy8gICByZXR1cm5zIDE6ICdBc2lhL0hvbmdfS29uZydcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuICAkbG9jdXR1cy5waHAuaW5pID0gJGxvY3V0dXMucGhwLmluaSB8fCB7fTtcblxuICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXSAmJiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmlfZ2V0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cGxvZGUoZGVsaW1pdGVyLCBzdHJpbmcsIGxpbWl0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZXhwbG9kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBleHBsb2RlKCcgJywgJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogWyAnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCcgXVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCB0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChkZWxpbWl0ZXIgPT09ICcnIHx8IGRlbGltaXRlciA9PT0gZmFsc2UgfHwgZGVsaW1pdGVyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZGVsaW1pdGVyID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkZWxpbWl0ZXIpKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHN0cmluZyA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHN0cmluZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc3RyaW5nKSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIDA6ICcnXG4gICAgfTtcbiAgfVxuICBpZiAoZGVsaW1pdGVyID09PSB0cnVlKSB7XG4gICAgZGVsaW1pdGVyID0gJzEnO1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBnby4uLlxuICBkZWxpbWl0ZXIgKz0gJyc7XG4gIHN0cmluZyArPSAnJztcblxuICB2YXIgcyA9IHN0cmluZy5zcGxpdChkZWxpbWl0ZXIpO1xuXG4gIGlmICh0eXBlb2YgbGltaXQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gcztcblxuICAvLyBTdXBwb3J0IGZvciBsaW1pdFxuICBpZiAobGltaXQgPT09IDApIGxpbWl0ID0gMTtcblxuICAvLyBQb3NpdGl2ZSBsaW1pdFxuICBpZiAobGltaXQgPiAwKSB7XG4gICAgaWYgKGxpbWl0ID49IHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgcmV0dXJuIHMuc2xpY2UoMCwgbGltaXQgLSAxKS5jb25jYXQoW3Muc2xpY2UobGltaXQgLSAxKS5qb2luKGRlbGltaXRlcildKTtcbiAgfVxuXG4gIC8vIE5lZ2F0aXZlIGxpbWl0XG4gIGlmICgtbGltaXQgPj0gcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzLnNwbGljZShzLmxlbmd0aCArIGxpbWl0KTtcbiAgcmV0dXJuIHM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwbG9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbXBsb2RlKGdsdWUsIHBpZWNlcykge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2ltcGxvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogV2FsZG8gTWFscXVpIFNpbHZhIChodHRwOi8vd2FsZG8ubWFscXVpLmluZm8pXG4gIC8vIGltcHJvdmVkIGJ5OiBJdHNhY29uIChodHRwOi8vd3d3Lml0c2Fjb24ubmV0LylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBpbXBsb2RlKCcgJywgWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IGltcGxvZGUoJyAnLCB7Zmlyc3Q6J0tldmluJywgbGFzdDogJ3ZhbiBab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIHZhciBpID0gJyc7XG4gIHZhciByZXRWYWwgPSAnJztcbiAgdmFyIHRHbHVlID0gJyc7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBwaWVjZXMgPSBnbHVlO1xuICAgIGdsdWUgPSAnJztcbiAgfVxuXG4gIGlmICgodHlwZW9mIHBpZWNlcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGllY2VzKSkgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwaWVjZXMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm4gcGllY2VzLmpvaW4oZ2x1ZSk7XG4gICAgfVxuICAgIGZvciAoaSBpbiBwaWVjZXMpIHtcbiAgICAgIHJldFZhbCArPSB0R2x1ZSArIHBpZWNlc1tpXTtcbiAgICAgIHRHbHVlID0gZ2x1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfVxuXG4gIHJldHVybiBwaWVjZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1wbG9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21kNS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiBLZWVwIGluIG1pbmQgdGhhdCBpbiBhY2NvcmRhbmNlIHdpdGggUEhQLCB0aGUgd2hvbGUgc3RyaW5nIGlzIGJ1ZmZlcmVkIGFuZCB0aGVuXG4gIC8vICAgICAgbm90ZSAxOiBoYXNoZWQuIElmIGF2YWlsYWJsZSwgd2UnZCByZWNvbW1lbmQgdXNpbmcgTm9kZSdzIG5hdGl2ZSBjcnlwdG8gbW9kdWxlcyBkaXJlY3RseVxuICAvLyAgICAgIG5vdGUgMTogaW4gYSBzdGVhbWluZyBmYXNoaW9uIGZvciBmYXN0ZXIgYW5kIG1vcmUgZWZmaWNpZW50IGhhc2hpbmdcbiAgLy8gICBleGFtcGxlIDE6IG1kNSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnNmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjknXG5cbiAgdmFyIGhhc2g7XG4gIHRyeSB7XG4gICAgdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIHZhciBtZDVzdW0gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgbWQ1c3VtLnVwZGF0ZShzdHIpO1xuICAgIGhhc2ggPSBtZDVzdW0uZGlnZXN0KCdoZXgnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB2YXIgdXRmOEVuY29kZSA9IHJlcXVpcmUoJy4uL3htbC91dGY4X2VuY29kZScpO1xuICB2YXIgeGw7XG5cbiAgdmFyIF9yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gX3JvdGF0ZUxlZnQobFZhbHVlLCBpU2hpZnRCaXRzKSB7XG4gICAgcmV0dXJuIGxWYWx1ZSA8PCBpU2hpZnRCaXRzIHwgbFZhbHVlID4+PiAzMiAtIGlTaGlmdEJpdHM7XG4gIH07XG5cbiAgdmFyIF9hZGRVbnNpZ25lZCA9IGZ1bmN0aW9uIF9hZGRVbnNpZ25lZChsWCwgbFkpIHtcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0O1xuICAgIGxYOCA9IGxYICYgMHg4MDAwMDAwMDtcbiAgICBsWTggPSBsWSAmIDB4ODAwMDAwMDA7XG4gICAgbFg0ID0gbFggJiAweDQwMDAwMDAwO1xuICAgIGxZNCA9IGxZICYgMHg0MDAwMDAwMDtcbiAgICBsUmVzdWx0ID0gKGxYICYgMHgzRkZGRkZGRikgKyAobFkgJiAweDNGRkZGRkZGKTtcbiAgICBpZiAobFg0ICYgbFk0KSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgfVxuICAgIGlmIChsWDQgfCBsWTQpIHtcbiAgICAgIGlmIChsUmVzdWx0ICYgMHg0MDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX0YgPSBmdW5jdGlvbiBfRih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB5IHwgfnggJiB6O1xuICB9O1xuICB2YXIgX0cgPSBmdW5jdGlvbiBfRyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB6IHwgeSAmIH56O1xuICB9O1xuICB2YXIgX0ggPSBmdW5jdGlvbiBfSCh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfTtcbiAgdmFyIF9JID0gZnVuY3Rpb24gX0koeCwgeSwgeikge1xuICAgIHJldHVybiB5IF4gKHggfCB+eik7XG4gIH07XG5cbiAgdmFyIF9GRiA9IGZ1bmN0aW9uIF9GRihhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRihiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9HRyA9IGZ1bmN0aW9uIF9HRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRyhiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9ISCA9IGZ1bmN0aW9uIF9ISChhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSChiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9JSSA9IGZ1bmN0aW9uIF9JSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSShiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9jb252ZXJ0VG9Xb3JkQXJyYXkgPSBmdW5jdGlvbiBfY29udmVydFRvV29yZEFycmF5KHN0cikge1xuICAgIHZhciBsV29yZENvdW50O1xuICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDIgPSAobE51bWJlck9mV29yZHNUZW1wMSAtIGxOdW1iZXJPZldvcmRzVGVtcDEgJSA2NCkgLyA2NDtcbiAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNUZW1wMiArIDEpICogMTY7XG4gICAgdmFyIGxXb3JkQXJyYXkgPSBuZXcgQXJyYXkobE51bWJlck9mV29yZHMgLSAxKTtcbiAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGxCeXRlQ291bnQgPSAwO1xuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCBzdHIuY2hhckNvZGVBdChsQnl0ZUNvdW50KSA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgICAgbEJ5dGVDb3VudCsrO1xuICAgIH1cbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAweDgwIDw8IGxCeXRlUG9zaXRpb247XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XG4gICAgcmV0dXJuIGxXb3JkQXJyYXk7XG4gIH07XG5cbiAgdmFyIF93b3JkVG9IZXggPSBmdW5jdGlvbiBfd29yZFRvSGV4KGxWYWx1ZSkge1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZSA9ICcnO1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnJztcbiAgICB2YXIgbEJ5dGU7XG4gICAgdmFyIGxDb3VudDtcblxuICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XG4gICAgICBsQnl0ZSA9IGxWYWx1ZSA+Pj4gbENvdW50ICogOCAmIDI1NTtcbiAgICAgIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcwJyArIGxCeXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgIHdvcmRUb0hleFZhbHVlID0gd29yZFRvSGV4VmFsdWUgKyB3b3JkVG9IZXhWYWx1ZVRlbXAuc3Vic3RyKHdvcmRUb0hleFZhbHVlVGVtcC5sZW5ndGggLSAyLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRUb0hleFZhbHVlO1xuICB9O1xuXG4gIHZhciB4ID0gW107XG4gIHZhciBrO1xuICB2YXIgQUE7XG4gIHZhciBCQjtcbiAgdmFyIENDO1xuICB2YXIgREQ7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgUzExID0gNztcbiAgdmFyIFMxMiA9IDEyO1xuICB2YXIgUzEzID0gMTc7XG4gIHZhciBTMTQgPSAyMjtcbiAgdmFyIFMyMSA9IDU7XG4gIHZhciBTMjIgPSA5O1xuICB2YXIgUzIzID0gMTQ7XG4gIHZhciBTMjQgPSAyMDtcbiAgdmFyIFMzMSA9IDQ7XG4gIHZhciBTMzIgPSAxMTtcbiAgdmFyIFMzMyA9IDE2O1xuICB2YXIgUzM0ID0gMjM7XG4gIHZhciBTNDEgPSA2O1xuICB2YXIgUzQyID0gMTA7XG4gIHZhciBTNDMgPSAxNTtcbiAgdmFyIFM0NCA9IDIxO1xuXG4gIHN0ciA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgeCA9IF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKTtcbiAgYSA9IDB4Njc0NTIzMDE7XG4gIGIgPSAweEVGQ0RBQjg5O1xuICBjID0gMHg5OEJBRENGRTtcbiAgZCA9IDB4MTAzMjU0NzY7XG5cbiAgeGwgPSB4Lmxlbmd0aDtcbiAgZm9yIChrID0gMDsgayA8IHhsOyBrICs9IDE2KSB7XG4gICAgQUEgPSBhO1xuICAgIEJCID0gYjtcbiAgICBDQyA9IGM7XG4gICAgREQgPSBkO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxXSwgUzEyLCAweEU4QzdCNzU2KTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzExLCAweEY1N0MwRkFGKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyA3XSwgUzE0LCAweEZENDY5NTAxKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFMxMywgMHhGRkZGNUJCMSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxM10sIFMxMiwgMHhGRDk4NzE5Myk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzIxLCAweEY2MUUyNTYyKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMF0sIFMyNCwgMHhFOUI2QzdBQSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMjMsIDB4RDhBMUU2ODEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgQUEpO1xuICAgIGIgPSBfYWRkVW5zaWduZWQoYiwgQkIpO1xuICAgIGMgPSBfYWRkVW5zaWduZWQoYywgQ0MpO1xuICAgIGQgPSBfYWRkVW5zaWduZWQoZCwgREQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBfd29yZFRvSGV4KGEpICsgX3dvcmRUb0hleChiKSArIF93b3JkVG9IZXgoYykgKyBfd29yZFRvSGV4KGQpO1xuXG4gIHJldHVybiB0ZW1wLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV9zdHIoc3RyLCBhcnJheSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2Vfc3RyL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBDYWdyaSBFa2luXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogc3RhZzAxOVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogWmFpZGUgKGh0dHA6Ly96YWlkZXN0aGluZ3MuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogRGF2aWQgUGVzdGEgKGh0dHA6Ly9kYXZpZHBlc3RhLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGplaWNxdWVzdFxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWQsIHdpbGwgcHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUuXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gYSBwYXJ0aWN1bGFyIGFyZ3VtZW50IGhhcyBiZWVuIHBhc3NlZCwgYW5kIHRoZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiByZXR1cm5lZCB2YWx1ZSBpcyBkaWZmZXJlbnQgcGFyc2Vfc3RyIG9mIFBIUC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogRm9yIGV4YW1wbGUsIGE9Yj1jJmQ9PT09Y1xuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3N0cignZmlyc3Q9Zm9vJnNlY29uZD1iYXInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMTogeyBmaXJzdDogJ2ZvbycsIHNlY29uZDogJ2JhcicgfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3N0cignc3RyX2E9SmFjaythbmQrSmlsbCtkaWRuJTI3dCtzZWUrdGhlK3dlbGwuJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHsgc3RyX2E6IFwiSmFjayBhbmQgSmlsbCBkaWRuJ3Qgc2VlIHRoZSB3ZWxsLlwiIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRhYmMgPSB7MzonYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3N0cignYVtiXVtcImNcIl09ZGVmJmFbcV09dCs1JywgJGFiYylcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkYWJjXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtcIjNcIjpcImFcIixcImFcIjp7XCJiXCI6e1wiY1wiOlwiZGVmXCJ9LFwicVwiOlwidCA1XCJ9fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3N0cignYVtdW109dmFsdWUnLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNDoge1wiYVwiOntcIjBcIjp7XCIwXCI6XCJ2YWx1ZVwifX19XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogcGFyc2Vfc3RyKCdhPTEmYVtdPTInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNToge1wiYVwiOntcIjBcIjpcIjJcIn19XG5cbiAgdmFyIHN0ckFyciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL14mLywgJycpLnJlcGxhY2UoLyYkLywgJycpLnNwbGl0KCcmJyk7XG4gIHZhciBzYWwgPSBzdHJBcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBjdDtcbiAgdmFyIHA7XG4gIHZhciBsYXN0T2JqO1xuICB2YXIgb2JqO1xuICB2YXIgY2hyO1xuICB2YXIgdG1wO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBwb3N0TGVmdEJyYWNrZXRQb3M7XG4gIHZhciBrZXlzO1xuICB2YXIga2V5c0xlbjtcblxuICB2YXIgX2ZpeFN0ciA9IGZ1bmN0aW9uIF9maXhTdHIoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gIH07XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgYXJyYXkgPSAkZ2xvYmFsO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNhbDsgaSsrKSB7XG4gICAgdG1wID0gc3RyQXJyW2ldLnNwbGl0KCc9Jyk7XG4gICAga2V5ID0gX2ZpeFN0cih0bXBbMF0pO1xuICAgIHZhbHVlID0gdG1wLmxlbmd0aCA8IDIgPyAnJyA6IF9maXhTdHIodG1wWzFdKTtcblxuICAgIHdoaWxlIChrZXkuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJ1xceDAwJykgPiAtMSkge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCdcXHgwMCcpKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICYmIGtleS5jaGFyQXQoMCkgIT09ICdbJykge1xuICAgICAga2V5cyA9IFtdO1xuICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ1snICYmICFwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSBqICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY2hhckF0KGopID09PSAnXScpIHtcbiAgICAgICAgICBpZiAocG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc2xpY2UoMCwgcG9zdExlZnRCcmFja2V0UG9zIC0gMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cihwb3N0TGVmdEJyYWNrZXRQb3MsIGogLSBwb3N0TGVmdEJyYWNrZXRQb3MpKTtcbiAgICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGogKyAxKSAhPT0gJ1snKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleXNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY2hyID0ga2V5c1swXS5jaGFyQXQoaik7XG5cbiAgICAgICAgaWYgKGNociA9PT0gJyAnIHx8IGNociA9PT0gJy4nIHx8IGNociA9PT0gJ1snKSB7XG4gICAgICAgICAga2V5c1swXSA9IGtleXNbMF0uc3Vic3RyKDAsIGopICsgJ18nICsga2V5c1swXS5zdWJzdHIoaiArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNociA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqID0gYXJyYXk7XG5cbiAgICAgIGZvciAoaiA9IDAsIGtleXNMZW4gPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW47IGorKykge1xuICAgICAgICBrZXkgPSBrZXlzW2pdLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgICAgIGxhc3RPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKChrZXkgPT09ICcnIHx8IGtleSA9PT0gJyAnKSAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgLy8gSW5zZXJ0IG5ldyBkaW1lbnNpb25cbiAgICAgICAgICBjdCA9IC0xO1xuXG4gICAgICAgICAgZm9yIChwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICBpZiAoK3AgPiBjdCAmJiBwLm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgICAgICAgICAgICBjdCA9ICtwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gY3QgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJpbWl0aXZlIHZhbHVlLCByZXBsYWNlIHdpdGggb2JqZWN0XG4gICAgICAgIGlmIChPYmplY3Qob2JqW2tleV0pICE9PSBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGFzdE9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vfc3RyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cl9yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZSwgc3ViamVjdCwgY291bnRPYmopIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJfcmVwbGFjZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBHYWJyaWVsIFBhZGVybmlcbiAgLy8gaW1wcm92ZWQgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyBpbXByb3ZlZCBieTogU2ltb24gV2lsbGlzb24gKGh0dHA6Ly9zaW1vbndpbGxpc29uLm5ldClcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgcmV2aXNlZCBieTogSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIChodHRwOi8vd3d3LmpzZnJvbWhlbGwuY29tKVxuICAvLyBidWdmaXhlZCBieTogQW50b24gT25nc29uXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogT2xlZyBFcmVtZWV2XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBHbGVuIEFyYXNvbiAoaHR0cDovL0NhbmFkaWFuRG9tYWluUmVnaXN0cnkuY2EpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBHbGVuIEFyYXNvbiAoaHR0cDovL0NhbmFkaWFuRG9tYWluUmVnaXN0cnkuY2EpXG4gIC8vICAgIGlucHV0IGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogT2xlZyBFcmVtZWV2XG4gIC8vICAgICAgbm90ZSAxOiBUaGUgY291bnRPYmogcGFyYW1ldGVyIChvcHRpb25hbCkgaWYgdXNlZCBtdXN0IGJlIHBhc3NlZCBpbiBhcyBhXG4gIC8vICAgICAgbm90ZSAxOiBvYmplY3QuIFRoZSBjb3VudCB3aWxsIHRoZW4gYmUgd3JpdHRlbiBieSByZWZlcmVuY2UgaW50byBpdCdzIGB2YWx1ZWAgcHJvcGVydHlcbiAgLy8gICBleGFtcGxlIDE6IHN0cl9yZXBsYWNlKCcgJywgJy4nLCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4udmFuLlpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IHN0cl9yZXBsYWNlKFsne25hbWV9JywgJ2wnXSwgWydoZWxsbycsICdtJ10sICd7bmFtZX0sIGxhcnMnKVxuICAvLyAgIHJldHVybnMgMjogJ2hlbW1vLCBtYXJzJ1xuICAvLyAgIGV4YW1wbGUgMzogc3RyX3JlcGxhY2UoQXJyYXkoJ1MnLCdGJyksJ3gnLCdBU0RGQVNERicpXG4gIC8vICAgcmV0dXJucyAzOiAnQXhEeEF4RHgnXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgY291bnRPYmogPSB7fVxuICAvLyAgIGV4YW1wbGUgNDogc3RyX3JlcGxhY2UoWydBJywnRCddLCBbJ3gnLCd5J10gLCAnQVNERkFTREYnICwgY291bnRPYmopXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9IGNvdW50T2JqLnZhbHVlXG4gIC8vICAgcmV0dXJucyA0OiA0XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciB0ZW1wID0gJyc7XG4gIHZhciByZXBsID0gJyc7XG4gIHZhciBzbCA9IDA7XG4gIHZhciBmbCA9IDA7XG4gIHZhciBmID0gW10uY29uY2F0KHNlYXJjaCk7XG4gIHZhciByID0gW10uY29uY2F0KHJlcGxhY2UpO1xuICB2YXIgcyA9IHN1YmplY3Q7XG4gIHZhciByYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgdmFyIHNhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHMpID09PSAnW29iamVjdCBBcnJheV0nO1xuICBzID0gW10uY29uY2F0KHMpO1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG5cbiAgaWYgKCh0eXBlb2Ygc2VhcmNoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWFyY2gpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlcGxhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgdGVtcCA9IHJlcGxhY2U7XG4gICAgcmVwbGFjZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzZWFyY2gubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJlcGxhY2VbaV0gPSB0ZW1wO1xuICAgIH1cbiAgICB0ZW1wID0gJyc7XG4gICAgciA9IFtdLmNvbmNhdChyZXBsYWNlKTtcbiAgICByYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgY291bnRPYmogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY291bnRPYmoudmFsdWUgPSAwO1xuICB9XG5cbiAgZm9yIChpID0gMCwgc2wgPSBzLmxlbmd0aDsgaSA8IHNsOyBpKyspIHtcbiAgICBpZiAoc1tpXSA9PT0gJycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKGogPSAwLCBmbCA9IGYubGVuZ3RoOyBqIDwgZmw7IGorKykge1xuICAgICAgdGVtcCA9IHNbaV0gKyAnJztcbiAgICAgIHJlcGwgPSByYSA/IHJbal0gIT09IHVuZGVmaW5lZCA/IHJbal0gOiAnJyA6IHJbMF07XG4gICAgICBzW2ldID0gdGVtcC5zcGxpdChmW2pdKS5qb2luKHJlcGwpO1xuICAgICAgaWYgKHR5cGVvZiBjb3VudE9iaiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY291bnRPYmoudmFsdWUgKz0gdGVtcC5zcGxpdChmW2pdKS5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2EgPyBzIDogc1swXTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJfcmVwbGFjZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RydG9sb3dlcihzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJ0b2xvd2VyL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICBleGFtcGxlIDE6IHN0cnRvbG93ZXIoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ2tldmluIHZhbiB6b25uZXZlbGQnXG5cbiAgcmV0dXJuIChzdHIgKyAnJykudG9Mb3dlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJ0b2xvd2VyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJ0b3VwcGVyKHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cnRvdXBwZXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgIGV4YW1wbGUgMTogc3RydG91cHBlcignS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS0VWSU4gVkFOIFpPTk5FVkVMRCdcblxuICByZXR1cm4gKHN0ciArICcnKS50b1VwcGVyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnRvdXBwZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9kZWNvZGUoZW5jb2RlZERhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZGVjb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEFtYW4gR3VwdGFcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZGVjb2RlKCdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09JylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2RlY29kZSgnWVE9PScpXG4gIC8vICAgcmV0dXJucyAyOiAnYSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9kZWNvZGUoJzRweVRJTU9nSUd4aElHMXZaR1U9JylcbiAgLy8gICByZXR1cm5zIDM6ICfinJMgw6AgbGEgbW9kZSdcblxuICAvLyBkZWNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZGVjb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGRlY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBkZWNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hdG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcod2luZG93LmF0b2IoZW5jb2RlZERhdGEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5jb2RlZERhdGEsICdiYXNlNjQnKS50b1N0cmluZygndXRmLTgnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBkZWMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlZERhdGE7XG4gIH1cblxuICBlbmNvZGVkRGF0YSArPSAnJztcblxuICBkbyB7XG4gICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcbiAgICBoMSA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMiA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMyA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoNCA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcblxuICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuXG4gICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcbiAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XG4gICAgbzMgPSBiaXRzICYgMHhmZjtcblxuICAgIGlmIChoMyA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xuICAgIH0gZWxzZSBpZiAoaDQgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgZW5jb2RlZERhdGEubGVuZ3RoKTtcblxuICBkZWMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZW5jb2RlKHN0cmluZ1RvRW5jb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJheXJvbiBHdWV2YXJhXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PSdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9lbmNvZGUoJ2EnKVxuICAvLyAgIHJldHVybnMgMjogJ1lRPT0nXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZW5jb2RlKCfinJMgw6AgbGEgbW9kZScpXG4gIC8vICAgcmV0dXJucyAzOiAnNHB5VElNT2dJR3hoSUcxdlpHVT0nXG5cbiAgLy8gZW5jb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGVuY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBlbmNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZW5jb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBmaXJzdCB3ZSB1c2UgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGdldCBwZXJjZW50LWVuY29kZWQgVVRGLTgsXG4gICAgLy8gdGhlbiB3ZSBjb252ZXJ0IHRoZSBwZXJjZW50IGVuY29kaW5ncyBpbnRvIHJhdyBieXRlcyB3aGljaFxuICAgIC8vIGNhbiBiZSBmZWQgaW50byB0aGUgYmFzZTY0IGVuY29kaW5nIGFsZ29yaXRobS5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5idG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nVG9FbmNvZGUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBlbmMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghc3RyaW5nVG9FbmNvZGUpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9FbmNvZGU7XG4gIH1cblxuICBzdHJpbmdUb0VuY29kZSA9IGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpO1xuXG4gIGRvIHtcbiAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXG4gICAgbzEgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzIgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzMgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICBiaXRzID0gbzEgPDwgMTYgfCBvMiA8PCA4IHwgbzM7XG5cbiAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xuICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XG4gICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xuICAgIGg0ID0gYml0cyAmIDB4M2Y7XG5cbiAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xuICAgIHRtcEFyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xuICB9IHdoaWxlIChpIDwgc3RyaW5nVG9FbmNvZGUubGVuZ3RoKTtcblxuICBlbmMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgdmFyIHIgPSBzdHJpbmdUb0VuY29kZS5sZW5ndGggJSAzO1xuXG4gIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBib29sdmFsKG1peGVkVmFyKSB7XG4gIC8vIG9yaWdpbmFsIGJ5OiBXaWxsIFJvd2VcbiAgLy8gICBleGFtcGxlIDE6IGJvb2x2YWwodHJ1ZSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGJvb2x2YWwoZmFsc2UpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogYm9vbHZhbCgwKVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDQ6IGJvb2x2YWwoMC4wKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGJvb2x2YWwoJycpXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNjogYm9vbHZhbCgnMCcpXG4gIC8vICAgcmV0dXJucyA2OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNzogYm9vbHZhbChbXSlcbiAgLy8gICByZXR1cm5zIDc6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA4OiBib29sdmFsKCcnKVxuICAvLyAgIHJldHVybnMgODogZmFsc2VcbiAgLy8gICBleGFtcGxlIDk6IGJvb2x2YWwobnVsbClcbiAgLy8gICByZXR1cm5zIDk6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAxMDogYm9vbHZhbCh1bmRlZmluZWQpXG4gIC8vICAgcmV0dXJucyAxMDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDExOiBib29sdmFsKCd0cnVlJylcbiAgLy8gICByZXR1cm5zIDExOiB0cnVlXG5cbiAgaWYgKG1peGVkVmFyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gMCB8fCBtaXhlZFZhciA9PT0gMC4wKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSAnJyB8fCBtaXhlZFZhciA9PT0gJzAnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWl4ZWRWYXIpICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gbnVsbCB8fCBtaXhlZFZhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vbHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbXB0eShtaXhlZFZhcikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2VtcHR5L1xuICAvLyBvcmlnaW5hbCBieTogUGhpbGlwcGUgQmF1bWFublxuICAvLyAgICBpbnB1dCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICBpbnB1dCBieTogTEhcbiAgLy8gICAgaW5wdXQgYnk6IFN0b3lhbiBLeW9zZXYgKGh0dHA6Ly93d3cuc3Zlc3Qub3JnLylcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBGcmFuY2VzY29cbiAgLy8gaW1wcm92ZWQgYnk6IE1hcmMgSmFuc2VuXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogZW1wdHkobnVsbClcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGVtcHR5KHVuZGVmaW5lZClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IGVtcHR5KFtdKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogZW1wdHkoe30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG4gIC8vICAgZXhhbXBsZSA1OiBlbXB0eSh7J2FGdW5jJyA6IGZ1bmN0aW9uICgpIHsgYWxlcnQoJ2h1bXB0eScpOyB9IH0pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuXG4gIHZhciB1bmRlZjtcbiAgdmFyIGtleTtcbiAgdmFyIGk7XG4gIHZhciBsZW47XG4gIHZhciBlbXB0eVZhbHVlcyA9IFt1bmRlZiwgbnVsbCwgZmFsc2UsIDAsICcnLCAnMCddO1xuXG4gIGZvciAoaSA9IDAsIGxlbiA9IGVtcHR5VmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKG1peGVkVmFyID09PSBlbXB0eVZhbHVlc1tpXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChrZXkgaW4gbWl4ZWRWYXIpIHtcbiAgICAgIGlmIChtaXhlZFZhci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxvYXR2YWwobWl4ZWRWYXIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mbG9hdHZhbC9cbiAgLy8gb3JpZ2luYWwgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIG5hdGl2ZSBwYXJzZUZsb2F0KCkgbWV0aG9kIG9mIEphdmFTY3JpcHQgcmV0dXJucyBOYU5cbiAgLy8gICAgICBub3RlIDE6IHdoZW4gaXQgZW5jb3VudGVycyBhIHN0cmluZyBiZWZvcmUgYW4gaW50IG9yIGZsb2F0IHZhbHVlLlxuICAvLyAgIGV4YW1wbGUgMTogZmxvYXR2YWwoJzE1MC4wM19wYWdlLXNlY3Rpb24nKVxuICAvLyAgIHJldHVybnMgMTogMTUwLjAzXG4gIC8vICAgZXhhbXBsZSAyOiBmbG9hdHZhbCgncGFnZTogMycpXG4gIC8vICAgZXhhbXBsZSAyOiBmbG9hdHZhbCgnLTUwICsgOCcpXG4gIC8vICAgcmV0dXJucyAyOiAwXG4gIC8vICAgcmV0dXJucyAyOiAtNTBcblxuICByZXR1cm4gcGFyc2VGbG9hdChtaXhlZFZhcikgfHwgMDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbG9hdHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnR2YWwobWl4ZWRWYXIsIGJhc2UpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbnR2YWwvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc3RlbnNpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgIGlucHV0IGJ5OiBNYXR0ZW9cbiAgLy8gICBleGFtcGxlIDE6IGludHZhbCgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAwXG4gIC8vICAgZXhhbXBsZSAyOiBpbnR2YWwoNC4yKVxuICAvLyAgIHJldHVybnMgMjogNFxuICAvLyAgIGV4YW1wbGUgMzogaW50dmFsKDQyLCA4KVxuICAvLyAgIHJldHVybnMgMzogNDJcbiAgLy8gICBleGFtcGxlIDQ6IGludHZhbCgnMDknKVxuICAvLyAgIHJldHVybnMgNDogOVxuICAvLyAgIGV4YW1wbGUgNTogaW50dmFsKCcxZScsIDE2KVxuICAvLyAgIHJldHVybnMgNTogMzBcbiAgLy8gICBleGFtcGxlIDY6IGludHZhbCgweDIwMDAwMDAwMSlcbiAgLy8gICByZXR1cm5zIDY6IDg1ODk5MzQ1OTNcbiAgLy8gICBleGFtcGxlIDc6IGludHZhbCgnMHhmZicsIDApXG4gIC8vICAgcmV0dXJucyA3OiAyNTVcbiAgLy8gICBleGFtcGxlIDg6IGludHZhbCgnMDEwJywgMClcbiAgLy8gICByZXR1cm5zIDg6IDhcblxuICB2YXIgdG1wLCBtYXRjaDtcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpO1xuXG4gIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gK21peGVkVmFyO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGJhc2UgPT09IDApIHtcbiAgICAgIG1hdGNoID0gbWl4ZWRWYXIubWF0Y2goL15cXHMqMCh4PykvaSk7XG4gICAgICBiYXNlID0gbWF0Y2ggPyBtYXRjaFsxXSA/IDE2IDogOCA6IDEwO1xuICAgIH1cbiAgICB0bXAgPSBwYXJzZUludChtaXhlZFZhciwgYmFzZSB8fCAxMCk7XG4gICAgcmV0dXJuIGlzTmFOKHRtcCkgfHwgIWlzRmluaXRlKHRtcCkgPyAwIDogdG1wO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKG1peGVkVmFyKSkge1xuICAgIHJldHVybiBtaXhlZFZhciA8IDAgPyBNYXRoLmNlaWwobWl4ZWRWYXIpIDogTWF0aC5mbG9vcihtaXhlZFZhcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnR2YWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfYXJyYXkobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogTmF0aGFuIFNlcHVsdmVkYVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IENvcmRcbiAgLy8gYnVnZml4ZWQgYnk6IE1hbmlzaFxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IEluIExvY3V0dXMsIGphdmFzY3JpcHQgb2JqZWN0cyBhcmUgbGlrZSBwaHAgYXNzb2NpYXRpdmUgYXJyYXlzLFxuICAvLyAgICAgIG5vdGUgMTogdGh1cyBKYXZhU2NyaXB0IG9iamVjdHMgd2lsbCBhbHNvXG4gIC8vICAgICAgbm90ZSAxOiByZXR1cm4gdHJ1ZSBpbiB0aGlzIGZ1bmN0aW9uIChleGNlcHQgZm9yIG9iamVjdHMgd2hpY2ggaW5oZXJpdCBwcm9wZXJ0aWVzLFxuICAvLyAgICAgIG5vdGUgMTogYmVpbmcgdGh1cyB1c2VkIGFzIG9iamVjdHMpLFxuICAvLyAgICAgIG5vdGUgMTogdW5sZXNzIHlvdSBkbyBpbmlfc2V0KCdsb2N1dHVzLm9iamVjdHNBc0FycmF5cycsIDApLFxuICAvLyAgICAgIG5vdGUgMTogaW4gd2hpY2ggY2FzZSBvbmx5IGdlbnVpbmUgSmF2YVNjcmlwdCBhcnJheXNcbiAgLy8gICAgICBub3RlIDE6IHdpbGwgcmV0dXJuIHRydWVcbiAgLy8gICBleGFtcGxlIDE6IGlzX2FycmF5KFsnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfYXJyYXkoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX2FycmF5KHswOiAnS2V2aW4nLCAxOiAndmFuJywgMjogJ1pvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaW5pX3NldCgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnLCAwKVxuICAvLyAgIGV4YW1wbGUgNDogaXNfYXJyYXkoezA6ICdLZXZpbicsIDE6ICd2YW4nLCAyOiAnWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNTogaXNfYXJyYXkoZnVuY3Rpb24gdG1wX2EgKCl7IHRoaXMubmFtZSA9ICdLZXZpbicgfSlcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG5cbiAgdmFyIF9nZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIF9nZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcbiAgdmFyIF9pc0FycmF5ID0gZnVuY3Rpb24gX2lzQXJyYXkobWl4ZWRWYXIpIHtcbiAgICAvLyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAvLyBUaGUgYWJvdmUgd29ya3MsIGJ1dCBsZXQncyBkbyB0aGUgZXZlbiBtb3JlIHN0cmluZ2VudCBhcHByb2FjaDpcbiAgICAvLyAoc2luY2UgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyBjb3VsZCBiZSBvdmVycmlkZGVuKVxuICAgIC8vIE51bGwsIE5vdCBhbiBvYmplY3QsIG5vIGxlbmd0aCBwcm9wZXJ0eSBzbyBjb3VsZG4ndCBiZSBhbiBBcnJheSAob3IgU3RyaW5nKVxuICAgIGlmICghbWl4ZWRWYXIgfHwgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG1peGVkVmFyLmxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGxlbiA9IG1peGVkVmFyLmxlbmd0aDtcbiAgICBtaXhlZFZhclttaXhlZFZhci5sZW5ndGhdID0gJ2JvZ3VzJztcbiAgICAvLyBUaGUgb25seSB3YXkgSSBjYW4gdGhpbmsgb2YgdG8gZ2V0IGFyb3VuZCB0aGlzIChvciB3aGVyZSB0aGVyZSB3b3VsZCBiZSB0cm91YmxlKVxuICAgIC8vIHdvdWxkIGJlIHRvIGhhdmUgYW4gb2JqZWN0IGRlZmluZWRcbiAgICAvLyB3aXRoIGEgY3VzdG9tIFwibGVuZ3RoXCIgZ2V0dGVyIHdoaWNoIGNoYW5nZWQgYmVoYXZpb3Igb24gZWFjaCBjYWxsXG4gICAgLy8gKG9yIGEgc2V0dGVyIHRvIG1lc3MgdXAgdGhlIGZvbGxvd2luZyBiZWxvdykgb3IgYSBjdXN0b21cbiAgICAvLyBzZXR0ZXIgZm9yIG51bWVyaWMgcHJvcGVydGllcywgYnV0IGV2ZW4gdGhhdCB3b3VsZCBuZWVkIHRvIGxpc3RlbiBmb3JcbiAgICAvLyBzcGVjaWZpYyBpbmRleGVzOyBidXQgdGhlcmUgc2hvdWxkIGJlIG5vIGZhbHNlIG5lZ2F0aXZlc1xuICAgIC8vIGFuZCBzdWNoIGEgZmFsc2UgcG9zaXRpdmUgd291bGQgbmVlZCB0byByZWx5IG9uIGxhdGVyIEphdmFTY3JpcHRcbiAgICAvLyBpbm5vdmF0aW9ucyBsaWtlIF9fZGVmaW5lU2V0dGVyX19cbiAgICBpZiAobGVuICE9PSBtaXhlZFZhci5sZW5ndGgpIHtcbiAgICAgIC8vIFdlIGtub3cgaXQncyBhbiBhcnJheSBzaW5jZSBsZW5ndGggYXV0by1jaGFuZ2VkIHdpdGggdGhlIGFkZGl0aW9uIG9mIGFcbiAgICAgIC8vIG51bWVyaWMgcHJvcGVydHkgYXQgaXRzIGxlbmd0aCBlbmQsIHNvIHNhZmVseSBnZXQgcmlkIG9mIG91ciBib2d1cyBlbGVtZW50XG4gICAgICBtaXhlZFZhci5sZW5ndGggLT0gMTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBHZXQgcmlkIG9mIHRoZSBwcm9wZXJ0eSB3ZSBhZGRlZCBvbnRvIGEgbm9uLWFycmF5IG9iamVjdDsgb25seSBwb3NzaWJsZVxuICAgIC8vIHNpZGUtZWZmZWN0IGlzIGlmIHRoZSB1c2VyIGFkZHMgYmFjayB0aGUgcHJvcGVydHkgbGF0ZXIsIGl0IHdpbGwgaXRlcmF0ZVxuICAgIC8vIHRoaXMgcHJvcGVydHkgaW4gdGhlIG9sZGVyIG9yZGVyIHBsYWNlbWVudCBpbiBJRSAoYW4gb3JkZXIgd2hpY2ggc2hvdWxkIG5vdFxuICAgIC8vIGJlIGRlcGVuZGVkIG9uIGFueXdheXMpXG4gICAgZGVsZXRlIG1peGVkVmFyW21peGVkVmFyLmxlbmd0aF07XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGlmICghbWl4ZWRWYXIgfHwgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNBcnJheSA9IF9pc0FycmF5KG1peGVkVmFyKTtcblxuICBpZiAoaXNBcnJheSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGluaVZhbCA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnKSA6IHVuZGVmaW5lZCkgfHwgJ29uJztcbiAgaWYgKGluaVZhbCA9PT0gJ29uJykge1xuICAgIHZhciBhc1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcik7XG4gICAgdmFyIGFzRnVuYyA9IF9nZXRGdW5jTmFtZShtaXhlZFZhci5jb25zdHJ1Y3Rvcik7XG5cbiAgICBpZiAoYXNTdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmIGFzRnVuYyA9PT0gJ09iamVjdCcpIHtcbiAgICAgIC8vIE1vc3QgbGlrZWx5IGEgbGl0ZXJhbCBhbmQgaW50ZW5kZWQgYXMgYXNzb2MuIGFycmF5XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfYXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfYm9vbChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2Jvb2wvXG4gIC8vIG9yaWdpbmFsIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBDb3Vyc2VzV2ViIChodHRwOi8vd3d3LmNvdXJzZXN3ZWIubmV0LylcbiAgLy8gICBleGFtcGxlIDE6IGlzX2Jvb2woZmFsc2UpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19ib29sKDApXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiBtaXhlZFZhciA9PT0gdHJ1ZSB8fCBtaXhlZFZhciA9PT0gZmFsc2U7IC8vIEZhc3RlciAoaW4gRkYpIHRoYW4gdHlwZSBjaGVja2luZ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2Jvb2wuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfY2FsbGFibGUobWl4ZWRWYXIsIHN5bnRheE9ubHksIGNhbGxhYmxlTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2NhbGxhYmxlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IEZyYW7Dp29pc1xuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSB2YXJpYWJsZSBjYWxsYWJsZU5hbWUgY2Fubm90IHdvcmsgYXMgYSBzdHJpbmcgdmFyaWFibGUgcGFzc2VkIGJ5XG4gIC8vICAgICAgbm90ZSAxOiByZWZlcmVuY2UgYXMgaW4gUEhQIChzaW5jZSBKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZ1xuICAvLyAgICAgIG5vdGUgMTogc3RyaW5ncyBieSByZWZlcmVuY2UpLCBidXQgaW5zdGVhZCB3aWxsIHRha2UgdGhlIG5hbWUgb2ZcbiAgLy8gICAgICBub3RlIDE6IGEgZ2xvYmFsIHZhcmlhYmxlIGFuZCBzZXQgdGhhdCBpbnN0ZWFkLlxuICAvLyAgICAgIG5vdGUgMTogV2hlbiB1c2VkIG9uIGFuIG9iamVjdCwgZGVwZW5kcyBvbiBhIGNvbnN0cnVjdG9yIHByb3BlcnR5XG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyBrZXB0IG9uIHRoZSBvYmplY3QgcHJvdG90eXBlXG4gIC8vICAgICAgbm90ZSAyOiBEZXBlbmRpbmcgb24gdGhlIGBjYWxsYWJsZU5hbWVgIHRoYXQgaXMgcGFzc2VkLCB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgZXZhbC5cbiAgLy8gICAgICBub3RlIDI6IFRoZSBldmFsIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMjogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMjogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogaXNfY2FsbGFibGUoJ2lzX2NhbGxhYmxlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2NhbGxhYmxlKCdib2d1c0Z1bmN0aW9uJywgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWUgLy8gZ2l2ZXMgdHJ1ZSBiZWNhdXNlIGRvZXMgbm90IGRvIHN0cmljdCBjaGVja2luZ1xuICAvLyAgIGV4YW1wbGUgMzogZnVuY3Rpb24gU29tZUNsYXNzICgpIHt9XG4gIC8vICAgZXhhbXBsZSAzOiBTb21lQ2xhc3MucHJvdG90eXBlLnNvbWVNZXRob2QgPSBmdW5jdGlvbiAoKXt9XG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgdGVzdE9iaiA9IG5ldyBTb21lQ2xhc3MoKVxuICAvLyAgIGV4YW1wbGUgMzogaXNfY2FsbGFibGUoW3Rlc3RPYmosICdzb21lTWV0aG9kJ10sIHRydWUsICdteVZhcicpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9IG15VmFyXG4gIC8vICAgcmV0dXJucyAzOiAnU29tZUNsYXNzOjpzb21lTWV0aG9kJ1xuICAvLyAgIGV4YW1wbGUgNDogaXNfY2FsbGFibGUoZnVuY3Rpb24gKCkge30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgbWV0aG9kID0gJyc7XG4gIHZhciB2YWxpZEZ1bmN0aW9uTmFtZSA9IGZhbHNlO1xuXG4gIHZhciBnZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIGdldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gJGdsb2JhbDtcbiAgICBtZXRob2QgPSBtaXhlZFZhcjtcbiAgICBuYW1lID0gbWl4ZWRWYXI7XG4gICAgdmFsaWRGdW5jdGlvbk5hbWUgPSAhIW5hbWUubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAyICYmIF90eXBlb2YobWl4ZWRWYXJbMF0pID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbWl4ZWRWYXJbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gbWl4ZWRWYXJbMF07XG4gICAgbWV0aG9kID0gbWl4ZWRWYXJbMV07XG4gICAgbmFtZSA9IChvYmouY29uc3RydWN0b3IgJiYgZ2V0RnVuY05hbWUob2JqLmNvbnN0cnVjdG9yKSkgKyAnOjonICsgbWV0aG9kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzeW50YXhPbmx5IHx8IHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdmFsaWRGdW5jdGlvbk5hbWUgYXZvaWRzIGV4cGxvaXRzXG4gIGlmICh2YWxpZEZ1bmN0aW9uTmFtZSAmJiB0eXBlb2YgZXZhbChtZXRob2QpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfY2FsbGFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfZmxvYXQobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19mbG9hdC9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICAgICBub3RlIDE6IDEuMCBpcyBzaW1wbGlmaWVkIHRvIDEgYmVmb3JlIGl0IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgZnVuY3Rpb24sIHRoaXMgbWFrZXNcbiAgLy8gICAgICBub3RlIDE6IGl0IGRpZmZlcmVudCBmcm9tIHRoZSBQSFAgaW1wbGVtZW50YXRpb24uIFdlIGNhbid0IGZpeCB0aGlzIHVuZm9ydHVuYXRlbHkuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19mbG9hdCgxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgcmV0dXJuICttaXhlZFZhciA9PT0gbWl4ZWRWYXIgJiYgKCFpc0Zpbml0ZShtaXhlZFZhcikgfHwgISEobWl4ZWRWYXIgJSAxKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfZmxvYXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfaW50KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfaW50L1xuICAvLyBvcmlnaW5hbCBieTogQWxleFxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFdlYkRldkhvYm8gKGh0dHA6Ly93ZWJkZXZob2JvLmJsb2dzcG90LmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgcmV2aXNlZCBieTogTWF0dCBCcmFkbGV5XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIG5vdGUgMTogMS4wIGlzIHNpbXBsaWZpZWQgdG8gMSBiZWZvcmUgaXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBmdW5jdGlvbiwgdGhpcyBtYWtlc1xuICAvLyAgICAgIG5vdGUgMTogaXQgZGlmZmVyZW50IGZyb20gdGhlIFBIUCBpbXBsZW1lbnRhdGlvbi4gV2UgY2FuJ3QgZml4IHRoaXMgdW5mb3J0dW5hdGVseS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2ludCgyMylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2ludCgnMjMnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX2ludCgyMy41KVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2ludCh0cnVlKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09ICttaXhlZFZhciAmJiBpc0Zpbml0ZShtaXhlZFZhcikgJiYgIShtaXhlZFZhciAlIDEpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2ludC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19udWxsKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfbnVsbC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19udWxsKCcyMycpXG4gIC8vICAgcmV0dXJucyAxOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfbnVsbChudWxsKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHJldHVybiBtaXhlZFZhciA9PT0gbnVsbDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19udWxsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19udW1lcmljKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfbnVtZXJpYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBEYXZpZFxuICAvLyBpbXByb3ZlZCBieTogdGFpdGhcbiAgLy8gYnVnZml4ZWQgYnk6IFRpbSBkZSBLb25pbmdcbiAgLy8gYnVnZml4ZWQgYnk6IFdlYkRldkhvYm8gKGh0dHA6Ly93ZWJkZXZob2JvLmJsb2dzcG90LmNvbS8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogRGVuaXMgQ2hlbnUgKGh0dHA6Ly9zaG5vdWxsZS5uZXQpXG4gIC8vICAgZXhhbXBsZSAxOiBpc19udW1lcmljKDE4Ni4zMSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX251bWVyaWMoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX251bWVyaWMoJyArMTg2LjMxZTInKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaXNfbnVtZXJpYygnJylcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA1OiBpc19udW1lcmljKFtdKVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDY6IGlzX251bWVyaWMoJzEgJylcbiAgLy8gICByZXR1cm5zIDY6IGZhbHNlXG5cbiAgdmFyIHdoaXRlc3BhY2UgPSBbJyAnLCAnXFxuJywgJ1xccicsICdcXHQnLCAnXFxmJywgJ1xceDBiJywgJ1xceGEwJywgJ1xcdTIwMDAnLCAnXFx1MjAwMScsICdcXHUyMDAyJywgJ1xcdTIwMDMnLCAnXFx1MjAwNCcsICdcXHUyMDA1JywgJ1xcdTIwMDYnLCAnXFx1MjAwNycsICdcXHUyMDA4JywgJ1xcdTIwMDknLCAnXFx1MjAwQScsICdcXHUyMDBCJywgJ1xcdTIwMjgnLCAnXFx1MjAyOScsICdcXHUzMDAwJ10uam9pbignJyk7XG5cbiAgLy8gQHRvZG86IEJyZWFrIHRoaXMgdXAgdXNpbmcgbWFueSBzaW5nbGUgY29uZGl0aW9ucyB3aXRoIGVhcmx5IHJldHVybnNcbiAgcmV0dXJuICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdudW1iZXInIHx8IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZycgJiYgd2hpdGVzcGFjZS5pbmRleE9mKG1peGVkVmFyLnNsaWNlKC0xKSkgPT09IC0xKSAmJiBtaXhlZFZhciAhPT0gJycgJiYgIWlzTmFOKG1peGVkVmFyKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19udW1lcmljLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX29iamVjdChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX29iamVjdC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICBleGFtcGxlIDE6IGlzX29iamVjdCgnMjMnKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzX29iamVjdCh7Zm9vOiAnYmFyJ30pXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19vYmplY3QobnVsbClcbiAgLy8gICByZXR1cm5zIDM6IGZhbHNlXG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG1peGVkVmFyICE9PSBudWxsICYmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgPT09ICdvYmplY3QnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX29iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX3NjYWxhcihtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX3NjYWxhci9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gICBleGFtcGxlIDE6IGlzX3NjYWxhcigxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19zY2FsYXIoezA6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiAoL2Jvb2xlYW58bnVtYmVyfHN0cmluZy8udGVzdCh0eXBlb2YgbWl4ZWRWYXIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihtaXhlZFZhcikpXG4gICk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfc2NhbGFyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19zdHJpbmcobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19zdHJpbmcvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfc3RyaW5nKCcyMycpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19zdHJpbmcoMjMuNSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgcmV0dXJuIHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfc3RyaW5nLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc3NldCgpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc3NldC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBGcmVteUNvbXBhbnlcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgZXhhbXBsZSAxOiBpc3NldCggdW5kZWZpbmVkLCB0cnVlKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzc2V0KCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcgKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBhID0gYXJndW1lbnRzO1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciB1bmRlZjtcblxuICBpZiAobCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgaXNzZXQnKTtcbiAgfVxuXG4gIHdoaWxlIChpICE9PSBsKSB7XG4gICAgaWYgKGFbaV0gPT09IHVuZGVmIHx8IGFbaV0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNzZXQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHV0ZjhfZW5jb2RlKGFyZ1N0cmluZykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3V0ZjhfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc293YmVycnlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IFl2ZXMgU3VjYWV0XG4gIC8vIGltcHJvdmVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFVscmljaFxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyAgIGV4YW1wbGUgMTogdXRmOF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgaWYgKGFyZ1N0cmluZyA9PT0gbnVsbCB8fCB0eXBlb2YgYXJnU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIC5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpO1xuICB2YXIgc3RyaW5nID0gYXJnU3RyaW5nICsgJyc7XG4gIHZhciB1dGZ0ZXh0ID0gJyc7XG4gIHZhciBzdGFydDtcbiAgdmFyIGVuZDtcbiAgdmFyIHN0cmluZ2wgPSAwO1xuXG4gIHN0YXJ0ID0gZW5kID0gMDtcbiAgc3RyaW5nbCA9IHN0cmluZy5sZW5ndGg7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nbDsgbisrKSB7XG4gICAgdmFyIGMxID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG4gICAgdmFyIGVuYyA9IG51bGw7XG5cbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIGVuZCsrO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAxMjcgJiYgYzEgPCAyMDQ4KSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDYgfCAxOTIsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDEyIHwgMjI0LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdXJyb2dhdGUgcGFpcnNcbiAgICAgIGlmICgoYzEgJiAweEZDMDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCB0cmFpbCBzdXJyb2dhdGUgYXQgJyArIG4pO1xuICAgICAgfVxuICAgICAgdmFyIGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoKytuKTtcbiAgICAgIGlmICgoYzIgJiAweEZDMDApICE9PSAweERDMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCBsZWFkIHN1cnJvZ2F0ZSBhdCAnICsgKG4gLSAxKSk7XG4gICAgICB9XG4gICAgICBjMSA9ICgoYzEgJiAweDNGRikgPDwgMTApICsgKGMyICYgMHgzRkYpICsgMHgxMDAwMDtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTggfCAyNDAsIGMxID4+IDEyICYgNjMgfCAxMjgsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfVxuICAgIGlmIChlbmMgIT09IG51bGwpIHtcbiAgICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICAgIHV0ZnRleHQgKz0gZW5jO1xuICAgICAgc3RhcnQgPSBlbmQgPSBuICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgc3RyaW5nbCk7XG4gIH1cblxuICByZXR1cm4gdXRmdGV4dDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4X2VuY29kZS5qcy5tYXAiLCIvL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfY291bnRfdmFsdWVzJyBdICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2NvdW50X3ZhbHVlcycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbGwnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWxsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmlsbF9rZXlzJyBdICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZpbGxfa2V5cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbHRlcicgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWx0ZXInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9mbGlwJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmxpcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2tleV9leGlzdHMnIF0gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9rZXlfZXhpc3RzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfa2V5cycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2tleXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9tYXAnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWFwJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfcmV2ZXJzZScgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3JldmVyc2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9zZWFyY2gnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfc2VhcmNoJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfc3VtJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3N1bScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3VuaXF1ZScgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV91bmlxdWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdjdXJyZW50JyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvY3VycmVudCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2VuZCcgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9lbmQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdrZXknIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkva2V5JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbmV4dCcgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L25leHQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwb3MnIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcG9zJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJldicgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3ByZXYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyYW5nZScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcmFuZ2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyZXNldCcgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcmVzZXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzaXplb2YnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvc2l6ZW9mJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbmwyYnInIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbmwyYnInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdudW1iZXJfZm9ybWF0JyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9udW1iZXJfZm9ybWF0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJpbnRmJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3ByaW50ZicgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cl9yZXBlYXQnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl9yZXBlYXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfc3BsaXQnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfc3BsaXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfd29yZF9jb3VudCcgXSAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfd29yZF9jb3VudCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cmlwX3RhZ3MnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cmlwX3RhZ3MnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJpcHNsYXNoZXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJpcHNsYXNoZXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJzdHInIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJzdHInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJ0cicgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0cicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ZwcmludGYnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3ZwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2c3ByaW50ZicgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy92c3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3dvcmR3cmFwJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3dvcmR3cmFwJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJpbnRfcicgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9wcmludF9yJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc2VyaWFsaXplJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9zZXJpYWxpemUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1bnNlcmlhbGl6ZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3Vuc2VyaWFsaXplJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndmFyX2V4cG9ydCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci92YXJfZXhwb3J0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndmFyX2R1bXAnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci92YXJfZHVtcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ZlcnNpb25fY29tcGFyZScgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9pbmZvL3ZlcnNpb25fY29tcGFyZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2x0cmltJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL2x0cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncnRyaW0nIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd0cmltJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy90cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfd2FsaycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3dhbGsnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV93YWxrX3JlY3Vyc2l2ZScgXSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfd2Fsa19yZWN1cnNpdmUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkYXRlX3BhcnNlJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZGF0ZV9wYXJzZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2dldGRhdGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9nZXRkYXRlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYmFzZW5hbWUnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vYmFzZW5hbWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkaXJuYW1lJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZmlsZXN5c3RlbS9kaXJuYW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncGF0aGluZm8nIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vcGF0aGluZm8nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkYXRlJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZGF0ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cnRvdGltZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9zdHJ0b3RpbWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdodHRwX2J1aWxkX3F1ZXJ5JyBdICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2h0dHBfYnVpbGRfcXVlcnknICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19kb3VibGUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2RvdWJsZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2ludGVnZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfaW50ZWdlcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2xvbmcnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbG9uZycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX3JlYWwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfcmVhbCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX3VuaWNvZGUnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfdW5pY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2J1ZmZlcicgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfYnVmZmVyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZG91YmxldmFsJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9kb3VibGV2YWwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdnZXR0eXBlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2dldHR5cGUnICk7XHJcblxyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X21lcmdlJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV9tZXJnZV9yZWN1cnNpdmUnIF0gPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWVyZ2VfcmVjdXJzaXZlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3ZhbHVlcycgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV92YWx1ZXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY291bnQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2NvdW50JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2luX2FycmF5JyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9pbl9hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdtaWNyb3RpbWUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvbWljcm90aW1lJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RpbWUnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS90aW1lJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NhbGxfdXNlcl9mdW5jJyBdICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjYWxsX3VzZXJfZnVuY19hcnJheScgXSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZnVuY3Rpb25fZXhpc3RzJyBdICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VuaXFpZCcgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9taXNjL3VuaXFpZCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdleHBsb2RlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9leHBsb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2ltcGxvZGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL2ltcGxvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnbWQ1JyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX3N0cicgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJfcmVwbGFjZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfcmVwbGFjZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJ0b2xvd2VyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b2xvd2VyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3N0cnRvdXBwZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnRvdXBwZXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYmFzZTY0X2RlY29kZScgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9iYXNlNjRfZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jhc2U2NF9lbmNvZGUnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2VuY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX3VybCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmF3dXJsZGVjb2RlJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxkZWNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyYXd1cmxlbmNvZGUnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3Jhd3VybGVuY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VybGRlY29kZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndXJsZW5jb2RlJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC91cmxlbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYm9vbHZhbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2VtcHR5JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZW1wdHknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZmxvYXR2YWwnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbnR2YWwnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2ludHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19hcnJheScgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2Jvb2wnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfYm9vbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19jYWxsYWJsZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2Zsb2F0JyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfZmxvYXQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfaW50JyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19pbnQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfbnVsbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19udWxsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX251bWVyaWMnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19vYmplY3QnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zY2FsYXInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zdHJpbmcnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc3NldCcgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzc2V0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX2FyZ3MnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdqcy1wYXJzZS1hcmdzJyApO1xyXG5cclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX2NzdicgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2NzdicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV90b19odG1sX2F0dHInIF0gPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sX2F0dHInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9faHRtbCcgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV90b193aW5kb3cnIF0gICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b193aW5kb3cnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnd3JhcF9hcnJheScgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvd3JhcF9hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdva2cnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9va2cnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnb2tzJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvb2tzJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BsYWluX29iamVjdCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BsYWluX29iamVjdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19vYmplY3RfbGlrZScgXSAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19vYmplY3RfbGlrZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19hcnJheV9saWtlJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19vYmplY3RfbGlrZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjbG9uZV9vYmplY3QnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jbG9uZV9vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYWZ0ZXJfZGF0ZScgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfYWZ0ZXJfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19iZWZvcmVfZGF0ZScgXSAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19iZWZvcmVfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zYW1lX2RhdGUnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19zYW1lX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZm9ybWF0X2R1cmF0aW9uJyBdICAgID0gcmVxdWlyZSggJy4vcGFydHMvZm9ybWF0X2R1cmF0aW9uJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RpZmZfZGF5cycgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RpZmZfZGF5cycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc191bmRlZmluZWQnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc191bmRlZmluZWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfdGFiX2ZvY3VzZWQnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdGFiX2ZvY3VzZWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc2Nyb2xsX3RvX3RvcCcgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3RvX3RvcCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjb3B5X3RvX2NsaXAnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3B5X3RvX2NsaXAnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc2Nyb2xsX3BvcycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3BvcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc193aW5kb3dfYXJnJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc193aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3dpbmRvd19hcmcnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZGV2aWNlX3R5cGUnIF0gICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGV2aWNlX3R5cGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZGVidWcnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdGltZV90YWtlbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0aW1lX3Rha2VuJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BpcGVfbG9nJyBdICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BpcGVfbG9nJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NvdW50ZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2NvdW50ZXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndG9fanF1ZXJ5JyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdG9fanF1ZXJ5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RvX2pzX2Z1bmMnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pzX2Z1bmMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncmFuZF9tZDUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcmFuZF9tZDUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndXJsX3BhcmFtcycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdXJsX3BhcmFtcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdxdWVyeV9zdHJpbmcnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9xdWVyeV9zdHJpbmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfanF1ZXJ5JyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfanF1ZXJ5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Nzc191bml0cycgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2Nzc191bml0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2pzb25fdG9fY3N2JyBdICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2pzb25fdG9fY3N2JyApOyIsIi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gYXJyYXkgZWxlbWVudHMgaW50byA8bGk+IHRhZ3MgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgbGlzdCBvZiB0aGUgZ2l2ZW4gaWQuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKSwgYW5kIGFuIGFub255bW91cyBpbm5lciBjbG9zdXJlIHRvIGNyZWF0ZSBhIGxpc3Qgb2YgaHRtbCB0YWdzLlxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBsaXN0SURcclxuICogQHBhcmFtIHRhZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBhcnIsIGxpc3RJRCwgdGFnID0gJ2xpJyApID0+ICggZWwgPT4gKCAoIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbGlzdElEICkgKSwgKCBlbC5pbm5lckhUTUwgKz0gYXJyLm1hcCggaXRlbSA9PiBgPCR7dGFnfT4ke2l0ZW19PC8ke3RhZ30+YCApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbiggJycgKSApICkgKSgpOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcbmltcG9ydCBpc19vYmplY3RfbGlrZSBmcm9tICcuL2lzX29iamVjdF9saWtlJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IHtcclxuXHRsZXQgcmV0dXJuX2h0bWwgPSAnJztcclxuXHRmb3IoIGxldCBJIGluICRkYXRhICkge1xyXG5cdFx0aWYoIGlzX29iamVjdCggJGRhdGFbIEkgXSApICkge1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIic7XHJcblx0XHRcdGZvciggbGV0IEsgaW4gJGRhdGFbIEkgXSApIHtcclxuXHRcdFx0XHRsZXQgJHZhbHVlID0gKCBpc19vYmplY3RfbGlrZSggJGRhdGFbIEkgXVsgSyBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdWyBLIF0gKSA6ICRkYXRhWyBJIF1bIEsgXTtcclxuXHRcdFx0XHRyZXR1cm5faHRtbCArPSAkdmFsdWUgKyAnICc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJ1wiJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCAkdmFsdWUgPSAoIGlzX29iamVjdF9saWtlKCAkZGF0YVsgSSBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdICkgOiAkZGF0YVsgSSBdO1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIicgKyAkdmFsdWUgKyAnXCIgJztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJldHVybl9odG1sO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gKCAkYXJyYXkgKSA9PiB7XHJcblx0Zm9yKCBsZXQgJGtleSBpbiAkYXJyYXkgKSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICRhcnJheVsgJGtleSBdO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBBIENsb25lIG9mIGdpdmVuIHZhbHVlLlxyXG4gKiBAcGFyYW0gJGRhdGFcclxuICogQHJldHVybnMge2FueX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCAkZGF0YSApICk7IiwiLyoqXHJcbiAqIENvcHkgYSBzdHJpbmcgdG8gdGhlIGNsaXBib2FyZC4gT25seSB3b3JrcyBhcyBhIHJlc3VsdCBvZiB1c2VyIGFjdGlvbiAoaS5lLiBpbnNpZGUgYSBjbGljayBldmVudCBsaXN0ZW5lcikuXHJcbiAqIENyZWF0ZSBhIG5ldyA8dGV4dGFyZWE+IGVsZW1lbnQsIGZpbGwgaXQgd2l0aCB0aGUgc3VwcGxpZWQgZGF0YSBhbmQgYWRkIGl0IHRvIHRoZSBIVE1MIGRvY3VtZW50LlxyXG4gKiBVc2UgU2VsZWN0aW9uLmdldFJhbmdlQXQoKXRvIHN0b3JlIHRoZSBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogVXNlIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JykgdG8gY29weSB0byB0aGUgY2xpcGJvYXJkLlxyXG4gKiBSZW1vdmUgdGhlIDx0ZXh0YXJlYT4gZWxlbWVudCBmcm9tIHRoZSBIVE1MIGRvY3VtZW50LiBGaW5hbGx5LCB1c2UgU2VsZWN0aW9uKCkuYWRkUmFuZ2UoKSB0byByZWNvdmVyIHRoZSBvcmlnaW5hbCBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogQHBhcmFtIHN0clxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xyXG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RleHRhcmVhJyApO1xyXG5cdGVsLnZhbHVlID0gc3RyO1xyXG5cdGVsLnNldEF0dHJpYnV0ZSggJ3JlYWRvbmx5JywgJycgKTtcclxuXHRlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0ZWwuc3R5bGUubGVmdCAgICAgPSAnLTk5OTlweCc7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZWwgKTtcclxuXHRjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJhbmdlQ291bnQgPiAwID8gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCggMCApIDogZmFsc2U7XHJcblx0ZWwuc2VsZWN0KCk7XHJcblx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoICdjb3B5JyApO1xyXG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoIGVsICk7XHJcblx0aWYoIHNlbGVjdGVkICkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZSggc2VsZWN0ZWQgKTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZXMgYSBjb3VudGVyIHdpdGggdGhlIHNwZWNpZmllZCByYW5nZSwgc3RlcCBhbmQgZHVyYXRpb24gZm9yIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3IuXHJcbiAqIENoZWNrIGlmIHN0ZXAgaGFzIHRoZSBwcm9wZXIgc2lnbiBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5LlxyXG4gKiBVc2Ugc2V0SW50ZXJ2YWwoKSBpbiBjb21iaW5hdGlvbiB3aXRoIE1hdGguYWJzKCkgYW5kIE1hdGguZmxvb3IoKSB0byBjYWxjdWxhdGUgdGhlIHRpbWUgYmV0d2VlbiBlYWNoIG5ldyB0ZXh0IGRyYXcuXHJcbiAqIFVzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCkuaW5uZXJIVE1MIHRvIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQuXHJcbiAqIE9taXQgdGhlIGZvdXJ0aCBwYXJhbWV0ZXIsIHN0ZXAsIHRvIHVzZSBhIGRlZmF1bHQgc3RlcCBvZiAxLiBPbWl0IHRoZSBmaWZ0aCBwYXJhbWV0ZXIsIGR1cmF0aW9uLCB0byB1c2UgYSBkZWZhdWx0IGR1cmF0aW9uIG9mIDIwMDBtcy5cclxuICogQHBhcmFtIHNlbGVjdG9yXHJcbiAqIEBwYXJhbSBzdGFydFxyXG4gKiBAcGFyYW0gZW5kXHJcbiAqIEBwYXJhbSBzdGVwXHJcbiAqIEBwYXJhbSBkdXJhdGlvblxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIHNlbGVjdG9yLCBzdGFydCwgZW5kLCBzdGVwID0gMSwgZHVyYXRpb24gPSAyMDAwICkgPT4ge1xyXG5cdGxldCBjdXJyZW50ID0gc3RhcnQsXHJcblx0XHRfc3RlcCAgID0gKCBlbmQgLSBzdGFydCApICogc3RlcCA8IDAgPyAtc3RlcCA6IHN0ZXAsXHJcblx0XHR0aW1lciAgID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHRcdFx0Y3VycmVudCArPSBfc3RlcDtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBjdXJyZW50O1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGVuZDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgY2xlYXJJbnRlcnZhbCggdGltZXIgKTtcclxuXHRcdH0sIE1hdGguYWJzKCBNYXRoLmZsb29yKCBkdXJhdGlvbiAvICggZW5kIC0gc3RhcnQgKSApICkgKTtcclxuXHRyZXR1cm4gdGltZXI7XHJcbn07IiwiY29uc3QgaXNOdW1iZXJpYyA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYycgKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IHtcclxuXHR2YXIgcyA9IHZhbDtcclxuXHRpZiggaXNOdW1iZXJpYyggdmFsICkgKSB7XHJcblx0XHRyZXR1cm4gdmFsICsgJ3B4JztcclxuXHR9IGVsc2UgaWYoIHZhbC5pbmRleE9mKCAncHgnICkgPiAtMSB8fCB2YWwuaW5kZXhPZiggJyUnICkgPiAtMSB8fCB2YWwuaW5kZXhPZiggJ2VtJyApID4gLTEgKSB7XHJcblx0XHRsZXQgY2hlY2tQeCAgPSBzLnJlcGxhY2UoICdweCcsICcnICk7XHJcblx0XHRsZXQgY2hlY2tQY3QgPSBzLnJlcGxhY2UoICclJywgJycgKTtcclxuXHRcdGxldCBjaGVja0VtICA9IHMucmVwbGFjZSggJ2VtJywgJycgKTtcclxuXHRcdGlmKCBpc051bWJlcmljKCBjaGVja1B4ICkgfHwgaXNOdW1iZXJpYyggY2hlY2tQY3QgKSB8fCBpc051bWJlcmljKCBjaGVja0VtICkgKSB7XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJzBweCc7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiAnMHB4JztcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIERldGVjdHMgd2V0aGVyIHRoZSB3ZWJzaXRlIGlzIGJlaW5nIG9wZW5lZCBpbiBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogVXNlIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHRlc3QgdGhlIG5hdmlnYXRvci51c2VyQWdlbnQgcHJvcGVydHkgdG8gZmlndXJlIG91dCBpZiB0aGUgZGV2aWNlIGlzIGEgbW9iaWxlIGRldmljZSBvciBhIGRlc2t0b3AvbGFwdG9wLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSA/ICdNb2JpbGUnIDogJ0Rlc2t0b3AnOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIChpbiBkYXlzKSBiZXR3ZWVuIHR3byBkYXRlcy5cclxuICogQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIChpbiBkYXlzKSBiZXR3ZWVuIHR3byBEYXRlIG9iamVjdHMuXHJcbiAqIEBwYXJhbSBkYXRlSW5pdGlhbFxyXG4gKiBAcGFyYW0gZGF0ZUZpbmFsXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUluaXRpYWwsIGRhdGVGaW5hbCApID0+ICggZGF0ZUZpbmFsIC0gZGF0ZUluaXRpYWwgKSAvICggMTAwMCAqIDM2MDAgKiAyNCApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBodW1hbiByZWFkYWJsZSBmb3JtYXQgb2YgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAqIERpdmlkZSBtcyB3aXRoIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMgdG8gb2J0YWluIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMgZm9yIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgYW5kIG1pbGxpc2Vjb25kLlxyXG4gKiBVc2UgT2JqZWN0LmVudHJpZXMoKSB3aXRoIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoKSB0byBrZWVwIG9ubHkgbm9uLXplcm8gdmFsdWVzLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpIHRvIGNyZWF0ZSB0aGUgc3RyaW5nIGZvciBlYWNoIHZhbHVlLCBwbHVyYWxpemluZyBhcHByb3ByaWF0ZWx5LlxyXG4gKiBVc2UgU3RyaW5nLnByb3RvdHlwZS5qb2luKCcsICcpIHRvIGNvbWJpbmUgdGhlIHZhbHVlcyBpbnRvIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gbXNcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gbXMgPT4ge1xyXG5cdGlmKCBtcyA8IDAgKSBtcyA9IC1tcztcclxuXHRjb25zdCB0aW1lID0ge1xyXG5cdFx0ZGF5OiBNYXRoLmZsb29yKCBtcyAvIDg2NDAwMDAwICksXHJcblx0XHRob3VyOiBNYXRoLmZsb29yKCBtcyAvIDM2MDAwMDAgKSAlIDI0LFxyXG5cdFx0bWludXRlOiBNYXRoLmZsb29yKCBtcyAvIDYwMDAwICkgJSA2MCxcclxuXHRcdHNlY29uZDogTWF0aC5mbG9vciggbXMgLyAxMDAwICkgJSA2MCxcclxuXHRcdG1pbGxpc2Vjb25kOiBNYXRoLmZsb29yKCBtcyApICUgMTAwMFxyXG5cdH07XHJcblx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCB0aW1lIClcclxuXHRcdFx0XHQgLmZpbHRlciggdmFsID0+IHZhbFsgMSBdICE9PSAwIClcclxuXHRcdFx0XHQgLm1hcCggKCBbIGtleSwgdmFsIF0gKSA9PiBgJHt2YWx9ICR7a2V5fSR7dmFsICE9PSAxID8gJ3MnIDogJyd9YCApXHJcblx0XHRcdFx0IC5qb2luKCAnLCAnICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBhZnRlciBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgZ3JlYXRlciB0aGFuIG9wZXJhdG9yICg+KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBhZnRlciB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQSA+IGRhdGVCOyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYmVmb3JlIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIHRoZSBsZXNzIHRoYW4gb3BlcmF0b3IgKDwpIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGNvbWVzIGJlZm9yZSB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQSA8IGRhdGVCOyIsImltcG9ydCBpc191bmRlZmluZWQgZnJvbSAnLi9pc191bmRlZmluZWQnO1xyXG5pbXBvcnQgaXNfc3RyaW5nIGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19zdHJpbmcnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGdpdmVuIE9iamVjdCAvIFZhbHVlIGlzIGEgalF1ZXJ5IEluc3RhbmNlLlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+ICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGVsZW0gKSAmJiBmYWxzZSA9PT0gaXNfc3RyaW5nKCAkZWxlbSApICYmICRlbGVtLmpRdWVyeSApOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcbmltcG9ydCBpc19hcnJheSBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfYXJyYXknO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGlzIG9iamVjdC1saWtlLlxyXG4gKiBDaGVjayBpZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IG51bGwgYW5kIGl0cyB0eXBlb2YgaXMgZXF1YWwgdG8gJ29iamVjdCcuXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggdmFsICkgPT4ge1xyXG5cdHJldHVybiAoIGlzX29iamVjdCggdmFsICkgfHwgaXNfYXJyYXkoIHZhbCApICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyB0aGUgc2FtZSBhcyBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpIGFuZCBzdHJpY3QgZXF1YWxpdHkgY2hlY2tpbmcgKD09PSkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgaXMgdGhlIHNhbWUgYXMgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEudG9JU09TdHJpbmcoKSA9PT0gZGF0ZUIudG9JU09TdHJpbmcoKTsiLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyBmb2N1c2VkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqIFVzZSB0aGUgRG9jdW1lbnQuaGlkZGVuIHByb3BlcnR5LCBpbnRyb2R1Y2VkIGJ5IHRoZSBQYWdlIFZpc2liaWxpdHkgQVBJIHRvIGNoZWNrIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyB2aXNpYmxlIG9yIGhpZGRlbi5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+ICFkb2N1bWVudC5oaWRkZW47IiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKiBVc2UgdGhlIHN0cmljdCBlcXVhbGl0eSBvcGVyYXRvciB0byBjaGVjayBpZiB0aGUgdmFsdWUgYW5kIG9mIHZhbCBhcmUgZXF1YWwgdG8gdW5kZWZpbmVkLlxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4gdmFsID09PSB1bmRlZmluZWQ7IiwiaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICcuL2lzX3VuZGVmaW5lZCc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHdpbmRvdyBoYXMgZ2l2ZW4gdmFyaWFibGUuXHJcbiAqIEBwYXJhbSAka2V5XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXkgKSA9PiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJGtleSBdICkgKTsiLCJsZXQgJE9LUyAgICAgICA9ICggcHJvcGVydGllcywgb2JqLCBkZWZhdWx0VmFsdWUsIGRlbGltaXRlciA9ICcvJyApID0+IHtcclxuXHRwcm9wZXJ0aWVzICAgPSAoIHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnc3RyaW5nJyApID8gcHJvcGVydGllcy5zcGxpdCggZGVsaW1pdGVyICkgOiBbIHByb3BlcnRpZXMgXTtcclxuXHRsZXQgcHJvcGVydHkgPSBwcm9wZXJ0aWVzLnNoaWZ0KCk7XHJcblxyXG5cdGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblx0fVxyXG5cclxuXHRpZiggcHJvcGVydGllcy5sZW5ndGggKSB7XHJcblx0XHRwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5qb2luKCBkZWxpbWl0ZXIgKTtcclxuXHRcdHJldHVybiAkT0tTKCBwcm9wZXJ0aWVzLCBvYmpbIHByb3BlcnR5IF0sIGRlZmF1bHRWYWx1ZSwgZGVsaW1pdGVyICk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBvYmpbIHByb3BlcnR5IF07XHJcblx0fVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9ICRPS1M7IiwibGV0ICRPS1MgICAgICAgPSAoIHByb3BlcnRpZXMsIHZhbHVlLCBvYmosIGRlbGltaXRlciA9ICcvJyApID0+IHtcclxuXHRwcm9wZXJ0aWVzICAgPSAoIHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnc3RyaW5nJyApID8gcHJvcGVydGllcy5zcGxpdCggZGVsaW1pdGVyICkgOiBbIHByb3BlcnRpZXMgXTtcclxuXHRsZXQgcHJvcGVydHkgPSBwcm9wZXJ0aWVzLnNoaWZ0KCk7XHJcblxyXG5cdGlmKCBwcm9wZXJ0aWVzLmxlbmd0aCApIHtcclxuXHRcdHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmpvaW4oIGRlbGltaXRlciApO1xyXG5cclxuXHRcdGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHR9IGVsc2UgaWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gIT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oICdPYmplY3QgcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCIgYWxyZWFkeSBoYXMgbm9uIG9iamVjdCB2YWx1ZTonLCBvYmpbIHByb3BlcnR5IF0sICdJdCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYW4gZW1wdHkgb2JqZWN0JyApO1xyXG5cdFx0XHRvYmpbIHByb3BlcnR5IF0gPSB7fTtcclxuXHRcdH0gZWxzZSBpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9ialsgcHJvcGVydHkgXS5sZW5ndGggIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRpZiggKCAvXlswLTldKyQvICkudGVzdCggcHJvcGVydHkgKSApIHtcclxuXHRcdFx0XHRwcm9wZXJ0eSA9IHBhcnNlSW50KCBwcm9wZXJ0eSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RyeSB0byBzZXQgbm9uIG51bWVyaWMgcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCIgdG8gYXJyYXk6Jywgb2JqWyBwcm9wZXJ0eSBdLCAnVGhlIGFycmF5IHdpbGwgYmUgYmUgcmVwbGFjZWQgd2l0aCBhbiBlbXB0eSBvYmplY3QnICk7XHJcblx0XHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCRPS1MoIHByb3BlcnRpZXMsIHZhbHVlLCBvYmpbIHByb3BlcnR5IF0sIGRlbGltaXRlciApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRvYmpbIHByb3BlcnR5IF0gPSB2YWx1ZTtcclxuXHR9XHJcblx0cmV0dXJuIG9iajtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSAkT0tTOyIsIi8qKlxyXG4gKiBMb2dzIGEgdmFsdWUgYW5kIHJldHVybnMgaXQuXHJcbiAqIFVzZSBjb25zb2xlLmxvZyB0byBsb2cgdGhlIHN1cHBsaWVkIHZhbHVlLCBjb21iaW5lZCB3aXRoIHRoZSB8fCBvcGVyYXRvciB0byByZXR1cm4gaXQuXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBkYXRhID0+IGNvbnNvbGUubG9nKCBkYXRhICkgfHwgZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9ICgpID0+ICggdHlwZW9mIE9iamVjdFsgJ2NyZWF0ZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/IE9iamVjdC5jcmVhdGUoIG51bGwgKSA6IHt9OyIsIi8qKlxyXG4gKiBSZXR1cm4gdmFsdWUgZnJvbSBRdWVyeVN0cmluZ1xyXG4gKiBAcGFyYW0gbmFtZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIG5hbWUgKSA9PiB7XHJcblx0bmFtZSAgICAgICAgPSBuYW1lLnJlcGxhY2UoIC9bXFxbXS8sIFwiXFxcXFtcIiApLnJlcGxhY2UoIC9bXFxdXS8sIFwiXFxcXF1cIiApO1xyXG5cdHZhciByZWdleCAgID0gbmV3IFJlZ0V4cCggXCJbXFxcXD8mXVwiICsgbmFtZSArIFwiPShbXiYjXSopXCIgKSxcclxuXHRcdHJlc3VsdHMgPSByZWdleC5leGVjKCBsb2NhdGlvbi5zZWFyY2ggKTtcclxuXHRyZXR1cm4gcmVzdWx0cyA9PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudCggcmVzdWx0c1sgMSBdLnJlcGxhY2UoIC9cXCsvZywgXCIgXCIgKSApO1xyXG59OyIsImltcG9ydCBtZDUgZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9tZDUnO1xyXG5cclxuLyoqXHJcbiAqIFVuaXF1ZSByYW5kb20gbWQ1XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IFN0cmluZyggbWQ1KCBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKSApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgcGFnZS5cclxuICogVXNlIHBhZ2VYT2Zmc2V0IGFuZCBwYWdlWU9mZnNldCBpZiB0aGV5IGFyZSBkZWZpbmVkLCBvdGhlcndpc2Ugc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wLiBZb3UgY2FuIG9taXQgZWwgdG8gdXNlIGEgZGVmYXVsdCB2YWx1ZSBvZiB3aW5kb3cuXHJcbiAqIEBwYXJhbSBlbFxyXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBlbCA9IHdpbmRvdyApID0+ICgge1xyXG5cdHg6IGVsLnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWE9mZnNldCA6IGVsLnNjcm9sbExlZnQsXHJcblx0eTogZWwucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VZT2Zmc2V0IDogZWwuc2Nyb2xsVG9wXHJcbn0gKTsiLCIvKipcclxuICogU21vb3RoLXNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS5cclxuICogR2V0IGRpc3RhbmNlIGZyb20gdG9wIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3Agb3IgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AuXHJcbiAqIFNjcm9sbCBieSBhIGZyYWN0aW9uIG9mIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3AuIFVzZSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgdG8gYW5pbWF0ZSB0aGUgc2Nyb2xsaW5nLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0aWYoIGMgPiAwICkge1xyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggc2Nyb2xsVG9Ub3AgKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbyggMCwgYyAtIGMgLyA4ICk7XHJcblx0fVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gKCBjYWxsYmFjaywgdGl0bGUgPSAnVGltZVRha2VuJyApID0+IHtcclxuXHRjb25zb2xlLnRpbWUoIHRpdGxlICk7XHJcblx0Y29uc3QgciA9IGNhbGxiYWNrKCk7XHJcblx0Y29uc29sZS50aW1lRW5kKCB0aXRsZSApO1xyXG5cdHJldHVybiByO1xyXG59OyIsImltcG9ydCBpc19qcXVlcnkgZnJvbSAnLi9pc19qcXVlcnknO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgR2l2ZW4gU3RyaW5nIGludG8gQSBqUXVlcnkgT2JqZWN0LlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiB7XHJcblx0aWYoIGZhbHNlID09PSBpc19qcXVlcnkoICRlbGVtICkgKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5KCAkZWxlbSApO1xyXG5cdH1cclxuXHRyZXR1cm4gJGVsZW07XHJcbn07IiwiaW1wb3J0IGlzX29iamVjdF9saWtlIGZyb20gJy4vaXNfb2JqZWN0X2xpa2UnO1xyXG5pbXBvcnQgdmFsaWRhdGVKU0Z1bmMgZnJvbSAnLi92YWxpZGF0ZVNpbmdsZUpTRnVuYyc7XHJcbmltcG9ydCBlbXB0eSBmcm9tICdsb2N1dHVzL3BocC92YXIvZW1wdHknO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBpc19vYmplY3RfbGlrZSggJGRhdGEgKSApIHtcclxuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRhdGEgKSB7XHJcblx0XHRcdGlmKCAhZW1wdHkoICRkYXRhWyAka2V5IF0gKSApIHtcclxuXHRcdFx0XHQkZGF0YVsgJGtleSBdID0gdmFsaWRhdGVKU0Z1bmMoICRkYXRhWyAka2V5IF0sICRhcmdzX2tleSwgJGNvbnRlbnRzX2tleSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkZGF0YTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGN1cnJlbnQgVVJMLlxyXG4gKiBVc2UgU3RyaW5nLm1hdGNoKCkgd2l0aCBhbiBhcHByb3ByaWF0ZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZ2V0IGFsbCBrZXktdmFsdWUgcGFpcnMsXHJcbiAqIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKSB0byBtYXAgYW5kIGNvbWJpbmUgdGhlbSBpbnRvIGEgc2luZ2xlIG9iamVjdC5cclxuICogUGFzcyBsb2NhdGlvbi5zZWFyY2ggYXMgdGhlIGFyZ3VtZW50IHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHVybC5cclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7VCB8IHt9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB1cmwgPT5cclxuXHQoIHVybC5tYXRjaCggLyhbXj89Jl0rKSg9KFteJl0qKSkvZyApIHx8IFtdICkucmVkdWNlKFxyXG5cdFx0KCBhLCB2ICkgPT4gKCAoIGFbIHYuc2xpY2UoIDAsIHYuaW5kZXhPZiggJz0nICkgKSBdID0gdi5zbGljZSggdi5pbmRleE9mKCAnPScgKSArIDEgKSApLCBhICksXHJcblx0XHR7fVxyXG5cdCk7IiwiaW1wb3J0IGlzX29iamVjdCBmcm9tIFwibG9jdXR1cy9waHAvdmFyL2lzX29iamVjdFwiO1xyXG5pbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gXCIuL2lzX3VuZGVmaW5lZFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoICRzdHJpbmcsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IGlzX29iamVjdCggJHN0cmluZyApICYmIGZhbHNlID09PSBpc191bmRlZmluZWQoICRzdHJpbmdbICRhcmdzX2tleSBdICkgfHwgZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdICkgKSB7XHJcblx0XHRsZXQgJGFyZ3MgICAgID0gKCAkc3RyaW5nWyAkYXJnc19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGFyZ3Nfa2V5IF07XHJcblx0XHRsZXQgJGNvbnRlbnRzID0gKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRjb250ZW50c19rZXkgXTtcclxuXHRcdGlmKCAkYXJncyA9PT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2UgaWYoICRhcmdzICE9PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkYXJncywgJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJHN0cmluZztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRzdHJpbmc7XHJcbn07XHJcbiIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcblxyXG4vKipcclxuICogU2V0cyBKUyBPYmplY3QgSW50byBXaW5kb3cgQXJncy5cclxuICogQHBhcmFtICRrZXlcclxuICogQHBhcmFtICR2YWx1ZVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXksICR2YWx1ZSApID0+IHtcclxuXHRpZiggaXNfb2JqZWN0KCAka2V5ICkgKSB7XHJcblx0XHRmb3IoIGxldCAkX2sgaW4gJGtleSApIHtcclxuXHRcdFx0d2luZG93WyAkX2sgXSA9ICRrZXlbICRfayBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR3aW5kb3dbICRrZXkgXSA9ICR2YWx1ZTtcclxufTsiLCIvKipcclxuICogQ2FzdHMgdGhlIHByb3ZpZGVkIHZhbHVlIGFzIGFuIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5pc0FycmF5KCkgdG8gZGV0ZXJtaW5lIGlmIHZhbCBpcyBhbiBhcnJheSBhbmQgcmV0dXJuIGl0IGFzLWlzIG9yIGVuY2Fwc3VsYXRlZCBpbiBhbiBhcnJheSBhY2NvcmRpbmdseS5cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7KltdfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4gKEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdKTsiLCIvKiBnbG9iYWwgc3dhbDp0cnVlICovXG5pbXBvcnQge1xuXHRhcnJheV9tZXJnZSxcblx0Y2FsbF91c2VyX2Z1bmMsXG5cdGNsb25lX29iamVjdCxcblx0aXNfanF1ZXJ5LFxuXHRpc19udWxsLFxuXHRpc19vYmplY3RfbGlrZSxcblx0aXNfdW5kZWZpbmVkLFxuXHRpc193aW5kb3dfYXJnLFxuXHRtZDUsXG5cdG1pY3JvdGltZSxcblx0cmFuZF9tZDUsXG5cdHN0cnRvbG93ZXIsXG5cdHRvX2pxdWVyeSxcblx0dG9fanNfZnVuYyxcbn0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbiB7XG5cdHN0YXRpYyBqc19mdW5jKCAkZGF0YSApIHtcblx0XHRyZXR1cm4gdG9fanNfZnVuYyggJGRhdGEsICd3cG9uaW9uX2pzX2FyZ3MnLCAnd3Bvbmlvbl9qc19jb250ZW50cycgKTtcblx0fVxuXG5cdHN0YXRpYyByYW5kX2lkKCkge1xuXHRcdHJldHVybiBtZDUoICd3cG9uaW9uX3JhbmRfJyArIG1pY3JvdGltZSgpICsgcmFuZF9tZDUoKSApO1xuXHR9XG5cblx0c3RhdGljIHZhbGlkX2pzb24oIG9iaiApIHtcblx0XHR0cnkge1xuXHRcdFx0SlNPTi5wYXJzZSggb2JqICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEEgU2luZ2xlIENsYXNzIEZvciB0aGUgR2l2ZW4gRWxlbWVudC5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c3RhdGljIGdldF9maWVsZF9jbGFzcyggJHR5cGUgKSB7XG5cdFx0JHR5cGUgPSBzdHJ0b2xvd2VyKCAkdHlwZSApO1xuXG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvdy53cG9uaW9uX2ZpZWxkc1sgJHR5cGUgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy53cG9uaW9uX2ZpZWxkc1sgJHR5cGUgXTtcblx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJ3dwb25pb25fJyArICR0eXBlICsgJ19maWVsZCcgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvd1sgJ3dwb25pb25fJyArICR0eXBlICsgJ19maWVsZCcgXTtcblx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJHR5cGUgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvd1sgJHR5cGUgXTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZElEKCAkZWxlbSApIHtcblx0XHRyZXR1cm4gdG9fanF1ZXJ5KCAkZWxlbSApLmF0dHIoICdkYXRhLXdwb25pb24tanNpZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIEZpZWxkIEhUTUwgT2JqZWN0IFVzaW5nIEZpZWxkIElELlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICR3aGVyZV90b19maW5kXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHN0YXRpYyBJRHRvRWxlbWVudCggJGVsZW0sICR3aGVyZV90b19maW5kID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRpZCA9IFdQT25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRpZiggZmFsc2UgIT09ICR3aGVyZV90b19maW5kICYmIGlzX2pxdWVyeSggJHdoZXJlX3RvX2ZpbmQgKSApIHtcblx0XHRcdHJldHVybiAkd2hlcmVfdG9fZmluZC5maW5kKCAnLndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkaWQgKyAnXCInICk7XG5cdFx0fVxuXHRcdHJldHVybiBqUXVlcnkoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIl0nICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGdpdmVuIHZhbHVlIGlzIGFuIGpRdWVyeSBpbnN0YW5jZS5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzRmllbGQoICRlbGVtICkge1xuXHRcdHJldHVybiAoIGlzX2pxdWVyeSggJGVsZW0gKSApID8gKCB0aGlzLmZpZWxkSUQoICRlbGVtICkgKSA6IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgV2luZG93IEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyB3aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdHJldHVybiAoIGlzX3dpbmRvd19hcmcoICR2YXJfaWQgKSApID8gd2luZG93WyAkdmFyX2lkIF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgJiBSZXR1cm5zIEZpZWxkIEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZEFyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0JHZhcl9pZCA9ICggdGhpcy5pc0ZpZWxkKCAkdmFyX2lkICkgKSA/IHRoaXMuZmllbGRJRCggJHZhcl9pZCApIDogJHZhcl9pZDtcblx0XHRyZXR1cm4gKCAkdmFyX2lkICkgPyBjbG9uZV9vYmplY3QoIHRoaXMud2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgKSApIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hjZWtzIGFuZCByZXR1cm5zIGdsb2JhbCB0cmFuc2xhdGlvbiBzdHJpbmcuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljIHR4dCggJGtleSwgJGRlZmF1bHQgPSAnc3RyaW5nX2RlZmF1bHRfbm90X2ZvdW5kJyApIHtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCBXUE9uaW9uLnRleHRbICRrZXkgXSApICkgPyBXUE9uaW9uLnRleHRbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgTG9hZGluZyBTY3JlZW4uXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJGlzX3Nob3dcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgbG9hZGluZ19zY3JlZW4oICRlbGVtLCAkaXNfc2hvdyA9IHRydWUgKSB7XG5cdFx0JGVsZW0gPSB0b19qcXVlcnkoICRlbGVtICkuZmluZCggJy5wYWdlLWxvYWRlcicgKTtcblx0XHRpZiggdHJ1ZSA9PT0gJGlzX3Nob3cgKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW0uZmFkZUluKCAnc2xvdycgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRlbGVtLmZhZGVPdXQoICdzbG93JyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgR2xvYmFsIERlYnVnIFZpZXcgUE9QVVAuXG5cdCAqL1xuXHRzdGF0aWMgZ2xvYmFsX2RlYnVnKCkge1xuXHRcdGxldCAkaGFuZGxlID0galF1ZXJ5KCAnYS53cG9uaW9uLWdsb2JhbC1kZWJ1Zy1oYW5kbGUnICksXG5cdFx0XHQkanNvbiAgID0ge307XG5cdFx0aWYoIFdQT25pb24uZGVidWdfaW5mbyA9PT0gbnVsbCAmJiAkaGFuZGxlLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGRlZmluZWRfdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApO1xuXHRcdFx0aWYoIGlzX29iamVjdF9saWtlKCAkZGVmaW5lZF92YXJzICkgKSB7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGRlZmluZWRfdmFycyApIHtcblx0XHRcdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGRlZmluZWRfdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0XHQkanNvblsgJGRlZmluZWRfdmFyc1sgJGtleSBdIF0gPSBXUE9uaW9uLndpbmRvd0FyZ3MoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRXUE9uaW9uLmRlYnVnX2luZm8gPSAkanNvbjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkaGFuZGxlLm9uKCAnY2xpY2snLCAoICggZSApID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHN3YWwoIHtcblx0XHRcdFx0dGl0bGU6IFdQT25pb24udHh0KCAnZ2xvYmFsX2pzb25fb3V0cHV0JywgJ0dsb2JhbCBXUE9uaW9uIERlYnVnIERhdGEnICksXG5cdFx0XHRcdGh0bWw6IGpRdWVyeSggJyN3cG9uaW9uZGVidWdpbmZvcG9wdXAgPiBkaXYnICksXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogV1BPbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnR2V0IEpTT04gT3V0cHV0JyApLFxuXHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoKSA9PiBzd2FsLmVuYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0b25PcGVuOiAoKSA9PiB7XG5cdFx0XHRcdFx0alF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgI3dwb25pb24tZ2xvYmFsLWRlYnVnLWNvbnRlbnQnICkuanNvblZpZXcoIFdQT25pb24uZGVidWdfaW5mbyApO1xuXHRcdFx0XHRcdHN3YWwuZGlzYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gc3dhbCgge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRodG1sOiAnPHRleHRhcmVhIHN0eWxlPVwibWluLXdpZHRoOjU1MHB4OyBtaW4taGVpZ2h0OjMwMHB4XCI+JyArIEpTT04uc3RyaW5naWZ5KCBXUE9uaW9uLmRlYnVnX2luZm8gKSArICc8L3RleHRhcmVhPicsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGFuZCBSZXRyaXZlcyBWYWx1ZXMgZnJvbSAkd3Bvbmlvbi5zZXR0aW5nc1xuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgb3B0aW9uKCAka2V5LCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IFdQT25pb24uc2V0dGluZ3NfYXJncztcblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkge1xuXHRcdFx0cmV0dXJuICRhcmdzWyAka2V5IF07XG5cdFx0fVxuXHRcdHJldHVybiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgV1BPbmlvbiBEZWJ1ZyBpcyBlbmFibGVkLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc19kZWJ1ZygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdkZWJ1ZycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXIgQWxsIEZpZWxkIEpTIENvZGVzLlxuXHQgKi9cblx0c3RhdGljIGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBXUE9uaW9uLmlzX2RlYnVnKCkgJiYgaXNfbnVsbCggV1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHRsZXQgJHZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKSxcblx0XHRcdFx0JGpzb24gPSB7fSxcblx0XHRcdFx0JHV0eHQgPSBXUE9uaW9uLnR4dCggJ3VubW9kaWZpZWRfZGVidWcnICksXG5cdFx0XHRcdCRtdHh0ID0gV1BPbmlvbi50eHQoICdtb2RpZmllZF9kZWJ1ZycgKTtcblxuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkdmFycyApIHtcblx0XHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICR2YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRsZXQgJGRhdGEgICAgICAgICAgICAgICAgICAgICAgID0gV1BPbmlvbi53aW5kb3dBcmdzKCAkdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXSAgICAgICAgICA9IHt9O1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF1bICR1dHh0IF0gPSAkZGF0YS5kZWJ1Z19pbmZvIHx8ICRkYXRhO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF1bICRtdHh0IF0gPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0V1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvID0gJGpzb247XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBBamF4IFdyYXBwZXIgRm9yIGpRdWVyeS5BamF4KClcblx0ICogQHBhcmFtICRhY3Rpb25cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqIEBwYXJhbSAkb25TdWNjZXNzXG5cdCAqIEBwYXJhbSAkb25FcnJvclxuXHQgKiBAcGFyYW0gJG9uQWx3YXlzXG5cdCAqL1xuXHRzdGF0aWMgYWpheCggJGFjdGlvbiA9ICcnLCAkZGF0YSA9IHt9LCAkb25TdWNjZXNzID0gZmFsc2UsICRvbkVycm9yID0gZmFsc2UsICRvbkFsd2F5cyA9IGZhbHNlICkge1xuXHRcdGxldCAkZGVmYXVsdHMgPSB7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHR1cmw6IFdQT25pb24ub3B0aW9uKCAnYWpheF91cmwnICksXG5cdFx0XHRcdG9uU3VjY2VzczogZmFsc2UsXG5cdFx0XHRcdG9uQWx3YXlzOiBmYWxzZSxcblx0XHRcdFx0b25FcnJvcjogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0JGFqYXggICAgID0gZmFsc2U7XG5cblx0XHRpZiggaXNfb2JqZWN0X2xpa2UoICRhY3Rpb24gKSApIHtcblx0XHRcdCRkYXRhID0gJGFjdGlvbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGRlZmF1bHRzLnVybCArPSAnJicgKyBXUE9uaW9uLm9wdGlvbiggJ2FqYXhfYWN0aW9uX2tleScgKSArICc9JyArICRhY3Rpb247XG5cdFx0fVxuXG5cdFx0JGRlZmF1bHRzICA9IGFycmF5X21lcmdlKCAkZGVmYXVsdHMsICRkYXRhICk7XG5cdFx0JG9uU3VjY2VzcyA9ICggaXNfdW5kZWZpbmVkKCAkb25TdWNjZXNzICkgfHwgZmFsc2UgPT09ICRvblN1Y2Nlc3MgKSA/ICRkZWZhdWx0cy5vblN1Y2Nlc3MgOiAkb25TdWNjZXNzO1xuXHRcdCRvbkFsd2F5cyAgPSAoIGlzX3VuZGVmaW5lZCggJG9uRXJyb3IgKSB8fCBmYWxzZSA9PT0gJG9uRXJyb3IgKSA/ICRkZWZhdWx0cy5vbkFsd2F5cyA6ICRvbkFsd2F5cztcblx0XHQkb25FcnJvciAgID0gKCBpc191bmRlZmluZWQoICRvbkFsd2F5cyApIHx8IGZhbHNlID09PSAkb25BbHdheXMgKSA/ICRkZWZhdWx0cy5vbkVycm9yIDogJG9uRXJyb3I7XG5cdFx0JGFqYXggICAgICA9IGpRdWVyeS5hamF4KCAkZGVmYXVsdHMgKTtcblxuXG5cdFx0aWYoICRvblN1Y2Nlc3MgKSB7XG5cdFx0XHQkYWpheC5kb25lKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25TdWNjZXNzLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25FcnJvciApIHtcblx0XHRcdCRhamF4LmZhaWwoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkVycm9yLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25BbHdheXMgKSB7XG5cdFx0XHQkYWpheC5hbHdheXMoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkFsd2F5cywgcmVzICkgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRhamF4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgV1BPbmlvbiBUZW1wbGF0ZSBmb3IgdW5kZXJzY29yZS5cblx0ICogQHBhcmFtICRpZFxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0pOiAqfVxuXHQgKi9cblx0c3RhdGljIHRlbXBsYXRlKCAkaWQgKSB7XG5cdFx0bGV0IGNvbXBpbGVkLFxuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZXZhbHVhdGU6IC88IyhbXFxzXFxTXSs/KSM+L2csXG5cdFx0XHRcdGludGVycG9sYXRlOiAvXFx7XFx7XFx7KFtcXHNcXFNdKz8pXFx9XFx9XFx9L2csXG5cdFx0XHRcdGVzY2FwZTogL1xce1xceyhbXlxcfV0rPylcXH1cXH0oPyFcXH0pL2csXG5cdFx0XHRcdHZhcmlhYmxlOiAnZGF0YSdcblx0XHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0XHRjb21waWxlZCA9IGNvbXBpbGVkIHx8IF8udGVtcGxhdGUoICRpZCwgb3B0aW9ucyApO1xuXHRcdFx0cmV0dXJuIGNvbXBpbGVkKCBkYXRhICk7XG5cdFx0fTtcblx0fVxuXG5cdC8vQHRvZG8gTWlncmF0ZSBQbHVnaW4gRGVidWcgSW5mby5cbn1cbiIsImltcG9ydCB7IGFycmF5X21lcmdlLCBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRzdGF0aWMgYWRkKCAka2V5LCAkdmFsdWUgKSB7XG5cdFx0aWYoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cblx0XHRpZiggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSAkdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gYXJyYXlfbWVyZ2UoICR2YWx1ZSwgdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZ2V0KCAka2V5LCAkZGVmYXVsdCA9IGZhbHNlICkge1xuXHRcdGlmKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkgPyAkZGVmYXVsdCA6IHRoaXMuZGVidWdfaW5mb1sgJGtleSBdO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2hlbHBlcnMvZGVwZW5kZW5jeSc7XG5pbXBvcnQgeyBhcnJheV9tZXJnZSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkZWxlbWVudCA9IHVuZGVmaW5lZCwgcGFyYW0gPSB7fSApIHtcblx0XHR0aGlzLnBhcmFtICAgICAgICAgPSBhcnJheV9tZXJnZSggeyBuZXN0YWJsZTogZmFsc2UsIHBhcmVudDogZmFsc2UgfSwgcGFyYW0gKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuYmFzZSAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuYmFzZS4kZWwgICAgICA9ICRlbGVtZW50O1xuXHRcdHRoaXMuYmFzZS5pbml0ICAgICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS5ydWxlc2V0ID0galF1ZXJ5LmRlcHMuY3JlYXRlUnVsZXNldCgpO1xuXHRcdFx0dGhpcy5iYXNlLmRlcFJvb3QoKTtcblx0XHRcdGpRdWVyeS5kZXBzLmVuYWJsZSggdGhpcy5iYXNlLiRlbCwgdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0c2hvdzogKCBlbCApID0+IHtcblx0XHRcdFx0XHRlbC5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKTtcblx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhpZGU6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0ZWwuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5hZGRDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsb2c6IGZhbHNlLFxuXHRcdFx0XHRjaGVja1RhcmdldHM6IGZhbHNlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cdFx0dGhpcy5iYXNlLmluc3RhbmNlID0gW107XG5cdFx0dGhpcy5iYXNlLmRlcFJvb3QgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLiRlbC5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJy53cG9uaW9uLWhhcy1kZXBlbmRlbmN5JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlzLmJhc2UuaW5zdGFuY2UgPSBuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgJHRoaXMuYmFzZS5ydWxlc2V0LCB7XG5cdFx0XHRcdFx0XHRuZXN0YWJsZTogJHRoaXMucGFyYW0ubmVzdGFibGUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6ICggdHJ1ZSA9PT0gJHRoaXMucGFyYW0ubmVzdGFibGUgKSA/ICR0aGlzLmJhc2UuJGVsIDogJHRoaXMucGFyYW0ucGFyZW50LFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHR0aGlzLmJhc2UuaW5pdCgpO1xuXHR9XG59XG4iLCIvL2ltcG9ydCB7IGFycmF5X21lcmdlLCBlbXB0eSwgaXNfY2FsbGFibGUsIGlzX2pxdWVyeSwgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG4vL2NvbnN0IHRvX2pxdWVyeSAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLnRvX2pxdWVyeTtcbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbi8qIGdsb2JhbCBjb25zb2xlOnRydWUgKi9cblxuY29uc3QgYXJyYXlfbWVyZ2UgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuYXJyYXlfbWVyZ2U7XG5jb25zdCBlbXB0eSAgICAgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5lbXB0eTtcbmNvbnN0IGlzX2NhbGxhYmxlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2NhbGxhYmxlO1xuY29uc3QgaXNfanF1ZXJ5ICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfanF1ZXJ5O1xuY29uc3QgaXNfdW5kZWZpbmVkID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfdW5kZWZpbmVkO1xuXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuL2RlYnVnJztcbmltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuL21vZHVsZSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0aW9uIGZyb20gJy4uL2NvcmUvdmFsaWRhdGlvbic7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBBYnN0cmFjdCBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0LCAkY29uZmlnID0gbnVsbCApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udGV4dCApO1xuXHRcdHRoaXMuc2V0X2FyZ3MoIGZhbHNlICk7XG5cdFx0dGhpcy5maWVsZF9kZWJ1ZygpO1xuXHRcdHRoaXMuY29uZmlnID0gJGNvbmZpZztcblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmpzX2Vycm9yX2hhbmRsZXIoKTtcblx0XHR0aGlzLmpzX3ZhbGlkYXRvcigpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdH1cblxuXHRqc19lcnJvcl9oYW5kbGVyKCBlbGVtZW50ID0gdGhpcy5lbGVtZW50ICkge1xuXHRcdGVsZW1lbnQub24oICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsICc+IC53cG9uaW9uLWZpZWxkc2V0IDppbnB1dCcsICggZSwgZGF0YSApID0+IHRoaXMuanNfZXJyb3IoIGRhdGEgKSApO1xuXHR9XG5cblx0anNfdmFsaWRhdG9yKCkge1xuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApICkge1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApIHtcblx0XHRcdFx0dGhpcy5tYXliZV9qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bWF5YmVfanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCBXUE9uaW9uX1ZhbGlkYXRpb24uZ2V0X2Zvcm0oKSApIHtcblx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICk7XG5cdFx0fVxuXHR9XG5cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aGFuZGxlX2FyZ3MoICRhcmcsICRrZXkgPSBmYWxzZSApIHtcblx0XHRsZXQgJGFyZ3MgICA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKSxcblx0XHRcdCRleGlzdHMgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0JGV4aXN0cyAgICAgPSBhcnJheV9tZXJnZSggJGV4aXN0cywgeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cblx0XHRpZiggZmFsc2UgPT09ICRrZXkgKSB7XG5cdFx0XHQkZXhpc3RzWyAnSlMgQXJncycgXSA9ICRhcmdzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZXhpc3RzWyAnSlMgQXJncycgXVsgJGtleSBdID0gJGFyZ3M7XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCAkZXhpc3RzICk7XG5cdFx0cmV0dXJuICRhcmdzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIGZhbHNlICE9PSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCAkaW5mbyA9IHRoaXMub3B0aW9uKCAnZGVidWdfaW5mbycgKSxcblx0XHRcdCRhcnIgID0ge307XG5cblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGluZm8gKSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gZW1wdHkoICRpbmZvICkgKSB7XG5cdFx0XHRcdCRhcnJbICdSYXcgRmllbGQgQXJncycgXSA9ICRpbmZvWyAnUmF3IEZpZWxkIEFyZ3MnIF07XG5cdFx0XHRcdCRhcnIuRmllbGQgICAgICAgICAgICAgICA9ICRpbmZvWyAnRmllbGQgQXJncycgXTtcblx0XHRcdFx0JGFyclsgJ0ZpZWxkIEVycm9ycycgXSAgID0gJGluZm9bICdGaWVsZCBFcnJvcnMnIF07XG5cdFx0XHRcdCRhcnJbICdGaWVsZCBWYWx1ZScgXSAgICA9ICRpbmZvWyAnRmllbGQgVmFsdWUnIF07XG5cdFx0XHRcdCRhcnJbICdQbHVnaW4gSUQnIF0gICAgICA9ICRpbmZvWyAnUGx1Z2luIElEJyBdO1xuXHRcdFx0XHQkYXJyLk1vZHVsZSAgICAgICAgICAgICAgPSAkaW5mby5Nb2R1bGU7XG5cdFx0XHRcdCRhcnIuVW5pcXVlICAgICAgICAgICAgICA9ICRpbmZvLlVuaXF1ZTtcblx0XHRcdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ1BIUCBBcmdzJzogJGFyciwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0ICRmb3VuZCA9IGZhbHNlO1xuXHRcdGlmKCAhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdGxldCAkSUQgICA9IHRoaXMuaWQoKSxcblx0XHRcdFx0JGVsZW0gPSBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyAkSUQgKyAnXScgKTtcblx0XHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRcdCRmb3VuZCA9ICRlbGVtO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZm91bmQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHNlICE9PSAkZm91bmQgKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKVxuXHRcdFx0XHQgIC5hdHRyKCAndGl0bGUnLCAkd3Bvbmlvbi50eHQoICdjbGlja190b192aWV3X2RlYnVnX2luZm8nLCAnQ2xpY2sgVG8gVmlldyBGaWVsZCBEZWJ1ZyBJbmZvJyApIClcblx0XHRcdFx0ICAudGlwcHkoIHtcblx0XHRcdFx0XHQgIGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdCAgYXJyb3dUeXBlOiAncm91bmQnLFxuXHRcdFx0XHRcdCAgcGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0XHQgIHRoZW1lOiAnbGlnaHQnLFxuXHRcdFx0XHRcdCAgYW5pbWF0aW9uOiAnc2NhbGUnXG5cdFx0XHRcdCAgfSApO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGQgICAgICAgICAgPSAkdGhpcy5pZCgpICsgJ2RlYnVnSU5GTycsXG5cdFx0XHRcdFx0JG5vdGljZV90eHQgPSAnPHAgY2xhc3M9XFwnd3Bvbmlvbi1maWVsZC1kZWJ1Zy1ub3RpY2VcXCc+JyArICR3cG9uaW9uLm9wdGlvbiggJ2RlYnVnX25vdGljZScgKSArICc8L3A+Jyxcblx0XHRcdFx0XHQkZWxlbSAgICAgICA9IGpRdWVyeSggJzxkaXYgaWQ9XCInICsgJGQgKyAnXCIgY2xhc3M9XCJ3cG9uaW9uLWZpZWxkLWRlYnVnLXBvcHVwXCIgPjxkaXYgaWQ9XCInICsgJGQgKyAnXCIgPjwvZGl2PicgKyAkbm90aWNlX3R4dCArICc8L2Rpdj4nICk7XG5cdFx0XHRcdGxldCAkZGF0YSAgICAgICA9ICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApO1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0aHRtbDogJGVsZW0sXG5cdFx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6ICR3cG9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdBcyBKU09OJyApLFxuXHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdFx0b25PcGVuOiAoKSA9PiBqUXVlcnkoICcjc3dhbDItY29udGVudCA+IGRpdiA+ICMnICsgJGQgKS5qc29uVmlldyggJGRhdGEgKVxuXHRcdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApICkgKyAnPC90ZXh0YXJlYT4nXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCAud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlLWdlbicgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0aHRtbDogdGhpcy5vcHRpb24oICdkZWJ1Z19maWVsZF9jb2RlJyApLFxuXHRcdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRoZWlnaHRBdXRvOiBmYWxzZSxcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdG9wdGlvbnMoKSB7XG5cdFx0aWYoIHRoaXMuX2FyZ3MgPT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5fYXJncyA9ICR3cG9uaW9uLndpbmRvd0FyZ3MoIHRoaXMuaWQoKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYXJncztcblx0fVxuXG5cdG9wdGlvbiggJGtleSA9ICcnLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IHRoaXMub3B0aW9ucygpO1xuXHRcdHJldHVybiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApID8gJGFyZ3NbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0aWQoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApO1xuXHR9XG5cblx0bW9kdWxlKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ21vZHVsZScsIGZhbHNlICk7XG5cdH1cblxuXHRwbHVnaW5faWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAncGx1Z2luX2lkJywgZmFsc2UgKTtcblx0fVxuXG5cdGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSApIHtcblx0XHRsZXQgJGFqYXhfa2V5ICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICk7XG5cdFx0bGV0ICRkZWZhdWx0ICAgICAgICAgID0ge1xuXHRcdFx0cGx1Z2luX2lkOiB0aGlzLnBsdWdpbl9pZCgpLFxuXHRcdFx0bW9kdWxlOiB0aGlzLm1vZHVsZSgpLFxuXHRcdH07XG5cdFx0JGRlZmF1bHRbICRhamF4X2tleSBdID0gJGFjdGlvbjtcblx0XHQkZGF0YS5kYXRhICAgICAgICAgICAgPSAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRkYXRhLmRhdGEgKSApID8gYXJyYXlfbWVyZ2UoICRkZWZhdWx0LCAkZGF0YS5kYXRhICkgOiAkZGVmYXVsdDtcblxuXHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAkZGF0YSApO1xuXHR9XG5cblx0aW5pdF9maWVsZCggJGVsZW0sICR0eXBlICkge1xuXHRcdGxldCAkX2luc3RhbmNlcyA9IFtdO1xuXHRcdGlmKCAhaXNfanF1ZXJ5KCAkZWxlbSApICkge1xuXHRcdFx0JGVsZW0gPSB0aGlzLmVsZW1lbnQuZmluZCggJGVsZW0gKTtcblx0XHR9XG5cdFx0bGV0ICR0aGlzID0gdGhpcztcblx0XHQkZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkY2xhc3MgPSAkd3Bvbmlvbi5nZXRfZmllbGRfY2xhc3MoICR0eXBlICk7XG5cdFx0XHRpZiggZmFsc2UgIT09ICRjbGFzcyApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiggaXNfY2FsbGFibGUoICRjbGFzcyApICkge1xuXHRcdFx0XHRcdFx0JF9pbnN0YW5jZXMucHVzaCggbmV3ICRjbGFzcyggalF1ZXJ5KCB0aGlzICkgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggalF1ZXJ5KCB0aGlzICkgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ0Vycm9yOiAnICsgZSArICcgfCBGb3IgOiAnICsgJHR5cGUgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0cmVsb2FkKCkge1xuXHRcdHdwLmhvb2tzLmFkZEFjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pY29uX3BpY2tlcicsICdpY29uX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJywgJ2ZvbnRfc2VsZWN0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1hY2NvcmRpb24nLCAnYWNjb3JkaW9uJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ3JvdXAnLCAnZ3JvdXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0Om5vdCgud3Bvbmlvbi1pbnB1dG1hc2spJywgJ3RleHQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0YXJlYScsICd0ZXh0YXJlYScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2tncm91bmQnLCAnYmFja2dyb3VuZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlX3NlbGVjdCcsICdpbWFnZV9zZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zZWxlY3QnLCAnc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3dpdGNoZXInLCAnc3dpdGNoZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9wYWxldHRlJywgJ2NvbG9yX3BhbGV0dGUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InLCAnd3BfZWRpdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZmllbGRzZXQnLCAnZmllbGRzZXQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnaW5wdXRbZGF0YS13cG9uaW9uLWlucHV0bWFza10nLCAnaW5wdXRtYXNrJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfbGluaycsICd3cF9saW5rcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNoZWNrYm94JywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtcmFkaW8nLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1rZXlfdmFsdWUnLCAna2V5dmFsdWVfcGFpcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BpY2tlcicsICdjb2xvcl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1kYXRlX3BpY2tlcicsICdkYXRlX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdhbGxlcnknLCAnZ2FsbGVyeScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXVwbG9hZCcsICd1cGxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pbWFnZScsICdpbWFnZV91cGxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10YWInLCAnanF1ZXJ5X3RhYicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1maWVsZC10b29sdGlwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nb29nbGVfbWFwcycsICdnb29nbGVfbWFwcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1oZWxwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24td3JhcC10b29sdGlwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jbG9uZScsICdjbG9uZV9lbGVtZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3QyJywgJ3NlbGVjdDInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLmNob3NlbicsICdjaG9zZW4nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdGl6ZScsICdzZWxlY3RpemUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zb3J0ZXInLCAnc29ydGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdHlwb2dyYXBoeScsICd0eXBvZ3JhcGh5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtb2VtYmVkJywgJ29lbWJlZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWhlYWRpbmcnLCAnaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN1YmhlYWRpbmcnLCAnc3ViaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbnRlbnQnLCAnY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWphbWJvX2NvbnRlbnQnLCAnamFtYm9fY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW5vdGljZScsICdub3RpY2UnICk7XG5cblx0XHR3cC5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRfYXJncyggJGFyZ3MgKSB7XG5cdFx0dGhpcy5fYXJncyA9ICRhcmdzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggJGVsZW0gKSB7XG5cdFx0bGV0ICRJRCA9ICR3cG9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0cmV0dXJuIGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJElEICsgJ1wiXScgKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCApIHtcblx0XHRpZiggISRzZWxlY3Rvci5qUXVlcnkgKSB7XG5cdFx0XHQkc2VsZWN0b3IgPSBqUXVlcnkoICRzZWxlY3RvciApO1xuXHRcdH1cblx0XHR0aGlzLnNldF9lbGVtZW50KCAkc2VsZWN0b3IgKTtcblx0XHR0aGlzLnNldF9jb250eHQoICRjb250ZXh0ICk7XG5cdFx0dGhpcy5tb2R1bGVfaW5pdCgpO1xuXHR9XG5cblx0bW9kdWxlX2luaXQoKSB7XG5cdH1cblxuXHRzZXRfZWxlbWVudCggJGVsZW0gKSB7XG5cdFx0aWYoICEkZWxlbS5qUXVlcnkgKSB7XG5cdFx0XHQkZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtID0gJGVsZW07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRfY29udHh0KCAkY29udHh0ICkge1xuXHRcdHRoaXMuY29udGV4dCA9ICRjb250eHQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgaG9vaygpIHtcblx0XHRyZXR1cm4gd2luZG93LndwLmhvb2tzO1xuXHR9XG5cblx0Z2V0IGVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbTtcblx0fVxuXG5cdGdldCBjb250eHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dDtcblx0fVxuXG59XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uX1ZhbGlkYXRvciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZm9ybSAgPSBXUE9uaW9uX1ZhbGlkYXRvci5nZXRfZm9ybSgpO1xuXHRcdHRoaXMucnVsZXMgPSB7XG5cdFx0XHRpbnZhbGlkSGFuZGxlcjogKCkgPT4ge1xuXHRcdFx0XHRqUXVlcnkoICcjcHVibGlzaCcgKS5yZW1vdmVDbGFzcyggJ2J1dHRvbi1wcmltYXJ5LWRpc2FibGVkJyApO1xuXHRcdFx0XHRqUXVlcnkoICcjYWpheC1sb2FkaW5nJyApLmF0dHIoICdzdHlsZScsICcnICk7XG5cdFx0XHRcdHRoaXMuZm9ybS5zaWJsaW5ncyggJyNtZXNzYWdlJyApLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmZvcm0uYmVmb3JlKCAnPGRpdiBpZD1cIm1lc3NhZ2VcIiBjbGFzcz1cImVycm9yXCI+PHA+JyArICR3cG9uaW9uLnR4dCggJ3ZhbGlkYXRpb25fc3VtbWFyeScgKSArICc8L3A+PC9kaXY+JyApO1xuXHRcdFx0fSxcblx0XHRcdGlnbm9yZTogJy53cG9uaW9uLWRlcGVuZGVudCwud3Bvbmlvbi12YWxpZGF0aW9uLWlnbm9yZScsXG5cdFx0XHRlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oIGVycm9yLCBlbGVtZW50ICkge1xuXHRcdFx0XHRlbGVtZW50LnRyaWdnZXIoICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsIHsgZXJyb3IsIGVsZW1lbnQgfSApO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yQ2xhc3M6ICd3cG9uaW9uLWVycm9yJyxcblx0XHRcdGVycm9yRWxlbWVudDogJ3AnXG5cdFx0fTtcblx0XHRpZiggdGhpcy5mb3JtICkge1xuXHRcdFx0dGhpcy5mb3JtLnZhbGlkYXRlKCB0aGlzLnJ1bGVzICk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGdldF9mb3JtKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QnICkubGVuZ3RoID4gMCAmJiBqUXVlcnkoICdpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjb3JpZ2luYWxfcHVibGlzaCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0Ly9yZXR1cm4galF1ZXJ5KCAnZm9ybSNwb3N0JyApO1xuXHRcdH1cblx0XHRyZXR1cm4gKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkgPyBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKSA6IGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oIHtcblx0XHRcdFx0aGVhZGVyOiAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0YW5pbWF0ZTogMTUwLFxuXHRcdFx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxuXHRcdFx0XHRhY3RpdmU6IGpRdWVyeSggdGhpcyApLmhhc0NsYXNzKCAnaXNfb3BlbicgKSxcblx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHQnaGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctcmlnaHQnLFxuXHRcdFx0XHRcdCdhY3RpdmVIZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1kb3duJ1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkaW5wdXRzID0gdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1yYWRpb10nICkub24oICdjbGljaycsICgpID0+ICRpbnB1dHMucmVtb3ZlQXR0ciggJ25hbWUnICkgKTtcblxuXHRcdFx0JGlucHV0cy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLmZpbmQoICdpbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XScgKS5wcm9wKCAnY2hlY2tlZCcsIHRydWUgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmNob3NlbiggdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjaG9zZW4nLCB7fSApICkgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuLyogZ2xvYmFsIHNldFRpbWVvdXQ6dHJ1ZSAqL1xuLyogZ2xvYmFsIHdwb25pb25fZmllbGQ6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyAgICAgICAgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ2Nsb25lJywge30gKSApO1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkY2xvbmVfd3JhcCA9ICRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1jbG9uZS13cmFwJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1hZGRdJyApLFxuXHRcdFx0Ly8kcmVtb3ZlX2J0biA9ICRjbG9uZV93cmFwLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLXJlbW92ZV0nICksXG5cdFx0XHQkbGltaXQgICAgICA9ICggJGFyZy5saW1pdCAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLmxpbWl0IDogZmFsc2UsXG5cdFx0XHQvLyRpc190b2FzdCAgID0gKCAkYXJnLnRvYXN0X2Vycm9yICE9PSB1bmRlZmluZWQgKSA/ICRhcmcudG9hc3RfZXJyb3IgOiB0cnVlLFxuXHRcdFx0JGVyb3JfbXNnICAgPSAkYXJnLmVycm9yX21zZyxcblx0XHRcdCRzb3J0ICAgICAgID0gKCAkYXJnLnNvcnQgIT09IGZhbHNlICkgPyB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tZmllbGQtY2xvbmUnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1maWVsZC1jbG9uZS1zb3J0ZXInLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tY2xvbmVyLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6ICggZXZlbnQsIHVpICkgPT4gdWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApLFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0ucmVtb3ZlQXR0ciggJ3N0eWxlJyApLFxuXHRcdFx0fSA6IGZhbHNlO1xuXG5cdFx0JGNsb25lX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZF9idG4sXG5cdFx0XHRsaW1pdDogJGxpbWl0LFxuXHRcdFx0Y2xvbmVfZWxlbTogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdHJlbW92ZV9idG46ICdhLndwb25pb24tcmVtb3ZlJyxcblx0XHRcdHRlbXBsYXRlOiAkdGhpcy5vcHRpb24oICdjbG9uZV90ZW1wbGF0ZScgKSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGUgKSA9PiB3cG9uaW9uX2ZpZWxkKCAkZS5maW5kKCAnPiBkaXYud3Bvbmlvbi1maWVsZC1jbG9uZTpsYXN0LWNoaWxkJyApICkucmVsb2FkKCksXG5cdFx0XHRzb3J0YWJsZTogJHNvcnQsXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8qaWYoICRpc190b2FzdCA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0XHQvLyBAdG9kbyBBZGQgVG9hc3QgT3B0aW9uLlxuXHRcdFx0XHRcdC8hKndwby50b3N0KCB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImVycm9yXCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogJGVyb3JfbXNnLFxuXHRcdFx0XHRcdH0gKTsqIS9cblx0XHRcdFx0fSBlbHNlIHsqL1xuXHRcdFx0XHRsZXQgJGh0bWwgPSBqUXVlcnkoICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPicgKyAkZXJvcl9tc2cgKyAnPC9kaXY+JyApXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkucHJlcGVuZCggJGh0bWwgKTtcblx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5mYWRlSW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkX19FID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gJF9fRS5mYWRlT3V0KCAnc2xvdycsICgpID0+ICRfX0UucmVtb3ZlKCkgKSwgMTAwMCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdC8vfVxuXHRcdFx0fSxcblx0XHRcdHNob3dfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuc2hvdyxcblx0XHRcdGhpZGVfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuaGlkZSxcblx0XHR9ICk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLndwQ29sb3JQaWNrZXIoKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdzZXR0aW5ncycgKSApLFxuXHRcdFx0JHZpZXc7XG5cblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHNldHRpbmdzLnRoZW1lICkgKSB7XG5cdFx0XHQkdmlldyA9ICRzZXR0aW5ncy50aGVtZTtcblx0XHRcdGRlbGV0ZSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR2aWV3ID0gJ2RlZmF1bHQnO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdGpRdWVyeSggJ2JvZHknIClcblx0XHRcdFx0LmFwcGVuZCggalF1ZXJ5KCAnPGRpdiBjbGFzcz1cIndwb25pb24tZGF0ZXBpY2tlci0nICsgJHZpZXcgKyAnXCIgaWQ9XCInICsgdGhpcy5pZCgpICsgJ1wiPjwvZGl2PicgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tZGF0ZXBpY2tlci1yYW5nZScgKSApIHtcblx0XHRcdCRzZXR0aW5ncy5hcHBlbmRUbyA9IGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpIClbIDAgXTtcblx0XHRcdGlmKCAkc2V0dGluZ3MucGx1Z2lucyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkc2V0dGluZ3MucGx1Z2lucyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQkc2V0dGluZ3MucGx1Z2lucy5wdXNoKCBuZXcgcmFuZ2VQbHVnaW4oIHsgaW5wdXQ6ICRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci10by1kYXRlXScgKVsgMCBdIH0gKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLWZyb20tZGF0ZV0nICkuZmxhdHBpY2tyKCAkc2V0dGluZ3MgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKVsgMCBdO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0JyApLmZsYXRwaWNrciggJHNldHRpbmdzICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRnZXQgd2Vic2FmZSgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fd2Vic2FmZV9mb250cycgKTtcblx0fVxuXG5cdGdldCBnb29nbGVfZm9udHMoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2dmb250cycgKTtcblx0fVxuXG5cdGJ1aWxkX29wdGlvbnMoIGRhdGEgKSB7XG5cdFx0bGV0ICRyZXR1cm4gPSAnJztcblx0XHRmb3IoIGxldCAkX2QgaW4gZGF0YSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCBkYXRhWyAkX2QgXSApICkge1xuXHRcdFx0XHQkcmV0dXJuICs9IGA8b3B0aW9uIHZhbHVlPVwiJHskX2R9XCI+JHtkYXRhWyAkX2QgXX08L29wdGlvbj5gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJHJldHVybjtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdzZWxlY3Qud3Bvbmlvbi1mb250LXNlbGVjdG9yJyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4ge1xuXHRcdFx0bGV0ICR2YWwgID0galF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSxcblx0XHRcdFx0JGh0bWwgPSBudWxsO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggdGhpcy53ZWJzYWZlLmZvbnRzIFsgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLndlYnNhZmUudmFyaWFudHMgKTtcblx0XHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggdGhpcy5nb29nbGVfZm9udHNbICR2YWwgXSApICkge1xuXHRcdFx0XHQkaHRtbCA9IHRoaXMuYnVpbGRfb3B0aW9ucyggdGhpcy5nb29nbGVfZm9udHNbICR2YWwgXSApO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICR2YXJpYW50ID0gdGhpcy5lbGVtZW50LmZpbmQoICdzZWxlY3Qud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLmh0bWwoICRodG1sICk7XG5cblx0XHRcdGlmKCAkdmFyaWFudC5oYXNDbGFzcyggJ2Nob3NlbicgKSApIHtcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2Nob3Nlbjp1cGRhdGVkJyApO1xuXHRcdFx0fSBlbHNlIGlmKCAkdmFyaWFudC5oYXNDbGFzcyggJ3NlbGVjdDInICkgKSB7XG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRodG1sX3RlbXAgPSAkdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0JGlucHV0ICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldycgKSxcblx0XHRcdHdwX21lZGlhX2ZyYW1lLFxuXHRcdFx0JGFkZCAgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktYWRkXScgKSxcblx0XHRcdCRlZGl0ICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWVkaXRdJyApLFxuXHRcdFx0JGNsZWFyICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktY2xlYXJdJyApLFxuXHRcdFx0JG1hbmFnZSAgICA9IGZ1bmN0aW9uKCAkdHlwZSApIHtcblx0XHRcdFx0bGV0IGlkcyAgID0gJGlucHV0LnZhbCgpLFxuXHRcdFx0XHRcdHdoYXQgID0gKCAkdHlwZSA9PT0gJ2VkaXQnICkgPyAnZWRpdCcgOiAnYWRkJyxcblx0XHRcdFx0XHRzdGF0ZSA9ICggd2hhdCA9PT0gJ2FkZCcgJiYgIWlkcy5sZW5ndGggKSA/ICdnYWxsZXJ5JyA6ICdnYWxsZXJ5LWVkaXQnO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXG5cdFx0XHRcdGlmKCBzdGF0ZSA9PT0gJ2dhbGxlcnknICkge1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcblx0XHRcdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHRcdFx0ZnJhbWU6ICdwb3N0Jyxcblx0XHRcdFx0XHRcdHN0YXRlOiAnZ2FsbGVyeScsXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYS5nYWxsZXJ5LmVkaXQoICdbZ2FsbGVyeSBpZHM9XCInICsgaWRzICsgJ1wiXScgKTtcblx0XHRcdFx0XHRpZiggd2hhdCA9PT0gJ2FkZCcgKSB7XG5cdFx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5zZXRTdGF0ZSggJ2dhbGxlcnktbGlicmFyeScgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3VwZGF0ZScsIGZ1bmN0aW9uKCBzZWxlY3Rpb24gKSB7XG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkSWRzID0gc2VsZWN0aW9uLm1vZGVscy5tYXAoIGZ1bmN0aW9uKCBhdHRhY2htZW50ICkge1xuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSBhdHRhY2htZW50LnRvSlNPTigpO1xuXHRcdFx0XHRcdFx0aWYoIGl0ZW0uc2l6ZXMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgdGh1bWIgPSAoIHR5cGVvZiBpdGVtLnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGl0ZW0uc2l6ZXMudGh1bWJuYWlsLnVybCA6IGl0ZW0udXJsLFxuXHRcdFx0XHRcdFx0XHQkdG1wICA9IGpRdWVyeSggJGh0bWxfdGVtcCApO1xuXHRcdFx0XHRcdFx0JHRtcC5hdHRyKCAnZGF0YS13cG9uaW9uLWltYWdlX2lkJywgaXRlbS5pZCApO1xuXHRcdFx0XHRcdFx0JHRtcC5maW5kKCAnaW1nJyApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgaXRlbS51cmwgKS5hdHRyKCAnc3JjJywgdGh1bWIgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG5cdFx0XHRcdFx0XHQkcHJldmlldy5hcHBlbmQoICR0bXAgKTtcblx0XHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcud3Bvbmlvbi1oZWxwJyApLnRpcHB5KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5pZDtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0bGV0ICRlO1xuXHRcdFx0XHRcdGZvciggJGUgaW4gc2VsZWN0ZWRJZHMgKSB7XG5cdFx0XHRcdFx0XHRpZiggc2VsZWN0ZWRJZHNbICRlIF0gPT09IGZhbHNlIHx8IHNlbGVjdGVkSWRzWyAkZSBdID09PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIHNlbGVjdGVkSWRzWyAkZSBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkaW5wdXQudmFsKCBzZWxlY3RlZElkcy5qb2luKCAnLCcgKSApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH07XG5cblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdFx0XHQkZWRpdC5oaWRlKCk7XG5cdFx0XHRcdCRjbGVhci5oaWRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZWRpdC5zaG93KCk7XG5cdFx0XHRcdCRjbGVhci5zaG93KCk7XG5cdFx0XHRcdCRhZGQuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdCRhZGQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdhZGQnICkgKTtcblxuXHRcdCRlZGl0Lm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnZWRpdCcgKSApO1xuXG5cdFx0JGNsZWFyLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaS53cG9uaW9uLWltYWdlLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRwYXJlbnQgICA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0XHQkaW1hZ2VfaWQgPSAkcGFyZW50LmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnICksXG5cdFx0XHRcdCR2YWx1ZSAgICA9ICRpbnB1dC52YWwoKS5zcGxpdCggJywnICk7XG5cdFx0XHRqUXVlcnkuZWFjaCggJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdFx0aWYoICR2ID09PSAkaW1hZ2VfaWQgKSB7XG5cdFx0XHRcdFx0JHZhbHVlLnNwbGljZSggJGssIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkaW5wdXQudmFsKCAkdmFsdWUuam9pbiggJywnICkgKTtcblx0XHRcdCRwYXJlbnQuZmFkZU91dCggKCkgPT4gJHBhcmVudC5yZW1vdmUoKSApO1xuXHRcdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0fSApO1xuXG5cdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cblx0XHRpZiggJHByZXZpZXcuaGFzQ2xhc3MoICdnYWxsZXJ5LXNvcnRhYmxlJyApICkge1xuXHRcdFx0JHByZXZpZXcuc29ydGFibGUoIHtcblx0XHRcdFx0aXRlbXM6ICc+IGRpdicsXG5cdFx0XHRcdGN1cnNvcjogJ21vdmUnLFxuXHRcdFx0XHRzY3JvbGxTZW5zaXRpdml0eTogNDAsXG5cdFx0XHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3NvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0aGVscGVyOiAnY2xvbmUnLFxuXHRcdFx0XHRvcGFjaXR5OiAwLjY1LFxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHRsZXQgJGl0ZW0gPSB1aS5pdGVtO1xuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnd2lkdGgnLCAkaXRlbS53aWR0aCgpICk7XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICdoZWlnaHQnLCAkaXRlbS5oZWlnaHQoKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG4iLCIvKiBnbG9iYWwgZ29vZ2xlOnRydWUgKi9cbmltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkbWFwICAgICAgICAgICAgICA9IHRoaXMub3B0aW9uKCAnbWFwJywge30gKTtcblx0XHQkbWFwLmRldGFpbHMgICAgICAgICAgPSAnI2dtYXBfZmllbGRzXycgKyB0aGlzLmlkKCk7XG5cdFx0JG1hcC5kZXRhaWxzQXR0cmlidXRlID0gJ2RhdGEtbWFwLXZhbHVlJztcblx0XHRpZiggJ3llcycgPT09IHRoaXMub3B0aW9uKCAnc2hvd19tYXAnICkgKSB7XG5cdFx0XHQkbWFwLm1hcCA9ICcjZ21hcF8nICsgdGhpcy5pZCgpO1xuXHRcdH1cblxuXHRcdGxldCAkX2luc3RhbmNlID0gdGhpcy5lbGVtLmZpbmQoICdkaXYuc2VhcmNoYm94ID4gaW5wdXQnICk7XG5cdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggdGhpcy5oYW5kbGVfYXJncyggJG1hcCApICk7XG5cdFx0JF9pbnN0YW5jZS5iaW5kKCAnZ2VvY29kZTpkcmFnZ2VkJywgKCBldmVudCwgbGF0TG5nICkgPT4ge1xuXHRcdFx0bGV0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG5cdFx0XHR0aGlzLmVsZW0uZmluZCggJy5tYXBfZmllbGRzIDppbnB1dCcgKS52YWwoICcnICk7XG5cdFx0XHRnZW9jb2Rlci5nZW9jb2RlKCB7XG5cdFx0XHRcdCdsb2NhdGlvbic6IHtcblx0XHRcdFx0XHRsYXQ6IHBhcnNlRmxvYXQoIGxhdExuZy5sYXQoKSApLFxuXHRcdFx0XHRcdGxuZzogcGFyc2VGbG9hdCggbGF0TG5nLmxuZygpIClcblx0XHRcdFx0fVxuXHRcdFx0fSwgZnVuY3Rpb24oIHJlc3VsdHMgKSB7XG5cdFx0XHRcdCRfaW5zdGFuY2UuZ2VvY29tcGxldGUoICdmaWxsRGV0YWlscycsIHJlc3VsdHNbIDAgXSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbi8qIGdsb2JhbCBzZXRUaW1lb3V0OnRydWUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcblx0XHRcdCRhZGQgICAgICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1ncm91cC1hZGRdJyApLFxuXHRcdFx0JGdyb3VwX3dyYXAgPSB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1ncm91cC13cmFwJyApLFxuXHRcdFx0JGxpbWl0ICAgICAgPSAkdGhpcy5vcHRpb24oICdsaW1pdCcgKSxcblx0XHRcdCRlcnJvcl9tc2cgID0gJHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApO1xuXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWdyb3VwLXdyYXAnICksICdhY2NvcmRpb24nICk7XG5cblx0XHQkZ3JvdXBfd3JhcC5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koIGpRdWVyeSggdGhpcyApLCB7IG5lc3RhYmxlOiB0cnVlIH0gKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWdyb3VwLXJlbW92ZScgKS50aXBweSgpO1xuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWdyb3VwLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLWNvbnRlbnQgPiAud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nIClcblx0XHRcdFx0XHRcdCAgLmNsaWNrKCk7XG5cdFx0fSApO1xuXG5cdFx0JGdyb3VwX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZCxcblx0XHRcdGxpbWl0OiBwYXJzZUludCggJGxpbWl0ICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnZ3JvdXBfdGVtcGxhdGUnICksXG5cdFx0XHRvblJlbW92ZTogZnVuY3Rpb24oICRlbGVtICkge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0aWYoIGpRdWVyeSggJ2JvZHknICkuZmluZCggJ2xpbmsjZWRpdG9yLWJ1dHRvbnMtY3NzJyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwiZWRpdG9yLWJ1dHRvbnMtY3NzXCIgaHJlZj1cIicgKyAkd3Bvbmlvbi5zZXR0aW5ncyggJ3dwZWRpdG9yX2J1dHRvbnNfY3NzJyApICsgJ1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIG1lZGlhPVwiYWxsXCI+JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGRhdGEgPSAkZ3JvdXBfd3JhcC5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcDpsYXN0LWNoaWxkJyApO1xuXHRcdFx0XHR0aGlzLmluaXRfZmllbGQoICRncm91cF93cmFwLCAnYWNjb3JkaW9uJyApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZGF0YSApO1xuXHRcdFx0XHQkZGF0YS5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCk7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdFx0XHR3cG9uaW9uX2ZpZWxkKCAkZGF0YSApLnJlbG9hZCgpO1xuXHRcdFx0XHR0aGlzLmluaXRfZmllbGQoICRkYXRhLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2VkaXRvcicgKSwgJ3JlbG9hZF93cF9lZGl0b3InICk7XG5cdFx0XHR9LFxuXHRcdFx0c29ydGFibGU6IHtcblx0XHRcdFx0aXRlbXM6ICcud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcsXG5cdFx0XHRcdGhhbmRsZTogJy53cG9uaW9uLWFjY29yZGlvbi10aXRsZScsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnd3Bvbmlvbi1hY2NvcmRpb24tcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHR1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0b3A6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0ICRodG1sID0galF1ZXJ5KCAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj4nICsgJGVycm9yX21zZyArICc8L2Rpdj4nICkuaGlkZSgpO1xuXHRcdFx0XHQkYWRkLmJlZm9yZSggJGh0bWwgKTtcblx0XHRcdFx0JGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmZhZGVJbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRfX0UgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRfX0UuZmFkZU91dCggJ3Nsb3cnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JF9fRS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLypnbG9iYWwgc3dhbDp0cnVlKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRfdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJF90aGlzLmVsZW1lbnQsXG5cdFx0XHQkYXJncyAgICAgICA9ICRfdGhpcy5vcHRpb25zKCksXG5cdFx0XHQkaW5wdXQgICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1pbnB1dCcgKSxcblx0XHRcdCRyZW1vdmVfYnRuID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24taWNvbnBpY2tlci1yZW1vdmVdJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLWFkZF0nICksXG5cdFx0XHQkcHJldmlldyAgICA9ICRlbGVtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXG5cdFx0bGV0ICR3b3JrID0ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsZW1zOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdHBvcHVwOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsbTogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBBIE5ldyBJbnN0YW5jZSBmb3IgVG9vbFRpcC5cblx0XHRcdCAqL1xuXHRcdFx0aW5pdF90b29sdGlwOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCAkYXJncy5wb3B1cF90b29sdGlwICE9PSAnZmFsc2UnICkge1xuXHRcdFx0XHRcdGxldCAkdHAgPSAoIHR5cGVvZiAkYXJncy5wb3B1cF90b29sdGlwID09PSAnb2JqZWN0JyApID8gJGFyZ3MucG9wdXBfdG9vbHRpcCA6IHt9O1xuXHRcdFx0XHRcdGlmKCAkd29yay5lbGVtcy5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JHdvcmsuZWxlbXMudGlwcHkoICR0cCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSW5pdHMgRm9yIGVhY2ggYW5kIGV2ZXJ5IFBPUFVQLlxuXHRcdFx0ICogQHBhcmFtICRlbG1cblx0XHRcdCAqIEBwYXJhbSAkaW5zdGFuY2Vcblx0XHRcdCAqL1xuXHRcdFx0aW5pdDogZnVuY3Rpb24oICRlbG0sICRpbnN0YW5jZSApIHtcblx0XHRcdFx0JHdvcmsuZWxtICAgPSAkZWxtO1xuXHRcdFx0XHQkd29yay5wb3B1cCA9ICRpbnN0YW5jZTtcblx0XHRcdFx0JHdvcmsuZWxlbXMgPSAkd29yay5lbG0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cdFx0XHRcdGxldCAkaGVpZ2h0ID0gJHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcgKTtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcsICRoZWlnaHQgKTtcblx0XHRcdFx0JHdvcmsuc2VsZWN0KCk7XG5cdFx0XHRcdCR3b3JrLmlucHV0KCk7XG5cdFx0XHRcdCR3b3JrLmVsZW1zLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJGljb24gPSBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1pY29uJyApO1xuXHRcdFx0XHRcdCRpbnB1dC52YWwoICRpY29uICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0XHRzd2FsLmNsb3NlTW9kYWwoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQkd29yay5pbml0X3Rvb2x0aXAoKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFdvcmtzIHdpdGggUE9QVVAgSW5wdXQgU2VhcmNoLlxuXHRcdFx0ICovXG5cdFx0XHRpbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0nICkub24oICdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdvcmsuZWxlbXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKS5zZWFyY2goIG5ldyBSZWdFeHAoICR2YWwsICdpJyApICkgPCAwICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYW5kbGVzIFNlbGVjdGJveCBpbiBwb3B1cC5cblx0XHRcdCAqL1xuXHRcdFx0c2VsZWN0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgc2VsZWN0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblx0XHRcdFx0XHQkd3Bvbmlvbi5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0XHQnd3Bvbmlvbi1pY29uLWxpYic6ICR2YWwsXG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHdvcmsuZWxtLCAkd29yay5wb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLmRpc2FibGVMb2FkaW5nKClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmKCAkaW5wdXQudmFsKCkgPT09ICcnICkge1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQmx1ciBFdmVuIC8gY2hhbmdlIGV2ZW4gaW4gaW5wdXRmaWVsZC5cblx0XHQgKi9cblx0XHQkaW5wdXQub24oICdrZXl1cCBibHVyIGNoYW5nZSBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYoICR2YWwgIT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnPGkgY2xhc3M9XCInICsgJHZhbCArICdcIj48L2k+JyApLnNob3coKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBBZGQgQnV0dG9uIENsaWNrIEV2ZW50LlxuXHRcdCAqL1xuXHRcdCRhZGRfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkcG9wdXAgPSBzd2FsKCB7XG5cdFx0XHRcdHRpdGxlOiAkZWxlbS5maW5kKCAnLndwb25pb24tZmllbGQtdGl0bGUgaDQnICkuaHRtbCgpLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHRhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHR3aWR0aDogJzcwMHB4Jyxcblx0XHRcdFx0Y3VzdG9tQ2xhc3M6ICd3cG9uaW9uLWljb24tcGlja2VyLW1vZGVsJyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdCRfdGhpcy5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvblN1Y2Nlc3M6ICggJHJlcyApID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHBvcHVwX2VsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkcG9wdXBfZWxlbSwgJHBvcHVwICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25FcnJvcjogKCkgPT4gJHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxuXHRcdFx0XHRcdFx0b25BbHdheXM6ICgpID0+ICRwb3B1cC5kaXNhYmxlTG9hZGluZygpLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgUmVtb3ZlIEJ1dHRvbiBFdmVudC5cblx0XHQgKi9cblx0XHQkcmVtb3ZlX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRpbnB1dCAgICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3X2FkZCA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXctYWRkJyApLFxuXHRcdFx0JHByZXZpZXcgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcgLndwb25pb24tcHJldmlldycgKTtcblxuXHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gbnVsbDtcblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHByZXZpZXdfYWRkLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3LnNob3coKTtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25faW1hZ2VfdXBsb2FkX3VwZGF0ZWQnLCAkaW5wdXQsICRwcmV2aWV3LCAkcHJldmlld19hZGQgKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlld19hZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkdGhpcy5tZWRpYV9pbnN0YW5jZSApIHtcblx0XHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gd3AubWVkaWEoIHtcblx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdHRpdGxlOiAkdGhpcy5vcHRpb24oICdmcmFtZV90aXRsZScsIFwiU2VsZWN0IEltYWdlXCIgKSxcblx0XHRcdH0gKTtcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9uKCAnc2VsZWN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gJHRoaXMubWVkaWFfaW5zdGFuY2Uuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKS5hdHRyaWJ1dGVzO1xuXHRcdFx0XHRsZXQgdGh1bWJuYWlsICA9ICggdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsLnVybCA6IGF0dGFjaG1lbnQudXJsO1xuXHRcdFx0XHQkcHJldmlldy5maW5kKCAnaW1nJyApLmF0dHIoICdzcmMnLCB0aHVtYm5haWwgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGF0dGFjaG1lbnQudXJsICk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuaWQgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3LmZpbmQoICcud3Bvbmlvbi1pbWFnZS1yZW1vdmUnICkub24oICdjbGljaycsICgpID0+ICRpbnB1dC52YWwoICcnICkudHJpZ2dlciggJ2NoYW5nZScgKSApO1xuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJHNldHRpbmdzID0gdGhpcy5vcHRpb24oICdpbnB1dG1hc2snICk7XG5cdFx0XHRpZiggJHNldHRpbmdzICkge1xuXHRcdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCAkc2V0dGluZ3MsICdJbnB1dE1hc2snICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5pbnB1dG1hc2soICRzZXR0aW5ncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0aGlzX2VsZW0gPSAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLXRhYi13cmFwICcgKTtcblxuXHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkgYScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRsZXQgJF90aGlzID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLXRhYi1jdXJyZW50JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkuaGlkZSgpO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdGxldCAkdGFiID0gJF90aGlzLmF0dHIoICdkYXRhLXRhYi1uYW1lJyApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2RpdiN3cG9uaW9uLXRhYi0nICsgJHRhYiApLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKS5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50IGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpOmZpcnN0LWNoaWxkIGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gJ3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmdsb2JhbF92YWxpZGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtYWN0aW9uLWNvbnRhaW5lciAgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLWFkZF0nICksXG5cdFx0XHRsaW1pdDogKCAtMSA9PT0gdGhpcy5vcHRpb24oICdsaW1pdCcgKSApID8gbnVsbCA6IHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtcmVtb3ZlXScsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRlbGVtLmZpbmQoICc+IGRpdjpsYXN0LWNoaWxkJyApICk7XG5cdFx0XHR9LFxuXHRcdFx0b25SZW1vdmU6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2tleV92YWx1ZV91cGRhdGVkJywgJGVsZW0gKTtcblx0XHRcdH0sXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGh0bWwgPSBqUXVlcnkoICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPicgKyB0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKSArICc8L2Rpdj4nIClcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWtleXZhbHVlX3dyYXAnICkuYWZ0ZXIoICRodG1sICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnZGl2LmFsZXJ0JyApLmZhZGVJbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRfX0UgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRfX0UuZmFkZU91dCggJ3Nsb3cnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JF9fRS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGVyci5lcnJvci5hcHBlbmRUbyggZXJyLmVsZW1lbnQucGFyZW50KCkucGFyZW50KCkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIHRydWUgIT09IGlzX3VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMCApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy5rZXkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0aWYoIHRydWUgIT09IGlzX3VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gZGl2JyApLmVxKCAxICkuZmluZCggJzppbnB1dCcgKS5ydWxlcyggJ2FkZCcsICRhcmdzLnZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYoIHRydWUgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgJiYgdHJ1ZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJzppbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucnVsZXMoICdhZGQnLCAkYXJncyApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmltYWdlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRRQVlSWGhwWmdBQVNVa3FBQWdBQUFBQUFBQUFBQUFBQVAvc0FCRkVkV05yZVFBQkFBUUFBQUE4QUFELzRRTnRhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMd0E4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QaUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pCWkc5aVpTQllUVkFnUTI5eVpTQTFMak10WXpBeE1TQTJOaTR4TkRVMk5qRXNJREl3TVRJdk1ESXZNRFl0TVRRNk5UWTZNamNnSUNBZ0lDQWdJQ0krSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJSGh0Ykc1ek9uaHRjRTFOUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmJXMHZJaUI0Yld4dWN6cHpkRkpsWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wzTlVlWEJsTDFKbGMyOTFjbU5sVW1WbUl5SWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJYQk5UVHBQY21sbmFXNWhiRVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2T1RCR05FVkRRamc0UkRBeFJUQXhNVGhCTWtSRE5FVTJOemhGUWtFelJEZ2lJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSVVU1TjBFM09FRTFPVU5GTVRGRk5UZzFSVVZCTUVVNU4wSTJRa1pCTXpJaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJVVTVOMEUzT0RrMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTkNCWGFXNWtiM2R6SWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5ETTJNRFUyUXpKR1FrVkVSVEF4TVRrMU5VVkNSVEF6UlVFNFFqUkVOVUlpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2T0VWR05FVkRRamc0UkRBeFJUQXhNVGhCTWtSRE5FVTJOemhGUWtFelJEZ2lMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejcvN2dBT1FXUnZZbVVBWk1BQUFBQUIvOXNBaEFBR0JBUUVCUVFHQlFVR0NRWUZCZ2tMQ0FZR0NBc01DZ29MQ2dvTUVBd01EQXdNREJBTURnOFFEdzRNRXhNVUZCTVRIQnNiR3h3Zkh4OGZIeDhmSHg4ZkFRY0hCdzBNRFJnUUVCZ2FGUkVWR2g4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4Ly93QUFSQ0FFVEFSTURBUkVBQWhFQkF4RUIvOFFBaVFBQkFBTUFBd0VCQUFBQUFBQUFBQUFBQUFRRkJnRURCd0lJQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBRUFBQkF3TURBUU1HQnc4Q0F3a0FBQUFCQUFJREVRUUZJUklHTVVFVEIxRmhjWUVpTXBHaHNjRkNnaFRoVW1KeWtxS3l3aU16YzdOMEZUWWtOOUhURitKRFU1T2pWRFZWRmhFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvYUFBd0RBUUFDRVFNUkFEOEEvVktBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSU91ZWVLQ015U3VER0RxU2c2STh2alhtaloyL1dxMzVRRUhleTR0NVBjbFkvOEFGY0Q4aURzUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFRk55ZVhiYlJSL2Z1Si9KSDNVR2IzSU9keURzanZMbVA5M0s5dm1EaUVFbG1jeWJCUVRranpocCtNaEJJWnlhOWJRT1pHL3ltaEIrSW9KTWZLVy85NWIrdHJ2K0lRU1krU1k5M3ZCN1BPUlVmRVNna3g1akdTZTdjTkg0MVcvcFVRUzJQWTlvZXh3YzA5SEExQlFjb0NBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJTTN5cWI5dkJGOTYwdS9LTlAxVUZiaW9HM04vREM4Ym1PUHREeWdDcFFhU1RqMk1lUFpZWXo1V3VQejFRUlpPTFFFZnM1bkErY0FvSXorTDNZOXlaaDlOUjh5Q003ajJWQjBqRHZPSE4rY2hCR2t4bVNqTkhXOG5xYVQ4aURvZkhOR2FQWTVwOGhCQ0Q0M0lOZHgxam00eHBKOTl6bk45SFQ1a0ZtZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FneC9KNTkrVUxmL0NZMXY2MzZ5RG5pN0MvSmgzWkcxeFByRlBuUWE5QVFFQkFRUU00K09QR1R1YzBFbHUwRWp0T2lERWJrRzd4TVpqeHR1dzlkZ1A1V3Z6b0phQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNEQVpxZnZNcmN1SFRlUVBxNmZNZ3VPR3hrdnVKZXdBTnI2Nm9OT2dJQ0FnNGM1cldsemlHdEhVblFJS1hsazdSakd0QnIzanhRanRBQ0RIc0pjNE5IVW1nOWFEMHBqUXhqV2pvMEFEMUlPVUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUWZNa3NjYmR6M0JvOHBRUkpNeFpzMGFTOC9nalQ0NklJVXVibmRwRzBNODUxS0NWaTdtV1dPYVNaMVEwMTlBcHFnd0UwcGRLOTMzemlmaEtEWThOWVJpM3VQMDVTUjZnQWduWlBOMk9QWisxZHZsUHV4TjFkNi9JZ3FNVHl0ODk4WXJzTlpGS2FSRWFiVDVDZk9nMDZDcHlmSk1mWkFzRHUrbjdJMmRBZk9VR1N5R2N5Ris0dGtlV3hFNlJOMGIxN2ZLZ3RPVXY3dXd4c0gwaEhWemZRMW9DQ293N1RKbGJSdEsvdFdFanpCd0pRZWpJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUtyT3RkdGhkOUVFZytrMFFWQ0FndEdrUTRDNmxKb1RISnI1NkVCQjUvdlFhcCtUdU1aeGl5RnZSazArLzI2RFFiaWUzMG9NdkpQSkk4dmtjWHZjYXVjNGtrbjBsQjg3MEZuTnlYTFMycmJZekVNQW81dzBjNzB1Nm9LemVnNzdFR1M5Z2pHdTZSb3A2MEYxemFVZjNTSmplaklSVWVRbHp2bVFSK0lzTW1iaU5LaGpYdVA1Skh6b04rZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdpNVNMdkxOL2xiN1E5U0RQVVFLSUptZmNJT0t2RmFGN1l3UFM1NEorSkJnQTRrZ2VWQnJ1VFdGN0xqY1l5M2dkSXlHTDJ5M1doTFc5bnFRWlo5dmRNOStGN2ZTMGhCMUZ4SFhSQnh2UU42QzQ0bXdTNTYyRGhWcmR6dldHRWo0MEh4eWVjdnpsMVUxMnUyajFBSUxYZ1VlNjd1cHZ2STJ0SDFqL0FObEJ0VUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCd0JCQjZIUW9NdlBIM2NyNHo5RnhGZlFnK1dpcEhuUU9keTl6aWJXMysrZVB6Ry9kUVlVU0VFRWRRYWhCY1FjeHpzTkIzNGVBS0FQYTBqNGdFRTl2aUJrRHBMYlFPYjJnQncrVnhRZGc1aGhwTkxqRXgxUHZPQVlmbGFnNWJrT0N6Nnkyam9uSHlid1B6WElEY1B3KzdKTUdRN2o4RjdnMzlPaUN6NDlnTWZaWDdyaTN2bVhYc0ZyR3RMU1FUMU9oS0REWDA1bHZaNUNhbDczR3ZyUWJUdytoQXgxelAyeVM3UFV4b1A2NkRWSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQ2l6RU95NjMwMGtGZlgyb0kxdEh2dUkyRHRjRUZYNGkzQiswMmx2Mk5ZNlQ4bzAvVlFZK3FCVkFxZ1ZRS29GVUhJZTRkSEVldEJ4dVFlbThLaEVmSDRIRHJLNTd6K1Z0L1ZRWHFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdyOHpGdXQyeUFhc2RxZk1mdW9LN0c3ZnRzZTQwMStPaURua3ZGUDd6TkhPeTQ3bVdObXloYnVhUlVueWp5b016Y2VIK2FqL2RQaW1IbWR0L1NRUUxqaVBJWVBldEhQL2hrUC9ScWdnVDR6SjI0clBheXhEeXZZNXZ5aEJHSklPcURqY2dia0RjZ2JrSHNPRGc3akQyY1ZLRnNMS2p6a1ZQeGxCTlFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUhWY3hDVzNrWjVSOTFCbWpVR25hRUhZeTR1R2U1STV2b0pDRHRaa3IxblNRbjA2L0tnNzQ4emRBKzAwUCtMNUVGaGJYVnpNUnZnTEduNlJQM0VIWlBaMmx3S1R3c2xINGJRNzVVRmZOeFRqMDFkMWxHQ2UxdFcvSVFncjV2RDdBdkpMVE5HZXdOY0NCOElLQ0JMNGFSRWt4WDdtanNEbzYvR0hCQkRiNGI1RVhEQTY1aU1GUnZjTjI3YjIwYlQ1MEhvREdoclEwZEdpZzlTRGxBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFRkZlMk00dW43R0Z6WG1yU0JwcnFnNWh3OXkvVjVFWTgvVkJOaXcxdTMzM0Y1K0FJSmtjRU1YN3RnYjZBZyswQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkJGeW1SaHh1T3ViK2RyblEyc2JwWkdzQUxpMWdxYUFrQ3ZyUVFPTDhzeFBKTE9TNXg1ZTN1WDdKWVpnMXNqU1JVRWhwY0tPN0RWQmJ5UERJM1BQUm9MalR6Q3FDcDR2eWpIOGt4OGw5WXh5eHd4eW1Celp3MXJ0eld0ZFViWFBGS1BIYWd1RUJBUVJzbGZ3NC9IWE4vTUhPaHRZbnpTTllBWEZyR2x4MmdrQ3VubFFZai9yWnhYLzJ0OS81Y1AvTlFTTEh4aTRoY3pDS1Q3VGFBMEFrbmpidDEvaHVrSStCQnRvNUk1WTJ5UnVENDNnT1k5cEJhNXBGUVFSMUJRZlNBZ0lDQWdJS2JqbktzZm4vdG4yT09hUDdGTDNNdmZCcmF1MTFidGMvVFR0UVhLQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3BlYmY0am1QNlNYOUFvUEplTnZ5SEZMWEQ4cWgzVFl2STk1QmtvaDJiWm5zSDVyQTV2bkJIYWc5ck56QmRZMDNOdThTd1RRbDhVamRRNXJtMUJDREVlQ2YrSzNYOWRKL0ppUVRNMzRtMmRwa240dkVXRSthdjRpUkxIYjEyZ2cwY0FXdGtjUzN0bzJpRG5CZUpkbmU1Sm1LeWxoUGhzakthUlJYRmRyaWVqZHpteHVCUFpWdm1RYk5CVDh4L3hQTS8wVS84c29LcndwL3dYSC9qVC96M29KUGlKYVl5ZmlPUmZmTVllNWhjKzJrZFRjMmI2RzA5aExxRHpvS1hpR2N1Y1I0V3g1U2VFM0gyUVNkMUU1Mnd1ajc0dGFOMUhVQXJwb2dOOFZKN2tRT3hlQnVjakdXUm04bGhMaXlHU1JvY1k5d2pjSEZ0YUVuYWd2T1VjM3huSGhERk94OXhrTGdBdzJNSHRQSUpwVStRVjBIbDdFRkhENHFUVzhyUDc5eCs4eE5ySVExdHk4UGUydm5EbzRqOEZVRi95dmxSd2VFanpGdmFqSVdyM3NEeXlYWUJISVBaa0IydkRoV2c5YUM3dDU0cmkzaXVJWGJvcG1Oa2pjTzFyaFVINENnbzhYeXc1SGxHUnd0dmFWdDhhMGQ5ZmQ1b1pEUWJCSHQ4dTc2WFlnNDRqeTMvQVBSZjNEL1NmWmZzTTNjZnZPODM5ZmE5MWxPaUN2enZpUmEyV1NreGVLc0o4emtZYWlhSzNCMnRJcFVibXRrSkk3YU4wNklPY0Y0ajIxN2tvOFhsY2ZQaHNqTnBERmNBN1hrOUFIT2JHUVQyVmFnc1R5c3g4eUhHNTdYdXhMQjM5cmQ5NVh2S0RWdXphS2U2NzZSNklQcm1YS291TllqKzRQaCswdmRJMktLRGYzZTR1cVQ3VzEvUnJTZWlDenh1UWh2OFpiWkNQMllybUZrd3FmZEQyaDFDZk1ncXVJY3FkeU9DN3VtV24yZTBnbk1OdktYbDVsRGRTN2JzWnQwSTdUOFNDL1FFQkFRRUJBUUVCQVFFRkx6Yi9FY3gvU1Mvb0ZCUjhEeGRubGZES3p4OTR6ZmIzRGJocngyai9VU0VPSG5hZFFncXVGNVM4d04vZThMeTc2bU5yMzR5WSs2NXBCZHRGZXh3OXB2bnFFRHdwbmt0K0FaZWVMU1NLZTRldy9oTnRveUVFL3djc2JhTGk3N3hyUWJtNm5mMzBuMGlHYU5iWHlEcjYwSHo0eTJkdTdqa0Y4UUczZHRjTUVFbzBjQThIYzBIcjJBK3BCdHNkTkpOajdXYVExa2toamU4K2R6UVNncitZLzRubWY2S2YrV1VIblhDZUZaL0o4YnRiMjA1UGQ0NjNrTWdaWnhDVFl6Ykk1cHB0bWpHcEZmZFFYclBDaVc2bFljN3lDOHlzTWJnNWtMaTVvMHJVRXZmTjE4MUVGdnoyMXQ3WGdHUnRyZU1SUVF3TVpGRzBVRFd0ZTBBQkIyZUc5dkZCd3JHQ050TjhicEhudExudmNTU2d3MHQxeXAvaVZtYnJDV0VHUXZiWUNKcmJrZ0NLS2pXZ3NySkRxYWZINTBGcGs3anhjeVdQdUxDNjQvWXV0N2xqbzVBSHNxQTRkUlc1T282anpvTHZqWEc4akp3RTRET1I5MU81a3NJYVhOZVd0TGk2TTdtRnc5a2tVOUNDdjRUeWMyUEI3NFgrbDF4NHlRU3hucWR0ZTZiK1Y3QTlDQ2I0V1l1UzI0NGNqYzYzbVhsZGRUUFBVdEpJWjhPcnZXZ3AvREtaOE5oeWlhUDk1SGNTUFo2V3RlUWdvK0JYWGlCYjRxV2ZBWW0xdklMbVp6cHJ1ZHplOWM4VUJEcXp4bWc3Tk8xQk81TFllS3ZJYmFDRzh3bHJDNjJsRTBFOEVzYlpXdUFwbzUxdy9RL01FRjk0aHczTnBiNGJrNFpTN3hFOFp1MnQ3WXBhQ1J1bjRXbnJRY2NtZ2g1THk3SFlacDMyVnRaVFhrNXBWcE03ZTdpclh5YUVlbEJSNHZrczFqNFdYOW84dUdSczVaTVl4bGZhRHBYYVVQNExYT3ArS2c5QTRsaGhodU8yT1BvQkxGR0RQVHRsZjdUL3dBNG9MZEFRRUJBUUVCQVFFQkFRVkhMNEpwK0w1V0dDTjBzMGxySzJPSmdMbk9jV21nRFJxU2dnK0c5cGQybkM4ZGIzY01sdmNNNzdmREswc2UyczhoRld1QUlxRFZCRDhTZUpTWnJHTnZyRnBHWHgvN1MzTFBlZTBHcFlLYTE3VytmMG9JM2hKaTcyMDR2ZDIyUnRKYlo4bDNJZTVuamRHNXpIUXhOcnRjQWFHaENDcXNiUG1YQkx1NnQ3REhQemVDbmVaSVdSRW1WcE5CMGFIdUJwUU85a2c5ZktnWHRoekhuZDVhUlpISE93dUJ0NU85bGpsSjcxNUZXblJ3WTR1cFVEMlFCV3V1aUQwNWpHc2FHTkZHdEFEUU9nQVFWZks0WnArTVphR0dOMHMwbHBNMk9OZ0xuT2NZeUFHZ2FrbEJXK0dsbmQyZkRiRzN1NEpMZTRZWnQ4TXJYTWVLelBJcTF3QjFCUWFkQlFjK3RybTY0aGs3ZTJpZlBQSkcwTWlqYVh2Y2Q3VG8xdFNVSDF3YTJ1TGJpV01ndVlud3p4dzBraWthV1BhZHgwTFRRaEJuZVVjZDVIamVUamxYR29oY3l5c0VkL1pIcThBQWFDb3FIQm82YWdpdXFDUGRjcjhRczNidXgyTjQ3UGlwcGhza3ZwM1BZR05PaGN4ejJSYlQ2S255YW9OeGdjZGNZN0UyMW5jM1VsN2NSTi9iWFV6blBjOTdpU2RYRW1nclFlWkI1enpiaVdibDVWSmI0eUdRNHpQbUIxL0xHeHptUnVpZjdSZTRDamZ2OWVxRDFLM2dpdDRJNElXaGtVTFd4eHRIUU5hS0FmQWd3L2hoakwrMGJuRzMxcExidG51eTZNVFJ1WUhzTzdWdTRDb1FWZHJZY3c0SmYzY2VMeDdzemdMbVR2WTRZcW1SaE5COUVQZUhVb0NkcEJwVkJLTnp6L2x0NWJ3aTB1T05ZbUorKzVtN3g4Yzc2YWJRYVJQTmRhZXpUeTlpRGRaYkd3WkxGM1dPbS9kWE1Ub2llcEc0VUR2U0RxZ3gvaGZoc3ZiTnlGOW1JcElyMTVpczRoSzB0UGMyc1lZMHRCcFZwMDE3YUlLdC9EOGpKNGxTUm1DVCt3dnVHWlNTUXNkM0ptWXduYnVwdDNkNDgxRmVpRDA5QVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkJBeitXaXhHRnZNbEpTbHRFNTdRZnBQNk1iOVp4QVFlUzhRa3lISHM3aGN4ZlBMcmJrclpHWERqMk9mTDdMajJkZGp2UVNnOXBjNXJXbHppQTBDcEowQUFRZEZsZjJGOUQzMWxjeFhVSUphWllYdGtidUhVYm1raXVxQmUzOWhZdzk5ZTNNVnJDU0dpV1o3WTI3ajBHNXhBcm9nN1RKR0krOExnSTZidDlSdHAxclh5SUlFWEkrUFRUaTNoeWxwSk9TUUltVHhPZVNPbzJoMVVFdThqaGxzNTRwbmJJWHh2Yksrb0cxcGFRNDFPZ29FR2J4Mkx3bU00VGtMWERYZjIyeUVOeTRUOTVITDdSak80Ym93MXVpQ0w0UmY0WEIvR20vU1FhbSt5K0pzQzBYMTdCYUYzdWllVmtkZlJ1SVFkbG5mMk43RjMxbmNSWE1KMDd5RjdaRytUcTBrSU1IeXovQUhSNHovRFA2VDBHM2JtOE02OE5rMi90amVBN1RiQ1ZobHI1TmxkM3hJUGpQLzhBd1dSL3BadjVia0dhOEl2OExnL2pUZnBJTlZmWmJGV0cwMzE1QmFCM3U5L0l5T3ZvM0VlUkIyMjEzYTNVSW10Wm1Ud3U5MlNKd2UwOXVoYVNFSGFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJUE9mRnJKeHp5WXZqWW5aYmk5bWJOZHpQYzFqV1JCMnhwY1hhVXJ1ZDlWQno0aHk4VXlIRC9zdGhrN0owK04yU1dVVWR4RVhGc1kyRmpRSFZQc2RCNVVHcDRUblJtK05XZDY1MjZjTjdxNTh2ZXgreTRuOGIzdldnemZEUi9ZT2E1bmpidlp0YnY4QTEyUEhaUTlXajZwcDlWQTVtUDc5elhDOGJhTjFyYkg3ZGtCMUZCMGFmcWluMWtGanpUakdTejEvWlJ6M2tkdHh1Q2o3Nkx2SE1sZStwL0IyVTkwQ3J0S2xCbStSY2Q4SllNVmNDMnU0SWIxc2J6QytHNWZPL3ZHalFPWUhTRFYzWFJCZWNJeUYxZStHem4zTHpMSkZEY3doN3RTV3NEZzJwOHpkRUVIdzkvMnd2L3hieitXZ21lRnd1ajRmMHRDd1haZGNmWnpKVU1FbFR0M1VEalN2WFJCWDJQQStMV2Njay9OYiszdXN2Y1NPZExKTGR1aVpyMDJrdWhjVFRVMVFWV0pmZ01WNGo0NlBpMTRaTWZldE1kM0Mxem5zQklkUnU1M1VDZ2NOVFFvSjNpUFpYbDl6M0JXZG5NNjNubmgyQ2Rudk1hWHYzdUZPME1xZ3Q3N3dnNHEvRnVnczJTUVh6Vy9zcjB5UGM0dkhUZTBuWlR5MGFFSFJ3ek8zbVU0Qms0YjV4ZmQ0K0s0dG55T05YT2FJaVdseDdTSzdmVWcrT0E1VCsxZUdFMlIyaHh0ZnRFakdub1hBK3lENlNneStBbThPN3lGK1I1ZmtaTDNNWFRuT21pYzI2RFl4VTdRREUwVjA4aG9PZ1FTTFBOY1l3WExNZE54UytrbHgxOUlJTWpZUEV3WXdQY0d0ZTB5dGJXbTZvMUowNjBLRDJOQVFFQkFRRUJBUUVCQVFFQkFRRUJBSkFGVG9BZzhxNC9pY2Z6amx1YXkrVGlOeGk0Q0lMU1BjNWdORFJoQllXblJyYWtmaElOVi8wczRIL3dEV2YrdmNmOHhCbmVBU080N3pQTGNVbWRTQ1p4bXNhOXUwYmhTdmE2STYvaW9MVHhJZ2ZqN3ZEOHFoSHQ0eTRiSGRVNm0zbE5EOHBiOVpCMStHc1Q4bGtNMXl1Y0hka0p6RGFWNmlDTWovQUlOYjlWQlZjN2x0TDNuMWxpK1FYVDdYQU5nRWpBQ1dzZElkM3RPZDJWY051N3M4eURuUE04SjhMaWJsMWhGYTNsOUxHNXRzeU9VM1JFaGFRMXhMblNOWUFkU2dzZkRvZytHbHdBZFFMc0g0Q1VIVjRlLzdZWC80dDUvTFFkWERycTl0UENhN3ViS291b20zTG9uTkZTMGc2dUg0bzFRVm5FTVI0YVhtR1plNXk5am15a2hjKzdiZFhMb1hOZnVQdXREMkYybmJyVkJIanlIR2JqeEx3MGZINEk0YkczZjNicFkyN0JKSWQxWER0STZBVlFXL2lGbEc0cnhBd09RZXgwa2R2Q1h5dFlLdTd2YzhQSUg0TFNTZzFXUjhRK0oybU1mZlI1R0c1TzJzVnZFOE9sYzdzYnM5NXYxZ0VHZDRKakx1MjREbDcyN2FXU1pKbHhjTWFSVDJPNklEdGZ2alUraEI4OEt4c3VUOEticXdoL2ZUaTRiRURvQzhPcTBlc2hCRTRGa2VDUHhMY2RuYk93dGN0WkYwVTdyeUdGaGZSeG9TK1FlOFBkSUpyVUlMTjJaNFUva2xqaWNEZ3JISnp5UHJQZHdSUk1aQTFyaDdZZUkzYnRvMTBJN05kVUhvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDRDR1SUlyaUNTQ1VFeFRNZEhJQVMwbHJoUTBjMGdqVHRDQ0hoY0ZpY0phRzB4bHVMZTNjOHlPWUhPZlY1QUJKYzh1ZDBBN1VFOUJWM2ZHTUhkNWVETVQyMjdKVzIwUTNEWHlNSTJra1ZhMXdhN3IyaEJNeUdQczhqWlRXVjVHSnJXZHUyV01raW82OVdrRWVwQnhqY2JZNHl4aXNiR0lRMnNJSWpqQkpwVWtuVnhKT3A3VUhSbWVQNFhOUXRoeWxveTVZeXBZWFZEbTE2N1h0SWNLK1lvSU9NNEp4SEd5ZDdhWXlKc25ZK1RkTTRWMDlreWw5UFVnbDR2aldGeFZoUFlXRnYzTm5jRnpwb3U4a2NDWHREWGF2YzRpclIySVBySDhldytPeGNtTHM3ZnVyQ1VQRDRkNzNWN3dVZDdUbkYybzg2RHN4R0Z4bUlzUlk0Nkh1YlZwYzRSN25QMWNhblY1Y2ZqUVZGeDRjY0p1TGszRW1MakVoTzRoajVJMlZyWDNHT2F6NGtFdVRodkdIdnNuakh4eHV4Nys4c3pDWFJiSDFEcS9zeTNkcTBlOVZCSXZPUFllOHlkdms3bTNFbDlhTkxJSlM1NERXbXRSdEJEVDd4NmhCWHgrSHZESTczN1l6RlJDYXU0QWw1akI4MFJkM2Y1cUM5bnQ0WjdlUzNsYnVobFlZM3MxRld1RkNOS1UwUVJzUmhzYmg3SnRsam9lNHRXdUxteDduUDFjYW5WNWNmalFRc3Z3dmkrWW03L0lZK09XYys5SzB1aWU2bW50T2pMQzcxb0pPRzQ1ZzhMRzVtTXM0N1lQb0h2YlV2Y0IwRG51SmNmV1VGaWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNELy8yUT09Jztcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmJlZm9yZSggJzxzcGFuIGNsYXNzPVwic3Bpbm5lciB3cG9uaW9uLXNwaW5uZXJcIj48L3NwYW4+JyApO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4gdGhpcy5zaG93X3ByZXZpZXcoIGUgKSApO1xuXHR9XG5cblx0c2hvd19wcmV2aWV3KCkge1xuXHRcdGxldCAkdmFsdWUgPSB0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS52YWwoKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLXNwaW5uZXInICkuYWRkQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0JHdwb25pb24uYWpheCggJ29lbWJlZC1wcmV2aWV3Jywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdHZhbHVlOiAkdmFsdWUsXG5cdFx0XHR9XG5cdFx0fSwgKCByZXMgKSA9PiB7XG5cdFx0XHRpZiggZmFsc2UgPT09IHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApXG5cdFx0XHRcdFx0Lmh0bWwoICc8aW1nIGNsYXNzPVwid3Bvbmlvbi1uby1wcmV2aWV3XCIgc3JjPVwiJyArIHRoaXMuaW1hZ2UgKyAnXCIvPicgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuaHRtbCggcmVzLmRhdGEgKTtcblx0XHRcdH1cblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApXG5cdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLnJlbW92ZUNsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3QyJywge30gKTtcblx0XHR0aGlzLmVsZW1lbnQuc2VsZWN0MiggdGhpcy5oYW5kbGVfYXJncyggJGFyZyApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZmllbGRfZGVidWcoKXtcblxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgPSB0aGlzLm9wdGlvbiggJ3NlbGVjdGl6ZScsIHt9ICk7XG5cblx0XHRpZiggIWlzX3VuZGVmaW5lZCggJGFyZy50aGVtZSApICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCAkYXJnLnRoZW1lICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcyggJ3NlbGVjdGl6ZS1kZWZhdWx0JyApO1xuXHRcdH1cblxuXHRcdCRhcmcgPSAkd3Bvbmlvbi5qc19mdW5jKCAkYXJnICk7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCAnZm9ybS1jb250cm9sJyApLnNlbGVjdGl6ZSggJGFyZyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dmFyICR0aGlzICAgICA9IHRoaXMuZWxlbWVudCxcblx0XHRcdCRlbmFibGVkICA9ICR0aGlzLmZpbmQoICcud3Bvbmlvbi1lbmFibGVkJyApLFxuXHRcdFx0JGRpc2FibGVkID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWRpc2FibGVkJyApO1xuXG5cdFx0JGVuYWJsZWQuc29ydGFibGUoIHtcblx0XHRcdGNvbm5lY3RXaXRoOiAkZGlzYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdHVwZGF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0dmFyICRlbCA9IHVpLml0ZW0uZmluZCggJ2lucHV0JyApO1xuXG5cdFx0XHRcdGlmKCB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCAnd3Bvbmlvbi1lbmFibGVkJyApICkge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZGlzYWJsZWQnLCAnZW5hYmxlZCcgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZW5hYmxlZCcsICdkaXNhYmxlZCcgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHRoaXMudHJpZ2dlciggJ3dwb25pb24tc29ydGVyLXVwZGF0ZWQnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gYXZvaWQgY29uZmxpY3Rcblx0XHQkZGlzYWJsZWQuc29ydGFibGUoIHtcblx0XHRcdGNvbm5lY3RXaXRoOiAkZW5hYmxlZCxcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBjc3NfdW5pdHMgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZm9udF93ZWlnaHRfc3R5bGUgPSBmYWxzZTtcblx0XHRsZXQgJGVsICAgICAgICAgICAgICAgID0gdGhpcy5lbGVtZW50O1xuXHRcdGxldCAkcHJldmlldyAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZvbnQtcHJldmlldycgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgICAgID0gdGhpcztcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0XG5cdFx0XHRcdCRmb250X2ZpZWxkICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicgKSxcblx0XHRcdFx0JGZvbnQgICAgICAgICAgICAgID0gJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkudmFsKCksXG5cdFx0XHRcdCRmb250X3dlaWdodF9zdHlsZSA9ICR0aGlzLmZvbnRfc3R5bGUoICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLnZhbCgpICksXG5cdFx0XHRcdCR0YWcgICAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC10YWcgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkY29sb3IgICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWZpZWxkLWNvbG9yX3BpY2tlciBpbnB1dC53cC1jb2xvci1waWNrZXInICkudmFsKCksXG5cdFx0XHRcdCRhbGlnbiAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1hbGlnbiBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRmb250U2l6ZSAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1zaXplIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGluZUhlaWdodCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGluZS1oZWlnaHQgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdCRiYWNrVVBGb250ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1iYWNrdXAtZm9udCBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRkaXJlY3Rpb24gICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1kaXJlY3Rpb24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGV0dGVyLXNwYWNpbmcgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdGhyZWYgICAgICAgICAgICAgICA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9JyArICRmb250ICsgJzonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCxcblx0XHRcdFx0aHRtbCAgICAgICAgICAgICAgID0gJzxsaW5rIGhyZWY9XCInICsgaHJlZiArICdcIiBjbGFzcz1cIndwc2YtZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICsgJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPic7XG5cblx0XHRcdGlmKCBqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5hdHRyKCAnaHJlZicsIGhyZWYgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggJ2hlYWQnICkuYXBwZW5kKCBodG1sICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZm9udFNpemUgPT09ICcnIHx8ICRmb250U2l6ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkZm9udFNpemUgPSAnMThweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGV0dGVyU3BhY2luZyA9PT0gJycgfHwgJGxldHRlclNwYWNpbmcgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgPSAnMXB4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYoICRsaW5lSGVpZ2h0ID09PSAnJyB8fCAkbGluZUhlaWdodCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkbGluZUhlaWdodCA9ICcyMHB4Jztcblx0XHRcdH1cblxuXG5cdFx0XHRsZXQgJF9hdHRycyA9ICcgZm9udC1mYW1pbHk6JyArICRmb250ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC13ZWlnaHQ6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQgKyAnOyAnICtcblx0XHRcdFx0JyBmb250LXN0eWxlOicgKyAkZm9udF93ZWlnaHRfc3R5bGUuc3R5bGUgKyAnOyAnICtcblx0XHRcdFx0JyB0ZXh0LWFsaWduOicgKyAkYWxpZ24gKyAnOyAnICtcblx0XHRcdFx0JyBjb2xvcjogJyArICRjb2xvciArICc7JyArXG5cdFx0XHRcdCcgZm9udC1zaXplOicgKyBjc3NfdW5pdHMoICRmb250U2l6ZSApICsgJzsgJyArXG5cdFx0XHRcdCcgbGV0dGVyLXNwYWNpbmc6JyArIGNzc191bml0cyggJGxldHRlclNwYWNpbmcgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxpbmUtaGVpZ2h0OicgKyBjc3NfdW5pdHMoICRsaW5lSGVpZ2h0ICkgKyAnOyAnO1xuXG5cblx0XHRcdGxldCAkdGV4dCA9ICRwcmV2aWV3LnRleHQoKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5hcHBlbmQoIGpRdWVyeSggJzwnICsgJHRhZyArICc+JyArICR0ZXh0ICsgJzwvJyArICR0YWcgKyAnID4nICkgKTtcblx0XHRcdCRwcmV2aWV3LmZpbmQoICR0YWcgKS5hdHRyKCBcInN0eWxlXCIsICRfYXR0cnMgKTtcblxuXHRcdH0gKTtcblx0fVxuXG5cdGZvbnRfc3R5bGUoICRpbmZvICkge1xuXHRcdGxldCAkd2VpZ2h0X3ZhbCA9ICc0MDAnLFxuXHRcdFx0JHN0eWxlX3ZhbCAgPSAnbm9ybWFsJztcblxuXHRcdHN3aXRjaCggJGluZm8gKSB7XG5cdFx0XHRjYXNlICcxMDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzEwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzEwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzcwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzcwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc5MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdCRzdHlsZV92YWwgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7IHdlaWdodDogJHdlaWdodF92YWwsIHN0eWxlOiAkc3R5bGVfdmFsIH07XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFkZCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbicgKSxcblx0XHRcdCRpbnB1dCAgICA9ICRlbGVtLmZpbmQoICdpbnB1dFt0eXBlPXRleHRdJyApLFxuXHRcdFx0JHNldHRpbmdzID0gJHRoaXMub3B0aW9ucygpLCB3cF9tZWRpYV9mcmFtZTtcblxuXHRcdCRhZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHdwX21lZGlhX2ZyYW1lICkge1xuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHR0aXRsZTogJHNldHRpbmdzLnNldHRpbmdzLmZyYW1lX3RpdGxlLFxuXHRcdFx0XHRsaWJyYXJ5OiB7XG5cdFx0XHRcdFx0dHlwZTogJHNldHRpbmdzLnNldHRpbmdzLnVwbG9hZF90eXBlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRcdHRleHQ6ICRzZXR0aW5ncy5zZXR0aW5ncy5pbnNlcnRfdGl0bGUsXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSB3cF9tZWRpYV9mcmFtZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpO1xuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmF0dHJpYnV0ZXMudXJsICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gKTtcblx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHRleHRhcmVhID0gJGVsZW0uZmluZCggJ3RleHRhcmVhJyApO1xuXHRcdCRlbGVtLmZpbmQoICcjd3Bvbmlvbi13cC1saW5rLXBpY2tlciA+IGJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGV4dGFyZWEudmFsKCAnJyApO1xuXHRcdFx0aWYoICF3aW5kb3cud3BMaW5rICkge1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHR0aXRsZTogJHdwb25pb24udGV4dCggJ3dwX2xpbmtfZXJyb3JfdGl0bGUnLCAnV1AgTGluayBKUyBMaWIgTm90IEZvdW5kJyApLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy53cExpbmsub3BlbiggJHRleHRhcmVhLmF0dHIoICdpZCcgKSApO1xuXHRcdH0gKTtcblxuXG5cdFx0JHRleHRhcmVhLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApLmh0bWwoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApLnZhbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkudmFsKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN0YXJnZXQnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0YXJnZXQnICkudmFsKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEudGV4dCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuLi9jb3JlL2RlYnVnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGxldCAkZGVwID0gdGhpcy5vcHRpb24oICdkZXBlbmRlbmN5JyApO1xuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRlcC5jb250cm9sbGVyICkge1xuXHRcdFx0bGV0ICRjb250cm9sbGVyID0gJGRlcC5jb250cm9sbGVyIFsgJGtleSBdLFxuXHRcdFx0XHQkY29uZGl0aW9uICA9ICRkZXAuY29uZGl0aW9uIFsgJGtleSBdLFxuXHRcdFx0XHQkdmFsdWUgICAgICA9ICRkZXAudmFsdWUgWyAka2V5IF0sXG5cdFx0XHRcdCRmaWVsZCAgICAgID0gJ1tkYXRhLWRlcGVuZC1pZD1cIicgKyAkY29udHJvbGxlciArICdcIl0nO1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZy5uZXN0YWJsZSApIHtcblx0XHRcdFx0bGV0ICRJTlBVVCA9IHRoaXMuY29uZmlnLnBhcmVudC5maW5kKCAnW2RhdGEtZGVwZW5kLWlkPScgKyAkY29udHJvbGxlciArICddJyApO1xuXHRcdFx0XHRpZiggJElOUFVULmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0JGZpZWxkID0gJ1tkYXRhLXdwb25pb24tanNpZD1cIicgKyAkd3Bvbmlvbi5maWVsZElEKCAkSU5QVVQgKSArICdcIl06aW5wdXQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmNyZWF0ZVJ1bGUoICRmaWVsZCwgJGNvbmRpdGlvbiwgJHZhbHVlICkgKTtcblx0XHRcdHRoaXMuc2V0X2NvbnR4dCggdGhpcy5jb250eHQuaW5jbHVkZSggdGhpcy5lbGVtZW50ICkgKTtcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ0RlcGVuZGVuY3knOiAkZGVwLCAnTmVzdGFibGUgRGVwZW5kZW5jeSc6IHRoaXMuY29uZmlnLm5lc3RhYmxlIH0gKTtcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRmaWQgICAgICAgICA9IHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1maWVsZC1qc2lkJyApLFxuXHRcdFx0JGlzX2xvYWRpbmcgID0gbnVsbCxcblx0XHRcdHdwb2ltZyAgICAgICA9ICggaW1nLCBjYWxsYmFjayApID0+IHtcblx0XHRcdFx0Y29uc3QgdGVzdERpbWVuc2lvbnMgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRcdGlmKCBpbWcubmF0dXJhbFdpZHRoICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggdGVzdERpbWVuc2lvbnMgKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA1ICk7XG5cdFx0XHR9O1xuXHRcdGxldCAkdG9vbHRpcF9rZXkgPSBmYWxzZTtcblx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJ3dwb25pb24taGVscCc7XG5cdFx0fSBlbHNlIGlmKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLXdyYXAtdG9vbHRpcCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cmFwX3Rvb2x0aXAnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAkZmlkICsgJ3Rvb2x0aXAnO1xuXHRcdH1cblxuXHRcdC8vbGV0ICR0b29sdGlwX2tleSA9ICggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkgPyAnZmllbGRfaGVscCcgOiAkZmlkICsgJ3Rvb2x0aXAnLFxuXHRcdGxldCAkYXJnID0gKCB0cnVlID09PSAkd3Bvbmlvbi52YWxpZF9qc29uKCAkZmlkICkgKSA/IEpTT04ucGFyc2UoICRmaWQgKSA6IHRoaXMub3B0aW9uKCAkdG9vbHRpcF9rZXksIGZhbHNlICk7XG5cblxuXHRcdGlmKCBmYWxzZSA9PT0gJGFyZyApIHtcblx0XHRcdGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHknICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweScgKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHktYXJncycgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH0gZWxzZSBpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICd0aXBweS1hcmdzJyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ3RpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggJGFyZyApIHtcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcblx0XHRcdGlmKCAkYXJnLmltYWdlICE9PSB1bmRlZmluZWQgJiYgJGFyZy5pbWFnZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdCRhcmcuaHRtbCAgICAgICAgICAgPSAnI3dwb3RwaW1nJztcblx0XHRcdFx0JGFyZy51cGRhdGVEdXJhdGlvbiA9IDIwMDA7XG5cdFx0XHRcdCRhcmcub25TaG93ICAgICAgICAgPSBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XG5cdFx0XHRcdFx0Y29uc3QgY29udGVudCA9IHRoaXMucXVlcnlTZWxlY3RvciggJy50aXBweS1jb250ZW50JyApO1xuXHRcdFx0XHRcdGlmKCAkaXNfbG9hZGluZyApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGlzX2xvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0ZmV0Y2goICRhcmcuaW1hZ2UgKS50aGVuKCByZXNwID0+IHJlc3AuYmxvYigpICkudGhlbiggYmxvYiA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB1cmwgICAgICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcblx0XHRcdFx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt1cmx9XCI+YDtcblx0XHRcdFx0XHRcdHdwb2ltZyggY29udGVudC5xdWVyeVNlbGVjdG9yKCAnaW1nJyApLCBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS51cGRhdGUgKTtcblx0XHRcdFx0XHRcdCRpc19sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0fSApLmNhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb250ZW50LmlubmVySFRNTCA9ICdMb2FkaW5nIGZhaWxlZCc7XG5cdFx0XHRcdFx0XHQkaXNfbG9hZGluZyAgICAgICA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5vbkhpZGRlbiAgICAgICA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnN0IGNvbnRlbnQgICAgID0gdGhpcy5xdWVyeVNlbGVjdG9yKCAnLnRpcHB5LWNvbnRlbnQnICk7XG5cdFx0XHRcdFx0Y29udGVudC5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5wb3BwZXJPcHRpb25zICA9IHsgbW9kaWZpZXJzOiB7IHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9LCBoaWRlOiB7IGVuYWJsZWQ6IGZhbHNlIH0gfSB9O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYXJnID0ge307XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50aXBweSggdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJHRvb2x0aXBfa2V5ICkgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkaW1hZ2UgPSAoIGlzX3VuZGVmaW5lZCggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApICkgKSA/IHRoaXMuZWxlbWVudC5hdHRyKCAnc3JjJyApIDogdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApO1xuXHRcdHN3YWwoIHtcblx0XHRcdGltYWdlVXJsOiAkaW1hZ2UsXG5cdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdGJhY2tkcm9wOiBgcmdiYSgwLDAsMCwwLjQ0KWBcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkLCByYW5kX21kNSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkbWNlX2VkaXRvciAgPSB0aW55TUNFUHJlSW5pdC5tY2VJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRxdWlja190YWdzICA9IHRpbnlNQ0VQcmVJbml0LnF0SW5pdFsgdGhpcy5vcHRpb24oICd3cGVkaXRvcl9pZCcgKSBdLFxuXHRcdFx0XHQkTkVXX0lEICAgICAgPSAnd3Bvbmlvbi13cC1lZGl0b3ItJyArIHJhbmRfbWQ1KCksXG5cdFx0XHRcdCR0ZXh0QXJlYSAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuY2xvbmUoKSxcblx0XHRcdFx0JGFjdHVhbF9JRCAgID0gJHRleHRBcmVhLmF0dHIoICdpZCcgKSxcblx0XHRcdFx0JGFjdHVhbF9odG1sID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKS5odG1sKCksXG5cdFx0XHRcdCRyZWdleCAgICAgICA9IG5ldyBSZWdFeHAoICRhY3R1YWxfSUQsIFwiZ1wiICk7XG5cdFx0XHQkYWN0dWFsX2h0bWwgICAgID0gJGFjdHVhbF9odG1sLnJlcGxhY2UoICRyZWdleCwgJE5FV19JRCApO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoICRhY3R1YWxfaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5wYXJlbnQoKS5hcHBlbmQoICR0ZXh0QXJlYSApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYTpub3QoIycgKyAkYWN0dWFsX0lEICsgJyknICkucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLmF0dHIoICdpZCcsICRORVdfSUQgKTtcblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRtY2VfZWRpdG9yICkgKSB7XG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcblx0XHRcdFx0dGlueW1jZS5pbml0KCAkbWNlX2VkaXRvciApO1xuXHRcdFx0XHR0aW55TUNFLmV4ZWNDb21tYW5kKCAnbWNlQWRkRWRpdG9yJywgZmFsc2UsICcjJyArICRORVdfSUQgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRxdWlja190YWdzICkgKSB7XG5cdFx0XHRcdCRxdWlja190YWdzLmlkID0gJE5FV19JRDtcblx0XHRcdFx0cXVpY2t0YWdzKCAkcXVpY2tfdGFncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgYXJyYXlfbWVyZ2UgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcjYnVsa19lZGl0JywgKCkgPT4ge1xuXHRcdFx0bGV0ICRmaW5hbF9hcmdzID0geyBwb3N0X2lkczogW10gfSxcblx0XHRcdFx0JGJ1bGtfZWRpdCAgPSAkKCAnI2J1bGstZWRpdCcgKTtcblxuXHRcdFx0JGJ1bGtfZWRpdC5maW5kKCAnI2J1bGstdGl0bGVzJyApLmNoaWxkcmVuKCkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzLnBvc3RfaWRzLnB1c2goICQoIHRoaXMgKS5hdHRyKCAnaWQnICkucmVwbGFjZSggL14odHRsZSkvaSwgJycgKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcud3Bvbmlvbi1xdWljay1lZGl0LWZpZWxkc2V0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkZmluYWxfYXJncyA9IGFycmF5X21lcmdlKCAkKCB0aGlzICkuc2VyaWFsaXplT2JqZWN0KCksICRmaW5hbF9hcmdzICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAnc2F2ZS1idWxrLWVkaXQnLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRhc3luYzogZmFsc2UsXG5cdFx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHRcdFx0ZGF0YTogJGZpbmFsX2FyZ3MsXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLm1lbnUoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICdoMi5hamF4LWNvbnRhaW5lciBidXR0b24nLCB0aGlzLnNhdmVfaGFuZGxlciApO1xuXHR9XG5cblxuXHRtZW51KCkge1xuXHRcdGxldCAkZWxlbSA9IHRoaXMuZWxlbWVudDtcblx0XHQkZWxlbS5vbiggJ2NsaWNrJywgJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSBhJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdkcm9wZG93bicgKSApIHtcblx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5pcyggJzp2aXNpYmxlJyApICkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSB1bCcgKS5zbGlkZVVwKCAnZmFzdCcgKTtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJGhyZWYgICAgICAgICAgID0gJHdwb25pb25faGVscGVyLnVybF9wYXJhbXMoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWhyZWYnICkgKSxcblx0XHRcdFx0XHQkcGFyZW50ICAgICAgICAgPSAnd3Bvbmlvbi10YWItJyArICRocmVmWyAncGFyZW50LWlkJyBdLFxuXHRcdFx0XHRcdCRzZWN0aW9uICAgICAgICA9ICggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgKSA/ICRwYXJlbnQgKyAnLScgKyAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gOiBmYWxzZSxcblx0XHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tcGFyZW50LXdyYXBzJyApLFxuXHRcdFx0XHRcdCRjdXJyZW50ICAgICAgICA9ICRlbGVtLmZpbmQoICdkaXYjJyArICRwYXJlbnQgKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdCRwYXJlbnRfYWN0aXZlcy5oaWRlKCk7XG5cblx0XHRcdFx0aWYoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICYmICRocmVmWyAncGFyZW50LWlkJyBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICcgZGl2IycgKyAkc2VjdGlvbiApLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRjdXJyZW50LnNob3coKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGEuYWN0aXZlICcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZSAnICk7XG5cdFx0XHRcdCQoIHRoaXMgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSA+IGxpID4gYScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhW2RhdGEtd3Bvbmlvbi1pZD1cIndwb25pb25fbWVudV8nICsgJGhyZWZbICdwYXJlbnQtaWQnIF0gKyAnXCJdJyApXG5cdFx0XHRcdFx0IC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXG5cdHNhdmVfaGFuZGxlciggZSApIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0aGlzICAgPSB0aGlzLFxuXHRcdFx0JHBhcmVudCA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0JGJhc2UgICA9ICRwYXJlbnQucGFyZW50KCkucGFyZW50KCksXG5cdFx0XHQkaGlkZGVuID0gJHBhcmVudC5maW5kKCAnZGl2Lndwb25pb24tbWV0YWJveC1zZWN1cmUtZGF0YScgKTtcblxuXHRcdCRiYXNlLmJsb2NrKCB7IG1lc3NhZ2U6IG51bGwsIG92ZXJsYXlDU1M6IHsgYmFja2dyb3VuZDogJyMwMDAnLCBvcGFjaXR5OiAwLjcgfSB9ICk7XG5cblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXHRcdGxldCAkZmllbGRzID0gJHBhcmVudC5wYXJlbnQoKS5maW5kKCAnOmlucHV0JyApO1xuXHRcdGxldCAkdmFsdWVzID0gJGZpZWxkcy5zZXJpYWxpemUoKTtcblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblxuXHRcdCR3cG9uaW9uLmFqYXgoICdzYXZlX21ldGFib3gnLCB7IGRhdGE6ICR2YWx1ZXMgfSwgZnVuY3Rpb24oIHJlcyApIHtcblx0XHRcdCRiYXNlLmh0bWwoIHJlcyApO1xuXHRcdFx0JGJhc2UudW5ibG9jaygpO1xuXHRcdFx0d3Bvbmlvbl9maWVsZCggJGJhc2UuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0JCggJ2Rpdi5wb3N0Ym94Lndwb25pb24tbWV0YWJveCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBXUE9uaW9uX01ldGFib3hfTW9kdWxlKCAkKCB0aGlzICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBXUE9uaW9uX1F1aWNrX0VkaXQgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdG1vZHVsZV9pbml0KCkge1xuXHRcdHRoaXMucG9zdF9pZCA9IHRoaXMuY29udHh0O1xuXHRcdGxldCAkaWQgICAgICA9ICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApICsgJ18nICsgdGhpcy5wb3N0X2lkO1xuXHRcdHRoaXMudmFsdWVzICA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGlkLCBmYWxzZSApO1xuXG5cdFx0aWYoIHRoaXMudmFsdWVzLmh0bWwgKSB7XG5cdFx0XHR0aGlzLnZhbHVlcy5odG1sID0galF1ZXJ5KCB0aGlzLnZhbHVlcy5odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuaHRtbCggdGhpcy52YWx1ZXMuaHRtbC5maW5kKCAnPiBkaXYnICkgKTtcblx0XHR9XG5cblx0XHR3cG9uaW9uX2ZpZWxkKCB0aGlzLmVsZW1lbnQgKS5yZWxvYWQoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgd3AgKSA9PiB7XG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRsZXQgJGxpc3QgPSAkKCAnI3RoZS1saXN0JyApO1xuXHRcdGlmKCAkbGlzdC5sZW5ndGggPiAwICkge1xuXHRcdFx0JGxpc3Qub24oICdjbGljaycsICcuZWRpdGlubGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgcG9zdF9pZCA9IGpRdWVyeSggdGhpcyApLmNsb3Nlc3QoICd0cicgKS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdHBvc3RfaWQgICAgID0gcG9zdF9pZC5yZXBsYWNlKCAncG9zdC0nLCAnJyApO1xuXHRcdFx0XHQkKCAndHIjZWRpdC0nICsgcG9zdF9pZCApLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bmV3IFdQT25pb25fUXVpY2tfRWRpdCggalF1ZXJ5KCB0aGlzICksIHBvc3RfaWQgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdwICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc193aW5kb3dfYXJnIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRvciBmcm9tICcuL2NvcmUvdmFsaWRhdGlvbic7XG5cbndpbmRvdy53cG9uaW9uX21ldGFib3hfbW9kdWxlID0gcmVxdWlyZSggJy4vbW9kdWxlcy9tZXRhYm94JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbl9idWxrX2VkaXQgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvYnVsay1lZGl0JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbl9xdWlja19lZGl0ICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvcXVpY2stZWRpdCcgKS5kZWZhdWx0O1xuLy93aW5kb3cud3Bvbmlvbl9jdXN0b21pemVyX21vZHVsZSA9IHJlcXVpcmUoICcuL21vZHVsZXMvY3VzdG9taXplcicgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2NvcmUnICkuZGVmYXVsdDtcbndpbmRvdy4kd3Bvbmlvbl9kZWJ1ZyAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9kZWJ1ZycgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uX2hlbHBlciAgICAgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKTtcbndpbmRvdy53cG9uaW9uX25ld19maWVsZCAgICAgID0gKCAkY2xhc3MgKSA9PiAoIGlzX3dpbmRvd19hcmcoICRjbGFzcyApICkgPyB3aW5kb3dbICRjbGFzcyBdIDogZmFsc2U7XG53aW5kb3cud3Bvbmlvbl9maWVsZCAgICAgICAgICA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyBXUE9uaW9uX0ZpZWxkKCAkZWxlbSwgJGNvbnR4dCApO1xud2luZG93Lndwb25pb25fbW9kYWwgICAgICAgICAgPSByZXF1aXJlKCAnLi4vdmVuZG9ycy9iYWNrYm9uZS1tb2RhbCcgKS5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9ICggKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgJCwgJHdwbyApID0+IHtcblx0bGV0ICR3cF9ob29rID0gd3AuaG9va3M7XG5cblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCAoKSA9PiB7XG5cdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9pbml0JyApO1xuXG5cdFx0d2luZG93Lndwb25pb25fZmllbGRzID0gJHdwX2hvb2suYXBwbHlGaWx0ZXJzKCAnd3Bvbmlvbl9maWVsZHNfZnVuY3Rpb25zJywge1xuXHRcdFx0dGV4dDogcmVxdWlyZSggJy4vZmllbGRzL3RleHQnICkuZGVmYXVsdCxcblx0XHRcdHRleHRhcmVhOiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dGFyZWEnICkuZGVmYXVsdCxcblx0XHRcdGJhY2tncm91bmQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrZ3JvdW5kJyApLmRlZmF1bHQsXG5cdFx0XHRpbWFnZV9zZWxlY3Q6IHJlcXVpcmUoICcuL2ZpZWxkcy9pbWFnZV9zZWxlY3QnICkuZGVmYXVsdCxcblx0XHRcdHN3aXRjaGVyOiByZXF1aXJlKCAnLi9maWVsZHMvc3dpdGNoZXInICkuZGVmYXVsdCxcblx0XHRcdGNvbG9yX3BhbGV0dGU6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9wYWxldHRlJyApLmRlZmF1bHQsXG5cdFx0XHRzZWxlY3Q6IHJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QnICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdDI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QyJyApLmRlZmF1bHQsXG5cdFx0XHRjaG9zZW46IHJlcXVpcmUoICcuL2ZpZWxkcy9jaG9zZW4nICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdGl6ZTogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdGl6ZScgKS5kZWZhdWx0LFxuXHRcdFx0aWNvbl9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9pY29uX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0Zm9udF9zZWxlY3RvcjogcmVxdWlyZSggJy4vZmllbGRzL2ZvbnRfc2VsZWN0b3InICkuZGVmYXVsdCxcblx0XHRcdGFjY29yZGlvbjogcmVxdWlyZSggJy4vZmllbGRzL2FjY29yZGlvbicgKS5kZWZhdWx0LFxuXHRcdFx0Z3JvdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9ncm91cCcgKS5kZWZhdWx0LFxuXHRcdFx0d3BfZWRpdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvd3BfZWRpdG9yJyApLmRlZmF1bHQsXG5cdFx0XHRyZWxvYWRfd3BfZWRpdG9yOiByZXF1aXJlKCAnLi9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3InICkuZGVmYXVsdCxcblx0XHRcdGZpZWxkc2V0OiByZXF1aXJlKCAnLi9maWVsZHMvZmllbGRzZXQnICkuZGVmYXVsdCxcblx0XHRcdGlucHV0bWFzazogcmVxdWlyZSggJy4vZmllbGRzL2lucHV0bWFzaycgKS5kZWZhdWx0LFxuXHRcdFx0d3BfbGlua3M6IHJlcXVpcmUoICcuL2ZpZWxkcy93cF9saW5rcycgKS5kZWZhdWx0LFxuXHRcdFx0Y2hlY2tib3hfcmFkaW86IHJlcXVpcmUoICcuL2ZpZWxkcy9jaGVja2JveF9yYWRpbycgKS5kZWZhdWx0LFxuXHRcdFx0a2V5dmFsdWVfcGFpcjogcmVxdWlyZSggJy4vZmllbGRzL2tleXZhbHVlX3BhaXInICkuZGVmYXVsdCxcblx0XHRcdGNvbG9yX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0ZGF0ZV9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9kYXRlX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0Z2FsbGVyeTogcmVxdWlyZSggJy4vZmllbGRzL2dhbGxlcnknICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3BvcHVwOiByZXF1aXJlKCAnLi9oZWxwZXJzL2ltYWdlX3BvcHVwJyApLmRlZmF1bHQsXG5cdFx0XHR1cGxvYWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy91cGxvYWQnICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3VwbG9hZDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3VwbG9hZCcgKS5kZWZhdWx0LFxuXHRcdFx0anF1ZXJ5X3RhYjogcmVxdWlyZSggJy4vZmllbGRzL2pxdWVyeV90YWInICkuZGVmYXVsdCxcblx0XHRcdGZpZWxkX3Rvb2x0aXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvZmllbGRfdG9vbHRpcCcgKS5kZWZhdWx0LFxuXHRcdFx0Y2xvbmVfZWxlbWVudDogcmVxdWlyZSggJy4vZmllbGRzL2Nsb25lX2VsZW1lbnQnICkuZGVmYXVsdCxcblx0XHRcdHNvcnRlcjogcmVxdWlyZSggJy4vZmllbGRzL3NvcnRlcicgKS5kZWZhdWx0LFxuXHRcdFx0Z29vZ2xlX21hcHM6IHJlcXVpcmUoICcuL2ZpZWxkcy9nb29nbGVfbWFwcycgKS5kZWZhdWx0LFxuXHRcdFx0dHlwb2dyYXBoeTogcmVxdWlyZSggJy4vZmllbGRzL3R5cG9ncmFwaHknICkuZGVmYXVsdCxcblx0XHRcdG9lbWJlZDogcmVxdWlyZSggJy4vZmllbGRzL29lbWJlZCcgKS5kZWZhdWx0LFxuXHRcdFx0aGVhZGluZzogcmVxdWlyZSggJy4vZmllbGRzL2hlYWRpbmcnICkuZGVmYXVsdCxcblx0XHRcdHN1YmhlYWRpbmc6IHJlcXVpcmUoICcuL2ZpZWxkcy9zdWJoZWFkaW5nJyApLmRlZmF1bHQsXG5cdFx0XHRqYW1ib19jb250ZW50OiByZXF1aXJlKCAnLi9maWVsZHMvamFtYm9fY29udGVudCcgKS5kZWZhdWx0LFxuXHRcdFx0bm90aWNlOiByZXF1aXJlKCAnLi9maWVsZHMvbm90aWNlJyApLmRlZmF1bHQsXG5cdFx0XHRjb250ZW50OiByZXF1aXJlKCAnLi9maWVsZHMvY29udGVudCcgKS5kZWZhdWx0LFxuXHRcdH0gKTtcblx0XHQkd3BvLnNldHRpbmdzX2FyZ3MgICAgPSAkd3BvLndpbmRvd0FyZ3MoICd3cG9uaW9uX2NvcmUnLCB7fSApO1xuXHRcdCR3cG8udGV4dCAgICAgICAgICAgICA9ICR3cG8ud2luZG93QXJncyggJ3dwb25pb25faWw4bicsIHt9ICk7XG5cdFx0JHdwby5kZWJ1Z19pbmZvICAgICAgID0gbnVsbDtcblx0XHQkd3BvLmZpZWxkX2RlYnVnX2luZm8gPSBudWxsO1xuXG5cdFx0aWYoICQoICcjd3BvdHBpbWcnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0JCggJ2JvZHknICkuYXBwZW5kKCAnPGRpdiBpZD1cIndwb3RwaW1nXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO21pbi13aWR0aDozMDBweDttaW4taGVpZ2h0OjQwMHB4O1wiPi4uPC9kaXY+JyApO1xuXHRcdH1cblxuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlID4gc3Ryb25nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcblx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LWRvd24nICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctcmlnaHQnICk7XG5cdFx0fSApO1xuXG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cblx0XHQvKipcblx0XHQgKiBUcmlnZ2VycyBIb29rIFdpdGggV2lkZ2V0cy5cblx0XHQgKi9cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnd2lkZ2V0LWFkZGVkIHdpZGdldC11cGRhdGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkd2lkZ2V0ICkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJHdpZGdldCApO1xuXHRcdFx0d3Bvbmlvbl9maWVsZCggJHdpZGdldCApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fdGhlbWVfaW5pdCcsICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZW5kZXJzIFZhbGlkYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdG5ldyBXUE9uaW9uX1ZhbGlkYXRvcigpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhbmRsZXMgRmllbGRzIGluaXQuXG5cdFx0XHQgKi9cblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJCggdGhpcyApICk7XG5cdFx0XHRcdHdwb25pb25fZmllbGQoICQoIHRoaXMgKSApLnJlbG9hZCgpO1xuXHRcdFx0fSApO1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXG5cdFx0JHdwby5sb2FkaW5nX3NjcmVlbiggJHdwb2ZfZGl2LCBmYWxzZSApO1xuXHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0JyApO1xuXHR9ICkgKTtcblx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2xvYWRlZCcgKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgd3AsIGpRdWVyeSwgJHdwb25pb24gKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9qcy9jb3JlL2NvcmUnO1xuXG5jb25zdCBXUE9uaW9uX1dQX01vZGFsID0gQmFja2JvbmUuVmlldy5leHRlbmQoIHtcblx0dGVtcGxhdGVzOiB7fSxcblxuXHRldmVudHM6IHtcblx0XHRcImNsaWNrIC5tZWRpYS1tb2RhbC1jbG9zZVwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tY2FuY2VsXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1va1wiOiBcInNhdmVNb2RhbFwiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLW1lbnUgYVwiOiBcImhhbmRsZV9sZWZ0X21lbnVfY2xpY2tcIixcblx0XHRcImNsaWNrIC5tZWRpYS1yb3V0ZXIgYVwiOiBcImhhbmRsZV90YWJfY2xpY2tcIixcblx0fSxcblxuXHRhY3RpdmVfcGFnZTogbnVsbCxcblxuXHRhY3RpdmVfc2VjdGlvbjogbnVsbCxcblxuXHRpbml0aWFsaXplOiAoIG9wdGlvbnMgKSA9PiB7XG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IGZhbHNlLFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHRcdGh0bWw6IGZhbHNlLFxuXHRcdH0sIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMubGVmdF9tZW51ID0gb3B0aW9uc1sgJ2xlZnRfbWVudScgXTtcblx0XHR0aGlzLmh0bWwgICAgICA9IG9wdGlvbnNbICdodG1sJyBdO1xuXHRcdHRoaXMuaGlkZV9tZW51ID0gb3B0aW9uc1sgJ2hpZGVfbWVudScgXTtcblxuXHRcdF8uYmluZEFsbCggdGhpcywgJ3JlbmRlcicsICdwcmVzZXJ2ZUZvY3VzJywgJ2Nsb3NlTW9kYWwnLCAnc2F2ZU1vZGFsJywgJ2RvTm90aGluZycgKTtcblx0XHR0aGlzLmluaXRfdGVtcGxhdGVzKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblxuXHRpbml0X3RlbXBsYXRlczogKCkgPT4ge1xuXHRcdGxldCAkbSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdtb2RhbCcgKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0gID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnZnJhbWUtbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3JvdXRlci1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy53aW5kb3cgICAgICAgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnaHRtbCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdwYWdlX2NvbnRlbnQnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnc2VjdGlvbl9jb250ZW50JyBdICk7XG5cdH0sXG5cblx0cmVuZGVyOiAoKSA9PiB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdHRoaXMuJGVsLmF0dHIoICd0YWJpbmRleCcsICcwJyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMud2luZG93KCkgKTtcblxuXHRcdGlmKCB0aGlzLmxlZnRfbWVudSApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5sZWZ0X21lbnUsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0oIHtcblx0XHRcdFx0XHR1cmw6IGtleSxcblx0XHRcdFx0XHRuYW1lOiB2YWx1ZSxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRpZiggdGhpcy5odG1sICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmh0bWwsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0bGV0ICRjb250ZW50ID0gJCggdGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50KCB7XG5cdFx0XHRcdFx0aWQ6IGtleSxcblx0XHRcdFx0XHR0aXRsZTogdmFsdWVbICd0aXRsZScgXSxcblx0XHRcdFx0XHRodG1sOiB2YWx1ZVsgJ2h0bWwnIF0sXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzZWN0aW9ucycgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdF8uZWFjaCggdmFsdWVbICdzZWN0aW9ucycgXSwgKCB2YWwsIGsgKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJF9jb250ZW50ID0galF1ZXJ5KCB0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRcdFx0XHRpZDoga2V5ICsgXCJfXCIgKyBrLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiB2YWxbICd0aXRsZScgXSxcblx0XHRcdFx0XHRcdFx0XHRodG1sOiB2YWxbICdodG1sJyBdLFxuXHRcdFx0XHRcdFx0XHR9ICkgKSxcblx0XHRcdFx0XHRcdFx0JF9tZW51ICAgID0gdGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSggeyB1cmw6IGssIG5hbWU6IHZhbFsgJ3RpdGxlJyBdIH0gKTtcblxuXHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbFsgJ3NpZGViYXInIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLWNvbnRlbnQnICkuYXBwZW5kKCAkX2NvbnRlbnQgKTtcblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtcm91dGVyJyApLmFwcGVuZCggJF9tZW51ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzaWRlYmFyJyBdICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbHVlWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0JHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0aGlzLiQoICcubWVkaWEtbWVudSBhOmZpcnN0LWNoaWxkJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IC53cG9uaW9uLW1vZGFsLWNvbnRlbnQ6bm90KC5oaWRkZW4pIC5tZWRpYS1mcmFtZS1yb3V0ZXIgYTpmaXJzdC1jaGlsZCcgKVxuXHRcdFx0LnRyaWdnZXIoICdjbGljaycgKTtcblxuXHRcdGlmKCB0aGlzLmhpZGVfbWVudSA9PT0gdHJ1ZSApIHtcblx0XHRcdHRoaXMuJCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtbWVudScgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub24oIFwiZm9jdXNpblwiLCB0aGlzLnByZXNlcnZlRm9jdXMgKTtcblx0XHRqUXVlcnkoICdib2R5JyApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSApLmFwcGVuZCggdGhpcy4kZWwgKTtcblx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHR9LFxuXG5cdGhhbmRsZV9sZWZ0X21lbnVfY2xpY2s6ICggZSApID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0YXJnZXQgPSAkKCBlLnRhcmdldCApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1tZW51IGEuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0bGV0ICRzaG93X3RhcmdldCA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2IycgKyAkdGFyZ2V0LmF0dHIoICdocmVmJyApICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0JHNob3dfdGFyZ2V0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuXG5cdFx0aWYoICRzaG93X3RhcmdldC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5oYXNDbGFzcyggJ2hpZGRlbicgKSApIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkucmVtb3ZlQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9XG5cdFx0dGhpcy5hY3RpdmVfcGFnZSAgICA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9IG51bGw7XG5cdH0sXG5cblx0aGFuZGxlX3RhYl9jbGljazogKCBlICkgPT4ge1xuXHRcdGxldCAkdGFyZ2V0ICAgICAgICAgPSAkKCBlLnRhcmdldCApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkcGFnZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUtbWVudSBhLmFjdGl2ZScgKS5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJGJhc2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKTtcblxuXG5cdFx0JHRhcmdldC5wYXJlbnQoKS5maW5kKCAnLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCRiYXNlLmZpbmQoICcud3Bvbmlvbi1zZWN0aW9uLW1vZGFsLWNvbnRlbnQnICkuaGlkZSgpO1xuXHRcdCRiYXNlLmZpbmQoICcjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKyAnXycgKyB0aGlzLmFjdGl2ZV9zZWN0aW9uICkuc2hvdygpO1xuXHR9LFxuXG5cdHByZXNlcnZlRm9jdXM6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRpZiggdGhpcy4kZWxbIDAgXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsLmhhcyggZS50YXJnZXQgKS5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHRcdH1cblx0fSxcblxuXHRjbG9zZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vZmYoIFwiZm9jdXNpblwiICk7XG5cdFx0alF1ZXJ5KCBcImJvZHlcIiApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiYXV0b1wiIH0gKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9LFxuXG5cdHNhdmVNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCggZSApO1xuXHR9LFxuXG5cdGRvTm90aGluZzogZnVuY3Rpb24oIGUgKSB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRvcHRpb25zID0ge30gKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGlkOiBmYWxzZSxcblx0XHRcdGRhdGE6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1tb2RhbCcsXG5cdFx0XHRtb2RhbDoge30sXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdH0sICRvcHRpb25zICk7XG5cblx0XHRuZXcgV1BPbmlvbl9XUF9Nb2RhbCggXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogdGhpcy5nZXRfbGVmdF9tZW51KCksXG5cdFx0XHRodG1sOiB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLFxuXHRcdFx0aGlkZV9tZW51OiB0aGlzLm9wdGlvbnNbICdoaWRlX21lbnUnIF0sXG5cdFx0fSwgdGhpcy5vcHRpb25zWyAnbW9kYWwnIF0gKSApO1xuXHR9XG5cblx0Z2V0X2xlZnRfbWVudSgpIHtcblx0XHRsZXQgJHJldHVybiA9IGZhbHNlO1xuXHRcdGlmKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdICkge1xuXHRcdFx0JHJldHVybiA9IHt9O1xuXG5cdFx0XHRfLmVhY2goIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sICggJGRhdGEsICRrZXkgKSA9PiB7XG5cdFx0XHRcdCRyZXR1cm5bICRrZXkgXSA9ICggdHlwZW9mICRkYXRhWyAnbWVudV90aXRsZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/ICRkYXRhWyAnbWVudV90aXRsZScgXSA6ICRkYXRhWyAndGl0bGUnIF07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==