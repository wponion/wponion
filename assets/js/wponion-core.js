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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createAddHook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createAddHook.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validateNamespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateNamespace.js */ "./node_modules/@wordpress/hooks/build-module/validateNamespace.js");
/* harmony import */ var _validateHookName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateHookName.js */ "./node_modules/@wordpress/hooks/build-module/validateHookName.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./node_modules/@wordpress/hooks/build-module/index.js");
/**
 * Internal dependencies
 */



/**
 * Returns a function which, when invoked, will add a hook.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that adds a new hook.
 */

function createAddHook(hooks) {
  /**
   * Adds the hook to the appropriate hooks container.
   *
   * @param {string}   hookName  Name of hook to add
   * @param {string}   namespace The unique namespace identifying the callback in the form `vendor/plugin/function`.
   * @param {Function} callback  Function to call when the hook is run
   * @param {?number}  priority  Priority of this hook (default=10)
   */
  return function addHook(hookName, namespace, callback) {
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    if (!Object(_validateHookName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(hookName)) {
      return;
    }

    if (!Object(_validateNamespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace)) {
      return;
    }

    if ('function' !== typeof callback) {
      // eslint-disable-next-line no-console
      console.error('The hook callback must be a function.');
      return;
    } // Validate numeric priority


    if ('number' !== typeof priority) {
      // eslint-disable-next-line no-console
      console.error('If specified, the hook priority must be a number.');
      return;
    }

    var handler = {
      callback: callback,
      priority: priority,
      namespace: namespace
    };

    if (hooks[hookName]) {
      // Find the correct insert index of the new hook.
      var handlers = hooks[hookName].handlers;
      var i;

      for (i = handlers.length; i > 0; i--) {
        if (priority >= handlers[i - 1].priority) {
          break;
        }
      }

      if (i === handlers.length) {
        // If append, operate via direct assignment.
        handlers[i] = handler;
      } else {
        // Otherwise, insert before index via splice.
        handlers.splice(i, 0, handler);
      } // We may also be currently executing this hook.  If the callback
      // we're adding would come after the current callback, there's no
      // problem; otherwise we need to increase the execution index of
      // any other runs by 1 to account for the added element.


      (hooks.__current || []).forEach(function (hookInfo) {
        if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
          hookInfo.currentIndex++;
        }
      });
    } else {
      // This is the first hook of its type.
      hooks[hookName] = {
        handlers: [handler],
        runs: 0
      };
    }

    if (hookName !== 'hookAdded') {
      Object(___WEBPACK_IMPORTED_MODULE_2__["doAction"])('hookAdded', hookName, namespace, callback, priority);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createAddHook);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createCurrentHook.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createCurrentHook.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns a function which, when invoked, will return the name of the
 * currently running hook, or `null` if no hook of the given type is currently
 * running.
 *
 * @param  {Object}   hooks          Stored hooks, keyed by hook name.
 *
 * @return {Function}                Function that returns the current hook.
 */
function createCurrentHook(hooks) {
  /**
   * Returns the name of the currently running hook, or `null` if no hook of
   * the given type is currently running.
   *
   * @return {?string}             The name of the currently running hook, or
   *                               `null` if no hook is currently running.
   */
  return function currentHook() {
    if (!hooks.__current || !hooks.__current.length) {
      return null;
    }

    return hooks.__current[hooks.__current.length - 1].name;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createCurrentHook);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createDidHook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createDidHook.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validateHookName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateHookName.js */ "./node_modules/@wordpress/hooks/build-module/validateHookName.js");
/**
 * Internal dependencies
 */

/**
 * Returns a function which, when invoked, will return the number of times a
 * hook has been called.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns a hook's call count.
 */

function createDidHook(hooks) {
  /**
   * Returns the number of times an action has been fired.
   *
   * @param  {string} hookName The hook name to check.
   *
   * @return {number}          The number of times the hook has run.
   */
  return function didHook(hookName) {
    if (!Object(_validateHookName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(hookName)) {
      return;
    }

    return hooks[hookName] && hooks[hookName].runs ? hooks[hookName].runs : 0;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createDidHook);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createDoingHook.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createDoingHook.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns a function which, when invoked, will return whether a hook is
 * currently being executed.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns whether a hook is currently
 *                          being executed.
 */
function createDoingHook(hooks) {
  /**
   * Returns whether a hook is currently being executed.
   *
   * @param  {?string} hookName The name of the hook to check for.  If
   *                            omitted, will check for any hook being executed.
   *
   * @return {boolean}             Whether the hook is being executed.
   */
  return function doingHook(hookName) {
    // If the hookName was not passed, check for any current hook.
    if ('undefined' === typeof hookName) {
      return 'undefined' !== typeof hooks.__current[0];
    } // Return the __current hook.


    return hooks.__current[0] ? hookName === hooks.__current[0].name : false;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createDoingHook);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createHasHook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createHasHook.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns a function which, when invoked, will return whether any handlers are
 * attached to a particular hook.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns whether any handlers are
 *                          attached to a particular hook.
 */
function createHasHook(hooks) {
  /**
   * Returns how many handlers are attached for the given hook.
   *
   * @param  {string}  hookName The name of the hook to check for.
   *
   * @return {boolean} Whether there are handlers that are attached to the given hook.
   */
  return function hasHook(hookName) {
    return hookName in hooks;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createHasHook);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createHooks.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createHooks.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAddHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAddHook */ "./node_modules/@wordpress/hooks/build-module/createAddHook.js");
/* harmony import */ var _createRemoveHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRemoveHook */ "./node_modules/@wordpress/hooks/build-module/createRemoveHook.js");
/* harmony import */ var _createHasHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHasHook */ "./node_modules/@wordpress/hooks/build-module/createHasHook.js");
/* harmony import */ var _createRunHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createRunHook */ "./node_modules/@wordpress/hooks/build-module/createRunHook.js");
/* harmony import */ var _createCurrentHook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createCurrentHook */ "./node_modules/@wordpress/hooks/build-module/createCurrentHook.js");
/* harmony import */ var _createDoingHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createDoingHook */ "./node_modules/@wordpress/hooks/build-module/createDoingHook.js");
/* harmony import */ var _createDidHook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createDidHook */ "./node_modules/@wordpress/hooks/build-module/createDidHook.js");
/**
 * Internal dependencies
 */







/**
 * Returns an instance of the hooks object.
 *
 * @return {Object} Object that contains all hooks.
 */

function createHooks() {
  var actions = Object.create(null);
  var filters = Object.create(null);
  actions.__current = [];
  filters.__current = [];
  return {
    addAction: Object(_createAddHook__WEBPACK_IMPORTED_MODULE_0__["default"])(actions),
    addFilter: Object(_createAddHook__WEBPACK_IMPORTED_MODULE_0__["default"])(filters),
    removeAction: Object(_createRemoveHook__WEBPACK_IMPORTED_MODULE_1__["default"])(actions),
    removeFilter: Object(_createRemoveHook__WEBPACK_IMPORTED_MODULE_1__["default"])(filters),
    hasAction: Object(_createHasHook__WEBPACK_IMPORTED_MODULE_2__["default"])(actions),
    hasFilter: Object(_createHasHook__WEBPACK_IMPORTED_MODULE_2__["default"])(filters),
    removeAllActions: Object(_createRemoveHook__WEBPACK_IMPORTED_MODULE_1__["default"])(actions, true),
    removeAllFilters: Object(_createRemoveHook__WEBPACK_IMPORTED_MODULE_1__["default"])(filters, true),
    doAction: Object(_createRunHook__WEBPACK_IMPORTED_MODULE_3__["default"])(actions),
    applyFilters: Object(_createRunHook__WEBPACK_IMPORTED_MODULE_3__["default"])(filters, true),
    currentAction: Object(_createCurrentHook__WEBPACK_IMPORTED_MODULE_4__["default"])(actions),
    currentFilter: Object(_createCurrentHook__WEBPACK_IMPORTED_MODULE_4__["default"])(filters),
    doingAction: Object(_createDoingHook__WEBPACK_IMPORTED_MODULE_5__["default"])(actions),
    doingFilter: Object(_createDoingHook__WEBPACK_IMPORTED_MODULE_5__["default"])(filters),
    didAction: Object(_createDidHook__WEBPACK_IMPORTED_MODULE_6__["default"])(actions),
    didFilter: Object(_createDidHook__WEBPACK_IMPORTED_MODULE_6__["default"])(filters),
    actions: actions,
    filters: filters
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createHooks);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createRemoveHook.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createRemoveHook.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validateNamespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateNamespace.js */ "./node_modules/@wordpress/hooks/build-module/validateNamespace.js");
/* harmony import */ var _validateHookName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateHookName.js */ "./node_modules/@wordpress/hooks/build-module/validateHookName.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./node_modules/@wordpress/hooks/build-module/index.js");
/**
 * Internal dependencies
 */



/**
 * Returns a function which, when invoked, will remove a specified hook or all
 * hooks by the given name.
 *
 * @param  {Object}   hooks      Stored hooks, keyed by hook name.
 * @param  {boolean}     removeAll  Whether to remove all callbacks for a hookName, without regard to namespace. Used to create `removeAll*` functions.
 *
 * @return {Function}            Function that removes hooks.
 */

function createRemoveHook(hooks, removeAll) {
  /**
   * Removes the specified callback (or all callbacks) from the hook with a
   * given hookName and namespace.
   *
   * @param {string}    hookName  The name of the hook to modify.
   * @param {string}    namespace The unique namespace identifying the callback in the form `vendor/plugin/function`.
   *
   * @return {number}             The number of callbacks removed.
   */
  return function removeHook(hookName, namespace) {
    if (!Object(_validateHookName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(hookName)) {
      return;
    }

    if (!removeAll && !Object(_validateNamespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace)) {
      return;
    } // Bail if no hooks exist by this name


    if (!hooks[hookName]) {
      return 0;
    }

    var handlersRemoved = 0;

    if (removeAll) {
      handlersRemoved = hooks[hookName].handlers.length;
      hooks[hookName] = {
        runs: hooks[hookName].runs,
        handlers: []
      };
    } else {
      // Try to find the specified callback to remove.
      var handlers = hooks[hookName].handlers;

      var _loop = function _loop(i) {
        if (handlers[i].namespace === namespace) {
          handlers.splice(i, 1);
          handlersRemoved++; // This callback may also be part of a hook that is
          // currently executing.  If the callback we're removing
          // comes after the current callback, there's no problem;
          // otherwise we need to decrease the execution index of any
          // other runs by 1 to account for the removed element.

          (hooks.__current || []).forEach(function (hookInfo) {
            if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
              hookInfo.currentIndex--;
            }
          });
        }
      };

      for (var i = handlers.length - 1; i >= 0; i--) {
        _loop(i);
      }
    }

    if (hookName !== 'hookRemoved') {
      Object(___WEBPACK_IMPORTED_MODULE_2__["doAction"])('hookRemoved', hookName, namespace);
    }

    return handlersRemoved;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createRemoveHook);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createRunHook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createRunHook.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

/**
 * Returns a function which, when invoked, will execute all callbacks
 * registered to a hook of the specified type, optionally returning the final
 * value of the call chain.
 *
 * @param  {Object}   hooks          Stored hooks, keyed by hook name.
 * @param  {?boolean}    returnFirstArg Whether each hook callback is expected to
 *                                   return its first argument.
 *
 * @return {Function}                Function that runs hook callbacks.
 */

function createRunHook(hooks, returnFirstArg) {
  /**
   * Runs all callbacks for the specified hook.
   *
   * @param  {string} hookName The name of the hook to run.
   * @param  {...*}   args     Arguments to pass to the hook callbacks.
   *
   * @return {*}               Return value of runner, if applicable.
   */
  return function runHooks(hookName) {
    if (!hooks[hookName]) {
      hooks[hookName] = {
        handlers: [],
        runs: 0
      };
    }

    hooks[hookName].runs++;
    var handlers = hooks[hookName].handlers; // The following code is stripped from production builds.

    if (true) {
      // Handle any 'all' hooks registered.
      if ('hookAdded' !== hookName && hooks.all) {
        handlers.push.apply(handlers, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(hooks.all.handlers));
      }
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!handlers || !handlers.length) {
      return returnFirstArg ? args[0] : undefined;
    }

    var hookInfo = {
      name: hookName,
      currentIndex: 0
    };

    hooks.__current.push(hookInfo);

    while (hookInfo.currentIndex < handlers.length) {
      var handler = handlers[hookInfo.currentIndex];
      var result = handler.callback.apply(null, args);

      if (returnFirstArg) {
        args[0] = result;
      }

      hookInfo.currentIndex++;
    }

    hooks.__current.pop();

    if (returnFirstArg) {
      return args[0];
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createRunHook);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/index.js ***!
  \*************************************************************/
/*! exports provided: createHooks, addAction, addFilter, removeAction, removeFilter, hasAction, hasFilter, removeAllActions, removeAllFilters, doAction, applyFilters, currentAction, currentFilter, doingAction, doingFilter, didAction, didFilter, actions, filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAction", function() { return addAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFilter", function() { return addFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAction", function() { return removeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFilter", function() { return removeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAction", function() { return hasAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFilter", function() { return hasFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllActions", function() { return removeAllActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllFilters", function() { return removeAllFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAction", function() { return doAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFilters", function() { return applyFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentAction", function() { return currentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentFilter", function() { return currentFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doingAction", function() { return doingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doingFilter", function() { return doingFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didAction", function() { return didAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didFilter", function() { return didFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony import */ var _createHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHooks */ "./node_modules/@wordpress/hooks/build-module/createHooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHooks", function() { return _createHooks__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * Internal dependencies
 */


var _createHooks = Object(_createHooks__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    addAction = _createHooks.addAction,
    addFilter = _createHooks.addFilter,
    removeAction = _createHooks.removeAction,
    removeFilter = _createHooks.removeFilter,
    hasAction = _createHooks.hasAction,
    hasFilter = _createHooks.hasFilter,
    removeAllActions = _createHooks.removeAllActions,
    removeAllFilters = _createHooks.removeAllFilters,
    doAction = _createHooks.doAction,
    applyFilters = _createHooks.applyFilters,
    currentAction = _createHooks.currentAction,
    currentFilter = _createHooks.currentFilter,
    doingAction = _createHooks.doingAction,
    doingFilter = _createHooks.doingFilter,
    didAction = _createHooks.didAction,
    didFilter = _createHooks.didFilter,
    actions = _createHooks.actions,
    filters = _createHooks.filters;



/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/validateHookName.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/validateHookName.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Validate a hookName string.
 *
 * @param  {string} hookName The hook name to validate. Should be a non empty string containing
 *                           only numbers, letters, dashes, periods and underscores. Also,
 *                           the hook name cannot begin with `__`.
 *
 * @return {boolean}            Whether the hook name is valid.
 */
function validateHookName(hookName) {
  if ('string' !== typeof hookName || '' === hookName) {
    // eslint-disable-next-line no-console
    console.error('The hook name must be a non-empty string.');
    return false;
  }

  if (/^__/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name cannot begin with `__`.');
    return false;
  }

  if (!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name can only contain numbers, letters, dashes, periods and underscores.');
    return false;
  }

  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (validateHookName);

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/validateNamespace.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/validateNamespace.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Validate a namespace string.
 *
 * @param  {string} namespace The namespace to validate - should take the form
 *                            `vendor/plugin/function`.
 *
 * @return {boolean}             Whether the namespace is valid.
 */
function validateNamespace(namespace) {
  if ('string' !== typeof namespace || '' === namespace) {
    // eslint-disable-next-line no-console
    console.error('The namespace must be a non-empty string.');
    return false;
  }

  if (!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(namespace)) {
    // eslint-disable-next-line no-console
    console.error('The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.');
    return false;
  }

  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (validateNamespace);

/***/ }),

/***/ "./node_modules/js-parse-args/index.js":
/*!*********************************************!*\
  !*** ./node_modules/js-parse-args/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JS_Parse_Args =
/*#__PURE__*/
function () {
  function JS_Parse_Args() {
    var $args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var $defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var $is_nested = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, JS_Parse_Args);

    this.args = JS_Parse_Args.clone($args);
    this.defaults = $defaults;
    this.nested = $is_nested;
    this.parse();
    return this.args;
  }

  _createClass(JS_Parse_Args, [{
    key: "parse",
    value: function parse() {
      for (var $_key in this.defaults) {
        if (this.defaults.hasOwnProperty($_key)) {
          if (true === this.nested && _typeof(this.defaults[$_key]) === 'object') {
            this.args[$_key] = new JS_Parse_Args(this.args[$_key], this.defaults[$_key], this.nested);
          } else {
            if (typeof this.args[$_key] === 'undefined') {
              this.args[$_key] = JS_Parse_Args.clone(this.defaults[$_key]);
            }
          }
        }
      }
    }
  }], [{
    key: "clone",
    value: function clone(src) {
      if (_typeof(src) === 'object') {
        var target = {};

        for (var prop in src) {
          if (src.hasOwnProperty(prop)) {
            target[prop] = src[prop];
          }
        }

        return target;
      }

      return src;
    }
  }]);

  return JS_Parse_Args;
}();

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var $args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var $defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $is_deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return new JS_Parse_Args($args, $defaults, $is_deep);
});

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
    } // Math.round(now)


    s = now | 0;
    return Math.round((now - s) * 1e6) / 1e6 + ' ' + s;
  } else {
    now = (Date.now ? Date.now() : new Date().getTime()) / 1e3;

    if (getAsFloat) {
      return now;
    } // Math.round(now)


    s = now | 0;
    return Math.round((now - s) * 1e3) / 1e3 + ' ' + s;
  }
};

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

/***/ }),

/***/ "./node_modules/locutus/php/funchand/call_user_func_array.js":
/*!*******************************************************************!*\
  !*** ./node_modules/locutus/php/funchand/call_user_func_array.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
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
        } // if primitive value, replace with object


        if (Object(obj[key]) !== obj[key]) {
          obj[key] = {};
        }

        obj = obj[key];
      }

      lastObj[key] = value;
    }
  }
};

/***/ }),

/***/ "./node_modules/locutus/php/strings/rtrim.js":
/*!***************************************************!*\
  !*** ./node_modules/locutus/php/strings/rtrim.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function rtrim(str, charlist) {
  //  discuss at: http://locutus.io/php/rtrim/
  // original by: Kevin van Zonneveld (http://kvz.io)
  //    input by: Erkekjetter
  //    input by: rem
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: rtrim('    Kevin van Zonneveld    ')
  //   returns 1: '    Kevin van Zonneveld'
  charlist = !charlist ? ' \\s\xA0' : (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '\\$1');
  var re = new RegExp('[' + charlist + ']+$', 'g');
  return (str + '').replace(re, '');
};

/***/ }),

/***/ "./node_modules/locutus/php/strings/strpos.js":
/*!****************************************************!*\
  !*** ./node_modules/locutus/php/strings/strpos.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function strpos(haystack, needle, offset) {
  //  discuss at: http://locutus.io/php/strpos/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Daniel Esteban
  //   example 1: strpos('Kevin van Zonneveld', 'e', 5)
  //   returns 1: 14
  var i = (haystack + '').indexOf(needle, offset || 0);
  return i === -1 ? false : i;
};

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
    h4 = bits & 0x3f; // use hexets to index into b64, and append result to encoded string

    tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < stringToEncode.length);

  enc = tmpArr.join('');
  var r = stringToEncode.length % 3;
  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
};

/***/ }),

/***/ "./node_modules/locutus/php/url/http_build_query.js":
/*!**********************************************************!*\
  !*** ./node_modules/locutus/php/url/http_build_query.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

module.exports = function http_build_query(formdata, numericPrefix, argSeparator, encType) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/http_build_query/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Legaev Andrey
  // improved by: Michael White (http://getsprink.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  revised by: stag019
  //    input by: Dreamer
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: MIO_KODUKI (http://mio-koduki.blogspot.com/)
  // improved by: Will Rowe
  //      note 1: If the value is null, key and value are skipped in the
  //      note 1: http_build_query of PHP while in locutus they are not.
  //   example 1: http_build_query({foo: 'bar', php: 'hypertext processor', baz: 'boom', cow: 'milk'}, '', '&amp;')
  //   returns 1: 'foo=bar&amp;php=hypertext+processor&amp;baz=boom&amp;cow=milk'
  //   example 2: http_build_query({'php': 'hypertext processor', 0: 'foo', 1: 'bar', 2: 'baz', 3: 'boom', 'cow': 'milk'}, 'myvar_')
  //   returns 2: 'myvar_0=foo&myvar_1=bar&myvar_2=baz&myvar_3=boom&php=hypertext+processor&cow=milk'
  //   example 3: http_build_query({foo: 'bar', php: 'hypertext processor', baz: 'boom', cow: 'milk'}, '', '&amp;', 'PHP_QUERY_RFC3986')
  //   returns 3: 'foo=bar&amp;php=hypertext%20processor&amp;baz=boom&amp;cow=milk'
  var encodeFunc;

  switch (encType) {
    case 'PHP_QUERY_RFC3986':
      encodeFunc = __webpack_require__(/*! ../url/rawurlencode */ "./node_modules/locutus/php/url/rawurlencode.js");
      break;

    case 'PHP_QUERY_RFC1738':
    default:
      encodeFunc = __webpack_require__(/*! ../url/urlencode */ "./node_modules/locutus/php/url/urlencode.js");
      break;
  }

  var value;
  var key;
  var tmp = [];

  var _httpBuildQueryHelper = function _httpBuildQueryHelper(key, val, argSeparator) {
    var k;
    var tmp = [];

    if (val === true) {
      val = '1';
    } else if (val === false) {
      val = '0';
    }

    if (val !== null) {
      if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
        for (k in val) {
          if (val[k] !== null) {
            tmp.push(_httpBuildQueryHelper(key + '[' + k + ']', val[k], argSeparator));
          }
        }

        return tmp.join(argSeparator);
      } else if (typeof val !== 'function') {
        return encodeFunc(key) + '=' + encodeFunc(val);
      } else {
        throw new Error('There was an error processing for http_build_query().');
      }
    } else {
      return '';
    }
  };

  if (!argSeparator) {
    argSeparator = '&';
  }

  for (key in formdata) {
    value = formdata[key];

    if (numericPrefix && !isNaN(key)) {
      key = String(numericPrefix) + key;
    }

    var query = _httpBuildQueryHelper(key, value, argSeparator);

    if (query !== '') {
      tmp.push(query);
    }
  }

  return tmp.join(argSeparator);
};

/***/ }),

/***/ "./node_modules/locutus/php/url/parse_url.js":
/*!***************************************************!*\
  !*** ./node_modules/locutus/php/url/parse_url.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parse_url(str, component) {
  // eslint-disable-line camelcase
  //       discuss at: http://locutus.io/php/parse_url/
  //      original by: Steven Levithan (http://blog.stevenlevithan.com)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //         input by: Lorenzo Pisani
  //         input by: Tony
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //           note 1: original by http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
  //           note 1: blog post at http://blog.stevenlevithan.com/archives/parseuri
  //           note 1: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
  //           note 1: Does not replace invalid characters with '_' as in PHP,
  //           note 1: nor does it return false with
  //           note 1: a seriously malformed URL.
  //           note 1: Besides function name, is essentially the same as parseUri as
  //           note 1: well as our allowing
  //           note 1: an extra slash after the scheme/protocol (to allow file:/// as in PHP)
  //        example 1: parse_url('http://user:pass@host/path?a=v#a')
  //        returns 1: {scheme: 'http', host: 'host', user: 'user', pass: 'pass', path: '/path', query: 'a=v', fragment: 'a'}
  //        example 2: parse_url('http://en.wikipedia.org/wiki/%22@%22_%28album%29')
  //        returns 2: {scheme: 'http', host: 'en.wikipedia.org', path: '/wiki/%22@%22_%28album%29'}
  //        example 3: parse_url('https://host.domain.tld/a@b.c/folder')
  //        returns 3: {scheme: 'https', host: 'host.domain.tld', path: '/a@b.c/folder'}
  //        example 4: parse_url('https://gooduser:secretpassword@www.example.com/a@b.c/folder?foo=bar')
  //        returns 4: { scheme: 'https', host: 'www.example.com', path: '/a@b.c/folder', query: 'foo=bar', user: 'gooduser', pass: 'secretpassword' }
  var query;
  var mode = ( true ? __webpack_require__(/*! ../info/ini_get */ "./node_modules/locutus/php/info/ini_get.js")('locutus.parse_url.mode') : undefined) || 'php';
  var key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment']; // For loose we added one optional slash to post-scheme to catch file:/// (should restrict this)

  var parser = {
    php: new RegExp(['(?:([^:\\/?#]+):)?', '(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?', '()', '(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)'].join('')),
    strict: new RegExp(['(?:([^:\\/?#]+):)?', '(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?', '((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)'].join('')),
    loose: new RegExp(['(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?', '(?:\\/\\/\\/?)?', '((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)', '(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))', '(?:\\?([^#]*))?(?:#(.*))?)'].join(''))
  };
  var m = parser[mode].exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    if (m[i]) {
      uri[key[i]] = m[i];
    }
  }

  if (component) {
    return uri[component.replace('PHP_URL_', '').toLowerCase()];
  }

  if (mode !== 'php') {
    var name = ( true ? __webpack_require__(/*! ../info/ini_get */ "./node_modules/locutus/php/info/ini_get.js")('locutus.parse_url.queryKey') : undefined) || 'queryKey';
    parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
    uri[name] = {};
    query = uri[key[12]] || '';
    query.replace(parser, function ($0, $1, $2) {
      if ($1) {
        uri[name][$1] = $2;
      }
    });
  }

  delete uri.source;
  return uri;
};

/***/ }),

/***/ "./node_modules/locutus/php/url/rawurldecode.js":
/*!******************************************************!*\
  !*** ./node_modules/locutus/php/url/rawurldecode.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function rawurldecode(str) {
  //       discuss at: http://locutus.io/php/rawurldecode/
  //      original by: Brett Zamir (http://brett-zamir.me)
  //         input by: travc
  //         input by: Brett Zamir (http://brett-zamir.me)
  //         input by: Ratheous
  //         input by: lovio
  //      bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //           note 1: Please be aware that this function expects to decode
  //           note 1: from UTF-8 encoded strings, as found on
  //           note 1: pages served as UTF-8
  //        example 1: rawurldecode('Kevin+van+Zonneveld%21')
  //        returns 1: 'Kevin+van+Zonneveld!'
  //        example 2: rawurldecode('http%3A%2F%2Fkvz.io%2F')
  //        returns 2: 'http://kvz.io/'
  //        example 3: rawurldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3DLocutus%26ie%3D')
  //        returns 3: 'http://www.google.nl/search?q=Locutus&ie='
  return decodeURIComponent((str + '').replace(/%(?![\da-f]{2})/gi, function () {
    // PHP tolerates poorly formed escape sequences
    return '%25';
  }));
};

/***/ }),

/***/ "./node_modules/locutus/php/url/rawurlencode.js":
/*!******************************************************!*\
  !*** ./node_modules/locutus/php/url/rawurlencode.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function rawurlencode(str) {
  //       discuss at: http://locutus.io/php/rawurlencode/
  //      original by: Brett Zamir (http://brett-zamir.me)
  //         input by: travc
  //         input by: Brett Zamir (http://brett-zamir.me)
  //         input by: Michael Grier
  //         input by: Ratheous
  //      bugfixed by: Kevin van Zonneveld (http://kvz.io)
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: Joris
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //           note 1: This reflects PHP 5.3/6.0+ behavior
  //           note 1: Please be aware that this function expects \
  //           note 1: to encode into UTF-8 encoded strings, as found on
  //           note 1: pages served as UTF-8
  //        example 1: rawurlencode('Kevin van Zonneveld!')
  //        returns 1: 'Kevin%20van%20Zonneveld%21'
  //        example 2: rawurlencode('http://kvz.io/')
  //        returns 2: 'http%3A%2F%2Fkvz.io%2F'
  //        example 3: rawurlencode('http://www.google.nl/search?q=Locutus&ie=utf-8')
  //        returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3DLocutus%26ie%3Dutf-8'
  str = str + ''; // Tilde should be allowed unescaped in future versions of PHP (as reflected below),
  // but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.

  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
};

/***/ }),

