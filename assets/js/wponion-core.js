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
			if (!is_jquery($elem)) {
				$elem = this.element.find($elem);
			}
			var $this = this;
			$elem.each(function () {
				$this.init_single_field($type, jQuery(this));
			});
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
			this.init_field('input[data-wponion-inputmask]', 'inputmask');
			this.init_field('.wponion-element-wp_link', 'wp_links');
			this.init_field('.wponion-element-key_value', 'keyvalue_pair');
			this.init_field('.wponion-element-date_picker', 'date_picker');
			this.init_field('.wponion-element-gallery', 'gallery');
			this.init_field('.wponion-element-upload', 'upload');
			this.init_field('.wponion-element-image', 'image_upload');
			this.init_field('.wponion-element-tab', 'jquery_tab');
			this.init_field('.wponion-element-google_maps', 'google_maps');
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
			this.init_field('.wponion-field-tooltip', 'tooltip');
			this.init_field('.wponion-help', 'tooltip');
			this.init_field('.wponion-wrap-tooltip', 'tooltip');

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
	function _class($selector, $context) {
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
			var $arg = this.option('select2', {});
			if (window.wponion._.isUndefined($arg.dropdownParent)) {
				$arg.dropdownParent = this.get_field_parent_by_id(this.element);
			}
			$arg = this.handle_args($arg, 'select2');
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
	tooltip: __webpack_require__(/*! ./helpers/tooltip */ "./src/js/helpers/tooltip.js").default,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUFkZEhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUN1cnJlbnRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEaWRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEb2luZ0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhhc0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSZW1vdmVIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSdW5Ib29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVIb29rTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVOYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvaW5mby9pbmlfZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3htbC91dGY4X2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b193aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY29weV90b19jbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RldmljZV90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RpZmZfZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9mb3JtYXRfZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfYWZ0ZXJfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19iZWZvcmVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfc2FtZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3RhYl9mb2N1c2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc193aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BpcGVfbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BsYWluX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9xdWVyeV9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcmFuZF9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3Bvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9zY3JvbGxfdG9fdG9wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RpbWVfdGFrZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdG9fanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pzX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdXJsX3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy92YWxpZGF0ZVNpbmdsZUpTRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JkcHJlc3MtanMtcG9ydHMvZnVuY3Rpb25zL2FkZF9xdWVyeV9hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29yZHByZXNzLWpzLXBvcnRzL2Z1bmN0aW9ucy90cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvdW50cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9hamF4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NoZWNrYm94X3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2hvc2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2xvbmVfZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NvbG9yX3BhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZGF0ZV9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9maWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZvbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ29vZ2xlX21hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pY29uX3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ltYWdlX3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ltYWdlX3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2lucHV0bWFzay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2phbWJvX2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qcXVlcnlfdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMva2V5dmFsdWVfcGFpci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL25vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL29lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdDIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zdWJoZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvaW1hZ2VfcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2J1bGstZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9ndXR0ZW5iZXJnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21lZGlhLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXRhYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1aWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9hbGwtZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9jaGVja2JveC1yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvc2luZ2xlLXZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3dvb2NvbW1lcmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiXSwibmFtZXMiOlsiY3JlYXRlQWRkSG9vayIsImhvb2tzIiwiYWRkSG9vayIsImhvb2tOYW1lIiwibmFtZXNwYWNlIiwiY2FsbGJhY2siLCJwcmlvcml0eSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZXIiLCJoYW5kbGVycyIsImkiLCJzcGxpY2UiLCJfX2N1cnJlbnQiLCJmb3JFYWNoIiwiaG9va0luZm8iLCJuYW1lIiwiY3VycmVudEluZGV4IiwicnVucyIsImNyZWF0ZUN1cnJlbnRIb29rIiwiY3VycmVudEhvb2siLCJjcmVhdGVEaWRIb29rIiwiZGlkSG9vayIsImNyZWF0ZURvaW5nSG9vayIsImRvaW5nSG9vayIsImNyZWF0ZUhhc0hvb2siLCJoYXNIb29rIiwiY3JlYXRlSG9va3MiLCJhY3Rpb25zIiwiT2JqZWN0IiwiY3JlYXRlIiwiZmlsdGVycyIsImFkZEFjdGlvbiIsImFkZEZpbHRlciIsInJlbW92ZUFjdGlvbiIsInJlbW92ZUZpbHRlciIsImhhc0FjdGlvbiIsImhhc0ZpbHRlciIsInJlbW92ZUFsbEFjdGlvbnMiLCJyZW1vdmVBbGxGaWx0ZXJzIiwiZG9BY3Rpb24iLCJhcHBseUZpbHRlcnMiLCJjdXJyZW50QWN0aW9uIiwiY3VycmVudEZpbHRlciIsImRvaW5nQWN0aW9uIiwiZG9pbmdGaWx0ZXIiLCJkaWRBY3Rpb24iLCJkaWRGaWx0ZXIiLCJjcmVhdGVSZW1vdmVIb29rIiwicmVtb3ZlQWxsIiwicmVtb3ZlSG9vayIsImhhbmRsZXJzUmVtb3ZlZCIsIl9sb29wIiwiY3JlYXRlUnVuSG9vayIsInJldHVybkZpcnN0QXJnIiwicnVuSG9va3MiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsInB1c2giLCJyZXN1bHQiLCJhcHBseSIsInBvcCIsIl9jcmVhdGVIb29rcyIsInZhbGlkYXRlSG9va05hbWUiLCJ0ZXN0IiwidmFsaWRhdGVOYW1lc3BhY2UiLCJKU19QYXJzZV9BcmdzIiwiJGFyZ3MiLCIkZGVmYXVsdHMiLCIkaXNfbmVzdGVkIiwiZGVmYXVsdHMiLCJuZXN0ZWQiLCJwYXJzZSIsIiRfa2V5IiwiJGlzX2RlZXAiLCJtb2R1bGUiLCJleHBvcnRzIiwibWljcm90aW1lIiwiZ2V0QXNGbG9hdCIsInMiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRpbWluZyIsIm5hdmlnYXRpb25TdGFydCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwiY2FsbF91c2VyX2Z1bmMiLCJjYiIsInBhcmFtZXRlcnMiLCJjYWxsVXNlckZ1bmNBcnJheSIsInJlcXVpcmUiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsImNhbGxfdXNlcl9mdW5jX2FycmF5IiwiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsImZ1bmMiLCJzY29wZSIsInZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuIiwibWF0Y2giLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwiZXZhbCIsIkVycm9yIiwiY3JlYXRlX2Z1bmN0aW9uIiwiY29kZSIsInNwbGl0IiwiY29uY2F0IiwiZSIsImZ1bmN0aW9uX2V4aXN0cyIsImZ1bmNOYW1lIiwiaW5pX2dldCIsInZhcm5hbWUiLCIkbG9jdXR1cyIsInBocCIsImluaSIsImxvY2FsX3ZhbHVlIiwibWQ1Iiwic3RyIiwiaGFzaCIsImNyeXB0byIsIm1kNXN1bSIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJ1dGY4RW5jb2RlIiwieGwiLCJfcm90YXRlTGVmdCIsImxWYWx1ZSIsImlTaGlmdEJpdHMiLCJfYWRkVW5zaWduZWQiLCJsWCIsImxZIiwibFg0IiwibFk0IiwibFg4IiwibFk4IiwibFJlc3VsdCIsIl9GIiwieCIsInkiLCJ6IiwiX0ciLCJfSCIsIl9JIiwiX0ZGIiwiYSIsImIiLCJjIiwiZCIsImFjIiwiX0dHIiwiX0hIIiwiX0lJIiwiX2NvbnZlcnRUb1dvcmRBcnJheSIsImxXb3JkQ291bnQiLCJsTWVzc2FnZUxlbmd0aCIsImxOdW1iZXJPZldvcmRzVGVtcDEiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAyIiwibE51bWJlck9mV29yZHMiLCJsV29yZEFycmF5IiwibEJ5dGVQb3NpdGlvbiIsImxCeXRlQ291bnQiLCJjaGFyQ29kZUF0IiwiX3dvcmRUb0hleCIsIndvcmRUb0hleFZhbHVlIiwid29yZFRvSGV4VmFsdWVUZW1wIiwibEJ5dGUiLCJsQ291bnQiLCJzdWJzdHIiLCJrIiwiQUEiLCJCQiIsIkNDIiwiREQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJ0ZW1wIiwidG9Mb3dlckNhc2UiLCJwYXJzZV9zdHIiLCJhcnJheSIsInN0ckFyciIsIlN0cmluZyIsInJlcGxhY2UiLCJzYWwiLCJqIiwiY3QiLCJwIiwibGFzdE9iaiIsImNociIsInRtcCIsImtleSIsInZhbHVlIiwicG9zdExlZnRCcmFja2V0UG9zIiwia2V5cyIsImtleXNMZW4iLCJfZml4U3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckF0IiwiaW5kZXhPZiIsImhhc093blByb3BlcnR5IiwicnRyaW0iLCJjaGFybGlzdCIsInJlIiwiUmVnRXhwIiwic3RycG9zIiwiaGF5c3RhY2siLCJuZWVkbGUiLCJvZmZzZXQiLCJiYXNlNjRfZGVjb2RlIiwiZW5jb2RlZERhdGEiLCJkZWNvZGVVVEY4c3RyaW5nIiwibWFwIiwiam9pbiIsImF0b2IiLCJCdWZmZXIiLCJiNjQiLCJvMSIsIm8yIiwibzMiLCJoMSIsImgyIiwiaDMiLCJoNCIsImJpdHMiLCJkZWMiLCJ0bXBBcnIiLCJmcm9tQ2hhckNvZGUiLCJiYXNlNjRfZW5jb2RlIiwic3RyaW5nVG9FbmNvZGUiLCJlbmNvZGVVVEY4c3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG9Tb2xpZEJ5dGVzIiwicDEiLCJidG9hIiwiZW5jIiwiciIsImh0dHBfYnVpbGRfcXVlcnkiLCJmb3JtZGF0YSIsIm51bWVyaWNQcmVmaXgiLCJhcmdTZXBhcmF0b3IiLCJlbmNUeXBlIiwiZW5jb2RlRnVuYyIsIl9odHRwQnVpbGRRdWVyeUhlbHBlciIsInZhbCIsImlzTmFOIiwicXVlcnkiLCJwYXJzZV91cmwiLCJjb21wb25lbnQiLCJtb2RlIiwicGFyc2VyIiwic3RyaWN0IiwibG9vc2UiLCJtIiwiZXhlYyIsInVyaSIsIiQwIiwiJDEiLCIkMiIsInNvdXJjZSIsInJhd3VybGRlY29kZSIsInJhd3VybGVuY29kZSIsInVybGRlY29kZSIsInVybGVuY29kZSIsImlzX2NhbGxhYmxlIiwibWl4ZWRWYXIiLCJzeW50YXhPbmx5IiwiY2FsbGFibGVOYW1lIiwibWV0aG9kIiwidmFsaWRGdW5jdGlvbk5hbWUiLCJnZXRGdW5jTmFtZSIsImZuIiwidXRmOF9lbmNvZGUiLCJhcmdTdHJpbmciLCJzdHJpbmciLCJ1dGZ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJzdHJpbmdsIiwibiIsImMxIiwiUmFuZ2VFcnJvciIsImMyIiwicGFyc2VfYXJncyIsImFycmF5X3RvX2h0bWxfYXR0ciIsImFycmF5X3RvX2h0bWwiLCJhcnJheV90b193aW5kb3ciLCJwbGFpbl9vYmplY3QiLCJpc19hZnRlcl9kYXRlIiwiaXNfYmVmb3JlX2RhdGUiLCJpc19zYW1lX2RhdGUiLCJmb3JtYXRfZHVyYXRpb24iLCJkaWZmX2RheXMiLCJ0aW1lX3Rha2VuIiwiaXNfdXJsIiwiaXNfdGFiX2ZvY3VzZWQiLCJpc193aW5kb3dfYXJnIiwic2Nyb2xsX3RvX3RvcCIsImNvcHlfdG9fY2xpcCIsInNjcm9sbF9wb3MiLCJ3aW5kb3dfYXJnIiwiZGV2aWNlX3R5cGUiLCJwaXBlX2xvZyIsInRvX2pxdWVyeSIsImlzX2pxdWVyeSIsInRvX2pzX2Z1bmMiLCJjb3VudGVyIiwicmFuZF9tZDUiLCJjc3NfdW5pdHMiLCJ1cmxfcGFyYW1zIiwicXVlcnlfc3RyaW5nIiwiYXJyIiwibGlzdElEIiwidGFnIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJpdGVtIiwiJGRhdGEiLCJyZXR1cm5faHRtbCIsIkkiLCJfIiwiaXNPYmplY3QiLCJLIiwiJHZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIiRhcnJheSIsIiRrZXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZCIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2VsZWN0b3IiLCJzdGVwIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiX3N0ZXAiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFicyIsImZsb29yIiwiaXNOdW1iZXIiLCJjaGVja1B4IiwiY2hlY2tQY3QiLCJjaGVja0VtIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGF0ZUluaXRpYWwiLCJkYXRlRmluYWwiLCJtcyIsInRpbWUiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwibWlsbGlzZWNvbmQiLCJlbnRyaWVzIiwiZmlsdGVyIiwiZGF0ZUEiLCJkYXRlQiIsIiRlbGVtIiwiaXNVbmRlZmluZWQiLCJpc1N0cmluZyIsImpRdWVyeSIsInRvSVNPU3RyaW5nIiwiaGlkZGVuIiwiJHVybCIsInBhdHRlcm4iLCJsb2ciLCJkYXRhIiwicmVnZXgiLCJyZXN1bHRzIiwibG9jYXRpb24iLCJzZWFyY2giLCJyYW5kb20iLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0aXRsZSIsInRpbWVFbmQiLCIkYXJnc19rZXkiLCIkY29udGVudHNfa2V5IiwiaXNFbXB0eSIsInVybCIsInJlZHVjZSIsInYiLCIkc3RyaW5nIiwiJGNvbnRlbnRzIiwiJF9rIiwiYWRkX3F1ZXJ5X2FyZyIsImhyZWYiLCIkcGFyc2VkIiwiJHF1ZXJ5IiwiJGZyYWdtZW50IiwiZnJhZ21lbnQiLCJzcGxpdF91cmwiLCJiYXNlX3VybCIsInJlbW92ZV9xdWVyeV9hcmciLCJkZWZhdWx0IiwidHJhaWxpbmdzbGFzaGl0IiwidW50cmFpbGluZ3NsYXNoaXQiLCJXUE9uaW9uX0FqYXhlciIsIiRhamF4X2FyZ3MiLCIkYWpheF9jb25maWciLCJhamF4dXJsIiwic3VjY2VzcyIsImFsd2F5cyIsImFjdGlvbiIsImRlZmF1bHRfY29uZmlncyIsInJlc3BvbnNlX2VsZW1lbnQiLCJidXR0b24iLCJlbGVtZW50Iiwic3Bpbm5lciIsImluc3RhbmNlIiwiYWpheF9hcmdzIiwid3BvbmlvbiIsIm1lcmdlIiwiYWpheF9jb25maWciLCJhamF4IiwiJGNvZGUiLCJzaW5nbGVfY2FsbGJhY2siLCIkY2FsbGJhY2siLCJpc0Z1bmN0aW9uIiwiJGNhbGxiYWNrcyIsImhhbmRsZV9jYWxsYmFja3MiLCJidXR0b25fdW5sb2NrIiwiYnV0dG9uX2xvY2siLCIkY29uZmlnIiwiY2xvbmUiLCIkdXJsX3BhcmFtcyIsIndwIiwic2VuZCIsImRvbmUiLCJvblN1Y2Nlc3MiLCJmYWlsIiwib25FcnJvciIsIm9uQWx3YXlzIiwiJGRlZmF1bHQiLCJoYXNfY29uZmlnIiwiY29uZmlnIiwiJGJ1dHRvbiIsIndwb19idXR0b24iLCJhdHRyIiwiJHNwaW5uZXIiLCJhZGRDbGFzcyIsInBhcmVudCIsImFwcGVuZCIsInJlbW92ZUF0dHIiLCJuZXh0IiwiaGFzQ2xhc3MiLCJyZW1vdmUiLCJmaW5kIiwiJCIsIiRjbGFzcyIsIm9uIiwiY3VycmVudFRhcmdldCIsIiRfZGF0YSIsIiRfY2xhc3NfaW5zdGFuY2UiLCIkZmlkMSIsIiRmaWQyIiwiJGpzX2lkIiwiJHdwb25pb24iLCJmaWVsZElEIiwiJF9hcmdzIiwiZmllbGRBcmdzIiwiaW5saW5lX2FqYXgiLCJXUE9uaW9uIiwiJHdoZXJlX3RvX2ZpbmQiLCIkaWQiLCIkdmFyX2lkIiwiaXNGaWVsZCIsIndpbmRvd0FyZ3MiLCJ0ZXh0IiwiJGlzX3Nob3ciLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGhhbmRsZSIsIiRqc29uIiwiZGVidWdfaW5mbyIsIiRkZWZpbmVkX3ZhcnMiLCJwcmV2ZW50RGVmYXVsdCIsInN3YWwiLCJ0eHQiLCJodG1sIiwic2hvd0NvbmZpcm1CdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsInNob3dDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbiIsIndpZHRoIiwib25CZWZvcmVPcGVuIiwiZW5hYmxlTG9hZGluZyIsIm9uT3BlbiIsImpzb25WaWV3IiwiZGlzYWJsZUxvYWRpbmciLCJ0aGVuIiwic2V0dGluZ3NfYXJncyIsIm9wdGlvbiIsImlzX2RlYnVnIiwiaXNOdWxsIiwiZmllbGRfZGVidWdfaW5mbyIsIiR2YXJzIiwiJHV0eHQiLCIkbXR4dCIsIiRhY3Rpb24iLCIkb25TdWNjZXNzIiwiJG9uRXJyb3IiLCIkb25BbHdheXMiLCIkYWpheCIsInJlcyIsImNvbXBpbGVkIiwib3B0aW9ucyIsImV2YWx1YXRlIiwiaW50ZXJwb2xhdGUiLCJlc2NhcGUiLCJ2YXJpYWJsZSIsInRlbXBsYXRlIiwiJGVsZW1zIiwiZWFjaCIsIiR0b2dnbGUiLCIkZXhfY2xhc3MiLCIkZWxlbWVudCIsInBhcmFtIiwibmVzdGFibGUiLCIkdGhpcyIsImJhc2UiLCIkZWwiLCJpbml0IiwicnVsZXNldCIsImRlcHMiLCJjcmVhdGVSdWxlc2V0IiwiZGVwUm9vdCIsIiRfZGVwc19mdW5jdGlvbnMiLCJzaG93Iiwic2xpZGVEb3duIiwicmVtb3ZlQ2xhc3MiLCJoaWRlIiwic2xpZGVVcCIsImNoZWNrVGFyZ2V0cyIsImVuYWJsZSIsIldQT25pb25fRGVwZW5kZW5jeSIsIiRzZWxlY3RvciIsIiRjb250ZXh0Iiwic2V0X2FyZ3MiLCJmaWVsZF9kZWJ1ZyIsImpzX2Vycm9yX2hhbmRsZXIiLCJqc192YWxpZGF0b3IiLCJlcnIiLCJhcHBlbmRUbyIsImpzX2Vycm9yIiwibWF5YmVfanNfdmFsaWRhdGVfZWxlbSIsIldQT25pb25fVmFsaWRhdGlvbiIsImdldF9mb3JtIiwianNfdmFsaWRhdGVfZWxlbSIsInJ1bGVzIiwiJGFyZyIsImpzX2Z1bmMiLCIkZXhpc3RzIiwiJHdwb25pb25fZGVidWciLCJnZXQiLCJpZCIsImFkZCIsIiRpbmZvIiwiJGZvdW5kIiwiJElEIiwidGlwcHkiLCJjb250ZW50IiwiYXJyb3ciLCJhcnJvd1R5cGUiLCJwbGFjZW1lbnQiLCJ0aGVtZSIsImdldF9maWVsZF9wYXJlbnRfYnlfaWQiLCIkZCIsIiRub3RpY2VfdHh0IiwiaGVpZ2h0QXV0byIsIl9hcmdzIiwiJGFqYXhfa2V5IiwicGx1Z2luX2lkIiwiJHR5cGUiLCJ3cG9uaW9uX2luaXRfZmllbGQiLCJpbml0X3NpbmdsZV9maWVsZCIsImluaXRfZmllbGQiLCJXUE9uaW9uX01vZHVsZSIsInNldF9lbGVtZW50Iiwic2V0X2NvbnR4dCIsIm1vZHVsZV9pbml0IiwiZWxlbSIsIiRjb250eHQiLCJjb250ZXh0IiwiV1BPbmlvbl9WYWxpZGF0b3IiLCJmb3JtIiwiaW52YWxpZEhhbmRsZXIiLCJzaWJsaW5ncyIsImJlZm9yZSIsImlnbm9yZSIsImVycm9yUGxhY2VtZW50IiwidHJpZ2dlciIsImVycm9yQ2xhc3MiLCJlcnJvckVsZW1lbnQiLCJ2YWxpZGF0ZSIsImZpZWxkIiwiYWNjb3JkaW9uIiwiaGVhZGVyIiwiY29sbGFwc2libGUiLCJhbmltYXRlIiwiaGVpZ2h0U3R5bGUiLCJpY29ucyIsIklEdG9FbGVtZW50IiwiV1BPbmlvbl9GaWVsZCIsInciLCJ3cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkIiwiZmllbGRfYWJzdHJhY3QiLCJ0b29sdGlwIiwiaGFuZGxlX2JhY2t1cF9pbXBvcnQiLCIkZmlsZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmb3JjZV9kb3dubG9hZCIsImJsb2NrX2Zvcm0iLCJ1bmlxdWUiLCJleHRyYSIsImdldF9leHRyYV92YWx1ZSIsInN3YWxfZXJyb3IiLCJ1bmJsb2NrX2Zvcm0iLCIkaW5zIiwidGlwcHlfZ2V0IiwiaW5zdGFuY2VzIiwiZGVzdHJveSIsImJhY2t1cF9pZCIsInJlc3RvcmVfYmFja3VwIiwibXNnIiwidHlwZSIsIl90aXBweSIsInNob3dfdG9vbHRpcCIsImV4cG9ydE9iaiIsImV4cG9ydE5hbWUiLCJkYXRhU3RyIiwiZG93bmxvYWRBbmNob3JOb2RlIiwiY2xpY2siLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZWFkQXNUZXh0IiwiJGJhY2t1cGlkIiwiJGFwcGVuZFRPIiwiaW50ZXJhY3RpdmUiLCJvblNob3duIiwiJGN1c3RvbV9pbnB1dCIsIiRyYWRpb3MiLCIkY2hlY2tib3giLCJpcyIsIiRpIiwiY2hvc2VuIiwiaGFuZGxlX2FyZ3MiLCIkY2xvbmVfd3JhcCIsIiRhZGRfYnRuIiwiJGxpbWl0IiwibGltaXQiLCIkZXJvcl9tc2ciLCJlcnJvcl9tc2ciLCIkc29ydCIsInNvcnQiLCJpdGVtcyIsImhhbmRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJ1aSIsImNzcyIsInN0b3AiLCJXUE9uaW9uQ2xvbmVyIiwiYWRkX2J0biIsImNsb25lX2VsZW0iLCJyZW1vdmVfYnRuIiwidGVtcGxhdGVBZnRlclJlbmRlciIsIiRlIiwid3Bvbmlvbl9maWVsZCIsInJlbG9hZCIsIm9uUmVtb3ZlQWZ0ZXIiLCJzb3J0YWJsZSIsIm9uTGltaXRSZWFjaGVkIiwicHJlcGVuZCIsIndwb25pb25fbm90aWNlIiwic2hvd19hbmltYXRpb24iLCJhbmltYXRpb25zIiwiaGlkZV9hbmltYXRpb24iLCJ3cENvbG9yUGlja2VyIiwiJHNldHRpbmdzIiwiJHZpZXciLCJwbHVnaW5zIiwicmFuZ2VQbHVnaW4iLCJpbnB1dCIsImZsYXRwaWNrciIsIiRyZXR1cm4iLCIkX2QiLCIkdmFsIiwiJGh0bWwiLCJ3ZWJzYWZlIiwiZm9udHMiLCJidWlsZF9vcHRpb25zIiwidmFyaWFudHMiLCJnb29nbGVfZm9udHMiLCIkdmFyaWFudCIsIiRodG1sX3RlbXAiLCIkaW5wdXQiLCIkcHJldmlldyIsIndwX21lZGlhX2ZyYW1lIiwiJGFkZCIsIiRlZGl0IiwiJGNsZWFyIiwiJG1hbmFnZSIsImlkcyIsIndoYXQiLCJzdGF0ZSIsIm1lZGlhIiwiZ2FsbGVyeSIsImxpYnJhcnkiLCJmcmFtZSIsIm11bHRpcGxlIiwib3BlbiIsImVkaXQiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsInNlbGVjdGVkSWRzIiwibW9kZWxzIiwiYXR0YWNobWVudCIsInRvSlNPTiIsInNpemVzIiwidGh1bWIiLCJ0aHVtYm5haWwiLCIkdG1wIiwiJHBhcmVudCIsIiRpbWFnZV9pZCIsIiRrIiwiJHYiLCJjdXJzb3IiLCJzY3JvbGxTZW5zaXRpdml0eSIsImZvcmNlUGxhY2Vob2xkZXJTaXplIiwiaGVscGVyIiwib3BhY2l0eSIsIiRpdGVtIiwiaGVpZ2h0IiwiJG1hcCIsImRldGFpbHMiLCJkZXRhaWxzQXR0cmlidXRlIiwiJF9pbnN0YW5jZSIsImdlb2NvbXBsZXRlIiwiYmluZCIsImxhdExuZyIsImdlb2NvZGVyIiwiZ29vZ2xlIiwibWFwcyIsIkdlb2NvZGVyIiwiZ2VvY29kZSIsImxhdCIsInBhcnNlRmxvYXQiLCJsbmciLCIkZ3JvdXBfd3JhcCIsIiRlcnJvcl9tc2ciLCJiaW5kX2V2ZW50c19mb3JfdGl0bGUiLCJwYXJzZUludCIsIm9uUmVtb3ZlIiwidXBkYXRlX2dyb3Vwc190aXRsZSIsIiRtYWNoZWQiLCIkaGVhZGluZyIsIiRfdGhpcyIsIiRyZW1vdmVfYnRuIiwiJHdvcmsiLCJlbGVtcyIsInBvcHVwIiwiZWxtIiwiaW5pdF90b29sdGlwIiwicG9wdXBfdG9vbHRpcCIsIiR0cCIsIiRlbG0iLCIkaW5zdGFuY2UiLCIkaGVpZ2h0IiwiJGljb24iLCJjbG9zZU1vZGFsIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiJHJlcyIsInJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwiJHBvcHVwIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjdXN0b21DbGFzcyIsIiRwb3B1cF9lbGVtIiwiJHByZXZpZXdfYWRkIiwibWVkaWFfaW5zdGFuY2UiLCJob29rIiwiZmlyc3QiLCJhdHRyaWJ1dGVzIiwiaW5wdXRtYXNrIiwiJHRoaXNfZWxlbSIsIiR0YWIiLCJnbG9iYWxfdmFsaWRhdGUiLCJhZnRlciIsImVxIiwiaW1hZ2UiLCJzaG93X3ByZXZpZXciLCJkcm9wZG93blBhcmVudCIsInNlbGVjdDIiLCIkZW5hYmxlZCIsIiRkaXNhYmxlZCIsImNvbm5lY3RXaXRoIiwiZm9udF93ZWlnaHRfc3R5bGUiLCIkZm9udF9maWVsZCIsIiRmb250IiwiJGZvbnRfd2VpZ2h0X3N0eWxlIiwiZm9udF9zdHlsZSIsIiR0YWciLCIkY29sb3IiLCIkYWxpZ24iLCIkZm9udFNpemUiLCIkbGluZUhlaWdodCIsIiRsZXR0ZXJTcGFjaW5nIiwid2VpZ2h0IiwiJF9hdHRycyIsIiR0ZXh0IiwiJHdlaWdodF92YWwiLCIkc3R5bGVfdmFsIiwiZnJhbWVfdGl0bGUiLCJ1cGxvYWRfdHlwZSIsImluc2VydF90aXRsZSIsIiR0ZXh0YXJlYSIsIndwTGluayIsIiRkZXAiLCJjb250cm9sbGVyIiwiY29uZGl0aW9uIiwiJGNvbnRyb2xsZXIiLCIkY29uZGl0aW9uIiwiJGZpZWxkIiwiJElOUFVUIiwiY29udHh0IiwiY3JlYXRlUnVsZSIsImluY2x1ZGUiLCJleHRlbmQiLCJhbmltYXRlQ3NzIiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkVuZCIsIk9BbmltYXRpb24iLCJNb3pBbmltYXRpb24iLCJXZWJraXRBbmltYXRpb24iLCJ0Iiwib25lIiwiJGFyZ3VtZW50cyIsInRpcHB5X2hlbHBlciIsImNyZWF0ZV9pbnN0YW5jZSIsIiRfaW5zdGFuY2VfaWQiLCJjb3JlIiwicmFuZF9pZCIsIiR0aXRsZSIsIiRkYXRhX3RpcHB5IiwiZ2V0X2luc3RhbmNlIiwiJHN0YXR1cyIsIiRfZWwiLCIkYXV0byIsInNldFRpbWVvdXQiLCJ3cG9uaW9uX3NldHVwIiwiJGNvcmUiLCIkdGFucyIsIiRtb2R1bGUiLCJ3cG9uaW9uX2NyZWF0ZV9maWVsZCIsIiRpbml0X21ldGhvZCIsIiRtZXRob2RzIiwiJG9yZ19jbGFzcyIsIiRmaWVsZF90eXBlIiwiJGFyZ3VtZW50IiwiJGxvZ19lcnIiLCIkaW1hZ2UiLCJpbWFnZVVybCIsImJhY2tncm91bmQiLCJiYWNrZHJvcCIsIiRtY2VfZWRpdG9yIiwidGlueU1DRVByZUluaXQiLCJtY2VJbml0IiwiJHF1aWNrX3RhZ3MiLCJxdEluaXQiLCIkTkVXX0lEIiwiJHRleHRBcmVhIiwiJGFjdHVhbF9JRCIsIiRhY3R1YWxfaHRtbCIsIiRyZWdleCIsInRpbnltY2UiLCJ0aW55TUNFIiwicXVpY2t0YWdzIiwiJGZpZCIsIiR0b29sdGlwX2tleSIsInZhbGlkX2pzb24iLCJpc0ZldGNoaW5nIiwiY2FuRmV0Y2giLCIkY2xhc3NUb0NoZWNrIiwiJGF0dHIiLCJ1cGRhdGVEdXJhdGlvbiIsIm9uU2hvdyIsInRpcCIsInJlc3BvbnNlIiwiZmV0Y2giLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNWaXNpYmxlIiwic2V0Q29udGVudCIsIm9uSGlkZGVuIiwicG9wcGVyT3B0aW9ucyIsIm1vZGlmaWVycyIsInByZXZlbnRPdmVyZmxvdyIsImljb24iLCIkZmluYWxfYXJncyIsInBvc3RfaWRzIiwiJGJ1bGtfZWRpdCIsImNoaWxkcmVuIiwic2VyaWFsaXplT2JqZWN0IiwiYXN5bmMiLCJjYWNoZSIsIldQT25pb25fR3V0dGVuYmVyZyIsInNhdmUiLCJibG9jayIsInNhdmVfaGFuZGxlciIsImVkaXRfaGFuZGxlciIsImJsb2NrcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiJF9wb3N0aWRzIiwicG9zdF9pZCIsImJsb2NrX2lkIiwiY2xpZW50SWQiLCIkcmVtb3RlIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50cyIsIlNlcnZlclNpZGVSZW5kZXIiLCJlZGl0b3IiLCIkd3BvX2Jsb2NrcyIsImlzQXJyYXkiLCJmaXhfbWVkaWFfdWkiLCIkdGFibGUiLCIkZmllbGRzIiwiZnJhbWVzIiwiYnJvd3NlIiwiV1BPbmlvbl9NZXRhYm94X01vZHVsZSIsIm1lbnUiLCJzbGlkZVRvZ2dsZSIsIiRocmVmIiwiJHNlY3Rpb24iLCIkcGFyZW50X2FjdGl2ZXMiLCIkY3VycmVudCIsIiRiYXNlIiwiJGhpZGRlbiIsIm1lc3NhZ2UiLCJvdmVybGF5Q1NTIiwiJHZhbHVlcyIsInNlcmlhbGl6ZSIsInVuYmxvY2siLCJXUE9uaW9uX1F1aWNrX0VkaXQiLCJ2YWx1ZXMiLCIkbGlzdCIsImNsb3Nlc3QiLCJ2YyIsIndwb25pb25fdmMiLCJmaWVsZHMiLCJhYnN0cmFjdCIsIndwb25pb25fdmNfaW5pdCIsIndwb25pb25fdmNfZmllbGQiLCJ3cG9uaW9uX2NyZWF0ZV92Y19maWVsZCIsImlzX3ZjX3BhcmFtX2VsZW0iLCJpbnB1dF9jaGFuZ2UiLCJpbnB1dF9kYXRhIiwiV1BPbmlvbl9WQ19GaWVsZCIsImhhbmRsZV9zaW5nbGVfY2hhbmdlIiwiJHNhdmVfZGF0YSIsInNpbXBsZV9hcnJheSIsImtleV92YWx1ZV9hcnJheSIsImtleV92YWx1ZV9tdWx0aV9hcnJheSIsInNvcnRlcl92YWx1ZXMiLCJ2Y19zYXZlIiwiJHBhcmFtX25hbWUiLCJwYXJhbV9uYW1lIiwiJHIiLCIkcyIsImVuY29kZV9jb250ZW50IiwiJHNlbGVjdCIsInZzcF9qc19oZWxwZXIiLCJsb2Rhc2giLCJub0NvbmZsaWN0IiwibWV0YWJveCIsIm1lZGlhX2ZpZWxkcyIsImJ1bGtfZWRpdCIsImd1dHRlbmJlcmciLCJ3b29jb21tZXJjZSIsInF1aWNrX2VkaXQiLCJ2aXN1YWxfY29tcG9zZXIiLCJtb2RhbCIsImFqYXhlciIsImRlYnVnIiwidGV4dGFyZWEiLCJpbWFnZV9zZWxlY3QiLCJzd2l0Y2hlciIsImNvbG9yX3BhbGV0dGUiLCJpY29uX3BpY2tlciIsImZvbnRfc2VsZWN0b3IiLCJncm91cCIsIndwX2VkaXRvciIsInJlbG9hZF93cF9lZGl0b3IiLCJmaWVsZHNldCIsIndwX2xpbmtzIiwiY2hlY2tib3hfcmFkaW8iLCJrZXl2YWx1ZV9wYWlyIiwiY29sb3JfcGlja2VyIiwiZGF0ZV9waWNrZXIiLCJpbWFnZV9wb3B1cCIsInVwbG9hZCIsImltYWdlX3VwbG9hZCIsImpxdWVyeV90YWIiLCJjbG9uZV9lbGVtZW50Iiwic29ydGVyIiwiZ29vZ2xlX21hcHMiLCJ0eXBvZ3JhcGh5Iiwib2VtYmVkIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJqYW1ib19jb250ZW50Iiwibm90aWNlIiwiYmFja3VwIiwiJHdwbyIsIiR3cG9mX2RpdiIsInN1Ym1lbnVfaW5kaWNhdG9yIiwidG9nZ2xlQ2xhc3MiLCIkd2lkZ2V0IiwiJG1lbnUiLCJsb2FkaW5nX3NjcmVlbiIsIldQT25pb25fV1BfTW9kYWwiLCJCYWNrYm9uZSIsIlZpZXciLCJ0ZW1wbGF0ZXMiLCJldmVudHMiLCJhY3RpdmVfcGFnZSIsImFjdGl2ZV9zZWN0aW9uIiwiaW5pdGlhbGl6ZSIsImxlZnRfbWVudSIsImhpZGVfbWVudSIsImJpbmRBbGwiLCJpbml0X3RlbXBsYXRlcyIsInJlbmRlciIsIiRtIiwiZnJhbWVfbWVudV9pdGVtIiwicm91dGVyX21lbnVfaXRlbSIsInBhZ2VfY29udGVudCIsInNlY3Rpb25fY29udGVudCIsIiRjb250ZW50IiwiJF9jb250ZW50IiwiJF9tZW51IiwicHJlc2VydmVGb2N1cyIsImZvY3VzIiwiaGFuZGxlX2xlZnRfbWVudV9jbGljayIsIiR0YXJnZXQiLCIkc2hvd190YXJnZXQiLCJoYW5kbGVfdGFiX2NsaWNrIiwiJHBhZ2UiLCJoYXMiLCJ1bmRlbGVnYXRlRXZlbnRzIiwib2ZmIiwic2F2ZU1vZGFsIiwiZG9Ob3RoaW5nIiwiJG9wdGlvbnMiLCJnZXRfbGVmdF9tZW51Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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LENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJNLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTVCLFFBQUlILElBQUlHLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJPLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlGLElBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJRLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWhDLFFBQUlELElBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJLLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTFCLFFBQUlKLElBQUlJLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJNLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTVCLFFBQUlILElBQUlHLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJPLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlGLElBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJRLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWhDLFFBQUlELElBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJLLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTFCLFFBQUlKLElBQUlJLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJNLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTVCLFFBQUlILElBQUlHLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJPLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTlCLFFBQUlGLElBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJRLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWhDLFFBQUlELElBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJLLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTFCLFFBQUlKLElBQUlJLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJNLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTVCLFFBQUlILElBQUlHLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJPLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTlCLFFBQUlGLElBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJRLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWhDLFFBQUlLLElBQUlMLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJTLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlFLElBQUlGLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJVLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWhDLFFBQUlHLElBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJXLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWxDLFFBQUlJLElBQUlKLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJZLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQXBDLFFBQUlLLElBQUlMLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJTLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlFLElBQUlGLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJVLEdBQTNCLEVBQWdDLFNBQWhDLENBQUo7QUFDQWhDLFFBQUlHLElBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJXLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWxDLFFBQUlJLElBQUlKLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJZLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQXBDLFFBQUlLLElBQUlMLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJTLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlFLElBQUlGLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJVLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWhDLFFBQUlHLElBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJXLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWxDLFFBQUlJLElBQUlKLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJZLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQXBDLFFBQUlLLElBQUlMLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJTLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTlCLFFBQUlFLElBQUlGLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJVLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWhDLFFBQUlHLElBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJXLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWxDLFFBQUlJLElBQUlKLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJZLEdBQTNCLEVBQWdDLFVB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O0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBM0MsRUFBNEUsSUFBNUU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFlBQTFCLEVBQXdDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBeEMsRUFBeUUsSUFBekU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFVBQTFCLEVBQXNDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBdEMsRUFBdUUsSUFBdkU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFVBQTFCLEVBQXNDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBdEMsRUFBdUUsSUFBdkU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFdBQTFCLEVBQXVDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBdkMsRUFBd0UsSUFBeEU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLE9BQTFCLEVBQW1DLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBbkMsRUFBb0UsSUFBcEU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFlBQTFCLEVBQXdDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBeEMsRUFBeUUsSUFBekU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLFFBQTFCLEVBQW9DLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJQUFJb1AsS0FBSixDQUFXcFAsS0FBWCxDQUFiO0FBQUEsRUFBcEMsRUFBcUUsSUFBckU7QUFDQTZQLEdBQUVDLHNCQUFGLENBQTBCLGVBQTFCLEVBQTJDLFVBQUU5UCxLQUFGO0FBQUEsU0FBYSxJ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QU8sT0FBUCxDQUE3RjtBQUNBLEtBRkQ7QUFHQTtBQUNELFVBQU8rWSxPQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE1GLG1DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy93cG9uaW9uLWNvcmUuanNcIik7XG4iLCJpbXBvcnQgdmFsaWRhdGVOYW1lc3BhY2UgZnJvbSAnLi92YWxpZGF0ZU5hbWVzcGFjZS5qcyc7XG5pbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuaW1wb3J0IHsgZG9BY3Rpb24gfSBmcm9tICcuLyc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIGFkZCBhIGhvb2suXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICBGdW5jdGlvbiB0aGF0IGFkZHMgYSBuZXcgaG9vay5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBob29rIHRvIHRoZSBhcHByb3ByaWF0ZSBob29rcyBjb250YWluZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIGhvb2tOYW1lICBOYW1lIG9mIGhvb2sgdG8gYWRkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWVzcGFjZSBUaGUgdW5pcXVlIG5hbWVzcGFjZSBpZGVudGlmeWluZyB0aGUgY2FsbGJhY2sgaW4gdGhlIGZvcm0gYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAgRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBob29rIGlzIHJ1blxuICAgKiBAcGFyYW0gez9udW1iZXJ9ICBwcmlvcml0eSAgUHJpb3JpdHkgb2YgdGhpcyBob29rIChkZWZhdWx0PTEwKVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGFkZEhvb2soaG9va05hbWUsIG5hbWVzcGFjZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDEwO1xuXG4gICAgaWYgKCF2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGJhY2spIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgaG9vayBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBWYWxpZGF0ZSBudW1lcmljIHByaW9yaXR5XG5cblxuICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIHByaW9yaXR5KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignSWYgc3BlY2lmaWVkLCB0aGUgaG9vayBwcmlvcml0eSBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICB9O1xuXG4gICAgaWYgKGhvb2tzW2hvb2tOYW1lXSkge1xuICAgICAgLy8gRmluZCB0aGUgY29ycmVjdCBpbnNlcnQgaW5kZXggb2YgdGhlIG5ldyBob29rLlxuICAgICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB3aGlsZSAoaSA8IGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbaV0ucHJpb3JpdHkgPiBwcmlvcml0eSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaSsrO1xuICAgICAgfSAvLyBJbnNlcnQgKG9yIGFwcGVuZCkgdGhlIG5ldyBob29rLlxuXG5cbiAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAwLCBoYW5kbGVyKTsgLy8gV2UgbWF5IGFsc28gYmUgY3VycmVudGx5IGV4ZWN1dGluZyB0aGlzIGhvb2suICBJZiB0aGUgY2FsbGJhY2tcbiAgICAgIC8vIHdlJ3JlIGFkZGluZyB3b3VsZCBjb21lIGFmdGVyIHRoZSBjdXJyZW50IGNhbGxiYWNrLCB0aGVyZSdzIG5vXG4gICAgICAvLyBwcm9ibGVtOyBvdGhlcndpc2Ugd2UgbmVlZCB0byBpbmNyZWFzZSB0aGUgZXhlY3V0aW9uIGluZGV4IG9mXG4gICAgICAvLyBhbnkgb3RoZXIgcnVucyBieSAxIHRvIGFjY291bnQgZm9yIHRoZSBhZGRlZCBlbGVtZW50LlxuXG4gICAgICAoaG9va3MuX19jdXJyZW50IHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChob29rSW5mbykge1xuICAgICAgICBpZiAoaG9va0luZm8ubmFtZSA9PT0gaG9va05hbWUgJiYgaG9va0luZm8uY3VycmVudEluZGV4ID49IGkpIHtcbiAgICAgICAgICBob29rSW5mby5jdXJyZW50SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGhvb2sgb2YgaXRzIHR5cGUuXG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbaGFuZGxlcl0sXG4gICAgICAgIHJ1bnM6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGhvb2tOYW1lICE9PSAnaG9va0FkZGVkJykge1xuICAgICAgZG9BY3Rpb24oJ2hvb2tBZGRlZCcsIGhvb2tOYW1lLCBuYW1lc3BhY2UsIGNhbGxiYWNrLCBwcmlvcml0eSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlQWRkSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB0aGUgbmFtZSBvZiB0aGVcbiAqIGN1cnJlbnRseSBydW5uaW5nIGhvb2ssIG9yIGBudWxsYCBpZiBubyBob29rIG9mIHRoZSBnaXZlbiB0eXBlIGlzIGN1cnJlbnRseVxuICogcnVubmluZy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICAgICAgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBob29rLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50SG9vayhob29rcykge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudGx5IHJ1bm5pbmcgaG9vaywgb3IgYG51bGxgIGlmIG5vIGhvb2sgb2ZcbiAgICogdGhlIGdpdmVuIHR5cGUgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAqXG4gICAqIEByZXR1cm4gez9zdHJpbmd9ICAgICAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSBjdXJyZW50bHkgcnVubmluZyBob29rLCBvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbnVsbGAgaWYgbm8gaG9vayBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBjdXJyZW50SG9vaygpIHtcbiAgICBpZiAoIWhvb2tzLl9fY3VycmVudCB8fCAhaG9va3MuX19jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzLl9fY3VycmVudFtob29rcy5fX2N1cnJlbnQubGVuZ3RoIC0gMV0ubmFtZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VycmVudEhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVDdXJyZW50SG9vay5qcy5tYXAiLCJpbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gdGhlIG51bWJlciBvZiB0aW1lcyBhXG4gKiBob29rIGhhcyBiZWVuIGNhbGxlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGhvb2sncyBjYWxsIGNvdW50LlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURpZEhvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyBhbiBhY3Rpb24gaGFzIGJlZW4gZmlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIGhvb2sgbmFtZSB0byBjaGVjay5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgICBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBob29rIGhhcyBydW4uXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gZGlkSG9vayhob29rTmFtZSkge1xuICAgIGlmICghdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3NbaG9va05hbWVdICYmIGhvb2tzW2hvb2tOYW1lXS5ydW5zID8gaG9va3NbaG9va05hbWVdLnJ1bnMgOiAwO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaWRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlRGlkSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB3aGV0aGVyIGEgaG9vayBpc1xuICogY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgYSBob29rIGlzIGN1cnJlbnRseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGV4ZWN1dGVkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVEb2luZ0hvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBhIGhvb2sgaXMgY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHs/c3RyaW5nfSBob29rTmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBjaGVjayBmb3IuICBJZlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbWl0dGVkLCB3aWxsIGNoZWNrIGZvciBhbnkgaG9vayBiZWluZyBleGVjdXRlZC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgV2hldGhlciB0aGUgaG9vayBpcyBiZWluZyBleGVjdXRlZC5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBkb2luZ0hvb2soaG9va05hbWUpIHtcbiAgICAvLyBJZiB0aGUgaG9va05hbWUgd2FzIG5vdCBwYXNzZWQsIGNoZWNrIGZvciBhbnkgY3VycmVudCBob29rLlxuICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGhvb2tOYW1lKSB7XG4gICAgICByZXR1cm4gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBob29rcy5fX2N1cnJlbnRbMF07XG4gICAgfSAvLyBSZXR1cm4gdGhlIF9fY3VycmVudCBob29rLlxuXG5cbiAgICByZXR1cm4gaG9va3MuX19jdXJyZW50WzBdID8gaG9va05hbWUgPT09IGhvb2tzLl9fY3VycmVudFswXS5uYW1lIDogZmFsc2U7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURvaW5nSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZURvaW5nSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB3aGV0aGVyIGFueSBoYW5kbGVycyBhcmVcbiAqIGF0dGFjaGVkIHRvIGEgcGFydGljdWxhciBob29rLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgYW55IGhhbmRsZXJzIGFyZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaGVkIHRvIGEgcGFydGljdWxhciBob29rLlxuICovXG5mdW5jdGlvbiBjcmVhdGVIYXNIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGhvdyBtYW55IGhhbmRsZXJzIGFyZSBhdHRhY2hlZCBmb3IgdGhlIGdpdmVuIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gIGhvb2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIGNoZWNrIGZvci5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGVyZSBhcmUgaGFuZGxlcnMgdGhhdCBhcmUgYXR0YWNoZWQgdG8gdGhlIGdpdmVuIGhvb2suXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gaGFzSG9vayhob29rTmFtZSkge1xuICAgIHJldHVybiBob29rTmFtZSBpbiBob29rcztcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGFzSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUhhc0hvb2suanMubWFwIiwiaW1wb3J0IGNyZWF0ZUFkZEhvb2sgZnJvbSAnLi9jcmVhdGVBZGRIb29rJztcbmltcG9ydCBjcmVhdGVSZW1vdmVIb29rIGZyb20gJy4vY3JlYXRlUmVtb3ZlSG9vayc7XG5pbXBvcnQgY3JlYXRlSGFzSG9vayBmcm9tICcuL2NyZWF0ZUhhc0hvb2snO1xuaW1wb3J0IGNyZWF0ZVJ1bkhvb2sgZnJvbSAnLi9jcmVhdGVSdW5Ib29rJztcbmltcG9ydCBjcmVhdGVDdXJyZW50SG9vayBmcm9tICcuL2NyZWF0ZUN1cnJlbnRIb29rJztcbmltcG9ydCBjcmVhdGVEb2luZ0hvb2sgZnJvbSAnLi9jcmVhdGVEb2luZ0hvb2snO1xuaW1wb3J0IGNyZWF0ZURpZEhvb2sgZnJvbSAnLi9jcmVhdGVEaWRIb29rJztcbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgaG9va3Mgb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIGhvb2tzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvb2tzKCkge1xuICB2YXIgYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBmaWx0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgYWN0aW9ucy5fX2N1cnJlbnQgPSBbXTtcbiAgZmlsdGVycy5fX2N1cnJlbnQgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhZGRBY3Rpb246IGNyZWF0ZUFkZEhvb2soYWN0aW9ucyksXG4gICAgYWRkRmlsdGVyOiBjcmVhdGVBZGRIb29rKGZpbHRlcnMpLFxuICAgIHJlbW92ZUFjdGlvbjogY3JlYXRlUmVtb3ZlSG9vayhhY3Rpb25zKSxcbiAgICByZW1vdmVGaWx0ZXI6IGNyZWF0ZVJlbW92ZUhvb2soZmlsdGVycyksXG4gICAgaGFzQWN0aW9uOiBjcmVhdGVIYXNIb29rKGFjdGlvbnMpLFxuICAgIGhhc0ZpbHRlcjogY3JlYXRlSGFzSG9vayhmaWx0ZXJzKSxcbiAgICByZW1vdmVBbGxBY3Rpb25zOiBjcmVhdGVSZW1vdmVIb29rKGFjdGlvbnMsIHRydWUpLFxuICAgIHJlbW92ZUFsbEZpbHRlcnM6IGNyZWF0ZVJlbW92ZUhvb2soZmlsdGVycywgdHJ1ZSksXG4gICAgZG9BY3Rpb246IGNyZWF0ZVJ1bkhvb2soYWN0aW9ucyksXG4gICAgYXBwbHlGaWx0ZXJzOiBjcmVhdGVSdW5Ib29rKGZpbHRlcnMsIHRydWUpLFxuICAgIGN1cnJlbnRBY3Rpb246IGNyZWF0ZUN1cnJlbnRIb29rKGFjdGlvbnMpLFxuICAgIGN1cnJlbnRGaWx0ZXI6IGNyZWF0ZUN1cnJlbnRIb29rKGZpbHRlcnMpLFxuICAgIGRvaW5nQWN0aW9uOiBjcmVhdGVEb2luZ0hvb2soYWN0aW9ucyksXG4gICAgZG9pbmdGaWx0ZXI6IGNyZWF0ZURvaW5nSG9vayhmaWx0ZXJzKSxcbiAgICBkaWRBY3Rpb246IGNyZWF0ZURpZEhvb2soYWN0aW9ucyksXG4gICAgZGlkRmlsdGVyOiBjcmVhdGVEaWRIb29rKGZpbHRlcnMpLFxuICAgIGFjdGlvbnM6IGFjdGlvbnMsXG4gICAgZmlsdGVyczogZmlsdGVyc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb29rcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUhvb2tzLmpzLm1hcCIsImltcG9ydCB2YWxpZGF0ZU5hbWVzcGFjZSBmcm9tICcuL3ZhbGlkYXRlTmFtZXNwYWNlLmpzJztcbmltcG9ydCB2YWxpZGF0ZUhvb2tOYW1lIGZyb20gJy4vdmFsaWRhdGVIb29rTmFtZS5qcyc7XG5pbXBvcnQgeyBkb0FjdGlvbiB9IGZyb20gJy4vJztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmVtb3ZlIGEgc3BlY2lmaWVkIGhvb2sgb3IgYWxsXG4gKiBob29rcyBieSB0aGUgZ2l2ZW4gbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqIEBwYXJhbSAge2Jvb2xlYW59ICAgICByZW1vdmVBbGwgIFdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBjYWxsYmFja3MgZm9yIGEgaG9va05hbWUsIHdpdGhvdXQgcmVnYXJkIHRvIG5hbWVzcGFjZS4gVXNlZCB0byBjcmVhdGUgYHJlbW92ZUFsbCpgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgaG9va3MuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUmVtb3ZlSG9vayhob29rcywgcmVtb3ZlQWxsKSB7XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgKG9yIGFsbCBjYWxsYmFja3MpIGZyb20gdGhlIGhvb2sgd2l0aCBhXG4gICAqIGdpdmVuIGhvb2tOYW1lIGFuZCBuYW1lc3BhY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBob29rTmFtZSAgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gbW9kaWZ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgbmFtZXNwYWNlIFRoZSB1bmlxdWUgbmFtZXNwYWNlIGlkZW50aWZ5aW5nIHRoZSBjYWxsYmFjayBpbiB0aGUgZm9ybSBgdmVuZG9yL3BsdWdpbi9mdW5jdGlvbmAuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gICAgICAgICAgICAgVGhlIG51bWJlciBvZiBjYWxsYmFja3MgcmVtb3ZlZC5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmVIb29rKGhvb2tOYW1lLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAoIXZhbGlkYXRlSG9va05hbWUoaG9va05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFyZW1vdmVBbGwgJiYgIXZhbGlkYXRlTmFtZXNwYWNlKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEJhaWwgaWYgbm8gaG9va3MgZXhpc3QgYnkgdGhpcyBuYW1lXG5cblxuICAgIGlmICghaG9va3NbaG9va05hbWVdKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcnNSZW1vdmVkID0gMDtcblxuICAgIGlmIChyZW1vdmVBbGwpIHtcbiAgICAgIGhhbmRsZXJzUmVtb3ZlZCA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycy5sZW5ndGg7XG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIHJ1bnM6IGhvb2tzW2hvb2tOYW1lXS5ydW5zLFxuICAgICAgICBoYW5kbGVyczogW11cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgdG8gcmVtb3ZlLlxuICAgICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgIGlmIChoYW5kbGVyc1tpXS5uYW1lc3BhY2UgPT09IG5hbWVzcGFjZSkge1xuICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBoYW5kbGVyc1JlbW92ZWQrKzsgLy8gVGhpcyBjYWxsYmFjayBtYXkgYWxzbyBiZSBwYXJ0IG9mIGEgaG9vayB0aGF0IGlzXG4gICAgICAgICAgLy8gY3VycmVudGx5IGV4ZWN1dGluZy4gIElmIHRoZSBjYWxsYmFjayB3ZSdyZSByZW1vdmluZ1xuICAgICAgICAgIC8vIGNvbWVzIGFmdGVyIHRoZSBjdXJyZW50IGNhbGxiYWNrLCB0aGVyZSdzIG5vIHByb2JsZW07XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIGV4ZWN1dGlvbiBpbmRleCBvZiBhbnlcbiAgICAgICAgICAvLyBvdGhlciBydW5zIGJ5IDEgdG8gYWNjb3VudCBmb3IgdGhlIHJlbW92ZWQgZWxlbWVudC5cblxuICAgICAgICAgIChob29rcy5fX2N1cnJlbnQgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGhvb2tJbmZvKSB7XG4gICAgICAgICAgICBpZiAoaG9va0luZm8ubmFtZSA9PT0gaG9va05hbWUgJiYgaG9va0luZm8uY3VycmVudEluZGV4ID49IGkpIHtcbiAgICAgICAgICAgICAgaG9va0luZm8uY3VycmVudEluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBfbG9vcChpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaG9va05hbWUgIT09ICdob29rUmVtb3ZlZCcpIHtcbiAgICAgIGRvQWN0aW9uKCdob29rUmVtb3ZlZCcsIGhvb2tOYW1lLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyc1JlbW92ZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlbW92ZUhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSZW1vdmVIb29rLmpzLm1hcCIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgZXhlY3V0ZSBhbGwgY2FsbGJhY2tzXG4gKiByZWdpc3RlcmVkIHRvIGEgaG9vayBvZiB0aGUgc3BlY2lmaWVkIHR5cGUsIG9wdGlvbmFsbHkgcmV0dXJuaW5nIHRoZSBmaW5hbFxuICogdmFsdWUgb2YgdGhlIGNhbGwgY2hhaW4uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzICAgICAgICAgIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICogQHBhcmFtICB7P2Jvb2xlYW59ICAgIHJldHVybkZpcnN0QXJnIFdoZXRoZXIgZWFjaCBob29rIGNhbGxiYWNrIGlzIGV4cGVjdGVkIHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0cyBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICAgICAgRnVuY3Rpb24gdGhhdCBydW5zIGhvb2sgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSdW5Ib29rKGhvb2tzLCByZXR1cm5GaXJzdEFyZykge1xuICAvKipcbiAgICogUnVucyBhbGwgY2FsbGJhY2tzIGZvciB0aGUgc3BlY2lmaWVkIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gcnVuLlxuICAgKiBAcGFyYW0gIHsuLi4qfSAgIGFyZ3MgICAgIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBob29rIGNhbGxiYWNrcy5cbiAgICpcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICBSZXR1cm4gdmFsdWUgb2YgcnVubmVyLCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIHJ1bkhvb2tzKGhvb2tOYW1lKSB7XG4gICAgaWYgKCFob29rc1tob29rTmFtZV0pIHtcbiAgICAgIGhvb2tzW2hvb2tOYW1lXSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICBydW5zOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGhvb2tzW2hvb2tOYW1lXS5ydW5zKys7XG4gICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVycyB8fCAhaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmV0dXJuRmlyc3RBcmcgPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBob29rSW5mbyA9IHtcbiAgICAgIG5hbWU6IGhvb2tOYW1lLFxuICAgICAgY3VycmVudEluZGV4OiAwXG4gICAgfTtcblxuICAgIGhvb2tzLl9fY3VycmVudC5wdXNoKGhvb2tJbmZvKTtcblxuICAgIHdoaWxlIChob29rSW5mby5jdXJyZW50SW5kZXggPCBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNbaG9va0luZm8uY3VycmVudEluZGV4XTtcbiAgICAgIHZhciByZXN1bHQgPSBoYW5kbGVyLmNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xuXG4gICAgICBpZiAocmV0dXJuRmlyc3RBcmcpIHtcbiAgICAgICAgYXJnc1swXSA9IHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaG9va0luZm8uY3VycmVudEluZGV4Kys7XG4gICAgfVxuXG4gICAgaG9va3MuX19jdXJyZW50LnBvcCgpO1xuXG4gICAgaWYgKHJldHVybkZpcnN0QXJnKSB7XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJ1bkhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSdW5Ib29rLmpzLm1hcCIsImltcG9ydCBjcmVhdGVIb29rcyBmcm9tICcuL2NyZWF0ZUhvb2tzJztcblxudmFyIF9jcmVhdGVIb29rcyA9IGNyZWF0ZUhvb2tzKCksXG4gICAgYWRkQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmFkZEFjdGlvbixcbiAgICBhZGRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuYWRkRmlsdGVyLFxuICAgIHJlbW92ZUFjdGlvbiA9IF9jcmVhdGVIb29rcy5yZW1vdmVBY3Rpb24sXG4gICAgcmVtb3ZlRmlsdGVyID0gX2NyZWF0ZUhvb2tzLnJlbW92ZUZpbHRlcixcbiAgICBoYXNBY3Rpb24gPSBfY3JlYXRlSG9va3MuaGFzQWN0aW9uLFxuICAgIGhhc0ZpbHRlciA9IF9jcmVhdGVIb29rcy5oYXNGaWx0ZXIsXG4gICAgcmVtb3ZlQWxsQWN0aW9ucyA9IF9jcmVhdGVIb29rcy5yZW1vdmVBbGxBY3Rpb25zLFxuICAgIHJlbW92ZUFsbEZpbHRlcnMgPSBfY3JlYXRlSG9va3MucmVtb3ZlQWxsRmlsdGVycyxcbiAgICBkb0FjdGlvbiA9IF9jcmVhdGVIb29rcy5kb0FjdGlvbixcbiAgICBhcHBseUZpbHRlcnMgPSBfY3JlYXRlSG9va3MuYXBwbHlGaWx0ZXJzLFxuICAgIGN1cnJlbnRBY3Rpb24gPSBfY3JlYXRlSG9va3MuY3VycmVudEFjdGlvbixcbiAgICBjdXJyZW50RmlsdGVyID0gX2NyZWF0ZUhvb2tzLmN1cnJlbnRGaWx0ZXIsXG4gICAgZG9pbmdBY3Rpb24gPSBfY3JlYXRlSG9va3MuZG9pbmdBY3Rpb24sXG4gICAgZG9pbmdGaWx0ZXIgPSBfY3JlYXRlSG9va3MuZG9pbmdGaWx0ZXIsXG4gICAgZGlkQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmRpZEFjdGlvbixcbiAgICBkaWRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuZGlkRmlsdGVyLFxuICAgIGFjdGlvbnMgPSBfY3JlYXRlSG9va3MuYWN0aW9ucyxcbiAgICBmaWx0ZXJzID0gX2NyZWF0ZUhvb2tzLmZpbHRlcnM7XG5cbmV4cG9ydCB7IGNyZWF0ZUhvb2tzLCBhZGRBY3Rpb24sIGFkZEZpbHRlciwgcmVtb3ZlQWN0aW9uLCByZW1vdmVGaWx0ZXIsIGhhc0FjdGlvbiwgaGFzRmlsdGVyLCByZW1vdmVBbGxBY3Rpb25zLCByZW1vdmVBbGxGaWx0ZXJzLCBkb0FjdGlvbiwgYXBwbHlGaWx0ZXJzLCBjdXJyZW50QWN0aW9uLCBjdXJyZW50RmlsdGVyLCBkb2luZ0FjdGlvbiwgZG9pbmdGaWx0ZXIsIGRpZEFjdGlvbiwgZGlkRmlsdGVyLCBhY3Rpb25zLCBmaWx0ZXJzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFZhbGlkYXRlIGEgaG9va05hbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIGhvb2sgbmFtZSB0byB2YWxpZGF0ZS4gU2hvdWxkIGJlIGEgbm9uIGVtcHR5IHN0cmluZyBjb250YWluaW5nXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHkgbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzIGFuZCB1bmRlcnNjb3Jlcy4gQWxzbyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGhvb2sgbmFtZSBjYW5ub3QgYmVnaW4gd2l0aCBgX19gLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgV2hldGhlciB0aGUgaG9vayBuYW1lIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGhvb2tOYW1lIHx8ICcnID09PSBob29rTmFtZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoL15fXy8udGVzdChob29rTmFtZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIG5hbWUgY2Fubm90IGJlZ2luIHdpdGggYF9fYC4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aMC05Xy4tXSokLy50ZXN0KGhvb2tOYW1lKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBjYW4gb25seSBjb250YWluIG51bWJlcnMsIGxldHRlcnMsIGRhc2hlcywgcGVyaW9kcyBhbmQgdW5kZXJzY29yZXMuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlSG9va05hbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0ZUhvb2tOYW1lLmpzLm1hcCIsIi8qKlxuICogVmFsaWRhdGUgYSBuYW1lc3BhY2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2UgdG8gdmFsaWRhdGUgLSBzaG91bGQgdGFrZSB0aGUgZm9ybVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgIFdoZXRoZXIgdGhlIG5hbWVzcGFjZSBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIG5hbWVzcGFjZSB8fCAnJyA9PT0gbmFtZXNwYWNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgbmFtZXNwYWNlIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghL15bYS16QS1aXVthLXpBLVowLTlfLlxcLVxcL10qJC8udGVzdChuYW1lc3BhY2UpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgbmFtZXNwYWNlIGNhbiBvbmx5IGNvbnRhaW4gbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzLCB1bmRlcnNjb3JlcyBhbmQgc2xhc2hlcy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVOYW1lc3BhY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0ZU5hbWVzcGFjZS5qcy5tYXAiLCJjbGFzcyBKU19QYXJzZV9BcmdzIHtcclxuXHRjb25zdHJ1Y3RvciggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19uZXN0ZWQgPSBmYWxzZSApIHtcclxuXHRcdHRoaXMuYXJncyAgICAgPSAkYXJncztcclxuXHRcdHRoaXMuZGVmYXVsdHMgPSAkZGVmYXVsdHM7XHJcblx0XHR0aGlzLm5lc3RlZCAgID0gJGlzX25lc3RlZDtcclxuXHRcdHRoaXMucGFyc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLmFyZ3M7XHJcblx0fVxyXG5cclxuXHRwYXJzZSgpIHtcclxuXHRcdGZvciggbGV0ICRfa2V5IGluIHRoaXMuZGVmYXVsdHMgKSB7XHJcblx0XHRcdGlmKCB0cnVlID09PSB0aGlzLm5lc3RlZCAmJiB0eXBlb2YgIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0gPT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IG5ldyBKU19QYXJzZV9BcmdzKCB0aGlzLmFyZ3NbICRfa2V5IF0sIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0sIHRoaXMubmVzdGVkICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3NbICRfa2V5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gdGhpcy5kZWZhdWx0c1sgJF9rZXkgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19kZWVwID0gZmFsc2UgKSA9PiBuZXcgSlNfUGFyc2VfQXJncyggJGFyZ3MsICRkZWZhdWx0cywgJGlzX2RlZXAgKTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWljcm90aW1lKGdldEFzRmxvYXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9taWNyb3RpbWUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGltcHJvdmVkIGJ5OiBEdW1pdHJ1IFV6dW4gKGh0dHA6Ly9kdXp1bi5tZSlcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gbWljcm90aW1lKHRydWUpXG4gIC8vICAgZXhhbXBsZSAxOiAkdGltZVN0YW1wID4gMTAwMDAwMDAwMCAmJiAkdGltZVN0YW1wIDwgMjAwMDAwMDAwMFxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogL14wXFwuWzAtOV17MSw2fSBbMC05XXsxMCwxMH0kLy50ZXN0KG1pY3JvdGltZSgpKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBzO1xuICB2YXIgbm93O1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBub3cgPSAocGVyZm9ybWFuY2Uubm93KCkgKyBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlNikgLyAxZTYgKyAnICcgKyBzO1xuICB9IGVsc2Uge1xuICAgIG5vdyA9IChEYXRlLm5vdyA/IERhdGUubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTMpIC8gMWUzICsgJyAnICsgcztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pY3JvdGltZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmMoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZHMgb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkgd2hpY2ggaW4gdHVybiBkZXBlbmRzIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuYygnaXNOYU4nLCAnYScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgdmFyIGNhbGxVc2VyRnVuY0FycmF5ID0gcmVxdWlyZSgnLi4vZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknKTtcbiAgcGFyYW1ldGVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBjYWxsVXNlckZ1bmNBcnJheShjYiwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuY19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IFRoaWFnbyBNYXRhIChodHRwOi8vdGhpYWdvbWF0YS5ibG9nLmNvbSlcbiAgLy8gIHJldmlzZWQgYnk6IEpvbiBIb2hsZVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kaW5nIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYCBhbmQvb3IgYG5ldyBGdW5jdGlvbmAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWydhJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbMV0pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gIHZhciBmdW5jO1xuICB2YXIgc2NvcGUgPSBudWxsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICBpZiAodHlwZW9mIGNiID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZ1bmMgPSAkZ2xvYmFsW2NiXTtcbiAgICB9IGVsc2UgaWYgKGNiLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbihudWxsLCAncmV0dXJuICcgKyBjYikoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICAgIH1cbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2IpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgZnVuYyA9IGV2YWwoY2JbMF0gKyBcIlsnXCIgKyBjYlsxXSArIFwiJ11cIik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jID0gY2JbMF1bY2JbMV1dO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JbMF1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjb3BlID0gJGdsb2JhbFtjYlswXV07XG4gICAgICB9IGVsc2UgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBzY29wZSA9IGV2YWwoY2JbMF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF90eXBlb2YoY2JbMF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgc2NvcGUgPSBjYlswXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZnVuYyA9IGNiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGZ1bmMgKyAnIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gZnVuYy5hcHBseShzY29wZSwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmNfYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZV9mdW5jdGlvbihhcmdzLCBjb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jcmVhdGVfZnVuY3Rpb24vXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEpvaG5ueSBNYXN0IChodHRwOi8vd3d3LnBocHZyb3V3ZW4ubmwpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkZiA9IGNyZWF0ZV9mdW5jdGlvbignYSwgYicsICdyZXR1cm4gKGEgKyBiKScpXG4gIC8vICAgICAgICBleGFtcGxlIDE6ICRmKDEsIDIpXG4gIC8vICAgICAgICByZXR1cm5zIDE6IDNcblxuICB0cnkge1xuICAgIHJldHVybiBGdW5jdGlvbi5hcHBseShudWxsLCBhcmdzLnNwbGl0KCcsJykuY29uY2F0KGNvZGUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZV9mdW5jdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnVuY3Rpb25fZXhpc3RzKGZ1bmNOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZnVuY3Rpb25fZXhpc3RzL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFN0ZXZlIENsYXlcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBmdW5jdGlvbl9leGlzdHMoJ2lzRmluaXRlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgaWYgKHR5cGVvZiBmdW5jTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBmdW5jTmFtZSA9ICRnbG9iYWxbZnVuY05hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBmdW5jTmFtZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdW5jdGlvbl9leGlzdHMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaV9nZXQodmFybmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luaV9nZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIGluaSB2YWx1ZXMgbXVzdCBiZSBzZXQgYnkgaW5pX3NldCBvciBtYW51YWxseSB3aXRoaW4gYW4gaW5pIGZpbGVcbiAgLy8gICBleGFtcGxlIDE6IGluaV9zZXQoJ2RhdGUudGltZXpvbmUnLCAnQXNpYS9Ib25nX0tvbmcnKVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX2dldCgnZGF0ZS50aW1lem9uZScpXG4gIC8vICAgcmV0dXJucyAxOiAnQXNpYS9Ib25nX0tvbmcnXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcbiAgJGxvY3V0dXMucGhwLmluaSA9ICRsb2N1dHVzLnBocC5pbmkgfHwge307XG5cbiAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0gJiYgJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWU7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pX2dldC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21kNS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiBLZWVwIGluIG1pbmQgdGhhdCBpbiBhY2NvcmRhbmNlIHdpdGggUEhQLCB0aGUgd2hvbGUgc3RyaW5nIGlzIGJ1ZmZlcmVkIGFuZCB0aGVuXG4gIC8vICAgICAgbm90ZSAxOiBoYXNoZWQuIElmIGF2YWlsYWJsZSwgd2UnZCByZWNvbW1lbmQgdXNpbmcgTm9kZSdzIG5hdGl2ZSBjcnlwdG8gbW9kdWxlcyBkaXJlY3RseVxuICAvLyAgICAgIG5vdGUgMTogaW4gYSBzdGVhbWluZyBmYXNoaW9uIGZvciBmYXN0ZXIgYW5kIG1vcmUgZWZmaWNpZW50IGhhc2hpbmdcbiAgLy8gICBleGFtcGxlIDE6IG1kNSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnNmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjknXG5cbiAgdmFyIGhhc2g7XG4gIHRyeSB7XG4gICAgdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIHZhciBtZDVzdW0gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgbWQ1c3VtLnVwZGF0ZShzdHIpO1xuICAgIGhhc2ggPSBtZDVzdW0uZGlnZXN0KCdoZXgnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB2YXIgdXRmOEVuY29kZSA9IHJlcXVpcmUoJy4uL3htbC91dGY4X2VuY29kZScpO1xuICB2YXIgeGw7XG5cbiAgdmFyIF9yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gX3JvdGF0ZUxlZnQobFZhbHVlLCBpU2hpZnRCaXRzKSB7XG4gICAgcmV0dXJuIGxWYWx1ZSA8PCBpU2hpZnRCaXRzIHwgbFZhbHVlID4+PiAzMiAtIGlTaGlmdEJpdHM7XG4gIH07XG5cbiAgdmFyIF9hZGRVbnNpZ25lZCA9IGZ1bmN0aW9uIF9hZGRVbnNpZ25lZChsWCwgbFkpIHtcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0O1xuICAgIGxYOCA9IGxYICYgMHg4MDAwMDAwMDtcbiAgICBsWTggPSBsWSAmIDB4ODAwMDAwMDA7XG4gICAgbFg0ID0gbFggJiAweDQwMDAwMDAwO1xuICAgIGxZNCA9IGxZICYgMHg0MDAwMDAwMDtcbiAgICBsUmVzdWx0ID0gKGxYICYgMHgzRkZGRkZGRikgKyAobFkgJiAweDNGRkZGRkZGKTtcbiAgICBpZiAobFg0ICYgbFk0KSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgfVxuICAgIGlmIChsWDQgfCBsWTQpIHtcbiAgICAgIGlmIChsUmVzdWx0ICYgMHg0MDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX0YgPSBmdW5jdGlvbiBfRih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB5IHwgfnggJiB6O1xuICB9O1xuICB2YXIgX0cgPSBmdW5jdGlvbiBfRyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB6IHwgeSAmIH56O1xuICB9O1xuICB2YXIgX0ggPSBmdW5jdGlvbiBfSCh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfTtcbiAgdmFyIF9JID0gZnVuY3Rpb24gX0koeCwgeSwgeikge1xuICAgIHJldHVybiB5IF4gKHggfCB+eik7XG4gIH07XG5cbiAgdmFyIF9GRiA9IGZ1bmN0aW9uIF9GRihhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRihiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9HRyA9IGZ1bmN0aW9uIF9HRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRyhiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9ISCA9IGZ1bmN0aW9uIF9ISChhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSChiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9JSSA9IGZ1bmN0aW9uIF9JSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSShiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9jb252ZXJ0VG9Xb3JkQXJyYXkgPSBmdW5jdGlvbiBfY29udmVydFRvV29yZEFycmF5KHN0cikge1xuICAgIHZhciBsV29yZENvdW50O1xuICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDIgPSAobE51bWJlck9mV29yZHNUZW1wMSAtIGxOdW1iZXJPZldvcmRzVGVtcDEgJSA2NCkgLyA2NDtcbiAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNUZW1wMiArIDEpICogMTY7XG4gICAgdmFyIGxXb3JkQXJyYXkgPSBuZXcgQXJyYXkobE51bWJlck9mV29yZHMgLSAxKTtcbiAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGxCeXRlQ291bnQgPSAwO1xuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCBzdHIuY2hhckNvZGVBdChsQnl0ZUNvdW50KSA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgICAgbEJ5dGVDb3VudCsrO1xuICAgIH1cbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAweDgwIDw8IGxCeXRlUG9zaXRpb247XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XG4gICAgcmV0dXJuIGxXb3JkQXJyYXk7XG4gIH07XG5cbiAgdmFyIF93b3JkVG9IZXggPSBmdW5jdGlvbiBfd29yZFRvSGV4KGxWYWx1ZSkge1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZSA9ICcnO1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnJztcbiAgICB2YXIgbEJ5dGU7XG4gICAgdmFyIGxDb3VudDtcblxuICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XG4gICAgICBsQnl0ZSA9IGxWYWx1ZSA+Pj4gbENvdW50ICogOCAmIDI1NTtcbiAgICAgIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcwJyArIGxCeXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgIHdvcmRUb0hleFZhbHVlID0gd29yZFRvSGV4VmFsdWUgKyB3b3JkVG9IZXhWYWx1ZVRlbXAuc3Vic3RyKHdvcmRUb0hleFZhbHVlVGVtcC5sZW5ndGggLSAyLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRUb0hleFZhbHVlO1xuICB9O1xuXG4gIHZhciB4ID0gW107XG4gIHZhciBrO1xuICB2YXIgQUE7XG4gIHZhciBCQjtcbiAgdmFyIENDO1xuICB2YXIgREQ7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgUzExID0gNztcbiAgdmFyIFMxMiA9IDEyO1xuICB2YXIgUzEzID0gMTc7XG4gIHZhciBTMTQgPSAyMjtcbiAgdmFyIFMyMSA9IDU7XG4gIHZhciBTMjIgPSA5O1xuICB2YXIgUzIzID0gMTQ7XG4gIHZhciBTMjQgPSAyMDtcbiAgdmFyIFMzMSA9IDQ7XG4gIHZhciBTMzIgPSAxMTtcbiAgdmFyIFMzMyA9IDE2O1xuICB2YXIgUzM0ID0gMjM7XG4gIHZhciBTNDEgPSA2O1xuICB2YXIgUzQyID0gMTA7XG4gIHZhciBTNDMgPSAxNTtcbiAgdmFyIFM0NCA9IDIxO1xuXG4gIHN0ciA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgeCA9IF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKTtcbiAgYSA9IDB4Njc0NTIzMDE7XG4gIGIgPSAweEVGQ0RBQjg5O1xuICBjID0gMHg5OEJBRENGRTtcbiAgZCA9IDB4MTAzMjU0NzY7XG5cbiAgeGwgPSB4Lmxlbmd0aDtcbiAgZm9yIChrID0gMDsgayA8IHhsOyBrICs9IDE2KSB7XG4gICAgQUEgPSBhO1xuICAgIEJCID0gYjtcbiAgICBDQyA9IGM7XG4gICAgREQgPSBkO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxXSwgUzEyLCAweEU4QzdCNzU2KTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzExLCAweEY1N0MwRkFGKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyA3XSwgUzE0LCAweEZENDY5NTAxKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFMxMywgMHhGRkZGNUJCMSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxM10sIFMxMiwgMHhGRDk4NzE5Myk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzIxLCAweEY2MUUyNTYyKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMF0sIFMyNCwgMHhFOUI2QzdBQSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMjMsIDB4RDhBMUU2ODEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgQUEpO1xuICAgIGIgPSBfYWRkVW5zaWduZWQoYiwgQkIpO1xuICAgIGMgPSBfYWRkVW5zaWduZWQoYywgQ0MpO1xuICAgIGQgPSBfYWRkVW5zaWduZWQoZCwgREQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBfd29yZFRvSGV4KGEpICsgX3dvcmRUb0hleChiKSArIF93b3JkVG9IZXgoYykgKyBfd29yZFRvSGV4KGQpO1xuXG4gIHJldHVybiB0ZW1wLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV9zdHIoc3RyLCBhcnJheSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2Vfc3RyL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBDYWdyaSBFa2luXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogc3RhZzAxOVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogWmFpZGUgKGh0dHA6Ly96YWlkZXN0aGluZ3MuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogRGF2aWQgUGVzdGEgKGh0dHA6Ly9kYXZpZHBlc3RhLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGplaWNxdWVzdFxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWQsIHdpbGwgcHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUuXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gYSBwYXJ0aWN1bGFyIGFyZ3VtZW50IGhhcyBiZWVuIHBhc3NlZCwgYW5kIHRoZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiByZXR1cm5lZCB2YWx1ZSBpcyBkaWZmZXJlbnQgcGFyc2Vfc3RyIG9mIFBIUC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogRm9yIGV4YW1wbGUsIGE9Yj1jJmQ9PT09Y1xuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3N0cignZmlyc3Q9Zm9vJnNlY29uZD1iYXInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMTogeyBmaXJzdDogJ2ZvbycsIHNlY29uZDogJ2JhcicgfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3N0cignc3RyX2E9SmFjaythbmQrSmlsbCtkaWRuJTI3dCtzZWUrdGhlK3dlbGwuJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHsgc3RyX2E6IFwiSmFjayBhbmQgSmlsbCBkaWRuJ3Qgc2VlIHRoZSB3ZWxsLlwiIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRhYmMgPSB7MzonYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3N0cignYVtiXVtcImNcIl09ZGVmJmFbcV09dCs1JywgJGFiYylcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkYWJjXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtcIjNcIjpcImFcIixcImFcIjp7XCJiXCI6e1wiY1wiOlwiZGVmXCJ9LFwicVwiOlwidCA1XCJ9fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3N0cignYVtdW109dmFsdWUnLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNDoge1wiYVwiOntcIjBcIjp7XCIwXCI6XCJ2YWx1ZVwifX19XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogcGFyc2Vfc3RyKCdhPTEmYVtdPTInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNToge1wiYVwiOntcIjBcIjpcIjJcIn19XG5cbiAgdmFyIHN0ckFyciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL14mLywgJycpLnJlcGxhY2UoLyYkLywgJycpLnNwbGl0KCcmJyk7XG4gIHZhciBzYWwgPSBzdHJBcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBjdDtcbiAgdmFyIHA7XG4gIHZhciBsYXN0T2JqO1xuICB2YXIgb2JqO1xuICB2YXIgY2hyO1xuICB2YXIgdG1wO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBwb3N0TGVmdEJyYWNrZXRQb3M7XG4gIHZhciBrZXlzO1xuICB2YXIga2V5c0xlbjtcblxuICB2YXIgX2ZpeFN0ciA9IGZ1bmN0aW9uIF9maXhTdHIoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gIH07XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgYXJyYXkgPSAkZ2xvYmFsO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNhbDsgaSsrKSB7XG4gICAgdG1wID0gc3RyQXJyW2ldLnNwbGl0KCc9Jyk7XG4gICAga2V5ID0gX2ZpeFN0cih0bXBbMF0pO1xuICAgIHZhbHVlID0gdG1wLmxlbmd0aCA8IDIgPyAnJyA6IF9maXhTdHIodG1wWzFdKTtcblxuICAgIHdoaWxlIChrZXkuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJ1xceDAwJykgPiAtMSkge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCdcXHgwMCcpKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICYmIGtleS5jaGFyQXQoMCkgIT09ICdbJykge1xuICAgICAga2V5cyA9IFtdO1xuICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ1snICYmICFwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSBqICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY2hhckF0KGopID09PSAnXScpIHtcbiAgICAgICAgICBpZiAocG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc2xpY2UoMCwgcG9zdExlZnRCcmFja2V0UG9zIC0gMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cihwb3N0TGVmdEJyYWNrZXRQb3MsIGogLSBwb3N0TGVmdEJyYWNrZXRQb3MpKTtcbiAgICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGogKyAxKSAhPT0gJ1snKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleXNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY2hyID0ga2V5c1swXS5jaGFyQXQoaik7XG5cbiAgICAgICAgaWYgKGNociA9PT0gJyAnIHx8IGNociA9PT0gJy4nIHx8IGNociA9PT0gJ1snKSB7XG4gICAgICAgICAga2V5c1swXSA9IGtleXNbMF0uc3Vic3RyKDAsIGopICsgJ18nICsga2V5c1swXS5zdWJzdHIoaiArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNociA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqID0gYXJyYXk7XG5cbiAgICAgIGZvciAoaiA9IDAsIGtleXNMZW4gPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW47IGorKykge1xuICAgICAgICBrZXkgPSBrZXlzW2pdLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgICAgIGxhc3RPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKChrZXkgPT09ICcnIHx8IGtleSA9PT0gJyAnKSAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgLy8gSW5zZXJ0IG5ldyBkaW1lbnNpb25cbiAgICAgICAgICBjdCA9IC0xO1xuXG4gICAgICAgICAgZm9yIChwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICBpZiAoK3AgPiBjdCAmJiBwLm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgICAgICAgICAgICBjdCA9ICtwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gY3QgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJpbWl0aXZlIHZhbHVlLCByZXBsYWNlIHdpdGggb2JqZWN0XG4gICAgICAgIGlmIChPYmplY3Qob2JqW2tleV0pICE9PSBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGFzdE9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vfc3RyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBydHJpbShzdHIsIGNoYXJsaXN0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcnRyaW0vXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogRXJrZWtqZXR0ZXJcbiAgLy8gICAgaW5wdXQgYnk6IHJlbVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBydHJpbSgnICAgIEtldmluIHZhbiBab25uZXZlbGQgICAgJylcbiAgLy8gICByZXR1cm5zIDE6ICcgICAgS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICBjaGFybGlzdCA9ICFjaGFybGlzdCA/ICcgXFxcXHNcXHhBMCcgOiAoY2hhcmxpc3QgKyAnJykucmVwbGFjZSgvKFtbXFxdKCkuPy8qe30rJF46XSkvZywgJ1xcXFwkMScpO1xuXG4gIHZhciByZSA9IG5ldyBSZWdFeHAoJ1snICsgY2hhcmxpc3QgKyAnXSskJywgJ2cnKTtcblxuICByZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKHJlLCAnJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnRyaW0uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cnBvcyhoYXlzdGFjaywgbmVlZGxlLCBvZmZzZXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJwb3MvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IERhbmllbCBFc3RlYmFuXG4gIC8vICAgZXhhbXBsZSAxOiBzdHJwb3MoJ0tldmluIHZhbiBab25uZXZlbGQnLCAnZScsIDUpXG4gIC8vICAgcmV0dXJucyAxOiAxNFxuXG4gIHZhciBpID0gKGhheXN0YWNrICsgJycpLmluZGV4T2YobmVlZGxlLCBvZmZzZXQgfHwgMCk7XG4gIHJldHVybiBpID09PSAtMSA/IGZhbHNlIDogaTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJwb3MuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9kZWNvZGUoZW5jb2RlZERhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZGVjb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEFtYW4gR3VwdGFcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZGVjb2RlKCdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09JylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2RlY29kZSgnWVE9PScpXG4gIC8vICAgcmV0dXJucyAyOiAnYSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9kZWNvZGUoJzRweVRJTU9nSUd4aElHMXZaR1U9JylcbiAgLy8gICByZXR1cm5zIDM6ICfinJMgw6AgbGEgbW9kZSdcblxuICAvLyBkZWNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZGVjb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGRlY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBkZWNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hdG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcod2luZG93LmF0b2IoZW5jb2RlZERhdGEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5jb2RlZERhdGEsICdiYXNlNjQnKS50b1N0cmluZygndXRmLTgnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBkZWMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlZERhdGE7XG4gIH1cblxuICBlbmNvZGVkRGF0YSArPSAnJztcblxuICBkbyB7XG4gICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcbiAgICBoMSA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMiA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMyA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoNCA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcblxuICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuXG4gICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcbiAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XG4gICAgbzMgPSBiaXRzICYgMHhmZjtcblxuICAgIGlmIChoMyA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xuICAgIH0gZWxzZSBpZiAoaDQgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgZW5jb2RlZERhdGEubGVuZ3RoKTtcblxuICBkZWMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZW5jb2RlKHN0cmluZ1RvRW5jb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJheXJvbiBHdWV2YXJhXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PSdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9lbmNvZGUoJ2EnKVxuICAvLyAgIHJldHVybnMgMjogJ1lRPT0nXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZW5jb2RlKCfinJMgw6AgbGEgbW9kZScpXG4gIC8vICAgcmV0dXJucyAzOiAnNHB5VElNT2dJR3hoSUcxdlpHVT0nXG5cbiAgLy8gZW5jb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGVuY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBlbmNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZW5jb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBmaXJzdCB3ZSB1c2UgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGdldCBwZXJjZW50LWVuY29kZWQgVVRGLTgsXG4gICAgLy8gdGhlbiB3ZSBjb252ZXJ0IHRoZSBwZXJjZW50IGVuY29kaW5ncyBpbnRvIHJhdyBieXRlcyB3aGljaFxuICAgIC8vIGNhbiBiZSBmZWQgaW50byB0aGUgYmFzZTY0IGVuY29kaW5nIGFsZ29yaXRobS5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5idG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nVG9FbmNvZGUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBlbmMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghc3RyaW5nVG9FbmNvZGUpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9FbmNvZGU7XG4gIH1cblxuICBzdHJpbmdUb0VuY29kZSA9IGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpO1xuXG4gIGRvIHtcbiAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXG4gICAgbzEgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzIgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzMgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICBiaXRzID0gbzEgPDwgMTYgfCBvMiA8PCA4IHwgbzM7XG5cbiAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xuICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XG4gICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xuICAgIGg0ID0gYml0cyAmIDB4M2Y7XG5cbiAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xuICAgIHRtcEFyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xuICB9IHdoaWxlIChpIDwgc3RyaW5nVG9FbmNvZGUubGVuZ3RoKTtcblxuICBlbmMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgdmFyIHIgPSBzdHJpbmdUb0VuY29kZS5sZW5ndGggJSAzO1xuXG4gIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0dHBfYnVpbGRfcXVlcnkoZm9ybWRhdGEsIG51bWVyaWNQcmVmaXgsIGFyZ1NlcGFyYXRvciwgZW5jVHlwZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2h0dHBfYnVpbGRfcXVlcnkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gIHJldmlzZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogV2lsbCBSb3dlXG4gIC8vICAgICAgbm90ZSAxOiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwga2V5IGFuZCB2YWx1ZSBhcmUgc2tpcHBlZCBpbiB0aGVcbiAgLy8gICAgICBub3RlIDE6IGh0dHBfYnVpbGRfcXVlcnkgb2YgUEhQIHdoaWxlIGluIGxvY3V0dXMgdGhleSBhcmUgbm90LlxuICAvLyAgIGV4YW1wbGUgMTogaHR0cF9idWlsZF9xdWVyeSh7Zm9vOiAnYmFyJywgcGhwOiAnaHlwZXJ0ZXh0IHByb2Nlc3NvcicsIGJhejogJ2Jvb20nLCBjb3c6ICdtaWxrJ30sICcnLCAnJmFtcDsnKVxuICAvLyAgIHJldHVybnMgMTogJ2Zvbz1iYXImYW1wO3BocD1oeXBlcnRleHQrcHJvY2Vzc29yJmFtcDtiYXo9Ym9vbSZhbXA7Y293PW1pbGsnXG4gIC8vICAgZXhhbXBsZSAyOiBodHRwX2J1aWxkX3F1ZXJ5KHsncGhwJzogJ2h5cGVydGV4dCBwcm9jZXNzb3InLCAwOiAnZm9vJywgMTogJ2JhcicsIDI6ICdiYXonLCAzOiAnYm9vbScsICdjb3cnOiAnbWlsayd9LCAnbXl2YXJfJylcbiAgLy8gICByZXR1cm5zIDI6ICdteXZhcl8wPWZvbyZteXZhcl8xPWJhciZteXZhcl8yPWJheiZteXZhcl8zPWJvb20mcGhwPWh5cGVydGV4dCtwcm9jZXNzb3ImY293PW1pbGsnXG4gIC8vICAgZXhhbXBsZSAzOiBodHRwX2J1aWxkX3F1ZXJ5KHtmb286ICdiYXInLCBwaHA6ICdoeXBlcnRleHQgcHJvY2Vzc29yJywgYmF6OiAnYm9vbScsIGNvdzogJ21pbGsnfSwgJycsICcmYW1wOycsICdQSFBfUVVFUllfUkZDMzk4NicpXG4gIC8vICAgcmV0dXJucyAzOiAnZm9vPWJhciZhbXA7cGhwPWh5cGVydGV4dCUyMHByb2Nlc3NvciZhbXA7YmF6PWJvb20mYW1wO2Nvdz1taWxrJ1xuXG4gIHZhciBlbmNvZGVGdW5jO1xuXG4gIHN3aXRjaCAoZW5jVHlwZSkge1xuICAgIGNhc2UgJ1BIUF9RVUVSWV9SRkMzOTg2JzpcbiAgICAgIGVuY29kZUZ1bmMgPSByZXF1aXJlKCcuLi91cmwvcmF3dXJsZW5jb2RlJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BIUF9RVUVSWV9SRkMxNzM4JzpcbiAgICBkZWZhdWx0OlxuICAgICAgZW5jb2RlRnVuYyA9IHJlcXVpcmUoJy4uL3VybC91cmxlbmNvZGUnKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIHZhbHVlO1xuICB2YXIga2V5O1xuICB2YXIgdG1wID0gW107XG5cbiAgdmFyIF9odHRwQnVpbGRRdWVyeUhlbHBlciA9IGZ1bmN0aW9uIF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXksIHZhbCwgYXJnU2VwYXJhdG9yKSB7XG4gICAgdmFyIGs7XG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgIHZhbCA9ICcxJztcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gZmFsc2UpIHtcbiAgICAgIHZhbCA9ICcwJztcbiAgICB9XG4gICAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgICAgaWYgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChrIGluIHZhbCkge1xuICAgICAgICAgIGlmICh2YWxba10gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXkgKyAnWycgKyBrICsgJ10nLCB2YWxba10sIGFyZ1NlcGFyYXRvcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wLmpvaW4oYXJnU2VwYXJhdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZW5jb2RlRnVuYyhrZXkpICsgJz0nICsgZW5jb2RlRnVuYyh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcHJvY2Vzc2luZyBmb3IgaHR0cF9idWlsZF9xdWVyeSgpLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIGlmICghYXJnU2VwYXJhdG9yKSB7XG4gICAgYXJnU2VwYXJhdG9yID0gJyYnO1xuICB9XG4gIGZvciAoa2V5IGluIGZvcm1kYXRhKSB7XG4gICAgdmFsdWUgPSBmb3JtZGF0YVtrZXldO1xuICAgIGlmIChudW1lcmljUHJlZml4ICYmICFpc05hTihrZXkpKSB7XG4gICAgICBrZXkgPSBTdHJpbmcobnVtZXJpY1ByZWZpeCkgKyBrZXk7XG4gICAgfVxuICAgIHZhciBxdWVyeSA9IF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXksIHZhbHVlLCBhcmdTZXBhcmF0b3IpO1xuICAgIGlmIChxdWVyeSAhPT0gJycpIHtcbiAgICAgIHRtcC5wdXNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wLmpvaW4oYXJnU2VwYXJhdG9yKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwX2J1aWxkX3F1ZXJ5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV91cmwoc3RyLCBjb21wb25lbnQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3VybC9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogU3RldmVuIExldml0aGFuIChodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IExvcmVuem8gUGlzYW5pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFRvbnlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogb3JpZ2luYWwgYnkgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBibG9nIHBvc3QgYXQgaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXG4gIC8vICAgICAgICAgICBub3RlIDE6IGRlbW8gYXQgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBEb2VzIG5vdCByZXBsYWNlIGludmFsaWQgY2hhcmFjdGVycyB3aXRoICdfJyBhcyBpbiBQSFAsXG4gIC8vICAgICAgICAgICBub3RlIDE6IG5vciBkb2VzIGl0IHJldHVybiBmYWxzZSB3aXRoXG4gIC8vICAgICAgICAgICBub3RlIDE6IGEgc2VyaW91c2x5IG1hbGZvcm1lZCBVUkwuXG4gIC8vICAgICAgICAgICBub3RlIDE6IEJlc2lkZXMgZnVuY3Rpb24gbmFtZSwgaXMgZXNzZW50aWFsbHkgdGhlIHNhbWUgYXMgcGFyc2VVcmkgYXNcbiAgLy8gICAgICAgICAgIG5vdGUgMTogd2VsbCBhcyBvdXIgYWxsb3dpbmdcbiAgLy8gICAgICAgICAgIG5vdGUgMTogYW4gZXh0cmEgc2xhc2ggYWZ0ZXIgdGhlIHNjaGVtZS9wcm90b2NvbCAodG8gYWxsb3cgZmlsZTovLy8gYXMgaW4gUEhQKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV91cmwoJ2h0dHA6Ly91c2VyOnBhc3NAaG9zdC9wYXRoP2E9diNhJylcbiAgLy8gICAgICAgIHJldHVybnMgMToge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnaG9zdCcsIHVzZXI6ICd1c2VyJywgcGFzczogJ3Bhc3MnLCBwYXRoOiAnL3BhdGgnLCBxdWVyeTogJ2E9dicsIGZyYWdtZW50OiAnYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3VybCgnaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5JylcbiAgLy8gICAgICAgIHJldHVybnMgMjoge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnZW4ud2lraXBlZGlhLm9yZycsIHBhdGg6ICcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5J31cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcGFyc2VfdXJsKCdodHRwczovL2hvc3QuZG9tYWluLnRsZC9hQGIuYy9mb2xkZXInKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiB7c2NoZW1lOiAnaHR0cHMnLCBob3N0OiAnaG9zdC5kb21haW4udGxkJywgcGF0aDogJy9hQGIuYy9mb2xkZXInfVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV91cmwoJ2h0dHBzOi8vZ29vZHVzZXI6c2VjcmV0cGFzc3dvcmRAd3d3LmV4YW1wbGUuY29tL2FAYi5jL2ZvbGRlcj9mb289YmFyJylcbiAgLy8gICAgICAgIHJldHVybnMgNDogeyBzY2hlbWU6ICdodHRwcycsIGhvc3Q6ICd3d3cuZXhhbXBsZS5jb20nLCBwYXRoOiAnL2FAYi5jL2ZvbGRlcicsIHF1ZXJ5OiAnZm9vPWJhcicsIHVzZXI6ICdnb29kdXNlcicsIHBhc3M6ICdzZWNyZXRwYXNzd29yZCcgfVxuXG4gIHZhciBxdWVyeTtcblxuICB2YXIgbW9kZSA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5wYXJzZV91cmwubW9kZScpIDogdW5kZWZpbmVkKSB8fCAncGhwJztcblxuICB2YXIga2V5ID0gWydzb3VyY2UnLCAnc2NoZW1lJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3MnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnZnJhZ21lbnQnXTtcblxuICAvLyBGb3IgbG9vc2Ugd2UgYWRkZWQgb25lIG9wdGlvbmFsIHNsYXNoIHRvIHBvc3Qtc2NoZW1lIHRvIGNhdGNoIGZpbGU6Ly8vIChzaG91bGQgcmVzdHJpY3QgdGhpcylcbiAgdmFyIHBhcnNlciA9IHtcbiAgICBwaHA6IG5ldyBSZWdFeHAoWycoPzooW146XFxcXC8/I10rKTopPycsICcoPzpcXFxcL1xcXFwvKCkoPzooPzooKSg/OihbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLCAnKCknLCAnKD86KCgpKD86KD86W14/I1xcXFwvXSpcXFxcLykqKSgpKD86W14/I10qKSkoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ10uam9pbignJykpLFxuICAgIHN0cmljdDogbmV3IFJlZ0V4cChbJyg/OihbXjpcXFxcLz8jXSspOik/JywgJyg/OlxcXFwvXFxcXC8oKD86KChbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLCAnKCgoKD86W14/I1xcXFwvXSpcXFxcLykqKShbXj8jXSopKSg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSksXG4gICAgbG9vc2U6IG5ldyBSZWdFeHAoWycoPzooPyFbXjpAXSs6W146QFxcXFwvXSpAKShbXjpcXFxcLz8jLl0rKTopPycsICcoPzpcXFxcL1xcXFwvXFxcXC8/KT8nLCAnKCg/OigoW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KScsICcoKChcXFxcLyg/OltePyNdKD8hW14/I1xcXFwvXSpcXFxcLltePyNcXFxcLy5dKyg/Ols/I118JCkpKSpcXFxcLz8pPyhbXj8jXFxcXC9dKikpJywgJyg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSlcbiAgfTtcblxuICB2YXIgbSA9IHBhcnNlclttb2RlXS5leGVjKHN0cik7XG4gIHZhciB1cmkgPSB7fTtcbiAgdmFyIGkgPSAxNDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKG1baV0pIHtcbiAgICAgIHVyaVtrZXlbaV1dID0gbVtpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHVyaVtjb21wb25lbnQucmVwbGFjZSgnUEhQX1VSTF8nLCAnJykudG9Mb3dlckNhc2UoKV07XG4gIH1cblxuICBpZiAobW9kZSAhPT0gJ3BocCcpIHtcbiAgICB2YXIgbmFtZSA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5wYXJzZV91cmwucXVlcnlLZXknKSA6IHVuZGVmaW5lZCkgfHwgJ3F1ZXJ5S2V5JztcbiAgICBwYXJzZXIgPSAvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2c7XG4gICAgdXJpW25hbWVdID0ge307XG4gICAgcXVlcnkgPSB1cmlba2V5WzEyXV0gfHwgJyc7XG4gICAgcXVlcnkucmVwbGFjZShwYXJzZXIsIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG4gICAgICBpZiAoJDEpIHtcbiAgICAgICAgdXJpW25hbWVdWyQxXSA9ICQyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIHVyaS5zb3VyY2U7XG4gIHJldHVybiB1cmk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2VfdXJsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByYXd1cmxkZWNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9yYXd1cmxkZWNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGxvdmlvXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyB0byBkZWNvZGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogZnJvbSBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiByYXd1cmxkZWNvZGUoJ0tldmluK3Zhbitab25uZXZlbGQlMjEnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAnS2V2aW4rdmFuK1pvbm5ldmVsZCEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHJhd3VybGRlY29kZSgnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRicpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwOi8va3Z6LmlvLydcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcmF3dXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0QnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT0nXG5cbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCgoc3RyICsgJycpLnJlcGxhY2UoLyUoPyFbXFxkYS1mXXsyfSkvZ2ksIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQSFAgdG9sZXJhdGVzIHBvb3JseSBmb3JtZWQgZXNjYXBlIHNlcXVlbmNlc1xuICAgIHJldHVybiAnJTI1JztcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhd3VybGRlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmF3dXJsZW5jb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcmF3dXJsZW5jb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBNaWNoYWVsIEdyaWVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEpvcmlzXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFRoaXMgcmVmbGVjdHMgUEhQIDUuMy82LjArIGJlaGF2aW9yXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyBcXFxuICAvLyAgICAgICAgICAgbm90ZSAxOiB0byBlbmNvZGUgaW50byBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiByYXd1cmxlbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQhJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluJTIwdmFuJTIwWm9ubmV2ZWxkJTIxJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiByYXd1cmxlbmNvZGUoJ2h0dHA6Ly9rdnouaW8vJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHJhd3VybGVuY29kZSgnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCcpXG4gIC8vICAgICAgICByZXR1cm5zIDM6ICdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0R1dGYtOCdcblxuICBzdHIgPSBzdHIgKyAnJztcblxuICAvLyBUaWxkZSBzaG91bGQgYmUgYWxsb3dlZCB1bmVzY2FwZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBIUCAoYXMgcmVmbGVjdGVkIGJlbG93KSxcbiAgLy8gYnV0IGlmIHlvdSB3YW50IHRvIHJlZmxlY3QgY3VycmVudFxuICAvLyBQSFAgYmVoYXZpb3IsIHlvdSB3b3VsZCBuZWVkIHRvIGFkZCBcIi5yZXBsYWNlKC9+L2csICclN0UnKTtcIiB0byB0aGUgZm9sbG93aW5nLlxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvIS9nLCAnJTIxJykucmVwbGFjZSgvJy9nLCAnJTI3JykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoL1xcKi9nLCAnJTJBJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmF3dXJsZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1cmxkZWNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91cmxkZWNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBMYXJzIEZpc2NoZXJcbiAgLy8gICAgICBpbXByb3ZlZCBieTogT3JsYW5kb1xuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBBSlxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBlLW1pa2VcbiAgLy8gICAgICAgICBpbnB1dCBieTogbG92aW9cbiAgLy8gICAgICBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBidWdmaXhlZCBieTogUm9iXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IGluZm8gb24gd2hhdCBlbmNvZGluZyBmdW5jdGlvbnMgdG8gdXNlIGZyb206XG4gIC8vICAgICAgICAgICBub3RlIDE6IGh0dHA6Ly94a3IudXMvYXJ0aWNsZXMvamF2YXNjcmlwdC9lbmNvZGUtY29tcGFyZS9cbiAgLy8gICAgICAgICAgIG5vdGUgMTogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhpcyBmdW5jdGlvbiBleHBlY3RzIHRvIGRlY29kZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBmcm9tIFVURi04IGVuY29kZWQgc3RyaW5ncywgYXMgZm91bmQgb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogcGFnZXMgc2VydmVkIGFzIFVURi04XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHVybGRlY29kZSgnS2V2aW4rdmFuK1pvbm5ldmVsZCUyMScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkISdcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGa3Z6LmlvJTJGJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHA6Ly9rdnouaW8vJ1xuICAvLyAgICAgICAgZXhhbXBsZSAzOiB1cmxkZWNvZGUoJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04JTI2b2UlM0R1dGYtOCUyNmFxJTNEdCUyNnJscyUzRGNvbS51YnVudHUlM0Flbi1VUyUzQXVub2ZmaWNpYWwlMjZjbGllbnQlM0RmaXJlZm94LWEnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCZvZT11dGYtOCZhcT10JnJscz1jb20udWJ1bnR1OmVuLVVTOnVub2ZmaWNpYWwmY2xpZW50PWZpcmVmb3gtYSdcbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdXJsZGVjb2RlKCclRTUlQTUlQkQlM180JylcbiAgLy8gICAgICAgIHJldHVybnMgNDogJ1xcdTU5N2QlM180J1xuXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHN0ciArICcnKS5yZXBsYWNlKC8lKD8hW1xcZGEtZl17Mn0pL2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUEhQIHRvbGVyYXRlcyBwb29ybHkgZm9ybWVkIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICByZXR1cm4gJyUyNSc7XG4gIH0pLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybGRlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJsZW5jb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXJsZW5jb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBQaGlsaXAgUGV0ZXJzb25cbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogTGFycyBGaXNjaGVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEFKXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEpvcmlzXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFRoaXMgcmVmbGVjdHMgUEhQIDUuMy82LjArIGJlaGF2aW9yXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogZXhwZWN0cyB0byBlbmNvZGUgaW50byBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB1cmxlbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQhJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluK3Zhbitab25uZXZlbGQlMjEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHVybGVuY29kZSgnaHR0cDovL2t2ei5pby8nKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiAnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRidcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdXJsZW5jb2RlKCdodHRwOi8vd3d3Lmdvb2dsZS5ubC9zZWFyY2g/cT1Mb2N1dHVzJmllPXV0Zi04JylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04J1xuXG4gIHN0ciA9IHN0ciArICcnO1xuXG4gIC8vIFRpbGRlIHNob3VsZCBiZSBhbGxvd2VkIHVuZXNjYXBlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUEhQIChhcyByZWZsZWN0ZWQgYmVsb3cpLFxuICAvLyBidXQgaWYgeW91IHdhbnQgdG8gcmVmbGVjdCBjdXJyZW50XG4gIC8vIFBIUCBiZWhhdmlvciwgeW91IHdvdWxkIG5lZWQgdG8gYWRkIFwiLnJlcGxhY2UoL34vZywgJyU3RScpO1wiIHRvIHRoZSBmb2xsb3dpbmcuXG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8hL2csICclMjEnKS5yZXBsYWNlKC8nL2csICclMjcnKS5yZXBsYWNlKC9cXCgvZywgJyUyOCcpLnJlcGxhY2UoL1xcKS9nLCAnJTI5JykucmVwbGFjZSgvXFwqL2csICclMkEnKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmxlbmNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfY2FsbGFibGUobWl4ZWRWYXIsIHN5bnRheE9ubHksIGNhbGxhYmxlTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2NhbGxhYmxlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IEZyYW7Dp29pc1xuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSB2YXJpYWJsZSBjYWxsYWJsZU5hbWUgY2Fubm90IHdvcmsgYXMgYSBzdHJpbmcgdmFyaWFibGUgcGFzc2VkIGJ5XG4gIC8vICAgICAgbm90ZSAxOiByZWZlcmVuY2UgYXMgaW4gUEhQIChzaW5jZSBKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZ1xuICAvLyAgICAgIG5vdGUgMTogc3RyaW5ncyBieSByZWZlcmVuY2UpLCBidXQgaW5zdGVhZCB3aWxsIHRha2UgdGhlIG5hbWUgb2ZcbiAgLy8gICAgICBub3RlIDE6IGEgZ2xvYmFsIHZhcmlhYmxlIGFuZCBzZXQgdGhhdCBpbnN0ZWFkLlxuICAvLyAgICAgIG5vdGUgMTogV2hlbiB1c2VkIG9uIGFuIG9iamVjdCwgZGVwZW5kcyBvbiBhIGNvbnN0cnVjdG9yIHByb3BlcnR5XG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyBrZXB0IG9uIHRoZSBvYmplY3QgcHJvdG90eXBlXG4gIC8vICAgICAgbm90ZSAyOiBEZXBlbmRpbmcgb24gdGhlIGBjYWxsYWJsZU5hbWVgIHRoYXQgaXMgcGFzc2VkLCB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgZXZhbC5cbiAgLy8gICAgICBub3RlIDI6IFRoZSBldmFsIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMjogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMjogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogaXNfY2FsbGFibGUoJ2lzX2NhbGxhYmxlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2NhbGxhYmxlKCdib2d1c0Z1bmN0aW9uJywgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWUgLy8gZ2l2ZXMgdHJ1ZSBiZWNhdXNlIGRvZXMgbm90IGRvIHN0cmljdCBjaGVja2luZ1xuICAvLyAgIGV4YW1wbGUgMzogZnVuY3Rpb24gU29tZUNsYXNzICgpIHt9XG4gIC8vICAgZXhhbXBsZSAzOiBTb21lQ2xhc3MucHJvdG90eXBlLnNvbWVNZXRob2QgPSBmdW5jdGlvbiAoKXt9XG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgdGVzdE9iaiA9IG5ldyBTb21lQ2xhc3MoKVxuICAvLyAgIGV4YW1wbGUgMzogaXNfY2FsbGFibGUoW3Rlc3RPYmosICdzb21lTWV0aG9kJ10sIHRydWUsICdteVZhcicpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9IG15VmFyXG4gIC8vICAgcmV0dXJucyAzOiAnU29tZUNsYXNzOjpzb21lTWV0aG9kJ1xuICAvLyAgIGV4YW1wbGUgNDogaXNfY2FsbGFibGUoZnVuY3Rpb24gKCkge30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgbWV0aG9kID0gJyc7XG4gIHZhciB2YWxpZEZ1bmN0aW9uTmFtZSA9IGZhbHNlO1xuXG4gIHZhciBnZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIGdldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gJGdsb2JhbDtcbiAgICBtZXRob2QgPSBtaXhlZFZhcjtcbiAgICBuYW1lID0gbWl4ZWRWYXI7XG4gICAgdmFsaWRGdW5jdGlvbk5hbWUgPSAhIW5hbWUubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAyICYmIF90eXBlb2YobWl4ZWRWYXJbMF0pID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbWl4ZWRWYXJbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gbWl4ZWRWYXJbMF07XG4gICAgbWV0aG9kID0gbWl4ZWRWYXJbMV07XG4gICAgbmFtZSA9IChvYmouY29uc3RydWN0b3IgJiYgZ2V0RnVuY05hbWUob2JqLmNvbnN0cnVjdG9yKSkgKyAnOjonICsgbWV0aG9kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzeW50YXhPbmx5IHx8IHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdmFsaWRGdW5jdGlvbk5hbWUgYXZvaWRzIGV4cGxvaXRzXG4gIGlmICh2YWxpZEZ1bmN0aW9uTmFtZSAmJiB0eXBlb2YgZXZhbChtZXRob2QpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfY2FsbGFibGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHV0ZjhfZW5jb2RlKGFyZ1N0cmluZykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3V0ZjhfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc293YmVycnlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IFl2ZXMgU3VjYWV0XG4gIC8vIGltcHJvdmVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFVscmljaFxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyAgIGV4YW1wbGUgMTogdXRmOF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgaWYgKGFyZ1N0cmluZyA9PT0gbnVsbCB8fCB0eXBlb2YgYXJnU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIC5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpO1xuICB2YXIgc3RyaW5nID0gYXJnU3RyaW5nICsgJyc7XG4gIHZhciB1dGZ0ZXh0ID0gJyc7XG4gIHZhciBzdGFydDtcbiAgdmFyIGVuZDtcbiAgdmFyIHN0cmluZ2wgPSAwO1xuXG4gIHN0YXJ0ID0gZW5kID0gMDtcbiAgc3RyaW5nbCA9IHN0cmluZy5sZW5ndGg7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nbDsgbisrKSB7XG4gICAgdmFyIGMxID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG4gICAgdmFyIGVuYyA9IG51bGw7XG5cbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIGVuZCsrO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAxMjcgJiYgYzEgPCAyMDQ4KSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDYgfCAxOTIsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDEyIHwgMjI0LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdXJyb2dhdGUgcGFpcnNcbiAgICAgIGlmICgoYzEgJiAweEZDMDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCB0cmFpbCBzdXJyb2dhdGUgYXQgJyArIG4pO1xuICAgICAgfVxuICAgICAgdmFyIGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoKytuKTtcbiAgICAgIGlmICgoYzIgJiAweEZDMDApICE9PSAweERDMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCBsZWFkIHN1cnJvZ2F0ZSBhdCAnICsgKG4gLSAxKSk7XG4gICAgICB9XG4gICAgICBjMSA9ICgoYzEgJiAweDNGRikgPDwgMTApICsgKGMyICYgMHgzRkYpICsgMHgxMDAwMDtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTggfCAyNDAsIGMxID4+IDEyICYgNjMgfCAxMjgsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfVxuICAgIGlmIChlbmMgIT09IG51bGwpIHtcbiAgICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICAgIHV0ZnRleHQgKz0gZW5jO1xuICAgICAgc3RhcnQgPSBlbmQgPSBuICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgc3RyaW5nbCk7XG4gIH1cblxuICByZXR1cm4gdXRmdGV4dDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4X2VuY29kZS5qcy5tYXAiLCIvLyBBcnJheSAmIE9iamVjdCBSZWxhdGVkIEZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV9hcmdzICAgICAgICAgPSByZXF1aXJlKCAnanMtcGFyc2UtYXJncycgKTtcclxubW9kdWxlLmV4cG9ydHMuYXJyYXlfdG9faHRtbF9hdHRyID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbF9hdHRyJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b19odG1sICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b193aW5kb3cgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b193aW5kb3cnICk7XHJcbm1vZHVsZS5leHBvcnRzLnBsYWluX29iamVjdCAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BsYWluX29iamVjdCcgKTtcclxuXHJcbi8vIERhdGUgJiBUaW1lIFJlbGF0ZWQgRnVuY3Rpb25zXHJcbm1vZHVsZS5leHBvcnRzLm1pY3JvdGltZSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2FmdGVyX2RhdGUgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2FmdGVyX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2JlZm9yZV9kYXRlICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2JlZm9yZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19zYW1lX2RhdGUgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19zYW1lX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmZvcm1hdF9kdXJhdGlvbiA9IHJlcXVpcmUoICcuL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbicgKTtcclxubW9kdWxlLmV4cG9ydHMuZGlmZl9kYXlzICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGlmZl9kYXlzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy50aW1lX3Rha2VuICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5cclxuLy8gRGF0YSBUeXBlIFZhbGlkYXRpb25cclxubW9kdWxlLmV4cG9ydHMuaXNfdXJsID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdXJsLmpzJyApO1xyXG5cclxuLy8gUnVuIFRpbWUgRnVuY3Rpb24gUmVsYXRlZHMuXHJcbm1vZHVsZS5leHBvcnRzLmNhbGxfdXNlcl9mdW5jICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jYWxsX3VzZXJfZnVuY19hcnJheSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHMuZnVuY3Rpb25fZXhpc3RzICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVfZnVuY3Rpb24gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24nICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2NhbGxhYmxlICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19jYWxsYWJsZScgKTtcclxuXHJcbi8vIEJyb3dzZXIgUmVsYXRlZFxyXG5tb2R1bGUuZXhwb3J0cy5pc190YWJfZm9jdXNlZCA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3RhYl9mb2N1c2VkJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc193aW5kb3dfYXJnICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzLnNjcm9sbF90b190b3AgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3RvX3RvcCcgKTtcclxubW9kdWxlLmV4cG9ydHMuY29weV90b19jbGlwICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3B5X3RvX2NsaXAnICk7XHJcbm1vZHVsZS5leHBvcnRzLnNjcm9sbF9wb3MgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3BvcycgKTtcclxubW9kdWxlLmV4cG9ydHMud2luZG93X2FyZyAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5kZXZpY2VfdHlwZSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RldmljZV90eXBlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5waXBlX2xvZyAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BpcGVfbG9nJyApO1xyXG5cclxuLy8galF1ZXJ5IFJlbGF0ZWQuXHJcbm1vZHVsZS5leHBvcnRzLnRvX2pxdWVyeSA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfanF1ZXJ5ID0gcmVxdWlyZSggJy4vcGFydHMvaXNfanF1ZXJ5JyApO1xyXG5cclxuLy8gT3RoZXJzXHJcbm1vZHVsZS5leHBvcnRzLnRvX2pzX2Z1bmMgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qc19mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5tZDUgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jb3VudGVyICAgID0gcmVxdWlyZSggJy4vcGFydHMvY291bnRlcicgKTtcclxubW9kdWxlLmV4cG9ydHMucmFuZF9tZDUgICA9IHJlcXVpcmUoICcuL3BhcnRzL3JhbmRfbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jc3NfdW5pdHMgID0gcmVxdWlyZSggJy4vcGFydHMvY3NzX3VuaXRzJyApO1xyXG5cclxuLy8gVVJMIFJlbGF0ZWQgRnVuY3Rpb25zLlxyXG5tb2R1bGUuZXhwb3J0cy51cmxfcGFyYW1zICAgID0gcmVxdWlyZSggJy4vcGFydHMvdXJsX3BhcmFtcycgKTtcclxubW9kdWxlLmV4cG9ydHMucXVlcnlfc3RyaW5nICA9IHJlcXVpcmUoICcuL3BhcnRzL3F1ZXJ5X3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHMucGFyc2Vfc3RyICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxubW9kdWxlLmV4cG9ydHMuYmFzZTY0X2VuY29kZSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2VuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMuYmFzZTY0X2RlY29kZSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMucmF3dXJsZGVjb2RlICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5yYXd1cmxlbmNvZGUgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxlbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnVybGRlY29kZSAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGRlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMudXJsZW5jb2RlICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV91cmwgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9wYXJzZV91cmwnICk7XHJcbiIsIi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gYXJyYXkgZWxlbWVudHMgaW50byA8bGk+IHRhZ3MgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgbGlzdCBvZiB0aGUgZ2l2ZW4gaWQuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKSwgYW5kIGFuIGFub255bW91cyBpbm5lciBjbG9zdXJlIHRvIGNyZWF0ZSBhIGxpc3Qgb2YgaHRtbCB0YWdzLlxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBsaXN0SURcclxuICogQHBhcmFtIHRhZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBhcnIsIGxpc3RJRCwgdGFnID0gJ2xpJyApID0+ICggZWwgPT4gKCAoIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbGlzdElEICkgKSwgKCBlbC5pbm5lckhUTUwgKz0gYXJyLm1hcCggaXRlbSA9PiBgPCR7dGFnfT4ke2l0ZW19PC8ke3RhZ30+YCApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbiggJycgKSApICkgKSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IHtcclxuXHRsZXQgcmV0dXJuX2h0bWwgPSAnJztcclxuXHRmb3IoIGxldCBJIGluICRkYXRhICkge1xyXG5cdFx0aWYoIF8uaXNPYmplY3QoICRkYXRhWyBJIF0gKSApIHtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInO1xyXG5cdFx0XHRmb3IoIGxldCBLIGluICRkYXRhWyBJIF0gKSB7XHJcblx0XHRcdFx0bGV0ICR2YWx1ZSA9ICggXy5pc09iamVjdCggJGRhdGFbIEkgXVsgSyBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdWyBLIF0gKSA6ICRkYXRhWyBJIF1bIEsgXTtcclxuXHRcdFx0XHRyZXR1cm5faHRtbCArPSAkdmFsdWUgKyAnICc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJ1wiJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCAkdmFsdWUgPSAoIF8uaXNPYmplY3QoICRkYXRhWyBJIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF0gKSA6ICRkYXRhWyBJIF07XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJyArICR2YWx1ZSArICdcIiAnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmV0dXJuX2h0bWw7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gKCAkYXJyYXkgKSA9PiB7XHJcblx0Zm9yKCBsZXQgJGtleSBpbiAkYXJyYXkgKSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICRhcnJheVsgJGtleSBdO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ29weSBhIHN0cmluZyB0byB0aGUgY2xpcGJvYXJkLiBPbmx5IHdvcmtzIGFzIGEgcmVzdWx0IG9mIHVzZXIgYWN0aW9uIChpLmUuIGluc2lkZSBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyKS5cclxuICogQ3JlYXRlIGEgbmV3IDx0ZXh0YXJlYT4gZWxlbWVudCwgZmlsbCBpdCB3aXRoIHRoZSBzdXBwbGllZCBkYXRhIGFuZCBhZGQgaXQgdG8gdGhlIEhUTUwgZG9jdW1lbnQuXHJcbiAqIFVzZSBTZWxlY3Rpb24uZ2V0UmFuZ2VBdCgpdG8gc3RvcmUgdGhlIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBVc2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKSB0byBjb3B5IHRvIHRoZSBjbGlwYm9hcmQuXHJcbiAqIFJlbW92ZSB0aGUgPHRleHRhcmVhPiBlbGVtZW50IGZyb20gdGhlIEhUTUwgZG9jdW1lbnQuIEZpbmFsbHksIHVzZSBTZWxlY3Rpb24oKS5hZGRSYW5nZSgpIHRvIHJlY292ZXIgdGhlIG9yaWdpbmFsIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBAcGFyYW0gc3RyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiB7XHJcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGV4dGFyZWEnICk7XHJcblx0ZWwudmFsdWUgPSBzdHI7XHJcblx0ZWwuc2V0QXR0cmlidXRlKCAncmVhZG9ubHknLCAnJyApO1xyXG5cdGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRlbC5zdHlsZS5sZWZ0ICAgICA9ICctOTk5OXB4JztcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbCApO1xyXG5cdGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA+IDAgPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KCAwICkgOiBmYWxzZTtcclxuXHRlbC5zZWxlY3QoKTtcclxuXHRkb2N1bWVudC5leGVjQ29tbWFuZCggJ2NvcHknICk7XHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCggZWwgKTtcclxuXHRpZiggc2VsZWN0ZWQgKSB7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKCBzZWxlY3RlZCApO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBhIGNvdW50ZXIgd2l0aCB0aGUgc3BlY2lmaWVkIHJhbmdlLCBzdGVwIGFuZCBkdXJhdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBzZWxlY3Rvci5cclxuICogQ2hlY2sgaWYgc3RlcCBoYXMgdGhlIHByb3BlciBzaWduIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkuXHJcbiAqIFVzZSBzZXRJbnRlcnZhbCgpIGluIGNvbWJpbmF0aW9uIHdpdGggTWF0aC5hYnMoKSBhbmQgTWF0aC5mbG9vcigpIHRvIGNhbGN1bGF0ZSB0aGUgdGltZSBiZXR3ZWVuIGVhY2ggbmV3IHRleHQgZHJhdy5cclxuICogVXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKS5pbm5lckhUTUwgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cclxuICogT21pdCB0aGUgZm91cnRoIHBhcmFtZXRlciwgc3RlcCwgdG8gdXNlIGEgZGVmYXVsdCBzdGVwIG9mIDEuIE9taXQgdGhlIGZpZnRoIHBhcmFtZXRlciwgZHVyYXRpb24sIHRvIHVzZSBhIGRlZmF1bHQgZHVyYXRpb24gb2YgMjAwMG1zLlxyXG4gKiBAcGFyYW0gc2VsZWN0b3JcclxuICogQHBhcmFtIHN0YXJ0XHJcbiAqIEBwYXJhbSBlbmRcclxuICogQHBhcmFtIHN0ZXBcclxuICogQHBhcmFtIGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggc2VsZWN0b3IsIHN0YXJ0LCBlbmQsIHN0ZXAgPSAxLCBkdXJhdGlvbiA9IDIwMDAgKSA9PiB7XHJcblx0bGV0IGN1cnJlbnQgPSBzdGFydCxcclxuXHRcdF9zdGVwICAgPSAoIGVuZCAtIHN0YXJ0ICkgKiBzdGVwIDwgMCA/IC1zdGVwIDogc3RlcCxcclxuXHRcdHRpbWVyICAgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHRjdXJyZW50ICs9IF9zdGVwO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGN1cnJlbnQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gZW5kO1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBjbGVhckludGVydmFsKCB0aW1lciApO1xyXG5cdFx0fSwgTWF0aC5hYnMoIE1hdGguZmxvb3IoIGR1cmF0aW9uIC8gKCBlbmQgLSBzdGFydCApICkgKSApO1xyXG5cdHJldHVybiB0aW1lcjtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB7XHJcblx0dmFyIHMgPSB2YWw7XHJcblx0aWYoIF8uaXNOdW1iZXIoIHZhbCApICkge1xyXG5cdFx0cmV0dXJuIHZhbCArICdweCc7XHJcblx0fSBlbHNlIGlmKCB2YWwuaW5kZXhPZiggJ3B4JyApID4gLTEgfHwgdmFsLmluZGV4T2YoICclJyApID4gLTEgfHwgdmFsLmluZGV4T2YoICdlbScgKSA+IC0xICkge1xyXG5cdFx0bGV0IGNoZWNrUHggID0gcy5yZXBsYWNlKCAncHgnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrUGN0ID0gcy5yZXBsYWNlKCAnJScsICcnICk7XHJcblx0XHRsZXQgY2hlY2tFbSAgPSBzLnJlcGxhY2UoICdlbScsICcnICk7XHJcblx0XHRpZiggXy5pc051bWJlciggY2hlY2tQeCApIHx8IF8uaXNOdW1iZXIoIGNoZWNrUGN0ICkgfHwgXy5pc051bWJlciggY2hlY2tFbSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcwcHgnO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJzBweCc7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBEZXRlY3RzIHdldGhlciB0aGUgd2Vic2l0ZSBpcyBiZWluZyBvcGVuZWQgaW4gYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIFVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IHByb3BlcnR5IHRvIGZpZ3VyZSBvdXQgaWYgdGhlIGRldmljZSBpcyBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPyAnTW9iaWxlJyA6ICdEZXNrdG9wJzsiLCIvKipcclxuICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gZGF0ZXMuXHJcbiAqIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gRGF0ZSBvYmplY3RzLlxyXG4gKiBAcGFyYW0gZGF0ZUluaXRpYWxcclxuICogQHBhcmFtIGRhdGVGaW5hbFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVJbml0aWFsLCBkYXRlRmluYWwgKSA9PiAoIGRhdGVGaW5hbCAtIGRhdGVJbml0aWFsICkgLyAoIDEwMDAgKiAzNjAwICogMjQgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgaHVtYW4gcmVhZGFibGUgZm9ybWF0IG9mIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gKiBEaXZpZGUgbXMgd2l0aCB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIHRvIG9idGFpbiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIGZvciBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIGFuZCBtaWxsaXNlY29uZC5cclxuICogVXNlIE9iamVjdC5lbnRyaWVzKCkgd2l0aCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKCkgdG8ga2VlcCBvbmx5IG5vbi16ZXJvIHZhbHVlcy5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSB0byBjcmVhdGUgdGhlIHN0cmluZyBmb3IgZWFjaCB2YWx1ZSwgcGx1cmFsaXppbmcgYXBwcm9wcmlhdGVseS5cclxuICogVXNlIFN0cmluZy5wcm90b3R5cGUuam9pbignLCAnKSB0byBjb21iaW5lIHRoZSB2YWx1ZXMgaW50byBhIHN0cmluZy5cclxuICogQHBhcmFtIG1zXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IG1zID0+IHtcclxuXHRpZiggbXMgPCAwICkgbXMgPSAtbXM7XHJcblx0Y29uc3QgdGltZSA9IHtcclxuXHRcdGRheTogTWF0aC5mbG9vciggbXMgLyA4NjQwMDAwMCApLFxyXG5cdFx0aG91cjogTWF0aC5mbG9vciggbXMgLyAzNjAwMDAwICkgJSAyNCxcclxuXHRcdG1pbnV0ZTogTWF0aC5mbG9vciggbXMgLyA2MDAwMCApICUgNjAsXHJcblx0XHRzZWNvbmQ6IE1hdGguZmxvb3IoIG1zIC8gMTAwMCApICUgNjAsXHJcblx0XHRtaWxsaXNlY29uZDogTWF0aC5mbG9vciggbXMgKSAlIDEwMDBcclxuXHR9O1xyXG5cdHJldHVybiBPYmplY3QuZW50cmllcyggdGltZSApXHJcblx0XHRcdFx0IC5maWx0ZXIoIHZhbCA9PiB2YWxbIDEgXSAhPT0gMCApXHJcblx0XHRcdFx0IC5tYXAoICggWyBrZXksIHZhbCBdICkgPT4gYCR7dmFsfSAke2tleX0ke3ZhbCAhPT0gMSA/ICdzJyA6ICcnfWAgKVxyXG5cdFx0XHRcdCAuam9pbiggJywgJyApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYWZ0ZXIgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvciAoPikgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYWZ0ZXIgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPiBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGJlZm9yZSBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgbGVzcyB0aGFuIG9wZXJhdG9yICg8KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBiZWZvcmUgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPCBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgZ2l2ZW4gT2JqZWN0IC8gVmFsdWUgaXMgYSBqUXVlcnkgSW5zdGFuY2UuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4gKCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJGVsZW0gKSAmJiBmYWxzZSA9PT0gXy5pc1N0cmluZyggJGVsZW0gKSAmJiAkZWxlbS5qUXVlcnkgKTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIHRoZSBzYW1lIGFzIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKCkgYW5kIHN0cmljdCBlcXVhbGl0eSBjaGVja2luZyAoPT09KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQS50b0lTT1N0cmluZygpID09PSBkYXRlQi50b0lTT1N0cmluZygpOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIGZvY3VzZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBEb2N1bWVudC5oaWRkZW4gcHJvcGVydHksIGludHJvZHVjZWQgYnkgdGhlIFBhZ2UgVmlzaWJpbGl0eSBBUEkgdG8gY2hlY2sgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gIWRvY3VtZW50LmhpZGRlbjsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJHVybCApID0+IHtcclxuXHRsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoICdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nICsgLy8gcHJvdG9jb2xcclxuXHRcdCcoKChbYS16XFxcXGRdKFthLXpcXFxcZC1dKlthLXpcXFxcZF0pKilcXFxcLj8pK1thLXpdezIsfXwnICsgLy8gZG9tYWluIG5hbWVcclxuXHRcdCcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknICsgLy8gaXAgKHY0KSBhZGRyZXNzXHJcblx0XHQnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLWEtelxcXFxkJV8ufitdKikqJyArIC8vcG9ydFxyXG5cdFx0JyhcXFxcP1s7JmEtelxcXFxkJV8ufis9LV0qKT8nICsgLy8gcXVlcnkgc3RyaW5nXHJcblx0XHQnKFxcXFwjWy1hLXpcXFxcZF9dKik/JCcsICdpJyApO1xyXG5cdHJldHVybiAoIHBhdHRlcm4udGVzdCggJHVybCApICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrcyBpZiB3aW5kb3cgaGFzIGdpdmVuIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5ICkgPT4gKCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggd2luZG93WyAka2V5IF0gKSApOyIsIi8qKlxyXG4gKiBMb2dzIGEgdmFsdWUgYW5kIHJldHVybnMgaXQuXHJcbiAqIFVzZSBjb25zb2xlLmxvZyB0byBsb2cgdGhlIHN1cHBsaWVkIHZhbHVlLCBjb21iaW5lZCB3aXRoIHRoZSB8fCBvcGVyYXRvciB0byByZXR1cm4gaXQuXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBkYXRhID0+IGNvbnNvbGUubG9nKCBkYXRhICkgfHwgZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9ICgpID0+ICggdHlwZW9mIE9iamVjdC5jcmVhdGUgICE9PSAndW5kZWZpbmVkJyApID8gT2JqZWN0LmNyZWF0ZSggbnVsbCApIDoge307IiwiLyoqXHJcbiAqIFJldHVybiB2YWx1ZSBmcm9tIFF1ZXJ5U3RyaW5nXHJcbiAqIEBwYXJhbSBuYW1lXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggbmFtZSApID0+IHtcclxuXHRuYW1lICAgICAgICA9IG5hbWUucmVwbGFjZSggL1tcXFtdLywgXCJcXFxcW1wiICkucmVwbGFjZSggL1tcXF1dLywgXCJcXFxcXVwiICk7XHJcblx0dmFyIHJlZ2V4ICAgPSBuZXcgUmVnRXhwKCBcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIiApLFxyXG5cdFx0cmVzdWx0cyA9IHJlZ2V4LmV4ZWMoIGxvY2F0aW9uLnNlYXJjaCApO1xyXG5cdHJldHVybiByZXN1bHRzID09IG51bGwgPyBcIlwiIDogZGVjb2RlVVJJQ29tcG9uZW50KCByZXN1bHRzWyAxIF0ucmVwbGFjZSggL1xcKy9nLCBcIiBcIiApICk7XHJcbn07IiwiaW1wb3J0IG1kNSBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNSc7XHJcblxyXG4vKipcclxuICogVW5pcXVlIHJhbmRvbSBtZDVcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gU3RyaW5nKCBtZDUoIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSApICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBwYWdlLlxyXG4gKiBVc2UgcGFnZVhPZmZzZXQgYW5kIHBhZ2VZT2Zmc2V0IGlmIHRoZXkgYXJlIGRlZmluZWQsIG90aGVyd2lzZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AuIFlvdSBjYW4gb21pdCBlbCB0byB1c2UgYSBkZWZhdWx0IHZhbHVlIG9mIHdpbmRvdy5cclxuICogQHBhcmFtIGVsXHJcbiAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGVsID0gd2luZG93ICkgPT4gKCB7XHJcblx0eDogZWwucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VYT2Zmc2V0IDogZWwuc2Nyb2xsTGVmdCxcclxuXHR5OiBlbC5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVlPZmZzZXQgOiBlbC5zY3JvbGxUb3BcclxufSApOyIsIi8qKlxyXG4gKiBTbW9vdGgtc2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlLlxyXG4gKiBHZXQgZGlzdGFuY2UgZnJvbSB0b3AgdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCBvciBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcC5cclxuICogU2Nyb2xsIGJ5IGEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcC4gVXNlIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB0byBhbmltYXRlIHRoZSBzY3JvbGxpbmcuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcclxuXHRjb25zdCBjID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRpZiggYyA+IDAgKSB7XHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY3JvbGxUb1RvcCApO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKCAwLCBjIC0gYyAvIDggKTtcclxuXHR9XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAoIGNhbGxiYWNrLCB0aXRsZSA9ICdUaW1lVGFrZW4nICkgPT4ge1xyXG5cdGNvbnNvbGUudGltZSggdGl0bGUgKTtcclxuXHRjb25zdCByID0gY2FsbGJhY2soKTtcclxuXHRjb25zb2xlLnRpbWVFbmQoIHRpdGxlICk7XHJcblx0cmV0dXJuIHI7XHJcbn07IiwiaW1wb3J0IGlzX2pxdWVyeSBmcm9tICcuL2lzX2pxdWVyeSc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBHaXZlbiBTdHJpbmcgaW50byBBIGpRdWVyeSBPYmplY3QuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+IHtcclxuXHRpZiggZmFsc2UgPT09IGlzX2pxdWVyeSggJGVsZW0gKSApIHtcclxuXHRcdHJldHVybiBqUXVlcnkoICRlbGVtICk7XHJcblx0fVxyXG5cdHJldHVybiAkZWxlbTtcclxufTsiLCJpbXBvcnQgdmFsaWRhdGVKU0Z1bmMgZnJvbSAnLi92YWxpZGF0ZVNpbmdsZUpTRnVuYyc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIEVhY2ggVmFsdWUgT2YgYSBKUyBPYmplY3QgQW5kIENvbnZlcnRzIEludG8gSlMgQ2FsbGFibGUgRnVuY3Rpb24uXHJcbiAqIEBwYXJhbSAkZGF0YVxyXG4gKiBAcGFyYW0gJGFyZ3Nfa2V5XHJcbiAqIEBwYXJhbSAkY29udGVudHNfa2V5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBfLmlzT2JqZWN0KCAkZGF0YSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGF0YSApIHtcclxuXHRcdFx0aWYoICFfLmlzRW1wdHkoICRkYXRhWyAka2V5IF0gKSApIHtcclxuXHRcdFx0XHQkZGF0YVsgJGtleSBdID0gdmFsaWRhdGVKU0Z1bmMoICRkYXRhWyAka2V5IF0sICRhcmdzX2tleSwgJGNvbnRlbnRzX2tleSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkZGF0YTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGN1cnJlbnQgVVJMLlxyXG4gKiBVc2UgU3RyaW5nLm1hdGNoKCkgd2l0aCBhbiBhcHByb3ByaWF0ZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZ2V0IGFsbCBrZXktdmFsdWUgcGFpcnMsXHJcbiAqIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKSB0byBtYXAgYW5kIGNvbWJpbmUgdGhlbSBpbnRvIGEgc2luZ2xlIG9iamVjdC5cclxuICogUGFzcyBsb2NhdGlvbi5zZWFyY2ggYXMgdGhlIGFyZ3VtZW50IHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHVybC5cclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7VCB8IHt9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB1cmwgPT5cclxuXHQoIHVybC5tYXRjaCggLyhbXj89Jl0rKSg9KFteJl0qKSkvZyApIHx8IFtdICkucmVkdWNlKFxyXG5cdFx0KCBhLCB2ICkgPT4gKCAoIGFbIHYuc2xpY2UoIDAsIHYuaW5kZXhPZiggJz0nICkgKSBdID0gdi5zbGljZSggdi5pbmRleE9mKCAnPScgKSArIDEgKSApLCBhICksXHJcblx0XHR7fVxyXG5cdCk7IiwiLyoqXHJcbiAqIENvbnZlcnRzIEpTIFN0cmluZyBJbnRvIENhbGxhYmxlIEZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gJHN0cmluZ1xyXG4gKiBAcGFyYW0gJGFyZ3Nfa2V5XHJcbiAqIEBwYXJhbSAkY29udGVudHNfa2V5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRzdHJpbmcsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IF8uaXNPYmplY3QoICRzdHJpbmcgKSAmJiBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gKSB8fCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdICkgKSB7XHJcblx0XHRsZXQgJGFyZ3MgICAgID0gKCAkc3RyaW5nWyAkYXJnc19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGFyZ3Nfa2V5IF07XHJcblx0XHRsZXQgJGNvbnRlbnRzID0gKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRjb250ZW50c19rZXkgXTtcclxuXHRcdGlmKCAkYXJncyA9PT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2UgaWYoICRhcmdzICE9PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkYXJncywgJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJHN0cmluZztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRzdHJpbmc7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBTZXRzIEpTIE9iamVjdCBJbnRvIFdpbmRvdyBBcmdzLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcGFyYW0gJHZhbHVlXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSwgJHZhbHVlICkgPT4ge1xyXG5cdGlmKCBfLmlzT2JqZWN0KCAka2V5ICkgKSB7XHJcblx0XHRmb3IoIGxldCAkX2sgaW4gJGtleSApIHtcclxuXHRcdFx0d2luZG93WyAkX2sgXSA9ICRrZXlbICRfayBdO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICR2YWx1ZTtcclxuXHR9XHJcbn07IiwiY29uc3QgcGFyc2VfdXJsICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG5jb25zdCBwYXJzZV9zdHIgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcGFyc2Vfc3RyJyApO1xyXG5jb25zdCBodHRwX2J1aWxkX3F1ZXJ5ID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5JyApO1xyXG5jb25zdCBzdHJwb3MgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zJyApO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIG1vZGlmaWVkIFVSTCBxdWVyeSBzdHJpbmcuXHJcbiAqXHJcbiAqIFlvdSBjYW4gcmVidWlsZCB0aGUgVVJMIGFuZCBhcHBlbmQgcXVlcnkgdmFyaWFibGVzIHRvIHRoZSBVUkwgcXVlcnkgYnkgdXNpbmcgdGhpcyBmdW5jdGlvbi5cclxuICogVGhlcmUgYXJlIHR3byB3YXlzIHRvIHVzZSB0aGlzIGZ1bmN0aW9uOyBlaXRoZXIgYSBzaW5nbGUga2V5IGFuZCB2YWx1ZSwgb3IgYW4gYXNzb2NpYXRpdmUgYXJyYXkuXHJcbiAqXHJcbiAqIFVzaW5nIGEgc2luZ2xlIGtleSBhbmQgdmFsdWU6XHJcbiAqXHJcbiAqICAgICBhZGRfcXVlcnlfYXJnKCAna2V5JywgJ3ZhbHVlJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScgKTtcclxuICpcclxuICogVXNpbmcgYW4gYXNzb2NpYXRpdmUgYXJyYXk6XHJcbiAqXHJcbiAqICAgICBhZGRfcXVlcnlfYXJnKCBhcnJheShcclxuICogICAgICAgICAna2V5MScgPT4gJ3ZhbHVlMScsXHJcbiAqICAgICAgICAgJ2tleTInID0+ICd2YWx1ZTInLFxyXG4gKiAgICAgKSwgJ2h0dHA6Ly9leGFtcGxlLmNvbScgKTtcclxuICpcclxuICogT21pdHRpbmcgdGhlIFVSTCBmcm9tIGVpdGhlciB1c2UgcmVzdWx0cyBpbiB0aGUgY3VycmVudCBVUkwgYmVpbmcgdXNlZFxyXG4gKiAodGhlIHZhbHVlIG9mIGB3aW5kb3cubG9jYXRpb24uaHJlZmApLlxyXG4gKlxyXG4gKiBWYWx1ZXMgYXJlIGV4cGVjdGVkIHRvIGJlIGVuY29kZWQgYXBwcm9wcmlhdGVseSB3aXRoIHVybGVuY29kZSgpIG9yIHJhd3VybGVuY29kZSgpLlxyXG4gKlxyXG4gKiBTZXR0aW5nIGFueSBxdWVyeSB2YXJpYWJsZSdzIHZhbHVlIHRvIGJvb2xlYW4gZmFsc2UgcmVtb3ZlcyB0aGUga2V5IChzZWUgcmVtb3ZlX3F1ZXJ5X2FyZygpKS5cclxuICpcclxuICogSW1wb3J0YW50OiBUaGUgcmV0dXJuIHZhbHVlIG9mIGFkZF9xdWVyeV9hcmcoKSBpcyBub3QgZXNjYXBlZCBieSBkZWZhdWx0LiBPdXRwdXQgc2hvdWxkIGJlXHJcbiAqIGxhdGUtZXNjYXBlZCB3aXRoIGVzY191cmwoKSBvciBzaW1pbGFyIHRvIGhlbHAgcHJldmVudCB2dWxuZXJhYmlsaXR5IHRvIGNyb3NzLXNpdGUgc2NyaXB0aW5nXHJcbiAqIChYU1MpIGF0dGFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSBrZXlcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZF9xdWVyeV9hcmcoIGtleSA9IG51bGwsIHZhbHVlID0gbnVsbCwgdXJsID0gbnVsbCApIHtcclxuXHRpZiggdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgbnVsbCA9PT0gdmFsdWUgKSB7XHJcblx0XHR1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9IGVsc2UgaWYoIHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIG51bGwgIT09IHZhbHVlICkge1xyXG5cdFx0dXJsICAgPSB2YWx1ZTtcclxuXHRcdHZhbHVlID0gbnVsbDtcclxuXHR9IGVsc2UgaWYoIG51bGwgPT09IHVybCApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHNlID09PSB1cmwgfHwgJycgPT09IHVybCB8fCB1bmRlZmluZWQgPT09IHVybCApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHJcblx0bGV0ICRwYXJzZWQgICA9IHBhcnNlX3VybCggdXJsICksXHJcblx0XHQkcXVlcnkgICAgPSB7fSxcclxuXHRcdCRmcmFnbWVudCA9ICggJHBhcnNlZC5mcmFnbWVudCApID8gJyMnICsgJHBhcnNlZC5mcmFnbWVudCA6ICcnO1xyXG5cclxuXHRpZiggdHlwZW9mICRwYXJzZWQucXVlcnkgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0cGFyc2Vfc3RyKCAkcGFyc2VkLnF1ZXJ5LCAkcXVlcnkgKTtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyApIHtcclxuXHRcdGZvciggbGV0IGsgaW4ga2V5ICkge1xyXG5cdFx0XHRpZigga2V5WyBrIF0gKSB7XHJcblx0XHRcdFx0JHF1ZXJ5WyBrIF0gPSBrZXlbIGsgXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHQkcXVlcnlbIGtleSBdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRsZXQgc3BsaXRfdXJsID0gbnVsbCxcclxuXHRcdGJhc2VfdXJsICA9IHVybDtcclxuXHRpZiggZmFsc2UgIT09IHN0cnBvcyggdXJsLCAnPycgKSApIHtcclxuXHRcdHNwbGl0X3VybCA9IHVybC5zcGxpdCggJz8nICk7XHJcblx0XHRiYXNlX3VybCAgPSBzcGxpdF91cmxbIDAgXSB8fCB1cmw7XHJcblx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gc3RycG9zKCB1cmwsICcjJyApICkge1xyXG5cdFx0c3BsaXRfdXJsID0gdXJsLnNwbGl0KCAnIycgKTtcclxuXHRcdGJhc2VfdXJsICA9IHNwbGl0X3VybFsgMCBdIHx8IHVybDtcclxuXHR9XHJcblxyXG5cdGZvciggbGV0IGsgaW4gJHF1ZXJ5ICkge1xyXG5cdFx0aWYoIGZhbHNlID09PSAkcXVlcnlbIGsgXSApIHtcclxuXHRcdFx0ZGVsZXRlICRxdWVyeVsgayBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JHF1ZXJ5ID0gaHR0cF9idWlsZF9xdWVyeSggJHF1ZXJ5LCBudWxsLCAnJicgKTtcclxuXHQkcXVlcnkgPSAoICRxdWVyeSAhPT0gJycgKSA/ICc/JyArICRxdWVyeSA6ICRxdWVyeTtcclxuXHRyZXR1cm4gYmFzZV91cmwgKyAkcXVlcnkgKyAkZnJhZ21lbnQ7XHJcbn0iLCJpbXBvcnQgYWRkX3F1ZXJ5X2FyZyBmcm9tICcuL2FkZF9xdWVyeV9hcmcnO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYW4gaXRlbSBvciBpdGVtcyBmcm9tIGEgcXVlcnkgc3RyaW5nLlxyXG4gKiBAcGFyYW0ga2V5XHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVfcXVlcnlfYXJnKCBrZXkgPSBudWxsLCB1cmwgPSBudWxsICkge1xyXG5cdGlmKCB0eXBlb2Yga2V5ICE9PSAnb2JqZWN0JyApIHtcclxuXHRcdGtleSA9IFsga2V5IF07XHJcblx0fVxyXG5cclxuXHRmb3IoIGxldCBpIGluIGtleSApIHtcclxuXHRcdGlmKCBrZXlbIGkgXSApIHtcclxuXHRcdFx0dXJsID0gYWRkX3F1ZXJ5X2FyZygga2V5WyBpIF0sIGZhbHNlLCB1cmwgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHVybDtcclxufVxyXG4iLCJpbXBvcnQgdW50cmFpbGluZ3NsYXNoaXQgZnJvbSAnLi91bnRyYWlsaW5nc2xhc2hpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiggJHN0cmluZyApIHtcclxuXHRyZXR1cm4gdW50cmFpbGluZ3NsYXNoaXQoICRzdHJpbmcgKSArICcvXFxcXCc7XHJcbn0iLCJpbXBvcnQgcnRyaW0gZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9ydHJpbSc7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0cmFpbGluZyBmb3J3YXJkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGlmIHRoZXkgZXhpc3QuXHJcbiAqXHJcbiAqIFRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGlzIGZvciBwYXRocyBhbmQgdGh1cyBzaG91bGQgYmUgdXNlZCBmb3IgcGF0aHMuIEl0IGlzXHJcbiAqIG5vdCByZXN0cmljdGVkIHRvIHBhdGhzIGFuZCBvZmZlcnMgbm8gc3BlY2lmaWMgcGF0aCBzdXBwb3J0LlxyXG4gKiBAcGFyYW0gJHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCAkc3RyaW5nICkge1xyXG5cdHJldHVybiBydHJpbSggJHN0cmluZywgJy9cXFxcJyApO1xyXG59IiwiZXhwb3J0IGNvbnN0IGFkZF9xdWVyeV9hcmcgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9hZGRfcXVlcnlfYXJnJykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVfcXVlcnlfYXJnID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZycpLmRlZmF1bHQ7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhaWxpbmdzbGFzaGl0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvdHJhaWxpbmdzbGFzaGl0JykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCB1bnRyYWlsaW5nc2xhc2hpdCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3VudHJhaWxpbmdzbGFzaGl0JykuZGVmYXVsdDtcclxuXHJcblxyXG4vKipcclxuICogQXBwZW5kcyBGdW5jdGlvbiBHbG9iYWxseS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3cgKSA9PiB7XHJcblx0d2luZG93LmFkZF9xdWVyeV9hcmcgICAgID0gYWRkX3F1ZXJ5X2FyZztcclxuXHR3aW5kb3cucmVtb3ZlX3F1ZXJ5X2FyZyAgPSByZW1vdmVfcXVlcnlfYXJnO1xyXG5cdHdpbmRvdy51bnRyYWlsaW5nc2xhc2hpdCA9IHVudHJhaWxpbmdzbGFzaGl0O1xyXG5cdHdpbmRvdy50cmFpbGluZ3NsYXNoaXQgICA9IHRyYWlsaW5nc2xhc2hpdDtcclxufSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IHtcblx0dG9fanF1ZXJ5LFxuXHRjYWxsX3VzZXJfZnVuYyxcblx0cGFyc2Vfc3RyLFxuXHRpc191cmwsXG5cdHVybF9wYXJhbXMsXG5cdGlzX2NhbGxhYmxlLFxuXHRjYWxsX3VzZXJfZnVuY19hcnJheSxcblx0ZnVuY3Rpb25fZXhpc3RzLFxuXHRjcmVhdGVfZnVuY3Rpb24sXG59IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgeyByZW1vdmVfcXVlcnlfYXJnIH0gZnJvbSAnd29yZHByZXNzLWpzLXBvcnRzJztcblxuLyoqXG4gKiBXUE9uaW9uIEN1c3RvbSBBamF4IEhhbmRsZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBXUE9uaW9uX0FqYXhlciB7XG5cdC8qKlxuXHQgKiBAcGFyYW0gJGFqYXhfYXJnc1xuXHQgKiBAcGFyYW0gJGFqYXhfY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGFqYXhfYXJncywgJGFqYXhfY29uZmlnICkge1xuXHRcdHRoaXMuZGVmYXVsdHMgICAgICAgID0ge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHR1cmw6ICggdHlwZW9mIHdpbmRvdy5hamF4dXJsICE9PSAndW5kZWZpbmVkJyApID8gd2luZG93LmFqYXh1cmwgOiBmYWxzZSxcblx0XHRcdGRhdGE6IHt9LFxuXHRcdFx0c3VjY2VzczogZmFsc2UsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRhbHdheXM6IGZhbHNlLFxuXHRcdFx0YWN0aW9uOiBmYWxzZSxcblx0XHR9O1xuXHRcdHRoaXMuZGVmYXVsdF9jb25maWdzID0ge1xuXHRcdFx0cmVzcG9uc2VfZWxlbWVudDogZmFsc2UsXG5cdFx0XHRidXR0b246IGZhbHNlLFxuXHRcdFx0ZWxlbWVudDogZmFsc2UsXG5cdFx0XHRzcGlubmVyOiAnPHNwYW4gY2xhc3M9XCJzcGlubmVyXCI+PC9zcGFuPicsXG5cdFx0fTtcblx0XHR0aGlzLmluc3RhbmNlICAgICAgICA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dQT25pb25fQWpheGVyLmRlZmF1bHRzfVxuXHRcdCAqL1xuXHRcdHRoaXMuYWpheF9hcmdzID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggdGhpcy5kZWZhdWx0cywgJGFqYXhfYXJncyApO1xuXHRcdHRoaXMuYWpheF9jb25maWcgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB0aGlzLmRlZmF1bHRfY29uZmlncywgJGFqYXhfY29uZmlnICk7XG5cdFx0dGhpcy5hamF4KCk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBBIENhbGxhYmxlIENhbGxiYWNrIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBjb2RlIGRhdGEuXG5cdCAqXG5cdCAqIEBwYXJhbSAkY29kZVxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICovXG5cdGNyZWF0ZV9mdW5jdGlvbiggJGNvZGUgPSBmYWxzZSwgJGFyZ3MgPSAnJyApIHtcblx0XHRyZXR1cm4gdGhpcy5zaW5nbGVfY2FsbGJhY2soIGNyZWF0ZV9mdW5jdGlvbiggJGFyZ3MsICRjb2RlICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBWYWxpZGF0ZXMgJiBUcmlnZ2VycyBBIFNpbmdsZSBDYWxsYmFjayBGdW5jdGlvbi5cblx0ICogQHBhcmFtICRjYWxsYmFja1xuXHQgKi9cblx0c2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2sgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNGdW5jdGlvbiggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRjYWxsX3VzZXJfZnVuYyggJGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkY2FsbGJhY2sgKSAmJiBmYWxzZSAhPT0gZnVuY3Rpb25fZXhpc3RzKCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdGNhbGxfdXNlcl9mdW5jKCAkY2FsbGJhY2sgKTtcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFjayApICkge1xuXHRcdFx0dGhpcy5jcmVhdGVfZnVuY3Rpb24oICRjYWxsYmFjayApO1xuXHRcdH0gZWxzZSBpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRjYWxsYmFjayApIHtcblx0XHRcdFx0aWYoICRjYWxsYmFjay5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tbICRrZXkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgQW4gQXJyYXkgb2YgQ2FsbGFibGUgQWpheCBGdW5jdGlvbnMuXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0aGFuZGxlX2NhbGxiYWNrcyggZGF0YSApIHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggZGF0YSApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCBkYXRhLmNhbGxiYWNrICkgKSB7XG5cdFx0XHRcdGxldCAkY2FsbGJhY2tzID0gZGF0YS5jYWxsYmFjaztcblxuXHRcdFx0XHRpZiggZmFsc2UgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFja3MgKSApIHtcblx0XHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrcyApO1xuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkY2FsbGJhY2tzICkgKSB7XG5cdFx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkY2FsbGJhY2tzICkge1xuXHRcdFx0XHRcdFx0aWYoICRjYWxsYmFja3MuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zaW5nbGVfY2FsbGJhY2soICRjYWxsYmFja3NbICRrZXkgXSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgZGF0YS5jYWxsYmFjaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcmVkIE9uIEFqYXggb25TdWNjZXNzXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRvblN1Y2Nlc3MoIGRhdGEgKSB7XG5cdFx0dGhpcy5oYW5kbGVfY2FsbGJhY2tzKCBkYXRhICk7XG5cblx0XHRpZiggZmFsc2UgIT09IHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRpZiggaXNfY2FsbGFibGUoIHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MgKSApIHtcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MsIFsgZGF0YSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJlZCBPbiBBamF4IG9uRXJyb3Jcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdG9uRXJyb3IoIGRhdGEgKSB7XG5cdFx0dGhpcy5oYW5kbGVfY2FsbGJhY2tzKCBkYXRhICk7XG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmFqYXhfYXJncy5lcnJvciApIHtcblx0XHRcdGlmKCBpc19jYWxsYWJsZSggdGhpcy5hamF4X2FyZ3MuZXJyb3IgKSApIHtcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLmVycm9yLCBbIGRhdGEgXSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyZWQgT24gQWpheCBvbkFsd2F5c1xuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0b25BbHdheXMoIGRhdGEgKSB7XG5cdFx0dGhpcy5idXR0b25fdW5sb2NrKCk7XG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmFqYXhfYXJncy5hbHdheXMgKSB7XG5cdFx0XHRpZiggaXNfY2FsbGFibGUoIHRoaXMuYWpheF9hcmdzLmFsd2F5cyApICkge1xuXHRcdFx0XHRjYWxsX3VzZXJfZnVuY19hcnJheSggdGhpcy5hamF4X2FyZ3MuYWx3YXlzLCBbIGRhdGEgXSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBBbiBBamF4IFJlcXVlc3QuIEJhc2VkIE9uIFRoZSBDb25maWcuXG5cdCAqL1xuXHRhamF4KCkge1xuXHRcdHRoaXMuYnV0dG9uX2xvY2soKTtcblx0XHRsZXQgJGNvbmZpZyA9IHdpbmRvdy53cG9uaW9uLl8uY2xvbmUoIHRoaXMuYWpheF9hcmdzICk7XG5cdFx0aWYoIGZhbHNlICE9PSAkY29uZmlnLnVybCApIHtcblx0XHRcdGlmKCBmYWxzZSAhPT0gaXNfdXJsKCAkY29uZmlnLnVybCApICkge1xuXHRcdFx0XHRsZXQgJHVybF9wYXJhbXMgPSB1cmxfcGFyYW1zKCAkY29uZmlnLnVybCApO1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICR1cmxfcGFyYW1zICkge1xuXHRcdFx0XHRcdGlmKCAkdXJsX3BhcmFtcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdFx0JGNvbmZpZy51cmwgPSByZW1vdmVfcXVlcnlfYXJnKCAka2V5LCAkY29uZmlnLnVybCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQkY29uZmlnLmRhdGEgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkY29uZmlnLmRhdGEsICR1cmxfcGFyYW1zICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJHVybF9wYXJhbXMgPSB7fTtcblx0XHRcdFx0cGFyc2Vfc3RyKCAkY29uZmlnLnVybCwgJHVybF9wYXJhbXMgKTtcblx0XHRcdFx0JGNvbmZpZy51cmwgID0gd2luZG93LmFqYXh1cmw7XG5cdFx0XHRcdCRjb25maWcuZGF0YSA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICRjb25maWcuZGF0YSwgJHVybF9wYXJhbXMgKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGNvbmZpZy51cmwgPSB3aW5kb3cuYWpheHVybDtcblx0XHR9XG5cblx0XHRpZiggZmFsc2UgIT09ICRjb25maWcuYWN0aW9uICkge1xuXHRcdFx0JGNvbmZpZy5kYXRhLmFjdGlvbiA9ICRjb25maWcuYWN0aW9uO1xuXHRcdFx0ZGVsZXRlICRjb25maWcuYWN0aW9uO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5zdWNjZXNzICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLnN1Y2Nlc3M7XG5cdFx0fVxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5hbHdheXMgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0ZGVsZXRlICRjb25maWcuYWx3YXlzO1xuXHRcdH1cblx0XHRpZiggdHlwZW9mICRjb25maWcuZXJyb3IgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0ZGVsZXRlICRjb25maWcuZXJyb3I7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnN0YW5jZSA9IHdpbmRvdy53cC5hamF4LnNlbmQoICRjb25maWcgKTtcblx0XHR0aGlzLmluc3RhbmNlLmRvbmUoICggZGF0YSApID0+IHRoaXMub25TdWNjZXNzKCBkYXRhICkgKTtcblx0XHR0aGlzLmluc3RhbmNlLmZhaWwoICggZGF0YSApID0+IHRoaXMub25FcnJvciggZGF0YSApICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5hbHdheXMoICggZGF0YSApID0+IHRoaXMub25BbHdheXMoIGRhdGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBBIENvbmZpZyBEYXRhIEV4c2l0cyBCYXNlZCBvbiBUaGUgR2l2ZW4gS2V5LlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc19jb25maWcoICRrZXkgPSAnJyApIHtcblx0XHRyZXR1cm4gKCB0eXBlb2YgdGhpcy5hamF4X2NvbmZpZ1sgJGtleSBdICE9PSAndW5kZWZpbmVkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgVGhlIENvbmZpZyBEYXRhIEJhc2VkIG9uIFRoZSBDb25maWcgS2V5LlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRjb25maWcoICRrZXkgPSAnJywgJGRlZmF1bHQgPSBmYWxzZSApIHtcblx0XHRyZXR1cm4gKCB0aGlzLmhhc19jb25maWcoICRrZXkgKSApID8gdGhpcy5hamF4X2NvbmZpZ1sgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogTG9ja3MgQSBHaXZlbiBCdXR0b24gRWxlbWVudC5cblx0ICovXG5cdGJ1dHRvbl9sb2NrKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcoICdidXR0b24nICkgKSB7XG5cdFx0XHRsZXQgJGJ1dHRvbiA9IHRvX2pxdWVyeSggdGhpcy5jb25maWcoICdidXR0b24nICkgKTtcblx0XHRcdGlmKCAkYnV0dG9uICkge1xuXHRcdFx0XHQkYnV0dG9uLndwb19idXR0b24oICdwcm9jZXNzaW5nJyApO1xuXHRcdFx0XHQkYnV0dG9uLmF0dHIoICdkaXNhYmxlZCcsICdkaXNhYmxlZCcgKTtcblxuXHRcdFx0XHRpZiggdGhpcy5jb25maWcoICdzcGlubmVyJyApICkge1xuXHRcdFx0XHRcdGxldCAkc3Bpbm5lciA9IGpRdWVyeSggdGhpcy5jb25maWcoICdzcGlubmVyJyApICk7XG5cdFx0XHRcdFx0JHNwaW5uZXIuYWRkQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0XHRcdFx0JGJ1dHRvbi5wYXJlbnQoKS5hcHBlbmQoICRzcGlubmVyICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVW5sb2NrcyBBIEdpdmVuIEJ1dHRvbiBFbGVtZW50LlxuXHQgKi9cblx0YnV0dG9uX3VubG9jaygpIHtcblx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICkge1xuXHRcdFx0bGV0ICRidXR0b24gPSB0b19qcXVlcnkoIHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICk7XG5cdFx0XHRpZiggJGJ1dHRvbiApIHtcblx0XHRcdFx0JGJ1dHRvbi53cG9fYnV0dG9uKCAnY29tcGxldGUnICk7XG5cdFx0XHRcdCRidXR0b24ucmVtb3ZlQXR0ciggJ2Rpc2FibGVkJyApO1xuXHRcdFx0XHRsZXQgJHNwaW5uZXIgPSAkYnV0dG9uLm5leHQoKTtcblx0XHRcdFx0aWYoICRzcGlubmVyLmhhc0NsYXNzKCAnc3Bpbm5lcicgKSApIHtcblx0XHRcdFx0XHQkc3Bpbm5lci5yZW1vdmUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkYnV0dG9uLnBhcmVudCgpLmZpbmQoICcuc3Bpbm5lcicgKS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggJCwgZG9jdW1lbnQgKSA9PiB7XG5cdCQoICgpID0+IHtcblx0XHRsZXQgJGNsYXNzID0gJ1tkYXRhLXdwb25pb24taW5saW5lLWFqYXhdLCAud3Bvbmlvbi1hamF4LCAud3Bvbmlvbi1hamF4LWdldCwgLndwb25pb24tYWpheC1wb3N0LCAud3Bvbmlvbi1pbmxpbmUtYWpheCwgLndwb25pb24taW5saW5lLWFqYXgtZ2V0LCAud3Bvbmlvbi1pbmxpbmUtYWpheC1wb3N0Jztcblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAkY2xhc3MsICggZSApID0+IHtcblxuXHRcdFx0bGV0ICRlbGVtICAgICAgICAgICAgPSAkKCBlLmN1cnJlbnRUYXJnZXQgKSxcblx0XHRcdFx0JF9kYXRhICAgICAgICAgICA9ICRlbGVtLmRhdGEoKSxcblx0XHRcdFx0JF9jbGFzc19pbnN0YW5jZSA9IG51bGwsXG5cdFx0XHRcdCRhcmdzICAgICAgICAgICAgPSB7XG5cdFx0XHRcdFx0dXJsOiBmYWxzZSxcblx0XHRcdFx0fTtcblxuXHRcdFx0aWYoICRlbGVtLmF0dHIoICdkYXRhLXdwb25pb24taW5saW5lLWFqYXgnICkgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRsZXQgJGZpZDEgID0gJGVsZW0uYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbmxpbmUtYWpheCcgKTtcblx0XHRcdFx0bGV0ICRmaWQyICA9ICRlbGVtLmF0dHIoICdpZCcgKTtcblx0XHRcdFx0bGV0ICRqc19pZCA9ICR3cG9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0XHRcdGxldCAkYXJncyAgPSB7fTtcblx0XHRcdFx0aWYoICRqc19pZCApIHtcblx0XHRcdFx0XHRsZXQgJF9hcmdzID0gJHdwb25pb24uZmllbGRBcmdzKCAkanNfaWQsIGZhbHNlICk7XG5cdFx0XHRcdFx0aWYoICRfYXJncy5oYXNPd25Qcm9wZXJ0eSggJ2lubGluZV9hamF4JyApICYmIGZhbHNlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkX2FyZ3MuaW5saW5lX2FqYXggKSApIHtcblx0XHRcdFx0XHRcdCRhcmdzID0gJF9hcmdzLmlubGluZV9hamF4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMSwgZmFsc2UgKSApIHtcblx0XHRcdFx0XHRsZXQgJF9hcmdzID0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMSwgZmFsc2UgKTtcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xuXHRcdFx0XHRcdFx0JGFyZ3MgPSAkX2FyZ3MuaW5saW5lX2FqYXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRmaWQyLCBmYWxzZSApICkge1xuXHRcdFx0XHRcdGxldCAkX2FyZ3MgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRmaWQyLCBmYWxzZSApO1xuXHRcdFx0XHRcdGlmKCAkX2FyZ3MuaGFzT3duUHJvcGVydHkoICdpbmxpbmVfYWpheCcgKSAmJiBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJF9hcmdzLmlubGluZV9hamF4ICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tYWpheC1nZXQnICkgfHwgJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWlubGluZS1hamF4LWdldCcgKSApIHtcblx0XHRcdFx0XHQkYXJncy5tZXRob2QgPSAnR0VUJztcblx0XHRcdFx0fSBlbHNlIGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tYWpheC1wb3N0JyApIHx8ICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1pbmxpbmUtYWpheC1wb3N0JyApICkge1xuXHRcdFx0XHRcdCRhcmdzLm1ldGhvZCA9ICdQT1NUJztcblx0XHRcdFx0fSBlbHNlIGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tYWpheCcgKSB8fCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24taW5saW5lLWFqYXgnICkgJiYgdHlwZW9mICRfZGF0YS5tZXRob2QgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRhcmdzLm1ldGhvZCA9ICRfZGF0YS5tZXRob2Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdHlwZW9mICRfZGF0YS51cmwgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRhcmdzLnVybCA9ICRfZGF0YS51cmw7XG5cdFx0XHRcdH0gZWxzZSBpZiggdHlwZW9mICRfZGF0YS5ocmVmICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy51cmwgPSAkX2RhdGEuaHJlZjtcblx0XHRcdFx0fSBlbHNlIGlmKCAkZWxlbS5hdHRyKCAnaHJlZicgKSApIHtcblx0XHRcdFx0XHQkYXJncy51cmwgPSAkZWxlbS5hdHRyKCAnaHJlZicgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB0eXBlb2YgJF9kYXRhWyAnYWpheC1kYXRhJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy5kYXRhID0gJF9kYXRhWyAnYWpheC1kYXRhJyBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHR5cGVvZiAkX2RhdGEuYWN0aW9uICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy5hY3Rpb24gPSAkX2RhdGEuYWN0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCRfY2xhc3NfaW5zdGFuY2UgPSBuZXcgV1BPbmlvbl9BamF4ZXIoICRhcmdzLCB7XG5cdFx0XHRcdGJ1dHRvbjogJGVsZW0sXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIGpRdWVyeSwgZG9jdW1lbnQgKTtcbiIsIi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmltcG9ydCB7XG5cdGNhbGxfdXNlcl9mdW5jLFxuXHRpc19qcXVlcnksXG5cdGlzX3dpbmRvd19hcmcsXG5cdG1kNSxcblx0bWljcm90aW1lLFxuXHRyYW5kX21kNSxcblx0dG9fanF1ZXJ5LFxuXHR0b19qc19mdW5jLFxufSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuLyoqXG4gKiBCYXNlIFdQb25pb24gSlMgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQT25pb24ge1xuXHQvKipcblx0ICogVmFsaWRhdGVzICYgQ29udmVydHMgaW50byBDYWxsYWJsZSBKUyBGdW5jdGlvbnMuXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKiBAcmV0dXJucyB7KnwkZGF0YX1cblx0ICovXG5cdHN0YXRpYyBqc19mdW5jKCAkZGF0YSApIHtcblx0XHRyZXR1cm4gdG9fanNfZnVuYyggJGRhdGEsICd3cG9uaW9uX2pzX2FyZ3MnLCAnd3Bvbmlvbl9qc19jb250ZW50cycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZXMgQSBSYW5kb20gSUQuXG5cdCAqL1xuXHRzdGF0aWMgcmFuZF9pZCgpIHtcblx0XHRyZXR1cm4gbWQ1KCAnd3Bvbmlvbl9yYW5kXycgKyBtaWNyb3RpbWUoKSArIHJhbmRfbWQ1KCkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgSlNPTi5cblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHN0YXRpYyB2YWxpZF9qc29uKCBvYmogKSB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2UoIG9iaiApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkSUQoICRlbGVtICkge1xuXHRcdHJldHVybiB0b19qcXVlcnkoICRlbGVtICkuYXR0ciggJ2RhdGEtd3Bvbmlvbi1qc2lkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgRmllbGQgSFRNTCBPYmplY3QgVXNpbmcgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJHdoZXJlX3RvX2ZpbmRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c3RhdGljIElEdG9FbGVtZW50KCAkZWxlbSwgJHdoZXJlX3RvX2ZpbmQgPSBmYWxzZSApIHtcblx0XHRsZXQgJGlkID0gV1BPbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdoZXJlX3RvX2ZpbmQgJiYgaXNfanF1ZXJ5KCAkd2hlcmVfdG9fZmluZCApICkge1xuXHRcdFx0cmV0dXJuICR3aGVyZV90b19maW5kLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIicgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGpRdWVyeSggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiXScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gdmFsdWUgaXMgYW4galF1ZXJ5IGluc3RhbmNlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNGaWVsZCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaXNfanF1ZXJ5KCAkZWxlbSApICkgPyAoIHRoaXMuZmllbGRJRCggJGVsZW0gKSApIDogZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBXaW5kb3cgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIHdpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0cmV0dXJuICggaXNfd2luZG93X2FyZyggJHZhcl9pZCApICkgPyB3aW5kb3dbICR2YXJfaWQgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyAmIFJldHVybnMgRmllbGQgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkQXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHQkdmFyX2lkID0gKCB0aGlzLmlzRmllbGQoICR2YXJfaWQgKSApID8gdGhpcy5maWVsZElEKCAkdmFyX2lkICkgOiAkdmFyX2lkO1xuXHRcdHJldHVybiAoICR2YXJfaWQgKSA/IHdpbmRvdy53cG9uaW9uLl8uY2xvbmUoIHRoaXMud2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgKSApIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hjZWtzIGFuZCByZXR1cm5zIGdsb2JhbCB0cmFuc2xhdGlvbiBzdHJpbmcuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljIHR4dCggJGtleSwgJGRlZmF1bHQgPSAnc3RyaW5nX2RlZmF1bHRfbm90X2ZvdW5kJyApIHtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggV1BPbmlvbi50ZXh0WyAka2V5IF0gKSApID8gV1BPbmlvbi50ZXh0WyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIExvYWRpbmcgU2NyZWVuLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICRpc19zaG93XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGxvYWRpbmdfc2NyZWVuKCAkZWxlbSwgJGlzX3Nob3cgPSB0cnVlICkge1xuXHRcdCRlbGVtID0gdG9fanF1ZXJ5KCAkZWxlbSApLmZpbmQoICcucGFnZS1sb2FkZXInICk7XG5cdFx0aWYoIHRydWUgPT09ICRpc19zaG93ICkge1xuXHRcdFx0cmV0dXJuICRlbGVtLmZhZGVJbiggJ3Nsb3cnICk7XG5cdFx0fVxuXHRcdHJldHVybiAkZWxlbS5mYWRlT3V0KCAnc2xvdycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEdsb2JhbCBEZWJ1ZyBWaWV3IFBPUFVQLlxuXHQgKi9cblx0c3RhdGljIGdsb2JhbF9kZWJ1ZygpIHtcblx0XHRsZXQgJGhhbmRsZSA9IGpRdWVyeSggJ2Eud3Bvbmlvbi1nbG9iYWwtZGVidWctaGFuZGxlJyApLFxuXHRcdFx0JGpzb24gICA9IHt9O1xuXHRcdGlmKCBXUE9uaW9uLmRlYnVnX2luZm8gPT09IG51bGwgJiYgJGhhbmRsZS5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRkZWZpbmVkX3ZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKTtcblx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkZGVmaW5lZF92YXJzICkgKSB7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGRlZmluZWRfdmFycyApIHtcblx0XHRcdFx0XHRpZiggJGRlZmluZWRfdmFycy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRcdCRqc29uWyAkZGVmaW5lZF92YXJzWyAka2V5IF0gXSA9IFdQT25pb24ud2luZG93QXJncyggJGRlZmluZWRfdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFdQT25pb24uZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCRoYW5kbGUub24oICdjbGljaycsICggKCBlICkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3dhbCgge1xuXHRcdFx0XHR0aXRsZTogV1BPbmlvbi50eHQoICdnbG9iYWxfanNvbl9vdXRwdXQnLCAnR2xvYmFsIFdQT25pb24gRGVidWcgRGF0YScgKSxcblx0XHRcdFx0aHRtbDogalF1ZXJ5KCAnI3dwb25pb25kZWJ1Z2luZm9wb3B1cCA+IGRpdicgKSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBXUE9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdHZXQgSlNPTiBPdXRwdXQnICksXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICgpID0+IHN3YWwuZW5hYmxlTG9hZGluZygpLFxuXHRcdFx0XHRvbk9wZW46ICgpID0+IHtcblx0XHRcdFx0XHRqUXVlcnkoICcjc3dhbDItY29udGVudCAjd3Bvbmlvbi1nbG9iYWwtZGVidWctY29udGVudCcgKS5qc29uVmlldyggV1BPbmlvbi5kZWJ1Z19pbmZvICk7XG5cdFx0XHRcdFx0c3dhbC5kaXNhYmxlTG9hZGluZygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBzd2FsKCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoIFdQT25pb24uZGVidWdfaW5mbyApICsgJzwvdGV4dGFyZWE+Jyxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgYW5kIFJldHJpdmVzIFZhbHVlcyBmcm9tICR3cG9uaW9uLnNldHRpbmdzXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBvcHRpb24oICRrZXksICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gV1BPbmlvbi5zZXR0aW5nc19hcmdzO1xuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkge1xuXHRcdFx0cmV0dXJuICRhcmdzWyAka2V5IF07XG5cdFx0fVxuXHRcdHJldHVybiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgV1BPbmlvbiBEZWJ1ZyBpcyBlbmFibGVkLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc19kZWJ1ZygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdkZWJ1ZycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXIgQWxsIEZpZWxkIEpTIENvZGVzLlxuXHQgKi9cblx0c3RhdGljIGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBXUE9uaW9uLmlzX2RlYnVnKCkgJiYgd2luZG93Lndwb25pb24uXy5pc051bGwoIFdQT25pb24uZmllbGRfZGVidWdfaW5mbyApICkge1xuXHRcdFx0bGV0ICR2YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICksXG5cdFx0XHRcdCRqc29uID0ge30sXG5cdFx0XHRcdCR1dHh0ID0gV1BPbmlvbi50eHQoICd1bm1vZGlmaWVkX2RlYnVnJyApLFxuXHRcdFx0XHQkbXR4dCA9IFdQT25pb24udHh0KCAnbW9kaWZpZWRfZGVidWcnICk7XG5cblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHZhcnMgKSB7XG5cdFx0XHRcdGlmKCAkdmFycy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRkYXRhICAgICAgICAgICAgICAgICAgICAgICA9IFdQT25pb24ud2luZG93QXJncyggJHZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF0gICAgICAgICAgPSB7fTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkdXR4dCBdID0gJGRhdGEuZGVidWdfaW5mbyB8fCAkZGF0YTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkbXR4dCBdID0ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFdQT25pb24uZmllbGRfZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDdXN0b20gQWpheCBXcmFwcGVyIEZvciBqUXVlcnkuQWpheCgpXG5cdCAqIEBwYXJhbSAkYWN0aW9uXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKiBAcGFyYW0gJG9uU3VjY2Vzc1xuXHQgKiBAcGFyYW0gJG9uRXJyb3Jcblx0ICogQHBhcmFtICRvbkFsd2F5c1xuXHQgKi9cblx0c3RhdGljIGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSwgJG9uU3VjY2VzcyA9IGZhbHNlLCAkb25FcnJvciA9IGZhbHNlLCAkb25BbHdheXMgPSBmYWxzZSApIHtcblx0XHRsZXQgJGRlZmF1bHRzID0ge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHR1cmw6IFdQT25pb24ub3B0aW9uKCAnYWpheF91cmwnICksXG5cdFx0XHRvblN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0b25BbHdheXM6IGZhbHNlLFxuXHRcdFx0b25FcnJvcjogZmFsc2UsXG5cdFx0fTtcblxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkYWN0aW9uICkgKSB7XG5cdFx0XHQkZGF0YSA9ICRhY3Rpb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRkZWZhdWx0cy51cmwgKz0gJyYnICsgV1BPbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICkgKyAnPScgKyAkYWN0aW9uO1xuXHRcdH1cblxuXHRcdCRkZWZhdWx0cyAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkZGVmYXVsdHMsICRkYXRhICk7XG5cdFx0JG9uU3VjY2VzcyA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG9uU3VjY2VzcyApIHx8IGZhbHNlID09PSAkb25TdWNjZXNzICkgPyAkZGVmYXVsdHMub25TdWNjZXNzIDogJG9uU3VjY2Vzcztcblx0XHQkb25BbHdheXMgID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkb25FcnJvciApIHx8IGZhbHNlID09PSAkb25FcnJvciApID8gJGRlZmF1bHRzLm9uQWx3YXlzIDogJG9uQWx3YXlzO1xuXHRcdCRvbkVycm9yICAgPSAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRvbkFsd2F5cyApIHx8IGZhbHNlID09PSAkb25BbHdheXMgKSA/ICRkZWZhdWx0cy5vbkVycm9yIDogJG9uRXJyb3I7XG5cdFx0bGV0ICRhamF4ICA9IGpRdWVyeS5hamF4KCAkZGVmYXVsdHMgKTtcblxuXG5cdFx0aWYoICRvblN1Y2Nlc3MgKSB7XG5cdFx0XHQkYWpheC5kb25lKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25TdWNjZXNzLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25FcnJvciApIHtcblx0XHRcdCRhamF4LmZhaWwoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkVycm9yLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25BbHdheXMgKSB7XG5cdFx0XHQkYWpheC5hbHdheXMoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkFsd2F5cywgcmVzICkgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRhamF4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgV1BPbmlvbiBUZW1wbGF0ZSBmb3IgdW5kZXJzY29yZS5cblx0ICogQHBhcmFtICRpZFxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0pOiAqfVxuXHQgKi9cblx0c3RhdGljIHRlbXBsYXRlKCAkaWQgKSB7XG5cdFx0bGV0IGNvbXBpbGVkLFxuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZXZhbHVhdGU6IC88IyhbXFxzXFxTXSs/KSM+L2csXG5cdFx0XHRcdGludGVycG9sYXRlOiAvXFx7XFx7XFx7KFtcXHNcXFNdKz8pXFx9XFx9XFx9L2csXG5cdFx0XHRcdGVzY2FwZTogL1xce1xceyhbXlxcfV0rPylcXH1cXH0oPyFcXH0pL2csXG5cdFx0XHRcdHZhcmlhYmxlOiAnZGF0YSdcblx0XHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0XHRjb21waWxlZCA9IGNvbXBpbGVkIHx8IHdpbmRvdy53cG9uaW9uLl8udGVtcGxhdGUoICRpZCwgb3B0aW9ucyApO1xuXHRcdFx0cmV0dXJuIGNvbXBpbGVkKCBkYXRhICk7XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFdQb25pb24gU2V0dGluZ3MgLyBNZXRhYm94IFN1Ym1lbnUgSW5kaWNhdG9yLlxuXHQgKiBAcGFyYW0gJGVsZW1zXG5cdCAqL1xuXHRzdGF0aWMgc3VibWVudV9pbmRpY2F0b3IoICRlbGVtcyApIHtcblx0XHQkZWxlbXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCAkdG9nZ2xlICAgPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2RhdGEtdG9nZ2xlLWNsYXNzJyApO1xuXHRcdFx0XHRsZXQgJGV4X2NsYXNzID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdjbGFzcycgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdjbGFzcycsICR0b2dnbGUgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdkYXRhLXRvZ2dsZS1jbGFzcycsICRleF9jbGFzcyApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiLyoqXG4gKiBXUE9uaW9uIERlYnVnIENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdC8qKlxuXHQgKiBBZGQgQSBEZWJ1ZyBJbmZvIFRvIERlYnVnIEFycmF5LlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJHZhbHVlXG5cdCAqL1xuXHRzdGF0aWMgYWRkKCAka2V5LCAkdmFsdWUgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9ICR2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkdmFsdWUsIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgQSBEZWJ1ZyBJbmZvIEJhc2VkIG9uIEtleS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c3RhdGljIGdldCggJGtleSwgJGRlZmF1bHQgPSBmYWxzZSApIHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cdFx0cmV0dXJuICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApID8gJGRlZmF1bHQgOiB0aGlzLmRlYnVnX2luZm9bICRrZXkgXTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9oZWxwZXJzL2RlcGVuZGVuY3knO1xuXG4vKipcbiAqIFdQT25pb24gRGVwZW5kZW5jeSBDbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJGVsZW1lbnRcblx0ICogQHBhcmFtIHBhcmFtXG5cdCAqIEBwYXJhbSAkY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsZW1lbnQgPSB1bmRlZmluZWQsIHBhcmFtID0ge30sICRjb25maWcgPSB7fSApIHtcblx0XHR0aGlzLnBhcmFtICAgICAgICAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7IG5lc3RhYmxlOiBmYWxzZSwgcGFyZW50OiBmYWxzZSB9LCBwYXJhbSApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5iYXNlICAgICAgICAgID0ge307XG5cdFx0dGhpcy5iYXNlLiRlbCAgICAgID0gJGVsZW1lbnQ7XG5cdFx0dGhpcy5iYXNlLmluaXQgICAgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLnJ1bGVzZXQgPSBqUXVlcnkuZGVwcy5jcmVhdGVSdWxlc2V0KCk7XG5cdFx0XHR0aGlzLmJhc2UuZGVwUm9vdCgpO1xuXHRcdFx0bGV0ICRfZGVwc19mdW5jdGlvbnMgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7XG5cdFx0XHRcdHNob3c6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0ZWwuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRoaWRlOiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdGVsLnNsaWRlVXAoKTtcblx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLmFkZENsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxvZzogZmFsc2UsXG5cdFx0XHRcdGNoZWNrVGFyZ2V0czogZmFsc2UsXG5cdFx0XHR9LCAkY29uZmlnICk7XG5cblx0XHRcdGpRdWVyeS5kZXBzLmVuYWJsZSggdGhpcy5iYXNlLiRlbCwgdGhpcy5iYXNlLnJ1bGVzZXQsICRfZGVwc19mdW5jdGlvbnMgKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbnN0YW5jZSA9IFtdO1xuXHRcdHRoaXMuYmFzZS5kZXBSb290ICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS4kZWwuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1oYXMtZGVwZW5kZW5jeScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5iYXNlLmluc3RhbmNlID0gbmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksICR0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRcdFx0bmVzdGFibGU6ICR0aGlzLnBhcmFtLm5lc3RhYmxlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiAoIHRydWUgPT09ICR0aGlzLnBhcmFtLm5lc3RhYmxlICkgPyAkdGhpcy5iYXNlLiRlbCA6ICR0aGlzLnBhcmFtLnBhcmVudCxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbml0KCk7XG5cdH1cbn1cbiIsIi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cblxuY29uc3QgaXNfanF1ZXJ5ID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfanF1ZXJ5O1xuXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuL2RlYnVnJztcbmltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuL21vZHVsZSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0aW9uIGZyb20gJy4uL2NvcmUvdmFsaWRhdGlvbic7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBBYnN0cmFjdCBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdC8qKlxuXHQgKiBXUE9uaW9uIEZpZWxkIENsYXNzIENvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udGV4dFxuXHQgKiBAcGFyYW0gJGNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQsICRjb25maWcgPSBudWxsICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250ZXh0ICk7XG5cdFx0dGhpcy5zZXRfYXJncyggZmFsc2UgKTtcblx0XHR0aGlzLmZpZWxkX2RlYnVnKCk7XG5cdFx0dGhpcy5jb25maWcgPSAkY29uZmlnO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHRcdHRoaXMuanNfZXJyb3JfaGFuZGxlcigpO1xuXHRcdHRoaXMuanNfdmFsaWRhdG9yKCk7XG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24gVXNlZCBUbyBJbml0IEZpZWxkLlxuXHQgKiBUaGlzIG5lZWRzIHRvIGJlIG92ZXJyaWRlbiBleHRlbmRpbmcgY2xhc3MuXG5cdCAqL1xuXHRpbml0KCkge1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgamF2YXNjcmlwdCBlcnJvciBwbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBBbiBUcmlnZ2VyIEhvb2sgVG8gSGFuZGxlIEpTIEVycm9yIFBsYWNlbWVudFxuXHQgKiBAdXNlIGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSBlbGVtZW50XG5cdCAqL1xuXHRqc19lcnJvcl9oYW5kbGVyKCBlbGVtZW50ID0gdGhpcy5lbGVtZW50ICkge1xuXHRcdGVsZW1lbnQub24oICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsICc+IC53cG9uaW9uLWZpZWxkc2V0IDppbnB1dCcsICggZSwgZGF0YSApID0+IHRoaXMuanNfZXJyb3IoIGRhdGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB2YWxpZGF0aW9uIGlzIHJlcXVpcmVkIGZvciBjdXJyZW50IGZpZWxkLlxuXHQgKi9cblx0anNfdmFsaWRhdG9yKCkge1xuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSApIHtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSB7XG5cdFx0XHRcdHRoaXMubWF5YmVfanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgY3VycmVudCBwYWdlIGhhcyBmb3JtIGFuZCBlbmFibGUgdmFsaWRhdGlvbnMuXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIFJ1bGUgVG8gRWFjaCBhbmQgZXZlcnkgaW5wdXQgdG8gdmFsaWRhdGUgSlMgTGliLlxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIFdQT25pb25fVmFsaWRhdGlvbi5nZXRfZm9ybSgpICkge1xuXHRcdFx0JGVsZW0uZmluZCggJzppbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucnVsZXMoICdhZGQnLCAkYXJncyApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIHVzZWQgYnkgZWFjaCBhbmQgZXZlcnkgZmllbGQuXG5cdCAqIFRoaXMgZnVuY3Rpb24gd2lsbCBhbHNvIGNvbnZlcnQgU2ltcGxlIEpTIGZ1bmN0aW9uIGNvZGUgaW50byBjYWxsYWJsZSBKUyBjb2RlICYgcmV0dXJucyBpdFxuXHQgKiBQbHVzIGl0IGFsc28gc3RvcmUgdGhlIHZhbHVlIGluIGRlYnVnIGFycmF5IGlmIGRlYnVnIGVuYWJsZWQuXG5cdCAqIEBwYXJhbSAkYXJnXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEByZXR1cm5zIHsqfCRkYXRhfVxuXHQgKi9cblx0aGFuZGxlX2FyZ3MoICRhcmcsICRrZXkgPSBmYWxzZSApIHtcblx0XHRsZXQgJGFyZ3MgICA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKSxcblx0XHRcdCRleGlzdHMgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0JGV4aXN0cyAgICAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0sICRleGlzdHMgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGtleSApIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdID0gJGFyZ3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdWyAka2V5IF0gPSAkYXJncztcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksICRleGlzdHMgKTtcblx0XHRyZXR1cm4gJGFyZ3M7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBGaWVsZCBEZWJ1ZyBQT1BVUC5cblx0ICovXG5cdGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdwb25pb25fZGVidWcuZ2V0KCB0aGlzLmlkKCkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgJGluZm8gPSB0aGlzLm9wdGlvbiggJ2RlYnVnX2luZm8nICk7XG5cblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRpbmZvICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNFbXB0eSggJGluZm8gKSApIHtcblx0XHRcdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ1BIUCBBcmdzJzogJGluZm8sICdKUyBBcmdzJzoge30gfSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCAkZm91bmQgPSBmYWxzZTtcblx0XHRpZiggIXRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRsZXQgJElEICAgPSB0aGlzLmlkKCksXG5cdFx0XHRcdCRlbGVtID0galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD0nICsgJElEICsgJ10nICk7XG5cdFx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0XHQkZm91bmQgPSAkZWxlbTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGZvdW5kID0gdGhpcy5lbGVtZW50O1xuXHRcdH1cblxuXHRcdGlmKCBmYWxzZSAhPT0gJGZvdW5kICkge1xuXHRcdFx0bGV0ICR0aGlzID0gdGhpcztcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkLXRpdGxlID4gaDQnIClcblx0XHRcdFx0ICAudGlwcHkoIHtcblx0XHRcdFx0XHQgIGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ2NsaWNrX3RvX3ZpZXdfZGVidWdfaW5mbycsICdDbGljayBUbyBWaWV3IEZpZWxkIERlYnVnIEluZm8nICksXG5cdFx0XHRcdFx0ICBhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHQgIGFycm93VHlwZTogJ3JvdW5kJyxcblx0XHRcdFx0XHQgIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdFx0ICB0aGVtZTogJ2xpZ2h0Jyxcblx0XHRcdFx0XHQgIGFuaW1hdGlvbjogJ3NjYWxlJyxcblx0XHRcdFx0XHQgIGFwcGVuZFRvOiB0aGlzLmdldF9maWVsZF9wYXJlbnRfYnlfaWQoIHRoaXMuZWxlbWVudCApWyAwIF0sXG5cdFx0XHRcdCAgfSApO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGQgICAgICAgICAgPSAkdGhpcy5pZCgpICsgJ2RlYnVnSU5GTycsXG5cdFx0XHRcdFx0JG5vdGljZV90eHQgPSAnPHAgY2xhc3M9XFwnd3Bvbmlvbi1maWVsZC1kZWJ1Zy1ub3RpY2VcXCc+JyArICR3cG9uaW9uLm9wdGlvbiggJ2RlYnVnX25vdGljZScgKSArICc8L3A+Jyxcblx0XHRcdFx0XHQkZWxlbSAgICAgICA9IGpRdWVyeSggJzxkaXYgaWQ9XCInICsgJGQgKyAnXCIgY2xhc3M9XCJ3cG9uaW9uLWZpZWxkLWRlYnVnLXBvcHVwXCIgPjxkaXYgaWQ9XCInICsgJGQgKyAnXCIgPjwvZGl2PicgKyAkbm90aWNlX3R4dCArICc8L2Rpdj4nICk7XG5cdFx0XHRcdGxldCAkZGF0YSAgICAgICA9ICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApO1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0aHRtbDogJGVsZW0sXG5cdFx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6ICR3cG9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdBcyBKU09OJyApLFxuXHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdFx0b25PcGVuOiAoKSA9PiBqUXVlcnkoICcjc3dhbDItY29udGVudCA+IGRpdiA+ICMnICsgJGQgKS5qc29uVmlldyggJGRhdGEgKVxuXHRcdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApICkgKyAnPC90ZXh0YXJlYT4nXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCAud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlLWdlbicgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRsZXQgJHN0cmluZyA9IHRoaXMub3B0aW9uKCAnZGVidWdfZmllbGRfY29kZScgKTtcblx0XHRcdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRzdHJpbmcgKSApIHtcblx0XHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0XHRodG1sOiAkc3RyaW5nLFxuXHRcdFx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IHRydWUsXG5cdFx0XHRcdFx0XHRoZWlnaHRBdXRvOiBmYWxzZSxcblx0XHRcdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdhdGhlcnMgRmllbGQgT3B0aW9ucyBEYXRhIGZyb20gd2luZG93Lndwb25pb24gYXJyYXkuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0b3B0aW9ucygpIHtcblx0XHRpZiggdGhpcy5fYXJncyA9PT0gZmFsc2UgKSB7XG5cdFx0XHR0aGlzLl9hcmdzID0gJHdwb25pb24ud2luZG93QXJncyggdGhpcy5pZCgpICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9hcmdzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBhIGdpdmVuIG9wdGlvbiBrZXkgZXhpc3RzIGFuZCBpZiBzbyB0aGVuIGl0IHJldHVybnMgaXQgdmFsdWVcblx0ICogb3IgaXQgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0b3B0aW9uKCAka2V5ID0gJycsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gdGhpcy5vcHRpb25zKCk7XG5cdFx0cmV0dXJuICggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApID8gJGFyZ3NbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgV1BPbmlvbiBKUyBGaWVsZCBJRFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGlkKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkJ3MgTW9kdWxlIFNsdWcuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0bW9kdWxlKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ21vZHVsZScsIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCdzIFBsdWdpbiBTbHVnLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHBsdWdpbl9pZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdwbHVnaW5faWQnLCBmYWxzZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIEFuIEFqYXggQWN0aW9uLlxuXHQgKiBAcGFyYW0gJGFjdGlvblxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICovXG5cdGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSApIHtcblx0XHRsZXQgJGFqYXhfa2V5ICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICk7XG5cdFx0bGV0ICRkZWZhdWx0ICAgICAgICAgID0ge1xuXHRcdFx0cGx1Z2luX2lkOiB0aGlzLnBsdWdpbl9pZCgpLFxuXHRcdFx0bW9kdWxlOiB0aGlzLm1vZHVsZSgpLFxuXHRcdH07XG5cdFx0JGRlZmF1bHRbICRhamF4X2tleSBdID0gJGFjdGlvbjtcblx0XHQkZGF0YS5kYXRhICAgICAgICAgICAgPSAoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkZGF0YS5kYXRhICkgKSA/IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICRkZWZhdWx0LCAkZGF0YS5kYXRhICkgOiAkZGVmYXVsdDtcblxuXHRcdHJldHVybiAkd3Bvbmlvbi5hamF4KCAkZGF0YSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIEEgU2luZ2xlIEVsZW1lbnQuXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGluaXRfc2luZ2xlX2ZpZWxkKCAkdHlwZSwgJGVsZW0gKSB7XG5cdFx0d3Bvbmlvbl9pbml0X2ZpZWxkKCAkdHlwZSwgJGVsZW0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBBIFNpbmdsZSBGaWVsZCBUeXBlXG5cdCAqIEB1c2VzIGluaXRfc2luZ2xlX2ZpZWxkLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqL1xuXHRpbml0X2ZpZWxkKCAkZWxlbSwgJHR5cGUgKSB7XG5cdFx0aWYoICFpc19qcXVlcnkoICRlbGVtICkgKSB7XG5cdFx0XHQkZWxlbSA9IHRoaXMuZWxlbWVudC5maW5kKCAkZWxlbSApO1xuXHRcdH1cblx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXHRcdCRlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0JHRoaXMuaW5pdF9zaW5nbGVfZmllbGQoICR0eXBlLCBqUXVlcnkoIHRoaXMgKSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWxvYWRzIEFsbCBGaWVsZCBUeXBlIEluc2lkZSBUaGlzIEZpZWxkLlxuXHQgKi9cblx0cmVsb2FkKCkge1xuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX3JlbG9hZCcgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYWNjb3JkaW9uJywgJ2FjY29yZGlvbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2tncm91bmQnLCAnYmFja2dyb3VuZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2t1cCcsICdiYWNrdXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jaGVja2JveCcsICdjaGVja2JveF9yYWRpbycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXJhZGlvJywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2xvbmUnLCAnY2xvbmVfZWxlbWVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BhbGV0dGUnLCAnY29sb3JfcGFsZXR0ZScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BpY2tlcicsICdjb2xvcl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zZWxlY3QnLCAnc2VsZWN0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaWNvbl9waWNrZXInLCAnaWNvbl9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicsICdmb250X3NlbGVjdG9yJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ3JvdXAnLCAnZ3JvdXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0Om5vdCgud3Bvbmlvbi1pbnB1dG1hc2spJywgJ3RleHQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0YXJlYScsICd0ZXh0YXJlYScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlX3NlbGVjdCcsICdpbWFnZV9zZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zd2l0Y2hlcicsICdzd2l0Y2hlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2VkaXRvcicsICd3cF9lZGl0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1maWVsZHNldCcsICdmaWVsZHNldCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICdpbnB1dFtkYXRhLXdwb25pb24taW5wdXRtYXNrXScsICdpbnB1dG1hc2snICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC13cF9saW5rJywgJ3dwX2xpbmtzJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQta2V5X3ZhbHVlJywgJ2tleXZhbHVlX3BhaXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1kYXRlX3BpY2tlcicsICdkYXRlX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdhbGxlcnknLCAnZ2FsbGVyeScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXVwbG9hZCcsICd1cGxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pbWFnZScsICdpbWFnZV91cGxvYWQnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10YWInLCAnanF1ZXJ5X3RhYicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdvb2dsZV9tYXBzJywgJ2dvb2dsZV9tYXBzJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5zZWxlY3QyJywgJ3NlbGVjdDInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLmNob3NlbicsICdjaG9zZW4nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdGl6ZScsICdzZWxlY3RpemUnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1zb3J0ZXInLCAnc29ydGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdHlwb2dyYXBoeScsICd0eXBvZ3JhcGh5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtb2VtYmVkJywgJ29lbWJlZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWhlYWRpbmcnLCAnaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN1YmhlYWRpbmcnLCAnc3ViaGVhZGluZycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbnRlbnQnLCAnY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWphbWJvX2NvbnRlbnQnLCAnamFtYm9fY29udGVudCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW5vdGljZScsICdub3RpY2UnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZmllbGQtdG9vbHRpcCcsICd0b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWhlbHAnLCAndG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi13cmFwLXRvb2x0aXAnLCAndG9vbHRpcCcgKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfcmVsb2FkJyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgQXJncyBEYXRhLlxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICovXG5cdHNldF9hcmdzKCAkYXJncyApIHtcblx0XHR0aGlzLl9hcmdzID0gJGFyZ3M7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCBQYXJlbnQgQnkgZGF0YS13cG9uaW9uLWpzaWQgYXR0cmlidXRlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp8alF1ZXJ5fEhUTUxFbGVtZW50fVxuXHQgKi9cblx0Z2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggJGVsZW0gKSB7XG5cdFx0bGV0ICRJRCA9ICR3cG9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0cmV0dXJuIGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJElEICsgJ1wiXScgKTtcblx0fVxufVxuIiwiLyoqXG4gKiBXUE9uaW9uIE1vZHVsZSBKUyBDbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdC8qKlxuXHQgKiBXUE9uaW9uIE1vZHVsZSBKUyBDbGFzcyBDb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtICRzZWxlY3RvclxuXHQgKiBAcGFyYW0gJGNvbnRleHRcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0ICkge1xuXHRcdGlmKCAhJHNlbGVjdG9yLmpRdWVyeSApIHtcblx0XHRcdCRzZWxlY3RvciA9IGpRdWVyeSggJHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0X2VsZW1lbnQoICRzZWxlY3RvciApO1xuXHRcdHRoaXMuc2V0X2NvbnR4dCggJGNvbnRleHQgKTtcblx0XHR0aGlzLm1vZHVsZV9pbml0KCk7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcnMgTW9kdWxlIEluaXQgRnVuY3Rpb24uXG5cdCAqL1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIEVsZW1lbnQgQXJncy5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRzZXRfZWxlbWVudCggJGVsZW0gKSB7XG5cdFx0aWYoICEkZWxlbS5qUXVlcnkgKSB7XG5cdFx0XHQkZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtID0gJGVsZW07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBDb250eHQgQXJncy5cblx0ICogQHBhcmFtICRjb250eHRcblx0ICovXG5cdHNldF9jb250eHQoICRjb250eHQgKSB7XG5cdFx0dGhpcy5jb250ZXh0ID0gJGNvbnR4dDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEhvb2sgQ2xhc3MuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGhvb2soKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy53cG9uaW9uLmhvb2tzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRWxlbWVudCBWYXJpYWJsZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldCBlbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBDb250eHQgVmFyaWFibGUuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGNvbnR4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0O1xuXHR9XG59XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBXUE9uaW9uIEZpZWxkIFZhbGlkYXRvciBIZWxwZXIgQ2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbl9WYWxpZGF0b3Ige1xuXHQvKipcblx0ICogSGVscGVyIENsYXNzIEZvciBXUE9uaW9uIEpTIEZpZWxkIFZhbGlkYXRpb24uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggZm9ybSA9IGZhbHNlICkge1xuXHRcdHRoaXMuZm9ybSAgPSAoIGZhbHNlID09PSBmb3JtICkgPyBXUE9uaW9uX1ZhbGlkYXRvci5nZXRfZm9ybSgpIDogZm9ybTtcblx0XHR0aGlzLnJ1bGVzID0ge1xuXHRcdFx0aW52YWxpZEhhbmRsZXI6ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnI3B1Ymxpc2gnICkucmVtb3ZlQ2xhc3MoICdidXR0b24tcHJpbWFyeS1kaXNhYmxlZCcgKTtcblx0XHRcdFx0alF1ZXJ5KCAnI2FqYXgtbG9hZGluZycgKS5hdHRyKCAnc3R5bGUnLCAnJyApO1xuXHRcdFx0XHR0aGlzLmZvcm0uc2libGluZ3MoICcjbWVzc2FnZScgKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5mb3JtLmJlZm9yZSggJzxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJlcnJvclwiPjxwPicgKyAkd3Bvbmlvbi50eHQoICd2YWxpZGF0aW9uX3N1bW1hcnknICkgKyAnPC9wPjwvZGl2PicgKTtcblx0XHRcdH0sXG5cdFx0XHRpZ25vcmU6ICcud3Bvbmlvbi1kZXBlbmRlbnQsLndwb25pb24tdmFsaWRhdGlvbi1pZ25vcmUnLFxuXHRcdFx0ZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKCBlcnJvciwgZWxlbWVudCApIHtcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCB7IGVycm9yLCBlbGVtZW50IH0gKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvckNsYXNzOiAnd3Bvbmlvbi1lcnJvcicsXG5cdFx0XHRlcnJvckVsZW1lbnQ6ICdwJ1xuXHRcdH07XG5cblx0XHRpZiggdGhpcy5mb3JtICkge1xuXHRcdFx0dGhpcy5mb3JtLnZhbGlkYXRlKCB0aGlzLnJ1bGVzICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmRzICYgUmV0dXJucyBmb3JtIERhdGEuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGdldF9mb3JtKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3VwZGF0ZS1uYXYtbWVudScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jdXBkYXRlLW5hdi1tZW51JyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QnICkubGVuZ3RoID4gMCAmJiBqUXVlcnkoICdpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjb3JpZ2luYWxfcHVibGlzaCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jcG9zdCcgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkgPyBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKSA6IGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oIHtcblx0XHRcdFx0aGVhZGVyOiAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0YW5pbWF0ZTogMTUwLFxuXHRcdFx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxuXHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdCdoZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1yaWdodCcsXG5cdFx0XHRcdFx0J2FjdGl2ZUhlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LWRvd24nXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0aWYoICFqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2lzX29wZW4nICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFjY29yZGlvbiggJ29wdGlvbicsICdhY3RpdmUnLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgRXJyb3IgUGxhY2VtZW50LlxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqL1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2FjY29yZGlvbicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYmFja2dyb3VuZCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cblxuLyogZ2xvYmFsIHRpcHB5OnRydWUgKi9cblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLnRvb2x0aXAoKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1cImZpbGVcIl0nICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLmhhbmRsZV9iYWNrdXBfaW1wb3J0KCBlLmN1cnJlbnRUYXJnZXQgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2EuZG93bmxvYWRfYmFja3VwJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGZpbGUgPSB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApO1xuXHRcdFx0JGZpbGUgICAgID0gJGZpbGUgKyAnLScgKyB0aGlzLm1vZHVsZSgpO1xuXHRcdFx0bGV0IGRhdGUgID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBzdHIgICA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArICggZGF0ZS5nZXRNb250aCgpICsgMSApICsgJy0nICsgZGF0ZS5nZXREYXRlKCkgKyAnLScgKyBkYXRlLmdldEhvdXJzKCkgKyBkYXRlLmdldE1pbnV0ZXMoKSArIGRhdGUuZ2V0U2Vjb25kcygpO1xuXHRcdFx0JGZpbGUgICAgID0gJGZpbGUgKyAnLScgKyBzdHI7XG5cdFx0XHR0aGlzLmZvcmNlX2Rvd25sb2FkKCBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfdGV4dGFyZWEgdGV4dGFyZWEnICkuaHRtbCgpICksICRmaWxlICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdhLm5ld19iYWNrdXAgJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHRcdHRoaXMuYWpheCggJ25ldy1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoIHRydWUgKTtcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cycgKS5odG1sKCBlLmRhdGEgKTtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLmRlbGV0ZV9iYWNrdXAnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHRcdGxldCAkaW5zID0galF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAuZGVsZXRlX2JhY2t1cCcgKS50aXBweV9nZXQoKTtcblx0XHRcdGlmKCAkaW5zLmluc3RhbmNlc1sgMCBdICkge1xuXHRcdFx0XHQkaW5zLmluc3RhbmNlc1sgMCBdLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWpheCggJ2RlbGV0ZS1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXG5cdFx0XHRcdFx0YmFja3VwX2lkOiBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCB0cnVlICk7XG5cdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMnICkuaHRtbCggZS5kYXRhICk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy5yZXN0b3JlX2JhY2t1cCcsICggZSApID0+IHtcblx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkuYXR0ciggJ2RhdGEtYmFja3VwaWQnICkgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oICdibHVyJywgJy5yZXN0b3JlX3RleHRhcmVhIHRleHRhcmVhJywgKCBlICkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSApICk7XG5cdFx0XHRcdGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCAnJyApLmh0bWwoICcnICk7XG5cdFx0XHR9IGNhdGNoKCBlcnJvciApIHtcblx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCB0aGlzLm9wdGlvbiggJ2ludmFsaWRfZm9ybWF0JyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlcyBTd2FsIEVycm9yIE1zZy5cblx0ICogQHBhcmFtIG1zZ1xuXHQgKi9cblx0c3dhbF9lcnJvciggbXNnICkge1xuXHRcdHN3YWwoIHtcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR0aXRsZTogbXNnXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgVG9vbFRpcCBpbnN0YW5jZS5cblx0ICogQHBhcmFtIHJlbW92ZVxuXHQgKi9cblx0dG9vbHRpcCggcmVtb3ZlID0gZmFsc2UgKSB7XG5cdFx0bGV0ICR0aGlzID0gdGhpcztcblx0XHRpZiggdHJ1ZSA9PT0gcmVtb3ZlICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzIGxpJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJGVsZW0gPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBhJyApWyAwIF07XG5cdFx0XHRcdCRlbGVtLl90aXBweS5kZXN0cm95KCk7XG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cyBsaScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHRoaXMuc2hvd190b29sdGlwKCBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPmEnICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQmxvY2tzIEEgRm9ybVxuXHQgKi9cblx0YmxvY2tfZm9ybSgpIHtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkuZmluZCggJ2J1dHRvbicgKS5hdHRyKCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnICk7XG5cdH1cblxuXHQvKipcblx0ICogVW5ibG9ja3MgYSBmb3JtXG5cdCAqL1xuXHR1bmJsb2NrX2Zvcm0oKSB7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLmZpbmQoICdidXR0b24nICkucmVtb3ZlQXR0ciggJ2Rpc2FibGVkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZvcmNlcyBEb3dubG9hZCBFeHBvcnQgRGF0YS5cblx0ICogQHBhcmFtIGV4cG9ydE9ialxuXHQgKiBAcGFyYW0gZXhwb3J0TmFtZVxuXHQgKi9cblx0Zm9yY2VfZG93bmxvYWQoIGV4cG9ydE9iaiwgZXhwb3J0TmFtZSApIHtcblx0XHRsZXQgZGF0YVN0ciAgICAgICAgICAgID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudCggSlNPTi5zdHJpbmdpZnkoIGV4cG9ydE9iaiApICk7XG5cdFx0bGV0IGRvd25sb2FkQW5jaG9yTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdhJyApO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoICdocmVmJywgZGF0YVN0ciApO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoICdkb3dubG9hZCcsIGV4cG9ydE5hbWUgKyAnLmpzb24nICk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZG93bmxvYWRBbmNob3JOb2RlICk7IC8vIHJlcXVpcmVkIGZvciBmaXJlZm94XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLmNsaWNrKCk7XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc3RvcmVzIEJhY2t1cCBEYXRhLlxuXHQgKiBAcGFyYW0gYmFja3VwX2lkXG5cdCAqL1xuXHRyZXN0b3JlX2JhY2t1cCggYmFja3VwX2lkICkge1xuXHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xuXHRcdHRoaXMuYWpheCggJ3Jlc3RvcmUtbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHRiYWNrdXBfaWQ6IGJhY2t1cF9pZCxcblx0XHRcdH0sXG5cdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHR0aXRsZTogZS5kYXRhLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgQmFja3VwIEltcG9ydCBGaWxlIGFuZCByZXN0b3JlcyBpdC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRoYW5kbGVfYmFja3VwX2ltcG9ydCggJGVsZW0gKSB7XG5cdFx0aWYoICRlbGVtLmZpbGVzICYmICRlbGVtLmZpbGVzWyAwIF0gKSB7XG5cdFx0XHRsZXQgJGZpbGUgPSAkZWxlbS5maWxlc1sgMCBdO1xuXG5cdFx0XHRpZiggJGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL2pzb24nICkge1xuXHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIHRoaXMub3B0aW9uKCAnaW52YWxpZF9mb3JtYXQnICkgKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bGV0IHJlYWRlciAgICA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdHJlYWRlci5vbmxvYWQgPSAoIGUgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggZS50YXJnZXQucmVzdWx0ICkgKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoICRmaWxlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cncyBUb29sVGlwXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0c2hvd190b29sdGlwKCAkZWxlbSApIHtcblx0XHRsZXQgJGJhY2t1cGlkID0gJGVsZW0uYXR0ciggJ2RhdGEtYmFja3VwaWQnICk7XG5cdFx0bGV0ICRhcHBlbmRUTyA9IHRoaXMuZWxlbWVudFsgMCBdO1xuXHRcdHRpcHB5KCAkZWxlbVsgMCBdLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGFwcGVuZFRvOiAkYXBwZW5kVE8sXG5cdFx0XHRhcnJvd1R5cGU6ICdyb3VuZCcsXG5cdFx0XHRjb250ZW50OiAnPGJ1dHRvbiBkYXRhLWJhY2t1cGlkPVwiJyArICRiYWNrdXBpZCArICdcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZXN0b3JlX2JhY2t1cCBidXR0b24gYnV0dG9uLXNlY29uZGFyeSBidXR0b24tc21hbGxcIj48aSBjbGFzcz1cImRhc2hpY29ucy1pbWFnZS1yb3RhdGUgZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4gfCA8YnV0dG9uIGRhdGEtYmFja3VwaWQ9XCInICsgJGJhY2t1cGlkICsgJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZV9iYWNrdXAgYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNtYWxsXCI+PGkgY2xhc3M9XCJkYXNoaWNvbnMtdHJhc2ggZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4nLFxuXHRcdFx0aW50ZXJhY3RpdmU6IHRydWUsXG5cdFx0XHR0aGVtZTogJ3RyYW5zbHVjZW50Jyxcblx0XHRcdG9uU2hvd246ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAuZGVsZXRlX2JhY2t1cCcgKS50aXBweSgge1xuXHRcdFx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdGFycm93VHlwZTogJ3NraW5ueScsXG5cdFx0XHRcdFx0YXBwZW5kVG86ICRhcHBlbmRUTyxcblx0XHRcdFx0XHRjb250ZW50OiAkd3Bvbmlvbi50eHQoICdkZWxldGUnICksXG5cdFx0XHRcdFx0dGhlbWU6ICdsaWdodC1ib3JkZXInLFxuXHRcdFx0XHRcdGludGVyYWN0aXZlOiBmYWxzZSxcblx0XHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0alF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAucmVzdG9yZV9iYWNrdXAnICkudGlwcHkoIHtcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHRhcnJvd1R5cGU6ICdza2lubnknLFxuXHRcdFx0XHRcdGFwcGVuZFRvOiAkYXBwZW5kVE8sXG5cdFx0XHRcdFx0Y29udGVudDogJHdwb25pb24udHh0KCAncmVzdG9yZScgKSxcblx0XHRcdFx0XHR0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBFeHRyYSBWYWx1ZS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXRfZXh0cmFfdmFsdWUoKSB7XG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jcG9zdCBpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3Bvc3QgaW5wdXQjcG9zdF9JRCcgKS52YWwoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYmFja3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGN1c3RvbV9pbnB1dCA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0bGV0ICRyYWRpb3MgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dJyApO1xuXHRcdFx0bGV0ICRjaGVja2JveCAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyApO1xuXG5cdFx0XHQkY3VzdG9tX2lucHV0LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1uYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnICkgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHR9ICk7XG5cblxuXHRcdFx0JHJhZGlvcy5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkY3VzdG9tX2lucHV0LnJlbW92ZUF0dHIoICduYW1lJyApO1xuXHRcdFx0XHRcdFx0bGV0ICRpID0galF1ZXJ5KCBlICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdFx0XHRcdCRpLmF0dHIoICduYW1lJywgJGkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkcmFkaW9zLm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHQkY3VzdG9tX2lucHV0LnJlbW92ZUF0dHIoICduYW1lJyApO1xuXHRcdFx0XHRcdGxldCAkaSA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdFx0XHQkaS5hdHRyKCAnbmFtZScsICRpLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkY2hlY2tib3guZWFjaCggKCBpLCBlICkgPT4ge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCBlICkuaXMoICc6Y2hlY2tlZCcgKSApIHtcblx0XHRcdFx0XHRpZiggalF1ZXJ5KCBlICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5KCBlICkucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHRcdFx0XHRsZXQgJGkgPSBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0XHRcdFx0JGkuYXR0ciggJ25hbWUnLCAkaS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRjaGVja2JveC5vbiggJ2NsaWNrJywgKCBlICkgPT4ge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblx0XHRcdFx0XHRsZXQgJGkgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHRcdFx0JGkuYXR0ciggJ25hbWUnLCAkaS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjaGVja2JveF9yYWRpbycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmNob3NlbiggdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjaG9zZW4nLCB7fSApICkgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY2hvc2VuJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbi8qIGdsb2JhbCB3cG9uaW9uX2ZpZWxkOnRydWUgKi9cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgICAgICAgID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjbG9uZScsIHt9ICkgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGNsb25lX3dyYXAgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tY2xvbmUtd3JhcCcgKSxcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtYWRkXScgKSxcblx0XHRcdC8vJHJlbW92ZV9idG4gPSAkY2xvbmVfd3JhcC5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1yZW1vdmVdJyApLFxuXHRcdFx0JGxpbWl0ICAgICAgPSAoICRhcmcubGltaXQgIT09IHVuZGVmaW5lZCApID8gJGFyZy5saW1pdCA6IGZhbHNlLFxuXHRcdFx0Ly8kaXNfdG9hc3QgICA9ICggJGFyZy50b2FzdF9lcnJvciAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLnRvYXN0X2Vycm9yIDogdHJ1ZSxcblx0XHRcdCRlcm9yX21zZyAgID0gJGFyZy5lcnJvcl9tc2csXG5cdFx0XHQkc29ydCAgICAgICA9ICggJGFyZy5zb3J0ICE9PSBmYWxzZSApID8ge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tZmllbGQtY2xvbmUtc29ydGVyJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWNsb25lci1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKSxcblx0XHRcdFx0c3RvcDogKCBldmVudCwgdWkgKSA9PiB7XG5cdFx0XHRcdFx0JGVsZW0udHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdH0gOiBmYWxzZTtcblxuXHRcdCRjbG9uZV93cmFwLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46ICRhZGRfYnRuLFxuXHRcdFx0bGltaXQ6ICRsaW1pdCxcblx0XHRcdGNsb25lX2VsZW06ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24tY2xvbmUtYWN0aW9uID4gLndwb25pb24tcmVtb3ZlJyxcblx0XHRcdHRlbXBsYXRlOiAkdGhpcy5vcHRpb24oICdjbG9uZV90ZW1wbGF0ZScgKSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGUgKSA9PiB7XG5cdFx0XHRcdCRlbGVtLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdHdwb25pb25fZmllbGQoICRlLmZpbmQoICc+IGRpdi53cG9uaW9uLWZpZWxkLWNsb25lOmxhc3QtY2hpbGQnICkgKS5yZWxvYWQoKTtcblx0XHRcdH0sXG5cdFx0XHRvblJlbW92ZUFmdGVyOiAoKSA9PiAkZWxlbS50cmlnZ2VyKCAnY2hhbmdlJyApLFxuXHRcdFx0c29ydGFibGU6ICRzb3J0LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggJGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkucHJlcGVuZCggalF1ZXJ5KCAkZXJvcl9tc2cgKS5oaWRlKCkgKTtcblx0XHRcdFx0XHQkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggJGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2hvd19hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5zaG93LFxuXHRcdFx0aGlkZV9hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5oaWRlLFxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2Nsb25lX2VsZW1lbnQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BhbGV0dGUnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0Lndwb25pb24tY29sb3ItcGlja2VyLWVsZW1lbnQnICkud3BDb2xvclBpY2tlcigpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY29sb3JfcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjb250ZW50JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdzZXR0aW5ncycgKSApLFxuXHRcdFx0JHZpZXc7XG5cblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRzZXR0aW5ncy50aGVtZSApICkge1xuXHRcdFx0JHZpZXcgPSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0XHRkZWxldGUgJHNldHRpbmdzLnRoZW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdmlldyA9ICdkZWZhdWx0Jztcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdC5hcHBlbmQoIGpRdWVyeSggJzxkaXYgY2xhc3M9XCJ3cG9uaW9uLWRhdGVwaWNrZXItJyArICR2aWV3ICsgJ1wiIGlkPVwiJyArIHRoaXMuaWQoKSArICdcIj48L2Rpdj4nICkgKTtcblx0XHR9XG5cblx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWRhdGVwaWNrZXItcmFuZ2UnICkgKSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHRpZiggJHNldHRpbmdzLnBsdWdpbnMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JHNldHRpbmdzLnBsdWdpbnMgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0JHNldHRpbmdzLnBsdWdpbnMucHVzaCggbmV3IHJhbmdlUGx1Z2luKCB7IGlucHV0OiAkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItdG8tZGF0ZV0nIClbIDAgXSB9ICkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci1mcm9tLWRhdGVdJyApLmZsYXRwaWNrciggJHNldHRpbmdzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzZXR0aW5ncy5hcHBlbmRUbyA9IGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpIClbIDAgXTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCcgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2RhdGVfcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZmllbGRzZXQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogUmV0dXJucyBXZWJzYWZlIEZvbnQgRGF0YS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQgd2Vic2FmZSgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fd2Vic2FmZV9mb250cycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEdvb2dsZSBGb250IERhdGEuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGdvb2dsZV9mb250cygpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ2ZvbnRzJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0cyBIVE1MIE9wdGlvbiBUYWcgVXNpbmcgQXJyYXkuXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRidWlsZF9vcHRpb25zKCBkYXRhICkge1xuXHRcdGxldCAkcmV0dXJuID0gJyc7XG5cdFx0Zm9yKCBsZXQgJF9kIGluIGRhdGEgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIGRhdGFbICRfZCBdICkgKSB7XG5cdFx0XHRcdCRyZXR1cm4gKz0gYDxvcHRpb24gdmFsdWU9XCIkeyRfZH1cIj4ke2RhdGFbICRfZCBdfTwvb3B0aW9uPmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHRsZXQgJHZhbCAgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpLFxuXHRcdFx0XHQkaHRtbCA9IG51bGw7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy53ZWJzYWZlLmZvbnRzIFsgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLndlYnNhZmUudmFyaWFudHMgKTtcblx0XHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKTtcblx0XHRcdH1cblx0XHRcdGxldCAkdmFyaWFudCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS5odG1sKCAkaHRtbCApO1xuXG5cdFx0XHRpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdjaG9zZW4nICkgKSB7XG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaG9zZW46dXBkYXRlZCcgKTtcblx0XHRcdH0gZWxzZSBpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdzZWxlY3QyJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ZvbnRfc2VsZWN0b3InLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRodG1sX3RlbXAgPSAkdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0JGlucHV0ICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldycgKSxcblx0XHRcdHdwX21lZGlhX2ZyYW1lLFxuXHRcdFx0JGFkZCAgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktYWRkXScgKSxcblx0XHRcdCRlZGl0ICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWVkaXRdJyApLFxuXHRcdFx0JGNsZWFyICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktY2xlYXJdJyApLFxuXHRcdFx0JG1hbmFnZSAgICA9IGZ1bmN0aW9uKCAkdHlwZSApIHtcblx0XHRcdFx0bGV0IGlkcyAgID0gJGlucHV0LnZhbCgpLFxuXHRcdFx0XHRcdHdoYXQgID0gKCAkdHlwZSA9PT0gJ2VkaXQnICkgPyAnZWRpdCcgOiAnYWRkJyxcblx0XHRcdFx0XHRzdGF0ZSA9ICggd2hhdCA9PT0gJ2FkZCcgJiYgIWlkcy5sZW5ndGggKSA/ICdnYWxsZXJ5JyA6ICdnYWxsZXJ5LWVkaXQnO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXG5cdFx0XHRcdGlmKCBzdGF0ZSA9PT0gJ2dhbGxlcnknICkge1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcblx0XHRcdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHRcdFx0ZnJhbWU6ICdwb3N0Jyxcblx0XHRcdFx0XHRcdHN0YXRlOiAnZ2FsbGVyeScsXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYS5nYWxsZXJ5LmVkaXQoICdbZ2FsbGVyeSBpZHM9XCInICsgaWRzICsgJ1wiXScgKTtcblx0XHRcdFx0XHRpZiggd2hhdCA9PT0gJ2FkZCcgKSB7XG5cdFx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5zZXRTdGF0ZSggJ2dhbGxlcnktbGlicmFyeScgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3VwZGF0ZScsIGZ1bmN0aW9uKCBzZWxlY3Rpb24gKSB7XG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkSWRzID0gc2VsZWN0aW9uLm1vZGVscy5tYXAoIGZ1bmN0aW9uKCBhdHRhY2htZW50ICkge1xuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSBhdHRhY2htZW50LnRvSlNPTigpO1xuXHRcdFx0XHRcdFx0aWYoIGl0ZW0uc2l6ZXMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgdGh1bWIgPSAoIHR5cGVvZiBpdGVtLnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGl0ZW0uc2l6ZXMudGh1bWJuYWlsLnVybCA6IGl0ZW0udXJsLFxuXHRcdFx0XHRcdFx0XHQkdG1wICA9IGpRdWVyeSggJGh0bWxfdGVtcCApO1xuXHRcdFx0XHRcdFx0JHRtcC5hdHRyKCAnZGF0YS13cG9uaW9uLWltYWdlX2lkJywgaXRlbS5pZCApO1xuXHRcdFx0XHRcdFx0JHRtcC5maW5kKCAnaW1nJyApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgaXRlbS51cmwgKS5hdHRyKCAnc3JjJywgdGh1bWIgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG5cdFx0XHRcdFx0XHQkcHJldmlldy5hcHBlbmQoICR0bXAgKTtcblx0XHRcdFx0XHRcdCR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1oZWxwJywgJ3Rvb2x0aXAnICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5pZDtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0bGV0ICRlO1xuXHRcdFx0XHRcdGZvciggJGUgaW4gc2VsZWN0ZWRJZHMgKSB7XG5cdFx0XHRcdFx0XHRpZiggc2VsZWN0ZWRJZHNbICRlIF0gPT09IGZhbHNlIHx8IHNlbGVjdGVkSWRzWyAkZSBdID09PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIHNlbGVjdGVkSWRzWyAkZSBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkaW5wdXQudmFsKCBzZWxlY3RlZElkcy5qb2luKCAnLCcgKSApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH07XG5cblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdFx0XHQkZWRpdC5oaWRlKCk7XG5cdFx0XHRcdCRjbGVhci5oaWRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZWRpdC5zaG93KCk7XG5cdFx0XHRcdCRjbGVhci5zaG93KCk7XG5cdFx0XHRcdCRhZGQuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdCRhZGQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdhZGQnICkgKTtcblxuXHRcdCRlZGl0Lm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnZWRpdCcgKSApO1xuXG5cdFx0JGNsZWFyLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaS53cG9uaW9uLWltYWdlLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRwYXJlbnQgICA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0XHQkaW1hZ2VfaWQgPSAkcGFyZW50LmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnICksXG5cdFx0XHRcdCR2YWx1ZSAgICA9ICRpbnB1dC52YWwoKS5zcGxpdCggJywnICk7XG5cdFx0XHRqUXVlcnkuZWFjaCggJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdFx0aWYoICR2ID09PSAkaW1hZ2VfaWQgKSB7XG5cdFx0XHRcdFx0JHZhbHVlLnNwbGljZSggJGssIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkaW5wdXQudmFsKCAkdmFsdWUuam9pbiggJywnICkgKTtcblx0XHRcdCRwYXJlbnQuZmFkZU91dCggKCkgPT4gJHBhcmVudC5yZW1vdmUoKSApO1xuXHRcdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0fSApO1xuXG5cdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cblx0XHRpZiggJHByZXZpZXcuaGFzQ2xhc3MoICdnYWxsZXJ5LXNvcnRhYmxlJyApICkge1xuXHRcdFx0JHByZXZpZXcuc29ydGFibGUoIHtcblx0XHRcdFx0aXRlbXM6ICc+IGRpdicsXG5cdFx0XHRcdGN1cnNvcjogJ21vdmUnLFxuXHRcdFx0XHRzY3JvbGxTZW5zaXRpdml0eTogNDAsXG5cdFx0XHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3NvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0aGVscGVyOiAnY2xvbmUnLFxuXHRcdFx0XHRvcGFjaXR5OiAwLjY1LFxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHRsZXQgJGl0ZW0gPSB1aS5pdGVtO1xuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnd2lkdGgnLCAkaXRlbS53aWR0aCgpICk7XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICdoZWlnaHQnLCAkaXRlbS5oZWlnaHQoKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ2FsbGVyeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsIi8qIGdsb2JhbCBnb29nbGU6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRtYXAgICAgICAgICAgICAgID0gdGhpcy5vcHRpb24oICdtYXAnLCB7fSApO1xuXHRcdCRtYXAuZGV0YWlscyAgICAgICAgICA9ICcjZ21hcF9maWVsZHNfJyArIHRoaXMuaWQoKTtcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xuXHRcdGlmKCAneWVzJyA9PT0gdGhpcy5vcHRpb24oICdzaG93X21hcCcgKSApIHtcblx0XHRcdCRtYXAubWFwID0gJyNnbWFwXycgKyB0aGlzLmlkKCk7XG5cdFx0fVxuXG5cdFx0bGV0ICRfaW5zdGFuY2UgPSB0aGlzLmVsZW0uZmluZCggJ2Rpdi5zZWFyY2hib3ggPiBpbnB1dCcgKTtcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcblx0XHQkX2luc3RhbmNlLmJpbmQoICdnZW9jb2RlOmRyYWdnZWQnLCAoIGV2ZW50LCBsYXRMbmcgKSA9PiB7XG5cdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcblx0XHRcdGdlb2NvZGVyLmdlb2NvZGUoIHtcblx0XHRcdFx0J2xvY2F0aW9uJzoge1xuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXG5cdFx0XHRcdFx0bG5nOiBwYXJzZUZsb2F0KCBsYXRMbmcubG5nKCkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0XHRcdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggJ2ZpbGxEZXRhaWxzJywgcmVzdWx0c1sgMCBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ29vZ2xlX21hcHMnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkYWRkICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IGJ1dHRvbltkYXRhLXdwb25pb24tZ3JvdXAtYWRkXScgKSxcblx0XHRcdCRncm91cF93cmFwID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCcgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gJHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHQkZXJyb3JfbXNnICA9ICR0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC13cmFwJyApLCAnYWNjb3JkaW9uJyApO1xuXG5cdFx0JGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXHRcdHRoaXMuYmluZF9ldmVudHNfZm9yX3RpdGxlKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoIHtcblx0XHRcdGFwcGVuZFRvOiAoKSA9PiB0aGlzLmdldF9maWVsZF9wYXJlbnRfYnlfaWQoIHRoaXMuZWxlbWVudCApWyAwIF0sXG5cdFx0fSApO1xuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWdyb3VwLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLWNvbnRlbnQgPiAud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nIClcblx0XHRcdFx0XHRcdCAgLmNsaWNrKCk7XG5cdFx0fSApO1xuXG5cdFx0JGdyb3VwX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZCxcblx0XHRcdGxpbWl0OiBwYXJzZUludCggJGxpbWl0ICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnZ3JvdXBfdGVtcGxhdGUnICksXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2xpZGVVcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0aWYoIGpRdWVyeSggJ2JvZHknICkuZmluZCggJ2xpbmsjZWRpdG9yLWJ1dHRvbnMtY3NzJyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwiZWRpdG9yLWJ1dHRvbnMtY3NzXCIgaHJlZj1cIicgKyAkd3Bvbmlvbi5vcHRpb24oICd3cGVkaXRvcl9idXR0b25zX2NzcycsIGZhbHNlICkgKyAnXCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJhbGxcIj4nICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRkYXRhID0gJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKTtcblx0XHRcdFx0JGRhdGEuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0dGhpcy5iaW5kX2V2ZW50c19mb3JfdGl0bGUoKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZ3JvdXBfd3JhcCwgJ2FjY29yZGlvbicgKTtcblx0XHRcdFx0Ly90aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZGF0YSApO1xuXHRcdFx0XHQkZGF0YS5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXBwZW5kVG86ICgpID0+IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcblx0XHRcdFx0fSApO1xuXHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJGRhdGEgKS5yZWxvYWQoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGRhdGEuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJyApLCAncmVsb2FkX3dwX2VkaXRvcicgKTtcblx0XHRcdFx0JGRhdGEuc2xpZGVEb3duKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSxcblx0XHRcdHNvcnRhYmxlOiB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tYWNjb3JkaW9uLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHQkYWRkLmJlZm9yZSggalF1ZXJ5KCAkZXJyb3JfbXNnICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0JGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0LCBkaXYubm90aWNlJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQmluZHMgRHluYW1pYyBHcm91cCBUaXRsZSBFdmVudHMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0YmluZF9ldmVudHNfZm9yX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xuXHRcdCRlbGVtID0gKCBmYWxzZSA9PT0gJGVsZW0gKSA/IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKSA6ICRlbGVtO1xuXHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdGxldCAkZGF0YSA9IGpRdWVyeSggZSApO1xuXG5cdFx0XHRsZXQgJG1hY2hlZCA9IHRoaXMub3B0aW9uKCAnbWF0Y2hlZF9oZWFkaW5nX2ZpZWxkcycgKTtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1hY2hlZCApIHtcblx0XHRcdFx0aWYoICRtYWNoZWQuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRsZXQgJGVsZW0gPSAkZGF0YS5maW5kKCAnOmlucHV0W2RhdGEtZGVwZW5kLWlkPVwiJyArICRtYWNoZWRbICRrZXkgXSArICdcIl0nICk7XG5cdFx0XHRcdFx0aWYoICRlbGVtLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkZWxlbS5vbiggJ2NoYW5nZSwgYmx1cicsICgpID0+IHRoaXMudXBkYXRlX2dyb3Vwc190aXRsZSgpICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgR3JvdXAgVGl0bGVcblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHR1cGRhdGVfZ3JvdXBzX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xuXHRcdGxldCAkbGltaXQgPSAxO1xuXHRcdCRlbGVtICAgICAgPSAoIGZhbHNlID09PSAkZWxlbSApID8gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApIDogJGVsZW07XG5cblx0XHQkZWxlbS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGRhdGEgICAgPSBqUXVlcnkoIGUgKTtcblx0XHRcdGxldCAkaGVhZGluZyA9IHRoaXMub3B0aW9uKCAnaGVhZGluZycgKTtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdoZWFkaW5nX2NvdW50ZXInICkgKSB7XG5cdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCAkaGVhZGluZywgJ1tjb3VudF0nLCAkbGltaXQgKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0ICRtYWNoZWQgPSB0aGlzLm9wdGlvbiggJ21hdGNoZWRfaGVhZGluZ19maWVsZHMnICk7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtYWNoZWQgKSB7XG5cdFx0XHRcdGlmKCAkbWFjaGVkLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRlbGVtID0gJGRhdGEuZmluZCggJzppbnB1dFtkYXRhLWRlcGVuZC1pZD1cIicgKyAkbWFjaGVkWyAka2V5IF0gKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JGhlYWRpbmcgPSB3aW5kb3cud3Bvbmlvbi5fLnJlcGxhY2UoICRoZWFkaW5nLCAkbWFjaGVkWyAka2V5IF0sICRlbGVtLnZhbCgpICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkaGVhZGluZyA9PT0gJycgKSB7XG5cdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCB0aGlzLm9wdGlvbiggJ2RlZmF1bHRfaGVhZGluZycgKSwgJ1tjb3VudF0nLCAkbGltaXQgKTtcblx0XHRcdH1cblxuXHRcdFx0JGRhdGEuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXRpdGxlIHNwYW4uaGVhZGluZycgKS5odG1sKCAkaGVhZGluZyApO1xuXHRcdFx0JGxpbWl0Kys7XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBKYXZhc2NyaXB0IEVycm9yIFBsYWNlbWVudC5cblx0ICogQHBhcmFtIGVyclxuXHQgKi9cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdC8qIGlmKCAkZWxlbSApIHsgLy9lcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7IH0gKi9cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dyb3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdoZWFkaW5nJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLypnbG9iYWwgc3dhbDp0cnVlKi9cblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJF90aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkX3RoaXMuZWxlbWVudCxcblx0XHRcdCRhcmdzICAgICAgID0gJF90aGlzLm9wdGlvbnMoKSxcblx0XHRcdCRpbnB1dCAgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWlucHV0JyApLFxuXHRcdFx0JHJlbW92ZV9idG4gPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLXJlbW92ZV0nICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItYWRkXScgKSxcblx0XHRcdCRwcmV2aWV3ICAgID0gJGVsZW0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cblx0XHRsZXQgJHdvcmsgPSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxlbXM6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0cG9wdXA6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxtOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDcmVhdGVzIEEgTmV3IEluc3RhbmNlIGZvciBUb29sVGlwLlxuXHRcdFx0ICovXG5cdFx0XHRpbml0X3Rvb2x0aXA6ICgpID0+IHtcblx0XHRcdFx0aWYoICRhcmdzLnBvcHVwX3Rvb2x0aXAgIT09ICdmYWxzZScgKSB7XG5cdFx0XHRcdFx0bGV0ICR0cCAgICAgID0gKCB0eXBlb2YgJGFyZ3MucG9wdXBfdG9vbHRpcCA9PT0gJ29iamVjdCcgKSA/ICRhcmdzLnBvcHVwX3Rvb2x0aXAgOiB7fTtcblx0XHRcdFx0XHQkdHAuYXBwZW5kVG8gPSAkd29yay5lbG1bIDAgXTtcblx0XHRcdFx0XHRpZiggJHdvcmsuZWxlbXMubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCR3b3JrLmVsZW1zLnRpcHB5KCAkdHAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEluaXRzIEZvciBlYWNoIGFuZCBldmVyeSBQT1BVUC5cblx0XHRcdCAqIEBwYXJhbSAkZWxtXG5cdFx0XHQgKiBAcGFyYW0gJGluc3RhbmNlXG5cdFx0XHQgKi9cblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCAkZWxtLCAkaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR3b3JrLmVsbSAgID0gJGVsbTtcblx0XHRcdFx0JHdvcmsucG9wdXAgPSAkaW5zdGFuY2U7XG5cdFx0XHRcdCR3b3JrLmVsZW1zID0gJHdvcmsuZWxtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXHRcdFx0XHRsZXQgJGhlaWdodCA9ICR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnICk7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnLCAkaGVpZ2h0ICk7XG5cdFx0XHRcdCR3b3JrLnNlbGVjdCgpO1xuXHRcdFx0XHQkd29yay5pbnB1dCgpO1xuXHRcdFx0XHQkd29yay5lbGVtcy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRpY29uID0galF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKTtcblx0XHRcdFx0XHQkaW5wdXQudmFsKCAkaWNvbiApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdFx0c3dhbC5jbG9zZU1vZGFsKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0JHdvcmsuaW5pdF90b29sdGlwKCk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBXb3JrcyB3aXRoIFBPUFVQIElucHV0IFNlYXJjaC5cblx0XHRcdCAqL1xuXHRcdFx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBpbnB1dFt0eXBlPXRleHRdJyApLm9uKCAna2V5dXAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXHRcdFx0XHRcdCR3b3JrLmVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICkuc2VhcmNoKCBuZXcgUmVnRXhwKCAkdmFsLCAnaScgKSApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSGFuZGxlcyBTZWxlY3Rib3ggaW4gcG9wdXAuXG5cdFx0XHQgKi9cblx0XHRcdHNlbGVjdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIHNlbGVjdCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdwb25pb24uYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0J3dwb25pb24taWNvbi1saWInOiAkdmFsLFxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCAkcmVzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICR3b3JrLmVsbSwgJHdvcmsucG9wdXAgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5kaXNhYmxlTG9hZGluZygpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiggJGlucHV0LnZhbCgpID09PSAnJyApIHtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIEJsdXIgRXZlbiAvIGNoYW5nZSBldmVuIGluIGlucHV0ZmllbGQuXG5cdFx0ICovXG5cdFx0JGlucHV0Lm9uKCAna2V5dXAgYmx1ciBjaGFuZ2Uga2V5cHJlc3MnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmKCAkdmFsICE9PSAnJyApIHtcblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJzxpIGNsYXNzPVwiJyArICR2YWwgKyAnXCI+PC9pPicgKS5zaG93KCk7XG5cdFx0XHRcdCRyZW1vdmVfYnRuLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQWRkIEJ1dHRvbiBDbGljayBFdmVudC5cblx0XHQgKi9cblx0XHQkYWRkX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBvcHVwID0gc3dhbCgge1xuXHRcdFx0XHR0aXRsZTogJGVsZW0uZmluZCggJy53cG9uaW9uLWZpZWxkLXRpdGxlIGg0JyApLmh0bWwoKSxcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0YWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0d2lkdGg6ICc3MDBweCcsXG5cdFx0XHRcdGN1c3RvbUNsYXNzOiAnd3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbCcsXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0XHQkX3RoaXMuYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiAkYXJncy5lbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25TdWNjZXNzOiAoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0bGV0ICRwb3B1cF9lbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHBvcHVwX2VsZW0sICRwb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uRXJyb3I6ICgpID0+ICRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiAkcG9wdXAuZGlzYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIFJlbW92ZSBCdXR0b24gRXZlbnQuXG5cdFx0ICovXG5cdFx0JHJlbW92ZV9idG4ub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ljb25fcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV9zZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkaW5wdXQgICAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXG5cdFx0XHQkcHJldmlld19hZGQgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3LWFkZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXcnICk7XG5cblx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IG51bGw7XG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcHJldmlld19hZGQuaGlkZSgpO1xuXHRcdFx0XHQkcHJldmlldy5zaG93KCk7XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2ltYWdlX3VwbG9hZF91cGRhdGVkJywgJGlucHV0LCAkcHJldmlldywgJHByZXZpZXdfYWRkICk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXdfYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJHRoaXMubWVkaWFfaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHR0aXRsZTogJHRoaXMub3B0aW9uKCAnZnJhbWVfdGl0bGUnLCAnU2VsZWN0IEltYWdlJyApLFxuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSAkdGhpcy5tZWRpYV9pbnN0YW5jZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpLmF0dHJpYnV0ZXM7XG5cdFx0XHRcdGxldCB0aHVtYm5haWwgID0gKCB0eXBlb2YgYXR0YWNobWVudC5zaXplcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwudXJsIDogYXR0YWNobWVudC51cmw7XG5cdFx0XHRcdCRwcmV2aWV3LmZpbmQoICdpbWcnICkuYXR0ciggJ3NyYycsIHRodW1ibmFpbCApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgYXR0YWNobWVudC51cmwgKTtcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5pZCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9ICk7XG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWltYWdlLXJlbW92ZScgKS5vbiggJ2NsaWNrJywgKCkgPT4gJGlucHV0LnZhbCggJycgKS50cmlnZ2VyKCAnY2hhbmdlJyApICk7XG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2VfdXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnaW5wdXRtYXNrJyApO1xuXHRcdFx0aWYoICRzZXR0aW5ncyApIHtcblx0XHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnSW5wdXRNYXNrJyApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5wdXRtYXNrKCAkc2V0dGluZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbnB1dG1hc2snLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2phbWJvX2NvbnRlbnQnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0aGlzX2VsZW0gPSAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLXRhYi13cmFwICcgKTtcblxuXHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkgYScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRsZXQgJF90aGlzID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLXRhYi1jdXJyZW50JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkuaGlkZSgpO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdGxldCAkdGFiID0gJF90aGlzLmF0dHIoICdkYXRhLXRhYi1uYW1lJyApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2RpdiN3cG9uaW9uLXRhYi0nICsgJHRhYiApLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKS5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50IGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpOmZpcnN0LWNoaWxkIGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2pxdWVyeV90YWInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmdsb2JhbF92YWxpZGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtYWN0aW9uLWNvbnRhaW5lciAgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLWFkZF0nICksXG5cdFx0XHRsaW1pdDogKCAtMSA9PT0gdGhpcy5vcHRpb24oICdsaW1pdCcgKSApID8gbnVsbCA6IHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtcmVtb3ZlXScsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZWxlbS5maW5kKCAnPiBkaXY6bGFzdC1jaGlsZCcgKSApO1xuXHRcdFx0fSxcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLmFmdGVyKCBqUXVlcnkoIHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQnICkuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fbm90aWNlKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCBlcnIuZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBWYWxpZGF0aW9uIElucHV0c1xuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIHRydWUgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLmtleSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDAgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3Mua2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGlmKCB0cnVlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDEgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MudmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiggdHJ1ZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgJiYgdHJ1ZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdrZXl2YWx1ZV9wYWlyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdub3RpY2UnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFOdGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqTXRZekF4TVNBMk5pNHhORFUyTmpFc0lESXdNVEl2TURJdk1EWXRNVFE2TlRZNk1qY2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVEJHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJVVTVOMEUzT0VFMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlVVNU4wRTNPRGsxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROQ0JYYVc1a2IzZHpJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRNMk1EVTJRekpHUWtWRVJUQXhNVGsxTlVWQ1JUQXpSVUU0UWpSRU5VSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFHQkFRRUJRUUdCUVVHQ1FZRkJna0xDQVlHQ0FzTUNnb0xDZ29NRUF3TURBd01EQkFNRGc4UUR3NE1FeE1VRkJNVEhCc2JHeHdmSHg4Zkh4OGZIeDhmQVFjSEJ3ME1EUmdRRUJnYUZSRVZHaDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHgvL3dBQVJDQUVUQVJNREFSRUFBaEVCQXhFQi84UUFpUUFCQUFNQUF3RUJBQUFBQUFBQUFBQUFBQVFGQmdFREJ3SUlBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFCQXdNREFRTUdCdzhDQXdrQUFBQUJBQUlERVFRRklSSUdNVUVUQjFGaGNZRWlNcEdoc2NGQ2doVGhVbUp5a3FLeXdpTXpjN04wRlRZa045SFRGK0pEVTVPalZEVlZGaEVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9WS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJT3VlZUtDTXlTdURHRHFTZzZJOHZqWG1qWjIvV3EzNVFFSGV5NHQ1UGNsWS84QUZjRDhpRHNRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGTnllWGJiUlIvZnVKL0pIM1VHYjNJT2R5RHNqdkxtUDkzSzl2bURpRUVsbWN5YkJRVGtqemhwK01oQklaeWE5YlFPWkcveW1oQitJb0pNZktXLzk1Yit0cnYrSVFTWStTWTkzdkI3UE9SVWZFU2dreDVqR1NlN2NOSDQxVy9wVVFTMlBZOW9leHdjMDlIQTFCUWNvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lNM3lxYjl2QkY5NjB1L0tOUDFVRmJpb0czTi9EQzhibU9QdER5Z0NwUWFTVGoyTWVQWllZejVXdVB6MVFSWk9MUUVmczVuQStjQW9JeitMM1k5eVpoOU5SOHlDTTdqMlZCMGpEdk9ITitjaEJHa3htU2pOSFc4bnFhVDhpRG9mSE5HYVBZNXA4aEJDRDQzSU5keDFqbTR4cEo5OXpuTjlIVDVrRm1nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWd4L0o1OStVTGYvQ1kxdjYzNnlEbmk3Qy9KaDNaRzF4UHJGUG5RYTlBUUVCQVFRTTQrT1BHVHVjMEVsdTBFanRPaURFYmtHN3hNWmp4dHV3OWRnUDVXdnpvSmFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0RBWnFmdk1yY3VIVGVRUHE2Zk1ndU9HeGt2dUpld0FOcjY2b05PZ0lDQWc0YzVyV2x6aUd0SFVuUUlLWGxrN1JqR3RCcjNqeFFqdEFDREhzSmM0TkhVbWc5YUQwcGpReGpXam8wQUQxSU9VQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRZk1rc2NiZHozQm84cFFSSk14WnMwYVM4L2dqVDQ2SUlVdWJuZHBHME04NTFLQ1ZpN21XV09hU1oxUTAxOUFwcWd3RTBwZEs5MzN6aWZoS0RZOE5ZUmkzdVAwNVNSNmdBZ25aUE4yT1BaKzFkdmxQdXhOMWQ2L0lncU1UeXQ4OThZcnNOWkZLYVJFYWJUNUNmT2cwNkNweWZKTWZaQXNEdStuN0kyZEFmT1VHU3lHY3lGKzR0a2VXeEU2Uk4wYjE3ZktndE9Vdjd1d3hzSDBoSFZ6ZlExb0NDb3c3VEpsYlJ0Sy90V0VqekJ3SlFlaklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJS3JPdGR0aGQ5RUVnK2swUVZDQWd0R2tRNEM2bEpvVEhKcjU2RUJCNS92UWFwK1R1TVp4aXlGdlJrMCsvMjZEUWJpZTMwb012SlBKSTh2a2NYdmNhdWM0a2tuMGxCODcwRm5OeVhMUzJyYll6RU1BbzV3MGM3MHU2b0t6ZWc3N0VHUzlnakd1NlJvcDYwRjF6YVVmM1NKamVqSVJVZVFsenZtUVIrSXNNbWJpTktoalh1UDVKSHpvTitnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2k1U0x2TE4vbGI3UTlTRFBVUUtJSm1mY0lPS3ZGYUY3WXdQUzU0SitKQmdBNGtnZVZCcnVUV0Y3TGpjWXkzZ2RJeUdMMnkzV2hMVzlucVFaWjl2ZE05K0Y3ZlMwaEIxRnhIWFJCeHZRTjZDNDRtd1M1NjJEaFZyZHp2V0dFajQwSHh5ZWN2emwxVTEydTJqMUFJTFhnVWU2N3VwdnZJMnRIMWovQU5sQnRVQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJ3QkJCNkhRb012UEgzY3I0ejlGeEZmUWcrV2lwSG5RT2R5OXppYlczKytlUHpHL2RRWVVTRUVFZFFhaEJjUWN4enNOQjM0ZUFLQVBhMGo0Z0VFOXZpQmtEcExiUU9iMmdCdytWeFFkZzVoaHBOTGpFeDFQdk9BWWZsYWc1YmtPQ3o2eTJqb25IeWJ3UHpYSURjUHcrN0pNR1E3ajhGN2czOU9pQ3o0OWdNZlpYN3JpM3ZtWFhzRnJHdExTUVQxT2hLRERYMDVsdlo1Q2FsNzNHdnJRYlR3K2hBeDF6UDJ5UzdQVXhvUDY2RFZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNDaXpFT3k2MzAwa0ZmWDJvSTF0SHZ1STJEdGNFRlg0aTNCKzAybHYyTlk2VDhvMC9WUVkrcUJWQXFnVlFLb0ZVSEllNGRIRWV0Qnh1UWVtOEtoRWZINEhEcks1N3orVnQvVlFYcUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3I4ekZ1dDJ5QWFzZHFmTWZ1b0s3RzdmdHNlNDAxK09pRG5rdkZQN3pOSE95NDdtV05teWhidWFSVW55anlvTXpjZUgrYWovZFBpbUhtZHQvU1FRTGppUElZUGV0SFAvaGtQL1JxZ2dUNHpKMjRyUGF5eER5dlk1dnloQkdKSU9xRGpjZ2JrRGNnYmtIc09EZzdqRDJjVktGc0xLanprVlB4bEJOUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFSFZjeENXM2taNVI5MUJtalVHbmFFSFl5NHVHZTVJNXZvSkNEdFprcjFuU1FuMDYvS2c3NDh6ZEErMDBQK0w1RUZoYlhWek1SdmdMR242UlAzRUhaUFoybHdLVHdzbEg0YlE3NVVGZk54VGowMWQxbEdDZTF0Vy9JUWdyNXZEN0F2SkxUTkdld05jQ0I4SUtDQkw0YVJFa3hYN21qc0RvNi9HSEJCRGI0YjVFWERBNjVpTUZSdmNOMjdiMjBiVDUwSG9ER2hyUTBkR2lnOVNEbEFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGRmUyTTR1bjdHRnpYbXJTQnBycWc1aHc5eS9WNUVZOC9WQk5pdzF1MzMzRjUrQUlKa2NFTVg3dGdiNkFnKzBCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkZ5bVJoeHVPdWIrZHJuUTJzYnBaR3NBTGkxZ3FhQWtDdnJRUU9MOHN4UEpMT1M1eDVlM3VYN0pZWmcxc2pTUlVFaHBjS083RFZCYnlQREkzUFBSb0xqVHpDcUNwNHZ5akg4a3g4bDlZeHl4d3h5bUJ6WncxcnR6V3RkVWJYUEZLUEhhZ3VFQkFRUnNsZnc0L0hYTi9NSE9odFluelNOWUFYRnJHbHgyZ2tDdW5sUVlqL3JaeFgvMnQ5LzVjUC9OUVNMSHhpNGhjekNLVDdUYUEwQWtuamJ0MS9odWtJK0JCdG81STVZMnlSdUQ0M2dPWTlwQmE1cEZRUVIxQlFmU0FnSUNBZ0lLYmpuS3Nmbi90bjJPT2FQN0ZMM012ZkJyYXUxMWJ0Yy9UVHRRWEtBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FncGViZjRqbVA2U1g5QW9QSmVOdnlIRkxYRDhxaDNUWXZJOTVCa29oMmJabnNINXJBNXZuQkhhZzlyTnpCZFkwM051OFN3VFFsOFVqZFE1cm0xQkNERWVDZitLM1g5ZEovSmlRVE0zNG0yZHBrbjR2RVdFK2F2NGlSTEhiMTJnZzBjQVd0a2NTM3RvMmlEbkJlSmRuZTVKbUt5bGhQaHNqS2FSUlhGZHJpZWpkem14dUJQWlZ2bVFiTkJUOHgveFBNLzBVLzhzb0tyd3Avd1hIL2pUL3ozb0pQaUphWXlmaU9SZmZNWWU1aGMrMmtkVGMyYjZHMDloTHFEem9LWGlHY3VjUjRXeDVTZUUzSDJRU2QxRTUyd3VqNzR0YU4xSFVBcnBvZ044Vko3a1FPeGVCdWNqR1dSbThsaExpeUdTUm9jWTl3amNIRnRhRW5hZ3ZPVWMzeG5IaERGT3g5eGtMZ0F3Mk1IdFBJSnBVK1FWMEhsN0VGSEQ0cVRXOHJQNzl4Kzh4TnJJUTF0eThQZTJ2bkRvNGo4RlVGL3l2bFJ3ZUVqekZ2YWpJV3Izc0R5eVhZQkhJUFprQjJ2RGhXZzlhQzd0NTRyaTNpdUlYYm9wbU5ramNPMXJoVUg0Q2dvOFh5dzVIbEdSd3R2YVZ0OGEwZDlmZDVvWkRRYkJIdDh1NzZYWWc0NGp5My9BUFJmM0QvU2ZaZnNNM2Nmdk84MzlmYTkxbE9pQ3Z6dmlSYTJXU2t4ZUtzSjh6a1lhaWFLM0IydElwVWJtdGtKSTdhTjA2SU9jRjRqMjE3a284WGxjZlBoc2pOcERGY0E3WGs5QUhPYkdRVDJWYWdzVHlzeDh5SEc1N1h1eExCMzlyZDk1WHZLRFZ1emFLZTY3NlI2SVBybVhLb3VOWWorNFBoKzB2ZEkyS0tEZjNlNHVxVDdXMS9SclNlaUN6eHVRaHY4WmJaQ1AyWXJtRmt3cWZkRDJoMUNmTWdxdUljcWR5T0M3dW1XbjJlMGduTU52S1hsNWxEZFM3YnNadDBJN1Q4U0MvUUVCQVFFQkFRRUJBUUVGTHpiL0VjeC9TUy9vRkJSOER4ZG5sZkRLeng5NHpmYjNEYmhyeDJqL1VTRU9IbmFkUWdxdUY1Uzh3Ti9lOEx5NzZtTnIzNHlZKzY1cEJkdEZleHc5cHZucUVEd3Bua3QrQVplZUxTU0tlNGV3L2hOdG95RUUvd2NzYmFMaTc3eHJRYm02bmYzMG4waUdhTmJYeURyNjBIejR5MmR1N2prRjhRRzNkdGNNRUVvMGNBOEhjMEhyMkErcEJ0c2ROSk5qN1dhUTFra2hqZTgrZHpRU2dyK1kvNG5tZjZLZitXVUhuWENlRlovSjhidGIyMDVQZDQ2M2tNZ1paeENUWXpiSTVwcHRtakdwRmZkUVhyUENpVzZsWWM3eUM4eXNNYmc1a0xpNW8wclVFdmZOMTgxRUZ2ejIxdDdYZ0dSdHJlTVJRUXdNWkZHMFVEV3RlMEFCQjJlRzl2RkJ3ckdDTnROOGJwSG50TG52Y1NTZ3cwdDF5cC9pVm1ickNXRUdRdmJZQ0pyYmtnQ0tLaldnc3JKRHFhZkg1MEZwazdqeGN5V1B1TEM2NC9ZdXQ3bGpvNUFIc3FBNGRSVzVPbzZqem9MdmpYRzhqSndFNERPUjkxTzVrc0lhWE5lV3RMaTZNN21Gdzlra1U5Q0N2NFR5YzJQQjc0WCtsMXg0eVFTeG5xZHRlNmIrVjdBOUNDYjRXWXVTMjQ0Y2pjNjNtWGxkZFRQUFV0SklaOE9ydldncC9ES1o4Tmh5aWFQOTVIY1NQWjZXdGVRZ28rQlhYaUJiNHFXZkFZbTF2SUxtWnpwcnVkemU5YzhVQkRxenhtZzdOTzFCTzVMWWVLdkliYUNHOHdsckM2MmxFMEU4RXNiWld1QXBvNTF3L1EvTUVGOTRodzNOcGI0Yms0WlM3eEU4WnUydDdZcGFDUnVuNFduclFjY21naDVMeTdIWVpwMzJWdFpUWGs1cFZwTTdlN2lyWHlhRWVsQlI0dmtzMWo0V1g5bzh1R1JzNVpNWXhsZmFEcFhhVVA0TFhPcCtLZzlBNGxoaGh1TzJPUG9CTEZHRFBUdGxmN1Qvd0E0b0xkQVFFQkFRRUJBUUVCQVFWSEw0SnArTDVXR0NOMHMwbHJLMk9KZ0xuT2NXbWdEUnFTZ2crRzlwZDJuQzhkYjNjTWx2Y003N2ZESzBzZTJzOGhGV3VBSXFEVkJEOFNlSlNackdOdnJGcEdYeC83UzNMUGVlMEdwWUthMTdXK2Ywb0kzaEppNzIwNHZkMjJSdEpiWjhsM0llNW5qZEc1ekhReE5ydGNBYUdoQ0Nxc2JQbVhCTHU2dDdESFB6ZUNuZVpJV1JFbVZwTkIwYUh1QnBRTzlrZzlmS2dYdGh6SG5kNWFSWkhIT3d1QnQ1TzlsamxKNzE1RlduUndZNHVwVUQyUUJXdXVpRDA1akdzYUdORkd0QURRT2dBUVZmSzRacCtNWmFHR04wczBscE0yT05nTG5PY1l5QUdnYWtsQlcrR2xuZDJmRGJHM3U0SkxlNFladDhNclhNZUt6UElxMXdCMUJRYWRCUWMrdHJtNjRoazdlMmlmUFBKRzBNaWphWHZjZDdUbzF0U1VIMXdhMnVMYmlXTWd1WW53enh3MGtpa2FXUGFkeDBMVFFoQm5lVWNkNUhqZVRqbFhHb2hjeXlzRWQvWkhxOEFBYUNvcUhCbzZhZ2l1cUNQZGNyOFFzM2J1eDJONDdQaXBwaHNrdnAzUFlHTk9oY3h6MlJiVDZLbnlhb054Z2NkY1k3RTIxbmMzVWw3Y1JOL2JYVXpuUGM5N2lTZFhFbWdyUWVaQjV6emJpV2JsNVZKYjR5R1E0elBtQjEvTEd4em1SdWlmN1JlNENqZnY5ZXFEMUszZ2l0NEk0SVdoa1VMV3h4dEhRTmFLQWZBZ3cvaGhqTCswYm5HMzFwTGJ0bnV5Nk1UUnVZSHNPN1Z1NENvUVZkclljdzRKZjNjZUx4N3N6Z0xtVHZZNFlxbVJoTkI5RVBlSFVvQ2RwQnBWQktOenovbHQ1YndpMHVPTlltSisrNW03eDhjNzZhYlFhUlBOZGFlelR5OWlEZFpiR3daTEYzV09tL2RYTVRvaWVwRzRVRHZTRHFneC9oZmhzdmJOeUY5bUlwSXIxNWlzNGhLMHRQYzJzWVkwdEJwVnAwMTdhSUt0L0Q4ako0bFNSbUNUK3d2dUdaU1NRc2QzSm1Zd25idXB0M2Q0ODFGZWlEMDlBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkF6K1dpeEdGdk1sSlNsdEU1N1FmcFA2TWI5WnhBUWVTOFFreUhIczdoY3hmUExyYmtyWkdYRGoyT2ZMN0xqMmRkanZRU2c5cGM1cldsemlBMENwSjBBQVFkRmxmMkY5RDMxbGN4WFVJSmFaWVh0a2J1SFVibWtpdXFCZTM5aFl3OTllM01WckNTR2lXWjdZMjdqMEc1eEFyb2c3VEpHSSs4TGdJNmJ0OVJ0cDFyWHlJSUVYSStQVFRpM2h5bHBKT1NRSW1UeE9lU09vMmgxVUV1OGpobHM1NHBuYklYeHZiSytvRzFwYVE0MU9nb0VHYngyTHdtTTRUa0xYRFhmMjJ5RU55NFQ5NUhMN1JqTzRib3cxdWlDTDRSZjRYQi9HbS9TUWFtK3krSnNDMFgxN0JhRjN1aWVWa2RmUnVJUWRsbmYyTjdGMzFuY1JYTUowN3lGN1pHK1RxMGtJTUh5ei9BSFI0ei9EUDZUMEczYm04TTY4TmsyL3RqZUE3VGJDVmhscjVObGQzeElQalAvOEF3V1IvcFp2NWJrR2E4SXY4TGcvalRmcElOVmZaYkZXRzAzMTVCYUIzdTkvSXlPdm8zRWVSQjIyMTNhM1VJbXRabVR3dTkyU0p3ZTA5dWhhU0VIYWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lQT2ZGckp4enlZdmpZblpiaTltYk5kelBjMWpXUkIyeHBjWGFVcnVkOVZCejRoeThVeUhEL3N0aGs3SjArTjJTV1VVZHhFWEZzWTJGalFIVlBzZEI1VUdwNFRuUm0rTldkNjUyNmNON3E1OHZleCt5NG44YjN2V2d6ZkRSL1lPYTVuamJ2WnRidjhBMTJQSFpROVdqNnBwOVZBNW1QNzl6WEM4YmFOMXJiSDdka0IxRkIwYWZxaW4xa0ZqelRqR1N6MS9aUnoza2R0eHVDajc2THZITWxlK3AvQjJVOTBDcnRLbEJtK1JjZDhKWU1WY0MydTRJYjFzYnpDK0c1Zk8vdkdqUU9ZSFNEVjNYUkJlY0l5RjFlK0d6bjNMekxKRkRjd2g3dFNXc0RnMnA4emRFRUh3OS8yd3YveGJ6K1dnbWVGd3VqNGYwdEN3WFpkY2ZaekpVTUVsVHQzVURqU3ZYUkJYMlBBK0xXY2NrL05iKzN1c3ZjU09kTEpMZHVpWnIwMmt1aGNUVFUxUVZXSmZnTVY0ajQ2UGkxNFpNZmV0TWQzQzF6bnNCSWRSdTUzVUNnY05UUW9KM2lQWlhsOXozQldkbk02M25uaDJDZG52TWFYdjN1Rk8wTXFndDc3d2c0cS9GdWdzMlNRWHpXL3NyMHlQYzR2SFRlMG5aVHkwYUVIUnd6TzNtVTRCazRiNXhmZDQrSzR0bnlPTlhPYUlpV2x4N1NLN2ZVZytPQTVUKzFlR0UyUjJoeHRmdEVqR25vWEEreUQ2U2d5K0FtOE83eUYrUjVma1pMM01YVG5PbWljMjZEWXhVN1FERTBWMDhob09nUVNMUE5jWXdYTE1kTnhTK2tseDE5SUlNallQRXdZd1BjR3RlMHl0YldtNm8xSjA2MEtEMk5BUUVCQVFFQkFRRUJBUUVCQVFFQkFKQUZUb0FnOHE0L2ljZnpqbHVheStUaU54aTRDSUxTUGM1Z05EUmhCWVduUnJha2ZoSU5WLzBzNEgvd0RXZit2Y2Y4eEJuZUFTTzQ3elBMY1VtZFNDWnhtc2E5dTBiaFN2YTZJNi9pb0xUeElnZmo3dkQ4cWhIdDR5NGJIZFU2bTNsTkQ4cGI5WkIxK0dzVDhsa00xeXVjSGRrSnpEYVY2aUNNai9BSU5iOVZCVmM3bHRMM24xbGkrUVhUN1hBTmdFakFDV3NkSWQzdE9kMlZjTnU3czh5RG5QTThKOExpYmwxaEZhM2w5TEc1dHN5T1UzUkVoYVExeExuU05ZQWRTZ3NmRG9nK0dsd0FkUUxzSDRDVUhWNGUvN1lYLzR0NS9MUWRYRHJxOXRQQ2E3dWJLb3VvbTNMb25ORlMwZzZ1SDRvMVFWbkVNUjRhWG1HWmU1eTlqbXlraGMrN2JkWExvWE5mdVB1dEQyRjJuYnJWQkhqeUhHYmp4THcwZkg0STRiRzNmM2JwWTI3QkpJZDFYRHRJNkFWUVcvaUZsRzRyeEF3T1FleDBrZHZDWHl0WUt1N3ZjOFBJSDRMU1NnMVdSOFErSjJtTWZmUjVHRzVPMnNWdkU4T2xjN3Niczk1djFnRUdkNEpqTHUyNERsNzI3YVdTWkpseGNNYVJUMk82SUR0ZnZqVStoQjg4S3hzdVQ4S2Jxd2gvZlRpNGJFRG9DOE9xMGVzaEJFNEZrZUNQeExjZG5iT3d0Y3RaRjBVN3J5R0ZoZlJ4b1MrUWU4UGRJSnJVSUxOMlo0VS9rbGppY0RnckhKenlQclBkd1JSTVpBMXJoN1llSTNidG8xMEk3TmRVSG9DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNENHVJSXJpQ1NDVUV4VE1kSElBUzBscmhRMGMwZ2pUdENDSGhjRmljSmFHMHhsdUxlM2M4eU9ZSE9mVjVBQkpjOHVkMEE3VUU5QlYzZkdNSGQ1ZURNVDIyN0pXMjBRM0RYeU1JMmtrVmExd2E3cjJoQk15R1BzOGpaVFdWNUdKcldkdTJXTWtpbzY5V2tFZXBCeGpjYlk0eXhpc2JHSVEyc0lJampCSnBVa25WeEpPcDdVSFJtZVA0WE5RdGh5bG95NVl5cFlYVkRtMTY3WHRJY0srWW9JT000SnhIR3lkN2FZeUpzblkrVGRNNFYwOWt5bDlQVWdsNHZqV0Z4VmhQWVdGdjNObmNGenBvdThrY0NYdERYYXZjNGlyUjJJUHJIOGV3K094Y21MczdmdXJDVVBENGQ3M1Y3d1VkN1RuRjJvODZEc3hHRnhtSXNSWTQ2SHViVnBjNFI3blAxY2FuVjVjZmpRVkZ4NGNjSnVMazNFbUxqRWhPNGhqNUkyVnJYM0dPYXo0a0V1VGh2R0h2c25qSHh4dXg3KzhzekNYUmJIMURxL3N5M2RxMGU5VkJJdk9QWWU4eWR2azdtM0VsOWFOTElKUzU0RFdtdFJ0QkRUN3g2aEJYeCtIdkRJNzM3WXpGUkNhdTRBbDVqQjgwUmQzZjVxQzludDRaN2VTM2xidWhsWVkzczFGV3VGQ05LVTBRUnNSaHNiaDdKdGxqb2U0dFd1TG14N25QMWNhblY1Y2ZqUVFzdnd2aStZbTcvSVkrT1djKzlLMHVpZTZtbnRPakxDNzFvSk9HNDVnOExHNW1NczQ3WVBvSHZiVXZjQjBEbnVKY2ZXVUZpZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0QvLzJRPT0nO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuYmVmb3JlKCAnPHNwYW4gY2xhc3M9XCJzcGlubmVyIHdwb25pb24tc3Bpbm5lclwiPjwvc3Bhbj4nICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNob3dfcHJldmlldyggZSApICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBPRW1iZWQgUHJldmlldy5cblx0ICovXG5cdHNob3dfcHJldmlldygpIHtcblx0XHRsZXQgJHZhbHVlID0gdGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkudmFsKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdCR3cG9uaW9uLmFqYXgoICdvZW1iZWQtcHJldmlldycsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR2YWx1ZTogJHZhbHVlLFxuXHRcdFx0fVxuXHRcdH0sICggcmVzICkgPT4ge1xuXHRcdFx0aWYoIGZhbHNlID09PSByZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmh0bWwoIHJlcy5kYXRhICk7XG5cdFx0XHR9XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5yZW1vdmVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdvZW1iZWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NlbGVjdCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3QyJywge30gKTtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZy5kcm9wZG93blBhcmVudCApICkge1xuXHRcdFx0JGFyZy5kcm9wZG93blBhcmVudCA9IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50ICk7XG5cdFx0fVxuXHRcdCRhcmcgPSB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmVsZW1lbnQuc2VsZWN0MiggdGhpcy5oYW5kbGVfYXJncyggJGFyZyApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NlbGVjdDInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR2YXIgJHRoaXMgICAgID0gdGhpcy5lbGVtZW50LFxuXHRcdFx0JGVuYWJsZWQgID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWVuYWJsZWQnICksXG5cdFx0XHQkZGlzYWJsZWQgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZGlzYWJsZWQnICk7XG5cblx0XHQkZW5hYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRkaXNhYmxlZCxcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0dXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRsZXQgJGVsID0gdWkuaXRlbS5maW5kKCAnaW5wdXQnICk7XG5cdFx0XHRcdGlmKCB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCAnd3Bvbmlvbi1lbmFibGVkJyApICkge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZGlzYWJsZWQnLCAnZW5hYmxlZCcgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZW5hYmxlZCcsICdkaXNhYmxlZCcgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIGF2b2lkIGNvbmZsaWN0XG5cdFx0JGRpc2FibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGVuYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzb3J0ZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N1YmhlYWRpbmcnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N3aXRjaGVyJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0ZXh0JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0ZXh0YXJlYScsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IGNzc191bml0cyBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2Nzc191bml0cyc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5mb250X3dlaWdodF9zdHlsZSA9IGZhbHNlO1xuXHRcdGxldCAkZWwgICAgICAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0bGV0ICRwcmV2aWV3ICAgICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZm9udC1wcmV2aWV3JyApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXRcblx0XHRcdFx0JGZvbnRfZmllbGQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJyApLFxuXHRcdFx0XHQkZm9udCAgICAgICAgICAgICAgPSAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tZm9udC1zZWxlY3RvcicgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRfd2VpZ2h0X3N0eWxlID0gJHRoaXMuZm9udF9zdHlsZSggJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkudmFsKCkgKSxcblx0XHRcdFx0JHRhZyAgICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXRhZyBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRjb2xvciAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZmllbGQtY29sb3JfcGlja2VyIGlucHV0LndwLWNvbG9yLXBpY2tlcicgKS52YWwoKSxcblx0XHRcdFx0JGFsaWduICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWFsaWduIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRTaXplICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXNpemUgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdCRsaW5lSGVpZ2h0ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1saW5lLWhlaWdodCBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0Ly8kYmFja1VQRm9udCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwLWZvbnQgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQvLyRkaXJlY3Rpb24gICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1kaXJlY3Rpb24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGV0dGVyLXNwYWNpbmcgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdGhyZWYgICAgICAgICAgICAgICA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9JyArICRmb250ICsgJzonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCxcblx0XHRcdFx0aHRtbCAgICAgICAgICAgICAgID0gJzxsaW5rIGhyZWY9XCInICsgaHJlZiArICdcIiBjbGFzcz1cIndwc2YtZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICsgJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPic7XG5cblx0XHRcdGlmKCBqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5hdHRyKCAnaHJlZicsIGhyZWYgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggJ2hlYWQnICkuYXBwZW5kKCBodG1sICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZm9udFNpemUgPT09ICcnIHx8ICRmb250U2l6ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkZm9udFNpemUgPSAnMThweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGV0dGVyU3BhY2luZyA9PT0gJycgfHwgJGxldHRlclNwYWNpbmcgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgPSAnMXB4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYoICRsaW5lSGVpZ2h0ID09PSAnJyB8fCAkbGluZUhlaWdodCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkbGluZUhlaWdodCA9ICcyMHB4Jztcblx0XHRcdH1cblxuXG5cdFx0XHRsZXQgJF9hdHRycyA9ICcgZm9udC1mYW1pbHk6JyArICRmb250ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC13ZWlnaHQ6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQgKyAnOyAnICtcblx0XHRcdFx0JyBmb250LXN0eWxlOicgKyAkZm9udF93ZWlnaHRfc3R5bGUuc3R5bGUgKyAnOyAnICtcblx0XHRcdFx0JyB0ZXh0LWFsaWduOicgKyAkYWxpZ24gKyAnOyAnICtcblx0XHRcdFx0JyBjb2xvcjogJyArICRjb2xvciArICc7JyArXG5cdFx0XHRcdCcgZm9udC1zaXplOicgKyBjc3NfdW5pdHMoICRmb250U2l6ZSApICsgJzsgJyArXG5cdFx0XHRcdCcgbGV0dGVyLXNwYWNpbmc6JyArIGNzc191bml0cyggJGxldHRlclNwYWNpbmcgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxpbmUtaGVpZ2h0OicgKyBjc3NfdW5pdHMoICRsaW5lSGVpZ2h0ICkgKyAnOyAnO1xuXG5cblx0XHRcdGxldCAkdGV4dCA9ICRwcmV2aWV3LnRleHQoKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5hcHBlbmQoIGpRdWVyeSggJzwnICsgJHRhZyArICc+JyArICR0ZXh0ICsgJzwvJyArICR0YWcgKyAnID4nICkgKTtcblx0XHRcdCRwcmV2aWV3LmZpbmQoICR0YWcgKS5hdHRyKCAnc3R5bGUnLCAkX2F0dHJzICk7XG5cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBQcm9wZXIgVmFsaWQgRm9udCBTdHlsZXMuXG5cdCAqIEBwYXJhbSAkaW5mb1xuXHQgKiBAcmV0dXJucyB7e3dlaWdodDogc3RyaW5nLCBzdHlsZTogc3RyaW5nfX1cblx0ICovXG5cdGZvbnRfc3R5bGUoICRpbmZvICkge1xuXHRcdGxldCAkd2VpZ2h0X3ZhbCA9ICc0MDAnLFxuXHRcdFx0JHN0eWxlX3ZhbCAgPSAnbm9ybWFsJztcblxuXHRcdHN3aXRjaCggJGluZm8gKSB7XG5cdFx0XHRjYXNlICcxMDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzEwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzEwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzcwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzcwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc5MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdCRzdHlsZV92YWwgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7IHdlaWdodDogJHdlaWdodF92YWwsIHN0eWxlOiAkc3R5bGVfdmFsIH07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0eXBvZ3JhcGh5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFkZCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbicgKSxcblx0XHRcdCRpbnB1dCAgICA9ICRlbGVtLmZpbmQoICdpbnB1dFt0eXBlPXRleHRdJyApLFxuXHRcdFx0JHNldHRpbmdzID0gJHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnLCB7XG5cdFx0XHRcdGZyYW1lX3RpdGxlOiAnVXBsb2FkJyxcblx0XHRcdFx0dXBsb2FkX3R5cGU6ICdpbWFnZScsXG5cdFx0XHRcdGluc2VydF90aXRsZTogJ1VzZScsXG5cdFx0XHR9ICksIHdwX21lZGlhX2ZyYW1lO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggd3BfbWVkaWFfZnJhbWUgKSB7XG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdHRpdGxlOiAkc2V0dGluZ3MuZnJhbWVfdGl0bGUsXG5cdFx0XHRcdGxpYnJhcnk6IHtcblx0XHRcdFx0XHR0eXBlOiAkc2V0dGluZ3MudXBsb2FkX3R5cGVcblx0XHRcdFx0fSxcblx0XHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdFx0dGV4dDogJHNldHRpbmdzLmluc2VydF90aXRsZSxcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9IHdwX21lZGlhX2ZyYW1lLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuYXR0cmlidXRlcy51cmwgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfZWRpdG9yJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGV4dGFyZWEgPSAkZWxlbS5maW5kKCAndGV4dGFyZWEnICk7XG5cdFx0JGVsZW0uZmluZCggJyN3cG9uaW9uLXdwLWxpbmstcGlja2VyID4gYnV0dG9uJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCR0ZXh0YXJlYS52YWwoICcnICk7XG5cdFx0XHRpZiggIXdpbmRvdy53cExpbmsgKSB7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdHRpdGxlOiAkd3Bvbmlvbi50ZXh0KCAnd3BfbGlua19lcnJvcl90aXRsZScsICdXUCBMaW5rIEpTIExpYiBOb3QgRm91bmQnICksXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LndwTGluay5vcGVuKCAkdGV4dGFyZWEuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXG5cblx0XHQkdGV4dGFyZWEub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkZGF0YSA9IGpRdWVyeSggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkuaHRtbCggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkudmFsKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0aXRsZScgKS52YWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKS52YWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnVybCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfbGlua3MnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuaW1wb3J0ICR3cG9uaW9uX2RlYnVnIGZyb20gJy4uL2NvcmUvZGVidWcnO1xuXG4vKipcbiAqIFdQT25pb24gRGVwZW5kZW5jeSBIZWxwZXIgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBXUE9uaW9uIERlcGVuZGVuY3kgSGVscGVyIENsYXNzLlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udHh0XG5cdCAqIEBwYXJhbSAkY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBEZXBlbmRlbmN5IFdvcmtlci5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRkZXAgPSB0aGlzLm9wdGlvbiggJ2RlcGVuZGVuY3knICk7XG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVwLmNvbnRyb2xsZXIgKSB7XG5cdFx0XHRpZiggJGRlcC5jb250cm9sbGVyLmhhc093blByb3BlcnR5KCAka2V5ICkgJiYgJGRlcC5jb25kaXRpb24uaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiAkZGVwLnZhbHVlLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdGxldCAkY29udHJvbGxlciA9ICRkZXAuY29udHJvbGxlciBbICRrZXkgXSxcblx0XHRcdFx0XHQkY29uZGl0aW9uICA9ICRkZXAuY29uZGl0aW9uIFsgJGtleSBdLFxuXHRcdFx0XHRcdCR2YWx1ZSAgICAgID0gJGRlcC52YWx1ZSBbICRrZXkgXSxcblx0XHRcdFx0XHQkZmllbGQgICAgICA9ICdbZGF0YS1kZXBlbmQtaWQ9XCInICsgJGNvbnRyb2xsZXIgKyAnXCJdJztcblx0XHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZy5uZXN0YWJsZSApIHtcblx0XHRcdFx0XHRsZXQgJElOUFVUID0gdGhpcy5jb25maWcucGFyZW50LmZpbmQoICdbZGF0YS1kZXBlbmQtaWQ9JyArICRjb250cm9sbGVyICsgJ10nICk7XG5cdFx0XHRcdFx0aWYoICRJTlBVVC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JGZpZWxkID0gJ1tkYXRhLXdwb25pb24tanNpZD1cIicgKyAkd3Bvbmlvbi5maWVsZElEKCAkSU5QVVQgKSArICdcIl06aW5wdXQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmNyZWF0ZVJ1bGUoICRmaWVsZCwgJGNvbmRpdGlvbiwgJHZhbHVlICkgKTtcblx0XHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5pbmNsdWRlKCB0aGlzLmVsZW1lbnQgKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnRGVwZW5kZW5jeSc6ICRkZXAsICdOZXN0YWJsZSBEZXBlbmRlbmN5JzogdGhpcy5jb25maWcubmVzdGFibGUgfSApO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdH1cbn1cblxuIiwiLyogZ2xvYmFsIGFyZ3VtZW50czp0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZTp0cnVlICovXG4vKiBnbG9iYWwgdGlwcHk6dHJ1ZSAqL1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgalF1ZXJ5ICkgPT4ge1xuXHQvKipcblx0ICogV1BPbmlvbiBSZWxhdGVkIEZ1bmN0aW9ucy5cblx0ICovXG5cdCQuZm4uZXh0ZW5kKCB7XG5cdFx0LyoqXG5cdFx0ICogQW5pbWF0ZSBDU1MgUmVsYXRlZCBGdW5jdGlvbnMuXG5cdFx0ICovXG5cdFx0YW5pbWF0ZUNzczogZnVuY3Rpb24oIGFuaW1hdGlvbk5hbWUsIGNhbGxiYWNrICkge1xuXHRcdFx0bGV0IGFuaW1hdGlvbkVuZCA9ICggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRsZXQgYW5pbWF0aW9ucyA9IHtcblx0XHRcdFx0XHRhbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuXHRcdFx0XHRcdE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcblx0XHRcdFx0XHRNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Zm9yKCBsZXQgdCBpbiBhbmltYXRpb25zICkge1xuXHRcdFx0XHRcdGlmKCBlbC5zdHlsZVsgdCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYW5pbWF0aW9uc1sgdCBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApICk7XG5cblx0XHRcdHRoaXMuYWRkQ2xhc3MoICdhbmltYXRlZCAnICsgYW5pbWF0aW9uTmFtZSApLm9uZSggYW5pbWF0aW9uRW5kLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCggdGhpcyApLnJlbW92ZUNsYXNzKCAnYW5pbWF0ZWQgJyArIGFuaW1hdGlvbk5hbWUgKTtcblx0XHRcdFx0aWYoIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRjYWxsYmFjayggJCggdGhpcyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEEgQ3VzdG9tIFdyYXAgQ2xhc3MgVG8gSGFuZGxlIFRpcHB5IEluc3RhbmNlXG5cdFx0ICogQHBhcmFtICRhcmd1bWVudHNcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHR0aXBweTogZnVuY3Rpb24oICRhcmd1bWVudHMgKSB7XG5cdFx0XHRsZXQgdGlwcHlfaGVscGVyID0ge1xuXHRcdFx0XHRjcmVhdGVfaW5zdGFuY2U6IGZ1bmN0aW9uKCAkZWxlbSwgJGFyZ3VtZW50cyApIHtcblx0XHRcdFx0XHQkYXJndW1lbnRzID0gKCB0eXBlb2YgJGFyZ3VtZW50cyA9PT0gJ3VuZGVmaW5lZCcgKSA/IHt9IDogJGFyZ3VtZW50cztcblx0XHRcdFx0XHRpZiggJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdGxldCAkX2luc3RhbmNlX2lkID0gJ1RpcHB5JyArIHdpbmRvdy53cG9uaW9uLmNvcmUucmFuZF9pZCgpO1xuXHRcdFx0XHRcdFx0JGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnLCAkX2luc3RhbmNlX2lkICk7XG5cblx0XHRcdFx0XHRcdGxldCAkdGl0bGUgICAgICA9ICRlbGVtLmF0dHIoICd0aXRsZScgKTtcblx0XHRcdFx0XHRcdGxldCAkZGF0YV90aXBweSA9ICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5JyApO1xuXG5cdFx0XHRcdFx0XHRpZiggJHRpdGxlICYmICR0aXRsZSAhPT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgJGFyZ3VtZW50cy5jb250ZW50ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0XHQkYXJndW1lbnRzLmNvbnRlbnQgPSAkdGl0bGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYoICRkYXRhX3RpcHB5ICYmICRkYXRhX3RpcHB5ICE9PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0aWYoIHR5cGVvZiAkYXJndW1lbnRzLmNvbnRlbnQgPT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRcdCRhcmd1bWVudHMuY29udGVudCA9ICRkYXRhX3RpcHB5O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdID0gdGlwcHkoICRlbGVtWyAwIF0sICRhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldF9pbnN0YW5jZTogZnVuY3Rpb24oICRlbGVtICkge1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgJF9pbnN0YW5jZV9pZCA9ICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApO1xuXHRcdFx0XHRcdHJldHVybiAoIHVuZGVmaW5lZCAhPT0gd2luZG93WyAkX2luc3RhbmNlX2lkIF0gKSA/IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdIDogZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGlmKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dGlwcHlfaGVscGVyLmNyZWF0ZV9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICksICRhcmd1bWVudHMgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkc3RhdHVzID0gdGlwcHlfaGVscGVyLmNyZWF0ZV9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICksICRhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuICggdHJ1ZSA9PT0gJHN0YXR1cyApID8gdGlwcHlfaGVscGVyLmdldF9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICkgKSA6IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIEFuIEFjdGl2ZSBpbnN0YW5jZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRpcHB5X2dldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICRfaW5zdGFuY2VfaWQgPSBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKTtcblx0XHRcdHJldHVybiAoIHVuZGVmaW5lZCAhPT0gd2luZG93WyAkX2luc3RhbmNlX2lkIF0gKSA/IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdIDogZmFsc2U7XG5cdFx0fSxcblx0fSApO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEEgQWJzdHJhY3QgQ2xhc3MgSW5zdGFuY2UuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJGNvbnR4dFxuXHQgKiBAcmV0dXJucyB7e2FqYXgoKj0sICo9KTogKiwganNfZXJyb3IoKik6IHZvaWQsIGluaXRfZmllbGQoKj0sICopOiB2b2lkLCBzZXRfYXJncygqKTogKiwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGpzX2Vycm9yX2hhbmRsZXIoKj0pOiB2b2lkLCBpZCgpOiAqLCBwbHVnaW5faWQoKTogKiwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICosIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBvcHRpb25zKCk6ICosIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBpbml0KCksIHJlbG9hZCgpOiAqLCBtb2R1bGUoKTogKiwgc2V0X2NvbnR4dCgqKTogKiwgY29udHh0OiAqLCBlbGVtZW50OiAqLCBob29rOiAqLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICp9fCp8d2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3R9XG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9maWVsZCA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0sICRjb250eHQgKTtcblxuXHQvKipcblx0ICogSGFuZGxlcyBXUE9uaW9uIE5vdGljZXMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX25vdGljZSA9ICggJGVsZW0gKSA9PiB7XG5cdFx0aWYoICRlbGVtLmZpbmQoICcud3Bvbmlvbi1yZW1vdmUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdCRlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJF9lbCA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24tcmVtb3ZlJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkX2VsLnNsaWRlVXAoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX2VsLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdFx0cmV0dXJuICRlbGVtO1xuXHRcdH1cblxuXHRcdGxldCAkYXV0byA9ICRlbGVtLmF0dHIoICdkYXRhLWF1dG9jbG9zZScgKTtcblx0XHRpZiggJGF1dG8gKSB7XG5cdFx0XHQkYXV0byA9IHBhcnNlSW50KCAkYXV0byApO1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHQkZWxlbS5zbGlkZVVwKCAnc2xvdycsICgpID0+IHtcblx0XHRcdFx0XHQkZWxlbS5yZW1vdmUoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSwgJGF1dG8gKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEJhc2ljIFdQT25pb24gSlMgU2V0dXAuXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9zZXR1cCA9ICgpID0+IHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggd2luZG93Lndwb25pb24uY29yZS5zZXR0aW5nc19hcmdzICkgKSB7XG5cdFx0XHRsZXQgJGNvcmUgPSB3aW5kb3cud3Bvbmlvbi5jb3JlLndpbmRvd0FyZ3MoICd3cG9uaW9uX2NvcmUnLCBmYWxzZSApO1xuXHRcdFx0bGV0ICR0YW5zID0gd2luZG93Lndwb25pb24uY29yZS53aW5kb3dBcmdzKCAnd3Bvbmlvbl9pbDhuJywgZmFsc2UgKTtcblx0XHRcdGlmKCBmYWxzZSA9PT0gJGNvcmUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy53cG9uaW9uLmNvcmUuc2V0dGluZ3NfYXJncyAgICA9ICRjb3JlO1xuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS50ZXh0ICAgICAgICAgICAgID0gJHRhbnM7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLmRlYnVnX2luZm8gICAgICAgPSBudWxsO1xuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS5maWVsZF9kZWJ1Z19pbmZvID0gbnVsbDtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBXaXRoIEEgRmllbGQgQ2FsbGJhY2sgSG9vay5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEBwYXJhbSAkY2FsbGJhY2tcblx0ICogQHBhcmFtICRtb2R1bGVcblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkID0gKCAkdHlwZSwgJGNhbGxiYWNrLCAkbW9kdWxlID0gJycgKSA9PiB7XG5cdFx0JG1vZHVsZSA9ICggJycgPT09ICRtb2R1bGUgKSA/ICcnIDogJG1vZHVsZSArICdfJztcblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICR0eXBlLCAnd3Bvbmlvbl9jb3JlJywgKCAkZWxlbSApID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdCRjYWxsYmFjayggJGVsZW0gKTtcblx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBhcmd1bWVudHMsICcgXFxuJyArIGUgKyAnICBcXG5Gb3IgOiB3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICR0eXBlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiBVc2VkIG91dHNpZGUgb2YgV1BPbmlvbiBUbyBDcmVhdGVcblx0ICogQHBhcmFtICRpbml0X21ldGhvZFxuXHQgKiBAcGFyYW0gJG1ldGhvZHNcblx0ICogQHJldHVybnMge3tpbml0OiAqLCBuZXcoKTogJGNsYXNzLCBwcm90b3R5cGU6ICRjbGFzc319XG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9jcmVhdGVfZmllbGQgPSAoICRpbml0X21ldGhvZCwgJG1ldGhvZHMgPSBmYWxzZSApID0+IHtcblx0XHRsZXQgJG9yZ19jbGFzcyA9IHJlcXVpcmUoICcuLi9jb3JlL2ZpZWxkJyApLmRlZmF1bHQ7XG5cdFx0bGV0ICRjbGFzcyAgICAgPSBjbGFzcyBleHRlbmRzICRvcmdfY2xhc3Mge1xuXHRcdH07XG5cblx0XHQkY2xhc3MucHJvdG90eXBlLmluaXQgPSAkaW5pdF9tZXRob2Q7XG5cblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJG1ldGhvZHMgKSApIHtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1ldGhvZHMgKSB7XG5cdFx0XHRcdGlmKCAkbWV0aG9kcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdCRjbGFzcy5wcm90b3R5cGVbICRrZXkgXSA9ICRtZXRob2RzWyAka2V5IF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICRjbGFzcztcblx0fTtcblxuXHQvKipcblx0ICogVHJpZ2dlcnMgQSBGaWVsZCBKUyBGdW5jdGlvbiBUbyBSZW5kZXIgaXQgUHJvcGVybHlcblx0ICogQHBhcmFtICRmaWVsZF90eXBlXG5cdCAqIEBwYXJhbSAkYXJndW1lbnRcblx0ICogQHBhcmFtICRtb2R1bGVcblx0ICogQHBhcmFtICRsb2dfZXJyXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9pbml0X2ZpZWxkID0gKCAkZmllbGRfdHlwZSwgJGFyZ3VtZW50LCAkbW9kdWxlID0gJycsICRsb2dfZXJyID0gdHJ1ZSApID0+IHtcblx0XHQkbW9kdWxlID0gKCAnJyA9PT0gJG1vZHVsZSApID8gJycgOiAkbW9kdWxlICsgJ18nO1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5ob29rcy5oYXNBY3Rpb24oICd3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICRmaWVsZF90eXBlICkgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25faW5pdF8nICsgJG1vZHVsZSArICdmaWVsZF8nICsgJGZpZWxkX3R5cGUsICRhcmd1bWVudCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiggdHJ1ZSA9PT0gJGxvZ19lcnIgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdXUE9uaW9uIEZpZWxkIFR5cGUgOiAnICsgJGZpZWxkX3R5cGUgKyAnIEluaXQgRnVuY3Rpb24gTm90IEZvdW5kJywgJ1xcbkFjdGlvbiBVc2VkIDogd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkZmllbGRfdHlwZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIGpRdWVyeSApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuLyoqXG4gKiBJbWFnZSBQT1BVUCBWaWV3IENsYXNzLlxuICovXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSGFuZGxlcyBJbWFnZSBQT1BVUCBWaWV3LlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGltYWdlID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICkgKSApID8gdGhpcy5lbGVtZW50LmF0dHIoICdzcmMnICkgOiB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICk7XG5cdFx0c3dhbCgge1xuXHRcdFx0aW1hZ2VVcmw6ICRpbWFnZSxcblx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0YmFja2Ryb3A6IGByZ2JhKDAsMCwwLDAuNDQpYFxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3BvcHVwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyByYW5kX21kNSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG4vKipcbiAqIFdQIEVkaXRvciBIZWxwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIFdQIEVkaXRvciBIZWxwZXJcblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRtY2VfZWRpdG9yICA9IHRpbnlNQ0VQcmVJbml0Lm1jZUluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JHF1aWNrX3RhZ3MgID0gdGlueU1DRVByZUluaXQucXRJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRORVdfSUQgICAgICA9ICd3cG9uaW9uLXdwLWVkaXRvci0nICsgcmFuZF9tZDUoKSxcblx0XHRcdFx0JHRleHRBcmVhICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5jbG9uZSgpLFxuXHRcdFx0XHQkYWN0dWFsX0lEICAgPSAkdGV4dEFyZWEuYXR0ciggJ2lkJyApLFxuXHRcdFx0XHQkYWN0dWFsX2h0bWwgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoKSxcblx0XHRcdFx0JHJlZ2V4ICAgICAgID0gbmV3IFJlZ0V4cCggJGFjdHVhbF9JRCwgXCJnXCIgKTtcblx0XHRcdCRhY3R1YWxfaHRtbCAgICAgPSAkYWN0dWFsX2h0bWwucmVwbGFjZSggJHJlZ2V4LCAkTkVXX0lEICk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCggJGFjdHVhbF9odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLnBhcmVudCgpLmFwcGVuZCggJHRleHRBcmVhICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhOm5vdCgjJyArICRhY3R1YWxfSUQgKyAnKScgKS5yZW1vdmUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuYXR0ciggJ2lkJywgJE5FV19JRCApO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRtY2VfZWRpdG9yICkgKSB7XG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcblx0XHRcdFx0dGlueW1jZS5pbml0KCAkbWNlX2VkaXRvciApO1xuXHRcdFx0XHR0aW55TUNFLmV4ZWNDb21tYW5kKCAnbWNlQWRkRWRpdG9yJywgZmFsc2UsICcjJyArICRORVdfSUQgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkcXVpY2tfdGFncyApICkge1xuXHRcdFx0XHQkcXVpY2tfdGFncy5pZCA9ICRORVdfSUQ7XG5cdFx0XHRcdHF1aWNrdGFncyggJHF1aWNrX3RhZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBUb29sVGlwXG4gKi9cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBIYW5kbGUgRWFjaCBBbmQgRXZlcnkgU2luZ2xlIEZpZWxkIFRvb2xUaXAuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkZmlkICAgICAgICAgPSB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZmllbGQtanNpZCcgKTtcblx0XHRsZXQgJHRvb2x0aXBfa2V5ID0gZmFsc2U7XG5cdFx0aWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24taGVscCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cG9uaW9uLWhlbHAnO1xuXHRcdH0gZWxzZSBpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi13cmFwLXRvb2x0aXAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3JhcF90b29sdGlwJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJGZpZCArICd0b29sdGlwJztcblx0XHR9XG5cblx0XHRsZXQgJGFyZyA9ICggdHJ1ZSA9PT0gJHdwb25pb24udmFsaWRfanNvbiggJGZpZCApICkgPyBKU09OLnBhcnNlKCAkZmlkICkgOiB0aGlzLm9wdGlvbiggJHRvb2x0aXBfa2V5LCBmYWxzZSApO1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSB7XG5cdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcblx0XHRcdGNhbkZldGNoOiB0cnVlXG5cdFx0fTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGFyZyApIHtcblx0XHRcdGxldCAkY2xhc3NUb0NoZWNrID0gWyAnZGF0YS10aXBweScsICdkYXRhLXRpcHB5LWFyZ3MnLCAndGlwcHktYXJncycgXTtcblx0XHRcdGxldCAkZm91bmQgICAgICAgID0gZmFsc2U7XG5cdFx0XHRmb3IoIGxldCAkayBpbiAkY2xhc3NUb0NoZWNrICkge1xuXHRcdFx0XHRsZXQgJGF0dHIgPSB0aGlzLmVsZW1lbnQuYXR0ciggJGNsYXNzVG9DaGVja1sgJGsgXSApO1xuXHRcdFx0XHRpZiggJGF0dHIgKSB7XG5cdFx0XHRcdFx0aWYoICR3cG9uaW9uLnZhbGlkX2pzb24oICRhdHRyICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJnICAgPSBKU09OLnBhcnNlKCAkYXR0ciApO1xuXHRcdFx0XHRcdFx0JGZvdW5kID0gJGNsYXNzVG9DaGVja1sgJGsgXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAkYXR0ciwgZmFsc2UgKSApIHtcblx0XHRcdFx0XHRcdCRhcmcgICA9IHRoaXMub3B0aW9uKCAkYXR0ciwgZmFsc2UgKTtcblx0XHRcdFx0XHRcdCRmb3VuZCA9ICRjbGFzc1RvQ2hlY2tbICRrIF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggJGFyZyApIHtcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcblx0XHRcdGlmKCAkYXJnLmltYWdlICE9PSB1bmRlZmluZWQgJiYgJGFyZy5pbWFnZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdGxldCAkaW1hZ2UgICAgICAgICAgPSAkYXJnLmltYWdlO1xuXHRcdFx0XHQkYXJnLmludGVyYWN0aXZlICAgID0gdHJ1ZTtcblx0XHRcdFx0JGFyZy5jb250ZW50ICAgICAgICA9ICdMb2FkaW5nLi4uJztcblx0XHRcdFx0Ly8kYXJnLmh0bWwgICAgICAgICAgID0gJyN3cG90cGltZyc7XG5cdFx0XHRcdCRhcmcudXBkYXRlRHVyYXRpb24gPSAyMDAwO1xuXHRcdFx0XHQkYXJnLm9uU2hvdyAgICAgICAgID0gYXN5bmMgZnVuY3Rpb24oIHRpcCApIHtcblx0XHRcdFx0XHRpZiggc3RhdGUuaXNGZXRjaGluZyB8fCAhc3RhdGUuY2FuRmV0Y2ggKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoICAgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCAkaW1hZ2UgKTtcblx0XHRcdFx0XHRcdGNvbnN0IGJsb2IgICAgID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXHRcdFx0XHRcdFx0Y29uc3QgdXJsICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdFx0XHRpZiggdGlwLnN0YXRlLmlzVmlzaWJsZSApIHtcblx0XHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICc8ZGl2IHN0eWxlPVwibWluLXdpZHRoOjI1cHg7bWluLWhlaWdodDoyNXB4O1wiPjxpbWcgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1wiIHNyYz1cIicgKyB1cmwgKyAnXCIvPjwvZGl2PicgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoIGBGZXRjaCBmYWlsZWQuICR7ZX1gICk7XG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcub25IaWRkZW4gICAgICAgPSAoIHRpcCApID0+IHtcblx0XHRcdFx0XHRzdGF0ZS5jYW5GZXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICdMb2FkaW5nLi4uJyApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLnBvcHBlck9wdGlvbnMgID0ge1xuXHRcdFx0XHRcdG1vZGlmaWVyczoge1xuXHRcdFx0XHRcdFx0cHJldmVudE92ZXJmbG93OiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aGlkZToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYXJnID0ge307XG5cdFx0fVxuXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmcuYXBwZW5kVG8gKSApIHtcblx0XHRcdCRhcmcuYXBwZW5kVG8gPSAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyB0aGlzLmlkKCkgKyAnXScgKVsgMCBdO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0ZGVsZXRlICRhcmcuaW1hZ2U7XG5cdFx0ZGVsZXRlICRhcmcuaWNvbjtcblx0XHR0aGlzLmVsZW1lbnQudGlwcHkoIHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcsICR0b29sdGlwX2tleSApICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0b29sdGlwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJyNidWxrX2VkaXQnLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGZpbmFsX2FyZ3MgPSB7IHBvc3RfaWRzOiBbXSB9LFxuXHRcdFx0XHQkYnVsa19lZGl0ICA9ICQoICcjYnVsay1lZGl0JyApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcjYnVsay10aXRsZXMnICkuY2hpbGRyZW4oKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JGZpbmFsX2FyZ3MucG9zdF9pZHMucHVzaCggJCggdGhpcyApLmF0dHIoICdpZCcgKS5yZXBsYWNlKCAvXih0dGxlKS9pLCAnJyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRidWxrX2VkaXQuZmluZCggJy53cG9uaW9uLXF1aWNrLWVkaXQtZmllbGRzZXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJCggdGhpcyApLnNlcmlhbGl6ZU9iamVjdCgpLCAkZmluYWxfYXJncyApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJ3NhdmUtYnVsay1lZGl0Jywge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0YXN5bmM6IGZhbHNlLFxuXHRcdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0XHRcdGRhdGE6ICRmaW5hbF9hcmdzLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBXUE9uaW9uX0d1dHRlbmJlcmcge1xuXHRjb25zdHJ1Y3RvciggJGlkID0gJycsICRhcmdzID0ge30gKSB7XG5cdFx0dGhpcy5pZCAgID0gJGlkO1xuXHRcdHRoaXMuYXJncyA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmdzICk7XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5zYXZlID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRoaXMuYXJncy5zYXZlID0gKCBibG9jayApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2F2ZV9oYW5kbGVyKCBibG9jayApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5lZGl0ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRoaXMuYXJncy5lZGl0ID0gKCBibG9jayApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWRpdF9oYW5kbGVyKCBibG9jayApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR3aW5kb3cud3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlKCB0aGlzLmlkLCB0aGlzLmFyZ3MgKTtcblx0fVxuXG5cdHNhdmVfaGFuZGxlciggYmxvY2sgKSB7XG5cdH1cblxuXHRlZGl0X2hhbmRsZXIoIGJsb2NrICkge1xuXHRcdGxldCBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcblxuXHRcdGxldCAkX3Bvc3RpZHMgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5KCBwYXJzZUludCggalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS52YWwoKSApICk7XG5cdFx0YmxvY2suYXR0cmlidXRlcy5wb3N0X2lkID0gJF9wb3N0aWRzO1xuXHRcdGxldCBibG9ja19pZCAgICAgICAgICAgICA9IGJsb2NrLmF0dHJpYnV0ZXMuYmxvY2tfaWQgPSBibG9jay5hdHRyaWJ1dGVzLmJsb2NrX2lkIHx8IGJsb2NrLmNsaWVudElkO1xuXHRcdGxldCAkcmVtb3RlICAgICAgICAgICAgICA9IGVsKCAnZm9ybScsIHtcblx0XHRcdGNsYXNzTmFtZTogJ3dwb25pb24tYmxvY2stZ3JvdXAtY29udGVudCcsXG5cdFx0XHQnZGF0YS1ibG9jay1pZCc6IGJsb2NrX2lkLFxuXHRcdH0sIFtcblx0XHRcdGVsKCB3aW5kb3cud3AuY29tcG9uZW50cy5TZXJ2ZXJTaWRlUmVuZGVyLCB7XG5cdFx0XHRcdGJsb2NrOiB0aGlzLmlkLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0cG9zdF9pZDogJF9wb3N0aWRzLFxuXHRcdFx0XHRcdGJsb2NrX2lkOiBibG9ja19pZCxcblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0XSApO1xuXG5cblx0XHRsZXQgY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzLnN0eWxlICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGlmKCB0aGlzLmFyZ3Muc3R5bGUgPT09ICdkZWZhdWx0JyApIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCggZWwoICdkaXYnLCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnYWNmLWJsb2NrLWdyb3VwLWhlYWRpbmcnLFxuXHRcdFx0XHR9LCBbXG5cdFx0XHRcdFx0ZWwoICdzcGFuJywge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnZGFzaGljb25zIGRhc2hpY29ucy0nICsgdGhpcy5hcmdzLmljb25cblx0XHRcdFx0XHR9ICksXG5cdFx0XHRcdFx0JyAnLFxuXHRcdFx0XHRcdHRoaXMuYXJncy50aXRsZSxcblx0XHRcdFx0XSApICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1ibG9jay1pZD1cIicgKyBibG9ja19pZCArICdcIl0nO1xuXG5cdFx0aWYoIGpRdWVyeSggc2VsZWN0b3IgKS5sZW5ndGggPCAxICkge1xuXHRcdH1cblxuXG5cdFx0LyppZiggJCggc2VsZWN0b3IgKS5sZW5ndGggPCAxICkge1xuXHRcdFx0JCggZG9jdW1lbnQgKS5vbiggJ2FjYl9zYXZlX2ZpZWxkcycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdHJ5VXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoIGJsb2NrLmlzU2VsZWN0ZWQgfHwgJCggc2VsZWN0b3IgKS5pcyggJzpob3ZlcicgKSApIHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCggYmxvY2sudXBkYXRlVGltZW91dCApO1xuXHRcdFx0XHRcdFx0YmxvY2sudXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoIHRyeVVwZGF0ZSwgNTAwICk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YmxvY2suc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0YWNmX2ZpZWxkczogYWNmLnNlcmlhbGl6ZSggJCggc2VsZWN0b3IgKSApWyAnYWNmJyBdLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCB0cnlVcGRhdGUsIDI1MCApO1xuXHRcdFx0fSApO1xuXHRcdH0qL1xuXHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdC8vICAgYWNmLmRvX2FjdGlvbigncmVhZHknLCAkKCdbZGF0YS1ibG9jay1pZD1cIicgKyBibG9ja19pZCArICdcIl0nKSk7XG5cdFx0Ly8gfSwgNTAwKTtcblxuXHRcdGNoaWxkcmVuLnB1c2goICRyZW1vdGUgKTtcblxuXHRcdHJldHVybiBlbCggJ2RpdicsIHsgY2xhc3NOYW1lOiAnd3Bvbmlvbi1ibG9jay1ncm91cC13cmFwcGVyJyB9LCBjaGlsZHJlbiApO1xuXG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0aWYoICF3aW5kb3cud3AgfHwgIXdpbmRvdy53cC5ibG9ja3MgfHwgIXdpbmRvdy53cC5lZGl0b3IgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdFx0Ly9sZXQgJGJsb2NrcyAgICAgPSB3aW5kb3cud3AuYmxvY2tzO1xuXHRcdFx0bGV0ICR3cG9fYmxvY2tzID0gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ3V0dGVuYmVyZ19ibG9ja3MnICk7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICR3cG9fYmxvY2tzICkgJiYgd2luZG93Lndwb25pb24uXy5pc0FycmF5KCAkd3BvX2Jsb2NrcyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICR3cG9fYmxvY2tzICkge1xuXHRcdFx0XHRcdGlmKCAkd3BvX2Jsb2Nrcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdFx0bmV3IFdQT25pb25fR3V0dGVuYmVyZyggJGtleSwgJHdwb19ibG9ja3NbICRrZXkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0LyoqXG5cdCAqIEZpeGVzIE1lZGlhIFBPUFVQIE1vZGFsIFRvIFdvcmsgV2l0aCBXUG9uaW9uLlxuXHQgKi9cblx0Y29uc3QgZml4X21lZGlhX3VpID0gKCkgPT4ge1xuXHRcdGxldCAkdGFibGUgID0galF1ZXJ5KCAnLmNvbXBhdC1hdHRhY2htZW50LWZpZWxkcycgKSxcblx0XHRcdCRmaWVsZHMgPSAkdGFibGUuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKTtcblx0XHQkZmllbGRzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG5cdFx0XHQkdGFibGUuYmVmb3JlKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5odG1sKCkgKTtcblx0XHR9ICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9zZXR1cCgpO1xuXHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkdGFibGUucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHR9O1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0aWYoICQoICcuY29tcGF0LWF0dGFjaG1lbnQtZmllbGRzJyApLmxlbmd0aCA+IDAgJiYgJCggJ2JvZHknICkuaGFzQ2xhc3MoICdwb3N0LXR5cGUtYXR0YWNobWVudCcgKSApIHtcblx0XHRcdGZpeF9tZWRpYV91aSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiggdHlwZW9mIHdwLm1lZGlhICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd3AubWVkaWEuZnJhbWVzLmJyb3dzZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdHdwLm1lZGlhLmZyYW1lcy5icm93c2Uub24oICdlZGl0OmF0dGFjaG1lbnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0Zml4X21lZGlhX3VpKCk7XG5cdFx0XHRcdFx0d3AubWVkaWEuZnJhbWVzLmVkaXQub24oICdhdHRhY2htZW50OmNvbXBhdDpyZWFkeScsICgpID0+IGZpeF9tZWRpYV91aSgpICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qKlxuICogV1BPbmlvbiBNZXRhYm94IE1vZHVsZSBIYW5kbGVyLlxuICovXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHQvKipcblx0ICogSW5pdHMgTW9kdWxlLlxuXHQgKi9cblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5tZW51KCk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnaDIuYWpheC1jb250YWluZXIgYnV0dG9uJywgdGhpcy5zYXZlX2hhbmRsZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIE1ldGFib3ggTWVudSdzXG5cdCAqL1xuXHRtZW51KCkge1xuXHRcdGxldCAkZWxlbSA9IHRoaXMuZWxlbWVudDtcblx0XHQkZWxlbS5vbiggJ2NsaWNrJywgJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSBhJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdkcm9wZG93bicgKSApIHtcblx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5pcyggJzp2aXNpYmxlJyApICkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSB1bCcgKS5zbGlkZVVwKCAnZmFzdCcgKTtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJGhyZWYgICAgICAgICAgID0gd2luZG93Lndwb25pb24uaGVscGVyLnVybF9wYXJhbXMoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWhyZWYnICkgKSxcblx0XHRcdFx0XHQkcGFyZW50ICAgICAgICAgPSAnd3Bvbmlvbi10YWItJyArICRocmVmWyAncGFyZW50LWlkJyBdLFxuXHRcdFx0XHRcdCRzZWN0aW9uICAgICAgICA9ICggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgKSA/ICRwYXJlbnQgKyAnLScgKyAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gOiBmYWxzZSxcblx0XHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tcGFyZW50LXdyYXBzJyApLFxuXHRcdFx0XHRcdCRjdXJyZW50ICAgICAgICA9ICRlbGVtLmZpbmQoICdkaXYjJyArICRwYXJlbnQgKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdCRwYXJlbnRfYWN0aXZlcy5oaWRlKCk7XG5cblx0XHRcdFx0aWYoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICYmICRocmVmWyAncGFyZW50LWlkJyBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICcgZGl2IycgKyAkc2VjdGlvbiApLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRjdXJyZW50LnNob3coKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGEuYWN0aXZlICcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZSAnICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51ID4gbGkgPiBhJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGFbZGF0YS13cG9uaW9uLWlkPVwid3Bvbmlvbl9tZW51XycgKyAkaHJlZlsgJ3BhcmVudC1pZCcgXSArICdcIl0nIClcblx0XHRcdFx0XHQgLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEFqYXggU2F2ZSBIYW5kbGVyLlxuXHQgKiBAcGFyYW0gZVxuXHQgKi9cblx0c2F2ZV9oYW5kbGVyKCBlICkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHBhcmVudCA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0JGJhc2UgICA9ICRwYXJlbnQucGFyZW50KCkucGFyZW50KCksXG5cdFx0XHQkaGlkZGVuID0gJHBhcmVudC5maW5kKCAnZGl2Lndwb25pb24tbWV0YWJveC1zZWN1cmUtZGF0YScgKTtcblxuXHRcdCRiYXNlLmJsb2NrKCB7IG1lc3NhZ2U6IG51bGwsIG92ZXJsYXlDU1M6IHsgYmFja2dyb3VuZDogJyMwMDAnLCBvcGFjaXR5OiAwLjcgfSB9ICk7XG5cblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXHRcdGxldCAkZmllbGRzID0gJHBhcmVudC5wYXJlbnQoKS5maW5kKCAnOmlucHV0JyApO1xuXHRcdGxldCAkdmFsdWVzID0gJGZpZWxkcy5zZXJpYWxpemUoKTtcblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblxuXHRcdCR3cG9uaW9uLmFqYXgoICdzYXZlX21ldGFib3gnLCB7IGRhdGE6ICR2YWx1ZXMgfSwgZnVuY3Rpb24oIHJlcyApIHtcblx0XHRcdCRiYXNlLmh0bWwoIHJlcyApO1xuXHRcdFx0JGJhc2UudW5ibG9jaygpO1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRiYXNlLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XG5cdCQoIGZ1bmN0aW9uKCkge1xuXHRcdCQoICdkaXYucG9zdGJveC53cG9uaW9uLW1ldGFib3gnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9NZXRhYm94X01vZHVsZSggJCggdGhpcyApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG4vKipcbiAqIFdQT25pb24gUXVpY2sgRWRpdCBNb2R1bGUgSGFuZGxlci5cbiAqL1xuY2xhc3MgV1BPbmlvbl9RdWlja19FZGl0IGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHQvKipcblx0ICogTW9kdWxlIEluaXQuXG5cdCAqL1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLnBvc3RfaWQgPSB0aGlzLmNvbnR4dDtcblx0XHRsZXQgJGlkICAgICAgPSAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKSArICdfJyArIHRoaXMucG9zdF9pZDtcblx0XHR0aGlzLnZhbHVlcyAgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRpZCwgZmFsc2UgKTtcblxuXHRcdGlmKCB0aGlzLnZhbHVlcy5odG1sICkge1xuXHRcdFx0dGhpcy52YWx1ZXMuaHRtbCA9IGpRdWVyeSggdGhpcy52YWx1ZXMuaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmh0bWwoIHRoaXMudmFsdWVzLmh0bWwuZmluZCggJz4gZGl2JyApICk7XG5cdFx0fVxuXG5cdFx0d2luZG93Lndwb25pb25fZmllbGQoIHRoaXMuZWxlbWVudCApLnJlbG9hZCgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdGxldCAkbGlzdCA9ICQoICcjdGhlLWxpc3QnICk7XG5cdFx0aWYoICRsaXN0Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkbGlzdC5vbiggJ2NsaWNrJywgJy5lZGl0aW5saW5lJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBwb3N0X2lkID0galF1ZXJ5KCB0aGlzICkuY2xvc2VzdCggJ3RyJyApLmF0dHIoICdpZCcgKTtcblx0XHRcdFx0cG9zdF9pZCAgICAgPSBwb3N0X2lkLnJlcGxhY2UoICdwb3N0LScsICcnICk7XG5cdFx0XHRcdCQoICd0ciNlZGl0LScgKyBwb3N0X2lkICkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRuZXcgV1BPbmlvbl9RdWlja19FZGl0KCBqUXVlcnkoIHRoaXMgKSwgcG9zdF9pZCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdGlvbiBmcm9tICcuLi9jb3JlL3ZhbGlkYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93ICkgPT4ge1xuXHRqUXVlcnkoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHQvKipcblx0XHQgKiBHbG9iYWwgVmFyaWFibGVcblx0XHQgKiB3aW5kb3cud3Bvbmlvbi52YyAvIHdpbmRvdy53cG9uaW9uX3ZjXG5cdFx0ICogQHR5cGUge3tmaWVsZHM6IHthYnN0cmFjdDogKHtuZXcoKj0sICo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIG5ldygqPSwgKj0sICo9KToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfSwgbmV3KCo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIHByb3RvdHlwZToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfX18Kil9fX1cblx0XHQgKi9cblx0XHR3aW5kb3cud3Bvbmlvbi52YyA9IHdpbmRvdy53cG9uaW9uX3ZjID0ge1xuXHRcdFx0ZmllbGRzOiB7XG5cdFx0XHRcdGFic3RyYWN0OiByZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvZmllbGQnICkuZGVmYXVsdCxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFNpbXBsZSBGdW5jdGlvbiBUbyBJbml0IFdQb25pb24gVkMgTW9kdWxlLlxuXHRcdCAqL1xuXHRcdHdpbmRvdy53cG9uaW9uX3ZjX2luaXQgPSAoKSA9PiB7XG5cdFx0XHRsZXQgJGVsZW1lbnQgPSBqUXVlcnkoICcud3Bvbmlvbi1mcmFtZXdvcmsud3Bvbmlvbi1tb2R1bGUtdmMnICk7XG5cblx0XHRcdGlmKCAkZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHR3cG9uaW9uX3NldHVwKCk7XG5cblx0XHRcdFx0JGVsZW1lbnQuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoIGpRdWVyeSggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fdmNfZmllbGQoIGpRdWVyeSggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSGFuZGxlcyBXUE9uaW9uIFZDIEZpZWxkIERlcGVuZGVuY3kuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkZWxlbWVudCwge30sIHtcblx0XHRcdFx0XHRsb2c6IGZhbHNlLFxuXHRcdFx0XHRcdHNob3c6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGhpZGU6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZVVwKCk7XG5cdFx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLmFkZENsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBIYW5kbGVzIFdQT25pb24gVkMgRmllbGQgVmFsaWRhdGlvbnMuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9WYWxpZGF0aW9uKCBqUXVlcnkoICcud3BiX2VkaXRfZm9ybV9lbGVtZW50cycgKSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBXUG9uaW9uIFZDIEZpZWxkIENsYXNzIEluc3N0YW5jZSBDcmVhdG9yLlxuXHRcdCAqIEBwYXJhbSAkZWxlbVxuXHRcdCAqIEBwYXJhbSAkY29udHh0XG5cdFx0ICogQHJldHVybnMge3dpbmRvdy53cG9uaW9uLnZjLmZpZWxkcy5hYnN0cmFjdH1cblx0XHQgKi9cblx0XHR3aW5kb3cud3Bvbmlvbl92Y19maWVsZCA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi52Yy5maWVsZHMuYWJzdHJhY3QoICRlbGVtLCAkY29udHh0ICk7XG5cblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiBVc2VkIG91dHNpZGUgb2YgV1BPbmlvbiBUbyBDcmVhdGUgVkMgRmllbGRcblx0XHQgKiBAcGFyYW0gJGluaXRfbWV0aG9kXG5cdFx0ICogQHBhcmFtICRtZXRob2RzXG5cdFx0ICogQHJldHVybnMge3tpbml0OiAqLCBuZXcoKTogJGNsYXNzLCBwcm90b3R5cGU6ICRjbGFzc319XG5cdFx0ICovXG5cdFx0d2luZG93Lndwb25pb25fY3JlYXRlX3ZjX2ZpZWxkID0gKCAkaW5pdF9tZXRob2QsICRtZXRob2RzID0gZmFsc2UgKSA9PiB7XG5cdFx0XHRsZXQgJG9yZ19jbGFzcyA9IHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9maWVsZCcgKS5kZWZhdWx0O1xuXHRcdFx0bGV0ICRjbGFzcyAgICAgPSBjbGFzcyBleHRlbmRzICRvcmdfY2xhc3Mge1xuXHRcdFx0fTtcblxuXHRcdFx0JGNsYXNzLnByb3RvdHlwZS5pbml0ID0gJGluaXRfbWV0aG9kO1xuXG5cdFx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJG1ldGhvZHMgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkbWV0aG9kcyApIHtcblx0XHRcdFx0XHRpZiggJG1ldGhvZHMuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdCRjbGFzcy5wcm90b3R5cGVbICRrZXkgXSA9ICRtZXRob2RzWyAka2V5IF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGNsYXNzO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBMb2FkcyBBbGwgUmVxdWlyZWQgRmllbGRzLlxuXHRcdCAqL1xuXHRcdHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9zaW5nbGUtdmFsdWUnICk7XG5cdFx0cmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL2FsbC1maWVsZHMnICk7XG5cdFx0cmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL3NlbGVjdCcgKTtcblx0XHRyZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvY2hlY2tib3gtcmFkaW8nICk7XG5cdH0gKTtcbn0gKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5pc192Y19wYXJhbV9lbGVtKCkgKSB7XG5cdFx0XHR0aGlzLmlucHV0X2NoYW5nZSgpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5pbnB1dF9jaGFuZ2UoKSApO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcsICgpID0+IHRoaXMuaW5wdXRfY2hhbmdlKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24gSG9va3MgV2l0aCA6aW5wdXQgY2hhbmdlIGV2ZW4gYW5kIHRyaWdnZXJzIHNhdmUgZnVuY3Rpb24uXG5cdCAqL1xuXHRpbnB1dF9jaGFuZ2UoKSB7XG5cdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmUoIHRoaXMuaW5wdXRfZGF0YSgpLCAnc29ydGVyX3ZhbHVlcycgKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2tleXZhbHVlX3BhaXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2JhY2tncm91bmQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3dwX2xpbmtzJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdmaWVsZHNldCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYWNjb3JkaW9uJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdncm91cCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnanF1ZXJ5X3RhYicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc29ydGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjbG9uZV9lbGVtZW50JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdmb250X3NlbGVjdG9yJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdkYXRlX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcbn0gKSggd2luZG93ICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX1ZDX0ZpZWxkIGZyb20gJy4vZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fVkNfRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmlzX3ZjX3BhcmFtX2VsZW0oKSApIHtcblx0XHRcdGlmKCB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWVsZW1lbnQtcmFkaW8nICkgJiYgMCA9PT0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1jaGVja2JveC1yYWRpby1ncm91cCcgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGUoKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAoIHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkubGVuZ3RoID4gMSApICkge1xuXHRcdFx0XHR0aGlzLmhhbmRsZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICgpID0+IHRoaXMuaGFuZGxlKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0XHRcdGxldCAkdmFsICA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuYXR0ciggJ3ZhbHVlJyApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmF0dHIoICdkYXRhLW9yZ3ZhbCcsICR2YWwgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlzLmhhbmRsZV9zaW5nbGVfY2hhbmdlKCBqUXVlcnkoIHRoaXMgKSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHRoaXMuaGFuZGxlX3NpbmdsZV9jaGFuZ2UoIGpRdWVyeSggdGhpcyApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBTaW5nbGUgQ2hlY2tib3ggQ2hhbmdlIEV2ZW50cy5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRoYW5kbGVfc2luZ2xlX2NoYW5nZSggJGVsZW0gKSB7XG5cdFx0aWYoICRlbGVtLmlzKCAnOmNoZWNrZWQnICkgKSB7XG5cdFx0XHQkZWxlbS52YWwoICRlbGVtLmF0dHIoICdkYXRhLW9yZ3ZhbCcgKSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZWxlbS52YWwoICdmYWxzZScgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBNdWx0aXBsZSBDaGVja2JveGVzXG5cdCAqL1xuXHRoYW5kbGUoKSB7XG5cdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NoZWNrYm94X3JhZGlvJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV9zZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BhbGV0dGUnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N3aXRjaGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xufSApKCB3aW5kb3cgKTtcbiIsIi8qIGdsb2JhbCB3cG9uaW9uX2luaXRfZmllbGQ6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vLi4vY29yZS9maWVsZCc7XG5cbmNvbnN0IGJhc2U2NF9lbmNvZGUgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5iYXNlNjRfZW5jb2RlO1xuY29uc3QgcmF3dXJsZW5jb2RlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLnJhd3VybGVuY29kZTtcblxuLyoqXG4gKiBDdXN0b20gVkMgQWJzdHJhY3QgRmllbGQgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udGV4dFxuXHQgKiBAcGFyYW0gJGNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQsICRjb25maWcgPSB7fSApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgVmlzdWFsIENvbXBvc2VyIFBhcmFtIG5hbWUuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IHBhcmFtX25hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5kYXRhKCAncGFyYW0tbmFtZScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgQW5kIENvbnZlcnRzIFZhbHVlIFRvIFNhdmUgaW50byBWQy5cblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHBhcmFtICR0eXBlXG5cdCAqL1xuXHRzYXZlKCAkc2F2ZV9kYXRhLCAkdHlwZSApIHtcblx0XHRpZiggJHNhdmVfZGF0YSA9PT0gbnVsbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgJHZhbHVlID0gJyc7XG5cblx0XHRpZiggJHNhdmVfZGF0YSAhPT0gJycgKSB7XG5cdFx0XHRpZiggdHlwZW9mICRzYXZlX2RhdGEgPT09ICdvYmplY3QnICYmICR0eXBlID09PSAnYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLnNpbXBsZV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdrZXlfdmFsdWVfYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLmtleV92YWx1ZV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdrZXlfdmFsdWVfbXVsdGlfYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLmtleV92YWx1ZV9tdWx0aV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdzb3J0ZXJfdmFsdWVzJyApIHtcblx0XHRcdFx0JHZhbHVlID0gdGhpcy5zb3J0ZXJfdmFsdWVzKCAkc2F2ZV9kYXRhICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMudmNfc2F2ZSggJHZhbHVlICk7XG5cdH1cblxuXHQvKipcblx0ICogU2F2ZXMgR2l2ZW4gVmFsdWUgVG8gVmlzdWFsIENvbXBvc2VyLlxuXHQgKiBAcGFyYW0gJHBhcmFtX25hbWVcblx0ICogQHBhcmFtICR2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHZjX3NhdmUoICR2YWx1ZSwgJHBhcmFtX25hbWUgPSB0aGlzLnBhcmFtX25hbWUgKSB7XG5cdFx0bGV0ICRrZXkgPSAnZGl2I3dwb25pb24tdmMtc2V0dGluZ3MnO1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoICc8ZGl2IGlkPVwid3Bvbmlvbi12Yy1zZXR0aW5nc1wiIGNsYXNzPVwiaGlkZGVuXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO3Zpc2liaWxpdHk6IGhpZGRlbjtcIiA+PC9kaXY+JyApO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdGxldCAkcGFyZW50ID0gdGhpcy5lbGVtZW50LmZpbmQoICRrZXkgKTtcblx0XHRcdGlmKCAkcGFyZW50LmZpbmQoICc+ICMnICsgJHBhcmFtX25hbWUgKyAnLndwYl92Y19wYXJhbV92YWx1ZScgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKCBqUXVlcnkoICc8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgaWQ9XCInICsgJHBhcmFtX25hbWUgKyAnXCIgbmFtZT1cIicgKyAkcGFyYW1fbmFtZSArICdcIiBjbGFzcz1cIndwYl92Y19wYXJhbV92YWx1ZVwiIC8+JyApICk7XG5cdFx0XHR9XG5cblx0XHRcdCRwYXJlbnQuZmluZCggJz4gIycgKyAkcGFyYW1fbmFtZSArICcud3BiX3ZjX3BhcmFtX3ZhbHVlJyApLnZhbCggJHZhbHVlICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIEFuIEFycmF5IEludG8gU3RyaW5nIFVzaW5nICxcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzaW1wbGVfYXJyYXkoICRzYXZlX2RhdGEgKSB7XG5cdFx0cmV0dXJuICRzYXZlX2RhdGEuam9pbiggJywnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgQW4gQXJyYXkgSW50byBLZXl2YWx1ZSBhcyBiZWxvd1xuXHQgKiBrZXk6dmFsdWV8a2V5Mjp2YWx1ZTJcblx0ICpcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGtleV92YWx1ZV9hcnJheSggJHNhdmVfZGF0YSApIHtcblx0XHRsZXQgJHIgPSBbXTtcblx0XHRqUXVlcnkuZWFjaCggJHNhdmVfZGF0YSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdGxldCAkcyA9ICRrICsgJzonICsgJHY7XG5cdFx0XHQkci5wdXNoKCAkcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gJHIuam9pbiggJ3wnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgTXVsdGlwbGUgQXJyYXkgYXMgYmVsb3dcblx0ICoga2V5OnZhbHVlLHZhbHVlMnxrZXkyOnZhbHVlMyx2YWx1ZTRcblx0ICpcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGtleV92YWx1ZV9tdWx0aV9hcnJheSggJHNhdmVfZGF0YSApIHtcblx0XHRsZXQgJHIgPSBbXTtcblx0XHRqUXVlcnkuZWFjaCggJHNhdmVfZGF0YSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdGlmKCB0eXBlb2YgJHYgPT09ICdvYmplY3QnICkge1xuXHRcdFx0XHQkdiA9ICR2LmpvaW4oICcsJyApO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICRzID0gJGsgKyAnOicgKyAkdjtcblx0XHRcdCRyLnB1c2goICRzICk7XG5cdFx0fSApO1xuXHRcdHJldHVybiAkci5qb2luKCAnfCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJHNhdmVfZGF0YVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHNvcnRlcl92YWx1ZXMoICRzYXZlX2RhdGEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZW5jb2RlX2NvbnRlbnQoIEpTT04uc3RyaW5naWZ5KCAkc2F2ZV9kYXRhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFbmNvZGVzIFN0cmluZyBJbnRvIEJhc2U2NC5cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqL1xuXHRlbmNvZGVfY29udGVudCggJGRhdGEgKSB7XG5cdFx0cmV0dXJuIGJhc2U2NF9lbmNvZGUoIHJhd3VybGVuY29kZSggJGRhdGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBnaXZlbiBlbGVtZW50IGlzIGhvb2tlZCBUbyBWaXN1YWwgQ29tcG9zZXIuXG5cdCAqIEBwYXJhbSAkcGFyZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0aXNfdmNfcGFyYW1fZWxlbSggJHBhcmVudCA9IHRoaXMuZWxlbWVudCApIHtcblx0XHRpZiggJHBhcmVudC5kYXRhKCAncGFyYW0tbmFtZScgKSA9PT0gdW5kZWZpbmVkIHx8ICRwYXJlbnQuZGF0YSggJ3BhcmFtLW5hbWUnICkgPT09ICcnICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBTaW5nbGUgRmllbGQuXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGluaXRfc2luZ2xlX2ZpZWxkKCAkdHlwZSwgJGVsZW0gKSB7XG5cdFx0d3Bvbmlvbl9pbml0X2ZpZWxkKCAkdHlwZSwgJGVsZW0sICd2YycsIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgSW5wdXQgVmFsdWVzIEludG8gSlMvUEhQIE9iamVjdC9BcnJheSBhbmQgcmV0dXJucyBpdC5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRpbnB1dF9kYXRhKCkge1xuXHRcdGxldCAkZGF0YSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0Om5vdCgud3BiX3ZjX3BhcmFtX3ZhbHVlKScgKS5zZXJpYWxpemVPYmplY3QoKTtcblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRkYXRhWyB0aGlzLnBhcmFtX25hbWUgXSApICkge1xuXHRcdFx0cmV0dXJuICRkYXRhWyB0aGlzLnBhcmFtX25hbWUgXTtcblx0XHR9XG5cdFx0cmV0dXJuICRkYXRhO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5pc192Y19wYXJhbV9lbGVtKCkgKSB7XG5cdFx0XHRsZXQgJHNlbGVjdCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0JyApO1xuXHRcdFx0aWYoICRzZWxlY3QubGVuZ3RoID09PSAxICYmICdtdWx0aXBsZScgPT09ICRzZWxlY3QuYXR0ciggJ211bHRpcGxlJyApICkge1xuXHRcdFx0XHR0aGlzLnNhdmUoICRzZWxlY3QudmFsKCksICdhcnJheScgKTtcblx0XHRcdFx0JHNlbGVjdC5vbiggJ2NoYW5nZScsICggZSApID0+IHRoaXMuc2F2ZSggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSwgJ2FycmF5JyApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4ge1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG59ICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fVkNfRmllbGQgZnJvbSAnLi9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9WQ19GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuaXNfdmNfcGFyYW1fZWxlbSgpICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5hZGRDbGFzcyggJ3dwYl92Y19wYXJhbV92YWx1ZScgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpY29uX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ2FsbGVyeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcbn0gKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggKCkgPT4ge1xuXHRcdCQoICcjd29vY29tbWVyY2UtcHJvZHVjdC1kYXRhJyApLm9uKCAnd29vY29tbWVyY2VfdmFyaWF0aW9uc19sb2FkZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAnLndwb25pb24tZnJhbWV3b3JrLndwb25pb24td29vY29tbWVyY2UtdmFyaWF0aW9uJyApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHRcdCQoICcjdmFyaWFibGVfcHJvZHVjdF9vcHRpb25zJyApLm9uKCAnd29vY29tbWVyY2VfdmFyaWF0aW9uc19hZGRlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICcud3Bvbmlvbi1mcmFtZXdvcmsud3Bvbmlvbi13b29jb21tZXJjZS12YXJpYXRpb24nICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0b3IgZnJvbSAnLi9jb3JlL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlSG9va3MgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuLy8gVlNQIEpTIEhlbHBlciBHbG9iYWwuXG53aW5kb3cudnNwX2pzX2hlbHBlciA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApO1xuXG5yZXF1aXJlKCAnLi9oZWxwZXJzL2Z1bmN0aW9ucycgKTtcblxuLy8gV1BPbmlvbiBDb3JlIFNvdXJjZS5cbndpbmRvdy53cG9uaW9uID0gd2luZG93Lndwb25pb24gfHwgT2JqZWN0LmNyZWF0ZSgge1xuXHQvKipcblx0ICogTG9kYXNoIG5vQ29uZmxpY3QgVmFyaWFibGUuXG5cdCAqL1xuXHRfOiB3aW5kb3cubG9kYXNoLm5vQ29uZmxpY3QoKSxcblxuXHQvKipcblx0ICogQ3VyYXRlZCBjb2xsZWN0aW9uIG9mIHVzZWZ1bCBKYXZhU2NyaXB0IHNuaXBwZXRzLlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3ZzcC1qcy1oZWxwZXJcblx0ICovXG5cdGhlbHBlcjogd2luZG93LnZzcF9qc19oZWxwZXIsXG5cblx0LyoqXG5cdCAqIEEgbGlnaHR3ZWlnaHQgJiBlZmZpY2llbnQgRXZlbnRNYW5hZ2VyIGZvciBKYXZhU2NyaXB0LlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0B3b3JkcHJlc3MvaG9va3Ncblx0ICovXG5cdGhvb2tzOiBjcmVhdGVIb29rcygpLFxuXG5cdC8qKlxuXHQgKiBXUG9uaW9uIE1vZHVsZXMuXG5cdCAqL1xuXHRtZXRhYm94OiByZXF1aXJlKCAnLi9tb2R1bGVzL21ldGFib3gnICkuZGVmYXVsdCxcblx0bWVkaWFfZmllbGRzOiByZXF1aXJlKCAnLi9tb2R1bGVzL21lZGlhLWZpZWxkcycgKS5kZWZhdWx0LFxuXHRidWxrX2VkaXQ6IHJlcXVpcmUoICcuL21vZHVsZXMvYnVsay1lZGl0JyApLmRlZmF1bHQsXG5cdGd1dHRlbmJlcmc6IHJlcXVpcmUoICcuL21vZHVsZXMvZ3V0dGVuYmVyZycgKS5kZWZhdWx0LFxuXHR3b29jb21tZXJjZTogcmVxdWlyZSggJy4vbW9kdWxlcy93b29jb21tZXJjZScgKS5kZWZhdWx0LFxuXHRxdWlja19lZGl0OiByZXF1aXJlKCAnLi9tb2R1bGVzL3F1aWNrLWVkaXQnICkuZGVmYXVsdCxcblx0dmlzdWFsX2NvbXBvc2VyOiByZXF1aXJlKCAnLi9tb2R1bGVzL3Zpc3VhbC1jb21wb3NlcicgKS5kZWZhdWx0LFxuXHRtb2RhbDogcmVxdWlyZSggJy4uL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwnICkuZGVmYXVsdCxcblx0YWpheGVyOiByZXF1aXJlKCAnLi9jb3JlL2FqYXhlcicgKS5XUE9uaW9uX0FqYXhlcixcblx0YWpheDogcmVxdWlyZSggJy4vY29yZS9hamF4ZXInICkuZGVmYXVsdCxcblx0ZGVidWc6IHJlcXVpcmUoICcuL2NvcmUvZGVidWcnICkuZGVmYXVsdCxcblx0Y29yZTogcmVxdWlyZSggJy4vY29yZS9jb3JlJyApLmRlZmF1bHQsXG5cdGZpZWxkX2Fic3RyYWN0OiByZXF1aXJlKCAnLi9jb3JlL2ZpZWxkJyApLmRlZmF1bHQsXG59ICk7XG5cbi8vIENvcmUgRmllbGRzLlxud2luZG93Lndwb25pb24uZmllbGRzID0gT2JqZWN0LmNyZWF0ZSgge1xuXHR0ZXh0OiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dCcgKS5kZWZhdWx0LFxuXHR0ZXh0YXJlYTogcmVxdWlyZSggJy4vZmllbGRzL3RleHRhcmVhJyApLmRlZmF1bHQsXG5cdGJhY2tncm91bmQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrZ3JvdW5kJyApLmRlZmF1bHQsXG5cdGltYWdlX3NlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRzd2l0Y2hlcjogcmVxdWlyZSggJy4vZmllbGRzL3N3aXRjaGVyJyApLmRlZmF1bHQsXG5cdGNvbG9yX3BhbGV0dGU6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9wYWxldHRlJyApLmRlZmF1bHQsXG5cdHNlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRzZWxlY3QyOiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0MicgKS5kZWZhdWx0LFxuXHRjaG9zZW46IHJlcXVpcmUoICcuL2ZpZWxkcy9jaG9zZW4nICkuZGVmYXVsdCxcblx0aWNvbl9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9pY29uX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRmb250X3NlbGVjdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvZm9udF9zZWxlY3RvcicgKS5kZWZhdWx0LFxuXHRhY2NvcmRpb246IHJlcXVpcmUoICcuL2ZpZWxkcy9hY2NvcmRpb24nICkuZGVmYXVsdCxcblx0Z3JvdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9ncm91cCcgKS5kZWZhdWx0LFxuXHR3cF9lZGl0b3I6IHJlcXVpcmUoICcuL2ZpZWxkcy93cF9lZGl0b3InICkuZGVmYXVsdCxcblx0cmVsb2FkX3dwX2VkaXRvcjogcmVxdWlyZSggJy4vaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yJyApLmRlZmF1bHQsXG5cdGZpZWxkc2V0OiByZXF1aXJlKCAnLi9maWVsZHMvZmllbGRzZXQnICkuZGVmYXVsdCxcblx0aW5wdXRtYXNrOiByZXF1aXJlKCAnLi9maWVsZHMvaW5wdXRtYXNrJyApLmRlZmF1bHQsXG5cdHdwX2xpbmtzOiByZXF1aXJlKCAnLi9maWVsZHMvd3BfbGlua3MnICkuZGVmYXVsdCxcblx0Y2hlY2tib3hfcmFkaW86IHJlcXVpcmUoICcuL2ZpZWxkcy9jaGVja2JveF9yYWRpbycgKS5kZWZhdWx0LFxuXHRrZXl2YWx1ZV9wYWlyOiByZXF1aXJlKCAnLi9maWVsZHMva2V5dmFsdWVfcGFpcicgKS5kZWZhdWx0LFxuXHRjb2xvcl9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9waWNrZXInICkuZGVmYXVsdCxcblx0ZGF0ZV9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9kYXRlX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRnYWxsZXJ5OiByZXF1aXJlKCAnLi9maWVsZHMvZ2FsbGVyeScgKS5kZWZhdWx0LFxuXHRpbWFnZV9wb3B1cDogcmVxdWlyZSggJy4vaGVscGVycy9pbWFnZV9wb3B1cCcgKS5kZWZhdWx0LFxuXHR1cGxvYWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy91cGxvYWQnICkuZGVmYXVsdCxcblx0aW1hZ2VfdXBsb2FkOiByZXF1aXJlKCAnLi9maWVsZHMvaW1hZ2VfdXBsb2FkJyApLmRlZmF1bHQsXG5cdGpxdWVyeV90YWI6IHJlcXVpcmUoICcuL2ZpZWxkcy9qcXVlcnlfdGFiJyApLmRlZmF1bHQsXG5cdHRvb2x0aXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvdG9vbHRpcCcgKS5kZWZhdWx0LFxuXHRjbG9uZV9lbGVtZW50OiByZXF1aXJlKCAnLi9maWVsZHMvY2xvbmVfZWxlbWVudCcgKS5kZWZhdWx0LFxuXHRzb3J0ZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zb3J0ZXInICkuZGVmYXVsdCxcblx0Z29vZ2xlX21hcHM6IHJlcXVpcmUoICcuL2ZpZWxkcy9nb29nbGVfbWFwcycgKS5kZWZhdWx0LFxuXHR0eXBvZ3JhcGh5OiByZXF1aXJlKCAnLi9maWVsZHMvdHlwb2dyYXBoeScgKS5kZWZhdWx0LFxuXHRvZW1iZWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9vZW1iZWQnICkuZGVmYXVsdCxcblx0aGVhZGluZzogcmVxdWlyZSggJy4vZmllbGRzL2hlYWRpbmcnICkuZGVmYXVsdCxcblx0c3ViaGVhZGluZzogcmVxdWlyZSggJy4vZmllbGRzL3N1YmhlYWRpbmcnICkuZGVmYXVsdCxcblx0amFtYm9fY29udGVudDogcmVxdWlyZSggJy4vZmllbGRzL2phbWJvX2NvbnRlbnQnICkuZGVmYXVsdCxcblx0bm90aWNlOiByZXF1aXJlKCAnLi9maWVsZHMvbm90aWNlJyApLmRlZmF1bHQsXG5cdGNvbnRlbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb250ZW50JyApLmRlZmF1bHQsXG5cdGJhY2t1cDogcmVxdWlyZSggJy4vZmllbGRzL2JhY2t1cCcgKS5kZWZhdWx0LFxufSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICggKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgJCwgJHdwbyApID0+IHtcblx0Ly8gRG9jdW1lbnQgT24gTG9hZC5cblx0JCggKCkgPT4ge1xuXHRcdHdpbmRvdy53cG9uaW9uX3NldHVwKCk7XG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl90aGVtZV9pbml0JywgJCggdGhpcyApICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdH1cblx0fSApO1xuXG5cdC8vIFdpbmRvdyBPbiBMb2FkLlxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoICgpID0+IHtcblxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfaW5pdCcgKTtcblxuXHRcdGxldCAkd3BvZl9kaXYgPSAkKCAnLndwb25pb24tZnJhbWV3b3JrOm5vdCgud3Bvbmlvbi1tb2R1bGUtcXVpY2tfZWRpdC1mcmFtZXdvcmspJyApO1xuXG5cdFx0d2luZG93Lndwb25pb25fbm90aWNlKCAkd3BvZl9kaXYuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3Bfbm90aWNlLCAud3Bvbmlvbi1lbGVtZW50LW5vdGljZScgKSApO1xuXG5cdFx0d2luZG93Lndwb25pb24uY29yZS5zdWJtZW51X2luZGljYXRvciggJCggZG9jdW1lbnQgKS5maW5kKCAnLndwb25pb24tc3VibWVudS1pJyApICk7XG5cblx0XHQvLyBUcmlnZ2VycyBGaWVsZCBEZWJ1ZyBEYXRhLlxuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlID4gc3Ryb25nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcblx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LWRvd24nICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctcmlnaHQnICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gVHJpZ2dlcnMgSG9vayBXaXRoIFdpZGdldHMuXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ3dpZGdldC1hZGRlZCB3aWRnZXQtdXBkYXRlZCcsIGZ1bmN0aW9uKCBldmVudCwgJHdpZGdldCApIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkd2lkZ2V0ICkucmVsb2FkKCk7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkd2lkZ2V0ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gVHJpZ2dlcnMgV2hlbiBOZXcgTWVudSBJdGVtIEFkZGVkLlxuXHRcdCQoIGRvY3VtZW50ICkub24oICdtZW51LWl0ZW0tYWRkZWQnLCBmdW5jdGlvbiggZXZlbnQsICRtZW51ICkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRtZW51ICkucmVsb2FkKCk7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkbWVudSApO1xuXHRcdH0gKTtcblxuXG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0Ly8gUmVuZGVycyBWYWxpZGF0aW9uLlxuXHRcdFx0bmV3IFdQT25pb25fVmFsaWRhdG9yKCk7XG5cblx0XHRcdC8vIEhhbmRsZXMgRmllbGRzIGluaXQuXG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkKCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJCggdGhpcyApICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHR9XG5cblx0XHQkd3BvLmNvcmUubG9hZGluZ19zY3JlZW4oICR3cG9mX2RpdiwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0JyApO1xuXG5cdH0gKSApO1xuXG5cdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9sb2FkZWQnICk7XG5cbn0gKSggd2luZG93LCBkb2N1bWVudCwgd3AsIGpRdWVyeSwgd2luZG93Lndwb25pb24gKTtcblxuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2pzL2NvcmUvY29yZSc7XG5cbmNvbnN0IFdQT25pb25fV1BfTW9kYWwgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCgge1xuXHR0ZW1wbGF0ZXM6IHt9LFxuXG5cdGV2ZW50czoge1xuXHRcdFwiY2xpY2sgLm1lZGlhLW1vZGFsLWNsb3NlXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1jYW5jZWxcIjogXCJjbG9zZU1vZGFsXCIsXG5cdFx0XCJjbGljayAjYnRuLW9rXCI6IFwic2F2ZU1vZGFsXCIsXG5cdFx0XCJjbGljayAubWVkaWEtbWVudSBhXCI6IFwiaGFuZGxlX2xlZnRfbWVudV9jbGlja1wiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLXJvdXRlciBhXCI6IFwiaGFuZGxlX3RhYl9jbGlja1wiLFxuXHR9LFxuXG5cdGFjdGl2ZV9wYWdlOiBudWxsLFxuXG5cdGFjdGl2ZV9zZWN0aW9uOiBudWxsLFxuXG5cdGluaXRpYWxpemU6ICggb3B0aW9ucyApID0+IHtcblx0XHRvcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogZmFsc2UsXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdFx0aHRtbDogZmFsc2UsXG5cdFx0fSwgb3B0aW9ucyApO1xuXG5cdFx0dGhpcy5sZWZ0X21lbnUgPSBvcHRpb25zWyAnbGVmdF9tZW51JyBdO1xuXHRcdHRoaXMuaHRtbCAgICAgID0gb3B0aW9uc1sgJ2h0bWwnIF07XG5cdFx0dGhpcy5oaWRlX21lbnUgPSBvcHRpb25zWyAnaGlkZV9tZW51JyBdO1xuXG5cdFx0Xy5iaW5kQWxsKCB0aGlzLCAncmVuZGVyJywgJ3ByZXNlcnZlRm9jdXMnLCAnY2xvc2VNb2RhbCcsICdzYXZlTW9kYWwnLCAnZG9Ob3RoaW5nJyApO1xuXHRcdHRoaXMuaW5pdF90ZW1wbGF0ZXMoKTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9LFxuXG5cdGluaXRfdGVtcGxhdGVzOiAoKSA9PiB7XG5cdFx0bGV0ICRtICAgICAgICAgICAgICAgICAgICAgICAgICA9ICR3cG9uaW9uLm9wdGlvbiggJ21vZGFsJyApO1xuXHRcdHRoaXMudGVtcGxhdGVzLmZyYW1lX21lbnVfaXRlbSAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdmcmFtZS1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5yb3V0ZXJfbWVudV9pdGVtID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAncm91dGVyLW1lbnUtaXRlbScgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLndpbmRvdyAgICAgICAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdodG1sJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50ICAgICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3BhZ2VfY29udGVudCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnNlY3Rpb25fY29udGVudCAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdzZWN0aW9uX2NvbnRlbnQnIF0gKTtcblx0fSxcblxuXHRyZW5kZXI6ICgpID0+IHtcblx0XHQndXNlIHN0cmljdCc7XG5cdFx0dGhpcy4kZWwuYXR0ciggJ3RhYmluZGV4JywgJzAnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy53aW5kb3coKSApO1xuXG5cdFx0aWYoIHRoaXMubGVmdF9tZW51ICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmxlZnRfbWVudSwgKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0XHR0aGlzLiQoICcubWVkaWEtbWVudScgKS5hcHBlbmQoIHRoaXMudGVtcGxhdGVzLmZyYW1lX21lbnVfaXRlbSgge1xuXHRcdFx0XHRcdHVybDoga2V5LFxuXHRcdFx0XHRcdG5hbWU6IHZhbHVlLFxuXHRcdFx0XHR9ICkgKTtcblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmh0bWwgKSB7XG5cdFx0XHRfLmVhY2goIHRoaXMuaHRtbCwgKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0XHRsZXQgJGNvbnRlbnQgPSAkKCB0aGlzLnRlbXBsYXRlcy5wYWdlX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRpZDoga2V5LFxuXHRcdFx0XHRcdHRpdGxlOiB2YWx1ZVsgJ3RpdGxlJyBdLFxuXHRcdFx0XHRcdGh0bWw6IHZhbHVlWyAnaHRtbCcgXSxcblx0XHRcdFx0fSApICk7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiB2YWx1ZVsgJ3NlY3Rpb25zJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Xy5lYWNoKCB2YWx1ZVsgJ3NlY3Rpb25zJyBdLCAoIHZhbCwgayApID0+IHtcblx0XHRcdFx0XHRcdGxldCAkX2NvbnRlbnQgPSBqUXVlcnkoIHRoaXMudGVtcGxhdGVzLnNlY3Rpb25fY29udGVudCgge1xuXHRcdFx0XHRcdFx0XHRcdGlkOiBrZXkgKyBcIl9cIiArIGssXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHZhbFsgJ3RpdGxlJyBdLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWw6IHZhbFsgJ2h0bWwnIF0sXG5cdFx0XHRcdFx0XHRcdH0gKSApLFxuXHRcdFx0XHRcdFx0XHQkX21lbnUgICAgPSB0aGlzLnRlbXBsYXRlcy5yb3V0ZXJfbWVudV9pdGVtKCB7IHVybDogaywgbmFtZTogdmFsWyAndGl0bGUnIF0gfSApO1xuXG5cdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmhpZGUoKTtcblx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsWyAnc2lkZWJhcicgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRcdCRfY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuYXBwZW5kKCB2YWxbICdzaWRlYmFyJyBdICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtZnJhbWUtY29udGVudCcgKS5hcHBlbmQoICRfY29udGVudCApO1xuXHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1yb3V0ZXInICkuYXBwZW5kKCAkX21lbnUgKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXInICkuYXBwZW5kKCAkY29udGVudCApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsdWVbICdzaWRlYmFyJyBdICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5hZGRDbGFzcyggJ2hpZGRlbicgKTtcblx0XHRcdFx0XHQkdGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXInICkuYXBwZW5kKCAkY29udGVudCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdHRoaXMuJCggJy5tZWRpYS1tZW51IGE6Zmlyc3QtY2hpbGQnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gLndwb25pb24tbW9kYWwtY29udGVudDpub3QoLmhpZGRlbikgLm1lZGlhLWZyYW1lLXJvdXRlciBhOmZpcnN0LWNoaWxkJyApXG5cdFx0XHQudHJpZ2dlciggJ2NsaWNrJyApO1xuXG5cdFx0aWYoIHRoaXMuaGlkZV9tZW51ID09PSB0cnVlICkge1xuXHRcdFx0dGhpcy4kKCAnLm1lZGlhLWZyYW1lJyApLmFkZENsYXNzKCAnaGlkZS1tZW51JyApO1xuXHRcdH1cblxuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vbiggXCJmb2N1c2luXCIsIHRoaXMucHJlc2VydmVGb2N1cyApO1xuXHRcdGpRdWVyeSggJ2JvZHknICkuY3NzKCB7IFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIiB9ICkuYXBwZW5kKCB0aGlzLiRlbCApO1xuXHRcdHRoaXMuJGVsLmZvY3VzKCk7XG5cdH0sXG5cblx0aGFuZGxlX2xlZnRfbWVudV9jbGljazogKCBlICkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHRhcmdldCA9ICQoIGUudGFyZ2V0ICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLW1lbnUgYS5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JHRhcmdldC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRsZXQgJHNob3dfdGFyZ2V0ID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYjJyArICR0YXJnZXQuYXR0ciggJ2hyZWYnICkgKTtcblx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IGRpdicgKS5hZGRDbGFzcyggJ2hpZGRlbicgKTtcblx0XHQkc2hvd190YXJnZXQucmVtb3ZlQ2xhc3MoICdoaWRkZW4nICk7XG5cblx0XHRpZiggJHNob3dfdGFyZ2V0LmZpbmQoICcubWVkaWEtZnJhbWUtcm91dGVyJyApLmhhc0NsYXNzKCAnaGlkZGVuJyApICkge1xuXHRcdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lJyApLmFkZENsYXNzKCAnaGlkZS1yb3V0ZXInICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5yZW1vdmVDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH1cblx0XHR0aGlzLmFjdGl2ZV9wYWdlICAgID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKTtcblx0XHR0aGlzLmFjdGl2ZV9zZWN0aW9uID0gbnVsbDtcblx0fSxcblxuXHRoYW5kbGVfdGFiX2NsaWNrOiAoIGUgKSA9PiB7XG5cdFx0bGV0ICR0YXJnZXQgICAgICAgICA9ICQoIGUudGFyZ2V0ICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0bGV0ICRwYWdlICAgICAgICAgICA9ICQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZS1tZW51IGEuYWN0aXZlJyApLmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkYmFzZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+ICMnICsgdGhpcy5hY3RpdmVfcGFnZSApO1xuXG5cblx0XHQkdGFyZ2V0LnBhcmVudCgpLmZpbmQoICcuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JGJhc2UuZmluZCggJy53cG9uaW9uLXNlY3Rpb24tbW9kYWwtY29udGVudCcgKS5oaWRlKCk7XG5cdFx0JGJhc2UuZmluZCggJyMnICsgdGhpcy5hY3RpdmVfcGFnZSArICdfJyArIHRoaXMuYWN0aXZlX3NlY3Rpb24gKS5zaG93KCk7XG5cdH0sXG5cblx0cHJlc2VydmVGb2N1czogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGlmKCB0aGlzLiRlbFsgMCBdICE9PSBlLnRhcmdldCAmJiAhdGhpcy4kZWwuaGFzKCBlLnRhcmdldCApLmxlbmd0aCApIHtcblx0XHRcdHRoaXMuJGVsLmZvY3VzKCk7XG5cdFx0fVxuXHR9LFxuXG5cdGNsb3NlTW9kYWw6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9mZiggXCJmb2N1c2luXCIgKTtcblx0XHRqUXVlcnkoIFwiYm9keVwiICkuY3NzKCB7IFwib3ZlcmZsb3dcIjogXCJhdXRvXCIgfSApO1xuXHRcdHRoaXMucmVtb3ZlKCk7XG5cdH0sXG5cblx0c2F2ZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0dGhpcy5jbG9zZU1vZGFsKCBlICk7XG5cdH0sXG5cblx0ZG9Ob3RoaW5nOiBmdW5jdGlvbiggZSApIHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciggJG9wdGlvbnMgPSB7fSApIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCgge1xuXHRcdFx0aWQ6IGZhbHNlLFxuXHRcdFx0ZGF0YTogZmFsc2UsXG5cdFx0XHRjbGFzc05hbWU6ICd3cG9uaW9uLW1vZGFsJyxcblx0XHRcdG1vZGFsOiB7fSxcblx0XHRcdGhpZGVfbWVudTogZmFsc2UsXG5cdFx0fSwgJG9wdGlvbnMgKTtcblxuXHRcdG5ldyBXUE9uaW9uX1dQX01vZGFsKCBfLmV4dGVuZCgge1xuXHRcdFx0bGVmdF9tZW51OiB0aGlzLmdldF9sZWZ0X21lbnUoKSxcblx0XHRcdGh0bWw6IHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sXG5cdFx0XHRoaWRlX21lbnU6IHRoaXMub3B0aW9uc1sgJ2hpZGVfbWVudScgXSxcblx0XHR9LCB0aGlzLm9wdGlvbnNbICdtb2RhbCcgXSApICk7XG5cdH1cblxuXHRnZXRfbGVmdF9tZW51KCkge1xuXHRcdGxldCAkcmV0dXJuID0gZmFsc2U7XG5cdFx0aWYoIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0gKSB7XG5cdFx0XHQkcmV0dXJuID0ge307XG5cblx0XHRcdF8uZWFjaCggdGhpcy5vcHRpb25zWyAnZGF0YScgXSwgKCAkZGF0YSwgJGtleSApID0+IHtcblx0XHRcdFx0JHJldHVyblsgJGtleSBdID0gKCB0eXBlb2YgJGRhdGFbICdtZW51X3RpdGxlJyBdICE9PSAndW5kZWZpbmVkJyApID8gJGRhdGFbICdtZW51X3RpdGxlJyBdIDogJGRhdGFbICd0aXRsZScgXTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0cmV0dXJuICRyZXR1cm47XG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9