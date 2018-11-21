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
			console.log(_validation2.default.get_form());
			if (_validation2.default.get_form()) {
				$elem.find(':input').each(function () {
					jQuery(this).rules('add', $args);
				});
			}
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

			var $info = this.option('debug_info');

			if (false === is_undefined($info)) {
				if (false === empty($info)) {
					_debug2.default.add(this.id(), { 'PHP Args': $info, 'JS Args': {} });
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

				$found.find('> .wponion-field-title > h4').tippy({
					content: _core2.default.txt('click_to_view_debug_info', 'Click To View Field Debug Info'),
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

	$(document).on('ready', function () {
		var $wpof_div = $('.wponion-framework:not(.wponion-module-quick_edit-framework)');
		if ($wpof_div.length > 0) {
			$wp_hook.doAction('wponion_before_theme_init', $wpof_div);
			$wpof_div.each(function () {
				$wp_hook.doAction('wponion_theme_init', $(this));
			});
			$wp_hook.doAction('wponion_after_theme_init', $wpof_div);
		}
	});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvYXJyYXkvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9pbmZvL2luaV9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2ludHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfYm9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC94bWwvdXRmOF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sX2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9fd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Nsb25lX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jb3B5X3RvX2NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGV2aWNlX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGlmZl9kYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19hZnRlcl9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2JlZm9yZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19zYW1lX2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdGFiX2ZvY3VzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3dpbmRvd19hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvb2tnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9waXBlX2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9wbGFpbl9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcXVlcnlfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3JhbmRfbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3Njcm9sbF9wb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3RvX3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90aW1lX3Rha2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90b19qc19mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3VybF9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdmFsaWRhdGVTaW5nbGVKU0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvd2luZG93X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93cmFwX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9iYWNrdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2RhdGVfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9mb250X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2dvb2dsZV9tYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9oZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaWNvbl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qYW1ib19jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0aXplLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3ViaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZmllbGRfdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9pbWFnZV9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2J1bGstZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXRhYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1aWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dwb25pb24tY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9ycy9iYWNrYm9uZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiJdLCJuYW1lcyI6WyJKU19QYXJzZV9BcmdzIiwiJGFyZ3MiLCIkZGVmYXVsdHMiLCIkaXNfbmVzdGVkIiwiYXJncyIsImRlZmF1bHRzIiwibmVzdGVkIiwicGFyc2UiLCIkX2tleSIsIiRpc19kZWVwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5X21lcmdlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcmdsIiwibGVuZ3RoIiwiYXJnIiwicmV0T2JqIiwiayIsImFyZ2lsIiwiaiIsImkiLCJjdCIsInRvU3RyIiwiT2JqZWN0IiwidG9TdHJpbmciLCJyZXRBcnIiLCJjb25jYXQiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJhcnJheV9tZXJnZV9yZWN1cnNpdmUiLCJhcnIxIiwiYXJyMiIsImFycmF5TWVyZ2UiLCJyZXF1aXJlIiwiaWR4IiwicHVzaCIsImFycmF5X3ZhbHVlcyIsImlucHV0IiwidG1wQXJyIiwia2V5IiwiY291bnQiLCJtaXhlZFZhciIsIm1vZGUiLCJjbnQiLCJpbl9hcnJheSIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJnU3RyaWN0Iiwic3RyaWN0IiwibWljcm90aW1lIiwiZ2V0QXNGbG9hdCIsInMiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRpbWluZyIsIm5hdmlnYXRpb25TdGFydCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwidGltZSIsImZsb29yIiwiY2FsbF91c2VyX2Z1bmMiLCJjYiIsInBhcmFtZXRlcnMiLCJjYWxsVXNlckZ1bmNBcnJheSIsImNhbGxfdXNlcl9mdW5jX2FycmF5IiwiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsImZ1bmMiLCJzY29wZSIsInZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuIiwibWF0Y2giLCJGdW5jdGlvbiIsImV2YWwiLCJFcnJvciIsImFwcGx5IiwiZnVuY3Rpb25fZXhpc3RzIiwiZnVuY05hbWUiLCJpbmlfZ2V0IiwidmFybmFtZSIsIiRsb2N1dHVzIiwicGhwIiwiaW5pIiwibG9jYWxfdmFsdWUiLCJ1bmRlZmluZWQiLCJleHBsb2RlIiwiZGVsaW1pdGVyIiwic3RyaW5nIiwibGltaXQiLCJzcGxpdCIsImpvaW4iLCJzcGxpY2UiLCJpbXBsb2RlIiwiZ2x1ZSIsInBpZWNlcyIsInJldFZhbCIsInRHbHVlIiwibWQ1Iiwic3RyIiwiaGFzaCIsImNyeXB0byIsIm1kNXN1bSIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJlIiwidXRmOEVuY29kZSIsInhsIiwiX3JvdGF0ZUxlZnQiLCJsVmFsdWUiLCJpU2hpZnRCaXRzIiwiX2FkZFVuc2lnbmVkIiwibFgiLCJsWSIsImxYNCIsImxZNCIsImxYOCIsImxZOCIsImxSZXN1bHQiLCJfRiIsIngiLCJ5IiwieiIsIl9HIiwiX0giLCJfSSIsIl9GRiIsImEiLCJiIiwiYyIsImQiLCJhYyIsIl9HRyIsIl9ISCIsIl9JSSIsIl9jb252ZXJ0VG9Xb3JkQXJyYXkiLCJsV29yZENvdW50IiwibE1lc3NhZ2VMZW5ndGgiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAxIiwibE51bWJlck9mV29yZHNUZW1wMiIsImxOdW1iZXJPZldvcmRzIiwibFdvcmRBcnJheSIsImxCeXRlUG9zaXRpb24iLCJsQnl0ZUNvdW50IiwiY2hhckNvZGVBdCIsIl93b3JkVG9IZXgiLCJ3b3JkVG9IZXhWYWx1ZSIsIndvcmRUb0hleFZhbHVlVGVtcCIsImxCeXRlIiwibENvdW50Iiwic3Vic3RyIiwiQUEiLCJCQiIsIkNDIiwiREQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJ0ZW1wIiwidG9Mb3dlckNhc2UiLCJwYXJzZV9zdHIiLCJhcnJheSIsInN0ckFyciIsIlN0cmluZyIsInJlcGxhY2UiLCJzYWwiLCJwIiwibGFzdE9iaiIsImNociIsInRtcCIsInZhbHVlIiwicG9zdExlZnRCcmFja2V0UG9zIiwia2V5cyIsImtleXNMZW4iLCJfZml4U3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckF0IiwiaW5kZXhPZiIsInN0cl9yZXBsYWNlIiwic2VhcmNoIiwic3ViamVjdCIsImNvdW50T2JqIiwicmVwbCIsInNsIiwiZmwiLCJmIiwiciIsInJhIiwic2EiLCJzdHJ0b2xvd2VyIiwic3RydG91cHBlciIsInRvVXBwZXJDYXNlIiwiYmFzZTY0X2RlY29kZSIsImVuY29kZWREYXRhIiwiZGVjb2RlVVRGOHN0cmluZyIsIm1hcCIsImF0b2IiLCJCdWZmZXIiLCJiNjQiLCJvMSIsIm8yIiwibzMiLCJoMSIsImgyIiwiaDMiLCJoNCIsImJpdHMiLCJkZWMiLCJmcm9tQ2hhckNvZGUiLCJiYXNlNjRfZW5jb2RlIiwic3RyaW5nVG9FbmNvZGUiLCJlbmNvZGVVVEY4c3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG9Tb2xpZEJ5dGVzIiwicDEiLCJidG9hIiwiZW5jIiwiYm9vbHZhbCIsImlzQXJyYXkiLCJlbXB0eSIsInVuZGVmIiwibGVuIiwiZW1wdHlWYWx1ZXMiLCJmbG9hdHZhbCIsInBhcnNlRmxvYXQiLCJpbnR2YWwiLCJiYXNlIiwidHlwZSIsImlzTmFOIiwiaXNGaW5pdGUiLCJjZWlsIiwiaXNfYXJyYXkiLCJfZ2V0RnVuY05hbWUiLCJmbiIsIm5hbWUiLCJleGVjIiwiX2lzQXJyYXkiLCJpbmlWYWwiLCJhc1N0cmluZyIsImFzRnVuYyIsImlzX2Jvb2wiLCJpc19jYWxsYWJsZSIsInN5bnRheE9ubHkiLCJjYWxsYWJsZU5hbWUiLCJtZXRob2QiLCJ2YWxpZEZ1bmN0aW9uTmFtZSIsImdldEZ1bmNOYW1lIiwiaXNfZmxvYXQiLCJpc19pbnQiLCJpc19udWxsIiwiaXNfbnVtZXJpYyIsIndoaXRlc3BhY2UiLCJpc19vYmplY3QiLCJpc19zY2FsYXIiLCJ0ZXN0IiwiaXNfc3RyaW5nIiwiaXNzZXQiLCJsIiwidXRmOF9lbmNvZGUiLCJhcmdTdHJpbmciLCJ1dGZ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJzdHJpbmdsIiwibiIsImMxIiwiUmFuZ2VFcnJvciIsImMyIiwiYXJyIiwibGlzdElEIiwidGFnIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJpdGVtIiwiJGRhdGEiLCJyZXR1cm5faHRtbCIsIkkiLCJLIiwiJHZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIiRhcnJheSIsIiRrZXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZCIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2VsZWN0b3IiLCJzdGVwIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiX3N0ZXAiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFicyIsImlzTnVtYmVyaWMiLCJ2YWwiLCJjaGVja1B4IiwiY2hlY2tQY3QiLCJjaGVja0VtIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGF0ZUluaXRpYWwiLCJkYXRlRmluYWwiLCJtcyIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJtaWxsaXNlY29uZCIsImVudHJpZXMiLCJmaWx0ZXIiLCJkYXRlQSIsImRhdGVCIiwiJGVsZW0iLCJqUXVlcnkiLCJ0b0lTT1N0cmluZyIsImhpZGRlbiIsIiRPS1MiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlIiwicHJvcGVydHkiLCJzaGlmdCIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiZGF0YSIsImNyZWF0ZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImxvY2F0aW9uIiwicmFuZG9tIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwiY2FsbGJhY2siLCJ0aXRsZSIsInRpbWVFbmQiLCIkYXJnc19rZXkiLCIkY29udGVudHNfa2V5IiwidXJsIiwicmVkdWNlIiwidiIsIiRzdHJpbmciLCIkY29udGVudHMiLCIkX2siLCJXUE9uaW9uIiwiJHR5cGUiLCJ3cG9uaW9uX2ZpZWxkcyIsImF0dHIiLCIkd2hlcmVfdG9fZmluZCIsIiRpZCIsImZpZWxkSUQiLCJmaW5kIiwiJHZhcl9pZCIsIiRkZWZhdWx0IiwiaXNGaWVsZCIsIndpbmRvd0FyZ3MiLCJ0ZXh0IiwiJGlzX3Nob3ciLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGhhbmRsZSIsIiRqc29uIiwiZGVidWdfaW5mbyIsIiRkZWZpbmVkX3ZhcnMiLCJvbiIsInByZXZlbnREZWZhdWx0Iiwic3dhbCIsInR4dCIsImh0bWwiLCJzaG93Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2hvd0Nsb3NlQnV0dG9uIiwiYW5pbWF0aW9uIiwid2lkdGgiLCJvbkJlZm9yZU9wZW4iLCJlbmFibGVMb2FkaW5nIiwib25PcGVuIiwianNvblZpZXciLCJkaXNhYmxlTG9hZGluZyIsInRoZW4iLCJyZXN1bHQiLCJzZXR0aW5nc19hcmdzIiwib3B0aW9uIiwiaXNfZGVidWciLCJmaWVsZF9kZWJ1Z19pbmZvIiwiJHZhcnMiLCIkdXR4dCIsIiRtdHh0IiwiJGFjdGlvbiIsIiRvblN1Y2Nlc3MiLCIkb25FcnJvciIsIiRvbkFsd2F5cyIsIm9uU3VjY2VzcyIsIm9uQWx3YXlzIiwib25FcnJvciIsIiRhamF4IiwiYWpheCIsImRvbmUiLCJyZXMiLCJmYWlsIiwiYWx3YXlzIiwiY29tcGlsZWQiLCJvcHRpb25zIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsInZhcmlhYmxlIiwiXyIsInRlbXBsYXRlIiwiJGVsZW1lbnQiLCJwYXJhbSIsIm5lc3RhYmxlIiwicGFyZW50IiwiJHRoaXMiLCIkZWwiLCJpbml0IiwicnVsZXNldCIsImRlcHMiLCJjcmVhdGVSdWxlc2V0IiwiZGVwUm9vdCIsImVuYWJsZSIsInNob3ciLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJhZGRDbGFzcyIsImNoZWNrVGFyZ2V0cyIsImluc3RhbmNlIiwiZWFjaCIsIldQT25pb25fRGVwZW5kZW5jeSIsImlzX2pxdWVyeSIsImlzX3VuZGVmaW5lZCIsIiRzZWxlY3RvciIsIiRjb250ZXh0IiwiJGNvbmZpZyIsInNldF9hcmdzIiwiZmllbGRfZGVidWciLCJjb25maWciLCJqc19lcnJvcl9oYW5kbGVyIiwianNfdmFsaWRhdG9yIiwiZXJyIiwiZXJyb3IiLCJhcHBlbmRUbyIsImVsZW1lbnQiLCJqc19lcnJvciIsIm1heWJlX2pzX3ZhbGlkYXRlX2VsZW0iLCJXUE9uaW9uX1ZhbGlkYXRpb24iLCJnZXRfZm9ybSIsImpzX3ZhbGlkYXRlX2VsZW0iLCJydWxlcyIsIiRhcmciLCIkd3BvbmlvbiIsImpzX2Z1bmMiLCIkZXhpc3RzIiwiJHdwb25pb25fZGVidWciLCJnZXQiLCJpZCIsImFkZCIsIiRpbmZvIiwiJGZvdW5kIiwiaGFzQ2xhc3MiLCIkSUQiLCJ0aXBweSIsImNvbnRlbnQiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiJGQiLCIkbm90aWNlX3R4dCIsImhlaWdodEF1dG8iLCJfYXJncyIsIiRhamF4X2tleSIsInBsdWdpbl9pZCIsIiRfaW5zdGFuY2VzIiwiJGNsYXNzIiwiZ2V0X2ZpZWxkX2NsYXNzIiwid3AiLCJob29rcyIsImFkZEFjdGlvbiIsImluaXRfZmllbGQiLCJXUE9uaW9uX01vZHVsZSIsInNldF9lbGVtZW50Iiwic2V0X2NvbnR4dCIsIm1vZHVsZV9pbml0IiwiZWxlbSIsIiRjb250eHQiLCJjb250ZXh0IiwiV1BPbmlvbl9WYWxpZGF0b3IiLCJmb3JtIiwiaW52YWxpZEhhbmRsZXIiLCJzaWJsaW5ncyIsInJlbW92ZSIsImJlZm9yZSIsImlnbm9yZSIsImVycm9yUGxhY2VtZW50IiwidHJpZ2dlciIsImVycm9yQ2xhc3MiLCJlcnJvckVsZW1lbnQiLCJ2YWxpZGF0ZSIsImFjY29yZGlvbiIsImhlYWRlciIsImNvbGxhcHNpYmxlIiwiYW5pbWF0ZSIsImhlaWdodFN0eWxlIiwiYWN0aXZlIiwiaWNvbnMiLCJJRHRvRWxlbWVudCIsIldQT25pb25fRmllbGQiLCJ0b29sdGlwIiwiaGFuZGxlX2JhY2t1cF9pbXBvcnQiLCJjdXJyZW50VGFyZ2V0IiwiJGZpbGUiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZm9yY2VfZG93bmxvYWQiLCJibG9ja19mb3JtIiwidW5pcXVlIiwiZXh0cmEiLCJnZXRfZXh0cmFfdmFsdWUiLCJzdWNjZXNzIiwic3dhbF9lcnJvciIsInVuYmxvY2tfZm9ybSIsIiRpbnMiLCJ0aXBweV9nZXQiLCJpbnN0YW5jZXMiLCJkZXN0cm95IiwiYmFja3VwX2lkIiwicmVzdG9yZV9iYWNrdXAiLCJtc2ciLCJfdGlwcHkiLCJzaG93X3Rvb2x0aXAiLCJyZW1vdmVBdHRyIiwiZXhwb3J0T2JqIiwiZXhwb3J0TmFtZSIsImRhdGFTdHIiLCJkb3dubG9hZEFuY2hvck5vZGUiLCJjbGljayIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsInJlYWRBc1RleHQiLCIkYmFja3VwaWQiLCJpbnRlcmFjdGl2ZSIsIm9uU2hvd24iLCIkaW5wdXRzIiwicHJvcCIsImNob3NlbiIsImhhbmRsZV9hcmdzIiwiJGNsb25lX3dyYXAiLCIkYWRkX2J0biIsIiRsaW1pdCIsIiRlcm9yX21zZyIsImVycm9yX21zZyIsIiRzb3J0Iiwic29ydCIsIml0ZW1zIiwiaGFuZGxlIiwicGxhY2Vob2xkZXIiLCJldmVudCIsInVpIiwiY3NzIiwic3RvcCIsIldQT25pb25DbG9uZXIiLCJhZGRfYnRuIiwiY2xvbmVfZWxlbSIsInJlbW92ZV9idG4iLCJ0ZW1wbGF0ZUFmdGVyUmVuZGVyIiwiJGUiLCJ3cG9uaW9uX2ZpZWxkIiwicmVsb2FkIiwic29ydGFibGUiLCJvbkxpbWl0UmVhY2hlZCIsIiRodG1sIiwicHJlcGVuZCIsIiRfX0UiLCJzZXRUaW1lb3V0Iiwic2hvd19hbmltYXRpb24iLCJhbmltYXRpb25zIiwiaGlkZV9hbmltYXRpb24iLCJ3cENvbG9yUGlja2VyIiwiJHNldHRpbmdzIiwiJHZpZXciLCJhcHBlbmQiLCJwbHVnaW5zIiwicmFuZ2VQbHVnaW4iLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsIndlYnNhZmUiLCJmb250cyIsImJ1aWxkX29wdGlvbnMiLCJ2YXJpYW50cyIsImdvb2dsZV9mb250cyIsIiR2YXJpYW50IiwiJGh0bWxfdGVtcCIsIiRpbnB1dCIsIiRwcmV2aWV3Iiwid3BfbWVkaWFfZnJhbWUiLCIkYWRkIiwiJGVkaXQiLCIkY2xlYXIiLCIkbWFuYWdlIiwiaWRzIiwid2hhdCIsInN0YXRlIiwibWVkaWEiLCJnYWxsZXJ5IiwibGlicmFyeSIsImZyYW1lIiwibXVsdGlwbGUiLCJvcGVuIiwiZWRpdCIsInNldFN0YXRlIiwic2VsZWN0aW9uIiwic2VsZWN0ZWRJZHMiLCJtb2RlbHMiLCJhdHRhY2htZW50IiwidG9KU09OIiwic2l6ZXMiLCJ0aHVtYiIsInRodW1ibmFpbCIsIiR0bXAiLCIkcGFyZW50IiwiJGltYWdlX2lkIiwiJGsiLCIkdiIsImN1cnNvciIsInNjcm9sbFNlbnNpdGl2aXR5IiwiZm9yY2VQbGFjZWhvbGRlclNpemUiLCJoZWxwZXIiLCJvcGFjaXR5IiwiJGl0ZW0iLCJoZWlnaHQiLCIkbWFwIiwiZGV0YWlscyIsImRldGFpbHNBdHRyaWJ1dGUiLCIkX2luc3RhbmNlIiwiZ2VvY29tcGxldGUiLCJiaW5kIiwibGF0TG5nIiwiZ2VvY29kZXIiLCJnb29nbGUiLCJtYXBzIiwiR2VvY29kZXIiLCJnZW9jb2RlIiwibGF0IiwibG5nIiwiJGdyb3VwX3dyYXAiLCIkZXJyb3JfbXNnIiwib25SZW1vdmUiLCJzZXR0aW5ncyIsIiRfdGhpcyIsIiRyZW1vdmVfYnRuIiwiJHdvcmsiLCJlbGVtcyIsInBvcHVwIiwiZWxtIiwiaW5pdF90b29sdGlwIiwicG9wdXBfdG9vbHRpcCIsIiR0cCIsIiRlbG0iLCIkaW5zdGFuY2UiLCIkaGVpZ2h0IiwiJGljb24iLCJjbG9zZU1vZGFsIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiJHJlcyIsInJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwiJHBvcHVwIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjdXN0b21DbGFzcyIsIiRwb3B1cF9lbGVtIiwiJHByZXZpZXdfYWRkIiwibWVkaWFfaW5zdGFuY2UiLCJob29rIiwiZG9BY3Rpb24iLCJmaXJzdCIsImF0dHJpYnV0ZXMiLCJpbnB1dG1hc2siLCIkdGhpc19lbGVtIiwiJHRhYiIsImdsb2JhbF92YWxpZGF0ZSIsImFmdGVyIiwiZXEiLCJpbWFnZSIsInNob3dfcHJldmlldyIsInNlbGVjdDIiLCJzZWxlY3RpemUiLCIkZW5hYmxlZCIsIiRkaXNhYmxlZCIsImNvbm5lY3RXaXRoIiwiZm9udF93ZWlnaHRfc3R5bGUiLCIkZm9udF9maWVsZCIsIiRmb250IiwiJGZvbnRfd2VpZ2h0X3N0eWxlIiwiZm9udF9zdHlsZSIsIiR0YWciLCIkY29sb3IiLCIkYWxpZ24iLCIkZm9udFNpemUiLCIkbGluZUhlaWdodCIsIiRiYWNrVVBGb250IiwiJGRpcmVjdGlvbiIsIiRsZXR0ZXJTcGFjaW5nIiwiaHJlZiIsIndlaWdodCIsIiRfYXR0cnMiLCIkdGV4dCIsIiR3ZWlnaHRfdmFsIiwiJHN0eWxlX3ZhbCIsImZyYW1lX3RpdGxlIiwidXBsb2FkX3R5cGUiLCJidXR0b24iLCJpbnNlcnRfdGl0bGUiLCIkdGV4dGFyZWEiLCJ3cExpbmsiLCIkZGVwIiwiY29udHJvbGxlciIsIiRjb250cm9sbGVyIiwiJGNvbmRpdGlvbiIsImNvbmRpdGlvbiIsIiRmaWVsZCIsIiRJTlBVVCIsImNvbnR4dCIsImNyZWF0ZVJ1bGUiLCJpbmNsdWRlIiwiJGZpZCIsIiR0b29sdGlwX2tleSIsInZhbGlkX2pzb24iLCJpc0ZldGNoaW5nIiwiY2FuRmV0Y2giLCIkaW1hZ2UiLCJ1cGRhdGVEdXJhdGlvbiIsIm9uU2hvdyIsInRpcCIsInJlc3BvbnNlIiwiZmV0Y2giLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNWaXNpYmxlIiwic2V0Q29udGVudCIsIm9uSGlkZGVuIiwicG9wcGVyT3B0aW9ucyIsIm1vZGlmaWVycyIsInByZXZlbnRPdmVyZmxvdyIsImltYWdlVXJsIiwiYmFja2dyb3VuZCIsImJhY2tkcm9wIiwiJG1jZV9lZGl0b3IiLCJ0aW55TUNFUHJlSW5pdCIsIm1jZUluaXQiLCIkcXVpY2tfdGFncyIsInF0SW5pdCIsIiRORVdfSUQiLCIkdGV4dEFyZWEiLCJjbG9uZSIsIiRhY3R1YWxfSUQiLCIkYWN0dWFsX2h0bWwiLCIkcmVnZXgiLCJ0aW55bWNlIiwidGlueU1DRSIsInF1aWNrdGFncyIsIiQiLCIkZmluYWxfYXJncyIsInBvc3RfaWRzIiwiJGJ1bGtfZWRpdCIsImNoaWxkcmVuIiwic2VyaWFsaXplT2JqZWN0IiwiYXN5bmMiLCJjYWNoZSIsIldQT25pb25fTWV0YWJveF9Nb2R1bGUiLCJtZW51Iiwic2F2ZV9oYW5kbGVyIiwibmV4dCIsImlzIiwic2xpZGVUb2dnbGUiLCJzbGlkZVVwIiwiJGhyZWYiLCIkd3Bvbmlvbl9oZWxwZXIiLCJ1cmxfcGFyYW1zIiwiJHNlY3Rpb24iLCIkcGFyZW50X2FjdGl2ZXMiLCIkY3VycmVudCIsIiRiYXNlIiwiJGhpZGRlbiIsImJsb2NrIiwibWVzc2FnZSIsIm92ZXJsYXlDU1MiLCIkZmllbGRzIiwiJHZhbHVlcyIsInNlcmlhbGl6ZSIsInVuYmxvY2siLCJXUE9uaW9uX1F1aWNrX0VkaXQiLCJwb3N0X2lkIiwidmFsdWVzIiwiZmllbGRBcmdzIiwiJGxpc3QiLCJjbG9zZXN0Iiwid3Bvbmlvbl9tZXRhYm94X21vZHVsZSIsImRlZmF1bHQiLCJ3cG9uaW9uX2J1bGtfZWRpdCIsIndwb25pb25fcXVpY2tfZWRpdCIsIndwb25pb25fbmV3X2ZpZWxkIiwid3Bvbmlvbl9tb2RhbCIsIiR3cG8iLCIkd3BfaG9vayIsIiR3cG9mX2RpdiIsImFwcGx5RmlsdGVycyIsInRleHRhcmVhIiwiaW1hZ2Vfc2VsZWN0Iiwic3dpdGNoZXIiLCJjb2xvcl9wYWxldHRlIiwiaWNvbl9waWNrZXIiLCJmb250X3NlbGVjdG9yIiwiZ3JvdXAiLCJ3cF9lZGl0b3IiLCJyZWxvYWRfd3BfZWRpdG9yIiwiZmllbGRzZXQiLCJ3cF9saW5rcyIsImNoZWNrYm94X3JhZGlvIiwia2V5dmFsdWVfcGFpciIsImNvbG9yX3BpY2tlciIsImRhdGVfcGlja2VyIiwiaW1hZ2VfcG9wdXAiLCJ1cGxvYWQiLCJpbWFnZV91cGxvYWQiLCJqcXVlcnlfdGFiIiwiZmllbGRfdG9vbHRpcCIsImNsb25lX2VsZW1lbnQiLCJzb3J0ZXIiLCJnb29nbGVfbWFwcyIsInR5cG9ncmFwaHkiLCJvZW1iZWQiLCJoZWFkaW5nIiwic3ViaGVhZGluZyIsImphbWJvX2NvbnRlbnQiLCJub3RpY2UiLCJiYWNrdXAiLCJ0b2dnbGVDbGFzcyIsIiR3aWRnZXQiLCJsb2FkaW5nX3NjcmVlbiIsIldQT25pb25fV1BfTW9kYWwiLCJCYWNrYm9uZSIsIlZpZXciLCJleHRlbmQiLCJ0ZW1wbGF0ZXMiLCJldmVudHMiLCJhY3RpdmVfcGFnZSIsImFjdGl2ZV9zZWN0aW9uIiwiaW5pdGlhbGl6ZSIsImxlZnRfbWVudSIsImhpZGVfbWVudSIsImJpbmRBbGwiLCJpbml0X3RlbXBsYXRlcyIsInJlbmRlciIsIiRtIiwiZnJhbWVfbWVudV9pdGVtIiwicm91dGVyX21lbnVfaXRlbSIsInBhZ2VfY29udGVudCIsInNlY3Rpb25fY29udGVudCIsIiRjb250ZW50IiwiJF9jb250ZW50IiwiJF9tZW51IiwicHJlc2VydmVGb2N1cyIsImZvY3VzIiwiaGFuZGxlX2xlZnRfbWVudV9jbGljayIsIiR0YXJnZXQiLCIkc2hvd190YXJnZXQiLCJoYW5kbGVfdGFiX2NsaWNrIiwiJHBhZ2UiLCJoYXMiLCJ1bmRlbGVnYXRlRXZlbnRzIiwib2ZmIiwic2F2ZU1vZGFsIiwiZG9Ob3RoaW5nIiwiJG9wdGlvbnMiLCJjbGFzc05hbWUiLCJtb2RhbCIsImdldF9sZWZ0X21lbnUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFF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RDRVLGFBQVM1VSxJQUFULElBQW9CLE9BQU9SLE1BQU8sWUFBUCxDQUFQLEtBQWlDLFdBQW5DLEdBQW1EQSxNQUFPLFlBQVAsQ0FBbkQsR0FBMkVBLE1BQU8sT0FBUCxDQUE3RjtBQUNBLEtBRkQ7QUFHQTtBQUNELFVBQU9vVixPQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE1GLG1DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy93cG9uaW9uLWNvcmUuanNcIik7XG4iLCJjbGFzcyBKU19QYXJzZV9BcmdzIHtcclxuXHRjb25zdHJ1Y3RvciggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19uZXN0ZWQgPSBmYWxzZSApIHtcclxuXHRcdHRoaXMuYXJncyAgICAgPSAkYXJncztcclxuXHRcdHRoaXMuZGVmYXVsdHMgPSAkZGVmYXVsdHM7XHJcblx0XHR0aGlzLm5lc3RlZCAgID0gJGlzX25lc3RlZDtcclxuXHRcdHRoaXMucGFyc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLmFyZ3M7XHJcblx0fVxyXG5cclxuXHRwYXJzZSgpIHtcclxuXHRcdGZvciggbGV0ICRfa2V5IGluIHRoaXMuZGVmYXVsdHMgKSB7XHJcblx0XHRcdGlmKCB0cnVlID09PSB0aGlzLm5lc3RlZCAmJiB0eXBlb2YgIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0gPT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IG5ldyBKU19QYXJzZV9BcmdzKCB0aGlzLmFyZ3NbICRfa2V5IF0sIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0sIHRoaXMubmVzdGVkICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3NbICRfa2V5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gdGhpcy5kZWZhdWx0c1sgJF9rZXkgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19kZWVwID0gZmFsc2UgKSA9PiBuZXcgSlNfUGFyc2VfQXJncyggJGFyZ3MsICRkZWZhdWx0cywgJGlzX2RlZXAgKTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXJyYXlfbWVyZ2UoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYXJyYXlfbWVyZ2UvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogTmF0ZVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IGpvc2hcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMSA9IHtcImNvbG9yXCI6IFwicmVkXCIsIDA6IDIsIDE6IDR9XG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjIgPSB7MDogXCJhXCIsIDE6IFwiYlwiLCBcImNvbG9yXCI6IFwiZ3JlZW5cIiwgXCJzaGFwZVwiOiBcInRyYXBlem9pZFwiLCAyOiA0fVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfbWVyZ2UoJGFycjEsICRhcnIyKVxuICAvLyAgIHJldHVybnMgMToge1wiY29sb3JcIjogXCJncmVlblwiLCAwOiAyLCAxOiA0LCAyOiBcImFcIiwgMzogXCJiXCIsIFwic2hhcGVcIjogXCJ0cmFwZXpvaWRcIiwgNDogNH1cbiAgLy8gICBleGFtcGxlIDI6IHZhciAkYXJyMSA9IFtdXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGFycjIgPSB7MTogXCJkYXRhXCJ9XG4gIC8vICAgZXhhbXBsZSAyOiBhcnJheV9tZXJnZSgkYXJyMSwgJGFycjIpXG4gIC8vICAgcmV0dXJucyAyOiB7MDogXCJkYXRhXCJ9XG5cbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICB2YXIgYXJnbCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgYXJnO1xuICB2YXIgcmV0T2JqID0ge307XG4gIHZhciBrID0gJyc7XG4gIHZhciBhcmdpbCA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY3QgPSAwO1xuICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgcmV0QXJyID0gdHJ1ZTtcblxuICBmb3IgKGkgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgaWYgKHRvU3RyLmNhbGwoYXJnc1tpXSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldEFyciA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJldEFycikge1xuICAgIHJldEFyciA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmdsOyBpKyspIHtcbiAgICAgIHJldEFyciA9IHJldEFyci5jb25jYXQoYXJnc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXRBcnI7XG4gIH1cblxuICBmb3IgKGkgPSAwLCBjdCA9IDA7IGkgPCBhcmdsOyBpKyspIHtcbiAgICBhcmcgPSBhcmdzW2ldO1xuICAgIGlmICh0b1N0ci5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIGZvciAoaiA9IDAsIGFyZ2lsID0gYXJnLmxlbmd0aDsgaiA8IGFyZ2lsOyBqKyspIHtcbiAgICAgICAgcmV0T2JqW2N0KytdID0gYXJnW2pdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGsgaW4gYXJnKSB7XG4gICAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBpZiAocGFyc2VJbnQoaywgMTApICsgJycgPT09IGspIHtcbiAgICAgICAgICAgIHJldE9ialtjdCsrXSA9IGFyZ1trXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0T2JqW2tdID0gYXJnW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRPYmo7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlfbWVyZ2UuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXJyYXlfbWVyZ2VfcmVjdXJzaXZlKGFycjEsIGFycjIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9hcnJheV9tZXJnZV9yZWN1cnNpdmUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBTdWJoYXNpcyBEZWJcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIxID0geydjb2xvcic6IHsnZmF2b3JpdGUnOiAncmVkJ30sIDA6IDV9XG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjIgPSB7MDogMTAsICdjb2xvcic6IHsnZmF2b3JpdGUnOiAnZ3JlZW4nLCAwOiAnYmx1ZSd9fVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfbWVyZ2VfcmVjdXJzaXZlKCRhcnIxLCAkYXJyMilcbiAgLy8gICByZXR1cm5zIDE6IHsnY29sb3InOiB7J2Zhdm9yaXRlJzogezA6ICdyZWQnLCAxOiAnZ3JlZW4nfSwgMDogJ2JsdWUnfSwgMTogNSwgMTogMTB9XG4gIC8vICAgICAgICB0ZXN0OiBza2lwLTFcblxuICB2YXIgYXJyYXlNZXJnZSA9IHJlcXVpcmUoJy4uL2FycmF5L2FycmF5X21lcmdlJyk7XG4gIHZhciBpZHggPSAnJztcblxuICBpZiAoYXJyMSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyMSkgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgYXJyMiAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyMikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBmb3IgKGlkeCBpbiBhcnIyKSB7XG4gICAgICBhcnIxLnB1c2goYXJyMltpZHhdKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJyMSAmJiBhcnIxIGluc3RhbmNlb2YgT2JqZWN0ICYmIGFycjIgJiYgYXJyMiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIGZvciAoaWR4IGluIGFycjIpIHtcbiAgICAgIGlmIChpZHggaW4gYXJyMSkge1xuICAgICAgICBpZiAoX3R5cGVvZihhcnIxW2lkeF0pID09PSAnb2JqZWN0JyAmJiAodHlwZW9mIGFycjIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFycjIpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBhcnIxW2lkeF0gPSBhcnJheU1lcmdlKGFycjFbaWR4XSwgYXJyMltpZHhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnIxW2lkeF0gPSBhcnIyW2lkeF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycjFbaWR4XSA9IGFycjJbaWR4XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyMTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X3ZhbHVlcyhpbnB1dCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2FycmF5X3ZhbHVlcy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogYXJyYXlfdmFsdWVzKCB7Zmlyc3RuYW1lOiAnS2V2aW4nLCBzdXJuYW1lOiAndmFuIFpvbm5ldmVsZCd9IClcbiAgLy8gICByZXR1cm5zIDE6IFsgJ0tldmluJywgJ3ZhbiBab25uZXZlbGQnIF1cblxuICB2YXIgdG1wQXJyID0gW107XG4gIHZhciBrZXkgPSAnJztcblxuICBmb3IgKGtleSBpbiBpbnB1dCkge1xuICAgIHRtcEFyclt0bXBBcnIubGVuZ3RoXSA9IGlucHV0W2tleV07XG4gIH1cblxuICByZXR1cm4gdG1wQXJyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5X3ZhbHVlcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY291bnQobWl4ZWRWYXIsIG1vZGUpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jb3VudC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBXYWxkbyBNYWxxdWkgU2lsdmEgKGh0dHA6Ly93YWxkby5tYWxxdWkuaW5mbylcbiAgLy8gICAgaW5wdXQgYnk6IG1lcmFiaVxuICAvLyBidWdmaXhlZCBieTogU29yZW4gSGFuc2VuXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbGl2aWVyIExvdXZpZ25lcyAoaHR0cDovL21nLWNyZWEuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBjb3VudChbWzAsMF0sWzAsLTRdXSwgJ0NPVU5UX1JFQ1VSU0lWRScpXG4gIC8vICAgcmV0dXJucyAxOiA2XG4gIC8vICAgZXhhbXBsZSAyOiBjb3VudCh7J29uZScgOiBbMSwyLDMsNCw1XX0sICdDT1VOVF9SRUNVUlNJVkUnKVxuICAvLyAgIHJldHVybnMgMjogNlxuXG4gIHZhciBrZXk7XG4gIHZhciBjbnQgPSAwO1xuXG4gIGlmIChtaXhlZFZhciA9PT0gbnVsbCB8fCB0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAobWl4ZWRWYXIuY29uc3RydWN0b3IgIT09IEFycmF5ICYmIG1peGVkVmFyLmNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmIChtb2RlID09PSAnQ09VTlRfUkVDVVJTSVZFJykge1xuICAgIG1vZGUgPSAxO1xuICB9XG4gIGlmIChtb2RlICE9PSAxKSB7XG4gICAgbW9kZSA9IDA7XG4gIH1cblxuICBmb3IgKGtleSBpbiBtaXhlZFZhcikge1xuICAgIGlmIChtaXhlZFZhci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjbnQrKztcbiAgICAgIGlmIChtb2RlID09PSAxICYmIG1peGVkVmFyW2tleV0gJiYgKG1peGVkVmFyW2tleV0uY29uc3RydWN0b3IgPT09IEFycmF5IHx8IG1peGVkVmFyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkpIHtcbiAgICAgICAgY250ICs9IGNvdW50KG1peGVkVmFyW2tleV0sIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y291bnQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluX2FycmF5KG5lZWRsZSwgaGF5c3RhY2ssIGFyZ1N0cmljdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHZsYWRvIGhvdWJhXG4gIC8vIGltcHJvdmVkIGJ5OiBKb25hcyBTY2lhbmd1bGEgU3RyZWV0IChKb25pMkJhY2spXG4gIC8vICAgIGlucHV0IGJ5OiBCaWxseVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGluX2FycmF5KCd2YW4nLCBbJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGluX2FycmF5KCd2bGFkbycsIHswOiAnS2V2aW4nLCB2bGFkbzogJ3ZhbicsIDE6ICdab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpbl9hcnJheSgxLCBbJzEnLCAnMicsICczJ10pXG4gIC8vICAgZXhhbXBsZSAzOiBpbl9hcnJheSgxLCBbJzEnLCAnMicsICczJ10sIGZhbHNlKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddLCB0cnVlKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcblxuICB2YXIga2V5ID0gJyc7XG4gIHZhciBzdHJpY3QgPSAhIWFyZ1N0cmljdDtcblxuICAvLyB3ZSBwcmV2ZW50IHRoZSBkb3VibGUgY2hlY2sgKHN0cmljdCAmJiBhcnJba2V5XSA9PT0gbmRsKSB8fCAoIXN0cmljdCAmJiBhcnJba2V5XSA9PT0gbmRsKVxuICAvLyBpbiBqdXN0IG9uZSBmb3IsIGluIG9yZGVyIHRvIGltcHJvdmUgdGhlIHBlcmZvcm1hbmNlXG4gIC8vIGRlY2lkaW5nIHdpY2ggdHlwZSBvZiBjb21wYXJhdGlvbiB3aWxsIGRvIGJlZm9yZSB3YWxrIGFycmF5XG4gIGlmIChzdHJpY3QpIHtcbiAgICBmb3IgKGtleSBpbiBoYXlzdGFjaykge1xuICAgICAgaWYgKGhheXN0YWNrW2tleV0gPT09IG5lZWRsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChrZXkgaW4gaGF5c3RhY2spIHtcbiAgICAgIGlmIChoYXlzdGFja1trZXldID09IG5lZWRsZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5fYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1pY3JvdGltZShnZXRBc0Zsb2F0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvbWljcm90aW1lL1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyBpbXByb3ZlZCBieTogRHVtaXRydSBVenVuIChodHRwOi8vZHV6dW4ubWUpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHRpbWVTdGFtcCA9IG1pY3JvdGltZSh0cnVlKVxuICAvLyAgIGV4YW1wbGUgMTogJHRpbWVTdGFtcCA+IDEwMDAwMDAwMDAgJiYgJHRpbWVTdGFtcCA8IDIwMDAwMDAwMDBcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IC9eMFxcLlswLTldezEsNn0gWzAtOV17MTAsMTB9JC8udGVzdChtaWNyb3RpbWUoKSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICB2YXIgcztcbiAgdmFyIG5vdztcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbm93ID0gKHBlcmZvcm1hbmNlLm5vdygpICsgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTYpIC8gMWU2ICsgJyAnICsgcztcbiAgfSBlbHNlIHtcbiAgICBub3cgPSAoRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWUzKSAvIDFlMyArICcgJyArIHM7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWNyb3RpbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGltZSgpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC90aW1lL1xuICAvLyBvcmlnaW5hbCBieTogR2Vla0ZHIChodHRwOi8vZ2Vla2ZnLmJsb2dzcG90LmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBtZXRqYXlcbiAgLy8gaW1wcm92ZWQgYnk6IEhLTVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICR0aW1lU3RhbXAgPSB0aW1lKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJHRpbWVTdGFtcCA+IDEwMDAwMDAwMDAgJiYgJHRpbWVTdGFtcCA8IDIwMDAwMDAwMDBcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICByZXR1cm4gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jKGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRzIG9uIGNhbGxfdXNlcl9mdW5jX2FycmF5IHdoaWNoIGluIHR1cm4gZGVwZW5kcyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmMoJ2lzTmFOJywgJ2EnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHZhciBjYWxsVXNlckZ1bmNBcnJheSA9IHJlcXVpcmUoJy4uL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5Jyk7XG4gIHBhcmFtZXRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gY2FsbFVzZXJGdW5jQXJyYXkoY2IsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jX2FycmF5KGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmNfYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUaGlhZ28gTWF0YSAoaHR0cDovL3RoaWFnb21hdGEuYmxvZy5jb20pXG4gIC8vICByZXZpc2VkIGJ5OiBKb24gSG9obGVcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZGluZyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAgYW5kL29yIGBuZXcgRnVuY3Rpb25gLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsnYSddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWzFdKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICB2YXIgZnVuYztcbiAgdmFyIHNjb3BlID0gbnVsbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmdW5jID0gJGdsb2JhbFtjYl07XG4gICAgfSBlbHNlIGlmIChjYi5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgIGZ1bmMgPSBuZXcgRnVuY3Rpb24obnVsbCwgJ3JldHVybiAnICsgY2IpKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LWZ1bmNcbiAgICB9XG4gIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNiKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIGZ1bmMgPSBldmFsKGNiWzBdICsgXCJbJ1wiICsgY2JbMV0gKyBcIiddXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZnVuYyA9IGNiWzBdW2NiWzFdXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiWzBdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY29wZSA9ICRnbG9iYWxbY2JbMF1dO1xuICAgICAgfSBlbHNlIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgc2NvcGUgPSBldmFsKGNiWzBdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKGNiWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNjb3BlID0gY2JbMF07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZ1bmMgPSBjYjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihmdW5jICsgJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmMuYXBwbHkoc2NvcGUsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jX2FycmF5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmdW5jdGlvbl9leGlzdHMoZnVuY05hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mdW5jdGlvbl9leGlzdHMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogU3RldmUgQ2xheVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGZ1bmN0aW9uX2V4aXN0cygnaXNGaW5pdGUnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgICAgICAgdGVzdDogc2tpcC0xXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICBpZiAodHlwZW9mIGZ1bmNOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGZ1bmNOYW1lID0gJGdsb2JhbFtmdW5jTmFtZV07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIGZ1bmNOYW1lID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZ1bmN0aW9uX2V4aXN0cy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5pX2dldCh2YXJuYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW5pX2dldC9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgaW5pIHZhbHVlcyBtdXN0IGJlIHNldCBieSBpbmlfc2V0IG9yIG1hbnVhbGx5IHdpdGhpbiBhbiBpbmkgZmlsZVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX3NldCgnZGF0ZS50aW1lem9uZScsICdBc2lhL0hvbmdfS29uZycpXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfZ2V0KCdkYXRlLnRpbWV6b25lJylcbiAgLy8gICByZXR1cm5zIDE6ICdBc2lhL0hvbmdfS29uZydcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuICAkbG9jdXR1cy5waHAuaW5pID0gJGxvY3V0dXMucGhwLmluaSB8fCB7fTtcblxuICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXSAmJiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmlfZ2V0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cGxvZGUoZGVsaW1pdGVyLCBzdHJpbmcsIGxpbWl0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZXhwbG9kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBleHBsb2RlKCcgJywgJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogWyAnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCcgXVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCB0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChkZWxpbWl0ZXIgPT09ICcnIHx8IGRlbGltaXRlciA9PT0gZmFsc2UgfHwgZGVsaW1pdGVyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZGVsaW1pdGVyID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkZWxpbWl0ZXIpKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHN0cmluZyA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHN0cmluZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc3RyaW5nKSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIDA6ICcnXG4gICAgfTtcbiAgfVxuICBpZiAoZGVsaW1pdGVyID09PSB0cnVlKSB7XG4gICAgZGVsaW1pdGVyID0gJzEnO1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBnby4uLlxuICBkZWxpbWl0ZXIgKz0gJyc7XG4gIHN0cmluZyArPSAnJztcblxuICB2YXIgcyA9IHN0cmluZy5zcGxpdChkZWxpbWl0ZXIpO1xuXG4gIGlmICh0eXBlb2YgbGltaXQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gcztcblxuICAvLyBTdXBwb3J0IGZvciBsaW1pdFxuICBpZiAobGltaXQgPT09IDApIGxpbWl0ID0gMTtcblxuICAvLyBQb3NpdGl2ZSBsaW1pdFxuICBpZiAobGltaXQgPiAwKSB7XG4gICAgaWYgKGxpbWl0ID49IHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgcmV0dXJuIHMuc2xpY2UoMCwgbGltaXQgLSAxKS5jb25jYXQoW3Muc2xpY2UobGltaXQgLSAxKS5qb2luKGRlbGltaXRlcildKTtcbiAgfVxuXG4gIC8vIE5lZ2F0aXZlIGxpbWl0XG4gIGlmICgtbGltaXQgPj0gcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzLnNwbGljZShzLmxlbmd0aCArIGxpbWl0KTtcbiAgcmV0dXJuIHM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwbG9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbXBsb2RlKGdsdWUsIHBpZWNlcykge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2ltcGxvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogV2FsZG8gTWFscXVpIFNpbHZhIChodHRwOi8vd2FsZG8ubWFscXVpLmluZm8pXG4gIC8vIGltcHJvdmVkIGJ5OiBJdHNhY29uIChodHRwOi8vd3d3Lml0c2Fjb24ubmV0LylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBpbXBsb2RlKCcgJywgWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IGltcGxvZGUoJyAnLCB7Zmlyc3Q6J0tldmluJywgbGFzdDogJ3ZhbiBab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIHZhciBpID0gJyc7XG4gIHZhciByZXRWYWwgPSAnJztcbiAgdmFyIHRHbHVlID0gJyc7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBwaWVjZXMgPSBnbHVlO1xuICAgIGdsdWUgPSAnJztcbiAgfVxuXG4gIGlmICgodHlwZW9mIHBpZWNlcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGllY2VzKSkgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwaWVjZXMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm4gcGllY2VzLmpvaW4oZ2x1ZSk7XG4gICAgfVxuICAgIGZvciAoaSBpbiBwaWVjZXMpIHtcbiAgICAgIHJldFZhbCArPSB0R2x1ZSArIHBpZWNlc1tpXTtcbiAgICAgIHRHbHVlID0gZ2x1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfVxuXG4gIHJldHVybiBwaWVjZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1wbG9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21kNS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiBLZWVwIGluIG1pbmQgdGhhdCBpbiBhY2NvcmRhbmNlIHdpdGggUEhQLCB0aGUgd2hvbGUgc3RyaW5nIGlzIGJ1ZmZlcmVkIGFuZCB0aGVuXG4gIC8vICAgICAgbm90ZSAxOiBoYXNoZWQuIElmIGF2YWlsYWJsZSwgd2UnZCByZWNvbW1lbmQgdXNpbmcgTm9kZSdzIG5hdGl2ZSBjcnlwdG8gbW9kdWxlcyBkaXJlY3RseVxuICAvLyAgICAgIG5vdGUgMTogaW4gYSBzdGVhbWluZyBmYXNoaW9uIGZvciBmYXN0ZXIgYW5kIG1vcmUgZWZmaWNpZW50IGhhc2hpbmdcbiAgLy8gICBleGFtcGxlIDE6IG1kNSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnNmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjknXG5cbiAgdmFyIGhhc2g7XG4gIHRyeSB7XG4gICAgdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIHZhciBtZDVzdW0gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgbWQ1c3VtLnVwZGF0ZShzdHIpO1xuICAgIGhhc2ggPSBtZDVzdW0uZGlnZXN0KCdoZXgnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB2YXIgdXRmOEVuY29kZSA9IHJlcXVpcmUoJy4uL3htbC91dGY4X2VuY29kZScpO1xuICB2YXIgeGw7XG5cbiAgdmFyIF9yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gX3JvdGF0ZUxlZnQobFZhbHVlLCBpU2hpZnRCaXRzKSB7XG4gICAgcmV0dXJuIGxWYWx1ZSA8PCBpU2hpZnRCaXRzIHwgbFZhbHVlID4+PiAzMiAtIGlTaGlmdEJpdHM7XG4gIH07XG5cbiAgdmFyIF9hZGRVbnNpZ25lZCA9IGZ1bmN0aW9uIF9hZGRVbnNpZ25lZChsWCwgbFkpIHtcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0O1xuICAgIGxYOCA9IGxYICYgMHg4MDAwMDAwMDtcbiAgICBsWTggPSBsWSAmIDB4ODAwMDAwMDA7XG4gICAgbFg0ID0gbFggJiAweDQwMDAwMDAwO1xuICAgIGxZNCA9IGxZICYgMHg0MDAwMDAwMDtcbiAgICBsUmVzdWx0ID0gKGxYICYgMHgzRkZGRkZGRikgKyAobFkgJiAweDNGRkZGRkZGKTtcbiAgICBpZiAobFg0ICYgbFk0KSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgfVxuICAgIGlmIChsWDQgfCBsWTQpIHtcbiAgICAgIGlmIChsUmVzdWx0ICYgMHg0MDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX0YgPSBmdW5jdGlvbiBfRih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB5IHwgfnggJiB6O1xuICB9O1xuICB2YXIgX0cgPSBmdW5jdGlvbiBfRyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB6IHwgeSAmIH56O1xuICB9O1xuICB2YXIgX0ggPSBmdW5jdGlvbiBfSCh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfTtcbiAgdmFyIF9JID0gZnVuY3Rpb24gX0koeCwgeSwgeikge1xuICAgIHJldHVybiB5IF4gKHggfCB+eik7XG4gIH07XG5cbiAgdmFyIF9GRiA9IGZ1bmN0aW9uIF9GRihhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRihiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9HRyA9IGZ1bmN0aW9uIF9HRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRyhiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9ISCA9IGZ1bmN0aW9uIF9ISChhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSChiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9JSSA9IGZ1bmN0aW9uIF9JSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSShiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9jb252ZXJ0VG9Xb3JkQXJyYXkgPSBmdW5jdGlvbiBfY29udmVydFRvV29yZEFycmF5KHN0cikge1xuICAgIHZhciBsV29yZENvdW50O1xuICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDIgPSAobE51bWJlck9mV29yZHNUZW1wMSAtIGxOdW1iZXJPZldvcmRzVGVtcDEgJSA2NCkgLyA2NDtcbiAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNUZW1wMiArIDEpICogMTY7XG4gICAgdmFyIGxXb3JkQXJyYXkgPSBuZXcgQXJyYXkobE51bWJlck9mV29yZHMgLSAxKTtcbiAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGxCeXRlQ291bnQgPSAwO1xuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCBzdHIuY2hhckNvZGVBdChsQnl0ZUNvdW50KSA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgICAgbEJ5dGVDb3VudCsrO1xuICAgIH1cbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAweDgwIDw8IGxCeXRlUG9zaXRpb247XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XG4gICAgcmV0dXJuIGxXb3JkQXJyYXk7XG4gIH07XG5cbiAgdmFyIF93b3JkVG9IZXggPSBmdW5jdGlvbiBfd29yZFRvSGV4KGxWYWx1ZSkge1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZSA9ICcnO1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnJztcbiAgICB2YXIgbEJ5dGU7XG4gICAgdmFyIGxDb3VudDtcblxuICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XG4gICAgICBsQnl0ZSA9IGxWYWx1ZSA+Pj4gbENvdW50ICogOCAmIDI1NTtcbiAgICAgIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcwJyArIGxCeXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgIHdvcmRUb0hleFZhbHVlID0gd29yZFRvSGV4VmFsdWUgKyB3b3JkVG9IZXhWYWx1ZVRlbXAuc3Vic3RyKHdvcmRUb0hleFZhbHVlVGVtcC5sZW5ndGggLSAyLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRUb0hleFZhbHVlO1xuICB9O1xuXG4gIHZhciB4ID0gW107XG4gIHZhciBrO1xuICB2YXIgQUE7XG4gIHZhciBCQjtcbiAgdmFyIENDO1xuICB2YXIgREQ7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgUzExID0gNztcbiAgdmFyIFMxMiA9IDEyO1xuICB2YXIgUzEzID0gMTc7XG4gIHZhciBTMTQgPSAyMjtcbiAgdmFyIFMyMSA9IDU7XG4gIHZhciBTMjIgPSA5O1xuICB2YXIgUzIzID0gMTQ7XG4gIHZhciBTMjQgPSAyMDtcbiAgdmFyIFMzMSA9IDQ7XG4gIHZhciBTMzIgPSAxMTtcbiAgdmFyIFMzMyA9IDE2O1xuICB2YXIgUzM0ID0gMjM7XG4gIHZhciBTNDEgPSA2O1xuICB2YXIgUzQyID0gMTA7XG4gIHZhciBTNDMgPSAxNTtcbiAgdmFyIFM0NCA9IDIxO1xuXG4gIHN0ciA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgeCA9IF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKTtcbiAgYSA9IDB4Njc0NTIzMDE7XG4gIGIgPSAweEVGQ0RBQjg5O1xuICBjID0gMHg5OEJBRENGRTtcbiAgZCA9IDB4MTAzMjU0NzY7XG5cbiAgeGwgPSB4Lmxlbmd0aDtcbiAgZm9yIChrID0gMDsgayA8IHhsOyBrICs9IDE2KSB7XG4gICAgQUEgPSBhO1xuICAgIEJCID0gYjtcbiAgICBDQyA9IGM7XG4gICAgREQgPSBkO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxXSwgUzEyLCAweEU4QzdCNzU2KTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzExLCAweEY1N0MwRkFGKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyA3XSwgUzE0LCAweEZENDY5NTAxKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFMxMywgMHhGRkZGNUJCMSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxM10sIFMxMiwgMHhGRDk4NzE5Myk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzIxLCAweEY2MUUyNTYyKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMF0sIFMyNCwgMHhFOUI2QzdBQSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMjMsIDB4RDhBMUU2ODEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgQUEpO1xuICAgIGIgPSBfYWRkVW5zaWduZWQoYiwgQkIpO1xuICAgIGMgPSBfYWRkVW5zaWduZWQoYywgQ0MpO1xuICAgIGQgPSBfYWRkVW5zaWduZWQoZCwgREQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBfd29yZFRvSGV4KGEpICsgX3dvcmRUb0hleChiKSArIF93b3JkVG9IZXgoYykgKyBfd29yZFRvSGV4KGQpO1xuXG4gIHJldHVybiB0ZW1wLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV9zdHIoc3RyLCBhcnJheSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2Vfc3RyL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBDYWdyaSBFa2luXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogc3RhZzAxOVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogWmFpZGUgKGh0dHA6Ly96YWlkZXN0aGluZ3MuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogRGF2aWQgUGVzdGEgKGh0dHA6Ly9kYXZpZHBlc3RhLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGplaWNxdWVzdFxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWQsIHdpbGwgcHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUuXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gYSBwYXJ0aWN1bGFyIGFyZ3VtZW50IGhhcyBiZWVuIHBhc3NlZCwgYW5kIHRoZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiByZXR1cm5lZCB2YWx1ZSBpcyBkaWZmZXJlbnQgcGFyc2Vfc3RyIG9mIFBIUC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogRm9yIGV4YW1wbGUsIGE9Yj1jJmQ9PT09Y1xuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3N0cignZmlyc3Q9Zm9vJnNlY29uZD1iYXInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMTogeyBmaXJzdDogJ2ZvbycsIHNlY29uZDogJ2JhcicgfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3N0cignc3RyX2E9SmFjaythbmQrSmlsbCtkaWRuJTI3dCtzZWUrdGhlK3dlbGwuJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHsgc3RyX2E6IFwiSmFjayBhbmQgSmlsbCBkaWRuJ3Qgc2VlIHRoZSB3ZWxsLlwiIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRhYmMgPSB7MzonYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3N0cignYVtiXVtcImNcIl09ZGVmJmFbcV09dCs1JywgJGFiYylcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkYWJjXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtcIjNcIjpcImFcIixcImFcIjp7XCJiXCI6e1wiY1wiOlwiZGVmXCJ9LFwicVwiOlwidCA1XCJ9fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3N0cignYVtdW109dmFsdWUnLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNDoge1wiYVwiOntcIjBcIjp7XCIwXCI6XCJ2YWx1ZVwifX19XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogcGFyc2Vfc3RyKCdhPTEmYVtdPTInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNToge1wiYVwiOntcIjBcIjpcIjJcIn19XG5cbiAgdmFyIHN0ckFyciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL14mLywgJycpLnJlcGxhY2UoLyYkLywgJycpLnNwbGl0KCcmJyk7XG4gIHZhciBzYWwgPSBzdHJBcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBjdDtcbiAgdmFyIHA7XG4gIHZhciBsYXN0T2JqO1xuICB2YXIgb2JqO1xuICB2YXIgY2hyO1xuICB2YXIgdG1wO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBwb3N0TGVmdEJyYWNrZXRQb3M7XG4gIHZhciBrZXlzO1xuICB2YXIga2V5c0xlbjtcblxuICB2YXIgX2ZpeFN0ciA9IGZ1bmN0aW9uIF9maXhTdHIoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gIH07XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgYXJyYXkgPSAkZ2xvYmFsO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNhbDsgaSsrKSB7XG4gICAgdG1wID0gc3RyQXJyW2ldLnNwbGl0KCc9Jyk7XG4gICAga2V5ID0gX2ZpeFN0cih0bXBbMF0pO1xuICAgIHZhbHVlID0gdG1wLmxlbmd0aCA8IDIgPyAnJyA6IF9maXhTdHIodG1wWzFdKTtcblxuICAgIHdoaWxlIChrZXkuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJ1xceDAwJykgPiAtMSkge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCdcXHgwMCcpKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICYmIGtleS5jaGFyQXQoMCkgIT09ICdbJykge1xuICAgICAga2V5cyA9IFtdO1xuICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ1snICYmICFwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSBqICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY2hhckF0KGopID09PSAnXScpIHtcbiAgICAgICAgICBpZiAocG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc2xpY2UoMCwgcG9zdExlZnRCcmFja2V0UG9zIC0gMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cihwb3N0TGVmdEJyYWNrZXRQb3MsIGogLSBwb3N0TGVmdEJyYWNrZXRQb3MpKTtcbiAgICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGogKyAxKSAhPT0gJ1snKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleXNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY2hyID0ga2V5c1swXS5jaGFyQXQoaik7XG5cbiAgICAgICAgaWYgKGNociA9PT0gJyAnIHx8IGNociA9PT0gJy4nIHx8IGNociA9PT0gJ1snKSB7XG4gICAgICAgICAga2V5c1swXSA9IGtleXNbMF0uc3Vic3RyKDAsIGopICsgJ18nICsga2V5c1swXS5zdWJzdHIoaiArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNociA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqID0gYXJyYXk7XG5cbiAgICAgIGZvciAoaiA9IDAsIGtleXNMZW4gPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW47IGorKykge1xuICAgICAgICBrZXkgPSBrZXlzW2pdLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgICAgIGxhc3RPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKChrZXkgPT09ICcnIHx8IGtleSA9PT0gJyAnKSAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgLy8gSW5zZXJ0IG5ldyBkaW1lbnNpb25cbiAgICAgICAgICBjdCA9IC0xO1xuXG4gICAgICAgICAgZm9yIChwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICBpZiAoK3AgPiBjdCAmJiBwLm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgICAgICAgICAgICBjdCA9ICtwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gY3QgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJpbWl0aXZlIHZhbHVlLCByZXBsYWNlIHdpdGggb2JqZWN0XG4gICAgICAgIGlmIChPYmplY3Qob2JqW2tleV0pICE9PSBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGFzdE9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vfc3RyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cl9yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZSwgc3ViamVjdCwgY291bnRPYmopIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJfcmVwbGFjZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBHYWJyaWVsIFBhZGVybmlcbiAgLy8gaW1wcm92ZWQgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyBpbXByb3ZlZCBieTogU2ltb24gV2lsbGlzb24gKGh0dHA6Ly9zaW1vbndpbGxpc29uLm5ldClcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgcmV2aXNlZCBieTogSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIChodHRwOi8vd3d3LmpzZnJvbWhlbGwuY29tKVxuICAvLyBidWdmaXhlZCBieTogQW50b24gT25nc29uXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogT2xlZyBFcmVtZWV2XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBHbGVuIEFyYXNvbiAoaHR0cDovL0NhbmFkaWFuRG9tYWluUmVnaXN0cnkuY2EpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBHbGVuIEFyYXNvbiAoaHR0cDovL0NhbmFkaWFuRG9tYWluUmVnaXN0cnkuY2EpXG4gIC8vICAgIGlucHV0IGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogT2xlZyBFcmVtZWV2XG4gIC8vICAgICAgbm90ZSAxOiBUaGUgY291bnRPYmogcGFyYW1ldGVyIChvcHRpb25hbCkgaWYgdXNlZCBtdXN0IGJlIHBhc3NlZCBpbiBhcyBhXG4gIC8vICAgICAgbm90ZSAxOiBvYmplY3QuIFRoZSBjb3VudCB3aWxsIHRoZW4gYmUgd3JpdHRlbiBieSByZWZlcmVuY2UgaW50byBpdCdzIGB2YWx1ZWAgcHJvcGVydHlcbiAgLy8gICBleGFtcGxlIDE6IHN0cl9yZXBsYWNlKCcgJywgJy4nLCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4udmFuLlpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IHN0cl9yZXBsYWNlKFsne25hbWV9JywgJ2wnXSwgWydoZWxsbycsICdtJ10sICd7bmFtZX0sIGxhcnMnKVxuICAvLyAgIHJldHVybnMgMjogJ2hlbW1vLCBtYXJzJ1xuICAvLyAgIGV4YW1wbGUgMzogc3RyX3JlcGxhY2UoQXJyYXkoJ1MnLCdGJyksJ3gnLCdBU0RGQVNERicpXG4gIC8vICAgcmV0dXJucyAzOiAnQXhEeEF4RHgnXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgY291bnRPYmogPSB7fVxuICAvLyAgIGV4YW1wbGUgNDogc3RyX3JlcGxhY2UoWydBJywnRCddLCBbJ3gnLCd5J10gLCAnQVNERkFTREYnICwgY291bnRPYmopXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9IGNvdW50T2JqLnZhbHVlXG4gIC8vICAgcmV0dXJucyA0OiA0XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciB0ZW1wID0gJyc7XG4gIHZhciByZXBsID0gJyc7XG4gIHZhciBzbCA9IDA7XG4gIHZhciBmbCA9IDA7XG4gIHZhciBmID0gW10uY29uY2F0KHNlYXJjaCk7XG4gIHZhciByID0gW10uY29uY2F0KHJlcGxhY2UpO1xuICB2YXIgcyA9IHN1YmplY3Q7XG4gIHZhciByYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgdmFyIHNhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHMpID09PSAnW29iamVjdCBBcnJheV0nO1xuICBzID0gW10uY29uY2F0KHMpO1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG5cbiAgaWYgKCh0eXBlb2Ygc2VhcmNoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWFyY2gpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlcGxhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgdGVtcCA9IHJlcGxhY2U7XG4gICAgcmVwbGFjZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzZWFyY2gubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJlcGxhY2VbaV0gPSB0ZW1wO1xuICAgIH1cbiAgICB0ZW1wID0gJyc7XG4gICAgciA9IFtdLmNvbmNhdChyZXBsYWNlKTtcbiAgICByYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgY291bnRPYmogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY291bnRPYmoudmFsdWUgPSAwO1xuICB9XG5cbiAgZm9yIChpID0gMCwgc2wgPSBzLmxlbmd0aDsgaSA8IHNsOyBpKyspIHtcbiAgICBpZiAoc1tpXSA9PT0gJycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKGogPSAwLCBmbCA9IGYubGVuZ3RoOyBqIDwgZmw7IGorKykge1xuICAgICAgdGVtcCA9IHNbaV0gKyAnJztcbiAgICAgIHJlcGwgPSByYSA/IHJbal0gIT09IHVuZGVmaW5lZCA/IHJbal0gOiAnJyA6IHJbMF07XG4gICAgICBzW2ldID0gdGVtcC5zcGxpdChmW2pdKS5qb2luKHJlcGwpO1xuICAgICAgaWYgKHR5cGVvZiBjb3VudE9iaiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY291bnRPYmoudmFsdWUgKz0gdGVtcC5zcGxpdChmW2pdKS5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2EgPyBzIDogc1swXTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJfcmVwbGFjZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RydG9sb3dlcihzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJ0b2xvd2VyL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICBleGFtcGxlIDE6IHN0cnRvbG93ZXIoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ2tldmluIHZhbiB6b25uZXZlbGQnXG5cbiAgcmV0dXJuIChzdHIgKyAnJykudG9Mb3dlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJ0b2xvd2VyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJ0b3VwcGVyKHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cnRvdXBwZXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgIGV4YW1wbGUgMTogc3RydG91cHBlcignS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS0VWSU4gVkFOIFpPTk5FVkVMRCdcblxuICByZXR1cm4gKHN0ciArICcnKS50b1VwcGVyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnRvdXBwZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9kZWNvZGUoZW5jb2RlZERhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZGVjb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEFtYW4gR3VwdGFcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZGVjb2RlKCdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09JylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2RlY29kZSgnWVE9PScpXG4gIC8vICAgcmV0dXJucyAyOiAnYSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9kZWNvZGUoJzRweVRJTU9nSUd4aElHMXZaR1U9JylcbiAgLy8gICByZXR1cm5zIDM6ICfinJMgw6AgbGEgbW9kZSdcblxuICAvLyBkZWNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZGVjb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGRlY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBkZWNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hdG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcod2luZG93LmF0b2IoZW5jb2RlZERhdGEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5jb2RlZERhdGEsICdiYXNlNjQnKS50b1N0cmluZygndXRmLTgnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBkZWMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlZERhdGE7XG4gIH1cblxuICBlbmNvZGVkRGF0YSArPSAnJztcblxuICBkbyB7XG4gICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcbiAgICBoMSA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMiA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMyA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoNCA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcblxuICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuXG4gICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcbiAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XG4gICAgbzMgPSBiaXRzICYgMHhmZjtcblxuICAgIGlmIChoMyA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xuICAgIH0gZWxzZSBpZiAoaDQgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgZW5jb2RlZERhdGEubGVuZ3RoKTtcblxuICBkZWMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZW5jb2RlKHN0cmluZ1RvRW5jb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJheXJvbiBHdWV2YXJhXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PSdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9lbmNvZGUoJ2EnKVxuICAvLyAgIHJldHVybnMgMjogJ1lRPT0nXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZW5jb2RlKCfinJMgw6AgbGEgbW9kZScpXG4gIC8vICAgcmV0dXJucyAzOiAnNHB5VElNT2dJR3hoSUcxdlpHVT0nXG5cbiAgLy8gZW5jb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGVuY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBlbmNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZW5jb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBmaXJzdCB3ZSB1c2UgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGdldCBwZXJjZW50LWVuY29kZWQgVVRGLTgsXG4gICAgLy8gdGhlbiB3ZSBjb252ZXJ0IHRoZSBwZXJjZW50IGVuY29kaW5ncyBpbnRvIHJhdyBieXRlcyB3aGljaFxuICAgIC8vIGNhbiBiZSBmZWQgaW50byB0aGUgYmFzZTY0IGVuY29kaW5nIGFsZ29yaXRobS5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5idG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nVG9FbmNvZGUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBlbmMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghc3RyaW5nVG9FbmNvZGUpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9FbmNvZGU7XG4gIH1cblxuICBzdHJpbmdUb0VuY29kZSA9IGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpO1xuXG4gIGRvIHtcbiAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXG4gICAgbzEgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzIgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzMgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICBiaXRzID0gbzEgPDwgMTYgfCBvMiA8PCA4IHwgbzM7XG5cbiAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xuICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XG4gICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xuICAgIGg0ID0gYml0cyAmIDB4M2Y7XG5cbiAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xuICAgIHRtcEFyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xuICB9IHdoaWxlIChpIDwgc3RyaW5nVG9FbmNvZGUubGVuZ3RoKTtcblxuICBlbmMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgdmFyIHIgPSBzdHJpbmdUb0VuY29kZS5sZW5ndGggJSAzO1xuXG4gIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBib29sdmFsKG1peGVkVmFyKSB7XG4gIC8vIG9yaWdpbmFsIGJ5OiBXaWxsIFJvd2VcbiAgLy8gICBleGFtcGxlIDE6IGJvb2x2YWwodHJ1ZSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGJvb2x2YWwoZmFsc2UpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogYm9vbHZhbCgwKVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDQ6IGJvb2x2YWwoMC4wKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGJvb2x2YWwoJycpXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNjogYm9vbHZhbCgnMCcpXG4gIC8vICAgcmV0dXJucyA2OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNzogYm9vbHZhbChbXSlcbiAgLy8gICByZXR1cm5zIDc6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA4OiBib29sdmFsKCcnKVxuICAvLyAgIHJldHVybnMgODogZmFsc2VcbiAgLy8gICBleGFtcGxlIDk6IGJvb2x2YWwobnVsbClcbiAgLy8gICByZXR1cm5zIDk6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAxMDogYm9vbHZhbCh1bmRlZmluZWQpXG4gIC8vICAgcmV0dXJucyAxMDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDExOiBib29sdmFsKCd0cnVlJylcbiAgLy8gICByZXR1cm5zIDExOiB0cnVlXG5cbiAgaWYgKG1peGVkVmFyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gMCB8fCBtaXhlZFZhciA9PT0gMC4wKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSAnJyB8fCBtaXhlZFZhciA9PT0gJzAnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWl4ZWRWYXIpICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gbnVsbCB8fCBtaXhlZFZhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vbHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbXB0eShtaXhlZFZhcikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2VtcHR5L1xuICAvLyBvcmlnaW5hbCBieTogUGhpbGlwcGUgQmF1bWFublxuICAvLyAgICBpbnB1dCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICBpbnB1dCBieTogTEhcbiAgLy8gICAgaW5wdXQgYnk6IFN0b3lhbiBLeW9zZXYgKGh0dHA6Ly93d3cuc3Zlc3Qub3JnLylcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBGcmFuY2VzY29cbiAgLy8gaW1wcm92ZWQgYnk6IE1hcmMgSmFuc2VuXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogZW1wdHkobnVsbClcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGVtcHR5KHVuZGVmaW5lZClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IGVtcHR5KFtdKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogZW1wdHkoe30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG4gIC8vICAgZXhhbXBsZSA1OiBlbXB0eSh7J2FGdW5jJyA6IGZ1bmN0aW9uICgpIHsgYWxlcnQoJ2h1bXB0eScpOyB9IH0pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuXG4gIHZhciB1bmRlZjtcbiAgdmFyIGtleTtcbiAgdmFyIGk7XG4gIHZhciBsZW47XG4gIHZhciBlbXB0eVZhbHVlcyA9IFt1bmRlZiwgbnVsbCwgZmFsc2UsIDAsICcnLCAnMCddO1xuXG4gIGZvciAoaSA9IDAsIGxlbiA9IGVtcHR5VmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKG1peGVkVmFyID09PSBlbXB0eVZhbHVlc1tpXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChrZXkgaW4gbWl4ZWRWYXIpIHtcbiAgICAgIGlmIChtaXhlZFZhci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxvYXR2YWwobWl4ZWRWYXIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mbG9hdHZhbC9cbiAgLy8gb3JpZ2luYWwgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIG5hdGl2ZSBwYXJzZUZsb2F0KCkgbWV0aG9kIG9mIEphdmFTY3JpcHQgcmV0dXJucyBOYU5cbiAgLy8gICAgICBub3RlIDE6IHdoZW4gaXQgZW5jb3VudGVycyBhIHN0cmluZyBiZWZvcmUgYW4gaW50IG9yIGZsb2F0IHZhbHVlLlxuICAvLyAgIGV4YW1wbGUgMTogZmxvYXR2YWwoJzE1MC4wM19wYWdlLXNlY3Rpb24nKVxuICAvLyAgIHJldHVybnMgMTogMTUwLjAzXG4gIC8vICAgZXhhbXBsZSAyOiBmbG9hdHZhbCgncGFnZTogMycpXG4gIC8vICAgZXhhbXBsZSAyOiBmbG9hdHZhbCgnLTUwICsgOCcpXG4gIC8vICAgcmV0dXJucyAyOiAwXG4gIC8vICAgcmV0dXJucyAyOiAtNTBcblxuICByZXR1cm4gcGFyc2VGbG9hdChtaXhlZFZhcikgfHwgMDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbG9hdHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnR2YWwobWl4ZWRWYXIsIGJhc2UpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbnR2YWwvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc3RlbnNpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgIGlucHV0IGJ5OiBNYXR0ZW9cbiAgLy8gICBleGFtcGxlIDE6IGludHZhbCgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAwXG4gIC8vICAgZXhhbXBsZSAyOiBpbnR2YWwoNC4yKVxuICAvLyAgIHJldHVybnMgMjogNFxuICAvLyAgIGV4YW1wbGUgMzogaW50dmFsKDQyLCA4KVxuICAvLyAgIHJldHVybnMgMzogNDJcbiAgLy8gICBleGFtcGxlIDQ6IGludHZhbCgnMDknKVxuICAvLyAgIHJldHVybnMgNDogOVxuICAvLyAgIGV4YW1wbGUgNTogaW50dmFsKCcxZScsIDE2KVxuICAvLyAgIHJldHVybnMgNTogMzBcbiAgLy8gICBleGFtcGxlIDY6IGludHZhbCgweDIwMDAwMDAwMSlcbiAgLy8gICByZXR1cm5zIDY6IDg1ODk5MzQ1OTNcbiAgLy8gICBleGFtcGxlIDc6IGludHZhbCgnMHhmZicsIDApXG4gIC8vICAgcmV0dXJucyA3OiAyNTVcbiAgLy8gICBleGFtcGxlIDg6IGludHZhbCgnMDEwJywgMClcbiAgLy8gICByZXR1cm5zIDg6IDhcblxuICB2YXIgdG1wLCBtYXRjaDtcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpO1xuXG4gIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gK21peGVkVmFyO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGJhc2UgPT09IDApIHtcbiAgICAgIG1hdGNoID0gbWl4ZWRWYXIubWF0Y2goL15cXHMqMCh4PykvaSk7XG4gICAgICBiYXNlID0gbWF0Y2ggPyBtYXRjaFsxXSA/IDE2IDogOCA6IDEwO1xuICAgIH1cbiAgICB0bXAgPSBwYXJzZUludChtaXhlZFZhciwgYmFzZSB8fCAxMCk7XG4gICAgcmV0dXJuIGlzTmFOKHRtcCkgfHwgIWlzRmluaXRlKHRtcCkgPyAwIDogdG1wO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKG1peGVkVmFyKSkge1xuICAgIHJldHVybiBtaXhlZFZhciA8IDAgPyBNYXRoLmNlaWwobWl4ZWRWYXIpIDogTWF0aC5mbG9vcihtaXhlZFZhcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnR2YWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfYXJyYXkobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogTmF0aGFuIFNlcHVsdmVkYVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IENvcmRcbiAgLy8gYnVnZml4ZWQgYnk6IE1hbmlzaFxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IEluIExvY3V0dXMsIGphdmFzY3JpcHQgb2JqZWN0cyBhcmUgbGlrZSBwaHAgYXNzb2NpYXRpdmUgYXJyYXlzLFxuICAvLyAgICAgIG5vdGUgMTogdGh1cyBKYXZhU2NyaXB0IG9iamVjdHMgd2lsbCBhbHNvXG4gIC8vICAgICAgbm90ZSAxOiByZXR1cm4gdHJ1ZSBpbiB0aGlzIGZ1bmN0aW9uIChleGNlcHQgZm9yIG9iamVjdHMgd2hpY2ggaW5oZXJpdCBwcm9wZXJ0aWVzLFxuICAvLyAgICAgIG5vdGUgMTogYmVpbmcgdGh1cyB1c2VkIGFzIG9iamVjdHMpLFxuICAvLyAgICAgIG5vdGUgMTogdW5sZXNzIHlvdSBkbyBpbmlfc2V0KCdsb2N1dHVzLm9iamVjdHNBc0FycmF5cycsIDApLFxuICAvLyAgICAgIG5vdGUgMTogaW4gd2hpY2ggY2FzZSBvbmx5IGdlbnVpbmUgSmF2YVNjcmlwdCBhcnJheXNcbiAgLy8gICAgICBub3RlIDE6IHdpbGwgcmV0dXJuIHRydWVcbiAgLy8gICBleGFtcGxlIDE6IGlzX2FycmF5KFsnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfYXJyYXkoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX2FycmF5KHswOiAnS2V2aW4nLCAxOiAndmFuJywgMjogJ1pvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaW5pX3NldCgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnLCAwKVxuICAvLyAgIGV4YW1wbGUgNDogaXNfYXJyYXkoezA6ICdLZXZpbicsIDE6ICd2YW4nLCAyOiAnWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNTogaXNfYXJyYXkoZnVuY3Rpb24gdG1wX2EgKCl7IHRoaXMubmFtZSA9ICdLZXZpbicgfSlcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG5cbiAgdmFyIF9nZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIF9nZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcbiAgdmFyIF9pc0FycmF5ID0gZnVuY3Rpb24gX2lzQXJyYXkobWl4ZWRWYXIpIHtcbiAgICAvLyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAvLyBUaGUgYWJvdmUgd29ya3MsIGJ1dCBsZXQncyBkbyB0aGUgZXZlbiBtb3JlIHN0cmluZ2VudCBhcHByb2FjaDpcbiAgICAvLyAoc2luY2UgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyBjb3VsZCBiZSBvdmVycmlkZGVuKVxuICAgIC8vIE51bGwsIE5vdCBhbiBvYmplY3QsIG5vIGxlbmd0aCBwcm9wZXJ0eSBzbyBjb3VsZG4ndCBiZSBhbiBBcnJheSAob3IgU3RyaW5nKVxuICAgIGlmICghbWl4ZWRWYXIgfHwgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG1peGVkVmFyLmxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGxlbiA9IG1peGVkVmFyLmxlbmd0aDtcbiAgICBtaXhlZFZhclttaXhlZFZhci5sZW5ndGhdID0gJ2JvZ3VzJztcbiAgICAvLyBUaGUgb25seSB3YXkgSSBjYW4gdGhpbmsgb2YgdG8gZ2V0IGFyb3VuZCB0aGlzIChvciB3aGVyZSB0aGVyZSB3b3VsZCBiZSB0cm91YmxlKVxuICAgIC8vIHdvdWxkIGJlIHRvIGhhdmUgYW4gb2JqZWN0IGRlZmluZWRcbiAgICAvLyB3aXRoIGEgY3VzdG9tIFwibGVuZ3RoXCIgZ2V0dGVyIHdoaWNoIGNoYW5nZWQgYmVoYXZpb3Igb24gZWFjaCBjYWxsXG4gICAgLy8gKG9yIGEgc2V0dGVyIHRvIG1lc3MgdXAgdGhlIGZvbGxvd2luZyBiZWxvdykgb3IgYSBjdXN0b21cbiAgICAvLyBzZXR0ZXIgZm9yIG51bWVyaWMgcHJvcGVydGllcywgYnV0IGV2ZW4gdGhhdCB3b3VsZCBuZWVkIHRvIGxpc3RlbiBmb3JcbiAgICAvLyBzcGVjaWZpYyBpbmRleGVzOyBidXQgdGhlcmUgc2hvdWxkIGJlIG5vIGZhbHNlIG5lZ2F0aXZlc1xuICAgIC8vIGFuZCBzdWNoIGEgZmFsc2UgcG9zaXRpdmUgd291bGQgbmVlZCB0byByZWx5IG9uIGxhdGVyIEphdmFTY3JpcHRcbiAgICAvLyBpbm5vdmF0aW9ucyBsaWtlIF9fZGVmaW5lU2V0dGVyX19cbiAgICBpZiAobGVuICE9PSBtaXhlZFZhci5sZW5ndGgpIHtcbiAgICAgIC8vIFdlIGtub3cgaXQncyBhbiBhcnJheSBzaW5jZSBsZW5ndGggYXV0by1jaGFuZ2VkIHdpdGggdGhlIGFkZGl0aW9uIG9mIGFcbiAgICAgIC8vIG51bWVyaWMgcHJvcGVydHkgYXQgaXRzIGxlbmd0aCBlbmQsIHNvIHNhZmVseSBnZXQgcmlkIG9mIG91ciBib2d1cyBlbGVtZW50XG4gICAgICBtaXhlZFZhci5sZW5ndGggLT0gMTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBHZXQgcmlkIG9mIHRoZSBwcm9wZXJ0eSB3ZSBhZGRlZCBvbnRvIGEgbm9uLWFycmF5IG9iamVjdDsgb25seSBwb3NzaWJsZVxuICAgIC8vIHNpZGUtZWZmZWN0IGlzIGlmIHRoZSB1c2VyIGFkZHMgYmFjayB0aGUgcHJvcGVydHkgbGF0ZXIsIGl0IHdpbGwgaXRlcmF0ZVxuICAgIC8vIHRoaXMgcHJvcGVydHkgaW4gdGhlIG9sZGVyIG9yZGVyIHBsYWNlbWVudCBpbiBJRSAoYW4gb3JkZXIgd2hpY2ggc2hvdWxkIG5vdFxuICAgIC8vIGJlIGRlcGVuZGVkIG9uIGFueXdheXMpXG4gICAgZGVsZXRlIG1peGVkVmFyW21peGVkVmFyLmxlbmd0aF07XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGlmICghbWl4ZWRWYXIgfHwgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNBcnJheSA9IF9pc0FycmF5KG1peGVkVmFyKTtcblxuICBpZiAoaXNBcnJheSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGluaVZhbCA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnKSA6IHVuZGVmaW5lZCkgfHwgJ29uJztcbiAgaWYgKGluaVZhbCA9PT0gJ29uJykge1xuICAgIHZhciBhc1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcik7XG4gICAgdmFyIGFzRnVuYyA9IF9nZXRGdW5jTmFtZShtaXhlZFZhci5jb25zdHJ1Y3Rvcik7XG5cbiAgICBpZiAoYXNTdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmIGFzRnVuYyA9PT0gJ09iamVjdCcpIHtcbiAgICAgIC8vIE1vc3QgbGlrZWx5IGEgbGl0ZXJhbCBhbmQgaW50ZW5kZWQgYXMgYXNzb2MuIGFycmF5XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfYXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfYm9vbChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2Jvb2wvXG4gIC8vIG9yaWdpbmFsIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBDb3Vyc2VzV2ViIChodHRwOi8vd3d3LmNvdXJzZXN3ZWIubmV0LylcbiAgLy8gICBleGFtcGxlIDE6IGlzX2Jvb2woZmFsc2UpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19ib29sKDApXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiBtaXhlZFZhciA9PT0gdHJ1ZSB8fCBtaXhlZFZhciA9PT0gZmFsc2U7IC8vIEZhc3RlciAoaW4gRkYpIHRoYW4gdHlwZSBjaGVja2luZ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2Jvb2wuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfY2FsbGFibGUobWl4ZWRWYXIsIHN5bnRheE9ubHksIGNhbGxhYmxlTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2NhbGxhYmxlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IEZyYW7Dp29pc1xuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSB2YXJpYWJsZSBjYWxsYWJsZU5hbWUgY2Fubm90IHdvcmsgYXMgYSBzdHJpbmcgdmFyaWFibGUgcGFzc2VkIGJ5XG4gIC8vICAgICAgbm90ZSAxOiByZWZlcmVuY2UgYXMgaW4gUEhQIChzaW5jZSBKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZ1xuICAvLyAgICAgIG5vdGUgMTogc3RyaW5ncyBieSByZWZlcmVuY2UpLCBidXQgaW5zdGVhZCB3aWxsIHRha2UgdGhlIG5hbWUgb2ZcbiAgLy8gICAgICBub3RlIDE6IGEgZ2xvYmFsIHZhcmlhYmxlIGFuZCBzZXQgdGhhdCBpbnN0ZWFkLlxuICAvLyAgICAgIG5vdGUgMTogV2hlbiB1c2VkIG9uIGFuIG9iamVjdCwgZGVwZW5kcyBvbiBhIGNvbnN0cnVjdG9yIHByb3BlcnR5XG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyBrZXB0IG9uIHRoZSBvYmplY3QgcHJvdG90eXBlXG4gIC8vICAgICAgbm90ZSAyOiBEZXBlbmRpbmcgb24gdGhlIGBjYWxsYWJsZU5hbWVgIHRoYXQgaXMgcGFzc2VkLCB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgZXZhbC5cbiAgLy8gICAgICBub3RlIDI6IFRoZSBldmFsIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMjogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMjogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogaXNfY2FsbGFibGUoJ2lzX2NhbGxhYmxlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2NhbGxhYmxlKCdib2d1c0Z1bmN0aW9uJywgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWUgLy8gZ2l2ZXMgdHJ1ZSBiZWNhdXNlIGRvZXMgbm90IGRvIHN0cmljdCBjaGVja2luZ1xuICAvLyAgIGV4YW1wbGUgMzogZnVuY3Rpb24gU29tZUNsYXNzICgpIHt9XG4gIC8vICAgZXhhbXBsZSAzOiBTb21lQ2xhc3MucHJvdG90eXBlLnNvbWVNZXRob2QgPSBmdW5jdGlvbiAoKXt9XG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgdGVzdE9iaiA9IG5ldyBTb21lQ2xhc3MoKVxuICAvLyAgIGV4YW1wbGUgMzogaXNfY2FsbGFibGUoW3Rlc3RPYmosICdzb21lTWV0aG9kJ10sIHRydWUsICdteVZhcicpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9IG15VmFyXG4gIC8vICAgcmV0dXJucyAzOiAnU29tZUNsYXNzOjpzb21lTWV0aG9kJ1xuICAvLyAgIGV4YW1wbGUgNDogaXNfY2FsbGFibGUoZnVuY3Rpb24gKCkge30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgbWV0aG9kID0gJyc7XG4gIHZhciB2YWxpZEZ1bmN0aW9uTmFtZSA9IGZhbHNlO1xuXG4gIHZhciBnZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIGdldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gJGdsb2JhbDtcbiAgICBtZXRob2QgPSBtaXhlZFZhcjtcbiAgICBuYW1lID0gbWl4ZWRWYXI7XG4gICAgdmFsaWRGdW5jdGlvbk5hbWUgPSAhIW5hbWUubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAyICYmIF90eXBlb2YobWl4ZWRWYXJbMF0pID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbWl4ZWRWYXJbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gbWl4ZWRWYXJbMF07XG4gICAgbWV0aG9kID0gbWl4ZWRWYXJbMV07XG4gICAgbmFtZSA9IChvYmouY29uc3RydWN0b3IgJiYgZ2V0RnVuY05hbWUob2JqLmNvbnN0cnVjdG9yKSkgKyAnOjonICsgbWV0aG9kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzeW50YXhPbmx5IHx8IHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdmFsaWRGdW5jdGlvbk5hbWUgYXZvaWRzIGV4cGxvaXRzXG4gIGlmICh2YWxpZEZ1bmN0aW9uTmFtZSAmJiB0eXBlb2YgZXZhbChtZXRob2QpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfY2FsbGFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfZmxvYXQobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19mbG9hdC9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICAgICBub3RlIDE6IDEuMCBpcyBzaW1wbGlmaWVkIHRvIDEgYmVmb3JlIGl0IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgZnVuY3Rpb24sIHRoaXMgbWFrZXNcbiAgLy8gICAgICBub3RlIDE6IGl0IGRpZmZlcmVudCBmcm9tIHRoZSBQSFAgaW1wbGVtZW50YXRpb24uIFdlIGNhbid0IGZpeCB0aGlzIHVuZm9ydHVuYXRlbHkuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19mbG9hdCgxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgcmV0dXJuICttaXhlZFZhciA9PT0gbWl4ZWRWYXIgJiYgKCFpc0Zpbml0ZShtaXhlZFZhcikgfHwgISEobWl4ZWRWYXIgJSAxKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfZmxvYXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfaW50KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfaW50L1xuICAvLyBvcmlnaW5hbCBieTogQWxleFxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFdlYkRldkhvYm8gKGh0dHA6Ly93ZWJkZXZob2JvLmJsb2dzcG90LmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgcmV2aXNlZCBieTogTWF0dCBCcmFkbGV5XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIG5vdGUgMTogMS4wIGlzIHNpbXBsaWZpZWQgdG8gMSBiZWZvcmUgaXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBmdW5jdGlvbiwgdGhpcyBtYWtlc1xuICAvLyAgICAgIG5vdGUgMTogaXQgZGlmZmVyZW50IGZyb20gdGhlIFBIUCBpbXBsZW1lbnRhdGlvbi4gV2UgY2FuJ3QgZml4IHRoaXMgdW5mb3J0dW5hdGVseS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2ludCgyMylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2ludCgnMjMnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX2ludCgyMy41KVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2ludCh0cnVlKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09ICttaXhlZFZhciAmJiBpc0Zpbml0ZShtaXhlZFZhcikgJiYgIShtaXhlZFZhciAlIDEpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2ludC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19udWxsKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfbnVsbC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19udWxsKCcyMycpXG4gIC8vICAgcmV0dXJucyAxOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfbnVsbChudWxsKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHJldHVybiBtaXhlZFZhciA9PT0gbnVsbDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19udWxsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19udW1lcmljKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfbnVtZXJpYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBEYXZpZFxuICAvLyBpbXByb3ZlZCBieTogdGFpdGhcbiAgLy8gYnVnZml4ZWQgYnk6IFRpbSBkZSBLb25pbmdcbiAgLy8gYnVnZml4ZWQgYnk6IFdlYkRldkhvYm8gKGh0dHA6Ly93ZWJkZXZob2JvLmJsb2dzcG90LmNvbS8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogRGVuaXMgQ2hlbnUgKGh0dHA6Ly9zaG5vdWxsZS5uZXQpXG4gIC8vICAgZXhhbXBsZSAxOiBpc19udW1lcmljKDE4Ni4zMSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX251bWVyaWMoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGlzX251bWVyaWMoJyArMTg2LjMxZTInKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogaXNfbnVtZXJpYygnJylcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA1OiBpc19udW1lcmljKFtdKVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDY6IGlzX251bWVyaWMoJzEgJylcbiAgLy8gICByZXR1cm5zIDY6IGZhbHNlXG5cbiAgdmFyIHdoaXRlc3BhY2UgPSBbJyAnLCAnXFxuJywgJ1xccicsICdcXHQnLCAnXFxmJywgJ1xceDBiJywgJ1xceGEwJywgJ1xcdTIwMDAnLCAnXFx1MjAwMScsICdcXHUyMDAyJywgJ1xcdTIwMDMnLCAnXFx1MjAwNCcsICdcXHUyMDA1JywgJ1xcdTIwMDYnLCAnXFx1MjAwNycsICdcXHUyMDA4JywgJ1xcdTIwMDknLCAnXFx1MjAwQScsICdcXHUyMDBCJywgJ1xcdTIwMjgnLCAnXFx1MjAyOScsICdcXHUzMDAwJ10uam9pbignJyk7XG5cbiAgLy8gQHRvZG86IEJyZWFrIHRoaXMgdXAgdXNpbmcgbWFueSBzaW5nbGUgY29uZGl0aW9ucyB3aXRoIGVhcmx5IHJldHVybnNcbiAgcmV0dXJuICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdudW1iZXInIHx8IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZycgJiYgd2hpdGVzcGFjZS5pbmRleE9mKG1peGVkVmFyLnNsaWNlKC0xKSkgPT09IC0xKSAmJiBtaXhlZFZhciAhPT0gJycgJiYgIWlzTmFOKG1peGVkVmFyKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19udW1lcmljLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX29iamVjdChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX29iamVjdC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICBleGFtcGxlIDE6IGlzX29iamVjdCgnMjMnKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzX29iamVjdCh7Zm9vOiAnYmFyJ30pXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19vYmplY3QobnVsbClcbiAgLy8gICByZXR1cm5zIDM6IGZhbHNlXG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG1peGVkVmFyICE9PSBudWxsICYmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgPT09ICdvYmplY3QnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX29iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX3NjYWxhcihtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX3NjYWxhci9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gICBleGFtcGxlIDE6IGlzX3NjYWxhcigxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19zY2FsYXIoezA6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiAoL2Jvb2xlYW58bnVtYmVyfHN0cmluZy8udGVzdCh0eXBlb2YgbWl4ZWRWYXIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihtaXhlZFZhcikpXG4gICk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfc2NhbGFyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19zdHJpbmcobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19zdHJpbmcvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfc3RyaW5nKCcyMycpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19zdHJpbmcoMjMuNSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgcmV0dXJuIHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfc3RyaW5nLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc3NldCgpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc3NldC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBGcmVteUNvbXBhbnlcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgZXhhbXBsZSAxOiBpc3NldCggdW5kZWZpbmVkLCB0cnVlKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzc2V0KCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcgKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBhID0gYXJndW1lbnRzO1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciB1bmRlZjtcblxuICBpZiAobCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgaXNzZXQnKTtcbiAgfVxuXG4gIHdoaWxlIChpICE9PSBsKSB7XG4gICAgaWYgKGFbaV0gPT09IHVuZGVmIHx8IGFbaV0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNzZXQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHV0ZjhfZW5jb2RlKGFyZ1N0cmluZykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3V0ZjhfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc293YmVycnlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IFl2ZXMgU3VjYWV0XG4gIC8vIGltcHJvdmVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFVscmljaFxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyAgIGV4YW1wbGUgMTogdXRmOF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgaWYgKGFyZ1N0cmluZyA9PT0gbnVsbCB8fCB0eXBlb2YgYXJnU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIC5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpO1xuICB2YXIgc3RyaW5nID0gYXJnU3RyaW5nICsgJyc7XG4gIHZhciB1dGZ0ZXh0ID0gJyc7XG4gIHZhciBzdGFydDtcbiAgdmFyIGVuZDtcbiAgdmFyIHN0cmluZ2wgPSAwO1xuXG4gIHN0YXJ0ID0gZW5kID0gMDtcbiAgc3RyaW5nbCA9IHN0cmluZy5sZW5ndGg7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nbDsgbisrKSB7XG4gICAgdmFyIGMxID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG4gICAgdmFyIGVuYyA9IG51bGw7XG5cbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIGVuZCsrO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAxMjcgJiYgYzEgPCAyMDQ4KSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDYgfCAxOTIsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDEyIHwgMjI0LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdXJyb2dhdGUgcGFpcnNcbiAgICAgIGlmICgoYzEgJiAweEZDMDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCB0cmFpbCBzdXJyb2dhdGUgYXQgJyArIG4pO1xuICAgICAgfVxuICAgICAgdmFyIGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoKytuKTtcbiAgICAgIGlmICgoYzIgJiAweEZDMDApICE9PSAweERDMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCBsZWFkIHN1cnJvZ2F0ZSBhdCAnICsgKG4gLSAxKSk7XG4gICAgICB9XG4gICAgICBjMSA9ICgoYzEgJiAweDNGRikgPDwgMTApICsgKGMyICYgMHgzRkYpICsgMHgxMDAwMDtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTggfCAyNDAsIGMxID4+IDEyICYgNjMgfCAxMjgsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfVxuICAgIGlmIChlbmMgIT09IG51bGwpIHtcbiAgICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICAgIHV0ZnRleHQgKz0gZW5jO1xuICAgICAgc3RhcnQgPSBlbmQgPSBuICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgc3RyaW5nbCk7XG4gIH1cblxuICByZXR1cm4gdXRmdGV4dDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4X2VuY29kZS5qcy5tYXAiLCIvL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfY291bnRfdmFsdWVzJyBdICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2NvdW50X3ZhbHVlcycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbGwnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWxsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmlsbF9rZXlzJyBdICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZpbGxfa2V5cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbHRlcicgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWx0ZXInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9mbGlwJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmxpcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2tleV9leGlzdHMnIF0gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9rZXlfZXhpc3RzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfa2V5cycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2tleXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9tYXAnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWFwJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfcmV2ZXJzZScgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3JldmVyc2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9zZWFyY2gnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfc2VhcmNoJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfc3VtJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3N1bScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3VuaXF1ZScgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV91bmlxdWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdjdXJyZW50JyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvY3VycmVudCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2VuZCcgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9lbmQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdrZXknIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkva2V5JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbmV4dCcgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L25leHQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwb3MnIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcG9zJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJldicgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3ByZXYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyYW5nZScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcmFuZ2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyZXNldCcgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcmVzZXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzaXplb2YnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvc2l6ZW9mJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbmwyYnInIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbmwyYnInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdudW1iZXJfZm9ybWF0JyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9udW1iZXJfZm9ybWF0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJpbnRmJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3ByaW50ZicgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cl9yZXBlYXQnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl9yZXBlYXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfc3BsaXQnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfc3BsaXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfd29yZF9jb3VudCcgXSAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfd29yZF9jb3VudCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cmlwX3RhZ3MnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cmlwX3RhZ3MnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJpcHNsYXNoZXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJpcHNsYXNoZXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJzdHInIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJzdHInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJ0cicgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0cicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ZwcmludGYnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3ZwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2c3ByaW50ZicgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy92c3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3dvcmR3cmFwJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3dvcmR3cmFwJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncHJpbnRfcicgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9wcmludF9yJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc2VyaWFsaXplJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9zZXJpYWxpemUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1bnNlcmlhbGl6ZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3Vuc2VyaWFsaXplJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndmFyX2V4cG9ydCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci92YXJfZXhwb3J0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndmFyX2R1bXAnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci92YXJfZHVtcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ZlcnNpb25fY29tcGFyZScgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9pbmZvL3ZlcnNpb25fY29tcGFyZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2x0cmltJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL2x0cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncnRyaW0nIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd0cmltJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy90cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfd2FsaycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3dhbGsnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV93YWxrX3JlY3Vyc2l2ZScgXSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfd2Fsa19yZWN1cnNpdmUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkYXRlX3BhcnNlJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZGF0ZV9wYXJzZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2dldGRhdGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9nZXRkYXRlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYmFzZW5hbWUnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vYmFzZW5hbWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkaXJuYW1lJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZmlsZXN5c3RlbS9kaXJuYW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncGF0aGluZm8nIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vcGF0aGluZm8nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkYXRlJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZGF0ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cnRvdGltZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9zdHJ0b3RpbWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdodHRwX2J1aWxkX3F1ZXJ5JyBdICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2h0dHBfYnVpbGRfcXVlcnknICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19kb3VibGUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2RvdWJsZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2ludGVnZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfaW50ZWdlcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2xvbmcnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbG9uZycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX3JlYWwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfcmVhbCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX3VuaWNvZGUnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfdW5pY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2J1ZmZlcicgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfYnVmZmVyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZG91YmxldmFsJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9kb3VibGV2YWwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdnZXR0eXBlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2dldHR5cGUnICk7XHJcblxyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X21lcmdlJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV9tZXJnZV9yZWN1cnNpdmUnIF0gPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWVyZ2VfcmVjdXJzaXZlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3ZhbHVlcycgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV92YWx1ZXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY291bnQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2NvdW50JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2luX2FycmF5JyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9pbl9hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdtaWNyb3RpbWUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvbWljcm90aW1lJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RpbWUnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS90aW1lJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NhbGxfdXNlcl9mdW5jJyBdICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjYWxsX3VzZXJfZnVuY19hcnJheScgXSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZnVuY3Rpb25fZXhpc3RzJyBdICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VuaXFpZCcgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9taXNjL3VuaXFpZCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdleHBsb2RlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9leHBsb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2ltcGxvZGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL2ltcGxvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnbWQ1JyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX3N0cicgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJfcmVwbGFjZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfcmVwbGFjZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJ0b2xvd2VyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b2xvd2VyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3N0cnRvdXBwZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnRvdXBwZXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYmFzZTY0X2RlY29kZScgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9iYXNlNjRfZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jhc2U2NF9lbmNvZGUnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2VuY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX3VybCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmF3dXJsZGVjb2RlJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxkZWNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyYXd1cmxlbmNvZGUnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3Jhd3VybGVuY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VybGRlY29kZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndXJsZW5jb2RlJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC91cmxlbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYm9vbHZhbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2VtcHR5JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZW1wdHknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZmxvYXR2YWwnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbnR2YWwnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2ludHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19hcnJheScgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2Jvb2wnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfYm9vbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19jYWxsYWJsZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2Zsb2F0JyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfZmxvYXQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfaW50JyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19pbnQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfbnVsbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19udWxsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX251bWVyaWMnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19vYmplY3QnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zY2FsYXInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zdHJpbmcnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc3NldCcgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzc2V0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BhcnNlX2FyZ3MnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdqcy1wYXJzZS1hcmdzJyApO1xyXG5cclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX2NzdicgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2NzdicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV90b19odG1sX2F0dHInIF0gPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sX2F0dHInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9faHRtbCcgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV90b193aW5kb3cnIF0gICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b193aW5kb3cnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnd3JhcF9hcnJheScgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvd3JhcF9hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdva2cnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9va2cnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnb2tzJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvb2tzJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BsYWluX29iamVjdCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BsYWluX29iamVjdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19vYmplY3RfbGlrZScgXSAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19vYmplY3RfbGlrZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19hcnJheV9saWtlJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19vYmplY3RfbGlrZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjbG9uZV9vYmplY3QnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jbG9uZV9vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYWZ0ZXJfZGF0ZScgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfYWZ0ZXJfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19iZWZvcmVfZGF0ZScgXSAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19iZWZvcmVfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19zYW1lX2RhdGUnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19zYW1lX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZm9ybWF0X2R1cmF0aW9uJyBdICAgID0gcmVxdWlyZSggJy4vcGFydHMvZm9ybWF0X2R1cmF0aW9uJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RpZmZfZGF5cycgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RpZmZfZGF5cycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc191bmRlZmluZWQnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc191bmRlZmluZWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfdGFiX2ZvY3VzZWQnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdGFiX2ZvY3VzZWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc2Nyb2xsX3RvX3RvcCcgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3RvX3RvcCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjb3B5X3RvX2NsaXAnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3B5X3RvX2NsaXAnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc2Nyb2xsX3BvcycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3BvcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc193aW5kb3dfYXJnJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc193aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3dpbmRvd19hcmcnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZGV2aWNlX3R5cGUnIF0gICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGV2aWNlX3R5cGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZGVidWcnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdGltZV90YWtlbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0aW1lX3Rha2VuJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3BpcGVfbG9nJyBdICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BpcGVfbG9nJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NvdW50ZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2NvdW50ZXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndG9fanF1ZXJ5JyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdG9fanF1ZXJ5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RvX2pzX2Z1bmMnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pzX2Z1bmMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncmFuZF9tZDUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcmFuZF9tZDUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndXJsX3BhcmFtcycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdXJsX3BhcmFtcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdxdWVyeV9zdHJpbmcnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9xdWVyeV9zdHJpbmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfanF1ZXJ5JyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfanF1ZXJ5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Nzc191bml0cycgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2Nzc191bml0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2pzb25fdG9fY3N2JyBdICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2pzb25fdG9fY3N2JyApOyIsIi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gYXJyYXkgZWxlbWVudHMgaW50byA8bGk+IHRhZ3MgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgbGlzdCBvZiB0aGUgZ2l2ZW4gaWQuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKSwgYW5kIGFuIGFub255bW91cyBpbm5lciBjbG9zdXJlIHRvIGNyZWF0ZSBhIGxpc3Qgb2YgaHRtbCB0YWdzLlxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBsaXN0SURcclxuICogQHBhcmFtIHRhZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBhcnIsIGxpc3RJRCwgdGFnID0gJ2xpJyApID0+ICggZWwgPT4gKCAoIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbGlzdElEICkgKSwgKCBlbC5pbm5lckhUTUwgKz0gYXJyLm1hcCggaXRlbSA9PiBgPCR7dGFnfT4ke2l0ZW19PC8ke3RhZ30+YCApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbiggJycgKSApICkgKSgpOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcbmltcG9ydCBpc19vYmplY3RfbGlrZSBmcm9tICcuL2lzX29iamVjdF9saWtlJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IHtcclxuXHRsZXQgcmV0dXJuX2h0bWwgPSAnJztcclxuXHRmb3IoIGxldCBJIGluICRkYXRhICkge1xyXG5cdFx0aWYoIGlzX29iamVjdCggJGRhdGFbIEkgXSApICkge1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIic7XHJcblx0XHRcdGZvciggbGV0IEsgaW4gJGRhdGFbIEkgXSApIHtcclxuXHRcdFx0XHRsZXQgJHZhbHVlID0gKCBpc19vYmplY3RfbGlrZSggJGRhdGFbIEkgXVsgSyBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdWyBLIF0gKSA6ICRkYXRhWyBJIF1bIEsgXTtcclxuXHRcdFx0XHRyZXR1cm5faHRtbCArPSAkdmFsdWUgKyAnICc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJ1wiJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCAkdmFsdWUgPSAoIGlzX29iamVjdF9saWtlKCAkZGF0YVsgSSBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdICkgOiAkZGF0YVsgSSBdO1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIicgKyAkdmFsdWUgKyAnXCIgJztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJldHVybl9odG1sO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gKCAkYXJyYXkgKSA9PiB7XHJcblx0Zm9yKCBsZXQgJGtleSBpbiAkYXJyYXkgKSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICRhcnJheVsgJGtleSBdO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBBIENsb25lIG9mIGdpdmVuIHZhbHVlLlxyXG4gKiBAcGFyYW0gJGRhdGFcclxuICogQHJldHVybnMge2FueX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCAkZGF0YSApICk7IiwiLyoqXHJcbiAqIENvcHkgYSBzdHJpbmcgdG8gdGhlIGNsaXBib2FyZC4gT25seSB3b3JrcyBhcyBhIHJlc3VsdCBvZiB1c2VyIGFjdGlvbiAoaS5lLiBpbnNpZGUgYSBjbGljayBldmVudCBsaXN0ZW5lcikuXHJcbiAqIENyZWF0ZSBhIG5ldyA8dGV4dGFyZWE+IGVsZW1lbnQsIGZpbGwgaXQgd2l0aCB0aGUgc3VwcGxpZWQgZGF0YSBhbmQgYWRkIGl0IHRvIHRoZSBIVE1MIGRvY3VtZW50LlxyXG4gKiBVc2UgU2VsZWN0aW9uLmdldFJhbmdlQXQoKXRvIHN0b3JlIHRoZSBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogVXNlIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JykgdG8gY29weSB0byB0aGUgY2xpcGJvYXJkLlxyXG4gKiBSZW1vdmUgdGhlIDx0ZXh0YXJlYT4gZWxlbWVudCBmcm9tIHRoZSBIVE1MIGRvY3VtZW50LiBGaW5hbGx5LCB1c2UgU2VsZWN0aW9uKCkuYWRkUmFuZ2UoKSB0byByZWNvdmVyIHRoZSBvcmlnaW5hbCBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogQHBhcmFtIHN0clxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xyXG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RleHRhcmVhJyApO1xyXG5cdGVsLnZhbHVlID0gc3RyO1xyXG5cdGVsLnNldEF0dHJpYnV0ZSggJ3JlYWRvbmx5JywgJycgKTtcclxuXHRlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0ZWwuc3R5bGUubGVmdCAgICAgPSAnLTk5OTlweCc7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZWwgKTtcclxuXHRjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJhbmdlQ291bnQgPiAwID8gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCggMCApIDogZmFsc2U7XHJcblx0ZWwuc2VsZWN0KCk7XHJcblx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoICdjb3B5JyApO1xyXG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoIGVsICk7XHJcblx0aWYoIHNlbGVjdGVkICkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZSggc2VsZWN0ZWQgKTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZXMgYSBjb3VudGVyIHdpdGggdGhlIHNwZWNpZmllZCByYW5nZSwgc3RlcCBhbmQgZHVyYXRpb24gZm9yIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3IuXHJcbiAqIENoZWNrIGlmIHN0ZXAgaGFzIHRoZSBwcm9wZXIgc2lnbiBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5LlxyXG4gKiBVc2Ugc2V0SW50ZXJ2YWwoKSBpbiBjb21iaW5hdGlvbiB3aXRoIE1hdGguYWJzKCkgYW5kIE1hdGguZmxvb3IoKSB0byBjYWxjdWxhdGUgdGhlIHRpbWUgYmV0d2VlbiBlYWNoIG5ldyB0ZXh0IGRyYXcuXHJcbiAqIFVzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCkuaW5uZXJIVE1MIHRvIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQuXHJcbiAqIE9taXQgdGhlIGZvdXJ0aCBwYXJhbWV0ZXIsIHN0ZXAsIHRvIHVzZSBhIGRlZmF1bHQgc3RlcCBvZiAxLiBPbWl0IHRoZSBmaWZ0aCBwYXJhbWV0ZXIsIGR1cmF0aW9uLCB0byB1c2UgYSBkZWZhdWx0IGR1cmF0aW9uIG9mIDIwMDBtcy5cclxuICogQHBhcmFtIHNlbGVjdG9yXHJcbiAqIEBwYXJhbSBzdGFydFxyXG4gKiBAcGFyYW0gZW5kXHJcbiAqIEBwYXJhbSBzdGVwXHJcbiAqIEBwYXJhbSBkdXJhdGlvblxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIHNlbGVjdG9yLCBzdGFydCwgZW5kLCBzdGVwID0gMSwgZHVyYXRpb24gPSAyMDAwICkgPT4ge1xyXG5cdGxldCBjdXJyZW50ID0gc3RhcnQsXHJcblx0XHRfc3RlcCAgID0gKCBlbmQgLSBzdGFydCApICogc3RlcCA8IDAgPyAtc3RlcCA6IHN0ZXAsXHJcblx0XHR0aW1lciAgID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHRcdFx0Y3VycmVudCArPSBfc3RlcDtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBjdXJyZW50O1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGVuZDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgY2xlYXJJbnRlcnZhbCggdGltZXIgKTtcclxuXHRcdH0sIE1hdGguYWJzKCBNYXRoLmZsb29yKCBkdXJhdGlvbiAvICggZW5kIC0gc3RhcnQgKSApICkgKTtcclxuXHRyZXR1cm4gdGltZXI7XHJcbn07IiwiY29uc3QgaXNOdW1iZXJpYyA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYycgKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IHtcclxuXHR2YXIgcyA9IHZhbDtcclxuXHRpZiggaXNOdW1iZXJpYyggdmFsICkgKSB7XHJcblx0XHRyZXR1cm4gdmFsICsgJ3B4JztcclxuXHR9IGVsc2UgaWYoIHZhbC5pbmRleE9mKCAncHgnICkgPiAtMSB8fCB2YWwuaW5kZXhPZiggJyUnICkgPiAtMSB8fCB2YWwuaW5kZXhPZiggJ2VtJyApID4gLTEgKSB7XHJcblx0XHRsZXQgY2hlY2tQeCAgPSBzLnJlcGxhY2UoICdweCcsICcnICk7XHJcblx0XHRsZXQgY2hlY2tQY3QgPSBzLnJlcGxhY2UoICclJywgJycgKTtcclxuXHRcdGxldCBjaGVja0VtICA9IHMucmVwbGFjZSggJ2VtJywgJycgKTtcclxuXHRcdGlmKCBpc051bWJlcmljKCBjaGVja1B4ICkgfHwgaXNOdW1iZXJpYyggY2hlY2tQY3QgKSB8fCBpc051bWJlcmljKCBjaGVja0VtICkgKSB7XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJzBweCc7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiAnMHB4JztcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIERldGVjdHMgd2V0aGVyIHRoZSB3ZWJzaXRlIGlzIGJlaW5nIG9wZW5lZCBpbiBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogVXNlIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHRlc3QgdGhlIG5hdmlnYXRvci51c2VyQWdlbnQgcHJvcGVydHkgdG8gZmlndXJlIG91dCBpZiB0aGUgZGV2aWNlIGlzIGEgbW9iaWxlIGRldmljZSBvciBhIGRlc2t0b3AvbGFwdG9wLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSA/ICdNb2JpbGUnIDogJ0Rlc2t0b3AnOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIChpbiBkYXlzKSBiZXR3ZWVuIHR3byBkYXRlcy5cclxuICogQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIChpbiBkYXlzKSBiZXR3ZWVuIHR3byBEYXRlIG9iamVjdHMuXHJcbiAqIEBwYXJhbSBkYXRlSW5pdGlhbFxyXG4gKiBAcGFyYW0gZGF0ZUZpbmFsXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUluaXRpYWwsIGRhdGVGaW5hbCApID0+ICggZGF0ZUZpbmFsIC0gZGF0ZUluaXRpYWwgKSAvICggMTAwMCAqIDM2MDAgKiAyNCApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBodW1hbiByZWFkYWJsZSBmb3JtYXQgb2YgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAqIERpdmlkZSBtcyB3aXRoIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMgdG8gb2J0YWluIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMgZm9yIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgYW5kIG1pbGxpc2Vjb25kLlxyXG4gKiBVc2UgT2JqZWN0LmVudHJpZXMoKSB3aXRoIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoKSB0byBrZWVwIG9ubHkgbm9uLXplcm8gdmFsdWVzLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpIHRvIGNyZWF0ZSB0aGUgc3RyaW5nIGZvciBlYWNoIHZhbHVlLCBwbHVyYWxpemluZyBhcHByb3ByaWF0ZWx5LlxyXG4gKiBVc2UgU3RyaW5nLnByb3RvdHlwZS5qb2luKCcsICcpIHRvIGNvbWJpbmUgdGhlIHZhbHVlcyBpbnRvIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gbXNcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gbXMgPT4ge1xyXG5cdGlmKCBtcyA8IDAgKSBtcyA9IC1tcztcclxuXHRjb25zdCB0aW1lID0ge1xyXG5cdFx0ZGF5OiBNYXRoLmZsb29yKCBtcyAvIDg2NDAwMDAwICksXHJcblx0XHRob3VyOiBNYXRoLmZsb29yKCBtcyAvIDM2MDAwMDAgKSAlIDI0LFxyXG5cdFx0bWludXRlOiBNYXRoLmZsb29yKCBtcyAvIDYwMDAwICkgJSA2MCxcclxuXHRcdHNlY29uZDogTWF0aC5mbG9vciggbXMgLyAxMDAwICkgJSA2MCxcclxuXHRcdG1pbGxpc2Vjb25kOiBNYXRoLmZsb29yKCBtcyApICUgMTAwMFxyXG5cdH07XHJcblx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCB0aW1lIClcclxuXHRcdFx0XHQgLmZpbHRlciggdmFsID0+IHZhbFsgMSBdICE9PSAwIClcclxuXHRcdFx0XHQgLm1hcCggKCBbIGtleSwgdmFsIF0gKSA9PiBgJHt2YWx9ICR7a2V5fSR7dmFsICE9PSAxID8gJ3MnIDogJyd9YCApXHJcblx0XHRcdFx0IC5qb2luKCAnLCAnICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBhZnRlciBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgZ3JlYXRlciB0aGFuIG9wZXJhdG9yICg+KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBhZnRlciB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQSA+IGRhdGVCOyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYmVmb3JlIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIHRoZSBsZXNzIHRoYW4gb3BlcmF0b3IgKDwpIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGNvbWVzIGJlZm9yZSB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQSA8IGRhdGVCOyIsImltcG9ydCBpc191bmRlZmluZWQgZnJvbSAnLi9pc191bmRlZmluZWQnO1xyXG5pbXBvcnQgaXNfc3RyaW5nIGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19zdHJpbmcnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGdpdmVuIE9iamVjdCAvIFZhbHVlIGlzIGEgalF1ZXJ5IEluc3RhbmNlLlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+ICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGVsZW0gKSAmJiBmYWxzZSA9PT0gaXNfc3RyaW5nKCAkZWxlbSApICYmICRlbGVtLmpRdWVyeSApOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcbmltcG9ydCBpc19hcnJheSBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfYXJyYXknO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGlzIG9iamVjdC1saWtlLlxyXG4gKiBDaGVjayBpZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IG51bGwgYW5kIGl0cyB0eXBlb2YgaXMgZXF1YWwgdG8gJ29iamVjdCcuXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggdmFsICkgPT4ge1xyXG5cdHJldHVybiAoIGlzX29iamVjdCggdmFsICkgfHwgaXNfYXJyYXkoIHZhbCApICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyB0aGUgc2FtZSBhcyBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpIGFuZCBzdHJpY3QgZXF1YWxpdHkgY2hlY2tpbmcgKD09PSkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgaXMgdGhlIHNhbWUgYXMgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEudG9JU09TdHJpbmcoKSA9PT0gZGF0ZUIudG9JU09TdHJpbmcoKTsiLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyBmb2N1c2VkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqIFVzZSB0aGUgRG9jdW1lbnQuaGlkZGVuIHByb3BlcnR5LCBpbnRyb2R1Y2VkIGJ5IHRoZSBQYWdlIFZpc2liaWxpdHkgQVBJIHRvIGNoZWNrIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyB2aXNpYmxlIG9yIGhpZGRlbi5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+ICFkb2N1bWVudC5oaWRkZW47IiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKiBVc2UgdGhlIHN0cmljdCBlcXVhbGl0eSBvcGVyYXRvciB0byBjaGVjayBpZiB0aGUgdmFsdWUgYW5kIG9mIHZhbCBhcmUgZXF1YWwgdG8gdW5kZWZpbmVkLlxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4gdmFsID09PSB1bmRlZmluZWQ7IiwiaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICcuL2lzX3VuZGVmaW5lZCc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHdpbmRvdyBoYXMgZ2l2ZW4gdmFyaWFibGUuXHJcbiAqIEBwYXJhbSAka2V5XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXkgKSA9PiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJGtleSBdICkgKTsiLCJsZXQgJE9LUyAgICAgICA9ICggcHJvcGVydGllcywgb2JqLCBkZWZhdWx0VmFsdWUsIGRlbGltaXRlciA9ICcvJyApID0+IHtcclxuXHRwcm9wZXJ0aWVzICAgPSAoIHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnc3RyaW5nJyApID8gcHJvcGVydGllcy5zcGxpdCggZGVsaW1pdGVyICkgOiBbIHByb3BlcnRpZXMgXTtcclxuXHRsZXQgcHJvcGVydHkgPSBwcm9wZXJ0aWVzLnNoaWZ0KCk7XHJcblxyXG5cdGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblx0fVxyXG5cclxuXHRpZiggcHJvcGVydGllcy5sZW5ndGggKSB7XHJcblx0XHRwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5qb2luKCBkZWxpbWl0ZXIgKTtcclxuXHRcdHJldHVybiAkT0tTKCBwcm9wZXJ0aWVzLCBvYmpbIHByb3BlcnR5IF0sIGRlZmF1bHRWYWx1ZSwgZGVsaW1pdGVyICk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBvYmpbIHByb3BlcnR5IF07XHJcblx0fVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9ICRPS1M7IiwibGV0ICRPS1MgICAgICAgPSAoIHByb3BlcnRpZXMsIHZhbHVlLCBvYmosIGRlbGltaXRlciA9ICcvJyApID0+IHtcclxuXHRwcm9wZXJ0aWVzICAgPSAoIHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnc3RyaW5nJyApID8gcHJvcGVydGllcy5zcGxpdCggZGVsaW1pdGVyICkgOiBbIHByb3BlcnRpZXMgXTtcclxuXHRsZXQgcHJvcGVydHkgPSBwcm9wZXJ0aWVzLnNoaWZ0KCk7XHJcblxyXG5cdGlmKCBwcm9wZXJ0aWVzLmxlbmd0aCApIHtcclxuXHRcdHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmpvaW4oIGRlbGltaXRlciApO1xyXG5cclxuXHRcdGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHR9IGVsc2UgaWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gIT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oICdPYmplY3QgcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCIgYWxyZWFkeSBoYXMgbm9uIG9iamVjdCB2YWx1ZTonLCBvYmpbIHByb3BlcnR5IF0sICdJdCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYW4gZW1wdHkgb2JqZWN0JyApO1xyXG5cdFx0XHRvYmpbIHByb3BlcnR5IF0gPSB7fTtcclxuXHRcdH0gZWxzZSBpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9ialsgcHJvcGVydHkgXS5sZW5ndGggIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRpZiggKCAvXlswLTldKyQvICkudGVzdCggcHJvcGVydHkgKSApIHtcclxuXHRcdFx0XHRwcm9wZXJ0eSA9IHBhcnNlSW50KCBwcm9wZXJ0eSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RyeSB0byBzZXQgbm9uIG51bWVyaWMgcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCIgdG8gYXJyYXk6Jywgb2JqWyBwcm9wZXJ0eSBdLCAnVGhlIGFycmF5IHdpbGwgYmUgYmUgcmVwbGFjZWQgd2l0aCBhbiBlbXB0eSBvYmplY3QnICk7XHJcblx0XHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCRPS1MoIHByb3BlcnRpZXMsIHZhbHVlLCBvYmpbIHByb3BlcnR5IF0sIGRlbGltaXRlciApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRvYmpbIHByb3BlcnR5IF0gPSB2YWx1ZTtcclxuXHR9XHJcblx0cmV0dXJuIG9iajtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSAkT0tTOyIsIi8qKlxyXG4gKiBMb2dzIGEgdmFsdWUgYW5kIHJldHVybnMgaXQuXHJcbiAqIFVzZSBjb25zb2xlLmxvZyB0byBsb2cgdGhlIHN1cHBsaWVkIHZhbHVlLCBjb21iaW5lZCB3aXRoIHRoZSB8fCBvcGVyYXRvciB0byByZXR1cm4gaXQuXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBkYXRhID0+IGNvbnNvbGUubG9nKCBkYXRhICkgfHwgZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9ICgpID0+ICggdHlwZW9mIE9iamVjdFsgJ2NyZWF0ZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/IE9iamVjdC5jcmVhdGUoIG51bGwgKSA6IHt9OyIsIi8qKlxyXG4gKiBSZXR1cm4gdmFsdWUgZnJvbSBRdWVyeVN0cmluZ1xyXG4gKiBAcGFyYW0gbmFtZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIG5hbWUgKSA9PiB7XHJcblx0bmFtZSAgICAgICAgPSBuYW1lLnJlcGxhY2UoIC9bXFxbXS8sIFwiXFxcXFtcIiApLnJlcGxhY2UoIC9bXFxdXS8sIFwiXFxcXF1cIiApO1xyXG5cdHZhciByZWdleCAgID0gbmV3IFJlZ0V4cCggXCJbXFxcXD8mXVwiICsgbmFtZSArIFwiPShbXiYjXSopXCIgKSxcclxuXHRcdHJlc3VsdHMgPSByZWdleC5leGVjKCBsb2NhdGlvbi5zZWFyY2ggKTtcclxuXHRyZXR1cm4gcmVzdWx0cyA9PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudCggcmVzdWx0c1sgMSBdLnJlcGxhY2UoIC9cXCsvZywgXCIgXCIgKSApO1xyXG59OyIsImltcG9ydCBtZDUgZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9tZDUnO1xyXG5cclxuLyoqXHJcbiAqIFVuaXF1ZSByYW5kb20gbWQ1XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IFN0cmluZyggbWQ1KCBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKSApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgcGFnZS5cclxuICogVXNlIHBhZ2VYT2Zmc2V0IGFuZCBwYWdlWU9mZnNldCBpZiB0aGV5IGFyZSBkZWZpbmVkLCBvdGhlcndpc2Ugc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wLiBZb3UgY2FuIG9taXQgZWwgdG8gdXNlIGEgZGVmYXVsdCB2YWx1ZSBvZiB3aW5kb3cuXHJcbiAqIEBwYXJhbSBlbFxyXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBlbCA9IHdpbmRvdyApID0+ICgge1xyXG5cdHg6IGVsLnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWE9mZnNldCA6IGVsLnNjcm9sbExlZnQsXHJcblx0eTogZWwucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VZT2Zmc2V0IDogZWwuc2Nyb2xsVG9wXHJcbn0gKTsiLCIvKipcclxuICogU21vb3RoLXNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS5cclxuICogR2V0IGRpc3RhbmNlIGZyb20gdG9wIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3Agb3IgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AuXHJcbiAqIFNjcm9sbCBieSBhIGZyYWN0aW9uIG9mIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3AuIFVzZSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgdG8gYW5pbWF0ZSB0aGUgc2Nyb2xsaW5nLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0aWYoIGMgPiAwICkge1xyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggc2Nyb2xsVG9Ub3AgKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbyggMCwgYyAtIGMgLyA4ICk7XHJcblx0fVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gKCBjYWxsYmFjaywgdGl0bGUgPSAnVGltZVRha2VuJyApID0+IHtcclxuXHRjb25zb2xlLnRpbWUoIHRpdGxlICk7XHJcblx0Y29uc3QgciA9IGNhbGxiYWNrKCk7XHJcblx0Y29uc29sZS50aW1lRW5kKCB0aXRsZSApO1xyXG5cdHJldHVybiByO1xyXG59OyIsImltcG9ydCBpc19qcXVlcnkgZnJvbSAnLi9pc19qcXVlcnknO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgR2l2ZW4gU3RyaW5nIGludG8gQSBqUXVlcnkgT2JqZWN0LlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiB7XHJcblx0aWYoIGZhbHNlID09PSBpc19qcXVlcnkoICRlbGVtICkgKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5KCAkZWxlbSApO1xyXG5cdH1cclxuXHRyZXR1cm4gJGVsZW07XHJcbn07IiwiaW1wb3J0IGlzX29iamVjdF9saWtlIGZyb20gJy4vaXNfb2JqZWN0X2xpa2UnO1xyXG5pbXBvcnQgdmFsaWRhdGVKU0Z1bmMgZnJvbSAnLi92YWxpZGF0ZVNpbmdsZUpTRnVuYyc7XHJcbmltcG9ydCBlbXB0eSBmcm9tICdsb2N1dHVzL3BocC92YXIvZW1wdHknO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBpc19vYmplY3RfbGlrZSggJGRhdGEgKSApIHtcclxuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRhdGEgKSB7XHJcblx0XHRcdGlmKCAhZW1wdHkoICRkYXRhWyAka2V5IF0gKSApIHtcclxuXHRcdFx0XHQkZGF0YVsgJGtleSBdID0gdmFsaWRhdGVKU0Z1bmMoICRkYXRhWyAka2V5IF0sICRhcmdzX2tleSwgJGNvbnRlbnRzX2tleSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkZGF0YTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGN1cnJlbnQgVVJMLlxyXG4gKiBVc2UgU3RyaW5nLm1hdGNoKCkgd2l0aCBhbiBhcHByb3ByaWF0ZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZ2V0IGFsbCBrZXktdmFsdWUgcGFpcnMsXHJcbiAqIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKSB0byBtYXAgYW5kIGNvbWJpbmUgdGhlbSBpbnRvIGEgc2luZ2xlIG9iamVjdC5cclxuICogUGFzcyBsb2NhdGlvbi5zZWFyY2ggYXMgdGhlIGFyZ3VtZW50IHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHVybC5cclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7VCB8IHt9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB1cmwgPT5cclxuXHQoIHVybC5tYXRjaCggLyhbXj89Jl0rKSg9KFteJl0qKSkvZyApIHx8IFtdICkucmVkdWNlKFxyXG5cdFx0KCBhLCB2ICkgPT4gKCAoIGFbIHYuc2xpY2UoIDAsIHYuaW5kZXhPZiggJz0nICkgKSBdID0gdi5zbGljZSggdi5pbmRleE9mKCAnPScgKSArIDEgKSApLCBhICksXHJcblx0XHR7fVxyXG5cdCk7IiwiaW1wb3J0IGlzX29iamVjdCBmcm9tIFwibG9jdXR1cy9waHAvdmFyL2lzX29iamVjdFwiO1xyXG5pbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gXCIuL2lzX3VuZGVmaW5lZFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoICRzdHJpbmcsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IGlzX29iamVjdCggJHN0cmluZyApICYmIGZhbHNlID09PSBpc191bmRlZmluZWQoICRzdHJpbmdbICRhcmdzX2tleSBdICkgfHwgZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdICkgKSB7XHJcblx0XHRsZXQgJGFyZ3MgICAgID0gKCAkc3RyaW5nWyAkYXJnc19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGFyZ3Nfa2V5IF07XHJcblx0XHRsZXQgJGNvbnRlbnRzID0gKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRjb250ZW50c19rZXkgXTtcclxuXHRcdGlmKCAkYXJncyA9PT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2UgaWYoICRhcmdzICE9PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkYXJncywgJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJHN0cmluZztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRzdHJpbmc7XHJcbn07XHJcbiIsImltcG9ydCBpc19vYmplY3QgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdCc7XHJcblxyXG4vKipcclxuICogU2V0cyBKUyBPYmplY3QgSW50byBXaW5kb3cgQXJncy5cclxuICogQHBhcmFtICRrZXlcclxuICogQHBhcmFtICR2YWx1ZVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXksICR2YWx1ZSApID0+IHtcclxuXHRpZiggaXNfb2JqZWN0KCAka2V5ICkgKSB7XHJcblx0XHRmb3IoIGxldCAkX2sgaW4gJGtleSApIHtcclxuXHRcdFx0d2luZG93WyAkX2sgXSA9ICRrZXlbICRfayBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR3aW5kb3dbICRrZXkgXSA9ICR2YWx1ZTtcclxufTsiLCIvKipcclxuICogQ2FzdHMgdGhlIHByb3ZpZGVkIHZhbHVlIGFzIGFuIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5pc0FycmF5KCkgdG8gZGV0ZXJtaW5lIGlmIHZhbCBpcyBhbiBhcnJheSBhbmQgcmV0dXJuIGl0IGFzLWlzIG9yIGVuY2Fwc3VsYXRlZCBpbiBhbiBhcnJheSBhY2NvcmRpbmdseS5cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7KltdfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4gKEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdKTsiLCIvKiBnbG9iYWwgc3dhbDp0cnVlICovXG5pbXBvcnQge1xuXHRhcnJheV9tZXJnZSxcblx0Y2FsbF91c2VyX2Z1bmMsXG5cdGNsb25lX29iamVjdCxcblx0aXNfanF1ZXJ5LFxuXHRpc19udWxsLFxuXHRpc19vYmplY3RfbGlrZSxcblx0aXNfdW5kZWZpbmVkLFxuXHRpc193aW5kb3dfYXJnLFxuXHRtZDUsXG5cdG1pY3JvdGltZSxcblx0cmFuZF9tZDUsXG5cdHN0cnRvbG93ZXIsXG5cdHRvX2pxdWVyeSxcblx0dG9fanNfZnVuYyxcbn0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbiB7XG5cdHN0YXRpYyBqc19mdW5jKCAkZGF0YSApIHtcblx0XHRyZXR1cm4gdG9fanNfZnVuYyggJGRhdGEsICd3cG9uaW9uX2pzX2FyZ3MnLCAnd3Bvbmlvbl9qc19jb250ZW50cycgKTtcblx0fVxuXG5cdHN0YXRpYyByYW5kX2lkKCkge1xuXHRcdHJldHVybiBtZDUoICd3cG9uaW9uX3JhbmRfJyArIG1pY3JvdGltZSgpICsgcmFuZF9tZDUoKSApO1xuXHR9XG5cblx0c3RhdGljIHZhbGlkX2pzb24oIG9iaiApIHtcblx0XHR0cnkge1xuXHRcdFx0SlNPTi5wYXJzZSggb2JqICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEEgU2luZ2xlIENsYXNzIEZvciB0aGUgR2l2ZW4gRWxlbWVudC5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c3RhdGljIGdldF9maWVsZF9jbGFzcyggJHR5cGUgKSB7XG5cdFx0JHR5cGUgPSBzdHJ0b2xvd2VyKCAkdHlwZSApO1xuXG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvdy53cG9uaW9uX2ZpZWxkc1sgJHR5cGUgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy53cG9uaW9uX2ZpZWxkc1sgJHR5cGUgXTtcblx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJ3dwb25pb25fJyArICR0eXBlICsgJ19maWVsZCcgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvd1sgJ3dwb25pb25fJyArICR0eXBlICsgJ19maWVsZCcgXTtcblx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIHdpbmRvd1sgJHR5cGUgXSApICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvd1sgJHR5cGUgXTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZElEKCAkZWxlbSApIHtcblx0XHRyZXR1cm4gdG9fanF1ZXJ5KCAkZWxlbSApLmF0dHIoICdkYXRhLXdwb25pb24tanNpZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIEZpZWxkIEhUTUwgT2JqZWN0IFVzaW5nIEZpZWxkIElELlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICR3aGVyZV90b19maW5kXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHN0YXRpYyBJRHRvRWxlbWVudCggJGVsZW0sICR3aGVyZV90b19maW5kID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRpZCA9IFdQT25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRpZiggZmFsc2UgIT09ICR3aGVyZV90b19maW5kICYmIGlzX2pxdWVyeSggJHdoZXJlX3RvX2ZpbmQgKSApIHtcblx0XHRcdHJldHVybiAkd2hlcmVfdG9fZmluZC5maW5kKCAnLndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkaWQgKyAnXCInICk7XG5cdFx0fVxuXHRcdHJldHVybiBqUXVlcnkoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIl0nICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGdpdmVuIHZhbHVlIGlzIGFuIGpRdWVyeSBpbnN0YW5jZS5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzRmllbGQoICRlbGVtICkge1xuXHRcdHJldHVybiAoIGlzX2pxdWVyeSggJGVsZW0gKSApID8gKCB0aGlzLmZpZWxkSUQoICRlbGVtICkgKSA6IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgV2luZG93IEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyB3aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdHJldHVybiAoIGlzX3dpbmRvd19hcmcoICR2YXJfaWQgKSApID8gd2luZG93WyAkdmFyX2lkIF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgJiBSZXR1cm5zIEZpZWxkIEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZEFyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0JHZhcl9pZCA9ICggdGhpcy5pc0ZpZWxkKCAkdmFyX2lkICkgKSA/IHRoaXMuZmllbGRJRCggJHZhcl9pZCApIDogJHZhcl9pZDtcblx0XHRyZXR1cm4gKCAkdmFyX2lkICkgPyBjbG9uZV9vYmplY3QoIHRoaXMud2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgKSApIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hjZWtzIGFuZCByZXR1cm5zIGdsb2JhbCB0cmFuc2xhdGlvbiBzdHJpbmcuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljIHR4dCggJGtleSwgJGRlZmF1bHQgPSAnc3RyaW5nX2RlZmF1bHRfbm90X2ZvdW5kJyApIHtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCBXUE9uaW9uLnRleHRbICRrZXkgXSApICkgPyBXUE9uaW9uLnRleHRbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgTG9hZGluZyBTY3JlZW4uXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJGlzX3Nob3dcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgbG9hZGluZ19zY3JlZW4oICRlbGVtLCAkaXNfc2hvdyA9IHRydWUgKSB7XG5cdFx0JGVsZW0gPSB0b19qcXVlcnkoICRlbGVtICkuZmluZCggJy5wYWdlLWxvYWRlcicgKTtcblx0XHRpZiggdHJ1ZSA9PT0gJGlzX3Nob3cgKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW0uZmFkZUluKCAnc2xvdycgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRlbGVtLmZhZGVPdXQoICdzbG93JyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgR2xvYmFsIERlYnVnIFZpZXcgUE9QVVAuXG5cdCAqL1xuXHRzdGF0aWMgZ2xvYmFsX2RlYnVnKCkge1xuXHRcdGxldCAkaGFuZGxlID0galF1ZXJ5KCAnYS53cG9uaW9uLWdsb2JhbC1kZWJ1Zy1oYW5kbGUnICksXG5cdFx0XHQkanNvbiAgID0ge307XG5cdFx0aWYoIFdQT25pb24uZGVidWdfaW5mbyA9PT0gbnVsbCAmJiAkaGFuZGxlLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGRlZmluZWRfdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApO1xuXHRcdFx0aWYoIGlzX29iamVjdF9saWtlKCAkZGVmaW5lZF92YXJzICkgKSB7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGRlZmluZWRfdmFycyApIHtcblx0XHRcdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGRlZmluZWRfdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0XHQkanNvblsgJGRlZmluZWRfdmFyc1sgJGtleSBdIF0gPSBXUE9uaW9uLndpbmRvd0FyZ3MoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRXUE9uaW9uLmRlYnVnX2luZm8gPSAkanNvbjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkaGFuZGxlLm9uKCAnY2xpY2snLCAoICggZSApID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHN3YWwoIHtcblx0XHRcdFx0dGl0bGU6IFdQT25pb24udHh0KCAnZ2xvYmFsX2pzb25fb3V0cHV0JywgJ0dsb2JhbCBXUE9uaW9uIERlYnVnIERhdGEnICksXG5cdFx0XHRcdGh0bWw6IGpRdWVyeSggJyN3cG9uaW9uZGVidWdpbmZvcG9wdXAgPiBkaXYnICksXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogV1BPbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnR2V0IEpTT04gT3V0cHV0JyApLFxuXHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoKSA9PiBzd2FsLmVuYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0b25PcGVuOiAoKSA9PiB7XG5cdFx0XHRcdFx0alF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgI3dwb25pb24tZ2xvYmFsLWRlYnVnLWNvbnRlbnQnICkuanNvblZpZXcoIFdQT25pb24uZGVidWdfaW5mbyApO1xuXHRcdFx0XHRcdHN3YWwuZGlzYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gc3dhbCgge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRodG1sOiAnPHRleHRhcmVhIHN0eWxlPVwibWluLXdpZHRoOjU1MHB4OyBtaW4taGVpZ2h0OjMwMHB4XCI+JyArIEpTT04uc3RyaW5naWZ5KCBXUE9uaW9uLmRlYnVnX2luZm8gKSArICc8L3RleHRhcmVhPicsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGFuZCBSZXRyaXZlcyBWYWx1ZXMgZnJvbSAkd3Bvbmlvbi5zZXR0aW5nc1xuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgb3B0aW9uKCAka2V5LCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IFdQT25pb24uc2V0dGluZ3NfYXJncztcblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkge1xuXHRcdFx0cmV0dXJuICRhcmdzWyAka2V5IF07XG5cdFx0fVxuXHRcdHJldHVybiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgV1BPbmlvbiBEZWJ1ZyBpcyBlbmFibGVkLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc19kZWJ1ZygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdkZWJ1ZycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXIgQWxsIEZpZWxkIEpTIENvZGVzLlxuXHQgKi9cblx0c3RhdGljIGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBXUE9uaW9uLmlzX2RlYnVnKCkgJiYgaXNfbnVsbCggV1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHRsZXQgJHZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKSxcblx0XHRcdFx0JGpzb24gPSB7fSxcblx0XHRcdFx0JHV0eHQgPSBXUE9uaW9uLnR4dCggJ3VubW9kaWZpZWRfZGVidWcnICksXG5cdFx0XHRcdCRtdHh0ID0gV1BPbmlvbi50eHQoICdtb2RpZmllZF9kZWJ1ZycgKTtcblxuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkdmFycyApIHtcblx0XHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICR2YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRsZXQgJGRhdGEgICAgICAgICAgICAgICAgICAgICAgID0gV1BPbmlvbi53aW5kb3dBcmdzKCAkdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXSAgICAgICAgICA9IHt9O1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF1bICR1dHh0IF0gPSAkZGF0YS5kZWJ1Z19pbmZvIHx8ICRkYXRhO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF1bICRtdHh0IF0gPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0V1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvID0gJGpzb247XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBBamF4IFdyYXBwZXIgRm9yIGpRdWVyeS5BamF4KClcblx0ICogQHBhcmFtICRhY3Rpb25cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqIEBwYXJhbSAkb25TdWNjZXNzXG5cdCAqIEBwYXJhbSAkb25FcnJvclxuXHQgKiBAcGFyYW0gJG9uQWx3YXlzXG5cdCAqL1xuXHRzdGF0aWMgYWpheCggJGFjdGlvbiA9ICcnLCAkZGF0YSA9IHt9LCAkb25TdWNjZXNzID0gZmFsc2UsICRvbkVycm9yID0gZmFsc2UsICRvbkFsd2F5cyA9IGZhbHNlICkge1xuXHRcdGxldCAkZGVmYXVsdHMgPSB7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHR1cmw6IFdQT25pb24ub3B0aW9uKCAnYWpheF91cmwnICksXG5cdFx0XHRcdG9uU3VjY2VzczogZmFsc2UsXG5cdFx0XHRcdG9uQWx3YXlzOiBmYWxzZSxcblx0XHRcdFx0b25FcnJvcjogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0JGFqYXggICAgID0gZmFsc2U7XG5cblx0XHRpZiggaXNfb2JqZWN0X2xpa2UoICRhY3Rpb24gKSApIHtcblx0XHRcdCRkYXRhID0gJGFjdGlvbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGRlZmF1bHRzLnVybCArPSAnJicgKyBXUE9uaW9uLm9wdGlvbiggJ2FqYXhfYWN0aW9uX2tleScgKSArICc9JyArICRhY3Rpb247XG5cdFx0fVxuXG5cdFx0JGRlZmF1bHRzICA9IGFycmF5X21lcmdlKCAkZGVmYXVsdHMsICRkYXRhICk7XG5cdFx0JG9uU3VjY2VzcyA9ICggaXNfdW5kZWZpbmVkKCAkb25TdWNjZXNzICkgfHwgZmFsc2UgPT09ICRvblN1Y2Nlc3MgKSA/ICRkZWZhdWx0cy5vblN1Y2Nlc3MgOiAkb25TdWNjZXNzO1xuXHRcdCRvbkFsd2F5cyAgPSAoIGlzX3VuZGVmaW5lZCggJG9uRXJyb3IgKSB8fCBmYWxzZSA9PT0gJG9uRXJyb3IgKSA/ICRkZWZhdWx0cy5vbkFsd2F5cyA6ICRvbkFsd2F5cztcblx0XHQkb25FcnJvciAgID0gKCBpc191bmRlZmluZWQoICRvbkFsd2F5cyApIHx8IGZhbHNlID09PSAkb25BbHdheXMgKSA/ICRkZWZhdWx0cy5vbkVycm9yIDogJG9uRXJyb3I7XG5cdFx0JGFqYXggICAgICA9IGpRdWVyeS5hamF4KCAkZGVmYXVsdHMgKTtcblxuXG5cdFx0aWYoICRvblN1Y2Nlc3MgKSB7XG5cdFx0XHQkYWpheC5kb25lKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25TdWNjZXNzLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25FcnJvciApIHtcblx0XHRcdCRhamF4LmZhaWwoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkVycm9yLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25BbHdheXMgKSB7XG5cdFx0XHQkYWpheC5hbHdheXMoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkFsd2F5cywgcmVzICkgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRhamF4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgV1BPbmlvbiBUZW1wbGF0ZSBmb3IgdW5kZXJzY29yZS5cblx0ICogQHBhcmFtICRpZFxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0pOiAqfVxuXHQgKi9cblx0c3RhdGljIHRlbXBsYXRlKCAkaWQgKSB7XG5cdFx0bGV0IGNvbXBpbGVkLFxuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZXZhbHVhdGU6IC88IyhbXFxzXFxTXSs/KSM+L2csXG5cdFx0XHRcdGludGVycG9sYXRlOiAvXFx7XFx7XFx7KFtcXHNcXFNdKz8pXFx9XFx9XFx9L2csXG5cdFx0XHRcdGVzY2FwZTogL1xce1xceyhbXlxcfV0rPylcXH1cXH0oPyFcXH0pL2csXG5cdFx0XHRcdHZhcmlhYmxlOiAnZGF0YSdcblx0XHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0XHRjb21waWxlZCA9IGNvbXBpbGVkIHx8IF8udGVtcGxhdGUoICRpZCwgb3B0aW9ucyApO1xuXHRcdFx0cmV0dXJuIGNvbXBpbGVkKCBkYXRhICk7XG5cdFx0fTtcblx0fVxuXG5cdC8vQHRvZG8gTWlncmF0ZSBQbHVnaW4gRGVidWcgSW5mby5cbn1cbiIsImltcG9ydCB7IGFycmF5X21lcmdlLCBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRzdGF0aWMgYWRkKCAka2V5LCAkdmFsdWUgKSB7XG5cdFx0aWYoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cblx0XHRpZiggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSAkdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gYXJyYXlfbWVyZ2UoICR2YWx1ZSwgdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZ2V0KCAka2V5LCAkZGVmYXVsdCA9IGZhbHNlICkge1xuXHRcdGlmKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkgPyAkZGVmYXVsdCA6IHRoaXMuZGVidWdfaW5mb1sgJGtleSBdO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2hlbHBlcnMvZGVwZW5kZW5jeSc7XG5pbXBvcnQgeyBhcnJheV9tZXJnZSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkZWxlbWVudCA9IHVuZGVmaW5lZCwgcGFyYW0gPSB7fSApIHtcblx0XHR0aGlzLnBhcmFtICAgICAgICAgPSBhcnJheV9tZXJnZSggeyBuZXN0YWJsZTogZmFsc2UsIHBhcmVudDogZmFsc2UgfSwgcGFyYW0gKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuYmFzZSAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuYmFzZS4kZWwgICAgICA9ICRlbGVtZW50O1xuXHRcdHRoaXMuYmFzZS5pbml0ICAgICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS5ydWxlc2V0ID0galF1ZXJ5LmRlcHMuY3JlYXRlUnVsZXNldCgpO1xuXHRcdFx0dGhpcy5iYXNlLmRlcFJvb3QoKTtcblx0XHRcdGpRdWVyeS5kZXBzLmVuYWJsZSggdGhpcy5iYXNlLiRlbCwgdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0c2hvdzogKCBlbCApID0+IHtcblx0XHRcdFx0XHRlbC5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKTtcblx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhpZGU6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0ZWwuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5hZGRDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsb2c6IGZhbHNlLFxuXHRcdFx0XHRjaGVja1RhcmdldHM6IGZhbHNlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cdFx0dGhpcy5iYXNlLmluc3RhbmNlID0gW107XG5cdFx0dGhpcy5iYXNlLmRlcFJvb3QgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLiRlbC5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJy53cG9uaW9uLWhhcy1kZXBlbmRlbmN5JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlzLmJhc2UuaW5zdGFuY2UgPSBuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgJHRoaXMuYmFzZS5ydWxlc2V0LCB7XG5cdFx0XHRcdFx0XHRuZXN0YWJsZTogJHRoaXMucGFyYW0ubmVzdGFibGUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6ICggdHJ1ZSA9PT0gJHRoaXMucGFyYW0ubmVzdGFibGUgKSA/ICR0aGlzLmJhc2UuJGVsIDogJHRoaXMucGFyYW0ucGFyZW50LFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHR0aGlzLmJhc2UuaW5pdCgpO1xuXHR9XG59XG4iLCIvL2ltcG9ydCB7IGFycmF5X21lcmdlLCBlbXB0eSwgaXNfY2FsbGFibGUsIGlzX2pxdWVyeSwgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG4vL2NvbnN0IHRvX2pxdWVyeSAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLnRvX2pxdWVyeTtcbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbi8qIGdsb2JhbCBjb25zb2xlOnRydWUgKi9cblxuY29uc3QgYXJyYXlfbWVyZ2UgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuYXJyYXlfbWVyZ2U7XG5jb25zdCBlbXB0eSAgICAgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5lbXB0eTtcbmNvbnN0IGlzX2NhbGxhYmxlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2NhbGxhYmxlO1xuY29uc3QgaXNfanF1ZXJ5ICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfanF1ZXJ5O1xuY29uc3QgaXNfdW5kZWZpbmVkID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfdW5kZWZpbmVkO1xuXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuL2RlYnVnJztcbmltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuL21vZHVsZSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0aW9uIGZyb20gJy4uL2NvcmUvdmFsaWRhdGlvbic7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBBYnN0cmFjdCBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0LCAkY29uZmlnID0gbnVsbCApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udGV4dCApO1xuXHRcdHRoaXMuc2V0X2FyZ3MoIGZhbHNlICk7XG5cdFx0dGhpcy5maWVsZF9kZWJ1ZygpO1xuXHRcdHRoaXMuY29uZmlnID0gJGNvbmZpZztcblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmpzX2Vycm9yX2hhbmRsZXIoKTtcblx0XHR0aGlzLmpzX3ZhbGlkYXRvcigpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdH1cblxuXHRqc19lcnJvcl9oYW5kbGVyKCBlbGVtZW50ID0gdGhpcy5lbGVtZW50ICkge1xuXHRcdGVsZW1lbnQub24oICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsICc+IC53cG9uaW9uLWZpZWxkc2V0IDppbnB1dCcsICggZSwgZGF0YSApID0+IHRoaXMuanNfZXJyb3IoIGRhdGEgKSApO1xuXHR9XG5cblx0anNfdmFsaWRhdG9yKCkge1xuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApICkge1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApIHtcblx0XHRcdFx0dGhpcy5tYXliZV9qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bWF5YmVfanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCBXUE9uaW9uX1ZhbGlkYXRpb24uZ2V0X2Zvcm0oKSApIHtcblx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICk7XG5cdFx0fVxuXHR9XG5cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGNvbnNvbGUubG9nKCBXUE9uaW9uX1ZhbGlkYXRpb24uZ2V0X2Zvcm0oKSApO1xuXHRcdGlmKCBXUE9uaW9uX1ZhbGlkYXRpb24uZ2V0X2Zvcm0oKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVfYXJncyggJGFyZywgJGtleSA9IGZhbHNlICkge1xuXHRcdGxldCAkYXJncyAgID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApLFxuXHRcdFx0JGV4aXN0cyA9ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHQkZXhpc3RzICAgICA9IGFycmF5X21lcmdlKCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0sICRleGlzdHMgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGtleSApIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdID0gJGFyZ3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdWyAka2V5IF0gPSAkYXJncztcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksICRleGlzdHMgKTtcblx0XHRyZXR1cm4gJGFyZ3M7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggZmFsc2UgIT09ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0ICRpbmZvID0gdGhpcy5vcHRpb24oICdkZWJ1Z19pbmZvJyApO1xuXG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRpbmZvICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IGVtcHR5KCAkaW5mbyApICkge1xuXHRcdFx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiAkaW5mbywgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0ICRmb3VuZCA9IGZhbHNlO1xuXHRcdGlmKCAhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdGxldCAkSUQgICA9IHRoaXMuaWQoKSxcblx0XHRcdFx0JGVsZW0gPSBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyAkSUQgKyAnXScgKTtcblx0XHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRcdCRmb3VuZCA9ICRlbGVtO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZm91bmQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHNlICE9PSAkZm91bmQgKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKVxuXHRcdFx0XHQgIC50aXBweSgge1xuXHRcdFx0XHRcdCAgY29udGVudDogJHdwb25pb24udHh0KCAnY2xpY2tfdG9fdmlld19kZWJ1Z19pbmZvJywgJ0NsaWNrIFRvIFZpZXcgRmllbGQgRGVidWcgSW5mbycgKSxcblx0XHRcdFx0XHQgIGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdCAgYXJyb3dUeXBlOiAncm91bmQnLFxuXHRcdFx0XHRcdCAgcGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0XHQgIHRoZW1lOiAnbGlnaHQnLFxuXHRcdFx0XHRcdCAgYW5pbWF0aW9uOiAnc2NhbGUnXG5cdFx0XHRcdCAgfSApO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGQgICAgICAgICAgPSAkdGhpcy5pZCgpICsgJ2RlYnVnSU5GTycsXG5cdFx0XHRcdFx0JG5vdGljZV90eHQgPSAnPHAgY2xhc3M9XFwnd3Bvbmlvbi1maWVsZC1kZWJ1Zy1ub3RpY2VcXCc+JyArICR3cG9uaW9uLm9wdGlvbiggJ2RlYnVnX25vdGljZScgKSArICc8L3A+Jyxcblx0XHRcdFx0XHQkZWxlbSAgICAgICA9IGpRdWVyeSggJzxkaXYgaWQ9XCInICsgJGQgKyAnXCIgY2xhc3M9XCJ3cG9uaW9uLWZpZWxkLWRlYnVnLXBvcHVwXCIgPjxkaXYgaWQ9XCInICsgJGQgKyAnXCIgPjwvZGl2PicgKyAkbm90aWNlX3R4dCArICc8L2Rpdj4nICk7XG5cdFx0XHRcdGxldCAkZGF0YSAgICAgICA9ICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApO1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0aHRtbDogJGVsZW0sXG5cdFx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6ICR3cG9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdBcyBKU09OJyApLFxuXHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdFx0b25PcGVuOiAoKSA9PiBqUXVlcnkoICcjc3dhbDItY29udGVudCA+IGRpdiA+ICMnICsgJGQgKS5qc29uVmlldyggJGRhdGEgKVxuXHRcdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApICkgKyAnPC90ZXh0YXJlYT4nXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCAud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlLWdlbicgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0aHRtbDogdGhpcy5vcHRpb24oICdkZWJ1Z19maWVsZF9jb2RlJyApLFxuXHRcdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRoZWlnaHRBdXRvOiBmYWxzZSxcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdG9wdGlvbnMoKSB7XG5cdFx0aWYoIHRoaXMuX2FyZ3MgPT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5fYXJncyA9ICR3cG9uaW9uLndpbmRvd0FyZ3MoIHRoaXMuaWQoKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYXJncztcblx0fVxuXG5cdG9wdGlvbiggJGtleSA9ICcnLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IHRoaXMub3B0aW9ucygpO1xuXHRcdHJldHVybiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApID8gJGFyZ3NbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0aWQoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApO1xuXHR9XG5cblx0bW9kdWxlKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ21vZHVsZScsIGZhbHNlICk7XG5cdH1cblxuXHRwbHVnaW5faWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAncGx1Z2luX2lkJywgZmFsc2UgKTtcblx0fVxuXG5cdGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSApIHtcblx0XHRsZXQgJGFqYXhfa2V5ICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICk7XG5cdFx0bGV0ICRkZWZhdWx0ICAgICAgICAgID0ge1xuXHRcdFx0cGx1Z2luX2lkOiB0aGlzLnBsdWdpbl9pZCgpLFxuXHRcdFx0bW9kdWxlOiB0aGlzLm1vZHVsZSgpLFxuXHRcdH07XG5cdFx0JGRlZmF1bHRbICRhamF4X2tleSBdID0gJGFjdGlvbjtcblx0XHQkZGF0YS5kYXRhICAgICAgICAgICAgPSAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRkYXRhLmRhdGEgKSApID8gYXJyYXlfbWVyZ2UoICRkZWZhdWx0LCAkZGF0YS5kYXRhICkgOiAkZGVmYXVsdDtcblxuXHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAkZGF0YSApO1xuXHR9XG5cblx0aW5pdF9maWVsZCggJGVsZW0sICR0eXBlICkge1xuXHRcdGxldCAkX2luc3RhbmNlcyA9IFtdO1xuXHRcdGlmKCAhaXNfanF1ZXJ5KCAkZWxlbSApICkge1xuXHRcdFx0JGVsZW0gPSB0aGlzLmVsZW1lbnQuZmluZCggJGVsZW0gKTtcblx0XHR9XG5cdFx0bGV0ICR0aGlzID0gdGhpcztcblx0XHQkZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkY2xhc3MgPSAkd3Bvbmlvbi5nZXRfZmllbGRfY2xhc3MoICR0eXBlICk7XG5cdFx0XHRpZiggZmFsc2UgIT09ICRjbGFzcyApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiggaXNfY2FsbGFibGUoICRjbGFzcyApICkge1xuXHRcdFx0XHRcdFx0JF9pbnN0YW5jZXMucHVzaCggbmV3ICRjbGFzcyggalF1ZXJ5KCB0aGlzICkgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggalF1ZXJ5KCB0aGlzICkgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ0Vycm9yOiAnICsgZSArICcgfCBGb3IgOiAnICsgJHR5cGUgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0cmVsb2FkKCkge1xuXHRcdHdwLmhvb2tzLmFkZEFjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pY29uX3BpY2tlcicsICdpY29uX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJywgJ2ZvbnRfc2VsZWN0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1hY2NvcmRpb24nLCAnYWNjb3JkaW9uJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ3JvdXAnLCAnZ3JvdXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0Om5vdCgud3Bvbmlvbi1pbnB1dG1hc2spJywgJ3RleHQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0YXJlYScsICd0ZXh0YXJlYScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2tncm91bmQnLCAnYmFja2dyb3VuZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlX3NlbGVjdCcsICdpbWFnZV9zZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zZWxlY3QnLCAnc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3dpdGNoZXInLCAnc3dpdGNoZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9wYWxldHRlJywgJ2NvbG9yX3BhbGV0dGUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InLCAnd3BfZWRpdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZmllbGRzZXQnLCAnZmllbGRzZXQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnaW5wdXRbZGF0YS13cG9uaW9uLWlucHV0bWFza10nLCAnaW5wdXRtYXNrJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfbGluaycsICd3cF9saW5rcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNoZWNrYm94JywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtcmFkaW8nLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1rZXlfdmFsdWUnLCAna2V5dmFsdWVfcGFpcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BpY2tlcicsICdjb2xvcl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1kYXRlX3BpY2tlcicsICdkYXRlX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdhbGxlcnknLCAnZ2FsbGVyeScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXVwbG9hZCcsICd1cGxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pbWFnZScsICdpbWFnZV91cGxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10YWInLCAnanF1ZXJ5X3RhYicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1maWVsZC10b29sdGlwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nb29nbGVfbWFwcycsICdnb29nbGVfbWFwcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1oZWxwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24td3JhcC10b29sdGlwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jbG9uZScsICdjbG9uZV9lbGVtZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3QyJywgJ3NlbGVjdDInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLmNob3NlbicsICdjaG9zZW4nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdGl6ZScsICdzZWxlY3RpemUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zb3J0ZXInLCAnc29ydGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdHlwb2dyYXBoeScsICd0eXBvZ3JhcGh5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtb2VtYmVkJywgJ29lbWJlZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWhlYWRpbmcnLCAnaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN1YmhlYWRpbmcnLCAnc3ViaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbnRlbnQnLCAnY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWphbWJvX2NvbnRlbnQnLCAnamFtYm9fY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2t1cCcsICdiYWNrdXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1ub3RpY2UnLCAnbm90aWNlJyApO1xuXG5cdFx0d3AuaG9va3MuYWRkQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfcmVsb2FkJyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0X2FyZ3MoICRhcmdzICkge1xuXHRcdHRoaXMuX2FyZ3MgPSAkYXJncztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldF9maWVsZF9wYXJlbnRfYnlfaWQoICRlbGVtICkge1xuXHRcdGxldCAkSUQgPSAkd3Bvbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdHJldHVybiBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRJRCArICdcIl0nICk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQgKSB7XG5cdFx0aWYoICEkc2VsZWN0b3IualF1ZXJ5ICkge1xuXHRcdFx0JHNlbGVjdG9yID0galF1ZXJ5KCAkc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0dGhpcy5zZXRfZWxlbWVudCggJHNlbGVjdG9yICk7XG5cdFx0dGhpcy5zZXRfY29udHh0KCAkY29udGV4dCApO1xuXHRcdHRoaXMubW9kdWxlX2luaXQoKTtcblx0fVxuXG5cdG1vZHVsZV9pbml0KCkge1xuXHR9XG5cblx0c2V0X2VsZW1lbnQoICRlbGVtICkge1xuXHRcdGlmKCAhJGVsZW0ualF1ZXJ5ICkge1xuXHRcdFx0JGVsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbSA9ICRlbGVtO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0X2NvbnR4dCggJGNvbnR4dCApIHtcblx0XHR0aGlzLmNvbnRleHQgPSAkY29udHh0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IGhvb2soKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy53cC5ob29rcztcblx0fVxuXG5cdGdldCBlbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW07XG5cdH1cblxuXHRnZXQgY29udHh0KCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHQ7XG5cdH1cblxufVxuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbl9WYWxpZGF0b3Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmZvcm0gID0gV1BPbmlvbl9WYWxpZGF0b3IuZ2V0X2Zvcm0oKTtcblx0XHR0aGlzLnJ1bGVzID0ge1xuXHRcdFx0aW52YWxpZEhhbmRsZXI6ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnI3B1Ymxpc2gnICkucmVtb3ZlQ2xhc3MoICdidXR0b24tcHJpbWFyeS1kaXNhYmxlZCcgKTtcblx0XHRcdFx0alF1ZXJ5KCAnI2FqYXgtbG9hZGluZycgKS5hdHRyKCAnc3R5bGUnLCAnJyApO1xuXHRcdFx0XHR0aGlzLmZvcm0uc2libGluZ3MoICcjbWVzc2FnZScgKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5mb3JtLmJlZm9yZSggJzxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJlcnJvclwiPjxwPicgKyAkd3Bvbmlvbi50eHQoICd2YWxpZGF0aW9uX3N1bW1hcnknICkgKyAnPC9wPjwvZGl2PicgKTtcblx0XHRcdH0sXG5cdFx0XHRpZ25vcmU6ICcud3Bvbmlvbi1kZXBlbmRlbnQsLndwb25pb24tdmFsaWRhdGlvbi1pZ25vcmUnLFxuXHRcdFx0ZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKCBlcnJvciwgZWxlbWVudCApIHtcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCB7IGVycm9yLCBlbGVtZW50IH0gKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvckNsYXNzOiAnd3Bvbmlvbi1lcnJvcicsXG5cdFx0XHRlcnJvckVsZW1lbnQ6ICdwJ1xuXHRcdH07XG5cdFx0aWYoIHRoaXMuZm9ybSApIHtcblx0XHRcdHRoaXMuZm9ybS52YWxpZGF0ZSggdGhpcy5ydWxlcyApO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXRfZm9ybSgpIHtcblx0XHRpZiggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSNwb3N0JyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS5sZW5ndGggPiAwICYmIGpRdWVyeSggJ2lucHV0I29yaWdpbmFsX3B1Ymxpc2gnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdC8vcmV0dXJuIGpRdWVyeSggJ2Zvcm0jcG9zdCcgKTtcblx0XHR9XG5cdFx0cmV0dXJuICggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApID8galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkgOiBmYWxzZTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYWNjb3JkaW9uKCB7XG5cdFx0XHRcdGhlYWRlcjogJz4gLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdGFuaW1hdGU6IDE1MCxcblx0XHRcdFx0aGVpZ2h0U3R5bGU6ICdjb250ZW50Jyxcblx0XHRcdFx0YWN0aXZlOiBqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2lzX29wZW4nICksXG5cdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0J2hlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LXJpZ2h0Jyxcblx0XHRcdFx0XHQnYWN0aXZlSGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctZG93bidcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy50b29sdGlwKCk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVfYmFja3VwX2ltcG9ydCggZS5jdXJyZW50VGFyZ2V0ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdhLmRvd25sb2FkX2JhY2t1cCcgKS5vbiggJ2NsaWNrJywgKCBlICkgPT4ge1xuXHRcdFx0bGV0ICRmaWxlID0gdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKTtcblx0XHRcdCRmaWxlICAgICA9ICRmaWxlICsgJy0nICsgdGhpcy5tb2R1bGUoKTtcblx0XHRcdGxldCBkYXRlICA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgc3RyICAgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyAoIGRhdGUuZ2V0TW9udGgoKSArIDEgKSArICctJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy0nICsgZGF0ZS5nZXRIb3VycygpICsgZGF0ZS5nZXRNaW51dGVzKCkgKyBkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdCRmaWxlICAgICA9ICRmaWxlICsgJy0nICsgc3RyO1xuXHRcdFx0dGhpcy5mb3JjZV9kb3dubG9hZCggSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX3RleHRhcmVhIHRleHRhcmVhJyApLmh0bWwoKSApLCAkZmlsZSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnYS5uZXdfYmFja3VwICcgKS5vbiggJ2NsaWNrJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5ibG9ja19mb3JtKCk7XG5cdFx0XHR0aGlzLmFqYXgoICduZXctbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCB0cnVlICk7XG5cdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMnICkuaHRtbCggZS5kYXRhICk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQWx3YXlzOiAoIGUgKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy5kZWxldGVfYmFja3VwJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5ibG9ja19mb3JtKCk7XG5cdFx0XHRsZXQgJGlucyA9IGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLmRlbGV0ZV9iYWNrdXAnICkudGlwcHlfZ2V0KCk7XG5cdFx0XHRpZiggJGlucy5pbnN0YW5jZXNbIDAgXSApIHtcblx0XHRcdFx0JGlucy5pbnN0YW5jZXNbIDAgXS5kZXN0cm95KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFqYXgoICdkZWxldGUtbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHRcdGJhY2t1cF9pZDogalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzJyApLmh0bWwoIGUuZGF0YSApO1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvbkFsd2F5czogKCkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcucmVzdG9yZV9iYWNrdXAnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLnJlc3RvcmVfYmFja3VwKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnYmx1cicsICcucmVzdG9yZV90ZXh0YXJlYSB0ZXh0YXJlYScsICggZSApID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIEpTT04ucGFyc2UoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCkgKSApO1xuXHRcdFx0XHRqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCggJycgKS5odG1sKCAnJyApO1xuXHRcdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCB0aGlzLm9wdGlvbiggJ2ludmFsaWRfZm9ybWF0JyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0c3dhbF9lcnJvciggbXNnICkge1xuXHRcdHN3YWwoIHtcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR0aXRsZTogbXNnXG5cdFx0fSApO1xuXHR9XG5cblx0dG9vbHRpcCggcmVtb3ZlID0gZmFsc2UgKSB7XG5cdFx0bGV0ICR0aGlzID0gdGhpcztcblx0XHRpZiggdHJ1ZSA9PT0gcmVtb3ZlICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzIGxpJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJGVsZW0gPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBhJyApWyAwIF07XG5cdFx0XHRcdCRlbGVtLl90aXBweS5kZXN0cm95KCk7XG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cyBsaScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHRoaXMuc2hvd190b29sdGlwKCBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPmEnICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRibG9ja19mb3JtKCkge1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLmF0dHIoICdkaXNhYmxlZCcsICdkaXNhYmxlZCcgKTtcblx0fVxuXG5cdHVuYmxvY2tfZm9ybSgpIHtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkuZmluZCggJ2J1dHRvbicgKS5yZW1vdmVBdHRyKCAnZGlzYWJsZWQnICk7XG5cdH1cblxuXHRmb3JjZV9kb3dubG9hZCggZXhwb3J0T2JqLCBleHBvcnROYW1lICkge1xuXHRcdHZhciBkYXRhU3RyICAgICAgICAgICAgPSBcImRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoIEpTT04uc3RyaW5naWZ5KCBleHBvcnRPYmogKSApO1xuXHRcdHZhciBkb3dubG9hZEFuY2hvck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYScgKTtcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCAnaHJlZicsIGRhdGFTdHIgKTtcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCAnZG93bmxvYWQnLCBleHBvcnROYW1lICsgJy5qc29uJyApO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRvd25sb2FkQW5jaG9yTm9kZSApOyAvLyByZXF1aXJlZCBmb3IgZmlyZWZveFxuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5jbGljaygpO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5yZW1vdmUoKTtcblx0fVxuXG5cdHJlc3RvcmVfYmFja3VwKCBiYWNrdXBfaWQgKSB7XG5cdFx0dGhpcy5ibG9ja19mb3JtKCk7XG5cdFx0dGhpcy5hamF4KCAncmVzdG9yZS1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcblx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXG5cdFx0XHRcdGJhY2t1cF9pZDogYmFja3VwX2lkLFxuXHRcdFx0fSxcblx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xuXHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdHRpdGxlOiBlLmRhdGEsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbkFsd2F5czogKCkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcblx0XHR9ICk7XG5cdH1cblxuXHRoYW5kbGVfYmFja3VwX2ltcG9ydCggJGVsZW0gKSB7XG5cdFx0aWYoICRlbGVtLmZpbGVzICYmICRlbGVtLmZpbGVzWyAwIF0gKSB7XG5cdFx0XHRsZXQgJGZpbGUgPSAkZWxlbS5maWxlc1sgMCBdO1xuXG5cdFx0XHRpZiggJGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL2pzb24nICkge1xuXHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIHRoaXMub3B0aW9uKCAnaW52YWxpZF9mb3JtYXQnICkgKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bGV0IHJlYWRlciAgICA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdHJlYWRlci5vbmxvYWQgPSAoIGUgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggZS50YXJnZXQucmVzdWx0ICkgKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoICRmaWxlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2hvd190b29sdGlwKCAkZWxlbSApIHtcblx0XHRsZXQgJGJhY2t1cGlkID0gJGVsZW0uYXR0ciggJ2RhdGEtYmFja3VwaWQnICk7XG5cdFx0dGlwcHkoICRlbGVtWyAwIF0sIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0YXBwZW5kVG86IHRoaXMuZWxlbWVudFsgMCBdLFxuXHRcdFx0YXJyb3dUeXBlOiAncm91bmQnLFxuXHRcdFx0Y29udGVudDogJzxidXR0b24gZGF0YS1iYWNrdXBpZD1cIicgKyAkYmFja3VwaWQgKyAnXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzdG9yZV9iYWNrdXAgYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNtYWxsXCI+PGkgY2xhc3M9XCJkYXNoaWNvbnMtaW1hZ2Utcm90YXRlIGRhc2hpY29uc1wiPjwvaT4gPC9idXR0b24+IHwgPGJ1dHRvbiBkYXRhLWJhY2t1cGlkPVwiJyArICRiYWNrdXBpZCArICdcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGVfYmFja3VwIGJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5IGJ1dHRvbi1zbWFsbFwiPjxpIGNsYXNzPVwiZGFzaGljb25zLXRyYXNoIGRhc2hpY29uc1wiPjwvaT4gPC9idXR0b24+Jyxcblx0XHRcdGludGVyYWN0aXZlOiB0cnVlLFxuXHRcdFx0dGhlbWU6ICd0cmFuc2x1Y2VudCcsXG5cdFx0XHRvblNob3duOiAoKSA9PiB7XG5cdFx0XHRcdGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLmRlbGV0ZV9iYWNrdXAnICkudGlwcHkoIHtcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHRhcnJvd1R5cGU6ICdza2lubnknLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ2RlbGV0ZScgKSxcblx0XHRcdFx0XHR0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG5cdFx0XHRcdFx0aW50ZXJhY3RpdmU6IGZhbHNlLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5yZXN0b3JlX2JhY2t1cCcgKS50aXBweSgge1xuXHRcdFx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdGFycm93VHlwZTogJ3NraW5ueScsXG5cdFx0XHRcdFx0Y29udGVudDogJHdwb25pb24udHh0KCAncmVzdG9yZScgKSxcblx0XHRcdFx0XHR0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHR9ICk7XG5cdH1cblxuXHRnZXRfZXh0cmFfdmFsdWUoKSB7XG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jcG9zdCBpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3Bvc3QgaW5wdXQjcG9zdF9JRCcgKS52YWwoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRpbnB1dHMgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0Lndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dFt0eXBlPXJhZGlvXScgKS5vbiggJ2NsaWNrJywgKCkgPT4gJGlucHV0cy5yZW1vdmVBdHRyKCAnbmFtZScgKSApO1xuXG5cdFx0XHQkaW5wdXRzLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dLGlucHV0W3R5cGU9Y2hlY2tib3hdJyApLnByb3AoICdjaGVja2VkJywgdHJ1ZSApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCAnbmFtZScsIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuY2hvc2VuKCB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ2Nob3NlbicsIHt9ICkgKSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG4vKiBnbG9iYWwgc2V0VGltZW91dDp0cnVlICovXG4vKiBnbG9iYWwgd3Bvbmlvbl9maWVsZDp0cnVlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnICAgICAgICA9IHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnY2xvbmUnLCB7fSApICk7XG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRjbG9uZV93cmFwID0gJGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLWNsb25lLXdyYXAnICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLWFkZF0nICksXG5cdFx0XHQvLyRyZW1vdmVfYnRuID0gJGNsb25lX3dyYXAuZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtcmVtb3ZlXScgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gKCAkYXJnLmxpbWl0ICE9PSB1bmRlZmluZWQgKSA/ICRhcmcubGltaXQgOiBmYWxzZSxcblx0XHRcdC8vJGlzX3RvYXN0ICAgPSAoICRhcmcudG9hc3RfZXJyb3IgIT09IHVuZGVmaW5lZCApID8gJGFyZy50b2FzdF9lcnJvciA6IHRydWUsXG5cdFx0XHQkZXJvcl9tc2cgICA9ICRhcmcuZXJyb3JfbXNnLFxuXHRcdFx0JHNvcnQgICAgICAgPSAoICRhcmcuc29ydCAhPT0gZmFsc2UgKSA/IHtcblx0XHRcdFx0aXRlbXM6ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRcdGhhbmRsZTogJy53cG9uaW9uLWZpZWxkLWNsb25lLXNvcnRlcicsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnd3Bvbmlvbi1jbG9uZXItcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRzdGFydDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICksXG5cdFx0XHRcdHN0b3A6ICggZXZlbnQsIHVpICkgPT4gdWkuaXRlbS5yZW1vdmVBdHRyKCAnc3R5bGUnICksXG5cdFx0XHR9IDogZmFsc2U7XG5cblx0XHQkY2xvbmVfd3JhcC5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiAkYWRkX2J0bixcblx0XHRcdGxpbWl0OiAkbGltaXQsXG5cdFx0XHRjbG9uZV9lbGVtOiAnLndwb25pb24tZmllbGQtY2xvbmUnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJ2Eud3Bvbmlvbi1yZW1vdmUnLFxuXHRcdFx0dGVtcGxhdGU6ICR0aGlzLm9wdGlvbiggJ2Nsb25lX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZSApID0+IHdwb25pb25fZmllbGQoICRlLmZpbmQoICc+IGRpdi53cG9uaW9uLWZpZWxkLWNsb25lOmxhc3QtY2hpbGQnICkgKS5yZWxvYWQoKSxcblx0XHRcdHNvcnRhYmxlOiAkc29ydCxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0LyppZiggJGlzX3RvYXN0ID09PSB0cnVlICkge1xuXHRcdFx0XHRcdC8vIEB0b2RvIEFkZCBUb2FzdCBPcHRpb24uXG5cdFx0XHRcdFx0LyEqd3BvLnRvc3QoIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZXJyb3JcIixcblx0XHRcdFx0XHRcdHRpdGxlOiAkZXJvcl9tc2csXG5cdFx0XHRcdFx0fSApOyohL1xuXHRcdFx0XHR9IGVsc2UgeyovXG5cdFx0XHRcdGxldCAkaHRtbCA9IGpRdWVyeSggJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgcm9sZT1cImFsZXJ0XCI+JyArICRlcm9yX21zZyArICc8L2Rpdj4nIClcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHQkYWRkX2J0bi5wYXJlbnQoKS5wcmVwZW5kKCAkaHRtbCApO1xuXHRcdFx0XHQkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmZhZGVJbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRfX0UgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiAkX19FLmZhZGVPdXQoICdzbG93JywgKCkgPT4gJF9fRS5yZW1vdmUoKSApLCAxMDAwICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0Ly99XG5cdFx0XHR9LFxuXHRcdFx0c2hvd19hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5zaG93LFxuXHRcdFx0aGlkZV9hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5oaWRlLFxuXHRcdH0gKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkud3BDb2xvclBpY2tlcigpO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ3NldHRpbmdzJyApICksXG5cdFx0XHQkdmlldztcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc2V0dGluZ3MudGhlbWUgKSApIHtcblx0XHRcdCR2aWV3ID0gJHNldHRpbmdzLnRoZW1lO1xuXHRcdFx0ZGVsZXRlICRzZXR0aW5ncy50aGVtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHZpZXcgPSAnZGVmYXVsdCc7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0alF1ZXJ5KCAnYm9keScgKVxuXHRcdFx0XHQuYXBwZW5kKCBqUXVlcnkoICc8ZGl2IGNsYXNzPVwid3Bvbmlvbi1kYXRlcGlja2VyLScgKyAkdmlldyArICdcIiBpZD1cIicgKyB0aGlzLmlkKCkgKyAnXCI+PC9kaXY+JyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1kYXRlcGlja2VyLXJhbmdlJyApICkge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKVsgMCBdO1xuXHRcdFx0aWYoICRzZXR0aW5ncy5wbHVnaW5zID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zID0gW107XG5cdFx0XHR9XG5cblx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zLnB1c2goIG5ldyByYW5nZVBsdWdpbiggeyBpbnB1dDogJGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLXRvLWRhdGVdJyApWyAwIF0gfSApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItZnJvbS1kYXRlXScgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQnICkuZmxhdHBpY2tyKCAkc2V0dGluZ3MgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGdldCB3ZWJzYWZlKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl93ZWJzYWZlX2ZvbnRzJyApO1xuXHR9XG5cblx0Z2V0IGdvb2dsZV9mb250cygpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ2ZvbnRzJyApO1xuXHR9XG5cblx0YnVpbGRfb3B0aW9ucyggZGF0YSApIHtcblx0XHRsZXQgJHJldHVybiA9ICcnO1xuXHRcdGZvciggbGV0ICRfZCBpbiBkYXRhICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIGRhdGFbICRfZCBdICkgKSB7XG5cdFx0XHRcdCRyZXR1cm4gKz0gYDxvcHRpb24gdmFsdWU9XCIkeyRfZH1cIj4ke2RhdGFbICRfZCBdfTwvb3B0aW9uPmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHRsZXQgJHZhbCAgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpLFxuXHRcdFx0XHQkaHRtbCA9IG51bGw7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLndlYnNhZmUuZm9udHMgWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMud2Vic2FmZS52YXJpYW50cyApO1xuXHRcdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgJHZhcmlhbnQgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkuaHRtbCggJGh0bWwgKTtcblxuXHRcdFx0aWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnY2hvc2VuJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hvc2VuOnVwZGF0ZWQnICk7XG5cdFx0XHR9IGVsc2UgaWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnc2VsZWN0MicgKSApIHtcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGh0bWxfdGVtcCA9ICR0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXG5cdFx0XHQkaW5wdXQgICAgID0gJGVsZW0uZmluZCggJ2lucHV0I2ltYWdlX2lkJyApLFxuXHRcdFx0JHByZXZpZXcgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3JyApLFxuXHRcdFx0d3BfbWVkaWFfZnJhbWUsXG5cdFx0XHQkYWRkICAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1hZGRdJyApLFxuXHRcdFx0JGVkaXQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktZWRpdF0nICksXG5cdFx0XHQkY2xlYXIgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1jbGVhcl0nICksXG5cdFx0XHQkbWFuYWdlICAgID0gZnVuY3Rpb24oICR0eXBlICkge1xuXHRcdFx0XHRsZXQgaWRzICAgPSAkaW5wdXQudmFsKCksXG5cdFx0XHRcdFx0d2hhdCAgPSAoICR0eXBlID09PSAnZWRpdCcgKSA/ICdlZGl0JyA6ICdhZGQnLFxuXHRcdFx0XHRcdHN0YXRlID0gKCB3aGF0ID09PSAnYWRkJyAmJiAhaWRzLmxlbmd0aCApID8gJ2dhbGxlcnknIDogJ2dhbGxlcnktZWRpdCc7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cblx0XHRcdFx0aWYoIHN0YXRlID09PSAnZ2FsbGVyeScgKSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdFx0XHRmcmFtZTogJ3Bvc3QnLFxuXHRcdFx0XHRcdFx0c3RhdGU6ICdnYWxsZXJ5Jyxcblx0XHRcdFx0XHRcdG11bHRpcGxlOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhLmdhbGxlcnkuZWRpdCggJ1tnYWxsZXJ5IGlkcz1cIicgKyBpZHMgKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCB3aGF0ID09PSAnYWRkJyApIHtcblx0XHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLnNldFN0YXRlKCAnZ2FsbGVyeS1saWJyYXJ5JyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAndXBkYXRlJywgZnVuY3Rpb24oIHNlbGVjdGlvbiApIHtcblx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRJZHMgPSBzZWxlY3Rpb24ubW9kZWxzLm1hcCggZnVuY3Rpb24oIGF0dGFjaG1lbnQgKSB7XG5cdFx0XHRcdFx0XHRsZXQgaXRlbSA9IGF0dGFjaG1lbnQudG9KU09OKCk7XG5cdFx0XHRcdFx0XHRpZiggaXRlbS5zaXplcyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCB0aHVtYiA9ICggdHlwZW9mIGl0ZW0uc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gaXRlbS5zaXplcy50aHVtYm5haWwudXJsIDogaXRlbS51cmwsXG5cdFx0XHRcdFx0XHRcdCR0bXAgID0galF1ZXJ5KCAkaHRtbF90ZW1wICk7XG5cdFx0XHRcdFx0XHQkdG1wLmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnLCBpdGVtLmlkICk7XG5cdFx0XHRcdFx0XHQkdG1wLmZpbmQoICdpbWcnICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBpdGVtLnVybCApLmF0dHIoICdzcmMnLCB0aHVtYiApLnJlbW92ZUNsYXNzKCAnaGlkZScgKTtcblx0XHRcdFx0XHRcdCRwcmV2aWV3LmFwcGVuZCggJHRtcCApO1xuXHRcdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWhlbHAnICkudGlwcHkoKTtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmlkO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRsZXQgJGU7XG5cdFx0XHRcdFx0Zm9yKCAkZSBpbiBzZWxlY3RlZElkcyApIHtcblx0XHRcdFx0XHRcdGlmKCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gZmFsc2UgfHwgc2VsZWN0ZWRJZHNbICRlIF0gPT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgc2VsZWN0ZWRJZHNbICRlIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRpbnB1dC52YWwoIHNlbGVjdGVkSWRzLmpvaW4oICcsJyApICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fTtcblxuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcblx0XHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRlZGl0LnNob3coKTtcblx0XHRcdFx0JGNsZWFyLnNob3coKTtcblx0XHRcdFx0JGFkZC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2FkZCcgKSApO1xuXG5cdFx0JGVkaXQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdlZGl0JyApICk7XG5cblx0XHQkY2xlYXIub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkY2xlYXIuaGlkZSgpO1xuXHRcdFx0JGVkaXQuaGlkZSgpO1xuXHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpLndwb25pb24taW1hZ2UtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBhcmVudCAgID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHRcdCRpbWFnZV9pZCA9ICRwYXJlbnQuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcgKSxcblx0XHRcdFx0JHZhbHVlICAgID0gJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKTtcblx0XHRcdGpRdWVyeS5lYWNoKCAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApLCBmdW5jdGlvbiggJGssICR2ICkge1xuXHRcdFx0XHRpZiggJHYgPT09ICRpbWFnZV9pZCApIHtcblx0XHRcdFx0XHQkdmFsdWUuc3BsaWNlKCAkaywgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRpbnB1dC52YWwoICR2YWx1ZS5qb2luKCAnLCcgKSApO1xuXHRcdFx0JHBhcmVudC5mYWRlT3V0KCAoKSA9PiAkcGFyZW50LnJlbW92ZSgpICk7XG5cdFx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHR9ICk7XG5cblx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblxuXHRcdGlmKCAkcHJldmlldy5oYXNDbGFzcyggJ2dhbGxlcnktc29ydGFibGUnICkgKSB7XG5cdFx0XHQkcHJldmlldy5zb3J0YWJsZSgge1xuXHRcdFx0XHRpdGVtczogJz4gZGl2Jyxcblx0XHRcdFx0Y3Vyc29yOiAnbW92ZScsXG5cdFx0XHRcdHNjcm9sbFNlbnNpdGl2aXR5OiA0MCxcblx0XHRcdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRoZWxwZXI6ICdjbG9uZScsXG5cdFx0XHRcdG9wYWNpdHk6IDAuNjUsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdGxldCAkaXRlbSA9IHVpLml0ZW07XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICd3aWR0aCcsICRpdGVtLndpZHRoKCkgKTtcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ2hlaWdodCcsICRpdGVtLmhlaWdodCgpICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cbiIsIi8qIGdsb2JhbCBnb29nbGU6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRtYXAgICAgICAgICAgICAgID0gdGhpcy5vcHRpb24oICdtYXAnLCB7fSApO1xuXHRcdCRtYXAuZGV0YWlscyAgICAgICAgICA9ICcjZ21hcF9maWVsZHNfJyArIHRoaXMuaWQoKTtcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xuXHRcdGlmKCAneWVzJyA9PT0gdGhpcy5vcHRpb24oICdzaG93X21hcCcgKSApIHtcblx0XHRcdCRtYXAubWFwID0gJyNnbWFwXycgKyB0aGlzLmlkKCk7XG5cdFx0fVxuXG5cdFx0bGV0ICRfaW5zdGFuY2UgPSB0aGlzLmVsZW0uZmluZCggJ2Rpdi5zZWFyY2hib3ggPiBpbnB1dCcgKTtcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcblx0XHQkX2luc3RhbmNlLmJpbmQoICdnZW9jb2RlOmRyYWdnZWQnLCAoIGV2ZW50LCBsYXRMbmcgKSA9PiB7XG5cdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcblx0XHRcdGdlb2NvZGVyLmdlb2NvZGUoIHtcblx0XHRcdFx0J2xvY2F0aW9uJzoge1xuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXG5cdFx0XHRcdFx0bG5nOiBwYXJzZUZsb2F0KCBsYXRMbmcubG5nKCkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0XHRcdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggJ2ZpbGxEZXRhaWxzJywgcmVzdWx0c1sgMCBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLyogZ2xvYmFsIHNldFRpbWVvdXQ6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGFkZCAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiBidXR0b25bZGF0YS13cG9uaW9uLWdyb3VwLWFkZF0nICksXG5cdFx0XHQkZ3JvdXBfd3JhcCA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAnICksXG5cdFx0XHQkbGltaXQgICAgICA9ICR0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0JGVycm9yX21zZyAgPSAkdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtd3JhcCcgKSwgJ2FjY29yZGlvbicgKTtcblxuXHRcdCRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24tY29udGVudCA+IC53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicgKVxuXHRcdFx0XHRcdFx0ICAuY2xpY2soKTtcblx0XHR9ICk7XG5cblx0XHQkZ3JvdXBfd3JhcC5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiAkYWRkLFxuXHRcdFx0bGltaXQ6IHBhcnNlSW50KCAkbGltaXQgKSxcblx0XHRcdGNsb25lX2VsZW06ICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdncm91cF90ZW1wbGF0ZScgKSxcblx0XHRcdG9uUmVtb3ZlOiBmdW5jdGlvbiggJGVsZW0gKSB7XG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0XHRpZiggalF1ZXJ5KCAnYm9keScgKS5maW5kKCAnbGluayNlZGl0b3ItYnV0dG9ucy1jc3MnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdGpRdWVyeSggJ2JvZHknIClcblx0XHRcdFx0XHRcdC5hcHBlbmQoICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaWQ9XCJlZGl0b3ItYnV0dG9ucy1jc3NcIiBocmVmPVwiJyArICR3cG9uaW9uLnNldHRpbmdzKCAnd3BlZGl0b3JfYnV0dG9uc19jc3MnICkgKyAnXCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJhbGxcIj4nICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZGF0YSA9ICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGdyb3VwX3dyYXAsICdhY2NvcmRpb24nICk7XG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRkYXRhICk7XG5cdFx0XHRcdCRkYXRhLmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0XHRcdHdwb25pb25fZmllbGQoICRkYXRhICkucmVsb2FkKCk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGRhdGEuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJyApLCAncmVsb2FkX3dwX2VkaXRvcicgKTtcblx0XHRcdH0sXG5cdFx0XHRzb3J0YWJsZToge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWFjY29yZGlvbi1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RvcDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJGh0bWwgPSBqUXVlcnkoICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPicgKyAkZXJyb3JfbXNnICsgJzwvZGl2PicgKS5oaWRlKCk7XG5cdFx0XHRcdCRhZGQuYmVmb3JlKCAkaHRtbCApO1xuXHRcdFx0XHQkYWRkLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuZmFkZUluKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJF9fRSA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JF9fRS5mYWRlT3V0KCAnc2xvdycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkX19FLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0sIDEwMDAgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG4vKmdsb2JhbCBzd2FsOnRydWUqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJF90aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkX3RoaXMuZWxlbWVudCxcblx0XHRcdCRhcmdzICAgICAgID0gJF90aGlzLm9wdGlvbnMoKSxcblx0XHRcdCRpbnB1dCAgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWlucHV0JyApLFxuXHRcdFx0JHJlbW92ZV9idG4gPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLXJlbW92ZV0nICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItYWRkXScgKSxcblx0XHRcdCRwcmV2aWV3ICAgID0gJGVsZW0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cblx0XHRsZXQgJHdvcmsgPSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxlbXM6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0cG9wdXA6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxtOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDcmVhdGVzIEEgTmV3IEluc3RhbmNlIGZvciBUb29sVGlwLlxuXHRcdFx0ICovXG5cdFx0XHRpbml0X3Rvb2x0aXA6ICgpID0+IHtcblx0XHRcdFx0aWYoICRhcmdzLnBvcHVwX3Rvb2x0aXAgIT09ICdmYWxzZScgKSB7XG5cdFx0XHRcdFx0bGV0ICR0cCA9ICggdHlwZW9mICRhcmdzLnBvcHVwX3Rvb2x0aXAgPT09ICdvYmplY3QnICkgPyAkYXJncy5wb3B1cF90b29sdGlwIDoge307XG5cdFx0XHRcdFx0aWYoICR3b3JrLmVsZW1zLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkd29yay5lbGVtcy50aXBweSggJHRwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbml0cyBGb3IgZWFjaCBhbmQgZXZlcnkgUE9QVVAuXG5cdFx0XHQgKiBAcGFyYW0gJGVsbVxuXHRcdFx0ICogQHBhcmFtICRpbnN0YW5jZVxuXHRcdFx0ICovXG5cdFx0XHRpbml0OiBmdW5jdGlvbiggJGVsbSwgJGluc3RhbmNlICkge1xuXHRcdFx0XHQkd29yay5lbG0gICA9ICRlbG07XG5cdFx0XHRcdCR3b3JrLnBvcHVwID0gJGluc3RhbmNlO1xuXHRcdFx0XHQkd29yay5lbGVtcyA9ICR3b3JrLmVsbS5maW5kKCAnc3Bhbi53cG9uaW9uLWljb24tcHJldmlldycgKTtcblx0XHRcdFx0bGV0ICRoZWlnaHQgPSAkd29yay5lbG0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkuY3NzKCAnaGVpZ2h0JyApO1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkuY3NzKCAnaGVpZ2h0JywgJGhlaWdodCApO1xuXHRcdFx0XHQkd29yay5zZWxlY3QoKTtcblx0XHRcdFx0JHdvcmsuaW5wdXQoKTtcblx0XHRcdFx0JHdvcmsuZWxlbXMub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkaWNvbiA9IGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICk7XG5cdFx0XHRcdFx0JGlucHV0LnZhbCggJGljb24gKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHRcdHN3YWwuY2xvc2VNb2RhbCgpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdCR3b3JrLmluaXRfdG9vbHRpcCgpO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogV29ya3Mgd2l0aCBQT1BVUCBJbnB1dCBTZWFyY2guXG5cdFx0XHQgKi9cblx0XHRcdGlucHV0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XScgKS5vbiggJ2tleXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblx0XHRcdFx0XHQkd29yay5lbGVtcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1pY29uJyApLnNlYXJjaCggbmV3IFJlZ0V4cCggJHZhbCwgJ2knICkgKSA8IDAgKSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLmhpZGUoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhbmRsZXMgU2VsZWN0Ym94IGluIHBvcHVwLlxuXHRcdFx0ICovXG5cdFx0XHRzZWxlY3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBzZWxlY3QnICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXHRcdFx0XHRcdCR3cG9uaW9uLmFqYXgoICdpY29uX3BpY2tlcicsIHtcblx0XHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRcdCd3cG9uaW9uLWljb24tbGliJzogJHZhbCxcblx0XHRcdFx0XHRcdFx0XHRlbmFibGVkOiAkYXJncy5lbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCggJHJlcyApID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkd29yay5lbG0sICR3b3JrLnBvcHVwICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuZGlzYWJsZUxvYWRpbmcoKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYoICRpbnB1dC52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBCbHVyIEV2ZW4gLyBjaGFuZ2UgZXZlbiBpbiBpbnB1dGZpZWxkLlxuXHRcdCAqL1xuXHRcdCRpbnB1dC5vbiggJ2tleXVwIGJsdXIgY2hhbmdlIGtleXByZXNzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXG5cdFx0XHRpZiggJHZhbCAhPT0gJycgKSB7XG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICc8aSBjbGFzcz1cIicgKyAkdmFsICsgJ1wiPjwvaT4nICkuc2hvdygpO1xuXHRcdFx0XHQkcmVtb3ZlX2J0bi5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIEFkZCBCdXR0b24gQ2xpY2sgRXZlbnQuXG5cdFx0ICovXG5cdFx0JGFkZF9idG4ub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRwb3B1cCA9IHN3YWwoIHtcblx0XHRcdFx0dGl0bGU6ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1maWVsZC10aXRsZSBoNCcgKS5odG1sKCksXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IHRydWUsXG5cdFx0XHRcdHdpZHRoOiAnNzAwcHgnLFxuXHRcdFx0XHRjdXN0b21DbGFzczogJ3dwb25pb24taWNvbi1waWNrZXItbW9kZWwnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0JF90aGlzLmFqYXgoICdpY29uX3BpY2tlcicsIHtcblx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uU3VjY2VzczogKCAkcmVzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGxldCAkcG9wdXBfZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICRwb3B1cF9lbGVtLCAkcG9wdXAgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvbkVycm9yOiAoKSA9PiAkcG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXG5cdFx0XHRcdFx0XHRvbkFsd2F5czogKCkgPT4gJHBvcHVwLmRpc2FibGVMb2FkaW5nKCksXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBSZW1vdmUgQnV0dG9uIEV2ZW50LlxuXHRcdCAqL1xuXHRcdCRyZW1vdmVfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGlucHV0ICAgICAgID0gJGVsZW0uZmluZCggJ2lucHV0I2ltYWdlX2lkJyApLFxuXHRcdFx0JHByZXZpZXdfYWRkID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcgLndwb25pb24tcHJldmlldy1hZGQnICksXG5cdFx0XHQkcHJldmlldyAgICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3JyApO1xuXG5cdFx0JHRoaXMubWVkaWFfaW5zdGFuY2UgPSBudWxsO1xuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0XHQkcHJldmlld19hZGQuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHByZXZpZXdfYWRkLmhpZGUoKTtcblx0XHRcdFx0JHByZXZpZXcuc2hvdygpO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbWFnZV91cGxvYWRfdXBkYXRlZCcsICRpbnB1dCwgJHByZXZpZXcsICRwcmV2aWV3X2FkZCApO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3X2FkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoICR0aGlzLm1lZGlhX2luc3RhbmNlICkge1xuXHRcdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2UgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHRsaWJyYXJ5OiB7IHR5cGU6ICdpbWFnZScgfSxcblx0XHRcdFx0dGl0bGU6ICR0aGlzLm9wdGlvbiggJ2ZyYW1lX3RpdGxlJywgXCJTZWxlY3QgSW1hZ2VcIiApLFxuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSAkdGhpcy5tZWRpYV9pbnN0YW5jZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpLmF0dHJpYnV0ZXM7XG5cdFx0XHRcdGxldCB0aHVtYm5haWwgID0gKCB0eXBlb2YgYXR0YWNobWVudC5zaXplcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwudXJsIDogYXR0YWNobWVudC51cmw7XG5cdFx0XHRcdCRwcmV2aWV3LmZpbmQoICdpbWcnICkuYXR0ciggJ3NyYycsIHRodW1ibmFpbCApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgYXR0YWNobWVudC51cmwgKTtcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5pZCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9ICk7XG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWltYWdlLXJlbW92ZScgKS5vbiggJ2NsaWNrJywgKCkgPT4gJGlucHV0LnZhbCggJycgKS50cmlnZ2VyKCAnY2hhbmdlJyApICk7XG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkc2V0dGluZ3MgPSB0aGlzLm9wdGlvbiggJ2lucHV0bWFzaycgKTtcblx0XHRcdGlmKCAkc2V0dGluZ3MgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncyA9IHRoaXMuaGFuZGxlX2FyZ3MoICRzZXR0aW5ncywgJ0lucHV0TWFzaycgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmlucHV0bWFzayggJHNldHRpbmdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHRoaXNfZWxlbSA9ICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tdGFiLXdyYXAgJyApO1xuXG5cdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaSBhJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCAkX3RoaXMgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tdGFiLWN1cnJlbnQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0JF90aGlzLnBhcmVudCgpLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi10YWItcGFnZScgKS5oaWRlKCk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0bGV0ICR0YWIgPSAkX3RoaXMuYXR0ciggJ2RhdGEtdGFiLW5hbWUnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnZGl2I3dwb25pb24tdGFiLScgKyAkdGFiICkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApLnNob3coKTtcblx0XHR9ICk7XG5cblx0XHRpZiggJHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQgYScgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGk6Zmlyc3QtY2hpbGQgYScgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBpc191bmRlZmluZWQgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9pc191bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZ2xvYmFsX3ZhbGlkYXRlID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1rZXl2YWx1ZS1hY3Rpb24tY29udGFpbmVyICA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtYWRkXScgKSxcblx0XHRcdGxpbWl0OiAoIC0xID09PSB0aGlzLm9wdGlvbiggJ2xpbWl0JyApICkgPyBudWxsIDogdGhpcy5vcHRpb24oICdsaW1pdCcgKSxcblx0XHRcdGNsb25lX2VsZW06ICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtZmllbGQnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1rZXl2YWx1ZS1yZW1vdmVdJyxcblx0XHRcdHRlbXBsYXRlOiB0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2tleV92YWx1ZV91cGRhdGVkJywgJGVsZW0gKTtcblx0XHRcdFx0dGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgJGVsZW0uZmluZCggJz4gZGl2Omxhc3QtY2hpbGQnICkgKTtcblx0XHRcdH0sXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiAoKSA9PiB7XG5cdFx0XHRcdGxldCAkaHRtbCA9IGpRdWVyeSggJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgcm9sZT1cImFsZXJ0XCI+JyArIHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApICsgJzwvZGl2PicgKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5hZnRlciggJGh0bWwgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQnICkuZmFkZUluKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJF9fRSA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JF9fRS5mYWRlT3V0KCAnc2xvdycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkX19FLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0sIDEwMDAgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCBlcnIuZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggdHJ1ZSAhPT0gaXNfdW5kZWZpbmVkKCAkYXJncy5rZXkgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gZGl2JyApLmVxKCAwICkuZmluZCggJzppbnB1dCcgKS5ydWxlcyggJ2FkZCcsICRhcmdzLmtleSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRpZiggdHJ1ZSAhPT0gaXNfdW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDEgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MudmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiggdHJ1ZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJncy5rZXkgKSAmJiB0cnVlID09PSBpc191bmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnOmlucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFOdGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqTXRZekF4TVNBMk5pNHhORFUyTmpFc0lESXdNVEl2TURJdk1EWXRNVFE2TlRZNk1qY2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVEJHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJVVTVOMEUzT0VFMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlVVNU4wRTNPRGsxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROQ0JYYVc1a2IzZHpJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRNMk1EVTJRekpHUWtWRVJUQXhNVGsxTlVWQ1JUQXpSVUU0UWpSRU5VSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFHQkFRRUJRUUdCUVVHQ1FZRkJna0xDQVlHQ0FzTUNnb0xDZ29NRUF3TURBd01EQkFNRGc4UUR3NE1FeE1VRkJNVEhCc2JHeHdmSHg4Zkh4OGZIeDhmQVFjSEJ3ME1EUmdRRUJnYUZSRVZHaDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHgvL3dBQVJDQUVUQVJNREFSRUFBaEVCQXhFQi84UUFpUUFCQUFNQUF3RUJBQUFBQUFBQUFBQUFBQVFGQmdFREJ3SUlBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFCQXdNREFRTUdCdzhDQXdrQUFBQUJBQUlERVFRRklSSUdNVUVUQjFGaGNZRWlNcEdoc2NGQ2doVGhVbUp5a3FLeXdpTXpjN04wRlRZa045SFRGK0pEVTVPalZEVlZGaEVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9WS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJT3VlZUtDTXlTdURHRHFTZzZJOHZqWG1qWjIvV3EzNVFFSGV5NHQ1UGNsWS84QUZjRDhpRHNRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGTnllWGJiUlIvZnVKL0pIM1VHYjNJT2R5RHNqdkxtUDkzSzl2bURpRUVsbWN5YkJRVGtqemhwK01oQklaeWE5YlFPWkcveW1oQitJb0pNZktXLzk1Yit0cnYrSVFTWStTWTkzdkI3UE9SVWZFU2dreDVqR1NlN2NOSDQxVy9wVVFTMlBZOW9leHdjMDlIQTFCUWNvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lNM3lxYjl2QkY5NjB1L0tOUDFVRmJpb0czTi9EQzhibU9QdER5Z0NwUWFTVGoyTWVQWllZejVXdVB6MVFSWk9MUUVmczVuQStjQW9JeitMM1k5eVpoOU5SOHlDTTdqMlZCMGpEdk9ITitjaEJHa3htU2pOSFc4bnFhVDhpRG9mSE5HYVBZNXA4aEJDRDQzSU5keDFqbTR4cEo5OXpuTjlIVDVrRm1nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWd4L0o1OStVTGYvQ1kxdjYzNnlEbmk3Qy9KaDNaRzF4UHJGUG5RYTlBUUVCQVFRTTQrT1BHVHVjMEVsdTBFanRPaURFYmtHN3hNWmp4dHV3OWRnUDVXdnpvSmFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0RBWnFmdk1yY3VIVGVRUHE2Zk1ndU9HeGt2dUpld0FOcjY2b05PZ0lDQWc0YzVyV2x6aUd0SFVuUUlLWGxrN1JqR3RCcjNqeFFqdEFDREhzSmM0TkhVbWc5YUQwcGpReGpXam8wQUQxSU9VQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRZk1rc2NiZHozQm84cFFSSk14WnMwYVM4L2dqVDQ2SUlVdWJuZHBHME04NTFLQ1ZpN21XV09hU1oxUTAxOUFwcWd3RTBwZEs5MzN6aWZoS0RZOE5ZUmkzdVAwNVNSNmdBZ25aUE4yT1BaKzFkdmxQdXhOMWQ2L0lncU1UeXQ4OThZcnNOWkZLYVJFYWJUNUNmT2cwNkNweWZKTWZaQXNEdStuN0kyZEFmT1VHU3lHY3lGKzR0a2VXeEU2Uk4wYjE3ZktndE9Vdjd1d3hzSDBoSFZ6ZlExb0NDb3c3VEpsYlJ0Sy90V0VqekJ3SlFlaklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJS3JPdGR0aGQ5RUVnK2swUVZDQWd0R2tRNEM2bEpvVEhKcjU2RUJCNS92UWFwK1R1TVp4aXlGdlJrMCsvMjZEUWJpZTMwb012SlBKSTh2a2NYdmNhdWM0a2tuMGxCODcwRm5OeVhMUzJyYll6RU1BbzV3MGM3MHU2b0t6ZWc3N0VHUzlnakd1NlJvcDYwRjF6YVVmM1NKamVqSVJVZVFsenZtUVIrSXNNbWJpTktoalh1UDVKSHpvTitnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2k1U0x2TE4vbGI3UTlTRFBVUUtJSm1mY0lPS3ZGYUY3WXdQUzU0SitKQmdBNGtnZVZCcnVUV0Y3TGpjWXkzZ2RJeUdMMnkzV2hMVzlucVFaWjl2ZE05K0Y3ZlMwaEIxRnhIWFJCeHZRTjZDNDRtd1M1NjJEaFZyZHp2V0dFajQwSHh5ZWN2emwxVTEydTJqMUFJTFhnVWU2N3VwdnZJMnRIMWovQU5sQnRVQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJ3QkJCNkhRb012UEgzY3I0ejlGeEZmUWcrV2lwSG5RT2R5OXppYlczKytlUHpHL2RRWVVTRUVFZFFhaEJjUWN4enNOQjM0ZUFLQVBhMGo0Z0VFOXZpQmtEcExiUU9iMmdCdytWeFFkZzVoaHBOTGpFeDFQdk9BWWZsYWc1YmtPQ3o2eTJqb25IeWJ3UHpYSURjUHcrN0pNR1E3ajhGN2czOU9pQ3o0OWdNZlpYN3JpM3ZtWFhzRnJHdExTUVQxT2hLRERYMDVsdlo1Q2FsNzNHdnJRYlR3K2hBeDF6UDJ5UzdQVXhvUDY2RFZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNDaXpFT3k2MzAwa0ZmWDJvSTF0SHZ1STJEdGNFRlg0aTNCKzAybHYyTlk2VDhvMC9WUVkrcUJWQXFnVlFLb0ZVSEllNGRIRWV0Qnh1UWVtOEtoRWZINEhEcks1N3orVnQvVlFYcUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3I4ekZ1dDJ5QWFzZHFmTWZ1b0s3RzdmdHNlNDAxK09pRG5rdkZQN3pOSE95NDdtV05teWhidWFSVW55anlvTXpjZUgrYWovZFBpbUhtZHQvU1FRTGppUElZUGV0SFAvaGtQL1JxZ2dUNHpKMjRyUGF5eER5dlk1dnloQkdKSU9xRGpjZ2JrRGNnYmtIc09EZzdqRDJjVktGc0xLanprVlB4bEJOUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFSFZjeENXM2taNVI5MUJtalVHbmFFSFl5NHVHZTVJNXZvSkNEdFprcjFuU1FuMDYvS2c3NDh6ZEErMDBQK0w1RUZoYlhWek1SdmdMR242UlAzRUhaUFoybHdLVHdzbEg0YlE3NVVGZk54VGowMWQxbEdDZTF0Vy9JUWdyNXZEN0F2SkxUTkdld05jQ0I4SUtDQkw0YVJFa3hYN21qc0RvNi9HSEJCRGI0YjVFWERBNjVpTUZSdmNOMjdiMjBiVDUwSG9ER2hyUTBkR2lnOVNEbEFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGRmUyTTR1bjdHRnpYbXJTQnBycWc1aHc5eS9WNUVZOC9WQk5pdzF1MzMzRjUrQUlKa2NFTVg3dGdiNkFnKzBCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkZ5bVJoeHVPdWIrZHJuUTJzYnBaR3NBTGkxZ3FhQWtDdnJRUU9MOHN4UEpMT1M1eDVlM3VYN0pZWmcxc2pTUlVFaHBjS083RFZCYnlQREkzUFBSb0xqVHpDcUNwNHZ5akg4a3g4bDlZeHl4d3h5bUJ6WncxcnR6V3RkVWJYUEZLUEhhZ3VFQkFRUnNsZnc0L0hYTi9NSE9odFluelNOWUFYRnJHbHgyZ2tDdW5sUVlqL3JaeFgvMnQ5LzVjUC9OUVNMSHhpNGhjekNLVDdUYUEwQWtuamJ0MS9odWtJK0JCdG81STVZMnlSdUQ0M2dPWTlwQmE1cEZRUVIxQlFmU0FnSUNBZ0lLYmpuS3Nmbi90bjJPT2FQN0ZMM012ZkJyYXUxMWJ0Yy9UVHRRWEtBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FncGViZjRqbVA2U1g5QW9QSmVOdnlIRkxYRDhxaDNUWXZJOTVCa29oMmJabnNINXJBNXZuQkhhZzlyTnpCZFkwM051OFN3VFFsOFVqZFE1cm0xQkNERWVDZitLM1g5ZEovSmlRVE0zNG0yZHBrbjR2RVdFK2F2NGlSTEhiMTJnZzBjQVd0a2NTM3RvMmlEbkJlSmRuZTVKbUt5bGhQaHNqS2FSUlhGZHJpZWpkem14dUJQWlZ2bVFiTkJUOHgveFBNLzBVLzhzb0tyd3Avd1hIL2pUL3ozb0pQaUphWXlmaU9SZmZNWWU1aGMrMmtkVGMyYjZHMDloTHFEem9LWGlHY3VjUjRXeDVTZUUzSDJRU2QxRTUyd3VqNzR0YU4xSFVBcnBvZ044Vko3a1FPeGVCdWNqR1dSbThsaExpeUdTUm9jWTl3amNIRnRhRW5hZ3ZPVWMzeG5IaERGT3g5eGtMZ0F3Mk1IdFBJSnBVK1FWMEhsN0VGSEQ0cVRXOHJQNzl4Kzh4TnJJUTF0eThQZTJ2bkRvNGo4RlVGL3l2bFJ3ZUVqekZ2YWpJV3Izc0R5eVhZQkhJUFprQjJ2RGhXZzlhQzd0NTRyaTNpdUlYYm9wbU5ramNPMXJoVUg0Q2dvOFh5dzVIbEdSd3R2YVZ0OGEwZDlmZDVvWkRRYkJIdDh1NzZYWWc0NGp5My9BUFJmM0QvU2ZaZnNNM2Nmdk84MzlmYTkxbE9pQ3Z6dmlSYTJXU2t4ZUtzSjh6a1lhaWFLM0IydElwVWJtdGtKSTdhTjA2SU9jRjRqMjE3a284WGxjZlBoc2pOcERGY0E3WGs5QUhPYkdRVDJWYWdzVHlzeDh5SEc1N1h1eExCMzlyZDk1WHZLRFZ1emFLZTY3NlI2SVBybVhLb3VOWWorNFBoKzB2ZEkyS0tEZjNlNHVxVDdXMS9SclNlaUN6eHVRaHY4WmJaQ1AyWXJtRmt3cWZkRDJoMUNmTWdxdUljcWR5T0M3dW1XbjJlMGduTU52S1hsNWxEZFM3YnNadDBJN1Q4U0MvUUVCQVFFQkFRRUJBUUVGTHpiL0VjeC9TUy9vRkJSOER4ZG5sZkRLeng5NHpmYjNEYmhyeDJqL1VTRU9IbmFkUWdxdUY1Uzh3Ti9lOEx5NzZtTnIzNHlZKzY1cEJkdEZleHc5cHZucUVEd3Bua3QrQVplZUxTU0tlNGV3L2hOdG95RUUvd2NzYmFMaTc3eHJRYm02bmYzMG4waUdhTmJYeURyNjBIejR5MmR1N2prRjhRRzNkdGNNRUVvMGNBOEhjMEhyMkErcEJ0c2ROSk5qN1dhUTFra2hqZTgrZHpRU2dyK1kvNG5tZjZLZitXVUhuWENlRlovSjhidGIyMDVQZDQ2M2tNZ1paeENUWXpiSTVwcHRtakdwRmZkUVhyUENpVzZsWWM3eUM4eXNNYmc1a0xpNW8wclVFdmZOMTgxRUZ2ejIxdDdYZ0dSdHJlTVJRUXdNWkZHMFVEV3RlMEFCQjJlRzl2RkJ3ckdDTnROOGJwSG50TG52Y1NTZ3cwdDF5cC9pVm1ickNXRUdRdmJZQ0pyYmtnQ0tLaldnc3JKRHFhZkg1MEZwazdqeGN5V1B1TEM2NC9ZdXQ3bGpvNUFIc3FBNGRSVzVPbzZqem9MdmpYRzhqSndFNERPUjkxTzVrc0lhWE5lV3RMaTZNN21Gdzlra1U5Q0N2NFR5YzJQQjc0WCtsMXg0eVFTeG5xZHRlNmIrVjdBOUNDYjRXWXVTMjQ0Y2pjNjNtWGxkZFRQUFV0SklaOE9ydldncC9ES1o4Tmh5aWFQOTVIY1NQWjZXdGVRZ28rQlhYaUJiNHFXZkFZbTF2SUxtWnpwcnVkemU5YzhVQkRxenhtZzdOTzFCTzVMWWVLdkliYUNHOHdsckM2MmxFMEU4RXNiWld1QXBvNTF3L1EvTUVGOTRodzNOcGI0Yms0WlM3eEU4WnUydDdZcGFDUnVuNFduclFjY21naDVMeTdIWVpwMzJWdFpUWGs1cFZwTTdlN2lyWHlhRWVsQlI0dmtzMWo0V1g5bzh1R1JzNVpNWXhsZmFEcFhhVVA0TFhPcCtLZzlBNGxoaGh1TzJPUG9CTEZHRFBUdGxmN1Qvd0E0b0xkQVFFQkFRRUJBUUVCQVFWSEw0SnArTDVXR0NOMHMwbHJLMk9KZ0xuT2NXbWdEUnFTZ2crRzlwZDJuQzhkYjNjTWx2Y003N2ZESzBzZTJzOGhGV3VBSXFEVkJEOFNlSlNackdOdnJGcEdYeC83UzNMUGVlMEdwWUthMTdXK2Ywb0kzaEppNzIwNHZkMjJSdEpiWjhsM0llNW5qZEc1ekhReE5ydGNBYUdoQ0Nxc2JQbVhCTHU2dDdESFB6ZUNuZVpJV1JFbVZwTkIwYUh1QnBRTzlrZzlmS2dYdGh6SG5kNWFSWkhIT3d1QnQ1TzlsamxKNzE1RlduUndZNHVwVUQyUUJXdXVpRDA1akdzYUdORkd0QURRT2dBUVZmSzRacCtNWmFHR04wczBscE0yT05nTG5PY1l5QUdnYWtsQlcrR2xuZDJmRGJHM3U0SkxlNFladDhNclhNZUt6UElxMXdCMUJRYWRCUWMrdHJtNjRoazdlMmlmUFBKRzBNaWphWHZjZDdUbzF0U1VIMXdhMnVMYmlXTWd1WW53enh3MGtpa2FXUGFkeDBMVFFoQm5lVWNkNUhqZVRqbFhHb2hjeXlzRWQvWkhxOEFBYUNvcUhCbzZhZ2l1cUNQZGNyOFFzM2J1eDJONDdQaXBwaHNrdnAzUFlHTk9oY3h6MlJiVDZLbnlhb054Z2NkY1k3RTIxbmMzVWw3Y1JOL2JYVXpuUGM5N2lTZFhFbWdyUWVaQjV6emJpV2JsNVZKYjR5R1E0elBtQjEvTEd4em1SdWlmN1JlNENqZnY5ZXFEMUszZ2l0NEk0SVdoa1VMV3h4dEhRTmFLQWZBZ3cvaGhqTCswYm5HMzFwTGJ0bnV5Nk1UUnVZSHNPN1Z1NENvUVZkclljdzRKZjNjZUx4N3N6Z0xtVHZZNFlxbVJoTkI5RVBlSFVvQ2RwQnBWQktOenovbHQ1YndpMHVPTlltSisrNW03eDhjNzZhYlFhUlBOZGFlelR5OWlEZFpiR3daTEYzV09tL2RYTVRvaWVwRzRVRHZTRHFneC9oZmhzdmJOeUY5bUlwSXIxNWlzNGhLMHRQYzJzWVkwdEJwVnAwMTdhSUt0L0Q4ako0bFNSbUNUK3d2dUdaU1NRc2QzSm1Zd25idXB0M2Q0ODFGZWlEMDlBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkF6K1dpeEdGdk1sSlNsdEU1N1FmcFA2TWI5WnhBUWVTOFFreUhIczdoY3hmUExyYmtyWkdYRGoyT2ZMN0xqMmRkanZRU2c5cGM1cldsemlBMENwSjBBQVFkRmxmMkY5RDMxbGN4WFVJSmFaWVh0a2J1SFVibWtpdXFCZTM5aFl3OTllM01WckNTR2lXWjdZMjdqMEc1eEFyb2c3VEpHSSs4TGdJNmJ0OVJ0cDFyWHlJSUVYSStQVFRpM2h5bHBKT1NRSW1UeE9lU09vMmgxVUV1OGpobHM1NHBuYklYeHZiSytvRzFwYVE0MU9nb0VHYngyTHdtTTRUa0xYRFhmMjJ5RU55NFQ5NUhMN1JqTzRib3cxdWlDTDRSZjRYQi9HbS9TUWFtK3krSnNDMFgxN0JhRjN1aWVWa2RmUnVJUWRsbmYyTjdGMzFuY1JYTUowN3lGN1pHK1RxMGtJTUh5ei9BSFI0ei9EUDZUMEczYm04TTY4TmsyL3RqZUE3VGJDVmhscjVObGQzeElQalAvOEF3V1IvcFp2NWJrR2E4SXY4TGcvalRmcElOVmZaYkZXRzAzMTVCYUIzdTkvSXlPdm8zRWVSQjIyMTNhM1VJbXRabVR3dTkyU0p3ZTA5dWhhU0VIYWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lQT2ZGckp4enlZdmpZblpiaTltYk5kelBjMWpXUkIyeHBjWGFVcnVkOVZCejRoeThVeUhEL3N0aGs3SjArTjJTV1VVZHhFWEZzWTJGalFIVlBzZEI1VUdwNFRuUm0rTldkNjUyNmNON3E1OHZleCt5NG44YjN2V2d6ZkRSL1lPYTVuamJ2WnRidjhBMTJQSFpROVdqNnBwOVZBNW1QNzl6WEM4YmFOMXJiSDdka0IxRkIwYWZxaW4xa0ZqelRqR1N6MS9aUnoza2R0eHVDajc2THZITWxlK3AvQjJVOTBDcnRLbEJtK1JjZDhKWU1WY0MydTRJYjFzYnpDK0c1Zk8vdkdqUU9ZSFNEVjNYUkJlY0l5RjFlK0d6bjNMekxKRkRjd2g3dFNXc0RnMnA4emRFRUh3OS8yd3YveGJ6K1dnbWVGd3VqNGYwdEN3WFpkY2ZaekpVTUVsVHQzVURqU3ZYUkJYMlBBK0xXY2NrL05iKzN1c3ZjU09kTEpMZHVpWnIwMmt1aGNUVFUxUVZXSmZnTVY0ajQ2UGkxNFpNZmV0TWQzQzF6bnNCSWRSdTUzVUNnY05UUW9KM2lQWlhsOXozQldkbk02M25uaDJDZG52TWFYdjN1Rk8wTXFndDc3d2c0cS9GdWdzMlNRWHpXL3NyMHlQYzR2SFRlMG5aVHkwYUVIUnd6TzNtVTRCazRiNXhmZDQrSzR0bnlPTlhPYUlpV2x4N1NLN2ZVZytPQTVUKzFlR0UyUjJoeHRmdEVqR25vWEEreUQ2U2d5K0FtOE83eUYrUjVma1pMM01YVG5PbWljMjZEWXhVN1FERTBWMDhob09nUVNMUE5jWXdYTE1kTnhTK2tseDE5SUlNallQRXdZd1BjR3RlMHl0YldtNm8xSjA2MEtEMk5BUUVCQVFFQkFRRUJBUUVCQVFFQkFKQUZUb0FnOHE0L2ljZnpqbHVheStUaU54aTRDSUxTUGM1Z05EUmhCWVduUnJha2ZoSU5WLzBzNEgvd0RXZit2Y2Y4eEJuZUFTTzQ3elBMY1VtZFNDWnhtc2E5dTBiaFN2YTZJNi9pb0xUeElnZmo3dkQ4cWhIdDR5NGJIZFU2bTNsTkQ4cGI5WkIxK0dzVDhsa00xeXVjSGRrSnpEYVY2aUNNai9BSU5iOVZCVmM3bHRMM24xbGkrUVhUN1hBTmdFakFDV3NkSWQzdE9kMlZjTnU3czh5RG5QTThKOExpYmwxaEZhM2w5TEc1dHN5T1UzUkVoYVExeExuU05ZQWRTZ3NmRG9nK0dsd0FkUUxzSDRDVUhWNGUvN1lYLzR0NS9MUWRYRHJxOXRQQ2E3dWJLb3VvbTNMb25ORlMwZzZ1SDRvMVFWbkVNUjRhWG1HWmU1eTlqbXlraGMrN2JkWExvWE5mdVB1dEQyRjJuYnJWQkhqeUhHYmp4THcwZkg0STRiRzNmM2JwWTI3QkpJZDFYRHRJNkFWUVcvaUZsRzRyeEF3T1FleDBrZHZDWHl0WUt1N3ZjOFBJSDRMU1NnMVdSOFErSjJtTWZmUjVHRzVPMnNWdkU4T2xjN3Niczk1djFnRUdkNEpqTHUyNERsNzI3YVdTWkpseGNNYVJUMk82SUR0ZnZqVStoQjg4S3hzdVQ4S2Jxd2gvZlRpNGJFRG9DOE9xMGVzaEJFNEZrZUNQeExjZG5iT3d0Y3RaRjBVN3J5R0ZoZlJ4b1MrUWU4UGRJSnJVSUxOMlo0VS9rbGppY0RnckhKenlQclBkd1JSTVpBMXJoN1llSTNidG8xMEk3TmRVSG9DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNENHVJSXJpQ1NDVUV4VE1kSElBUzBscmhRMGMwZ2pUdENDSGhjRmljSmFHMHhsdUxlM2M4eU9ZSE9mVjVBQkpjOHVkMEE3VUU5QlYzZkdNSGQ1ZURNVDIyN0pXMjBRM0RYeU1JMmtrVmExd2E3cjJoQk15R1BzOGpaVFdWNUdKcldkdTJXTWtpbzY5V2tFZXBCeGpjYlk0eXhpc2JHSVEyc0lJampCSnBVa25WeEpPcDdVSFJtZVA0WE5RdGh5bG95NVl5cFlYVkRtMTY3WHRJY0srWW9JT000SnhIR3lkN2FZeUpzblkrVGRNNFYwOWt5bDlQVWdsNHZqV0Z4VmhQWVdGdjNObmNGenBvdThrY0NYdERYYXZjNGlyUjJJUHJIOGV3K094Y21MczdmdXJDVVBENGQ3M1Y3d1VkN1RuRjJvODZEc3hHRnhtSXNSWTQ2SHViVnBjNFI3blAxY2FuVjVjZmpRVkZ4NGNjSnVMazNFbUxqRWhPNGhqNUkyVnJYM0dPYXo0a0V1VGh2R0h2c25qSHh4dXg3KzhzekNYUmJIMURxL3N5M2RxMGU5VkJJdk9QWWU4eWR2azdtM0VsOWFOTElKUzU0RFdtdFJ0QkRUN3g2aEJYeCtIdkRJNzM3WXpGUkNhdTRBbDVqQjgwUmQzZjVxQzludDRaN2VTM2xidWhsWVkzczFGV3VGQ05LVTBRUnNSaHNiaDdKdGxqb2U0dFd1TG14N25QMWNhblY1Y2ZqUVFzdnd2aStZbTcvSVkrT1djKzlLMHVpZTZtbnRPakxDNzFvSk9HNDVnOExHNW1NczQ3WVBvSHZiVXZjQjBEbnVKY2ZXVUZpZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0QvLzJRPT0nO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuYmVmb3JlKCAnPHNwYW4gY2xhc3M9XCJzcGlubmVyIHdwb25pb24tc3Bpbm5lclwiPjwvc3Bhbj4nICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNob3dfcHJldmlldyggZSApICk7XG5cdH1cblxuXHRzaG93X3ByZXZpZXcoKSB7XG5cdFx0bGV0ICR2YWx1ZSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLnZhbCgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5hZGRDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHQkd3Bvbmlvbi5hamF4KCAnb2VtYmVkLXByZXZpZXcnLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dmFsdWU6ICR2YWx1ZSxcblx0XHRcdH1cblx0XHR9LCAoIHJlcyApID0+IHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcblx0XHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5odG1sKCByZXMuZGF0YSApO1xuXHRcdFx0fVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcblx0XHRcdFx0Lmh0bWwoICc8aW1nIGNsYXNzPVwid3Bvbmlvbi1uby1wcmV2aWV3XCIgc3JjPVwiJyArIHRoaXMuaW1hZ2UgKyAnXCIvPicgKTtcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLXNwaW5uZXInICkucmVtb3ZlQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgPSB0aGlzLm9wdGlvbiggJ3NlbGVjdDInLCB7fSApO1xuXHRcdHRoaXMuZWxlbWVudC5zZWxlY3QyKCB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnICkgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRmaWVsZF9kZWJ1Zygpe1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnc2VsZWN0aXplJywge30gKTtcblxuXHRcdGlmKCAhaXNfdW5kZWZpbmVkKCAkYXJnLnRoZW1lICkgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoICRhcmcudGhlbWUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCAnc2VsZWN0aXplLWRlZmF1bHQnICk7XG5cdFx0fVxuXG5cdFx0JGFyZyA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKTtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoICdmb3JtLWNvbnRyb2wnICkuc2VsZWN0aXplKCAkYXJnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR2YXIgJHRoaXMgICAgID0gdGhpcy5lbGVtZW50LFxuXHRcdFx0JGVuYWJsZWQgID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWVuYWJsZWQnICksXG5cdFx0XHQkZGlzYWJsZWQgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZGlzYWJsZWQnICk7XG5cblx0XHQkZW5hYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRkaXNhYmxlZCxcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0dXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHR2YXIgJGVsID0gdWkuaXRlbS5maW5kKCAnaW5wdXQnICk7XG5cblx0XHRcdFx0aWYoIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoICd3cG9uaW9uLWVuYWJsZWQnICkgKSB7XG5cdFx0XHRcdFx0JGVsLmF0dHIoICduYW1lJywgJGVsLmF0dHIoICduYW1lJyApLnJlcGxhY2UoICdkaXNhYmxlZCcsICdlbmFibGVkJyApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsLmF0dHIoICduYW1lJywgJGVsLmF0dHIoICduYW1lJyApLnJlcGxhY2UoICdlbmFibGVkJywgJ2Rpc2FibGVkJyApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkdGhpcy50cmlnZ2VyKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBhdm9pZCBjb25mbGljdFxuXHRcdCRkaXNhYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRlbmFibGVkLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICd1aS1zb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IGNzc191bml0cyBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2Nzc191bml0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5mb250X3dlaWdodF9zdHlsZSA9IGZhbHNlO1xuXHRcdGxldCAkZWwgICAgICAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0bGV0ICRwcmV2aWV3ICAgICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZm9udC1wcmV2aWV3JyApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXRcblx0XHRcdFx0JGZvbnRfZmllbGQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJyApLFxuXHRcdFx0XHQkZm9udCAgICAgICAgICAgICAgPSAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tZm9udC1zZWxlY3RvcicgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRfd2VpZ2h0X3N0eWxlID0gJHRoaXMuZm9udF9zdHlsZSggJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkudmFsKCkgKSxcblx0XHRcdFx0JHRhZyAgICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXRhZyBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRjb2xvciAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZmllbGQtY29sb3JfcGlja2VyIGlucHV0LndwLWNvbG9yLXBpY2tlcicgKS52YWwoKSxcblx0XHRcdFx0JGFsaWduICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWFsaWduIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRTaXplICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXNpemUgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdCRsaW5lSGVpZ2h0ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1saW5lLWhlaWdodCBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0JGJhY2tVUEZvbnQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2t1cC1mb250IHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGRpcmVjdGlvbiAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWRpcmVjdGlvbiBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1sZXR0ZXItc3BhY2luZyBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0aHJlZiAgICAgICAgICAgICAgID0gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT0nICsgJGZvbnQgKyAnOicgKyAkZm9udF93ZWlnaHRfc3R5bGUud2VpZ2h0LFxuXHRcdFx0XHRodG1sICAgICAgICAgICAgICAgPSAnPGxpbmsgaHJlZj1cIicgKyBocmVmICsgJ1wiIGNsYXNzPVwid3BzZi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKyAnXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+JztcblxuXHRcdFx0aWYoIGpRdWVyeSggJy53cG9uaW9uLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdGpRdWVyeSggJy53cG9uaW9uLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSApLmF0dHIoICdocmVmJywgaHJlZiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0alF1ZXJ5KCAnaGVhZCcgKS5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRmb250U2l6ZSA9PT0gJycgfHwgJGZvbnRTaXplID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRmb250U2l6ZSA9ICcxOHB4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYoICRsZXR0ZXJTcGFjaW5nID09PSAnJyB8fCAkbGV0dGVyU3BhY2luZyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyA9ICcxcHgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGxpbmVIZWlnaHQgPT09ICcnIHx8ICRsaW5lSGVpZ2h0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRsaW5lSGVpZ2h0ID0gJzIwcHgnO1xuXHRcdFx0fVxuXG5cblx0XHRcdGxldCAkX2F0dHJzID0gJyBmb250LWZhbWlseTonICsgJGZvbnQgKyAnOyAnICtcblx0XHRcdFx0JyBmb250LXdlaWdodDonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCArICc7ICcgK1xuXHRcdFx0XHQnIGZvbnQtc3R5bGU6JyArICRmb250X3dlaWdodF9zdHlsZS5zdHlsZSArICc7ICcgK1xuXHRcdFx0XHQnIHRleHQtYWxpZ246JyArICRhbGlnbiArICc7ICcgK1xuXHRcdFx0XHQnIGNvbG9yOiAnICsgJGNvbG9yICsgJzsnICtcblx0XHRcdFx0JyBmb250LXNpemU6JyArIGNzc191bml0cyggJGZvbnRTaXplICkgKyAnOyAnICtcblx0XHRcdFx0JyBsZXR0ZXItc3BhY2luZzonICsgY3NzX3VuaXRzKCAkbGV0dGVyU3BhY2luZyApICsgJzsgJyArXG5cdFx0XHRcdCcgbGluZS1oZWlnaHQ6JyArIGNzc191bml0cyggJGxpbmVIZWlnaHQgKSArICc7ICc7XG5cblxuXHRcdFx0bGV0ICR0ZXh0ID0gJHByZXZpZXcudGV4dCgpO1xuXHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcblx0XHRcdCRwcmV2aWV3LmFwcGVuZCggalF1ZXJ5KCAnPCcgKyAkdGFnICsgJz4nICsgJHRleHQgKyAnPC8nICsgJHRhZyArICcgPicgKSApO1xuXHRcdFx0JHByZXZpZXcuZmluZCggJHRhZyApLmF0dHIoIFwic3R5bGVcIiwgJF9hdHRycyApO1xuXG5cdFx0fSApO1xuXHR9XG5cblx0Zm9udF9zdHlsZSggJGluZm8gKSB7XG5cdFx0bGV0ICR3ZWlnaHRfdmFsID0gJzQwMCcsXG5cdFx0XHQkc3R5bGVfdmFsICA9ICdub3JtYWwnO1xuXG5cdFx0c3dpdGNoKCAkaW5mbyApIHtcblx0XHRcdGNhc2UgJzEwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzEwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczMDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzMwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzMwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc1MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzcwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzcwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNzAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc5MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzkwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzkwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaXRhbGljJzpcblx0XHRcdFx0JHN0eWxlX3ZhbCA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHsgd2VpZ2h0OiAkd2VpZ2h0X3ZhbCwgc3R5bGU6ICRzdHlsZV92YWwgfTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkYWRkICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uJyApLFxuXHRcdFx0JGlucHV0ICAgID0gJGVsZW0uZmluZCggJ2lucHV0W3R5cGU9dGV4dF0nICksXG5cdFx0XHQkc2V0dGluZ3MgPSAkdGhpcy5vcHRpb25zKCksIHdwX21lZGlhX2ZyYW1lO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggd3BfbWVkaWFfZnJhbWUgKSB7XG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdHRpdGxlOiAkc2V0dGluZ3Muc2V0dGluZ3MuZnJhbWVfdGl0bGUsXG5cdFx0XHRcdGxpYnJhcnk6IHtcblx0XHRcdFx0XHR0eXBlOiAkc2V0dGluZ3Muc2V0dGluZ3MudXBsb2FkX3R5cGVcblx0XHRcdFx0fSxcblx0XHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdFx0dGV4dDogJHNldHRpbmdzLnNldHRpbmdzLmluc2VydF90aXRsZSxcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9IHdwX21lZGlhX2ZyYW1lLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuYXR0cmlidXRlcy51cmwgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGV4dGFyZWEgPSAkZWxlbS5maW5kKCAndGV4dGFyZWEnICk7XG5cdFx0JGVsZW0uZmluZCggJyN3cG9uaW9uLXdwLWxpbmstcGlja2VyID4gYnV0dG9uJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCR0ZXh0YXJlYS52YWwoICcnICk7XG5cdFx0XHRpZiggIXdpbmRvdy53cExpbmsgKSB7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdHRpdGxlOiAkd3Bvbmlvbi50ZXh0KCAnd3BfbGlua19lcnJvcl90aXRsZScsICdXUCBMaW5rIEpTIExpYiBOb3QgRm91bmQnICksXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LndwTGluay5vcGVuKCAkdGV4dGFyZWEuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXG5cblx0XHQkdGV4dGFyZWEub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkZGF0YSA9IGpRdWVyeSggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkuaHRtbCggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkudmFsKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0aXRsZScgKS52YWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKS52YWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnVybCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuaW1wb3J0ICR3cG9uaW9uX2RlYnVnIGZyb20gJy4uL2NvcmUvZGVidWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRkZXAgPSB0aGlzLm9wdGlvbiggJ2RlcGVuZGVuY3knICk7XG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVwLmNvbnRyb2xsZXIgKSB7XG5cdFx0XHRsZXQgJGNvbnRyb2xsZXIgPSAkZGVwLmNvbnRyb2xsZXIgWyAka2V5IF0sXG5cdFx0XHRcdCRjb25kaXRpb24gID0gJGRlcC5jb25kaXRpb24gWyAka2V5IF0sXG5cdFx0XHRcdCR2YWx1ZSAgICAgID0gJGRlcC52YWx1ZSBbICRrZXkgXSxcblx0XHRcdFx0JGZpZWxkICAgICAgPSAnW2RhdGEtZGVwZW5kLWlkPVwiJyArICRjb250cm9sbGVyICsgJ1wiXSc7XG5cdFx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnLm5lc3RhYmxlICkge1xuXHRcdFx0XHRsZXQgJElOUFVUID0gdGhpcy5jb25maWcucGFyZW50LmZpbmQoICdbZGF0YS1kZXBlbmQtaWQ9JyArICRjb250cm9sbGVyICsgJ10nICk7XG5cdFx0XHRcdGlmKCAkSU5QVVQubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHQkZmllbGQgPSAnW2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICR3cG9uaW9uLmZpZWxkSUQoICRJTlBVVCApICsgJ1wiXTppbnB1dCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0X2NvbnR4dCggdGhpcy5jb250eHQuY3JlYXRlUnVsZSggJGZpZWxkLCAkY29uZGl0aW9uLCAkdmFsdWUgKSApO1xuXHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5pbmNsdWRlKCB0aGlzLmVsZW1lbnQgKSApO1xuXHRcdH1cblx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnRGVwZW5kZW5jeSc6ICRkZXAsICdOZXN0YWJsZSBEZXBlbmRlbmN5JzogdGhpcy5jb25maWcubmVzdGFibGUgfSApO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGZpZCAgICAgICAgID0gdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZpZWxkLWpzaWQnICk7XG5cdFx0bGV0ICR0b29sdGlwX2tleSA9IGZhbHNlO1xuXHRcdGlmKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWhlbHAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3Bvbmlvbi1oZWxwJztcblx0XHR9IGVsc2UgaWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24td3JhcC10b29sdGlwJyApICkge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJ3dyYXBfdG9vbHRpcCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICRmaWQgKyAndG9vbHRpcCc7XG5cdFx0fVxuXG5cdFx0bGV0ICRhcmcgPSAoIHRydWUgPT09ICR3cG9uaW9uLnZhbGlkX2pzb24oICRmaWQgKSApID8gSlNPTi5wYXJzZSggJGZpZCApIDogdGhpcy5vcHRpb24oICR0b29sdGlwX2tleSwgZmFsc2UgKTtcblxuXHRcdGNvbnN0IHN0YXRlID0ge1xuXHRcdFx0aXNGZXRjaGluZzogZmFsc2UsXG5cdFx0XHRjYW5GZXRjaDogdHJ1ZVxuXHRcdH07XG5cblx0XHRpZiggZmFsc2UgPT09ICRhcmcgKSB7XG5cdFx0XHRpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5JyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHknICkgKTtcblx0XHRcdH0gZWxzZSBpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5LWFyZ3MnICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweS1hcmdzJyApICk7XG5cdFx0XHR9IGVsc2UgaWYoICR3cG9uaW9uLnZhbGlkX2pzb24oIHRoaXMuZWxlbWVudC5hdHRyKCAndGlwcHktYXJncycgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICd0aXBweS1hcmdzJyApICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoICRhcmcgKSB7XG5cdFx0XHQkYXJnLnBlcmZvcm1hbmNlID0gZmFsc2U7XG5cdFx0XHRpZiggJGFyZy5pbWFnZSAhPT0gdW5kZWZpbmVkICYmICRhcmcuaW1hZ2UgIT09IGZhbHNlICkge1xuXHRcdFx0XHRsZXQgJGltYWdlICAgICAgICAgID0gJGFyZy5pbWFnZTtcblx0XHRcdFx0JGFyZy5pbnRlcmFjdGl2ZSAgICA9IHRydWU7XG5cdFx0XHRcdCRhcmcuY29udGVudCAgICAgICAgPSAnTG9hZGluZy4uLic7XG5cdFx0XHRcdC8vJGFyZy5odG1sICAgICAgICAgICA9ICcjd3BvdHBpbWcnO1xuXHRcdFx0XHQkYXJnLnVwZGF0ZUR1cmF0aW9uID0gMjAwMDtcblx0XHRcdFx0JGFyZy5vblNob3cgICAgICAgICA9IGFzeW5jIGZ1bmN0aW9uKCB0aXAgKSB7XG5cdFx0XHRcdFx0aWYoIHN0YXRlLmlzRmV0Y2hpbmcgfHwgIXN0YXRlLmNhbkZldGNoICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdGF0ZS5pc0ZldGNoaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRzdGF0ZS5jYW5GZXRjaCAgID0gZmFsc2U7XG5cblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggJGltYWdlICk7XG5cdFx0XHRcdFx0XHRjb25zdCBibG9iICAgICA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcblx0XHRcdFx0XHRcdGNvbnN0IHVybCAgICAgID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXHRcdFx0XHRcdFx0aWYoIHRpcC5zdGF0ZS5pc1Zpc2libGUgKSB7XG5cdFx0XHRcdFx0XHRcdHRpcC5zZXRDb250ZW50KCAnPGRpdiBzdHlsZT1cIm1pbi13aWR0aDoyNXB4O21pbi1oZWlnaHQ6MjVweDtcIj48aW1nIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTtcIiBzcmM9XCInICsgdXJsICsgJ1wiLz48L2Rpdj4nICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdFx0XHRcdHRpcC5zZXRDb250ZW50KCBgRmV0Y2ggZmFpbGVkLiAke2V9YCApO1xuXHRcdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0XHRzdGF0ZS5pc0ZldGNoaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLm9uSGlkZGVuICAgICAgID0gKCB0aXAgKSA9PiB7XG5cdFx0XHRcdFx0c3RhdGUuY2FuRmV0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdHRpcC5zZXRDb250ZW50KCAnTG9hZGluZy4uLicgKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5wb3BwZXJPcHRpb25zICA9IHtcblx0XHRcdFx0XHRtb2RpZmllcnM6IHtcblx0XHRcdFx0XHRcdHByZXZlbnRPdmVyZmxvdzoge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGhpZGU6IHtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGFyZyA9IHt9O1xuXHRcdH1cblxuXHRcdGRlbGV0ZSAkYXJnLmltYWdlO1xuXHRcdHRoaXMuZWxlbWVudC50aXBweSggdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJHRvb2x0aXBfa2V5ICkgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkaW1hZ2UgPSAoIGlzX3VuZGVmaW5lZCggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApICkgKSA/IHRoaXMuZWxlbWVudC5hdHRyKCAnc3JjJyApIDogdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApO1xuXHRcdHN3YWwoIHtcblx0XHRcdGltYWdlVXJsOiAkaW1hZ2UsXG5cdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdGJhY2tkcm9wOiBgcmdiYSgwLDAsMCwwLjQ0KWBcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkLCByYW5kX21kNSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkbWNlX2VkaXRvciAgPSB0aW55TUNFUHJlSW5pdC5tY2VJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRxdWlja190YWdzICA9IHRpbnlNQ0VQcmVJbml0LnF0SW5pdFsgdGhpcy5vcHRpb24oICd3cGVkaXRvcl9pZCcgKSBdLFxuXHRcdFx0XHQkTkVXX0lEICAgICAgPSAnd3Bvbmlvbi13cC1lZGl0b3ItJyArIHJhbmRfbWQ1KCksXG5cdFx0XHRcdCR0ZXh0QXJlYSAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuY2xvbmUoKSxcblx0XHRcdFx0JGFjdHVhbF9JRCAgID0gJHRleHRBcmVhLmF0dHIoICdpZCcgKSxcblx0XHRcdFx0JGFjdHVhbF9odG1sID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKS5odG1sKCksXG5cdFx0XHRcdCRyZWdleCAgICAgICA9IG5ldyBSZWdFeHAoICRhY3R1YWxfSUQsIFwiZ1wiICk7XG5cdFx0XHQkYWN0dWFsX2h0bWwgICAgID0gJGFjdHVhbF9odG1sLnJlcGxhY2UoICRyZWdleCwgJE5FV19JRCApO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoICRhY3R1YWxfaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5wYXJlbnQoKS5hcHBlbmQoICR0ZXh0QXJlYSApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYTpub3QoIycgKyAkYWN0dWFsX0lEICsgJyknICkucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLmF0dHIoICdpZCcsICRORVdfSUQgKTtcblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRtY2VfZWRpdG9yICkgKSB7XG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcblx0XHRcdFx0dGlueW1jZS5pbml0KCAkbWNlX2VkaXRvciApO1xuXHRcdFx0XHR0aW55TUNFLmV4ZWNDb21tYW5kKCAnbWNlQWRkRWRpdG9yJywgZmFsc2UsICcjJyArICRORVdfSUQgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRxdWlja190YWdzICkgKSB7XG5cdFx0XHRcdCRxdWlja190YWdzLmlkID0gJE5FV19JRDtcblx0XHRcdFx0cXVpY2t0YWdzKCAkcXVpY2tfdGFncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgYXJyYXlfbWVyZ2UgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcjYnVsa19lZGl0JywgKCkgPT4ge1xuXHRcdFx0bGV0ICRmaW5hbF9hcmdzID0geyBwb3N0X2lkczogW10gfSxcblx0XHRcdFx0JGJ1bGtfZWRpdCAgPSAkKCAnI2J1bGstZWRpdCcgKTtcblxuXHRcdFx0JGJ1bGtfZWRpdC5maW5kKCAnI2J1bGstdGl0bGVzJyApLmNoaWxkcmVuKCkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzLnBvc3RfaWRzLnB1c2goICQoIHRoaXMgKS5hdHRyKCAnaWQnICkucmVwbGFjZSggL14odHRsZSkvaSwgJycgKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcud3Bvbmlvbi1xdWljay1lZGl0LWZpZWxkc2V0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkZmluYWxfYXJncyA9IGFycmF5X21lcmdlKCAkKCB0aGlzICkuc2VyaWFsaXplT2JqZWN0KCksICRmaW5hbF9hcmdzICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAnc2F2ZS1idWxrLWVkaXQnLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRhc3luYzogZmFsc2UsXG5cdFx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHRcdFx0ZGF0YTogJGZpbmFsX2FyZ3MsXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLm1lbnUoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICdoMi5hamF4LWNvbnRhaW5lciBidXR0b24nLCB0aGlzLnNhdmVfaGFuZGxlciApO1xuXHR9XG5cblxuXHRtZW51KCkge1xuXHRcdGxldCAkZWxlbSA9IHRoaXMuZWxlbWVudDtcblx0XHQkZWxlbS5vbiggJ2NsaWNrJywgJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSBhJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdkcm9wZG93bicgKSApIHtcblx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5pcyggJzp2aXNpYmxlJyApICkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSB1bCcgKS5zbGlkZVVwKCAnZmFzdCcgKTtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJGhyZWYgICAgICAgICAgID0gJHdwb25pb25faGVscGVyLnVybF9wYXJhbXMoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWhyZWYnICkgKSxcblx0XHRcdFx0XHQkcGFyZW50ICAgICAgICAgPSAnd3Bvbmlvbi10YWItJyArICRocmVmWyAncGFyZW50LWlkJyBdLFxuXHRcdFx0XHRcdCRzZWN0aW9uICAgICAgICA9ICggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgKSA/ICRwYXJlbnQgKyAnLScgKyAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gOiBmYWxzZSxcblx0XHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tcGFyZW50LXdyYXBzJyApLFxuXHRcdFx0XHRcdCRjdXJyZW50ICAgICAgICA9ICRlbGVtLmZpbmQoICdkaXYjJyArICRwYXJlbnQgKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdCRwYXJlbnRfYWN0aXZlcy5oaWRlKCk7XG5cblx0XHRcdFx0aWYoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICYmICRocmVmWyAncGFyZW50LWlkJyBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICcgZGl2IycgKyAkc2VjdGlvbiApLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRjdXJyZW50LnNob3coKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGEuYWN0aXZlICcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZSAnICk7XG5cdFx0XHRcdCQoIHRoaXMgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSA+IGxpID4gYScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhW2RhdGEtd3Bvbmlvbi1pZD1cIndwb25pb25fbWVudV8nICsgJGhyZWZbICdwYXJlbnQtaWQnIF0gKyAnXCJdJyApXG5cdFx0XHRcdFx0IC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXG5cdHNhdmVfaGFuZGxlciggZSApIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0aGlzICAgPSB0aGlzLFxuXHRcdFx0JHBhcmVudCA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0JGJhc2UgICA9ICRwYXJlbnQucGFyZW50KCkucGFyZW50KCksXG5cdFx0XHQkaGlkZGVuID0gJHBhcmVudC5maW5kKCAnZGl2Lndwb25pb24tbWV0YWJveC1zZWN1cmUtZGF0YScgKTtcblxuXHRcdCRiYXNlLmJsb2NrKCB7IG1lc3NhZ2U6IG51bGwsIG92ZXJsYXlDU1M6IHsgYmFja2dyb3VuZDogJyMwMDAnLCBvcGFjaXR5OiAwLjcgfSB9ICk7XG5cblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXHRcdGxldCAkZmllbGRzID0gJHBhcmVudC5wYXJlbnQoKS5maW5kKCAnOmlucHV0JyApO1xuXHRcdGxldCAkdmFsdWVzID0gJGZpZWxkcy5zZXJpYWxpemUoKTtcblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblxuXHRcdCR3cG9uaW9uLmFqYXgoICdzYXZlX21ldGFib3gnLCB7IGRhdGE6ICR2YWx1ZXMgfSwgZnVuY3Rpb24oIHJlcyApIHtcblx0XHRcdCRiYXNlLmh0bWwoIHJlcyApO1xuXHRcdFx0JGJhc2UudW5ibG9jaygpO1xuXHRcdFx0d3Bvbmlvbl9maWVsZCggJGJhc2UuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0JCggJ2Rpdi5wb3N0Ym94Lndwb25pb24tbWV0YWJveCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBXUE9uaW9uX01ldGFib3hfTW9kdWxlKCAkKCB0aGlzICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBXUE9uaW9uX1F1aWNrX0VkaXQgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdG1vZHVsZV9pbml0KCkge1xuXHRcdHRoaXMucG9zdF9pZCA9IHRoaXMuY29udHh0O1xuXHRcdGxldCAkaWQgICAgICA9ICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApICsgJ18nICsgdGhpcy5wb3N0X2lkO1xuXHRcdHRoaXMudmFsdWVzICA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGlkLCBmYWxzZSApO1xuXG5cdFx0aWYoIHRoaXMudmFsdWVzLmh0bWwgKSB7XG5cdFx0XHR0aGlzLnZhbHVlcy5odG1sID0galF1ZXJ5KCB0aGlzLnZhbHVlcy5odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuaHRtbCggdGhpcy52YWx1ZXMuaHRtbC5maW5kKCAnPiBkaXYnICkgKTtcblx0XHR9XG5cblx0XHR3cG9uaW9uX2ZpZWxkKCB0aGlzLmVsZW1lbnQgKS5yZWxvYWQoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgd3AgKSA9PiB7XG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRsZXQgJGxpc3QgPSAkKCAnI3RoZS1saXN0JyApO1xuXHRcdGlmKCAkbGlzdC5sZW5ndGggPiAwICkge1xuXHRcdFx0JGxpc3Qub24oICdjbGljaycsICcuZWRpdGlubGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgcG9zdF9pZCA9IGpRdWVyeSggdGhpcyApLmNsb3Nlc3QoICd0cicgKS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdHBvc3RfaWQgICAgID0gcG9zdF9pZC5yZXBsYWNlKCAncG9zdC0nLCAnJyApO1xuXHRcdFx0XHQkKCAndHIjZWRpdC0nICsgcG9zdF9pZCApLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bmV3IFdQT25pb25fUXVpY2tfRWRpdCggalF1ZXJ5KCB0aGlzICksIHBvc3RfaWQgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdwICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc193aW5kb3dfYXJnIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRvciBmcm9tICcuL2NvcmUvdmFsaWRhdGlvbic7XG5cbndpbmRvdy53cG9uaW9uX21ldGFib3hfbW9kdWxlID0gcmVxdWlyZSggJy4vbW9kdWxlcy9tZXRhYm94JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbl9idWxrX2VkaXQgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvYnVsay1lZGl0JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbl9xdWlja19lZGl0ICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvcXVpY2stZWRpdCcgKS5kZWZhdWx0O1xuLy93aW5kb3cud3Bvbmlvbl9jdXN0b21pemVyX21vZHVsZSA9IHJlcXVpcmUoICcuL21vZHVsZXMvY3VzdG9taXplcicgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2NvcmUnICkuZGVmYXVsdDtcbndpbmRvdy4kd3Bvbmlvbl9kZWJ1ZyAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9kZWJ1ZycgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uX2hlbHBlciAgICAgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKTtcbndpbmRvdy53cG9uaW9uX25ld19maWVsZCAgICAgID0gKCAkY2xhc3MgKSA9PiAoIGlzX3dpbmRvd19hcmcoICRjbGFzcyApICkgPyB3aW5kb3dbICRjbGFzcyBdIDogZmFsc2U7XG53aW5kb3cud3Bvbmlvbl9maWVsZCAgICAgICAgICA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyBXUE9uaW9uX0ZpZWxkKCAkZWxlbSwgJGNvbnR4dCApO1xud2luZG93Lndwb25pb25fbW9kYWwgICAgICAgICAgPSByZXF1aXJlKCAnLi4vdmVuZG9ycy9iYWNrYm9uZS1tb2RhbCcgKS5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9ICggKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgJCwgJHdwbyApID0+IHtcblx0bGV0ICR3cF9ob29rID0gd3AuaG9va3M7XG5cblx0JCggZG9jdW1lbnQgKS5vbiggJ3JlYWR5JywgKCkgPT4ge1xuXHRcdGxldCAkd3BvZl9kaXYgPSAkKCAnLndwb25pb24tZnJhbWV3b3JrOm5vdCgud3Bvbmlvbi1tb2R1bGUtcXVpY2tfZWRpdC1mcmFtZXdvcmspJyApO1xuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fdGhlbWVfaW5pdCcsICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHR9XG5cdH0gKTtcblxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoICgpID0+IHtcblx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2luaXQnICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZHMgPSAkd3BfaG9vay5hcHBseUZpbHRlcnMoICd3cG9uaW9uX2ZpZWxkc19mdW5jdGlvbnMnLCB7XG5cdFx0XHR0ZXh0OiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dCcgKS5kZWZhdWx0LFxuXHRcdFx0dGV4dGFyZWE6IHJlcXVpcmUoICcuL2ZpZWxkcy90ZXh0YXJlYScgKS5kZWZhdWx0LFxuXHRcdFx0YmFja2dyb3VuZDogcmVxdWlyZSggJy4vZmllbGRzL2JhY2tncm91bmQnICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3NlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRcdFx0c3dpdGNoZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zd2l0Y2hlcicgKS5kZWZhdWx0LFxuXHRcdFx0Y29sb3JfcGFsZXR0ZTogcmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BhbGV0dGUnICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRcdFx0c2VsZWN0MjogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdDInICkuZGVmYXVsdCxcblx0XHRcdGNob3NlbjogcmVxdWlyZSggJy4vZmllbGRzL2Nob3NlbicgKS5kZWZhdWx0LFxuXHRcdFx0c2VsZWN0aXplOiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0aXplJyApLmRlZmF1bHQsXG5cdFx0XHRpY29uX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2ljb25fcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRmb250X3NlbGVjdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvZm9udF9zZWxlY3RvcicgKS5kZWZhdWx0LFxuXHRcdFx0YWNjb3JkaW9uOiByZXF1aXJlKCAnLi9maWVsZHMvYWNjb3JkaW9uJyApLmRlZmF1bHQsXG5cdFx0XHRncm91cDogcmVxdWlyZSggJy4vZmllbGRzL2dyb3VwJyApLmRlZmF1bHQsXG5cdFx0XHR3cF9lZGl0b3I6IHJlcXVpcmUoICcuL2ZpZWxkcy93cF9lZGl0b3InICkuZGVmYXVsdCxcblx0XHRcdHJlbG9hZF93cF9lZGl0b3I6IHJlcXVpcmUoICcuL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvcicgKS5kZWZhdWx0LFxuXHRcdFx0ZmllbGRzZXQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9maWVsZHNldCcgKS5kZWZhdWx0LFxuXHRcdFx0aW5wdXRtYXNrOiByZXF1aXJlKCAnLi9maWVsZHMvaW5wdXRtYXNrJyApLmRlZmF1bHQsXG5cdFx0XHR3cF9saW5rczogcmVxdWlyZSggJy4vZmllbGRzL3dwX2xpbmtzJyApLmRlZmF1bHQsXG5cdFx0XHRjaGVja2JveF9yYWRpbzogcmVxdWlyZSggJy4vZmllbGRzL2NoZWNrYm94X3JhZGlvJyApLmRlZmF1bHQsXG5cdFx0XHRrZXl2YWx1ZV9wYWlyOiByZXF1aXJlKCAnLi9maWVsZHMva2V5dmFsdWVfcGFpcicgKS5kZWZhdWx0LFxuXHRcdFx0Y29sb3JfcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRkYXRlX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2RhdGVfcGlja2VyJyApLmRlZmF1bHQsXG5cdFx0XHRnYWxsZXJ5OiByZXF1aXJlKCAnLi9maWVsZHMvZ2FsbGVyeScgKS5kZWZhdWx0LFxuXHRcdFx0aW1hZ2VfcG9wdXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvaW1hZ2VfcG9wdXAnICkuZGVmYXVsdCxcblx0XHRcdHVwbG9hZDogcmVxdWlyZSggJy4vZmllbGRzL3VwbG9hZCcgKS5kZWZhdWx0LFxuXHRcdFx0aW1hZ2VfdXBsb2FkOiByZXF1aXJlKCAnLi9maWVsZHMvaW1hZ2VfdXBsb2FkJyApLmRlZmF1bHQsXG5cdFx0XHRqcXVlcnlfdGFiOiByZXF1aXJlKCAnLi9maWVsZHMvanF1ZXJ5X3RhYicgKS5kZWZhdWx0LFxuXHRcdFx0ZmllbGRfdG9vbHRpcDogcmVxdWlyZSggJy4vaGVscGVycy9maWVsZF90b29sdGlwJyApLmRlZmF1bHQsXG5cdFx0XHRjbG9uZV9lbGVtZW50OiByZXF1aXJlKCAnLi9maWVsZHMvY2xvbmVfZWxlbWVudCcgKS5kZWZhdWx0LFxuXHRcdFx0c29ydGVyOiByZXF1aXJlKCAnLi9maWVsZHMvc29ydGVyJyApLmRlZmF1bHQsXG5cdFx0XHRnb29nbGVfbWFwczogcmVxdWlyZSggJy4vZmllbGRzL2dvb2dsZV9tYXBzJyApLmRlZmF1bHQsXG5cdFx0XHR0eXBvZ3JhcGh5OiByZXF1aXJlKCAnLi9maWVsZHMvdHlwb2dyYXBoeScgKS5kZWZhdWx0LFxuXHRcdFx0b2VtYmVkOiByZXF1aXJlKCAnLi9maWVsZHMvb2VtYmVkJyApLmRlZmF1bHQsXG5cdFx0XHRoZWFkaW5nOiByZXF1aXJlKCAnLi9maWVsZHMvaGVhZGluZycgKS5kZWZhdWx0LFxuXHRcdFx0c3ViaGVhZGluZzogcmVxdWlyZSggJy4vZmllbGRzL3N1YmhlYWRpbmcnICkuZGVmYXVsdCxcblx0XHRcdGphbWJvX2NvbnRlbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9qYW1ib19jb250ZW50JyApLmRlZmF1bHQsXG5cdFx0XHRub3RpY2U6IHJlcXVpcmUoICcuL2ZpZWxkcy9ub3RpY2UnICkuZGVmYXVsdCxcblx0XHRcdGNvbnRlbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb250ZW50JyApLmRlZmF1bHQsXG5cdFx0XHRiYWNrdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrdXAnICkuZGVmYXVsdCxcblx0XHR9ICk7XG5cdFx0JHdwby5zZXR0aW5nc19hcmdzICAgID0gJHdwby53aW5kb3dBcmdzKCAnd3Bvbmlvbl9jb3JlJywge30gKTtcblx0XHQkd3BvLnRleHQgICAgICAgICAgICAgPSAkd3BvLndpbmRvd0FyZ3MoICd3cG9uaW9uX2lsOG4nLCB7fSApO1xuXHRcdCR3cG8uZGVidWdfaW5mbyAgICAgICA9IG51bGw7XG5cdFx0JHdwby5maWVsZF9kZWJ1Z19pbmZvID0gbnVsbDtcblxuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlID4gc3Ryb25nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcblx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LWRvd24nICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctcmlnaHQnICk7XG5cdFx0fSApO1xuXG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cblx0XHQvKipcblx0XHQgKiBUcmlnZ2VycyBIb29rIFdpdGggV2lkZ2V0cy5cblx0XHQgKi9cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnd2lkZ2V0LWFkZGVkIHdpZGdldC11cGRhdGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkd2lkZ2V0ICkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJHdpZGdldCApO1xuXHRcdFx0d3Bvbmlvbl9maWVsZCggJHdpZGdldCApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogUmVuZGVycyBWYWxpZGF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRuZXcgV1BPbmlvbl9WYWxpZGF0b3IoKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYW5kbGVzIEZpZWxkcyBpbml0LlxuXHRcdFx0ICovXG5cdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICQoIHRoaXMgKSApO1xuXHRcdFx0XHR3cG9uaW9uX2ZpZWxkKCAkKCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdH0gKTtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdH1cblxuXHRcdCR3cG8ubG9hZGluZ19zY3JlZW4oICR3cG9mX2RpdiwgZmFsc2UgKTtcblx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25faW5pdCcgKTtcblx0fSApICk7XG5cdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9sb2FkZWQnICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCBqUXVlcnksICR3cG9uaW9uICk7XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vanMvY29yZS9jb3JlJztcblxuY29uc3QgV1BPbmlvbl9XUF9Nb2RhbCA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKCB7XG5cdHRlbXBsYXRlczoge30sXG5cblx0ZXZlbnRzOiB7XG5cdFx0XCJjbGljayAubWVkaWEtbW9kYWwtY2xvc2VcIjogXCJjbG9zZU1vZGFsXCIsXG5cdFx0XCJjbGljayAjYnRuLWNhbmNlbFwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tb2tcIjogXCJzYXZlTW9kYWxcIixcblx0XHRcImNsaWNrIC5tZWRpYS1tZW51IGFcIjogXCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrXCIsXG5cdFx0XCJjbGljayAubWVkaWEtcm91dGVyIGFcIjogXCJoYW5kbGVfdGFiX2NsaWNrXCIsXG5cdH0sXG5cblx0YWN0aXZlX3BhZ2U6IG51bGwsXG5cblx0YWN0aXZlX3NlY3Rpb246IG51bGwsXG5cblx0aW5pdGlhbGl6ZTogKCBvcHRpb25zICkgPT4ge1xuXHRcdG9wdGlvbnMgPSBfLmV4dGVuZCgge1xuXHRcdFx0bGVmdF9tZW51OiBmYWxzZSxcblx0XHRcdGhpZGVfbWVudTogZmFsc2UsXG5cdFx0XHRodG1sOiBmYWxzZSxcblx0XHR9LCBvcHRpb25zICk7XG5cblx0XHR0aGlzLmxlZnRfbWVudSA9IG9wdGlvbnNbICdsZWZ0X21lbnUnIF07XG5cdFx0dGhpcy5odG1sICAgICAgPSBvcHRpb25zWyAnaHRtbCcgXTtcblx0XHR0aGlzLmhpZGVfbWVudSA9IG9wdGlvbnNbICdoaWRlX21lbnUnIF07XG5cblx0XHRfLmJpbmRBbGwoIHRoaXMsICdyZW5kZXInLCAncHJlc2VydmVGb2N1cycsICdjbG9zZU1vZGFsJywgJ3NhdmVNb2RhbCcsICdkb05vdGhpbmcnICk7XG5cdFx0dGhpcy5pbml0X3RlbXBsYXRlcygpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH0sXG5cblx0aW5pdF90ZW1wbGF0ZXM6ICgpID0+IHtcblx0XHRsZXQgJG0gICAgICAgICAgICAgICAgICAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnbW9kYWwnICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ2ZyYW1lLW1lbnUtaXRlbScgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0gPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdyb3V0ZXItbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMud2luZG93ICAgICAgICAgICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ2h0bWwnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5wYWdlX2NvbnRlbnQgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAncGFnZV9jb250ZW50JyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50ICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3NlY3Rpb25fY29udGVudCcgXSApO1xuXHR9LFxuXG5cdHJlbmRlcjogKCkgPT4ge1xuXHRcdCd1c2Ugc3RyaWN0Jztcblx0XHR0aGlzLiRlbC5hdHRyKCAndGFiaW5kZXgnLCAnMCcgKS5hcHBlbmQoIHRoaXMudGVtcGxhdGVzLndpbmRvdygpICk7XG5cblx0XHRpZiggdGhpcy5sZWZ0X21lbnUgKSB7XG5cdFx0XHRfLmVhY2goIHRoaXMubGVmdF9tZW51LCAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRcdHRoaXMuJCggJy5tZWRpYS1tZW51JyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtKCB7XG5cdFx0XHRcdFx0dXJsOiBrZXksXG5cdFx0XHRcdFx0bmFtZTogdmFsdWUsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuaHRtbCApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5odG1sLCAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCAkY29udGVudCA9ICQoIHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCgge1xuXHRcdFx0XHRcdGlkOiBrZXksXG5cdFx0XHRcdFx0dGl0bGU6IHZhbHVlWyAndGl0bGUnIF0sXG5cdFx0XHRcdFx0aHRtbDogdmFsdWVbICdodG1sJyBdLFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2VjdGlvbnMnIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRfLmVhY2goIHZhbHVlWyAnc2VjdGlvbnMnIF0sICggdmFsLCBrICkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICRfY29udGVudCA9IGpRdWVyeSggdGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50KCB7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGtleSArIFwiX1wiICsgayxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogdmFsWyAndGl0bGUnIF0sXG5cdFx0XHRcdFx0XHRcdFx0aHRtbDogdmFsWyAnaHRtbCcgXSxcblx0XHRcdFx0XHRcdFx0fSApICksXG5cdFx0XHRcdFx0XHRcdCRfbWVudSAgICA9IHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0oIHsgdXJsOiBrLCBuYW1lOiB2YWxbICd0aXRsZScgXSB9ICk7XG5cblx0XHRcdFx0XHRcdCRfY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWxbICdzaWRlYmFyJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbFsgJ3NpZGViYXInIF0gKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1jb250ZW50JyApLmFwcGVuZCggJF9jb250ZW50ICk7XG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXJvdXRlcicgKS5hcHBlbmQoICRfbWVudSApO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicgKS5hcHBlbmQoICRjb250ZW50ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmhpZGUoKTtcblx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0XHRcdGlmKCB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuYXBwZW5kKCB2YWx1ZVsgJ3NpZGViYXInIF0gKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtZnJhbWUtcm91dGVyJyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdFx0XHRcdCR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicgKS5hcHBlbmQoICRjb250ZW50ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUgYTpmaXJzdC1jaGlsZCcgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAud3Bvbmlvbi1tb2RhbC1jb250ZW50Om5vdCguaGlkZGVuKSAubWVkaWEtZnJhbWUtcm91dGVyIGE6Zmlyc3QtY2hpbGQnIClcblx0XHRcdC50cmlnZ2VyKCAnY2xpY2snICk7XG5cblx0XHRpZiggdGhpcy5oaWRlX21lbnUgPT09IHRydWUgKSB7XG5cdFx0XHR0aGlzLiQoICcubWVkaWEtZnJhbWUnICkuYWRkQ2xhc3MoICdoaWRlLW1lbnUnICk7XG5cdFx0fVxuXG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9uKCBcImZvY3VzaW5cIiwgdGhpcy5wcmVzZXJ2ZUZvY3VzICk7XG5cdFx0alF1ZXJ5KCAnYm9keScgKS5jc3MoIHsgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiIH0gKS5hcHBlbmQoIHRoaXMuJGVsICk7XG5cdFx0dGhpcy4kZWwuZm9jdXMoKTtcblx0fSxcblxuXHRoYW5kbGVfbGVmdF9tZW51X2NsaWNrOiAoIGUgKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCAkdGFyZ2V0ID0gJCggZS50YXJnZXQgKTtcblx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtbWVudSBhLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdGxldCAkc2hvd190YXJnZXQgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IGRpdiMnICsgJHRhcmdldC5hdHRyKCAnaHJlZicgKSApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2JyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdCRzaG93X3RhcmdldC5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKTtcblxuXHRcdGlmKCAkc2hvd190YXJnZXQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuaGFzQ2xhc3MoICdoaWRkZW4nICkgKSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkuYWRkQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lJyApLnJlbW92ZUNsYXNzKCAnaGlkZS1yb3V0ZXInICk7XG5cdFx0fVxuXHRcdHRoaXMuYWN0aXZlX3BhZ2UgICAgPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSBudWxsO1xuXHR9LFxuXG5cdGhhbmRsZV90YWJfY2xpY2s6ICggZSApID0+IHtcblx0XHRsZXQgJHRhcmdldCAgICAgICAgID0gJCggZS50YXJnZXQgKTtcblx0XHR0aGlzLmFjdGl2ZV9zZWN0aW9uID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJHBhZ2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lLW1lbnUgYS5hY3RpdmUnICkuYXR0ciggJ2hyZWYnICk7XG5cdFx0bGV0ICRiYXNlICAgICAgICAgICA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gIycgKyB0aGlzLmFjdGl2ZV9wYWdlICk7XG5cblxuXHRcdCR0YXJnZXQucGFyZW50KCkuZmluZCggJy5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JHRhcmdldC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkYmFzZS5maW5kKCAnLndwb25pb24tc2VjdGlvbi1tb2RhbC1jb250ZW50JyApLmhpZGUoKTtcblx0XHQkYmFzZS5maW5kKCAnIycgKyB0aGlzLmFjdGl2ZV9wYWdlICsgJ18nICsgdGhpcy5hY3RpdmVfc2VjdGlvbiApLnNob3coKTtcblx0fSxcblxuXHRwcmVzZXJ2ZUZvY3VzOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0aWYoIHRoaXMuJGVsWyAwIF0gIT09IGUudGFyZ2V0ICYmICF0aGlzLiRlbC5oYXMoIGUudGFyZ2V0ICkubGVuZ3RoICkge1xuXHRcdFx0dGhpcy4kZWwuZm9jdXMoKTtcblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnVuZGVsZWdhdGVFdmVudHMoKTtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub2ZmKCBcImZvY3VzaW5cIiApO1xuXHRcdGpRdWVyeSggXCJib2R5XCIgKS5jc3MoIHsgXCJvdmVyZmxvd1wiOiBcImF1dG9cIiB9ICk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fSxcblxuXHRzYXZlTW9kYWw6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHR0aGlzLmNsb3NlTW9kYWwoIGUgKTtcblx0fSxcblxuXHRkb05vdGhpbmc6IGZ1bmN0aW9uKCBlICkge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkb3B0aW9ucyA9IHt9ICkge1xuXHRcdHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRpZDogZmFsc2UsXG5cdFx0XHRkYXRhOiBmYWxzZSxcblx0XHRcdGNsYXNzTmFtZTogJ3dwb25pb24tbW9kYWwnLFxuXHRcdFx0bW9kYWw6IHt9LFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHR9LCAkb3B0aW9ucyApO1xuXG5cdFx0bmV3IFdQT25pb25fV1BfTW9kYWwoIF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IHRoaXMuZ2V0X2xlZnRfbWVudSgpLFxuXHRcdFx0aHRtbDogdGhpcy5vcHRpb25zWyAnZGF0YScgXSxcblx0XHRcdGhpZGVfbWVudTogdGhpcy5vcHRpb25zWyAnaGlkZV9tZW51JyBdLFxuXHRcdH0sIHRoaXMub3B0aW9uc1sgJ21vZGFsJyBdICkgKTtcblx0fVxuXG5cdGdldF9sZWZ0X21lbnUoKSB7XG5cdFx0bGV0ICRyZXR1cm4gPSBmYWxzZTtcblx0XHRpZiggdGhpcy5vcHRpb25zWyAnZGF0YScgXSApIHtcblx0XHRcdCRyZXR1cm4gPSB7fTtcblxuXHRcdFx0Xy5lYWNoKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLCAoICRkYXRhLCAka2V5ICkgPT4ge1xuXHRcdFx0XHQkcmV0dXJuWyAka2V5IF0gPSAoIHR5cGVvZiAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gIT09ICd1bmRlZmluZWQnICkgPyAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gOiAkZGF0YVsgJ3RpdGxlJyBdO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRyZXR1cm4gJHJldHVybjtcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=