/***/ "./node_modules/locutus/php/url/urldecode.js":
/*!***************************************************!*\
  !*** ./node_modules/locutus/php/url/urldecode.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function urldecode(str) {
  //       discuss at: http://locutus.io/php/urldecode/
  //      original by: Philip Peterson
  //      improved by: Kevin van Zonneveld (http://kvz.io)
  //      improved by: Kevin van Zonneveld (http://kvz.io)
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //      improved by: Lars Fischer
  //      improved by: Orlando
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //         input by: AJ
  //         input by: travc
  //         input by: Brett Zamir (http://brett-zamir.me)
  //         input by: Ratheous
  //         input by: e-mike
  //         input by: lovio
  //      bugfixed by: Kevin van Zonneveld (http://kvz.io)
  //      bugfixed by: Rob
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //           note 1: info on what encoding functions to use from:
  //           note 1: http://xkr.us/articles/javascript/encode-compare/
  //           note 1: Please be aware that this function expects to decode
  //           note 1: from UTF-8 encoded strings, as found on
  //           note 1: pages served as UTF-8
  //        example 1: urldecode('Kevin+van+Zonneveld%21')
  //        returns 1: 'Kevin van Zonneveld!'
  //        example 2: urldecode('http%3A%2F%2Fkvz.io%2F')
  //        returns 2: 'http://kvz.io/'
  //        example 3: urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3DLocutus%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a')
  //        returns 3: 'http://www.google.nl/search?q=Locutus&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
  //        example 4: urldecode('%E5%A5%BD%3_4')
  //        returns 4: '\u597d%3_4'
  return decodeURIComponent((str + '').replace(/%(?![\da-f]{2})/gi, function () {
    // PHP tolerates poorly formed escape sequences
    return '%25';
  }).replace(/\+/g, '%20'));
};

/***/ }),

/***/ "./node_modules/locutus/php/url/urlencode.js":
/*!***************************************************!*\
  !*** ./node_modules/locutus/php/url/urlencode.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function urlencode(str) {
  //       discuss at: http://locutus.io/php/urlencode/
  //      original by: Philip Peterson
  //      improved by: Kevin van Zonneveld (http://kvz.io)
  //      improved by: Kevin van Zonneveld (http://kvz.io)
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //      improved by: Lars Fischer
  //         input by: AJ
  //         input by: travc
  //         input by: Brett Zamir (http://brett-zamir.me)
  //         input by: Ratheous
  //      bugfixed by: Kevin van Zonneveld (http://kvz.io)
  //      bugfixed by: Kevin van Zonneveld (http://kvz.io)
  //      bugfixed by: Joris
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //           note 1: This reflects PHP 5.3/6.0+ behavior
  //           note 1: Please be aware that this function
  //           note 1: expects to encode into UTF-8 encoded strings, as found on
  //           note 1: pages served as UTF-8
  //        example 1: urlencode('Kevin van Zonneveld!')
  //        returns 1: 'Kevin+van+Zonneveld%21'
  //        example 2: urlencode('http://kvz.io/')
  //        returns 2: 'http%3A%2F%2Fkvz.io%2F'
  //        example 3: urlencode('http://www.google.nl/search?q=Locutus&ie=utf-8')
  //        returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3DLocutus%26ie%3Dutf-8'
  str = str + ''; // Tilde should be allowed unescaped in future versions of PHP (as reflected below),
  // but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.

  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
};

/***/ }),

/***/ "./node_modules/locutus/php/var/is_callable.js":
/*!*****************************************************!*\
  !*** ./node_modules/locutus/php/var/is_callable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
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
  } // validFunctionName avoids exploits


  if (validFunctionName && typeof eval(method) === 'function') {
    // eslint-disable-line no-eval
    if (callableName) {
      $global[callableName] = name;
    }

    return true;
  }

  return false;
};

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
  } // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");


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

/***/ }),

/***/ "./node_modules/vsp-js-helper/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vsp-js-helper/index.js ***!
  \*********************************************/
/*! exports provided: parse_args, array_to_html_attr, array_to_html, array_to_window, plain_object, microtime, is_after_date, is_before_date, is_same_date, format_duration, diff_days, time_taken, is_url, call_user_func, call_user_func_array, function_exists, create_function, is_callable, is_tab_focused, is_window_arg, scroll_to_top, copy_to_clip, scroll_pos, window_arg, device_type, pipe_log, to_jquery, is_jquery, to_js_func, md5, counter, rand_md5, css_units, url_params, query_string, parse_str, base64_encode, base64_decode, rawurldecode, rawurlencode, urldecode, urlencode, parse_url, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_args", function() { return parse_args; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array_to_html_attr", function() { return array_to_html_attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array_to_html", function() { return array_to_html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array_to_window", function() { return array_to_window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plain_object", function() { return plain_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "microtime", function() { return microtime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_after_date", function() { return is_after_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_before_date", function() { return is_before_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_same_date", function() { return is_same_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format_duration", function() { return format_duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff_days", function() { return diff_days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_taken", function() { return time_taken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_url", function() { return is_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call_user_func", function() { return call_user_func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call_user_func_array", function() { return call_user_func_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "function_exists", function() { return function_exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_function", function() { return create_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_callable", function() { return is_callable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_tab_focused", function() { return is_tab_focused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_window_arg", function() { return is_window_arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll_to_top", function() { return scroll_to_top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy_to_clip", function() { return copy_to_clip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll_pos", function() { return scroll_pos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window_arg", function() { return window_arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device_type", function() { return device_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe_log", function() { return pipe_log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_jquery", function() { return to_jquery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_jquery", function() { return is_jquery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_js_func", function() { return to_js_func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md5", function() { return md5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand_md5", function() { return rand_md5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css_units", function() { return css_units; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url_params", function() { return url_params; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query_string", function() { return query_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_str", function() { return parse_str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64_encode", function() { return base64_encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64_decode", function() { return base64_decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rawurldecode", function() { return rawurldecode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rawurlencode", function() { return rawurlencode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urldecode", function() { return urldecode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlencode", function() { return urlencode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_url", function() { return parse_url; });
// Array & Object Related Functions
var parse_args = __webpack_require__(/*! js-parse-args */ "./node_modules/js-parse-args/index.js")["default"];
var array_to_html_attr = __webpack_require__(/*! ./parts/array_to_html_attr */ "./node_modules/vsp-js-helper/parts/array_to_html_attr.js")["default"];
var array_to_html = __webpack_require__(/*! ./parts/array_to_html */ "./node_modules/vsp-js-helper/parts/array_to_html.js")["default"];
var array_to_window = __webpack_require__(/*! ./parts/array_to_window */ "./node_modules/vsp-js-helper/parts/array_to_window.js")["default"];
var plain_object = __webpack_require__(/*! ./parts/plain_object */ "./node_modules/vsp-js-helper/parts/plain_object.js")["default"]; // Date & Time Related Functions

var microtime = __webpack_require__(/*! locutus/php/datetime/microtime */ "./node_modules/locutus/php/datetime/microtime.js");
var is_after_date = __webpack_require__(/*! ./parts/is_after_date */ "./node_modules/vsp-js-helper/parts/is_after_date.js")["default"];
var is_before_date = __webpack_require__(/*! ./parts/is_before_date */ "./node_modules/vsp-js-helper/parts/is_before_date.js")["default"];
var is_same_date = __webpack_require__(/*! ./parts/is_same_date */ "./node_modules/vsp-js-helper/parts/is_same_date.js")["default"];
var format_duration = __webpack_require__(/*! ./parts/format_duration */ "./node_modules/vsp-js-helper/parts/format_duration.js")["default"];
var diff_days = __webpack_require__(/*! ./parts/diff_days */ "./node_modules/vsp-js-helper/parts/diff_days.js")["default"];
var time_taken = __webpack_require__(/*! ./parts/time_taken */ "./node_modules/vsp-js-helper/parts/time_taken.js")["default"]; // Data Type Validation

var is_url = __webpack_require__(/*! ./parts/is_url.js */ "./node_modules/vsp-js-helper/parts/is_url.js")["default"]; // Run Time Function Relateds.

var call_user_func = __webpack_require__(/*! locutus/php/funchand/call_user_func */ "./node_modules/locutus/php/funchand/call_user_func.js");
var call_user_func_array = __webpack_require__(/*! locutus/php/funchand/call_user_func_array */ "./node_modules/locutus/php/funchand/call_user_func_array.js");
var function_exists = __webpack_require__(/*! locutus/php/funchand/function_exists */ "./node_modules/locutus/php/funchand/function_exists.js");
var create_function = __webpack_require__(/*! locutus/php/funchand/create_function */ "./node_modules/locutus/php/funchand/create_function.js");
var is_callable = __webpack_require__(/*! locutus/php/var/is_callable */ "./node_modules/locutus/php/var/is_callable.js"); // Browser Related

var is_tab_focused = __webpack_require__(/*! ./parts/is_tab_focused */ "./node_modules/vsp-js-helper/parts/is_tab_focused.js")["default"];
var is_window_arg = __webpack_require__(/*! ./parts/is_window_arg */ "./node_modules/vsp-js-helper/parts/is_window_arg.js")["default"];
var scroll_to_top = __webpack_require__(/*! ./parts/scroll_to_top */ "./node_modules/vsp-js-helper/parts/scroll_to_top.js")["default"];
var copy_to_clip = __webpack_require__(/*! ./parts/copy_to_clip */ "./node_modules/vsp-js-helper/parts/copy_to_clip.js")["default"];
var scroll_pos = __webpack_require__(/*! ./parts/scroll_pos */ "./node_modules/vsp-js-helper/parts/scroll_pos.js")["default"];
var window_arg = __webpack_require__(/*! ./parts/window_arg */ "./node_modules/vsp-js-helper/parts/window_arg.js")["default"];
var device_type = __webpack_require__(/*! ./parts/device_type */ "./node_modules/vsp-js-helper/parts/device_type.js")["default"];
var pipe_log = __webpack_require__(/*! ./parts/pipe_log */ "./node_modules/vsp-js-helper/parts/pipe_log.js")["default"]; // jQuery Related.

var to_jquery = __webpack_require__(/*! ./parts/to_jquery */ "./node_modules/vsp-js-helper/parts/to_jquery.js")["default"];
var is_jquery = __webpack_require__(/*! ./parts/is_jquery */ "./node_modules/vsp-js-helper/parts/is_jquery.js")["default"]; // Others

var to_js_func = __webpack_require__(/*! ./parts/to_js_func */ "./node_modules/vsp-js-helper/parts/to_js_func.js")["default"];
var md5 = __webpack_require__(/*! locutus/php/strings/md5 */ "./node_modules/locutus/php/strings/md5.js");
var counter = __webpack_require__(/*! ./parts/counter */ "./node_modules/vsp-js-helper/parts/counter.js")["default"];
var rand_md5 = __webpack_require__(/*! ./parts/rand_md5 */ "./node_modules/vsp-js-helper/parts/rand_md5.js")["default"];
var css_units = __webpack_require__(/*! ./parts/css_units */ "./node_modules/vsp-js-helper/parts/css_units.js")["default"]; // URL Related Functions.

var url_params = __webpack_require__(/*! ./parts/url_params */ "./node_modules/vsp-js-helper/parts/url_params.js")["default"];
var query_string = __webpack_require__(/*! ./parts/query_string */ "./node_modules/vsp-js-helper/parts/query_string.js")["default"];
var parse_str = __webpack_require__(/*! locutus/php/strings/parse_str */ "./node_modules/locutus/php/strings/parse_str.js");
var base64_encode = __webpack_require__(/*! locutus/php/url/base64_encode */ "./node_modules/locutus/php/url/base64_encode.js");
var base64_decode = __webpack_require__(/*! locutus/php/url/base64_decode */ "./node_modules/locutus/php/url/base64_decode.js");
var rawurldecode = __webpack_require__(/*! locutus/php/url/rawurldecode */ "./node_modules/locutus/php/url/rawurldecode.js");
var rawurlencode = __webpack_require__(/*! locutus/php/url/rawurlencode */ "./node_modules/locutus/php/url/rawurlencode.js");
var urldecode = __webpack_require__(/*! locutus/php/url/urldecode */ "./node_modules/locutus/php/url/urldecode.js");
var urlencode = __webpack_require__(/*! locutus/php/url/urlencode */ "./node_modules/locutus/php/url/urlencode.js");
var parse_url = __webpack_require__(/*! locutus/php/url/parse_url */ "./node_modules/locutus/php/url/parse_url.js");
/* harmony default export */ __webpack_exports__["default"] = ({
  parse_args: parse_args,
  array_to_html_attr: array_to_html_attr,
  array_to_html: array_to_html,
  array_to_window: array_to_window,
  plain_object: plain_object,
  microtime: microtime,
  is_after_date: is_after_date,
  is_before_date: is_before_date,
  is_same_date: is_same_date,
  format_duration: format_duration,
  diff_days: diff_days,
  time_taken: time_taken,
  is_url: is_url,
  call_user_func: call_user_func,
  call_user_func_array: call_user_func_array,
  function_exists: function_exists,
  create_function: create_function,
  is_callable: is_callable,
  is_tab_focused: is_tab_focused,
  is_window_arg: is_window_arg,
  scroll_to_top: scroll_to_top,
  copy_to_clip: copy_to_clip,
  scroll_pos: scroll_pos,
  window_arg: window_arg,
  device_type: device_type,
  pipe_log: pipe_log,
  to_jquery: to_jquery,
  is_jquery: is_jquery,
  to_js_func: to_js_func,
  md5: md5,
  counter: counter,
  rand_md5: rand_md5,
  css_units: css_units,
  url_params: url_params,
  query_string: query_string,
  parse_str: parse_str,
  base64_encode: base64_encode,
  base64_decode: base64_decode,
  rawurldecode: rawurldecode,
  rawurlencode: rawurlencode,
  urldecode: urldecode,
  urlencode: urlencode,
  parse_url: parse_url
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/array_to_html.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/array_to_html.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts the given array elements into <li> tags and appends them to the list of the given id.
 * Use Array.prototype.map(), document.querySelector(), and an anonymous inner closure to create a list of html tags.
 * @param arr
 * @param listID
 * @param tag
 * @returns {*}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (arr, listID) {
  var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'li';
  return function (el) {
    return el = document.querySelector('#' + listID), el.innerHTML += arr.map(function (item) {
      return "<".concat(tag, ">").concat(item, "</").concat(tag, ">");
    }).join('');
  }();
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/array_to_html_attr.js":
/*!****************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/array_to_html_attr.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ($data) {
  var return_html = '';

  for (var I in $data) {
    if (_.isObject($data[I])) {
      return_html += ' ' + I + '="';

      for (var K in $data[I]) {
        var $value = _.isObject($data[I][K]) ? JSON.stringify($data[I][K]) : $data[I][K];
        return_html += $value + ' ';
      }

      return_html += '"';
    } else {
      var _$value = _.isObject($data[I]) ? JSON.stringify($data[I]) : $data[I];

      return_html += ' ' + I + '="' + _$value + '" ';
    }
  }

  return return_html;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/array_to_window.js":
/*!*************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/array_to_window.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ($array) {
  for (var $key in $array) {
    window[$key] = $array[$key];
  }
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/copy_to_clip.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/copy_to_clip.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copy a string to the clipboard. Only works as a result of user action (i.e. inside a click event listener).
 * Create a new <textarea> element, fill it with the supplied data and add it to the HTML document.
 * Use Selection.getRangeAt()to store the selected range (if any).
 * Use document.execCommand('copy') to copy to the clipboard.
 * Remove the <textarea> element from the HTML document. Finally, use Selection().addRange() to recover the original selected range (if any).
 * @param str
 */
/* harmony default export */ __webpack_exports__["default"] = (function (str) {
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
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/counter.js":
/*!*****************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/counter.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (function (selector, start, end) {
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
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/css_units.js":
/*!*******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/css_units.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (val) {
  var s = val;

  if (_.isNumber(val)) {
    return val + 'px';
  } else if (val.indexOf('px') > -1 || val.indexOf('%') > -1 || val.indexOf('em') > -1) {
    var checkPx = s.replace('px', '');
    var checkPct = s.replace('%', '');
    var checkEm = s.replace('em', '');

    if (_.isNumber(checkPx) || _.isNumber(checkPct) || _.isNumber(checkEm)) {
      return val;
    } else {
      return '0px';
    }
  } else {
    return '0px';
  }
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/device_type.js":
/*!*********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/device_type.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Detects wether the website is being opened in a mobile device or a desktop/laptop.
 * Use a regular expression to test the navigator.userAgent property to figure out if the device is a mobile device or a desktop/laptop.
 * @returns {string}
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/diff_days.js":
/*!*******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/diff_days.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns the difference (in days) between two dates.
 * Calculate the difference (in days) between two Date objects.
 * @param dateInitial
 * @param dateFinal
 * @returns {number}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (dateInitial, dateFinal) {
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/format_duration.js":
/*!*************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/format_duration.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Returns the human readable format of the given number of milliseconds.
 * Divide ms with the appropriate values to obtain the appropriate values for day, hour, minute, second and millisecond.
 * Use Object.entries() with Array.prototype.filter() to keep only non-zero values.
 * Use Array.prototype.map() to create the string for each value, pluralizing appropriately.
 * Use String.prototype.join(', ') to combine the values into a string.
 * @param ms
 * @returns {string}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (ms) {
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

    return "".concat(val, " ").concat(key).concat(val !== 1 ? 's' : '');
  }).join(', ');
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_after_date.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_after_date.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Check if a date is after another date.
 * Use the greater than operator (>) to check if the first date comes after the second one.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (dateA, dateB) {
  return dateA > dateB;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_before_date.js":
/*!************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_before_date.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Check if a date is before another date.
 * Use the less than operator (<) to check if the first date comes before the second one.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (dateA, dateB) {
  return dateA < dateB;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_jquery.js":
/*!*******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_jquery.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Check if given Object / Value is a jQuery Instance.
 * @param $elem
 * @returns {boolean|*}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($elem) {
  return false === _.isUndefined($elem) && false === _.isString($elem) && $elem.jQuery;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_same_date.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_same_date.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Check if a date is the same as another date.
 * Use Date.prototype.toISOString() and strict equality checking (===) to check if the first date is the same as the second one.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (dateA, dateB) {
  return dateA.toISOString() === dateB.toISOString();
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_tab_focused.js":
/*!************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_tab_focused.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns true if the browser tab of the page is focused, false otherwise.
 * Use the Document.hidden property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return !document.hidden;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_url.js":
/*!****************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_url.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ($url) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i');
  return pattern.test($url);
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_window_arg.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_window_arg.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if window has given variable.
 * @param $key
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($key) {
  return false === _.isUndefined(window[$key]);
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/pipe_log.js":
/*!******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/pipe_log.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Logs a value and returns it.
 * Use console.log to log the supplied value, combined with the || operator to return it.
 * @param data
 * @returns {*}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  return console.log(data) || data;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/plain_object.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/plain_object.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return typeof Object.create !== 'undefined' ? Object.create(null) : {};
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/query_string.js":
/*!**********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/query_string.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Return value from QueryString
 * @param name
 * @returns {string}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/rand_md5.js":
/*!******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/rand_md5.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var locutus_php_strings_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locutus/php/strings/md5 */ "./node_modules/locutus/php/strings/md5.js");
/* harmony import */ var locutus_php_strings_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(locutus_php_strings_md5__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Unique random md5
 * @returns {String}
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return String(locutus_php_strings_md5__WEBPACK_IMPORTED_MODULE_0___default()(Math.random() + '-' + Math.random() + '-' + Math.random()));
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/scroll_pos.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/scroll_pos.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns the scroll position of the current page.
 * Use pageXOffset and pageYOffset if they are defined, otherwise scrollLeft and scrollTop. You can omit el to use a default value of window.
 * @param el
 * @returns {{x: number, y: number}}
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  };
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/scroll_to_top.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/scroll_to_top.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Smooth-scrolls to the top of the page.
 * Get distance from top using document.documentElement.scrollTop or document.body.scrollTop.
 * Scroll by a fraction of the distance from the top. Use window.requestAnimationFrame() to animate the scrolling.
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/time_taken.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/time_taken.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (callback) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'TimeTaken';
  console.time(title);
  var r = callback();
  console.timeEnd(title);
  return r;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/to_jquery.js":
/*!*******************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/to_jquery.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_jquery */ "./node_modules/vsp-js-helper/parts/is_jquery.js");

/**
 * Returns Given String into A jQuery Object.
 * @param $elem
 * @returns {*}
 */

/* harmony default export */ __webpack_exports__["default"] = (function ($elem) {
  if (false === Object(_is_jquery__WEBPACK_IMPORTED_MODULE_0__["default"])($elem)) {
    return jQuery($elem);
  }

  return $elem;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/to_js_func.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/to_js_func.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validateSingleJSFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateSingleJSFunc */ "./node_modules/vsp-js-helper/parts/validateSingleJSFunc.js");

/**
 * Checks Each Value Of a JS Object And Converts Into JS Callable Function.
 * @param $data
 * @param $args_key
 * @param $contents_key
 * @returns {*}
 */

/* harmony default export */ __webpack_exports__["default"] = (function ($data) {
  var $args_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js_args';
  var $contents_key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'js_contents';

  if (true === _.isObject($data)) {
    for (var $key in $data) {
      if (!_.isEmpty($data[$key])) {
        $data[$key] = Object(_validateSingleJSFunc__WEBPACK_IMPORTED_MODULE_0__["default"])($data[$key], $args_key, $contents_key);
      }
    }
  }

  return $data;
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/url_params.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/url_params.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns an object containing the parameters of the current URL.
 * Use String.match() with an appropriate regular expression to get all key-value pairs,
 * Array.prototype.reduce() to map and combine them into a single object.
 * Pass location.search as the argument to apply to the current url.
 * @param url
 * @returns {T | {}}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (url) {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
    return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
  }, {});
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/validateSingleJSFunc.js":
/*!******************************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/validateSingleJSFunc.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts JS String Into Callable Function.
 * @param $string
 * @param $args_key
 * @param $contents_key
 * @returns {*}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($string) {
  var $args_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js_args';
  var $contents_key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'js_contents';

  if (true === _.isObject($string) && false === _.isUndefined($string[$args_key]) || false === _.isUndefined($string[$contents_key])) {
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
});

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/window_arg.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/window_arg.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sets JS Object Into Window Args.
 * @param $key
 * @param $value
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($key, $value) {
  if (_.isObject($key)) {
    for (var $_k in $key) {
      window[$_k] = $key[$_k];
    }
  } else {
    window[$key] = $value;
  }
});

/***/ }),

/***/ "./node_modules/wordpress-js-ports/functions/add_query_arg.js":
/*!********************************************************************!*\
  !*** ./node_modules/wordpress-js-ports/functions/add_query_arg.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return add_query_arg; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var parse_url = __webpack_require__(/*! locutus/php/url/parse_url */ "./node_modules/locutus/php/url/parse_url.js");

var parse_str = __webpack_require__(/*! locutus/php/strings/parse_str */ "./node_modules/locutus/php/strings/parse_str.js");

var http_build_query = __webpack_require__(/*! locutus/php/url/http_build_query */ "./node_modules/locutus/php/url/http_build_query.js");

var strpos = __webpack_require__(/*! locutus/php/strings/strpos */ "./node_modules/locutus/php/strings/strpos.js");
/**
 * Retrieves a modified URL query string.
 *
 * You can rebuild the URL and append query variables to the URL query by using this function.
 * There are two ways to use this function; either a single key and value, or an associative array.
 *
 * Using a single key and value:
 *
 *     add_query_arg( 'key', 'value', 'http://example.com' );
 *
 * Using an associative array:
 *
 *     add_query_arg( array(
 *         'key1' => 'value1',
 *         'key2' => 'value2',
 *     ), 'http://example.com' );
 *
 * Omitting the URL from either use results in the current URL being used
 * (the value of `window.location.href`).
 *
 * Values are expected to be encoded appropriately with urlencode() or rawurlencode().
 *
 * Setting any query variable's value to boolean false removes the key (see remove_query_arg()).
 *
 * Important: The return value of add_query_arg() is not escaped by default. Output should be
 * late-escaped with esc_url() or similar to help prevent vulnerability to cross-site scripting
 * (XSS) attacks.
 *
 * @param key
 * @param value
 * @param url
 * @returns {string}
 */


function add_query_arg() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (_typeof(key) === 'object' && null === value) {
    url = window.location.href;
  } else if (_typeof(key) === 'object' && null !== value) {
    url = value;
    value = null;
  } else if (null === url) {
    url = window.location.href;
  }

  if (false === url || '' === url || undefined === url) {
    url = window.location.href;
  }

  var $parsed = parse_url(url),
      $query = {},
      $fragment = $parsed.fragment ? '#' + $parsed.fragment : '';

  if (typeof $parsed.query !== 'undefined') {
    parse_str($parsed.query, $query);
  }

  if (_typeof(key) === 'object') {
    for (var k in key) {
      if (key[k]) {
        $query[k] = key[k];
      }
    }
  } else {
    $query[key] = value;
  }

  var split_url = null,
      base_url = url;

  if (false !== strpos(url, '?')) {
    split_url = url.split('?');
    base_url = split_url[0] || url;
  } else if (false !== strpos(url, '#')) {
    split_url = url.split('#');
    base_url = split_url[0] || url;
  }

  for (var _k in $query) {
    if (false === $query[_k]) {
      delete $query[_k];
    }
  }

  $query = http_build_query($query, null, '&');
  $query = $query !== '' ? '?' + $query : $query;
  return base_url + $query + $fragment;
}

/***/ }),

/***/ "./node_modules/wordpress-js-ports/functions/remove_query_arg.js":
/*!***********************************************************************!*\
  !*** ./node_modules/wordpress-js-ports/functions/remove_query_arg.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return remove_query_arg; });
/* harmony import */ var _add_query_arg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_query_arg */ "./node_modules/wordpress-js-ports/functions/add_query_arg.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * Removes an item or items from a query string.
 * @param key
 * @param url
 * @returns {*}
 */

function remove_query_arg() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (_typeof(key) !== 'object') {
    key = [key];
  }

  for (var i in key) {
    if (key[i]) {
      url = Object(_add_query_arg__WEBPACK_IMPORTED_MODULE_0__["default"])(key[i], false, url);
    }
  }

  return url;
}

/***/ }),

/***/ "./node_modules/wordpress-js-ports/functions/trailingslashit.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wordpress-js-ports/functions/trailingslashit.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _untrailingslashit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./untrailingslashit */ "./node_modules/wordpress-js-ports/functions/untrailingslashit.js");

/* harmony default export */ __webpack_exports__["default"] = (function ($string) {
  return Object(_untrailingslashit__WEBPACK_IMPORTED_MODULE_0__["default"])($string) + '/\\';
});

/***/ }),

/***/ "./node_modules/wordpress-js-ports/functions/untrailingslashit.js":
/*!************************************************************************!*\
  !*** ./node_modules/wordpress-js-ports/functions/untrailingslashit.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var locutus_php_strings_rtrim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locutus/php/strings/rtrim */ "./node_modules/locutus/php/strings/rtrim.js");
/* harmony import */ var locutus_php_strings_rtrim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(locutus_php_strings_rtrim__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Removes trailing forward slashes and backslashes if they exist.
 *
 * The primary use of this is for paths and thus should be used for paths. It is
 * not restricted to paths and offers no specific path support.
 * @param $string
 * @returns {*}
 */

/* harmony default export */ __webpack_exports__["default"] = (function ($string) {
  return locutus_php_strings_rtrim__WEBPACK_IMPORTED_MODULE_0___default()($string, '/\\');
});

/***/ }),

/***/ "./node_modules/wordpress-js-ports/index.js":
/*!**************************************************!*\
  !*** ./node_modules/wordpress-js-ports/index.js ***!
  \**************************************************/
/*! exports provided: add_query_arg, remove_query_arg, trailingslashit, untrailingslashit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_query_arg", function() { return add_query_arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove_query_arg", function() { return remove_query_arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trailingslashit", function() { return trailingslashit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untrailingslashit", function() { return untrailingslashit; });
var add_query_arg = __webpack_require__(/*! ./functions/add_query_arg */ "./node_modules/wordpress-js-ports/functions/add_query_arg.js")["default"];
var remove_query_arg = __webpack_require__(/*! ./functions/remove_query_arg */ "./node_modules/wordpress-js-ports/functions/remove_query_arg.js")["default"];
var trailingslashit = __webpack_require__(/*! ./functions/trailingslashit */ "./node_modules/wordpress-js-ports/functions/trailingslashit.js")["default"];
var untrailingslashit = __webpack_require__(/*! ./functions/untrailingslashit */ "./node_modules/wordpress-js-ports/functions/untrailingslashit.js")["default"];
/**
 * Appends Function Globally.
 */

