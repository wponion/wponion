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

/***/ "./node_modules/locutus/php/funchand/create_function.js":
/*!**************************************************************!*\
  !*** ./node_modules/locutus/php/funchand/create_function.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function create_function(args, code) {
  // eslint-disable-line camelcase
  //       discuss at: http://locutus.io/php/create_function/
  //      original by: Johnny Mast (http://www.phpvrouwen.nl)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //        example 1: var $f = create_function('a, b', 'return (a + b)')
  //        example 1: $f(1, 2)
  //        returns 1: 3

  try {
    return Function.apply(null, args.split(',').concat(code));
  } catch (e) {
    return false;
  }
};
//# sourceMappingURL=create_function.js.map

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

/***/ "./node_modules/locutus/php/var/gettype.js":
/*!*************************************************!*\
  !*** ./node_modules/locutus/php/var/gettype.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function gettype(mixedVar) {
  //  discuss at: http://locutus.io/php/gettype/
  // original by: Paulo Freitas
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Douglas Crockford (http://javascript.crockford.com)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //    input by: KELAN
  //      note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
  //      note 1: it different from the PHP implementation. We can't fix this unfortunately.
  //   example 1: gettype(1)
  //   returns 1: 'integer'
  //   example 2: gettype(undefined)
  //   returns 2: 'undefined'
  //   example 3: gettype({0: 'Kevin van Zonneveld'})
  //   returns 3: 'object'
  //   example 4: gettype('foo')
  //   returns 4: 'string'
  //   example 5: gettype({0: function () {return false;}})
  //   returns 5: 'object'
  //   example 6: gettype({0: 'test', length: 1, splice: function () {}})
  //   returns 6: 'object'
  //   example 7: gettype(['test'])
  //   returns 7: 'array'

  var isFloat = __webpack_require__(/*! ../var/is_float */ "./node_modules/locutus/php/var/is_float.js");

  var s = typeof mixedVar === 'undefined' ? 'undefined' : _typeof(mixedVar);
  var name;
  var _getFuncName = function _getFuncName(fn) {
    var name = /\W*function\s+([\w$]+)\s*\(/.exec(fn);
    if (!name) {
      return '(Anonymous)';
    }
    return name[1];
  };

  if (s === 'object') {
    if (mixedVar !== null) {
      // From: http://javascript.crockford.com/remedial.html
      // @todo: Break up this lengthy if statement
      if (typeof mixedVar.length === 'number' && !mixedVar.propertyIsEnumerable('length') && typeof mixedVar.splice === 'function') {
        s = 'array';
      } else if (mixedVar.constructor && _getFuncName(mixedVar.constructor)) {
        name = _getFuncName(mixedVar.constructor);
        if (name === 'Date') {
          // not in PHP
          s = 'date';
        } else if (name === 'RegExp') {
          // not in PHP
          s = 'regexp';
        } else if (name === 'LOCUTUS_Resource') {
          // Check against our own resource constructor
          s = 'resource';
        }
      }
    } else {
      s = 'null';
    }
  } else if (s === 'number') {
    s = isFloat(mixedVar) ? 'double' : 'integer';
  }

  return s;
};
//# sourceMappingURL=gettype.js.map

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

/***/ "./src/js/core/ajaxer.js":
/*!*******************************!*\
  !*** ./src/js/core/ajaxer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WPOnion_Ajaxer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _array_merge = __webpack_require__(/*! locutus/php/array/array_merge */ "./node_modules/locutus/php/array/array_merge.js");

var _array_merge2 = _interopRequireDefault(_array_merge);

var _to_jquery = __webpack_require__(/*! vsp-js-helper/parts/to_jquery */ "./node_modules/vsp-js-helper/parts/to_jquery.js");

var _to_jquery2 = _interopRequireDefault(_to_jquery);

var _is_undefined = __webpack_require__(/*! vsp-js-helper/parts/is_undefined */ "./node_modules/vsp-js-helper/parts/is_undefined.js");

var _is_undefined2 = _interopRequireDefault(_is_undefined);

var _is_object_like = __webpack_require__(/*! vsp-js-helper/parts/is_object_like */ "./node_modules/vsp-js-helper/parts/is_object_like.js");

var _is_object_like2 = _interopRequireDefault(_is_object_like);

var _is_string = __webpack_require__(/*! locutus/php/var/is_string */ "./node_modules/locutus/php/var/is_string.js");

var _is_string2 = _interopRequireDefault(_is_string);

var _call_user_func = __webpack_require__(/*! locutus/php/funchand/call_user_func */ "./node_modules/locutus/php/funchand/call_user_func.js");

var _call_user_func2 = _interopRequireDefault(_call_user_func);

var _function_exists = __webpack_require__(/*! locutus/php/funchand/function_exists */ "./node_modules/locutus/php/funchand/function_exists.js");

var _function_exists2 = _interopRequireDefault(_function_exists);

var _create_function2 = __webpack_require__(/*! locutus/php/funchand/create_function */ "./node_modules/locutus/php/funchand/create_function.js");

var _create_function3 = _interopRequireDefault(_create_function2);

var _gettype = __webpack_require__(/*! locutus/php/var/gettype */ "./node_modules/locutus/php/var/gettype.js");

var _gettype2 = _interopRequireDefault(_gettype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * WPOnion Custom Ajax Handler.
 */
var WPOnion_Ajaxer = exports.WPOnion_Ajaxer = function () {
	/**
  * @param $ajax_args
  * @param $ajax_config
  */
	function WPOnion_Ajaxer($ajax_args, $ajax_config) {
		_classCallCheck(this, WPOnion_Ajaxer);

		this.defaults = {
			method: 'GET',
			data: {},
			url: typeof window.ajaxurl !== 'undefined' ? window.ajaxurl : false
		};
		this.default_configs = {
			response_element: false,
			button: false,
			element: false,
			spinner: '<span class="spinner"></span>'
		};
		this.instance = null;
		this.ajax_args = (0, _array_merge2.default)(this.defaults, $ajax_args);
		this.ajax_config = (0, _array_merge2.default)(this.default_configs, $ajax_config);
		this.ajax();
	}

	_createClass(WPOnion_Ajaxer, [{
		key: 'create_function',
		value: function create_function() {
			var $code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
			var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			return this.single_callback((0, _create_function3.default)($args, $code));
		}
	}, {
		key: 'single_callback',
		value: function single_callback($callback) {
			if ('function' === (0, _gettype2.default)($callback)) {
				(0, _call_user_func2.default)($callback);
			} else if ((0, _is_string2.default)($callback) && false !== (0, _function_exists2.default)($callback)) {
				(0, _call_user_func2.default)($callback);
			} else if ((0, _is_string2.default)($callback)) {
				this.create_function($callback);
			} else if ((0, _is_object_like2.default)($callback)) {
				for (var $key in $callback) {
					this.single_callback($callback[$key]);
				}
			}
		}
	}, {
		key: 'handle_callbacks',
		value: function handle_callbacks(data) {
			if ((0, _is_object_like2.default)(data)) {
				if (false === (0, _is_undefined2.default)(data.callback)) {
					var $callbacks = data.callback;

					if (false !== (0, _is_string2.default)($callbacks)) {
						this.single_callback($callbacks);
					} else if (false !== (0, _is_object_like2.default)($callbacks)) {
						for (var $key in $callbacks) {
							this.single_callback($callbacks[$key]);
						}
					}
					delete data.callback;
				}
			}
			return data;
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			this.handle_callbacks(data);
		}
	}, {
		key: 'onFail',
		value: function onFail(data) {
			this.handle_callbacks(data);
		}
	}, {
		key: 'onAlways',
		value: function onAlways(data) {
			this.button_unlock();
		}
	}, {
		key: 'ajax',
		value: function ajax() {
			var _this = this;

			this.button_lock();

			var $config = this.ajax_args;

			if (typeof $config.success !== 'undefined') {
				delete $config.success;
			}
			if (typeof $config.always !== 'undefined') {
				delete $config.always;
			}
			if (typeof $config.fail !== 'undefined') {
				delete $config.fail;
			}

			this.instance = window.wp.ajax.send($config);
			this.instance.done(function (data) {
				return _this.onSuccess(data);
			});
			this.instance.fail(function (data) {
				return _this.onFail(data);
			});
			this.instance.always(function (data) {
				return _this.onAlways(data);
			});
		}
	}, {
		key: 'has_config',
		value: function has_config() {
			var $key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			return typeof this.ajax_config[$key] !== 'undefined';
		}
	}, {
		key: 'config',
		value: function config() {
			var $key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			return this.has_config($key) ? this.ajax_config[$key] : $default;
		}
	}, {
		key: 'button_lock',
		value: function button_lock() {
			if (false !== this.config('button')) {
				var $button = (0, _to_jquery2.default)(this.config('button'));
				if ($button) {
					$button.wpo_button('processing');

					if (this.config('spinner')) {
						var $spinner = jQuery(this.config('spinner'));
						$spinner.addClass('is-active');
						$button.parent().append($spinner);
					}
				}
			}
		}
	}, {
		key: 'button_unlock',
		value: function button_unlock() {
			if (false !== this.config('button')) {
				var $button = (0, _to_jquery2.default)(this.config('button'));
				if ($button) {
					$button.wpo_button('complete');
					var $spinner = $button.next();
					if ($spinner.hasClass('spinner')) {
						$spinner.remove();
					} else {
						$button.parent().find('.spinner').remove();
					}
				}
			}
		}
	}]);

	return WPOnion_Ajaxer;
}();

exports.default = function ($, document, wp) {
	$(function () {
		$(document).on('click', '.wponion-inline-ajax', function (e) {
			var $this = $(e.currentTarget),
			    $method = $this.data('method'),
			    $url = $this.data('url'),
			    $ajax_action = $this.data('ajax-action');

			var $args = {
				method: $method
			};

			if ($url) {
				$args.url = $url;
			}

			if ($ajax_action) {
				$args.url = ajaxurl + '?action=' + $ajax_action;
			}

			new WPOnion_Ajaxer($args, {
				button: $(e.currentTarget)
			});
		});
	});
}(jQuery, document, window.wp);

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
	}, {
		key: 'submenu_indicator',
		value: function submenu_indicator($elems) {
			$elems.each(function () {
				jQuery(this).parent().on('click', function () {
					var $toggle = jQuery(this).find('> .wponion-submenu-i').attr('data-toggle-class');
					var $ex_class = jQuery(this).find('> .wponion-submenu-i').attr('class');
					jQuery(this).find('> .wponion-submenu-i').attr('class', $toggle);
					jQuery(this).find('> .wponion-submenu-i').attr('data-toggle-class', $ex_class);
				});
			});
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
				//el.removeClass( 'hidden' );
				el.slideDown();
				el.find(':input').removeClass('wponion-dependent');
			},
			hide: function hide(el) {
				//el.addClass( 'hidden' );
				el.slideUp();
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

			if (jQuery('form#update-nav-menu').length > 0) {
				return jQuery('form#update-nav-menu');
			}

			if (jQuery('form#post').length > 0 && jQuery('input#post_ID').length > 0 && jQuery('input#original_publish').length > 0) {
				return jQuery('form#post');
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
					icons: {
						'header': 'dashicons dashicons-arrow-right',
						'activeHeader': 'dashicons dashicons-arrow-down'
					}
				});

				if (!jQuery(this).hasClass('is_open')) {
					jQuery(this).accordion('option', 'active', false);
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
				remove_btn: '.wponion-clone-action > .wponion-remove',
				template: $this.option('clone_template'),
				templateAfterRender: function templateAfterRender($e) {
					return wponion_field($e.find('> div.wponion-field-clone:last-child')).reload();
				},
				sortable: $sort,
				onLimitReached: function onLimitReached() {
					if ($add_btn.parent().find('div.alert').length > 0) {} else {
						$add_btn.parent().prepend(jQuery($eror_msg).hide());
						$add_btn.parent().find('div.alert').slideDown();
						wponion_notice($add_btn.parent().find('div.alert, div.notice'));
					}
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
			this.bind_events_for_title();
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
					$elem.parent().parent().parent().slideUp(function () {
						jQuery(this).remove();
					});
					if (jQuery('body').find('link#editor-buttons-css').length === 0) {
						jQuery('body').append('<link rel="stylesheet" id="editor-buttons-css" href="' + _core2.default.option('wpeditor_buttons_css', false) + '" type="text/css" media="all">');
					}
					_this2.update_groups_title();
				},
				templateAfterRender: function templateAfterRender($wrap, $limit) {
					var $data = $group_wrap.find('> .wponion-accordion-wrap:last-child');
					$data.hide();
					_this2.update_groups_title();
					_this2.bind_events_for_title();
					_this2.init_field($group_wrap, 'accordion');
					//this.js_validate_elem( this.option( 'js_validate', false ), $data );
					$data.find('.wponion-group-remove').tippy();
					wponion_field($data).reload();
					new _dependency2.default($group_wrap.find('> .wponion-accordion-wrap:last-child'), { nestable: true });
					_this2.init_field($data.find('.wponion-element-wp_editor'), 'reload_wp_editor');
					$data.slideDown();
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
						_this2.update_groups_title();
					}

				},
				onLimitReached: function onLimitReached() {
					if ($add.parent().find('div.alert').length > 0) {} else {
						$add.before(jQuery($error_msg).hide());
						$add.parent().find('div.alert').slideDown();
						wponion_notice($add.parent().find('div.alert, div.notice'));
					}
				}
			});
		}
	}, {
		key: 'bind_events_for_title',
		value: function bind_events_for_title() {
			var _this3 = this;

			var $elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			$elem = false === $elem ? this.element.find('> .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap') : $elem;
			$elem.each(function (i, e) {
				var $data = jQuery(e);

				var $mached = _this3.option('matched_heading_fields');
				for (var $key in $mached) {
					var _$elem = $data.find(':input[data-depend-id="' + $mached[$key] + '"]');
					if (_$elem.length > 0) {
						_$elem.on('change, blur', function () {
							return _this3.update_groups_title();
						});
					}
				}
			});
		}
	}, {
		key: 'update_groups_title',
		value: function update_groups_title() {
			var _this4 = this;

			var $elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			var $limit = 1;
			$elem = false === $elem ? this.element.find('> .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap') : $elem;

			$elem.each(function (i, e) {
				var $data = jQuery(e);
				var $heading = _this4.option('heading');
				if (false !== _this4.option('heading_counter')) {
					$heading = $wponion_helper.str_replace('[count]', $limit, $heading);
				}

				var $mached = _this4.option('matched_heading_fields');
				for (var $key in $mached) {
					var _$elem2 = $data.find(':input[data-depend-id="' + $mached[$key] + '"]');
					if (_$elem2.length > 0) {
						$heading = $wponion_helper.str_replace($mached[$key], _$elem2.val(), $heading);
					}
				}

				if ($heading === '') {
					$heading = $wponion_helper.str_replace('[count]', $limit, _this4.option('default_heading'));
				}

				$data.find('> .wponion-accordion-title span.heading').html($heading);
				$limit++;
			});
		}
	}, {
		key: 'js_error',
		value: function js_error(err) {
			var $elem = _core2.default.IDtoElement(err.element, this.element);
			if ($elem) {
				//err.error.appendTo( $elem.find( '> .wponion-fieldset' ) );
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
					if (_this2.element.find('div.alert').length > 0) {} else {
						_this2.element.find('.wponion-keyvalue_wrap').after(jQuery(_this2.option('error_msg')).hide());
						_this2.element.find('div.alert').slideDown();
						wponion_notice(_this2.element.find('div.alert, div.notice'));
					}
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

/***/ "./src/js/modules/guttenberg.js":
/*!**************************************!*\
  !*** ./src/js/modules/guttenberg.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPOnion_Guttenberg = function () {
	function WPOnion_Guttenberg() {
		var _this = this;

		var $id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, WPOnion_Guttenberg);

		this.id = $id;
		this.args = _core2.default.js_func($args);

		if (typeof this.args.save === 'undefined') {
			this.args.save = function (block) {
				return _this.save_handler(block);
			};
		}

		if (typeof this.args.edit === 'undefined') {
			this.args.edit = function (block) {
				return _this.edit_handler(block);
			};
		}

		window.wp.blocks.registerBlockType(this.id, this.args);
	}

	_createClass(WPOnion_Guttenberg, [{
		key: 'save_handler',
		value: function save_handler(block) {}
	}, {
		key: 'edit_handler',
		value: function edit_handler(block) {
			var el = wp.element.createElement;

			var $_postids = JSON.stringify(parseInt(jQuery('input#post_ID').val()));
			block.attributes.post_id = $_postids;
			var block_id = block.attributes.block_id = block.attributes.block_id || block.clientId;
			var $remote = el('form', {
				className: 'wponion-block-group-content',
				'data-block-id': block_id
			}, [el(window.wp.components.ServerSideRender, {
				block: this.id,
				attributes: {
					post_id: $_postids,
					block_id: block_id
				}
			})]);

			var children = [];

			if (typeof this.args.style !== 'undefined') {
				if (this.args.style === 'default') {
					children.push(el('div', {
						className: 'acf-block-group-heading'
					}, [el('span', {
						className: 'dashicons dashicons-' + this.args.icon
					}), ' ', this.args.title]));
				}
			}

			var selector = 'form[data-block-id="' + block_id + '"]';

			if (jQuery(selector).length < 1) {}

			/*if( $( selector ).length < 1 ) {
   	$( document ).on( 'acb_save_fields', function() {
   		var tryUpdate = function() {
   			if( block.isSelected || $( selector ).is( ':hover' ) ) {
   				clearTimeout( block.updateTimeout );
   				block.updateTimeout = setTimeout( tryUpdate, 500 );
   				return;
   			}
   				block.setAttributes( {
   				acf_fields: acf.serialize( $( selector ) )[ 'acf' ],
   			} );
   		};
   			setTimeout( tryUpdate, 250 );
   	} );
   }*/
			// setTimeout(function () {
			//   acf.do_action('ready', $('[data-block-id="' + block_id + '"]'));
			// }, 500);

			children.push($remote);

			return el('div', { className: 'wponion-block-group-wrapper' }, children);
		}
	}]);

	return WPOnion_Guttenberg;
}();

exports.default = function (window, document, $, wp) {
	$(function () {
		if (!window.wp || !window.wp.blocks || !window.wp.editor) {
			return;
		}

		$(window).on('load', function () {
			var $blocks = window.wp.blocks;
			var $wpo_blocks = _core2.default.windowArgs('wponion_guttenberg_blocks');
			if (false === $wponion_helper.is_undefined($wpo_blocks) && $wponion_helper.is_array($wpo_blocks)) {
				for (var $key in $wpo_blocks) {
					new WPOnion_Guttenberg($key, $wpo_blocks[$key]);
				}
			}
		});
	});
}(window, document, jQuery, wp);

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
					jQuery(this).addClass('active');
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
window.wponion_guttenberg = __webpack_require__(/*! ./modules/guttenberg */ "./src/js/modules/guttenberg.js").default;
window.wponion_quick_edit = __webpack_require__(/*! ./modules/quick-edit */ "./src/js/modules/quick-edit.js").default;
window.$wponion = __webpack_require__(/*! ./core/core */ "./src/js/core/core.js").default;
window.$wponion_ajaxer = __webpack_require__(/*! ./core/ajaxer */ "./src/js/core/ajaxer.js").WPOnion_Ajaxer;
window.$wponion_ajax = __webpack_require__(/*! ./core/ajaxer */ "./src/js/core/ajaxer.js").default;
window.$wponion_debug = __webpack_require__(/*! ./core/debug */ "./src/js/core/debug.js").default;
window.$wponion_helper = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");
window.wponion_modal = __webpack_require__(/*! ../vendors/backbone-modal */ "./src/vendors/backbone-modal.js").default;
window.wponion_new_field = function ($class) {
	return (0, _index.is_window_arg)($class) ? window[$class] : false;
};
window.wponion_field = function ($elem) {
	var $contxt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	return new _field2.default($elem, $contxt);
};
window.wponion_fields = {
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
};
window.wponion_notice = function ($elem) {
	if ($elem.find('.wponion-remove').length > 0) {
		$elem.each(function () {
			var $_el = jQuery(this);
			jQuery(this).find('.wponion-remove').on('click', function () {
				$_el.slideUp('slow', function () {
					$_el.remove();
				});
			});
		});

		return $elem;
	}

	var $auto = $elem.attr('data-autoclose');
	if ($auto) {
		$auto = parseInt($auto);
		setTimeout(function () {
			$elem.slideUp('slow', function () {
				$elem.remove();
			});
		}, $auto);
	}
};

module.exports = function (window, document, wp, $, $wpo) {
	var $wp_hook = wp.hooks;

	$(function () {
		$wpo.settings_args = $wpo.windowArgs('wponion_core', {});
		$wpo.text = $wpo.windowArgs('wponion_il8n', {});
		$wpo.debug_info = null;
		$wpo.field_debug_info = null;

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

		var $wpof_div = $('.wponion-framework:not(.wponion-module-quick_edit-framework)');

		wponion_notice($wpof_div.find('.wponion-element-wp_notice, .wponion-element-notice'));

		window.$wponion.submenu_indicator($(document).find('.wponion-submenu-i'));

		$(document).on('click', '.wponion-field-debug-code > strong', function () {
			jQuery(this).next().slideToggle();
			jQuery(this).toggleClass('dashicons-arrow-down').toggleClass('dashicons-arrow-right');
		});

		window.wponion_fields = $wp_hook.applyFilters('wponion_fields_functions', window.wponion_fields);

		/**
   * Triggers Hook With Widgets.
   */
		$(document).on('widget-added widget-updated', function (event, $widget) {
			wponion_field($widget).reload();
			new _dependency2.default($widget);
		});

		$(document).on('menu-item-added', function (event, $menu) {
			wponion_field($menu).reload();
			new _dependency2.default($menu);
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
				wponion_field($(this)).reload();
				new _dependency2.default($(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9hcnJheS9hcnJheV9tZXJnZV9yZWN1cnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvYXJyYXkvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2FycmF5L2luX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvY3JlYXRlX2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9mdW5jdGlvbl9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2luZm8vaW5pX2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9leHBsb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL2ltcGxvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfcmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b2xvd2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL3N0cnRvdXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3VybC9iYXNlNjRfZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2Jvb2x2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9lbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2Zsb2F0dmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvZ2V0dHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2ludHZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfYm9vbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9pc19udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3NjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzX3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdmFyL2lzc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC94bWwvdXRmOF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sX2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvYXJyYXlfdG9fd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Nsb25lX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jb3B5X3RvX2NsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGV2aWNlX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvZGlmZl9kYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19hZnRlcl9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2JlZm9yZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19zYW1lX2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdGFiX2ZvY3VzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3dpbmRvd19hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvb2tnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9waXBlX2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9wbGFpbl9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcXVlcnlfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3JhbmRfbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3Njcm9sbF9wb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3RvX3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90aW1lX3Rha2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy90b19qc19mdW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3VybF9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdmFsaWRhdGVTaW5nbGVKU0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvd2luZG93X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93cmFwX2FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2FqYXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2RlYnVnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYmFja3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2hlY2tib3hfcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaG9zZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jbG9uZV9lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NvbG9yX3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9kYXRlX3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZpZWxkc2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZm9udF9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nb29nbGVfbWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ljb25fcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2Vfc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW1hZ2VfdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaW5wdXRtYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvamFtYm9fY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2pxdWVyeV90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9rZXl2YWx1ZV9wYWlyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvbm90aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvb2VtYmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc2VsZWN0Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3N1YmhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy93cF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy93cF9saW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9kZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2ZpZWxkX3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvaW1hZ2VfcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9idWxrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZ3V0dGVuYmVyZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXRhYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1aWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dwb25pb24tY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9ycy9iYWNrYm9uZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiJdLCJuYW1lcyI6WyJKU19QYXJzZV9BcmdzIiwiJGFyZ3MiLCIkZGVmYXVsdHMiLCIkaXNfbmVzdGVkIiwiYXJncyIsImRlZmF1bHRzIiwibmVzdGVkIiwicGFyc2UiLCIkX2tleSIsIiRpc19kZWVwIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5X21lcmdlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcmdsIiwibGVuZ3RoIiwiYXJnIiwicmV0T2JqIiwiayIsImFyZ2lsIiwiaiIsImkiLCJjdCIsInRvU3RyIiwiT2JqZWN0IiwidG9TdHJpbmciLCJyZXRBcnIiLCJjb25jYXQiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJhcnJheV9tZXJnZV9yZWN1cnNpdmUiLCJhcnIxIiwiYXJyMiIsImFycmF5TWVyZ2UiLCJyZXF1aXJlIiwiaWR4IiwicHVzaCIsImFycmF5X3ZhbHVlcyIsImlucHV0IiwidG1wQXJyIiwia2V5IiwiY291bnQiLCJtaXhlZFZhciIsIm1vZGUiLCJjbnQiLCJpbl9hcnJheSIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJnU3RyaWN0Iiwic3RyaWN0IiwibWljcm90aW1lIiwiZ2V0QXNGbG9hdCIsInMiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRpbWluZyIsIm5hdmlnYXRpb25TdGFydCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwidGltZSIsImZsb29yIiwiY2FsbF91c2VyX2Z1bmMiLCJjYiIsInBhcmFtZXRlcnMiLCJjYWxsVXNlckZ1bmNBcnJheSIsImNhbGxfdXNlcl9mdW5jX2FycmF5IiwiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsImZ1bmMiLCJzY29wZSIsInZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuIiwibWF0Y2giLCJGdW5jdGlvbiIsImV2YWwiLCJFcnJvciIsImFwcGx5IiwiY3JlYXRlX2Z1bmN0aW9uIiwiY29kZSIsInNwbGl0IiwiZSIsImZ1bmN0aW9uX2V4aXN0cyIsImZ1bmNOYW1lIiwiaW5pX2dldCIsInZhcm5hbWUiLCIkbG9jdXR1cyIsInBocCIsImluaSIsImxvY2FsX3ZhbHVlIiwidW5kZWZpbmVkIiwiZXhwbG9kZSIsImRlbGltaXRlciIsInN0cmluZyIsImxpbWl0Iiwiam9pbiIsInNwbGljZSIsImltcGxvZGUiLCJnbHVlIiwicGllY2VzIiwicmV0VmFsIiwidEdsdWUiLCJtZDUiLCJzdHIiLCJoYXNoIiwiY3J5cHRvIiwibWQ1c3VtIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsInV0ZjhFbmNvZGUiLCJ4bCIsIl9yb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsIl9hZGRVbnNpZ25lZCIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiX0YiLCJ4IiwieSIsInoiLCJfRyIsIl9IIiwiX0kiLCJfRkYiLCJhIiwiYiIsImMiLCJkIiwiYWMiLCJfR0ciLCJfSEgiLCJfSUkiLCJfY29udmVydFRvV29yZEFycmF5IiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNUZW1wMSIsImxOdW1iZXJPZldvcmRzVGVtcDIiLCJsTnVtYmVyT2ZXb3JkcyIsImxXb3JkQXJyYXkiLCJsQnl0ZVBvc2l0aW9uIiwibEJ5dGVDb3VudCIsImNoYXJDb2RlQXQiLCJfd29yZFRvSGV4Iiwid29yZFRvSGV4VmFsdWUiLCJ3b3JkVG9IZXhWYWx1ZVRlbXAiLCJsQnl0ZSIsImxDb3VudCIsInN1YnN0ciIsIkFBIiwiQkIiLCJDQyIsIkREIiwiUzExIiwiUzEyIiwiUzEzIiwiUzE0IiwiUzIxIiwiUzIyIiwiUzIzIiwiUzI0IiwiUzMxIiwiUzMyIiwiUzMzIiwiUzM0IiwiUzQxIiwiUzQyIiwiUzQzIiwiUzQ0IiwidGVtcCIsInRvTG93ZXJDYXNlIiwicGFyc2Vfc3RyIiwiYXJyYXkiLCJzdHJBcnIiLCJTdHJpbmciLCJyZXBsYWNlIiwic2FsIiwicCIsImxhc3RPYmoiLCJjaHIiLCJ0bXAiLCJ2YWx1ZSIsInBvc3RMZWZ0QnJhY2tldFBvcyIsImtleXMiLCJrZXlzTGVuIiwiX2ZpeFN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXJBdCIsImluZGV4T2YiLCJzdHJfcmVwbGFjZSIsInNlYXJjaCIsInN1YmplY3QiLCJjb3VudE9iaiIsInJlcGwiLCJzbCIsImZsIiwiZiIsInIiLCJyYSIsInNhIiwic3RydG9sb3dlciIsInN0cnRvdXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImJhc2U2NF9kZWNvZGUiLCJlbmNvZGVkRGF0YSIsImRlY29kZVVURjhzdHJpbmciLCJtYXAiLCJhdG9iIiwiQnVmZmVyIiwiYjY0IiwibzEiLCJvMiIsIm8zIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJiaXRzIiwiZGVjIiwiZnJvbUNoYXJDb2RlIiwiYmFzZTY0X2VuY29kZSIsInN0cmluZ1RvRW5jb2RlIiwiZW5jb2RlVVRGOHN0cmluZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvU29saWRCeXRlcyIsInAxIiwiYnRvYSIsImVuYyIsImJvb2x2YWwiLCJpc0FycmF5IiwiZW1wdHkiLCJ1bmRlZiIsImxlbiIsImVtcHR5VmFsdWVzIiwiZmxvYXR2YWwiLCJwYXJzZUZsb2F0IiwiZ2V0dHlwZSIsImlzRmxvYXQiLCJuYW1lIiwiX2dldEZ1bmNOYW1lIiwiZm4iLCJleGVjIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpbnR2YWwiLCJiYXNlIiwidHlwZSIsImlzTmFOIiwiaXNGaW5pdGUiLCJjZWlsIiwiaXNfYXJyYXkiLCJfaXNBcnJheSIsImluaVZhbCIsImFzU3RyaW5nIiwiYXNGdW5jIiwiaXNfYm9vbCIsImlzX2NhbGxhYmxlIiwic3ludGF4T25seSIsImNhbGxhYmxlTmFtZSIsIm1ldGhvZCIsInZhbGlkRnVuY3Rpb25OYW1lIiwiZ2V0RnVuY05hbWUiLCJpc19mbG9hdCIsImlzX2ludCIsImlzX251bGwiLCJpc19udW1lcmljIiwid2hpdGVzcGFjZSIsImlzX29iamVjdCIsImlzX3NjYWxhciIsInRlc3QiLCJpc19zdHJpbmciLCJpc3NldCIsImwiLCJ1dGY4X2VuY29kZSIsImFyZ1N0cmluZyIsInV0ZnRleHQiLCJzdGFydCIsImVuZCIsInN0cmluZ2wiLCJuIiwiYzEiLCJSYW5nZUVycm9yIiwiYzIiLCJhcnIiLCJsaXN0SUQiLCJ0YWciLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIml0ZW0iLCIkZGF0YSIsInJldHVybl9odG1sIiwiSSIsIksiLCIkdmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiJGFycmF5IiwiJGtleSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdGVkIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJzZWxlY3RvciIsInN0ZXAiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJfc3RlcCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWJzIiwiaXNOdW1iZXJpYyIsInZhbCIsImNoZWNrUHgiLCJjaGVja1BjdCIsImNoZWNrRW0iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYXRlSW5pdGlhbCIsImRhdGVGaW5hbCIsIm1zIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIm1pbGxpc2Vjb25kIiwiZW50cmllcyIsImZpbHRlciIsImRhdGVBIiwiZGF0ZUIiLCIkZWxlbSIsImpRdWVyeSIsInRvSVNPU3RyaW5nIiwiaGlkZGVuIiwiJE9LUyIsInByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWUiLCJwcm9wZXJ0eSIsInNoaWZ0IiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJkYXRhIiwiY3JlYXRlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwibG9jYXRpb24iLCJyYW5kb20iLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJjYWxsYmFjayIsInRpdGxlIiwidGltZUVuZCIsIiRhcmdzX2tleSIsIiRjb250ZW50c19rZXkiLCJ1cmwiLCJyZWR1Y2UiLCJ2IiwiJHN0cmluZyIsIiRjb250ZW50cyIsIiRfayIsIldQT25pb25fQWpheGVyIiwiJGFqYXhfYXJncyIsIiRhamF4X2NvbmZpZyIsImFqYXh1cmwiLCJkZWZhdWx0X2NvbmZpZ3MiLCJyZXNwb25zZV9lbGVtZW50IiwiYnV0dG9uIiwiZWxlbWVudCIsInNwaW5uZXIiLCJpbnN0YW5jZSIsImFqYXhfYXJncyIsImFqYXhfY29uZmlnIiwiYWpheCIsIiRjb2RlIiwic2luZ2xlX2NhbGxiYWNrIiwiJGNhbGxiYWNrIiwiJGNhbGxiYWNrcyIsImhhbmRsZV9jYWxsYmFja3MiLCJidXR0b25fdW5sb2NrIiwiYnV0dG9uX2xvY2siLCIkY29uZmlnIiwic3VjY2VzcyIsImFsd2F5cyIsImZhaWwiLCJ3cCIsInNlbmQiLCJkb25lIiwib25TdWNjZXNzIiwib25GYWlsIiwib25BbHdheXMiLCIkZGVmYXVsdCIsImhhc19jb25maWciLCJjb25maWciLCIkYnV0dG9uIiwid3BvX2J1dHRvbiIsIiRzcGlubmVyIiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJhcHBlbmQiLCJuZXh0IiwiaGFzQ2xhc3MiLCJyZW1vdmUiLCJmaW5kIiwiJCIsIm9uIiwiJHRoaXMiLCJjdXJyZW50VGFyZ2V0IiwiJG1ldGhvZCIsIiR1cmwiLCIkYWpheF9hY3Rpb24iLCJXUE9uaW9uIiwiJHR5cGUiLCJ3cG9uaW9uX2ZpZWxkcyIsImF0dHIiLCIkd2hlcmVfdG9fZmluZCIsIiRpZCIsImZpZWxkSUQiLCIkdmFyX2lkIiwiaXNGaWVsZCIsIndpbmRvd0FyZ3MiLCJ0ZXh0IiwiJGlzX3Nob3ciLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGhhbmRsZSIsIiRqc29uIiwiZGVidWdfaW5mbyIsIiRkZWZpbmVkX3ZhcnMiLCJwcmV2ZW50RGVmYXVsdCIsInN3YWwiLCJ0eHQiLCJodG1sIiwic2hvd0NvbmZpcm1CdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsInNob3dDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbiIsIndpZHRoIiwib25CZWZvcmVPcGVuIiwiZW5hYmxlTG9hZGluZyIsIm9uT3BlbiIsImpzb25WaWV3IiwiZGlzYWJsZUxvYWRpbmciLCJ0aGVuIiwicmVzdWx0Iiwic2V0dGluZ3NfYXJncyIsIm9wdGlvbiIsImlzX2RlYnVnIiwiZmllbGRfZGVidWdfaW5mbyIsIiR2YXJzIiwiJHV0eHQiLCIkbXR4dCIsIiRhY3Rpb24iLCIkb25TdWNjZXNzIiwiJG9uRXJyb3IiLCIkb25BbHdheXMiLCJvbkVycm9yIiwiJGFqYXgiLCJyZXMiLCJjb21waWxlZCIsIm9wdGlvbnMiLCJldmFsdWF0ZSIsImludGVycG9sYXRlIiwiZXNjYXBlIiwidmFyaWFibGUiLCJfIiwidGVtcGxhdGUiLCIkZWxlbXMiLCJlYWNoIiwiJHRvZ2dsZSIsIiRleF9jbGFzcyIsIiRlbGVtZW50IiwicGFyYW0iLCJuZXN0YWJsZSIsIiRlbCIsImluaXQiLCJydWxlc2V0IiwiZGVwcyIsImNyZWF0ZVJ1bGVzZXQiLCJkZXBSb290IiwiZW5hYmxlIiwic2hvdyIsInNsaWRlRG93biIsInJlbW92ZUNsYXNzIiwiaGlkZSIsInNsaWRlVXAiLCJjaGVja1RhcmdldHMiLCJXUE9uaW9uX0RlcGVuZGVuY3kiLCJpc19qcXVlcnkiLCJpc191bmRlZmluZWQiLCIkc2VsZWN0b3IiLCIkY29udGV4dCIsInNldF9hcmdzIiwiZmllbGRfZGVidWciLCJqc19lcnJvcl9oYW5kbGVyIiwianNfdmFsaWRhdG9yIiwiZXJyIiwiZXJyb3IiLCJhcHBlbmRUbyIsImpzX2Vycm9yIiwibWF5YmVfanNfdmFsaWRhdGVfZWxlbSIsIldQT25pb25fVmFsaWRhdGlvbiIsImdldF9mb3JtIiwianNfdmFsaWRhdGVfZWxlbSIsInJ1bGVzIiwiJGFyZyIsIiR3cG9uaW9uIiwianNfZnVuYyIsIiRleGlzdHMiLCIkd3Bvbmlvbl9kZWJ1ZyIsImdldCIsImlkIiwiYWRkIiwiJGluZm8iLCIkZm91bmQiLCIkSUQiLCJ0aXBweSIsImNvbnRlbnQiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiJGQiLCIkbm90aWNlX3R4dCIsImhlaWdodEF1dG8iLCJfYXJncyIsIiRhamF4X2tleSIsInBsdWdpbl9pZCIsIiRfaW5zdGFuY2VzIiwiJGNsYXNzIiwiZ2V0X2ZpZWxkX2NsYXNzIiwiaG9va3MiLCJhZGRBY3Rpb24iLCJpbml0X2ZpZWxkIiwiV1BPbmlvbl9Nb2R1bGUiLCJzZXRfZWxlbWVudCIsInNldF9jb250eHQiLCJtb2R1bGVfaW5pdCIsImVsZW0iLCIkY29udHh0IiwiY29udGV4dCIsIldQT25pb25fVmFsaWRhdG9yIiwiZm9ybSIsImludmFsaWRIYW5kbGVyIiwic2libGluZ3MiLCJiZWZvcmUiLCJpZ25vcmUiLCJlcnJvclBsYWNlbWVudCIsInRyaWdnZXIiLCJlcnJvckNsYXNzIiwiZXJyb3JFbGVtZW50IiwidmFsaWRhdGUiLCJhY2NvcmRpb24iLCJoZWFkZXIiLCJjb2xsYXBzaWJsZSIsImFuaW1hdGUiLCJoZWlnaHRTdHlsZSIsImljb25zIiwiSUR0b0VsZW1lbnQiLCJXUE9uaW9uX0ZpZWxkIiwidG9vbHRpcCIsImhhbmRsZV9iYWNrdXBfaW1wb3J0IiwiJGZpbGUiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZm9yY2VfZG93bmxvYWQiLCJibG9ja19mb3JtIiwidW5pcXVlIiwiZXh0cmEiLCJnZXRfZXh0cmFfdmFsdWUiLCJzd2FsX2Vycm9yIiwidW5ibG9ja19mb3JtIiwiJGlucyIsInRpcHB5X2dldCIsImluc3RhbmNlcyIsImRlc3Ryb3kiLCJiYWNrdXBfaWQiLCJyZXN0b3JlX2JhY2t1cCIsIm1zZyIsIl90aXBweSIsInNob3dfdG9vbHRpcCIsInJlbW92ZUF0dHIiLCJleHBvcnRPYmoiLCJleHBvcnROYW1lIiwiZGF0YVN0ciIsImRvd25sb2FkQW5jaG9yTm9kZSIsImNsaWNrIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwidGFyZ2V0IiwicmVhZEFzVGV4dCIsIiRiYWNrdXBpZCIsImludGVyYWN0aXZlIiwib25TaG93biIsIiRpbnB1dHMiLCJwcm9wIiwiY2hvc2VuIiwiaGFuZGxlX2FyZ3MiLCIkY2xvbmVfd3JhcCIsIiRhZGRfYnRuIiwiJGxpbWl0IiwiJGVyb3JfbXNnIiwiZXJyb3JfbXNnIiwiJHNvcnQiLCJzb3J0IiwiaXRlbXMiLCJoYW5kbGUiLCJwbGFjZWhvbGRlciIsImV2ZW50IiwidWkiLCJjc3MiLCJzdG9wIiwiV1BPbmlvbkNsb25lciIsImFkZF9idG4iLCJjbG9uZV9lbGVtIiwicmVtb3ZlX2J0biIsInRlbXBsYXRlQWZ0ZXJSZW5kZXIiLCIkZSIsIndwb25pb25fZmllbGQiLCJyZWxvYWQiLCJzb3J0YWJsZSIsIm9uTGltaXRSZWFjaGVkIiwicHJlcGVuZCIsIndwb25pb25fbm90aWNlIiwic2hvd19hbmltYXRpb24iLCJhbmltYXRpb25zIiwiaGlkZV9hbmltYXRpb24iLCJ3cENvbG9yUGlja2VyIiwiJHNldHRpbmdzIiwiJHZpZXciLCJwbHVnaW5zIiwicmFuZ2VQbHVnaW4iLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsIiRodG1sIiwid2Vic2FmZSIsImZvbnRzIiwiYnVpbGRfb3B0aW9ucyIsInZhcmlhbnRzIiwiZ29vZ2xlX2ZvbnRzIiwiJHZhcmlhbnQiLCIkaHRtbF90ZW1wIiwiJGlucHV0IiwiJHByZXZpZXciLCJ3cF9tZWRpYV9mcmFtZSIsIiRhZGQiLCIkZWRpdCIsIiRjbGVhciIsIiRtYW5hZ2UiLCJpZHMiLCJ3aGF0Iiwic3RhdGUiLCJtZWRpYSIsImdhbGxlcnkiLCJsaWJyYXJ5IiwiZnJhbWUiLCJtdWx0aXBsZSIsIm9wZW4iLCJlZGl0Iiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJzZWxlY3RlZElkcyIsIm1vZGVscyIsImF0dGFjaG1lbnQiLCJ0b0pTT04iLCJzaXplcyIsInRodW1iIiwidGh1bWJuYWlsIiwiJHRtcCIsIiRwYXJlbnQiLCIkaW1hZ2VfaWQiLCIkayIsIiR2IiwiY3Vyc29yIiwic2Nyb2xsU2Vuc2l0aXZpdHkiLCJmb3JjZVBsYWNlaG9sZGVyU2l6ZSIsImhlbHBlciIsIm9wYWNpdHkiLCIkaXRlbSIsImhlaWdodCIsIiRtYXAiLCJkZXRhaWxzIiwiZGV0YWlsc0F0dHJpYnV0ZSIsIiRfaW5zdGFuY2UiLCJnZW9jb21wbGV0ZSIsImJpbmQiLCJsYXRMbmciLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJsYXQiLCJsbmciLCIkZ3JvdXBfd3JhcCIsIiRlcnJvcl9tc2ciLCJiaW5kX2V2ZW50c19mb3JfdGl0bGUiLCJvblJlbW92ZSIsInVwZGF0ZV9ncm91cHNfdGl0bGUiLCIkd3JhcCIsIiRtYWNoZWQiLCIkaGVhZGluZyIsIiR3cG9uaW9uX2hlbHBlciIsIiRfdGhpcyIsIiRyZW1vdmVfYnRuIiwiJHdvcmsiLCJlbGVtcyIsInBvcHVwIiwiZWxtIiwiaW5pdF90b29sdGlwIiwicG9wdXBfdG9vbHRpcCIsIiR0cCIsIiRlbG0iLCIkaW5zdGFuY2UiLCIkaGVpZ2h0IiwiJGljb24iLCJjbG9zZU1vZGFsIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiJHJlcyIsInJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwiJHBvcHVwIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjdXN0b21DbGFzcyIsIiRwb3B1cF9lbGVtIiwiJHByZXZpZXdfYWRkIiwibWVkaWFfaW5zdGFuY2UiLCJob29rIiwiZG9BY3Rpb24iLCJmaXJzdCIsImF0dHJpYnV0ZXMiLCJpbnB1dG1hc2siLCIkdGhpc19lbGVtIiwiJHRhYiIsImdsb2JhbF92YWxpZGF0ZSIsImFmdGVyIiwiZXEiLCJpbWFnZSIsInNob3dfcHJldmlldyIsInNlbGVjdDIiLCJzZWxlY3RpemUiLCIkZW5hYmxlZCIsIiRkaXNhYmxlZCIsImNvbm5lY3RXaXRoIiwiZm9udF93ZWlnaHRfc3R5bGUiLCIkZm9udF9maWVsZCIsIiRmb250IiwiJGZvbnRfd2VpZ2h0X3N0eWxlIiwiZm9udF9zdHlsZSIsIiR0YWciLCIkY29sb3IiLCIkYWxpZ24iLCIkZm9udFNpemUiLCIkbGluZUhlaWdodCIsIiRiYWNrVVBGb250IiwiJGRpcmVjdGlvbiIsIiRsZXR0ZXJTcGFjaW5nIiwiaHJlZiIsIndlaWdodCIsIiRfYXR0cnMiLCIkdGV4dCIsIiR3ZWlnaHRfdmFsIiwiJHN0eWxlX3ZhbCIsInNldHRpbmdzIiwiZnJhbWVfdGl0bGUiLCJ1cGxvYWRfdHlwZSIsImluc2VydF90aXRsZSIsIiR0ZXh0YXJlYSIsIndwTGluayIsIiRkZXAiLCJjb250cm9sbGVyIiwiJGNvbnRyb2xsZXIiLCIkY29uZGl0aW9uIiwiY29uZGl0aW9uIiwiJGZpZWxkIiwiJElOUFVUIiwiY29udHh0IiwiY3JlYXRlUnVsZSIsImluY2x1ZGUiLCIkZmlkIiwiJHRvb2x0aXBfa2V5IiwidmFsaWRfanNvbiIsImlzRmV0Y2hpbmciLCJjYW5GZXRjaCIsIiRpbWFnZSIsInVwZGF0ZUR1cmF0aW9uIiwib25TaG93IiwidGlwIiwicmVzcG9uc2UiLCJmZXRjaCIsImJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpc1Zpc2libGUiLCJzZXRDb250ZW50Iiwib25IaWRkZW4iLCJwb3BwZXJPcHRpb25zIiwibW9kaWZpZXJzIiwicHJldmVudE92ZXJmbG93IiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3AiLCIkbWNlX2VkaXRvciIsInRpbnlNQ0VQcmVJbml0IiwibWNlSW5pdCIsIiRxdWlja190YWdzIiwicXRJbml0IiwiJE5FV19JRCIsIiR0ZXh0QXJlYSIsImNsb25lIiwiJGFjdHVhbF9JRCIsIiRhY3R1YWxfaHRtbCIsIiRyZWdleCIsInRpbnltY2UiLCJ0aW55TUNFIiwicXVpY2t0YWdzIiwiJGZpbmFsX2FyZ3MiLCJwb3N0X2lkcyIsIiRidWxrX2VkaXQiLCJjaGlsZHJlbiIsInNlcmlhbGl6ZU9iamVjdCIsImFzeW5jIiwiY2FjaGUiLCJXUE9uaW9uX0d1dHRlbmJlcmciLCJzYXZlIiwiYmxvY2siLCJzYXZlX2hhbmRsZXIiLCJlZGl0X2hhbmRsZXIiLCJibG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsIiRfcG9zdGlkcyIsInBvc3RfaWQiLCJibG9ja19pZCIsImNsaWVudElkIiwiJHJlbW90ZSIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwiaWNvbiIsImVkaXRvciIsIiRibG9ja3MiLCIkd3BvX2Jsb2NrcyIsIldQT25pb25fTWV0YWJveF9Nb2R1bGUiLCJtZW51IiwiaXMiLCJzbGlkZVRvZ2dsZSIsIiRocmVmIiwidXJsX3BhcmFtcyIsIiRzZWN0aW9uIiwiJHBhcmVudF9hY3RpdmVzIiwiJGN1cnJlbnQiLCIkYmFzZSIsIiRoaWRkZW4iLCJtZXNzYWdlIiwib3ZlcmxheUNTUyIsIiRmaWVsZHMiLCIkdmFsdWVzIiwic2VyaWFsaXplIiwidW5ibG9jayIsIldQT25pb25fUXVpY2tfRWRpdCIsInZhbHVlcyIsImZpZWxkQXJncyIsIiRsaXN0IiwiY2xvc2VzdCIsIndwb25pb25fbWV0YWJveF9tb2R1bGUiLCJkZWZhdWx0Iiwid3Bvbmlvbl9idWxrX2VkaXQiLCJ3cG9uaW9uX2d1dHRlbmJlcmciLCJ3cG9uaW9uX3F1aWNrX2VkaXQiLCIkd3Bvbmlvbl9hamF4ZXIiLCIkd3Bvbmlvbl9hamF4Iiwid3Bvbmlvbl9tb2RhbCIsIndwb25pb25fbmV3X2ZpZWxkIiwidGV4dGFyZWEiLCJpbWFnZV9zZWxlY3QiLCJzd2l0Y2hlciIsImNvbG9yX3BhbGV0dGUiLCJpY29uX3BpY2tlciIsImZvbnRfc2VsZWN0b3IiLCJncm91cCIsIndwX2VkaXRvciIsInJlbG9hZF93cF9lZGl0b3IiLCJmaWVsZHNldCIsIndwX2xpbmtzIiwiY2hlY2tib3hfcmFkaW8iLCJrZXl2YWx1ZV9wYWlyIiwiY29sb3JfcGlja2VyIiwiZGF0ZV9waWNrZXIiLCJpbWFnZV9wb3B1cCIsInVwbG9hZCIsImltYWdlX3VwbG9hZCIsImpxdWVyeV90YWIiLCJmaWVsZF90b29sdGlwIiwiY2xvbmVfZWxlbWVudCIsInNvcnRlciIsImdvb2dsZV9tYXBzIiwidHlwb2dyYXBoeSIsIm9lbWJlZCIsImhlYWRpbmciLCJzdWJoZWFkaW5nIiwiamFtYm9fY29udGVudCIsIm5vdGljZSIsImJhY2t1cCIsIiRfZWwiLCIkYXV0byIsInNldFRpbWVvdXQiLCIkd3BvIiwiJHdwX2hvb2siLCIkd3BvZl9kaXYiLCJzdWJtZW51X2luZGljYXRvciIsInRvZ2dsZUNsYXNzIiwiYXBwbHlGaWx0ZXJzIiwiJHdpZGdldCIsIiRtZW51IiwibG9hZGluZ19zY3JlZW4iLCJXUE9uaW9uX1dQX01vZGFsIiwiQmFja2JvbmUiLCJWaWV3IiwiZXh0ZW5kIiwidGVtcGxhdGVzIiwiZXZlbnRzIiwiYWN0aXZlX3BhZ2UiLCJhY3RpdmVfc2VjdGlvbiIsImluaXRpYWxpemUiLCJsZWZ0X21lbnUiLCJoaWRlX21lbnUiLCJiaW5kQWxsIiwiaW5pdF90ZW1wbGF0ZXMiLCJyZW5kZXIiLCIkbSIsImZyYW1lX21lbnVfaXRlbSIsInJvdXRlcl9tZW51X2l0ZW0iLCJwYWdlX2NvbnRlbnQiLCJzZWN0aW9uX2NvbnRlbnQiLCIkY29udGVudCIsIiRfY29udGVudCIsIiRfbWVudSIsInByZXNlcnZlRm9jdXMiLCJmb2N1cyIsImhhbmRsZV9sZWZ0X21lbnVfY2xpY2siLCIkdGFyZ2V0IiwiJHNob3dfdGFyZ2V0IiwiaGFuZGxlX3RhYl9jbGljayIsIiRwYWdlIiwiaGFzIiwidW5kZWxlZ2F0ZUV2ZW50cyIsIm9mZiIsInNhdmVNb2RhbCIsImRvTm90aGluZyIsIiRvcHRpb25zIiwibW9kYWwiLCJnZXRfbGVmdF9tZW51Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxt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ImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzXCIpO1xuIiwiY2xhc3MgSlNfUGFyc2VfQXJncyB7XHJcblx0Y29uc3RydWN0b3IoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfbmVzdGVkID0gZmFsc2UgKSB7XHJcblx0XHR0aGlzLmFyZ3MgICAgID0gJGFyZ3M7XHJcblx0XHR0aGlzLmRlZmF1bHRzID0gJGRlZmF1bHRzO1xyXG5cdFx0dGhpcy5uZXN0ZWQgICA9ICRpc19uZXN0ZWQ7XHJcblx0XHR0aGlzLnBhcnNlKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmdzO1xyXG5cdH1cclxuXHJcblx0cGFyc2UoKSB7XHJcblx0XHRmb3IoIGxldCAkX2tleSBpbiB0aGlzLmRlZmF1bHRzICkge1xyXG5cdFx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5uZXN0ZWQgJiYgdHlwZW9mICB0aGlzLmRlZmF1bHRzWyAkX2tleSBdID09PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0XHR0aGlzLmFyZ3NbICRfa2V5IF0gPSBuZXcgSlNfUGFyc2VfQXJncyggdGhpcy5hcmdzWyAkX2tleSBdLCB0aGlzLmRlZmF1bHRzWyAkX2tleSBdLCB0aGlzLm5lc3RlZCApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzWyAkX2tleSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IHRoaXMuZGVmYXVsdHNbICRfa2V5IF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfZGVlcCA9IGZhbHNlICkgPT4gbmV3IEpTX1BhcnNlX0FyZ3MoICRhcmdzLCAkZGVmYXVsdHMsICRpc19kZWVwICk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X21lcmdlKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2FycmF5X21lcmdlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IE5hdGVcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBqb3NoXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGFycjEgPSB7XCJjb2xvclwiOiBcInJlZFwiLCAwOiAyLCAxOiA0fVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIyID0gezA6IFwiYVwiLCAxOiBcImJcIiwgXCJjb2xvclwiOiBcImdyZWVuXCIsIFwic2hhcGVcIjogXCJ0cmFwZXpvaWRcIiwgMjogNH1cbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X21lcmdlKCRhcnIxLCAkYXJyMilcbiAgLy8gICByZXR1cm5zIDE6IHtcImNvbG9yXCI6IFwiZ3JlZW5cIiwgMDogMiwgMTogNCwgMjogXCJhXCIsIDM6IFwiYlwiLCBcInNoYXBlXCI6IFwidHJhcGV6b2lkXCIsIDQ6IDR9XG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGFycjEgPSBbXVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRhcnIyID0gezE6IFwiZGF0YVwifVxuICAvLyAgIGV4YW1wbGUgMjogYXJyYXlfbWVyZ2UoJGFycjEsICRhcnIyKVxuICAvLyAgIHJldHVybnMgMjogezA6IFwiZGF0YVwifVxuXG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgdmFyIGFyZ2wgPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGFyZztcbiAgdmFyIHJldE9iaiA9IHt9O1xuICB2YXIgayA9ICcnO1xuICB2YXIgYXJnaWwgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGN0ID0gMDtcbiAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIHJldEFyciA9IHRydWU7XG5cbiAgZm9yIChpID0gMDsgaSA8IGFyZ2w7IGkrKykge1xuICAgIGlmICh0b1N0ci5jYWxsKGFyZ3NbaV0pICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXRBcnIgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXRBcnIpIHtcbiAgICByZXRBcnIgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgICByZXRBcnIgPSByZXRBcnIuY29uY2F0KGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0QXJyO1xuICB9XG5cbiAgZm9yIChpID0gMCwgY3QgPSAwOyBpIDwgYXJnbDsgaSsrKSB7XG4gICAgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAodG9TdHIuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICBmb3IgKGogPSAwLCBhcmdpbCA9IGFyZy5sZW5ndGg7IGogPCBhcmdpbDsgaisrKSB7XG4gICAgICAgIHJldE9ialtjdCsrXSA9IGFyZ1tqXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrIGluIGFyZykge1xuICAgICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgaWYgKHBhcnNlSW50KGssIDEwKSArICcnID09PSBrKSB7XG4gICAgICAgICAgICByZXRPYmpbY3QrK10gPSBhcmdba107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldE9ialtrXSA9IGFyZ1trXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0T2JqO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5X21lcmdlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFycmF5X21lcmdlX3JlY3Vyc2l2ZShhcnIxLCBhcnIyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYXJyYXlfbWVyZ2VfcmVjdXJzaXZlL1xuICAvLyBvcmlnaW5hbCBieTogU3ViaGFzaXMgRGViXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkYXJyMSA9IHsnY29sb3InOiB7J2Zhdm9yaXRlJzogJ3JlZCd9LCAwOiA1fVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRhcnIyID0gezA6IDEwLCAnY29sb3InOiB7J2Zhdm9yaXRlJzogJ2dyZWVuJywgMDogJ2JsdWUnfX1cbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X21lcmdlX3JlY3Vyc2l2ZSgkYXJyMSwgJGFycjIpXG4gIC8vICAgcmV0dXJucyAxOiB7J2NvbG9yJzogeydmYXZvcml0ZSc6IHswOiAncmVkJywgMTogJ2dyZWVuJ30sIDA6ICdibHVlJ30sIDE6IDUsIDE6IDEwfVxuICAvLyAgICAgICAgdGVzdDogc2tpcC0xXG5cbiAgdmFyIGFycmF5TWVyZ2UgPSByZXF1aXJlKCcuLi9hcnJheS9hcnJheV9tZXJnZScpO1xuICB2YXIgaWR4ID0gJyc7XG5cbiAgaWYgKGFycjEgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycjEpID09PSAnW29iamVjdCBBcnJheV0nICYmIGFycjIgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycjIpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgZm9yIChpZHggaW4gYXJyMikge1xuICAgICAgYXJyMS5wdXNoKGFycjJbaWR4XSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFycjEgJiYgYXJyMSBpbnN0YW5jZW9mIE9iamVjdCAmJiBhcnIyICYmIGFycjIgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICBmb3IgKGlkeCBpbiBhcnIyKSB7XG4gICAgICBpZiAoaWR4IGluIGFycjEpIHtcbiAgICAgICAgaWYgKF90eXBlb2YoYXJyMVtpZHhdKSA9PT0gJ29iamVjdCcgJiYgKHR5cGVvZiBhcnIyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhcnIyKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYXJyMVtpZHhdID0gYXJyYXlNZXJnZShhcnIxW2lkeF0sIGFycjJbaWR4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyMVtpZHhdID0gYXJyMltpZHhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnIxW2lkeF0gPSBhcnIyW2lkeF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycjE7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlfbWVyZ2VfcmVjdXJzaXZlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcnJheV92YWx1ZXMoaW5wdXQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9hcnJheV92YWx1ZXMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGFycmF5X3ZhbHVlcygge2ZpcnN0bmFtZTogJ0tldmluJywgc3VybmFtZTogJ3ZhbiBab25uZXZlbGQnfSApXG4gIC8vICAgcmV0dXJucyAxOiBbICdLZXZpbicsICd2YW4gWm9ubmV2ZWxkJyBdXG5cbiAgdmFyIHRtcEFyciA9IFtdO1xuICB2YXIga2V5ID0gJyc7XG5cbiAgZm9yIChrZXkgaW4gaW5wdXQpIHtcbiAgICB0bXBBcnJbdG1wQXJyLmxlbmd0aF0gPSBpbnB1dFtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRtcEFycjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheV92YWx1ZXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvdW50KG1peGVkVmFyLCBtb2RlKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY291bnQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogV2FsZG8gTWFscXVpIFNpbHZhIChodHRwOi8vd2FsZG8ubWFscXVpLmluZm8pXG4gIC8vICAgIGlucHV0IGJ5OiBtZXJhYmlcbiAgLy8gYnVnZml4ZWQgYnk6IFNvcmVuIEhhbnNlblxuICAvLyBidWdmaXhlZCBieTogT2xpdmllciBMb3V2aWduZXMgKGh0dHA6Ly9tZy1jcmVhLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogY291bnQoW1swLDBdLFswLC00XV0sICdDT1VOVF9SRUNVUlNJVkUnKVxuICAvLyAgIHJldHVybnMgMTogNlxuICAvLyAgIGV4YW1wbGUgMjogY291bnQoeydvbmUnIDogWzEsMiwzLDQsNV19LCAnQ09VTlRfUkVDVVJTSVZFJylcbiAgLy8gICByZXR1cm5zIDI6IDZcblxuICB2YXIga2V5O1xuICB2YXIgY250ID0gMDtcblxuICBpZiAobWl4ZWRWYXIgPT09IG51bGwgfHwgdHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKG1peGVkVmFyLmNvbnN0cnVjdG9yICE9PSBBcnJheSAmJiBtaXhlZFZhci5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAobW9kZSA9PT0gJ0NPVU5UX1JFQ1VSU0lWRScpIHtcbiAgICBtb2RlID0gMTtcbiAgfVxuICBpZiAobW9kZSAhPT0gMSkge1xuICAgIG1vZGUgPSAwO1xuICB9XG5cbiAgZm9yIChrZXkgaW4gbWl4ZWRWYXIpIHtcbiAgICBpZiAobWl4ZWRWYXIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY250Kys7XG4gICAgICBpZiAobW9kZSA9PT0gMSAmJiBtaXhlZFZhcltrZXldICYmIChtaXhlZFZhcltrZXldLmNvbnN0cnVjdG9yID09PSBBcnJheSB8fCBtaXhlZFZhcltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKSB7XG4gICAgICAgIGNudCArPSBjb3VudChtaXhlZFZhcltrZXldLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY250O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvdW50LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbl9hcnJheShuZWVkbGUsIGhheXN0YWNrLCBhcmdTdHJpY3QpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbl9hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiB2bGFkbyBob3ViYVxuICAvLyBpbXByb3ZlZCBieTogSm9uYXMgU2NpYW5ndWxhIFN0cmVldCAoSm9uaTJCYWNrKVxuICAvLyAgICBpbnB1dCBieTogQmlsbHlcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBpbl9hcnJheSgndmFuJywgWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpbl9hcnJheSgndmxhZG8nLCB7MDogJ0tldmluJywgdmxhZG86ICd2YW4nLCAxOiAnWm9ubmV2ZWxkJ30pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddKVxuICAvLyAgIGV4YW1wbGUgMzogaW5fYXJyYXkoMSwgWycxJywgJzInLCAnMyddLCBmYWxzZSlcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGluX2FycmF5KDEsIFsnMScsICcyJywgJzMnXSwgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG5cbiAgdmFyIGtleSA9ICcnO1xuICB2YXIgc3RyaWN0ID0gISFhcmdTdHJpY3Q7XG5cbiAgLy8gd2UgcHJldmVudCB0aGUgZG91YmxlIGNoZWNrIChzdHJpY3QgJiYgYXJyW2tleV0gPT09IG5kbCkgfHwgKCFzdHJpY3QgJiYgYXJyW2tleV0gPT09IG5kbClcbiAgLy8gaW4ganVzdCBvbmUgZm9yLCBpbiBvcmRlciB0byBpbXByb3ZlIHRoZSBwZXJmb3JtYW5jZVxuICAvLyBkZWNpZGluZyB3aWNoIHR5cGUgb2YgY29tcGFyYXRpb24gd2lsbCBkbyBiZWZvcmUgd2FsayBhcnJheVxuICBpZiAoc3RyaWN0KSB7XG4gICAgZm9yIChrZXkgaW4gaGF5c3RhY2spIHtcbiAgICAgIGlmIChoYXlzdGFja1trZXldID09PSBuZWVkbGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoa2V5IGluIGhheXN0YWNrKSB7XG4gICAgICBpZiAoaGF5c3RhY2tba2V5XSA9PSBuZWVkbGUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluX2FycmF5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtaWNyb3RpbWUoZ2V0QXNGbG9hdCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21pY3JvdGltZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gaW1wcm92ZWQgYnk6IER1bWl0cnUgVXp1biAoaHR0cDovL2R1enVuLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICR0aW1lU3RhbXAgPSBtaWNyb3RpbWUodHJ1ZSlcbiAgLy8gICBleGFtcGxlIDE6ICR0aW1lU3RhbXAgPiAxMDAwMDAwMDAwICYmICR0aW1lU3RhbXAgPCAyMDAwMDAwMDAwXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiAvXjBcXC5bMC05XXsxLDZ9IFswLTldezEwLDEwfSQvLnRlc3QobWljcm90aW1lKCkpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG5cbiAgdmFyIHM7XG4gIHZhciBub3c7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG5vdyA9IChwZXJmb3JtYW5jZS5ub3coKSArIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWU2KSAvIDFlNiArICcgJyArIHM7XG4gIH0gZWxzZSB7XG4gICAgbm93ID0gKERhdGUubm93ID8gRGF0ZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlMykgLyAxZTMgKyAnICcgKyBzO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWljcm90aW1lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRpbWUoKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdGltZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEdlZWtGRyAoaHR0cDovL2dlZWtmZy5ibG9nc3BvdC5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogbWV0amF5XG4gIC8vIGltcHJvdmVkIGJ5OiBIS01cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gdGltZSgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICR0aW1lU3RhbXAgPiAxMDAwMDAwMDAwICYmICR0aW1lU3RhbXAgPCAyMDAwMDAwMDAwXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgcmV0dXJuIE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1lLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsX3VzZXJfZnVuYyhjYiwgcGFyYW1ldGVycykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NhbGxfdXNlcl9mdW5jL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kcyBvbiBjYWxsX3VzZXJfZnVuY19hcnJheSB3aGljaCBpbiB0dXJuIGRlcGVuZHMgb24gdGhlIGBjYmAgdGhhdCBpcyBwYXNzZWQsXG4gIC8vICAgICAgbm90ZSAxOiB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgYGV2YWxgLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jKCdpc05hTicsICdhJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICB2YXIgY2FsbFVzZXJGdW5jQXJyYXkgPSByZXF1aXJlKCcuLi9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScpO1xuICBwYXJhbWV0ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIGNhbGxVc2VyRnVuY0FycmF5KGNiLCBwYXJhbWV0ZXJzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxsX3VzZXJfZnVuYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsX3VzZXJfZnVuY19hcnJheShjYiwgcGFyYW1ldGVycykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NhbGxfdXNlcl9mdW5jX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogVGhpYWdvIE1hdGEgKGh0dHA6Ly90aGlhZ29tYXRhLmJsb2cuY29tKVxuICAvLyAgcmV2aXNlZCBieTogSm9uIEhvaGxlXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRpbmcgb24gdGhlIGBjYmAgdGhhdCBpcyBwYXNzZWQsXG4gIC8vICAgICAgbm90ZSAxOiB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgYGV2YWxgIGFuZC9vciBgbmV3IEZ1bmN0aW9uYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbJ2EnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsxXSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgdmFyIGZ1bmM7XG4gIHZhciBzY29wZSA9IG51bGw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIGlmICh0eXBlb2YgY2IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZnVuYyA9ICRnbG9iYWxbY2JdO1xuICAgIH0gZWxzZSBpZiAoY2IubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICBmdW5jID0gbmV3IEZ1bmN0aW9uKG51bGwsICdyZXR1cm4gJyArIGNiKSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy1mdW5jXG4gICAgfVxuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjYikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBmdW5jID0gZXZhbChjYlswXSArIFwiWydcIiArIGNiWzFdICsgXCInXVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMgPSBjYlswXVtjYlsxXV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYlswXV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2NvcGUgPSAkZ2xvYmFsW2NiWzBdXTtcbiAgICAgIH0gZWxzZSBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIHNjb3BlID0gZXZhbChjYlswXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3R5cGVvZihjYlswXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBzY29wZSA9IGNiWzBdO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmdW5jID0gY2I7XG4gIH1cblxuICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZnVuYyArICcgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jLmFwcGx5KHNjb3BlLCBwYXJhbWV0ZXJzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxsX3VzZXJfZnVuY19hcnJheS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlX2Z1bmN0aW9uKGFyZ3MsIGNvZGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NyZWF0ZV9mdW5jdGlvbi9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogSm9obm55IE1hc3QgKGh0dHA6Ly93d3cucGhwdnJvdXdlbi5ubClcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRmID0gY3JlYXRlX2Z1bmN0aW9uKCdhLCBiJywgJ3JldHVybiAoYSArIGIpJylcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogJGYoMSwgMilcbiAgLy8gICAgICAgIHJldHVybnMgMTogM1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLmFwcGx5KG51bGwsIGFyZ3Muc3BsaXQoJywnKS5jb25jYXQoY29kZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlX2Z1bmN0aW9uLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmdW5jdGlvbl9leGlzdHMoZnVuY05hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mdW5jdGlvbl9leGlzdHMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogU3RldmUgQ2xheVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGZ1bmN0aW9uX2V4aXN0cygnaXNGaW5pdGUnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgICAgICAgdGVzdDogc2tpcC0xXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICBpZiAodHlwZW9mIGZ1bmNOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGZ1bmNOYW1lID0gJGdsb2JhbFtmdW5jTmFtZV07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIGZ1bmNOYW1lID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZ1bmN0aW9uX2V4aXN0cy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5pX2dldCh2YXJuYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW5pX2dldC9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgaW5pIHZhbHVlcyBtdXN0IGJlIHNldCBieSBpbmlfc2V0IG9yIG1hbnVhbGx5IHdpdGhpbiBhbiBpbmkgZmlsZVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX3NldCgnZGF0ZS50aW1lem9uZScsICdBc2lhL0hvbmdfS29uZycpXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfZ2V0KCdkYXRlLnRpbWV6b25lJylcbiAgLy8gICByZXR1cm5zIDE6ICdBc2lhL0hvbmdfS29uZydcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuICAkbG9jdXR1cy5waHAuaW5pID0gJGxvY3V0dXMucGhwLmluaSB8fCB7fTtcblxuICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXSAmJiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmlfZ2V0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cGxvZGUoZGVsaW1pdGVyLCBzdHJpbmcsIGxpbWl0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZXhwbG9kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgZXhhbXBsZSAxOiBleHBsb2RlKCcgJywgJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogWyAnS2V2aW4nLCAndmFuJywgJ1pvbm5ldmVsZCcgXVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCB0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChkZWxpbWl0ZXIgPT09ICcnIHx8IGRlbGltaXRlciA9PT0gZmFsc2UgfHwgZGVsaW1pdGVyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZGVsaW1pdGVyID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkZWxpbWl0ZXIpKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHN0cmluZyA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHN0cmluZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc3RyaW5nKSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIDA6ICcnXG4gICAgfTtcbiAgfVxuICBpZiAoZGVsaW1pdGVyID09PSB0cnVlKSB7XG4gICAgZGVsaW1pdGVyID0gJzEnO1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBnby4uLlxuICBkZWxpbWl0ZXIgKz0gJyc7XG4gIHN0cmluZyArPSAnJztcblxuICB2YXIgcyA9IHN0cmluZy5zcGxpdChkZWxpbWl0ZXIpO1xuXG4gIGlmICh0eXBlb2YgbGltaXQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gcztcblxuICAvLyBTdXBwb3J0IGZvciBsaW1pdFxuICBpZiAobGltaXQgPT09IDApIGxpbWl0ID0gMTtcblxuICAvLyBQb3NpdGl2ZSBsaW1pdFxuICBpZiAobGltaXQgPiAwKSB7XG4gICAgaWYgKGxpbWl0ID49IHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgcmV0dXJuIHMuc2xpY2UoMCwgbGltaXQgLSAxKS5jb25jYXQoW3Muc2xpY2UobGltaXQgLSAxKS5qb2luKGRlbGltaXRlcildKTtcbiAgfVxuXG4gIC8vIE5lZ2F0aXZlIGxpbWl0XG4gIGlmICgtbGltaXQgPj0gcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzLnNwbGljZShzLmxlbmd0aCArIGxpbWl0KTtcbiAgcmV0dXJuIHM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwbG9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbXBsb2RlKGdsdWUsIHBpZWNlcykge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2ltcGxvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogV2FsZG8gTWFscXVpIFNpbHZhIChodHRwOi8vd2FsZG8ubWFscXVpLmluZm8pXG4gIC8vIGltcHJvdmVkIGJ5OiBJdHNhY29uIChodHRwOi8vd3d3Lml0c2Fjb24ubmV0LylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBpbXBsb2RlKCcgJywgWydLZXZpbicsICd2YW4nLCAnWm9ubmV2ZWxkJ10pXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IGltcGxvZGUoJyAnLCB7Zmlyc3Q6J0tldmluJywgbGFzdDogJ3ZhbiBab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDI6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIHZhciBpID0gJyc7XG4gIHZhciByZXRWYWwgPSAnJztcbiAgdmFyIHRHbHVlID0gJyc7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBwaWVjZXMgPSBnbHVlO1xuICAgIGdsdWUgPSAnJztcbiAgfVxuXG4gIGlmICgodHlwZW9mIHBpZWNlcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGllY2VzKSkgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwaWVjZXMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm4gcGllY2VzLmpvaW4oZ2x1ZSk7XG4gICAgfVxuICAgIGZvciAoaSBpbiBwaWVjZXMpIHtcbiAgICAgIHJldFZhbCArPSB0R2x1ZSArIHBpZWNlc1tpXTtcbiAgICAgIHRHbHVlID0gZ2x1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfVxuXG4gIHJldHVybiBwaWVjZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1wbG9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21kNS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiBLZWVwIGluIG1pbmQgdGhhdCBpbiBhY2NvcmRhbmNlIHdpdGggUEhQLCB0aGUgd2hvbGUgc3RyaW5nIGlzIGJ1ZmZlcmVkIGFuZCB0aGVuXG4gIC8vICAgICAgbm90ZSAxOiBoYXNoZWQuIElmIGF2YWlsYWJsZSwgd2UnZCByZWNvbW1lbmQgdXNpbmcgTm9kZSdzIG5hdGl2ZSBjcnlwdG8gbW9kdWxlcyBkaXJlY3RseVxuICAvLyAgICAgIG5vdGUgMTogaW4gYSBzdGVhbWluZyBmYXNoaW9uIGZvciBmYXN0ZXIgYW5kIG1vcmUgZWZmaWNpZW50IGhhc2hpbmdcbiAgLy8gICBleGFtcGxlIDE6IG1kNSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnNmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjknXG5cbiAgdmFyIGhhc2g7XG4gIHRyeSB7XG4gICAgdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIHZhciBtZDVzdW0gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgbWQ1c3VtLnVwZGF0ZShzdHIpO1xuICAgIGhhc2ggPSBtZDVzdW0uZGlnZXN0KCdoZXgnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB2YXIgdXRmOEVuY29kZSA9IHJlcXVpcmUoJy4uL3htbC91dGY4X2VuY29kZScpO1xuICB2YXIgeGw7XG5cbiAgdmFyIF9yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gX3JvdGF0ZUxlZnQobFZhbHVlLCBpU2hpZnRCaXRzKSB7XG4gICAgcmV0dXJuIGxWYWx1ZSA8PCBpU2hpZnRCaXRzIHwgbFZhbHVlID4+PiAzMiAtIGlTaGlmdEJpdHM7XG4gIH07XG5cbiAgdmFyIF9hZGRVbnNpZ25lZCA9IGZ1bmN0aW9uIF9hZGRVbnNpZ25lZChsWCwgbFkpIHtcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0O1xuICAgIGxYOCA9IGxYICYgMHg4MDAwMDAwMDtcbiAgICBsWTggPSBsWSAmIDB4ODAwMDAwMDA7XG4gICAgbFg0ID0gbFggJiAweDQwMDAwMDAwO1xuICAgIGxZNCA9IGxZICYgMHg0MDAwMDAwMDtcbiAgICBsUmVzdWx0ID0gKGxYICYgMHgzRkZGRkZGRikgKyAobFkgJiAweDNGRkZGRkZGKTtcbiAgICBpZiAobFg0ICYgbFk0KSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgfVxuICAgIGlmIChsWDQgfCBsWTQpIHtcbiAgICAgIGlmIChsUmVzdWx0ICYgMHg0MDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX0YgPSBmdW5jdGlvbiBfRih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB5IHwgfnggJiB6O1xuICB9O1xuICB2YXIgX0cgPSBmdW5jdGlvbiBfRyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB6IHwgeSAmIH56O1xuICB9O1xuICB2YXIgX0ggPSBmdW5jdGlvbiBfSCh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfTtcbiAgdmFyIF9JID0gZnVuY3Rpb24gX0koeCwgeSwgeikge1xuICAgIHJldHVybiB5IF4gKHggfCB+eik7XG4gIH07XG5cbiAgdmFyIF9GRiA9IGZ1bmN0aW9uIF9GRihhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRihiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9HRyA9IGZ1bmN0aW9uIF9HRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRyhiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9ISCA9IGZ1bmN0aW9uIF9ISChhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSChiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9JSSA9IGZ1bmN0aW9uIF9JSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSShiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9jb252ZXJ0VG9Xb3JkQXJyYXkgPSBmdW5jdGlvbiBfY29udmVydFRvV29yZEFycmF5KHN0cikge1xuICAgIHZhciBsV29yZENvdW50O1xuICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDIgPSAobE51bWJlck9mV29yZHNUZW1wMSAtIGxOdW1iZXJPZldvcmRzVGVtcDEgJSA2NCkgLyA2NDtcbiAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNUZW1wMiArIDEpICogMTY7XG4gICAgdmFyIGxXb3JkQXJyYXkgPSBuZXcgQXJyYXkobE51bWJlck9mV29yZHMgLSAxKTtcbiAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGxCeXRlQ291bnQgPSAwO1xuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCBzdHIuY2hhckNvZGVBdChsQnl0ZUNvdW50KSA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgICAgbEJ5dGVDb3VudCsrO1xuICAgIH1cbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAweDgwIDw8IGxCeXRlUG9zaXRpb247XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XG4gICAgcmV0dXJuIGxXb3JkQXJyYXk7XG4gIH07XG5cbiAgdmFyIF93b3JkVG9IZXggPSBmdW5jdGlvbiBfd29yZFRvSGV4KGxWYWx1ZSkge1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZSA9ICcnO1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnJztcbiAgICB2YXIgbEJ5dGU7XG4gICAgdmFyIGxDb3VudDtcblxuICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XG4gICAgICBsQnl0ZSA9IGxWYWx1ZSA+Pj4gbENvdW50ICogOCAmIDI1NTtcbiAgICAgIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcwJyArIGxCeXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgIHdvcmRUb0hleFZhbHVlID0gd29yZFRvSGV4VmFsdWUgKyB3b3JkVG9IZXhWYWx1ZVRlbXAuc3Vic3RyKHdvcmRUb0hleFZhbHVlVGVtcC5sZW5ndGggLSAyLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRUb0hleFZhbHVlO1xuICB9O1xuXG4gIHZhciB4ID0gW107XG4gIHZhciBrO1xuICB2YXIgQUE7XG4gIHZhciBCQjtcbiAgdmFyIENDO1xuICB2YXIgREQ7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgUzExID0gNztcbiAgdmFyIFMxMiA9IDEyO1xuICB2YXIgUzEzID0gMTc7XG4gIHZhciBTMTQgPSAyMjtcbiAgdmFyIFMyMSA9IDU7XG4gIHZhciBTMjIgPSA5O1xuICB2YXIgUzIzID0gMTQ7XG4gIHZhciBTMjQgPSAyMDtcbiAgdmFyIFMzMSA9IDQ7XG4gIHZhciBTMzIgPSAxMTtcbiAgdmFyIFMzMyA9IDE2O1xuICB2YXIgUzM0ID0gMjM7XG4gIHZhciBTNDEgPSA2O1xuICB2YXIgUzQyID0gMTA7XG4gIHZhciBTNDMgPSAxNTtcbiAgdmFyIFM0NCA9IDIxO1xuXG4gIHN0ciA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgeCA9IF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKTtcbiAgYSA9IDB4Njc0NTIzMDE7XG4gIGIgPSAweEVGQ0RBQjg5O1xuICBjID0gMHg5OEJBRENGRTtcbiAgZCA9IDB4MTAzMjU0NzY7XG5cbiAgeGwgPSB4Lmxlbmd0aDtcbiAgZm9yIChrID0gMDsgayA8IHhsOyBrICs9IDE2KSB7XG4gICAgQUEgPSBhO1xuICAgIEJCID0gYjtcbiAgICBDQyA9IGM7XG4gICAgREQgPSBkO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxXSwgUzEyLCAweEU4QzdCNzU2KTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzExLCAweEY1N0MwRkFGKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyA3XSwgUzE0LCAweEZENDY5NTAxKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFMxMywgMHhGRkZGNUJCMSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxM10sIFMxMiwgMHhGRDk4NzE5Myk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzIxLCAweEY2MUUyNTYyKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMF0sIFMyNCwgMHhFOUI2QzdBQSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMjMsIDB4RDhBMUU2ODEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgQUEpO1xuICAgIGIgPSBfYWRkVW5zaWduZWQoYiwgQkIpO1xuICAgIGMgPSBfYWRkVW5zaWduZWQoYywgQ0MpO1xuICAgIGQgPSBfYWRkVW5zaWduZWQoZCwgREQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBfd29yZFRvSGV4KGEpICsgX3dvcmRUb0hleChiKSArIF93b3JkVG9IZXgoYykgKyBfd29yZFRvSGV4KGQpO1xuXG4gIHJldHVybiB0ZW1wLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV9zdHIoc3RyLCBhcnJheSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2Vfc3RyL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBDYWdyaSBFa2luXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogc3RhZzAxOVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogWmFpZGUgKGh0dHA6Ly96YWlkZXN0aGluZ3MuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogRGF2aWQgUGVzdGEgKGh0dHA6Ly9kYXZpZHBlc3RhLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGplaWNxdWVzdFxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWQsIHdpbGwgcHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUuXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gYSBwYXJ0aWN1bGFyIGFyZ3VtZW50IGhhcyBiZWVuIHBhc3NlZCwgYW5kIHRoZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiByZXR1cm5lZCB2YWx1ZSBpcyBkaWZmZXJlbnQgcGFyc2Vfc3RyIG9mIFBIUC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogRm9yIGV4YW1wbGUsIGE9Yj1jJmQ9PT09Y1xuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3N0cignZmlyc3Q9Zm9vJnNlY29uZD1iYXInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMTogeyBmaXJzdDogJ2ZvbycsIHNlY29uZDogJ2JhcicgfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3N0cignc3RyX2E9SmFjaythbmQrSmlsbCtkaWRuJTI3dCtzZWUrdGhlK3dlbGwuJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHsgc3RyX2E6IFwiSmFjayBhbmQgSmlsbCBkaWRuJ3Qgc2VlIHRoZSB3ZWxsLlwiIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRhYmMgPSB7MzonYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3N0cignYVtiXVtcImNcIl09ZGVmJmFbcV09dCs1JywgJGFiYylcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkYWJjXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtcIjNcIjpcImFcIixcImFcIjp7XCJiXCI6e1wiY1wiOlwiZGVmXCJ9LFwicVwiOlwidCA1XCJ9fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3N0cignYVtdW109dmFsdWUnLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNDoge1wiYVwiOntcIjBcIjp7XCIwXCI6XCJ2YWx1ZVwifX19XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogcGFyc2Vfc3RyKCdhPTEmYVtdPTInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNToge1wiYVwiOntcIjBcIjpcIjJcIn19XG5cbiAgdmFyIHN0ckFyciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL14mLywgJycpLnJlcGxhY2UoLyYkLywgJycpLnNwbGl0KCcmJyk7XG4gIHZhciBzYWwgPSBzdHJBcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBjdDtcbiAgdmFyIHA7XG4gIHZhciBsYXN0T2JqO1xuICB2YXIgb2JqO1xuICB2YXIgY2hyO1xuICB2YXIgdG1wO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBwb3N0TGVmdEJyYWNrZXRQb3M7XG4gIHZhciBrZXlzO1xuICB2YXIga2V5c0xlbjtcblxuICB2YXIgX2ZpeFN0ciA9IGZ1bmN0aW9uIF9maXhTdHIoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gIH07XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgYXJyYXkgPSAkZ2xvYmFsO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNhbDsgaSsrKSB7XG4gICAgdG1wID0gc3RyQXJyW2ldLnNwbGl0KCc9Jyk7XG4gICAga2V5ID0gX2ZpeFN0cih0bXBbMF0pO1xuICAgIHZhbHVlID0gdG1wLmxlbmd0aCA8IDIgPyAnJyA6IF9maXhTdHIodG1wWzFdKTtcblxuICAgIHdoaWxlIChrZXkuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJ1xceDAwJykgPiAtMSkge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCdcXHgwMCcpKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICYmIGtleS5jaGFyQXQoMCkgIT09ICdbJykge1xuICAgICAga2V5cyA9IFtdO1xuICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ1snICYmICFwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSBqICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY2hhckF0KGopID09PSAnXScpIHtcbiAgICAgICAgICBpZiAocG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc2xpY2UoMCwgcG9zdExlZnRCcmFja2V0UG9zIC0gMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cihwb3N0TGVmdEJyYWNrZXRQb3MsIGogLSBwb3N0TGVmdEJyYWNrZXRQb3MpKTtcbiAgICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGogKyAxKSAhPT0gJ1snKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleXNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY2hyID0ga2V5c1swXS5jaGFyQXQoaik7XG5cbiAgICAgICAgaWYgKGNociA9PT0gJyAnIHx8IGNociA9PT0gJy4nIHx8IGNociA9PT0gJ1snKSB7XG4gICAgICAgICAga2V5c1swXSA9IGtleXNbMF0uc3Vic3RyKDAsIGopICsgJ18nICsga2V5c1swXS5zdWJzdHIoaiArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNociA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqID0gYXJyYXk7XG5cbiAgICAgIGZvciAoaiA9IDAsIGtleXNMZW4gPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW47IGorKykge1xuICAgICAgICBrZXkgPSBrZXlzW2pdLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgICAgIGxhc3RPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKChrZXkgPT09ICcnIHx8IGtleSA9PT0gJyAnKSAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgLy8gSW5zZXJ0IG5ldyBkaW1lbnNpb25cbiAgICAgICAgICBjdCA9IC0xO1xuXG4gICAgICAgICAgZm9yIChwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICBpZiAoK3AgPiBjdCAmJiBwLm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgICAgICAgICAgICBjdCA9ICtwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gY3QgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJpbWl0aXZlIHZhbHVlLCByZXBsYWNlIHdpdGggb2JqZWN0XG4gICAgICAgIGlmIChPYmplY3Qob2JqW2tleV0pICE9PSBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGFzdE9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vfc3RyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cl9yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZSwgc3ViamVjdCwgY291bnRPYmopIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJfcmVwbGFjZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBHYWJyaWVsIFBhZGVybmlcbiAgLy8gaW1wcm92ZWQgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyBpbXByb3ZlZCBieTogU2ltb24gV2lsbGlzb24gKGh0dHA6Ly9zaW1vbndpbGxpc29uLm5ldClcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgcmV2aXNlZCBieTogSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIChodHRwOi8vd3d3LmpzZnJvbWhlbGwuY29tKVxuICAvLyBidWdmaXhlZCBieTogQW50b24gT25nc29uXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogT2xlZyBFcmVtZWV2XG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBHbGVuIEFyYXNvbiAoaHR0cDovL0NhbmFkaWFuRG9tYWluUmVnaXN0cnkuY2EpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBHbGVuIEFyYXNvbiAoaHR0cDovL0NhbmFkaWFuRG9tYWluUmVnaXN0cnkuY2EpXG4gIC8vICAgIGlucHV0IGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogT2xlZyBFcmVtZWV2XG4gIC8vICAgICAgbm90ZSAxOiBUaGUgY291bnRPYmogcGFyYW1ldGVyIChvcHRpb25hbCkgaWYgdXNlZCBtdXN0IGJlIHBhc3NlZCBpbiBhcyBhXG4gIC8vICAgICAgbm90ZSAxOiBvYmplY3QuIFRoZSBjb3VudCB3aWxsIHRoZW4gYmUgd3JpdHRlbiBieSByZWZlcmVuY2UgaW50byBpdCdzIGB2YWx1ZWAgcHJvcGVydHlcbiAgLy8gICBleGFtcGxlIDE6IHN0cl9yZXBsYWNlKCcgJywgJy4nLCAnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4udmFuLlpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IHN0cl9yZXBsYWNlKFsne25hbWV9JywgJ2wnXSwgWydoZWxsbycsICdtJ10sICd7bmFtZX0sIGxhcnMnKVxuICAvLyAgIHJldHVybnMgMjogJ2hlbW1vLCBtYXJzJ1xuICAvLyAgIGV4YW1wbGUgMzogc3RyX3JlcGxhY2UoQXJyYXkoJ1MnLCdGJyksJ3gnLCdBU0RGQVNERicpXG4gIC8vICAgcmV0dXJucyAzOiAnQXhEeEF4RHgnXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgY291bnRPYmogPSB7fVxuICAvLyAgIGV4YW1wbGUgNDogc3RyX3JlcGxhY2UoWydBJywnRCddLCBbJ3gnLCd5J10gLCAnQVNERkFTREYnICwgY291bnRPYmopXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9IGNvdW50T2JqLnZhbHVlXG4gIC8vICAgcmV0dXJucyA0OiA0XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciB0ZW1wID0gJyc7XG4gIHZhciByZXBsID0gJyc7XG4gIHZhciBzbCA9IDA7XG4gIHZhciBmbCA9IDA7XG4gIHZhciBmID0gW10uY29uY2F0KHNlYXJjaCk7XG4gIHZhciByID0gW10uY29uY2F0KHJlcGxhY2UpO1xuICB2YXIgcyA9IHN1YmplY3Q7XG4gIHZhciByYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgdmFyIHNhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHMpID09PSAnW29iamVjdCBBcnJheV0nO1xuICBzID0gW10uY29uY2F0KHMpO1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG5cbiAgaWYgKCh0eXBlb2Ygc2VhcmNoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWFyY2gpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlcGxhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgdGVtcCA9IHJlcGxhY2U7XG4gICAgcmVwbGFjZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzZWFyY2gubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJlcGxhY2VbaV0gPSB0ZW1wO1xuICAgIH1cbiAgICB0ZW1wID0gJyc7XG4gICAgciA9IFtdLmNvbmNhdChyZXBsYWNlKTtcbiAgICByYSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgY291bnRPYmogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY291bnRPYmoudmFsdWUgPSAwO1xuICB9XG5cbiAgZm9yIChpID0gMCwgc2wgPSBzLmxlbmd0aDsgaSA8IHNsOyBpKyspIHtcbiAgICBpZiAoc1tpXSA9PT0gJycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKGogPSAwLCBmbCA9IGYubGVuZ3RoOyBqIDwgZmw7IGorKykge1xuICAgICAgdGVtcCA9IHNbaV0gKyAnJztcbiAgICAgIHJlcGwgPSByYSA/IHJbal0gIT09IHVuZGVmaW5lZCA/IHJbal0gOiAnJyA6IHJbMF07XG4gICAgICBzW2ldID0gdGVtcC5zcGxpdChmW2pdKS5qb2luKHJlcGwpO1xuICAgICAgaWYgKHR5cGVvZiBjb3VudE9iaiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY291bnRPYmoudmFsdWUgKz0gdGVtcC5zcGxpdChmW2pdKS5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2EgPyBzIDogc1swXTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJfcmVwbGFjZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RydG9sb3dlcihzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJ0b2xvd2VyL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICBleGFtcGxlIDE6IHN0cnRvbG93ZXIoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ2tldmluIHZhbiB6b25uZXZlbGQnXG5cbiAgcmV0dXJuIChzdHIgKyAnJykudG9Mb3dlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJ0b2xvd2VyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJ0b3VwcGVyKHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cnRvdXBwZXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgIGV4YW1wbGUgMTogc3RydG91cHBlcignS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS0VWSU4gVkFOIFpPTk5FVkVMRCdcblxuICByZXR1cm4gKHN0ciArICcnKS50b1VwcGVyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnRvdXBwZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9kZWNvZGUoZW5jb2RlZERhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZGVjb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEFtYW4gR3VwdGFcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZGVjb2RlKCdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09JylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2RlY29kZSgnWVE9PScpXG4gIC8vICAgcmV0dXJucyAyOiAnYSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9kZWNvZGUoJzRweVRJTU9nSUd4aElHMXZaR1U9JylcbiAgLy8gICByZXR1cm5zIDM6ICfinJMgw6AgbGEgbW9kZSdcblxuICAvLyBkZWNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZGVjb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGRlY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBkZWNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hdG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcod2luZG93LmF0b2IoZW5jb2RlZERhdGEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5jb2RlZERhdGEsICdiYXNlNjQnKS50b1N0cmluZygndXRmLTgnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBkZWMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlZERhdGE7XG4gIH1cblxuICBlbmNvZGVkRGF0YSArPSAnJztcblxuICBkbyB7XG4gICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcbiAgICBoMSA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMiA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMyA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoNCA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcblxuICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuXG4gICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcbiAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XG4gICAgbzMgPSBiaXRzICYgMHhmZjtcblxuICAgIGlmIChoMyA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xuICAgIH0gZWxzZSBpZiAoaDQgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgZW5jb2RlZERhdGEubGVuZ3RoKTtcblxuICBkZWMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZW5jb2RlKHN0cmluZ1RvRW5jb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJheXJvbiBHdWV2YXJhXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PSdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9lbmNvZGUoJ2EnKVxuICAvLyAgIHJldHVybnMgMjogJ1lRPT0nXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZW5jb2RlKCfinJMgw6AgbGEgbW9kZScpXG4gIC8vICAgcmV0dXJucyAzOiAnNHB5VElNT2dJR3hoSUcxdlpHVT0nXG5cbiAgLy8gZW5jb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGVuY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBlbmNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZW5jb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBmaXJzdCB3ZSB1c2UgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGdldCBwZXJjZW50LWVuY29kZWQgVVRGLTgsXG4gICAgLy8gdGhlbiB3ZSBjb252ZXJ0IHRoZSBwZXJjZW50IGVuY29kaW5ncyBpbnRvIHJhdyBieXRlcyB3aGljaFxuICAgIC8vIGNhbiBiZSBmZWQgaW50byB0aGUgYmFzZTY0IGVuY29kaW5nIGFsZ29yaXRobS5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5idG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nVG9FbmNvZGUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBlbmMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghc3RyaW5nVG9FbmNvZGUpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9FbmNvZGU7XG4gIH1cblxuICBzdHJpbmdUb0VuY29kZSA9IGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpO1xuXG4gIGRvIHtcbiAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXG4gICAgbzEgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzIgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzMgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICBiaXRzID0gbzEgPDwgMTYgfCBvMiA8PCA4IHwgbzM7XG5cbiAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xuICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XG4gICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xuICAgIGg0ID0gYml0cyAmIDB4M2Y7XG5cbiAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xuICAgIHRtcEFyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xuICB9IHdoaWxlIChpIDwgc3RyaW5nVG9FbmNvZGUubGVuZ3RoKTtcblxuICBlbmMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgdmFyIHIgPSBzdHJpbmdUb0VuY29kZS5sZW5ndGggJSAzO1xuXG4gIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBib29sdmFsKG1peGVkVmFyKSB7XG4gIC8vIG9yaWdpbmFsIGJ5OiBXaWxsIFJvd2VcbiAgLy8gICBleGFtcGxlIDE6IGJvb2x2YWwodHJ1ZSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGJvb2x2YWwoZmFsc2UpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogYm9vbHZhbCgwKVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDQ6IGJvb2x2YWwoMC4wKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGJvb2x2YWwoJycpXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNjogYm9vbHZhbCgnMCcpXG4gIC8vICAgcmV0dXJucyA2OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNzogYm9vbHZhbChbXSlcbiAgLy8gICByZXR1cm5zIDc6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA4OiBib29sdmFsKCcnKVxuICAvLyAgIHJldHVybnMgODogZmFsc2VcbiAgLy8gICBleGFtcGxlIDk6IGJvb2x2YWwobnVsbClcbiAgLy8gICByZXR1cm5zIDk6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAxMDogYm9vbHZhbCh1bmRlZmluZWQpXG4gIC8vICAgcmV0dXJucyAxMDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDExOiBib29sdmFsKCd0cnVlJylcbiAgLy8gICByZXR1cm5zIDExOiB0cnVlXG5cbiAgaWYgKG1peGVkVmFyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gMCB8fCBtaXhlZFZhciA9PT0gMC4wKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSAnJyB8fCBtaXhlZFZhciA9PT0gJzAnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWl4ZWRWYXIpICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gbnVsbCB8fCBtaXhlZFZhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vbHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbXB0eShtaXhlZFZhcikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2VtcHR5L1xuICAvLyBvcmlnaW5hbCBieTogUGhpbGlwcGUgQmF1bWFublxuICAvLyAgICBpbnB1dCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICBpbnB1dCBieTogTEhcbiAgLy8gICAgaW5wdXQgYnk6IFN0b3lhbiBLeW9zZXYgKGh0dHA6Ly93d3cuc3Zlc3Qub3JnLylcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBGcmFuY2VzY29cbiAgLy8gaW1wcm92ZWQgYnk6IE1hcmMgSmFuc2VuXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogZW1wdHkobnVsbClcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGVtcHR5KHVuZGVmaW5lZClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IGVtcHR5KFtdKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgNDogZW1wdHkoe30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG4gIC8vICAgZXhhbXBsZSA1OiBlbXB0eSh7J2FGdW5jJyA6IGZ1bmN0aW9uICgpIHsgYWxlcnQoJ2h1bXB0eScpOyB9IH0pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuXG4gIHZhciB1bmRlZjtcbiAgdmFyIGtleTtcbiAgdmFyIGk7XG4gIHZhciBsZW47XG4gIHZhciBlbXB0eVZhbHVlcyA9IFt1bmRlZiwgbnVsbCwgZmFsc2UsIDAsICcnLCAnMCddO1xuXG4gIGZvciAoaSA9IDAsIGxlbiA9IGVtcHR5VmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKG1peGVkVmFyID09PSBlbXB0eVZhbHVlc1tpXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChrZXkgaW4gbWl4ZWRWYXIpIHtcbiAgICAgIGlmIChtaXhlZFZhci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxvYXR2YWwobWl4ZWRWYXIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mbG9hdHZhbC9cbiAgLy8gb3JpZ2luYWwgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIG5hdGl2ZSBwYXJzZUZsb2F0KCkgbWV0aG9kIG9mIEphdmFTY3JpcHQgcmV0dXJucyBOYU5cbiAgLy8gICAgICBub3RlIDE6IHdoZW4gaXQgZW5jb3VudGVycyBhIHN0cmluZyBiZWZvcmUgYW4gaW50IG9yIGZsb2F0IHZhbHVlLlxuICAvLyAgIGV4YW1wbGUgMTogZmxvYXR2YWwoJzE1MC4wM19wYWdlLXNlY3Rpb24nKVxuICAvLyAgIHJldHVybnMgMTogMTUwLjAzXG4gIC8vICAgZXhhbXBsZSAyOiBmbG9hdHZhbCgncGFnZTogMycpXG4gIC8vICAgZXhhbXBsZSAyOiBmbG9hdHZhbCgnLTUwICsgOCcpXG4gIC8vICAgcmV0dXJucyAyOiAwXG4gIC8vICAgcmV0dXJucyAyOiAtNTBcblxuICByZXR1cm4gcGFyc2VGbG9hdChtaXhlZFZhcikgfHwgMDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbG9hdHZhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXR0eXBlKG1peGVkVmFyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZ2V0dHlwZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBEb3VnbGFzIENyb2NrZm9yZCAoaHR0cDovL2phdmFzY3JpcHQuY3JvY2tmb3JkLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBLRUxBTlxuICAvLyAgICAgIG5vdGUgMTogMS4wIGlzIHNpbXBsaWZpZWQgdG8gMSBiZWZvcmUgaXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBmdW5jdGlvbiwgdGhpcyBtYWtlc1xuICAvLyAgICAgIG5vdGUgMTogaXQgZGlmZmVyZW50IGZyb20gdGhlIFBIUCBpbXBsZW1lbnRhdGlvbi4gV2UgY2FuJ3QgZml4IHRoaXMgdW5mb3J0dW5hdGVseS5cbiAgLy8gICBleGFtcGxlIDE6IGdldHR5cGUoMSlcbiAgLy8gICByZXR1cm5zIDE6ICdpbnRlZ2VyJ1xuICAvLyAgIGV4YW1wbGUgMjogZ2V0dHlwZSh1bmRlZmluZWQpXG4gIC8vICAgcmV0dXJucyAyOiAndW5kZWZpbmVkJ1xuICAvLyAgIGV4YW1wbGUgMzogZ2V0dHlwZSh7MDogJ0tldmluIHZhbiBab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDM6ICdvYmplY3QnXG4gIC8vICAgZXhhbXBsZSA0OiBnZXR0eXBlKCdmb28nKVxuICAvLyAgIHJldHVybnMgNDogJ3N0cmluZydcbiAgLy8gICBleGFtcGxlIDU6IGdldHR5cGUoezA6IGZ1bmN0aW9uICgpIHtyZXR1cm4gZmFsc2U7fX0pXG4gIC8vICAgcmV0dXJucyA1OiAnb2JqZWN0J1xuICAvLyAgIGV4YW1wbGUgNjogZ2V0dHlwZSh7MDogJ3Rlc3QnLCBsZW5ndGg6IDEsIHNwbGljZTogZnVuY3Rpb24gKCkge319KVxuICAvLyAgIHJldHVybnMgNjogJ29iamVjdCdcbiAgLy8gICBleGFtcGxlIDc6IGdldHR5cGUoWyd0ZXN0J10pXG4gIC8vICAgcmV0dXJucyA3OiAnYXJyYXknXG5cbiAgdmFyIGlzRmxvYXQgPSByZXF1aXJlKCcuLi92YXIvaXNfZmxvYXQnKTtcblxuICB2YXIgcyA9IHR5cGVvZiBtaXhlZFZhciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWl4ZWRWYXIpO1xuICB2YXIgbmFtZTtcbiAgdmFyIF9nZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIF9nZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcblxuICBpZiAocyA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAobWl4ZWRWYXIgIT09IG51bGwpIHtcbiAgICAgIC8vIEZyb206IGh0dHA6Ly9qYXZhc2NyaXB0LmNyb2NrZm9yZC5jb20vcmVtZWRpYWwuaHRtbFxuICAgICAgLy8gQHRvZG86IEJyZWFrIHVwIHRoaXMgbGVuZ3RoeSBpZiBzdGF0ZW1lbnRcbiAgICAgIGlmICh0eXBlb2YgbWl4ZWRWYXIubGVuZ3RoID09PSAnbnVtYmVyJyAmJiAhbWl4ZWRWYXIucHJvcGVydHlJc0VudW1lcmFibGUoJ2xlbmd0aCcpICYmIHR5cGVvZiBtaXhlZFZhci5zcGxpY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKG1peGVkVmFyLmNvbnN0cnVjdG9yICYmIF9nZXRGdW5jTmFtZShtaXhlZFZhci5jb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgbmFtZSA9IF9nZXRGdW5jTmFtZShtaXhlZFZhci5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChuYW1lID09PSAnRGF0ZScpIHtcbiAgICAgICAgICAvLyBub3QgaW4gUEhQXG4gICAgICAgICAgcyA9ICdkYXRlJztcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnUmVnRXhwJykge1xuICAgICAgICAgIC8vIG5vdCBpbiBQSFBcbiAgICAgICAgICBzID0gJ3JlZ2V4cCc7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0xPQ1VUVVNfUmVzb3VyY2UnKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgYWdhaW5zdCBvdXIgb3duIHJlc291cmNlIGNvbnN0cnVjdG9yXG4gICAgICAgICAgcyA9ICdyZXNvdXJjZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcyA9ICdudWxsJztcbiAgICB9XG4gIH0gZWxzZSBpZiAocyA9PT0gJ251bWJlcicpIHtcbiAgICBzID0gaXNGbG9hdChtaXhlZFZhcikgPyAnZG91YmxlJyA6ICdpbnRlZ2VyJztcbiAgfVxuXG4gIHJldHVybiBzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldHR5cGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW50dmFsKG1peGVkVmFyLCBiYXNlKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW50dmFsL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHN0ZW5zaVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgICBpbnB1dCBieTogTWF0dGVvXG4gIC8vICAgZXhhbXBsZSAxOiBpbnR2YWwoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogMFxuICAvLyAgIGV4YW1wbGUgMjogaW50dmFsKDQuMilcbiAgLy8gICByZXR1cm5zIDI6IDRcbiAgLy8gICBleGFtcGxlIDM6IGludHZhbCg0MiwgOClcbiAgLy8gICByZXR1cm5zIDM6IDQyXG4gIC8vICAgZXhhbXBsZSA0OiBpbnR2YWwoJzA5JylcbiAgLy8gICByZXR1cm5zIDQ6IDlcbiAgLy8gICBleGFtcGxlIDU6IGludHZhbCgnMWUnLCAxNilcbiAgLy8gICByZXR1cm5zIDU6IDMwXG4gIC8vICAgZXhhbXBsZSA2OiBpbnR2YWwoMHgyMDAwMDAwMDEpXG4gIC8vICAgcmV0dXJucyA2OiA4NTg5OTM0NTkzXG4gIC8vICAgZXhhbXBsZSA3OiBpbnR2YWwoJzB4ZmYnLCAwKVxuICAvLyAgIHJldHVybnMgNzogMjU1XG4gIC8vICAgZXhhbXBsZSA4OiBpbnR2YWwoJzAxMCcsIDApXG4gIC8vICAgcmV0dXJucyA4OiA4XG5cbiAgdmFyIHRtcCwgbWF0Y2g7XG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKTtcblxuICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuICttaXhlZFZhcjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChiYXNlID09PSAwKSB7XG4gICAgICBtYXRjaCA9IG1peGVkVmFyLm1hdGNoKC9eXFxzKjAoeD8pL2kpO1xuICAgICAgYmFzZSA9IG1hdGNoID8gbWF0Y2hbMV0gPyAxNiA6IDggOiAxMDtcbiAgICB9XG4gICAgdG1wID0gcGFyc2VJbnQobWl4ZWRWYXIsIGJhc2UgfHwgMTApO1xuICAgIHJldHVybiBpc05hTih0bXApIHx8ICFpc0Zpbml0ZSh0bXApID8gMCA6IHRtcDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShtaXhlZFZhcikpIHtcbiAgICByZXR1cm4gbWl4ZWRWYXIgPCAwID8gTWF0aC5jZWlsKG1peGVkVmFyKSA6IE1hdGguZmxvb3IobWl4ZWRWYXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50dmFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2FycmF5KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IE5hdGhhbiBTZXB1bHZlZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBDb3JkXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBNYW5pc2hcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBJbiBMb2N1dHVzLCBqYXZhc2NyaXB0IG9iamVjdHMgYXJlIGxpa2UgcGhwIGFzc29jaWF0aXZlIGFycmF5cyxcbiAgLy8gICAgICBub3RlIDE6IHRodXMgSmF2YVNjcmlwdCBvYmplY3RzIHdpbGwgYWxzb1xuICAvLyAgICAgIG5vdGUgMTogcmV0dXJuIHRydWUgaW4gdGhpcyBmdW5jdGlvbiAoZXhjZXB0IGZvciBvYmplY3RzIHdoaWNoIGluaGVyaXQgcHJvcGVydGllcyxcbiAgLy8gICAgICBub3RlIDE6IGJlaW5nIHRodXMgdXNlZCBhcyBvYmplY3RzKSxcbiAgLy8gICAgICBub3RlIDE6IHVubGVzcyB5b3UgZG8gaW5pX3NldCgnbG9jdXR1cy5vYmplY3RzQXNBcnJheXMnLCAwKSxcbiAgLy8gICAgICBub3RlIDE6IGluIHdoaWNoIGNhc2Ugb25seSBnZW51aW5lIEphdmFTY3JpcHQgYXJyYXlzXG4gIC8vICAgICAgbm90ZSAxOiB3aWxsIHJldHVybiB0cnVlXG4gIC8vICAgZXhhbXBsZSAxOiBpc19hcnJheShbJ0tldmluJywgJ3ZhbicsICdab25uZXZlbGQnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2FycmF5KCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19hcnJheSh7MDogJ0tldmluJywgMTogJ3ZhbicsIDI6ICdab25uZXZlbGQnfSlcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGluaV9zZXQoJ2xvY3V0dXMub2JqZWN0c0FzQXJyYXlzJywgMClcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2FycmF5KHswOiAnS2V2aW4nLCAxOiAndmFuJywgMjogJ1pvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGlzX2FycmF5KGZ1bmN0aW9uIHRtcF9hICgpeyB0aGlzLm5hbWUgPSAnS2V2aW4nIH0pXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuXG4gIHZhciBfZ2V0RnVuY05hbWUgPSBmdW5jdGlvbiBfZ2V0RnVuY05hbWUoZm4pIHtcbiAgICB2YXIgbmFtZSA9IC9cXFcqZnVuY3Rpb25cXHMrKFtcXHckXSspXFxzKlxcKC8uZXhlYyhmbik7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gJyhBbm9ueW1vdXMpJztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVbMV07XG4gIH07XG4gIHZhciBfaXNBcnJheSA9IGZ1bmN0aW9uIF9pc0FycmF5KG1peGVkVmFyKSB7XG4gICAgLy8gcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgLy8gVGhlIGFib3ZlIHdvcmtzLCBidXQgbGV0J3MgZG8gdGhlIGV2ZW4gbW9yZSBzdHJpbmdlbnQgYXBwcm9hY2g6XG4gICAgLy8gKHNpbmNlIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgY291bGQgYmUgb3ZlcnJpZGRlbilcbiAgICAvLyBOdWxsLCBOb3QgYW4gb2JqZWN0LCBubyBsZW5ndGggcHJvcGVydHkgc28gY291bGRuJ3QgYmUgYW4gQXJyYXkgKG9yIFN0cmluZylcbiAgICBpZiAoIW1peGVkVmFyIHx8ICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBtaXhlZFZhci5sZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBsZW4gPSBtaXhlZFZhci5sZW5ndGg7XG4gICAgbWl4ZWRWYXJbbWl4ZWRWYXIubGVuZ3RoXSA9ICdib2d1cyc7XG4gICAgLy8gVGhlIG9ubHkgd2F5IEkgY2FuIHRoaW5rIG9mIHRvIGdldCBhcm91bmQgdGhpcyAob3Igd2hlcmUgdGhlcmUgd291bGQgYmUgdHJvdWJsZSlcbiAgICAvLyB3b3VsZCBiZSB0byBoYXZlIGFuIG9iamVjdCBkZWZpbmVkXG4gICAgLy8gd2l0aCBhIGN1c3RvbSBcImxlbmd0aFwiIGdldHRlciB3aGljaCBjaGFuZ2VkIGJlaGF2aW9yIG9uIGVhY2ggY2FsbFxuICAgIC8vIChvciBhIHNldHRlciB0byBtZXNzIHVwIHRoZSBmb2xsb3dpbmcgYmVsb3cpIG9yIGEgY3VzdG9tXG4gICAgLy8gc2V0dGVyIGZvciBudW1lcmljIHByb3BlcnRpZXMsIGJ1dCBldmVuIHRoYXQgd291bGQgbmVlZCB0byBsaXN0ZW4gZm9yXG4gICAgLy8gc3BlY2lmaWMgaW5kZXhlczsgYnV0IHRoZXJlIHNob3VsZCBiZSBubyBmYWxzZSBuZWdhdGl2ZXNcbiAgICAvLyBhbmQgc3VjaCBhIGZhbHNlIHBvc2l0aXZlIHdvdWxkIG5lZWQgdG8gcmVseSBvbiBsYXRlciBKYXZhU2NyaXB0XG4gICAgLy8gaW5ub3ZhdGlvbnMgbGlrZSBfX2RlZmluZVNldHRlcl9fXG4gICAgaWYgKGxlbiAhPT0gbWl4ZWRWYXIubGVuZ3RoKSB7XG4gICAgICAvLyBXZSBrbm93IGl0J3MgYW4gYXJyYXkgc2luY2UgbGVuZ3RoIGF1dG8tY2hhbmdlZCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBhXG4gICAgICAvLyBudW1lcmljIHByb3BlcnR5IGF0IGl0cyBsZW5ndGggZW5kLCBzbyBzYWZlbHkgZ2V0IHJpZCBvZiBvdXIgYm9ndXMgZWxlbWVudFxuICAgICAgbWl4ZWRWYXIubGVuZ3RoIC09IDE7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gR2V0IHJpZCBvZiB0aGUgcHJvcGVydHkgd2UgYWRkZWQgb250byBhIG5vbi1hcnJheSBvYmplY3Q7IG9ubHkgcG9zc2libGVcbiAgICAvLyBzaWRlLWVmZmVjdCBpcyBpZiB0aGUgdXNlciBhZGRzIGJhY2sgdGhlIHByb3BlcnR5IGxhdGVyLCBpdCB3aWxsIGl0ZXJhdGVcbiAgICAvLyB0aGlzIHByb3BlcnR5IGluIHRoZSBvbGRlciBvcmRlciBwbGFjZW1lbnQgaW4gSUUgKGFuIG9yZGVyIHdoaWNoIHNob3VsZCBub3RcbiAgICAvLyBiZSBkZXBlbmRlZCBvbiBhbnl3YXlzKVxuICAgIGRlbGV0ZSBtaXhlZFZhclttaXhlZFZhci5sZW5ndGhdO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBpZiAoIW1peGVkVmFyIHx8ICh0eXBlb2YgbWl4ZWRWYXIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1peGVkVmFyKSkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheShtaXhlZFZhcik7XG5cbiAgaWYgKGlzQXJyYXkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpbmlWYWwgPSAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnLi4vaW5mby9pbmlfZ2V0JykoJ2xvY3V0dXMub2JqZWN0c0FzQXJyYXlzJykgOiB1bmRlZmluZWQpIHx8ICdvbic7XG4gIGlmIChpbmlWYWwgPT09ICdvbicpIHtcbiAgICB2YXIgYXNTdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpO1xuICAgIHZhciBhc0Z1bmMgPSBfZ2V0RnVuY05hbWUobWl4ZWRWYXIuY29uc3RydWN0b3IpO1xuXG4gICAgaWYgKGFzU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyAmJiBhc0Z1bmMgPT09ICdPYmplY3QnKSB7XG4gICAgICAvLyBNb3N0IGxpa2VseSBhIGxpdGVyYWwgYW5kIGludGVuZGVkIGFzIGFzc29jLiBhcnJheVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2Jvb2wobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19ib29sL1xuICAvLyBvcmlnaW5hbCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQ291cnNlc1dlYiAoaHR0cDovL3d3dy5jb3Vyc2Vzd2ViLm5ldC8pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19ib29sKGZhbHNlKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfYm9vbCgwKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09IHRydWUgfHwgbWl4ZWRWYXIgPT09IGZhbHNlOyAvLyBGYXN0ZXIgKGluIEZGKSB0aGFuIHR5cGUgY2hlY2tpbmdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19ib29sLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2NhbGxhYmxlKG1peGVkVmFyLCBzeW50YXhPbmx5LCBjYWxsYWJsZU5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19jYWxsYWJsZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBGcmFuw6dvaXNcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgdmFyaWFibGUgY2FsbGFibGVOYW1lIGNhbm5vdCB3b3JrIGFzIGEgc3RyaW5nIHZhcmlhYmxlIHBhc3NlZCBieVxuICAvLyAgICAgIG5vdGUgMTogcmVmZXJlbmNlIGFzIGluIFBIUCAoc2luY2UgSmF2YVNjcmlwdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmdcbiAgLy8gICAgICBub3RlIDE6IHN0cmluZ3MgYnkgcmVmZXJlbmNlKSwgYnV0IGluc3RlYWQgd2lsbCB0YWtlIHRoZSBuYW1lIG9mXG4gIC8vICAgICAgbm90ZSAxOiBhIGdsb2JhbCB2YXJpYWJsZSBhbmQgc2V0IHRoYXQgaW5zdGVhZC5cbiAgLy8gICAgICBub3RlIDE6IFdoZW4gdXNlZCBvbiBhbiBvYmplY3QsIGRlcGVuZHMgb24gYSBjb25zdHJ1Y3RvciBwcm9wZXJ0eVxuICAvLyAgICAgIG5vdGUgMTogYmVpbmcga2VwdCBvbiB0aGUgb2JqZWN0IHByb3RvdHlwZVxuICAvLyAgICAgIG5vdGUgMjogRGVwZW5kaW5nIG9uIHRoZSBgY2FsbGFibGVOYW1lYCB0aGF0IGlzIHBhc3NlZCwgdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGV2YWwuXG4gIC8vICAgICAgbm90ZSAyOiBUaGUgZXZhbCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDI6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDI6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2NhbGxhYmxlKCdpc19jYWxsYWJsZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19jYWxsYWJsZSgnYm9ndXNGdW5jdGlvbicsIHRydWUpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlIC8vIGdpdmVzIHRydWUgYmVjYXVzZSBkb2VzIG5vdCBkbyBzdHJpY3QgY2hlY2tpbmdcbiAgLy8gICBleGFtcGxlIDM6IGZ1bmN0aW9uIFNvbWVDbGFzcyAoKSB7fVxuICAvLyAgIGV4YW1wbGUgMzogU29tZUNsYXNzLnByb3RvdHlwZS5zb21lTWV0aG9kID0gZnVuY3Rpb24gKCl7fVxuICAvLyAgIGV4YW1wbGUgMzogdmFyIHRlc3RPYmogPSBuZXcgU29tZUNsYXNzKClcbiAgLy8gICBleGFtcGxlIDM6IGlzX2NhbGxhYmxlKFt0ZXN0T2JqLCAnc29tZU1ldGhvZCddLCB0cnVlLCAnbXlWYXInKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSBteVZhclxuICAvLyAgIHJldHVybnMgMzogJ1NvbWVDbGFzczo6c29tZU1ldGhvZCdcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2NhbGxhYmxlKGZ1bmN0aW9uICgpIHt9KVxuICAvLyAgIHJldHVybnMgNDogdHJ1ZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIG1ldGhvZCA9ICcnO1xuICB2YXIgdmFsaWRGdW5jdGlvbk5hbWUgPSBmYWxzZTtcblxuICB2YXIgZ2V0RnVuY05hbWUgPSBmdW5jdGlvbiBnZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcblxuICBpZiAodHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9ICRnbG9iYWw7XG4gICAgbWV0aG9kID0gbWl4ZWRWYXI7XG4gICAgbmFtZSA9IG1peGVkVmFyO1xuICAgIHZhbGlkRnVuY3Rpb25OYW1lID0gISFuYW1lLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMiAmJiBfdHlwZW9mKG1peGVkVmFyWzBdKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1peGVkVmFyWzFdID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9IG1peGVkVmFyWzBdO1xuICAgIG1ldGhvZCA9IG1peGVkVmFyWzFdO1xuICAgIG5hbWUgPSAob2JqLmNvbnN0cnVjdG9yICYmIGdldEZ1bmNOYW1lKG9iai5jb25zdHJ1Y3RvcikpICsgJzo6JyArIG1ldGhvZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3ludGF4T25seSB8fCB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoY2FsbGFibGVOYW1lKSB7XG4gICAgICAkZ2xvYmFsW2NhbGxhYmxlTmFtZV0gPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHZhbGlkRnVuY3Rpb25OYW1lIGF2b2lkcyBleHBsb2l0c1xuICBpZiAodmFsaWRGdW5jdGlvbk5hbWUgJiYgdHlwZW9mIGV2YWwobWV0aG9kKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2NhbGxhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2Zsb2F0KG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfZmxvYXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogV2ViRGV2SG9ibyAoaHR0cDovL3dlYmRldmhvYm8uYmxvZ3Nwb3QuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vICAgICAgbm90ZSAxOiAxLjAgaXMgc2ltcGxpZmllZCB0byAxIGJlZm9yZSBpdCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGZ1bmN0aW9uLCB0aGlzIG1ha2VzXG4gIC8vICAgICAgbm90ZSAxOiBpdCBkaWZmZXJlbnQgZnJvbSB0aGUgUEhQIGltcGxlbWVudGF0aW9uLiBXZSBjYW4ndCBmaXggdGhpcyB1bmZvcnR1bmF0ZWx5LlxuICAvLyAgIGV4YW1wbGUgMTogaXNfZmxvYXQoMTg2LjMxKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHJldHVybiArbWl4ZWRWYXIgPT09IG1peGVkVmFyICYmICghaXNGaW5pdGUobWl4ZWRWYXIpIHx8ICEhKG1peGVkVmFyICUgMSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2Zsb2F0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2ludChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2ludC9cbiAgLy8gb3JpZ2luYWwgYnk6IEFsZXhcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gIHJldmlzZWQgYnk6IE1hdHQgQnJhZGxleVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBub3RlIDE6IDEuMCBpcyBzaW1wbGlmaWVkIHRvIDEgYmVmb3JlIGl0IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgZnVuY3Rpb24sIHRoaXMgbWFrZXNcbiAgLy8gICAgICBub3RlIDE6IGl0IGRpZmZlcmVudCBmcm9tIHRoZSBQSFAgaW1wbGVtZW50YXRpb24uIFdlIGNhbid0IGZpeCB0aGlzIHVuZm9ydHVuYXRlbHkuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19pbnQoMjMpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19pbnQoJzIzJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19pbnQoMjMuNSlcbiAgLy8gICByZXR1cm5zIDM6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA0OiBpc19pbnQodHJ1ZSlcbiAgLy8gICByZXR1cm5zIDQ6IGZhbHNlXG5cbiAgcmV0dXJuIG1peGVkVmFyID09PSArbWl4ZWRWYXIgJiYgaXNGaW5pdGUobWl4ZWRWYXIpICYmICEobWl4ZWRWYXIgJSAxKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19pbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfbnVsbChtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX251bGwvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgIGV4YW1wbGUgMTogaXNfbnVsbCgnMjMnKVxuICAvLyAgIHJldHVybnMgMTogZmFsc2VcbiAgLy8gICBleGFtcGxlIDI6IGlzX251bGwobnVsbClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICByZXR1cm4gbWl4ZWRWYXIgPT09IG51bGw7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfbnVsbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfbnVtZXJpYyhtaXhlZFZhcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX251bWVyaWMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogRGF2aWRcbiAgLy8gaW1wcm92ZWQgYnk6IHRhaXRoXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBUaW0gZGUgS29uaW5nXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBXZWJEZXZIb2JvIChodHRwOi8vd2ViZGV2aG9iby5ibG9nc3BvdC5jb20vKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IERlbmlzIENoZW51IChodHRwOi8vc2hub3VsbGUubmV0KVxuICAvLyAgIGV4YW1wbGUgMTogaXNfbnVtZXJpYygxODYuMzEpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19udW1lcmljKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAzOiBpc19udW1lcmljKCcgKzE4Ni4zMWUyJylcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcbiAgLy8gICBleGFtcGxlIDQ6IGlzX251bWVyaWMoJycpXG4gIC8vICAgcmV0dXJucyA0OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNTogaXNfbnVtZXJpYyhbXSlcbiAgLy8gICByZXR1cm5zIDU6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA2OiBpc19udW1lcmljKCcxICcpXG4gIC8vICAgcmV0dXJucyA2OiBmYWxzZVxuXG4gIHZhciB3aGl0ZXNwYWNlID0gWycgJywgJ1xcbicsICdcXHInLCAnXFx0JywgJ1xcZicsICdcXHgwYicsICdcXHhhMCcsICdcXHUyMDAwJywgJ1xcdTIwMDEnLCAnXFx1MjAwMicsICdcXHUyMDAzJywgJ1xcdTIwMDQnLCAnXFx1MjAwNScsICdcXHUyMDA2JywgJ1xcdTIwMDcnLCAnXFx1MjAwOCcsICdcXHUyMDA5JywgJ1xcdTIwMEEnLCAnXFx1MjAwQicsICdcXHUyMDI4JywgJ1xcdTIwMjknLCAnXFx1MzAwMCddLmpvaW4oJycpO1xuXG4gIC8vIEB0b2RvOiBCcmVhayB0aGlzIHVwIHVzaW5nIG1hbnkgc2luZ2xlIGNvbmRpdGlvbnMgd2l0aCBlYXJseSByZXR1cm5zXG4gIHJldHVybiAodHlwZW9mIG1peGVkVmFyID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnICYmIHdoaXRlc3BhY2UuaW5kZXhPZihtaXhlZFZhci5zbGljZSgtMSkpID09PSAtMSkgJiYgbWl4ZWRWYXIgIT09ICcnICYmICFpc05hTihtaXhlZFZhcik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfbnVtZXJpYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19vYmplY3QobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19vYmplY3QvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vICAgZXhhbXBsZSAxOiBpc19vYmplY3QoJzIzJylcbiAgLy8gICByZXR1cm5zIDE6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19vYmplY3Qoe2ZvbzogJ2Jhcid9KVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogaXNfb2JqZWN0KG51bGwpXG4gIC8vICAgcmV0dXJucyAzOiBmYWxzZVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBtaXhlZFZhciAhPT0gbnVsbCAmJiAodHlwZW9mIG1peGVkVmFyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtaXhlZFZhcikpID09PSAnb2JqZWN0Jztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19vYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19zY2FsYXIobWl4ZWRWYXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19zY2FsYXIvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vICAgZXhhbXBsZSAxOiBpc19zY2FsYXIoMTg2LjMxKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfc2NhbGFyKHswOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCd9KVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICByZXR1cm4gKC9ib29sZWFufG51bWJlcnxzdHJpbmcvLnRlc3QodHlwZW9mIG1peGVkVmFyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobWl4ZWRWYXIpKVxuICApO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX3NjYWxhci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfc3RyaW5nKG1peGVkVmFyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfc3RyaW5nL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICBleGFtcGxlIDE6IGlzX3N0cmluZygnMjMnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfc3RyaW5nKDIzLjUpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHJldHVybiB0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX3N0cmluZy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNzZXQoKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNzZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogRnJlbXlDb21wYW55XG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogaXNzZXQoIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDE6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAyOiBpc3NldCggJ0tldmluIHZhbiBab25uZXZlbGQnIClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICB2YXIgYSA9IGFyZ3VtZW50cztcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgdW5kZWY7XG5cbiAgaWYgKGwgPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtcHR5IGlzc2V0Jyk7XG4gIH1cblxuICB3aGlsZSAoaSAhPT0gbCkge1xuICAgIGlmIChhW2ldID09PSB1bmRlZiB8fCBhW2ldID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzc2V0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1dGY4X2VuY29kZShhcmdTdHJpbmcpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91dGY4X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHNvd2JlcnJ5XG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBZdmVzIFN1Y2FldFxuICAvLyBpbXByb3ZlZCBieToga2lyaWxsb2lkXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBVbHJpY2hcbiAgLy8gYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gICBleGFtcGxlIDE6IHV0ZjhfZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIGlmIChhcmdTdHJpbmcgPT09IG51bGwgfHwgdHlwZW9mIGFyZ1N0cmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyAucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpLnJlcGxhY2UoL1xcci9nLCBcIlxcblwiKTtcbiAgdmFyIHN0cmluZyA9IGFyZ1N0cmluZyArICcnO1xuICB2YXIgdXRmdGV4dCA9ICcnO1xuICB2YXIgc3RhcnQ7XG4gIHZhciBlbmQ7XG4gIHZhciBzdHJpbmdsID0gMDtcblxuICBzdGFydCA9IGVuZCA9IDA7XG4gIHN0cmluZ2wgPSBzdHJpbmcubGVuZ3RoO1xuICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZ2w7IG4rKykge1xuICAgIHZhciBjMSA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuICAgIHZhciBlbmMgPSBudWxsO1xuXG4gICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICBlbmQrKztcbiAgICB9IGVsc2UgaWYgKGMxID4gMTI3ICYmIGMxIDwgMjA0OCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiA2IHwgMTkyLCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2UgaWYgKChjMSAmIDB4RjgwMCkgIT09IDB4RDgwMCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiAxMiB8IDIyNCwgYzEgPj4gNiAmIDYzIHwgMTI4LCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vycm9nYXRlIHBhaXJzXG4gICAgICBpZiAoKGMxICYgMHhGQzAwKSAhPT0gMHhEODAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgdHJhaWwgc3Vycm9nYXRlIGF0ICcgKyBuKTtcbiAgICAgIH1cbiAgICAgIHZhciBjMiA9IHN0cmluZy5jaGFyQ29kZUF0KCsrbik7XG4gICAgICBpZiAoKGMyICYgMHhGQzAwKSAhPT0gMHhEQzAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgbGVhZCBzdXJyb2dhdGUgYXQgJyArIChuIC0gMSkpO1xuICAgICAgfVxuICAgICAgYzEgPSAoKGMxICYgMHgzRkYpIDw8IDEwKSArIChjMiAmIDB4M0ZGKSArIDB4MTAwMDA7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDE4IHwgMjQwLCBjMSA+PiAxMiAmIDYzIHwgMTI4LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH1cbiAgICBpZiAoZW5jICE9PSBudWxsKSB7XG4gICAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICB9XG4gICAgICB1dGZ0ZXh0ICs9IGVuYztcbiAgICAgIHN0YXJ0ID0gZW5kID0gbiArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIHN0cmluZ2wpO1xuICB9XG5cbiAgcmV0dXJuIHV0ZnRleHQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRmOF9lbmNvZGUuanMubWFwIiwiLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2NvdW50X3ZhbHVlcycgXSAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9jb3VudF92YWx1ZXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9maWxsJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmlsbCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2ZpbGxfa2V5cycgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9maWxsX2tleXMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9maWx0ZXInIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfZmlsdGVyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfZmxpcCcgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X2ZsaXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV9rZXlfZXhpc3RzJyBdICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfa2V5X2V4aXN0cycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X2tleXMnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9rZXlzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfbWFwJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21hcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3JldmVyc2UnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9yZXZlcnNlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfc2VhcmNoJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3NlYXJjaCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3N1bScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV9zdW0nICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV91bmlxdWUnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfdW5pcXVlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnY3VycmVudCcgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2N1cnJlbnQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdlbmQnIF0gICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvZW5kJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAna2V5JyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2tleScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ25leHQnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9uZXh0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncG9zJyBdICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3BvcycgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByZXYnIF0gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9wcmV2JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmFuZ2UnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3JhbmdlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmVzZXQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3Jlc2V0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc2l6ZW9mJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L3NpemVvZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ25sMmJyJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL25sMmJyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnbnVtYmVyX2Zvcm1hdCcgXSAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbnVtYmVyX2Zvcm1hdCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByaW50ZicgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3ByaW50ZicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3NwcmludGYnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3NwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJfcmVwZWF0JyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJfcmVwZWF0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyX3NwbGl0JyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3NwbGl0JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyX3dvcmRfY291bnQnIF0gICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3dvcmRfY291bnQnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJpcF90YWdzJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJpcF90YWdzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RyaXBzbGFzaGVzJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyaXBzbGFzaGVzJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3Ryc3RyJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3Ryc3RyJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnc3RydHInIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydHInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2cHJpbnRmJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy92cHJpbnRmJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndnNwcmludGYnIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvdnNwcmludGYnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd3b3Jkd3JhcCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy93b3Jkd3JhcCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3ByaW50X3InIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvcHJpbnRfcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3NlcmlhbGl6ZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvc2VyaWFsaXplJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndW5zZXJpYWxpemUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci91bnNlcmlhbGl6ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Zhcl9leHBvcnQnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvdmFyX2V4cG9ydCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Zhcl9kdW1wJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvdmFyX2R1bXAnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd2ZXJzaW9uX2NvbXBhcmUnIF0gICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvaW5mby92ZXJzaW9uX2NvbXBhcmUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdsdHJpbScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9sdHJpbScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3J0cmltJyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3J0cmltJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAndHJpbScgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvdHJpbScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3dhbGsnIF0gICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9hcnJheV93YWxrJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnYXJyYXlfd2Fsa19yZWN1cnNpdmUnIF0gID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X3dhbGtfcmVjdXJzaXZlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGF0ZV9wYXJzZScgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL2RhdGVfcGFyc2UnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdnZXRkYXRlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvZ2V0ZGF0ZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2Jhc2VuYW1lJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9maWxlc3lzdGVtL2Jhc2VuYW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGlybmFtZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2ZpbGVzeXN0ZW0vZGlybmFtZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3BhdGhpbmZvJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9maWxlc3lzdGVtL3BhdGhpbmZvJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZGF0ZScgXSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL2RhdGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdzdHJ0b3RpbWUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvc3RydG90aW1lJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaHR0cF9idWlsZF9xdWVyeScgXSAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5JyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnaXNfZG91YmxlJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19kb3VibGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19pbnRlZ2VyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2ludGVnZXInICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19sb25nJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2xvbmcnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19yZWFsJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3JlYWwnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc191bmljb2RlJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX3VuaWNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdpc19idWZmZXInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2J1ZmZlcicgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ2RvdWJsZXZhbCcgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZG91YmxldmFsJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAnZ2V0dHlwZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9nZXR0eXBlJyApO1xyXG5cclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV9tZXJnZScgXSAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfbWVyZ2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfbWVyZ2VfcmVjdXJzaXZlJyBdID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlX3JlY3Vyc2l2ZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdhcnJheV92YWx1ZXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvYXJyYXlfdmFsdWVzJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2NvdW50JyBdICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9hcnJheS9jb3VudCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbl9hcnJheScgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvYXJyYXkvaW5fYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnbWljcm90aW1lJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0aW1lJyBdICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvdGltZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjYWxsX3VzZXJfZnVuYycgXSAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY2FsbF91c2VyX2Z1bmNfYXJyYXknIF0gID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Z1bmN0aW9uX2V4aXN0cycgXSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9mdW5jdGlvbl9leGlzdHMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1bmlxaWQnIF0gICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvbWlzYy91bmlxaWQnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnZXhwbG9kZScgXSAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvZXhwbG9kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpbXBsb2RlJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9pbXBsb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ21kNScgXSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwYXJzZV9zdHInIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc3RyX3JlcGxhY2UnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyX3JlcGxhY2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnc3RydG9sb3dlcicgXSAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RydG9sb3dlcicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdzdHJ0b3VwcGVyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJ0b3VwcGVyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jhc2U2NF9kZWNvZGUnIF0gICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdiYXNlNjRfZW5jb2RlJyBdICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdwYXJzZV91cmwnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3BhcnNlX3VybCcgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3Jhd3VybGRlY29kZScgXSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlJyApO1xyXG4vL21vZHVsZS5leHBvcnRzWyAncmF3dXJsZW5jb2RlJyBdICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxlbmNvZGUnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICd1cmxkZWNvZGUnIF0gICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGRlY29kZScgKTtcclxuLy9tb2R1bGUuZXhwb3J0c1sgJ3VybGVuY29kZScgXSAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Jvb2x2YWwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvYm9vbHZhbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdlbXB0eScgXSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2VtcHR5JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Zsb2F0dmFsJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvZmxvYXR2YWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaW50dmFsJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pbnR2YWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYXJyYXknIF0gICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19ib29sJyBdICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2Jvb2wnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfY2FsbGFibGUnIF0gICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19jYWxsYWJsZScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19mbG9hdCcgXSAgICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2Zsb2F0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2ludCcgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfaW50JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX251bGwnIF0gICAgICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfbnVsbCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdpc19udW1lcmljJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX251bWVyaWMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfb2JqZWN0JyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc2NhbGFyJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19zY2FsYXInICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc3RyaW5nJyBdICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19zdHJpbmcnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNzZXQnIF0gICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc3NldCcgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwYXJzZV9hcmdzJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnanMtcGFyc2UtYXJncycgKTtcclxuXHJcbi8vbW9kdWxlLmV4cG9ydHNbICdhcnJheV90b19jc3YnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19jc3YnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9faHRtbF9hdHRyJyBdID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbF9hdHRyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2FycmF5X3RvX2h0bWwnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2h0bWwnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnYXJyYXlfdG9fd2luZG93JyBdICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9fd2luZG93JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3dyYXBfYXJyYXknIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3dyYXBfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnb2tnJyBdICAgICAgICAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvb2tnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ29rcycgXSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL29rcycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwbGFpbl9vYmplY3QnIF0gICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9wbGFpbl9vYmplY3QnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfb2JqZWN0X2xpa2UnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfb2JqZWN0X2xpa2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYXJyYXlfbGlrZScgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfb2JqZWN0X2xpa2UnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY2xvbmVfb2JqZWN0JyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY2xvbmVfb2JqZWN0JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2FmdGVyX2RhdGUnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2FmdGVyX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfYmVmb3JlX2RhdGUnIF0gICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfYmVmb3JlX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfc2FtZV9kYXRlJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfc2FtZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2Zvcm1hdF9kdXJhdGlvbicgXSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdkaWZmX2RheXMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9kaWZmX2RheXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfdW5kZWZpbmVkJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdW5kZWZpbmVkJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX3RhYl9mb2N1c2VkJyBdICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3RhYl9mb2N1c2VkJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3Njcm9sbF90b190b3AnIF0gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF90b190b3AnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnY29weV90b19jbGlwJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvY29weV90b19jbGlwJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3Njcm9sbF9wb3MnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF9wb3MnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAnaXNfd2luZG93X2FyZycgXSAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfd2luZG93X2FyZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICd3aW5kb3dfYXJnJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RldmljZV90eXBlJyBdICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RldmljZV90eXBlJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2RlYnVnJyBdICAgICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RpbWVfdGFrZW4nICk7XHJcbm1vZHVsZS5leHBvcnRzWyAndGltZV90YWtlbicgXSAgICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdGltZV90YWtlbicgKTtcclxubW9kdWxlLmV4cG9ydHNbICdwaXBlX2xvZycgXSAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9waXBlX2xvZycgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjb3VudGVyJyBdICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3VudGVyJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3RvX2pxdWVyeScgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHNbICd0b19qc19mdW5jJyBdICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qc19mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3JhbmRfbWQ1JyBdICAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3JhbmRfbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ3VybF9wYXJhbXMnIF0gICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3VybF9wYXJhbXMnICk7XHJcbm1vZHVsZS5leHBvcnRzWyAncXVlcnlfc3RyaW5nJyBdICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcXVlcnlfc3RyaW5nJyApO1xyXG5tb2R1bGUuZXhwb3J0c1sgJ2lzX2pxdWVyeScgXSAgICAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHNbICdjc3NfdW5pdHMnIF0gICAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jc3NfdW5pdHMnICk7XHJcbi8vbW9kdWxlLmV4cG9ydHNbICdqc29uX3RvX2NzdicgXSAgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9qc29uX3RvX2NzdicgKTsiLCIvKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGFycmF5IGVsZW1lbnRzIGludG8gPGxpPiB0YWdzIGFuZCBhcHBlbmRzIHRoZW0gdG8gdGhlIGxpc3Qgb2YgdGhlIGdpdmVuIGlkLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCksIGFuZCBhbiBhbm9ueW1vdXMgaW5uZXIgY2xvc3VyZSB0byBjcmVhdGUgYSBsaXN0IG9mIGh0bWwgdGFncy5cclxuICogQHBhcmFtIGFyclxyXG4gKiBAcGFyYW0gbGlzdElEXHJcbiAqIEBwYXJhbSB0YWdcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggYXJyLCBsaXN0SUQsIHRhZyA9ICdsaScgKSA9PiAoIGVsID0+ICggKCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjJyArIGxpc3RJRCApICksICggZWwuaW5uZXJIVE1MICs9IGFyci5tYXAoIGl0ZW0gPT4gYDwke3RhZ30+JHtpdGVtfTwvJHt0YWd9PmAgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oICcnICkgKSApICkoKTsiLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5pbXBvcnQgaXNfb2JqZWN0X2xpa2UgZnJvbSAnLi9pc19vYmplY3RfbGlrZSc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEgKSA9PiB7XHJcblx0bGV0IHJldHVybl9odG1sID0gJyc7XHJcblx0Zm9yKCBsZXQgSSBpbiAkZGF0YSApIHtcclxuXHRcdGlmKCBpc19vYmplY3QoICRkYXRhWyBJIF0gKSApIHtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInO1xyXG5cdFx0XHRmb3IoIGxldCBLIGluICRkYXRhWyBJIF0gKSB7XHJcblx0XHRcdFx0bGV0ICR2YWx1ZSA9ICggaXNfb2JqZWN0X2xpa2UoICRkYXRhWyBJIF1bIEsgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXVsgSyBdICkgOiAkZGF0YVsgSSBdWyBLIF07XHJcblx0XHRcdFx0cmV0dXJuX2h0bWwgKz0gJHZhbHVlICsgJyAnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybl9odG1sICs9ICdcIic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgJHZhbHVlID0gKCBpc19vYmplY3RfbGlrZSggJGRhdGFbIEkgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXSApIDogJGRhdGFbIEkgXTtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInICsgJHZhbHVlICsgJ1wiICc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXR1cm5faHRtbDtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJGFycmF5ICkgPT4ge1xyXG5cdGZvciggbGV0ICRrZXkgaW4gJGFycmF5ICkge1xyXG5cdFx0d2luZG93WyAka2V5IF0gPSAkYXJyYXlbICRrZXkgXTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZXMgQSBDbG9uZSBvZiBnaXZlbiB2YWx1ZS5cclxuICogQHBhcmFtICRkYXRhXHJcbiAqIEByZXR1cm5zIHthbnl9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEgKSA9PiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggJGRhdGEgKSApOyIsIi8qKlxyXG4gKiBDb3B5IGEgc3RyaW5nIHRvIHRoZSBjbGlwYm9hcmQuIE9ubHkgd29ya3MgYXMgYSByZXN1bHQgb2YgdXNlciBhY3Rpb24gKGkuZS4gaW5zaWRlIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIpLlxyXG4gKiBDcmVhdGUgYSBuZXcgPHRleHRhcmVhPiBlbGVtZW50LCBmaWxsIGl0IHdpdGggdGhlIHN1cHBsaWVkIGRhdGEgYW5kIGFkZCBpdCB0byB0aGUgSFRNTCBkb2N1bWVudC5cclxuICogVXNlIFNlbGVjdGlvbi5nZXRSYW5nZUF0KCl0byBzdG9yZSB0aGUgc2VsZWN0ZWQgcmFuZ2UgKGlmIGFueSkuXHJcbiAqIFVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpIHRvIGNvcHkgdG8gdGhlIGNsaXBib2FyZC5cclxuICogUmVtb3ZlIHRoZSA8dGV4dGFyZWE+IGVsZW1lbnQgZnJvbSB0aGUgSFRNTCBkb2N1bWVudC4gRmluYWxseSwgdXNlIFNlbGVjdGlvbigpLmFkZFJhbmdlKCkgdG8gcmVjb3ZlciB0aGUgb3JpZ2luYWwgc2VsZWN0ZWQgcmFuZ2UgKGlmIGFueSkuXHJcbiAqIEBwYXJhbSBzdHJcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gc3RyID0+IHtcclxuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZXh0YXJlYScgKTtcclxuXHRlbC52YWx1ZSA9IHN0cjtcclxuXHRlbC5zZXRBdHRyaWJ1dGUoICdyZWFkb25seScsICcnICk7XHJcblx0ZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdGVsLnN0eWxlLmxlZnQgICAgID0gJy05OTk5cHgnO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGVsICk7XHJcblx0Y29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yYW5nZUNvdW50ID4gMCA/IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoIDAgKSA6IGZhbHNlO1xyXG5cdGVsLnNlbGVjdCgpO1xyXG5cdGRvY3VtZW50LmV4ZWNDb21tYW5kKCAnY29weScgKTtcclxuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKCBlbCApO1xyXG5cdGlmKCBzZWxlY3RlZCApIHtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UoIHNlbGVjdGVkICk7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBDcmVhdGVzIGEgY291bnRlciB3aXRoIHRoZSBzcGVjaWZpZWQgcmFuZ2UsIHN0ZXAgYW5kIGR1cmF0aW9uIGZvciB0aGUgc3BlY2lmaWVkIHNlbGVjdG9yLlxyXG4gKiBDaGVjayBpZiBzdGVwIGhhcyB0aGUgcHJvcGVyIHNpZ24gYW5kIGNoYW5nZSBpdCBhY2NvcmRpbmdseS5cclxuICogVXNlIHNldEludGVydmFsKCkgaW4gY29tYmluYXRpb24gd2l0aCBNYXRoLmFicygpIGFuZCBNYXRoLmZsb29yKCkgdG8gY2FsY3VsYXRlIHRoZSB0aW1lIGJldHdlZW4gZWFjaCBuZXcgdGV4dCBkcmF3LlxyXG4gKiBVc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigpLmlubmVySFRNTCB0byB1cGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50LlxyXG4gKiBPbWl0IHRoZSBmb3VydGggcGFyYW1ldGVyLCBzdGVwLCB0byB1c2UgYSBkZWZhdWx0IHN0ZXAgb2YgMS4gT21pdCB0aGUgZmlmdGggcGFyYW1ldGVyLCBkdXJhdGlvbiwgdG8gdXNlIGEgZGVmYXVsdCBkdXJhdGlvbiBvZiAyMDAwbXMuXHJcbiAqIEBwYXJhbSBzZWxlY3RvclxyXG4gKiBAcGFyYW0gc3RhcnRcclxuICogQHBhcmFtIGVuZFxyXG4gKiBAcGFyYW0gc3RlcFxyXG4gKiBAcGFyYW0gZHVyYXRpb25cclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBzZWxlY3Rvciwgc3RhcnQsIGVuZCwgc3RlcCA9IDEsIGR1cmF0aW9uID0gMjAwMCApID0+IHtcclxuXHRsZXQgY3VycmVudCA9IHN0YXJ0LFxyXG5cdFx0X3N0ZXAgICA9ICggZW5kIC0gc3RhcnQgKSAqIHN0ZXAgPCAwID8gLXN0ZXAgOiBzdGVwLFxyXG5cdFx0dGltZXIgICA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblx0XHRcdGN1cnJlbnQgKz0gX3N0ZXA7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gY3VycmVudDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBlbmQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGNsZWFySW50ZXJ2YWwoIHRpbWVyICk7XHJcblx0XHR9LCBNYXRoLmFicyggTWF0aC5mbG9vciggZHVyYXRpb24gLyAoIGVuZCAtIHN0YXJ0ICkgKSApICk7XHJcblx0cmV0dXJuIHRpbWVyO1xyXG59OyIsImNvbnN0IGlzTnVtYmVyaWMgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX251bWVyaWMnICk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB7XHJcblx0dmFyIHMgPSB2YWw7XHJcblx0aWYoIGlzTnVtYmVyaWMoIHZhbCApICkge1xyXG5cdFx0cmV0dXJuIHZhbCArICdweCc7XHJcblx0fSBlbHNlIGlmKCB2YWwuaW5kZXhPZiggJ3B4JyApID4gLTEgfHwgdmFsLmluZGV4T2YoICclJyApID4gLTEgfHwgdmFsLmluZGV4T2YoICdlbScgKSA+IC0xICkge1xyXG5cdFx0bGV0IGNoZWNrUHggID0gcy5yZXBsYWNlKCAncHgnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrUGN0ID0gcy5yZXBsYWNlKCAnJScsICcnICk7XHJcblx0XHRsZXQgY2hlY2tFbSAgPSBzLnJlcGxhY2UoICdlbScsICcnICk7XHJcblx0XHRpZiggaXNOdW1iZXJpYyggY2hlY2tQeCApIHx8IGlzTnVtYmVyaWMoIGNoZWNrUGN0ICkgfHwgaXNOdW1iZXJpYyggY2hlY2tFbSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcwcHgnO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJzBweCc7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBEZXRlY3RzIHdldGhlciB0aGUgd2Vic2l0ZSBpcyBiZWluZyBvcGVuZWQgaW4gYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIFVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IHByb3BlcnR5IHRvIGZpZ3VyZSBvdXQgaWYgdGhlIGRldmljZSBpcyBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPyAnTW9iaWxlJyA6ICdEZXNrdG9wJzsiLCIvKipcclxuICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gZGF0ZXMuXHJcbiAqIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gRGF0ZSBvYmplY3RzLlxyXG4gKiBAcGFyYW0gZGF0ZUluaXRpYWxcclxuICogQHBhcmFtIGRhdGVGaW5hbFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVJbml0aWFsLCBkYXRlRmluYWwgKSA9PiAoIGRhdGVGaW5hbCAtIGRhdGVJbml0aWFsICkgLyAoIDEwMDAgKiAzNjAwICogMjQgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgaHVtYW4gcmVhZGFibGUgZm9ybWF0IG9mIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gKiBEaXZpZGUgbXMgd2l0aCB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIHRvIG9idGFpbiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIGZvciBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIGFuZCBtaWxsaXNlY29uZC5cclxuICogVXNlIE9iamVjdC5lbnRyaWVzKCkgd2l0aCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKCkgdG8ga2VlcCBvbmx5IG5vbi16ZXJvIHZhbHVlcy5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSB0byBjcmVhdGUgdGhlIHN0cmluZyBmb3IgZWFjaCB2YWx1ZSwgcGx1cmFsaXppbmcgYXBwcm9wcmlhdGVseS5cclxuICogVXNlIFN0cmluZy5wcm90b3R5cGUuam9pbignLCAnKSB0byBjb21iaW5lIHRoZSB2YWx1ZXMgaW50byBhIHN0cmluZy5cclxuICogQHBhcmFtIG1zXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IG1zID0+IHtcclxuXHRpZiggbXMgPCAwICkgbXMgPSAtbXM7XHJcblx0Y29uc3QgdGltZSA9IHtcclxuXHRcdGRheTogTWF0aC5mbG9vciggbXMgLyA4NjQwMDAwMCApLFxyXG5cdFx0aG91cjogTWF0aC5mbG9vciggbXMgLyAzNjAwMDAwICkgJSAyNCxcclxuXHRcdG1pbnV0ZTogTWF0aC5mbG9vciggbXMgLyA2MDAwMCApICUgNjAsXHJcblx0XHRzZWNvbmQ6IE1hdGguZmxvb3IoIG1zIC8gMTAwMCApICUgNjAsXHJcblx0XHRtaWxsaXNlY29uZDogTWF0aC5mbG9vciggbXMgKSAlIDEwMDBcclxuXHR9O1xyXG5cdHJldHVybiBPYmplY3QuZW50cmllcyggdGltZSApXHJcblx0XHRcdFx0IC5maWx0ZXIoIHZhbCA9PiB2YWxbIDEgXSAhPT0gMCApXHJcblx0XHRcdFx0IC5tYXAoICggWyBrZXksIHZhbCBdICkgPT4gYCR7dmFsfSAke2tleX0ke3ZhbCAhPT0gMSA/ICdzJyA6ICcnfWAgKVxyXG5cdFx0XHRcdCAuam9pbiggJywgJyApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYWZ0ZXIgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvciAoPikgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYWZ0ZXIgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPiBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGJlZm9yZSBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgbGVzcyB0aGFuIG9wZXJhdG9yICg8KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBiZWZvcmUgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPCBkYXRlQjsiLCJpbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gJy4vaXNfdW5kZWZpbmVkJztcclxuaW1wb3J0IGlzX3N0cmluZyBmcm9tICdsb2N1dHVzL3BocC92YXIvaXNfc3RyaW5nJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBnaXZlbiBPYmplY3QgLyBWYWx1ZSBpcyBhIGpRdWVyeSBJbnN0YW5jZS5cclxuICogQHBhcmFtICRlbGVtXHJcbiAqIEByZXR1cm5zIHtib29sZWFufCp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoICRlbGVtICkgJiYgZmFsc2UgPT09IGlzX3N0cmluZyggJGVsZW0gKSAmJiAkZWxlbS5qUXVlcnkgKTsiLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5pbXBvcnQgaXNfYXJyYXkgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2lzX2FycmF5JztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpcyBvYmplY3QtbGlrZS5cclxuICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBudWxsIGFuZCBpdHMgdHlwZW9mIGlzIGVxdWFsIHRvICdvYmplY3QnLlxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIHZhbCApID0+IHtcclxuXHRyZXR1cm4gKCBpc19vYmplY3QoIHZhbCApIHx8IGlzX2FycmF5KCB2YWwgKSApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgdGhlIHNhbWUgYXMgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKSBhbmQgc3RyaWN0IGVxdWFsaXR5IGNoZWNraW5nICg9PT0pIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBLnRvSVNPU3RyaW5nKCkgPT09IGRhdGVCLnRvSVNPU3RyaW5nKCk7IiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciB0YWIgb2YgdGhlIHBhZ2UgaXMgZm9jdXNlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKiBVc2UgdGhlIERvY3VtZW50LmhpZGRlbiBwcm9wZXJ0eSwgaW50cm9kdWNlZCBieSB0aGUgUGFnZSBWaXNpYmlsaXR5IEFQSSB0byBjaGVjayBpZiB0aGUgYnJvd3NlciB0YWIgb2YgdGhlIHBhZ2UgaXMgdmlzaWJsZSBvciBoaWRkZW4uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAhZG9jdW1lbnQuaGlkZGVuOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB1bmRlZmluZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBzdHJpY3QgZXF1YWxpdHkgb3BlcmF0b3IgdG8gY2hlY2sgaWYgdGhlIHZhbHVlIGFuZCBvZiB2YWwgYXJlIGVxdWFsIHRvIHVuZGVmaW5lZC5cclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IHZhbCA9PT0gdW5kZWZpbmVkOyIsImltcG9ydCBpc191bmRlZmluZWQgZnJvbSAnLi9pc191bmRlZmluZWQnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB3aW5kb3cgaGFzIGdpdmVuIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5ICkgPT4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB3aW5kb3dbICRrZXkgXSApICk7IiwibGV0ICRPS1MgICAgICAgPSAoIHByb3BlcnRpZXMsIG9iaiwgZGVmYXVsdFZhbHVlLCBkZWxpbWl0ZXIgPSAnLycgKSA9PiB7XHJcblx0cHJvcGVydGllcyAgID0gKCB0eXBlb2YgcHJvcGVydGllcyA9PT0gJ3N0cmluZycgKSA/IHByb3BlcnRpZXMuc3BsaXQoIGRlbGltaXRlciApIDogWyBwcm9wZXJ0aWVzIF07XHJcblx0bGV0IHByb3BlcnR5ID0gcHJvcGVydGllcy5zaGlmdCgpO1xyXG5cclxuXHRpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxuXHJcblx0aWYoIHByb3BlcnRpZXMubGVuZ3RoICkge1xyXG5cdFx0cHJvcGVydGllcyA9IHByb3BlcnRpZXMuam9pbiggZGVsaW1pdGVyICk7XHJcblx0XHRyZXR1cm4gJE9LUyggcHJvcGVydGllcywgb2JqWyBwcm9wZXJ0eSBdLCBkZWZhdWx0VmFsdWUsIGRlbGltaXRlciApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gb2JqWyBwcm9wZXJ0eSBdO1xyXG5cdH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSAkT0tTOyIsImxldCAkT0tTICAgICAgID0gKCBwcm9wZXJ0aWVzLCB2YWx1ZSwgb2JqLCBkZWxpbWl0ZXIgPSAnLycgKSA9PiB7XHJcblx0cHJvcGVydGllcyAgID0gKCB0eXBlb2YgcHJvcGVydGllcyA9PT0gJ3N0cmluZycgKSA/IHByb3BlcnRpZXMuc3BsaXQoIGRlbGltaXRlciApIDogWyBwcm9wZXJ0aWVzIF07XHJcblx0bGV0IHByb3BlcnR5ID0gcHJvcGVydGllcy5zaGlmdCgpO1xyXG5cclxuXHRpZiggcHJvcGVydGllcy5sZW5ndGggKSB7XHJcblx0XHRwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5qb2luKCBkZWxpbWl0ZXIgKTtcclxuXHJcblx0XHRpZiggdHlwZW9mIG9ialsgcHJvcGVydHkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdG9ialsgcHJvcGVydHkgXSA9IHt9O1xyXG5cdFx0fSBlbHNlIGlmKCB0eXBlb2Ygb2JqWyBwcm9wZXJ0eSBdICE9PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKCAnT2JqZWN0IHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiIGFscmVhZHkgaGFzIG5vbiBvYmplY3QgdmFsdWU6Jywgb2JqWyBwcm9wZXJ0eSBdLCAnSXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGFuIGVtcHR5IG9iamVjdCcgKTtcclxuXHRcdFx0b2JqWyBwcm9wZXJ0eSBdID0ge307XHJcblx0XHR9IGVsc2UgaWYoIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmpbIHByb3BlcnR5IF0ubGVuZ3RoICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0aWYoICggL15bMC05XSskLyApLnRlc3QoIHByb3BlcnR5ICkgKSB7XHJcblx0XHRcdFx0cHJvcGVydHkgPSBwYXJzZUludCggcHJvcGVydHkgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUcnkgdG8gc2V0IG5vbiBudW1lcmljIHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiIHRvIGFycmF5OicsIG9ialsgcHJvcGVydHkgXSwgJ1RoZSBhcnJheSB3aWxsIGJlIGJlIHJlcGxhY2VkIHdpdGggYW4gZW1wdHkgb2JqZWN0JyApO1xyXG5cdFx0XHRcdG9ialsgcHJvcGVydHkgXSA9IHt9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQkT0tTKCBwcm9wZXJ0aWVzLCB2YWx1ZSwgb2JqWyBwcm9wZXJ0eSBdLCBkZWxpbWl0ZXIgKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0b2JqWyBwcm9wZXJ0eSBdID0gdmFsdWU7XHJcblx0fVxyXG5cdHJldHVybiBvYmo7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gJE9LUzsiLCIvKipcclxuICogTG9ncyBhIHZhbHVlIGFuZCByZXR1cm5zIGl0LlxyXG4gKiBVc2UgY29uc29sZS5sb2cgdG8gbG9nIHRoZSBzdXBwbGllZCB2YWx1ZSwgY29tYmluZWQgd2l0aCB0aGUgfHwgb3BlcmF0b3IgdG8gcmV0dXJuIGl0LlxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZGF0YSA9PiBjb25zb2xlLmxvZyggZGF0YSApIHx8IGRhdGE7IiwibW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAoIHR5cGVvZiBPYmplY3RbICdjcmVhdGUnIF0gIT09ICd1bmRlZmluZWQnICkgPyBPYmplY3QuY3JlYXRlKCBudWxsICkgOiB7fTsiLCIvKipcclxuICogUmV0dXJuIHZhbHVlIGZyb20gUXVlcnlTdHJpbmdcclxuICogQHBhcmFtIG5hbWVcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBuYW1lICkgPT4ge1xyXG5cdG5hbWUgICAgICAgID0gbmFtZS5yZXBsYWNlKCAvW1xcW10vLCBcIlxcXFxbXCIgKS5yZXBsYWNlKCAvW1xcXV0vLCBcIlxcXFxdXCIgKTtcclxuXHR2YXIgcmVnZXggICA9IG5ldyBSZWdFeHAoIFwiW1xcXFw/Jl1cIiArIG5hbWUgKyBcIj0oW14mI10qKVwiICksXHJcblx0XHRyZXN1bHRzID0gcmVnZXguZXhlYyggbG9jYXRpb24uc2VhcmNoICk7XHJcblx0cmV0dXJuIHJlc3VsdHMgPT0gbnVsbCA/IFwiXCIgOiBkZWNvZGVVUklDb21wb25lbnQoIHJlc3VsdHNbIDEgXS5yZXBsYWNlKCAvXFwrL2csIFwiIFwiICkgKTtcclxufTsiLCJpbXBvcnQgbWQ1IGZyb20gJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JztcclxuXHJcbi8qKlxyXG4gKiBVbmlxdWUgcmFuZG9tIG1kNVxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiBTdHJpbmcoIG1kNSggTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICkgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHBhZ2UuXHJcbiAqIFVzZSBwYWdlWE9mZnNldCBhbmQgcGFnZVlPZmZzZXQgaWYgdGhleSBhcmUgZGVmaW5lZCwgb3RoZXJ3aXNlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcC4gWW91IGNhbiBvbWl0IGVsIHRvIHVzZSBhIGRlZmF1bHQgdmFsdWUgb2Ygd2luZG93LlxyXG4gKiBAcGFyYW0gZWxcclxuICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZWwgPSB3aW5kb3cgKSA9PiAoIHtcclxuXHR4OiBlbC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVhPZmZzZXQgOiBlbC5zY3JvbGxMZWZ0LFxyXG5cdHk6IGVsLnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWU9mZnNldCA6IGVsLnNjcm9sbFRvcFxyXG59ICk7IiwiLyoqXHJcbiAqIFNtb290aC1zY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXHJcbiAqIEdldCBkaXN0YW5jZSBmcm9tIHRvcCB1c2luZyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIG9yIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLlxyXG4gKiBTY3JvbGwgYnkgYSBmcmFjdGlvbiBvZiB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wLiBVc2Ugd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHRvIGFuaW1hdGUgdGhlIHNjcm9sbGluZy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xyXG5cdGNvbnN0IGMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdGlmKCBjID4gMCApIHtcclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjcm9sbFRvVG9wICk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oIDAsIGMgLSBjIC8gOCApO1xyXG5cdH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggY2FsbGJhY2ssIHRpdGxlID0gJ1RpbWVUYWtlbicgKSA9PiB7XHJcblx0Y29uc29sZS50aW1lKCB0aXRsZSApO1xyXG5cdGNvbnN0IHIgPSBjYWxsYmFjaygpO1xyXG5cdGNvbnNvbGUudGltZUVuZCggdGl0bGUgKTtcclxuXHRyZXR1cm4gcjtcclxufTsiLCJpbXBvcnQgaXNfanF1ZXJ5IGZyb20gJy4vaXNfanF1ZXJ5JztcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIEdpdmVuIFN0cmluZyBpbnRvIEEgalF1ZXJ5IE9iamVjdC5cclxuICogQHBhcmFtICRlbGVtXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4ge1xyXG5cdGlmKCBmYWxzZSA9PT0gaXNfanF1ZXJ5KCAkZWxlbSApICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeSggJGVsZW0gKTtcclxuXHR9XHJcblx0cmV0dXJuICRlbGVtO1xyXG59OyIsImltcG9ydCBpc19vYmplY3RfbGlrZSBmcm9tICcuL2lzX29iamVjdF9saWtlJztcclxuaW1wb3J0IHZhbGlkYXRlSlNGdW5jIGZyb20gJy4vdmFsaWRhdGVTaW5nbGVKU0Z1bmMnO1xyXG5pbXBvcnQgZW1wdHkgZnJvbSAnbG9jdXR1cy9waHAvdmFyL2VtcHR5JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSwgJGFyZ3Nfa2V5ID0gJ2pzX2FyZ3MnLCAkY29udGVudHNfa2V5ID0gJ2pzX2NvbnRlbnRzJyApID0+IHtcclxuXHRpZiggdHJ1ZSA9PT0gaXNfb2JqZWN0X2xpa2UoICRkYXRhICkgKSB7XHJcblx0XHRmb3IoIGxldCAka2V5IGluICRkYXRhICkge1xyXG5cdFx0XHRpZiggIWVtcHR5KCAkZGF0YVsgJGtleSBdICkgKSB7XHJcblx0XHRcdFx0JGRhdGFbICRrZXkgXSA9IHZhbGlkYXRlSlNGdW5jKCAkZGF0YVsgJGtleSBdLCAkYXJnc19rZXksICRjb250ZW50c19rZXkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gJGRhdGE7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBjdXJyZW50IFVSTC5cclxuICogVXNlIFN0cmluZy5tYXRjaCgpIHdpdGggYW4gYXBwcm9wcmlhdGUgcmVndWxhciBleHByZXNzaW9uIHRvIGdldCBhbGwga2V5LXZhbHVlIHBhaXJzLFxyXG4gKiBBcnJheS5wcm90b3R5cGUucmVkdWNlKCkgdG8gbWFwIGFuZCBjb21iaW5lIHRoZW0gaW50byBhIHNpbmdsZSBvYmplY3QuXHJcbiAqIFBhc3MgbG9jYXRpb24uc2VhcmNoIGFzIHRoZSBhcmd1bWVudCB0byBhcHBseSB0byB0aGUgY3VycmVudCB1cmwuXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge1QgfCB7fX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdXJsID0+XHJcblx0KCB1cmwubWF0Y2goIC8oW14/PSZdKykoPShbXiZdKikpL2cgKSB8fCBbXSApLnJlZHVjZShcclxuXHRcdCggYSwgdiApID0+ICggKCBhWyB2LnNsaWNlKCAwLCB2LmluZGV4T2YoICc9JyApICkgXSA9IHYuc2xpY2UoIHYuaW5kZXhPZiggJz0nICkgKyAxICkgKSwgYSApLFxyXG5cdFx0e31cclxuXHQpOyIsImltcG9ydCBpc19vYmplY3QgZnJvbSBcImxvY3V0dXMvcGhwL3Zhci9pc19vYmplY3RcIjtcclxuaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tIFwiLi9pc191bmRlZmluZWRcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkc3RyaW5nLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBpc19vYmplY3QoICRzdHJpbmcgKSAmJiBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc3RyaW5nWyAkYXJnc19rZXkgXSApIHx8IGZhbHNlID09PSBpc191bmRlZmluZWQoICRzdHJpbmdbICRjb250ZW50c19rZXkgXSApICkge1xyXG5cdFx0bGV0ICRhcmdzICAgICA9ICggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRhcmdzX2tleSBdO1xyXG5cdFx0bGV0ICRjb250ZW50cyA9ICggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdID09PSBmYWxzZSApID8gZmFsc2UgOiAkc3RyaW5nWyAkY29udGVudHNfa2V5IF07XHJcblx0XHRpZiggJGFyZ3MgPT09IGZhbHNlICYmICRjb250ZW50cyAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIGlmKCAkYXJncyAhPT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGFyZ3MsICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICRzdHJpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkc3RyaW5nO1xyXG59O1xyXG4iLCJpbXBvcnQgaXNfb2JqZWN0IGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19vYmplY3QnO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgSlMgT2JqZWN0IEludG8gV2luZG93IEFyZ3MuXHJcbiAqIEBwYXJhbSAka2V5XHJcbiAqIEBwYXJhbSAkdmFsdWVcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5LCAkdmFsdWUgKSA9PiB7XHJcblx0aWYoIGlzX29iamVjdCggJGtleSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJF9rIGluICRrZXkgKSB7XHJcblx0XHRcdHdpbmRvd1sgJF9rIF0gPSAka2V5WyAkX2sgXTtcclxuXHRcdH1cclxuXHR9XHJcblx0d2luZG93WyAka2V5IF0gPSAkdmFsdWU7XHJcbn07IiwiLyoqXHJcbiAqIENhc3RzIHRoZSBwcm92aWRlZCB2YWx1ZSBhcyBhbiBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUuaXNBcnJheSgpIHRvIGRldGVybWluZSBpZiB2YWwgaXMgYW4gYXJyYXkgYW5kIHJldHVybiBpdCBhcy1pcyBvciBlbmNhcHN1bGF0ZWQgaW4gYW4gYXJyYXkgYWNjb3JkaW5nbHkuXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMgeypbXX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXSk7IiwiaW1wb3J0IGFycmF5X21lcmdlIGZyb20gJ2xvY3V0dXMvcGhwL2FycmF5L2FycmF5X21lcmdlJztcbmltcG9ydCB0b19qcXVlcnkgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy90b19qcXVlcnknO1xuaW1wb3J0IGlzX3VuZGVmaW5lZCBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2lzX3VuZGVmaW5lZCc7XG5pbXBvcnQgaXNfb2JqZWN0X2xpa2UgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9pc19vYmplY3RfbGlrZSc7XG5pbXBvcnQgaXNfc3RyaW5nIGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9pc19zdHJpbmcnO1xuaW1wb3J0IGNhbGxfdXNlcl9mdW5jIGZyb20gJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jJztcbmltcG9ydCBmdW5jdGlvbl9leGlzdHMgZnJvbSAnbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzJztcbmltcG9ydCBjcmVhdGVfZnVuY3Rpb24gZnJvbSAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY3JlYXRlX2Z1bmN0aW9uJztcbmltcG9ydCBnZXR0eXBlIGZyb20gJ2xvY3V0dXMvcGhwL3Zhci9nZXR0eXBlJztcblxuLyoqXG4gKiBXUE9uaW9uIEN1c3RvbSBBamF4IEhhbmRsZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBXUE9uaW9uX0FqYXhlciB7XG5cdC8qKlxuXHQgKiBAcGFyYW0gJGFqYXhfYXJnc1xuXHQgKiBAcGFyYW0gJGFqYXhfY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGFqYXhfYXJncywgJGFqYXhfY29uZmlnICkge1xuXHRcdHRoaXMuZGVmYXVsdHMgICAgICAgID0ge1xuXHRcdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRcdGRhdGE6IHt9LFxuXHRcdFx0dXJsOiAoIHR5cGVvZiB3aW5kb3cuYWpheHVybCAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdy5hamF4dXJsIDogZmFsc2UsXG5cdFx0fTtcblx0XHR0aGlzLmRlZmF1bHRfY29uZmlncyA9IHtcblx0XHRcdHJlc3BvbnNlX2VsZW1lbnQ6IGZhbHNlLFxuXHRcdFx0YnV0dG9uOiBmYWxzZSxcblx0XHRcdGVsZW1lbnQ6IGZhbHNlLFxuXHRcdFx0c3Bpbm5lcjogJzxzcGFuIGNsYXNzPVwic3Bpbm5lclwiPjwvc3Bhbj4nLFxuXHRcdH07XG5cdFx0dGhpcy5pbnN0YW5jZSAgICAgICAgPSBudWxsO1xuXHRcdHRoaXMuYWpheF9hcmdzICAgICAgID0gYXJyYXlfbWVyZ2UoIHRoaXMuZGVmYXVsdHMsICRhamF4X2FyZ3MgKTtcblx0XHR0aGlzLmFqYXhfY29uZmlnICAgICA9IGFycmF5X21lcmdlKCB0aGlzLmRlZmF1bHRfY29uZmlncywgJGFqYXhfY29uZmlnICk7XG5cdFx0dGhpcy5hamF4KCk7XG5cdH1cblxuXHRjcmVhdGVfZnVuY3Rpb24oICRjb2RlID0gZmFsc2UsICRhcmdzID0gJycgKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2luZ2xlX2NhbGxiYWNrKCBjcmVhdGVfZnVuY3Rpb24oICRhcmdzLCAkY29kZSApICk7XG5cdH1cblxuXHRzaW5nbGVfY2FsbGJhY2soICRjYWxsYmFjayApIHtcblx0XHRpZiggJ2Z1bmN0aW9uJyA9PT0gZ2V0dHlwZSggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRjYWxsX3VzZXJfZnVuYyggJGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIGlmKCBpc19zdHJpbmcoICRjYWxsYmFjayApICYmIGZhbHNlICE9PSBmdW5jdGlvbl9leGlzdHMoICRjYWxsYmFjayApICkge1xuXHRcdFx0Y2FsbF91c2VyX2Z1bmMoICRjYWxsYmFjayApO1xuXHRcdH0gZWxzZSBpZiggaXNfc3RyaW5nKCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdHRoaXMuY3JlYXRlX2Z1bmN0aW9uKCAkY2FsbGJhY2sgKTtcblx0XHR9IGVsc2UgaWYoIGlzX29iamVjdF9saWtlKCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGNhbGxiYWNrICkge1xuXHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrWyAka2V5IF0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdGhhbmRsZV9jYWxsYmFja3MoIGRhdGEgKSB7XG5cdFx0aWYoIGlzX29iamVjdF9saWtlKCBkYXRhICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggZGF0YS5jYWxsYmFjayApICkge1xuXHRcdFx0XHRsZXQgJGNhbGxiYWNrcyA9IGRhdGEuY2FsbGJhY2s7XG5cblx0XHRcdFx0aWYoIGZhbHNlICE9PSBpc19zdHJpbmcoICRjYWxsYmFja3MgKSApIHtcblx0XHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrcyApO1xuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSBpc19vYmplY3RfbGlrZSggJGNhbGxiYWNrcyApICkge1xuXHRcdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGNhbGxiYWNrcyApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tzWyAka2V5IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIGRhdGEuY2FsbGJhY2s7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblxuXHRvblN1Y2Nlc3MoIGRhdGEgKSB7XG5cdFx0dGhpcy5oYW5kbGVfY2FsbGJhY2tzKCBkYXRhICk7XG5cdH1cblxuXHRvbkZhaWwoIGRhdGEgKSB7XG5cdFx0dGhpcy5oYW5kbGVfY2FsbGJhY2tzKCBkYXRhICk7XG5cdH1cblxuXHRvbkFsd2F5cyggZGF0YSApIHtcblx0XHR0aGlzLmJ1dHRvbl91bmxvY2soKTtcblx0fVxuXG5cdGFqYXgoKSB7XG5cdFx0dGhpcy5idXR0b25fbG9jaygpO1xuXG5cdFx0bGV0ICRjb25maWcgPSB0aGlzLmFqYXhfYXJncztcblxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5zdWNjZXNzICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLnN1Y2Nlc3M7XG5cdFx0fVxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5hbHdheXMgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0ZGVsZXRlICRjb25maWcuYWx3YXlzO1xuXHRcdH1cblx0XHRpZiggdHlwZW9mICRjb25maWcuZmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5mYWlsO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5zdGFuY2UgPSB3aW5kb3cud3AuYWpheC5zZW5kKCAkY29uZmlnICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5kb25lKCAoIGRhdGEgKSA9PiB0aGlzLm9uU3VjY2VzcyggZGF0YSApICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5mYWlsKCAoIGRhdGEgKSA9PiB0aGlzLm9uRmFpbCggZGF0YSApICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5hbHdheXMoICggZGF0YSApID0+IHRoaXMub25BbHdheXMoIGRhdGEgKSApO1xuXHR9XG5cblx0aGFzX2NvbmZpZyggJGtleSA9ICcnICkge1xuXHRcdHJldHVybiAoIHR5cGVvZiB0aGlzLmFqYXhfY29uZmlnWyAka2V5IF0gIT09ICd1bmRlZmluZWQnICk7XG5cdH1cblxuXHRjb25maWcoICRrZXkgPSAnJywgJGRlZmF1bHQgPSBmYWxzZSApIHtcblx0XHRyZXR1cm4gKCB0aGlzLmhhc19jb25maWcoICRrZXkgKSApID8gdGhpcy5hamF4X2NvbmZpZ1sgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHRidXR0b25fbG9jaygpIHtcblx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICkge1xuXHRcdFx0bGV0ICRidXR0b24gPSB0b19qcXVlcnkoIHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICk7XG5cdFx0XHRpZiggJGJ1dHRvbiApIHtcblx0XHRcdFx0JGJ1dHRvbi53cG9fYnV0dG9uKCAncHJvY2Vzc2luZycgKTtcblxuXHRcdFx0XHRpZiggdGhpcy5jb25maWcoICdzcGlubmVyJyApICkge1xuXHRcdFx0XHRcdGxldCAkc3Bpbm5lciA9IGpRdWVyeSggdGhpcy5jb25maWcoICdzcGlubmVyJyApICk7XG5cdFx0XHRcdFx0JHNwaW5uZXIuYWRkQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0XHRcdFx0JGJ1dHRvbi5wYXJlbnQoKS5hcHBlbmQoICRzcGlubmVyICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRidXR0b25fdW5sb2NrKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcoICdidXR0b24nICkgKSB7XG5cdFx0XHRsZXQgJGJ1dHRvbiA9IHRvX2pxdWVyeSggdGhpcy5jb25maWcoICdidXR0b24nICkgKTtcblx0XHRcdGlmKCAkYnV0dG9uICkge1xuXHRcdFx0XHQkYnV0dG9uLndwb19idXR0b24oICdjb21wbGV0ZScgKTtcblx0XHRcdFx0bGV0ICRzcGlubmVyID0gJGJ1dHRvbi5uZXh0KCk7XG5cdFx0XHRcdGlmKCAkc3Bpbm5lci5oYXNDbGFzcyggJ3NwaW5uZXInICkgKSB7XG5cdFx0XHRcdFx0JHNwaW5uZXIucmVtb3ZlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGJ1dHRvbi5wYXJlbnQoKS5maW5kKCAnLnNwaW5uZXInICkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCAoICggJCwgZG9jdW1lbnQsIHdwICkgPT4ge1xuXHQkKCAoKSA9PiB7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWlubGluZS1hamF4JywgKCBlICkgPT4ge1xuXHRcdFx0bGV0ICR0aGlzICAgICAgICA9ICQoIGUuY3VycmVudFRhcmdldCApLFxuXHRcdFx0XHQkbWV0aG9kICAgICAgPSAkdGhpcy5kYXRhKCAnbWV0aG9kJyApLFxuXHRcdFx0XHQkdXJsICAgICAgICAgPSAkdGhpcy5kYXRhKCAndXJsJyApLFxuXHRcdFx0XHQkYWpheF9hY3Rpb24gPSAkdGhpcy5kYXRhKCAnYWpheC1hY3Rpb24nICk7XG5cblx0XHRcdGxldCAkYXJncyA9IHtcblx0XHRcdFx0bWV0aG9kOiAkbWV0aG9kXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiggJHVybCApIHtcblx0XHRcdFx0JGFyZ3MudXJsID0gJHVybDtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRhamF4X2FjdGlvbiApIHtcblx0XHRcdFx0JGFyZ3MudXJsID0gYWpheHVybCArICc/YWN0aW9uPScgKyAkYWpheF9hY3Rpb247XG5cdFx0XHR9XG5cblx0XHRcdG5ldyBXUE9uaW9uX0FqYXhlciggJGFyZ3MsIHtcblx0XHRcdFx0YnV0dG9uOiAkKCBlLmN1cnJlbnRUYXJnZXQgKSxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApKCBqUXVlcnksIGRvY3VtZW50LCB3aW5kb3cud3AgKTtcbiIsIi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmltcG9ydCB7XG5cdGFycmF5X21lcmdlLFxuXHRjYWxsX3VzZXJfZnVuYyxcblx0Y2xvbmVfb2JqZWN0LFxuXHRpc19qcXVlcnksXG5cdGlzX251bGwsXG5cdGlzX29iamVjdF9saWtlLFxuXHRpc191bmRlZmluZWQsXG5cdGlzX3dpbmRvd19hcmcsXG5cdG1kNSxcblx0bWljcm90aW1lLFxuXHRyYW5kX21kNSxcblx0c3RydG9sb3dlcixcblx0dG9fanF1ZXJ5LFxuXHR0b19qc19mdW5jLFxufSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uIHtcblx0c3RhdGljIGpzX2Z1bmMoICRkYXRhICkge1xuXHRcdHJldHVybiB0b19qc19mdW5jKCAkZGF0YSwgJ3dwb25pb25fanNfYXJncycsICd3cG9uaW9uX2pzX2NvbnRlbnRzJyApO1xuXHR9XG5cblx0c3RhdGljIHJhbmRfaWQoKSB7XG5cdFx0cmV0dXJuIG1kNSggJ3dwb25pb25fcmFuZF8nICsgbWljcm90aW1lKCkgKyByYW5kX21kNSgpICk7XG5cdH1cblxuXHRzdGF0aWMgdmFsaWRfanNvbiggb2JqICkge1xuXHRcdHRyeSB7XG5cdFx0XHRKU09OLnBhcnNlKCBvYmogKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgQSBTaW5nbGUgQ2xhc3MgRm9yIHRoZSBHaXZlbiBFbGVtZW50LlxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0X2ZpZWxkX2NsYXNzKCAkdHlwZSApIHtcblx0XHQkdHlwZSA9IHN0cnRvbG93ZXIoICR0eXBlICk7XG5cblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93Lndwb25pb25fZmllbGRzWyAkdHlwZSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93Lndwb25pb25fZmllbGRzWyAkdHlwZSBdO1xuXHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93WyAnd3Bvbmlvbl8nICsgJHR5cGUgKyAnX2ZpZWxkJyBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93WyAnd3Bvbmlvbl8nICsgJHR5cGUgKyAnX2ZpZWxkJyBdO1xuXHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggd2luZG93WyAkdHlwZSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93WyAkdHlwZSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkSUQoICRlbGVtICkge1xuXHRcdHJldHVybiB0b19qcXVlcnkoICRlbGVtICkuYXR0ciggJ2RhdGEtd3Bvbmlvbi1qc2lkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgRmllbGQgSFRNTCBPYmplY3QgVXNpbmcgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJHdoZXJlX3RvX2ZpbmRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c3RhdGljIElEdG9FbGVtZW50KCAkZWxlbSwgJHdoZXJlX3RvX2ZpbmQgPSBmYWxzZSApIHtcblx0XHRsZXQgJGlkID0gV1BPbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdoZXJlX3RvX2ZpbmQgJiYgaXNfanF1ZXJ5KCAkd2hlcmVfdG9fZmluZCApICkge1xuXHRcdFx0cmV0dXJuICR3aGVyZV90b19maW5kLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIicgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGpRdWVyeSggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiXScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gdmFsdWUgaXMgYW4galF1ZXJ5IGluc3RhbmNlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNGaWVsZCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaXNfanF1ZXJ5KCAkZWxlbSApICkgPyAoIHRoaXMuZmllbGRJRCggJGVsZW0gKSApIDogZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBXaW5kb3cgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIHdpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0cmV0dXJuICggaXNfd2luZG93X2FyZyggJHZhcl9pZCApICkgPyB3aW5kb3dbICR2YXJfaWQgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyAmIFJldHVybnMgRmllbGQgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkQXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHQkdmFyX2lkID0gKCB0aGlzLmlzRmllbGQoICR2YXJfaWQgKSApID8gdGhpcy5maWVsZElEKCAkdmFyX2lkICkgOiAkdmFyX2lkO1xuXHRcdHJldHVybiAoICR2YXJfaWQgKSA/IGNsb25lX29iamVjdCggdGhpcy53aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCApICkgOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGNla3MgYW5kIHJldHVybnMgZ2xvYmFsIHRyYW5zbGF0aW9uIHN0cmluZy5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgdHh0KCAka2V5LCAkZGVmYXVsdCA9ICdzdHJpbmdfZGVmYXVsdF9ub3RfZm91bmQnICkge1xuXHRcdHJldHVybiAoIGZhbHNlID09PSBpc191bmRlZmluZWQoIFdQT25pb24udGV4dFsgJGtleSBdICkgKSA/IFdQT25pb24udGV4dFsgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBMb2FkaW5nIFNjcmVlbi5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkaXNfc2hvd1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBsb2FkaW5nX3NjcmVlbiggJGVsZW0sICRpc19zaG93ID0gdHJ1ZSApIHtcblx0XHQkZWxlbSA9IHRvX2pxdWVyeSggJGVsZW0gKS5maW5kKCAnLnBhZ2UtbG9hZGVyJyApO1xuXHRcdGlmKCB0cnVlID09PSAkaXNfc2hvdyApIHtcblx0XHRcdHJldHVybiAkZWxlbS5mYWRlSW4oICdzbG93JyApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGVsZW0uZmFkZU91dCggJ3Nsb3cnICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBHbG9iYWwgRGVidWcgVmlldyBQT1BVUC5cblx0ICovXG5cdHN0YXRpYyBnbG9iYWxfZGVidWcoKSB7XG5cdFx0bGV0ICRoYW5kbGUgPSBqUXVlcnkoICdhLndwb25pb24tZ2xvYmFsLWRlYnVnLWhhbmRsZScgKSxcblx0XHRcdCRqc29uICAgPSB7fTtcblx0XHRpZiggV1BPbmlvbi5kZWJ1Z19pbmZvID09PSBudWxsICYmICRoYW5kbGUubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkZGVmaW5lZF92YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICk7XG5cdFx0XHRpZiggaXNfb2JqZWN0X2xpa2UoICRkZWZpbmVkX3ZhcnMgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVmaW5lZF92YXJzICkge1xuXHRcdFx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRcdCRqc29uWyAkZGVmaW5lZF92YXJzWyAka2V5IF0gXSA9IFdQT25pb24ud2luZG93QXJncyggJGRlZmluZWRfdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFdQT25pb24uZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCRoYW5kbGUub24oICdjbGljaycsICggKCBlICkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3dhbCgge1xuXHRcdFx0XHR0aXRsZTogV1BPbmlvbi50eHQoICdnbG9iYWxfanNvbl9vdXRwdXQnLCAnR2xvYmFsIFdQT25pb24gRGVidWcgRGF0YScgKSxcblx0XHRcdFx0aHRtbDogalF1ZXJ5KCAnI3dwb25pb25kZWJ1Z2luZm9wb3B1cCA+IGRpdicgKSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBXUE9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdHZXQgSlNPTiBPdXRwdXQnICksXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICgpID0+IHN3YWwuZW5hYmxlTG9hZGluZygpLFxuXHRcdFx0XHRvbk9wZW46ICgpID0+IHtcblx0XHRcdFx0XHRqUXVlcnkoICcjc3dhbDItY29udGVudCAjd3Bvbmlvbi1nbG9iYWwtZGVidWctY29udGVudCcgKS5qc29uVmlldyggV1BPbmlvbi5kZWJ1Z19pbmZvICk7XG5cdFx0XHRcdFx0c3dhbC5kaXNhYmxlTG9hZGluZygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBzd2FsKCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoIFdQT25pb24uZGVidWdfaW5mbyApICsgJzwvdGV4dGFyZWE+Jyxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgYW5kIFJldHJpdmVzIFZhbHVlcyBmcm9tICR3cG9uaW9uLnNldHRpbmdzXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBvcHRpb24oICRrZXksICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gV1BPbmlvbi5zZXR0aW5nc19hcmdzO1xuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gJGFyZ3NbICRrZXkgXTtcblx0XHR9XG5cdFx0cmV0dXJuICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBXUE9uaW9uIERlYnVnIGlzIGVuYWJsZWQuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzX2RlYnVnKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ2RlYnVnJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdhdGhlciBBbGwgRmllbGQgSlMgQ29kZXMuXG5cdCAqL1xuXHRzdGF0aWMgZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIFdQT25pb24uaXNfZGVidWcoKSAmJiBpc19udWxsKCBXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gKSApIHtcblx0XHRcdGxldCAkdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApLFxuXHRcdFx0XHQkanNvbiA9IHt9LFxuXHRcdFx0XHQkdXR4dCA9IFdQT25pb24udHh0KCAndW5tb2RpZmllZF9kZWJ1ZycgKSxcblx0XHRcdFx0JG10eHQgPSBXUE9uaW9uLnR4dCggJ21vZGlmaWVkX2RlYnVnJyApO1xuXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICR2YXJzICkge1xuXHRcdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHZhcnNbICRrZXkgXSApICkge1xuXHRcdFx0XHRcdGxldCAkZGF0YSAgICAgICAgICAgICAgICAgICAgICAgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICR2YXJzWyAka2V5IF0gKTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdICAgICAgICAgID0ge307XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJHV0eHQgXSA9ICRkYXRhLmRlYnVnX2luZm8gfHwgJGRhdGE7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJG10eHQgXSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gPSAkanNvbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3VzdG9tIEFqYXggV3JhcHBlciBGb3IgalF1ZXJ5LkFqYXgoKVxuXHQgKiBAcGFyYW0gJGFjdGlvblxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICogQHBhcmFtICRvblN1Y2Nlc3Ncblx0ICogQHBhcmFtICRvbkVycm9yXG5cdCAqIEBwYXJhbSAkb25BbHdheXNcblx0ICovXG5cdHN0YXRpYyBhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30sICRvblN1Y2Nlc3MgPSBmYWxzZSwgJG9uRXJyb3IgPSBmYWxzZSwgJG9uQWx3YXlzID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRkZWZhdWx0cyA9IHtcblx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdHVybDogV1BPbmlvbi5vcHRpb24oICdhamF4X3VybCcgKSxcblx0XHRcdFx0b25TdWNjZXNzOiBmYWxzZSxcblx0XHRcdFx0b25BbHdheXM6IGZhbHNlLFxuXHRcdFx0XHRvbkVycm9yOiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHQkYWpheCAgICAgPSBmYWxzZTtcblxuXHRcdGlmKCBpc19vYmplY3RfbGlrZSggJGFjdGlvbiApICkge1xuXHRcdFx0JGRhdGEgPSAkYWN0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZGVmYXVsdHMudXJsICs9ICcmJyArIFdQT25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApICsgJz0nICsgJGFjdGlvbjtcblx0XHR9XG5cblx0XHQkZGVmYXVsdHMgID0gYXJyYXlfbWVyZ2UoICRkZWZhdWx0cywgJGRhdGEgKTtcblx0XHQkb25TdWNjZXNzID0gKCBpc191bmRlZmluZWQoICRvblN1Y2Nlc3MgKSB8fCBmYWxzZSA9PT0gJG9uU3VjY2VzcyApID8gJGRlZmF1bHRzLm9uU3VjY2VzcyA6ICRvblN1Y2Nlc3M7XG5cdFx0JG9uQWx3YXlzICA9ICggaXNfdW5kZWZpbmVkKCAkb25FcnJvciApIHx8IGZhbHNlID09PSAkb25FcnJvciApID8gJGRlZmF1bHRzLm9uQWx3YXlzIDogJG9uQWx3YXlzO1xuXHRcdCRvbkVycm9yICAgPSAoIGlzX3VuZGVmaW5lZCggJG9uQWx3YXlzICkgfHwgZmFsc2UgPT09ICRvbkFsd2F5cyApID8gJGRlZmF1bHRzLm9uRXJyb3IgOiAkb25FcnJvcjtcblx0XHQkYWpheCAgICAgID0galF1ZXJ5LmFqYXgoICRkZWZhdWx0cyApO1xuXG5cblx0XHRpZiggJG9uU3VjY2VzcyApIHtcblx0XHRcdCRhamF4LmRvbmUoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvblN1Y2Nlc3MsIHJlcyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRvbkVycm9yICkge1xuXHRcdFx0JGFqYXguZmFpbCggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uRXJyb3IsIHJlcyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRvbkFsd2F5cyApIHtcblx0XHRcdCRhamF4LmFsd2F5cyggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uQWx3YXlzLCByZXMgKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGFqYXg7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBXUE9uaW9uIFRlbXBsYXRlIGZvciB1bmRlcnNjb3JlLlxuXHQgKiBAcGFyYW0gJGlkXG5cdCAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSk6ICp9XG5cdCAqL1xuXHRzdGF0aWMgdGVtcGxhdGUoICRpZCApIHtcblx0XHRsZXQgY29tcGlsZWQsXG5cdFx0XHRvcHRpb25zID0ge1xuXHRcdFx0XHRldmFsdWF0ZTogLzwjKFtcXHNcXFNdKz8pIz4vZyxcblx0XHRcdFx0aW50ZXJwb2xhdGU6IC9cXHtcXHtcXHsoW1xcc1xcU10rPylcXH1cXH1cXH0vZyxcblx0XHRcdFx0ZXNjYXBlOiAvXFx7XFx7KFteXFx9XSs/KVxcfVxcfSg/IVxcfSkvZyxcblx0XHRcdFx0dmFyaWFibGU6ICdkYXRhJ1xuXHRcdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiggZGF0YSApIHtcblx0XHRcdGNvbXBpbGVkID0gY29tcGlsZWQgfHwgXy50ZW1wbGF0ZSggJGlkLCBvcHRpb25zICk7XG5cdFx0XHRyZXR1cm4gY29tcGlsZWQoIGRhdGEgKTtcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHN1Ym1lbnVfaW5kaWNhdG9yKCAkZWxlbXMgKSB7XG5cdFx0JGVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJHRvZ2dsZSAgID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdkYXRhLXRvZ2dsZS1jbGFzcycgKTtcblx0XHRcdFx0bGV0ICRleF9jbGFzcyA9IGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnY2xhc3MnICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnY2xhc3MnLCAkdG9nZ2xlICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnZGF0YS10b2dnbGUtY2xhc3MnLCAkZXhfY2xhc3MgKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblx0Ly9AdG9kbyBNaWdyYXRlIFBsdWdpbiBEZWJ1ZyBJbmZvLlxufVxuIiwiaW1wb3J0IHsgYXJyYXlfbWVyZ2UsIGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdHN0YXRpYyBhZGQoICRrZXksICR2YWx1ZSApIHtcblx0XHRpZiggaXNfdW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblxuXHRcdGlmKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9ICR2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSBhcnJheV9tZXJnZSggJHZhbHVlLCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXQoICRrZXksICRkZWZhdWx0ID0gZmFsc2UgKSB7XG5cdFx0aWYoIGlzX3VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBpc191bmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSA/ICRkZWZhdWx0IDogdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF07XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vaGVscGVycy9kZXBlbmRlbmN5JztcbmltcG9ydCB7IGFycmF5X21lcmdlIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRlbGVtZW50ID0gdW5kZWZpbmVkLCBwYXJhbSA9IHt9ICkge1xuXHRcdHRoaXMucGFyYW0gICAgICAgICA9IGFycmF5X21lcmdlKCB7IG5lc3RhYmxlOiBmYWxzZSwgcGFyZW50OiBmYWxzZSB9LCBwYXJhbSApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5iYXNlICAgICAgICAgID0ge307XG5cdFx0dGhpcy5iYXNlLiRlbCAgICAgID0gJGVsZW1lbnQ7XG5cdFx0dGhpcy5iYXNlLmluaXQgICAgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLnJ1bGVzZXQgPSBqUXVlcnkuZGVwcy5jcmVhdGVSdWxlc2V0KCk7XG5cdFx0XHR0aGlzLmJhc2UuZGVwUm9vdCgpO1xuXHRcdFx0alF1ZXJ5LmRlcHMuZW5hYmxlKCB0aGlzLmJhc2UuJGVsLCB0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRzaG93OiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdC8vZWwucmVtb3ZlQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0ZWwuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRoaWRlOiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdC8vZWwuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0ZWwuc2xpZGVVcCgpO1xuXHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkuYWRkQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0bG9nOiBmYWxzZSxcblx0XHRcdFx0Y2hlY2tUYXJnZXRzOiBmYWxzZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbnN0YW5jZSA9IFtdO1xuXHRcdHRoaXMuYmFzZS5kZXBSb290ICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS4kZWwuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1oYXMtZGVwZW5kZW5jeScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5iYXNlLmluc3RhbmNlID0gbmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksICR0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRcdFx0bmVzdGFibGU6ICR0aGlzLnBhcmFtLm5lc3RhYmxlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiAoIHRydWUgPT09ICR0aGlzLnBhcmFtLm5lc3RhYmxlICkgPyAkdGhpcy5iYXNlLiRlbCA6ICR0aGlzLnBhcmFtLnBhcmVudCxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5iYXNlLmluaXQoKTtcblx0fVxufVxuIiwiLy9pbXBvcnQgeyBhcnJheV9tZXJnZSwgZW1wdHksIGlzX2NhbGxhYmxlLCBpc19qcXVlcnksIGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuLy9jb25zdCB0b19qcXVlcnkgICAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS50b19qcXVlcnk7XG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZTp0cnVlICovXG5cbmNvbnN0IGFycmF5X21lcmdlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmFycmF5X21lcmdlO1xuY29uc3QgZW1wdHkgICAgICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuZW1wdHk7XG5jb25zdCBpc19jYWxsYWJsZSAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5pc19jYWxsYWJsZTtcbmNvbnN0IGlzX2pxdWVyeSAgICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2pxdWVyeTtcbmNvbnN0IGlzX3VuZGVmaW5lZCA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX3VuZGVmaW5lZDtcblxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi9kZWJ1Zyc7XG5pbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi9tb2R1bGUnO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdGlvbiBmcm9tICcuLi9jb3JlL3ZhbGlkYXRpb24nO1xuXG4vKipcbiAqIFdQT25pb24gRmllbGQgQWJzdHJhY3QgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyA9IG51bGwgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQgKTtcblx0XHR0aGlzLnNldF9hcmdzKCBmYWxzZSApO1xuXHRcdHRoaXMuZmllbGRfZGVidWcoKTtcblx0XHR0aGlzLmNvbmZpZyA9ICRjb25maWc7XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5qc19lcnJvcl9oYW5kbGVyKCk7XG5cdFx0dGhpcy5qc192YWxpZGF0b3IoKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGVyci5lcnJvci5hcHBlbmRUbyggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHR9XG5cblx0anNfZXJyb3JfaGFuZGxlciggZWxlbWVudCA9IHRoaXMuZWxlbWVudCApIHtcblx0XHRlbGVtZW50Lm9uKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCAnPiAud3Bvbmlvbi1maWVsZHNldCA6aW5wdXQnLCAoIGUsIGRhdGEgKSA9PiB0aGlzLmpzX2Vycm9yKCBkYXRhICkgKTtcblx0fVxuXG5cdGpzX3ZhbGlkYXRvcigpIHtcblx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSApIHtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSB7XG5cdFx0XHRcdHRoaXMubWF5YmVfanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApO1xuXHRcdH1cblx0fVxuXG5cdGpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnOmlucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlX2FyZ3MoICRhcmcsICRrZXkgPSBmYWxzZSApIHtcblx0XHRsZXQgJGFyZ3MgICA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKSxcblx0XHRcdCRleGlzdHMgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0JGV4aXN0cyAgICAgPSBhcnJheV9tZXJnZSggeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9LCAkZXhpc3RzICk7XG5cblx0XHRpZiggZmFsc2UgPT09ICRrZXkgKSB7XG5cdFx0XHQkZXhpc3RzWyAnSlMgQXJncycgXSA9ICRhcmdzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZXhpc3RzWyAnSlMgQXJncycgXVsgJGtleSBdID0gJGFyZ3M7XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCAkZXhpc3RzICk7XG5cdFx0cmV0dXJuICRhcmdzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIGZhbHNlICE9PSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCAkaW5mbyA9IHRoaXMub3B0aW9uKCAnZGVidWdfaW5mbycgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkaW5mbyApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSBlbXB0eSggJGluZm8gKSApIHtcblx0XHRcdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ1BIUCBBcmdzJzogJGluZm8sICdKUyBBcmdzJzoge30gfSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCAkZm91bmQgPSBmYWxzZTtcblx0XHRpZiggIXRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRsZXQgJElEICAgPSB0aGlzLmlkKCksXG5cdFx0XHRcdCRlbGVtID0galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD0nICsgJElEICsgJ10nICk7XG5cdFx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0XHQkZm91bmQgPSAkZWxlbTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGZvdW5kID0gdGhpcy5lbGVtZW50O1xuXHRcdH1cblxuXHRcdGlmKCBmYWxzZSAhPT0gJGZvdW5kICkge1xuXHRcdFx0bGV0ICR0aGlzID0gdGhpcztcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkLXRpdGxlID4gaDQnIClcblx0XHRcdFx0ICAudGlwcHkoIHtcblx0XHRcdFx0XHQgIGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ2NsaWNrX3RvX3ZpZXdfZGVidWdfaW5mbycsICdDbGljayBUbyBWaWV3IEZpZWxkIERlYnVnIEluZm8nICksXG5cdFx0XHRcdFx0ICBhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHQgIGFycm93VHlwZTogJ3JvdW5kJyxcblx0XHRcdFx0XHQgIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdFx0ICB0aGVtZTogJ2xpZ2h0Jyxcblx0XHRcdFx0XHQgIGFuaW1hdGlvbjogJ3NjYWxlJ1xuXHRcdFx0XHQgIH0gKTtcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkLXRpdGxlID4gaDQnICkub24oICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0bGV0ICRkICAgICAgICAgID0gJHRoaXMuaWQoKSArICdkZWJ1Z0lORk8nLFxuXHRcdFx0XHRcdCRub3RpY2VfdHh0ID0gJzxwIGNsYXNzPVxcJ3dwb25pb24tZmllbGQtZGVidWctbm90aWNlXFwnPicgKyAkd3Bvbmlvbi5vcHRpb24oICdkZWJ1Z19ub3RpY2UnICkgKyAnPC9wPicsXG5cdFx0XHRcdFx0JGVsZW0gICAgICAgPSBqUXVlcnkoICc8ZGl2IGlkPVwiJyArICRkICsgJ1wiIGNsYXNzPVwid3Bvbmlvbi1maWVsZC1kZWJ1Zy1wb3B1cFwiID48ZGl2IGlkPVwiJyArICRkICsgJ1wiID48L2Rpdj4nICsgJG5vdGljZV90eHQgKyAnPC9kaXY+JyApO1xuXHRcdFx0XHRsZXQgJGRhdGEgICAgICAgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoICR0aGlzLmlkKCkgKTtcblx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdGh0bWw6ICRlbGVtLFxuXHRcdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiAkd3Bvbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnQXMgSlNPTicgKSxcblx0XHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRcdG9uT3BlbjogKCkgPT4galF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgPiBkaXYgPiAjJyArICRkICkuanNvblZpZXcoICRkYXRhIClcblx0XHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRcdGlmKCByZXN1bHQudmFsdWUgKSB7XG5cdFx0XHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnNjAwcHgnLFxuXHRcdFx0XHRcdFx0XHRodG1sOiAnPHRleHRhcmVhIHN0eWxlPVwibWluLXdpZHRoOjU1MHB4OyBtaW4taGVpZ2h0OjMwMHB4XCI+JyArIEpTT04uc3RyaW5naWZ5KCAkd3Bvbmlvbl9kZWJ1Zy5nZXQoICR0aGlzLmlkKCkgKSApICsgJzwvdGV4dGFyZWE+J1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgLndwb25pb24tZmllbGQtZGVidWctY29kZS1nZW4nICkub24oICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdGh0bWw6IHRoaXMub3B0aW9uKCAnZGVidWdfZmllbGRfY29kZScgKSxcblx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IHRydWUsXG5cdFx0XHRcdFx0aGVpZ2h0QXV0bzogZmFsc2UsXG5cdFx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRvcHRpb25zKCkge1xuXHRcdGlmKCB0aGlzLl9hcmdzID09PSBmYWxzZSApIHtcblx0XHRcdHRoaXMuX2FyZ3MgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCB0aGlzLmlkKCkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2FyZ3M7XG5cdH1cblxuXHRvcHRpb24oICRrZXkgPSAnJywgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRsZXQgJGFyZ3MgPSB0aGlzLm9wdGlvbnMoKTtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSA/ICRhcmdzWyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdGlkKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdG1vZHVsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdtb2R1bGUnLCBmYWxzZSApO1xuXHR9XG5cblx0cGx1Z2luX2lkKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ3BsdWdpbl9pZCcsIGZhbHNlICk7XG5cdH1cblxuXHRhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30gKSB7XG5cdFx0bGV0ICRhamF4X2tleSAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApO1xuXHRcdGxldCAkZGVmYXVsdCAgICAgICAgICA9IHtcblx0XHRcdHBsdWdpbl9pZDogdGhpcy5wbHVnaW5faWQoKSxcblx0XHRcdG1vZHVsZTogdGhpcy5tb2R1bGUoKSxcblx0XHR9O1xuXHRcdCRkZWZhdWx0WyAkYWpheF9rZXkgXSA9ICRhY3Rpb247XG5cdFx0JGRhdGEuZGF0YSAgICAgICAgICAgID0gKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkZGF0YS5kYXRhICkgKSA/IGFycmF5X21lcmdlKCAkZGVmYXVsdCwgJGRhdGEuZGF0YSApIDogJGRlZmF1bHQ7XG5cblx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJGRhdGEgKTtcblx0fVxuXG5cdGluaXRfZmllbGQoICRlbGVtLCAkdHlwZSApIHtcblx0XHRsZXQgJF9pbnN0YW5jZXMgPSBbXTtcblx0XHRpZiggIWlzX2pxdWVyeSggJGVsZW0gKSApIHtcblx0XHRcdCRlbGVtID0gdGhpcy5lbGVtZW50LmZpbmQoICRlbGVtICk7XG5cdFx0fVxuXHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0JGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGNsYXNzID0gJHdwb25pb24uZ2V0X2ZpZWxkX2NsYXNzKCAkdHlwZSApO1xuXHRcdFx0aWYoIGZhbHNlICE9PSAkY2xhc3MgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYoIGlzX2NhbGxhYmxlKCAkY2xhc3MgKSApIHtcblx0XHRcdFx0XHRcdCRfaW5zdGFuY2VzLnB1c2goIG5ldyAkY2xhc3MoIGpRdWVyeSggdGhpcyApICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGpRdWVyeSggdGhpcyApICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICdFcnJvcjogJyArIGUgKyAnIHwgRm9yIDogJyArICR0eXBlICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdHJlbG9hZCgpIHtcblx0XHR3cC5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfcmVsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaWNvbl9waWNrZXInLCAnaWNvbl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicsICdmb250X3NlbGVjdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYWNjb3JkaW9uJywgJ2FjY29yZGlvbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdyb3VwJywgJ2dyb3VwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dDpub3QoLndwb25pb24taW5wdXRtYXNrKScsICd0ZXh0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dGFyZWEnLCAndGV4dGFyZWEnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1iYWNrZ3JvdW5kJywgJ2JhY2tncm91bmQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pbWFnZV9zZWxlY3QnLCAnaW1hZ2Vfc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc2VsZWN0JywgJ3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN3aXRjaGVyJywgJ3N3aXRjaGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGFsZXR0ZScsICdjb2xvcl9wYWxldHRlJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJywgJ3dwX2VkaXRvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZpZWxkc2V0JywgJ2ZpZWxkc2V0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1pbnB1dG1hc2tdJywgJ2lucHV0bWFzaycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2xpbmsnLCAnd3BfbGlua3MnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jaGVja2JveCcsICdjaGVja2JveF9yYWRpbycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXJhZGlvJywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQta2V5X3ZhbHVlJywgJ2tleXZhbHVlX3BhaXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9waWNrZXInLCAnY29sb3JfcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZGF0ZV9waWNrZXInLCAnZGF0ZV9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nYWxsZXJ5JywgJ2dhbGxlcnknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC11cGxvYWQnLCAndXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2UnLCAnaW1hZ2VfdXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGFiJywgJ2pxdWVyeV90YWInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZmllbGQtdG9vbHRpcCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ29vZ2xlX21hcHMnLCAnZ29vZ2xlX21hcHMnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24taGVscCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLXdyYXAtdG9vbHRpcCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2xvbmUnLCAnY2xvbmVfZWxlbWVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuc2VsZWN0MicsICdzZWxlY3QyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5jaG9zZW4nLCAnY2hvc2VuJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3RpemUnLCAnc2VsZWN0aXplJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc29ydGVyJywgJ3NvcnRlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXR5cG9ncmFwaHknLCAndHlwb2dyYXBoeScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW9lbWJlZCcsICdvZW1iZWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1oZWFkaW5nJywgJ2hlYWRpbmcnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zdWJoZWFkaW5nJywgJ3N1YmhlYWRpbmcnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb250ZW50JywgJ2NvbnRlbnQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1qYW1ib19jb250ZW50JywgJ2phbWJvX2NvbnRlbnQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1iYWNrdXAnLCAnYmFja3VwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtbm90aWNlJywgJ25vdGljZScgKTtcblxuXHRcdHdwLmhvb2tzLmFkZEFjdGlvbiggJ3dwb25pb25fYWZ0ZXJfZmllbGRzX3JlbG9hZCcgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldF9hcmdzKCAkYXJncyApIHtcblx0XHR0aGlzLl9hcmdzID0gJGFyZ3M7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRfZmllbGRfcGFyZW50X2J5X2lkKCAkZWxlbSApIHtcblx0XHRsZXQgJElEID0gJHdwb25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRyZXR1cm4galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkSUQgKyAnXCJdJyApO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0ICkge1xuXHRcdGlmKCAhJHNlbGVjdG9yLmpRdWVyeSApIHtcblx0XHRcdCRzZWxlY3RvciA9IGpRdWVyeSggJHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0X2VsZW1lbnQoICRzZWxlY3RvciApO1xuXHRcdHRoaXMuc2V0X2NvbnR4dCggJGNvbnRleHQgKTtcblx0XHR0aGlzLm1vZHVsZV9pbml0KCk7XG5cdH1cblxuXHRtb2R1bGVfaW5pdCgpIHtcblx0fVxuXG5cdHNldF9lbGVtZW50KCAkZWxlbSApIHtcblx0XHRpZiggISRlbGVtLmpRdWVyeSApIHtcblx0XHRcdCRlbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdH1cblx0XHR0aGlzLmVsZW0gPSAkZWxlbTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldF9jb250eHQoICRjb250eHQgKSB7XG5cdFx0dGhpcy5jb250ZXh0ID0gJGNvbnR4dDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldCBob29rKCkge1xuXHRcdHJldHVybiB3aW5kb3cud3AuaG9va3M7XG5cdH1cblxuXHRnZXQgZWxlbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtO1xuXHR9XG5cblx0Z2V0IGNvbnR4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0O1xuXHR9XG5cbn1cbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQT25pb25fVmFsaWRhdG9yIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5mb3JtICA9IFdQT25pb25fVmFsaWRhdG9yLmdldF9mb3JtKCk7XG5cdFx0dGhpcy5ydWxlcyA9IHtcblx0XHRcdGludmFsaWRIYW5kbGVyOiAoKSA9PiB7XG5cdFx0XHRcdGpRdWVyeSggJyNwdWJsaXNoJyApLnJlbW92ZUNsYXNzKCAnYnV0dG9uLXByaW1hcnktZGlzYWJsZWQnICk7XG5cdFx0XHRcdGpRdWVyeSggJyNhamF4LWxvYWRpbmcnICkuYXR0ciggJ3N0eWxlJywgJycgKTtcblx0XHRcdFx0dGhpcy5mb3JtLnNpYmxpbmdzKCAnI21lc3NhZ2UnICkucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuZm9ybS5iZWZvcmUoICc8ZGl2IGlkPVwibWVzc2FnZVwiIGNsYXNzPVwiZXJyb3JcIj48cD4nICsgJHdwb25pb24udHh0KCAndmFsaWRhdGlvbl9zdW1tYXJ5JyApICsgJzwvcD48L2Rpdj4nICk7XG5cdFx0XHR9LFxuXHRcdFx0aWdub3JlOiAnLndwb25pb24tZGVwZW5kZW50LC53cG9uaW9uLXZhbGlkYXRpb24taWdub3JlJyxcblx0XHRcdGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiggZXJyb3IsIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGVsZW1lbnQudHJpZ2dlciggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgeyBlcnJvciwgZWxlbWVudCB9ICk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3JDbGFzczogJ3dwb25pb24tZXJyb3InLFxuXHRcdFx0ZXJyb3JFbGVtZW50OiAncCdcblx0XHR9O1xuXHRcdGlmKCB0aGlzLmZvcm0gKSB7XG5cdFx0XHR0aGlzLmZvcm0udmFsaWRhdGUoIHRoaXMucnVsZXMgKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZ2V0X2Zvcm0oKSB7XG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICk7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICk7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jdXBkYXRlLW5hdi1tZW51JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSN1cGRhdGUtbmF2LW1lbnUnICk7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jcG9zdCcgKS5sZW5ndGggPiAwICYmIGpRdWVyeSggJ2lucHV0I3Bvc3RfSUQnICkubGVuZ3RoID4gMCAmJiBqUXVlcnkoICdpbnB1dCNvcmlnaW5hbF9wdWJsaXNoJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSNwb3N0JyApO1xuXHRcdH1cblxuXG5cdFx0cmV0dXJuICggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApID8galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkgOiBmYWxzZTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYWNjb3JkaW9uKCB7XG5cdFx0XHRcdGhlYWRlcjogJz4gLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdGFuaW1hdGU6IDE1MCxcblx0XHRcdFx0aGVpZ2h0U3R5bGU6ICdjb250ZW50Jyxcblx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHQnaGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctcmlnaHQnLFxuXHRcdFx0XHRcdCdhY3RpdmVIZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1kb3duJ1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmKCAhalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdpc19vcGVuJyApICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oICdvcHRpb24nLCAnYWN0aXZlJywgZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMudG9vbHRpcCgpO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dFt0eXBlPVwiZmlsZVwiXScgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHtcblx0XHRcdHRoaXMuaGFuZGxlX2JhY2t1cF9pbXBvcnQoIGUuY3VycmVudFRhcmdldCApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnYS5kb3dubG9hZF9iYWNrdXAnICkub24oICdjbGljaycsICggZSApID0+IHtcblx0XHRcdGxldCAkZmlsZSA9IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICk7XG5cdFx0XHQkZmlsZSAgICAgPSAkZmlsZSArICctJyArIHRoaXMubW9kdWxlKCk7XG5cdFx0XHRsZXQgZGF0ZSAgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0bGV0IHN0ciAgID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgKCBkYXRlLmdldE1vbnRoKCkgKyAxICkgKyAnLScgKyBkYXRlLmdldERhdGUoKSArICctJyArIGRhdGUuZ2V0SG91cnMoKSArIGRhdGUuZ2V0TWludXRlcygpICsgZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdFx0XHQkZmlsZSAgICAgPSAkZmlsZSArICctJyArIHN0cjtcblx0XHRcdHRoaXMuZm9yY2VfZG93bmxvYWQoIEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF90ZXh0YXJlYSB0ZXh0YXJlYScgKS5odG1sKCkgKSwgJGZpbGUgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2EubmV3X2JhY2t1cCAnICkub24oICdjbGljaycsICggZSApID0+IHtcblx0XHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xuXHRcdFx0dGhpcy5hamF4KCAnbmV3LW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcblx0XHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzJyApLmh0bWwoIGUuZGF0YSApO1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvbkFsd2F5czogKCBlICkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcuZGVsZXRlX2JhY2t1cCcsICggZSApID0+IHtcblx0XHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xuXHRcdFx0bGV0ICRpbnMgPSBqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5kZWxldGVfYmFja3VwJyApLnRpcHB5X2dldCgpO1xuXHRcdFx0aWYoICRpbnMuaW5zdGFuY2VzWyAwIF0gKSB7XG5cdFx0XHRcdCRpbnMuaW5zdGFuY2VzWyAwIF0uZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5hamF4KCAnZGVsZXRlLW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcblx0XHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcblx0XHRcdFx0XHRiYWNrdXBfaWQ6IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkuYXR0ciggJ2RhdGEtYmFja3VwaWQnICksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoIHRydWUgKTtcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cycgKS5odG1sKCBlLmRhdGEgKTtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLnJlc3RvcmVfYmFja3VwJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2JsdXInLCAnLnJlc3RvcmVfdGV4dGFyZWEgdGV4dGFyZWEnLCAoIGUgKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLnJlc3RvcmVfYmFja3VwKCBKU09OLnBhcnNlKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpICkgKTtcblx0XHRcdFx0alF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoICcnICkuaHRtbCggJycgKTtcblx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggdGhpcy5vcHRpb24oICdpbnZhbGlkX2Zvcm1hdCcgKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdHN3YWxfZXJyb3IoIG1zZyApIHtcblx0XHRzd2FsKCB7XG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0dGl0bGU6IG1zZ1xuXHRcdH0gKTtcblx0fVxuXG5cdHRvb2x0aXAoIHJlbW92ZSA9IGZhbHNlICkge1xuXHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0aWYoIHRydWUgPT09IHJlbW92ZSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cyBsaScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0ICRlbGVtID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gYScgKVsgMCBdO1xuXHRcdFx0XHQkZWxlbS5fdGlwcHkuZGVzdHJveSgpO1xuXHRcdFx0fSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMgbGknICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR0aGlzLnNob3dfdG9vbHRpcCggalF1ZXJ5KCB0aGlzICkuZmluZCggJz5hJyApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0YmxvY2tfZm9ybSgpIHtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkuZmluZCggJ2J1dHRvbicgKS5hdHRyKCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnICk7XG5cdH1cblxuXHR1bmJsb2NrX2Zvcm0oKSB7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLmZpbmQoICdidXR0b24nICkucmVtb3ZlQXR0ciggJ2Rpc2FibGVkJyApO1xuXHR9XG5cblx0Zm9yY2VfZG93bmxvYWQoIGV4cG9ydE9iaiwgZXhwb3J0TmFtZSApIHtcblx0XHR2YXIgZGF0YVN0ciAgICAgICAgICAgID0gXCJkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeSggZXhwb3J0T2JqICkgKTtcblx0XHR2YXIgZG93bmxvYWRBbmNob3JOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2EnICk7XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnNldEF0dHJpYnV0ZSggJ2hyZWYnLCBkYXRhU3RyICk7XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnNldEF0dHJpYnV0ZSggJ2Rvd25sb2FkJywgZXhwb3J0TmFtZSArICcuanNvbicgKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkb3dubG9hZEFuY2hvck5vZGUgKTsgLy8gcmVxdWlyZWQgZm9yIGZpcmVmb3hcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuY2xpY2soKTtcblx0XHRkb3dubG9hZEFuY2hvck5vZGUucmVtb3ZlKCk7XG5cdH1cblxuXHRyZXN0b3JlX2JhY2t1cCggYmFja3VwX2lkICkge1xuXHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xuXHRcdHRoaXMuYWpheCggJ3Jlc3RvcmUtbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHRiYWNrdXBfaWQ6IGJhY2t1cF9pZCxcblx0XHRcdH0sXG5cdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHR0aXRsZTogZS5kYXRhLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXG5cdFx0fSApO1xuXHR9XG5cblx0aGFuZGxlX2JhY2t1cF9pbXBvcnQoICRlbGVtICkge1xuXHRcdGlmKCAkZWxlbS5maWxlcyAmJiAkZWxlbS5maWxlc1sgMCBdICkge1xuXHRcdFx0bGV0ICRmaWxlID0gJGVsZW0uZmlsZXNbIDAgXTtcblxuXHRcdFx0aWYoICRmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi9qc29uJyApIHtcblx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCB0aGlzLm9wdGlvbiggJ2ludmFsaWRfZm9ybWF0JyApICk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGxldCByZWFkZXIgICAgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0XHRyZWFkZXIub25sb2FkID0gKCBlICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIEpTT04ucGFyc2UoIGUudGFyZ2V0LnJlc3VsdCApICk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCAkZmlsZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNob3dfdG9vbHRpcCggJGVsZW0gKSB7XG5cdFx0bGV0ICRiYWNrdXBpZCA9ICRlbGVtLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApO1xuXHRcdHRpcHB5KCAkZWxlbVsgMCBdLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGFwcGVuZFRvOiB0aGlzLmVsZW1lbnRbIDAgXSxcblx0XHRcdGFycm93VHlwZTogJ3JvdW5kJyxcblx0XHRcdGNvbnRlbnQ6ICc8YnV0dG9uIGRhdGEtYmFja3VwaWQ9XCInICsgJGJhY2t1cGlkICsgJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlc3RvcmVfYmFja3VwIGJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5IGJ1dHRvbi1zbWFsbFwiPjxpIGNsYXNzPVwiZGFzaGljb25zLWltYWdlLXJvdGF0ZSBkYXNoaWNvbnNcIj48L2k+IDwvYnV0dG9uPiB8IDxidXR0b24gZGF0YS1iYWNrdXBpZD1cIicgKyAkYmFja3VwaWQgKyAnXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlX2JhY2t1cCBidXR0b24gYnV0dG9uLXNlY29uZGFyeSBidXR0b24tc21hbGxcIj48aSBjbGFzcz1cImRhc2hpY29ucy10cmFzaCBkYXNoaWNvbnNcIj48L2k+IDwvYnV0dG9uPicsXG5cdFx0XHRpbnRlcmFjdGl2ZTogdHJ1ZSxcblx0XHRcdHRoZW1lOiAndHJhbnNsdWNlbnQnLFxuXHRcdFx0b25TaG93bjogKCkgPT4ge1xuXHRcdFx0XHRqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5kZWxldGVfYmFja3VwJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0YXJyb3dUeXBlOiAnc2tpbm55Jyxcblx0XHRcdFx0XHRjb250ZW50OiAkd3Bvbmlvbi50eHQoICdkZWxldGUnICksXG5cdFx0XHRcdFx0dGhlbWU6ICdsaWdodC1ib3JkZXInLFxuXHRcdFx0XHRcdGludGVyYWN0aXZlOiBmYWxzZSxcblx0XHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0alF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAucmVzdG9yZV9iYWNrdXAnICkudGlwcHkoIHtcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHRhcnJvd1R5cGU6ICdza2lubnknLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ3Jlc3RvcmUnICksXG5cdFx0XHRcdFx0dGhlbWU6ICdsaWdodC1ib3JkZXInLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sXG5cdFx0XHRwbGFjZW1lbnQ6ICdyaWdodCcsXG5cdFx0fSApO1xuXHR9XG5cblx0Z2V0X2V4dHJhX3ZhbHVlKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QgaW5wdXQjcG9zdF9JRCcgKS5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSNwb3N0IGlucHV0I3Bvc3RfSUQnICkudmFsKCk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkaW5wdXRzID0gdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1yYWRpb10nICkub24oICdjbGljaycsICgpID0+ICRpbnB1dHMucmVtb3ZlQXR0ciggJ25hbWUnICkgKTtcblxuXHRcdFx0JGlucHV0cy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLmZpbmQoICdpbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XScgKS5wcm9wKCAnY2hlY2tlZCcsIHRydWUgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmNob3NlbiggdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjaG9zZW4nLCB7fSApICkgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuLyogZ2xvYmFsIHNldFRpbWVvdXQ6dHJ1ZSAqL1xuLyogZ2xvYmFsIHdwb25pb25fZmllbGQ6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyAgICAgICAgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ2Nsb25lJywge30gKSApO1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkY2xvbmVfd3JhcCA9ICRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1jbG9uZS13cmFwJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1hZGRdJyApLFxuXHRcdFx0Ly8kcmVtb3ZlX2J0biA9ICRjbG9uZV93cmFwLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLXJlbW92ZV0nICksXG5cdFx0XHQkbGltaXQgICAgICA9ICggJGFyZy5saW1pdCAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLmxpbWl0IDogZmFsc2UsXG5cdFx0XHQvLyRpc190b2FzdCAgID0gKCAkYXJnLnRvYXN0X2Vycm9yICE9PSB1bmRlZmluZWQgKSA/ICRhcmcudG9hc3RfZXJyb3IgOiB0cnVlLFxuXHRcdFx0JGVyb3JfbXNnICAgPSAkYXJnLmVycm9yX21zZyxcblx0XHRcdCRzb3J0ICAgICAgID0gKCAkYXJnLnNvcnQgIT09IGZhbHNlICkgPyB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tZmllbGQtY2xvbmUnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1maWVsZC1jbG9uZS1zb3J0ZXInLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tY2xvbmVyLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6ICggZXZlbnQsIHVpICkgPT4gdWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApLFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0ucmVtb3ZlQXR0ciggJ3N0eWxlJyApLFxuXHRcdFx0fSA6IGZhbHNlO1xuXG5cdFx0JGNsb25lX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZF9idG4sXG5cdFx0XHRsaW1pdDogJGxpbWl0LFxuXHRcdFx0Y2xvbmVfZWxlbTogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1jbG9uZS1hY3Rpb24gPiAud3Bvbmlvbi1yZW1vdmUnLFxuXHRcdFx0dGVtcGxhdGU6ICR0aGlzLm9wdGlvbiggJ2Nsb25lX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZSApID0+IHdwb25pb25fZmllbGQoICRlLmZpbmQoICc+IGRpdi53cG9uaW9uLWZpZWxkLWNsb25lOmxhc3QtY2hpbGQnICkgKS5yZWxvYWQoKSxcblx0XHRcdHNvcnRhYmxlOiAkc29ydCxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoICRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLnByZXBlbmQoIGpRdWVyeSggJGVyb3JfbXNnICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHR3cG9uaW9uX25vdGljZSggJGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2hvd19hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5zaG93LFxuXHRcdFx0aGlkZV9hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5oaWRlLFxuXHRcdH0gKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkud3BDb2xvclBpY2tlcigpO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ3NldHRpbmdzJyApICksXG5cdFx0XHQkdmlldztcblxuXHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCAkc2V0dGluZ3MudGhlbWUgKSApIHtcblx0XHRcdCR2aWV3ID0gJHNldHRpbmdzLnRoZW1lO1xuXHRcdFx0ZGVsZXRlICRzZXR0aW5ncy50aGVtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHZpZXcgPSAnZGVmYXVsdCc7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0alF1ZXJ5KCAnYm9keScgKVxuXHRcdFx0XHQuYXBwZW5kKCBqUXVlcnkoICc8ZGl2IGNsYXNzPVwid3Bvbmlvbi1kYXRlcGlja2VyLScgKyAkdmlldyArICdcIiBpZD1cIicgKyB0aGlzLmlkKCkgKyAnXCI+PC9kaXY+JyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1kYXRlcGlja2VyLXJhbmdlJyApICkge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKVsgMCBdO1xuXHRcdFx0aWYoICRzZXR0aW5ncy5wbHVnaW5zID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zID0gW107XG5cdFx0XHR9XG5cblx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zLnB1c2goIG5ldyByYW5nZVBsdWdpbiggeyBpbnB1dDogJGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLXRvLWRhdGVdJyApWyAwIF0gfSApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItZnJvbS1kYXRlXScgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQnICkuZmxhdHBpY2tyKCAkc2V0dGluZ3MgKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3VuZGVmaW5lZCB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGdldCB3ZWJzYWZlKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl93ZWJzYWZlX2ZvbnRzJyApO1xuXHR9XG5cblx0Z2V0IGdvb2dsZV9mb250cygpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ2ZvbnRzJyApO1xuXHR9XG5cblx0YnVpbGRfb3B0aW9ucyggZGF0YSApIHtcblx0XHRsZXQgJHJldHVybiA9ICcnO1xuXHRcdGZvciggbGV0ICRfZCBpbiBkYXRhICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSBpc191bmRlZmluZWQoIGRhdGFbICRfZCBdICkgKSB7XG5cdFx0XHRcdCRyZXR1cm4gKz0gYDxvcHRpb24gdmFsdWU9XCIkeyRfZH1cIj4ke2RhdGFbICRfZCBdfTwvb3B0aW9uPmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHRsZXQgJHZhbCAgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpLFxuXHRcdFx0XHQkaHRtbCA9IG51bGw7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLndlYnNhZmUuZm9udHMgWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMud2Vic2FmZS52YXJpYW50cyApO1xuXHRcdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gaXNfdW5kZWZpbmVkKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgJHZhcmlhbnQgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkuaHRtbCggJGh0bWwgKTtcblxuXHRcdFx0aWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnY2hvc2VuJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hvc2VuOnVwZGF0ZWQnICk7XG5cdFx0XHR9IGVsc2UgaWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnc2VsZWN0MicgKSApIHtcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGh0bWxfdGVtcCA9ICR0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXG5cdFx0XHQkaW5wdXQgICAgID0gJGVsZW0uZmluZCggJ2lucHV0I2ltYWdlX2lkJyApLFxuXHRcdFx0JHByZXZpZXcgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3JyApLFxuXHRcdFx0d3BfbWVkaWFfZnJhbWUsXG5cdFx0XHQkYWRkICAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1hZGRdJyApLFxuXHRcdFx0JGVkaXQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktZWRpdF0nICksXG5cdFx0XHQkY2xlYXIgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1jbGVhcl0nICksXG5cdFx0XHQkbWFuYWdlICAgID0gZnVuY3Rpb24oICR0eXBlICkge1xuXHRcdFx0XHRsZXQgaWRzICAgPSAkaW5wdXQudmFsKCksXG5cdFx0XHRcdFx0d2hhdCAgPSAoICR0eXBlID09PSAnZWRpdCcgKSA/ICdlZGl0JyA6ICdhZGQnLFxuXHRcdFx0XHRcdHN0YXRlID0gKCB3aGF0ID09PSAnYWRkJyAmJiAhaWRzLmxlbmd0aCApID8gJ2dhbGxlcnknIDogJ2dhbGxlcnktZWRpdCc7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cblx0XHRcdFx0aWYoIHN0YXRlID09PSAnZ2FsbGVyeScgKSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdFx0XHRmcmFtZTogJ3Bvc3QnLFxuXHRcdFx0XHRcdFx0c3RhdGU6ICdnYWxsZXJ5Jyxcblx0XHRcdFx0XHRcdG11bHRpcGxlOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhLmdhbGxlcnkuZWRpdCggJ1tnYWxsZXJ5IGlkcz1cIicgKyBpZHMgKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCB3aGF0ID09PSAnYWRkJyApIHtcblx0XHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLnNldFN0YXRlKCAnZ2FsbGVyeS1saWJyYXJ5JyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAndXBkYXRlJywgZnVuY3Rpb24oIHNlbGVjdGlvbiApIHtcblx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRJZHMgPSBzZWxlY3Rpb24ubW9kZWxzLm1hcCggZnVuY3Rpb24oIGF0dGFjaG1lbnQgKSB7XG5cdFx0XHRcdFx0XHRsZXQgaXRlbSA9IGF0dGFjaG1lbnQudG9KU09OKCk7XG5cdFx0XHRcdFx0XHRpZiggaXRlbS5zaXplcyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCB0aHVtYiA9ICggdHlwZW9mIGl0ZW0uc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gaXRlbS5zaXplcy50aHVtYm5haWwudXJsIDogaXRlbS51cmwsXG5cdFx0XHRcdFx0XHRcdCR0bXAgID0galF1ZXJ5KCAkaHRtbF90ZW1wICk7XG5cdFx0XHRcdFx0XHQkdG1wLmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnLCBpdGVtLmlkICk7XG5cdFx0XHRcdFx0XHQkdG1wLmZpbmQoICdpbWcnICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBpdGVtLnVybCApLmF0dHIoICdzcmMnLCB0aHVtYiApLnJlbW92ZUNsYXNzKCAnaGlkZScgKTtcblx0XHRcdFx0XHRcdCRwcmV2aWV3LmFwcGVuZCggJHRtcCApO1xuXHRcdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWhlbHAnICkudGlwcHkoKTtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmlkO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRsZXQgJGU7XG5cdFx0XHRcdFx0Zm9yKCAkZSBpbiBzZWxlY3RlZElkcyApIHtcblx0XHRcdFx0XHRcdGlmKCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gZmFsc2UgfHwgc2VsZWN0ZWRJZHNbICRlIF0gPT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgc2VsZWN0ZWRJZHNbICRlIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRpbnB1dC52YWwoIHNlbGVjdGVkSWRzLmpvaW4oICcsJyApICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fTtcblxuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcblx0XHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRlZGl0LnNob3coKTtcblx0XHRcdFx0JGNsZWFyLnNob3coKTtcblx0XHRcdFx0JGFkZC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2FkZCcgKSApO1xuXG5cdFx0JGVkaXQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdlZGl0JyApICk7XG5cblx0XHQkY2xlYXIub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkY2xlYXIuaGlkZSgpO1xuXHRcdFx0JGVkaXQuaGlkZSgpO1xuXHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpLndwb25pb24taW1hZ2UtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBhcmVudCAgID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHRcdCRpbWFnZV9pZCA9ICRwYXJlbnQuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcgKSxcblx0XHRcdFx0JHZhbHVlICAgID0gJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKTtcblx0XHRcdGpRdWVyeS5lYWNoKCAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApLCBmdW5jdGlvbiggJGssICR2ICkge1xuXHRcdFx0XHRpZiggJHYgPT09ICRpbWFnZV9pZCApIHtcblx0XHRcdFx0XHQkdmFsdWUuc3BsaWNlKCAkaywgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRpbnB1dC52YWwoICR2YWx1ZS5qb2luKCAnLCcgKSApO1xuXHRcdFx0JHBhcmVudC5mYWRlT3V0KCAoKSA9PiAkcGFyZW50LnJlbW92ZSgpICk7XG5cdFx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHR9ICk7XG5cblx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblxuXHRcdGlmKCAkcHJldmlldy5oYXNDbGFzcyggJ2dhbGxlcnktc29ydGFibGUnICkgKSB7XG5cdFx0XHQkcHJldmlldy5zb3J0YWJsZSgge1xuXHRcdFx0XHRpdGVtczogJz4gZGl2Jyxcblx0XHRcdFx0Y3Vyc29yOiAnbW92ZScsXG5cdFx0XHRcdHNjcm9sbFNlbnNpdGl2aXR5OiA0MCxcblx0XHRcdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRoZWxwZXI6ICdjbG9uZScsXG5cdFx0XHRcdG9wYWNpdHk6IDAuNjUsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdGxldCAkaXRlbSA9IHVpLml0ZW07XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICd3aWR0aCcsICRpdGVtLndpZHRoKCkgKTtcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ2hlaWdodCcsICRpdGVtLmhlaWdodCgpICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cbiIsIi8qIGdsb2JhbCBnb29nbGU6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRtYXAgICAgICAgICAgICAgID0gdGhpcy5vcHRpb24oICdtYXAnLCB7fSApO1xuXHRcdCRtYXAuZGV0YWlscyAgICAgICAgICA9ICcjZ21hcF9maWVsZHNfJyArIHRoaXMuaWQoKTtcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xuXHRcdGlmKCAneWVzJyA9PT0gdGhpcy5vcHRpb24oICdzaG93X21hcCcgKSApIHtcblx0XHRcdCRtYXAubWFwID0gJyNnbWFwXycgKyB0aGlzLmlkKCk7XG5cdFx0fVxuXG5cdFx0bGV0ICRfaW5zdGFuY2UgPSB0aGlzLmVsZW0uZmluZCggJ2Rpdi5zZWFyY2hib3ggPiBpbnB1dCcgKTtcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcblx0XHQkX2luc3RhbmNlLmJpbmQoICdnZW9jb2RlOmRyYWdnZWQnLCAoIGV2ZW50LCBsYXRMbmcgKSA9PiB7XG5cdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcblx0XHRcdGdlb2NvZGVyLmdlb2NvZGUoIHtcblx0XHRcdFx0J2xvY2F0aW9uJzoge1xuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXG5cdFx0XHRcdFx0bG5nOiBwYXJzZUZsb2F0KCBsYXRMbmcubG5nKCkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0XHRcdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggJ2ZpbGxEZXRhaWxzJywgcmVzdWx0c1sgMCBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLyogZ2xvYmFsIHNldFRpbWVvdXQ6dHJ1ZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGFkZCAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiBidXR0b25bZGF0YS13cG9uaW9uLWdyb3VwLWFkZF0nICksXG5cdFx0XHQkZ3JvdXBfd3JhcCA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAnICksXG5cdFx0XHQkbGltaXQgICAgICA9ICR0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0JGVycm9yX21zZyAgPSAkdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtd3JhcCcgKSwgJ2FjY29yZGlvbicgKTtcblxuXHRcdCRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdH0gKTtcblx0XHR0aGlzLmJpbmRfZXZlbnRzX2Zvcl90aXRsZSgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24tY29udGVudCA+IC53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicgKVxuXHRcdFx0XHRcdFx0ICAuY2xpY2soKTtcblx0XHR9ICk7XG5cblx0XHQkZ3JvdXBfd3JhcC5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiAkYWRkLFxuXHRcdFx0bGltaXQ6IHBhcnNlSW50KCAkbGltaXQgKSxcblx0XHRcdGNsb25lX2VsZW06ICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdncm91cF90ZW1wbGF0ZScgKSxcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZVVwKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmUoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRpZiggalF1ZXJ5KCAnYm9keScgKS5maW5kKCAnbGluayNlZGl0b3ItYnV0dG9ucy1jc3MnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdGpRdWVyeSggJ2JvZHknIClcblx0XHRcdFx0XHRcdC5hcHBlbmQoICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaWQ9XCJlZGl0b3ItYnV0dG9ucy1jc3NcIiBocmVmPVwiJyArICR3cG9uaW9uLm9wdGlvbiggJ3dwZWRpdG9yX2J1dHRvbnNfY3NzJywgZmFsc2UgKSArICdcIiB0eXBlPVwidGV4dC9jc3NcIiBtZWRpYT1cImFsbFwiPicgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdH0sXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICR3cmFwLCAkbGltaXQgKSA9PiB7XG5cdFx0XHRcdGxldCAkZGF0YSA9ICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICk7XG5cdFx0XHRcdCRkYXRhLmhpZGUoKTtcblx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XG5cdFx0XHRcdHRoaXMuYmluZF9ldmVudHNfZm9yX3RpdGxlKCk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGdyb3VwX3dyYXAsICdhY2NvcmRpb24nICk7XG5cdFx0XHRcdC8vdGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgJGRhdGEgKTtcblx0XHRcdFx0JGRhdGEuZmluZCggJy53cG9uaW9uLWdyb3VwLXJlbW92ZScgKS50aXBweSgpO1xuXHRcdFx0XHR3cG9uaW9uX2ZpZWxkKCAkZGF0YSApLnJlbG9hZCgpO1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkZ3JvdXBfd3JhcC5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcDpsYXN0LWNoaWxkJyApLCB7IG5lc3RhYmxlOiB0cnVlIH0gKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZGF0YS5maW5kKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InICksICdyZWxvYWRfd3BfZWRpdG9yJyApO1xuXHRcdFx0XHQkZGF0YS5zbGlkZURvd24oKTtcblx0XHRcdH0sXG5cdFx0XHRzb3J0YWJsZToge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWFjY29yZGlvbi1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RvcDogKCBldmVudCwgdWkgKSA9PiB7XG5cdFx0XHRcdFx0dWkuaXRlbS5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoICRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGFkZC5iZWZvcmUoIGpRdWVyeSggJGVycm9yX21zZyApLmhpZGUoKSApO1xuXHRcdFx0XHRcdCRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHR3cG9uaW9uX25vdGljZSggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0LCBkaXYubm90aWNlJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRiaW5kX2V2ZW50c19mb3JfdGl0bGUoICRlbGVtID0gZmFsc2UgKSB7XG5cdFx0JGVsZW0gPSAoIGZhbHNlID09PSAkZWxlbSApID8gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApIDogJGVsZW07XG5cdFx0JGVsZW0uZWFjaCggKCBpLCBlICkgPT4ge1xuXHRcdFx0bGV0ICRkYXRhID0galF1ZXJ5KCBlICk7XG5cblx0XHRcdGxldCAkbWFjaGVkID0gdGhpcy5vcHRpb24oICdtYXRjaGVkX2hlYWRpbmdfZmllbGRzJyApO1xuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkbWFjaGVkICkge1xuXHRcdFx0XHRsZXQgJGVsZW0gPSAkZGF0YS5maW5kKCAnOmlucHV0W2RhdGEtZGVwZW5kLWlkPVwiJyArICRtYWNoZWRbICRrZXkgXSArICdcIl0nICk7XG5cdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdCRlbGVtLm9uKCAnY2hhbmdlLCBibHVyJywgKCkgPT4gdGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdHVwZGF0ZV9ncm91cHNfdGl0bGUoICRlbGVtID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRsaW1pdCA9IDE7XG5cdFx0JGVsZW0gICAgICA9ICggZmFsc2UgPT09ICRlbGVtICkgPyB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1ncm91cC13cmFwID4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkgOiAkZWxlbTtcblxuXHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdGxldCAkZGF0YSAgICA9IGpRdWVyeSggZSApO1xuXHRcdFx0bGV0ICRoZWFkaW5nID0gdGhpcy5vcHRpb24oICdoZWFkaW5nJyApO1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJ2hlYWRpbmdfY291bnRlcicgKSApIHtcblx0XHRcdFx0JGhlYWRpbmcgPSAkd3Bvbmlvbl9oZWxwZXIuc3RyX3JlcGxhY2UoICdbY291bnRdJywgJGxpbWl0LCAkaGVhZGluZyApO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgJG1hY2hlZCA9IHRoaXMub3B0aW9uKCAnbWF0Y2hlZF9oZWFkaW5nX2ZpZWxkcycgKTtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1hY2hlZCApIHtcblx0XHRcdFx0bGV0ICRlbGVtID0gJGRhdGEuZmluZCggJzppbnB1dFtkYXRhLWRlcGVuZC1pZD1cIicgKyAkbWFjaGVkWyAka2V5IF0gKyAnXCJdJyApO1xuXHRcdFx0XHRpZiggJGVsZW0ubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHQkaGVhZGluZyA9ICR3cG9uaW9uX2hlbHBlci5zdHJfcmVwbGFjZSggJG1hY2hlZFsgJGtleSBdLCAkZWxlbS52YWwoKSwgJGhlYWRpbmcgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGhlYWRpbmcgPT09ICcnICkge1xuXHRcdFx0XHQkaGVhZGluZyA9ICR3cG9uaW9uX2hlbHBlci5zdHJfcmVwbGFjZSggJ1tjb3VudF0nLCAkbGltaXQsIHRoaXMub3B0aW9uKCAnZGVmYXVsdF9oZWFkaW5nJyApICk7XG5cdFx0XHR9XG5cblx0XHRcdCRkYXRhLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi10aXRsZSBzcGFuLmhlYWRpbmcnICkuaHRtbCggJGhlYWRpbmcgKTtcblx0XHRcdCRsaW1pdCsrO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdC8vZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuLypnbG9iYWwgc3dhbDp0cnVlKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRfdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJF90aGlzLmVsZW1lbnQsXG5cdFx0XHQkYXJncyAgICAgICA9ICRfdGhpcy5vcHRpb25zKCksXG5cdFx0XHQkaW5wdXQgICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1pbnB1dCcgKSxcblx0XHRcdCRyZW1vdmVfYnRuID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24taWNvbnBpY2tlci1yZW1vdmVdJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLWFkZF0nICksXG5cdFx0XHQkcHJldmlldyAgICA9ICRlbGVtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXG5cdFx0bGV0ICR3b3JrID0ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsZW1zOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdHBvcHVwOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsbTogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBBIE5ldyBJbnN0YW5jZSBmb3IgVG9vbFRpcC5cblx0XHRcdCAqL1xuXHRcdFx0aW5pdF90b29sdGlwOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCAkYXJncy5wb3B1cF90b29sdGlwICE9PSAnZmFsc2UnICkge1xuXHRcdFx0XHRcdGxldCAkdHAgPSAoIHR5cGVvZiAkYXJncy5wb3B1cF90b29sdGlwID09PSAnb2JqZWN0JyApID8gJGFyZ3MucG9wdXBfdG9vbHRpcCA6IHt9O1xuXHRcdFx0XHRcdGlmKCAkd29yay5lbGVtcy5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JHdvcmsuZWxlbXMudGlwcHkoICR0cCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSW5pdHMgRm9yIGVhY2ggYW5kIGV2ZXJ5IFBPUFVQLlxuXHRcdFx0ICogQHBhcmFtICRlbG1cblx0XHRcdCAqIEBwYXJhbSAkaW5zdGFuY2Vcblx0XHRcdCAqL1xuXHRcdFx0aW5pdDogZnVuY3Rpb24oICRlbG0sICRpbnN0YW5jZSApIHtcblx0XHRcdFx0JHdvcmsuZWxtICAgPSAkZWxtO1xuXHRcdFx0XHQkd29yay5wb3B1cCA9ICRpbnN0YW5jZTtcblx0XHRcdFx0JHdvcmsuZWxlbXMgPSAkd29yay5lbG0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cdFx0XHRcdGxldCAkaGVpZ2h0ID0gJHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcgKTtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcsICRoZWlnaHQgKTtcblx0XHRcdFx0JHdvcmsuc2VsZWN0KCk7XG5cdFx0XHRcdCR3b3JrLmlucHV0KCk7XG5cdFx0XHRcdCR3b3JrLmVsZW1zLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJGljb24gPSBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1pY29uJyApO1xuXHRcdFx0XHRcdCRpbnB1dC52YWwoICRpY29uICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0XHRzd2FsLmNsb3NlTW9kYWwoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQkd29yay5pbml0X3Rvb2x0aXAoKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFdvcmtzIHdpdGggUE9QVVAgSW5wdXQgU2VhcmNoLlxuXHRcdFx0ICovXG5cdFx0XHRpbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0nICkub24oICdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdvcmsuZWxlbXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKS5zZWFyY2goIG5ldyBSZWdFeHAoICR2YWwsICdpJyApICkgPCAwICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYW5kbGVzIFNlbGVjdGJveCBpbiBwb3B1cC5cblx0XHRcdCAqL1xuXHRcdFx0c2VsZWN0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgc2VsZWN0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblx0XHRcdFx0XHQkd3Bvbmlvbi5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0XHQnd3Bvbmlvbi1pY29uLWxpYic6ICR2YWwsXG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHdvcmsuZWxtLCAkd29yay5wb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLmRpc2FibGVMb2FkaW5nKClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmKCAkaW5wdXQudmFsKCkgPT09ICcnICkge1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQmx1ciBFdmVuIC8gY2hhbmdlIGV2ZW4gaW4gaW5wdXRmaWVsZC5cblx0XHQgKi9cblx0XHQkaW5wdXQub24oICdrZXl1cCBibHVyIGNoYW5nZSBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYoICR2YWwgIT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnPGkgY2xhc3M9XCInICsgJHZhbCArICdcIj48L2k+JyApLnNob3coKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBBZGQgQnV0dG9uIENsaWNrIEV2ZW50LlxuXHRcdCAqL1xuXHRcdCRhZGRfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkcG9wdXAgPSBzd2FsKCB7XG5cdFx0XHRcdHRpdGxlOiAkZWxlbS5maW5kKCAnLndwb25pb24tZmllbGQtdGl0bGUgaDQnICkuaHRtbCgpLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHRhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHR3aWR0aDogJzcwMHB4Jyxcblx0XHRcdFx0Y3VzdG9tQ2xhc3M6ICd3cG9uaW9uLWljb24tcGlja2VyLW1vZGVsJyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdCRfdGhpcy5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvblN1Y2Nlc3M6ICggJHJlcyApID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHBvcHVwX2VsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkcG9wdXBfZWxlbSwgJHBvcHVwICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25FcnJvcjogKCkgPT4gJHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxuXHRcdFx0XHRcdFx0b25BbHdheXM6ICgpID0+ICRwb3B1cC5kaXNhYmxlTG9hZGluZygpLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgUmVtb3ZlIEJ1dHRvbiBFdmVudC5cblx0XHQgKi9cblx0XHQkcmVtb3ZlX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRpbnB1dCAgICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3X2FkZCA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXctYWRkJyApLFxuXHRcdFx0JHByZXZpZXcgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcgLndwb25pb24tcHJldmlldycgKTtcblxuXHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gbnVsbDtcblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHByZXZpZXdfYWRkLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3LnNob3coKTtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25faW1hZ2VfdXBsb2FkX3VwZGF0ZWQnLCAkaW5wdXQsICRwcmV2aWV3LCAkcHJldmlld19hZGQgKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlld19hZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkdGhpcy5tZWRpYV9pbnN0YW5jZSApIHtcblx0XHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gd3AubWVkaWEoIHtcblx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdHRpdGxlOiAkdGhpcy5vcHRpb24oICdmcmFtZV90aXRsZScsIFwiU2VsZWN0IEltYWdlXCIgKSxcblx0XHRcdH0gKTtcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9uKCAnc2VsZWN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gJHRoaXMubWVkaWFfaW5zdGFuY2Uuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKS5hdHRyaWJ1dGVzO1xuXHRcdFx0XHRsZXQgdGh1bWJuYWlsICA9ICggdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsLnVybCA6IGF0dGFjaG1lbnQudXJsO1xuXHRcdFx0XHQkcHJldmlldy5maW5kKCAnaW1nJyApLmF0dHIoICdzcmMnLCB0aHVtYm5haWwgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGF0dGFjaG1lbnQudXJsICk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuaWQgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3LmZpbmQoICcud3Bvbmlvbi1pbWFnZS1yZW1vdmUnICkub24oICdjbGljaycsICgpID0+ICRpbnB1dC52YWwoICcnICkudHJpZ2dlciggJ2NoYW5nZScgKSApO1xuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJHNldHRpbmdzID0gdGhpcy5vcHRpb24oICdpbnB1dG1hc2snICk7XG5cdFx0XHRpZiggJHNldHRpbmdzICkge1xuXHRcdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCAkc2V0dGluZ3MsICdJbnB1dE1hc2snICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5pbnB1dG1hc2soICRzZXR0aW5ncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0aGlzX2VsZW0gPSAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLXRhYi13cmFwICcgKTtcblxuXHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkgYScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRsZXQgJF90aGlzID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLXRhYi1jdXJyZW50JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkuaGlkZSgpO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdGxldCAkdGFiID0gJF90aGlzLmF0dHIoICdkYXRhLXRhYi1uYW1lJyApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2RpdiN3cG9uaW9uLXRhYi0nICsgJHRhYiApLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKS5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50IGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpOmZpcnN0LWNoaWxkIGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgaXNfdW5kZWZpbmVkIGZyb20gJ3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfdW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmdsb2JhbF92YWxpZGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtYWN0aW9uLWNvbnRhaW5lciAgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLWFkZF0nICksXG5cdFx0XHRsaW1pdDogKCAtMSA9PT0gdGhpcy5vcHRpb24oICdsaW1pdCcgKSApID8gbnVsbCA6IHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtcmVtb3ZlXScsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRlbGVtLmZpbmQoICc+IGRpdjpsYXN0LWNoaWxkJyApICk7XG5cdFx0XHR9LFxuXHRcdFx0b25SZW1vdmU6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2tleV92YWx1ZV91cGRhdGVkJywgJGVsZW0gKTtcblx0XHRcdH0sXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogKCkgPT4ge1xuXHRcdFx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQnICkubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5hZnRlciggalF1ZXJ5KCB0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKSApLmhpZGUoKSApO1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdHdwb25pb25fbm90aWNlKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIGVyci5lbGVtZW50LnBhcmVudCgpLnBhcmVudCgpICk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRhcmdzXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCB0cnVlICE9PSBpc191bmRlZmluZWQoICRhcmdzLmtleSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDAgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3Mua2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGlmKCB0cnVlICE9PSBpc191bmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMSApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy52YWx1ZSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVlID09PSBpc191bmRlZmluZWQoICRhcmdzLmtleSApICYmIHRydWUgPT09IGlzX3VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5pbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80UUFZUlhocFpnQUFTVWtxQUFnQUFBQUFBQUFBQUFBQUFQL3NBQkZFZFdOcmVRQUJBQVFBQUFBOEFBRC80UU50YUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THdBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpNdFl6QXhNU0EyTmk0eE5EVTJOakVzSURJd01USXZNREl2TURZdE1UUTZOVFk2TWpjZ0lDQWdJQ0FnSUNJK0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0UxTlBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZiVzB2SWlCNGJXeHVjenB6ZEZKbFpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMM05VZVhCbEwxSmxjMjkxY21ObFVtVm1JeUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiWEJOVFRwUGNtbG5hVzVoYkVSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9UQkdORVZEUWpnNFJEQXhSVEF4TVRoQk1rUkRORVUyTnpoRlFrRXpSRGdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UlVVNU4wRTNPRUUxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSVVU1TjBFM09EazFPVU5GTVRGRk5UZzFSVVZCTUVVNU4wSTJRa1pCTXpJaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5DQlhhVzVrYjNkeklqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZORE0yTURVMlF6SkdRa1ZFUlRBeE1UazFOVVZDUlRBelJVRTRRalJFTlVJaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9FVkdORVZEUWpnNFJEQXhSVEF4TVRoQk1rUkRORVUyTnpoRlFrRXpSRGdpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo3LzdnQU9RV1J2WW1VQVpNQUFBQUFCLzlzQWhBQUdCQVFFQlFRR0JRVUdDUVlGQmdrTENBWUdDQXNNQ2dvTENnb01FQXdNREF3TURCQU1EZzhRRHc0TUV4TVVGQk1USEJzYkd4d2ZIeDhmSHg4Zkh4OGZBUWNIQncwTURSZ1FFQmdhRlJFVkdoOGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeC8vd0FBUkNBRVRBUk1EQVJFQUFoRUJBeEVCLzhRQWlRQUJBQU1BQXdFQkFBQUFBQUFBQUFBQUFBUUZCZ0VEQndJSUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVBQUJBd01EQVFNR0J3OENBd2tBQUFBQkFBSURFUVFGSVJJR01VRVRCMUZoY1lFaU1wR2hzY0ZDZ2hUaFVtSnlrcUt5d2lNemM3TjBGVFlrTjlIVEYrSkRVNU9qVkRWVkZoRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFQL2FBQXdEQVFBQ0VRTVJBRDhBL1ZLQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lPdWVlS0NNeVN1REdEcVNnNkk4dmpYbWpaMi9XcTM1UUVIZXk0dDVQY2xZLzhBRmNEOGlEc1FFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUZOeWVYYmJSUi9mdUovSkgzVUdiM0lPZHlEc2p2TG1QOTNLOXZtRGlFRWxtY3liQlFUa2p6aHArTWhCSVp5YTliUU9aRy95bWhCK0lvSk1mS1cvOTViK3RyditJUVNZK1NZOTN2QjdQT1JVZkVTZ2t4NWpHU2U3Y05INDFXL3BVUVMyUFk5b2V4d2MwOUhBMUJRY29DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSU0zeXFiOXZCRjk2MHUvS05QMVVGYmlvRzNOL0RDOGJtT1B0RHlnQ3BRYVNUajJNZVBaWVl6NVd1UHoxUVJaT0xRRWZzNW5BK2NBb0l6K0wzWTl5Wmg5TlI4eUNNN2oyVkIwakR2T0hOK2NoQkdreG1Tak5IVzhucWFUOGlEb2ZITkdhUFk1cDhoQkNENDNJTmR4MWptNHhwSjk5em5OOUhUNWtGbWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3gvSjU5K1VMZi9DWTF2NjM2eURuaTdDL0poM1pHMXhQckZQblFhOUFRRUJBUVFNNCtPUEdUdWMwRWx1MEVqdE9pREVia0c3eE1aanh0dXc5ZGdQNVd2em9KYUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDREFacWZ2TXJjdUhUZVFQcTZmTWd1T0d4a3Z1SmV3QU5yNjZvTk9nSUNBZzRjNXJXbHppR3RIVW5RSUtYbGs3UmpHdEJyM2p4UWp0QUNESHNKYzROSFVtZzlhRDBwalF4aldqbzBBRDFJT1VCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFmTWtzY2JkejNCbzhwUVJKTXhaczBhUzgvZ2pUNDZJSVV1Ym5kcEcwTTg1MUtDVmk3bVdXT2FTWjFRMDE5QXBxZ3dFMHBkSzkzM3ppZmhLRFk4TllSaTN1UDA1U1I2Z0FnblpQTjJPUForMWR2bFB1eE4xZDYvSWdxTVR5dDg5OFlyc05aRkthUkVhYlQ1Q2ZPZzA2Q3B5ZkpNZlpBc0R1K243STJkQWZPVUdTeUdjeUYrNHRrZVd4RTZSTjBiMTdmS2d0T1V2N3V3eHNIMGhIVnpmUTFvQ0NvdzdUSmxiUnRLL3RXRWp6QndKUWVqSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lLck90ZHRoZDlFRWcrazBRVkNBZ3RHa1E0QzZsSm9USEpyNTZFQkI1L3ZRYXArVHVNWnhpeUZ2UmswKy8yNkRRYmllMzBvTXZKUEpJOHZrY1h2Y2F1YzRra24wbEI4NzBGbk55WExTMnJiWXpFTUFvNXcwYzcwdTZvS3plZzc3RUdTOWdqR3U2Um9wNjBGMXphVWYzU0pqZWpJUlVlUWx6dm1RUitJc01tYmlOS2hqWHVQNUpIem9OK2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnaTVTTHZMTi9sYjdROVNEUFVRS0lKbWZjSU9LdkZhRjdZd1BTNTRKK0pCZ0E0a2dlVkJydVRXRjdMamNZeTNnZEl5R0wyeTNXaExXOW5xUVpaOXZkTTkrRjdmUzBoQjFGeEhYUkJ4dlFONkM0NG13UzU2MkRoVnJkenZXR0VqNDBIeHllY3Z6bDFVMTJ1MmoxQUlMWGdVZTY3dXB2dkkydEgxai9BTmxCdFVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQndCQkI2SFFvTXZQSDNjcjR6OUZ4RmZRZytXaXBIblFPZHk5emliVzMrK2VQekcvZFFZVVNFRUVkUWFoQmNRY3h6c05CMzRlQUtBUGEwajRnRUU5dmlCa0RwTGJRT2IyZ0J3K1Z4UWRnNWhocE5MakV4MVB2T0FZZmxhZzVia09DejZ5Mmpvbkh5YndQelhJRGNQdys3Sk1HUTdqOEY3ZzM5T2lDejQ5Z01mWlg3cmkzdm1YWHNGckd0TFNRVDFPaEtERFgwNWx2WjVDYWw3M0d2clFiVHcraEF4MXpQMnlTN1BVeG9QNjZEVklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0NpekVPeTYzMDBrRmZYMm9JMXRIdnVJMkR0Y0VGWDRpM0IrMDJsdjJOWTZUOG8wL1ZRWStxQlZBcWdWUUtvRlVISWU0ZEhFZXRCeHVRZW04S2hFZkg0SERySzU3eitWdC9WUVhxQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Fncjh6RnV0MnlBYXNkcWZNZnVvSzdHN2Z0c2U0MDErT2lEbmt2RlA3ek5IT3k0N21XTm15aGJ1YVJVbnlqeW9NemNlSCthai9kUGltSG1kdC9TUVFMamlQSVlQZXRIUC9oa1AvUnFnZ1Q0ekoyNHJQYXl4RHl2WTV2eWhCR0pJT3FEamNnYmtEY2dia0hzT0RnN2pEMmNWS0ZzTEtqemtWUHhsQk5RRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVIVmN4Q1cza1o1UjkxQm1qVUduYUVIWXk0dUdlNUk1dm9KQ0R0WmtyMW5TUW4wNi9LZzc0OHpkQSswMFArTDVFRmhiWFZ6TVJ2Z0xHbjZSUDNFSFpQWjJsd0tUd3NsSDRiUTc1VUZmTnhUajAxZDFsR0NlMXRXL0lRZ3I1dkQ3QXZKTFROR2V3TmNDQjhJS0NCTDRhUkVreFg3bWpzRG82L0dIQkJEYjRiNUVYREE2NWlNRlJ2Y04yN2IyMGJUNTBIb0RHaHJRMGRHaWc5U0RsQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUZGZTJNNHVuN0dGelhtclNCcHJxZzVodzl5L1Y1RVk4L1ZCTml3MXUzMzNGNStBSUprY0VNWDd0Z2I2QWcrMEJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJCRnltUmh4dU91Yitkcm5RMnNicFpHc0FMaTFncWFBa0N2clFRT0w4c3hQSkxPUzV4NWUzdVg3SllaZzFzalNSVUVocGNLTzdEVkJieVBESTNQUFJvTGpUekNxQ3A0dnlqSDhreDhsOVl4eXh3eHltQnpadzFydHpXdGRVYlhQRktQSGFndUVCQVFSc2xmdzQvSFhOL01IT2h0WW56U05ZQVhGckdseDJna0N1bmxRWWovclp4WC8ydDkvNWNQL05RU0xIeGk0aGN6Q0tUN1RhQTBBa25qYnQxL2h1a0krQkJ0bzVJNVkyeVJ1RDQzZ09ZOXBCYTVwRlFRUjFCUWZTQWdJQ0FnSUtiam5Lc2ZuL3RuMk9PYVA3RkwzTXZmQnJhdTExYnRjL1RUdFFYS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdwZWJmNGptUDZTWDlBb1BKZU52eUhGTFhEOHFoM1RZdkk5NUJrb2gyYlpuc0g1ckE1dm5CSGFnOXJOekJkWTAzTnU4U3dUUWw4VWpkUTVybTFCQ0RFZUNmK0szWDlkSi9KaVFUTTM0bTJkcGtuNHZFV0UrYXY0aVJMSGIxMmdnMGNBV3RrY1MzdG8yaURuQmVKZG5lNUptS3lsaFBoc2pLYVJSWEZkcmllamR6bXh1QlBaVnZtUWJOQlQ4eC94UE0vMFUvOHNvS3J3cC93WEgvalQvejNvSlBpSmFZeWZpT1JmZk1ZZTVoYysya2RUYzJiNkcwOWhMcUR6b0tYaUdjdWNSNFd4NVNlRTNIMlFTZDFFNTJ3dWo3NHRhTjFIVUFycG9nTjhWSjdrUU94ZUJ1Y2pHV1JtOGxoTGl5R1NSb2NZOXdqY0hGdGFFbmFndk9VYzN4bkhoREZPeDl4a0xnQXcyTUh0UElKcFUrUVYwSGw3RUZIRDRxVFc4clA3OXgrOHhOcklRMXR5OFBlMnZuRG80ajhGVUYveXZsUndlRWp6RnZhaklXcjNzRHl5WFlCSElQWmtCMnZEaFdnOWFDN3Q1NHJpM2l1SVhib3BtTmtqY08xcmhVSDRDZ284WHl3NUhsR1J3dHZhVnQ4YTBkOWZkNW9aRFFiQkh0OHU3NlhZZzQ0ankzL0FQUmYzRC9TZlpmc00zY2Z2TzgzOWZhOTFsT2lDdnp2aVJhMldTa3hlS3NKOHprWWFpYUszQjJ0SXBVYm10a0pJN2FOMDZJT2NGNGoyMTdrbzhYbGNmUGhzak5wREZjQTdYazlBSE9iR1FUMlZhZ3NUeXN4OHlIRzU3WHV4TEIzOXJkOTVYdktEVnV6YUtlNjc2UjZJUHJtWEtvdU5Zais0UGgrMHZkSTJLS0RmM2U0dXFUN1cxL1JyU2VpQ3p4dVFodjhaYlpDUDJZcm1Ga3dxZmREMmgxQ2ZNZ3F1SWNxZHlPQzd1bVduMmUwZ25NTnZLWGw1bERkUzdic1p0MEk3VDhTQy9RRUJBUUVCQVFFQkFRRUZMemIvRWN4L1NTL29GQlI4RHhkbmxmREt6eDk0emZiM0RiaHJ4MmovVVNFT0huYWRRZ3F1RjVTOHdOL2U4THk3Nm1OcjM0eVkrNjVwQmR0RmV4dzlwdm5xRUR3cG5rdCtBWmVlTFNTS2U0ZXcvaE50b3lFRS93Y3NiYUxpNzd4clFibTZuZjMwbjBpR2FOYlh5RHI2MEh6NHkyZHU3amtGOFFHM2R0Y01FRW8wY0E4SGMwSHIyQStwQnRzZE5KTmo3V2FRMWtraGplOCtkelFTZ3IrWS80bm1mNktmK1dVSG5YQ2VGWi9KOGJ0YjIwNVBkNDYza01nWlp4Q1RZemJJNXBwdG1qR3BGZmRRWHJQQ2lXNmxZYzd5Qzh5c01iZzVrTGk1bzByVUV2Zk4xODFFRnZ6MjF0N1hnR1J0cmVNUlFRd01aRkcwVURXdGUwQUJCMmVHOXZGQndyR0NOdE44YnBIbnRMbnZjU1NndzB0MXlwL2lWbWJyQ1dFR1F2YllDSnJia2dDS0tqV2dzckpEcWFmSDUwRnBrN2p4Y3lXUHVMQzY0L1l1dDdsam81QUhzcUE0ZFJXNU9vNmp6b0x2alhHOGpKd0U0RE9SOTFPNWtzSWFYTmVXdExpNk03bUZ3OWtrVTlDQ3Y0VHljMlBCNzRYK2wxeDR5UVN4bnFkdGU2YitWN0E5Q0NiNFdZdVMyNDRjamM2M21YbGRkVFBQVXRKSVo4T3J2V2dwL0RLWjhOaHlpYVA5NUhjU1BaNld0ZVFnbytCWFhpQmI0cVdmQVltMXZJTG1aenBydWR6ZTljOFVCRHF6eG1nN05PMUJPNUxZZUt2SWJhQ0c4d2xyQzYybEUwRThFc2JaV3VBcG81MXcvUS9NRUY5NGh3M05wYjRiazRaUzd4RThadTJ0N1lwYUNSdW40V25yUWNjbWdoNUx5N0hZWnAzMlZ0WlRYazVwVnBNN2U3aXJYeWFFZWxCUjR2a3MxajRXWDlvOHVHUnM1Wk1ZeGxmYURwWGFVUDRMWE9wK0tnOUE0bGhoaHVPMk9Qb0JMRkdEUFR0bGY3VC93QTRvTGRBUUVCQVFFQkFRRUJBUVZITDRKcCtMNVdHQ04wczBscksyT0pnTG5PY1dtZ0RScVNnZytHOXBkMm5DOGRiM2NNbHZjTTc3ZkRLMHNlMnM4aEZXdUFJcURWQkQ4U2VKU1pyR052ckZwR1h4LzdTM0xQZWUwR3BZS2ExN1crZjBvSTNoSmk3MjA0dmQyMlJ0SmJaOGwzSWU1bmpkRzV6SFF4TnJ0Y0FhR2hDQ3FzYlBtWEJMdTZ0N0RIUHplQ25lWklXUkVtVnBOQjBhSHVCcFFPOWtnOWZLZ1h0aHpIbmQ1YVJaSEhPd3VCdDVPOWxqbEo3MTVGV25Sd1k0dXBVRDJRQld1dWlEMDVqR3NhR05GR3RBRFFPZ0FRVmZLNFpwK01aYUdHTjBzMGxwTTJPTmdMbk9jWXlBR2dha2xCVytHbG5kMmZEYkczdTRKTGU0WVp0OE1yWE1lS3pQSXExd0IxQlFhZEJRYyt0cm02NGhrN2UyaWZQUEpHME1pamFYdmNkN1RvMXRTVUgxd2EydUxiaVdNZ3VZbnd6eHcwa2lrYVdQYWR4MExUUWhCbmVVY2Q1SGplVGpsWEdvaGN5eXNFZC9aSHE4QUFhQ29xSEJvNmFnaXVxQ1BkY3I4UXMzYnV4Mk40N1BpcHBoc2t2cDNQWUdOT2hjeHoyUmJUNktueWFvTnhnY2RjWTdFMjFuYzNVbDdjUk4vYlhVem5QYzk3aVNkWEVtZ3JRZVpCNXp6YmlXYmw1VkpiNHlHUTR6UG1CMS9MR3h6bVJ1aWY3UmU0Q2pmdjllcUQxSzNnaXQ0STRJV2hrVUxXeHh0SFFOYUtBZkFndy9oaGpMKzBibkczMXBMYnRudXk2TVRSdVlIc083VnU0Q29RVmRyWWN3NEpmM2NlTHg3c3pnTG1Udlk0WXFtUmhOQjlFUGVIVW9DZHBCcFZCS056ei9sdDVid2kwdU9OWW1KKys1bTd4OGM3NmFiUWFSUE5kYWV6VHk5aURkWmJHd1pMRjNXT20vZFhNVG9pZXBHNFVEdlNEcWd4L2hmaHN2Yk55RjltSXBJcjE1aXM0aEswdFBjMnNZWTB0QnBWcDAxN2FJS3QvRDhqSjRsU1JtQ1Qrd3Z1R1pTU1FzZDNKbVl3bmJ1cHQzZDQ4MUZlaUQwOUFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJCQXorV2l4R0Z2TWxKU2x0RTU3UWZwUDZNYjlaeEFRZVM4UWt5SEhzN2hjeGZQTHJia3JaR1hEajJPZkw3TGoyZGRqdlFTZzlwYzVyV2x6aUEwQ3BKMEFBUWRGbGYyRjlEMzFsY3hYVUlKYVpZWHRrYnVIVWJta2l1cUJlMzloWXc5OWUzTVZyQ1NHaVdaN1kyN2owRzV4QXJvZzdUSkdJKzhMZ0k2YnQ5UnRwMXJYeUlJRVhJK1BUVGkzaHlscEpPU1FJbVR4T2VTT28yaDFVRXU4amhsczU0cG5iSVh4dmJLK29HMXBhUTQxT2dvRUdieDJMd21NNFRrTFhEWGYyMnlFTnk0VDk1SEw3UmpPNGJvdzF1aUNMNFJmNFhCL0dtL1NRYW0reStKc0MwWDE3QmFGM3VpZVZrZGZSdUlRZGxuZjJON0YzMW5jUlhNSjA3eUY3WkcrVHEwa0lNSHl6L0FIUjR6L0RQNlQwRzNibThNNjhOazIvdGplQTdUYkNWaGxyNU5sZDN4SVBqUC84QXdXUi9wWnY1YmtHYThJdjhMZy9qVGZwSU5WZlpiRldHMDMxNUJhQjN1OS9JeU92bzNFZVJCMjIxM2EzVUltdFptVHd1OTJTSndlMDl1aGFTRUhhZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSVBPZkZySnh6eVl2alluWmJpOW1iTmR6UGMxaldSQjJ4cGNYYVVydWQ5VkJ6NGh5OFV5SEQvc3RoazdKMCtOMlNXVVVkeEVYRnNZMkZqUUhWUHNkQjVVR3A0VG5SbStOV2Q2NTI2Y043cTU4dmV4K3k0bjhiM3ZXZ3pmRFIvWU9hNW5qYnZadGJ2OEExMlBIWlE5V2o2cHA5VkE1bVA3OXpYQzhiYU4xcmJIN2RrQjFGQjBhZnFpbjFrRmp6VGpHU3oxL1pSejNrZHR4dUNqNzZMdkhNbGUrcC9CMlU5MENydEtsQm0rUmNkOEpZTVZjQzJ1NEliMXNiekMrRzVmTy92R2pRT1lIU0RWM1hSQmVjSXlGMWUrR3puM0x6TEpGRGN3aDd0U1dzRGcycDh6ZEVFSHc5LzJ3di94YnorV2dtZUZ3dWo0ZjB0Q3dYWmRjZlp6SlVNRWxUdDNVRGpTdlhSQlgyUEErTFdjY2svTmIrM3VzdmNTT2RMSkxkdWlacjAya3VoY1RUVTFRVldKZmdNVjRqNDZQaTE0Wk1mZXRNZDNDMXpuc0JJZFJ1NTNVQ2djTlRRb0ozaVBaWGw5ejNCV2RuTTYzbm5oMkNkbnZNYVh2M3VGTzBNcWd0Nzd3ZzRxL0Z1Z3MyU1FYelcvc3IweVBjNHZIVGUwblpUeTBhRUhSd3pPM21VNEJrNGI1eGZkNCtLNHRueU9OWE9hSWlXbHg3U0s3ZlVnK09BNVQrMWVHRTJSMmh4dGZ0RWpHbm9YQSt5RDZTZ3krQW04Tzd5RitSNWZrWkwzTVhUbk9taWMyNkRZeFU3UURFMFYwOGhvT2dRU0xQTmNZd1hMTWROeFMra2x4MTlJSU1qWVBFd1l3UGNHdGUweXRiV202bzFKMDYwS0QyTkFRRUJBUUVCQVFFQkFRRUJBUUVCQUpBRlRvQWc4cTQvaWNmempsdWF5K1RpTnhpNENJTFNQYzVnTkRSaEJZV25ScmFrZmhJTlYvMHM0SC93RFdmK3ZjZjh4Qm5lQVNPNDd6UExjVW1kU0NaeG1zYTl1MGJoU3ZhNkk2L2lvTFR4SWdmajd2RDhxaEh0NHk0YkhkVTZtM2xORDhwYjlaQjErR3NUOGxrTTF5dWNIZGtKekRhVjZpQ01qL0FJTmI5VkJWYzdsdEwzbjFsaStRWFQ3WEFOZ0VqQUNXc2RJZDN0T2QyVmNOdTdzOHlEblBNOEo4TGlibDFoRmEzbDlMRzV0c3lPVTNSRWhhUTF4TG5TTllBZFNnc2ZEb2crR2x3QWRRTHNINENVSFY0ZS83WVgvNHQ1L0xRZFhEcnE5dFBDYTd1YktvdW9tM0xvbk5GUzBnNnVING8xUVZuRU1SNGFYbUdaZTV5OWpteWtoYys3YmRYTG9YTmZ1UHV0RDJGMm5iclZCSGp5SEdianhMdzBmSDRJNGJHM2YzYnBZMjdCSklkMVhEdEk2QVZRVy9pRmxHNHJ4QXdPUWV4MGtkdkNYeXRZS3U3dmM4UElINExTU2cxV1I4UStKMm1NZmZSNUdHNU8yc1Z2RThPbGM3c2JzOTV2MWdFR2Q0SmpMdTI0RGw3MjdhV1NaSmx4Y01hUlQyTzZJRHRmdmpVK2hCODhLeHN1VDhLYnF3aC9mVGk0YkVEb0M4T3EwZXNoQkU0RmtlQ1B4TGNkbmJPd3RjdFpGMFU3cnlHRmhmUnhvUytRZThQZElKclVJTE4yWjRVL2tsamljRGdySEp6eVByUGR3UlJNWkExcmg3WWVJM2J0bzEwSTdOZFVIb0NBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Q0dUlJcmlDU0NVRXhUTWRISUFTMGxyaFEwYzBnalR0Q0NIaGNGaWNKYUcweGx1TGUzYzh5T1lIT2ZWNUFCSmM4dWQwQTdVRTlCVjNmR01IZDVlRE1UMjI3SlcyMFEzRFh5TUkya2tWYTF3YTdyMmhCTXlHUHM4alpUV1Y1R0pyV2R1MldNa2lvNjlXa0VlcEJ4amNiWTR5eGlzYkdJUTJzSUlqakJKcFVrblZ4Sk9wN1VIUm1lUDRYTlF0aHlsb3k1WXlwWVhWRG0xNjdYdEljSytZb0lPTTRKeEhHeWQ3YVl5SnNuWStUZE00VjA5a3lsOVBVZ2w0dmpXRnhWaFBZV0Z2M05uY0Z6cG91OGtjQ1h0RFhhdmM0aXJSMklQckg4ZXcrT3hjbUxzN2Z1ckNVUEQ0ZDczVjd3VWQ3VG5GMm84NkRzeEdGeG1Jc1JZNDZIdWJWcGM0UjduUDFjYW5WNWNmalFWRng0Y2NKdUxrM0VtTGpFaE80aGo1STJWclgzR09hejRrRXVUaHZHSHZzbmpIeHh1eDcrOHN6Q1hSYkgxRHEvc3kzZHEwZTlWQkl2T1BZZTh5ZHZrN20zRWw5YU5MSUpTNTREV210UnRCRFQ3eDZoQlh4K0h2REk3MzdZekZSQ2F1NEFsNWpCODBSZDNmNXFDOW50NFo3ZVMzbGJ1aGxZWTNzMUZXdUZDTktVMFFSc1Joc2JoN0p0bGpvZTR0V3VMbXg3blAxY2FuVjVjZmpRUXN2d3ZpK1ltNy9JWStPV2MrOUswdWllNm1udE9qTEM3MW9KT0c0NWc4TEc1bU1zNDdZUG9IdmJVdmNCMERudUpjZldVRmlnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDRC8vMlE9PSc7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5iZWZvcmUoICc8c3BhbiBjbGFzcz1cInNwaW5uZXIgd3Bvbmlvbi1zcGlubmVyXCI+PC9zcGFuPicgKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHRoaXMuc2hvd19wcmV2aWV3KCBlICkgKTtcblx0fVxuXG5cdHNob3dfcHJldmlldygpIHtcblx0XHRsZXQgJHZhbHVlID0gdGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkudmFsKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdCR3cG9uaW9uLmFqYXgoICdvZW1iZWQtcHJldmlldycsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR2YWx1ZTogJHZhbHVlLFxuXHRcdFx0fVxuXHRcdH0sICggcmVzICkgPT4ge1xuXHRcdFx0aWYoIGZhbHNlID09PSByZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmh0bWwoIHJlcy5kYXRhICk7XG5cdFx0XHR9XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5yZW1vdmVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnc2VsZWN0MicsIHt9ICk7XG5cdFx0dGhpcy5lbGVtZW50LnNlbGVjdDIoIHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcgKSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGZpZWxkX2RlYnVnKCl7XG5cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3RpemUnLCB7fSApO1xuXG5cdFx0aWYoICFpc191bmRlZmluZWQoICRhcmcudGhlbWUgKSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcyggJGFyZy50aGVtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoICdzZWxlY3RpemUtZGVmYXVsdCcgKTtcblx0XHR9XG5cblx0XHQkYXJnID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApO1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyggJ2Zvcm0tY29udHJvbCcgKS5zZWxlY3RpemUoICRhcmcgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdHZhciAkdGhpcyAgICAgPSB0aGlzLmVsZW1lbnQsXG5cdFx0XHQkZW5hYmxlZCAgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZW5hYmxlZCcgKSxcblx0XHRcdCRkaXNhYmxlZCA9ICR0aGlzLmZpbmQoICcud3Bvbmlvbi1kaXNhYmxlZCcgKTtcblxuXHRcdCRlbmFibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGRpc2FibGVkLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICd1aS1zb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0XHR1cGRhdGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdHZhciAkZWwgPSB1aS5pdGVtLmZpbmQoICdpbnB1dCcgKTtcblxuXHRcdFx0XHRpZiggdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tZW5hYmxlZCcgKSApIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2Rpc2FibGVkJywgJ2VuYWJsZWQnICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2VuYWJsZWQnLCAnZGlzYWJsZWQnICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIGF2b2lkIGNvbmZsaWN0XG5cdFx0JGRpc2FibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGVuYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgY3NzX3VuaXRzIGZyb20gJ3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmZvbnRfd2VpZ2h0X3N0eWxlID0gZmFsc2U7XG5cdFx0bGV0ICRlbCAgICAgICAgICAgICAgICA9IHRoaXMuZWxlbWVudDtcblx0XHRsZXQgJHByZXZpZXcgICAgICAgICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1mb250LXByZXZpZXcnICk7XG5cdFx0bGV0ICR0aGlzICAgICAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldFxuXHRcdFx0XHQkZm9udF9maWVsZCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtZm9udF9waWNrZXInICksXG5cdFx0XHRcdCRmb250ICAgICAgICAgICAgICA9ICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi1mb250LXNlbGVjdG9yJyApLnZhbCgpLFxuXHRcdFx0XHQkZm9udF93ZWlnaHRfc3R5bGUgPSAkdGhpcy5mb250X3N0eWxlKCAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS52YWwoKSApLFxuXHRcdFx0XHQkdGFnICAgICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtdGFnIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGNvbG9yICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1maWVsZC1jb2xvcl9waWNrZXIgaW5wdXQud3AtY29sb3ItcGlja2VyJyApLnZhbCgpLFxuXHRcdFx0XHQkYWxpZ24gICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYWxpZ24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkZm9udFNpemUgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtc2l6ZSBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0JGxpbmVIZWlnaHQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxpbmUtaGVpZ2h0IGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHQkYmFja1VQRm9udCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwLWZvbnQgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkZGlyZWN0aW9uICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtZGlyZWN0aW9uIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxldHRlci1zcGFjaW5nIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHRocmVmICAgICAgICAgICAgICAgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PScgKyAkZm9udCArICc6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQsXG5cdFx0XHRcdGh0bWwgICAgICAgICAgICAgICA9ICc8bGluayBocmVmPVwiJyArIGhyZWYgKyAnXCIgY2xhc3M9XCJ3cHNmLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSArICdcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz4nO1xuXG5cdFx0XHRpZiggalF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0alF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkuYXR0ciggJ2hyZWYnLCBocmVmICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoICdoZWFkJyApLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGZvbnRTaXplID09PSAnJyB8fCAkZm9udFNpemUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGZvbnRTaXplID0gJzE4cHgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGxldHRlclNwYWNpbmcgPT09ICcnIHx8ICRsZXR0ZXJTcGFjaW5nID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nID0gJzFweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGluZUhlaWdodCA9PT0gJycgfHwgJGxpbmVIZWlnaHQgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxpbmVIZWlnaHQgPSAnMjBweCc7XG5cdFx0XHR9XG5cblxuXHRcdFx0bGV0ICRfYXR0cnMgPSAnIGZvbnQtZmFtaWx5OicgKyAkZm9udCArICc7ICcgK1xuXHRcdFx0XHQnIGZvbnQtd2VpZ2h0OicgKyAkZm9udF93ZWlnaHRfc3R5bGUud2VpZ2h0ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC1zdHlsZTonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLnN0eWxlICsgJzsgJyArXG5cdFx0XHRcdCcgdGV4dC1hbGlnbjonICsgJGFsaWduICsgJzsgJyArXG5cdFx0XHRcdCcgY29sb3I6ICcgKyAkY29sb3IgKyAnOycgK1xuXHRcdFx0XHQnIGZvbnQtc2l6ZTonICsgY3NzX3VuaXRzKCAkZm9udFNpemUgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxldHRlci1zcGFjaW5nOicgKyBjc3NfdW5pdHMoICRsZXR0ZXJTcGFjaW5nICkgKyAnOyAnICtcblx0XHRcdFx0JyBsaW5lLWhlaWdodDonICsgY3NzX3VuaXRzKCAkbGluZUhlaWdodCApICsgJzsgJztcblxuXG5cdFx0XHRsZXQgJHRleHQgPSAkcHJldmlldy50ZXh0KCk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuYXBwZW5kKCBqUXVlcnkoICc8JyArICR0YWcgKyAnPicgKyAkdGV4dCArICc8LycgKyAkdGFnICsgJyA+JyApICk7XG5cdFx0XHQkcHJldmlldy5maW5kKCAkdGFnICkuYXR0ciggXCJzdHlsZVwiLCAkX2F0dHJzICk7XG5cblx0XHR9ICk7XG5cdH1cblxuXHRmb250X3N0eWxlKCAkaW5mbyApIHtcblx0XHRsZXQgJHdlaWdodF92YWwgPSAnNDAwJyxcblx0XHRcdCRzdHlsZV92YWwgID0gJ25vcm1hbCc7XG5cblx0XHRzd2l0Y2goICRpbmZvICkge1xuXHRcdFx0Y2FzZSAnMTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICcxMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzMwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzMwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc1MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzkwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzkwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpdGFsaWMnOlxuXHRcdFx0XHQkc3R5bGVfdmFsID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4geyB3ZWlnaHQ6ICR3ZWlnaHRfdmFsLCBzdHlsZTogJHN0eWxlX3ZhbCB9O1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRhZGQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b24nICksXG5cdFx0XHQkaW5wdXQgICAgPSAkZWxlbS5maW5kKCAnaW5wdXRbdHlwZT10ZXh0XScgKSxcblx0XHRcdCRzZXR0aW5ncyA9ICR0aGlzLm9wdGlvbnMoKSwgd3BfbWVkaWFfZnJhbWU7XG5cblx0XHQkYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB3cF9tZWRpYV9mcmFtZSApIHtcblx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcblx0XHRcdFx0dGl0bGU6ICRzZXR0aW5ncy5zZXR0aW5ncy5mcmFtZV90aXRsZSxcblx0XHRcdFx0bGlicmFyeToge1xuXHRcdFx0XHRcdHR5cGU6ICRzZXR0aW5ncy5zZXR0aW5ncy51cGxvYWRfdHlwZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRidXR0b246IHtcblx0XHRcdFx0XHR0ZXh0OiAkc2V0dGluZ3Muc2V0dGluZ3MuaW5zZXJ0X3RpdGxlLFxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAnc2VsZWN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gd3BfbWVkaWFfZnJhbWUuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKTtcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5hdHRyaWJ1dGVzLnVybCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0ZXh0YXJlYSA9ICRlbGVtLmZpbmQoICd0ZXh0YXJlYScgKTtcblx0XHQkZWxlbS5maW5kKCAnI3dwb25pb24td3AtbGluay1waWNrZXIgPiBidXR0b24nICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JHRleHRhcmVhLnZhbCggJycgKTtcblx0XHRcdGlmKCAhd2luZG93LndwTGluayApIHtcblx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0dGl0bGU6ICR3cG9uaW9uLnRleHQoICd3cF9saW5rX2Vycm9yX3RpdGxlJywgJ1dQIExpbmsgSlMgTGliIE5vdCBGb3VuZCcgKSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cud3BMaW5rLm9wZW4oICR0ZXh0YXJlYS5hdHRyKCAnaWQnICkgKTtcblx0XHR9ICk7XG5cblxuXHRcdCR0ZXh0YXJlYS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRkYXRhID0galF1ZXJ5KCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4uZXhhbXBsZV9vdXRwdXQgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4uZXhhbXBsZV9vdXRwdXQgc3Bhbi52YWx1ZScgKS5odG1sKCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3VybCcgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3VybCcgKS52YWwoICRkYXRhLmF0dHIoICdocmVmJyApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN0aXRsZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApLnZhbCggJGRhdGEudGV4dCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGFyZ2V0JyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdGFyZ2V0JyApLnZhbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnVybCBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLmF0dHIoICdocmVmJyApICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi50aXRsZSBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50aXRsZSBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi4vY29yZS9kZWJ1Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRsZXQgJGRlcCA9IHRoaXMub3B0aW9uKCAnZGVwZW5kZW5jeScgKTtcblx0XHRmb3IoIGxldCAka2V5IGluICRkZXAuY29udHJvbGxlciApIHtcblx0XHRcdGxldCAkY29udHJvbGxlciA9ICRkZXAuY29udHJvbGxlciBbICRrZXkgXSxcblx0XHRcdFx0JGNvbmRpdGlvbiAgPSAkZGVwLmNvbmRpdGlvbiBbICRrZXkgXSxcblx0XHRcdFx0JHZhbHVlICAgICAgPSAkZGVwLnZhbHVlIFsgJGtleSBdLFxuXHRcdFx0XHQkZmllbGQgICAgICA9ICdbZGF0YS1kZXBlbmQtaWQ9XCInICsgJGNvbnRyb2xsZXIgKyAnXCJdJztcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcubmVzdGFibGUgKSB7XG5cdFx0XHRcdGxldCAkSU5QVVQgPSB0aGlzLmNvbmZpZy5wYXJlbnQuZmluZCggJ1tkYXRhLWRlcGVuZC1pZD0nICsgJGNvbnRyb2xsZXIgKyAnXScgKTtcblx0XHRcdFx0aWYoICRJTlBVVC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdCRmaWVsZCA9ICdbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJHdwb25pb24uZmllbGRJRCggJElOUFVUICkgKyAnXCJdOmlucHV0Jztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5jcmVhdGVSdWxlKCAkZmllbGQsICRjb25kaXRpb24sICR2YWx1ZSApICk7XG5cdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmluY2x1ZGUoIHRoaXMuZWxlbWVudCApICk7XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCB7ICdEZXBlbmRlbmN5JzogJGRlcCwgJ05lc3RhYmxlIERlcGVuZGVuY3knOiB0aGlzLmNvbmZpZy5uZXN0YWJsZSB9ICk7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHRpbml0KCkge1xuXHRcdGxldCAkZmlkICAgICAgICAgPSB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZmllbGQtanNpZCcgKTtcblx0XHRsZXQgJHRvb2x0aXBfa2V5ID0gZmFsc2U7XG5cdFx0aWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24taGVscCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cG9uaW9uLWhlbHAnO1xuXHRcdH0gZWxzZSBpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi13cmFwLXRvb2x0aXAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3JhcF90b29sdGlwJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJGZpZCArICd0b29sdGlwJztcblx0XHR9XG5cblx0XHRsZXQgJGFyZyA9ICggdHJ1ZSA9PT0gJHdwb25pb24udmFsaWRfanNvbiggJGZpZCApICkgPyBKU09OLnBhcnNlKCAkZmlkICkgOiB0aGlzLm9wdGlvbiggJHRvb2x0aXBfa2V5LCBmYWxzZSApO1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSB7XG5cdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcblx0XHRcdGNhbkZldGNoOiB0cnVlXG5cdFx0fTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGFyZyApIHtcblx0XHRcdGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHknICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweScgKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHktYXJncycgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH0gZWxzZSBpZiggJHdwb25pb24udmFsaWRfanNvbiggdGhpcy5lbGVtZW50LmF0dHIoICd0aXBweS1hcmdzJyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ3RpcHB5LWFyZ3MnICkgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggJGFyZyApIHtcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcblx0XHRcdGlmKCAkYXJnLmltYWdlICE9PSB1bmRlZmluZWQgJiYgJGFyZy5pbWFnZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdGxldCAkaW1hZ2UgICAgICAgICAgPSAkYXJnLmltYWdlO1xuXHRcdFx0XHQkYXJnLmludGVyYWN0aXZlICAgID0gdHJ1ZTtcblx0XHRcdFx0JGFyZy5jb250ZW50ICAgICAgICA9ICdMb2FkaW5nLi4uJztcblx0XHRcdFx0Ly8kYXJnLmh0bWwgICAgICAgICAgID0gJyN3cG90cGltZyc7XG5cdFx0XHRcdCRhcmcudXBkYXRlRHVyYXRpb24gPSAyMDAwO1xuXHRcdFx0XHQkYXJnLm9uU2hvdyAgICAgICAgID0gYXN5bmMgZnVuY3Rpb24oIHRpcCApIHtcblx0XHRcdFx0XHRpZiggc3RhdGUuaXNGZXRjaGluZyB8fCAhc3RhdGUuY2FuRmV0Y2ggKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoICAgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCAkaW1hZ2UgKTtcblx0XHRcdFx0XHRcdGNvbnN0IGJsb2IgICAgID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXHRcdFx0XHRcdFx0Y29uc3QgdXJsICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdFx0XHRpZiggdGlwLnN0YXRlLmlzVmlzaWJsZSApIHtcblx0XHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICc8ZGl2IHN0eWxlPVwibWluLXdpZHRoOjI1cHg7bWluLWhlaWdodDoyNXB4O1wiPjxpbWcgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1wiIHNyYz1cIicgKyB1cmwgKyAnXCIvPjwvZGl2PicgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoIGBGZXRjaCBmYWlsZWQuICR7ZX1gICk7XG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcub25IaWRkZW4gICAgICAgPSAoIHRpcCApID0+IHtcblx0XHRcdFx0XHRzdGF0ZS5jYW5GZXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICdMb2FkaW5nLi4uJyApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLnBvcHBlck9wdGlvbnMgID0ge1xuXHRcdFx0XHRcdG1vZGlmaWVyczoge1xuXHRcdFx0XHRcdFx0cHJldmVudE92ZXJmbG93OiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aGlkZToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYXJnID0ge307XG5cdFx0fVxuXG5cdFx0ZGVsZXRlICRhcmcuaW1hZ2U7XG5cdFx0dGhpcy5lbGVtZW50LnRpcHB5KCB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAkdG9vbHRpcF9rZXkgKSApO1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgaXNfdW5kZWZpbmVkIH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRpbWFnZSA9ICggaXNfdW5kZWZpbmVkKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICkgKSApID8gdGhpcy5lbGVtZW50LmF0dHIoICdzcmMnICkgOiB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICk7XG5cdFx0c3dhbCgge1xuXHRcdFx0aW1hZ2VVcmw6ICRpbWFnZSxcblx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0YmFja2Ryb3A6IGByZ2JhKDAsMCwwLDAuNDQpYFxuXHRcdH0gKTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyBpc191bmRlZmluZWQsIHJhbmRfbWQ1IH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRtY2VfZWRpdG9yICA9IHRpbnlNQ0VQcmVJbml0Lm1jZUluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JHF1aWNrX3RhZ3MgID0gdGlueU1DRVByZUluaXQucXRJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRORVdfSUQgICAgICA9ICd3cG9uaW9uLXdwLWVkaXRvci0nICsgcmFuZF9tZDUoKSxcblx0XHRcdFx0JHRleHRBcmVhICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5jbG9uZSgpLFxuXHRcdFx0XHQkYWN0dWFsX0lEICAgPSAkdGV4dEFyZWEuYXR0ciggJ2lkJyApLFxuXHRcdFx0XHQkYWN0dWFsX2h0bWwgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoKSxcblx0XHRcdFx0JHJlZ2V4ICAgICAgID0gbmV3IFJlZ0V4cCggJGFjdHVhbF9JRCwgXCJnXCIgKTtcblx0XHRcdCRhY3R1YWxfaHRtbCAgICAgPSAkYWN0dWFsX2h0bWwucmVwbGFjZSggJHJlZ2V4LCAkTkVXX0lEICk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCggJGFjdHVhbF9odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLnBhcmVudCgpLmFwcGVuZCggJHRleHRBcmVhICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhOm5vdCgjJyArICRhY3R1YWxfSUQgKyAnKScgKS5yZW1vdmUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuYXR0ciggJ2lkJywgJE5FV19JRCApO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJG1jZV9lZGl0b3IgKSApIHtcblx0XHRcdFx0JG1jZV9lZGl0b3Iuc2VsZWN0b3IgPSAnIycgKyAkTkVXX0lEO1xuXHRcdFx0XHR0aW55bWNlLmluaXQoICRtY2VfZWRpdG9yICk7XG5cdFx0XHRcdHRpbnlNQ0UuZXhlY0NvbW1hbmQoICdtY2VBZGRFZGl0b3InLCBmYWxzZSwgJyMnICsgJE5FV19JRCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsc2UgPT09IGlzX3VuZGVmaW5lZCggJHF1aWNrX3RhZ3MgKSApIHtcblx0XHRcdFx0JHF1aWNrX3RhZ3MuaWQgPSAkTkVXX0lEO1xuXHRcdFx0XHRxdWlja3RhZ3MoICRxdWlja190YWdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBhcnJheV9tZXJnZSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJyNidWxrX2VkaXQnLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGZpbmFsX2FyZ3MgPSB7IHBvc3RfaWRzOiBbXSB9LFxuXHRcdFx0XHQkYnVsa19lZGl0ICA9ICQoICcjYnVsay1lZGl0JyApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcjYnVsay10aXRsZXMnICkuY2hpbGRyZW4oKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JGZpbmFsX2FyZ3MucG9zdF9pZHMucHVzaCggJCggdGhpcyApLmF0dHIoICdpZCcgKS5yZXBsYWNlKCAvXih0dGxlKS9pLCAnJyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRidWxrX2VkaXQuZmluZCggJy53cG9uaW9uLXF1aWNrLWVkaXQtZmllbGRzZXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzID0gYXJyYXlfbWVyZ2UoICQoIHRoaXMgKS5zZXJpYWxpemVPYmplY3QoKSwgJGZpbmFsX2FyZ3MgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICdzYXZlLWJ1bGstZWRpdCcsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGFzeW5jOiBmYWxzZSxcblx0XHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiAkZmluYWxfYXJncyxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBXUE9uaW9uX0d1dHRlbmJlcmcge1xuXHRjb25zdHJ1Y3RvciggJGlkID0gJycsICRhcmdzID0ge30gKSB7XG5cdFx0dGhpcy5pZCAgID0gJGlkO1xuXHRcdHRoaXMuYXJncyA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmdzICk7XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5zYXZlID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRoaXMuYXJncy5zYXZlID0gKCBibG9jayApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2F2ZV9oYW5kbGVyKCBibG9jayApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5lZGl0ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRoaXMuYXJncy5lZGl0ID0gKCBibG9jayApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWRpdF9oYW5kbGVyKCBibG9jayApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR3aW5kb3cud3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlKCB0aGlzLmlkLCB0aGlzLmFyZ3MgKTtcblx0fVxuXG5cdHNhdmVfaGFuZGxlciggYmxvY2sgKSB7XG5cdH1cblxuXHRlZGl0X2hhbmRsZXIoIGJsb2NrICkge1xuXHRcdGxldCBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcblxuXHRcdGxldCAkX3Bvc3RpZHMgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5KCBwYXJzZUludCggalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS52YWwoKSApICk7XG5cdFx0YmxvY2suYXR0cmlidXRlcy5wb3N0X2lkID0gJF9wb3N0aWRzO1xuXHRcdGxldCBibG9ja19pZCAgICAgICAgICAgICA9IGJsb2NrLmF0dHJpYnV0ZXMuYmxvY2tfaWQgPSBibG9jay5hdHRyaWJ1dGVzLmJsb2NrX2lkIHx8IGJsb2NrLmNsaWVudElkO1xuXHRcdGxldCAkcmVtb3RlID0gZWwoICdmb3JtJywge1xuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1ibG9jay1ncm91cC1jb250ZW50Jyxcblx0XHRcdCdkYXRhLWJsb2NrLWlkJzogYmxvY2tfaWQsXG5cdFx0fSwgW1xuXHRcdFx0ZWwoIHdpbmRvdy53cC5jb21wb25lbnRzLlNlcnZlclNpZGVSZW5kZXIsIHtcblx0XHRcdFx0YmxvY2s6IHRoaXMuaWQsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRwb3N0X2lkOiAkX3Bvc3RpZHMsXG5cdFx0XHRcdFx0YmxvY2tfaWQ6IGJsb2NrX2lkLFxuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHRdICk7XG5cblxuXHRcdGxldCBjaGlsZHJlbiA9IFtdO1xuXG5cdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3Muc3R5bGUgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0aWYoIHRoaXMuYXJncy5zdHlsZSA9PT0gJ2RlZmF1bHQnICkge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKCBlbCggJ2RpdicsIHtcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdhY2YtYmxvY2stZ3JvdXAtaGVhZGluZycsXG5cdFx0XHRcdH0sIFtcblx0XHRcdFx0XHRlbCggJ3NwYW4nLCB7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdkYXNoaWNvbnMgZGFzaGljb25zLScgKyB0aGlzLmFyZ3MuaWNvblxuXHRcdFx0XHRcdH0gKSxcblx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0dGhpcy5hcmdzLnRpdGxlLFxuXHRcdFx0XHRdICkgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgc2VsZWN0b3IgPSAnZm9ybVtkYXRhLWJsb2NrLWlkPVwiJyArIGJsb2NrX2lkICsgJ1wiXSc7XG5cblx0XHRpZiggalF1ZXJ5KCBzZWxlY3RvciApLmxlbmd0aCA8IDEgKSB7XG5cblx0XHR9XG5cblxuXHRcdC8qaWYoICQoIHNlbGVjdG9yICkubGVuZ3RoIDwgMSApIHtcblx0XHRcdCQoIGRvY3VtZW50ICkub24oICdhY2Jfc2F2ZV9maWVsZHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHRyeVVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKCBibG9jay5pc1NlbGVjdGVkIHx8ICQoIHNlbGVjdG9yICkuaXMoICc6aG92ZXInICkgKSB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIGJsb2NrLnVwZGF0ZVRpbWVvdXQgKTtcblx0XHRcdFx0XHRcdGJsb2NrLnVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCB0cnlVcGRhdGUsIDUwMCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJsb2NrLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdGFjZl9maWVsZHM6IGFjZi5zZXJpYWxpemUoICQoIHNlbGVjdG9yICkgKVsgJ2FjZicgXSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0c2V0VGltZW91dCggdHJ5VXBkYXRlLCAyNTAgKTtcblx0XHRcdH0gKTtcblx0XHR9Ki9cblx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHQvLyAgIGFjZi5kb19hY3Rpb24oJ3JlYWR5JywgJCgnW2RhdGEtYmxvY2staWQ9XCInICsgYmxvY2tfaWQgKyAnXCJdJykpO1xuXHRcdC8vIH0sIDUwMCk7XG5cblx0XHRjaGlsZHJlbi5wdXNoKCAkcmVtb3RlICk7XG5cblx0XHRyZXR1cm4gZWwoICdkaXYnLCB7IGNsYXNzTmFtZTogJ3dwb25pb24tYmxvY2stZ3JvdXAtd3JhcHBlcicgfSwgY2hpbGRyZW4gKTtcblxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIHdwICkgPT4ge1xuXHQkKCBmdW5jdGlvbigpIHtcblx0XHRpZiggIXdpbmRvdy53cCB8fCAhd2luZG93LndwLmJsb2NrcyB8fCAhd2luZG93LndwLmVkaXRvciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGJsb2NrcyAgICAgPSB3aW5kb3cud3AuYmxvY2tzO1xuXHRcdFx0bGV0ICR3cG9fYmxvY2tzID0gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ3V0dGVuYmVyZ19ibG9ja3MnICk7XG5cdFx0XHRpZiggZmFsc2UgPT09ICR3cG9uaW9uX2hlbHBlci5pc191bmRlZmluZWQoICR3cG9fYmxvY2tzICkgJiYgJHdwb25pb25faGVscGVyLmlzX2FycmF5KCAkd3BvX2Jsb2NrcyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICR3cG9fYmxvY2tzICkge1xuXHRcdFx0XHRcdG5ldyBXUE9uaW9uX0d1dHRlbmJlcmcoICRrZXksICR3cG9fYmxvY2tzWyAka2V5IF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdwICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLm1lbnUoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICdoMi5hamF4LWNvbnRhaW5lciBidXR0b24nLCB0aGlzLnNhdmVfaGFuZGxlciApO1xuXHR9XG5cblxuXHRtZW51KCkge1xuXHRcdGxldCAkZWxlbSA9IHRoaXMuZWxlbWVudDtcblx0XHQkZWxlbS5vbiggJ2NsaWNrJywgJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSBhJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdkcm9wZG93bicgKSApIHtcblx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5pcyggJzp2aXNpYmxlJyApICkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSB1bCcgKS5zbGlkZVVwKCAnZmFzdCcgKTtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJGhyZWYgICAgICAgICAgID0gJHdwb25pb25faGVscGVyLnVybF9wYXJhbXMoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWhyZWYnICkgKSxcblx0XHRcdFx0XHQkcGFyZW50ICAgICAgICAgPSAnd3Bvbmlvbi10YWItJyArICRocmVmWyAncGFyZW50LWlkJyBdLFxuXHRcdFx0XHRcdCRzZWN0aW9uICAgICAgICA9ICggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgKSA/ICRwYXJlbnQgKyAnLScgKyAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gOiBmYWxzZSxcblx0XHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tcGFyZW50LXdyYXBzJyApLFxuXHRcdFx0XHRcdCRjdXJyZW50ICAgICAgICA9ICRlbGVtLmZpbmQoICdkaXYjJyArICRwYXJlbnQgKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdCRwYXJlbnRfYWN0aXZlcy5oaWRlKCk7XG5cblx0XHRcdFx0aWYoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICYmICRocmVmWyAncGFyZW50LWlkJyBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICcgZGl2IycgKyAkc2VjdGlvbiApLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRjdXJyZW50LnNob3coKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGEuYWN0aXZlICcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZSAnICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51ID4gbGkgPiBhJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGFbZGF0YS13cG9uaW9uLWlkPVwid3Bvbmlvbl9tZW51XycgKyAkaHJlZlsgJ3BhcmVudC1pZCcgXSArICdcIl0nIClcblx0XHRcdFx0XHQgLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cblx0c2F2ZV9oYW5kbGVyKCBlICkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHRoaXMgICA9IHRoaXMsXG5cdFx0XHQkcGFyZW50ID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHQkYmFzZSAgID0gJHBhcmVudC5wYXJlbnQoKS5wYXJlbnQoKSxcblx0XHRcdCRoaWRkZW4gPSAkcGFyZW50LmZpbmQoICdkaXYud3Bvbmlvbi1tZXRhYm94LXNlY3VyZS1kYXRhJyApO1xuXG5cdFx0JGJhc2UuYmxvY2soIHsgbWVzc2FnZTogbnVsbCwgb3ZlcmxheUNTUzogeyBiYWNrZ3JvdW5kOiAnIzAwMCcsIG9wYWNpdHk6IDAuNyB9IH0gKTtcblxuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnaWQnICkgKTtcblx0XHR9ICk7XG5cdFx0bGV0ICRmaWVsZHMgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoICc6aW5wdXQnICk7XG5cdFx0bGV0ICR2YWx1ZXMgPSAkZmllbGRzLnNlcmlhbGl6ZSgpO1xuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLnJlbW92ZUF0dHIoICduYW1lJyApO1xuXG5cdFx0JHdwb25pb24uYWpheCggJ3NhdmVfbWV0YWJveCcsIHsgZGF0YTogJHZhbHVlcyB9LCBmdW5jdGlvbiggcmVzICkge1xuXHRcdFx0JGJhc2UuaHRtbCggcmVzICk7XG5cdFx0XHQkYmFzZS51bmJsb2NrKCk7XG5cdFx0XHR3cG9uaW9uX2ZpZWxkKCAkYmFzZS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIHdwICkgPT4ge1xuXHQkKCBmdW5jdGlvbigpIHtcblx0XHQkKCAnZGl2LnBvc3Rib3gud3Bvbmlvbi1tZXRhYm94JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fTWV0YWJveF9Nb2R1bGUoICQoIHRoaXMgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIFdQT25pb25fUXVpY2tfRWRpdCBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5wb3N0X2lkID0gdGhpcy5jb250eHQ7XG5cdFx0bGV0ICRpZCAgICAgID0gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICkgKyAnXycgKyB0aGlzLnBvc3RfaWQ7XG5cdFx0dGhpcy52YWx1ZXMgID0gJHdwb25pb24uZmllbGRBcmdzKCAkaWQsIGZhbHNlICk7XG5cblx0XHRpZiggdGhpcy52YWx1ZXMuaHRtbCApIHtcblx0XHRcdHRoaXMudmFsdWVzLmh0bWwgPSBqUXVlcnkoIHRoaXMudmFsdWVzLmh0bWwgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5odG1sKCB0aGlzLnZhbHVlcy5odG1sLmZpbmQoICc+IGRpdicgKSApO1xuXHRcdH1cblxuXHRcdHdwb25pb25fZmllbGQoIHRoaXMuZWxlbWVudCApLnJlbG9hZCgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdGxldCAkbGlzdCA9ICQoICcjdGhlLWxpc3QnICk7XG5cdFx0aWYoICRsaXN0Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkbGlzdC5vbiggJ2NsaWNrJywgJy5lZGl0aW5saW5lJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBwb3N0X2lkID0galF1ZXJ5KCB0aGlzICkuY2xvc2VzdCggJ3RyJyApLmF0dHIoICdpZCcgKTtcblx0XHRcdFx0cG9zdF9pZCAgICAgPSBwb3N0X2lkLnJlcGxhY2UoICdwb3N0LScsICcnICk7XG5cdFx0XHRcdCQoICd0ciNlZGl0LScgKyBwb3N0X2lkICkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRuZXcgV1BPbmlvbl9RdWlja19FZGl0KCBqUXVlcnkoIHRoaXMgKSwgcG9zdF9pZCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IGlzX3dpbmRvd19hcmcgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdG9yIGZyb20gJy4vY29yZS92YWxpZGF0aW9uJztcblxud2luZG93Lndwb25pb25fbWV0YWJveF9tb2R1bGUgPSByZXF1aXJlKCAnLi9tb2R1bGVzL21ldGFib3gnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uX2J1bGtfZWRpdCAgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9idWxrLWVkaXQnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uX2d1dHRlbmJlcmcgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9ndXR0ZW5iZXJnJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbl9xdWlja19lZGl0ICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvcXVpY2stZWRpdCcgKS5kZWZhdWx0O1xud2luZG93LiR3cG9uaW9uICAgICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2NvcmUnICkuZGVmYXVsdDtcbndpbmRvdy4kd3Bvbmlvbl9hamF4ZXIgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9hamF4ZXInICkuV1BPbmlvbl9BamF4ZXI7XG53aW5kb3cuJHdwb25pb25fYWpheCAgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvYWpheGVyJyApLmRlZmF1bHQ7XG53aW5kb3cuJHdwb25pb25fZGVidWcgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvZGVidWcnICkuZGVmYXVsdDtcbndpbmRvdy4kd3Bvbmlvbl9oZWxwZXIgICAgICAgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICk7XG53aW5kb3cud3Bvbmlvbl9tb2RhbCAgICAgICAgICA9IHJlcXVpcmUoICcuLi92ZW5kb3JzL2JhY2tib25lLW1vZGFsJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbl9uZXdfZmllbGQgICAgICA9ICggJGNsYXNzICkgPT4gKCBpc193aW5kb3dfYXJnKCAkY2xhc3MgKSApID8gd2luZG93WyAkY2xhc3MgXSA6IGZhbHNlO1xud2luZG93Lndwb25pb25fZmllbGQgICAgICAgICAgPSAoICRlbGVtLCAkY29udHh0ID0ge30gKSA9PiBuZXcgV1BPbmlvbl9GaWVsZCggJGVsZW0sICRjb250eHQgKTtcbndpbmRvdy53cG9uaW9uX2ZpZWxkcyAgICAgICAgID0ge1xuXHR0ZXh0OiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dCcgKS5kZWZhdWx0LFxuXHR0ZXh0YXJlYTogcmVxdWlyZSggJy4vZmllbGRzL3RleHRhcmVhJyApLmRlZmF1bHQsXG5cdGJhY2tncm91bmQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrZ3JvdW5kJyApLmRlZmF1bHQsXG5cdGltYWdlX3NlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRzd2l0Y2hlcjogcmVxdWlyZSggJy4vZmllbGRzL3N3aXRjaGVyJyApLmRlZmF1bHQsXG5cdGNvbG9yX3BhbGV0dGU6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9wYWxldHRlJyApLmRlZmF1bHQsXG5cdHNlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRzZWxlY3QyOiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0MicgKS5kZWZhdWx0LFxuXHRjaG9zZW46IHJlcXVpcmUoICcuL2ZpZWxkcy9jaG9zZW4nICkuZGVmYXVsdCxcblx0c2VsZWN0aXplOiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0aXplJyApLmRlZmF1bHQsXG5cdGljb25fcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvaWNvbl9waWNrZXInICkuZGVmYXVsdCxcblx0Zm9udF9zZWxlY3RvcjogcmVxdWlyZSggJy4vZmllbGRzL2ZvbnRfc2VsZWN0b3InICkuZGVmYXVsdCxcblx0YWNjb3JkaW9uOiByZXF1aXJlKCAnLi9maWVsZHMvYWNjb3JkaW9uJyApLmRlZmF1bHQsXG5cdGdyb3VwOiByZXF1aXJlKCAnLi9maWVsZHMvZ3JvdXAnICkuZGVmYXVsdCxcblx0d3BfZWRpdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvd3BfZWRpdG9yJyApLmRlZmF1bHQsXG5cdHJlbG9hZF93cF9lZGl0b3I6IHJlcXVpcmUoICcuL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvcicgKS5kZWZhdWx0LFxuXHRmaWVsZHNldDogcmVxdWlyZSggJy4vZmllbGRzL2ZpZWxkc2V0JyApLmRlZmF1bHQsXG5cdGlucHV0bWFzazogcmVxdWlyZSggJy4vZmllbGRzL2lucHV0bWFzaycgKS5kZWZhdWx0LFxuXHR3cF9saW5rczogcmVxdWlyZSggJy4vZmllbGRzL3dwX2xpbmtzJyApLmRlZmF1bHQsXG5cdGNoZWNrYm94X3JhZGlvOiByZXF1aXJlKCAnLi9maWVsZHMvY2hlY2tib3hfcmFkaW8nICkuZGVmYXVsdCxcblx0a2V5dmFsdWVfcGFpcjogcmVxdWlyZSggJy4vZmllbGRzL2tleXZhbHVlX3BhaXInICkuZGVmYXVsdCxcblx0Y29sb3JfcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGlja2VyJyApLmRlZmF1bHQsXG5cdGRhdGVfcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvZGF0ZV9waWNrZXInICkuZGVmYXVsdCxcblx0Z2FsbGVyeTogcmVxdWlyZSggJy4vZmllbGRzL2dhbGxlcnknICkuZGVmYXVsdCxcblx0aW1hZ2VfcG9wdXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvaW1hZ2VfcG9wdXAnICkuZGVmYXVsdCxcblx0dXBsb2FkOiByZXF1aXJlKCAnLi9maWVsZHMvdXBsb2FkJyApLmRlZmF1bHQsXG5cdGltYWdlX3VwbG9hZDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3VwbG9hZCcgKS5kZWZhdWx0LFxuXHRqcXVlcnlfdGFiOiByZXF1aXJlKCAnLi9maWVsZHMvanF1ZXJ5X3RhYicgKS5kZWZhdWx0LFxuXHRmaWVsZF90b29sdGlwOiByZXF1aXJlKCAnLi9oZWxwZXJzL2ZpZWxkX3Rvb2x0aXAnICkuZGVmYXVsdCxcblx0Y2xvbmVfZWxlbWVudDogcmVxdWlyZSggJy4vZmllbGRzL2Nsb25lX2VsZW1lbnQnICkuZGVmYXVsdCxcblx0c29ydGVyOiByZXF1aXJlKCAnLi9maWVsZHMvc29ydGVyJyApLmRlZmF1bHQsXG5cdGdvb2dsZV9tYXBzOiByZXF1aXJlKCAnLi9maWVsZHMvZ29vZ2xlX21hcHMnICkuZGVmYXVsdCxcblx0dHlwb2dyYXBoeTogcmVxdWlyZSggJy4vZmllbGRzL3R5cG9ncmFwaHknICkuZGVmYXVsdCxcblx0b2VtYmVkOiByZXF1aXJlKCAnLi9maWVsZHMvb2VtYmVkJyApLmRlZmF1bHQsXG5cdGhlYWRpbmc6IHJlcXVpcmUoICcuL2ZpZWxkcy9oZWFkaW5nJyApLmRlZmF1bHQsXG5cdHN1YmhlYWRpbmc6IHJlcXVpcmUoICcuL2ZpZWxkcy9zdWJoZWFkaW5nJyApLmRlZmF1bHQsXG5cdGphbWJvX2NvbnRlbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9qYW1ib19jb250ZW50JyApLmRlZmF1bHQsXG5cdG5vdGljZTogcmVxdWlyZSggJy4vZmllbGRzL25vdGljZScgKS5kZWZhdWx0LFxuXHRjb250ZW50OiByZXF1aXJlKCAnLi9maWVsZHMvY29udGVudCcgKS5kZWZhdWx0LFxuXHRiYWNrdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrdXAnICkuZGVmYXVsdCxcbn07XG53aW5kb3cud3Bvbmlvbl9ub3RpY2UgICAgICAgICA9ICggJGVsZW0gKSA9PiB7XG5cdGlmKCAkZWxlbS5maW5kKCAnLndwb25pb24tcmVtb3ZlJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0JGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJF9lbCA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJy53cG9uaW9uLXJlbW92ZScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRfZWwuc2xpZGVVcCggJ3Nsb3cnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkX2VsLnJlbW92ZSgpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApXG5cblx0XHRyZXR1cm4gJGVsZW07XG5cdH1cblxuXHRsZXQgJGF1dG8gPSAkZWxlbS5hdHRyKCAnZGF0YS1hdXRvY2xvc2UnICk7XG5cdGlmKCAkYXV0byApIHtcblx0XHQkYXV0byA9IHBhcnNlSW50KCAkYXV0byApO1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdCRlbGVtLnNsaWRlVXAoICdzbG93JywgKCkgPT4ge1xuXHRcdFx0XHQkZWxlbS5yZW1vdmUoKTtcblx0XHRcdH0gKTtcblx0XHR9LCAkYXV0byApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9ICggKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgJCwgJHdwbyApID0+IHtcblx0bGV0ICR3cF9ob29rID0gd3AuaG9va3M7XG5cblx0JCggKCkgPT4ge1xuXHRcdCR3cG8uc2V0dGluZ3NfYXJncyAgICA9ICR3cG8ud2luZG93QXJncyggJ3dwb25pb25fY29yZScsIHt9ICk7XG5cdFx0JHdwby50ZXh0ICAgICAgICAgICAgID0gJHdwby53aW5kb3dBcmdzKCAnd3Bvbmlvbl9pbDhuJywge30gKTtcblx0XHQkd3BvLmRlYnVnX2luZm8gICAgICAgPSBudWxsO1xuXHRcdCR3cG8uZmllbGRfZGVidWdfaW5mbyA9IG51bGw7XG5cblx0XHRsZXQgJHdwb2ZfZGl2ID0gJCggJy53cG9uaW9uLWZyYW1ld29yazpub3QoLndwb25pb24tbW9kdWxlLXF1aWNrX2VkaXQtZnJhbWV3b3JrKScgKTtcblx0XHRpZiggJHdwb2ZfZGl2Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkd3BfaG9vay5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX3RoZW1lX2luaXQnLCAkKCB0aGlzICkgKTtcblx0XHRcdH0gKTtcblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCAoKSA9PiB7XG5cdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9pbml0JyApO1xuXG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cblx0XHR3cG9uaW9uX25vdGljZSggJHdwb2ZfZGl2LmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXdwX25vdGljZSwgLndwb25pb24tZWxlbWVudC1ub3RpY2UnICkgKTtcblxuXHRcdHdpbmRvdy4kd3Bvbmlvbi5zdWJtZW51X2luZGljYXRvciggJCggZG9jdW1lbnQgKS5maW5kKCAnLndwb25pb24tc3VibWVudS1pJyApICk7XG5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAnLndwb25pb24tZmllbGQtZGVidWctY29kZSA+IHN0cm9uZycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyggJ2Rhc2hpY29ucy1hcnJvdy1kb3duJyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LXJpZ2h0JyApO1xuXHRcdH0gKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkcyA9ICR3cF9ob29rLmFwcGx5RmlsdGVycyggJ3dwb25pb25fZmllbGRzX2Z1bmN0aW9ucycsIHdpbmRvdy53cG9uaW9uX2ZpZWxkcyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcnMgSG9vayBXaXRoIFdpZGdldHMuXG5cdFx0ICovXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ3dpZGdldC1hZGRlZCB3aWRnZXQtdXBkYXRlZCcsIGZ1bmN0aW9uKCBldmVudCwgJHdpZGdldCApIHtcblx0XHRcdHdwb25pb25fZmllbGQoICR3aWRnZXQgKS5yZWxvYWQoKTtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICR3aWRnZXQgKTtcblx0XHR9ICk7XG5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnbWVudS1pdGVtLWFkZGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkbWVudSApIHtcblx0XHRcdHdwb25pb25fZmllbGQoICRtZW51ICkucmVsb2FkKCk7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkbWVudSApO1xuXHRcdH0gKTtcblxuXG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZW5kZXJzIFZhbGlkYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdG5ldyBXUE9uaW9uX1ZhbGlkYXRvcigpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhbmRsZXMgRmllbGRzIGluaXQuXG5cdFx0XHQgKi9cblx0XHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0d3Bvbmlvbl9maWVsZCggJCggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXG5cdFx0JHdwby5sb2FkaW5nX3NjcmVlbiggJHdwb2ZfZGl2LCBmYWxzZSApO1xuXHRcdCR3cF9ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0JyApO1xuXHR9ICkgKTtcblx0JHdwX2hvb2suZG9BY3Rpb24oICd3cG9uaW9uX2xvYWRlZCcgKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgd3AsIGpRdWVyeSwgJHdwb25pb24gKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9qcy9jb3JlL2NvcmUnO1xuXG5jb25zdCBXUE9uaW9uX1dQX01vZGFsID0gQmFja2JvbmUuVmlldy5leHRlbmQoIHtcblx0dGVtcGxhdGVzOiB7fSxcblxuXHRldmVudHM6IHtcblx0XHRcImNsaWNrIC5tZWRpYS1tb2RhbC1jbG9zZVwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tY2FuY2VsXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1va1wiOiBcInNhdmVNb2RhbFwiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLW1lbnUgYVwiOiBcImhhbmRsZV9sZWZ0X21lbnVfY2xpY2tcIixcblx0XHRcImNsaWNrIC5tZWRpYS1yb3V0ZXIgYVwiOiBcImhhbmRsZV90YWJfY2xpY2tcIixcblx0fSxcblxuXHRhY3RpdmVfcGFnZTogbnVsbCxcblxuXHRhY3RpdmVfc2VjdGlvbjogbnVsbCxcblxuXHRpbml0aWFsaXplOiAoIG9wdGlvbnMgKSA9PiB7XG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IGZhbHNlLFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHRcdGh0bWw6IGZhbHNlLFxuXHRcdH0sIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMubGVmdF9tZW51ID0gb3B0aW9uc1sgJ2xlZnRfbWVudScgXTtcblx0XHR0aGlzLmh0bWwgICAgICA9IG9wdGlvbnNbICdodG1sJyBdO1xuXHRcdHRoaXMuaGlkZV9tZW51ID0gb3B0aW9uc1sgJ2hpZGVfbWVudScgXTtcblxuXHRcdF8uYmluZEFsbCggdGhpcywgJ3JlbmRlcicsICdwcmVzZXJ2ZUZvY3VzJywgJ2Nsb3NlTW9kYWwnLCAnc2F2ZU1vZGFsJywgJ2RvTm90aGluZycgKTtcblx0XHR0aGlzLmluaXRfdGVtcGxhdGVzKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblxuXHRpbml0X3RlbXBsYXRlczogKCkgPT4ge1xuXHRcdGxldCAkbSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdtb2RhbCcgKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0gID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnZnJhbWUtbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3JvdXRlci1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy53aW5kb3cgICAgICAgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnaHRtbCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdwYWdlX2NvbnRlbnQnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnc2VjdGlvbl9jb250ZW50JyBdICk7XG5cdH0sXG5cblx0cmVuZGVyOiAoKSA9PiB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdHRoaXMuJGVsLmF0dHIoICd0YWJpbmRleCcsICcwJyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMud2luZG93KCkgKTtcblxuXHRcdGlmKCB0aGlzLmxlZnRfbWVudSApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5sZWZ0X21lbnUsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0oIHtcblx0XHRcdFx0XHR1cmw6IGtleSxcblx0XHRcdFx0XHRuYW1lOiB2YWx1ZSxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRpZiggdGhpcy5odG1sICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmh0bWwsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0bGV0ICRjb250ZW50ID0gJCggdGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50KCB7XG5cdFx0XHRcdFx0aWQ6IGtleSxcblx0XHRcdFx0XHR0aXRsZTogdmFsdWVbICd0aXRsZScgXSxcblx0XHRcdFx0XHRodG1sOiB2YWx1ZVsgJ2h0bWwnIF0sXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzZWN0aW9ucycgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdF8uZWFjaCggdmFsdWVbICdzZWN0aW9ucycgXSwgKCB2YWwsIGsgKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJF9jb250ZW50ID0galF1ZXJ5KCB0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRcdFx0XHRpZDoga2V5ICsgXCJfXCIgKyBrLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiB2YWxbICd0aXRsZScgXSxcblx0XHRcdFx0XHRcdFx0XHRodG1sOiB2YWxbICdodG1sJyBdLFxuXHRcdFx0XHRcdFx0XHR9ICkgKSxcblx0XHRcdFx0XHRcdFx0JF9tZW51ICAgID0gdGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSggeyB1cmw6IGssIG5hbWU6IHZhbFsgJ3RpdGxlJyBdIH0gKTtcblxuXHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbFsgJ3NpZGViYXInIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLWNvbnRlbnQnICkuYXBwZW5kKCAkX2NvbnRlbnQgKTtcblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtcm91dGVyJyApLmFwcGVuZCggJF9tZW51ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzaWRlYmFyJyBdICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbHVlWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0JHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0aGlzLiQoICcubWVkaWEtbWVudSBhOmZpcnN0LWNoaWxkJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IC53cG9uaW9uLW1vZGFsLWNvbnRlbnQ6bm90KC5oaWRkZW4pIC5tZWRpYS1mcmFtZS1yb3V0ZXIgYTpmaXJzdC1jaGlsZCcgKVxuXHRcdFx0LnRyaWdnZXIoICdjbGljaycgKTtcblxuXHRcdGlmKCB0aGlzLmhpZGVfbWVudSA9PT0gdHJ1ZSApIHtcblx0XHRcdHRoaXMuJCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtbWVudScgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub24oIFwiZm9jdXNpblwiLCB0aGlzLnByZXNlcnZlRm9jdXMgKTtcblx0XHRqUXVlcnkoICdib2R5JyApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSApLmFwcGVuZCggdGhpcy4kZWwgKTtcblx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHR9LFxuXG5cdGhhbmRsZV9sZWZ0X21lbnVfY2xpY2s6ICggZSApID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0YXJnZXQgPSAkKCBlLnRhcmdldCApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1tZW51IGEuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0bGV0ICRzaG93X3RhcmdldCA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2IycgKyAkdGFyZ2V0LmF0dHIoICdocmVmJyApICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0JHNob3dfdGFyZ2V0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuXG5cdFx0aWYoICRzaG93X3RhcmdldC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5oYXNDbGFzcyggJ2hpZGRlbicgKSApIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkucmVtb3ZlQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9XG5cdFx0dGhpcy5hY3RpdmVfcGFnZSAgICA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9IG51bGw7XG5cdH0sXG5cblx0aGFuZGxlX3RhYl9jbGljazogKCBlICkgPT4ge1xuXHRcdGxldCAkdGFyZ2V0ICAgICAgICAgPSAkKCBlLnRhcmdldCApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkcGFnZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUtbWVudSBhLmFjdGl2ZScgKS5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJGJhc2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKTtcblxuXG5cdFx0JHRhcmdldC5wYXJlbnQoKS5maW5kKCAnLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCRiYXNlLmZpbmQoICcud3Bvbmlvbi1zZWN0aW9uLW1vZGFsLWNvbnRlbnQnICkuaGlkZSgpO1xuXHRcdCRiYXNlLmZpbmQoICcjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKyAnXycgKyB0aGlzLmFjdGl2ZV9zZWN0aW9uICkuc2hvdygpO1xuXHR9LFxuXG5cdHByZXNlcnZlRm9jdXM6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRpZiggdGhpcy4kZWxbIDAgXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsLmhhcyggZS50YXJnZXQgKS5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHRcdH1cblx0fSxcblxuXHRjbG9zZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vZmYoIFwiZm9jdXNpblwiICk7XG5cdFx0alF1ZXJ5KCBcImJvZHlcIiApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiYXV0b1wiIH0gKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9LFxuXG5cdHNhdmVNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCggZSApO1xuXHR9LFxuXG5cdGRvTm90aGluZzogZnVuY3Rpb24oIGUgKSB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRvcHRpb25zID0ge30gKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGlkOiBmYWxzZSxcblx0XHRcdGRhdGE6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1tb2RhbCcsXG5cdFx0XHRtb2RhbDoge30sXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdH0sICRvcHRpb25zICk7XG5cblx0XHRuZXcgV1BPbmlvbl9XUF9Nb2RhbCggXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogdGhpcy5nZXRfbGVmdF9tZW51KCksXG5cdFx0XHRodG1sOiB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLFxuXHRcdFx0aGlkZV9tZW51OiB0aGlzLm9wdGlvbnNbICdoaWRlX21lbnUnIF0sXG5cdFx0fSwgdGhpcy5vcHRpb25zWyAnbW9kYWwnIF0gKSApO1xuXHR9XG5cblx0Z2V0X2xlZnRfbWVudSgpIHtcblx0XHRsZXQgJHJldHVybiA9IGZhbHNlO1xuXHRcdGlmKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdICkge1xuXHRcdFx0JHJldHVybiA9IHt9O1xuXG5cdFx0XHRfLmVhY2goIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sICggJGRhdGEsICRrZXkgKSA9PiB7XG5cdFx0XHRcdCRyZXR1cm5bICRrZXkgXSA9ICggdHlwZW9mICRkYXRhWyAnbWVudV90aXRsZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/ICRkYXRhWyAnbWVudV90aXRsZScgXSA6ICRkYXRhWyAndGl0bGUnIF07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==