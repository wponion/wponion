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

/***/ "./node_modules/@wordpress/hooks/build-module/createAddHook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createAddHook.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateNamespace = __webpack_require__(/*! ./validateNamespace.js */ "./node_modules/@wordpress/hooks/build-module/validateNamespace.js");

var _validateNamespace2 = _interopRequireDefault(_validateNamespace);

var _validateHookName = __webpack_require__(/*! ./validateHookName.js */ "./node_modules/@wordpress/hooks/build-module/validateHookName.js");

var _validateHookName2 = _interopRequireDefault(_validateHookName);

var _ = __webpack_require__(/*! ./ */ "./node_modules/@wordpress/hooks/build-module/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    if (!(0, _validateHookName2.default)(hookName)) {
      return;
    }

    if (!(0, _validateNamespace2.default)(namespace)) {
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
      var i = 0;

      while (i < handlers.length) {
        if (handlers[i].priority > priority) {
          break;
        }

        i++;
      } // Insert (or append) the new hook.


      handlers.splice(i, 0, handler); // We may also be currently executing this hook.  If the callback
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
      (0, _.doAction)('hookAdded', hookName, namespace, callback, priority);
    }
  };
}

exports.default = createAddHook;
//# sourceMappingURL=createAddHook.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createCurrentHook.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createCurrentHook.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = createCurrentHook;
//# sourceMappingURL=createCurrentHook.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createDidHook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createDidHook.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateHookName = __webpack_require__(/*! ./validateHookName.js */ "./node_modules/@wordpress/hooks/build-module/validateHookName.js");

var _validateHookName2 = _interopRequireDefault(_validateHookName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    if (!(0, _validateHookName2.default)(hookName)) {
      return;
    }

    return hooks[hookName] && hooks[hookName].runs ? hooks[hookName].runs : 0;
  };
}

exports.default = createDidHook;
//# sourceMappingURL=createDidHook.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createDoingHook.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createDoingHook.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = createDoingHook;
//# sourceMappingURL=createDoingHook.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createHasHook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createHasHook.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = createHasHook;
//# sourceMappingURL=createHasHook.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createHooks.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createHooks.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createAddHook = __webpack_require__(/*! ./createAddHook */ "./node_modules/@wordpress/hooks/build-module/createAddHook.js");

var _createAddHook2 = _interopRequireDefault(_createAddHook);

var _createRemoveHook = __webpack_require__(/*! ./createRemoveHook */ "./node_modules/@wordpress/hooks/build-module/createRemoveHook.js");

var _createRemoveHook2 = _interopRequireDefault(_createRemoveHook);

var _createHasHook = __webpack_require__(/*! ./createHasHook */ "./node_modules/@wordpress/hooks/build-module/createHasHook.js");

var _createHasHook2 = _interopRequireDefault(_createHasHook);

var _createRunHook = __webpack_require__(/*! ./createRunHook */ "./node_modules/@wordpress/hooks/build-module/createRunHook.js");

var _createRunHook2 = _interopRequireDefault(_createRunHook);

var _createCurrentHook = __webpack_require__(/*! ./createCurrentHook */ "./node_modules/@wordpress/hooks/build-module/createCurrentHook.js");

var _createCurrentHook2 = _interopRequireDefault(_createCurrentHook);

var _createDoingHook = __webpack_require__(/*! ./createDoingHook */ "./node_modules/@wordpress/hooks/build-module/createDoingHook.js");

var _createDoingHook2 = _interopRequireDefault(_createDoingHook);

var _createDidHook = __webpack_require__(/*! ./createDidHook */ "./node_modules/@wordpress/hooks/build-module/createDidHook.js");

var _createDidHook2 = _interopRequireDefault(_createDidHook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    addAction: (0, _createAddHook2.default)(actions),
    addFilter: (0, _createAddHook2.default)(filters),
    removeAction: (0, _createRemoveHook2.default)(actions),
    removeFilter: (0, _createRemoveHook2.default)(filters),
    hasAction: (0, _createHasHook2.default)(actions),
    hasFilter: (0, _createHasHook2.default)(filters),
    removeAllActions: (0, _createRemoveHook2.default)(actions, true),
    removeAllFilters: (0, _createRemoveHook2.default)(filters, true),
    doAction: (0, _createRunHook2.default)(actions),
    applyFilters: (0, _createRunHook2.default)(filters, true),
    currentAction: (0, _createCurrentHook2.default)(actions),
    currentFilter: (0, _createCurrentHook2.default)(filters),
    doingAction: (0, _createDoingHook2.default)(actions),
    doingFilter: (0, _createDoingHook2.default)(filters),
    didAction: (0, _createDidHook2.default)(actions),
    didFilter: (0, _createDidHook2.default)(filters),
    actions: actions,
    filters: filters
  };
}

exports.default = createHooks;
//# sourceMappingURL=createHooks.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createRemoveHook.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createRemoveHook.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateNamespace = __webpack_require__(/*! ./validateNamespace.js */ "./node_modules/@wordpress/hooks/build-module/validateNamespace.js");

var _validateNamespace2 = _interopRequireDefault(_validateNamespace);

var _validateHookName = __webpack_require__(/*! ./validateHookName.js */ "./node_modules/@wordpress/hooks/build-module/validateHookName.js");

var _validateHookName2 = _interopRequireDefault(_validateHookName);

var _ = __webpack_require__(/*! ./ */ "./node_modules/@wordpress/hooks/build-module/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    if (!(0, _validateHookName2.default)(hookName)) {
      return;
    }

    if (!removeAll && !(0, _validateNamespace2.default)(namespace)) {
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
      (0, _.doAction)('hookRemoved', hookName, namespace);
    }

    return handlersRemoved;
  };
}

exports.default = createRemoveHook;
//# sourceMappingURL=createRemoveHook.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/createRunHook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/createRunHook.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
    var handlers = hooks[hookName].handlers;

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

exports.default = createRunHook;
//# sourceMappingURL=createRunHook.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filters = exports.actions = exports.didFilter = exports.didAction = exports.doingFilter = exports.doingAction = exports.currentFilter = exports.currentAction = exports.applyFilters = exports.doAction = exports.removeAllFilters = exports.removeAllActions = exports.hasFilter = exports.hasAction = exports.removeFilter = exports.removeAction = exports.addFilter = exports.addAction = exports.createHooks = undefined;

var _createHooks2 = __webpack_require__(/*! ./createHooks */ "./node_modules/@wordpress/hooks/build-module/createHooks.js");

var _createHooks3 = _interopRequireDefault(_createHooks2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createHooks = (0, _createHooks3.default)(),
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

exports.createHooks = _createHooks3.default;
exports.addAction = addAction;
exports.addFilter = addFilter;
exports.removeAction = removeAction;
exports.removeFilter = removeFilter;
exports.hasAction = hasAction;
exports.hasFilter = hasFilter;
exports.removeAllActions = removeAllActions;
exports.removeAllFilters = removeAllFilters;
exports.doAction = doAction;
exports.applyFilters = applyFilters;
exports.currentAction = currentAction;
exports.currentFilter = currentFilter;
exports.doingAction = doingAction;
exports.doingFilter = doingFilter;
exports.didAction = didAction;
exports.didFilter = didFilter;
exports.actions = actions;
exports.filters = filters;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/validateHookName.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/validateHookName.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = validateHookName;
//# sourceMappingURL=validateHookName.js.map

/***/ }),

/***/ "./node_modules/@wordpress/hooks/build-module/validateNamespace.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/hooks/build-module/validateNamespace.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = validateNamespace;
//# sourceMappingURL=validateNamespace.js.map

/***/ }),

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
//# sourceMappingURL=rtrim.js.map

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
//# sourceMappingURL=strpos.js.map

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

/***/ "./node_modules/locutus/php/url/http_build_query.js":
/*!**********************************************************!*\
  !*** ./node_modules/locutus/php/url/http_build_query.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
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
//# sourceMappingURL=http_build_query.js.map

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

  var key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment'];

  // For loose we added one optional slash to post-scheme to catch file:/// (should restrict this)
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
//# sourceMappingURL=parse_url.js.map

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
//# sourceMappingURL=rawurldecode.js.map

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

  str = str + '';

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below),
  // but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
};
//# sourceMappingURL=rawurlencode.js.map

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
//# sourceMappingURL=urldecode.js.map

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

  str = str + '';

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below),
  // but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
};
//# sourceMappingURL=urlencode.js.map

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


// Array & Object Related Functions
module.exports.parse_args = __webpack_require__(/*! js-parse-args */ "./node_modules/js-parse-args/index.js");
module.exports.array_to_html_attr = __webpack_require__(/*! ./parts/array_to_html_attr */ "./node_modules/vsp-js-helper/parts/array_to_html_attr.js");
module.exports.array_to_html = __webpack_require__(/*! ./parts/array_to_html */ "./node_modules/vsp-js-helper/parts/array_to_html.js");
module.exports.array_to_window = __webpack_require__(/*! ./parts/array_to_window */ "./node_modules/vsp-js-helper/parts/array_to_window.js");
module.exports.plain_object = __webpack_require__(/*! ./parts/plain_object */ "./node_modules/vsp-js-helper/parts/plain_object.js");

// Date & Time Related Functions
module.exports.microtime = __webpack_require__(/*! locutus/php/datetime/microtime */ "./node_modules/locutus/php/datetime/microtime.js");
module.exports.is_after_date = __webpack_require__(/*! ./parts/is_after_date */ "./node_modules/vsp-js-helper/parts/is_after_date.js");
module.exports.is_before_date = __webpack_require__(/*! ./parts/is_before_date */ "./node_modules/vsp-js-helper/parts/is_before_date.js");
module.exports.is_same_date = __webpack_require__(/*! ./parts/is_same_date */ "./node_modules/vsp-js-helper/parts/is_same_date.js");
module.exports.format_duration = __webpack_require__(/*! ./parts/format_duration */ "./node_modules/vsp-js-helper/parts/format_duration.js");
module.exports.diff_days = __webpack_require__(/*! ./parts/diff_days */ "./node_modules/vsp-js-helper/parts/diff_days.js");
module.exports.time_taken = __webpack_require__(/*! ./parts/time_taken */ "./node_modules/vsp-js-helper/parts/time_taken.js");

// Data Type Validation
module.exports.is_url = __webpack_require__(/*! ./parts/is_url.js */ "./node_modules/vsp-js-helper/parts/is_url.js");

// Run Time Function Relateds.
module.exports.call_user_func = __webpack_require__(/*! locutus/php/funchand/call_user_func */ "./node_modules/locutus/php/funchand/call_user_func.js");
module.exports.call_user_func_array = __webpack_require__(/*! locutus/php/funchand/call_user_func_array */ "./node_modules/locutus/php/funchand/call_user_func_array.js");
module.exports.function_exists = __webpack_require__(/*! locutus/php/funchand/function_exists */ "./node_modules/locutus/php/funchand/function_exists.js");
module.exports.create_function = __webpack_require__(/*! locutus/php/funchand/create_function */ "./node_modules/locutus/php/funchand/create_function.js");
module.exports.is_callable = __webpack_require__(/*! locutus/php/var/is_callable */ "./node_modules/locutus/php/var/is_callable.js");

// Browser Related
module.exports.is_tab_focused = __webpack_require__(/*! ./parts/is_tab_focused */ "./node_modules/vsp-js-helper/parts/is_tab_focused.js");
module.exports.is_window_arg = __webpack_require__(/*! ./parts/is_window_arg */ "./node_modules/vsp-js-helper/parts/is_window_arg.js");
module.exports.scroll_to_top = __webpack_require__(/*! ./parts/scroll_to_top */ "./node_modules/vsp-js-helper/parts/scroll_to_top.js");
module.exports.copy_to_clip = __webpack_require__(/*! ./parts/copy_to_clip */ "./node_modules/vsp-js-helper/parts/copy_to_clip.js");
module.exports.scroll_pos = __webpack_require__(/*! ./parts/scroll_pos */ "./node_modules/vsp-js-helper/parts/scroll_pos.js");
module.exports.window_arg = __webpack_require__(/*! ./parts/window_arg */ "./node_modules/vsp-js-helper/parts/window_arg.js");
module.exports.device_type = __webpack_require__(/*! ./parts/device_type */ "./node_modules/vsp-js-helper/parts/device_type.js");
module.exports.pipe_log = __webpack_require__(/*! ./parts/pipe_log */ "./node_modules/vsp-js-helper/parts/pipe_log.js");

// jQuery Related.
module.exports.to_jquery = __webpack_require__(/*! ./parts/to_jquery */ "./node_modules/vsp-js-helper/parts/to_jquery.js");
module.exports.is_jquery = __webpack_require__(/*! ./parts/is_jquery */ "./node_modules/vsp-js-helper/parts/is_jquery.js");

// Others
module.exports.to_js_func = __webpack_require__(/*! ./parts/to_js_func */ "./node_modules/vsp-js-helper/parts/to_js_func.js");
module.exports.md5 = __webpack_require__(/*! locutus/php/strings/md5 */ "./node_modules/locutus/php/strings/md5.js");
module.exports.counter = __webpack_require__(/*! ./parts/counter */ "./node_modules/vsp-js-helper/parts/counter.js");
module.exports.rand_md5 = __webpack_require__(/*! ./parts/rand_md5 */ "./node_modules/vsp-js-helper/parts/rand_md5.js");
module.exports.css_units = __webpack_require__(/*! ./parts/css_units */ "./node_modules/vsp-js-helper/parts/css_units.js");

// URL Related Functions.
module.exports.url_params = __webpack_require__(/*! ./parts/url_params */ "./node_modules/vsp-js-helper/parts/url_params.js");
module.exports.query_string = __webpack_require__(/*! ./parts/query_string */ "./node_modules/vsp-js-helper/parts/query_string.js");
module.exports.parse_str = __webpack_require__(/*! locutus/php/strings/parse_str */ "./node_modules/locutus/php/strings/parse_str.js");
module.exports.base64_encode = __webpack_require__(/*! locutus/php/url/base64_encode */ "./node_modules/locutus/php/url/base64_encode.js");
module.exports.base64_decode = __webpack_require__(/*! locutus/php/url/base64_decode */ "./node_modules/locutus/php/url/base64_decode.js");
module.exports.rawurldecode = __webpack_require__(/*! locutus/php/url/rawurldecode */ "./node_modules/locutus/php/url/rawurldecode.js");
module.exports.rawurlencode = __webpack_require__(/*! locutus/php/url/rawurlencode */ "./node_modules/locutus/php/url/rawurlencode.js");
module.exports.urldecode = __webpack_require__(/*! locutus/php/url/urldecode */ "./node_modules/locutus/php/url/urldecode.js");
module.exports.urlencode = __webpack_require__(/*! locutus/php/url/urlencode */ "./node_modules/locutus/php/url/urlencode.js");
module.exports.parse_url = __webpack_require__(/*! locutus/php/url/parse_url */ "./node_modules/locutus/php/url/parse_url.js");

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


module.exports = function ($data) {
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


module.exports = function (val) {
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


/**
 * Check if given Object / Value is a jQuery Instance.
 * @param $elem
 * @returns {boolean|*}
 */
module.exports = function ($elem) {
  return false === _.isUndefined($elem) && false === _.isString($elem) && $elem.jQuery;
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

/***/ "./node_modules/vsp-js-helper/parts/is_url.js":
/*!****************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_url.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ($url) {
	var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
	'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
	'(\\#[-a-z\\d_]*)?$', 'i');
	return pattern.test($url);
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/is_window_arg.js":
/*!***********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/is_window_arg.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if window has given variable.
 * @param $key
 * @returns {boolean}
 */
module.exports = function ($key) {
  return false === _.isUndefined(window[$key]);
};

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
  return typeof Object.create !== 'undefined' ? Object.create(null) : {};
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


var _validateSingleJSFunc = __webpack_require__(/*! ./validateSingleJSFunc */ "./node_modules/vsp-js-helper/parts/validateSingleJSFunc.js");

var _validateSingleJSFunc2 = _interopRequireDefault(_validateSingleJSFunc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks Each Value Of a JS Object And Converts Into JS Callable Function.
 * @param $data
 * @param $args_key
 * @param $contents_key
 * @returns {*}
 */
module.exports = function ($data) {
	var $args_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js_args';
	var $contents_key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'js_contents';

	if (true === _.isObject($data)) {
		for (var $key in $data) {
			if (!_.isEmpty($data[$key])) {
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


/**
 * Converts JS String Into Callable Function.
 * @param $string
 * @param $args_key
 * @param $contents_key
 * @returns {*}
 */
module.exports = function ($string) {
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
};

/***/ }),

/***/ "./node_modules/vsp-js-helper/parts/window_arg.js":
/*!********************************************************!*\
  !*** ./node_modules/vsp-js-helper/parts/window_arg.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Sets JS Object Into Window Args.
 * @param $key
 * @param $value
 */
module.exports = function ($key, $value) {
	if (_.isObject($key)) {
		for (var $_k in $key) {
			window[$_k] = $key[$_k];
		}
	} else {
		window[$key] = $value;
	}
};

/***/ }),

/***/ "./node_modules/wordpress-js-ports/functions/add_query_arg.js":
/*!********************************************************************!*\
  !*** ./node_modules/wordpress-js-ports/functions/add_query_arg.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = add_query_arg;
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

	if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' && null === value) {
		url = window.location.href;
	} else if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' && null !== value) {
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

	if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = remove_query_arg;

var _add_query_arg = __webpack_require__(/*! ./add_query_arg */ "./node_modules/wordpress-js-ports/functions/add_query_arg.js");

var _add_query_arg2 = _interopRequireDefault(_add_query_arg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes an item or items from a query string.
 * @param key
 * @param url
 * @returns {*}
 */
function remove_query_arg() {
	var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) !== 'object') {
		key = [key];
	}

	for (var i in key) {
		if (key[i]) {
			url = (0, _add_query_arg2.default)(key[i], false, url);
		}
	}
	return url;
}

/***/ }),

/***/ "./node_modules/wordpress-js-ports/functions/trailingslashit.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wordpress-js-ports/functions/trailingslashit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function ($string) {
	return (0, _untrailingslashit2.default)($string) + '/\\';
};

var _untrailingslashit = __webpack_require__(/*! ./untrailingslashit */ "./node_modules/wordpress-js-ports/functions/untrailingslashit.js");

var _untrailingslashit2 = _interopRequireDefault(_untrailingslashit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/wordpress-js-ports/functions/untrailingslashit.js":
/*!************************************************************************!*\
  !*** ./node_modules/wordpress-js-ports/functions/untrailingslashit.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ($string) {
  return (0, _rtrim2.default)($string, '/\\');
};

var _rtrim = __webpack_require__(/*! locutus/php/strings/rtrim */ "./node_modules/locutus/php/strings/rtrim.js");

var _rtrim2 = _interopRequireDefault(_rtrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/wordpress-js-ports/index.js":
/*!**************************************************!*\
  !*** ./node_modules/wordpress-js-ports/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var add_query_arg = exports.add_query_arg = __webpack_require__(/*! ./functions/add_query_arg */ "./node_modules/wordpress-js-ports/functions/add_query_arg.js").default;

var remove_query_arg = exports.remove_query_arg = __webpack_require__(/*! ./functions/remove_query_arg */ "./node_modules/wordpress-js-ports/functions/remove_query_arg.js").default;

var trailingslashit = exports.trailingslashit = __webpack_require__(/*! ./functions/trailingslashit */ "./node_modules/wordpress-js-ports/functions/trailingslashit.js").default;

var untrailingslashit = exports.untrailingslashit = __webpack_require__(/*! ./functions/untrailingslashit */ "./node_modules/wordpress-js-ports/functions/untrailingslashit.js").default;

/**
 * Appends Function Globally.
 */

exports.default = function (window) {
	window.add_query_arg = add_query_arg;
	window.remove_query_arg = remove_query_arg;
	window.untrailingslashit = untrailingslashit;
	window.trailingslashit = trailingslashit;
}(window);

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

var _index = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

var _core = __webpack_require__(/*! ./core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

var _wordpressJsPorts = __webpack_require__(/*! wordpress-js-ports */ "./node_modules/wordpress-js-ports/index.js");

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
			method: 'POST',
			url: typeof window.ajaxurl !== 'undefined' ? window.ajaxurl : false,
			data: {},
			success: false,
			error: false,
			always: false,
			action: false
		};
		this.default_configs = {
			response_element: false,
			button: false,
			element: false,
			spinner: '<span class="spinner"></span>'
		};
		this.instance = null;
		/**
   * @type {WPOnion_Ajaxer.defaults}
   */
		this.ajax_args = window.wponion._.merge(this.defaults, $ajax_args);
		this.ajax_config = window.wponion._.merge(this.default_configs, $ajax_config);
		this.ajax();
	}

	/**
  * Creates A Callable Callback function based on the code data.
  *
  * @param $code
  * @param $args
  */


	_createClass(WPOnion_Ajaxer, [{
		key: 'create_function',
		value: function create_function() {
			var $code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
			var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			return this.single_callback((0, _index.create_function)($args, $code));
		}

		/**
   * Validates & Triggers A Single Callback Function.
   * @param $callback
   */

	}, {
		key: 'single_callback',
		value: function single_callback($callback) {
			if (window.wponion._.isFunction($callback)) {
				(0, _index.call_user_func)($callback);
			} else if (window.wponion._.isString($callback) && false !== (0, _index.function_exists)($callback)) {
				(0, _index.call_user_func)($callback);
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
		key: 'handle_callbacks',
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
   * Triggered On Ajax onSuccess
   * @param data
   */

	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			this.handle_callbacks(data);

			if (false !== this.ajax_args.success) {
				if ((0, _index.is_callable)(this.ajax_args.success)) {
					(0, _index.call_user_func_array)(this.ajax_args.success, [data]);
				}
			}
		}

		/**
   * Triggered On Ajax onError
   * @param data
   */

	}, {
		key: 'onError',
		value: function onError(data) {
			this.handle_callbacks(data);
			if (false !== this.ajax_args.error) {
				if ((0, _index.is_callable)(this.ajax_args.error)) {
					(0, _index.call_user_func_array)(this.ajax_args.error, [data]);
				}
			}
		}

		/**
   * Triggered On Ajax onAlways
   * @param data
   */

	}, {
		key: 'onAlways',
		value: function onAlways(data) {
			this.button_unlock();
			if (false !== this.ajax_args.always) {
				if ((0, _index.is_callable)(this.ajax_args.always)) {
					(0, _index.call_user_func_array)(this.ajax_args.always, [data]);
				}
			}
		}

		/**
   * Triggers An Ajax Request. Based On The Config.
   */

	}, {
		key: 'ajax',
		value: function ajax() {
			var _this = this;

			this.button_lock();
			var $config = window.wponion._.clone(this.ajax_args);
			if (false !== $config.url) {
				if (false !== (0, _index.is_url)($config.url)) {
					var $url_params = (0, _index.url_params)($config.url);
					for (var $key in $url_params) {
						if ($url_params.hasOwnProperty($key)) {
							$config.url = (0, _wordpressJsPorts.remove_query_arg)($key, $config.url);
						}
					}
					$config.data = window.wponion._.merge($config.data, $url_params);
				} else {
					var _$url_params = {};
					(0, _index.parse_str)($config.url, _$url_params);
					$config.url = window.ajaxurl;
					$config.data = window.wponion._.merge($config.data, _$url_params);
				}
			} else {
				$config.url = window.ajaxurl;
			}

			if (false !== $config.action) {
				$config.data.action = $config.action;
				delete $config.action;
			}

			if (typeof $config.success !== 'undefined') {
				delete $config.success;
			}
			if (typeof $config.always !== 'undefined') {
				delete $config.always;
			}
			if (typeof $config.error !== 'undefined') {
				delete $config.error;
			}

			this.instance = window.wp.ajax.send($config);
			this.instance.done(function (data) {
				return _this.onSuccess(data);
			});
			this.instance.fail(function (data) {
				return _this.onError(data);
			});
			this.instance.always(function (data) {
				return _this.onAlways(data);
			});
		}

		/**
   * Checks if A Config Data Exsits Based on The Given Key.
   * @param $key
   * @returns {boolean}
   */

	}, {
		key: 'has_config',
		value: function has_config() {
			var $key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			return typeof this.ajax_config[$key] !== 'undefined';
		}

		/**
   * Returns The Config Data Based on The Config Key.
   * @param $key
   * @param $default
   * @returns {boolean}
   */

	}, {
		key: 'config',
		value: function config() {
			var $key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			return this.has_config($key) ? this.ajax_config[$key] : $default;
		}

		/**
   * Locks A Given Button Element.
   */

	}, {
		key: 'button_lock',
		value: function button_lock() {
			if (false !== this.config('button')) {
				var $button = (0, _index.to_jquery)(this.config('button'));
				if ($button) {
					$button.wpo_button('processing');
					$button.attr('disabled', 'disabled');

					if (this.config('spinner')) {
						var $spinner = jQuery(this.config('spinner'));
						$spinner.addClass('is-active');
						$button.parent().append($spinner);
					}
				}
			}
		}

		/**
   * Unlocks A Given Button Element.
   */

	}, {
		key: 'button_unlock',
		value: function button_unlock() {
			if (false !== this.config('button')) {
				var $button = (0, _index.to_jquery)(this.config('button'));
				if ($button) {
					$button.wpo_button('complete');
					$button.removeAttr('disabled');
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

exports.default = function ($, document) {
	$(function () {
		var $class = '[data-wponion-inline-ajax], .wponion-ajax, .wponion-ajax-get, .wponion-ajax-post, .wponion-inline-ajax, .wponion-inline-ajax-get, .wponion-inline-ajax-post';
		$(document).on('click', $class, function (e) {

			var $elem = $(e.currentTarget),
			    $_data = $elem.data(),
			    $_class_instance = null,
			    $args = {
				url: false
			};

			if ($elem.attr('data-wponion-inline-ajax') !== 'undefined') {
				var $fid1 = $elem.attr('data-wponion-inline-ajax');
				var $fid2 = $elem.attr('id');
				var $js_id = _core2.default.fieldID($elem);
				var _$args = {};
				if ($js_id) {
					var $_args = _core2.default.fieldArgs($js_id, false);
					if ($_args.hasOwnProperty('inline_ajax') && false !== window.wponion._.isUndefined($_args.inline_ajax)) {
						_$args = $_args.inline_ajax;
					}
				} else if (false !== _core2.default.fieldArgs($fid1, false)) {
					var _$_args = _core2.default.fieldArgs($fid1, false);
					if (_$_args.hasOwnProperty('inline_ajax') && false === window.wponion._.isUndefined(_$_args.inline_ajax)) {
						_$args = _$_args.inline_ajax;
					}
				} else if (false !== _core2.default.fieldArgs($fid2, false)) {
					var _$_args2 = _core2.default.fieldArgs($fid2, false);
					if (_$_args2.hasOwnProperty('inline_ajax') && false === window.wponion._.isUndefined(_$_args2.inline_ajax)) {
						_$args = _$_args2.inline_ajax;
					}
				}
			} else {
				if ($elem.hasClass('wponion-ajax-get') || $elem.hasClass('wponion-inline-ajax-get')) {
					$args.method = 'GET';
				} else if ($elem.hasClass('wponion-ajax-post') || $elem.hasClass('wponion-inline-ajax-post')) {
					$args.method = 'POST';
				} else if ($elem.hasClass('wponion-ajax') || $elem.hasClass('wponion-inline-ajax') && typeof $_data.method !== 'undefined') {
					$args.method = $_data.method;
				}

				if (typeof $_data.url !== 'undefined') {
					$args.url = $_data.url;
				} else if (typeof $_data.href !== 'undefined') {
					$args.url = $_data.href;
				} else if ($elem.attr('href')) {
					$args.url = $elem.attr('href');
				}

				if (typeof $_data['ajax-data'] !== 'undefined') {
					$args.data = $_data['ajax-data'];
				}

				if (typeof $_data.action !== 'undefined') {
					$args.action = $_data.action;
				}
			}

			$_class_instance = new WPOnion_Ajaxer($args, {
				button: $elem
			});
		});
	});
}(jQuery, document);

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

/**
 * Base WPonion JS Class.
 */
var WPOnion = function () {
	function WPOnion() {
		_classCallCheck(this, WPOnion);
	}

	_createClass(WPOnion, null, [{
		key: 'js_func',

		/**
   * Validates & Converts into Callable JS Functions.
   * @param $data
   * @returns {*|$data}
   */
		value: function js_func($data) {
			return (0, _index.to_js_func)($data, 'wponion_js_args', 'wponion_js_contents');
		}

		/**
   * Generates A Random ID.
   */

	}, {
		key: 'rand_id',
		value: function rand_id() {
			return (0, _index.md5)('wponion_rand_' + (0, _index.microtime)() + (0, _index.rand_md5)());
		}

		/**
   * Checks if given string is a valid JSON.
   * @param obj
   * @returns {boolean}
   */

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
			return $var_id ? window.wponion._.clone(this.windowArgs($var_id, $default)) : $default;
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

			return false === window.wponion._.isUndefined(WPOnion.text[$key]) ? WPOnion.text[$key] : $default;
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
				if (window.wponion._.isObject($defined_vars)) {
					for (var $key in $defined_vars) {
						if ($defined_vars.hasOwnProperty($key) && false === window.wponion._.isUndefined($defined_vars[$key])) {
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
			if (false === window.wponion._.isUndefined($args[$key])) {
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
			if (WPOnion.is_debug() && window.wponion._.isNull(WPOnion.field_debug_info)) {
				var $vars = WPOnion.windowArgs('wponion_defined_vars'),
				    $json = {},
				    $utxt = WPOnion.txt('unmodified_debug'),
				    $mtxt = WPOnion.txt('modified_debug');

				for (var $key in $vars) {
					if ($vars.hasOwnProperty($key) && false === window.wponion._.isUndefined($vars[$key])) {
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
			};

			if (window.wponion._.isObject($action)) {
				$data = $action;
			} else {
				$defaults.url += '&' + WPOnion.option('ajax_action_key') + '=' + $action;
			}

			$defaults = window.wponion._.merge($defaults, $data);
			$onSuccess = window.wponion._.isUndefined($onSuccess) || false === $onSuccess ? $defaults.onSuccess : $onSuccess;
			$onAlways = window.wponion._.isUndefined($onError) || false === $onError ? $defaults.onAlways : $onAlways;
			$onError = window.wponion._.isUndefined($onAlways) || false === $onAlways ? $defaults.onError : $onError;
			var $ajax = jQuery.ajax($defaults);

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
				compiled = compiled || window.wponion._.template($id, options);
				return compiled(data);
			};
		}

		/**
   * Handles WPonion Settings / Metabox Submenu Indicator.
   * @param $elems
   */

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * WPOnion Debug Class.
 */
var _class = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, null, [{
		key: "add",

		/**
   * Add A Debug Info To Debug Array.
   * @param $key
   * @param $value
   */
		value: function add($key, $value) {
			if (window.wponion._.isUndefined(this.debug_info)) {
				this.debug_info = {};
			}

			if (window.wponion._.isUndefined(this.debug_info[$key])) {
				this.debug_info[$key] = $value;
			} else {
				this.debug_info[$key] = window.wponion._.merge($value, this.debug_info[$key]);
			}
		}

		/**
   * Gets A Debug Info Based on Key.
   * @param $key
   * @param $default
   * @returns {boolean}
   */

	}, {
		key: "get",
		value: function get($key) {
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if (window.wponion._.isUndefined(this.debug_info)) {
				this.debug_info = {};
			}
			return window.wponion._.isUndefined(this.debug_info[$key]) ? $default : this.debug_info[$key];
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * WPOnion Dependency Class
 */
var _class =
/**
 *
 * @param $element
 * @param param
 * @param $config
 */
function _class() {
	var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

	var _this = this;

	var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var $config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	_classCallCheck(this, _class);

	this.param = window.wponion._.merge({ nestable: false, parent: false }, param);
	var $this = this;
	this.base = {};
	this.base.$el = $element;
	this.base.init = function () {
		_this.base.ruleset = jQuery.deps.createRuleset();
		_this.base.depRoot();
		var $_deps_functions = window.wponion._.merge({
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
		}, $config);

		jQuery.deps.enable(_this.base.$el, _this.base.ruleset, $_deps_functions);
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

/* global swal:true */

var is_jquery = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").is_jquery;

/**
 * WPOnion Field Abstract Class.
 */
var _class = function (_WPOnion_Module) {
	_inherits(_class, _WPOnion_Module);

	/**
  * WPOnion Field Class Constructor.
  * @param $selector
  * @param $context
  * @param $config
  */
	function _class($selector) {
		var $context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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

	/**
  * Function Used To Init Field.
  * This needs to be overriden extending class.
  */


	_createClass(_class, [{
		key: 'init',
		value: function init() {}

		/**
   * Handles javascript error placement.
   * @param err
   */

	}, {
		key: 'js_error',
		value: function js_error(err) {
			err.error.appendTo(this.element.find('.wponion-fieldset'));
		}

		/**
   * Creates An Trigger Hook To Handle JS Error Placement
   * @use constructor
   * @param element
   */

	}, {
		key: 'js_error_handler',
		value: function js_error_handler() {
			var _this2 = this;

			var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

			element.on('wponion_js_validation_message', '> .wponion-fieldset :input', function (e, data) {
				return _this2.js_error(data);
			});
		}

		/**
   * Checks if validation is required for current field.
   */

	}, {
		key: 'js_validator',
		value: function js_validator() {
			if (false === window.wponion._.isUndefined(this.option('js_validate', false))) {
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
		key: 'maybe_js_validate_elem',
		value: function maybe_js_validate_elem($args, $elem) {
			if (_validation2.default.get_form()) {
				this.js_validate_elem($args, $elem);
			}
		}

		/**
   * Adds Rule To Each and every input to validate JS Lib.
   * @param $args
   * @param $elem
   */

	}, {
		key: 'js_validate_elem',
		value: function js_validate_elem($args, $elem) {
			if (_validation2.default.get_form()) {
				$elem.find(':input').each(function () {
					jQuery(this).rules('add', $args);
				});
			}
		}

		/**
   * This function used by each and every field.
   * This function will also convert Simple JS function code into callable JS code & returns it
   * Plus it also store the value in debug array if debug enabled.
   * @param $arg
   * @param $key
   * @returns {*|$data}
   */

	}, {
		key: 'handle_args',
		value: function handle_args($arg) {
			var $key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var $args = _core2.default.js_func($arg),
			    $exists = _debug2.default.get(this.id(), { 'PHP Args': {}, 'JS Args': {} });
			$exists = window.wponion._.merge({ 'PHP Args': {}, 'JS Args': {} }, $exists);

			if (false === $key) {
				$exists['JS Args'] = $args;
			} else {
				$exists['JS Args'][$key] = $args;
			}
			_debug2.default.add(this.id(), $exists);
			return $args;
		}

		/**
   * Handles Field Debug POPUP.
   */

	}, {
		key: 'field_debug',
		value: function field_debug() {
			var _this3 = this;

			if (false !== _debug2.default.get(this.id())) {
				return;
			}

			var $info = this.option('debug_info');

			if (false === window.wponion._.isUndefined($info)) {
				if (false === window.wponion._.isEmpty($info)) {
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
					animation: 'scale',
					appendTo: this.get_field_parent_by_id(this.element)[0]
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
					var $string = _this3.option('debug_field_code');
					if (window.wponion._.isString($string)) {
						swal({
							html: $string,
							width: '800px',
							showCloseButton: true,
							heightAuto: false,
							showConfirmButton: false,
							animation: false
						});
					}
				});
			}
		}

		/**
   * Gathers Field Options Data from window.wponion array.
   * @returns {*}
   */

	}, {
		key: 'options',
		value: function options() {
			if (this._args === false) {
				this._args = _core2.default.windowArgs(this.id());
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
		key: 'option',
		value: function option() {
			var $key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var $default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var $args = this.options();
			return false === window.wponion._.isUndefined($args[$key]) ? $args[$key] : $default;
		}

		/**
   * Returns WPOnion JS Field ID
   * @returns {*}
   */

	}, {
		key: 'id',
		value: function id() {
			return _core2.default.fieldID(this.element);
		}

		/**
   * Returns Field's Module Slug.
   * @returns {*}
   */

	}, {
		key: 'module',
		value: function module() {
			return this.option('module', false);
		}

		/**
   * Returns Field's Plugin Slug.
   * @returns {*}
   */

	}, {
		key: 'plugin_id',
		value: function plugin_id() {
			return this.option('plugin_id', false);
		}

		/**
   * Triggers An Ajax Action.
   * @param $action
   * @param $data
   */

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
			$data.data = false === window.wponion._.isUndefined($data.data) ? window.wponion._.merge($default, $data.data) : $default;

			return _core2.default.ajax($data);
		}

		/**
   * Inits A Single Element.
   * @param $type
   * @param $elem
   */

	}, {
		key: 'init_single_field',
		value: function init_single_field($type, $elem) {
			wponion_init_field($type, $elem);
		}

		/**
   * Inits A Single Field Type
   * @uses init_single_field.
   * @param $elem
   * @param $type
   */

	}, {
		key: 'init_field',
		value: function init_field($elem, $type) {
			var _this4 = this;

			if (!is_jquery($elem)) {
				$elem = this.element.find($elem);
			}

			if ($elem.length > 0) {
				$elem.each(function (i, e) {
					return _this4.init_single_field($type, jQuery(e));
				});
			}
		}

		/**
   * Reloads All Field Type Inside This Field.
   */

	}, {
		key: 'reload',
		value: function reload() {
			window.wponion.hooks.doAction('wponion_before_fields_reload');

			this.init_field('.wponion-element-accordion', 'accordion');
			this.init_field('.wponion-element-background', 'background');
			this.init_field('.wponion-element-backup', 'backup');
			this.init_field('.wponion-element-checkbox', 'checkbox_radio');
			this.init_field('.wponion-element-radio', 'checkbox_radio');
			this.init_field('.wponion-element-clone', 'clone_element');
			this.init_field('.wponion-element-color_palette', 'color_palette');
			this.init_field('.wponion-element-color_picker', 'color_picker');
			this.init_field('.wponion-element-select', 'select');
			this.init_field('.wponion-element-icon_picker', 'icon_picker');
			this.init_field('.wponion-element-font_picker', 'font_selector');
			this.init_field('.wponion-element-group', 'group');
			this.init_field('.wponion-element-text:not(.wponion-inputmask)', 'text');
			this.init_field('.wponion-element-textarea', 'textarea');
			this.init_field('.wponion-element-image_select', 'image_select');
			this.init_field('.wponion-element-switcher', 'switcher');
			this.init_field('.wponion-element-wp_editor', 'wp_editor');
			this.init_field('.wponion-element-fieldset', 'fieldset');
			this.init_field('.wponion-element-wp_link', 'wp_links');
			this.init_field('.wponion-element-key_value', 'keyvalue_pair');
			this.init_field('.wponion-element-date_picker', 'date_picker');
			this.init_field('.wponion-element-gallery', 'gallery');
			this.init_field('.wponion-element-upload', 'upload');
			this.init_field('.wponion-element-image', 'image_upload');
			this.init_field('.wponion-element-button_set', 'button_set');
			this.init_field('.wponion-element-tab', 'jquery_tab');
			this.init_field('.wponion-element-google_maps', 'google_maps');
			this.init_field('.wponion-element-sorter', 'sorter');
			this.init_field('.wponion-element-typography', 'typography');
			this.init_field('.wponion-element-oembed', 'oembed');
			this.init_field('.wponion-element-heading', 'heading');
			this.init_field('.wponion-element-subheading', 'subheading');
			this.init_field('.wponion-element-content', 'content');
			this.init_field('.wponion-element-jambo_content', 'jambo_content');
			this.init_field('.wponion-element-notice', 'notice');

			this.init_field('.wponion-field-tooltip', 'tooltip');
			this.init_field('.wponion-help', 'tooltip');
			this.init_field('.wponion-wrap-tooltip', 'tooltip');

			this.init_field('input[data-wponion-inputmask]', 'inputmask');
			this.init_field('.select2', 'select2');
			this.init_field('.chosen', 'chosen');
			this.init_field('.selectize', 'selectize');

			window.wponion.hooks.doAction('wponion_after_fields_reload');
			return this;
		}

		/**
   * Sets Args Data.
   * @param $args
   */

	}, {
		key: 'set_args',
		value: function set_args($args) {
			this._args = $args;
			return this;
		}

		/**
   * Returns Field Parent By data-wponion-jsid attribute.
   * @param $elem
   * @returns {*|jQuery|HTMLElement}
   */

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

/**
 * WPOnion Module JS Class
 */
var _class = function () {
	/**
  * WPOnion Module JS Class Constructor.
  * @param $selector
  * @param $context
  */
	function _class($selector) {
		var $context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		_classCallCheck(this, _class);

		if (!$selector.jQuery) {
			$selector = jQuery($selector);
		}
		this.set_element($selector);
		this.set_contxt($context);
		this.module_init();
	}

	/**
  * Triggers Module Init Function.
  */


	_createClass(_class, [{
		key: "module_init",
		value: function module_init() {}

		/**
   * Sets Element Args.
   * @param $elem
   */

	}, {
		key: "set_element",
		value: function set_element($elem) {
			if (!$elem.jQuery) {
				$elem = jQuery($elem);
			}
			this.elem = $elem;
			return this;
		}

		/**
   * Sets Contxt Args.
   * @param $contxt
   */

	}, {
		key: "set_contxt",
		value: function set_contxt($contxt) {
			this.context = $contxt;
			return this;
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

		/**
   * Returns Element Variable
   * @returns {*}
   */

	}, {
		key: "element",
		get: function get() {
			return this.elem;
		}

		/**
   * Returns Contxt Variable.
   * @returns {*}
   */

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

/**
 * WPOnion Field Validator Helper Class
 */
var WPOnion_Validator = function () {
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

	/**
  * Finds & Returns form Data.
  * @returns {*}
  */


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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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

		/**
   * Handles Javascript Error Placement.
   * @param err
   */

	}, {
		key: 'js_error',
		value: function js_error(err) {
			var $elem = _core2.default.IDtoElement(err.element, this.element);
			if ($elem) {
				err.error.appendTo($elem.find('> .wponion-fieldset'));
			}
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('accordion', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('background', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

/* global swal:true */

/* global tippy:true */

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var _this2 = this;

			this.tooltip();

			this.element.find('input[type="file"]').on('change', function (e) {
				_this2.handle_backup_import(e.currentTarget);
			});

			this.element.find('a.download_backup').on('click', function () {
				var $file = _this2.option('base_unique');
				$file = $file + '-' + _this2.module();
				var date = new Date();
				var str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + date.getMinutes() + date.getSeconds();
				$file = $file + '-' + str;
				_this2.force_download(JSON.parse(_this2.element.find('.backup_textarea textarea').html()), $file);
			});

			this.element.find('a.new_backup ').on('click', function () {
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
					onAlways: function onAlways() {
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
				} catch (error) {
					_this2.swal_error(_this2.option('invalid_format'));
				}
			});
		}

		/**
   * Generates Swal Error Msg.
   * @param msg
   */

	}, {
		key: 'swal_error',
		value: function swal_error(msg) {
			swal({
				type: 'error',
				title: msg
			});
		}

		/**
   * Handles ToolTip instance.
   * @param remove
   */

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

		/**
   * Blocks A Form
   */

	}, {
		key: 'block_form',
		value: function block_form() {
			jQuery(document).find('button').attr('disabled', 'disabled');
		}

		/**
   * Unblocks a form
   */

	}, {
		key: 'unblock_form',
		value: function unblock_form() {
			jQuery(document).find('button').removeAttr('disabled');
		}

		/**
   * Forces Download Export Data.
   * @param exportObj
   * @param exportName
   */

	}, {
		key: 'force_download',
		value: function force_download(exportObj, exportName) {
			var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj));
			var downloadAnchorNode = document.createElement('a');
			downloadAnchorNode.setAttribute('href', dataStr);
			downloadAnchorNode.setAttribute('download', exportName + '.json');
			document.body.appendChild(downloadAnchorNode); // required for firefox
			downloadAnchorNode.click();
			downloadAnchorNode.remove();
		}

		/**
   * Restores Backup Data.
   * @param backup_id
   */

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

		/**
   * Handles Backup Import File and restores it.
   * @param $elem
   */

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

		/**
   * Show's ToolTip
   * @param $elem
   */

	}, {
		key: 'show_tooltip',
		value: function show_tooltip($elem) {
			var $backupid = $elem.attr('data-backupid');
			var $appendTO = this.element[0];
			tippy($elem[0], {
				arrow: true,
				appendTo: $appendTO,
				arrowType: 'round',
				content: '<button data-backupid="' + $backupid + '" type="button" class="restore_backup button button-secondary button-small"><i class="dashicons-image-rotate dashicons"></i> </button> | <button data-backupid="' + $backupid + '" type="button" class="delete_backup button button-secondary button-small"><i class="dashicons-trash dashicons"></i> </button>',
				interactive: true,
				theme: 'translucent',
				onShown: function onShown() {
					jQuery('div.tippy-popper .tippy-content .delete_backup').tippy({
						arrow: true,
						arrowType: 'skinny',
						appendTo: $appendTO,
						content: _core2.default.txt('delete'),
						theme: 'light-border',
						interactive: false,
						placement: 'bottom'
					});

					jQuery('div.tippy-popper .tippy-content .restore_backup').tippy({
						arrow: true,
						arrowType: 'skinny',
						appendTo: $appendTO,
						content: _core2.default.txt('restore'),
						theme: 'light-border',
						placement: 'bottom'
					});
				},
				placement: 'right'
			});
		}

		/**
   * Returns Extra Value.
   * @returns {*}
   */

	}, {
		key: 'get_extra_value',
		value: function get_extra_value() {
			if (jQuery('form#post input#post_ID').length === 1) {
				return jQuery('form#post input#post_ID').val();
			}
			return false;
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('backup', function ($elem) {
		return new field($elem);
	});
}(window);

/***/ }),

/***/ "./src/js/fields/button_set.js":
/*!*************************************!*\
  !*** ./src/js/fields/button_set.js ***!
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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var _this2 = this;

			this.remove_active_class();
			this.add_active_class();
			this.element.find(':input').on('click', function (e) {
				_this2.remove_active_class();
				_this2.add_active_class();
			});
		}

		/**
   * Remove Active Class.
   */

	}, {
		key: 'remove_active_class',
		value: function remove_active_class() {
			var _this3 = this;

			this.element.find(':input').each(function (i, e) {
				var $e = jQuery(e);
				if (!$e.is(':checked')) {
					$e.parent().parent().removeClass(_this3.option('active'));
					$e.parent().parent().addClass(_this3.option('inactive'));
				}
			});
		}

		/**
   * Adds Active Class.
   */

	}, {
		key: 'add_active_class',
		value: function add_active_class() {
			var _this4 = this;

			this.element.find(':input').each(function (i, e) {
				var $e = jQuery(e);
				if ($e.is(':checked')) {
					$e.parent().parent().addClass(_this4.option('active'));
					$e.parent().parent().removeClass(_this4.option('inactive'));
				}
			});
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('button_set', function ($elem) {
		return new field($elem);
	});
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			if (this.element.find('.wponion-custom-value-input').length > 0) {
				var $custom_input = this.element.find('.wponion-custom-value-input');
				var $radios = this.element.find('input[type=radio]');
				var $checkbox = this.element.find('input[type=checkbox]');

				$custom_input.each(function () {
					jQuery(this).attr('data-name', jQuery(this).attr('name'));
					jQuery(this).removeAttr('name');
				});

				$radios.each(function (i, e) {
					if (jQuery(e).is(':checked')) {
						if (jQuery(e).parent().find('.wponion-custom-value-input').length > 0) {
							$custom_input.removeAttr('name');
							var $i = jQuery(e).parent().find('.wponion-custom-value-input');
							$i.attr('name', $i.attr('data-name'));
						}
					}
				});

				$radios.on('click', function (e) {
					if (jQuery(e.currentTarget).parent().find('.wponion-custom-value-input').length > 0) {
						$custom_input.removeAttr('name');
						var $i = jQuery(e.currentTarget).parent().find('.wponion-custom-value-input');
						$i.attr('name', $i.attr('data-name'));
					}
				});

				$checkbox.each(function (i, e) {
					if (jQuery(e).is(':checked')) {
						if (jQuery(e).parent().find('.wponion-custom-value-input').length > 0) {
							jQuery(e).removeAttr('name');
							var $i = jQuery(e).parent().find('.wponion-custom-value-input');
							$i.attr('name', $i.attr('data-name'));
						}
					}
				});

				$checkbox.on('click', function (e) {
					if (jQuery(e.currentTarget).parent().find('.wponion-custom-value-input').length > 0) {
						jQuery(e.currentTarget).removeAttr('name');
						var $i = jQuery(e.currentTarget).parent().find('.wponion-custom-value-input');
						$i.attr('name', $i.attr('data-name'));
					}
				});
			}
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('checkbox_radio', function ($elem) {
		return new field($elem);
	});
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var $arg = this.option('chosen', {});

			$arg = this.handle_args($arg, 'chosen');
			this.element.chosen($arg);
			return this;
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('chosen', function ($elem) {
		return new field($elem);
	});
}(window);

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

/* global wponion_field:true */
var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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
					$elem.trigger('change');
					ui.item.removeAttr('style');
				}
			} : false;

			$clone_wrap.WPOnionCloner({
				add_btn: $add_btn,
				limit: $limit,
				clone_elem: '.wponion-field-clone',
				remove_btn: '.wponion-clone-action > .wponion-remove',
				template: $this.option('clone_template'),
				templateAfterRender: function templateAfterRender($e) {
					$elem.trigger('change');
					wponion_field($e.find('> div.wponion-field-clone:last-child')).reload();
				},
				onRemoveAfter: function onRemoveAfter() {
					return $elem.trigger('change');
				},
				sortable: $sort,
				onLimitReached: function onLimitReached() {
					if ($add_btn.parent().find('div.alert').length === 0) {
						$add_btn.parent().prepend(jQuery($eror_msg).hide());
						$add_btn.parent().find('div.alert').slideDown();
						window.wponion_notice($add_btn.parent().find('div.alert, div.notice'));
					}
				},
				show_animation: $arg.animations.show,
				hide_animation: $arg.animations.hide
			});
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('clone_element', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('color_palette', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			this.element.find('input.wponion-color-picker-element').wpColorPicker();
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('color_picker', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('content', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var $this = this,
			    $elem = $this.element,
			    $settings = this.option('settings'),
			    $view = void 0;

			if (false === window.wponion._.isUndefined($settings.theme)) {
				$view = $settings.theme;
				delete $settings.theme;
			} else {
				$view = 'default';
			}
			if (jQuery('div#' + this.id() + 'datepicker').length === 0) {
				jQuery('body').append(jQuery('<div class="wponion-datepicker-' + $view + '" id="' + this.id() + 'datepicker"></div>'));
			}

			if ($elem.hasClass('wponion-datepicker-range')) {
				$settings.appendTo = jQuery('div#' + this.id() + 'datepicker')[0];
				if ($settings.plugins === undefined) {
					$settings.plugins = [];
				}

				$settings.plugins.push(new rangePlugin({ input: $elem.find('input[data-wponion-datepicker-to-date]')[0] }));
				$elem.find('input[data-wponion-datepicker-from-date]').flatpickr(this.handle_args($settings, 'date_picker'));
			} else {
				$settings.appendTo = jQuery('div#' + this.id() + 'datepicker')[0];
				$elem.find('input').flatpickr(this.handle_args($settings, 'date_picker'));
			}
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('date_picker', function ($elem) {
		return new field($elem);
	});
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'js_error',

		/**
   * Handles Javascript Error Placement.
   * @param err
   */
		value: function js_error(err) {
			var $elem = _core2.default.IDtoElement(err.element, this.element);
			if ($elem) {
				err.error.appendTo($elem.find('> .wponion-fieldset'));
			}
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('fieldset', function ($elem) {
		return new field($elem);
	});
}(window);

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

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'build_options',


		/**
   * Creats HTML Option Tag Using Array.
   * @param data
   * @returns {string}
   */
		value: function build_options(data) {
			var $return = '';
			for (var $_d in data) {
				if (false === window.wponion._.isUndefined(data[$_d])) {
					$return += '<option value="' + $_d + '">' + data[$_d] + '</option>';
				}
			}
			return $return;
		}

		/**
   * Inits Field.
   */

	}, {
		key: 'init',
		value: function init() {
			var _this2 = this;

			this.element.find('select.wponion-font-selector').on('change', function (e) {
				var $val = jQuery(e.currentTarget).val(),
				    $html = null;

				if (false === window.wponion._.isUndefined(_this2.websafe.fonts[$val])) {
					$html = _this2.build_options(_this2.websafe.variants);
				} else if (false === window.wponion._.isUndefined(_this2.google_fonts[$val])) {
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

		/**
   * Returns Websafe Font Data.
   * @returns {*}
   */
		get: function get() {
			return _core2.default.windowArgs('wponion_websafe_fonts');
		}

		/**
   * Returns Google Font Data.
   * @returns {*}
   */

	}, {
		key: 'google_fonts',
		get: function get() {
			return _core2.default.windowArgs('wponion_gfonts');
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('font_selector', function ($elem) {
		return new field($elem);
	});
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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
						$this.init_field('.wponion-help', 'tooltip');
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('gallery', function ($elem) {
		return new field($elem);
	});
}(window);

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


var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('google_maps', function ($elem) {
		return new field($elem);
	});
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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
			this.element.find('.wponion-group-remove').tippy({
				appendTo: function appendTo() {
					return _this2.get_field_parent_by_id(_this2.element)[0];
				}
			});
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
					_this2.element.trigger('change');
				},
				templateAfterRender: function templateAfterRender() {
					var $data = $group_wrap.find('> .wponion-accordion-wrap:last-child');
					$data.hide();
					_this2.update_groups_title();
					_this2.bind_events_for_title();
					_this2.init_field($group_wrap, 'accordion');
					//this.js_validate_elem( this.option( 'js_validate', false ), $data );
					$data.find('.wponion-group-remove').tippy({
						appendTo: function appendTo() {
							return _this2.get_field_parent_by_id(_this2.element)[0];
						}
					});
					window.wponion_field($data).reload();
					new _dependency2.default($group_wrap.find('> .wponion-accordion-wrap:last-child'), { nestable: true });
					_this2.init_field($data.find('.wponion-element-wp_editor'), 'reload_wp_editor');
					$data.slideDown();
					_this2.element.trigger('change');
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
						_this2.element.trigger('change');
					}

				},
				onLimitReached: function onLimitReached() {
					if ($add.parent().find('div.alert').length === 0) {
						$add.before(jQuery($error_msg).hide());
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
		key: 'bind_events_for_title',
		value: function bind_events_for_title() {
			var _this3 = this;

			var $elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			$elem = false === $elem ? this.element.find('> .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap') : $elem;
			$elem.each(function (i, e) {
				var $data = jQuery(e);

				var $mached = _this3.option('matched_heading_fields');
				for (var $key in $mached) {
					if ($mached.hasOwnProperty($key)) {
						var _$elem = $data.find(':input[data-depend-id="' + $mached[$key] + '"]');
						if (_$elem.length > 0) {
							_$elem.on('change, blur', function () {
								return _this3.update_groups_title();
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
					$heading = window.wponion._.replace($heading, '[count]', $limit);
				}

				var $mached = _this4.option('matched_heading_fields');
				for (var $key in $mached) {
					if ($mached.hasOwnProperty($key)) {
						var _$elem2 = $data.find(':input[data-depend-id="' + $mached[$key] + '"]');
						if (_$elem2.length > 0) {
							$heading = window.wponion._.replace($heading, $mached[$key], _$elem2.val());
						}
					}
				}

				if ($heading === '') {
					$heading = window.wponion._.replace(_this4.option('default_heading'), '[count]', $limit);
				}

				$data.find('> .wponion-accordion-title span.heading').html($heading);
				$limit++;
			});
		}

		/**
   * Handles Javascript Error Placement.
   * @param err
   */

	}, {
		key: 'js_error',
		value: function js_error(err) {
			var $elem = _core2.default.IDtoElement(err.element, this.element);
			/* if( $elem ) { //err.error.appendTo( $elem.find( '> .wponion-fieldset' ) ); } */
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('group', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('heading', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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
						$tp.appendTo = $work.elm[0];
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('icon_picker', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('image_select', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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
					title: $this.option('frame_title', 'Select Image')
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('image_upload', function ($elem) {
		return new field($elem);
	});
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('inputmask', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('jambo_content', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('jquery_tab', function ($elem) {
		return new field($elem);
	});
}(window);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
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
					_this2.element.trigger('change');
					_this2.js_validate_elem(_this2.option('js_validate', false), $elem.find('> div:last-child'));
				},
				onRemove: function onRemove($elem) {
					$elem.parent().remove();
					_this2.element.trigger('change');
					_this2.hook.doAction('wponion_key_value_updated', $elem);
				},
				onLimitReached: function onLimitReached() {
					if (_this2.element.find('div.alert').length === 0) {
						_this2.element.find('.wponion-keyvalue_wrap').after(jQuery(_this2.option('error_msg')).hide());
						_this2.element.find('div.alert').slideDown();
						window.wponion_notice(_this2.element.find('div.alert, div.notice'));
					}
				}
			});
		}

		/**
   * Handles Javascript Error Placement.
   * @param err
   */

	}, {
		key: 'js_error',
		value: function js_error(err) {
			err.error.appendTo(err.element.parent().parent());
		}

		/**
   * Handles Javascript Validation Inputs
   * @param $args
   * @param $elem
   */

	}, {
		key: 'js_validate_elem',
		value: function js_validate_elem($args, $elem) {
			if (true !== window.wponion._.isUndefined($args.key)) {
				$elem.find('.wponion-keyvalue-field').each(function () {
					jQuery(this).find('> div').eq(0).find(':input').rules('add', $args.key);
				});
			}
			if (true !== window.wponion._.isUndefined($args.value)) {
				$elem.find('.wponion-keyvalue-field').each(function () {
					jQuery(this).find('> div').eq(1).find(':input').rules('add', $args.value);
				});
			}

			if (true === window.wponion._.isUndefined($args.key) && true === window.wponion._.isUndefined($args.value)) {
				$elem.find(':input').each(function () {
					jQuery(this).rules('add', $args);
				});
			}
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('keyvalue_pair', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('notice', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var _this2 = this;

			this.image = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTBGNEVDQjg4RDAxRTAxMThBMkRDNEU2NzhFQkEzRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5N0E3OEE1OUNFMTFFNTg1RUVBMEU5N0I2QkZBMzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUU5N0E3ODk1OUNFMTFFNTg1RUVBMEU5N0I2QkZBMzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNCBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDM2MDU2QzJGQkVERTAxMTk1NUVCRTAzRUE4QjRENUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEVGNEVDQjg4RDAxRTAxMThBMkRDNEU2NzhFQkEzRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAETARMDAREAAhEBAxEB/8QAiQABAAMAAwEBAAAAAAAAAAAAAAQFBgEDBwIIAQEAAAAAAAAAAAAAAAAAAAAAEAABAwMDAQMGBw8CAwkAAAABAAIDEQQFIRIGMUETB1FhcYEiMpGhscFCghThUmJykqKywiMzc7N0FTYkN9HTF+JDU5OjVDVVFhEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/VKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOueeKCMySuDGDqSg6I8vjXmjZ2/Wq35QEHey4t5PclY/8AFcD8iDsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFNyeXbbRR/fuJ/JH3UGb3IOdyDsjvLmP93K9vmDiEElmcybBQTkjzhp+MhBIZya9bQOZG/ymhB+IoJMfKW/95b+trv+IQSY+SY93vB7PORUfESgkx5jGSe7cNH41W/pUQS2PY9oexwc09HA1BQcoCAgICAgICAgICAgICAgICAgICAgICAgIM3yqb9vBF960u/KNP1UFbioG3N/DC8bmOPtDygCpQaSTj2MePZYYz5WuPz1QRZOLQEfs5nA+cAoIz+L3Y9yZh9NR8yCM7j2VB0jDvOHN+chBGkxmSjNHW8nqaT8iDofHNGaPY5p8hBCD43INdx1jm4xpJ99znN9HT5kFmgICAgICAgICAgICAgICAgICAgICAgICAgx/J59+ULf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';
			this.element.find('.wponion-oembed-preview').before('<span class="spinner wponion-spinner"></span>');
			this.element.find(':input').on('change', function (e) {
				return _this2.show_preview(e);
			});
		}

		/**
   * Handles OEmbed Preview.
   */

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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('oembed', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('select', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var _this2 = this;

			var $arg = this.option('select2', {});
			if (window.wponion._.isUndefined($arg.dropdownParent)) {
				$arg.dropdownParent = this.get_field_parent_by_id(this.element);
			}

			if (this.option('ajax')) {
				$arg.ajax = {
					processResults: function processResults(data) {
						var terms = [];
						if (data) {
							jQuery.each(data, function (id, text) {
								terms.push({ id: id, text: text });
							});
						}
						return {
							results: terms
						};
					},
					data: function data(params) {
						return {
							q: params.term,
							query_args: _this2.option('query_args'),
							query_options: _this2.option('query_options')
						};
					},
					transport: function transport(params, success, failure) {
						return _this2.ajax('ajax-wp-query-data', {
							data: params.data,
							onSuccess: success,
							onError: failure
						});
					}
				};
			}

			$arg = this.handle_args($arg, 'select2');
			this.element.select2($arg);
			return this;
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('select2', function ($elem) {
		return new field($elem);
	});
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

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
				}
			});

			// avoid conflict
			$disabled.sortable({
				connectWith: $enabled,
				placeholder: 'ui-sortable-placeholder'
			});
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('sorter', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('subheading', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('switcher', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('text', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('textarea', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

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

				var $_attrs = ' font-family:' + $font + '; ' + ' font-weight:' + $font_weight_style.weight + '; ' + ' font-style:' + $font_weight_style.style + '; ' + ' text-align:' + $align + '; ' + ' color: ' + $color + ';' + ' font-size:' + (0, _css_units2.default)($fontSize) + '; ' + ' letter-spacing:' + (0, _css_units2.default)($letterSpacing) + '; ' + ' line-height:' + (0, _css_units2.default)($lineHeight) + '; ';

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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('typography', function ($elem) {
		return new field($elem);
	});
}(window);

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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var $this = this,
			    $elem = $this.element,
			    $add = $elem.find('button'),
			    $input = $elem.find('input[type=text]'),
			    $settings = $this.option('settings', {
				frame_title: 'Upload',
				upload_type: 'image',
				insert_title: 'Use'
			}),
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('upload', function ($elem) {
		return new field($elem);
	});
}(window);

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

exports.default = function (w) {
  return w.wponion_register_field('wp_editor', function ($elem) {
    return new window.wponion.field_abstract($elem);
  });
}(window);

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
var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('wp_links', function ($elem) {
		return new field($elem);
	});
}(window);

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

/**
 * WPOnion Dependency Helper Class.
 */
var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	/**
  * WPOnion Dependency Helper Class.
  * @param $selector
  * @param $contxt
  * @param $config
  */
	function _class($selector, $contxt, $config) {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, $selector, $contxt, $config));
	}

	/**
  * Inits Dependency Worker.
  */


	_createClass(_class, [{
		key: 'init',
		value: function init() {
			var $dep = this.option('dependency');
			for (var $key in $dep.controller) {
				if ($dep.controller.hasOwnProperty($key) && $dep.condition.hasOwnProperty($key) && $dep.value.hasOwnProperty($key)) {
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

/***/ "./src/js/helpers/functions.js":
/*!*************************************!*\
  !*** ./src/js/helpers/functions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var _arguments = arguments;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global arguments:true */
/* global console:true */
/* global tippy:true */

exports.default = function (window, document, $, jQuery) {
	/**
  * WPOnion Related Functions.
  */
	$.fn.extend({
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
				$(this).removeClass('animated ' + animationName);
				if (typeof callback === 'function') {
					callback($(this));
				}
			});

			return this;
		},

		/**
   * A Custom Wrap Class To Handle Tippy Instance
   * @param $arguments
   * @returns {*}
   */
		tippy: function (_tippy) {
			function tippy(_x) {
				return _tippy.apply(this, arguments);
			}

			tippy.toString = function () {
				return _tippy.toString();
			};

			return tippy;
		}(function ($arguments) {
			var tippy_helper = {
				create_instance: function create_instance($elem, $arguments) {
					$arguments = typeof $arguments === 'undefined' ? {} : $arguments;
					if ($elem.attr('data-tippy-instance-id') === undefined) {
						var $_instance_id = 'Tippy' + window.wponion.core.rand_id();
						$elem.attr('data-tippy-instance-id', $_instance_id);

						var $title = $elem.attr('title');
						var $data_tippy = $elem.attr('data-tippy');

						if ($title && $title !== '') {
							if (typeof $arguments.content === 'undefined') {
								$arguments.content = $title;
							}
						}

						if ($data_tippy && $data_tippy !== '') {
							if (typeof $arguments.content === 'undefined') {
								$arguments.content = $data_tippy;
							}
						}

						window[$_instance_id] = tippy($elem[0], $arguments);
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
		}),

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
		}
	});

	/**
  * Returns A Abstract Class Instance.
  * @param $elem
  * @param $contxt
  * @returns {{ajax(*=, *=): *, js_error(*): void, init_field(*=, *): void, set_args(*): *, js_validate_elem(*=, *): void, js_error_handler(*=): void, id(): *, plugin_id(): *, field_debug(): (undefined), handle_args(*=, *=): *, maybe_js_validate_elem(*=, *=): void, get_field_parent_by_id(*=): *, option(*=, *=): *, options(): *, js_validator(): void, init(), reload(): *, module(): *, set_contxt(*): *, contxt: *, element: *, hook: *, module_init(), set_element(*=): *}|*|window.wponion.field_abstract}
  */
	window.wponion_field = function ($elem) {
		var $contxt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return new window.wponion.field_abstract($elem, $contxt);
	};

	/**
  * Handles WPOnion Notices.
  * @param $elem
  * @returns {*}
  */
	window.wponion_notice = function ($elem) {
		if ($elem.find('.wponion-remove').length > 0) {
			$elem.each(function () {
				var _this = this;

				var $_el = jQuery(this);
				jQuery(this).find('.wponion-remove').tippy({
					appendTo: function appendTo() {
						return jQuery(_this)[0];
					}
				});
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

	/**
  * Basic WPOnion JS Setup.
  */
	window.wponion_setup = function () {
		if (window.wponion._.isUndefined(window.wponion.core.settings_args)) {
			var $core = window.wponion.core.windowArgs('wponion_core', false);
			var $tans = window.wponion.core.windowArgs('wponion_il8n', false);
			if (false === $core) {
				return;
			}
			window.wponion.core.settings_args = $core;
			window.wponion.core.text = $tans;
			window.wponion.core.debug_info = null;
			window.wponion.core.field_debug_info = null;
		}
	};

	/**
  * Registers With A Field Callback Hook.
  * @param $type
  * @param $callback
  * @param $module
  */
	window.wponion_register_field = function ($type, $callback) {
		var $module = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

		$module = '' === $module ? '' : $module + '_';
		window.wponion.hooks.addAction('wponion_init_' + $module + 'field_' + $type, 'wponion_core', function ($elem) {
			try {
				$callback($elem);
			} catch (e) {
				console.log(_arguments, ' \n' + e + '  \nFor : wponion_init_' + $module + 'field_' + $type);
			}
		});
	};

	/**
  * Function Used outside of WPOnion To Create
  * @param $init_method
  * @param $methods
  * @returns {{init: *, new(): $class, prototype: $class}}
  */
	window.wponion_create_field = function ($init_method) {
		var $methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		var $org_class = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js").default;
		var $class = function (_$org_class) {
			_inherits($class, _$org_class);

			function $class() {
				_classCallCheck(this, $class);

				return _possibleConstructorReturn(this, ($class.__proto__ || Object.getPrototypeOf($class)).apply(this, arguments));
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
  * Triggers A Field JS Function To Render it Properly
  * @param $field_type
  * @param $argument
  * @param $module
  * @param $log_err
  */
	window.wponion_init_field = function ($field_type, $argument) {
		var $module = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
		var $log_err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

		$module = '' === $module ? '' : $module + '_';
		if (window.wponion.hooks.hasAction('wponion_init_' + $module + 'field_' + $field_type)) {
			window.wponion.hooks.doAction('wponion_init_' + $module + 'field_' + $field_type, $argument);
		} else {
			if (true === $log_err) {
				console.error('WPOnion Field Type : ' + $field_type + ' Init Function Not Found', '\nAction Used : wponion_init_' + $module + 'field_' + $field_type);
			}
		}
	};
}(window, document, jQuery, jQuery);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Image POPUP View Class.
 */
var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Handles Image POPUP View.
   */
		value: function init() {
			var $image = window.wponion._.isUndefined(this.element.attr('data-fullsize')) ? this.element.attr('src') : this.element.attr('data-fullsize');
			swal({
				imageUrl: $image,
				animation: false,
				background: 'transparent',
				showConfirmButton: false,
				backdrop: 'rgba(0,0,0,0.44)'
			});
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('image_popup', function ($elem) {
		return new field($elem);
	});
}(window);

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

/**
 * WP Editor Helper
 */
var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'init',

		/**
   * WP Editor Helper
   */
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

				if (false === window.wponion._.isUndefined($mce_editor)) {
					$mce_editor.selector = '#' + $NEW_ID;
					tinymce.init($mce_editor);
					tinyMCE.execCommand('mceAddEditor', false, '#' + $NEW_ID);
				}

				if (false === window.wponion._.isUndefined($quick_tags)) {
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

/***/ "./src/js/helpers/tooltip.js":
/*!***********************************!*\
  !*** ./src/js/helpers/tooltip.js ***!
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

/**
 * WPOnion Field ToolTip
 */
var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Handle Each And Every Single Field ToolTip.
   */
		value: function init() {
			var _this2 = this;

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
				var $classToCheck = ['data-tippy', 'data-tippy-args', 'tippy-args'];
				var $found = false;
				for (var $k in $classToCheck) {
					var $attr = this.element.attr($classToCheck[$k]);
					if ($attr) {
						if (_core2.default.valid_json($attr)) {
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

			if (window.wponion._.isUndefined($arg.appendTo)) {
				$arg.appendTo = function () {
					return jQuery('div.wponion-element[data-wponion-jsid=' + _this2.id() + ']')[0];
				};
			}
			delete $arg.image;
			delete $arg.icon;
			this.element.tippy(this.handle_args($arg, $tooltip_key));
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('tooltip', function ($elem) {
		return new field($elem);
	});
}(window);

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
				$final_args = window.wponion._.merge($(this).serializeObject(), $final_args);
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

exports.default = function (window, document, $) {
	$(function () {
		if (!window.wp || !window.wp.blocks || !window.wp.editor) {
			return;
		}

		$(window).on('load', function () {
			//let $blocks     = window.wp.blocks;
			var $wpo_blocks = _core2.default.windowArgs('wponion_guttenberg_blocks');
			if (false === window.wponion._.isUndefined($wpo_blocks) && window.wponion._.isArray($wpo_blocks)) {
				for (var $key in $wpo_blocks) {
					if ($wpo_blocks.hasOwnProperty($key)) {
						new WPOnion_Guttenberg($key, $wpo_blocks[$key]);
					}
				}
			}
		});
	});
}(window, document, jQuery);

/***/ }),

/***/ "./src/js/modules/media-fields.js":
/*!****************************************!*\
  !*** ./src/js/modules/media-fields.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (window, document, $, wp) {
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

		window.wponion_setup();
		window.wponion_field($table.parent().find('.wponion-framework')).reload();
	};
	$(window).on('load', function () {
		if ($('.compat-attachment-fields').length > 0 && $('body').hasClass('post-type-attachment')) {
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

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WPOnion Metabox Module Handler.
 */
var WPOnion_Metabox_Module = function (_WPOnion_Module) {
	_inherits(WPOnion_Metabox_Module, _WPOnion_Module);

	function WPOnion_Metabox_Module() {
		_classCallCheck(this, WPOnion_Metabox_Module);

		return _possibleConstructorReturn(this, (WPOnion_Metabox_Module.__proto__ || Object.getPrototypeOf(WPOnion_Metabox_Module)).apply(this, arguments));
	}

	_createClass(WPOnion_Metabox_Module, [{
		key: 'module_init',

		/**
   * Inits Module.
   */
		value: function module_init() {
			this.menu();
			this.element.on('click', 'h2.ajax-container button', this.save_handler);
		}

		/**
   * Handles Metabox Menu's
   */

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
					var $href = window.wponion.helper.url_params(jQuery(this).attr('data-href')),
					    $parent = 'wponion-tab-' + $href['container-id'],
					    $section = $href['sub-container-id'] !== undefined ? $parent + '-' + $href['sub-container-id'] : false,
					    $parent_actives = $elem.find('div.wponion-parent-wraps'),
					    $current = $elem.find('div#' + $parent);

					$elem.find('div.wponion-section-wraps').hide();
					$parent_actives.hide();

					if ($href['sub-container-id'] !== undefined && $href['container-id'] !== undefined) {
						$current.find('div.wponion-section-wraps').hide();
						$current.find(' div#' + $section).show();
					}

					$current.show();

					$elem.find('ul.wponion-metabox-parent-menu a.active ').removeClass('active ');
					jQuery(this).addClass('active');
					$elem.find('ul.wponion-metabox-parent-menu > li > a').removeClass('active');
					$elem.find('ul.wponion-metabox-parent-menu a[data-wponion-id="wponion_menu_' + $href['container-id'] + '"]').addClass('active');
				}
			});
		}

		/**
   * Handles Ajax Save Handler.
   * @param e
   */

	}, {
		key: 'save_handler',
		value: function save_handler(e) {
			e.preventDefault();
			var $parent = jQuery(this).parent(),
			    $base = $parent.parent().parent(),
			    $hidden = $parent.find('div.wponion-metabox-secure-data');

			$base.block({ message: null, overlayCSS: { background: '#000', opacity: 0.7 } });

			$hidden.find('input').each(function () {
				jQuery(this).attr('name', jQuery(this).attr('id'));
			});
			var $fields = $parent.parent().find(':input');
			var $values = $fields.serialize();
			$hidden.find('input').removeAttr('name');

			_core2.default.ajax('save_metabox', { data: $values }, function (res) {
				$base.html(res);
				$base.unblock();
				window.wponion_field($base.find('.wponion-framework')).reload();
			});
		}
	}]);

	return WPOnion_Metabox_Module;
}(_module2.default);

exports.default = function (window, document, $) {
	$(function () {
		$('div.postbox.wponion-metabox').each(function () {
			new WPOnion_Metabox_Module($(this), false);
		});
	});
}(window, document, jQuery);

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

/**
 * WPOnion Quick Edit Module Handler.
 */
var WPOnion_Quick_Edit = function (_WPOnion_Module) {
	_inherits(WPOnion_Quick_Edit, _WPOnion_Module);

	function WPOnion_Quick_Edit() {
		_classCallCheck(this, WPOnion_Quick_Edit);

		return _possibleConstructorReturn(this, (WPOnion_Quick_Edit.__proto__ || Object.getPrototypeOf(WPOnion_Quick_Edit)).apply(this, arguments));
	}

	_createClass(WPOnion_Quick_Edit, [{
		key: 'module_init',

		/**
   * Module Init.
   */
		value: function module_init() {
			this.post_id = this.contxt;
			var $id = _core2.default.fieldID(this.element) + '_' + this.post_id;
			this.values = _core2.default.fieldArgs($id, false);

			if (this.values.html) {
				this.values.html = jQuery(this.values.html);
				this.element.parent().html(this.values.html.find('> div'));
			}

			window.wponion_field(this.element).reload();
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

/***/ "./src/js/modules/visual-composer.js":
/*!*******************************************!*\
  !*** ./src/js/modules/visual-composer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dependency = __webpack_require__(/*! ../core/dependency */ "./src/js/core/dependency.js");

var _dependency2 = _interopRequireDefault(_dependency);

var _validation = __webpack_require__(/*! ../core/validation */ "./src/js/core/validation.js");

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (window) {
	jQuery(window).on('load', function () {
		/**
   * Global Variable
   * window.wponion.vc / window.wponion_vc
   * @type {{fields: {abstract: ({new(*=, *=, *=): {param_name: *, save(*=, *): (undefined), vc_save(*=, *=): boolean, simple_array(*): *, key_value_array(*=): string, key_value_multi_array(*=): string, sorter_values(*=): *, encode_content(*=): *, is_vc_param_elem(*=): boolean, init_single_field: {(*=, *=): void, (*=, *=): void}, init(), js_error(*): void, js_error_handler(*=): void, js_validator(): void, maybe_js_validate_elem(*=, *=): void, js_validate_elem(*=, *): void, handle_args(*=, *=): (*|$data), field_debug(): (undefined), options(): *, option(*=, *=): *, id(): *, module(): *, plugin_id(): *, ajax(*=, *=): *, init_field(*=, *=): void, reload(): *, set_args(*): *, get_field_parent_by_id(*=): (*|jQuery|HTMLElement), module_init(), set_element(*=): *, set_contxt(*): *, hook: *, element: *, contxt: *}, new(*=, *=, *=): {param_name: *, save(*=, *): (undefined), vc_save(*=, *=): boolean, simple_array(*): *, key_value_array(*=): string, key_value_multi_array(*=): string, sorter_values(*=): *, encode_content(*=): *, is_vc_param_elem(*=): boolean, init_single_field: {(*=, *=): void, (*=, *=): void}, init(), js_error(*): void, js_error_handler(*=): void, js_validator(): void, maybe_js_validate_elem(*=, *=): void, js_validate_elem(*=, *): void, handle_args(*=, *=): (*|$data), field_debug(): (undefined), options(): *, option(*=, *=): *, id(): *, module(): *, plugin_id(): *, ajax(*=, *=): *, init_field(*=, *=): void, reload(): *, set_args(*): *, get_field_parent_by_id(*=): (*|jQuery|HTMLElement), module_init(), set_element(*=): *, set_contxt(*): *, hook: *, element: *, contxt: *}, new(*=, *=): {param_name: *, save(*=, *): (undefined), vc_save(*=, *=): boolean, simple_array(*): *, key_value_array(*=): string, key_value_multi_array(*=): string, sorter_values(*=): *, encode_content(*=): *, is_vc_param_elem(*=): boolean, init_single_field: {(*=, *=): void, (*=, *=): void}, init(), js_error(*): void, js_error_handler(*=): void, js_validator(): void, maybe_js_validate_elem(*=, *=): void, js_validate_elem(*=, *): void, handle_args(*=, *=): (*|$data), field_debug(): (undefined), options(): *, option(*=, *=): *, id(): *, module(): *, plugin_id(): *, ajax(*=, *=): *, init_field(*=, *=): void, reload(): *, set_args(*): *, get_field_parent_by_id(*=): (*|jQuery|HTMLElement), module_init(), set_element(*=): *, set_contxt(*): *, hook: *, element: *, contxt: *}, prototype: {param_name: *, save(*=, *): (undefined), vc_save(*=, *=): boolean, simple_array(*): *, key_value_array(*=): string, key_value_multi_array(*=): string, sorter_values(*=): *, encode_content(*=): *, is_vc_param_elem(*=): boolean, init_single_field: {(*=, *=): void, (*=, *=): void}, init(), js_error(*): void, js_error_handler(*=): void, js_validator(): void, maybe_js_validate_elem(*=, *=): void, js_validate_elem(*=, *): void, handle_args(*=, *=): (*|$data), field_debug(): (undefined), options(): *, option(*=, *=): *, id(): *, module(): *, plugin_id(): *, ajax(*=, *=): *, init_field(*=, *=): void, reload(): *, set_args(*): *, get_field_parent_by_id(*=): (*|jQuery|HTMLElement), module_init(), set_element(*=): *, set_contxt(*): *, hook: *, element: *, contxt: *}}|*)}}}
   */
		window.wponion.vc = window.wponion_vc = {
			fields: {
				abstract: __webpack_require__(/*! ./visual-composer/field */ "./src/js/modules/visual-composer/field.js").default
			}
		};

		/**
   * Simple Function To Init WPonion VC Module.
   */
		window.wponion_vc_init = function () {
			var $element = jQuery('.wponion-framework.wponion-module-vc');

			if ($element.length > 0) {
				wponion_setup();

				$element.each(function () {
					window.wponion_field(jQuery(this)).reload();
					window.wponion_vc_field(jQuery(this)).reload();
				});

				/**
     * Handles WPOnion VC Field Dependency.
     */
				new _dependency2.default($element, {}, {
					log: false,
					show: function show(el) {
						el.parent().parent().parent().slideDown();
						el.find(':input').removeClass('wponion-dependent');
					},
					hide: function hide(el) {
						el.parent().parent().parent().slideUp();
						el.find(':input').addClass('wponion-dependent');
					}
				});

				/**
     * Handles WPOnion VC Field Validations.
     */
				new _validation2.default(jQuery('.wpb_edit_form_elements'));
			}
		};

		/**
   * WPonion VC Field Class Insstance Creator.
   * @param $elem
   * @param $contxt
   * @returns {window.wponion.vc.fields.abstract}
   */
		window.wponion_vc_field = function ($elem) {
			var $contxt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			return new window.wponion.vc.fields.abstract($elem, $contxt);
		};

		/**
   * Function Used outside of WPOnion To Create VC Field
   * @param $init_method
   * @param $methods
   * @returns {{init: *, new(): $class, prototype: $class}}
   */
		window.wponion_create_vc_field = function ($init_method) {
			var $methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var $org_class = __webpack_require__(/*! ./visual-composer/field */ "./src/js/modules/visual-composer/field.js").default;
			var $class = function (_$org_class) {
				_inherits($class, _$org_class);

				function $class() {
					_classCallCheck(this, $class);

					return _possibleConstructorReturn(this, ($class.__proto__ || Object.getPrototypeOf($class)).apply(this, arguments));
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
   * Loads All Required Fields.
   */
		__webpack_require__(/*! ./visual-composer/single-value */ "./src/js/modules/visual-composer/single-value.js");
		__webpack_require__(/*! ./visual-composer/all-fields */ "./src/js/modules/visual-composer/all-fields.js");
		__webpack_require__(/*! ./visual-composer/select */ "./src/js/modules/visual-composer/select.js");
		__webpack_require__(/*! ./visual-composer/checkbox-radio */ "./src/js/modules/visual-composer/checkbox-radio.js");
	});
}(window);

/***/ }),

/***/ "./src/js/modules/visual-composer/all-fields.js":
/*!******************************************************!*\
  !*** ./src/js/modules/visual-composer/all-fields.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ./field */ "./src/js/modules/visual-composer/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var field = function (_WPOnion_VC_Field) {
	_inherits(field, _WPOnion_VC_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var _this2 = this;

			if (this.is_vc_param_elem()) {
				this.input_change();
				this.element.on('change', function () {
					return _this2.input_change();
				});
				this.element.on('wponion-sorter-updated', function () {
					return _this2.input_change();
				});
			}
		}

		/**
   * Function Hooks With :input change even and triggers save function.
   */

	}, {
		key: 'input_change',
		value: function input_change() {
			var _this3 = this;

			this.save(this.input_data(), 'sorter_values');
			this.element.find(':input').on('change', function () {
				_this3.save(_this3.input_data(), 'sorter_values');
			});
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	w.wponion_register_field('keyvalue_pair', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('background', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('wp_links', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('fieldset', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('accordion', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('group', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('jquery_tab', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('sorter', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('clone_element', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('font_selector', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('date_picker', function ($elem) {
		return new field($elem);
	}, 'vc');
}(window);

/***/ }),

/***/ "./src/js/modules/visual-composer/checkbox-radio.js":
/*!**********************************************************!*\
  !*** ./src/js/modules/visual-composer/checkbox-radio.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ./field */ "./src/js/modules/visual-composer/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var field = function (_WPOnion_VC_Field) {
	_inherits(field, _WPOnion_VC_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var _this2 = this;

			if (this.is_vc_param_elem()) {
				if (this.element.hasClass('wponion-element-radio') && 0 === this.element.find('.wponion-checkbox-radio-group').length) {
					this.handle();
					this.element.find(':input').on('change', function () {
						return _this2.handle();
					});
				} else if (this.element.find('input').length > 1) {
					this.handle();
					this.element.find(':input').on('change', function () {
						return _this2.handle();
					});
				} else {
					var $this = this;
					var $val = this.element.find('input').attr('value');
					this.element.find('input').attr('data-orgval', $val);
					this.element.find('input').on('change', function () {
						$this.handle_single_change(jQuery(this));
					});
					this.element.find('input').each(function () {
						$this.handle_single_change(jQuery(this));
					});
				}
			}
		}

		/**
   * Handles Single Checkbox Change Events.
   * @param $elem
   */

	}, {
		key: 'handle_single_change',
		value: function handle_single_change($elem) {
			if ($elem.is(':checked')) {
				$elem.val($elem.attr('data-orgval'));
			} else {
				$elem.val('false');
			}
		}

		/**
   * Handles Multiple Checkboxes
   */

	}, {
		key: 'handle',
		value: function handle() {
			this.save(this.input_data(), 'sorter_values');
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	w.wponion_register_field('checkbox_radio', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('image_select', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('color_palette', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('switcher', function ($elem) {
		return new field($elem);
	}, 'vc');
}(window);

/***/ }),

/***/ "./src/js/modules/visual-composer/field.js":
/*!*************************************************!*\
  !*** ./src/js/modules/visual-composer/field.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global wponion_init_field:true */


var base64_encode = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").base64_encode;
var rawurlencode = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").rawurlencode;

/**
 * Custom VC Abstract Field Class.
 */

var _class = function (_WPOnion_Field) {
	_inherits(_class, _WPOnion_Field);

	/**
  *
  * @param $selector
  * @param $context
  * @param $config
  */
	function _class($selector, $context) {
		var $config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, $selector, $context, $config));
	}

	/**
  * Returns Visual Composer Param name.
  * @returns {*}
  */


	_createClass(_class, [{
		key: 'save',


		/**
   * Checks And Converts Value To Save into VC.
   * @param $save_data
   * @param $type
   */
		value: function save($save_data, $type) {
			if ($save_data === null) {
				return;
			}

			var $value = '';

			if ($save_data !== '') {
				if ((typeof $save_data === 'undefined' ? 'undefined' : _typeof($save_data)) === 'object' && $type === 'array') {
					$value = this.simple_array($save_data);
				} else if ((typeof $save_data === 'undefined' ? 'undefined' : _typeof($save_data)) === 'object' && $type === 'key_value_array') {
					$value = this.key_value_array($save_data);
				} else if ((typeof $save_data === 'undefined' ? 'undefined' : _typeof($save_data)) === 'object' && $type === 'key_value_multi_array') {
					$value = this.key_value_multi_array($save_data);
				} else if ((typeof $save_data === 'undefined' ? 'undefined' : _typeof($save_data)) === 'object' && $type === 'sorter_values') {
					$value = this.sorter_values($save_data);
				}
			}
			this.vc_save($value);
		}

		/**
   * Saves Given Value To Visual Composer.
   * @param $param_name
   * @param $value
   * @returns {boolean}
   */

	}, {
		key: 'vc_save',
		value: function vc_save($value) {
			var $param_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.param_name;

			var $key = 'div#wponion-vc-settings';
			if (this.element.find($key).length === 0) {
				this.element.append('<div id="wponion-vc-settings" class="hidden" style="display: none;visibility: hidden;" ></div>');
			}

			if (this.element.find($key).length === 1) {
				var $parent = this.element.find($key);
				if ($parent.find('> #' + $param_name + '.wpb_vc_param_value').length === 0) {
					$parent.append(jQuery('<input type="hidden" value="" id="' + $param_name + '" name="' + $param_name + '" class="wpb_vc_param_value" />'));
				}

				$parent.find('> #' + $param_name + '.wpb_vc_param_value').val($value);
				return true;
			}
			return false;
		}

		/**
   * Converts An Array Into String Using ,
   * @param $save_data
   * @returns {*}
   */

	}, {
		key: 'simple_array',
		value: function simple_array($save_data) {
			return $save_data.join(',');
		}

		/**
   * Converts An Array Into Keyvalue as below
   * key:value|key2:value2
   *
   * @param $save_data
   * @returns {string}
   */

	}, {
		key: 'key_value_array',
		value: function key_value_array($save_data) {
			var $r = [];
			jQuery.each($save_data, function ($k, $v) {
				var $s = $k + ':' + $v;
				$r.push($s);
			});
			return $r.join('|');
		}

		/**
   * Converts Multiple Array as below
   * key:value,value2|key2:value3,value4
   *
   * @param $save_data
   * @returns {string}
   */

	}, {
		key: 'key_value_multi_array',
		value: function key_value_multi_array($save_data) {
			var $r = [];
			jQuery.each($save_data, function ($k, $v) {
				if ((typeof $v === 'undefined' ? 'undefined' : _typeof($v)) === 'object') {
					$v = $v.join(',');
				}
				var $s = $k + ':' + $v;
				$r.push($s);
			});
			return $r.join('|');
		}

		/**
   *
   * @param $save_data
   * @returns {*}
   */

	}, {
		key: 'sorter_values',
		value: function sorter_values($save_data) {
			return this.encode_content(JSON.stringify($save_data));
		}

		/**
   * Encodes String Into Base64.
   * @param $data
   */

	}, {
		key: 'encode_content',
		value: function encode_content($data) {
			return base64_encode(rawurlencode($data));
		}

		/**
   * Checks if given element is hooked To Visual Composer.
   * @param $parent
   * @returns {boolean}
   */

	}, {
		key: 'is_vc_param_elem',
		value: function is_vc_param_elem() {
			var $parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

			if ($parent.data('param-name') === undefined || $parent.data('param-name') === '') {
				return false;
			}
			return true;
		}

		/**
   * Inits Single Field.
   * @param $type
   * @param $elem
   */

	}, {
		key: 'init_single_field',
		value: function init_single_field($type, $elem) {
			wponion_init_field($type, $elem, 'vc', false);
		}

		/**
   * Converts Input Values Into JS/PHP Object/Array and returns it.
   * @returns {*}
   */

	}, {
		key: 'input_data',
		value: function input_data() {
			var $data = this.element.find(':input:not(.wpb_vc_param_value)').serializeObject();
			if (false === window.wponion._.isUndefined($data[this.param_name])) {
				return $data[this.param_name];
			}
			return $data;
		}
	}, {
		key: 'param_name',
		get: function get() {
			return this.element.data('param-name');
		}
	}]);

	return _class;
}(_field2.default);

exports.default = _class;

/***/ }),

/***/ "./src/js/modules/visual-composer/select.js":
/*!**************************************************!*\
  !*** ./src/js/modules/visual-composer/select.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ./field */ "./src/js/modules/visual-composer/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var field = function (_WPOnion_VC_Field) {
	_inherits(field, _WPOnion_VC_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			var _this2 = this;

			if (this.is_vc_param_elem()) {
				var $select = this.element.find('select');
				if ($select.length === 1 && 'multiple' === $select.attr('multiple')) {
					this.save($select.val(), 'array');
					$select.on('change', function (e) {
						return _this2.save(jQuery(e.currentTarget).val(), 'array');
					});
				}
			}
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	w.wponion_register_field('select', function ($elem) {
		return new field($elem);
	}, 'vc');
}(window);

/***/ }),

/***/ "./src/js/modules/visual-composer/single-value.js":
/*!********************************************************!*\
  !*** ./src/js/modules/visual-composer/single-value.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ./field */ "./src/js/modules/visual-composer/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var field = function (_WPOnion_VC_Field) {
	_inherits(field, _WPOnion_VC_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',

		/**
   * Inits Field.
   */
		value: function init() {
			if (this.is_vc_param_elem()) {
				this.element.find('input').addClass('wpb_vc_param_value');
			}
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	w.wponion_register_field('image_upload', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('upload', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('icon_picker', function ($elem) {
		return new field($elem);
	}, 'vc');
	w.wponion_register_field('gallery', function ($elem) {
		return new field($elem);
	}, 'vc');
}(window);

/***/ }),

/***/ "./src/js/modules/woocommerce.js":
/*!***************************************!*\
  !*** ./src/js/modules/woocommerce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (window, document, $) {
	$(function () {
		$('#woocommerce-product-data').on('woocommerce_variations_loaded', function () {
			window.wponion_field('.wponion-framework.wponion-woocommerce-variation').reload();
		});

		$('#variable_product_options').on('woocommerce_variations_added', function () {
			window.wponion_field('.wponion-framework.wponion-woocommerce-variation').reload();
		});
	});
}(window, document, jQuery);

/***/ }),

/***/ "./src/js/modules/wp-pointers.js":
/*!***************************************!*\
  !*** ./src/js/modules/wp-pointers.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _core = __webpack_require__(/*! ../core/core */ "./src/js/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (window, $) {
	$.fn.WPOnion_onAvailable = function (fn) {
		var sel = this.selector,
		    timer = void 0;
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
	};

	window.wponion_wp_pointer_create = function () {};

	$(window).on('load', function () {
		var $pointers_group = _core2.default.windowArgs('wp_pointers', false);

		if ($pointers_group) {
			var _loop = function _loop($group_id) {
				if (!$pointers_group.hasOwnProperty($group_id)) {
					return 'continue';
				}

				var _loop2 = function _loop2($pointer_key) {
					if (!$pointers_group[$group_id].hasOwnProperty($pointer_key)) {
						return 'continue';
					}

					var $pointer = $pointers_group[$group_id][$pointer_key];

					$($pointer.selector).WPOnion_onAvailable(function () {
						if (!$pointer.show) {
							$pointer.show = 'open';
						}

						var $handler = {
							content: '<h3>' + $pointer.title + '</h3><p>' + $pointer.text + '</p>',
							pointerWidth: parseInt($pointer.width),
							pointerClass: 'wp-pointer pointerplus' + $pointer.class,
							position: {
								edge: $pointer.edge,
								align: $pointer.align
							},
							close: function close() {
								return $.post(window.ajaxurl, {
									pointer: $pointer_key,
									action: 'dismiss-wp-pointer'
								});
							}
						};

						$handler.buttons = function (event, t) {
							var $button = void 0;
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
										$('.pp-' + $pointer.next + ' .pp-pointer-content h3').addClass('dashicons-before').addClass($next.icon_class);
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
							var setup = function setup() {
								$($pointer.selector).pointer($handler).pointer($pointer.show);
							};
							setup();
							$handler = null;
						} else {
							$pointers_group[$group_id][$pointer_key].instance = $handler;
						}
					});
				};

				for (var $pointer_key in $pointers_group[$group_id]) {
					var _ret2 = _loop2($pointer_key);

					if (_ret2 === 'continue') continue;
				}
			};

			for (var $group_id in $pointers_group) {
				var _ret = _loop($group_id);

				if (_ret === 'continue') continue;
			}

			for (var $id in $pointers_group) {
				if ($pointers_group.hasOwnProperty($id)) {
					for (var $pid in $pointers_group[$id]) {
						if ($pointers_group[$id].hasOwnProperty($pid)) {
							var $pointer = $pointers_group[$id][$pid];

							if ($pointers_group[$id][$pointer.next]) {
								//	jQuery( $pointers_group[ $id ][ $pointer.next ].selector ).pointer( 'close' );
							}
						}
					}
				}
			}
		}
	});
}(window, jQuery);

/***/ }),

/***/ "./src/js/wponion-core.js":
/*!********************************!*\
  !*** ./src/js/wponion-core.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dependency = __webpack_require__(/*! ./core/dependency */ "./src/js/core/dependency.js");

var _dependency2 = _interopRequireDefault(_dependency);

var _validation = __webpack_require__(/*! ./core/validation */ "./src/js/core/validation.js");

var _validation2 = _interopRequireDefault(_validation);

var _hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// VSP JS Helper Global.
window.vsp_js_helper = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js");

__webpack_require__(/*! ./helpers/functions */ "./src/js/helpers/functions.js");

// WPOnion Core Source.
window.wponion = window.wponion || Object.create({
	/**
  * Lodash noConflict Variable.
  */
	_: window.lodash.noConflict(),

	/**
  * Curated collection of useful JavaScript snippets.
  * @see https://www.npmjs.com/package/vsp-js-helper
  */
	helper: window.vsp_js_helper,

	/**
  * A lightweight & efficient EventManager for JavaScript.
  * @see https://www.npmjs.com/package/@wordpress/hooks
  */
	hooks: (0, _hooks.createHooks)()
});

/**
 * WPonion Modules.
 */
window.wponion.metabox = __webpack_require__(/*! ./modules/metabox */ "./src/js/modules/metabox.js").default;
window.wponion.wp_pointers = __webpack_require__(/*! ./modules/wp-pointers */ "./src/js/modules/wp-pointers.js").default;
window.wponion.media_fields = __webpack_require__(/*! ./modules/media-fields */ "./src/js/modules/media-fields.js").default;
window.wponion.bulk_edit = __webpack_require__(/*! ./modules/bulk-edit */ "./src/js/modules/bulk-edit.js").default;
window.wponion.guttenberg = __webpack_require__(/*! ./modules/guttenberg */ "./src/js/modules/guttenberg.js").default;
window.wponion.woocommerce = __webpack_require__(/*! ./modules/woocommerce */ "./src/js/modules/woocommerce.js").default;
window.wponion.quick_edit = __webpack_require__(/*! ./modules/quick-edit */ "./src/js/modules/quick-edit.js").default;
window.wponion.visual_composer = __webpack_require__(/*! ./modules/visual-composer */ "./src/js/modules/visual-composer.js").default;
window.wponion.modal = __webpack_require__(/*! ../vendors/backbone-modal */ "./src/vendors/backbone-modal.js").default;
window.wponion.ajaxer = __webpack_require__(/*! ./core/ajaxer */ "./src/js/core/ajaxer.js").WPOnion_Ajaxer;
window.wponion.ajax = __webpack_require__(/*! ./core/ajaxer */ "./src/js/core/ajaxer.js").default;
window.wponion.debug = __webpack_require__(/*! ./core/debug */ "./src/js/core/debug.js").default;
window.wponion.core = __webpack_require__(/*! ./core/core */ "./src/js/core/core.js").default;
window.wponion.field_abstract = __webpack_require__(/*! ./core/field */ "./src/js/core/field.js").default;

__webpack_require__(/*! ./wponion-fields */ "./src/js/wponion-fields.js");

module.exports = function (window, document, wp, $) {
	// Document On Load.
	$(function () {
		window.wponion_setup();
		var $wpof_div = $('.wponion-framework:not(.wponion-module-quick_edit-framework)');
		if ($wpof_div.length > 0) {
			window.wponion.hooks.doAction('wponion_before_theme_init', $wpof_div);
			$wpof_div.each(function () {
				window.wponion.hooks.doAction('wponion_theme_init', $(this));
			});
			window.wponion.hooks.doAction('wponion_after_theme_init', $wpof_div);
		}
	});

	// Window On Load.
	$(window).on('load', function () {

		window.wponion.hooks.doAction('wponion_before_init');

		var $wpof_div = $('.wponion-framework:not(.wponion-module-quick_edit-framework)');

		window.wponion_notice($wpof_div.find('.wponion-element-wp_notice, .wponion-element-notice'));

		window.wponion.core.submenu_indicator($(document).find('.wponion-submenu-i'));

		// Triggers Field Debug Data.
		$(document).on('click', '.wponion-field-debug-code > strong', function () {
			jQuery(this).next().slideToggle();
			jQuery(this).toggleClass('dashicons-arrow-down').toggleClass('dashicons-arrow-right');
		});

		// Triggers Hook With Widgets.
		$(document).on('widget-added widget-updated', function (event, $widget) {
			window.wponion_field($widget).reload();
			new _dependency2.default($widget);
		});

		// Triggers When New Menu Item Added.
		$(document).on('menu-item-added', function (event, $menu) {
			window.wponion_field($menu).reload();
			new _dependency2.default($menu);
		});

		if ($wpof_div.length > 0) {
			// Renders Validation.
			new _validation2.default();

			// Handles Fields init.
			window.wponion.hooks.doAction('wponion_before_fields_init', $wpof_div);
			$wpof_div.each(function () {
				window.wponion_field($(this)).reload();
				new _dependency2.default($(this));
			});
			window.wponion.hooks.doAction('wponion_after_fields_init', $wpof_div);
		}

		window.wponion.hooks.doAction('wponion_init');
	});

	window.wponion.hooks.doAction('wponion_loaded');
}(window, document, wp, jQuery);

/***/ }),

/***/ "./src/js/wponion-fields.js":
/*!**********************************!*\
  !*** ./src/js/wponion-fields.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./fields/text */ "./src/js/fields/text.js");
__webpack_require__(/*! ./fields/textarea */ "./src/js/fields/textarea.js");
__webpack_require__(/*! ./fields/button_set */ "./src/js/fields/button_set.js");
__webpack_require__(/*! ./fields/background */ "./src/js/fields/background.js");
__webpack_require__(/*! ./fields/image_select */ "./src/js/fields/image_select.js");
__webpack_require__(/*! ./fields/switcher */ "./src/js/fields/switcher.js");
__webpack_require__(/*! ./fields/color_palette */ "./src/js/fields/color_palette.js");
__webpack_require__(/*! ./fields/select */ "./src/js/fields/select.js");
__webpack_require__(/*! ./fields/select2 */ "./src/js/fields/select2.js");
__webpack_require__(/*! ./fields/chosen */ "./src/js/fields/chosen.js");
__webpack_require__(/*! ./fields/icon_picker */ "./src/js/fields/icon_picker.js");
__webpack_require__(/*! ./fields/font_selector */ "./src/js/fields/font_selector.js");
__webpack_require__(/*! ./fields/accordion */ "./src/js/fields/accordion.js");
__webpack_require__(/*! ./fields/group */ "./src/js/fields/group.js");
__webpack_require__(/*! ./fields/wp_editor */ "./src/js/fields/wp_editor.js");
__webpack_require__(/*! ./helpers/reload_wp_editor */ "./src/js/helpers/reload_wp_editor.js");
__webpack_require__(/*! ./fields/fieldset */ "./src/js/fields/fieldset.js");
__webpack_require__(/*! ./fields/inputmask */ "./src/js/fields/inputmask.js");
__webpack_require__(/*! ./fields/wp_links */ "./src/js/fields/wp_links.js");
__webpack_require__(/*! ./fields/checkbox_radio */ "./src/js/fields/checkbox_radio.js");
__webpack_require__(/*! ./fields/keyvalue_pair */ "./src/js/fields/keyvalue_pair.js");
__webpack_require__(/*! ./fields/color_picker */ "./src/js/fields/color_picker.js");
__webpack_require__(/*! ./fields/date_picker */ "./src/js/fields/date_picker.js");
__webpack_require__(/*! ./fields/gallery */ "./src/js/fields/gallery.js");
__webpack_require__(/*! ./helpers/image_popup */ "./src/js/helpers/image_popup.js");
__webpack_require__(/*! ./fields/upload */ "./src/js/fields/upload.js");
__webpack_require__(/*! ./fields/image_upload */ "./src/js/fields/image_upload.js");
__webpack_require__(/*! ./fields/jquery_tab */ "./src/js/fields/jquery_tab.js");
__webpack_require__(/*! ./helpers/tooltip */ "./src/js/helpers/tooltip.js");
__webpack_require__(/*! ./fields/clone_element */ "./src/js/fields/clone_element.js");
__webpack_require__(/*! ./fields/sorter */ "./src/js/fields/sorter.js");
__webpack_require__(/*! ./fields/google_maps */ "./src/js/fields/google_maps.js");
__webpack_require__(/*! ./fields/typography */ "./src/js/fields/typography.js");
__webpack_require__(/*! ./fields/oembed */ "./src/js/fields/oembed.js");
__webpack_require__(/*! ./fields/heading */ "./src/js/fields/heading.js");
__webpack_require__(/*! ./fields/subheading */ "./src/js/fields/subheading.js");
__webpack_require__(/*! ./fields/jambo_content */ "./src/js/fields/jambo_content.js");
__webpack_require__(/*! ./fields/notice */ "./src/js/fields/notice.js");
__webpack_require__(/*! ./fields/content */ "./src/js/fields/content.js");
__webpack_require__(/*! ./fields/backup */ "./src/js/fields/backup.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUFkZEhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUN1cnJlbnRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEaWRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEb2luZ0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhhc0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSZW1vdmVIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSdW5Ib29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVIb29rTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVOYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvaW5mby9pbmlfZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3htbC91dGY4X2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b193aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY29weV90b19jbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RldmljZV90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RpZmZfZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9mb3JtYXRfZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfYWZ0ZXJfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19iZWZvcmVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfc2FtZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3RhYl9mb2N1c2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc193aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BpcGVfbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BsYWluX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9xdWVyeV9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcmFuZF9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3Bvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9zY3JvbGxfdG9fdG9wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RpbWVfdGFrZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdG9fanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pzX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdXJsX3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy92YWxpZGF0ZVNpbmdsZUpTRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JkcHJlc3MtanMtcG9ydHMvZnVuY3Rpb25zL2FkZF9xdWVyeV9hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29yZHByZXNzLWpzLXBvcnRzL2Z1bmN0aW9ucy90cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvdW50cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9hamF4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2J1dHRvbl9zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2RhdGVfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9mb250X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2dvb2dsZV9tYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9oZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaWNvbl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qYW1ib19jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3ViaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2ltYWdlX3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9idWxrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZ3V0dGVuYmVyZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZWRpYS1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbWV0YWJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9xdWljay1lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvYWxsLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvY2hlY2tib3gtcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL3NpbmdsZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy93b29jb21tZXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy93cC1wb2ludGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9ycy9iYWNrYm9uZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiJdLCJuYW1lcyI6WyJjcmVhdGVBZGRIb29rIiwiaG9va3MiLCJhZGRIb29rIiwiaG9va05hbWUiLCJuYW1lc3BhY2UiLCJjYWxsYmFjayIsInByaW9yaXR5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlciIsImhhbmRsZXJzIiwiaSIsInNwbGljZSIsIl9fY3VycmVudCIsImZvckVhY2giLCJob29rSW5mbyIsIm5hbWUiLCJjdXJyZW50SW5kZXgiLCJydW5zIiwiY3JlYXRlQ3VycmVudEhvb2siLCJjdXJyZW50SG9vayIsImNyZWF0ZURpZEhvb2siLCJkaWRIb29rIiwiY3JlYXRlRG9pbmdIb29rIiwiZG9pbmdIb29rIiwiY3JlYXRlSGFzSG9vayIsImhhc0hvb2siLCJjcmVhdGVIb29rcyIsImFjdGlvbnMiLCJPYmplY3QiLCJjcmVhdGUiLCJmaWx0ZXJzIiwiYWRkQWN0aW9uIiwiYWRkRmlsdGVyIiwicmVtb3ZlQWN0aW9uIiwicmVtb3ZlRmlsdGVyIiwiaGFzQWN0aW9uIiwiaGFzRmlsdGVyIiwicmVtb3ZlQWxsQWN0aW9ucyIsInJlbW92ZUFsbEZpbHRlcnMiLCJkb0FjdGlvbiIsImFwcGx5RmlsdGVycyIsImN1cnJlbnRBY3Rpb24iLCJjdXJyZW50RmlsdGVyIiwiZG9pbmdBY3Rpb24iLCJkb2luZ0ZpbHRlciIsImRpZEFjdGlvbiIsImRpZEZpbHRlciIsImNyZWF0ZVJlbW92ZUhvb2siLCJyZW1vdmVBbGwiLCJyZW1vdmVIb29rIiwiaGFuZGxlcnNSZW1vdmVkIiwiX2xvb3AiLCJjcmVhdGVSdW5Ib29rIiwicmV0dXJuRmlyc3RBcmciLCJydW5Ib29rcyIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwicHVzaCIsInJlc3VsdCIsImFwcGx5IiwicG9wIiwiX2NyZWF0ZUhvb2tzIiwidmFsaWRhdGVIb29rTmFtZSIsInRlc3QiLCJ2YWxpZGF0ZU5hbWVzcGFjZSIsIkpTX1BhcnNlX0FyZ3MiLCIkYXJncyIsIiRkZWZhdWx0cyIsIiRpc19uZXN0ZWQiLCJkZWZhdWx0cyIsIm5lc3RlZCIsInBhcnNlIiwiJF9rZXkiLCIkaXNfZGVlcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtaWNyb3RpbWUiLCJnZXRBc0Zsb2F0IiwicyIsIm5vdyIsInBlcmZvcm1hbmNlIiwidGltaW5nIiwibmF2aWdhdGlvblN0YXJ0IiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJjYWxsX3VzZXJfZnVuYyIsImNiIiwicGFyYW1ldGVycyIsImNhbGxVc2VyRnVuY0FycmF5IiwicmVxdWlyZSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiY2FsbF91c2VyX2Z1bmNfYXJyYXkiLCIkZ2xvYmFsIiwid2luZG93IiwiZ2xvYmFsIiwiZnVuYyIsInNjb3BlIiwidmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4iLCJtYXRjaCIsIkZ1bmN0aW9uIiwidG9TdHJpbmciLCJldmFsIiwiRXJyb3IiLCJjcmVhdGVfZnVuY3Rpb24iLCJjb2RlIiwic3BsaXQiLCJjb25jYXQiLCJlIiwiZnVuY3Rpb25fZXhpc3RzIiwiZnVuY05hbWUiLCJpbmlfZ2V0IiwidmFybmFtZSIsIiRsb2N1dHVzIiwicGhwIiwiaW5pIiwibG9jYWxfdmFsdWUiLCJtZDUiLCJzdHIiLCJoYXNoIiwiY3J5cHRvIiwibWQ1c3VtIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsInV0ZjhFbmNvZGUiLCJ4bCIsIl9yb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsIl9hZGRVbnNpZ25lZCIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiX0YiLCJ4IiwieSIsInoiLCJfRyIsIl9IIiwiX0kiLCJfRkYiLCJhIiwiYiIsImMiLCJkIiwiYWMiLCJfR0ciLCJfSEgiLCJfSUkiLCJfY29udmVydFRvV29yZEFycmF5IiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNUZW1wMSIsImxOdW1iZXJPZldvcmRzVGVtcDIiLCJsTnVtYmVyT2ZXb3JkcyIsImxXb3JkQXJyYXkiLCJsQnl0ZVBvc2l0aW9uIiwibEJ5dGVDb3VudCIsImNoYXJDb2RlQXQiLCJfd29yZFRvSGV4Iiwid29yZFRvSGV4VmFsdWUiLCJ3b3JkVG9IZXhWYWx1ZVRlbXAiLCJsQnl0ZSIsImxDb3VudCIsInN1YnN0ciIsImsiLCJBQSIsIkJCIiwiQ0MiLCJERCIsIlMxMSIsIlMxMiIsIlMxMyIsIlMxNCIsIlMyMSIsIlMyMiIsIlMyMyIsIlMyNCIsIlMzMSIsIlMzMiIsIlMzMyIsIlMzNCIsIlM0MSIsIlM0MiIsIlM0MyIsIlM0NCIsInRlbXAiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlX3N0ciIsImFycmF5Iiwic3RyQXJyIiwiU3RyaW5nIiwicmVwbGFjZSIsInNhbCIsImoiLCJjdCIsInAiLCJsYXN0T2JqIiwiY2hyIiwidG1wIiwia2V5IiwidmFsdWUiLCJwb3N0TGVmdEJyYWNrZXRQb3MiLCJrZXlzIiwia2V5c0xlbiIsIl9maXhTdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGFyQXQiLCJpbmRleE9mIiwiaGFzT3duUHJvcGVydHkiLCJydHJpbSIsImNoYXJsaXN0IiwicmUiLCJSZWdFeHAiLCJzdHJwb3MiLCJoYXlzdGFjayIsIm5lZWRsZSIsIm9mZnNldCIsImJhc2U2NF9kZWNvZGUiLCJlbmNvZGVkRGF0YSIsImRlY29kZVVURjhzdHJpbmciLCJtYXAiLCJqb2luIiwiYXRvYiIsIkJ1ZmZlciIsImI2NCIsIm8xIiwibzIiLCJvMyIsImgxIiwiaDIiLCJoMyIsImg0IiwiYml0cyIsImRlYyIsInRtcEFyciIsImZyb21DaGFyQ29kZSIsImJhc2U2NF9lbmNvZGUiLCJzdHJpbmdUb0VuY29kZSIsImVuY29kZVVURjhzdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b1NvbGlkQnl0ZXMiLCJwMSIsImJ0b2EiLCJlbmMiLCJyIiwiaHR0cF9idWlsZF9xdWVyeSIsImZvcm1kYXRhIiwibnVtZXJpY1ByZWZpeCIsImFyZ1NlcGFyYXRvciIsImVuY1R5cGUiLCJlbmNvZGVGdW5jIiwiX2h0dHBCdWlsZFF1ZXJ5SGVscGVyIiwidmFsIiwiaXNOYU4iLCJxdWVyeSIsInBhcnNlX3VybCIsImNvbXBvbmVudCIsIm1vZGUiLCJwYXJzZXIiLCJzdHJpY3QiLCJsb29zZSIsIm0iLCJleGVjIiwidXJpIiwiJDAiLCIkMSIsIiQyIiwic291cmNlIiwicmF3dXJsZGVjb2RlIiwicmF3dXJsZW5jb2RlIiwidXJsZGVjb2RlIiwidXJsZW5jb2RlIiwiaXNfY2FsbGFibGUiLCJtaXhlZFZhciIsInN5bnRheE9ubHkiLCJjYWxsYWJsZU5hbWUiLCJtZXRob2QiLCJ2YWxpZEZ1bmN0aW9uTmFtZSIsImdldEZ1bmNOYW1lIiwiZm4iLCJ1dGY4X2VuY29kZSIsImFyZ1N0cmluZyIsInN0cmluZyIsInV0ZnRleHQiLCJzdGFydCIsImVuZCIsInN0cmluZ2wiLCJuIiwiYzEiLCJSYW5nZUVycm9yIiwiYzIiLCJwYXJzZV9hcmdzIiwiYXJyYXlfdG9faHRtbF9hdHRyIiwiYXJyYXlfdG9faHRtbCIsImFycmF5X3RvX3dpbmRvdyIsInBsYWluX29iamVjdCIsImlzX2FmdGVyX2RhdGUiLCJpc19iZWZvcmVfZGF0ZSIsImlzX3NhbWVfZGF0ZSIsImZvcm1hdF9kdXJhdGlvbiIsImRpZmZfZGF5cyIsInRpbWVfdGFrZW4iLCJpc191cmwiLCJpc190YWJfZm9jdXNlZCIsImlzX3dpbmRvd19hcmciLCJzY3JvbGxfdG9fdG9wIiwiY29weV90b19jbGlwIiwic2Nyb2xsX3BvcyIsIndpbmRvd19hcmciLCJkZXZpY2VfdHlwZSIsInBpcGVfbG9nIiwidG9fanF1ZXJ5IiwiaXNfanF1ZXJ5IiwidG9fanNfZnVuYyIsImNvdW50ZXIiLCJyYW5kX21kNSIsImNzc191bml0cyIsInVybF9wYXJhbXMiLCJxdWVyeV9zdHJpbmciLCJhcnIiLCJsaXN0SUQiLCJ0YWciLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIml0ZW0iLCIkZGF0YSIsInJldHVybl9odG1sIiwiSSIsIl8iLCJpc09iamVjdCIsIksiLCIkdmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiJGFycmF5IiwiJGtleSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdGVkIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJzZWxlY3RvciIsInN0ZXAiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJfc3RlcCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWJzIiwiZmxvb3IiLCJpc051bWJlciIsImNoZWNrUHgiLCJjaGVja1BjdCIsImNoZWNrRW0iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYXRlSW5pdGlhbCIsImRhdGVGaW5hbCIsIm1zIiwidGltZSIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJtaWxsaXNlY29uZCIsImVudHJpZXMiLCJmaWx0ZXIiLCJkYXRlQSIsImRhdGVCIiwiJGVsZW0iLCJpc1VuZGVmaW5lZCIsImlzU3RyaW5nIiwialF1ZXJ5IiwidG9JU09TdHJpbmciLCJoaWRkZW4iLCIkdXJsIiwicGF0dGVybiIsImxvZyIsImRhdGEiLCJyZWdleCIsInJlc3VsdHMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJhbmRvbSIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRpdGxlIiwidGltZUVuZCIsIiRhcmdzX2tleSIsIiRjb250ZW50c19rZXkiLCJpc0VtcHR5IiwidXJsIiwicmVkdWNlIiwidiIsIiRzdHJpbmciLCIkY29udGVudHMiLCIkX2siLCJhZGRfcXVlcnlfYXJnIiwiaHJlZiIsIiRwYXJzZWQiLCIkcXVlcnkiLCIkZnJhZ21lbnQiLCJmcmFnbWVudCIsInNwbGl0X3VybCIsImJhc2VfdXJsIiwicmVtb3ZlX3F1ZXJ5X2FyZyIsImRlZmF1bHQiLCJ0cmFpbGluZ3NsYXNoaXQiLCJ1bnRyYWlsaW5nc2xhc2hpdCIsIldQT25pb25fQWpheGVyIiwiJGFqYXhfYXJncyIsIiRhamF4X2NvbmZpZyIsImFqYXh1cmwiLCJzdWNjZXNzIiwiYWx3YXlzIiwiYWN0aW9uIiwiZGVmYXVsdF9jb25maWdzIiwicmVzcG9uc2VfZWxlbWVudCIsImJ1dHRvbiIsImVsZW1lbnQiLCJzcGlubmVyIiwiaW5zdGFuY2UiLCJhamF4X2FyZ3MiLCJ3cG9uaW9uIiwibWVyZ2UiLCJhamF4X2NvbmZpZyIsImFqYXgiLCIkY29kZSIsInNpbmdsZV9jYWxsYmFjayIsIiRjYWxsYmFjayIsImlzRnVuY3Rpb24iLCIkY2FsbGJhY2tzIiwiaGFuZGxlX2NhbGxiYWNrcyIsImJ1dHRvbl91bmxvY2siLCJidXR0b25fbG9jayIsIiRjb25maWciLCJjbG9uZSIsIiR1cmxfcGFyYW1zIiwid3AiLCJzZW5kIiwiZG9uZSIsIm9uU3VjY2VzcyIsImZhaWwiLCJvbkVycm9yIiwib25BbHdheXMiLCIkZGVmYXVsdCIsImhhc19jb25maWciLCJjb25maWciLCIkYnV0dG9uIiwid3BvX2J1dHRvbiIsImF0dHIiLCIkc3Bpbm5lciIsImFkZENsYXNzIiwicGFyZW50IiwiYXBwZW5kIiwicmVtb3ZlQXR0ciIsIm5leHQiLCJoYXNDbGFzcyIsInJlbW92ZSIsImZpbmQiLCIkIiwiJGNsYXNzIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiJF9kYXRhIiwiJF9jbGFzc19pbnN0YW5jZSIsIiRmaWQxIiwiJGZpZDIiLCIkanNfaWQiLCIkd3BvbmlvbiIsImZpZWxkSUQiLCIkX2FyZ3MiLCJmaWVsZEFyZ3MiLCJpbmxpbmVfYWpheCIsIldQT25pb24iLCIkd2hlcmVfdG9fZmluZCIsIiRpZCIsIiR2YXJfaWQiLCJpc0ZpZWxkIiwid2luZG93QXJncyIsInRleHQiLCIkaXNfc2hvdyIsImZhZGVJbiIsImZhZGVPdXQiLCIkaGFuZGxlIiwiJGpzb24iLCJkZWJ1Z19pbmZvIiwiJGRlZmluZWRfdmFycyIsInByZXZlbnREZWZhdWx0Iiwic3dhbCIsInR4dCIsImh0bWwiLCJzaG93Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2hvd0Nsb3NlQnV0dG9uIiwiYW5pbWF0aW9uIiwid2lkdGgiLCJvbkJlZm9yZU9wZW4iLCJlbmFibGVMb2FkaW5nIiwib25PcGVuIiwianNvblZpZXciLCJkaXNhYmxlTG9hZGluZyIsInRoZW4iLCJzZXR0aW5nc19hcmdzIiwib3B0aW9uIiwiaXNfZGVidWciLCJpc051bGwiLCJmaWVsZF9kZWJ1Z19pbmZvIiwiJHZhcnMiLCIkdXR4dCIsIiRtdHh0IiwiJGFjdGlvbiIsIiRvblN1Y2Nlc3MiLCIkb25FcnJvciIsIiRvbkFsd2F5cyIsIiRhamF4IiwicmVzIiwiY29tcGlsZWQiLCJvcHRpb25zIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsInZhcmlhYmxlIiwidGVtcGxhdGUiLCIkZWxlbXMiLCJlYWNoIiwiJHRvZ2dsZSIsIiRleF9jbGFzcyIsIiRlbGVtZW50IiwicGFyYW0iLCJuZXN0YWJsZSIsIiR0aGlzIiwiYmFzZSIsIiRlbCIsImluaXQiLCJydWxlc2V0IiwiZGVwcyIsImNyZWF0ZVJ1bGVzZXQiLCJkZXBSb290IiwiJF9kZXBzX2Z1bmN0aW9ucyIsInNob3ciLCJzbGlkZURvd24iLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJzbGlkZVVwIiwiY2hlY2tUYXJnZXRzIiwiZW5hYmxlIiwiV1BPbmlvbl9EZXBlbmRlbmN5IiwiJHNlbGVjdG9yIiwiJGNvbnRleHQiLCJzZXRfYXJncyIsImZpZWxkX2RlYnVnIiwianNfZXJyb3JfaGFuZGxlciIsImpzX3ZhbGlkYXRvciIsImVyciIsImFwcGVuZFRvIiwianNfZXJyb3IiLCJtYXliZV9qc192YWxpZGF0ZV9lbGVtIiwiV1BPbmlvbl9WYWxpZGF0aW9uIiwiZ2V0X2Zvcm0iLCJqc192YWxpZGF0ZV9lbGVtIiwicnVsZXMiLCIkYXJnIiwianNfZnVuYyIsIiRleGlzdHMiLCIkd3Bvbmlvbl9kZWJ1ZyIsImdldCIsImlkIiwiYWRkIiwiJGluZm8iLCIkZm91bmQiLCIkSUQiLCJ0aXBweSIsImNvbnRlbnQiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCIsIiRkIiwiJG5vdGljZV90eHQiLCJoZWlnaHRBdXRvIiwiX2FyZ3MiLCIkYWpheF9rZXkiLCJwbHVnaW5faWQiLCIkdHlwZSIsIndwb25pb25faW5pdF9maWVsZCIsImluaXRfc2luZ2xlX2ZpZWxkIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwic2V0X2VsZW1lbnQiLCJzZXRfY29udHh0IiwibW9kdWxlX2luaXQiLCJlbGVtIiwiJGNvbnR4dCIsImNvbnRleHQiLCJXUE9uaW9uX1ZhbGlkYXRvciIsImZvcm0iLCJpbnZhbGlkSGFuZGxlciIsInNpYmxpbmdzIiwiYmVmb3JlIiwiaWdub3JlIiwiZXJyb3JQbGFjZW1lbnQiLCJ0cmlnZ2VyIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsInZhbGlkYXRlIiwiZmllbGQiLCJhY2NvcmRpb24iLCJoZWFkZXIiLCJjb2xsYXBzaWJsZSIsImFuaW1hdGUiLCJoZWlnaHRTdHlsZSIsImljb25zIiwiSUR0b0VsZW1lbnQiLCJXUE9uaW9uX0ZpZWxkIiwidyIsIndwb25pb25fcmVnaXN0ZXJfZmllbGQiLCJmaWVsZF9hYnN0cmFjdCIsInRvb2x0aXAiLCJoYW5kbGVfYmFja3VwX2ltcG9ydCIsIiRmaWxlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImZvcmNlX2Rvd25sb2FkIiwiYmxvY2tfZm9ybSIsInVuaXF1ZSIsImV4dHJhIiwiZ2V0X2V4dHJhX3ZhbHVlIiwic3dhbF9lcnJvciIsInVuYmxvY2tfZm9ybSIsIiRpbnMiLCJ0aXBweV9nZXQiLCJpbnN0YW5jZXMiLCJkZXN0cm95IiwiYmFja3VwX2lkIiwicmVzdG9yZV9iYWNrdXAiLCJtc2ciLCJ0eXBlIiwiX3RpcHB5Iiwic2hvd190b29sdGlwIiwiZXhwb3J0T2JqIiwiZXhwb3J0TmFtZSIsImRhdGFTdHIiLCJkb3dubG9hZEFuY2hvck5vZGUiLCJjbGljayIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsInJlYWRBc1RleHQiLCIkYmFja3VwaWQiLCIkYXBwZW5kVE8iLCJpbnRlcmFjdGl2ZSIsIm9uU2hvd24iLCJyZW1vdmVfYWN0aXZlX2NsYXNzIiwiYWRkX2FjdGl2ZV9jbGFzcyIsIiRlIiwiaXMiLCIkY3VzdG9tX2lucHV0IiwiJHJhZGlvcyIsIiRjaGVja2JveCIsIiRpIiwiaGFuZGxlX2FyZ3MiLCJjaG9zZW4iLCIkY2xvbmVfd3JhcCIsIiRhZGRfYnRuIiwiJGxpbWl0IiwibGltaXQiLCIkZXJvcl9tc2ciLCJlcnJvcl9tc2ciLCIkc29ydCIsInNvcnQiLCJpdGVtcyIsImhhbmRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJ1aSIsImNzcyIsInN0b3AiLCJXUE9uaW9uQ2xvbmVyIiwiYWRkX2J0biIsImNsb25lX2VsZW0iLCJyZW1vdmVfYnRuIiwidGVtcGxhdGVBZnRlclJlbmRlciIsIndwb25pb25fZmllbGQiLCJyZWxvYWQiLCJvblJlbW92ZUFmdGVyIiwic29ydGFibGUiLCJvbkxpbWl0UmVhY2hlZCIsInByZXBlbmQiLCJ3cG9uaW9uX25vdGljZSIsInNob3dfYW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsImhpZGVfYW5pbWF0aW9uIiwid3BDb2xvclBpY2tlciIsIiRzZXR0aW5ncyIsIiR2aWV3IiwicGx1Z2lucyIsInJhbmdlUGx1Z2luIiwiaW5wdXQiLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsIiRodG1sIiwid2Vic2FmZSIsImZvbnRzIiwiYnVpbGRfb3B0aW9ucyIsInZhcmlhbnRzIiwiZ29vZ2xlX2ZvbnRzIiwiJHZhcmlhbnQiLCIkaHRtbF90ZW1wIiwiJGlucHV0IiwiJHByZXZpZXciLCJ3cF9tZWRpYV9mcmFtZSIsIiRhZGQiLCIkZWRpdCIsIiRjbGVhciIsIiRtYW5hZ2UiLCJpZHMiLCJ3aGF0Iiwic3RhdGUiLCJtZWRpYSIsImdhbGxlcnkiLCJsaWJyYXJ5IiwiZnJhbWUiLCJtdWx0aXBsZSIsIm9wZW4iLCJlZGl0Iiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJzZWxlY3RlZElkcyIsIm1vZGVscyIsImF0dGFjaG1lbnQiLCJ0b0pTT04iLCJzaXplcyIsInRodW1iIiwidGh1bWJuYWlsIiwiJHRtcCIsIiRwYXJlbnQiLCIkaW1hZ2VfaWQiLCIkayIsIiR2IiwiY3Vyc29yIiwic2Nyb2xsU2Vuc2l0aXZpdHkiLCJmb3JjZVBsYWNlaG9sZGVyU2l6ZSIsImhlbHBlciIsIm9wYWNpdHkiLCIkaXRlbSIsImhlaWdodCIsIiRtYXAiLCJkZXRhaWxzIiwiZGV0YWlsc0F0dHJpYnV0ZSIsIiRfaW5zdGFuY2UiLCJnZW9jb21wbGV0ZSIsImJpbmQiLCJsYXRMbmciLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJsYXQiLCJwYXJzZUZsb2F0IiwibG5nIiwiJGdyb3VwX3dyYXAiLCIkZXJyb3JfbXNnIiwiYmluZF9ldmVudHNfZm9yX3RpdGxlIiwicGFyc2VJbnQiLCJvblJlbW92ZSIsInVwZGF0ZV9ncm91cHNfdGl0bGUiLCIkbWFjaGVkIiwiJGhlYWRpbmciLCIkX3RoaXMiLCIkcmVtb3ZlX2J0biIsIiR3b3JrIiwiZWxlbXMiLCJwb3B1cCIsImVsbSIsImluaXRfdG9vbHRpcCIsInBvcHVwX3Rvb2x0aXAiLCIkdHAiLCIkZWxtIiwiJGluc3RhbmNlIiwiJGhlaWdodCIsIiRpY29uIiwiY2xvc2VNb2RhbCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsIiRyZXMiLCJyZXNldFZhbGlkYXRpb25NZXNzYWdlIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsIiRwb3B1cCIsImFsbG93T3V0c2lkZUNsaWNrIiwiY3VzdG9tQ2xhc3MiLCIkcG9wdXBfZWxlbSIsIiRwcmV2aWV3X2FkZCIsIm1lZGlhX2luc3RhbmNlIiwiaG9vayIsImZpcnN0IiwiYXR0cmlidXRlcyIsImlucHV0bWFzayIsIiR0aGlzX2VsZW0iLCIkdGFiIiwiZ2xvYmFsX3ZhbGlkYXRlIiwiYWZ0ZXIiLCJlcSIsImltYWdlIiwic2hvd19wcmV2aWV3IiwiZHJvcGRvd25QYXJlbnQiLCJwcm9jZXNzUmVzdWx0cyIsInRlcm1zIiwicGFyYW1zIiwicSIsInRlcm0iLCJxdWVyeV9hcmdzIiwicXVlcnlfb3B0aW9ucyIsInRyYW5zcG9ydCIsImZhaWx1cmUiLCJzZWxlY3QyIiwiJGVuYWJsZWQiLCIkZGlzYWJsZWQiLCJjb25uZWN0V2l0aCIsImZvbnRfd2VpZ2h0X3N0eWxlIiwiJGZvbnRfZmllbGQiLCIkZm9udCIsIiRmb250X3dlaWdodF9zdHlsZSIsImZvbnRfc3R5bGUiLCIkdGFnIiwiJGNvbG9yIiwiJGFsaWduIiwiJGZvbnRTaXplIiwiJGxpbmVIZWlnaHQiLCIkbGV0dGVyU3BhY2luZyIsIndlaWdodCIsIiRfYXR0cnMiLCIkdGV4dCIsIiR3ZWlnaHRfdmFsIiwiJHN0eWxlX3ZhbCIsImZyYW1lX3RpdGxlIiwidXBsb2FkX3R5cGUiLCJpbnNlcnRfdGl0bGUiLCIkdGV4dGFyZWEiLCJ3cExpbmsiLCIkZGVwIiwiY29udHJvbGxlciIsImNvbmRpdGlvbiIsIiRjb250cm9sbGVyIiwiJGNvbmRpdGlvbiIsIiRmaWVsZCIsIiRJTlBVVCIsImNvbnR4dCIsImNyZWF0ZVJ1bGUiLCJpbmNsdWRlIiwiZXh0ZW5kIiwiYW5pbWF0ZUNzcyIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25FbmQiLCJPQW5pbWF0aW9uIiwiTW96QW5pbWF0aW9uIiwiV2Via2l0QW5pbWF0aW9uIiwidCIsIm9uZSIsIiRhcmd1bWVudHMiLCJ0aXBweV9oZWxwZXIiLCJjcmVhdGVfaW5zdGFuY2UiLCIkX2luc3RhbmNlX2lkIiwiY29yZSIsInJhbmRfaWQiLCIkdGl0bGUiLCIkZGF0YV90aXBweSIsImdldF9pbnN0YW5jZSIsIiRzdGF0dXMiLCIkX2VsIiwiJGF1dG8iLCJzZXRUaW1lb3V0Iiwid3Bvbmlvbl9zZXR1cCIsIiRjb3JlIiwiJHRhbnMiLCIkbW9kdWxlIiwid3Bvbmlvbl9jcmVhdGVfZmllbGQiLCIkaW5pdF9tZXRob2QiLCIkbWV0aG9kcyIsIiRvcmdfY2xhc3MiLCIkZmllbGRfdHlwZSIsIiRhcmd1bWVudCIsIiRsb2dfZXJyIiwiJGltYWdlIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3AiLCIkbWNlX2VkaXRvciIsInRpbnlNQ0VQcmVJbml0IiwibWNlSW5pdCIsIiRxdWlja190YWdzIiwicXRJbml0IiwiJE5FV19JRCIsIiR0ZXh0QXJlYSIsIiRhY3R1YWxfSUQiLCIkYWN0dWFsX2h0bWwiLCIkcmVnZXgiLCJ0aW55bWNlIiwidGlueU1DRSIsInF1aWNrdGFncyIsIiRmaWQiLCIkdG9vbHRpcF9rZXkiLCJ2YWxpZF9qc29uIiwiaXNGZXRjaGluZyIsImNhbkZldGNoIiwiJGNsYXNzVG9DaGVjayIsIiRhdHRyIiwidXBkYXRlRHVyYXRpb24iLCJvblNob3ciLCJ0aXAiLCJyZXNwb25zZSIsImZldGNoIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImlzVmlzaWJsZSIsInNldENvbnRlbnQiLCJvbkhpZGRlbiIsInBvcHBlck9wdGlvbnMiLCJtb2RpZmllcnMiLCJwcmV2ZW50T3ZlcmZsb3ciLCJpY29uIiwiJGZpbmFsX2FyZ3MiLCJwb3N0X2lkcyIsIiRidWxrX2VkaXQiLCJjaGlsZHJlbiIsInNlcmlhbGl6ZU9iamVjdCIsImFzeW5jIiwiY2FjaGUiLCJXUE9uaW9uX0d1dHRlbmJlcmciLCJzYXZlIiwiYmxvY2siLCJzYXZlX2hhbmRsZXIiLCJlZGl0X2hhbmRsZXIiLCJibG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsIiRfcG9zdGlkcyIsInBvc3RfaWQiLCJibG9ja19pZCIsImNsaWVudElkIiwiJHJlbW90ZSIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwiZWRpdG9yIiwiJHdwb19ibG9ja3MiLCJpc0FycmF5IiwiZml4X21lZGlhX3VpIiwiJHRhYmxlIiwiJGZpZWxkcyIsImZyYW1lcyIsImJyb3dzZSIsIldQT25pb25fTWV0YWJveF9Nb2R1bGUiLCJtZW51Iiwic2xpZGVUb2dnbGUiLCIkaHJlZiIsIiRzZWN0aW9uIiwiJHBhcmVudF9hY3RpdmVzIiwiJGN1cnJlbnQiLCIkYmFzZSIsIiRoaWRkZW4iLCJtZXNzYWdlIiwib3ZlcmxheUNTUyIsIiR2YWx1ZXMiLCJzZXJpYWxpemUiLCJ1bmJsb2NrIiwiV1BPbmlvbl9RdWlja19FZGl0IiwidmFsdWVzIiwiJGxpc3QiLCJjbG9zZXN0IiwidmMiLCJ3cG9uaW9uX3ZjIiwiZmllbGRzIiwiYWJzdHJhY3QiLCJ3cG9uaW9uX3ZjX2luaXQiLCJ3cG9uaW9uX3ZjX2ZpZWxkIiwid3Bvbmlvbl9jcmVhdGVfdmNfZmllbGQiLCJpc192Y19wYXJhbV9lbGVtIiwiaW5wdXRfY2hhbmdlIiwiaW5wdXRfZGF0YSIsIldQT25pb25fVkNfRmllbGQiLCJoYW5kbGVfc2luZ2xlX2NoYW5nZSIsIiRzYXZlX2RhdGEiLCJzaW1wbGVfYXJyYXkiLCJrZXlfdmFsdWVfYXJyYXkiLCJrZXlfdmFsdWVfbXVsdGlfYXJyYXkiLCJzb3J0ZXJfdmFsdWVzIiwidmNfc2F2ZSIsIiRwYXJhbV9uYW1lIiwicGFyYW1fbmFtZSIsIiRyIiwiJHMiLCJlbmNvZGVfY29udGVudCIsIiRzZWxlY3QiLCJXUE9uaW9uX29uQXZhaWxhYmxlIiwic2VsIiwid3Bvbmlvbl93cF9wb2ludGVyX2NyZWF0ZSIsIiRwb2ludGVyc19ncm91cCIsIiRncm91cF9pZCIsIiRwb2ludGVyX2tleSIsIiRwb2ludGVyIiwiJGhhbmRsZXIiLCJwb2ludGVyV2lkdGgiLCJwb2ludGVyQ2xhc3MiLCJjbGFzcyIsImVkZ2UiLCJhbGlnbiIsImNsb3NlIiwicG9zdCIsInBvaW50ZXIiLCJidXR0b25zIiwianNuZXh0IiwiJG5leHQiLCJpY29uX2NsYXNzIiwic2V0dXAiLCIkcGlkIiwidnNwX2pzX2hlbHBlciIsImxvZGFzaCIsIm5vQ29uZmxpY3QiLCJtZXRhYm94Iiwid3BfcG9pbnRlcnMiLCJtZWRpYV9maWVsZHMiLCJidWxrX2VkaXQiLCJndXR0ZW5iZXJnIiwid29vY29tbWVyY2UiLCJxdWlja19lZGl0IiwidmlzdWFsX2NvbXBvc2VyIiwibW9kYWwiLCJhamF4ZXIiLCJkZWJ1ZyIsIiR3cG9mX2RpdiIsInN1Ym1lbnVfaW5kaWNhdG9yIiwidG9nZ2xlQ2xhc3MiLCIkd2lkZ2V0IiwiJG1lbnUiLCJXUE9uaW9uX1dQX01vZGFsIiwiQmFja2JvbmUiLCJWaWV3IiwidGVtcGxhdGVzIiwiZXZlbnRzIiwiYWN0aXZlX3BhZ2UiLCJhY3RpdmVfc2VjdGlvbiIsImluaXRpYWxpemUiLCJsZWZ0X21lbnUiLCJoaWRlX21lbnUiLCJiaW5kQWxsIiwiaW5pdF90ZW1wbGF0ZXMiLCJyZW5kZXIiLCIkbSIsImZyYW1lX21lbnVfaXRlbSIsInJvdXRlcl9tZW51X2l0ZW0iLCJwYWdlX2NvbnRlbnQiLCJzZWN0aW9uX2NvbnRlbnQiLCIkY29udGVudCIsIiRfY29udGVudCIsIiRfbWVudSIsInByZXNlcnZlRm9jdXMiLCJmb2N1cyIsImhhbmRsZV9sZWZ0X21lbnVfY2xpY2siLCIkdGFyZ2V0IiwiJHNob3dfdGFyZ2V0IiwiaGFuZGxlX3RhYl9jbGljayIsIiRwYWdlIiwiaGFzIiwidW5kZWxlZ2F0ZUV2ZW50cyIsIm9mZiIsInNhdmVNb2RhbCIsImRvTm90aGluZyIsIiRvcHRpb25zIiwiZ2V0X2xlZnRfbWVudSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFRQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1Qjs7Ozs7Ozs7QUFRQSxTQUFPLFNBQVNDLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxTQUEzQixFQUFzQ0MsUUFBdEMsRUFBZ0Q7QUFDckQsUUFBSUMsV0FBV0MsVUFBVUMsTUFBVixHQUFtQixDQUFuQixJQUF3QkQsVUFBVSxDQUFWLE1BQWlCRSxTQUF6QyxHQUFxREYsVUFBVSxDQUFWLENBQXJELEdBQW9FLEVBQW5GOztBQUVBLFFBQUksQ0FBQyxnQ0FBaUJKLFFBQWpCLENBQUwsRUFBaUM7QUFDL0I7QUFDRDs7QUFFRCxRQUFJLENBQUMsaUNBQWtCQyxTQUFsQixDQUFMLEVBQW1DO0FBQ2pDO0FBQ0Q7O0FBRUQsUUFBSSxlQUFlLE9BQU9DLFFBQTFCLEVBQW9DO0FBQ2xDO0FBQ0FLLGNBQVFDLEtBQVIsQ0FBYyx1Q0FBZDtBQUNBO0FBQ0QsS0Fmb0QsQ0FlbkQ7OztBQUdGLFFBQUksYUFBYSxPQUFPTCxRQUF4QixFQUFrQztBQUNoQztBQUNBSSxjQUFRQyxLQUFSLENBQWMsbURBQWQ7QUFDQTtBQUNEOztBQUVELFFBQUlDLFVBQVU7QUFDWlAsZ0JBQVVBLFFBREU7QUFFWkMsZ0JBQVVBLFFBRkU7QUFHWkYsaUJBQVdBO0FBSEMsS0FBZDs7QUFNQSxRQUFJSCxNQUFNRSxRQUFOLENBQUosRUFBcUI7QUFDbkI7QUFDQSxVQUFJVSxXQUFXWixNQUFNRSxRQUFOLEVBQWdCVSxRQUEvQjtBQUNBLFVBQUlDLElBQUksQ0FBUjs7QUFFQSxhQUFPQSxJQUFJRCxTQUFTTCxNQUFwQixFQUE0QjtBQUMxQixZQUFJSyxTQUFTQyxDQUFULEVBQVlSLFFBQVosR0FBdUJBLFFBQTNCLEVBQXFDO0FBQ25DO0FBQ0Q7O0FBRURRO0FBQ0QsT0FYa0IsQ0FXakI7OztBQUdGRCxlQUFTRSxNQUFULENBQWdCRCxDQUFoQixFQUFtQixDQUFuQixFQUFzQkYsT0FBdEIsRUFkbUIsQ0FjYTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsT0FBQ1gsTUFBTWUsU0FBTixJQUFtQixFQUFwQixFQUF3QkMsT0FBeEIsQ0FBZ0MsVUFBVUMsUUFBVixFQUFvQjtBQUNsRCxZQUFJQSxTQUFTQyxJQUFULEtBQWtCaEIsUUFBbEIsSUFBOEJlLFNBQVNFLFlBQVQsSUFBeUJOLENBQTNELEVBQThEO0FBQzVESSxtQkFBU0UsWUFBVDtBQUNEO0FBQ0YsT0FKRDtBQUtELEtBeEJELE1Bd0JPO0FBQ0w7QUFDQW5CLFlBQU1FLFFBQU4sSUFBa0I7QUFDaEJVLGtCQUFVLENBQUNELE9BQUQsQ0FETTtBQUVoQlMsY0FBTTtBQUZVLE9BQWxCO0FBSUQ7O0FBRUQsUUFBSWxCLGFBQWEsV0FBakIsRUFBOEI7QUFDNUIsc0JBQVMsV0FBVCxFQUFzQkEsUUFBdEIsRUFBZ0NDLFNBQWhDLEVBQTJDQyxRQUEzQyxFQUFxREMsUUFBckQ7QUFDRDtBQUNGLEdBakVEO0FBa0VEOztrQkFFY04sYTtBQUNmLHlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTs7Ozs7Ozs7O0FBU0EsU0FBU3NCLGlCQUFULENBQTJCckIsS0FBM0IsRUFBa0M7QUFDaEM7Ozs7Ozs7QUFPQSxTQUFPLFNBQVNzQixXQUFULEdBQXVCO0FBQzVCLFFBQUksQ0FBQ3RCLE1BQU1lLFNBQVAsSUFBb0IsQ0FBQ2YsTUFBTWUsU0FBTixDQUFnQlIsTUFBekMsRUFBaUQ7QUFDL0MsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBT1AsTUFBTWUsU0FBTixDQUFnQmYsTUFBTWUsU0FBTixDQUFnQlIsTUFBaEIsR0FBeUIsQ0FBekMsRUFBNENXLElBQW5EO0FBQ0QsR0FORDtBQU9EOztrQkFFY0csaUI7QUFDZiw2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOzs7Ozs7QUFDQTs7Ozs7Ozs7O0FBU0EsU0FBU0UsYUFBVCxDQUF1QnZCLEtBQXZCLEVBQThCO0FBQzVCOzs7Ozs7O0FBT0EsU0FBTyxTQUFTd0IsT0FBVCxDQUFpQnRCLFFBQWpCLEVBQTJCO0FBQ2hDLFFBQUksQ0FBQyxnQ0FBaUJBLFFBQWpCLENBQUwsRUFBaUM7QUFDL0I7QUFDRDs7QUFFRCxXQUFPRixNQUFNRSxRQUFOLEtBQW1CRixNQUFNRSxRQUFOLEVBQWdCa0IsSUFBbkMsR0FBMENwQixNQUFNRSxRQUFOLEVBQWdCa0IsSUFBMUQsR0FBaUUsQ0FBeEU7QUFDRCxHQU5EO0FBT0Q7O2tCQUVjRyxhO0FBQ2YseUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7Ozs7QUFTQSxTQUFTRSxlQUFULENBQXlCekIsS0FBekIsRUFBZ0M7QUFDOUI7Ozs7Ozs7O0FBUUEsU0FBTyxTQUFTMEIsU0FBVCxDQUFtQnhCLFFBQW5CLEVBQTZCO0FBQ2xDO0FBQ0EsUUFBSSxnQkFBZ0IsT0FBT0EsUUFBM0IsRUFBcUM7QUFDbkMsYUFBTyxnQkFBZ0IsT0FBT0YsTUFBTWUsU0FBTixDQUFnQixDQUFoQixDQUE5QjtBQUNELEtBSmlDLENBSWhDOzs7QUFHRixXQUFPZixNQUFNZSxTQUFOLENBQWdCLENBQWhCLElBQXFCYixhQUFhRixNQUFNZSxTQUFOLENBQWdCLENBQWhCLEVBQW1CRyxJQUFyRCxHQUE0RCxLQUFuRTtBQUNELEdBUkQ7QUFTRDs7a0JBRWNPLGU7QUFDZiwyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7Ozs7Ozs7OztBQVNBLFNBQVNFLGFBQVQsQ0FBdUIzQixLQUF2QixFQUE4QjtBQUM1Qjs7Ozs7OztBQU9BLFNBQU8sU0FBUzRCLE9BQVQsQ0FBaUIxQixRQUFqQixFQUEyQjtBQUNoQyxXQUFPQSxZQUFZRixLQUFuQjtBQUNELEdBRkQ7QUFHRDs7a0JBRWMyQixhO0FBQ2YseUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0E7Ozs7OztBQU1BLFNBQVNFLFdBQVQsR0FBdUI7QUFDckIsTUFBSUMsVUFBVUMsT0FBT0MsTUFBUCxDQUFjLElBQWQsQ0FBZDtBQUNBLE1BQUlDLFVBQVVGLE9BQU9DLE1BQVAsQ0FBYyxJQUFkLENBQWQ7QUFDQUYsVUFBUWYsU0FBUixHQUFvQixFQUFwQjtBQUNBa0IsVUFBUWxCLFNBQVIsR0FBb0IsRUFBcEI7QUFDQSxTQUFPO0FBQ0xtQixlQUFXLDZCQUFjSixPQUFkLENBRE47QUFFTEssZUFBVyw2QkFBY0YsT0FBZCxDQUZOO0FBR0xHLGtCQUFjLGdDQUFpQk4sT0FBakIsQ0FIVDtBQUlMTyxrQkFBYyxnQ0FBaUJKLE9BQWpCLENBSlQ7QUFLTEssZUFBVyw2QkFBY1IsT0FBZCxDQUxOO0FBTUxTLGVBQVcsNkJBQWNOLE9BQWQsQ0FOTjtBQU9MTyxzQkFBa0IsZ0NBQWlCVixPQUFqQixFQUEwQixJQUExQixDQVBiO0FBUUxXLHNCQUFrQixnQ0FBaUJSLE9BQWpCLEVBQTBCLElBQTFCLENBUmI7QUFTTFMsY0FBVSw2QkFBY1osT0FBZCxDQVRMO0FBVUxhLGtCQUFjLDZCQUFjVixPQUFkLEVBQXVCLElBQXZCLENBVlQ7QUFXTFcsbUJBQWUsaUNBQWtCZCxPQUFsQixDQVhWO0FBWUxlLG1CQUFlLGlDQUFrQlosT0FBbEIsQ0FaVjtBQWFMYSxpQkFBYSwrQkFBZ0JoQixPQUFoQixDQWJSO0FBY0xpQixpQkFBYSwrQkFBZ0JkLE9BQWhCLENBZFI7QUFlTGUsZUFBVyw2QkFBY2xCLE9BQWQsQ0FmTjtBQWdCTG1CLGVBQVcsNkJBQWNoQixPQUFkLENBaEJOO0FBaUJMSCxhQUFTQSxPQWpCSjtBQWtCTEcsYUFBU0E7QUFsQkosR0FBUDtBQW9CRDs7a0JBRWNKLFc7QUFDZix1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBVUEsU0FBU3FCLGdCQUFULENBQTBCbEQsS0FBMUIsRUFBaUNtRCxTQUFqQyxFQUE0QztBQUMxQzs7Ozs7Ozs7O0FBU0EsU0FBTyxTQUFTQyxVQUFULENBQW9CbEQsUUFBcEIsRUFBOEJDLFNBQTlCLEVBQXlDO0FBQzlDLFFBQUksQ0FBQyxnQ0FBaUJELFFBQWpCLENBQUwsRUFBaUM7QUFDL0I7QUFDRDs7QUFFRCxRQUFJLENBQUNpRCxTQUFELElBQWMsQ0FBQyxpQ0FBa0JoRCxTQUFsQixDQUFuQixFQUFpRDtBQUMvQztBQUNELEtBUDZDLENBTzVDOzs7QUFHRixRQUFJLENBQUNILE1BQU1FLFFBQU4sQ0FBTCxFQUFzQjtBQUNwQixhQUFPLENBQVA7QUFDRDs7QUFFRCxRQUFJbUQsa0JBQWtCLENBQXRCOztBQUVBLFFBQUlGLFNBQUosRUFBZTtBQUNiRSx3QkFBa0JyRCxNQUFNRSxRQUFOLEVBQWdCVSxRQUFoQixDQUF5QkwsTUFBM0M7QUFDQVAsWUFBTUUsUUFBTixJQUFrQjtBQUNoQmtCLGNBQU1wQixNQUFNRSxRQUFOLEVBQWdCa0IsSUFETjtBQUVoQlIsa0JBQVU7QUFGTSxPQUFsQjtBQUlELEtBTkQsTUFNTztBQUNMO0FBQ0EsVUFBSUEsV0FBV1osTUFBTUUsUUFBTixFQUFnQlUsUUFBL0I7O0FBRUEsVUFBSTBDLFFBQVEsU0FBU0EsS0FBVCxDQUFlekMsQ0FBZixFQUFrQjtBQUM1QixZQUFJRCxTQUFTQyxDQUFULEVBQVlWLFNBQVosS0FBMEJBLFNBQTlCLEVBQXlDO0FBQ3ZDUyxtQkFBU0UsTUFBVCxDQUFnQkQsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQXdDLDRCQUZ1QyxDQUVwQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFDckQsTUFBTWUsU0FBTixJQUFtQixFQUFwQixFQUF3QkMsT0FBeEIsQ0FBZ0MsVUFBVUMsUUFBVixFQUFvQjtBQUNsRCxnQkFBSUEsU0FBU0MsSUFBVCxLQUFrQmhCLFFBQWxCLElBQThCZSxTQUFTRSxZQUFULElBQXlCTixDQUEzRCxFQUE4RDtBQUM1REksdUJBQVNFLFlBQVQ7QUFDRDtBQUNGLFdBSkQ7QUFLRDtBQUNGLE9BZkQ7O0FBaUJBLFdBQUssSUFBSU4sSUFBSUQsU0FBU0wsTUFBVCxHQUFrQixDQUEvQixFQUFrQ00sS0FBSyxDQUF2QyxFQUEwQ0EsR0FBMUMsRUFBK0M7QUFDN0N5QyxjQUFNekMsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSVgsYUFBYSxhQUFqQixFQUFnQztBQUM5QixzQkFBUyxhQUFULEVBQXdCQSxRQUF4QixFQUFrQ0MsU0FBbEM7QUFDRDs7QUFFRCxXQUFPa0QsZUFBUDtBQUNELEdBckREO0FBc0REOztrQkFFY0gsZ0I7QUFDZiw0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7Ozs7Ozs7Ozs7O0FBV0EsU0FBU0ssYUFBVCxDQUF1QnZELEtBQXZCLEVBQThCd0QsY0FBOUIsRUFBOEM7QUFDNUM7Ozs7Ozs7O0FBUUEsU0FBTyxTQUFTQyxRQUFULENBQWtCdkQsUUFBbEIsRUFBNEI7QUFDakMsUUFBSSxDQUFDRixNQUFNRSxRQUFOLENBQUwsRUFBc0I7QUFDcEJGLFlBQU1FLFFBQU4sSUFBa0I7QUFDaEJVLGtCQUFVLEVBRE07QUFFaEJRLGNBQU07QUFGVSxPQUFsQjtBQUlEOztBQUVEcEIsVUFBTUUsUUFBTixFQUFnQmtCLElBQWhCO0FBQ0EsUUFBSVIsV0FBV1osTUFBTUUsUUFBTixFQUFnQlUsUUFBL0I7O0FBRUEsU0FBSyxJQUFJOEMsT0FBT3BELFVBQVVDLE1BQXJCLEVBQTZCb0QsT0FBTyxJQUFJQyxLQUFKLENBQVVGLE9BQU8sQ0FBUCxHQUFXQSxPQUFPLENBQWxCLEdBQXNCLENBQWhDLENBQXBDLEVBQXdFRyxPQUFPLENBQXBGLEVBQXVGQSxPQUFPSCxJQUE5RixFQUFvR0csTUFBcEcsRUFBNEc7QUFDMUdGLFdBQUtFLE9BQU8sQ0FBWixJQUFpQnZELFVBQVV1RCxJQUFWLENBQWpCO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDakQsUUFBRCxJQUFhLENBQUNBLFNBQVNMLE1BQTNCLEVBQW1DO0FBQ2pDLGFBQU9pRCxpQkFBaUJHLEtBQUssQ0FBTCxDQUFqQixHQUEyQm5ELFNBQWxDO0FBQ0Q7O0FBRUQsUUFBSVMsV0FBVztBQUNiQyxZQUFNaEIsUUFETztBQUViaUIsb0JBQWM7QUFGRCxLQUFmOztBQUtBbkIsVUFBTWUsU0FBTixDQUFnQitDLElBQWhCLENBQXFCN0MsUUFBckI7O0FBRUEsV0FBT0EsU0FBU0UsWUFBVCxHQUF3QlAsU0FBU0wsTUFBeEMsRUFBZ0Q7QUFDOUMsVUFBSUksVUFBVUMsU0FBU0ssU0FBU0UsWUFBbEIsQ0FBZDtBQUNBLFVBQUk0QyxTQUFTcEQsUUFBUVAsUUFBUixDQUFpQjRELEtBQWpCLENBQXVCLElBQXZCLEVBQTZCTCxJQUE3QixDQUFiOztBQUVBLFVBQUlILGNBQUosRUFBb0I7QUFDbEJHLGFBQUssQ0FBTCxJQUFVSSxNQUFWO0FBQ0Q7O0FBRUQ5QyxlQUFTRSxZQUFUO0FBQ0Q7O0FBRURuQixVQUFNZSxTQUFOLENBQWdCa0QsR0FBaEI7O0FBRUEsUUFBSVQsY0FBSixFQUFvQjtBQUNsQixhQUFPRyxLQUFLLENBQUwsQ0FBUDtBQUNEO0FBQ0YsR0ExQ0Q7QUEyQ0Q7O2tCQUVjSixhO0FBQ2YseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7Ozs7OztBQUVBLElBQUlXLGVBQWUsNEJBQW5CO0FBQUEsSUFDSWhDLFlBQVlnQyxhQUFhaEMsU0FEN0I7QUFBQSxJQUVJQyxZQUFZK0IsYUFBYS9CLFNBRjdCO0FBQUEsSUFHSUMsZUFBZThCLGFBQWE5QixZQUhoQztBQUFBLElBSUlDLGVBQWU2QixhQUFhN0IsWUFKaEM7QUFBQSxJQUtJQyxZQUFZNEIsYUFBYTVCLFNBTDdCO0FBQUEsSUFNSUMsWUFBWTJCLGFBQWEzQixTQU43QjtBQUFBLElBT0lDLG1CQUFtQjBCLGFBQWExQixnQkFQcEM7QUFBQSxJQVFJQyxtQkFBbUJ5QixhQUFhekIsZ0JBUnBDO0FBQUEsSUFTSUMsV0FBV3dCLGFBQWF4QixRQVQ1QjtBQUFBLElBVUlDLGVBQWV1QixhQUFhdkIsWUFWaEM7QUFBQSxJQVdJQyxnQkFBZ0JzQixhQUFhdEIsYUFYakM7QUFBQSxJQVlJQyxnQkFBZ0JxQixhQUFhckIsYUFaakM7QUFBQSxJQWFJQyxjQUFjb0IsYUFBYXBCLFdBYi9CO0FBQUEsSUFjSUMsY0FBY21CLGFBQWFuQixXQWQvQjtBQUFBLElBZUlDLFlBQVlrQixhQUFhbEIsU0FmN0I7QUFBQSxJQWdCSUMsWUFBWWlCLGFBQWFqQixTQWhCN0I7QUFBQSxJQWlCSW5CLFVBQVVvQyxhQUFhcEMsT0FqQjNCO0FBQUEsSUFrQklHLFVBQVVpQyxhQUFhakMsT0FsQjNCOztRQW9CU0osVyxHQUFBQSxxQjtRQUFhSyxTLEdBQUFBLFM7UUFBV0MsUyxHQUFBQSxTO1FBQVdDLFksR0FBQUEsWTtRQUFjQyxZLEdBQUFBLFk7UUFBY0MsUyxHQUFBQSxTO1FBQVdDLFMsR0FBQUEsUztRQUFXQyxnQixHQUFBQSxnQjtRQUFrQkMsZ0IsR0FBQUEsZ0I7UUFBa0JDLFEsR0FBQUEsUTtRQUFVQyxZLEdBQUFBLFk7UUFBY0MsYSxHQUFBQSxhO1FBQWVDLGEsR0FBQUEsYTtRQUFlQyxXLEdBQUFBLFc7UUFBYUMsVyxHQUFBQSxXO1FBQWFDLFMsR0FBQUEsUztRQUFXQyxTLEdBQUFBLFM7UUFBV25CLE8sR0FBQUEsTztRQUFTRyxPLEdBQUFBLE87QUFDalAsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7QUFTQSxTQUFTa0MsZ0JBQVQsQ0FBMEJqRSxRQUExQixFQUFvQztBQUNsQyxNQUFJLGFBQWEsT0FBT0EsUUFBcEIsSUFBZ0MsT0FBT0EsUUFBM0MsRUFBcUQ7QUFDbkQ7QUFDQU8sWUFBUUMsS0FBUixDQUFjLDJDQUFkO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSSxNQUFNMEQsSUFBTixDQUFXbEUsUUFBWCxDQUFKLEVBQTBCO0FBQ3hCO0FBQ0FPLFlBQVFDLEtBQVIsQ0FBYyx1Q0FBZDtBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUksQ0FBQyw0QkFBNEIwRCxJQUE1QixDQUFpQ2xFLFFBQWpDLENBQUwsRUFBaUQ7QUFDL0M7QUFDQU8sWUFBUUMsS0FBUixDQUFjLG1GQUFkO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0Q7O2tCQUVjeUQsZ0I7QUFDZiw0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7Ozs7Ozs7O0FBUUEsU0FBU0UsaUJBQVQsQ0FBMkJsRSxTQUEzQixFQUFzQztBQUNwQyxNQUFJLGFBQWEsT0FBT0EsU0FBcEIsSUFBaUMsT0FBT0EsU0FBNUMsRUFBdUQ7QUFDckQ7QUFDQU0sWUFBUUMsS0FBUixDQUFjLDJDQUFkO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDLCtCQUErQjBELElBQS9CLENBQW9DakUsU0FBcEMsQ0FBTCxFQUFxRDtBQUNuRDtBQUNBTSxZQUFRQyxLQUFSLENBQWMsNEZBQWQ7QUFDQSxXQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRDs7a0JBRWMyRCxpQjtBQUNmLDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN6Qk1DLGE7QUFDTCwwQkFBOEQ7QUFBQSxNQUFqREMsS0FBaUQsdUVBQXpDLEVBQXlDO0FBQUEsTUFBckNDLFNBQXFDLHVFQUF6QixFQUF5QjtBQUFBLE1BQXJCQyxVQUFxQix1RUFBUixLQUFROztBQUFBOztBQUM3RCxPQUFLZCxJQUFMLEdBQWdCWSxLQUFoQjtBQUNBLE9BQUtHLFFBQUwsR0FBZ0JGLFNBQWhCO0FBQ0EsT0FBS0csTUFBTCxHQUFnQkYsVUFBaEI7QUFDQSxPQUFLRyxLQUFMO0FBQ0EsU0FBTyxLQUFLakIsSUFBWjtBQUNBOzs7OzBCQUVPO0FBQ1AsUUFBSyxJQUFJa0IsS0FBVCxJQUFrQixLQUFLSCxRQUF2QixFQUFrQztBQUNqQyxRQUFJLFNBQVMsS0FBS0MsTUFBZCxJQUF3QixRQUFRLEtBQUtELFFBQUwsQ0FBZUcsS0FBZixDQUFSLE1BQW1DLFFBQS9ELEVBQTBFO0FBQ3pFLFVBQUtsQixJQUFMLENBQVdrQixLQUFYLElBQXFCLElBQUlQLGFBQUosQ0FBbUIsS0FBS1gsSUFBTCxDQUFXa0IsS0FBWCxDQUFuQixFQUF1QyxLQUFLSCxRQUFMLENBQWVHLEtBQWYsQ0FBdkMsRUFBK0QsS0FBS0YsTUFBcEUsQ0FBckI7QUFDQSxLQUZELE1BRU87QUFDTixTQUFJLE9BQU8sS0FBS2hCLElBQUwsQ0FBV2tCLEtBQVgsQ0FBUCxLQUE4QixXQUFsQyxFQUFnRDtBQUMvQyxXQUFLbEIsSUFBTCxDQUFXa0IsS0FBWCxJQUFxQixLQUFLSCxRQUFMLENBQWVHLEtBQWYsQ0FBckI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDs7Ozs7O2tCQUdhO0FBQUEsS0FBRU4sS0FBRix1RUFBVSxFQUFWO0FBQUEsS0FBY0MsU0FBZCx1RUFBMEIsRUFBMUI7QUFBQSxLQUE4Qk0sUUFBOUIsdUVBQXlDLEtBQXpDO0FBQUEsUUFBb0QsSUFBSVIsYUFBSixDQUFtQkMsS0FBbkIsRUFBMEJDLFNBQTFCLEVBQXFDTSxRQUFyQyxDQUFwRDtBQUFBLEM7Ozs7Ozs7Ozs7OztBQ3RCRjs7QUFFYkMsT0FBT0MsT0FBUCxHQUFpQixTQUFTQyxTQUFULENBQW1CQyxVQUFuQixFQUErQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxHQUFKO0FBQ0EsTUFBSSxPQUFPQyxXQUFQLEtBQXVCLFdBQXZCLElBQXNDQSxZQUFZRCxHQUF0RCxFQUEyRDtBQUN6REEsVUFBTSxDQUFDQyxZQUFZRCxHQUFaLEtBQW9CQyxZQUFZQyxNQUFaLENBQW1CQyxlQUF4QyxJQUEyRCxHQUFqRTtBQUNBLFFBQUlMLFVBQUosRUFBZ0I7QUFDZCxhQUFPRSxHQUFQO0FBQ0Q7O0FBRUQ7QUFDQUQsUUFBSUMsTUFBTSxDQUFWOztBQUVBLFdBQU9JLEtBQUtDLEtBQUwsQ0FBVyxDQUFDTCxNQUFNRCxDQUFQLElBQVksR0FBdkIsSUFBOEIsR0FBOUIsR0FBb0MsR0FBcEMsR0FBMENBLENBQWpEO0FBQ0QsR0FWRCxNQVVPO0FBQ0xDLFVBQU0sQ0FBQ00sS0FBS04sR0FBTCxHQUFXTSxLQUFLTixHQUFMLEVBQVgsR0FBd0IsSUFBSU0sSUFBSixHQUFXQyxPQUFYLEVBQXpCLElBQWlELEdBQXZEO0FBQ0EsUUFBSVQsVUFBSixFQUFnQjtBQUNkLGFBQU9FLEdBQVA7QUFDRDs7QUFFRDtBQUNBRCxRQUFJQyxNQUFNLENBQVY7O0FBRUEsV0FBT0ksS0FBS0MsS0FBTCxDQUFXLENBQUNMLE1BQU1ELENBQVAsSUFBWSxHQUF2QixJQUE4QixHQUE5QixHQUFvQyxHQUFwQyxHQUEwQ0EsQ0FBakQ7QUFDRDtBQUNGLENBakNEO0FBa0NBLHFDOzs7Ozs7Ozs7Ozs7QUNwQ2E7O0FBRWJKLE9BQU9DLE9BQVAsR0FBaUIsU0FBU1ksY0FBVCxDQUF3QkMsRUFBeEIsRUFBNEJDLFVBQTVCLEVBQXdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxvQkFBb0JDLG1CQUFPQSxDQUFDLHFHQUFSLENBQXhCO0FBQ0FGLGVBQWFsQyxNQUFNcUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCN0YsU0FBM0IsRUFBc0MsQ0FBdEMsQ0FBYjtBQUNBLFNBQU95RixrQkFBa0JGLEVBQWxCLEVBQXNCQyxVQUF0QixDQUFQO0FBQ0QsQ0FqQkQ7QUFrQkEsMEM7Ozs7Ozs7Ozs7OztBQ3BCYTs7OztBQUViLElBQUlNLFVBQVUsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxTQUFPQSxPQUFPQyxRQUFkLE1BQTJCLFFBQTNELEdBQXNFLFVBQVVDLEdBQVYsRUFBZTtBQUFFLGdCQUFjQSxHQUFkLDBDQUFjQSxHQUFkO0FBQW9CLENBQTNHLEdBQThHLFVBQVVBLEdBQVYsRUFBZTtBQUFFLFNBQU9BLE9BQU8sT0FBT0YsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0UsSUFBSUMsV0FBSixLQUFvQkgsTUFBM0QsSUFBcUVFLFFBQVFGLE9BQU9KLFNBQXBGLEdBQWdHLFFBQWhHLFVBQWtITSxHQUFsSCwwQ0FBa0hBLEdBQWxILENBQVA7QUFBK0gsQ0FBNVE7O0FBRUF4QixPQUFPQyxPQUFQLEdBQWlCLFNBQVN5QixvQkFBVCxDQUE4QlosRUFBOUIsRUFBa0NDLFVBQWxDLEVBQThDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlZLFVBQVUsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNDLE1BQXZEO0FBQ0EsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLFFBQVEsSUFBWjs7QUFFQSxNQUFJQyw2QkFBNkIsa0RBQWpDOztBQUVBLE1BQUksT0FBT2xCLEVBQVAsS0FBYyxRQUFsQixFQUE0QjtBQUMxQixRQUFJLE9BQU9hLFFBQVFiLEVBQVIsQ0FBUCxLQUF1QixVQUEzQixFQUF1QztBQUNyQ2dCLGFBQU9ILFFBQVFiLEVBQVIsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJQSxHQUFHbUIsS0FBSCxDQUFTRCwwQkFBVCxDQUFKLEVBQTBDO0FBQy9DRixhQUFPLElBQUlJLFFBQUosQ0FBYSxJQUFiLEVBQW1CLFlBQVlwQixFQUEvQixHQUFQLENBRCtDLENBQ0Y7QUFDOUM7QUFDRixHQU5ELE1BTU8sSUFBSTlELE9BQU9rRSxTQUFQLENBQWlCaUIsUUFBakIsQ0FBMEJmLElBQTFCLENBQStCTixFQUEvQixNQUF1QyxnQkFBM0MsRUFBNkQ7QUFDbEUsUUFBSSxPQUFPQSxHQUFHLENBQUgsQ0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixVQUFJQSxHQUFHLENBQUgsRUFBTW1CLEtBQU4sQ0FBWUQsMEJBQVosQ0FBSixFQUE2QztBQUMzQ0YsZUFBT00sS0FBS3RCLEdBQUcsQ0FBSCxJQUFRLElBQVIsR0FBZUEsR0FBRyxDQUFILENBQWYsR0FBdUIsSUFBNUIsQ0FBUCxDQUQyQyxDQUNEO0FBQzNDO0FBQ0YsS0FKRCxNQUlPO0FBQ0xnQixhQUFPaEIsR0FBRyxDQUFILEVBQU1BLEdBQUcsQ0FBSCxDQUFOLENBQVA7QUFDRDs7QUFFRCxRQUFJLE9BQU9BLEdBQUcsQ0FBSCxDQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFVBQUksT0FBT2EsUUFBUWIsR0FBRyxDQUFILENBQVIsQ0FBUCxLQUEwQixVQUE5QixFQUEwQztBQUN4Q2lCLGdCQUFRSixRQUFRYixHQUFHLENBQUgsQ0FBUixDQUFSO0FBQ0QsT0FGRCxNQUVPLElBQUlBLEdBQUcsQ0FBSCxFQUFNbUIsS0FBTixDQUFZRCwwQkFBWixDQUFKLEVBQTZDO0FBQ2xERCxnQkFBUUssS0FBS3RCLEdBQUcsQ0FBSCxDQUFMLENBQVIsQ0FEa0QsQ0FDN0I7QUFDdEI7QUFDRixLQU5ELE1BTU8sSUFBSU8sUUFBUVAsR0FBRyxDQUFILENBQVIsTUFBbUIsUUFBdkIsRUFBaUM7QUFDdENpQixjQUFRakIsR0FBRyxDQUFILENBQVI7QUFDRDtBQUNGLEdBbEJNLE1Ba0JBLElBQUksT0FBT0EsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQ25DZ0IsV0FBT2hCLEVBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9nQixJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzlCLFVBQU0sSUFBSU8sS0FBSixDQUFVUCxPQUFPLDBCQUFqQixDQUFOO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBSzdDLEtBQUwsQ0FBVzhDLEtBQVgsRUFBa0JoQixVQUFsQixDQUFQO0FBQ0QsQ0F6REQ7QUEwREEsZ0Q7Ozs7Ozs7Ozs7OztBQzlEYTs7QUFFYmYsT0FBT0MsT0FBUCxHQUFpQixTQUFTcUMsZUFBVCxDQUF5QjFELElBQXpCLEVBQStCMkQsSUFBL0IsRUFBcUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSTtBQUNGLFdBQU9MLFNBQVNqRCxLQUFULENBQWUsSUFBZixFQUFxQkwsS0FBSzRELEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxNQUFoQixDQUF1QkYsSUFBdkIsQ0FBckIsQ0FBUDtBQUNELEdBRkQsQ0FFRSxPQUFPRyxDQUFQLEVBQVU7QUFDVixXQUFPLEtBQVA7QUFDRDtBQUNGLENBZEQ7QUFlQSwyQzs7Ozs7Ozs7Ozs7O0FDakJhOztBQUViMUMsT0FBT0MsT0FBUCxHQUFpQixTQUFTMEMsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlqQixVQUFVLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDQyxNQUF2RDs7QUFFQSxNQUFJLE9BQU9lLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENBLGVBQVdqQixRQUFRaUIsUUFBUixDQUFYO0FBQ0Q7O0FBRUQsU0FBTyxPQUFPQSxRQUFQLEtBQW9CLFVBQTNCO0FBQ0QsQ0FsQkQ7QUFtQkEsMkM7Ozs7Ozs7Ozs7OztBQ3JCYTs7QUFFYjVDLE9BQU9DLE9BQVAsR0FBaUIsU0FBUzRDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUluQixVQUFVLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDQyxNQUF2RDtBQUNBRixVQUFRb0IsUUFBUixHQUFtQnBCLFFBQVFvQixRQUFSLElBQW9CLEVBQXZDO0FBQ0EsTUFBSUEsV0FBV3BCLFFBQVFvQixRQUF2QjtBQUNBQSxXQUFTQyxHQUFULEdBQWVELFNBQVNDLEdBQVQsSUFBZ0IsRUFBL0I7QUFDQUQsV0FBU0MsR0FBVCxDQUFhQyxHQUFiLEdBQW1CRixTQUFTQyxHQUFULENBQWFDLEdBQWIsSUFBb0IsRUFBdkM7O0FBRUEsTUFBSUYsU0FBU0MsR0FBVCxDQUFhQyxHQUFiLENBQWlCSCxPQUFqQixLQUE2QkMsU0FBU0MsR0FBVCxDQUFhQyxHQUFiLENBQWlCSCxPQUFqQixFQUEwQkksV0FBMUIsS0FBMEN6SCxTQUEzRSxFQUFzRjtBQUNwRixRQUFJc0gsU0FBU0MsR0FBVCxDQUFhQyxHQUFiLENBQWlCSCxPQUFqQixFQUEwQkksV0FBMUIsS0FBMEMsSUFBOUMsRUFBb0Q7QUFDbEQsYUFBTyxFQUFQO0FBQ0Q7QUFDRCxXQUFPSCxTQUFTQyxHQUFULENBQWFDLEdBQWIsQ0FBaUJILE9BQWpCLEVBQTBCSSxXQUFqQztBQUNEOztBQUVELFNBQU8sRUFBUDtBQUNELENBdkJEO0FBd0JBLG1DOzs7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWJsRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNrRCxHQUFULENBQWFDLEdBQWIsRUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlDLElBQUo7QUFDQSxNQUFJO0FBQ0YsUUFBSUMsU0FBU3JDLG1CQUFPQSxDQUFDLHNCQUFSLENBQWI7QUFDQSxRQUFJc0MsU0FBU0QsT0FBT0UsVUFBUCxDQUFrQixLQUFsQixDQUFiO0FBQ0FELFdBQU9FLE1BQVAsQ0FBY0wsR0FBZDtBQUNBQyxXQUFPRSxPQUFPRyxNQUFQLENBQWMsS0FBZCxDQUFQO0FBQ0QsR0FMRCxDQUtFLE9BQU9oQixDQUFQLEVBQVU7QUFDVlcsV0FBTzVILFNBQVA7QUFDRDs7QUFFRCxNQUFJNEgsU0FBUzVILFNBQWIsRUFBd0I7QUFDdEIsV0FBTzRILElBQVA7QUFDRDs7QUFFRCxNQUFJTSxhQUFhMUMsbUJBQU9BLENBQUMseUVBQVIsQ0FBakI7QUFDQSxNQUFJMkMsRUFBSjs7QUFFQSxNQUFJQyxjQUFjLFNBQVNBLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCQyxVQUE3QixFQUF5QztBQUN6RCxXQUFPRCxVQUFVQyxVQUFWLEdBQXVCRCxXQUFXLEtBQUtDLFVBQTlDO0FBQ0QsR0FGRDs7QUFJQSxNQUFJQyxlQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLEVBQXRCLEVBQTBCQyxFQUExQixFQUE4QjtBQUMvQyxRQUFJQyxHQUFKLEVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQkMsR0FBbkIsRUFBd0JDLE9BQXhCO0FBQ0FGLFVBQU1KLEtBQUssVUFBWDtBQUNBSyxVQUFNSixLQUFLLFVBQVg7QUFDQUMsVUFBTUYsS0FBSyxVQUFYO0FBQ0FHLFVBQU1GLEtBQUssVUFBWDtBQUNBSyxjQUFVLENBQUNOLEtBQUssVUFBTixLQUFxQkMsS0FBSyxVQUExQixDQUFWO0FBQ0EsUUFBSUMsTUFBTUMsR0FBVixFQUFlO0FBQ2IsYUFBT0csVUFBVSxVQUFWLEdBQXVCRixHQUF2QixHQUE2QkMsR0FBcEM7QUFDRDtBQUNELFFBQUlILE1BQU1DLEdBQVYsRUFBZTtBQUNiLFVBQUlHLFVBQVUsVUFBZCxFQUEwQjtBQUN4QixlQUFPQSxVQUFVLFVBQVYsR0FBdUJGLEdBQXZCLEdBQTZCQyxHQUFwQztBQUNELE9BRkQsTUFFTztBQUNMLGVBQU9DLFVBQVUsVUFBVixHQUF1QkYsR0FBdkIsR0FBNkJDLEdBQXBDO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxhQUFPQyxVQUFVRixHQUFWLEdBQWdCQyxHQUF2QjtBQUNEO0FBQ0YsR0FuQkQ7O0FBcUJBLE1BQUlFLEtBQUssU0FBU0EsRUFBVCxDQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQzVCLFdBQU9GLElBQUlDLENBQUosR0FBUSxDQUFDRCxDQUFELEdBQUtFLENBQXBCO0FBQ0QsR0FGRDtBQUdBLE1BQUlDLEtBQUssU0FBU0EsRUFBVCxDQUFZSCxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQzVCLFdBQU9GLElBQUlFLENBQUosR0FBUUQsSUFBSSxDQUFDQyxDQUFwQjtBQUNELEdBRkQ7QUFHQSxNQUFJRSxLQUFLLFNBQVNBLEVBQVQsQ0FBWUosQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQjtBQUM1QixXQUFPRixJQUFJQyxDQUFKLEdBQVFDLENBQWY7QUFDRCxHQUZEO0FBR0EsTUFBSUcsS0FBSyxTQUFTQSxFQUFULENBQVlMLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUI7QUFDNUIsV0FBT0QsS0FBS0QsSUFBSSxDQUFDRSxDQUFWLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQUlJLE1BQU0sU0FBU0EsR0FBVCxDQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCVixDQUF6QixFQUE0QnJFLENBQTVCLEVBQStCZ0YsRUFBL0IsRUFBbUM7QUFDM0NKLFFBQUloQixhQUFhZ0IsQ0FBYixFQUFnQmhCLGFBQWFBLGFBQWFRLEdBQUdTLENBQUgsRUFBTUMsQ0FBTixFQUFTQyxDQUFULENBQWIsRUFBMEJWLENBQTFCLENBQWIsRUFBMkNXLEVBQTNDLENBQWhCLENBQUo7QUFDQSxXQUFPcEIsYUFBYUgsWUFBWW1CLENBQVosRUFBZTVFLENBQWYsQ0FBYixFQUFnQzZFLENBQWhDLENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQUlJLE1BQU0sU0FBU0EsR0FBVCxDQUFhTCxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCVixDQUF6QixFQUE0QnJFLENBQTVCLEVBQStCZ0YsRUFBL0IsRUFBbUM7QUFDM0NKLFFBQUloQixhQUFhZ0IsQ0FBYixFQUFnQmhCLGFBQWFBLGFBQWFZLEdBQUdLLENBQUgsRUFBTUMsQ0FBTixFQUFTQyxDQUFULENBQWIsRUFBMEJWLENBQTFCLENBQWIsRUFBMkNXLEVBQTNDLENBQWhCLENBQUo7QUFDQSxXQUFPcEIsYUFBYUgsWUFBWW1CLENBQVosRUFBZTVFLENBQWYsQ0FBYixFQUFnQzZFLENBQWhDLENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQUlLLE1BQU0sU0FBU0EsR0FBVCxDQUFhTixDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCVixDQUF6QixFQUE0QnJFLENBQTVCLEVBQStCZ0YsRUFBL0IsRUFBbUM7QUFDM0NKLFFBQUloQixhQUFhZ0IsQ0FBYixFQUFnQmhCLGFBQWFBLGFBQWFhLEdBQUdJLENBQUgsRUFBTUMsQ0FBTixFQUFTQyxDQUFULENBQWIsRUFBMEJWLENBQTFCLENBQWIsRUFBMkNXLEVBQTNDLENBQWhCLENBQUo7QUFDQSxXQUFPcEIsYUFBYUgsWUFBWW1CLENBQVosRUFBZTVFLENBQWYsQ0FBYixFQUFnQzZFLENBQWhDLENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQUlNLE1BQU0sU0FBU0EsR0FBVCxDQUFhUCxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCVixDQUF6QixFQUE0QnJFLENBQTVCLEVBQStCZ0YsRUFBL0IsRUFBbUM7QUFDM0NKLFFBQUloQixhQUFhZ0IsQ0FBYixFQUFnQmhCLGFBQWFBLGFBQWFjLEdBQUdHLENBQUgsRUFBTUMsQ0FBTixFQUFTQyxDQUFULENBQWIsRUFBMEJWLENBQTFCLENBQWIsRUFBMkNXLEVBQTNDLENBQWhCLENBQUo7QUFDQSxXQUFPcEIsYUFBYUgsWUFBWW1CLENBQVosRUFBZTVFLENBQWYsQ0FBYixFQUFnQzZFLENBQWhDLENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQUlPLHNCQUFzQixTQUFTQSxtQkFBVCxDQUE2QnBDLEdBQTdCLEVBQWtDO0FBQzFELFFBQUlxQyxVQUFKO0FBQ0EsUUFBSUMsaUJBQWlCdEMsSUFBSTVILE1BQXpCO0FBQ0EsUUFBSW1LLHNCQUFzQkQsaUJBQWlCLENBQTNDO0FBQ0EsUUFBSUUsc0JBQXNCLENBQUNELHNCQUFzQkEsc0JBQXNCLEVBQTdDLElBQW1ELEVBQTdFO0FBQ0EsUUFBSUUsaUJBQWlCLENBQUNELHNCQUFzQixDQUF2QixJQUE0QixFQUFqRDtBQUNBLFFBQUlFLGFBQWEsSUFBSWpILEtBQUosQ0FBVWdILGlCQUFpQixDQUEzQixDQUFqQjtBQUNBLFFBQUlFLGdCQUFnQixDQUFwQjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7QUFDQSxXQUFPQSxhQUFhTixjQUFwQixFQUFvQztBQUNsQ0QsbUJBQWEsQ0FBQ08sYUFBYUEsYUFBYSxDQUEzQixJQUFnQyxDQUE3QztBQUNBRCxzQkFBZ0JDLGFBQWEsQ0FBYixHQUFpQixDQUFqQztBQUNBRixpQkFBV0wsVUFBWCxJQUF5QkssV0FBV0wsVUFBWCxJQUF5QnJDLElBQUk2QyxVQUFKLENBQWVELFVBQWYsS0FBOEJELGFBQWhGO0FBQ0FDO0FBQ0Q7QUFDRFAsaUJBQWEsQ0FBQ08sYUFBYUEsYUFBYSxDQUEzQixJQUFnQyxDQUE3QztBQUNBRCxvQkFBZ0JDLGFBQWEsQ0FBYixHQUFpQixDQUFqQztBQUNBRixlQUFXTCxVQUFYLElBQXlCSyxXQUFXTCxVQUFYLElBQXlCLFFBQVFNLGFBQTFEO0FBQ0FELGVBQVdELGlCQUFpQixDQUE1QixJQUFpQ0gsa0JBQWtCLENBQW5EO0FBQ0FJLGVBQVdELGlCQUFpQixDQUE1QixJQUFpQ0gsbUJBQW1CLEVBQXBEO0FBQ0EsV0FBT0ksVUFBUDtBQUNELEdBckJEOztBQXVCQSxNQUFJSSxhQUFhLFNBQVNBLFVBQVQsQ0FBb0JwQyxNQUFwQixFQUE0QjtBQUMzQyxRQUFJcUMsaUJBQWlCLEVBQXJCO0FBQ0EsUUFBSUMscUJBQXFCLEVBQXpCO0FBQ0EsUUFBSUMsS0FBSjtBQUNBLFFBQUlDLE1BQUo7O0FBRUEsU0FBS0EsU0FBUyxDQUFkLEVBQWlCQSxVQUFVLENBQTNCLEVBQThCQSxRQUE5QixFQUF3QztBQUN0Q0QsY0FBUXZDLFdBQVd3QyxTQUFTLENBQXBCLEdBQXdCLEdBQWhDO0FBQ0FGLDJCQUFxQixNQUFNQyxNQUFNbEUsUUFBTixDQUFlLEVBQWYsQ0FBM0I7QUFDQWdFLHVCQUFpQkEsaUJBQWlCQyxtQkFBbUJHLE1BQW5CLENBQTBCSCxtQkFBbUI1SyxNQUFuQixHQUE0QixDQUF0RCxFQUF5RCxDQUF6RCxDQUFsQztBQUNEO0FBQ0QsV0FBTzJLLGNBQVA7QUFDRCxHQVpEOztBQWNBLE1BQUkxQixJQUFJLEVBQVI7QUFDQSxNQUFJK0IsQ0FBSjtBQUNBLE1BQUlDLEVBQUo7QUFDQSxNQUFJQyxFQUFKO0FBQ0EsTUFBSUMsRUFBSjtBQUNBLE1BQUlDLEVBQUo7QUFDQSxNQUFJNUIsQ0FBSjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsQ0FBSjtBQUNBLE1BQUkwQixNQUFNLENBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLENBQVY7QUFDQSxNQUFJQyxNQUFNLENBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLENBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLENBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxNQUFNLEVBQVY7O0FBRUF4RSxRQUFNTyxXQUFXUCxHQUFYLENBQU47QUFDQXFCLE1BQUllLG9CQUFvQnBDLEdBQXBCLENBQUo7QUFDQTRCLE1BQUksVUFBSjtBQUNBQyxNQUFJLFVBQUo7QUFDQUMsTUFBSSxVQUFKO0FBQ0FDLE1BQUksVUFBSjs7QUFFQXZCLE9BQUthLEVBQUVqSixNQUFQO0FBQ0EsT0FBS2dMLElBQUksQ0FBVCxFQUFZQSxJQUFJNUMsRUFBaEIsRUFBb0I0QyxLQUFLLEVBQXpCLEVBQTZCO0FBQzNCQyxTQUFLekIsQ0FBTDtBQUNBMEIsU0FBS3pCLENBQUw7QUFDQTBCLFNBQUt6QixDQUFMO0FBQ0EwQixTQUFLekIsQ0FBTDtBQUNBSCxRQUFJRCxJQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCSyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0ExQixRQUFJSixJQUFJSSxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E1QixRQUFJSCxJQUFJRyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FoQyxRQUFJRCxJQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCSyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0ExQixRQUFJSixJQUFJSSxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E1QixRQUFJSCxJQUFJRyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FoQyxRQUFJRCxJQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCSyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0ExQixRQUFJSixJQUFJSSxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E1QixRQUFJSCxJQUFJRyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCTyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0E5QixRQUFJRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCUSxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FoQyxRQUFJRCxJQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCSyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0ExQixRQUFJSixJQUFJSSxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCTSxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0E1QixRQUFJSCxJQUFJRyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCTyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0E5QixRQUFJRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCUSxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FoQyxRQUFJSyxJQUFJTCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRSxJQUFJRixDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCVSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FoQyxRQUFJRyxJQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCVyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FsQyxRQUFJSSxJQUFJSixDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCWSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FwQyxRQUFJSyxJQUFJTCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRSxJQUFJRixDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCVSxHQUEzQixFQUFnQyxTQUFoQyxDQUFKO0FBQ0FoQyxRQUFJRyxJQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCVyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FsQyxRQUFJSSxJQUFJSixDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCWSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FwQyxRQUFJSyxJQUFJTCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRSxJQUFJRixDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCVSxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FoQyxRQUFJRyxJQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCVyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FsQyxRQUFJSSxJQUFJSixDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCWSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FwQyxRQUFJSyxJQUFJTCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCUyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0E5QixRQUFJRSxJQUFJRixDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCVSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FoQyxRQUFJRyxJQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVB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QUEsRUFBdEMsRUFBdUUsSUFBdkU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFVBQTFCLEVBQXNDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBdEMsRUFBdUUsSUFBdkU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFdBQTFCLEVBQXVDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBdkMsRUFBd0UsSUFBeEU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLE9BQTFCLEVBQW1DLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBbkMsRUFBb0UsSUFBcEU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFlBQTFCLEVBQXdDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBeEMsRUFBeUUsSUFBekU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFFBQTFCLEVBQW9DLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBcEMsRUFBcUUsSUFBckU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLGVBQTFCLEVBQTJDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBM0MsRUFBNEUsSUFBNUU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLGVBQTFCLEVBQTJDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBM0MsRUFBNEUsSUFBNUU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLGFBQTFCLEVBQXlDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBekMsRUFB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QUFPQSxDQUFFLDBEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDBEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDhEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHNEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLG9EQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDREQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHdEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHdEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHNEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHdEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHNEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDhEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDREQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLG9EQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDhEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDhEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDBEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHNEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDREQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDBEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLG9EQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDBEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLG9EQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtE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Z0IsdUVBQUwsRUFBSzs7QUFBQTs7QUFDNUIsT0FBS2pqQixPQUFMLEdBQWVoTixFQUFFdWlCLE1BQUYsQ0FBVTtBQUN4QnRTLE9BQUksS0FEb0I7QUFFeEJuTSxTQUFNLEtBRmtCO0FBR3hCb2tCLGNBQVcsZUFIYTtBQUl4QnNGLFVBQU8sRUFKaUI7QUFLeEJpQixjQUFXO0FBTGEsR0FBVixFQU1ad0IsUUFOWSxDQUFmOztBQVFBLE1BQUlqQyxnQkFBSixDQUFzQmh1QixFQUFFdWlCLE1BQUYsQ0FBVTtBQUMvQmlNLGNBQVcsS0FBSzBCLGFBQUwsRUFEb0I7QUFFL0I3a0IsU0FBTSxLQUFLMkIsT0FBTCxDQUFjLE1BQWQsQ0FGeUI7QUFHL0J5aEIsY0FBVyxLQUFLemhCLE9BQUwsQ0FBYyxXQUFkO0FBSG9CLEdBQVYsRUFJbkIsS0FBS0EsT0FBTCxDQUFjLE9BQWQsQ0FKbUIsQ0FBdEI7QUFLQTs7OztrQ0FFZTtBQUNmLE9BQUk4TCxVQUFVLEtBQWQ7QUFDQSxPQUFJLEtBQUs5TCxPQUFMLENBQWMsTUFBZCxDQUFKLEVBQTZCO0FBQzVCOEwsY0FBVSxFQUFWOztBQUVBOVksTUFBRXVOLElBQUYsQ0FBUSxLQUFLUCxPQUFMLENBQWMsTUFBZCxDQUFSLEVBQWdDLFVBQUVuTixLQUFGLEVBQVNVLElBQVQsRUFBbUI7QUFDbER1WSxhQUFTdlksSUFBVCxJQUFvQixPQUFPVixNQUFPLFlBQVAsQ0FBUCxLQUFpQyxXQUFuQyxHQUFtREEsTUFBTyxZQUFQLENBQW5ELEdBQTJFQSxNQUFPLE9BQVAsQ0FBN0Y7QUFDQSxLQUZEO0FBR0E7QUFDRCxVQUFPaVosT0FBUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNRixtQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzXCIpO1xuIiwiaW1wb3J0IHZhbGlkYXRlTmFtZXNwYWNlIGZyb20gJy4vdmFsaWRhdGVOYW1lc3BhY2UuanMnO1xuaW1wb3J0IHZhbGlkYXRlSG9va05hbWUgZnJvbSAnLi92YWxpZGF0ZUhvb2tOYW1lLmpzJztcbmltcG9ydCB7IGRvQWN0aW9uIH0gZnJvbSAnLi8nO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCBhZGQgYSBob29rLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCBhZGRzIGEgbmV3IGhvb2suXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQWRkSG9vayhob29rcykge1xuICAvKipcbiAgICogQWRkcyB0aGUgaG9vayB0byB0aGUgYXBwcm9wcmlhdGUgaG9va3MgY29udGFpbmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICBob29rTmFtZSAgTmFtZSBvZiBob29rIHRvIGFkZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gICBuYW1lc3BhY2UgVGhlIHVuaXF1ZSBuYW1lc3BhY2UgaWRlbnRpZnlpbmcgdGhlIGNhbGxiYWNrIGluIHRoZSBmb3JtIGB2ZW5kb3IvcGx1Z2luL2Z1bmN0aW9uYC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaG9vayBpcyBydW5cbiAgICogQHBhcmFtIHs/bnVtYmVyfSAgcHJpb3JpdHkgIFByaW9yaXR5IG9mIHRoaXMgaG9vayAoZGVmYXVsdD0xMClcbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBhZGRIb29rKGhvb2tOYW1lLCBuYW1lc3BhY2UsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAxMDtcblxuICAgIGlmICghdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkYXRlTmFtZXNwYWNlKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxiYWNrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVmFsaWRhdGUgbnVtZXJpYyBwcmlvcml0eVxuXG5cbiAgICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiBwcmlvcml0eSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0lmIHNwZWNpZmllZCwgdGhlIGhvb2sgcHJpb3JpdHkgbXVzdCBiZSBhIG51bWJlci4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlciA9IHtcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgfTtcblxuICAgIGlmIChob29rc1tob29rTmFtZV0pIHtcbiAgICAgIC8vIEZpbmQgdGhlIGNvcnJlY3QgaW5zZXJ0IGluZGV4IG9mIHRoZSBuZXcgaG9vay5cbiAgICAgIHZhciBoYW5kbGVycyA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycztcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgd2hpbGUgKGkgPCBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGhhbmRsZXJzW2ldLnByaW9yaXR5ID4gcHJpb3JpdHkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGkrKztcbiAgICAgIH0gLy8gSW5zZXJ0IChvciBhcHBlbmQpIHRoZSBuZXcgaG9vay5cblxuXG4gICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMCwgaGFuZGxlcik7IC8vIFdlIG1heSBhbHNvIGJlIGN1cnJlbnRseSBleGVjdXRpbmcgdGhpcyBob29rLiAgSWYgdGhlIGNhbGxiYWNrXG4gICAgICAvLyB3ZSdyZSBhZGRpbmcgd291bGQgY29tZSBhZnRlciB0aGUgY3VycmVudCBjYWxsYmFjaywgdGhlcmUncyBub1xuICAgICAgLy8gcHJvYmxlbTsgb3RoZXJ3aXNlIHdlIG5lZWQgdG8gaW5jcmVhc2UgdGhlIGV4ZWN1dGlvbiBpbmRleCBvZlxuICAgICAgLy8gYW55IG90aGVyIHJ1bnMgYnkgMSB0byBhY2NvdW50IGZvciB0aGUgYWRkZWQgZWxlbWVudC5cblxuICAgICAgKGhvb2tzLl9fY3VycmVudCB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoaG9va0luZm8pIHtcbiAgICAgICAgaWYgKGhvb2tJbmZvLm5hbWUgPT09IGhvb2tOYW1lICYmIGhvb2tJbmZvLmN1cnJlbnRJbmRleCA+PSBpKSB7XG4gICAgICAgICAgaG9va0luZm8uY3VycmVudEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBob29rIG9mIGl0cyB0eXBlLlxuICAgICAgaG9va3NbaG9va05hbWVdID0ge1xuICAgICAgICBoYW5kbGVyczogW2hhbmRsZXJdLFxuICAgICAgICBydW5zOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChob29rTmFtZSAhPT0gJ2hvb2tBZGRlZCcpIHtcbiAgICAgIGRvQWN0aW9uKCdob29rQWRkZWQnLCBob29rTmFtZSwgbmFtZXNwYWNlLCBjYWxsYmFjaywgcHJpb3JpdHkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUFkZEhvb2suanMubWFwIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gdGhlIG5hbWUgb2YgdGhlXG4gKiBjdXJyZW50bHkgcnVubmluZyBob29rLCBvciBgbnVsbGAgaWYgbm8gaG9vayBvZiB0aGUgZ2l2ZW4gdHlwZSBpcyBjdXJyZW50bHlcbiAqIHJ1bm5pbmcuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzICAgICAgICAgIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnQgaG9vay5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3VycmVudEhvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnRseSBydW5uaW5nIGhvb2ssIG9yIGBudWxsYCBpZiBubyBob29rIG9mXG4gICAqIHRoZSBnaXZlbiB0eXBlIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHs/c3RyaW5nfSAgICAgICAgICAgICBUaGUgbmFtZSBvZiB0aGUgY3VycmVudGx5IHJ1bm5pbmcgaG9vaywgb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYG51bGxgIGlmIG5vIGhvb2sgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmVudEhvb2soKSB7XG4gICAgaWYgKCFob29rcy5fX2N1cnJlbnQgfHwgIWhvb2tzLl9fY3VycmVudC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBob29rcy5fX2N1cnJlbnRbaG9va3MuX19jdXJyZW50Lmxlbmd0aCAtIDFdLm5hbWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUN1cnJlbnRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlQ3VycmVudEhvb2suanMubWFwIiwiaW1wb3J0IHZhbGlkYXRlSG9va05hbWUgZnJvbSAnLi92YWxpZGF0ZUhvb2tOYW1lLmpzJztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmV0dXJuIHRoZSBudW1iZXIgb2YgdGltZXMgYVxuICogaG9vayBoYXMgYmVlbiBjYWxsZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBob29rJ3MgY2FsbCBjb3VudC5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEaWRIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdGltZXMgYW4gYWN0aW9uIGhhcyBiZWVuIGZpcmVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGhvb2tOYW1lIFRoZSBob29rIG5hbWUgdG8gY2hlY2suXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gICAgICAgICAgVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgaG9vayBoYXMgcnVuLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGRpZEhvb2soaG9va05hbWUpIHtcbiAgICBpZiAoIXZhbGlkYXRlSG9va05hbWUoaG9va05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzW2hvb2tOYW1lXSAmJiBob29rc1tob29rTmFtZV0ucnVucyA/IGhvb2tzW2hvb2tOYW1lXS5ydW5zIDogMDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlkSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZURpZEhvb2suanMubWFwIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gd2hldGhlciBhIGhvb2sgaXNcbiAqIGN1cnJlbnRseSBiZWluZyBleGVjdXRlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGV0aGVyIGEgaG9vayBpcyBjdXJyZW50bHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBiZWluZyBleGVjdXRlZC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRG9pbmdIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgYSBob29rIGlzIGN1cnJlbnRseSBiZWluZyBleGVjdXRlZC5cbiAgICpcbiAgICogQHBhcmFtICB7P3N0cmluZ30gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gY2hlY2sgZm9yLiAgSWZcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgb21pdHRlZCwgd2lsbCBjaGVjayBmb3IgYW55IGhvb2sgYmVpbmcgZXhlY3V0ZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGhvb2sgaXMgYmVpbmcgZXhlY3V0ZWQuXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gZG9pbmdIb29rKGhvb2tOYW1lKSB7XG4gICAgLy8gSWYgdGhlIGhvb2tOYW1lIHdhcyBub3QgcGFzc2VkLCBjaGVjayBmb3IgYW55IGN1cnJlbnQgaG9vay5cbiAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBob29rTmFtZSkge1xuICAgICAgcmV0dXJuICd1bmRlZmluZWQnICE9PSB0eXBlb2YgaG9va3MuX19jdXJyZW50WzBdO1xuICAgIH0gLy8gUmV0dXJuIHRoZSBfX2N1cnJlbnQgaG9vay5cblxuXG4gICAgcmV0dXJuIGhvb2tzLl9fY3VycmVudFswXSA/IGhvb2tOYW1lID09PSBob29rcy5fX2N1cnJlbnRbMF0ubmFtZSA6IGZhbHNlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEb2luZ0hvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVEb2luZ0hvb2suanMubWFwIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gd2hldGhlciBhbnkgaGFuZGxlcnMgYXJlXG4gKiBhdHRhY2hlZCB0byBhIHBhcnRpY3VsYXIgaG9vay5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGV0aGVyIGFueSBoYW5kbGVycyBhcmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hlZCB0byBhIHBhcnRpY3VsYXIgaG9vay5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGFzSG9vayhob29rcykge1xuICAvKipcbiAgICogUmV0dXJucyBob3cgbWFueSBoYW5kbGVycyBhcmUgYXR0YWNoZWQgZm9yIHRoZSBnaXZlbiBob29rLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICBob29rTmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBjaGVjayBmb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlcmUgYXJlIGhhbmRsZXJzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIHRoZSBnaXZlbiBob29rLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGhhc0hvb2soaG9va05hbWUpIHtcbiAgICByZXR1cm4gaG9va05hbWUgaW4gaG9va3M7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhhc0hvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVIYXNIb29rLmpzLm1hcCIsImltcG9ydCBjcmVhdGVBZGRIb29rIGZyb20gJy4vY3JlYXRlQWRkSG9vayc7XG5pbXBvcnQgY3JlYXRlUmVtb3ZlSG9vayBmcm9tICcuL2NyZWF0ZVJlbW92ZUhvb2snO1xuaW1wb3J0IGNyZWF0ZUhhc0hvb2sgZnJvbSAnLi9jcmVhdGVIYXNIb29rJztcbmltcG9ydCBjcmVhdGVSdW5Ib29rIGZyb20gJy4vY3JlYXRlUnVuSG9vayc7XG5pbXBvcnQgY3JlYXRlQ3VycmVudEhvb2sgZnJvbSAnLi9jcmVhdGVDdXJyZW50SG9vayc7XG5pbXBvcnQgY3JlYXRlRG9pbmdIb29rIGZyb20gJy4vY3JlYXRlRG9pbmdIb29rJztcbmltcG9ydCBjcmVhdGVEaWRIb29rIGZyb20gJy4vY3JlYXRlRGlkSG9vayc7XG4vKipcbiAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIGhvb2tzIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBob29rcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVIb29rcygpIHtcbiAgdmFyIGFjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgZmlsdGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGFjdGlvbnMuX19jdXJyZW50ID0gW107XG4gIGZpbHRlcnMuX19jdXJyZW50ID0gW107XG4gIHJldHVybiB7XG4gICAgYWRkQWN0aW9uOiBjcmVhdGVBZGRIb29rKGFjdGlvbnMpLFxuICAgIGFkZEZpbHRlcjogY3JlYXRlQWRkSG9vayhmaWx0ZXJzKSxcbiAgICByZW1vdmVBY3Rpb246IGNyZWF0ZVJlbW92ZUhvb2soYWN0aW9ucyksXG4gICAgcmVtb3ZlRmlsdGVyOiBjcmVhdGVSZW1vdmVIb29rKGZpbHRlcnMpLFxuICAgIGhhc0FjdGlvbjogY3JlYXRlSGFzSG9vayhhY3Rpb25zKSxcbiAgICBoYXNGaWx0ZXI6IGNyZWF0ZUhhc0hvb2soZmlsdGVycyksXG4gICAgcmVtb3ZlQWxsQWN0aW9uczogY3JlYXRlUmVtb3ZlSG9vayhhY3Rpb25zLCB0cnVlKSxcbiAgICByZW1vdmVBbGxGaWx0ZXJzOiBjcmVhdGVSZW1vdmVIb29rKGZpbHRlcnMsIHRydWUpLFxuICAgIGRvQWN0aW9uOiBjcmVhdGVSdW5Ib29rKGFjdGlvbnMpLFxuICAgIGFwcGx5RmlsdGVyczogY3JlYXRlUnVuSG9vayhmaWx0ZXJzLCB0cnVlKSxcbiAgICBjdXJyZW50QWN0aW9uOiBjcmVhdGVDdXJyZW50SG9vayhhY3Rpb25zKSxcbiAgICBjdXJyZW50RmlsdGVyOiBjcmVhdGVDdXJyZW50SG9vayhmaWx0ZXJzKSxcbiAgICBkb2luZ0FjdGlvbjogY3JlYXRlRG9pbmdIb29rKGFjdGlvbnMpLFxuICAgIGRvaW5nRmlsdGVyOiBjcmVhdGVEb2luZ0hvb2soZmlsdGVycyksXG4gICAgZGlkQWN0aW9uOiBjcmVhdGVEaWRIb29rKGFjdGlvbnMpLFxuICAgIGRpZEZpbHRlcjogY3JlYXRlRGlkSG9vayhmaWx0ZXJzKSxcbiAgICBhY3Rpb25zOiBhY3Rpb25zLFxuICAgIGZpbHRlcnM6IGZpbHRlcnNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9va3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVIb29rcy5qcy5tYXAiLCJpbXBvcnQgdmFsaWRhdGVOYW1lc3BhY2UgZnJvbSAnLi92YWxpZGF0ZU5hbWVzcGFjZS5qcyc7XG5pbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuaW1wb3J0IHsgZG9BY3Rpb24gfSBmcm9tICcuLyc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJlbW92ZSBhIHNwZWNpZmllZCBob29rIG9yIGFsbFxuICogaG9va3MgYnkgdGhlIGdpdmVuIG5hbWUuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzICAgICAgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKiBAcGFyYW0gIHtib29sZWFufSAgICAgcmVtb3ZlQWxsICBXaGV0aGVyIHRvIHJlbW92ZSBhbGwgY2FsbGJhY2tzIGZvciBhIGhvb2tOYW1lLCB3aXRob3V0IHJlZ2FyZCB0byBuYW1lc3BhY2UuIFVzZWQgdG8gY3JlYXRlIGByZW1vdmVBbGwqYCBmdW5jdGlvbnMuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgRnVuY3Rpb24gdGhhdCByZW1vdmVzIGhvb2tzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUhvb2soaG9va3MsIHJlbW92ZUFsbCkge1xuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGNhbGxiYWNrIChvciBhbGwgY2FsbGJhY2tzKSBmcm9tIHRoZSBob29rIHdpdGggYVxuICAgKiBnaXZlbiBob29rTmFtZSBhbmQgbmFtZXNwYWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgaG9va05hbWUgIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIG1vZGlmeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgIG5hbWVzcGFjZSBUaGUgdW5pcXVlIG5hbWVzcGFjZSBpZGVudGlmeWluZyB0aGUgY2FsbGJhY2sgaW4gdGhlIGZvcm0gYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgICAgICAgIFRoZSBudW1iZXIgb2YgY2FsbGJhY2tzIHJlbW92ZWQuXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gcmVtb3ZlSG9vayhob29rTmFtZSwgbmFtZXNwYWNlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcmVtb3ZlQWxsICYmICF2YWxpZGF0ZU5hbWVzcGFjZShuYW1lc3BhY2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBCYWlsIGlmIG5vIGhvb2tzIGV4aXN0IGJ5IHRoaXMgbmFtZVxuXG5cbiAgICBpZiAoIWhvb2tzW2hvb2tOYW1lXSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZXJzUmVtb3ZlZCA9IDA7XG5cbiAgICBpZiAocmVtb3ZlQWxsKSB7XG4gICAgICBoYW5kbGVyc1JlbW92ZWQgPSBob29rc1tob29rTmFtZV0uaGFuZGxlcnMubGVuZ3RoO1xuICAgICAgaG9va3NbaG9va05hbWVdID0ge1xuICAgICAgICBydW5zOiBob29rc1tob29rTmFtZV0ucnVucyxcbiAgICAgICAgaGFuZGxlcnM6IFtdXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcnkgdG8gZmluZCB0aGUgc3BlY2lmaWVkIGNhbGxiYWNrIHRvIHJlbW92ZS5cbiAgICAgIHZhciBoYW5kbGVycyA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycztcblxuICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbaV0ubmFtZXNwYWNlID09PSBuYW1lc3BhY2UpIHtcbiAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgaGFuZGxlcnNSZW1vdmVkKys7IC8vIFRoaXMgY2FsbGJhY2sgbWF5IGFsc28gYmUgcGFydCBvZiBhIGhvb2sgdGhhdCBpc1xuICAgICAgICAgIC8vIGN1cnJlbnRseSBleGVjdXRpbmcuICBJZiB0aGUgY2FsbGJhY2sgd2UncmUgcmVtb3ZpbmdcbiAgICAgICAgICAvLyBjb21lcyBhZnRlciB0aGUgY3VycmVudCBjYWxsYmFjaywgdGhlcmUncyBubyBwcm9ibGVtO1xuICAgICAgICAgIC8vIG90aGVyd2lzZSB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBleGVjdXRpb24gaW5kZXggb2YgYW55XG4gICAgICAgICAgLy8gb3RoZXIgcnVucyBieSAxIHRvIGFjY291bnQgZm9yIHRoZSByZW1vdmVkIGVsZW1lbnQuXG5cbiAgICAgICAgICAoaG9va3MuX19jdXJyZW50IHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChob29rSW5mbykge1xuICAgICAgICAgICAgaWYgKGhvb2tJbmZvLm5hbWUgPT09IGhvb2tOYW1lICYmIGhvb2tJbmZvLmN1cnJlbnRJbmRleCA+PSBpKSB7XG4gICAgICAgICAgICAgIGhvb2tJbmZvLmN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBpID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhvb2tOYW1lICE9PSAnaG9va1JlbW92ZWQnKSB7XG4gICAgICBkb0FjdGlvbignaG9va1JlbW92ZWQnLCBob29rTmFtZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcnNSZW1vdmVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZW1vdmVIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlUmVtb3ZlSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIGV4ZWN1dGUgYWxsIGNhbGxiYWNrc1xuICogcmVnaXN0ZXJlZCB0byBhIGhvb2sgb2YgdGhlIHNwZWNpZmllZCB0eXBlLCBvcHRpb25hbGx5IHJldHVybmluZyB0aGUgZmluYWxcbiAqIHZhbHVlIG9mIHRoZSBjYWxsIGNoYWluLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyAgICAgICAgICBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqIEBwYXJhbSAgez9ib29sZWFufSAgICByZXR1cm5GaXJzdEFyZyBXaGV0aGVyIGVhY2ggaG9vayBjYWxsYmFjayBpcyBleHBlY3RlZCB0b1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdHMgZmlyc3QgYXJndW1lbnQuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgICAgIEZ1bmN0aW9uIHRoYXQgcnVucyBob29rIGNhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUnVuSG9vayhob29rcywgcmV0dXJuRmlyc3RBcmcpIHtcbiAgLyoqXG4gICAqIFJ1bnMgYWxsIGNhbGxiYWNrcyBmb3IgdGhlIHNwZWNpZmllZCBob29rLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGhvb2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIHJ1bi5cbiAgICogQHBhcmFtICB7Li4uKn0gICBhcmdzICAgICBBcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgaG9vayBjYWxsYmFja3MuXG4gICAqXG4gICAqIEByZXR1cm4geyp9ICAgICAgICAgICAgICAgUmV0dXJuIHZhbHVlIG9mIHJ1bm5lciwgaWYgYXBwbGljYWJsZS5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBydW5Ib29rcyhob29rTmFtZSkge1xuICAgIGlmICghaG9va3NbaG9va05hbWVdKSB7XG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgcnVuczogMFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBob29rc1tob29rTmFtZV0ucnVucysrO1xuICAgIHZhciBoYW5kbGVycyA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICghaGFuZGxlcnMgfHwgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJldHVybkZpcnN0QXJnID8gYXJnc1swXSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgaG9va0luZm8gPSB7XG4gICAgICBuYW1lOiBob29rTmFtZSxcbiAgICAgIGN1cnJlbnRJbmRleDogMFxuICAgIH07XG5cbiAgICBob29rcy5fX2N1cnJlbnQucHVzaChob29rSW5mbyk7XG5cbiAgICB3aGlsZSAoaG9va0luZm8uY3VycmVudEluZGV4IDwgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IGhhbmRsZXJzW2hvb2tJbmZvLmN1cnJlbnRJbmRleF07XG4gICAgICB2YXIgcmVzdWx0ID0gaGFuZGxlci5jYWxsYmFjay5hcHBseShudWxsLCBhcmdzKTtcblxuICAgICAgaWYgKHJldHVybkZpcnN0QXJnKSB7XG4gICAgICAgIGFyZ3NbMF0gPSByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGhvb2tJbmZvLmN1cnJlbnRJbmRleCsrO1xuICAgIH1cblxuICAgIGhvb2tzLl9fY3VycmVudC5wb3AoKTtcblxuICAgIGlmIChyZXR1cm5GaXJzdEFyZykge1xuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSdW5Ib29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlUnVuSG9vay5qcy5tYXAiLCJpbXBvcnQgY3JlYXRlSG9va3MgZnJvbSAnLi9jcmVhdGVIb29rcyc7XG5cbnZhciBfY3JlYXRlSG9va3MgPSBjcmVhdGVIb29rcygpLFxuICAgIGFkZEFjdGlvbiA9IF9jcmVhdGVIb29rcy5hZGRBY3Rpb24sXG4gICAgYWRkRmlsdGVyID0gX2NyZWF0ZUhvb2tzLmFkZEZpbHRlcixcbiAgICByZW1vdmVBY3Rpb24gPSBfY3JlYXRlSG9va3MucmVtb3ZlQWN0aW9uLFxuICAgIHJlbW92ZUZpbHRlciA9IF9jcmVhdGVIb29rcy5yZW1vdmVGaWx0ZXIsXG4gICAgaGFzQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmhhc0FjdGlvbixcbiAgICBoYXNGaWx0ZXIgPSBfY3JlYXRlSG9va3MuaGFzRmlsdGVyLFxuICAgIHJlbW92ZUFsbEFjdGlvbnMgPSBfY3JlYXRlSG9va3MucmVtb3ZlQWxsQWN0aW9ucyxcbiAgICByZW1vdmVBbGxGaWx0ZXJzID0gX2NyZWF0ZUhvb2tzLnJlbW92ZUFsbEZpbHRlcnMsXG4gICAgZG9BY3Rpb24gPSBfY3JlYXRlSG9va3MuZG9BY3Rpb24sXG4gICAgYXBwbHlGaWx0ZXJzID0gX2NyZWF0ZUhvb2tzLmFwcGx5RmlsdGVycyxcbiAgICBjdXJyZW50QWN0aW9uID0gX2NyZWF0ZUhvb2tzLmN1cnJlbnRBY3Rpb24sXG4gICAgY3VycmVudEZpbHRlciA9IF9jcmVhdGVIb29rcy5jdXJyZW50RmlsdGVyLFxuICAgIGRvaW5nQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmRvaW5nQWN0aW9uLFxuICAgIGRvaW5nRmlsdGVyID0gX2NyZWF0ZUhvb2tzLmRvaW5nRmlsdGVyLFxuICAgIGRpZEFjdGlvbiA9IF9jcmVhdGVIb29rcy5kaWRBY3Rpb24sXG4gICAgZGlkRmlsdGVyID0gX2NyZWF0ZUhvb2tzLmRpZEZpbHRlcixcbiAgICBhY3Rpb25zID0gX2NyZWF0ZUhvb2tzLmFjdGlvbnMsXG4gICAgZmlsdGVycyA9IF9jcmVhdGVIb29rcy5maWx0ZXJzO1xuXG5leHBvcnQgeyBjcmVhdGVIb29rcywgYWRkQWN0aW9uLCBhZGRGaWx0ZXIsIHJlbW92ZUFjdGlvbiwgcmVtb3ZlRmlsdGVyLCBoYXNBY3Rpb24sIGhhc0ZpbHRlciwgcmVtb3ZlQWxsQWN0aW9ucywgcmVtb3ZlQWxsRmlsdGVycywgZG9BY3Rpb24sIGFwcGx5RmlsdGVycywgY3VycmVudEFjdGlvbiwgY3VycmVudEZpbHRlciwgZG9pbmdBY3Rpb24sIGRvaW5nRmlsdGVyLCBkaWRBY3Rpb24sIGRpZEZpbHRlciwgYWN0aW9ucywgZmlsdGVycyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBWYWxpZGF0ZSBhIGhvb2tOYW1lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGhvb2tOYW1lIFRoZSBob29rIG5hbWUgdG8gdmFsaWRhdGUuIFNob3VsZCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgY29udGFpbmluZ1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5IG51bWJlcnMsIGxldHRlcnMsIGRhc2hlcywgcGVyaW9kcyBhbmQgdW5kZXJzY29yZXMuIEFsc28sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBob29rIG5hbWUgY2Fubm90IGJlZ2luIHdpdGggYF9fYC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgIFdoZXRoZXIgdGhlIGhvb2sgbmFtZSBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkge1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBob29rTmFtZSB8fCAnJyA9PT0gaG9va05hbWUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKC9eX18vLnRlc3QoaG9va05hbWUpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgaG9vayBuYW1lIGNhbm5vdCBiZWdpbiB3aXRoIGBfX2AuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWjAtOV8uLV0qJC8udGVzdChob29rTmFtZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIG5hbWUgY2FuIG9ubHkgY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzLCBkYXNoZXMsIHBlcmlvZHMgYW5kIHVuZGVyc2NvcmVzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZUhvb2tOYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsaWRhdGVIb29rTmFtZS5qcy5tYXAiLCIvKipcbiAqIFZhbGlkYXRlIGEgbmFtZXNwYWNlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHRvIHZhbGlkYXRlIC0gc2hvdWxkIHRha2UgdGhlIGZvcm1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB2ZW5kb3IvcGx1Z2luL2Z1bmN0aW9uYC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICBXaGV0aGVyIHRoZSBuYW1lc3BhY2UgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBuYW1lc3BhY2UgfHwgJycgPT09IG5hbWVzcGFjZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIG5hbWVzcGFjZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aMC05Xy5cXC1cXC9dKiQvLnRlc3QobmFtZXNwYWNlKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIG5hbWVzcGFjZSBjYW4gb25seSBjb250YWluIG51bWJlcnMsIGxldHRlcnMsIGRhc2hlcywgcGVyaW9kcywgdW5kZXJzY29yZXMgYW5kIHNsYXNoZXMuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlTmFtZXNwYWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsaWRhdGVOYW1lc3BhY2UuanMubWFwIiwiY2xhc3MgSlNfUGFyc2VfQXJncyB7XHJcblx0Y29uc3RydWN0b3IoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfbmVzdGVkID0gZmFsc2UgKSB7XHJcblx0XHR0aGlzLmFyZ3MgICAgID0gJGFyZ3M7XHJcblx0XHR0aGlzLmRlZmF1bHRzID0gJGRlZmF1bHRzO1xyXG5cdFx0dGhpcy5uZXN0ZWQgICA9ICRpc19uZXN0ZWQ7XHJcblx0XHR0aGlzLnBhcnNlKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmdzO1xyXG5cdH1cclxuXHJcblx0cGFyc2UoKSB7XHJcblx0XHRmb3IoIGxldCAkX2tleSBpbiB0aGlzLmRlZmF1bHRzICkge1xyXG5cdFx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5uZXN0ZWQgJiYgdHlwZW9mICB0aGlzLmRlZmF1bHRzWyAkX2tleSBdID09PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0XHR0aGlzLmFyZ3NbICRfa2V5IF0gPSBuZXcgSlNfUGFyc2VfQXJncyggdGhpcy5hcmdzWyAkX2tleSBdLCB0aGlzLmRlZmF1bHRzWyAkX2tleSBdLCB0aGlzLm5lc3RlZCApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzWyAkX2tleSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IHRoaXMuZGVmYXVsdHNbICRfa2V5IF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfZGVlcCA9IGZhbHNlICkgPT4gbmV3IEpTX1BhcnNlX0FyZ3MoICRhcmdzLCAkZGVmYXVsdHMsICRpc19kZWVwICk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1pY3JvdGltZShnZXRBc0Zsb2F0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvbWljcm90aW1lL1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyBpbXByb3ZlZCBieTogRHVtaXRydSBVenVuIChodHRwOi8vZHV6dW4ubWUpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHRpbWVTdGFtcCA9IG1pY3JvdGltZSh0cnVlKVxuICAvLyAgIGV4YW1wbGUgMTogJHRpbWVTdGFtcCA+IDEwMDAwMDAwMDAgJiYgJHRpbWVTdGFtcCA8IDIwMDAwMDAwMDBcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IC9eMFxcLlswLTldezEsNn0gWzAtOV17MTAsMTB9JC8udGVzdChtaWNyb3RpbWUoKSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICB2YXIgcztcbiAgdmFyIG5vdztcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbm93ID0gKHBlcmZvcm1hbmNlLm5vdygpICsgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTYpIC8gMWU2ICsgJyAnICsgcztcbiAgfSBlbHNlIHtcbiAgICBub3cgPSAoRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWUzKSAvIDFlMyArICcgJyArIHM7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWNyb3RpbWUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jKGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRzIG9uIGNhbGxfdXNlcl9mdW5jX2FycmF5IHdoaWNoIGluIHR1cm4gZGVwZW5kcyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmMoJ2lzTmFOJywgJ2EnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHZhciBjYWxsVXNlckZ1bmNBcnJheSA9IHJlcXVpcmUoJy4uL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5Jyk7XG4gIHBhcmFtZXRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gY2FsbFVzZXJGdW5jQXJyYXkoY2IsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jX2FycmF5KGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmNfYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUaGlhZ28gTWF0YSAoaHR0cDovL3RoaWFnb21hdGEuYmxvZy5jb20pXG4gIC8vICByZXZpc2VkIGJ5OiBKb24gSG9obGVcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZGluZyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAgYW5kL29yIGBuZXcgRnVuY3Rpb25gLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsnYSddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWzFdKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICB2YXIgZnVuYztcbiAgdmFyIHNjb3BlID0gbnVsbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmdW5jID0gJGdsb2JhbFtjYl07XG4gICAgfSBlbHNlIGlmIChjYi5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgIGZ1bmMgPSBuZXcgRnVuY3Rpb24obnVsbCwgJ3JldHVybiAnICsgY2IpKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LWZ1bmNcbiAgICB9XG4gIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNiKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIGZ1bmMgPSBldmFsKGNiWzBdICsgXCJbJ1wiICsgY2JbMV0gKyBcIiddXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZnVuYyA9IGNiWzBdW2NiWzFdXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiWzBdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY29wZSA9ICRnbG9iYWxbY2JbMF1dO1xuICAgICAgfSBlbHNlIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgc2NvcGUgPSBldmFsKGNiWzBdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKGNiWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNjb3BlID0gY2JbMF07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZ1bmMgPSBjYjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihmdW5jICsgJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmMuYXBwbHkoc2NvcGUsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jX2FycmF5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVfZnVuY3Rpb24oYXJncywgY29kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY3JlYXRlX2Z1bmN0aW9uL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBKb2hubnkgTWFzdCAoaHR0cDovL3d3dy5waHB2cm91d2VuLm5sKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGYgPSBjcmVhdGVfZnVuY3Rpb24oJ2EsIGInLCAncmV0dXJuIChhICsgYiknKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiAkZigxLCAyKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAzXG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJncy5zcGxpdCgnLCcpLmNvbmNhdChjb2RlKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVfZnVuY3Rpb24uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZ1bmN0aW9uX2V4aXN0cyhmdW5jTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Z1bmN0aW9uX2V4aXN0cy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBTdGV2ZSBDbGF5XG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogZnVuY3Rpb25fZXhpc3RzKCdpc0Zpbml0ZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgICAgICB0ZXN0OiBza2lwLTFcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuXG4gIGlmICh0eXBlb2YgZnVuY05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgZnVuY05hbWUgPSAkZ2xvYmFsW2Z1bmNOYW1lXTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgZnVuY05hbWUgPT09ICdmdW5jdGlvbic7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnVuY3Rpb25fZXhpc3RzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmlfZ2V0KHZhcm5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbmlfZ2V0L1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSBpbmkgdmFsdWVzIG11c3QgYmUgc2V0IGJ5IGluaV9zZXQgb3IgbWFudWFsbHkgd2l0aGluIGFuIGluaSBmaWxlXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfc2V0KCdkYXRlLnRpbWV6b25lJywgJ0FzaWEvSG9uZ19Lb25nJylcbiAgLy8gICBleGFtcGxlIDE6IGluaV9nZXQoJ2RhdGUudGltZXpvbmUnKVxuICAvLyAgIHJldHVybnMgMTogJ0FzaWEvSG9uZ19Lb25nJ1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG4gICRsb2N1dHVzLnBocC5pbmkgPSAkbG9jdXR1cy5waHAuaW5pIHx8IHt9O1xuXG4gIGlmICgkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdICYmICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICgkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaV9nZXQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1kNShzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9tZDUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBXZWJ0b29sa2l0LmluZm8gKGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvLylcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIG5vdGUgMTogS2VlcCBpbiBtaW5kIHRoYXQgaW4gYWNjb3JkYW5jZSB3aXRoIFBIUCwgdGhlIHdob2xlIHN0cmluZyBpcyBidWZmZXJlZCBhbmQgdGhlblxuICAvLyAgICAgIG5vdGUgMTogaGFzaGVkLiBJZiBhdmFpbGFibGUsIHdlJ2QgcmVjb21tZW5kIHVzaW5nIE5vZGUncyBuYXRpdmUgY3J5cHRvIG1vZHVsZXMgZGlyZWN0bHlcbiAgLy8gICAgICBub3RlIDE6IGluIGEgc3RlYW1pbmcgZmFzaGlvbiBmb3IgZmFzdGVyIGFuZCBtb3JlIGVmZmljaWVudCBoYXNoaW5nXG4gIC8vICAgZXhhbXBsZSAxOiBtZDUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJzZlNjU4ZDRiZmNiNTljYzEzZjk2YzE0NDUwYWM0MGI5J1xuXG4gIHZhciBoYXNoO1xuICB0cnkge1xuICAgIHZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgICB2YXIgbWQ1c3VtID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpO1xuICAgIG1kNXN1bS51cGRhdGUoc3RyKTtcbiAgICBoYXNoID0gbWQ1c3VtLmRpZ2VzdCgnaGV4Jyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYXNoID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgdmFyIHV0ZjhFbmNvZGUgPSByZXF1aXJlKCcuLi94bWwvdXRmOF9lbmNvZGUnKTtcbiAgdmFyIHhsO1xuXG4gIHZhciBfcm90YXRlTGVmdCA9IGZ1bmN0aW9uIF9yb3RhdGVMZWZ0KGxWYWx1ZSwgaVNoaWZ0Qml0cykge1xuICAgIHJldHVybiBsVmFsdWUgPDwgaVNoaWZ0Qml0cyB8IGxWYWx1ZSA+Pj4gMzIgLSBpU2hpZnRCaXRzO1xuICB9O1xuXG4gIHZhciBfYWRkVW5zaWduZWQgPSBmdW5jdGlvbiBfYWRkVW5zaWduZWQobFgsIGxZKSB7XG4gICAgdmFyIGxYNCwgbFk0LCBsWDgsIGxZOCwgbFJlc3VsdDtcbiAgICBsWDggPSBsWCAmIDB4ODAwMDAwMDA7XG4gICAgbFk4ID0gbFkgJiAweDgwMDAwMDAwO1xuICAgIGxYNCA9IGxYICYgMHg0MDAwMDAwMDtcbiAgICBsWTQgPSBsWSAmIDB4NDAwMDAwMDA7XG4gICAgbFJlc3VsdCA9IChsWCAmIDB4M0ZGRkZGRkYpICsgKGxZICYgMHgzRkZGRkZGRik7XG4gICAgaWYgKGxYNCAmIGxZNCkge1xuICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweDgwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgICBpZiAobFg0IHwgbFk0KSB7XG4gICAgICBpZiAobFJlc3VsdCAmIDB4NDAwMDAwMDApIHtcbiAgICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweEMwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweDQwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIGxYOCBeIGxZODtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9GID0gZnVuY3Rpb24gX0YoeCwgeSwgeikge1xuICAgIHJldHVybiB4ICYgeSB8IH54ICYgejtcbiAgfTtcbiAgdmFyIF9HID0gZnVuY3Rpb24gX0coeCwgeSwgeikge1xuICAgIHJldHVybiB4ICYgeiB8IHkgJiB+ejtcbiAgfTtcbiAgdmFyIF9IID0gZnVuY3Rpb24gX0goeCwgeSwgeikge1xuICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH07XG4gIHZhciBfSSA9IGZ1bmN0aW9uIF9JKHgsIHksIHopIHtcbiAgICByZXR1cm4geSBeICh4IHwgfnopO1xuICB9O1xuXG4gIHZhciBfRkYgPSBmdW5jdGlvbiBfRkYoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0YoYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfR0cgPSBmdW5jdGlvbiBfR0coYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0coYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfSEggPSBmdW5jdGlvbiBfSEgoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0goYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfSUkgPSBmdW5jdGlvbiBfSUkoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0koYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfY29udmVydFRvV29yZEFycmF5ID0gZnVuY3Rpb24gX2NvbnZlcnRUb1dvcmRBcnJheShzdHIpIHtcbiAgICB2YXIgbFdvcmRDb3VudDtcbiAgICB2YXIgbE1lc3NhZ2VMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc1RlbXAxID0gbE1lc3NhZ2VMZW5ndGggKyA4O1xuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc1RlbXAyID0gKGxOdW1iZXJPZldvcmRzVGVtcDEgLSBsTnVtYmVyT2ZXb3Jkc1RlbXAxICUgNjQpIC8gNjQ7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzID0gKGxOdW1iZXJPZldvcmRzVGVtcDIgKyAxKSAqIDE2O1xuICAgIHZhciBsV29yZEFycmF5ID0gbmV3IEFycmF5KGxOdW1iZXJPZldvcmRzIC0gMSk7XG4gICAgdmFyIGxCeXRlUG9zaXRpb24gPSAwO1xuICAgIHZhciBsQnl0ZUNvdW50ID0gMDtcbiAgICB3aGlsZSAobEJ5dGVDb3VudCA8IGxNZXNzYWdlTGVuZ3RoKSB7XG4gICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgICAgbEJ5dGVQb3NpdGlvbiA9IGxCeXRlQ291bnQgJSA0ICogODtcbiAgICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgc3RyLmNoYXJDb2RlQXQobEJ5dGVDb3VudCkgPDwgbEJ5dGVQb3NpdGlvbjtcbiAgICAgIGxCeXRlQ291bnQrKztcbiAgICB9XG4gICAgbFdvcmRDb3VudCA9IChsQnl0ZUNvdW50IC0gbEJ5dGVDb3VudCAlIDQpIC8gNDtcbiAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgMHg4MCA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAyXSA9IGxNZXNzYWdlTGVuZ3RoIDw8IDM7XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDFdID0gbE1lc3NhZ2VMZW5ndGggPj4+IDI5O1xuICAgIHJldHVybiBsV29yZEFycmF5O1xuICB9O1xuXG4gIHZhciBfd29yZFRvSGV4ID0gZnVuY3Rpb24gX3dvcmRUb0hleChsVmFsdWUpIHtcbiAgICB2YXIgd29yZFRvSGV4VmFsdWUgPSAnJztcbiAgICB2YXIgd29yZFRvSGV4VmFsdWVUZW1wID0gJyc7XG4gICAgdmFyIGxCeXRlO1xuICAgIHZhciBsQ291bnQ7XG5cbiAgICBmb3IgKGxDb3VudCA9IDA7IGxDb3VudCA8PSAzOyBsQ291bnQrKykge1xuICAgICAgbEJ5dGUgPSBsVmFsdWUgPj4+IGxDb3VudCAqIDggJiAyNTU7XG4gICAgICB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnMCcgKyBsQnl0ZS50b1N0cmluZygxNik7XG4gICAgICB3b3JkVG9IZXhWYWx1ZSA9IHdvcmRUb0hleFZhbHVlICsgd29yZFRvSGV4VmFsdWVUZW1wLnN1YnN0cih3b3JkVG9IZXhWYWx1ZVRlbXAubGVuZ3RoIC0gMiwgMik7XG4gICAgfVxuICAgIHJldHVybiB3b3JkVG9IZXhWYWx1ZTtcbiAgfTtcblxuICB2YXIgeCA9IFtdO1xuICB2YXIgaztcbiAgdmFyIEFBO1xuICB2YXIgQkI7XG4gIHZhciBDQztcbiAgdmFyIEREO1xuICB2YXIgYTtcbiAgdmFyIGI7XG4gIHZhciBjO1xuICB2YXIgZDtcbiAgdmFyIFMxMSA9IDc7XG4gIHZhciBTMTIgPSAxMjtcbiAgdmFyIFMxMyA9IDE3O1xuICB2YXIgUzE0ID0gMjI7XG4gIHZhciBTMjEgPSA1O1xuICB2YXIgUzIyID0gOTtcbiAgdmFyIFMyMyA9IDE0O1xuICB2YXIgUzI0ID0gMjA7XG4gIHZhciBTMzEgPSA0O1xuICB2YXIgUzMyID0gMTE7XG4gIHZhciBTMzMgPSAxNjtcbiAgdmFyIFMzNCA9IDIzO1xuICB2YXIgUzQxID0gNjtcbiAgdmFyIFM0MiA9IDEwO1xuICB2YXIgUzQzID0gMTU7XG4gIHZhciBTNDQgPSAyMTtcblxuICBzdHIgPSB1dGY4RW5jb2RlKHN0cik7XG4gIHggPSBfY29udmVydFRvV29yZEFycmF5KHN0cik7XG4gIGEgPSAweDY3NDUyMzAxO1xuICBiID0gMHhFRkNEQUI4OTtcbiAgYyA9IDB4OThCQURDRkU7XG4gIGQgPSAweDEwMzI1NDc2O1xuXG4gIHhsID0geC5sZW5ndGg7XG4gIGZvciAoayA9IDA7IGsgPCB4bDsgayArPSAxNikge1xuICAgIEFBID0gYTtcbiAgICBCQiA9IGI7XG4gICAgQ0MgPSBjO1xuICAgIEREID0gZDtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTMTEsIDB4RDc2QUE0NzgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgMV0sIFMxMiwgMHhFOEM3Qjc1Nik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzEzLCAweDI0MjA3MERCKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDNdLCBTMTQsIDB4QzFCRENFRUUpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgNF0sIFMxMSwgMHhGNTdDMEZBRik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyA1XSwgUzEyLCAweDQ3ODdDNjJBKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTMTMsIDB4QTgzMDQ2MTMpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgN10sIFMxNCwgMHhGRDQ2OTUwMSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzExLCAweDY5ODA5OEQ4KTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDldLCBTMTIsIDB4OEI0NEY3QUYpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTMTMsIDB4RkZGRjVCQjEpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgMTFdLCBTMTQsIDB4ODk1Q0Q3QkUpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTMTEsIDB4NkI5MDExMjIpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgMTNdLCBTMTIsIDB4RkQ5ODcxOTMpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTMTMsIDB4QTY3OTQzOEUpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgMTVdLCBTMTQsIDB4NDlCNDA4MjEpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgMV0sIFMyMSwgMHhGNjFFMjU2Mik7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyA2XSwgUzIyLCAweEMwNDBCMzQwKTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzIzLCAweDI2NUU1QTUxKTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDBdLCBTMjQsIDB4RTlCNkM3QUEpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgNV0sIFMyMSwgMHhENjJGMTA1RCk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAxMF0sIFMyMiwgMHgyNDQxNDUzKTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzIzLCAweEQ4QTFFNjgxKTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDRdLCBTMjQsIDB4RTdEM0ZCQzgpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgOV0sIFMyMSwgMHgyMUUxQ0RFNik7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAxNF0sIFMyMiwgMHhDMzM3MDdENik7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAzXSwgUzIzLCAweEY0RDUwRDg3KTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDhdLCBTMjQsIDB4NDU1QTE0RUQpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMjEsIDB4QTlFM0U5MDUpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMl0sIFMyMiwgMHhGQ0VGQTNGOCk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzIzLCAweDY3NkYwMkQ5KTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDEyXSwgUzI0LCAweDhEMkE0QzhBKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDVdLCBTMzEsIDB4RkZGQTM5NDIpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgOF0sIFMzMiwgMHg4NzcxRjY4MSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxMV0sIFMzMywgMHg2RDlENjEyMik7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAxNF0sIFMzNCwgMHhGREU1MzgwQyk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzMxLCAweEE0QkVFQTQ0KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDRdLCBTMzIsIDB4NEJERUNGQTkpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgN10sIFMzMywgMHhGNkJCNEI2MCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAxMF0sIFMzNCwgMHhCRUJGQkM3MCk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMzMSwgMHgyODlCN0VDNik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAwXSwgUzMyLCAweEVBQTEyN0ZBKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMzMsIDB4RDRFRjMwODUpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgNl0sIFMzNCwgMHg0ODgxRDA1KTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDldLCBTMzEsIDB4RDlENEQwMzkpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgMTJdLCBTMzIsIDB4RTZEQjk5RTUpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMzMsIDB4MUZBMjdDRjgpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMl0sIFMzNCwgMHhDNEFDNTY2NSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyAwXSwgUzQxLCAweEY0MjkyMjQ0KTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDddLCBTNDIsIDB4NDMyQUZGOTcpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTNDMsIDB4QUI5NDIzQTcpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgNV0sIFM0NCwgMHhGQzkzQTAzOSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFM0MSwgMHg2NTVCNTlDMyk7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAzXSwgUzQyLCAweDhGMENDQzkyKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzQzLCAweEZGRUZGNDdEKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDFdLCBTNDQsIDB4ODU4NDVERDEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgOF0sIFM0MSwgMHg2RkE4N0U0Rik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxNV0sIFM0MiwgMHhGRTJDRTZFMCk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyA2XSwgUzQzLCAweEEzMDE0MzE0KTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDEzXSwgUzQ0LCAweDRFMDgxMUExKTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTNDEsIDB4Rjc1MzdFODIpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgMTFdLCBTNDIsIDB4QkQzQUYyMzUpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMl0sIFM0MywgMHgyQUQ3RDJCQik7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA5XSwgUzQ0LCAweEVCODZEMzkxKTtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIEFBKTtcbiAgICBiID0gX2FkZFVuc2lnbmVkKGIsIEJCKTtcbiAgICBjID0gX2FkZFVuc2lnbmVkKGMsIENDKTtcbiAgICBkID0gX2FkZFVuc2lnbmVkKGQsIEREKTtcbiAgfVxuXG4gIHZhciB0ZW1wID0gX3dvcmRUb0hleChhKSArIF93b3JkVG9IZXgoYikgKyBfd29yZFRvSGV4KGMpICsgX3dvcmRUb0hleChkKTtcblxuICByZXR1cm4gdGVtcC50b0xvd2VyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1kNS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2Vfc3RyKHN0ciwgYXJyYXkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3N0ci9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogQ2FncmkgRWtpblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogSmFja1xuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogTUlPX0tPRFVLSSAoaHR0cDovL21pby1rb2R1a2kuYmxvZ3Nwb3QuY29tLylcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogc3RhZzAxOVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBEcmVhbWVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFphaWRlIChodHRwOi8vemFpZGVzdGhpbmdzLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERhdmlkIFBlc3RhIChodHRwOi8vZGF2aWRwZXN0YS5jb20vKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBqZWljcXVlc3RcbiAgLy8gICAgICBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gbm8gYXJndW1lbnQgaXMgc3BlY2lmaWVkLCB3aWxsIHB1dCB2YXJpYWJsZXMgaW4gZ2xvYmFsIHNjb3BlLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBXaGVuIGEgcGFydGljdWxhciBhcmd1bWVudCBoYXMgYmVlbiBwYXNzZWQsIGFuZCB0aGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogcmV0dXJuZWQgdmFsdWUgaXMgZGlmZmVyZW50IHBhcnNlX3N0ciBvZiBQSFAuXG4gIC8vICAgICAgICAgICBub3RlIDE6IEZvciBleGFtcGxlLCBhPWI9YyZkPT09PWNcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV9zdHIoJ2ZpcnN0PWZvbyZzZWNvbmQ9YmFyJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDE6IHsgZmlyc3Q6ICdmb28nLCBzZWNvbmQ6ICdiYXInIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiBwYXJzZV9zdHIoJ3N0cl9hPUphY2srYW5kK0ppbGwrZGlkbiUyN3Qrc2VlK3RoZSt3ZWxsLicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyAyOiB7IHN0cl9hOiBcIkphY2sgYW5kIEppbGwgZGlkbid0IHNlZSB0aGUgd2VsbC5cIiB9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHZhciAkYWJjID0gezM6J2EnfVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiBwYXJzZV9zdHIoJ2FbYl1bXCJjXCJdPWRlZiZhW3FdPXQrNScsICRhYmMpXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGFiY1xuICAvLyAgICAgICAgcmV0dXJucyAzOiB7XCIzXCI6XCJhXCIsXCJhXCI6e1wiYlwiOntcImNcIjpcImRlZlwifSxcInFcIjpcInQgNVwifX1cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV9zdHIoJ2FbXVtdPXZhbHVlJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDQ6IHtcImFcIjp7XCIwXCI6e1wiMFwiOlwidmFsdWVcIn19fVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHBhcnNlX3N0cignYT0xJmFbXT0yJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgNTogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDU6IHtcImFcIjp7XCIwXCI6XCIyXCJ9fVxuXG4gIHZhciBzdHJBcnIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC9eJi8sICcnKS5yZXBsYWNlKC8mJC8sICcnKS5zcGxpdCgnJicpO1xuICB2YXIgc2FsID0gc3RyQXJyLmxlbmd0aDtcbiAgdmFyIGk7XG4gIHZhciBqO1xuICB2YXIgY3Q7XG4gIHZhciBwO1xuICB2YXIgbGFzdE9iajtcbiAgdmFyIG9iajtcbiAgdmFyIGNocjtcbiAgdmFyIHRtcDtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgcG9zdExlZnRCcmFja2V0UG9zO1xuICB2YXIga2V5cztcbiAgdmFyIGtleXNMZW47XG5cbiAgdmFyIF9maXhTdHIgPSBmdW5jdGlvbiBfZml4U3RyKHN0cikge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xuICB9O1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG5cbiAgaWYgKCFhcnJheSkge1xuICAgIGFycmF5ID0gJGdsb2JhbDtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBzYWw7IGkrKykge1xuICAgIHRtcCA9IHN0ckFycltpXS5zcGxpdCgnPScpO1xuICAgIGtleSA9IF9maXhTdHIodG1wWzBdKTtcbiAgICB2YWx1ZSA9IHRtcC5sZW5ndGggPCAyID8gJycgOiBfZml4U3RyKHRtcFsxXSk7XG5cbiAgICB3aGlsZSAoa2V5LmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgaWYgKGtleS5pbmRleE9mKCdcXHgwMCcpID4gLTEpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgwLCBrZXkuaW5kZXhPZignXFx4MDAnKSk7XG4gICAgfVxuXG4gICAgaWYgKGtleSAmJiBrZXkuY2hhckF0KDApICE9PSAnWycpIHtcbiAgICAgIGtleXMgPSBbXTtcbiAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGtleS5jaGFyQXQoaikgPT09ICdbJyAmJiAhcG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gaiArIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ10nKSB7XG4gICAgICAgICAgaWYgKHBvc3RMZWZ0QnJhY2tldFBvcykge1xuICAgICAgICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5LnNsaWNlKDAsIHBvc3RMZWZ0QnJhY2tldFBvcyAtIDEpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIocG9zdExlZnRCcmFja2V0UG9zLCBqIC0gcG9zdExlZnRCcmFja2V0UG9zKSk7XG4gICAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSAwO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChqICsgMSkgIT09ICdbJykge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICBrZXlzID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBrZXlzWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNociA9IGtleXNbMF0uY2hhckF0KGopO1xuXG4gICAgICAgIGlmIChjaHIgPT09ICcgJyB8fCBjaHIgPT09ICcuJyB8fCBjaHIgPT09ICdbJykge1xuICAgICAgICAgIGtleXNbMF0gPSBrZXlzWzBdLnN1YnN0cigwLCBqKSArICdfJyArIGtleXNbMF0uc3Vic3RyKGogKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHIgPT09ICdbJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9iaiA9IGFycmF5O1xuXG4gICAgICBmb3IgKGogPSAwLCBrZXlzTGVuID0ga2V5cy5sZW5ndGg7IGogPCBrZXlzTGVuOyBqKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tqXS5yZXBsYWNlKC9eWydcIl0vLCAnJykucmVwbGFjZSgvWydcIl0kLywgJycpO1xuICAgICAgICBsYXN0T2JqID0gb2JqO1xuXG4gICAgICAgIGlmICgoa2V5ID09PSAnJyB8fCBrZXkgPT09ICcgJykgJiYgaiAhPT0gMCkge1xuICAgICAgICAgIC8vIEluc2VydCBuZXcgZGltZW5zaW9uXG4gICAgICAgICAgY3QgPSAtMTtcblxuICAgICAgICAgIGZvciAocCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgaWYgKCtwID4gY3QgJiYgcC5tYXRjaCgvXlxcZCskL2cpKSB7XG4gICAgICAgICAgICAgICAgY3QgPSArcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGtleSA9IGN0ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHByaW1pdGl2ZSB2YWx1ZSwgcmVwbGFjZSB3aXRoIG9iamVjdFxuICAgICAgICBpZiAoT2JqZWN0KG9ialtrZXldKSAhPT0gb2JqW2tleV0pIHtcbiAgICAgICAgICBvYmpba2V5XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gb2JqW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxhc3RPYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlX3N0ci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcnRyaW0oc3RyLCBjaGFybGlzdCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3J0cmltL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEVya2VramV0dGVyXG4gIC8vICAgIGlucHV0IGJ5OiByZW1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogcnRyaW0oJyAgICBLZXZpbiB2YW4gWm9ubmV2ZWxkICAgICcpXG4gIC8vICAgcmV0dXJucyAxOiAnICAgIEtldmluIHZhbiBab25uZXZlbGQnXG5cbiAgY2hhcmxpc3QgPSAhY2hhcmxpc3QgPyAnIFxcXFxzXFx4QTAnIDogKGNoYXJsaXN0ICsgJycpLnJlcGxhY2UoLyhbW1xcXSgpLj8vKnt9KyReOl0pL2csICdcXFxcJDEnKTtcblxuICB2YXIgcmUgPSBuZXcgUmVnRXhwKCdbJyArIGNoYXJsaXN0ICsgJ10rJCcsICdnJyk7XG5cbiAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZShyZSwgJycpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ0cmltLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJwb3MoaGF5c3RhY2ssIG5lZWRsZSwgb2Zmc2V0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvc3RycG9zL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBEYW5pZWwgRXN0ZWJhblxuICAvLyAgIGV4YW1wbGUgMTogc3RycG9zKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJywgJ2UnLCA1KVxuICAvLyAgIHJldHVybnMgMTogMTRcblxuICB2YXIgaSA9IChoYXlzdGFjayArICcnKS5pbmRleE9mKG5lZWRsZSwgb2Zmc2V0IHx8IDApO1xuICByZXR1cm4gaSA9PT0gLTEgPyBmYWxzZSA6IGk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RycG9zLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZGVjb2RlKGVuY29kZWREYXRhKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2RlY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IFRodW5kZXIubVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBBbWFuIEd1cHRhXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogUGVsbGVudGVzcXVlIE1hbGVzdWFkYVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2RlY29kZSgnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PScpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9kZWNvZGUoJ1lRPT0nKVxuICAvLyAgIHJldHVybnMgMjogJ2EnXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZGVjb2RlKCc0cHlUSU1PZ0lHeGhJRzF2WkdVPScpXG4gIC8vICAgcmV0dXJucyAzOiAn4pyTIMOgIGxhIG1vZGUnXG5cbiAgLy8gZGVjb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGRlY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBkZWNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZGVjb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBHb2luZyBiYWNrd2FyZHM6IGZyb20gYnl0ZXN0cmVhbSwgdG8gcGVyY2VudC1lbmNvZGluZywgdG8gb3JpZ2luYWwgc3RyaW5nLlxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYXRvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVVEY4c3RyaW5nKHdpbmRvdy5hdG9iKGVuY29kZWREYXRhKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGVuY29kZWREYXRhLCAnYmFzZTY0JykudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gIH1cblxuICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgdmFyIG8xO1xuICB2YXIgbzI7XG4gIHZhciBvMztcbiAgdmFyIGgxO1xuICB2YXIgaDI7XG4gIHZhciBoMztcbiAgdmFyIGg0O1xuICB2YXIgYml0cztcbiAgdmFyIGkgPSAwO1xuICB2YXIgYWMgPSAwO1xuICB2YXIgZGVjID0gJyc7XG4gIHZhciB0bXBBcnIgPSBbXTtcblxuICBpZiAoIWVuY29kZWREYXRhKSB7XG4gICAgcmV0dXJuIGVuY29kZWREYXRhO1xuICB9XG5cbiAgZW5jb2RlZERhdGEgKz0gJyc7XG5cbiAgZG8ge1xuICAgIC8vIHVucGFjayBmb3VyIGhleGV0cyBpbnRvIHRocmVlIG9jdGV0cyB1c2luZyBpbmRleCBwb2ludHMgaW4gYjY0XG4gICAgaDEgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDIgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDMgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDQgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG5cbiAgICBiaXRzID0gaDEgPDwgMTggfCBoMiA8PCAxMiB8IGgzIDw8IDYgfCBoNDtcblxuICAgIG8xID0gYml0cyA+PiAxNiAmIDB4ZmY7XG4gICAgbzIgPSBiaXRzID4+IDggJiAweGZmO1xuICAgIG8zID0gYml0cyAmIDB4ZmY7XG5cbiAgICBpZiAoaDMgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xKTtcbiAgICB9IGVsc2UgaWYgKGg0ID09PSA2NCkge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSwgbzIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMiwgbzMpO1xuICAgIH1cbiAgfSB3aGlsZSAoaSA8IGVuY29kZWREYXRhLmxlbmd0aCk7XG5cbiAgZGVjID0gdG1wQXJyLmpvaW4oJycpO1xuXG4gIHJldHVybiBkZWNvZGVVVEY4c3RyaW5nKGRlYy5yZXBsYWNlKC9cXDArJC8sICcnKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0X2RlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0X2VuY29kZShzdHJpbmdUb0VuY29kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Jhc2U2NF9lbmNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUeWxlciBBa2lucyAoaHR0cDovL3J1bWtpbi5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBCYXlyb24gR3VldmFyYVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGltcHJvdmVkIGJ5OiBJbmRpZ283NDRcbiAgLy8gICBleGFtcGxlIDE6IGJhc2U2NF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ1MyVjJhVzRnZG1GdUlGcHZibTVsZG1Wc1pBPT0nXG4gIC8vICAgZXhhbXBsZSAyOiBiYXNlNjRfZW5jb2RlKCdhJylcbiAgLy8gICByZXR1cm5zIDI6ICdZUT09J1xuICAvLyAgIGV4YW1wbGUgMzogYmFzZTY0X2VuY29kZSgn4pyTIMOgIGxhIG1vZGUnKVxuICAvLyAgIHJldHVybnMgMzogJzRweVRJTU9nSUd4aElHMXZaR1U9J1xuXG4gIC8vIGVuY29kZVVURjhzdHJpbmcoKVxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBlbmNvZGUgcHJvcGVybHkgVVRGOCBzdHJpbmdcbiAgLy8gQWRhcHRlZCBmcm9tIFNvbHV0aW9uICMxIGF0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZ1xuICB2YXIgZW5jb2RlVVRGOHN0cmluZyA9IGZ1bmN0aW9uIGVuY29kZVVURjhzdHJpbmcoc3RyKSB7XG4gICAgLy8gZmlyc3Qgd2UgdXNlIGVuY29kZVVSSUNvbXBvbmVudCB0byBnZXQgcGVyY2VudC1lbmNvZGVkIFVURi04LFxuICAgIC8vIHRoZW4gd2UgY29udmVydCB0aGUgcGVyY2VudCBlbmNvZGluZ3MgaW50byByYXcgYnl0ZXMgd2hpY2hcbiAgICAvLyBjYW4gYmUgZmVkIGludG8gdGhlIGJhc2U2NCBlbmNvZGluZyBhbGdvcml0aG0uXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIHRvU29saWRCeXRlcyhtYXRjaCwgcDEpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcgKyBwMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShlbmNvZGVVVEY4c3RyaW5nKHN0cmluZ1RvRW5jb2RlKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKHN0cmluZ1RvRW5jb2RlKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIH1cblxuICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgdmFyIG8xO1xuICB2YXIgbzI7XG4gIHZhciBvMztcbiAgdmFyIGgxO1xuICB2YXIgaDI7XG4gIHZhciBoMztcbiAgdmFyIGg0O1xuICB2YXIgYml0cztcbiAgdmFyIGkgPSAwO1xuICB2YXIgYWMgPSAwO1xuICB2YXIgZW5jID0gJyc7XG4gIHZhciB0bXBBcnIgPSBbXTtcblxuICBpZiAoIXN0cmluZ1RvRW5jb2RlKSB7XG4gICAgcmV0dXJuIHN0cmluZ1RvRW5jb2RlO1xuICB9XG5cbiAgc3RyaW5nVG9FbmNvZGUgPSBlbmNvZGVVVEY4c3RyaW5nKHN0cmluZ1RvRW5jb2RlKTtcblxuICBkbyB7XG4gICAgLy8gcGFjayB0aHJlZSBvY3RldHMgaW50byBmb3VyIGhleGV0c1xuICAgIG8xID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuICAgIG8yID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuICAgIG8zID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuXG4gICAgYml0cyA9IG8xIDw8IDE2IHwgbzIgPDwgOCB8IG8zO1xuXG4gICAgaDEgPSBiaXRzID4+IDE4ICYgMHgzZjtcbiAgICBoMiA9IGJpdHMgPj4gMTIgJiAweDNmO1xuICAgIGgzID0gYml0cyA+PiA2ICYgMHgzZjtcbiAgICBoNCA9IGJpdHMgJiAweDNmO1xuXG4gICAgLy8gdXNlIGhleGV0cyB0byBpbmRleCBpbnRvIGI2NCwgYW5kIGFwcGVuZCByZXN1bHQgdG8gZW5jb2RlZCBzdHJpbmdcbiAgICB0bXBBcnJbYWMrK10gPSBiNjQuY2hhckF0KGgxKSArIGI2NC5jaGFyQXQoaDIpICsgYjY0LmNoYXJBdChoMykgKyBiNjQuY2hhckF0KGg0KTtcbiAgfSB3aGlsZSAoaSA8IHN0cmluZ1RvRW5jb2RlLmxlbmd0aCk7XG5cbiAgZW5jID0gdG1wQXJyLmpvaW4oJycpO1xuXG4gIHZhciByID0gc3RyaW5nVG9FbmNvZGUubGVuZ3RoICUgMztcblxuICByZXR1cm4gKHIgPyBlbmMuc2xpY2UoMCwgciAtIDMpIDogZW5jKSArICc9PT0nLnNsaWNlKHIgfHwgMyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0X2VuY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodHRwX2J1aWxkX3F1ZXJ5KGZvcm1kYXRhLCBudW1lcmljUHJlZml4LCBhcmdTZXBhcmF0b3IsIGVuY1R5cGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9odHRwX2J1aWxkX3F1ZXJ5L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICByZXZpc2VkIGJ5OiBzdGFnMDE5XG4gIC8vICAgIGlucHV0IGJ5OiBEcmVhbWVyXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogTUlPX0tPRFVLSSAoaHR0cDovL21pby1rb2R1a2kuYmxvZ3Nwb3QuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IFdpbGwgUm93ZVxuICAvLyAgICAgIG5vdGUgMTogSWYgdGhlIHZhbHVlIGlzIG51bGwsIGtleSBhbmQgdmFsdWUgYXJlIHNraXBwZWQgaW4gdGhlXG4gIC8vICAgICAgbm90ZSAxOiBodHRwX2J1aWxkX3F1ZXJ5IG9mIFBIUCB3aGlsZSBpbiBsb2N1dHVzIHRoZXkgYXJlIG5vdC5cbiAgLy8gICBleGFtcGxlIDE6IGh0dHBfYnVpbGRfcXVlcnkoe2ZvbzogJ2JhcicsIHBocDogJ2h5cGVydGV4dCBwcm9jZXNzb3InLCBiYXo6ICdib29tJywgY293OiAnbWlsayd9LCAnJywgJyZhbXA7JylcbiAgLy8gICByZXR1cm5zIDE6ICdmb289YmFyJmFtcDtwaHA9aHlwZXJ0ZXh0K3Byb2Nlc3NvciZhbXA7YmF6PWJvb20mYW1wO2Nvdz1taWxrJ1xuICAvLyAgIGV4YW1wbGUgMjogaHR0cF9idWlsZF9xdWVyeSh7J3BocCc6ICdoeXBlcnRleHQgcHJvY2Vzc29yJywgMDogJ2ZvbycsIDE6ICdiYXInLCAyOiAnYmF6JywgMzogJ2Jvb20nLCAnY293JzogJ21pbGsnfSwgJ215dmFyXycpXG4gIC8vICAgcmV0dXJucyAyOiAnbXl2YXJfMD1mb28mbXl2YXJfMT1iYXImbXl2YXJfMj1iYXombXl2YXJfMz1ib29tJnBocD1oeXBlcnRleHQrcHJvY2Vzc29yJmNvdz1taWxrJ1xuICAvLyAgIGV4YW1wbGUgMzogaHR0cF9idWlsZF9xdWVyeSh7Zm9vOiAnYmFyJywgcGhwOiAnaHlwZXJ0ZXh0IHByb2Nlc3NvcicsIGJhejogJ2Jvb20nLCBjb3c6ICdtaWxrJ30sICcnLCAnJmFtcDsnLCAnUEhQX1FVRVJZX1JGQzM5ODYnKVxuICAvLyAgIHJldHVybnMgMzogJ2Zvbz1iYXImYW1wO3BocD1oeXBlcnRleHQlMjBwcm9jZXNzb3ImYW1wO2Jhej1ib29tJmFtcDtjb3c9bWlsaydcblxuICB2YXIgZW5jb2RlRnVuYztcblxuICBzd2l0Y2ggKGVuY1R5cGUpIHtcbiAgICBjYXNlICdQSFBfUVVFUllfUkZDMzk4Nic6XG4gICAgICBlbmNvZGVGdW5jID0gcmVxdWlyZSgnLi4vdXJsL3Jhd3VybGVuY29kZScpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQSFBfUVVFUllfUkZDMTczOCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGVuY29kZUZ1bmMgPSByZXF1aXJlKCcuLi91cmwvdXJsZW5jb2RlJyk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHZhciB2YWx1ZTtcbiAgdmFyIGtleTtcbiAgdmFyIHRtcCA9IFtdO1xuXG4gIHZhciBfaHR0cEJ1aWxkUXVlcnlIZWxwZXIgPSBmdW5jdGlvbiBfaHR0cEJ1aWxkUXVlcnlIZWxwZXIoa2V5LCB2YWwsIGFyZ1NlcGFyYXRvcikge1xuICAgIHZhciBrO1xuICAgIHZhciB0bXAgPSBbXTtcbiAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICB2YWwgPSAnMSc7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09IGZhbHNlKSB7XG4gICAgICB2YWwgPSAnMCc7XG4gICAgfVxuICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgIGlmICgodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoayBpbiB2YWwpIHtcbiAgICAgICAgICBpZiAodmFsW2tdICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0bXAucHVzaChfaHR0cEJ1aWxkUXVlcnlIZWxwZXIoa2V5ICsgJ1snICsgayArICddJywgdmFsW2tdLCBhcmdTZXBhcmF0b3IpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcC5qb2luKGFyZ1NlcGFyYXRvcik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZUZ1bmMoa2V5KSArICc9JyArIGVuY29kZUZ1bmModmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgZm9yIGh0dHBfYnVpbGRfcXVlcnkoKS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICBpZiAoIWFyZ1NlcGFyYXRvcikge1xuICAgIGFyZ1NlcGFyYXRvciA9ICcmJztcbiAgfVxuICBmb3IgKGtleSBpbiBmb3JtZGF0YSkge1xuICAgIHZhbHVlID0gZm9ybWRhdGFba2V5XTtcbiAgICBpZiAobnVtZXJpY1ByZWZpeCAmJiAhaXNOYU4oa2V5KSkge1xuICAgICAga2V5ID0gU3RyaW5nKG51bWVyaWNQcmVmaXgpICsga2V5O1xuICAgIH1cbiAgICB2YXIgcXVlcnkgPSBfaHR0cEJ1aWxkUXVlcnlIZWxwZXIoa2V5LCB2YWx1ZSwgYXJnU2VwYXJhdG9yKTtcbiAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICB0bXAucHVzaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRtcC5qb2luKGFyZ1NlcGFyYXRvcik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cF9idWlsZF9xdWVyeS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VfdXJsKHN0ciwgY29tcG9uZW50KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9wYXJzZV91cmwvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IFN0ZXZlbiBMZXZpdGhhbiAoaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBMb3JlbnpvIFBpc2FuaVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBUb255XG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IG9yaWdpbmFsIGJ5IGh0dHA6Ly9zdGV2ZW5sZXZpdGhhbi5jb20vZGVtby9wYXJzZXVyaS9qcy9hc3NldHMvcGFyc2V1cmkuanNcbiAgLy8gICAgICAgICAgIG5vdGUgMTogYmxvZyBwb3N0IGF0IGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9wYXJzZXVyaVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBkZW1vIGF0IGh0dHA6Ly9zdGV2ZW5sZXZpdGhhbi5jb20vZGVtby9wYXJzZXVyaS9qcy9hc3NldHMvcGFyc2V1cmkuanNcbiAgLy8gICAgICAgICAgIG5vdGUgMTogRG9lcyBub3QgcmVwbGFjZSBpbnZhbGlkIGNoYXJhY3RlcnMgd2l0aCAnXycgYXMgaW4gUEhQLFxuICAvLyAgICAgICAgICAgbm90ZSAxOiBub3IgZG9lcyBpdCByZXR1cm4gZmFsc2Ugd2l0aFxuICAvLyAgICAgICAgICAgbm90ZSAxOiBhIHNlcmlvdXNseSBtYWxmb3JtZWQgVVJMLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBCZXNpZGVzIGZ1bmN0aW9uIG5hbWUsIGlzIGVzc2VudGlhbGx5IHRoZSBzYW1lIGFzIHBhcnNlVXJpIGFzXG4gIC8vICAgICAgICAgICBub3RlIDE6IHdlbGwgYXMgb3VyIGFsbG93aW5nXG4gIC8vICAgICAgICAgICBub3RlIDE6IGFuIGV4dHJhIHNsYXNoIGFmdGVyIHRoZSBzY2hlbWUvcHJvdG9jb2wgKHRvIGFsbG93IGZpbGU6Ly8vIGFzIGluIFBIUClcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcGFyc2VfdXJsKCdodHRwOi8vdXNlcjpwYXNzQGhvc3QvcGF0aD9hPXYjYScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6IHtzY2hlbWU6ICdodHRwJywgaG9zdDogJ2hvc3QnLCB1c2VyOiAndXNlcicsIHBhc3M6ICdwYXNzJywgcGF0aDogJy9wYXRoJywgcXVlcnk6ICdhPXYnLCBmcmFnbWVudDogJ2EnfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiBwYXJzZV91cmwoJ2h0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvJTIyQCUyMl8lMjhhbGJ1bSUyOScpXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHtzY2hlbWU6ICdodHRwJywgaG9zdDogJ2VuLndpa2lwZWRpYS5vcmcnLCBwYXRoOiAnL3dpa2kvJTIyQCUyMl8lMjhhbGJ1bSUyOSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3VybCgnaHR0cHM6Ly9ob3N0LmRvbWFpbi50bGQvYUBiLmMvZm9sZGVyJylcbiAgLy8gICAgICAgIHJldHVybnMgMzoge3NjaGVtZTogJ2h0dHBzJywgaG9zdDogJ2hvc3QuZG9tYWluLnRsZCcsIHBhdGg6ICcvYUBiLmMvZm9sZGVyJ31cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogcGFyc2VfdXJsKCdodHRwczovL2dvb2R1c2VyOnNlY3JldHBhc3N3b3JkQHd3dy5leGFtcGxlLmNvbS9hQGIuYy9mb2xkZXI/Zm9vPWJhcicpXG4gIC8vICAgICAgICByZXR1cm5zIDQ6IHsgc2NoZW1lOiAnaHR0cHMnLCBob3N0OiAnd3d3LmV4YW1wbGUuY29tJywgcGF0aDogJy9hQGIuYy9mb2xkZXInLCBxdWVyeTogJ2Zvbz1iYXInLCB1c2VyOiAnZ29vZHVzZXInLCBwYXNzOiAnc2VjcmV0cGFzc3dvcmQnIH1cblxuICB2YXIgcXVlcnk7XG5cbiAgdmFyIG1vZGUgPSAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnLi4vaW5mby9pbmlfZ2V0JykoJ2xvY3V0dXMucGFyc2VfdXJsLm1vZGUnKSA6IHVuZGVmaW5lZCkgfHwgJ3BocCc7XG5cbiAgdmFyIGtleSA9IFsnc291cmNlJywgJ3NjaGVtZScsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2ZyYWdtZW50J107XG5cbiAgLy8gRm9yIGxvb3NlIHdlIGFkZGVkIG9uZSBvcHRpb25hbCBzbGFzaCB0byBwb3N0LXNjaGVtZSB0byBjYXRjaCBmaWxlOi8vLyAoc2hvdWxkIHJlc3RyaWN0IHRoaXMpXG4gIHZhciBwYXJzZXIgPSB7XG4gICAgcGhwOiBuZXcgUmVnRXhwKFsnKD86KFteOlxcXFwvPyNdKyk6KT8nLCAnKD86XFxcXC9cXFxcLygpKD86KD86KCkoPzooW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KSk/JywgJygpJywgJyg/OigoKSg/Oig/OltePyNcXFxcL10qXFxcXC8pKikoKSg/OltePyNdKikpKD86XFxcXD8oW14jXSopKT8oPzojKC4qKSk/KSddLmpvaW4oJycpKSxcbiAgICBzdHJpY3Q6IG5ldyBSZWdFeHAoWycoPzooW146XFxcXC8/I10rKTopPycsICcoPzpcXFxcL1xcXFwvKCg/OigoW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KSk/JywgJygoKCg/OltePyNcXFxcL10qXFxcXC8pKikoW14/I10qKSkoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ10uam9pbignJykpLFxuICAgIGxvb3NlOiBuZXcgUmVnRXhwKFsnKD86KD8hW146QF0rOlteOkBcXFxcL10qQCkoW146XFxcXC8/Iy5dKyk6KT8nLCAnKD86XFxcXC9cXFxcL1xcXFwvPyk/JywgJygoPzooKFteOkBcXFxcL10qKTo/KFteOkBcXFxcL10qKSk/QCk/KFteOlxcXFwvPyNdKikoPzo6KFxcXFxkKikpPyknLCAnKCgoXFxcXC8oPzpbXj8jXSg/IVtePyNcXFxcL10qXFxcXC5bXj8jXFxcXC8uXSsoPzpbPyNdfCQpKSkqXFxcXC8/KT8oW14/I1xcXFwvXSopKScsICcoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ10uam9pbignJykpXG4gIH07XG5cbiAgdmFyIG0gPSBwYXJzZXJbbW9kZV0uZXhlYyhzdHIpO1xuICB2YXIgdXJpID0ge307XG4gIHZhciBpID0gMTQ7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChtW2ldKSB7XG4gICAgICB1cmlba2V5W2ldXSA9IG1baV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIHJldHVybiB1cmlbY29tcG9uZW50LnJlcGxhY2UoJ1BIUF9VUkxfJywgJycpLnRvTG93ZXJDYXNlKCldO1xuICB9XG5cbiAgaWYgKG1vZGUgIT09ICdwaHAnKSB7XG4gICAgdmFyIG5hbWUgPSAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnLi4vaW5mby9pbmlfZ2V0JykoJ2xvY3V0dXMucGFyc2VfdXJsLnF1ZXJ5S2V5JykgOiB1bmRlZmluZWQpIHx8ICdxdWVyeUtleSc7XG4gICAgcGFyc2VyID0gLyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nO1xuICAgIHVyaVtuYW1lXSA9IHt9O1xuICAgIHF1ZXJ5ID0gdXJpW2tleVsxMl1dIHx8ICcnO1xuICAgIHF1ZXJ5LnJlcGxhY2UocGFyc2VyLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgICAgaWYgKCQxKSB7XG4gICAgICAgIHVyaVtuYW1lXVskMV0gPSAkMjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSB1cmkuc291cmNlO1xuICByZXR1cm4gdXJpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlX3VybC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmF3dXJsZGVjb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcmF3dXJsZGVjb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBsb3Zpb1xuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGlzIGZ1bmN0aW9uIGV4cGVjdHMgdG8gZGVjb2RlXG4gIC8vICAgICAgICAgICBub3RlIDE6IGZyb20gVVRGLTggZW5jb2RlZCBzdHJpbmdzLCBhcyBmb3VuZCBvblxuICAvLyAgICAgICAgICAgbm90ZSAxOiBwYWdlcyBzZXJ2ZWQgYXMgVVRGLThcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcmF3dXJsZGVjb2RlKCdLZXZpbit2YW4rWm9ubmV2ZWxkJTIxJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluK3Zhbitab25uZXZlbGQhJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiByYXd1cmxkZWNvZGUoJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiAnaHR0cDovL2t2ei5pby8nXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHJhd3VybGRlY29kZSgnaHR0cCUzQSUyRiUyRnd3dy5nb29nbGUubmwlMkZzZWFyY2glM0ZxJTNETG9jdXR1cyUyNmllJTNEJylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHA6Ly93d3cuZ29vZ2xlLm5sL3NlYXJjaD9xPUxvY3V0dXMmaWU9J1xuXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHN0ciArICcnKS5yZXBsYWNlKC8lKD8hW1xcZGEtZl17Mn0pL2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUEhQIHRvbGVyYXRlcyBwb29ybHkgZm9ybWVkIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICByZXR1cm4gJyUyNSc7XG4gIH0pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYXd1cmxkZWNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJhd3VybGVuY29kZShzdHIpIHtcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3Jhd3VybGVuY29kZS9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogdHJhdmNcbiAgLy8gICAgICAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogTWljaGFlbCBHcmllclxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBKb3Jpc1xuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBUaGlzIHJlZmxlY3RzIFBIUCA1LjMvNi4wKyBiZWhhdmlvclxuICAvLyAgICAgICAgICAgbm90ZSAxOiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGlzIGZ1bmN0aW9uIGV4cGVjdHMgXFxcbiAgLy8gICAgICAgICAgIG5vdGUgMTogdG8gZW5jb2RlIGludG8gVVRGLTggZW5jb2RlZCBzdHJpbmdzLCBhcyBmb3VuZCBvblxuICAvLyAgICAgICAgICAgbm90ZSAxOiBwYWdlcyBzZXJ2ZWQgYXMgVVRGLThcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcmF3dXJsZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkIScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbiUyMHZhbiUyMFpvbm5ldmVsZCUyMSdcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogcmF3dXJsZW5jb2RlKCdodHRwOi8va3Z6LmlvLycpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwJTNBJTJGJTJGa3Z6LmlvJTJGJ1xuICAvLyAgICAgICAgZXhhbXBsZSAzOiByYXd1cmxlbmNvZGUoJ2h0dHA6Ly93d3cuZ29vZ2xlLm5sL3NlYXJjaD9xPUxvY3V0dXMmaWU9dXRmLTgnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cCUzQSUyRiUyRnd3dy5nb29nbGUubmwlMkZzZWFyY2glM0ZxJTNETG9jdXR1cyUyNmllJTNEdXRmLTgnXG5cbiAgc3RyID0gc3RyICsgJyc7XG5cbiAgLy8gVGlsZGUgc2hvdWxkIGJlIGFsbG93ZWQgdW5lc2NhcGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQSFAgKGFzIHJlZmxlY3RlZCBiZWxvdyksXG4gIC8vIGJ1dCBpZiB5b3Ugd2FudCB0byByZWZsZWN0IGN1cnJlbnRcbiAgLy8gUEhQIGJlaGF2aW9yLCB5b3Ugd291bGQgbmVlZCB0byBhZGQgXCIucmVwbGFjZSgvfi9nLCAnJTdFJyk7XCIgdG8gdGhlIGZvbGxvd2luZy5cbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyEvZywgJyUyMScpLnJlcGxhY2UoLycvZywgJyUyNycpLnJlcGxhY2UoL1xcKC9nLCAnJTI4JykucmVwbGFjZSgvXFwpL2csICclMjknKS5yZXBsYWNlKC9cXCovZywgJyUyQScpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhd3VybGVuY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJsZGVjb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXJsZGVjb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBQaGlsaXAgUGV0ZXJzb25cbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogTGFycyBGaXNjaGVyXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE9ybGFuZG9cbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogQUpcbiAgLy8gICAgICAgICBpbnB1dCBieTogdHJhdmNcbiAgLy8gICAgICAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogUmF0aGVvdXNcbiAgLy8gICAgICAgICBpbnB1dCBieTogZS1taWtlXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGxvdmlvXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IFJvYlxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBpbmZvIG9uIHdoYXQgZW5jb2RpbmcgZnVuY3Rpb25zIHRvIHVzZSBmcm9tOlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBodHRwOi8veGtyLnVzL2FydGljbGVzL2phdmFzY3JpcHQvZW5jb2RlLWNvbXBhcmUvXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyB0byBkZWNvZGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogZnJvbSBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB1cmxkZWNvZGUoJ0tldmluK3Zhbitab25uZXZlbGQlMjEnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHVybGRlY29kZSgnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRicpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwOi8va3Z6LmlvLydcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0R1dGYtOCUyNm9lJTNEdXRmLTglMjZhcSUzRHQlMjZybHMlM0Rjb20udWJ1bnR1JTNBZW4tVVMlM0F1bm9mZmljaWFsJTI2Y2xpZW50JTNEZmlyZWZveC1hJylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHA6Ly93d3cuZ29vZ2xlLm5sL3NlYXJjaD9xPUxvY3V0dXMmaWU9dXRmLTgmb2U9dXRmLTgmYXE9dCZybHM9Y29tLnVidW50dTplbi1VUzp1bm9mZmljaWFsJmNsaWVudD1maXJlZm94LWEnXG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHVybGRlY29kZSgnJUU1JUE1JUJEJTNfNCcpXG4gIC8vICAgICAgICByZXR1cm5zIDQ6ICdcXHU1OTdkJTNfNCdcblxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KChzdHIgKyAnJykucmVwbGFjZSgvJSg/IVtcXGRhLWZdezJ9KS9naSwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFBIUCB0b2xlcmF0ZXMgcG9vcmx5IGZvcm1lZCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgcmV0dXJuICclMjUnO1xuICB9KS5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmxkZWNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVybGVuY29kZShzdHIpIHtcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VybGVuY29kZS9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogUGhpbGlwIFBldGVyc29uXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IExhcnMgRmlzY2hlclxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBBSlxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBKb3Jpc1xuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBUaGlzIHJlZmxlY3RzIFBIUCA1LjMvNi4wKyBiZWhhdmlvclxuICAvLyAgICAgICAgICAgbm90ZSAxOiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGlzIGZ1bmN0aW9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IGV4cGVjdHMgdG8gZW5jb2RlIGludG8gVVRGLTggZW5jb2RlZCBzdHJpbmdzLCBhcyBmb3VuZCBvblxuICAvLyAgICAgICAgICAgbm90ZSAxOiBwYWdlcyBzZXJ2ZWQgYXMgVVRGLThcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdXJsZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkIScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbit2YW4rWm9ubmV2ZWxkJTIxJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiB1cmxlbmNvZGUoJ2h0dHA6Ly9rdnouaW8vJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHVybGVuY29kZSgnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCcpXG4gIC8vICAgICAgICByZXR1cm5zIDM6ICdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0R1dGYtOCdcblxuICBzdHIgPSBzdHIgKyAnJztcblxuICAvLyBUaWxkZSBzaG91bGQgYmUgYWxsb3dlZCB1bmVzY2FwZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBIUCAoYXMgcmVmbGVjdGVkIGJlbG93KSxcbiAgLy8gYnV0IGlmIHlvdSB3YW50IHRvIHJlZmxlY3QgY3VycmVudFxuICAvLyBQSFAgYmVoYXZpb3IsIHlvdSB3b3VsZCBuZWVkIHRvIGFkZCBcIi5yZXBsYWNlKC9+L2csICclN0UnKTtcIiB0byB0aGUgZm9sbG93aW5nLlxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvIS9nLCAnJTIxJykucmVwbGFjZSgvJy9nLCAnJTI3JykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoL1xcKi9nLCAnJTJBJykucmVwbGFjZSgvJTIwL2csICcrJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJsZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2NhbGxhYmxlKG1peGVkVmFyLCBzeW50YXhPbmx5LCBjYWxsYWJsZU5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19jYWxsYWJsZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBGcmFuw6dvaXNcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgdmFyaWFibGUgY2FsbGFibGVOYW1lIGNhbm5vdCB3b3JrIGFzIGEgc3RyaW5nIHZhcmlhYmxlIHBhc3NlZCBieVxuICAvLyAgICAgIG5vdGUgMTogcmVmZXJlbmNlIGFzIGluIFBIUCAoc2luY2UgSmF2YVNjcmlwdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmdcbiAgLy8gICAgICBub3RlIDE6IHN0cmluZ3MgYnkgcmVmZXJlbmNlKSwgYnV0IGluc3RlYWQgd2lsbCB0YWtlIHRoZSBuYW1lIG9mXG4gIC8vICAgICAgbm90ZSAxOiBhIGdsb2JhbCB2YXJpYWJsZSBhbmQgc2V0IHRoYXQgaW5zdGVhZC5cbiAgLy8gICAgICBub3RlIDE6IFdoZW4gdXNlZCBvbiBhbiBvYmplY3QsIGRlcGVuZHMgb24gYSBjb25zdHJ1Y3RvciBwcm9wZXJ0eVxuICAvLyAgICAgIG5vdGUgMTogYmVpbmcga2VwdCBvbiB0aGUgb2JqZWN0IHByb3RvdHlwZVxuICAvLyAgICAgIG5vdGUgMjogRGVwZW5kaW5nIG9uIHRoZSBgY2FsbGFibGVOYW1lYCB0aGF0IGlzIHBhc3NlZCwgdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGV2YWwuXG4gIC8vICAgICAgbm90ZSAyOiBUaGUgZXZhbCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDI6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDI6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2NhbGxhYmxlKCdpc19jYWxsYWJsZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19jYWxsYWJsZSgnYm9ndXNGdW5jdGlvbicsIHRydWUpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlIC8vIGdpdmVzIHRydWUgYmVjYXVzZSBkb2VzIG5vdCBkbyBzdHJpY3QgY2hlY2tpbmdcbiAgLy8gICBleGFtcGxlIDM6IGZ1bmN0aW9uIFNvbWVDbGFzcyAoKSB7fVxuICAvLyAgIGV4YW1wbGUgMzogU29tZUNsYXNzLnByb3RvdHlwZS5zb21lTWV0aG9kID0gZnVuY3Rpb24gKCl7fVxuICAvLyAgIGV4YW1wbGUgMzogdmFyIHRlc3RPYmogPSBuZXcgU29tZUNsYXNzKClcbiAgLy8gICBleGFtcGxlIDM6IGlzX2NhbGxhYmxlKFt0ZXN0T2JqLCAnc29tZU1ldGhvZCddLCB0cnVlLCAnbXlWYXInKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSBteVZhclxuICAvLyAgIHJldHVybnMgMzogJ1NvbWVDbGFzczo6c29tZU1ldGhvZCdcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2NhbGxhYmxlKGZ1bmN0aW9uICgpIHt9KVxuICAvLyAgIHJldHVybnMgNDogdHJ1ZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIG1ldGhvZCA9ICcnO1xuICB2YXIgdmFsaWRGdW5jdGlvbk5hbWUgPSBmYWxzZTtcblxuICB2YXIgZ2V0RnVuY05hbWUgPSBmdW5jdGlvbiBnZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcblxuICBpZiAodHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9ICRnbG9iYWw7XG4gICAgbWV0aG9kID0gbWl4ZWRWYXI7XG4gICAgbmFtZSA9IG1peGVkVmFyO1xuICAgIHZhbGlkRnVuY3Rpb25OYW1lID0gISFuYW1lLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMiAmJiBfdHlwZW9mKG1peGVkVmFyWzBdKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1peGVkVmFyWzFdID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9IG1peGVkVmFyWzBdO1xuICAgIG1ldGhvZCA9IG1peGVkVmFyWzFdO1xuICAgIG5hbWUgPSAob2JqLmNvbnN0cnVjdG9yICYmIGdldEZ1bmNOYW1lKG9iai5jb25zdHJ1Y3RvcikpICsgJzo6JyArIG1ldGhvZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3ludGF4T25seSB8fCB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoY2FsbGFibGVOYW1lKSB7XG4gICAgICAkZ2xvYmFsW2NhbGxhYmxlTmFtZV0gPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHZhbGlkRnVuY3Rpb25OYW1lIGF2b2lkcyBleHBsb2l0c1xuICBpZiAodmFsaWRGdW5jdGlvbk5hbWUgJiYgdHlwZW9mIGV2YWwobWV0aG9kKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2NhbGxhYmxlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1dGY4X2VuY29kZShhcmdTdHJpbmcpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91dGY4X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHNvd2JlcnJ5XG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBZdmVzIFN1Y2FldFxuICAvLyBpbXByb3ZlZCBieToga2lyaWxsb2lkXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBVbHJpY2hcbiAgLy8gYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gICBleGFtcGxlIDE6IHV0ZjhfZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIGlmIChhcmdTdHJpbmcgPT09IG51bGwgfHwgdHlwZW9mIGFyZ1N0cmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyAucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpLnJlcGxhY2UoL1xcci9nLCBcIlxcblwiKTtcbiAgdmFyIHN0cmluZyA9IGFyZ1N0cmluZyArICcnO1xuICB2YXIgdXRmdGV4dCA9ICcnO1xuICB2YXIgc3RhcnQ7XG4gIHZhciBlbmQ7XG4gIHZhciBzdHJpbmdsID0gMDtcblxuICBzdGFydCA9IGVuZCA9IDA7XG4gIHN0cmluZ2wgPSBzdHJpbmcubGVuZ3RoO1xuICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZ2w7IG4rKykge1xuICAgIHZhciBjMSA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuICAgIHZhciBlbmMgPSBudWxsO1xuXG4gICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICBlbmQrKztcbiAgICB9IGVsc2UgaWYgKGMxID4gMTI3ICYmIGMxIDwgMjA0OCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiA2IHwgMTkyLCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2UgaWYgKChjMSAmIDB4RjgwMCkgIT09IDB4RDgwMCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiAxMiB8IDIyNCwgYzEgPj4gNiAmIDYzIHwgMTI4LCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vycm9nYXRlIHBhaXJzXG4gICAgICBpZiAoKGMxICYgMHhGQzAwKSAhPT0gMHhEODAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgdHJhaWwgc3Vycm9nYXRlIGF0ICcgKyBuKTtcbiAgICAgIH1cbiAgICAgIHZhciBjMiA9IHN0cmluZy5jaGFyQ29kZUF0KCsrbik7XG4gICAgICBpZiAoKGMyICYgMHhGQzAwKSAhPT0gMHhEQzAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgbGVhZCBzdXJyb2dhdGUgYXQgJyArIChuIC0gMSkpO1xuICAgICAgfVxuICAgICAgYzEgPSAoKGMxICYgMHgzRkYpIDw8IDEwKSArIChjMiAmIDB4M0ZGKSArIDB4MTAwMDA7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDE4IHwgMjQwLCBjMSA+PiAxMiAmIDYzIHwgMTI4LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH1cbiAgICBpZiAoZW5jICE9PSBudWxsKSB7XG4gICAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICB9XG4gICAgICB1dGZ0ZXh0ICs9IGVuYztcbiAgICAgIHN0YXJ0ID0gZW5kID0gbiArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIHN0cmluZ2wpO1xuICB9XG5cbiAgcmV0dXJuIHV0ZnRleHQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRmOF9lbmNvZGUuanMubWFwIiwiLy8gQXJyYXkgJiBPYmplY3QgUmVsYXRlZCBGdW5jdGlvbnNcclxubW9kdWxlLmV4cG9ydHMucGFyc2VfYXJncyAgICAgICAgID0gcmVxdWlyZSggJ2pzLXBhcnNlLWFyZ3MnICk7XHJcbm1vZHVsZS5leHBvcnRzLmFycmF5X3RvX2h0bWxfYXR0ciA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0cicgKTtcclxubW9kdWxlLmV4cG9ydHMuYXJyYXlfdG9faHRtbCAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbCcgKTtcclxubW9kdWxlLmV4cG9ydHMuYXJyYXlfdG9fd2luZG93ICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9fd2luZG93JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5wbGFpbl9vYmplY3QgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9wbGFpbl9vYmplY3QnICk7XHJcblxyXG4vLyBEYXRlICYgVGltZSBSZWxhdGVkIEZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cy5taWNyb3RpbWUgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvbWljcm90aW1lJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19hZnRlcl9kYXRlICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19hZnRlcl9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19iZWZvcmVfZGF0ZSAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19iZWZvcmVfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfc2FtZV9kYXRlICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfc2FtZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRfZHVyYXRpb24gPSByZXF1aXJlKCAnLi9wYXJ0cy9mb3JtYXRfZHVyYXRpb24nICk7XHJcbm1vZHVsZS5leHBvcnRzLmRpZmZfZGF5cyAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RpZmZfZGF5cycgKTtcclxubW9kdWxlLmV4cG9ydHMudGltZV90YWtlbiAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdGltZV90YWtlbicgKTtcclxuXHJcbi8vIERhdGEgVHlwZSBWYWxpZGF0aW9uXHJcbm1vZHVsZS5leHBvcnRzLmlzX3VybCA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3VybC5qcycgKTtcclxuXHJcbi8vIFJ1biBUaW1lIEZ1bmN0aW9uIFJlbGF0ZWRzLlxyXG5tb2R1bGUuZXhwb3J0cy5jYWxsX3VzZXJfZnVuYyAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHMuY2FsbF91c2VyX2Z1bmNfYXJyYXkgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzLmZ1bmN0aW9uX2V4aXN0cyAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cycgKTtcclxubW9kdWxlLmV4cG9ydHMuY3JlYXRlX2Z1bmN0aW9uICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY3JlYXRlX2Z1bmN0aW9uJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19jYWxsYWJsZSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUnICk7XHJcblxyXG4vLyBCcm93c2VyIFJlbGF0ZWRcclxubW9kdWxlLmV4cG9ydHMuaXNfdGFiX2ZvY3VzZWQgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc190YWJfZm9jdXNlZCcgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfd2luZG93X2FyZyAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc193aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5zY3JvbGxfdG9fdG9wICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF90b190b3AnICk7XHJcbm1vZHVsZS5leHBvcnRzLmNvcHlfdG9fY2xpcCAgID0gcmVxdWlyZSggJy4vcGFydHMvY29weV90b19jbGlwJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5zY3JvbGxfcG9zICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF9wb3MnICk7XHJcbm1vZHVsZS5leHBvcnRzLndpbmRvd19hcmcgICAgID0gcmVxdWlyZSggJy4vcGFydHMvd2luZG93X2FyZycgKTtcclxubW9kdWxlLmV4cG9ydHMuZGV2aWNlX3R5cGUgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9kZXZpY2VfdHlwZScgKTtcclxubW9kdWxlLmV4cG9ydHMucGlwZV9sb2cgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9waXBlX2xvZycgKTtcclxuXHJcbi8vIGpRdWVyeSBSZWxhdGVkLlxyXG5tb2R1bGUuZXhwb3J0cy50b19qcXVlcnkgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qcXVlcnknICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2pxdWVyeSA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2pxdWVyeScgKTtcclxuXHJcbi8vIE90aGVyc1xyXG5tb2R1bGUuZXhwb3J0cy50b19qc19mdW5jID0gcmVxdWlyZSggJy4vcGFydHMvdG9fanNfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHMubWQ1ICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNScgKTtcclxubW9kdWxlLmV4cG9ydHMuY291bnRlciAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2NvdW50ZXInICk7XHJcbm1vZHVsZS5leHBvcnRzLnJhbmRfbWQ1ICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9yYW5kX21kNScgKTtcclxubW9kdWxlLmV4cG9ydHMuY3NzX3VuaXRzICA9IHJlcXVpcmUoICcuL3BhcnRzL2Nzc191bml0cycgKTtcclxuXHJcbi8vIFVSTCBSZWxhdGVkIEZ1bmN0aW9ucy5cclxubW9kdWxlLmV4cG9ydHMudXJsX3BhcmFtcyAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3VybF9wYXJhbXMnICk7XHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5X3N0cmluZyAgPSByZXF1aXJlKCAnLi9wYXJ0cy9xdWVyeV9zdHJpbmcnICk7XHJcbm1vZHVsZS5leHBvcnRzLnBhcnNlX3N0ciAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHInICk7XHJcbm1vZHVsZS5leHBvcnRzLmJhc2U2NF9lbmNvZGUgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmJhc2U2NF9kZWNvZGUgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9kZWNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnJhd3VybGRlY29kZSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3Jhd3VybGRlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMucmF3dXJsZW5jb2RlICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy51cmxkZWNvZGUgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC91cmxkZWNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnVybGVuY29kZSAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGVuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMucGFyc2VfdXJsICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG4iLCIvKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGFycmF5IGVsZW1lbnRzIGludG8gPGxpPiB0YWdzIGFuZCBhcHBlbmRzIHRoZW0gdG8gdGhlIGxpc3Qgb2YgdGhlIGdpdmVuIGlkLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCksIGFuZCBhbiBhbm9ueW1vdXMgaW5uZXIgY2xvc3VyZSB0byBjcmVhdGUgYSBsaXN0IG9mIGh0bWwgdGFncy5cclxuICogQHBhcmFtIGFyclxyXG4gKiBAcGFyYW0gbGlzdElEXHJcbiAqIEBwYXJhbSB0YWdcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggYXJyLCBsaXN0SUQsIHRhZyA9ICdsaScgKSA9PiAoIGVsID0+ICggKCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjJyArIGxpc3RJRCApICksICggZWwuaW5uZXJIVE1MICs9IGFyci5tYXAoIGl0ZW0gPT4gYDwke3RhZ30+JHtpdGVtfTwvJHt0YWd9PmAgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oICcnICkgKSApICkoKTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEgKSA9PiB7XHJcblx0bGV0IHJldHVybl9odG1sID0gJyc7XHJcblx0Zm9yKCBsZXQgSSBpbiAkZGF0YSApIHtcclxuXHRcdGlmKCBfLmlzT2JqZWN0KCAkZGF0YVsgSSBdICkgKSB7XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJztcclxuXHRcdFx0Zm9yKCBsZXQgSyBpbiAkZGF0YVsgSSBdICkge1xyXG5cdFx0XHRcdGxldCAkdmFsdWUgPSAoIF8uaXNPYmplY3QoICRkYXRhWyBJIF1bIEsgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXVsgSyBdICkgOiAkZGF0YVsgSSBdWyBLIF07XHJcblx0XHRcdFx0cmV0dXJuX2h0bWwgKz0gJHZhbHVlICsgJyAnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybl9odG1sICs9ICdcIic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgJHZhbHVlID0gKCBfLmlzT2JqZWN0KCAkZGF0YVsgSSBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdICkgOiAkZGF0YVsgSSBdO1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIicgKyAkdmFsdWUgKyAnXCIgJztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJldHVybl9odG1sO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9ICggJGFycmF5ICkgPT4ge1xyXG5cdGZvciggbGV0ICRrZXkgaW4gJGFycmF5ICkge1xyXG5cdFx0d2luZG93WyAka2V5IF0gPSAkYXJyYXlbICRrZXkgXTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENvcHkgYSBzdHJpbmcgdG8gdGhlIGNsaXBib2FyZC4gT25seSB3b3JrcyBhcyBhIHJlc3VsdCBvZiB1c2VyIGFjdGlvbiAoaS5lLiBpbnNpZGUgYSBjbGljayBldmVudCBsaXN0ZW5lcikuXHJcbiAqIENyZWF0ZSBhIG5ldyA8dGV4dGFyZWE+IGVsZW1lbnQsIGZpbGwgaXQgd2l0aCB0aGUgc3VwcGxpZWQgZGF0YSBhbmQgYWRkIGl0IHRvIHRoZSBIVE1MIGRvY3VtZW50LlxyXG4gKiBVc2UgU2VsZWN0aW9uLmdldFJhbmdlQXQoKXRvIHN0b3JlIHRoZSBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogVXNlIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JykgdG8gY29weSB0byB0aGUgY2xpcGJvYXJkLlxyXG4gKiBSZW1vdmUgdGhlIDx0ZXh0YXJlYT4gZWxlbWVudCBmcm9tIHRoZSBIVE1MIGRvY3VtZW50LiBGaW5hbGx5LCB1c2UgU2VsZWN0aW9uKCkuYWRkUmFuZ2UoKSB0byByZWNvdmVyIHRoZSBvcmlnaW5hbCBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogQHBhcmFtIHN0clxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xyXG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RleHRhcmVhJyApO1xyXG5cdGVsLnZhbHVlID0gc3RyO1xyXG5cdGVsLnNldEF0dHJpYnV0ZSggJ3JlYWRvbmx5JywgJycgKTtcclxuXHRlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0ZWwuc3R5bGUubGVmdCAgICAgPSAnLTk5OTlweCc7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZWwgKTtcclxuXHRjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJhbmdlQ291bnQgPiAwID8gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCggMCApIDogZmFsc2U7XHJcblx0ZWwuc2VsZWN0KCk7XHJcblx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoICdjb3B5JyApO1xyXG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoIGVsICk7XHJcblx0aWYoIHNlbGVjdGVkICkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZSggc2VsZWN0ZWQgKTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZXMgYSBjb3VudGVyIHdpdGggdGhlIHNwZWNpZmllZCByYW5nZSwgc3RlcCBhbmQgZHVyYXRpb24gZm9yIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3IuXHJcbiAqIENoZWNrIGlmIHN0ZXAgaGFzIHRoZSBwcm9wZXIgc2lnbiBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5LlxyXG4gKiBVc2Ugc2V0SW50ZXJ2YWwoKSBpbiBjb21iaW5hdGlvbiB3aXRoIE1hdGguYWJzKCkgYW5kIE1hdGguZmxvb3IoKSB0byBjYWxjdWxhdGUgdGhlIHRpbWUgYmV0d2VlbiBlYWNoIG5ldyB0ZXh0IGRyYXcuXHJcbiAqIFVzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCkuaW5uZXJIVE1MIHRvIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQuXHJcbiAqIE9taXQgdGhlIGZvdXJ0aCBwYXJhbWV0ZXIsIHN0ZXAsIHRvIHVzZSBhIGRlZmF1bHQgc3RlcCBvZiAxLiBPbWl0IHRoZSBmaWZ0aCBwYXJhbWV0ZXIsIGR1cmF0aW9uLCB0byB1c2UgYSBkZWZhdWx0IGR1cmF0aW9uIG9mIDIwMDBtcy5cclxuICogQHBhcmFtIHNlbGVjdG9yXHJcbiAqIEBwYXJhbSBzdGFydFxyXG4gKiBAcGFyYW0gZW5kXHJcbiAqIEBwYXJhbSBzdGVwXHJcbiAqIEBwYXJhbSBkdXJhdGlvblxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIHNlbGVjdG9yLCBzdGFydCwgZW5kLCBzdGVwID0gMSwgZHVyYXRpb24gPSAyMDAwICkgPT4ge1xyXG5cdGxldCBjdXJyZW50ID0gc3RhcnQsXHJcblx0XHRfc3RlcCAgID0gKCBlbmQgLSBzdGFydCApICogc3RlcCA8IDAgPyAtc3RlcCA6IHN0ZXAsXHJcblx0XHR0aW1lciAgID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHRcdFx0Y3VycmVudCArPSBfc3RlcDtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBjdXJyZW50O1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGVuZDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgY2xlYXJJbnRlcnZhbCggdGltZXIgKTtcclxuXHRcdH0sIE1hdGguYWJzKCBNYXRoLmZsb29yKCBkdXJhdGlvbiAvICggZW5kIC0gc3RhcnQgKSApICkgKTtcclxuXHRyZXR1cm4gdGltZXI7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4ge1xyXG5cdHZhciBzID0gdmFsO1xyXG5cdGlmKCBfLmlzTnVtYmVyKCB2YWwgKSApIHtcclxuXHRcdHJldHVybiB2YWwgKyAncHgnO1xyXG5cdH0gZWxzZSBpZiggdmFsLmluZGV4T2YoICdweCcgKSA+IC0xIHx8IHZhbC5pbmRleE9mKCAnJScgKSA+IC0xIHx8IHZhbC5pbmRleE9mKCAnZW0nICkgPiAtMSApIHtcclxuXHRcdGxldCBjaGVja1B4ICA9IHMucmVwbGFjZSggJ3B4JywgJycgKTtcclxuXHRcdGxldCBjaGVja1BjdCA9IHMucmVwbGFjZSggJyUnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrRW0gID0gcy5yZXBsYWNlKCAnZW0nLCAnJyApO1xyXG5cdFx0aWYoIF8uaXNOdW1iZXIoIGNoZWNrUHggKSB8fCBfLmlzTnVtYmVyKCBjaGVja1BjdCApIHx8IF8uaXNOdW1iZXIoIGNoZWNrRW0gKSApIHtcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAnMHB4JztcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuICcwcHgnO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogRGV0ZWN0cyB3ZXRoZXIgdGhlIHdlYnNpdGUgaXMgYmVpbmcgb3BlbmVkIGluIGEgbW9iaWxlIGRldmljZSBvciBhIGRlc2t0b3AvbGFwdG9wLlxyXG4gKiBVc2UgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gdGVzdCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCBwcm9wZXJ0eSB0byBmaWd1cmUgb3V0IGlmIHRoZSBkZXZpY2UgaXMgYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApID8gJ01vYmlsZScgOiAnRGVza3RvcCc7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgKGluIGRheXMpIGJldHdlZW4gdHdvIGRhdGVzLlxyXG4gKiBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgKGluIGRheXMpIGJldHdlZW4gdHdvIERhdGUgb2JqZWN0cy5cclxuICogQHBhcmFtIGRhdGVJbml0aWFsXHJcbiAqIEBwYXJhbSBkYXRlRmluYWxcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlSW5pdGlhbCwgZGF0ZUZpbmFsICkgPT4gKCBkYXRlRmluYWwgLSBkYXRlSW5pdGlhbCApIC8gKCAxMDAwICogMzYwMCAqIDI0ICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGh1bWFuIHJlYWRhYmxlIGZvcm1hdCBvZiB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICogRGl2aWRlIG1zIHdpdGggdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyB0byBvYnRhaW4gdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyBmb3IgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCBhbmQgbWlsbGlzZWNvbmQuXHJcbiAqIFVzZSBPYmplY3QuZW50cmllcygpIHdpdGggQXJyYXkucHJvdG90eXBlLmZpbHRlcigpIHRvIGtlZXAgb25seSBub24temVybyB2YWx1ZXMuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCkgdG8gY3JlYXRlIHRoZSBzdHJpbmcgZm9yIGVhY2ggdmFsdWUsIHBsdXJhbGl6aW5nIGFwcHJvcHJpYXRlbHkuXHJcbiAqIFVzZSBTdHJpbmcucHJvdG90eXBlLmpvaW4oJywgJykgdG8gY29tYmluZSB0aGUgdmFsdWVzIGludG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBtc1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBtcyA9PiB7XHJcblx0aWYoIG1zIDwgMCApIG1zID0gLW1zO1xyXG5cdGNvbnN0IHRpbWUgPSB7XHJcblx0XHRkYXk6IE1hdGguZmxvb3IoIG1zIC8gODY0MDAwMDAgKSxcclxuXHRcdGhvdXI6IE1hdGguZmxvb3IoIG1zIC8gMzYwMDAwMCApICUgMjQsXHJcblx0XHRtaW51dGU6IE1hdGguZmxvb3IoIG1zIC8gNjAwMDAgKSAlIDYwLFxyXG5cdFx0c2Vjb25kOiBNYXRoLmZsb29yKCBtcyAvIDEwMDAgKSAlIDYwLFxyXG5cdFx0bWlsbGlzZWNvbmQ6IE1hdGguZmxvb3IoIG1zICkgJSAxMDAwXHJcblx0fTtcclxuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoIHRpbWUgKVxyXG5cdFx0XHRcdCAuZmlsdGVyKCB2YWwgPT4gdmFsWyAxIF0gIT09IDAgKVxyXG5cdFx0XHRcdCAubWFwKCAoIFsga2V5LCB2YWwgXSApID0+IGAke3ZhbH0gJHtrZXl9JHt2YWwgIT09IDEgPyAncycgOiAnJ31gIClcclxuXHRcdFx0XHQgLmpvaW4oICcsICcgKTtcclxufTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGFmdGVyIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIHRoZSBncmVhdGVyIHRoYW4gb3BlcmF0b3IgKD4pIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGNvbWVzIGFmdGVyIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBID4gZGF0ZUI7IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBiZWZvcmUgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGxlc3MgdGhhbiBvcGVyYXRvciAoPCkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYmVmb3JlIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBIDwgZGF0ZUI7IiwiLyoqXHJcbiAqIENoZWNrIGlmIGdpdmVuIE9iamVjdCAvIFZhbHVlIGlzIGEgalF1ZXJ5IEluc3RhbmNlLlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+ICggZmFsc2UgPT09IF8uaXNVbmRlZmluZWQoICRlbGVtICkgJiYgZmFsc2UgPT09IF8uaXNTdHJpbmcoICRlbGVtICkgJiYgJGVsZW0ualF1ZXJ5ICk7IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyB0aGUgc2FtZSBhcyBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpIGFuZCBzdHJpY3QgZXF1YWxpdHkgY2hlY2tpbmcgKD09PSkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgaXMgdGhlIHNhbWUgYXMgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEudG9JU09TdHJpbmcoKSA9PT0gZGF0ZUIudG9JU09TdHJpbmcoKTsiLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyBmb2N1c2VkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqIFVzZSB0aGUgRG9jdW1lbnQuaGlkZGVuIHByb3BlcnR5LCBpbnRyb2R1Y2VkIGJ5IHRoZSBQYWdlIFZpc2liaWxpdHkgQVBJIHRvIGNoZWNrIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyB2aXNpYmxlIG9yIGhpZGRlbi5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+ICFkb2N1bWVudC5oaWRkZW47IiwibW9kdWxlLmV4cG9ydHMgPSAoICR1cmwgKSA9PiB7XHJcblx0bGV0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCAnXihodHRwcz86XFxcXC9cXFxcLyk/JyArIC8vIHByb3RvY29sXHJcblx0XHQnKCgoW2EtelxcXFxkXShbYS16XFxcXGQtXSpbYS16XFxcXGRdKSopXFxcXC4/KStbYS16XXsyLH18JyArIC8vIGRvbWFpbiBuYW1lXHJcblx0XHQnKChcXFxcZHsxLDN9XFxcXC4pezN9XFxcXGR7MSwzfSkpJyArIC8vIGlwICh2NCkgYWRkcmVzc1xyXG5cdFx0JyhcXFxcOlxcXFxkKyk/KFxcXFwvWy1hLXpcXFxcZCVfLn4rXSopKicgKyAvL3BvcnRcclxuXHRcdCcoXFxcXD9bOyZhLXpcXFxcZCVfLn4rPS1dKik/JyArIC8vIHF1ZXJ5IHN0cmluZ1xyXG5cdFx0JyhcXFxcI1stYS16XFxcXGRfXSopPyQnLCAnaScgKTtcclxuXHRyZXR1cm4gKCBwYXR0ZXJuLnRlc3QoICR1cmwgKSApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVja3MgaWYgd2luZG93IGhhcyBnaXZlbiB2YXJpYWJsZS5cclxuICogQHBhcmFtICRrZXlcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSApID0+ICggZmFsc2UgPT09IF8uaXNVbmRlZmluZWQoIHdpbmRvd1sgJGtleSBdICkgKTsiLCIvKipcclxuICogTG9ncyBhIHZhbHVlIGFuZCByZXR1cm5zIGl0LlxyXG4gKiBVc2UgY29uc29sZS5sb2cgdG8gbG9nIHRoZSBzdXBwbGllZCB2YWx1ZSwgY29tYmluZWQgd2l0aCB0aGUgfHwgb3BlcmF0b3IgdG8gcmV0dXJuIGl0LlxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZGF0YSA9PiBjb25zb2xlLmxvZyggZGF0YSApIHx8IGRhdGE7IiwibW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAoIHR5cGVvZiBPYmplY3QuY3JlYXRlICAhPT0gJ3VuZGVmaW5lZCcgKSA/IE9iamVjdC5jcmVhdGUoIG51bGwgKSA6IHt9OyIsIi8qKlxyXG4gKiBSZXR1cm4gdmFsdWUgZnJvbSBRdWVyeVN0cmluZ1xyXG4gKiBAcGFyYW0gbmFtZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIG5hbWUgKSA9PiB7XHJcblx0bmFtZSAgICAgICAgPSBuYW1lLnJlcGxhY2UoIC9bXFxbXS8sIFwiXFxcXFtcIiApLnJlcGxhY2UoIC9bXFxdXS8sIFwiXFxcXF1cIiApO1xyXG5cdHZhciByZWdleCAgID0gbmV3IFJlZ0V4cCggXCJbXFxcXD8mXVwiICsgbmFtZSArIFwiPShbXiYjXSopXCIgKSxcclxuXHRcdHJlc3VsdHMgPSByZWdleC5leGVjKCBsb2NhdGlvbi5zZWFyY2ggKTtcclxuXHRyZXR1cm4gcmVzdWx0cyA9PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudCggcmVzdWx0c1sgMSBdLnJlcGxhY2UoIC9cXCsvZywgXCIgXCIgKSApO1xyXG59OyIsImltcG9ydCBtZDUgZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9tZDUnO1xyXG5cclxuLyoqXHJcbiAqIFVuaXF1ZSByYW5kb20gbWQ1XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IFN0cmluZyggbWQ1KCBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKSApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgcGFnZS5cclxuICogVXNlIHBhZ2VYT2Zmc2V0IGFuZCBwYWdlWU9mZnNldCBpZiB0aGV5IGFyZSBkZWZpbmVkLCBvdGhlcndpc2Ugc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wLiBZb3UgY2FuIG9taXQgZWwgdG8gdXNlIGEgZGVmYXVsdCB2YWx1ZSBvZiB3aW5kb3cuXHJcbiAqIEBwYXJhbSBlbFxyXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBlbCA9IHdpbmRvdyApID0+ICgge1xyXG5cdHg6IGVsLnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWE9mZnNldCA6IGVsLnNjcm9sbExlZnQsXHJcblx0eTogZWwucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VZT2Zmc2V0IDogZWwuc2Nyb2xsVG9wXHJcbn0gKTsiLCIvKipcclxuICogU21vb3RoLXNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS5cclxuICogR2V0IGRpc3RhbmNlIGZyb20gdG9wIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3Agb3IgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AuXHJcbiAqIFNjcm9sbCBieSBhIGZyYWN0aW9uIG9mIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3AuIFVzZSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgdG8gYW5pbWF0ZSB0aGUgc2Nyb2xsaW5nLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0aWYoIGMgPiAwICkge1xyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggc2Nyb2xsVG9Ub3AgKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbyggMCwgYyAtIGMgLyA4ICk7XHJcblx0fVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gKCBjYWxsYmFjaywgdGl0bGUgPSAnVGltZVRha2VuJyApID0+IHtcclxuXHRjb25zb2xlLnRpbWUoIHRpdGxlICk7XHJcblx0Y29uc3QgciA9IGNhbGxiYWNrKCk7XHJcblx0Y29uc29sZS50aW1lRW5kKCB0aXRsZSApO1xyXG5cdHJldHVybiByO1xyXG59OyIsImltcG9ydCBpc19qcXVlcnkgZnJvbSAnLi9pc19qcXVlcnknO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgR2l2ZW4gU3RyaW5nIGludG8gQSBqUXVlcnkgT2JqZWN0LlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiB7XHJcblx0aWYoIGZhbHNlID09PSBpc19qcXVlcnkoICRlbGVtICkgKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5KCAkZWxlbSApO1xyXG5cdH1cclxuXHRyZXR1cm4gJGVsZW07XHJcbn07IiwiaW1wb3J0IHZhbGlkYXRlSlNGdW5jIGZyb20gJy4vdmFsaWRhdGVTaW5nbGVKU0Z1bmMnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBFYWNoIFZhbHVlIE9mIGEgSlMgT2JqZWN0IEFuZCBDb252ZXJ0cyBJbnRvIEpTIENhbGxhYmxlIEZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gJGRhdGFcclxuICogQHBhcmFtICRhcmdzX2tleVxyXG4gKiBAcGFyYW0gJGNvbnRlbnRzX2tleVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSwgJGFyZ3Nfa2V5ID0gJ2pzX2FyZ3MnLCAkY29udGVudHNfa2V5ID0gJ2pzX2NvbnRlbnRzJyApID0+IHtcclxuXHRpZiggdHJ1ZSA9PT0gXy5pc09iamVjdCggJGRhdGEgKSApIHtcclxuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRhdGEgKSB7XHJcblx0XHRcdGlmKCAhXy5pc0VtcHR5KCAkZGF0YVsgJGtleSBdICkgKSB7XHJcblx0XHRcdFx0JGRhdGFbICRrZXkgXSA9IHZhbGlkYXRlSlNGdW5jKCAkZGF0YVsgJGtleSBdLCAkYXJnc19rZXksICRjb250ZW50c19rZXkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gJGRhdGE7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBjdXJyZW50IFVSTC5cclxuICogVXNlIFN0cmluZy5tYXRjaCgpIHdpdGggYW4gYXBwcm9wcmlhdGUgcmVndWxhciBleHByZXNzaW9uIHRvIGdldCBhbGwga2V5LXZhbHVlIHBhaXJzLFxyXG4gKiBBcnJheS5wcm90b3R5cGUucmVkdWNlKCkgdG8gbWFwIGFuZCBjb21iaW5lIHRoZW0gaW50byBhIHNpbmdsZSBvYmplY3QuXHJcbiAqIFBhc3MgbG9jYXRpb24uc2VhcmNoIGFzIHRoZSBhcmd1bWVudCB0byBhcHBseSB0byB0aGUgY3VycmVudCB1cmwuXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge1QgfCB7fX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdXJsID0+XHJcblx0KCB1cmwubWF0Y2goIC8oW14/PSZdKykoPShbXiZdKikpL2cgKSB8fCBbXSApLnJlZHVjZShcclxuXHRcdCggYSwgdiApID0+ICggKCBhWyB2LnNsaWNlKCAwLCB2LmluZGV4T2YoICc9JyApICkgXSA9IHYuc2xpY2UoIHYuaW5kZXhPZiggJz0nICkgKyAxICkgKSwgYSApLFxyXG5cdFx0e31cclxuXHQpOyIsIi8qKlxyXG4gKiBDb252ZXJ0cyBKUyBTdHJpbmcgSW50byBDYWxsYWJsZSBGdW5jdGlvbi5cclxuICogQHBhcmFtICRzdHJpbmdcclxuICogQHBhcmFtICRhcmdzX2tleVxyXG4gKiBAcGFyYW0gJGNvbnRlbnRzX2tleVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkc3RyaW5nLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBfLmlzT2JqZWN0KCAkc3RyaW5nICkgJiYgZmFsc2UgPT09IF8uaXNVbmRlZmluZWQoICRzdHJpbmdbICRhcmdzX2tleSBdICkgfHwgZmFsc2UgPT09IF8uaXNVbmRlZmluZWQoICRzdHJpbmdbICRjb250ZW50c19rZXkgXSApICkge1xyXG5cdFx0bGV0ICRhcmdzICAgICA9ICggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRhcmdzX2tleSBdO1xyXG5cdFx0bGV0ICRjb250ZW50cyA9ICggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdID09PSBmYWxzZSApID8gZmFsc2UgOiAkc3RyaW5nWyAkY29udGVudHNfa2V5IF07XHJcblx0XHRpZiggJGFyZ3MgPT09IGZhbHNlICYmICRjb250ZW50cyAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIGlmKCAkYXJncyAhPT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGFyZ3MsICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICRzdHJpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkc3RyaW5nO1xyXG59O1xyXG4iLCIvKipcclxuICogU2V0cyBKUyBPYmplY3QgSW50byBXaW5kb3cgQXJncy5cclxuICogQHBhcmFtICRrZXlcclxuICogQHBhcmFtICR2YWx1ZVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXksICR2YWx1ZSApID0+IHtcclxuXHRpZiggXy5pc09iamVjdCggJGtleSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJF9rIGluICRrZXkgKSB7XHJcblx0XHRcdHdpbmRvd1sgJF9rIF0gPSAka2V5WyAkX2sgXTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93WyAka2V5IF0gPSAkdmFsdWU7XHJcblx0fVxyXG59OyIsImNvbnN0IHBhcnNlX3VybCAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3BhcnNlX3VybCcgKTtcclxuY29uc3QgcGFyc2Vfc3RyICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxuY29uc3QgaHR0cF9idWlsZF9xdWVyeSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvaHR0cF9idWlsZF9xdWVyeScgKTtcclxuY29uc3Qgc3RycG9zICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnBvcycgKTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSBtb2RpZmllZCBVUkwgcXVlcnkgc3RyaW5nLlxyXG4gKlxyXG4gKiBZb3UgY2FuIHJlYnVpbGQgdGhlIFVSTCBhbmQgYXBwZW5kIHF1ZXJ5IHZhcmlhYmxlcyB0byB0aGUgVVJMIHF1ZXJ5IGJ5IHVzaW5nIHRoaXMgZnVuY3Rpb24uXHJcbiAqIFRoZXJlIGFyZSB0d28gd2F5cyB0byB1c2UgdGhpcyBmdW5jdGlvbjsgZWl0aGVyIGEgc2luZ2xlIGtleSBhbmQgdmFsdWUsIG9yIGFuIGFzc29jaWF0aXZlIGFycmF5LlxyXG4gKlxyXG4gKiBVc2luZyBhIHNpbmdsZSBrZXkgYW5kIHZhbHVlOlxyXG4gKlxyXG4gKiAgICAgYWRkX3F1ZXJ5X2FyZyggJ2tleScsICd2YWx1ZScsICdodHRwOi8vZXhhbXBsZS5jb20nICk7XHJcbiAqXHJcbiAqIFVzaW5nIGFuIGFzc29jaWF0aXZlIGFycmF5OlxyXG4gKlxyXG4gKiAgICAgYWRkX3F1ZXJ5X2FyZyggYXJyYXkoXHJcbiAqICAgICAgICAgJ2tleTEnID0+ICd2YWx1ZTEnLFxyXG4gKiAgICAgICAgICdrZXkyJyA9PiAndmFsdWUyJyxcclxuICogICAgICksICdodHRwOi8vZXhhbXBsZS5jb20nICk7XHJcbiAqXHJcbiAqIE9taXR0aW5nIHRoZSBVUkwgZnJvbSBlaXRoZXIgdXNlIHJlc3VsdHMgaW4gdGhlIGN1cnJlbnQgVVJMIGJlaW5nIHVzZWRcclxuICogKHRoZSB2YWx1ZSBvZiBgd2luZG93LmxvY2F0aW9uLmhyZWZgKS5cclxuICpcclxuICogVmFsdWVzIGFyZSBleHBlY3RlZCB0byBiZSBlbmNvZGVkIGFwcHJvcHJpYXRlbHkgd2l0aCB1cmxlbmNvZGUoKSBvciByYXd1cmxlbmNvZGUoKS5cclxuICpcclxuICogU2V0dGluZyBhbnkgcXVlcnkgdmFyaWFibGUncyB2YWx1ZSB0byBib29sZWFuIGZhbHNlIHJlbW92ZXMgdGhlIGtleSAoc2VlIHJlbW92ZV9xdWVyeV9hcmcoKSkuXHJcbiAqXHJcbiAqIEltcG9ydGFudDogVGhlIHJldHVybiB2YWx1ZSBvZiBhZGRfcXVlcnlfYXJnKCkgaXMgbm90IGVzY2FwZWQgYnkgZGVmYXVsdC4gT3V0cHV0IHNob3VsZCBiZVxyXG4gKiBsYXRlLWVzY2FwZWQgd2l0aCBlc2NfdXJsKCkgb3Igc2ltaWxhciB0byBoZWxwIHByZXZlbnQgdnVsbmVyYWJpbGl0eSB0byBjcm9zcy1zaXRlIHNjcmlwdGluZ1xyXG4gKiAoWFNTKSBhdHRhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ga2V5XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcGFyYW0gdXJsXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRfcXVlcnlfYXJnKCBrZXkgPSBudWxsLCB2YWx1ZSA9IG51bGwsIHVybCA9IG51bGwgKSB7XHJcblx0aWYoIHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIG51bGwgPT09IHZhbHVlICkge1xyXG5cdFx0dXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0fSBlbHNlIGlmKCB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiBudWxsICE9PSB2YWx1ZSApIHtcclxuXHRcdHVybCAgID0gdmFsdWU7XHJcblx0XHR2YWx1ZSA9IG51bGw7XHJcblx0fSBlbHNlIGlmKCBudWxsID09PSB1cmwgKSB7XHJcblx0XHR1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWxzZSA9PT0gdXJsIHx8ICcnID09PSB1cmwgfHwgdW5kZWZpbmVkID09PSB1cmwgKSB7XHJcblx0XHR1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9XHJcblxyXG5cdGxldCAkcGFyc2VkICAgPSBwYXJzZV91cmwoIHVybCApLFxyXG5cdFx0JHF1ZXJ5ICAgID0ge30sXHJcblx0XHQkZnJhZ21lbnQgPSAoICRwYXJzZWQuZnJhZ21lbnQgKSA/ICcjJyArICRwYXJzZWQuZnJhZ21lbnQgOiAnJztcclxuXHJcblx0aWYoIHR5cGVvZiAkcGFyc2VkLnF1ZXJ5ICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdHBhcnNlX3N0ciggJHBhcnNlZC5xdWVyeSwgJHF1ZXJ5ICk7XHJcblx0fVxyXG5cclxuXHRpZiggdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHRmb3IoIGxldCBrIGluIGtleSApIHtcclxuXHRcdFx0aWYoIGtleVsgayBdICkge1xyXG5cdFx0XHRcdCRxdWVyeVsgayBdID0ga2V5WyBrIF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0JHF1ZXJ5WyBrZXkgXSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0bGV0IHNwbGl0X3VybCA9IG51bGwsXHJcblx0XHRiYXNlX3VybCAgPSB1cmw7XHJcblx0aWYoIGZhbHNlICE9PSBzdHJwb3MoIHVybCwgJz8nICkgKSB7XHJcblx0XHRzcGxpdF91cmwgPSB1cmwuc3BsaXQoICc/JyApO1xyXG5cdFx0YmFzZV91cmwgID0gc3BsaXRfdXJsWyAwIF0gfHwgdXJsO1xyXG5cdH0gZWxzZSBpZiggZmFsc2UgIT09IHN0cnBvcyggdXJsLCAnIycgKSApIHtcclxuXHRcdHNwbGl0X3VybCA9IHVybC5zcGxpdCggJyMnICk7XHJcblx0XHRiYXNlX3VybCAgPSBzcGxpdF91cmxbIDAgXSB8fCB1cmw7XHJcblx0fVxyXG5cclxuXHRmb3IoIGxldCBrIGluICRxdWVyeSApIHtcclxuXHRcdGlmKCBmYWxzZSA9PT0gJHF1ZXJ5WyBrIF0gKSB7XHJcblx0XHRcdGRlbGV0ZSAkcXVlcnlbIGsgXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCRxdWVyeSA9IGh0dHBfYnVpbGRfcXVlcnkoICRxdWVyeSwgbnVsbCwgJyYnICk7XHJcblx0JHF1ZXJ5ID0gKCAkcXVlcnkgIT09ICcnICkgPyAnPycgKyAkcXVlcnkgOiAkcXVlcnk7XHJcblx0cmV0dXJuIGJhc2VfdXJsICsgJHF1ZXJ5ICsgJGZyYWdtZW50O1xyXG59IiwiaW1wb3J0IGFkZF9xdWVyeV9hcmcgZnJvbSAnLi9hZGRfcXVlcnlfYXJnJztcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGFuIGl0ZW0gb3IgaXRlbXMgZnJvbSBhIHF1ZXJ5IHN0cmluZy5cclxuICogQHBhcmFtIGtleVxyXG4gKiBAcGFyYW0gdXJsXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlX3F1ZXJ5X2FyZygga2V5ID0gbnVsbCwgdXJsID0gbnVsbCApIHtcclxuXHRpZiggdHlwZW9mIGtleSAhPT0gJ29iamVjdCcgKSB7XHJcblx0XHRrZXkgPSBbIGtleSBdO1xyXG5cdH1cclxuXHJcblx0Zm9yKCBsZXQgaSBpbiBrZXkgKSB7XHJcblx0XHRpZigga2V5WyBpIF0gKSB7XHJcblx0XHRcdHVybCA9IGFkZF9xdWVyeV9hcmcoIGtleVsgaSBdLCBmYWxzZSwgdXJsICk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB1cmw7XHJcbn1cclxuIiwiaW1wb3J0IHVudHJhaWxpbmdzbGFzaGl0IGZyb20gJy4vdW50cmFpbGluZ3NsYXNoaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oICRzdHJpbmcgKSB7XHJcblx0cmV0dXJuIHVudHJhaWxpbmdzbGFzaGl0KCAkc3RyaW5nICkgKyAnL1xcXFwnO1xyXG59IiwiaW1wb3J0IHJ0cmltIGZyb20gJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0nO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdHJhaWxpbmcgZm9yd2FyZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpZiB0aGV5IGV4aXN0LlxyXG4gKlxyXG4gKiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBpcyBmb3IgcGF0aHMgYW5kIHRodXMgc2hvdWxkIGJlIHVzZWQgZm9yIHBhdGhzLiBJdCBpc1xyXG4gKiBub3QgcmVzdHJpY3RlZCB0byBwYXRocyBhbmQgb2ZmZXJzIG5vIHNwZWNpZmljIHBhdGggc3VwcG9ydC5cclxuICogQHBhcmFtICRzdHJpbmdcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiggJHN0cmluZyApIHtcclxuXHRyZXR1cm4gcnRyaW0oICRzdHJpbmcsICcvXFxcXCcgKTtcclxufSIsImV4cG9ydCBjb25zdCBhZGRfcXVlcnlfYXJnID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvYWRkX3F1ZXJ5X2FyZycpLmRlZmF1bHQ7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlX3F1ZXJ5X2FyZyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3JlbW92ZV9xdWVyeV9hcmcnKS5kZWZhdWx0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWlsaW5nc2xhc2hpdCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3RyYWlsaW5nc2xhc2hpdCcpLmRlZmF1bHQ7XHJcblxyXG5leHBvcnQgY29uc3QgdW50cmFpbGluZ3NsYXNoaXQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy91bnRyYWlsaW5nc2xhc2hpdCcpLmRlZmF1bHQ7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFwcGVuZHMgRnVuY3Rpb24gR2xvYmFsbHkuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93ICkgPT4ge1xyXG5cdHdpbmRvdy5hZGRfcXVlcnlfYXJnICAgICA9IGFkZF9xdWVyeV9hcmc7XHJcblx0d2luZG93LnJlbW92ZV9xdWVyeV9hcmcgID0gcmVtb3ZlX3F1ZXJ5X2FyZztcclxuXHR3aW5kb3cudW50cmFpbGluZ3NsYXNoaXQgPSB1bnRyYWlsaW5nc2xhc2hpdDtcclxuXHR3aW5kb3cudHJhaWxpbmdzbGFzaGl0ICAgPSB0cmFpbGluZ3NsYXNoaXQ7XHJcbn0gKSggd2luZG93ICk7XHJcbiIsImltcG9ydCB7XG5cdHRvX2pxdWVyeSxcblx0Y2FsbF91c2VyX2Z1bmMsXG5cdHBhcnNlX3N0cixcblx0aXNfdXJsLFxuXHR1cmxfcGFyYW1zLFxuXHRpc19jYWxsYWJsZSxcblx0Y2FsbF91c2VyX2Z1bmNfYXJyYXksXG5cdGZ1bmN0aW9uX2V4aXN0cyxcblx0Y3JlYXRlX2Z1bmN0aW9uLFxufSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHsgcmVtb3ZlX3F1ZXJ5X2FyZyB9IGZyb20gJ3dvcmRwcmVzcy1qcy1wb3J0cyc7XG5cbi8qKlxuICogV1BPbmlvbiBDdXN0b20gQWpheCBIYW5kbGVyLlxuICovXG5leHBvcnQgY2xhc3MgV1BPbmlvbl9BamF4ZXIge1xuXHQvKipcblx0ICogQHBhcmFtICRhamF4X2FyZ3Ncblx0ICogQHBhcmFtICRhamF4X2NvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRhamF4X2FyZ3MsICRhamF4X2NvbmZpZyApIHtcblx0XHR0aGlzLmRlZmF1bHRzICAgICAgICA9IHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0dXJsOiAoIHR5cGVvZiB3aW5kb3cuYWpheHVybCAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdy5hamF4dXJsIDogZmFsc2UsXG5cdFx0XHRkYXRhOiB7fSxcblx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0YWx3YXlzOiBmYWxzZSxcblx0XHRcdGFjdGlvbjogZmFsc2UsXG5cdFx0fTtcblx0XHR0aGlzLmRlZmF1bHRfY29uZmlncyA9IHtcblx0XHRcdHJlc3BvbnNlX2VsZW1lbnQ6IGZhbHNlLFxuXHRcdFx0YnV0dG9uOiBmYWxzZSxcblx0XHRcdGVsZW1lbnQ6IGZhbHNlLFxuXHRcdFx0c3Bpbm5lcjogJzxzcGFuIGNsYXNzPVwic3Bpbm5lclwiPjwvc3Bhbj4nLFxuXHRcdH07XG5cdFx0dGhpcy5pbnN0YW5jZSAgICAgICAgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXUE9uaW9uX0FqYXhlci5kZWZhdWx0c31cblx0XHQgKi9cblx0XHR0aGlzLmFqYXhfYXJncyA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHRoaXMuZGVmYXVsdHMsICRhamF4X2FyZ3MgKTtcblx0XHR0aGlzLmFqYXhfY29uZmlnID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggdGhpcy5kZWZhdWx0X2NvbmZpZ3MsICRhamF4X2NvbmZpZyApO1xuXHRcdHRoaXMuYWpheCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgQSBDYWxsYWJsZSBDYWxsYmFjayBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgY29kZSBkYXRhLlxuXHQgKlxuXHQgKiBAcGFyYW0gJGNvZGVcblx0ICogQHBhcmFtICRhcmdzXG5cdCAqL1xuXHRjcmVhdGVfZnVuY3Rpb24oICRjb2RlID0gZmFsc2UsICRhcmdzID0gJycgKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2luZ2xlX2NhbGxiYWNrKCBjcmVhdGVfZnVuY3Rpb24oICRhcmdzLCAkY29kZSApICk7XG5cdH1cblxuXHQvKipcblx0ICogVmFsaWRhdGVzICYgVHJpZ2dlcnMgQSBTaW5nbGUgQ2FsbGJhY2sgRnVuY3Rpb24uXG5cdCAqIEBwYXJhbSAkY2FsbGJhY2tcblx0ICovXG5cdHNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrICkge1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzRnVuY3Rpb24oICRjYWxsYmFjayApICkge1xuXHRcdFx0Y2FsbF91c2VyX2Z1bmMoICRjYWxsYmFjayApO1xuXHRcdH0gZWxzZSBpZiggd2luZG93Lndwb25pb24uXy5pc1N0cmluZyggJGNhbGxiYWNrICkgJiYgZmFsc2UgIT09IGZ1bmN0aW9uX2V4aXN0cyggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRjYWxsX3VzZXJfZnVuYyggJGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdHRoaXMuY3JlYXRlX2Z1bmN0aW9uKCAkY2FsbGJhY2sgKTtcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRjYWxsYmFjayApICkge1xuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkY2FsbGJhY2sgKSB7XG5cdFx0XHRcdGlmKCAkY2FsbGJhY2suaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrWyAka2V5IF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEFuIEFycmF5IG9mIENhbGxhYmxlIEFqYXggRnVuY3Rpb25zLlxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGhhbmRsZV9jYWxsYmFja3MoIGRhdGEgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoIGRhdGEgKSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggZGF0YS5jYWxsYmFjayApICkge1xuXHRcdFx0XHRsZXQgJGNhbGxiYWNrcyA9IGRhdGEuY2FsbGJhY2s7XG5cblx0XHRcdFx0aWYoIGZhbHNlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkY2FsbGJhY2tzICkgKSB7XG5cdFx0XHRcdFx0dGhpcy5zaW5nbGVfY2FsbGJhY2soICRjYWxsYmFja3MgKTtcblx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGNhbGxiYWNrcyApICkge1xuXHRcdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGNhbGxiYWNrcyApIHtcblx0XHRcdFx0XHRcdGlmKCAkY2FsbGJhY2tzLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tzWyAka2V5IF0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIGRhdGEuY2FsbGJhY2s7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJlZCBPbiBBamF4IG9uU3VjY2Vzc1xuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0b25TdWNjZXNzKCBkYXRhICkge1xuXHRcdHRoaXMuaGFuZGxlX2NhbGxiYWNrcyggZGF0YSApO1xuXG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmFqYXhfYXJncy5zdWNjZXNzICkge1xuXHRcdFx0aWYoIGlzX2NhbGxhYmxlKCB0aGlzLmFqYXhfYXJncy5zdWNjZXNzICkgKSB7XG5cdFx0XHRcdGNhbGxfdXNlcl9mdW5jX2FycmF5KCB0aGlzLmFqYXhfYXJncy5zdWNjZXNzLCBbIGRhdGEgXSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyZWQgT24gQWpheCBvbkVycm9yXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRvbkVycm9yKCBkYXRhICkge1xuXHRcdHRoaXMuaGFuZGxlX2NhbGxiYWNrcyggZGF0YSApO1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5hamF4X2FyZ3MuZXJyb3IgKSB7XG5cdFx0XHRpZiggaXNfY2FsbGFibGUoIHRoaXMuYWpheF9hcmdzLmVycm9yICkgKSB7XG5cdFx0XHRcdGNhbGxfdXNlcl9mdW5jX2FycmF5KCB0aGlzLmFqYXhfYXJncy5lcnJvciwgWyBkYXRhIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcmVkIE9uIEFqYXggb25BbHdheXNcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdG9uQWx3YXlzKCBkYXRhICkge1xuXHRcdHRoaXMuYnV0dG9uX3VubG9jaygpO1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5hamF4X2FyZ3MuYWx3YXlzICkge1xuXHRcdFx0aWYoIGlzX2NhbGxhYmxlKCB0aGlzLmFqYXhfYXJncy5hbHdheXMgKSApIHtcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLmFsd2F5cywgWyBkYXRhIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcnMgQW4gQWpheCBSZXF1ZXN0LiBCYXNlZCBPbiBUaGUgQ29uZmlnLlxuXHQgKi9cblx0YWpheCgpIHtcblx0XHR0aGlzLmJ1dHRvbl9sb2NrKCk7XG5cdFx0bGV0ICRjb25maWcgPSB3aW5kb3cud3Bvbmlvbi5fLmNsb25lKCB0aGlzLmFqYXhfYXJncyApO1xuXHRcdGlmKCBmYWxzZSAhPT0gJGNvbmZpZy51cmwgKSB7XG5cdFx0XHRpZiggZmFsc2UgIT09IGlzX3VybCggJGNvbmZpZy51cmwgKSApIHtcblx0XHRcdFx0bGV0ICR1cmxfcGFyYW1zID0gdXJsX3BhcmFtcyggJGNvbmZpZy51cmwgKTtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkdXJsX3BhcmFtcyApIHtcblx0XHRcdFx0XHRpZiggJHVybF9wYXJhbXMuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdCRjb25maWcudXJsID0gcmVtb3ZlX3F1ZXJ5X2FyZyggJGtleSwgJGNvbmZpZy51cmwgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0JGNvbmZpZy5kYXRhID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJGNvbmZpZy5kYXRhLCAkdXJsX3BhcmFtcyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0ICR1cmxfcGFyYW1zID0ge307XG5cdFx0XHRcdHBhcnNlX3N0ciggJGNvbmZpZy51cmwsICR1cmxfcGFyYW1zICk7XG5cdFx0XHRcdCRjb25maWcudXJsICA9IHdpbmRvdy5hamF4dXJsO1xuXHRcdFx0XHQkY29uZmlnLmRhdGEgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkY29uZmlnLmRhdGEsICR1cmxfcGFyYW1zICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRjb25maWcudXJsID0gd2luZG93LmFqYXh1cmw7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHNlICE9PSAkY29uZmlnLmFjdGlvbiApIHtcblx0XHRcdCRjb25maWcuZGF0YS5hY3Rpb24gPSAkY29uZmlnLmFjdGlvbjtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLmFjdGlvbjtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mICRjb25maWcuc3VjY2VzcyAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5zdWNjZXNzO1xuXHRcdH1cblx0XHRpZiggdHlwZW9mICRjb25maWcuYWx3YXlzICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLmFsd2F5cztcblx0XHR9XG5cdFx0aWYoIHR5cGVvZiAkY29uZmlnLmVycm9yICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLmVycm9yO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5zdGFuY2UgPSB3aW5kb3cud3AuYWpheC5zZW5kKCAkY29uZmlnICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5kb25lKCAoIGRhdGEgKSA9PiB0aGlzLm9uU3VjY2VzcyggZGF0YSApICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5mYWlsKCAoIGRhdGEgKSA9PiB0aGlzLm9uRXJyb3IoIGRhdGEgKSApO1xuXHRcdHRoaXMuaW5zdGFuY2UuYWx3YXlzKCAoIGRhdGEgKSA9PiB0aGlzLm9uQWx3YXlzKCBkYXRhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgQSBDb25maWcgRGF0YSBFeHNpdHMgQmFzZWQgb24gVGhlIEdpdmVuIEtleS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNfY29uZmlnKCAka2V5ID0gJycgKSB7XG5cdFx0cmV0dXJuICggdHlwZW9mIHRoaXMuYWpheF9jb25maWdbICRrZXkgXSAhPT0gJ3VuZGVmaW5lZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIFRoZSBDb25maWcgRGF0YSBCYXNlZCBvbiBUaGUgQ29uZmlnIEtleS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0Y29uZmlnKCAka2V5ID0gJycsICRkZWZhdWx0ID0gZmFsc2UgKSB7XG5cdFx0cmV0dXJuICggdGhpcy5oYXNfY29uZmlnKCAka2V5ICkgKSA/IHRoaXMuYWpheF9jb25maWdbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIExvY2tzIEEgR2l2ZW4gQnV0dG9uIEVsZW1lbnQuXG5cdCAqL1xuXHRidXR0b25fbG9jaygpIHtcblx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICkge1xuXHRcdFx0bGV0ICRidXR0b24gPSB0b19qcXVlcnkoIHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICk7XG5cdFx0XHRpZiggJGJ1dHRvbiApIHtcblx0XHRcdFx0JGJ1dHRvbi53cG9fYnV0dG9uKCAncHJvY2Vzc2luZycgKTtcblx0XHRcdFx0JGJ1dHRvbi5hdHRyKCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnICk7XG5cblx0XHRcdFx0aWYoIHRoaXMuY29uZmlnKCAnc3Bpbm5lcicgKSApIHtcblx0XHRcdFx0XHRsZXQgJHNwaW5uZXIgPSBqUXVlcnkoIHRoaXMuY29uZmlnKCAnc3Bpbm5lcicgKSApO1xuXHRcdFx0XHRcdCRzcGlubmVyLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdFx0XHRcdCRidXR0b24ucGFyZW50KCkuYXBwZW5kKCAkc3Bpbm5lciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVubG9ja3MgQSBHaXZlbiBCdXR0b24gRWxlbWVudC5cblx0ICovXG5cdGJ1dHRvbl91bmxvY2soKSB7XG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZyggJ2J1dHRvbicgKSApIHtcblx0XHRcdGxldCAkYnV0dG9uID0gdG9fanF1ZXJ5KCB0aGlzLmNvbmZpZyggJ2J1dHRvbicgKSApO1xuXHRcdFx0aWYoICRidXR0b24gKSB7XG5cdFx0XHRcdCRidXR0b24ud3BvX2J1dHRvbiggJ2NvbXBsZXRlJyApO1xuXHRcdFx0XHQkYnV0dG9uLnJlbW92ZUF0dHIoICdkaXNhYmxlZCcgKTtcblx0XHRcdFx0bGV0ICRzcGlubmVyID0gJGJ1dHRvbi5uZXh0KCk7XG5cdFx0XHRcdGlmKCAkc3Bpbm5lci5oYXNDbGFzcyggJ3NwaW5uZXInICkgKSB7XG5cdFx0XHRcdFx0JHNwaW5uZXIucmVtb3ZlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGJ1dHRvbi5wYXJlbnQoKS5maW5kKCAnLnNwaW5uZXInICkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoICQsIGRvY3VtZW50ICkgPT4ge1xuXHQkKCAoKSA9PiB7XG5cdFx0bGV0ICRjbGFzcyA9ICdbZGF0YS13cG9uaW9uLWlubGluZS1hamF4XSwgLndwb25pb24tYWpheCwgLndwb25pb24tYWpheC1nZXQsIC53cG9uaW9uLWFqYXgtcG9zdCwgLndwb25pb24taW5saW5lLWFqYXgsIC53cG9uaW9uLWlubGluZS1hamF4LWdldCwgLndwb25pb24taW5saW5lLWFqYXgtcG9zdCc7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJGNsYXNzLCAoIGUgKSA9PiB7XG5cblx0XHRcdGxldCAkZWxlbSAgICAgICAgICAgID0gJCggZS5jdXJyZW50VGFyZ2V0ICksXG5cdFx0XHRcdCRfZGF0YSAgICAgICAgICAgPSAkZWxlbS5kYXRhKCksXG5cdFx0XHRcdCRfY2xhc3NfaW5zdGFuY2UgPSBudWxsLFxuXHRcdFx0XHQkYXJncyAgICAgICAgICAgID0ge1xuXHRcdFx0XHRcdHVybDogZmFsc2UsXG5cdFx0XHRcdH07XG5cblx0XHRcdGlmKCAkZWxlbS5hdHRyKCAnZGF0YS13cG9uaW9uLWlubGluZS1hamF4JyApICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0bGV0ICRmaWQxICA9ICRlbGVtLmF0dHIoICdkYXRhLXdwb25pb24taW5saW5lLWFqYXgnICk7XG5cdFx0XHRcdGxldCAkZmlkMiAgPSAkZWxlbS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdGxldCAkanNfaWQgPSAkd3Bvbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdFx0XHRsZXQgJGFyZ3MgID0ge307XG5cdFx0XHRcdGlmKCAkanNfaWQgKSB7XG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGpzX2lkLCBmYWxzZSApO1xuXHRcdFx0XHRcdGlmKCAkX2FyZ3MuaGFzT3duUHJvcGVydHkoICdpbmxpbmVfYWpheCcgKSAmJiBmYWxzZSAhPT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJF9hcmdzLmlubGluZV9hamF4ICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgIT09ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDEsIGZhbHNlICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDEsIGZhbHNlICk7XG5cdFx0XHRcdFx0aWYoICRfYXJncy5oYXNPd25Qcm9wZXJ0eSggJ2lubGluZV9hamF4JyApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkX2FyZ3MuaW5saW5lX2FqYXggKSApIHtcblx0XHRcdFx0XHRcdCRhcmdzID0gJF9hcmdzLmlubGluZV9hamF4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMiwgZmFsc2UgKSApIHtcblx0XHRcdFx0XHRsZXQgJF9hcmdzID0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMiwgZmFsc2UgKTtcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xuXHRcdFx0XHRcdFx0JGFyZ3MgPSAkX2FyZ3MuaW5saW5lX2FqYXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgtZ2V0JyApIHx8ICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1pbmxpbmUtYWpheC1nZXQnICkgKSB7XG5cdFx0XHRcdFx0JGFyZ3MubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgtcG9zdCcgKSB8fCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24taW5saW5lLWFqYXgtcG9zdCcgKSApIHtcblx0XHRcdFx0XHQkYXJncy5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgnICkgfHwgJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWlubGluZS1hamF4JyApICYmIHR5cGVvZiAkX2RhdGEubWV0aG9kICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy5tZXRob2QgPSAkX2RhdGEubWV0aG9kO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHR5cGVvZiAkX2RhdGEudXJsICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy51cmwgPSAkX2RhdGEudXJsO1xuXHRcdFx0XHR9IGVsc2UgaWYoIHR5cGVvZiAkX2RhdGEuaHJlZiAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJF9kYXRhLmhyZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uYXR0ciggJ2hyZWYnICkgKSB7XG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJGVsZW0uYXR0ciggJ2hyZWYnICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdHlwZW9mICRfZGF0YVsgJ2FqYXgtZGF0YScgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MuZGF0YSA9ICRfZGF0YVsgJ2FqYXgtZGF0YScgXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB0eXBlb2YgJF9kYXRhLmFjdGlvbiAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MuYWN0aW9uID0gJF9kYXRhLmFjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQkX2NsYXNzX2luc3RhbmNlID0gbmV3IFdQT25pb25fQWpheGVyKCAkYXJncywge1xuXHRcdFx0XHRidXR0b246ICRlbGVtLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCBqUXVlcnksIGRvY3VtZW50ICk7XG4iLCIvKiBnbG9iYWwgc3dhbDp0cnVlICovXG5pbXBvcnQge1xuXHRjYWxsX3VzZXJfZnVuYyxcblx0aXNfanF1ZXJ5LFxuXHRpc193aW5kb3dfYXJnLFxuXHRtZDUsXG5cdG1pY3JvdGltZSxcblx0cmFuZF9tZDUsXG5cdHRvX2pxdWVyeSxcblx0dG9fanNfZnVuYyxcbn0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbi8qKlxuICogQmFzZSBXUG9uaW9uIEpTIENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uIHtcblx0LyoqXG5cdCAqIFZhbGlkYXRlcyAmIENvbnZlcnRzIGludG8gQ2FsbGFibGUgSlMgRnVuY3Rpb25zLlxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICogQHJldHVybnMgeyp8JGRhdGF9XG5cdCAqL1xuXHRzdGF0aWMganNfZnVuYyggJGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRvX2pzX2Z1bmMoICRkYXRhLCAnd3Bvbmlvbl9qc19hcmdzJywgJ3dwb25pb25fanNfY29udGVudHMnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGVzIEEgUmFuZG9tIElELlxuXHQgKi9cblx0c3RhdGljIHJhbmRfaWQoKSB7XG5cdFx0cmV0dXJuIG1kNSggJ3dwb25pb25fcmFuZF8nICsgbWljcm90aW1lKCkgKyByYW5kX21kNSgpICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIEpTT04uXG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgdmFsaWRfanNvbiggb2JqICkge1xuXHRcdHRyeSB7XG5cdFx0XHRKU09OLnBhcnNlKCBvYmogKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZElEKCAkZWxlbSApIHtcblx0XHRyZXR1cm4gdG9fanF1ZXJ5KCAkZWxlbSApLmF0dHIoICdkYXRhLXdwb25pb24tanNpZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIEZpZWxkIEhUTUwgT2JqZWN0IFVzaW5nIEZpZWxkIElELlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICR3aGVyZV90b19maW5kXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHN0YXRpYyBJRHRvRWxlbWVudCggJGVsZW0sICR3aGVyZV90b19maW5kID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRpZCA9IFdQT25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRpZiggZmFsc2UgIT09ICR3aGVyZV90b19maW5kICYmIGlzX2pxdWVyeSggJHdoZXJlX3RvX2ZpbmQgKSApIHtcblx0XHRcdHJldHVybiAkd2hlcmVfdG9fZmluZC5maW5kKCAnLndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkaWQgKyAnXCInICk7XG5cdFx0fVxuXHRcdHJldHVybiBqUXVlcnkoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIl0nICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGdpdmVuIHZhbHVlIGlzIGFuIGpRdWVyeSBpbnN0YW5jZS5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzRmllbGQoICRlbGVtICkge1xuXHRcdHJldHVybiAoIGlzX2pxdWVyeSggJGVsZW0gKSApID8gKCB0aGlzLmZpZWxkSUQoICRlbGVtICkgKSA6IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgV2luZG93IEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyB3aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdHJldHVybiAoIGlzX3dpbmRvd19hcmcoICR2YXJfaWQgKSApID8gd2luZG93WyAkdmFyX2lkIF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgJiBSZXR1cm5zIEZpZWxkIEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZEFyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0JHZhcl9pZCA9ICggdGhpcy5pc0ZpZWxkKCAkdmFyX2lkICkgKSA/IHRoaXMuZmllbGRJRCggJHZhcl9pZCApIDogJHZhcl9pZDtcblx0XHRyZXR1cm4gKCAkdmFyX2lkICkgPyB3aW5kb3cud3Bvbmlvbi5fLmNsb25lKCB0aGlzLndpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ICkgKSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoY2VrcyBhbmQgcmV0dXJucyBnbG9iYWwgdHJhbnNsYXRpb24gc3RyaW5nLlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyB0eHQoICRrZXksICRkZWZhdWx0ID0gJ3N0cmluZ19kZWZhdWx0X25vdF9mb3VuZCcgKSB7XG5cdFx0cmV0dXJuICggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIFdQT25pb24udGV4dFsgJGtleSBdICkgKSA/IFdQT25pb24udGV4dFsgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBMb2FkaW5nIFNjcmVlbi5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkaXNfc2hvd1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBsb2FkaW5nX3NjcmVlbiggJGVsZW0sICRpc19zaG93ID0gdHJ1ZSApIHtcblx0XHQkZWxlbSA9IHRvX2pxdWVyeSggJGVsZW0gKS5maW5kKCAnLnBhZ2UtbG9hZGVyJyApO1xuXHRcdGlmKCB0cnVlID09PSAkaXNfc2hvdyApIHtcblx0XHRcdHJldHVybiAkZWxlbS5mYWRlSW4oICdzbG93JyApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGVsZW0uZmFkZU91dCggJ3Nsb3cnICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBHbG9iYWwgRGVidWcgVmlldyBQT1BVUC5cblx0ICovXG5cdHN0YXRpYyBnbG9iYWxfZGVidWcoKSB7XG5cdFx0bGV0ICRoYW5kbGUgPSBqUXVlcnkoICdhLndwb25pb24tZ2xvYmFsLWRlYnVnLWhhbmRsZScgKSxcblx0XHRcdCRqc29uICAgPSB7fTtcblx0XHRpZiggV1BPbmlvbi5kZWJ1Z19pbmZvID09PSBudWxsICYmICRoYW5kbGUubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkZGVmaW5lZF92YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICk7XG5cdFx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGRlZmluZWRfdmFycyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICRkZWZpbmVkX3ZhcnMgKSB7XG5cdFx0XHRcdFx0aWYoICRkZWZpbmVkX3ZhcnMuaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGRlZmluZWRfdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0XHQkanNvblsgJGRlZmluZWRfdmFyc1sgJGtleSBdIF0gPSBXUE9uaW9uLndpbmRvd0FyZ3MoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRXUE9uaW9uLmRlYnVnX2luZm8gPSAkanNvbjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkaGFuZGxlLm9uKCAnY2xpY2snLCAoICggZSApID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHN3YWwoIHtcblx0XHRcdFx0dGl0bGU6IFdQT25pb24udHh0KCAnZ2xvYmFsX2pzb25fb3V0cHV0JywgJ0dsb2JhbCBXUE9uaW9uIERlYnVnIERhdGEnICksXG5cdFx0XHRcdGh0bWw6IGpRdWVyeSggJyN3cG9uaW9uZGVidWdpbmZvcG9wdXAgPiBkaXYnICksXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogV1BPbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnR2V0IEpTT04gT3V0cHV0JyApLFxuXHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoKSA9PiBzd2FsLmVuYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0b25PcGVuOiAoKSA9PiB7XG5cdFx0XHRcdFx0alF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgI3dwb25pb24tZ2xvYmFsLWRlYnVnLWNvbnRlbnQnICkuanNvblZpZXcoIFdQT25pb24uZGVidWdfaW5mbyApO1xuXHRcdFx0XHRcdHN3YWwuZGlzYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gc3dhbCgge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRodG1sOiAnPHRleHRhcmVhIHN0eWxlPVwibWluLXdpZHRoOjU1MHB4OyBtaW4taGVpZ2h0OjMwMHB4XCI+JyArIEpTT04uc3RyaW5naWZ5KCBXUE9uaW9uLmRlYnVnX2luZm8gKSArICc8L3RleHRhcmVhPicsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGFuZCBSZXRyaXZlcyBWYWx1ZXMgZnJvbSAkd3Bvbmlvbi5zZXR0aW5nc1xuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgb3B0aW9uKCAka2V5LCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IFdQT25pb24uc2V0dGluZ3NfYXJncztcblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApIHtcblx0XHRcdHJldHVybiAkYXJnc1sgJGtleSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0cnVlIGlmIFdQT25pb24gRGVidWcgaXMgZW5hYmxlZC5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNfZGVidWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnZGVidWcnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2F0aGVyIEFsbCBGaWVsZCBKUyBDb2Rlcy5cblx0ICovXG5cdHN0YXRpYyBmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggV1BPbmlvbi5pc19kZWJ1ZygpICYmIHdpbmRvdy53cG9uaW9uLl8uaXNOdWxsKCBXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gKSApIHtcblx0XHRcdGxldCAkdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApLFxuXHRcdFx0XHQkanNvbiA9IHt9LFxuXHRcdFx0XHQkdXR4dCA9IFdQT25pb24udHh0KCAndW5tb2RpZmllZF9kZWJ1ZycgKSxcblx0XHRcdFx0JG10eHQgPSBXUE9uaW9uLnR4dCggJ21vZGlmaWVkX2RlYnVnJyApO1xuXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICR2YXJzICkge1xuXHRcdFx0XHRpZiggJHZhcnMuaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHZhcnNbICRrZXkgXSApICkge1xuXHRcdFx0XHRcdGxldCAkZGF0YSAgICAgICAgICAgICAgICAgICAgICAgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICR2YXJzWyAka2V5IF0gKTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdICAgICAgICAgID0ge307XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJHV0eHQgXSA9ICRkYXRhLmRlYnVnX2luZm8gfHwgJGRhdGE7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJG10eHQgXSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gPSAkanNvbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3VzdG9tIEFqYXggV3JhcHBlciBGb3IgalF1ZXJ5LkFqYXgoKVxuXHQgKiBAcGFyYW0gJGFjdGlvblxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICogQHBhcmFtICRvblN1Y2Nlc3Ncblx0ICogQHBhcmFtICRvbkVycm9yXG5cdCAqIEBwYXJhbSAkb25BbHdheXNcblx0ICovXG5cdHN0YXRpYyBhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30sICRvblN1Y2Nlc3MgPSBmYWxzZSwgJG9uRXJyb3IgPSBmYWxzZSwgJG9uQWx3YXlzID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRkZWZhdWx0cyA9IHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0dXJsOiBXUE9uaW9uLm9wdGlvbiggJ2FqYXhfdXJsJyApLFxuXHRcdFx0b25TdWNjZXNzOiBmYWxzZSxcblx0XHRcdG9uQWx3YXlzOiBmYWxzZSxcblx0XHRcdG9uRXJyb3I6IGZhbHNlLFxuXHRcdH07XG5cblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGFjdGlvbiApICkge1xuXHRcdFx0JGRhdGEgPSAkYWN0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZGVmYXVsdHMudXJsICs9ICcmJyArIFdQT25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApICsgJz0nICsgJGFjdGlvbjtcblx0XHR9XG5cblx0XHQkZGVmYXVsdHMgID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJGRlZmF1bHRzLCAkZGF0YSApO1xuXHRcdCRvblN1Y2Nlc3MgPSAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRvblN1Y2Nlc3MgKSB8fCBmYWxzZSA9PT0gJG9uU3VjY2VzcyApID8gJGRlZmF1bHRzLm9uU3VjY2VzcyA6ICRvblN1Y2Nlc3M7XG5cdFx0JG9uQWx3YXlzICA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG9uRXJyb3IgKSB8fCBmYWxzZSA9PT0gJG9uRXJyb3IgKSA/ICRkZWZhdWx0cy5vbkFsd2F5cyA6ICRvbkFsd2F5cztcblx0XHQkb25FcnJvciAgID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkb25BbHdheXMgKSB8fCBmYWxzZSA9PT0gJG9uQWx3YXlzICkgPyAkZGVmYXVsdHMub25FcnJvciA6ICRvbkVycm9yO1xuXHRcdGxldCAkYWpheCAgPSBqUXVlcnkuYWpheCggJGRlZmF1bHRzICk7XG5cblxuXHRcdGlmKCAkb25TdWNjZXNzICkge1xuXHRcdFx0JGFqYXguZG9uZSggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uU3VjY2VzcywgcmVzICkgKTtcblx0XHR9XG5cblx0XHRpZiggJG9uRXJyb3IgKSB7XG5cdFx0XHQkYWpheC5mYWlsKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25FcnJvciwgcmVzICkgKTtcblx0XHR9XG5cblx0XHRpZiggJG9uQWx3YXlzICkge1xuXHRcdFx0JGFqYXguYWx3YXlzKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25BbHdheXMsIHJlcyApICk7XG5cdFx0fVxuXHRcdHJldHVybiAkYWpheDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFdQT25pb24gVGVtcGxhdGUgZm9yIHVuZGVyc2NvcmUuXG5cdCAqIEBwYXJhbSAkaWRcblx0ICogQHJldHVybnMge2Z1bmN0aW9uKCo9KTogKn1cblx0ICovXG5cdHN0YXRpYyB0ZW1wbGF0ZSggJGlkICkge1xuXHRcdGxldCBjb21waWxlZCxcblx0XHRcdG9wdGlvbnMgPSB7XG5cdFx0XHRcdGV2YWx1YXRlOiAvPCMoW1xcc1xcU10rPykjPi9nLFxuXHRcdFx0XHRpbnRlcnBvbGF0ZTogL1xce1xce1xceyhbXFxzXFxTXSs/KVxcfVxcfVxcfS9nLFxuXHRcdFx0XHRlc2NhcGU6IC9cXHtcXHsoW15cXH1dKz8pXFx9XFx9KD8hXFx9KS9nLFxuXHRcdFx0XHR2YXJpYWJsZTogJ2RhdGEnXG5cdFx0XHR9O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhICkge1xuXHRcdFx0Y29tcGlsZWQgPSBjb21waWxlZCB8fCB3aW5kb3cud3Bvbmlvbi5fLnRlbXBsYXRlKCAkaWQsIG9wdGlvbnMgKTtcblx0XHRcdHJldHVybiBjb21waWxlZCggZGF0YSApO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBXUG9uaW9uIFNldHRpbmdzIC8gTWV0YWJveCBTdWJtZW51IEluZGljYXRvci5cblx0ICogQHBhcmFtICRlbGVtc1xuXHQgKi9cblx0c3RhdGljIHN1Ym1lbnVfaW5kaWNhdG9yKCAkZWxlbXMgKSB7XG5cdFx0JGVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJHRvZ2dsZSAgID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdkYXRhLXRvZ2dsZS1jbGFzcycgKTtcblx0XHRcdFx0bGV0ICRleF9jbGFzcyA9IGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnY2xhc3MnICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnY2xhc3MnLCAkdG9nZ2xlICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnZGF0YS10b2dnbGUtY2xhc3MnLCAkZXhfY2xhc3MgKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsIi8qKlxuICogV1BPbmlvbiBEZWJ1ZyBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHQvKipcblx0ICogQWRkIEEgRGVidWcgSW5mbyBUbyBEZWJ1ZyBBcnJheS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICR2YWx1ZVxuXHQgKi9cblx0c3RhdGljIGFkZCggJGtleSwgJHZhbHVlICkge1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSAkdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJHZhbHVlLCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIEEgRGVidWcgSW5mbyBCYXNlZCBvbiBLZXkuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHN0YXRpYyBnZXQoICRrZXksICRkZWZhdWx0ID0gZmFsc2UgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXHRcdHJldHVybiAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSA/ICRkZWZhdWx0IDogdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF07XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vaGVscGVycy9kZXBlbmRlbmN5JztcblxuLyoqXG4gKiBXUE9uaW9uIERlcGVuZGVuY3kgQ2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRlbGVtZW50XG5cdCAqIEBwYXJhbSBwYXJhbVxuXHQgKiBAcGFyYW0gJGNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRlbGVtZW50ID0gdW5kZWZpbmVkLCBwYXJhbSA9IHt9LCAkY29uZmlnID0ge30gKSB7XG5cdFx0dGhpcy5wYXJhbSAgICAgICAgID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggeyBuZXN0YWJsZTogZmFsc2UsIHBhcmVudDogZmFsc2UgfSwgcGFyYW0gKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuYmFzZSAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuYmFzZS4kZWwgICAgICA9ICRlbGVtZW50O1xuXHRcdHRoaXMuYmFzZS5pbml0ICAgICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS5ydWxlc2V0ID0galF1ZXJ5LmRlcHMuY3JlYXRlUnVsZXNldCgpO1xuXHRcdFx0dGhpcy5iYXNlLmRlcFJvb3QoKTtcblx0XHRcdGxldCAkX2RlcHNfZnVuY3Rpb25zID0gd2luZG93Lndwb25pb24uXy5tZXJnZSgge1xuXHRcdFx0XHRzaG93OiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdGVsLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0aGlkZTogKCBlbCApID0+IHtcblx0XHRcdFx0XHRlbC5zbGlkZVVwKCk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5hZGRDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsb2c6IGZhbHNlLFxuXHRcdFx0XHRjaGVja1RhcmdldHM6IGZhbHNlLFxuXHRcdFx0fSwgJGNvbmZpZyApO1xuXG5cdFx0XHRqUXVlcnkuZGVwcy5lbmFibGUoIHRoaXMuYmFzZS4kZWwsIHRoaXMuYmFzZS5ydWxlc2V0LCAkX2RlcHNfZnVuY3Rpb25zICk7XG5cdFx0fTtcblx0XHR0aGlzLmJhc2UuaW5zdGFuY2UgPSBbXTtcblx0XHR0aGlzLmJhc2UuZGVwUm9vdCAgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmJhc2UuJGVsLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24taGFzLWRlcGVuZGVuY3knICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHRoaXMuYmFzZS5pbnN0YW5jZSA9IG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koIGpRdWVyeSggdGhpcyApLCAkdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0XHRcdG5lc3RhYmxlOiAkdGhpcy5wYXJhbS5uZXN0YWJsZSxcblx0XHRcdFx0XHRcdHBhcmVudDogKCB0cnVlID09PSAkdGhpcy5wYXJhbS5uZXN0YWJsZSApID8gJHRoaXMuYmFzZS4kZWwgOiAkdGhpcy5wYXJhbS5wYXJlbnQsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fTtcblx0XHR0aGlzLmJhc2UuaW5pdCgpO1xuXHR9XG59XG4iLCIvKiBnbG9iYWwgc3dhbDp0cnVlICovXG5cbmNvbnN0IGlzX2pxdWVyeSA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2pxdWVyeTtcblxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi9kZWJ1Zyc7XG5pbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi9tb2R1bGUnO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdGlvbiBmcm9tICcuLi9jb3JlL3ZhbGlkYXRpb24nO1xuXG4vKipcbiAqIFdQT25pb24gRmllbGQgQWJzdHJhY3QgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHQvKipcblx0ICogV1BPbmlvbiBGaWVsZCBDbGFzcyBDb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtICRzZWxlY3RvclxuXHQgKiBAcGFyYW0gJGNvbnRleHRcblx0ICogQHBhcmFtICRjb25maWdcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0ID0gbnVsbCwgJGNvbmZpZyA9IG51bGwgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQgKTtcblx0XHR0aGlzLnNldF9hcmdzKCBmYWxzZSApO1xuXHRcdHRoaXMuZmllbGRfZGVidWcoKTtcblx0XHR0aGlzLmNvbmZpZyA9ICRjb25maWc7XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5qc19lcnJvcl9oYW5kbGVyKCk7XG5cdFx0dGhpcy5qc192YWxpZGF0b3IoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiBVc2VkIFRvIEluaXQgRmllbGQuXG5cdCAqIFRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGV4dGVuZGluZyBjbGFzcy5cblx0ICovXG5cdGluaXQoKSB7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBqYXZhc2NyaXB0IGVycm9yIHBsYWNlbWVudC5cblx0ICogQHBhcmFtIGVyclxuXHQgKi9cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIEFuIFRyaWdnZXIgSG9vayBUbyBIYW5kbGUgSlMgRXJyb3IgUGxhY2VtZW50XG5cdCAqIEB1c2UgY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIGVsZW1lbnRcblx0ICovXG5cdGpzX2Vycm9yX2hhbmRsZXIoIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudC5vbiggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgJz4gLndwb25pb24tZmllbGRzZXQgOmlucHV0JywgKCBlLCBkYXRhICkgPT4gdGhpcy5qc19lcnJvciggZGF0YSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHZhbGlkYXRpb24gaXMgcmVxdWlyZWQgZm9yIGN1cnJlbnQgZmllbGQuXG5cdCAqL1xuXHRqc192YWxpZGF0b3IoKSB7XG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApICkge1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApIHtcblx0XHRcdFx0dGhpcy5tYXliZV9qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBjdXJyZW50IHBhZ2UgaGFzIGZvcm0gYW5kIGVuYWJsZSB2YWxpZGF0aW9ucy5cblx0ICogQHBhcmFtICRhcmdzXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0bWF5YmVfanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCBXUE9uaW9uX1ZhbGlkYXRpb24uZ2V0X2Zvcm0oKSApIHtcblx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgUnVsZSBUbyBFYWNoIGFuZCBldmVyeSBpbnB1dCB0byB2YWxpZGF0ZSBKUyBMaWIuXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnOmlucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgZnVuY3Rpb24gdXNlZCBieSBlYWNoIGFuZCBldmVyeSBmaWVsZC5cblx0ICogVGhpcyBmdW5jdGlvbiB3aWxsIGFsc28gY29udmVydCBTaW1wbGUgSlMgZnVuY3Rpb24gY29kZSBpbnRvIGNhbGxhYmxlIEpTIGNvZGUgJiByZXR1cm5zIGl0XG5cdCAqIFBsdXMgaXQgYWxzbyBzdG9yZSB0aGUgdmFsdWUgaW4gZGVidWcgYXJyYXkgaWYgZGVidWcgZW5hYmxlZC5cblx0ICogQHBhcmFtICRhcmdcblx0ICogQHBhcmFtICRrZXlcblx0ICogQHJldHVybnMgeyp8JGRhdGF9XG5cdCAqL1xuXHRoYW5kbGVfYXJncyggJGFyZywgJGtleSA9IGZhbHNlICkge1xuXHRcdGxldCAkYXJncyAgID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApLFxuXHRcdFx0JGV4aXN0cyA9ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHQkZXhpc3RzICAgICA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHsgJ1BIUCBBcmdzJzoge30sICdKUyBBcmdzJzoge30gfSwgJGV4aXN0cyApO1xuXG5cdFx0aWYoIGZhbHNlID09PSAka2V5ICkge1xuXHRcdFx0JGV4aXN0c1sgJ0pTIEFyZ3MnIF0gPSAkYXJncztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGV4aXN0c1sgJ0pTIEFyZ3MnIF1bICRrZXkgXSA9ICRhcmdzO1xuXHRcdH1cblx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgJGV4aXN0cyApO1xuXHRcdHJldHVybiAkYXJncztcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEZpZWxkIERlYnVnIFBPUFVQLlxuXHQgKi9cblx0ZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIGZhbHNlICE9PSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCAkaW5mbyA9IHRoaXMub3B0aW9uKCAnZGVidWdfaW5mbycgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGluZm8gKSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc0VtcHR5KCAkaW5mbyApICkge1xuXHRcdFx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiAkaW5mbywgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0ICRmb3VuZCA9IGZhbHNlO1xuXHRcdGlmKCAhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdGxldCAkSUQgICA9IHRoaXMuaWQoKSxcblx0XHRcdFx0JGVsZW0gPSBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyAkSUQgKyAnXScgKTtcblx0XHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRcdCRmb3VuZCA9ICRlbGVtO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZm91bmQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHNlICE9PSAkZm91bmQgKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKVxuXHRcdFx0XHQgIC50aXBweSgge1xuXHRcdFx0XHRcdCAgY29udGVudDogJHdwb25pb24udHh0KCAnY2xpY2tfdG9fdmlld19kZWJ1Z19pbmZvJywgJ0NsaWNrIFRvIFZpZXcgRmllbGQgRGVidWcgSW5mbycgKSxcblx0XHRcdFx0XHQgIGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdCAgYXJyb3dUeXBlOiAncm91bmQnLFxuXHRcdFx0XHRcdCAgcGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0XHQgIHRoZW1lOiAnbGlnaHQnLFxuXHRcdFx0XHRcdCAgYW5pbWF0aW9uOiAnc2NhbGUnLFxuXHRcdFx0XHRcdCAgYXBwZW5kVG86IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcblx0XHRcdFx0ICB9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZCAgICAgICAgICA9ICR0aGlzLmlkKCkgKyAnZGVidWdJTkZPJyxcblx0XHRcdFx0XHQkbm90aWNlX3R4dCA9ICc8cCBjbGFzcz1cXCd3cG9uaW9uLWZpZWxkLWRlYnVnLW5vdGljZVxcJz4nICsgJHdwb25pb24ub3B0aW9uKCAnZGVidWdfbm90aWNlJyApICsgJzwvcD4nLFxuXHRcdFx0XHRcdCRlbGVtICAgICAgID0galF1ZXJ5KCAnPGRpdiBpZD1cIicgKyAkZCArICdcIiBjbGFzcz1cIndwb25pb24tZmllbGQtZGVidWctcG9wdXBcIiA+PGRpdiBpZD1cIicgKyAkZCArICdcIiA+PC9kaXY+JyArICRub3RpY2VfdHh0ICsgJzwvZGl2PicgKTtcblx0XHRcdFx0bGV0ICRkYXRhICAgICAgID0gJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICk7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRodG1sOiAkZWxlbSxcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogJHdwb25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0FzIEpTT04nICksXG5cdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRvbk9wZW46ICgpID0+IGpRdWVyeSggJyNzd2FsMi1jb250ZW50ID4gZGl2ID4gIycgKyAkZCApLmpzb25WaWV3KCAkZGF0YSApXG5cdFx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICkgKSArICc8L3RleHRhcmVhPidcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0IC53cG9uaW9uLWZpZWxkLWRlYnVnLWNvZGUtZ2VuJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGxldCAkc3RyaW5nID0gdGhpcy5vcHRpb24oICdkZWJ1Z19maWVsZF9jb2RlJyApO1xuXHRcdFx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1N0cmluZyggJHN0cmluZyApICkge1xuXHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdGh0bWw6ICRzdHJpbmcsXG5cdFx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRcdGhlaWdodEF1dG86IGZhbHNlLFxuXHRcdFx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogR2F0aGVycyBGaWVsZCBPcHRpb25zIERhdGEgZnJvbSB3aW5kb3cud3BvbmlvbiBhcnJheS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRvcHRpb25zKCkge1xuXHRcdGlmKCB0aGlzLl9hcmdzID09PSBmYWxzZSApIHtcblx0XHRcdHRoaXMuX2FyZ3MgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCB0aGlzLmlkKCkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2FyZ3M7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGEgZ2l2ZW4gb3B0aW9uIGtleSBleGlzdHMgYW5kIGlmIHNvIHRoZW4gaXQgcmV0dXJucyBpdCB2YWx1ZVxuXHQgKiBvciBpdCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlLlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRvcHRpb24oICRrZXkgPSAnJywgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRsZXQgJGFyZ3MgPSB0aGlzLm9wdGlvbnMoKTtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkgPyAkYXJnc1sgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBXUE9uaW9uIEpTIEZpZWxkIElEXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0aWQoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQncyBNb2R1bGUgU2x1Zy5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRtb2R1bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnbW9kdWxlJywgZmFsc2UgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkJ3MgUGx1Z2luIFNsdWcuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cGx1Z2luX2lkKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ3BsdWdpbl9pZCcsIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcnMgQW4gQWpheCBBY3Rpb24uXG5cdCAqIEBwYXJhbSAkYWN0aW9uXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKi9cblx0YWpheCggJGFjdGlvbiA9ICcnLCAkZGF0YSA9IHt9ICkge1xuXHRcdGxldCAkYWpheF9rZXkgICAgICAgICA9ICR3cG9uaW9uLm9wdGlvbiggJ2FqYXhfYWN0aW9uX2tleScgKTtcblx0XHRsZXQgJGRlZmF1bHQgICAgICAgICAgPSB7XG5cdFx0XHRwbHVnaW5faWQ6IHRoaXMucGx1Z2luX2lkKCksXG5cdFx0XHRtb2R1bGU6IHRoaXMubW9kdWxlKCksXG5cdFx0fTtcblx0XHQkZGVmYXVsdFsgJGFqYXhfa2V5IF0gPSAkYWN0aW9uO1xuXHRcdCRkYXRhLmRhdGEgICAgICAgICAgICA9ICggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRkYXRhLmRhdGEgKSApID8gd2luZG93Lndwb25pb24uXy5tZXJnZSggJGRlZmF1bHQsICRkYXRhLmRhdGEgKSA6ICRkZWZhdWx0O1xuXG5cdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICRkYXRhICk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdHMgQSBTaW5nbGUgRWxlbWVudC5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0aW5pdF9zaW5nbGVfZmllbGQoICR0eXBlLCAkZWxlbSApIHtcblx0XHR3cG9uaW9uX2luaXRfZmllbGQoICR0eXBlLCAkZWxlbSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIEEgU2luZ2xlIEZpZWxkIFR5cGVcblx0ICogQHVzZXMgaW5pdF9zaW5nbGVfZmllbGQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICovXG5cdGluaXRfZmllbGQoICRlbGVtLCAkdHlwZSApIHtcblx0XHRpZiggIWlzX2pxdWVyeSggJGVsZW0gKSApIHtcblx0XHRcdCRlbGVtID0gdGhpcy5lbGVtZW50LmZpbmQoICRlbGVtICk7XG5cdFx0fVxuXG5cdFx0aWYoICRlbGVtLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkZWxlbS5lYWNoKCAoIGksIGUgKSA9PiB0aGlzLmluaXRfc2luZ2xlX2ZpZWxkKCAkdHlwZSwgalF1ZXJ5KCBlICkgKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWxvYWRzIEFsbCBGaWVsZCBUeXBlIEluc2lkZSBUaGlzIEZpZWxkLlxuXHQgKi9cblx0cmVsb2FkKCkge1xuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX3JlbG9hZCcgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYWNjb3JkaW9uJywgJ2FjY29yZGlvbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2tncm91bmQnLCAnYmFja2dyb3VuZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2t1cCcsICdiYWNrdXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jaGVja2JveCcsICdjaGVja2JveF9yYWRpbycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXJhZGlvJywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2xvbmUnLCAnY2xvbmVfZWxlbWVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BhbGV0dGUnLCAnY29sb3JfcGFsZXR0ZScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BpY2tlcicsICdjb2xvcl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zZWxlY3QnLCAnc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaWNvbl9waWNrZXInLCAnaWNvbl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicsICdmb250X3NlbGVjdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ3JvdXAnLCAnZ3JvdXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0Om5vdCgud3Bvbmlvbi1pbnB1dG1hc2spJywgJ3RleHQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0YXJlYScsICd0ZXh0YXJlYScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlX3NlbGVjdCcsICdpbWFnZV9zZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zd2l0Y2hlcicsICdzd2l0Y2hlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2VkaXRvcicsICd3cF9lZGl0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1maWVsZHNldCcsICdmaWVsZHNldCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2xpbmsnLCAnd3BfbGlua3MnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1rZXlfdmFsdWUnLCAna2V5dmFsdWVfcGFpcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWRhdGVfcGlja2VyJywgJ2RhdGVfcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ2FsbGVyeScsICdnYWxsZXJ5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdXBsb2FkJywgJ3VwbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlJywgJ2ltYWdlX3VwbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJ1dHRvbl9zZXQnLCAnYnV0dG9uX3NldCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRhYicsICdqcXVlcnlfdGFiJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ29vZ2xlX21hcHMnLCAnZ29vZ2xlX21hcHMnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zb3J0ZXInLCAnc29ydGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdHlwb2dyYXBoeScsICd0eXBvZ3JhcGh5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtb2VtYmVkJywgJ29lbWJlZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWhlYWRpbmcnLCAnaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN1YmhlYWRpbmcnLCAnc3ViaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbnRlbnQnLCAnY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWphbWJvX2NvbnRlbnQnLCAnamFtYm9fY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW5vdGljZScsICdub3RpY2UnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1maWVsZC10b29sdGlwJywgJ3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24taGVscCcsICd0b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLXdyYXAtdG9vbHRpcCcsICd0b29sdGlwJyApO1xuXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnaW5wdXRbZGF0YS13cG9uaW9uLWlucHV0bWFza10nLCAnaW5wdXRtYXNrJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3QyJywgJ3NlbGVjdDInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLmNob3NlbicsICdjaG9zZW4nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdGl6ZScsICdzZWxlY3RpemUnICk7XG5cblxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfcmVsb2FkJyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgQXJncyBEYXRhLlxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICovXG5cdHNldF9hcmdzKCAkYXJncyApIHtcblx0XHR0aGlzLl9hcmdzID0gJGFyZ3M7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCBQYXJlbnQgQnkgZGF0YS13cG9uaW9uLWpzaWQgYXR0cmlidXRlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp8alF1ZXJ5fEhUTUxFbGVtZW50fVxuXHQgKi9cblx0Z2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggJGVsZW0gKSB7XG5cdFx0bGV0ICRJRCA9ICR3cG9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0cmV0dXJuIGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJElEICsgJ1wiXScgKTtcblx0fVxufVxuIiwiLyoqXG4gKiBXUE9uaW9uIE1vZHVsZSBKUyBDbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdC8qKlxuXHQgKiBXUE9uaW9uIE1vZHVsZSBKUyBDbGFzcyBDb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtICRzZWxlY3RvclxuXHQgKiBAcGFyYW0gJGNvbnRleHRcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0ID0gbnVsbCApIHtcblx0XHRpZiggISRzZWxlY3Rvci5qUXVlcnkgKSB7XG5cdFx0XHQkc2VsZWN0b3IgPSBqUXVlcnkoICRzZWxlY3RvciApO1xuXHRcdH1cblx0XHR0aGlzLnNldF9lbGVtZW50KCAkc2VsZWN0b3IgKTtcblx0XHR0aGlzLnNldF9jb250eHQoICRjb250ZXh0ICk7XG5cdFx0dGhpcy5tb2R1bGVfaW5pdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIE1vZHVsZSBJbml0IEZ1bmN0aW9uLlxuXHQgKi9cblx0bW9kdWxlX2luaXQoKSB7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBFbGVtZW50IEFyZ3MuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0c2V0X2VsZW1lbnQoICRlbGVtICkge1xuXHRcdGlmKCAhJGVsZW0ualF1ZXJ5ICkge1xuXHRcdFx0JGVsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbSA9ICRlbGVtO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgQ29udHh0IEFyZ3MuXG5cdCAqIEBwYXJhbSAkY29udHh0XG5cdCAqL1xuXHRzZXRfY29udHh0KCAkY29udHh0ICkge1xuXHRcdHRoaXMuY29udGV4dCA9ICRjb250eHQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBIb29rIENsYXNzLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldCBob29rKCkge1xuXHRcdHJldHVybiB3aW5kb3cud3Bvbmlvbi5ob29rcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEVsZW1lbnQgVmFyaWFibGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQgZWxlbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgQ29udHh0IFZhcmlhYmxlLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldCBjb250eHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dDtcblx0fVxufVxuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBWYWxpZGF0b3IgSGVscGVyIENsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQT25pb25fVmFsaWRhdG9yIHtcblx0LyoqXG5cdCAqIEhlbHBlciBDbGFzcyBGb3IgV1BPbmlvbiBKUyBGaWVsZCBWYWxpZGF0aW9uLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIGZvcm0gPSBmYWxzZSApIHtcblx0XHR0aGlzLmZvcm0gID0gKCBmYWxzZSA9PT0gZm9ybSApID8gV1BPbmlvbl9WYWxpZGF0b3IuZ2V0X2Zvcm0oKSA6IGZvcm07XG5cdFx0dGhpcy5ydWxlcyA9IHtcblx0XHRcdGludmFsaWRIYW5kbGVyOiAoKSA9PiB7XG5cdFx0XHRcdGpRdWVyeSggJyNwdWJsaXNoJyApLnJlbW92ZUNsYXNzKCAnYnV0dG9uLXByaW1hcnktZGlzYWJsZWQnICk7XG5cdFx0XHRcdGpRdWVyeSggJyNhamF4LWxvYWRpbmcnICkuYXR0ciggJ3N0eWxlJywgJycgKTtcblx0XHRcdFx0dGhpcy5mb3JtLnNpYmxpbmdzKCAnI21lc3NhZ2UnICkucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuZm9ybS5iZWZvcmUoICc8ZGl2IGlkPVwibWVzc2FnZVwiIGNsYXNzPVwiZXJyb3JcIj48cD4nICsgJHdwb25pb24udHh0KCAndmFsaWRhdGlvbl9zdW1tYXJ5JyApICsgJzwvcD48L2Rpdj4nICk7XG5cdFx0XHR9LFxuXHRcdFx0aWdub3JlOiAnLndwb25pb24tZGVwZW5kZW50LC53cG9uaW9uLXZhbGlkYXRpb24taWdub3JlJyxcblx0XHRcdGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiggZXJyb3IsIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGVsZW1lbnQudHJpZ2dlciggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgeyBlcnJvciwgZWxlbWVudCB9ICk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3JDbGFzczogJ3dwb25pb24tZXJyb3InLFxuXHRcdFx0ZXJyb3JFbGVtZW50OiAncCdcblx0XHR9O1xuXG5cdFx0aWYoIHRoaXMuZm9ybSApIHtcblx0XHRcdHRoaXMuZm9ybS52YWxpZGF0ZSggdGhpcy5ydWxlcyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kcyAmIFJldHVybnMgZm9ybSBEYXRhLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBnZXRfZm9ybSgpIHtcblx0XHRpZiggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSN1cGRhdGUtbmF2LW1lbnUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3VwZGF0ZS1uYXYtbWVudScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSNwb3N0JyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS5sZW5ndGggPiAwICYmIGpRdWVyeSggJ2lucHV0I29yaWdpbmFsX3B1Ymxpc2gnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3Bvc3QnICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApID8galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkgOiBmYWxzZTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYWNjb3JkaW9uKCB7XG5cdFx0XHRcdGhlYWRlcjogJz4gLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdGFuaW1hdGU6IDE1MCxcblx0XHRcdFx0aGVpZ2h0U3R5bGU6ICdjb250ZW50Jyxcblx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHQnaGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctcmlnaHQnLFxuXHRcdFx0XHRcdCdhY3RpdmVIZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1kb3duJ1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmKCAhalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdpc19vcGVuJyApICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oICdvcHRpb24nLCAnYWN0aXZlJywgZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBKYXZhc2NyaXB0IEVycm9yIFBsYWNlbWVudC5cblx0ICogQHBhcmFtIGVyclxuXHQgKi9cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmKCAkZWxlbSApIHtcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdhY2NvcmRpb24nLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2JhY2tncm91bmQnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXG5cbi8qIGdsb2JhbCB0aXBweTp0cnVlICovXG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy50b29sdGlwKCk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVfYmFja3VwX2ltcG9ydCggZS5jdXJyZW50VGFyZ2V0ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdhLmRvd25sb2FkX2JhY2t1cCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0bGV0ICRmaWxlID0gdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKTtcblx0XHRcdCRmaWxlICAgICA9ICRmaWxlICsgJy0nICsgdGhpcy5tb2R1bGUoKTtcblx0XHRcdGxldCBkYXRlICA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgc3RyICAgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyAoIGRhdGUuZ2V0TW9udGgoKSArIDEgKSArICctJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy0nICsgZGF0ZS5nZXRIb3VycygpICsgZGF0ZS5nZXRNaW51dGVzKCkgKyBkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdCRmaWxlICAgICA9ICRmaWxlICsgJy0nICsgc3RyO1xuXHRcdFx0dGhpcy5mb3JjZV9kb3dubG9hZCggSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX3RleHRhcmVhIHRleHRhcmVhJyApLmh0bWwoKSApLCAkZmlsZSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnYS5uZXdfYmFja3VwICcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5ibG9ja19mb3JtKCk7XG5cdFx0XHR0aGlzLmFqYXgoICduZXctbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCB0cnVlICk7XG5cdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMnICkuaHRtbCggZS5kYXRhICk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy5kZWxldGVfYmFja3VwJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5ibG9ja19mb3JtKCk7XG5cdFx0XHRsZXQgJGlucyA9IGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLmRlbGV0ZV9iYWNrdXAnICkudGlwcHlfZ2V0KCk7XG5cdFx0XHRpZiggJGlucy5pbnN0YW5jZXNbIDAgXSApIHtcblx0XHRcdFx0JGlucy5pbnN0YW5jZXNbIDAgXS5kZXN0cm95KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFqYXgoICdkZWxldGUtbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHRcdGJhY2t1cF9pZDogalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzJyApLmh0bWwoIGUuZGF0YSApO1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvbkFsd2F5czogKCkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcucmVzdG9yZV9iYWNrdXAnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLnJlc3RvcmVfYmFja3VwKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnYmx1cicsICcucmVzdG9yZV90ZXh0YXJlYSB0ZXh0YXJlYScsICggZSApID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIEpTT04ucGFyc2UoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCkgKSApO1xuXHRcdFx0XHRqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCggJycgKS5odG1sKCAnJyApO1xuXHRcdFx0fSBjYXRjaCggZXJyb3IgKSB7XG5cdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggdGhpcy5vcHRpb24oICdpbnZhbGlkX2Zvcm1hdCcgKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZXMgU3dhbCBFcnJvciBNc2cuXG5cdCAqIEBwYXJhbSBtc2dcblx0ICovXG5cdHN3YWxfZXJyb3IoIG1zZyApIHtcblx0XHRzd2FsKCB7XG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0dGl0bGU6IG1zZ1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFRvb2xUaXAgaW5zdGFuY2UuXG5cdCAqIEBwYXJhbSByZW1vdmVcblx0ICovXG5cdHRvb2x0aXAoIHJlbW92ZSA9IGZhbHNlICkge1xuXHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0aWYoIHRydWUgPT09IHJlbW92ZSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cyBsaScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0ICRlbGVtID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gYScgKVsgMCBdO1xuXHRcdFx0XHQkZWxlbS5fdGlwcHkuZGVzdHJveSgpO1xuXHRcdFx0fSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMgbGknICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR0aGlzLnNob3dfdG9vbHRpcCggalF1ZXJ5KCB0aGlzICkuZmluZCggJz5hJyApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEJsb2NrcyBBIEZvcm1cblx0ICovXG5cdGJsb2NrX2Zvcm0oKSB7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLmZpbmQoICdidXR0b24nICkuYXR0ciggJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuYmxvY2tzIGEgZm9ybVxuXHQgKi9cblx0dW5ibG9ja19mb3JtKCkge1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLnJlbW92ZUF0dHIoICdkaXNhYmxlZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb3JjZXMgRG93bmxvYWQgRXhwb3J0IERhdGEuXG5cdCAqIEBwYXJhbSBleHBvcnRPYmpcblx0ICogQHBhcmFtIGV4cG9ydE5hbWVcblx0ICovXG5cdGZvcmNlX2Rvd25sb2FkKCBleHBvcnRPYmosIGV4cG9ydE5hbWUgKSB7XG5cdFx0bGV0IGRhdGFTdHIgICAgICAgICAgICA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoIEpTT04uc3RyaW5naWZ5KCBleHBvcnRPYmogKSApO1xuXHRcdGxldCBkb3dubG9hZEFuY2hvck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYScgKTtcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCAnaHJlZicsIGRhdGFTdHIgKTtcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCAnZG93bmxvYWQnLCBleHBvcnROYW1lICsgJy5qc29uJyApO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRvd25sb2FkQW5jaG9yTm9kZSApOyAvLyByZXF1aXJlZCBmb3IgZmlyZWZveFxuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5jbGljaygpO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5yZW1vdmUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXN0b3JlcyBCYWNrdXAgRGF0YS5cblx0ICogQHBhcmFtIGJhY2t1cF9pZFxuXHQgKi9cblx0cmVzdG9yZV9iYWNrdXAoIGJhY2t1cF9pZCApIHtcblx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHR0aGlzLmFqYXgoICdyZXN0b3JlLW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcblx0XHRcdFx0YmFja3VwX2lkOiBiYWNrdXBfaWQsXG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGUuZGF0YSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEJhY2t1cCBJbXBvcnQgRmlsZSBhbmQgcmVzdG9yZXMgaXQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0aGFuZGxlX2JhY2t1cF9pbXBvcnQoICRlbGVtICkge1xuXHRcdGlmKCAkZWxlbS5maWxlcyAmJiAkZWxlbS5maWxlc1sgMCBdICkge1xuXHRcdFx0bGV0ICRmaWxlID0gJGVsZW0uZmlsZXNbIDAgXTtcblxuXHRcdFx0aWYoICRmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi9qc29uJyApIHtcblx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCB0aGlzLm9wdGlvbiggJ2ludmFsaWRfZm9ybWF0JyApICk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGxldCByZWFkZXIgICAgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0XHRyZWFkZXIub25sb2FkID0gKCBlICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIEpTT04ucGFyc2UoIGUudGFyZ2V0LnJlc3VsdCApICk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCAkZmlsZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93J3MgVG9vbFRpcFxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdHNob3dfdG9vbHRpcCggJGVsZW0gKSB7XG5cdFx0bGV0ICRiYWNrdXBpZCA9ICRlbGVtLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApO1xuXHRcdGxldCAkYXBwZW5kVE8gPSB0aGlzLmVsZW1lbnRbIDAgXTtcblx0XHR0aXBweSggJGVsZW1bIDAgXSwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRhcHBlbmRUbzogJGFwcGVuZFRPLFxuXHRcdFx0YXJyb3dUeXBlOiAncm91bmQnLFxuXHRcdFx0Y29udGVudDogJzxidXR0b24gZGF0YS1iYWNrdXBpZD1cIicgKyAkYmFja3VwaWQgKyAnXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzdG9yZV9iYWNrdXAgYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNtYWxsXCI+PGkgY2xhc3M9XCJkYXNoaWNvbnMtaW1hZ2Utcm90YXRlIGRhc2hpY29uc1wiPjwvaT4gPC9idXR0b24+IHwgPGJ1dHRvbiBkYXRhLWJhY2t1cGlkPVwiJyArICRiYWNrdXBpZCArICdcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGVfYmFja3VwIGJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5IGJ1dHRvbi1zbWFsbFwiPjxpIGNsYXNzPVwiZGFzaGljb25zLXRyYXNoIGRhc2hpY29uc1wiPjwvaT4gPC9idXR0b24+Jyxcblx0XHRcdGludGVyYWN0aXZlOiB0cnVlLFxuXHRcdFx0dGhlbWU6ICd0cmFuc2x1Y2VudCcsXG5cdFx0XHRvblNob3duOiAoKSA9PiB7XG5cdFx0XHRcdGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLmRlbGV0ZV9iYWNrdXAnICkudGlwcHkoIHtcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHRhcnJvd1R5cGU6ICdza2lubnknLFxuXHRcdFx0XHRcdGFwcGVuZFRvOiAkYXBwZW5kVE8sXG5cdFx0XHRcdFx0Y29udGVudDogJHdwb25pb24udHh0KCAnZGVsZXRlJyApLFxuXHRcdFx0XHRcdHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZTogZmFsc2UsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLnJlc3RvcmVfYmFja3VwJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0YXJyb3dUeXBlOiAnc2tpbm55Jyxcblx0XHRcdFx0XHRhcHBlbmRUbzogJGFwcGVuZFRPLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ3Jlc3RvcmUnICksXG5cdFx0XHRcdFx0dGhlbWU6ICdsaWdodC1ib3JkZXInLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sXG5cdFx0XHRwbGFjZW1lbnQ6ICdyaWdodCcsXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRXh0cmEgVmFsdWUuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0X2V4dHJhX3ZhbHVlKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QgaW5wdXQjcG9zdF9JRCcgKS5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSNwb3N0IGlucHV0I3Bvc3RfSUQnICkudmFsKCk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2JhY2t1cCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMucmVtb3ZlX2FjdGl2ZV9jbGFzcygpO1xuXHRcdHRoaXMuYWRkX2FjdGl2ZV9jbGFzcygpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZV9hY3RpdmVfY2xhc3MoKTtcblx0XHRcdHRoaXMuYWRkX2FjdGl2ZV9jbGFzcygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgQWN0aXZlIENsYXNzLlxuXHQgKi9cblx0cmVtb3ZlX2FjdGl2ZV9jbGFzcygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGUgPSBqUXVlcnkoIGUgKTtcblx0XHRcdGlmKCAhJGUuaXMoICc6Y2hlY2tlZCcgKSApIHtcblx0XHRcdFx0JGUucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9uKCAnYWN0aXZlJyApICk7XG5cdFx0XHRcdCRlLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCB0aGlzLm9wdGlvbiggJ2luYWN0aXZlJyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgQWN0aXZlIENsYXNzLlxuXHQgKi9cblx0YWRkX2FjdGl2ZV9jbGFzcygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGUgPSBqUXVlcnkoIGUgKTtcblx0XHRcdGlmKCAkZS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0XHQkZS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyggdGhpcy5vcHRpb24oICdhY3RpdmUnICkgKTtcblx0XHRcdFx0JGUucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9uKCAnaW5hY3RpdmUnICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdidXR0b25fc2V0JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGN1c3RvbV9pbnB1dCA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0bGV0ICRyYWRpb3MgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dJyApO1xuXHRcdFx0bGV0ICRjaGVja2JveCAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyApO1xuXG5cdFx0XHQkY3VzdG9tX2lucHV0LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1uYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnICkgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHR9ICk7XG5cblxuXHRcdFx0JHJhZGlvcy5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkY3VzdG9tX2lucHV0LnJlbW92ZUF0dHIoICduYW1lJyApO1xuXHRcdFx0XHRcdFx0bGV0ICRpID0galF1ZXJ5KCBlICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdFx0XHRcdCRpLmF0dHIoICduYW1lJywgJGkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkcmFkaW9zLm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHQkY3VzdG9tX2lucHV0LnJlbW92ZUF0dHIoICduYW1lJyApO1xuXHRcdFx0XHRcdGxldCAkaSA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdFx0XHQkaS5hdHRyKCAnbmFtZScsICRpLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkY2hlY2tib3guZWFjaCggKCBpLCBlICkgPT4ge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCBlICkuaXMoICc6Y2hlY2tlZCcgKSApIHtcblx0XHRcdFx0XHRpZiggalF1ZXJ5KCBlICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5KCBlICkucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHRcdFx0XHRsZXQgJGkgPSBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0XHRcdFx0JGkuYXR0ciggJ25hbWUnLCAkaS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRjaGVja2JveC5vbiggJ2NsaWNrJywgKCBlICkgPT4ge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblx0XHRcdFx0XHRsZXQgJGkgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHRcdFx0JGkuYXR0ciggJ25hbWUnLCAkaS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjaGVja2JveF9yYWRpbycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgPSB0aGlzLm9wdGlvbiggJ2Nob3NlbicsIHt9ICk7XG5cblx0XHQkYXJnID0gdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJ2Nob3NlbicgKTtcblx0XHR0aGlzLmVsZW1lbnQuY2hvc2VuKCAkYXJnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2Nob3NlbicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG4vKiBnbG9iYWwgd3Bvbmlvbl9maWVsZDp0cnVlICovXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnICAgICAgICA9IHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnY2xvbmUnLCB7fSApICk7XG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRjbG9uZV93cmFwID0gJGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLWNsb25lLXdyYXAnICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLWFkZF0nICksXG5cdFx0XHQvLyRyZW1vdmVfYnRuID0gJGNsb25lX3dyYXAuZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtcmVtb3ZlXScgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gKCAkYXJnLmxpbWl0ICE9PSB1bmRlZmluZWQgKSA/ICRhcmcubGltaXQgOiBmYWxzZSxcblx0XHRcdC8vJGlzX3RvYXN0ICAgPSAoICRhcmcudG9hc3RfZXJyb3IgIT09IHVuZGVmaW5lZCApID8gJGFyZy50b2FzdF9lcnJvciA6IHRydWUsXG5cdFx0XHQkZXJvcl9tc2cgICA9ICRhcmcuZXJyb3JfbXNnLFxuXHRcdFx0JHNvcnQgICAgICAgPSAoICRhcmcuc29ydCAhPT0gZmFsc2UgKSA/IHtcblx0XHRcdFx0aXRlbXM6ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRcdGhhbmRsZTogJy53cG9uaW9uLWZpZWxkLWNsb25lLXNvcnRlcicsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnd3Bvbmlvbi1jbG9uZXItcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRzdGFydDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICksXG5cdFx0XHRcdHN0b3A6ICggZXZlbnQsIHVpICkgPT4ge1xuXHRcdFx0XHRcdCRlbGVtLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdFx0dWkuaXRlbS5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9IDogZmFsc2U7XG5cblx0XHQkY2xvbmVfd3JhcC5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiAkYWRkX2J0bixcblx0XHRcdGxpbWl0OiAkbGltaXQsXG5cdFx0XHRjbG9uZV9lbGVtOiAnLndwb25pb24tZmllbGQtY2xvbmUnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWNsb25lLWFjdGlvbiA+IC53cG9uaW9uLXJlbW92ZScsXG5cdFx0XHR0ZW1wbGF0ZTogJHRoaXMub3B0aW9uKCAnY2xvbmVfdGVtcGxhdGUnICksXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlICkgPT4ge1xuXHRcdFx0XHQkZWxlbS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR3cG9uaW9uX2ZpZWxkKCAkZS5maW5kKCAnPiBkaXYud3Bvbmlvbi1maWVsZC1jbG9uZTpsYXN0LWNoaWxkJyApICkucmVsb2FkKCk7XG5cdFx0XHR9LFxuXHRcdFx0b25SZW1vdmVBZnRlcjogKCkgPT4gJGVsZW0udHJpZ2dlciggJ2NoYW5nZScgKSxcblx0XHRcdHNvcnRhYmxlOiAkc29ydCxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoICRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLnByZXBlbmQoIGpRdWVyeSggJGVyb3JfbXNnICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UoICRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQsIGRpdi5ub3RpY2UnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHNob3dfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuc2hvdyxcblx0XHRcdGhpZGVfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuaGlkZSxcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjbG9uZV9lbGVtZW50JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjb2xvcl9wYWxldHRlJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWNvbG9yLXBpY2tlci1lbGVtZW50JyApLndwQ29sb3JQaWNrZXIoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY29udGVudCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnICksXG5cdFx0XHQkdmlldztcblxuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHNldHRpbmdzLnRoZW1lICkgKSB7XG5cdFx0XHQkdmlldyA9ICRzZXR0aW5ncy50aGVtZTtcblx0XHRcdGRlbGV0ZSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR2aWV3ID0gJ2RlZmF1bHQnO1xuXHRcdH1cblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdC5hcHBlbmQoIGpRdWVyeSggJzxkaXYgY2xhc3M9XCJ3cG9uaW9uLWRhdGVwaWNrZXItJyArICR2aWV3ICsgJ1wiIGlkPVwiJyArIHRoaXMuaWQoKSArICdkYXRlcGlja2VyXCI+PC9kaXY+JyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1kYXRlcGlja2VyLXJhbmdlJyApICkge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKVsgMCBdO1xuXHRcdFx0aWYoICRzZXR0aW5ncy5wbHVnaW5zID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zID0gW107XG5cdFx0XHR9XG5cblx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zLnB1c2goIG5ldyByYW5nZVBsdWdpbiggeyBpbnB1dDogJGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLXRvLWRhdGVdJyApWyAwIF0gfSApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItZnJvbS1kYXRlXScgKVxuXHRcdFx0XHQgLmZsYXRwaWNrciggdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnZGF0ZV9waWNrZXInICkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKVsgMCBdO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0JyApLmZsYXRwaWNrciggdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnZGF0ZV9waWNrZXInICkgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdkYXRlX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgRXJyb3IgUGxhY2VtZW50LlxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqL1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ZpZWxkc2V0JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIFJldHVybnMgV2Vic2FmZSBGb250IERhdGEuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IHdlYnNhZmUoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX3dlYnNhZmVfZm9udHMnICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBHb29nbGUgRm9udCBEYXRhLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldCBnb29nbGVfZm9udHMoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2dmb250cycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdHMgSFRNTCBPcHRpb24gVGFnIFVzaW5nIEFycmF5LlxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0YnVpbGRfb3B0aW9ucyggZGF0YSApIHtcblx0XHRsZXQgJHJldHVybiA9ICcnO1xuXHRcdGZvciggbGV0ICRfZCBpbiBkYXRhICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCBkYXRhWyAkX2QgXSApICkge1xuXHRcdFx0XHQkcmV0dXJuICs9IGA8b3B0aW9uIHZhbHVlPVwiJHskX2R9XCI+JHtkYXRhWyAkX2QgXX08L29wdGlvbj5gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdzZWxlY3Qud3Bvbmlvbi1mb250LXNlbGVjdG9yJyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4ge1xuXHRcdFx0bGV0ICR2YWwgID0galF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSxcblx0XHRcdFx0JGh0bWwgPSBudWxsO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMud2Vic2FmZS5mb250cyBbICR2YWwgXSApICkge1xuXHRcdFx0XHQkaHRtbCA9IHRoaXMuYnVpbGRfb3B0aW9ucyggdGhpcy53ZWJzYWZlLnZhcmlhbnRzICk7XG5cdFx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgJHZhcmlhbnQgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkuaHRtbCggJGh0bWwgKTtcblxuXHRcdFx0aWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnY2hvc2VuJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hvc2VuOnVwZGF0ZWQnICk7XG5cdFx0XHR9IGVsc2UgaWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnc2VsZWN0MicgKSApIHtcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdmb250X3NlbGVjdG9yJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkaHRtbF90ZW1wID0gJHRoaXMub3B0aW9uKCAnaHRtbF90ZW1wbGF0ZScgKSxcblx0XHRcdCRpbnB1dCAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXG5cdFx0XHQkcHJldmlldyAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcnICksXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSxcblx0XHRcdCRhZGQgICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWFkZF0nICksXG5cdFx0XHQkZWRpdCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1lZGl0XScgKSxcblx0XHRcdCRjbGVhciAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWNsZWFyXScgKSxcblx0XHRcdCRtYW5hZ2UgICAgPSBmdW5jdGlvbiggJHR5cGUgKSB7XG5cdFx0XHRcdGxldCBpZHMgICA9ICRpbnB1dC52YWwoKSxcblx0XHRcdFx0XHR3aGF0ICA9ICggJHR5cGUgPT09ICdlZGl0JyApID8gJ2VkaXQnIDogJ2FkZCcsXG5cdFx0XHRcdFx0c3RhdGUgPSAoIHdoYXQgPT09ICdhZGQnICYmICFpZHMubGVuZ3RoICkgPyAnZ2FsbGVyeScgOiAnZ2FsbGVyeS1lZGl0JztcblxuXHRcdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcblxuXHRcdFx0XHRpZiggc3RhdGUgPT09ICdnYWxsZXJ5JyApIHtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdFx0XHRsaWJyYXJ5OiB7IHR5cGU6ICdpbWFnZScgfSxcblx0XHRcdFx0XHRcdGZyYW1lOiAncG9zdCcsXG5cdFx0XHRcdFx0XHRzdGF0ZTogJ2dhbGxlcnknLFxuXHRcdFx0XHRcdFx0bXVsdGlwbGU6IHRydWVcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEuZ2FsbGVyeS5lZGl0KCAnW2dhbGxlcnkgaWRzPVwiJyArIGlkcyArICdcIl0nICk7XG5cdFx0XHRcdFx0aWYoIHdoYXQgPT09ICdhZGQnICkge1xuXHRcdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUuc2V0U3RhdGUoICdnYWxsZXJ5LWxpYnJhcnknICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICd1cGRhdGUnLCBmdW5jdGlvbiggc2VsZWN0aW9uICkge1xuXHRcdFx0XHRcdGxldCBzZWxlY3RlZElkcyA9IHNlbGVjdGlvbi5tb2RlbHMubWFwKCBmdW5jdGlvbiggYXR0YWNobWVudCApIHtcblx0XHRcdFx0XHRcdGxldCBpdGVtID0gYXR0YWNobWVudC50b0pTT04oKTtcblx0XHRcdFx0XHRcdGlmKCBpdGVtLnNpemVzID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bGV0IHRodW1iID0gKCB0eXBlb2YgaXRlbS5zaXplcy50aHVtYm5haWwgIT09ICd1bmRlZmluZWQnICkgPyBpdGVtLnNpemVzLnRodW1ibmFpbC51cmwgOiBpdGVtLnVybCxcblx0XHRcdFx0XHRcdFx0JHRtcCAgPSBqUXVlcnkoICRodG1sX3RlbXAgKTtcblx0XHRcdFx0XHRcdCR0bXAuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcsIGl0ZW0uaWQgKTtcblx0XHRcdFx0XHRcdCR0bXAuZmluZCggJ2ltZycgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGl0ZW0udXJsICkuYXR0ciggJ3NyYycsIHRodW1iICkucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xuXHRcdFx0XHRcdFx0JHByZXZpZXcuYXBwZW5kKCAkdG1wICk7XG5cdFx0XHRcdFx0XHQkdGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24taGVscCcsICd0b29sdGlwJyApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0uaWQ7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGxldCAkZTtcblx0XHRcdFx0XHRmb3IoICRlIGluIHNlbGVjdGVkSWRzICkge1xuXHRcdFx0XHRcdFx0aWYoIHNlbGVjdGVkSWRzWyAkZSBdID09PSBmYWxzZSB8fCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBzZWxlY3RlZElkc1sgJGUgXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGlucHV0LnZhbCggc2VsZWN0ZWRJZHMuam9pbiggJywnICkgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9O1xuXG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xuXHRcdFx0XHQkYWRkLnNob3coKTtcblx0XHRcdFx0JGVkaXQuaGlkZSgpO1xuXHRcdFx0XHQkY2xlYXIuaGlkZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGVkaXQuc2hvdygpO1xuXHRcdFx0XHQkY2xlYXIuc2hvdygpO1xuXHRcdFx0XHQkYWRkLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQkYWRkLm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnYWRkJyApICk7XG5cblx0XHQkZWRpdC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2VkaXQnICkgKTtcblxuXHRcdCRjbGVhci5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcblx0XHRcdCRjbGVhci5oaWRlKCk7XG5cdFx0XHQkZWRpdC5oaWRlKCk7XG5cdFx0XHQkYWRkLnNob3coKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2ltZycsICggZXZlbnQgKSA9PiB0aGlzLmluaXRfZmllbGQoIGV2ZW50LnRhcmdldCwgJ2ltYWdlX3BvcHVwJyApICk7XG5cblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2kud3Bvbmlvbi1pbWFnZS1yZW1vdmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkcGFyZW50ICAgPSBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKSxcblx0XHRcdFx0JGltYWdlX2lkID0gJHBhcmVudC5hdHRyKCAnZGF0YS13cG9uaW9uLWltYWdlX2lkJyApLFxuXHRcdFx0XHQkdmFsdWUgICAgPSAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApO1xuXHRcdFx0alF1ZXJ5LmVhY2goICRpbnB1dC52YWwoKS5zcGxpdCggJywnICksIGZ1bmN0aW9uKCAkaywgJHYgKSB7XG5cdFx0XHRcdGlmKCAkdiA9PT0gJGltYWdlX2lkICkge1xuXHRcdFx0XHRcdCR2YWx1ZS5zcGxpY2UoICRrLCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0JGlucHV0LnZhbCggJHZhbHVlLmpvaW4oICcsJyApICk7XG5cdFx0XHQkcGFyZW50LmZhZGVPdXQoICgpID0+ICRwYXJlbnQucmVtb3ZlKCkgKTtcblx0XHRcdCRpbnB1dC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdH0gKTtcblxuXHRcdCRpbnB1dC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXG5cdFx0aWYoICRwcmV2aWV3Lmhhc0NsYXNzKCAnZ2FsbGVyeS1zb3J0YWJsZScgKSApIHtcblx0XHRcdCRwcmV2aWV3LnNvcnRhYmxlKCB7XG5cdFx0XHRcdGl0ZW1zOiAnPiBkaXYnLFxuXHRcdFx0XHRjdXJzb3I6ICdtb3ZlJyxcblx0XHRcdFx0c2Nyb2xsU2Vuc2l0aXZpdHk6IDQwLFxuXHRcdFx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdzb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdGhlbHBlcjogJ2Nsb25lJyxcblx0XHRcdFx0b3BhY2l0eTogMC42NSxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0bGV0ICRpdGVtID0gdWkuaXRlbTtcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ3dpZHRoJywgJGl0ZW0ud2lkdGgoKSApO1xuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnaGVpZ2h0JywgJGl0ZW0uaGVpZ2h0KCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dhbGxlcnknLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCIvKiBnbG9iYWwgZ29vZ2xlOnRydWUgKi9cbmltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkbWFwICAgICAgICAgICAgICA9IHRoaXMub3B0aW9uKCAnbWFwJywge30gKTtcblx0XHQkbWFwLmRldGFpbHMgICAgICAgICAgPSAnI2dtYXBfZmllbGRzXycgKyB0aGlzLmlkKCk7XG5cdFx0JG1hcC5kZXRhaWxzQXR0cmlidXRlID0gJ2RhdGEtbWFwLXZhbHVlJztcblx0XHRpZiggJ3llcycgPT09IHRoaXMub3B0aW9uKCAnc2hvd19tYXAnICkgKSB7XG5cdFx0XHQkbWFwLm1hcCA9ICcjZ21hcF8nICsgdGhpcy5pZCgpO1xuXHRcdH1cblxuXHRcdGxldCAkX2luc3RhbmNlID0gdGhpcy5lbGVtLmZpbmQoICdkaXYuc2VhcmNoYm94ID4gaW5wdXQnICk7XG5cdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggdGhpcy5oYW5kbGVfYXJncyggJG1hcCApICk7XG5cdFx0JF9pbnN0YW5jZS5iaW5kKCAnZ2VvY29kZTpkcmFnZ2VkJywgKCBldmVudCwgbGF0TG5nICkgPT4ge1xuXHRcdFx0bGV0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG5cdFx0XHR0aGlzLmVsZW0uZmluZCggJy5tYXBfZmllbGRzIDppbnB1dCcgKS52YWwoICcnICk7XG5cdFx0XHRnZW9jb2Rlci5nZW9jb2RlKCB7XG5cdFx0XHRcdCdsb2NhdGlvbic6IHtcblx0XHRcdFx0XHRsYXQ6IHBhcnNlRmxvYXQoIGxhdExuZy5sYXQoKSApLFxuXHRcdFx0XHRcdGxuZzogcGFyc2VGbG9hdCggbGF0TG5nLmxuZygpIClcblx0XHRcdFx0fVxuXHRcdFx0fSwgZnVuY3Rpb24oIHJlc3VsdHMgKSB7XG5cdFx0XHRcdCRfaW5zdGFuY2UuZ2VvY29tcGxldGUoICdmaWxsRGV0YWlscycsIHJlc3VsdHNbIDAgXSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dvb2dsZV9tYXBzJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGFkZCAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiBidXR0b25bZGF0YS13cG9uaW9uLWdyb3VwLWFkZF0nICksXG5cdFx0XHQkZ3JvdXBfd3JhcCA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAnICksXG5cdFx0XHQkbGltaXQgICAgICA9ICR0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0JGVycm9yX21zZyAgPSAkdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtd3JhcCcgKSwgJ2FjY29yZGlvbicgKTtcblxuXHRcdCRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdH0gKTtcblx0XHR0aGlzLmJpbmRfZXZlbnRzX2Zvcl90aXRsZSgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCB7XG5cdFx0XHRhcHBlbmRUbzogKCkgPT4gdGhpcy5nZXRfZmllbGRfcGFyZW50X2J5X2lkKCB0aGlzLmVsZW1lbnQgKVsgMCBdLFxuXHRcdH0gKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi1jb250ZW50ID4gLndwb25pb24tZ3JvdXAtYWN0aW9uID4gYnV0dG9uJyApXG5cdFx0XHRcdFx0XHQgIC5jbGljaygpO1xuXHRcdH0gKTtcblxuXHRcdCRncm91cF93cmFwLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46ICRhZGQsXG5cdFx0XHRsaW1pdDogcGFyc2VJbnQoICRsaW1pdCApLFxuXHRcdFx0Y2xvbmVfZWxlbTogJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24tZ3JvdXAtYWN0aW9uID4gYnV0dG9uJyxcblx0XHRcdHRlbXBsYXRlOiB0aGlzLm9wdGlvbiggJ2dyb3VwX3RlbXBsYXRlJyApLFxuXHRcdFx0b25SZW1vdmU6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnNsaWRlVXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZSgpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdGlmKCBqUXVlcnkoICdib2R5JyApLmZpbmQoICdsaW5rI2VkaXRvci1idXR0b25zLWNzcycgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCAnYm9keScgKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCggJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBpZD1cImVkaXRvci1idXR0b25zLWNzc1wiIGhyZWY9XCInICsgJHdwb25pb24ub3B0aW9uKCAnd3BlZGl0b3JfYnV0dG9uc19jc3MnLCBmYWxzZSApICsgJ1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIG1lZGlhPVwiYWxsXCI+JyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudXBkYXRlX2dyb3Vwc190aXRsZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0sXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZGF0YSA9ICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICk7XG5cdFx0XHRcdCRkYXRhLmhpZGUoKTtcblx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XG5cdFx0XHRcdHRoaXMuYmluZF9ldmVudHNfZm9yX3RpdGxlKCk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGdyb3VwX3dyYXAsICdhY2NvcmRpb24nICk7XG5cdFx0XHRcdC8vdGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgJGRhdGEgKTtcblx0XHRcdFx0JGRhdGEuZmluZCggJy53cG9uaW9uLWdyb3VwLXJlbW92ZScgKS50aXBweSgge1xuXHRcdFx0XHRcdGFwcGVuZFRvOiAoKSA9PiB0aGlzLmdldF9maWVsZF9wYXJlbnRfYnlfaWQoIHRoaXMuZWxlbWVudCApWyAwIF0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRkYXRhICkucmVsb2FkKCk7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdFx0XHR0aGlzLmluaXRfZmllbGQoICRkYXRhLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2VkaXRvcicgKSwgJ3JlbG9hZF93cF9lZGl0b3InICk7XG5cdFx0XHRcdCRkYXRhLnNsaWRlRG93bigpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0sXG5cdFx0XHRzb3J0YWJsZToge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tYWNjb3JkaW9uLXRpdGxlJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWFjY29yZGlvbi1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RvcDogKCBldmVudCwgdWkgKSA9PiB7XG5cdFx0XHRcdFx0dWkuaXRlbS5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoICRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0JGFkZC5iZWZvcmUoIGpRdWVyeSggJGVycm9yX21zZyApLmhpZGUoKSApO1xuXHRcdFx0XHRcdCRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UoICRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJpbmRzIER5bmFtaWMgR3JvdXAgVGl0bGUgRXZlbnRzLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGJpbmRfZXZlbnRzX2Zvcl90aXRsZSggJGVsZW0gPSBmYWxzZSApIHtcblx0XHQkZWxlbSA9ICggZmFsc2UgPT09ICRlbGVtICkgPyB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1ncm91cC13cmFwID4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkgOiAkZWxlbTtcblx0XHQkZWxlbS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGUgKTtcblxuXHRcdFx0bGV0ICRtYWNoZWQgPSB0aGlzLm9wdGlvbiggJ21hdGNoZWRfaGVhZGluZ19maWVsZHMnICk7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtYWNoZWQgKSB7XG5cdFx0XHRcdGlmKCAkbWFjaGVkLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRlbGVtID0gJGRhdGEuZmluZCggJzppbnB1dFtkYXRhLWRlcGVuZC1pZD1cIicgKyAkbWFjaGVkWyAka2V5IF0gKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JGVsZW0ub24oICdjaGFuZ2UsIGJsdXInLCAoKSA9PiB0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIEdyb3VwIFRpdGxlXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0dXBkYXRlX2dyb3Vwc190aXRsZSggJGVsZW0gPSBmYWxzZSApIHtcblx0XHRsZXQgJGxpbWl0ID0gMTtcblx0XHQkZWxlbSAgICAgID0gKCBmYWxzZSA9PT0gJGVsZW0gKSA/IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKSA6ICRlbGVtO1xuXG5cdFx0JGVsZW0uZWFjaCggKCBpLCBlICkgPT4ge1xuXHRcdFx0bGV0ICRkYXRhICAgID0galF1ZXJ5KCBlICk7XG5cdFx0XHRsZXQgJGhlYWRpbmcgPSB0aGlzLm9wdGlvbiggJ2hlYWRpbmcnICk7XG5cdFx0XHRpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAnaGVhZGluZ19jb3VudGVyJyApICkge1xuXHRcdFx0XHQkaGVhZGluZyA9IHdpbmRvdy53cG9uaW9uLl8ucmVwbGFjZSggJGhlYWRpbmcsICdbY291bnRdJywgJGxpbWl0ICk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCAkbWFjaGVkID0gdGhpcy5vcHRpb24oICdtYXRjaGVkX2hlYWRpbmdfZmllbGRzJyApO1xuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkbWFjaGVkICkge1xuXHRcdFx0XHRpZiggJG1hY2hlZC5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdGxldCAkZWxlbSA9ICRkYXRhLmZpbmQoICc6aW5wdXRbZGF0YS1kZXBlbmQtaWQ9XCInICsgJG1hY2hlZFsgJGtleSBdICsgJ1wiXScgKTtcblx0XHRcdFx0XHRpZiggJGVsZW0ubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCAkaGVhZGluZywgJG1hY2hlZFsgJGtleSBdLCAkZWxlbS52YWwoKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGhlYWRpbmcgPT09ICcnICkge1xuXHRcdFx0XHQkaGVhZGluZyA9IHdpbmRvdy53cG9uaW9uLl8ucmVwbGFjZSggdGhpcy5vcHRpb24oICdkZWZhdWx0X2hlYWRpbmcnICksICdbY291bnRdJywgJGxpbWl0ICk7XG5cdFx0XHR9XG5cblx0XHRcdCRkYXRhLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi10aXRsZSBzcGFuLmhlYWRpbmcnICkuaHRtbCggJGhlYWRpbmcgKTtcblx0XHRcdCRsaW1pdCsrO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHQvKiBpZiggJGVsZW0gKSB7IC8vZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApOyB9ICovXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdncm91cCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaGVhZGluZycsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qZ2xvYmFsIHN3YWw6dHJ1ZSovXG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRfdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJF90aGlzLmVsZW1lbnQsXG5cdFx0XHQkYXJncyAgICAgICA9ICRfdGhpcy5vcHRpb25zKCksXG5cdFx0XHQkaW5wdXQgICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1pbnB1dCcgKSxcblx0XHRcdCRyZW1vdmVfYnRuID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24taWNvbnBpY2tlci1yZW1vdmVdJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLWFkZF0nICksXG5cdFx0XHQkcHJldmlldyAgICA9ICRlbGVtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXG5cdFx0bGV0ICR3b3JrID0ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsZW1zOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdHBvcHVwOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXG5cdFx0XHQgKi9cblx0XHRcdGVsbTogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBBIE5ldyBJbnN0YW5jZSBmb3IgVG9vbFRpcC5cblx0XHRcdCAqL1xuXHRcdFx0aW5pdF90b29sdGlwOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCAkYXJncy5wb3B1cF90b29sdGlwICE9PSAnZmFsc2UnICkge1xuXHRcdFx0XHRcdGxldCAkdHAgICAgICA9ICggdHlwZW9mICRhcmdzLnBvcHVwX3Rvb2x0aXAgPT09ICdvYmplY3QnICkgPyAkYXJncy5wb3B1cF90b29sdGlwIDoge307XG5cdFx0XHRcdFx0JHRwLmFwcGVuZFRvID0gJHdvcmsuZWxtWyAwIF07XG5cdFx0XHRcdFx0aWYoICR3b3JrLmVsZW1zLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkd29yay5lbGVtcy50aXBweSggJHRwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbml0cyBGb3IgZWFjaCBhbmQgZXZlcnkgUE9QVVAuXG5cdFx0XHQgKiBAcGFyYW0gJGVsbVxuXHRcdFx0ICogQHBhcmFtICRpbnN0YW5jZVxuXHRcdFx0ICovXG5cdFx0XHRpbml0OiBmdW5jdGlvbiggJGVsbSwgJGluc3RhbmNlICkge1xuXHRcdFx0XHQkd29yay5lbG0gICA9ICRlbG07XG5cdFx0XHRcdCR3b3JrLnBvcHVwID0gJGluc3RhbmNlO1xuXHRcdFx0XHQkd29yay5lbGVtcyA9ICR3b3JrLmVsbS5maW5kKCAnc3Bhbi53cG9uaW9uLWljb24tcHJldmlldycgKTtcblx0XHRcdFx0bGV0ICRoZWlnaHQgPSAkd29yay5lbG0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkuY3NzKCAnaGVpZ2h0JyApO1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkuY3NzKCAnaGVpZ2h0JywgJGhlaWdodCApO1xuXHRcdFx0XHQkd29yay5zZWxlY3QoKTtcblx0XHRcdFx0JHdvcmsuaW5wdXQoKTtcblx0XHRcdFx0JHdvcmsuZWxlbXMub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkaWNvbiA9IGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICk7XG5cdFx0XHRcdFx0JGlucHV0LnZhbCggJGljb24gKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHRcdHN3YWwuY2xvc2VNb2RhbCgpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdCR3b3JrLmluaXRfdG9vbHRpcCgpO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogV29ya3Mgd2l0aCBQT1BVUCBJbnB1dCBTZWFyY2guXG5cdFx0XHQgKi9cblx0XHRcdGlucHV0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XScgKS5vbiggJ2tleXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblx0XHRcdFx0XHQkd29yay5lbGVtcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1pY29uJyApLnNlYXJjaCggbmV3IFJlZ0V4cCggJHZhbCwgJ2knICkgKSA8IDAgKSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLmhpZGUoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhbmRsZXMgU2VsZWN0Ym94IGluIHBvcHVwLlxuXHRcdFx0ICovXG5cdFx0XHRzZWxlY3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBzZWxlY3QnICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXHRcdFx0XHRcdCR3cG9uaW9uLmFqYXgoICdpY29uX3BpY2tlcicsIHtcblx0XHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRcdCd3cG9uaW9uLWljb24tbGliJzogJHZhbCxcblx0XHRcdFx0XHRcdFx0XHRlbmFibGVkOiAkYXJncy5lbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCggJHJlcyApID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkd29yay5lbG0sICR3b3JrLnBvcHVwICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuZGlzYWJsZUxvYWRpbmcoKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYoICRpbnB1dC52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBCbHVyIEV2ZW4gLyBjaGFuZ2UgZXZlbiBpbiBpbnB1dGZpZWxkLlxuXHRcdCAqL1xuXHRcdCRpbnB1dC5vbiggJ2tleXVwIGJsdXIgY2hhbmdlIGtleXByZXNzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXG5cdFx0XHRpZiggJHZhbCAhPT0gJycgKSB7XG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICc8aSBjbGFzcz1cIicgKyAkdmFsICsgJ1wiPjwvaT4nICkuc2hvdygpO1xuXHRcdFx0XHQkcmVtb3ZlX2J0bi5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIEFkZCBCdXR0b24gQ2xpY2sgRXZlbnQuXG5cdFx0ICovXG5cdFx0JGFkZF9idG4ub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRwb3B1cCA9IHN3YWwoIHtcblx0XHRcdFx0dGl0bGU6ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1maWVsZC10aXRsZSBoNCcgKS5odG1sKCksXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IHRydWUsXG5cdFx0XHRcdHdpZHRoOiAnNzAwcHgnLFxuXHRcdFx0XHRjdXN0b21DbGFzczogJ3dwb25pb24taWNvbi1waWNrZXItbW9kZWwnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0JF90aGlzLmFqYXgoICdpY29uX3BpY2tlcicsIHtcblx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uU3VjY2VzczogKCAkcmVzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGxldCAkcG9wdXBfZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICRwb3B1cF9lbGVtLCAkcG9wdXAgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvbkVycm9yOiAoKSA9PiAkcG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXG5cdFx0XHRcdFx0XHRvbkFsd2F5czogKCkgPT4gJHBvcHVwLmRpc2FibGVMb2FkaW5nKCksXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBSZW1vdmUgQnV0dG9uIEV2ZW50LlxuXHRcdCAqL1xuXHRcdCRyZW1vdmVfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpY29uX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2Vfc2VsZWN0JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGlucHV0ICAgICAgID0gJGVsZW0uZmluZCggJ2lucHV0I2ltYWdlX2lkJyApLFxuXHRcdFx0JHByZXZpZXdfYWRkID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcgLndwb25pb24tcHJldmlldy1hZGQnICksXG5cdFx0XHQkcHJldmlldyAgICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3JyApO1xuXG5cdFx0JHRoaXMubWVkaWFfaW5zdGFuY2UgPSBudWxsO1xuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0XHQkcHJldmlld19hZGQuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHByZXZpZXdfYWRkLmhpZGUoKTtcblx0XHRcdFx0JHByZXZpZXcuc2hvdygpO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbWFnZV91cGxvYWRfdXBkYXRlZCcsICRpbnB1dCwgJHByZXZpZXcsICRwcmV2aWV3X2FkZCApO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3X2FkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoICR0aGlzLm1lZGlhX2luc3RhbmNlICkge1xuXHRcdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2UgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHRsaWJyYXJ5OiB7IHR5cGU6ICdpbWFnZScgfSxcblx0XHRcdFx0dGl0bGU6ICR0aGlzLm9wdGlvbiggJ2ZyYW1lX3RpdGxlJywgJ1NlbGVjdCBJbWFnZScgKSxcblx0XHRcdH0gKTtcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9uKCAnc2VsZWN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gJHRoaXMubWVkaWFfaW5zdGFuY2Uuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKS5hdHRyaWJ1dGVzO1xuXHRcdFx0XHRsZXQgdGh1bWJuYWlsICA9ICggdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsLnVybCA6IGF0dGFjaG1lbnQudXJsO1xuXHRcdFx0XHQkcHJldmlldy5maW5kKCAnaW1nJyApLmF0dHIoICdzcmMnLCB0aHVtYm5haWwgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGF0dGFjaG1lbnQudXJsICk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuaWQgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3LmZpbmQoICcud3Bvbmlvbi1pbWFnZS1yZW1vdmUnICkub24oICdjbGljaycsICgpID0+ICRpbnB1dC52YWwoICcnICkudHJpZ2dlciggJ2NoYW5nZScgKSApO1xuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkc2V0dGluZ3MgPSB0aGlzLm9wdGlvbiggJ2lucHV0bWFzaycgKTtcblx0XHRcdGlmKCAkc2V0dGluZ3MgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncyA9IHRoaXMuaGFuZGxlX2FyZ3MoICRzZXR0aW5ncywgJ0lucHV0TWFzaycgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmlucHV0bWFzayggJHNldHRpbmdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW5wdXRtYXNrJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdqYW1ib19jb250ZW50JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGhpc19lbGVtID0gJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi10YWItd3JhcCAnICk7XG5cblx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpIGEnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bGV0ICRfdGhpcyA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0JF90aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi10YWItY3VycmVudCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLmhpZGUoKTtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi10YWItcGFnZScgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHRsZXQgJHRhYiA9ICRfdGhpcy5hdHRyKCAnZGF0YS10YWItbmFtZScgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdkaXYjd3Bvbmlvbi10YWItJyArICR0YWIgKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICkuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCBhJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaTpmaXJzdC1jaGlsZCBhJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdqcXVlcnlfdGFiJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5nbG9iYWxfdmFsaWRhdGUgPSBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWtleXZhbHVlX3dyYXAnICkuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWFjdGlvbi1jb250YWluZXIgID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1rZXl2YWx1ZS1hZGRdJyApLFxuXHRcdFx0bGltaXQ6ICggLTEgPT09IHRoaXMub3B0aW9uKCAnbGltaXQnICkgKSA/IG51bGwgOiB0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0Y2xvbmVfZWxlbTogJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24ta2V5dmFsdWUtZmllbGQgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLXJlbW92ZV0nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnaHRtbF90ZW1wbGF0ZScgKSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0dGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgJGVsZW0uZmluZCggJz4gZGl2Omxhc3QtY2hpbGQnICkgKTtcblx0XHRcdH0sXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2tleV92YWx1ZV91cGRhdGVkJywgJGVsZW0gKTtcblx0XHRcdH0sXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogKCkgPT4ge1xuXHRcdFx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5hZnRlciggalF1ZXJ5KCB0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKSApLmhpZGUoKSApO1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggdGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQsIGRpdi5ub3RpY2UnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgRXJyb3IgUGxhY2VtZW50LlxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqL1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGVyci5lcnJvci5hcHBlbmRUbyggZXJyLmVsZW1lbnQucGFyZW50KCkucGFyZW50KCkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgVmFsaWRhdGlvbiBJbnB1dHNcblx0ICogQHBhcmFtICRhcmdzXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCB0cnVlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJncy5rZXkgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gZGl2JyApLmVxKCAwICkuZmluZCggJzppbnB1dCcgKS5ydWxlcyggJ2FkZCcsICRhcmdzLmtleSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRpZiggdHJ1ZSAhPT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gZGl2JyApLmVxKCAxICkuZmluZCggJzppbnB1dCcgKS5ydWxlcyggJ2FkZCcsICRhcmdzLnZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYoIHRydWUgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLmtleSApICYmIHRydWUgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnOmlucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAna2V5dmFsdWVfcGFpcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnbm90aWNlJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmltYWdlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRRQVlSWGhwWmdBQVNVa3FBQWdBQUFBQUFBQUFBQUFBQVAvc0FCRkVkV05yZVFBQkFBUUFBQUE4QUFELzRRTnRhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMd0E4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QaUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pCWkc5aVpTQllUVkFnUTI5eVpTQTFMak10WXpBeE1TQTJOaTR4TkRVMk5qRXNJREl3TVRJdk1ESXZNRFl0TVRRNk5UWTZNamNnSUNBZ0lDQWdJQ0krSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJSGh0Ykc1ek9uaHRjRTFOUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmJXMHZJaUI0Yld4dWN6cHpkRkpsWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wzTlVlWEJsTDFKbGMyOTFjbU5sVW1WbUl5SWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJYQk5UVHBQY21sbmFXNWhiRVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2T1RCR05FVkRRamc0UkRBeFJUQXhNVGhCTWtSRE5FVTJOemhGUWtFelJEZ2lJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSVVU1TjBFM09FRTFPVU5GTVRGRk5UZzFSVVZCTUVVNU4wSTJRa1pCTXpJaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJVVTVOMEUzT0RrMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTkNCWGFXNWtiM2R6SWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5ETTJNRFUyUXpKR1FrVkVSVEF4TVRrMU5VVkNSVEF6UlVFNFFqUkVOVUlpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2T0VWR05FVkRRamc0UkRBeFJUQXhNVGhCTWtSRE5FVTJOemhGUWtFelJEZ2lMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejcvN2dBT1FXUnZZbVVBWk1BQUFBQUIvOXNBaEFBR0JBUUVCUVFHQlFVR0NRWUZCZ2tMQ0FZR0NBc01DZ29MQ2dvTUVBd01EQXdNREJBTURnOFFEdzRNRXhNVUZCTVRIQnNiR3h3Zkh4OGZIeDhmSHg4ZkFRY0hCdzBNRFJnUUVCZ2FGUkVWR2g4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4Ly93QUFSQ0FFVEFSTURBUkVBQWhFQkF4RUIvOFFBaVFBQkFBTUFBd0VCQUFBQUFBQUFBQUFBQUFRRkJnRURCd0lJQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBRUFBQkF3TURBUU1HQnc4Q0F3a0FBQUFCQUFJREVRUUZJUklHTVVFVEIxRmhjWUVpTXBHaHNjRkNnaFRoVW1KeWtxS3l3aU16YzdOMEZUWWtOOUhURitKRFU1T2pWRFZWRmhFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvYUFBd0RBUUFDRVFNUkFEOEEvVktBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSU91ZWVLQ015U3VER0RxU2c2STh2alhtaloyL1dxMzVRRUhleTR0NVBjbFkvOEFGY0Q4aURzUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFRk55ZVhiYlJSL2Z1Si9KSDNVR2IzSU9keURzanZMbVA5M0s5dm1EaUVFbG1jeWJCUVRranpocCtNaEJJWnlhOWJRT1pHL3ltaEIrSW9KTWZLVy85NWIrdHJ2K0lRU1krU1k5M3ZCN1BPUlVmRVNna3g1akdTZTdjTkg0MVcvcFVRUzJQWTlvZXh3YzA5SEExQlFjb0NBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJTTN5cWI5dkJGOTYwdS9LTlAxVUZiaW9HM04vREM4Ym1PUHREeWdDcFFhU1RqMk1lUFpZWXo1V3VQejFRUlpPTFFFZnM1bkErY0FvSXorTDNZOXlaaDlOUjh5Q003ajJWQjBqRHZPSE4rY2hCR2t4bVNqTkhXOG5xYVQ4aURvZkhOR2FQWTVwOGhCQ0Q0M0lOZHgxam00eHBKOTl6bk45SFQ1a0ZtZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FneC9KNTkrVUxmL0NZMXY2MzZ5RG5pN0MvSmgzWkcxeFByRlBuUWE5QVFFQkFRUU00K09QR1R1YzBFbHUwRWp0T2lERWJrRzd4TVpqeHR1dzlkZ1A1V3Z6b0phQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNEQVpxZnZNcmN1SFRlUVBxNmZNZ3VPR3hrdnVKZXdBTnI2Nm9OT2dJQ0FnNGM1cldsemlHdEhVblFJS1hsazdSakd0QnIzanhRanRBQ0RIc0pjNE5IVW1nOWFEMHBqUXhqV2pvMEFEMUlPVUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUWZNa3NjYmR6M0JvOHBRUkpNeFpzMGFTOC9nalQ0NklJVXVibmRwRzBNODUxS0NWaTdtV1dPYVNaMVEwMTlBcHFnd0UwcGRLOTMzemlmaEtEWThOWVJpM3VQMDVTUjZnQWduWlBOMk9QWisxZHZsUHV4TjFkNi9JZ3FNVHl0ODk4WXJzTlpGS2FSRWFiVDVDZk9nMDZDcHlmSk1mWkFzRHUrbjdJMmRBZk9VR1N5R2N5Ris0dGtlV3hFNlJOMGIxN2ZLZ3RPVXY3dXd4c0gwaEhWemZRMW9DQ293N1RKbGJSdEsvdFdFanpCd0pRZWpJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUtyT3RkdGhkOUVFZytrMFFWQ0FndEdrUTRDNmxKb1RISnI1NkVCQjUvdlFhcCtUdU1aeGl5RnZSazArLzI2RFFiaWUzMG9NdkpQSkk4dmtjWHZjYXVjNGtrbjBsQjg3MEZuTnlYTFMycmJZekVNQW81dzBjNzB1Nm9LemVnNzdFR1M5Z2pHdTZSb3A2MEYxemFVZjNTSmplaklSVWVRbHp2bVFSK0lzTW1iaU5LaGpYdVA1Skh6b04rZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdpNVNMdkxOL2xiN1E5U0RQVVFLSUptZmNJT0t2RmFGN1l3UFM1NEorSkJnQTRrZ2VWQnJ1VFdGN0xqY1l5M2dkSXlHTDJ5M1doTFc5bnFRWlo5dmRNOStGN2ZTMGhCMUZ4SFhSQnh2UU42QzQ0bXdTNTYyRGhWcmR6dldHRWo0MEh4eWVjdnpsMVUxMnUyajFBSUxYZ1VlNjd1cHZ2STJ0SDFqL0FObEJ0VUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCd0JCQjZIUW9NdlBIM2NyNHo5RnhGZlFnK1dpcEhuUU9keTl6aWJXMysrZVB6Ry9kUVlVU0VFRWRRYWhCY1FjeHpzTkIzNGVBS0FQYTBqNGdFRTl2aUJrRHBMYlFPYjJnQncrVnhRZGc1aGhwTkxqRXgxUHZPQVlmbGFnNWJrT0N6Nnkyam9uSHlid1B6WElEY1B3KzdKTUdRN2o4RjdnMzlPaUN6NDlnTWZaWDdyaTN2bVhYc0ZyR3RMU1FUMU9oS0REWDA1bHZaNUNhbDczR3ZyUWJUdytoQXgxelAyeVM3UFV4b1A2NkRWSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQ2l6RU95NjMwMGtGZlgyb0kxdEh2dUkyRHRjRUZYNGkzQiswMmx2Mk5ZNlQ4bzAvVlFZK3FCVkFxZ1ZRS29GVUhJZTRkSEVldEJ4dVFlbThLaEVmSDRIRHJLNTd6K1Z0L1ZRWHFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdyOHpGdXQyeUFhc2RxZk1mdW9LN0c3ZnRzZTQwMStPaURua3ZGUDd6TkhPeTQ3bVdObXloYnVhUlVueWp5b016Y2VIK2FqL2RQaW1IbWR0L1NRUUxqaVBJWVBldEhQL2hrUC9ScWdnVDR6SjI0clBheXhEeXZZNXZ5aEJHSklPcURqY2dia0RjZ2JrSHNPRGc3akQyY1ZLRnNMS2p6a1ZQeGxCTlFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUhWY3hDVzNrWjVSOTFCbWpVR25hRUhZeTR1R2U1STV2b0pDRHRaa3IxblNRbjA2L0tnNzQ4emRBKzAwUCtMNUVGaGJYVnpNUnZnTEduNlJQM0VIWlBaMmx3S1R3c2xINGJRNzVVRmZOeFRqMDFkMWxHQ2UxdFcvSVFncjV2RDdBdkpMVE5HZXdOY0NCOElLQ0JMNGFSRWt4WDdtanNEbzYvR0hCQkRiNGI1RVhEQTY1aU1GUnZjTjI3YjIwYlQ1MEhvREdoclEwZEdpZzlTRGxBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFRkZlMk00dW43R0Z6WG1yU0JwcnFnNWh3OXkvVjVFWTgvVkJOaXcxdTMzM0Y1K0FJSmtjRU1YN3RnYjZBZyswQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkJGeW1SaHh1T3ViK2RyblEyc2JwWkdzQUxpMWdxYUFrQ3ZyUVFPTDhzeFBKTE9TNXg1ZTN1WDdKWVpnMXNqU1JVRWhwY0tPN0RWQmJ5UERJM1BQUm9MalR6Q3FDcDR2eWpIOGt4OGw5WXh5eHd4eW1Celp3MXJ0eld0ZFViWFBGS1BIYWd1RUJBUVJzbGZ3NC9IWE4vTUhPaHRZbnpTTllBWEZyR2x4MmdrQ3VubFFZai9yWnhYLzJ0OS81Y1AvTlFTTEh4aTRoY3pDS1Q3VGFBMEFrbmpidDEvaHVrSStCQnRvNUk1WTJ5UnVENDNnT1k5cEJhNXBGUVFSMUJRZlNBZ0lDQWdJS2JqbktzZm4vdG4yT09hUDdGTDNNdmZCcmF1MTFidGMvVFR0UVhLQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3BlYmY0am1QNlNYOUFvUEplTnZ5SEZMWEQ4cWgzVFl2STk1QmtvaDJiWm5zSDVyQTV2bkJIYWc5ck56QmRZMDNOdThTd1RRbDhVamRRNXJtMUJDREVlQ2YrSzNYOWRKL0ppUVRNMzRtMmRwa240dkVXRSthdjRpUkxIYjEyZ2cwY0FXdGtjUzN0bzJpRG5CZUpkbmU1Sm1LeWxoUGhzakthUlJYRmRyaWVqZHpteHVCUFpWdm1RYk5CVDh4L3hQTS8wVS84c29LcndwL3dYSC9qVC96M29KUGlKYVl5ZmlPUmZmTVllNWhjKzJrZFRjMmI2RzA5aExxRHpvS1hpR2N1Y1I0V3g1U2VFM0gyUVNkMUU1Mnd1ajc0dGFOMUhVQXJwb2dOOFZKN2tRT3hlQnVjakdXUm04bGhMaXlHU1JvY1k5d2pjSEZ0YUVuYWd2T1VjM3huSGhERk94OXhrTGdBdzJNSHRQSUpwVStRVjBIbDdFRkhENHFUVzhyUDc5eCs4eE5ySVExdHk4UGUydm5EbzRqOEZVRi95dmxSd2VFanpGdmFqSVdyM3NEeXlYWUJISVBaa0IydkRoV2c5YUM3dDU0cmkzaXVJWGJvcG1Oa2pjTzFyaFVINENnbzhYeXc1SGxHUnd0dmFWdDhhMGQ5ZmQ1b1pEUWJCSHQ4dTc2WFlnNDRqeTMvQVBSZjNEL1NmWmZzTTNjZnZPODM5ZmE5MWxPaUN2enZpUmEyV1NreGVLc0o4emtZYWlhSzNCMnRJcFVibXRrSkk3YU4wNklPY0Y0ajIxN2tvOFhsY2ZQaHNqTnBERmNBN1hrOUFIT2JHUVQyVmFnc1R5c3g4eUhHNTdYdXhMQjM5cmQ5NVh2S0RWdXphS2U2NzZSNklQcm1YS291TllqKzRQaCswdmRJMktLRGYzZTR1cVQ3VzEvUnJTZWlDenh1UWh2OFpiWkNQMllybUZrd3FmZEQyaDFDZk1ncXVJY3FkeU9DN3VtV24yZTBnbk1OdktYbDVsRGRTN2JzWnQwSTdUOFNDL1FFQkFRRUJBUUVCQVFFRkx6Yi9FY3gvU1Mvb0ZCUjhEeGRubGZES3p4OTR6ZmIzRGJocngyai9VU0VPSG5hZFFncXVGNVM4d04vZThMeTc2bU5yMzR5WSs2NXBCZHRGZXh3OXB2bnFFRHdwbmt0K0FaZWVMU1NLZTRldy9oTnRveUVFL3djc2JhTGk3N3hyUWJtNm5mMzBuMGlHYU5iWHlEcjYwSHo0eTJkdTdqa0Y4UUczZHRjTUVFbzBjQThIYzBIcjJBK3BCdHNkTkpOajdXYVExa2toamU4K2R6UVNncitZLzRubWY2S2YrV1VIblhDZUZaL0o4YnRiMjA1UGQ0NjNrTWdaWnhDVFl6Ykk1cHB0bWpHcEZmZFFYclBDaVc2bFljN3lDOHlzTWJnNWtMaTVvMHJVRXZmTjE4MUVGdnoyMXQ3WGdHUnRyZU1SUVF3TVpGRzBVRFd0ZTBBQkIyZUc5dkZCd3JHQ050TjhicEhudExudmNTU2d3MHQxeXAvaVZtYnJDV0VHUXZiWUNKcmJrZ0NLS2pXZ3NySkRxYWZINTBGcGs3anhjeVdQdUxDNjQvWXV0N2xqbzVBSHNxQTRkUlc1T282anpvTHZqWEc4akp3RTRET1I5MU81a3NJYVhOZVd0TGk2TTdtRnc5a2tVOUNDdjRUeWMyUEI3NFgrbDF4NHlRU3hucWR0ZTZiK1Y3QTlDQ2I0V1l1UzI0NGNqYzYzbVhsZGRUUFBVdEpJWjhPcnZXZ3AvREtaOE5oeWlhUDk1SGNTUFo2V3RlUWdvK0JYWGlCYjRxV2ZBWW0xdklMbVp6cHJ1ZHplOWM4VUJEcXp4bWc3Tk8xQk81TFllS3ZJYmFDRzh3bHJDNjJsRTBFOEVzYlpXdUFwbzUxdy9RL01FRjk0aHczTnBiNGJrNFpTN3hFOFp1MnQ3WXBhQ1J1bjRXbnJRY2NtZ2g1THk3SFlacDMyVnRaVFhrNXBWcE03ZTdpclh5YUVlbEJSNHZrczFqNFdYOW84dUdSczVaTVl4bGZhRHBYYVVQNExYT3ArS2c5QTRsaGhodU8yT1BvQkxGR0RQVHRsZjdUL3dBNG9MZEFRRUJBUUVCQVFFQkFRVkhMNEpwK0w1V0dDTjBzMGxySzJPSmdMbk9jV21nRFJxU2dnK0c5cGQybkM4ZGIzY01sdmNNNzdmREswc2UyczhoRld1QUlxRFZCRDhTZUpTWnJHTnZyRnBHWHgvN1MzTFBlZTBHcFlLYTE3VytmMG9JM2hKaTcyMDR2ZDIyUnRKYlo4bDNJZTVuamRHNXpIUXhOcnRjQWFHaENDcXNiUG1YQkx1NnQ3REhQemVDbmVaSVdSRW1WcE5CMGFIdUJwUU85a2c5ZktnWHRoekhuZDVhUlpISE93dUJ0NU85bGpsSjcxNUZXblJ3WTR1cFVEMlFCV3V1aUQwNWpHc2FHTkZHdEFEUU9nQVFWZks0WnArTVphR0dOMHMwbHBNMk9OZ0xuT2NZeUFHZ2FrbEJXK0dsbmQyZkRiRzN1NEpMZTRZWnQ4TXJYTWVLelBJcTF3QjFCUWFkQlFjK3RybTY0aGs3ZTJpZlBQSkcwTWlqYVh2Y2Q3VG8xdFNVSDF3YTJ1TGJpV01ndVlud3p4dzBraWthV1BhZHgwTFRRaEJuZVVjZDVIamVUamxYR29oY3l5c0VkL1pIcThBQWFDb3FIQm82YWdpdXFDUGRjcjhRczNidXgyTjQ3UGlwcGhza3ZwM1BZR05PaGN4ejJSYlQ2S255YW9OeGdjZGNZN0UyMW5jM1VsN2NSTi9iWFV6blBjOTdpU2RYRW1nclFlWkI1enpiaVdibDVWSmI0eUdRNHpQbUIxL0xHeHptUnVpZjdSZTRDamZ2OWVxRDFLM2dpdDRJNElXaGtVTFd4eHRIUU5hS0FmQWd3L2hoakwrMGJuRzMxcExidG51eTZNVFJ1WUhzTzdWdTRDb1FWZHJZY3c0SmYzY2VMeDdzemdMbVR2WTRZcW1SaE5COUVQZUhVb0NkcEJwVkJLTnp6L2x0NWJ3aTB1T05ZbUorKzVtN3g4Yzc2YWJRYVJQTmRhZXpUeTlpRGRaYkd3WkxGM1dPbS9kWE1Ub2llcEc0VUR2U0RxZ3gvaGZoc3ZiTnlGOW1JcElyMTVpczRoSzB0UGMyc1lZMHRCcFZwMDE3YUlLdC9EOGpKNGxTUm1DVCt3dnVHWlNTUXNkM0ptWXduYnVwdDNkNDgxRmVpRDA5QVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkJBeitXaXhHRnZNbEpTbHRFNTdRZnBQNk1iOVp4QVFlUzhRa3lISHM3aGN4ZlBMcmJrclpHWERqMk9mTDdMajJkZGp2UVNnOXBjNXJXbHppQTBDcEowQUFRZEZsZjJGOUQzMWxjeFhVSUphWllYdGtidUhVYm1raXVxQmUzOWhZdzk5ZTNNVnJDU0dpV1o3WTI3ajBHNXhBcm9nN1RKR0krOExnSTZidDlSdHAxclh5SUlFWEkrUFRUaTNoeWxwSk9TUUltVHhPZVNPbzJoMVVFdThqaGxzNTRwbmJJWHh2Yksrb0cxcGFRNDFPZ29FR2J4Mkx3bU00VGtMWERYZjIyeUVOeTRUOTVITDdSak80Ym93MXVpQ0w0UmY0WEIvR20vU1FhbSt5K0pzQzBYMTdCYUYzdWllVmtkZlJ1SVFkbG5mMk43RjMxbmNSWE1KMDd5RjdaRytUcTBrSU1IeXovQUhSNHovRFA2VDBHM2JtOE02OE5rMi90amVBN1RiQ1ZobHI1TmxkM3hJUGpQLzhBd1dSL3BadjVia0dhOEl2OExnL2pUZnBJTlZmWmJGV0cwMzE1QmFCM3U5L0l5T3ZvM0VlUkIyMjEzYTNVSW10Wm1Ud3U5MlNKd2UwOXVoYVNFSGFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJUE9mRnJKeHp5WXZqWW5aYmk5bWJOZHpQYzFqV1JCMnhwY1hhVXJ1ZDlWQno0aHk4VXlIRC9zdGhrN0owK04yU1dVVWR4RVhGc1kyRmpRSFZQc2RCNVVHcDRUblJtK05XZDY1MjZjTjdxNTh2ZXgreTRuOGIzdldnemZEUi9ZT2E1bmpidlp0YnY4QTEyUEhaUTlXajZwcDlWQTVtUDc5elhDOGJhTjFyYkg3ZGtCMUZCMGFmcWluMWtGanpUakdTejEvWlJ6M2tkdHh1Q2o3Nkx2SE1sZStwL0IyVTkwQ3J0S2xCbStSY2Q4SllNVmNDMnU0SWIxc2J6QytHNWZPL3ZHalFPWUhTRFYzWFJCZWNJeUYxZStHem4zTHpMSkZEY3doN3RTV3NEZzJwOHpkRUVIdzkvMnd2L3hieitXZ21lRnd1ajRmMHRDd1haZGNmWnpKVU1FbFR0M1VEalN2WFJCWDJQQStMV2Njay9OYiszdXN2Y1NPZExKTGR1aVpyMDJrdWhjVFRVMVFWV0pmZ01WNGo0NlBpMTRaTWZldE1kM0Mxem5zQklkUnU1M1VDZ2NOVFFvSjNpUFpYbDl6M0JXZG5NNjNubmgyQ2Rudk1hWHYzdUZPME1xZ3Q3N3dnNHEvRnVnczJTUVh6Vy9zcjB5UGM0dkhUZTBuWlR5MGFFSFJ3ek8zbVU0Qms0YjV4ZmQ0K0s0dG55T05YT2FJaVdseDdTSzdmVWcrT0E1VCsxZUdFMlIyaHh0ZnRFakdub1hBK3lENlNneStBbThPN3lGK1I1ZmtaTDNNWFRuT21pYzI2RFl4VTdRREUwVjA4aG9PZ1FTTFBOY1l3WExNZE54UytrbHgxOUlJTWpZUEV3WXdQY0d0ZTB5dGJXbTZvMUowNjBLRDJOQVFFQkFRRUJBUUVCQVFFQkFRRUJBSkFGVG9BZzhxNC9pY2Z6amx1YXkrVGlOeGk0Q0lMU1BjNWdORFJoQllXblJyYWtmaElOVi8wczRIL3dEV2YrdmNmOHhCbmVBU080N3pQTGNVbWRTQ1p4bXNhOXUwYmhTdmE2STYvaW9MVHhJZ2ZqN3ZEOHFoSHQ0eTRiSGRVNm0zbE5EOHBiOVpCMStHc1Q4bGtNMXl1Y0hka0p6RGFWNmlDTWovQUlOYjlWQlZjN2x0TDNuMWxpK1FYVDdYQU5nRWpBQ1dzZElkM3RPZDJWY051N3M4eURuUE04SjhMaWJsMWhGYTNsOUxHNXRzeU9VM1JFaGFRMXhMblNOWUFkU2dzZkRvZytHbHdBZFFMc0g0Q1VIVjRlLzdZWC80dDUvTFFkWERycTl0UENhN3ViS291b20zTG9uTkZTMGc2dUg0bzFRVm5FTVI0YVhtR1plNXk5am15a2hjKzdiZFhMb1hOZnVQdXREMkYybmJyVkJIanlIR2JqeEx3MGZINEk0YkczZjNicFkyN0JKSWQxWER0STZBVlFXL2lGbEc0cnhBd09RZXgwa2R2Q1h5dFlLdTd2YzhQSUg0TFNTZzFXUjhRK0oybU1mZlI1R0c1TzJzVnZFOE9sYzdzYnM5NXYxZ0VHZDRKakx1MjREbDcyN2FXU1pKbHhjTWFSVDJPNklEdGZ2alUraEI4OEt4c3VUOEticXdoL2ZUaTRiRURvQzhPcTBlc2hCRTRGa2VDUHhMY2RuYk93dGN0WkYwVTdyeUdGaGZSeG9TK1FlOFBkSUpyVUlMTjJaNFUva2xqaWNEZ3JISnp5UHJQZHdSUk1aQTFyaDdZZUkzYnRvMTBJN05kVUhvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDRDR1SUlyaUNTQ1VFeFRNZEhJQVMwbHJoUTBjMGdqVHRDQ0hoY0ZpY0phRzB4bHVMZTNjOHlPWUhPZlY1QUJKYzh1ZDBBN1VFOUJWM2ZHTUhkNWVETVQyMjdKVzIwUTNEWHlNSTJra1ZhMXdhN3IyaEJNeUdQczhqWlRXVjVHSnJXZHUyV01raW82OVdrRWVwQnhqY2JZNHl4aXNiR0lRMnNJSWpqQkpwVWtuVnhKT3A3VUhSbWVQNFhOUXRoeWxveTVZeXBZWFZEbTE2N1h0SWNLK1lvSU9NNEp4SEd5ZDdhWXlKc25ZK1RkTTRWMDlreWw5UFVnbDR2aldGeFZoUFlXRnYzTm5jRnpwb3U4a2NDWHREWGF2YzRpclIySVBySDhldytPeGNtTHM3ZnVyQ1VQRDRkNzNWN3dVZDdUbkYybzg2RHN4R0Z4bUlzUlk0Nkh1YlZwYzRSN25QMWNhblY1Y2ZqUVZGeDRjY0p1TGszRW1MakVoTzRoajVJMlZyWDNHT2F6NGtFdVRodkdIdnNuakh4eHV4Nys4c3pDWFJiSDFEcS9zeTNkcTBlOVZCSXZPUFllOHlkdms3bTNFbDlhTkxJSlM1NERXbXRSdEJEVDd4NmhCWHgrSHZESTczN1l6RlJDYXU0QWw1akI4MFJkM2Y1cUM5bnQ0WjdlUzNsYnVobFlZM3MxRld1RkNOS1UwUVJzUmhzYmg3SnRsam9lNHRXdUxteDduUDFjYW5WNWNmalFRc3Z3dmkrWW03L0lZK09XYys5SzB1aWU2bW50T2pMQzcxb0pPRzQ1ZzhMRzVtTXM0N1lQb0h2YlV2Y0IwRG51SmNmV1VGaWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNELy8yUT09Jztcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmJlZm9yZSggJzxzcGFuIGNsYXNzPVwic3Bpbm5lciB3cG9uaW9uLXNwaW5uZXJcIj48L3NwYW4+JyApO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4gdGhpcy5zaG93X3ByZXZpZXcoIGUgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgT0VtYmVkIFByZXZpZXcuXG5cdCAqL1xuXHRzaG93X3ByZXZpZXcoKSB7XG5cdFx0bGV0ICR2YWx1ZSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLnZhbCgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5hZGRDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHQkd3Bvbmlvbi5hamF4KCAnb2VtYmVkLXByZXZpZXcnLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dmFsdWU6ICR2YWx1ZSxcblx0XHRcdH1cblx0XHR9LCAoIHJlcyApID0+IHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcblx0XHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5odG1sKCByZXMuZGF0YSApO1xuXHRcdFx0fVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcblx0XHRcdFx0Lmh0bWwoICc8aW1nIGNsYXNzPVwid3Bvbmlvbi1uby1wcmV2aWV3XCIgc3JjPVwiJyArIHRoaXMuaW1hZ2UgKyAnXCIvPicgKTtcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLXNwaW5uZXInICkucmVtb3ZlQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnb2VtYmVkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnc2VsZWN0MicsIHt9ICk7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmcuZHJvcGRvd25QYXJlbnQgKSApIHtcblx0XHRcdCRhcmcuZHJvcGRvd25QYXJlbnQgPSB0aGlzLmdldF9maWVsZF9wYXJlbnRfYnlfaWQoIHRoaXMuZWxlbWVudCApO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLm9wdGlvbiggJ2FqYXgnICkgKSB7XG5cdFx0XHQkYXJnLmFqYXggPSB7XG5cdFx0XHRcdHByb2Nlc3NSZXN1bHRzOiAoIGRhdGEgKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHRlcm1zID0gW107XG5cdFx0XHRcdFx0aWYoIGRhdGEgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCggZGF0YSwgZnVuY3Rpb24oIGlkLCB0ZXh0ICkge1xuXHRcdFx0XHRcdFx0XHR0ZXJtcy5wdXNoKCB7IGlkOiBpZCwgdGV4dDogdGV4dCB9ICk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRyZXN1bHRzOiB0ZXJtc1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6ICggcGFyYW1zICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRxOiBwYXJhbXMudGVybSxcblx0XHRcdFx0XHRcdHF1ZXJ5X2FyZ3M6IHRoaXMub3B0aW9uKCAncXVlcnlfYXJncycgKSxcblx0XHRcdFx0XHRcdHF1ZXJ5X29wdGlvbnM6IHRoaXMub3B0aW9uKCAncXVlcnlfb3B0aW9ucycgKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0cmFuc3BvcnQ6ICggcGFyYW1zLCBzdWNjZXNzLCBmYWlsdXJlICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFqYXgoICdhamF4LXdwLXF1ZXJ5LWRhdGEnLCB7XG5cdFx0XHRcdFx0XHRkYXRhOiBwYXJhbXMuZGF0YSxcblx0XHRcdFx0XHRcdG9uU3VjY2Vzczogc3VjY2Vzcyxcblx0XHRcdFx0XHRcdG9uRXJyb3I6IGZhaWx1cmUsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdCRhcmcgPSB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmVsZW1lbnQuc2VsZWN0MiggJGFyZyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzZWxlY3QyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dmFyICR0aGlzICAgICA9IHRoaXMuZWxlbWVudCxcblx0XHRcdCRlbmFibGVkICA9ICR0aGlzLmZpbmQoICcud3Bvbmlvbi1lbmFibGVkJyApLFxuXHRcdFx0JGRpc2FibGVkID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWRpc2FibGVkJyApO1xuXG5cdFx0JGVuYWJsZWQuc29ydGFibGUoIHtcblx0XHRcdGNvbm5lY3RXaXRoOiAkZGlzYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdHVwZGF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0bGV0ICRlbCA9IHVpLml0ZW0uZmluZCggJ2lucHV0JyApO1xuXHRcdFx0XHRpZiggdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tZW5hYmxlZCcgKSApIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2Rpc2FibGVkJywgJ2VuYWJsZWQnICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2VuYWJsZWQnLCAnZGlzYWJsZWQnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkdGhpcy50cmlnZ2VyKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBhdm9pZCBjb25mbGljdFxuXHRcdCRkaXNhYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRlbmFibGVkLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICd1aS1zb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc29ydGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzdWJoZWFkaW5nJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzd2l0Y2hlcicsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndGV4dCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndGV4dGFyZWEnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBjc3NfdW5pdHMgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZm9udF93ZWlnaHRfc3R5bGUgPSBmYWxzZTtcblx0XHRsZXQgJGVsICAgICAgICAgICAgICAgID0gdGhpcy5lbGVtZW50O1xuXHRcdGxldCAkcHJldmlldyAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZvbnQtcHJldmlldycgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgICAgID0gdGhpcztcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0XG5cdFx0XHRcdCRmb250X2ZpZWxkICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicgKSxcblx0XHRcdFx0JGZvbnQgICAgICAgICAgICAgID0gJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkudmFsKCksXG5cdFx0XHRcdCRmb250X3dlaWdodF9zdHlsZSA9ICR0aGlzLmZvbnRfc3R5bGUoICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLnZhbCgpICksXG5cdFx0XHRcdCR0YWcgICAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC10YWcgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkY29sb3IgICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWZpZWxkLWNvbG9yX3BpY2tlciBpbnB1dC53cC1jb2xvci1waWNrZXInICkudmFsKCksXG5cdFx0XHRcdCRhbGlnbiAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1hbGlnbiBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRmb250U2l6ZSAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1zaXplIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGluZUhlaWdodCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGluZS1oZWlnaHQgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdC8vJGJhY2tVUEZvbnQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2t1cC1mb250IHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0Ly8kZGlyZWN0aW9uICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtZGlyZWN0aW9uIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxldHRlci1zcGFjaW5nIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHRocmVmICAgICAgICAgICAgICAgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PScgKyAkZm9udCArICc6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQsXG5cdFx0XHRcdGh0bWwgICAgICAgICAgICAgICA9ICc8bGluayBocmVmPVwiJyArIGhyZWYgKyAnXCIgY2xhc3M9XCJ3cHNmLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSArICdcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz4nO1xuXG5cdFx0XHRpZiggalF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0alF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkuYXR0ciggJ2hyZWYnLCBocmVmICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoICdoZWFkJyApLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGZvbnRTaXplID09PSAnJyB8fCAkZm9udFNpemUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGZvbnRTaXplID0gJzE4cHgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGxldHRlclNwYWNpbmcgPT09ICcnIHx8ICRsZXR0ZXJTcGFjaW5nID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nID0gJzFweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGluZUhlaWdodCA9PT0gJycgfHwgJGxpbmVIZWlnaHQgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxpbmVIZWlnaHQgPSAnMjBweCc7XG5cdFx0XHR9XG5cblxuXHRcdFx0bGV0ICRfYXR0cnMgPSAnIGZvbnQtZmFtaWx5OicgKyAkZm9udCArICc7ICcgK1xuXHRcdFx0XHQnIGZvbnQtd2VpZ2h0OicgKyAkZm9udF93ZWlnaHRfc3R5bGUud2VpZ2h0ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC1zdHlsZTonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLnN0eWxlICsgJzsgJyArXG5cdFx0XHRcdCcgdGV4dC1hbGlnbjonICsgJGFsaWduICsgJzsgJyArXG5cdFx0XHRcdCcgY29sb3I6ICcgKyAkY29sb3IgKyAnOycgK1xuXHRcdFx0XHQnIGZvbnQtc2l6ZTonICsgY3NzX3VuaXRzKCAkZm9udFNpemUgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxldHRlci1zcGFjaW5nOicgKyBjc3NfdW5pdHMoICRsZXR0ZXJTcGFjaW5nICkgKyAnOyAnICtcblx0XHRcdFx0JyBsaW5lLWhlaWdodDonICsgY3NzX3VuaXRzKCAkbGluZUhlaWdodCApICsgJzsgJztcblxuXG5cdFx0XHRsZXQgJHRleHQgPSAkcHJldmlldy50ZXh0KCk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuYXBwZW5kKCBqUXVlcnkoICc8JyArICR0YWcgKyAnPicgKyAkdGV4dCArICc8LycgKyAkdGFnICsgJyA+JyApICk7XG5cdFx0XHQkcHJldmlldy5maW5kKCAkdGFnICkuYXR0ciggJ3N0eWxlJywgJF9hdHRycyApO1xuXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgUHJvcGVyIFZhbGlkIEZvbnQgU3R5bGVzLlxuXHQgKiBAcGFyYW0gJGluZm9cblx0ICogQHJldHVybnMge3t3ZWlnaHQ6IHN0cmluZywgc3R5bGU6IHN0cmluZ319XG5cdCAqL1xuXHRmb250X3N0eWxlKCAkaW5mbyApIHtcblx0XHRsZXQgJHdlaWdodF92YWwgPSAnNDAwJyxcblx0XHRcdCRzdHlsZV92YWwgID0gJ25vcm1hbCc7XG5cblx0XHRzd2l0Y2goICRpbmZvICkge1xuXHRcdFx0Y2FzZSAnMTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICcxMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzMwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzMwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc1MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzkwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzkwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpdGFsaWMnOlxuXHRcdFx0XHQkc3R5bGVfdmFsID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4geyB3ZWlnaHQ6ICR3ZWlnaHRfdmFsLCBzdHlsZTogJHN0eWxlX3ZhbCB9O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndHlwb2dyYXBoeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRhZGQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b24nICksXG5cdFx0XHQkaW5wdXQgICAgPSAkZWxlbS5maW5kKCAnaW5wdXRbdHlwZT10ZXh0XScgKSxcblx0XHRcdCRzZXR0aW5ncyA9ICR0aGlzLm9wdGlvbiggJ3NldHRpbmdzJywge1xuXHRcdFx0XHRmcmFtZV90aXRsZTogJ1VwbG9hZCcsXG5cdFx0XHRcdHVwbG9hZF90eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRpbnNlcnRfdGl0bGU6ICdVc2UnLFxuXHRcdFx0fSApLCB3cF9tZWRpYV9mcmFtZTtcblxuXHRcdCRhZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHdwX21lZGlhX2ZyYW1lICkge1xuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHR0aXRsZTogJHNldHRpbmdzLmZyYW1lX3RpdGxlLFxuXHRcdFx0XHRsaWJyYXJ5OiB7XG5cdFx0XHRcdFx0dHlwZTogJHNldHRpbmdzLnVwbG9hZF90eXBlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRcdHRleHQ6ICRzZXR0aW5ncy5pbnNlcnRfdGl0bGUsXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSB3cF9tZWRpYV9mcmFtZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpO1xuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmF0dHJpYnV0ZXMudXJsICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gKTtcblx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd1cGxvYWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3dwX2VkaXRvcicsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHRleHRhcmVhID0gJGVsZW0uZmluZCggJ3RleHRhcmVhJyApO1xuXHRcdCRlbGVtLmZpbmQoICcjd3Bvbmlvbi13cC1saW5rLXBpY2tlciA+IGJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGV4dGFyZWEudmFsKCAnJyApO1xuXHRcdFx0aWYoICF3aW5kb3cud3BMaW5rICkge1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHR0aXRsZTogJHdwb25pb24udGV4dCggJ3dwX2xpbmtfZXJyb3JfdGl0bGUnLCAnV1AgTGluayBKUyBMaWIgTm90IEZvdW5kJyApLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy53cExpbmsub3BlbiggJHRleHRhcmVhLmF0dHIoICdpZCcgKSApO1xuXHRcdH0gKTtcblxuXG5cdFx0JHRleHRhcmVhLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApLmh0bWwoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApLnZhbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkudmFsKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN0YXJnZXQnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0YXJnZXQnICkudmFsKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEudGV4dCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3dwX2xpbmtzJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuLi9jb3JlL2RlYnVnJztcblxuLyoqXG4gKiBXUE9uaW9uIERlcGVuZGVuY3kgSGVscGVyIENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogV1BPbmlvbiBEZXBlbmRlbmN5IEhlbHBlciBDbGFzcy5cblx0ICogQHBhcmFtICRzZWxlY3RvclxuXHQgKiBAcGFyYW0gJGNvbnR4dFxuXHQgKiBAcGFyYW0gJGNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdHMgRGVwZW5kZW5jeSBXb3JrZXIuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkZGVwID0gdGhpcy5vcHRpb24oICdkZXBlbmRlbmN5JyApO1xuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRlcC5jb250cm9sbGVyICkge1xuXHRcdFx0aWYoICRkZXAuY29udHJvbGxlci5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmICRkZXAuY29uZGl0aW9uLmhhc093blByb3BlcnR5KCAka2V5ICkgJiYgJGRlcC52YWx1ZS5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRsZXQgJGNvbnRyb2xsZXIgPSAkZGVwLmNvbnRyb2xsZXIgWyAka2V5IF0sXG5cdFx0XHRcdFx0JGNvbmRpdGlvbiAgPSAkZGVwLmNvbmRpdGlvbiBbICRrZXkgXSxcblx0XHRcdFx0XHQkdmFsdWUgICAgICA9ICRkZXAudmFsdWUgWyAka2V5IF0sXG5cdFx0XHRcdFx0JGZpZWxkICAgICAgPSAnW2RhdGEtZGVwZW5kLWlkPVwiJyArICRjb250cm9sbGVyICsgJ1wiXSc7XG5cdFx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcubmVzdGFibGUgKSB7XG5cdFx0XHRcdFx0bGV0ICRJTlBVVCA9IHRoaXMuY29uZmlnLnBhcmVudC5maW5kKCAnW2RhdGEtZGVwZW5kLWlkPScgKyAkY29udHJvbGxlciArICddJyApO1xuXHRcdFx0XHRcdGlmKCAkSU5QVVQubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCRmaWVsZCA9ICdbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJHdwb25pb24uZmllbGRJRCggJElOUFVUICkgKyAnXCJdOmlucHV0Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5jcmVhdGVSdWxlKCAkZmllbGQsICRjb25kaXRpb24sICR2YWx1ZSApICk7XG5cdFx0XHRcdHRoaXMuc2V0X2NvbnR4dCggdGhpcy5jb250eHQuaW5jbHVkZSggdGhpcy5lbGVtZW50ICkgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ0RlcGVuZGVuY3knOiAkZGVwLCAnTmVzdGFibGUgRGVwZW5kZW5jeSc6IHRoaXMuY29uZmlnLm5lc3RhYmxlIH0gKTtcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXHR9XG59XG5cbiIsIi8qIGdsb2JhbCBhcmd1bWVudHM6dHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGU6dHJ1ZSAqL1xuLyogZ2xvYmFsIHRpcHB5OnRydWUgKi9cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIGpRdWVyeSApID0+IHtcblx0LyoqXG5cdCAqIFdQT25pb24gUmVsYXRlZCBGdW5jdGlvbnMuXG5cdCAqL1xuXHQkLmZuLmV4dGVuZCgge1xuXHRcdC8qKlxuXHRcdCAqIEFuaW1hdGUgQ1NTIFJlbGF0ZWQgRnVuY3Rpb25zLlxuXHRcdCAqL1xuXHRcdGFuaW1hdGVDc3M6IGZ1bmN0aW9uKCBhbmltYXRpb25OYW1lLCBjYWxsYmFjayApIHtcblx0XHRcdGxldCBhbmltYXRpb25FbmQgPSAoIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0bGV0IGFuaW1hdGlvbnMgPSB7XG5cdFx0XHRcdFx0YW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcblx0XHRcdFx0XHRPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdFx0TW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uRW5kJyxcblx0XHRcdFx0XHRXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGZvciggbGV0IHQgaW4gYW5pbWF0aW9ucyApIHtcblx0XHRcdFx0XHRpZiggZWwuc3R5bGVbIHQgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFuaW1hdGlvbnNbIHQgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKSggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKSApO1xuXG5cdFx0XHR0aGlzLmFkZENsYXNzKCAnYW5pbWF0ZWQgJyArIGFuaW1hdGlvbk5hbWUgKS5vbmUoIGFuaW1hdGlvbkVuZCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoIHRoaXMgKS5yZW1vdmVDbGFzcyggJ2FuaW1hdGVkICcgKyBhbmltYXRpb25OYW1lICk7XG5cdFx0XHRcdGlmKCB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soICQoIHRoaXMgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBBIEN1c3RvbSBXcmFwIENsYXNzIFRvIEhhbmRsZSBUaXBweSBJbnN0YW5jZVxuXHRcdCAqIEBwYXJhbSAkYXJndW1lbnRzXG5cdFx0ICogQHJldHVybnMgeyp9XG5cdFx0ICovXG5cdFx0dGlwcHk6IGZ1bmN0aW9uKCAkYXJndW1lbnRzICkge1xuXHRcdFx0bGV0IHRpcHB5X2hlbHBlciA9IHtcblx0XHRcdFx0Y3JlYXRlX2luc3RhbmNlOiBmdW5jdGlvbiggJGVsZW0sICRhcmd1bWVudHMgKSB7XG5cdFx0XHRcdFx0JGFyZ3VtZW50cyA9ICggdHlwZW9mICRhcmd1bWVudHMgPT09ICd1bmRlZmluZWQnICkgPyB7fSA6ICRhcmd1bWVudHM7XG5cdFx0XHRcdFx0aWYoICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRsZXQgJF9pbnN0YW5jZV9pZCA9ICdUaXBweScgKyB3aW5kb3cud3Bvbmlvbi5jb3JlLnJhbmRfaWQoKTtcblx0XHRcdFx0XHRcdCRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJywgJF9pbnN0YW5jZV9pZCApO1xuXG5cdFx0XHRcdFx0XHRsZXQgJHRpdGxlICAgICAgPSAkZWxlbS5hdHRyKCAndGl0bGUnICk7XG5cdFx0XHRcdFx0XHRsZXQgJGRhdGFfdGlwcHkgPSAkZWxlbS5hdHRyKCAnZGF0YS10aXBweScgKTtcblxuXHRcdFx0XHRcdFx0aWYoICR0aXRsZSAmJiAkdGl0bGUgIT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mICRhcmd1bWVudHMuY29udGVudCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0XHRcdFx0JGFyZ3VtZW50cy5jb250ZW50ID0gJHRpdGxlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCAkZGF0YV90aXBweSAmJiAkZGF0YV90aXBweSAhPT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgJGFyZ3VtZW50cy5jb250ZW50ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0XHQkYXJndW1lbnRzLmNvbnRlbnQgPSAkZGF0YV90aXBweTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSA9IHRpcHB5KCAkZWxlbVsgMCBdLCAkYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRfaW5zdGFuY2U6IGZ1bmN0aW9uKCAkZWxlbSApIHtcblx0XHRcdFx0XHRpZiggJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0ICRfaW5zdGFuY2VfaWQgPSAkZWxlbS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKTtcblx0XHRcdFx0XHRyZXR1cm4gKCB1bmRlZmluZWQgIT09IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdICkgPyB3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSA6IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiggdGhpcy5sZW5ndGggPiAxICkge1xuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRpcHB5X2hlbHBlci5jcmVhdGVfaW5zdGFuY2UoIGpRdWVyeSggdGhpcyApLCAkYXJndW1lbnRzICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJHN0YXR1cyA9IHRpcHB5X2hlbHBlci5jcmVhdGVfaW5zdGFuY2UoIGpRdWVyeSggdGhpcyApLCAkYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiAoIHRydWUgPT09ICRzdGF0dXMgKSA/IHRpcHB5X2hlbHBlci5nZXRfaW5zdGFuY2UoIGpRdWVyeSggdGhpcyApICkgOiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyBBbiBBY3RpdmUgaW5zdGFuY2Vcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aXBweV9nZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGxldCAkX2luc3RhbmNlX2lkID0galF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICk7XG5cdFx0XHRyZXR1cm4gKCB1bmRlZmluZWQgIT09IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdICkgPyB3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSA6IGZhbHNlO1xuXHRcdH0sXG5cdH0gKTtcblxuXHQvKipcblx0ICogUmV0dXJucyBBIEFic3RyYWN0IENsYXNzIEluc3RhbmNlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICRjb250eHRcblx0ICogQHJldHVybnMge3thamF4KCo9LCAqPSk6ICosIGpzX2Vycm9yKCopOiB2b2lkLCBpbml0X2ZpZWxkKCo9LCAqKTogdm9pZCwgc2V0X2FyZ3MoKik6ICosIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwgaWQoKTogKiwgcGx1Z2luX2lkKCk6ICosIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBoYW5kbGVfYXJncygqPSwgKj0pOiAqLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAqLCBvcHRpb24oKj0sICo9KTogKiwgb3B0aW9ucygpOiAqLCBqc192YWxpZGF0b3IoKTogdm9pZCwgaW5pdCgpLCByZWxvYWQoKTogKiwgbW9kdWxlKCk6ICosIHNldF9jb250eHQoKik6ICosIGNvbnR4dDogKiwgZWxlbWVudDogKiwgaG9vazogKiwgbW9kdWxlX2luaXQoKSwgc2V0X2VsZW1lbnQoKj0pOiAqfXwqfHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0fVxuXHQgKi9cblx0d2luZG93Lndwb25pb25fZmllbGQgPSAoICRlbGVtLCAkY29udHh0ID0ge30gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtLCAkY29udHh0ICk7XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgV1BPbmlvbiBOb3RpY2VzLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UgPSAoICRlbGVtICkgPT4ge1xuXHRcdGlmKCAkZWxlbS5maW5kKCAnLndwb25pb24tcmVtb3ZlJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0ICRfZWwgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJy53cG9uaW9uLXJlbW92ZScgKS50aXBweSgge1xuXHRcdFx0XHRcdGFwcGVuZFRvOiAoKSA9PiBqUXVlcnkoIHRoaXMgKVsgMCBdLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1yZW1vdmUnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCRfZWwuc2xpZGVVcCggJ3Nsb3cnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRfZWwucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0XHRyZXR1cm4gJGVsZW07XG5cdFx0fVxuXG5cdFx0bGV0ICRhdXRvID0gJGVsZW0uYXR0ciggJ2RhdGEtYXV0b2Nsb3NlJyApO1xuXHRcdGlmKCAkYXV0byApIHtcblx0XHRcdCRhdXRvID0gcGFyc2VJbnQoICRhdXRvICk7XG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdCRlbGVtLnNsaWRlVXAoICdzbG93JywgKCkgPT4ge1xuXHRcdFx0XHRcdCRlbGVtLnJlbW92ZSgpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LCAkYXV0byApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQmFzaWMgV1BPbmlvbiBKUyBTZXR1cC5cblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX3NldHVwID0gKCkgPT4ge1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB3aW5kb3cud3Bvbmlvbi5jb3JlLnNldHRpbmdzX2FyZ3MgKSApIHtcblx0XHRcdGxldCAkY29yZSA9IHdpbmRvdy53cG9uaW9uLmNvcmUud2luZG93QXJncyggJ3dwb25pb25fY29yZScsIGZhbHNlICk7XG5cdFx0XHRsZXQgJHRhbnMgPSB3aW5kb3cud3Bvbmlvbi5jb3JlLndpbmRvd0FyZ3MoICd3cG9uaW9uX2lsOG4nLCBmYWxzZSApO1xuXHRcdFx0aWYoIGZhbHNlID09PSAkY29yZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS5zZXR0aW5nc19hcmdzICAgID0gJGNvcmU7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLnRleHQgICAgICAgICAgICAgPSAkdGFucztcblx0XHRcdHdpbmRvdy53cG9uaW9uLmNvcmUuZGVidWdfaW5mbyAgICAgICA9IG51bGw7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLmZpZWxkX2RlYnVnX2luZm8gPSBudWxsO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIFdpdGggQSBGaWVsZCBDYWxsYmFjayBIb29rLlxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICogQHBhcmFtICRjYWxsYmFja1xuXHQgKiBAcGFyYW0gJG1vZHVsZVxuXHQgKi9cblx0d2luZG93Lndwb25pb25fcmVnaXN0ZXJfZmllbGQgPSAoICR0eXBlLCAkY2FsbGJhY2ssICRtb2R1bGUgPSAnJyApID0+IHtcblx0XHQkbW9kdWxlID0gKCAnJyA9PT0gJG1vZHVsZSApID8gJycgOiAkbW9kdWxlICsgJ18nO1xuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmFkZEFjdGlvbiggJ3dwb25pb25faW5pdF8nICsgJG1vZHVsZSArICdmaWVsZF8nICsgJHR5cGUsICd3cG9uaW9uX2NvcmUnLCAoICRlbGVtICkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0JGNhbGxiYWNrKCAkZWxlbSApO1xuXHRcdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coIGFyZ3VtZW50cywgJyBcXG4nICsgZSArICcgIFxcbkZvciA6IHdwb25pb25faW5pdF8nICsgJG1vZHVsZSArICdmaWVsZF8nICsgJHR5cGUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uIFVzZWQgb3V0c2lkZSBvZiBXUE9uaW9uIFRvIENyZWF0ZVxuXHQgKiBAcGFyYW0gJGluaXRfbWV0aG9kXG5cdCAqIEBwYXJhbSAkbWV0aG9kc1xuXHQgKiBAcmV0dXJucyB7e2luaXQ6ICosIG5ldygpOiAkY2xhc3MsIHByb3RvdHlwZTogJGNsYXNzfX1cblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX2NyZWF0ZV9maWVsZCA9ICggJGluaXRfbWV0aG9kLCAkbWV0aG9kcyA9IGZhbHNlICkgPT4ge1xuXHRcdGxldCAkb3JnX2NsYXNzID0gcmVxdWlyZSggJy4uL2NvcmUvZmllbGQnICkuZGVmYXVsdDtcblx0XHRsZXQgJGNsYXNzICAgICA9IGNsYXNzIGV4dGVuZHMgJG9yZ19jbGFzcyB7XG5cdFx0fTtcblxuXHRcdCRjbGFzcy5wcm90b3R5cGUuaW5pdCA9ICRpbml0X21ldGhvZDtcblxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkbWV0aG9kcyApICkge1xuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkbWV0aG9kcyApIHtcblx0XHRcdFx0aWYoICRtZXRob2RzLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0JGNsYXNzLnByb3RvdHlwZVsgJGtleSBdID0gJG1ldGhvZHNbICRrZXkgXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJGNsYXNzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBBIEZpZWxkIEpTIEZ1bmN0aW9uIFRvIFJlbmRlciBpdCBQcm9wZXJseVxuXHQgKiBAcGFyYW0gJGZpZWxkX3R5cGVcblx0ICogQHBhcmFtICRhcmd1bWVudFxuXHQgKiBAcGFyYW0gJG1vZHVsZVxuXHQgKiBAcGFyYW0gJGxvZ19lcnJcblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX2luaXRfZmllbGQgPSAoICRmaWVsZF90eXBlLCAkYXJndW1lbnQsICRtb2R1bGUgPSAnJywgJGxvZ19lcnIgPSB0cnVlICkgPT4ge1xuXHRcdCRtb2R1bGUgPSAoICcnID09PSAkbW9kdWxlICkgPyAnJyA6ICRtb2R1bGUgKyAnXyc7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLmhvb2tzLmhhc0FjdGlvbiggJ3dwb25pb25faW5pdF8nICsgJG1vZHVsZSArICdmaWVsZF8nICsgJGZpZWxkX3R5cGUgKSApIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkZmllbGRfdHlwZSwgJGFyZ3VtZW50ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKCB0cnVlID09PSAkbG9nX2VyciApIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1dQT25pb24gRmllbGQgVHlwZSA6ICcgKyAkZmllbGRfdHlwZSArICcgSW5pdCBGdW5jdGlvbiBOb3QgRm91bmQnLCAnXFxuQWN0aW9uIFVzZWQgOiB3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICRmaWVsZF90eXBlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgalF1ZXJ5ICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG4vKipcbiAqIEltYWdlIFBPUFVQIFZpZXcgQ2xhc3MuXG4gKi9cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBIYW5kbGVzIEltYWdlIFBPUFVQIFZpZXcuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkaW1hZ2UgPSAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1mdWxsc2l6ZScgKSApICkgPyB0aGlzLmVsZW1lbnQuYXR0ciggJ3NyYycgKSA6IHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1mdWxsc2l6ZScgKTtcblx0XHRzd2FsKCB7XG5cdFx0XHRpbWFnZVVybDogJGltYWdlLFxuXHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRiYWNrZHJvcDogYHJnYmEoMCwwLDAsMC40NClgXG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2VfcG9wdXAnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IHJhbmRfbWQ1IH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbi8qKlxuICogV1AgRWRpdG9yIEhlbHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogV1AgRWRpdG9yIEhlbHBlclxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJG1jZV9lZGl0b3IgID0gdGlueU1DRVByZUluaXQubWNlSW5pdFsgdGhpcy5vcHRpb24oICd3cGVkaXRvcl9pZCcgKSBdLFxuXHRcdFx0XHQkcXVpY2tfdGFncyAgPSB0aW55TUNFUHJlSW5pdC5xdEluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JE5FV19JRCAgICAgID0gJ3dwb25pb24td3AtZWRpdG9yLScgKyByYW5kX21kNSgpLFxuXHRcdFx0XHQkdGV4dEFyZWEgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLmNsb25lKCksXG5cdFx0XHRcdCRhY3R1YWxfSUQgICA9ICR0ZXh0QXJlYS5hdHRyKCAnaWQnICksXG5cdFx0XHRcdCRhY3R1YWxfaHRtbCA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCgpLFxuXHRcdFx0XHQkcmVnZXggICAgICAgPSBuZXcgUmVnRXhwKCAkYWN0dWFsX0lELCBcImdcIiApO1xuXHRcdFx0JGFjdHVhbF9odG1sICAgICA9ICRhY3R1YWxfaHRtbC5yZXBsYWNlKCAkcmVnZXgsICRORVdfSUQgKTtcblxuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKS5odG1sKCAkYWN0dWFsX2h0bWwgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkucGFyZW50KCkuYXBwZW5kKCAkdGV4dEFyZWEgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWE6bm90KCMnICsgJGFjdHVhbF9JRCArICcpJyApLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5hdHRyKCAnaWQnLCAkTkVXX0lEICk7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG1jZV9lZGl0b3IgKSApIHtcblx0XHRcdFx0JG1jZV9lZGl0b3Iuc2VsZWN0b3IgPSAnIycgKyAkTkVXX0lEO1xuXHRcdFx0XHR0aW55bWNlLmluaXQoICRtY2VfZWRpdG9yICk7XG5cdFx0XHRcdHRpbnlNQ0UuZXhlY0NvbW1hbmQoICdtY2VBZGRFZGl0b3InLCBmYWxzZSwgJyMnICsgJE5FV19JRCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRxdWlja190YWdzICkgKSB7XG5cdFx0XHRcdCRxdWlja190YWdzLmlkID0gJE5FV19JRDtcblx0XHRcdFx0cXVpY2t0YWdzKCAkcXVpY2tfdGFncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLyoqXG4gKiBXUE9uaW9uIEZpZWxkIFRvb2xUaXBcbiAqL1xuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEhhbmRsZSBFYWNoIEFuZCBFdmVyeSBTaW5nbGUgRmllbGQgVG9vbFRpcC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRmaWQgICAgICAgICA9IHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1maWVsZC1qc2lkJyApO1xuXHRcdGxldCAkdG9vbHRpcF9rZXkgPSBmYWxzZTtcblx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJ3dwb25pb24taGVscCc7XG5cdFx0fSBlbHNlIGlmKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLXdyYXAtdG9vbHRpcCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cmFwX3Rvb2x0aXAnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAkZmlkICsgJ3Rvb2x0aXAnO1xuXHRcdH1cblxuXHRcdGxldCAkYXJnID0gKCB0cnVlID09PSAkd3Bvbmlvbi52YWxpZF9qc29uKCAkZmlkICkgKSA/IEpTT04ucGFyc2UoICRmaWQgKSA6IHRoaXMub3B0aW9uKCAkdG9vbHRpcF9rZXksIGZhbHNlICk7XG5cblx0XHRjb25zdCBzdGF0ZSA9IHtcblx0XHRcdGlzRmV0Y2hpbmc6IGZhbHNlLFxuXHRcdFx0Y2FuRmV0Y2g6IHRydWVcblx0XHR9O1xuXG5cdFx0aWYoIGZhbHNlID09PSAkYXJnICkge1xuXHRcdFx0bGV0ICRjbGFzc1RvQ2hlY2sgPSBbICdkYXRhLXRpcHB5JywgJ2RhdGEtdGlwcHktYXJncycsICd0aXBweS1hcmdzJyBdO1xuXHRcdFx0bGV0ICRmb3VuZCAgICAgICAgPSBmYWxzZTtcblx0XHRcdGZvciggbGV0ICRrIGluICRjbGFzc1RvQ2hlY2sgKSB7XG5cdFx0XHRcdGxldCAkYXR0ciA9IHRoaXMuZWxlbWVudC5hdHRyKCAkY2xhc3NUb0NoZWNrWyAkayBdICk7XG5cdFx0XHRcdGlmKCAkYXR0ciApIHtcblx0XHRcdFx0XHRpZiggJHdwb25pb24udmFsaWRfanNvbiggJGF0dHIgKSApIHtcblx0XHRcdFx0XHRcdCRhcmcgICA9IEpTT04ucGFyc2UoICRhdHRyICk7XG5cdFx0XHRcdFx0XHQkZm91bmQgPSAkY2xhc3NUb0NoZWNrWyAkayBdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICRhdHRyLCBmYWxzZSApICkge1xuXHRcdFx0XHRcdFx0JGFyZyAgID0gdGhpcy5vcHRpb24oICRhdHRyLCBmYWxzZSApO1xuXHRcdFx0XHRcdFx0JGZvdW5kID0gJGNsYXNzVG9DaGVja1sgJGsgXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCAkYXJnICkge1xuXHRcdFx0JGFyZy5wZXJmb3JtYW5jZSA9IGZhbHNlO1xuXHRcdFx0aWYoICRhcmcuaW1hZ2UgIT09IHVuZGVmaW5lZCAmJiAkYXJnLmltYWdlICE9PSBmYWxzZSApIHtcblx0XHRcdFx0bGV0ICRpbWFnZSAgICAgICAgICA9ICRhcmcuaW1hZ2U7XG5cdFx0XHRcdCRhcmcuaW50ZXJhY3RpdmUgICAgPSB0cnVlO1xuXHRcdFx0XHQkYXJnLmNvbnRlbnQgICAgICAgID0gJ0xvYWRpbmcuLi4nO1xuXHRcdFx0XHQvLyRhcmcuaHRtbCAgICAgICAgICAgPSAnI3dwb3RwaW1nJztcblx0XHRcdFx0JGFyZy51cGRhdGVEdXJhdGlvbiA9IDIwMDA7XG5cdFx0XHRcdCRhcmcub25TaG93ICAgICAgICAgPSBhc3luYyBmdW5jdGlvbiggdGlwICkge1xuXHRcdFx0XHRcdGlmKCBzdGF0ZS5pc0ZldGNoaW5nIHx8ICFzdGF0ZS5jYW5GZXRjaCApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RhdGUuaXNGZXRjaGluZyA9IHRydWU7XG5cdFx0XHRcdFx0c3RhdGUuY2FuRmV0Y2ggICA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goICRpbWFnZSApO1xuXHRcdFx0XHRcdFx0Y29uc3QgYmxvYiAgICAgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cdFx0XHRcdFx0XHRjb25zdCB1cmwgICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcblx0XHRcdFx0XHRcdGlmKCB0aXAuc3RhdGUuaXNWaXNpYmxlICkge1xuXHRcdFx0XHRcdFx0XHR0aXAuc2V0Q29udGVudCggJzxkaXYgc3R5bGU9XCJtaW4td2lkdGg6MjVweDttaW4taGVpZ2h0OjI1cHg7XCI+PGltZyBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7XCIgc3JjPVwiJyArIHVybCArICdcIi8+PC9kaXY+JyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdFx0XHR0aXAuc2V0Q29udGVudCggYEZldGNoIGZhaWxlZC4gJHtlfWAgKTtcblx0XHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdFx0c3RhdGUuaXNGZXRjaGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5vbkhpZGRlbiAgICAgICA9ICggdGlwICkgPT4ge1xuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoID0gdHJ1ZTtcblx0XHRcdFx0XHR0aXAuc2V0Q29udGVudCggJ0xvYWRpbmcuLi4nICk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcucG9wcGVyT3B0aW9ucyAgPSB7XG5cdFx0XHRcdFx0bW9kaWZpZXJzOiB7XG5cdFx0XHRcdFx0XHRwcmV2ZW50T3ZlcmZsb3c6IHtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRoaWRlOiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRhcmcgPSB7fTtcblx0XHR9XG5cblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZy5hcHBlbmRUbyApICkge1xuXHRcdFx0JGFyZy5hcHBlbmRUbyA9ICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9JyArIHRoaXMuaWQoKSArICddJyApWyAwIF07XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRkZWxldGUgJGFyZy5pbWFnZTtcblx0XHRkZWxldGUgJGFyZy5pY29uO1xuXHRcdHRoaXMuZWxlbWVudC50aXBweSggdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJHRvb2x0aXBfa2V5ICkgKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3Rvb2x0aXAnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAnI2J1bGtfZWRpdCcsICgpID0+IHtcblx0XHRcdGxldCAkZmluYWxfYXJncyA9IHsgcG9zdF9pZHM6IFtdIH0sXG5cdFx0XHRcdCRidWxrX2VkaXQgID0gJCggJyNidWxrLWVkaXQnICk7XG5cblx0XHRcdCRidWxrX2VkaXQuZmluZCggJyNidWxrLXRpdGxlcycgKS5jaGlsZHJlbigpLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkZmluYWxfYXJncy5wb3N0X2lkcy5wdXNoKCAkKCB0aGlzICkuYXR0ciggJ2lkJyApLnJlcGxhY2UoIC9eKHR0bGUpL2ksICcnICkgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0JGJ1bGtfZWRpdC5maW5kKCAnLndwb25pb24tcXVpY2stZWRpdC1maWVsZHNldCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JGZpbmFsX2FyZ3MgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkKCB0aGlzICkuc2VyaWFsaXplT2JqZWN0KCksICRmaW5hbF9hcmdzICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAnc2F2ZS1idWxrLWVkaXQnLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRhc3luYzogZmFsc2UsXG5cdFx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHRcdFx0ZGF0YTogJGZpbmFsX2FyZ3MsXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIFdQT25pb25fR3V0dGVuYmVyZyB7XG5cdGNvbnN0cnVjdG9yKCAkaWQgPSAnJywgJGFyZ3MgPSB7fSApIHtcblx0XHR0aGlzLmlkICAgPSAkaWQ7XG5cdFx0dGhpcy5hcmdzID0gJHdwb25pb24uanNfZnVuYyggJGFyZ3MgKTtcblxuXHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzLnNhdmUgPT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0dGhpcy5hcmdzLnNhdmUgPSAoIGJsb2NrICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zYXZlX2hhbmRsZXIoIGJsb2NrICk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzLmVkaXQgPT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0dGhpcy5hcmdzLmVkaXQgPSAoIGJsb2NrICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5lZGl0X2hhbmRsZXIoIGJsb2NrICk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHdpbmRvdy53cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUoIHRoaXMuaWQsIHRoaXMuYXJncyApO1xuXHR9XG5cblx0c2F2ZV9oYW5kbGVyKCBibG9jayApIHtcblx0fVxuXG5cdGVkaXRfaGFuZGxlciggYmxvY2sgKSB7XG5cdFx0bGV0IGVsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xuXG5cdFx0bGV0ICRfcG9zdGlkcyAgICAgICAgICAgID0gSlNPTi5zdHJpbmdpZnkoIHBhcnNlSW50KCBqUXVlcnkoICdpbnB1dCNwb3N0X0lEJyApLnZhbCgpICkgKTtcblx0XHRibG9jay5hdHRyaWJ1dGVzLnBvc3RfaWQgPSAkX3Bvc3RpZHM7XG5cdFx0bGV0IGJsb2NrX2lkICAgICAgICAgICAgID0gYmxvY2suYXR0cmlidXRlcy5ibG9ja19pZCA9IGJsb2NrLmF0dHJpYnV0ZXMuYmxvY2tfaWQgfHwgYmxvY2suY2xpZW50SWQ7XG5cdFx0bGV0ICRyZW1vdGUgICAgICAgICAgICAgID0gZWwoICdmb3JtJywge1xuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1ibG9jay1ncm91cC1jb250ZW50Jyxcblx0XHRcdCdkYXRhLWJsb2NrLWlkJzogYmxvY2tfaWQsXG5cdFx0fSwgW1xuXHRcdFx0ZWwoIHdpbmRvdy53cC5jb21wb25lbnRzLlNlcnZlclNpZGVSZW5kZXIsIHtcblx0XHRcdFx0YmxvY2s6IHRoaXMuaWQsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRwb3N0X2lkOiAkX3Bvc3RpZHMsXG5cdFx0XHRcdFx0YmxvY2tfaWQ6IGJsb2NrX2lkLFxuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHRdICk7XG5cblxuXHRcdGxldCBjaGlsZHJlbiA9IFtdO1xuXG5cdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3Muc3R5bGUgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0aWYoIHRoaXMuYXJncy5zdHlsZSA9PT0gJ2RlZmF1bHQnICkge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKCBlbCggJ2RpdicsIHtcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdhY2YtYmxvY2stZ3JvdXAtaGVhZGluZycsXG5cdFx0XHRcdH0sIFtcblx0XHRcdFx0XHRlbCggJ3NwYW4nLCB7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdkYXNoaWNvbnMgZGFzaGljb25zLScgKyB0aGlzLmFyZ3MuaWNvblxuXHRcdFx0XHRcdH0gKSxcblx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0dGhpcy5hcmdzLnRpdGxlLFxuXHRcdFx0XHRdICkgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgc2VsZWN0b3IgPSAnZm9ybVtkYXRhLWJsb2NrLWlkPVwiJyArIGJsb2NrX2lkICsgJ1wiXSc7XG5cblx0XHRpZiggalF1ZXJ5KCBzZWxlY3RvciApLmxlbmd0aCA8IDEgKSB7XG5cdFx0fVxuXG5cblx0XHQvKmlmKCAkKCBzZWxlY3RvciApLmxlbmd0aCA8IDEgKSB7XG5cdFx0XHQkKCBkb2N1bWVudCApLm9uKCAnYWNiX3NhdmVfZmllbGRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0cnlVcGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiggYmxvY2suaXNTZWxlY3RlZCB8fCAkKCBzZWxlY3RvciApLmlzKCAnOmhvdmVyJyApICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCBibG9jay51cGRhdGVUaW1lb3V0ICk7XG5cdFx0XHRcdFx0XHRibG9jay51cGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dCggdHJ5VXBkYXRlLCA1MDAgKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRibG9jay5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRhY2ZfZmllbGRzOiBhY2Yuc2VyaWFsaXplKCAkKCBzZWxlY3RvciApIClbICdhY2YnIF0sXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoIHRyeVVwZGF0ZSwgMjUwICk7XG5cdFx0XHR9ICk7XG5cdFx0fSovXG5cdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gICBhY2YuZG9fYWN0aW9uKCdyZWFkeScsICQoJ1tkYXRhLWJsb2NrLWlkPVwiJyArIGJsb2NrX2lkICsgJ1wiXScpKTtcblx0XHQvLyB9LCA1MDApO1xuXG5cdFx0Y2hpbGRyZW4ucHVzaCggJHJlbW90ZSApO1xuXG5cdFx0cmV0dXJuIGVsKCAnZGl2JywgeyBjbGFzc05hbWU6ICd3cG9uaW9uLWJsb2NrLWdyb3VwLXdyYXBwZXInIH0sIGNoaWxkcmVuICk7XG5cblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCBmdW5jdGlvbigpIHtcblx0XHRpZiggIXdpbmRvdy53cCB8fCAhd2luZG93LndwLmJsb2NrcyB8fCAhd2luZG93LndwLmVkaXRvciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0XHQvL2xldCAkYmxvY2tzICAgICA9IHdpbmRvdy53cC5ibG9ja3M7XG5cdFx0XHRsZXQgJHdwb19ibG9ja3MgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9ndXR0ZW5iZXJnX2Jsb2NrcycgKTtcblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHdwb19ibG9ja3MgKSAmJiB3aW5kb3cud3Bvbmlvbi5fLmlzQXJyYXkoICR3cG9fYmxvY2tzICkgKSB7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHdwb19ibG9ja3MgKSB7XG5cdFx0XHRcdFx0aWYoICR3cG9fYmxvY2tzLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0XHRuZXcgV1BPbmlvbl9HdXR0ZW5iZXJnKCAka2V5LCAkd3BvX2Jsb2Nrc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIHdwICkgPT4ge1xuXHQvKipcblx0ICogRml4ZXMgTWVkaWEgUE9QVVAgTW9kYWwgVG8gV29yayBXaXRoIFdQb25pb24uXG5cdCAqL1xuXHRjb25zdCBmaXhfbWVkaWFfdWkgPSAoKSA9PiB7XG5cdFx0bGV0ICR0YWJsZSAgPSBqUXVlcnkoICcuY29tcGF0LWF0dGFjaG1lbnQtZmllbGRzJyApLFxuXHRcdFx0JGZpZWxkcyA9ICR0YWJsZS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApO1xuXHRcdCRmaWVsZHMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdCR0YWJsZS5iZWZvcmUoIGpRdWVyeSggdGhpcyApLnBhcmVudCgpLmh0bWwoKSApO1xuXHRcdH0gKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uX3NldHVwKCk7XG5cdFx0d2luZG93Lndwb25pb25fZmllbGQoICR0YWJsZS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApICkucmVsb2FkKCk7XG5cdH07XG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRpZiggJCggJy5jb21wYXQtYXR0YWNobWVudC1maWVsZHMnICkubGVuZ3RoID4gMCAmJiAkKCAnYm9keScgKS5oYXNDbGFzcyggJ3Bvc3QtdHlwZS1hdHRhY2htZW50JyApICkge1xuXHRcdFx0Zml4X21lZGlhX3VpKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKCB0eXBlb2Ygd3AubWVkaWEgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3cC5tZWRpYS5mcmFtZXMuYnJvd3NlICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0d3AubWVkaWEuZnJhbWVzLmJyb3dzZS5vbiggJ2VkaXQ6YXR0YWNobWVudCcsICgpID0+IHtcblx0XHRcdFx0XHRmaXhfbWVkaWFfdWkoKTtcblx0XHRcdFx0XHR3cC5tZWRpYS5mcmFtZXMuZWRpdC5vbiggJ2F0dGFjaG1lbnQ6Y29tcGF0OnJlYWR5JywgKCkgPT4gZml4X21lZGlhX3VpKCkgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdwICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuLi9jb3JlL21vZHVsZSc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLyoqXG4gKiBXUE9uaW9uIE1ldGFib3ggTW9kdWxlIEhhbmRsZXIuXG4gKi9cbmNsYXNzIFdQT25pb25fTWV0YWJveF9Nb2R1bGUgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdC8qKlxuXHQgKiBJbml0cyBNb2R1bGUuXG5cdCAqL1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLm1lbnUoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICdoMi5hamF4LWNvbnRhaW5lciBidXR0b24nLCB0aGlzLnNhdmVfaGFuZGxlciApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgTWV0YWJveCBNZW51J3Ncblx0ICovXG5cdG1lbnUoKSB7XG5cdFx0bGV0ICRlbGVtID0gdGhpcy5lbGVtZW50O1xuXHRcdCRlbGVtLm9uKCAnY2xpY2snLCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGxpIGEnLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2Ryb3Bkb3duJyApICkge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLmlzKCAnOnZpc2libGUnICkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLnNsaWRlVG9nZ2xlKCAnZmFzdCcgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGxpIHVsJyApLnNsaWRlVXAoICdmYXN0JyApO1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkaHJlZiAgICAgICAgICAgPSB3aW5kb3cud3Bvbmlvbi5oZWxwZXIudXJsX3BhcmFtcyggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaHJlZicgKSApLFxuXHRcdFx0XHRcdCRwYXJlbnQgICAgICAgICA9ICd3cG9uaW9uLXRhYi0nICsgJGhyZWZbICdjb250YWluZXItaWQnIF0sXG5cdFx0XHRcdFx0JHNlY3Rpb24gICAgICAgID0gKCAkaHJlZlsgJ3N1Yi1jb250YWluZXItaWQnIF0gIT09IHVuZGVmaW5lZCApID8gJHBhcmVudCArICctJyArICRocmVmWyAnc3ViLWNvbnRhaW5lci1pZCcgXSA6IGZhbHNlLFxuXHRcdFx0XHRcdCRwYXJlbnRfYWN0aXZlcyA9ICRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1wYXJlbnQtd3JhcHMnICksXG5cdFx0XHRcdFx0JGN1cnJlbnQgICAgICAgID0gJGVsZW0uZmluZCggJ2RpdiMnICsgJHBhcmVudCApO1xuXG5cdFx0XHRcdCRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1zZWN0aW9uLXdyYXBzJyApLmhpZGUoKTtcblx0XHRcdFx0JHBhcmVudF9hY3RpdmVzLmhpZGUoKTtcblxuXHRcdFx0XHRpZiggJGhyZWZbICdzdWItY29udGFpbmVyLWlkJyBdICE9PSB1bmRlZmluZWQgJiYgJGhyZWZbICdjb250YWluZXItaWQnIF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHQkY3VycmVudC5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJyBkaXYjJyArICRzZWN0aW9uICkuc2hvdygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JGN1cnJlbnQuc2hvdygpO1xuXG5cdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgYS5hY3RpdmUgJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlICcgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgPiBsaSA+IGEnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgYVtkYXRhLXdwb25pb24taWQ9XCJ3cG9uaW9uX21lbnVfJyArICRocmVmWyAnY29udGFpbmVyLWlkJyBdICsgJ1wiXScgKVxuXHRcdFx0XHRcdCAuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgQWpheCBTYXZlIEhhbmRsZXIuXG5cdCAqIEBwYXJhbSBlXG5cdCAqL1xuXHRzYXZlX2hhbmRsZXIoIGUgKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCAkcGFyZW50ID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHQkYmFzZSAgID0gJHBhcmVudC5wYXJlbnQoKS5wYXJlbnQoKSxcblx0XHRcdCRoaWRkZW4gPSAkcGFyZW50LmZpbmQoICdkaXYud3Bvbmlvbi1tZXRhYm94LXNlY3VyZS1kYXRhJyApO1xuXG5cdFx0JGJhc2UuYmxvY2soIHsgbWVzc2FnZTogbnVsbCwgb3ZlcmxheUNTUzogeyBiYWNrZ3JvdW5kOiAnIzAwMCcsIG9wYWNpdHk6IDAuNyB9IH0gKTtcblxuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnaWQnICkgKTtcblx0XHR9ICk7XG5cdFx0bGV0ICRmaWVsZHMgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoICc6aW5wdXQnICk7XG5cdFx0bGV0ICR2YWx1ZXMgPSAkZmllbGRzLnNlcmlhbGl6ZSgpO1xuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLnJlbW92ZUF0dHIoICduYW1lJyApO1xuXG5cdFx0JHdwb25pb24uYWpheCggJ3NhdmVfbWV0YWJveCcsIHsgZGF0YTogJHZhbHVlcyB9LCBmdW5jdGlvbiggcmVzICkge1xuXHRcdFx0JGJhc2UuaHRtbCggcmVzICk7XG5cdFx0XHQkYmFzZS51bmJsb2NrKCk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJGJhc2UuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0JCggJ2Rpdi5wb3N0Ym94Lndwb25pb24tbWV0YWJveCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBXUE9uaW9uX01ldGFib3hfTW9kdWxlKCAkKCB0aGlzICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qKlxuICogV1BPbmlvbiBRdWljayBFZGl0IE1vZHVsZSBIYW5kbGVyLlxuICovXG5jbGFzcyBXUE9uaW9uX1F1aWNrX0VkaXQgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdC8qKlxuXHQgKiBNb2R1bGUgSW5pdC5cblx0ICovXG5cdG1vZHVsZV9pbml0KCkge1xuXHRcdHRoaXMucG9zdF9pZCA9IHRoaXMuY29udHh0O1xuXHRcdGxldCAkaWQgICAgICA9ICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApICsgJ18nICsgdGhpcy5wb3N0X2lkO1xuXHRcdHRoaXMudmFsdWVzICA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGlkLCBmYWxzZSApO1xuXG5cdFx0aWYoIHRoaXMudmFsdWVzLmh0bWwgKSB7XG5cdFx0XHR0aGlzLnZhbHVlcy5odG1sID0galF1ZXJ5KCB0aGlzLnZhbHVlcy5odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50KCkuaHRtbCggdGhpcy52YWx1ZXMuaHRtbC5maW5kKCAnPiBkaXYnICkgKTtcblx0XHR9XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggdGhpcy5lbGVtZW50ICkucmVsb2FkKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIHdwICkgPT4ge1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0bGV0ICRsaXN0ID0gJCggJyN0aGUtbGlzdCcgKTtcblx0XHRpZiggJGxpc3QubGVuZ3RoID4gMCApIHtcblx0XHRcdCRsaXN0Lm9uKCAnY2xpY2snLCAnLmVkaXRpbmxpbmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IHBvc3RfaWQgPSBqUXVlcnkoIHRoaXMgKS5jbG9zZXN0KCAndHInICkuYXR0ciggJ2lkJyApO1xuXHRcdFx0XHRwb3N0X2lkICAgICA9IHBvc3RfaWQucmVwbGFjZSggJ3Bvc3QtJywgJycgKTtcblx0XHRcdFx0JCggJ3RyI2VkaXQtJyArIHBvc3RfaWQgKS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG5ldyBXUE9uaW9uX1F1aWNrX0VkaXQoIGpRdWVyeSggdGhpcyApLCBwb3N0X2lkICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0aW9uIGZyb20gJy4uL2NvcmUvdmFsaWRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3cgKSA9PiB7XG5cdGpRdWVyeSggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdC8qKlxuXHRcdCAqIEdsb2JhbCBWYXJpYWJsZVxuXHRcdCAqIHdpbmRvdy53cG9uaW9uLnZjIC8gd2luZG93Lndwb25pb25fdmNcblx0XHQgKiBAdHlwZSB7e2ZpZWxkczoge2Fic3RyYWN0OiAoe25ldygqPSwgKj0sICo9KToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfSwgbmV3KCo9LCAqPSwgKj0pOiB7cGFyYW1fbmFtZTogKiwgc2F2ZSgqPSwgKik6ICh1bmRlZmluZWQpLCB2Y19zYXZlKCo9LCAqPSk6IGJvb2xlYW4sIHNpbXBsZV9hcnJheSgqKTogKiwga2V5X3ZhbHVlX2FycmF5KCo9KTogc3RyaW5nLCBrZXlfdmFsdWVfbXVsdGlfYXJyYXkoKj0pOiBzdHJpbmcsIHNvcnRlcl92YWx1ZXMoKj0pOiAqLCBlbmNvZGVfY29udGVudCgqPSk6ICosIGlzX3ZjX3BhcmFtX2VsZW0oKj0pOiBib29sZWFuLCBpbml0X3NpbmdsZV9maWVsZDogeygqPSwgKj0pOiB2b2lkLCAoKj0sICo9KTogdm9pZH0sIGluaXQoKSwganNfZXJyb3IoKik6IHZvaWQsIGpzX2Vycm9yX2hhbmRsZXIoKj0pOiB2b2lkLCBqc192YWxpZGF0b3IoKTogdm9pZCwgbWF5YmVfanNfdmFsaWRhdGVfZWxlbSgqPSwgKj0pOiB2b2lkLCBqc192YWxpZGF0ZV9lbGVtKCo9LCAqKTogdm9pZCwgaGFuZGxlX2FyZ3MoKj0sICo9KTogKCp8JGRhdGEpLCBmaWVsZF9kZWJ1ZygpOiAodW5kZWZpbmVkKSwgb3B0aW9ucygpOiAqLCBvcHRpb24oKj0sICo9KTogKiwgaWQoKTogKiwgbW9kdWxlKCk6ICosIHBsdWdpbl9pZCgpOiAqLCBhamF4KCo9LCAqPSk6ICosIGluaXRfZmllbGQoKj0sICo9KTogdm9pZCwgcmVsb2FkKCk6ICosIHNldF9hcmdzKCopOiAqLCBnZXRfZmllbGRfcGFyZW50X2J5X2lkKCo9KTogKCp8alF1ZXJ5fEhUTUxFbGVtZW50KSwgbW9kdWxlX2luaXQoKSwgc2V0X2VsZW1lbnQoKj0pOiAqLCBzZXRfY29udHh0KCopOiAqLCBob29rOiAqLCBlbGVtZW50OiAqLCBjb250eHQ6ICp9LCBuZXcoKj0sICo9KToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfSwgcHJvdG90eXBlOiB7cGFyYW1fbmFtZTogKiwgc2F2ZSgqPSwgKik6ICh1bmRlZmluZWQpLCB2Y19zYXZlKCo9LCAqPSk6IGJvb2xlYW4sIHNpbXBsZV9hcnJheSgqKTogKiwga2V5X3ZhbHVlX2FycmF5KCo9KTogc3RyaW5nLCBrZXlfdmFsdWVfbXVsdGlfYXJyYXkoKj0pOiBzdHJpbmcsIHNvcnRlcl92YWx1ZXMoKj0pOiAqLCBlbmNvZGVfY29udGVudCgqPSk6ICosIGlzX3ZjX3BhcmFtX2VsZW0oKj0pOiBib29sZWFuLCBpbml0X3NpbmdsZV9maWVsZDogeygqPSwgKj0pOiB2b2lkLCAoKj0sICo9KTogdm9pZH0sIGluaXQoKSwganNfZXJyb3IoKik6IHZvaWQsIGpzX2Vycm9yX2hhbmRsZXIoKj0pOiB2b2lkLCBqc192YWxpZGF0b3IoKTogdm9pZCwgbWF5YmVfanNfdmFsaWRhdGVfZWxlbSgqPSwgKj0pOiB2b2lkLCBqc192YWxpZGF0ZV9lbGVtKCo9LCAqKTogdm9pZCwgaGFuZGxlX2FyZ3MoKj0sICo9KTogKCp8JGRhdGEpLCBmaWVsZF9kZWJ1ZygpOiAodW5kZWZpbmVkKSwgb3B0aW9ucygpOiAqLCBvcHRpb24oKj0sICo9KTogKiwgaWQoKTogKiwgbW9kdWxlKCk6ICosIHBsdWdpbl9pZCgpOiAqLCBhamF4KCo9LCAqPSk6ICosIGluaXRfZmllbGQoKj0sICo9KTogdm9pZCwgcmVsb2FkKCk6ICosIHNldF9hcmdzKCopOiAqLCBnZXRfZmllbGRfcGFyZW50X2J5X2lkKCo9KTogKCp8alF1ZXJ5fEhUTUxFbGVtZW50KSwgbW9kdWxlX2luaXQoKSwgc2V0X2VsZW1lbnQoKj0pOiAqLCBzZXRfY29udHh0KCopOiAqLCBob29rOiAqLCBlbGVtZW50OiAqLCBjb250eHQ6ICp9fXwqKX19fVxuXHRcdCAqL1xuXHRcdHdpbmRvdy53cG9uaW9uLnZjID0gd2luZG93Lndwb25pb25fdmMgPSB7XG5cdFx0XHRmaWVsZHM6IHtcblx0XHRcdFx0YWJzdHJhY3Q6IHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9maWVsZCcgKS5kZWZhdWx0LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogU2ltcGxlIEZ1bmN0aW9uIFRvIEluaXQgV1BvbmlvbiBWQyBNb2R1bGUuXG5cdFx0ICovXG5cdFx0d2luZG93Lndwb25pb25fdmNfaW5pdCA9ICgpID0+IHtcblx0XHRcdGxldCAkZWxlbWVudCA9IGpRdWVyeSggJy53cG9uaW9uLWZyYW1ld29yay53cG9uaW9uLW1vZHVsZS12YycgKTtcblxuXHRcdFx0aWYoICRlbGVtZW50Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdHdwb25pb25fc2V0dXAoKTtcblxuXHRcdFx0XHQkZWxlbWVudC5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggalF1ZXJ5KCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl92Y19maWVsZCggalF1ZXJ5KCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBIYW5kbGVzIFdQT25pb24gVkMgRmllbGQgRGVwZW5kZW5jeS5cblx0XHRcdFx0ICovXG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICRlbGVtZW50LCB7fSwge1xuXHRcdFx0XHRcdGxvZzogZmFsc2UsXG5cdFx0XHRcdFx0c2hvdzogKCBlbCApID0+IHtcblx0XHRcdFx0XHRcdGVsLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aGlkZTogKCBlbCApID0+IHtcblx0XHRcdFx0XHRcdGVsLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnNsaWRlVXAoKTtcblx0XHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkuYWRkQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEhhbmRsZXMgV1BPbmlvbiBWQyBGaWVsZCBWYWxpZGF0aW9ucy5cblx0XHRcdFx0ICovXG5cdFx0XHRcdG5ldyBXUE9uaW9uX1ZhbGlkYXRpb24oIGpRdWVyeSggJy53cGJfZWRpdF9mb3JtX2VsZW1lbnRzJyApICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFdQb25pb24gVkMgRmllbGQgQ2xhc3MgSW5zc3RhbmNlIENyZWF0b3IuXG5cdFx0ICogQHBhcmFtICRlbGVtXG5cdFx0ICogQHBhcmFtICRjb250eHRcblx0XHQgKiBAcmV0dXJucyB7d2luZG93Lndwb25pb24udmMuZmllbGRzLmFic3RyYWN0fVxuXHRcdCAqL1xuXHRcdHdpbmRvdy53cG9uaW9uX3ZjX2ZpZWxkID0gKCAkZWxlbSwgJGNvbnR4dCA9IHt9ICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLnZjLmZpZWxkcy5hYnN0cmFjdCggJGVsZW0sICRjb250eHQgKTtcblxuXHRcdC8qKlxuXHRcdCAqIEZ1bmN0aW9uIFVzZWQgb3V0c2lkZSBvZiBXUE9uaW9uIFRvIENyZWF0ZSBWQyBGaWVsZFxuXHRcdCAqIEBwYXJhbSAkaW5pdF9tZXRob2Rcblx0XHQgKiBAcGFyYW0gJG1ldGhvZHNcblx0XHQgKiBAcmV0dXJucyB7e2luaXQ6ICosIG5ldygpOiAkY2xhc3MsIHByb3RvdHlwZTogJGNsYXNzfX1cblx0XHQgKi9cblx0XHR3aW5kb3cud3Bvbmlvbl9jcmVhdGVfdmNfZmllbGQgPSAoICRpbml0X21ldGhvZCwgJG1ldGhvZHMgPSBmYWxzZSApID0+IHtcblx0XHRcdGxldCAkb3JnX2NsYXNzID0gcmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL2ZpZWxkJyApLmRlZmF1bHQ7XG5cdFx0XHRsZXQgJGNsYXNzICAgICA9IGNsYXNzIGV4dGVuZHMgJG9yZ19jbGFzcyB7XG5cdFx0XHR9O1xuXG5cdFx0XHQkY2xhc3MucHJvdG90eXBlLmluaXQgPSAkaW5pdF9tZXRob2Q7XG5cblx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkbWV0aG9kcyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICRtZXRob2RzICkge1xuXHRcdFx0XHRcdGlmKCAkbWV0aG9kcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdFx0JGNsYXNzLnByb3RvdHlwZVsgJGtleSBdID0gJG1ldGhvZHNbICRrZXkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAkY2xhc3M7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIExvYWRzIEFsbCBSZXF1aXJlZCBGaWVsZHMuXG5cdFx0ICovXG5cdFx0cmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL3NpbmdsZS12YWx1ZScgKTtcblx0XHRyZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvYWxsLWZpZWxkcycgKTtcblx0XHRyZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvc2VsZWN0JyApO1xuXHRcdHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9jaGVja2JveC1yYWRpbycgKTtcblx0fSApO1xufSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX1ZDX0ZpZWxkIGZyb20gJy4vZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fVkNfRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmlzX3ZjX3BhcmFtX2VsZW0oKSApIHtcblx0XHRcdHRoaXMuaW5wdXRfY2hhbmdlKCk7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24oICdjaGFuZ2UnLCAoKSA9PiB0aGlzLmlucHV0X2NoYW5nZSgpICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24oICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJywgKCkgPT4gdGhpcy5pbnB1dF9jaGFuZ2UoKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiBIb29rcyBXaXRoIDppbnB1dCBjaGFuZ2UgZXZlbiBhbmQgdHJpZ2dlcnMgc2F2ZSBmdW5jdGlvbi5cblx0ICovXG5cdGlucHV0X2NoYW5nZSgpIHtcblx0XHR0aGlzLnNhdmUoIHRoaXMuaW5wdXRfZGF0YSgpLCAnc29ydGVyX3ZhbHVlcycgKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdHRoaXMuc2F2ZSggdGhpcy5pbnB1dF9kYXRhKCksICdzb3J0ZXJfdmFsdWVzJyApO1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAna2V5dmFsdWVfcGFpcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYmFja2dyb3VuZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfbGlua3MnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ZpZWxkc2V0JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdhY2NvcmRpb24nLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dyb3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdqcXVlcnlfdGFiJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzb3J0ZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2Nsb25lX2VsZW1lbnQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ZvbnRfc2VsZWN0b3InLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2RhdGVfcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xufSApKCB3aW5kb3cgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fVkNfRmllbGQgZnJvbSAnLi9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9WQ19GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuaXNfdmNfcGFyYW1fZWxlbSgpICkge1xuXHRcdFx0aWYoIHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24tZWxlbWVudC1yYWRpbycgKSAmJiAwID09PSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWNoZWNrYm94LXJhZGlvLWdyb3VwJyApLmxlbmd0aCApIHtcblx0XHRcdFx0dGhpcy5oYW5kbGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZSgpICk7XG5cdFx0XHR9IGVsc2UgaWYoICggdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5sZW5ndGggPiAxICkgKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGUoKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0ICR0aGlzID0gdGhpcztcblx0XHRcdFx0bGV0ICR2YWwgID0gdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5hdHRyKCAndmFsdWUnICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuYXR0ciggJ2RhdGEtb3JndmFsJywgJHZhbCApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHRoaXMuaGFuZGxlX3NpbmdsZV9jaGFuZ2UoIGpRdWVyeSggdGhpcyApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5oYW5kbGVfc2luZ2xlX2NoYW5nZSggalF1ZXJ5KCB0aGlzICkgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFNpbmdsZSBDaGVja2JveCBDaGFuZ2UgRXZlbnRzLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGhhbmRsZV9zaW5nbGVfY2hhbmdlKCAkZWxlbSApIHtcblx0XHRpZiggJGVsZW0uaXMoICc6Y2hlY2tlZCcgKSApIHtcblx0XHRcdCRlbGVtLnZhbCggJGVsZW0uYXR0ciggJ2RhdGEtb3JndmFsJyApICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRlbGVtLnZhbCggJ2ZhbHNlJyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIE11bHRpcGxlIENoZWNrYm94ZXNcblx0ICovXG5cdGhhbmRsZSgpIHtcblx0XHR0aGlzLnNhdmUoIHRoaXMuaW5wdXRfZGF0YSgpLCAnc29ydGVyX3ZhbHVlcycgKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY2hlY2tib3hfcmFkaW8nLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3NlbGVjdCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY29sb3JfcGFsZXR0ZScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc3dpdGNoZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG59ICkoIHdpbmRvdyApO1xuIiwiLyogZ2xvYmFsIHdwb25pb25faW5pdF9maWVsZDp0cnVlICovXG5pbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi8uLi9jb3JlL2ZpZWxkJztcblxuY29uc3QgYmFzZTY0X2VuY29kZSA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmJhc2U2NF9lbmNvZGU7XG5jb25zdCByYXd1cmxlbmNvZGUgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkucmF3dXJsZW5jb2RlO1xuXG4vKipcbiAqIEN1c3RvbSBWQyBBYnN0cmFjdCBGaWVsZCBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAkc2VsZWN0b3Jcblx0ICogQHBhcmFtICRjb250ZXh0XG5cdCAqIEBwYXJhbSAkY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyA9IHt9ICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250ZXh0LCAkY29uZmlnICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBWaXN1YWwgQ29tcG9zZXIgUGFyYW0gbmFtZS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQgcGFyYW1fbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmRhdGEoICdwYXJhbS1uYW1lJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBBbmQgQ29udmVydHMgVmFsdWUgVG8gU2F2ZSBpbnRvIFZDLlxuXHQgKiBAcGFyYW0gJHNhdmVfZGF0YVxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICovXG5cdHNhdmUoICRzYXZlX2RhdGEsICR0eXBlICkge1xuXHRcdGlmKCAkc2F2ZV9kYXRhID09PSBudWxsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCAkdmFsdWUgPSAnJztcblxuXHRcdGlmKCAkc2F2ZV9kYXRhICE9PSAnJyApIHtcblx0XHRcdGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdhcnJheScgKSB7XG5cdFx0XHRcdCR2YWx1ZSA9IHRoaXMuc2ltcGxlX2FycmF5KCAkc2F2ZV9kYXRhICk7XG5cdFx0XHR9IGVsc2UgaWYoIHR5cGVvZiAkc2F2ZV9kYXRhID09PSAnb2JqZWN0JyAmJiAkdHlwZSA9PT0gJ2tleV92YWx1ZV9hcnJheScgKSB7XG5cdFx0XHRcdCR2YWx1ZSA9IHRoaXMua2V5X3ZhbHVlX2FycmF5KCAkc2F2ZV9kYXRhICk7XG5cdFx0XHR9IGVsc2UgaWYoIHR5cGVvZiAkc2F2ZV9kYXRhID09PSAnb2JqZWN0JyAmJiAkdHlwZSA9PT0gJ2tleV92YWx1ZV9tdWx0aV9hcnJheScgKSB7XG5cdFx0XHRcdCR2YWx1ZSA9IHRoaXMua2V5X3ZhbHVlX211bHRpX2FycmF5KCAkc2F2ZV9kYXRhICk7XG5cdFx0XHR9IGVsc2UgaWYoIHR5cGVvZiAkc2F2ZV9kYXRhID09PSAnb2JqZWN0JyAmJiAkdHlwZSA9PT0gJ3NvcnRlcl92YWx1ZXMnICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLnNvcnRlcl92YWx1ZXMoICRzYXZlX2RhdGEgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy52Y19zYXZlKCAkdmFsdWUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTYXZlcyBHaXZlbiBWYWx1ZSBUbyBWaXN1YWwgQ29tcG9zZXIuXG5cdCAqIEBwYXJhbSAkcGFyYW1fbmFtZVxuXHQgKiBAcGFyYW0gJHZhbHVlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0dmNfc2F2ZSggJHZhbHVlLCAkcGFyYW1fbmFtZSA9IHRoaXMucGFyYW1fbmFtZSApIHtcblx0XHRsZXQgJGtleSA9ICdkaXYjd3Bvbmlvbi12Yy1zZXR0aW5ncyc7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAka2V5ICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZCggJzxkaXYgaWQ9XCJ3cG9uaW9uLXZjLXNldHRpbmdzXCIgY2xhc3M9XCJoaWRkZW5cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7dmlzaWJpbGl0eTogaGlkZGVuO1wiID48L2Rpdj4nICk7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAka2V5ICkubGVuZ3RoID09PSAxICkge1xuXHRcdFx0bGV0ICRwYXJlbnQgPSB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApO1xuXHRcdFx0aWYoICRwYXJlbnQuZmluZCggJz4gIycgKyAkcGFyYW1fbmFtZSArICcud3BiX3ZjX3BhcmFtX3ZhbHVlJyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoIGpRdWVyeSggJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJcIiBpZD1cIicgKyAkcGFyYW1fbmFtZSArICdcIiBuYW1lPVwiJyArICRwYXJhbV9uYW1lICsgJ1wiIGNsYXNzPVwid3BiX3ZjX3BhcmFtX3ZhbHVlXCIgLz4nICkgKTtcblx0XHRcdH1cblxuXHRcdFx0JHBhcmVudC5maW5kKCAnPiAjJyArICRwYXJhbV9uYW1lICsgJy53cGJfdmNfcGFyYW1fdmFsdWUnICkudmFsKCAkdmFsdWUgKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgQW4gQXJyYXkgSW50byBTdHJpbmcgVXNpbmcgLFxuXHQgKiBAcGFyYW0gJHNhdmVfZGF0YVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHNpbXBsZV9hcnJheSggJHNhdmVfZGF0YSApIHtcblx0XHRyZXR1cm4gJHNhdmVfZGF0YS5qb2luKCAnLCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBBbiBBcnJheSBJbnRvIEtleXZhbHVlIGFzIGJlbG93XG5cdCAqIGtleTp2YWx1ZXxrZXkyOnZhbHVlMlxuXHQgKlxuXHQgKiBAcGFyYW0gJHNhdmVfZGF0YVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0a2V5X3ZhbHVlX2FycmF5KCAkc2F2ZV9kYXRhICkge1xuXHRcdGxldCAkciA9IFtdO1xuXHRcdGpRdWVyeS5lYWNoKCAkc2F2ZV9kYXRhLCBmdW5jdGlvbiggJGssICR2ICkge1xuXHRcdFx0bGV0ICRzID0gJGsgKyAnOicgKyAkdjtcblx0XHRcdCRyLnB1c2goICRzICk7XG5cdFx0fSApO1xuXHRcdHJldHVybiAkci5qb2luKCAnfCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBNdWx0aXBsZSBBcnJheSBhcyBiZWxvd1xuXHQgKiBrZXk6dmFsdWUsdmFsdWUyfGtleTI6dmFsdWUzLHZhbHVlNFxuXHQgKlxuXHQgKiBAcGFyYW0gJHNhdmVfZGF0YVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0a2V5X3ZhbHVlX211bHRpX2FycmF5KCAkc2F2ZV9kYXRhICkge1xuXHRcdGxldCAkciA9IFtdO1xuXHRcdGpRdWVyeS5lYWNoKCAkc2F2ZV9kYXRhLCBmdW5jdGlvbiggJGssICR2ICkge1xuXHRcdFx0aWYoIHR5cGVvZiAkdiA9PT0gJ29iamVjdCcgKSB7XG5cdFx0XHRcdCR2ID0gJHYuam9pbiggJywnICk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgJHMgPSAkayArICc6JyArICR2O1xuXHRcdFx0JHIucHVzaCggJHMgKTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuICRyLmpvaW4oICd8JyApO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAkc2F2ZV9kYXRhXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c29ydGVyX3ZhbHVlcyggJHNhdmVfZGF0YSApIHtcblx0XHRyZXR1cm4gdGhpcy5lbmNvZGVfY29udGVudCggSlNPTi5zdHJpbmdpZnkoICRzYXZlX2RhdGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEVuY29kZXMgU3RyaW5nIEludG8gQmFzZTY0LlxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICovXG5cdGVuY29kZV9jb250ZW50KCAkZGF0YSApIHtcblx0XHRyZXR1cm4gYmFzZTY0X2VuY29kZSggcmF3dXJsZW5jb2RlKCAkZGF0YSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGdpdmVuIGVsZW1lbnQgaXMgaG9va2VkIFRvIFZpc3VhbCBDb21wb3Nlci5cblx0ICogQHBhcmFtICRwYXJlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRpc192Y19wYXJhbV9lbGVtKCAkcGFyZW50ID0gdGhpcy5lbGVtZW50ICkge1xuXHRcdGlmKCAkcGFyZW50LmRhdGEoICdwYXJhbS1uYW1lJyApID09PSB1bmRlZmluZWQgfHwgJHBhcmVudC5kYXRhKCAncGFyYW0tbmFtZScgKSA9PT0gJycgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIFNpbmdsZSBGaWVsZC5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0aW5pdF9zaW5nbGVfZmllbGQoICR0eXBlLCAkZWxlbSApIHtcblx0XHR3cG9uaW9uX2luaXRfZmllbGQoICR0eXBlLCAkZWxlbSwgJ3ZjJywgZmFsc2UgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBJbnB1dCBWYWx1ZXMgSW50byBKUy9QSFAgT2JqZWN0L0FycmF5IGFuZCByZXR1cm5zIGl0LlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGlucHV0X2RhdGEoKSB7XG5cdFx0bGV0ICRkYXRhID0gdGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQ6bm90KC53cGJfdmNfcGFyYW1fdmFsdWUpJyApLnNlcmlhbGl6ZU9iamVjdCgpO1xuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGRhdGFbIHRoaXMucGFyYW1fbmFtZSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gJGRhdGFbIHRoaXMucGFyYW1fbmFtZSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gJGRhdGE7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX1ZDX0ZpZWxkIGZyb20gJy4vZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fVkNfRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmlzX3ZjX3BhcmFtX2VsZW0oKSApIHtcblx0XHRcdGxldCAkc2VsZWN0ID0gdGhpcy5lbGVtZW50LmZpbmQoICdzZWxlY3QnICk7XG5cdFx0XHRpZiggJHNlbGVjdC5sZW5ndGggPT09IDEgJiYgJ211bHRpcGxlJyA9PT0gJHNlbGVjdC5hdHRyKCAnbXVsdGlwbGUnICkgKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZSggJHNlbGVjdC52YWwoKSwgJ2FycmF5JyApO1xuXHRcdFx0XHQkc2VsZWN0Lm9uKCAnY2hhbmdlJywgKCBlICkgPT4gdGhpcy5zYXZlKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpLCAnYXJyYXknICkgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NlbGVjdCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcbn0gKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5pc192Y19wYXJhbV9lbGVtKCkgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmFkZENsYXNzKCAnd3BiX3ZjX3BhcmFtX3ZhbHVlJyApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2VfdXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd1cGxvYWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ljb25fcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdnYWxsZXJ5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xufSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCAoKSA9PiB7XG5cdFx0JCggJyN3b29jb21tZXJjZS1wcm9kdWN0LWRhdGEnICkub24oICd3b29jb21tZXJjZV92YXJpYXRpb25zX2xvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICcud3Bvbmlvbi1mcmFtZXdvcmsud3Bvbmlvbi13b29jb21tZXJjZS12YXJpYXRpb24nICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXG5cdFx0JCggJyN2YXJpYWJsZV9wcm9kdWN0X29wdGlvbnMnICkub24oICd3b29jb21tZXJjZV92YXJpYXRpb25zX2FkZGVkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJy53cG9uaW9uLWZyYW1ld29yay53cG9uaW9uLXdvb2NvbW1lcmNlLXZhcmlhdGlvbicgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgJCApID0+IHtcblx0JC5mbi5XUE9uaW9uX29uQXZhaWxhYmxlID0gZnVuY3Rpb24oIGZuICkge1xuXHRcdGxldCBzZWwgPSB0aGlzLnNlbGVjdG9yLFxuXHRcdFx0dGltZXI7XG5cdFx0aWYoIHRoaXMubGVuZ3RoID4gMCApIHtcblx0XHRcdGZuLmNhbGwoIHRoaXMgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZXIgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKCAkKCBzZWwgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdGZuLmNhbGwoICQoIHNlbCApICk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggdGltZXIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMzAwICk7XG5cdFx0fVxuXHR9O1xuXG5cdHdpbmRvdy53cG9uaW9uX3dwX3BvaW50ZXJfY3JlYXRlID0gKCkgPT4ge1xuXG5cdH07XG5cblxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0bGV0ICRwb2ludGVyc19ncm91cCA9ICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cF9wb2ludGVycycsIGZhbHNlICk7XG5cblx0XHRpZiggJHBvaW50ZXJzX2dyb3VwICkge1xuXHRcdFx0Zm9yKCBsZXQgJGdyb3VwX2lkIGluICRwb2ludGVyc19ncm91cCApIHtcblx0XHRcdFx0aWYoICEkcG9pbnRlcnNfZ3JvdXAuaGFzT3duUHJvcGVydHkoICRncm91cF9pZCApICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yKCBsZXQgJHBvaW50ZXJfa2V5IGluICRwb2ludGVyc19ncm91cFsgJGdyb3VwX2lkIF0gKSB7XG5cdFx0XHRcdFx0aWYoICEkcG9pbnRlcnNfZ3JvdXBbICRncm91cF9pZCBdLmhhc093blByb3BlcnR5KCAkcG9pbnRlcl9rZXkgKSApIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCAkcG9pbnRlciA9ICRwb2ludGVyc19ncm91cFsgJGdyb3VwX2lkIF1bICRwb2ludGVyX2tleSBdO1xuXG5cblx0XHRcdFx0XHQkKCAkcG9pbnRlci5zZWxlY3RvciApLldQT25pb25fb25BdmFpbGFibGUoICgpID0+IHtcblx0XHRcdFx0XHRcdGlmKCAhJHBvaW50ZXIuc2hvdyApIHtcblx0XHRcdFx0XHRcdFx0JHBvaW50ZXIuc2hvdyA9ICdvcGVuJztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bGV0ICRoYW5kbGVyID0ge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnPGgzPicgKyAkcG9pbnRlci50aXRsZSArICc8L2gzPjxwPicgKyAkcG9pbnRlci50ZXh0ICsgJzwvcD4nLFxuXHRcdFx0XHRcdFx0XHRwb2ludGVyV2lkdGg6IHBhcnNlSW50KCAkcG9pbnRlci53aWR0aCApLFxuXHRcdFx0XHRcdFx0XHRwb2ludGVyQ2xhc3M6ICd3cC1wb2ludGVyIHBvaW50ZXJwbHVzJyArICRwb2ludGVyLmNsYXNzLFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdGVkZ2U6ICRwb2ludGVyLmVkZ2UsXG5cdFx0XHRcdFx0XHRcdFx0YWxpZ246ICRwb2ludGVyLmFsaWduXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGNsb3NlOiAoKSA9PiAkLnBvc3QoIHdpbmRvdy5hamF4dXJsLCB7XG5cdFx0XHRcdFx0XHRcdFx0cG9pbnRlcjogJHBvaW50ZXJfa2V5LFxuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ2Rpc21pc3Mtd3AtcG9pbnRlcidcblx0XHRcdFx0XHRcdFx0fSApLFxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0JGhhbmRsZXIuYnV0dG9ucyA9IGZ1bmN0aW9uKCBldmVudCwgdCApIHtcblx0XHRcdFx0XHRcdFx0bGV0ICRidXR0b247XG5cdFx0XHRcdFx0XHRcdGlmKCAkcG9pbnRlci5qc25leHQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGpzbmV4dCA9IG5ldyBGdW5jdGlvbiggJ3QnLCAnJCcsICRwb2ludGVyLmpzbmV4dCApO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBqc25leHQoIHQsIGpRdWVyeSApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYoICRwb2ludGVyLm5leHQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0JGJ1dHRvbiA9IGpRdWVyeSggJzxhIGlkPVwicG9pbnRlci1jbG9zZVwiIGNsYXNzPVwiYnV0dG9uIGFjdGlvblwiPk5leHQ8L2E+JyApO1xuXHRcdFx0XHRcdFx0XHRcdCRidXR0b24uYmluZCggJ2NsaWNrLnBvaW50ZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHQuZWxlbWVudC5wb2ludGVyKCAnY2xvc2UnICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgJG5leHQgPSAkcG9pbnRlcnNfZ3JvdXBbICRncm91cF9pZCBdWyAkcG9pbnRlci5uZXh0IF07XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCBmYWxzZSA9PT0gJG5leHQucGFyZW50ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICRuZXh0LnNlbGVjdG9yICkucG9pbnRlciggJ29wZW4nICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkbmV4dC5pbnN0YW5jZSApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICRuZXh0LnNlbGVjdG9yIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucG9pbnRlciggJG5leHQuaW5zdGFuY2UgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5wb2ludGVyKCAnb3BlbicgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoICRuZXh0Lmljb25fY2xhc3MgIT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKCAnLnBwLScgKyAkcG9pbnRlci5uZXh0ICsgJyAucHAtcG9pbnRlci1jb250ZW50IGgzJyApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCAnZGFzaGljb25zLWJlZm9yZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyggJG5leHQuaWNvbl9jbGFzcyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJGJ1dHRvbjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsZXQgY2xvc2UgID0gJ0Rpc21pc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0YnV0dG9uID0galF1ZXJ5KCAnPGEgY2xhc3M9XCJjbG9zZVwiIGhyZWY9XCIjXCI+JyArIGNsb3NlICsgJzwvYT4nICk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGJ1dHRvbi5iaW5kKCAnY2xpY2sucG9pbnRlcicsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dC5lbGVtZW50LnBvaW50ZXIoICdjbG9zZScgKTtcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRpZiggZmFsc2UgPT09ICRwb2ludGVyLnBhcmVudCApIHtcblx0XHRcdFx0XHRcdFx0bGV0IHNldHVwID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCQoICRwb2ludGVyLnNlbGVjdG9yICkucG9pbnRlciggJGhhbmRsZXIgKS5wb2ludGVyKCAkcG9pbnRlci5zaG93ICk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHNldHVwKCk7XG5cdFx0XHRcdFx0XHRcdCRoYW5kbGVyID0gbnVsbDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCRwb2ludGVyc19ncm91cFsgJGdyb3VwX2lkIF1bICRwb2ludGVyX2tleSBdLmluc3RhbmNlID0gJGhhbmRsZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciggbGV0ICRpZCBpbiAkcG9pbnRlcnNfZ3JvdXAgKSB7XG5cdFx0XHRcdGlmKCAkcG9pbnRlcnNfZ3JvdXAuaGFzT3duUHJvcGVydHkoICRpZCApICkge1xuXHRcdFx0XHRcdGZvciggbGV0ICRwaWQgaW4gJHBvaW50ZXJzX2dyb3VwWyAkaWQgXSApIHtcblx0XHRcdFx0XHRcdGlmKCAkcG9pbnRlcnNfZ3JvdXBbICRpZCBdLmhhc093blByb3BlcnR5KCAkcGlkICkgKSB7XG5cdFx0XHRcdFx0XHRcdGxldCAkcG9pbnRlciA9ICRwb2ludGVyc19ncm91cFsgJGlkIF1bICRwaWQgXTtcblxuXHRcdFx0XHRcdFx0XHRpZiggJHBvaW50ZXJzX2dyb3VwWyAkaWQgXVsgJHBvaW50ZXIubmV4dCBdICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vXHRqUXVlcnkoICRwb2ludGVyc19ncm91cFsgJGlkIF1bICRwb2ludGVyLm5leHQgXS5zZWxlY3RvciApLnBvaW50ZXIoICdjbG9zZScgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xufSApKCB3aW5kb3csIGpRdWVyeSApO1xuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0b3IgZnJvbSAnLi9jb3JlL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlSG9va3MgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuLy8gVlNQIEpTIEhlbHBlciBHbG9iYWwuXG53aW5kb3cudnNwX2pzX2hlbHBlciA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApO1xuXG5yZXF1aXJlKCAnLi9oZWxwZXJzL2Z1bmN0aW9ucycgKTtcblxuLy8gV1BPbmlvbiBDb3JlIFNvdXJjZS5cbndpbmRvdy53cG9uaW9uID0gd2luZG93Lndwb25pb24gfHwgT2JqZWN0LmNyZWF0ZSgge1xuXHQvKipcblx0ICogTG9kYXNoIG5vQ29uZmxpY3QgVmFyaWFibGUuXG5cdCAqL1xuXHRfOiB3aW5kb3cubG9kYXNoLm5vQ29uZmxpY3QoKSxcblxuXHQvKipcblx0ICogQ3VyYXRlZCBjb2xsZWN0aW9uIG9mIHVzZWZ1bCBKYXZhU2NyaXB0IHNuaXBwZXRzLlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3ZzcC1qcy1oZWxwZXJcblx0ICovXG5cdGhlbHBlcjogd2luZG93LnZzcF9qc19oZWxwZXIsXG5cblx0LyoqXG5cdCAqIEEgbGlnaHR3ZWlnaHQgJiBlZmZpY2llbnQgRXZlbnRNYW5hZ2VyIGZvciBKYXZhU2NyaXB0LlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0B3b3JkcHJlc3MvaG9va3Ncblx0ICovXG5cdGhvb2tzOiBjcmVhdGVIb29rcygpLFxufSApO1xuXG4vKipcbiAqIFdQb25pb24gTW9kdWxlcy5cbiAqL1xud2luZG93Lndwb25pb24ubWV0YWJveCA9IHJlcXVpcmUoICcuL21vZHVsZXMvbWV0YWJveCcgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24ud3BfcG9pbnRlcnMgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy93cC1wb2ludGVycycgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24ubWVkaWFfZmllbGRzICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9tZWRpYS1maWVsZHMnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLmJ1bGtfZWRpdCAgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvYnVsay1lZGl0JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5ndXR0ZW5iZXJnICAgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL2d1dHRlbmJlcmcnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLndvb2NvbW1lcmNlICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvd29vY29tbWVyY2UnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLnF1aWNrX2VkaXQgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvcXVpY2stZWRpdCcgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24udmlzdWFsX2NvbXBvc2VyID0gcmVxdWlyZSggJy4vbW9kdWxlcy92aXN1YWwtY29tcG9zZXInICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLm1vZGFsICAgICAgICAgICA9IHJlcXVpcmUoICcuLi92ZW5kb3JzL2JhY2tib25lLW1vZGFsJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5hamF4ZXIgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2FqYXhlcicgKS5XUE9uaW9uX0FqYXhlcjtcbndpbmRvdy53cG9uaW9uLmFqYXggICAgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvYWpheGVyJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5kZWJ1ZyAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2RlYnVnJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5jb3JlICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2NvcmUnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0ICA9IHJlcXVpcmUoICcuL2NvcmUvZmllbGQnICkuZGVmYXVsdDtcblxucmVxdWlyZSggJy4vd3Bvbmlvbi1maWVsZHMnICk7XG5cbm1vZHVsZS5leHBvcnRzID0gKCAoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCAkICkgPT4ge1xuXHQvLyBEb2N1bWVudCBPbiBMb2FkLlxuXHQkKCAoKSA9PiB7XG5cdFx0d2luZG93Lndwb25pb25fc2V0dXAoKTtcblx0XHRsZXQgJHdwb2ZfZGl2ID0gJCggJy53cG9uaW9uLWZyYW1ld29yazpub3QoLndwb25pb24tbW9kdWxlLXF1aWNrX2VkaXQtZnJhbWV3b3JrKScgKTtcblx0XHRpZiggJHdwb2ZfZGl2Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX3RoZW1lX2luaXQnLCAkKCB0aGlzICkgKTtcblx0XHRcdH0gKTtcblx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Ly8gV2luZG93IE9uIExvYWQuXG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICggKCkgPT4ge1xuXG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9pbml0JyApO1xuXG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UoICR3cG9mX2Rpdi5maW5kKCAnLndwb25pb24tZWxlbWVudC13cF9ub3RpY2UsIC53cG9uaW9uLWVsZW1lbnQtbm90aWNlJyApICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLnN1Ym1lbnVfaW5kaWNhdG9yKCAkKCBkb2N1bWVudCApLmZpbmQoICcud3Bvbmlvbi1zdWJtZW51LWknICkgKTtcblxuXHRcdC8vIFRyaWdnZXJzIEZpZWxkIERlYnVnIERhdGEuXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWZpZWxkLWRlYnVnLWNvZGUgPiBzdHJvbmcnLCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctZG93bicgKS50b2dnbGVDbGFzcyggJ2Rhc2hpY29ucy1hcnJvdy1yaWdodCcgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBUcmlnZ2VycyBIb29rIFdpdGggV2lkZ2V0cy5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnd2lkZ2V0LWFkZGVkIHdpZGdldC11cGRhdGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkd2lkZ2V0ICkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICR3aWRnZXQgKS5yZWxvYWQoKTtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICR3aWRnZXQgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBUcmlnZ2VycyBXaGVuIE5ldyBNZW51IEl0ZW0gQWRkZWQuXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ21lbnUtaXRlbS1hZGRlZCcsIGZ1bmN0aW9uKCBldmVudCwgJG1lbnUgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJG1lbnUgKS5yZWxvYWQoKTtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICRtZW51ICk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0Ly8gUmVuZGVycyBWYWxpZGF0aW9uLlxuXHRcdFx0bmV3IFdQT25pb25fVmFsaWRhdG9yKCk7XG5cblx0XHRcdC8vIEhhbmRsZXMgRmllbGRzIGluaXQuXG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkKCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJCggdGhpcyApICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHR9XG5cblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25faW5pdCcgKTtcblxuXHR9ICkgKTtcblxuXHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fbG9hZGVkJyApO1xuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCBqUXVlcnkgKTtcbiIsInJlcXVpcmUoICcuL2ZpZWxkcy90ZXh0JyApO1xucmVxdWlyZSggJy4vZmllbGRzL3RleHRhcmVhJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2J1dHRvbl9zZXQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvYmFja2dyb3VuZCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9pbWFnZV9zZWxlY3QnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvc3dpdGNoZXInICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGFsZXR0ZScgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0MicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9jaG9zZW4nICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvaWNvbl9waWNrZXInICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvZm9udF9zZWxlY3RvcicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9hY2NvcmRpb24nICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvZ3JvdXAnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvd3BfZWRpdG9yJyApO1xucmVxdWlyZSggJy4vaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2ZpZWxkc2V0JyApO1xucmVxdWlyZSggJy4vZmllbGRzL2lucHV0bWFzaycgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy93cF9saW5rcycgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9jaGVja2JveF9yYWRpbycgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9rZXl2YWx1ZV9wYWlyJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BpY2tlcicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9kYXRlX3BpY2tlcicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9nYWxsZXJ5JyApO1xucmVxdWlyZSggJy4vaGVscGVycy9pbWFnZV9wb3B1cCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy91cGxvYWQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvaW1hZ2VfdXBsb2FkJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2pxdWVyeV90YWInICk7XG5yZXF1aXJlKCAnLi9oZWxwZXJzL3Rvb2x0aXAnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvY2xvbmVfZWxlbWVudCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9zb3J0ZXInICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvZ29vZ2xlX21hcHMnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvdHlwb2dyYXBoeScgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9vZW1iZWQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvaGVhZGluZycgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9zdWJoZWFkaW5nJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2phbWJvX2NvbnRlbnQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvbm90aWNlJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2NvbnRlbnQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvYmFja3VwJyApO1xuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2pzL2NvcmUvY29yZSc7XG5cbmNvbnN0IFdQT25pb25fV1BfTW9kYWwgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCgge1xuXHR0ZW1wbGF0ZXM6IHt9LFxuXG5cdGV2ZW50czoge1xuXHRcdFwiY2xpY2sgLm1lZGlhLW1vZGFsLWNsb3NlXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1jYW5jZWxcIjogXCJjbG9zZU1vZGFsXCIsXG5cdFx0XCJjbGljayAjYnRuLW9rXCI6IFwic2F2ZU1vZGFsXCIsXG5cdFx0XCJjbGljayAubWVkaWEtbWVudSBhXCI6IFwiaGFuZGxlX2xlZnRfbWVudV9jbGlja1wiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLXJvdXRlciBhXCI6IFwiaGFuZGxlX3RhYl9jbGlja1wiLFxuXHR9LFxuXG5cdGFjdGl2ZV9wYWdlOiBudWxsLFxuXG5cdGFjdGl2ZV9zZWN0aW9uOiBudWxsLFxuXG5cdGluaXRpYWxpemU6ICggb3B0aW9ucyApID0+IHtcblx0XHRvcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogZmFsc2UsXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdFx0aHRtbDogZmFsc2UsXG5cdFx0fSwgb3B0aW9ucyApO1xuXG5cdFx0dGhpcy5sZWZ0X21lbnUgPSBvcHRpb25zWyAnbGVmdF9tZW51JyBdO1xuXHRcdHRoaXMuaHRtbCAgICAgID0gb3B0aW9uc1sgJ2h0bWwnIF07XG5cdFx0dGhpcy5oaWRlX21lbnUgPSBvcHRpb25zWyAnaGlkZV9tZW51JyBdO1xuXG5cdFx0Xy5iaW5kQWxsKCB0aGlzLCAncmVuZGVyJywgJ3ByZXNlcnZlRm9jdXMnLCAnY2xvc2VNb2RhbCcsICdzYXZlTW9kYWwnLCAnZG9Ob3RoaW5nJyApO1xuXHRcdHRoaXMuaW5pdF90ZW1wbGF0ZXMoKTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9LFxuXG5cdGluaXRfdGVtcGxhdGVzOiAoKSA9PiB7XG5cdFx0bGV0ICRtICAgICAgICAgICAgICAgICAgICAgICAgICA9ICR3cG9uaW9uLm9wdGlvbiggJ21vZGFsJyApO1xuXHRcdHRoaXMudGVtcGxhdGVzLmZyYW1lX21lbnVfaXRlbSAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdmcmFtZS1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5yb3V0ZXJfbWVudV9pdGVtID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAncm91dGVyLW1lbnUtaXRlbScgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLndpbmRvdyAgICAgICAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdodG1sJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50ICAgICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3BhZ2VfY29udGVudCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnNlY3Rpb25fY29udGVudCAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdzZWN0aW9uX2NvbnRlbnQnIF0gKTtcblx0fSxcblxuXHRyZW5kZXI6ICgpID0+IHtcblx0XHQndXNlIHN0cmljdCc7XG5cdFx0dGhpcy4kZWwuYXR0ciggJ3RhYmluZGV4JywgJzAnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy53aW5kb3coKSApO1xuXG5cdFx0aWYoIHRoaXMubGVmdF9tZW51ICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmxlZnRfbWVudSwgKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0XHR0aGlzLiQoICcubWVkaWEtbWVudScgKS5hcHBlbmQoIHRoaXMudGVtcGxhdGVzLmZyYW1lX21lbnVfaXRlbSgge1xuXHRcdFx0XHRcdHVybDoga2V5LFxuXHRcdFx0XHRcdG5hbWU6IHZhbHVlLFxuXHRcdFx0XHR9ICkgKTtcblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmh0bWwgKSB7XG5cdFx0XHRfLmVhY2goIHRoaXMuaHRtbCwgKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0XHRsZXQgJGNvbnRlbnQgPSAkKCB0aGlzLnRlbXBsYXRlcy5wYWdlX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRpZDoga2V5LFxuXHRcdFx0XHRcdHRpdGxlOiB2YWx1ZVsgJ3RpdGxlJyBdLFxuXHRcdFx0XHRcdGh0bWw6IHZhbHVlWyAnaHRtbCcgXSxcblx0XHRcdFx0fSApICk7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiB2YWx1ZVsgJ3NlY3Rpb25zJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Xy5lYWNoKCB2YWx1ZVsgJ3NlY3Rpb25zJyBdLCAoIHZhbCwgayApID0+IHtcblx0XHRcdFx0XHRcdGxldCAkX2NvbnRlbnQgPSBqUXVlcnkoIHRoaXMudGVtcGxhdGVzLnNlY3Rpb25fY29udGVudCgge1xuXHRcdFx0XHRcdFx0XHRcdGlkOiBrZXkgKyBcIl9cIiArIGssXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHZhbFsgJ3RpdGxlJyBdLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWw6IHZhbFsgJ2h0bWwnIF0sXG5cdFx0XHRcdFx0XHRcdH0gKSApLFxuXHRcdFx0XHRcdFx0XHQkX21lbnUgICAgPSB0aGlzLnRlbXBsYXRlcy5yb3V0ZXJfbWVudV9pdGVtKCB7IHVybDogaywgbmFtZTogdmFsWyAndGl0bGUnIF0gfSApO1xuXG5cdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmhpZGUoKTtcblx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsWyAnc2lkZWJhcicgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRcdCRfY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuYXBwZW5kKCB2YWxbICdzaWRlYmFyJyBdICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtZnJhbWUtY29udGVudCcgKS5hcHBlbmQoICRfY29udGVudCApO1xuXHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1yb3V0ZXInICkuYXBwZW5kKCAkX21lbnUgKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXInICkuYXBwZW5kKCAkY29udGVudCApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsdWVbICdzaWRlYmFyJyBdICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5hZGRDbGFzcyggJ2hpZGRlbicgKTtcblx0XHRcdFx0XHQkdGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXInICkuYXBwZW5kKCAkY29udGVudCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdHRoaXMuJCggJy5tZWRpYS1tZW51IGE6Zmlyc3QtY2hpbGQnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gLndwb25pb24tbW9kYWwtY29udGVudDpub3QoLmhpZGRlbikgLm1lZGlhLWZyYW1lLXJvdXRlciBhOmZpcnN0LWNoaWxkJyApXG5cdFx0XHQudHJpZ2dlciggJ2NsaWNrJyApO1xuXG5cdFx0aWYoIHRoaXMuaGlkZV9tZW51ID09PSB0cnVlICkge1xuXHRcdFx0dGhpcy4kKCAnLm1lZGlhLWZyYW1lJyApLmFkZENsYXNzKCAnaGlkZS1tZW51JyApO1xuXHRcdH1cblxuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vbiggXCJmb2N1c2luXCIsIHRoaXMucHJlc2VydmVGb2N1cyApO1xuXHRcdGpRdWVyeSggJ2JvZHknICkuY3NzKCB7IFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIiB9ICkuYXBwZW5kKCB0aGlzLiRlbCApO1xuXHRcdHRoaXMuJGVsLmZvY3VzKCk7XG5cdH0sXG5cblx0aGFuZGxlX2xlZnRfbWVudV9jbGljazogKCBlICkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHRhcmdldCA9ICQoIGUudGFyZ2V0ICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLW1lbnUgYS5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JHRhcmdldC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRsZXQgJHNob3dfdGFyZ2V0ID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYjJyArICR0YXJnZXQuYXR0ciggJ2hyZWYnICkgKTtcblx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IGRpdicgKS5hZGRDbGFzcyggJ2hpZGRlbicgKTtcblx0XHQkc2hvd190YXJnZXQucmVtb3ZlQ2xhc3MoICdoaWRkZW4nICk7XG5cblx0XHRpZiggJHNob3dfdGFyZ2V0LmZpbmQoICcubWVkaWEtZnJhbWUtcm91dGVyJyApLmhhc0NsYXNzKCAnaGlkZGVuJyApICkge1xuXHRcdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lJyApLmFkZENsYXNzKCAnaGlkZS1yb3V0ZXInICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5yZW1vdmVDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH1cblx0XHR0aGlzLmFjdGl2ZV9wYWdlICAgID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKTtcblx0XHR0aGlzLmFjdGl2ZV9zZWN0aW9uID0gbnVsbDtcblx0fSxcblxuXHRoYW5kbGVfdGFiX2NsaWNrOiAoIGUgKSA9PiB7XG5cdFx0bGV0ICR0YXJnZXQgICAgICAgICA9ICQoIGUudGFyZ2V0ICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0bGV0ICRwYWdlICAgICAgICAgICA9ICQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZS1tZW51IGEuYWN0aXZlJyApLmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkYmFzZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+ICMnICsgdGhpcy5hY3RpdmVfcGFnZSApO1xuXG5cblx0XHQkdGFyZ2V0LnBhcmVudCgpLmZpbmQoICcuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JGJhc2UuZmluZCggJy53cG9uaW9uLXNlY3Rpb24tbW9kYWwtY29udGVudCcgKS5oaWRlKCk7XG5cdFx0JGJhc2UuZmluZCggJyMnICsgdGhpcy5hY3RpdmVfcGFnZSArICdfJyArIHRoaXMuYWN0aXZlX3NlY3Rpb24gKS5zaG93KCk7XG5cdH0sXG5cblx0cHJlc2VydmVGb2N1czogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGlmKCB0aGlzLiRlbFsgMCBdICE9PSBlLnRhcmdldCAmJiAhdGhpcy4kZWwuaGFzKCBlLnRhcmdldCApLmxlbmd0aCApIHtcblx0XHRcdHRoaXMuJGVsLmZvY3VzKCk7XG5cdFx0fVxuXHR9LFxuXG5cdGNsb3NlTW9kYWw6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9mZiggXCJmb2N1c2luXCIgKTtcblx0XHRqUXVlcnkoIFwiYm9keVwiICkuY3NzKCB7IFwib3ZlcmZsb3dcIjogXCJhdXRvXCIgfSApO1xuXHRcdHRoaXMucmVtb3ZlKCk7XG5cdH0sXG5cblx0c2F2ZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0dGhpcy5jbG9zZU1vZGFsKCBlICk7XG5cdH0sXG5cblx0ZG9Ob3RoaW5nOiBmdW5jdGlvbiggZSApIHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciggJG9wdGlvbnMgPSB7fSApIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCgge1xuXHRcdFx0aWQ6IGZhbHNlLFxuXHRcdFx0ZGF0YTogZmFsc2UsXG5cdFx0XHRjbGFzc05hbWU6ICd3cG9uaW9uLW1vZGFsJyxcblx0XHRcdG1vZGFsOiB7fSxcblx0XHRcdGhpZGVfbWVudTogZmFsc2UsXG5cdFx0fSwgJG9wdGlvbnMgKTtcblxuXHRcdG5ldyBXUE9uaW9uX1dQX01vZGFsKCBfLmV4dGVuZCgge1xuXHRcdFx0bGVmdF9tZW51OiB0aGlzLmdldF9sZWZ0X21lbnUoKSxcblx0XHRcdGh0bWw6IHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sXG5cdFx0XHRoaWRlX21lbnU6IHRoaXMub3B0aW9uc1sgJ2hpZGVfbWVudScgXSxcblx0XHR9LCB0aGlzLm9wdGlvbnNbICdtb2RhbCcgXSApICk7XG5cdH1cblxuXHRnZXRfbGVmdF9tZW51KCkge1xuXHRcdGxldCAkcmV0dXJuID0gZmFsc2U7XG5cdFx0aWYoIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0gKSB7XG5cdFx0XHQkcmV0dXJuID0ge307XG5cblx0XHRcdF8uZWFjaCggdGhpcy5vcHRpb25zWyAnZGF0YScgXSwgKCAkZGF0YSwgJGtleSApID0+IHtcblx0XHRcdFx0JHJldHVyblsgJGtleSBdID0gKCB0eXBlb2YgJGRhdGFbICdtZW51X3RpdGxlJyBdICE9PSAndW5kZWZpbmVkJyApID8gJGRhdGFbICdtZW51X3RpdGxlJyBdIDogJGRhdGFbICd0aXRsZScgXTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0cmV0dXJuICRyZXR1cm47XG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9