/* harmony default export */ __webpack_exports__["default"] = ((function (window) {
  window.add_query_arg = add_query_arg;
  window.remove_query_arg = remove_query_arg;
  window.untrailingslashit = untrailingslashit;
  window.trailingslashit = trailingslashit;
})(window));

/***/ }),

/***/ "./src/js/core/class/base.js":
/*!***********************************!*\
  !*** ./src/js/core/class/base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPOnion_Base; });
/* harmony import */ var vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * WPOnion Javascript Base Class For All Handler.
 */

var WPOnion_Base =
/*#__PURE__*/
function () {
  /**
   * @param $selector
   * @param $args
   */
  function WPOnion_Base($selector) {
    var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, WPOnion_Base);

    this.elem = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["to_jquery"])($selector);
    this.args = window.wponion._.isObject($args) ? $args : {};
    this.base_init();
  }

  _createClass(WPOnion_Base, [{
    key: "base_init",
    value: function base_init() {}
    /**
     * Returns Current Active Element.
     */

  }, {
    key: "get_arg",

    /**
     * Get A Stored Args.
     * @param $key
     * @param $default
     * @return {boolean}
     */
    value: function get_arg($key) {
      var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return window.wponion._.isUndefined(this.args[$key]) ? $default : this.args[$key];
    }
    /**
     * Sets A Custom Value To Arg.
     * @param $key
     * @param $value
     */

  }, {
    key: "set_arg",
    value: function set_arg($key, $value) {
      this.args[$key] = $value;
      return this;
    }
    /**
     * Parses Args.
     * @param $args
     * @param $defaults
     * @param $is_deep
     * @return {JS_Parse_Args}
     */

  }, {
    key: "parse_args",
    value: function parse_args($args, $defaults) {
      var $is_deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_args"])($args, $defaults, $is_deep);
    }
  }, {
    key: "element",
    get: function get() {
      return this.elem;
    }
    /**
     * Returns Hook Class.
     * @returns {*}
     */

  }, {
    key: "hook",
    get: function get() {
      return window.wponion.hooks;
    }
  }]);

  return WPOnion_Base;
}();



/***/ }),

/***/ "./src/js/core/class/core.js":
/*!***********************************!*\
  !*** ./src/js/core/class/core.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

var $core = {};
/**
 * Validates & Converts into Callable JS Functions.
 * @param $data
 * @returns {Array|Object}
 */

$core.js_func = function ($data) {
  return Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["to_js_func"])($data, 'wponion_js_args', 'wponion_js_contents');
};
/**
 * Generates A Random ID.
 */


$core.rand_id = function () {
  return Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["md5"])('wponion_rand_' + Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["microtime"])() + Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["rand_md5"])());
};
/**
 * Chceks and returns global translation string.
 * @param $key
 * @param $default
 * @returns {string}
 */


$core.txt = function ($key) {
  var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'string_default_not_found';
  return false === window.wponion._.isUndefined(window.wponion_il8n[$key]) ? window.wponion_il8n[$key] : $default;
};
/**
 * Returns Field ID.
 * @param $elem
 * @returns {*}
 */


$core.jsid = function ($elem) {
  return Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["to_jquery"])($elem).attr('data-wponion-jsid');
};
/**
 * Checks if given value is an jQuery instance.
 * @param $elem
 * @returns {*}
 */


$core.isField = function ($elem) {
  return window.wpo_core.jsid(Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["to_jquery"])($elem));
};
/**
 * Returns Window Args.
 * @param $var_id
 * @param $default
 * @returns {*}
 */


$core.windowArgs = function ($var_id) {
  var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return !window.wponion._.isUndefined($var_id) ? window[$var_id] : $default;
};
/**
 * Returns true if WPOnion Debug is enabled.
 * @returns {*}
 */


$core.is_debug = function () {
  return $core.option('debug');
};
/**
 * Checks if given string is a valid JSON.
 * @param obj
 * @returns {boolean}
 */


$core.valid_json = function (obj) {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
/**
 * Gets Field HTML Object Using Field ID.
 * @param $elem
 * @param $where
 * @returns {*}
 * @constructor
 */


$core.IDtoElement = function ($elem) {
  var $where = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var $find_id = ".wponion-element[data-wponion-jsid=\"".concat(window.wpo_core.jsid($elem), "\"");
  return false !== $where && Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_jquery"])($where) ? $where.find($find_id) : jQuery($find_id);
};
/**
 * Checks & Returns Field Args.
 * @param $var_id
 * @param $default
 * @returns {*}
 */


$core.fieldArgs = function ($var_id) {
  var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  $var_id = window.wpo_core.isField($var_id) ? window.wpo_core.jsid($var_id) : $var_id;
  return $var_id ? window.wponion._.clone(window.wpo_core.windowArgs($var_id, $default)) : $default;
};
/**
 * Checks and Retrives Values from $wponion.settings
 * @param $key
 * @param $default
 * @returns {*}
 */


$core.option = function ($key) {
  var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $args = window.wpo_core.windowArgs('wponion_core', false);
  return !window.wponion._.isUndefined($args) && !window.wponion._.isUndefined($args[$key]) ? $args[$key] : $default;
};
/**
 * Custom Ajax Wrapper For jQuery.Ajax()
 * @param $action
 * @param $data
 * @param $onSuccess
 * @param $onError
 * @param $onAlways
 */


$core.ajax = function () {
  var $action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var $data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $onSuccess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var $onError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var $onAlways = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var $defaults = {
    method: 'post',
    url: window.wpo_core.option('ajax_url'),
    success: $onSuccess,
    always: $onError,
    error: $onAlways
  };

  if (window.wponion._.isObject($action)) {
    $data = $action;
  } else {
    $defaults.url += '&' + window.wpo_core.option('ajax_action_key') + '=' + $action;
  }

  $defaults = window.wponion._.merge($defaults, $data);
  var $old_success = $defaults.success,
      $old_always = $defaults.always,
      $old_error = $defaults.error;

  $defaults.success = function (res, instance) {
    return new Promise(function (resolve) {
      instance.lock();
      return window.wpo_core.handle_ajax_response(res, resolve);
    }).then(function () {
      instance.unlock();

      if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])($old_success)) {
        Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func"])($old_success, res, instance);
      }
    })["catch"](function () {
      instance.unlock();

      if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])($old_success)) {
        Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func"])($old_success, res, instance);
      }
    });
  };

  $defaults.error = function (res, instance) {
    instance.unlock();

    if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])($old_error)) {
      Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func"])($old_error, res, instance);
    }
  };

  $defaults.always = function (res, instance) {
    if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])($old_always)) {
      Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func"])($old_always, res, instance);
    }
  };

  return window.wponion_ajax($defaults);
};
/**
 * Handles Ajax Requests.
 * @param res
 * @param resolve
 */


$core.handle_ajax_response = function (res, resolve) {
  if (false === window.wponion._.isUndefined(res.wpo_core)) {
    if (false === window.wponion._.isUndefined(res.wpo_core.styles_html)) {
      var $styles = jQuery(res.wpo_core.styles_html);
      jQuery.each($styles, function () {
        var $id = jQuery(this).attr('href');

        if (jQuery(document).find('link[href="' + $id + '"]').length === 0) {
          jQuery(this).appendTo('body');
        }
      });
    }

    if (false === window.wponion._.isUndefined(res.wpo_core.localizer)) {
      if (window.wponion._.isObject(res.wpo_core.localizer)) {
        for (var $i in res.wpo_core.localizer) {
          if (res.wpo_core.localizer.hasOwnProperty($i)) {
            Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["window_arg"])($i, res.wpo_core.localizer[$i]);
          }
        }
      }
    }

    if (false === window.wponion._.isUndefined(res.wpo_core.scripts_html)) {
      var $script = jQuery('<div>' + res.wpo_core.scripts_html + '</div>'),
          $srcs = [];
      $script = $script.find('script');

      var $load_script = function $load_script($script) {
        if ($script) {
          jQuery.ajax({
            url: $script,
            dataType: 'script',
            cache: true,
            success: function success() {
              $srcs.shift();
              $load_script($srcs[0]);
            }
          });
        } else if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])(resolve)) {
          resolve();
        }
      };

      $script.each(function () {
        var $id = jQuery(this).attr('src');

        if (jQuery(document).find('script[src="' + $id + '"]').length === 0) {
          $srcs.push($id);
        }
      });
      $load_script($srcs[0]);
    } else if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])(resolve)) {
      resolve();
    }
  } else if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])(resolve)) {
    resolve();
  }
};
/**
 * Handles WPOnion Template for underscore.
 * @param $id
 * @returns {function(*=): *}
 */


$core.template = function ($id) {
  var compiled,
      options = {
    evaluate: /<#([\s\S]+?)#>/g,
    interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
    escape: /\{\{([^\}]+?)\}\}(?!\})/g,
    variable: 'data'
  };
  return function (data) {
    compiled = compiled || window.wponion._.template($id, options);
    return compiled(data);
  };
};

/* harmony default export */ __webpack_exports__["default"] = ($core);

/***/ }),

/***/ "./src/js/core/class/debug.js":
/*!************************************!*\
  !*** ./src/js/core/class/debug.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * WPOnion Debug Class.
 */
var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    this.data = {};
  }
  /**
   * @param $key
   * @param $value
   */


  _createClass(_default, [{
    key: "add",
    value: function add($key, $value) {
      this.data[$key] = window.wponion._.isUndefined(this.data[$key]) ? $value : window.wponion._.merge($value, this.data[$key]);
      return this;
    }
    /**
     * @param $key
     * @param $default
     * @return {boolean}
     */

  }, {
    key: "get",
    value: function get($key) {
      var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return window.wponion._.isUndefined(this.data[$key]) ? $default : this.data[$key];
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/js/core/class/dependency.js":
/*!*****************************************!*\
  !*** ./src/js/core/class/dependency.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPOnion_Dependency; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPOnion_Dependency =
/**
 *
 * @param $element
 * @param param
 * @param $config
 */
function WPOnion_Dependency() {
  var _this = this;

  var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  _classCallCheck(this, WPOnion_Dependency);

  this.rules = jQuery.deps.createRuleset();
  this.param = window.wponion._.merge({
    nestable: false,
    parent: false
  }, param);
  this.conf = {
    nestable: this.param.nestable,
    parent: true === this.param.nestable ? $element : this.param.parent
  };
  window.wponion_get_fields($element, '.wponion-has-dependency').each(function (e, elem) {
    return jQuery(elem).trigger('wponion_add_dependency', [_this.rules, _this.conf]);
  });
  jQuery.deps.enable($element, this.rules, window.wponion._.merge({
    show: function show(el) {
      el.slideDown();
      el.find(':input').removeClass('wponion-dependent');
    },
    hide: function hide(el) {
      el.slideUp();
      el.find(':input').addClass('wponion-dependent');
    },
    log: false,
    checkTargets: false
  }, $config));
};



/***/ }),

/***/ "./src/js/core/class/field-base.js":
/*!*****************************************!*\
  !*** ./src/js/core/class/field-base.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPOnion_Field_Base; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/js/core/class/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WPOnion_Field_Base =
/*#__PURE__*/
function (_WPOnion_Base) {
  _inherits(WPOnion_Field_Base, _WPOnion_Base);

  function WPOnion_Field_Base($selector) {
    var _this;

    var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, WPOnion_Field_Base);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WPOnion_Field_Base).call(this, $selector, $args));
    _this._args = false;

    _this.field_base_init();

    return _this;
  }

  _createClass(WPOnion_Field_Base, [{
    key: "field_base_init",
    value: function field_base_init() {}
    /**
     * This function used by each and every field.
     * This function will also convert Simple JS function code into callable JS code & returns it
     * Plus it also store the value in debug array if debug enabled.
     * @param $arg
     * @param $key
     * @returns {*|Object|Array}
     */

  }, {
    key: "handle_args",
    value: function handle_args($arg) {
      var $key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var $args = window.wpo_core.js_func($arg);

      if (!window.wpo_core.is_debug()) {
        return $args;
      }

      var $defaults = {
        'php': {},
        'javascript': {}
      };

      var $exists = window.wponion._.merge($defaults, window.wponion["class"].field_debug.get(this.id(), $defaults));

      if (false === $key) {
        $exists.javascript = $args;
      } else {
        $exists.javascript[$key] = $args;
      }

      window.wponion["class"].field_debug.add(this.id(), $exists);
      return $args;
    }
    /**
     * Gathers Field Options Data from window.wponion array.
     * @returns {*}
     */

  }, {
    key: "options",
    value: function options() {
      if (this._args === false) {
        this._args = window.wpo_core.windowArgs(this.id());
      }

      return this._args;
    }
    /**
     * Checks if a given option key exists and if so then it returns it value
     * or it returns the default value.
     * @param $key
     * @param $default
     * @returns {*}
     */

  }, {
    key: "option",
    value: function option() {
      var $key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var $args = this.options();
      return false === window.wponion._.isUndefined($args[$key]) ? $args[$key] : $default;
    }
    /**
     * Returns Actual Field ID.
     * @return {*}
     */

  }, {
    key: "field_id",
    value: function field_id() {
      return this.option('field_id');
    }
    /**
     * Returns WPOnion JS Field ID
     * @returns {*}
     */

  }, {
    key: "id",
    value: function id() {
      return window.wpo_core.jsid(this.element);
    }
    /**
     * Returns Field's Module Slug.
     * @returns {*}
     */

  }, {
    key: "module",
    value: function module() {
      return this.option('module', false);
    }
    /**
     * Triggers An Ajax Action.
     * @param $action
     * @param $data
     */

  }, {
    key: "ajax",
    value: function ajax() {
      var $action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var $data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var $ajax_key = window.wpo_core.option('ajax_action_key');
      var $default = {
        module: this.module(),
        unique: this.option('unique'),
        field_path: this.option('field_path'),
        builder_path: this.option('builder_path')
      };
      $default[$ajax_key] = $action;
      $data.data = false === window.wponion._.isUndefined($data.data) ? window.wponion._.merge($default, $data.data) : $default;
      return window.wpo_core.ajax($data);
    }
    /**
     * Returns Field Parent By data-wponion-jsid attribute.
     * @param $elem
     * @returns {*|jQuery|HTMLElement}
     */

  }, {
    key: "get_field_parent_by_id",
    value: function get_field_parent_by_id($elem) {
      return jQuery('div.wponion-element[data-wponion-jsid="' + window.wpo_core.jsid($elem) + '"]');
    }
  }]);

  return WPOnion_Field_Base;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/class/field.js":
/*!************************************!*\
  !*** ./src/js/core/class/field.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPOnion_Field; });
/* harmony import */ var _field_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-base */ "./src/js/core/class/field-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WPOnion_Field =
/*#__PURE__*/
function (_WPOnion_Field_Base) {
  _inherits(WPOnion_Field, _WPOnion_Field_Base);

  /**
   * @param $selector
   * @param $args
   */
  function WPOnion_Field($selector) {
    var _this;

    var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, WPOnion_Field);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WPOnion_Field).call(this, $selector, $args));

    if ('DIV' === _this.element.prop('tagName') && _this.element.hasClass('wponion-element')) {
      _this.field_debug();

      _this.js_validator();

      _this.dependency();

      _this.maybe_init_subfields();
    }

    _this.init();

    _this.maybe_add_inited_class();

    return _this;
  }

  _createClass(WPOnion_Field, [{
    key: "maybe_add_inited_class",
    value: function maybe_add_inited_class() {
      this.element.addClass('wponion-field-inited');
    }
    /**
     * Validate if its a nested element and if it is then it triggers field reload.
     */

  }, {
    key: "maybe_init_subfields",
    value: function maybe_init_subfields() {
      if (this.element.hasClass('wponion-has-nested-fields')) {
        window.wponion_field_reload(this.element);
      }
    }
  }, {
    key: "init",
    value: function init() {}
    /**
     * Handles Field Debug POPUP.
     */

  }, {
    key: "field_debug",
    value: function field_debug() {
      var _this2 = this;

      if (!window.wpo_core.is_debug()) {
        return;
      }

      if (false !== window.wponion["class"].field_debug.get(this.id())) {
        return;
      }

      var $info = this.option('debug_info');

      if (false === window.wponion._.isUndefined($info) && false === window.wponion._.isEmpty($info)) {
        window.wponion["class"].field_debug.add(this.id(), {
          'php': $info,
          'javascript': {}
        });
      }

      var $found = this.element;

      if (!this.element.hasClass('wponion-field-debug')) {
        var $elem = jQuery('div.wponion-element[data-wponion-jsid=' + this.id() + ']');
        $found = $elem.hasClass('wponion-field-debug') ? $elem : $found;
      }

      if (false !== $found) {
        $found.find('> .row > .wponion-field-title > h4').tippy({
          content: window.wpo_core.txt('click_to_view_debug_info', 'Click To View Field Debug Info'),
          arrow: true,
          arrowType: 'round',
          placement: 'bottom',
          theme: 'light',
          animation: 'scale',
          appendTo: this.get_field_parent_by_id(this.element)[0]
        });
        $found.find('> .row > .wponion-field-title > h4').on('click', function () {
          var $d = _this2.id() + 'debugINFO',
              $notice_txt = "<p class=\"wponion-field-debug-notice\">".concat(window.wpo_core.option('debug_notice'), "</p>"),
              $elem = jQuery("<div id=\"".concat($d, "\" class=\"wponion-field-debug-popup\"><div id=\"").concat($d, "\" ></div>").concat($notice_txt, "</div>")),
              $data = window.wponion["class"].field_debug.get(_this2.id());
          window.swal.fire({
            html: $elem,
            showConfirmButton: true,
            confirmButtonText: window.wpo_core.txt('get_json_output', 'As JSON'),
            showCloseButton: false,
            width: '800px',
            onOpen: function onOpen() {
              return jQuery('#swal2-content > div > #' + $d).jsonView($data);
            }
          }).then(function (result) {
            if (result.value) {
              $data = JSON.stringify($data);
              window.swal.fire({
                width: '600px',
                html: "<textarea style=\"min-width:550px; min-height:300px\">".concat($data, "</textarea>")
              });
            }
          });
        });
      }
    }
    /**
     * Handles javascript error placement.
     * @param err
     */

  }, {
    key: "js_error",
    value: function js_error(err) {
      //console.log( this.element, err );
      //if( window.wpo_core.jsid( err.element ) === window.wpo_core.jsid( this.element ) ) {
      err.error.appendTo(this.element.find('.wponion-fieldset')); //}
    }
    /**
     * Creates An Trigger Hook To Handle JS Error Placement
     * @use constructor
     * @param element
     */

  }, {
    key: "js_error_handler",
    value: function js_error_handler() {
      var _this3 = this;

      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;
      element.on('wponion_js_validation_message', '> .row > .wponion-fieldset :input', function (e, data) {
        return _this3.js_error(data);
      });
    }
    /**
     * Checks if validation is required for current field.
     */

  }, {
    key: "js_validator",
    value: function js_validator() {
      if (false === window.wponion._.isUndefined(this.option('js_validate', false))) {
        this.js_error_handler();

        if (false !== this.option('js_validate', false)) {
          this.maybe_js_validate_elem(this.option('js_validate', false), this.element);
        }
      }
    }
    /**
     * Checks if current page has form and enable validations.
     * @param $args
     * @param $elem
     */

  }, {
    key: "maybe_js_validate_elem",
    value: function maybe_js_validate_elem($args, $elem) {
      try {
        $elem.find(':input').each(function () {
          jQuery(this).rules('add', $args);
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "dependency",
    value: function dependency() {
      var _this4 = this;

      if (this.element.hasClass('wponion-has-dependency')) {
        this.element.on('wponion_add_dependency', function (event, rules, config) {
          var $dep = _this4.option('dependency');

          for (var $key in $dep) {
            if ($dep.hasOwnProperty($key)) {
              var $controller = $dep[$key].controller,
                  $condition = $dep[$key].condition,
                  $value = $dep[$key].value,
                  $field = '[data-depend-id="' + $controller + '"]';

              if (false !== config.nestable) {
                var $INPUT = config.parent.find($field);

                if ($INPUT.length > 0) {
                  $field = '[data-wponion-jsid="' + window.wpo_core.jsid($INPUT) + '"]:input';
                }
              }

              rules.createRule($field, $condition, $value).include(_this4.element);
            }
          } //console.log( this.id(), this.option( 'dependency' ), this.element );


          window.wponion["class"].field_debug.add(_this4.id(), {
            'Dependency': $dep,
            'Nestable Dependency': config.nestable
          });
        });
      }
    }
    /**
     * Inits A Single Field Type
     * @uses init_single_field.
     * @param $elem
     * @param $type
     */

  }, {
    key: "init_field",
    value: function init_field($elem, $type) {
      if (!window.wponion.helper.is_jquery($elem)) {
        $elem = this.element.find($elem);
      }

      if ($elem.length > 1) {
        $elem.each(function (i, e) {
          return window.wponion_init_field($type, jQuery(e));
        });
      } else if ($elem.length === 1) {
        window.wponion_init_field($type, $elem);
      }
    }
  }]);

  return WPOnion_Field;
}(_field_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/class/module-base.js":
/*!******************************************!*\
  !*** ./src/js/core/class/module-base.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPOnion_Module_Base; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/js/core/class/base.js");
/* harmony import */ var vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WPOnion_Module_Base =
/*#__PURE__*/
function (_WPOnion_Base) {
  _inherits(WPOnion_Module_Base, _WPOnion_Base);

  function WPOnion_Module_Base($selector) {
    var _this;

    var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, WPOnion_Module_Base);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WPOnion_Module_Base).call(this, $selector, $args));

    _this.module_init();

    return _this;
  }

  _createClass(WPOnion_Module_Base, [{
    key: "module_init",
    value: function module_init() {}
    /**
     * Fetchs And Returns An Arg.
     * @param $element
     * @param $option_key
     * @param $default
     * @return {boolean|*}
     */

  }, {
    key: "ui_menu_handler",

    /**
     * Internal UI Menu Handler.
     */
    value: function ui_menu_handler() {
      var _this2 = this;

      this.element.find('.wponion-menu > ul a').on('click', function (e) {
        e.preventDefault();
        var $elem = jQuery(e.currentTarget);

        if ($elem.hasClass('dropdown')) {
          if ($elem.parent().find('> ul').is(':visible')) {
            _this2.element.find('.wponion-menu > ul a.dropdown').removeClass('open');

            $elem.parent().find('> ul').slideToggle();
          } else {
            _this2.element.find('.wponion-menu > ul ul').slideUp();

            _this2.element.find('.wponion-menu > ul a.dropdown').removeClass('open');

            $elem.addClass('open');
            $elem.parent().find('> ul').slideToggle();
          }
        } else {
          var $href = window.wponion.helper.url_params($elem.attr('href'));

          if (false === window.wponion._.isUndefined($href['container-id'])) {
            var $lookup = 'div#wponion-tab-' + $href['container-id'];

            if (false === window.wponion._.isUndefined($href['sub-container-id'])) {
              $lookup = $lookup + '-' + $href['sub-container-id'];
            }

            $lookup = jQuery($lookup);

            if ($lookup.length === 1) {
              var $parent = _this2.element.parent();

              $parent.find('input[name="container-id"]').val($href['container-id']);
              $parent.find('input[name="sub-container-id"]').val($href['sub-container-id']);

              _this2.element.find('div.wponion-container-wraps').addClass('hidden');

              $lookup.removeClass('hidden');

              _this2.element.find('.wponion-menu .active').removeClass('active');

              $elem.addClass('active');
              $elem.parent().parent().parent().find('> a').addClass('active');
            } else if (false === $elem.hasClass('disabled')) {
              window.location.href = $elem.attr('href');
            }
          } else if (false === $elem.hasClass('disabled')) {
            window.location.href = $elem.attr('href');
          }
        }
      });
    }
  }], [{
    key: "arg",
    value: function arg($element) {
      var $option_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var $default = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var $jsid = window.wpo_core.jsid($element);
      var $windarg = window.wpo_core.windowArgs('wponion_module_args', {});

      if (!window.wponion._.isUndefined($jsid) && !window.wponion._.isUndefined($windarg[$jsid]) && window.wponion._.isObject($windarg[$jsid])) {
        if (!window.wponion._.isEmpty($option_key) && !window.wponion._.isUndefined($windarg[$jsid][$option_key])) {
          return $windarg[$jsid][$option_key];
        } else if (false === $option_key) {
          return $windarg[$jsid];
        }
      }

      return $default;
    }
    /**
     * Validates If give module element has module args.
     * @param $elem
     * @return {*}
     */

  }, {
    key: "has_args",
    value: function has_args($elem) {
      var $id = window.wpo_core.jsid($elem),
          $args = window.wpo_core.windowArgs('wponion_module_args', {});
      return false === window.wponion._.isUndefined($id) && false === window.wponion._.isUndefined($args[$id]);
    }
    /**
     * Validates if given html element is a wponion module instance.
     * @param $elem
     * @return {boolean}
     */

  }, {
    key: "is_valid",
    value: function is_valid($elem) {
      $elem = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_1__["to_jquery"])($elem);
      return !!($elem.hasClass('wponion-framework') && WPOnion_Module_Base.has_args($elem));
    }
  }]);

  return WPOnion_Module_Base;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/class/theme-base.js":
/*!*****************************************!*\
  !*** ./src/js/core/class/theme-base.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPOnion_Theme_Base; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/js/core/class/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WPOnion_Theme_Base =
/*#__PURE__*/
function (_WPOnion_Base) {
  _inherits(WPOnion_Theme_Base, _WPOnion_Base);

  /**
   * @param $selector
   * @param $module
   * @param $unique
   * @param $theme
   */
  function WPOnion_Theme_Base($selector) {
    var _this;

    var $module = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $unique = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var $theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, WPOnion_Theme_Base);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WPOnion_Theme_Base).call(this, $selector, {
      module: $module,
      unique: $unique,
      theme: $theme
    }));

    _this.init();

    return _this;
  }

  _createClass(WPOnion_Theme_Base, [{
    key: "init",
    value: function init() {}
    /**
     * Returns Unique ID
     * @return {boolean|string}
     */

  }, {
    key: "is_search_matched",

    /**
     * @param $title
     * @param $search
     * @returns {*}
     */
    value: function is_search_matched($title, $search) {
      return $title.text().match(new RegExp('.*?' + $search + '.*?', 'i'));
    }
  }, {
    key: "unique",
    get: function get() {
      return this.get_arg('unique', false);
    }
    /**
     * Returns Module
     * @return {boolean|string}
     */

  }, {
    key: "module",
    get: function get() {
      return this.get_arg('module', false);
    }
    /**
     * Returns Theme Slug
     * @return {boolean|string}
     */

  }, {
    key: "theme",
    get: function get() {
      return this.get_arg('theme', false);
    }
  }]);

  return WPOnion_Theme_Base;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields.js":
/*!*******************************!*\
  !*** ./src/js/core/fields.js ***!
  \*******************************/
