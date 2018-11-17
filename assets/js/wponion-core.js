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
			console.log(this.values);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvYXJyYXkvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9pbmZvL2luaV9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9mbG9hdHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2ludHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfYm9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC94bWwvdXRmOF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sX2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9fd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Nsb25lX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jb3B5X3RvX2NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGV2aWNlX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGlmZl9kYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19hZnRlcl9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2JlZm9yZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19zYW1lX2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdGFiX2ZvY3VzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3dpbmRvd19hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvb2tnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9waXBlX2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9wbGFpbl9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcXVlcnlfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3JhbmRfbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3Njcm9sbF9wb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3RvX3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90aW1lX3Rha2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90b19qc19mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3VybF9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdmFsaWRhdGVTaW5nbGVKU0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvd2luZG93X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93cmFwX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZGF0ZV9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9maWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZvbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ29vZ2xlX21hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ljb25fcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2Vfc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2VfdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW5wdXRtYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0aXplLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9maWVsZF90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2ltYWdlX3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbWV0YWJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9xdWljay1lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiXSwibmFtZXMiOlsiSlNfUGFyc2VfQXJncyIsIiRhcmdzIiwiJGRlZmF1bHRzIiwiJGlzX25lc3RlZCIsImFyZ3MiLCJkZWZhdWx0cyIsIm5lc3RlZCIsInBhcnNlIiwiJF9rZXkiLCIkaXNfZGVlcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheV9tZXJnZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiYXJnbCIsImxlbmd0aCIsImFyZyIsInJldE9iaiIsImsiLCJhcmdpbCIsImoiLCJpIiwiY3QiLCJ0b1N0ciIsIk9iamVjdCIsInRvU3RyaW5nIiwicmV0QXJyIiwiY29uY2F0IiwiaGFzT3duUHJvcGVydHkiLCJwYXJzZUludCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiYXJyYXlfbWVyZ2VfcmVjdXJzaXZlIiwiYXJyMSIsImFycjIiLCJhcnJheU1lcmdlIiwicmVxdWlyZSIsImlkeCIsInB1c2giLCJhcnJheV92YWx1ZXMiLCJpbnB1dCIsInRtcEFyciIsImtleSIsImNvdW50IiwibWl4ZWRWYXIiLCJtb2RlIiwiY250IiwiaW5fYXJyYXkiLCJuZWVkbGUiLCJoYXlzdGFjayIsImFyZ1N0cmljdCIsInN0cmljdCIsIm1pY3JvdGltZSIsImdldEFzRmxvYXQiLCJzIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aW1pbmciLCJuYXZpZ2F0aW9uU3RhcnQiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWUiLCJmbG9vciIsImNhbGxfdXNlcl9mdW5jIiwiY2IiLCJwYXJhbWV0ZXJzIiwiY2FsbFVzZXJGdW5jQXJyYXkiLCJjYWxsX3VzZXJfZnVuY19hcnJheSIsIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJmdW5jIiwic2NvcGUiLCJ2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiIsIm1hdGNoIiwiRnVuY3Rpb24iLCJldmFsIiwiRXJyb3IiLCJhcHBseSIsImZ1bmN0aW9uX2V4aXN0cyIsImZ1bmNOYW1lIiwiaW5pX2dldCIsInZhcm5hbWUiLCIkbG9jdXR1cyIsInBocCIsImluaSIsImxvY2FsX3ZhbHVlIiwidW5kZWZpbmVkIiwiZXhwbG9kZSIsImRlbGltaXRlciIsInN0cmluZyIsImxpbWl0Iiwic3BsaXQiLCJqb2luIiwic3BsaWNlIiwiaW1wbG9kZSIsImdsdWUiLCJwaWVjZXMiLCJyZXRWYWwiLCJ0R2x1ZSIsIm1kNSIsInN0ciIsImhhc2giLCJjcnlwdG8iLCJtZDVzdW0iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwiZSIsInV0ZjhFbmNvZGUiLCJ4bCIsIl9yb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsIl9hZGRVbnNpZ25lZCIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiX0YiLCJ4IiwieSIsInoiLCJfRyIsIl9IIiwiX0kiLCJfRkYiLCJhIiwiYiIsImMiLCJkIiwiYWMiLCJfR0ciLCJfSEgiLCJfSUkiLCJfY29udmVydFRvV29yZEFycmF5IiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNUZW1wMSIsImxOdW1iZXJPZldvcmRzVGVtcDIiLCJsTnVtYmVyT2ZXb3JkcyIsImxXb3JkQXJyYXkiLCJsQnl0ZVBvc2l0aW9uIiwibEJ5dGVDb3VudCIsImNoYXJDb2RlQXQiLCJfd29yZFRvSGV4Iiwid29yZFRvSGV4VmFsdWUiLCJ3b3JkVG9IZXhWYWx1ZVRlbXAiLCJsQnl0ZSIsImxDb3VudCIsInN1YnN0ciIsIkFBIiwiQkIiLCJDQyIsIkREIiwiUzExIiwiUzEyIiwiUzEzIiwiUzE0IiwiUzIxIiwiUzIyIiwiUzIzIiwiUzI0IiwiUzMxIiwiUzMyIiwiUzMzIiwiUzM0IiwiUzQxIiwiUzQyIiwiUzQzIiwiUzQ0IiwidGVtcCIsInRvTG93ZXJDYXNlIiwicGFyc2Vfc3RyIiwiYXJyYXkiLCJzdHJBcnIiLCJTdHJpbmciLCJyZXBsYWNlIiwic2FsIiwicCIsImxhc3RPYmoiLCJjaHIiLCJ0bXAiLCJ2YWx1ZSIsInBvc3RMZWZ0QnJhY2tldFBvcyIsImtleXMiLCJrZXlzTGVuIiwiX2ZpeFN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXJBdCIsImluZGV4T2YiLCJzdHJfcmVwbGFjZSIsInNlYXJjaCIsInN1YmplY3QiLCJjb3VudE9iaiIsInJlcGwiLCJzbCIsImZsIiwiZiIsInIiLCJyYSIsInNhIiwic3RydG9sb3dlciIsInN0cnRvdXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImJhc2U2NF9kZWNvZGUiLCJlbmNvZGVkRGF0YSIsImRlY29kZVVURjhzdHJpbmciLCJtYXAiLCJhdG9iIiwiQnVmZmVyIiwiYjY0IiwibzEiLCJvMiIsIm8zIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJiaXRzIiwiZGVjIiwiZnJvbUNoYXJDb2RlIiwiYmFzZTY0X2VuY29kZSIsInN0cmluZ1RvRW5jb2RlIiwiZW5jb2RlVVRGOHN0cmluZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvU29saWRCeXRlcyIsInAxIiwiYnRvYSIsImVuYyIsImJvb2x2YWwiLCJpc0FycmF5IiwiZW1wdHkiLCJ1bmRlZiIsImxlbiIsImVtcHR5VmFsdWVzIiwiZmxvYXR2YWwiLCJwYXJzZUZsb2F0IiwiaW50dmFsIiwiYmFzZSIsInR5cGUiLCJpc05hTiIsImlzRmluaXRlIiwiY2VpbCIsImlzX2FycmF5IiwiX2dldEZ1bmNOYW1lIiwiZm4iLCJuYW1lIiwiZXhlYyIsIl9pc0FycmF5IiwiaW5pVmFsIiwiYXNTdHJpbmciLCJhc0Z1bmMiLCJpc19ib29sIiwiaXNfY2FsbGFibGUiLCJzeW50YXhPbmx5IiwiY2FsbGFibGVOYW1lIiwibWV0aG9kIiwidmFsaWRGdW5jdGlvbk5hbWUiLCJnZXRGdW5jTmFtZSIsImlzX2Zsb2F0IiwiaXNfaW50IiwiaXNfbnVsbCIsImlzX251bWVyaWMiLCJ3aGl0ZXNwYWNlIiwiaXNfb2JqZWN0IiwiaXNfc2NhbGFyIiwidGVzdCIsImlzX3N0cmluZyIsImlzc2V0IiwibCIsInV0ZjhfZW5jb2RlIiwiYXJnU3RyaW5nIiwidXRmdGV4dCIsInN0YXJ0IiwiZW5kIiwic3RyaW5nbCIsIm4iLCJjMSIsIlJhbmdlRXJyb3IiLCJjMiIsImFyciIsImxpc3RJRCIsInRhZyIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiaXRlbSIsIiRkYXRhIiwicmV0dXJuX2h0bWwiLCJJIiwiSyIsIiR2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCIkYXJyYXkiLCIka2V5IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInNlbGVjdG9yIiwic3RlcCIsImR1cmF0aW9uIiwiY3VycmVudCIsIl9zdGVwIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJhYnMiLCJpc051bWJlcmljIiwidmFsIiwiY2hlY2tQeCIsImNoZWNrUGN0IiwiY2hlY2tFbSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRhdGVJbml0aWFsIiwiZGF0ZUZpbmFsIiwibXMiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwibWlsbGlzZWNvbmQiLCJlbnRyaWVzIiwiZmlsdGVyIiwiZGF0ZUEiLCJkYXRlQiIsIiRlbGVtIiwialF1ZXJ5IiwidG9JU09TdHJpbmciLCJoaWRkZW4iLCIkT0tTIiwicHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZSIsInByb3BlcnR5Iiwic2hpZnQiLCJjb25zb2xlIiwid2FybiIsImxvZyIsImRhdGEiLCJjcmVhdGUiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJsb2NhdGlvbiIsInJhbmRvbSIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsImNhbGxiYWNrIiwidGl0bGUiLCJ0aW1lRW5kIiwiJGFyZ3Nfa2V5IiwiJGNvbnRlbnRzX2tleSIsInVybCIsInJlZHVjZSIsInYiLCIkc3RyaW5nIiwiJGNvbnRlbnRzIiwiJF9rIiwiV1BPbmlvbiIsIiR0eXBlIiwid3Bvbmlvbl9maWVsZHMiLCJhdHRyIiwiJHdoZXJlX3RvX2ZpbmQiLCIkaWQiLCJmaWVsZElEIiwiZmluZCIsIiR2YXJfaWQiLCIkZGVmYXVsdCIsImlzRmllbGQiLCJ3aW5kb3dBcmdzIiwidGV4dCIsIiRpc19zaG93IiwiZmFkZUluIiwiZmFkZU91dCIsIiRoYW5kbGUiLCIkanNvbiIsImRlYnVnX2luZm8iLCIkZGVmaW5lZF92YXJzIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsInN3YWwiLCJ0eHQiLCJodG1sIiwic2hvd0NvbmZpcm1CdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsInNob3dDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbiIsIndpZHRoIiwib25CZWZvcmVPcGVuIiwiZW5hYmxlTG9hZGluZyIsIm9uT3BlbiIsImpzb25WaWV3IiwiZGlzYWJsZUxvYWRpbmciLCJ0aGVuIiwicmVzdWx0Iiwic2V0dGluZ3NfYXJncyIsIm9wdGlvbiIsImlzX2RlYnVnIiwiZmllbGRfZGVidWdfaW5mbyIsIiR2YXJzIiwiJHV0eHQiLCIkbXR4dCIsIiRhY3Rpb24iLCIkb25TdWNjZXNzIiwiJG9uRXJyb3IiLCIkb25BbHdheXMiLCJvblN1Y2Nlc3MiLCJvbkFsd2F5cyIsIm9uRXJyb3IiLCIkYWpheCIsImFqYXgiLCJkb25lIiwicmVzIiwiZmFpbCIsImFsd2F5cyIsImNvbXBpbGVkIiwib3B0aW9ucyIsImV2YWx1YXRlIiwiaW50ZXJwb2xhdGUiLCJlc2NhcGUiLCJ2YXJpYWJsZSIsIl8iLCJ0ZW1wbGF0ZSIsIiRlbGVtZW50IiwicGFyYW0iLCJuZXN0YWJsZSIsInBhcmVudCIsIiR0aGlzIiwiJGVsIiwiaW5pdCIsInJ1bGVzZXQiLCJkZXBzIiwiY3JlYXRlUnVsZXNldCIsImRlcFJvb3QiLCJlbmFibGUiLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJoaWRlIiwiYWRkQ2xhc3MiLCJjaGVja1RhcmdldHMiLCJpbnN0YW5jZSIsImVhY2giLCJXUE9uaW9uX0RlcGVuZGVuY3kiLCJpc19qcXVlcnkiLCJpc191bmRlZmluZWQiLCIkc2VsZWN0b3IiLCIkY29udGV4dCIsIiRjb25maWciLCJzZXRfYXJncyIsImZpZWxkX2RlYnVnIiwiY29uZmlnIiwianNfZXJyb3JfaGFuZGxlciIsImpzX3ZhbGlkYXRvciIsImVyciIsImVycm9yIiwiYXBwZW5kVG8iLCJlbGVtZW50IiwianNfZXJyb3IiLCJqc192YWxpZGF0ZV9lbGVtIiwicnVsZXMiLCIkYXJnIiwiJHdwb25pb24iLCJqc19mdW5jIiwiJGV4aXN0cyIsIiR3cG9uaW9uX2RlYnVnIiwiZ2V0IiwiaWQiLCJhZGQiLCIkaW5mbyIsIiRhcnIiLCJGaWVsZCIsIk1vZHVsZSIsIlVuaXF1ZSIsIiRmb3VuZCIsImhhc0NsYXNzIiwiJElEIiwidGlwcHkiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiJGQiLCIkbm90aWNlX3R4dCIsIl9hcmdzIiwiJGFqYXhfa2V5IiwicGx1Z2luX2lkIiwiJF9pbnN0YW5jZXMiLCIkY2xhc3MiLCJnZXRfZmllbGRfY2xhc3MiLCJ3cCIsImhvb2tzIiwiYWRkQWN0aW9uIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwic2V0X2VsZW1lbnQiLCJzZXRfY29udHh0IiwibW9kdWxlX2luaXQiLCJlbGVtIiwiJGNvbnR4dCIsImNvbnRleHQiLCJXUE9uaW9uX1ZhbGlkYXRvciIsImZvcm0iLCJnZXRfZm9ybSIsImludmFsaWRIYW5kbGVyIiwic2libGluZ3MiLCJyZW1vdmUiLCJiZWZvcmUiLCJpZ25vcmUiLCJlcnJvclBsYWNlbWVudCIsInRyaWdnZXIiLCJlcnJvckNsYXNzIiwiZXJyb3JFbGVtZW50IiwidmFsaWRhdGUiLCJhY2NvcmRpb24iLCJoZWFkZXIiLCJjb2xsYXBzaWJsZSIsImFuaW1hdGUiLCJoZWlnaHRTdHlsZSIsImFjdGl2ZSIsImljb25zIiwiSUR0b0VsZW1lbnQiLCJXUE9uaW9uX0ZpZWxkIiwiJGlucHV0cyIsInJlbW92ZUF0dHIiLCJwcm9wIiwiY2hvc2VuIiwiaGFuZGxlX2FyZ3MiLCIkY2xvbmVfd3JhcCIsIiRhZGRfYnRuIiwiJGxpbWl0IiwiJGVyb3JfbXNnIiwiZXJyb3JfbXNnIiwiJHNvcnQiLCJzb3J0IiwiaXRlbXMiLCJoYW5kbGUiLCJwbGFjZWhvbGRlciIsImV2ZW50IiwidWkiLCJjc3MiLCJzdG9wIiwiV1BPbmlvbkNsb25lciIsImFkZF9idG4iLCJjbG9uZV9lbGVtIiwicmVtb3ZlX2J0biIsInRlbXBsYXRlQWZ0ZXJSZW5kZXIiLCIkZSIsIndwb25pb25fZmllbGQiLCJyZWxvYWQiLCJzb3J0YWJsZSIsIm9uTGltaXRSZWFjaGVkIiwiJGh0bWwiLCJwcmVwZW5kIiwiJF9fRSIsInNldFRpbWVvdXQiLCJzaG93X2FuaW1hdGlvbiIsImFuaW1hdGlvbnMiLCJoaWRlX2FuaW1hdGlvbiIsIndwQ29sb3JQaWNrZXIiLCIkc2V0dGluZ3MiLCIkdmlldyIsImFwcGVuZCIsInBsdWdpbnMiLCJyYW5nZVBsdWdpbiIsImZsYXRwaWNrciIsIiRyZXR1cm4iLCIkX2QiLCIkdmFsIiwiY3VycmVudFRhcmdldCIsIndlYnNhZmUiLCJmb250cyIsImJ1aWxkX29wdGlvbnMiLCJ2YXJpYW50cyIsImdvb2dsZV9mb250cyIsIiR2YXJpYW50IiwiJGh0bWxfdGVtcCIsIiRpbnB1dCIsIiRwcmV2aWV3Iiwid3BfbWVkaWFfZnJhbWUiLCIkYWRkIiwiJGVkaXQiLCIkY2xlYXIiLCIkbWFuYWdlIiwiaWRzIiwid2hhdCIsInN0YXRlIiwibWVkaWEiLCJnYWxsZXJ5IiwibGlicmFyeSIsImZyYW1lIiwibXVsdGlwbGUiLCJvcGVuIiwiZWRpdCIsInNldFN0YXRlIiwic2VsZWN0aW9uIiwic2VsZWN0ZWRJZHMiLCJtb2RlbHMiLCJhdHRhY2htZW50IiwidG9KU09OIiwic2l6ZXMiLCJ0aHVtYiIsInRodW1ibmFpbCIsIiR0bXAiLCJ0YXJnZXQiLCIkcGFyZW50IiwiJGltYWdlX2lkIiwiJGsiLCIkdiIsImN1cnNvciIsInNjcm9sbFNlbnNpdGl2aXR5IiwiZm9yY2VQbGFjZWhvbGRlclNpemUiLCJoZWxwZXIiLCJvcGFjaXR5IiwiJGl0ZW0iLCJoZWlnaHQiLCIkbWFwIiwiZGV0YWlscyIsImRldGFpbHNBdHRyaWJ1dGUiLCIkX2luc3RhbmNlIiwiZ2VvY29tcGxldGUiLCJiaW5kIiwibGF0TG5nIiwiZ2VvY29kZXIiLCJnb29nbGUiLCJtYXBzIiwiR2VvY29kZXIiLCJnZW9jb2RlIiwibGF0IiwibG5nIiwiJGdyb3VwX3dyYXAiLCIkZXJyb3JfbXNnIiwiY2xpY2siLCJvblJlbW92ZSIsInNldHRpbmdzIiwiJF90aGlzIiwiJHJlbW92ZV9idG4iLCIkd29yayIsImVsZW1zIiwicG9wdXAiLCJlbG0iLCJpbml0X3Rvb2x0aXAiLCJwb3B1cF90b29sdGlwIiwiJHRwIiwiJGVsbSIsIiRpbnN0YW5jZSIsIiRoZWlnaHQiLCIkaWNvbiIsImNsb3NlTW9kYWwiLCJlbmFibGVkIiwiZGlzYWJsZWQiLCIkcmVzIiwic3VjY2VzcyIsInJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwiJHBvcHVwIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjdXN0b21DbGFzcyIsIiRwb3B1cF9lbGVtIiwiJHByZXZpZXdfYWRkIiwibWVkaWFfaW5zdGFuY2UiLCJob29rIiwiZG9BY3Rpb24iLCJmaXJzdCIsImF0dHJpYnV0ZXMiLCJpbnB1dG1hc2siLCIkdGhpc19lbGVtIiwiJHRhYiIsImdsb2JhbF92YWxpZGF0ZSIsImFmdGVyIiwiZXEiLCJpbWFnZSIsInNob3dfcHJldmlldyIsInNlbGVjdDIiLCJzZWxlY3RpemUiLCIkZW5hYmxlZCIsIiRkaXNhYmxlZCIsImNvbm5lY3RXaXRoIiwiZm9udF93ZWlnaHRfc3R5bGUiLCIkZm9udF9maWVsZCIsIiRmb250IiwiJGZvbnRfd2VpZ2h0X3N0eWxlIiwiZm9udF9zdHlsZSIsIiR0YWciLCIkY29sb3IiLCIkYWxpZ24iLCIkZm9udFNpemUiLCIkbGluZUhlaWdodCIsIiRiYWNrVVBGb250IiwiJGRpcmVjdGlvbiIsIiRsZXR0ZXJTcGFjaW5nIiwiaHJlZiIsIndlaWdodCIsIiRfYXR0cnMiLCIkdGV4dCIsIiR3ZWlnaHRfdmFsIiwiJHN0eWxlX3ZhbCIsImZyYW1lX3RpdGxlIiwidXBsb2FkX3R5cGUiLCJidXR0b24iLCJpbnNlcnRfdGl0bGUiLCIkdGV4dGFyZWEiLCJ3cExpbmsiLCIkZGVwIiwiY29udHJvbGxlciIsIiRjb250cm9sbGVyIiwiJGNvbmRpdGlvbiIsImNvbmRpdGlvbiIsIiRmaWVsZCIsIiRJTlBVVCIsImNvbnR4dCIsImNyZWF0ZVJ1bGUiLCJpbmNsdWRlIiwiJGZpZCIsIiRpc19sb2FkaW5nIiwid3BvaW1nIiwiaW1nIiwidGVzdERpbWVuc2lvbnMiLCJuYXR1cmFsV2lkdGgiLCIkdG9vbHRpcF9rZXkiLCJ2YWxpZF9qc29uIiwidXBkYXRlRHVyYXRpb24iLCJvblNob3ciLCJjb250ZW50IiwiZmV0Y2giLCJyZXNwIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBvcHBlckluc3RhbmNlIiwiY2F0Y2giLCJvbkhpZGRlbiIsInBvcHBlck9wdGlvbnMiLCJtb2RpZmllcnMiLCJwcmV2ZW50T3ZlcmZsb3ciLCIkaW1hZ2UiLCJpbWFnZVVybCIsImJhY2tncm91bmQiLCJiYWNrZHJvcCIsIiRtY2VfZWRpdG9yIiwidGlueU1DRVByZUluaXQiLCJtY2VJbml0IiwiJHF1aWNrX3RhZ3MiLCJxdEluaXQiLCIkTkVXX0lEIiwiJHRleHRBcmVhIiwiY2xvbmUiLCIkYWN0dWFsX0lEIiwiJGFjdHVhbF9odG1sIiwiJHJlZ2V4IiwidGlueW1jZSIsInRpbnlNQ0UiLCJxdWlja3RhZ3MiLCJXUE9uaW9uX01ldGFib3hfTW9kdWxlIiwibWVudSIsInNhdmVfaGFuZGxlciIsIm5leHQiLCJpcyIsInNsaWRlVG9nZ2xlIiwic2xpZGVVcCIsIiRocmVmIiwiJHdwb25pb25faGVscGVyIiwidXJsX3BhcmFtcyIsIiRzZWN0aW9uIiwiJHBhcmVudF9hY3RpdmVzIiwiJGN1cnJlbnQiLCIkIiwiJGJhc2UiLCIkaGlkZGVuIiwiYmxvY2siLCJtZXNzYWdlIiwib3ZlcmxheUNTUyIsIiRmaWVsZHMiLCIkdmFsdWVzIiwic2VyaWFsaXplIiwidW5ibG9jayIsInBvc3RfaWQiLCJ2YWx1ZXMiLCJmaWVsZEFyZ3MiLCJ3cG9uaW9uX21ldGFib3hfbW9kdWxlIiwiZGVmYXVsdCIsIndwb25pb25fbmV3X2ZpZWxkIiwid3Bvbmlvbl9tb2RhbCIsIiR3cG8iLCIkd3BfaG9vayIsImFwcGx5RmlsdGVycyIsInRleHRhcmVhIiwiaW1hZ2Vfc2VsZWN0Iiwic3dpdGNoZXIiLCJjb2xvcl9wYWxldHRlIiwiaWNvbl9waWNrZXIiLCJmb250X3NlbGVjdG9yIiwiZ3JvdXAiLCJ3cF9lZGl0b3IiLCJyZWxvYWRfd3BfZWRpdG9yIiwiZmllbGRzZXQiLCJ3cF9saW5rcyIsImNoZWNrYm94X3JhZGlvIiwia2V5dmFsdWVfcGFpciIsImNvbG9yX3BpY2tlciIsImRhdGVfcGlja2VyIiwiaW1hZ2VfcG9wdXAiLCJ1cGxvYWQiLCJpbWFnZV91cGxvYWQiLCJqcXVlcnlfdGFiIiwiZmllbGRfdG9vbHRpcCIsImNsb25lX2VsZW1lbnQiLCJzb3J0ZXIiLCJnb29nbGVfbWFwcyIsInR5cG9ncmFwaHkiLCJvZW1iZWQiLCJ0b2dnbGVDbGFzcyIsIiR3cG9mX2RpdiIsIiR3aWRnZXQiLCJjbG9zZXN0IiwiV1BPbmlvbl9RdWlja19FZGl0IiwibG9hZGluZ19zY3JlZW4iLCJXUE9uaW9uX1dQX01vZGFsIiwiQmFja2JvbmUiLCJWaWV3IiwiZXh0ZW5kIiwidGVtcGxhdGVzIiwiZXZlbnRzIiwiYWN0aXZlX3BhZ2UiLCJhY3RpdmVfc2VjdGlvbiIsImluaXRpYWxpemUiLCJsZWZ0X21lbnUiLCJoaWRlX21lbnUiLCJiaW5kQWxsIiwiaW5pdF90ZW1wbGF0ZXMiLCJyZW5kZXIiLCIkbSIsImZyYW1lX21lbnVfaXRlbSIsInJvdXRlcl9tZW51X2l0ZW0iLCJwYWdlX2NvbnRlbnQiLCJzZWN0aW9uX2NvbnRlbnQiLCIkY29udGVudCIsIiRfY29udGVudCIsIiRfbWVudSIsInByZXNlcnZlRm9jdXMiLCJmb2N1cyIsImhhbmRsZV9sZWZ0X21lbnVfY2xpY2siLCIkdGFyZ2V0IiwiJHNob3dfdGFyZ2V0IiwiaGFuZGxlX3RhYl9jbGljayIsIiRwYWdlIiwiaGFzIiwidW5kZWxlZ2F0ZUV2ZW50cyIsIm9mZiIsInNhdmVNb2RhbCIsImRvTm90aGluZyIsIiRvcHRpb25zIiwiY2xhc3NOYW1lIiwibW9kYWwiLCJnZXRfbGVmdF9tZW51Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7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QUd4QnVnQixjQUFXLGVBSGE7QUFJeEJDLFVBQU8sRUFKaUI7QUFLeEIxQixjQUFXO0FBTGEsR0FBVixFQU1ad0IsUUFOWSxDQUFmOztBQVFBLE1BQUlsQyxnQkFBSixDQUFzQjNZLEVBQUU4WSxNQUFGLENBQVU7QUFDL0JNLGNBQVcsS0FBSzRCLGFBQUwsRUFEb0I7QUFFL0J2ZCxTQUFNLEtBQUtrQyxPQUFMLENBQWMsTUFBZCxDQUZ5QjtBQUcvQjBaLGNBQVcsS0FBSzFaLE9BQUwsQ0FBYyxXQUFkO0FBSG9CLEdBQVYsRUFJbkIsS0FBS0EsT0FBTCxDQUFjLE9BQWQsQ0FKbUIsQ0FBdEI7QUFLQTs7OztrQ0FFZTtBQUNmLE9BQUlxSixVQUFVLEtBQWQ7QUFDQSxPQUFJLEtBQUtySixPQUFMLENBQWMsTUFBZCxDQUFKLEVBQTZCO0FBQzVCcUosY0FBVSxFQUFWOztBQUVBaEosTUFBRW9CLElBQUYsQ0FBUSxLQUFLekIsT0FBTCxDQUFjLE1BQWQsQ0FBUixFQUFnQyxVQUFFckosS0FBRixFQUFTUSxJQUFULEVBQW1CO0FBQ2xEa1MsYUFBU2xTLElBQVQsSUFBb0IsT0FBT1IsTUFBTyxZQUFQLENBQVAsS0FBaUMsV0FBbkMsR0FBbURBLE1BQU8sWUFBUCxDQUFuRCxHQUEyRUEsTUFBTyxPQUFQLENBQTdGO0FBQ0EsS0FGRDtBQUdBO0FBQ0QsVUFBTzBTLE9BQVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTUYsbUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3dwb25pb24tY29yZS5qc1wiKTtcbiIsImNsYXNzIEpTX1BhcnNlX0FyZ3Mge1xyXG5cdGNvbnN0cnVjdG9yKCAkYXJncyA9IHt9LCAkZGVmYXVsdHMgPSB7fSwgJGlzX25lc3RlZCA9IGZhbHNlICkge1xyXG5cdFx0dGhpcy5hcmdzICAgICA9ICRhcmdzO1xyXG5cdFx0dGhpcy5kZWZhdWx0cyA9ICRkZWZhdWx0cztcclxuXHRcdHRoaXMubmVzdGVkICAgPSAkaXNfbmVzdGVkO1xyXG5cdFx0dGhpcy5wYXJzZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuYXJncztcclxuXHR9XHJcblxyXG5cdHBhcnNlKCkge1xyXG5cdFx0Zm9yKCBsZXQgJF9rZXkgaW4gdGhpcy5kZWZhdWx0cyApIHtcclxuXHRcdFx0aWYoIHRydWUgPT09IHRoaXMubmVzdGVkICYmIHR5cGVvZiAgdGhpcy5kZWZhdWx0c1sgJF9rZXkgXSA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gbmV3IEpTX1BhcnNlX0FyZ3MoIHRoaXMuYXJnc1sgJF9rZXkgXSwgdGhpcy5kZWZhdWx0c1sgJF9rZXkgXSwgdGhpcy5uZXN0ZWQgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiggdHlwZW9mIHRoaXMuYXJnc1sgJF9rZXkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFyZ3NbICRfa2V5IF0gPSB0aGlzLmRlZmF1bHRzWyAkX2tleSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAkYXJncyA9IHt9LCAkZGVmYXVsdHMgPSB7fSwgJGlzX2RlZXAgPSBmYWxzZSApID0+IG5ldyBKU19QYXJzZV9BcmdzKCAkYXJncywgJGRlZmF1bHRzLCAkaXNfZGVlcCApOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcnJheV9tZXJnZSgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9hcnJheV9tZXJnZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBOYXRlXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogam9zaFxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIxID0ge1wiY29sb3JcIjogXCJyZWRcIiwgMDogMiwgMTogNH1cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMiA9IHswOiBcImFcIiwgMTogXCJiXCIsIFwiY29sb3JcIjogXCJncmVlblwiLCBcInNoYXBlXCI6IFwidHJhcGV6b2lkXCIsIDI6IDR9XG4gIC8vICAgZXhhbXBsZSAxOiBhcnJheV9tZXJnZSgkYXJyMSwgJGFycjIpXG4gIC8vICAgcmV0dXJucyAxOiB7XCJjb2xvclwiOiBcImdyZWVuXCIsIDA6IDIsIDE6IDQsIDI6IFwiYVwiLCAzOiBcImJcIiwgXCJzaGFwZVwiOiBcInRyYXBlem9pZFwiLCA0OiA0fVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRhcnIxID0gW11cbiAgLy8gICBleGFtcGxlIDI6IHZhciAkYXJyMiA9IHsxOiBcImRhdGFcIn1cbiAgLy8gICBleGFtcGxlIDI6IGFycmF5X21lcmdlKCRhcnIxLCAkYXJyMilcbiAgLy8gICByZXR1cm5zIDI6IHswOiBcImRhdGFcIn1cblxuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIHZhciBhcmdsID0gYXJncy5sZW5ndGg7XG4gIHZhciBhcmc7XG4gIHZhciByZXRPYmogPSB7fTtcbiAgdmFyIGsgPSAnJztcbiAgdmFyIGFyZ2lsID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjdCA9IDA7XG4gIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciByZXRBcnIgPSB0cnVlO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBhcmdsOyBpKyspIHtcbiAgICBpZiAodG9TdHIuY2FsbChhcmdzW2ldKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0QXJyID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAocmV0QXJyKSB7XG4gICAgcmV0QXJyID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IGFyZ2w7IGkrKykge1xuICAgICAgcmV0QXJyID0gcmV0QXJyLmNvbmNhdChhcmdzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldEFycjtcbiAgfVxuXG4gIGZvciAoaSA9IDAsIGN0ID0gMDsgaSA8IGFyZ2w7IGkrKykge1xuICAgIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKHRvU3RyLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgZm9yIChqID0gMCwgYXJnaWwgPSBhcmcubGVuZ3RoOyBqIDwgYXJnaWw7IGorKykge1xuICAgICAgICByZXRPYmpbY3QrK10gPSBhcmdbal07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoayBpbiBhcmcpIHtcbiAgICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGlmIChwYXJzZUludChrLCAxMCkgKyAnJyA9PT0gaykge1xuICAgICAgICAgICAgcmV0T2JqW2N0KytdID0gYXJnW2tdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXRPYmpba10gPSBhcmdba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldE9iajtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheV9tZXJnZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcnJheV9tZXJnZV9yZWN1cnNpdmUoYXJyMSwgYXJyMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2FycmF5X21lcmdlX3JlY3Vyc2l2ZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFN1Ymhhc2lzIERlYlxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjEgPSB7J2NvbG9yJzogeydmYXZvcml0ZSc6ICdyZWQnfSwgMDogNX1cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMiA9IHswOiAxMCwgJ2NvbG9yJzogeydmYXZvcml0ZSc6ICdncmVlbicsIDA6ICdibHVlJ319XG4gIC8vICAgZXhhbXBsZSAxOiBhcnJheV9tZXJnZV9yZWN1cnNpdmUoJGFycjEsICRhcnIyKVxuICAvLyAgIHJldHVybnMgMTogeydjb2xvcic6IHsnZmF2b3JpdGUnOiB7MDogJ3JlZCcsIDE6ICdncmVlbid9LCAwOiAnYmx1ZSd9LCAxOiA1LCAxOiAxMH1cbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMVxuXG4gIHZhciBhcnJheU1lcmdlID0gcmVxdWlyZSgnLi4vYXJyYXkvYXJyYXlfbWVyZ2UnKTtcbiAgdmFyIGlkeCA9ICcnO1xuXG4gIGlmIChhcnIxICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIxKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBhcnIyICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIyKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGZvciAoaWR4IGluIGFycjIpIHtcbiAgICAgIGFycjEucHVzaChhcnIyW2lkeF0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcnIxICYmIGFycjEgaW5zdGFuY2VvZiBPYmplY3QgJiYgYXJyMiAmJiBhcnIyIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgZm9yIChpZHggaW4gYXJyMikge1xuICAgICAgaWYgKGlkeCBpbiBhcnIxKSB7XG4gICAgICAgIGlmIChfdHlwZW9mKGFycjFbaWR4XSkgPT09ICdvYmplY3QnICYmICh0eXBlb2YgYXJyMiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYXJyMikpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGFycjFbaWR4XSA9IGFycmF5TWVyZ2UoYXJyMVtpZHhdLCBhcnIyW2lkeF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycjFbaWR4XSA9IGFycjJbaWR4XTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyMVtpZHhdID0gYXJyMltpZHhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnIxO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5X21lcmdlX3JlY3Vyc2l2ZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXJyYXlfdmFsdWVzKGlucHV0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYXJyYXlfdmFsdWVzL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBhcnJheV92YWx1ZXMoIHtmaXJzdG5hbWU6ICdLZXZpbicsIHN1cm5hbWU6ICd2YW4gWm9ubmV2ZWxkJ30gKVxuICAvLyAgIHJldHVybnMgMTogWyAnS2V2aW4nLCAndmFuIFpvbm5ldmVsZCcgXVxuXG4gIHZhciB0bXBBcnIgPSBbXTtcbiAgdmFyIGtleSA9ICcnO1xuXG4gIGZvciAoa2V5IGluIGlucHV0KSB7XG4gICAgdG1wQXJyW3RtcEFyci5sZW5ndGhdID0gaW5wdXRba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0bXBBcnI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlfdmFsdWVzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb3VudChtaXhlZFZhciwgbW9kZSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NvdW50L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IFdhbGRvIE1hbHF1aSBTaWx2YSAoaHR0cDovL3dhbGRvLm1hbHF1aS5pbmZvKVxuICAvLyAgICBpbnB1dCBieTogbWVyYWJpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBTb3JlbiBIYW5zZW5cbiAgLy8gYnVnZml4ZWQgYnk6IE9saXZpZXIgTG91dmlnbmVzIChodHRwOi8vbWctY3JlYS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGNvdW50KFtbMCwwXSxbMCwtNF1dLCAnQ09VTlRfUkVDVVJTSVZFJylcbiAgLy8gICByZXR1cm5zIDE6IDZcbiAgLy8gICBleGFtcGxlIDI6IGNvdW50KHsnb25lJyA6IFsxLDIsMyw0LDVdfSwgJ0NPVU5UX1JFQ1VSU0lWRScpXG4gIC8vICAgcmV0dXJucyAyOiA2XG5cbiAgdmFyIGtleTtcbiAgdmFyIGNudCA9IDA7XG5cbiAgaWYgKG1peGVkVmFyID09PSBudWxsIHx8IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChtaXhlZFZhci5jb25zdHJ1Y3RvciAhPT0gQXJyYXkgJiYgbWl4ZWRWYXIuY29uc3RydWN0b3IgIT09IE9iamVjdCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKG1vZGUgPT09ICdDT1VOVF9SRUNVUlNJVkUnKSB7XG4gICAgbW9kZSA9IDE7XG4gIH1cbiAgaWYgKG1vZGUgIT09IDEpIHtcbiAgICBtb2RlID0gMDtcbiAgfVxuXG4gIGZvciAoa2V5IGluIG1peGVkVmFyKSB7XG4gICAgaWYgKG1peGVkVmFyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNudCsrO1xuICAgICAgaWYgKG1vZGUgPT09IDEgJiYgbWl4ZWRWYXJba2V5XSAmJiAobWl4ZWRWYXJba2V5XS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgbWl4ZWRWYXJba2V5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSkge1xuICAgICAgICBjbnQgKz0gY291bnQobWl4ZWRWYXJba2V5XSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3VudC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5fYXJyYXkobmVlZGxlLCBoYXlzdGFjaywgYXJnU3RyaWN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW5fYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogdmxhZG8gaG91YmFcbiAgLy8gaW1wcm92ZWQgYnk6IEpvbmFzIFNjaWFuZ3VsYSBTdHJlZXQgKEpvbmkyQmFjaylcbiAgLy8gICAgaW5wdXQgYnk6IEJpbGx5XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogaW5fYXJyYXkoJ3ZhbicsIFsnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaW5fYXJyYXkoJ3ZsYWRvJywgezA6ICdLZXZpbicsIHZsYWRvOiAndmFuJywgMTogJ1pvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcbiAgLy8gICBleGFtcGxlIDM6IGluX2FycmF5KDEsIFsnMScsICcyJywgJzMnXSlcbiAgLy8gICBleGFtcGxlIDM6IGluX2FycmF5KDEsIFsnMScsICcyJywgJzMnXSwgZmFsc2UpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgZXhhbXBsZSA0OiBpbl9hcnJheSgxLCBbJzEnLCAnMicsICczJ10sIHRydWUpXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuXG4gIHZhciBrZXkgPSAnJztcbiAgdmFyIHN0cmljdCA9ICEhYXJnU3RyaWN0O1xuXG4gIC8vIHdlIHByZXZlbnQgdGhlIGRvdWJsZSBjaGVjayAoc3RyaWN0ICYmIGFycltrZXldID09PSBuZGwpIHx8ICghc3RyaWN0ICYmIGFycltrZXldID09PSBuZGwpXG4gIC8vIGluIGp1c3Qgb25lIGZvciwgaW4gb3JkZXIgdG8gaW1wcm92ZSB0aGUgcGVyZm9ybWFuY2VcbiAgLy8gZGVjaWRpbmcgd2ljaCB0eXBlIG9mIGNvbXBhcmF0aW9uIHdpbGwgZG8gYmVmb3JlIHdhbGsgYXJyYXlcbiAgaWYgKHN0cmljdCkge1xuICAgIGZvciAoa2V5IGluIGhheXN0YWNrKSB7XG4gICAgICBpZiAoaGF5c3RhY2tba2V5XSA9PT0gbmVlZGxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGtleSBpbiBoYXlzdGFjaykge1xuICAgICAgaWYgKGhheXN0YWNrW2tleV0gPT0gbmVlZGxlKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbl9hcnJheS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWljcm90aW1lKGdldEFzRmxvYXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9taWNyb3RpbWUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGltcHJvdmVkIGJ5OiBEdW1pdHJ1IFV6dW4gKGh0dHA6Ly9kdXp1bi5tZSlcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gbWljcm90aW1lKHRydWUpXG4gIC8vICAgZXhhbXBsZSAxOiAkdGltZVN0YW1wID4gMTAwMDAwMDAwMCAmJiAkdGltZVN0YW1wIDwgMjAwMDAwMDAwMFxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogL14wXFwuWzAtOV17MSw2fSBbMC05XXsxMCwxMH0kLy50ZXN0KG1pY3JvdGltZSgpKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBzO1xuICB2YXIgbm93O1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBub3cgPSAocGVyZm9ybWFuY2Uubm93KCkgKyBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlNikgLyAxZTYgKyAnICcgKyBzO1xuICB9IGVsc2Uge1xuICAgIG5vdyA9IChEYXRlLm5vdyA/IERhdGUubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTMpIC8gMWUzICsgJyAnICsgcztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pY3JvdGltZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0aW1lKCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3RpbWUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBHZWVrRkcgKGh0dHA6Ly9nZWVrZmcuYmxvZ3Nwb3QuY29tKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IG1ldGpheVxuICAvLyBpbXByb3ZlZCBieTogSEtNXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHRpbWVTdGFtcCA9IHRpbWUoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkdGltZVN0YW1wID4gMTAwMDAwMDAwMCAmJiAkdGltZVN0YW1wIDwgMjAwMDAwMDAwMFxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmMoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZHMgb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkgd2hpY2ggaW4gdHVybiBkZXBlbmRzIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuYygnaXNOYU4nLCAnYScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgdmFyIGNhbGxVc2VyRnVuY0FycmF5ID0gcmVxdWlyZSgnLi4vZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknKTtcbiAgcGFyYW1ldGVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBjYWxsVXNlckZ1bmNBcnJheShjYiwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuY19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IFRoaWFnbyBNYXRhIChodHRwOi8vdGhpYWdvbWF0YS5ibG9nLmNvbSlcbiAgLy8gIHJldmlzZWQgYnk6IEpvbiBIb2hsZVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kaW5nIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYCBhbmQvb3IgYG5ldyBGdW5jdGlvbmAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWydhJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbMV0pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gIHZhciBmdW5jO1xuICB2YXIgc2NvcGUgPSBudWxsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICBpZiAodHlwZW9mIGNiID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZ1bmMgPSAkZ2xvYmFsW2NiXTtcbiAgICB9IGVsc2UgaWYgKGNiLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbihudWxsLCAncmV0dXJuICcgKyBjYikoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICAgIH1cbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2IpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgZnVuYyA9IGV2YWwoY2JbMF0gKyBcIlsnXCIgKyBjYlsxXSArIFwiJ11cIik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jID0gY2JbMF1bY2JbMV1dO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JbMF1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjb3BlID0gJGdsb2JhbFtjYlswXV07XG4gICAgICB9IGVsc2UgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBzY29wZSA9IGV2YWwoY2JbMF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF90eXBlb2YoY2JbMF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgc2NvcGUgPSBjYlswXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZnVuYyA9IGNiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGZ1bmMgKyAnIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gZnVuYy5hcHBseShzY29wZSwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmNfYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZ1bmN0aW9uX2V4aXN0cyhmdW5jTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Z1bmN0aW9uX2V4aXN0cy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBTdGV2ZSBDbGF5XG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogZnVuY3Rpb25fZXhpc3RzKCdpc0Zpbml0ZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgICAgICB0ZXN0OiBza2lwLTFcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuXG4gIGlmICh0eXBlb2YgZnVuY05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgZnVuY05hbWUgPSAkZ2xvYmFsW2Z1bmNOYW1lXTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgZnVuY05hbWUgPT09ICdmdW5jdGlvbic7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnVuY3Rpb25fZXhpc3RzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmlfZ2V0KHZhcm5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbmlfZ2V0L1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSBpbmkgdmFsdWVzIG11c3QgYmUgc2V0IGJ5IGluaV9zZXQgb3IgbWFudWFsbHkgd2l0aGluIGFuIGluaSBmaWxlXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfc2V0KCdkYXRlLnRpbWV6b25lJywgJ0FzaWEvSG9uZ19Lb25nJylcbiAgLy8gICBleGFtcGxlIDE6IGluaV9nZXQoJ2RhdGUudGltZXpvbmUnKVxuICAvLyAgIHJldHVybnMgMTogJ0FzaWEvSG9uZ19Lb25nJ1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG4gICRsb2N1dHVzLnBocC5pbmkgPSAkbG9jdXR1cy5waHAuaW5pIHx8IHt9O1xuXG4gIGlmICgkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdICYmICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICgkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaV9nZXQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwbG9kZShkZWxpbWl0ZXIsIHN0cmluZywgbGltaXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9leHBsb2RlL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IGV4cGxvZGUoJyAnLCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiBbICdLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJyBdXG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyIHx8IHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHJpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGRlbGltaXRlciA9PT0gJycgfHwgZGVsaW1pdGVyID09PSBmYWxzZSB8fCBkZWxpbWl0ZXIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRlbGltaXRlcikpID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygc3RyaW5nID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2Ygc3RyaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzdHJpbmcpKSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgMDogJydcbiAgICB9O1xuICB9XG4gIGlmIChkZWxpbWl0ZXIgPT09IHRydWUpIHtcbiAgICBkZWxpbWl0ZXIgPSAnMSc7XG4gIH1cblxuICAvLyBIZXJlIHdlIGdvLi4uXG4gIGRlbGltaXRlciArPSAnJztcbiAgc3RyaW5nICs9ICcnO1xuXG4gIHZhciBzID0gc3RyaW5nLnNwbGl0KGRlbGltaXRlcik7XG5cbiAgaWYgKHR5cGVvZiBsaW1pdCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBzO1xuXG4gIC8vIFN1cHBvcnQgZm9yIGxpbWl0XG4gIGlmIChsaW1pdCA9PT0gMCkgbGltaXQgPSAxO1xuXG4gIC8vIFBvc2l0aXZlIGxpbWl0XG4gIGlmIChsaW1pdCA+IDApIHtcbiAgICBpZiAobGltaXQgPj0gcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICByZXR1cm4gcy5zbGljZSgwLCBsaW1pdCAtIDEpLmNvbmNhdChbcy5zbGljZShsaW1pdCAtIDEpLmpvaW4oZGVsaW1pdGVyKV0pO1xuICB9XG5cbiAgLy8gTmVnYXRpdmUgbGltaXRcbiAgaWYgKC1saW1pdCA+PSBzLmxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHMuc3BsaWNlKHMubGVuZ3RoICsgbGltaXQpO1xuICByZXR1cm4gcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHBsb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGltcGxvZGUoZ2x1ZSwgcGllY2VzKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW1wbG9kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBXYWxkbyBNYWxxdWkgU2lsdmEgKGh0dHA6Ly93YWxkby5tYWxxdWkuaW5mbylcbiAgLy8gaW1wcm92ZWQgYnk6IEl0c2Fjb24gKGh0dHA6Ly93d3cuaXRzYWNvbi5uZXQvKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGltcGxvZGUoJyAnLCBbJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnXSlcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogaW1wbG9kZSgnICcsIHtmaXJzdDonS2V2aW4nLCBsYXN0OiAndmFuIFpvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMjogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgdmFyIGkgPSAnJztcbiAgdmFyIHJldFZhbCA9ICcnO1xuICB2YXIgdEdsdWUgPSAnJztcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHBpZWNlcyA9IGdsdWU7XG4gICAgZ2x1ZSA9ICcnO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgcGllY2VzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwaWVjZXMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBpZWNlcykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybiBwaWVjZXMuam9pbihnbHVlKTtcbiAgICB9XG4gICAgZm9yIChpIGluIHBpZWNlcykge1xuICAgICAgcmV0VmFsICs9IHRHbHVlICsgcGllY2VzW2ldO1xuICAgICAgdEdsdWUgPSBnbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0VmFsO1xuICB9XG5cbiAgcmV0dXJuIHBpZWNlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbXBsb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZDUoc3RyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvbWQ1L1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBub3RlIDE6IEtlZXAgaW4gbWluZCB0aGF0IGluIGFjY29yZGFuY2Ugd2l0aCBQSFAsIHRoZSB3aG9sZSBzdHJpbmcgaXMgYnVmZmVyZWQgYW5kIHRoZW5cbiAgLy8gICAgICBub3RlIDE6IGhhc2hlZC4gSWYgYXZhaWxhYmxlLCB3ZSdkIHJlY29tbWVuZCB1c2luZyBOb2RlJ3MgbmF0aXZlIGNyeXB0byBtb2R1bGVzIGRpcmVjdGx5XG4gIC8vICAgICAgbm90ZSAxOiBpbiBhIHN0ZWFtaW5nIGZhc2hpb24gZm9yIGZhc3RlciBhbmQgbW9yZSBlZmZpY2llbnQgaGFzaGluZ1xuICAvLyAgIGV4YW1wbGUgMTogbWQ1KCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICc2ZTY1OGQ0YmZjYjU5Y2MxM2Y5NmMxNDQ1MGFjNDBiOSdcblxuICB2YXIgaGFzaDtcbiAgdHJ5IHtcbiAgICB2YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gICAgdmFyIG1kNXN1bSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgICBtZDVzdW0udXBkYXRlKHN0cik7XG4gICAgaGFzaCA9IG1kNXN1bS5kaWdlc3QoJ2hleCcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFzaCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHZhciB1dGY4RW5jb2RlID0gcmVxdWlyZSgnLi4veG1sL3V0ZjhfZW5jb2RlJyk7XG4gIHZhciB4bDtcblxuICB2YXIgX3JvdGF0ZUxlZnQgPSBmdW5jdGlvbiBfcm90YXRlTGVmdChsVmFsdWUsIGlTaGlmdEJpdHMpIHtcbiAgICByZXR1cm4gbFZhbHVlIDw8IGlTaGlmdEJpdHMgfCBsVmFsdWUgPj4+IDMyIC0gaVNoaWZ0Qml0cztcbiAgfTtcblxuICB2YXIgX2FkZFVuc2lnbmVkID0gZnVuY3Rpb24gX2FkZFVuc2lnbmVkKGxYLCBsWSkge1xuICAgIHZhciBsWDQsIGxZNCwgbFg4LCBsWTgsIGxSZXN1bHQ7XG4gICAgbFg4ID0gbFggJiAweDgwMDAwMDAwO1xuICAgIGxZOCA9IGxZICYgMHg4MDAwMDAwMDtcbiAgICBsWDQgPSBsWCAmIDB4NDAwMDAwMDA7XG4gICAgbFk0ID0gbFkgJiAweDQwMDAwMDAwO1xuICAgIGxSZXN1bHQgPSAobFggJiAweDNGRkZGRkZGKSArIChsWSAmIDB4M0ZGRkZGRkYpO1xuICAgIGlmIChsWDQgJiBsWTQpIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gMHg4MDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICB9XG4gICAgaWYgKGxYNCB8IGxZNCkge1xuICAgICAgaWYgKGxSZXN1bHQgJiAweDQwMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiBsUmVzdWx0IF4gMHhDMDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsUmVzdWx0IF4gMHg0MDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxSZXN1bHQgXiBsWDggXiBsWTg7XG4gICAgfVxuICB9O1xuXG4gIHZhciBfRiA9IGZ1bmN0aW9uIF9GKHgsIHksIHopIHtcbiAgICByZXR1cm4geCAmIHkgfCB+eCAmIHo7XG4gIH07XG4gIHZhciBfRyA9IGZ1bmN0aW9uIF9HKHgsIHksIHopIHtcbiAgICByZXR1cm4geCAmIHogfCB5ICYgfno7XG4gIH07XG4gIHZhciBfSCA9IGZ1bmN0aW9uIF9IKHgsIHksIHopIHtcbiAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9O1xuICB2YXIgX0kgPSBmdW5jdGlvbiBfSSh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHkgXiAoeCB8IH56KTtcbiAgfTtcblxuICB2YXIgX0ZGID0gZnVuY3Rpb24gX0ZGKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9GKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0dHID0gZnVuY3Rpb24gX0dHKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9HKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0hIID0gZnVuY3Rpb24gX0hIKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9IKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0lJID0gZnVuY3Rpb24gX0lJKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9JKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX2NvbnZlcnRUb1dvcmRBcnJheSA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKSB7XG4gICAgdmFyIGxXb3JkQ291bnQ7XG4gICAgdmFyIGxNZXNzYWdlTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICB2YXIgbE51bWJlck9mV29yZHNUZW1wMSA9IGxNZXNzYWdlTGVuZ3RoICsgODtcbiAgICB2YXIgbE51bWJlck9mV29yZHNUZW1wMiA9IChsTnVtYmVyT2ZXb3Jkc1RlbXAxIC0gbE51bWJlck9mV29yZHNUZW1wMSAlIDY0KSAvIDY0O1xuICAgIHZhciBsTnVtYmVyT2ZXb3JkcyA9IChsTnVtYmVyT2ZXb3Jkc1RlbXAyICsgMSkgKiAxNjtcbiAgICB2YXIgbFdvcmRBcnJheSA9IG5ldyBBcnJheShsTnVtYmVyT2ZXb3JkcyAtIDEpO1xuICAgIHZhciBsQnl0ZVBvc2l0aW9uID0gMDtcbiAgICB2YXIgbEJ5dGVDb3VudCA9IDA7XG4gICAgd2hpbGUgKGxCeXRlQ291bnQgPCBsTWVzc2FnZUxlbmd0aCkge1xuICAgICAgbFdvcmRDb3VudCA9IChsQnl0ZUNvdW50IC0gbEJ5dGVDb3VudCAlIDQpIC8gNDtcbiAgICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gbFdvcmRBcnJheVtsV29yZENvdW50XSB8IHN0ci5jaGFyQ29kZUF0KGxCeXRlQ291bnQpIDw8IGxCeXRlUG9zaXRpb247XG4gICAgICBsQnl0ZUNvdW50Kys7XG4gICAgfVxuICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgbEJ5dGVQb3NpdGlvbiA9IGxCeXRlQ291bnQgJSA0ICogODtcbiAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gbFdvcmRBcnJheVtsV29yZENvdW50XSB8IDB4ODAgPDwgbEJ5dGVQb3NpdGlvbjtcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMl0gPSBsTWVzc2FnZUxlbmd0aCA8PCAzO1xuICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAxXSA9IGxNZXNzYWdlTGVuZ3RoID4+PiAyOTtcbiAgICByZXR1cm4gbFdvcmRBcnJheTtcbiAgfTtcblxuICB2YXIgX3dvcmRUb0hleCA9IGZ1bmN0aW9uIF93b3JkVG9IZXgobFZhbHVlKSB7XG4gICAgdmFyIHdvcmRUb0hleFZhbHVlID0gJyc7XG4gICAgdmFyIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcnO1xuICAgIHZhciBsQnl0ZTtcbiAgICB2YXIgbENvdW50O1xuXG4gICAgZm9yIChsQ291bnQgPSAwOyBsQ291bnQgPD0gMzsgbENvdW50KyspIHtcbiAgICAgIGxCeXRlID0gbFZhbHVlID4+PiBsQ291bnQgKiA4ICYgMjU1O1xuICAgICAgd29yZFRvSGV4VmFsdWVUZW1wID0gJzAnICsgbEJ5dGUudG9TdHJpbmcoMTYpO1xuICAgICAgd29yZFRvSGV4VmFsdWUgPSB3b3JkVG9IZXhWYWx1ZSArIHdvcmRUb0hleFZhbHVlVGVtcC5zdWJzdHIod29yZFRvSGV4VmFsdWVUZW1wLmxlbmd0aCAtIDIsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZFRvSGV4VmFsdWU7XG4gIH07XG5cbiAgdmFyIHggPSBbXTtcbiAgdmFyIGs7XG4gIHZhciBBQTtcbiAgdmFyIEJCO1xuICB2YXIgQ0M7XG4gIHZhciBERDtcbiAgdmFyIGE7XG4gIHZhciBiO1xuICB2YXIgYztcbiAgdmFyIGQ7XG4gIHZhciBTMTEgPSA3O1xuICB2YXIgUzEyID0gMTI7XG4gIHZhciBTMTMgPSAxNztcbiAgdmFyIFMxNCA9IDIyO1xuICB2YXIgUzIxID0gNTtcbiAgdmFyIFMyMiA9IDk7XG4gIHZhciBTMjMgPSAxNDtcbiAgdmFyIFMyNCA9IDIwO1xuICB2YXIgUzMxID0gNDtcbiAgdmFyIFMzMiA9IDExO1xuICB2YXIgUzMzID0gMTY7XG4gIHZhciBTMzQgPSAyMztcbiAgdmFyIFM0MSA9IDY7XG4gIHZhciBTNDIgPSAxMDtcbiAgdmFyIFM0MyA9IDE1O1xuICB2YXIgUzQ0ID0gMjE7XG5cbiAgc3RyID0gdXRmOEVuY29kZShzdHIpO1xuICB4ID0gX2NvbnZlcnRUb1dvcmRBcnJheShzdHIpO1xuICBhID0gMHg2NzQ1MjMwMTtcbiAgYiA9IDB4RUZDREFCODk7XG4gIGMgPSAweDk4QkFEQ0ZFO1xuICBkID0gMHgxMDMyNTQ3NjtcblxuICB4bCA9IHgubGVuZ3RoO1xuICBmb3IgKGsgPSAwOyBrIDwgeGw7IGsgKz0gMTYpIHtcbiAgICBBQSA9IGE7XG4gICAgQkIgPSBiO1xuICAgIENDID0gYztcbiAgICBERCA9IGQ7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAwXSwgUzExLCAweEQ3NkFBNDc4KTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDFdLCBTMTIsIDB4RThDN0I3NTYpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMl0sIFMxMywgMHgyNDIwNzBEQik7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAzXSwgUzE0LCAweEMxQkRDRUVFKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTMTEsIDB4RjU3QzBGQUYpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgNV0sIFMxMiwgMHg0Nzg3QzYyQSk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyA2XSwgUzEzLCAweEE4MzA0NjEzKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDddLCBTMTQsIDB4RkQ0Njk1MDEpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgOF0sIFMxMSwgMHg2OTgwOThEOCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyA5XSwgUzEyLCAweDhCNDRGN0FGKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzEzLCAweEZGRkY1QkIxKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDExXSwgUzE0LCAweDg5NUNEN0JFKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzExLCAweDZCOTAxMTIyKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDEzXSwgUzEyLCAweEZEOTg3MTkzKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDE0XSwgUzEzLCAweEE2Nzk0MzhFKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDE1XSwgUzE0LCAweDQ5QjQwODIxKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMjEsIDB4RjYxRTI1NjIpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgNl0sIFMyMiwgMHhDMDQwQjM0MCk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAxMV0sIFMyMywgMHgyNjVFNUE1MSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyAwXSwgUzI0LCAweEU5QjZDN0FBKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDVdLCBTMjEsIDB4RDYyRjEwNUQpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMTBdLCBTMjIsIDB4MjQ0MTQ1Myk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMyMywgMHhEOEExRTY4MSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyA0XSwgUzI0LCAweEU3RDNGQkM4KTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDldLCBTMjEsIDB4MjFFMUNERTYpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMTRdLCBTMjIsIDB4QzMzNzA3RDYpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgM10sIFMyMywgMHhGNEQ1MEQ4Nyk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyA4XSwgUzI0LCAweDQ1NUExNEVEKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzIxLCAweEE5RTNFOTA1KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDJdLCBTMjIsIDB4RkNFRkEzRjgpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgN10sIFMyMywgMHg2NzZGMDJEOSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyAxMl0sIFMyNCwgMHg4RDJBNEM4QSk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzMxLCAweEZGRkEzOTQyKTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDhdLCBTMzIsIDB4ODc3MUY2ODEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMzMsIDB4NkQ5RDYxMjIpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMTRdLCBTMzQsIDB4RkRFNTM4MEMpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgMV0sIFMzMSwgMHhBNEJFRUE0NCk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA0XSwgUzMyLCAweDRCREVDRkE5KTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMzMsIDB4RjZCQjRCNjApO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMTBdLCBTMzQsIDB4QkVCRkJDNzApO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMzEsIDB4Mjg5QjdFQzYpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgMF0sIFMzMiwgMHhFQUExMjdGQSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAzXSwgUzMzLCAweEQ0RUYzMDg1KTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDZdLCBTMzQsIDB4NDg4MUQwNSk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzMxLCAweEQ5RDREMDM5KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDEyXSwgUzMyLCAweEU2REI5OUU1KTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzMzLCAweDFGQTI3Q0Y4KTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDJdLCBTMzQsIDB4QzRBQzU2NjUpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgMF0sIFM0MSwgMHhGNDI5MjI0NCk7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyA3XSwgUzQyLCAweDQzMkFGRjk3KTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDE0XSwgUzQzLCAweEFCOTQyM0E3KTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDVdLCBTNDQsIDB4RkM5M0EwMzkpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTNDEsIDB4NjU1QjU5QzMpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgM10sIFM0MiwgMHg4RjBDQ0M5Mik7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFM0MywgMHhGRkVGRjQ3RCk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyAxXSwgUzQ0LCAweDg1ODQ1REQxKTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTNDEsIDB4NkZBODdFNEYpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgMTVdLCBTNDIsIDB4RkUyQ0U2RTApO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgNl0sIFM0MywgMHhBMzAxNDMxNCk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyAxM10sIFM0NCwgMHg0RTA4MTFBMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzQxLCAweEY3NTM3RTgyKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDExXSwgUzQyLCAweEJEM0FGMjM1KTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTNDMsIDB4MkFEN0QyQkIpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgOV0sIFM0NCwgMHhFQjg2RDM5MSk7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBBQSk7XG4gICAgYiA9IF9hZGRVbnNpZ25lZChiLCBCQik7XG4gICAgYyA9IF9hZGRVbnNpZ25lZChjLCBDQyk7XG4gICAgZCA9IF9hZGRVbnNpZ25lZChkLCBERCk7XG4gIH1cblxuICB2YXIgdGVtcCA9IF93b3JkVG9IZXgoYSkgKyBfd29yZFRvSGV4KGIpICsgX3dvcmRUb0hleChjKSArIF93b3JkVG9IZXgoZCk7XG5cbiAgcmV0dXJuIHRlbXAudG9Mb3dlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZDUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlX3N0cihzdHIsIGFycmF5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9wYXJzZV9zdHIvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IENhZ3JpIEVraW5cbiAgLy8gICAgICBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE1JT19LT0RVS0kgKGh0dHA6Ly9taW8ta29kdWtpLmJsb2dzcG90LmNvbS8pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgICAgICBpbnB1dCBieTogRHJlYW1lclxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBaYWlkZSAoaHR0cDovL3phaWRlc3RoaW5ncy5jb20vKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBEYXZpZCBQZXN0YSAoaHR0cDovL2RhdmlkcGVzdGEuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogamVpY3F1ZXN0XG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBXaGVuIG5vIGFyZ3VtZW50IGlzIHNwZWNpZmllZCwgd2lsbCBwdXQgdmFyaWFibGVzIGluIGdsb2JhbCBzY29wZS5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBhIHBhcnRpY3VsYXIgYXJndW1lbnQgaGFzIGJlZW4gcGFzc2VkLCBhbmQgdGhlXG4gIC8vICAgICAgICAgICBub3RlIDE6IHJldHVybmVkIHZhbHVlIGlzIGRpZmZlcmVudCBwYXJzZV9zdHIgb2YgUEhQLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBGb3IgZXhhbXBsZSwgYT1iPWMmZD09PT1jXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcGFyc2Vfc3RyKCdmaXJzdD1mb28mc2Vjb25kPWJhcicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyAxOiB7IGZpcnN0OiAnZm9vJywgc2Vjb25kOiAnYmFyJyB9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgMjogcGFyc2Vfc3RyKCdzdHJfYT1KYWNrK2FuZCtKaWxsK2RpZG4lMjd0K3NlZSt0aGUrd2VsbC4nLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMjogeyBzdHJfYTogXCJKYWNrIGFuZCBKaWxsIGRpZG4ndCBzZWUgdGhlIHdlbGwuXCIgfVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiB2YXIgJGFiYyA9IHszOidhJ31cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcGFyc2Vfc3RyKCdhW2JdW1wiY1wiXT1kZWYmYVtxXT10KzUnLCAkYWJjKVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRhYmNcbiAgLy8gICAgICAgIHJldHVybnMgMzoge1wiM1wiOlwiYVwiLFwiYVwiOntcImJcIjp7XCJjXCI6XCJkZWZcIn0sXCJxXCI6XCJ0IDVcIn19XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogcGFyc2Vfc3RyKCdhW11bXT12YWx1ZScsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyA0OiB7XCJhXCI6e1wiMFwiOntcIjBcIjpcInZhbHVlXCJ9fX1cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiBwYXJzZV9zdHIoJ2E9MSZhW109MicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyA1OiB7XCJhXCI6e1wiMFwiOlwiMlwifX1cblxuICB2YXIgc3RyQXJyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvXiYvLCAnJykucmVwbGFjZSgvJiQvLCAnJykuc3BsaXQoJyYnKTtcbiAgdmFyIHNhbCA9IHN0ckFyci5sZW5ndGg7XG4gIHZhciBpO1xuICB2YXIgajtcbiAgdmFyIGN0O1xuICB2YXIgcDtcbiAgdmFyIGxhc3RPYmo7XG4gIHZhciBvYmo7XG4gIHZhciBjaHI7XG4gIHZhciB0bXA7XG4gIHZhciBrZXk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHBvc3RMZWZ0QnJhY2tldFBvcztcbiAgdmFyIGtleXM7XG4gIHZhciBrZXlzTGVuO1xuXG4gIHZhciBfZml4U3RyID0gZnVuY3Rpb24gX2ZpeFN0cihzdHIpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKTtcbiAgfTtcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuXG4gIGlmICghYXJyYXkpIHtcbiAgICBhcnJheSA9ICRnbG9iYWw7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgc2FsOyBpKyspIHtcbiAgICB0bXAgPSBzdHJBcnJbaV0uc3BsaXQoJz0nKTtcbiAgICBrZXkgPSBfZml4U3RyKHRtcFswXSk7XG4gICAgdmFsdWUgPSB0bXAubGVuZ3RoIDwgMiA/ICcnIDogX2ZpeFN0cih0bXBbMV0pO1xuXG4gICAgd2hpbGUgKGtleS5jaGFyQXQoMCkgPT09ICcgJykge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDEpO1xuICAgIH1cblxuICAgIGlmIChrZXkuaW5kZXhPZignXFx4MDAnKSA+IC0xKSB7XG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMCwga2V5LmluZGV4T2YoJ1xceDAwJykpO1xuICAgIH1cblxuICAgIGlmIChrZXkgJiYga2V5LmNoYXJBdCgwKSAhPT0gJ1snKSB7XG4gICAgICBrZXlzID0gW107XG4gICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSAwO1xuXG4gICAgICBmb3IgKGogPSAwOyBqIDwga2V5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChrZXkuY2hhckF0KGopID09PSAnWycgJiYgIXBvc3RMZWZ0QnJhY2tldFBvcykge1xuICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IGogKyAxO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5jaGFyQXQoaikgPT09ICddJykge1xuICAgICAgICAgIGlmIChwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zbGljZSgwLCBwb3N0TGVmdEJyYWNrZXRQb3MgLSAxKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleXMucHVzaChrZXkuc3Vic3RyKHBvc3RMZWZ0QnJhY2tldFBvcywgaiAtIHBvc3RMZWZ0QnJhY2tldFBvcykpO1xuICAgICAgICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoaiArIDEpICE9PSAnWycpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAga2V5cyA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGogPSAwOyBqIDwga2V5c1swXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjaHIgPSBrZXlzWzBdLmNoYXJBdChqKTtcblxuICAgICAgICBpZiAoY2hyID09PSAnICcgfHwgY2hyID09PSAnLicgfHwgY2hyID09PSAnWycpIHtcbiAgICAgICAgICBrZXlzWzBdID0ga2V5c1swXS5zdWJzdHIoMCwgaikgKyAnXycgKyBrZXlzWzBdLnN1YnN0cihqICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hyID09PSAnWycpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvYmogPSBhcnJheTtcblxuICAgICAgZm9yIChqID0gMCwga2V5c0xlbiA9IGtleXMubGVuZ3RoOyBqIDwga2V5c0xlbjsgaisrKSB7XG4gICAgICAgIGtleSA9IGtleXNbal0ucmVwbGFjZSgvXlsnXCJdLywgJycpLnJlcGxhY2UoL1snXCJdJC8sICcnKTtcbiAgICAgICAgbGFzdE9iaiA9IG9iajtcblxuICAgICAgICBpZiAoKGtleSA9PT0gJycgfHwga2V5ID09PSAnICcpICYmIGogIT09IDApIHtcbiAgICAgICAgICAvLyBJbnNlcnQgbmV3IGRpbWVuc2lvblxuICAgICAgICAgIGN0ID0gLTE7XG5cbiAgICAgICAgICBmb3IgKHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgIGlmICgrcCA+IGN0ICYmIHAubWF0Y2goL15cXGQrJC9nKSkge1xuICAgICAgICAgICAgICAgIGN0ID0gK3A7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBrZXkgPSBjdCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBwcmltaXRpdmUgdmFsdWUsIHJlcGxhY2Ugd2l0aCBvYmplY3RcbiAgICAgICAgaWYgKE9iamVjdChvYmpba2V5XSkgIT09IG9ialtrZXldKSB7XG4gICAgICAgICAgb2JqW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9IG9ialtrZXldO1xuICAgICAgfVxuXG4gICAgICBsYXN0T2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZV9zdHIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyX3JlcGxhY2Uoc2VhcmNoLCByZXBsYWNlLCBzdWJqZWN0LCBjb3VudE9iaikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cl9yZXBsYWNlL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEdhYnJpZWwgUGFkZXJuaVxuICAvLyBpbXByb3ZlZCBieTogUGhpbGlwIFBldGVyc29uXG4gIC8vIGltcHJvdmVkIGJ5OiBTaW1vbiBXaWxsaXNvbiAoaHR0cDovL3NpbW9ud2lsbGlzb24ubmV0KVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICByZXZpc2VkIGJ5OiBKb25hcyBSYW9uaSBTb2FyZXMgU2lsdmEgKGh0dHA6Ly93d3cuanNmcm9taGVsbC5jb20pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBBbnRvbiBPbmdzb25cbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbGVnIEVyZW1lZXZcbiAgLy8gYnVnZml4ZWQgYnk6IEdsZW4gQXJhc29uIChodHRwOi8vQ2FuYWRpYW5Eb21haW5SZWdpc3RyeS5jYSlcbiAgLy8gYnVnZml4ZWQgYnk6IEdsZW4gQXJhc29uIChodHRwOi8vQ2FuYWRpYW5Eb21haW5SZWdpc3RyeS5jYSlcbiAgLy8gICAgaW5wdXQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBPbGVnIEVyZW1lZXZcbiAgLy8gICAgICBub3RlIDE6IFRoZSBjb3VudE9iaiBwYXJhbWV0ZXIgKG9wdGlvbmFsKSBpZiB1c2VkIG11c3QgYmUgcGFzc2VkIGluIGFzIGFcbiAgLy8gICAgICBub3RlIDE6IG9iamVjdC4gVGhlIGNvdW50IHdpbGwgdGhlbiBiZSB3cml0dGVuIGJ5IHJlZmVyZW5jZSBpbnRvIGl0J3MgYHZhbHVlYCBwcm9wZXJ0eVxuICAvLyAgIGV4YW1wbGUgMTogc3RyX3JlcGxhY2UoJyAnLCAnLicsICdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbi52YW4uWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogc3RyX3JlcGxhY2UoWyd7bmFtZX0nLCAnbCddLCBbJ2hlbGxvJywgJ20nXSwgJ3tuYW1lfSwgbGFycycpXG4gIC8vICAgcmV0dXJucyAyOiAnaGVtbW8sIG1hcnMnXG4gIC8vICAgZXhhbXBsZSAzOiBzdHJfcmVwbGFjZShBcnJheSgnUycsJ0YnKSwneCcsJ0FTREZBU0RGJylcbiAgLy8gICByZXR1cm5zIDM6ICdBeER4QXhEeCdcbiAgLy8gICBleGFtcGxlIDQ6IHZhciBjb3VudE9iaiA9IHt9XG4gIC8vICAgZXhhbXBsZSA0OiBzdHJfcmVwbGFjZShbJ0EnLCdEJ10sIFsneCcsJ3knXSAsICdBU0RGQVNERicgLCBjb3VudE9iailcbiAgLy8gICBleGFtcGxlIDQ6IHZhciAkcmVzdWx0ID0gY291bnRPYmoudmFsdWVcbiAgLy8gICByZXR1cm5zIDQ6IDRcblxuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIHRlbXAgPSAnJztcbiAgdmFyIHJlcGwgPSAnJztcbiAgdmFyIHNsID0gMDtcbiAgdmFyIGZsID0gMDtcbiAgdmFyIGYgPSBbXS5jb25jYXQoc2VhcmNoKTtcbiAgdmFyIHIgPSBbXS5jb25jYXQocmVwbGFjZSk7XG4gIHZhciBzID0gc3ViamVjdDtcbiAgdmFyIHJhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHIpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB2YXIgc2EgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIHMgPSBbXS5jb25jYXQocyk7XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoKHR5cGVvZiBzZWFyY2ggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHNlYXJjaCkpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVwbGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICB0ZW1wID0gcmVwbGFjZTtcbiAgICByZXBsYWNlID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IHNlYXJjaC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmVwbGFjZVtpXSA9IHRlbXA7XG4gICAgfVxuICAgIHRlbXAgPSAnJztcbiAgICByID0gW10uY29uY2F0KHJlcGxhY2UpO1xuICAgIHJhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHIpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjb3VudE9iaiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb3VudE9iai52YWx1ZSA9IDA7XG4gIH1cblxuICBmb3IgKGkgPSAwLCBzbCA9IHMubGVuZ3RoOyBpIDwgc2w7IGkrKykge1xuICAgIGlmIChzW2ldID09PSAnJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAoaiA9IDAsIGZsID0gZi5sZW5ndGg7IGogPCBmbDsgaisrKSB7XG4gICAgICB0ZW1wID0gc1tpXSArICcnO1xuICAgICAgcmVwbCA9IHJhID8gcltqXSAhPT0gdW5kZWZpbmVkID8gcltqXSA6ICcnIDogclswXTtcbiAgICAgIHNbaV0gPSB0ZW1wLnNwbGl0KGZbal0pLmpvaW4ocmVwbCk7XG4gICAgICBpZiAodHlwZW9mIGNvdW50T2JqICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb3VudE9iai52YWx1ZSArPSB0ZW1wLnNwbGl0KGZbal0pLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzYSA/IHMgOiBzWzBdO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cl9yZXBsYWNlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJ0b2xvd2VyKHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cnRvbG93ZXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgIGV4YW1wbGUgMTogc3RydG9sb3dlcignS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAna2V2aW4gdmFuIHpvbm5ldmVsZCdcblxuICByZXR1cm4gKHN0ciArICcnKS50b0xvd2VyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnRvbG93ZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cnRvdXBwZXIoc3RyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvc3RydG91cHBlci9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgZXhhbXBsZSAxOiBzdHJ0b3VwcGVyKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLRVZJTiBWQU4gWk9OTkVWRUxEJ1xuXG4gIHJldHVybiAoc3RyICsgJycpLnRvVXBwZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RydG91cHBlci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0X2RlY29kZShlbmNvZGVkRGF0YSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Jhc2U2NF9kZWNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUeWxlciBBa2lucyAoaHR0cDovL3J1bWtpbi5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQW1hbiBHdXB0YVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBJbmRpZ283NDRcbiAgLy8gICBleGFtcGxlIDE6IGJhc2U2NF9kZWNvZGUoJ1MyVjJhVzRnZG1GdUlGcHZibTVsZG1Wc1pBPT0nKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG4gIC8vICAgZXhhbXBsZSAyOiBiYXNlNjRfZGVjb2RlKCdZUT09JylcbiAgLy8gICByZXR1cm5zIDI6ICdhJ1xuICAvLyAgIGV4YW1wbGUgMzogYmFzZTY0X2RlY29kZSgnNHB5VElNT2dJR3hoSUcxdlpHVT0nKVxuICAvLyAgIHJldHVybnMgMzogJ+KckyDDoCBsYSBtb2RlJ1xuXG4gIC8vIGRlY29kZVVURjhzdHJpbmcoKVxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBkZWNvZGUgcHJvcGVybHkgVVRGOCBzdHJpbmdcbiAgLy8gQWRhcHRlZCBmcm9tIFNvbHV0aW9uICMxIGF0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZ1xuICB2YXIgZGVjb2RlVVRGOHN0cmluZyA9IGZ1bmN0aW9uIGRlY29kZVVURjhzdHJpbmcoc3RyKSB7XG4gICAgLy8gR29pbmcgYmFja3dhcmRzOiBmcm9tIGJ5dGVzdHJlYW0sIHRvIHBlcmNlbnQtZW5jb2RpbmcsIHRvIG9yaWdpbmFsIHN0cmluZy5cbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfSkuam9pbignJykpO1xuICB9O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmF0b2IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVRGOHN0cmluZyh3aW5kb3cuYXRvYihlbmNvZGVkRGF0YSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihlbmNvZGVkRGF0YSwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGYtOCcpO1xuICB9XG5cbiAgdmFyIGI2NCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIHZhciBvMTtcbiAgdmFyIG8yO1xuICB2YXIgbzM7XG4gIHZhciBoMTtcbiAgdmFyIGgyO1xuICB2YXIgaDM7XG4gIHZhciBoNDtcbiAgdmFyIGJpdHM7XG4gIHZhciBpID0gMDtcbiAgdmFyIGFjID0gMDtcbiAgdmFyIGRlYyA9ICcnO1xuICB2YXIgdG1wQXJyID0gW107XG5cbiAgaWYgKCFlbmNvZGVkRGF0YSkge1xuICAgIHJldHVybiBlbmNvZGVkRGF0YTtcbiAgfVxuXG4gIGVuY29kZWREYXRhICs9ICcnO1xuXG4gIGRvIHtcbiAgICAvLyB1bnBhY2sgZm91ciBoZXhldHMgaW50byB0aHJlZSBvY3RldHMgdXNpbmcgaW5kZXggcG9pbnRzIGluIGI2NFxuICAgIGgxID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGgyID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGgzID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGg0ID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuXG4gICAgYml0cyA9IGgxIDw8IDE4IHwgaDIgPDwgMTIgfCBoMyA8PCA2IHwgaDQ7XG5cbiAgICBvMSA9IGJpdHMgPj4gMTYgJiAweGZmO1xuICAgIG8yID0gYml0cyA+PiA4ICYgMHhmZjtcbiAgICBvMyA9IGJpdHMgJiAweGZmO1xuXG4gICAgaWYgKGgzID09PSA2NCkge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSk7XG4gICAgfSBlbHNlIGlmIChoNCA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSwgbzIsIG8zKTtcbiAgICB9XG4gIH0gd2hpbGUgKGkgPCBlbmNvZGVkRGF0YS5sZW5ndGgpO1xuXG4gIGRlYyA9IHRtcEFyci5qb2luKCcnKTtcblxuICByZXR1cm4gZGVjb2RlVVRGOHN0cmluZyhkZWMucmVwbGFjZSgvXFwwKyQvLCAnJykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NF9kZWNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9lbmNvZGUoc3RyaW5nVG9FbmNvZGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogQmF5cm9uIEd1ZXZhcmFcbiAgLy8gaW1wcm92ZWQgYnk6IFRodW5kZXIubVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyBidWdmaXhlZCBieTogUGVsbGVudGVzcXVlIE1hbGVzdWFkYVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09J1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2VuY29kZSgnYScpXG4gIC8vICAgcmV0dXJucyAyOiAnWVE9PSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9lbmNvZGUoJ+KckyDDoCBsYSBtb2RlJylcbiAgLy8gICByZXR1cm5zIDM6ICc0cHlUSU1PZ0lHeGhJRzF2WkdVPSdcblxuICAvLyBlbmNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZW5jb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGVuY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBlbmNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIGZpcnN0IHdlIHVzZSBlbmNvZGVVUklDb21wb25lbnQgdG8gZ2V0IHBlcmNlbnQtZW5jb2RlZCBVVEYtOCxcbiAgICAvLyB0aGVuIHdlIGNvbnZlcnQgdGhlIHBlcmNlbnQgZW5jb2RpbmdzIGludG8gcmF3IGJ5dGVzIHdoaWNoXG4gICAgLy8gY2FuIGJlIGZlZCBpbnRvIHRoZSBiYXNlNjQgZW5jb2RpbmcgYWxnb3JpdGhtLlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiB0b1NvbGlkQnl0ZXMobWF0Y2gsIHAxKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnICsgcDEpO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoZW5jb2RlVVRGOHN0cmluZyhzdHJpbmdUb0VuY29kZSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdHJpbmdUb0VuY29kZSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICB9XG5cbiAgdmFyIGI2NCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIHZhciBvMTtcbiAgdmFyIG8yO1xuICB2YXIgbzM7XG4gIHZhciBoMTtcbiAgdmFyIGgyO1xuICB2YXIgaDM7XG4gIHZhciBoNDtcbiAgdmFyIGJpdHM7XG4gIHZhciBpID0gMDtcbiAgdmFyIGFjID0gMDtcbiAgdmFyIGVuYyA9ICcnO1xuICB2YXIgdG1wQXJyID0gW107XG5cbiAgaWYgKCFzdHJpbmdUb0VuY29kZSkge1xuICAgIHJldHVybiBzdHJpbmdUb0VuY29kZTtcbiAgfVxuXG4gIHN0cmluZ1RvRW5jb2RlID0gZW5jb2RlVVRGOHN0cmluZyhzdHJpbmdUb0VuY29kZSk7XG5cbiAgZG8ge1xuICAgIC8vIHBhY2sgdGhyZWUgb2N0ZXRzIGludG8gZm91ciBoZXhldHNcbiAgICBvMSA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcbiAgICBvMiA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcbiAgICBvMyA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcblxuICAgIGJpdHMgPSBvMSA8PCAxNiB8IG8yIDw8IDggfCBvMztcblxuICAgIGgxID0gYml0cyA+PiAxOCAmIDB4M2Y7XG4gICAgaDIgPSBiaXRzID4+IDEyICYgMHgzZjtcbiAgICBoMyA9IGJpdHMgPj4gNiAmIDB4M2Y7XG4gICAgaDQgPSBiaXRzICYgMHgzZjtcblxuICAgIC8vIHVzZSBoZXhldHMgdG8gaW5kZXggaW50byBiNjQsIGFuZCBhcHBlbmQgcmVzdWx0IHRvIGVuY29kZWQgc3RyaW5nXG4gICAgdG1wQXJyW2FjKytdID0gYjY0LmNoYXJBdChoMSkgKyBiNjQuY2hhckF0KGgyKSArIGI2NC5jaGFyQXQoaDMpICsgYjY0LmNoYXJBdChoNCk7XG4gIH0gd2hpbGUgKGkgPCBzdHJpbmdUb0VuY29kZS5sZW5ndGgpO1xuXG4gIGVuYyA9IHRtcEFyci5qb2luKCcnKTtcblxuICB2YXIgciA9IHN0cmluZ1RvRW5jb2RlLmxlbmd0aCAlIDM7XG5cbiAgcmV0dXJuIChyID8gZW5jLnNsaWNlKDAsIHIgLSAzKSA6IGVuYykgKyAnPT09Jy5zbGljZShyIHx8IDMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NF9lbmNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJvb2x2YWwobWl4ZWRWYXIpIHtcbiAgLy8gb3JpZ2luYWwgYnk6IFdpbGwgUm93ZVxuICAvLyAgIGV4YW1wbGUgMTogYm9vbHZhbCh0cnVlKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogYm9vbHZhbChmYWxzZSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBib29sdmFsKDApXG4gIC8vICAgcmV0dXJucyAzOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNDogYm9vbHZhbCgwLjApXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNTogYm9vbHZhbCgnJylcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA2OiBib29sdmFsKCcwJylcbiAgLy8gICByZXR1cm5zIDY6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA3OiBib29sdmFsKFtdKVxuICAvLyAgIHJldHVybnMgNzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDg6IGJvb2x2YWwoJycpXG4gIC8vICAgcmV0dXJucyA4OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgOTogYm9vbHZhbChudWxsKVxuICAvLyAgIHJldHVybnMgOTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDEwOiBib29sdmFsKHVuZGVmaW5lZClcbiAgLy8gICByZXR1cm5zIDEwOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMTE6IGJvb2x2YWwoJ3RydWUnKVxuICAvLyAgIHJldHVybnMgMTE6IHRydWVcblxuICBpZiAobWl4ZWRWYXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSAwIHx8IG1peGVkVmFyID09PSAwLjApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobWl4ZWRWYXIgPT09ICcnIHx8IG1peGVkVmFyID09PSAnMCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShtaXhlZFZhcikgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSBudWxsIHx8IG1peGVkVmFyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29sdmFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVtcHR5KG1peGVkVmFyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZW1wdHkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQaGlsaXBwZSBCYXVtYW5uXG4gIC8vICAgIGlucHV0IGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgIGlucHV0IGJ5OiBMSFxuICAvLyAgICBpbnB1dCBieTogU3RveWFuIEt5b3NldiAoaHR0cDovL3d3dy5zdmVzdC5vcmcvKVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IEZyYW5jZXNjb1xuICAvLyBpbXByb3ZlZCBieTogTWFyYyBKYW5zZW5cbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgZXhhbXBsZSAxOiBlbXB0eShudWxsKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogZW1wdHkodW5kZWZpbmVkKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogZW1wdHkoW10pXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgZXhhbXBsZSA0OiBlbXB0eSh7fSlcbiAgLy8gICByZXR1cm5zIDQ6IHRydWVcbiAgLy8gICBleGFtcGxlIDU6IGVtcHR5KHsnYUZ1bmMnIDogZnVuY3Rpb24gKCkgeyBhbGVydCgnaHVtcHR5Jyk7IH0gfSlcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG5cbiAgdmFyIHVuZGVmO1xuICB2YXIga2V5O1xuICB2YXIgaTtcbiAgdmFyIGxlbjtcbiAgdmFyIGVtcHR5VmFsdWVzID0gW3VuZGVmLCBudWxsLCBmYWxzZSwgMCwgJycsICcwJ107XG5cbiAgZm9yIChpID0gMCwgbGVuID0gZW1wdHlWYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAobWl4ZWRWYXIgPT09IGVtcHR5VmFsdWVzW2ldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGtleSBpbiBtaXhlZFZhcikge1xuICAgICAgaWYgKG1peGVkVmFyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbXB0eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmbG9hdHZhbChtaXhlZFZhcikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Zsb2F0dmFsL1xuICAvLyBvcmlnaW5hbCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgbmF0aXZlIHBhcnNlRmxvYXQoKSBtZXRob2Qgb2YgSmF2YVNjcmlwdCByZXR1cm5zIE5hTlxuICAvLyAgICAgIG5vdGUgMTogd2hlbiBpdCBlbmNvdW50ZXJzIGEgc3RyaW5nIGJlZm9yZSBhbiBpbnQgb3IgZmxvYXQgdmFsdWUuXG4gIC8vICAgZXhhbXBsZSAxOiBmbG9hdHZhbCgnMTUwLjAzX3BhZ2Utc2VjdGlvbicpXG4gIC8vICAgcmV0dXJucyAxOiAxNTAuMDNcbiAgLy8gICBleGFtcGxlIDI6IGZsb2F0dmFsKCdwYWdlOiAzJylcbiAgLy8gICBleGFtcGxlIDI6IGZsb2F0dmFsKCctNTAgKyA4JylcbiAgLy8gICByZXR1cm5zIDI6IDBcbiAgLy8gICByZXR1cm5zIDI6IC01MFxuXG4gIHJldHVybiBwYXJzZUZsb2F0KG1peGVkVmFyKSB8fCAwO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsb2F0dmFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGludHZhbChtaXhlZFZhciwgYmFzZSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2ludHZhbC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBzdGVuc2lcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICAgaW5wdXQgYnk6IE1hdHRlb1xuICAvLyAgIGV4YW1wbGUgMTogaW50dmFsKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6IDBcbiAgLy8gICBleGFtcGxlIDI6IGludHZhbCg0LjIpXG4gIC8vICAgcmV0dXJucyAyOiA0XG4gIC8vICAgZXhhbXBsZSAzOiBpbnR2YWwoNDIsIDgpXG4gIC8vICAgcmV0dXJucyAzOiA0MlxuICAvLyAgIGV4YW1wbGUgNDogaW50dmFsKCcwOScpXG4gIC8vICAgcmV0dXJucyA0OiA5XG4gIC8vICAgZXhhbXBsZSA1OiBpbnR2YWwoJzFlJywgMTYpXG4gIC8vICAgcmV0dXJucyA1OiAzMFxuICAvLyAgIGV4YW1wbGUgNjogaW50dmFsKDB4MjAwMDAwMDAxKVxuICAvLyAgIHJldHVybnMgNjogODU4OTkzNDU5M1xuICAvLyAgIGV4YW1wbGUgNzogaW50dmFsKCcweGZmJywgMClcbiAgLy8gICByZXR1cm5zIDc6IDI1NVxuICAvLyAgIGV4YW1wbGUgODogaW50dmFsKCcwMTAnLCAwKVxuICAvLyAgIHJldHVybnMgODogOFxuXG4gIHZhciB0bXAsIG1hdGNoO1xuXG4gIHZhciB0eXBlID0gdHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcik7XG5cbiAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiArbWl4ZWRWYXI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoYmFzZSA9PT0gMCkge1xuICAgICAgbWF0Y2ggPSBtaXhlZFZhci5tYXRjaCgvXlxccyowKHg/KS9pKTtcbiAgICAgIGJhc2UgPSBtYXRjaCA/IG1hdGNoWzFdID8gMTYgOiA4IDogMTA7XG4gICAgfVxuICAgIHRtcCA9IHBhcnNlSW50KG1peGVkVmFyLCBiYXNlIHx8IDEwKTtcbiAgICByZXR1cm4gaXNOYU4odG1wKSB8fCAhaXNGaW5pdGUodG1wKSA/IDAgOiB0bXA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobWl4ZWRWYXIpKSB7XG4gICAgcmV0dXJuIG1peGVkVmFyIDwgMCA/IE1hdGguY2VpbChtaXhlZFZhcikgOiBNYXRoLmZsb29yKG1peGVkVmFyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19hcnJheShtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBOYXRoYW4gU2VwdWx2ZWRhXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogQ29yZFxuICAvLyBidWdmaXhlZCBieTogTWFuaXNoXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogSW4gTG9jdXR1cywgamF2YXNjcmlwdCBvYmplY3RzIGFyZSBsaWtlIHBocCBhc3NvY2lhdGl2ZSBhcnJheXMsXG4gIC8vICAgICAgbm90ZSAxOiB0aHVzIEphdmFTY3JpcHQgb2JqZWN0cyB3aWxsIGFsc29cbiAgLy8gICAgICBub3RlIDE6IHJldHVybiB0cnVlIGluIHRoaXMgZnVuY3Rpb24gKGV4Y2VwdCBmb3Igb2JqZWN0cyB3aGljaCBpbmhlcml0IHByb3BlcnRpZXMsXG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyB0aHVzIHVzZWQgYXMgb2JqZWN0cyksXG4gIC8vICAgICAgbm90ZSAxOiB1bmxlc3MgeW91IGRvIGluaV9zZXQoJ2xvY3V0dXMub2JqZWN0c0FzQXJyYXlzJywgMCksXG4gIC8vICAgICAgbm90ZSAxOiBpbiB3aGljaCBjYXNlIG9ubHkgZ2VudWluZSBKYXZhU2NyaXB0IGFycmF5c1xuICAvLyAgICAgIG5vdGUgMTogd2lsbCByZXR1cm4gdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMTogaXNfYXJyYXkoWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19hcnJheSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfYXJyYXkoezA6ICdLZXZpbicsIDE6ICd2YW4nLCAyOiAnWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgZXhhbXBsZSA0OiBpbmlfc2V0KCdsb2N1dHVzLm9iamVjdHNBc0FycmF5cycsIDApXG4gIC8vICAgZXhhbXBsZSA0OiBpc19hcnJheSh7MDogJ0tldmluJywgMTogJ3ZhbicsIDI6ICdab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA1OiBpc19hcnJheShmdW5jdGlvbiB0bXBfYSAoKXsgdGhpcy5uYW1lID0gJ0tldmluJyB9KVxuICAvLyAgIHJldHVybnMgNTogZmFsc2VcblxuICB2YXIgX2dldEZ1bmNOYW1lID0gZnVuY3Rpb24gX2dldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuICB2YXIgX2lzQXJyYXkgPSBmdW5jdGlvbiBfaXNBcnJheShtaXhlZFZhcikge1xuICAgIC8vIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIC8vIFRoZSBhYm92ZSB3b3JrcywgYnV0IGxldCdzIGRvIHRoZSBldmVuIG1vcmUgc3RyaW5nZW50IGFwcHJvYWNoOlxuICAgIC8vIChzaW5jZSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIGNvdWxkIGJlIG92ZXJyaWRkZW4pXG4gICAgLy8gTnVsbCwgTm90IGFuIG9iamVjdCwgbm8gbGVuZ3RoIHByb3BlcnR5IHNvIGNvdWxkbid0IGJlIGFuIEFycmF5IChvciBTdHJpbmcpXG4gICAgaWYgKCFtaXhlZFZhciB8fCAodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgbWl4ZWRWYXIubGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgbGVuID0gbWl4ZWRWYXIubGVuZ3RoO1xuICAgIG1peGVkVmFyW21peGVkVmFyLmxlbmd0aF0gPSAnYm9ndXMnO1xuICAgIC8vIFRoZSBvbmx5IHdheSBJIGNhbiB0aGluayBvZiB0byBnZXQgYXJvdW5kIHRoaXMgKG9yIHdoZXJlIHRoZXJlIHdvdWxkIGJlIHRyb3VibGUpXG4gICAgLy8gd291bGQgYmUgdG8gaGF2ZSBhbiBvYmplY3QgZGVmaW5lZFxuICAgIC8vIHdpdGggYSBjdXN0b20gXCJsZW5ndGhcIiBnZXR0ZXIgd2hpY2ggY2hhbmdlZCBiZWhhdmlvciBvbiBlYWNoIGNhbGxcbiAgICAvLyAob3IgYSBzZXR0ZXIgdG8gbWVzcyB1cCB0aGUgZm9sbG93aW5nIGJlbG93KSBvciBhIGN1c3RvbVxuICAgIC8vIHNldHRlciBmb3IgbnVtZXJpYyBwcm9wZXJ0aWVzLCBidXQgZXZlbiB0aGF0IHdvdWxkIG5lZWQgdG8gbGlzdGVuIGZvclxuICAgIC8vIHNwZWNpZmljIGluZGV4ZXM7IGJ1dCB0aGVyZSBzaG91bGQgYmUgbm8gZmFsc2UgbmVnYXRpdmVzXG4gICAgLy8gYW5kIHN1Y2ggYSBmYWxzZSBwb3NpdGl2ZSB3b3VsZCBuZWVkIHRvIHJlbHkgb24gbGF0ZXIgSmF2YVNjcmlwdFxuICAgIC8vIGlubm92YXRpb25zIGxpa2UgX19kZWZpbmVTZXR0ZXJfX1xuICAgIGlmIChsZW4gIT09IG1peGVkVmFyLmxlbmd0aCkge1xuICAgICAgLy8gV2Uga25vdyBpdCdzIGFuIGFycmF5IHNpbmNlIGxlbmd0aCBhdXRvLWNoYW5nZWQgd2l0aCB0aGUgYWRkaXRpb24gb2YgYVxuICAgICAgLy8gbnVtZXJpYyBwcm9wZXJ0eSBhdCBpdHMgbGVuZ3RoIGVuZCwgc28gc2FmZWx5IGdldCByaWQgb2Ygb3VyIGJvZ3VzIGVsZW1lbnRcbiAgICAgIG1peGVkVmFyLmxlbmd0aCAtPSAxO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIEdldCByaWQgb2YgdGhlIHByb3BlcnR5IHdlIGFkZGVkIG9udG8gYSBub24tYXJyYXkgb2JqZWN0OyBvbmx5IHBvc3NpYmxlXG4gICAgLy8gc2lkZS1lZmZlY3QgaXMgaWYgdGhlIHVzZXIgYWRkcyBiYWNrIHRoZSBwcm9wZXJ0eSBsYXRlciwgaXQgd2lsbCBpdGVyYXRlXG4gICAgLy8gdGhpcyBwcm9wZXJ0eSBpbiB0aGUgb2xkZXIgb3JkZXIgcGxhY2VtZW50IGluIElFIChhbiBvcmRlciB3aGljaCBzaG91bGQgbm90XG4gICAgLy8gYmUgZGVwZW5kZWQgb24gYW55d2F5cylcbiAgICBkZWxldGUgbWl4ZWRWYXJbbWl4ZWRWYXIubGVuZ3RoXTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgaWYgKCFtaXhlZFZhciB8fCAodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXkobWl4ZWRWYXIpO1xuXG4gIGlmIChpc0FycmF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaW5pVmFsID0gKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJy4uL2luZm8vaW5pX2dldCcpKCdsb2N1dHVzLm9iamVjdHNBc0FycmF5cycpIDogdW5kZWZpbmVkKSB8fCAnb24nO1xuICBpZiAoaW5pVmFsID09PSAnb24nKSB7XG4gICAgdmFyIGFzU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKTtcbiAgICB2YXIgYXNGdW5jID0gX2dldEZ1bmNOYW1lKG1peGVkVmFyLmNvbnN0cnVjdG9yKTtcblxuICAgIGlmIChhc1N0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgYXNGdW5jID09PSAnT2JqZWN0Jykge1xuICAgICAgLy8gTW9zdCBsaWtlbHkgYSBsaXRlcmFsIGFuZCBpbnRlbmRlZCBhcyBhc3NvYy4gYXJyYXlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19hcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19ib29sKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfYm9vbC9cbiAgLy8gb3JpZ2luYWwgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IENvdXJzZXNXZWIgKGh0dHA6Ly93d3cuY291cnNlc3dlYi5uZXQvKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfYm9vbChmYWxzZSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2Jvb2woMClcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgcmV0dXJuIG1peGVkVmFyID09PSB0cnVlIHx8IG1peGVkVmFyID09PSBmYWxzZTsgLy8gRmFzdGVyIChpbiBGRikgdGhhbiB0eXBlIGNoZWNraW5nXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfYm9vbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19jYWxsYWJsZShtaXhlZFZhciwgc3ludGF4T25seSwgY2FsbGFibGVOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfY2FsbGFibGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogRnJhbsOnb2lzXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIHZhcmlhYmxlIGNhbGxhYmxlTmFtZSBjYW5ub3Qgd29yayBhcyBhIHN0cmluZyB2YXJpYWJsZSBwYXNzZWQgYnlcbiAgLy8gICAgICBub3RlIDE6IHJlZmVyZW5jZSBhcyBpbiBQSFAgKHNpbmNlIEphdmFTY3JpcHQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nXG4gIC8vICAgICAgbm90ZSAxOiBzdHJpbmdzIGJ5IHJlZmVyZW5jZSksIGJ1dCBpbnN0ZWFkIHdpbGwgdGFrZSB0aGUgbmFtZSBvZlxuICAvLyAgICAgIG5vdGUgMTogYSBnbG9iYWwgdmFyaWFibGUgYW5kIHNldCB0aGF0IGluc3RlYWQuXG4gIC8vICAgICAgbm90ZSAxOiBXaGVuIHVzZWQgb24gYW4gb2JqZWN0LCBkZXBlbmRzIG9uIGEgY29uc3RydWN0b3IgcHJvcGVydHlcbiAgLy8gICAgICBub3RlIDE6IGJlaW5nIGtlcHQgb24gdGhlIG9iamVjdCBwcm90b3R5cGVcbiAgLy8gICAgICBub3RlIDI6IERlcGVuZGluZyBvbiB0aGUgYGNhbGxhYmxlTmFtZWAgdGhhdCBpcyBwYXNzZWQsIHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBldmFsLlxuICAvLyAgICAgIG5vdGUgMjogVGhlIGV2YWwgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAyOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAyOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19jYWxsYWJsZSgnaXNfY2FsbGFibGUnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfY2FsbGFibGUoJ2JvZ3VzRnVuY3Rpb24nLCB0cnVlKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZSAvLyBnaXZlcyB0cnVlIGJlY2F1c2UgZG9lcyBub3QgZG8gc3RyaWN0IGNoZWNraW5nXG4gIC8vICAgZXhhbXBsZSAzOiBmdW5jdGlvbiBTb21lQ2xhc3MgKCkge31cbiAgLy8gICBleGFtcGxlIDM6IFNvbWVDbGFzcy5wcm90b3R5cGUuc29tZU1ldGhvZCA9IGZ1bmN0aW9uICgpe31cbiAgLy8gICBleGFtcGxlIDM6IHZhciB0ZXN0T2JqID0gbmV3IFNvbWVDbGFzcygpXG4gIC8vICAgZXhhbXBsZSAzOiBpc19jYWxsYWJsZShbdGVzdE9iaiwgJ3NvbWVNZXRob2QnXSwgdHJ1ZSwgJ215VmFyJylcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gbXlWYXJcbiAgLy8gICByZXR1cm5zIDM6ICdTb21lQ2xhc3M6OnNvbWVNZXRob2QnXG4gIC8vICAgZXhhbXBsZSA0OiBpc19jYWxsYWJsZShmdW5jdGlvbiAoKSB7fSlcbiAgLy8gICByZXR1cm5zIDQ6IHRydWVcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgb2JqID0ge307XG4gIHZhciBtZXRob2QgPSAnJztcbiAgdmFyIHZhbGlkRnVuY3Rpb25OYW1lID0gZmFsc2U7XG5cbiAgdmFyIGdldEZ1bmNOYW1lID0gZnVuY3Rpb24gZ2V0RnVuY05hbWUoZm4pIHtcbiAgICB2YXIgbmFtZSA9IC9cXFcqZnVuY3Rpb25cXHMrKFtcXHckXSspXFxzKlxcKC8uZXhlYyhmbik7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gJyhBbm9ueW1vdXMpJztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVbMV07XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZycpIHtcbiAgICBvYmogPSAkZ2xvYmFsO1xuICAgIG1ldGhvZCA9IG1peGVkVmFyO1xuICAgIG5hbWUgPSBtaXhlZFZhcjtcbiAgICB2YWxpZEZ1bmN0aW9uTmFtZSA9ICEhbmFtZS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1peGVkVmFyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBtaXhlZFZhci5sZW5ndGggPT09IDIgJiYgX3R5cGVvZihtaXhlZFZhclswXSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtaXhlZFZhclsxXSA9PT0gJ3N0cmluZycpIHtcbiAgICBvYmogPSBtaXhlZFZhclswXTtcbiAgICBtZXRob2QgPSBtaXhlZFZhclsxXTtcbiAgICBuYW1lID0gKG9iai5jb25zdHJ1Y3RvciAmJiBnZXRGdW5jTmFtZShvYmouY29uc3RydWN0b3IpKSArICc6OicgKyBtZXRob2Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN5bnRheE9ubHkgfHwgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB2YWxpZEZ1bmN0aW9uTmFtZSBhdm9pZHMgZXhwbG9pdHNcbiAgaWYgKHZhbGlkRnVuY3Rpb25OYW1lICYmIHR5cGVvZiBldmFsKG1ldGhvZCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICBpZiAoY2FsbGFibGVOYW1lKSB7XG4gICAgICAkZ2xvYmFsW2NhbGxhYmxlTmFtZV0gPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19jYWxsYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19mbG9hdChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2Zsb2F0L1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IFdlYkRldkhvYm8gKGh0dHA6Ly93ZWJkZXZob2JvLmJsb2dzcG90LmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgICAgIG5vdGUgMTogMS4wIGlzIHNpbXBsaWZpZWQgdG8gMSBiZWZvcmUgaXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBmdW5jdGlvbiwgdGhpcyBtYWtlc1xuICAvLyAgICAgIG5vdGUgMTogaXQgZGlmZmVyZW50IGZyb20gdGhlIFBIUCBpbXBsZW1lbnRhdGlvbi4gV2UgY2FuJ3QgZml4IHRoaXMgdW5mb3J0dW5hdGVseS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2Zsb2F0KDE4Ni4zMSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICByZXR1cm4gK21peGVkVmFyID09PSBtaXhlZFZhciAmJiAoIWlzRmluaXRlKG1peGVkVmFyKSB8fCAhIShtaXhlZFZhciAlIDEpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19mbG9hdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19pbnQobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19pbnQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBBbGV4XG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogV2ViRGV2SG9ibyAoaHR0cDovL3dlYmRldmhvYm8uYmxvZ3Nwb3QuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICByZXZpc2VkIGJ5OiBNYXR0IEJyYWRsZXlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiAxLjAgaXMgc2ltcGxpZmllZCB0byAxIGJlZm9yZSBpdCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGZ1bmN0aW9uLCB0aGlzIG1ha2VzXG4gIC8vICAgICAgbm90ZSAxOiBpdCBkaWZmZXJlbnQgZnJvbSB0aGUgUEhQIGltcGxlbWVudGF0aW9uLiBXZSBjYW4ndCBmaXggdGhpcyB1bmZvcnR1bmF0ZWx5LlxuICAvLyAgIGV4YW1wbGUgMTogaXNfaW50KDIzKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfaW50KCcyMycpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfaW50KDIzLjUpXG4gIC8vICAgcmV0dXJucyAzOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNDogaXNfaW50KHRydWUpXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuXG4gIHJldHVybiBtaXhlZFZhciA9PT0gK21peGVkVmFyICYmIGlzRmluaXRlKG1peGVkVmFyKSAmJiAhKG1peGVkVmFyICUgMSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfaW50LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX251bGwobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19udWxsL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IGlzX251bGwoJzIzJylcbiAgLy8gICByZXR1cm5zIDE6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19udWxsKG51bGwpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG5cbiAgcmV0dXJuIG1peGVkVmFyID09PSBudWxsO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX251bGwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX251bWVyaWMobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19udW1lcmljL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IERhdmlkXG4gIC8vIGltcHJvdmVkIGJ5OiB0YWl0aFxuICAvLyBidWdmaXhlZCBieTogVGltIGRlIEtvbmluZ1xuICAvLyBidWdmaXhlZCBieTogV2ViRGV2SG9ibyAoaHR0cDovL3dlYmRldmhvYm8uYmxvZ3Nwb3QuY29tLylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBEZW5pcyBDaGVudSAoaHR0cDovL3Nobm91bGxlLm5ldClcbiAgLy8gICBleGFtcGxlIDE6IGlzX251bWVyaWMoMTg2LjMxKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfbnVtZXJpYygnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfbnVtZXJpYygnICsxODYuMzFlMicpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG4gIC8vICAgZXhhbXBsZSA0OiBpc19udW1lcmljKCcnKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGlzX251bWVyaWMoW10pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNjogaXNfbnVtZXJpYygnMSAnKVxuICAvLyAgIHJldHVybnMgNjogZmFsc2VcblxuICB2YXIgd2hpdGVzcGFjZSA9IFsnICcsICdcXG4nLCAnXFxyJywgJ1xcdCcsICdcXGYnLCAnXFx4MGInLCAnXFx4YTAnLCAnXFx1MjAwMCcsICdcXHUyMDAxJywgJ1xcdTIwMDInLCAnXFx1MjAwMycsICdcXHUyMDA0JywgJ1xcdTIwMDUnLCAnXFx1MjAwNicsICdcXHUyMDA3JywgJ1xcdTIwMDgnLCAnXFx1MjAwOScsICdcXHUyMDBBJywgJ1xcdTIwMEInLCAnXFx1MjAyOCcsICdcXHUyMDI5JywgJ1xcdTMwMDAnXS5qb2luKCcnKTtcblxuICAvLyBAdG9kbzogQnJlYWsgdGhpcyB1cCB1c2luZyBtYW55IHNpbmdsZSBjb25kaXRpb25zIHdpdGggZWFybHkgcmV0dXJuc1xuICByZXR1cm4gKHR5cGVvZiBtaXhlZFZhciA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJyAmJiB3aGl0ZXNwYWNlLmluZGV4T2YobWl4ZWRWYXIuc2xpY2UoLTEpKSA9PT0gLTEpICYmIG1peGVkVmFyICE9PSAnJyAmJiAhaXNOYU4obWl4ZWRWYXIpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX251bWVyaWMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfb2JqZWN0KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfb2JqZWN0L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfb2JqZWN0KCcyMycpXG4gIC8vICAgcmV0dXJucyAxOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfb2JqZWN0KHtmb286ICdiYXInfSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IGlzX29iamVjdChudWxsKVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gbWl4ZWRWYXIgIT09IG51bGwgJiYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpKSA9PT0gJ29iamVjdCc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfb2JqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfc2NhbGFyKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfc2NhbGFyL1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyAgIGV4YW1wbGUgMTogaXNfc2NhbGFyKDE4Ni4zMSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX3NjYWxhcih7MDogJ0tldmluIHZhbiBab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgcmV0dXJuICgvYm9vbGVhbnxudW1iZXJ8c3RyaW5nLy50ZXN0KHR5cGVvZiBtaXhlZFZhciA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1peGVkVmFyKSlcbiAgKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19zY2FsYXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX3N0cmluZyhtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX3N0cmluZy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19zdHJpbmcoJzIzJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX3N0cmluZygyMy41KVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICByZXR1cm4gdHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19zdHJpbmcuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzc2V0KCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzc2V0L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEZyZW15Q29tcGFueVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICBleGFtcGxlIDE6IGlzc2V0KCB1bmRlZmluZWQsIHRydWUpXG4gIC8vICAgcmV0dXJucyAxOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMjogaXNzZXQoICdLZXZpbiB2YW4gWm9ubmV2ZWxkJyApXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG5cbiAgdmFyIGEgPSBhcmd1bWVudHM7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHVuZGVmO1xuXG4gIGlmIChsID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbXB0eSBpc3NldCcpO1xuICB9XG5cbiAgd2hpbGUgKGkgIT09IGwpIHtcbiAgICBpZiAoYVtpXSA9PT0gdW5kZWYgfHwgYVtpXSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc3NldC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXRmOF9lbmNvZGUoYXJnU3RyaW5nKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXRmOF9lbmNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBXZWJ0b29sa2l0LmluZm8gKGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvLylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBzb3diZXJyeVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyBpbXByb3ZlZCBieTogWXZlcyBTdWNhZXRcbiAgLy8gaW1wcm92ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogVWxyaWNoXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyBidWdmaXhlZCBieToga2lyaWxsb2lkXG4gIC8vICAgZXhhbXBsZSAxOiB1dGY4X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICBpZiAoYXJnU3RyaW5nID09PSBudWxsIHx8IHR5cGVvZiBhcmdTdHJpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gLnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKS5yZXBsYWNlKC9cXHIvZywgXCJcXG5cIik7XG4gIHZhciBzdHJpbmcgPSBhcmdTdHJpbmcgKyAnJztcbiAgdmFyIHV0ZnRleHQgPSAnJztcbiAgdmFyIHN0YXJ0O1xuICB2YXIgZW5kO1xuICB2YXIgc3RyaW5nbCA9IDA7XG5cbiAgc3RhcnQgPSBlbmQgPSAwO1xuICBzdHJpbmdsID0gc3RyaW5nLmxlbmd0aDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmdsOyBuKyspIHtcbiAgICB2YXIgYzEgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcbiAgICB2YXIgZW5jID0gbnVsbDtcblxuICAgIGlmIChjMSA8IDEyOCkge1xuICAgICAgZW5kKys7XG4gICAgfSBlbHNlIGlmIChjMSA+IDEyNyAmJiBjMSA8IDIwNDgpIHtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gNiB8IDE5MiwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfSBlbHNlIGlmICgoYzEgJiAweEY4MDApICE9PSAweEQ4MDApIHtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTIgfCAyMjQsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN1cnJvZ2F0ZSBwYWlyc1xuICAgICAgaWYgKChjMSAmIDB4RkMwMCkgIT09IDB4RDgwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5tYXRjaGVkIHRyYWlsIHN1cnJvZ2F0ZSBhdCAnICsgbik7XG4gICAgICB9XG4gICAgICB2YXIgYzIgPSBzdHJpbmcuY2hhckNvZGVBdCgrK24pO1xuICAgICAgaWYgKChjMiAmIDB4RkMwMCkgIT09IDB4REMwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5tYXRjaGVkIGxlYWQgc3Vycm9nYXRlIGF0ICcgKyAobiAtIDEpKTtcbiAgICAgIH1cbiAgICAgIGMxID0gKChjMSAmIDB4M0ZGKSA8PCAxMCkgKyAoYzIgJiAweDNGRikgKyAweDEwMDAwO1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiAxOCB8IDI0MCwgYzEgPj4gMTIgJiA2MyB8IDEyOCwgYzEgPj4gNiAmIDYzIHwgMTI4LCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9XG4gICAgaWYgKGVuYyAhPT0gbnVsbCkge1xuICAgICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICAgIHV0ZnRleHQgKz0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuICAgICAgdXRmdGV4dCArPSBlbmM7XG4gICAgICBzdGFydCA9IGVuZCA9IG4gKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPiBzdGFydCkge1xuICAgIHV0ZnRleHQgKz0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBzdHJpbmdsKTtcbiAgfVxuXG4gIHJldHVybiB1dGZ0ZXh0O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0ZjhfZW5jb2RlLmpzLm1hcCIsIi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9jb3VudF92YWx1ZXMnIF0gICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfY291bnRfdmFsdWVzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmlsbCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZpbGwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9maWxsX2tleXMnIF0gICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmlsbF9rZXlzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmlsdGVyJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZpbHRlcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZsaXAnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9mbGlwJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfa2V5X2V4aXN0cycgXSAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2tleV9leGlzdHMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9rZXlzJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfa2V5cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X21hcCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9tYXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9yZXZlcnNlJyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfcmV2ZXJzZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3NlYXJjaCcgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9zZWFyY2gnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9zdW0nIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfc3VtJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfdW5pcXVlJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3VuaXF1ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2N1cnJlbnQnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9jdXJyZW50JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZW5kJyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2VuZCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2tleScgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9rZXknICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICduZXh0JyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvbmV4dCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3BvcycgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9wb3MnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwcmV2JyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvcHJldicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3JhbmdlJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9yYW5nZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Jlc2V0JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9yZXNldCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3NpemVvZicgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9zaXplb2YnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdubDJicicgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9ubDJicicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ251bWJlcl9mb3JtYXQnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL251bWJlcl9mb3JtYXQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwcmludGYnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9wcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzcHJpbnRmJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zcHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyX3JlcGVhdCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGVhdCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cl9zcGxpdCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl9zcGxpdCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cl93b3JkX2NvdW50JyBdICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl93b3JkX2NvdW50JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyaXBfdGFncycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyaXBfdGFncycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cmlwc2xhc2hlcycgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cmlwc2xhc2hlcycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cnN0cicgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnN0cicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3N0cnRyJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnRyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndnByaW50ZicgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvdnByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ZzcHJpbnRmJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3ZzcHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnd29yZHdyYXAnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvd29yZHdyYXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwcmludF9yJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3ByaW50X3InICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzZXJpYWxpemUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3NlcmlhbGl6ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Vuc2VyaWFsaXplJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvdW5zZXJpYWxpemUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2YXJfZXhwb3J0JyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3Zhcl9leHBvcnQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2YXJfZHVtcCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL3Zhcl9kdW1wJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndmVyc2lvbl9jb21wYXJlJyBdICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2luZm8vdmVyc2lvbl9jb21wYXJlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbHRyaW0nIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbHRyaW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdydHJpbScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9ydHJpbScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3RyaW0nIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3RyaW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV93YWxrJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfd2FsaycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3dhbGtfcmVjdXJzaXZlJyBdICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV93YWxrX3JlY3Vyc2l2ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2RhdGVfcGFyc2UnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9kYXRlX3BhcnNlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZ2V0ZGF0ZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL2dldGRhdGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdiYXNlbmFtZScgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZmlsZXN5c3RlbS9iYXNlbmFtZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2Rpcm5hbWUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9maWxlc3lzdGVtL2Rpcm5hbWUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwYXRoaW5mbycgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZmlsZXN5c3RlbS9wYXRoaW5mbycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2RhdGUnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9kYXRlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RydG90aW1lJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL3N0cnRvdGltZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2h0dHBfYnVpbGRfcXVlcnknIF0gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvaHR0cF9idWlsZF9xdWVyeScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2lzX2RvdWJsZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfZG91YmxlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfaW50ZWdlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19pbnRlZ2VyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfbG9uZycgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19sb25nJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfcmVhbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19yZWFsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfdW5pY29kZScgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc191bmljb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfYnVmZmVyJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19idWZmZXInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdkb3VibGV2YWwnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2RvdWJsZXZhbCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2dldHR5cGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZ2V0dHlwZScgKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfbWVyZ2UnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X21lcmdlX3JlY3Vyc2l2ZScgXSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdmFsdWVzJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjb3VudCcgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvY291bnQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaW5fYXJyYXknIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ21pY3JvdGltZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndGltZScgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY2FsbF91c2VyX2Z1bmMnIF0gICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NhbGxfdXNlcl9mdW5jX2FycmF5JyBdICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdmdW5jdGlvbl9leGlzdHMnIF0gICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndW5pcWlkJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL21pc2MvdW5pcWlkJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2V4cGxvZGUnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL2V4cGxvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaW1wbG9kZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvaW1wbG9kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdtZDUnIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9tZDUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncGFyc2Vfc3RyJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcGFyc2Vfc3RyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3N0cl9yZXBsYWNlJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cl9yZXBsYWNlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3N0cnRvbG93ZXInIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnRvbG93ZXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc3RydG91cHBlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG91cHBlcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdiYXNlNjRfZGVjb2RlJyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9kZWNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYmFzZTY0X2VuY29kZScgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9iYXNlNjRfZW5jb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncGFyc2VfdXJsJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9wYXJzZV91cmwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdyYXd1cmxkZWNvZGUnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3Jhd3VybGRlY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Jhd3VybGVuY29kZScgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndXJsZGVjb2RlJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC91cmxkZWNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1cmxlbmNvZGUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGVuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdib29sdmFsJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2Jvb2x2YWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZW1wdHknIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9lbXB0eScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdmbG9hdHZhbCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2Zsb2F0dmFsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2ludHZhbCcgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaW50dmFsJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2FycmF5JyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYm9vbCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19ib29sJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2NhbGxhYmxlJyBdICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfZmxvYXQnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19mbG9hdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19pbnQnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2ludCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19udWxsJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX251bGwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfbnVtZXJpYycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19udW1lcmljJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX29iamVjdCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3NjYWxhcicgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfc2NhbGFyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3N0cmluZycgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfc3RyaW5nJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzc2V0JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNzZXQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncGFyc2VfYXJncycgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2pzLXBhcnNlLWFyZ3MnICk7XHJcblxyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9fY3N2JyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9fY3N2JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX2h0bWxfYXR0cicgXSA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0cicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV90b19odG1sJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX3dpbmRvdycgXSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX3dpbmRvdycgKTtcclxubW9kdWxlLmV4cG9ydHNbICd3cmFwX2FycmF5JyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93cmFwX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ29rZycgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL29rZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdva3MnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9va3MnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncGxhaW5fb2JqZWN0JyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcGxhaW5fb2JqZWN0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX29iamVjdF9saWtlJyBdICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX29iamVjdF9saWtlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2FycmF5X2xpa2UnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX29iamVjdF9saWtlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Nsb25lX29iamVjdCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2Nsb25lX29iamVjdCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19hZnRlcl9kYXRlJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19hZnRlcl9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2JlZm9yZV9kYXRlJyBdICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2JlZm9yZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3NhbWVfZGF0ZScgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3NhbWVfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdmb3JtYXRfZHVyYXRpb24nIF0gICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9mb3JtYXRfZHVyYXRpb24nICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZGlmZl9kYXlzJyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGlmZl9kYXlzJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3VuZGVmaW5lZCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3VuZGVmaW5lZCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc190YWJfZm9jdXNlZCcgXSAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc190YWJfZm9jdXNlZCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzY3JvbGxfdG9fdG9wJyBdICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9zY3JvbGxfdG9fdG9wJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NvcHlfdG9fY2xpcCcgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2NvcHlfdG9fY2xpcCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzY3JvbGxfcG9zJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9zY3JvbGxfcG9zJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3dpbmRvd19hcmcnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnd2luZG93X2FyZycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvd2luZG93X2FyZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdkZXZpY2VfdHlwZScgXSAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9kZXZpY2VfdHlwZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdkZWJ1ZycgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RpbWVfdGFrZW4nIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RpbWVfdGFrZW4nICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncGlwZV9sb2cnIF0gICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcGlwZV9sb2cnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY291bnRlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY291bnRlcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0b19qcXVlcnknIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qcXVlcnknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndG9fanNfZnVuYycgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdG9fanNfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdyYW5kX21kNScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9yYW5kX21kNScgKTtcclxubW9kdWxlLmV4cG9ydHNbICd1cmxfcGFyYW1zJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy91cmxfcGFyYW1zJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3F1ZXJ5X3N0cmluZycgXSAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3F1ZXJ5X3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19qcXVlcnknIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19qcXVlcnknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY3NzX3VuaXRzJyBdICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY3NzX3VuaXRzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnanNvbl90b19jc3YnIF0gICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvanNvbl90b19jc3YnICk7IiwiLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBhcnJheSBlbGVtZW50cyBpbnRvIDxsaT4gdGFncyBhbmQgYXBwZW5kcyB0aGVtIHRvIHRoZSBsaXN0IG9mIHRoZSBnaXZlbiBpZC5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigpLCBhbmQgYW4gYW5vbnltb3VzIGlubmVyIGNsb3N1cmUgdG8gY3JlYXRlIGEgbGlzdCBvZiBodG1sIHRhZ3MuXHJcbiAqIEBwYXJhbSBhcnJcclxuICogQHBhcmFtIGxpc3RJRFxyXG4gKiBAcGFyYW0gdGFnXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGFyciwgbGlzdElELCB0YWcgPSAnbGknICkgPT4gKCBlbCA9PiAoICggZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnIycgKyBsaXN0SUQgKSApLCAoIGVsLmlubmVySFRNTCArPSBhcnIubWFwKCBpdGVtID0+IGA8JHt0YWd9PiR7aXRlbX08LyR7dGFnfT5gIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCAnJyApICkgKSApKCk7IiwiaW1wb3J0IGlzX29iamVjdCBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0JztcclxuaW1wb3J0IGlzX29iamVjdF9saWtlIGZyb20gJy4vaXNfb2JqZWN0X2xpa2UnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhICkgPT4ge1xyXG5cdGxldCByZXR1cm5faHRtbCA9ICcnO1xyXG5cdGZvciggbGV0IEkgaW4gJGRhdGEgKSB7XHJcblx0XHRpZiggaXNfb2JqZWN0KCAkZGF0YVsgSSBdICkgKSB7XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJztcclxuXHRcdFx0Zm9yKCBsZXQgSyBpbiAkZGF0YVsgSSBdICkge1xyXG5cdFx0XHRcdGxldCAkdmFsdWUgPSAoIGlzX29iamVjdF9saWtlKCAkZGF0YVsgSSBdWyBLIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF1bIEsgXSApIDogJGRhdGFbIEkgXVsgSyBdO1xyXG5cdFx0XHRcdHJldHVybl9odG1sICs9ICR2YWx1ZSArICcgJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnXCInO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0ICR2YWx1ZSA9ICggaXNfb2JqZWN0X2xpa2UoICRkYXRhWyBJIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF0gKSA6ICRkYXRhWyBJIF07XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJyArICR2YWx1ZSArICdcIiAnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmV0dXJuX2h0bWw7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAoICRhcnJheSApID0+IHtcclxuXHRmb3IoIGxldCAka2V5IGluICRhcnJheSApIHtcclxuXHRcdHdpbmRvd1sgJGtleSBdID0gJGFycmF5WyAka2V5IF07XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBDcmVhdGVzIEEgQ2xvbmUgb2YgZ2l2ZW4gdmFsdWUuXHJcbiAqIEBwYXJhbSAkZGF0YVxyXG4gKiBAcmV0dXJucyB7YW55fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhICkgPT4gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoICRkYXRhICkgKTsiLCIvKipcclxuICogQ29weSBhIHN0cmluZyB0byB0aGUgY2xpcGJvYXJkLiBPbmx5IHdvcmtzIGFzIGEgcmVzdWx0IG9mIHVzZXIgYWN0aW9uIChpLmUuIGluc2lkZSBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyKS5cclxuICogQ3JlYXRlIGEgbmV3IDx0ZXh0YXJlYT4gZWxlbWVudCwgZmlsbCBpdCB3aXRoIHRoZSBzdXBwbGllZCBkYXRhIGFuZCBhZGQgaXQgdG8gdGhlIEhUTUwgZG9jdW1lbnQuXHJcbiAqIFVzZSBTZWxlY3Rpb24uZ2V0UmFuZ2VBdCgpdG8gc3RvcmUgdGhlIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBVc2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKSB0byBjb3B5IHRvIHRoZSBjbGlwYm9hcmQuXHJcbiAqIFJlbW92ZSB0aGUgPHRleHRhcmVhPiBlbGVtZW50IGZyb20gdGhlIEhUTUwgZG9jdW1lbnQuIEZpbmFsbHksIHVzZSBTZWxlY3Rpb24oKS5hZGRSYW5nZSgpIHRvIHJlY292ZXIgdGhlIG9yaWdpbmFsIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBAcGFyYW0gc3RyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiB7XHJcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGV4dGFyZWEnICk7XHJcblx0ZWwudmFsdWUgPSBzdHI7XHJcblx0ZWwuc2V0QXR0cmlidXRlKCAncmVhZG9ubHknLCAnJyApO1xyXG5cdGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRlbC5zdHlsZS5sZWZ0ICAgICA9ICctOTk5OXB4JztcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbCApO1xyXG5cdGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA+IDAgPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KCAwICkgOiBmYWxzZTtcclxuXHRlbC5zZWxlY3QoKTtcclxuXHRkb2N1bWVudC5leGVjQ29tbWFuZCggJ2NvcHknICk7XHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCggZWwgKTtcclxuXHRpZiggc2VsZWN0ZWQgKSB7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKCBzZWxlY3RlZCApO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBhIGNvdW50ZXIgd2l0aCB0aGUgc3BlY2lmaWVkIHJhbmdlLCBzdGVwIGFuZCBkdXJhdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBzZWxlY3Rvci5cclxuICogQ2hlY2sgaWYgc3RlcCBoYXMgdGhlIHByb3BlciBzaWduIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkuXHJcbiAqIFVzZSBzZXRJbnRlcnZhbCgpIGluIGNvbWJpbmF0aW9uIHdpdGggTWF0aC5hYnMoKSBhbmQgTWF0aC5mbG9vcigpIHRvIGNhbGN1bGF0ZSB0aGUgdGltZSBiZXR3ZWVuIGVhY2ggbmV3IHRleHQgZHJhdy5cclxuICogVXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKS5pbm5lckhUTUwgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cclxuICogT21pdCB0aGUgZm91cnRoIHBhcmFtZXRlciwgc3RlcCwgdG8gdXNlIGEgZGVmYXVsdCBzdGVwIG9mIDEuIE9taXQgdGhlIGZpZnRoIHBhcmFtZXRlciwgZHVyYXRpb24sIHRvIHVzZSBhIGRlZmF1bHQgZHVyYXRpb24gb2YgMjAwMG1zLlxyXG4gKiBAcGFyYW0gc2VsZWN0b3JcclxuICogQHBhcmFtIHN0YXJ0XHJcbiAqIEBwYXJhbSBlbmRcclxuICogQHBhcmFtIHN0ZXBcclxuICogQHBhcmFtIGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggc2VsZWN0b3IsIHN0YXJ0LCBlbmQsIHN0ZXAgPSAxLCBkdXJhdGlvbiA9IDIwMDAgKSA9PiB7XHJcblx0bGV0IGN1cnJlbnQgPSBzdGFydCxcclxuXHRcdF9zdGVwICAgPSAoIGVuZCAtIHN0YXJ0ICkgKiBzdGVwIDwgMCA/IC1zdGVwIDogc3RlcCxcclxuXHRcdHRpbWVyICAgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHRjdXJyZW50ICs9IF9zdGVwO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGN1cnJlbnQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gZW5kO1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBjbGVhckludGVydmFsKCB0aW1lciApO1xyXG5cdFx0fSwgTWF0aC5hYnMoIE1hdGguZmxvb3IoIGR1cmF0aW9uIC8gKCBlbmQgLSBzdGFydCApICkgKSApO1xyXG5cdHJldHVybiB0aW1lcjtcclxufTsiLCJjb25zdCBpc051bWJlcmljID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19udW1lcmljJyApO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4ge1xyXG5cdHZhciBzID0gdmFsO1xyXG5cdGlmKCBpc051bWJlcmljKCB2YWwgKSApIHtcclxuXHRcdHJldHVybiB2YWwgKyAncHgnO1xyXG5cdH0gZWxzZSBpZiggdmFsLmluZGV4T2YoICdweCcgKSA+IC0xIHx8IHZhbC5pbmRleE9mKCAnJScgKSA+IC0xIHx8IHZhbC5pbmRleE9mKCAnZW0nICkgPiAtMSApIHtcclxuXHRcdGxldCBjaGVja1B4ICA9IHMucmVwbGFjZSggJ3B4JywgJycgKTtcclxuXHRcdGxldCBjaGVja1BjdCA9IHMucmVwbGFjZSggJyUnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrRW0gID0gcy5yZXBsYWNlKCAnZW0nLCAnJyApO1xyXG5cdFx0aWYoIGlzTnVtYmVyaWMoIGNoZWNrUHggKSB8fCBpc051bWJlcmljKCBjaGVja1BjdCApIHx8IGlzTnVtYmVyaWMoIGNoZWNrRW0gKSApIHtcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAnMHB4JztcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuICcwcHgnO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogRGV0ZWN0cyB3ZXRoZXIgdGhlIHdlYnNpdGUgaXMgYmVpbmcgb3BlbmVkIGluIGEgbW9iaWxlIGRldmljZSBvciBhIGRlc2t0b3AvbGFwdG9wLlxyXG4gKiBVc2UgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gdGVzdCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCBwcm9wZXJ0eSB0byBmaWd1cmUgb3V0IGlmIHRoZSBkZXZpY2UgaXMgYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApID8gJ01vYmlsZScgOiAnRGVza3RvcCc7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgKGluIGRheXMpIGJldHdlZW4gdHdvIGRhdGVzLlxyXG4gKiBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgKGluIGRheXMpIGJldHdlZW4gdHdvIERhdGUgb2JqZWN0cy5cclxuICogQHBhcmFtIGRhdGVJbml0aWFsXHJcbiAqIEBwYXJhbSBkYXRlRmluYWxcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlSW5pdGlhbCwgZGF0ZUZpbmFsICkgPT4gKCBkYXRlRmluYWwgLSBkYXRlSW5pdGlhbCApIC8gKCAxMDAwICogMzYwMCAqIDI0ICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGh1bWFuIHJlYWRhYmxlIGZvcm1hdCBvZiB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICogRGl2aWRlIG1zIHdpdGggdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyB0byBvYnRhaW4gdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyBmb3IgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCBhbmQgbWlsbGlzZWNvbmQuXHJcbiAqIFVzZSBPYmplY3QuZW50cmllcygpIHdpdGggQXJyYXkucHJvdG90eXBlLmZpbHRlcigpIHRvIGtlZXAgb25seSBub24temVybyB2YWx1ZXMuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCkgdG8gY3JlYXRlIHRoZSBzdHJpbmcgZm9yIGVhY2ggdmFsdWUsIHBsdXJhbGl6aW5nIGFwcHJvcHJpYXRlbHkuXHJcbiAqIFVzZSBTdHJpbmcucHJvdG90eXBlLmpvaW4oJywgJykgdG8gY29tYmluZSB0aGUgdmFsdWVzIGludG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBtc1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBtcyA9PiB7XHJcblx0aWYoIG1zIDwgMCApIG1zID0gLW1zO1xyXG5cdGNvbnN0IHRpbWUgPSB7XHJcblx0XHRkYXk6IE1hdGguZmxvb3IoIG1zIC8gODY0MDAwMDAgKSxcclxuXHRcdGhvdXI6IE1hdGguZmxvb3IoIG1zIC8gMzYwMDAwMCApICUgMjQsXHJcblx0XHRtaW51dGU6IE1hdGguZmxvb3IoIG1zIC8gNjAwMDAgKSAlIDYwLFxyXG5cdFx0c2Vjb25kOiBNYXRoLmZsb29yKCBtcyAvIDEwMDAgKSAlIDYwLFxyXG5cdFx0bWlsbGlzZWNvbmQ6IE1hdGguZmxvb3IoIG1zICkgJSAxMDAwXHJcblx0fTtcclxuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoIHRpbWUgKVxyXG5cdFx0XHRcdCAuZmlsdGVyKCB2YWwgPT4gdmFsWyAxIF0gIT09IDAgKVxyXG5cdFx0XHRcdCAubWFwKCAoIFsga2V5LCB2YWwgXSApID0+IGAke3ZhbH0gJHtrZXl9JHt2YWwgIT09IDEgPyAncycgOiAnJ31gIClcclxuXHRcdFx0XHQgLmpvaW4oICcsICcgKTtcclxufTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGFmdGVyIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIHRoZSBncmVhdGVyIHRoYW4gb3BlcmF0b3IgKD4pIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGNvbWVzIGFmdGVyIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBID4gZGF0ZUI7IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBiZWZvcmUgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGxlc3MgdGhhbiBvcGVyYXRvciAoPCkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYmVmb3JlIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBIDwgZGF0ZUI7IiwiaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICcuL2lzX3VuZGVmaW5lZCc7XHJcbmltcG9ydCBpc19zdHJpbmcgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZyc7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgZ2l2ZW4gT2JqZWN0IC8gVmFsdWUgaXMgYSBqUXVlcnkgSW5zdGFuY2UuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkZWxlbSApICYmIGZhbHNlID09PSBpc19zdHJpbmcoICRlbGVtICkgJiYgJGVsZW0ualF1ZXJ5ICk7IiwiaW1wb3J0IGlzX29iamVjdCBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0JztcclxuaW1wb3J0IGlzX2FycmF5IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19hcnJheSc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaXMgb2JqZWN0LWxpa2UuXHJcbiAqIENoZWNrIGlmIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBub3QgbnVsbCBhbmQgaXRzIHR5cGVvZiBpcyBlcXVhbCB0byAnb2JqZWN0Jy5cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCB2YWwgKSA9PiB7XHJcblx0cmV0dXJuICggaXNfb2JqZWN0KCB2YWwgKSB8fCBpc19hcnJheSggdmFsICkgKTtcclxufTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIHRoZSBzYW1lIGFzIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKCkgYW5kIHN0cmljdCBlcXVhbGl0eSBjaGVja2luZyAoPT09KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQS50b0lTT1N0cmluZygpID09PSBkYXRlQi50b0lTT1N0cmluZygpOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIGZvY3VzZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBEb2N1bWVudC5oaWRkZW4gcHJvcGVydHksIGludHJvZHVjZWQgYnkgdGhlIFBhZ2UgVmlzaWJpbGl0eSBBUEkgdG8gY2hlY2sgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gIWRvY3VtZW50LmhpZGRlbjsiLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdW5kZWZpbmVkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqIFVzZSB0aGUgc3RyaWN0IGVxdWFsaXR5IG9wZXJhdG9yIHRvIGNoZWNrIGlmIHRoZSB2YWx1ZSBhbmQgb2YgdmFsIGFyZSBlcXVhbCB0byB1bmRlZmluZWQuXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB2YWwgPT09IHVuZGVmaW5lZDsiLCJpbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gJy4vaXNfdW5kZWZpbmVkJztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgd2luZG93IGhhcyBnaXZlbiB2YXJpYWJsZS5cclxuICogQHBhcmFtICRrZXlcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSApID0+ICggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93WyAka2V5IF0gKSApOyIsImxldCAkT0tTICAgICAgID0gKCBwcm9wZXJ0aWVzLCBvYmosIGRlZmF1bHRWYWx1ZSwgZGVsaW1pdGVyID0gJy8nICkgPT4ge1xyXG5cdHByb3BlcnRpZXMgICA9ICggdHlwZW9mIHByb3BlcnRpZXMgPT09ICdzdHJpbmcnICkgPyBwcm9wZXJ0aWVzLnNwbGl0KCBkZWxpbWl0ZXIgKSA6IFsgcHJvcGVydGllcyBdO1xyXG5cdGxldCBwcm9wZXJ0eSA9IHByb3BlcnRpZXMuc2hpZnQoKTtcclxuXHJcblx0aWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHR9XHJcblxyXG5cdGlmKCBwcm9wZXJ0aWVzLmxlbmd0aCApIHtcclxuXHRcdHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmpvaW4oIGRlbGltaXRlciApO1xyXG5cdFx0cmV0dXJuICRPS1MoIHByb3BlcnRpZXMsIG9ialsgcHJvcGVydHkgXSwgZGVmYXVsdFZhbHVlLCBkZWxpbWl0ZXIgKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIG9ialsgcHJvcGVydHkgXTtcclxuXHR9XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gJE9LUzsiLCJsZXQgJE9LUyAgICAgICA9ICggcHJvcGVydGllcywgdmFsdWUsIG9iaiwgZGVsaW1pdGVyID0gJy8nICkgPT4ge1xyXG5cdHByb3BlcnRpZXMgICA9ICggdHlwZW9mIHByb3BlcnRpZXMgPT09ICdzdHJpbmcnICkgPyBwcm9wZXJ0aWVzLnNwbGl0KCBkZWxpbWl0ZXIgKSA6IFsgcHJvcGVydGllcyBdO1xyXG5cdGxldCBwcm9wZXJ0eSA9IHByb3BlcnRpZXMuc2hpZnQoKTtcclxuXHJcblx0aWYoIHByb3BlcnRpZXMubGVuZ3RoICkge1xyXG5cdFx0cHJvcGVydGllcyA9IHByb3BlcnRpZXMuam9pbiggZGVsaW1pdGVyICk7XHJcblxyXG5cdFx0aWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRvYmpbIHByb3BlcnR5IF0gPSB7fTtcclxuXHRcdH0gZWxzZSBpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSAhPT0gJ29iamVjdCcgKSB7XHJcblx0XHRcdGNvbnNvbGUud2FybiggJ09iamVjdCBwcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIiBhbHJlYWR5IGhhcyBub24gb2JqZWN0IHZhbHVlOicsIG9ialsgcHJvcGVydHkgXSwgJ0l0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBhbiBlbXB0eSBvYmplY3QnICk7XHJcblx0XHRcdG9ialsgcHJvcGVydHkgXSA9IHt9O1xyXG5cdFx0fSBlbHNlIGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdLmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdGlmKCAoIC9eWzAtOV0rJC8gKS50ZXN0KCBwcm9wZXJ0eSApICkge1xyXG5cdFx0XHRcdHByb3BlcnR5ID0gcGFyc2VJbnQoIHByb3BlcnR5ICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVHJ5IHRvIHNldCBub24gbnVtZXJpYyBwcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIiB0byBhcnJheTonLCBvYmpbIHByb3BlcnR5IF0sICdUaGUgYXJyYXkgd2lsbCBiZSBiZSByZXBsYWNlZCB3aXRoIGFuIGVtcHR5IG9iamVjdCcgKTtcclxuXHRcdFx0XHRvYmpbIHByb3BlcnR5IF0gPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0JE9LUyggcHJvcGVydGllcywgdmFsdWUsIG9ialsgcHJvcGVydHkgXSwgZGVsaW1pdGVyICk7XHJcblx0fSBlbHNlIHtcclxuXHRcdG9ialsgcHJvcGVydHkgXSA9IHZhbHVlO1xyXG5cdH1cclxuXHRyZXR1cm4gb2JqO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9ICRPS1M7IiwiLyoqXHJcbiAqIExvZ3MgYSB2YWx1ZSBhbmQgcmV0dXJucyBpdC5cclxuICogVXNlIGNvbnNvbGUubG9nIHRvIGxvZyB0aGUgc3VwcGxpZWQgdmFsdWUsIGNvbWJpbmVkIHdpdGggdGhlIHx8IG9wZXJhdG9yIHRvIHJldHVybiBpdC5cclxuICogQHBhcmFtIGRhdGFcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGEgPT4gY29uc29sZS5sb2coIGRhdGEgKSB8fCBkYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gKCkgPT4gKCB0eXBlb2YgT2JqZWN0WyAnY3JlYXRlJyBdICE9PSAndW5kZWZpbmVkJyApID8gT2JqZWN0LmNyZWF0ZSggbnVsbCApIDoge307IiwiLyoqXHJcbiAqIFJldHVybiB2YWx1ZSBmcm9tIFF1ZXJ5U3RyaW5nXHJcbiAqIEBwYXJhbSBuYW1lXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggbmFtZSApID0+IHtcclxuXHRuYW1lICAgICAgICA9IG5hbWUucmVwbGFjZSggL1tcXFtdLywgXCJcXFxcW1wiICkucmVwbGFjZSggL1tcXF1dLywgXCJcXFxcXVwiICk7XHJcblx0dmFyIHJlZ2V4ICAgPSBuZXcgUmVnRXhwKCBcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIiApLFxyXG5cdFx0cmVzdWx0cyA9IHJlZ2V4LmV4ZWMoIGxvY2F0aW9uLnNlYXJjaCApO1xyXG5cdHJldHVybiByZXN1bHRzID09IG51bGwgPyBcIlwiIDogZGVjb2RlVVJJQ29tcG9uZW50KCByZXN1bHRzWyAxIF0ucmVwbGFjZSggL1xcKy9nLCBcIiBcIiApICk7XHJcbn07IiwiaW1wb3J0IG1kNSBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNSc7XHJcblxyXG4vKipcclxuICogVW5pcXVlIHJhbmRvbSBtZDVcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gU3RyaW5nKCBtZDUoIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSApICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBwYWdlLlxyXG4gKiBVc2UgcGFnZVhPZmZzZXQgYW5kIHBhZ2VZT2Zmc2V0IGlmIHRoZXkgYXJlIGRlZmluZWQsIG90aGVyd2lzZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AuIFlvdSBjYW4gb21pdCBlbCB0byB1c2UgYSBkZWZhdWx0IHZhbHVlIG9mIHdpbmRvdy5cclxuICogQHBhcmFtIGVsXHJcbiAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGVsID0gd2luZG93ICkgPT4gKCB7XHJcblx0eDogZWwucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VYT2Zmc2V0IDogZWwuc2Nyb2xsTGVmdCxcclxuXHR5OiBlbC5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVlPZmZzZXQgOiBlbC5zY3JvbGxUb3BcclxufSApOyIsIi8qKlxyXG4gKiBTbW9vdGgtc2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlLlxyXG4gKiBHZXQgZGlzdGFuY2UgZnJvbSB0b3AgdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCBvciBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcC5cclxuICogU2Nyb2xsIGJ5IGEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcC4gVXNlIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB0byBhbmltYXRlIHRoZSBzY3JvbGxpbmcuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcclxuXHRjb25zdCBjID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRpZiggYyA+IDAgKSB7XHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY3JvbGxUb1RvcCApO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKCAwLCBjIC0gYyAvIDggKTtcclxuXHR9XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAoIGNhbGxiYWNrLCB0aXRsZSA9ICdUaW1lVGFrZW4nICkgPT4ge1xyXG5cdGNvbnNvbGUudGltZSggdGl0bGUgKTtcclxuXHRjb25zdCByID0gY2FsbGJhY2soKTtcclxuXHRjb25zb2xlLnRpbWVFbmQoIHRpdGxlICk7XHJcblx0cmV0dXJuIHI7XHJcbn07IiwiaW1wb3J0IGlzX2pxdWVyeSBmcm9tICcuL2lzX2pxdWVyeSc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBHaXZlbiBTdHJpbmcgaW50byBBIGpRdWVyeSBPYmplY3QuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+IHtcclxuXHRpZiggZmFsc2UgPT09IGlzX2pxdWVyeSggJGVsZW0gKSApIHtcclxuXHRcdHJldHVybiBqUXVlcnkoICRlbGVtICk7XHJcblx0fVxyXG5cdHJldHVybiAkZWxlbTtcclxufTsiLCJpbXBvcnQgaXNfb2JqZWN0X2xpa2UgZnJvbSAnLi9pc19vYmplY3RfbGlrZSc7XHJcbmltcG9ydCB2YWxpZGF0ZUpTRnVuYyBmcm9tICcuL3ZhbGlkYXRlU2luZ2xlSlNGdW5jJztcclxuaW1wb3J0IGVtcHR5IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9lbXB0eSc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IGlzX29iamVjdF9saWtlKCAkZGF0YSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGF0YSApIHtcclxuXHRcdFx0aWYoICFlbXB0eSggJGRhdGFbICRrZXkgXSApICkge1xyXG5cdFx0XHRcdCRkYXRhWyAka2V5IF0gPSB2YWxpZGF0ZUpTRnVuYyggJGRhdGFbICRrZXkgXSwgJGFyZ3Nfa2V5LCAkY29udGVudHNfa2V5ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRkYXRhO1xyXG59O1xyXG4iLCIvKipcclxuICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgY3VycmVudCBVUkwuXHJcbiAqIFVzZSBTdHJpbmcubWF0Y2goKSB3aXRoIGFuIGFwcHJvcHJpYXRlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBnZXQgYWxsIGtleS12YWx1ZSBwYWlycyxcclxuICogQXJyYXkucHJvdG90eXBlLnJlZHVjZSgpIHRvIG1hcCBhbmQgY29tYmluZSB0aGVtIGludG8gYSBzaW5nbGUgb2JqZWN0LlxyXG4gKiBQYXNzIGxvY2F0aW9uLnNlYXJjaCBhcyB0aGUgYXJndW1lbnQgdG8gYXBwbHkgdG8gdGhlIGN1cnJlbnQgdXJsLlxyXG4gKiBAcGFyYW0gdXJsXHJcbiAqIEByZXR1cm5zIHtUIHwge319XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHVybCA9PlxyXG5cdCggdXJsLm1hdGNoKCAvKFtePz0mXSspKD0oW14mXSopKS9nICkgfHwgW10gKS5yZWR1Y2UoXHJcblx0XHQoIGEsIHYgKSA9PiAoICggYVsgdi5zbGljZSggMCwgdi5pbmRleE9mKCAnPScgKSApIF0gPSB2LnNsaWNlKCB2LmluZGV4T2YoICc9JyApICsgMSApICksIGEgKSxcclxuXHRcdHt9XHJcblx0KTsiLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gXCJsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0XCI7XHJcbmltcG9ydCBpc191bmRlZmluZWQgZnJvbSBcIi4vaXNfdW5kZWZpbmVkXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICggJHN0cmluZywgJGFyZ3Nfa2V5ID0gJ2pzX2FyZ3MnLCAkY29udGVudHNfa2V5ID0gJ2pzX2NvbnRlbnRzJyApID0+IHtcclxuXHRpZiggdHJ1ZSA9PT0gaXNfb2JqZWN0KCAkc3RyaW5nICkgJiYgZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gKSB8fCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gKSApIHtcclxuXHRcdGxldCAkYXJncyAgICAgPSAoICRzdHJpbmdbICRhcmdzX2tleSBdID09PSBmYWxzZSApID8gZmFsc2UgOiAkc3RyaW5nWyAkYXJnc19rZXkgXTtcclxuXHRcdGxldCAkY29udGVudHMgPSAoICRzdHJpbmdbICRjb250ZW50c19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdO1xyXG5cdFx0aWYoICRhcmdzID09PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkY29udGVudHMgKTtcclxuXHRcdH0gZWxzZSBpZiggJGFyZ3MgIT09IGZhbHNlICYmICRjb250ZW50cyAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oICRhcmdzLCAkY29udGVudHMgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAkc3RyaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gJHN0cmluZztcclxufTtcclxuIiwiaW1wb3J0IGlzX29iamVjdCBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfb2JqZWN0JztcclxuXHJcbi8qKlxyXG4gKiBTZXRzIEpTIE9iamVjdCBJbnRvIFdpbmRvdyBBcmdzLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcGFyYW0gJHZhbHVlXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSwgJHZhbHVlICkgPT4ge1xyXG5cdGlmKCBpc19vYmplY3QoICRrZXkgKSApIHtcclxuXHRcdGZvciggbGV0ICRfayBpbiAka2V5ICkge1xyXG5cdFx0XHR3aW5kb3dbICRfayBdID0gJGtleVsgJF9rIF07XHJcblx0XHR9XHJcblx0fVxyXG5cdHdpbmRvd1sgJGtleSBdID0gJHZhbHVlO1xyXG59OyIsIi8qKlxyXG4gKiBDYXN0cyB0aGUgcHJvdmlkZWQgdmFsdWUgYXMgYW4gYXJyYXkgaWYgaXQncyBub3Qgb25lLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLmlzQXJyYXkoKSB0byBkZXRlcm1pbmUgaWYgdmFsIGlzIGFuIGFycmF5IGFuZCByZXR1cm4gaXQgYXMtaXMgb3IgZW5jYXBzdWxhdGVkIGluIGFuIGFycmF5IGFjY29yZGluZ2x5LlxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHsqW119XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiAoQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF0pOyIsIi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmltcG9ydCB7XG5cdGFycmF5X21lcmdlLFxuXHRjYWxsX3VzZXJfZnVuYyxcblx0Y2xvbmVfb2JqZWN0LFxuXHRpc19qcXVlcnksXG5cdGlzX251bGwsXG5cdGlzX29iamVjdF9saWtlLFxuXHRpc191bmRlZmluZWQsXG5cdGlzX3dpbmRvd19hcmcsXG5cdG1kNSxcblx0bWljcm90aW1lLFxuXHRyYW5kX21kNSxcblx0c3RydG9sb3dlcixcblx0dG9fanF1ZXJ5LFxuXHR0b19qc19mdW5jLFxufSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uIHtcblx0c3RhdGljIGpzX2Z1bmMoICRkYXRhICkge1xuXHRcdHJldHVybiB0b19qc19mdW5jKCAkZGF0YSwgJ3dwb25pb25fanNfYXJncycsICd3cG9uaW9uX2pzX2NvbnRlbnRzJyApO1xuXHR9XG5cblx0c3RhdGljIHJhbmRfaWQoKSB7XG5cdFx0cmV0dXJuIG1kNSggJ3dwb25pb25fcmFuZF8nICsgbWljcm90aW1lKCkgKyByYW5kX21kNSgpICk7XG5cdH1cblxuXHRzdGF0aWMgdmFsaWRfanNvbiggb2JqICkge1xuXHRcdHRyeSB7XG5cdFx0XHRKU09OLnBhcnNlKCBvYmogKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgQSBTaW5nbGUgQ2xhc3MgRm9yIHRoZSBHaXZlbiBFbGVtZW50LlxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0X2ZpZWxkX2NsYXNzKCAkdHlwZSApIHtcblx0XHQkdHlwZSA9IHN0cnRvbG93ZXIoICR0eXBlICk7XG5cblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93Lndwb25pb25fZmllbGRzWyAkdHlwZSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93Lndwb25pb25fZmllbGRzWyAkdHlwZSBdO1xuXHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93WyAnd3Bvbmlvbl8nICsgJHR5cGUgKyAnX2ZpZWxkJyBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93WyAnd3Bvbmlvbl8nICsgJHR5cGUgKyAnX2ZpZWxkJyBdO1xuXHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93WyAkdHlwZSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93WyAkdHlwZSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkSUQoICRlbGVtICkge1xuXHRcdHJldHVybiB0b19qcXVlcnkoICRlbGVtICkuYXR0ciggJ2RhdGEtd3Bvbmlvbi1qc2lkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgRmllbGQgSFRNTCBPYmplY3QgVXNpbmcgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJHdoZXJlX3RvX2ZpbmRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c3RhdGljIElEdG9FbGVtZW50KCAkZWxlbSwgJHdoZXJlX3RvX2ZpbmQgPSBmYWxzZSApIHtcblx0XHRsZXQgJGlkID0gV1BPbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdoZXJlX3RvX2ZpbmQgJiYgaXNfanF1ZXJ5KCAkd2hlcmVfdG9fZmluZCApICkge1xuXHRcdFx0cmV0dXJuICR3aGVyZV90b19maW5kLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIicgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGpRdWVyeSggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiXScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gdmFsdWUgaXMgYW4galF1ZXJ5IGluc3RhbmNlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNGaWVsZCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaXNfanF1ZXJ5KCAkZWxlbSApICkgPyAoIHRoaXMuZmllbGRJRCggJGVsZW0gKSApIDogZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBXaW5kb3cgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIHdpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0cmV0dXJuICggaXNfd2luZG93X2FyZyggJHZhcl9pZCApICkgPyB3aW5kb3dbICR2YXJfaWQgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyAmIFJldHVybnMgRmllbGQgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkQXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHQkdmFyX2lkID0gKCB0aGlzLmlzRmllbGQoICR2YXJfaWQgKSApID8gdGhpcy5maWVsZElEKCAkdmFyX2lkICkgOiAkdmFyX2lkO1xuXHRcdHJldHVybiAoICR2YXJfaWQgKSA/IGNsb25lX29iamVjdCggdGhpcy53aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCApICkgOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGNla3MgYW5kIHJldHVybnMgZ2xvYmFsIHRyYW5zbGF0aW9uIHN0cmluZy5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgdHh0KCAka2V5LCAkZGVmYXVsdCA9ICdzdHJpbmdfZGVmYXVsdF9ub3RfZm91bmQnICkge1xuXHRcdHJldHVybiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoIFdQT25pb24udGV4dFsgJGtleSBdICkgKSA/IFdQT25pb24udGV4dFsgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBMb2FkaW5nIFNjcmVlbi5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkaXNfc2hvd1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBsb2FkaW5nX3NjcmVlbiggJGVsZW0sICRpc19zaG93ID0gdHJ1ZSApIHtcblx0XHQkZWxlbSA9IHRvX2pxdWVyeSggJGVsZW0gKS5maW5kKCAnLnBhZ2UtbG9hZGVyJyApO1xuXHRcdGlmKCB0cnVlID09PSAkaXNfc2hvdyApIHtcblx0XHRcdHJldHVybiAkZWxlbS5mYWRlSW4oICdzbG93JyApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGVsZW0uZmFkZU91dCggJ3Nsb3cnICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBHbG9iYWwgRGVidWcgVmlldyBQT1BVUC5cblx0ICovXG5cdHN0YXRpYyBnbG9iYWxfZGVidWcoKSB7XG5cdFx0bGV0ICRoYW5kbGUgPSBqUXVlcnkoICdhLndwb25pb24tZ2xvYmFsLWRlYnVnLWhhbmRsZScgKSxcblx0XHRcdCRqc29uICAgPSB7fTtcblx0XHRpZiggV1BPbmlvbi5kZWJ1Z19pbmZvID09PSBudWxsICYmICRoYW5kbGUubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkZGVmaW5lZF92YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICk7XG5cdFx0XHRpZiggaXNfb2JqZWN0X2xpa2UoICRkZWZpbmVkX3ZhcnMgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVmaW5lZF92YXJzICkge1xuXHRcdFx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRcdCRqc29uWyAkZGVmaW5lZF92YXJzWyAka2V5IF0gXSA9IFdQT25pb24ud2luZG93QXJncyggJGRlZmluZWRfdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFdQT25pb24uZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCRoYW5kbGUub24oICdjbGljaycsICggKCBlICkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3dhbCgge1xuXHRcdFx0XHR0aXRsZTogV1BPbmlvbi50eHQoICdnbG9iYWxfanNvbl9vdXRwdXQnLCAnR2xvYmFsIFdQT25pb24gRGVidWcgRGF0YScgKSxcblx0XHRcdFx0aHRtbDogalF1ZXJ5KCAnI3dwb25pb25kZWJ1Z2luZm9wb3B1cCA+IGRpdicgKSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBXUE9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdHZXQgSlNPTiBPdXRwdXQnICksXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICgpID0+IHN3YWwuZW5hYmxlTG9hZGluZygpLFxuXHRcdFx0XHRvbk9wZW46ICgpID0+IHtcblx0XHRcdFx0XHRqUXVlcnkoICcjc3dhbDItY29udGVudCAjd3Bvbmlvbi1nbG9iYWwtZGVidWctY29udGVudCcgKS5qc29uVmlldyggV1BPbmlvbi5kZWJ1Z19pbmZvICk7XG5cdFx0XHRcdFx0c3dhbC5kaXNhYmxlTG9hZGluZygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBzd2FsKCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoIFdQT25pb24uZGVidWdfaW5mbyApICsgJzwvdGV4dGFyZWE+Jyxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgYW5kIFJldHJpdmVzIFZhbHVlcyBmcm9tICR3cG9uaW9uLnNldHRpbmdzXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBvcHRpb24oICRrZXksICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gV1BPbmlvbi5zZXR0aW5nc19hcmdzO1xuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gJGFyZ3NbICRrZXkgXTtcblx0XHR9XG5cdFx0cmV0dXJuICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBXUE9uaW9uIERlYnVnIGlzIGVuYWJsZWQuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzX2RlYnVnKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ2RlYnVnJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdhdGhlciBBbGwgRmllbGQgSlMgQ29kZXMuXG5cdCAqL1xuXHRzdGF0aWMgZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIFdQT25pb24uaXNfZGVidWcoKSAmJiBpc19udWxsKCBXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gKSApIHtcblx0XHRcdGxldCAkdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApLFxuXHRcdFx0XHQkanNvbiA9IHt9LFxuXHRcdFx0XHQkdXR4dCA9IFdQT25pb24udHh0KCAndW5tb2RpZmllZF9kZWJ1ZycgKSxcblx0XHRcdFx0JG10eHQgPSBXUE9uaW9uLnR4dCggJ21vZGlmaWVkX2RlYnVnJyApO1xuXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICR2YXJzICkge1xuXHRcdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHZhcnNbICRrZXkgXSApICkge1xuXHRcdFx0XHRcdGxldCAkZGF0YSAgICAgICAgICAgICAgICAgICAgICAgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICR2YXJzWyAka2V5IF0gKTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdICAgICAgICAgID0ge307XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJHV0eHQgXSA9ICRkYXRhLmRlYnVnX2luZm8gfHwgJGRhdGE7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJG10eHQgXSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gPSAkanNvbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3VzdG9tIEFqYXggV3JhcHBlciBGb3IgalF1ZXJ5LkFqYXgoKVxuXHQgKiBAcGFyYW0gJGFjdGlvblxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICogQHBhcmFtICRvblN1Y2Nlc3Ncblx0ICogQHBhcmFtICRvbkVycm9yXG5cdCAqIEBwYXJhbSAkb25BbHdheXNcblx0ICovXG5cdHN0YXRpYyBhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30sICRvblN1Y2Nlc3MgPSBmYWxzZSwgJG9uRXJyb3IgPSBmYWxzZSwgJG9uQWx3YXlzID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRkZWZhdWx0cyA9IHtcblx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdHVybDogV1BPbmlvbi5vcHRpb24oICdhamF4X3VybCcgKSxcblx0XHRcdFx0b25TdWNjZXNzOiBmYWxzZSxcblx0XHRcdFx0b25BbHdheXM6IGZhbHNlLFxuXHRcdFx0XHRvbkVycm9yOiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHQkYWpheCAgICAgPSBmYWxzZTtcblxuXHRcdGlmKCBpc19vYmplY3RfbGlrZSggJGFjdGlvbiApICkge1xuXHRcdFx0JGRhdGEgPSAkYWN0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZGVmYXVsdHMudXJsICs9ICcmJyArIFdQT25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApICsgJz0nICsgJGFjdGlvbjtcblx0XHR9XG5cblx0XHQkZGVmYXVsdHMgID0gYXJyYXlfbWVyZ2UoICRkZWZhdWx0cywgJGRhdGEgKTtcblx0XHQkb25TdWNjZXNzID0gKCBpc191bmRlZmluZWQoICRvblN1Y2Nlc3MgKSB8fCBmYWxzZSA9PT0gJG9uU3VjY2VzcyApID8gJGRlZmF1bHRzLm9uU3VjY2VzcyA6ICRvblN1Y2Nlc3M7XG5cdFx0JG9uQWx3YXlzICA9ICggaXNfdW5kZWZpbmVkKCAkb25FcnJvciApIHx8IGZhbHNlID09PSAkb25FcnJvciApID8gJGRlZmF1bHRzLm9uQWx3YXlzIDogJG9uQWx3YXlzO1xuXHRcdCRvbkVycm9yICAgPSAoIGlzX3VuZGVmaW5lZCggJG9uQWx3YXlzICkgfHwgZmFsc2UgPT09ICRvbkFsd2F5cyApID8gJGRlZmF1bHRzLm9uRXJyb3IgOiAkb25FcnJvcjtcblx0XHQkYWpheCAgICAgID0galF1ZXJ5LmFqYXgoICRkZWZhdWx0cyApO1xuXG5cblx0XHRpZiggJG9uU3VjY2VzcyApIHtcblx0XHRcdCRhamF4LmRvbmUoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvblN1Y2Nlc3MsIHJlcyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRvbkVycm9yICkge1xuXHRcdFx0JGFqYXguZmFpbCggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uRXJyb3IsIHJlcyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRvbkFsd2F5cyApIHtcblx0XHRcdCRhamF4LmFsd2F5cyggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uQWx3YXlzLCByZXMgKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGFqYXg7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBXUE9uaW9uIFRlbXBsYXRlIGZvciB1bmRlcnNjb3JlLlxuXHQgKiBAcGFyYW0gJGlkXG5cdCAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSk6ICp9XG5cdCAqL1xuXHRzdGF0aWMgdGVtcGxhdGUoICRpZCApIHtcblx0XHRsZXQgY29tcGlsZWQsXG5cdFx0XHRvcHRpb25zID0ge1xuXHRcdFx0XHRldmFsdWF0ZTogLzwjKFtcXHNcXFNdKz8pIz4vZyxcblx0XHRcdFx0aW50ZXJwb2xhdGU6IC9cXHtcXHtcXHsoW1xcc1xcU10rPylcXH1cXH1cXH0vZyxcblx0XHRcdFx0ZXNjYXBlOiAvXFx7XFx7KFteXFx9XSs/KVxcfVxcfSg/IVxcfSkvZyxcblx0XHRcdFx0dmFyaWFibGU6ICdkYXRhJ1xuXHRcdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiggZGF0YSApIHtcblx0XHRcdGNvbXBpbGVkID0gY29tcGlsZWQgfHwgXy50ZW1wbGF0ZSggJGlkLCBvcHRpb25zICk7XG5cdFx0XHRyZXR1cm4gY29tcGlsZWQoIGRhdGEgKTtcblx0XHR9O1xuXHR9XG5cblx0Ly9AdG9kbyBNaWdyYXRlIFBsdWdpbiBEZWJ1ZyBJbmZvLlxufVxuIiwiaW1wb3J0IHsgYXJyYXlfbWVyZ2UsIGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdHN0YXRpYyBhZGQoICRrZXksICR2YWx1ZSApIHtcblx0XHRpZiggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblxuXHRcdGlmKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9ICR2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSBhcnJheV9tZXJnZSggJHZhbHVlLCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXQoICRrZXksICRkZWZhdWx0ID0gZmFsc2UgKSB7XG5cdFx0aWYoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSA/ICRkZWZhdWx0IDogdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF07XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vaGVscGVycy9kZXBlbmRlbmN5JztcbmltcG9ydCB7IGFycmF5X21lcmdlIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRlbGVtZW50ID0gdW5kZWZpbmVkLCBwYXJhbSA9IHt9ICkge1xuXHRcdHRoaXMucGFyYW0gICAgICAgICA9IGFycmF5X21lcmdlKCB7IG5lc3RhYmxlOiBmYWxzZSwgcGFyZW50OiBmYWxzZSB9LCBwYXJhbSApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5iYXNlICAgICAgICAgID0ge307XG5cdFx0dGhpcy5iYXNlLiRlbCAgICAgID0gJGVsZW1lbnQ7XG5cdFx0dGhpcy5iYXNlLmluaXQgICAgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLnJ1bGVzZXQgPSBqUXVlcnkuZGVwcy5jcmVhdGVSdWxlc2V0KCk7XG5cdFx0XHR0aGlzLmJhc2UuZGVwUm9vdCgpO1xuXHRcdFx0alF1ZXJ5LmRlcHMuZW5hYmxlKCB0aGlzLmJhc2UuJGVsLCB0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRzaG93OiAoIGVsICkgPT4gZWwucmVtb3ZlQ2xhc3MoICdoaWRkZW4nICksXG5cdFx0XHRcdGhpZGU6ICggZWwgKSA9PiBlbC5hZGRDbGFzcyggJ2hpZGRlbicgKSxcblx0XHRcdFx0bG9nOiBmYWxzZSxcblx0XHRcdFx0Y2hlY2tUYXJnZXRzOiBmYWxzZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbnN0YW5jZSA9IFtdO1xuXHRcdHRoaXMuYmFzZS5kZXBSb290ICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS4kZWwuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1oYXMtZGVwZW5kZW5jeScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5iYXNlLmluc3RhbmNlID0gbmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksICR0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRcdFx0bmVzdGFibGU6ICR0aGlzLnBhcmFtLm5lc3RhYmxlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiAoIHRydWUgPT09ICR0aGlzLnBhcmFtLm5lc3RhYmxlICkgPyAkdGhpcy5iYXNlLiRlbCA6ICR0aGlzLnBhcmFtLnBhcmVudCxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5iYXNlLmluaXQoKTtcblx0fVxufVxuIiwiLy9pbXBvcnQgeyBhcnJheV9tZXJnZSwgZW1wdHksIGlzX2NhbGxhYmxlLCBpc19qcXVlcnksIGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuLy9jb25zdCB0b19qcXVlcnkgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS50b19qcXVlcnk7XG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZTp0cnVlICovXG5cbmNvbnN0IGFycmF5X21lcmdlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmFycmF5X21lcmdlO1xuY29uc3QgZW1wdHkgICAgICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuZW1wdHk7XG5jb25zdCBpc19jYWxsYWJsZSAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5pc19jYWxsYWJsZTtcbmNvbnN0IGlzX2pxdWVyeSAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2pxdWVyeTtcbmNvbnN0IGlzX3VuZGVmaW5lZCA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX3VuZGVmaW5lZDtcblxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi9kZWJ1Zyc7XG5pbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi9tb2R1bGUnO1xuXG4vKipcbiAqIFdQT25pb24gRmllbGQgQWJzdHJhY3QgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyA9IG51bGwgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQgKTtcblx0XHR0aGlzLnNldF9hcmdzKCBmYWxzZSApO1xuXHRcdHRoaXMuZmllbGRfZGVidWcoKTtcblx0XHR0aGlzLmNvbmZpZyA9ICRjb25maWc7XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5qc19lcnJvcl9oYW5kbGVyKCk7XG5cdFx0dGhpcy5qc192YWxpZGF0b3IoKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGVyci5lcnJvci5hcHBlbmRUbyggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHR9XG5cblx0anNfZXJyb3JfaGFuZGxlciggZWxlbWVudCA9IHRoaXMuZWxlbWVudCApIHtcblx0XHRlbGVtZW50Lm9uKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCAnPiAud3Bvbmlvbi1maWVsZHNldCA6aW5wdXQnLCAoIGUsIGRhdGEgKSA9PiB0aGlzLmpzX2Vycm9yKCBkYXRhICkgKTtcblx0fVxuXG5cdGpzX3ZhbGlkYXRvcigpIHtcblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSApIHtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSB7XG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHQkZWxlbS5maW5kKCAnOmlucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucnVsZXMoICdhZGQnLCAkYXJncyApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGhhbmRsZV9hcmdzKCAkYXJnLCAka2V5ID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRhcmdzICAgPSAkd3Bvbmlvbi5qc19mdW5jKCAkYXJnICksXG5cdFx0XHQkZXhpc3RzID0gJHdwb25pb25fZGVidWcuZ2V0KCB0aGlzLmlkKCksIHsgJ1BIUCBBcmdzJzoge30sICdKUyBBcmdzJzoge30gfSApO1xuXG5cdFx0aWYoIGZhbHNlID09PSAka2V5ICkge1xuXHRcdFx0JGV4aXN0c1sgJ0pTIEFyZ3MnIF0gPSAkYXJncztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGV4aXN0c1sgJ0pTIEFyZ3MnIF1bICRrZXkgXSA9ICRhcmdzO1xuXHRcdH1cblx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgJGV4aXN0cyApO1xuXHRcdHJldHVybiAkYXJncztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdwb25pb25fZGVidWcuZ2V0KCB0aGlzLmlkKCkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgJGluZm8gPSB0aGlzLm9wdGlvbiggJ2RlYnVnX2luZm8nICksXG5cdFx0XHQkYXJyICA9IHt9O1xuXG5cdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRpbmZvICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IGVtcHR5KCAkaW5mbyApICkge1xuXHRcdFx0XHQkYXJyWyAnUmF3IEZpZWxkIEFyZ3MnIF0gPSAkaW5mb1sgJ1JhdyBGaWVsZCBBcmdzJyBdO1xuXHRcdFx0XHQkYXJyLkZpZWxkICAgICAgICAgICAgICAgPSAkaW5mb1sgJ0ZpZWxkIEFyZ3MnIF07XG5cdFx0XHRcdCRhcnJbICdGaWVsZCBFcnJvcnMnIF0gICA9ICRpbmZvWyAnRmllbGQgRXJyb3JzJyBdO1xuXHRcdFx0XHQkYXJyWyAnRmllbGQgVmFsdWUnIF0gICAgPSAkaW5mb1sgJ0ZpZWxkIFZhbHVlJyBdO1xuXHRcdFx0XHQkYXJyWyAnUGx1Z2luIElEJyBdICAgICAgPSAkaW5mb1sgJ1BsdWdpbiBJRCcgXTtcblx0XHRcdFx0JGFyci5Nb2R1bGUgICAgICAgICAgICAgID0gJGluZm8uTW9kdWxlO1xuXHRcdFx0XHQkYXJyLlVuaXF1ZSAgICAgICAgICAgICAgPSAkaW5mby5VbmlxdWU7XG5cdFx0XHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6ICRhcnIsICdKUyBBcmdzJzoge30gfSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCAkZm91bmQgPSBmYWxzZTtcblx0XHRpZiggIXRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRsZXQgJElEICAgPSB0aGlzLmlkKCksXG5cdFx0XHRcdCRlbGVtID0galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD0nICsgJElEICsgJ10nICk7XG5cdFx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0XHQkZm91bmQgPSAkZWxlbTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGZvdW5kID0gdGhpcy5lbGVtZW50O1xuXHRcdH1cblxuXHRcdGlmKCBmYWxzZSAhPT0gJGZvdW5kICkge1xuXHRcdFx0bGV0ICR0aGlzID0gdGhpcztcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkLXRpdGxlID4gaDQnIClcblx0XHRcdFx0ICAuYXR0ciggJ3RpdGxlJywgJHdwb25pb24udHh0KCAnY2xpY2tfdG9fdmlld19kZWJ1Z19pbmZvJywgJ0NsaWNrIFRvIFZpZXcgRmllbGQgRGVidWcgSW5mbycgKSApXG5cdFx0XHRcdCAgLnRpcHB5KCB7XG5cdFx0XHRcdFx0ICBhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHQgIGFycm93VHlwZTogJ3JvdW5kJyxcblx0XHRcdFx0XHQgIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdFx0ICB0aGVtZTogJ2xpZ2h0Jyxcblx0XHRcdFx0XHQgIGFuaW1hdGlvbjogJ3NjYWxlJ1xuXHRcdFx0XHQgIH0gKTtcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkLXRpdGxlID4gaDQnICkub24oICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0bGV0ICRkICAgICAgICAgID0gJHRoaXMuaWQoKSArICdkZWJ1Z0lORk8nLFxuXHRcdFx0XHRcdCRub3RpY2VfdHh0ID0gJzxwIGNsYXNzPVxcJ3dwb25pb24tZmllbGQtZGVidWctbm90aWNlXFwnPicgKyAkd3Bvbmlvbi5vcHRpb24oICdkZWJ1Z19ub3RpY2UnICkgKyAnPC9wPicsXG5cdFx0XHRcdFx0JGVsZW0gICAgICAgPSBqUXVlcnkoICc8ZGl2IGlkPVwiJyArICRkICsgJ1wiIGNsYXNzPVwid3Bvbmlvbi1maWVsZC1kZWJ1Zy1wb3B1cFwiID48ZGl2IGlkPVwiJyArICRkICsgJ1wiID48L2Rpdj4nICsgJG5vdGljZV90eHQgKyAnPC9kaXY+JyApO1xuXHRcdFx0XHRsZXQgJGRhdGEgICAgICAgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoICR0aGlzLmlkKCkgKTtcblx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdGh0bWw6ICRlbGVtLFxuXHRcdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiAkd3Bvbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnQXMgSlNPTicgKSxcblx0XHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRcdG9uT3BlbjogKCkgPT4galF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgPiBkaXYgPiAjJyArICRkICkuanNvblZpZXcoICRkYXRhIClcblx0XHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRcdGlmKCByZXN1bHQudmFsdWUgKSB7XG5cdFx0XHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnNjAwcHgnLFxuXHRcdFx0XHRcdFx0XHRodG1sOiAnPHRleHRhcmVhIHN0eWxlPVwibWluLXdpZHRoOjU1MHB4OyBtaW4taGVpZ2h0OjMwMHB4XCI+JyArIEpTT04uc3RyaW5naWZ5KCAkd3Bvbmlvbl9kZWJ1Zy5nZXQoICR0aGlzLmlkKCkgKSApICsgJzwvdGV4dGFyZWE+J1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdG9wdGlvbnMoKSB7XG5cdFx0aWYoIHRoaXMuX2FyZ3MgPT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5fYXJncyA9ICR3cG9uaW9uLndpbmRvd0FyZ3MoIHRoaXMuaWQoKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYXJncztcblx0fVxuXG5cdG9wdGlvbiggJGtleSA9ICcnLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IHRoaXMub3B0aW9ucygpO1xuXHRcdHJldHVybiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApID8gJGFyZ3NbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0aWQoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApO1xuXHR9XG5cblx0bW9kdWxlKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ21vZHVsZScsIGZhbHNlICk7XG5cdH1cblxuXHRwbHVnaW5faWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAncGx1Z2luX2lkJywgZmFsc2UgKTtcblx0fVxuXG5cdGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSApIHtcblx0XHRsZXQgJGFqYXhfa2V5ICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICk7XG5cdFx0bGV0ICRkZWZhdWx0ICAgICAgICAgID0ge1xuXHRcdFx0cGx1Z2luX2lkOiB0aGlzLnBsdWdpbl9pZCgpLFxuXHRcdFx0bW9kdWxlOiB0aGlzLm1vZHVsZSgpLFxuXHRcdH07XG5cdFx0JGRlZmF1bHRbICRhamF4X2tleSBdID0gJGFjdGlvbjtcblx0XHQkZGF0YS5kYXRhICAgICAgICAgICAgPSAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRkYXRhLmRhdGEgKSApID8gYXJyYXlfbWVyZ2UoICRkZWZhdWx0LCAkZGF0YS5kYXRhICkgOiAkZGVmYXVsdDtcblxuXHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAkZGF0YSApO1xuXHR9XG5cblx0aW5pdF9maWVsZCggJGVsZW0sICR0eXBlICkge1xuXHRcdGxldCAkX2luc3RhbmNlcyA9IFtdO1xuXHRcdGlmKCAhaXNfanF1ZXJ5KCAkZWxlbSApICkge1xuXHRcdFx0JGVsZW0gPSB0aGlzLmVsZW1lbnQuZmluZCggJGVsZW0gKTtcblx0XHR9XG5cdFx0bGV0ICR0aGlzID0gdGhpcztcblx0XHQkZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkY2xhc3MgPSAkd3Bvbmlvbi5nZXRfZmllbGRfY2xhc3MoICR0eXBlICk7XG5cdFx0XHRpZiggZmFsc2UgIT09ICRjbGFzcyApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiggaXNfY2FsbGFibGUoICRjbGFzcyApICkge1xuXHRcdFx0XHRcdFx0JF9pbnN0YW5jZXMucHVzaCggbmV3ICRjbGFzcyggalF1ZXJ5KCB0aGlzICkgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggalF1ZXJ5KCB0aGlzICkgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ0Vycm9yOiAnICsgZSArICcgfCBGb3IgOiAnICsgJHR5cGUgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0cmVsb2FkKCkge1xuXHRcdHdwLmhvb2tzLmFkZEFjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pY29uX3BpY2tlcicsICdpY29uX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJywgJ2ZvbnRfc2VsZWN0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1hY2NvcmRpb24nLCAnYWNjb3JkaW9uJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ3JvdXAnLCAnZ3JvdXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0Om5vdCgud3Bvbmlvbi1pbnB1dG1hc2spJywgJ3RleHQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0YXJlYScsICd0ZXh0YXJlYScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2tncm91bmQnLCAnYmFja2dyb3VuZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlX3NlbGVjdCcsICdpbWFnZV9zZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zZWxlY3QnLCAnc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3dpdGNoZXInLCAnc3dpdGNoZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9wYWxldHRlJywgJ2NvbG9yX3BhbGV0dGUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InLCAnd3BfZWRpdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZmllbGRzZXQnLCAnZmllbGRzZXQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnaW5wdXRbZGF0YS13cG9uaW9uLWlucHV0bWFza10nLCAnaW5wdXRtYXNrJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfbGluaycsICd3cF9saW5rcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNoZWNrYm94JywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtcmFkaW8nLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1rZXlfdmFsdWUnLCAna2V5dmFsdWVfcGFpcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BpY2tlcicsICdjb2xvcl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1kYXRlX3BpY2tlcicsICdkYXRlX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdhbGxlcnknLCAnZ2FsbGVyeScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXVwbG9hZCcsICd1cGxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pbWFnZScsICdpbWFnZV91cGxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10YWInLCAnanF1ZXJ5X3RhYicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1maWVsZC10b29sdGlwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nb29nbGVfbWFwcycsICdnb29nbGVfbWFwcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1oZWxwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24td3JhcC10b29sdGlwJywgJ2ZpZWxkX3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jbG9uZScsICdjbG9uZV9lbGVtZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3QyJywgJ3NlbGVjdDInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLmNob3NlbicsICdjaG9zZW4nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdGl6ZScsICdzZWxlY3RpemUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zb3J0ZXInLCAnc29ydGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdHlwb2dyYXBoeScsICd0eXBvZ3JhcGh5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtb2VtYmVkJywgJ29lbWJlZCcgKTtcblx0XHR3cC5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRfYXJncyggJGFyZ3MgKSB7XG5cdFx0dGhpcy5fYXJncyA9ICRhcmdzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggJGVsZW0gKSB7XG5cdFx0bGV0ICRJRCA9ICR3cG9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0cmV0dXJuIGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJElEICsgJ1wiXScgKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCApIHtcblx0XHRpZiggISRzZWxlY3Rvci5qUXVlcnkgKSB7XG5cdFx0XHQkc2VsZWN0b3IgPSBqUXVlcnkoICRzZWxlY3RvciApO1xuXHRcdH1cblx0XHR0aGlzLnNldF9lbGVtZW50KCAkc2VsZWN0b3IgKTtcblx0XHR0aGlzLnNldF9jb250eHQoICRjb250ZXh0ICk7XG5cdFx0dGhpcy5tb2R1bGVfaW5pdCgpO1xuXHR9XG5cblx0bW9kdWxlX2luaXQoKSB7XG5cdH1cblxuXHRzZXRfZWxlbWVudCggJGVsZW0gKSB7XG5cdFx0aWYoICEkZWxlbS5qUXVlcnkgKSB7XG5cdFx0XHQkZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtID0gJGVsZW07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRfY29udHh0KCAkY29udHh0ICkge1xuXHRcdHRoaXMuY29udGV4dCA9ICRjb250eHQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgaG9vaygpIHtcblx0XHRyZXR1cm4gd2luZG93LndwLmhvb2tzO1xuXHR9XG5cblx0Z2V0IGVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbTtcblx0fVxuXG5cdGdldCBjb250eHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dDtcblx0fVxuXG59XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uX1ZhbGlkYXRvciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZm9ybSAgPSBXUE9uaW9uX1ZhbGlkYXRvci5nZXRfZm9ybSgpO1xuXHRcdHRoaXMucnVsZXMgPSB7XG5cdFx0XHRpbnZhbGlkSGFuZGxlcjogKCkgPT4ge1xuXHRcdFx0XHRqUXVlcnkoICcjcHVibGlzaCcgKS5yZW1vdmVDbGFzcyggJ2J1dHRvbi1wcmltYXJ5LWRpc2FibGVkJyApO1xuXHRcdFx0XHRqUXVlcnkoICcjYWpheC1sb2FkaW5nJyApLmF0dHIoICdzdHlsZScsICcnICk7XG5cdFx0XHRcdHRoaXMuZm9ybS5zaWJsaW5ncyggJyNtZXNzYWdlJyApLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmZvcm0uYmVmb3JlKCAnPGRpdiBpZD1cIm1lc3NhZ2VcIiBjbGFzcz1cImVycm9yXCI+PHA+JyArICR3cG9uaW9uLnR4dCggJ3ZhbGlkYXRpb25fc3VtbWFyeScgKSArICc8L3A+PC9kaXY+JyApO1xuXHRcdFx0fSxcblx0XHRcdGlnbm9yZTogZmFsc2UsXG5cdFx0XHRlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oIGVycm9yLCBlbGVtZW50ICkge1xuXHRcdFx0XHRlbGVtZW50LnRyaWdnZXIoICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsIHsgZXJyb3IsIGVsZW1lbnQgfSApO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yQ2xhc3M6ICd3cG9uaW9uLWVycm9yJyxcblx0XHRcdGVycm9yRWxlbWVudDogJ3AnXG5cdFx0fTtcblx0XHR0aGlzLmZvcm0udmFsaWRhdGUoIHRoaXMucnVsZXMgKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRfZm9ybSgpIHtcblx0XHRpZiggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmFjY29yZGlvbigge1xuXHRcdFx0XHRoZWFkZXI6ICc+IC53cG9uaW9uLWFjY29yZGlvbi10aXRsZScsXG5cdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRhbmltYXRlOiAxNTAsXG5cdFx0XHRcdGhlaWdodFN0eWxlOiAnY29udGVudCcsXG5cdFx0XHRcdGFjdGl2ZTogalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdpc19vcGVuJyApLFxuXHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdCdoZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1yaWdodCcsXG5cdFx0XHRcdFx0J2FjdGl2ZUhlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LWRvd24nXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRpbnB1dHMgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0Lndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dFt0eXBlPXJhZGlvXScgKS5vbiggJ2NsaWNrJywgKCkgPT4gJGlucHV0cy5yZW1vdmVBdHRyKCAnbmFtZScgKSApO1xuXG5cdFx0XHQkaW5wdXRzLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dLGlucHV0W3R5cGU9Y2hlY2tib3hdJyApLnByb3AoICdjaGVja2VkJywgdHJ1ZSApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCAnbmFtZScsIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuY2hvc2VuKCB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ2Nob3NlbicsIHt9ICkgKSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG4vKiBnbG9iYWwgc2V0VGltZW91dDp0cnVlICovXG4vKiBnbG9iYWwgd3Bvbmlvbl9maWVsZDp0cnVlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnICAgICAgICA9IHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnY2xvbmUnLCB7fSApICk7XG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRjbG9uZV93cmFwID0gJGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLWNsb25lLXdyYXAnICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLWFkZF0nICksXG5cdFx0XHQvLyRyZW1vdmVfYnRuID0gJGNsb25lX3dyYXAuZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtcmVtb3ZlXScgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gKCAkYXJnLmxpbWl0ICE9PSB1bmRlZmluZWQgKSA/ICRhcmcubGltaXQgOiBmYWxzZSxcblx0XHRcdC8vJGlzX3RvYXN0ICAgPSAoICRhcmcudG9hc3RfZXJyb3IgIT09IHVuZGVmaW5lZCApID8gJGFyZy50b2FzdF9lcnJvciA6IHRydWUsXG5cdFx0XHQkZXJvcl9tc2cgICA9ICRhcmcuZXJyb3JfbXNnLFxuXHRcdFx0JHNvcnQgICAgICAgPSAoICRhcmcuc29ydCAhPT0gZmFsc2UgKSA/IHtcblx0XHRcdFx0aXRlbXM6ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRcdGhhbmRsZTogJy53cG9uaW9uLWZpZWxkLWNsb25lLXNvcnRlcicsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnd3Bvbmlvbi1jbG9uZXItcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRzdGFydDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICksXG5cdFx0XHRcdHN0b3A6ICggZXZlbnQsIHVpICkgPT4gdWkuaXRlbS5yZW1vdmVBdHRyKCAnc3R5bGUnICksXG5cdFx0XHR9IDogZmFsc2U7XG5cblx0XHQkY2xvbmVfd3JhcC5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiAkYWRkX2J0bixcblx0XHRcdGxpbWl0OiAkbGltaXQsXG5cdFx0XHRjbG9uZV9lbGVtOiAnLndwb25pb24tZmllbGQtY2xvbmUnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJ2Eud3Bvbmlvbi1yZW1vdmUnLFxuXHRcdFx0dGVtcGxhdGU6ICR0aGlzLm9wdGlvbiggJ2Nsb25lX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZSApID0+IHdwb25pb25fZmllbGQoICRlLmZpbmQoICc+IGRpdi53cG9uaW9uLWZpZWxkLWNsb25lOmxhc3QtY2hpbGQnICkgKS5yZWxvYWQoKSxcblx0XHRcdHNvcnRhYmxlOiAkc29ydCxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0LyppZiggJGlzX3RvYXN0ID09PSB0cnVlICkge1xuXHRcdFx0XHRcdC8vIEB0b2RvIEFkZCBUb2FzdCBPcHRpb24uXG5cdFx0XHRcdFx0LyEqd3BvLnRvc3QoIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZXJyb3JcIixcblx0XHRcdFx0XHRcdHRpdGxlOiAkZXJvcl9tc2csXG5cdFx0XHRcdFx0fSApOyohL1xuXHRcdFx0XHR9IGVsc2UgeyovXG5cdFx0XHRcdGxldCAkaHRtbCA9IGpRdWVyeSggJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgcm9sZT1cImFsZXJ0XCI+JyArICRlcm9yX21zZyArICc8L2Rpdj4nIClcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHQkYWRkX2J0bi5wYXJlbnQoKS5wcmVwZW5kKCAkaHRtbCApO1xuXHRcdFx0XHQkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmZhZGVJbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRfX0UgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiAkX19FLmZhZGVPdXQoICdzbG93JywgKCkgPT4gJF9fRS5yZW1vdmUoKSApLCAxMDAwICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0Ly99XG5cdFx0XHR9LFxuXHRcdFx0c2hvd19hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5zaG93LFxuXHRcdFx0aGlkZV9hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5oaWRlLFxuXHRcdH0gKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkud3BDb2xvclBpY2tlcigpO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdzZXR0aW5ncycgKSApLFxuXHRcdFx0JHZpZXc7XG5cblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHNldHRpbmdzLnRoZW1lICkgKSB7XG5cdFx0XHQkdmlldyA9ICRzZXR0aW5ncy50aGVtZTtcblx0XHRcdGRlbGV0ZSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR2aWV3ID0gJ2RlZmF1bHQnO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdGpRdWVyeSggJ2JvZHknIClcblx0XHRcdFx0LmFwcGVuZCggalF1ZXJ5KCAnPGRpdiBjbGFzcz1cIndwb25pb24tZGF0ZXBpY2tlci0nICsgJHZpZXcgKyAnXCIgaWQ9XCInICsgdGhpcy5pZCgpICsgJ1wiPjwvZGl2PicgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tZGF0ZXBpY2tlci1yYW5nZScgKSApIHtcblx0XHRcdCRzZXR0aW5ncy5hcHBlbmRUbyA9IGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpIClbIDAgXTtcblx0XHRcdGlmKCAkc2V0dGluZ3MucGx1Z2lucyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkc2V0dGluZ3MucGx1Z2lucyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQkc2V0dGluZ3MucGx1Z2lucy5wdXNoKCBuZXcgcmFuZ2VQbHVnaW4oIHsgaW5wdXQ6ICRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci10by1kYXRlXScgKVsgMCBdIH0gKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLWZyb20tZGF0ZV0nICkuZmxhdHBpY2tyKCAkc2V0dGluZ3MgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKVsgMCBdO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0JyApLmZsYXRwaWNrciggJHNldHRpbmdzICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRnZXQgd2Vic2FmZSgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fd2Vic2FmZV9mb250cycgKTtcblx0fVxuXG5cdGdldCBnb29nbGVfZm9udHMoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2dmb250cycgKTtcblx0fVxuXG5cdGJ1aWxkX29wdGlvbnMoIGRhdGEgKSB7XG5cdFx0bGV0ICRyZXR1cm4gPSAnJztcblx0XHRmb3IoIGxldCAkX2QgaW4gZGF0YSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCBkYXRhWyAkX2QgXSApICkge1xuXHRcdFx0XHQkcmV0dXJuICs9IGA8b3B0aW9uIHZhbHVlPVwiJHskX2R9XCI+JHtkYXRhWyAkX2QgXX08L29wdGlvbj5gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJHJldHVybjtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdzZWxlY3Qud3Bvbmlvbi1mb250LXNlbGVjdG9yJyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4ge1xuXHRcdFx0bGV0ICR2YWwgID0galF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSxcblx0XHRcdFx0JGh0bWwgPSBudWxsO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggdGhpcy53ZWJzYWZlLmZvbnRzIFsgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLndlYnNhZmUudmFyaWFudHMgKTtcblx0XHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggdGhpcy5nb29nbGVfZm9udHNbICR2YWwgXSApICkge1xuXHRcdFx0XHQkaHRtbCA9IHRoaXMuYnVpbGRfb3B0aW9ucyggdGhpcy5nb29nbGVfZm9udHNbICR2YWwgXSApO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICR2YXJpYW50ID0gdGhpcy5lbGVtZW50LmZpbmQoICdzZWxlY3Qud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLmh0bWwoICRodG1sICk7XG5cblx0XHRcdGlmKCAkdmFyaWFudC5oYXNDbGFzcyggJ2Nob3NlbicgKSApIHtcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2Nob3Nlbjp1cGRhdGVkJyApO1xuXHRcdFx0fSBlbHNlIGlmKCAkdmFyaWFudC5oYXNDbGFzcyggJ3NlbGVjdDInICkgKSB7XG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRodG1sX3RlbXAgPSAkdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0JGlucHV0ICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldycgKSxcblx0XHRcdHdwX21lZGlhX2ZyYW1lLFxuXHRcdFx0JGFkZCAgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktYWRkXScgKSxcblx0XHRcdCRlZGl0ICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWVkaXRdJyApLFxuXHRcdFx0JGNsZWFyICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktY2xlYXJdJyApLFxuXHRcdFx0JG1hbmFnZSAgICA9IGZ1bmN0aW9uKCAkdHlwZSApIHtcblx0XHRcdFx0bGV0IGlkcyAgID0gJGlucHV0LnZhbCgpLFxuXHRcdFx0XHRcdHdoYXQgID0gKCAkdHlwZSA9PT0gJ2VkaXQnICkgPyAnZWRpdCcgOiAnYWRkJyxcblx0XHRcdFx0XHRzdGF0ZSA9ICggd2hhdCA9PT0gJ2FkZCcgJiYgIWlkcy5sZW5ndGggKSA/ICdnYWxsZXJ5JyA6ICdnYWxsZXJ5LWVkaXQnO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXG5cdFx0XHRcdGlmKCBzdGF0ZSA9PT0gJ2dhbGxlcnknICkge1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcblx0XHRcdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHRcdFx0ZnJhbWU6ICdwb3N0Jyxcblx0XHRcdFx0XHRcdHN0YXRlOiAnZ2FsbGVyeScsXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYS5nYWxsZXJ5LmVkaXQoICdbZ2FsbGVyeSBpZHM9XCInICsgaWRzICsgJ1wiXScgKTtcblx0XHRcdFx0XHRpZiggd2hhdCA9PT0gJ2FkZCcgKSB7XG5cdFx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5zZXRTdGF0ZSggJ2dhbGxlcnktbGlicmFyeScgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3VwZGF0ZScsIGZ1bmN0aW9uKCBzZWxlY3Rpb24gKSB7XG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkSWRzID0gc2VsZWN0aW9uLm1vZGVscy5tYXAoIGZ1bmN0aW9uKCBhdHRhY2htZW50ICkge1xuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSBhdHRhY2htZW50LnRvSlNPTigpO1xuXHRcdFx0XHRcdFx0aWYoIGl0ZW0uc2l6ZXMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgdGh1bWIgPSAoIHR5cGVvZiBpdGVtLnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGl0ZW0uc2l6ZXMudGh1bWJuYWlsLnVybCA6IGl0ZW0udXJsLFxuXHRcdFx0XHRcdFx0XHQkdG1wICA9IGpRdWVyeSggJGh0bWxfdGVtcCApO1xuXHRcdFx0XHRcdFx0JHRtcC5hdHRyKCAnZGF0YS13cG9uaW9uLWltYWdlX2lkJywgaXRlbS5pZCApO1xuXHRcdFx0XHRcdFx0JHRtcC5maW5kKCAnaW1nJyApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgaXRlbS51cmwgKS5hdHRyKCAnc3JjJywgdGh1bWIgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG5cdFx0XHRcdFx0XHQkcHJldmlldy5hcHBlbmQoICR0bXAgKTtcblx0XHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcud3Bvbmlvbi1oZWxwJyApLnRpcHB5KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5pZDtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0bGV0ICRlO1xuXHRcdFx0XHRcdGZvciggJGUgaW4gc2VsZWN0ZWRJZHMgKSB7XG5cdFx0XHRcdFx0XHRpZiggc2VsZWN0ZWRJZHNbICRlIF0gPT09IGZhbHNlIHx8IHNlbGVjdGVkSWRzWyAkZSBdID09PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIHNlbGVjdGVkSWRzWyAkZSBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkaW5wdXQudmFsKCBzZWxlY3RlZElkcy5qb2luKCAnLCcgKSApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH07XG5cblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdFx0XHQkZWRpdC5oaWRlKCk7XG5cdFx0XHRcdCRjbGVhci5oaWRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZWRpdC5zaG93KCk7XG5cdFx0XHRcdCRjbGVhci5zaG93KCk7XG5cdFx0XHRcdCRhZGQuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdCRhZGQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdhZGQnICkgKTtcblxuXHRcdCRlZGl0Lm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnZWRpdCcgKSApO1xuXG5cdFx0JGNsZWFyLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaS53cG9uaW9uLWltYWdlLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRwYXJlbnQgICA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0XHQkaW1hZ2VfaWQgPSAkcGFyZW50LmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnICksXG5cdFx0XHRcdCR2YWx1ZSAgICA9ICRpbnB1dC52YWwoKS5zcGxpdCggJywnICk7XG5cdFx0XHRqUXVlcnkuZWFjaCggJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdFx0aWYoICR2ID09PSAkaW1hZ2VfaWQgKSB7XG5cdFx0XHRcdFx0JHZhbHVlLnNwbGljZSggJGssIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkaW5wdXQudmFsKCAkdmFsdWUuam9pbiggJywnICkgKTtcblx0XHRcdCRwYXJlbnQuZmFkZU91dCggKCkgPT4gJHBhcmVudC5yZW1vdmUoKSApO1xuXHRcdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0fSApO1xuXG5cdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cblx0XHRpZiggJHByZXZpZXcuaGFzQ2xhc3MoICdnYWxsZXJ5LXNvcnRhYmxlJyApICkge1xuXHRcdFx0JHByZXZpZXcuc29ydGFibGUoIHtcblx0XHRcdFx0aXRlbXM6ICc+IGRpdicsXG5cdFx0XHRcdGN1cnNvcjogJ21vdmUnLFxuXHRcdFx0XHRzY3JvbGxTZW5zaXRpdml0eTogNDAsXG5cdFx0XHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3NvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0aGVscGVyOiAnY2xvbmUnLFxuXHRcdFx0XHRvcGFjaXR5OiAwLjY1LFxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHRsZXQgJGl0ZW0gPSB1aS5pdGVtO1xuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnd2lkdGgnLCAkaXRlbS53aWR0aCgpICk7XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICdoZWlnaHQnLCAkaXRlbS5oZWlnaHQoKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG4iLCIvKiBnbG9iYWwgZ29vZ2xlOnRydWUgKi9cbmltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkbWFwICAgICAgICAgICAgICA9IHRoaXMub3B0aW9uKCAnbWFwJywge30gKTtcblx0XHQkbWFwLmRldGFpbHMgICAgICAgICAgPSAnI2dtYXBfZmllbGRzXycgKyB0aGlzLmlkKCk7XG5cdFx0JG1hcC5kZXRhaWxzQXR0cmlidXRlID0gJ2RhdGEtbWFwLXZhbHVlJztcblx0XHRpZiggJ3llcycgPT09IHRoaXMub3B0aW9uKCAnc2hvd19tYXAnICkgKSB7XG5cdFx0XHQkbWFwLm1hcCA9ICcjZ21hcF8nICsgdGhpcy5pZCgpO1xuXHRcdH1cblxuXHRcdGxldCAkX2luc3RhbmNlID0gdGhpcy5lbGVtLmZpbmQoICdkaXYuc2VhcmNoYm94ID4gaW5wdXQnICk7XG5cdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggdGhpcy5oYW5kbGVfYXJncyggJG1hcCApICk7XG5cdFx0JF9pbnN0YW5jZS5iaW5kKCAnZ2VvY29kZTpkcmFnZ2VkJywgKCBldmVudCwgbGF0TG5nICkgPT4ge1xuXHRcdFx0bGV0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG5cdFx0XHR0aGlzLmVsZW0uZmluZCggJy5tYXBfZmllbGRzIDppbnB1dCcgKS52YWwoICcnICk7XG5cdFx0XHRnZW9jb2Rlci5nZW9jb2RlKCB7XG5cdFx0XHRcdCdsb2NhdGlvbic6IHtcblx0XHRcdFx0XHRsYXQ6IHBhcnNlRmxvYXQoIGxhdExuZy5sYXQoKSApLFxuXHRcdFx0XHRcdGxuZzogcGFyc2VGbG9hdCggbGF0TG5nLmxuZygpIClcblx0XHRcdFx0fVxuXHRcdFx0fSwgZnVuY3Rpb24oIHJlc3VsdHMgKSB7XG5cdFx0XHRcdCRfaW5zdGFuY2UuZ2VvY29tcGxldGUoICdmaWxsRGV0YWlscycsIHJlc3VsdHNbIDAgXSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbi8qIGdsb2JhbCBzZXRUaW1lb3V0OnRydWUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcblx0XHRcdCRhZGQgICAgICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1ncm91cC1hZGRdJyApLFxuXHRcdFx0JGdyb3VwX3dyYXAgPSB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1ncm91cC13cmFwJyApLFxuXHRcdFx0JGxpbWl0ICAgICAgPSAkdGhpcy5vcHRpb24oICdsaW1pdCcgKSxcblx0XHRcdCRlcnJvcl9tc2cgID0gJHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApO1xuXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWdyb3VwLXdyYXAnICksICdhY2NvcmRpb24nICk7XG5cblx0XHQkZ3JvdXBfd3JhcC5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koIGpRdWVyeSggdGhpcyApLCB7IG5lc3RhYmxlOiB0cnVlIH0gKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWdyb3VwLXJlbW92ZScgKS50aXBweSgpO1xuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWdyb3VwLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLWNvbnRlbnQgPiAud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nIClcblx0XHRcdFx0XHRcdCAgLmNsaWNrKCk7XG5cdFx0fSApO1xuXG5cdFx0JGdyb3VwX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZCxcblx0XHRcdGxpbWl0OiBwYXJzZUludCggJGxpbWl0ICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnZ3JvdXBfdGVtcGxhdGUnICksXG5cdFx0XHRvblJlbW92ZTogZnVuY3Rpb24oICRlbGVtICkge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0aWYoIGpRdWVyeSggJ2JvZHknICkuZmluZCggJ2xpbmsjZWRpdG9yLWJ1dHRvbnMtY3NzJyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwiZWRpdG9yLWJ1dHRvbnMtY3NzXCIgaHJlZj1cIicgKyAkd3Bvbmlvbi5zZXR0aW5ncyggJ3dwZWRpdG9yX2J1dHRvbnNfY3NzJyApICsgJ1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIG1lZGlhPVwiYWxsXCI+JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGRhdGEgPSAkZ3JvdXBfd3JhcC5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcDpsYXN0LWNoaWxkJyApO1xuXHRcdFx0XHR0aGlzLmluaXRfZmllbGQoICRncm91cF93cmFwLCAnYWNjb3JkaW9uJyApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZGF0YSApO1xuXHRcdFx0XHQkZGF0YS5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCk7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdFx0XHR3cG9uaW9uX2ZpZWxkKCAkZGF0YSApLnJlbG9hZCgpO1xuXHRcdFx0XHR0aGlzLmluaXRfZmllbGQoICRkYXRhLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2VkaXRvcicgKSwgJ3JlbG9hZF93cF9lZGl0b3InICk7XG5cdFx0XHR9LFxuXHRcdFx0c29ydGFibGU6IHtcblx0XHRcdFx0aXRlbXM6ICcud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcsXG5cdFx0XHRcdGhhbmRsZTogJy53cG9uaW9uLWFjY29yZGlvbi10aXRsZScsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnd3Bvbmlvbi1hY2NvcmRpb24tcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHR1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0b3A6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0ICRodG1sID0galF1ZXJ5KCAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj4nICsgJGVycm9yX21zZyArICc8L2Rpdj4nICkuaGlkZSgpO1xuXHRcdFx0XHQkYWRkLmJlZm9yZSggJGh0bWwgKTtcblx0XHRcdFx0JGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmZhZGVJbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRfX0UgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRfX0UuZmFkZU91dCggJ3Nsb3cnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0JF9fRS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbi8qZ2xvYmFsIHN3YWw6dHJ1ZSovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkX3RoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICA9ICRfdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFyZ3MgICAgICAgPSAkX3RoaXMub3B0aW9ucygpLFxuXHRcdFx0JGlucHV0ICAgICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItaW5wdXQnICksXG5cdFx0XHQkcmVtb3ZlX2J0biA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItcmVtb3ZlXScgKSxcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24taWNvbnBpY2tlci1hZGRdJyApLFxuXHRcdFx0JHByZXZpZXcgICAgPSAkZWxlbS5maW5kKCAnc3Bhbi53cG9uaW9uLWljb24tcHJldmlldycgKTtcblxuXHRcdGxldCAkd29yayA9IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRlbGVtczogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRwb3B1cDogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRlbG06IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgQSBOZXcgSW5zdGFuY2UgZm9yIFRvb2xUaXAuXG5cdFx0XHQgKi9cblx0XHRcdGluaXRfdG9vbHRpcDogKCkgPT4ge1xuXHRcdFx0XHRpZiggJGFyZ3MucG9wdXBfdG9vbHRpcCAhPT0gJ2ZhbHNlJyApIHtcblx0XHRcdFx0XHRsZXQgJHRwID0gKCB0eXBlb2YgJGFyZ3MucG9wdXBfdG9vbHRpcCA9PT0gJ29iamVjdCcgKSA/ICRhcmdzLnBvcHVwX3Rvb2x0aXAgOiB7fTtcblx0XHRcdFx0XHRpZiggJHdvcmsuZWxlbXMubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCR3b3JrLmVsZW1zLnRpcHB5KCAkdHAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEluaXRzIEZvciBlYWNoIGFuZCBldmVyeSBQT1BVUC5cblx0XHRcdCAqIEBwYXJhbSAkZWxtXG5cdFx0XHQgKiBAcGFyYW0gJGluc3RhbmNlXG5cdFx0XHQgKi9cblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCAkZWxtLCAkaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR3b3JrLmVsbSAgID0gJGVsbTtcblx0XHRcdFx0JHdvcmsucG9wdXAgPSAkaW5zdGFuY2U7XG5cdFx0XHRcdCR3b3JrLmVsZW1zID0gJHdvcmsuZWxtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXHRcdFx0XHRsZXQgJGhlaWdodCA9ICR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnICk7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnLCAkaGVpZ2h0ICk7XG5cdFx0XHRcdCR3b3JrLnNlbGVjdCgpO1xuXHRcdFx0XHQkd29yay5pbnB1dCgpO1xuXHRcdFx0XHQkd29yay5lbGVtcy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRpY29uID0galF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKTtcblx0XHRcdFx0XHQkaW5wdXQudmFsKCAkaWNvbiApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdFx0c3dhbC5jbG9zZU1vZGFsKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0JHdvcmsuaW5pdF90b29sdGlwKCk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBXb3JrcyB3aXRoIFBPUFVQIElucHV0IFNlYXJjaC5cblx0XHRcdCAqL1xuXHRcdFx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBpbnB1dFt0eXBlPXRleHRdJyApLm9uKCAna2V5dXAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXHRcdFx0XHRcdCR3b3JrLmVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICkuc2VhcmNoKCBuZXcgUmVnRXhwKCAkdmFsLCAnaScgKSApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSGFuZGxlcyBTZWxlY3Rib3ggaW4gcG9wdXAuXG5cdFx0XHQgKi9cblx0XHRcdHNlbGVjdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIHNlbGVjdCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdwb25pb24uYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0J3dwb25pb24taWNvbi1saWInOiAkdmFsLFxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCAkcmVzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICR3b3JrLmVsbSwgJHdvcmsucG9wdXAgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5kaXNhYmxlTG9hZGluZygpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiggJGlucHV0LnZhbCgpID09PSAnJyApIHtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIEJsdXIgRXZlbiAvIGNoYW5nZSBldmVuIGluIGlucHV0ZmllbGQuXG5cdFx0ICovXG5cdFx0JGlucHV0Lm9uKCAna2V5dXAgYmx1ciBjaGFuZ2Uga2V5cHJlc3MnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmKCAkdmFsICE9PSAnJyApIHtcblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJzxpIGNsYXNzPVwiJyArICR2YWwgKyAnXCI+PC9pPicgKS5zaG93KCk7XG5cdFx0XHRcdCRyZW1vdmVfYnRuLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQWRkIEJ1dHRvbiBDbGljayBFdmVudC5cblx0XHQgKi9cblx0XHQkYWRkX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBvcHVwID0gc3dhbCgge1xuXHRcdFx0XHR0aXRsZTogJGVsZW0uZmluZCggJy53cG9uaW9uLWZpZWxkLXRpdGxlIGg0JyApLmh0bWwoKSxcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0YWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0d2lkdGg6ICc3MDBweCcsXG5cdFx0XHRcdGN1c3RvbUNsYXNzOiAnd3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbCcsXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0XHQkX3RoaXMuYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiAkYXJncy5lbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25TdWNjZXNzOiAoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0bGV0ICRwb3B1cF9lbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHBvcHVwX2VsZW0sICRwb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uRXJyb3I6ICgpID0+ICRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiAkcG9wdXAuZGlzYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIFJlbW92ZSBCdXR0b24gRXZlbnQuXG5cdFx0ICovXG5cdFx0JHJlbW92ZV9idG4ub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkaW5wdXQgICAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXG5cdFx0XHQkcHJldmlld19hZGQgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3LWFkZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXcnICk7XG5cblx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IG51bGw7XG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcHJldmlld19hZGQuaGlkZSgpO1xuXHRcdFx0XHQkcHJldmlldy5zaG93KCk7XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2ltYWdlX3VwbG9hZF91cGRhdGVkJywgJGlucHV0LCAkcHJldmlldywgJHByZXZpZXdfYWRkICk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXdfYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJHRoaXMubWVkaWFfaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHR0aXRsZTogJHRoaXMub3B0aW9uKCAnZnJhbWVfdGl0bGUnLCBcIlNlbGVjdCBJbWFnZVwiICksXG5cdFx0XHR9ICk7XG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9ICR0aGlzLm1lZGlhX2luc3RhbmNlLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCkuYXR0cmlidXRlcztcblx0XHRcdFx0bGV0IHRodW1ibmFpbCAgPSAoIHR5cGVvZiBhdHRhY2htZW50LnNpemVzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwgIT09ICd1bmRlZmluZWQnICkgPyBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbC51cmwgOiBhdHRhY2htZW50LnVybDtcblx0XHRcdFx0JHByZXZpZXcuZmluZCggJ2ltZycgKS5hdHRyKCAnc3JjJywgdGh1bWJuYWlsICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBhdHRhY2htZW50LnVybCApO1xuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmlkICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gKTtcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlldy5maW5kKCAnLndwb25pb24taW1hZ2UtcmVtb3ZlJyApLm9uKCAnY2xpY2snLCAoKSA9PiAkaW5wdXQudmFsKCAnJyApLnRyaWdnZXIoICdjaGFuZ2UnICkgKTtcblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2ltZycsICggZXZlbnQgKSA9PiB0aGlzLmluaXRfZmllbGQoIGV2ZW50LnRhcmdldCwgJ2ltYWdlX3BvcHVwJyApICk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnaW5wdXRtYXNrJyApO1xuXHRcdFx0aWYoICRzZXR0aW5ncyApIHtcblx0XHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnSW5wdXRNYXNrJyApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5wdXRtYXNrKCAkc2V0dGluZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHRoaXNfZWxlbSA9ICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tdGFiLXdyYXAgJyApO1xuXG5cdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaSBhJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCAkX3RoaXMgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tdGFiLWN1cnJlbnQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0JF90aGlzLnBhcmVudCgpLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi10YWItcGFnZScgKS5oaWRlKCk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0bGV0ICR0YWIgPSAkX3RoaXMuYXR0ciggJ2RhdGEtdGFiLW5hbWUnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnZGl2I3dwb25pb24tdGFiLScgKyAkdGFiICkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApLnNob3coKTtcblx0XHR9ICk7XG5cblx0XHRpZiggJHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQgYScgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGk6Zmlyc3QtY2hpbGQgYScgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBpc191bmRlZmluZWQgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9pc191bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZ2xvYmFsX3ZhbGlkYXRlID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1rZXl2YWx1ZS1hY3Rpb24tY29udGFpbmVyICA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtYWRkXScgKSxcblx0XHRcdGxpbWl0OiAoIC0xID09PSB0aGlzLm9wdGlvbiggJ2xpbWl0JyApICkgPyBudWxsIDogdGhpcy5vcHRpb24oICdsaW1pdCcgKSxcblx0XHRcdGNsb25lX2VsZW06ICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtZmllbGQnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1rZXl2YWx1ZS1yZW1vdmVdJyxcblx0XHRcdHRlbXBsYXRlOiB0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2tleV92YWx1ZV91cGRhdGVkJywgJGVsZW0gKTtcblx0XHRcdFx0dGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgJGVsZW0uZmluZCggJz4gZGl2Omxhc3QtY2hpbGQnICkgKTtcblx0XHRcdH0sXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiAoKSA9PiB7XG5cdFx0XHRcdGxldCAkaHRtbCA9IGpRdWVyeSggJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgcm9sZT1cImFsZXJ0XCI+JyArIHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApICsgJzwvZGl2PicgKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5hZnRlciggJGh0bWwgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQnICkuZmFkZUluKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJF9fRSA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JF9fRS5mYWRlT3V0KCAnc2xvdycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkX19FLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0sIDEwMDAgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCBlcnIuZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggdHJ1ZSAhPT0gaXNfdW5kZWZpbmVkKCAkYXJncy5rZXkgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gZGl2JyApLmVxKCAwICkuZmluZCggJzppbnB1dCcgKS5ydWxlcyggJ2FkZCcsICRhcmdzLmtleSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRpZiggdHJ1ZSAhPT0gaXNfdW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDEgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MudmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiggdHJ1ZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJncy5rZXkgKSAmJiB0cnVlID09PSBpc191bmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnOmlucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmltYWdlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRRQVlSWGhwWmdBQVNVa3FBQWdBQUFBQUFBQUFBQUFBQVAvc0FCRkVkV05yZVFBQkFBUUFBQUE4QUFELzRRTnRhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMd0E4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QaUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pCWkc5aVpTQllUVkFnUTI5eVpTQTFMak10WXpBeE1TQTJOaTR4TkRVMk5qRXNJREl3TVRJdk1ESXZNRFl0TVRRNk5UWTZNamNnSUNBZ0lDQWdJQ0krSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJSGh0Ykc1ek9uaHRjRTFOUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmJXMHZJaUI0Yld4dWN6cHpkRkpsWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wzTlVlWEJsTDFKbGMyOTFjbU5sVW1WbUl5SWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJYQk5UVHBQY21sbmFXNWhiRVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2T1RCR05FVkRRamc0UkRBeFJUQXhNVGhCTWtSRE5FVTJOemhGUWtFelJEZ2lJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSVVU1TjBFM09FRTFPVU5GTVRGRk5UZzFSVVZCTUVVNU4wSTJRa1pCTXpJaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJVVTVOMEUzT0RrMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTkNCWGFXNWtiM2R6SWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5ETTJNRFUyUXpKR1FrVkVSVEF4TVRrMU5VVkNSVEF6UlVFNFFqUkVOVUlpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2T0VWR05FVkRRamc0UkRBeFJUQXhNVGhCTWtSRE5FVTJOemhGUWtFelJEZ2lMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejcvN2dBT1FXUnZZbVVBWk1BQUFBQUIvOXNBaEFBR0JBUUVCUVFHQlFVR0NRWUZCZ2tMQ0FZR0NBc01DZ29MQ2dvTUVBd01EQXdNREJBTURnOFFEdzRNRXhNVUZCTVRIQnNiR3h3Zkh4OGZIeDhmSHg4ZkFRY0hCdzBNRFJnUUVCZ2FGUkVWR2g4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4Ly93QUFSQ0FFVEFSTURBUkVBQWhFQkF4RUIvOFFBaVFBQkFBTUFBd0VCQUFBQUFBQUFBQUFBQUFRRkJnRURCd0lJQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBRUFBQkF3TURBUU1HQnc4Q0F3a0FBQUFCQUFJREVRUUZJUklHTVVFVEIxRmhjWUVpTXBHaHNjRkNnaFRoVW1KeWtxS3l3aU16YzdOMEZUWWtOOUhURitKRFU1T2pWRFZWRmhFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvYUFBd0RBUUFDRVFNUkFEOEEvVktBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSU91ZWVLQ015U3VER0RxU2c2STh2alhtaloyL1dxMzVRRUhleTR0NVBjbFkvOEFGY0Q4aURzUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFRk55ZVhiYlJSL2Z1Si9KSDNVR2IzSU9keURzanZMbVA5M0s5dm1EaUVFbG1jeWJCUVRranpocCtNaEJJWnlhOWJRT1pHL3ltaEIrSW9KTWZLVy85NWIrdHJ2K0lRU1krU1k5M3ZCN1BPUlVmRVNna3g1akdTZTdjTkg0MVcvcFVRUzJQWTlvZXh3YzA5SEExQlFjb0NBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJTTN5cWI5dkJGOTYwdS9LTlAxVUZiaW9HM04vREM4Ym1PUHREeWdDcFFhU1RqMk1lUFpZWXo1V3VQejFRUlpPTFFFZnM1bkErY0FvSXorTDNZOXlaaDlOUjh5Q003ajJWQjBqRHZPSE4rY2hCR2t4bVNqTkhXOG5xYVQ4aURvZkhOR2FQWTVwOGhCQ0Q0M0lOZHgxam00eHBKOTl6bk45SFQ1a0ZtZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FneC9KNTkrVUxmL0NZMXY2MzZ5RG5pN0MvSmgzWkcxeFByRlBuUWE5QVFFQkFRUU00K09QR1R1YzBFbHUwRWp0T2lERWJrRzd4TVpqeHR1dzlkZ1A1V3Z6b0phQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNEQVpxZnZNcmN1SFRlUVBxNmZNZ3VPR3hrdnVKZXdBTnI2Nm9OT2dJQ0FnNGM1cldsemlHdEhVblFJS1hsazdSakd0QnIzanhRanRBQ0RIc0pjNE5IVW1nOWFEMHBqUXhqV2pvMEFEMUlPVUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUWZNa3NjYmR6M0JvOHBRUkpNeFpzMGFTOC9nalQ0NklJVXVibmRwRzBNODUxS0NWaTdtV1dPYVNaMVEwMTlBcHFnd0UwcGRLOTMzemlmaEtEWThOWVJpM3VQMDVTUjZnQWduWlBOMk9QWisxZHZsUHV4TjFkNi9JZ3FNVHl0ODk4WXJzTlpGS2FSRWFiVDVDZk9nMDZDcHlmSk1mWkFzRHUrbjdJMmRBZk9VR1N5R2N5Ris0dGtlV3hFNlJOMGIxN2ZLZ3RPVXY3dXd4c0gwaEhWemZRMW9DQ293N1RKbGJSdEsvdFdFanpCd0pRZWpJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUtyT3RkdGhkOUVFZytrMFFWQ0FndEdrUTRDNmxKb1RISnI1NkVCQjUvdlFhcCtUdU1aeGl5RnZSazArLzI2RFFiaWUzMG9NdkpQSkk4dmtjWHZjYXVjNGtrbjBsQjg3MEZuTnlYTFMycmJZekVNQW81dzBjNzB1Nm9LemVnNzdFR1M5Z2pHdTZSb3A2MEYxemFVZjNTSmplaklSVWVRbHp2bVFSK0lzTW1iaU5LaGpYdVA1Skh6b04rZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdpNVNMdkxOL2xiN1E5U0RQVVFLSUptZmNJT0t2RmFGN1l3UFM1NEorSkJnQTRrZ2VWQnJ1VFdGN0xqY1l5M2dkSXlHTDJ5M1doTFc5bnFRWlo5dmRNOStGN2ZTMGhCMUZ4SFhSQnh2UU42QzQ0bXdTNTYyRGhWcmR6dldHRWo0MEh4eWVjdnpsMVUxMnUyajFBSUxYZ1VlNjd1cHZ2STJ0SDFqL0FObEJ0VUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCd0JCQjZIUW9NdlBIM2NyNHo5RnhGZlFnK1dpcEhuUU9keTl6aWJXMysrZVB6Ry9kUVlVU0VFRWRRYWhCY1FjeHpzTkIzNGVBS0FQYTBqNGdFRTl2aUJrRHBMYlFPYjJnQncrVnhRZGc1aGhwTkxqRXgxUHZPQVlmbGFnNWJrT0N6Nnkyam9uSHlid1B6WElEY1B3KzdKTUdRN2o4RjdnMzlPaUN6NDlnTWZaWDdyaTN2bVhYc0ZyR3RMU1FUMU9oS0REWDA1bHZaNUNhbDczR3ZyUWJUdytoQXgxelAyeVM3UFV4b1A2NkRWSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQ2l6RU95NjMwMGtGZlgyb0kxdEh2dUkyRHRjRUZYNGkzQiswMmx2Mk5ZNlQ4bzAvVlFZK3FCVkFxZ1ZRS29GVUhJZTRkSEVldEJ4dVFlbThLaEVmSDRIRHJLNTd6K1Z0L1ZRWHFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdyOHpGdXQyeUFhc2RxZk1mdW9LN0c3ZnRzZTQwMStPaURua3ZGUDd6TkhPeTQ3bVdObXloYnVhUlVueWp5b016Y2VIK2FqL2RQaW1IbWR0L1NRUUxqaVBJWVBldEhQL2hrUC9ScWdnVDR6SjI0clBheXhEeXZZNXZ5aEJHSklPcURqY2dia0RjZ2JrSHNPRGc3akQyY1ZLRnNMS2p6a1ZQeGxCTlFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUhWY3hDVzNrWjVSOTFCbWpVR25hRUhZeTR1R2U1STV2b0pDRHRaa3IxblNRbjA2L0tnNzQ4emRBKzAwUCtMNUVGaGJYVnpNUnZnTEduNlJQM0VIWlBaMmx3S1R3c2xINGJRNzVVRmZOeFRqMDFkMWxHQ2UxdFcvSVFncjV2RDdBdkpMVE5HZXdOY0NCOElLQ0JMNGFSRWt4WDdtanNEbzYvR0hCQkRiNGI1RVhEQTY1aU1GUnZjTjI3YjIwYlQ1MEhvREdoclEwZEdpZzlTRGxBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFRkZlMk00dW43R0Z6WG1yU0JwcnFnNWh3OXkvVjVFWTgvVkJOaXcxdTMzM0Y1K0FJSmtjRU1YN3RnYjZBZyswQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkJGeW1SaHh1T3ViK2RyblEyc2JwWkdzQUxpMWdxYUFrQ3ZyUVFPTDhzeFBKTE9TNXg1ZTN1WDdKWVpnMXNqU1JVRWhwY0tPN0RWQmJ5UERJM1BQUm9MalR6Q3FDcDR2eWpIOGt4OGw5WXh5eHd4eW1Celp3MXJ0eld0ZFViWFBGS1BIYWd1RUJBUVJzbGZ3NC9IWE4vTUhPaHRZbnpTTllBWEZyR2x4MmdrQ3VubFFZai9yWnhYLzJ0OS81Y1AvTlFTTEh4aTRoY3pDS1Q3VGFBMEFrbmpidDEvaHVrSStCQnRvNUk1WTJ5UnVENDNnT1k5cEJhNXBGUVFSMUJRZlNBZ0lDQWdJS2JqbktzZm4vdG4yT09hUDdGTDNNdmZCcmF1MTFidGMvVFR0UVhLQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3BlYmY0am1QNlNYOUFvUEplTnZ5SEZMWEQ4cWgzVFl2STk1QmtvaDJiWm5zSDVyQTV2bkJIYWc5ck56QmRZMDNOdThTd1RRbDhVamRRNXJtMUJDREVlQ2YrSzNYOWRKL0ppUVRNMzRtMmRwa240dkVXRSthdjRpUkxIYjEyZ2cwY0FXdGtjUzN0bzJpRG5CZUpkbmU1Sm1LeWxoUGhzakthUlJYRmRyaWVqZHpteHVCUFpWdm1RYk5CVDh4L3hQTS8wVS84c29LcndwL3dYSC9qVC96M29KUGlKYVl5ZmlPUmZmTVllNWhjKzJrZFRjMmI2RzA5aExxRHpvS1hpR2N1Y1I0V3g1U2VFM0gyUVNkMUU1Mnd1ajc0dGFOMUhVQXJwb2dOOFZKN2tRT3hlQnVjakdXUm04bGhMaXlHU1JvY1k5d2pjSEZ0YUVuYWd2T1VjM3huSGhERk94OXhrTGdBdzJNSHRQSUpwVStRVjBIbDdFRkhENHFUVzhyUDc5eCs4eE5ySVExdHk4UGUydm5EbzRqOEZVRi95dmxSd2VFanpGdmFqSVdyM3NEeXlYWUJISVBaa0IydkRoV2c5YUM3dDU0cmkzaXVJWGJvcG1Oa2pjTzFyaFVINENnbzhYeXc1SGxHUnd0dmFWdDhhMGQ5ZmQ1b1pEUWJCSHQ4dTc2WFlnNDRqeTMvQVBSZjNEL1NmWmZzTTNjZnZPODM5ZmE5MWxPaUN2enZpUmEyV1NreGVLc0o4emtZYWlhSzNCMnRJcFVibXRrSkk3YU4wNklPY0Y0ajIxN2tvOFhsY2ZQaHNqTnBERmNBN1hrOUFIT2JHUVQyVmFnc1R5c3g4eUhHNTdYdXhMQjM5cmQ5NVh2S0RWdXphS2U2NzZSNklQcm1YS291TllqKzRQaCswdmRJMktLRGYzZTR1cVQ3VzEvUnJTZWlDenh1UWh2OFpiWkNQMllybUZrd3FmZEQyaDFDZk1ncXVJY3FkeU9DN3VtV24yZTBnbk1OdktYbDVsRGRTN2JzWnQwSTdUOFNDL1FFQkFRRUJBUUVCQVFFRkx6Yi9FY3gvU1Mvb0ZCUjhEeGRubGZES3p4OTR6ZmIzRGJocngyai9VU0VPSG5hZFFncXVGNVM4d04vZThMeTc2bU5yMzR5WSs2NXBCZHRGZXh3OXB2bnFFRHdwbmt0K0FaZWVMU1NLZTRldy9oTnRveUVFL3djc2JhTGk3N3hyUWJtNm5mMzBuMGlHYU5iWHlEcjYwSHo0eTJkdTdqa0Y4UUczZHRjTUVFbzBjQThIYzBIcjJBK3BCdHNkTkpOajdXYVExa2toamU4K2R6UVNncitZLzRubWY2S2YrV1VIblhDZUZaL0o4YnRiMjA1UGQ0NjNrTWdaWnhDVFl6Ykk1cHB0bWpHcEZmZFFYclBDaVc2bFljN3lDOHlzTWJnNWtMaTVvMHJVRXZmTjE4MUVGdnoyMXQ3WGdHUnRyZU1SUVF3TVpGRzBVRFd0ZTBBQkIyZUc5dkZCd3JHQ050TjhicEhudExudmNTU2d3MHQxeXAvaVZtYnJDV0VHUXZiWUNKcmJrZ0NLS2pXZ3NySkRxYWZINTBGcGs3anhjeVdQdUxDNjQvWXV0N2xqbzVBSHNxQTRkUlc1T282anpvTHZqWEc4akp3RTRET1I5MU81a3NJYVhOZVd0TGk2TTdtRnc5a2tVOUNDdjRUeWMyUEI3NFgrbDF4NHlRU3hucWR0ZTZiK1Y3QTlDQ2I0V1l1UzI0NGNqYzYzbVhsZGRUUFBVdEpJWjhPcnZXZ3AvREtaOE5oeWlhUDk1SGNTUFo2V3RlUWdvK0JYWGlCYjRxV2ZBWW0xdklMbVp6cHJ1ZHplOWM4VUJEcXp4bWc3Tk8xQk81TFllS3ZJYmFDRzh3bHJDNjJsRTBFOEVzYlpXdUFwbzUxdy9RL01FRjk0aHczTnBiNGJrNFpTN3hFOFp1MnQ3WXBhQ1J1bjRXbnJRY2NtZ2g1THk3SFlacDMyVnRaVFhrNXBWcE03ZTdpclh5YUVlbEJSNHZrczFqNFdYOW84dUdSczVaTVl4bGZhRHBYYVVQNExYT3ArS2c5QTRsaGhodU8yT1BvQkxGR0RQVHRsZjdUL3dBNG9MZEFRRUJBUUVCQVFFQkFRVkhMNEpwK0w1V0dDTjBzMGxySzJPSmdMbk9jV21nRFJxU2dnK0c5cGQybkM4ZGIzY01sdmNNNzdmREswc2UyczhoRld1QUlxRFZCRDhTZUpTWnJHTnZyRnBHWHgvN1MzTFBlZTBHcFlLYTE3VytmMG9JM2hKaTcyMDR2ZDIyUnRKYlo4bDNJZTVuamRHNXpIUXhOcnRjQWFHaENDcXNiUG1YQkx1NnQ3REhQemVDbmVaSVdSRW1WcE5CMGFIdUJwUU85a2c5ZktnWHRoekhuZDVhUlpISE93dUJ0NU85bGpsSjcxNUZXblJ3WTR1cFVEMlFCV3V1aUQwNWpHc2FHTkZHdEFEUU9nQVFWZks0WnArTVphR0dOMHMwbHBNMk9OZ0xuT2NZeUFHZ2FrbEJXK0dsbmQyZkRiRzN1NEpMZTRZWnQ4TXJYTWVLelBJcTF3QjFCUWFkQlFjK3RybTY0aGs3ZTJpZlBQSkcwTWlqYVh2Y2Q3VG8xdFNVSDF3YTJ1TGJpV01ndVlud3p4dzBraWthV1BhZHgwTFRRaEJuZVVjZDVIamVUamxYR29oY3l5c0VkL1pIcThBQWFDb3FIQm82YWdpdXFDUGRjcjhRczNidXgyTjQ3UGlwcGhza3ZwM1BZR05PaGN4ejJSYlQ2S255YW9OeGdjZGNZN0UyMW5jM1VsN2NSTi9iWFV6blBjOTdpU2RYRW1nclFlWkI1enpiaVdibDVWSmI0eUdRNHpQbUIxL0xHeHptUnVpZjdSZTRDamZ2OWVxRDFLM2dpdDRJNElXaGtVTFd4eHRIUU5hS0FmQWd3L2hoakwrMGJuRzMxcExidG51eTZNVFJ1WUhzTzdWdTRDb1FWZHJZY3c0SmYzY2VMeDdzemdMbVR2WTRZcW1SaE5COUVQZUhVb0NkcEJwVkJLTnp6L2x0NWJ3aTB1T05ZbUorKzVtN3g4Yzc2YWJRYVJQTmRhZXpUeTlpRGRaYkd3WkxGM1dPbS9kWE1Ub2llcEc0VUR2U0RxZ3gvaGZoc3ZiTnlGOW1JcElyMTVpczRoSzB0UGMyc1lZMHRCcFZwMDE3YUlLdC9EOGpKNGxTUm1DVCt3dnVHWlNTUXNkM0ptWXduYnVwdDNkNDgxRmVpRDA5QVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkJBeitXaXhHRnZNbEpTbHRFNTdRZnBQNk1iOVp4QVFlUzhRa3lISHM3aGN4ZlBMcmJrclpHWERqMk9mTDdMajJkZGp2UVNnOXBjNXJXbHppQTBDcEowQUFRZEZsZjJGOUQzMWxjeFhVSUphWllYdGtidUhVYm1raXVxQmUzOWhZdzk5ZTNNVnJDU0dpV1o3WTI3ajBHNXhBcm9nN1RKR0krOExnSTZidDlSdHAxclh5SUlFWEkrUFRUaTNoeWxwSk9TUUltVHhPZVNPbzJoMVVFdThqaGxzNTRwbmJJWHh2Yksrb0cxcGFRNDFPZ29FR2J4Mkx3bU00VGtMWERYZjIyeUVOeTRUOTVITDdSak80Ym93MXVpQ0w0UmY0WEIvR20vU1FhbSt5K0pzQzBYMTdCYUYzdWllVmtkZlJ1SVFkbG5mMk43RjMxbmNSWE1KMDd5RjdaRytUcTBrSU1IeXovQUhSNHovRFA2VDBHM2JtOE02OE5rMi90amVBN1RiQ1ZobHI1TmxkM3hJUGpQLzhBd1dSL3BadjVia0dhOEl2OExnL2pUZnBJTlZmWmJGV0cwMzE1QmFCM3U5L0l5T3ZvM0VlUkIyMjEzYTNVSW10Wm1Ud3U5MlNKd2UwOXVoYVNFSGFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJUE9mRnJKeHp5WXZqWW5aYmk5bWJOZHpQYzFqV1JCMnhwY1hhVXJ1ZDlWQno0aHk4VXlIRC9zdGhrN0owK04yU1dVVWR4RVhGc1kyRmpRSFZQc2RCNVVHcDRUblJtK05XZDY1MjZjTjdxNTh2ZXgreTRuOGIzdldnemZEUi9ZT2E1bmpidlp0YnY4QTEyUEhaUTlXajZwcDlWQTVtUDc5elhDOGJhTjFyYkg3ZGtCMUZCMGFmcWluMWtGanpUakdTejEvWlJ6M2tkdHh1Q2o3Nkx2SE1sZStwL0IyVTkwQ3J0S2xCbStSY2Q4SllNVmNDMnU0SWIxc2J6QytHNWZPL3ZHalFPWUhTRFYzWFJCZWNJeUYxZStHem4zTHpMSkZEY3doN3RTV3NEZzJwOHpkRUVIdzkvMnd2L3hieitXZ21lRnd1ajRmMHRDd1haZGNmWnpKVU1FbFR0M1VEalN2WFJCWDJQQStMV2Njay9OYiszdXN2Y1NPZExKTGR1aVpyMDJrdWhjVFRVMVFWV0pmZ01WNGo0NlBpMTRaTWZldE1kM0Mxem5zQklkUnU1M1VDZ2NOVFFvSjNpUFpYbDl6M0JXZG5NNjNubmgyQ2Rudk1hWHYzdUZPME1xZ3Q3N3dnNHEvRnVnczJTUVh6Vy9zcjB5UGM0dkhUZTBuWlR5MGFFSFJ3ek8zbVU0Qms0YjV4ZmQ0K0s0dG55T05YT2FJaVdseDdTSzdmVWcrT0E1VCsxZUdFMlIyaHh0ZnRFakdub1hBK3lENlNneStBbThPN3lGK1I1ZmtaTDNNWFRuT21pYzI2RFl4VTdRREUwVjA4aG9PZ1FTTFBOY1l3WExNZE54UytrbHgxOUlJTWpZUEV3WXdQY0d0ZTB5dGJXbTZvMUowNjBLRDJOQVFFQkFRRUJBUUVCQVFFQkFRRUJBSkFGVG9BZzhxNC9pY2Z6amx1YXkrVGlOeGk0Q0lMU1BjNWdORFJoQllXblJyYWtmaElOVi8wczRIL3dEV2YrdmNmOHhCbmVBU080N3pQTGNVbWRTQ1p4bXNhOXUwYmhTdmE2STYvaW9MVHhJZ2ZqN3ZEOHFoSHQ0eTRiSGRVNm0zbE5EOHBiOVpCMStHc1Q4bGtNMXl1Y0hka0p6RGFWNmlDTWovQUlOYjlWQlZjN2x0TDNuMWxpK1FYVDdYQU5nRWpBQ1dzZElkM3RPZDJWY051N3M4eURuUE04SjhMaWJsMWhGYTNsOUxHNXRzeU9VM1JFaGFRMXhMblNOWUFkU2dzZkRvZytHbHdBZFFMc0g0Q1VIVjRlLzdZWC80dDUvTFFkWERycTl0UENhN3ViS291b20zTG9uTkZTMGc2dUg0bzFRVm5FTVI0YVhtR1plNXk5am15a2hjKzdiZFhMb1hOZnVQdXREMkYybmJyVkJIanlIR2JqeEx3MGZINEk0YkczZjNicFkyN0JKSWQxWER0STZBVlFXL2lGbEc0cnhBd09RZXgwa2R2Q1h5dFlLdTd2YzhQSUg0TFNTZzFXUjhRK0oybU1mZlI1R0c1TzJzVnZFOE9sYzdzYnM5NXYxZ0VHZDRKakx1MjREbDcyN2FXU1pKbHhjTWFSVDJPNklEdGZ2alUraEI4OEt4c3VUOEticXdoL2ZUaTRiRURvQzhPcTBlc2hCRTRGa2VDUHhMY2RuYk93dGN0WkYwVTdyeUdGaGZSeG9TK1FlOFBkSUpyVUlMTjJaNFUva2xqaWNEZ3JISnp5UHJQZHdSUk1aQTFyaDdZZUkzYnRvMTBJN05kVUhvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDRDR1SUlyaUNTQ1VFeFRNZEhJQVMwbHJoUTBjMGdqVHRDQ0hoY0ZpY0phRzB4bHVMZTNjOHlPWUhPZlY1QUJKYzh1ZDBBN1VFOUJWM2ZHTUhkNWVETVQyMjdKVzIwUTNEWHlNSTJra1ZhMXdhN3IyaEJNeUdQczhqWlRXVjVHSnJXZHUyV01raW82OVdrRWVwQnhqY2JZNHl4aXNiR0lRMnNJSWpqQkpwVWtuVnhKT3A3VUhSbWVQNFhOUXRoeWxveTVZeXBZWFZEbTE2N1h0SWNLK1lvSU9NNEp4SEd5ZDdhWXlKc25ZK1RkTTRWMDlreWw5UFVnbDR2aldGeFZoUFlXRnYzTm5jRnpwb3U4a2NDWHREWGF2YzRpclIySVBySDhldytPeGNtTHM3ZnVyQ1VQRDRkNzNWN3dVZDdUbkYybzg2RHN4R0Z4bUlzUlk0Nkh1YlZwYzRSN25QMWNhblY1Y2ZqUVZGeDRjY0p1TGszRW1MakVoTzRoajVJMlZyWDNHT2F6NGtFdVRodkdIdnNuakh4eHV4Nys4c3pDWFJiSDFEcS9zeTNkcTBlOVZCSXZPUFllOHlkdms3bTNFbDlhTkxJSlM1NERXbXRSdEJEVDd4NmhCWHgrSHZESTczN1l6RlJDYXU0QWw1akI4MFJkM2Y1cUM5bnQ0WjdlUzNsYnVobFlZM3MxRld1RkNOS1UwUVJzUmhzYmg3SnRsam9lNHRXdUxteDduUDFjYW5WNWNmalFRc3Z3dmkrWW03L0lZK09XYys5SzB1aWU2bW50T2pMQzcxb0pPRzQ1ZzhMRzVtTXM0N1lQb0h2YlV2Y0IwRG51SmNmV1VGaWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNELy8yUT09Jztcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmJlZm9yZSggJzxzcGFuIGNsYXNzPVwic3Bpbm5lciB3cG9uaW9uLXNwaW5uZXJcIj48L3NwYW4+JyApO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4gdGhpcy5zaG93X3ByZXZpZXcoIGUgKSApO1xuXHR9XG5cblx0c2hvd19wcmV2aWV3KCkge1xuXHRcdGxldCAkdmFsdWUgPSB0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS52YWwoKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLXNwaW5uZXInICkuYWRkQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0JHdwb25pb24uYWpheCggJ29lbWJlZC1wcmV2aWV3Jywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdHZhbHVlOiAkdmFsdWUsXG5cdFx0XHR9XG5cdFx0fSwgKCByZXMgKSA9PiB7XG5cdFx0XHRpZiggZmFsc2UgPT09IHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApXG5cdFx0XHRcdFx0Lmh0bWwoICc8aW1nIGNsYXNzPVwid3Bvbmlvbi1uby1wcmV2aWV3XCIgc3JjPVwiJyArIHRoaXMuaW1hZ2UgKyAnXCIvPicgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuaHRtbCggcmVzLmRhdGEgKTtcblx0XHRcdH1cblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApXG5cdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLnJlbW92ZUNsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3QyJywge30gKTtcblx0XHR0aGlzLmVsZW1lbnQuc2VsZWN0MiggdGhpcy5oYW5kbGVfYXJncyggJGFyZyApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZmllbGRfZGVidWcoKXtcblxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgPSB0aGlzLm9wdGlvbiggJ3NlbGVjdGl6ZScsIHt9ICk7XG5cblx0XHRpZiggIWlzX3VuZGVmaW5lZCggJGFyZy50aGVtZSApICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCAkYXJnLnRoZW1lICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcyggJ3NlbGVjdGl6ZS1kZWZhdWx0JyApO1xuXHRcdH1cblxuXHRcdCRhcmcgPSAkd3Bvbmlvbi5qc19mdW5jKCAkYXJnICk7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCAnZm9ybS1jb250cm9sJyApLnNlbGVjdGl6ZSggJGFyZyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dmFyICR0aGlzICAgICA9IHRoaXMuZWxlbWVudCxcblx0XHRcdCRlbmFibGVkICA9ICR0aGlzLmZpbmQoICcud3Bvbmlvbi1lbmFibGVkJyApLFxuXHRcdFx0JGRpc2FibGVkID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWRpc2FibGVkJyApO1xuXG5cdFx0JGVuYWJsZWQuc29ydGFibGUoIHtcblx0XHRcdGNvbm5lY3RXaXRoOiAkZGlzYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdHVwZGF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0dmFyICRlbCA9IHVpLml0ZW0uZmluZCggJ2lucHV0JyApO1xuXG5cdFx0XHRcdGlmKCB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCAnd3Bvbmlvbi1lbmFibGVkJyApICkge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZGlzYWJsZWQnLCAnZW5hYmxlZCcgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZW5hYmxlZCcsICdkaXNhYmxlZCcgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHRoaXMudHJpZ2dlciggJ3dwb25pb24tc29ydGVyLXVwZGF0ZWQnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gYXZvaWQgY29uZmxpY3Rcblx0XHQkZGlzYWJsZWQuc29ydGFibGUoIHtcblx0XHRcdGNvbm5lY3RXaXRoOiAkZW5hYmxlZCxcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgY3NzX3VuaXRzIGZyb20gJ3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmZvbnRfd2VpZ2h0X3N0eWxlID0gZmFsc2U7XG5cdFx0bGV0ICRlbCAgICAgICAgICAgICAgICA9IHRoaXMuZWxlbWVudDtcblx0XHRsZXQgJHByZXZpZXcgICAgICAgICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1mb250LXByZXZpZXcnICk7XG5cdFx0bGV0ICR0aGlzICAgICAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldFxuXHRcdFx0XHQkZm9udF9maWVsZCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtZm9udF9waWNrZXInICksXG5cdFx0XHRcdCRmb250ICAgICAgICAgICAgICA9ICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi1mb250LXNlbGVjdG9yJyApLnZhbCgpLFxuXHRcdFx0XHQkZm9udF93ZWlnaHRfc3R5bGUgPSAkdGhpcy5mb250X3N0eWxlKCAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS52YWwoKSApLFxuXHRcdFx0XHQkdGFnICAgICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtdGFnIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGNvbG9yICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1maWVsZC1jb2xvcl9waWNrZXIgaW5wdXQud3AtY29sb3ItcGlja2VyJyApLnZhbCgpLFxuXHRcdFx0XHQkYWxpZ24gICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYWxpZ24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkZm9udFNpemUgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtc2l6ZSBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0JGxpbmVIZWlnaHQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxpbmUtaGVpZ2h0IGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHQkYmFja1VQRm9udCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwLWZvbnQgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkZGlyZWN0aW9uICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtZGlyZWN0aW9uIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxldHRlci1zcGFjaW5nIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHRocmVmICAgICAgICAgICAgICAgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PScgKyAkZm9udCArICc6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQsXG5cdFx0XHRcdGh0bWwgICAgICAgICAgICAgICA9ICc8bGluayBocmVmPVwiJyArIGhyZWYgKyAnXCIgY2xhc3M9XCJ3cHNmLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSArICdcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz4nO1xuXG5cdFx0XHRpZiggalF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0alF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkuYXR0ciggJ2hyZWYnLCBocmVmICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoICdoZWFkJyApLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGZvbnRTaXplID09PSAnJyB8fCAkZm9udFNpemUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGZvbnRTaXplID0gJzE4cHgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGxldHRlclNwYWNpbmcgPT09ICcnIHx8ICRsZXR0ZXJTcGFjaW5nID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nID0gJzFweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGluZUhlaWdodCA9PT0gJycgfHwgJGxpbmVIZWlnaHQgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxpbmVIZWlnaHQgPSAnMjBweCc7XG5cdFx0XHR9XG5cblxuXHRcdFx0bGV0ICRfYXR0cnMgPSAnIGZvbnQtZmFtaWx5OicgKyAkZm9udCArICc7ICcgK1xuXHRcdFx0XHQnIGZvbnQtd2VpZ2h0OicgKyAkZm9udF93ZWlnaHRfc3R5bGUud2VpZ2h0ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC1zdHlsZTonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLnN0eWxlICsgJzsgJyArXG5cdFx0XHRcdCcgdGV4dC1hbGlnbjonICsgJGFsaWduICsgJzsgJyArXG5cdFx0XHRcdCcgY29sb3I6ICcgKyAkY29sb3IgKyAnOycgK1xuXHRcdFx0XHQnIGZvbnQtc2l6ZTonICsgY3NzX3VuaXRzKCAkZm9udFNpemUgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxldHRlci1zcGFjaW5nOicgKyBjc3NfdW5pdHMoICRsZXR0ZXJTcGFjaW5nICkgKyAnOyAnICtcblx0XHRcdFx0JyBsaW5lLWhlaWdodDonICsgY3NzX3VuaXRzKCAkbGluZUhlaWdodCApICsgJzsgJztcblxuXG5cdFx0XHRsZXQgJHRleHQgPSAkcHJldmlldy50ZXh0KCk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuYXBwZW5kKCBqUXVlcnkoICc8JyArICR0YWcgKyAnPicgKyAkdGV4dCArICc8LycgKyAkdGFnICsgJyA+JyApICk7XG5cdFx0XHQkcHJldmlldy5maW5kKCAkdGFnICkuYXR0ciggXCJzdHlsZVwiLCAkX2F0dHJzICk7XG5cblx0XHR9ICk7XG5cdH1cblxuXHRmb250X3N0eWxlKCAkaW5mbyApIHtcblx0XHRsZXQgJHdlaWdodF92YWwgPSAnNDAwJyxcblx0XHRcdCRzdHlsZV92YWwgID0gJ25vcm1hbCc7XG5cblx0XHRzd2l0Y2goICRpbmZvICkge1xuXHRcdFx0Y2FzZSAnMTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICcxMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzMwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzMwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc1MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzkwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzkwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpdGFsaWMnOlxuXHRcdFx0XHQkc3R5bGVfdmFsID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4geyB3ZWlnaHQ6ICR3ZWlnaHRfdmFsLCBzdHlsZTogJHN0eWxlX3ZhbCB9O1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRhZGQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b24nICksXG5cdFx0XHQkaW5wdXQgICAgPSAkZWxlbS5maW5kKCAnaW5wdXRbdHlwZT10ZXh0XScgKSxcblx0XHRcdCRzZXR0aW5ncyA9ICR0aGlzLm9wdGlvbnMoKSwgd3BfbWVkaWFfZnJhbWU7XG5cblx0XHQkYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB3cF9tZWRpYV9mcmFtZSApIHtcblx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcblx0XHRcdFx0dGl0bGU6ICRzZXR0aW5ncy5zZXR0aW5ncy5mcmFtZV90aXRsZSxcblx0XHRcdFx0bGlicmFyeToge1xuXHRcdFx0XHRcdHR5cGU6ICRzZXR0aW5ncy5zZXR0aW5ncy51cGxvYWRfdHlwZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRidXR0b246IHtcblx0XHRcdFx0XHR0ZXh0OiAkc2V0dGluZ3Muc2V0dGluZ3MuaW5zZXJ0X3RpdGxlLFxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAnc2VsZWN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gd3BfbWVkaWFfZnJhbWUuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKTtcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5hdHRyaWJ1dGVzLnVybCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0ZXh0YXJlYSA9ICRlbGVtLmZpbmQoICd0ZXh0YXJlYScgKTtcblx0XHQkZWxlbS5maW5kKCAnI3dwb25pb24td3AtbGluay1waWNrZXIgPiBidXR0b24nICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JHRleHRhcmVhLnZhbCggJycgKTtcblx0XHRcdGlmKCAhd2luZG93LndwTGluayApIHtcblx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0dGl0bGU6ICR3cG9uaW9uLnRleHQoICd3cF9saW5rX2Vycm9yX3RpdGxlJywgJ1dQIExpbmsgSlMgTGliIE5vdCBGb3VuZCcgKSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cud3BMaW5rLm9wZW4oICR0ZXh0YXJlYS5hdHRyKCAnaWQnICkgKTtcblx0XHR9ICk7XG5cblxuXHRcdCR0ZXh0YXJlYS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRkYXRhID0galF1ZXJ5KCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ3NwYW4uZXhhbXBsZV9vdXRwdXQgc3Bhbi52YWx1ZScgKS5odG1sKCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3VybCcgKS52YWwoICRkYXRhLmF0dHIoICdocmVmJyApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkudmFsKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0YXJnZXQnICkudmFsKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi4vY29yZS9kZWJ1Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRsZXQgJGRlcCA9IHRoaXMub3B0aW9uKCAnZGVwZW5kZW5jeScgKTtcblx0XHRmb3IoIGxldCAka2V5IGluICRkZXAuY29udHJvbGxlciApIHtcblx0XHRcdGxldCAkY29udHJvbGxlciA9ICRkZXAuY29udHJvbGxlciBbICRrZXkgXSxcblx0XHRcdFx0JGNvbmRpdGlvbiAgPSAkZGVwLmNvbmRpdGlvbiBbICRrZXkgXSxcblx0XHRcdFx0JHZhbHVlICAgICAgPSAkZGVwLnZhbHVlIFsgJGtleSBdLFxuXHRcdFx0XHQkZmllbGQgICAgICA9ICdbZGF0YS1kZXBlbmQtaWQ9XCInICsgJGNvbnRyb2xsZXIgKyAnXCJdJztcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcubmVzdGFibGUgKSB7XG5cdFx0XHRcdGxldCAkSU5QVVQgPSB0aGlzLmNvbmZpZy5wYXJlbnQuZmluZCggJ1tkYXRhLWRlcGVuZC1pZD0nICsgJGNvbnRyb2xsZXIgKyAnXScgKTtcblx0XHRcdFx0aWYoICRJTlBVVC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdCRmaWVsZCA9ICdbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJHdwb25pb24uZmllbGRJRCggJElOUFVUICkgKyAnXCJdOmlucHV0Jztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5jcmVhdGVSdWxlKCAkZmllbGQsICRjb25kaXRpb24sICR2YWx1ZSApICk7XG5cdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmluY2x1ZGUoIHRoaXMuZWxlbWVudCApICk7XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCB7ICdEZXBlbmRlbmN5JzogJGRlcCwgJ05lc3RhYmxlIERlcGVuZGVuY3knOiB0aGlzLmNvbmZpZy5uZXN0YWJsZSB9ICk7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkZmlkICAgICAgICAgPSB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZmllbGQtanNpZCcgKSxcblx0XHRcdCRpc19sb2FkaW5nICA9IG51bGwsXG5cdFx0XHR3cG9pbWcgICAgICAgPSAoIGltZywgY2FsbGJhY2sgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlc3REaW1lbnNpb25zID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHRcdFx0XHRpZiggaW1nLm5hdHVyYWxXaWR0aCApIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoIHRlc3REaW1lbnNpb25zICk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgNSApO1xuXHRcdFx0fTtcblx0XHRsZXQgJHRvb2x0aXBfa2V5ID0gZmFsc2U7XG5cdFx0aWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24taGVscCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cG9uaW9uLWhlbHAnO1xuXHRcdH0gZWxzZSBpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi13cmFwLXRvb2x0aXAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3JhcF90b29sdGlwJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJGZpZCArICd0b29sdGlwJztcblx0XHR9XG5cblx0XHQvL2xldCAkdG9vbHRpcF9rZXkgPSAoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24taGVscCcgKSApID8gJ2ZpZWxkX2hlbHAnIDogJGZpZCArICd0b29sdGlwJyxcblx0XHRsZXQgJGFyZyA9ICggdHJ1ZSA9PT0gJHdwb25pb24udmFsaWRfanNvbiggJGZpZCApICkgPyBKU09OLnBhcnNlKCAkZmlkICkgOiB0aGlzLm9wdGlvbiggJHRvb2x0aXBfa2V5LCBmYWxzZSApO1xuXG5cblx0XHRpZiggZmFsc2UgPT09ICRhcmcgKSB7XG5cdFx0XHRpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5JyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHknICkgKTtcblx0XHRcdH0gZWxzZSBpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5LWFyZ3MnICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweS1hcmdzJyApICk7XG5cdFx0XHR9IGVsc2UgaWYoICR3cG9uaW9uLnZhbGlkX2pzb24oIHRoaXMuZWxlbWVudC5hdHRyKCAndGlwcHktYXJncycgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICd0aXBweS1hcmdzJyApICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoICRhcmcgKSB7XG5cdFx0XHQkYXJnLnBlcmZvcm1hbmNlID0gZmFsc2U7XG5cdFx0XHRpZiggJGFyZy5pbWFnZSAhPT0gdW5kZWZpbmVkICYmICRhcmcuaW1hZ2UgIT09IGZhbHNlICkge1xuXHRcdFx0XHQkYXJnLmh0bWwgICAgICAgICAgID0gJyN3cG90cGltZyc7XG5cdFx0XHRcdCRhcmcudXBkYXRlRHVyYXRpb24gPSAyMDAwO1xuXHRcdFx0XHQkYXJnLm9uU2hvdyAgICAgICAgID0gZnVuY3Rpb24oIGluc3RhbmNlICkge1xuXHRcdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoICcudGlwcHktY29udGVudCcgKTtcblx0XHRcdFx0XHRpZiggJGlzX2xvYWRpbmcgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRpc19sb2FkaW5nID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGZldGNoKCAkYXJnLmltYWdlICkudGhlbiggcmVzcCA9PiByZXNwLmJsb2IoKSApLnRoZW4oIGJsb2IgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgdXJsICAgICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdFx0XHRjb250ZW50LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dXJsfVwiPmA7XG5cdFx0XHRcdFx0XHR3cG9pbWcoIGNvbnRlbnQucXVlcnlTZWxlY3RvciggJ2ltZycgKSwgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UudXBkYXRlICk7XG5cdFx0XHRcdFx0XHQkaXNfbG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gKS5jYXRjaCggKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29udGVudC5pbm5lckhUTUwgPSAnTG9hZGluZyBmYWlsZWQnO1xuXHRcdFx0XHRcdFx0JGlzX2xvYWRpbmcgICAgICAgPSBmYWxzZTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcub25IaWRkZW4gICAgICAgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zdCBjb250ZW50ICAgICA9IHRoaXMucXVlcnlTZWxlY3RvciggJy50aXBweS1jb250ZW50JyApO1xuXHRcdFx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcucG9wcGVyT3B0aW9ucyAgPSB7IG1vZGlmaWVyczogeyBwcmV2ZW50T3ZlcmZsb3c6IHsgZW5hYmxlZDogZmFsc2UgfSwgaGlkZTogeyBlbmFibGVkOiBmYWxzZSB9IH0gfTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGFyZyA9IHt9O1xuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQudGlwcHkoIHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcsICR0b29sdGlwX2tleSApICk7XG5cdH1cbn1cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGltYWdlID0gKCBpc191bmRlZmluZWQoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1mdWxsc2l6ZScgKSApICkgPyB0aGlzLmVsZW1lbnQuYXR0ciggJ3NyYycgKSA6IHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1mdWxsc2l6ZScgKTtcblx0XHRzd2FsKCB7XG5cdFx0XHRpbWFnZVVybDogJGltYWdlLFxuXHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRiYWNrZHJvcDogYHJnYmEoMCwwLDAsMC40NClgXG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCwgcmFuZF9tZDUgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJG1jZV9lZGl0b3IgID0gdGlueU1DRVByZUluaXQubWNlSW5pdFsgdGhpcy5vcHRpb24oICd3cGVkaXRvcl9pZCcgKSBdLFxuXHRcdFx0XHQkcXVpY2tfdGFncyAgPSB0aW55TUNFUHJlSW5pdC5xdEluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JE5FV19JRCAgICAgID0gJ3dwb25pb24td3AtZWRpdG9yLScgKyByYW5kX21kNSgpLFxuXHRcdFx0XHQkdGV4dEFyZWEgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLmNsb25lKCksXG5cdFx0XHRcdCRhY3R1YWxfSUQgICA9ICR0ZXh0QXJlYS5hdHRyKCAnaWQnICksXG5cdFx0XHRcdCRhY3R1YWxfaHRtbCA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCgpLFxuXHRcdFx0XHQkcmVnZXggICAgICAgPSBuZXcgUmVnRXhwKCAkYWN0dWFsX0lELCBcImdcIiApO1xuXHRcdFx0JGFjdHVhbF9odG1sICAgICA9ICRhY3R1YWxfaHRtbC5yZXBsYWNlKCAkcmVnZXgsICRORVdfSUQgKTtcblxuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKS5odG1sKCAkYWN0dWFsX2h0bWwgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkucGFyZW50KCkuYXBwZW5kKCAkdGV4dEFyZWEgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWE6bm90KCMnICsgJGFjdHVhbF9JRCArICcpJyApLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5hdHRyKCAnaWQnLCAkTkVXX0lEICk7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkbWNlX2VkaXRvciApICkge1xuXHRcdFx0XHQkbWNlX2VkaXRvci5zZWxlY3RvciA9ICcjJyArICRORVdfSUQ7XG5cdFx0XHRcdHRpbnltY2UuaW5pdCggJG1jZV9lZGl0b3IgKTtcblx0XHRcdFx0dGlueU1DRS5leGVjQ29tbWFuZCggJ21jZUFkZEVkaXRvcicsIGZhbHNlLCAnIycgKyAkTkVXX0lEICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkcXVpY2tfdGFncyApICkge1xuXHRcdFx0XHQkcXVpY2tfdGFncy5pZCA9ICRORVdfSUQ7XG5cdFx0XHRcdHF1aWNrdGFncyggJHF1aWNrX3RhZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuLi9jb3JlL21vZHVsZSc7XG5cbmNsYXNzIFdQT25pb25fTWV0YWJveF9Nb2R1bGUgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdG1vZHVsZV9pbml0KCkge1xuXHRcdHRoaXMubWVudSgpO1xuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJ2gyLmFqYXgtY29udGFpbmVyIGJ1dHRvbicsIHRoaXMuc2F2ZV9oYW5kbGVyICk7XG5cdH1cblxuXG5cdG1lbnUoKSB7XG5cdFx0bGV0ICRlbGVtID0gdGhpcy5lbGVtZW50O1xuXHRcdCRlbGVtLm9uKCAnY2xpY2snLCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGxpIGEnLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2Ryb3Bkb3duJyApICkge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLmlzKCAnOnZpc2libGUnICkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLnNsaWRlVG9nZ2xlKCAnZmFzdCcgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGxpIHVsJyApLnNsaWRlVXAoICdmYXN0JyApO1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkaHJlZiAgICAgICAgICAgPSAkd3Bvbmlvbl9oZWxwZXIudXJsX3BhcmFtcyggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaHJlZicgKSApLFxuXHRcdFx0XHRcdCRwYXJlbnQgICAgICAgICA9ICd3cG9uaW9uLXRhYi0nICsgJGhyZWZbICdwYXJlbnQtaWQnIF0sXG5cdFx0XHRcdFx0JHNlY3Rpb24gICAgICAgID0gKCAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gIT09IHVuZGVmaW5lZCApID8gJHBhcmVudCArICctJyArICRocmVmWyAnc2VjdGlvbi1pZCcgXSA6IGZhbHNlLFxuXHRcdFx0XHRcdCRwYXJlbnRfYWN0aXZlcyA9ICRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1wYXJlbnQtd3JhcHMnICksXG5cdFx0XHRcdFx0JGN1cnJlbnQgICAgICAgID0gJGVsZW0uZmluZCggJ2RpdiMnICsgJHBhcmVudCApO1xuXG5cdFx0XHRcdCRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1zZWN0aW9uLXdyYXBzJyApLmhpZGUoKTtcblx0XHRcdFx0JHBhcmVudF9hY3RpdmVzLmhpZGUoKTtcblxuXHRcdFx0XHRpZiggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgJiYgJGhyZWZbICdwYXJlbnQtaWQnIF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHQkY3VycmVudC5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJyBkaXYjJyArICRzZWN0aW9uICkuc2hvdygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JGN1cnJlbnQuc2hvdygpO1xuXG5cdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgYS5hY3RpdmUgJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlICcgKTtcblx0XHRcdFx0JCggdGhpcyApLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51ID4gbGkgPiBhJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGFbZGF0YS13cG9uaW9uLWlkPVwid3Bvbmlvbl9tZW51XycgKyAkaHJlZlsgJ3BhcmVudC1pZCcgXSArICdcIl0nIClcblx0XHRcdFx0XHQgLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cblx0c2F2ZV9oYW5kbGVyKCBlICkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHRoaXMgICA9IHRoaXMsXG5cdFx0XHQkcGFyZW50ID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHQkYmFzZSAgID0gJHBhcmVudC5wYXJlbnQoKS5wYXJlbnQoKSxcblx0XHRcdCRoaWRkZW4gPSAkcGFyZW50LmZpbmQoICdkaXYud3Bvbmlvbi1tZXRhYm94LXNlY3VyZS1kYXRhJyApO1xuXG5cdFx0JGJhc2UuYmxvY2soIHsgbWVzc2FnZTogbnVsbCwgb3ZlcmxheUNTUzogeyBiYWNrZ3JvdW5kOiAnIzAwMCcsIG9wYWNpdHk6IDAuNyB9IH0gKTtcblxuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnaWQnICkgKTtcblx0XHR9ICk7XG5cdFx0bGV0ICRmaWVsZHMgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoICc6aW5wdXQnICk7XG5cdFx0bGV0ICR2YWx1ZXMgPSAkZmllbGRzLnNlcmlhbGl6ZSgpO1xuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLnJlbW92ZUF0dHIoICduYW1lJyApO1xuXG5cdFx0JHdwb25pb24uYWpheCggJ3NhdmVfbWV0YWJveCcsIHsgZGF0YTogJHZhbHVlcyB9LCBmdW5jdGlvbiggcmVzICkge1xuXHRcdFx0JGJhc2UuaHRtbCggcmVzICk7XG5cdFx0XHQkYmFzZS51bmJsb2NrKCk7XG5cdFx0XHR3cG9uaW9uX2ZpZWxkKCAkYmFzZS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIHdwICkgPT4ge1xuXHQkKCBmdW5jdGlvbigpIHtcblx0XHQkKCAnZGl2LnBvc3Rib3gud3Bvbmlvbi1tZXRhYm94JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fTWV0YWJveF9Nb2R1bGUoICQoIHRoaXMgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLnBvc3RfaWQgPSB0aGlzLmNvbnR4dDtcblx0XHRsZXQgJGlkICAgICAgPSAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKSArICdfJyArIHRoaXMucG9zdF9pZDtcblx0XHR0aGlzLnZhbHVlcyAgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRpZCwgZmFsc2UgKTtcblx0XHRjb25zb2xlLmxvZyggdGhpcy52YWx1ZXMgKTtcblx0XHR3cG9uaW9uX2ZpZWxkKCB0aGlzLmVsZW1lbnQgKS5yZWxvYWQoKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3dpbmRvd19hcmcgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdG9yIGZyb20gJy4vY29yZS92YWxpZGF0aW9uJztcbmltcG9ydCBXUE9uaW9uX1F1aWNrX0VkaXQgZnJvbSAnLi9tb2R1bGVzL3F1aWNrLWVkaXQnO1xuXG53aW5kb3cud3Bvbmlvbl9tZXRhYm94X21vZHVsZSA9IHJlcXVpcmUoICcuL21vZHVsZXMvbWV0YWJveCcgKS5kZWZhdWx0O1xuLy93aW5kb3cud3Bvbmlvbl9jdXN0b21pemVyX21vZHVsZSA9IHJlcXVpcmUoICcuL21vZHVsZXMvY3VzdG9taXplcicgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2NvcmUnICkuZGVmYXVsdDtcbndpbmRvdy4kd3Bvbmlvbl9kZWJ1ZyAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9kZWJ1ZycgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uX2hlbHBlciAgICAgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKTtcbndpbmRvdy53cG9uaW9uX25ld19maWVsZCAgICAgID0gKCAkY2xhc3MgKSA9PiAoIGlzX3dpbmRvd19hcmcoICRjbGFzcyApICkgPyB3aW5kb3dbICRjbGFzcyBdIDogZmFsc2U7XG53aW5kb3cud3Bvbmlvbl9maWVsZCAgICAgICAgICA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyBXUE9uaW9uX0ZpZWxkKCAkZWxlbSwgJGNvbnR4dCApO1xud2luZG93Lndwb25pb25fbW9kYWwgICAgICAgICAgPSByZXF1aXJlKCAnLi4vdmVuZG9ycy9iYWNrYm9uZS1tb2RhbCcgKS5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9ICggKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgJCwgJHdwbyApID0+IHtcblx0bGV0ICR3cF9ob29rID0gd3AuaG9va3M7XG5cblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCAoKSA9PiB7XG5cdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9pbml0JyApO1xuXG5cdFx0d2luZG93Lndwb25pb25fZmllbGRzID0gJHdwX2hvb2suYXBwbHlGaWx0ZXJzKCAnd3Bvbmlvbl9maWVsZHNfZnVuY3Rpb25zJywge1xuXHRcdFx0dGV4dDogcmVxdWlyZSggJy4vZmllbGRzL3RleHQnICkuZGVmYXVsdCxcblx0XHRcdHRleHRhcmVhOiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dGFyZWEnICkuZGVmYXVsdCxcblx0XHRcdGJhY2tncm91bmQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrZ3JvdW5kJyApLmRlZmF1bHQsXG5cdFx0XHRpbWFnZV9zZWxlY3Q6IHJlcXVpcmUoICcuL2ZpZWxkcy9pbWFnZV9zZWxlY3QnICkuZGVmYXVsdCxcblx0XHRcdHN3aXRjaGVyOiByZXF1aXJlKCAnLi9maWVsZHMvc3dpdGNoZXInICkuZGVmYXVsdCxcblx0XHRcdGNvbG9yX3BhbGV0dGU6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9wYWxldHRlJyApLmRlZmF1bHQsXG5cdFx0XHRzZWxlY3Q6IHJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QnICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdDI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QyJyApLmRlZmF1bHQsXG5cdFx0XHRjaG9zZW46IHJlcXVpcmUoICcuL2ZpZWxkcy9jaG9zZW4nICkuZGVmYXVsdCxcblx0XHRcdHNlbGVjdGl6ZTogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdGl6ZScgKS5kZWZhdWx0LFxuXHRcdFx0aWNvbl9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9pY29uX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0Zm9udF9zZWxlY3RvcjogcmVxdWlyZSggJy4vZmllbGRzL2ZvbnRfc2VsZWN0b3InICkuZGVmYXVsdCxcblx0XHRcdGFjY29yZGlvbjogcmVxdWlyZSggJy4vZmllbGRzL2FjY29yZGlvbicgKS5kZWZhdWx0LFxuXHRcdFx0Z3JvdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9ncm91cCcgKS5kZWZhdWx0LFxuXHRcdFx0d3BfZWRpdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvd3BfZWRpdG9yJyApLmRlZmF1bHQsXG5cdFx0XHRyZWxvYWRfd3BfZWRpdG9yOiByZXF1aXJlKCAnLi9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3InICkuZGVmYXVsdCxcblx0XHRcdGZpZWxkc2V0OiByZXF1aXJlKCAnLi9maWVsZHMvZmllbGRzZXQnICkuZGVmYXVsdCxcblx0XHRcdGlucHV0bWFzazogcmVxdWlyZSggJy4vZmllbGRzL2lucHV0bWFzaycgKS5kZWZhdWx0LFxuXHRcdFx0d3BfbGlua3M6IHJlcXVpcmUoICcuL2ZpZWxkcy93cF9saW5rcycgKS5kZWZhdWx0LFxuXHRcdFx0Y2hlY2tib3hfcmFkaW86IHJlcXVpcmUoICcuL2ZpZWxkcy9jaGVja2JveF9yYWRpbycgKS5kZWZhdWx0LFxuXHRcdFx0a2V5dmFsdWVfcGFpcjogcmVxdWlyZSggJy4vZmllbGRzL2tleXZhbHVlX3BhaXInICkuZGVmYXVsdCxcblx0XHRcdGNvbG9yX3BpY2tlcjogcmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0ZGF0ZV9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9kYXRlX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRcdFx0Z2FsbGVyeTogcmVxdWlyZSggJy4vZmllbGRzL2dhbGxlcnknICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3BvcHVwOiByZXF1aXJlKCAnLi9oZWxwZXJzL2ltYWdlX3BvcHVwJyApLmRlZmF1bHQsXG5cdFx0XHR1cGxvYWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy91cGxvYWQnICkuZGVmYXVsdCxcblx0XHRcdGltYWdlX3VwbG9hZDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3VwbG9hZCcgKS5kZWZhdWx0LFxuXHRcdFx0anF1ZXJ5X3RhYjogcmVxdWlyZSggJy4vZmllbGRzL2pxdWVyeV90YWInICkuZGVmYXVsdCxcblx0XHRcdGZpZWxkX3Rvb2x0aXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvZmllbGRfdG9vbHRpcCcgKS5kZWZhdWx0LFxuXHRcdFx0Y2xvbmVfZWxlbWVudDogcmVxdWlyZSggJy4vZmllbGRzL2Nsb25lX2VsZW1lbnQnICkuZGVmYXVsdCxcblx0XHRcdHNvcnRlcjogcmVxdWlyZSggJy4vZmllbGRzL3NvcnRlcicgKS5kZWZhdWx0LFxuXHRcdFx0Z29vZ2xlX21hcHM6IHJlcXVpcmUoICcuL2ZpZWxkcy9nb29nbGVfbWFwcycgKS5kZWZhdWx0LFxuXHRcdFx0dHlwb2dyYXBoeTogcmVxdWlyZSggJy4vZmllbGRzL3R5cG9ncmFwaHknICkuZGVmYXVsdCxcblx0XHRcdG9lbWJlZDogcmVxdWlyZSggJy4vZmllbGRzL29lbWJlZCcgKS5kZWZhdWx0LFxuXHRcdH0gKTtcblx0XHQkd3BvLnNldHRpbmdzX2FyZ3MgICAgPSAkd3BvLndpbmRvd0FyZ3MoICd3cG9uaW9uX2NvcmUnLCB7fSApO1xuXHRcdCR3cG8udGV4dCAgICAgICAgICAgICA9ICR3cG8ud2luZG93QXJncyggJ3dwb25pb25faWw4bicsIHt9ICk7XG5cdFx0JHdwby5kZWJ1Z19pbmZvICAgICAgID0gbnVsbDtcblx0XHQkd3BvLmZpZWxkX2RlYnVnX2luZm8gPSBudWxsO1xuXG5cdFx0aWYoICQoICcjd3BvdHBpbWcnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0JCggJ2JvZHknICkuYXBwZW5kKCAnPGRpdiBpZD1cIndwb3RwaW1nXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO21pbi13aWR0aDozMDBweDttaW4taGVpZ2h0OjQwMHB4O1wiPi4uPC9kaXY+JyApO1xuXHRcdH1cblxuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlID4gc3Ryb25nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcblx0XHRcdGpRdWVyeSggdGhpcyApXG5cdFx0XHRcdC50b2dnbGVDbGFzcyggJ2Rhc2hpY29ucy1hcnJvdy1kb3duJyApXG5cdFx0XHRcdC50b2dnbGVDbGFzcyggJ2Rhc2hpY29ucy1hcnJvdy1yaWdodCcgKTtcblx0XHR9ICk7XG5cblx0XHRsZXQgJHdwb2ZfZGl2ID0gJCggJy53cG9uaW9uLWZyYW1ld29yazpub3QoLndwb25pb24tbW9kdWxlLXF1aWNrX2VkaXQtZnJhbWV3b3JrKScgKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXJzIEhvb2sgV2l0aCBXaWRnZXRzLlxuXHRcdCAqL1xuXHRcdCQoIGRvY3VtZW50ICkub24oICd3aWRnZXQtYWRkZWQgd2lkZ2V0LXVwZGF0ZWQnLCBmdW5jdGlvbiggZXZlbnQsICR3aWRnZXQgKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkd2lkZ2V0ICk7XG5cdFx0XHR3cG9uaW9uX2ZpZWxkKCAkd2lkZ2V0ICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl90aGVtZV9pbml0JywgJCggdGhpcyApICk7XG5cdFx0XHR9ICk7XG5cdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJlbmRlcnMgVmFsaWRhdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0bmV3IFdQT25pb25fVmFsaWRhdG9yKCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogSGFuZGxlcyBGaWVsZHMgaW5pdC5cblx0XHRcdCAqL1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkKCB0aGlzICkgKTtcblx0XHRcdFx0d3Bvbmlvbl9maWVsZCggJCggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHR9ICk7XG5cdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnI3RoZS1saXN0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRqUXVlcnkoICcjdGhlLWxpc3QnICkub24oICdjbGljaycsICcuZWRpdGlubGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgcG9zdF9pZCA9IGpRdWVyeSggdGhpcyApLmNsb3Nlc3QoICd0cicgKS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdHBvc3RfaWQgICAgID0gcG9zdF9pZC5yZXBsYWNlKCAncG9zdC0nLCAnJyApO1xuXHRcdFx0XHQkKCAndHIjZWRpdC0nICsgcG9zdF9pZCApLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bmV3IFdQT25pb25fUXVpY2tfRWRpdCggalF1ZXJ5KCB0aGlzICksIHBvc3RfaWQgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdCR3cG8ubG9hZGluZ19zY3JlZW4oICR3cG9mX2RpdiwgZmFsc2UgKTtcblx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25faW5pdCcgKTtcblx0fSApICk7XG5cblx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2xvYWRlZCcgKTtcblxufSApKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgalF1ZXJ5LCAkd3BvbmlvbiApO1xuXG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vanMvY29yZS9jb3JlJztcblxuY29uc3QgV1BPbmlvbl9XUF9Nb2RhbCA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKCB7XG5cdHRlbXBsYXRlczoge30sXG5cblx0ZXZlbnRzOiB7XG5cdFx0XCJjbGljayAubWVkaWEtbW9kYWwtY2xvc2VcIjogXCJjbG9zZU1vZGFsXCIsXG5cdFx0XCJjbGljayAjYnRuLWNhbmNlbFwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tb2tcIjogXCJzYXZlTW9kYWxcIixcblx0XHRcImNsaWNrIC5tZWRpYS1tZW51IGFcIjogXCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrXCIsXG5cdFx0XCJjbGljayAubWVkaWEtcm91dGVyIGFcIjogXCJoYW5kbGVfdGFiX2NsaWNrXCIsXG5cdH0sXG5cblx0YWN0aXZlX3BhZ2U6IG51bGwsXG5cblx0YWN0aXZlX3NlY3Rpb246IG51bGwsXG5cblx0aW5pdGlhbGl6ZTogKCBvcHRpb25zICkgPT4ge1xuXHRcdG9wdGlvbnMgPSBfLmV4dGVuZCgge1xuXHRcdFx0bGVmdF9tZW51OiBmYWxzZSxcblx0XHRcdGhpZGVfbWVudTogZmFsc2UsXG5cdFx0XHRodG1sOiBmYWxzZSxcblx0XHR9LCBvcHRpb25zICk7XG5cblx0XHR0aGlzLmxlZnRfbWVudSA9IG9wdGlvbnNbICdsZWZ0X21lbnUnIF07XG5cdFx0dGhpcy5odG1sICAgICAgPSBvcHRpb25zWyAnaHRtbCcgXTtcblx0XHR0aGlzLmhpZGVfbWVudSA9IG9wdGlvbnNbICdoaWRlX21lbnUnIF07XG5cblx0XHRfLmJpbmRBbGwoIHRoaXMsICdyZW5kZXInLCAncHJlc2VydmVGb2N1cycsICdjbG9zZU1vZGFsJywgJ3NhdmVNb2RhbCcsICdkb05vdGhpbmcnICk7XG5cdFx0dGhpcy5pbml0X3RlbXBsYXRlcygpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH0sXG5cblx0aW5pdF90ZW1wbGF0ZXM6ICgpID0+IHtcblx0XHRsZXQgJG0gICAgICAgICAgICAgICAgICAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnbW9kYWwnICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ2ZyYW1lLW1lbnUtaXRlbScgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0gPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdyb3V0ZXItbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMud2luZG93ICAgICAgICAgICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ2h0bWwnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5wYWdlX2NvbnRlbnQgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAncGFnZV9jb250ZW50JyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50ICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3NlY3Rpb25fY29udGVudCcgXSApO1xuXHR9LFxuXG5cdHJlbmRlcjogKCkgPT4ge1xuXHRcdCd1c2Ugc3RyaWN0Jztcblx0XHR0aGlzLiRlbC5hdHRyKCAndGFiaW5kZXgnLCAnMCcgKS5hcHBlbmQoIHRoaXMudGVtcGxhdGVzLndpbmRvdygpICk7XG5cblx0XHRpZiggdGhpcy5sZWZ0X21lbnUgKSB7XG5cdFx0XHRfLmVhY2goIHRoaXMubGVmdF9tZW51LCAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRcdHRoaXMuJCggJy5tZWRpYS1tZW51JyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtKCB7XG5cdFx0XHRcdFx0dXJsOiBrZXksXG5cdFx0XHRcdFx0bmFtZTogdmFsdWUsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuaHRtbCApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5odG1sLCAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCAkY29udGVudCA9ICQoIHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCgge1xuXHRcdFx0XHRcdGlkOiBrZXksXG5cdFx0XHRcdFx0dGl0bGU6IHZhbHVlWyAndGl0bGUnIF0sXG5cdFx0XHRcdFx0aHRtbDogdmFsdWVbICdodG1sJyBdLFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2VjdGlvbnMnIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRfLmVhY2goIHZhbHVlWyAnc2VjdGlvbnMnIF0sICggdmFsLCBrICkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICRfY29udGVudCA9IGpRdWVyeSggdGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50KCB7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGtleSArIFwiX1wiICsgayxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogdmFsWyAndGl0bGUnIF0sXG5cdFx0XHRcdFx0XHRcdFx0aHRtbDogdmFsWyAnaHRtbCcgXSxcblx0XHRcdFx0XHRcdFx0fSApICksXG5cdFx0XHRcdFx0XHRcdCRfbWVudSAgICA9IHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0oIHsgdXJsOiBrLCBuYW1lOiB2YWxbICd0aXRsZScgXSB9ICk7XG5cblx0XHRcdFx0XHRcdCRfY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWxbICdzaWRlYmFyJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbFsgJ3NpZGViYXInIF0gKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1jb250ZW50JyApLmFwcGVuZCggJF9jb250ZW50ICk7XG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXJvdXRlcicgKS5hcHBlbmQoICRfbWVudSApO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicgKS5hcHBlbmQoICRjb250ZW50ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmhpZGUoKTtcblx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0XHRcdGlmKCB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuYXBwZW5kKCB2YWx1ZVsgJ3NpZGViYXInIF0gKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtZnJhbWUtcm91dGVyJyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdFx0XHRcdCR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicgKS5hcHBlbmQoICRjb250ZW50ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUgYTpmaXJzdC1jaGlsZCcgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAud3Bvbmlvbi1tb2RhbC1jb250ZW50Om5vdCguaGlkZGVuKSAubWVkaWEtZnJhbWUtcm91dGVyIGE6Zmlyc3QtY2hpbGQnIClcblx0XHRcdC50cmlnZ2VyKCAnY2xpY2snICk7XG5cblx0XHRpZiggdGhpcy5oaWRlX21lbnUgPT09IHRydWUgKSB7XG5cdFx0XHR0aGlzLiQoICcubWVkaWEtZnJhbWUnICkuYWRkQ2xhc3MoICdoaWRlLW1lbnUnICk7XG5cdFx0fVxuXG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9uKCBcImZvY3VzaW5cIiwgdGhpcy5wcmVzZXJ2ZUZvY3VzICk7XG5cdFx0alF1ZXJ5KCAnYm9keScgKS5jc3MoIHsgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiIH0gKS5hcHBlbmQoIHRoaXMuJGVsICk7XG5cdFx0dGhpcy4kZWwuZm9jdXMoKTtcblx0fSxcblxuXHRoYW5kbGVfbGVmdF9tZW51X2NsaWNrOiAoIGUgKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCAkdGFyZ2V0ID0gJCggZS50YXJnZXQgKTtcblx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtbWVudSBhLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdGxldCAkc2hvd190YXJnZXQgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IGRpdiMnICsgJHRhcmdldC5hdHRyKCAnaHJlZicgKSApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2JyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdCRzaG93X3RhcmdldC5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKTtcblxuXHRcdGlmKCAkc2hvd190YXJnZXQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuaGFzQ2xhc3MoICdoaWRkZW4nICkgKSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkuYWRkQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lJyApLnJlbW92ZUNsYXNzKCAnaGlkZS1yb3V0ZXInICk7XG5cdFx0fVxuXHRcdHRoaXMuYWN0aXZlX3BhZ2UgICAgPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSBudWxsO1xuXHR9LFxuXG5cdGhhbmRsZV90YWJfY2xpY2s6ICggZSApID0+IHtcblx0XHRsZXQgJHRhcmdldCAgICAgICAgID0gJCggZS50YXJnZXQgKTtcblx0XHR0aGlzLmFjdGl2ZV9zZWN0aW9uID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJHBhZ2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lLW1lbnUgYS5hY3RpdmUnICkuYXR0ciggJ2hyZWYnICk7XG5cdFx0bGV0ICRiYXNlICAgICAgICAgICA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gIycgKyB0aGlzLmFjdGl2ZV9wYWdlICk7XG5cblxuXHRcdCR0YXJnZXQucGFyZW50KCkuZmluZCggJy5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JHRhcmdldC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkYmFzZS5maW5kKCAnLndwb25pb24tc2VjdGlvbi1tb2RhbC1jb250ZW50JyApLmhpZGUoKTtcblx0XHQkYmFzZS5maW5kKCAnIycgKyB0aGlzLmFjdGl2ZV9wYWdlICsgJ18nICsgdGhpcy5hY3RpdmVfc2VjdGlvbiApLnNob3coKTtcblx0fSxcblxuXHRwcmVzZXJ2ZUZvY3VzOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0aWYoIHRoaXMuJGVsWyAwIF0gIT09IGUudGFyZ2V0ICYmICF0aGlzLiRlbC5oYXMoIGUudGFyZ2V0ICkubGVuZ3RoICkge1xuXHRcdFx0dGhpcy4kZWwuZm9jdXMoKTtcblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnVuZGVsZWdhdGVFdmVudHMoKTtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub2ZmKCBcImZvY3VzaW5cIiApO1xuXHRcdGpRdWVyeSggXCJib2R5XCIgKS5jc3MoIHsgXCJvdmVyZmxvd1wiOiBcImF1dG9cIiB9ICk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fSxcblxuXHRzYXZlTW9kYWw6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHR0aGlzLmNsb3NlTW9kYWwoIGUgKTtcblx0fSxcblxuXHRkb05vdGhpbmc6IGZ1bmN0aW9uKCBlICkge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkb3B0aW9ucyA9IHt9ICkge1xuXHRcdHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRpZDogZmFsc2UsXG5cdFx0XHRkYXRhOiBmYWxzZSxcblx0XHRcdGNsYXNzTmFtZTogJ3dwb25pb24tbW9kYWwnLFxuXHRcdFx0bW9kYWw6IHt9LFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHR9LCAkb3B0aW9ucyApO1xuXG5cdFx0bmV3IFdQT25pb25fV1BfTW9kYWwoIF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IHRoaXMuZ2V0X2xlZnRfbWVudSgpLFxuXHRcdFx0aHRtbDogdGhpcy5vcHRpb25zWyAnZGF0YScgXSxcblx0XHRcdGhpZGVfbWVudTogdGhpcy5vcHRpb25zWyAnaGlkZV9tZW51JyBdLFxuXHRcdH0sIHRoaXMub3B0aW9uc1sgJ21vZGFsJyBdICkgKTtcblx0fVxuXG5cdGdldF9sZWZ0X21lbnUoKSB7XG5cdFx0bGV0ICRyZXR1cm4gPSBmYWxzZTtcblx0XHRpZiggdGhpcy5vcHRpb25zWyAnZGF0YScgXSApIHtcblx0XHRcdCRyZXR1cm4gPSB7fTtcblxuXHRcdFx0Xy5lYWNoKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLCAoICRkYXRhLCAka2V5ICkgPT4ge1xuXHRcdFx0XHQkcmV0dXJuWyAka2V5IF0gPSAoIHR5cGVvZiAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gIT09ICd1bmRlZmluZWQnICkgPyAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gOiAkZGF0YVsgJ3RpdGxlJyBdO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRyZXR1cm4gJHJldHVybjtcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=