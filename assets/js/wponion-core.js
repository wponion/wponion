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

	_createClass(WPOnion_Ajaxer, [{
		key: 'create_function',
		value: function create_function() {
			var $code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
			var $args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			return this.single_callback((0, _index.create_function)($args, $code));
		}
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Simple Debug Class.
 */
var _class = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, null, [{
		key: "add",
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

var _class = function _class() {
	var _this = this;

	var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
	var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	_classCallCheck(this, _class);

	this.param = window.window.wponion._.merge({ nestable: false, parent: false }, param);

	var $this = this;
	this.base = {};
	this.base.$el = $element;
	this.base.init = function () {
		_this.base.ruleset = jQuery.deps.createRuleset();
		_this.base.depRoot();
		jQuery.deps.enable(_this.base.$el, _this.base.ruleset, {
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

/* global swal:true */
/* global console:true */
var is_jquery = __webpack_require__(/*! vsp-js-helper/index */ "./node_modules/vsp-js-helper/index.js").is_jquery;

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
			if (false === window.wponion._.isUndefined(this.option('js_validate', false))) {
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
			$exists = window.wponion._.merge({ 'PHP Args': {}, 'JS Args': {} }, $exists);

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
			return false === window.wponion._.isUndefined($args[$key]) ? $args[$key] : $default;
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
			$data.data = false === window.wponion._.isUndefined($data.data) ? window.wponion._.merge($default, $data.data) : $default;

			return _core2.default.ajax($data);
		}
	}, {
		key: 'init_field',
		value: function init_field($elem, $type) {
			if (!is_jquery($elem)) {
				$elem = this.element.find($elem);
			}

			$elem.each(function () {
				if (window.wponion.hooks.hasAction('wponion_init_field_' + $type)) {
					window.wponion.hooks.doAction('wponion_init_field_' + $type, jQuery(this));
				} else {
					console.error('WPOnion Field Type : ' + $type + ' Init Function Not Found', '\nAction Used : wponion_init_field_' + $type);
				}
			});
		}
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
			this.init_field('input[data-wponion-inputmask]', 'inputmask');
			this.init_field('.wponion-element-wp_link', 'wp_links');
			this.init_field('.wponion-element-key_value', 'keyvalue_pair');
			this.init_field('.wponion-element-date_picker', 'date_picker');
			this.init_field('.wponion-element-gallery', 'gallery');
			this.init_field('.wponion-element-upload', 'upload');
			this.init_field('.wponion-element-image', 'image_upload');
			this.init_field('.wponion-element-tab', 'jquery_tab');
			this.init_field('.wponion-field-tooltip', 'field_tooltip');
			this.init_field('.wponion-element-google_maps', 'google_maps');
			this.init_field('.wponion-help', 'field_tooltip');
			this.init_field('.wponion-wrap-tooltip', 'field_tooltip');
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

			window.wponion.hooks.doAction('wponion_after_fields_reload');
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
			return window.wponion.hooks;
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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('accordion', function ($elem) {
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
  return w.wponion_render_field('background', function ($elem) {
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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',
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
			var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj));
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('backup', function ($elem) {
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('checkbox_radio', function ($elem) {
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
		value: function init() {
			this.element.chosen(this.handle_args(this.option('chosen', {})));
			return this;
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('chosen', function ($elem) {
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
	return w.wponion_render_field('clone_element', function ($elem) {
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
  return w.wponion_render_field('color_palette', function ($elem) {
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
		value: function init() {
			this.element.find('input').wpColorPicker();
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('color_picker', function ($elem) {
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
  return w.wponion_render_field('content', function ($elem) {
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
		value: function init() {
			var $this = this,
			    $elem = $this.element,
			    $settings = this.handle_args(this.option('settings')),
			    $view = void 0;

			if (false === window.wponion._.isUndefined($settings.theme)) {
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('date_picker', function ($elem) {
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
	return w.wponion_render_field('fieldset', function ($elem) {
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
		value: function build_options(data) {
			var $return = '';
			for (var $_d in data) {
				if (false === window.wponion._.isUndefined(data[$_d])) {
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
		get: function get() {
			return _core2.default.windowArgs('wponion_websafe_fonts');
		}
	}, {
		key: 'google_fonts',
		get: function get() {
			return _core2.default.windowArgs('wponion_gfonts');
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('font_selector', function ($elem) {
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('gallery', function ($elem) {
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
	return w.wponion_render_field('google_maps', function ($elem) {
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
				templateAfterRender: function templateAfterRender() {
					var $data = $group_wrap.find('> .wponion-accordion-wrap:last-child');
					$data.hide();
					_this2.update_groups_title();
					_this2.bind_events_for_title();
					_this2.init_field($group_wrap, 'accordion');
					//this.js_validate_elem( this.option( 'js_validate', false ), $data );
					$data.find('.wponion-group-remove').tippy();
					window.wponion_field($data).reload();
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
					if ($add.parent().find('div.alert').length === 0) {
						$add.before(jQuery($error_msg).hide());
						$add.parent().find('div.alert').slideDown();
						window.wponion_notice($add.parent().find('div.alert, div.notice'));
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
	return w.wponion_render_field('group', function ($elem) {
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
  return w.wponion_render_field('heading', function ($elem) {
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('icon_picker', function ($elem) {
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
  return w.wponion_render_field('image_select', function ($elem) {
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
	return w.wponion_render_field('image_upload', function ($elem) {
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
	return w.wponion_render_field('inputmask', function ($elem) {
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
  return w.wponion_render_field('jambo_content', function ($elem) {
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
	return w.wponion_render_field('jquery_tab', function ($elem) {
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
					if (_this2.element.find('div.alert').length === 0) {
						_this2.element.find('.wponion-keyvalue_wrap').after(jQuery(_this2.option('error_msg')).hide());
						_this2.element.find('div.alert').slideDown();
						window.wponion_notice(_this2.element.find('div.alert, div.notice'));
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
	return w.wponion_render_field('keyvalue_pair', function ($elem) {
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
  return w.wponion_render_field('notice', function ($elem) {
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('oembed', function ($elem) {
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
  return w.wponion_render_field('select', function ($elem) {
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
		value: function init() {
			var $arg = this.option('select2', {});
			this.element.select2(this.handle_args($arg));
			return this;
		}
	}, {
		key: 'field_debug',
		value: function field_debug() {}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('select2', function ($elem) {
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
	return w.wponion_render_field('sorter', function ($elem) {
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
  return w.wponion_render_field('subheading', function ($elem) {
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
  return w.wponion_render_field('switcher', function ($elem) {
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
  return w.wponion_render_field('text', function ($elem) {
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
  return w.wponion_render_field('textarea', function ($elem) {
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
				$preview.find($tag).attr('style', $_attrs);
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('typography', function ($elem) {
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

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('upload', function ($elem) {
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
  return w.wponion_render_field('wp_editor', function ($elem) {
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
	return w.wponion_render_field('wp_links', function ($elem) {
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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
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
			delete $arg.icon;
			this.element.tippy(this.handle_args($arg, $tooltip_key));
		}
	}]);

	return field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_render_field('field_tooltip', function ($elem) {
		return new field($elem);
	});
}(window);

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

	/**
  * Basic WPOnion JS Setup.
  */
	window.wponion_setup = function () {
		window.wponion.core.settings_args = window.wponion.core.windowArgs('wponion_core', {});
		window.wponion.core.text = window.wponion.core.windowArgs('wponion_il8n', {});
		window.wponion.core.debug_info = null;
		window.wponion.core.field_debug_info = null;
	};

	/**
  * Renders A Field.
  * @param $type
  * @param $callback
  */
	window.wponion_render_field = function ($type, $callback) {
		window.wponion.hooks.addAction('wponion_init_field_' + $type, 'wponion_core', function ($elem) {
			try {
				$callback($elem);
			} catch (e) {
				console.log(_arguments, ' \n' + e + '  \nFor : wponion_init_field_' + $type);
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

var field = function (_WPOnion_Field) {
	_inherits(field, _WPOnion_Field);

	function field() {
		_classCallCheck(this, field);

		return _possibleConstructorReturn(this, (field.__proto__ || Object.getPrototypeOf(field)).apply(this, arguments));
	}

	_createClass(field, [{
		key: 'init',
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
	return w.wponion_render_field('image_popup', function ($elem) {
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
					var $href = window.wponion.helper.url_params(jQuery(this).attr('data-href')),
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPOnion_Visual_Composer = function WPOnion_Visual_Composer($element) {
	_classCallCheck(this, WPOnion_Visual_Composer);

	this.element = $element;
};

exports.default = function (window) {
	window.wponion_visual_composer_init = function () {
		var $element = jQuery('.wponion-framework.wponion-module-visual_composer');

		if ($element.length > 0) {
			$element.each(function () {
				new WPOnion_Visual_Composer(jQuery(this));
			});
		}
	};
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
	hooks: (0, _hooks.createHooks)(),

	/**
  * WPonion Modules.
  */
	metabox: __webpack_require__(/*! ./modules/metabox */ "./src/js/modules/metabox.js").default,
	media_fields: __webpack_require__(/*! ./modules/media-fields */ "./src/js/modules/media-fields.js").default,
	bulk_edit: __webpack_require__(/*! ./modules/bulk-edit */ "./src/js/modules/bulk-edit.js").default,
	guttenberg: __webpack_require__(/*! ./modules/guttenberg */ "./src/js/modules/guttenberg.js").default,
	woocommerce: __webpack_require__(/*! ./modules/woocommerce */ "./src/js/modules/woocommerce.js").default,
	quick_edit: __webpack_require__(/*! ./modules/quick-edit */ "./src/js/modules/quick-edit.js").default,
	visual_composer: __webpack_require__(/*! ./modules/visual-composer */ "./src/js/modules/visual-composer.js").default,
	modal: __webpack_require__(/*! ../vendors/backbone-modal */ "./src/vendors/backbone-modal.js").default,
	ajaxer: __webpack_require__(/*! ./core/ajaxer */ "./src/js/core/ajaxer.js").WPOnion_Ajaxer,
	ajax: __webpack_require__(/*! ./core/ajaxer */ "./src/js/core/ajaxer.js").default,
	debug: __webpack_require__(/*! ./core/debug */ "./src/js/core/debug.js").default,
	core: __webpack_require__(/*! ./core/core */ "./src/js/core/core.js").default,
	field_abstract: __webpack_require__(/*! ./core/field */ "./src/js/core/field.js").default
});

// Core Fields.
window.wponion.fields = Object.create({
	text: __webpack_require__(/*! ./fields/text */ "./src/js/fields/text.js").default,
	textarea: __webpack_require__(/*! ./fields/textarea */ "./src/js/fields/textarea.js").default,
	background: __webpack_require__(/*! ./fields/background */ "./src/js/fields/background.js").default,
	image_select: __webpack_require__(/*! ./fields/image_select */ "./src/js/fields/image_select.js").default,
	switcher: __webpack_require__(/*! ./fields/switcher */ "./src/js/fields/switcher.js").default,
	color_palette: __webpack_require__(/*! ./fields/color_palette */ "./src/js/fields/color_palette.js").default,
	select: __webpack_require__(/*! ./fields/select */ "./src/js/fields/select.js").default,
	select2: __webpack_require__(/*! ./fields/select2 */ "./src/js/fields/select2.js").default,
	chosen: __webpack_require__(/*! ./fields/chosen */ "./src/js/fields/chosen.js").default,
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

module.exports = function (window, document, wp, $, $wpo) {
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

		$wpo.core.loading_screen($wpof_div, false);

		window.wponion.hooks.doAction('wponion_init');
	});

	window.wponion.hooks.doAction('wponion_loaded');
}(window, document, wp, jQuery, window.wponion);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUFkZEhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUN1cnJlbnRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEaWRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEb2luZ0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhhc0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSZW1vdmVIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSdW5Ib29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVIb29rTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVOYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvaW5mby9pbmlfZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3htbC91dGY4X2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b193aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY29weV90b19jbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RldmljZV90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RpZmZfZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9mb3JtYXRfZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfYWZ0ZXJfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19iZWZvcmVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfc2FtZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3RhYl9mb2N1c2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc193aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BpcGVfbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BsYWluX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9xdWVyeV9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcmFuZF9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3Bvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9zY3JvbGxfdG9fdG9wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RpbWVfdGFrZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdG9fanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pzX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdXJsX3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy92YWxpZGF0ZVNpbmdsZUpTRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JkcHJlc3MtanMtcG9ydHMvZnVuY3Rpb25zL2FkZF9xdWVyeV9hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29yZHByZXNzLWpzLXBvcnRzL2Z1bmN0aW9ucy90cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvdW50cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9hamF4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NoZWNrYm94X3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2hvc2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2xvbmVfZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NvbG9yX3BhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZGF0ZV9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9maWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZvbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ29vZ2xlX21hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pY29uX3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ltYWdlX3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ltYWdlX3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2lucHV0bWFzay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2phbWJvX2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qcXVlcnlfdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMva2V5dmFsdWVfcGFpci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL25vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL29lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdDIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zdWJoZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9maWVsZF90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9pbWFnZV9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2J1bGstZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9ndXR0ZW5iZXJnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21lZGlhLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXRhYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1aWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3dvb2NvbW1lcmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiXSwibmFtZXMiOlsiY3JlYXRlQWRkSG9vayIsImhvb2tzIiwiYWRkSG9vayIsImhvb2tOYW1lIiwibmFtZXNwYWNlIiwiY2FsbGJhY2siLCJwcmlvcml0eSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZXIiLCJoYW5kbGVycyIsImkiLCJzcGxpY2UiLCJfX2N1cnJlbnQiLCJmb3JFYWNoIiwiaG9va0luZm8iLCJuYW1lIiwiY3VycmVudEluZGV4IiwicnVucyIsImNyZWF0ZUN1cnJlbnRIb29rIiwiY3VycmVudEhvb2siLCJjcmVhdGVEaWRIb29rIiwiZGlkSG9vayIsImNyZWF0ZURvaW5nSG9vayIsImRvaW5nSG9vayIsImNyZWF0ZUhhc0hvb2siLCJoYXNIb29rIiwiY3JlYXRlSG9va3MiLCJhY3Rpb25zIiwiT2JqZWN0IiwiY3JlYXRlIiwiZmlsdGVycyIsImFkZEFjdGlvbiIsImFkZEZpbHRlciIsInJlbW92ZUFjdGlvbiIsInJlbW92ZUZpbHRlciIsImhhc0FjdGlvbiIsImhhc0ZpbHRlciIsInJlbW92ZUFsbEFjdGlvbnMiLCJyZW1vdmVBbGxGaWx0ZXJzIiwiZG9BY3Rpb24iLCJhcHBseUZpbHRlcnMiLCJjdXJyZW50QWN0aW9uIiwiY3VycmVudEZpbHRlciIsImRvaW5nQWN0aW9uIiwiZG9pbmdGaWx0ZXIiLCJkaWRBY3Rpb24iLCJkaWRGaWx0ZXIiLCJjcmVhdGVSZW1vdmVIb29rIiwicmVtb3ZlQWxsIiwicmVtb3ZlSG9vayIsImhhbmRsZXJzUmVtb3ZlZCIsIl9sb29wIiwiY3JlYXRlUnVuSG9vayIsInJldHVybkZpcnN0QXJnIiwicnVuSG9va3MiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsInB1c2giLCJyZXN1bHQiLCJhcHBseSIsInBvcCIsIl9jcmVhdGVIb29rcyIsInZhbGlkYXRlSG9va05hbWUiLCJ0ZXN0IiwidmFsaWRhdGVOYW1lc3BhY2UiLCJKU19QYXJzZV9BcmdzIiwiJGFyZ3MiLCIkZGVmYXVsdHMiLCIkaXNfbmVzdGVkIiwiZGVmYXVsdHMiLCJuZXN0ZWQiLCJwYXJzZSIsIiRfa2V5IiwiJGlzX2RlZXAiLCJtb2R1bGUiLCJleHBvcnRzIiwibWljcm90aW1lIiwiZ2V0QXNGbG9hdCIsInMiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRpbWluZyIsIm5hdmlnYXRpb25TdGFydCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwiY2FsbF91c2VyX2Z1bmMiLCJjYiIsInBhcmFtZXRlcnMiLCJjYWxsVXNlckZ1bmNBcnJheSIsInJlcXVpcmUiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsImNhbGxfdXNlcl9mdW5jX2FycmF5IiwiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsImZ1bmMiLCJzY29wZSIsInZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuIiwibWF0Y2giLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwiZXZhbCIsIkVycm9yIiwiY3JlYXRlX2Z1bmN0aW9uIiwiY29kZSIsInNwbGl0IiwiY29uY2F0IiwiZSIsImZ1bmN0aW9uX2V4aXN0cyIsImZ1bmNOYW1lIiwiaW5pX2dldCIsInZhcm5hbWUiLCIkbG9jdXR1cyIsInBocCIsImluaSIsImxvY2FsX3ZhbHVlIiwibWQ1Iiwic3RyIiwiaGFzaCIsImNyeXB0byIsIm1kNXN1bSIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJ1dGY4RW5jb2RlIiwieGwiLCJfcm90YXRlTGVmdCIsImxWYWx1ZSIsImlTaGlmdEJpdHMiLCJfYWRkVW5zaWduZWQiLCJsWCIsImxZIiwibFg0IiwibFk0IiwibFg4IiwibFk4IiwibFJlc3VsdCIsIl9GIiwieCIsInkiLCJ6IiwiX0ciLCJfSCIsIl9JIiwiX0ZGIiwiYSIsImIiLCJjIiwiZCIsImFjIiwiX0dHIiwiX0hIIiwiX0lJIiwiX2NvbnZlcnRUb1dvcmRBcnJheSIsImxXb3JkQ291bnQiLCJsTWVzc2FnZUxlbmd0aCIsImxOdW1iZXJPZldvcmRzVGVtcDEiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAyIiwibE51bWJlck9mV29yZHMiLCJsV29yZEFycmF5IiwibEJ5dGVQb3NpdGlvbiIsImxCeXRlQ291bnQiLCJjaGFyQ29kZUF0IiwiX3dvcmRUb0hleCIsIndvcmRUb0hleFZhbHVlIiwid29yZFRvSGV4VmFsdWVUZW1wIiwibEJ5dGUiLCJsQ291bnQiLCJzdWJzdHIiLCJrIiwiQUEiLCJCQiIsIkNDIiwiREQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJ0ZW1wIiwidG9Mb3dlckNhc2UiLCJwYXJzZV9zdHIiLCJhcnJheSIsInN0ckFyciIsIlN0cmluZyIsInJlcGxhY2UiLCJzYWwiLCJqIiwiY3QiLCJwIiwibGFzdE9iaiIsImNociIsInRtcCIsImtleSIsInZhbHVlIiwicG9zdExlZnRCcmFja2V0UG9zIiwia2V5cyIsImtleXNMZW4iLCJfZml4U3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckF0IiwiaW5kZXhPZiIsImhhc093blByb3BlcnR5IiwicnRyaW0iLCJjaGFybGlzdCIsInJlIiwiUmVnRXhwIiwic3RycG9zIiwiaGF5c3RhY2siLCJuZWVkbGUiLCJvZmZzZXQiLCJiYXNlNjRfZGVjb2RlIiwiZW5jb2RlZERhdGEiLCJkZWNvZGVVVEY4c3RyaW5nIiwibWFwIiwiam9pbiIsImF0b2IiLCJCdWZmZXIiLCJiNjQiLCJvMSIsIm8yIiwibzMiLCJoMSIsImgyIiwiaDMiLCJoNCIsImJpdHMiLCJkZWMiLCJ0bXBBcnIiLCJmcm9tQ2hhckNvZGUiLCJiYXNlNjRfZW5jb2RlIiwic3RyaW5nVG9FbmNvZGUiLCJlbmNvZGVVVEY4c3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG9Tb2xpZEJ5dGVzIiwicDEiLCJidG9hIiwiZW5jIiwiciIsImh0dHBfYnVpbGRfcXVlcnkiLCJmb3JtZGF0YSIsIm51bWVyaWNQcmVmaXgiLCJhcmdTZXBhcmF0b3IiLCJlbmNUeXBlIiwiZW5jb2RlRnVuYyIsIl9odHRwQnVpbGRRdWVyeUhlbHBlciIsInZhbCIsImlzTmFOIiwicXVlcnkiLCJwYXJzZV91cmwiLCJjb21wb25lbnQiLCJtb2RlIiwicGFyc2VyIiwic3RyaWN0IiwibG9vc2UiLCJtIiwiZXhlYyIsInVyaSIsIiQwIiwiJDEiLCIkMiIsInNvdXJjZSIsInJhd3VybGRlY29kZSIsInJhd3VybGVuY29kZSIsInVybGRlY29kZSIsInVybGVuY29kZSIsImlzX2NhbGxhYmxlIiwibWl4ZWRWYXIiLCJzeW50YXhPbmx5IiwiY2FsbGFibGVOYW1lIiwibWV0aG9kIiwidmFsaWRGdW5jdGlvbk5hbWUiLCJnZXRGdW5jTmFtZSIsImZuIiwidXRmOF9lbmNvZGUiLCJhcmdTdHJpbmciLCJzdHJpbmciLCJ1dGZ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJzdHJpbmdsIiwibiIsImMxIiwiUmFuZ2VFcnJvciIsImMyIiwicGFyc2VfYXJncyIsImFycmF5X3RvX2h0bWxfYXR0ciIsImFycmF5X3RvX2h0bWwiLCJhcnJheV90b193aW5kb3ciLCJwbGFpbl9vYmplY3QiLCJpc19hZnRlcl9kYXRlIiwiaXNfYmVmb3JlX2RhdGUiLCJpc19zYW1lX2RhdGUiLCJmb3JtYXRfZHVyYXRpb24iLCJkaWZmX2RheXMiLCJ0aW1lX3Rha2VuIiwiaXNfdXJsIiwiaXNfdGFiX2ZvY3VzZWQiLCJpc193aW5kb3dfYXJnIiwic2Nyb2xsX3RvX3RvcCIsImNvcHlfdG9fY2xpcCIsInNjcm9sbF9wb3MiLCJ3aW5kb3dfYXJnIiwiZGV2aWNlX3R5cGUiLCJwaXBlX2xvZyIsInRvX2pxdWVyeSIsImlzX2pxdWVyeSIsInRvX2pzX2Z1bmMiLCJjb3VudGVyIiwicmFuZF9tZDUiLCJjc3NfdW5pdHMiLCJ1cmxfcGFyYW1zIiwicXVlcnlfc3RyaW5nIiwiYXJyIiwibGlzdElEIiwidGFnIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJpdGVtIiwiJGRhdGEiLCJyZXR1cm5faHRtbCIsIkkiLCJfIiwiaXNPYmplY3QiLCJLIiwiJHZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIiRhcnJheSIsIiRrZXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZCIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2VsZWN0b3IiLCJzdGVwIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiX3N0ZXAiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFicyIsImZsb29yIiwiaXNOdW1iZXIiLCJjaGVja1B4IiwiY2hlY2tQY3QiLCJjaGVja0VtIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGF0ZUluaXRpYWwiLCJkYXRlRmluYWwiLCJtcyIsInRpbWUiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwibWlsbGlzZWNvbmQiLCJlbnRyaWVzIiwiZmlsdGVyIiwiZGF0ZUEiLCJkYXRlQiIsIiRlbGVtIiwiaXNVbmRlZmluZWQiLCJpc1N0cmluZyIsImpRdWVyeSIsInRvSVNPU3RyaW5nIiwiaGlkZGVuIiwiJHVybCIsInBhdHRlcm4iLCJsb2ciLCJkYXRhIiwicmVnZXgiLCJyZXN1bHRzIiwibG9jYXRpb24iLCJzZWFyY2giLCJyYW5kb20iLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0aXRsZSIsInRpbWVFbmQiLCIkYXJnc19rZXkiLCIkY29udGVudHNfa2V5IiwiaXNFbXB0eSIsInVybCIsInJlZHVjZSIsInYiLCIkc3RyaW5nIiwiJGNvbnRlbnRzIiwiJF9rIiwiYWRkX3F1ZXJ5X2FyZyIsImhyZWYiLCIkcGFyc2VkIiwiJHF1ZXJ5IiwiJGZyYWdtZW50IiwiZnJhZ21lbnQiLCJzcGxpdF91cmwiLCJiYXNlX3VybCIsInJlbW92ZV9xdWVyeV9hcmciLCJkZWZhdWx0IiwidHJhaWxpbmdzbGFzaGl0IiwidW50cmFpbGluZ3NsYXNoaXQiLCJXUE9uaW9uX0FqYXhlciIsIiRhamF4X2FyZ3MiLCIkYWpheF9jb25maWciLCJhamF4dXJsIiwic3VjY2VzcyIsImFsd2F5cyIsImFjdGlvbiIsImRlZmF1bHRfY29uZmlncyIsInJlc3BvbnNlX2VsZW1lbnQiLCJidXR0b24iLCJlbGVtZW50Iiwic3Bpbm5lciIsImluc3RhbmNlIiwiYWpheF9hcmdzIiwid3BvbmlvbiIsIm1lcmdlIiwiYWpheF9jb25maWciLCJhamF4IiwiJGNvZGUiLCJzaW5nbGVfY2FsbGJhY2siLCIkY2FsbGJhY2siLCJpc0Z1bmN0aW9uIiwiJGNhbGxiYWNrcyIsImhhbmRsZV9jYWxsYmFja3MiLCJidXR0b25fdW5sb2NrIiwiYnV0dG9uX2xvY2siLCIkY29uZmlnIiwiY2xvbmUiLCIkdXJsX3BhcmFtcyIsIndwIiwic2VuZCIsImRvbmUiLCJvblN1Y2Nlc3MiLCJmYWlsIiwib25FcnJvciIsIm9uQWx3YXlzIiwiJGRlZmF1bHQiLCJoYXNfY29uZmlnIiwiY29uZmlnIiwiJGJ1dHRvbiIsIndwb19idXR0b24iLCJhdHRyIiwiJHNwaW5uZXIiLCJhZGRDbGFzcyIsInBhcmVudCIsImFwcGVuZCIsInJlbW92ZUF0dHIiLCJuZXh0IiwiaGFzQ2xhc3MiLCJyZW1vdmUiLCJmaW5kIiwiJCIsIiRjbGFzcyIsIm9uIiwiY3VycmVudFRhcmdldCIsIiRfZGF0YSIsIiRfY2xhc3NfaW5zdGFuY2UiLCIkZmlkMSIsIiRmaWQyIiwiJGpzX2lkIiwiJHdwb25pb24iLCJmaWVsZElEIiwiJF9hcmdzIiwiZmllbGRBcmdzIiwiaW5saW5lX2FqYXgiLCJXUE9uaW9uIiwiJHdoZXJlX3RvX2ZpbmQiLCIkaWQiLCIkdmFyX2lkIiwiaXNGaWVsZCIsIndpbmRvd0FyZ3MiLCJ0ZXh0IiwiJGlzX3Nob3ciLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGhhbmRsZSIsIiRqc29uIiwiZGVidWdfaW5mbyIsIiRkZWZpbmVkX3ZhcnMiLCJwcmV2ZW50RGVmYXVsdCIsInN3YWwiLCJ0eHQiLCJodG1sIiwic2hvd0NvbmZpcm1CdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsInNob3dDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbiIsIndpZHRoIiwib25CZWZvcmVPcGVuIiwiZW5hYmxlTG9hZGluZyIsIm9uT3BlbiIsImpzb25WaWV3IiwiZGlzYWJsZUxvYWRpbmciLCJ0aGVuIiwic2V0dGluZ3NfYXJncyIsIm9wdGlvbiIsImlzX2RlYnVnIiwiaXNOdWxsIiwiZmllbGRfZGVidWdfaW5mbyIsIiR2YXJzIiwiJHV0eHQiLCIkbXR4dCIsIiRhY3Rpb24iLCIkb25TdWNjZXNzIiwiJG9uRXJyb3IiLCIkb25BbHdheXMiLCIkYWpheCIsInJlcyIsImNvbXBpbGVkIiwib3B0aW9ucyIsImV2YWx1YXRlIiwiaW50ZXJwb2xhdGUiLCJlc2NhcGUiLCJ2YXJpYWJsZSIsInRlbXBsYXRlIiwiJGVsZW1zIiwiZWFjaCIsIiR0b2dnbGUiLCIkZXhfY2xhc3MiLCIkZWxlbWVudCIsInBhcmFtIiwibmVzdGFibGUiLCIkdGhpcyIsImJhc2UiLCIkZWwiLCJpbml0IiwicnVsZXNldCIsImRlcHMiLCJjcmVhdGVSdWxlc2V0IiwiZGVwUm9vdCIsImVuYWJsZSIsInNob3ciLCJzbGlkZURvd24iLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJzbGlkZVVwIiwiY2hlY2tUYXJnZXRzIiwiV1BPbmlvbl9EZXBlbmRlbmN5IiwiJHNlbGVjdG9yIiwiJGNvbnRleHQiLCJzZXRfYXJncyIsImZpZWxkX2RlYnVnIiwianNfZXJyb3JfaGFuZGxlciIsImpzX3ZhbGlkYXRvciIsImVyciIsImFwcGVuZFRvIiwianNfZXJyb3IiLCJtYXliZV9qc192YWxpZGF0ZV9lbGVtIiwiV1BPbmlvbl9WYWxpZGF0aW9uIiwiZ2V0X2Zvcm0iLCJqc192YWxpZGF0ZV9lbGVtIiwicnVsZXMiLCIkYXJnIiwianNfZnVuYyIsIiRleGlzdHMiLCIkd3Bvbmlvbl9kZWJ1ZyIsImdldCIsImlkIiwiYWRkIiwiJGluZm8iLCIkZm91bmQiLCIkSUQiLCJ0aXBweSIsImNvbnRlbnQiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiJGQiLCIkbm90aWNlX3R4dCIsImhlaWdodEF1dG8iLCJfYXJncyIsIiRhamF4X2tleSIsInBsdWdpbl9pZCIsIiR0eXBlIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwic2V0X2VsZW1lbnQiLCJzZXRfY29udHh0IiwibW9kdWxlX2luaXQiLCJlbGVtIiwiJGNvbnR4dCIsImNvbnRleHQiLCJXUE9uaW9uX1ZhbGlkYXRvciIsImZvcm0iLCJpbnZhbGlkSGFuZGxlciIsInNpYmxpbmdzIiwiYmVmb3JlIiwiaWdub3JlIiwiZXJyb3JQbGFjZW1lbnQiLCJ0cmlnZ2VyIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsInZhbGlkYXRlIiwiZmllbGQiLCJhY2NvcmRpb24iLCJoZWFkZXIiLCJjb2xsYXBzaWJsZSIsImFuaW1hdGUiLCJoZWlnaHRTdHlsZSIsImljb25zIiwiSUR0b0VsZW1lbnQiLCJXUE9uaW9uX0ZpZWxkIiwidyIsIndwb25pb25fcmVuZGVyX2ZpZWxkIiwiZmllbGRfYWJzdHJhY3QiLCJ0b29sdGlwIiwiaGFuZGxlX2JhY2t1cF9pbXBvcnQiLCIkZmlsZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmb3JjZV9kb3dubG9hZCIsImJsb2NrX2Zvcm0iLCJ1bmlxdWUiLCJleHRyYSIsImdldF9leHRyYV92YWx1ZSIsInN3YWxfZXJyb3IiLCJ1bmJsb2NrX2Zvcm0iLCIkaW5zIiwidGlwcHlfZ2V0IiwiaW5zdGFuY2VzIiwiZGVzdHJveSIsImJhY2t1cF9pZCIsInJlc3RvcmVfYmFja3VwIiwibXNnIiwidHlwZSIsIl90aXBweSIsInNob3dfdG9vbHRpcCIsImV4cG9ydE9iaiIsImV4cG9ydE5hbWUiLCJkYXRhU3RyIiwiZG93bmxvYWRBbmNob3JOb2RlIiwiY2xpY2siLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZWFkQXNUZXh0IiwiJGJhY2t1cGlkIiwiaW50ZXJhY3RpdmUiLCJvblNob3duIiwiJGlucHV0cyIsInByb3AiLCJjaG9zZW4iLCJoYW5kbGVfYXJncyIsIiRjbG9uZV93cmFwIiwiJGFkZF9idG4iLCIkbGltaXQiLCJsaW1pdCIsIiRlcm9yX21zZyIsImVycm9yX21zZyIsIiRzb3J0Iiwic29ydCIsIml0ZW1zIiwiaGFuZGxlIiwicGxhY2Vob2xkZXIiLCJldmVudCIsInVpIiwiY3NzIiwic3RvcCIsIldQT25pb25DbG9uZXIiLCJhZGRfYnRuIiwiY2xvbmVfZWxlbSIsInJlbW92ZV9idG4iLCJ0ZW1wbGF0ZUFmdGVyUmVuZGVyIiwiJGUiLCJ3cG9uaW9uX2ZpZWxkIiwicmVsb2FkIiwic29ydGFibGUiLCJvbkxpbWl0UmVhY2hlZCIsInByZXBlbmQiLCJ3cG9uaW9uX25vdGljZSIsInNob3dfYW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsImhpZGVfYW5pbWF0aW9uIiwid3BDb2xvclBpY2tlciIsIiRzZXR0aW5ncyIsIiR2aWV3IiwicGx1Z2lucyIsInJhbmdlUGx1Z2luIiwiaW5wdXQiLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsIiRodG1sIiwid2Vic2FmZSIsImZvbnRzIiwiYnVpbGRfb3B0aW9ucyIsInZhcmlhbnRzIiwiZ29vZ2xlX2ZvbnRzIiwiJHZhcmlhbnQiLCIkaHRtbF90ZW1wIiwiJGlucHV0IiwiJHByZXZpZXciLCJ3cF9tZWRpYV9mcmFtZSIsIiRhZGQiLCIkZWRpdCIsIiRjbGVhciIsIiRtYW5hZ2UiLCJpZHMiLCJ3aGF0Iiwic3RhdGUiLCJtZWRpYSIsImdhbGxlcnkiLCJsaWJyYXJ5IiwiZnJhbWUiLCJtdWx0aXBsZSIsIm9wZW4iLCJlZGl0Iiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJzZWxlY3RlZElkcyIsIm1vZGVscyIsImF0dGFjaG1lbnQiLCJ0b0pTT04iLCJzaXplcyIsInRodW1iIiwidGh1bWJuYWlsIiwiJHRtcCIsIiRwYXJlbnQiLCIkaW1hZ2VfaWQiLCIkayIsIiR2IiwiY3Vyc29yIiwic2Nyb2xsU2Vuc2l0aXZpdHkiLCJmb3JjZVBsYWNlaG9sZGVyU2l6ZSIsImhlbHBlciIsIm9wYWNpdHkiLCIkaXRlbSIsImhlaWdodCIsIiRtYXAiLCJkZXRhaWxzIiwiZGV0YWlsc0F0dHJpYnV0ZSIsIiRfaW5zdGFuY2UiLCJnZW9jb21wbGV0ZSIsImJpbmQiLCJsYXRMbmciLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJsYXQiLCJwYXJzZUZsb2F0IiwibG5nIiwiJGdyb3VwX3dyYXAiLCIkZXJyb3JfbXNnIiwiYmluZF9ldmVudHNfZm9yX3RpdGxlIiwicGFyc2VJbnQiLCJvblJlbW92ZSIsInVwZGF0ZV9ncm91cHNfdGl0bGUiLCIkbWFjaGVkIiwiJGhlYWRpbmciLCIkX3RoaXMiLCIkcmVtb3ZlX2J0biIsIiR3b3JrIiwiZWxlbXMiLCJwb3B1cCIsImVsbSIsImluaXRfdG9vbHRpcCIsInBvcHVwX3Rvb2x0aXAiLCIkdHAiLCIkZWxtIiwiJGluc3RhbmNlIiwiJGhlaWdodCIsIiRpY29uIiwiY2xvc2VNb2RhbCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsIiRyZXMiLCJyZXNldFZhbGlkYXRpb25NZXNzYWdlIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsIiRwb3B1cCIsImFsbG93T3V0c2lkZUNsaWNrIiwiY3VzdG9tQ2xhc3MiLCIkcG9wdXBfZWxlbSIsIiRwcmV2aWV3X2FkZCIsIm1lZGlhX2luc3RhbmNlIiwiaG9vayIsImZpcnN0IiwiYXR0cmlidXRlcyIsImlucHV0bWFzayIsIiR0aGlzX2VsZW0iLCIkdGFiIiwiZ2xvYmFsX3ZhbGlkYXRlIiwiYWZ0ZXIiLCJlcSIsImltYWdlIiwic2hvd19wcmV2aWV3Iiwic2VsZWN0MiIsIiRlbmFibGVkIiwiJGRpc2FibGVkIiwiY29ubmVjdFdpdGgiLCJmb250X3dlaWdodF9zdHlsZSIsIiRmb250X2ZpZWxkIiwiJGZvbnQiLCIkZm9udF93ZWlnaHRfc3R5bGUiLCJmb250X3N0eWxlIiwiJHRhZyIsIiRjb2xvciIsIiRhbGlnbiIsIiRmb250U2l6ZSIsIiRsaW5lSGVpZ2h0IiwiJGJhY2tVUEZvbnQiLCIkZGlyZWN0aW9uIiwiJGxldHRlclNwYWNpbmciLCJ3ZWlnaHQiLCIkX2F0dHJzIiwiJHRleHQiLCIkd2VpZ2h0X3ZhbCIsIiRzdHlsZV92YWwiLCJzZXR0aW5ncyIsImZyYW1lX3RpdGxlIiwidXBsb2FkX3R5cGUiLCJpbnNlcnRfdGl0bGUiLCIkdGV4dGFyZWEiLCJ3cExpbmsiLCIkZGVwIiwiY29udHJvbGxlciIsImNvbmRpdGlvbiIsIiRjb250cm9sbGVyIiwiJGNvbmRpdGlvbiIsIiRmaWVsZCIsIiRJTlBVVCIsImNvbnR4dCIsImNyZWF0ZVJ1bGUiLCJpbmNsdWRlIiwiJGZpZCIsIiR0b29sdGlwX2tleSIsInZhbGlkX2pzb24iLCJpc0ZldGNoaW5nIiwiY2FuRmV0Y2giLCIkaW1hZ2UiLCJ1cGRhdGVEdXJhdGlvbiIsIm9uU2hvdyIsInRpcCIsInJlc3BvbnNlIiwiZmV0Y2giLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNWaXNpYmxlIiwic2V0Q29udGVudCIsIm9uSGlkZGVuIiwicG9wcGVyT3B0aW9ucyIsIm1vZGlmaWVycyIsInByZXZlbnRPdmVyZmxvdyIsImljb24iLCJleHRlbmQiLCJhbmltYXRlQ3NzIiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkVuZCIsIk9BbmltYXRpb24iLCJNb3pBbmltYXRpb24iLCJXZWJraXRBbmltYXRpb24iLCJ0Iiwib25lIiwiJGFyZ3VtZW50cyIsInRpcHB5X2hlbHBlciIsImNyZWF0ZV9pbnN0YW5jZSIsIiRfaW5zdGFuY2VfaWQiLCJjb3JlIiwicmFuZF9pZCIsIiR0aXRsZSIsIiRkYXRhX3RpcHB5IiwiZ2V0X2luc3RhbmNlIiwiJHN0YXR1cyIsIiRfZWwiLCIkYXV0byIsInNldFRpbWVvdXQiLCJ3cG9uaW9uX3NldHVwIiwid3Bvbmlvbl9jcmVhdGVfZmllbGQiLCIkaW5pdF9tZXRob2QiLCIkbWV0aG9kcyIsIiRvcmdfY2xhc3MiLCJpbWFnZVVybCIsImJhY2tncm91bmQiLCJiYWNrZHJvcCIsIiRtY2VfZWRpdG9yIiwidGlueU1DRVByZUluaXQiLCJtY2VJbml0IiwiJHF1aWNrX3RhZ3MiLCJxdEluaXQiLCIkTkVXX0lEIiwiJHRleHRBcmVhIiwiJGFjdHVhbF9JRCIsIiRhY3R1YWxfaHRtbCIsIiRyZWdleCIsInRpbnltY2UiLCJ0aW55TUNFIiwicXVpY2t0YWdzIiwiJGZpbmFsX2FyZ3MiLCJwb3N0X2lkcyIsIiRidWxrX2VkaXQiLCJjaGlsZHJlbiIsInNlcmlhbGl6ZU9iamVjdCIsImFzeW5jIiwiY2FjaGUiLCJXUE9uaW9uX0d1dHRlbmJlcmciLCJzYXZlIiwiYmxvY2siLCJzYXZlX2hhbmRsZXIiLCJlZGl0X2hhbmRsZXIiLCJibG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsIiRfcG9zdGlkcyIsInBvc3RfaWQiLCJibG9ja19pZCIsImNsaWVudElkIiwiJHJlbW90ZSIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwiZWRpdG9yIiwiJHdwb19ibG9ja3MiLCJpc0FycmF5IiwiZml4X21lZGlhX3VpIiwiJHRhYmxlIiwiJGZpZWxkcyIsImZyYW1lcyIsImJyb3dzZSIsIldQT25pb25fTWV0YWJveF9Nb2R1bGUiLCJtZW51IiwiaXMiLCJzbGlkZVRvZ2dsZSIsIiRocmVmIiwiJHNlY3Rpb24iLCIkcGFyZW50X2FjdGl2ZXMiLCIkY3VycmVudCIsIiRiYXNlIiwiJGhpZGRlbiIsIm1lc3NhZ2UiLCJvdmVybGF5Q1NTIiwiJHZhbHVlcyIsInNlcmlhbGl6ZSIsInVuYmxvY2siLCJXUE9uaW9uX1F1aWNrX0VkaXQiLCJ2YWx1ZXMiLCIkbGlzdCIsImNsb3Nlc3QiLCJXUE9uaW9uX1Zpc3VhbF9Db21wb3NlciIsIndwb25pb25fdmlzdWFsX2NvbXBvc2VyX2luaXQiLCJ2c3BfanNfaGVscGVyIiwibG9kYXNoIiwibm9Db25mbGljdCIsIm1ldGFib3giLCJtZWRpYV9maWVsZHMiLCJidWxrX2VkaXQiLCJndXR0ZW5iZXJnIiwid29vY29tbWVyY2UiLCJxdWlja19lZGl0IiwidmlzdWFsX2NvbXBvc2VyIiwibW9kYWwiLCJhamF4ZXIiLCJkZWJ1ZyIsImZpZWxkcyIsInRleHRhcmVhIiwiaW1hZ2Vfc2VsZWN0Iiwic3dpdGNoZXIiLCJjb2xvcl9wYWxldHRlIiwiaWNvbl9waWNrZXIiLCJmb250X3NlbGVjdG9yIiwiZ3JvdXAiLCJ3cF9lZGl0b3IiLCJyZWxvYWRfd3BfZWRpdG9yIiwiZmllbGRzZXQiLCJ3cF9saW5rcyIsImNoZWNrYm94X3JhZGlvIiwia2V5dmFsdWVfcGFpciIsImNvbG9yX3BpY2tlciIsImRhdGVfcGlja2VyIiwiaW1hZ2VfcG9wdXAiLCJ1cGxvYWQiLCJpbWFnZV91cGxvYWQiLCJqcXVlcnlfdGFiIiwiZmllbGRfdG9vbHRpcCIsImNsb25lX2VsZW1lbnQiLCJzb3J0ZXIiLCJnb29nbGVfbWFwcyIsInR5cG9ncmFwaHkiLCJvZW1iZWQiLCJoZWFkaW5nIiwic3ViaGVhZGluZyIsImphbWJvX2NvbnRlbnQiLCJub3RpY2UiLCJiYWNrdXAiLCIkd3BvIiwiJHdwb2ZfZGl2Iiwic3VibWVudV9pbmRpY2F0b3IiLCJ0b2dnbGVDbGFzcyIsIiR3aWRnZXQiLCIkbWVudSIsImxvYWRpbmdfc2NyZWVuIiwiV1BPbmlvbl9XUF9Nb2RhbCIsIkJhY2tib25lIiwiVmlldyIsInRlbXBsYXRlcyIsImV2ZW50cyIsImFjdGl2ZV9wYWdlIiwiYWN0aXZlX3NlY3Rpb24iLCJpbml0aWFsaXplIiwibGVmdF9tZW51IiwiaGlkZV9tZW51IiwiYmluZEFsbCIsImluaXRfdGVtcGxhdGVzIiwicmVuZGVyIiwiJG0iLCJmcmFtZV9tZW51X2l0ZW0iLCJyb3V0ZXJfbWVudV9pdGVtIiwicGFnZV9jb250ZW50Iiwic2VjdGlvbl9jb250ZW50IiwiJGNvbnRlbnQiLCIkX2NvbnRlbnQiLCIkX21lbnUiLCJwcmVzZXJ2ZUZvY3VzIiwiZm9jdXMiLCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrIiwiJHRhcmdldCIsIiRzaG93X3RhcmdldCIsImhhbmRsZV90YWJfY2xpY2siLCIkcGFnZSIsImhhcyIsInVuZGVsZWdhdGVFdmVudHMiLCJvZmYiLCJzYXZlTW9kYWwiLCJkb05vdGhpbmciLCIkb3B0aW9ucyIsImdldF9sZWZ0X21lbnUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBUUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUI7Ozs7Ozs7O0FBUUEsU0FBTyxTQUFTQyxPQUFULENBQWlCQyxRQUFqQixFQUEyQkMsU0FBM0IsRUFBc0NDLFFBQXRDLEVBQWdEO0FBQ3JELFFBQUlDLFdBQVdDLFVBQVVDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JELFVBQVUsQ0FBVixNQUFpQkUsU0FBekMsR0FBcURGLFVBQVUsQ0FBVixDQUFyRCxHQUFvRSxFQUFuRjs7QUFFQSxRQUFJLENBQUMsZ0NBQWlCSixRQUFqQixDQUFMLEVBQWlDO0FBQy9CO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLGlDQUFrQkMsU0FBbEIsQ0FBTCxFQUFtQztBQUNqQztBQUNEOztBQUVELFFBQUksZUFBZSxPQUFPQyxRQUExQixFQUFvQztBQUNsQztBQUNBSyxjQUFRQyxLQUFSLENBQWMsdUNBQWQ7QUFDQTtBQUNELEtBZm9ELENBZW5EOzs7QUFHRixRQUFJLGFBQWEsT0FBT0wsUUFBeEIsRUFBa0M7QUFDaEM7QUFDQUksY0FBUUMsS0FBUixDQUFjLG1EQUFkO0FBQ0E7QUFDRDs7QUFFRCxRQUFJQyxVQUFVO0FBQ1pQLGdCQUFVQSxRQURFO0FBRVpDLGdCQUFVQSxRQUZFO0FBR1pGLGlCQUFXQTtBQUhDLEtBQWQ7O0FBTUEsUUFBSUgsTUFBTUUsUUFBTixDQUFKLEVBQXFCO0FBQ25CO0FBQ0EsVUFBSVUsV0FBV1osTUFBTUUsUUFBTixFQUFnQlUsUUFBL0I7QUFDQSxVQUFJQyxJQUFJLENBQVI7O0FBRUEsYUFBT0EsSUFBSUQsU0FBU0wsTUFBcEIsRUFBNEI7QUFDMUIsWUFBSUssU0FBU0MsQ0FBVCxFQUFZUixRQUFaLEdBQXVCQSxRQUEzQixFQUFxQztBQUNuQztBQUNEOztBQUVEUTtBQUNELE9BWGtCLENBV2pCOzs7QUFHRkQsZUFBU0UsTUFBVCxDQUFnQkQsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0JGLE9BQXRCLEVBZG1CLENBY2E7QUFDaEM7QUFDQTtBQUNBOztBQUVBLE9BQUNYLE1BQU1lLFNBQU4sSUFBbUIsRUFBcEIsRUFBd0JDLE9BQXhCLENBQWdDLFVBQVVDLFFBQVYsRUFBb0I7QUFDbEQsWUFBSUEsU0FBU0MsSUFBVCxLQUFrQmhCLFFBQWxCLElBQThCZSxTQUFTRSxZQUFULElBQXlCTixDQUEzRCxFQUE4RDtBQUM1REksbUJBQVNFLFlBQVQ7QUFDRDtBQUNGLE9BSkQ7QUFLRCxLQXhCRCxNQXdCTztBQUNMO0FBQ0FuQixZQUFNRSxRQUFOLElBQWtCO0FBQ2hCVSxrQkFBVSxDQUFDRCxPQUFELENBRE07QUFFaEJTLGNBQU07QUFGVSxPQUFsQjtBQUlEOztBQUVELFFBQUlsQixhQUFhLFdBQWpCLEVBQThCO0FBQzVCLHNCQUFTLFdBQVQsRUFBc0JBLFFBQXRCLEVBQWdDQyxTQUFoQyxFQUEyQ0MsUUFBM0MsRUFBcURDLFFBQXJEO0FBQ0Q7QUFDRixHQWpFRDtBQWtFRDs7a0JBRWNOLGE7QUFDZix5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7Ozs7Ozs7OztBQVNBLFNBQVNzQixpQkFBVCxDQUEyQnJCLEtBQTNCLEVBQWtDO0FBQ2hDOzs7Ozs7O0FBT0EsU0FBTyxTQUFTc0IsV0FBVCxHQUF1QjtBQUM1QixRQUFJLENBQUN0QixNQUFNZSxTQUFQLElBQW9CLENBQUNmLE1BQU1lLFNBQU4sQ0FBZ0JSLE1BQXpDLEVBQWlEO0FBQy9DLGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU9QLE1BQU1lLFNBQU4sQ0FBZ0JmLE1BQU1lLFNBQU4sQ0FBZ0JSLE1BQWhCLEdBQXlCLENBQXpDLEVBQTRDVyxJQUFuRDtBQUNELEdBTkQ7QUFPRDs7a0JBRWNHLGlCO0FBQ2YsNkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQVNBLFNBQVNFLGFBQVQsQ0FBdUJ2QixLQUF2QixFQUE4QjtBQUM1Qjs7Ozs7OztBQU9BLFNBQU8sU0FBU3dCLE9BQVQsQ0FBaUJ0QixRQUFqQixFQUEyQjtBQUNoQyxRQUFJLENBQUMsZ0NBQWlCQSxRQUFqQixDQUFMLEVBQWlDO0FBQy9CO0FBQ0Q7O0FBRUQsV0FBT0YsTUFBTUUsUUFBTixLQUFtQkYsTUFBTUUsUUFBTixFQUFnQmtCLElBQW5DLEdBQTBDcEIsTUFBTUUsUUFBTixFQUFnQmtCLElBQTFELEdBQWlFLENBQXhFO0FBQ0QsR0FORDtBQU9EOztrQkFFY0csYTtBQUNmLHlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7O0FBU0EsU0FBU0UsZUFBVCxDQUF5QnpCLEtBQXpCLEVBQWdDO0FBQzlCOzs7Ozs7OztBQVFBLFNBQU8sU0FBUzBCLFNBQVQsQ0FBbUJ4QixRQUFuQixFQUE2QjtBQUNsQztBQUNBLFFBQUksZ0JBQWdCLE9BQU9BLFFBQTNCLEVBQXFDO0FBQ25DLGFBQU8sZ0JBQWdCLE9BQU9GLE1BQU1lLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBOUI7QUFDRCxLQUppQyxDQUloQzs7O0FBR0YsV0FBT2YsTUFBTWUsU0FBTixDQUFnQixDQUFoQixJQUFxQmIsYUFBYUYsTUFBTWUsU0FBTixDQUFnQixDQUFoQixFQUFtQkcsSUFBckQsR0FBNEQsS0FBbkU7QUFDRCxHQVJEO0FBU0Q7O2tCQUVjTyxlO0FBQ2YsMkM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBOzs7Ozs7Ozs7QUFTQSxTQUFTRSxhQUFULENBQXVCM0IsS0FBdkIsRUFBOEI7QUFDNUI7Ozs7Ozs7QUFPQSxTQUFPLFNBQVM0QixPQUFULENBQWlCMUIsUUFBakIsRUFBMkI7QUFDaEMsV0FBT0EsWUFBWUYsS0FBbkI7QUFDRCxHQUZEO0FBR0Q7O2tCQUVjMkIsYTtBQUNmLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBOzs7Ozs7QUFNQSxTQUFTRSxXQUFULEdBQXVCO0FBQ3JCLE1BQUlDLFVBQVVDLE9BQU9DLE1BQVAsQ0FBYyxJQUFkLENBQWQ7QUFDQSxNQUFJQyxVQUFVRixPQUFPQyxNQUFQLENBQWMsSUFBZCxDQUFkO0FBQ0FGLFVBQVFmLFNBQVIsR0FBb0IsRUFBcEI7QUFDQWtCLFVBQVFsQixTQUFSLEdBQW9CLEVBQXBCO0FBQ0EsU0FBTztBQUNMbUIsZUFBVyw2QkFBY0osT0FBZCxDQUROO0FBRUxLLGVBQVcsNkJBQWNGLE9BQWQsQ0FGTjtBQUdMRyxrQkFBYyxnQ0FBaUJOLE9BQWpCLENBSFQ7QUFJTE8sa0JBQWMsZ0NBQWlCSixPQUFqQixDQUpUO0FBS0xLLGVBQVcsNkJBQWNSLE9BQWQsQ0FMTjtBQU1MUyxlQUFXLDZCQUFjTixPQUFkLENBTk47QUFPTE8sc0JBQWtCLGdDQUFpQlYsT0FBakIsRUFBMEIsSUFBMUIsQ0FQYjtBQVFMVyxzQkFBa0IsZ0NBQWlCUixPQUFqQixFQUEwQixJQUExQixDQVJiO0FBU0xTLGNBQVUsNkJBQWNaLE9BQWQsQ0FUTDtBQVVMYSxrQkFBYyw2QkFBY1YsT0FBZCxFQUF1QixJQUF2QixDQVZUO0FBV0xXLG1CQUFlLGlDQUFrQmQsT0FBbEIsQ0FYVjtBQVlMZSxtQkFBZSxpQ0FBa0JaLE9BQWxCLENBWlY7QUFhTGEsaUJBQWEsK0JBQWdCaEIsT0FBaEIsQ0FiUjtBQWNMaUIsaUJBQWEsK0JBQWdCZCxPQUFoQixDQWRSO0FBZUxlLGVBQVcsNkJBQWNsQixPQUFkLENBZk47QUFnQkxtQixlQUFXLDZCQUFjaEIsT0FBZCxDQWhCTjtBQWlCTEgsYUFBU0EsT0FqQko7QUFrQkxHLGFBQVNBO0FBbEJKLEdBQVA7QUFvQkQ7O2tCQUVjSixXO0FBQ2YsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQVVBLFNBQVNxQixnQkFBVCxDQUEwQmxELEtBQTFCLEVBQWlDbUQsU0FBakMsRUFBNEM7QUFDMUM7Ozs7Ozs7OztBQVNBLFNBQU8sU0FBU0MsVUFBVCxDQUFvQmxELFFBQXBCLEVBQThCQyxTQUE5QixFQUF5QztBQUM5QyxRQUFJLENBQUMsZ0NBQWlCRCxRQUFqQixDQUFMLEVBQWlDO0FBQy9CO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDaUQsU0FBRCxJQUFjLENBQUMsaUNBQWtCaEQsU0FBbEIsQ0FBbkIsRUFBaUQ7QUFDL0M7QUFDRCxLQVA2QyxDQU81Qzs7O0FBR0YsUUFBSSxDQUFDSCxNQUFNRSxRQUFOLENBQUwsRUFBc0I7QUFDcEIsYUFBTyxDQUFQO0FBQ0Q7O0FBRUQsUUFBSW1ELGtCQUFrQixDQUF0Qjs7QUFFQSxRQUFJRixTQUFKLEVBQWU7QUFDYkUsd0JBQWtCckQsTUFBTUUsUUFBTixFQUFnQlUsUUFBaEIsQ0FBeUJMLE1BQTNDO0FBQ0FQLFlBQU1FLFFBQU4sSUFBa0I7QUFDaEJrQixjQUFNcEIsTUFBTUUsUUFBTixFQUFnQmtCLElBRE47QUFFaEJSLGtCQUFVO0FBRk0sT0FBbEI7QUFJRCxLQU5ELE1BTU87QUFDTDtBQUNBLFVBQUlBLFdBQVdaLE1BQU1FLFFBQU4sRUFBZ0JVLFFBQS9COztBQUVBLFVBQUkwQyxRQUFRLFNBQVNBLEtBQVQsQ0FBZXpDLENBQWYsRUFBa0I7QUFDNUIsWUFBSUQsU0FBU0MsQ0FBVCxFQUFZVixTQUFaLEtBQTBCQSxTQUE5QixFQUF5QztBQUN2Q1MsbUJBQVNFLE1BQVQsQ0FBZ0JELENBQWhCLEVBQW1CLENBQW5CO0FBQ0F3Qyw0QkFGdUMsQ0FFcEI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBQ3JELE1BQU1lLFNBQU4sSUFBbUIsRUFBcEIsRUFBd0JDLE9BQXhCLENBQWdDLFVBQVVDLFFBQVYsRUFBb0I7QUFDbEQsZ0JBQUlBLFNBQVNDLElBQVQsS0FBa0JoQixRQUFsQixJQUE4QmUsU0FBU0UsWUFBVCxJQUF5Qk4sQ0FBM0QsRUFBOEQ7QUFDNURJLHVCQUFTRSxZQUFUO0FBQ0Q7QUFDRixXQUpEO0FBS0Q7QUFDRixPQWZEOztBQWlCQSxXQUFLLElBQUlOLElBQUlELFNBQVNMLE1BQVQsR0FBa0IsQ0FBL0IsRUFBa0NNLEtBQUssQ0FBdkMsRUFBMENBLEdBQTFDLEVBQStDO0FBQzdDeUMsY0FBTXpDLENBQU47QUFDRDtBQUNGOztBQUVELFFBQUlYLGFBQWEsYUFBakIsRUFBZ0M7QUFDOUIsc0JBQVMsYUFBVCxFQUF3QkEsUUFBeEIsRUFBa0NDLFNBQWxDO0FBQ0Q7O0FBRUQsV0FBT2tELGVBQVA7QUFDRCxHQXJERDtBQXNERDs7a0JBRWNILGdCO0FBQ2YsNEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBOzs7Ozs7Ozs7OztBQVdBLFNBQVNLLGFBQVQsQ0FBdUJ2RCxLQUF2QixFQUE4QndELGNBQTlCLEVBQThDO0FBQzVDOzs7Ozs7OztBQVFBLFNBQU8sU0FBU0MsUUFBVCxDQUFrQnZELFFBQWxCLEVBQTRCO0FBQ2pDLFFBQUksQ0FBQ0YsTUFBTUUsUUFBTixDQUFMLEVBQXNCO0FBQ3BCRixZQUFNRSxRQUFOLElBQWtCO0FBQ2hCVSxrQkFBVSxFQURNO0FBRWhCUSxjQUFNO0FBRlUsT0FBbEI7QUFJRDs7QUFFRHBCLFVBQU1FLFFBQU4sRUFBZ0JrQixJQUFoQjtBQUNBLFFBQUlSLFdBQVdaLE1BQU1FLFFBQU4sRUFBZ0JVLFFBQS9COztBQUVBLFNBQUssSUFBSThDLE9BQU9wRCxVQUFVQyxNQUFyQixFQUE2Qm9ELE9BQU8sSUFBSUMsS0FBSixDQUFVRixPQUFPLENBQVAsR0FBV0EsT0FBTyxDQUFsQixHQUFzQixDQUFoQyxDQUFwQyxFQUF3RUcsT0FBTyxDQUFwRixFQUF1RkEsT0FBT0gsSUFBOUYsRUFBb0dHLE1BQXBHLEVBQTRHO0FBQzFHRixXQUFLRSxPQUFPLENBQVosSUFBaUJ2RCxVQUFVdUQsSUFBVixDQUFqQjtBQUNEOztBQUVELFFBQUksQ0FBQ2pELFFBQUQsSUFBYSxDQUFDQSxTQUFTTCxNQUEzQixFQUFtQztBQUNqQyxhQUFPaUQsaUJBQWlCRyxLQUFLLENBQUwsQ0FBakIsR0FBMkJuRCxTQUFsQztBQUNEOztBQUVELFFBQUlTLFdBQVc7QUFDYkMsWUFBTWhCLFFBRE87QUFFYmlCLG9CQUFjO0FBRkQsS0FBZjs7QUFLQW5CLFVBQU1lLFNBQU4sQ0FBZ0IrQyxJQUFoQixDQUFxQjdDLFFBQXJCOztBQUVBLFdBQU9BLFNBQVNFLFlBQVQsR0FBd0JQLFNBQVNMLE1BQXhDLEVBQWdEO0FBQzlDLFVBQUlJLFVBQVVDLFNBQVNLLFNBQVNFLFlBQWxCLENBQWQ7QUFDQSxVQUFJNEMsU0FBU3BELFFBQVFQLFFBQVIsQ0FBaUI0RCxLQUFqQixDQUF1QixJQUF2QixFQUE2QkwsSUFBN0IsQ0FBYjs7QUFFQSxVQUFJSCxjQUFKLEVBQW9CO0FBQ2xCRyxhQUFLLENBQUwsSUFBVUksTUFBVjtBQUNEOztBQUVEOUMsZUFBU0UsWUFBVDtBQUNEOztBQUVEbkIsVUFBTWUsU0FBTixDQUFnQmtELEdBQWhCOztBQUVBLFFBQUlULGNBQUosRUFBb0I7QUFDbEIsYUFBT0csS0FBSyxDQUFMLENBQVA7QUFDRDtBQUNGLEdBMUNEO0FBMkNEOztrQkFFY0osYTtBQUNmLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBOzs7Ozs7QUFFQSxJQUFJVyxlQUFlLDRCQUFuQjtBQUFBLElBQ0loQyxZQUFZZ0MsYUFBYWhDLFNBRDdCO0FBQUEsSUFFSUMsWUFBWStCLGFBQWEvQixTQUY3QjtBQUFBLElBR0lDLGVBQWU4QixhQUFhOUIsWUFIaEM7QUFBQSxJQUlJQyxlQUFlNkIsYUFBYTdCLFlBSmhDO0FBQUEsSUFLSUMsWUFBWTRCLGFBQWE1QixTQUw3QjtBQUFBLElBTUlDLFlBQVkyQixhQUFhM0IsU0FON0I7QUFBQSxJQU9JQyxtQkFBbUIwQixhQUFhMUIsZ0JBUHBDO0FBQUEsSUFRSUMsbUJBQW1CeUIsYUFBYXpCLGdCQVJwQztBQUFBLElBU0lDLFdBQVd3QixhQUFheEIsUUFUNUI7QUFBQSxJQVVJQyxlQUFldUIsYUFBYXZCLFlBVmhDO0FBQUEsSUFXSUMsZ0JBQWdCc0IsYUFBYXRCLGFBWGpDO0FBQUEsSUFZSUMsZ0JBQWdCcUIsYUFBYXJCLGFBWmpDO0FBQUEsSUFhSUMsY0FBY29CLGFBQWFwQixXQWIvQjtBQUFBLElBY0lDLGNBQWNtQixhQUFhbkIsV0FkL0I7QUFBQSxJQWVJQyxZQUFZa0IsYUFBYWxCLFNBZjdCO0FBQUEsSUFnQklDLFlBQVlpQixhQUFhakIsU0FoQjdCO0FBQUEsSUFpQkluQixVQUFVb0MsYUFBYXBDLE9BakIzQjtBQUFBLElBa0JJRyxVQUFVaUMsYUFBYWpDLE9BbEIzQjs7UUFvQlNKLFcsR0FBQUEscUI7UUFBYUssUyxHQUFBQSxTO1FBQVdDLFMsR0FBQUEsUztRQUFXQyxZLEdBQUFBLFk7UUFBY0MsWSxHQUFBQSxZO1FBQWNDLFMsR0FBQUEsUztRQUFXQyxTLEdBQUFBLFM7UUFBV0MsZ0IsR0FBQUEsZ0I7UUFBa0JDLGdCLEdBQUFBLGdCO1FBQWtCQyxRLEdBQUFBLFE7UUFBVUMsWSxHQUFBQSxZO1FBQWNDLGEsR0FBQUEsYTtRQUFlQyxhLEdBQUFBLGE7UUFBZUMsVyxHQUFBQSxXO1FBQWFDLFcsR0FBQUEsVztRQUFhQyxTLEdBQUFBLFM7UUFBV0MsUyxHQUFBQSxTO1FBQVduQixPLEdBQUFBLE87UUFBU0csTyxHQUFBQSxPO0FBQ2pQLGlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7O0FBU0EsU0FBU2tDLGdCQUFULENBQTBCakUsUUFBMUIsRUFBb0M7QUFDbEMsTUFBSSxhQUFhLE9BQU9BLFFBQXBCLElBQWdDLE9BQU9BLFFBQTNDLEVBQXFEO0FBQ25EO0FBQ0FPLFlBQVFDLEtBQVIsQ0FBYywyQ0FBZDtBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUksTUFBTTBELElBQU4sQ0FBV2xFLFFBQVgsQ0FBSixFQUEwQjtBQUN4QjtBQUNBTyxZQUFRQyxLQUFSLENBQWMsdUNBQWQ7QUFDQSxXQUFPLEtBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUMsNEJBQTRCMEQsSUFBNUIsQ0FBaUNsRSxRQUFqQyxDQUFMLEVBQWlEO0FBQy9DO0FBQ0FPLFlBQVFDLEtBQVIsQ0FBYyxtRkFBZDtBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNEOztrQkFFY3lELGdCO0FBQ2YsNEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBOzs7Ozs7OztBQVFBLFNBQVNFLGlCQUFULENBQTJCbEUsU0FBM0IsRUFBc0M7QUFDcEMsTUFBSSxhQUFhLE9BQU9BLFNBQXBCLElBQWlDLE9BQU9BLFNBQTVDLEVBQXVEO0FBQ3JEO0FBQ0FNLFlBQVFDLEtBQVIsQ0FBYywyQ0FBZDtBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUksQ0FBQywrQkFBK0IwRCxJQUEvQixDQUFvQ2pFLFNBQXBDLENBQUwsRUFBcUQ7QUFDbkQ7QUFDQU0sWUFBUUMsS0FBUixDQUFjLDRGQUFkO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0Q7O2tCQUVjMkQsaUI7QUFDZiw2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDekJNQyxhO0FBQ0wsMEJBQThEO0FBQUEsTUFBakRDLEtBQWlELHVFQUF6QyxFQUF5QztBQUFBLE1BQXJDQyxTQUFxQyx1RUFBekIsRUFBeUI7QUFBQSxNQUFyQkMsVUFBcUIsdUVBQVIsS0FBUTs7QUFBQTs7QUFDN0QsT0FBS2QsSUFBTCxHQUFnQlksS0FBaEI7QUFDQSxPQUFLRyxRQUFMLEdBQWdCRixTQUFoQjtBQUNBLE9BQUtHLE1BQUwsR0FBZ0JGLFVBQWhCO0FBQ0EsT0FBS0csS0FBTDtBQUNBLFNBQU8sS0FBS2pCLElBQVo7QUFDQTs7OzswQkFFTztBQUNQLFFBQUssSUFBSWtCLEtBQVQsSUFBa0IsS0FBS0gsUUFBdkIsRUFBa0M7QUFDakMsUUFBSSxTQUFTLEtBQUtDLE1BQWQsSUFBd0IsUUFBUSxLQUFLRCxRQUFMLENBQWVHLEtBQWYsQ0FBUixNQUFtQyxRQUEvRCxFQUEwRTtBQUN6RSxVQUFLbEIsSUFBTCxDQUFXa0IsS0FBWCxJQUFxQixJQUFJUCxhQUFKLENBQW1CLEtBQUtYLElBQUwsQ0FBV2tCLEtBQVgsQ0FBbkIsRUFBdUMsS0FBS0gsUUFBTCxDQUFlRyxLQUFmLENBQXZDLEVBQStELEtBQUtGLE1BQXBFLENBQXJCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sU0FBSSxPQUFPLEtBQUtoQixJQUFMLENBQVdrQixLQUFYLENBQVAsS0FBOEIsV0FBbEMsRUFBZ0Q7QUFDL0MsV0FBS2xCLElBQUwsQ0FBV2tCLEtBQVgsSUFBcUIsS0FBS0gsUUFBTCxDQUFlRyxLQUFmLENBQXJCO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7Ozs7OztrQkFHYTtBQUFBLEtBQUVOLEtBQUYsdUVBQVUsRUFBVjtBQUFBLEtBQWNDLFNBQWQsdUVBQTBCLEVBQTFCO0FBQUEsS0FBOEJNLFFBQTlCLHVFQUF5QyxLQUF6QztBQUFBLFFBQW9ELElBQUlSLGFBQUosQ0FBbUJDLEtBQW5CLEVBQTBCQyxTQUExQixFQUFxQ00sUUFBckMsQ0FBcEQ7QUFBQSxDOzs7Ozs7Ozs7Ozs7QUN0QkY7O0FBRWJDLE9BQU9DLE9BQVAsR0FBaUIsU0FBU0MsU0FBVCxDQUFtQkMsVUFBbkIsRUFBK0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsR0FBSjtBQUNBLE1BQUksT0FBT0MsV0FBUCxLQUF1QixXQUF2QixJQUFzQ0EsWUFBWUQsR0FBdEQsRUFBMkQ7QUFDekRBLFVBQU0sQ0FBQ0MsWUFBWUQsR0FBWixLQUFvQkMsWUFBWUMsTUFBWixDQUFtQkMsZUFBeEMsSUFBMkQsR0FBakU7QUFDQSxRQUFJTCxVQUFKLEVBQWdCO0FBQ2QsYUFBT0UsR0FBUDtBQUNEOztBQUVEO0FBQ0FELFFBQUlDLE1BQU0sQ0FBVjs7QUFFQSxXQUFPSSxLQUFLQyxLQUFMLENBQVcsQ0FBQ0wsTUFBTUQsQ0FBUCxJQUFZLEdBQXZCLElBQThCLEdBQTlCLEdBQW9DLEdBQXBDLEdBQTBDQSxDQUFqRDtBQUNELEdBVkQsTUFVTztBQUNMQyxVQUFNLENBQUNNLEtBQUtOLEdBQUwsR0FBV00sS0FBS04sR0FBTCxFQUFYLEdBQXdCLElBQUlNLElBQUosR0FBV0MsT0FBWCxFQUF6QixJQUFpRCxHQUF2RDtBQUNBLFFBQUlULFVBQUosRUFBZ0I7QUFDZCxhQUFPRSxHQUFQO0FBQ0Q7O0FBRUQ7QUFDQUQsUUFBSUMsTUFBTSxDQUFWOztBQUVBLFdBQU9JLEtBQUtDLEtBQUwsQ0FBVyxDQUFDTCxNQUFNRCxDQUFQLElBQVksR0FBdkIsSUFBOEIsR0FBOUIsR0FBb0MsR0FBcEMsR0FBMENBLENBQWpEO0FBQ0Q7QUFDRixDQWpDRDtBQWtDQSxxQzs7Ozs7Ozs7Ozs7O0FDcENhOztBQUViSixPQUFPQyxPQUFQLEdBQWlCLFNBQVNZLGNBQVQsQ0FBd0JDLEVBQXhCLEVBQTRCQyxVQUE1QixFQUF3QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsb0JBQW9CQyxtQkFBT0EsQ0FBQyxxR0FBUixDQUF4QjtBQUNBRixlQUFhbEMsTUFBTXFDLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQjdGLFNBQTNCLEVBQXNDLENBQXRDLENBQWI7QUFDQSxTQUFPeUYsa0JBQWtCRixFQUFsQixFQUFzQkMsVUFBdEIsQ0FBUDtBQUNELENBakJEO0FBa0JBLDBDOzs7Ozs7Ozs7Ozs7QUNwQmE7Ozs7QUFFYixJQUFJTSxVQUFVLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsU0FBT0EsT0FBT0MsUUFBZCxNQUEyQixRQUEzRCxHQUFzRSxVQUFVQyxHQUFWLEVBQWU7QUFBRSxnQkFBY0EsR0FBZCwwQ0FBY0EsR0FBZDtBQUFvQixDQUEzRyxHQUE4RyxVQUFVQSxHQUFWLEVBQWU7QUFBRSxTQUFPQSxPQUFPLE9BQU9GLE1BQVAsS0FBa0IsVUFBekIsSUFBdUNFLElBQUlDLFdBQUosS0FBb0JILE1BQTNELElBQXFFRSxRQUFRRixPQUFPSixTQUFwRixHQUFnRyxRQUFoRyxVQUFrSE0sR0FBbEgsMENBQWtIQSxHQUFsSCxDQUFQO0FBQStILENBQTVROztBQUVBeEIsT0FBT0MsT0FBUCxHQUFpQixTQUFTeUIsb0JBQVQsQ0FBOEJaLEVBQTlCLEVBQWtDQyxVQUFsQyxFQUE4QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJWSxVQUFVLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDQyxNQUF2RDtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxRQUFRLElBQVo7O0FBRUEsTUFBSUMsNkJBQTZCLGtEQUFqQzs7QUFFQSxNQUFJLE9BQU9sQixFQUFQLEtBQWMsUUFBbEIsRUFBNEI7QUFDMUIsUUFBSSxPQUFPYSxRQUFRYixFQUFSLENBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckNnQixhQUFPSCxRQUFRYixFQUFSLENBQVA7QUFDRCxLQUZELE1BRU8sSUFBSUEsR0FBR21CLEtBQUgsQ0FBU0QsMEJBQVQsQ0FBSixFQUEwQztBQUMvQ0YsYUFBTyxJQUFJSSxRQUFKLENBQWEsSUFBYixFQUFtQixZQUFZcEIsRUFBL0IsR0FBUCxDQUQrQyxDQUNGO0FBQzlDO0FBQ0YsR0FORCxNQU1PLElBQUk5RCxPQUFPa0UsU0FBUCxDQUFpQmlCLFFBQWpCLENBQTBCZixJQUExQixDQUErQk4sRUFBL0IsTUFBdUMsZ0JBQTNDLEVBQTZEO0FBQ2xFLFFBQUksT0FBT0EsR0FBRyxDQUFILENBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBSUEsR0FBRyxDQUFILEVBQU1tQixLQUFOLENBQVlELDBCQUFaLENBQUosRUFBNkM7QUFDM0NGLGVBQU9NLEtBQUt0QixHQUFHLENBQUgsSUFBUSxJQUFSLEdBQWVBLEdBQUcsQ0FBSCxDQUFmLEdBQXVCLElBQTVCLENBQVAsQ0FEMkMsQ0FDRDtBQUMzQztBQUNGLEtBSkQsTUFJTztBQUNMZ0IsYUFBT2hCLEdBQUcsQ0FBSCxFQUFNQSxHQUFHLENBQUgsQ0FBTixDQUFQO0FBQ0Q7O0FBRUQsUUFBSSxPQUFPQSxHQUFHLENBQUgsQ0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixVQUFJLE9BQU9hLFFBQVFiLEdBQUcsQ0FBSCxDQUFSLENBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDeENpQixnQkFBUUosUUFBUWIsR0FBRyxDQUFILENBQVIsQ0FBUjtBQUNELE9BRkQsTUFFTyxJQUFJQSxHQUFHLENBQUgsRUFBTW1CLEtBQU4sQ0FBWUQsMEJBQVosQ0FBSixFQUE2QztBQUNsREQsZ0JBQVFLLEtBQUt0QixHQUFHLENBQUgsQ0FBTCxDQUFSLENBRGtELENBQzdCO0FBQ3RCO0FBQ0YsS0FORCxNQU1PLElBQUlPLFFBQVFQLEdBQUcsQ0FBSCxDQUFSLE1BQW1CLFFBQXZCLEVBQWlDO0FBQ3RDaUIsY0FBUWpCLEdBQUcsQ0FBSCxDQUFSO0FBQ0Q7QUFDRixHQWxCTSxNQWtCQSxJQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUNuQ2dCLFdBQU9oQixFQUFQO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPZ0IsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QixVQUFNLElBQUlPLEtBQUosQ0FBVVAsT0FBTywwQkFBakIsQ0FBTjtBQUNEOztBQUVELFNBQU9BLEtBQUs3QyxLQUFMLENBQVc4QyxLQUFYLEVBQWtCaEIsVUFBbEIsQ0FBUDtBQUNELENBekREO0FBMERBLGdEOzs7Ozs7Ozs7Ozs7QUM5RGE7O0FBRWJmLE9BQU9DLE9BQVAsR0FBaUIsU0FBU3FDLGVBQVQsQ0FBeUIxRCxJQUF6QixFQUErQjJELElBQS9CLEVBQXFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUk7QUFDRixXQUFPTCxTQUFTakQsS0FBVCxDQUFlLElBQWYsRUFBcUJMLEtBQUs0RCxLQUFMLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUJGLElBQXZCLENBQXJCLENBQVA7QUFDRCxHQUZELENBRUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1YsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQWREO0FBZUEsMkM7Ozs7Ozs7Ozs7OztBQ2pCYTs7QUFFYjFDLE9BQU9DLE9BQVAsR0FBaUIsU0FBUzBDLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJakIsVUFBVSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q0MsTUFBdkQ7O0FBRUEsTUFBSSxPQUFPZSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDQSxlQUFXakIsUUFBUWlCLFFBQVIsQ0FBWDtBQUNEOztBQUVELFNBQU8sT0FBT0EsUUFBUCxLQUFvQixVQUEzQjtBQUNELENBbEJEO0FBbUJBLDJDOzs7Ozs7Ozs7Ozs7QUNyQmE7O0FBRWI1QyxPQUFPQyxPQUFQLEdBQWlCLFNBQVM0QyxPQUFULENBQWlCQyxPQUFqQixFQUEwQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJbkIsVUFBVSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q0MsTUFBdkQ7QUFDQUYsVUFBUW9CLFFBQVIsR0FBbUJwQixRQUFRb0IsUUFBUixJQUFvQixFQUF2QztBQUNBLE1BQUlBLFdBQVdwQixRQUFRb0IsUUFBdkI7QUFDQUEsV0FBU0MsR0FBVCxHQUFlRCxTQUFTQyxHQUFULElBQWdCLEVBQS9CO0FBQ0FELFdBQVNDLEdBQVQsQ0FBYUMsR0FBYixHQUFtQkYsU0FBU0MsR0FBVCxDQUFhQyxHQUFiLElBQW9CLEVBQXZDOztBQUVBLE1BQUlGLFNBQVNDLEdBQVQsQ0FBYUMsR0FBYixDQUFpQkgsT0FBakIsS0FBNkJDLFNBQVNDLEdBQVQsQ0FBYUMsR0FBYixDQUFpQkgsT0FBakIsRUFBMEJJLFdBQTFCLEtBQTBDekgsU0FBM0UsRUFBc0Y7QUFDcEYsUUFBSXNILFNBQVNDLEdBQVQsQ0FBYUMsR0FBYixDQUFpQkgsT0FBakIsRUFBMEJJLFdBQTFCLEtBQTBDLElBQTlDLEVBQW9EO0FBQ2xELGFBQU8sRUFBUDtBQUNEO0FBQ0QsV0FBT0gsU0FBU0MsR0FBVCxDQUFhQyxHQUFiLENBQWlCSCxPQUFqQixFQUEwQkksV0FBakM7QUFDRDs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDQXZCRDtBQXdCQSxtQzs7Ozs7Ozs7Ozs7O0FDMUJhOztBQUVibEQsT0FBT0MsT0FBUCxHQUFpQixTQUFTa0QsR0FBVCxDQUFhQyxHQUFiLEVBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSTtBQUNGLFFBQUlDLFNBQVNyQyxtQkFBT0EsQ0FBQyxzQkFBUixDQUFiO0FBQ0EsUUFBSXNDLFNBQVNELE9BQU9FLFVBQVAsQ0FBa0IsS0FBbEIsQ0FBYjtBQUNBRCxXQUFPRSxNQUFQLENBQWNMLEdBQWQ7QUFDQUMsV0FBT0UsT0FBT0csTUFBUCxDQUFjLEtBQWQsQ0FBUDtBQUNELEdBTEQsQ0FLRSxPQUFPaEIsQ0FBUCxFQUFVO0FBQ1ZXLFdBQU81SCxTQUFQO0FBQ0Q7O0FBRUQsTUFBSTRILFNBQVM1SCxTQUFiLEVBQXdCO0FBQ3RCLFdBQU80SCxJQUFQO0FBQ0Q7O0FBRUQsTUFBSU0sYUFBYTFDLG1CQUFPQSxDQUFDLHlFQUFSLENBQWpCO0FBQ0EsTUFBSTJDLEVBQUo7O0FBRUEsTUFBSUMsY0FBYyxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsVUFBN0IsRUFBeUM7QUFDekQsV0FBT0QsVUFBVUMsVUFBVixHQUF1QkQsV0FBVyxLQUFLQyxVQUE5QztBQUNELEdBRkQ7O0FBSUEsTUFBSUMsZUFBZSxTQUFTQSxZQUFULENBQXNCQyxFQUF0QixFQUEwQkMsRUFBMUIsRUFBOEI7QUFDL0MsUUFBSUMsR0FBSixFQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUJDLEdBQW5CLEVBQXdCQyxPQUF4QjtBQUNBRixVQUFNSixLQUFLLFVBQVg7QUFDQUssVUFBTUosS0FBSyxVQUFYO0FBQ0FDLFVBQU1GLEtBQUssVUFBWDtBQUNBRyxVQUFNRixLQUFLLFVBQVg7QUFDQUssY0FBVSxDQUFDTixLQUFLLFVBQU4sS0FBcUJDLEtBQUssVUFBMUIsQ0FBVjtBQUNBLFFBQUlDLE1BQU1DLEdBQVYsRUFBZTtBQUNiLGFBQU9HLFVBQVUsVUFBVixHQUF1QkYsR0FBdkIsR0FBNkJDLEdBQXBDO0FBQ0Q7QUFDRCxRQUFJSCxNQUFNQyxHQUFWLEVBQWU7QUFDYixVQUFJRyxVQUFVLFVBQWQsRUFBMEI7QUFDeEIsZUFBT0EsVUFBVSxVQUFWLEdBQXVCRixHQUF2QixHQUE2QkMsR0FBcEM7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPQyxVQUFVLFVBQVYsR0FBdUJGLEdBQXZCLEdBQTZCQyxHQUFwQztBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0wsYUFBT0MsVUFBVUYsR0FBVixHQUFnQkMsR0FBdkI7QUFDRDtBQUNGLEdBbkJEOztBQXFCQSxNQUFJRSxLQUFLLFNBQVNBLEVBQVQsQ0FBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQjtBQUM1QixXQUFPRixJQUFJQyxDQUFKLEdBQVEsQ0FBQ0QsQ0FBRCxHQUFLRSxDQUFwQjtBQUNELEdBRkQ7QUFHQSxNQUFJQyxLQUFLLFNBQVNBLEVBQVQsQ0FBWUgsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQjtBQUM1QixXQUFPRixJQUFJRSxDQUFKLEdBQVFELElBQUksQ0FBQ0MsQ0FBcEI7QUFDRCxHQUZEO0FBR0EsTUFBSUUsS0FBSyxTQUFTQSxFQUFULENBQVlKLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUI7QUFDNUIsV0FBT0YsSUFBSUMsQ0FBSixHQUFRQyxDQUFmO0FBQ0QsR0FGRDtBQUdBLE1BQUlHLEtBQUssU0FBU0EsRUFBVCxDQUFZTCxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQzVCLFdBQU9ELEtBQUtELElBQUksQ0FBQ0UsQ0FBVixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFJSSxNQUFNLFNBQVNBLEdBQVQsQ0FBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QlYsQ0FBekIsRUFBNEJyRSxDQUE1QixFQUErQmdGLEVBQS9CLEVBQW1DO0FBQzNDSixRQUFJaEIsYUFBYWdCLENBQWIsRUFBZ0JoQixhQUFhQSxhQUFhUSxHQUFHUyxDQUFILEVBQU1DLENBQU4sRUFBU0MsQ0FBVCxDQUFiLEVBQTBCVixDQUExQixDQUFiLEVBQTJDVyxFQUEzQyxDQUFoQixDQUFKO0FBQ0EsV0FBT3BCLGFBQWFILFlBQVltQixDQUFaLEVBQWU1RSxDQUFmLENBQWIsRUFBZ0M2RSxDQUFoQyxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFJSSxNQUFNLFNBQVNBLEdBQVQsQ0FBYUwsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QlYsQ0FBekIsRUFBNEJyRSxDQUE1QixFQUErQmdGLEVBQS9CLEVBQW1DO0FBQzNDSixRQUFJaEIsYUFBYWdCLENBQWIsRUFBZ0JoQixhQUFhQSxhQUFhWSxHQUFHSyxDQUFILEVBQU1DLENBQU4sRUFBU0MsQ0FBVCxDQUFiLEVBQTBCVixDQUExQixDQUFiLEVBQTJDVyxFQUEzQyxDQUFoQixDQUFKO0FBQ0EsV0FBT3BCLGFBQWFILFlBQVltQixDQUFaLEVBQWU1RSxDQUFmLENBQWIsRUFBZ0M2RSxDQUFoQyxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFJSyxNQUFNLFNBQVNBLEdBQVQsQ0FBYU4sQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QlYsQ0FBekIsRUFBNEJyRSxDQUE1QixFQUErQmdGLEVBQS9CLEVBQW1DO0FBQzNDSixRQUFJaEIsYUFBYWdCLENBQWIsRUFBZ0JoQixhQUFhQSxhQUFhYSxHQUFHSSxDQUFILEVBQU1DLENBQU4sRUFBU0MsQ0FBVCxDQUFiLEVBQTBCVixDQUExQixDQUFiLEVBQTJDVyxFQUEzQyxDQUFoQixDQUFKO0FBQ0EsV0FBT3BCLGFBQWFILFlBQVltQixDQUFaLEVBQWU1RSxDQUFmLENBQWIsRUFBZ0M2RSxDQUFoQyxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFJTSxNQUFNLFNBQVNBLEdBQVQsQ0FBYVAsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QlYsQ0FBekIsRUFBNEJyRSxDQUE1QixFQUErQmdGLEVBQS9CLEVBQW1DO0FBQzNDSixRQUFJaEIsYUFBYWdCLENBQWIsRUFBZ0JoQixhQUFhQSxhQUFhYyxHQUFHRyxDQUFILEVBQU1DLENBQU4sRUFBU0MsQ0FBVCxDQUFiLEVBQTBCVixDQUExQixDQUFiLEVBQTJDVyxFQUEzQyxDQUFoQixDQUFKO0FBQ0EsV0FBT3BCLGFBQWFILFlBQVltQixDQUFaLEVBQWU1RSxDQUFmLENBQWIsRUFBZ0M2RSxDQUFoQyxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFJTyxzQkFBc0IsU0FBU0EsbUJBQVQsQ0FBNkJwQyxHQUE3QixFQUFrQztBQUMxRCxRQUFJcUMsVUFBSjtBQUNBLFFBQUlDLGlCQUFpQnRDLElBQUk1SCxNQUF6QjtBQUNBLFFBQUltSyxzQkFBc0JELGlCQUFpQixDQUEzQztBQUNBLFFBQUlFLHNCQUFzQixDQUFDRCxzQkFBc0JBLHNCQUFzQixFQUE3QyxJQUFtRCxFQUE3RTtBQUNBLFFBQUlFLGlCQUFpQixDQUFDRCxzQkFBc0IsQ0FBdkIsSUFBNEIsRUFBakQ7QUFDQSxRQUFJRSxhQUFhLElBQUlqSCxLQUFKLENBQVVnSCxpQkFBaUIsQ0FBM0IsQ0FBakI7QUFDQSxRQUFJRSxnQkFBZ0IsQ0FBcEI7QUFDQSxRQUFJQyxhQUFhLENBQWpCO0FBQ0EsV0FBT0EsYUFBYU4sY0FBcEIsRUFBb0M7QUFDbENELG1CQUFhLENBQUNPLGFBQWFBLGFBQWEsQ0FBM0IsSUFBZ0MsQ0FBN0M7QUFDQUQsc0JBQWdCQyxhQUFhLENBQWIsR0FBaUIsQ0FBakM7QUFDQUYsaUJBQVdMLFVBQVgsSUFBeUJLLFdBQVdMLFVBQVgsSUFBeUJyQyxJQUFJNkMsVUFBSixDQUFlRCxVQUFmLEtBQThCRCxhQUFoRjtBQUNBQztBQUNEO0FBQ0RQLGlCQUFhLENBQUNPLGFBQWFBLGFBQWEsQ0FBM0IsSUFBZ0MsQ0FBN0M7QUFDQUQsb0JBQWdCQyxhQUFhLENBQWIsR0FBaUIsQ0FBakM7QUFDQUYsZUFBV0wsVUFBWCxJQUF5QkssV0FBV0wsVUFBWCxJQUF5QixRQUFRTSxhQUExRDtBQUNBRCxlQUFXRCxpQkFBaUIsQ0FBNUIsSUFBaUNILGtCQUFrQixDQUFuRDtBQUNBSSxlQUFXRCxpQkFBaUIsQ0FBNUIsSUFBaUNILG1CQUFtQixFQUFwRDtBQUNBLFdBQU9JLFVBQVA7QUFDRCxHQXJCRDs7QUF1QkEsTUFBSUksYUFBYSxTQUFTQSxVQUFULENBQW9CcEMsTUFBcEIsRUFBNEI7QUFDM0MsUUFBSXFDLGlCQUFpQixFQUFyQjtBQUNBLFFBQUlDLHFCQUFxQixFQUF6QjtBQUNBLFFBQUlDLEtBQUo7QUFDQSxRQUFJQyxNQUFKOztBQUVBLFNBQUtBLFNBQVMsQ0FBZCxFQUFpQkEsVUFBVSxDQUEzQixFQUE4QkEsUUFBOUIsRUFBd0M7QUFDdENELGNBQVF2QyxXQUFXd0MsU0FBUyxDQUFwQixHQUF3QixHQUFoQztBQUNBRiwyQkFBcUIsTUFBTUMsTUFBTWxFLFFBQU4sQ0FBZSxFQUFmLENBQTNCO0FBQ0FnRSx1QkFBaUJBLGlCQUFpQkMsbUJBQW1CRyxNQUFuQixDQUEwQkgsbUJBQW1CNUssTUFBbkIsR0FBNEIsQ0FBdEQsRUFBeUQsQ0FBekQsQ0FBbEM7QUFDRDtBQUNELFdBQU8ySyxjQUFQO0FBQ0QsR0FaRDs7QUFjQSxNQUFJMUIsSUFBSSxFQUFSO0FBQ0EsTUFBSStCLENBQUo7QUFDQSxNQUFJQyxFQUFKO0FBQ0EsTUFBSUMsRUFBSjtBQUNBLE1BQUlDLEVBQUo7QUFDQSxNQUFJQyxFQUFKO0FBQ0EsTUFBSTVCLENBQUo7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsQ0FBSjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJMEIsTUFBTSxDQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxDQUFWO0FBQ0EsTUFBSUMsTUFBTSxDQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxDQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxDQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsTUFBSUMsTUFBTSxFQUFWOztBQUVBeEUsUUFBTU8sV0FBV1AsR0FBWCxDQUFOO0FBQ0FxQixNQUFJZSxvQkFBb0JwQyxHQUFwQixDQUFKO0FBQ0E0QixNQUFJLFVBQUo7QUFDQUMsTUFBSSxVQUFKO0FBQ0FDLE1BQUksVUFBSjtBQUNBQyxNQUFJLFVBQUo7O0FBRUF2QixPQUFLYSxFQUFFakosTUFBUDtBQUNBLE9BQUtnTCxJQUFJLENBQVQsRUFBWUEsSUFBSTVDLEVBQWhCLEVBQW9CNEMsS0FBSyxFQUF6QixFQUE2QjtBQUMzQkMsU0FBS3pCLENBQUw7QUFDQTBCLFNBQUt6QixDQUFMO0FBQ0EwQixTQUFLekIsQ0FBTDtBQUNBMEIsU0FBS3pCLENBQUw7QUFDQUgsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQkssR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk0sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk8sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlEsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQkssR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk0sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk8sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlEsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQkssR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk0sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk8sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlEsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQkssR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk0sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk8sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlEsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlUsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlcsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlUsR0FBM0IsRUFBZ0MsU0FBaEMsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlcsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlUsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlcsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlMsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlUsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEw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Ozs7O2tDQUVlO0FBQ2YsT0FBSW1MLFVBQVUsS0FBZDtBQUNBLE9BQUksS0FBS25MLE9BQUwsQ0FBYyxNQUFkLENBQUosRUFBNkI7QUFDNUJtTCxjQUFVLEVBQVY7O0FBRUFuWSxNQUFFdU4sSUFBRixDQUFRLEtBQUtQLE9BQUwsQ0FBYyxNQUFkLENBQVIsRUFBZ0MsVUFBRW5OLEtBQUYsRUFBU1UsSUFBVCxFQUFtQjtBQUNsRDRYLGFBQVM1WCxJQUFULElBQW9CLE9BQU9WLE1BQU8sWUFBUCxDQUFQLEtBQWlDLFdBQW5DLEdBQW1EQSxNQUFPLFlBQVAsQ0FBbkQsR0FBMkVBLE1BQU8sT0FBUCxDQUE3RjtBQUNBLEtBRkQ7QUFHQTtBQUNELFVBQU9zWSxPQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE1GLG1DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy93cG9uaW9uLWNvcmUuanNcIik7XG4iLCJpbXBvcnQgdmFsaWRhdGVOYW1lc3BhY2UgZnJvbSAnLi92YWxpZGF0ZU5hbWVzcGFjZS5qcyc7XG5pbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuaW1wb3J0IHsgZG9BY3Rpb24gfSBmcm9tICcuLyc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIGFkZCBhIGhvb2suXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICBGdW5jdGlvbiB0aGF0IGFkZHMgYSBuZXcgaG9vay5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBob29rIHRvIHRoZSBhcHByb3ByaWF0ZSBob29rcyBjb250YWluZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIGhvb2tOYW1lICBOYW1lIG9mIGhvb2sgdG8gYWRkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWVzcGFjZSBUaGUgdW5pcXVlIG5hbWVzcGFjZSBpZGVudGlmeWluZyB0aGUgY2FsbGJhY2sgaW4gdGhlIGZvcm0gYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAgRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBob29rIGlzIHJ1blxuICAgKiBAcGFyYW0gez9udW1iZXJ9ICBwcmlvcml0eSAgUHJpb3JpdHkgb2YgdGhpcyBob29rIChkZWZhdWx0PTEwKVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGFkZEhvb2soaG9va05hbWUsIG5hbWVzcGFjZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDEwO1xuXG4gICAgaWYgKCF2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGJhY2spIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgaG9vayBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBWYWxpZGF0ZSBudW1lcmljIHByaW9yaXR5XG5cblxuICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIHByaW9yaXR5KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignSWYgc3BlY2lmaWVkLCB0aGUgaG9vayBwcmlvcml0eSBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICB9O1xuXG4gICAgaWYgKGhvb2tzW2hvb2tOYW1lXSkge1xuICAgICAgLy8gRmluZCB0aGUgY29ycmVjdCBpbnNlcnQgaW5kZXggb2YgdGhlIG5ldyBob29rLlxuICAgICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB3aGlsZSAoaSA8IGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbaV0ucHJpb3JpdHkgPiBwcmlvcml0eSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaSsrO1xuICAgICAgfSAvLyBJbnNlcnQgKG9yIGFwcGVuZCkgdGhlIG5ldyBob29rLlxuXG5cbiAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAwLCBoYW5kbGVyKTsgLy8gV2UgbWF5IGFsc28gYmUgY3VycmVudGx5IGV4ZWN1dGluZyB0aGlzIGhvb2suICBJZiB0aGUgY2FsbGJhY2tcbiAgICAgIC8vIHdlJ3JlIGFkZGluZyB3b3VsZCBjb21lIGFmdGVyIHRoZSBjdXJyZW50IGNhbGxiYWNrLCB0aGVyZSdzIG5vXG4gICAgICAvLyBwcm9ibGVtOyBvdGhlcndpc2Ugd2UgbmVlZCB0byBpbmNyZWFzZSB0aGUgZXhlY3V0aW9uIGluZGV4IG9mXG4gICAgICAvLyBhbnkgb3RoZXIgcnVucyBieSAxIHRvIGFjY291bnQgZm9yIHRoZSBhZGRlZCBlbGVtZW50LlxuXG4gICAgICAoaG9va3MuX19jdXJyZW50IHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChob29rSW5mbykge1xuICAgICAgICBpZiAoaG9va0luZm8ubmFtZSA9PT0gaG9va05hbWUgJiYgaG9va0luZm8uY3VycmVudEluZGV4ID49IGkpIHtcbiAgICAgICAgICBob29rSW5mby5jdXJyZW50SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGhvb2sgb2YgaXRzIHR5cGUuXG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbaGFuZGxlcl0sXG4gICAgICAgIHJ1bnM6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGhvb2tOYW1lICE9PSAnaG9va0FkZGVkJykge1xuICAgICAgZG9BY3Rpb24oJ2hvb2tBZGRlZCcsIGhvb2tOYW1lLCBuYW1lc3BhY2UsIGNhbGxiYWNrLCBwcmlvcml0eSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlQWRkSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB0aGUgbmFtZSBvZiB0aGVcbiAqIGN1cnJlbnRseSBydW5uaW5nIGhvb2ssIG9yIGBudWxsYCBpZiBubyBob29rIG9mIHRoZSBnaXZlbiB0eXBlIGlzIGN1cnJlbnRseVxuICogcnVubmluZy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICAgICAgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBob29rLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50SG9vayhob29rcykge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudGx5IHJ1bm5pbmcgaG9vaywgb3IgYG51bGxgIGlmIG5vIGhvb2sgb2ZcbiAgICogdGhlIGdpdmVuIHR5cGUgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAqXG4gICAqIEByZXR1cm4gez9zdHJpbmd9ICAgICAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSBjdXJyZW50bHkgcnVubmluZyBob29rLCBvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbnVsbGAgaWYgbm8gaG9vayBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBjdXJyZW50SG9vaygpIHtcbiAgICBpZiAoIWhvb2tzLl9fY3VycmVudCB8fCAhaG9va3MuX19jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzLl9fY3VycmVudFtob29rcy5fX2N1cnJlbnQubGVuZ3RoIC0gMV0ubmFtZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VycmVudEhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVDdXJyZW50SG9vay5qcy5tYXAiLCJpbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gdGhlIG51bWJlciBvZiB0aW1lcyBhXG4gKiBob29rIGhhcyBiZWVuIGNhbGxlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGhvb2sncyBjYWxsIGNvdW50LlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURpZEhvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyBhbiBhY3Rpb24gaGFzIGJlZW4gZmlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIGhvb2sgbmFtZSB0byBjaGVjay5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgICBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBob29rIGhhcyBydW4uXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gZGlkSG9vayhob29rTmFtZSkge1xuICAgIGlmICghdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3NbaG9va05hbWVdICYmIGhvb2tzW2hvb2tOYW1lXS5ydW5zID8gaG9va3NbaG9va05hbWVdLnJ1bnMgOiAwO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaWRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlRGlkSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB3aGV0aGVyIGEgaG9vayBpc1xuICogY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgYSBob29rIGlzIGN1cnJlbnRseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGV4ZWN1dGVkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVEb2luZ0hvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBhIGhvb2sgaXMgY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHs/c3RyaW5nfSBob29rTmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBjaGVjayBmb3IuICBJZlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbWl0dGVkLCB3aWxsIGNoZWNrIGZvciBhbnkgaG9vayBiZWluZyBleGVjdXRlZC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgV2hldGhlciB0aGUgaG9vayBpcyBiZWluZyBleGVjdXRlZC5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBkb2luZ0hvb2soaG9va05hbWUpIHtcbiAgICAvLyBJZiB0aGUgaG9va05hbWUgd2FzIG5vdCBwYXNzZWQsIGNoZWNrIGZvciBhbnkgY3VycmVudCBob29rLlxuICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGhvb2tOYW1lKSB7XG4gICAgICByZXR1cm4gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBob29rcy5fX2N1cnJlbnRbMF07XG4gICAgfSAvLyBSZXR1cm4gdGhlIF9fY3VycmVudCBob29rLlxuXG5cbiAgICByZXR1cm4gaG9va3MuX19jdXJyZW50WzBdID8gaG9va05hbWUgPT09IGhvb2tzLl9fY3VycmVudFswXS5uYW1lIDogZmFsc2U7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURvaW5nSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZURvaW5nSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB3aGV0aGVyIGFueSBoYW5kbGVycyBhcmVcbiAqIGF0dGFjaGVkIHRvIGEgcGFydGljdWxhciBob29rLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgYW55IGhhbmRsZXJzIGFyZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaGVkIHRvIGEgcGFydGljdWxhciBob29rLlxuICovXG5mdW5jdGlvbiBjcmVhdGVIYXNIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGhvdyBtYW55IGhhbmRsZXJzIGFyZSBhdHRhY2hlZCBmb3IgdGhlIGdpdmVuIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gIGhvb2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIGNoZWNrIGZvci5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGVyZSBhcmUgaGFuZGxlcnMgdGhhdCBhcmUgYXR0YWNoZWQgdG8gdGhlIGdpdmVuIGhvb2suXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gaGFzSG9vayhob29rTmFtZSkge1xuICAgIHJldHVybiBob29rTmFtZSBpbiBob29rcztcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGFzSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUhhc0hvb2suanMubWFwIiwiaW1wb3J0IGNyZWF0ZUFkZEhvb2sgZnJvbSAnLi9jcmVhdGVBZGRIb29rJztcbmltcG9ydCBjcmVhdGVSZW1vdmVIb29rIGZyb20gJy4vY3JlYXRlUmVtb3ZlSG9vayc7XG5pbXBvcnQgY3JlYXRlSGFzSG9vayBmcm9tICcuL2NyZWF0ZUhhc0hvb2snO1xuaW1wb3J0IGNyZWF0ZVJ1bkhvb2sgZnJvbSAnLi9jcmVhdGVSdW5Ib29rJztcbmltcG9ydCBjcmVhdGVDdXJyZW50SG9vayBmcm9tICcuL2NyZWF0ZUN1cnJlbnRIb29rJztcbmltcG9ydCBjcmVhdGVEb2luZ0hvb2sgZnJvbSAnLi9jcmVhdGVEb2luZ0hvb2snO1xuaW1wb3J0IGNyZWF0ZURpZEhvb2sgZnJvbSAnLi9jcmVhdGVEaWRIb29rJztcbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgaG9va3Mgb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIGhvb2tzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvb2tzKCkge1xuICB2YXIgYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBmaWx0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgYWN0aW9ucy5fX2N1cnJlbnQgPSBbXTtcbiAgZmlsdGVycy5fX2N1cnJlbnQgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhZGRBY3Rpb246IGNyZWF0ZUFkZEhvb2soYWN0aW9ucyksXG4gICAgYWRkRmlsdGVyOiBjcmVhdGVBZGRIb29rKGZpbHRlcnMpLFxuICAgIHJlbW92ZUFjdGlvbjogY3JlYXRlUmVtb3ZlSG9vayhhY3Rpb25zKSxcbiAgICByZW1vdmVGaWx0ZXI6IGNyZWF0ZVJlbW92ZUhvb2soZmlsdGVycyksXG4gICAgaGFzQWN0aW9uOiBjcmVhdGVIYXNIb29rKGFjdGlvbnMpLFxuICAgIGhhc0ZpbHRlcjogY3JlYXRlSGFzSG9vayhmaWx0ZXJzKSxcbiAgICByZW1vdmVBbGxBY3Rpb25zOiBjcmVhdGVSZW1vdmVIb29rKGFjdGlvbnMsIHRydWUpLFxuICAgIHJlbW92ZUFsbEZpbHRlcnM6IGNyZWF0ZVJlbW92ZUhvb2soZmlsdGVycywgdHJ1ZSksXG4gICAgZG9BY3Rpb246IGNyZWF0ZVJ1bkhvb2soYWN0aW9ucyksXG4gICAgYXBwbHlGaWx0ZXJzOiBjcmVhdGVSdW5Ib29rKGZpbHRlcnMsIHRydWUpLFxuICAgIGN1cnJlbnRBY3Rpb246IGNyZWF0ZUN1cnJlbnRIb29rKGFjdGlvbnMpLFxuICAgIGN1cnJlbnRGaWx0ZXI6IGNyZWF0ZUN1cnJlbnRIb29rKGZpbHRlcnMpLFxuICAgIGRvaW5nQWN0aW9uOiBjcmVhdGVEb2luZ0hvb2soYWN0aW9ucyksXG4gICAgZG9pbmdGaWx0ZXI6IGNyZWF0ZURvaW5nSG9vayhmaWx0ZXJzKSxcbiAgICBkaWRBY3Rpb246IGNyZWF0ZURpZEhvb2soYWN0aW9ucyksXG4gICAgZGlkRmlsdGVyOiBjcmVhdGVEaWRIb29rKGZpbHRlcnMpLFxuICAgIGFjdGlvbnM6IGFjdGlvbnMsXG4gICAgZmlsdGVyczogZmlsdGVyc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb29rcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUhvb2tzLmpzLm1hcCIsImltcG9ydCB2YWxpZGF0ZU5hbWVzcGFjZSBmcm9tICcuL3ZhbGlkYXRlTmFtZXNwYWNlLmpzJztcbmltcG9ydCB2YWxpZGF0ZUhvb2tOYW1lIGZyb20gJy4vdmFsaWRhdGVIb29rTmFtZS5qcyc7XG5pbXBvcnQgeyBkb0FjdGlvbiB9IGZyb20gJy4vJztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmVtb3ZlIGEgc3BlY2lmaWVkIGhvb2sgb3IgYWxsXG4gKiBob29rcyBieSB0aGUgZ2l2ZW4gbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqIEBwYXJhbSAge2Jvb2xlYW59ICAgICByZW1vdmVBbGwgIFdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBjYWxsYmFja3MgZm9yIGEgaG9va05hbWUsIHdpdGhvdXQgcmVnYXJkIHRvIG5hbWVzcGFjZS4gVXNlZCB0byBjcmVhdGUgYHJlbW92ZUFsbCpgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgaG9va3MuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUmVtb3ZlSG9vayhob29rcywgcmVtb3ZlQWxsKSB7XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgKG9yIGFsbCBjYWxsYmFja3MpIGZyb20gdGhlIGhvb2sgd2l0aCBhXG4gICAqIGdpdmVuIGhvb2tOYW1lIGFuZCBuYW1lc3BhY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBob29rTmFtZSAgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gbW9kaWZ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgbmFtZXNwYWNlIFRoZSB1bmlxdWUgbmFtZXNwYWNlIGlkZW50aWZ5aW5nIHRoZSBjYWxsYmFjayBpbiB0aGUgZm9ybSBgdmVuZG9yL3BsdWdpbi9mdW5jdGlvbmAuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gICAgICAgICAgICAgVGhlIG51bWJlciBvZiBjYWxsYmFja3MgcmVtb3ZlZC5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmVIb29rKGhvb2tOYW1lLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAoIXZhbGlkYXRlSG9va05hbWUoaG9va05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFyZW1vdmVBbGwgJiYgIXZhbGlkYXRlTmFtZXNwYWNlKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEJhaWwgaWYgbm8gaG9va3MgZXhpc3QgYnkgdGhpcyBuYW1lXG5cblxuICAgIGlmICghaG9va3NbaG9va05hbWVdKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcnNSZW1vdmVkID0gMDtcblxuICAgIGlmIChyZW1vdmVBbGwpIHtcbiAgICAgIGhhbmRsZXJzUmVtb3ZlZCA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycy5sZW5ndGg7XG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIHJ1bnM6IGhvb2tzW2hvb2tOYW1lXS5ydW5zLFxuICAgICAgICBoYW5kbGVyczogW11cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgdG8gcmVtb3ZlLlxuICAgICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgIGlmIChoYW5kbGVyc1tpXS5uYW1lc3BhY2UgPT09IG5hbWVzcGFjZSkge1xuICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBoYW5kbGVyc1JlbW92ZWQrKzsgLy8gVGhpcyBjYWxsYmFjayBtYXkgYWxzbyBiZSBwYXJ0IG9mIGEgaG9vayB0aGF0IGlzXG4gICAgICAgICAgLy8gY3VycmVudGx5IGV4ZWN1dGluZy4gIElmIHRoZSBjYWxsYmFjayB3ZSdyZSByZW1vdmluZ1xuICAgICAgICAgIC8vIGNvbWVzIGFmdGVyIHRoZSBjdXJyZW50IGNhbGxiYWNrLCB0aGVyZSdzIG5vIHByb2JsZW07XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIGV4ZWN1dGlvbiBpbmRleCBvZiBhbnlcbiAgICAgICAgICAvLyBvdGhlciBydW5zIGJ5IDEgdG8gYWNjb3VudCBmb3IgdGhlIHJlbW92ZWQgZWxlbWVudC5cblxuICAgICAgICAgIChob29rcy5fX2N1cnJlbnQgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGhvb2tJbmZvKSB7XG4gICAgICAgICAgICBpZiAoaG9va0luZm8ubmFtZSA9PT0gaG9va05hbWUgJiYgaG9va0luZm8uY3VycmVudEluZGV4ID49IGkpIHtcbiAgICAgICAgICAgICAgaG9va0luZm8uY3VycmVudEluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBfbG9vcChpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaG9va05hbWUgIT09ICdob29rUmVtb3ZlZCcpIHtcbiAgICAgIGRvQWN0aW9uKCdob29rUmVtb3ZlZCcsIGhvb2tOYW1lLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyc1JlbW92ZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlbW92ZUhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSZW1vdmVIb29rLmpzLm1hcCIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgZXhlY3V0ZSBhbGwgY2FsbGJhY2tzXG4gKiByZWdpc3RlcmVkIHRvIGEgaG9vayBvZiB0aGUgc3BlY2lmaWVkIHR5cGUsIG9wdGlvbmFsbHkgcmV0dXJuaW5nIHRoZSBmaW5hbFxuICogdmFsdWUgb2YgdGhlIGNhbGwgY2hhaW4uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzICAgICAgICAgIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICogQHBhcmFtICB7P2Jvb2xlYW59ICAgIHJldHVybkZpcnN0QXJnIFdoZXRoZXIgZWFjaCBob29rIGNhbGxiYWNrIGlzIGV4cGVjdGVkIHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0cyBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICAgICAgRnVuY3Rpb24gdGhhdCBydW5zIGhvb2sgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSdW5Ib29rKGhvb2tzLCByZXR1cm5GaXJzdEFyZykge1xuICAvKipcbiAgICogUnVucyBhbGwgY2FsbGJhY2tzIGZvciB0aGUgc3BlY2lmaWVkIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gcnVuLlxuICAgKiBAcGFyYW0gIHsuLi4qfSAgIGFyZ3MgICAgIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBob29rIGNhbGxiYWNrcy5cbiAgICpcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICBSZXR1cm4gdmFsdWUgb2YgcnVubmVyLCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIHJ1bkhvb2tzKGhvb2tOYW1lKSB7XG4gICAgaWYgKCFob29rc1tob29rTmFtZV0pIHtcbiAgICAgIGhvb2tzW2hvb2tOYW1lXSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICBydW5zOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGhvb2tzW2hvb2tOYW1lXS5ydW5zKys7XG4gICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVycyB8fCAhaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmV0dXJuRmlyc3RBcmcgPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBob29rSW5mbyA9IHtcbiAgICAgIG5hbWU6IGhvb2tOYW1lLFxuICAgICAgY3VycmVudEluZGV4OiAwXG4gICAgfTtcblxuICAgIGhvb2tzLl9fY3VycmVudC5wdXNoKGhvb2tJbmZvKTtcblxuICAgIHdoaWxlIChob29rSW5mby5jdXJyZW50SW5kZXggPCBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNbaG9va0luZm8uY3VycmVudEluZGV4XTtcbiAgICAgIHZhciByZXN1bHQgPSBoYW5kbGVyLmNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xuXG4gICAgICBpZiAocmV0dXJuRmlyc3RBcmcpIHtcbiAgICAgICAgYXJnc1swXSA9IHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaG9va0luZm8uY3VycmVudEluZGV4Kys7XG4gICAgfVxuXG4gICAgaG9va3MuX19jdXJyZW50LnBvcCgpO1xuXG4gICAgaWYgKHJldHVybkZpcnN0QXJnKSB7XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJ1bkhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSdW5Ib29rLmpzLm1hcCIsImltcG9ydCBjcmVhdGVIb29rcyBmcm9tICcuL2NyZWF0ZUhvb2tzJztcblxudmFyIF9jcmVhdGVIb29rcyA9IGNyZWF0ZUhvb2tzKCksXG4gICAgYWRkQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmFkZEFjdGlvbixcbiAgICBhZGRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuYWRkRmlsdGVyLFxuICAgIHJlbW92ZUFjdGlvbiA9IF9jcmVhdGVIb29rcy5yZW1vdmVBY3Rpb24sXG4gICAgcmVtb3ZlRmlsdGVyID0gX2NyZWF0ZUhvb2tzLnJlbW92ZUZpbHRlcixcbiAgICBoYXNBY3Rpb24gPSBfY3JlYXRlSG9va3MuaGFzQWN0aW9uLFxuICAgIGhhc0ZpbHRlciA9IF9jcmVhdGVIb29rcy5oYXNGaWx0ZXIsXG4gICAgcmVtb3ZlQWxsQWN0aW9ucyA9IF9jcmVhdGVIb29rcy5yZW1vdmVBbGxBY3Rpb25zLFxuICAgIHJlbW92ZUFsbEZpbHRlcnMgPSBfY3JlYXRlSG9va3MucmVtb3ZlQWxsRmlsdGVycyxcbiAgICBkb0FjdGlvbiA9IF9jcmVhdGVIb29rcy5kb0FjdGlvbixcbiAgICBhcHBseUZpbHRlcnMgPSBfY3JlYXRlSG9va3MuYXBwbHlGaWx0ZXJzLFxuICAgIGN1cnJlbnRBY3Rpb24gPSBfY3JlYXRlSG9va3MuY3VycmVudEFjdGlvbixcbiAgICBjdXJyZW50RmlsdGVyID0gX2NyZWF0ZUhvb2tzLmN1cnJlbnRGaWx0ZXIsXG4gICAgZG9pbmdBY3Rpb24gPSBfY3JlYXRlSG9va3MuZG9pbmdBY3Rpb24sXG4gICAgZG9pbmdGaWx0ZXIgPSBfY3JlYXRlSG9va3MuZG9pbmdGaWx0ZXIsXG4gICAgZGlkQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmRpZEFjdGlvbixcbiAgICBkaWRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuZGlkRmlsdGVyLFxuICAgIGFjdGlvbnMgPSBfY3JlYXRlSG9va3MuYWN0aW9ucyxcbiAgICBmaWx0ZXJzID0gX2NyZWF0ZUhvb2tzLmZpbHRlcnM7XG5cbmV4cG9ydCB7IGNyZWF0ZUhvb2tzLCBhZGRBY3Rpb24sIGFkZEZpbHRlciwgcmVtb3ZlQWN0aW9uLCByZW1vdmVGaWx0ZXIsIGhhc0FjdGlvbiwgaGFzRmlsdGVyLCByZW1vdmVBbGxBY3Rpb25zLCByZW1vdmVBbGxGaWx0ZXJzLCBkb0FjdGlvbiwgYXBwbHlGaWx0ZXJzLCBjdXJyZW50QWN0aW9uLCBjdXJyZW50RmlsdGVyLCBkb2luZ0FjdGlvbiwgZG9pbmdGaWx0ZXIsIGRpZEFjdGlvbiwgZGlkRmlsdGVyLCBhY3Rpb25zLCBmaWx0ZXJzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFZhbGlkYXRlIGEgaG9va05hbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIGhvb2sgbmFtZSB0byB2YWxpZGF0ZS4gU2hvdWxkIGJlIGEgbm9uIGVtcHR5IHN0cmluZyBjb250YWluaW5nXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHkgbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzIGFuZCB1bmRlcnNjb3Jlcy4gQWxzbyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGhvb2sgbmFtZSBjYW5ub3QgYmVnaW4gd2l0aCBgX19gLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgV2hldGhlciB0aGUgaG9vayBuYW1lIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGhvb2tOYW1lIHx8ICcnID09PSBob29rTmFtZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoL15fXy8udGVzdChob29rTmFtZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIG5hbWUgY2Fubm90IGJlZ2luIHdpdGggYF9fYC4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aMC05Xy4tXSokLy50ZXN0KGhvb2tOYW1lKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBjYW4gb25seSBjb250YWluIG51bWJlcnMsIGxldHRlcnMsIGRhc2hlcywgcGVyaW9kcyBhbmQgdW5kZXJzY29yZXMuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlSG9va05hbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0ZUhvb2tOYW1lLmpzLm1hcCIsIi8qKlxuICogVmFsaWRhdGUgYSBuYW1lc3BhY2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2UgdG8gdmFsaWRhdGUgLSBzaG91bGQgdGFrZSB0aGUgZm9ybVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgIFdoZXRoZXIgdGhlIG5hbWVzcGFjZSBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIG5hbWVzcGFjZSB8fCAnJyA9PT0gbmFtZXNwYWNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgbmFtZXNwYWNlIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghL15bYS16QS1aXVthLXpBLVowLTlfLlxcLVxcL10qJC8udGVzdChuYW1lc3BhY2UpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgbmFtZXNwYWNlIGNhbiBvbmx5IGNvbnRhaW4gbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzLCB1bmRlcnNjb3JlcyBhbmQgc2xhc2hlcy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVOYW1lc3BhY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0ZU5hbWVzcGFjZS5qcy5tYXAiLCJjbGFzcyBKU19QYXJzZV9BcmdzIHtcclxuXHRjb25zdHJ1Y3RvciggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19uZXN0ZWQgPSBmYWxzZSApIHtcclxuXHRcdHRoaXMuYXJncyAgICAgPSAkYXJncztcclxuXHRcdHRoaXMuZGVmYXVsdHMgPSAkZGVmYXVsdHM7XHJcblx0XHR0aGlzLm5lc3RlZCAgID0gJGlzX25lc3RlZDtcclxuXHRcdHRoaXMucGFyc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLmFyZ3M7XHJcblx0fVxyXG5cclxuXHRwYXJzZSgpIHtcclxuXHRcdGZvciggbGV0ICRfa2V5IGluIHRoaXMuZGVmYXVsdHMgKSB7XHJcblx0XHRcdGlmKCB0cnVlID09PSB0aGlzLm5lc3RlZCAmJiB0eXBlb2YgIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0gPT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IG5ldyBKU19QYXJzZV9BcmdzKCB0aGlzLmFyZ3NbICRfa2V5IF0sIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0sIHRoaXMubmVzdGVkICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3NbICRfa2V5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gdGhpcy5kZWZhdWx0c1sgJF9rZXkgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19kZWVwID0gZmFsc2UgKSA9PiBuZXcgSlNfUGFyc2VfQXJncyggJGFyZ3MsICRkZWZhdWx0cywgJGlzX2RlZXAgKTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWljcm90aW1lKGdldEFzRmxvYXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9taWNyb3RpbWUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGltcHJvdmVkIGJ5OiBEdW1pdHJ1IFV6dW4gKGh0dHA6Ly9kdXp1bi5tZSlcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gbWljcm90aW1lKHRydWUpXG4gIC8vICAgZXhhbXBsZSAxOiAkdGltZVN0YW1wID4gMTAwMDAwMDAwMCAmJiAkdGltZVN0YW1wIDwgMjAwMDAwMDAwMFxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogL14wXFwuWzAtOV17MSw2fSBbMC05XXsxMCwxMH0kLy50ZXN0KG1pY3JvdGltZSgpKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBzO1xuICB2YXIgbm93O1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBub3cgPSAocGVyZm9ybWFuY2Uubm93KCkgKyBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlNikgLyAxZTYgKyAnICcgKyBzO1xuICB9IGVsc2Uge1xuICAgIG5vdyA9IChEYXRlLm5vdyA/IERhdGUubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTMpIC8gMWUzICsgJyAnICsgcztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pY3JvdGltZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmMoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZHMgb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkgd2hpY2ggaW4gdHVybiBkZXBlbmRzIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuYygnaXNOYU4nLCAnYScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgdmFyIGNhbGxVc2VyRnVuY0FycmF5ID0gcmVxdWlyZSgnLi4vZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknKTtcbiAgcGFyYW1ldGVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBjYWxsVXNlckZ1bmNBcnJheShjYiwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuY19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IFRoaWFnbyBNYXRhIChodHRwOi8vdGhpYWdvbWF0YS5ibG9nLmNvbSlcbiAgLy8gIHJldmlzZWQgYnk6IEpvbiBIb2hsZVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kaW5nIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYCBhbmQvb3IgYG5ldyBGdW5jdGlvbmAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWydhJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbMV0pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gIHZhciBmdW5jO1xuICB2YXIgc2NvcGUgPSBudWxsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICBpZiAodHlwZW9mIGNiID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZ1bmMgPSAkZ2xvYmFsW2NiXTtcbiAgICB9IGVsc2UgaWYgKGNiLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbihudWxsLCAncmV0dXJuICcgKyBjYikoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICAgIH1cbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2IpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgZnVuYyA9IGV2YWwoY2JbMF0gKyBcIlsnXCIgKyBjYlsxXSArIFwiJ11cIik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jID0gY2JbMF1bY2JbMV1dO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JbMF1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjb3BlID0gJGdsb2JhbFtjYlswXV07XG4gICAgICB9IGVsc2UgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBzY29wZSA9IGV2YWwoY2JbMF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF90eXBlb2YoY2JbMF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgc2NvcGUgPSBjYlswXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZnVuYyA9IGNiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGZ1bmMgKyAnIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gZnVuYy5hcHBseShzY29wZSwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmNfYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZV9mdW5jdGlvbihhcmdzLCBjb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jcmVhdGVfZnVuY3Rpb24vXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEpvaG5ueSBNYXN0IChodHRwOi8vd3d3LnBocHZyb3V3ZW4ubmwpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkZiA9IGNyZWF0ZV9mdW5jdGlvbignYSwgYicsICdyZXR1cm4gKGEgKyBiKScpXG4gIC8vICAgICAgICBleGFtcGxlIDE6ICRmKDEsIDIpXG4gIC8vICAgICAgICByZXR1cm5zIDE6IDNcblxuICB0cnkge1xuICAgIHJldHVybiBGdW5jdGlvbi5hcHBseShudWxsLCBhcmdzLnNwbGl0KCcsJykuY29uY2F0KGNvZGUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZV9mdW5jdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnVuY3Rpb25fZXhpc3RzKGZ1bmNOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZnVuY3Rpb25fZXhpc3RzL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFN0ZXZlIENsYXlcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBmdW5jdGlvbl9leGlzdHMoJ2lzRmluaXRlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgaWYgKHR5cGVvZiBmdW5jTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBmdW5jTmFtZSA9ICRnbG9iYWxbZnVuY05hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBmdW5jTmFtZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdW5jdGlvbl9leGlzdHMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaV9nZXQodmFybmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luaV9nZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIGluaSB2YWx1ZXMgbXVzdCBiZSBzZXQgYnkgaW5pX3NldCBvciBtYW51YWxseSB3aXRoaW4gYW4gaW5pIGZpbGVcbiAgLy8gICBleGFtcGxlIDE6IGluaV9zZXQoJ2RhdGUudGltZXpvbmUnLCAnQXNpYS9Ib25nX0tvbmcnKVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX2dldCgnZGF0ZS50aW1lem9uZScpXG4gIC8vICAgcmV0dXJucyAxOiAnQXNpYS9Ib25nX0tvbmcnXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcbiAgJGxvY3V0dXMucGhwLmluaSA9ICRsb2N1dHVzLnBocC5pbmkgfHwge307XG5cbiAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0gJiYgJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWU7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pX2dldC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21kNS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiBLZWVwIGluIG1pbmQgdGhhdCBpbiBhY2NvcmRhbmNlIHdpdGggUEhQLCB0aGUgd2hvbGUgc3RyaW5nIGlzIGJ1ZmZlcmVkIGFuZCB0aGVuXG4gIC8vICAgICAgbm90ZSAxOiBoYXNoZWQuIElmIGF2YWlsYWJsZSwgd2UnZCByZWNvbW1lbmQgdXNpbmcgTm9kZSdzIG5hdGl2ZSBjcnlwdG8gbW9kdWxlcyBkaXJlY3RseVxuICAvLyAgICAgIG5vdGUgMTogaW4gYSBzdGVhbWluZyBmYXNoaW9uIGZvciBmYXN0ZXIgYW5kIG1vcmUgZWZmaWNpZW50IGhhc2hpbmdcbiAgLy8gICBleGFtcGxlIDE6IG1kNSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnNmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjknXG5cbiAgdmFyIGhhc2g7XG4gIHRyeSB7XG4gICAgdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIHZhciBtZDVzdW0gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgbWQ1c3VtLnVwZGF0ZShzdHIpO1xuICAgIGhhc2ggPSBtZDVzdW0uZGlnZXN0KCdoZXgnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB2YXIgdXRmOEVuY29kZSA9IHJlcXVpcmUoJy4uL3htbC91dGY4X2VuY29kZScpO1xuICB2YXIgeGw7XG5cbiAgdmFyIF9yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gX3JvdGF0ZUxlZnQobFZhbHVlLCBpU2hpZnRCaXRzKSB7XG4gICAgcmV0dXJuIGxWYWx1ZSA8PCBpU2hpZnRCaXRzIHwgbFZhbHVlID4+PiAzMiAtIGlTaGlmdEJpdHM7XG4gIH07XG5cbiAgdmFyIF9hZGRVbnNpZ25lZCA9IGZ1bmN0aW9uIF9hZGRVbnNpZ25lZChsWCwgbFkpIHtcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0O1xuICAgIGxYOCA9IGxYICYgMHg4MDAwMDAwMDtcbiAgICBsWTggPSBsWSAmIDB4ODAwMDAwMDA7XG4gICAgbFg0ID0gbFggJiAweDQwMDAwMDAwO1xuICAgIGxZNCA9IGxZICYgMHg0MDAwMDAwMDtcbiAgICBsUmVzdWx0ID0gKGxYICYgMHgzRkZGRkZGRikgKyAobFkgJiAweDNGRkZGRkZGKTtcbiAgICBpZiAobFg0ICYgbFk0KSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgfVxuICAgIGlmIChsWDQgfCBsWTQpIHtcbiAgICAgIGlmIChsUmVzdWx0ICYgMHg0MDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX0YgPSBmdW5jdGlvbiBfRih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB5IHwgfnggJiB6O1xuICB9O1xuICB2YXIgX0cgPSBmdW5jdGlvbiBfRyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB6IHwgeSAmIH56O1xuICB9O1xuICB2YXIgX0ggPSBmdW5jdGlvbiBfSCh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfTtcbiAgdmFyIF9JID0gZnVuY3Rpb24gX0koeCwgeSwgeikge1xuICAgIHJldHVybiB5IF4gKHggfCB+eik7XG4gIH07XG5cbiAgdmFyIF9GRiA9IGZ1bmN0aW9uIF9GRihhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRihiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9HRyA9IGZ1bmN0aW9uIF9HRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRyhiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9ISCA9IGZ1bmN0aW9uIF9ISChhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSChiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9JSSA9IGZ1bmN0aW9uIF9JSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSShiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9jb252ZXJ0VG9Xb3JkQXJyYXkgPSBmdW5jdGlvbiBfY29udmVydFRvV29yZEFycmF5KHN0cikge1xuICAgIHZhciBsV29yZENvdW50O1xuICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDIgPSAobE51bWJlck9mV29yZHNUZW1wMSAtIGxOdW1iZXJPZldvcmRzVGVtcDEgJSA2NCkgLyA2NDtcbiAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNUZW1wMiArIDEpICogMTY7XG4gICAgdmFyIGxXb3JkQXJyYXkgPSBuZXcgQXJyYXkobE51bWJlck9mV29yZHMgLSAxKTtcbiAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGxCeXRlQ291bnQgPSAwO1xuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCBzdHIuY2hhckNvZGVBdChsQnl0ZUNvdW50KSA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgICAgbEJ5dGVDb3VudCsrO1xuICAgIH1cbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAweDgwIDw8IGxCeXRlUG9zaXRpb247XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XG4gICAgcmV0dXJuIGxXb3JkQXJyYXk7XG4gIH07XG5cbiAgdmFyIF93b3JkVG9IZXggPSBmdW5jdGlvbiBfd29yZFRvSGV4KGxWYWx1ZSkge1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZSA9ICcnO1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnJztcbiAgICB2YXIgbEJ5dGU7XG4gICAgdmFyIGxDb3VudDtcblxuICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XG4gICAgICBsQnl0ZSA9IGxWYWx1ZSA+Pj4gbENvdW50ICogOCAmIDI1NTtcbiAgICAgIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcwJyArIGxCeXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgIHdvcmRUb0hleFZhbHVlID0gd29yZFRvSGV4VmFsdWUgKyB3b3JkVG9IZXhWYWx1ZVRlbXAuc3Vic3RyKHdvcmRUb0hleFZhbHVlVGVtcC5sZW5ndGggLSAyLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRUb0hleFZhbHVlO1xuICB9O1xuXG4gIHZhciB4ID0gW107XG4gIHZhciBrO1xuICB2YXIgQUE7XG4gIHZhciBCQjtcbiAgdmFyIENDO1xuICB2YXIgREQ7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgUzExID0gNztcbiAgdmFyIFMxMiA9IDEyO1xuICB2YXIgUzEzID0gMTc7XG4gIHZhciBTMTQgPSAyMjtcbiAgdmFyIFMyMSA9IDU7XG4gIHZhciBTMjIgPSA5O1xuICB2YXIgUzIzID0gMTQ7XG4gIHZhciBTMjQgPSAyMDtcbiAgdmFyIFMzMSA9IDQ7XG4gIHZhciBTMzIgPSAxMTtcbiAgdmFyIFMzMyA9IDE2O1xuICB2YXIgUzM0ID0gMjM7XG4gIHZhciBTNDEgPSA2O1xuICB2YXIgUzQyID0gMTA7XG4gIHZhciBTNDMgPSAxNTtcbiAgdmFyIFM0NCA9IDIxO1xuXG4gIHN0ciA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgeCA9IF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKTtcbiAgYSA9IDB4Njc0NTIzMDE7XG4gIGIgPSAweEVGQ0RBQjg5O1xuICBjID0gMHg5OEJBRENGRTtcbiAgZCA9IDB4MTAzMjU0NzY7XG5cbiAgeGwgPSB4Lmxlbmd0aDtcbiAgZm9yIChrID0gMDsgayA8IHhsOyBrICs9IDE2KSB7XG4gICAgQUEgPSBhO1xuICAgIEJCID0gYjtcbiAgICBDQyA9IGM7XG4gICAgREQgPSBkO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxXSwgUzEyLCAweEU4QzdCNzU2KTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzExLCAweEY1N0MwRkFGKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyA3XSwgUzE0LCAweEZENDY5NTAxKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFMxMywgMHhGRkZGNUJCMSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxM10sIFMxMiwgMHhGRDk4NzE5Myk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzIxLCAweEY2MUUyNTYyKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMF0sIFMyNCwgMHhFOUI2QzdBQSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMjMsIDB4RDhBMUU2ODEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgQUEpO1xuICAgIGIgPSBfYWRkVW5zaWduZWQoYiwgQkIpO1xuICAgIGMgPSBfYWRkVW5zaWduZWQoYywgQ0MpO1xuICAgIGQgPSBfYWRkVW5zaWduZWQoZCwgREQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBfd29yZFRvSGV4KGEpICsgX3dvcmRUb0hleChiKSArIF93b3JkVG9IZXgoYykgKyBfd29yZFRvSGV4KGQpO1xuXG4gIHJldHVybiB0ZW1wLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV9zdHIoc3RyLCBhcnJheSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2Vfc3RyL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBDYWdyaSBFa2luXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogc3RhZzAxOVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogWmFpZGUgKGh0dHA6Ly96YWlkZXN0aGluZ3MuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogRGF2aWQgUGVzdGEgKGh0dHA6Ly9kYXZpZHBlc3RhLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGplaWNxdWVzdFxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWQsIHdpbGwgcHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUuXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gYSBwYXJ0aWN1bGFyIGFyZ3VtZW50IGhhcyBiZWVuIHBhc3NlZCwgYW5kIHRoZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiByZXR1cm5lZCB2YWx1ZSBpcyBkaWZmZXJlbnQgcGFyc2Vfc3RyIG9mIFBIUC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogRm9yIGV4YW1wbGUsIGE9Yj1jJmQ9PT09Y1xuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3N0cignZmlyc3Q9Zm9vJnNlY29uZD1iYXInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMTogeyBmaXJzdDogJ2ZvbycsIHNlY29uZDogJ2JhcicgfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3N0cignc3RyX2E9SmFjaythbmQrSmlsbCtkaWRuJTI3dCtzZWUrdGhlK3dlbGwuJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHsgc3RyX2E6IFwiSmFjayBhbmQgSmlsbCBkaWRuJ3Qgc2VlIHRoZSB3ZWxsLlwiIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRhYmMgPSB7MzonYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3N0cignYVtiXVtcImNcIl09ZGVmJmFbcV09dCs1JywgJGFiYylcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkYWJjXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtcIjNcIjpcImFcIixcImFcIjp7XCJiXCI6e1wiY1wiOlwiZGVmXCJ9LFwicVwiOlwidCA1XCJ9fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3N0cignYVtdW109dmFsdWUnLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNDoge1wiYVwiOntcIjBcIjp7XCIwXCI6XCJ2YWx1ZVwifX19XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogcGFyc2Vfc3RyKCdhPTEmYVtdPTInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNToge1wiYVwiOntcIjBcIjpcIjJcIn19XG5cbiAgdmFyIHN0ckFyciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL14mLywgJycpLnJlcGxhY2UoLyYkLywgJycpLnNwbGl0KCcmJyk7XG4gIHZhciBzYWwgPSBzdHJBcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBjdDtcbiAgdmFyIHA7XG4gIHZhciBsYXN0T2JqO1xuICB2YXIgb2JqO1xuICB2YXIgY2hyO1xuICB2YXIgdG1wO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBwb3N0TGVmdEJyYWNrZXRQb3M7XG4gIHZhciBrZXlzO1xuICB2YXIga2V5c0xlbjtcblxuICB2YXIgX2ZpeFN0ciA9IGZ1bmN0aW9uIF9maXhTdHIoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gIH07XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgYXJyYXkgPSAkZ2xvYmFsO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNhbDsgaSsrKSB7XG4gICAgdG1wID0gc3RyQXJyW2ldLnNwbGl0KCc9Jyk7XG4gICAga2V5ID0gX2ZpeFN0cih0bXBbMF0pO1xuICAgIHZhbHVlID0gdG1wLmxlbmd0aCA8IDIgPyAnJyA6IF9maXhTdHIodG1wWzFdKTtcblxuICAgIHdoaWxlIChrZXkuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJ1xceDAwJykgPiAtMSkge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCdcXHgwMCcpKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICYmIGtleS5jaGFyQXQoMCkgIT09ICdbJykge1xuICAgICAga2V5cyA9IFtdO1xuICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ1snICYmICFwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSBqICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY2hhckF0KGopID09PSAnXScpIHtcbiAgICAgICAgICBpZiAocG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc2xpY2UoMCwgcG9zdExlZnRCcmFja2V0UG9zIC0gMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cihwb3N0TGVmdEJyYWNrZXRQb3MsIGogLSBwb3N0TGVmdEJyYWNrZXRQb3MpKTtcbiAgICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGogKyAxKSAhPT0gJ1snKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleXNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY2hyID0ga2V5c1swXS5jaGFyQXQoaik7XG5cbiAgICAgICAgaWYgKGNociA9PT0gJyAnIHx8IGNociA9PT0gJy4nIHx8IGNociA9PT0gJ1snKSB7XG4gICAgICAgICAga2V5c1swXSA9IGtleXNbMF0uc3Vic3RyKDAsIGopICsgJ18nICsga2V5c1swXS5zdWJzdHIoaiArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNociA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqID0gYXJyYXk7XG5cbiAgICAgIGZvciAoaiA9IDAsIGtleXNMZW4gPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW47IGorKykge1xuICAgICAgICBrZXkgPSBrZXlzW2pdLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgICAgIGxhc3RPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKChrZXkgPT09ICcnIHx8IGtleSA9PT0gJyAnKSAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgLy8gSW5zZXJ0IG5ldyBkaW1lbnNpb25cbiAgICAgICAgICBjdCA9IC0xO1xuXG4gICAgICAgICAgZm9yIChwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICBpZiAoK3AgPiBjdCAmJiBwLm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgICAgICAgICAgICBjdCA9ICtwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gY3QgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJpbWl0aXZlIHZhbHVlLCByZXBsYWNlIHdpdGggb2JqZWN0XG4gICAgICAgIGlmIChPYmplY3Qob2JqW2tleV0pICE9PSBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGFzdE9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vfc3RyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBydHJpbShzdHIsIGNoYXJsaXN0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcnRyaW0vXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogRXJrZWtqZXR0ZXJcbiAgLy8gICAgaW5wdXQgYnk6IHJlbVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBydHJpbSgnICAgIEtldmluIHZhbiBab25uZXZlbGQgICAgJylcbiAgLy8gICByZXR1cm5zIDE6ICcgICAgS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICBjaGFybGlzdCA9ICFjaGFybGlzdCA/ICcgXFxcXHNcXHhBMCcgOiAoY2hhcmxpc3QgKyAnJykucmVwbGFjZSgvKFtbXFxdKCkuPy8qe30rJF46XSkvZywgJ1xcXFwkMScpO1xuXG4gIHZhciByZSA9IG5ldyBSZWdFeHAoJ1snICsgY2hhcmxpc3QgKyAnXSskJywgJ2cnKTtcblxuICByZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKHJlLCAnJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnRyaW0uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cnBvcyhoYXlzdGFjaywgbmVlZGxlLCBvZmZzZXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJwb3MvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IERhbmllbCBFc3RlYmFuXG4gIC8vICAgZXhhbXBsZSAxOiBzdHJwb3MoJ0tldmluIHZhbiBab25uZXZlbGQnLCAnZScsIDUpXG4gIC8vICAgcmV0dXJucyAxOiAxNFxuXG4gIHZhciBpID0gKGhheXN0YWNrICsgJycpLmluZGV4T2YobmVlZGxlLCBvZmZzZXQgfHwgMCk7XG4gIHJldHVybiBpID09PSAtMSA/IGZhbHNlIDogaTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJwb3MuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9kZWNvZGUoZW5jb2RlZERhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZGVjb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEFtYW4gR3VwdGFcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZGVjb2RlKCdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09JylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2RlY29kZSgnWVE9PScpXG4gIC8vICAgcmV0dXJucyAyOiAnYSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9kZWNvZGUoJzRweVRJTU9nSUd4aElHMXZaR1U9JylcbiAgLy8gICByZXR1cm5zIDM6ICfinJMgw6AgbGEgbW9kZSdcblxuICAvLyBkZWNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZGVjb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGRlY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBkZWNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hdG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcod2luZG93LmF0b2IoZW5jb2RlZERhdGEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5jb2RlZERhdGEsICdiYXNlNjQnKS50b1N0cmluZygndXRmLTgnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBkZWMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlZERhdGE7XG4gIH1cblxuICBlbmNvZGVkRGF0YSArPSAnJztcblxuICBkbyB7XG4gICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcbiAgICBoMSA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMiA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMyA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoNCA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcblxuICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuXG4gICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcbiAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XG4gICAgbzMgPSBiaXRzICYgMHhmZjtcblxuICAgIGlmIChoMyA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xuICAgIH0gZWxzZSBpZiAoaDQgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgZW5jb2RlZERhdGEubGVuZ3RoKTtcblxuICBkZWMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZW5jb2RlKHN0cmluZ1RvRW5jb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJheXJvbiBHdWV2YXJhXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PSdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9lbmNvZGUoJ2EnKVxuICAvLyAgIHJldHVybnMgMjogJ1lRPT0nXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZW5jb2RlKCfinJMgw6AgbGEgbW9kZScpXG4gIC8vICAgcmV0dXJucyAzOiAnNHB5VElNT2dJR3hoSUcxdlpHVT0nXG5cbiAgLy8gZW5jb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGVuY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBlbmNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZW5jb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBmaXJzdCB3ZSB1c2UgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGdldCBwZXJjZW50LWVuY29kZWQgVVRGLTgsXG4gICAgLy8gdGhlbiB3ZSBjb252ZXJ0IHRoZSBwZXJjZW50IGVuY29kaW5ncyBpbnRvIHJhdyBieXRlcyB3aGljaFxuICAgIC8vIGNhbiBiZSBmZWQgaW50byB0aGUgYmFzZTY0IGVuY29kaW5nIGFsZ29yaXRobS5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5idG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nVG9FbmNvZGUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBlbmMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghc3RyaW5nVG9FbmNvZGUpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9FbmNvZGU7XG4gIH1cblxuICBzdHJpbmdUb0VuY29kZSA9IGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpO1xuXG4gIGRvIHtcbiAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXG4gICAgbzEgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzIgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzMgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICBiaXRzID0gbzEgPDwgMTYgfCBvMiA8PCA4IHwgbzM7XG5cbiAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xuICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XG4gICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xuICAgIGg0ID0gYml0cyAmIDB4M2Y7XG5cbiAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xuICAgIHRtcEFyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xuICB9IHdoaWxlIChpIDwgc3RyaW5nVG9FbmNvZGUubGVuZ3RoKTtcblxuICBlbmMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgdmFyIHIgPSBzdHJpbmdUb0VuY29kZS5sZW5ndGggJSAzO1xuXG4gIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0dHBfYnVpbGRfcXVlcnkoZm9ybWRhdGEsIG51bWVyaWNQcmVmaXgsIGFyZ1NlcGFyYXRvciwgZW5jVHlwZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2h0dHBfYnVpbGRfcXVlcnkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gIHJldmlzZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogV2lsbCBSb3dlXG4gIC8vICAgICAgbm90ZSAxOiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwga2V5IGFuZCB2YWx1ZSBhcmUgc2tpcHBlZCBpbiB0aGVcbiAgLy8gICAgICBub3RlIDE6IGh0dHBfYnVpbGRfcXVlcnkgb2YgUEhQIHdoaWxlIGluIGxvY3V0dXMgdGhleSBhcmUgbm90LlxuICAvLyAgIGV4YW1wbGUgMTogaHR0cF9idWlsZF9xdWVyeSh7Zm9vOiAnYmFyJywgcGhwOiAnaHlwZXJ0ZXh0IHByb2Nlc3NvcicsIGJhejogJ2Jvb20nLCBjb3c6ICdtaWxrJ30sICcnLCAnJmFtcDsnKVxuICAvLyAgIHJldHVybnMgMTogJ2Zvbz1iYXImYW1wO3BocD1oeXBlcnRleHQrcHJvY2Vzc29yJmFtcDtiYXo9Ym9vbSZhbXA7Y293PW1pbGsnXG4gIC8vICAgZXhhbXBsZSAyOiBodHRwX2J1aWxkX3F1ZXJ5KHsncGhwJzogJ2h5cGVydGV4dCBwcm9jZXNzb3InLCAwOiAnZm9vJywgMTogJ2JhcicsIDI6ICdiYXonLCAzOiAnYm9vbScsICdjb3cnOiAnbWlsayd9LCAnbXl2YXJfJylcbiAgLy8gICByZXR1cm5zIDI6ICdteXZhcl8wPWZvbyZteXZhcl8xPWJhciZteXZhcl8yPWJheiZteXZhcl8zPWJvb20mcGhwPWh5cGVydGV4dCtwcm9jZXNzb3ImY293PW1pbGsnXG4gIC8vICAgZXhhbXBsZSAzOiBodHRwX2J1aWxkX3F1ZXJ5KHtmb286ICdiYXInLCBwaHA6ICdoeXBlcnRleHQgcHJvY2Vzc29yJywgYmF6OiAnYm9vbScsIGNvdzogJ21pbGsnfSwgJycsICcmYW1wOycsICdQSFBfUVVFUllfUkZDMzk4NicpXG4gIC8vICAgcmV0dXJucyAzOiAnZm9vPWJhciZhbXA7cGhwPWh5cGVydGV4dCUyMHByb2Nlc3NvciZhbXA7YmF6PWJvb20mYW1wO2Nvdz1taWxrJ1xuXG4gIHZhciBlbmNvZGVGdW5jO1xuXG4gIHN3aXRjaCAoZW5jVHlwZSkge1xuICAgIGNhc2UgJ1BIUF9RVUVSWV9SRkMzOTg2JzpcbiAgICAgIGVuY29kZUZ1bmMgPSByZXF1aXJlKCcuLi91cmwvcmF3dXJsZW5jb2RlJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BIUF9RVUVSWV9SRkMxNzM4JzpcbiAgICBkZWZhdWx0OlxuICAgICAgZW5jb2RlRnVuYyA9IHJlcXVpcmUoJy4uL3VybC91cmxlbmNvZGUnKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIHZhbHVlO1xuICB2YXIga2V5O1xuICB2YXIgdG1wID0gW107XG5cbiAgdmFyIF9odHRwQnVpbGRRdWVyeUhlbHBlciA9IGZ1bmN0aW9uIF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXksIHZhbCwgYXJnU2VwYXJhdG9yKSB7XG4gICAgdmFyIGs7XG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgIHZhbCA9ICcxJztcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gZmFsc2UpIHtcbiAgICAgIHZhbCA9ICcwJztcbiAgICB9XG4gICAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgICAgaWYgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChrIGluIHZhbCkge1xuICAgICAgICAgIGlmICh2YWxba10gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXkgKyAnWycgKyBrICsgJ10nLCB2YWxba10sIGFyZ1NlcGFyYXRvcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wLmpvaW4oYXJnU2VwYXJhdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZW5jb2RlRnVuYyhrZXkpICsgJz0nICsgZW5jb2RlRnVuYyh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcHJvY2Vzc2luZyBmb3IgaHR0cF9idWlsZF9xdWVyeSgpLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIGlmICghYXJnU2VwYXJhdG9yKSB7XG4gICAgYXJnU2VwYXJhdG9yID0gJyYnO1xuICB9XG4gIGZvciAoa2V5IGluIGZvcm1kYXRhKSB7XG4gICAgdmFsdWUgPSBmb3JtZGF0YVtrZXldO1xuICAgIGlmIChudW1lcmljUHJlZml4ICYmICFpc05hTihrZXkpKSB7XG4gICAgICBrZXkgPSBTdHJpbmcobnVtZXJpY1ByZWZpeCkgKyBrZXk7XG4gICAgfVxuICAgIHZhciBxdWVyeSA9IF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXksIHZhbHVlLCBhcmdTZXBhcmF0b3IpO1xuICAgIGlmIChxdWVyeSAhPT0gJycpIHtcbiAgICAgIHRtcC5wdXNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wLmpvaW4oYXJnU2VwYXJhdG9yKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwX2J1aWxkX3F1ZXJ5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV91cmwoc3RyLCBjb21wb25lbnQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3VybC9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogU3RldmVuIExldml0aGFuIChodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IExvcmVuem8gUGlzYW5pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFRvbnlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogb3JpZ2luYWwgYnkgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBibG9nIHBvc3QgYXQgaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXG4gIC8vICAgICAgICAgICBub3RlIDE6IGRlbW8gYXQgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBEb2VzIG5vdCByZXBsYWNlIGludmFsaWQgY2hhcmFjdGVycyB3aXRoICdfJyBhcyBpbiBQSFAsXG4gIC8vICAgICAgICAgICBub3RlIDE6IG5vciBkb2VzIGl0IHJldHVybiBmYWxzZSB3aXRoXG4gIC8vICAgICAgICAgICBub3RlIDE6IGEgc2VyaW91c2x5IG1hbGZvcm1lZCBVUkwuXG4gIC8vICAgICAgICAgICBub3RlIDE6IEJlc2lkZXMgZnVuY3Rpb24gbmFtZSwgaXMgZXNzZW50aWFsbHkgdGhlIHNhbWUgYXMgcGFyc2VVcmkgYXNcbiAgLy8gICAgICAgICAgIG5vdGUgMTogd2VsbCBhcyBvdXIgYWxsb3dpbmdcbiAgLy8gICAgICAgICAgIG5vdGUgMTogYW4gZXh0cmEgc2xhc2ggYWZ0ZXIgdGhlIHNjaGVtZS9wcm90b2NvbCAodG8gYWxsb3cgZmlsZTovLy8gYXMgaW4gUEhQKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV91cmwoJ2h0dHA6Ly91c2VyOnBhc3NAaG9zdC9wYXRoP2E9diNhJylcbiAgLy8gICAgICAgIHJldHVybnMgMToge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnaG9zdCcsIHVzZXI6ICd1c2VyJywgcGFzczogJ3Bhc3MnLCBwYXRoOiAnL3BhdGgnLCBxdWVyeTogJ2E9dicsIGZyYWdtZW50OiAnYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3VybCgnaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5JylcbiAgLy8gICAgICAgIHJldHVybnMgMjoge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnZW4ud2lraXBlZGlhLm9yZycsIHBhdGg6ICcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5J31cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcGFyc2VfdXJsKCdodHRwczovL2hvc3QuZG9tYWluLnRsZC9hQGIuYy9mb2xkZXInKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiB7c2NoZW1lOiAnaHR0cHMnLCBob3N0OiAnaG9zdC5kb21haW4udGxkJywgcGF0aDogJy9hQGIuYy9mb2xkZXInfVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV91cmwoJ2h0dHBzOi8vZ29vZHVzZXI6c2VjcmV0cGFzc3dvcmRAd3d3LmV4YW1wbGUuY29tL2FAYi5jL2ZvbGRlcj9mb289YmFyJylcbiAgLy8gICAgICAgIHJldHVybnMgNDogeyBzY2hlbWU6ICdodHRwcycsIGhvc3Q6ICd3d3cuZXhhbXBsZS5jb20nLCBwYXRoOiAnL2FAYi5jL2ZvbGRlcicsIHF1ZXJ5OiAnZm9vPWJhcicsIHVzZXI6ICdnb29kdXNlcicsIHBhc3M6ICdzZWNyZXRwYXNzd29yZCcgfVxuXG4gIHZhciBxdWVyeTtcblxuICB2YXIgbW9kZSA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5wYXJzZV91cmwubW9kZScpIDogdW5kZWZpbmVkKSB8fCAncGhwJztcblxuICB2YXIga2V5ID0gWydzb3VyY2UnLCAnc2NoZW1lJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3MnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnZnJhZ21lbnQnXTtcblxuICAvLyBGb3IgbG9vc2Ugd2UgYWRkZWQgb25lIG9wdGlvbmFsIHNsYXNoIHRvIHBvc3Qtc2NoZW1lIHRvIGNhdGNoIGZpbGU6Ly8vIChzaG91bGQgcmVzdHJpY3QgdGhpcylcbiAgdmFyIHBhcnNlciA9IHtcbiAgICBwaHA6IG5ldyBSZWdFeHAoWycoPzooW146XFxcXC8/I10rKTopPycsICcoPzpcXFxcL1xcXFwvKCkoPzooPzooKSg/OihbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLCAnKCknLCAnKD86KCgpKD86KD86W14/I1xcXFwvXSpcXFxcLykqKSgpKD86W14/I10qKSkoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ10uam9pbignJykpLFxuICAgIHN0cmljdDogbmV3IFJlZ0V4cChbJyg/OihbXjpcXFxcLz8jXSspOik/JywgJyg/OlxcXFwvXFxcXC8oKD86KChbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLCAnKCgoKD86W14/I1xcXFwvXSpcXFxcLykqKShbXj8jXSopKSg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSksXG4gICAgbG9vc2U6IG5ldyBSZWdFeHAoWycoPzooPyFbXjpAXSs6W146QFxcXFwvXSpAKShbXjpcXFxcLz8jLl0rKTopPycsICcoPzpcXFxcL1xcXFwvXFxcXC8/KT8nLCAnKCg/OigoW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KScsICcoKChcXFxcLyg/OltePyNdKD8hW14/I1xcXFwvXSpcXFxcLltePyNcXFxcLy5dKyg/Ols/I118JCkpKSpcXFxcLz8pPyhbXj8jXFxcXC9dKikpJywgJyg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSlcbiAgfTtcblxuICB2YXIgbSA9IHBhcnNlclttb2RlXS5leGVjKHN0cik7XG4gIHZhciB1cmkgPSB7fTtcbiAgdmFyIGkgPSAxNDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKG1baV0pIHtcbiAgICAgIHVyaVtrZXlbaV1dID0gbVtpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHVyaVtjb21wb25lbnQucmVwbGFjZSgnUEhQX1VSTF8nLCAnJykudG9Mb3dlckNhc2UoKV07XG4gIH1cblxuICBpZiAobW9kZSAhPT0gJ3BocCcpIHtcbiAgICB2YXIgbmFtZSA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5wYXJzZV91cmwucXVlcnlLZXknKSA6IHVuZGVmaW5lZCkgfHwgJ3F1ZXJ5S2V5JztcbiAgICBwYXJzZXIgPSAvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2c7XG4gICAgdXJpW25hbWVdID0ge307XG4gICAgcXVlcnkgPSB1cmlba2V5WzEyXV0gfHwgJyc7XG4gICAgcXVlcnkucmVwbGFjZShwYXJzZXIsIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG4gICAgICBpZiAoJDEpIHtcbiAgICAgICAgdXJpW25hbWVdWyQxXSA9ICQyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIHVyaS5zb3VyY2U7XG4gIHJldHVybiB1cmk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2VfdXJsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByYXd1cmxkZWNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9yYXd1cmxkZWNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGxvdmlvXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyB0byBkZWNvZGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogZnJvbSBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiByYXd1cmxkZWNvZGUoJ0tldmluK3Zhbitab25uZXZlbGQlMjEnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAnS2V2aW4rdmFuK1pvbm5ldmVsZCEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHJhd3VybGRlY29kZSgnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRicpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwOi8va3Z6LmlvLydcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcmF3dXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0QnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT0nXG5cbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCgoc3RyICsgJycpLnJlcGxhY2UoLyUoPyFbXFxkYS1mXXsyfSkvZ2ksIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQSFAgdG9sZXJhdGVzIHBvb3JseSBmb3JtZWQgZXNjYXBlIHNlcXVlbmNlc1xuICAgIHJldHVybiAnJTI1JztcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhd3VybGRlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmF3dXJsZW5jb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcmF3dXJsZW5jb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBNaWNoYWVsIEdyaWVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEpvcmlzXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFRoaXMgcmVmbGVjdHMgUEhQIDUuMy82LjArIGJlaGF2aW9yXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyBcXFxuICAvLyAgICAgICAgICAgbm90ZSAxOiB0byBlbmNvZGUgaW50byBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiByYXd1cmxlbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQhJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluJTIwdmFuJTIwWm9ubmV2ZWxkJTIxJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiByYXd1cmxlbmNvZGUoJ2h0dHA6Ly9rdnouaW8vJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHJhd3VybGVuY29kZSgnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCcpXG4gIC8vICAgICAgICByZXR1cm5zIDM6ICdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0R1dGYtOCdcblxuICBzdHIgPSBzdHIgKyAnJztcblxuICAvLyBUaWxkZSBzaG91bGQgYmUgYWxsb3dlZCB1bmVzY2FwZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBIUCAoYXMgcmVmbGVjdGVkIGJlbG93KSxcbiAgLy8gYnV0IGlmIHlvdSB3YW50IHRvIHJlZmxlY3QgY3VycmVudFxuICAvLyBQSFAgYmVoYXZpb3IsIHlvdSB3b3VsZCBuZWVkIHRvIGFkZCBcIi5yZXBsYWNlKC9+L2csICclN0UnKTtcIiB0byB0aGUgZm9sbG93aW5nLlxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvIS9nLCAnJTIxJykucmVwbGFjZSgvJy9nLCAnJTI3JykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoL1xcKi9nLCAnJTJBJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmF3dXJsZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1cmxkZWNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91cmxkZWNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBMYXJzIEZpc2NoZXJcbiAgLy8gICAgICBpbXByb3ZlZCBieTogT3JsYW5kb1xuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBBSlxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBlLW1pa2VcbiAgLy8gICAgICAgICBpbnB1dCBieTogbG92aW9cbiAgLy8gICAgICBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBidWdmaXhlZCBieTogUm9iXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IGluZm8gb24gd2hhdCBlbmNvZGluZyBmdW5jdGlvbnMgdG8gdXNlIGZyb206XG4gIC8vICAgICAgICAgICBub3RlIDE6IGh0dHA6Ly94a3IudXMvYXJ0aWNsZXMvamF2YXNjcmlwdC9lbmNvZGUtY29tcGFyZS9cbiAgLy8gICAgICAgICAgIG5vdGUgMTogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhpcyBmdW5jdGlvbiBleHBlY3RzIHRvIGRlY29kZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBmcm9tIFVURi04IGVuY29kZWQgc3RyaW5ncywgYXMgZm91bmQgb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogcGFnZXMgc2VydmVkIGFzIFVURi04XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHVybGRlY29kZSgnS2V2aW4rdmFuK1pvbm5ldmVsZCUyMScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkISdcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGa3Z6LmlvJTJGJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHA6Ly9rdnouaW8vJ1xuICAvLyAgICAgICAgZXhhbXBsZSAzOiB1cmxkZWNvZGUoJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04JTI2b2UlM0R1dGYtOCUyNmFxJTNEdCUyNnJscyUzRGNvbS51YnVudHUlM0Flbi1VUyUzQXVub2ZmaWNpYWwlMjZjbGllbnQlM0RmaXJlZm94LWEnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCZvZT11dGYtOCZhcT10JnJscz1jb20udWJ1bnR1OmVuLVVTOnVub2ZmaWNpYWwmY2xpZW50PWZpcmVmb3gtYSdcbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdXJsZGVjb2RlKCclRTUlQTUlQkQlM180JylcbiAgLy8gICAgICAgIHJldHVybnMgNDogJ1xcdTU5N2QlM180J1xuXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHN0ciArICcnKS5yZXBsYWNlKC8lKD8hW1xcZGEtZl17Mn0pL2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUEhQIHRvbGVyYXRlcyBwb29ybHkgZm9ybWVkIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICByZXR1cm4gJyUyNSc7XG4gIH0pLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybGRlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJsZW5jb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXJsZW5jb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBQaGlsaXAgUGV0ZXJzb25cbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogTGFycyBGaXNjaGVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEFKXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEpvcmlzXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFRoaXMgcmVmbGVjdHMgUEhQIDUuMy82LjArIGJlaGF2aW9yXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogZXhwZWN0cyB0byBlbmNvZGUgaW50byBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB1cmxlbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQhJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluK3Zhbitab25uZXZlbGQlMjEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHVybGVuY29kZSgnaHR0cDovL2t2ei5pby8nKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiAnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRidcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdXJsZW5jb2RlKCdodHRwOi8vd3d3Lmdvb2dsZS5ubC9zZWFyY2g/cT1Mb2N1dHVzJmllPXV0Zi04JylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04J1xuXG4gIHN0ciA9IHN0ciArICcnO1xuXG4gIC8vIFRpbGRlIHNob3VsZCBiZSBhbGxvd2VkIHVuZXNjYXBlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUEhQIChhcyByZWZsZWN0ZWQgYmVsb3cpLFxuICAvLyBidXQgaWYgeW91IHdhbnQgdG8gcmVmbGVjdCBjdXJyZW50XG4gIC8vIFBIUCBiZWhhdmlvciwgeW91IHdvdWxkIG5lZWQgdG8gYWRkIFwiLnJlcGxhY2UoL34vZywgJyU3RScpO1wiIHRvIHRoZSBmb2xsb3dpbmcuXG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8hL2csICclMjEnKS5yZXBsYWNlKC8nL2csICclMjcnKS5yZXBsYWNlKC9cXCgvZywgJyUyOCcpLnJlcGxhY2UoL1xcKS9nLCAnJTI5JykucmVwbGFjZSgvXFwqL2csICclMkEnKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmxlbmNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfY2FsbGFibGUobWl4ZWRWYXIsIHN5bnRheE9ubHksIGNhbGxhYmxlTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2NhbGxhYmxlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IEZyYW7Dp29pc1xuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSB2YXJpYWJsZSBjYWxsYWJsZU5hbWUgY2Fubm90IHdvcmsgYXMgYSBzdHJpbmcgdmFyaWFibGUgcGFzc2VkIGJ5XG4gIC8vICAgICAgbm90ZSAxOiByZWZlcmVuY2UgYXMgaW4gUEhQIChzaW5jZSBKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZ1xuICAvLyAgICAgIG5vdGUgMTogc3RyaW5ncyBieSByZWZlcmVuY2UpLCBidXQgaW5zdGVhZCB3aWxsIHRha2UgdGhlIG5hbWUgb2ZcbiAgLy8gICAgICBub3RlIDE6IGEgZ2xvYmFsIHZhcmlhYmxlIGFuZCBzZXQgdGhhdCBpbnN0ZWFkLlxuICAvLyAgICAgIG5vdGUgMTogV2hlbiB1c2VkIG9uIGFuIG9iamVjdCwgZGVwZW5kcyBvbiBhIGNvbnN0cnVjdG9yIHByb3BlcnR5XG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyBrZXB0IG9uIHRoZSBvYmplY3QgcHJvdG90eXBlXG4gIC8vICAgICAgbm90ZSAyOiBEZXBlbmRpbmcgb24gdGhlIGBjYWxsYWJsZU5hbWVgIHRoYXQgaXMgcGFzc2VkLCB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgZXZhbC5cbiAgLy8gICAgICBub3RlIDI6IFRoZSBldmFsIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMjogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMjogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogaXNfY2FsbGFibGUoJ2lzX2NhbGxhYmxlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2NhbGxhYmxlKCdib2d1c0Z1bmN0aW9uJywgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWUgLy8gZ2l2ZXMgdHJ1ZSBiZWNhdXNlIGRvZXMgbm90IGRvIHN0cmljdCBjaGVja2luZ1xuICAvLyAgIGV4YW1wbGUgMzogZnVuY3Rpb24gU29tZUNsYXNzICgpIHt9XG4gIC8vICAgZXhhbXBsZSAzOiBTb21lQ2xhc3MucHJvdG90eXBlLnNvbWVNZXRob2QgPSBmdW5jdGlvbiAoKXt9XG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgdGVzdE9iaiA9IG5ldyBTb21lQ2xhc3MoKVxuICAvLyAgIGV4YW1wbGUgMzogaXNfY2FsbGFibGUoW3Rlc3RPYmosICdzb21lTWV0aG9kJ10sIHRydWUsICdteVZhcicpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9IG15VmFyXG4gIC8vICAgcmV0dXJucyAzOiAnU29tZUNsYXNzOjpzb21lTWV0aG9kJ1xuICAvLyAgIGV4YW1wbGUgNDogaXNfY2FsbGFibGUoZnVuY3Rpb24gKCkge30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgbWV0aG9kID0gJyc7XG4gIHZhciB2YWxpZEZ1bmN0aW9uTmFtZSA9IGZhbHNlO1xuXG4gIHZhciBnZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIGdldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gJGdsb2JhbDtcbiAgICBtZXRob2QgPSBtaXhlZFZhcjtcbiAgICBuYW1lID0gbWl4ZWRWYXI7XG4gICAgdmFsaWRGdW5jdGlvbk5hbWUgPSAhIW5hbWUubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAyICYmIF90eXBlb2YobWl4ZWRWYXJbMF0pID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbWl4ZWRWYXJbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gbWl4ZWRWYXJbMF07XG4gICAgbWV0aG9kID0gbWl4ZWRWYXJbMV07XG4gICAgbmFtZSA9IChvYmouY29uc3RydWN0b3IgJiYgZ2V0RnVuY05hbWUob2JqLmNvbnN0cnVjdG9yKSkgKyAnOjonICsgbWV0aG9kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzeW50YXhPbmx5IHx8IHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdmFsaWRGdW5jdGlvbk5hbWUgYXZvaWRzIGV4cGxvaXRzXG4gIGlmICh2YWxpZEZ1bmN0aW9uTmFtZSAmJiB0eXBlb2YgZXZhbChtZXRob2QpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfY2FsbGFibGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHV0ZjhfZW5jb2RlKGFyZ1N0cmluZykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3V0ZjhfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc293YmVycnlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IFl2ZXMgU3VjYWV0XG4gIC8vIGltcHJvdmVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFVscmljaFxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyAgIGV4YW1wbGUgMTogdXRmOF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgaWYgKGFyZ1N0cmluZyA9PT0gbnVsbCB8fCB0eXBlb2YgYXJnU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIC5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpO1xuICB2YXIgc3RyaW5nID0gYXJnU3RyaW5nICsgJyc7XG4gIHZhciB1dGZ0ZXh0ID0gJyc7XG4gIHZhciBzdGFydDtcbiAgdmFyIGVuZDtcbiAgdmFyIHN0cmluZ2wgPSAwO1xuXG4gIHN0YXJ0ID0gZW5kID0gMDtcbiAgc3RyaW5nbCA9IHN0cmluZy5sZW5ndGg7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nbDsgbisrKSB7XG4gICAgdmFyIGMxID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG4gICAgdmFyIGVuYyA9IG51bGw7XG5cbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIGVuZCsrO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAxMjcgJiYgYzEgPCAyMDQ4KSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDYgfCAxOTIsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDEyIHwgMjI0LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdXJyb2dhdGUgcGFpcnNcbiAgICAgIGlmICgoYzEgJiAweEZDMDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCB0cmFpbCBzdXJyb2dhdGUgYXQgJyArIG4pO1xuICAgICAgfVxuICAgICAgdmFyIGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoKytuKTtcbiAgICAgIGlmICgoYzIgJiAweEZDMDApICE9PSAweERDMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCBsZWFkIHN1cnJvZ2F0ZSBhdCAnICsgKG4gLSAxKSk7XG4gICAgICB9XG4gICAgICBjMSA9ICgoYzEgJiAweDNGRikgPDwgMTApICsgKGMyICYgMHgzRkYpICsgMHgxMDAwMDtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTggfCAyNDAsIGMxID4+IDEyICYgNjMgfCAxMjgsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfVxuICAgIGlmIChlbmMgIT09IG51bGwpIHtcbiAgICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICAgIHV0ZnRleHQgKz0gZW5jO1xuICAgICAgc3RhcnQgPSBlbmQgPSBuICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgc3RyaW5nbCk7XG4gIH1cblxuICByZXR1cm4gdXRmdGV4dDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4X2VuY29kZS5qcy5tYXAiLCIvLyBBcnJheSAmIE9iamVjdCBSZWxhdGVkIEZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV9hcmdzICAgICAgICAgPSByZXF1aXJlKCAnanMtcGFyc2UtYXJncycgKTtcclxubW9kdWxlLmV4cG9ydHMuYXJyYXlfdG9faHRtbF9hdHRyID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbF9hdHRyJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b19odG1sICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b193aW5kb3cgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b193aW5kb3cnICk7XHJcbm1vZHVsZS5leHBvcnRzLnBsYWluX29iamVjdCAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BsYWluX29iamVjdCcgKTtcclxuXHJcbi8vIERhdGUgJiBUaW1lIFJlbGF0ZWQgRnVuY3Rpb25zXHJcbm1vZHVsZS5leHBvcnRzLm1pY3JvdGltZSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2FmdGVyX2RhdGUgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2FmdGVyX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2JlZm9yZV9kYXRlICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2JlZm9yZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19zYW1lX2RhdGUgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19zYW1lX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmZvcm1hdF9kdXJhdGlvbiA9IHJlcXVpcmUoICcuL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbicgKTtcclxubW9kdWxlLmV4cG9ydHMuZGlmZl9kYXlzICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGlmZl9kYXlzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy50aW1lX3Rha2VuICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5cclxuLy8gRGF0YSBUeXBlIFZhbGlkYXRpb25cclxubW9kdWxlLmV4cG9ydHMuaXNfdXJsID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdXJsLmpzJyApO1xyXG5cclxuLy8gUnVuIFRpbWUgRnVuY3Rpb24gUmVsYXRlZHMuXHJcbm1vZHVsZS5leHBvcnRzLmNhbGxfdXNlcl9mdW5jICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jYWxsX3VzZXJfZnVuY19hcnJheSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHMuZnVuY3Rpb25fZXhpc3RzICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVfZnVuY3Rpb24gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24nICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2NhbGxhYmxlICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19jYWxsYWJsZScgKTtcclxuXHJcbi8vIEJyb3dzZXIgUmVsYXRlZFxyXG5tb2R1bGUuZXhwb3J0cy5pc190YWJfZm9jdXNlZCA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3RhYl9mb2N1c2VkJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc193aW5kb3dfYXJnICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzLnNjcm9sbF90b190b3AgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3RvX3RvcCcgKTtcclxubW9kdWxlLmV4cG9ydHMuY29weV90b19jbGlwICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3B5X3RvX2NsaXAnICk7XHJcbm1vZHVsZS5leHBvcnRzLnNjcm9sbF9wb3MgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3BvcycgKTtcclxubW9kdWxlLmV4cG9ydHMud2luZG93X2FyZyAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5kZXZpY2VfdHlwZSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RldmljZV90eXBlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5waXBlX2xvZyAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BpcGVfbG9nJyApO1xyXG5cclxuLy8galF1ZXJ5IFJlbGF0ZWQuXHJcbm1vZHVsZS5leHBvcnRzLnRvX2pxdWVyeSA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfanF1ZXJ5ID0gcmVxdWlyZSggJy4vcGFydHMvaXNfanF1ZXJ5JyApO1xyXG5cclxuLy8gT3RoZXJzXHJcbm1vZHVsZS5leHBvcnRzLnRvX2pzX2Z1bmMgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qc19mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5tZDUgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jb3VudGVyICAgID0gcmVxdWlyZSggJy4vcGFydHMvY291bnRlcicgKTtcclxubW9kdWxlLmV4cG9ydHMucmFuZF9tZDUgICA9IHJlcXVpcmUoICcuL3BhcnRzL3JhbmRfbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jc3NfdW5pdHMgID0gcmVxdWlyZSggJy4vcGFydHMvY3NzX3VuaXRzJyApO1xyXG5cclxuLy8gVVJMIFJlbGF0ZWQgRnVuY3Rpb25zLlxyXG5tb2R1bGUuZXhwb3J0cy51cmxfcGFyYW1zICAgID0gcmVxdWlyZSggJy4vcGFydHMvdXJsX3BhcmFtcycgKTtcclxubW9kdWxlLmV4cG9ydHMucXVlcnlfc3RyaW5nICA9IHJlcXVpcmUoICcuL3BhcnRzL3F1ZXJ5X3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHMucGFyc2Vfc3RyICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxubW9kdWxlLmV4cG9ydHMuYmFzZTY0X2VuY29kZSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2VuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMuYmFzZTY0X2RlY29kZSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMucmF3dXJsZGVjb2RlICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5yYXd1cmxlbmNvZGUgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxlbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnVybGRlY29kZSAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGRlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMudXJsZW5jb2RlICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV91cmwgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9wYXJzZV91cmwnICk7XHJcbiIsIi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gYXJyYXkgZWxlbWVudHMgaW50byA8bGk+IHRhZ3MgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgbGlzdCBvZiB0aGUgZ2l2ZW4gaWQuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKSwgYW5kIGFuIGFub255bW91cyBpbm5lciBjbG9zdXJlIHRvIGNyZWF0ZSBhIGxpc3Qgb2YgaHRtbCB0YWdzLlxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBsaXN0SURcclxuICogQHBhcmFtIHRhZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBhcnIsIGxpc3RJRCwgdGFnID0gJ2xpJyApID0+ICggZWwgPT4gKCAoIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbGlzdElEICkgKSwgKCBlbC5pbm5lckhUTUwgKz0gYXJyLm1hcCggaXRlbSA9PiBgPCR7dGFnfT4ke2l0ZW19PC8ke3RhZ30+YCApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbiggJycgKSApICkgKSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IHtcclxuXHRsZXQgcmV0dXJuX2h0bWwgPSAnJztcclxuXHRmb3IoIGxldCBJIGluICRkYXRhICkge1xyXG5cdFx0aWYoIF8uaXNPYmplY3QoICRkYXRhWyBJIF0gKSApIHtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInO1xyXG5cdFx0XHRmb3IoIGxldCBLIGluICRkYXRhWyBJIF0gKSB7XHJcblx0XHRcdFx0bGV0ICR2YWx1ZSA9ICggXy5pc09iamVjdCggJGRhdGFbIEkgXVsgSyBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdWyBLIF0gKSA6ICRkYXRhWyBJIF1bIEsgXTtcclxuXHRcdFx0XHRyZXR1cm5faHRtbCArPSAkdmFsdWUgKyAnICc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJ1wiJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCAkdmFsdWUgPSAoIF8uaXNPYmplY3QoICRkYXRhWyBJIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF0gKSA6ICRkYXRhWyBJIF07XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJyArICR2YWx1ZSArICdcIiAnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmV0dXJuX2h0bWw7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gKCAkYXJyYXkgKSA9PiB7XHJcblx0Zm9yKCBsZXQgJGtleSBpbiAkYXJyYXkgKSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICRhcnJheVsgJGtleSBdO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ29weSBhIHN0cmluZyB0byB0aGUgY2xpcGJvYXJkLiBPbmx5IHdvcmtzIGFzIGEgcmVzdWx0IG9mIHVzZXIgYWN0aW9uIChpLmUuIGluc2lkZSBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyKS5cclxuICogQ3JlYXRlIGEgbmV3IDx0ZXh0YXJlYT4gZWxlbWVudCwgZmlsbCBpdCB3aXRoIHRoZSBzdXBwbGllZCBkYXRhIGFuZCBhZGQgaXQgdG8gdGhlIEhUTUwgZG9jdW1lbnQuXHJcbiAqIFVzZSBTZWxlY3Rpb24uZ2V0UmFuZ2VBdCgpdG8gc3RvcmUgdGhlIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBVc2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKSB0byBjb3B5IHRvIHRoZSBjbGlwYm9hcmQuXHJcbiAqIFJlbW92ZSB0aGUgPHRleHRhcmVhPiBlbGVtZW50IGZyb20gdGhlIEhUTUwgZG9jdW1lbnQuIEZpbmFsbHksIHVzZSBTZWxlY3Rpb24oKS5hZGRSYW5nZSgpIHRvIHJlY292ZXIgdGhlIG9yaWdpbmFsIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBAcGFyYW0gc3RyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiB7XHJcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGV4dGFyZWEnICk7XHJcblx0ZWwudmFsdWUgPSBzdHI7XHJcblx0ZWwuc2V0QXR0cmlidXRlKCAncmVhZG9ubHknLCAnJyApO1xyXG5cdGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRlbC5zdHlsZS5sZWZ0ICAgICA9ICctOTk5OXB4JztcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbCApO1xyXG5cdGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA+IDAgPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KCAwICkgOiBmYWxzZTtcclxuXHRlbC5zZWxlY3QoKTtcclxuXHRkb2N1bWVudC5leGVjQ29tbWFuZCggJ2NvcHknICk7XHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCggZWwgKTtcclxuXHRpZiggc2VsZWN0ZWQgKSB7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKCBzZWxlY3RlZCApO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBhIGNvdW50ZXIgd2l0aCB0aGUgc3BlY2lmaWVkIHJhbmdlLCBzdGVwIGFuZCBkdXJhdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBzZWxlY3Rvci5cclxuICogQ2hlY2sgaWYgc3RlcCBoYXMgdGhlIHByb3BlciBzaWduIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkuXHJcbiAqIFVzZSBzZXRJbnRlcnZhbCgpIGluIGNvbWJpbmF0aW9uIHdpdGggTWF0aC5hYnMoKSBhbmQgTWF0aC5mbG9vcigpIHRvIGNhbGN1bGF0ZSB0aGUgdGltZSBiZXR3ZWVuIGVhY2ggbmV3IHRleHQgZHJhdy5cclxuICogVXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKS5pbm5lckhUTUwgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cclxuICogT21pdCB0aGUgZm91cnRoIHBhcmFtZXRlciwgc3RlcCwgdG8gdXNlIGEgZGVmYXVsdCBzdGVwIG9mIDEuIE9taXQgdGhlIGZpZnRoIHBhcmFtZXRlciwgZHVyYXRpb24sIHRvIHVzZSBhIGRlZmF1bHQgZHVyYXRpb24gb2YgMjAwMG1zLlxyXG4gKiBAcGFyYW0gc2VsZWN0b3JcclxuICogQHBhcmFtIHN0YXJ0XHJcbiAqIEBwYXJhbSBlbmRcclxuICogQHBhcmFtIHN0ZXBcclxuICogQHBhcmFtIGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggc2VsZWN0b3IsIHN0YXJ0LCBlbmQsIHN0ZXAgPSAxLCBkdXJhdGlvbiA9IDIwMDAgKSA9PiB7XHJcblx0bGV0IGN1cnJlbnQgPSBzdGFydCxcclxuXHRcdF9zdGVwICAgPSAoIGVuZCAtIHN0YXJ0ICkgKiBzdGVwIDwgMCA/IC1zdGVwIDogc3RlcCxcclxuXHRcdHRpbWVyICAgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHRjdXJyZW50ICs9IF9zdGVwO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGN1cnJlbnQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gZW5kO1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBjbGVhckludGVydmFsKCB0aW1lciApO1xyXG5cdFx0fSwgTWF0aC5hYnMoIE1hdGguZmxvb3IoIGR1cmF0aW9uIC8gKCBlbmQgLSBzdGFydCApICkgKSApO1xyXG5cdHJldHVybiB0aW1lcjtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB7XHJcblx0dmFyIHMgPSB2YWw7XHJcblx0aWYoIF8uaXNOdW1iZXIoIHZhbCApICkge1xyXG5cdFx0cmV0dXJuIHZhbCArICdweCc7XHJcblx0fSBlbHNlIGlmKCB2YWwuaW5kZXhPZiggJ3B4JyApID4gLTEgfHwgdmFsLmluZGV4T2YoICclJyApID4gLTEgfHwgdmFsLmluZGV4T2YoICdlbScgKSA+IC0xICkge1xyXG5cdFx0bGV0IGNoZWNrUHggID0gcy5yZXBsYWNlKCAncHgnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrUGN0ID0gcy5yZXBsYWNlKCAnJScsICcnICk7XHJcblx0XHRsZXQgY2hlY2tFbSAgPSBzLnJlcGxhY2UoICdlbScsICcnICk7XHJcblx0XHRpZiggXy5pc051bWJlciggY2hlY2tQeCApIHx8IF8uaXNOdW1iZXIoIGNoZWNrUGN0ICkgfHwgXy5pc051bWJlciggY2hlY2tFbSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcwcHgnO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJzBweCc7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBEZXRlY3RzIHdldGhlciB0aGUgd2Vic2l0ZSBpcyBiZWluZyBvcGVuZWQgaW4gYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIFVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IHByb3BlcnR5IHRvIGZpZ3VyZSBvdXQgaWYgdGhlIGRldmljZSBpcyBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPyAnTW9iaWxlJyA6ICdEZXNrdG9wJzsiLCIvKipcclxuICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gZGF0ZXMuXHJcbiAqIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gRGF0ZSBvYmplY3RzLlxyXG4gKiBAcGFyYW0gZGF0ZUluaXRpYWxcclxuICogQHBhcmFtIGRhdGVGaW5hbFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVJbml0aWFsLCBkYXRlRmluYWwgKSA9PiAoIGRhdGVGaW5hbCAtIGRhdGVJbml0aWFsICkgLyAoIDEwMDAgKiAzNjAwICogMjQgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgaHVtYW4gcmVhZGFibGUgZm9ybWF0IG9mIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gKiBEaXZpZGUgbXMgd2l0aCB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIHRvIG9idGFpbiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIGZvciBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIGFuZCBtaWxsaXNlY29uZC5cclxuICogVXNlIE9iamVjdC5lbnRyaWVzKCkgd2l0aCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKCkgdG8ga2VlcCBvbmx5IG5vbi16ZXJvIHZhbHVlcy5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSB0byBjcmVhdGUgdGhlIHN0cmluZyBmb3IgZWFjaCB2YWx1ZSwgcGx1cmFsaXppbmcgYXBwcm9wcmlhdGVseS5cclxuICogVXNlIFN0cmluZy5wcm90b3R5cGUuam9pbignLCAnKSB0byBjb21iaW5lIHRoZSB2YWx1ZXMgaW50byBhIHN0cmluZy5cclxuICogQHBhcmFtIG1zXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IG1zID0+IHtcclxuXHRpZiggbXMgPCAwICkgbXMgPSAtbXM7XHJcblx0Y29uc3QgdGltZSA9IHtcclxuXHRcdGRheTogTWF0aC5mbG9vciggbXMgLyA4NjQwMDAwMCApLFxyXG5cdFx0aG91cjogTWF0aC5mbG9vciggbXMgLyAzNjAwMDAwICkgJSAyNCxcclxuXHRcdG1pbnV0ZTogTWF0aC5mbG9vciggbXMgLyA2MDAwMCApICUgNjAsXHJcblx0XHRzZWNvbmQ6IE1hdGguZmxvb3IoIG1zIC8gMTAwMCApICUgNjAsXHJcblx0XHRtaWxsaXNlY29uZDogTWF0aC5mbG9vciggbXMgKSAlIDEwMDBcclxuXHR9O1xyXG5cdHJldHVybiBPYmplY3QuZW50cmllcyggdGltZSApXHJcblx0XHRcdFx0IC5maWx0ZXIoIHZhbCA9PiB2YWxbIDEgXSAhPT0gMCApXHJcblx0XHRcdFx0IC5tYXAoICggWyBrZXksIHZhbCBdICkgPT4gYCR7dmFsfSAke2tleX0ke3ZhbCAhPT0gMSA/ICdzJyA6ICcnfWAgKVxyXG5cdFx0XHRcdCAuam9pbiggJywgJyApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYWZ0ZXIgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvciAoPikgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYWZ0ZXIgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPiBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGJlZm9yZSBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgbGVzcyB0aGFuIG9wZXJhdG9yICg8KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBiZWZvcmUgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPCBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgZ2l2ZW4gT2JqZWN0IC8gVmFsdWUgaXMgYSBqUXVlcnkgSW5zdGFuY2UuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4gKCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJGVsZW0gKSAmJiBmYWxzZSA9PT0gXy5pc1N0cmluZyggJGVsZW0gKSAmJiAkZWxlbS5qUXVlcnkgKTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIHRoZSBzYW1lIGFzIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKCkgYW5kIHN0cmljdCBlcXVhbGl0eSBjaGVja2luZyAoPT09KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQS50b0lTT1N0cmluZygpID09PSBkYXRlQi50b0lTT1N0cmluZygpOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIGZvY3VzZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBEb2N1bWVudC5oaWRkZW4gcHJvcGVydHksIGludHJvZHVjZWQgYnkgdGhlIFBhZ2UgVmlzaWJpbGl0eSBBUEkgdG8gY2hlY2sgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gIWRvY3VtZW50LmhpZGRlbjsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJHVybCApID0+IHtcclxuXHRsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoICdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nICsgLy8gcHJvdG9jb2xcclxuXHRcdCcoKChbYS16XFxcXGRdKFthLXpcXFxcZC1dKlthLXpcXFxcZF0pKilcXFxcLj8pK1thLXpdezIsfXwnICsgLy8gZG9tYWluIG5hbWVcclxuXHRcdCcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknICsgLy8gaXAgKHY0KSBhZGRyZXNzXHJcblx0XHQnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLWEtelxcXFxkJV8ufitdKikqJyArIC8vcG9ydFxyXG5cdFx0JyhcXFxcP1s7JmEtelxcXFxkJV8ufis9LV0qKT8nICsgLy8gcXVlcnkgc3RyaW5nXHJcblx0XHQnKFxcXFwjWy1hLXpcXFxcZF9dKik/JCcsICdpJyApO1xyXG5cdHJldHVybiAoIHBhdHRlcm4udGVzdCggJHVybCApICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrcyBpZiB3aW5kb3cgaGFzIGdpdmVuIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5ICkgPT4gKCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggd2luZG93WyAka2V5IF0gKSApOyIsIi8qKlxyXG4gKiBMb2dzIGEgdmFsdWUgYW5kIHJldHVybnMgaXQuXHJcbiAqIFVzZSBjb25zb2xlLmxvZyB0byBsb2cgdGhlIHN1cHBsaWVkIHZhbHVlLCBjb21iaW5lZCB3aXRoIHRoZSB8fCBvcGVyYXRvciB0byByZXR1cm4gaXQuXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBkYXRhID0+IGNvbnNvbGUubG9nKCBkYXRhICkgfHwgZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9ICgpID0+ICggdHlwZW9mIE9iamVjdC5jcmVhdGUgICE9PSAndW5kZWZpbmVkJyApID8gT2JqZWN0LmNyZWF0ZSggbnVsbCApIDoge307IiwiLyoqXHJcbiAqIFJldHVybiB2YWx1ZSBmcm9tIFF1ZXJ5U3RyaW5nXHJcbiAqIEBwYXJhbSBuYW1lXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggbmFtZSApID0+IHtcclxuXHRuYW1lICAgICAgICA9IG5hbWUucmVwbGFjZSggL1tcXFtdLywgXCJcXFxcW1wiICkucmVwbGFjZSggL1tcXF1dLywgXCJcXFxcXVwiICk7XHJcblx0dmFyIHJlZ2V4ICAgPSBuZXcgUmVnRXhwKCBcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIiApLFxyXG5cdFx0cmVzdWx0cyA9IHJlZ2V4LmV4ZWMoIGxvY2F0aW9uLnNlYXJjaCApO1xyXG5cdHJldHVybiByZXN1bHRzID09IG51bGwgPyBcIlwiIDogZGVjb2RlVVJJQ29tcG9uZW50KCByZXN1bHRzWyAxIF0ucmVwbGFjZSggL1xcKy9nLCBcIiBcIiApICk7XHJcbn07IiwiaW1wb3J0IG1kNSBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNSc7XHJcblxyXG4vKipcclxuICogVW5pcXVlIHJhbmRvbSBtZDVcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gU3RyaW5nKCBtZDUoIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSApICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBwYWdlLlxyXG4gKiBVc2UgcGFnZVhPZmZzZXQgYW5kIHBhZ2VZT2Zmc2V0IGlmIHRoZXkgYXJlIGRlZmluZWQsIG90aGVyd2lzZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AuIFlvdSBjYW4gb21pdCBlbCB0byB1c2UgYSBkZWZhdWx0IHZhbHVlIG9mIHdpbmRvdy5cclxuICogQHBhcmFtIGVsXHJcbiAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGVsID0gd2luZG93ICkgPT4gKCB7XHJcblx0eDogZWwucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VYT2Zmc2V0IDogZWwuc2Nyb2xsTGVmdCxcclxuXHR5OiBlbC5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVlPZmZzZXQgOiBlbC5zY3JvbGxUb3BcclxufSApOyIsIi8qKlxyXG4gKiBTbW9vdGgtc2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlLlxyXG4gKiBHZXQgZGlzdGFuY2UgZnJvbSB0b3AgdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCBvciBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcC5cclxuICogU2Nyb2xsIGJ5IGEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcC4gVXNlIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB0byBhbmltYXRlIHRoZSBzY3JvbGxpbmcuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcclxuXHRjb25zdCBjID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRpZiggYyA+IDAgKSB7XHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY3JvbGxUb1RvcCApO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKCAwLCBjIC0gYyAvIDggKTtcclxuXHR9XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAoIGNhbGxiYWNrLCB0aXRsZSA9ICdUaW1lVGFrZW4nICkgPT4ge1xyXG5cdGNvbnNvbGUudGltZSggdGl0bGUgKTtcclxuXHRjb25zdCByID0gY2FsbGJhY2soKTtcclxuXHRjb25zb2xlLnRpbWVFbmQoIHRpdGxlICk7XHJcblx0cmV0dXJuIHI7XHJcbn07IiwiaW1wb3J0IGlzX2pxdWVyeSBmcm9tICcuL2lzX2pxdWVyeSc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBHaXZlbiBTdHJpbmcgaW50byBBIGpRdWVyeSBPYmplY3QuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+IHtcclxuXHRpZiggZmFsc2UgPT09IGlzX2pxdWVyeSggJGVsZW0gKSApIHtcclxuXHRcdHJldHVybiBqUXVlcnkoICRlbGVtICk7XHJcblx0fVxyXG5cdHJldHVybiAkZWxlbTtcclxufTsiLCJpbXBvcnQgdmFsaWRhdGVKU0Z1bmMgZnJvbSAnLi92YWxpZGF0ZVNpbmdsZUpTRnVuYyc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIEVhY2ggVmFsdWUgT2YgYSBKUyBPYmplY3QgQW5kIENvbnZlcnRzIEludG8gSlMgQ2FsbGFibGUgRnVuY3Rpb24uXHJcbiAqIEBwYXJhbSAkZGF0YVxyXG4gKiBAcGFyYW0gJGFyZ3Nfa2V5XHJcbiAqIEBwYXJhbSAkY29udGVudHNfa2V5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBfLmlzT2JqZWN0KCAkZGF0YSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGF0YSApIHtcclxuXHRcdFx0aWYoICFfLmlzRW1wdHkoICRkYXRhWyAka2V5IF0gKSApIHtcclxuXHRcdFx0XHQkZGF0YVsgJGtleSBdID0gdmFsaWRhdGVKU0Z1bmMoICRkYXRhWyAka2V5IF0sICRhcmdzX2tleSwgJGNvbnRlbnRzX2tleSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkZGF0YTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGN1cnJlbnQgVVJMLlxyXG4gKiBVc2UgU3RyaW5nLm1hdGNoKCkgd2l0aCBhbiBhcHByb3ByaWF0ZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZ2V0IGFsbCBrZXktdmFsdWUgcGFpcnMsXHJcbiAqIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKSB0byBtYXAgYW5kIGNvbWJpbmUgdGhlbSBpbnRvIGEgc2luZ2xlIG9iamVjdC5cclxuICogUGFzcyBsb2NhdGlvbi5zZWFyY2ggYXMgdGhlIGFyZ3VtZW50IHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHVybC5cclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7VCB8IHt9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB1cmwgPT5cclxuXHQoIHVybC5tYXRjaCggLyhbXj89Jl0rKSg9KFteJl0qKSkvZyApIHx8IFtdICkucmVkdWNlKFxyXG5cdFx0KCBhLCB2ICkgPT4gKCAoIGFbIHYuc2xpY2UoIDAsIHYuaW5kZXhPZiggJz0nICkgKSBdID0gdi5zbGljZSggdi5pbmRleE9mKCAnPScgKSArIDEgKSApLCBhICksXHJcblx0XHR7fVxyXG5cdCk7IiwiLyoqXHJcbiAqIENvbnZlcnRzIEpTIFN0cmluZyBJbnRvIENhbGxhYmxlIEZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gJHN0cmluZ1xyXG4gKiBAcGFyYW0gJGFyZ3Nfa2V5XHJcbiAqIEBwYXJhbSAkY29udGVudHNfa2V5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRzdHJpbmcsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IF8uaXNPYmplY3QoICRzdHJpbmcgKSAmJiBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gKSB8fCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdICkgKSB7XHJcblx0XHRsZXQgJGFyZ3MgICAgID0gKCAkc3RyaW5nWyAkYXJnc19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGFyZ3Nfa2V5IF07XHJcblx0XHRsZXQgJGNvbnRlbnRzID0gKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRjb250ZW50c19rZXkgXTtcclxuXHRcdGlmKCAkYXJncyA9PT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2UgaWYoICRhcmdzICE9PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkYXJncywgJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJHN0cmluZztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRzdHJpbmc7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBTZXRzIEpTIE9iamVjdCBJbnRvIFdpbmRvdyBBcmdzLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcGFyYW0gJHZhbHVlXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSwgJHZhbHVlICkgPT4ge1xyXG5cdGlmKCBfLmlzT2JqZWN0KCAka2V5ICkgKSB7XHJcblx0XHRmb3IoIGxldCAkX2sgaW4gJGtleSApIHtcclxuXHRcdFx0d2luZG93WyAkX2sgXSA9ICRrZXlbICRfayBdO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICR2YWx1ZTtcclxuXHR9XHJcbn07IiwiY29uc3QgcGFyc2VfdXJsICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG5jb25zdCBwYXJzZV9zdHIgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcGFyc2Vfc3RyJyApO1xyXG5jb25zdCBodHRwX2J1aWxkX3F1ZXJ5ID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5JyApO1xyXG5jb25zdCBzdHJwb3MgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zJyApO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIG1vZGlmaWVkIFVSTCBxdWVyeSBzdHJpbmcuXHJcbiAqXHJcbiAqIFlvdSBjYW4gcmVidWlsZCB0aGUgVVJMIGFuZCBhcHBlbmQgcXVlcnkgdmFyaWFibGVzIHRvIHRoZSBVUkwgcXVlcnkgYnkgdXNpbmcgdGhpcyBmdW5jdGlvbi5cclxuICogVGhlcmUgYXJlIHR3byB3YXlzIHRvIHVzZSB0aGlzIGZ1bmN0aW9uOyBlaXRoZXIgYSBzaW5nbGUga2V5IGFuZCB2YWx1ZSwgb3IgYW4gYXNzb2NpYXRpdmUgYXJyYXkuXHJcbiAqXHJcbiAqIFVzaW5nIGEgc2luZ2xlIGtleSBhbmQgdmFsdWU6XHJcbiAqXHJcbiAqICAgICBhZGRfcXVlcnlfYXJnKCAna2V5JywgJ3ZhbHVlJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScgKTtcclxuICpcclxuICogVXNpbmcgYW4gYXNzb2NpYXRpdmUgYXJyYXk6XHJcbiAqXHJcbiAqICAgICBhZGRfcXVlcnlfYXJnKCBhcnJheShcclxuICogICAgICAgICAna2V5MScgPT4gJ3ZhbHVlMScsXHJcbiAqICAgICAgICAgJ2tleTInID0+ICd2YWx1ZTInLFxyXG4gKiAgICAgKSwgJ2h0dHA6Ly9leGFtcGxlLmNvbScgKTtcclxuICpcclxuICogT21pdHRpbmcgdGhlIFVSTCBmcm9tIGVpdGhlciB1c2UgcmVzdWx0cyBpbiB0aGUgY3VycmVudCBVUkwgYmVpbmcgdXNlZFxyXG4gKiAodGhlIHZhbHVlIG9mIGB3aW5kb3cubG9jYXRpb24uaHJlZmApLlxyXG4gKlxyXG4gKiBWYWx1ZXMgYXJlIGV4cGVjdGVkIHRvIGJlIGVuY29kZWQgYXBwcm9wcmlhdGVseSB3aXRoIHVybGVuY29kZSgpIG9yIHJhd3VybGVuY29kZSgpLlxyXG4gKlxyXG4gKiBTZXR0aW5nIGFueSBxdWVyeSB2YXJpYWJsZSdzIHZhbHVlIHRvIGJvb2xlYW4gZmFsc2UgcmVtb3ZlcyB0aGUga2V5IChzZWUgcmVtb3ZlX3F1ZXJ5X2FyZygpKS5cclxuICpcclxuICogSW1wb3J0YW50OiBUaGUgcmV0dXJuIHZhbHVlIG9mIGFkZF9xdWVyeV9hcmcoKSBpcyBub3QgZXNjYXBlZCBieSBkZWZhdWx0LiBPdXRwdXQgc2hvdWxkIGJlXHJcbiAqIGxhdGUtZXNjYXBlZCB3aXRoIGVzY191cmwoKSBvciBzaW1pbGFyIHRvIGhlbHAgcHJldmVudCB2dWxuZXJhYmlsaXR5IHRvIGNyb3NzLXNpdGUgc2NyaXB0aW5nXHJcbiAqIChYU1MpIGF0dGFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSBrZXlcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZF9xdWVyeV9hcmcoIGtleSA9IG51bGwsIHZhbHVlID0gbnVsbCwgdXJsID0gbnVsbCApIHtcclxuXHRpZiggdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgbnVsbCA9PT0gdmFsdWUgKSB7XHJcblx0XHR1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9IGVsc2UgaWYoIHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIG51bGwgIT09IHZhbHVlICkge1xyXG5cdFx0dXJsICAgPSB2YWx1ZTtcclxuXHRcdHZhbHVlID0gbnVsbDtcclxuXHR9IGVsc2UgaWYoIG51bGwgPT09IHVybCApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHNlID09PSB1cmwgfHwgJycgPT09IHVybCB8fCB1bmRlZmluZWQgPT09IHVybCApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHJcblx0bGV0ICRwYXJzZWQgICA9IHBhcnNlX3VybCggdXJsICksXHJcblx0XHQkcXVlcnkgICAgPSB7fSxcclxuXHRcdCRmcmFnbWVudCA9ICggJHBhcnNlZC5mcmFnbWVudCApID8gJyMnICsgJHBhcnNlZC5mcmFnbWVudCA6ICcnO1xyXG5cclxuXHRpZiggdHlwZW9mICRwYXJzZWQucXVlcnkgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0cGFyc2Vfc3RyKCAkcGFyc2VkLnF1ZXJ5LCAkcXVlcnkgKTtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyApIHtcclxuXHRcdGZvciggbGV0IGsgaW4ga2V5ICkge1xyXG5cdFx0XHRpZigga2V5WyBrIF0gKSB7XHJcblx0XHRcdFx0JHF1ZXJ5WyBrIF0gPSBrZXlbIGsgXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHQkcXVlcnlbIGtleSBdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRsZXQgc3BsaXRfdXJsID0gbnVsbCxcclxuXHRcdGJhc2VfdXJsICA9IHVybDtcclxuXHRpZiggZmFsc2UgIT09IHN0cnBvcyggdXJsLCAnPycgKSApIHtcclxuXHRcdHNwbGl0X3VybCA9IHVybC5zcGxpdCggJz8nICk7XHJcblx0XHRiYXNlX3VybCAgPSBzcGxpdF91cmxbIDAgXSB8fCB1cmw7XHJcblx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gc3RycG9zKCB1cmwsICcjJyApICkge1xyXG5cdFx0c3BsaXRfdXJsID0gdXJsLnNwbGl0KCAnIycgKTtcclxuXHRcdGJhc2VfdXJsICA9IHNwbGl0X3VybFsgMCBdIHx8IHVybDtcclxuXHR9XHJcblxyXG5cdGZvciggbGV0IGsgaW4gJHF1ZXJ5ICkge1xyXG5cdFx0aWYoIGZhbHNlID09PSAkcXVlcnlbIGsgXSApIHtcclxuXHRcdFx0ZGVsZXRlICRxdWVyeVsgayBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JHF1ZXJ5ID0gaHR0cF9idWlsZF9xdWVyeSggJHF1ZXJ5LCBudWxsLCAnJicgKTtcclxuXHQkcXVlcnkgPSAoICRxdWVyeSAhPT0gJycgKSA/ICc/JyArICRxdWVyeSA6ICRxdWVyeTtcclxuXHRyZXR1cm4gYmFzZV91cmwgKyAkcXVlcnkgKyAkZnJhZ21lbnQ7XHJcbn0iLCJpbXBvcnQgYWRkX3F1ZXJ5X2FyZyBmcm9tICcuL2FkZF9xdWVyeV9hcmcnO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYW4gaXRlbSBvciBpdGVtcyBmcm9tIGEgcXVlcnkgc3RyaW5nLlxyXG4gKiBAcGFyYW0ga2V5XHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVfcXVlcnlfYXJnKCBrZXkgPSBudWxsLCB1cmwgPSBudWxsICkge1xyXG5cdGlmKCB0eXBlb2Yga2V5ICE9PSAnb2JqZWN0JyApIHtcclxuXHRcdGtleSA9IFsga2V5IF07XHJcblx0fVxyXG5cclxuXHRmb3IoIGxldCBpIGluIGtleSApIHtcclxuXHRcdGlmKCBrZXlbIGkgXSApIHtcclxuXHRcdFx0dXJsID0gYWRkX3F1ZXJ5X2FyZygga2V5WyBpIF0sIGZhbHNlLCB1cmwgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHVybDtcclxufVxyXG4iLCJpbXBvcnQgdW50cmFpbGluZ3NsYXNoaXQgZnJvbSAnLi91bnRyYWlsaW5nc2xhc2hpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiggJHN0cmluZyApIHtcclxuXHRyZXR1cm4gdW50cmFpbGluZ3NsYXNoaXQoICRzdHJpbmcgKSArICcvXFxcXCc7XHJcbn0iLCJpbXBvcnQgcnRyaW0gZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9ydHJpbSc7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0cmFpbGluZyBmb3J3YXJkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGlmIHRoZXkgZXhpc3QuXHJcbiAqXHJcbiAqIFRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGlzIGZvciBwYXRocyBhbmQgdGh1cyBzaG91bGQgYmUgdXNlZCBmb3IgcGF0aHMuIEl0IGlzXHJcbiAqIG5vdCByZXN0cmljdGVkIHRvIHBhdGhzIGFuZCBvZmZlcnMgbm8gc3BlY2lmaWMgcGF0aCBzdXBwb3J0LlxyXG4gKiBAcGFyYW0gJHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCAkc3RyaW5nICkge1xyXG5cdHJldHVybiBydHJpbSggJHN0cmluZywgJy9cXFxcJyApO1xyXG59IiwiZXhwb3J0IGNvbnN0IGFkZF9xdWVyeV9hcmcgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9hZGRfcXVlcnlfYXJnJykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVfcXVlcnlfYXJnID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZycpLmRlZmF1bHQ7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhaWxpbmdzbGFzaGl0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvdHJhaWxpbmdzbGFzaGl0JykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCB1bnRyYWlsaW5nc2xhc2hpdCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3VudHJhaWxpbmdzbGFzaGl0JykuZGVmYXVsdDtcclxuXHJcblxyXG4vKipcclxuICogQXBwZW5kcyBGdW5jdGlvbiBHbG9iYWxseS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3cgKSA9PiB7XHJcblx0d2luZG93LmFkZF9xdWVyeV9hcmcgICAgID0gYWRkX3F1ZXJ5X2FyZztcclxuXHR3aW5kb3cucmVtb3ZlX3F1ZXJ5X2FyZyAgPSByZW1vdmVfcXVlcnlfYXJnO1xyXG5cdHdpbmRvdy51bnRyYWlsaW5nc2xhc2hpdCA9IHVudHJhaWxpbmdzbGFzaGl0O1xyXG5cdHdpbmRvdy50cmFpbGluZ3NsYXNoaXQgICA9IHRyYWlsaW5nc2xhc2hpdDtcclxufSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IHtcblx0dG9fanF1ZXJ5LFxuXHRjYWxsX3VzZXJfZnVuYyxcblx0cGFyc2Vfc3RyLFxuXHRpc191cmwsXG5cdHVybF9wYXJhbXMsXG5cdGlzX2NhbGxhYmxlLFxuXHRjYWxsX3VzZXJfZnVuY19hcnJheSxcblx0ZnVuY3Rpb25fZXhpc3RzLFxuXHRjcmVhdGVfZnVuY3Rpb24sXG59IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgeyByZW1vdmVfcXVlcnlfYXJnIH0gZnJvbSAnd29yZHByZXNzLWpzLXBvcnRzJztcblxuXG4vKipcbiAqIFdQT25pb24gQ3VzdG9tIEFqYXggSGFuZGxlci5cbiAqL1xuZXhwb3J0IGNsYXNzIFdQT25pb25fQWpheGVyIHtcblx0LyoqXG5cdCAqIEBwYXJhbSAkYWpheF9hcmdzXG5cdCAqIEBwYXJhbSAkYWpheF9jb25maWdcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkYWpheF9hcmdzLCAkYWpheF9jb25maWcgKSB7XG5cdFx0dGhpcy5kZWZhdWx0cyAgICAgICAgPSB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdHVybDogKCB0eXBlb2Ygd2luZG93LmFqYXh1cmwgIT09ICd1bmRlZmluZWQnICkgPyB3aW5kb3cuYWpheHVybCA6IGZhbHNlLFxuXHRcdFx0ZGF0YToge30sXG5cdFx0XHRzdWNjZXNzOiBmYWxzZSxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdGFsd2F5czogZmFsc2UsXG5cdFx0XHRhY3Rpb246IGZhbHNlLFxuXHRcdH07XG5cdFx0dGhpcy5kZWZhdWx0X2NvbmZpZ3MgPSB7XG5cdFx0XHRyZXNwb25zZV9lbGVtZW50OiBmYWxzZSxcblx0XHRcdGJ1dHRvbjogZmFsc2UsXG5cdFx0XHRlbGVtZW50OiBmYWxzZSxcblx0XHRcdHNwaW5uZXI6ICc8c3BhbiBjbGFzcz1cInNwaW5uZXJcIj48L3NwYW4+Jyxcblx0XHR9O1xuXHRcdHRoaXMuaW5zdGFuY2UgICAgICAgID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V1BPbmlvbl9BamF4ZXIuZGVmYXVsdHN9XG5cdFx0ICovXG5cdFx0dGhpcy5hamF4X2FyZ3MgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB0aGlzLmRlZmF1bHRzLCAkYWpheF9hcmdzICk7XG5cdFx0dGhpcy5hamF4X2NvbmZpZyA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHRoaXMuZGVmYXVsdF9jb25maWdzLCAkYWpheF9jb25maWcgKTtcblx0XHR0aGlzLmFqYXgoKTtcblx0fVxuXG5cblx0Y3JlYXRlX2Z1bmN0aW9uKCAkY29kZSA9IGZhbHNlLCAkYXJncyA9ICcnICkge1xuXHRcdHJldHVybiB0aGlzLnNpbmdsZV9jYWxsYmFjayggY3JlYXRlX2Z1bmN0aW9uKCAkYXJncywgJGNvZGUgKSApO1xuXHR9XG5cblx0c2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2sgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNGdW5jdGlvbiggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRjYWxsX3VzZXJfZnVuYyggJGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkY2FsbGJhY2sgKSAmJiBmYWxzZSAhPT0gZnVuY3Rpb25fZXhpc3RzKCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdGNhbGxfdXNlcl9mdW5jKCAkY2FsbGJhY2sgKTtcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFjayApICkge1xuXHRcdFx0dGhpcy5jcmVhdGVfZnVuY3Rpb24oICRjYWxsYmFjayApO1xuXHRcdH0gZWxzZSBpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRjYWxsYmFjayApIHtcblx0XHRcdFx0aWYoICRjYWxsYmFjay5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tbICRrZXkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlX2NhbGxiYWNrcyggZGF0YSApIHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggZGF0YSApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCBkYXRhLmNhbGxiYWNrICkgKSB7XG5cdFx0XHRcdGxldCAkY2FsbGJhY2tzID0gZGF0YS5jYWxsYmFjaztcblxuXHRcdFx0XHRpZiggZmFsc2UgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFja3MgKSApIHtcblx0XHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrcyApO1xuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkY2FsbGJhY2tzICkgKSB7XG5cdFx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkY2FsbGJhY2tzICkge1xuXHRcdFx0XHRcdFx0aWYoICRjYWxsYmFja3MuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zaW5nbGVfY2FsbGJhY2soICRjYWxsYmFja3NbICRrZXkgXSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgZGF0YS5jYWxsYmFjaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHRvblN1Y2Nlc3MoIGRhdGEgKSB7XG5cdFx0dGhpcy5oYW5kbGVfY2FsbGJhY2tzKCBkYXRhICk7XG5cblx0XHRpZiggZmFsc2UgIT09IHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRpZiggaXNfY2FsbGFibGUoIHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MgKSApIHtcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MsIFsgZGF0YSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b25FcnJvciggZGF0YSApIHtcblx0XHR0aGlzLmhhbmRsZV9jYWxsYmFja3MoIGRhdGEgKTtcblx0XHRpZiggZmFsc2UgIT09IHRoaXMuYWpheF9hcmdzLmVycm9yICkge1xuXHRcdFx0aWYoIGlzX2NhbGxhYmxlKCB0aGlzLmFqYXhfYXJncy5lcnJvciApICkge1xuXHRcdFx0XHRjYWxsX3VzZXJfZnVuY19hcnJheSggdGhpcy5hamF4X2FyZ3MuZXJyb3IsIFsgZGF0YSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b25BbHdheXMoIGRhdGEgKSB7XG5cdFx0dGhpcy5idXR0b25fdW5sb2NrKCk7XG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmFqYXhfYXJncy5hbHdheXMgKSB7XG5cdFx0XHRpZiggaXNfY2FsbGFibGUoIHRoaXMuYWpheF9hcmdzLmFsd2F5cyApICkge1xuXHRcdFx0XHRjYWxsX3VzZXJfZnVuY19hcnJheSggdGhpcy5hamF4X2FyZ3MuYWx3YXlzLCBbIGRhdGEgXSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGFqYXgoKSB7XG5cdFx0dGhpcy5idXR0b25fbG9jaygpO1xuXHRcdGxldCAkY29uZmlnID0gd2luZG93Lndwb25pb24uXy5jbG9uZSggdGhpcy5hamF4X2FyZ3MgKTtcblx0XHRpZiggZmFsc2UgIT09ICRjb25maWcudXJsICkge1xuXHRcdFx0aWYoIGZhbHNlICE9PSBpc191cmwoICRjb25maWcudXJsICkgKSB7XG5cdFx0XHRcdGxldCAkdXJsX3BhcmFtcyA9IHVybF9wYXJhbXMoICRjb25maWcudXJsICk7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHVybF9wYXJhbXMgKSB7XG5cdFx0XHRcdFx0aWYoICR1cmxfcGFyYW1zLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0XHQkY29uZmlnLnVybCA9IHJlbW92ZV9xdWVyeV9hcmcoICRrZXksICRjb25maWcudXJsICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCRjb25maWcuZGF0YSA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICRjb25maWcuZGF0YSwgJHVybF9wYXJhbXMgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkdXJsX3BhcmFtcyA9IHt9O1xuXHRcdFx0XHRwYXJzZV9zdHIoICRjb25maWcudXJsLCAkdXJsX3BhcmFtcyApO1xuXHRcdFx0XHQkY29uZmlnLnVybCAgPSB3aW5kb3cuYWpheHVybDtcblx0XHRcdFx0JGNvbmZpZy5kYXRhID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJGNvbmZpZy5kYXRhLCAkdXJsX3BhcmFtcyApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY29uZmlnLnVybCA9IHdpbmRvdy5hamF4dXJsO1xuXHRcdH1cblxuXHRcdGlmKCBmYWxzZSAhPT0gJGNvbmZpZy5hY3Rpb24gKSB7XG5cdFx0XHQkY29uZmlnLmRhdGEuYWN0aW9uID0gJGNvbmZpZy5hY3Rpb247XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5hY3Rpb247XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiAkY29uZmlnLnN1Y2Nlc3MgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0ZGVsZXRlICRjb25maWcuc3VjY2Vzcztcblx0XHR9XG5cdFx0aWYoIHR5cGVvZiAkY29uZmlnLmFsd2F5cyAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5hbHdheXM7XG5cdFx0fVxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5lcnJvciAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5lcnJvcjtcblx0XHR9XG5cblx0XHR0aGlzLmluc3RhbmNlID0gd2luZG93LndwLmFqYXguc2VuZCggJGNvbmZpZyApO1xuXHRcdHRoaXMuaW5zdGFuY2UuZG9uZSggKCBkYXRhICkgPT4gdGhpcy5vblN1Y2Nlc3MoIGRhdGEgKSApO1xuXHRcdHRoaXMuaW5zdGFuY2UuZmFpbCggKCBkYXRhICkgPT4gdGhpcy5vbkVycm9yKCBkYXRhICkgKTtcblx0XHR0aGlzLmluc3RhbmNlLmFsd2F5cyggKCBkYXRhICkgPT4gdGhpcy5vbkFsd2F5cyggZGF0YSApICk7XG5cdH1cblxuXHRoYXNfY29uZmlnKCAka2V5ID0gJycgKSB7XG5cdFx0cmV0dXJuICggdHlwZW9mIHRoaXMuYWpheF9jb25maWdbICRrZXkgXSAhPT0gJ3VuZGVmaW5lZCcgKTtcblx0fVxuXG5cdGNvbmZpZyggJGtleSA9ICcnLCAkZGVmYXVsdCA9IGZhbHNlICkge1xuXHRcdHJldHVybiAoIHRoaXMuaGFzX2NvbmZpZyggJGtleSApICkgPyB0aGlzLmFqYXhfY29uZmlnWyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdGJ1dHRvbl9sb2NrKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcoICdidXR0b24nICkgKSB7XG5cdFx0XHRsZXQgJGJ1dHRvbiA9IHRvX2pxdWVyeSggdGhpcy5jb25maWcoICdidXR0b24nICkgKTtcblx0XHRcdGlmKCAkYnV0dG9uICkge1xuXHRcdFx0XHQkYnV0dG9uLndwb19idXR0b24oICdwcm9jZXNzaW5nJyApO1xuXHRcdFx0XHQkYnV0dG9uLmF0dHIoICdkaXNhYmxlZCcsICdkaXNhYmxlZCcgKTtcblxuXHRcdFx0XHRpZiggdGhpcy5jb25maWcoICdzcGlubmVyJyApICkge1xuXHRcdFx0XHRcdGxldCAkc3Bpbm5lciA9IGpRdWVyeSggdGhpcy5jb25maWcoICdzcGlubmVyJyApICk7XG5cdFx0XHRcdFx0JHNwaW5uZXIuYWRkQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0XHRcdFx0JGJ1dHRvbi5wYXJlbnQoKS5hcHBlbmQoICRzcGlubmVyICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRidXR0b25fdW5sb2NrKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcoICdidXR0b24nICkgKSB7XG5cdFx0XHRsZXQgJGJ1dHRvbiA9IHRvX2pxdWVyeSggdGhpcy5jb25maWcoICdidXR0b24nICkgKTtcblx0XHRcdGlmKCAkYnV0dG9uICkge1xuXHRcdFx0XHQkYnV0dG9uLndwb19idXR0b24oICdjb21wbGV0ZScgKTtcblx0XHRcdFx0JGJ1dHRvbi5yZW1vdmVBdHRyKCAnZGlzYWJsZWQnICk7XG5cdFx0XHRcdGxldCAkc3Bpbm5lciA9ICRidXR0b24ubmV4dCgpO1xuXHRcdFx0XHRpZiggJHNwaW5uZXIuaGFzQ2xhc3MoICdzcGlubmVyJyApICkge1xuXHRcdFx0XHRcdCRzcGlubmVyLnJlbW92ZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRidXR0b24ucGFyZW50KCkuZmluZCggJy5zcGlubmVyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKCAoICQsIGRvY3VtZW50ICkgPT4ge1xuXHQkKCAoKSA9PiB7XG5cdFx0bGV0ICRjbGFzcyA9ICdbZGF0YS13cG9uaW9uLWlubGluZS1hamF4XSwgLndwb25pb24tYWpheCwgLndwb25pb24tYWpheC1nZXQsIC53cG9uaW9uLWFqYXgtcG9zdCwgLndwb25pb24taW5saW5lLWFqYXgsIC53cG9uaW9uLWlubGluZS1hamF4LWdldCwgLndwb25pb24taW5saW5lLWFqYXgtcG9zdCc7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJGNsYXNzLCAoIGUgKSA9PiB7XG5cblx0XHRcdGxldCAkZWxlbSAgICAgICAgICAgID0gJCggZS5jdXJyZW50VGFyZ2V0ICksXG5cdFx0XHRcdCRfZGF0YSAgICAgICAgICAgPSAkZWxlbS5kYXRhKCksXG5cdFx0XHRcdCRfY2xhc3NfaW5zdGFuY2UgPSBudWxsLFxuXHRcdFx0XHQkYXJncyAgICAgICAgICAgID0ge1xuXHRcdFx0XHRcdHVybDogZmFsc2UsXG5cdFx0XHRcdH07XG5cblx0XHRcdGlmKCAkZWxlbS5hdHRyKCAnZGF0YS13cG9uaW9uLWlubGluZS1hamF4JyApICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0bGV0ICRmaWQxICA9ICRlbGVtLmF0dHIoICdkYXRhLXdwb25pb24taW5saW5lLWFqYXgnICk7XG5cdFx0XHRcdGxldCAkZmlkMiAgPSAkZWxlbS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdGxldCAkanNfaWQgPSAkd3Bvbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdFx0XHRsZXQgJGFyZ3MgID0ge307XG5cdFx0XHRcdGlmKCAkanNfaWQgKSB7XG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGpzX2lkLCBmYWxzZSApO1xuXHRcdFx0XHRcdGlmKCAkX2FyZ3MuaGFzT3duUHJvcGVydHkoICdpbmxpbmVfYWpheCcgKSAmJiBmYWxzZSAhPT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJF9hcmdzLmlubGluZV9hamF4ICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgIT09ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDEsIGZhbHNlICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDEsIGZhbHNlICk7XG5cdFx0XHRcdFx0aWYoICRfYXJncy5oYXNPd25Qcm9wZXJ0eSggJ2lubGluZV9hamF4JyApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkX2FyZ3MuaW5saW5lX2FqYXggKSApIHtcblx0XHRcdFx0XHRcdCRhcmdzID0gJF9hcmdzLmlubGluZV9hamF4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMiwgZmFsc2UgKSApIHtcblx0XHRcdFx0XHRsZXQgJF9hcmdzID0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMiwgZmFsc2UgKTtcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xuXHRcdFx0XHRcdFx0JGFyZ3MgPSAkX2FyZ3MuaW5saW5lX2FqYXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgtZ2V0JyApIHx8ICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1pbmxpbmUtYWpheC1nZXQnICkgKSB7XG5cdFx0XHRcdFx0JGFyZ3MubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgtcG9zdCcgKSB8fCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24taW5saW5lLWFqYXgtcG9zdCcgKSApIHtcblx0XHRcdFx0XHQkYXJncy5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgnICkgfHwgJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWlubGluZS1hamF4JyApICYmIHR5cGVvZiAkX2RhdGEubWV0aG9kICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy5tZXRob2QgPSAkX2RhdGEubWV0aG9kO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHR5cGVvZiAkX2RhdGEudXJsICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy51cmwgPSAkX2RhdGEudXJsO1xuXHRcdFx0XHR9IGVsc2UgaWYoIHR5cGVvZiAkX2RhdGEuaHJlZiAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJF9kYXRhLmhyZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uYXR0ciggJ2hyZWYnICkgKSB7XG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJGVsZW0uYXR0ciggJ2hyZWYnICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdHlwZW9mICRfZGF0YVsgJ2FqYXgtZGF0YScgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MuZGF0YSA9ICRfZGF0YVsgJ2FqYXgtZGF0YScgXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB0eXBlb2YgJF9kYXRhLmFjdGlvbiAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MuYWN0aW9uID0gJF9kYXRhLmFjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cblx0XHRcdCRfY2xhc3NfaW5zdGFuY2UgPSBuZXcgV1BPbmlvbl9BamF4ZXIoICRhcmdzLCB7XG5cdFx0XHRcdGJ1dHRvbjogJGVsZW0sXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggalF1ZXJ5LCBkb2N1bWVudCApO1xuIiwiLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuaW1wb3J0IHtcblx0Y2FsbF91c2VyX2Z1bmMsXG5cdGlzX2pxdWVyeSxcblx0aXNfd2luZG93X2FyZyxcblx0bWQ1LFxuXHRtaWNyb3RpbWUsXG5cdHJhbmRfbWQ1LFxuXHR0b19qcXVlcnksXG5cdHRvX2pzX2Z1bmMsXG59IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQT25pb24ge1xuXHRzdGF0aWMganNfZnVuYyggJGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRvX2pzX2Z1bmMoICRkYXRhLCAnd3Bvbmlvbl9qc19hcmdzJywgJ3dwb25pb25fanNfY29udGVudHMnICk7XG5cdH1cblxuXHRzdGF0aWMgcmFuZF9pZCgpIHtcblx0XHRyZXR1cm4gbWQ1KCAnd3Bvbmlvbl9yYW5kXycgKyBtaWNyb3RpbWUoKSArIHJhbmRfbWQ1KCkgKTtcblx0fVxuXG5cdHN0YXRpYyB2YWxpZF9qc29uKCBvYmogKSB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2UoIG9iaiApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkSUQoICRlbGVtICkge1xuXHRcdHJldHVybiB0b19qcXVlcnkoICRlbGVtICkuYXR0ciggJ2RhdGEtd3Bvbmlvbi1qc2lkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgRmllbGQgSFRNTCBPYmplY3QgVXNpbmcgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJHdoZXJlX3RvX2ZpbmRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c3RhdGljIElEdG9FbGVtZW50KCAkZWxlbSwgJHdoZXJlX3RvX2ZpbmQgPSBmYWxzZSApIHtcblx0XHRsZXQgJGlkID0gV1BPbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdoZXJlX3RvX2ZpbmQgJiYgaXNfanF1ZXJ5KCAkd2hlcmVfdG9fZmluZCApICkge1xuXHRcdFx0cmV0dXJuICR3aGVyZV90b19maW5kLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIicgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGpRdWVyeSggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiXScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gdmFsdWUgaXMgYW4galF1ZXJ5IGluc3RhbmNlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNGaWVsZCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaXNfanF1ZXJ5KCAkZWxlbSApICkgPyAoIHRoaXMuZmllbGRJRCggJGVsZW0gKSApIDogZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBXaW5kb3cgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIHdpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0cmV0dXJuICggaXNfd2luZG93X2FyZyggJHZhcl9pZCApICkgPyB3aW5kb3dbICR2YXJfaWQgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyAmIFJldHVybnMgRmllbGQgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkQXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHQkdmFyX2lkID0gKCB0aGlzLmlzRmllbGQoICR2YXJfaWQgKSApID8gdGhpcy5maWVsZElEKCAkdmFyX2lkICkgOiAkdmFyX2lkO1xuXHRcdHJldHVybiAoICR2YXJfaWQgKSA/IHdpbmRvdy53cG9uaW9uLl8uY2xvbmUoIHRoaXMud2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgKSApIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hjZWtzIGFuZCByZXR1cm5zIGdsb2JhbCB0cmFuc2xhdGlvbiBzdHJpbmcuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljIHR4dCggJGtleSwgJGRlZmF1bHQgPSAnc3RyaW5nX2RlZmF1bHRfbm90X2ZvdW5kJyApIHtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggV1BPbmlvbi50ZXh0WyAka2V5IF0gKSApID8gV1BPbmlvbi50ZXh0WyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIExvYWRpbmcgU2NyZWVuLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICRpc19zaG93XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGxvYWRpbmdfc2NyZWVuKCAkZWxlbSwgJGlzX3Nob3cgPSB0cnVlICkge1xuXHRcdCRlbGVtID0gdG9fanF1ZXJ5KCAkZWxlbSApLmZpbmQoICcucGFnZS1sb2FkZXInICk7XG5cdFx0aWYoIHRydWUgPT09ICRpc19zaG93ICkge1xuXHRcdFx0cmV0dXJuICRlbGVtLmZhZGVJbiggJ3Nsb3cnICk7XG5cdFx0fVxuXHRcdHJldHVybiAkZWxlbS5mYWRlT3V0KCAnc2xvdycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEdsb2JhbCBEZWJ1ZyBWaWV3IFBPUFVQLlxuXHQgKi9cblx0c3RhdGljIGdsb2JhbF9kZWJ1ZygpIHtcblx0XHRsZXQgJGhhbmRsZSA9IGpRdWVyeSggJ2Eud3Bvbmlvbi1nbG9iYWwtZGVidWctaGFuZGxlJyApLFxuXHRcdFx0JGpzb24gICA9IHt9O1xuXHRcdGlmKCBXUE9uaW9uLmRlYnVnX2luZm8gPT09IG51bGwgJiYgJGhhbmRsZS5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRkZWZpbmVkX3ZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKTtcblx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkZGVmaW5lZF92YXJzICkgKSB7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGRlZmluZWRfdmFycyApIHtcblx0XHRcdFx0XHRpZiggJGRlZmluZWRfdmFycy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRcdCRqc29uWyAkZGVmaW5lZF92YXJzWyAka2V5IF0gXSA9IFdQT25pb24ud2luZG93QXJncyggJGRlZmluZWRfdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFdQT25pb24uZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCRoYW5kbGUub24oICdjbGljaycsICggKCBlICkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3dhbCgge1xuXHRcdFx0XHR0aXRsZTogV1BPbmlvbi50eHQoICdnbG9iYWxfanNvbl9vdXRwdXQnLCAnR2xvYmFsIFdQT25pb24gRGVidWcgRGF0YScgKSxcblx0XHRcdFx0aHRtbDogalF1ZXJ5KCAnI3dwb25pb25kZWJ1Z2luZm9wb3B1cCA+IGRpdicgKSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBXUE9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdHZXQgSlNPTiBPdXRwdXQnICksXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICgpID0+IHN3YWwuZW5hYmxlTG9hZGluZygpLFxuXHRcdFx0XHRvbk9wZW46ICgpID0+IHtcblx0XHRcdFx0XHRqUXVlcnkoICcjc3dhbDItY29udGVudCAjd3Bvbmlvbi1nbG9iYWwtZGVidWctY29udGVudCcgKS5qc29uVmlldyggV1BPbmlvbi5kZWJ1Z19pbmZvICk7XG5cdFx0XHRcdFx0c3dhbC5kaXNhYmxlTG9hZGluZygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBzd2FsKCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoIFdQT25pb24uZGVidWdfaW5mbyApICsgJzwvdGV4dGFyZWE+Jyxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgYW5kIFJldHJpdmVzIFZhbHVlcyBmcm9tICR3cG9uaW9uLnNldHRpbmdzXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBvcHRpb24oICRrZXksICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gV1BPbmlvbi5zZXR0aW5nc19hcmdzO1xuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkge1xuXHRcdFx0cmV0dXJuICRhcmdzWyAka2V5IF07XG5cdFx0fVxuXHRcdHJldHVybiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgV1BPbmlvbiBEZWJ1ZyBpcyBlbmFibGVkLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc19kZWJ1ZygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdkZWJ1ZycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXIgQWxsIEZpZWxkIEpTIENvZGVzLlxuXHQgKi9cblx0c3RhdGljIGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBXUE9uaW9uLmlzX2RlYnVnKCkgJiYgd2luZG93Lndwb25pb24uXy5pc051bGwoIFdQT25pb24uZmllbGRfZGVidWdfaW5mbyApICkge1xuXHRcdFx0bGV0ICR2YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICksXG5cdFx0XHRcdCRqc29uID0ge30sXG5cdFx0XHRcdCR1dHh0ID0gV1BPbmlvbi50eHQoICd1bm1vZGlmaWVkX2RlYnVnJyApLFxuXHRcdFx0XHQkbXR4dCA9IFdQT25pb24udHh0KCAnbW9kaWZpZWRfZGVidWcnICk7XG5cblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHZhcnMgKSB7XG5cdFx0XHRcdGlmKCAkdmFycy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRkYXRhICAgICAgICAgICAgICAgICAgICAgICA9IFdQT25pb24ud2luZG93QXJncyggJHZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF0gICAgICAgICAgPSB7fTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkdXR4dCBdID0gJGRhdGEuZGVidWdfaW5mbyB8fCAkZGF0YTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkbXR4dCBdID0ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFdQT25pb24uZmllbGRfZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDdXN0b20gQWpheCBXcmFwcGVyIEZvciBqUXVlcnkuQWpheCgpXG5cdCAqIEBwYXJhbSAkYWN0aW9uXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKiBAcGFyYW0gJG9uU3VjY2Vzc1xuXHQgKiBAcGFyYW0gJG9uRXJyb3Jcblx0ICogQHBhcmFtICRvbkFsd2F5c1xuXHQgKi9cblx0c3RhdGljIGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSwgJG9uU3VjY2VzcyA9IGZhbHNlLCAkb25FcnJvciA9IGZhbHNlLCAkb25BbHdheXMgPSBmYWxzZSApIHtcblx0XHRsZXQgJGRlZmF1bHRzID0ge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHR1cmw6IFdQT25pb24ub3B0aW9uKCAnYWpheF91cmwnICksXG5cdFx0XHRvblN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0b25BbHdheXM6IGZhbHNlLFxuXHRcdFx0b25FcnJvcjogZmFsc2UsXG5cdFx0fTtcblxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkYWN0aW9uICkgKSB7XG5cdFx0XHQkZGF0YSA9ICRhY3Rpb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRkZWZhdWx0cy51cmwgKz0gJyYnICsgV1BPbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICkgKyAnPScgKyAkYWN0aW9uO1xuXHRcdH1cblxuXHRcdCRkZWZhdWx0cyAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkZGVmYXVsdHMsICRkYXRhICk7XG5cdFx0JG9uU3VjY2VzcyA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG9uU3VjY2VzcyApIHx8IGZhbHNlID09PSAkb25TdWNjZXNzICkgPyAkZGVmYXVsdHMub25TdWNjZXNzIDogJG9uU3VjY2Vzcztcblx0XHQkb25BbHdheXMgID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkb25FcnJvciApIHx8IGZhbHNlID09PSAkb25FcnJvciApID8gJGRlZmF1bHRzLm9uQWx3YXlzIDogJG9uQWx3YXlzO1xuXHRcdCRvbkVycm9yICAgPSAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRvbkFsd2F5cyApIHx8IGZhbHNlID09PSAkb25BbHdheXMgKSA/ICRkZWZhdWx0cy5vbkVycm9yIDogJG9uRXJyb3I7XG5cdFx0bGV0ICRhamF4ICA9IGpRdWVyeS5hamF4KCAkZGVmYXVsdHMgKTtcblxuXG5cdFx0aWYoICRvblN1Y2Nlc3MgKSB7XG5cdFx0XHQkYWpheC5kb25lKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25TdWNjZXNzLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25FcnJvciApIHtcblx0XHRcdCRhamF4LmZhaWwoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkVycm9yLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25BbHdheXMgKSB7XG5cdFx0XHQkYWpheC5hbHdheXMoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkFsd2F5cywgcmVzICkgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRhamF4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgV1BPbmlvbiBUZW1wbGF0ZSBmb3IgdW5kZXJzY29yZS5cblx0ICogQHBhcmFtICRpZFxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0pOiAqfVxuXHQgKi9cblx0c3RhdGljIHRlbXBsYXRlKCAkaWQgKSB7XG5cdFx0bGV0IGNvbXBpbGVkLFxuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZXZhbHVhdGU6IC88IyhbXFxzXFxTXSs/KSM+L2csXG5cdFx0XHRcdGludGVycG9sYXRlOiAvXFx7XFx7XFx7KFtcXHNcXFNdKz8pXFx9XFx9XFx9L2csXG5cdFx0XHRcdGVzY2FwZTogL1xce1xceyhbXlxcfV0rPylcXH1cXH0oPyFcXH0pL2csXG5cdFx0XHRcdHZhcmlhYmxlOiAnZGF0YSdcblx0XHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0XHRjb21waWxlZCA9IGNvbXBpbGVkIHx8IHdpbmRvdy53cG9uaW9uLl8udGVtcGxhdGUoICRpZCwgb3B0aW9ucyApO1xuXHRcdFx0cmV0dXJuIGNvbXBpbGVkKCBkYXRhICk7XG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBzdWJtZW51X2luZGljYXRvciggJGVsZW1zICkge1xuXHRcdCRlbGVtcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0ICR0b2dnbGUgICA9IGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnZGF0YS10b2dnbGUtY2xhc3MnICk7XG5cdFx0XHRcdGxldCAkZXhfY2xhc3MgPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2NsYXNzJyApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2NsYXNzJywgJHRvZ2dsZSApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2RhdGEtdG9nZ2xlLWNsYXNzJywgJGV4X2NsYXNzICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly9AdG9kbyBNaWdyYXRlIFBsdWdpbiBEZWJ1ZyBJbmZvLlxufVxuIiwiLyoqXG4gKiBTaW1wbGUgRGVidWcgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0c3RhdGljIGFkZCggJGtleSwgJHZhbHVlICkge1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSAkdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJHZhbHVlLCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXQoICRrZXksICRkZWZhdWx0ID0gZmFsc2UgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApID8gJGRlZmF1bHQgOiB0aGlzLmRlYnVnX2luZm9bICRrZXkgXTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9oZWxwZXJzL2RlcGVuZGVuY3knO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkZWxlbWVudCA9IHVuZGVmaW5lZCwgcGFyYW0gPSB7fSApIHtcblx0XHR0aGlzLnBhcmFtID0gd2luZG93LndpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHsgbmVzdGFibGU6IGZhbHNlLCBwYXJlbnQ6IGZhbHNlIH0sIHBhcmFtICk7XG5cblx0XHRsZXQgJHRoaXMgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuYmFzZSAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuYmFzZS4kZWwgICAgICA9ICRlbGVtZW50O1xuXHRcdHRoaXMuYmFzZS5pbml0ICAgICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS5ydWxlc2V0ID0galF1ZXJ5LmRlcHMuY3JlYXRlUnVsZXNldCgpO1xuXHRcdFx0dGhpcy5iYXNlLmRlcFJvb3QoKTtcblx0XHRcdGpRdWVyeS5kZXBzLmVuYWJsZSggdGhpcy5iYXNlLiRlbCwgdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0c2hvdzogKCBlbCApID0+IHtcblx0XHRcdFx0XHRlbC5zbGlkZURvd24oKTtcblx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhpZGU6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0ZWwuc2xpZGVVcCgpO1xuXHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkuYWRkQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0bG9nOiBmYWxzZSxcblx0XHRcdFx0Y2hlY2tUYXJnZXRzOiBmYWxzZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbnN0YW5jZSA9IFtdO1xuXHRcdHRoaXMuYmFzZS5kZXBSb290ICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS4kZWwuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1oYXMtZGVwZW5kZW5jeScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5iYXNlLmluc3RhbmNlID0gbmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksICR0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRcdFx0bmVzdGFibGU6ICR0aGlzLnBhcmFtLm5lc3RhYmxlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiAoIHRydWUgPT09ICR0aGlzLnBhcmFtLm5lc3RhYmxlICkgPyAkdGhpcy5iYXNlLiRlbCA6ICR0aGlzLnBhcmFtLnBhcmVudCxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5iYXNlLmluaXQoKTtcblx0fVxufVxuIiwiLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGU6dHJ1ZSAqL1xuY29uc3QgaXNfanF1ZXJ5ID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfanF1ZXJ5O1xuXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuL2RlYnVnJztcbmltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuL21vZHVsZSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0aW9uIGZyb20gJy4uL2NvcmUvdmFsaWRhdGlvbic7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBBYnN0cmFjdCBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0LCAkY29uZmlnID0gbnVsbCApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udGV4dCApO1xuXHRcdHRoaXMuc2V0X2FyZ3MoIGZhbHNlICk7XG5cdFx0dGhpcy5maWVsZF9kZWJ1ZygpO1xuXHRcdHRoaXMuY29uZmlnID0gJGNvbmZpZztcblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmpzX2Vycm9yX2hhbmRsZXIoKTtcblx0XHR0aGlzLmpzX3ZhbGlkYXRvcigpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0fVxuXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdH1cblxuXHRqc19lcnJvcl9oYW5kbGVyKCBlbGVtZW50ID0gdGhpcy5lbGVtZW50ICkge1xuXHRcdGVsZW1lbnQub24oICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsICc+IC53cG9uaW9uLWZpZWxkc2V0IDppbnB1dCcsICggZSwgZGF0YSApID0+IHRoaXMuanNfZXJyb3IoIGRhdGEgKSApO1xuXHR9XG5cblx0anNfdmFsaWRhdG9yKCkge1xuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSApIHtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSB7XG5cdFx0XHRcdHRoaXMubWF5YmVfanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApO1xuXHRcdH1cblx0fVxuXG5cdGpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnOmlucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlX2FyZ3MoICRhcmcsICRrZXkgPSBmYWxzZSApIHtcblx0XHRsZXQgJGFyZ3MgICA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKSxcblx0XHRcdCRleGlzdHMgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0JGV4aXN0cyAgICAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0sICRleGlzdHMgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGtleSApIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdID0gJGFyZ3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdWyAka2V5IF0gPSAkYXJncztcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksICRleGlzdHMgKTtcblx0XHRyZXR1cm4gJGFyZ3M7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggZmFsc2UgIT09ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0ICRpbmZvID0gdGhpcy5vcHRpb24oICdkZWJ1Z19pbmZvJyApO1xuXG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkaW5mbyApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzRW1wdHkoICRpbmZvICkgKSB7XG5cdFx0XHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6ICRpbmZvLCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgJGZvdW5kID0gZmFsc2U7XG5cdFx0aWYoICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0bGV0ICRJRCAgID0gdGhpcy5pZCgpLFxuXHRcdFx0XHQkZWxlbSA9IGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9JyArICRJRCArICddJyApO1xuXHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdFx0JGZvdW5kID0gJGVsZW07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRmb3VuZCA9IHRoaXMuZWxlbWVudDtcblx0XHR9XG5cblx0XHRpZiggZmFsc2UgIT09ICRmb3VuZCApIHtcblx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApXG5cdFx0XHRcdCAgLnRpcHB5KCB7XG5cdFx0XHRcdFx0ICBjb250ZW50OiAkd3Bvbmlvbi50eHQoICdjbGlja190b192aWV3X2RlYnVnX2luZm8nLCAnQ2xpY2sgVG8gVmlldyBGaWVsZCBEZWJ1ZyBJbmZvJyApLFxuXHRcdFx0XHRcdCAgYXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0ICBhcnJvd1R5cGU6ICdyb3VuZCcsXG5cdFx0XHRcdFx0ICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHRcdCAgdGhlbWU6ICdsaWdodCcsXG5cdFx0XHRcdFx0ICBhbmltYXRpb246ICdzY2FsZSdcblx0XHRcdFx0ICB9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZCAgICAgICAgICA9ICR0aGlzLmlkKCkgKyAnZGVidWdJTkZPJyxcblx0XHRcdFx0XHQkbm90aWNlX3R4dCA9ICc8cCBjbGFzcz1cXCd3cG9uaW9uLWZpZWxkLWRlYnVnLW5vdGljZVxcJz4nICsgJHdwb25pb24ub3B0aW9uKCAnZGVidWdfbm90aWNlJyApICsgJzwvcD4nLFxuXHRcdFx0XHRcdCRlbGVtICAgICAgID0galF1ZXJ5KCAnPGRpdiBpZD1cIicgKyAkZCArICdcIiBjbGFzcz1cIndwb25pb24tZmllbGQtZGVidWctcG9wdXBcIiA+PGRpdiBpZD1cIicgKyAkZCArICdcIiA+PC9kaXY+JyArICRub3RpY2VfdHh0ICsgJzwvZGl2PicgKTtcblx0XHRcdFx0bGV0ICRkYXRhICAgICAgID0gJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICk7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRodG1sOiAkZWxlbSxcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogJHdwb25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0FzIEpTT04nICksXG5cdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRvbk9wZW46ICgpID0+IGpRdWVyeSggJyNzd2FsMi1jb250ZW50ID4gZGl2ID4gIycgKyAkZCApLmpzb25WaWV3KCAkZGF0YSApXG5cdFx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICkgKSArICc8L3RleHRhcmVhPidcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0IC53cG9uaW9uLWZpZWxkLWRlYnVnLWNvZGUtZ2VuJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRodG1sOiB0aGlzLm9wdGlvbiggJ2RlYnVnX2ZpZWxkX2NvZGUnICksXG5cdFx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdGhlaWdodEF1dG86IGZhbHNlLFxuXHRcdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0b3B0aW9ucygpIHtcblx0XHRpZiggdGhpcy5fYXJncyA9PT0gZmFsc2UgKSB7XG5cdFx0XHR0aGlzLl9hcmdzID0gJHdwb25pb24ud2luZG93QXJncyggdGhpcy5pZCgpICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9hcmdzO1xuXHR9XG5cblx0b3B0aW9uKCAka2V5ID0gJycsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gdGhpcy5vcHRpb25zKCk7XG5cdFx0cmV0dXJuICggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApID8gJGFyZ3NbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0aWQoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApO1xuXHR9XG5cblx0bW9kdWxlKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ21vZHVsZScsIGZhbHNlICk7XG5cdH1cblxuXHRwbHVnaW5faWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAncGx1Z2luX2lkJywgZmFsc2UgKTtcblx0fVxuXG5cdGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSApIHtcblx0XHRsZXQgJGFqYXhfa2V5ICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICk7XG5cdFx0bGV0ICRkZWZhdWx0ICAgICAgICAgID0ge1xuXHRcdFx0cGx1Z2luX2lkOiB0aGlzLnBsdWdpbl9pZCgpLFxuXHRcdFx0bW9kdWxlOiB0aGlzLm1vZHVsZSgpLFxuXHRcdH07XG5cdFx0JGRlZmF1bHRbICRhamF4X2tleSBdID0gJGFjdGlvbjtcblx0XHQkZGF0YS5kYXRhICAgICAgICAgICAgPSAoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkZGF0YS5kYXRhICkgKSA/IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICRkZWZhdWx0LCAkZGF0YS5kYXRhICkgOiAkZGVmYXVsdDtcblxuXHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAkZGF0YSApO1xuXHR9XG5cblx0aW5pdF9maWVsZCggJGVsZW0sICR0eXBlICkge1xuXHRcdGlmKCAhaXNfanF1ZXJ5KCAkZWxlbSApICkge1xuXHRcdFx0JGVsZW0gPSB0aGlzLmVsZW1lbnQuZmluZCggJGVsZW0gKTtcblx0XHR9XG5cblx0XHQkZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5ob29rcy5oYXNBY3Rpb24oICd3cG9uaW9uX2luaXRfZmllbGRfJyArICR0eXBlICkgKSB7XG5cdFx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0X2ZpZWxkXycgKyAkdHlwZSwgalF1ZXJ5KCB0aGlzICkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdXUE9uaW9uIEZpZWxkIFR5cGUgOiAnICsgJHR5cGUgKyAnIEluaXQgRnVuY3Rpb24gTm90IEZvdW5kJywgJ1xcbkFjdGlvbiBVc2VkIDogd3Bvbmlvbl9pbml0X2ZpZWxkXycgKyAkdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdHJlbG9hZCgpIHtcblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19yZWxvYWQnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWFjY29yZGlvbicsICdhY2NvcmRpb24nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1iYWNrZ3JvdW5kJywgJ2JhY2tncm91bmQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1iYWNrdXAnLCAnYmFja3VwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2hlY2tib3gnLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1yYWRpbycsICdjaGVja2JveF9yYWRpbycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNsb25lJywgJ2Nsb25lX2VsZW1lbnQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9wYWxldHRlJywgJ2NvbG9yX3BhbGV0dGUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9waWNrZXInLCAnY29sb3JfcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc2VsZWN0JywgJ3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWljb25fcGlja2VyJywgJ2ljb25fcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZm9udF9waWNrZXInLCAnZm9udF9zZWxlY3RvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdyb3VwJywgJ2dyb3VwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dDpub3QoLndwb25pb24taW5wdXRtYXNrKScsICd0ZXh0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dGFyZWEnLCAndGV4dGFyZWEnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pbWFnZV9zZWxlY3QnLCAnaW1hZ2Vfc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3dpdGNoZXInLCAnc3dpdGNoZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InLCAnd3BfZWRpdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZmllbGRzZXQnLCAnZmllbGRzZXQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnaW5wdXRbZGF0YS13cG9uaW9uLWlucHV0bWFza10nLCAnaW5wdXRtYXNrJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfbGluaycsICd3cF9saW5rcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWtleV92YWx1ZScsICdrZXl2YWx1ZV9wYWlyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZGF0ZV9waWNrZXInLCAnZGF0ZV9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nYWxsZXJ5JywgJ2dhbGxlcnknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC11cGxvYWQnLCAndXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2UnLCAnaW1hZ2VfdXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGFiJywgJ2pxdWVyeV90YWInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZmllbGQtdG9vbHRpcCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ29vZ2xlX21hcHMnLCAnZ29vZ2xlX21hcHMnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24taGVscCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLXdyYXAtdG9vbHRpcCcsICdmaWVsZF90b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3QyJywgJ3NlbGVjdDInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLmNob3NlbicsICdjaG9zZW4nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdGl6ZScsICdzZWxlY3RpemUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zb3J0ZXInLCAnc29ydGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdHlwb2dyYXBoeScsICd0eXBvZ3JhcGh5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtb2VtYmVkJywgJ29lbWJlZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWhlYWRpbmcnLCAnaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN1YmhlYWRpbmcnLCAnc3ViaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbnRlbnQnLCAnY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWphbWJvX2NvbnRlbnQnLCAnamFtYm9fY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW5vdGljZScsICdub3RpY2UnICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfZmllbGRzX3JlbG9hZCcgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldF9hcmdzKCAkYXJncyApIHtcblx0XHR0aGlzLl9hcmdzID0gJGFyZ3M7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRfZmllbGRfcGFyZW50X2J5X2lkKCAkZWxlbSApIHtcblx0XHRsZXQgJElEID0gJHdwb25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRyZXR1cm4galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkSUQgKyAnXCJdJyApO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0ICkge1xuXHRcdGlmKCAhJHNlbGVjdG9yLmpRdWVyeSApIHtcblx0XHRcdCRzZWxlY3RvciA9IGpRdWVyeSggJHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0X2VsZW1lbnQoICRzZWxlY3RvciApO1xuXHRcdHRoaXMuc2V0X2NvbnR4dCggJGNvbnRleHQgKTtcblx0XHR0aGlzLm1vZHVsZV9pbml0KCk7XG5cdH1cblxuXHRtb2R1bGVfaW5pdCgpIHtcblx0fVxuXG5cdHNldF9lbGVtZW50KCAkZWxlbSApIHtcblx0XHRpZiggISRlbGVtLmpRdWVyeSApIHtcblx0XHRcdCRlbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdH1cblx0XHR0aGlzLmVsZW0gPSAkZWxlbTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldF9jb250eHQoICRjb250eHQgKSB7XG5cdFx0dGhpcy5jb250ZXh0ID0gJGNvbnR4dDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldCBob29rKCkge1xuXHRcdHJldHVybiB3aW5kb3cud3Bvbmlvbi5ob29rcztcblx0fVxuXG5cdGdldCBlbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW07XG5cdH1cblxuXHRnZXQgY29udHh0KCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHQ7XG5cdH1cblxufVxuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbl9WYWxpZGF0b3Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmZvcm0gID0gV1BPbmlvbl9WYWxpZGF0b3IuZ2V0X2Zvcm0oKTtcblx0XHR0aGlzLnJ1bGVzID0ge1xuXHRcdFx0aW52YWxpZEhhbmRsZXI6ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnI3B1Ymxpc2gnICkucmVtb3ZlQ2xhc3MoICdidXR0b24tcHJpbWFyeS1kaXNhYmxlZCcgKTtcblx0XHRcdFx0alF1ZXJ5KCAnI2FqYXgtbG9hZGluZycgKS5hdHRyKCAnc3R5bGUnLCAnJyApO1xuXHRcdFx0XHR0aGlzLmZvcm0uc2libGluZ3MoICcjbWVzc2FnZScgKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5mb3JtLmJlZm9yZSggJzxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJlcnJvclwiPjxwPicgKyAkd3Bvbmlvbi50eHQoICd2YWxpZGF0aW9uX3N1bW1hcnknICkgKyAnPC9wPjwvZGl2PicgKTtcblx0XHRcdH0sXG5cdFx0XHRpZ25vcmU6ICcud3Bvbmlvbi1kZXBlbmRlbnQsLndwb25pb24tdmFsaWRhdGlvbi1pZ25vcmUnLFxuXHRcdFx0ZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKCBlcnJvciwgZWxlbWVudCApIHtcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCB7IGVycm9yLCBlbGVtZW50IH0gKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvckNsYXNzOiAnd3Bvbmlvbi1lcnJvcicsXG5cdFx0XHRlcnJvckVsZW1lbnQ6ICdwJ1xuXHRcdH07XG5cdFx0aWYoIHRoaXMuZm9ybSApIHtcblx0XHRcdHRoaXMuZm9ybS52YWxpZGF0ZSggdGhpcy5ydWxlcyApO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXRfZm9ybSgpIHtcblx0XHRpZiggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSN1cGRhdGUtbmF2LW1lbnUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3VwZGF0ZS1uYXYtbWVudScgKTtcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZm9ybSNwb3N0JyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS5sZW5ndGggPiAwICYmIGpRdWVyeSggJ2lucHV0I29yaWdpbmFsX3B1Ymxpc2gnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3Bvc3QnICk7XG5cdFx0fVxuXG5cblx0XHRyZXR1cm4gKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkgPyBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKSA6IGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oIHtcclxuXHRcdFx0XHRoZWFkZXI6ICc+IC53cG9uaW9uLWFjY29yZGlvbi10aXRsZScsXHJcblx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXHJcblx0XHRcdFx0YW5pbWF0ZTogMTUwLFxyXG5cdFx0XHRcdGhlaWdodFN0eWxlOiAnY29udGVudCcsXHJcblx0XHRcdFx0aWNvbnM6IHtcclxuXHRcdFx0XHRcdCdoZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1yaWdodCcsXHJcblx0XHRcdFx0XHQnYWN0aXZlSGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctZG93bidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdGlmKCAhalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdpc19vcGVuJyApICkge1xyXG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFjY29yZGlvbiggJ29wdGlvbicsICdhY3RpdmUnLCBmYWxzZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRqc19lcnJvciggZXJyICkge1xyXG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcclxuXHRcdGlmKCAkZWxlbSApIHtcclxuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnYWNjb3JkaW9uJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdiYWNrZ3JvdW5kJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLnRvb2x0aXAoKTtcclxuXHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4ge1xyXG5cdFx0XHR0aGlzLmhhbmRsZV9iYWNrdXBfaW1wb3J0KCBlLmN1cnJlbnRUYXJnZXQgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2EuZG93bmxvYWRfYmFja3VwJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGxldCAkZmlsZSA9IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICk7XHJcblx0XHRcdCRmaWxlICAgICA9ICRmaWxlICsgJy0nICsgdGhpcy5tb2R1bGUoKTtcclxuXHRcdFx0bGV0IGRhdGUgID0gbmV3IERhdGUoKTtcclxuXHRcdFx0bGV0IHN0ciAgID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgKCBkYXRlLmdldE1vbnRoKCkgKyAxICkgKyAnLScgKyBkYXRlLmdldERhdGUoKSArICctJyArIGRhdGUuZ2V0SG91cnMoKSArIGRhdGUuZ2V0TWludXRlcygpICsgZGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdCRmaWxlICAgICA9ICRmaWxlICsgJy0nICsgc3RyO1xyXG5cdFx0XHR0aGlzLmZvcmNlX2Rvd25sb2FkKCBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfdGV4dGFyZWEgdGV4dGFyZWEnICkuaHRtbCgpICksICRmaWxlICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdhLm5ld19iYWNrdXAgJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xyXG5cdFx0XHR0aGlzLmFqYXgoICduZXctbW9kdWxlLWRhdGEtYmFja3VwJywge1xyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcclxuXHRcdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XHJcblx0XHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoIHRydWUgKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzJyApLmh0bWwoIGUuZGF0YSApO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRvbkFsd2F5czogKCkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy5kZWxldGVfYmFja3VwJywgKCBlICkgPT4ge1xyXG5cdFx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcclxuXHRcdFx0bGV0ICRpbnMgPSBqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5kZWxldGVfYmFja3VwJyApLnRpcHB5X2dldCgpO1xyXG5cdFx0XHRpZiggJGlucy5pbnN0YW5jZXNbIDAgXSApIHtcclxuXHRcdFx0XHQkaW5zLmluc3RhbmNlc1sgMCBdLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmFqYXgoICdkZWxldGUtbW9kdWxlLWRhdGEtYmFja3VwJywge1xyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcclxuXHRcdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxyXG5cdFx0XHRcdFx0YmFja3VwX2lkOiBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XHJcblx0XHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoIHRydWUgKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzJyApLmh0bWwoIGUuZGF0YSApO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRvbkFsd2F5czogKCkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy5yZXN0b3JlX2JhY2t1cCcsICggZSApID0+IHtcclxuXHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2JsdXInLCAnLnJlc3RvcmVfdGV4dGFyZWEgdGV4dGFyZWEnLCAoIGUgKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSApICk7XHJcblx0XHRcdFx0alF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoICcnICkuaHRtbCggJycgKTtcclxuXHRcdFx0fSBjYXRjaCggZXJyb3IgKSB7XHJcblx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCB0aGlzLm9wdGlvbiggJ2ludmFsaWRfZm9ybWF0JyApICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHN3YWxfZXJyb3IoIG1zZyApIHtcclxuXHRcdHN3YWwoIHtcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0dGl0bGU6IG1zZ1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0dG9vbHRpcCggcmVtb3ZlID0gZmFsc2UgKSB7XHJcblx0XHRsZXQgJHRoaXMgPSB0aGlzO1xyXG5cdFx0aWYoIHRydWUgPT09IHJlbW92ZSApIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzIGxpJyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCAkZWxlbSA9IGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGEnIClbIDAgXTtcclxuXHRcdFx0XHQkZWxlbS5fdGlwcHkuZGVzdHJveSgpO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMgbGknICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHRoaXMuc2hvd190b29sdGlwKCBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPmEnICkgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YmxvY2tfZm9ybSgpIHtcclxuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLmF0dHIoICdkaXNhYmxlZCcsICdkaXNhYmxlZCcgKTtcclxuXHR9XHJcblxyXG5cdHVuYmxvY2tfZm9ybSgpIHtcclxuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLnJlbW92ZUF0dHIoICdkaXNhYmxlZCcgKTtcclxuXHR9XHJcblxyXG5cdGZvcmNlX2Rvd25sb2FkKCBleHBvcnRPYmosIGV4cG9ydE5hbWUgKSB7XHJcblx0XHR2YXIgZGF0YVN0ciAgICAgICAgICAgID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudCggSlNPTi5zdHJpbmdpZnkoIGV4cG9ydE9iaiApICk7XHJcblx0XHR2YXIgZG93bmxvYWRBbmNob3JOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2EnICk7XHJcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCAnaHJlZicsIGRhdGFTdHIgKTtcclxuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoICdkb3dubG9hZCcsIGV4cG9ydE5hbWUgKyAnLmpzb24nICk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkb3dubG9hZEFuY2hvck5vZGUgKTsgLy8gcmVxdWlyZWQgZm9yIGZpcmVmb3hcclxuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5jbGljaygpO1xyXG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblx0cmVzdG9yZV9iYWNrdXAoIGJhY2t1cF9pZCApIHtcclxuXHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xyXG5cdFx0dGhpcy5hamF4KCAncmVzdG9yZS1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXHJcblx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXHJcblx0XHRcdFx0YmFja3VwX2lkOiBiYWNrdXBfaWQsXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xyXG5cdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRzd2FsKCB7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGUuZGF0YSxcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlX2JhY2t1cF9pbXBvcnQoICRlbGVtICkge1xyXG5cdFx0aWYoICRlbGVtLmZpbGVzICYmICRlbGVtLmZpbGVzWyAwIF0gKSB7XHJcblx0XHRcdGxldCAkZmlsZSA9ICRlbGVtLmZpbGVzWyAwIF07XHJcblxyXG5cdFx0XHRpZiggJGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL2pzb24nICkge1xyXG5cdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggdGhpcy5vcHRpb24oICdpbnZhbGlkX2Zvcm1hdCcgKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgcmVhZGVyICAgID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdFx0XHRyZWFkZXIub25sb2FkID0gKCBlICkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggZS50YXJnZXQucmVzdWx0ICkgKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCAkZmlsZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaG93X3Rvb2x0aXAoICRlbGVtICkge1xyXG5cdFx0bGV0ICRiYWNrdXBpZCA9ICRlbGVtLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApO1xyXG5cdFx0dGlwcHkoICRlbGVtWyAwIF0sIHtcclxuXHRcdFx0YXJyb3c6IHRydWUsXHJcblx0XHRcdGFwcGVuZFRvOiB0aGlzLmVsZW1lbnRbIDAgXSxcclxuXHRcdFx0YXJyb3dUeXBlOiAncm91bmQnLFxyXG5cdFx0XHRjb250ZW50OiAnPGJ1dHRvbiBkYXRhLWJhY2t1cGlkPVwiJyArICRiYWNrdXBpZCArICdcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZXN0b3JlX2JhY2t1cCBidXR0b24gYnV0dG9uLXNlY29uZGFyeSBidXR0b24tc21hbGxcIj48aSBjbGFzcz1cImRhc2hpY29ucy1pbWFnZS1yb3RhdGUgZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4gfCA8YnV0dG9uIGRhdGEtYmFja3VwaWQ9XCInICsgJGJhY2t1cGlkICsgJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZV9iYWNrdXAgYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNtYWxsXCI+PGkgY2xhc3M9XCJkYXNoaWNvbnMtdHJhc2ggZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4nLFxyXG5cdFx0XHRpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuXHRcdFx0dGhlbWU6ICd0cmFuc2x1Y2VudCcsXHJcblx0XHRcdG9uU2hvd246ICgpID0+IHtcclxuXHRcdFx0XHRqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5kZWxldGVfYmFja3VwJyApLnRpcHB5KCB7XHJcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdGFycm93VHlwZTogJ3NraW5ueScsXHJcblx0XHRcdFx0XHRjb250ZW50OiAkd3Bvbmlvbi50eHQoICdkZWxldGUnICksXHJcblx0XHRcdFx0XHR0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXHJcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0alF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAucmVzdG9yZV9iYWNrdXAnICkudGlwcHkoIHtcclxuXHRcdFx0XHRcdGFycm93OiB0cnVlLFxyXG5cdFx0XHRcdFx0YXJyb3dUeXBlOiAnc2tpbm55JyxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ3Jlc3RvcmUnICksXHJcblx0XHRcdFx0XHR0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXHJcblx0XHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Z2V0X2V4dHJhX3ZhbHVlKCkge1xyXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jcG9zdCBpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA9PT0gMSApIHtcclxuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jcG9zdCBpbnB1dCNwb3N0X0lEJyApLnZhbCgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnYmFja3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0aW5pdCgpIHtcclxuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0Lndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdGxldCAkaW5wdXRzID0gdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dFt0eXBlPXJhZGlvXScgKS5vbiggJ2NsaWNrJywgKCkgPT4gJGlucHV0cy5yZW1vdmVBdHRyKCAnbmFtZScgKSApO1xyXG5cclxuXHRcdFx0JGlucHV0cy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dLGlucHV0W3R5cGU9Y2hlY2tib3hdJyApLnByb3AoICdjaGVja2VkJywgdHJ1ZSApO1xyXG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdjaGVja2JveF9yYWRpbycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuXHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5lbGVtZW50LmNob3NlbiggdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjaG9zZW4nLCB7fSApICkgKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0ZmllbGRfZGVidWcoKSB7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdjaG9zZW4nLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5cclxuLyogZ2xvYmFsIHdwb25pb25fZmllbGQ6dHJ1ZSAqL1xyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJGFyZyAgICAgICAgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ2Nsb25lJywge30gKSApO1xyXG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcclxuXHRcdFx0JGVsZW0gICAgICAgPSAkdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkY2xvbmVfd3JhcCA9ICRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1jbG9uZS13cmFwJyApLFxyXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLWFkZF0nICksXHJcblx0XHRcdC8vJHJlbW92ZV9idG4gPSAkY2xvbmVfd3JhcC5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1yZW1vdmVdJyApLFxyXG5cdFx0XHQkbGltaXQgICAgICA9ICggJGFyZy5saW1pdCAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLmxpbWl0IDogZmFsc2UsXHJcblx0XHRcdC8vJGlzX3RvYXN0ICAgPSAoICRhcmcudG9hc3RfZXJyb3IgIT09IHVuZGVmaW5lZCApID8gJGFyZy50b2FzdF9lcnJvciA6IHRydWUsXHJcblx0XHRcdCRlcm9yX21zZyAgID0gJGFyZy5lcnJvcl9tc2csXHJcblx0XHRcdCRzb3J0ICAgICAgID0gKCAkYXJnLnNvcnQgIT09IGZhbHNlICkgPyB7XHJcblx0XHRcdFx0aXRlbXM6ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXHJcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tZmllbGQtY2xvbmUtc29ydGVyJyxcclxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tY2xvbmVyLXBsYWNlaG9sZGVyJyxcclxuXHRcdFx0XHRzdGFydDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICksXHJcblx0XHRcdFx0c3RvcDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKSxcclxuXHRcdFx0fSA6IGZhbHNlO1xyXG5cclxuXHRcdCRjbG9uZV93cmFwLldQT25pb25DbG9uZXIoIHtcclxuXHRcdFx0YWRkX2J0bjogJGFkZF9idG4sXHJcblx0XHRcdGxpbWl0OiAkbGltaXQsXHJcblx0XHRcdGNsb25lX2VsZW06ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXHJcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1jbG9uZS1hY3Rpb24gPiAud3Bvbmlvbi1yZW1vdmUnLFxyXG5cdFx0XHR0ZW1wbGF0ZTogJHRoaXMub3B0aW9uKCAnY2xvbmVfdGVtcGxhdGUnICksXHJcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGUgKSA9PiB3cG9uaW9uX2ZpZWxkKCAkZS5maW5kKCAnPiBkaXYud3Bvbmlvbi1maWVsZC1jbG9uZTpsYXN0LWNoaWxkJyApICkucmVsb2FkKCksXHJcblx0XHRcdHNvcnRhYmxlOiAkc29ydCxcclxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKCAkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmxlbmd0aCA9PT0gMCApIHtcclxuXHRcdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLnByZXBlbmQoIGpRdWVyeSggJGVyb3JfbXNnICkuaGlkZSgpICk7XHJcblx0XHRcdFx0XHQkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xyXG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fbm90aWNlKCAkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0LCBkaXYubm90aWNlJyApICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93X2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLnNob3csXHJcblx0XHRcdGhpZGVfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuaGlkZSxcclxuXHRcdH0gKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlbmRlcl9maWVsZCggJ2Nsb25lX2VsZW1lbnQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlbmRlcl9maWVsZCggJ2NvbG9yX3BhbGV0dGUnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS53cENvbG9yUGlja2VyKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdjb2xvcl9waWNrZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlbmRlcl9maWVsZCggJ2NvbnRlbnQnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHRpbml0KCkge1xyXG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXHJcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXHJcblx0XHRcdCRzZXR0aW5ncyA9IHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnICkgKSxcclxuXHRcdFx0JHZpZXc7XHJcblxyXG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkc2V0dGluZ3MudGhlbWUgKSApIHtcclxuXHRcdFx0JHZpZXcgPSAkc2V0dGluZ3MudGhlbWU7XHJcblx0XHRcdGRlbGV0ZSAkc2V0dGluZ3MudGhlbWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkdmlldyA9ICdkZWZhdWx0JztcclxuXHRcdH1cclxuXHJcblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKS5sZW5ndGggPT09IDAgKSB7XHJcblx0XHRcdGpRdWVyeSggJ2JvZHknIClcclxuXHRcdFx0XHQuYXBwZW5kKCBqUXVlcnkoICc8ZGl2IGNsYXNzPVwid3Bvbmlvbi1kYXRlcGlja2VyLScgKyAkdmlldyArICdcIiBpZD1cIicgKyB0aGlzLmlkKCkgKyAnXCI+PC9kaXY+JyApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1kYXRlcGlja2VyLXJhbmdlJyApICkge1xyXG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XHJcblx0XHRcdGlmKCAkc2V0dGluZ3MucGx1Z2lucyA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zID0gW107XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zLnB1c2goIG5ldyByYW5nZVBsdWdpbiggeyBpbnB1dDogJGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLXRvLWRhdGVdJyApWyAwIF0gfSApICk7XHJcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci1mcm9tLWRhdGVdJyApLmZsYXRwaWNrciggJHNldHRpbmdzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XHJcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCcgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnZGF0ZV9waWNrZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0anNfZXJyb3IoIGVyciApIHtcclxuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XHJcblx0XHRpZiggJGVsZW0gKSB7XHJcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlbmRlcl9maWVsZCggJ2ZpZWxkc2V0JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGdldCB3ZWJzYWZlKCkge1xyXG5cdFx0cmV0dXJuICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX3dlYnNhZmVfZm9udHMnICk7XHJcblx0fVxyXG5cclxuXHRnZXQgZ29vZ2xlX2ZvbnRzKCkge1xyXG5cdFx0cmV0dXJuICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2dmb250cycgKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkX29wdGlvbnMoIGRhdGEgKSB7XHJcblx0XHRsZXQgJHJldHVybiA9ICcnO1xyXG5cdFx0Zm9yKCBsZXQgJF9kIGluIGRhdGEgKSB7XHJcblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggZGF0YVsgJF9kIF0gKSApIHtcclxuXHRcdFx0XHQkcmV0dXJuICs9IGA8b3B0aW9uIHZhbHVlPVwiJHskX2R9XCI+JHtkYXRhWyAkX2QgXX08L29wdGlvbj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJHJldHVybjtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XHJcblx0XHRcdGxldCAkdmFsICA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCksXHJcblx0XHRcdFx0JGh0bWwgPSBudWxsO1xyXG5cclxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLndlYnNhZmUuZm9udHMgWyAkdmFsIF0gKSApIHtcclxuXHRcdFx0XHQkaHRtbCA9IHRoaXMuYnVpbGRfb3B0aW9ucyggdGhpcy53ZWJzYWZlLnZhcmlhbnRzICk7XHJcblx0XHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKSApIHtcclxuXHRcdFx0XHQkaHRtbCA9IHRoaXMuYnVpbGRfb3B0aW9ucyggdGhpcy5nb29nbGVfZm9udHNbICR2YWwgXSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCAkdmFyaWFudCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS5odG1sKCAkaHRtbCApO1xyXG5cclxuXHRcdFx0aWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnY2hvc2VuJyApICkge1xyXG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaG9zZW46dXBkYXRlZCcgKTtcclxuXHRcdFx0fSBlbHNlIGlmKCAkdmFyaWFudC5oYXNDbGFzcyggJ3NlbGVjdDInICkgKSB7XHJcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnZm9udF9zZWxlY3RvcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXHJcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkaHRtbF90ZW1wID0gJHRoaXMub3B0aW9uKCAnaHRtbF90ZW1wbGF0ZScgKSxcclxuXHRcdFx0JGlucHV0ICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcclxuXHRcdFx0JHByZXZpZXcgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3JyApLFxyXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSxcclxuXHRcdFx0JGFkZCAgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktYWRkXScgKSxcclxuXHRcdFx0JGVkaXQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktZWRpdF0nICksXHJcblx0XHRcdCRjbGVhciAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWNsZWFyXScgKSxcclxuXHRcdFx0JG1hbmFnZSAgICA9IGZ1bmN0aW9uKCAkdHlwZSApIHtcclxuXHRcdFx0XHRsZXQgaWRzICAgPSAkaW5wdXQudmFsKCksXHJcblx0XHRcdFx0XHR3aGF0ICA9ICggJHR5cGUgPT09ICdlZGl0JyApID8gJ2VkaXQnIDogJ2FkZCcsXHJcblx0XHRcdFx0XHRzdGF0ZSA9ICggd2hhdCA9PT0gJ2FkZCcgJiYgIWlkcy5sZW5ndGggKSA/ICdnYWxsZXJ5JyA6ICdnYWxsZXJ5LWVkaXQnO1xyXG5cclxuXHRcdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xyXG5cclxuXHRcdFx0XHRpZiggc3RhdGUgPT09ICdnYWxsZXJ5JyApIHtcclxuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcclxuXHRcdFx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXHJcblx0XHRcdFx0XHRcdGZyYW1lOiAncG9zdCcsXHJcblx0XHRcdFx0XHRcdHN0YXRlOiAnZ2FsbGVyeScsXHJcblx0XHRcdFx0XHRcdG11bHRpcGxlOiB0cnVlXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEuZ2FsbGVyeS5lZGl0KCAnW2dhbGxlcnkgaWRzPVwiJyArIGlkcyArICdcIl0nICk7XHJcblx0XHRcdFx0XHRpZiggd2hhdCA9PT0gJ2FkZCcgKSB7XHJcblx0XHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLnNldFN0YXRlKCAnZ2FsbGVyeS1saWJyYXJ5JyApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICd1cGRhdGUnLCBmdW5jdGlvbiggc2VsZWN0aW9uICkge1xyXG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkSWRzID0gc2VsZWN0aW9uLm1vZGVscy5tYXAoIGZ1bmN0aW9uKCBhdHRhY2htZW50ICkge1xyXG5cdFx0XHRcdFx0XHRsZXQgaXRlbSA9IGF0dGFjaG1lbnQudG9KU09OKCk7XHJcblx0XHRcdFx0XHRcdGlmKCBpdGVtLnNpemVzID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdGh1bWIgPSAoIHR5cGVvZiBpdGVtLnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGl0ZW0uc2l6ZXMudGh1bWJuYWlsLnVybCA6IGl0ZW0udXJsLFxyXG5cdFx0XHRcdFx0XHRcdCR0bXAgID0galF1ZXJ5KCAkaHRtbF90ZW1wICk7XHJcblx0XHRcdFx0XHRcdCR0bXAuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcsIGl0ZW0uaWQgKTtcclxuXHRcdFx0XHRcdFx0JHRtcC5maW5kKCAnaW1nJyApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgaXRlbS51cmwgKS5hdHRyKCAnc3JjJywgdGh1bWIgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XHJcblx0XHRcdFx0XHRcdCRwcmV2aWV3LmFwcGVuZCggJHRtcCApO1xyXG5cdFx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLndwb25pb24taGVscCcgKS50aXBweSgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5pZDtcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdGxldCAkZTtcclxuXHRcdFx0XHRcdGZvciggJGUgaW4gc2VsZWN0ZWRJZHMgKSB7XHJcblx0XHRcdFx0XHRcdGlmKCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gZmFsc2UgfHwgc2VsZWN0ZWRJZHNbICRlIF0gPT09ICcnICkge1xyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBzZWxlY3RlZElkc1sgJGUgXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JGlucHV0LnZhbCggc2VsZWN0ZWRJZHMuam9pbiggJywnICkgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcclxuXHRcdFx0XHQkYWRkLnNob3coKTtcclxuXHRcdFx0XHQkZWRpdC5oaWRlKCk7XHJcblx0XHRcdFx0JGNsZWFyLmhpZGUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkZWRpdC5zaG93KCk7XHJcblx0XHRcdFx0JGNsZWFyLnNob3coKTtcclxuXHRcdFx0XHQkYWRkLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdCRhZGQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdhZGQnICkgKTtcclxuXHJcblx0XHQkZWRpdC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2VkaXQnICkgKTtcclxuXHJcblx0XHQkY2xlYXIub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xyXG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xyXG5cdFx0XHQkY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHQkZWRpdC5oaWRlKCk7XHJcblx0XHRcdCRhZGQuc2hvdygpO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcclxuXHJcblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2kud3Bvbmlvbi1pbWFnZS1yZW1vdmUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0ICRwYXJlbnQgICA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxyXG5cdFx0XHRcdCRpbWFnZV9pZCA9ICRwYXJlbnQuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcgKSxcclxuXHRcdFx0XHQkdmFsdWUgICAgPSAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApO1xyXG5cdFx0XHRqUXVlcnkuZWFjaCggJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKSwgZnVuY3Rpb24oICRrLCAkdiApIHtcclxuXHRcdFx0XHRpZiggJHYgPT09ICRpbWFnZV9pZCApIHtcclxuXHRcdFx0XHRcdCR2YWx1ZS5zcGxpY2UoICRrLCAxICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHQkaW5wdXQudmFsKCAkdmFsdWUuam9pbiggJywnICkgKTtcclxuXHRcdFx0JHBhcmVudC5mYWRlT3V0KCAoKSA9PiAkcGFyZW50LnJlbW92ZSgpICk7XHJcblx0XHRcdCRpbnB1dC50cmlnZ2VyKCAnY2hhbmdlJyApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdCRpbnB1dC50cmlnZ2VyKCAnY2hhbmdlJyApO1xyXG5cclxuXHRcdGlmKCAkcHJldmlldy5oYXNDbGFzcyggJ2dhbGxlcnktc29ydGFibGUnICkgKSB7XHJcblx0XHRcdCRwcmV2aWV3LnNvcnRhYmxlKCB7XHJcblx0XHRcdFx0aXRlbXM6ICc+IGRpdicsXHJcblx0XHRcdFx0Y3Vyc29yOiAnbW92ZScsXHJcblx0XHRcdFx0c2Nyb2xsU2Vuc2l0aXZpdHk6IDQwLFxyXG5cdFx0XHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnc29ydGFibGUtcGxhY2Vob2xkZXInLFxyXG5cdFx0XHRcdGhlbHBlcjogJ2Nsb25lJyxcclxuXHRcdFx0XHRvcGFjaXR5OiAwLjY1LFxyXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG5cdFx0XHRcdFx0bGV0ICRpdGVtID0gdWkuaXRlbTtcclxuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnd2lkdGgnLCAkaXRlbS53aWR0aCgpICk7XHJcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ2hlaWdodCcsICRpdGVtLmhlaWdodCgpICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdnYWxsZXJ5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCIvKiBnbG9iYWwgZ29vZ2xlOnRydWUgKi9cclxuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJG1hcCAgICAgICAgICAgICAgPSB0aGlzLm9wdGlvbiggJ21hcCcsIHt9ICk7XHJcblx0XHQkbWFwLmRldGFpbHMgICAgICAgICAgPSAnI2dtYXBfZmllbGRzXycgKyB0aGlzLmlkKCk7XHJcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xyXG5cdFx0aWYoICd5ZXMnID09PSB0aGlzLm9wdGlvbiggJ3Nob3dfbWFwJyApICkge1xyXG5cdFx0XHQkbWFwLm1hcCA9ICcjZ21hcF8nICsgdGhpcy5pZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCAkX2luc3RhbmNlID0gdGhpcy5lbGVtLmZpbmQoICdkaXYuc2VhcmNoYm94ID4gaW5wdXQnICk7XHJcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcclxuXHRcdCRfaW5zdGFuY2UuYmluZCggJ2dlb2NvZGU6ZHJhZ2dlZCcsICggZXZlbnQsIGxhdExuZyApID0+IHtcclxuXHRcdFx0bGV0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcclxuXHRcdFx0Z2VvY29kZXIuZ2VvY29kZSgge1xyXG5cdFx0XHRcdCdsb2NhdGlvbic6IHtcclxuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXHJcblx0XHRcdFx0XHRsbmc6IHBhcnNlRmxvYXQoIGxhdExuZy5sbmcoKSApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcclxuXHRcdFx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCAnZmlsbERldGFpbHMnLCByZXN1bHRzWyAwIF0gKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnZ29vZ2xlX21hcHMnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2NvcmUvZGVwZW5kZW5jeSc7XHJcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHRpbml0KCkge1xyXG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcclxuXHRcdFx0JGFkZCAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiBidXR0b25bZGF0YS13cG9uaW9uLWdyb3VwLWFkZF0nICksXHJcblx0XHRcdCRncm91cF93cmFwID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCcgKSxcclxuXHRcdFx0JGxpbWl0ICAgICAgPSAkdGhpcy5vcHRpb24oICdsaW1pdCcgKSxcclxuXHRcdFx0JGVycm9yX21zZyAgPSAkdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICk7XHJcblxyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWdyb3VwLXdyYXAnICksICdhY2NvcmRpb24nICk7XHJcblxyXG5cdFx0JGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koIGpRdWVyeSggdGhpcyApLCB7IG5lc3RhYmxlOiB0cnVlIH0gKTtcclxuXHRcdH0gKTtcclxuXHRcdHRoaXMuYmluZF9ldmVudHNfZm9yX3RpdGxlKCk7XHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWdyb3VwLXJlbW92ZScgKS50aXBweSgpO1xyXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi1jb250ZW50ID4gLndwb25pb24tZ3JvdXAtYWN0aW9uID4gYnV0dG9uJyApXHJcblx0XHRcdFx0XHRcdCAgLmNsaWNrKCk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0JGdyb3VwX3dyYXAuV1BPbmlvbkNsb25lcigge1xyXG5cdFx0XHRhZGRfYnRuOiAkYWRkLFxyXG5cdFx0XHRsaW1pdDogcGFyc2VJbnQoICRsaW1pdCApLFxyXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcclxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicsXHJcblx0XHRcdHRlbXBsYXRlOiB0aGlzLm9wdGlvbiggJ2dyb3VwX3RlbXBsYXRlJyApLFxyXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcclxuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZVVwKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZSgpO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRpZiggalF1ZXJ5KCAnYm9keScgKS5maW5kKCAnbGluayNlZGl0b3ItYnV0dG9ucy1jc3MnICkubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCAnYm9keScgKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwiZWRpdG9yLWJ1dHRvbnMtY3NzXCIgaHJlZj1cIicgKyAkd3Bvbmlvbi5vcHRpb24oICd3cGVkaXRvcl9idXR0b25zX2NzcycsIGZhbHNlICkgKyAnXCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJhbGxcIj4nICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlX2dyb3Vwc190aXRsZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoKSA9PiB7XHJcblx0XHRcdFx0bGV0ICRkYXRhID0gJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKTtcclxuXHRcdFx0XHQkZGF0YS5oaWRlKCk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XHJcblx0XHRcdFx0dGhpcy5iaW5kX2V2ZW50c19mb3JfdGl0bGUoKTtcclxuXHRcdFx0XHR0aGlzLmluaXRfZmllbGQoICRncm91cF93cmFwLCAnYWNjb3JkaW9uJyApO1xyXG5cdFx0XHRcdC8vdGhpcy5qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgJGRhdGEgKTtcclxuXHRcdFx0XHQkZGF0YS5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCk7XHJcblx0XHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRkYXRhICkucmVsb2FkKCk7XHJcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XHJcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZGF0YS5maW5kKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InICksICdyZWxvYWRfd3BfZWRpdG9yJyApO1xyXG5cdFx0XHRcdCRkYXRhLnNsaWRlRG93bigpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzb3J0YWJsZToge1xyXG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxyXG5cdFx0XHRcdGhhbmRsZTogJy53cG9uaW9uLWFjY29yZGlvbi10aXRsZScsXHJcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWFjY29yZGlvbi1wbGFjZWhvbGRlcicsXHJcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcblx0XHRcdFx0XHR1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcclxuXHRcdFx0XHRcdHVpLml0ZW0ucmVtb3ZlQXR0ciggJ3N0eWxlJyApO1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKCAkYWRkLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdFx0JGFkZC5iZWZvcmUoIGpRdWVyeSggJGVycm9yX21zZyApLmhpZGUoKSApO1xyXG5cdFx0XHRcdFx0JGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xyXG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fbm90aWNlKCAkYWRkLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQsIGRpdi5ub3RpY2UnICkgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGJpbmRfZXZlbnRzX2Zvcl90aXRsZSggJGVsZW0gPSBmYWxzZSApIHtcclxuXHRcdCRlbGVtID0gKCBmYWxzZSA9PT0gJGVsZW0gKSA/IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKSA6ICRlbGVtO1xyXG5cdFx0JGVsZW0uZWFjaCggKCBpLCBlICkgPT4ge1xyXG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGUgKTtcclxuXHJcblx0XHRcdGxldCAkbWFjaGVkID0gdGhpcy5vcHRpb24oICdtYXRjaGVkX2hlYWRpbmdfZmllbGRzJyApO1xyXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtYWNoZWQgKSB7XHJcblx0XHRcdFx0aWYoICRtYWNoZWQuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcclxuXHRcdFx0XHRcdGxldCAkZWxlbSA9ICRkYXRhLmZpbmQoICc6aW5wdXRbZGF0YS1kZXBlbmQtaWQ9XCInICsgJG1hY2hlZFsgJGtleSBdICsgJ1wiXScgKTtcclxuXHRcdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdFx0XHQkZWxlbS5vbiggJ2NoYW5nZSwgYmx1cicsICgpID0+IHRoaXMudXBkYXRlX2dyb3Vwc190aXRsZSgpICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVfZ3JvdXBzX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xyXG5cdFx0bGV0ICRsaW1pdCA9IDE7XHJcblx0XHQkZWxlbSAgICAgID0gKCBmYWxzZSA9PT0gJGVsZW0gKSA/IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKSA6ICRlbGVtO1xyXG5cclxuXHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHtcclxuXHRcdFx0bGV0ICRkYXRhICAgID0galF1ZXJ5KCBlICk7XHJcblx0XHRcdGxldCAkaGVhZGluZyA9IHRoaXMub3B0aW9uKCAnaGVhZGluZycgKTtcclxuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJ2hlYWRpbmdfY291bnRlcicgKSApIHtcclxuXHRcdFx0XHQkaGVhZGluZyA9IHdpbmRvdy53cG9uaW9uLl8ucmVwbGFjZSggJGhlYWRpbmcsICdbY291bnRdJywgJGxpbWl0ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCAkbWFjaGVkID0gdGhpcy5vcHRpb24oICdtYXRjaGVkX2hlYWRpbmdfZmllbGRzJyApO1xyXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtYWNoZWQgKSB7XHJcblx0XHRcdFx0aWYoICRtYWNoZWQuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcclxuXHRcdFx0XHRcdGxldCAkZWxlbSA9ICRkYXRhLmZpbmQoICc6aW5wdXRbZGF0YS1kZXBlbmQtaWQ9XCInICsgJG1hY2hlZFsgJGtleSBdICsgJ1wiXScgKTtcclxuXHRcdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdFx0XHQkaGVhZGluZyA9IHdpbmRvdy53cG9uaW9uLl8ucmVwbGFjZSggJGhlYWRpbmcsICRtYWNoZWRbICRrZXkgXSwgJGVsZW0udmFsKCkgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkaGVhZGluZyA9PT0gJycgKSB7XHJcblx0XHRcdFx0JGhlYWRpbmcgPSB3aW5kb3cud3Bvbmlvbi5fLnJlcGxhY2UoIHRoaXMub3B0aW9uKCAnZGVmYXVsdF9oZWFkaW5nJyApLCAnW2NvdW50XScsICRsaW1pdCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkZGF0YS5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUgc3Bhbi5oZWFkaW5nJyApLmh0bWwoICRoZWFkaW5nICk7XHJcblx0XHRcdCRsaW1pdCsrO1xyXG5cdFx0fSApO1xyXG5cclxuXHR9XHJcblxyXG5cdGpzX2Vycm9yKCBlcnIgKSB7XHJcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xyXG5cdFx0LyogaWYoICRlbGVtICkgeyAvL2Vyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTsgfSAqL1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnZ3JvdXAnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlbmRlcl9maWVsZCggJ2hlYWRpbmcnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbi8qZ2xvYmFsIHN3YWw6dHJ1ZSovXHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJF90aGlzICAgICAgPSB0aGlzLFxyXG5cdFx0XHQkZWxlbSAgICAgICA9ICRfdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkYXJncyAgICAgICA9ICRfdGhpcy5vcHRpb25zKCksXHJcblx0XHRcdCRpbnB1dCAgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWlucHV0JyApLFxyXG5cdFx0XHQkcmVtb3ZlX2J0biA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItcmVtb3ZlXScgKSxcclxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLWFkZF0nICksXHJcblx0XHRcdCRwcmV2aWV3ICAgID0gJGVsZW0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XHJcblxyXG5cdFx0bGV0ICR3b3JrID0ge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0ZWxlbXM6IG51bGwsXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRwb3B1cDogbnVsbCxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cclxuXHRcdFx0ICovXHJcblx0XHRcdGVsbTogbnVsbCxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIENyZWF0ZXMgQSBOZXcgSW5zdGFuY2UgZm9yIFRvb2xUaXAuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpbml0X3Rvb2x0aXA6ICgpID0+IHtcclxuXHRcdFx0XHRpZiggJGFyZ3MucG9wdXBfdG9vbHRpcCAhPT0gJ2ZhbHNlJyApIHtcclxuXHRcdFx0XHRcdGxldCAkdHAgPSAoIHR5cGVvZiAkYXJncy5wb3B1cF90b29sdGlwID09PSAnb2JqZWN0JyApID8gJGFyZ3MucG9wdXBfdG9vbHRpcCA6IHt9O1xyXG5cdFx0XHRcdFx0aWYoICR3b3JrLmVsZW1zLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHRcdCR3b3JrLmVsZW1zLnRpcHB5KCAkdHAgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBJbml0cyBGb3IgZWFjaCBhbmQgZXZlcnkgUE9QVVAuXHJcblx0XHRcdCAqIEBwYXJhbSAkZWxtXHJcblx0XHRcdCAqIEBwYXJhbSAkaW5zdGFuY2VcclxuXHRcdFx0ICovXHJcblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCAkZWxtLCAkaW5zdGFuY2UgKSB7XHJcblx0XHRcdFx0JHdvcmsuZWxtICAgPSAkZWxtO1xyXG5cdFx0XHRcdCR3b3JrLnBvcHVwID0gJGluc3RhbmNlO1xyXG5cdFx0XHRcdCR3b3JrLmVsZW1zID0gJHdvcmsuZWxtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xyXG5cdFx0XHRcdGxldCAkaGVpZ2h0ID0gJHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcgKTtcclxuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkuY3NzKCAnaGVpZ2h0JywgJGhlaWdodCApO1xyXG5cdFx0XHRcdCR3b3JrLnNlbGVjdCgpO1xyXG5cdFx0XHRcdCR3b3JrLmlucHV0KCk7XHJcblx0XHRcdFx0JHdvcmsuZWxlbXMub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bGV0ICRpY29uID0galF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKTtcclxuXHRcdFx0XHRcdCRpbnB1dC52YWwoICRpY29uICkudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHRcdFx0XHRcdHN3YWwuY2xvc2VNb2RhbCgpO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0XHQkd29yay5pbml0X3Rvb2x0aXAoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIFdvcmtzIHdpdGggUE9QVVAgSW5wdXQgU2VhcmNoLlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0nICkub24oICdrZXl1cCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcclxuXHRcdFx0XHRcdCR3b3JrLmVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKS5zZWFyY2goIG5ldyBSZWdFeHAoICR2YWwsICdpJyApICkgPCAwICkge1xyXG5cdFx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBIYW5kbGVzIFNlbGVjdGJveCBpbiBwb3B1cC5cclxuXHRcdFx0ICovXHJcblx0XHRcdHNlbGVjdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgc2VsZWN0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XHJcblx0XHRcdFx0XHQkd3Bvbmlvbi5hamF4KCAnaWNvbl9waWNrZXInLCB7XHJcblx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0J3dwb25pb24taWNvbi1saWInOiAkdmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcclxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdCggJHJlcyApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHdvcmsuZWxtLCAkd29yay5wb3B1cCApO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcclxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuZGlzYWJsZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0aWYoICRpbnB1dC52YWwoKSA9PT0gJycgKSB7XHJcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcclxuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlcyBCbHVyIEV2ZW4gLyBjaGFuZ2UgZXZlbiBpbiBpbnB1dGZpZWxkLlxyXG5cdFx0ICovXHJcblx0XHQkaW5wdXQub24oICdrZXl1cCBibHVyIGNoYW5nZSBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xyXG5cclxuXHRcdFx0aWYoICR2YWwgIT09ICcnICkge1xyXG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICc8aSBjbGFzcz1cIicgKyAkdmFsICsgJ1wiPjwvaT4nICkuc2hvdygpO1xyXG5cdFx0XHRcdCRyZW1vdmVfYnRuLnNob3coKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XHJcblx0XHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIYW5kbGVzIEFkZCBCdXR0b24gQ2xpY2sgRXZlbnQuXHJcblx0XHQgKi9cclxuXHRcdCRhZGRfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0ICRwb3B1cCA9IHN3YWwoIHtcclxuXHRcdFx0XHR0aXRsZTogJGVsZW0uZmluZCggJy53cG9uaW9uLWZpZWxkLXRpdGxlIGg0JyApLmh0bWwoKSxcclxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcclxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG5cdFx0XHRcdHdpZHRoOiAnNzAwcHgnLFxyXG5cdFx0XHRcdGN1c3RvbUNsYXNzOiAnd3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbCcsXHJcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoICRlbGVtICkgPT4ge1xyXG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHQkX3RoaXMuYWpheCggJ2ljb25fcGlja2VyJywge1xyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG9uU3VjY2VzczogKCAkcmVzICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCAkcG9wdXBfZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICRwb3B1cF9lbGVtLCAkcG9wdXAgKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0b25FcnJvcjogKCkgPT4gJHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxyXG5cdFx0XHRcdFx0XHRvbkFsd2F5czogKCkgPT4gJHBvcHVwLmRpc2FibGVMb2FkaW5nKCksXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIYW5kbGVzIFJlbW92ZSBCdXR0b24gRXZlbnQuXHJcblx0XHQgKi9cclxuXHRcdCRyZW1vdmVfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcclxuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xyXG5cdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdpY29uX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnaW1hZ2Vfc2VsZWN0JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0aW5pdCgpIHtcclxuXHRcdGxldCAkdGhpcyAgICAgICAgPSB0aGlzLFxyXG5cdFx0XHQkZWxlbSAgICAgICAgPSAkdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkaW5wdXQgICAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXHJcblx0XHRcdCRwcmV2aWV3X2FkZCA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXctYWRkJyApLFxyXG5cdFx0XHQkcHJldmlldyAgICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3JyApO1xyXG5cclxuXHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gbnVsbDtcclxuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xyXG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcclxuXHRcdFx0XHQkcHJldmlld19hZGQuc2hvdygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5oaWRlKCk7XHJcblx0XHRcdFx0JHByZXZpZXcuc2hvdygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbWFnZV91cGxvYWRfdXBkYXRlZCcsICRpbnB1dCwgJHByZXZpZXcsICRwcmV2aWV3X2FkZCApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdCRwcmV2aWV3X2FkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkdGhpcy5tZWRpYV9pbnN0YW5jZSApIHtcclxuXHRcdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IHdwLm1lZGlhKCB7XHJcblx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXHJcblx0XHRcdFx0dGl0bGU6ICR0aGlzLm9wdGlvbiggJ2ZyYW1lX3RpdGxlJywgJ1NlbGVjdCBJbWFnZScgKSxcclxuXHRcdFx0fSApO1xyXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gJHRoaXMubWVkaWFfaW5zdGFuY2Uuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKS5hdHRyaWJ1dGVzO1xyXG5cdFx0XHRcdGxldCB0aHVtYm5haWwgID0gKCB0eXBlb2YgYXR0YWNobWVudC5zaXplcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwudXJsIDogYXR0YWNobWVudC51cmw7XHJcblx0XHRcdFx0JHByZXZpZXcuZmluZCggJ2ltZycgKS5hdHRyKCAnc3JjJywgdGh1bWJuYWlsICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBhdHRhY2htZW50LnVybCApO1xyXG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuaWQgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHQkcHJldmlldy5maW5kKCAnLndwb25pb24taW1hZ2UtcmVtb3ZlJyApLm9uKCAnY2xpY2snLCAoKSA9PiAkaW5wdXQudmFsKCAnJyApLnRyaWdnZXIoICdjaGFuZ2UnICkgKTtcclxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlbmRlcl9maWVsZCggJ2ltYWdlX3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHRpZiggdGhpcy5lbGVtZW50Lmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdGxldCAkc2V0dGluZ3MgPSB0aGlzLm9wdGlvbiggJ2lucHV0bWFzaycgKTtcclxuXHRcdFx0aWYoICRzZXR0aW5ncyApIHtcclxuXHRcdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCAkc2V0dGluZ3MsICdJbnB1dE1hc2snICk7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LmlucHV0bWFzayggJHNldHRpbmdzICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlbmRlcl9maWVsZCggJ2lucHV0bWFzaycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnamFtYm9fY29udGVudCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXHJcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkdGhpc19lbGVtID0gJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi10YWItd3JhcCAnICk7XHJcblxyXG5cdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaSBhJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRsZXQgJF90aGlzID0galF1ZXJ5KCB0aGlzICk7XHJcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tdGFiLWN1cnJlbnQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xyXG5cdFx0XHQkX3RoaXMucGFyZW50KCkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xyXG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkuaGlkZSgpO1xyXG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xyXG5cdFx0XHRsZXQgJHRhYiA9ICRfdGhpcy5hdHRyKCAnZGF0YS10YWItbmFtZScgKTtcclxuXHRcdFx0JGVsZW0uZmluZCggJ2RpdiN3cG9uaW9uLXRhYi0nICsgJHRhYiApLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKS5zaG93KCk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aWYoICR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCcgKS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQgYScgKS50cmlnZ2VyKCAnY2xpY2snICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpOmZpcnN0LWNoaWxkIGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnanF1ZXJ5X3RhYicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmdsb2JhbF92YWxpZGF0ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLldQT25pb25DbG9uZXIoIHtcclxuXHRcdFx0YWRkX2J0bjogdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWFjdGlvbi1jb250YWluZXIgID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1rZXl2YWx1ZS1hZGRdJyApLFxyXG5cdFx0XHRsaW1pdDogKCAtMSA9PT0gdGhpcy5vcHRpb24oICdsaW1pdCcgKSApID8gbnVsbCA6IHRoaXMub3B0aW9uKCAnbGltaXQnICksXHJcblx0XHRcdGNsb25lX2VsZW06ICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtZmllbGQnLFxyXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24ta2V5dmFsdWUtZmllbGQgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLXJlbW92ZV0nLFxyXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxyXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlbGVtICkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xyXG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRlbGVtLmZpbmQoICc+IGRpdjpsYXN0LWNoaWxkJyApICk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xyXG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogKCkgPT4ge1xyXG5cdFx0XHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWtleXZhbHVlX3dyYXAnICkuYWZ0ZXIoIGpRdWVyeSggdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICkgKS5oaWRlKCkgKTtcclxuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xyXG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fbm90aWNlKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0anNfZXJyb3IoIGVyciApIHtcclxuXHRcdGVyci5lcnJvci5hcHBlbmRUbyggZXJyLmVsZW1lbnQucGFyZW50KCkucGFyZW50KCkgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICogQHBhcmFtICRhcmdzXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICovXHJcblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xyXG5cdFx0aWYoIHRydWUgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLmtleSApICkge1xyXG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gZGl2JyApLmVxKCAwICkuZmluZCggJzppbnB1dCcgKS5ydWxlcyggJ2FkZCcsICRhcmdzLmtleSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0XHRpZiggdHJ1ZSAhPT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcclxuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMSApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy52YWx1ZSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIHRydWUgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLmtleSApICYmIHRydWUgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XHJcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucnVsZXMoICdhZGQnLCAkYXJncyApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdrZXl2YWx1ZV9wYWlyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdub3RpY2UnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuaW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFOdGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqTXRZekF4TVNBMk5pNHhORFUyTmpFc0lESXdNVEl2TURJdk1EWXRNVFE2TlRZNk1qY2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVEJHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJVVTVOMEUzT0VFMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlVVNU4wRTNPRGsxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROQ0JYYVc1a2IzZHpJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRNMk1EVTJRekpHUWtWRVJUQXhNVGsxTlVWQ1JUQXpSVUU0UWpSRU5VSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFHQkFRRUJRUUdCUVVHQ1FZRkJna0xDQVlHQ0FzTUNnb0xDZ29NRUF3TURBd01EQkFNRGc4UUR3NE1FeE1VRkJNVEhCc2JHeHdmSHg4Zkh4OGZIeDhmQVFjSEJ3ME1EUmdRRUJnYUZSRVZHaDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHgvL3dBQVJDQUVUQVJNREFSRUFBaEVCQXhFQi84UUFpUUFCQUFNQUF3RUJBQUFBQUFBQUFBQUFBQVFGQmdFREJ3SUlBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFCQXdNREFRTUdCdzhDQXdrQUFBQUJBQUlERVFRRklSSUdNVUVUQjFGaGNZRWlNcEdoc2NGQ2doVGhVbUp5a3FLeXdpTXpjN04wRlRZa045SFRGK0pEVTVPalZEVlZGaEVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9WS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJT3VlZUtDTXlTdURHRHFTZzZJOHZqWG1qWjIvV3EzNVFFSGV5NHQ1UGNsWS84QUZjRDhpRHNRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGTnllWGJiUlIvZnVKL0pIM1VHYjNJT2R5RHNqdkxtUDkzSzl2bURpRUVsbWN5YkJRVGtqemhwK01oQklaeWE5YlFPWkcveW1oQitJb0pNZktXLzk1Yit0cnYrSVFTWStTWTkzdkI3UE9SVWZFU2dreDVqR1NlN2NOSDQxVy9wVVFTMlBZOW9leHdjMDlIQTFCUWNvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lNM3lxYjl2QkY5NjB1L0tOUDFVRmJpb0czTi9EQzhibU9QdER5Z0NwUWFTVGoyTWVQWllZejVXdVB6MVFSWk9MUUVmczVuQStjQW9JeitMM1k5eVpoOU5SOHlDTTdqMlZCMGpEdk9ITitjaEJHa3htU2pOSFc4bnFhVDhpRG9mSE5HYVBZNXA4aEJDRDQzSU5keDFqbTR4cEo5OXpuTjlIVDVrRm1nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWd4L0o1OStVTGYvQ1kxdjYzNnlEbmk3Qy9KaDNaRzF4UHJGUG5RYTlBUUVCQVFRTTQrT1BHVHVjMEVsdTBFanRPaURFYmtHN3hNWmp4dHV3OWRnUDVXdnpvSmFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0RBWnFmdk1yY3VIVGVRUHE2Zk1ndU9HeGt2dUpld0FOcjY2b05PZ0lDQWc0YzVyV2x6aUd0SFVuUUlLWGxrN1JqR3RCcjNqeFFqdEFDREhzSmM0TkhVbWc5YUQwcGpReGpXam8wQUQxSU9VQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRZk1rc2NiZHozQm84cFFSSk14WnMwYVM4L2dqVDQ2SUlVdWJuZHBHME04NTFLQ1ZpN21XV09hU1oxUTAxOUFwcWd3RTBwZEs5MzN6aWZoS0RZOE5ZUmkzdVAwNVNSNmdBZ25aUE4yT1BaKzFkdmxQdXhOMWQ2L0lncU1UeXQ4OThZcnNOWkZLYVJFYWJUNUNmT2cwNkNweWZKTWZaQXNEdStuN0kyZEFmT1VHU3lHY3lGKzR0a2VXeEU2Uk4wYjE3ZktndE9Vdjd1d3hzSDBoSFZ6ZlExb0NDb3c3VEpsYlJ0Sy90V0VqekJ3SlFlaklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJS3JPdGR0aGQ5RUVnK2swUVZDQWd0R2tRNEM2bEpvVEhKcjU2RUJCNS92UWFwK1R1TVp4aXlGdlJrMCsvMjZEUWJpZTMwb012SlBKSTh2a2NYdmNhdWM0a2tuMGxCODcwRm5OeVhMUzJyYll6RU1BbzV3MGM3MHU2b0t6ZWc3N0VHUzlnakd1NlJvcDYwRjF6YVVmM1NKamVqSVJVZVFsenZtUVIrSXNNbWJpTktoalh1UDVKSHpvTitnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2k1U0x2TE4vbGI3UTlTRFBVUUtJSm1mY0lPS3ZGYUY3WXdQUzU0SitKQmdBNGtnZVZCcnVUV0Y3TGpjWXkzZ2RJeUdMMnkzV2hMVzlucVFaWjl2ZE05K0Y3ZlMwaEIxRnhIWFJCeHZRTjZDNDRtd1M1NjJEaFZyZHp2V0dFajQwSHh5ZWN2emwxVTEydTJqMUFJTFhnVWU2N3VwdnZJMnRIMWovQU5sQnRVQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJ3QkJCNkhRb012UEgzY3I0ejlGeEZmUWcrV2lwSG5RT2R5OXppYlczKytlUHpHL2RRWVVTRUVFZFFhaEJjUWN4enNOQjM0ZUFLQVBhMGo0Z0VFOXZpQmtEcExiUU9iMmdCdytWeFFkZzVoaHBOTGpFeDFQdk9BWWZsYWc1YmtPQ3o2eTJqb25IeWJ3UHpYSURjUHcrN0pNR1E3ajhGN2czOU9pQ3o0OWdNZlpYN3JpM3ZtWFhzRnJHdExTUVQxT2hLRERYMDVsdlo1Q2FsNzNHdnJRYlR3K2hBeDF6UDJ5UzdQVXhvUDY2RFZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNDaXpFT3k2MzAwa0ZmWDJvSTF0SHZ1STJEdGNFRlg0aTNCKzAybHYyTlk2VDhvMC9WUVkrcUJWQXFnVlFLb0ZVSEllNGRIRWV0Qnh1UWVtOEtoRWZINEhEcks1N3orVnQvVlFYcUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3I4ekZ1dDJ5QWFzZHFmTWZ1b0s3RzdmdHNlNDAxK09pRG5rdkZQN3pOSE95NDdtV05teWhidWFSVW55anlvTXpjZUgrYWovZFBpbUhtZHQvU1FRTGppUElZUGV0SFAvaGtQL1JxZ2dUNHpKMjRyUGF5eER5dlk1dnloQkdKSU9xRGpjZ2JrRGNnYmtIc09EZzdqRDJjVktGc0xLanprVlB4bEJOUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFSFZjeENXM2taNVI5MUJtalVHbmFFSFl5NHVHZTVJNXZvSkNEdFprcjFuU1FuMDYvS2c3NDh6ZEErMDBQK0w1RUZoYlhWek1SdmdMR242UlAzRUhaUFoybHdLVHdzbEg0YlE3NVVGZk54VGowMWQxbEdDZTF0Vy9JUWdyNXZEN0F2SkxUTkdld05jQ0I4SUtDQkw0YVJFa3hYN21qc0RvNi9HSEJCRGI0YjVFWERBNjVpTUZSdmNOMjdiMjBiVDUwSG9ER2hyUTBkR2lnOVNEbEFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGRmUyTTR1bjdHRnpYbXJTQnBycWc1aHc5eS9WNUVZOC9WQk5pdzF1MzMzRjUrQUlKa2NFTVg3dGdiNkFnKzBCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkZ5bVJoeHVPdWIrZHJuUTJzYnBaR3NBTGkxZ3FhQWtDdnJRUU9MOHN4UEpMT1M1eDVlM3VYN0pZWmcxc2pTUlVFaHBjS083RFZCYnlQREkzUFBSb0xqVHpDcUNwNHZ5akg4a3g4bDlZeHl4d3h5bUJ6WncxcnR6V3RkVWJYUEZLUEhhZ3VFQkFRUnNsZnc0L0hYTi9NSE9odFluelNOWUFYRnJHbHgyZ2tDdW5sUVlqL3JaeFgvMnQ5LzVjUC9OUVNMSHhpNGhjekNLVDdUYUEwQWtuamJ0MS9odWtJK0JCdG81STVZMnlSdUQ0M2dPWTlwQmE1cEZRUVIxQlFmU0FnSUNBZ0lLYmpuS3Nmbi90bjJPT2FQN0ZMM012ZkJyYXUxMWJ0Yy9UVHRRWEtBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FncGViZjRqbVA2U1g5QW9QSmVOdnlIRkxYRDhxaDNUWXZJOTVCa29oMmJabnNINXJBNXZuQkhhZzlyTnpCZFkwM051OFN3VFFsOFVqZFE1cm0xQkNERWVDZitLM1g5ZEovSmlRVE0zNG0yZHBrbjR2RVdFK2F2NGlSTEhiMTJnZzBjQVd0a2NTM3RvMmlEbkJlSmRuZTVKbUt5bGhQaHNqS2FSUlhGZHJpZWpkem14dUJQWlZ2bVFiTkJUOHgveFBNLzBVLzhzb0tyd3Avd1hIL2pUL3ozb0pQaUphWXlmaU9SZmZNWWU1aGMrMmtkVGMyYjZHMDloTHFEem9LWGlHY3VjUjRXeDVTZUUzSDJRU2QxRTUyd3VqNzR0YU4xSFVBcnBvZ044Vko3a1FPeGVCdWNqR1dSbThsaExpeUdTUm9jWTl3amNIRnRhRW5hZ3ZPVWMzeG5IaERGT3g5eGtMZ0F3Mk1IdFBJSnBVK1FWMEhsN0VGSEQ0cVRXOHJQNzl4Kzh4TnJJUTF0eThQZTJ2bkRvNGo4RlVGL3l2bFJ3ZUVqekZ2YWpJV3Izc0R5eVhZQkhJUFprQjJ2RGhXZzlhQzd0NTRyaTNpdUlYYm9wbU5ramNPMXJoVUg0Q2dvOFh5dzVIbEdSd3R2YVZ0OGEwZDlmZDVvWkRRYkJIdDh1NzZYWWc0NGp5My9BUFJmM0QvU2ZaZnNNM2Nmdk84MzlmYTkxbE9pQ3Z6dmlSYTJXU2t4ZUtzSjh6a1lhaWFLM0IydElwVWJtdGtKSTdhTjA2SU9jRjRqMjE3a284WGxjZlBoc2pOcERGY0E3WGs5QUhPYkdRVDJWYWdzVHlzeDh5SEc1N1h1eExCMzlyZDk1WHZLRFZ1emFLZTY3NlI2SVBybVhLb3VOWWorNFBoKzB2ZEkyS0tEZjNlNHVxVDdXMS9SclNlaUN6eHVRaHY4WmJaQ1AyWXJtRmt3cWZkRDJoMUNmTWdxdUljcWR5T0M3dW1XbjJlMGduTU52S1hsNWxEZFM3YnNadDBJN1Q4U0MvUUVCQVFFQkFRRUJBUUVGTHpiL0VjeC9TUy9vRkJSOER4ZG5sZkRLeng5NHpmYjNEYmhyeDJqL1VTRU9IbmFkUWdxdUY1Uzh3Ti9lOEx5NzZtTnIzNHlZKzY1cEJkdEZleHc5cHZucUVEd3Bua3QrQVplZUxTU0tlNGV3L2hOdG95RUUvd2NzYmFMaTc3eHJRYm02bmYzMG4waUdhTmJYeURyNjBIejR5MmR1N2prRjhRRzNkdGNNRUVvMGNBOEhjMEhyMkErcEJ0c2ROSk5qN1dhUTFra2hqZTgrZHpRU2dyK1kvNG5tZjZLZitXVUhuWENlRlovSjhidGIyMDVQZDQ2M2tNZ1paeENUWXpiSTVwcHRtakdwRmZkUVhyUENpVzZsWWM3eUM4eXNNYmc1a0xpNW8wclVFdmZOMTgxRUZ2ejIxdDdYZ0dSdHJlTVJRUXdNWkZHMFVEV3RlMEFCQjJlRzl2RkJ3ckdDTnROOGJwSG50TG52Y1NTZ3cwdDF5cC9pVm1ickNXRUdRdmJZQ0pyYmtnQ0tLaldnc3JKRHFhZkg1MEZwazdqeGN5V1B1TEM2NC9ZdXQ3bGpvNUFIc3FBNGRSVzVPbzZqem9MdmpYRzhqSndFNERPUjkxTzVrc0lhWE5lV3RMaTZNN21Gdzlra1U5Q0N2NFR5YzJQQjc0WCtsMXg0eVFTeG5xZHRlNmIrVjdBOUNDYjRXWXVTMjQ0Y2pjNjNtWGxkZFRQUFV0SklaOE9ydldncC9ES1o4Tmh5aWFQOTVIY1NQWjZXdGVRZ28rQlhYaUJiNHFXZkFZbTF2SUxtWnpwcnVkemU5YzhVQkRxenhtZzdOTzFCTzVMWWVLdkliYUNHOHdsckM2MmxFMEU4RXNiWld1QXBvNTF3L1EvTUVGOTRodzNOcGI0Yms0WlM3eEU4WnUydDdZcGFDUnVuNFduclFjY21naDVMeTdIWVpwMzJWdFpUWGs1cFZwTTdlN2lyWHlhRWVsQlI0dmtzMWo0V1g5bzh1R1JzNVpNWXhsZmFEcFhhVVA0TFhPcCtLZzlBNGxoaGh1TzJPUG9CTEZHRFBUdGxmN1Qvd0E0b0xkQVFFQkFRRUJBUUVCQVFWSEw0SnArTDVXR0NOMHMwbHJLMk9KZ0xuT2NXbWdEUnFTZ2crRzlwZDJuQzhkYjNjTWx2Y003N2ZESzBzZTJzOGhGV3VBSXFEVkJEOFNlSlNackdOdnJGcEdYeC83UzNMUGVlMEdwWUthMTdXK2Ywb0kzaEppNzIwNHZkMjJSdEpiWjhsM0llNW5qZEc1ekhReE5ydGNBYUdoQ0Nxc2JQbVhCTHU2dDdESFB6ZUNuZVpJV1JFbVZwTkIwYUh1QnBRTzlrZzlmS2dYdGh6SG5kNWFSWkhIT3d1QnQ1TzlsamxKNzE1RlduUndZNHVwVUQyUUJXdXVpRDA1akdzYUdORkd0QURRT2dBUVZmSzRacCtNWmFHR04wczBscE0yT05nTG5PY1l5QUdnYWtsQlcrR2xuZDJmRGJHM3U0SkxlNFladDhNclhNZUt6UElxMXdCMUJRYWRCUWMrdHJtNjRoazdlMmlmUFBKRzBNaWphWHZjZDdUbzF0U1VIMXdhMnVMYmlXTWd1WW53enh3MGtpa2FXUGFkeDBMVFFoQm5lVWNkNUhqZVRqbFhHb2hjeXlzRWQvWkhxOEFBYUNvcUhCbzZhZ2l1cUNQZGNyOFFzM2J1eDJONDdQaXBwaHNrdnAzUFlHTk9oY3h6MlJiVDZLbnlhb054Z2NkY1k3RTIxbmMzVWw3Y1JOL2JYVXpuUGM5N2lTZFhFbWdyUWVaQjV6emJpV2JsNVZKYjR5R1E0elBtQjEvTEd4em1SdWlmN1JlNENqZnY5ZXFEMUszZ2l0NEk0SVdoa1VMV3h4dEhRTmFLQWZBZ3cvaGhqTCswYm5HMzFwTGJ0bnV5Nk1UUnVZSHNPN1Z1NENvUVZkclljdzRKZjNjZUx4N3N6Z0xtVHZZNFlxbVJoTkI5RVBlSFVvQ2RwQnBWQktOenovbHQ1YndpMHVPTlltSisrNW03eDhjNzZhYlFhUlBOZGFlelR5OWlEZFpiR3daTEYzV09tL2RYTVRvaWVwRzRVRHZTRHFneC9oZmhzdmJOeUY5bUlwSXIxNWlzNGhLMHRQYzJzWVkwdEJwVnAwMTdhSUt0L0Q4ako0bFNSbUNUK3d2dUdaU1NRc2QzSm1Zd25idXB0M2Q0ODFGZWlEMDlBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkF6K1dpeEdGdk1sSlNsdEU1N1FmcFA2TWI5WnhBUWVTOFFreUhIczdoY3hmUExyYmtyWkdYRGoyT2ZMN0xqMmRkanZRU2c5cGM1cldsemlBMENwSjBBQVFkRmxmMkY5RDMxbGN4WFVJSmFaWVh0a2J1SFVibWtpdXFCZTM5aFl3OTllM01WckNTR2lXWjdZMjdqMEc1eEFyb2c3VEpHSSs4TGdJNmJ0OVJ0cDFyWHlJSUVYSStQVFRpM2h5bHBKT1NRSW1UeE9lU09vMmgxVUV1OGpobHM1NHBuYklYeHZiSytvRzFwYVE0MU9nb0VHYngyTHdtTTRUa0xYRFhmMjJ5RU55NFQ5NUhMN1JqTzRib3cxdWlDTDRSZjRYQi9HbS9TUWFtK3krSnNDMFgxN0JhRjN1aWVWa2RmUnVJUWRsbmYyTjdGMzFuY1JYTUowN3lGN1pHK1RxMGtJTUh5ei9BSFI0ei9EUDZUMEczYm04TTY4TmsyL3RqZUE3VGJDVmhscjVObGQzeElQalAvOEF3V1IvcFp2NWJrR2E4SXY4TGcvalRmcElOVmZaYkZXRzAzMTVCYUIzdTkvSXlPdm8zRWVSQjIyMTNhM1VJbXRabVR3dTkyU0p3ZTA5dWhhU0VIYWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lQT2ZGckp4enlZdmpZblpiaTltYk5kelBjMWpXUkIyeHBjWGFVcnVkOVZCejRoeThVeUhEL3N0aGs3SjArTjJTV1VVZHhFWEZzWTJGalFIVlBzZEI1VUdwNFRuUm0rTldkNjUyNmNON3E1OHZleCt5NG44YjN2V2d6ZkRSL1lPYTVuamJ2WnRidjhBMTJQSFpROVdqNnBwOVZBNW1QNzl6WEM4YmFOMXJiSDdka0IxRkIwYWZxaW4xa0ZqelRqR1N6MS9aUnoza2R0eHVDajc2THZITWxlK3AvQjJVOTBDcnRLbEJtK1JjZDhKWU1WY0MydTRJYjFzYnpDK0c1Zk8vdkdqUU9ZSFNEVjNYUkJlY0l5RjFlK0d6bjNMekxKRkRjd2g3dFNXc0RnMnA4emRFRUh3OS8yd3YveGJ6K1dnbWVGd3VqNGYwdEN3WFpkY2ZaekpVTUVsVHQzVURqU3ZYUkJYMlBBK0xXY2NrL05iKzN1c3ZjU09kTEpMZHVpWnIwMmt1aGNUVFUxUVZXSmZnTVY0ajQ2UGkxNFpNZmV0TWQzQzF6bnNCSWRSdTUzVUNnY05UUW9KM2lQWlhsOXozQldkbk02M25uaDJDZG52TWFYdjN1Rk8wTXFndDc3d2c0cS9GdWdzMlNRWHpXL3NyMHlQYzR2SFRlMG5aVHkwYUVIUnd6TzNtVTRCazRiNXhmZDQrSzR0bnlPTlhPYUlpV2x4N1NLN2ZVZytPQTVUKzFlR0UyUjJoeHRmdEVqR25vWEEreUQ2U2d5K0FtOE83eUYrUjVma1pMM01YVG5PbWljMjZEWXhVN1FERTBWMDhob09nUVNMUE5jWXdYTE1kTnhTK2tseDE5SUlNallQRXdZd1BjR3RlMHl0YldtNm8xSjA2MEtEMk5BUUVCQVFFQkFRRUJBUUVCQVFFQkFKQUZUb0FnOHE0L2ljZnpqbHVheStUaU54aTRDSUxTUGM1Z05EUmhCWVduUnJha2ZoSU5WLzBzNEgvd0RXZit2Y2Y4eEJuZUFTTzQ3elBMY1VtZFNDWnhtc2E5dTBiaFN2YTZJNi9pb0xUeElnZmo3dkQ4cWhIdDR5NGJIZFU2bTNsTkQ4cGI5WkIxK0dzVDhsa00xeXVjSGRrSnpEYVY2aUNNai9BSU5iOVZCVmM3bHRMM24xbGkrUVhUN1hBTmdFakFDV3NkSWQzdE9kMlZjTnU3czh5RG5QTThKOExpYmwxaEZhM2w5TEc1dHN5T1UzUkVoYVExeExuU05ZQWRTZ3NmRG9nK0dsd0FkUUxzSDRDVUhWNGUvN1lYLzR0NS9MUWRYRHJxOXRQQ2E3dWJLb3VvbTNMb25ORlMwZzZ1SDRvMVFWbkVNUjRhWG1HWmU1eTlqbXlraGMrN2JkWExvWE5mdVB1dEQyRjJuYnJWQkhqeUhHYmp4THcwZkg0STRiRzNmM2JwWTI3QkpJZDFYRHRJNkFWUVcvaUZsRzRyeEF3T1FleDBrZHZDWHl0WUt1N3ZjOFBJSDRMU1NnMVdSOFErSjJtTWZmUjVHRzVPMnNWdkU4T2xjN3Niczk1djFnRUdkNEpqTHUyNERsNzI3YVdTWkpseGNNYVJUMk82SUR0ZnZqVStoQjg4S3hzdVQ4S2Jxd2gvZlRpNGJFRG9DOE9xMGVzaEJFNEZrZUNQeExjZG5iT3d0Y3RaRjBVN3J5R0ZoZlJ4b1MrUWU4UGRJSnJVSUxOMlo0VS9rbGppY0RnckhKenlQclBkd1JSTVpBMXJoN1llSTNidG8xMEk3TmRVSG9DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNENHVJSXJpQ1NDVUV4VE1kSElBUzBscmhRMGMwZ2pUdENDSGhjRmljSmFHMHhsdUxlM2M4eU9ZSE9mVjVBQkpjOHVkMEE3VUU5QlYzZkdNSGQ1ZURNVDIyN0pXMjBRM0RYeU1JMmtrVmExd2E3cjJoQk15R1BzOGpaVFdWNUdKcldkdTJXTWtpbzY5V2tFZXBCeGpjYlk0eXhpc2JHSVEyc0lJampCSnBVa25WeEpPcDdVSFJtZVA0WE5RdGh5bG95NVl5cFlYVkRtMTY3WHRJY0srWW9JT000SnhIR3lkN2FZeUpzblkrVGRNNFYwOWt5bDlQVWdsNHZqV0Z4VmhQWVdGdjNObmNGenBvdThrY0NYdERYYXZjNGlyUjJJUHJIOGV3K094Y21MczdmdXJDVVBENGQ3M1Y3d1VkN1RuRjJvODZEc3hHRnhtSXNSWTQ2SHViVnBjNFI3blAxY2FuVjVjZmpRVkZ4NGNjSnVMazNFbUxqRWhPNGhqNUkyVnJYM0dPYXo0a0V1VGh2R0h2c25qSHh4dXg3KzhzekNYUmJIMURxL3N5M2RxMGU5VkJJdk9QWWU4eWR2azdtM0VsOWFOTElKUzU0RFdtdFJ0QkRUN3g2aEJYeCtIdkRJNzM3WXpGUkNhdTRBbDVqQjgwUmQzZjVxQzludDRaN2VTM2xidWhsWVkzczFGV3VGQ05LVTBRUnNSaHNiaDdKdGxqb2U0dFd1TG14N25QMWNhblY1Y2ZqUVFzdnd2aStZbTcvSVkrT1djKzlLMHVpZTZtbnRPakxDNzFvSk9HNDVnOExHNW1NczQ3WVBvSHZiVXZjQjBEbnVKY2ZXVUZpZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0QvLzJRPT0nO1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5iZWZvcmUoICc8c3BhbiBjbGFzcz1cInNwaW5uZXIgd3Bvbmlvbi1zcGlubmVyXCI+PC9zcGFuPicgKTtcclxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4gdGhpcy5zaG93X3ByZXZpZXcoIGUgKSApO1xyXG5cdH1cclxuXHJcblx0c2hvd19wcmV2aWV3KCkge1xyXG5cdFx0bGV0ICR2YWx1ZSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLnZhbCgpO1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xyXG5cdFx0JHdwb25pb24uYWpheCggJ29lbWJlZC1wcmV2aWV3Jywge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHZhbHVlOiAkdmFsdWUsXHJcblx0XHRcdH1cclxuXHRcdH0sICggcmVzICkgPT4ge1xyXG5cdFx0XHRpZiggZmFsc2UgPT09IHJlcy5zdWNjZXNzICkge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcclxuXHRcdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKS5odG1sKCByZXMuZGF0YSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnIClcclxuXHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xyXG5cdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLXNwaW5uZXInICkucmVtb3ZlQ2xhc3MoICdpcy1hY3RpdmUnICk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdvZW1iZWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlbmRlcl9maWVsZCggJ3NlbGVjdCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnc2VsZWN0MicsIHt9ICk7XHJcblx0XHR0aGlzLmVsZW1lbnQuc2VsZWN0MiggdGhpcy5oYW5kbGVfYXJncyggJGFyZyApICk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGZpZWxkX2RlYnVnKCkge1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnc2VsZWN0MicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHR2YXIgJHRoaXMgICAgID0gdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkZW5hYmxlZCAgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZW5hYmxlZCcgKSxcclxuXHRcdFx0JGRpc2FibGVkID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWRpc2FibGVkJyApO1xyXG5cclxuXHRcdCRlbmFibGVkLnNvcnRhYmxlKCB7XHJcblx0XHRcdGNvbm5lY3RXaXRoOiAkZGlzYWJsZWQsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxyXG5cdFx0XHR1cGRhdGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcblx0XHRcdFx0dmFyICRlbCA9IHVpLml0ZW0uZmluZCggJ2lucHV0JyApO1xyXG5cclxuXHRcdFx0XHRpZiggdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tZW5hYmxlZCcgKSApIHtcclxuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZGlzYWJsZWQnLCAnZW5hYmxlZCcgKSApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2VuYWJsZWQnLCAnZGlzYWJsZWQnICkgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJyApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0Ly8gYXZvaWQgY29uZmxpY3RcclxuXHRcdCRkaXNhYmxlZC5zb3J0YWJsZSgge1xyXG5cdFx0XHRjb25uZWN0V2l0aDogJGVuYWJsZWQsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnc29ydGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdzdWJoZWFkaW5nJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdzd2l0Y2hlcicsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAndGV4dCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAndGV4dGFyZWEnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgY3NzX3VuaXRzIGZyb20gJ3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZm9udF93ZWlnaHRfc3R5bGUgPSBmYWxzZTtcclxuXHRcdGxldCAkZWwgICAgICAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQ7XHJcblx0XHRsZXQgJHByZXZpZXcgICAgICAgICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1mb250LXByZXZpZXcnICk7XHJcblx0XHRsZXQgJHRoaXMgICAgICAgICAgICAgID0gdGhpcztcclxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldFxyXG5cdFx0XHRcdCRmb250X2ZpZWxkICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicgKSxcclxuXHRcdFx0XHQkZm9udCAgICAgICAgICAgICAgPSAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tZm9udC1zZWxlY3RvcicgKS52YWwoKSxcclxuXHRcdFx0XHQkZm9udF93ZWlnaHRfc3R5bGUgPSAkdGhpcy5mb250X3N0eWxlKCAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS52YWwoKSApLFxyXG5cdFx0XHRcdCR0YWcgICAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC10YWcgc2VsZWN0JyApLnZhbCgpLFxyXG5cdFx0XHRcdCRjb2xvciAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZmllbGQtY29sb3JfcGlja2VyIGlucHV0LndwLWNvbG9yLXBpY2tlcicgKS52YWwoKSxcclxuXHRcdFx0XHQkYWxpZ24gICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYWxpZ24gc2VsZWN0JyApLnZhbCgpLFxyXG5cdFx0XHRcdCRmb250U2l6ZSAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1zaXplIGlucHV0JyApLnZhbCgpLFxyXG5cdFx0XHRcdCRsaW5lSGVpZ2h0ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1saW5lLWhlaWdodCBpbnB1dCcgKS52YWwoKSxcclxuXHRcdFx0XHQkYmFja1VQRm9udCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwLWZvbnQgc2VsZWN0JyApLnZhbCgpLFxyXG5cdFx0XHRcdCRkaXJlY3Rpb24gICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1kaXJlY3Rpb24gc2VsZWN0JyApLnZhbCgpLFxyXG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1sZXR0ZXItc3BhY2luZyBpbnB1dCcgKS52YWwoKSxcclxuXHRcdFx0XHRocmVmICAgICAgICAgICAgICAgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PScgKyAkZm9udCArICc6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQsXHJcblx0XHRcdFx0aHRtbCAgICAgICAgICAgICAgID0gJzxsaW5rIGhyZWY9XCInICsgaHJlZiArICdcIiBjbGFzcz1cIndwc2YtZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICsgJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPic7XHJcblxyXG5cdFx0XHRpZiggalF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHRqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5hdHRyKCAnaHJlZicsIGhyZWYgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRqUXVlcnkoICdoZWFkJyApLmFwcGVuZCggaHRtbCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGZvbnRTaXplID09PSAnJyB8fCAkZm9udFNpemUgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHQkZm9udFNpemUgPSAnMThweCc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkbGV0dGVyU3BhY2luZyA9PT0gJycgfHwgJGxldHRlclNwYWNpbmcgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyA9ICcxcHgnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGxpbmVIZWlnaHQgPT09ICcnIHx8ICRsaW5lSGVpZ2h0ID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0JGxpbmVIZWlnaHQgPSAnMjBweCc7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRsZXQgJF9hdHRycyA9ICcgZm9udC1mYW1pbHk6JyArICRmb250ICsgJzsgJyArXHJcblx0XHRcdFx0JyBmb250LXdlaWdodDonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCArICc7ICcgK1xyXG5cdFx0XHRcdCcgZm9udC1zdHlsZTonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLnN0eWxlICsgJzsgJyArXHJcblx0XHRcdFx0JyB0ZXh0LWFsaWduOicgKyAkYWxpZ24gKyAnOyAnICtcclxuXHRcdFx0XHQnIGNvbG9yOiAnICsgJGNvbG9yICsgJzsnICtcclxuXHRcdFx0XHQnIGZvbnQtc2l6ZTonICsgY3NzX3VuaXRzKCAkZm9udFNpemUgKSArICc7ICcgK1xyXG5cdFx0XHRcdCcgbGV0dGVyLXNwYWNpbmc6JyArIGNzc191bml0cyggJGxldHRlclNwYWNpbmcgKSArICc7ICcgK1xyXG5cdFx0XHRcdCcgbGluZS1oZWlnaHQ6JyArIGNzc191bml0cyggJGxpbmVIZWlnaHQgKSArICc7ICc7XHJcblxyXG5cclxuXHRcdFx0bGV0ICR0ZXh0ID0gJHByZXZpZXcudGV4dCgpO1xyXG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xyXG5cdFx0XHQkcHJldmlldy5hcHBlbmQoIGpRdWVyeSggJzwnICsgJHRhZyArICc+JyArICR0ZXh0ICsgJzwvJyArICR0YWcgKyAnID4nICkgKTtcclxuXHRcdFx0JHByZXZpZXcuZmluZCggJHRhZyApLmF0dHIoICdzdHlsZScsICRfYXR0cnMgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRmb250X3N0eWxlKCAkaW5mbyApIHtcclxuXHRcdGxldCAkd2VpZ2h0X3ZhbCA9ICc0MDAnLFxyXG5cdFx0XHQkc3R5bGVfdmFsICA9ICdub3JtYWwnO1xyXG5cclxuXHRcdHN3aXRjaCggJGluZm8gKSB7XHJcblx0XHRcdGNhc2UgJzEwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnMTAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzMwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnMzAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzUwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnNTAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzcwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnNzAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzkwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnOTAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2l0YWxpYyc6XHJcblx0XHRcdFx0JHN0eWxlX3ZhbCA9ICdpdGFsaWMnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHsgd2VpZ2h0OiAkd2VpZ2h0X3ZhbCwgc3R5bGU6ICRzdHlsZV92YWwgfTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICd0eXBvZ3JhcGh5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0aW5pdCgpIHtcclxuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxyXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkYWRkICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uJyApLFxyXG5cdFx0XHQkaW5wdXQgICAgPSAkZWxlbS5maW5kKCAnaW5wdXRbdHlwZT10ZXh0XScgKSxcclxuXHRcdFx0JHNldHRpbmdzID0gJHRoaXMub3B0aW9ucygpLCB3cF9tZWRpYV9mcmFtZTtcclxuXHJcblx0XHQkYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoIHdwX21lZGlhX2ZyYW1lICkge1xyXG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcclxuXHRcdFx0XHR0aXRsZTogJHNldHRpbmdzLnNldHRpbmdzLmZyYW1lX3RpdGxlLFxyXG5cdFx0XHRcdGxpYnJhcnk6IHtcclxuXHRcdFx0XHRcdHR5cGU6ICRzZXR0aW5ncy5zZXR0aW5ncy51cGxvYWRfdHlwZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YnV0dG9uOiB7XHJcblx0XHRcdFx0XHR0ZXh0OiAkc2V0dGluZ3Muc2V0dGluZ3MuaW5zZXJ0X3RpdGxlLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9IHdwX21lZGlhX2ZyYW1lLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCk7XHJcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5hdHRyaWJ1dGVzLnVybCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XHJcblx0XHRcdH0gKTtcclxuXHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAndXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICd3cF9lZGl0b3InLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHRpbml0KCkge1xyXG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXHJcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXHJcblx0XHRcdCR0ZXh0YXJlYSA9ICRlbGVtLmZpbmQoICd0ZXh0YXJlYScgKTtcclxuXHRcdCRlbGVtLmZpbmQoICcjd3Bvbmlvbi13cC1saW5rLXBpY2tlciA+IGJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCR0ZXh0YXJlYS52YWwoICcnICk7XHJcblx0XHRcdGlmKCAhd2luZG93LndwTGluayApIHtcclxuXHRcdFx0XHRzd2FsKCB7XHJcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICR3cG9uaW9uLnRleHQoICd3cF9saW5rX2Vycm9yX3RpdGxlJywgJ1dQIExpbmsgSlMgTGliIE5vdCBGb3VuZCcgKSxcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdpbmRvdy53cExpbmsub3BlbiggJHRleHRhcmVhLmF0dHIoICdpZCcgKSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHJcblx0XHQkdGV4dGFyZWEub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0ICRkYXRhID0galF1ZXJ5KCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xyXG5cclxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkgKSB7XHJcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4uZXhhbXBsZV9vdXRwdXQgc3Bhbi52YWx1ZScgKS5odG1sKCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3VybCcgKSApIHtcclxuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApLnZhbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkgKSB7XHJcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApLnZhbCggJGRhdGEudGV4dCgpICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGFyZ2V0JyApICkge1xyXG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0YXJnZXQnICkudmFsKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKSApIHtcclxuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKSApIHtcclxuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50aXRsZSBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLnRleHQoKSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkgKSB7XHJcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICd3cF9saW5rcycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuLi9jb3JlL2RlYnVnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGxldCAkZGVwID0gdGhpcy5vcHRpb24oICdkZXBlbmRlbmN5JyApO1xuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRlcC5jb250cm9sbGVyICkge1xuXHRcdFx0aWYoICRkZXAuY29udHJvbGxlci5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmICRkZXAuY29uZGl0aW9uLmhhc093blByb3BlcnR5KCAka2V5ICkgJiYgJGRlcC52YWx1ZS5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRsZXQgJGNvbnRyb2xsZXIgPSAkZGVwLmNvbnRyb2xsZXIgWyAka2V5IF0sXG5cdFx0XHRcdFx0JGNvbmRpdGlvbiAgPSAkZGVwLmNvbmRpdGlvbiBbICRrZXkgXSxcblx0XHRcdFx0XHQkdmFsdWUgICAgICA9ICRkZXAudmFsdWUgWyAka2V5IF0sXG5cdFx0XHRcdFx0JGZpZWxkICAgICAgPSAnW2RhdGEtZGVwZW5kLWlkPVwiJyArICRjb250cm9sbGVyICsgJ1wiXSc7XG5cdFx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcubmVzdGFibGUgKSB7XG5cdFx0XHRcdFx0bGV0ICRJTlBVVCA9IHRoaXMuY29uZmlnLnBhcmVudC5maW5kKCAnW2RhdGEtZGVwZW5kLWlkPScgKyAkY29udHJvbGxlciArICddJyApO1xuXHRcdFx0XHRcdGlmKCAkSU5QVVQubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCRmaWVsZCA9ICdbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJHdwb25pb24uZmllbGRJRCggJElOUFVUICkgKyAnXCJdOmlucHV0Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5jcmVhdGVSdWxlKCAkZmllbGQsICRjb25kaXRpb24sICR2YWx1ZSApICk7XG5cdFx0XHRcdHRoaXMuc2V0X2NvbnR4dCggdGhpcy5jb250eHQuaW5jbHVkZSggdGhpcy5lbGVtZW50ICkgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ0RlcGVuZGVuY3knOiAkZGVwLCAnTmVzdGFibGUgRGVwZW5kZW5jeSc6IHRoaXMuY29uZmlnLm5lc3RhYmxlIH0gKTtcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXHR9XG59XG5cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRmaWQgICAgICAgICA9IHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS1maWVsZC1qc2lkJyApO1xuXHRcdGxldCAkdG9vbHRpcF9rZXkgPSBmYWxzZTtcblx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJ3dwb25pb24taGVscCc7XG5cdFx0fSBlbHNlIGlmKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLXdyYXAtdG9vbHRpcCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cmFwX3Rvb2x0aXAnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAkZmlkICsgJ3Rvb2x0aXAnO1xuXHRcdH1cblxuXHRcdGxldCAkYXJnID0gKCB0cnVlID09PSAkd3Bvbmlvbi52YWxpZF9qc29uKCAkZmlkICkgKSA/IEpTT04ucGFyc2UoICRmaWQgKSA6IHRoaXMub3B0aW9uKCAkdG9vbHRpcF9rZXksIGZhbHNlICk7XG5cblx0XHRjb25zdCBzdGF0ZSA9IHtcblx0XHRcdGlzRmV0Y2hpbmc6IGZhbHNlLFxuXHRcdFx0Y2FuRmV0Y2g6IHRydWVcblx0XHR9O1xuXG5cdFx0aWYoIGZhbHNlID09PSAkYXJnICkge1xuXHRcdFx0aWYoICR3cG9uaW9uLnZhbGlkX2pzb24oIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweScgKSApICkge1xuXHRcdFx0XHQkYXJnID0gSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLXRpcHB5JyApICk7XG5cdFx0XHR9IGVsc2UgaWYoICR3cG9uaW9uLnZhbGlkX2pzb24oIHRoaXMuZWxlbWVudC5hdHRyKCAnZGF0YS10aXBweS1hcmdzJyApICkgKSB7XG5cdFx0XHRcdCRhcmcgPSBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtdGlwcHktYXJncycgKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCB0aGlzLmVsZW1lbnQuYXR0ciggJ3RpcHB5LWFyZ3MnICkgKSApIHtcblx0XHRcdFx0JGFyZyA9IEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5hdHRyKCAndGlwcHktYXJncycgKSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCAkYXJnICkge1xuXHRcdFx0JGFyZy5wZXJmb3JtYW5jZSA9IGZhbHNlO1xuXHRcdFx0aWYoICRhcmcuaW1hZ2UgIT09IHVuZGVmaW5lZCAmJiAkYXJnLmltYWdlICE9PSBmYWxzZSApIHtcblx0XHRcdFx0bGV0ICRpbWFnZSAgICAgICAgICA9ICRhcmcuaW1hZ2U7XG5cdFx0XHRcdCRhcmcuaW50ZXJhY3RpdmUgICAgPSB0cnVlO1xuXHRcdFx0XHQkYXJnLmNvbnRlbnQgICAgICAgID0gJ0xvYWRpbmcuLi4nO1xuXHRcdFx0XHQvLyRhcmcuaHRtbCAgICAgICAgICAgPSAnI3dwb3RwaW1nJztcblx0XHRcdFx0JGFyZy51cGRhdGVEdXJhdGlvbiA9IDIwMDA7XG5cdFx0XHRcdCRhcmcub25TaG93ICAgICAgICAgPSBhc3luYyBmdW5jdGlvbiggdGlwICkge1xuXHRcdFx0XHRcdGlmKCBzdGF0ZS5pc0ZldGNoaW5nIHx8ICFzdGF0ZS5jYW5GZXRjaCApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RhdGUuaXNGZXRjaGluZyA9IHRydWU7XG5cdFx0XHRcdFx0c3RhdGUuY2FuRmV0Y2ggICA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goICRpbWFnZSApO1xuXHRcdFx0XHRcdFx0Y29uc3QgYmxvYiAgICAgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cdFx0XHRcdFx0XHRjb25zdCB1cmwgICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcblx0XHRcdFx0XHRcdGlmKCB0aXAuc3RhdGUuaXNWaXNpYmxlICkge1xuXHRcdFx0XHRcdFx0XHR0aXAuc2V0Q29udGVudCggJzxkaXYgc3R5bGU9XCJtaW4td2lkdGg6MjVweDttaW4taGVpZ2h0OjI1cHg7XCI+PGltZyBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7XCIgc3JjPVwiJyArIHVybCArICdcIi8+PC9kaXY+JyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdFx0XHR0aXAuc2V0Q29udGVudCggYEZldGNoIGZhaWxlZC4gJHtlfWAgKTtcblx0XHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdFx0c3RhdGUuaXNGZXRjaGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5vbkhpZGRlbiAgICAgICA9ICggdGlwICkgPT4ge1xuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoID0gdHJ1ZTtcblx0XHRcdFx0XHR0aXAuc2V0Q29udGVudCggJ0xvYWRpbmcuLi4nICk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcucG9wcGVyT3B0aW9ucyAgPSB7XG5cdFx0XHRcdFx0bW9kaWZpZXJzOiB7XG5cdFx0XHRcdFx0XHRwcmV2ZW50T3ZlcmZsb3c6IHtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRoaWRlOiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRhcmcgPSB7fTtcblx0XHR9XG5cblx0XHRkZWxldGUgJGFyZy5pbWFnZTtcblx0XHRkZWxldGUgJGFyZy5pY29uO1xuXHRcdHRoaXMuZWxlbWVudC50aXBweSggdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJHRvb2x0aXBfa2V5ICkgKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZW5kZXJfZmllbGQoICdmaWVsZF90b29sdGlwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIGpRdWVyeSApID0+IHtcblx0LyoqXG5cdCAqIFdQT25pb24gUmVsYXRlZCBGdW5jdGlvbnMuXG5cdCAqL1xuXHQkLmZuLmV4dGVuZCgge1xuXHRcdC8qKlxuXHRcdCAqIEFuaW1hdGUgQ1NTIFJlbGF0ZWQgRnVuY3Rpb25zLlxuXHRcdCAqL1xuXHRcdGFuaW1hdGVDc3M6IGZ1bmN0aW9uKCBhbmltYXRpb25OYW1lLCBjYWxsYmFjayApIHtcblx0XHRcdGxldCBhbmltYXRpb25FbmQgPSAoIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0bGV0IGFuaW1hdGlvbnMgPSB7XG5cdFx0XHRcdFx0YW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcblx0XHRcdFx0XHRPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdFx0TW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uRW5kJyxcblx0XHRcdFx0XHRXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGZvciggbGV0IHQgaW4gYW5pbWF0aW9ucyApIHtcblx0XHRcdFx0XHRpZiggZWwuc3R5bGVbIHQgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFuaW1hdGlvbnNbIHQgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKSggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKSApO1xuXG5cdFx0XHR0aGlzLmFkZENsYXNzKCAnYW5pbWF0ZWQgJyArIGFuaW1hdGlvbk5hbWUgKS5vbmUoIGFuaW1hdGlvbkVuZCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoIHRoaXMgKS5yZW1vdmVDbGFzcyggJ2FuaW1hdGVkICcgKyBhbmltYXRpb25OYW1lICk7XG5cdFx0XHRcdGlmKCB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soICQoIHRoaXMgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBBIEN1c3RvbSBXcmFwIENsYXNzIFRvIEhhbmRsZSBUaXBweSBJbnN0YW5jZVxuXHRcdCAqIEBwYXJhbSAkYXJndW1lbnRzXG5cdFx0ICogQHJldHVybnMgeyp9XG5cdFx0ICovXG5cdFx0dGlwcHk6IGZ1bmN0aW9uKCAkYXJndW1lbnRzICkge1xuXHRcdFx0dmFyIHRpcHB5X2hlbHBlciA9IHtcblx0XHRcdFx0Y3JlYXRlX2luc3RhbmNlOiBmdW5jdGlvbiggJGVsZW0sICRhcmd1bWVudHMgKSB7XG5cdFx0XHRcdFx0JGFyZ3VtZW50cyA9ICggdHlwZW9mICRhcmd1bWVudHMgPT09ICd1bmRlZmluZWQnICkgPyB7fSA6ICRhcmd1bWVudHM7XG5cdFx0XHRcdFx0aWYoICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHR2YXIgJF9pbnN0YW5jZV9pZCA9ICdUaXBweScgKyB3aW5kb3cud3Bvbmlvbi5jb3JlLnJhbmRfaWQoKTtcblx0XHRcdFx0XHRcdCRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJywgJF9pbnN0YW5jZV9pZCApO1xuXG5cdFx0XHRcdFx0XHR2YXIgJHRpdGxlICAgICAgPSAkZWxlbS5hdHRyKCAndGl0bGUnICk7XG5cdFx0XHRcdFx0XHR2YXIgJGRhdGFfdGlwcHkgPSAkZWxlbS5hdHRyKCAnZGF0YS10aXBweScgKTtcblxuXHRcdFx0XHRcdFx0aWYoICR0aXRsZSAmJiAkdGl0bGUgIT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mICRhcmd1bWVudHMuY29udGVudCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0XHRcdFx0JGFyZ3VtZW50cy5jb250ZW50ID0gJHRpdGxlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCAkZGF0YV90aXBweSAmJiAkZGF0YV90aXBweSAhPT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgJGFyZ3VtZW50cy5jb250ZW50ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0XHQkYXJndW1lbnRzLmNvbnRlbnQgPSAkZGF0YV90aXBweTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSA9IHRpcHB5KCAkZWxlbVsgMCBdLCAkYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRfaW5zdGFuY2U6IGZ1bmN0aW9uKCAkZWxlbSApIHtcblx0XHRcdFx0XHRpZiggJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyICRfaW5zdGFuY2VfaWQgPSAkZWxlbS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKTtcblx0XHRcdFx0XHRyZXR1cm4gKCB1bmRlZmluZWQgIT09IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdICkgPyB3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSA6IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiggdGhpcy5sZW5ndGggPiAxICkge1xuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRpcHB5X2hlbHBlci5jcmVhdGVfaW5zdGFuY2UoIGpRdWVyeSggdGhpcyApLCAkYXJndW1lbnRzICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgJHN0YXR1cyA9IHRpcHB5X2hlbHBlci5jcmVhdGVfaW5zdGFuY2UoIGpRdWVyeSggdGhpcyApLCAkYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiAoIHRydWUgPT09ICRzdGF0dXMgKSA/IHRpcHB5X2hlbHBlci5nZXRfaW5zdGFuY2UoIGpRdWVyeSggdGhpcyApICkgOiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyBBbiBBY3RpdmUgaW5zdGFuY2Vcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aXBweV9nZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciAkX2luc3RhbmNlX2lkID0galF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICk7XG5cdFx0XHRyZXR1cm4gKCB1bmRlZmluZWQgIT09IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdICkgPyB3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSA6IGZhbHNlO1xuXHRcdH0sXG5cdH0gKTtcblxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEEgQWJzdHJhY3QgQ2xhc3MgSW5zdGFuY2UuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJGNvbnR4dFxuXHQgKiBAcmV0dXJucyB7e2FqYXgoKj0sICo9KTogKiwganNfZXJyb3IoKik6IHZvaWQsIGluaXRfZmllbGQoKj0sICopOiB2b2lkLCBzZXRfYXJncygqKTogKiwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGpzX2Vycm9yX2hhbmRsZXIoKj0pOiB2b2lkLCBpZCgpOiAqLCBwbHVnaW5faWQoKTogKiwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICosIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBvcHRpb25zKCk6ICosIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBpbml0KCksIHJlbG9hZCgpOiAqLCBtb2R1bGUoKTogKiwgc2V0X2NvbnR4dCgqKTogKiwgY29udHh0OiAqLCBlbGVtZW50OiAqLCBob29rOiAqLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICp9fCp8d2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3R9XG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9maWVsZCA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0sICRjb250eHQgKTtcblxuXHQvKipcblx0ICogSGFuZGxlcyBXUE9uaW9uIE5vdGljZXMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX25vdGljZSA9ICggJGVsZW0gKSA9PiB7XG5cdFx0aWYoICRlbGVtLmZpbmQoICcud3Bvbmlvbi1yZW1vdmUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdCRlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJF9lbCA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24tcmVtb3ZlJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkX2VsLnNsaWRlVXAoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX2VsLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdFx0cmV0dXJuICRlbGVtO1xuXHRcdH1cblxuXHRcdGxldCAkYXV0byA9ICRlbGVtLmF0dHIoICdkYXRhLWF1dG9jbG9zZScgKTtcblx0XHRpZiggJGF1dG8gKSB7XG5cdFx0XHQkYXV0byA9IHBhcnNlSW50KCAkYXV0byApO1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHQkZWxlbS5zbGlkZVVwKCAnc2xvdycsICgpID0+IHtcblx0XHRcdFx0XHQkZWxlbS5yZW1vdmUoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSwgJGF1dG8gKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEJhc2ljIFdQT25pb24gSlMgU2V0dXAuXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9zZXR1cCA9ICgpID0+IHtcblx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLnNldHRpbmdzX2FyZ3MgICAgPSB3aW5kb3cud3Bvbmlvbi5jb3JlLndpbmRvd0FyZ3MoICd3cG9uaW9uX2NvcmUnLCB7fSApO1xuXHRcdHdpbmRvdy53cG9uaW9uLmNvcmUudGV4dCAgICAgICAgICAgICA9IHdpbmRvdy53cG9uaW9uLmNvcmUud2luZG93QXJncyggJ3dwb25pb25faWw4bicsIHt9ICk7XG5cdFx0d2luZG93Lndwb25pb24uY29yZS5kZWJ1Z19pbmZvICAgICAgID0gbnVsbDtcblx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLmZpZWxkX2RlYnVnX2luZm8gPSBudWxsO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZW5kZXJzIEEgRmllbGQuXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKiBAcGFyYW0gJGNhbGxiYWNrXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9yZW5kZXJfZmllbGQgPSAoICR0eXBlLCAkY2FsbGJhY2sgKSA9PiB7XG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuYWRkQWN0aW9uKCAnd3Bvbmlvbl9pbml0X2ZpZWxkXycgKyAkdHlwZSwgJ3dwb25pb25fY29yZScsICggJGVsZW0gKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQkY2FsbGJhY2soICRlbGVtICk7XG5cdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyggYXJndW1lbnRzLCAnIFxcbicgKyBlICsgJyAgXFxuRm9yIDogd3Bvbmlvbl9pbml0X2ZpZWxkXycgKyAkdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHQvKipcblx0ICogRnVuY3Rpb24gVXNlZCBvdXRzaWRlIG9mIFdQT25pb24gVG8gQ3JlYXRlXG5cdCAqIEBwYXJhbSAkaW5pdF9tZXRob2Rcblx0ICogQHBhcmFtICRtZXRob2RzXG5cdCAqIEByZXR1cm5zIHt7aW5pdDogKiwgbmV3KCk6ICRjbGFzcywgcHJvdG90eXBlOiAkY2xhc3N9fVxuXHQgKi9cblx0d2luZG93Lndwb25pb25fY3JlYXRlX2ZpZWxkID0gKCAkaW5pdF9tZXRob2QsICRtZXRob2RzID0gZmFsc2UgKSA9PiB7XG5cdFx0bGV0ICRvcmdfY2xhc3MgPSByZXF1aXJlKCAnLi4vY29yZS9maWVsZCcgKS5kZWZhdWx0O1xuXHRcdGxldCAkY2xhc3MgICAgID0gY2xhc3MgZXh0ZW5kcyAkb3JnX2NsYXNzIHtcblx0XHR9O1xuXG5cdFx0JGNsYXNzLnByb3RvdHlwZS5pbml0ID0gJGluaXRfbWV0aG9kO1xuXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRtZXRob2RzICkgKSB7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtZXRob2RzICkge1xuXHRcdFx0XHRpZiggJG1ldGhvZHMuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHQkY2xhc3MucHJvdG90eXBlWyAka2V5IF0gPSAkbWV0aG9kc1sgJGtleSBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkY2xhc3M7XG5cdH07XG5cbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCBqUXVlcnkgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0bGV0ICRpbWFnZSA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApICkgKSA/IHRoaXMuZWxlbWVudC5hdHRyKCAnc3JjJyApIDogdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApO1xuXHRcdHN3YWwoIHtcblx0XHRcdGltYWdlVXJsOiAkaW1hZ2UsXG5cdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdGJhY2tkcm9wOiBgcmdiYSgwLDAsMCwwLjQ0KWBcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVuZGVyX2ZpZWxkKCAnaW1hZ2VfcG9wdXAnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCB7IHJhbmRfbWQ1IH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRtY2VfZWRpdG9yICA9IHRpbnlNQ0VQcmVJbml0Lm1jZUluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JHF1aWNrX3RhZ3MgID0gdGlueU1DRVByZUluaXQucXRJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRORVdfSUQgICAgICA9ICd3cG9uaW9uLXdwLWVkaXRvci0nICsgcmFuZF9tZDUoKSxcblx0XHRcdFx0JHRleHRBcmVhICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5jbG9uZSgpLFxuXHRcdFx0XHQkYWN0dWFsX0lEICAgPSAkdGV4dEFyZWEuYXR0ciggJ2lkJyApLFxuXHRcdFx0XHQkYWN0dWFsX2h0bWwgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoKSxcblx0XHRcdFx0JHJlZ2V4ICAgICAgID0gbmV3IFJlZ0V4cCggJGFjdHVhbF9JRCwgXCJnXCIgKTtcblx0XHRcdCRhY3R1YWxfaHRtbCAgICAgPSAkYWN0dWFsX2h0bWwucmVwbGFjZSggJHJlZ2V4LCAkTkVXX0lEICk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCggJGFjdHVhbF9odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLnBhcmVudCgpLmFwcGVuZCggJHRleHRBcmVhICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhOm5vdCgjJyArICRhY3R1YWxfSUQgKyAnKScgKS5yZW1vdmUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuYXR0ciggJ2lkJywgJE5FV19JRCApO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRtY2VfZWRpdG9yICkgKSB7XG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcblx0XHRcdFx0dGlueW1jZS5pbml0KCAkbWNlX2VkaXRvciApO1xuXHRcdFx0XHR0aW55TUNFLmV4ZWNDb21tYW5kKCAnbWNlQWRkRWRpdG9yJywgZmFsc2UsICcjJyArICRORVdfSUQgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkcXVpY2tfdGFncyApICkge1xuXHRcdFx0XHQkcXVpY2tfdGFncy5pZCA9ICRORVdfSUQ7XG5cdFx0XHRcdHF1aWNrdGFncyggJHF1aWNrX3RhZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcjYnVsa19lZGl0JywgKCkgPT4ge1xuXHRcdFx0bGV0ICRmaW5hbF9hcmdzID0geyBwb3N0X2lkczogW10gfSxcblx0XHRcdFx0JGJ1bGtfZWRpdCAgPSAkKCAnI2J1bGstZWRpdCcgKTtcblxuXHRcdFx0JGJ1bGtfZWRpdC5maW5kKCAnI2J1bGstdGl0bGVzJyApLmNoaWxkcmVuKCkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzLnBvc3RfaWRzLnB1c2goICQoIHRoaXMgKS5hdHRyKCAnaWQnICkucmVwbGFjZSggL14odHRsZSkvaSwgJycgKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcud3Bvbmlvbi1xdWljay1lZGl0LWZpZWxkc2V0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkZmluYWxfYXJncyA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICQoIHRoaXMgKS5zZXJpYWxpemVPYmplY3QoKSwgJGZpbmFsX2FyZ3MgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICdzYXZlLWJ1bGstZWRpdCcsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGFzeW5jOiBmYWxzZSxcblx0XHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiAkZmluYWxfYXJncyxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgV1BPbmlvbl9HdXR0ZW5iZXJnIHtcblx0Y29uc3RydWN0b3IoICRpZCA9ICcnLCAkYXJncyA9IHt9ICkge1xuXHRcdHRoaXMuaWQgICA9ICRpZDtcblx0XHR0aGlzLmFyZ3MgPSAkd3Bvbmlvbi5qc19mdW5jKCAkYXJncyApO1xuXG5cdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3Muc2F2ZSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHR0aGlzLmFyZ3Muc2F2ZSA9ICggYmxvY2sgKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNhdmVfaGFuZGxlciggYmxvY2sgKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3MuZWRpdCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHR0aGlzLmFyZ3MuZWRpdCA9ICggYmxvY2sgKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVkaXRfaGFuZGxlciggYmxvY2sgKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0d2luZG93LndwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSggdGhpcy5pZCwgdGhpcy5hcmdzICk7XG5cdH1cblxuXHRzYXZlX2hhbmRsZXIoIGJsb2NrICkge1xuXHR9XG5cblx0ZWRpdF9oYW5kbGVyKCBibG9jayApIHtcblx0XHRsZXQgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG5cblx0XHRsZXQgJF9wb3N0aWRzICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeSggcGFyc2VJbnQoIGpRdWVyeSggJ2lucHV0I3Bvc3RfSUQnICkudmFsKCkgKSApO1xuXHRcdGJsb2NrLmF0dHJpYnV0ZXMucG9zdF9pZCA9ICRfcG9zdGlkcztcblx0XHRsZXQgYmxvY2tfaWQgICAgICAgICAgICAgPSBibG9jay5hdHRyaWJ1dGVzLmJsb2NrX2lkID0gYmxvY2suYXR0cmlidXRlcy5ibG9ja19pZCB8fCBibG9jay5jbGllbnRJZDtcblx0XHRsZXQgJHJlbW90ZSAgICAgICAgICAgICAgPSBlbCggJ2Zvcm0nLCB7XG5cdFx0XHRjbGFzc05hbWU6ICd3cG9uaW9uLWJsb2NrLWdyb3VwLWNvbnRlbnQnLFxuXHRcdFx0J2RhdGEtYmxvY2staWQnOiBibG9ja19pZCxcblx0XHR9LCBbXG5cdFx0XHRlbCggd2luZG93LndwLmNvbXBvbmVudHMuU2VydmVyU2lkZVJlbmRlciwge1xuXHRcdFx0XHRibG9jazogdGhpcy5pZCxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdHBvc3RfaWQ6ICRfcG9zdGlkcyxcblx0XHRcdFx0XHRibG9ja19pZDogYmxvY2tfaWQsXG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdF0gKTtcblxuXG5cdFx0bGV0IGNoaWxkcmVuID0gW107XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5zdHlsZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRpZiggdGhpcy5hcmdzLnN0eWxlID09PSAnZGVmYXVsdCcgKSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goIGVsKCAnZGl2Jywge1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ2FjZi1ibG9jay1ncm91cC1oZWFkaW5nJyxcblx0XHRcdFx0fSwgW1xuXHRcdFx0XHRcdGVsKCAnc3BhbicsIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtJyArIHRoaXMuYXJncy5pY29uXG5cdFx0XHRcdFx0fSApLFxuXHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHR0aGlzLmFyZ3MudGl0bGUsXG5cdFx0XHRcdF0gKSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBzZWxlY3RvciA9ICdmb3JtW2RhdGEtYmxvY2staWQ9XCInICsgYmxvY2tfaWQgKyAnXCJdJztcblxuXHRcdGlmKCBqUXVlcnkoIHNlbGVjdG9yICkubGVuZ3RoIDwgMSApIHtcblx0XHR9XG5cblxuXHRcdC8qaWYoICQoIHNlbGVjdG9yICkubGVuZ3RoIDwgMSApIHtcblx0XHRcdCQoIGRvY3VtZW50ICkub24oICdhY2Jfc2F2ZV9maWVsZHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHRyeVVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKCBibG9jay5pc1NlbGVjdGVkIHx8ICQoIHNlbGVjdG9yICkuaXMoICc6aG92ZXInICkgKSB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIGJsb2NrLnVwZGF0ZVRpbWVvdXQgKTtcblx0XHRcdFx0XHRcdGJsb2NrLnVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCB0cnlVcGRhdGUsIDUwMCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJsb2NrLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdGFjZl9maWVsZHM6IGFjZi5zZXJpYWxpemUoICQoIHNlbGVjdG9yICkgKVsgJ2FjZicgXSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0c2V0VGltZW91dCggdHJ5VXBkYXRlLCAyNTAgKTtcblx0XHRcdH0gKTtcblx0XHR9Ki9cblx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHQvLyAgIGFjZi5kb19hY3Rpb24oJ3JlYWR5JywgJCgnW2RhdGEtYmxvY2staWQ9XCInICsgYmxvY2tfaWQgKyAnXCJdJykpO1xuXHRcdC8vIH0sIDUwMCk7XG5cblx0XHRjaGlsZHJlbi5wdXNoKCAkcmVtb3RlICk7XG5cblx0XHRyZXR1cm4gZWwoICdkaXYnLCB7IGNsYXNzTmFtZTogJ3dwb25pb24tYmxvY2stZ3JvdXAtd3JhcHBlcicgfSwgY2hpbGRyZW4gKTtcblxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XG5cdCQoIGZ1bmN0aW9uKCkge1xuXHRcdGlmKCAhd2luZG93LndwIHx8ICF3aW5kb3cud3AuYmxvY2tzIHx8ICF3aW5kb3cud3AuZWRpdG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRcdC8vbGV0ICRibG9ja3MgICAgID0gd2luZG93LndwLmJsb2Nrcztcblx0XHRcdGxldCAkd3BvX2Jsb2NrcyA9ICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2d1dHRlbmJlcmdfYmxvY2tzJyApO1xuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkd3BvX2Jsb2NrcyApICYmIHdpbmRvdy53cG9uaW9uLl8uaXNBcnJheSggJHdwb19ibG9ja3MgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkd3BvX2Jsb2NrcyApIHtcblx0XHRcdFx0XHRpZiggJHdwb19ibG9ja3MuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdG5ldyBXUE9uaW9uX0d1dHRlbmJlcmcoICRrZXksICR3cG9fYmxvY2tzWyAka2V5IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgd3AgKSA9PiB7XG5cdGNvbnN0IGZpeF9tZWRpYV91aSA9ICgpID0+IHtcblx0XHRsZXQgJHRhYmxlICA9IGpRdWVyeSggJy5jb21wYXQtYXR0YWNobWVudC1maWVsZHMnICksXG5cdFx0XHQkZmllbGRzID0gJHRhYmxlLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICk7XG5cdFx0JGZpZWxkcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0JHRhYmxlLmJlZm9yZSggalF1ZXJ5KCB0aGlzICkucGFyZW50KCkuaHRtbCgpICk7XG5cdFx0fSApO1xuXG5cdFx0d2luZG93Lndwb25pb25fc2V0dXAoKTtcblx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJHRhYmxlLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkgKS5yZWxvYWQoKTtcblx0fTtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdGlmKCAkKCAnLmNvbXBhdC1hdHRhY2htZW50LWZpZWxkcycgKS5sZW5ndGggPiAwICYmICQoICdib2R5JyApLmhhc0NsYXNzKCAncG9zdC10eXBlLWF0dGFjaG1lbnQnICkgKSB7XG5cdFx0XHRmaXhfbWVkaWFfdWkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoIHR5cGVvZiB3cC5tZWRpYSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdwLm1lZGlhLmZyYW1lcy5icm93c2UgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHR3cC5tZWRpYS5mcmFtZXMuYnJvd3NlLm9uKCAnZWRpdDphdHRhY2htZW50JywgKCkgPT4ge1xuXHRcdFx0XHRcdGZpeF9tZWRpYV91aSgpO1xuXHRcdFx0XHRcdHdwLm1lZGlhLmZyYW1lcy5lZGl0Lm9uKCAnYXR0YWNobWVudDpjb21wYXQ6cmVhZHknLCAoKSA9PiBmaXhfbWVkaWFfdWkoKSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLm1lbnUoKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICdoMi5hamF4LWNvbnRhaW5lciBidXR0b24nLCB0aGlzLnNhdmVfaGFuZGxlciApO1xuXHR9XG5cblx0bWVudSgpIHtcblx0XHRsZXQgJGVsZW0gPSB0aGlzLmVsZW1lbnQ7XG5cdFx0JGVsZW0ub24oICdjbGljaycsICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgbGkgYScsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmhhc0NsYXNzKCAnZHJvcGRvd24nICkgKSB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuaXMoICc6dmlzaWJsZScgKSApIHtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgbGkgdWwnICkuc2xpZGVVcCggJ2Zhc3QnICk7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLnNsaWRlVG9nZ2xlKCAnZmFzdCcgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0ICRocmVmICAgICAgICAgICA9IHdpbmRvdy53cG9uaW9uLmhlbHBlci51cmxfcGFyYW1zKCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1ocmVmJyApICksXG5cdFx0XHRcdFx0JHBhcmVudCAgICAgICAgID0gJ3dwb25pb24tdGFiLScgKyAkaHJlZlsgJ3BhcmVudC1pZCcgXSxcblx0XHRcdFx0XHQkc2VjdGlvbiAgICAgICAgPSAoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICkgPyAkcGFyZW50ICsgJy0nICsgJGhyZWZbICdzZWN0aW9uLWlkJyBdIDogZmFsc2UsXG5cdFx0XHRcdFx0JHBhcmVudF9hY3RpdmVzID0gJGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLXBhcmVudC13cmFwcycgKSxcblx0XHRcdFx0XHQkY3VycmVudCAgICAgICAgPSAkZWxlbS5maW5kKCAnZGl2IycgKyAkcGFyZW50ICk7XG5cblx0XHRcdFx0JGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMuaGlkZSgpO1xuXG5cdFx0XHRcdGlmKCAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gIT09IHVuZGVmaW5lZCAmJiAkaHJlZlsgJ3BhcmVudC1pZCcgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICdkaXYud3Bvbmlvbi1zZWN0aW9uLXdyYXBzJyApLmhpZGUoKTtcblx0XHRcdFx0XHQkY3VycmVudC5maW5kKCAnIGRpdiMnICsgJHNlY3Rpb24gKS5zaG93KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkY3VycmVudC5zaG93KCk7XG5cblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhLmFjdGl2ZSAnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUgJyApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSA+IGxpID4gYScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhW2RhdGEtd3Bvbmlvbi1pZD1cIndwb25pb25fbWVudV8nICsgJGhyZWZbICdwYXJlbnQtaWQnIF0gKyAnXCJdJyApXG5cdFx0XHRcdFx0IC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRzYXZlX2hhbmRsZXIoIGUgKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCAkcGFyZW50ID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHQkYmFzZSAgID0gJHBhcmVudC5wYXJlbnQoKS5wYXJlbnQoKSxcblx0XHRcdCRoaWRkZW4gPSAkcGFyZW50LmZpbmQoICdkaXYud3Bvbmlvbi1tZXRhYm94LXNlY3VyZS1kYXRhJyApO1xuXG5cdFx0JGJhc2UuYmxvY2soIHsgbWVzc2FnZTogbnVsbCwgb3ZlcmxheUNTUzogeyBiYWNrZ3JvdW5kOiAnIzAwMCcsIG9wYWNpdHk6IDAuNyB9IH0gKTtcblxuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnaWQnICkgKTtcblx0XHR9ICk7XG5cdFx0bGV0ICRmaWVsZHMgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoICc6aW5wdXQnICk7XG5cdFx0bGV0ICR2YWx1ZXMgPSAkZmllbGRzLnNlcmlhbGl6ZSgpO1xuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLnJlbW92ZUF0dHIoICduYW1lJyApO1xuXG5cdFx0JHdwb25pb24uYWpheCggJ3NhdmVfbWV0YWJveCcsIHsgZGF0YTogJHZhbHVlcyB9LCBmdW5jdGlvbiggcmVzICkge1xuXHRcdFx0JGJhc2UuaHRtbCggcmVzICk7XG5cdFx0XHQkYmFzZS51bmJsb2NrKCk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJGJhc2UuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0JCggJ2Rpdi5wb3N0Ym94Lndwb25pb24tbWV0YWJveCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdG5ldyBXUE9uaW9uX01ldGFib3hfTW9kdWxlKCAkKCB0aGlzICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIFdQT25pb25fUXVpY2tfRWRpdCBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5wb3N0X2lkID0gdGhpcy5jb250eHQ7XG5cdFx0bGV0ICRpZCAgICAgID0gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICkgKyAnXycgKyB0aGlzLnBvc3RfaWQ7XG5cdFx0dGhpcy52YWx1ZXMgID0gJHdwb25pb24uZmllbGRBcmdzKCAkaWQsIGZhbHNlICk7XG5cblx0XHRpZiggdGhpcy52YWx1ZXMuaHRtbCApIHtcblx0XHRcdHRoaXMudmFsdWVzLmh0bWwgPSBqUXVlcnkoIHRoaXMudmFsdWVzLmh0bWwgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5odG1sKCB0aGlzLnZhbHVlcy5odG1sLmZpbmQoICc+IGRpdicgKSApO1xuXHRcdH1cblxuXHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCB0aGlzLmVsZW1lbnQgKS5yZWxvYWQoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgd3AgKSA9PiB7XG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRsZXQgJGxpc3QgPSAkKCAnI3RoZS1saXN0JyApO1xuXHRcdGlmKCAkbGlzdC5sZW5ndGggPiAwICkge1xuXHRcdFx0JGxpc3Qub24oICdjbGljaycsICcuZWRpdGlubGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgcG9zdF9pZCA9IGpRdWVyeSggdGhpcyApLmNsb3Nlc3QoICd0cicgKS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdHBvc3RfaWQgICAgID0gcG9zdF9pZC5yZXBsYWNlKCAncG9zdC0nLCAnJyApO1xuXHRcdFx0XHQkKCAndHIjZWRpdC0nICsgcG9zdF9pZCApLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bmV3IFdQT25pb25fUXVpY2tfRWRpdCggalF1ZXJ5KCB0aGlzICksIHBvc3RfaWQgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdwICk7XG5cbiIsIlxuY2xhc3MgV1BPbmlvbl9WaXN1YWxfQ29tcG9zZXIge1xuXHRjb25zdHJ1Y3RvciggJGVsZW1lbnQgKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJGVsZW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdyApID0+IHtcblx0d2luZG93Lndwb25pb25fdmlzdWFsX2NvbXBvc2VyX2luaXQgPSAoKSA9PiB7XG5cdFx0bGV0ICRlbGVtZW50ID0galF1ZXJ5KCAnLndwb25pb24tZnJhbWV3b3JrLndwb25pb24tbW9kdWxlLXZpc3VhbF9jb21wb3NlcicgKTtcblxuXHRcdGlmKCAkZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0JGVsZW1lbnQuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX1Zpc3VhbF9Db21wb3NlciggalF1ZXJ5KCB0aGlzICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH07XG59ICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XG5cdCQoICgpID0+IHtcblx0XHQkKCAnI3dvb2NvbW1lcmNlLXByb2R1Y3QtZGF0YScgKS5vbiggJ3dvb2NvbW1lcmNlX3ZhcmlhdGlvbnNfbG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJy53cG9uaW9uLWZyYW1ld29yay53cG9uaW9uLXdvb2NvbW1lcmNlLXZhcmlhdGlvbicgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cblx0XHQkKCAnI3ZhcmlhYmxlX3Byb2R1Y3Rfb3B0aW9ucycgKS5vbiggJ3dvb2NvbW1lcmNlX3ZhcmlhdGlvbnNfYWRkZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAnLndwb25pb24tZnJhbWV3b3JrLndwb25pb24td29vY29tbWVyY2UtdmFyaWF0aW9uJyApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdG9yIGZyb20gJy4vY29yZS92YWxpZGF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZUhvb2tzIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbi8vIFZTUCBKUyBIZWxwZXIgR2xvYmFsLlxud2luZG93LnZzcF9qc19oZWxwZXIgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKTtcblxucmVxdWlyZSggJy4vaGVscGVycy9mdW5jdGlvbnMnICk7XG5cbi8vIFdQT25pb24gQ29yZSBTb3VyY2UuXG53aW5kb3cud3BvbmlvbiA9IHdpbmRvdy53cG9uaW9uIHx8IE9iamVjdC5jcmVhdGUoIHtcblx0LyoqXG5cdCAqIExvZGFzaCBub0NvbmZsaWN0IFZhcmlhYmxlLlxuXHQgKi9cblx0Xzogd2luZG93LmxvZGFzaC5ub0NvbmZsaWN0KCksXG5cblx0LyoqXG5cdCAqIEN1cmF0ZWQgY29sbGVjdGlvbiBvZiB1c2VmdWwgSmF2YVNjcmlwdCBzbmlwcGV0cy5cblx0ICogQHNlZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS92c3AtanMtaGVscGVyXG5cdCAqL1xuXHRoZWxwZXI6IHdpbmRvdy52c3BfanNfaGVscGVyLFxuXG5cdC8qKlxuXHQgKiBBIGxpZ2h0d2VpZ2h0ICYgZWZmaWNpZW50IEV2ZW50TWFuYWdlciBmb3IgSmF2YVNjcmlwdC5cblx0ICogQHNlZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9Ad29yZHByZXNzL2hvb2tzXG5cdCAqL1xuXHRob29rczogY3JlYXRlSG9va3MoKSxcblxuXHQvKipcblx0ICogV1BvbmlvbiBNb2R1bGVzLlxuXHQgKi9cblx0bWV0YWJveDogcmVxdWlyZSggJy4vbW9kdWxlcy9tZXRhYm94JyApLmRlZmF1bHQsXG5cdG1lZGlhX2ZpZWxkczogcmVxdWlyZSggJy4vbW9kdWxlcy9tZWRpYS1maWVsZHMnICkuZGVmYXVsdCxcblx0YnVsa19lZGl0OiByZXF1aXJlKCAnLi9tb2R1bGVzL2J1bGstZWRpdCcgKS5kZWZhdWx0LFxuXHRndXR0ZW5iZXJnOiByZXF1aXJlKCAnLi9tb2R1bGVzL2d1dHRlbmJlcmcnICkuZGVmYXVsdCxcblx0d29vY29tbWVyY2U6IHJlcXVpcmUoICcuL21vZHVsZXMvd29vY29tbWVyY2UnICkuZGVmYXVsdCxcblx0cXVpY2tfZWRpdDogcmVxdWlyZSggJy4vbW9kdWxlcy9xdWljay1lZGl0JyApLmRlZmF1bHQsXG5cdHZpc3VhbF9jb21wb3NlcjogcmVxdWlyZSggJy4vbW9kdWxlcy92aXN1YWwtY29tcG9zZXInICkuZGVmYXVsdCxcblx0bW9kYWw6IHJlcXVpcmUoICcuLi92ZW5kb3JzL2JhY2tib25lLW1vZGFsJyApLmRlZmF1bHQsXG5cdGFqYXhlcjogcmVxdWlyZSggJy4vY29yZS9hamF4ZXInICkuV1BPbmlvbl9BamF4ZXIsXG5cdGFqYXg6IHJlcXVpcmUoICcuL2NvcmUvYWpheGVyJyApLmRlZmF1bHQsXG5cdGRlYnVnOiByZXF1aXJlKCAnLi9jb3JlL2RlYnVnJyApLmRlZmF1bHQsXG5cdGNvcmU6IHJlcXVpcmUoICcuL2NvcmUvY29yZScgKS5kZWZhdWx0LFxuXHRmaWVsZF9hYnN0cmFjdDogcmVxdWlyZSggJy4vY29yZS9maWVsZCcgKS5kZWZhdWx0LFxufSApO1xuXG4vLyBDb3JlIEZpZWxkcy5cbndpbmRvdy53cG9uaW9uLmZpZWxkcyA9IE9iamVjdC5jcmVhdGUoIHtcblx0dGV4dDogcmVxdWlyZSggJy4vZmllbGRzL3RleHQnICkuZGVmYXVsdCxcblx0dGV4dGFyZWE6IHJlcXVpcmUoICcuL2ZpZWxkcy90ZXh0YXJlYScgKS5kZWZhdWx0LFxuXHRiYWNrZ3JvdW5kOiByZXF1aXJlKCAnLi9maWVsZHMvYmFja2dyb3VuZCcgKS5kZWZhdWx0LFxuXHRpbWFnZV9zZWxlY3Q6IHJlcXVpcmUoICcuL2ZpZWxkcy9pbWFnZV9zZWxlY3QnICkuZGVmYXVsdCxcblx0c3dpdGNoZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zd2l0Y2hlcicgKS5kZWZhdWx0LFxuXHRjb2xvcl9wYWxldHRlOiByZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGFsZXR0ZScgKS5kZWZhdWx0LFxuXHRzZWxlY3Q6IHJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QnICkuZGVmYXVsdCxcblx0c2VsZWN0MjogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdDInICkuZGVmYXVsdCxcblx0Y2hvc2VuOiByZXF1aXJlKCAnLi9maWVsZHMvY2hvc2VuJyApLmRlZmF1bHQsXG5cdGljb25fcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvaWNvbl9waWNrZXInICkuZGVmYXVsdCxcblx0Zm9udF9zZWxlY3RvcjogcmVxdWlyZSggJy4vZmllbGRzL2ZvbnRfc2VsZWN0b3InICkuZGVmYXVsdCxcblx0YWNjb3JkaW9uOiByZXF1aXJlKCAnLi9maWVsZHMvYWNjb3JkaW9uJyApLmRlZmF1bHQsXG5cdGdyb3VwOiByZXF1aXJlKCAnLi9maWVsZHMvZ3JvdXAnICkuZGVmYXVsdCxcblx0d3BfZWRpdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvd3BfZWRpdG9yJyApLmRlZmF1bHQsXG5cdHJlbG9hZF93cF9lZGl0b3I6IHJlcXVpcmUoICcuL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvcicgKS5kZWZhdWx0LFxuXHRmaWVsZHNldDogcmVxdWlyZSggJy4vZmllbGRzL2ZpZWxkc2V0JyApLmRlZmF1bHQsXG5cdGlucHV0bWFzazogcmVxdWlyZSggJy4vZmllbGRzL2lucHV0bWFzaycgKS5kZWZhdWx0LFxuXHR3cF9saW5rczogcmVxdWlyZSggJy4vZmllbGRzL3dwX2xpbmtzJyApLmRlZmF1bHQsXG5cdGNoZWNrYm94X3JhZGlvOiByZXF1aXJlKCAnLi9maWVsZHMvY2hlY2tib3hfcmFkaW8nICkuZGVmYXVsdCxcblx0a2V5dmFsdWVfcGFpcjogcmVxdWlyZSggJy4vZmllbGRzL2tleXZhbHVlX3BhaXInICkuZGVmYXVsdCxcblx0Y29sb3JfcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGlja2VyJyApLmRlZmF1bHQsXG5cdGRhdGVfcGlja2VyOiByZXF1aXJlKCAnLi9maWVsZHMvZGF0ZV9waWNrZXInICkuZGVmYXVsdCxcblx0Z2FsbGVyeTogcmVxdWlyZSggJy4vZmllbGRzL2dhbGxlcnknICkuZGVmYXVsdCxcblx0aW1hZ2VfcG9wdXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvaW1hZ2VfcG9wdXAnICkuZGVmYXVsdCxcblx0dXBsb2FkOiByZXF1aXJlKCAnLi9maWVsZHMvdXBsb2FkJyApLmRlZmF1bHQsXG5cdGltYWdlX3VwbG9hZDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3VwbG9hZCcgKS5kZWZhdWx0LFxuXHRqcXVlcnlfdGFiOiByZXF1aXJlKCAnLi9maWVsZHMvanF1ZXJ5X3RhYicgKS5kZWZhdWx0LFxuXHRmaWVsZF90b29sdGlwOiByZXF1aXJlKCAnLi9oZWxwZXJzL2ZpZWxkX3Rvb2x0aXAnICkuZGVmYXVsdCxcblx0Y2xvbmVfZWxlbWVudDogcmVxdWlyZSggJy4vZmllbGRzL2Nsb25lX2VsZW1lbnQnICkuZGVmYXVsdCxcblx0c29ydGVyOiByZXF1aXJlKCAnLi9maWVsZHMvc29ydGVyJyApLmRlZmF1bHQsXG5cdGdvb2dsZV9tYXBzOiByZXF1aXJlKCAnLi9maWVsZHMvZ29vZ2xlX21hcHMnICkuZGVmYXVsdCxcblx0dHlwb2dyYXBoeTogcmVxdWlyZSggJy4vZmllbGRzL3R5cG9ncmFwaHknICkuZGVmYXVsdCxcblx0b2VtYmVkOiByZXF1aXJlKCAnLi9maWVsZHMvb2VtYmVkJyApLmRlZmF1bHQsXG5cdGhlYWRpbmc6IHJlcXVpcmUoICcuL2ZpZWxkcy9oZWFkaW5nJyApLmRlZmF1bHQsXG5cdHN1YmhlYWRpbmc6IHJlcXVpcmUoICcuL2ZpZWxkcy9zdWJoZWFkaW5nJyApLmRlZmF1bHQsXG5cdGphbWJvX2NvbnRlbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9qYW1ib19jb250ZW50JyApLmRlZmF1bHQsXG5cdG5vdGljZTogcmVxdWlyZSggJy4vZmllbGRzL25vdGljZScgKS5kZWZhdWx0LFxuXHRjb250ZW50OiByZXF1aXJlKCAnLi9maWVsZHMvY29udGVudCcgKS5kZWZhdWx0LFxuXHRiYWNrdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrdXAnICkuZGVmYXVsdCxcbn0gKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoICggd2luZG93LCBkb2N1bWVudCwgd3AsICQsICR3cG8gKSA9PiB7XG5cdC8vIERvY3VtZW50IE9uIExvYWQuXG5cdCQoICgpID0+IHtcblx0XHR3aW5kb3cud3Bvbmlvbl9zZXR1cCgpO1xuXHRcdGxldCAkd3BvZl9kaXYgPSAkKCAnLndwb25pb24tZnJhbWV3b3JrOm5vdCgud3Bvbmlvbi1tb2R1bGUtcXVpY2tfZWRpdC1mcmFtZXdvcmspJyApO1xuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fdGhlbWVfaW5pdCcsICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHR9XG5cdH0gKTtcblxuXHQvLyBXaW5kb3cgT24gTG9hZC5cblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCAoKSA9PiB7XG5cblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2luaXQnICk7XG5cblx0XHRsZXQgJHdwb2ZfZGl2ID0gJCggJy53cG9uaW9uLWZyYW1ld29yazpub3QoLndwb25pb24tbW9kdWxlLXF1aWNrX2VkaXQtZnJhbWV3b3JrKScgKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggJHdwb2ZfZGl2LmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXdwX25vdGljZSwgLndwb25pb24tZWxlbWVudC1ub3RpY2UnICkgKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uLmNvcmUuc3VibWVudV9pbmRpY2F0b3IoICQoIGRvY3VtZW50ICkuZmluZCggJy53cG9uaW9uLXN1Ym1lbnUtaScgKSApO1xuXG5cdFx0Ly8gVHJpZ2dlcnMgRmllbGQgRGVidWcgRGF0YS5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAnLndwb25pb24tZmllbGQtZGVidWctY29kZSA+IHN0cm9uZycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyggJ2Rhc2hpY29ucy1hcnJvdy1kb3duJyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LXJpZ2h0JyApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFRyaWdnZXJzIEhvb2sgV2l0aCBXaWRnZXRzLlxuXHRcdCQoIGRvY3VtZW50ICkub24oICd3aWRnZXQtYWRkZWQgd2lkZ2V0LXVwZGF0ZWQnLCBmdW5jdGlvbiggZXZlbnQsICR3aWRnZXQgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJHdpZGdldCApLnJlbG9hZCgpO1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJHdpZGdldCApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFRyaWdnZXJzIFdoZW4gTmV3IE1lbnUgSXRlbSBBZGRlZC5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnbWVudS1pdGVtLWFkZGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkbWVudSApIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkbWVudSApLnJlbG9hZCgpO1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJG1lbnUgKTtcblx0XHR9ICk7XG5cblxuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdC8vIFJlbmRlcnMgVmFsaWRhdGlvbi5cblx0XHRcdG5ldyBXUE9uaW9uX1ZhbGlkYXRvcigpO1xuXG5cdFx0XHQvLyBIYW5kbGVzIEZpZWxkcyBpbml0LlxuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJCggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXG5cdFx0JHdwby5jb3JlLmxvYWRpbmdfc2NyZWVuKCAkd3BvZl9kaXYsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25faW5pdCcgKTtcblxuXHR9ICkgKTtcblxuXHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fbG9hZGVkJyApO1xuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCBqUXVlcnksIHdpbmRvdy53cG9uaW9uICk7XG5cbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9qcy9jb3JlL2NvcmUnO1xuXG5jb25zdCBXUE9uaW9uX1dQX01vZGFsID0gQmFja2JvbmUuVmlldy5leHRlbmQoIHtcblx0dGVtcGxhdGVzOiB7fSxcblxuXHRldmVudHM6IHtcblx0XHRcImNsaWNrIC5tZWRpYS1tb2RhbC1jbG9zZVwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tY2FuY2VsXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1va1wiOiBcInNhdmVNb2RhbFwiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLW1lbnUgYVwiOiBcImhhbmRsZV9sZWZ0X21lbnVfY2xpY2tcIixcblx0XHRcImNsaWNrIC5tZWRpYS1yb3V0ZXIgYVwiOiBcImhhbmRsZV90YWJfY2xpY2tcIixcblx0fSxcblxuXHRhY3RpdmVfcGFnZTogbnVsbCxcblxuXHRhY3RpdmVfc2VjdGlvbjogbnVsbCxcblxuXHRpbml0aWFsaXplOiAoIG9wdGlvbnMgKSA9PiB7XG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IGZhbHNlLFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHRcdGh0bWw6IGZhbHNlLFxuXHRcdH0sIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMubGVmdF9tZW51ID0gb3B0aW9uc1sgJ2xlZnRfbWVudScgXTtcblx0XHR0aGlzLmh0bWwgICAgICA9IG9wdGlvbnNbICdodG1sJyBdO1xuXHRcdHRoaXMuaGlkZV9tZW51ID0gb3B0aW9uc1sgJ2hpZGVfbWVudScgXTtcblxuXHRcdF8uYmluZEFsbCggdGhpcywgJ3JlbmRlcicsICdwcmVzZXJ2ZUZvY3VzJywgJ2Nsb3NlTW9kYWwnLCAnc2F2ZU1vZGFsJywgJ2RvTm90aGluZycgKTtcblx0XHR0aGlzLmluaXRfdGVtcGxhdGVzKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblxuXHRpbml0X3RlbXBsYXRlczogKCkgPT4ge1xuXHRcdGxldCAkbSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdtb2RhbCcgKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0gID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnZnJhbWUtbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3JvdXRlci1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy53aW5kb3cgICAgICAgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnaHRtbCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdwYWdlX2NvbnRlbnQnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnc2VjdGlvbl9jb250ZW50JyBdICk7XG5cdH0sXG5cblx0cmVuZGVyOiAoKSA9PiB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdHRoaXMuJGVsLmF0dHIoICd0YWJpbmRleCcsICcwJyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMud2luZG93KCkgKTtcblxuXHRcdGlmKCB0aGlzLmxlZnRfbWVudSApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5sZWZ0X21lbnUsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0oIHtcblx0XHRcdFx0XHR1cmw6IGtleSxcblx0XHRcdFx0XHRuYW1lOiB2YWx1ZSxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRpZiggdGhpcy5odG1sICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmh0bWwsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0bGV0ICRjb250ZW50ID0gJCggdGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50KCB7XG5cdFx0XHRcdFx0aWQ6IGtleSxcblx0XHRcdFx0XHR0aXRsZTogdmFsdWVbICd0aXRsZScgXSxcblx0XHRcdFx0XHRodG1sOiB2YWx1ZVsgJ2h0bWwnIF0sXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzZWN0aW9ucycgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdF8uZWFjaCggdmFsdWVbICdzZWN0aW9ucycgXSwgKCB2YWwsIGsgKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJF9jb250ZW50ID0galF1ZXJ5KCB0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRcdFx0XHRpZDoga2V5ICsgXCJfXCIgKyBrLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiB2YWxbICd0aXRsZScgXSxcblx0XHRcdFx0XHRcdFx0XHRodG1sOiB2YWxbICdodG1sJyBdLFxuXHRcdFx0XHRcdFx0XHR9ICkgKSxcblx0XHRcdFx0XHRcdFx0JF9tZW51ICAgID0gdGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSggeyB1cmw6IGssIG5hbWU6IHZhbFsgJ3RpdGxlJyBdIH0gKTtcblxuXHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbFsgJ3NpZGViYXInIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLWNvbnRlbnQnICkuYXBwZW5kKCAkX2NvbnRlbnQgKTtcblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtcm91dGVyJyApLmFwcGVuZCggJF9tZW51ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzaWRlYmFyJyBdICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbHVlWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0JHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0aGlzLiQoICcubWVkaWEtbWVudSBhOmZpcnN0LWNoaWxkJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IC53cG9uaW9uLW1vZGFsLWNvbnRlbnQ6bm90KC5oaWRkZW4pIC5tZWRpYS1mcmFtZS1yb3V0ZXIgYTpmaXJzdC1jaGlsZCcgKVxuXHRcdFx0LnRyaWdnZXIoICdjbGljaycgKTtcblxuXHRcdGlmKCB0aGlzLmhpZGVfbWVudSA9PT0gdHJ1ZSApIHtcblx0XHRcdHRoaXMuJCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtbWVudScgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub24oIFwiZm9jdXNpblwiLCB0aGlzLnByZXNlcnZlRm9jdXMgKTtcblx0XHRqUXVlcnkoICdib2R5JyApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSApLmFwcGVuZCggdGhpcy4kZWwgKTtcblx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHR9LFxuXG5cdGhhbmRsZV9sZWZ0X21lbnVfY2xpY2s6ICggZSApID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0YXJnZXQgPSAkKCBlLnRhcmdldCApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1tZW51IGEuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0bGV0ICRzaG93X3RhcmdldCA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2IycgKyAkdGFyZ2V0LmF0dHIoICdocmVmJyApICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0JHNob3dfdGFyZ2V0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuXG5cdFx0aWYoICRzaG93X3RhcmdldC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5oYXNDbGFzcyggJ2hpZGRlbicgKSApIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkucmVtb3ZlQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9XG5cdFx0dGhpcy5hY3RpdmVfcGFnZSAgICA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9IG51bGw7XG5cdH0sXG5cblx0aGFuZGxlX3RhYl9jbGljazogKCBlICkgPT4ge1xuXHRcdGxldCAkdGFyZ2V0ICAgICAgICAgPSAkKCBlLnRhcmdldCApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkcGFnZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUtbWVudSBhLmFjdGl2ZScgKS5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJGJhc2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKTtcblxuXG5cdFx0JHRhcmdldC5wYXJlbnQoKS5maW5kKCAnLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCRiYXNlLmZpbmQoICcud3Bvbmlvbi1zZWN0aW9uLW1vZGFsLWNvbnRlbnQnICkuaGlkZSgpO1xuXHRcdCRiYXNlLmZpbmQoICcjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKyAnXycgKyB0aGlzLmFjdGl2ZV9zZWN0aW9uICkuc2hvdygpO1xuXHR9LFxuXG5cdHByZXNlcnZlRm9jdXM6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRpZiggdGhpcy4kZWxbIDAgXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsLmhhcyggZS50YXJnZXQgKS5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHRcdH1cblx0fSxcblxuXHRjbG9zZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vZmYoIFwiZm9jdXNpblwiICk7XG5cdFx0alF1ZXJ5KCBcImJvZHlcIiApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiYXV0b1wiIH0gKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9LFxuXG5cdHNhdmVNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCggZSApO1xuXHR9LFxuXG5cdGRvTm90aGluZzogZnVuY3Rpb24oIGUgKSB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRvcHRpb25zID0ge30gKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGlkOiBmYWxzZSxcblx0XHRcdGRhdGE6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1tb2RhbCcsXG5cdFx0XHRtb2RhbDoge30sXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdH0sICRvcHRpb25zICk7XG5cblx0XHRuZXcgV1BPbmlvbl9XUF9Nb2RhbCggXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogdGhpcy5nZXRfbGVmdF9tZW51KCksXG5cdFx0XHRodG1sOiB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLFxuXHRcdFx0aGlkZV9tZW51OiB0aGlzLm9wdGlvbnNbICdoaWRlX21lbnUnIF0sXG5cdFx0fSwgdGhpcy5vcHRpb25zWyAnbW9kYWwnIF0gKSApO1xuXHR9XG5cblx0Z2V0X2xlZnRfbWVudSgpIHtcblx0XHRsZXQgJHJldHVybiA9IGZhbHNlO1xuXHRcdGlmKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdICkge1xuXHRcdFx0JHJldHVybiA9IHt9O1xuXG5cdFx0XHRfLmVhY2goIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sICggJGRhdGEsICRrZXkgKSA9PiB7XG5cdFx0XHRcdCRyZXR1cm5bICRrZXkgXSA9ICggdHlwZW9mICRkYXRhWyAnbWVudV90aXRsZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/ICRkYXRhWyAnbWVudV90aXRsZScgXSA6ICRkYXRhWyAndGl0bGUnIF07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==