/*! exports provided: wponion_register_fields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wponion_register_fields", function() { return wponion_register_fields; });
/* harmony import */ var _fields_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields/accordion */ "./src/js/core/fields/accordion.js");
/* harmony import */ var _fields_button_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/button_set */ "./src/js/core/fields/button_set.js");
/* harmony import */ var _fields_checkbox_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/checkbox_radio */ "./src/js/core/fields/checkbox_radio.js");
/* harmony import */ var _fields_common_chosen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/common/chosen */ "./src/js/core/fields/common/chosen.js");
/* harmony import */ var _fields_clone_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields/clone_element */ "./src/js/core/fields/clone_element.js");
/* harmony import */ var _fields_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields/code_editor */ "./src/js/core/fields/code_editor.js");
/* harmony import */ var _fields_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields/color_picker */ "./src/js/core/fields/color_picker.js");
/* harmony import */ var _fields_date_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields/date_picker */ "./src/js/core/fields/date_picker.js");
/* harmony import */ var _fields_faq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields/faq */ "./src/js/core/fields/faq.js");
/* harmony import */ var _fields_fieldset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fields/fieldset */ "./src/js/core/fields/fieldset.js");
/* harmony import */ var _fields_font_selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields/font_selector */ "./src/js/core/fields/font_selector.js");
/* harmony import */ var _fields_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/gallery */ "./src/js/core/fields/gallery.js");
/* harmony import */ var _fields_icon_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fields/icon_picker */ "./src/js/core/fields/icon_picker.js");
/* harmony import */ var _fields_image_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fields/image_select */ "./src/js/core/fields/image_select.js");
/* harmony import */ var _fields_image_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fields/image_upload */ "./src/js/core/fields/image_upload.js");
/* harmony import */ var _fields_import_export__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fields/import_export */ "./src/js/core/fields/import_export.js");
/* harmony import */ var _fields_common_inputmask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fields/common/inputmask */ "./src/js/core/fields/common/inputmask.js");
/* harmony import */ var _fields_tab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fields/tab */ "./src/js/core/fields/tab.js");
/* harmony import */ var _fields_keyvalue_pair__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fields/keyvalue_pair */ "./src/js/core/fields/keyvalue_pair.js");
/* harmony import */ var _fields_oembed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fields/oembed */ "./src/js/core/fields/oembed.js");
/* harmony import */ var _fields_options_object__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fields/options_object */ "./src/js/core/fields/options_object.js");
/* harmony import */ var _fields_range_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fields/range-slider */ "./src/js/core/fields/range-slider.js");
/* harmony import */ var _fields_common_select2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fields/common/select2 */ "./src/js/core/fields/common/select2.js");
/* harmony import */ var _fields_common_selectize__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fields/common/selectize */ "./src/js/core/fields/common/selectize.js");
/* harmony import */ var _fields_sorter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fields/sorter */ "./src/js/core/fields/sorter.js");
/* harmony import */ var _fields_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fields/spinner */ "./src/js/core/fields/spinner.js");
/* harmony import */ var _fields_time_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fields/time-picker */ "./src/js/core/fields/time-picker.js");
/* harmony import */ var _fields_typography__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fields/typography */ "./src/js/core/fields/typography.js");
/* harmony import */ var _fields_upload__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./fields/upload */ "./src/js/core/fields/upload.js");
/* harmony import */ var _fields_wp_links__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fields/wp_links */ "./src/js/core/fields/wp_links.js");
/* harmony import */ var _fields_common_image_popup__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./fields/common/image_popup */ "./src/js/core/fields/common/image_popup.js");
/* harmony import */ var _fields_common_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./fields/common/tooltip */ "./src/js/core/fields/common/tooltip.js");
/* harmony import */ var _fields_group__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fields/group */ "./src/js/core/fields/group.js");
/* harmony import */ var _fields_common_global_notice__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./fields/common/global-notice */ "./src/js/core/fields/common/global-notice.js");
/* harmony import */ var _fields_modal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./fields/modal */ "./src/js/core/fields/modal.js");



































function wponion_register_fields() {
  /**
   * Global Fields.
   */
  window.wponion_register_field('chosen', _fields_common_chosen__WEBPACK_IMPORTED_MODULE_3__["default"]);
  window.wponion_register_field('select2', _fields_common_select2__WEBPACK_IMPORTED_MODULE_22__["default"]);
  window.wponion_register_field('selectize', _fields_common_selectize__WEBPACK_IMPORTED_MODULE_23__["default"]);
  window.wponion_register_field('inputmask', _fields_common_inputmask__WEBPACK_IMPORTED_MODULE_16__["default"]);
  window.wponion_register_field('image_popup', _fields_common_image_popup__WEBPACK_IMPORTED_MODULE_30__["default"]);
  window.wponion_register_field('tooltip', _fields_common_tooltip__WEBPACK_IMPORTED_MODULE_31__["default"]);
  window.wponion_register_field('global_notice', _fields_common_global_notice__WEBPACK_IMPORTED_MODULE_33__["default"]);
  /**
   * Locked Fileds under div.wponion-framework
   */

  window.wponion_register_field('accordion', _fields_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]);
  window.wponion_register_field('button_set', _fields_button_set__WEBPACK_IMPORTED_MODULE_1__["default"]);
  window.wponion_register_field('checkbox', _fields_checkbox_radio__WEBPACK_IMPORTED_MODULE_2__["default"]);
  window.wponion_register_field('radio', _fields_checkbox_radio__WEBPACK_IMPORTED_MODULE_2__["default"]);
  window.wponion_register_field('clone', _fields_clone_element__WEBPACK_IMPORTED_MODULE_4__["default"]);
  window.wponion_register_field('code_editor', _fields_code_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
  window.wponion_register_field('color_picker', _fields_color_picker__WEBPACK_IMPORTED_MODULE_6__["default"]);
  window.wponion_register_field('date_picker', _fields_date_picker__WEBPACK_IMPORTED_MODULE_7__["default"]);
  window.wponion_register_field('faq', _fields_faq__WEBPACK_IMPORTED_MODULE_8__["default"]);
  window.wponion_register_field('fieldset', _fields_fieldset__WEBPACK_IMPORTED_MODULE_9__["default"]);
  window.wponion_register_field('font_picker', _fields_font_selector__WEBPACK_IMPORTED_MODULE_10__["default"]);
  window.wponion_register_field('gallery', _fields_gallery__WEBPACK_IMPORTED_MODULE_11__["default"]);
  window.wponion_register_field('icon_picker', _fields_icon_picker__WEBPACK_IMPORTED_MODULE_12__["default"]);
  window.wponion_register_field('image_select', _fields_image_select__WEBPACK_IMPORTED_MODULE_13__["default"]);
  window.wponion_register_field('image', _fields_image_upload__WEBPACK_IMPORTED_MODULE_14__["default"]);
  window.wponion_register_field('import_export', _fields_import_export__WEBPACK_IMPORTED_MODULE_15__["default"]);
  window.wponion_register_field('tab', _fields_tab__WEBPACK_IMPORTED_MODULE_17__["default"]);
  window.wponion_register_field('key_value', _fields_keyvalue_pair__WEBPACK_IMPORTED_MODULE_18__["default"]);
  window.wponion_register_field('oembed', _fields_oembed__WEBPACK_IMPORTED_MODULE_19__["default"]);
  window.wponion_register_field('options_object', _fields_options_object__WEBPACK_IMPORTED_MODULE_20__["default"]);
  window.wponion_register_field('range_slider', _fields_range_slider__WEBPACK_IMPORTED_MODULE_21__["default"]);
  window.wponion_register_field('sorter', _fields_sorter__WEBPACK_IMPORTED_MODULE_24__["default"]);
  window.wponion_register_field('spinner', _fields_spinner__WEBPACK_IMPORTED_MODULE_25__["default"]);
  window.wponion_register_field('time_picker', _fields_time_picker__WEBPACK_IMPORTED_MODULE_26__["default"]);
  window.wponion_register_field('typography', _fields_typography__WEBPACK_IMPORTED_MODULE_27__["default"]);
  window.wponion_register_field('upload', _fields_upload__WEBPACK_IMPORTED_MODULE_28__["default"]);
  window.wponion_register_field('wp_link', _fields_wp_links__WEBPACK_IMPORTED_MODULE_29__["default"]);
  window.wponion_register_field('group', _fields_group__WEBPACK_IMPORTED_MODULE_32__["default"]);
  window.wponion_register_field('modal', _fields_modal__WEBPACK_IMPORTED_MODULE_34__["default"]);
}

/***/ }),

/***/ "./src/js/core/fields/accordion.js":
/*!*****************************************!*\
  !*** ./src/js/core/fields/accordion.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      if (!window.wponion_is_library_exists('accordion', 'jquery')) {
        return;
      }

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
    /**
     * Handles Javascript Error Placement.
     * @param err
     */

  }, {
    key: "js_error",
    value: function js_error(err) {
      var $elem = window.wpo_core.IDtoElement(err.element, this.element);

      if ($elem) {
        err.error.appendTo($elem.find('> .row > .wponion-fieldset'));
      }
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/button_set.js":
/*!******************************************!*\
  !*** ./src/js/core/fields/button_set.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      this.remove_active();
      this.add_active();
      this.element.find(':input').on('click', function (e) {
        _this.remove_active();

        _this.add_active();

        _this.element.trigger('wponion_field_updated');
      });
    }
    /**
     * Remove Active Class.
     */

  }, {
    key: "remove_active",
    value: function remove_active() {
      var _this2 = this;

      this.element.find(':input').each(function (i, e) {
        var $e = jQuery(e);

        if (!$e.is(':checked')) {
          $e.parent().parent().removeClass(_this2.option('active')).addClass(_this2.option('inactive'));
        }
      });
    }
    /**
     * Adds Active Class.
     */

  }, {
    key: "add_active",
    value: function add_active() {
      var _this3 = this;

      this.element.find(':input').each(function (i, e) {
        var $e = jQuery(e);

        if ($e.is(':checked')) {
          $e.parent().parent().addClass(_this3.option('active')).removeClass(_this3.option('inactive'));
        }
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/checkbox_radio.js":
/*!**********************************************!*\
  !*** ./src/js/core/fields/checkbox_radio.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      if (this.element.find('.wponion-custom-value-input').length > 0) {
        var $custom_input = this.element.find('.wponion-custom-value-input'),
            $radios = this.element.find('input[type=radio]'),
            $checkbox = this.element.find('input[type=checkbox]');
        $custom_input.moveAttr('name', 'data-name');
        $radios.each(function (i, e) {
          var $target = jQuery(e);

          if ($target.is(':checked')) {
            if ($target.parent().find('.wponion-custom-value-input').length > 0) {
              $custom_input.moveAttr('name', 'data-name');
              $target.parent().find('.wponion-custom-value-input').moveAttr('data-name', 'name');
            }
          }
        });
        $radios.on('click', function (e) {
          var $target = jQuery(e.currentTarget);
          $custom_input.moveAttr('name', 'data-name');

          if ($target.parent().find('.wponion-custom-value-input').length > 0) {
            $target.parent().find('.wponion-custom-value-input').moveAttr('data-name', 'name');
          }
        });
        $checkbox.each(function (i, e) {
          var $target = jQuery(e);

          if ($target.parent().find('.wponion-custom-value-input').length > 0) {
            if ($target.is(':checked')) {
              $target.moveAttr('name', 'data-name');
              $target.parent().find('.wponion-custom-value-input').moveAttr('data-name', 'name');
            } else {
              $target.moveAttr('name', 'data-name');
              $target.parent().find('.wponion-custom-value-input').moveAttr('name', 'data-name');
            }
          }
        });
        $checkbox.on('click', function (e) {
          var $target = jQuery(e.currentTarget);

          if ($target.parent().find('.wponion-custom-value-input').length > 0) {
            if ($target.is(':checked')) {
              $target.moveAttr('name', 'data-name');
              $target.parent().find('.wponion-custom-value-input').moveAttr('data-name', 'name');
            } else {
              $target.parent().find('.wponion-custom-value-input').moveAttr('name', 'data-name');
            }
          }
        });
      }
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/clone_element.js":
/*!*********************************************!*\
  !*** ./src/js/core/fields/clone_element.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      var $arg = this.handle_args(this.option('clone', {}), 'cloner'),
          $add_btn = this.element.find('button[data-wponion-clone-add]'),
          //$remove_btn = $clone_wrap.find( 'button[data-wponion-clone-remove]' ),
      //$is_toast   = ( $arg.toast_error !== undefined ) ? $arg.toast_error : true,
      $sort = $arg.sort !== false ? {
        items: '.wponion-field-clone',
        handle: '.wponion-field-clone-sorter',
        placeholder: 'wponion-cloner-placeholder',
        start: function start(event, ui) {
          return ui.item.css('background-color', '#eeee');
        },
        stop: function stop(event, ui) {
          _this.element.trigger('change');

          ui.item.removeAttr('style');
        }
      } : false;
      this.element.find('div.wponion-clone-wrap').WPOnionCloner({
        add_btn: $add_btn,
        limit: $arg.limit !== undefined ? $arg.limit : false,
        clone_elem: '.wponion-field-clone',
        remove_btn: '.wponion-clone-action > .wponion-remove',
        template: this.option('clone_template'),
        templateAfterRender: function templateAfterRender($e) {
          _this.element.trigger('change');

          window.wponion_field_reload_all($e.find('> div.wponion-field-clone:last-child'));
        },
        onRemoveAfter: function onRemoveAfter() {
          return _this.element.trigger('change');
        },
        sortable: $sort,
        onLimitReached: function onLimitReached() {
          if ($add_btn.parent().find('div.alert').length === 0) {
            $add_btn.parent().prepend(jQuery($arg.error_msg).hide());
            $add_btn.parent().find('div.alert').slideDown();
            window.wponion_notice($add_btn.parent().find('div.alert, div.notice'));
          }
        },
        show_animation: $arg.animations.show,
        hide_animation: $arg.animations.hide
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/code_editor.js":
/*!*******************************************!*\
  !*** ./src/js/core/fields/code_editor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      if (!window.wponion_is_library_exists('CodeMirror')) {
        return;
      }

      var $textarea = this.element.find('textarea'),
          cdnURL = this.option('cdn_url'),
          data_editor = this.handle_args(this.parse_args(this.option('settings', {}), {
        theme: 'default'
      }), 'Code Editor'),
          $link_id = 'wpo-codemirror-' + data_editor.theme + '-css',
          code_editor = window.CodeMirror.fromTextArea($textarea[0], data_editor);

      if (data_editor.theme !== 'default' && jQuery(document).find('link#' + $link_id).length === 0) {
        var $cssLink = jQuery('<link>');
        jQuery('#wpo-codemirror-css').after($cssLink);
        $cssLink.attr({
          rel: 'stylesheet',
          id: 'wpo-codemirror-' + data_editor.theme + '-css',
          href: cdnURL + '/theme/' + data_editor.theme + '.min.css',
          type: 'text/css',
          media: 'all'
        });
      }

      window.CodeMirror.modeURL = cdnURL + '/mode/%N/%N.min.js';
      window.CodeMirror.autoLoadMode(code_editor, data_editor.mode);
      code_editor.on('change', function () {
        return $textarea.val(code_editor.getValue()).trigger('change');
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/color_picker.js":
/*!********************************************!*\
  !*** ./src/js/core/fields/color_picker.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      if (this.element.find('input.wponion-color-picker-element').length > 0) {
        var $save_color = function $save_color($color, $instance) {
          var $value = $color.toHEXA().toString();

          if (!window.wponion._.isUndefined($instance._representation)) {
            switch ($instance._representation) {
              case 'HEXA':
                $value = $color.toHEXA().toString();
                break;

              case 'RGBA':
                $value = $color.toRGBA().toString();
                break;

              case 'HSLA':
                $value = $color.toHSLA().toString();
                break;

              case 'HSVA':
                $value = $color.toHSVA().toString();
                break;

              case 'CMYK':
                $value = $color.toCMYK().toString();
                break;
            }
          }

          _this.element.find('input.wponion-color-picker-element').val($value);
        },
            $args = this.parse_args(this.option('settings'), {
          theme: 'classic',
          comparison: false,
          components: {
            preview: true,
            opacity: true,
            hue: true,
            interaction: {
              hex: true,
              rgba: true,
              hsla: true,
              hsva: true,
              cmyk: true,
              input: false,
              clear: false,
              save: false
            }
          }
        });

        $args.el = this.element.find('div.wponion-color-picker-element')[0];
        $args.appClass = 'wpo-color-picker';
        var $instance = new Pickr(this.handle_args($args, 'colorpicker'));
        $instance.on('save', $save_color);
        $instance.on('change', $save_color);
        $instance.on('swatchselect', $save_color);
        $instance.on('init', function () {
          if (!window.wponion._.isUndefined($args.inline) && true === $args.inline) {
            _this.element.find('.pickr').hide();
          }
        });
      }
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/common/chosen.js":
/*!*********************************************!*\
  !*** ./src/js/core/fields/common/chosen.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      if (window.wponion_is_library_exists('chosen', 'jquery')) {
        this.element.chosen(this.handle_args(this.option('chosen', {}), 'chosen'));
      }
    }
  }, {
    key: "maybe_add_inited_class",
    value: function maybe_add_inited_class() {}
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/common/global-notice.js":
/*!****************************************************!*\
  !*** ./src/js/core/fields/common/global-notice.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/field-base */ "./src/js/core/class/field-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field_Base) {
  _inherits(_default, _WPOnion_Field_Base);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "field_base_init",

    /**
     * Inits Field.
     */
    value: function field_base_init() {
      var _this2 = this;

      if (this.element.find('.wponion-remove').length > 0) {
        this.element.each(function () {
          var _this = this;

          var $el = jQuery(this);
          $el.find('.wponion-remove').tippy({
            appendTo: function appendTo() {
              return jQuery(_this)[0];
            }
          });
          $el.find('.wponion-remove').on('click', function () {
            return $el.slideUp('slow', function () {
              return $el.remove();
            });
          });
        });
      }

      var $auto = this.element.attr('data-autoclose');

      if ($auto) {
        $auto = parseInt($auto);
        var $left = $auto / 1000;

        if (this.element.find('.wpo-counter').length === 1) {
          var $runner = setInterval(function () {
            _this2.element.find('.wpo-counter').html($left);

            $left -= 1;

            if ($left < 0) {
              clearInterval($runner);

              _this2.element.find('.wpo-counter').html('0');
            }
          }, 900);
        }

        setTimeout(function () {
          return _this2.element.slideUp('slow', function () {
            return _this2.element.remove();
          });
        }, $auto);
      }
    }
  }, {
    key: "maybe_add_inited_class",
    value: function maybe_add_inited_class() {}
  }]);

  return _default;
}(_class_field_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/common/image_popup.js":
/*!**************************************************!*\
  !*** ./src/js/core/fields/common/image_popup.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Image POPUP View Class.
 */

var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Handles Image POPUP View.
     */
    value: function init() {
      var _this = this;

      this.element.on('click', function () {
        var $image = window.wponion._.isUndefined(_this.element.attr('data-fullsize')) ? _this.element.attr('src') : _this.element.attr('data-fullsize');
        swal.fire({
          imageUrl: $image,
          animation: false,
          background: 'transparent',
          showConfirmButton: false,
          backdrop: "rgba(0, 0, 0, 0.44)"
        });
      });
    }
  }, {
    key: "maybe_add_inited_class",
    value: function maybe_add_inited_class() {}
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/common/inputmask.js":
/*!************************************************!*\
  !*** ./src/js/core/fields/common/inputmask.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      if (this.element.length > 0) {
        var $settings = this.option('inputmask');

        if ($settings) {
          this.element.inputmask(this.handle_args($settings, 'inputmask'));
        }
      }
    }
  }, {
    key: "maybe_add_inited_class",
    value: function maybe_add_inited_class() {}
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/common/select2.js":
/*!**********************************************!*\
  !*** ./src/js/core/fields/common/select2.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      var $arg = this.option('select2', {});

      if (false === window.wponion._.isUndefined(window.swal) && window.swal.isVisible() || jQuery('.wponion-wp-modal').length > 0) {
        $arg.dropdownParent = jQuery('.wponion-wp-modal');
      }

      if (window.wponion._.isUndefined($arg.dropdownParent) || false === window.wponion._.isUndefined($arg.dropdownParent) && $arg.dropdownParent.length === 0) {
        $arg.dropdownParent = jQuery('body');
      }

      if (window.wponion._.isObject(this.option('ajax'))) {
        $arg.ajax = {
          processResults: function processResults(data) {
            var terms = [];

            if (data.results) {
              jQuery.each(data.results, function (id, text) {
                terms.push({
                  id: id,
                  text: text
                });
              });
            }

            return {
              results: terms
            };
          },
          data: function data(params) {
            return {
              q: params.term
            };
          },
          transport: function transport(params, success, failure) {
            return _this.ajax('wp-query-data', {
              data: _this.parse_args(params.data, _this.option('ajax')),
              success: success,
              error: failure
            }).send();
          }
        };
      }

      this.element.select2(this.handle_args($arg, 'select2'));
      return this;
    }
  }, {
    key: "maybe_add_inited_class",
    value: function maybe_add_inited_class() {}
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/common/selectize.js":
/*!************************************************!*\
  !*** ./src/js/core/fields/common/selectize.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      var $arg = this.option('selectize', {});

      if (!window.wponion._.isUndefined($arg.theme)) {
        this.element.parent().addClass($arg.theme);
      } else {
        this.element.parent().addClass('selectize-default');
      }

      if (window.wponion._.isObject(this.option('ajax'))) {
        $arg.load = function (query, callback) {
          if (query === undefined) {
            return callback !== undefined ? callback() : false;
          }

          _this.ajax('wp-query-data', {
            dataType: 'json',
            data: _this.parse_args({
              s: query
            }, _this.option('ajax')),
            error: function error() {
              return callback();
            },
            success: function success(res) {
              var terms = [];
              var ins = _this.element[0].selectize;

              if (res.results) {
                jQuery.each(res.results, function (id, text) {
                  var data = {};
                  data[ins.settings.valueField] = id;
                  data[ins.settings.labelField] = text;
                  terms.push(data);
                });
              }

              callback(terms);
            }
          }).send();
        };
      }

      this.element.removeClass('form-control').selectize(this.handle_args($arg, 'selectize'));
      return this;
    }
  }, {
    key: "maybe_add_inited_class",
    value: function maybe_add_inited_class() {}
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/common/tooltip.js":
/*!**********************************************!*\
  !*** ./src/js/core/fields/common/tooltip.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * WPOnion Field ToolTip
 */

var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default($selector) {
    var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, $selector, $args));
  }

  _createClass(_default, [{
    key: "tooltip_arg",
    value: function tooltip_arg() {
      var $tooltipkey = this.element.attr('data-wponion-tooltip-id');
      var $jsfieldid = this.element.attr('data-field-jsid');
      var $tooltips = {
        'wponion-help': this.option('wponion-help', false),
        'wrap_tooltip': this.option('wrap_tooltip', false)
      };

      if (false === window.wponion._.isUndefined($tooltipkey)) {
        $tooltips[$tooltipkey] = this.option($tooltipkey, false);
      }

      if (false === window.wponion._.isUndefined($jsfieldid)) {
        $tooltips[$jsfieldid + 'tooltip'] = this.option($jsfieldid + 'tooltip', false);
        $tooltips[$jsfieldid] = this.option($jsfieldid, false);
      }

      for (var $k in $tooltips) {
        if ($tooltips.hasOwnProperty($k) && window.wponion._.isObject($tooltips[$k])) {
          this.tooltipkey = $k;
          return $tooltips[$k];
        }
      }

      return {};
    }
    /**
     * Handle Each And Every Single Field ToolTip.
     */

  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.tooltipkey = null;
      var $fid = this.element.attr('data-field-jsid');
      var $arg = true === window.wpo_core.valid_json($fid) ? JSON.parse($fid) : this.tooltip_arg();
      var state = {
        isFetching: false,
        canFetch: true
      };

      if (false === $arg) {
        var $classToCheck = ['data-tippy', 'data-tippy-args', 'tippy-args'];
        var $found = false;

        for (var $k in $classToCheck) {
          if ($classToCheck.hasOwnProperty($k)) {
            var $attr = this.element.attr($classToCheck[$k]);

            if ($attr) {
              if (window.wpo_core.valid_json($attr)) {
                $arg = JSON.parse($attr);
                $found = $classToCheck[$k];
                break;
              } else if (false !== this.option($attr, false)) {
                $arg = this.option($attr, false);
                $found = $classToCheck[$k];
                break;
              }
            }
          }
        }
      }

      if ($arg) {
        $arg.ignoreAttributes = false;

        if ($arg.image !== undefined && $arg.image !== false) {
          var $image = $arg.image;
          $arg.interactive = true;
          $arg.content = 'Loading...'; //$arg.html           = '#wpotpimg';

          $arg.updateDuration = 2000;

          $arg.onShow =
          /*#__PURE__*/
          function () {
            var _ref = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee(tip) {
              var response, blob, url;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(state.isFetching || !state.canFetch)) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      state.isFetching = true;
                      state.canFetch = false;
                      _context.prev = 4;
                      _context.next = 7;
                      return fetch($image);

                    case 7:
                      response = _context.sent;
                      _context.next = 10;
                      return response.blob();

                    case 10:
                      blob = _context.sent;
                      url = URL.createObjectURL(blob);

                      if (tip.state.isVisible) {
                        tip.setContent('<div style="min-width:25px;min-height:25px;"><img style="display: inline-block; width:100%; height:100%;" src="' + url + '"/></div>');
                      }

                      _context.next = 18;
                      break;

                    case 15:
                      _context.prev = 15;
                      _context.t0 = _context["catch"](4);
                      tip.setContent("Fetch failed. ".concat(_context.t0));

                    case 18:
                      _context.prev = 18;
                      state.isFetching = false;
                      return _context.finish(18);

                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[4, 15, 18, 21]]);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }();

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

      $arg.boundary = 'window';

      if (false === window.wponion._.isUndefined($arg.followCursor) && true === $arg.followCursor && window.wponion._.isUndefined($arg.appendTo)) {
        $arg.appendTo = function () {
          return document.body;
        };
      } else if (window.wponion._.isUndefined($arg.appendTo)) {
        $arg.appendTo = function () {
          return document.body;
        };

        if (jQuery('div.wponion-element[data-wponion-jsid=' + this.id() + ']').length > 0) {
          $arg.appendTo = function () {
            return jQuery('div.wponion-element[data-wponion-jsid=' + _this.id() + ']')[0];
          };
        }
      }

      delete $arg.image;
      delete $arg.icon;
      this.element.tippy(this.handle_args($arg, this.tooltipkey));
    }
  }, {
    key: "maybe_add_inited_class",
    value: function maybe_add_inited_class() {}
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/date_picker.js":
/*!*******************************************!*\
  !*** ./src/js/core/fields/date_picker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "maybe_js_validate_elem",

    /**
     * Adds Rule To Each and every input to validate JS Lib.
     * @param $args
     * @param $elem
     */
    value: function maybe_js_validate_elem($args, $elem) {
      $elem.find('[data-wponion-jsid]:input').each(function () {
        jQuery(this).rules('add', $args);
      });
    }
    /**
     * Inits Field.
     */

  }, {
    key: "init",
    value: function init() {
      if (!window.wponion_is_library_exists('flatpickr')) {
        return;
      }

      var $this = this,
          $elem = $this.element,
          $settings = this.option('settings'),
          $dteID = "div#".concat(this.id(), "datepicker"),
          $view;

      if (false === window.wponion._.isUndefined($settings.theme)) {
        $view = $settings.theme;
        delete $settings.theme;
      } else {
        $view = 'default';
      }

      if (jQuery($dteID).length === 0) {
        jQuery('body').append(jQuery('<div class="wponion-datepicker-' + $view + '" id="' + this.id() + 'datepicker"></div>'));
      }

      if ($elem.hasClass('wponion-datepicker-range')) {
        $settings.appendTo = jQuery($dteID)[0];

        if ($settings.plugins === undefined) {
          $settings.plugins = [];
        }

        $settings.plugins.push(new window.rangePlugin({
          input: $elem.find('input[data-wponion-datepicker-to-date]')[0]
        }));
        $elem.find('input[data-wponion-datepicker-from-date]').flatpickr(this.handle_args($settings, 'date_picker'));
      } else {
        $settings.appendTo = jQuery('div#' + this.id() + 'datepicker')[0];
        $elem.find('input').flatpickr(this.handle_args($settings, 'date_picker'));
      }
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/faq.js":
/*!***********************************!*\
  !*** ./src/js/core/fields/faq.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      if (this.element.find('.faq .faq-title').hasClass('active')) {
        this.element.find('.faq .faq-title.active').closest('.faq').find('.faq-inner').show();
      }

      this.element.find('.faq .faq-title').click(function () {
        if (jQuery(this).hasClass('active')) {
          jQuery(this).removeClass('active').closest('.faq').find('.faq-content').slideUp(200);
        } else {
          jQuery(this).addClass('active').closest('.faq').find('.faq-content').slideDown(200);
        }
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/fieldset.js":
/*!****************************************!*\
  !*** ./src/js/core/fields/fieldset.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/font_selector.js":
/*!*********************************************!*\
  !*** ./src/js/core/fields/font_selector.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "build_options",

    /**
     * Creats HTML Option Tag Using Array.
     * @param data
     * @returns {string}
     */
    value: function build_options(data) {
      var $return = '';

      for (var $_d in data) {
        if (false === window.wponion._.isUndefined(data[$_d])) {
          $return += "<option value=\"".concat($_d, "\">").concat(data[$_d], "</option>");
        }
      }

      return $return;
    }
    /**
     * Inits Field.
     */

  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.element.find('select.wponion-font-selector').on('change', function (e) {
        var $val = jQuery(e.currentTarget).val(),
            $html = null;

        if (false === window.wponion._.isUndefined(_this.websafe.fonts[$val])) {
          $html = _this.build_options(_this.websafe.variants);
        } else if (false === window.wponion._.isUndefined(_this.google_fonts[$val])) {
          $html = _this.build_options(_this.google_fonts[$val]);
        }

        var $variant = _this.element.find('select.wponion-variant-selector').html($html);

        if ($variant.hasClass('chosen')) {
          $variant.trigger('chosen:updated');
        } else if ($variant.hasClass('select2')) {
          $variant.trigger('change');
        }
      });
    }
  }, {
    key: "websafe",

    /**
     * Returns Websafe Font Data.
     * @returns {*}
     */
    get: function get() {
      return window.wpo_core.windowArgs('wponion_websafe_fonts');
    }
    /**
     * Returns Google Font Data.
     * @returns {*}
     */

  }, {
    key: "google_fonts",
    get: function get() {
      return window.wpo_core.windowArgs('wponion_gfonts');
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/gallery.js":
/*!***************************************!*\
  !*** ./src/js/core/fields/gallery.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var wp_media_frame,
          $this = this,
          $html_temp = $this.option('html_template'),
          $input = this.element.find('input#image_id'),
          $preview = this.element.find('.wponion-image-preview'),
          $add = this.element.find('button[data-wponion-gallery-add]'),
          $edit = this.element.find('button[data-wponion-gallery-edit]'),
          $clear = this.element.find('button[data-wponion-gallery-clear]'),
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
            library: {
              type: 'image'
            },
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
            $this.init_field('.wponion-help', 'tooltip');
            $this.init_field('img', 'image_popup');
            return item.id;
          });
          var $e;

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
      this.init_field($preview.find('img'), 'image_popup');
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

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/group.js":
/*!*************************************!*\
  !*** ./src/js/core/fields/group.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      var $this = this,
          $add = this.element.find('> .row > .wponion-fieldset > button[data-wponion-group-add]'),
          $group_wrap = this.element.find('> .row > .wponion-fieldset > .wponion-group-wrap');
      this.init_field($group_wrap, 'accordion');
      $group_wrap.find('> .wponion-accordion-wrap').each(function () {
        window.wponion_dependency(jQuery(this), {
          nestable: true,
          parent: jQuery(this)
        });
      });
      this.update_groups_title();
      this.bind_events_for_title();
      this.element.find('.wponion-group-remove').tippy({
        appendTo: function appendTo() {
          return _this.get_field_parent_by_id(_this.element)[0];
        }
      });
      this.element.on('click', '.wponion-group-remove', function () {
        jQuery(this).parent().parent().find('> .wponion-accordion-content .row > .wponion-group-action > button').click();
        $this.update_groups_title();
        $this.element.trigger('change');
        $this.element.trigger('wponion_field_updated');
      });
      $group_wrap.WPOnionCloner({
        add_btn: $add,
        limit: parseInt(this.option('limit')),
        clone_elem: '> .wponion-fieldset > .wponion-accordion-wrap',
        remove_btn: '.wponion-group-action > button',
        template: this.option('group_template'),
        onRemove: function onRemove($elem) {
          $elem.parent().parent().parent().parent().slideUp(function () {
            jQuery(this).remove();
            $this.update_groups_title();
            $this.element.trigger('change');
            $this.element.trigger('wponion_field_updated');
          });
        },
        templateAfterRender: function templateAfterRender() {
          var $data = $group_wrap.find('> .wponion-accordion-wrap:last-child');
          $data.hide();

          _this.update_groups_title();

          _this.bind_events_for_title();

          _this.init_field($group_wrap, 'accordion');

          window.wponion_field_reload_all($data);
          window.wponion_dependency($group_wrap.find('> .wponion-accordion-wrap:last-child'), {
            nestable: true
          });
          $data.find('.wponion-group-remove').tippy({
            appendTo: function appendTo() {
              return _this.get_field_parent_by_id(_this.element)[0];
            }
          });
          $data.slideDown();

          _this.element.trigger('change');

          _this.element.trigger('wponion_field_updated');
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

            _this.update_groups_title();

            _this.element.trigger('change');

            _this.element.trigger('wponion_field_updated');
          }
        },
        onLimitReached: function onLimitReached() {
          if ($add.parent().find('div.alert').length === 0) {
            $add.before(jQuery(_this.option('error_msg', '')).hide());
            $add.parent().find('div.alert').slideDown();
            window.wponion_notice($add.parent().find('div.alert, div.notice'));
          }
        }
      });
    }
    /**
     * Binds Dynamic Group Title Events.
     * @param $elem
     */

  }, {
    key: "bind_events_for_title",
    value: function bind_events_for_title() {
      var _this2 = this;

      var $elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      $elem = false === $elem ? this.element.find('> .row > .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap') : $elem;
      $elem.each(function (i, e) {
        var $data = jQuery(e),
            $mached = _this2.option('matched_heading_fields');

        for (var $key in $mached) {
          if ($mached.hasOwnProperty($key)) {
            var _$elem = $data.find(':input[data-depend-id="' + _this2.field_id() + '_' + $mached[$key] + '"]');

            if (_$elem.length > 0) {
              _$elem.on('change', function () {
                return _this2.update_groups_title();
              });
            }
          }
        }
      });
    }
    /**
     * Updates Group Title
     * @param $elem
     */

  }, {
    key: "update_groups_title",
    value: function update_groups_title() {
      var _this3 = this;

      var $elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var $limit = 1;
      $elem = false === $elem ? this.element.find('> .row > .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap') : $elem;
      $elem.each(function (i, e) {
        var $data = jQuery(e),
            $heading = _this3.option('heading'),
            $mached = _this3.option('matched_heading_fields');

        if (false !== _this3.option('heading_counter')) {
          $heading = window.wponion._.replace($heading, '[count]', $limit);
        }

        for (var $key in $mached) {
          if ($mached.hasOwnProperty($key)) {
            var _$elem2 = $data.find(':input[data-depend-id="' + _this3.field_id() + '_' + $mached[$key] + '"]');

            if (_$elem2.length > 0) {
              $heading = window.wponion._.replace($heading, $mached[$key], _$elem2.val());
            }
          }
        }

        if (window.wponion._.isEmpty($heading)) {
          $heading = window.wponion._.replace(_this3.option('default_heading'), '[count]', $limit);
        }

        $data.find('> .wponion-accordion-title span.heading').html($heading);
        $limit++;
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/icon_picker.js":
/*!*******************************************!*\
  !*** ./src/js/core/fields/icon_picker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/*global swal:true*/

var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      var $_this = this,
          $elem = $_this.element,
          $input = $elem.find('.wponion-icon-picker-input'),
          $remove_btn = $elem.find('button[data-wponion-iconpicker-remove]'),
          $add_btn = $elem.find('button[data-wponion-iconpicker-add]'),
          $preview = $elem.find('span.wponion-icon-preview'),
          $args = $_this.options();
      var $work = {
        //Stores POPUP Information.
        elems: null,
        //Stores POPUP Information.
        popup: null,
        //Stores POPUP Information.
        elm: null,
        //Creates A New Instance for ToolTip.
        init_tooltip: function init_tooltip() {
          if (_this.option('popup_tooltip') !== 'false') {
            var $tp = _typeof(_this.option('popup_tooltip')) === 'object' ? _this.option('popup_tooltip') : {};
            $tp.appendTo = $work.elm[0];
            $tp = window.wpo_core.js_func($tp);

            if ($work.elems.length > 0) {
              $work.elems.each(function () {
                var $ep = window.wponion._.cloneDeep($tp);

                jQuery(this).tippy($ep);
              });
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
          $work.elems = $work.elm.find('.wponion-icon-framework:visible span.wponion-icon-preview');
          var $height = $work.elm.find('.wponion-icon-picker-container-scroll').css('height');
          $work.elm.find('.wponion-icon-picker-container-scroll').css('height', $height);
          $work.select();
          $work.input();
          window.wponion_field_reload_all($elm.find('#swal2-content'));
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

            if ('' === $val) {
              $work.elm.find('.wponion-icon-framework:visible .wponion-icon-preview-wrap').show();
            } else {
              $work.elm.find('.wponion-icon-framework:visible .wponion-icon-preview-wrap').hide();
              $work.elm.find('.wponion-icon-framework:visible .wponion-icon-preview-wrap .wpo-icon-terms').each(function () {
                var $stauts = jQuery(this).text().match(new RegExp('.*?' + $val + '.*?', 'i'));

                if ($stauts) {
                  jQuery(this).parent().show();
                }
              });
            }
          });
        },

        /**
         * Handles Selectbox in popup.
         */
        select: function select() {
          $work.elm.find('div.wponion-icon-picker-model-header select').off('change').on('change', function () {
            var $val = jQuery(this).val(),
                $swal_content = jQuery($work.elm).find('#swal2-content');

            if ($swal_content.find('#' + $val).length > 0) {
              $swal_content.find('.wponion-icon-framework').hide();
              $swal_content.find('#' + $val).show();
            } else {
              $swal_content.block({
                message: null,
                overlayCSS: {
                  background: '#000',
                  opacity: 0.4
                }
              });
              $_this.ajax('icon_picker', {
                data: {
                  'wponion-icon-lib': $val,
                  first_load: 'no',
                  enabled: $args.enabled,
                  disabled: $args.disabled,
                  group_icons: $args.group_icons
                },
                success: function success($res) {
                  $swal_content.find('.wponion-icon-picker-container-scroll').append($res.html);
                  $swal_content.find('.wponion-icon-framework').hide();
                  $swal_content.find('#' + $val).show();
                  $swal_content.show();
                  $work.init($work.elm, $work.popup);
                },
                error: function error($res) {
                  jQuery($work.elm).find('.wponion-icon-picker-container-scroll').remove();
                  window.wponion_error_swal($res).fire();
                },
                always: function always() {
                  return $swal_content.unblock();
                }
              }).send();
            }
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


      $input.on('keyup blur change keypress', function (e) {
        var $val = jQuery(e.currentTarget).val();

        if ($val !== '') {
          $preview.html('<i class="' + $val + '"></i>').show();
          $remove_btn.show();
        } else {
          $preview.hide();
          $remove_btn.hide();
        }

        _this.element.trigger('wponion_field_updated');
      });
      /**
       * Handles Add Button Click Event.
       */

      $add_btn.on('click', function () {
        var $popup = swal.fire({
          title: $elem.find('.wponion-field-title h4').html(),
          animation: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          showCloseButton: true,
          width: '850px',
          customClass: 'wponion-icon-picker-model',
          onBeforeOpen: function onBeforeOpen($elem) {
            swal.enableLoading();

            _this.ajax('icon_picker', {
              data: {
                enabled: $args.enabled,
                disabled: $args.disabled,
                group_icons: $args.group_icons
              },
              success: function success($res) {
                var $popup_elem = jQuery($elem);
                $popup_elem.find('#swal2-content').append($res.html).show();
                $popup_elem.find('#swal2-content .wponion-icon-picker-container-scroll');
                $work.init($popup_elem, $popup);
              },
              error: function error($res) {
                return window.wponion_error_swal($res).fire({
                  animation: false
                });
              },
              always: function always() {
                return $popup.disableLoading();
              }
            }).send();
          }
        });
      });
      /**
       * Handles Remove Button Event.
       */

      $remove_btn.on('click', function () {
        $preview.hide();
        $remove_btn.hide();
        $input.val('').trigger('change');
      });
      return this;
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/image_select.js":
/*!********************************************!*\
  !*** ./src/js/core/fields/image_select.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init_image",
    value: function init_image($element) {
      var $parent = $element.parent().parent();

      if ($parent.hasClass('wponion-checkbox-radio-tooltip')) {
        $parent.addClass('wponion-field-tooltip');
        this.init_field($parent, 'tooltip');
      }
    }
  }, {
    key: "init",
    value: function init() {
      var $this = this;
      this.element.find('img').each(function () {
        if (jQuery(this)[0].complete) {
          $this.init_image(jQuery(this));
        } else {
          jQuery(this).on('load', function () {
            $this.init_image(jQuery(this));
          });
        }
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/image_upload.js":
/*!********************************************!*\
  !*** ./src/js/core/fields/image_upload.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
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
          library: {
            type: 'image'
          },
          title: $this.option('frame_title', 'Select Image')
        });
        $this.media_instance.on('select', function () {
          var attachment = $this.media_instance.state().get('selection').first().attributes,
              thumbnail = !window.wponion._.isUndefined(attachment.sizes.thumbnail.url) ? attachment.sizes.thumbnail.url : attachment.url;
          $preview.find('img').attr('src', thumbnail).attr('data-fullsize', attachment.url);
          $input.val(attachment.id).trigger('change');
        });
        $this.media_instance.open();
      }); //$preview.find( '.wponion-image-remove' ).on( 'click', () => $input.val( '' ).trigger( 'change' ) );
      //this.init_field( $preview.find( 'img' ), 'image_popup' );
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/import_export.js":
/*!*********************************************!*\
  !*** ./src/js/core/fields/import_export.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* global wponion_error_swal:true */

/* global wponion_success_swal:true */

/* global wponion_js_file:true */


var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      this.handle_export_textarea();
      this.handle_import_textarea();
      this.handle_backup_button();
      this.handle_download_backup();
      this.handle_delete_backup();
      this.handle_restore_backup();
    }
  }, {
    key: "handle_import_textarea",
    value: function handle_import_textarea() {
      var _this = this;

      var $textid = '.' + this.option('import_textarea');
      this.element.find('button.import-backup').on('click', function () {
        var $elem = jQuery($textid);

        _this.ajax('import_export', {
          data: {
            import_export_action: 'import',
            import_content: $elem.val()
          },
          element_lock: $elem.parent(),
          success: function success(res) {
            return wponion_success_swal(res).fire();
          },
          error: function error(res) {
            return wponion_error_swal(res).fire();
          }
        }).send();
      });
    }
  }, {
    key: "handle_export_textarea",
    value: function handle_export_textarea() {
      var $textid = '.' + this.option('export_textarea');
      var $unique = this.option('unique');
      var $module = this.option('module');
      this.element.find('.download').on('click', function () {
        wponion_js_file(jQuery($textid).html(), 'backup_' + $module + '_' + $unique + '.json');
      });
    }
  }, {
    key: "handle_backup_button",
    value: function handle_backup_button() {
      var _this2 = this;

      this.element.find('button.backup-now').on('click', function (e) {
        _this2.ajax('import_export', {
          data: {
            import_export_action: 'backup'
          },
          button_lock: jQuery(e.currentTarget),
          element_lock: _this2.element.find('.saved-backup-headers'),
          success: function success(res) {
            wponion_success_swal(res).fire();

            _this2.element.find('.saved-backup-headers ul').append(res.html);
          },
          error: function error(res) {
            return wponion_error_swal(res).fire();
          }
        }).send();
      });
    }
  }, {
    key: "handle_download_backup",
    value: function handle_download_backup() {
      var _this3 = this;

      this.element.on('click', '.download-backup', function (e) {
        e.preventDefault();

        _this3.ajax('import_export', {
          data: {
            import_export_action: 'download',
            backup_id: jQuery(e.currentTarget).attr('data-backup-id')
          },
          element_lock: _this3.element.find('.saved-backup-headers'),
          success: function success(res) {
            return wponion_js_file(res.backup, res.file_name);
          },
          error: function error(res) {
            return wponion_error_swal(res).fire();
          }
        }).send();
      });
    }
  }, {
    key: "handle_delete_backup",
    value: function handle_delete_backup() {
      var _this4 = this;

      this.element.on('click', '.delete-backup', function (e) {
        e.preventDefault();

        _this4.ajax('import_export', {
          data: {
            import_export_action: 'delete',
            backup_id: jQuery(e.currentTarget).attr('data-backup-id')
          },
          element_lock: _this4.element.find('.saved-backup-headers'),
          success: function success() {
            jQuery(e.currentTarget).parent().parent().fadeOut(function () {
              jQuery(this).remove();
            });
          },
          error: function error(res) {
            return wponion_error_swal(res).fire();
          }
        }).send();
      });
    }
  }, {
    key: "handle_restore_backup",
    value: function handle_restore_backup() {
      var _this5 = this;

      this.element.on('click', '.restore-backup', function (e) {
        e.preventDefault();

        _this5.ajax('import_export', {
          data: {
            import_export_action: 'restore',
            backup_id: jQuery(e.currentTarget).attr('data-backup-id')
          },
          element_lock: _this5.element.find('.saved-backup-headers'),
          success: function success(res) {
            wponion_success_swal(res).fire();

            var $textid = '.' + _this5.option('export_textarea');

            _this5.element.find($textid).val(JSON.stringify(res.backup));
          },
          error: function error(res) {
            return wponion_error_swal(res).fire();
          }
        }).send();
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/keyvalue_pair.js":
/*!*********************************************!*\
  !*** ./src/js/core/fields/keyvalue_pair.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      this.global_validate = false;
      this.element.find('.wponion-keyvalue_wrap').WPOnionCloner({
        add_btn: this.element.find('> .row > .wponion-fieldset > .wponion-keyvalue-action-container  > button[data-wponion-keyvalue-add]'),
        sortable: {
          items: '.wponion-keyvalue-field',
          handle: '.sortable-handler',
          placeholder: 'wponion-accordion-placeholder',
          start: function start(event, ui) {
            ui.item.css('background-color', '#eeee');
          },
          stop: function stop(event, ui) {
            ui.item.removeAttr('style');

            _this.element.trigger('change');

            _this.element.trigger('wponion_field_updated');
          }
        },
        limit: -1 === this.option('limit') ? null : this.option('limit'),
        clone_elem: '> .row > .wponion-fieldset > .wponion-keyvalue-field',
        remove_btn: '.wponion-keyvalue-field > button[data-wponion-keyvalue-remove]',
        template: this.option('html_template'),
        templateAfterRender: function templateAfterRender($elem) {
          _this.hook.doAction('wponion_key_value_updated', $elem);

          _this.element.trigger('change');

          _this.element.trigger('wponion_field_updated');

          _this.maybe_js_validate_elem(_this.option('js_validate', false), $elem);
        },
        onRemove: function onRemove($elem) {
          $elem.parent().remove();

          _this.element.trigger('change');

          _this.element.trigger('wponion_field_updated');

          _this.hook.doAction('wponion_key_value_updated', $elem);
        },
        onLimitReached: function onLimitReached() {
          if (_this.element.find('div.alert').length === 0) {
            _this.element.find('.wponion-keyvalue_wrap').after(jQuery(_this.option('error_msg')).hide());

            _this.element.find('div.alert').slideDown();

            window.wponion_notice(_this.element.find('div.alert, div.notice'));
          }
        }
      });
    }
    /**
     * Handles Javascript Error Placement.
     * @param err
     */

  }, {
    key: "js_error",
    value: function js_error(err) {
      err.error.appendTo(err.element.parent().parent());
    }
    /**
     * Handles Javascript Validation Inputs
     * @param $args
     * @param $elem
     */

  }, {
    key: "maybe_js_validate_elem",
    value: function maybe_js_validate_elem($args, $elem) {
      var $key_id = this.element.find('.sortable-handler').length > 0 ? 1 : 0;
      var $value_id = this.element.find('.sortable-handler').length > 0 ? 2 : 1;

      if (false === window.wponion._.isObject($args)) {
        return false;
      }

      if (false === window.wponion._.isUndefined($args.key)) {
        $elem.find('.wponion-keyvalue-field').each(function () {
          jQuery(this).find('> div').eq($key_id).find(':input').rules('add', $args.key);
        });
      }

      if (false === window.wponion._.isUndefined($args.value)) {
        $elem.find('.wponion-keyvalue-field').each(function () {
          jQuery(this).find('> div').eq($value_id).find(':input').rules('add', $args.value);
        });
      }

      if (true === window.wponion._.isUndefined($args.key) && true === window.wponion._.isUndefined($args.value)) {
        $elem.find(':input').each(function () {
          jQuery(this).rules('add', $args);
        });
      }
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/modal.js":
/*!*************************************!*\
  !*** ./src/js/core/fields/modal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      this.element.find('>  .row > .wponion-fieldset > button[type="button"]').on('click', function () {
        switch (_this.option('modal_type')) {
          case 'swal':
          case 'sweetalert':
          case 'alert':
            _this.init_sweatalert();

            break;

          case 'wp':
            _this.init_wp();

            break;
        }
      });
    }
    /**
     * Inits WordPress.
     */

  }, {
    key: "init_wp",
    value: function init_wp() {
      var _this2 = this;

      this.fetch_fields(function (res) {
        var $instance = new window.wponion.plugins.wpmodal(_this2.option('modal_config'), res.html),
            $validation = false;
        $instance.on('before_render', function ($elem) {
          var $parent = $elem.find('.wponion-modal-content-container').parent();
          $elem.find('.wponion-modal-content-container').remove();
          $parent.append('<form method="post" class="wponion-wp-modal-form "><div class="wponion-modal-content-container"></div></form>');
        });
        $instance.on('open', function ($elem) {
          $validation = window.wponion_validator(jQuery('.wponion-wp-modal-form'));
          window.wponion_field_reload_all($elem);
          window.wponion_dependency($elem);
        });
        $instance.on('save_modal', function ($elem) {
          if ($validation.form.valid()) {
            _this2.convert_form_fields($elem);

            $instance.closeModal();
          }
        });
        $instance.open();
      });
    }
    /**
     * Records Fields Event.
     * @param $element
     */

  }, {
    key: "record_fields",
    value: function record_fields($element) {
      var _this3 = this;

      $element.on('blur change click dblclick error keydown keypress keyup select', function () {
        _this3.convert_form_fields($element);
      });
    }
    /**
     * Converts Form Fields Inot Inputs.
     * @param $element
     */

  }, {
    key: "convert_form_fields",
    value: function convert_form_fields($element) {
      var $inputs = $element.find(':input').serializeJSON();
      this.ajax('modal-fields', {
        element_lock: this.element,
        blockUI: {
          message: window.wpo_core.txt('saving', 'Saving...'),
          overlayCSS: {
            background: '#fff',
            opacity: 0.7
          }
        },
        data: this.parse_args($inputs, {
          modal_action: 'save_fields'
        })
      }).send();
    }
    /**
     * Fetchs Fields From Ajax.
     * @param $success
     */

  }, {
    key: "fetch_fields",
    value: function fetch_fields($success) {
      this.ajax('modal-fields', {
        element_lock: this.element,
        blockUI: {
          message: null,
          overlayCSS: {
            background: '#fff',
            opacity: 0.7
          }
        },
        data: this.parse_args(this.option('ajax_args', {}), {
          modal_action: 'featch_fields'
        }),
        success: $success,
        error: function error(res) {
          return window.wponion_error_swal(res).fire();
        }
      }).send();
    }
    /**
     * Handles SweatAlert
     */

  }, {
    key: "init_sweatalert",
    value: function init_sweatalert() {
      var _this4 = this;

      this.fetch_fields(function (res) {
        var $args = _this4.option('modal_config');

        var $validation = false;

        $args.preConfirm = function () {
          return new Promise(function (resolve, reject) {
            if ($validation.form.valid()) {
              _this4.convert_form_fields(_this4.element.find('#swal2-content'));

              resolve();
            }

            return reject();
          })["catch"](function () {
            return false;
          });
        };

        $args.onBeforeOpen = function () {
          var $mainelem = _this4.element.find('#swal2-content');

          var $html = '<form method="post">' + res.html + '</form>';
          $mainelem.html(jQuery($html));
          $validation = window.wponion_validator($mainelem.find('> form'));
          $mainelem.show();
          window.wponion_field_reload_all($mainelem);
          window.wponion_dependency($mainelem);
        };

        $args = _this4.handle_args($args, 'SweatAlert Modal');
        $args.target = _this4.element[0];
        window.swal.fire($args);
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/oembed.js":
/*!**************************************!*\
  !*** ./src/js/core/fields/oembed.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var _this = this;

      this.image = '<img class="wponion-no-preview" src="' + this.option('nopreview') + '"/>';
      this.element.find('.wponion-oembed-preview').before('<span class="spinner wponion-spinner"></span>');
      this.element.find(':input').on('blur', function (e) {
        return _this.show_preview(e);
      });
    }
    /**
     * Handles OEmbed Preview.
     */

  }, {
    key: "show_preview",
    value: function show_preview() {
      var _this2 = this;

      var $spinner = this.element.find('.wponion-spinner'),
          $preview = this.element.find('.wponion-oembed-preview');
      $spinner.addClass('is-active');
      this.ajax('oembed-preview', {
        method: 'POST',
        data: {
          value: this.element.find(':input').val()
        },
        success: function success(res) {
          return $preview.html(res);
        },
        error: function error() {
          return $preview.html(_this2.image);
        },
        always: function always() {
          return $spinner.removeClass('is-active');
        }
      }).send();
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/options_object.js":
/*!**********************************************!*\
  !*** ./src/js/core/fields/options_object.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      this.element.find('.json-output').jsonView(this.option('values'));
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/range-slider.js":
/*!********************************************!*\
  !*** ./src/js/core/fields/range-slider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var $input = this.element.find('input[type=text]');
      var $options = this.handle_args(this.parse_args(this.option('slider'), {
        range: 'min',
        value: 0,
        max: 1000,
        min: 1,
        step: 1
      }), 'jQuery Slider');

      $options.slide = function (event, ui) {
        return $input.val(ui.value).trigger('change');
      };

      var $slider = this.element.find('.wponion-range-slider').slider($options);
      $input.keyup(function () {
        $slider.slider('value', $input.val());
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/sorter.js":
/*!**************************************!*\
  !*** ./src/js/core/fields/sorter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
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
          $this.trigger('wponion_field_updated');
        }
      }); // avoid conflict

      $disabled.sortable({
        connectWith: $enabled,
        placeholder: 'ui-sortable-placeholder'
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/spinner.js":
/*!***************************************!*\
  !*** ./src/js/core/fields/spinner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var $options = this.handle_args(this.parse_args(this.option('spinner'), {
        min: 1,
        max: 100,
        step: 1
      }), 'Spinner');
      var $input = this.element.find('input[type=text]'),
          $elem_init = this.element.find('.wponion-input-group').length > 0 ? this.element.find('.wponion-input-group') : $input;

      $options.spin = function (event, ui) {
        return $input.val(ui.value).trigger('change');
      };

      $elem_init.spinner($options);
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/tab.js":
/*!***********************************!*\
  !*** ./src/js/core/fields/tab.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var $wrap = this.element.find('> .row > .wponion-fieldset > .wponion-tab-wrap'),
          $menu_wrap = $wrap.find('> ul.wponion-tab-menus'),
          $tab_pages = $wrap;
      $menu_wrap.find(' li a').on('click', function (e) {
        e.preventDefault();
        var $elem = jQuery(this);
        $elem.parent().parent().find('.wponion-tab-current').removeClass('wponion-tab-current');
        $elem.parent().addClass('wponion-tab-current');
        $elem.find('.wponion-tab-page').hide();
        $elem.find('.wponion-tab-page').removeClass('wponion-tab-current');
        var $tab = $elem.attr('data-tab-name');
        $tab_pages.find('> div').hide().removeClass('wponion-tab-current');
        $tab_pages.find('> div#wponion-tab-' + $tab).addClass('wponion-tab-current').show();
      });

      if ($menu_wrap.find('> li.current').length > 0) {
        $menu_wrap.find('> li.current a').trigger('click');
      } else {
        $menu_wrap.find('> li:first-child a').trigger('click');
      }
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/time-picker.js":
/*!*******************************************!*\
  !*** ./src/js/core/fields/time-picker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var $settings = this.option('settings'),
          $view,
          $main_div = 'div#' + this.id() + 'timepicker';

      if (false === window.wponion._.isUndefined($settings.theme)) {
        $view = $settings.theme;
        delete $settings.theme;
      } else {
        $view = 'default';
      }

      if (jQuery($main_div).length === 0) {
        jQuery('body').append(jQuery('<div class="wponion-datepicker-' + $view + '" id="' + this.id() + 'timepicker"></div>'));
      }

      $settings = this.handle_args($settings, 'time_picker');
      $settings.noCalendar = true;
      $settings.enableTime = true;
      $settings.appendTo = jQuery($main_div)[0];
      this.element.find('input').flatpickr($settings);
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/typography.js":
/*!******************************************!*\
  !*** ./src/js/core/fields/typography.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
/* harmony import */ var vsp_js_helper_parts_css_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vsp-js-helper/parts/css_units */ "./node_modules/vsp-js-helper/parts/css_units.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
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
            //$backUPFont        = $el.find( '.wponion-element-backup-font select' ).val(),
        //$direction         = $el.find( '.wponion-element-direction select' ).val(),
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

        var $_attrs = ' font-family:' + $font + '; ' + ' font-weight:' + $font_weight_style.weight + '; ' + ' font-style:' + $font_weight_style.style + '; ' + ' text-align:' + $align + '; ' + ' color: ' + $color + ';' + ' font-size:' + Object(vsp_js_helper_parts_css_units__WEBPACK_IMPORTED_MODULE_1__["default"])($fontSize) + '; ' + ' letter-spacing:' + Object(vsp_js_helper_parts_css_units__WEBPACK_IMPORTED_MODULE_1__["default"])($letterSpacing) + '; ' + ' line-height:' + Object(vsp_js_helper_parts_css_units__WEBPACK_IMPORTED_MODULE_1__["default"])($lineHeight) + '; ';
        var $text = $preview.text();
        $preview.html('');
        $preview.append(jQuery('<' + $tag + '>' + $text + '</' + $tag + ' >'));
        $preview.find($tag).attr('style', $_attrs);
      });
    }
    /**
     * Returns Proper Valid Font Styles.
     * @param $info
     * @returns {{weight: string, style: string}}
     */

  }, {
    key: "font_style",
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

      return {
        weight: $weight_val,
        style: $style_val
      };
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/upload.js":
/*!**************************************!*\
  !*** ./src/js/core/fields/upload.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var $input = this.element.find('input[type=text]'),
          $settings = this.option('settings', {
        frame_title: 'Upload',
        upload_type: 'image',
        insert_title: 'Use'
      }),
          wp_media_frame;
      this.element.find('button').on('click', function (e) {
        e.preventDefault();

        if (typeof wp === 'undefined' || !wp.media || !wp.media.gallery) {
          return;
        }

        if (wp_media_frame) {
          wp_media_frame.open();
          return;
        }

        wp_media_frame = wp.media({
          title: $settings.frame_title,
          library: {
            type: $settings.upload_type
          },
          button: {
            text: $settings.insert_title
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

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/fields/wp_links.js":
/*!****************************************!*\
  !*** ./src/js/core/fields/wp_links.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/field */ "./src/js/core/class/field.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* global swal:true */

var _default =
/*#__PURE__*/
function (_WPOnion_Field) {
  _inherits(_default, _WPOnion_Field);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Inits Field.
     */
    value: function init() {
      var $this = this,
          $elem = $this.element,
          $textarea = $elem.find('textarea');
      $elem.find('#wponion-wp-link-picker > button').on('click', function () {
        $textarea.val('');

        if (!window.wpLink) {
          swal.fire({
            type: 'error',
            title: window.wpo_core.txt('wp_link_error_title', 'WP Link JS Lib Not Found')
          });
        }

        window.wpLink.open($textarea.attr('id'));
      });
      $textarea.on('change', function () {
        var $data = jQuery(jQuery(this).val());

        if ($elem.find('span.example_output span.value')) {
          $elem.find('span.example_output span.value').html(jQuery(this).val());
        }

        if ($elem.find('input#url').length > 0) {
          $elem.find('input#url').val($data.attr('href'));
        }

        if ($elem.find('input#title').length > 0) {
          $elem.find('input#title').val($data.text());
        }

        if ($elem.find('input#target').length > 0) {
          $elem.find('input#target').val($data.attr('target'));
        }

        if ($elem.find('span.url span.value').length > 0) {
          $elem.find('span.url span.value').html($data.attr('href'));
        }

        if ($elem.find('span.title span.value').length > 0) {
          $elem.find('span.title span.value').html($data.text());
        }

        if ($elem.find('span.target span.value').length > 0) {
          $elem.find('span.target span.value').html($data.attr('target'));
        }
      });
    }
  }]);

  return _default;
}(_class_field__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/functions/core.js":
/*!***************************************!*\
  !*** ./src/js/core/functions/core.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Checks if library exists
   * @param $library
   * @param $type
   * @return {boolean}
   */
  window.wponion_is_library_exists = function () {
    var $library = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var $type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'window';

    switch ($type) {
      case 'window':
        return !window.wponion._.isUndefined(window[$library]);

      case 'jquery':
        return !window.wponion._.isUndefined(jQuery.fn[$library]);
    }

    return false;
  };
  /**
   * Handles WPOnion Notices.
   * @param $elem
   * @returns {*}
   */


  window.wponion_notice = function ($elem) {
    $elem = $elem || jQuery('body').find('.wponion-element-wp_notice, .wponion-element-notice');

    if ($elem.length > 1) {
      $elem.each(function (i, e) {
        window.wponion_notice(jQuery(e));
      });
    } else {
      window.wponion_init_field('global_notice', $elem);
    }
  };
  /**
   * Creates A New instance of Dependency
   * @param $element
   * @param $args
   * @param $config
   * @return {{}|*}
   */


  window.wponion_dependency = function () {
    var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return new window.wponion["class"].dependency($element, $args, $config);
  };
  /**
   * Fetch Files from the given element.
   * @param $element
   * @param $find_selector
   * @param $nested_elements
   * @return {jQuery}
   */


  window.wponion_get_fields = function ($element) {
    var $find_selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $nested_elements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    $element = $element || jQuery('.wponion-framework');
    $find_selector = $find_selector || '.wponion-element';

    if (true === $nested_elements) {
      return $element.find($find_selector);
    } else if ($element.closest('.wponion-has-nested-fields').length >= 1 || $element.hasClass('wponion-has-nested-fields')) {
      return $element.find($find_selector);
    } else {
      return $element.find($find_selector).filter(function (index, element) {
        element = jQuery(element);

        if (element.hasClass('wponion-has-nested-fields') && element.parents('.wponion-element').length === 0) {
          return true;
        } else if (element.hasClass('wponion-has-nested-fields') && element.parents('.wponion-element').length >= 1) {
          return false;
        }

        return !element.closest('.wponion-has-nested-fields', element).length;
      });
    }
  };
  /**
   * Triggers All Module instance for current page.
   * @param $element
   */


  window.wponion_init_all = function ($element) {
    $element = $element || jQuery('body'); // Reloads Global Fields.

    window.wponion_field_reload_global($element); // Inits Bulk Edit Module.

    window.wponion_module_bulk_edit(); // Inits Media Fields Module.

    window.wponion_module_media_fields(); // Inits Quick Edit Module.

    window.wponion_module_quick_edit(); // Inits WPPointers Module.

    window.wponion_module_wp_pointers(); // Inits System Info Module.

    window.wponion_module_system_info(); // Inits Page Actions Module.

    window.wponion_module_page_actions();
    $element.find('div.postbox.wponion-metabox').each(function () {
      // Inits Metabox Module.
      window.wponion_module_metabox(jQuery(this));
    });
    $element.find('.wponion-framework:not(.wponion-quick_edit)').each(function () {
      var $elem = jQuery(this); // Reloads General Fields.

      window.wponion_field_reload($elem); // Init WPOnion Theme

      window.wponion_init_theme($elem); // Init Settings Module

      window.wponion_module_settings($elem); // Inits Dependency Module.

      window.wponion_dependency($elem);
    });
  };
});

/***/ }),

/***/ "./src/js/core/functions/fields.js":
/*!*****************************************!*\
  !*** ./src/js/core/functions/fields.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _arguments = arguments;

  /**
   * Returns A Abstract Class Instance.
   * @param $elem
   * @param $args
   * @return {window.wponion.class.field}
   */
  window.wponion_field = function ($elem) {
    var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new window.wponion["class"].field($elem, $args);
  };
  /**
   * Function Used outside of WPOnion To Create
   * @param $init_method
   * @param $methods
   * @returns {{init: *, new(): $class, prototype: $class}}
   */


  window.wponion_create_field_class = function ($init_method) {
    var $methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var $org_class = window.wponion["class"].field,
        $class =
    /*#__PURE__*/
    function (_$org_class) {
      _inherits($class, _$org_class);

      function $class() {
        _classCallCheck(this, $class);

        return _possibleConstructorReturn(this, _getPrototypeOf($class).apply(this, arguments));
      }

      return $class;
    }($org_class);

    $class.prototype.init = $init_method;

    if (window.wponion._.isObject($methods)) {
      for (var $key in $methods) {
        if ($methods.hasOwnProperty($key)) {
          $class.prototype[$key] = $methods[$key];
        }
      }
    }

    return $class;
  };
  /**
   * Registers With A Field Callback Hook.
   * @param $type
   * @param $callback
   */


  window.wponion_register_field = function ($type, $callback) {
    window.wponion.hooks.addAction("wponion_init_field_".concat($type), 'wponion_core', function ($elem) {
      try {
        new $callback($elem, {});
      } catch (e) {
        console.error(_arguments, ' \n' + e + '  \nFor : wponion_init_field_' + $type);
      }
    });
  };
  /**
   * @param $field_type
   * @param $argument
   * @param $log_err
   */


  window.wponion_init_field = function ($field_type, $argument) {
    var $log_err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (window.wponion.hooks.hasAction('wponion_init_field_' + $field_type)) {
      window.wponion.hooks.doAction('wponion_init_field_' + $field_type, $argument);
    } else {
      window.wponion_field($argument);

      if (window.wpo_core.is_debug() && true === $log_err) {
        console.debug("WPOnion Field Type : ".concat($field_type, " Init Function Not Found"), "\nAction Used : wponion_init_field_".concat($field_type));
      }
    }
  };
  /**
   * @param $element
   */


  window.wponion_field_reload_all = function ($element) {
    window.wponion_field_reload($element);
    window.wponion_field_reload_global($element);
  };
  /**
   * Reloads / Inits Local Fields.
   * @param $elem
   */


  window.wponion_field_reload = function ($elem) {
    $elem = $elem || jQuery('.wponion-framework');
    window.wponion.hooks.doAction('wponion_before_fields_reload', $elem);
    window.wponion_get_fields($elem, '.wponion-element[data-wponion-field-type]').each(function () {
      if (!jQuery(this).hasClass('wponion-field-inited')) {
        window.wponion_init_field(jQuery(this).data('wponion-field-type'), jQuery(this));
      }
    });
    window.wponion.hooks.doAction('wponion_after_fields_reload', $elem);
  };
  /**
   * Reloads / Inits Global Fields.
   * @param $element Element To Find
   */


  window.wponion_field_reload_global = function ($element) {
    $element = $element || jQuery('body');
    var $element_to_check = {
      'input[data-wponion-inputmask]': 'inputmask',
      '.wpo-select2': 'select2',
      '.wpo-chosen': 'chosen',
      '.wpo-selectize': 'selectize',
      '.wponion-field-tooltip': 'tooltip',
      '.wponion-help': 'tooltip',
      '[wponion-help]': 'tooltip',
      '[wponion-img-popup]': 'image_popup'
    };

    var _loop = function _loop($key) {
      if ($element_to_check.hasOwnProperty($key) && $element.find($key).length > 0) {
        $element.find($key).each(function () {
          window.wponion_init_field($element_to_check[$key], jQuery(this));
        });
      }
    };

    for (var $key in $element_to_check) {
      _loop($key);
    }
  };
});

/***/ }),

/***/ "./src/js/core/functions/jquery.js":
/*!*****************************************!*\
  !*** ./src/js/core/functions/jquery.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_wpo_cloner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/wpo-cloner */ "./src/js/core/plugins/wpo-cloner.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * jQuery Functions.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Animate CSS Related Functions.
   */
  animateCss: function animateCss(animationName, callback) {
    var animationEnd = function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    }(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function () {
      jQuery(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') {
        callback(jQuery(this));
      }
    });
    return this;
  },

  /**
   * Copy Element Attr To Another Attr.
   * @param from
   * @param to
   */
  copyAttr: function copyAttr(from, to) {
    if (jQuery(this).length > 1) {
      jQuery(this).each(function () {
        jQuery(this).copyAttr(from, to);
      });
    } else {
      var $existing = jQuery(this).attr(from);

      if (!window.wponion._.isUndefined($existing)) {
        jQuery(this).attr(to, $existing);
      }
    }
  },

  /**
   * Move Element Attr To Another Attr.
   * @param from
   * @param to
   */
  moveAttr: function moveAttr(from, to) {
    if (jQuery(this).length > 1) {
      jQuery(this).each(function () {
        jQuery(this).moveAttr(from, to);
      });
    } else {
      jQuery(this).copyAttr(from, to);
      jQuery(this).removeAttr(from);
    }
  },

  /**
   * A Custom Wrap Class To Handle Tippy Instance
   * @param $arguments
   * @returns {*}
   */
  tippy: function tippy($arguments) {
    var tippy_helper = {
      create_instance: function create_instance($elem, $arguments) {
        $arguments = typeof $arguments === 'undefined' ? {} : $arguments;

        if ($elem.attr('data-tippy-instance-id') === undefined) {
          var $_instance_id = 'Tippy' + window.wpo_core.rand_id();
          $elem.attr('data-tippy-instance-id', $_instance_id);
          var $title = $elem.attr('title'),
              $data_tippy = $elem.attr('data-tippy');

          if ($title && $title !== '' && window.wponion._.isUndefined($arguments.content)) {
            $arguments.content = $title;
          }

          if ($data_tippy && $data_tippy !== '' && window.wponion._.isUndefined($arguments.content)) {
            $arguments.content = $data_tippy;
          }

          window[$_instance_id] = window.tippy($elem[0], $arguments);
          return true;
        }

        return false;
      },
      get_instance: function get_instance($elem) {
        if ($elem.attr('data-tippy-instance-id') === undefined) {
          return false;
        }

        var $_instance_id = $elem.attr('data-tippy-instance-id');
        return undefined !== window[$_instance_id] ? window[$_instance_id] : false;
      }
    };

    if (this.length > 1) {
      this.each(function () {
        tippy_helper.create_instance(jQuery(this), $arguments);
      });
      return true;
    } else {
      var $status = tippy_helper.create_instance(jQuery(this), $arguments);
      return true === $status ? tippy_helper.get_instance(jQuery(this)) : false;
    }
  },

  /**
   * Returns An Active instance
   * @returns {boolean}
   */
  tippy_get: function tippy_get() {
    if (jQuery(this).attr('data-tippy-instance-id') === undefined) {
      return false;
    }

    var $_instance_id = jQuery(this).attr('data-tippy-instance-id');
    return undefined !== window[$_instance_id] ? window[$_instance_id] : false;
  },

  /**
   * @used in WPPointers
   * @param fn
   * @constructor
   */
  WPOnion_onAvailable: function WPOnion_onAvailable(fn) {
    var sel = this.selector,
        timer;

    if (this.length > 0) {
      fn.call(this);
    } else {
      timer = setInterval(function () {
        if ($(sel).length > 0) {
          fn.call($(sel));
          clearInterval(timer);
        }
      }, 300);
    }
  },

  /**
   * Adds Bootstrap Button Element
   */
  wponion_button: function Plugin(option) {
    return this.each(function () {
      var $this = jQuery(this);
      var data = $this.data('wpobs.button');
      var options = _typeof(option) === 'object' && option;

      if (!data) {
        $this.data('wpobs.button', data = new window.wponion.plugins.bs_button(this, options));
      }

      data.setState(option);
    });
  },

  /**
   * Adds WPOnion Cloner Script.
   */
  WPOnionCloner: _plugins_wpo_cloner__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/js/core/functions/plugins.js":
/*!******************************************!*\
  !*** ./src/js/core/functions/plugins.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Creates A New Instance of Ajaxer and returns it.
   * @param $args
   * @returns {*}
   */
  window.wponion_ajax = function ($args) {
    return new window.wponion.plugins.ajaxer($args);
  };
  /**
   * Creates A Swal With BootStrap Button Class.
   * @returns {*|Function|Object|void}
   */


  window.wponion_bs_swal = function () {
    var $args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return window.swal.mixin(window.wponion._.merge($args, {
      customClass: {
        confirmButton: 'wpo-btn wpo-btn-success',
        cancelButton: 'wpo-btn wpo-btn-danger'
      },
      buttonsStyling: false
    }));
  };
  /**
   * Creates A Swal Toast.
   * @returns {*|Function|Object|void}
   */


  window.wponion_swal_toast = function () {
    var $args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return window.swal.mixin(window.wponion._.merge($args, {
      toast: true,
      type: 'success',
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    }));
  };
  /**
   * Creates Swal Error.
   * @param $title
   * @param $message
   * @param $args
   * @return {*|Function|Object|void}
   */


  window.wponion_error_swal = function () {
    var $title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var $message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!window.wponion._.isString($title) && window.wponion._.isObject($title)) {
      $message = window.wponion._.isUndefined($title.message) ? '' : $title.message;
      $title = window.wponion._.isUndefined($title.title) ? '' : $title.title;
    }

    if (!$title) {
      $title = window.wpo_core.txt('unknown_ajax_error');
    }

    return window.swal.mixin(window.wponion._.merge($args, {
      type: 'error',
      title: $title ? $title : null,
      text: $message ? $message : null,
      animation: false
    }));
  };
  /**
   * WPonion Success Swal.
   * @param $title
   * @param $message
   * @param $args
   * @return {*}
   */


  window.wponion_success_swal = function () {
    var $title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var $message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!window.wponion._.isString($title) && window.wponion._.isObject($title)) {
      $message = window.wponion._.isUndefined($title.message) ? '' : $title.message;
      $title = window.wponion._.isUndefined($title.title) ? '' : $title.title;
    }

    if (!$title) {
      $title = window.wpo_core.txt('success');
    }

    return window.swal.mixin(window.wponion._.merge($args, {
      type: 'success',
      title: $title ? $title : null,
      text: $message ? $message : null,
      animation: false
    }));
  };
  /**
   * Returns A New Instance of jQuery Validator.
   * @param $form
   * @return {WPOnion_Validator}
   */


  window.wponion_validator = function () {
    var $form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return new window.wponion.plugins.validator($form);
  };
});

/***/ }),

/***/ "./src/js/core/functions/themes.js":
/*!*****************************************!*\
  !*** ./src/js/core/functions/themes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Triggers Theme Init.
   * @param $element
   * @returns {{addAction, removeAction, applyFilters, removeFilter, addFilter, doAction}}
   */
  window.wponion_init_theme = function ($element) {
    $element = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["to_jquery"])($element);

    if ($element) {
      var $defaults = {
        theme: '',
        module: '',
        unique: ''
      },
          $args = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_args"])(window.wponion["class"].module_base.arg($element, false, $defaults), $defaults);

      if (!window.wponion._.isEmpty($args.theme)) {
        window.wponion.hooks.doAction('wponion_before_theme_init', $element, $args.module, $args.unique, $args.theme);
        window.wponion.hooks.doAction("wponion_before_".concat($args.theme, "_theme_init"), $element, $args.module, $args.unique, $args.theme);
        window.wponion.hooks.doAction("wponion_".concat($args.theme, "_theme_init"), $element, $args.module, $args.unique, $args.theme);
        window.wponion.hooks.doAction("wponion_after_".concat($args.theme, "_theme_init"), $element, $args.module, $args.unique, $args.theme);
        window.wponion.hooks.doAction('wponion_after_theme_init', $element, $args.module, $args.unique, $args.theme);
      } else if (!window.wponion._.isEmpty($args.theme)) {
        window.wponion.hooks.doAction('wponion_theme_init', $element, $args.module, $args.unique, $args.theme);
      }
    }
  };
  /**
   * Registers A Theme With WPOnion
   * @param $theme
   * @param $callback
   * @return {*}
   */


  window.wponion_register_theme = function ($theme, $callback) {
    return window.wponion.hooks.addAction("wponion_".concat($theme, "_theme_init"), 'wponion_core', $callback);
  };
  /**
   * Function Used outside of WPOnion To Create
   * @param $init_method
   * @param $methods
   * @returns {{init: *, new(): $class, prototype: $class}}
   */


  window.wponion_create_theme_class = function ($init_method) {
    var $methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var $org_class = window.wponion["class"].theme_base,
        $class =
    /*#__PURE__*/
    function (_$org_class) {
      _inherits($class, _$org_class);

      function $class() {
        _classCallCheck(this, $class);

        return _possibleConstructorReturn(this, _getPrototypeOf($class).apply(this, arguments));
      }

      return $class;
    }($org_class);

    $class.prototype.init = $init_method;

    if (window.wponion._.isObject($methods)) {
      for (var $key in $methods) {
        if ($methods.hasOwnProperty($key)) {
          $class.prototype[$key] = $methods[$key];
        }
      }
    }

    return $class;
  };
});

/***/ }),

/***/ "./src/js/core/functions/utilites.js":
/*!*******************************************!*\
  !*** ./src/js/core/functions/utilites.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * @param data
   * @param file_name
   * @param data_type
   */
  window.wponion_js_file = function (data) {
    var file_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'file.json';
    var data_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'data:text/json;charset=utf-8,';
    data = window.wponion._.isObject(data) ? encodeURIComponent(JSON.stringify(data)) : data;
    var dataStr = data_type + data,
        downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', file_name);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
});

/***/ }),

/***/ "./src/js/core/global-events.js":
/*!**************************************!*\
  !*** ./src/js/core/global-events.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Triggers When Variation is loaded
  jQuery('#woocommerce-product-data').on('woocommerce_variations_loaded', function () {
    jQuery('body').find('.wponion-framework.wponion-woocommerce-variation').each(function () {
      window.wponion_field_reload_all(jQuery(this));
      window.wponion_dependency(jQuery(this));
    });
  }); // Triggers When A Variation is updated

  jQuery('#variable_product_options').on('woocommerce_variations_added', function () {
    jQuery('body').find('.wponion-framework.wponion-woocommerce-variation').each(function () {
      window.wponion_field_reload_all(jQuery(this));
      window.wponion_dependency(jQuery(this));
    });
  }); // Triggers When A Widget is updated

  jQuery(document).on('widget-added widget-updated', function (event, $widget) {
    window.wponion_field_reload_all($widget);
    window.wponion_dependency($widget);
  }); // Triggers When New Menu Item Added.

  jQuery(document).on('menu-item-added', function (event, $menu) {
    window.wponion_field_reload_all($menu);
    window.wponion_dependency($menu);
  });
});

/***/ }),

/***/ "./src/js/core/module-handler.js":
/*!***************************************!*\
  !*** ./src/js/core/module-handler.js ***!
  \***************************************/
/*! exports provided: module_functions, wponion_module_settings, wponion_module_bulk_edit, wponion_module_media_fields, wponion_module_metabox, wponion_module_page_actions, wponion_module_quick_edit, wponion_module_wp_pointers, wponion_module_system_info, wponion_module_customizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_functions", function() { return module_functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wponion_module_settings", function() { return wponion_module_settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wponion_module_bulk_edit", function() { return wponion_module_bulk_edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wponion_module_media_fields", function() { return wponion_module_media_fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wponion_module_metabox", function() { return wponion_module_metabox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wponion_module_page_actions", function() { return wponion_module_page_actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wponion_module_quick_edit", function() { return wponion_module_quick_edit; });
/* harmony import */ var _class_module_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/module-base */ "./src/js/core/class/module-base.js");
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/settings */ "./src/js/core/modules/settings.js");
/* harmony import */ var _modules_metabox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/metabox */ "./src/js/core/modules/metabox.js");
/* harmony import */ var _modules_quick_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/quick-edit */ "./src/js/core/modules/quick-edit.js");
/* harmony import */ var _modules_wp_pointers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/wp-pointers */ "./src/js/core/modules/wp-pointers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wponion_module_wp_pointers", function() { return _modules_wp_pointers__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _modules_system_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/system-info */ "./src/js/core/modules/system-info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wponion_module_system_info", function() { return _modules_system_info__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _modules_customizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/customizer */ "./src/js/core/modules/customizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wponion_module_customizer", function() { return _modules_customizer__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");








/**
 * Inits Settings Module.
 */

var wponion_module_settings = function wponion_module_settings($element) {
  $element = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_7__["to_jquery"])($element);

  if (_class_module_base__WEBPACK_IMPORTED_MODULE_0__["default"].is_valid($element) && $element.hasClass('wponion-module-settings')) {
    new _modules_settings__WEBPACK_IMPORTED_MODULE_1__["default"]($element);
  }
};
/**
 * Inits Bulk Edit Module
 */


var wponion_module_bulk_edit = function wponion_module_bulk_edit() {
  jQuery(document).on('click', '#bulk_edit', function () {
    var $final_args = {
      post_ids: []
    },
        $bulk_edit = jQuery('#bulk-edit');
    $bulk_edit.find('#bulk-titles').children().each(function () {
      $final_args.post_ids.push(jQuery(this).attr('id').replace(/^(ttle)/i, ''));
    });
    $bulk_edit.find('.wponion-quick-edit-fieldset').each(function () {
      $final_args = window.wponion._.merge(jQuery(this).serializeJSON(), $final_args);
    });
    return window.wpo_core.ajax('save-bulk-edit', {
      method: 'POST',
      async: false,
      cache: false,
      data: $final_args
    }).send();
  });
};
/**
 * Inits Media Fields Module.
 */


var wponion_module_media_fields = function wponion_module_media_fields() {
  /**
   * Fixes Media POPUP Modal To Work With WPonion.
   */
  var fix_media_ui = function fix_media_ui() {
    var $table = jQuery('.compat-attachment-fields'),
        $fields = $table.find('.wponion-framework');
    $fields.each(function () {
      jQuery(this).parent().parent().remove();
      $table.before(jQuery(this).parent().html());
    });
    $table.parent().find('.wponion-framework').each(function () {
      window.wponion_field_reload_all(jQuery(this));
    });
  };

  if (jQuery('.compat-attachment-fields').length > 0 && jQuery('body').hasClass('post-type-attachment')) {
    fix_media_ui();
  } else {
    if (typeof wp.media !== 'undefined' && typeof wp.media.frames.browse !== 'undefined') {
      wp.media.frames.browse.on('edit:attachment', function () {
        fix_media_ui();
        wp.media.frames.edit.on('attachment:compat:ready', function () {
          return fix_media_ui();
        });
      });
    }
  }
};
/**
 * Inits Metabox Module.
 */


var wponion_module_metabox = function wponion_module_metabox($element) {
  $element = $element || jQuery('div.postbox.wponion-metabox');

  if ($element.hasClass('wponion-metabox')) {
    new _modules_metabox__WEBPACK_IMPORTED_MODULE_2__["default"]($element);
  }
};
/**
 * Inits Page Actions Module.
 */


var wponion_module_page_actions = function wponion_module_page_actions() {
  var $html = window.wpo_core.windowArgs('wponion_page_actions', false);

  if (false !== $html) {
    $html = jQuery($html);
    var $pgtitle = jQuery('.page-title-action'),
        $heading = jQuery('.wp-heading-inline');

    if ($pgtitle.length > 0) {
      $pgtitle.after($html);
    } else if ($heading.length > 0) {
      $heading.after($html);
    }
  }
};
/**
 * Inits Quick Edit Module.
 */


var wponion_module_quick_edit = function wponion_module_quick_edit() {
  var $list = jQuery('#the-list');

  if ($list.length > 0) {
    $list.on('click', '.editinline', function () {
      var post_id = jQuery(this).closest('tr').attr('id');
      post_id = post_id.replace('post-', '');
      jQuery('tr#edit-' + post_id).find('.wponion-framework').each(function () {
        new _modules_quick_edit__WEBPACK_IMPORTED_MODULE_3__["default"](jQuery(this), {
          post_id: post_id
        });
      });
    });
  }
};
/**
 * Registers Module Function With current window.
 */


var module_functions = function module_functions() {
  window.wponion_module_settings = wponion_module_settings;
  window.wponion_module_bulk_edit = wponion_module_bulk_edit;
  window.wponion_module_media_fields = wponion_module_media_fields;
  window.wponion_module_metabox = wponion_module_metabox;
  window.wponion_module_page_actions = wponion_module_page_actions;
  window.wponion_module_quick_edit = wponion_module_quick_edit;
  window.wponion_module_wp_pointers = _modules_wp_pointers__WEBPACK_IMPORTED_MODULE_4__["default"];
  window.wponion_module_system_info = _modules_system_info__WEBPACK_IMPORTED_MODULE_5__["default"];
  window.wponion_module_customizer = _modules_customizer__WEBPACK_IMPORTED_MODULE_6__["default"];
};



/***/ }),

/***/ "./src/js/core/modules/customizer.js":
/*!*******************************************!*\
  !*** ./src/js/core/modules/customizer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (window.wponion._.isUndefined(window.wp.customize)) {
    return false;
  }

  var $wpcc = window.wp.customize.controlConstructor,
      $wpc = window.wp.customize.Control,
      $wpoch = {
    values: function values($values) {
      jQuery.each($values, function ($k, $vs) {
        jQuery.each($vs, function ($e, $ep) {
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
  }; // Field Clone.

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
  $wpcc.wponion_field_icon_picker = $wpcc.wponion_field_clone; // Field Checkbox.

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
  $wpcc.wponion_field_upload = $wpcc.wponion_field_checkbox; // Field Sorter.

  $wpcc.wponion_field_sorter = $wpc.extend({
    ready: function ready() {
      var _this3 = this;

      this.container.on('wponion_field_updated', function () {
        return $wpoch.save(_this3);
      });
    }
  }); // Key Value Pair.

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
});

/***/ }),

/***/ "./src/js/core/modules/metabox.js":
/*!****************************************!*\
  !*** ./src/js/core/modules/metabox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_module_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/module-base */ "./src/js/core/class/module-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * WPOnion Metabox Module Handler.
 */

var _default =
/*#__PURE__*/
function (_WPOnion_Module) {
  _inherits(_default, _WPOnion_Module);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "module_init",

    /**
     * Inits Module.
     */
    value: function module_init() {
      this.ui_menu_handler();
      this.element.on('click', 'h2.ajax-container button', this.save_handler);
      jQuery(document).on('postbox-moved', function (event, $element) {
        $element = jQuery($element);

        if (jQuery('#postbox-container-1 ').find('#' + $element.attr('id')).length > 0) {
          $element.addClass('wponion-metabox-side-metabox');
          $element.addClass('wponion-metabox-side');
        } else {
          $element.removeClass('wponion-metabox-side-metabox');
          $element.removeClass('wponion-metabox-side');
        }
      });
    }
    /**
     * Handles Ajax Save Handler.
     * @param e
     */

  }, {
    key: "save_handler",
    value: function save_handler(e) {
      e.preventDefault();
      var $parent = jQuery(this).parent(),
          $base = $parent.parent().parent(),
          $hidden = $parent.find('div.wponion-metabox-secure-data');
      $base.block({
        message: null,
        overlayCSS: {
          background: '#000',
          opacity: 0.7
        }
      });
      $hidden.find('input').each(function () {
        jQuery(this).attr('name', jQuery(this).attr('id'));
      });
      var $fields = $parent.parent().find(':input');
      var $values = $fields.serializeJSON();
      $hidden.find('input').removeAttr('name');
      window.wpo_core.ajax('save_metabox', {
        data: $values,
        success: function success(res) {
          $base.html(res.html);
          var $elem = $base.find('.wponion-framework');
          window.wponion_field_reload_all($elem);
          window.wponion_init_theme($elem);
        },
        always: function always() {
          return $base.unblock();
        },
        error: function error(res) {
          return window.wponion_error_swal(res).fire();
        }
      }).send();
    }
  }]);

  return _default;
}(_class_module_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/modules/quick-edit.js":
/*!*******************************************!*\
  !*** ./src/js/core/modules/quick-edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_module_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/module-base */ "./src/js/core/class/module-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * WPOnion Quick Edit Module Handler.
 */

var _default =
/*#__PURE__*/
function (_WPOnion_Module) {
  _inherits(_default, _WPOnion_Module);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "module_init",

    /**
     * Module Init.
     */
    value: function module_init() {
      this.post_id = this.get_arg('post_id', false);
      this.values = window.wpo_core.fieldArgs(this.element.attr('data-wpo-quick-edit-id') + '_' + this.post_id, false);

      if (!window.wponion._.isUndefined(this.values) && !window.wponion._.isUndefined(this.values.html)) {
        this.values.html = jQuery(this.values.html);
        this.element.html(this.values.html.find('> div'));
      }

      window.wponion_field_reload_all(this.element);
      window.wponion_dependency(this.element);
    }
  }]);

  return _default;
}(_class_module_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/modules/settings.js":
/*!*****************************************!*\
  !*** ./src/js/core/modules/settings.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _class_module_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/module-base */ "./src/js/core/class/module-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Handle WPOnion Settings
 */

var _default =
/*#__PURE__*/
function (_WPOnion_Module) {
  _inherits(_default, _WPOnion_Module);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "module_init",

    /**
     * Inits Module.
     */
    value: function module_init() {
      var _this = this;

      this.ui_menu_handler();

      if (this.element.hasClass('wponion-ajax-save')) {
        this.element.on('click', 'button.wponion-save', function (e) {
          e.preventDefault();
          var $data = jQuery('form.wponion-form').serializeJSON();
          $data.action = 'wponion-ajax';
          $data['wponion-ajax'] = 'save_settings';
          window.wponion_ajax({
            data: $data,
            element_lock: jQuery('button.wponion-save'),
            success: function success(response) {
              var $elem = jQuery(response.form),
                  $settings = window.wponion._.clone(window.wpo_core.option('settings_ajax'));

              window.wpo_core.handle_ajax_response(response);

              _this.element.parent().html($elem.find('.wponion-form').html());

              if (window.wponion._.isObject($settings)) {
                if (false === window.wponion._.isUndefined($settings.toast)) {
                  delete $settings.toast;
                  window.wponion_swal_toast().fire($settings);
                } else {
                  window.swal.fire(window.wponion._.merge({
                    type: 'success'
                  }, $settings));
                }
              } else {
                window.swal.fire({
                  type: 'success',
                  title: $settings
                });
              }

              var $elm = jQuery('.wponion-framework');
              window.wponion_validator();
              window.wponion_field_reload_all($elm);
              window.wponion_init_theme($elm);
              window.wponion_dependency($elm);
            },
            error: function error() {
              return _this.element.parent().submit();
            }
          }).send();
        });
      }
    }
  }]);

  return _default;
}(_class_module_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/modules/system-info.js":
/*!********************************************!*\
  !*** ./src/js/core/modules/system-info.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  jQuery('body').on('click', '.wponion-system-report-email', function () {
    var $arg = window.wpo_core.js_func(window.wpo_core.windowArgs('wponionsysinfo'));

    $arg.preConfirm = function () {
      var $json = jQuery('#wponion-sysinfo-popup-emailer :input').serializeJSON();
      $json.action = 'wponion-ajax';
      $json['wponion-ajax'] = 'sysinfo_emailer';
      $json.sysinfo = jQuery('div#sysreport > textarea').html();
      return new Promise(function (resolve, reject) {
        return window.wponion_ajax({
          data: $json,
          success: function success() {
            window.swal.fire({
              type: 'success',
              text: window.wpo_core.txt('email_sent')
            });
            resolve();
          },
          error: function error(res) {
            window.wponion_error_swal(res).fire();
            reject();
          }
        }).send();
      })["catch"](function () {
        return false;
      });
    };

    window.swal.fire($arg);
  });
});

/***/ }),

/***/ "./src/js/core/modules/wp-pointers.js":
/*!********************************************!*\
  !*** ./src/js/core/modules/wp-pointers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var $pointers_group = window.wpo_core.windowArgs('wp_pointers', false);

  if ($pointers_group) {
    var _loop = function _loop($group_id) {
      if (!$pointers_group.hasOwnProperty($group_id)) {
        return "continue";
      }

      var _loop2 = function _loop2($pointer_key) {
        if (!$pointers_group[$group_id].hasOwnProperty($pointer_key)) {
          return "continue";
        }

        var $pointer = $pointers_group[$group_id][$pointer_key];
        jQuery($pointer.selector).WPOnion_onAvailable(function () {
          if (!$pointer.show) {
            $pointer.show = 'open';
          }

          var $handler = {
            content: '<h3>' + $pointer.title + '</h3><p>' + $pointer.text + '</p>',
            pointerWidth: parseInt($pointer.width),
            pointerClass: 'wp-pointer pointerplus' + $pointer["class"],
            position: {
              edge: $pointer.edge,
              align: $pointer.align
            },
            close: function close() {
              return jQuery.post(window.ajaxurl, {
                pointer: $pointer_key,
                action: 'dismiss-wp-pointer'
              });
            }
          };

          $handler.buttons = function (event, t) {
            var $button;

            if ($pointer.jsnext) {
              var jsnext = new Function('t', '$', $pointer.jsnext);
              return jsnext(t, jQuery);
            } else if ($pointer.next) {
              $button = jQuery('<a id="pointer-close" class="button action">Next</a>');
              $button.bind('click.pointer', function () {
                t.element.pointer('close');
                var $next = $pointers_group[$group_id][$pointer.next];

                if (false === $next.parent) {
                  jQuery($next.selector).pointer('open');
                } else if (false === window.wponion._.isUndefined($next.instance)) {
                  jQuery($next.selector).pointer($next.instance).pointer('open');
                }

                if ($next.icon_class !== '') {
                  jQuery('.pp-' + $pointer.next + ' .pp-pointer-content h3').addClass('dashicons-before').addClass($next.icon_class);
                }
              });
              return $button;
            } else {
              var close = 'Dismiss',
                  button = jQuery('<a class="close" href="#">' + close + '</a>');
              return button.bind('click.pointer', function (e) {
                e.preventDefault();
                t.element.pointer('close');
              });
            }
          };

          if (false === $pointer.parent) {
            jQuery($pointer.selector).pointer($handler).pointer($pointer.show);
            $handler = null;
          } else {
            $pointers_group[$group_id][$pointer_key].instance = $handler;
          }
        });
      };

      for (var $pointer_key in $pointers_group[$group_id]) {
        var _ret2 = _loop2($pointer_key);

        if (_ret2 === "continue") continue;
      }
    };

    for (var $group_id in $pointers_group) {
      var _ret = _loop($group_id);

      if (_ret === "continue") continue;
    }
    /*for( let $id in $pointers_group ) {
    	if( $pointers_group.hasOwnProperty( $id ) ) {
    		for( let $pid in $pointers_group[ $id ] ) {
    			if( $pointers_group[ $id ].hasOwnProperty( $pid ) ) {
    				let $pointer = $pointers_group[ $id ][ $pid ];
    				if( $pointers_group[ $id ][ $pointer.next ] ) {
    					//	jQuery( $pointers_group[ $id ][ $pointer.next ].selector ).pointer( 'close' );
    				}
    			}
    		}
    	}
    }*/

  }
});

/***/ }),

/***/ "./src/js/core/plugins/ajaxer.js":
/*!***************************************!*\
  !*** ./src/js/core/plugins/ajaxer.js ***!
  \***************************************/
/*! exports provided: WPOnion_Ajaxer, init_ajaxer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WPOnion_Ajaxer", function() { return WPOnion_Ajaxer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_ajaxer", function() { return init_ajaxer; });
/* harmony import */ var vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");
/* harmony import */ var wordpress_js_ports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wordpress-js-ports */ "./node_modules/wordpress-js-ports/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Ajax Handler.
 */

var WPOnion_Ajaxer =
/*#__PURE__*/
function () {
  /**
   *
   * @param $arg
   */
  function WPOnion_Ajaxer($arg) {
    _classCallCheck(this, WPOnion_Ajaxer);

    this["default"] = {
      type: 'POST',
      url: window.wponion._.isUndefined(window.ajaxurl) ? window.ajaxurl : false,
      data: {},
      success: false,
      error: false,
      always: false,
      action: false
    };
    this.default_config = {
      button_lock: false,
      loading_text: window.wpo_core.txt('processing'),
      response_element: false,
      element_lock: false,
      blockUI: {
        message: false,
        overlayCSS: {
          background: '#000',
          opacity: 0.7
        }
      },
      spinner: 'spinner is-active'
    };
    this.all_default = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_args"])(this.default_config, this["default"]);
    this.config = {};
    this.run_config = {};
    var $config = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_args"])($arg, this.all_default, false);

    for (var $id in this.default_config) {
      if (this.default_config.hasOwnProperty($id)) {
        if (false === window.wponion._.isUndefined($config[$id])) {
          this.run_config[$id] = $config[$id];
          delete $config[$id];
        }

        if (false === window.wponion._.isUndefined($arg[$id])) {
          this.run_config[$id] = $arg[$id];
        }
      }
    }

    this.config = $config;
  }
  /**
   * Creates A Callable Callback function based on the code data.
   *
   * @param $code
   * @param $args
   */


  _createClass(WPOnion_Ajaxer, [{
    key: "create_function",
    value: function create_function() {
      var $code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return this.single_callback(Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["create_function"])($args, $code));
    }
    /**
     * Validates & Triggers A Single Callback Function.
     * @param $callback
     */

  }, {
    key: "single_callback",
    value: function single_callback($callback) {
      if (window.wponion._.isFunction($callback)) {
        Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func"])($callback);
      } else if (window.wponion._.isString($callback) && false !== Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["function_exists"])($callback)) {
        Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func"])($callback);
      } else if (window.wponion._.isString($callback)) {
        this.create_function($callback);
      } else if (window.wponion._.isObject($callback)) {
        for (var $key in $callback) {
          if ($callback.hasOwnProperty($key)) {
            this.single_callback($callback[$key]);
          }
        }
      }
    }
    /**
     * Handles An Array of Callable Ajax Functions.
     * @param data
     * @returns {*}
     */

  }, {
    key: "handle_callbacks",
    value: function handle_callbacks(data) {
      if (window.wponion._.isObject(data)) {
        if (false === window.wponion._.isUndefined(data.callback)) {
          var $callbacks = data.callback;

          if (false !== window.wponion._.isString($callbacks)) {
            this.single_callback($callbacks);
          } else if (false !== window.wponion._.isObject($callbacks)) {
            for (var $key in $callbacks) {
              if ($callbacks.hasOwnProperty($key)) {
                this.single_callback($callbacks[$key]);
              }
            }
          }

          delete data.callback;
        }
      }

      return data;
    }
    /**
     * Handles Response Element.
     * @param data
     */

  }, {
    key: "handle_response",
    value: function handle_response() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (false !== this.run_config.response_element) {
        var $elem = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["to_jquery"])(this.run_config.response_element);

        if ($elem.length > 0) {
          if (false === window.wponion._.isUndefined(data.msg) && window.wponion._.isString(data.msg)) {
            $elem.html(data.msg);
          } else if (false === window.wponion._.isUndefined(data.html) && window.wponion._.isString(data.html)) {
            $elem.html(data.html);
          } else if (window.wponion._.isString(data)) {
            $elem.html(data);
          }
        }
      }
    }
    /**
     * Triggered On Ajax onSuccess
     * @param data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      this.handle_callbacks(data);
      this.handle_response(data);

      if (false !== this.config.success) {
        if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])(this.config.success)) {
          Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func_array"])(this.config.success, [data, this]);
        }
      }
    }
    /**
     * Triggered On Ajax onError
     * @param data
     */

  }, {
    key: "onError",
    value: function onError(data) {
      this.handle_callbacks(data);
      this.handle_response(data);

      if (false !== this.config.error) {
        if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])(this.config.error)) {
          Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func_array"])(this.config.error, [data, this]);
        }
      }
    }
    /**
     * Triggered On Ajax onAlways
     * @param data
     */

  }, {
    key: "onAlways",
    value: function onAlways(data) {
      this.unlock();

      if (false !== this.config.always) {
        if (Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_callable"])(this.config.always)) {
          Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["call_user_func_array"])(this.config.always, [data, this]);
        }
      }
    }
    /**
     * Trigger An Ajax Request.
     * @param $arg
     * @returns {*}
     */

  }, {
    key: "send",
    value: function send() {
      var _this = this;

      var $arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (false === $arg) {
        this.lock();
        var $default_ajaxurl = window.wpo_core.option('ajaxurl', window.ajaxurl);

        var _$config = window.wponion._.clone(this.config);

        if (false !== _$config.url) {
          var $url_params = {};

          if (false !== Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["is_url"])(_$config.url)) {
            $url_params = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["url_params"])(_$config.url);

            for (var $key in $url_params) {
              if ($url_params.hasOwnProperty($key)) {
                _$config.url = Object(wordpress_js_ports__WEBPACK_IMPORTED_MODULE_1__["remove_query_arg"])($key, _$config.url);
              }
            }

            _$config.data = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_args"])(_$config.data, $url_params);
          } else {
            var $url_data = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_url"])(_$config.url);

            if (typeof $url_data.query !== 'undefined') {
              Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_str"])($url_data.query, $url_params);
              _$config.url = $default_ajaxurl;
              _$config.data = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_args"])(_$config.data, $url_params);
            } else {
              _$config.url = $default_ajaxurl;
            }
          }
        } else {
          _$config.url = $default_ajaxurl;
        }

        if (false !== _$config.action) {
          _$config.data.action = _$config.action;
          delete _$config.action;
        }

        if (typeof _$config.success !== 'undefined') {
          delete _$config.success;
        }

        if (typeof _$config.always !== 'undefined') {
          delete _$config.always;
        }

        if (typeof _$config.error !== 'undefined') {
          delete _$config.error;
        }

        this.instance = window.wp.ajax.send(_$config);
        this.instance.done(function (data) {
          return _this.onSuccess(data);
        });
        this.instance.fail(function (data) {
          return _this.onError(data);
        });
        this.instance.always(function (data) {
          return _this.onAlways(data);
        });
        return this.instance;
      } else {
        var $_arg = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_args"])(this.config, this.run_config);
        $_arg = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["parse_args"])($arg, $_arg, true);
        var $instance = new WPOnion_Ajaxer($_arg);
        return $instance.send();
      }
    }
    /**
     * Lock
     */

  }, {
    key: "lock",
    value: function lock() {
      this.button_lock_unlock(false);
      this.element_lock_unlock(false);
    }
    /**
     * UnLock
     */

  }, {
    key: "unlock",
    value: function unlock() {
      this.button_lock_unlock(true);
      this.element_lock_unlock(true);
    }
    /**
     * Unblock / Block An Element
     * @param $unlock
     */

  }, {
    key: "element_lock_unlock",
    value: function element_lock_unlock() {
      var $unlock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (false !== this.run_config.element_lock) {
        var $elem = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["to_jquery"])(this.run_config.element_lock);

        if ($elem.length > 0) {
          if (false === $unlock) {
            $elem.block(this.run_config.blockUI);
          } else {
            $elem.unblock();
          }
        }
      }
    }
    /**
     * Unblock / Block A Button.
     * @param $unlock
     */

  }, {
    key: "button_lock_unlock",
    value: function button_lock_unlock() {
      var $unlock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (false !== this.run_config.button_lock) {
        var $elem = Object(vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_0__["to_jquery"])(this.run_config.button_lock);

        if ($elem.length > 0) {
          if (false === $unlock) {
            $elem.wponion_button({
              loadingText: this.run_config.loading_text,
              spinner: this.run_config.spinner
            }).wponion_button('loading');
          } else {
            $elem.wponion_button('reset');
          }
        }
      }
    }
  }]);

  return WPOnion_Ajaxer;
}();
/**
 * WPOnion Quick Ajaxer.
 */

function init_ajaxer() {
  var $class = '[data-wponion-inline-ajax], .wponion-ajax, .wponion-ajax-get, .wponion-ajax-post, .wponion-inline-ajax, .wponion-inline-ajax-get, .wponion-inline-ajax-post';
  jQuery(document).on('click', $class, function (e) {
    var $elem = jQuery(e.currentTarget),
        $_data = $elem.data(),
        $args = {
      url: false
    };

    if (false === window.wponion._.isUndefined($elem.attr('data-wponion-inline-ajax'))) {
      var $fid1 = $elem.attr('data-wponion-inline-ajax');
      var $fid2 = $elem.attr('id');
      var $js_id = $wponion.jsid($elem);
      var $_args = [];
      $_args.push($wponion.fieldArgs($js_id, false));
      $_args.push($wponion.fieldArgs($fid1, false));
      $_args.push($wponion.fieldArgs($fid2, false));

      for (var $k in $_args) {
        if ($_args.hasOwnProperty($k) && false !== $_args[$k] && window.wponion._.isObject($_args[$k])) {
          if ($_args[$k].hasOwnProperty('inline_ajax') && false === window.wponion._.isUndefined($_args[$k].inline_ajax) && window.wponion._.isObject($_args[$k].inline_ajax)) {
            $args = $_args[$k].inline_ajax;
          }
        }
      }
    } else {
      if ($elem.hasClass('wponion-ajax-get') || $elem.hasClass('wponion-inline-ajax-get')) {
        $args.type = 'GET';
      } else if ($elem.hasClass('wponion-ajax-post') || $elem.hasClass('wponion-inline-ajax-post')) {
        $args.type = 'POST';
      } else if ($elem.hasClass('wponion-ajax') || $elem.hasClass('wponion-inline-ajax') && typeof $_data.type !== 'undefined') {
        $args.type = $_data.type;
      }

      if (false === window.wponion._.isUndefined($_data.url)) {
        $args.url = $_data.url;
      } else if (false === window.wponion._.isUndefined($_data.href)) {
        $args.url = $_data.href;
      } else if ($elem.attr('href')) {
        $args.url = $elem.attr('href');
      }

      if (false === window.wponion._.isUndefined($_data['ajax-data'])) {
        $args.data = $_data['ajax-data'];
      }

      if (false === window.wponion._.isUndefined($_data.action)) {
        $args.action = $_data.action;
      }
    }

    $args.button_lock = $elem;
    window.wponion_ajax(window.wpo_core.js_func($args)).send();
  });
}

/***/ }),

/***/ "./src/js/core/plugins/validator.js":
/*!******************************************!*\
  !*** ./src/js/core/plugins/validator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPOnion_Validator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * WPOnion Field Validator Helper Class
 */
var WPOnion_Validator =
/*#__PURE__*/
function () {
  /**
   * Helper Class For WPOnion JS Field Validation.
   */
  function WPOnion_Validator() {
    var _this = this;

    var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, WPOnion_Validator);

    this.form = false === form ? WPOnion_Validator.get_form() : form;
    this.rules = {
      invalidHandler: function invalidHandler() {
        jQuery('#publish').removeClass('button-primary-disabled');
        jQuery('#ajax-loading').attr('style', '');

        _this.form.siblings('#wponion-error-messages').remove();

        _this.form.before('<div id="wponion-error-messages" class="error"><p>' + window.wpo_core.txt('validation_summary') + '</p></div>');
      },
      ignore: '.wponion-dependent,.wponion-validation-ignore',
      errorPlacement: function errorPlacement(error, element) {
        element.trigger('wponion_js_validation_message', {
          error: error,
          element: element
        });
      },
      errorClass: 'wponion-error',
      errorElement: 'p'
    };

    if (this.form) {
      this.form.validate(this.rules);
    }
  }
  /**
   * Finds & Returns form Data.
   * @returns {*}
   */


  _createClass(WPOnion_Validator, null, [{
    key: "get_form",
    value: function get_form() {
      if (jQuery('form.wponion-form').length > 0) {
        return jQuery('form.wponion-form');
      }

      if (jQuery('form.wponion-wp-modal-form ').length > 0) {
        return jQuery('form.wponion-wp-modal-form ');
      }

      if (jQuery('form.customize-controls').length > 0) {
        return jQuery('form.customize-controls');
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

      return false;
    }
  }]);

  return WPOnion_Validator;
}();



/***/ }),

/***/ "./src/js/core/plugins/wpmodel.js":
/*!****************************************!*\
  !*** ./src/js/core/plugins/wpmodel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Events : before_close, after_close, page_open_{page}, section_open_{page}_{section}
 */
/* harmony default export */ __webpack_exports__["default"] = (Backbone.View.extend({
  // Stores All Templates HTML.
  templates: {},
  // Registers Events.
  events: {
    'click .media-modal-close': 'closeModal',
    'click button#wponion-close-modal': 'closeModal',
    'click button#wponion-save-modal': 'saveModal',
    'click .media-menu a': 'handle_main_menu',
    'click .media-router a': 'handle_tab_click'
  },
  // Stores Active Page.
  active_page: null,
  // Stores Active Section.
  active_section: null,

  /**
   * Inits Modal Class.
   * @param $modal_options
   * @param $html
   */
  initialize: function initialize() {
    var $modal_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var $html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.options = _.extend({
      size: 'small',
      // xsmall , small , medium , large , full , default
      save_btn_label: 'Save',
      close_btn_label: 'Close'
    }, $modal_options);
    this.modal_html = $html;
    'use strict';

    _.bindAll(this, 'render', 'preserveFocus', 'closeModal', 'saveModal');
  },

  /**
   * Opens Modal.
   */
  open: function open() {
    this.trigger('before_open', this.$el);
    this.init_templates();
    this.render();
    this.trigger('open', this.$el);
  },

  /**
   * Inits Templates.
   */
  init_templates: function init_templates() {
    var $modal = window.wpo_core.option('modal');
    this.templates.frame_menu_item = window.wpo_core.template($modal.frame_menu_item);
    this.templates.router_menu_item = window.wpo_core.template($modal.router_menu_item);
    this.templates.window = window.wpo_core.template($modal.html);
    this.templates.page_content = window.wpo_core.template($modal.page_content);
    this.templates.section_content = window.wpo_core.template($modal.section_content);
  },

  /**
   * Returns Container Defaults.
   * @return {{sidebar: boolean, html: boolean, id: boolean, title: boolean}}
   */
  container_defaults: function container_defaults() {
    return {
      id: false,
      title: false,
      html: false,
      sidebar: false
    };
  },

  /**
   * Activates First Menu.
   */
  activate_main_menu: function activate_main_menu() {
    var $sub_menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (false === $sub_menu) {
      if (this.$el.find('.media-menu > .media-menu-item.active').length === 0) {
        this.$el.find('.media-menu > .media-menu-item:first-child').click();
      }
    } else {
      if ($sub_menu.find('.media-frame-router .media-router > .active').length === 0) {
        $sub_menu.find('.media-frame-router .media-router > a:first-child').click();
      }
    }
  },

  /**
   * Renders Main HTML.
   */
  render: function render() {
    this.$el.append(this.templates.window({
      save_btn_label: this.options.save_btn_label,
      close_btn_label: this.options.close_btn_label
    }));
    this.trigger('before_render', this.$el);
    this.$wpomodal = this.$el.find('.wponion-wp-modal');

    if (!window.wponion._.isUndefined(this.modal_html.html) || !window.wponion._.isUndefined(this.modal_html.sections)) {
      this.render_single();
    } else {
      this.render_containers();
      this.activate_main_menu();
    }

    this.$wpomodal.addClass('wponion-wp-modal-' + this.options.size);
    jQuery(document).on('focusin', this.preserveFocus);
    jQuery('body').css({
      'overflow': 'hidden'
    }).append(this.$el); //this.$el.focus();
  },

  /**
   * Renders Single Layout View.
   */
  render_single: function render_single() {
    this.active_page = this.modal_html.id;
    this.$wpomodal.addClass('wponion-single-modal-view');
    this.$el.find('.media-frame-menu').remove();
    var $_content = this.render_single_content(false, false, this.templates.page_content);
    this.$el.find('.wponion-modal-content-container > div').removeClass('hidden');

    if (window.wponion._.isUndefined(this.modal_html.sections)) {
      jQuery(this.$el).find('.media-frame').addClass('hide-router');
    } else {
      this.render_sub_containers(this.modal_html, $_content);
      this.activate_main_menu(this.$el);
    }
  },

  /**
   * Renders Single Content.
   * @param $container
   * @param $appendTo
   * @param $template
   * @param $parent_id
   * @return {n.fn.init|jQuery|HTMLElement}
   */
  render_single_content: function render_single_content() {
    var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var $appendTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $template = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var $parent_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    $container = false === $container ? this.modal_html : $container;
    $container = _.extend(this.container_defaults(), $container);
    var $_content = jQuery($template({
      id: $parent_id + $container.id,
      title: $container.title
    }));
    $_content.find('.media-sidebar').addClass('hidden');

    if (!$container.sections) {
      $_content.find('.media-content').html($container.html);

      if (false !== $container.sidebar && window.wponion._.isString($container.sidebar)) {
        $_content.find('.media-sidebar').html($container.sidebar).removeClass('hidden');
        $_content.find('.media-content').addClass('with-sidebar');
      }
    }

    $_content.find('.media-frame-title').addClass('hidden');

    if (false !== $container.title && window.wponion._.isString($container.title)) {
      $_content.find('.media-frame-title').removeClass('hidden');
    }

    var $elem = $appendTo ? $appendTo : this.$el.find('.wponion-modal-content-container');
    $elem.append($_content);
    return $_content;
  },

  /**
   * Renders Sub Containers.
   * @param $container
   * @param $parent_content
   */
  render_sub_containers: function render_sub_containers($container, $parent_content) {
    $parent_content.find('.media-frame-content').html(' ');

    for (var $s in $container.sections) {
      if ($container.sections.hasOwnProperty($s)) {
        var $sub_container = _.extend(this.container_defaults(), $container.sections[$s]);

        this.render_section_menu($sub_container, $parent_content);
        this.render_single_content($sub_container, $parent_content.find('.media-frame-content'), this.templates.section_content, $container.id + '_');
      }
    }
  },

  /**
   * Renders Base Containers.
   */
  render_containers: function render_containers() {
    for (var $i in this.modal_html) {
      if (this.modal_html.hasOwnProperty($i)) {
        var $container = _.extend(this.container_defaults(), this.modal_html[$i]);

        this.render_left_menu($container);

        if (false !== $container.id) {
          var $content = this.render_single_content($container, false, this.templates.page_content);

          if (!$container.sections) {
            $content.find('.media-frame-router').addClass('hidden');
          } else {
            this.render_sub_containers($container, $content);
          }
        }
      }
    }
  },

  /**
   * Handles Left Menu Click.
   * @param e
   */
  handle_main_menu: function handle_main_menu(e) {
    e.preventDefault();
    var $target = jQuery(e.target);
    jQuery(this.$el).find('.media-menu a.active').removeClass('active');
    $target.addClass('active');
    var $show_target = jQuery(this.$el).find('.wponion-modal-content-container > div#' + $target.attr('href'));
    jQuery(this.$el).find('.wponion-modal-content-container > div').addClass('hidden');
    $show_target.removeClass('hidden');

    if ($show_target.find('.media-frame-router').hasClass('hidden')) {
      jQuery(this.$el).find('.media-frame').addClass('hide-router');
    } else {
      jQuery(this.$el).find('.media-frame').removeClass('hide-router');
    }

    this.active_page = $target.attr('href');
    this.active_section = null;
    this.trigger('page_open_' + this.active_page, this.$el);
    this.activate_main_menu($show_target);
  },

  /**
   * Handles Section Click.
   * @param e
   */
  handle_tab_click: function handle_tab_click(e) {
    e.preventDefault();
    var $target = jQuery(e.target);
    this.active_section = $target.attr('href');
    var $base = jQuery(this.$el).find('.wponion-modal-content-container > #' + this.active_page);
    $target.parent().find('.active').removeClass('active');
    $target.addClass('active');
    $base.find('.wponion-section-modal-content').hide();
    $base.find('#' + this.active_page + '_' + this.active_section).show();
    this.trigger('section_open_' + this.active_page + '_' + this.active_section, this.$el);
  },

  /**
   * Renders LeftSide Menu.
   * @param $p
   */
  render_left_menu: function render_left_menu($p) {
    if (false === window.wponion._.isUndefined($p.separator) && true === $p.separator) {
      this.$el.find('.media-menu').append('<a class="separator"></a>');
    } else {
      this.$el.find('.media-menu').append(this.templates.frame_menu_item({
        url: $p.id,
        name: $p.title
      }));
    }
  },

  /**
   * Renders Section Menu.
   * @param $p
   * @param $appendTo
   */
  render_section_menu: function render_section_menu($p, $appendTo) {
    $appendTo.find('.media-router').append(this.templates.router_menu_item({
      url: $p.id,
      name: $p.title
    }));
  },

  /**
   * Ensures that keyboard focus remains within the Modal dialog.
   * @param e {object} A jQuery-normalized event object.
   */
  preserveFocus: function preserveFocus(e) {
    'use strict';

    if (this.$el[0] !== e.target && !this.$el.has(e.target).length) {
      this.$el.focus();
    }
  },

  /**
   * Closes the modal and cleans up after the instance.
   * @param e {object} A jQuery-normalized event object.
   */
  closeModal: function closeModal(e) {
    'use strict';

    this.trigger('before_close', this.$el);

    if (typeof e !== 'undefined') {
      e.preventDefault();
    }

    this.undelegateEvents();
    jQuery(document).off('focusin');
    jQuery('body').css({
      'overflow': 'auto'
    });
    this.remove();
    this.trigger('after_close', this.$el);
  },

  /**
   * Responds to the btn-ok.click event
   * @param e {object} A jQuery-normalized event object.
   * @todo You should make this your own.
   */
  saveModal: function saveModal(e) {
    'use strict';

    this.trigger('save_modal', this.$el); //this.closeModal( e );
  }
}));

/***/ }),

/***/ "./src/js/core/plugins/wpo-buttons.js":
/*!********************************************!*\
  !*** ./src/js/core/plugins/wpo-buttons.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPOButton; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WPOButton =
/*#__PURE__*/
function () {
  function WPOButton(element, options) {
    _classCallCheck(this, WPOButton);

    this.DEFAULTS = {
      loadingText: window.wpo_core.txt('processing', 'Loading ...'),
      spinner: 'spinner is-active'
    };
    this.$element = jQuery(element);
    this.options = jQuery.extend({}, this.DEFAULTS, options);
    this.isLoading = false;
  }

  _createClass(WPOButton, [{
    key: "setState",
    value: function setState(state) {
      var d = 'disabled',
          $el = this.$element,
          val = $el.is('input') ? 'val' : 'html',
          data = $el.data();
      state += 'Text';

      if (data.resetText == null) {
        $el.data('resetText', $el[val]());
      }

      setTimeout(jQuery.proxy(function () {
        var $state = false !== window.wponion._.isUndefined($el.data(state)) ? this.options[state] : $el.data(state);

        if ('html' === val && 'loadingText' === state) {
          $state += ' ' + '<span class="' + this.options.spinner + ' wpo-spinner"></span>';
        }

        $el[val]($state);

        if ('loadingText' === state) {
          this.isLoading = true;
          $el.addClass(d).attr(d, d).prop(d, true);
        } else if (this.isLoading) {
          this.isLoading = false;
          $el.removeClass(d).removeAttr(d).prop(d, false);
        }

        if ('val' === val) {
          if (true === this.isLoading) {
            $el.parent().append(jQuery('<span class="' + this.options.spinner + ' wpo-spinner"></span>'));
          } else {
            $el.parent().find('.wpo-spinner').remove();
          }
        }
      }, this), 0);
    }
  }]);

  return WPOButton;
}();



/***/ }),

/***/ "./src/js/core/plugins/wpo-cloner.js":
/*!*******************************************!*\
  !*** ./src/js/core/plugins/wpo-cloner.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var $elem = jQuery(this),
      $args = jQuery.extend({
    limit: false,
    add_btn: false,
    remove_btn: false,
    clone_elem: false,
    template: false,
    sortable: false,
    onLimitReached: false,
    templateBeforeRender: false,
    templateAfterRender: false,
    onRemove: false,
    onRemoveBefore: false,
    onRemoveAfter: false,
    show_animation: false,
    hide_animation: false
  }, options),
      $removeFunc = function $removeFunc() {
    if (jQuery(this).hasClass('removing')) {
      return;
    }

    jQuery(this).addClass('removing');
    var $count = parseInt($elem.attr('data-wponion-clone-count')) - 1;
    $elem.attr('data-wponion-clone-count', $count);

    if (false !== $args.onRemoveBefore) {
      $args.onRemoveBefore(jQuery(this));
    }

    if (false !== $args.onRemove) {
      $args.onRemove(jQuery(this));
    } else {
      if (false !== $args.hide_animation) {
        jQuery(this).parent().parent().animateCss($args.hide_animation, function ($elem) {
          $elem.remove();
        });
      } else {
        jQuery(this).parent().parent().remove();
      }
    }

    if (false !== $args.onRemoveAfter) {
      $args.onRemoveAfter(jQuery(this));
    }
  };

  $args.add_btn = window.wponion._.isString($args.add_btn) ? $elem.find($args.add_btn) : $args.add_btn;
  $args.remove_btn_jquery = window.wponion._.isString($args.remove_btn) ? $elem.find($args.remove_btn) : $args.remove_btn_jquery;
  $args.remove_btn_jquery.on('click', $removeFunc);
  $args.add_btn.on('click', function () {
    var $limit = parseInt($elem.attr('data-wponion-clone-count')),
        $template = JSON.parse(JSON.stringify($args.template));

    if ($args.limit > 0) {
      if ($limit === $args.limit || $limit >= $args.limit) {
        if (false !== $args.onLimitReached) {
          $args.onLimitReached();
        }

        return false;
      }
    }

    $limit = $limit + 1;
    $elem.attr('data-wponion-clone-count', $limit);
    $template = $template.replace(/{wponionCloneID}/g, $limit);

    if (false !== $args.templateBeforeRender) {
      $template = $args.templateBeforeRender($template, $limit, this);
    }

    $template = jQuery($template);

    if (false !== $args.show_animation) {
      $template.animateCss($args.show_animation);
    }

    $elem.append($template);

    if (false !== $args.templateAfterRender) {
      $args.templateAfterRender($elem, $limit, this);
    }

    $elem.find($args.remove_btn).on('click', $removeFunc);
  });

  if ($args.sortable !== false && window.wponion_is_library_exists('sortable', 'jquery')) {
    $elem.sortable(jQuery.extend({
      cursor: 'move',
      axis: 'y',
      scrollSensitivity: 40,
      forcePlaceholderSize: true,
      helper: 'clone',
      opacity: 0.65
    }, $args.sortable));
  }
});

/***/ }),

/***/ "./src/js/core/themes.js":
/*!*******************************!*\
  !*** ./src/js/core/themes.js ***!
  \*******************************/
/*! exports provided: wponion_register_themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wponion_register_themes", function() { return wponion_register_themes; });
/* harmony import */ var _themes_wp_wc_wp_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes/wp-wc-wp-lite */ "./src/js/core/themes/wp-wc-wp-lite.js");
/* harmony import */ var _themes_wp_modern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes/wp-modern */ "./src/js/core/themes/wp-modern.js");


/**
 * Below Function Registers All Prepacked Themes.
 */

function wponion_register_themes() {
  /**
   * Inits WP / WC / WP_Lite Theme
   * @param $element
   * @param $module
   * @param $unique
   * @param $theme
   * @return {WP_WC_WP_Lite}
   */
  var wp_wc_wp_lite_theme = function wp_wc_wp_lite_theme($element, $module, $unique, $theme) {
    return new _themes_wp_wc_wp_lite__WEBPACK_IMPORTED_MODULE_0__["default"]($element, $module, $unique, $theme);
  };
  /**
   * Inits Modern Theme
   * @param $element
   * @param $module
   * @param $unique
   * @param $theme
   * @return {WP_Modern}
   */


  var wp_modern_theme = function wp_modern_theme($element, $module, $unique, $theme) {
    return new _themes_wp_modern__WEBPACK_IMPORTED_MODULE_1__["default"]($element, $module, $unique, $theme);
  };

  window.wponion_register_theme('wp', wp_wc_wp_lite_theme);
  window.wponion_register_theme('wc', wp_wc_wp_lite_theme);
  window.wponion_register_theme('wp_lite', wp_wc_wp_lite_theme);
  window.wponion_register_theme('wp_modern', wp_modern_theme);
}

/***/ }),

/***/ "./src/js/core/themes/wp-modern.js":
/*!*****************************************!*\
  !*** ./src/js/core/themes/wp-modern.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WP_Modern; });
/* harmony import */ var _class_theme_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/theme-base */ "./src/js/core/class/theme-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WP_Modern =
/*#__PURE__*/
function (_WPOnion_Theme_Base) {
  _inherits(WP_Modern, _WPOnion_Theme_Base);

  function WP_Modern() {
    _classCallCheck(this, WP_Modern);

    return _possibleConstructorReturn(this, _getPrototypeOf(WP_Modern).apply(this, arguments));
  }

  _createClass(WP_Modern, [{
    key: "init",
    value: function init() {
      if ('settings' === this.module) {
        this.settings_init_sticky_header();
        this.settings_init_search_input();
      }
    }
  }, {
    key: "settings_init_sticky_header",
    value: function settings_init_sticky_header() {
      if (this.element.find('.header-sticky').length === 1) {
        var $this = this.element.find('.header-sticky'),
            $window = jQuery(window),
            $inner = $this.find('> .inner-container'),
            padding = parseInt($inner.css('padding-left')) + parseInt($inner.css('padding-right')),
            offset = 32,
            scrollTop = 0,
            ticking = false,
            stickyUpdate = function stickyUpdate() {
          var offsetTop = $this.offset().top,
              stickyTop = Math.max(offset, offsetTop - scrollTop),
              winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

          if (stickyTop <= offset && winWidth > 782) {
            $inner.css({
              width: $this.outerWidth() - padding
            });
            $this.css({
              height: $this.outerHeight()
            }).addClass('header-sticky-in');
          } else {
            $inner.removeAttr('style');
            $this.removeAttr('style').removeClass('header-sticky-in');
          }
        },
            requestTick = function requestTick() {
          if (!ticking) {
            requestAnimationFrame(function () {
              stickyUpdate();
              ticking = false;
            });
          }

          ticking = true;
        },
            onSticky = function onSticky() {
          scrollTop = $window.scrollTop();
          requestTick();
        };

        $window.on('scroll resize', onSticky);
        onSticky();
      }
    }
  }, {
    key: "settings_init_search_input",
    value: function settings_init_search_input() {
      var _this = this;

      var $input = this.element.find('.action-search').find('input');
      $input.on('change keyup', function (e) {
        var value = jQuery(e.currentTarget).val(),
            $parent_wraps = _this.element.find('.wponion-container-wraps');

        _this.element.find('.search-no-result').hide();

        if (value.length > 3) {
          _this.element.find('.menu-wrap').addClass('wponion-search-unmatched');

          _this.element.find('.content-outer-wrap').addClass('full-width');

          $parent_wraps.addClass('wponion-search-matched');

          _this.element.find('.wponion-has-callback').addClass('wponion-search-unmatched');

          _this.element.find('.wponion-has-callback').removeClass('wponion-search-matched');

          $parent_wraps.each(function (i, $parent) {
            $parent = jQuery($parent);
            $parent.find('> .wponion-element').addClass('wponion-search-unmatched');
            $parent.find('> .wponion-element').removeClass('wponion-search-matched');
            $parent.find('> .wponion-element').each(function (i, $element) {
              $element = jQuery($element);
              $element.find('.wponion-element-title > h4, .wponion-desc').each(function (i, e) {
                if (_this.is_search_matched(jQuery(e), value)) {
                  $element.addClass('wponion-search-matched');
                  $element.removeClass('wponion-search-unmatched');
                }
              });
            });
          });

          if (_this.element.find('.wponion-element:visible').length === 0) {
            _this.element.find('.search-no-result').show();
          }
        } else {
          _this.element.find('.search-no-result').hide();

          _this.element.find('.wponion-search-unmatched').removeClass('wponion-search-unmatched');

          _this.element.find('.wponion-search-matched').removeClass('wponion-search-matched');

          _this.element.find('.content-outer-wrap').removeClass('full-width');
        }
      });
    }
  }]);

  return WP_Modern;
}(_class_theme_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/core/themes/wp-wc-wp-lite.js":
/*!*********************************************!*\
  !*** ./src/js/core/themes/wp-wc-wp-lite.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WP_WC_WP_Lite; });
/* harmony import */ var _class_theme_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/theme-base */ "./src/js/core/class/theme-base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WP_WC_WP_Lite =
/*#__PURE__*/
function (_WPOnion_Theme_Base) {
  _inherits(WP_WC_WP_Lite, _WPOnion_Theme_Base);

  function WP_WC_WP_Lite() {
    _classCallCheck(this, WP_WC_WP_Lite);

    return _possibleConstructorReturn(this, _getPrototypeOf(WP_WC_WP_Lite).apply(this, arguments));
  }

  _createClass(WP_WC_WP_Lite, [{
    key: "init",
    value: function init() {
      if ('settings' === this.module) {
        this.settings_main_menu();
        this.settings_submenu();
        this.settings_init_search_input();
      }

      if ('metabox' === this.module && 'wp' === this.theme || 'wc' === this.theme) {
        this.settings_main_menu();
        this.settings_submenu();
      }
    }
  }, {
    key: "settings_main_menu",
    value: function settings_main_menu() {
      var _this = this;

      var $elem = this.element.hasClass('wponion-wc-theme') ? '.main-navigation nav a' : '.main-navigation .nav-tab-wrapper a';
      this.element.find($elem).on('click', function (e) {
        e.preventDefault();
        var $elem = jQuery(e.currentTarget);
        var $href = window.wponion.helper.url_params($elem.attr('href'));

        if (false === window.wponion._.isUndefined($href['container-id'])) {
          var $lookup = _this.element.find('div#wponion-tab-' + $href['container-id']);

          if ($lookup.length > 0) {
            _this.element.parent().find('input[name="container-id"]').val($href['container-id']);

            _this.element.find('.wponion-container-wraps').hide();

            $lookup.show();

            if (_this.element.hasClass('wponion-wc-theme')) {
              _this.element.find('nav a.wpo-tab-active').removeClass('wpo-tab-active');

              $elem.addClass('wpo-tab-active');
            } else {
              _this.element.find('nav.nav-tab-wrapper a.nav-tab-active').removeClass('nav-tab-active');

              $elem.addClass('nav-tab-active');
            }

            if ($lookup.find('.wponion-submenus a.current').length === 0) {
              $lookup.find('.wponion-submenus li:first-child a').click();
            } else {
              $lookup.find('.wponion-submenus a.current').click();
            }
          } else if (false === $elem.hasClass('disabled')) {
            window.location.href = $elem.attr('href');
          }
        } else if (false === $elem.hasClass('disabled')) {
          window.location.href = $elem.attr('href');
        }
      });
    }
  }, {
    key: "settings_submenu",
    value: function settings_submenu() {
      var _this2 = this;

      this.element.find('.wponion-submenus a').on('click', function (e) {
        e.preventDefault();
        var $found = false,
            $elem = jQuery(e.currentTarget),
            $href = window.wponion.helper.url_params($elem.attr('href'));

        if (false === window.wponion._.isUndefined($href['container-id'])) {
          var $base_lookup = _this2.element.find('div#wponion-tab-' + $href['container-id']);

          if ($base_lookup.length > 0) {
            if (false === window.wponion._.isUndefined($href['sub-container-id'])) {
              var $lookup = $base_lookup.find('div#wponion-tab-' + $href['container-id'] + '-' + $href['sub-container-id']);

              if ($lookup.length > 0) {
                var $parent = _this2.element.parent();

                $parent.find('input[name="container-id"]').val($href['container-id']);
                $parent.find('input[name="sub-container-id"]').val($href['sub-container-id']);

                _this2.element.find('div#wponion-tab-' + $href['container-id'] + ' .wponion-sub-container-wraps ').hide();

                $lookup.show();
                $base_lookup.find('.wponion-submenus a.current').removeClass('current');
                $elem.addClass('current');
                $found = true;
              }
            }
          }
        }

        if (false === $found && false === $elem.hasClass('disabled')) {
          window.location.href = $elem.attr('href');
        }
      });
    }
  }, {
    key: "settings_init_search_input",
    value: function settings_init_search_input() {
      var _this3 = this;

      var $input = this.element.find('.action-search').find('input');
      $input.on('change keyup', function (e) {
        var value = jQuery(e.currentTarget).val(),
            $parent_wraps = _this3.element.find('.wponion-container-wraps');

        _this3.element.find('.search-no-result').hide();

        if (value.length > 3) {
          _this3.element.find('.wponion-submenus').parent().addClass('wponion-search-unmatched');

          _this3.element.find('.content-outer-wrap').addClass('full-width');

          _this3.element.find('.wponion-has-callback').addClass('wponion-search-unmatched');

          _this3.element.find('.wponion-has-callback').removeClass('wponion-search-matched');

          $parent_wraps.each(function (i, $parent) {
            $parent = jQuery($parent);
            $parent.find('> .wponion-element').addClass('wponion-search-unmatched');
            $parent.find('> .wponion-element').removeClass('wponion-search-matched');
            $parent.find('> .wponion-element').each(function (i, $element) {
              $element = jQuery($element);
              $element.find('.wponion-element-title > h4, .wponion-desc').each(function (i, e) {
                if (_this3.is_search_matched(jQuery(e), value)) {
                  $element.addClass('wponion-search-matched');
                  $element.removeClass('wponion-search-unmatched');
                  $parent.addClass('wponion-search-matched');
                }
              });
            });
          });

          if (_this3.element.find('.wponion-element:visible').length === 0) {
            _this3.element.find('.search-no-result').show();
          }
        } else {
          _this3.element.find('.search-no-result').hide();

          _this3.element.find('.wponion-search-unmatched').removeClass('wponion-search-unmatched');

          _this3.element.find('.wponion-search-matched').removeClass('wponion-search-matched');

          _this3.element.find('.content-outer-wrap').removeClass('full-width');
        }
      });
    }
  }]);

  return WP_WC_WP_Lite;
}(_class_theme_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/wponion-core.js":
/*!********************************!*\
  !*** ./src/js/wponion-core.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/* harmony import */ var vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");
/* harmony import */ var _core_global_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/global-events */ "./src/js/core/global-events.js");
/* harmony import */ var _core_module_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/module-handler */ "./src/js/core/module-handler.js");
/* harmony import */ var _core_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/themes */ "./src/js/core/themes.js");
/* harmony import */ var _core_fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/fields */ "./src/js/core/fields.js");
/* harmony import */ var _core_functions_jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/functions/jquery */ "./src/js/core/functions/jquery.js");
/* harmony import */ var _core_functions_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/functions/core */ "./src/js/core/functions/core.js");
/* harmony import */ var _core_functions_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/functions/themes */ "./src/js/core/functions/themes.js");
/* harmony import */ var _core_functions_fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/functions/fields */ "./src/js/core/functions/fields.js");
/* harmony import */ var _core_functions_plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/functions/plugins */ "./src/js/core/functions/plugins.js");
/* harmony import */ var _core_functions_utilites__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/functions/utilites */ "./src/js/core/functions/utilites.js");
/* harmony import */ var _core_plugins_wpo_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/plugins/wpo-buttons */ "./src/js/core/plugins/wpo-buttons.js");
/* harmony import */ var _core_plugins_ajaxer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/plugins/ajaxer */ "./src/js/core/plugins/ajaxer.js");
/* harmony import */ var _core_plugins_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/plugins/validator */ "./src/js/core/plugins/validator.js");
/* harmony import */ var _core_class_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/class/core */ "./src/js/core/class/core.js");
/* harmony import */ var _core_class_debug__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/class/debug */ "./src/js/core/class/debug.js");
/* harmony import */ var _core_class_base__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/class/base */ "./src/js/core/class/base.js");
/* harmony import */ var _core_class_theme_base__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/class/theme-base */ "./src/js/core/class/theme-base.js");
/* harmony import */ var _core_class_module_base__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/class/module-base */ "./src/js/core/class/module-base.js");
/* harmony import */ var _core_class_field_base__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/class/field-base */ "./src/js/core/class/field-base.js");
/* harmony import */ var _core_class_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/class/field */ "./src/js/core/class/field.js");
/* harmony import */ var _core_class_dependency__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/class/dependency */ "./src/js/core/class/dependency.js");
/**
 * 3rd Party Library
 */


/**
 * WPOnion Helpers
 */

 //import instance_handler from './core/instance-handler';




/**
 * WPOnion Functions
 */







/**
 * WPOnion Plugins
 */




/**
 * WPOnion Core Classes
 */










(function (window, document, wp, $) {
  if (typeof window.wponion === 'undefined') {
    // Register Core Related Functions
    Object(_core_functions_core__WEBPACK_IMPORTED_MODULE_7__["default"])(); // Register WPOnion Themes Related Functions

    Object(_core_functions_themes__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Register WPOnion Fields Related Functions

    Object(_core_functions_fields__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Register WPOnion Module Related Functions.

    Object(_core_module_handler__WEBPACK_IMPORTED_MODULE_3__["module_functions"])(); // Register WPOnion Addons Related Functions

    Object(_core_functions_plugins__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Register WPOnion Utilites Related Functions

    Object(_core_functions_utilites__WEBPACK_IMPORTED_MODULE_11__["default"])();
    /**
     * Extends jQuery Functions list With
     * Functions Provided by WPOnion
     */

    $.fn = $.extend($.fn, _core_functions_jquery__WEBPACK_IMPORTED_MODULE_6__["default"]);
    window.wpo_core = _core_class_core__WEBPACK_IMPORTED_MODULE_15__["default"];
    window.wponion = {};
    window.wponion.instances = {};
    window.wponion.plugins = {};
    window.wponion["class"] = {};
    window.wponion._ = window.lodash.noConflict();
    window.wponion.hooks = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["createHooks"])();
    window.wponion.helper = vsp_js_helper_index__WEBPACK_IMPORTED_MODULE_1__["default"];
    /*window.wponion.instances.module  = new instance_handler();
    window.wponion.instances.fields  = new instance_handler();
    window.wponion.instances.global  = new instance_handler();*/

    window.wponion.plugins.bs_button = _core_plugins_wpo_buttons__WEBPACK_IMPORTED_MODULE_12__["default"];
    window.wponion.plugins.ajaxer = _core_plugins_ajaxer__WEBPACK_IMPORTED_MODULE_13__["WPOnion_Ajaxer"];
    window.wponion.plugins.validator = _core_plugins_validator__WEBPACK_IMPORTED_MODULE_14__["default"];
    window.wponion["class"].base = _core_class_base__WEBPACK_IMPORTED_MODULE_17__["default"];
    window.wponion["class"].theme_base = _core_class_theme_base__WEBPACK_IMPORTED_MODULE_18__["default"];
    window.wponion["class"].module_base = _core_class_module_base__WEBPACK_IMPORTED_MODULE_19__["default"];
    window.wponion["class"].field_debug = new _core_class_debug__WEBPACK_IMPORTED_MODULE_16__["default"]();
    window.wponion["class"].field_base = _core_class_field_base__WEBPACK_IMPORTED_MODULE_20__["default"];
    window.wponion["class"].field = _core_class_field__WEBPACK_IMPORTED_MODULE_21__["default"];
    window.wponion["class"].dependency = _core_class_dependency__WEBPACK_IMPORTED_MODULE_22__["default"];
  } // Reloads Customizer Related Fields.


  window.wponion_module_customizer();
  $(function () {
    window.wponion.hooks.doAction('wponion_before_init'); // Register Core Fields

    Object(_core_fields__WEBPACK_IMPORTED_MODULE_5__["wponion_register_fields"])(); // Register Core Themes

    Object(_core_themes__WEBPACK_IMPORTED_MODULE_4__["wponion_register_themes"])(); // Inits Notices.

    window.wponion_notice(); // Register Required Events

    Object(_core_global_events__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Init Ajaxer

    Object(_core_plugins_ajaxer__WEBPACK_IMPORTED_MODULE_13__["init_ajaxer"])(); // Init Javascript Validation

    window.wponion_validator(); // Inits All Modules.

    window.wponion_init_all();
    window.wponion.hooks.doAction('wponion_init');
  });
  $(window).on('load', function () {
    if (!window.wponion._.isUndefined(window.Backbone)) {
      window.wponion.plugins.wpmodal = __webpack_require__(/*! ./core/plugins/wpmodel */ "./src/js/core/plugins/wpmodel.js")["default"];
    }
  });
})(window, document, window.wp, jQuery);

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./src/js/wponion-core.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\localhost\www\wp\framework\wponion\wp-content\plugins\wponion\src\js\wponion-core.js */"./src/js/wponion-core.js");


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