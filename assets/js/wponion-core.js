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
			this.element.find('input').wpColorPicker();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUFkZEhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUN1cnJlbnRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEaWRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEb2luZ0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhhc0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSZW1vdmVIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSdW5Ib29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVIb29rTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVOYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvaW5mby9pbmlfZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3htbC91dGY4X2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b193aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY29weV90b19jbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RldmljZV90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RpZmZfZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9mb3JtYXRfZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfYWZ0ZXJfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19iZWZvcmVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfc2FtZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3RhYl9mb2N1c2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc193aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BpcGVfbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BsYWluX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9xdWVyeV9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcmFuZF9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3Bvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9zY3JvbGxfdG9fdG9wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RpbWVfdGFrZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdG9fanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pzX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdXJsX3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy92YWxpZGF0ZVNpbmdsZUpTRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JkcHJlc3MtanMtcG9ydHMvZnVuY3Rpb25zL2FkZF9xdWVyeV9hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29yZHByZXNzLWpzLXBvcnRzL2Z1bmN0aW9ucy90cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvdW50cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9hamF4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NoZWNrYm94X3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2hvc2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2xvbmVfZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NvbG9yX3BhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZGF0ZV9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9maWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZvbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ29vZ2xlX21hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pY29uX3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ltYWdlX3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ltYWdlX3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2lucHV0bWFzay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2phbWJvX2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qcXVlcnlfdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMva2V5dmFsdWVfcGFpci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL25vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL29lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdDIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zdWJoZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvaW1hZ2VfcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2J1bGstZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9ndXR0ZW5iZXJnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21lZGlhLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXRhYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1aWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9hbGwtZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9jaGVja2JveC1yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvc2luZ2xlLXZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3dvb2NvbW1lcmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiXSwibmFtZXMiOlsiY3JlYXRlQWRkSG9vayIsImhvb2tzIiwiYWRkSG9vayIsImhvb2tOYW1lIiwibmFtZXNwYWNlIiwiY2FsbGJhY2siLCJwcmlvcml0eSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZXIiLCJoYW5kbGVycyIsImkiLCJzcGxpY2UiLCJfX2N1cnJlbnQiLCJmb3JFYWNoIiwiaG9va0luZm8iLCJuYW1lIiwiY3VycmVudEluZGV4IiwicnVucyIsImNyZWF0ZUN1cnJlbnRIb29rIiwiY3VycmVudEhvb2siLCJjcmVhdGVEaWRIb29rIiwiZGlkSG9vayIsImNyZWF0ZURvaW5nSG9vayIsImRvaW5nSG9vayIsImNyZWF0ZUhhc0hvb2siLCJoYXNIb29rIiwiY3JlYXRlSG9va3MiLCJhY3Rpb25zIiwiT2JqZWN0IiwiY3JlYXRlIiwiZmlsdGVycyIsImFkZEFjdGlvbiIsImFkZEZpbHRlciIsInJlbW92ZUFjdGlvbiIsInJlbW92ZUZpbHRlciIsImhhc0FjdGlvbiIsImhhc0ZpbHRlciIsInJlbW92ZUFsbEFjdGlvbnMiLCJyZW1vdmVBbGxGaWx0ZXJzIiwiZG9BY3Rpb24iLCJhcHBseUZpbHRlcnMiLCJjdXJyZW50QWN0aW9uIiwiY3VycmVudEZpbHRlciIsImRvaW5nQWN0aW9uIiwiZG9pbmdGaWx0ZXIiLCJkaWRBY3Rpb24iLCJkaWRGaWx0ZXIiLCJjcmVhdGVSZW1vdmVIb29rIiwicmVtb3ZlQWxsIiwicmVtb3ZlSG9vayIsImhhbmRsZXJzUmVtb3ZlZCIsIl9sb29wIiwiY3JlYXRlUnVuSG9vayIsInJldHVybkZpcnN0QXJnIiwicnVuSG9va3MiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsInB1c2giLCJyZXN1bHQiLCJhcHBseSIsInBvcCIsIl9jcmVhdGVIb29rcyIsInZhbGlkYXRlSG9va05hbWUiLCJ0ZXN0IiwidmFsaWRhdGVOYW1lc3BhY2UiLCJKU19QYXJzZV9BcmdzIiwiJGFyZ3MiLCIkZGVmYXVsdHMiLCIkaXNfbmVzdGVkIiwiZGVmYXVsdHMiLCJuZXN0ZWQiLCJwYXJzZSIsIiRfa2V5IiwiJGlzX2RlZXAiLCJtb2R1bGUiLCJleHBvcnRzIiwibWljcm90aW1lIiwiZ2V0QXNGbG9hdCIsInMiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRpbWluZyIsIm5hdmlnYXRpb25TdGFydCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwiY2FsbF91c2VyX2Z1bmMiLCJjYiIsInBhcmFtZXRlcnMiLCJjYWxsVXNlckZ1bmNBcnJheSIsInJlcXVpcmUiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsImNhbGxfdXNlcl9mdW5jX2FycmF5IiwiJGdsb2JhbCIsIndpbmRvdyIsImdsb2JhbCIsImZ1bmMiLCJzY29wZSIsInZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuIiwibWF0Y2giLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwiZXZhbCIsIkVycm9yIiwiY3JlYXRlX2Z1bmN0aW9uIiwiY29kZSIsInNwbGl0IiwiY29uY2F0IiwiZSIsImZ1bmN0aW9uX2V4aXN0cyIsImZ1bmNOYW1lIiwiaW5pX2dldCIsInZhcm5hbWUiLCIkbG9jdXR1cyIsInBocCIsImluaSIsImxvY2FsX3ZhbHVlIiwibWQ1Iiwic3RyIiwiaGFzaCIsImNyeXB0byIsIm1kNXN1bSIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJ1dGY4RW5jb2RlIiwieGwiLCJfcm90YXRlTGVmdCIsImxWYWx1ZSIsImlTaGlmdEJpdHMiLCJfYWRkVW5zaWduZWQiLCJsWCIsImxZIiwibFg0IiwibFk0IiwibFg4IiwibFk4IiwibFJlc3VsdCIsIl9GIiwieCIsInkiLCJ6IiwiX0ciLCJfSCIsIl9JIiwiX0ZGIiwiYSIsImIiLCJjIiwiZCIsImFjIiwiX0dHIiwiX0hIIiwiX0lJIiwiX2NvbnZlcnRUb1dvcmRBcnJheSIsImxXb3JkQ291bnQiLCJsTWVzc2FnZUxlbmd0aCIsImxOdW1iZXJPZldvcmRzVGVtcDEiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAyIiwibE51bWJlck9mV29yZHMiLCJsV29yZEFycmF5IiwibEJ5dGVQb3NpdGlvbiIsImxCeXRlQ291bnQiLCJjaGFyQ29kZUF0IiwiX3dvcmRUb0hleCIsIndvcmRUb0hleFZhbHVlIiwid29yZFRvSGV4VmFsdWVUZW1wIiwibEJ5dGUiLCJsQ291bnQiLCJzdWJzdHIiLCJrIiwiQUEiLCJCQiIsIkNDIiwiREQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJ0ZW1wIiwidG9Mb3dlckNhc2UiLCJwYXJzZV9zdHIiLCJhcnJheSIsInN0ckFyciIsIlN0cmluZyIsInJlcGxhY2UiLCJzYWwiLCJqIiwiY3QiLCJwIiwibGFzdE9iaiIsImNociIsInRtcCIsImtleSIsInZhbHVlIiwicG9zdExlZnRCcmFja2V0UG9zIiwia2V5cyIsImtleXNMZW4iLCJfZml4U3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckF0IiwiaW5kZXhPZiIsImhhc093blByb3BlcnR5IiwicnRyaW0iLCJjaGFybGlzdCIsInJlIiwiUmVnRXhwIiwic3RycG9zIiwiaGF5c3RhY2siLCJuZWVkbGUiLCJvZmZzZXQiLCJiYXNlNjRfZGVjb2RlIiwiZW5jb2RlZERhdGEiLCJkZWNvZGVVVEY4c3RyaW5nIiwibWFwIiwiam9pbiIsImF0b2IiLCJCdWZmZXIiLCJiNjQiLCJvMSIsIm8yIiwibzMiLCJoMSIsImgyIiwiaDMiLCJoNCIsImJpdHMiLCJkZWMiLCJ0bXBBcnIiLCJmcm9tQ2hhckNvZGUiLCJiYXNlNjRfZW5jb2RlIiwic3RyaW5nVG9FbmNvZGUiLCJlbmNvZGVVVEY4c3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG9Tb2xpZEJ5dGVzIiwicDEiLCJidG9hIiwiZW5jIiwiciIsImh0dHBfYnVpbGRfcXVlcnkiLCJmb3JtZGF0YSIsIm51bWVyaWNQcmVmaXgiLCJhcmdTZXBhcmF0b3IiLCJlbmNUeXBlIiwiZW5jb2RlRnVuYyIsIl9odHRwQnVpbGRRdWVyeUhlbHBlciIsInZhbCIsImlzTmFOIiwicXVlcnkiLCJwYXJzZV91cmwiLCJjb21wb25lbnQiLCJtb2RlIiwicGFyc2VyIiwic3RyaWN0IiwibG9vc2UiLCJtIiwiZXhlYyIsInVyaSIsIiQwIiwiJDEiLCIkMiIsInNvdXJjZSIsInJhd3VybGRlY29kZSIsInJhd3VybGVuY29kZSIsInVybGRlY29kZSIsInVybGVuY29kZSIsImlzX2NhbGxhYmxlIiwibWl4ZWRWYXIiLCJzeW50YXhPbmx5IiwiY2FsbGFibGVOYW1lIiwibWV0aG9kIiwidmFsaWRGdW5jdGlvbk5hbWUiLCJnZXRGdW5jTmFtZSIsImZuIiwidXRmOF9lbmNvZGUiLCJhcmdTdHJpbmciLCJzdHJpbmciLCJ1dGZ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJzdHJpbmdsIiwibiIsImMxIiwiUmFuZ2VFcnJvciIsImMyIiwicGFyc2VfYXJncyIsImFycmF5X3RvX2h0bWxfYXR0ciIsImFycmF5X3RvX2h0bWwiLCJhcnJheV90b193aW5kb3ciLCJwbGFpbl9vYmplY3QiLCJpc19hZnRlcl9kYXRlIiwiaXNfYmVmb3JlX2RhdGUiLCJpc19zYW1lX2RhdGUiLCJmb3JtYXRfZHVyYXRpb24iLCJkaWZmX2RheXMiLCJ0aW1lX3Rha2VuIiwiaXNfdXJsIiwiaXNfdGFiX2ZvY3VzZWQiLCJpc193aW5kb3dfYXJnIiwic2Nyb2xsX3RvX3RvcCIsImNvcHlfdG9fY2xpcCIsInNjcm9sbF9wb3MiLCJ3aW5kb3dfYXJnIiwiZGV2aWNlX3R5cGUiLCJwaXBlX2xvZyIsInRvX2pxdWVyeSIsImlzX2pxdWVyeSIsInRvX2pzX2Z1bmMiLCJjb3VudGVyIiwicmFuZF9tZDUiLCJjc3NfdW5pdHMiLCJ1cmxfcGFyYW1zIiwicXVlcnlfc3RyaW5nIiwiYXJyIiwibGlzdElEIiwidGFnIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJpdGVtIiwiJGRhdGEiLCJyZXR1cm5faHRtbCIsIkkiLCJfIiwiaXNPYmplY3QiLCJLIiwiJHZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIiRhcnJheSIsIiRrZXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZCIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2VsZWN0b3IiLCJzdGVwIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiX3N0ZXAiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFicyIsImZsb29yIiwiaXNOdW1iZXIiLCJjaGVja1B4IiwiY2hlY2tQY3QiLCJjaGVja0VtIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGF0ZUluaXRpYWwiLCJkYXRlRmluYWwiLCJtcyIsInRpbWUiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwibWlsbGlzZWNvbmQiLCJlbnRyaWVzIiwiZmlsdGVyIiwiZGF0ZUEiLCJkYXRlQiIsIiRlbGVtIiwiaXNVbmRlZmluZWQiLCJpc1N0cmluZyIsImpRdWVyeSIsInRvSVNPU3RyaW5nIiwiaGlkZGVuIiwiJHVybCIsInBhdHRlcm4iLCJsb2ciLCJkYXRhIiwicmVnZXgiLCJyZXN1bHRzIiwibG9jYXRpb24iLCJzZWFyY2giLCJyYW5kb20iLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0aXRsZSIsInRpbWVFbmQiLCIkYXJnc19rZXkiLCIkY29udGVudHNfa2V5IiwiaXNFbXB0eSIsInVybCIsInJlZHVjZSIsInYiLCIkc3RyaW5nIiwiJGNvbnRlbnRzIiwiJF9rIiwiYWRkX3F1ZXJ5X2FyZyIsImhyZWYiLCIkcGFyc2VkIiwiJHF1ZXJ5IiwiJGZyYWdtZW50IiwiZnJhZ21lbnQiLCJzcGxpdF91cmwiLCJiYXNlX3VybCIsInJlbW92ZV9xdWVyeV9hcmciLCJkZWZhdWx0IiwidHJhaWxpbmdzbGFzaGl0IiwidW50cmFpbGluZ3NsYXNoaXQiLCJXUE9uaW9uX0FqYXhlciIsIiRhamF4X2FyZ3MiLCIkYWpheF9jb25maWciLCJhamF4dXJsIiwic3VjY2VzcyIsImFsd2F5cyIsImFjdGlvbiIsImRlZmF1bHRfY29uZmlncyIsInJlc3BvbnNlX2VsZW1lbnQiLCJidXR0b24iLCJlbGVtZW50Iiwic3Bpbm5lciIsImluc3RhbmNlIiwiYWpheF9hcmdzIiwid3BvbmlvbiIsIm1lcmdlIiwiYWpheF9jb25maWciLCJhamF4IiwiJGNvZGUiLCJzaW5nbGVfY2FsbGJhY2siLCIkY2FsbGJhY2siLCJpc0Z1bmN0aW9uIiwiJGNhbGxiYWNrcyIsImhhbmRsZV9jYWxsYmFja3MiLCJidXR0b25fdW5sb2NrIiwiYnV0dG9uX2xvY2siLCIkY29uZmlnIiwiY2xvbmUiLCIkdXJsX3BhcmFtcyIsIndwIiwic2VuZCIsImRvbmUiLCJvblN1Y2Nlc3MiLCJmYWlsIiwib25FcnJvciIsIm9uQWx3YXlzIiwiJGRlZmF1bHQiLCJoYXNfY29uZmlnIiwiY29uZmlnIiwiJGJ1dHRvbiIsIndwb19idXR0b24iLCJhdHRyIiwiJHNwaW5uZXIiLCJhZGRDbGFzcyIsInBhcmVudCIsImFwcGVuZCIsInJlbW92ZUF0dHIiLCJuZXh0IiwiaGFzQ2xhc3MiLCJyZW1vdmUiLCJmaW5kIiwiJCIsIiRjbGFzcyIsIm9uIiwiY3VycmVudFRhcmdldCIsIiRfZGF0YSIsIiRfY2xhc3NfaW5zdGFuY2UiLCIkZmlkMSIsIiRmaWQyIiwiJGpzX2lkIiwiJHdwb25pb24iLCJmaWVsZElEIiwiJF9hcmdzIiwiZmllbGRBcmdzIiwiaW5saW5lX2FqYXgiLCJXUE9uaW9uIiwiJHdoZXJlX3RvX2ZpbmQiLCIkaWQiLCIkdmFyX2lkIiwiaXNGaWVsZCIsIndpbmRvd0FyZ3MiLCJ0ZXh0IiwiJGlzX3Nob3ciLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGhhbmRsZSIsIiRqc29uIiwiZGVidWdfaW5mbyIsIiRkZWZpbmVkX3ZhcnMiLCJwcmV2ZW50RGVmYXVsdCIsInN3YWwiLCJ0eHQiLCJodG1sIiwic2hvd0NvbmZpcm1CdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsInNob3dDbG9zZUJ1dHRvbiIsImFuaW1hdGlvbiIsIndpZHRoIiwib25CZWZvcmVPcGVuIiwiZW5hYmxlTG9hZGluZyIsIm9uT3BlbiIsImpzb25WaWV3IiwiZGlzYWJsZUxvYWRpbmciLCJ0aGVuIiwic2V0dGluZ3NfYXJncyIsIm9wdGlvbiIsImlzX2RlYnVnIiwiaXNOdWxsIiwiZmllbGRfZGVidWdfaW5mbyIsIiR2YXJzIiwiJHV0eHQiLCIkbXR4dCIsIiRhY3Rpb24iLCIkb25TdWNjZXNzIiwiJG9uRXJyb3IiLCIkb25BbHdheXMiLCIkYWpheCIsInJlcyIsImNvbXBpbGVkIiwib3B0aW9ucyIsImV2YWx1YXRlIiwiaW50ZXJwb2xhdGUiLCJlc2NhcGUiLCJ2YXJpYWJsZSIsInRlbXBsYXRlIiwiJGVsZW1zIiwiZWFjaCIsIiR0b2dnbGUiLCIkZXhfY2xhc3MiLCIkZWxlbWVudCIsInBhcmFtIiwibmVzdGFibGUiLCIkdGhpcyIsImJhc2UiLCIkZWwiLCJpbml0IiwicnVsZXNldCIsImRlcHMiLCJjcmVhdGVSdWxlc2V0IiwiZGVwUm9vdCIsIiRfZGVwc19mdW5jdGlvbnMiLCJzaG93Iiwic2xpZGVEb3duIiwicmVtb3ZlQ2xhc3MiLCJoaWRlIiwic2xpZGVVcCIsImNoZWNrVGFyZ2V0cyIsImVuYWJsZSIsIldQT25pb25fRGVwZW5kZW5jeSIsIiRzZWxlY3RvciIsIiRjb250ZXh0Iiwic2V0X2FyZ3MiLCJmaWVsZF9kZWJ1ZyIsImpzX2Vycm9yX2hhbmRsZXIiLCJqc192YWxpZGF0b3IiLCJlcnIiLCJhcHBlbmRUbyIsImpzX2Vycm9yIiwibWF5YmVfanNfdmFsaWRhdGVfZWxlbSIsIldQT25pb25fVmFsaWRhdGlvbiIsImdldF9mb3JtIiwianNfdmFsaWRhdGVfZWxlbSIsInJ1bGVzIiwiJGFyZyIsImpzX2Z1bmMiLCIkZXhpc3RzIiwiJHdwb25pb25fZGVidWciLCJnZXQiLCJpZCIsImFkZCIsIiRpbmZvIiwiJGZvdW5kIiwiJElEIiwidGlwcHkiLCJjb250ZW50IiwiYXJyb3ciLCJhcnJvd1R5cGUiLCJwbGFjZW1lbnQiLCJ0aGVtZSIsImdldF9maWVsZF9wYXJlbnRfYnlfaWQiLCIkZCIsIiRub3RpY2VfdHh0IiwiaGVpZ2h0QXV0byIsIl9hcmdzIiwiJGFqYXhfa2V5IiwicGx1Z2luX2lkIiwiJHR5cGUiLCJ3cG9uaW9uX2luaXRfZmllbGQiLCJpbml0X3NpbmdsZV9maWVsZCIsImluaXRfZmllbGQiLCJXUE9uaW9uX01vZHVsZSIsInNldF9lbGVtZW50Iiwic2V0X2NvbnR4dCIsIm1vZHVsZV9pbml0IiwiZWxlbSIsIiRjb250eHQiLCJjb250ZXh0IiwiV1BPbmlvbl9WYWxpZGF0b3IiLCJmb3JtIiwiaW52YWxpZEhhbmRsZXIiLCJzaWJsaW5ncyIsImJlZm9yZSIsImlnbm9yZSIsImVycm9yUGxhY2VtZW50IiwidHJpZ2dlciIsImVycm9yQ2xhc3MiLCJlcnJvckVsZW1lbnQiLCJ2YWxpZGF0ZSIsImZpZWxkIiwiYWNjb3JkaW9uIiwiaGVhZGVyIiwiY29sbGFwc2libGUiLCJhbmltYXRlIiwiaGVpZ2h0U3R5bGUiLCJpY29ucyIsIklEdG9FbGVtZW50IiwiV1BPbmlvbl9GaWVsZCIsInciLCJ3cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkIiwiZmllbGRfYWJzdHJhY3QiLCJ0b29sdGlwIiwiaGFuZGxlX2JhY2t1cF9pbXBvcnQiLCIkZmlsZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmb3JjZV9kb3dubG9hZCIsImJsb2NrX2Zvcm0iLCJ1bmlxdWUiLCJleHRyYSIsImdldF9leHRyYV92YWx1ZSIsInN3YWxfZXJyb3IiLCJ1bmJsb2NrX2Zvcm0iLCIkaW5zIiwidGlwcHlfZ2V0IiwiaW5zdGFuY2VzIiwiZGVzdHJveSIsImJhY2t1cF9pZCIsInJlc3RvcmVfYmFja3VwIiwibXNnIiwidHlwZSIsIl90aXBweSIsInNob3dfdG9vbHRpcCIsImV4cG9ydE9iaiIsImV4cG9ydE5hbWUiLCJkYXRhU3RyIiwiZG93bmxvYWRBbmNob3JOb2RlIiwiY2xpY2siLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZWFkQXNUZXh0IiwiJGJhY2t1cGlkIiwiJGFwcGVuZFRPIiwiaW50ZXJhY3RpdmUiLCJvblNob3duIiwiJGN1c3RvbV9pbnB1dCIsIiRyYWRpb3MiLCIkY2hlY2tib3giLCJpcyIsIiRpIiwiY2hvc2VuIiwiaGFuZGxlX2FyZ3MiLCIkY2xvbmVfd3JhcCIsIiRhZGRfYnRuIiwiJGxpbWl0IiwibGltaXQiLCIkZXJvcl9tc2ciLCJlcnJvcl9tc2ciLCIkc29ydCIsInNvcnQiLCJpdGVtcyIsImhhbmRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJ1aSIsImNzcyIsInN0b3AiLCJXUE9uaW9uQ2xvbmVyIiwiYWRkX2J0biIsImNsb25lX2VsZW0iLCJyZW1vdmVfYnRuIiwidGVtcGxhdGVBZnRlclJlbmRlciIsIiRlIiwid3Bvbmlvbl9maWVsZCIsInJlbG9hZCIsIm9uUmVtb3ZlQWZ0ZXIiLCJzb3J0YWJsZSIsIm9uTGltaXRSZWFjaGVkIiwicHJlcGVuZCIsIndwb25pb25fbm90aWNlIiwic2hvd19hbmltYXRpb24iLCJhbmltYXRpb25zIiwiaGlkZV9hbmltYXRpb24iLCJ3cENvbG9yUGlja2VyIiwiJHNldHRpbmdzIiwiJHZpZXciLCJwbHVnaW5zIiwicmFuZ2VQbHVnaW4iLCJpbnB1dCIsImZsYXRwaWNrciIsIiRyZXR1cm4iLCIkX2QiLCIkdmFsIiwiJGh0bWwiLCJ3ZWJzYWZlIiwiZm9udHMiLCJidWlsZF9vcHRpb25zIiwidmFyaWFudHMiLCJnb29nbGVfZm9udHMiLCIkdmFyaWFudCIsIiRodG1sX3RlbXAiLCIkaW5wdXQiLCIkcHJldmlldyIsIndwX21lZGlhX2ZyYW1lIiwiJGFkZCIsIiRlZGl0IiwiJGNsZWFyIiwiJG1hbmFnZSIsImlkcyIsIndoYXQiLCJzdGF0ZSIsIm1lZGlhIiwiZ2FsbGVyeSIsImxpYnJhcnkiLCJmcmFtZSIsIm11bHRpcGxlIiwib3BlbiIsImVkaXQiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsInNlbGVjdGVkSWRzIiwibW9kZWxzIiwiYXR0YWNobWVudCIsInRvSlNPTiIsInNpemVzIiwidGh1bWIiLCJ0aHVtYm5haWwiLCIkdG1wIiwiJHBhcmVudCIsIiRpbWFnZV9pZCIsIiRrIiwiJHYiLCJjdXJzb3IiLCJzY3JvbGxTZW5zaXRpdml0eSIsImZvcmNlUGxhY2Vob2xkZXJTaXplIiwiaGVscGVyIiwib3BhY2l0eSIsIiRpdGVtIiwiaGVpZ2h0IiwiJG1hcCIsImRldGFpbHMiLCJkZXRhaWxzQXR0cmlidXRlIiwiJF9pbnN0YW5jZSIsImdlb2NvbXBsZXRlIiwiYmluZCIsImxhdExuZyIsImdlb2NvZGVyIiwiZ29vZ2xlIiwibWFwcyIsIkdlb2NvZGVyIiwiZ2VvY29kZSIsImxhdCIsInBhcnNlRmxvYXQiLCJsbmciLCIkZ3JvdXBfd3JhcCIsIiRlcnJvcl9tc2ciLCJiaW5kX2V2ZW50c19mb3JfdGl0bGUiLCJwYXJzZUludCIsIm9uUmVtb3ZlIiwidXBkYXRlX2dyb3Vwc190aXRsZSIsIiRtYWNoZWQiLCIkaGVhZGluZyIsIiRfdGhpcyIsIiRyZW1vdmVfYnRuIiwiJHdvcmsiLCJlbGVtcyIsInBvcHVwIiwiZWxtIiwiaW5pdF90b29sdGlwIiwicG9wdXBfdG9vbHRpcCIsIiR0cCIsIiRlbG0iLCIkaW5zdGFuY2UiLCIkaGVpZ2h0IiwiJGljb24iLCJjbG9zZU1vZGFsIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiJHJlcyIsInJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwiJHBvcHVwIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjdXN0b21DbGFzcyIsIiRwb3B1cF9lbGVtIiwiJHByZXZpZXdfYWRkIiwibWVkaWFfaW5zdGFuY2UiLCJob29rIiwiZmlyc3QiLCJhdHRyaWJ1dGVzIiwiaW5wdXRtYXNrIiwiJHRoaXNfZWxlbSIsIiR0YWIiLCJnbG9iYWxfdmFsaWRhdGUiLCJhZnRlciIsImVxIiwiaW1hZ2UiLCJzaG93X3ByZXZpZXciLCJkcm9wZG93blBhcmVudCIsInNlbGVjdDIiLCIkZW5hYmxlZCIsIiRkaXNhYmxlZCIsImNvbm5lY3RXaXRoIiwiZm9udF93ZWlnaHRfc3R5bGUiLCIkZm9udF9maWVsZCIsIiRmb250IiwiJGZvbnRfd2VpZ2h0X3N0eWxlIiwiZm9udF9zdHlsZSIsIiR0YWciLCIkY29sb3IiLCIkYWxpZ24iLCIkZm9udFNpemUiLCIkbGluZUhlaWdodCIsIiRsZXR0ZXJTcGFjaW5nIiwid2VpZ2h0IiwiJF9hdHRycyIsIiR0ZXh0IiwiJHdlaWdodF92YWwiLCIkc3R5bGVfdmFsIiwiZnJhbWVfdGl0bGUiLCJ1cGxvYWRfdHlwZSIsImluc2VydF90aXRsZSIsIiR0ZXh0YXJlYSIsIndwTGluayIsIiRkZXAiLCJjb250cm9sbGVyIiwiY29uZGl0aW9uIiwiJGNvbnRyb2xsZXIiLCIkY29uZGl0aW9uIiwiJGZpZWxkIiwiJElOUFVUIiwiY29udHh0IiwiY3JlYXRlUnVsZSIsImluY2x1ZGUiLCJleHRlbmQiLCJhbmltYXRlQ3NzIiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkVuZCIsIk9BbmltYXRpb24iLCJNb3pBbmltYXRpb24iLCJXZWJraXRBbmltYXRpb24iLCJ0Iiwib25lIiwiJGFyZ3VtZW50cyIsInRpcHB5X2hlbHBlciIsImNyZWF0ZV9pbnN0YW5jZSIsIiRfaW5zdGFuY2VfaWQiLCJjb3JlIiwicmFuZF9pZCIsIiR0aXRsZSIsIiRkYXRhX3RpcHB5IiwiZ2V0X2luc3RhbmNlIiwiJHN0YXR1cyIsIiRfZWwiLCIkYXV0byIsInNldFRpbWVvdXQiLCJ3cG9uaW9uX3NldHVwIiwiJGNvcmUiLCIkdGFucyIsIiRtb2R1bGUiLCJ3cG9uaW9uX2NyZWF0ZV9maWVsZCIsIiRpbml0X21ldGhvZCIsIiRtZXRob2RzIiwiJG9yZ19jbGFzcyIsIiRmaWVsZF90eXBlIiwiJGFyZ3VtZW50IiwiJGxvZ19lcnIiLCIkaW1hZ2UiLCJpbWFnZVVybCIsImJhY2tncm91bmQiLCJiYWNrZHJvcCIsIiRtY2VfZWRpdG9yIiwidGlueU1DRVByZUluaXQiLCJtY2VJbml0IiwiJHF1aWNrX3RhZ3MiLCJxdEluaXQiLCIkTkVXX0lEIiwiJHRleHRBcmVhIiwiJGFjdHVhbF9JRCIsIiRhY3R1YWxfaHRtbCIsIiRyZWdleCIsInRpbnltY2UiLCJ0aW55TUNFIiwicXVpY2t0YWdzIiwiJGZpZCIsIiR0b29sdGlwX2tleSIsInZhbGlkX2pzb24iLCJpc0ZldGNoaW5nIiwiY2FuRmV0Y2giLCIkY2xhc3NUb0NoZWNrIiwiJGF0dHIiLCJ1cGRhdGVEdXJhdGlvbiIsIm9uU2hvdyIsInRpcCIsInJlc3BvbnNlIiwiZmV0Y2giLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNWaXNpYmxlIiwic2V0Q29udGVudCIsIm9uSGlkZGVuIiwicG9wcGVyT3B0aW9ucyIsIm1vZGlmaWVycyIsInByZXZlbnRPdmVyZmxvdyIsImljb24iLCIkZmluYWxfYXJncyIsInBvc3RfaWRzIiwiJGJ1bGtfZWRpdCIsImNoaWxkcmVuIiwic2VyaWFsaXplT2JqZWN0IiwiYXN5bmMiLCJjYWNoZSIsIldQT25pb25fR3V0dGVuYmVyZyIsInNhdmUiLCJibG9jayIsInNhdmVfaGFuZGxlciIsImVkaXRfaGFuZGxlciIsImJsb2NrcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiJF9wb3N0aWRzIiwicG9zdF9pZCIsImJsb2NrX2lkIiwiY2xpZW50SWQiLCIkcmVtb3RlIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50cyIsIlNlcnZlclNpZGVSZW5kZXIiLCJlZGl0b3IiLCIkd3BvX2Jsb2NrcyIsImlzQXJyYXkiLCJmaXhfbWVkaWFfdWkiLCIkdGFibGUiLCIkZmllbGRzIiwiZnJhbWVzIiwiYnJvd3NlIiwiV1BPbmlvbl9NZXRhYm94X01vZHVsZSIsIm1lbnUiLCJzbGlkZVRvZ2dsZSIsIiRocmVmIiwiJHNlY3Rpb24iLCIkcGFyZW50X2FjdGl2ZXMiLCIkY3VycmVudCIsIiRiYXNlIiwiJGhpZGRlbiIsIm1lc3NhZ2UiLCJvdmVybGF5Q1NTIiwiJHZhbHVlcyIsInNlcmlhbGl6ZSIsInVuYmxvY2siLCJXUE9uaW9uX1F1aWNrX0VkaXQiLCJ2YWx1ZXMiLCIkbGlzdCIsImNsb3Nlc3QiLCJ2YyIsIndwb25pb25fdmMiLCJmaWVsZHMiLCJhYnN0cmFjdCIsIndwb25pb25fdmNfaW5pdCIsIndwb25pb25fdmNfZmllbGQiLCJ3cG9uaW9uX2NyZWF0ZV92Y19maWVsZCIsImlzX3ZjX3BhcmFtX2VsZW0iLCJpbnB1dF9jaGFuZ2UiLCJpbnB1dF9kYXRhIiwiV1BPbmlvbl9WQ19GaWVsZCIsImhhbmRsZV9zaW5nbGVfY2hhbmdlIiwiJHNhdmVfZGF0YSIsInNpbXBsZV9hcnJheSIsImtleV92YWx1ZV9hcnJheSIsImtleV92YWx1ZV9tdWx0aV9hcnJheSIsInNvcnRlcl92YWx1ZXMiLCJ2Y19zYXZlIiwiJHBhcmFtX25hbWUiLCJwYXJhbV9uYW1lIiwiJHIiLCIkcyIsImVuY29kZV9jb250ZW50IiwiJHNlbGVjdCIsInZzcF9qc19oZWxwZXIiLCJsb2Rhc2giLCJub0NvbmZsaWN0IiwibWV0YWJveCIsIm1lZGlhX2ZpZWxkcyIsImJ1bGtfZWRpdCIsImd1dHRlbmJlcmciLCJ3b29jb21tZXJjZSIsInF1aWNrX2VkaXQiLCJ2aXN1YWxfY29tcG9zZXIiLCJtb2RhbCIsImFqYXhlciIsImRlYnVnIiwidGV4dGFyZWEiLCJpbWFnZV9zZWxlY3QiLCJzd2l0Y2hlciIsImNvbG9yX3BhbGV0dGUiLCJpY29uX3BpY2tlciIsImZvbnRfc2VsZWN0b3IiLCJncm91cCIsIndwX2VkaXRvciIsInJlbG9hZF93cF9lZGl0b3IiLCJmaWVsZHNldCIsIndwX2xpbmtzIiwiY2hlY2tib3hfcmFkaW8iLCJrZXl2YWx1ZV9wYWlyIiwiY29sb3JfcGlja2VyIiwiZGF0ZV9waWNrZXIiLCJpbWFnZV9wb3B1cCIsInVwbG9hZCIsImltYWdlX3VwbG9hZCIsImpxdWVyeV90YWIiLCJjbG9uZV9lbGVtZW50Iiwic29ydGVyIiwiZ29vZ2xlX21hcHMiLCJ0eXBvZ3JhcGh5Iiwib2VtYmVkIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJqYW1ib19jb250ZW50Iiwibm90aWNlIiwiYmFja3VwIiwiJHdwbyIsIiR3cG9mX2RpdiIsInN1Ym1lbnVfaW5kaWNhdG9yIiwidG9nZ2xlQ2xhc3MiLCIkd2lkZ2V0IiwiJG1lbnUiLCJsb2FkaW5nX3NjcmVlbiIsIldQT25pb25fV1BfTW9kYWwiLCJCYWNrYm9uZSIsIlZpZXciLCJ0ZW1wbGF0ZXMiLCJldmVudHMiLCJhY3RpdmVfcGFnZSIsImFjdGl2ZV9zZWN0aW9uIiwiaW5pdGlhbGl6ZSIsImxlZnRfbWVudSIsImhpZGVfbWVudSIsImJpbmRBbGwiLCJpbml0X3RlbXBsYXRlcyIsInJlbmRlciIsIiRtIiwiZnJhbWVfbWVudV9pdGVtIiwicm91dGVyX21lbnVfaXRlbSIsInBhZ2VfY29udGVudCIsInNlY3Rpb25fY29udGVudCIsIiRjb250ZW50IiwiJF9jb250ZW50IiwiJF9tZW51IiwicHJlc2VydmVGb2N1cyIsImZvY3VzIiwiaGFuZGxlX2xlZnRfbWVudV9jbGljayIsIiR0YXJnZXQiLCIkc2hvd190YXJnZXQiLCJoYW5kbGVfdGFiX2NsaWNrIiwiJHBhZ2UiLCJoYXMiLCJ1bmRlbGVnYXRlRXZlbnRzIiwib2ZmIiwic2F2ZU1vZGFsIiwiZG9Ob3RoaW5nIiwiJG9wdGlvbnMiLCJnZXRfbGVmdF9tZW51Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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LENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJNLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTVCLFFBQUlILElBQUlHLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJPLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlGLElBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJRLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWhDLFFBQUlELElBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJLLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTFCLFFBQUlKLElBQUlJLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJNLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTVCLFFBQUlILElBQUlHLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJPLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlGLElBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJRLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWhDLFFBQUlELElBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJLLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTFCLFFBQUlKLElBQUlJLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJNLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTVCLFFBQUlILElBQUlHLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJPLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTlCLFFBQUlGLElBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJRLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWhDLFFBQUlELElBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJLLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTFCLFFBQUlKLElBQUlJLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJNLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTVCLFFBQUlILElBQUlHLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJPLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTlCLFFBQUlGLElBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJRLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWhDLFFBQUlLLElBQUlMLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJTLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlFLElBQUlGLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJVLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWhDLFFBQUlHLElBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJXLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWxDLFFBQUlJLElBQUlKLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJZLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQXBDLFFBQUlLLElBQUlMLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJTLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlFLElBQUlGLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJVLEdBQTNCLEVBQWdDLFNBQWhDLENBQUo7QUFDQWhDLFFBQUlHLElBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJXLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWxDLFFBQUlJLElBQUlKLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJZLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQXBDLFFBQUlLLElBQUlMLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJTLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQTlCLFFBQUlFLElBQUlGLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJVLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQWhDLFFBQUlHLElBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJXLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWxDLFFBQUlJLElBQUlKLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJZLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQXBDLFFBQUlLLElBQUlMLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJTLEdBQTNCLEVBQWdDLFVBQWhDLENBQUo7QUFDQTlCLFFBQUlFLElBQUlGLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JULEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJVLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWhDLFFBQUlHLElBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JSLEVBQUUrQixJQUFJLENBQU4sQ0FBaEIsRUFBMEJXLEdBQTFCLEVBQStCLFVBQS9CLENBQUo7QUFDQWxDLFFBQUlJLElBQUlKLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFILENBQWIsRUFBZ0JQLEVBQUUrQixJQUFJLEVBQU4sQ0FBaEIsRUFBMkJZLEdBQTNCLEVBQWdDLFVB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TyxPQUFQLENBQTdGO0FBQ0EsS0FGRDtBQUdBO0FBQ0QsVUFBTytZLE9BQVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTUYsbUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3dwb25pb24tY29yZS5qc1wiKTtcbiIsImltcG9ydCB2YWxpZGF0ZU5hbWVzcGFjZSBmcm9tICcuL3ZhbGlkYXRlTmFtZXNwYWNlLmpzJztcbmltcG9ydCB2YWxpZGF0ZUhvb2tOYW1lIGZyb20gJy4vdmFsaWRhdGVIb29rTmFtZS5qcyc7XG5pbXBvcnQgeyBkb0FjdGlvbiB9IGZyb20gJy4vJztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgYWRkIGEgaG9vay5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgYWRkcyBhIG5ldyBob29rLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZEhvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIEFkZHMgdGhlIGhvb2sgdG8gdGhlIGFwcHJvcHJpYXRlIGhvb2tzIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgaG9va05hbWUgIE5hbWUgb2YgaG9vayB0byBhZGRcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgbmFtZXNwYWNlIFRoZSB1bmlxdWUgbmFtZXNwYWNlIGlkZW50aWZ5aW5nIHRoZSBjYWxsYmFjayBpbiB0aGUgZm9ybSBgdmVuZG9yL3BsdWdpbi9mdW5jdGlvbmAuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGhvb2sgaXMgcnVuXG4gICAqIEBwYXJhbSB7P251bWJlcn0gIHByaW9yaXR5ICBQcmlvcml0eSBvZiB0aGlzIGhvb2sgKGRlZmF1bHQ9MTApXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gYWRkSG9vayhob29rTmFtZSwgbmFtZXNwYWNlLCBjYWxsYmFjaykge1xuICAgIHZhciBwcmlvcml0eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMTA7XG5cbiAgICBpZiAoIXZhbGlkYXRlSG9va05hbWUoaG9va05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZGF0ZU5hbWVzcGFjZShuYW1lc3BhY2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYmFjaykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFZhbGlkYXRlIG51bWVyaWMgcHJpb3JpdHlcblxuXG4gICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgcHJpb3JpdHkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdJZiBzcGVjaWZpZWQsIHRoZSBob29rIHByaW9yaXR5IG11c3QgYmUgYSBudW1iZXIuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZXIgPSB7XG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgIH07XG5cbiAgICBpZiAoaG9va3NbaG9va05hbWVdKSB7XG4gICAgICAvLyBGaW5kIHRoZSBjb3JyZWN0IGluc2VydCBpbmRleCBvZiB0aGUgbmV3IGhvb2suXG4gICAgICB2YXIgaGFuZGxlcnMgPSBob29rc1tob29rTmFtZV0uaGFuZGxlcnM7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHdoaWxlIChpIDwgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChoYW5kbGVyc1tpXS5wcmlvcml0eSA+IHByaW9yaXR5KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpKys7XG4gICAgICB9IC8vIEluc2VydCAob3IgYXBwZW5kKSB0aGUgbmV3IGhvb2suXG5cblxuICAgICAgaGFuZGxlcnMuc3BsaWNlKGksIDAsIGhhbmRsZXIpOyAvLyBXZSBtYXkgYWxzbyBiZSBjdXJyZW50bHkgZXhlY3V0aW5nIHRoaXMgaG9vay4gIElmIHRoZSBjYWxsYmFja1xuICAgICAgLy8gd2UncmUgYWRkaW5nIHdvdWxkIGNvbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbGJhY2ssIHRoZXJlJ3Mgbm9cbiAgICAgIC8vIHByb2JsZW07IG90aGVyd2lzZSB3ZSBuZWVkIHRvIGluY3JlYXNlIHRoZSBleGVjdXRpb24gaW5kZXggb2ZcbiAgICAgIC8vIGFueSBvdGhlciBydW5zIGJ5IDEgdG8gYWNjb3VudCBmb3IgdGhlIGFkZGVkIGVsZW1lbnQuXG5cbiAgICAgIChob29rcy5fX2N1cnJlbnQgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGhvb2tJbmZvKSB7XG4gICAgICAgIGlmIChob29rSW5mby5uYW1lID09PSBob29rTmFtZSAmJiBob29rSW5mby5jdXJyZW50SW5kZXggPj0gaSkge1xuICAgICAgICAgIGhvb2tJbmZvLmN1cnJlbnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgaG9vayBvZiBpdHMgdHlwZS5cbiAgICAgIGhvb2tzW2hvb2tOYW1lXSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtoYW5kbGVyXSxcbiAgICAgICAgcnVuczogMFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaG9va05hbWUgIT09ICdob29rQWRkZWQnKSB7XG4gICAgICBkb0FjdGlvbignaG9va0FkZGVkJywgaG9va05hbWUsIG5hbWVzcGFjZSwgY2FsbGJhY2ssIHByaW9yaXR5KTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZEhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVBZGRIb29rLmpzLm1hcCIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmV0dXJuIHRoZSBuYW1lIG9mIHRoZVxuICogY3VycmVudGx5IHJ1bm5pbmcgaG9vaywgb3IgYG51bGxgIGlmIG5vIGhvb2sgb2YgdGhlIGdpdmVuIHR5cGUgaXMgY3VycmVudGx5XG4gKiBydW5uaW5nLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyAgICAgICAgICBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IGhvb2suXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50bHkgcnVubmluZyBob29rLCBvciBgbnVsbGAgaWYgbm8gaG9vayBvZlxuICAgKiB0aGUgZ2l2ZW4gdHlwZSBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAgICpcbiAgICogQHJldHVybiB7P3N0cmluZ30gICAgICAgICAgICAgVGhlIG5hbWUgb2YgdGhlIGN1cnJlbnRseSBydW5uaW5nIGhvb2ssIG9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBudWxsYCBpZiBubyBob29rIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJlbnRIb29rKCkge1xuICAgIGlmICghaG9va3MuX19jdXJyZW50IHx8ICFob29rcy5fX2N1cnJlbnQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3MuX19jdXJyZW50W2hvb2tzLl9fY3VycmVudC5sZW5ndGggLSAxXS5uYW1lO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDdXJyZW50SG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUN1cnJlbnRIb29rLmpzLm1hcCIsImltcG9ydCB2YWxpZGF0ZUhvb2tOYW1lIGZyb20gJy4vdmFsaWRhdGVIb29rTmFtZS5qcyc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB0aGUgbnVtYmVyIG9mIHRpbWVzIGFcbiAqIGhvb2sgaGFzIGJlZW4gY2FsbGVkLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgaG9vaydzIGNhbGwgY291bnQuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGlkSG9vayhob29rcykge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRpbWVzIGFuIGFjdGlvbiBoYXMgYmVlbiBmaXJlZC5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBob29rTmFtZSBUaGUgaG9vayBuYW1lIHRvIGNoZWNrLlxuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgICAgIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGhvb2sgaGFzIHJ1bi5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBkaWRIb29rKGhvb2tOYW1lKSB7XG4gICAgaWYgKCF2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBob29rc1tob29rTmFtZV0gJiYgaG9va3NbaG9va05hbWVdLnJ1bnMgPyBob29rc1tob29rTmFtZV0ucnVucyA6IDA7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpZEhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVEaWRIb29rLmpzLm1hcCIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmV0dXJuIHdoZXRoZXIgYSBob29rIGlzXG4gKiBjdXJyZW50bHkgYmVpbmcgZXhlY3V0ZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICBGdW5jdGlvbiB0aGF0IHJldHVybnMgd2hldGhlciBhIGhvb2sgaXMgY3VycmVudGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVpbmcgZXhlY3V0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURvaW5nSG9vayhob29rcykge1xuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIGEgaG9vayBpcyBjdXJyZW50bHkgYmVpbmcgZXhlY3V0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSAgez9zdHJpbmd9IGhvb2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIGNoZWNrIGZvci4gIElmXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9taXR0ZWQsIHdpbGwgY2hlY2sgZm9yIGFueSBob29rIGJlaW5nIGV4ZWN1dGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICBXaGV0aGVyIHRoZSBob29rIGlzIGJlaW5nIGV4ZWN1dGVkLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGRvaW5nSG9vayhob29rTmFtZSkge1xuICAgIC8vIElmIHRoZSBob29rTmFtZSB3YXMgbm90IHBhc3NlZCwgY2hlY2sgZm9yIGFueSBjdXJyZW50IGhvb2suXG4gICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgaG9va05hbWUpIHtcbiAgICAgIHJldHVybiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGhvb2tzLl9fY3VycmVudFswXTtcbiAgICB9IC8vIFJldHVybiB0aGUgX19jdXJyZW50IGhvb2suXG5cblxuICAgIHJldHVybiBob29rcy5fX2N1cnJlbnRbMF0gPyBob29rTmFtZSA9PT0gaG9va3MuX19jdXJyZW50WzBdLm5hbWUgOiBmYWxzZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRG9pbmdIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlRG9pbmdIb29rLmpzLm1hcCIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmV0dXJuIHdoZXRoZXIgYW55IGhhbmRsZXJzIGFyZVxuICogYXR0YWNoZWQgdG8gYSBwYXJ0aWN1bGFyIGhvb2suXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICBGdW5jdGlvbiB0aGF0IHJldHVybnMgd2hldGhlciBhbnkgaGFuZGxlcnMgYXJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoZWQgdG8gYSBwYXJ0aWN1bGFyIGhvb2suXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhhc0hvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgaG93IG1hbnkgaGFuZGxlcnMgYXJlIGF0dGFjaGVkIGZvciB0aGUgZ2l2ZW4gaG9vay5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gY2hlY2sgZm9yLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZXJlIGFyZSBoYW5kbGVycyB0aGF0IGFyZSBhdHRhY2hlZCB0byB0aGUgZ2l2ZW4gaG9vay5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBoYXNIb29rKGhvb2tOYW1lKSB7XG4gICAgcmV0dXJuIGhvb2tOYW1lIGluIGhvb2tzO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIYXNIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlSGFzSG9vay5qcy5tYXAiLCJpbXBvcnQgY3JlYXRlQWRkSG9vayBmcm9tICcuL2NyZWF0ZUFkZEhvb2snO1xuaW1wb3J0IGNyZWF0ZVJlbW92ZUhvb2sgZnJvbSAnLi9jcmVhdGVSZW1vdmVIb29rJztcbmltcG9ydCBjcmVhdGVIYXNIb29rIGZyb20gJy4vY3JlYXRlSGFzSG9vayc7XG5pbXBvcnQgY3JlYXRlUnVuSG9vayBmcm9tICcuL2NyZWF0ZVJ1bkhvb2snO1xuaW1wb3J0IGNyZWF0ZUN1cnJlbnRIb29rIGZyb20gJy4vY3JlYXRlQ3VycmVudEhvb2snO1xuaW1wb3J0IGNyZWF0ZURvaW5nSG9vayBmcm9tICcuL2NyZWF0ZURvaW5nSG9vayc7XG5pbXBvcnQgY3JlYXRlRGlkSG9vayBmcm9tICcuL2NyZWF0ZURpZEhvb2snO1xuLyoqXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBob29rcyBvYmplY3QuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgaG9va3MuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlSG9va3MoKSB7XG4gIHZhciBhY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGZpbHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBhY3Rpb25zLl9fY3VycmVudCA9IFtdO1xuICBmaWx0ZXJzLl9fY3VycmVudCA9IFtdO1xuICByZXR1cm4ge1xuICAgIGFkZEFjdGlvbjogY3JlYXRlQWRkSG9vayhhY3Rpb25zKSxcbiAgICBhZGRGaWx0ZXI6IGNyZWF0ZUFkZEhvb2soZmlsdGVycyksXG4gICAgcmVtb3ZlQWN0aW9uOiBjcmVhdGVSZW1vdmVIb29rKGFjdGlvbnMpLFxuICAgIHJlbW92ZUZpbHRlcjogY3JlYXRlUmVtb3ZlSG9vayhmaWx0ZXJzKSxcbiAgICBoYXNBY3Rpb246IGNyZWF0ZUhhc0hvb2soYWN0aW9ucyksXG4gICAgaGFzRmlsdGVyOiBjcmVhdGVIYXNIb29rKGZpbHRlcnMpLFxuICAgIHJlbW92ZUFsbEFjdGlvbnM6IGNyZWF0ZVJlbW92ZUhvb2soYWN0aW9ucywgdHJ1ZSksXG4gICAgcmVtb3ZlQWxsRmlsdGVyczogY3JlYXRlUmVtb3ZlSG9vayhmaWx0ZXJzLCB0cnVlKSxcbiAgICBkb0FjdGlvbjogY3JlYXRlUnVuSG9vayhhY3Rpb25zKSxcbiAgICBhcHBseUZpbHRlcnM6IGNyZWF0ZVJ1bkhvb2soZmlsdGVycywgdHJ1ZSksXG4gICAgY3VycmVudEFjdGlvbjogY3JlYXRlQ3VycmVudEhvb2soYWN0aW9ucyksXG4gICAgY3VycmVudEZpbHRlcjogY3JlYXRlQ3VycmVudEhvb2soZmlsdGVycyksXG4gICAgZG9pbmdBY3Rpb246IGNyZWF0ZURvaW5nSG9vayhhY3Rpb25zKSxcbiAgICBkb2luZ0ZpbHRlcjogY3JlYXRlRG9pbmdIb29rKGZpbHRlcnMpLFxuICAgIGRpZEFjdGlvbjogY3JlYXRlRGlkSG9vayhhY3Rpb25zKSxcbiAgICBkaWRGaWx0ZXI6IGNyZWF0ZURpZEhvb2soZmlsdGVycyksXG4gICAgYWN0aW9uczogYWN0aW9ucyxcbiAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvb2tzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlSG9va3MuanMubWFwIiwiaW1wb3J0IHZhbGlkYXRlTmFtZXNwYWNlIGZyb20gJy4vdmFsaWRhdGVOYW1lc3BhY2UuanMnO1xuaW1wb3J0IHZhbGlkYXRlSG9va05hbWUgZnJvbSAnLi92YWxpZGF0ZUhvb2tOYW1lLmpzJztcbmltcG9ydCB7IGRvQWN0aW9uIH0gZnJvbSAnLi8nO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZW1vdmUgYSBzcGVjaWZpZWQgaG9vayBvciBhbGxcbiAqIGhvb2tzIGJ5IHRoZSBnaXZlbiBuYW1lLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyAgICAgIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICogQHBhcmFtICB7Ym9vbGVhbn0gICAgIHJlbW92ZUFsbCAgV2hldGhlciB0byByZW1vdmUgYWxsIGNhbGxiYWNrcyBmb3IgYSBob29rTmFtZSwgd2l0aG91dCByZWdhcmQgdG8gbmFtZXNwYWNlLiBVc2VkIHRvIGNyZWF0ZSBgcmVtb3ZlQWxsKmAgZnVuY3Rpb25zLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgIEZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyBob29rcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSZW1vdmVIb29rKGhvb2tzLCByZW1vdmVBbGwpIHtcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCBjYWxsYmFjayAob3IgYWxsIGNhbGxiYWNrcykgZnJvbSB0aGUgaG9vayB3aXRoIGFcbiAgICogZ2l2ZW4gaG9va05hbWUgYW5kIG5hbWVzcGFjZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgIGhvb2tOYW1lICBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBtb2RpZnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBuYW1lc3BhY2UgVGhlIHVuaXF1ZSBuYW1lc3BhY2UgaWRlbnRpZnlpbmcgdGhlIGNhbGxiYWNrIGluIHRoZSBmb3JtIGB2ZW5kb3IvcGx1Z2luL2Z1bmN0aW9uYC5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgICAgICBUaGUgbnVtYmVyIG9mIGNhbGxiYWNrcyByZW1vdmVkLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUhvb2soaG9va05hbWUsIG5hbWVzcGFjZSkge1xuICAgIGlmICghdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXJlbW92ZUFsbCAmJiAhdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQmFpbCBpZiBubyBob29rcyBleGlzdCBieSB0aGlzIG5hbWVcblxuXG4gICAgaWYgKCFob29rc1tob29rTmFtZV0pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVyc1JlbW92ZWQgPSAwO1xuXG4gICAgaWYgKHJlbW92ZUFsbCkge1xuICAgICAgaGFuZGxlcnNSZW1vdmVkID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzLmxlbmd0aDtcbiAgICAgIGhvb2tzW2hvb2tOYW1lXSA9IHtcbiAgICAgICAgcnVuczogaG9va3NbaG9va05hbWVdLnJ1bnMsXG4gICAgICAgIGhhbmRsZXJzOiBbXVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIHNwZWNpZmllZCBjYWxsYmFjayB0byByZW1vdmUuXG4gICAgICB2YXIgaGFuZGxlcnMgPSBob29rc1tob29rTmFtZV0uaGFuZGxlcnM7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgICAgaWYgKGhhbmRsZXJzW2ldLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKSB7XG4gICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGhhbmRsZXJzUmVtb3ZlZCsrOyAvLyBUaGlzIGNhbGxiYWNrIG1heSBhbHNvIGJlIHBhcnQgb2YgYSBob29rIHRoYXQgaXNcbiAgICAgICAgICAvLyBjdXJyZW50bHkgZXhlY3V0aW5nLiAgSWYgdGhlIGNhbGxiYWNrIHdlJ3JlIHJlbW92aW5nXG4gICAgICAgICAgLy8gY29tZXMgYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbGJhY2ssIHRoZXJlJ3Mgbm8gcHJvYmxlbTtcbiAgICAgICAgICAvLyBvdGhlcndpc2Ugd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgZXhlY3V0aW9uIGluZGV4IG9mIGFueVxuICAgICAgICAgIC8vIG90aGVyIHJ1bnMgYnkgMSB0byBhY2NvdW50IGZvciB0aGUgcmVtb3ZlZCBlbGVtZW50LlxuXG4gICAgICAgICAgKGhvb2tzLl9fY3VycmVudCB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoaG9va0luZm8pIHtcbiAgICAgICAgICAgIGlmIChob29rSW5mby5uYW1lID09PSBob29rTmFtZSAmJiBob29rSW5mby5jdXJyZW50SW5kZXggPj0gaSkge1xuICAgICAgICAgICAgICBob29rSW5mby5jdXJyZW50SW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgaSA9IGhhbmRsZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIF9sb29wKGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChob29rTmFtZSAhPT0gJ2hvb2tSZW1vdmVkJykge1xuICAgICAgZG9BY3Rpb24oJ2hvb2tSZW1vdmVkJywgaG9va05hbWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZXJzUmVtb3ZlZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVtb3ZlSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZVJlbW92ZUhvb2suanMubWFwIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCBleGVjdXRlIGFsbCBjYWxsYmFja3NcbiAqIHJlZ2lzdGVyZWQgdG8gYSBob29rIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSwgb3B0aW9uYWxseSByZXR1cm5pbmcgdGhlIGZpbmFsXG4gKiB2YWx1ZSBvZiB0aGUgY2FsbCBjaGFpbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICAgICAgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKiBAcGFyYW0gIHs/Ym9vbGVhbn0gICAgcmV0dXJuRmlyc3RBcmcgV2hldGhlciBlYWNoIGhvb2sgY2FsbGJhY2sgaXMgZXhwZWN0ZWQgdG9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRzIGZpcnN0IGFyZ3VtZW50LlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICBGdW5jdGlvbiB0aGF0IHJ1bnMgaG9vayBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJ1bkhvb2soaG9va3MsIHJldHVybkZpcnN0QXJnKSB7XG4gIC8qKlxuICAgKiBSdW5zIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBzcGVjaWZpZWQgaG9vay5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBob29rTmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBydW4uXG4gICAqIEBwYXJhbSAgey4uLip9ICAgYXJncyAgICAgQXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIGhvb2sgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBAcmV0dXJuIHsqfSAgICAgICAgICAgICAgIFJldHVybiB2YWx1ZSBvZiBydW5uZXIsIGlmIGFwcGxpY2FibGUuXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gcnVuSG9va3MoaG9va05hbWUpIHtcbiAgICBpZiAoIWhvb2tzW2hvb2tOYW1lXSkge1xuICAgICAgaG9va3NbaG9va05hbWVdID0ge1xuICAgICAgICBoYW5kbGVyczogW10sXG4gICAgICAgIHJ1bnM6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaG9va3NbaG9va05hbWVdLnJ1bnMrKztcbiAgICB2YXIgaGFuZGxlcnMgPSBob29rc1tob29rTmFtZV0uaGFuZGxlcnM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoIWhhbmRsZXJzIHx8ICFoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByZXR1cm5GaXJzdEFyZyA/IGFyZ3NbMF0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGhvb2tJbmZvID0ge1xuICAgICAgbmFtZTogaG9va05hbWUsXG4gICAgICBjdXJyZW50SW5kZXg6IDBcbiAgICB9O1xuXG4gICAgaG9va3MuX19jdXJyZW50LnB1c2goaG9va0luZm8pO1xuXG4gICAgd2hpbGUgKGhvb2tJbmZvLmN1cnJlbnRJbmRleCA8IGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgdmFyIGhhbmRsZXIgPSBoYW5kbGVyc1tob29rSW5mby5jdXJyZW50SW5kZXhdO1xuICAgICAgdmFyIHJlc3VsdCA9IGhhbmRsZXIuY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XG5cbiAgICAgIGlmIChyZXR1cm5GaXJzdEFyZykge1xuICAgICAgICBhcmdzWzBdID0gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBob29rSW5mby5jdXJyZW50SW5kZXgrKztcbiAgICB9XG5cbiAgICBob29rcy5fX2N1cnJlbnQucG9wKCk7XG5cbiAgICBpZiAocmV0dXJuRmlyc3RBcmcpIHtcbiAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUnVuSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZVJ1bkhvb2suanMubWFwIiwiaW1wb3J0IGNyZWF0ZUhvb2tzIGZyb20gJy4vY3JlYXRlSG9va3MnO1xuXG52YXIgX2NyZWF0ZUhvb2tzID0gY3JlYXRlSG9va3MoKSxcbiAgICBhZGRBY3Rpb24gPSBfY3JlYXRlSG9va3MuYWRkQWN0aW9uLFxuICAgIGFkZEZpbHRlciA9IF9jcmVhdGVIb29rcy5hZGRGaWx0ZXIsXG4gICAgcmVtb3ZlQWN0aW9uID0gX2NyZWF0ZUhvb2tzLnJlbW92ZUFjdGlvbixcbiAgICByZW1vdmVGaWx0ZXIgPSBfY3JlYXRlSG9va3MucmVtb3ZlRmlsdGVyLFxuICAgIGhhc0FjdGlvbiA9IF9jcmVhdGVIb29rcy5oYXNBY3Rpb24sXG4gICAgaGFzRmlsdGVyID0gX2NyZWF0ZUhvb2tzLmhhc0ZpbHRlcixcbiAgICByZW1vdmVBbGxBY3Rpb25zID0gX2NyZWF0ZUhvb2tzLnJlbW92ZUFsbEFjdGlvbnMsXG4gICAgcmVtb3ZlQWxsRmlsdGVycyA9IF9jcmVhdGVIb29rcy5yZW1vdmVBbGxGaWx0ZXJzLFxuICAgIGRvQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmRvQWN0aW9uLFxuICAgIGFwcGx5RmlsdGVycyA9IF9jcmVhdGVIb29rcy5hcHBseUZpbHRlcnMsXG4gICAgY3VycmVudEFjdGlvbiA9IF9jcmVhdGVIb29rcy5jdXJyZW50QWN0aW9uLFxuICAgIGN1cnJlbnRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuY3VycmVudEZpbHRlcixcbiAgICBkb2luZ0FjdGlvbiA9IF9jcmVhdGVIb29rcy5kb2luZ0FjdGlvbixcbiAgICBkb2luZ0ZpbHRlciA9IF9jcmVhdGVIb29rcy5kb2luZ0ZpbHRlcixcbiAgICBkaWRBY3Rpb24gPSBfY3JlYXRlSG9va3MuZGlkQWN0aW9uLFxuICAgIGRpZEZpbHRlciA9IF9jcmVhdGVIb29rcy5kaWRGaWx0ZXIsXG4gICAgYWN0aW9ucyA9IF9jcmVhdGVIb29rcy5hY3Rpb25zLFxuICAgIGZpbHRlcnMgPSBfY3JlYXRlSG9va3MuZmlsdGVycztcblxuZXhwb3J0IHsgY3JlYXRlSG9va3MsIGFkZEFjdGlvbiwgYWRkRmlsdGVyLCByZW1vdmVBY3Rpb24sIHJlbW92ZUZpbHRlciwgaGFzQWN0aW9uLCBoYXNGaWx0ZXIsIHJlbW92ZUFsbEFjdGlvbnMsIHJlbW92ZUFsbEZpbHRlcnMsIGRvQWN0aW9uLCBhcHBseUZpbHRlcnMsIGN1cnJlbnRBY3Rpb24sIGN1cnJlbnRGaWx0ZXIsIGRvaW5nQWN0aW9uLCBkb2luZ0ZpbHRlciwgZGlkQWN0aW9uLCBkaWRGaWx0ZXIsIGFjdGlvbnMsIGZpbHRlcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogVmFsaWRhdGUgYSBob29rTmFtZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBob29rTmFtZSBUaGUgaG9vayBuYW1lIHRvIHZhbGlkYXRlLiBTaG91bGQgYmUgYSBub24gZW1wdHkgc3RyaW5nIGNvbnRhaW5pbmdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seSBudW1iZXJzLCBsZXR0ZXJzLCBkYXNoZXMsIHBlcmlvZHMgYW5kIHVuZGVyc2NvcmVzLiBBbHNvLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaG9vayBuYW1lIGNhbm5vdCBiZWdpbiB3aXRoIGBfX2AuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICBXaGV0aGVyIHRoZSBob29rIG5hbWUgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSG9va05hbWUoaG9va05hbWUpIHtcbiAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgaG9va05hbWUgfHwgJycgPT09IGhvb2tOYW1lKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgaG9vayBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICgvXl9fLy50ZXN0KGhvb2tOYW1lKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBjYW5ub3QgYmVnaW4gd2l0aCBgX19gLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghL15bYS16QS1aXVthLXpBLVowLTlfLi1dKiQvLnRlc3QoaG9va05hbWUpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgaG9vayBuYW1lIGNhbiBvbmx5IGNvbnRhaW4gbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzIGFuZCB1bmRlcnNjb3Jlcy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVIb29rTmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbGlkYXRlSG9va05hbWUuanMubWFwIiwiLyoqXG4gKiBWYWxpZGF0ZSBhIG5hbWVzcGFjZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSB0byB2YWxpZGF0ZSAtIHNob3VsZCB0YWtlIHRoZSBmb3JtXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdmVuZG9yL3BsdWdpbi9mdW5jdGlvbmAuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgV2hldGhlciB0aGUgbmFtZXNwYWNlIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgbmFtZXNwYWNlIHx8ICcnID09PSBuYW1lc3BhY2UpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBuYW1lc3BhY2UgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWjAtOV8uXFwtXFwvXSokLy50ZXN0KG5hbWVzcGFjZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBuYW1lc3BhY2UgY2FuIG9ubHkgY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzLCBkYXNoZXMsIHBlcmlvZHMsIHVuZGVyc2NvcmVzIGFuZCBzbGFzaGVzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZU5hbWVzcGFjZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbGlkYXRlTmFtZXNwYWNlLmpzLm1hcCIsImNsYXNzIEpTX1BhcnNlX0FyZ3Mge1xyXG5cdGNvbnN0cnVjdG9yKCAkYXJncyA9IHt9LCAkZGVmYXVsdHMgPSB7fSwgJGlzX25lc3RlZCA9IGZhbHNlICkge1xyXG5cdFx0dGhpcy5hcmdzICAgICA9ICRhcmdzO1xyXG5cdFx0dGhpcy5kZWZhdWx0cyA9ICRkZWZhdWx0cztcclxuXHRcdHRoaXMubmVzdGVkICAgPSAkaXNfbmVzdGVkO1xyXG5cdFx0dGhpcy5wYXJzZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuYXJncztcclxuXHR9XHJcblxyXG5cdHBhcnNlKCkge1xyXG5cdFx0Zm9yKCBsZXQgJF9rZXkgaW4gdGhpcy5kZWZhdWx0cyApIHtcclxuXHRcdFx0aWYoIHRydWUgPT09IHRoaXMubmVzdGVkICYmIHR5cGVvZiAgdGhpcy5kZWZhdWx0c1sgJF9rZXkgXSA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gbmV3IEpTX1BhcnNlX0FyZ3MoIHRoaXMuYXJnc1sgJF9rZXkgXSwgdGhpcy5kZWZhdWx0c1sgJF9rZXkgXSwgdGhpcy5uZXN0ZWQgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiggdHlwZW9mIHRoaXMuYXJnc1sgJF9rZXkgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFyZ3NbICRfa2V5IF0gPSB0aGlzLmRlZmF1bHRzWyAkX2tleSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAkYXJncyA9IHt9LCAkZGVmYXVsdHMgPSB7fSwgJGlzX2RlZXAgPSBmYWxzZSApID0+IG5ldyBKU19QYXJzZV9BcmdzKCAkYXJncywgJGRlZmF1bHRzLCAkaXNfZGVlcCApOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtaWNyb3RpbWUoZ2V0QXNGbG9hdCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21pY3JvdGltZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gaW1wcm92ZWQgYnk6IER1bWl0cnUgVXp1biAoaHR0cDovL2R1enVuLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICR0aW1lU3RhbXAgPSBtaWNyb3RpbWUodHJ1ZSlcbiAgLy8gICBleGFtcGxlIDE6ICR0aW1lU3RhbXAgPiAxMDAwMDAwMDAwICYmICR0aW1lU3RhbXAgPCAyMDAwMDAwMDAwXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiAvXjBcXC5bMC05XXsxLDZ9IFswLTldezEwLDEwfSQvLnRlc3QobWljcm90aW1lKCkpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG5cbiAgdmFyIHM7XG4gIHZhciBub3c7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG5vdyA9IChwZXJmb3JtYW5jZS5ub3coKSArIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWU2KSAvIDFlNiArICcgJyArIHM7XG4gIH0gZWxzZSB7XG4gICAgbm93ID0gKERhdGUubm93ID8gRGF0ZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlMykgLyAxZTMgKyAnICcgKyBzO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWljcm90aW1lLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsX3VzZXJfZnVuYyhjYiwgcGFyYW1ldGVycykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NhbGxfdXNlcl9mdW5jL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kcyBvbiBjYWxsX3VzZXJfZnVuY19hcnJheSB3aGljaCBpbiB0dXJuIGRlcGVuZHMgb24gdGhlIGBjYmAgdGhhdCBpcyBwYXNzZWQsXG4gIC8vICAgICAgbm90ZSAxOiB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgYGV2YWxgLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jKCdpc05hTicsICdhJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcblxuICB2YXIgY2FsbFVzZXJGdW5jQXJyYXkgPSByZXF1aXJlKCcuLi9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScpO1xuICBwYXJhbWV0ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIGNhbGxVc2VyRnVuY0FycmF5KGNiLCBwYXJhbWV0ZXJzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxsX3VzZXJfZnVuYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsX3VzZXJfZnVuY19hcnJheShjYiwgcGFyYW1ldGVycykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NhbGxfdXNlcl9mdW5jX2FycmF5L1xuICAvLyBvcmlnaW5hbCBieTogVGhpYWdvIE1hdGEgKGh0dHA6Ly90aGlhZ29tYXRhLmJsb2cuY29tKVxuICAvLyAgcmV2aXNlZCBieTogSm9uIEhvaGxlXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRpbmcgb24gdGhlIGBjYmAgdGhhdCBpcyBwYXNzZWQsXG4gIC8vICAgICAgbm90ZSAxOiB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgYGV2YWxgIGFuZC9vciBgbmV3IEZ1bmN0aW9uYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbJ2EnXSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsxXSlcbiAgLy8gICByZXR1cm5zIDI6IGZhbHNlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgdmFyIGZ1bmM7XG4gIHZhciBzY29wZSA9IG51bGw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIGlmICh0eXBlb2YgY2IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZnVuYyA9ICRnbG9iYWxbY2JdO1xuICAgIH0gZWxzZSBpZiAoY2IubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICBmdW5jID0gbmV3IEZ1bmN0aW9uKG51bGwsICdyZXR1cm4gJyArIGNiKSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy1mdW5jXG4gICAgfVxuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjYikgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBmdW5jID0gZXZhbChjYlswXSArIFwiWydcIiArIGNiWzFdICsgXCInXVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMgPSBjYlswXVtjYlsxXV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYlswXV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2NvcGUgPSAkZ2xvYmFsW2NiWzBdXTtcbiAgICAgIH0gZWxzZSBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIHNjb3BlID0gZXZhbChjYlswXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3R5cGVvZihjYlswXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBzY29wZSA9IGNiWzBdO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmdW5jID0gY2I7XG4gIH1cblxuICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZnVuYyArICcgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jLmFwcGx5KHNjb3BlLCBwYXJhbWV0ZXJzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxsX3VzZXJfZnVuY19hcnJheS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlX2Z1bmN0aW9uKGFyZ3MsIGNvZGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2NyZWF0ZV9mdW5jdGlvbi9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogSm9obm55IE1hc3QgKGh0dHA6Ly93d3cucGhwdnJvdXdlbi5ubClcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRmID0gY3JlYXRlX2Z1bmN0aW9uKCdhLCBiJywgJ3JldHVybiAoYSArIGIpJylcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogJGYoMSwgMilcbiAgLy8gICAgICAgIHJldHVybnMgMTogM1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLmFwcGx5KG51bGwsIGFyZ3Muc3BsaXQoJywnKS5jb25jYXQoY29kZSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlX2Z1bmN0aW9uLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmdW5jdGlvbl9leGlzdHMoZnVuY05hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9mdW5jdGlvbl9leGlzdHMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogU3RldmUgQ2xheVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IGZ1bmN0aW9uX2V4aXN0cygnaXNGaW5pdGUnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgICAgICAgdGVzdDogc2tpcC0xXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICBpZiAodHlwZW9mIGZ1bmNOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGZ1bmNOYW1lID0gJGdsb2JhbFtmdW5jTmFtZV07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIGZ1bmNOYW1lID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZ1bmN0aW9uX2V4aXN0cy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5pX2dldCh2YXJuYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaW5pX2dldC9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgaW5pIHZhbHVlcyBtdXN0IGJlIHNldCBieSBpbmlfc2V0IG9yIG1hbnVhbGx5IHdpdGhpbiBhbiBpbmkgZmlsZVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX3NldCgnZGF0ZS50aW1lem9uZScsICdBc2lhL0hvbmdfS29uZycpXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfZ2V0KCdkYXRlLnRpbWV6b25lJylcbiAgLy8gICByZXR1cm5zIDE6ICdBc2lhL0hvbmdfS29uZydcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuICAkbG9jdXR1cy5waHAuaW5pID0gJGxvY3V0dXMucGhwLmluaSB8fCB7fTtcblxuICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXSAmJiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmlfZ2V0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZDUoc3RyKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvbWQ1L1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBub3RlIDE6IEtlZXAgaW4gbWluZCB0aGF0IGluIGFjY29yZGFuY2Ugd2l0aCBQSFAsIHRoZSB3aG9sZSBzdHJpbmcgaXMgYnVmZmVyZWQgYW5kIHRoZW5cbiAgLy8gICAgICBub3RlIDE6IGhhc2hlZC4gSWYgYXZhaWxhYmxlLCB3ZSdkIHJlY29tbWVuZCB1c2luZyBOb2RlJ3MgbmF0aXZlIGNyeXB0byBtb2R1bGVzIGRpcmVjdGx5XG4gIC8vICAgICAgbm90ZSAxOiBpbiBhIHN0ZWFtaW5nIGZhc2hpb24gZm9yIGZhc3RlciBhbmQgbW9yZSBlZmZpY2llbnQgaGFzaGluZ1xuICAvLyAgIGV4YW1wbGUgMTogbWQ1KCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICc2ZTY1OGQ0YmZjYjU5Y2MxM2Y5NmMxNDQ1MGFjNDBiOSdcblxuICB2YXIgaGFzaDtcbiAgdHJ5IHtcbiAgICB2YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gICAgdmFyIG1kNXN1bSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgICBtZDVzdW0udXBkYXRlKHN0cik7XG4gICAgaGFzaCA9IG1kNXN1bS5kaWdlc3QoJ2hleCcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFzaCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHZhciB1dGY4RW5jb2RlID0gcmVxdWlyZSgnLi4veG1sL3V0ZjhfZW5jb2RlJyk7XG4gIHZhciB4bDtcblxuICB2YXIgX3JvdGF0ZUxlZnQgPSBmdW5jdGlvbiBfcm90YXRlTGVmdChsVmFsdWUsIGlTaGlmdEJpdHMpIHtcbiAgICByZXR1cm4gbFZhbHVlIDw8IGlTaGlmdEJpdHMgfCBsVmFsdWUgPj4+IDMyIC0gaVNoaWZ0Qml0cztcbiAgfTtcblxuICB2YXIgX2FkZFVuc2lnbmVkID0gZnVuY3Rpb24gX2FkZFVuc2lnbmVkKGxYLCBsWSkge1xuICAgIHZhciBsWDQsIGxZNCwgbFg4LCBsWTgsIGxSZXN1bHQ7XG4gICAgbFg4ID0gbFggJiAweDgwMDAwMDAwO1xuICAgIGxZOCA9IGxZICYgMHg4MDAwMDAwMDtcbiAgICBsWDQgPSBsWCAmIDB4NDAwMDAwMDA7XG4gICAgbFk0ID0gbFkgJiAweDQwMDAwMDAwO1xuICAgIGxSZXN1bHQgPSAobFggJiAweDNGRkZGRkZGKSArIChsWSAmIDB4M0ZGRkZGRkYpO1xuICAgIGlmIChsWDQgJiBsWTQpIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gMHg4MDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICB9XG4gICAgaWYgKGxYNCB8IGxZNCkge1xuICAgICAgaWYgKGxSZXN1bHQgJiAweDQwMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiBsUmVzdWx0IF4gMHhDMDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsUmVzdWx0IF4gMHg0MDAwMDAwMCBeIGxYOCBeIGxZODtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxSZXN1bHQgXiBsWDggXiBsWTg7XG4gICAgfVxuICB9O1xuXG4gIHZhciBfRiA9IGZ1bmN0aW9uIF9GKHgsIHksIHopIHtcbiAgICByZXR1cm4geCAmIHkgfCB+eCAmIHo7XG4gIH07XG4gIHZhciBfRyA9IGZ1bmN0aW9uIF9HKHgsIHksIHopIHtcbiAgICByZXR1cm4geCAmIHogfCB5ICYgfno7XG4gIH07XG4gIHZhciBfSCA9IGZ1bmN0aW9uIF9IKHgsIHksIHopIHtcbiAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9O1xuICB2YXIgX0kgPSBmdW5jdGlvbiBfSSh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHkgXiAoeCB8IH56KTtcbiAgfTtcblxuICB2YXIgX0ZGID0gZnVuY3Rpb24gX0ZGKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9GKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0dHID0gZnVuY3Rpb24gX0dHKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9HKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0hIID0gZnVuY3Rpb24gX0hIKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9IKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX0lJID0gZnVuY3Rpb24gX0lJKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBfYWRkVW5zaWduZWQoX2FkZFVuc2lnbmVkKF9JKGIsIGMsIGQpLCB4KSwgYWMpKTtcbiAgICByZXR1cm4gX2FkZFVuc2lnbmVkKF9yb3RhdGVMZWZ0KGEsIHMpLCBiKTtcbiAgfTtcblxuICB2YXIgX2NvbnZlcnRUb1dvcmRBcnJheSA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKSB7XG4gICAgdmFyIGxXb3JkQ291bnQ7XG4gICAgdmFyIGxNZXNzYWdlTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICB2YXIgbE51bWJlck9mV29yZHNUZW1wMSA9IGxNZXNzYWdlTGVuZ3RoICsgODtcbiAgICB2YXIgbE51bWJlck9mV29yZHNUZW1wMiA9IChsTnVtYmVyT2ZXb3Jkc1RlbXAxIC0gbE51bWJlck9mV29yZHNUZW1wMSAlIDY0KSAvIDY0O1xuICAgIHZhciBsTnVtYmVyT2ZXb3JkcyA9IChsTnVtYmVyT2ZXb3Jkc1RlbXAyICsgMSkgKiAxNjtcbiAgICB2YXIgbFdvcmRBcnJheSA9IG5ldyBBcnJheShsTnVtYmVyT2ZXb3JkcyAtIDEpO1xuICAgIHZhciBsQnl0ZVBvc2l0aW9uID0gMDtcbiAgICB2YXIgbEJ5dGVDb3VudCA9IDA7XG4gICAgd2hpbGUgKGxCeXRlQ291bnQgPCBsTWVzc2FnZUxlbmd0aCkge1xuICAgICAgbFdvcmRDb3VudCA9IChsQnl0ZUNvdW50IC0gbEJ5dGVDb3VudCAlIDQpIC8gNDtcbiAgICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gbFdvcmRBcnJheVtsV29yZENvdW50XSB8IHN0ci5jaGFyQ29kZUF0KGxCeXRlQ291bnQpIDw8IGxCeXRlUG9zaXRpb247XG4gICAgICBsQnl0ZUNvdW50Kys7XG4gICAgfVxuICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgbEJ5dGVQb3NpdGlvbiA9IGxCeXRlQ291bnQgJSA0ICogODtcbiAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gbFdvcmRBcnJheVtsV29yZENvdW50XSB8IDB4ODAgPDwgbEJ5dGVQb3NpdGlvbjtcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMl0gPSBsTWVzc2FnZUxlbmd0aCA8PCAzO1xuICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAxXSA9IGxNZXNzYWdlTGVuZ3RoID4+PiAyOTtcbiAgICByZXR1cm4gbFdvcmRBcnJheTtcbiAgfTtcblxuICB2YXIgX3dvcmRUb0hleCA9IGZ1bmN0aW9uIF93b3JkVG9IZXgobFZhbHVlKSB7XG4gICAgdmFyIHdvcmRUb0hleFZhbHVlID0gJyc7XG4gICAgdmFyIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcnO1xuICAgIHZhciBsQnl0ZTtcbiAgICB2YXIgbENvdW50O1xuXG4gICAgZm9yIChsQ291bnQgPSAwOyBsQ291bnQgPD0gMzsgbENvdW50KyspIHtcbiAgICAgIGxCeXRlID0gbFZhbHVlID4+PiBsQ291bnQgKiA4ICYgMjU1O1xuICAgICAgd29yZFRvSGV4VmFsdWVUZW1wID0gJzAnICsgbEJ5dGUudG9TdHJpbmcoMTYpO1xuICAgICAgd29yZFRvSGV4VmFsdWUgPSB3b3JkVG9IZXhWYWx1ZSArIHdvcmRUb0hleFZhbHVlVGVtcC5zdWJzdHIod29yZFRvSGV4VmFsdWVUZW1wLmxlbmd0aCAtIDIsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZFRvSGV4VmFsdWU7XG4gIH07XG5cbiAgdmFyIHggPSBbXTtcbiAgdmFyIGs7XG4gIHZhciBBQTtcbiAgdmFyIEJCO1xuICB2YXIgQ0M7XG4gIHZhciBERDtcbiAgdmFyIGE7XG4gIHZhciBiO1xuICB2YXIgYztcbiAgdmFyIGQ7XG4gIHZhciBTMTEgPSA3O1xuICB2YXIgUzEyID0gMTI7XG4gIHZhciBTMTMgPSAxNztcbiAgdmFyIFMxNCA9IDIyO1xuICB2YXIgUzIxID0gNTtcbiAgdmFyIFMyMiA9IDk7XG4gIHZhciBTMjMgPSAxNDtcbiAgdmFyIFMyNCA9IDIwO1xuICB2YXIgUzMxID0gNDtcbiAgdmFyIFMzMiA9IDExO1xuICB2YXIgUzMzID0gMTY7XG4gIHZhciBTMzQgPSAyMztcbiAgdmFyIFM0MSA9IDY7XG4gIHZhciBTNDIgPSAxMDtcbiAgdmFyIFM0MyA9IDE1O1xuICB2YXIgUzQ0ID0gMjE7XG5cbiAgc3RyID0gdXRmOEVuY29kZShzdHIpO1xuICB4ID0gX2NvbnZlcnRUb1dvcmRBcnJheShzdHIpO1xuICBhID0gMHg2NzQ1MjMwMTtcbiAgYiA9IDB4RUZDREFCODk7XG4gIGMgPSAweDk4QkFEQ0ZFO1xuICBkID0gMHgxMDMyNTQ3NjtcblxuICB4bCA9IHgubGVuZ3RoO1xuICBmb3IgKGsgPSAwOyBrIDwgeGw7IGsgKz0gMTYpIHtcbiAgICBBQSA9IGE7XG4gICAgQkIgPSBiO1xuICAgIENDID0gYztcbiAgICBERCA9IGQ7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAwXSwgUzExLCAweEQ3NkFBNDc4KTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDFdLCBTMTIsIDB4RThDN0I3NTYpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMl0sIFMxMywgMHgyNDIwNzBEQik7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAzXSwgUzE0LCAweEMxQkRDRUVFKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTMTEsIDB4RjU3QzBGQUYpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgNV0sIFMxMiwgMHg0Nzg3QzYyQSk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyA2XSwgUzEzLCAweEE4MzA0NjEzKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDddLCBTMTQsIDB4RkQ0Njk1MDEpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgOF0sIFMxMSwgMHg2OTgwOThEOCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyA5XSwgUzEyLCAweDhCNDRGN0FGKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzEzLCAweEZGRkY1QkIxKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDExXSwgUzE0LCAweDg5NUNEN0JFKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzExLCAweDZCOTAxMTIyKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDEzXSwgUzEyLCAweEZEOTg3MTkzKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDE0XSwgUzEzLCAweEE2Nzk0MzhFKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDE1XSwgUzE0LCAweDQ5QjQwODIxKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMjEsIDB4RjYxRTI1NjIpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgNl0sIFMyMiwgMHhDMDQwQjM0MCk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAxMV0sIFMyMywgMHgyNjVFNUE1MSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyAwXSwgUzI0LCAweEU5QjZDN0FBKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDVdLCBTMjEsIDB4RDYyRjEwNUQpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMTBdLCBTMjIsIDB4MjQ0MTQ1Myk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMyMywgMHhEOEExRTY4MSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyA0XSwgUzI0LCAweEU3RDNGQkM4KTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDldLCBTMjEsIDB4MjFFMUNERTYpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMTRdLCBTMjIsIDB4QzMzNzA3RDYpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgM10sIFMyMywgMHhGNEQ1MEQ4Nyk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyA4XSwgUzI0LCAweDQ1NUExNEVEKTtcbiAgICBhID0gX0dHKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzIxLCAweEE5RTNFOTA1KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDJdLCBTMjIsIDB4RkNFRkEzRjgpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgN10sIFMyMywgMHg2NzZGMDJEOSk7XG4gICAgYiA9IF9HRyhiLCBjLCBkLCBhLCB4W2sgKyAxMl0sIFMyNCwgMHg4RDJBNEM4QSk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzMxLCAweEZGRkEzOTQyKTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDhdLCBTMzIsIDB4ODc3MUY2ODEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMzMsIDB4NkQ5RDYxMjIpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMTRdLCBTMzQsIDB4RkRFNTM4MEMpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgMV0sIFMzMSwgMHhBNEJFRUE0NCk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA0XSwgUzMyLCAweDRCREVDRkE5KTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMzMsIDB4RjZCQjRCNjApO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMTBdLCBTMzQsIDB4QkVCRkJDNzApO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMzEsIDB4Mjg5QjdFQzYpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgMF0sIFMzMiwgMHhFQUExMjdGQSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAzXSwgUzMzLCAweEQ0RUYzMDg1KTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDZdLCBTMzQsIDB4NDg4MUQwNSk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzMxLCAweEQ5RDREMDM5KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDEyXSwgUzMyLCAweEU2REI5OUU1KTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzMzLCAweDFGQTI3Q0Y4KTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDJdLCBTMzQsIDB4QzRBQzU2NjUpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgMF0sIFM0MSwgMHhGNDI5MjI0NCk7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyA3XSwgUzQyLCAweDQzMkFGRjk3KTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDE0XSwgUzQzLCAweEFCOTQyM0E3KTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDVdLCBTNDQsIDB4RkM5M0EwMzkpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTNDEsIDB4NjU1QjU5QzMpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgM10sIFM0MiwgMHg4RjBDQ0M5Mik7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFM0MywgMHhGRkVGRjQ3RCk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyAxXSwgUzQ0LCAweDg1ODQ1REQxKTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTNDEsIDB4NkZBODdFNEYpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgMTVdLCBTNDIsIDB4RkUyQ0U2RTApO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgNl0sIFM0MywgMHhBMzAxNDMxNCk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyAxM10sIFM0NCwgMHg0RTA4MTFBMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzQxLCAweEY3NTM3RTgyKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDExXSwgUzQyLCAweEJEM0FGMjM1KTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTNDMsIDB4MkFEN0QyQkIpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgOV0sIFM0NCwgMHhFQjg2RDM5MSk7XG4gICAgYSA9IF9hZGRVbnNpZ25lZChhLCBBQSk7XG4gICAgYiA9IF9hZGRVbnNpZ25lZChiLCBCQik7XG4gICAgYyA9IF9hZGRVbnNpZ25lZChjLCBDQyk7XG4gICAgZCA9IF9hZGRVbnNpZ25lZChkLCBERCk7XG4gIH1cblxuICB2YXIgdGVtcCA9IF93b3JkVG9IZXgoYSkgKyBfd29yZFRvSGV4KGIpICsgX3dvcmRUb0hleChjKSArIF93b3JkVG9IZXgoZCk7XG5cbiAgcmV0dXJuIHRlbXAudG9Mb3dlckNhc2UoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZDUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlX3N0cihzdHIsIGFycmF5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9wYXJzZV9zdHIvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IENhZ3JpIEVraW5cbiAgLy8gICAgICBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE1JT19LT0RVS0kgKGh0dHA6Ly9taW8ta29kdWtpLmJsb2dzcG90LmNvbS8pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgICAgICBpbnB1dCBieTogRHJlYW1lclxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBaYWlkZSAoaHR0cDovL3phaWRlc3RoaW5ncy5jb20vKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBEYXZpZCBQZXN0YSAoaHR0cDovL2RhdmlkcGVzdGEuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogamVpY3F1ZXN0XG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBXaGVuIG5vIGFyZ3VtZW50IGlzIHNwZWNpZmllZCwgd2lsbCBwdXQgdmFyaWFibGVzIGluIGdsb2JhbCBzY29wZS5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBhIHBhcnRpY3VsYXIgYXJndW1lbnQgaGFzIGJlZW4gcGFzc2VkLCBhbmQgdGhlXG4gIC8vICAgICAgICAgICBub3RlIDE6IHJldHVybmVkIHZhbHVlIGlzIGRpZmZlcmVudCBwYXJzZV9zdHIgb2YgUEhQLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBGb3IgZXhhbXBsZSwgYT1iPWMmZD09PT1jXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcGFyc2Vfc3RyKCdmaXJzdD1mb28mc2Vjb25kPWJhcicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyAxOiB7IGZpcnN0OiAnZm9vJywgc2Vjb25kOiAnYmFyJyB9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgMjogcGFyc2Vfc3RyKCdzdHJfYT1KYWNrK2FuZCtKaWxsK2RpZG4lMjd0K3NlZSt0aGUrd2VsbC4nLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMjogeyBzdHJfYTogXCJKYWNrIGFuZCBKaWxsIGRpZG4ndCBzZWUgdGhlIHdlbGwuXCIgfVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiB2YXIgJGFiYyA9IHszOidhJ31cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcGFyc2Vfc3RyKCdhW2JdW1wiY1wiXT1kZWYmYVtxXT10KzUnLCAkYWJjKVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRhYmNcbiAgLy8gICAgICAgIHJldHVybnMgMzoge1wiM1wiOlwiYVwiLFwiYVwiOntcImJcIjp7XCJjXCI6XCJkZWZcIn0sXCJxXCI6XCJ0IDVcIn19XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogcGFyc2Vfc3RyKCdhW11bXT12YWx1ZScsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyA0OiB7XCJhXCI6e1wiMFwiOntcIjBcIjpcInZhbHVlXCJ9fX1cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiBwYXJzZV9zdHIoJ2E9MSZhW109MicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyA1OiB7XCJhXCI6e1wiMFwiOlwiMlwifX1cblxuICB2YXIgc3RyQXJyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvXiYvLCAnJykucmVwbGFjZSgvJiQvLCAnJykuc3BsaXQoJyYnKTtcbiAgdmFyIHNhbCA9IHN0ckFyci5sZW5ndGg7XG4gIHZhciBpO1xuICB2YXIgajtcbiAgdmFyIGN0O1xuICB2YXIgcDtcbiAgdmFyIGxhc3RPYmo7XG4gIHZhciBvYmo7XG4gIHZhciBjaHI7XG4gIHZhciB0bXA7XG4gIHZhciBrZXk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHBvc3RMZWZ0QnJhY2tldFBvcztcbiAgdmFyIGtleXM7XG4gIHZhciBrZXlzTGVuO1xuXG4gIHZhciBfZml4U3RyID0gZnVuY3Rpb24gX2ZpeFN0cihzdHIpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKTtcbiAgfTtcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fTtcbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cztcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9O1xuXG4gIGlmICghYXJyYXkpIHtcbiAgICBhcnJheSA9ICRnbG9iYWw7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgc2FsOyBpKyspIHtcbiAgICB0bXAgPSBzdHJBcnJbaV0uc3BsaXQoJz0nKTtcbiAgICBrZXkgPSBfZml4U3RyKHRtcFswXSk7XG4gICAgdmFsdWUgPSB0bXAubGVuZ3RoIDwgMiA/ICcnIDogX2ZpeFN0cih0bXBbMV0pO1xuXG4gICAgd2hpbGUgKGtleS5jaGFyQXQoMCkgPT09ICcgJykge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDEpO1xuICAgIH1cblxuICAgIGlmIChrZXkuaW5kZXhPZignXFx4MDAnKSA+IC0xKSB7XG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMCwga2V5LmluZGV4T2YoJ1xceDAwJykpO1xuICAgIH1cblxuICAgIGlmIChrZXkgJiYga2V5LmNoYXJBdCgwKSAhPT0gJ1snKSB7XG4gICAgICBrZXlzID0gW107XG4gICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSAwO1xuXG4gICAgICBmb3IgKGogPSAwOyBqIDwga2V5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChrZXkuY2hhckF0KGopID09PSAnWycgJiYgIXBvc3RMZWZ0QnJhY2tldFBvcykge1xuICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IGogKyAxO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5jaGFyQXQoaikgPT09ICddJykge1xuICAgICAgICAgIGlmIChwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zbGljZSgwLCBwb3N0TGVmdEJyYWNrZXRQb3MgLSAxKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleXMucHVzaChrZXkuc3Vic3RyKHBvc3RMZWZ0QnJhY2tldFBvcywgaiAtIHBvc3RMZWZ0QnJhY2tldFBvcykpO1xuICAgICAgICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoaiArIDEpICE9PSAnWycpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAga2V5cyA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGogPSAwOyBqIDwga2V5c1swXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjaHIgPSBrZXlzWzBdLmNoYXJBdChqKTtcblxuICAgICAgICBpZiAoY2hyID09PSAnICcgfHwgY2hyID09PSAnLicgfHwgY2hyID09PSAnWycpIHtcbiAgICAgICAgICBrZXlzWzBdID0ga2V5c1swXS5zdWJzdHIoMCwgaikgKyAnXycgKyBrZXlzWzBdLnN1YnN0cihqICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hyID09PSAnWycpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvYmogPSBhcnJheTtcblxuICAgICAgZm9yIChqID0gMCwga2V5c0xlbiA9IGtleXMubGVuZ3RoOyBqIDwga2V5c0xlbjsgaisrKSB7XG4gICAgICAgIGtleSA9IGtleXNbal0ucmVwbGFjZSgvXlsnXCJdLywgJycpLnJlcGxhY2UoL1snXCJdJC8sICcnKTtcbiAgICAgICAgbGFzdE9iaiA9IG9iajtcblxuICAgICAgICBpZiAoKGtleSA9PT0gJycgfHwga2V5ID09PSAnICcpICYmIGogIT09IDApIHtcbiAgICAgICAgICAvLyBJbnNlcnQgbmV3IGRpbWVuc2lvblxuICAgICAgICAgIGN0ID0gLTE7XG5cbiAgICAgICAgICBmb3IgKHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgIGlmICgrcCA+IGN0ICYmIHAubWF0Y2goL15cXGQrJC9nKSkge1xuICAgICAgICAgICAgICAgIGN0ID0gK3A7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBrZXkgPSBjdCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBwcmltaXRpdmUgdmFsdWUsIHJlcGxhY2Ugd2l0aCBvYmplY3RcbiAgICAgICAgaWYgKE9iamVjdChvYmpba2V5XSkgIT09IG9ialtrZXldKSB7XG4gICAgICAgICAgb2JqW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9IG9ialtrZXldO1xuICAgICAgfVxuXG4gICAgICBsYXN0T2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZV9zdHIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJ0cmltKHN0ciwgY2hhcmxpc3QpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9ydHJpbS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBFcmtla2pldHRlclxuICAvLyAgICBpbnB1dCBieTogcmVtXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICBleGFtcGxlIDE6IHJ0cmltKCcgICAgS2V2aW4gdmFuIFpvbm5ldmVsZCAgICAnKVxuICAvLyAgIHJldHVybnMgMTogJyAgICBLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIGNoYXJsaXN0ID0gIWNoYXJsaXN0ID8gJyBcXFxcc1xceEEwJyA6IChjaGFybGlzdCArICcnKS5yZXBsYWNlKC8oW1tcXF0oKS4/Lyp7fSskXjpdKS9nLCAnXFxcXCQxJyk7XG5cbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnWycgKyBjaGFybGlzdCArICddKyQnLCAnZycpO1xuXG4gIHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UocmUsICcnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydHJpbS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RycG9zKGhheXN0YWNrLCBuZWVkbGUsIG9mZnNldCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3N0cnBvcy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogRGFuaWVsIEVzdGViYW5cbiAgLy8gICBleGFtcGxlIDE6IHN0cnBvcygnS2V2aW4gdmFuIFpvbm5ldmVsZCcsICdlJywgNSlcbiAgLy8gICByZXR1cm5zIDE6IDE0XG5cbiAgdmFyIGkgPSAoaGF5c3RhY2sgKyAnJykuaW5kZXhPZihuZWVkbGUsIG9mZnNldCB8fCAwKTtcbiAgcmV0dXJuIGkgPT09IC0xID8gZmFsc2UgOiBpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnBvcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0X2RlY29kZShlbmNvZGVkRGF0YSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Jhc2U2NF9kZWNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUeWxlciBBa2lucyAoaHR0cDovL3J1bWtpbi5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQW1hbiBHdXB0YVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBJbmRpZ283NDRcbiAgLy8gICBleGFtcGxlIDE6IGJhc2U2NF9kZWNvZGUoJ1MyVjJhVzRnZG1GdUlGcHZibTVsZG1Wc1pBPT0nKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG4gIC8vICAgZXhhbXBsZSAyOiBiYXNlNjRfZGVjb2RlKCdZUT09JylcbiAgLy8gICByZXR1cm5zIDI6ICdhJ1xuICAvLyAgIGV4YW1wbGUgMzogYmFzZTY0X2RlY29kZSgnNHB5VElNT2dJR3hoSUcxdlpHVT0nKVxuICAvLyAgIHJldHVybnMgMzogJ+KckyDDoCBsYSBtb2RlJ1xuXG4gIC8vIGRlY29kZVVURjhzdHJpbmcoKVxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBkZWNvZGUgcHJvcGVybHkgVVRGOCBzdHJpbmdcbiAgLy8gQWRhcHRlZCBmcm9tIFNvbHV0aW9uICMxIGF0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZ1xuICB2YXIgZGVjb2RlVVRGOHN0cmluZyA9IGZ1bmN0aW9uIGRlY29kZVVURjhzdHJpbmcoc3RyKSB7XG4gICAgLy8gR29pbmcgYmFja3dhcmRzOiBmcm9tIGJ5dGVzdHJlYW0sIHRvIHBlcmNlbnQtZW5jb2RpbmcsIHRvIG9yaWdpbmFsIHN0cmluZy5cbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfSkuam9pbignJykpO1xuICB9O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmF0b2IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVRGOHN0cmluZyh3aW5kb3cuYXRvYihlbmNvZGVkRGF0YSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihlbmNvZGVkRGF0YSwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGYtOCcpO1xuICB9XG5cbiAgdmFyIGI2NCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIHZhciBvMTtcbiAgdmFyIG8yO1xuICB2YXIgbzM7XG4gIHZhciBoMTtcbiAgdmFyIGgyO1xuICB2YXIgaDM7XG4gIHZhciBoNDtcbiAgdmFyIGJpdHM7XG4gIHZhciBpID0gMDtcbiAgdmFyIGFjID0gMDtcbiAgdmFyIGRlYyA9ICcnO1xuICB2YXIgdG1wQXJyID0gW107XG5cbiAgaWYgKCFlbmNvZGVkRGF0YSkge1xuICAgIHJldHVybiBlbmNvZGVkRGF0YTtcbiAgfVxuXG4gIGVuY29kZWREYXRhICs9ICcnO1xuXG4gIGRvIHtcbiAgICAvLyB1bnBhY2sgZm91ciBoZXhldHMgaW50byB0aHJlZSBvY3RldHMgdXNpbmcgaW5kZXggcG9pbnRzIGluIGI2NFxuICAgIGgxID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGgyID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGgzID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuICAgIGg0ID0gYjY0LmluZGV4T2YoZW5jb2RlZERhdGEuY2hhckF0KGkrKykpO1xuXG4gICAgYml0cyA9IGgxIDw8IDE4IHwgaDIgPDwgMTIgfCBoMyA8PCA2IHwgaDQ7XG5cbiAgICBvMSA9IGJpdHMgPj4gMTYgJiAweGZmO1xuICAgIG8yID0gYml0cyA+PiA4ICYgMHhmZjtcbiAgICBvMyA9IGJpdHMgJiAweGZmO1xuXG4gICAgaWYgKGgzID09PSA2NCkge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSk7XG4gICAgfSBlbHNlIGlmIChoNCA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSwgbzIsIG8zKTtcbiAgICB9XG4gIH0gd2hpbGUgKGkgPCBlbmNvZGVkRGF0YS5sZW5ndGgpO1xuXG4gIGRlYyA9IHRtcEFyci5qb2luKCcnKTtcblxuICByZXR1cm4gZGVjb2RlVVRGOHN0cmluZyhkZWMucmVwbGFjZSgvXFwwKyQvLCAnJykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NF9kZWNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9lbmNvZGUoc3RyaW5nVG9FbmNvZGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogQmF5cm9uIEd1ZXZhcmFcbiAgLy8gaW1wcm92ZWQgYnk6IFRodW5kZXIubVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyBidWdmaXhlZCBieTogUGVsbGVudGVzcXVlIE1hbGVzdWFkYVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09J1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2VuY29kZSgnYScpXG4gIC8vICAgcmV0dXJucyAyOiAnWVE9PSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9lbmNvZGUoJ+KckyDDoCBsYSBtb2RlJylcbiAgLy8gICByZXR1cm5zIDM6ICc0cHlUSU1PZ0lHeGhJRzF2WkdVPSdcblxuICAvLyBlbmNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZW5jb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGVuY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBlbmNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIGZpcnN0IHdlIHVzZSBlbmNvZGVVUklDb21wb25lbnQgdG8gZ2V0IHBlcmNlbnQtZW5jb2RlZCBVVEYtOCxcbiAgICAvLyB0aGVuIHdlIGNvbnZlcnQgdGhlIHBlcmNlbnQgZW5jb2RpbmdzIGludG8gcmF3IGJ5dGVzIHdoaWNoXG4gICAgLy8gY2FuIGJlIGZlZCBpbnRvIHRoZSBiYXNlNjQgZW5jb2RpbmcgYWxnb3JpdGhtLlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiB0b1NvbGlkQnl0ZXMobWF0Y2gsIHAxKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnICsgcDEpO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoZW5jb2RlVVRGOHN0cmluZyhzdHJpbmdUb0VuY29kZSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdHJpbmdUb0VuY29kZSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICB9XG5cbiAgdmFyIGI2NCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIHZhciBvMTtcbiAgdmFyIG8yO1xuICB2YXIgbzM7XG4gIHZhciBoMTtcbiAgdmFyIGgyO1xuICB2YXIgaDM7XG4gIHZhciBoNDtcbiAgdmFyIGJpdHM7XG4gIHZhciBpID0gMDtcbiAgdmFyIGFjID0gMDtcbiAgdmFyIGVuYyA9ICcnO1xuICB2YXIgdG1wQXJyID0gW107XG5cbiAgaWYgKCFzdHJpbmdUb0VuY29kZSkge1xuICAgIHJldHVybiBzdHJpbmdUb0VuY29kZTtcbiAgfVxuXG4gIHN0cmluZ1RvRW5jb2RlID0gZW5jb2RlVVRGOHN0cmluZyhzdHJpbmdUb0VuY29kZSk7XG5cbiAgZG8ge1xuICAgIC8vIHBhY2sgdGhyZWUgb2N0ZXRzIGludG8gZm91ciBoZXhldHNcbiAgICBvMSA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcbiAgICBvMiA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcbiAgICBvMyA9IHN0cmluZ1RvRW5jb2RlLmNoYXJDb2RlQXQoaSsrKTtcblxuICAgIGJpdHMgPSBvMSA8PCAxNiB8IG8yIDw8IDggfCBvMztcblxuICAgIGgxID0gYml0cyA+PiAxOCAmIDB4M2Y7XG4gICAgaDIgPSBiaXRzID4+IDEyICYgMHgzZjtcbiAgICBoMyA9IGJpdHMgPj4gNiAmIDB4M2Y7XG4gICAgaDQgPSBiaXRzICYgMHgzZjtcblxuICAgIC8vIHVzZSBoZXhldHMgdG8gaW5kZXggaW50byBiNjQsIGFuZCBhcHBlbmQgcmVzdWx0IHRvIGVuY29kZWQgc3RyaW5nXG4gICAgdG1wQXJyW2FjKytdID0gYjY0LmNoYXJBdChoMSkgKyBiNjQuY2hhckF0KGgyKSArIGI2NC5jaGFyQXQoaDMpICsgYjY0LmNoYXJBdChoNCk7XG4gIH0gd2hpbGUgKGkgPCBzdHJpbmdUb0VuY29kZS5sZW5ndGgpO1xuXG4gIGVuYyA9IHRtcEFyci5qb2luKCcnKTtcblxuICB2YXIgciA9IHN0cmluZ1RvRW5jb2RlLmxlbmd0aCAlIDM7XG5cbiAgcmV0dXJuIChyID8gZW5jLnNsaWNlKDAsIHIgLSAzKSA6IGVuYykgKyAnPT09Jy5zbGljZShyIHx8IDMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NF9lbmNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHR0cF9idWlsZF9xdWVyeShmb3JtZGF0YSwgbnVtZXJpY1ByZWZpeCwgYXJnU2VwYXJhdG9yLCBlbmNUeXBlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaHR0cF9idWlsZF9xdWVyeS9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgcmV2aXNlZCBieTogc3RhZzAxOVxuICAvLyAgICBpbnB1dCBieTogRHJlYW1lclxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IE1JT19LT0RVS0kgKGh0dHA6Ly9taW8ta29kdWtpLmJsb2dzcG90LmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBXaWxsIFJvd2VcbiAgLy8gICAgICBub3RlIDE6IElmIHRoZSB2YWx1ZSBpcyBudWxsLCBrZXkgYW5kIHZhbHVlIGFyZSBza2lwcGVkIGluIHRoZVxuICAvLyAgICAgIG5vdGUgMTogaHR0cF9idWlsZF9xdWVyeSBvZiBQSFAgd2hpbGUgaW4gbG9jdXR1cyB0aGV5IGFyZSBub3QuXG4gIC8vICAgZXhhbXBsZSAxOiBodHRwX2J1aWxkX3F1ZXJ5KHtmb286ICdiYXInLCBwaHA6ICdoeXBlcnRleHQgcHJvY2Vzc29yJywgYmF6OiAnYm9vbScsIGNvdzogJ21pbGsnfSwgJycsICcmYW1wOycpXG4gIC8vICAgcmV0dXJucyAxOiAnZm9vPWJhciZhbXA7cGhwPWh5cGVydGV4dCtwcm9jZXNzb3ImYW1wO2Jhej1ib29tJmFtcDtjb3c9bWlsaydcbiAgLy8gICBleGFtcGxlIDI6IGh0dHBfYnVpbGRfcXVlcnkoeydwaHAnOiAnaHlwZXJ0ZXh0IHByb2Nlc3NvcicsIDA6ICdmb28nLCAxOiAnYmFyJywgMjogJ2JheicsIDM6ICdib29tJywgJ2Nvdyc6ICdtaWxrJ30sICdteXZhcl8nKVxuICAvLyAgIHJldHVybnMgMjogJ215dmFyXzA9Zm9vJm15dmFyXzE9YmFyJm15dmFyXzI9YmF6Jm15dmFyXzM9Ym9vbSZwaHA9aHlwZXJ0ZXh0K3Byb2Nlc3NvciZjb3c9bWlsaydcbiAgLy8gICBleGFtcGxlIDM6IGh0dHBfYnVpbGRfcXVlcnkoe2ZvbzogJ2JhcicsIHBocDogJ2h5cGVydGV4dCBwcm9jZXNzb3InLCBiYXo6ICdib29tJywgY293OiAnbWlsayd9LCAnJywgJyZhbXA7JywgJ1BIUF9RVUVSWV9SRkMzOTg2JylcbiAgLy8gICByZXR1cm5zIDM6ICdmb289YmFyJmFtcDtwaHA9aHlwZXJ0ZXh0JTIwcHJvY2Vzc29yJmFtcDtiYXo9Ym9vbSZhbXA7Y293PW1pbGsnXG5cbiAgdmFyIGVuY29kZUZ1bmM7XG5cbiAgc3dpdGNoIChlbmNUeXBlKSB7XG4gICAgY2FzZSAnUEhQX1FVRVJZX1JGQzM5ODYnOlxuICAgICAgZW5jb2RlRnVuYyA9IHJlcXVpcmUoJy4uL3VybC9yYXd1cmxlbmNvZGUnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUEhQX1FVRVJZX1JGQzE3MzgnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBlbmNvZGVGdW5jID0gcmVxdWlyZSgnLi4vdXJsL3VybGVuY29kZScpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgdmFsdWU7XG4gIHZhciBrZXk7XG4gIHZhciB0bXAgPSBbXTtcblxuICB2YXIgX2h0dHBCdWlsZFF1ZXJ5SGVscGVyID0gZnVuY3Rpb24gX2h0dHBCdWlsZFF1ZXJ5SGVscGVyKGtleSwgdmFsLCBhcmdTZXBhcmF0b3IpIHtcbiAgICB2YXIgaztcbiAgICB2YXIgdG1wID0gW107XG4gICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgdmFsID0gJzEnO1xuICAgIH0gZWxzZSBpZiAodmFsID09PSBmYWxzZSkge1xuICAgICAgdmFsID0gJzAnO1xuICAgIH1cbiAgICBpZiAodmFsICE9PSBudWxsKSB7XG4gICAgICBpZiAoKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbCkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGsgaW4gdmFsKSB7XG4gICAgICAgICAgaWYgKHZhbFtrXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdG1wLnB1c2goX2h0dHBCdWlsZFF1ZXJ5SGVscGVyKGtleSArICdbJyArIGsgKyAnXScsIHZhbFtrXSwgYXJnU2VwYXJhdG9yKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bXAuam9pbihhcmdTZXBhcmF0b3IpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVGdW5jKGtleSkgKyAnPScgKyBlbmNvZGVGdW5jKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBwcm9jZXNzaW5nIGZvciBodHRwX2J1aWxkX3F1ZXJ5KCkuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgaWYgKCFhcmdTZXBhcmF0b3IpIHtcbiAgICBhcmdTZXBhcmF0b3IgPSAnJic7XG4gIH1cbiAgZm9yIChrZXkgaW4gZm9ybWRhdGEpIHtcbiAgICB2YWx1ZSA9IGZvcm1kYXRhW2tleV07XG4gICAgaWYgKG51bWVyaWNQcmVmaXggJiYgIWlzTmFOKGtleSkpIHtcbiAgICAgIGtleSA9IFN0cmluZyhudW1lcmljUHJlZml4KSArIGtleTtcbiAgICB9XG4gICAgdmFyIHF1ZXJ5ID0gX2h0dHBCdWlsZFF1ZXJ5SGVscGVyKGtleSwgdmFsdWUsIGFyZ1NlcGFyYXRvcik7XG4gICAgaWYgKHF1ZXJ5ICE9PSAnJykge1xuICAgICAgdG1wLnB1c2gocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bXAuam9pbihhcmdTZXBhcmF0b3IpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHBfYnVpbGRfcXVlcnkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlX3VybChzdHIsIGNvbXBvbmVudCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2VfdXJsL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBTdGV2ZW4gTGV2aXRoYW4gKGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbSlcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogTG9yZW56byBQaXNhbmlcbiAgLy8gICAgICAgICBpbnB1dCBieTogVG9ueVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBvcmlnaW5hbCBieSBodHRwOi8vc3RldmVubGV2aXRoYW4uY29tL2RlbW8vcGFyc2V1cmkvanMvYXNzZXRzL3BhcnNldXJpLmpzXG4gIC8vICAgICAgICAgICBub3RlIDE6IGJsb2cgcG9zdCBhdCBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvcGFyc2V1cmlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogZGVtbyBhdCBodHRwOi8vc3RldmVubGV2aXRoYW4uY29tL2RlbW8vcGFyc2V1cmkvanMvYXNzZXRzL3BhcnNldXJpLmpzXG4gIC8vICAgICAgICAgICBub3RlIDE6IERvZXMgbm90IHJlcGxhY2UgaW52YWxpZCBjaGFyYWN0ZXJzIHdpdGggJ18nIGFzIGluIFBIUCxcbiAgLy8gICAgICAgICAgIG5vdGUgMTogbm9yIGRvZXMgaXQgcmV0dXJuIGZhbHNlIHdpdGhcbiAgLy8gICAgICAgICAgIG5vdGUgMTogYSBzZXJpb3VzbHkgbWFsZm9ybWVkIFVSTC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogQmVzaWRlcyBmdW5jdGlvbiBuYW1lLCBpcyBlc3NlbnRpYWxseSB0aGUgc2FtZSBhcyBwYXJzZVVyaSBhc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiB3ZWxsIGFzIG91ciBhbGxvd2luZ1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBhbiBleHRyYSBzbGFzaCBhZnRlciB0aGUgc2NoZW1lL3Byb3RvY29sICh0byBhbGxvdyBmaWxlOi8vLyBhcyBpbiBQSFApXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3VybCgnaHR0cDovL3VzZXI6cGFzc0Bob3N0L3BhdGg/YT12I2EnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiB7c2NoZW1lOiAnaHR0cCcsIGhvc3Q6ICdob3N0JywgdXNlcjogJ3VzZXInLCBwYXNzOiAncGFzcycsIHBhdGg6ICcvcGF0aCcsIHF1ZXJ5OiAnYT12JywgZnJhZ21lbnQ6ICdhJ31cbiAgLy8gICAgICAgIGV4YW1wbGUgMjogcGFyc2VfdXJsKCdodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpLyUyMkAlMjJfJTI4YWxidW0lMjknKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiB7c2NoZW1lOiAnaHR0cCcsIGhvc3Q6ICdlbi53aWtpcGVkaWEub3JnJywgcGF0aDogJy93aWtpLyUyMkAlMjJfJTI4YWxidW0lMjknfVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiBwYXJzZV91cmwoJ2h0dHBzOi8vaG9zdC5kb21haW4udGxkL2FAYi5jL2ZvbGRlcicpXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtzY2hlbWU6ICdodHRwcycsIGhvc3Q6ICdob3N0LmRvbWFpbi50bGQnLCBwYXRoOiAnL2FAYi5jL2ZvbGRlcid9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3VybCgnaHR0cHM6Ly9nb29kdXNlcjpzZWNyZXRwYXNzd29yZEB3d3cuZXhhbXBsZS5jb20vYUBiLmMvZm9sZGVyP2Zvbz1iYXInKVxuICAvLyAgICAgICAgcmV0dXJucyA0OiB7IHNjaGVtZTogJ2h0dHBzJywgaG9zdDogJ3d3dy5leGFtcGxlLmNvbScsIHBhdGg6ICcvYUBiLmMvZm9sZGVyJywgcXVlcnk6ICdmb289YmFyJywgdXNlcjogJ2dvb2R1c2VyJywgcGFzczogJ3NlY3JldHBhc3N3b3JkJyB9XG5cbiAgdmFyIHF1ZXJ5O1xuXG4gIHZhciBtb2RlID0gKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJy4uL2luZm8vaW5pX2dldCcpKCdsb2N1dHVzLnBhcnNlX3VybC5tb2RlJykgOiB1bmRlZmluZWQpIHx8ICdwaHAnO1xuXG4gIHZhciBrZXkgPSBbJ3NvdXJjZScsICdzY2hlbWUnLCAnYXV0aG9yaXR5JywgJ3VzZXJJbmZvJywgJ3VzZXInLCAncGFzcycsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdmcmFnbWVudCddO1xuXG4gIC8vIEZvciBsb29zZSB3ZSBhZGRlZCBvbmUgb3B0aW9uYWwgc2xhc2ggdG8gcG9zdC1zY2hlbWUgdG8gY2F0Y2ggZmlsZTovLy8gKHNob3VsZCByZXN0cmljdCB0aGlzKVxuICB2YXIgcGFyc2VyID0ge1xuICAgIHBocDogbmV3IFJlZ0V4cChbJyg/OihbXjpcXFxcLz8jXSspOik/JywgJyg/OlxcXFwvXFxcXC8oKSg/Oig/OigpKD86KFteOkBcXFxcL10qKTo/KFteOkBcXFxcL10qKSk/QCk/KFteOlxcXFwvPyNdKikoPzo6KFxcXFxkKikpPykpPycsICcoKScsICcoPzooKCkoPzooPzpbXj8jXFxcXC9dKlxcXFwvKSopKCkoPzpbXj8jXSopKSg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSksXG4gICAgc3RyaWN0OiBuZXcgUmVnRXhwKFsnKD86KFteOlxcXFwvPyNdKyk6KT8nLCAnKD86XFxcXC9cXFxcLygoPzooKFteOkBcXFxcL10qKTo/KFteOkBcXFxcL10qKSk/QCk/KFteOlxcXFwvPyNdKikoPzo6KFxcXFxkKikpPykpPycsICcoKCgoPzpbXj8jXFxcXC9dKlxcXFwvKSopKFtePyNdKikpKD86XFxcXD8oW14jXSopKT8oPzojKC4qKSk/KSddLmpvaW4oJycpKSxcbiAgICBsb29zZTogbmV3IFJlZ0V4cChbJyg/Oig/IVteOkBdKzpbXjpAXFxcXC9dKkApKFteOlxcXFwvPyMuXSspOik/JywgJyg/OlxcXFwvXFxcXC9cXFxcLz8pPycsICcoKD86KChbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pJywgJygoKFxcXFwvKD86W14/I10oPyFbXj8jXFxcXC9dKlxcXFwuW14/I1xcXFwvLl0rKD86Wz8jXXwkKSkpKlxcXFwvPyk/KFtePyNcXFxcL10qKSknLCAnKD86XFxcXD8oW14jXSopKT8oPzojKC4qKSk/KSddLmpvaW4oJycpKVxuICB9O1xuXG4gIHZhciBtID0gcGFyc2VyW21vZGVdLmV4ZWMoc3RyKTtcbiAgdmFyIHVyaSA9IHt9O1xuICB2YXIgaSA9IDE0O1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAobVtpXSkge1xuICAgICAgdXJpW2tleVtpXV0gPSBtW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gdXJpW2NvbXBvbmVudC5yZXBsYWNlKCdQSFBfVVJMXycsICcnKS50b0xvd2VyQ2FzZSgpXTtcbiAgfVxuXG4gIGlmIChtb2RlICE9PSAncGhwJykge1xuICAgIHZhciBuYW1lID0gKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJy4uL2luZm8vaW5pX2dldCcpKCdsb2N1dHVzLnBhcnNlX3VybC5xdWVyeUtleScpIDogdW5kZWZpbmVkKSB8fCAncXVlcnlLZXknO1xuICAgIHBhcnNlciA9IC8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZztcbiAgICB1cmlbbmFtZV0gPSB7fTtcbiAgICBxdWVyeSA9IHVyaVtrZXlbMTJdXSB8fCAnJztcbiAgICBxdWVyeS5yZXBsYWNlKHBhcnNlciwgZnVuY3Rpb24gKCQwLCAkMSwgJDIpIHtcbiAgICAgIGlmICgkMSkge1xuICAgICAgICB1cmlbbmFtZV1bJDFdID0gJDI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgdXJpLnNvdXJjZTtcbiAgcmV0dXJuIHVyaTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZV91cmwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJhd3VybGRlY29kZShzdHIpIHtcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3Jhd3VybGRlY29kZS9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogdHJhdmNcbiAgLy8gICAgICAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogUmF0aGVvdXNcbiAgLy8gICAgICAgICBpbnB1dCBieTogbG92aW9cbiAgLy8gICAgICBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhpcyBmdW5jdGlvbiBleHBlY3RzIHRvIGRlY29kZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBmcm9tIFVURi04IGVuY29kZWQgc3RyaW5ncywgYXMgZm91bmQgb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogcGFnZXMgc2VydmVkIGFzIFVURi04XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHJhd3VybGRlY29kZSgnS2V2aW4rdmFuK1pvbm5ldmVsZCUyMScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbit2YW4rWm9ubmV2ZWxkISdcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogcmF3dXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGa3Z6LmlvJTJGJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHA6Ly9rdnouaW8vJ1xuICAvLyAgICAgICAgZXhhbXBsZSAzOiByYXd1cmxkZWNvZGUoJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRCcpXG4gIC8vICAgICAgICByZXR1cm5zIDM6ICdodHRwOi8vd3d3Lmdvb2dsZS5ubC9zZWFyY2g/cT1Mb2N1dHVzJmllPSdcblxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KChzdHIgKyAnJykucmVwbGFjZSgvJSg/IVtcXGRhLWZdezJ9KS9naSwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFBIUCB0b2xlcmF0ZXMgcG9vcmx5IGZvcm1lZCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgcmV0dXJuICclMjUnO1xuICB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmF3dXJsZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByYXd1cmxlbmNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9yYXd1cmxlbmNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IE1pY2hhZWwgR3JpZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogUmF0aGVvdXNcbiAgLy8gICAgICBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogSm9yaXNcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogVGhpcyByZWZsZWN0cyBQSFAgNS4zLzYuMCsgYmVoYXZpb3JcbiAgLy8gICAgICAgICAgIG5vdGUgMTogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhpcyBmdW5jdGlvbiBleHBlY3RzIFxcXG4gIC8vICAgICAgICAgICBub3RlIDE6IHRvIGVuY29kZSBpbnRvIFVURi04IGVuY29kZWQgc3RyaW5ncywgYXMgZm91bmQgb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogcGFnZXMgc2VydmVkIGFzIFVURi04XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHJhd3VybGVuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCEnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAnS2V2aW4lMjB2YW4lMjBab25uZXZlbGQlMjEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHJhd3VybGVuY29kZSgnaHR0cDovL2t2ei5pby8nKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiAnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRidcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcmF3dXJsZW5jb2RlKCdodHRwOi8vd3d3Lmdvb2dsZS5ubC9zZWFyY2g/cT1Mb2N1dHVzJmllPXV0Zi04JylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04J1xuXG4gIHN0ciA9IHN0ciArICcnO1xuXG4gIC8vIFRpbGRlIHNob3VsZCBiZSBhbGxvd2VkIHVuZXNjYXBlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUEhQIChhcyByZWZsZWN0ZWQgYmVsb3cpLFxuICAvLyBidXQgaWYgeW91IHdhbnQgdG8gcmVmbGVjdCBjdXJyZW50XG4gIC8vIFBIUCBiZWhhdmlvciwgeW91IHdvdWxkIG5lZWQgdG8gYWRkIFwiLnJlcGxhY2UoL34vZywgJyU3RScpO1wiIHRvIHRoZSBmb2xsb3dpbmcuXG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8hL2csICclMjEnKS5yZXBsYWNlKC8nL2csICclMjcnKS5yZXBsYWNlKC9cXCgvZywgJyUyOCcpLnJlcGxhY2UoL1xcKS9nLCAnJTI5JykucmVwbGFjZSgvXFwqL2csICclMkEnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYXd1cmxlbmNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVybGRlY29kZShzdHIpIHtcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VybGRlY29kZS9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogUGhpbGlwIFBldGVyc29uXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IExhcnMgRmlzY2hlclxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBPcmxhbmRvXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEFKXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGUtbWlrZVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBsb3Zpb1xuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSb2JcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogaW5mbyBvbiB3aGF0IGVuY29kaW5nIGZ1bmN0aW9ucyB0byB1c2UgZnJvbTpcbiAgLy8gICAgICAgICAgIG5vdGUgMTogaHR0cDovL3hrci51cy9hcnRpY2xlcy9qYXZhc2NyaXB0L2VuY29kZS1jb21wYXJlL1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGlzIGZ1bmN0aW9uIGV4cGVjdHMgdG8gZGVjb2RlXG4gIC8vICAgICAgICAgICBub3RlIDE6IGZyb20gVVRGLTggZW5jb2RlZCBzdHJpbmdzLCBhcyBmb3VuZCBvblxuICAvLyAgICAgICAgICAgbm90ZSAxOiBwYWdlcyBzZXJ2ZWQgYXMgVVRGLThcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdXJsZGVjb2RlKCdLZXZpbit2YW4rWm9ubmV2ZWxkJTIxJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQhJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiB1cmxkZWNvZGUoJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiAnaHR0cDovL2t2ei5pby8nXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHVybGRlY29kZSgnaHR0cCUzQSUyRiUyRnd3dy5nb29nbGUubmwlMkZzZWFyY2glM0ZxJTNETG9jdXR1cyUyNmllJTNEdXRmLTglMjZvZSUzRHV0Zi04JTI2YXElM0R0JTI2cmxzJTNEY29tLnVidW50dSUzQWVuLVVTJTNBdW5vZmZpY2lhbCUyNmNsaWVudCUzRGZpcmVmb3gtYScpXG4gIC8vICAgICAgICByZXR1cm5zIDM6ICdodHRwOi8vd3d3Lmdvb2dsZS5ubC9zZWFyY2g/cT1Mb2N1dHVzJmllPXV0Zi04Jm9lPXV0Zi04JmFxPXQmcmxzPWNvbS51YnVudHU6ZW4tVVM6dW5vZmZpY2lhbCZjbGllbnQ9ZmlyZWZveC1hJ1xuICAvLyAgICAgICAgZXhhbXBsZSA0OiB1cmxkZWNvZGUoJyVFNSVBNSVCRCUzXzQnKVxuICAvLyAgICAgICAgcmV0dXJucyA0OiAnXFx1NTk3ZCUzXzQnXG5cbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCgoc3RyICsgJycpLnJlcGxhY2UoLyUoPyFbXFxkYS1mXXsyfSkvZ2ksIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQSFAgdG9sZXJhdGVzIHBvb3JseSBmb3JtZWQgZXNjYXBlIHNlcXVlbmNlc1xuICAgIHJldHVybiAnJTI1JztcbiAgfSkucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJsZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1cmxlbmNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91cmxlbmNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBMYXJzIEZpc2NoZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogQUpcbiAgLy8gICAgICAgICBpbnB1dCBieTogdHJhdmNcbiAgLy8gICAgICAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogUmF0aGVvdXNcbiAgLy8gICAgICBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBidWdmaXhlZCBieTogSm9yaXNcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogVGhpcyByZWZsZWN0cyBQSFAgNS4zLzYuMCsgYmVoYXZpb3JcbiAgLy8gICAgICAgICAgIG5vdGUgMTogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhpcyBmdW5jdGlvblxuICAvLyAgICAgICAgICAgbm90ZSAxOiBleHBlY3RzIHRvIGVuY29kZSBpbnRvIFVURi04IGVuY29kZWQgc3RyaW5ncywgYXMgZm91bmQgb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogcGFnZXMgc2VydmVkIGFzIFVURi04XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHVybGVuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCEnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAnS2V2aW4rdmFuK1pvbm5ldmVsZCUyMSdcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdXJsZW5jb2RlKCdodHRwOi8va3Z6LmlvLycpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwJTNBJTJGJTJGa3Z6LmlvJTJGJ1xuICAvLyAgICAgICAgZXhhbXBsZSAzOiB1cmxlbmNvZGUoJ2h0dHA6Ly93d3cuZ29vZ2xlLm5sL3NlYXJjaD9xPUxvY3V0dXMmaWU9dXRmLTgnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cCUzQSUyRiUyRnd3dy5nb29nbGUubmwlMkZzZWFyY2glM0ZxJTNETG9jdXR1cyUyNmllJTNEdXRmLTgnXG5cbiAgc3RyID0gc3RyICsgJyc7XG5cbiAgLy8gVGlsZGUgc2hvdWxkIGJlIGFsbG93ZWQgdW5lc2NhcGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQSFAgKGFzIHJlZmxlY3RlZCBiZWxvdyksXG4gIC8vIGJ1dCBpZiB5b3Ugd2FudCB0byByZWZsZWN0IGN1cnJlbnRcbiAgLy8gUEhQIGJlaGF2aW9yLCB5b3Ugd291bGQgbmVlZCB0byBhZGQgXCIucmVwbGFjZSgvfi9nLCAnJTdFJyk7XCIgdG8gdGhlIGZvbGxvd2luZy5cbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyEvZywgJyUyMScpLnJlcGxhY2UoLycvZywgJyUyNycpLnJlcGxhY2UoL1xcKC9nLCAnJTI4JykucmVwbGFjZSgvXFwpL2csICclMjknKS5yZXBsYWNlKC9cXCovZywgJyUyQScpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybGVuY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc19jYWxsYWJsZShtaXhlZFZhciwgc3ludGF4T25seSwgY2FsbGFibGVOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvaXNfY2FsbGFibGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogRnJhbsOnb2lzXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIHZhcmlhYmxlIGNhbGxhYmxlTmFtZSBjYW5ub3Qgd29yayBhcyBhIHN0cmluZyB2YXJpYWJsZSBwYXNzZWQgYnlcbiAgLy8gICAgICBub3RlIDE6IHJlZmVyZW5jZSBhcyBpbiBQSFAgKHNpbmNlIEphdmFTY3JpcHQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nXG4gIC8vICAgICAgbm90ZSAxOiBzdHJpbmdzIGJ5IHJlZmVyZW5jZSksIGJ1dCBpbnN0ZWFkIHdpbGwgdGFrZSB0aGUgbmFtZSBvZlxuICAvLyAgICAgIG5vdGUgMTogYSBnbG9iYWwgdmFyaWFibGUgYW5kIHNldCB0aGF0IGluc3RlYWQuXG4gIC8vICAgICAgbm90ZSAxOiBXaGVuIHVzZWQgb24gYW4gb2JqZWN0LCBkZXBlbmRzIG9uIGEgY29uc3RydWN0b3IgcHJvcGVydHlcbiAgLy8gICAgICBub3RlIDE6IGJlaW5nIGtlcHQgb24gdGhlIG9iamVjdCBwcm90b3R5cGVcbiAgLy8gICAgICBub3RlIDI6IERlcGVuZGluZyBvbiB0aGUgYGNhbGxhYmxlTmFtZWAgdGhhdCBpcyBwYXNzZWQsIHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBldmFsLlxuICAvLyAgICAgIG5vdGUgMjogVGhlIGV2YWwgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAyOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAyOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBpc19jYWxsYWJsZSgnaXNfY2FsbGFibGUnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogaXNfY2FsbGFibGUoJ2JvZ3VzRnVuY3Rpb24nLCB0cnVlKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZSAvLyBnaXZlcyB0cnVlIGJlY2F1c2UgZG9lcyBub3QgZG8gc3RyaWN0IGNoZWNraW5nXG4gIC8vICAgZXhhbXBsZSAzOiBmdW5jdGlvbiBTb21lQ2xhc3MgKCkge31cbiAgLy8gICBleGFtcGxlIDM6IFNvbWVDbGFzcy5wcm90b3R5cGUuc29tZU1ldGhvZCA9IGZ1bmN0aW9uICgpe31cbiAgLy8gICBleGFtcGxlIDM6IHZhciB0ZXN0T2JqID0gbmV3IFNvbWVDbGFzcygpXG4gIC8vICAgZXhhbXBsZSAzOiBpc19jYWxsYWJsZShbdGVzdE9iaiwgJ3NvbWVNZXRob2QnXSwgdHJ1ZSwgJ215VmFyJylcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gbXlWYXJcbiAgLy8gICByZXR1cm5zIDM6ICdTb21lQ2xhc3M6OnNvbWVNZXRob2QnXG4gIC8vICAgZXhhbXBsZSA0OiBpc19jYWxsYWJsZShmdW5jdGlvbiAoKSB7fSlcbiAgLy8gICByZXR1cm5zIDQ6IHRydWVcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgb2JqID0ge307XG4gIHZhciBtZXRob2QgPSAnJztcbiAgdmFyIHZhbGlkRnVuY3Rpb25OYW1lID0gZmFsc2U7XG5cbiAgdmFyIGdldEZ1bmNOYW1lID0gZnVuY3Rpb24gZ2V0RnVuY05hbWUoZm4pIHtcbiAgICB2YXIgbmFtZSA9IC9cXFcqZnVuY3Rpb25cXHMrKFtcXHckXSspXFxzKlxcKC8uZXhlYyhmbik7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gJyhBbm9ueW1vdXMpJztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVbMV07XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ3N0cmluZycpIHtcbiAgICBvYmogPSAkZ2xvYmFsO1xuICAgIG1ldGhvZCA9IG1peGVkVmFyO1xuICAgIG5hbWUgPSBtaXhlZFZhcjtcbiAgICB2YWxpZEZ1bmN0aW9uTmFtZSA9ICEhbmFtZS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1peGVkVmFyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1peGVkVmFyKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBtaXhlZFZhci5sZW5ndGggPT09IDIgJiYgX3R5cGVvZihtaXhlZFZhclswXSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtaXhlZFZhclsxXSA9PT0gJ3N0cmluZycpIHtcbiAgICBvYmogPSBtaXhlZFZhclswXTtcbiAgICBtZXRob2QgPSBtaXhlZFZhclsxXTtcbiAgICBuYW1lID0gKG9iai5jb25zdHJ1Y3RvciAmJiBnZXRGdW5jTmFtZShvYmouY29uc3RydWN0b3IpKSArICc6OicgKyBtZXRob2Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN5bnRheE9ubHkgfHwgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB2YWxpZEZ1bmN0aW9uTmFtZSBhdm9pZHMgZXhwbG9pdHNcbiAgaWYgKHZhbGlkRnVuY3Rpb25OYW1lICYmIHR5cGVvZiBldmFsKG1ldGhvZCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICBpZiAoY2FsbGFibGVOYW1lKSB7XG4gICAgICAkZ2xvYmFsW2NhbGxhYmxlTmFtZV0gPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc19jYWxsYWJsZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXRmOF9lbmNvZGUoYXJnU3RyaW5nKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXRmOF9lbmNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBXZWJ0b29sa2l0LmluZm8gKGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvLylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBzb3diZXJyeVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyBpbXByb3ZlZCBieTogWXZlcyBTdWNhZXRcbiAgLy8gaW1wcm92ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogVWxyaWNoXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHA6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyBidWdmaXhlZCBieToga2lyaWxsb2lkXG4gIC8vICAgZXhhbXBsZSAxOiB1dGY4X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICBpZiAoYXJnU3RyaW5nID09PSBudWxsIHx8IHR5cGVvZiBhcmdTdHJpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gLnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKS5yZXBsYWNlKC9cXHIvZywgXCJcXG5cIik7XG4gIHZhciBzdHJpbmcgPSBhcmdTdHJpbmcgKyAnJztcbiAgdmFyIHV0ZnRleHQgPSAnJztcbiAgdmFyIHN0YXJ0O1xuICB2YXIgZW5kO1xuICB2YXIgc3RyaW5nbCA9IDA7XG5cbiAgc3RhcnQgPSBlbmQgPSAwO1xuICBzdHJpbmdsID0gc3RyaW5nLmxlbmd0aDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmdsOyBuKyspIHtcbiAgICB2YXIgYzEgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcbiAgICB2YXIgZW5jID0gbnVsbDtcblxuICAgIGlmIChjMSA8IDEyOCkge1xuICAgICAgZW5kKys7XG4gICAgfSBlbHNlIGlmIChjMSA+IDEyNyAmJiBjMSA8IDIwNDgpIHtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gNiB8IDE5MiwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfSBlbHNlIGlmICgoYzEgJiAweEY4MDApICE9PSAweEQ4MDApIHtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTIgfCAyMjQsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN1cnJvZ2F0ZSBwYWlyc1xuICAgICAgaWYgKChjMSAmIDB4RkMwMCkgIT09IDB4RDgwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5tYXRjaGVkIHRyYWlsIHN1cnJvZ2F0ZSBhdCAnICsgbik7XG4gICAgICB9XG4gICAgICB2YXIgYzIgPSBzdHJpbmcuY2hhckNvZGVBdCgrK24pO1xuICAgICAgaWYgKChjMiAmIDB4RkMwMCkgIT09IDB4REMwMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5tYXRjaGVkIGxlYWQgc3Vycm9nYXRlIGF0ICcgKyAobiAtIDEpKTtcbiAgICAgIH1cbiAgICAgIGMxID0gKChjMSAmIDB4M0ZGKSA8PCAxMCkgKyAoYzIgJiAweDNGRikgKyAweDEwMDAwO1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiAxOCB8IDI0MCwgYzEgPj4gMTIgJiA2MyB8IDEyOCwgYzEgPj4gNiAmIDYzIHwgMTI4LCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9XG4gICAgaWYgKGVuYyAhPT0gbnVsbCkge1xuICAgICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICAgIHV0ZnRleHQgKz0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuICAgICAgdXRmdGV4dCArPSBlbmM7XG4gICAgICBzdGFydCA9IGVuZCA9IG4gKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPiBzdGFydCkge1xuICAgIHV0ZnRleHQgKz0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBzdHJpbmdsKTtcbiAgfVxuXG4gIHJldHVybiB1dGZ0ZXh0O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0ZjhfZW5jb2RlLmpzLm1hcCIsIi8vIEFycmF5ICYgT2JqZWN0IFJlbGF0ZWQgRnVuY3Rpb25zXHJcbm1vZHVsZS5leHBvcnRzLnBhcnNlX2FyZ3MgICAgICAgICA9IHJlcXVpcmUoICdqcy1wYXJzZS1hcmdzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b19odG1sX2F0dHIgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sX2F0dHInICk7XHJcbm1vZHVsZS5leHBvcnRzLmFycmF5X3RvX2h0bWwgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2h0bWwnICk7XHJcbm1vZHVsZS5leHBvcnRzLmFycmF5X3RvX3dpbmRvdyAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX3dpbmRvdycgKTtcclxubW9kdWxlLmV4cG9ydHMucGxhaW5fb2JqZWN0ICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcGxhaW5fb2JqZWN0JyApO1xyXG5cclxuLy8gRGF0ZSAmIFRpbWUgUmVsYXRlZCBGdW5jdGlvbnNcclxubW9kdWxlLmV4cG9ydHMubWljcm90aW1lICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZScgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfYWZ0ZXJfZGF0ZSAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfYWZ0ZXJfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfYmVmb3JlX2RhdGUgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfYmVmb3JlX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX3NhbWVfZGF0ZSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3NhbWVfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHMuZm9ybWF0X2R1cmF0aW9uID0gcmVxdWlyZSggJy4vcGFydHMvZm9ybWF0X2R1cmF0aW9uJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5kaWZmX2RheXMgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9kaWZmX2RheXMnICk7XHJcbm1vZHVsZS5leHBvcnRzLnRpbWVfdGFrZW4gICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3RpbWVfdGFrZW4nICk7XHJcblxyXG4vLyBEYXRhIFR5cGUgVmFsaWRhdGlvblxyXG5tb2R1bGUuZXhwb3J0cy5pc191cmwgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc191cmwuanMnICk7XHJcblxyXG4vLyBSdW4gVGltZSBGdW5jdGlvbiBSZWxhdGVkcy5cclxubW9kdWxlLmV4cG9ydHMuY2FsbF91c2VyX2Z1bmMgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMnICk7XHJcbm1vZHVsZS5leHBvcnRzLmNhbGxfdXNlcl9mdW5jX2FycmF5ID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5mdW5jdGlvbl9leGlzdHMgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9mdW5jdGlvbl9leGlzdHMnICk7XHJcbm1vZHVsZS5leHBvcnRzLmNyZWF0ZV9mdW5jdGlvbiAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NyZWF0ZV9mdW5jdGlvbicgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfY2FsbGFibGUgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdmFyL2lzX2NhbGxhYmxlJyApO1xyXG5cclxuLy8gQnJvd3NlciBSZWxhdGVkXHJcbm1vZHVsZS5leHBvcnRzLmlzX3RhYl9mb2N1c2VkID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdGFiX2ZvY3VzZWQnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX3dpbmRvd19hcmcgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfd2luZG93X2FyZycgKTtcclxubW9kdWxlLmV4cG9ydHMuc2Nyb2xsX3RvX3RvcCAgPSByZXF1aXJlKCAnLi9wYXJ0cy9zY3JvbGxfdG9fdG9wJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jb3B5X3RvX2NsaXAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2NvcHlfdG9fY2xpcCcgKTtcclxubW9kdWxlLmV4cG9ydHMuc2Nyb2xsX3BvcyAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9zY3JvbGxfcG9zJyApO1xyXG5tb2R1bGUuZXhwb3J0cy53aW5kb3dfYXJnICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzLmRldmljZV90eXBlICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGV2aWNlX3R5cGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnBpcGVfbG9nICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvcGlwZV9sb2cnICk7XHJcblxyXG4vLyBqUXVlcnkgUmVsYXRlZC5cclxubW9kdWxlLmV4cG9ydHMudG9fanF1ZXJ5ID0gcmVxdWlyZSggJy4vcGFydHMvdG9fanF1ZXJ5JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19qcXVlcnkgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19qcXVlcnknICk7XHJcblxyXG4vLyBPdGhlcnNcclxubW9kdWxlLmV4cG9ydHMudG9fanNfZnVuYyA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pzX2Z1bmMnICk7XHJcbm1vZHVsZS5leHBvcnRzLm1kNSAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9tZDUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmNvdW50ZXIgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3VudGVyJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5yYW5kX21kNSAgID0gcmVxdWlyZSggJy4vcGFydHMvcmFuZF9tZDUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmNzc191bml0cyAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jc3NfdW5pdHMnICk7XHJcblxyXG4vLyBVUkwgUmVsYXRlZCBGdW5jdGlvbnMuXHJcbm1vZHVsZS5leHBvcnRzLnVybF9wYXJhbXMgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy91cmxfcGFyYW1zJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5xdWVyeV9zdHJpbmcgID0gcmVxdWlyZSggJy4vcGFydHMvcXVlcnlfc3RyaW5nJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV9zdHIgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcGFyc2Vfc3RyJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5iYXNlNjRfZW5jb2RlID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9iYXNlNjRfZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5iYXNlNjRfZGVjb2RlID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9iYXNlNjRfZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5yYXd1cmxkZWNvZGUgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxkZWNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnJhd3VybGVuY29kZSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3Jhd3VybGVuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMudXJsZGVjb2RlICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy51cmxlbmNvZGUgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC91cmxlbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnBhcnNlX3VybCAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3BhcnNlX3VybCcgKTtcclxuIiwiLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBhcnJheSBlbGVtZW50cyBpbnRvIDxsaT4gdGFncyBhbmQgYXBwZW5kcyB0aGVtIHRvIHRoZSBsaXN0IG9mIHRoZSBnaXZlbiBpZC5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigpLCBhbmQgYW4gYW5vbnltb3VzIGlubmVyIGNsb3N1cmUgdG8gY3JlYXRlIGEgbGlzdCBvZiBodG1sIHRhZ3MuXHJcbiAqIEBwYXJhbSBhcnJcclxuICogQHBhcmFtIGxpc3RJRFxyXG4gKiBAcGFyYW0gdGFnXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGFyciwgbGlzdElELCB0YWcgPSAnbGknICkgPT4gKCBlbCA9PiAoICggZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnIycgKyBsaXN0SUQgKSApLCAoIGVsLmlubmVySFRNTCArPSBhcnIubWFwKCBpdGVtID0+IGA8JHt0YWd9PiR7aXRlbX08LyR7dGFnfT5gIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCAnJyApICkgKSApKCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhICkgPT4ge1xyXG5cdGxldCByZXR1cm5faHRtbCA9ICcnO1xyXG5cdGZvciggbGV0IEkgaW4gJGRhdGEgKSB7XHJcblx0XHRpZiggXy5pc09iamVjdCggJGRhdGFbIEkgXSApICkge1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIic7XHJcblx0XHRcdGZvciggbGV0IEsgaW4gJGRhdGFbIEkgXSApIHtcclxuXHRcdFx0XHRsZXQgJHZhbHVlID0gKCBfLmlzT2JqZWN0KCAkZGF0YVsgSSBdWyBLIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF1bIEsgXSApIDogJGRhdGFbIEkgXVsgSyBdO1xyXG5cdFx0XHRcdHJldHVybl9odG1sICs9ICR2YWx1ZSArICcgJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnXCInO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0ICR2YWx1ZSA9ICggXy5pc09iamVjdCggJGRhdGFbIEkgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXSApIDogJGRhdGFbIEkgXTtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInICsgJHZhbHVlICsgJ1wiICc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXR1cm5faHRtbDtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSAoICRhcnJheSApID0+IHtcclxuXHRmb3IoIGxldCAka2V5IGluICRhcnJheSApIHtcclxuXHRcdHdpbmRvd1sgJGtleSBdID0gJGFycmF5WyAka2V5IF07XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBDb3B5IGEgc3RyaW5nIHRvIHRoZSBjbGlwYm9hcmQuIE9ubHkgd29ya3MgYXMgYSByZXN1bHQgb2YgdXNlciBhY3Rpb24gKGkuZS4gaW5zaWRlIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIpLlxyXG4gKiBDcmVhdGUgYSBuZXcgPHRleHRhcmVhPiBlbGVtZW50LCBmaWxsIGl0IHdpdGggdGhlIHN1cHBsaWVkIGRhdGEgYW5kIGFkZCBpdCB0byB0aGUgSFRNTCBkb2N1bWVudC5cclxuICogVXNlIFNlbGVjdGlvbi5nZXRSYW5nZUF0KCl0byBzdG9yZSB0aGUgc2VsZWN0ZWQgcmFuZ2UgKGlmIGFueSkuXHJcbiAqIFVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpIHRvIGNvcHkgdG8gdGhlIGNsaXBib2FyZC5cclxuICogUmVtb3ZlIHRoZSA8dGV4dGFyZWE+IGVsZW1lbnQgZnJvbSB0aGUgSFRNTCBkb2N1bWVudC4gRmluYWxseSwgdXNlIFNlbGVjdGlvbigpLmFkZFJhbmdlKCkgdG8gcmVjb3ZlciB0aGUgb3JpZ2luYWwgc2VsZWN0ZWQgcmFuZ2UgKGlmIGFueSkuXHJcbiAqIEBwYXJhbSBzdHJcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gc3RyID0+IHtcclxuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZXh0YXJlYScgKTtcclxuXHRlbC52YWx1ZSA9IHN0cjtcclxuXHRlbC5zZXRBdHRyaWJ1dGUoICdyZWFkb25seScsICcnICk7XHJcblx0ZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdGVsLnN0eWxlLmxlZnQgICAgID0gJy05OTk5cHgnO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGVsICk7XHJcblx0Y29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yYW5nZUNvdW50ID4gMCA/IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoIDAgKSA6IGZhbHNlO1xyXG5cdGVsLnNlbGVjdCgpO1xyXG5cdGRvY3VtZW50LmV4ZWNDb21tYW5kKCAnY29weScgKTtcclxuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKCBlbCApO1xyXG5cdGlmKCBzZWxlY3RlZCApIHtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UoIHNlbGVjdGVkICk7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBDcmVhdGVzIGEgY291bnRlciB3aXRoIHRoZSBzcGVjaWZpZWQgcmFuZ2UsIHN0ZXAgYW5kIGR1cmF0aW9uIGZvciB0aGUgc3BlY2lmaWVkIHNlbGVjdG9yLlxyXG4gKiBDaGVjayBpZiBzdGVwIGhhcyB0aGUgcHJvcGVyIHNpZ24gYW5kIGNoYW5nZSBpdCBhY2NvcmRpbmdseS5cclxuICogVXNlIHNldEludGVydmFsKCkgaW4gY29tYmluYXRpb24gd2l0aCBNYXRoLmFicygpIGFuZCBNYXRoLmZsb29yKCkgdG8gY2FsY3VsYXRlIHRoZSB0aW1lIGJldHdlZW4gZWFjaCBuZXcgdGV4dCBkcmF3LlxyXG4gKiBVc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigpLmlubmVySFRNTCB0byB1cGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50LlxyXG4gKiBPbWl0IHRoZSBmb3VydGggcGFyYW1ldGVyLCBzdGVwLCB0byB1c2UgYSBkZWZhdWx0IHN0ZXAgb2YgMS4gT21pdCB0aGUgZmlmdGggcGFyYW1ldGVyLCBkdXJhdGlvbiwgdG8gdXNlIGEgZGVmYXVsdCBkdXJhdGlvbiBvZiAyMDAwbXMuXHJcbiAqIEBwYXJhbSBzZWxlY3RvclxyXG4gKiBAcGFyYW0gc3RhcnRcclxuICogQHBhcmFtIGVuZFxyXG4gKiBAcGFyYW0gc3RlcFxyXG4gKiBAcGFyYW0gZHVyYXRpb25cclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBzZWxlY3Rvciwgc3RhcnQsIGVuZCwgc3RlcCA9IDEsIGR1cmF0aW9uID0gMjAwMCApID0+IHtcclxuXHRsZXQgY3VycmVudCA9IHN0YXJ0LFxyXG5cdFx0X3N0ZXAgICA9ICggZW5kIC0gc3RhcnQgKSAqIHN0ZXAgPCAwID8gLXN0ZXAgOiBzdGVwLFxyXG5cdFx0dGltZXIgICA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblx0XHRcdGN1cnJlbnQgKz0gX3N0ZXA7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gY3VycmVudDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBlbmQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGNsZWFySW50ZXJ2YWwoIHRpbWVyICk7XHJcblx0XHR9LCBNYXRoLmFicyggTWF0aC5mbG9vciggZHVyYXRpb24gLyAoIGVuZCAtIHN0YXJ0ICkgKSApICk7XHJcblx0cmV0dXJuIHRpbWVyO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gdmFsID0+IHtcclxuXHR2YXIgcyA9IHZhbDtcclxuXHRpZiggXy5pc051bWJlciggdmFsICkgKSB7XHJcblx0XHRyZXR1cm4gdmFsICsgJ3B4JztcclxuXHR9IGVsc2UgaWYoIHZhbC5pbmRleE9mKCAncHgnICkgPiAtMSB8fCB2YWwuaW5kZXhPZiggJyUnICkgPiAtMSB8fCB2YWwuaW5kZXhPZiggJ2VtJyApID4gLTEgKSB7XHJcblx0XHRsZXQgY2hlY2tQeCAgPSBzLnJlcGxhY2UoICdweCcsICcnICk7XHJcblx0XHRsZXQgY2hlY2tQY3QgPSBzLnJlcGxhY2UoICclJywgJycgKTtcclxuXHRcdGxldCBjaGVja0VtICA9IHMucmVwbGFjZSggJ2VtJywgJycgKTtcclxuXHRcdGlmKCBfLmlzTnVtYmVyKCBjaGVja1B4ICkgfHwgXy5pc051bWJlciggY2hlY2tQY3QgKSB8fCBfLmlzTnVtYmVyKCBjaGVja0VtICkgKSB7XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJzBweCc7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiAnMHB4JztcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIERldGVjdHMgd2V0aGVyIHRoZSB3ZWJzaXRlIGlzIGJlaW5nIG9wZW5lZCBpbiBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogVXNlIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHRlc3QgdGhlIG5hdmlnYXRvci51c2VyQWdlbnQgcHJvcGVydHkgdG8gZmlndXJlIG91dCBpZiB0aGUgZGV2aWNlIGlzIGEgbW9iaWxlIGRldmljZSBvciBhIGRlc2t0b3AvbGFwdG9wLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSA/ICdNb2JpbGUnIDogJ0Rlc2t0b3AnOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIChpbiBkYXlzKSBiZXR3ZWVuIHR3byBkYXRlcy5cclxuICogQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIChpbiBkYXlzKSBiZXR3ZWVuIHR3byBEYXRlIG9iamVjdHMuXHJcbiAqIEBwYXJhbSBkYXRlSW5pdGlhbFxyXG4gKiBAcGFyYW0gZGF0ZUZpbmFsXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUluaXRpYWwsIGRhdGVGaW5hbCApID0+ICggZGF0ZUZpbmFsIC0gZGF0ZUluaXRpYWwgKSAvICggMTAwMCAqIDM2MDAgKiAyNCApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBodW1hbiByZWFkYWJsZSBmb3JtYXQgb2YgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAqIERpdmlkZSBtcyB3aXRoIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMgdG8gb2J0YWluIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMgZm9yIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgYW5kIG1pbGxpc2Vjb25kLlxyXG4gKiBVc2UgT2JqZWN0LmVudHJpZXMoKSB3aXRoIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoKSB0byBrZWVwIG9ubHkgbm9uLXplcm8gdmFsdWVzLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpIHRvIGNyZWF0ZSB0aGUgc3RyaW5nIGZvciBlYWNoIHZhbHVlLCBwbHVyYWxpemluZyBhcHByb3ByaWF0ZWx5LlxyXG4gKiBVc2UgU3RyaW5nLnByb3RvdHlwZS5qb2luKCcsICcpIHRvIGNvbWJpbmUgdGhlIHZhbHVlcyBpbnRvIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gbXNcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gbXMgPT4ge1xyXG5cdGlmKCBtcyA8IDAgKSBtcyA9IC1tcztcclxuXHRjb25zdCB0aW1lID0ge1xyXG5cdFx0ZGF5OiBNYXRoLmZsb29yKCBtcyAvIDg2NDAwMDAwICksXHJcblx0XHRob3VyOiBNYXRoLmZsb29yKCBtcyAvIDM2MDAwMDAgKSAlIDI0LFxyXG5cdFx0bWludXRlOiBNYXRoLmZsb29yKCBtcyAvIDYwMDAwICkgJSA2MCxcclxuXHRcdHNlY29uZDogTWF0aC5mbG9vciggbXMgLyAxMDAwICkgJSA2MCxcclxuXHRcdG1pbGxpc2Vjb25kOiBNYXRoLmZsb29yKCBtcyApICUgMTAwMFxyXG5cdH07XHJcblx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCB0aW1lIClcclxuXHRcdFx0XHQgLmZpbHRlciggdmFsID0+IHZhbFsgMSBdICE9PSAwIClcclxuXHRcdFx0XHQgLm1hcCggKCBbIGtleSwgdmFsIF0gKSA9PiBgJHt2YWx9ICR7a2V5fSR7dmFsICE9PSAxID8gJ3MnIDogJyd9YCApXHJcblx0XHRcdFx0IC5qb2luKCAnLCAnICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBhZnRlciBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgZ3JlYXRlciB0aGFuIG9wZXJhdG9yICg+KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBhZnRlciB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQSA+IGRhdGVCOyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYmVmb3JlIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIHRoZSBsZXNzIHRoYW4gb3BlcmF0b3IgKDwpIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGNvbWVzIGJlZm9yZSB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQSA8IGRhdGVCOyIsIi8qKlxyXG4gKiBDaGVjayBpZiBnaXZlbiBPYmplY3QgLyBWYWx1ZSBpcyBhIGpRdWVyeSBJbnN0YW5jZS5cclxuICogQHBhcmFtICRlbGVtXHJcbiAqIEByZXR1cm5zIHtib29sZWFufCp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiAoIGZhbHNlID09PSBfLmlzVW5kZWZpbmVkKCAkZWxlbSApICYmIGZhbHNlID09PSBfLmlzU3RyaW5nKCAkZWxlbSApICYmICRlbGVtLmpRdWVyeSApOyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgdGhlIHNhbWUgYXMgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKSBhbmQgc3RyaWN0IGVxdWFsaXR5IGNoZWNraW5nICg9PT0pIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBLnRvSVNPU3RyaW5nKCkgPT09IGRhdGVCLnRvSVNPU3RyaW5nKCk7IiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciB0YWIgb2YgdGhlIHBhZ2UgaXMgZm9jdXNlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKiBVc2UgdGhlIERvY3VtZW50LmhpZGRlbiBwcm9wZXJ0eSwgaW50cm9kdWNlZCBieSB0aGUgUGFnZSBWaXNpYmlsaXR5IEFQSSB0byBjaGVjayBpZiB0aGUgYnJvd3NlciB0YWIgb2YgdGhlIHBhZ2UgaXMgdmlzaWJsZSBvciBoaWRkZW4uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAhZG9jdW1lbnQuaGlkZGVuOyIsIm1vZHVsZS5leHBvcnRzID0gKCAkdXJsICkgPT4ge1xyXG5cdGxldCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCggJ14oaHR0cHM/OlxcXFwvXFxcXC8pPycgKyAvLyBwcm90b2NvbFxyXG5cdFx0JygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuPykrW2Etel17Mix9fCcgKyAvLyBkb21haW4gbmFtZVxyXG5cdFx0JygoXFxcXGR7MSwzfVxcXFwuKXszfVxcXFxkezEsM30pKScgKyAvLyBpcCAodjQpIGFkZHJlc3NcclxuXHRcdCcoXFxcXDpcXFxcZCspPyhcXFxcL1stYS16XFxcXGQlXy5+K10qKSonICsgLy9wb3J0XHJcblx0XHQnKFxcXFw/WzsmYS16XFxcXGQlXy5+Kz0tXSopPycgKyAvLyBxdWVyeSBzdHJpbmdcclxuXHRcdCcoXFxcXCNbLWEtelxcXFxkX10qKT8kJywgJ2knICk7XHJcblx0cmV0dXJuICggcGF0dGVybi50ZXN0KCAkdXJsICkgKTtcclxufTsiLCIvKipcclxuICogQ2hlY2tzIGlmIHdpbmRvdyBoYXMgZ2l2ZW4gdmFyaWFibGUuXHJcbiAqIEBwYXJhbSAka2V5XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXkgKSA9PiAoIGZhbHNlID09PSBfLmlzVW5kZWZpbmVkKCB3aW5kb3dbICRrZXkgXSApICk7IiwiLyoqXHJcbiAqIExvZ3MgYSB2YWx1ZSBhbmQgcmV0dXJucyBpdC5cclxuICogVXNlIGNvbnNvbGUubG9nIHRvIGxvZyB0aGUgc3VwcGxpZWQgdmFsdWUsIGNvbWJpbmVkIHdpdGggdGhlIHx8IG9wZXJhdG9yIHRvIHJldHVybiBpdC5cclxuICogQHBhcmFtIGRhdGFcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGEgPT4gY29uc29sZS5sb2coIGRhdGEgKSB8fCBkYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gKCkgPT4gKCB0eXBlb2YgT2JqZWN0LmNyZWF0ZSAgIT09ICd1bmRlZmluZWQnICkgPyBPYmplY3QuY3JlYXRlKCBudWxsICkgOiB7fTsiLCIvKipcclxuICogUmV0dXJuIHZhbHVlIGZyb20gUXVlcnlTdHJpbmdcclxuICogQHBhcmFtIG5hbWVcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBuYW1lICkgPT4ge1xyXG5cdG5hbWUgICAgICAgID0gbmFtZS5yZXBsYWNlKCAvW1xcW10vLCBcIlxcXFxbXCIgKS5yZXBsYWNlKCAvW1xcXV0vLCBcIlxcXFxdXCIgKTtcclxuXHR2YXIgcmVnZXggICA9IG5ldyBSZWdFeHAoIFwiW1xcXFw/Jl1cIiArIG5hbWUgKyBcIj0oW14mI10qKVwiICksXHJcblx0XHRyZXN1bHRzID0gcmVnZXguZXhlYyggbG9jYXRpb24uc2VhcmNoICk7XHJcblx0cmV0dXJuIHJlc3VsdHMgPT0gbnVsbCA/IFwiXCIgOiBkZWNvZGVVUklDb21wb25lbnQoIHJlc3VsdHNbIDEgXS5yZXBsYWNlKCAvXFwrL2csIFwiIFwiICkgKTtcclxufTsiLCJpbXBvcnQgbWQ1IGZyb20gJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JztcclxuXHJcbi8qKlxyXG4gKiBVbmlxdWUgcmFuZG9tIG1kNVxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiBTdHJpbmcoIG1kNSggTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICkgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHBhZ2UuXHJcbiAqIFVzZSBwYWdlWE9mZnNldCBhbmQgcGFnZVlPZmZzZXQgaWYgdGhleSBhcmUgZGVmaW5lZCwgb3RoZXJ3aXNlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcC4gWW91IGNhbiBvbWl0IGVsIHRvIHVzZSBhIGRlZmF1bHQgdmFsdWUgb2Ygd2luZG93LlxyXG4gKiBAcGFyYW0gZWxcclxuICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZWwgPSB3aW5kb3cgKSA9PiAoIHtcclxuXHR4OiBlbC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVhPZmZzZXQgOiBlbC5zY3JvbGxMZWZ0LFxyXG5cdHk6IGVsLnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWU9mZnNldCA6IGVsLnNjcm9sbFRvcFxyXG59ICk7IiwiLyoqXHJcbiAqIFNtb290aC1zY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXHJcbiAqIEdldCBkaXN0YW5jZSBmcm9tIHRvcCB1c2luZyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIG9yIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLlxyXG4gKiBTY3JvbGwgYnkgYSBmcmFjdGlvbiBvZiB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wLiBVc2Ugd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHRvIGFuaW1hdGUgdGhlIHNjcm9sbGluZy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xyXG5cdGNvbnN0IGMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdGlmKCBjID4gMCApIHtcclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjcm9sbFRvVG9wICk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oIDAsIGMgLSBjIC8gOCApO1xyXG5cdH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggY2FsbGJhY2ssIHRpdGxlID0gJ1RpbWVUYWtlbicgKSA9PiB7XHJcblx0Y29uc29sZS50aW1lKCB0aXRsZSApO1xyXG5cdGNvbnN0IHIgPSBjYWxsYmFjaygpO1xyXG5cdGNvbnNvbGUudGltZUVuZCggdGl0bGUgKTtcclxuXHRyZXR1cm4gcjtcclxufTsiLCJpbXBvcnQgaXNfanF1ZXJ5IGZyb20gJy4vaXNfanF1ZXJ5JztcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIEdpdmVuIFN0cmluZyBpbnRvIEEgalF1ZXJ5IE9iamVjdC5cclxuICogQHBhcmFtICRlbGVtXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4ge1xyXG5cdGlmKCBmYWxzZSA9PT0gaXNfanF1ZXJ5KCAkZWxlbSApICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeSggJGVsZW0gKTtcclxuXHR9XHJcblx0cmV0dXJuICRlbGVtO1xyXG59OyIsImltcG9ydCB2YWxpZGF0ZUpTRnVuYyBmcm9tICcuL3ZhbGlkYXRlU2luZ2xlSlNGdW5jJztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgRWFjaCBWYWx1ZSBPZiBhIEpTIE9iamVjdCBBbmQgQ29udmVydHMgSW50byBKUyBDYWxsYWJsZSBGdW5jdGlvbi5cclxuICogQHBhcmFtICRkYXRhXHJcbiAqIEBwYXJhbSAkYXJnc19rZXlcclxuICogQHBhcmFtICRjb250ZW50c19rZXlcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IF8uaXNPYmplY3QoICRkYXRhICkgKSB7XHJcblx0XHRmb3IoIGxldCAka2V5IGluICRkYXRhICkge1xyXG5cdFx0XHRpZiggIV8uaXNFbXB0eSggJGRhdGFbICRrZXkgXSApICkge1xyXG5cdFx0XHRcdCRkYXRhWyAka2V5IF0gPSB2YWxpZGF0ZUpTRnVuYyggJGRhdGFbICRrZXkgXSwgJGFyZ3Nfa2V5LCAkY29udGVudHNfa2V5ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRkYXRhO1xyXG59O1xyXG4iLCIvKipcclxuICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgY3VycmVudCBVUkwuXHJcbiAqIFVzZSBTdHJpbmcubWF0Y2goKSB3aXRoIGFuIGFwcHJvcHJpYXRlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBnZXQgYWxsIGtleS12YWx1ZSBwYWlycyxcclxuICogQXJyYXkucHJvdG90eXBlLnJlZHVjZSgpIHRvIG1hcCBhbmQgY29tYmluZSB0aGVtIGludG8gYSBzaW5nbGUgb2JqZWN0LlxyXG4gKiBQYXNzIGxvY2F0aW9uLnNlYXJjaCBhcyB0aGUgYXJndW1lbnQgdG8gYXBwbHkgdG8gdGhlIGN1cnJlbnQgdXJsLlxyXG4gKiBAcGFyYW0gdXJsXHJcbiAqIEByZXR1cm5zIHtUIHwge319XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHVybCA9PlxyXG5cdCggdXJsLm1hdGNoKCAvKFtePz0mXSspKD0oW14mXSopKS9nICkgfHwgW10gKS5yZWR1Y2UoXHJcblx0XHQoIGEsIHYgKSA9PiAoICggYVsgdi5zbGljZSggMCwgdi5pbmRleE9mKCAnPScgKSApIF0gPSB2LnNsaWNlKCB2LmluZGV4T2YoICc9JyApICsgMSApICksIGEgKSxcclxuXHRcdHt9XHJcblx0KTsiLCIvKipcclxuICogQ29udmVydHMgSlMgU3RyaW5nIEludG8gQ2FsbGFibGUgRnVuY3Rpb24uXHJcbiAqIEBwYXJhbSAkc3RyaW5nXHJcbiAqIEBwYXJhbSAkYXJnc19rZXlcclxuICogQHBhcmFtICRjb250ZW50c19rZXlcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJHN0cmluZywgJGFyZ3Nfa2V5ID0gJ2pzX2FyZ3MnLCAkY29udGVudHNfa2V5ID0gJ2pzX2NvbnRlbnRzJyApID0+IHtcclxuXHRpZiggdHJ1ZSA9PT0gXy5pc09iamVjdCggJHN0cmluZyApICYmIGZhbHNlID09PSBfLmlzVW5kZWZpbmVkKCAkc3RyaW5nWyAkYXJnc19rZXkgXSApIHx8IGZhbHNlID09PSBfLmlzVW5kZWZpbmVkKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gKSApIHtcclxuXHRcdGxldCAkYXJncyAgICAgPSAoICRzdHJpbmdbICRhcmdzX2tleSBdID09PSBmYWxzZSApID8gZmFsc2UgOiAkc3RyaW5nWyAkYXJnc19rZXkgXTtcclxuXHRcdGxldCAkY29udGVudHMgPSAoICRzdHJpbmdbICRjb250ZW50c19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdO1xyXG5cdFx0aWYoICRhcmdzID09PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkY29udGVudHMgKTtcclxuXHRcdH0gZWxzZSBpZiggJGFyZ3MgIT09IGZhbHNlICYmICRjb250ZW50cyAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oICRhcmdzLCAkY29udGVudHMgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAkc3RyaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gJHN0cmluZztcclxufTtcclxuIiwiLyoqXHJcbiAqIFNldHMgSlMgT2JqZWN0IEludG8gV2luZG93IEFyZ3MuXHJcbiAqIEBwYXJhbSAka2V5XHJcbiAqIEBwYXJhbSAkdmFsdWVcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5LCAkdmFsdWUgKSA9PiB7XHJcblx0aWYoIF8uaXNPYmplY3QoICRrZXkgKSApIHtcclxuXHRcdGZvciggbGV0ICRfayBpbiAka2V5ICkge1xyXG5cdFx0XHR3aW5kb3dbICRfayBdID0gJGtleVsgJF9rIF07XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvd1sgJGtleSBdID0gJHZhbHVlO1xyXG5cdH1cclxufTsiLCJjb25zdCBwYXJzZV91cmwgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9wYXJzZV91cmwnICk7XHJcbmNvbnN0IHBhcnNlX3N0ciAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHInICk7XHJcbmNvbnN0IGh0dHBfYnVpbGRfcXVlcnkgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2h0dHBfYnVpbGRfcXVlcnknICk7XHJcbmNvbnN0IHN0cnBvcyAgICAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJwb3MnICk7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGEgbW9kaWZpZWQgVVJMIHF1ZXJ5IHN0cmluZy5cclxuICpcclxuICogWW91IGNhbiByZWJ1aWxkIHRoZSBVUkwgYW5kIGFwcGVuZCBxdWVyeSB2YXJpYWJsZXMgdG8gdGhlIFVSTCBxdWVyeSBieSB1c2luZyB0aGlzIGZ1bmN0aW9uLlxyXG4gKiBUaGVyZSBhcmUgdHdvIHdheXMgdG8gdXNlIHRoaXMgZnVuY3Rpb247IGVpdGhlciBhIHNpbmdsZSBrZXkgYW5kIHZhbHVlLCBvciBhbiBhc3NvY2lhdGl2ZSBhcnJheS5cclxuICpcclxuICogVXNpbmcgYSBzaW5nbGUga2V5IGFuZCB2YWx1ZTpcclxuICpcclxuICogICAgIGFkZF9xdWVyeV9hcmcoICdrZXknLCAndmFsdWUnLCAnaHR0cDovL2V4YW1wbGUuY29tJyApO1xyXG4gKlxyXG4gKiBVc2luZyBhbiBhc3NvY2lhdGl2ZSBhcnJheTpcclxuICpcclxuICogICAgIGFkZF9xdWVyeV9hcmcoIGFycmF5KFxyXG4gKiAgICAgICAgICdrZXkxJyA9PiAndmFsdWUxJyxcclxuICogICAgICAgICAna2V5MicgPT4gJ3ZhbHVlMicsXHJcbiAqICAgICApLCAnaHR0cDovL2V4YW1wbGUuY29tJyApO1xyXG4gKlxyXG4gKiBPbWl0dGluZyB0aGUgVVJMIGZyb20gZWl0aGVyIHVzZSByZXN1bHRzIGluIHRoZSBjdXJyZW50IFVSTCBiZWluZyB1c2VkXHJcbiAqICh0aGUgdmFsdWUgb2YgYHdpbmRvdy5sb2NhdGlvbi5ocmVmYCkuXHJcbiAqXHJcbiAqIFZhbHVlcyBhcmUgZXhwZWN0ZWQgdG8gYmUgZW5jb2RlZCBhcHByb3ByaWF0ZWx5IHdpdGggdXJsZW5jb2RlKCkgb3IgcmF3dXJsZW5jb2RlKCkuXHJcbiAqXHJcbiAqIFNldHRpbmcgYW55IHF1ZXJ5IHZhcmlhYmxlJ3MgdmFsdWUgdG8gYm9vbGVhbiBmYWxzZSByZW1vdmVzIHRoZSBrZXkgKHNlZSByZW1vdmVfcXVlcnlfYXJnKCkpLlxyXG4gKlxyXG4gKiBJbXBvcnRhbnQ6IFRoZSByZXR1cm4gdmFsdWUgb2YgYWRkX3F1ZXJ5X2FyZygpIGlzIG5vdCBlc2NhcGVkIGJ5IGRlZmF1bHQuIE91dHB1dCBzaG91bGQgYmVcclxuICogbGF0ZS1lc2NhcGVkIHdpdGggZXNjX3VybCgpIG9yIHNpbWlsYXIgdG8gaGVscCBwcmV2ZW50IHZ1bG5lcmFiaWxpdHkgdG8gY3Jvc3Mtc2l0ZSBzY3JpcHRpbmdcclxuICogKFhTUykgYXR0YWNrcy5cclxuICpcclxuICogQHBhcmFtIGtleVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkX3F1ZXJ5X2FyZygga2V5ID0gbnVsbCwgdmFsdWUgPSBudWxsLCB1cmwgPSBudWxsICkge1xyXG5cdGlmKCB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiBudWxsID09PSB2YWx1ZSApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH0gZWxzZSBpZiggdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgbnVsbCAhPT0gdmFsdWUgKSB7XHJcblx0XHR1cmwgICA9IHZhbHVlO1xyXG5cdFx0dmFsdWUgPSBudWxsO1xyXG5cdH0gZWxzZSBpZiggbnVsbCA9PT0gdXJsICkge1xyXG5cdFx0dXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsc2UgPT09IHVybCB8fCAnJyA9PT0gdXJsIHx8IHVuZGVmaW5lZCA9PT0gdXJsICkge1xyXG5cdFx0dXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0fVxyXG5cclxuXHRsZXQgJHBhcnNlZCAgID0gcGFyc2VfdXJsKCB1cmwgKSxcclxuXHRcdCRxdWVyeSAgICA9IHt9LFxyXG5cdFx0JGZyYWdtZW50ID0gKCAkcGFyc2VkLmZyYWdtZW50ICkgPyAnIycgKyAkcGFyc2VkLmZyYWdtZW50IDogJyc7XHJcblxyXG5cdGlmKCB0eXBlb2YgJHBhcnNlZC5xdWVyeSAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRwYXJzZV9zdHIoICRwYXJzZWQucXVlcnksICRxdWVyeSApO1xyXG5cdH1cclxuXHJcblx0aWYoIHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICkge1xyXG5cdFx0Zm9yKCBsZXQgayBpbiBrZXkgKSB7XHJcblx0XHRcdGlmKCBrZXlbIGsgXSApIHtcclxuXHRcdFx0XHQkcXVlcnlbIGsgXSA9IGtleVsgayBdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdCRxdWVyeVsga2V5IF0gPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGxldCBzcGxpdF91cmwgPSBudWxsLFxyXG5cdFx0YmFzZV91cmwgID0gdXJsO1xyXG5cdGlmKCBmYWxzZSAhPT0gc3RycG9zKCB1cmwsICc/JyApICkge1xyXG5cdFx0c3BsaXRfdXJsID0gdXJsLnNwbGl0KCAnPycgKTtcclxuXHRcdGJhc2VfdXJsICA9IHNwbGl0X3VybFsgMCBdIHx8IHVybDtcclxuXHR9IGVsc2UgaWYoIGZhbHNlICE9PSBzdHJwb3MoIHVybCwgJyMnICkgKSB7XHJcblx0XHRzcGxpdF91cmwgPSB1cmwuc3BsaXQoICcjJyApO1xyXG5cdFx0YmFzZV91cmwgID0gc3BsaXRfdXJsWyAwIF0gfHwgdXJsO1xyXG5cdH1cclxuXHJcblx0Zm9yKCBsZXQgayBpbiAkcXVlcnkgKSB7XHJcblx0XHRpZiggZmFsc2UgPT09ICRxdWVyeVsgayBdICkge1xyXG5cdFx0XHRkZWxldGUgJHF1ZXJ5WyBrIF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQkcXVlcnkgPSBodHRwX2J1aWxkX3F1ZXJ5KCAkcXVlcnksIG51bGwsICcmJyApO1xyXG5cdCRxdWVyeSA9ICggJHF1ZXJ5ICE9PSAnJyApID8gJz8nICsgJHF1ZXJ5IDogJHF1ZXJ5O1xyXG5cdHJldHVybiBiYXNlX3VybCArICRxdWVyeSArICRmcmFnbWVudDtcclxufSIsImltcG9ydCBhZGRfcXVlcnlfYXJnIGZyb20gJy4vYWRkX3F1ZXJ5X2FyZyc7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhbiBpdGVtIG9yIGl0ZW1zIGZyb20gYSBxdWVyeSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBrZXlcclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZV9xdWVyeV9hcmcoIGtleSA9IG51bGwsIHVybCA9IG51bGwgKSB7XHJcblx0aWYoIHR5cGVvZiBrZXkgIT09ICdvYmplY3QnICkge1xyXG5cdFx0a2V5ID0gWyBrZXkgXTtcclxuXHR9XHJcblxyXG5cdGZvciggbGV0IGkgaW4ga2V5ICkge1xyXG5cdFx0aWYoIGtleVsgaSBdICkge1xyXG5cdFx0XHR1cmwgPSBhZGRfcXVlcnlfYXJnKCBrZXlbIGkgXSwgZmFsc2UsIHVybCApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdXJsO1xyXG59XHJcbiIsImltcG9ydCB1bnRyYWlsaW5nc2xhc2hpdCBmcm9tICcuL3VudHJhaWxpbmdzbGFzaGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCAkc3RyaW5nICkge1xyXG5cdHJldHVybiB1bnRyYWlsaW5nc2xhc2hpdCggJHN0cmluZyApICsgJy9cXFxcJztcclxufSIsImltcG9ydCBydHJpbSBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL3J0cmltJztcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRyYWlsaW5nIGZvcndhcmQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaWYgdGhleSBleGlzdC5cclxuICpcclxuICogVGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgaXMgZm9yIHBhdGhzIGFuZCB0aHVzIHNob3VsZCBiZSB1c2VkIGZvciBwYXRocy4gSXQgaXNcclxuICogbm90IHJlc3RyaWN0ZWQgdG8gcGF0aHMgYW5kIG9mZmVycyBubyBzcGVjaWZpYyBwYXRoIHN1cHBvcnQuXHJcbiAqIEBwYXJhbSAkc3RyaW5nXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oICRzdHJpbmcgKSB7XHJcblx0cmV0dXJuIHJ0cmltKCAkc3RyaW5nLCAnL1xcXFwnICk7XHJcbn0iLCJleHBvcnQgY29uc3QgYWRkX3F1ZXJ5X2FyZyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL2FkZF9xdWVyeV9hcmcnKS5kZWZhdWx0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZV9xdWVyeV9hcmcgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9yZW1vdmVfcXVlcnlfYXJnJykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFpbGluZ3NsYXNoaXQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy90cmFpbGluZ3NsYXNoaXQnKS5kZWZhdWx0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVudHJhaWxpbmdzbGFzaGl0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvdW50cmFpbGluZ3NsYXNoaXQnKS5kZWZhdWx0O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBcHBlbmRzIEZ1bmN0aW9uIEdsb2JhbGx5LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdyApID0+IHtcclxuXHR3aW5kb3cuYWRkX3F1ZXJ5X2FyZyAgICAgPSBhZGRfcXVlcnlfYXJnO1xyXG5cdHdpbmRvdy5yZW1vdmVfcXVlcnlfYXJnICA9IHJlbW92ZV9xdWVyeV9hcmc7XHJcblx0d2luZG93LnVudHJhaWxpbmdzbGFzaGl0ID0gdW50cmFpbGluZ3NsYXNoaXQ7XHJcblx0d2luZG93LnRyYWlsaW5nc2xhc2hpdCAgID0gdHJhaWxpbmdzbGFzaGl0O1xyXG59ICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQge1xuXHR0b19qcXVlcnksXG5cdGNhbGxfdXNlcl9mdW5jLFxuXHRwYXJzZV9zdHIsXG5cdGlzX3VybCxcblx0dXJsX3BhcmFtcyxcblx0aXNfY2FsbGFibGUsXG5cdGNhbGxfdXNlcl9mdW5jX2FycmF5LFxuXHRmdW5jdGlvbl9leGlzdHMsXG5cdGNyZWF0ZV9mdW5jdGlvbixcbn0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7IHJlbW92ZV9xdWVyeV9hcmcgfSBmcm9tICd3b3JkcHJlc3MtanMtcG9ydHMnO1xuXG4vKipcbiAqIFdQT25pb24gQ3VzdG9tIEFqYXggSGFuZGxlci5cbiAqL1xuZXhwb3J0IGNsYXNzIFdQT25pb25fQWpheGVyIHtcblx0LyoqXG5cdCAqIEBwYXJhbSAkYWpheF9hcmdzXG5cdCAqIEBwYXJhbSAkYWpheF9jb25maWdcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkYWpheF9hcmdzLCAkYWpheF9jb25maWcgKSB7XG5cdFx0dGhpcy5kZWZhdWx0cyAgICAgICAgPSB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdHVybDogKCB0eXBlb2Ygd2luZG93LmFqYXh1cmwgIT09ICd1bmRlZmluZWQnICkgPyB3aW5kb3cuYWpheHVybCA6IGZhbHNlLFxuXHRcdFx0ZGF0YToge30sXG5cdFx0XHRzdWNjZXNzOiBmYWxzZSxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdGFsd2F5czogZmFsc2UsXG5cdFx0XHRhY3Rpb246IGZhbHNlLFxuXHRcdH07XG5cdFx0dGhpcy5kZWZhdWx0X2NvbmZpZ3MgPSB7XG5cdFx0XHRyZXNwb25zZV9lbGVtZW50OiBmYWxzZSxcblx0XHRcdGJ1dHRvbjogZmFsc2UsXG5cdFx0XHRlbGVtZW50OiBmYWxzZSxcblx0XHRcdHNwaW5uZXI6ICc8c3BhbiBjbGFzcz1cInNwaW5uZXJcIj48L3NwYW4+Jyxcblx0XHR9O1xuXHRcdHRoaXMuaW5zdGFuY2UgICAgICAgID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V1BPbmlvbl9BamF4ZXIuZGVmYXVsdHN9XG5cdFx0ICovXG5cdFx0dGhpcy5hamF4X2FyZ3MgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB0aGlzLmRlZmF1bHRzLCAkYWpheF9hcmdzICk7XG5cdFx0dGhpcy5hamF4X2NvbmZpZyA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHRoaXMuZGVmYXVsdF9jb25maWdzLCAkYWpheF9jb25maWcgKTtcblx0XHR0aGlzLmFqYXgoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIEEgQ2FsbGFibGUgQ2FsbGJhY2sgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGNvZGUgZGF0YS5cblx0ICpcblx0ICogQHBhcmFtICRjb2RlXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKi9cblx0Y3JlYXRlX2Z1bmN0aW9uKCAkY29kZSA9IGZhbHNlLCAkYXJncyA9ICcnICkge1xuXHRcdHJldHVybiB0aGlzLnNpbmdsZV9jYWxsYmFjayggY3JlYXRlX2Z1bmN0aW9uKCAkYXJncywgJGNvZGUgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlcyAmIFRyaWdnZXJzIEEgU2luZ2xlIENhbGxiYWNrIEZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0gJGNhbGxiYWNrXG5cdCAqL1xuXHRzaW5nbGVfY2FsbGJhY2soICRjYWxsYmFjayApIHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc0Z1bmN0aW9uKCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdGNhbGxfdXNlcl9mdW5jKCAkY2FsbGJhY2sgKTtcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFjayApICYmIGZhbHNlICE9PSBmdW5jdGlvbl9leGlzdHMoICRjYWxsYmFjayApICkge1xuXHRcdFx0Y2FsbF91c2VyX2Z1bmMoICRjYWxsYmFjayApO1xuXHRcdH0gZWxzZSBpZiggd2luZG93Lndwb25pb24uXy5pc1N0cmluZyggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZV9mdW5jdGlvbiggJGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGNhbGxiYWNrICkge1xuXHRcdFx0XHRpZiggJGNhbGxiYWNrLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0dGhpcy5zaW5nbGVfY2FsbGJhY2soICRjYWxsYmFja1sgJGtleSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBBbiBBcnJheSBvZiBDYWxsYWJsZSBBamF4IEZ1bmN0aW9ucy5cblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRoYW5kbGVfY2FsbGJhY2tzKCBkYXRhICkge1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCBkYXRhICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIGRhdGEuY2FsbGJhY2sgKSApIHtcblx0XHRcdFx0bGV0ICRjYWxsYmFja3MgPSBkYXRhLmNhbGxiYWNrO1xuXG5cdFx0XHRcdGlmKCBmYWxzZSAhPT0gd2luZG93Lndwb25pb24uXy5pc1N0cmluZyggJGNhbGxiYWNrcyApICkge1xuXHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tzICk7XG5cdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRjYWxsYmFja3MgKSApIHtcblx0XHRcdFx0XHRmb3IoIGxldCAka2V5IGluICRjYWxsYmFja3MgKSB7XG5cdFx0XHRcdFx0XHRpZiggJGNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBkYXRhLmNhbGxiYWNrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyZWQgT24gQWpheCBvblN1Y2Nlc3Ncblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdG9uU3VjY2VzcyggZGF0YSApIHtcblx0XHR0aGlzLmhhbmRsZV9jYWxsYmFja3MoIGRhdGEgKTtcblxuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5hamF4X2FyZ3Muc3VjY2VzcyApIHtcblx0XHRcdGlmKCBpc19jYWxsYWJsZSggdGhpcy5hamF4X2FyZ3Muc3VjY2VzcyApICkge1xuXHRcdFx0XHRjYWxsX3VzZXJfZnVuY19hcnJheSggdGhpcy5hamF4X2FyZ3Muc3VjY2VzcywgWyBkYXRhIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcmVkIE9uIEFqYXggb25FcnJvclxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0b25FcnJvciggZGF0YSApIHtcblx0XHR0aGlzLmhhbmRsZV9jYWxsYmFja3MoIGRhdGEgKTtcblx0XHRpZiggZmFsc2UgIT09IHRoaXMuYWpheF9hcmdzLmVycm9yICkge1xuXHRcdFx0aWYoIGlzX2NhbGxhYmxlKCB0aGlzLmFqYXhfYXJncy5lcnJvciApICkge1xuXHRcdFx0XHRjYWxsX3VzZXJfZnVuY19hcnJheSggdGhpcy5hamF4X2FyZ3MuZXJyb3IsIFsgZGF0YSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJlZCBPbiBBamF4IG9uQWx3YXlzXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRvbkFsd2F5cyggZGF0YSApIHtcblx0XHR0aGlzLmJ1dHRvbl91bmxvY2soKTtcblx0XHRpZiggZmFsc2UgIT09IHRoaXMuYWpheF9hcmdzLmFsd2F5cyApIHtcblx0XHRcdGlmKCBpc19jYWxsYWJsZSggdGhpcy5hamF4X2FyZ3MuYWx3YXlzICkgKSB7XG5cdFx0XHRcdGNhbGxfdXNlcl9mdW5jX2FycmF5KCB0aGlzLmFqYXhfYXJncy5hbHdheXMsIFsgZGF0YSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIEFuIEFqYXggUmVxdWVzdC4gQmFzZWQgT24gVGhlIENvbmZpZy5cblx0ICovXG5cdGFqYXgoKSB7XG5cdFx0dGhpcy5idXR0b25fbG9jaygpO1xuXHRcdGxldCAkY29uZmlnID0gd2luZG93Lndwb25pb24uXy5jbG9uZSggdGhpcy5hamF4X2FyZ3MgKTtcblx0XHRpZiggZmFsc2UgIT09ICRjb25maWcudXJsICkge1xuXHRcdFx0aWYoIGZhbHNlICE9PSBpc191cmwoICRjb25maWcudXJsICkgKSB7XG5cdFx0XHRcdGxldCAkdXJsX3BhcmFtcyA9IHVybF9wYXJhbXMoICRjb25maWcudXJsICk7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHVybF9wYXJhbXMgKSB7XG5cdFx0XHRcdFx0aWYoICR1cmxfcGFyYW1zLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0XHQkY29uZmlnLnVybCA9IHJlbW92ZV9xdWVyeV9hcmcoICRrZXksICRjb25maWcudXJsICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCRjb25maWcuZGF0YSA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICRjb25maWcuZGF0YSwgJHVybF9wYXJhbXMgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkdXJsX3BhcmFtcyA9IHt9O1xuXHRcdFx0XHRwYXJzZV9zdHIoICRjb25maWcudXJsLCAkdXJsX3BhcmFtcyApO1xuXHRcdFx0XHQkY29uZmlnLnVybCAgPSB3aW5kb3cuYWpheHVybDtcblx0XHRcdFx0JGNvbmZpZy5kYXRhID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJGNvbmZpZy5kYXRhLCAkdXJsX3BhcmFtcyApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY29uZmlnLnVybCA9IHdpbmRvdy5hamF4dXJsO1xuXHRcdH1cblxuXHRcdGlmKCBmYWxzZSAhPT0gJGNvbmZpZy5hY3Rpb24gKSB7XG5cdFx0XHQkY29uZmlnLmRhdGEuYWN0aW9uID0gJGNvbmZpZy5hY3Rpb247XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5hY3Rpb247XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiAkY29uZmlnLnN1Y2Nlc3MgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0ZGVsZXRlICRjb25maWcuc3VjY2Vzcztcblx0XHR9XG5cdFx0aWYoIHR5cGVvZiAkY29uZmlnLmFsd2F5cyAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5hbHdheXM7XG5cdFx0fVxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5lcnJvciAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5lcnJvcjtcblx0XHR9XG5cblx0XHR0aGlzLmluc3RhbmNlID0gd2luZG93LndwLmFqYXguc2VuZCggJGNvbmZpZyApO1xuXHRcdHRoaXMuaW5zdGFuY2UuZG9uZSggKCBkYXRhICkgPT4gdGhpcy5vblN1Y2Nlc3MoIGRhdGEgKSApO1xuXHRcdHRoaXMuaW5zdGFuY2UuZmFpbCggKCBkYXRhICkgPT4gdGhpcy5vbkVycm9yKCBkYXRhICkgKTtcblx0XHR0aGlzLmluc3RhbmNlLmFsd2F5cyggKCBkYXRhICkgPT4gdGhpcy5vbkFsd2F5cyggZGF0YSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIEEgQ29uZmlnIERhdGEgRXhzaXRzIEJhc2VkIG9uIFRoZSBHaXZlbiBLZXkuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0aGFzX2NvbmZpZyggJGtleSA9ICcnICkge1xuXHRcdHJldHVybiAoIHR5cGVvZiB0aGlzLmFqYXhfY29uZmlnWyAka2V5IF0gIT09ICd1bmRlZmluZWQnICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBUaGUgQ29uZmlnIERhdGEgQmFzZWQgb24gVGhlIENvbmZpZyBLZXkuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGNvbmZpZyggJGtleSA9ICcnLCAkZGVmYXVsdCA9IGZhbHNlICkge1xuXHRcdHJldHVybiAoIHRoaXMuaGFzX2NvbmZpZyggJGtleSApICkgPyB0aGlzLmFqYXhfY29uZmlnWyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NrcyBBIEdpdmVuIEJ1dHRvbiBFbGVtZW50LlxuXHQgKi9cblx0YnV0dG9uX2xvY2soKSB7XG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZyggJ2J1dHRvbicgKSApIHtcblx0XHRcdGxldCAkYnV0dG9uID0gdG9fanF1ZXJ5KCB0aGlzLmNvbmZpZyggJ2J1dHRvbicgKSApO1xuXHRcdFx0aWYoICRidXR0b24gKSB7XG5cdFx0XHRcdCRidXR0b24ud3BvX2J1dHRvbiggJ3Byb2Nlc3NpbmcnICk7XG5cdFx0XHRcdCRidXR0b24uYXR0ciggJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyApO1xuXG5cdFx0XHRcdGlmKCB0aGlzLmNvbmZpZyggJ3NwaW5uZXInICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRzcGlubmVyID0galF1ZXJ5KCB0aGlzLmNvbmZpZyggJ3NwaW5uZXInICkgKTtcblx0XHRcdFx0XHQkc3Bpbm5lci5hZGRDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHRcdFx0XHQkYnV0dG9uLnBhcmVudCgpLmFwcGVuZCggJHNwaW5uZXIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVbmxvY2tzIEEgR2l2ZW4gQnV0dG9uIEVsZW1lbnQuXG5cdCAqL1xuXHRidXR0b25fdW5sb2NrKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcoICdidXR0b24nICkgKSB7XG5cdFx0XHRsZXQgJGJ1dHRvbiA9IHRvX2pxdWVyeSggdGhpcy5jb25maWcoICdidXR0b24nICkgKTtcblx0XHRcdGlmKCAkYnV0dG9uICkge1xuXHRcdFx0XHQkYnV0dG9uLndwb19idXR0b24oICdjb21wbGV0ZScgKTtcblx0XHRcdFx0JGJ1dHRvbi5yZW1vdmVBdHRyKCAnZGlzYWJsZWQnICk7XG5cdFx0XHRcdGxldCAkc3Bpbm5lciA9ICRidXR0b24ubmV4dCgpO1xuXHRcdFx0XHRpZiggJHNwaW5uZXIuaGFzQ2xhc3MoICdzcGlubmVyJyApICkge1xuXHRcdFx0XHRcdCRzcGlubmVyLnJlbW92ZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRidXR0b24ucGFyZW50KCkuZmluZCggJy5zcGlubmVyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCAkLCBkb2N1bWVudCApID0+IHtcblx0JCggKCkgPT4ge1xuXHRcdGxldCAkY2xhc3MgPSAnW2RhdGEtd3Bvbmlvbi1pbmxpbmUtYWpheF0sIC53cG9uaW9uLWFqYXgsIC53cG9uaW9uLWFqYXgtZ2V0LCAud3Bvbmlvbi1hamF4LXBvc3QsIC53cG9uaW9uLWlubGluZS1hamF4LCAud3Bvbmlvbi1pbmxpbmUtYWpheC1nZXQsIC53cG9uaW9uLWlubGluZS1hamF4LXBvc3QnO1xuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICRjbGFzcywgKCBlICkgPT4ge1xuXG5cdFx0XHRsZXQgJGVsZW0gICAgICAgICAgICA9ICQoIGUuY3VycmVudFRhcmdldCApLFxuXHRcdFx0XHQkX2RhdGEgICAgICAgICAgID0gJGVsZW0uZGF0YSgpLFxuXHRcdFx0XHQkX2NsYXNzX2luc3RhbmNlID0gbnVsbCxcblx0XHRcdFx0JGFyZ3MgICAgICAgICAgICA9IHtcblx0XHRcdFx0XHR1cmw6IGZhbHNlLFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRpZiggJGVsZW0uYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbmxpbmUtYWpheCcgKSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdGxldCAkZmlkMSAgPSAkZWxlbS5hdHRyKCAnZGF0YS13cG9uaW9uLWlubGluZS1hamF4JyApO1xuXHRcdFx0XHRsZXQgJGZpZDIgID0gJGVsZW0uYXR0ciggJ2lkJyApO1xuXHRcdFx0XHRsZXQgJGpzX2lkID0gJHdwb25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRcdFx0bGV0ICRhcmdzICA9IHt9O1xuXHRcdFx0XHRpZiggJGpzX2lkICkge1xuXHRcdFx0XHRcdGxldCAkX2FyZ3MgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRqc19pZCwgZmFsc2UgKTtcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xuXHRcdFx0XHRcdFx0JGFyZ3MgPSAkX2FyZ3MuaW5saW5lX2FqYXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRmaWQxLCBmYWxzZSApICkge1xuXHRcdFx0XHRcdGxldCAkX2FyZ3MgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRmaWQxLCBmYWxzZSApO1xuXHRcdFx0XHRcdGlmKCAkX2FyZ3MuaGFzT3duUHJvcGVydHkoICdpbmxpbmVfYWpheCcgKSAmJiBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJF9hcmdzLmlubGluZV9hamF4ICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgIT09ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDIsIGZhbHNlICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDIsIGZhbHNlICk7XG5cdFx0XHRcdFx0aWYoICRfYXJncy5oYXNPd25Qcm9wZXJ0eSggJ2lubGluZV9hamF4JyApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkX2FyZ3MuaW5saW5lX2FqYXggKSApIHtcblx0XHRcdFx0XHRcdCRhcmdzID0gJF9hcmdzLmlubGluZV9hamF4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1hamF4LWdldCcgKSB8fCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24taW5saW5lLWFqYXgtZ2V0JyApICkge1xuXHRcdFx0XHRcdCRhcmdzLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0XHR9IGVsc2UgaWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1hamF4LXBvc3QnICkgfHwgJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWlubGluZS1hamF4LXBvc3QnICkgKSB7XG5cdFx0XHRcdFx0JGFyZ3MubWV0aG9kID0gJ1BPU1QnO1xuXHRcdFx0XHR9IGVsc2UgaWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1hamF4JyApIHx8ICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1pbmxpbmUtYWpheCcgKSAmJiB0eXBlb2YgJF9kYXRhLm1ldGhvZCAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MubWV0aG9kID0gJF9kYXRhLm1ldGhvZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB0eXBlb2YgJF9kYXRhLnVybCAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJF9kYXRhLnVybDtcblx0XHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJF9kYXRhLmhyZWYgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRhcmdzLnVybCA9ICRfZGF0YS5ocmVmO1xuXHRcdFx0XHR9IGVsc2UgaWYoICRlbGVtLmF0dHIoICdocmVmJyApICkge1xuXHRcdFx0XHRcdCRhcmdzLnVybCA9ICRlbGVtLmF0dHIoICdocmVmJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHR5cGVvZiAkX2RhdGFbICdhamF4LWRhdGEnIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRhcmdzLmRhdGEgPSAkX2RhdGFbICdhamF4LWRhdGEnIF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdHlwZW9mICRfZGF0YS5hY3Rpb24gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRhcmdzLmFjdGlvbiA9ICRfZGF0YS5hY3Rpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0JF9jbGFzc19pbnN0YW5jZSA9IG5ldyBXUE9uaW9uX0FqYXhlciggJGFyZ3MsIHtcblx0XHRcdFx0YnV0dG9uOiAkZWxlbSxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggalF1ZXJ5LCBkb2N1bWVudCApO1xuIiwiLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuaW1wb3J0IHtcblx0Y2FsbF91c2VyX2Z1bmMsXG5cdGlzX2pxdWVyeSxcblx0aXNfd2luZG93X2FyZyxcblx0bWQ1LFxuXHRtaWNyb3RpbWUsXG5cdHJhbmRfbWQ1LFxuXHR0b19qcXVlcnksXG5cdHRvX2pzX2Z1bmMsXG59IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG4vKipcbiAqIEJhc2UgV1BvbmlvbiBKUyBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbiB7XG5cdC8qKlxuXHQgKiBWYWxpZGF0ZXMgJiBDb252ZXJ0cyBpbnRvIENhbGxhYmxlIEpTIEZ1bmN0aW9ucy5cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqIEByZXR1cm5zIHsqfCRkYXRhfVxuXHQgKi9cblx0c3RhdGljIGpzX2Z1bmMoICRkYXRhICkge1xuXHRcdHJldHVybiB0b19qc19mdW5jKCAkZGF0YSwgJ3dwb25pb25fanNfYXJncycsICd3cG9uaW9uX2pzX2NvbnRlbnRzJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlcyBBIFJhbmRvbSBJRC5cblx0ICovXG5cdHN0YXRpYyByYW5kX2lkKCkge1xuXHRcdHJldHVybiBtZDUoICd3cG9uaW9uX3JhbmRfJyArIG1pY3JvdGltZSgpICsgcmFuZF9tZDUoKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBKU09OLlxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c3RhdGljIHZhbGlkX2pzb24oIG9iaiApIHtcblx0XHR0cnkge1xuXHRcdFx0SlNPTi5wYXJzZSggb2JqICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkIElELlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgZmllbGRJRCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuIHRvX2pxdWVyeSggJGVsZW0gKS5hdHRyKCAnZGF0YS13cG9uaW9uLWpzaWQnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBGaWVsZCBIVE1MIE9iamVjdCBVc2luZyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkd2hlcmVfdG9fZmluZFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzdGF0aWMgSUR0b0VsZW1lbnQoICRlbGVtLCAkd2hlcmVfdG9fZmluZCA9IGZhbHNlICkge1xuXHRcdGxldCAkaWQgPSBXUE9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0aWYoIGZhbHNlICE9PSAkd2hlcmVfdG9fZmluZCAmJiBpc19qcXVlcnkoICR3aGVyZV90b19maW5kICkgKSB7XG5cdFx0XHRyZXR1cm4gJHdoZXJlX3RvX2ZpbmQuZmluZCggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiJyApO1xuXHRcdH1cblx0XHRyZXR1cm4galF1ZXJ5KCAnLndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkaWQgKyAnXCJdJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBnaXZlbiB2YWx1ZSBpcyBhbiBqUXVlcnkgaW5zdGFuY2UuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc0ZpZWxkKCAkZWxlbSApIHtcblx0XHRyZXR1cm4gKCBpc19qcXVlcnkoICRlbGVtICkgKSA/ICggdGhpcy5maWVsZElEKCAkZWxlbSApICkgOiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIFdpbmRvdyBBcmdzLlxuXHQgKiBAcGFyYW0gJHZhcl9pZFxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgd2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRyZXR1cm4gKCBpc193aW5kb3dfYXJnKCAkdmFyX2lkICkgKSA/IHdpbmRvd1sgJHZhcl9pZCBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzICYgUmV0dXJucyBGaWVsZCBBcmdzLlxuXHQgKiBAcGFyYW0gJHZhcl9pZFxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgZmllbGRBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdCR2YXJfaWQgPSAoIHRoaXMuaXNGaWVsZCggJHZhcl9pZCApICkgPyB0aGlzLmZpZWxkSUQoICR2YXJfaWQgKSA6ICR2YXJfaWQ7XG5cdFx0cmV0dXJuICggJHZhcl9pZCApID8gd2luZG93Lndwb25pb24uXy5jbG9uZSggdGhpcy53aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCApICkgOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGNla3MgYW5kIHJldHVybnMgZ2xvYmFsIHRyYW5zbGF0aW9uIHN0cmluZy5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgdHh0KCAka2V5LCAkZGVmYXVsdCA9ICdzdHJpbmdfZGVmYXVsdF9ub3RfZm91bmQnICkge1xuXHRcdHJldHVybiAoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCBXUE9uaW9uLnRleHRbICRrZXkgXSApICkgPyBXUE9uaW9uLnRleHRbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgTG9hZGluZyBTY3JlZW4uXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJGlzX3Nob3dcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgbG9hZGluZ19zY3JlZW4oICRlbGVtLCAkaXNfc2hvdyA9IHRydWUgKSB7XG5cdFx0JGVsZW0gPSB0b19qcXVlcnkoICRlbGVtICkuZmluZCggJy5wYWdlLWxvYWRlcicgKTtcblx0XHRpZiggdHJ1ZSA9PT0gJGlzX3Nob3cgKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW0uZmFkZUluKCAnc2xvdycgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRlbGVtLmZhZGVPdXQoICdzbG93JyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgR2xvYmFsIERlYnVnIFZpZXcgUE9QVVAuXG5cdCAqL1xuXHRzdGF0aWMgZ2xvYmFsX2RlYnVnKCkge1xuXHRcdGxldCAkaGFuZGxlID0galF1ZXJ5KCAnYS53cG9uaW9uLWdsb2JhbC1kZWJ1Zy1oYW5kbGUnICksXG5cdFx0XHQkanNvbiAgID0ge307XG5cdFx0aWYoIFdQT25pb24uZGVidWdfaW5mbyA9PT0gbnVsbCAmJiAkaGFuZGxlLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGRlZmluZWRfdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApO1xuXHRcdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRkZWZpbmVkX3ZhcnMgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVmaW5lZF92YXJzICkge1xuXHRcdFx0XHRcdGlmKCAkZGVmaW5lZF92YXJzLmhhc093blByb3BlcnR5KCAka2V5ICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApICkge1xuXHRcdFx0XHRcdFx0JGpzb25bICRkZWZpbmVkX3ZhcnNbICRrZXkgXSBdID0gV1BPbmlvbi53aW5kb3dBcmdzKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0V1BPbmlvbi5kZWJ1Z19pbmZvID0gJGpzb247XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JGhhbmRsZS5vbiggJ2NsaWNrJywgKCAoIGUgKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzd2FsKCB7XG5cdFx0XHRcdHRpdGxlOiBXUE9uaW9uLnR4dCggJ2dsb2JhbF9qc29uX291dHB1dCcsICdHbG9iYWwgV1BPbmlvbiBEZWJ1ZyBEYXRhJyApLFxuXHRcdFx0XHRodG1sOiBqUXVlcnkoICcjd3BvbmlvbmRlYnVnaW5mb3BvcHVwID4gZGl2JyApLFxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFdQT25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0dldCBKU09OIE91dHB1dCcgKSxcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCkgPT4gc3dhbC5lbmFibGVMb2FkaW5nKCksXG5cdFx0XHRcdG9uT3BlbjogKCkgPT4ge1xuXHRcdFx0XHRcdGpRdWVyeSggJyNzd2FsMi1jb250ZW50ICN3cG9uaW9uLWdsb2JhbC1kZWJ1Zy1jb250ZW50JyApLmpzb25WaWV3KCBXUE9uaW9uLmRlYnVnX2luZm8gKTtcblx0XHRcdFx0XHRzd2FsLmRpc2FibGVMb2FkaW5nKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XG5cdFx0XHRcdGlmKCByZXN1bHQudmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN3YWwoIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAnNjAwcHgnLFxuXHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggV1BPbmlvbi5kZWJ1Z19pbmZvICkgKyAnPC90ZXh0YXJlYT4nLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBhbmQgUmV0cml2ZXMgVmFsdWVzIGZyb20gJHdwb25pb24uc2V0dGluZ3Ncblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIG9wdGlvbiggJGtleSwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRsZXQgJGFyZ3MgPSBXUE9uaW9uLnNldHRpbmdzX2FyZ3M7XG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSB7XG5cdFx0XHRyZXR1cm4gJGFyZ3NbICRrZXkgXTtcblx0XHR9XG5cdFx0cmV0dXJuICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBXUE9uaW9uIERlYnVnIGlzIGVuYWJsZWQuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzX2RlYnVnKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ2RlYnVnJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdhdGhlciBBbGwgRmllbGQgSlMgQ29kZXMuXG5cdCAqL1xuXHRzdGF0aWMgZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIFdQT25pb24uaXNfZGVidWcoKSAmJiB3aW5kb3cud3Bvbmlvbi5fLmlzTnVsbCggV1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHRsZXQgJHZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKSxcblx0XHRcdFx0JGpzb24gPSB7fSxcblx0XHRcdFx0JHV0eHQgPSBXUE9uaW9uLnR4dCggJ3VubW9kaWZpZWRfZGVidWcnICksXG5cdFx0XHRcdCRtdHh0ID0gV1BPbmlvbi50eHQoICdtb2RpZmllZF9kZWJ1ZycgKTtcblxuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkdmFycyApIHtcblx0XHRcdFx0aWYoICR2YXJzLmhhc093blByb3BlcnR5KCAka2V5ICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICR2YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRsZXQgJGRhdGEgICAgICAgICAgICAgICAgICAgICAgID0gV1BPbmlvbi53aW5kb3dBcmdzKCAkdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXSAgICAgICAgICA9IHt9O1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF1bICR1dHh0IF0gPSAkZGF0YS5kZWJ1Z19pbmZvIHx8ICRkYXRhO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF1bICRtdHh0IF0gPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0V1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvID0gJGpzb247XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBBamF4IFdyYXBwZXIgRm9yIGpRdWVyeS5BamF4KClcblx0ICogQHBhcmFtICRhY3Rpb25cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqIEBwYXJhbSAkb25TdWNjZXNzXG5cdCAqIEBwYXJhbSAkb25FcnJvclxuXHQgKiBAcGFyYW0gJG9uQWx3YXlzXG5cdCAqL1xuXHRzdGF0aWMgYWpheCggJGFjdGlvbiA9ICcnLCAkZGF0YSA9IHt9LCAkb25TdWNjZXNzID0gZmFsc2UsICRvbkVycm9yID0gZmFsc2UsICRvbkFsd2F5cyA9IGZhbHNlICkge1xuXHRcdGxldCAkZGVmYXVsdHMgPSB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdHVybDogV1BPbmlvbi5vcHRpb24oICdhamF4X3VybCcgKSxcblx0XHRcdG9uU3VjY2VzczogZmFsc2UsXG5cdFx0XHRvbkFsd2F5czogZmFsc2UsXG5cdFx0XHRvbkVycm9yOiBmYWxzZSxcblx0XHR9O1xuXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRhY3Rpb24gKSApIHtcblx0XHRcdCRkYXRhID0gJGFjdGlvbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGRlZmF1bHRzLnVybCArPSAnJicgKyBXUE9uaW9uLm9wdGlvbiggJ2FqYXhfYWN0aW9uX2tleScgKSArICc9JyArICRhY3Rpb247XG5cdFx0fVxuXG5cdFx0JGRlZmF1bHRzICA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICRkZWZhdWx0cywgJGRhdGEgKTtcblx0XHQkb25TdWNjZXNzID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkb25TdWNjZXNzICkgfHwgZmFsc2UgPT09ICRvblN1Y2Nlc3MgKSA/ICRkZWZhdWx0cy5vblN1Y2Nlc3MgOiAkb25TdWNjZXNzO1xuXHRcdCRvbkFsd2F5cyAgPSAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRvbkVycm9yICkgfHwgZmFsc2UgPT09ICRvbkVycm9yICkgPyAkZGVmYXVsdHMub25BbHdheXMgOiAkb25BbHdheXM7XG5cdFx0JG9uRXJyb3IgICA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG9uQWx3YXlzICkgfHwgZmFsc2UgPT09ICRvbkFsd2F5cyApID8gJGRlZmF1bHRzLm9uRXJyb3IgOiAkb25FcnJvcjtcblx0XHRsZXQgJGFqYXggID0galF1ZXJ5LmFqYXgoICRkZWZhdWx0cyApO1xuXG5cblx0XHRpZiggJG9uU3VjY2VzcyApIHtcblx0XHRcdCRhamF4LmRvbmUoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvblN1Y2Nlc3MsIHJlcyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRvbkVycm9yICkge1xuXHRcdFx0JGFqYXguZmFpbCggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uRXJyb3IsIHJlcyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRvbkFsd2F5cyApIHtcblx0XHRcdCRhamF4LmFsd2F5cyggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uQWx3YXlzLCByZXMgKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGFqYXg7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBXUE9uaW9uIFRlbXBsYXRlIGZvciB1bmRlcnNjb3JlLlxuXHQgKiBAcGFyYW0gJGlkXG5cdCAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSk6ICp9XG5cdCAqL1xuXHRzdGF0aWMgdGVtcGxhdGUoICRpZCApIHtcblx0XHRsZXQgY29tcGlsZWQsXG5cdFx0XHRvcHRpb25zID0ge1xuXHRcdFx0XHRldmFsdWF0ZTogLzwjKFtcXHNcXFNdKz8pIz4vZyxcblx0XHRcdFx0aW50ZXJwb2xhdGU6IC9cXHtcXHtcXHsoW1xcc1xcU10rPylcXH1cXH1cXH0vZyxcblx0XHRcdFx0ZXNjYXBlOiAvXFx7XFx7KFteXFx9XSs/KVxcfVxcfSg/IVxcfSkvZyxcblx0XHRcdFx0dmFyaWFibGU6ICdkYXRhJ1xuXHRcdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiggZGF0YSApIHtcblx0XHRcdGNvbXBpbGVkID0gY29tcGlsZWQgfHwgd2luZG93Lndwb25pb24uXy50ZW1wbGF0ZSggJGlkLCBvcHRpb25zICk7XG5cdFx0XHRyZXR1cm4gY29tcGlsZWQoIGRhdGEgKTtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgV1BvbmlvbiBTZXR0aW5ncyAvIE1ldGFib3ggU3VibWVudSBJbmRpY2F0b3IuXG5cdCAqIEBwYXJhbSAkZWxlbXNcblx0ICovXG5cdHN0YXRpYyBzdWJtZW51X2luZGljYXRvciggJGVsZW1zICkge1xuXHRcdCRlbGVtcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0ICR0b2dnbGUgICA9IGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnZGF0YS10b2dnbGUtY2xhc3MnICk7XG5cdFx0XHRcdGxldCAkZXhfY2xhc3MgPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2NsYXNzJyApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2NsYXNzJywgJHRvZ2dsZSApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2RhdGEtdG9nZ2xlLWNsYXNzJywgJGV4X2NsYXNzICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG59XG4iLCIvKipcbiAqIFdQT25pb24gRGVidWcgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0LyoqXG5cdCAqIEFkZCBBIERlYnVnIEluZm8gVG8gRGVidWcgQXJyYXkuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkdmFsdWVcblx0ICovXG5cdHN0YXRpYyBhZGQoICRrZXksICR2YWx1ZSApIHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gJHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICR2YWx1ZSwgdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBBIERlYnVnIEluZm8gQmFzZWQgb24gS2V5LlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0KCAka2V5LCAkZGVmYXVsdCA9IGZhbHNlICkge1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblx0XHRyZXR1cm4gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkgPyAkZGVmYXVsdCA6IHRoaXMuZGVidWdfaW5mb1sgJGtleSBdO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2hlbHBlcnMvZGVwZW5kZW5jeSc7XG5cbi8qKlxuICogV1BPbmlvbiBEZXBlbmRlbmN5IENsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAkZWxlbWVudFxuXHQgKiBAcGFyYW0gcGFyYW1cblx0ICogQHBhcmFtICRjb25maWdcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWxlbWVudCA9IHVuZGVmaW5lZCwgcGFyYW0gPSB7fSwgJGNvbmZpZyA9IHt9ICkge1xuXHRcdHRoaXMucGFyYW0gICAgICAgICA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHsgbmVzdGFibGU6IGZhbHNlLCBwYXJlbnQ6IGZhbHNlIH0sIHBhcmFtICk7XG5cdFx0bGV0ICR0aGlzICAgICAgICAgID0gdGhpcztcblx0XHR0aGlzLmJhc2UgICAgICAgICAgPSB7fTtcblx0XHR0aGlzLmJhc2UuJGVsICAgICAgPSAkZWxlbWVudDtcblx0XHR0aGlzLmJhc2UuaW5pdCAgICAgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmJhc2UucnVsZXNldCA9IGpRdWVyeS5kZXBzLmNyZWF0ZVJ1bGVzZXQoKTtcblx0XHRcdHRoaXMuYmFzZS5kZXBSb290KCk7XG5cdFx0XHRsZXQgJF9kZXBzX2Z1bmN0aW9ucyA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHtcblx0XHRcdFx0c2hvdzogKCBlbCApID0+IHtcblx0XHRcdFx0XHRlbC5zbGlkZURvd24oKTtcblx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhpZGU6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0ZWwuc2xpZGVVcCgpO1xuXHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkuYWRkQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0bG9nOiBmYWxzZSxcblx0XHRcdFx0Y2hlY2tUYXJnZXRzOiBmYWxzZSxcblx0XHRcdH0sICRjb25maWcgKTtcblxuXHRcdFx0alF1ZXJ5LmRlcHMuZW5hYmxlKCB0aGlzLmJhc2UuJGVsLCB0aGlzLmJhc2UucnVsZXNldCwgJF9kZXBzX2Z1bmN0aW9ucyApO1xuXHRcdH07XG5cdFx0dGhpcy5iYXNlLmluc3RhbmNlID0gW107XG5cdFx0dGhpcy5iYXNlLmRlcFJvb3QgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLiRlbC5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJy53cG9uaW9uLWhhcy1kZXBlbmRlbmN5JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlzLmJhc2UuaW5zdGFuY2UgPSBuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgJHRoaXMuYmFzZS5ydWxlc2V0LCB7XG5cdFx0XHRcdFx0XHRuZXN0YWJsZTogJHRoaXMucGFyYW0ubmVzdGFibGUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6ICggdHJ1ZSA9PT0gJHRoaXMucGFyYW0ubmVzdGFibGUgKSA/ICR0aGlzLmJhc2UuJGVsIDogJHRoaXMucGFyYW0ucGFyZW50LFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH07XG5cdFx0dGhpcy5iYXNlLmluaXQoKTtcblx0fVxufVxuIiwiLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuXG5jb25zdCBpc19qcXVlcnkgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5pc19qcXVlcnk7XG5cbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICR3cG9uaW9uX2RlYnVnIGZyb20gJy4vZGVidWcnO1xuaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4vbW9kdWxlJztcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRpb24gZnJvbSAnLi4vY29yZS92YWxpZGF0aW9uJztcblxuLyoqXG4gKiBXUE9uaW9uIEZpZWxkIEFic3RyYWN0IENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0LyoqXG5cdCAqIFdQT25pb24gRmllbGQgQ2xhc3MgQ29uc3RydWN0b3IuXG5cdCAqIEBwYXJhbSAkc2VsZWN0b3Jcblx0ICogQHBhcmFtICRjb250ZXh0XG5cdCAqIEBwYXJhbSAkY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyA9IG51bGwgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQgKTtcblx0XHR0aGlzLnNldF9hcmdzKCBmYWxzZSApO1xuXHRcdHRoaXMuZmllbGRfZGVidWcoKTtcblx0XHR0aGlzLmNvbmZpZyA9ICRjb25maWc7XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5qc19lcnJvcl9oYW5kbGVyKCk7XG5cdFx0dGhpcy5qc192YWxpZGF0b3IoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiBVc2VkIFRvIEluaXQgRmllbGQuXG5cdCAqIFRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGV4dGVuZGluZyBjbGFzcy5cblx0ICovXG5cdGluaXQoKSB7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBqYXZhc2NyaXB0IGVycm9yIHBsYWNlbWVudC5cblx0ICogQHBhcmFtIGVyclxuXHQgKi9cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIEFuIFRyaWdnZXIgSG9vayBUbyBIYW5kbGUgSlMgRXJyb3IgUGxhY2VtZW50XG5cdCAqIEB1c2UgY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIGVsZW1lbnRcblx0ICovXG5cdGpzX2Vycm9yX2hhbmRsZXIoIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudC5vbiggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgJz4gLndwb25pb24tZmllbGRzZXQgOmlucHV0JywgKCBlLCBkYXRhICkgPT4gdGhpcy5qc19lcnJvciggZGF0YSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHZhbGlkYXRpb24gaXMgcmVxdWlyZWQgZm9yIGN1cnJlbnQgZmllbGQuXG5cdCAqL1xuXHRqc192YWxpZGF0b3IoKSB7XG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApICkge1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApIHtcblx0XHRcdFx0dGhpcy5tYXliZV9qc192YWxpZGF0ZV9lbGVtKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBjdXJyZW50IHBhZ2UgaGFzIGZvcm0gYW5kIGVuYWJsZSB2YWxpZGF0aW9ucy5cblx0ICogQHBhcmFtICRhcmdzXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0bWF5YmVfanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCBXUE9uaW9uX1ZhbGlkYXRpb24uZ2V0X2Zvcm0oKSApIHtcblx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgUnVsZSBUbyBFYWNoIGFuZCBldmVyeSBpbnB1dCB0byB2YWxpZGF0ZSBKUyBMaWIuXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnOmlucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5ydWxlcyggJ2FkZCcsICRhcmdzICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgZnVuY3Rpb24gdXNlZCBieSBlYWNoIGFuZCBldmVyeSBmaWVsZC5cblx0ICogVGhpcyBmdW5jdGlvbiB3aWxsIGFsc28gY29udmVydCBTaW1wbGUgSlMgZnVuY3Rpb24gY29kZSBpbnRvIGNhbGxhYmxlIEpTIGNvZGUgJiByZXR1cm5zIGl0XG5cdCAqIFBsdXMgaXQgYWxzbyBzdG9yZSB0aGUgdmFsdWUgaW4gZGVidWcgYXJyYXkgaWYgZGVidWcgZW5hYmxlZC5cblx0ICogQHBhcmFtICRhcmdcblx0ICogQHBhcmFtICRrZXlcblx0ICogQHJldHVybnMgeyp8JGRhdGF9XG5cdCAqL1xuXHRoYW5kbGVfYXJncyggJGFyZywgJGtleSA9IGZhbHNlICkge1xuXHRcdGxldCAkYXJncyAgID0gJHdwb25pb24uanNfZnVuYyggJGFyZyApLFxuXHRcdFx0JGV4aXN0cyA9ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHQkZXhpc3RzICAgICA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHsgJ1BIUCBBcmdzJzoge30sICdKUyBBcmdzJzoge30gfSwgJGV4aXN0cyApO1xuXG5cdFx0aWYoIGZhbHNlID09PSAka2V5ICkge1xuXHRcdFx0JGV4aXN0c1sgJ0pTIEFyZ3MnIF0gPSAkYXJncztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGV4aXN0c1sgJ0pTIEFyZ3MnIF1bICRrZXkgXSA9ICRhcmdzO1xuXHRcdH1cblx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgJGV4aXN0cyApO1xuXHRcdHJldHVybiAkYXJncztcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEZpZWxkIERlYnVnIFBPUFVQLlxuXHQgKi9cblx0ZmllbGRfZGVidWcoKSB7XG5cdFx0aWYoIGZhbHNlICE9PSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCAkaW5mbyA9IHRoaXMub3B0aW9uKCAnZGVidWdfaW5mbycgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGluZm8gKSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc0VtcHR5KCAkaW5mbyApICkge1xuXHRcdFx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiAkaW5mbywgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0ICRmb3VuZCA9IGZhbHNlO1xuXHRcdGlmKCAhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdGxldCAkSUQgICA9IHRoaXMuaWQoKSxcblx0XHRcdFx0JGVsZW0gPSBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyAkSUQgKyAnXScgKTtcblx0XHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRcdCRmb3VuZCA9ICRlbGVtO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZm91bmQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHNlICE9PSAkZm91bmQgKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKVxuXHRcdFx0XHQgIC50aXBweSgge1xuXHRcdFx0XHRcdCAgY29udGVudDogJHdwb25pb24udHh0KCAnY2xpY2tfdG9fdmlld19kZWJ1Z19pbmZvJywgJ0NsaWNrIFRvIFZpZXcgRmllbGQgRGVidWcgSW5mbycgKSxcblx0XHRcdFx0XHQgIGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdCAgYXJyb3dUeXBlOiAncm91bmQnLFxuXHRcdFx0XHRcdCAgcGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0XHQgIHRoZW1lOiAnbGlnaHQnLFxuXHRcdFx0XHRcdCAgYW5pbWF0aW9uOiAnc2NhbGUnLFxuXHRcdFx0XHRcdCAgYXBwZW5kVG86IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcblx0XHRcdFx0ICB9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGxldCAkZCAgICAgICAgICA9ICR0aGlzLmlkKCkgKyAnZGVidWdJTkZPJyxcblx0XHRcdFx0XHQkbm90aWNlX3R4dCA9ICc8cCBjbGFzcz1cXCd3cG9uaW9uLWZpZWxkLWRlYnVnLW5vdGljZVxcJz4nICsgJHdwb25pb24ub3B0aW9uKCAnZGVidWdfbm90aWNlJyApICsgJzwvcD4nLFxuXHRcdFx0XHRcdCRlbGVtICAgICAgID0galF1ZXJ5KCAnPGRpdiBpZD1cIicgKyAkZCArICdcIiBjbGFzcz1cIndwb25pb24tZmllbGQtZGVidWctcG9wdXBcIiA+PGRpdiBpZD1cIicgKyAkZCArICdcIiA+PC9kaXY+JyArICRub3RpY2VfdHh0ICsgJzwvZGl2PicgKTtcblx0XHRcdFx0bGV0ICRkYXRhICAgICAgID0gJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICk7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRodG1sOiAkZWxlbSxcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogJHdwb25pb24udHh0KCAnZ2V0X2pzb25fb3V0cHV0JywgJ0FzIEpTT04nICksXG5cdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRvbk9wZW46ICgpID0+IGpRdWVyeSggJyNzd2FsMi1jb250ZW50ID4gZGl2ID4gIycgKyAkZCApLmpzb25WaWV3KCAkZGF0YSApXG5cdFx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICkgKSArICc8L3RleHRhcmVhPidcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0IC53cG9uaW9uLWZpZWxkLWRlYnVnLWNvZGUtZ2VuJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGxldCAkc3RyaW5nID0gdGhpcy5vcHRpb24oICdkZWJ1Z19maWVsZF9jb2RlJyApO1xuXHRcdFx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1N0cmluZyggJHN0cmluZyApICkge1xuXHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdGh0bWw6ICRzdHJpbmcsXG5cdFx0XHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0XHRcdGhlaWdodEF1dG86IGZhbHNlLFxuXHRcdFx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogR2F0aGVycyBGaWVsZCBPcHRpb25zIERhdGEgZnJvbSB3aW5kb3cud3BvbmlvbiBhcnJheS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRvcHRpb25zKCkge1xuXHRcdGlmKCB0aGlzLl9hcmdzID09PSBmYWxzZSApIHtcblx0XHRcdHRoaXMuX2FyZ3MgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCB0aGlzLmlkKCkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2FyZ3M7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGEgZ2l2ZW4gb3B0aW9uIGtleSBleGlzdHMgYW5kIGlmIHNvIHRoZW4gaXQgcmV0dXJucyBpdCB2YWx1ZVxuXHQgKiBvciBpdCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlLlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRvcHRpb24oICRrZXkgPSAnJywgJGRlZmF1bHQgPSB7fSApIHtcblx0XHRsZXQgJGFyZ3MgPSB0aGlzLm9wdGlvbnMoKTtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkgPyAkYXJnc1sgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBXUE9uaW9uIEpTIEZpZWxkIElEXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0aWQoKSB7XG5cdFx0cmV0dXJuICR3cG9uaW9uLmZpZWxkSUQoIHRoaXMuZWxlbWVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQncyBNb2R1bGUgU2x1Zy5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRtb2R1bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnbW9kdWxlJywgZmFsc2UgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkJ3MgUGx1Z2luIFNsdWcuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cGx1Z2luX2lkKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbiggJ3BsdWdpbl9pZCcsIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcnMgQW4gQWpheCBBY3Rpb24uXG5cdCAqIEBwYXJhbSAkYWN0aW9uXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKi9cblx0YWpheCggJGFjdGlvbiA9ICcnLCAkZGF0YSA9IHt9ICkge1xuXHRcdGxldCAkYWpheF9rZXkgICAgICAgICA9ICR3cG9uaW9uLm9wdGlvbiggJ2FqYXhfYWN0aW9uX2tleScgKTtcblx0XHRsZXQgJGRlZmF1bHQgICAgICAgICAgPSB7XG5cdFx0XHRwbHVnaW5faWQ6IHRoaXMucGx1Z2luX2lkKCksXG5cdFx0XHRtb2R1bGU6IHRoaXMubW9kdWxlKCksXG5cdFx0fTtcblx0XHQkZGVmYXVsdFsgJGFqYXhfa2V5IF0gPSAkYWN0aW9uO1xuXHRcdCRkYXRhLmRhdGEgICAgICAgICAgICA9ICggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRkYXRhLmRhdGEgKSApID8gd2luZG93Lndwb25pb24uXy5tZXJnZSggJGRlZmF1bHQsICRkYXRhLmRhdGEgKSA6ICRkZWZhdWx0O1xuXG5cdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICRkYXRhICk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdHMgQSBTaW5nbGUgRWxlbWVudC5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0aW5pdF9zaW5nbGVfZmllbGQoICR0eXBlLCAkZWxlbSApIHtcblx0XHR3cG9uaW9uX2luaXRfZmllbGQoICR0eXBlLCAkZWxlbSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIEEgU2luZ2xlIEZpZWxkIFR5cGVcblx0ICogQHVzZXMgaW5pdF9zaW5nbGVfZmllbGQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICovXG5cdGluaXRfZmllbGQoICRlbGVtLCAkdHlwZSApIHtcblx0XHRpZiggIWlzX2pxdWVyeSggJGVsZW0gKSApIHtcblx0XHRcdCRlbGVtID0gdGhpcy5lbGVtZW50LmZpbmQoICRlbGVtICk7XG5cdFx0fVxuXHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0JGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGhpcy5pbml0X3NpbmdsZV9maWVsZCggJHR5cGUsIGpRdWVyeSggdGhpcyApICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbG9hZHMgQWxsIEZpZWxkIFR5cGUgSW5zaWRlIFRoaXMgRmllbGQuXG5cdCAqL1xuXHRyZWxvYWQoKSB7XG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfcmVsb2FkJyApO1xuXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1hY2NvcmRpb24nLCAnYWNjb3JkaW9uJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja2dyb3VuZCcsICdiYWNrZ3JvdW5kJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwJywgJ2JhY2t1cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNoZWNrYm94JywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtcmFkaW8nLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jbG9uZScsICdjbG9uZV9lbGVtZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGFsZXR0ZScsICdjb2xvcl9wYWxldHRlJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGlja2VyJywgJ2NvbG9yX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNlbGVjdCcsICdzZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pY29uX3BpY2tlcicsICdpY29uX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJywgJ2ZvbnRfc2VsZWN0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1ncm91cCcsICdncm91cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHQ6bm90KC53cG9uaW9uLWlucHV0bWFzayknLCAndGV4dCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHRhcmVhJywgJ3RleHRhcmVhJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2Vfc2VsZWN0JywgJ2ltYWdlX3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN3aXRjaGVyJywgJ3N3aXRjaGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJywgJ3dwX2VkaXRvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZpZWxkc2V0JywgJ2ZpZWxkc2V0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1pbnB1dG1hc2tdJywgJ2lucHV0bWFzaycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2xpbmsnLCAnd3BfbGlua3MnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1rZXlfdmFsdWUnLCAna2V5dmFsdWVfcGFpcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWRhdGVfcGlja2VyJywgJ2RhdGVfcGlja2VyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ2FsbGVyeScsICdnYWxsZXJ5JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdXBsb2FkJywgJ3VwbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWltYWdlJywgJ2ltYWdlX3VwbG9hZCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRhYicsICdqcXVlcnlfdGFiJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZ29vZ2xlX21hcHMnLCAnZ29vZ2xlX21hcHMnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdDInLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuY2hvc2VuJywgJ2Nob3NlbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuc2VsZWN0aXplJywgJ3NlbGVjdGl6ZScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNvcnRlcicsICdzb3J0ZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10eXBvZ3JhcGh5JywgJ3R5cG9ncmFwaHknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1vZW1iZWQnLCAnb2VtYmVkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaGVhZGluZycsICdoZWFkaW5nJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3ViaGVhZGluZycsICdzdWJoZWFkaW5nJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29udGVudCcsICdjb250ZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtamFtYm9fY29udGVudCcsICdqYW1ib19jb250ZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtbm90aWNlJywgJ25vdGljZScgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1maWVsZC10b29sdGlwJywgJ3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24taGVscCcsICd0b29sdGlwJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLXdyYXAtdG9vbHRpcCcsICd0b29sdGlwJyApO1xuXG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBBcmdzIERhdGEuXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKi9cblx0c2V0X2FyZ3MoICRhcmdzICkge1xuXHRcdHRoaXMuX2FyZ3MgPSAkYXJncztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkIFBhcmVudCBCeSBkYXRhLXdwb25pb24tanNpZCBhdHRyaWJ1dGUuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7KnxqUXVlcnl8SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRnZXRfZmllbGRfcGFyZW50X2J5X2lkKCAkZWxlbSApIHtcblx0XHRsZXQgJElEID0gJHdwb25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRyZXR1cm4galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkSUQgKyAnXCJdJyApO1xuXHR9XG59XG4iLCIvKipcbiAqIFdQT25pb24gTW9kdWxlIEpTIENsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0LyoqXG5cdCAqIFdQT25pb24gTW9kdWxlIEpTIENsYXNzIENvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udGV4dFxuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQgKSB7XG5cdFx0aWYoICEkc2VsZWN0b3IualF1ZXJ5ICkge1xuXHRcdFx0JHNlbGVjdG9yID0galF1ZXJ5KCAkc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0dGhpcy5zZXRfZWxlbWVudCggJHNlbGVjdG9yICk7XG5cdFx0dGhpcy5zZXRfY29udHh0KCAkY29udGV4dCApO1xuXHRcdHRoaXMubW9kdWxlX2luaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBNb2R1bGUgSW5pdCBGdW5jdGlvbi5cblx0ICovXG5cdG1vZHVsZV9pbml0KCkge1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgRWxlbWVudCBBcmdzLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdHNldF9lbGVtZW50KCAkZWxlbSApIHtcblx0XHRpZiggISRlbGVtLmpRdWVyeSApIHtcblx0XHRcdCRlbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdH1cblx0XHR0aGlzLmVsZW0gPSAkZWxlbTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIENvbnR4dCBBcmdzLlxuXHQgKiBAcGFyYW0gJGNvbnR4dFxuXHQgKi9cblx0c2V0X2NvbnR4dCggJGNvbnR4dCApIHtcblx0XHR0aGlzLmNvbnRleHQgPSAkY29udHh0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgSG9vayBDbGFzcy5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQgaG9vaygpIHtcblx0XHRyZXR1cm4gd2luZG93Lndwb25pb24uaG9va3M7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBFbGVtZW50IFZhcmlhYmxlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIENvbnR4dCBWYXJpYWJsZS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQgY29udHh0KCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHQ7XG5cdH1cbn1cbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIFdQT25pb24gRmllbGQgVmFsaWRhdG9yIEhlbHBlciBDbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uX1ZhbGlkYXRvciB7XG5cdC8qKlxuXHQgKiBIZWxwZXIgQ2xhc3MgRm9yIFdQT25pb24gSlMgRmllbGQgVmFsaWRhdGlvbi5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBmb3JtID0gZmFsc2UgKSB7XG5cdFx0dGhpcy5mb3JtICA9ICggZmFsc2UgPT09IGZvcm0gKSA/IFdQT25pb25fVmFsaWRhdG9yLmdldF9mb3JtKCkgOiBmb3JtO1xuXHRcdHRoaXMucnVsZXMgPSB7XG5cdFx0XHRpbnZhbGlkSGFuZGxlcjogKCkgPT4ge1xuXHRcdFx0XHRqUXVlcnkoICcjcHVibGlzaCcgKS5yZW1vdmVDbGFzcyggJ2J1dHRvbi1wcmltYXJ5LWRpc2FibGVkJyApO1xuXHRcdFx0XHRqUXVlcnkoICcjYWpheC1sb2FkaW5nJyApLmF0dHIoICdzdHlsZScsICcnICk7XG5cdFx0XHRcdHRoaXMuZm9ybS5zaWJsaW5ncyggJyNtZXNzYWdlJyApLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmZvcm0uYmVmb3JlKCAnPGRpdiBpZD1cIm1lc3NhZ2VcIiBjbGFzcz1cImVycm9yXCI+PHA+JyArICR3cG9uaW9uLnR4dCggJ3ZhbGlkYXRpb25fc3VtbWFyeScgKSArICc8L3A+PC9kaXY+JyApO1xuXHRcdFx0fSxcblx0XHRcdGlnbm9yZTogJy53cG9uaW9uLWRlcGVuZGVudCwud3Bvbmlvbi12YWxpZGF0aW9uLWlnbm9yZScsXG5cdFx0XHRlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oIGVycm9yLCBlbGVtZW50ICkge1xuXHRcdFx0XHRlbGVtZW50LnRyaWdnZXIoICd3cG9uaW9uX2pzX3ZhbGlkYXRpb25fbWVzc2FnZScsIHsgZXJyb3IsIGVsZW1lbnQgfSApO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yQ2xhc3M6ICd3cG9uaW9uLWVycm9yJyxcblx0XHRcdGVycm9yRWxlbWVudDogJ3AnXG5cdFx0fTtcblxuXHRcdGlmKCB0aGlzLmZvcm0gKSB7XG5cdFx0XHR0aGlzLmZvcm0udmFsaWRhdGUoIHRoaXMucnVsZXMgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRmluZHMgJiBSZXR1cm5zIGZvcm0gRGF0YS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0X2Zvcm0oKSB7XG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICk7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICk7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jdXBkYXRlLW5hdi1tZW51JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSN1cGRhdGUtbmF2LW1lbnUnICk7XG5cdFx0fVxuXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jcG9zdCcgKS5sZW5ndGggPiAwICYmIGpRdWVyeSggJ2lucHV0I3Bvc3RfSUQnICkubGVuZ3RoID4gMCAmJiBqUXVlcnkoICdpbnB1dCNvcmlnaW5hbF9wdWJsaXNoJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSNwb3N0JyApO1xuXHRcdH1cblxuXHRcdHJldHVybiAoIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApLmxlbmd0aCA+IDAgKSA/IGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApIDogZmFsc2U7XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmFjY29yZGlvbigge1xuXHRcdFx0XHRoZWFkZXI6ICc+IC53cG9uaW9uLWFjY29yZGlvbi10aXRsZScsXG5cdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRhbmltYXRlOiAxNTAsXG5cdFx0XHRcdGhlaWdodFN0eWxlOiAnY29udGVudCcsXG5cdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0J2hlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LXJpZ2h0Jyxcblx0XHRcdFx0XHQnYWN0aXZlSGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctZG93bidcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHRpZiggIWpRdWVyeSggdGhpcyApLmhhc0NsYXNzKCAnaXNfb3BlbicgKSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYWNjb3JkaW9uKCAnb3B0aW9uJywgJ2FjdGl2ZScsIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYWNjb3JkaW9uJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdiYWNrZ3JvdW5kJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuXG4vKiBnbG9iYWwgdGlwcHk6dHJ1ZSAqL1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMudG9vbHRpcCgpO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dFt0eXBlPVwiZmlsZVwiXScgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHtcblx0XHRcdHRoaXMuaGFuZGxlX2JhY2t1cF9pbXBvcnQoIGUuY3VycmVudFRhcmdldCApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnYS5kb3dubG9hZF9iYWNrdXAnICkub24oICdjbGljaycsICgpID0+IHtcblx0XHRcdGxldCAkZmlsZSA9IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICk7XG5cdFx0XHQkZmlsZSAgICAgPSAkZmlsZSArICctJyArIHRoaXMubW9kdWxlKCk7XG5cdFx0XHRsZXQgZGF0ZSAgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0bGV0IHN0ciAgID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgKCBkYXRlLmdldE1vbnRoKCkgKyAxICkgKyAnLScgKyBkYXRlLmdldERhdGUoKSArICctJyArIGRhdGUuZ2V0SG91cnMoKSArIGRhdGUuZ2V0TWludXRlcygpICsgZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdFx0XHQkZmlsZSAgICAgPSAkZmlsZSArICctJyArIHN0cjtcblx0XHRcdHRoaXMuZm9yY2VfZG93bmxvYWQoIEpTT04ucGFyc2UoIHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF90ZXh0YXJlYSB0ZXh0YXJlYScgKS5odG1sKCkgKSwgJGZpbGUgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2EubmV3X2JhY2t1cCAnICkub24oICdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xuXHRcdFx0dGhpcy5hamF4KCAnbmV3LW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcblx0XHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzJyApLmh0bWwoIGUuZGF0YSApO1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvbkFsd2F5czogKCkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcuZGVsZXRlX2JhY2t1cCcsICggZSApID0+IHtcblx0XHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xuXHRcdFx0bGV0ICRpbnMgPSBqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5kZWxldGVfYmFja3VwJyApLnRpcHB5X2dldCgpO1xuXHRcdFx0aWYoICRpbnMuaW5zdGFuY2VzWyAwIF0gKSB7XG5cdFx0XHRcdCRpbnMuaW5zdGFuY2VzWyAwIF0uZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5hamF4KCAnZGVsZXRlLW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcblx0XHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcblx0XHRcdFx0XHRiYWNrdXBfaWQ6IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkuYXR0ciggJ2RhdGEtYmFja3VwaWQnICksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoIHRydWUgKTtcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cycgKS5odG1sKCBlLmRhdGEgKTtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLnJlc3RvcmVfYmFja3VwJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2JsdXInLCAnLnJlc3RvcmVfdGV4dGFyZWEgdGV4dGFyZWEnLCAoIGUgKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLnJlc3RvcmVfYmFja3VwKCBKU09OLnBhcnNlKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpICkgKTtcblx0XHRcdFx0alF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoICcnICkuaHRtbCggJycgKTtcblx0XHRcdH0gY2F0Y2goIGVycm9yICkge1xuXHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIHRoaXMub3B0aW9uKCAnaW52YWxpZF9mb3JtYXQnICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGVzIFN3YWwgRXJyb3IgTXNnLlxuXHQgKiBAcGFyYW0gbXNnXG5cdCAqL1xuXHRzd2FsX2Vycm9yKCBtc2cgKSB7XG5cdFx0c3dhbCgge1xuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdHRpdGxlOiBtc2dcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBUb29sVGlwIGluc3RhbmNlLlxuXHQgKiBAcGFyYW0gcmVtb3ZlXG5cdCAqL1xuXHR0b29sdGlwKCByZW1vdmUgPSBmYWxzZSApIHtcblx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXHRcdGlmKCB0cnVlID09PSByZW1vdmUgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMgbGknICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCAkZWxlbSA9IGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGEnIClbIDAgXTtcblx0XHRcdFx0JGVsZW0uX3RpcHB5LmRlc3Ryb3koKTtcblx0XHRcdH0gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzIGxpJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkdGhpcy5zaG93X3Rvb2x0aXAoIGpRdWVyeSggdGhpcyApLmZpbmQoICc+YScgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBCbG9ja3MgQSBGb3JtXG5cdCAqL1xuXHRibG9ja19mb3JtKCkge1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLmF0dHIoICdkaXNhYmxlZCcsICdkaXNhYmxlZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVbmJsb2NrcyBhIGZvcm1cblx0ICovXG5cdHVuYmxvY2tfZm9ybSgpIHtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkuZmluZCggJ2J1dHRvbicgKS5yZW1vdmVBdHRyKCAnZGlzYWJsZWQnICk7XG5cdH1cblxuXHQvKipcblx0ICogRm9yY2VzIERvd25sb2FkIEV4cG9ydCBEYXRhLlxuXHQgKiBAcGFyYW0gZXhwb3J0T2JqXG5cdCAqIEBwYXJhbSBleHBvcnROYW1lXG5cdCAqL1xuXHRmb3JjZV9kb3dubG9hZCggZXhwb3J0T2JqLCBleHBvcnROYW1lICkge1xuXHRcdGxldCBkYXRhU3RyICAgICAgICAgICAgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeSggZXhwb3J0T2JqICkgKTtcblx0XHRsZXQgZG93bmxvYWRBbmNob3JOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2EnICk7XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnNldEF0dHJpYnV0ZSggJ2hyZWYnLCBkYXRhU3RyICk7XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnNldEF0dHJpYnV0ZSggJ2Rvd25sb2FkJywgZXhwb3J0TmFtZSArICcuanNvbicgKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkb3dubG9hZEFuY2hvck5vZGUgKTsgLy8gcmVxdWlyZWQgZm9yIGZpcmVmb3hcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuY2xpY2soKTtcblx0XHRkb3dubG9hZEFuY2hvck5vZGUucmVtb3ZlKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVzdG9yZXMgQmFja3VwIERhdGEuXG5cdCAqIEBwYXJhbSBiYWNrdXBfaWRcblx0ICovXG5cdHJlc3RvcmVfYmFja3VwKCBiYWNrdXBfaWQgKSB7XG5cdFx0dGhpcy5ibG9ja19mb3JtKCk7XG5cdFx0dGhpcy5hamF4KCAncmVzdG9yZS1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcblx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXG5cdFx0XHRcdGJhY2t1cF9pZDogYmFja3VwX2lkLFxuXHRcdFx0fSxcblx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xuXHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdHRpdGxlOiBlLmRhdGEsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbkFsd2F5czogKCkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBCYWNrdXAgSW1wb3J0IEZpbGUgYW5kIHJlc3RvcmVzIGl0LlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGhhbmRsZV9iYWNrdXBfaW1wb3J0KCAkZWxlbSApIHtcblx0XHRpZiggJGVsZW0uZmlsZXMgJiYgJGVsZW0uZmlsZXNbIDAgXSApIHtcblx0XHRcdGxldCAkZmlsZSA9ICRlbGVtLmZpbGVzWyAwIF07XG5cblx0XHRcdGlmKCAkZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vanNvbicgKSB7XG5cdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggdGhpcy5vcHRpb24oICdpbnZhbGlkX2Zvcm1hdCcgKSApO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRsZXQgcmVhZGVyICAgID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9ICggZSApID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlc3RvcmVfYmFja3VwKCBKU09OLnBhcnNlKCBlLnRhcmdldC5yZXN1bHQgKSApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dCggJGZpbGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2hvdydzIFRvb2xUaXBcblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRzaG93X3Rvb2x0aXAoICRlbGVtICkge1xuXHRcdGxldCAkYmFja3VwaWQgPSAkZWxlbS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKTtcblx0XHRsZXQgJGFwcGVuZFRPID0gdGhpcy5lbGVtZW50WyAwIF07XG5cdFx0dGlwcHkoICRlbGVtWyAwIF0sIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0YXBwZW5kVG86ICRhcHBlbmRUTyxcblx0XHRcdGFycm93VHlwZTogJ3JvdW5kJyxcblx0XHRcdGNvbnRlbnQ6ICc8YnV0dG9uIGRhdGEtYmFja3VwaWQ9XCInICsgJGJhY2t1cGlkICsgJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlc3RvcmVfYmFja3VwIGJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5IGJ1dHRvbi1zbWFsbFwiPjxpIGNsYXNzPVwiZGFzaGljb25zLWltYWdlLXJvdGF0ZSBkYXNoaWNvbnNcIj48L2k+IDwvYnV0dG9uPiB8IDxidXR0b24gZGF0YS1iYWNrdXBpZD1cIicgKyAkYmFja3VwaWQgKyAnXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlX2JhY2t1cCBidXR0b24gYnV0dG9uLXNlY29uZGFyeSBidXR0b24tc21hbGxcIj48aSBjbGFzcz1cImRhc2hpY29ucy10cmFzaCBkYXNoaWNvbnNcIj48L2k+IDwvYnV0dG9uPicsXG5cdFx0XHRpbnRlcmFjdGl2ZTogdHJ1ZSxcblx0XHRcdHRoZW1lOiAndHJhbnNsdWNlbnQnLFxuXHRcdFx0b25TaG93bjogKCkgPT4ge1xuXHRcdFx0XHRqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5kZWxldGVfYmFja3VwJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0YXJyb3dUeXBlOiAnc2tpbm55Jyxcblx0XHRcdFx0XHRhcHBlbmRUbzogJGFwcGVuZFRPLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ2RlbGV0ZScgKSxcblx0XHRcdFx0XHR0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG5cdFx0XHRcdFx0aW50ZXJhY3RpdmU6IGZhbHNlLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5yZXN0b3JlX2JhY2t1cCcgKS50aXBweSgge1xuXHRcdFx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdGFycm93VHlwZTogJ3NraW5ueScsXG5cdFx0XHRcdFx0YXBwZW5kVG86ICRhcHBlbmRUTyxcblx0XHRcdFx0XHRjb250ZW50OiAkd3Bvbmlvbi50eHQoICdyZXN0b3JlJyApLFxuXHRcdFx0XHRcdHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcblx0XHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEV4dHJhIFZhbHVlLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldF9leHRyYV92YWx1ZSgpIHtcblx0XHRpZiggalF1ZXJ5KCAnZm9ybSNwb3N0IGlucHV0I3Bvc3RfSUQnICkubGVuZ3RoID09PSAxICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jcG9zdCBpbnB1dCNwb3N0X0lEJyApLnZhbCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdiYWNrdXAnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkY3VzdG9tX2lucHV0ID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHRsZXQgJHJhZGlvcyAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1yYWRpb10nICk7XG5cdFx0XHRsZXQgJGNoZWNrYm94ICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1jaGVja2JveF0nICk7XG5cblx0XHRcdCRjdXN0b21faW5wdXQuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLW5hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnbmFtZScgKSApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblx0XHRcdH0gKTtcblxuXG5cdFx0XHQkcmFkaW9zLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdFx0aWYoIGpRdWVyeSggZSApLmlzKCAnOmNoZWNrZWQnICkgKSB7XG5cdFx0XHRcdFx0aWYoIGpRdWVyeSggZSApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCRjdXN0b21faW5wdXQucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHRcdFx0XHRsZXQgJGkgPSBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0XHRcdFx0JGkuYXR0ciggJ25hbWUnLCAkaS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRyYWRpb3Mub24oICdjbGljaycsICggZSApID0+IHtcblx0XHRcdFx0aWYoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdCRjdXN0b21faW5wdXQucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHRcdFx0bGV0ICRpID0galF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0XHRcdCRpLmF0dHIoICduYW1lJywgJGkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRjaGVja2JveC5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIGUgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblx0XHRcdFx0XHRcdGxldCAkaSA9IGpRdWVyeSggZSApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHRcdFx0XHQkaS5hdHRyKCAnbmFtZScsICRpLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0JGNoZWNrYm94Lm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnJlbW92ZUF0dHIoICduYW1lJyApO1xuXHRcdFx0XHRcdGxldCAkaSA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdFx0XHQkaS5hdHRyKCAnbmFtZScsICRpLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NoZWNrYm94X3JhZGlvJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuY2hvc2VuKCB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ2Nob3NlbicsIHt9ICkgKSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjaG9zZW4nLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuLyogZ2xvYmFsIHdwb25pb25fZmllbGQ6dHJ1ZSAqL1xuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyAgICAgICAgPSB0aGlzLmhhbmRsZV9hcmdzKCB0aGlzLm9wdGlvbiggJ2Nsb25lJywge30gKSApO1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkY2xvbmVfd3JhcCA9ICRlbGVtLmZpbmQoICdkaXYud3Bvbmlvbi1jbG9uZS13cmFwJyApLFxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1hZGRdJyApLFxuXHRcdFx0Ly8kcmVtb3ZlX2J0biA9ICRjbG9uZV93cmFwLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLXJlbW92ZV0nICksXG5cdFx0XHQkbGltaXQgICAgICA9ICggJGFyZy5saW1pdCAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLmxpbWl0IDogZmFsc2UsXG5cdFx0XHQvLyRpc190b2FzdCAgID0gKCAkYXJnLnRvYXN0X2Vycm9yICE9PSB1bmRlZmluZWQgKSA/ICRhcmcudG9hc3RfZXJyb3IgOiB0cnVlLFxuXHRcdFx0JGVyb3JfbXNnICAgPSAkYXJnLmVycm9yX21zZyxcblx0XHRcdCRzb3J0ICAgICAgID0gKCAkYXJnLnNvcnQgIT09IGZhbHNlICkgPyB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tZmllbGQtY2xvbmUnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1maWVsZC1jbG9uZS1zb3J0ZXInLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tY2xvbmVyLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6ICggZXZlbnQsIHVpICkgPT4gdWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApLFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcblx0XHRcdFx0XHQkZWxlbS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHRcdHVpLml0ZW0ucmVtb3ZlQXR0ciggJ3N0eWxlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSA6IGZhbHNlO1xuXG5cdFx0JGNsb25lX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZF9idG4sXG5cdFx0XHRsaW1pdDogJGxpbWl0LFxuXHRcdFx0Y2xvbmVfZWxlbTogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1jbG9uZS1hY3Rpb24gPiAud3Bvbmlvbi1yZW1vdmUnLFxuXHRcdFx0dGVtcGxhdGU6ICR0aGlzLm9wdGlvbiggJ2Nsb25lX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZSApID0+IHtcblx0XHRcdFx0JGVsZW0udHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0d3Bvbmlvbl9maWVsZCggJGUuZmluZCggJz4gZGl2Lndwb25pb24tZmllbGQtY2xvbmU6bGFzdC1jaGlsZCcgKSApLnJlbG9hZCgpO1xuXHRcdFx0fSxcblx0XHRcdG9uUmVtb3ZlQWZ0ZXI6ICgpID0+ICRlbGVtLnRyaWdnZXIoICdjaGFuZ2UnICksXG5cdFx0XHRzb3J0YWJsZTogJHNvcnQsXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKCAkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHQkYWRkX2J0bi5wYXJlbnQoKS5wcmVwZW5kKCBqUXVlcnkoICRlcm9yX21zZyApLmhpZGUoKSApO1xuXHRcdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fbm90aWNlKCAkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0LCBkaXYubm90aWNlJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzaG93X2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLnNob3csXG5cdFx0XHRoaWRlX2FuaW1hdGlvbjogJGFyZy5hbmltYXRpb25zLmhpZGUsXG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY2xvbmVfZWxlbWVudCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY29sb3JfcGFsZXR0ZScsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkud3BDb2xvclBpY2tlcigpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY29sb3JfcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjb250ZW50JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdzZXR0aW5ncycgKSApLFxuXHRcdFx0JHZpZXc7XG5cblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRzZXR0aW5ncy50aGVtZSApICkge1xuXHRcdFx0JHZpZXcgPSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0XHRkZWxldGUgJHNldHRpbmdzLnRoZW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdmlldyA9ICdkZWZhdWx0Jztcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdC5hcHBlbmQoIGpRdWVyeSggJzxkaXYgY2xhc3M9XCJ3cG9uaW9uLWRhdGVwaWNrZXItJyArICR2aWV3ICsgJ1wiIGlkPVwiJyArIHRoaXMuaWQoKSArICdcIj48L2Rpdj4nICkgKTtcblx0XHR9XG5cblx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWRhdGVwaWNrZXItcmFuZ2UnICkgKSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHRpZiggJHNldHRpbmdzLnBsdWdpbnMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JHNldHRpbmdzLnBsdWdpbnMgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0JHNldHRpbmdzLnBsdWdpbnMucHVzaCggbmV3IHJhbmdlUGx1Z2luKCB7IGlucHV0OiAkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItdG8tZGF0ZV0nIClbIDAgXSB9ICkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci1mcm9tLWRhdGVdJyApLmZsYXRwaWNrciggJHNldHRpbmdzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzZXR0aW5ncy5hcHBlbmRUbyA9IGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpIClbIDAgXTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCcgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2RhdGVfcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZmllbGRzZXQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogUmV0dXJucyBXZWJzYWZlIEZvbnQgRGF0YS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQgd2Vic2FmZSgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fd2Vic2FmZV9mb250cycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEdvb2dsZSBGb250IERhdGEuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGdvb2dsZV9mb250cygpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ2ZvbnRzJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0cyBIVE1MIE9wdGlvbiBUYWcgVXNpbmcgQXJyYXkuXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRidWlsZF9vcHRpb25zKCBkYXRhICkge1xuXHRcdGxldCAkcmV0dXJuID0gJyc7XG5cdFx0Zm9yKCBsZXQgJF9kIGluIGRhdGEgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIGRhdGFbICRfZCBdICkgKSB7XG5cdFx0XHRcdCRyZXR1cm4gKz0gYDxvcHRpb24gdmFsdWU9XCIkeyRfZH1cIj4ke2RhdGFbICRfZCBdfTwvb3B0aW9uPmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHRsZXQgJHZhbCAgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpLFxuXHRcdFx0XHQkaHRtbCA9IG51bGw7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy53ZWJzYWZlLmZvbnRzIFsgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLndlYnNhZmUudmFyaWFudHMgKTtcblx0XHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKTtcblx0XHRcdH1cblx0XHRcdGxldCAkdmFyaWFudCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS5odG1sKCAkaHRtbCApO1xuXG5cdFx0XHRpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdjaG9zZW4nICkgKSB7XG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaG9zZW46dXBkYXRlZCcgKTtcblx0XHRcdH0gZWxzZSBpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdzZWxlY3QyJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ZvbnRfc2VsZWN0b3InLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRodG1sX3RlbXAgPSAkdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0JGlucHV0ICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldycgKSxcblx0XHRcdHdwX21lZGlhX2ZyYW1lLFxuXHRcdFx0JGFkZCAgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktYWRkXScgKSxcblx0XHRcdCRlZGl0ICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWVkaXRdJyApLFxuXHRcdFx0JGNsZWFyICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktY2xlYXJdJyApLFxuXHRcdFx0JG1hbmFnZSAgICA9IGZ1bmN0aW9uKCAkdHlwZSApIHtcblx0XHRcdFx0bGV0IGlkcyAgID0gJGlucHV0LnZhbCgpLFxuXHRcdFx0XHRcdHdoYXQgID0gKCAkdHlwZSA9PT0gJ2VkaXQnICkgPyAnZWRpdCcgOiAnYWRkJyxcblx0XHRcdFx0XHRzdGF0ZSA9ICggd2hhdCA9PT0gJ2FkZCcgJiYgIWlkcy5sZW5ndGggKSA/ICdnYWxsZXJ5JyA6ICdnYWxsZXJ5LWVkaXQnO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXG5cdFx0XHRcdGlmKCBzdGF0ZSA9PT0gJ2dhbGxlcnknICkge1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcblx0XHRcdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHRcdFx0ZnJhbWU6ICdwb3N0Jyxcblx0XHRcdFx0XHRcdHN0YXRlOiAnZ2FsbGVyeScsXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYS5nYWxsZXJ5LmVkaXQoICdbZ2FsbGVyeSBpZHM9XCInICsgaWRzICsgJ1wiXScgKTtcblx0XHRcdFx0XHRpZiggd2hhdCA9PT0gJ2FkZCcgKSB7XG5cdFx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5zZXRTdGF0ZSggJ2dhbGxlcnktbGlicmFyeScgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3VwZGF0ZScsIGZ1bmN0aW9uKCBzZWxlY3Rpb24gKSB7XG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkSWRzID0gc2VsZWN0aW9uLm1vZGVscy5tYXAoIGZ1bmN0aW9uKCBhdHRhY2htZW50ICkge1xuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSBhdHRhY2htZW50LnRvSlNPTigpO1xuXHRcdFx0XHRcdFx0aWYoIGl0ZW0uc2l6ZXMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgdGh1bWIgPSAoIHR5cGVvZiBpdGVtLnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGl0ZW0uc2l6ZXMudGh1bWJuYWlsLnVybCA6IGl0ZW0udXJsLFxuXHRcdFx0XHRcdFx0XHQkdG1wICA9IGpRdWVyeSggJGh0bWxfdGVtcCApO1xuXHRcdFx0XHRcdFx0JHRtcC5hdHRyKCAnZGF0YS13cG9uaW9uLWltYWdlX2lkJywgaXRlbS5pZCApO1xuXHRcdFx0XHRcdFx0JHRtcC5maW5kKCAnaW1nJyApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgaXRlbS51cmwgKS5hdHRyKCAnc3JjJywgdGh1bWIgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG5cdFx0XHRcdFx0XHQkcHJldmlldy5hcHBlbmQoICR0bXAgKTtcblx0XHRcdFx0XHRcdCR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1oZWxwJywgJ3Rvb2x0aXAnICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5pZDtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0bGV0ICRlO1xuXHRcdFx0XHRcdGZvciggJGUgaW4gc2VsZWN0ZWRJZHMgKSB7XG5cdFx0XHRcdFx0XHRpZiggc2VsZWN0ZWRJZHNbICRlIF0gPT09IGZhbHNlIHx8IHNlbGVjdGVkSWRzWyAkZSBdID09PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIHNlbGVjdGVkSWRzWyAkZSBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkaW5wdXQudmFsKCBzZWxlY3RlZElkcy5qb2luKCAnLCcgKSApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH07XG5cblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdFx0XHQkZWRpdC5oaWRlKCk7XG5cdFx0XHRcdCRjbGVhci5oaWRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZWRpdC5zaG93KCk7XG5cdFx0XHRcdCRjbGVhci5zaG93KCk7XG5cdFx0XHRcdCRhZGQuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdCRhZGQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdhZGQnICkgKTtcblxuXHRcdCRlZGl0Lm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnZWRpdCcgKSApO1xuXG5cdFx0JGNsZWFyLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaS53cG9uaW9uLWltYWdlLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRwYXJlbnQgICA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0XHQkaW1hZ2VfaWQgPSAkcGFyZW50LmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnICksXG5cdFx0XHRcdCR2YWx1ZSAgICA9ICRpbnB1dC52YWwoKS5zcGxpdCggJywnICk7XG5cdFx0XHRqUXVlcnkuZWFjaCggJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdFx0aWYoICR2ID09PSAkaW1hZ2VfaWQgKSB7XG5cdFx0XHRcdFx0JHZhbHVlLnNwbGljZSggJGssIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkaW5wdXQudmFsKCAkdmFsdWUuam9pbiggJywnICkgKTtcblx0XHRcdCRwYXJlbnQuZmFkZU91dCggKCkgPT4gJHBhcmVudC5yZW1vdmUoKSApO1xuXHRcdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0fSApO1xuXG5cdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cblx0XHRpZiggJHByZXZpZXcuaGFzQ2xhc3MoICdnYWxsZXJ5LXNvcnRhYmxlJyApICkge1xuXHRcdFx0JHByZXZpZXcuc29ydGFibGUoIHtcblx0XHRcdFx0aXRlbXM6ICc+IGRpdicsXG5cdFx0XHRcdGN1cnNvcjogJ21vdmUnLFxuXHRcdFx0XHRzY3JvbGxTZW5zaXRpdml0eTogNDAsXG5cdFx0XHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3NvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0aGVscGVyOiAnY2xvbmUnLFxuXHRcdFx0XHRvcGFjaXR5OiAwLjY1LFxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHRsZXQgJGl0ZW0gPSB1aS5pdGVtO1xuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnd2lkdGgnLCAkaXRlbS53aWR0aCgpICk7XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICdoZWlnaHQnLCAkaXRlbS5oZWlnaHQoKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ2FsbGVyeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsIi8qIGdsb2JhbCBnb29nbGU6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRtYXAgICAgICAgICAgICAgID0gdGhpcy5vcHRpb24oICdtYXAnLCB7fSApO1xuXHRcdCRtYXAuZGV0YWlscyAgICAgICAgICA9ICcjZ21hcF9maWVsZHNfJyArIHRoaXMuaWQoKTtcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xuXHRcdGlmKCAneWVzJyA9PT0gdGhpcy5vcHRpb24oICdzaG93X21hcCcgKSApIHtcblx0XHRcdCRtYXAubWFwID0gJyNnbWFwXycgKyB0aGlzLmlkKCk7XG5cdFx0fVxuXG5cdFx0bGV0ICRfaW5zdGFuY2UgPSB0aGlzLmVsZW0uZmluZCggJ2Rpdi5zZWFyY2hib3ggPiBpbnB1dCcgKTtcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcblx0XHQkX2luc3RhbmNlLmJpbmQoICdnZW9jb2RlOmRyYWdnZWQnLCAoIGV2ZW50LCBsYXRMbmcgKSA9PiB7XG5cdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcblx0XHRcdGdlb2NvZGVyLmdlb2NvZGUoIHtcblx0XHRcdFx0J2xvY2F0aW9uJzoge1xuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXG5cdFx0XHRcdFx0bG5nOiBwYXJzZUZsb2F0KCBsYXRMbmcubG5nKCkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0XHRcdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggJ2ZpbGxEZXRhaWxzJywgcmVzdWx0c1sgMCBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ29vZ2xlX21hcHMnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkYWRkICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IGJ1dHRvbltkYXRhLXdwb25pb24tZ3JvdXAtYWRkXScgKSxcblx0XHRcdCRncm91cF93cmFwID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCcgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gJHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHQkZXJyb3JfbXNnICA9ICR0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC13cmFwJyApLCAnYWNjb3JkaW9uJyApO1xuXG5cdFx0JGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXHRcdHRoaXMuYmluZF9ldmVudHNfZm9yX3RpdGxlKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoIHtcblx0XHRcdGFwcGVuZFRvOiAoKSA9PiB0aGlzLmdldF9maWVsZF9wYXJlbnRfYnlfaWQoIHRoaXMuZWxlbWVudCApWyAwIF0sXG5cdFx0fSApO1xuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWdyb3VwLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLWNvbnRlbnQgPiAud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nIClcblx0XHRcdFx0XHRcdCAgLmNsaWNrKCk7XG5cdFx0fSApO1xuXG5cdFx0JGdyb3VwX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZCxcblx0XHRcdGxpbWl0OiBwYXJzZUludCggJGxpbWl0ICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnZ3JvdXBfdGVtcGxhdGUnICksXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2xpZGVVcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0aWYoIGpRdWVyeSggJ2JvZHknICkuZmluZCggJ2xpbmsjZWRpdG9yLWJ1dHRvbnMtY3NzJyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwiZWRpdG9yLWJ1dHRvbnMtY3NzXCIgaHJlZj1cIicgKyAkd3Bvbmlvbi5vcHRpb24oICd3cGVkaXRvcl9idXR0b25zX2NzcycsIGZhbHNlICkgKyAnXCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJhbGxcIj4nICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRkYXRhID0gJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKTtcblx0XHRcdFx0JGRhdGEuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0dGhpcy5iaW5kX2V2ZW50c19mb3JfdGl0bGUoKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZ3JvdXBfd3JhcCwgJ2FjY29yZGlvbicgKTtcblx0XHRcdFx0Ly90aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZGF0YSApO1xuXHRcdFx0XHQkZGF0YS5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXBwZW5kVG86ICgpID0+IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcblx0XHRcdFx0fSApO1xuXHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJGRhdGEgKS5yZWxvYWQoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGRhdGEuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJyApLCAncmVsb2FkX3dwX2VkaXRvcicgKTtcblx0XHRcdFx0JGRhdGEuc2xpZGVEb3duKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSxcblx0XHRcdHNvcnRhYmxlOiB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tYWNjb3JkaW9uLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHQkYWRkLmJlZm9yZSggalF1ZXJ5KCAkZXJyb3JfbXNnICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0JGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0LCBkaXYubm90aWNlJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQmluZHMgRHluYW1pYyBHcm91cCBUaXRsZSBFdmVudHMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0YmluZF9ldmVudHNfZm9yX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xuXHRcdCRlbGVtID0gKCBmYWxzZSA9PT0gJGVsZW0gKSA/IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKSA6ICRlbGVtO1xuXHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdGxldCAkZGF0YSA9IGpRdWVyeSggZSApO1xuXG5cdFx0XHRsZXQgJG1hY2hlZCA9IHRoaXMub3B0aW9uKCAnbWF0Y2hlZF9oZWFkaW5nX2ZpZWxkcycgKTtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1hY2hlZCApIHtcblx0XHRcdFx0aWYoICRtYWNoZWQuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRsZXQgJGVsZW0gPSAkZGF0YS5maW5kKCAnOmlucHV0W2RhdGEtZGVwZW5kLWlkPVwiJyArICRtYWNoZWRbICRrZXkgXSArICdcIl0nICk7XG5cdFx0XHRcdFx0aWYoICRlbGVtLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkZWxlbS5vbiggJ2NoYW5nZSwgYmx1cicsICgpID0+IHRoaXMudXBkYXRlX2dyb3Vwc190aXRsZSgpICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgR3JvdXAgVGl0bGVcblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHR1cGRhdGVfZ3JvdXBzX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xuXHRcdGxldCAkbGltaXQgPSAxO1xuXHRcdCRlbGVtICAgICAgPSAoIGZhbHNlID09PSAkZWxlbSApID8gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApIDogJGVsZW07XG5cblx0XHQkZWxlbS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGRhdGEgICAgPSBqUXVlcnkoIGUgKTtcblx0XHRcdGxldCAkaGVhZGluZyA9IHRoaXMub3B0aW9uKCAnaGVhZGluZycgKTtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdoZWFkaW5nX2NvdW50ZXInICkgKSB7XG5cdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCAkaGVhZGluZywgJ1tjb3VudF0nLCAkbGltaXQgKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0ICRtYWNoZWQgPSB0aGlzLm9wdGlvbiggJ21hdGNoZWRfaGVhZGluZ19maWVsZHMnICk7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtYWNoZWQgKSB7XG5cdFx0XHRcdGlmKCAkbWFjaGVkLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRlbGVtID0gJGRhdGEuZmluZCggJzppbnB1dFtkYXRhLWRlcGVuZC1pZD1cIicgKyAkbWFjaGVkWyAka2V5IF0gKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JGhlYWRpbmcgPSB3aW5kb3cud3Bvbmlvbi5fLnJlcGxhY2UoICRoZWFkaW5nLCAkbWFjaGVkWyAka2V5IF0sICRlbGVtLnZhbCgpICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkaGVhZGluZyA9PT0gJycgKSB7XG5cdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCB0aGlzLm9wdGlvbiggJ2RlZmF1bHRfaGVhZGluZycgKSwgJ1tjb3VudF0nLCAkbGltaXQgKTtcblx0XHRcdH1cblxuXHRcdFx0JGRhdGEuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXRpdGxlIHNwYW4uaGVhZGluZycgKS5odG1sKCAkaGVhZGluZyApO1xuXHRcdFx0JGxpbWl0Kys7XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBKYXZhc2NyaXB0IEVycm9yIFBsYWNlbWVudC5cblx0ICogQHBhcmFtIGVyclxuXHQgKi9cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdC8qIGlmKCAkZWxlbSApIHsgLy9lcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7IH0gKi9cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dyb3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdoZWFkaW5nJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLypnbG9iYWwgc3dhbDp0cnVlKi9cblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJF90aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkX3RoaXMuZWxlbWVudCxcblx0XHRcdCRhcmdzICAgICAgID0gJF90aGlzLm9wdGlvbnMoKSxcblx0XHRcdCRpbnB1dCAgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWlucHV0JyApLFxuXHRcdFx0JHJlbW92ZV9idG4gPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLXJlbW92ZV0nICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItYWRkXScgKSxcblx0XHRcdCRwcmV2aWV3ICAgID0gJGVsZW0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cblx0XHRsZXQgJHdvcmsgPSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxlbXM6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0cG9wdXA6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxtOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDcmVhdGVzIEEgTmV3IEluc3RhbmNlIGZvciBUb29sVGlwLlxuXHRcdFx0ICovXG5cdFx0XHRpbml0X3Rvb2x0aXA6ICgpID0+IHtcblx0XHRcdFx0aWYoICRhcmdzLnBvcHVwX3Rvb2x0aXAgIT09ICdmYWxzZScgKSB7XG5cdFx0XHRcdFx0bGV0ICR0cCAgICAgID0gKCB0eXBlb2YgJGFyZ3MucG9wdXBfdG9vbHRpcCA9PT0gJ29iamVjdCcgKSA/ICRhcmdzLnBvcHVwX3Rvb2x0aXAgOiB7fTtcblx0XHRcdFx0XHQkdHAuYXBwZW5kVG8gPSAkd29yay5lbG1bIDAgXTtcblx0XHRcdFx0XHRpZiggJHdvcmsuZWxlbXMubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCR3b3JrLmVsZW1zLnRpcHB5KCAkdHAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEluaXRzIEZvciBlYWNoIGFuZCBldmVyeSBQT1BVUC5cblx0XHRcdCAqIEBwYXJhbSAkZWxtXG5cdFx0XHQgKiBAcGFyYW0gJGluc3RhbmNlXG5cdFx0XHQgKi9cblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCAkZWxtLCAkaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR3b3JrLmVsbSAgID0gJGVsbTtcblx0XHRcdFx0JHdvcmsucG9wdXAgPSAkaW5zdGFuY2U7XG5cdFx0XHRcdCR3b3JrLmVsZW1zID0gJHdvcmsuZWxtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXHRcdFx0XHRsZXQgJGhlaWdodCA9ICR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnICk7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnLCAkaGVpZ2h0ICk7XG5cdFx0XHRcdCR3b3JrLnNlbGVjdCgpO1xuXHRcdFx0XHQkd29yay5pbnB1dCgpO1xuXHRcdFx0XHQkd29yay5lbGVtcy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRpY29uID0galF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKTtcblx0XHRcdFx0XHQkaW5wdXQudmFsKCAkaWNvbiApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdFx0c3dhbC5jbG9zZU1vZGFsKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0JHdvcmsuaW5pdF90b29sdGlwKCk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBXb3JrcyB3aXRoIFBPUFVQIElucHV0IFNlYXJjaC5cblx0XHRcdCAqL1xuXHRcdFx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBpbnB1dFt0eXBlPXRleHRdJyApLm9uKCAna2V5dXAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXHRcdFx0XHRcdCR3b3JrLmVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICkuc2VhcmNoKCBuZXcgUmVnRXhwKCAkdmFsLCAnaScgKSApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSGFuZGxlcyBTZWxlY3Rib3ggaW4gcG9wdXAuXG5cdFx0XHQgKi9cblx0XHRcdHNlbGVjdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIHNlbGVjdCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdwb25pb24uYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0J3dwb25pb24taWNvbi1saWInOiAkdmFsLFxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCAkcmVzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICR3b3JrLmVsbSwgJHdvcmsucG9wdXAgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5kaXNhYmxlTG9hZGluZygpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiggJGlucHV0LnZhbCgpID09PSAnJyApIHtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIEJsdXIgRXZlbiAvIGNoYW5nZSBldmVuIGluIGlucHV0ZmllbGQuXG5cdFx0ICovXG5cdFx0JGlucHV0Lm9uKCAna2V5dXAgYmx1ciBjaGFuZ2Uga2V5cHJlc3MnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmKCAkdmFsICE9PSAnJyApIHtcblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJzxpIGNsYXNzPVwiJyArICR2YWwgKyAnXCI+PC9pPicgKS5zaG93KCk7XG5cdFx0XHRcdCRyZW1vdmVfYnRuLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQWRkIEJ1dHRvbiBDbGljayBFdmVudC5cblx0XHQgKi9cblx0XHQkYWRkX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBvcHVwID0gc3dhbCgge1xuXHRcdFx0XHR0aXRsZTogJGVsZW0uZmluZCggJy53cG9uaW9uLWZpZWxkLXRpdGxlIGg0JyApLmh0bWwoKSxcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0YWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0d2lkdGg6ICc3MDBweCcsXG5cdFx0XHRcdGN1c3RvbUNsYXNzOiAnd3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbCcsXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0XHQkX3RoaXMuYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiAkYXJncy5lbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25TdWNjZXNzOiAoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0bGV0ICRwb3B1cF9lbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHBvcHVwX2VsZW0sICRwb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uRXJyb3I6ICgpID0+ICRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiAkcG9wdXAuZGlzYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIFJlbW92ZSBCdXR0b24gRXZlbnQuXG5cdFx0ICovXG5cdFx0JHJlbW92ZV9idG4ub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ljb25fcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV9zZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkaW5wdXQgICAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXG5cdFx0XHQkcHJldmlld19hZGQgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3LWFkZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXcnICk7XG5cblx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IG51bGw7XG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcHJldmlld19hZGQuaGlkZSgpO1xuXHRcdFx0XHQkcHJldmlldy5zaG93KCk7XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2ltYWdlX3VwbG9hZF91cGRhdGVkJywgJGlucHV0LCAkcHJldmlldywgJHByZXZpZXdfYWRkICk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXdfYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJHRoaXMubWVkaWFfaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHR0aXRsZTogJHRoaXMub3B0aW9uKCAnZnJhbWVfdGl0bGUnLCAnU2VsZWN0IEltYWdlJyApLFxuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSAkdGhpcy5tZWRpYV9pbnN0YW5jZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpLmF0dHJpYnV0ZXM7XG5cdFx0XHRcdGxldCB0aHVtYm5haWwgID0gKCB0eXBlb2YgYXR0YWNobWVudC5zaXplcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwudXJsIDogYXR0YWNobWVudC51cmw7XG5cdFx0XHRcdCRwcmV2aWV3LmZpbmQoICdpbWcnICkuYXR0ciggJ3NyYycsIHRodW1ibmFpbCApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgYXR0YWNobWVudC51cmwgKTtcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5pZCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9ICk7XG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWltYWdlLXJlbW92ZScgKS5vbiggJ2NsaWNrJywgKCkgPT4gJGlucHV0LnZhbCggJycgKS50cmlnZ2VyKCAnY2hhbmdlJyApICk7XG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2VfdXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnaW5wdXRtYXNrJyApO1xuXHRcdFx0aWYoICRzZXR0aW5ncyApIHtcblx0XHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnSW5wdXRNYXNrJyApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5wdXRtYXNrKCAkc2V0dGluZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbnB1dG1hc2snLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2phbWJvX2NvbnRlbnQnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0aGlzX2VsZW0gPSAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLXRhYi13cmFwICcgKTtcblxuXHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkgYScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRsZXQgJF90aGlzID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLXRhYi1jdXJyZW50JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkuaGlkZSgpO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdGxldCAkdGFiID0gJF90aGlzLmF0dHIoICdkYXRhLXRhYi1uYW1lJyApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2RpdiN3cG9uaW9uLXRhYi0nICsgJHRhYiApLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKS5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50IGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpOmZpcnN0LWNoaWxkIGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2pxdWVyeV90YWInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmdsb2JhbF92YWxpZGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtYWN0aW9uLWNvbnRhaW5lciAgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLWFkZF0nICksXG5cdFx0XHRsaW1pdDogKCAtMSA9PT0gdGhpcy5vcHRpb24oICdsaW1pdCcgKSApID8gbnVsbCA6IHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtcmVtb3ZlXScsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZWxlbS5maW5kKCAnPiBkaXY6bGFzdC1jaGlsZCcgKSApO1xuXHRcdFx0fSxcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLmFmdGVyKCBqUXVlcnkoIHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQnICkuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fbm90aWNlKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCBlcnIuZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBWYWxpZGF0aW9uIElucHV0c1xuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIHRydWUgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLmtleSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDAgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3Mua2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGlmKCB0cnVlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDEgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MudmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiggdHJ1ZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgJiYgdHJ1ZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdrZXl2YWx1ZV9wYWlyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdub3RpY2UnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFOdGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqTXRZekF4TVNBMk5pNHhORFUyTmpFc0lESXdNVEl2TURJdk1EWXRNVFE2TlRZNk1qY2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVEJHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJVVTVOMEUzT0VFMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlVVNU4wRTNPRGsxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROQ0JYYVc1a2IzZHpJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRNMk1EVTJRekpHUWtWRVJUQXhNVGsxTlVWQ1JUQXpSVUU0UWpSRU5VSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFHQkFRRUJRUUdCUVVHQ1FZRkJna0xDQVlHQ0FzTUNnb0xDZ29NRUF3TURBd01EQkFNRGc4UUR3NE1FeE1VRkJNVEhCc2JHeHdmSHg4Zkh4OGZIeDhmQVFjSEJ3ME1EUmdRRUJnYUZSRVZHaDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHgvL3dBQVJDQUVUQVJNREFSRUFBaEVCQXhFQi84UUFpUUFCQUFNQUF3RUJBQUFBQUFBQUFBQUFBQVFGQmdFREJ3SUlBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFCQXdNREFRTUdCdzhDQXdrQUFBQUJBQUlERVFRRklSSUdNVUVUQjFGaGNZRWlNcEdoc2NGQ2doVGhVbUp5a3FLeXdpTXpjN04wRlRZa045SFRGK0pEVTVPalZEVlZGaEVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9WS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJT3VlZUtDTXlTdURHRHFTZzZJOHZqWG1qWjIvV3EzNVFFSGV5NHQ1UGNsWS84QUZjRDhpRHNRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGTnllWGJiUlIvZnVKL0pIM1VHYjNJT2R5RHNqdkxtUDkzSzl2bURpRUVsbWN5YkJRVGtqemhwK01oQklaeWE5YlFPWkcveW1oQitJb0pNZktXLzk1Yit0cnYrSVFTWStTWTkzdkI3UE9SVWZFU2dreDVqR1NlN2NOSDQxVy9wVVFTMlBZOW9leHdjMDlIQTFCUWNvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lNM3lxYjl2QkY5NjB1L0tOUDFVRmJpb0czTi9EQzhibU9QdER5Z0NwUWFTVGoyTWVQWllZejVXdVB6MVFSWk9MUUVmczVuQStjQW9JeitMM1k5eVpoOU5SOHlDTTdqMlZCMGpEdk9ITitjaEJHa3htU2pOSFc4bnFhVDhpRG9mSE5HYVBZNXA4aEJDRDQzSU5keDFqbTR4cEo5OXpuTjlIVDVrRm1nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWd4L0o1OStVTGYvQ1kxdjYzNnlEbmk3Qy9KaDNaRzF4UHJGUG5RYTlBUUVCQVFRTTQrT1BHVHVjMEVsdTBFanRPaURFYmtHN3hNWmp4dHV3OWRnUDVXdnpvSmFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0RBWnFmdk1yY3VIVGVRUHE2Zk1ndU9HeGt2dUpld0FOcjY2b05PZ0lDQWc0YzVyV2x6aUd0SFVuUUlLWGxrN1JqR3RCcjNqeFFqdEFDREhzSmM0TkhVbWc5YUQwcGpReGpXam8wQUQxSU9VQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRZk1rc2NiZHozQm84cFFSSk14WnMwYVM4L2dqVDQ2SUlVdWJuZHBHME04NTFLQ1ZpN21XV09hU1oxUTAxOUFwcWd3RTBwZEs5MzN6aWZoS0RZOE5ZUmkzdVAwNVNSNmdBZ25aUE4yT1BaKzFkdmxQdXhOMWQ2L0lncU1UeXQ4OThZcnNOWkZLYVJFYWJUNUNmT2cwNkNweWZKTWZaQXNEdStuN0kyZEFmT1VHU3lHY3lGKzR0a2VXeEU2Uk4wYjE3ZktndE9Vdjd1d3hzSDBoSFZ6ZlExb0NDb3c3VEpsYlJ0Sy90V0VqekJ3SlFlaklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJS3JPdGR0aGQ5RUVnK2swUVZDQWd0R2tRNEM2bEpvVEhKcjU2RUJCNS92UWFwK1R1TVp4aXlGdlJrMCsvMjZEUWJpZTMwb012SlBKSTh2a2NYdmNhdWM0a2tuMGxCODcwRm5OeVhMUzJyYll6RU1BbzV3MGM3MHU2b0t6ZWc3N0VHUzlnakd1NlJvcDYwRjF6YVVmM1NKamVqSVJVZVFsenZtUVIrSXNNbWJpTktoalh1UDVKSHpvTitnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2k1U0x2TE4vbGI3UTlTRFBVUUtJSm1mY0lPS3ZGYUY3WXdQUzU0SitKQmdBNGtnZVZCcnVUV0Y3TGpjWXkzZ2RJeUdMMnkzV2hMVzlucVFaWjl2ZE05K0Y3ZlMwaEIxRnhIWFJCeHZRTjZDNDRtd1M1NjJEaFZyZHp2V0dFajQwSHh5ZWN2emwxVTEydTJqMUFJTFhnVWU2N3VwdnZJMnRIMWovQU5sQnRVQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJ3QkJCNkhRb012UEgzY3I0ejlGeEZmUWcrV2lwSG5RT2R5OXppYlczKytlUHpHL2RRWVVTRUVFZFFhaEJjUWN4enNOQjM0ZUFLQVBhMGo0Z0VFOXZpQmtEcExiUU9iMmdCdytWeFFkZzVoaHBOTGpFeDFQdk9BWWZsYWc1YmtPQ3o2eTJqb25IeWJ3UHpYSURjUHcrN0pNR1E3ajhGN2czOU9pQ3o0OWdNZlpYN3JpM3ZtWFhzRnJHdExTUVQxT2hLRERYMDVsdlo1Q2FsNzNHdnJRYlR3K2hBeDF6UDJ5UzdQVXhvUDY2RFZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNDaXpFT3k2MzAwa0ZmWDJvSTF0SHZ1STJEdGNFRlg0aTNCKzAybHYyTlk2VDhvMC9WUVkrcUJWQXFnVlFLb0ZVSEllNGRIRWV0Qnh1UWVtOEtoRWZINEhEcks1N3orVnQvVlFYcUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3I4ekZ1dDJ5QWFzZHFmTWZ1b0s3RzdmdHNlNDAxK09pRG5rdkZQN3pOSE95NDdtV05teWhidWFSVW55anlvTXpjZUgrYWovZFBpbUhtZHQvU1FRTGppUElZUGV0SFAvaGtQL1JxZ2dUNHpKMjRyUGF5eER5dlk1dnloQkdKSU9xRGpjZ2JrRGNnYmtIc09EZzdqRDJjVktGc0xLanprVlB4bEJOUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFSFZjeENXM2taNVI5MUJtalVHbmFFSFl5NHVHZTVJNXZvSkNEdFprcjFuU1FuMDYvS2c3NDh6ZEErMDBQK0w1RUZoYlhWek1SdmdMR242UlAzRUhaUFoybHdLVHdzbEg0YlE3NVVGZk54VGowMWQxbEdDZTF0Vy9JUWdyNXZEN0F2SkxUTkdld05jQ0I4SUtDQkw0YVJFa3hYN21qc0RvNi9HSEJCRGI0YjVFWERBNjVpTUZSdmNOMjdiMjBiVDUwSG9ER2hyUTBkR2lnOVNEbEFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGRmUyTTR1bjdHRnpYbXJTQnBycWc1aHc5eS9WNUVZOC9WQk5pdzF1MzMzRjUrQUlKa2NFTVg3dGdiNkFnKzBCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkZ5bVJoeHVPdWIrZHJuUTJzYnBaR3NBTGkxZ3FhQWtDdnJRUU9MOHN4UEpMT1M1eDVlM3VYN0pZWmcxc2pTUlVFaHBjS083RFZCYnlQREkzUFBSb0xqVHpDcUNwNHZ5akg4a3g4bDlZeHl4d3h5bUJ6WncxcnR6V3RkVWJYUEZLUEhhZ3VFQkFRUnNsZnc0L0hYTi9NSE9odFluelNOWUFYRnJHbHgyZ2tDdW5sUVlqL3JaeFgvMnQ5LzVjUC9OUVNMSHhpNGhjekNLVDdUYUEwQWtuamJ0MS9odWtJK0JCdG81STVZMnlSdUQ0M2dPWTlwQmE1cEZRUVIxQlFmU0FnSUNBZ0lLYmpuS3Nmbi90bjJPT2FQN0ZMM012ZkJyYXUxMWJ0Yy9UVHRRWEtBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FncGViZjRqbVA2U1g5QW9QSmVOdnlIRkxYRDhxaDNUWXZJOTVCa29oMmJabnNINXJBNXZuQkhhZzlyTnpCZFkwM051OFN3VFFsOFVqZFE1cm0xQkNERWVDZitLM1g5ZEovSmlRVE0zNG0yZHBrbjR2RVdFK2F2NGlSTEhiMTJnZzBjQVd0a2NTM3RvMmlEbkJlSmRuZTVKbUt5bGhQaHNqS2FSUlhGZHJpZWpkem14dUJQWlZ2bVFiTkJUOHgveFBNLzBVLzhzb0tyd3Avd1hIL2pUL3ozb0pQaUphWXlmaU9SZmZNWWU1aGMrMmtkVGMyYjZHMDloTHFEem9LWGlHY3VjUjRXeDVTZUUzSDJRU2QxRTUyd3VqNzR0YU4xSFVBcnBvZ044Vko3a1FPeGVCdWNqR1dSbThsaExpeUdTUm9jWTl3amNIRnRhRW5hZ3ZPVWMzeG5IaERGT3g5eGtMZ0F3Mk1IdFBJSnBVK1FWMEhsN0VGSEQ0cVRXOHJQNzl4Kzh4TnJJUTF0eThQZTJ2bkRvNGo4RlVGL3l2bFJ3ZUVqekZ2YWpJV3Izc0R5eVhZQkhJUFprQjJ2RGhXZzlhQzd0NTRyaTNpdUlYYm9wbU5ramNPMXJoVUg0Q2dvOFh5dzVIbEdSd3R2YVZ0OGEwZDlmZDVvWkRRYkJIdDh1NzZYWWc0NGp5My9BUFJmM0QvU2ZaZnNNM2Nmdk84MzlmYTkxbE9pQ3Z6dmlSYTJXU2t4ZUtzSjh6a1lhaWFLM0IydElwVWJtdGtKSTdhTjA2SU9jRjRqMjE3a284WGxjZlBoc2pOcERGY0E3WGs5QUhPYkdRVDJWYWdzVHlzeDh5SEc1N1h1eExCMzlyZDk1WHZLRFZ1emFLZTY3NlI2SVBybVhLb3VOWWorNFBoKzB2ZEkyS0tEZjNlNHVxVDdXMS9SclNlaUN6eHVRaHY4WmJaQ1AyWXJtRmt3cWZkRDJoMUNmTWdxdUljcWR5T0M3dW1XbjJlMGduTU52S1hsNWxEZFM3YnNadDBJN1Q4U0MvUUVCQVFFQkFRRUJBUUVGTHpiL0VjeC9TUy9vRkJSOER4ZG5sZkRLeng5NHpmYjNEYmhyeDJqL1VTRU9IbmFkUWdxdUY1Uzh3Ti9lOEx5NzZtTnIzNHlZKzY1cEJkdEZleHc5cHZucUVEd3Bua3QrQVplZUxTU0tlNGV3L2hOdG95RUUvd2NzYmFMaTc3eHJRYm02bmYzMG4waUdhTmJYeURyNjBIejR5MmR1N2prRjhRRzNkdGNNRUVvMGNBOEhjMEhyMkErcEJ0c2ROSk5qN1dhUTFra2hqZTgrZHpRU2dyK1kvNG5tZjZLZitXVUhuWENlRlovSjhidGIyMDVQZDQ2M2tNZ1paeENUWXpiSTVwcHRtakdwRmZkUVhyUENpVzZsWWM3eUM4eXNNYmc1a0xpNW8wclVFdmZOMTgxRUZ2ejIxdDdYZ0dSdHJlTVJRUXdNWkZHMFVEV3RlMEFCQjJlRzl2RkJ3ckdDTnROOGJwSG50TG52Y1NTZ3cwdDF5cC9pVm1ickNXRUdRdmJZQ0pyYmtnQ0tLaldnc3JKRHFhZkg1MEZwazdqeGN5V1B1TEM2NC9ZdXQ3bGpvNUFIc3FBNGRSVzVPbzZqem9MdmpYRzhqSndFNERPUjkxTzVrc0lhWE5lV3RMaTZNN21Gdzlra1U5Q0N2NFR5YzJQQjc0WCtsMXg0eVFTeG5xZHRlNmIrVjdBOUNDYjRXWXVTMjQ0Y2pjNjNtWGxkZFRQUFV0SklaOE9ydldncC9ES1o4Tmh5aWFQOTVIY1NQWjZXdGVRZ28rQlhYaUJiNHFXZkFZbTF2SUxtWnpwcnVkemU5YzhVQkRxenhtZzdOTzFCTzVMWWVLdkliYUNHOHdsckM2MmxFMEU4RXNiWld1QXBvNTF3L1EvTUVGOTRodzNOcGI0Yms0WlM3eEU4WnUydDdZcGFDUnVuNFduclFjY21naDVMeTdIWVpwMzJWdFpUWGs1cFZwTTdlN2lyWHlhRWVsQlI0dmtzMWo0V1g5bzh1R1JzNVpNWXhsZmFEcFhhVVA0TFhPcCtLZzlBNGxoaGh1TzJPUG9CTEZHRFBUdGxmN1Qvd0E0b0xkQVFFQkFRRUJBUUVCQVFWSEw0SnArTDVXR0NOMHMwbHJLMk9KZ0xuT2NXbWdEUnFTZ2crRzlwZDJuQzhkYjNjTWx2Y003N2ZESzBzZTJzOGhGV3VBSXFEVkJEOFNlSlNackdOdnJGcEdYeC83UzNMUGVlMEdwWUthMTdXK2Ywb0kzaEppNzIwNHZkMjJSdEpiWjhsM0llNW5qZEc1ekhReE5ydGNBYUdoQ0Nxc2JQbVhCTHU2dDdESFB6ZUNuZVpJV1JFbVZwTkIwYUh1QnBRTzlrZzlmS2dYdGh6SG5kNWFSWkhIT3d1QnQ1TzlsamxKNzE1RlduUndZNHVwVUQyUUJXdXVpRDA1akdzYUdORkd0QURRT2dBUVZmSzRacCtNWmFHR04wczBscE0yT05nTG5PY1l5QUdnYWtsQlcrR2xuZDJmRGJHM3U0SkxlNFladDhNclhNZUt6UElxMXdCMUJRYWRCUWMrdHJtNjRoazdlMmlmUFBKRzBNaWphWHZjZDdUbzF0U1VIMXdhMnVMYmlXTWd1WW53enh3MGtpa2FXUGFkeDBMVFFoQm5lVWNkNUhqZVRqbFhHb2hjeXlzRWQvWkhxOEFBYUNvcUhCbzZhZ2l1cUNQZGNyOFFzM2J1eDJONDdQaXBwaHNrdnAzUFlHTk9oY3h6MlJiVDZLbnlhb054Z2NkY1k3RTIxbmMzVWw3Y1JOL2JYVXpuUGM5N2lTZFhFbWdyUWVaQjV6emJpV2JsNVZKYjR5R1E0elBtQjEvTEd4em1SdWlmN1JlNENqZnY5ZXFEMUszZ2l0NEk0SVdoa1VMV3h4dEhRTmFLQWZBZ3cvaGhqTCswYm5HMzFwTGJ0bnV5Nk1UUnVZSHNPN1Z1NENvUVZkclljdzRKZjNjZUx4N3N6Z0xtVHZZNFlxbVJoTkI5RVBlSFVvQ2RwQnBWQktOenovbHQ1YndpMHVPTlltSisrNW03eDhjNzZhYlFhUlBOZGFlelR5OWlEZFpiR3daTEYzV09tL2RYTVRvaWVwRzRVRHZTRHFneC9oZmhzdmJOeUY5bUlwSXIxNWlzNGhLMHRQYzJzWVkwdEJwVnAwMTdhSUt0L0Q4ako0bFNSbUNUK3d2dUdaU1NRc2QzSm1Zd25idXB0M2Q0ODFGZWlEMDlBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkF6K1dpeEdGdk1sSlNsdEU1N1FmcFA2TWI5WnhBUWVTOFFreUhIczdoY3hmUExyYmtyWkdYRGoyT2ZMN0xqMmRkanZRU2c5cGM1cldsemlBMENwSjBBQVFkRmxmMkY5RDMxbGN4WFVJSmFaWVh0a2J1SFVibWtpdXFCZTM5aFl3OTllM01WckNTR2lXWjdZMjdqMEc1eEFyb2c3VEpHSSs4TGdJNmJ0OVJ0cDFyWHlJSUVYSStQVFRpM2h5bHBKT1NRSW1UeE9lU09vMmgxVUV1OGpobHM1NHBuYklYeHZiSytvRzFwYVE0MU9nb0VHYngyTHdtTTRUa0xYRFhmMjJ5RU55NFQ5NUhMN1JqTzRib3cxdWlDTDRSZjRYQi9HbS9TUWFtK3krSnNDMFgxN0JhRjN1aWVWa2RmUnVJUWRsbmYyTjdGMzFuY1JYTUowN3lGN1pHK1RxMGtJTUh5ei9BSFI0ei9EUDZUMEczYm04TTY4TmsyL3RqZUE3VGJDVmhscjVObGQzeElQalAvOEF3V1IvcFp2NWJrR2E4SXY4TGcvalRmcElOVmZaYkZXRzAzMTVCYUIzdTkvSXlPdm8zRWVSQjIyMTNhM1VJbXRabVR3dTkyU0p3ZTA5dWhhU0VIYWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lQT2ZGckp4enlZdmpZblpiaTltYk5kelBjMWpXUkIyeHBjWGFVcnVkOVZCejRoeThVeUhEL3N0aGs3SjArTjJTV1VVZHhFWEZzWTJGalFIVlBzZEI1VUdwNFRuUm0rTldkNjUyNmNON3E1OHZleCt5NG44YjN2V2d6ZkRSL1lPYTVuamJ2WnRidjhBMTJQSFpROVdqNnBwOVZBNW1QNzl6WEM4YmFOMXJiSDdka0IxRkIwYWZxaW4xa0ZqelRqR1N6MS9aUnoza2R0eHVDajc2THZITWxlK3AvQjJVOTBDcnRLbEJtK1JjZDhKWU1WY0MydTRJYjFzYnpDK0c1Zk8vdkdqUU9ZSFNEVjNYUkJlY0l5RjFlK0d6bjNMekxKRkRjd2g3dFNXc0RnMnA4emRFRUh3OS8yd3YveGJ6K1dnbWVGd3VqNGYwdEN3WFpkY2ZaekpVTUVsVHQzVURqU3ZYUkJYMlBBK0xXY2NrL05iKzN1c3ZjU09kTEpMZHVpWnIwMmt1aGNUVFUxUVZXSmZnTVY0ajQ2UGkxNFpNZmV0TWQzQzF6bnNCSWRSdTUzVUNnY05UUW9KM2lQWlhsOXozQldkbk02M25uaDJDZG52TWFYdjN1Rk8wTXFndDc3d2c0cS9GdWdzMlNRWHpXL3NyMHlQYzR2SFRlMG5aVHkwYUVIUnd6TzNtVTRCazRiNXhmZDQrSzR0bnlPTlhPYUlpV2x4N1NLN2ZVZytPQTVUKzFlR0UyUjJoeHRmdEVqR25vWEEreUQ2U2d5K0FtOE83eUYrUjVma1pMM01YVG5PbWljMjZEWXhVN1FERTBWMDhob09nUVNMUE5jWXdYTE1kTnhTK2tseDE5SUlNallQRXdZd1BjR3RlMHl0YldtNm8xSjA2MEtEMk5BUUVCQVFFQkFRRUJBUUVCQVFFQkFKQUZUb0FnOHE0L2ljZnpqbHVheStUaU54aTRDSUxTUGM1Z05EUmhCWVduUnJha2ZoSU5WLzBzNEgvd0RXZit2Y2Y4eEJuZUFTTzQ3elBMY1VtZFNDWnhtc2E5dTBiaFN2YTZJNi9pb0xUeElnZmo3dkQ4cWhIdDR5NGJIZFU2bTNsTkQ4cGI5WkIxK0dzVDhsa00xeXVjSGRrSnpEYVY2aUNNai9BSU5iOVZCVmM3bHRMM24xbGkrUVhUN1hBTmdFakFDV3NkSWQzdE9kMlZjTnU3czh5RG5QTThKOExpYmwxaEZhM2w5TEc1dHN5T1UzUkVoYVExeExuU05ZQWRTZ3NmRG9nK0dsd0FkUUxzSDRDVUhWNGUvN1lYLzR0NS9MUWRYRHJxOXRQQ2E3dWJLb3VvbTNMb25ORlMwZzZ1SDRvMVFWbkVNUjRhWG1HWmU1eTlqbXlraGMrN2JkWExvWE5mdVB1dEQyRjJuYnJWQkhqeUhHYmp4THcwZkg0STRiRzNmM2JwWTI3QkpJZDFYRHRJNkFWUVcvaUZsRzRyeEF3T1FleDBrZHZDWHl0WUt1N3ZjOFBJSDRMU1NnMVdSOFErSjJtTWZmUjVHRzVPMnNWdkU4T2xjN3Niczk1djFnRUdkNEpqTHUyNERsNzI3YVdTWkpseGNNYVJUMk82SUR0ZnZqVStoQjg4S3hzdVQ4S2Jxd2gvZlRpNGJFRG9DOE9xMGVzaEJFNEZrZUNQeExjZG5iT3d0Y3RaRjBVN3J5R0ZoZlJ4b1MrUWU4UGRJSnJVSUxOMlo0VS9rbGppY0RnckhKenlQclBkd1JSTVpBMXJoN1llSTNidG8xMEk3TmRVSG9DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNENHVJSXJpQ1NDVUV4VE1kSElBUzBscmhRMGMwZ2pUdENDSGhjRmljSmFHMHhsdUxlM2M4eU9ZSE9mVjVBQkpjOHVkMEE3VUU5QlYzZkdNSGQ1ZURNVDIyN0pXMjBRM0RYeU1JMmtrVmExd2E3cjJoQk15R1BzOGpaVFdWNUdKcldkdTJXTWtpbzY5V2tFZXBCeGpjYlk0eXhpc2JHSVEyc0lJampCSnBVa25WeEpPcDdVSFJtZVA0WE5RdGh5bG95NVl5cFlYVkRtMTY3WHRJY0srWW9JT000SnhIR3lkN2FZeUpzblkrVGRNNFYwOWt5bDlQVWdsNHZqV0Z4VmhQWVdGdjNObmNGenBvdThrY0NYdERYYXZjNGlyUjJJUHJIOGV3K094Y21MczdmdXJDVVBENGQ3M1Y3d1VkN1RuRjJvODZEc3hHRnhtSXNSWTQ2SHViVnBjNFI3blAxY2FuVjVjZmpRVkZ4NGNjSnVMazNFbUxqRWhPNGhqNUkyVnJYM0dPYXo0a0V1VGh2R0h2c25qSHh4dXg3KzhzekNYUmJIMURxL3N5M2RxMGU5VkJJdk9QWWU4eWR2azdtM0VsOWFOTElKUzU0RFdtdFJ0QkRUN3g2aEJYeCtIdkRJNzM3WXpGUkNhdTRBbDVqQjgwUmQzZjVxQzludDRaN2VTM2xidWhsWVkzczFGV3VGQ05LVTBRUnNSaHNiaDdKdGxqb2U0dFd1TG14N25QMWNhblY1Y2ZqUVFzdnd2aStZbTcvSVkrT1djKzlLMHVpZTZtbnRPakxDNzFvSk9HNDVnOExHNW1NczQ3WVBvSHZiVXZjQjBEbnVKY2ZXVUZpZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0QvLzJRPT0nO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuYmVmb3JlKCAnPHNwYW4gY2xhc3M9XCJzcGlubmVyIHdwb25pb24tc3Bpbm5lclwiPjwvc3Bhbj4nICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNob3dfcHJldmlldyggZSApICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBPRW1iZWQgUHJldmlldy5cblx0ICovXG5cdHNob3dfcHJldmlldygpIHtcblx0XHRsZXQgJHZhbHVlID0gdGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkudmFsKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdCR3cG9uaW9uLmFqYXgoICdvZW1iZWQtcHJldmlldycsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR2YWx1ZTogJHZhbHVlLFxuXHRcdFx0fVxuXHRcdH0sICggcmVzICkgPT4ge1xuXHRcdFx0aWYoIGZhbHNlID09PSByZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmh0bWwoIHJlcy5kYXRhICk7XG5cdFx0XHR9XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5yZW1vdmVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdvZW1iZWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NlbGVjdCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3QyJywge30gKTtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZy5kcm9wZG93blBhcmVudCApICkge1xuXHRcdFx0JGFyZy5kcm9wZG93blBhcmVudCA9IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50ICk7XG5cdFx0fVxuXHRcdCRhcmcgPSB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmVsZW1lbnQuc2VsZWN0MiggdGhpcy5oYW5kbGVfYXJncyggJGFyZyApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NlbGVjdDInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR2YXIgJHRoaXMgICAgID0gdGhpcy5lbGVtZW50LFxuXHRcdFx0JGVuYWJsZWQgID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWVuYWJsZWQnICksXG5cdFx0XHQkZGlzYWJsZWQgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZGlzYWJsZWQnICk7XG5cblx0XHQkZW5hYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRkaXNhYmxlZCxcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0dXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRsZXQgJGVsID0gdWkuaXRlbS5maW5kKCAnaW5wdXQnICk7XG5cdFx0XHRcdGlmKCB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCAnd3Bvbmlvbi1lbmFibGVkJyApICkge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZGlzYWJsZWQnLCAnZW5hYmxlZCcgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZW5hYmxlZCcsICdkaXNhYmxlZCcgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIGF2b2lkIGNvbmZsaWN0XG5cdFx0JGRpc2FibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGVuYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzb3J0ZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N1YmhlYWRpbmcnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N3aXRjaGVyJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0ZXh0JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0ZXh0YXJlYScsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IGNzc191bml0cyBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2Nzc191bml0cyc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5mb250X3dlaWdodF9zdHlsZSA9IGZhbHNlO1xuXHRcdGxldCAkZWwgICAgICAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0bGV0ICRwcmV2aWV3ICAgICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZm9udC1wcmV2aWV3JyApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXRcblx0XHRcdFx0JGZvbnRfZmllbGQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJyApLFxuXHRcdFx0XHQkZm9udCAgICAgICAgICAgICAgPSAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tZm9udC1zZWxlY3RvcicgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRfd2VpZ2h0X3N0eWxlID0gJHRoaXMuZm9udF9zdHlsZSggJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkudmFsKCkgKSxcblx0XHRcdFx0JHRhZyAgICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXRhZyBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRjb2xvciAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZmllbGQtY29sb3JfcGlja2VyIGlucHV0LndwLWNvbG9yLXBpY2tlcicgKS52YWwoKSxcblx0XHRcdFx0JGFsaWduICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWFsaWduIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRTaXplICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXNpemUgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdCRsaW5lSGVpZ2h0ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1saW5lLWhlaWdodCBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0Ly8kYmFja1VQRm9udCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwLWZvbnQgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQvLyRkaXJlY3Rpb24gICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1kaXJlY3Rpb24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGV0dGVyLXNwYWNpbmcgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdGhyZWYgICAgICAgICAgICAgICA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9JyArICRmb250ICsgJzonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCxcblx0XHRcdFx0aHRtbCAgICAgICAgICAgICAgID0gJzxsaW5rIGhyZWY9XCInICsgaHJlZiArICdcIiBjbGFzcz1cIndwc2YtZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICsgJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPic7XG5cblx0XHRcdGlmKCBqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5hdHRyKCAnaHJlZicsIGhyZWYgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggJ2hlYWQnICkuYXBwZW5kKCBodG1sICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZm9udFNpemUgPT09ICcnIHx8ICRmb250U2l6ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkZm9udFNpemUgPSAnMThweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGV0dGVyU3BhY2luZyA9PT0gJycgfHwgJGxldHRlclNwYWNpbmcgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgPSAnMXB4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYoICRsaW5lSGVpZ2h0ID09PSAnJyB8fCAkbGluZUhlaWdodCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkbGluZUhlaWdodCA9ICcyMHB4Jztcblx0XHRcdH1cblxuXG5cdFx0XHRsZXQgJF9hdHRycyA9ICcgZm9udC1mYW1pbHk6JyArICRmb250ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC13ZWlnaHQ6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQgKyAnOyAnICtcblx0XHRcdFx0JyBmb250LXN0eWxlOicgKyAkZm9udF93ZWlnaHRfc3R5bGUuc3R5bGUgKyAnOyAnICtcblx0XHRcdFx0JyB0ZXh0LWFsaWduOicgKyAkYWxpZ24gKyAnOyAnICtcblx0XHRcdFx0JyBjb2xvcjogJyArICRjb2xvciArICc7JyArXG5cdFx0XHRcdCcgZm9udC1zaXplOicgKyBjc3NfdW5pdHMoICRmb250U2l6ZSApICsgJzsgJyArXG5cdFx0XHRcdCcgbGV0dGVyLXNwYWNpbmc6JyArIGNzc191bml0cyggJGxldHRlclNwYWNpbmcgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxpbmUtaGVpZ2h0OicgKyBjc3NfdW5pdHMoICRsaW5lSGVpZ2h0ICkgKyAnOyAnO1xuXG5cblx0XHRcdGxldCAkdGV4dCA9ICRwcmV2aWV3LnRleHQoKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5hcHBlbmQoIGpRdWVyeSggJzwnICsgJHRhZyArICc+JyArICR0ZXh0ICsgJzwvJyArICR0YWcgKyAnID4nICkgKTtcblx0XHRcdCRwcmV2aWV3LmZpbmQoICR0YWcgKS5hdHRyKCAnc3R5bGUnLCAkX2F0dHJzICk7XG5cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBQcm9wZXIgVmFsaWQgRm9udCBTdHlsZXMuXG5cdCAqIEBwYXJhbSAkaW5mb1xuXHQgKiBAcmV0dXJucyB7e3dlaWdodDogc3RyaW5nLCBzdHlsZTogc3RyaW5nfX1cblx0ICovXG5cdGZvbnRfc3R5bGUoICRpbmZvICkge1xuXHRcdGxldCAkd2VpZ2h0X3ZhbCA9ICc0MDAnLFxuXHRcdFx0JHN0eWxlX3ZhbCAgPSAnbm9ybWFsJztcblxuXHRcdHN3aXRjaCggJGluZm8gKSB7XG5cdFx0XHRjYXNlICcxMDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzEwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzEwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzcwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzcwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc5MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdCRzdHlsZV92YWwgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7IHdlaWdodDogJHdlaWdodF92YWwsIHN0eWxlOiAkc3R5bGVfdmFsIH07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0eXBvZ3JhcGh5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFkZCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbicgKSxcblx0XHRcdCRpbnB1dCAgICA9ICRlbGVtLmZpbmQoICdpbnB1dFt0eXBlPXRleHRdJyApLFxuXHRcdFx0JHNldHRpbmdzID0gJHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnLCB7XG5cdFx0XHRcdGZyYW1lX3RpdGxlOiAnVXBsb2FkJyxcblx0XHRcdFx0dXBsb2FkX3R5cGU6ICdpbWFnZScsXG5cdFx0XHRcdGluc2VydF90aXRsZTogJ1VzZScsXG5cdFx0XHR9ICksIHdwX21lZGlhX2ZyYW1lO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggd3BfbWVkaWFfZnJhbWUgKSB7XG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdHRpdGxlOiAkc2V0dGluZ3MuZnJhbWVfdGl0bGUsXG5cdFx0XHRcdGxpYnJhcnk6IHtcblx0XHRcdFx0XHR0eXBlOiAkc2V0dGluZ3MudXBsb2FkX3R5cGVcblx0XHRcdFx0fSxcblx0XHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdFx0dGV4dDogJHNldHRpbmdzLmluc2VydF90aXRsZSxcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9IHdwX21lZGlhX2ZyYW1lLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuYXR0cmlidXRlcy51cmwgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfZWRpdG9yJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGV4dGFyZWEgPSAkZWxlbS5maW5kKCAndGV4dGFyZWEnICk7XG5cdFx0JGVsZW0uZmluZCggJyN3cG9uaW9uLXdwLWxpbmstcGlja2VyID4gYnV0dG9uJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCR0ZXh0YXJlYS52YWwoICcnICk7XG5cdFx0XHRpZiggIXdpbmRvdy53cExpbmsgKSB7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdHRpdGxlOiAkd3Bvbmlvbi50ZXh0KCAnd3BfbGlua19lcnJvcl90aXRsZScsICdXUCBMaW5rIEpTIExpYiBOb3QgRm91bmQnICksXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LndwTGluay5vcGVuKCAkdGV4dGFyZWEuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXG5cblx0XHQkdGV4dGFyZWEub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkZGF0YSA9IGpRdWVyeSggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkuaHRtbCggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkudmFsKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0aXRsZScgKS52YWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKS52YWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnVybCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfbGlua3MnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuaW1wb3J0ICR3cG9uaW9uX2RlYnVnIGZyb20gJy4uL2NvcmUvZGVidWcnO1xuXG4vKipcbiAqIFdQT25pb24gRGVwZW5kZW5jeSBIZWxwZXIgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBXUE9uaW9uIERlcGVuZGVuY3kgSGVscGVyIENsYXNzLlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udHh0XG5cdCAqIEBwYXJhbSAkY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBEZXBlbmRlbmN5IFdvcmtlci5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRkZXAgPSB0aGlzLm9wdGlvbiggJ2RlcGVuZGVuY3knICk7XG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVwLmNvbnRyb2xsZXIgKSB7XG5cdFx0XHRpZiggJGRlcC5jb250cm9sbGVyLmhhc093blByb3BlcnR5KCAka2V5ICkgJiYgJGRlcC5jb25kaXRpb24uaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiAkZGVwLnZhbHVlLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdGxldCAkY29udHJvbGxlciA9ICRkZXAuY29udHJvbGxlciBbICRrZXkgXSxcblx0XHRcdFx0XHQkY29uZGl0aW9uICA9ICRkZXAuY29uZGl0aW9uIFsgJGtleSBdLFxuXHRcdFx0XHRcdCR2YWx1ZSAgICAgID0gJGRlcC52YWx1ZSBbICRrZXkgXSxcblx0XHRcdFx0XHQkZmllbGQgICAgICA9ICdbZGF0YS1kZXBlbmQtaWQ9XCInICsgJGNvbnRyb2xsZXIgKyAnXCJdJztcblx0XHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZy5uZXN0YWJsZSApIHtcblx0XHRcdFx0XHRsZXQgJElOUFVUID0gdGhpcy5jb25maWcucGFyZW50LmZpbmQoICdbZGF0YS1kZXBlbmQtaWQ9JyArICRjb250cm9sbGVyICsgJ10nICk7XG5cdFx0XHRcdFx0aWYoICRJTlBVVC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JGZpZWxkID0gJ1tkYXRhLXdwb25pb24tanNpZD1cIicgKyAkd3Bvbmlvbi5maWVsZElEKCAkSU5QVVQgKSArICdcIl06aW5wdXQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmNyZWF0ZVJ1bGUoICRmaWVsZCwgJGNvbmRpdGlvbiwgJHZhbHVlICkgKTtcblx0XHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5pbmNsdWRlKCB0aGlzLmVsZW1lbnQgKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnRGVwZW5kZW5jeSc6ICRkZXAsICdOZXN0YWJsZSBEZXBlbmRlbmN5JzogdGhpcy5jb25maWcubmVzdGFibGUgfSApO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdH1cbn1cblxuIiwiLyogZ2xvYmFsIGFyZ3VtZW50czp0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZTp0cnVlICovXG4vKiBnbG9iYWwgdGlwcHk6dHJ1ZSAqL1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgalF1ZXJ5ICkgPT4ge1xuXHQvKipcblx0ICogV1BPbmlvbiBSZWxhdGVkIEZ1bmN0aW9ucy5cblx0ICovXG5cdCQuZm4uZXh0ZW5kKCB7XG5cdFx0LyoqXG5cdFx0ICogQW5pbWF0ZSBDU1MgUmVsYXRlZCBGdW5jdGlvbnMuXG5cdFx0ICovXG5cdFx0YW5pbWF0ZUNzczogZnVuY3Rpb24oIGFuaW1hdGlvbk5hbWUsIGNhbGxiYWNrICkge1xuXHRcdFx0bGV0IGFuaW1hdGlvbkVuZCA9ICggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRsZXQgYW5pbWF0aW9ucyA9IHtcblx0XHRcdFx0XHRhbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuXHRcdFx0XHRcdE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcblx0XHRcdFx0XHRNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Zm9yKCBsZXQgdCBpbiBhbmltYXRpb25zICkge1xuXHRcdFx0XHRcdGlmKCBlbC5zdHlsZVsgdCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYW5pbWF0aW9uc1sgdCBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApICk7XG5cblx0XHRcdHRoaXMuYWRkQ2xhc3MoICdhbmltYXRlZCAnICsgYW5pbWF0aW9uTmFtZSApLm9uZSggYW5pbWF0aW9uRW5kLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCggdGhpcyApLnJlbW92ZUNsYXNzKCAnYW5pbWF0ZWQgJyArIGFuaW1hdGlvbk5hbWUgKTtcblx0XHRcdFx0aWYoIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRjYWxsYmFjayggJCggdGhpcyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEEgQ3VzdG9tIFdyYXAgQ2xhc3MgVG8gSGFuZGxlIFRpcHB5IEluc3RhbmNlXG5cdFx0ICogQHBhcmFtICRhcmd1bWVudHNcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHR0aXBweTogZnVuY3Rpb24oICRhcmd1bWVudHMgKSB7XG5cdFx0XHRsZXQgdGlwcHlfaGVscGVyID0ge1xuXHRcdFx0XHRjcmVhdGVfaW5zdGFuY2U6IGZ1bmN0aW9uKCAkZWxlbSwgJGFyZ3VtZW50cyApIHtcblx0XHRcdFx0XHQkYXJndW1lbnRzID0gKCB0eXBlb2YgJGFyZ3VtZW50cyA9PT0gJ3VuZGVmaW5lZCcgKSA/IHt9IDogJGFyZ3VtZW50cztcblx0XHRcdFx0XHRpZiggJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdGxldCAkX2luc3RhbmNlX2lkID0gJ1RpcHB5JyArIHdpbmRvdy53cG9uaW9uLmNvcmUucmFuZF9pZCgpO1xuXHRcdFx0XHRcdFx0JGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnLCAkX2luc3RhbmNlX2lkICk7XG5cblx0XHRcdFx0XHRcdGxldCAkdGl0bGUgICAgICA9ICRlbGVtLmF0dHIoICd0aXRsZScgKTtcblx0XHRcdFx0XHRcdGxldCAkZGF0YV90aXBweSA9ICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5JyApO1xuXG5cdFx0XHRcdFx0XHRpZiggJHRpdGxlICYmICR0aXRsZSAhPT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgJGFyZ3VtZW50cy5jb250ZW50ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0XHQkYXJndW1lbnRzLmNvbnRlbnQgPSAkdGl0bGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYoICRkYXRhX3RpcHB5ICYmICRkYXRhX3RpcHB5ICE9PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0aWYoIHR5cGVvZiAkYXJndW1lbnRzLmNvbnRlbnQgPT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRcdCRhcmd1bWVudHMuY29udGVudCA9ICRkYXRhX3RpcHB5O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdID0gdGlwcHkoICRlbGVtWyAwIF0sICRhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldF9pbnN0YW5jZTogZnVuY3Rpb24oICRlbGVtICkge1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgJF9pbnN0YW5jZV9pZCA9ICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApO1xuXHRcdFx0XHRcdHJldHVybiAoIHVuZGVmaW5lZCAhPT0gd2luZG93WyAkX2luc3RhbmNlX2lkIF0gKSA/IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdIDogZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGlmKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dGlwcHlfaGVscGVyLmNyZWF0ZV9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICksICRhcmd1bWVudHMgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkc3RhdHVzID0gdGlwcHlfaGVscGVyLmNyZWF0ZV9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICksICRhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuICggdHJ1ZSA9PT0gJHN0YXR1cyApID8gdGlwcHlfaGVscGVyLmdldF9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICkgKSA6IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIEFuIEFjdGl2ZSBpbnN0YW5jZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRpcHB5X2dldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICRfaW5zdGFuY2VfaWQgPSBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKTtcblx0XHRcdHJldHVybiAoIHVuZGVmaW5lZCAhPT0gd2luZG93WyAkX2luc3RhbmNlX2lkIF0gKSA/IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdIDogZmFsc2U7XG5cdFx0fSxcblx0fSApO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEEgQWJzdHJhY3QgQ2xhc3MgSW5zdGFuY2UuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJGNvbnR4dFxuXHQgKiBAcmV0dXJucyB7e2FqYXgoKj0sICo9KTogKiwganNfZXJyb3IoKik6IHZvaWQsIGluaXRfZmllbGQoKj0sICopOiB2b2lkLCBzZXRfYXJncygqKTogKiwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGpzX2Vycm9yX2hhbmRsZXIoKj0pOiB2b2lkLCBpZCgpOiAqLCBwbHVnaW5faWQoKTogKiwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICosIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBvcHRpb25zKCk6ICosIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBpbml0KCksIHJlbG9hZCgpOiAqLCBtb2R1bGUoKTogKiwgc2V0X2NvbnR4dCgqKTogKiwgY29udHh0OiAqLCBlbGVtZW50OiAqLCBob29rOiAqLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICp9fCp8d2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3R9XG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9maWVsZCA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0sICRjb250eHQgKTtcblxuXHQvKipcblx0ICogSGFuZGxlcyBXUE9uaW9uIE5vdGljZXMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX25vdGljZSA9ICggJGVsZW0gKSA9PiB7XG5cdFx0aWYoICRlbGVtLmZpbmQoICcud3Bvbmlvbi1yZW1vdmUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdCRlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJF9lbCA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24tcmVtb3ZlJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkX2VsLnNsaWRlVXAoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX2VsLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdFx0cmV0dXJuICRlbGVtO1xuXHRcdH1cblxuXHRcdGxldCAkYXV0byA9ICRlbGVtLmF0dHIoICdkYXRhLWF1dG9jbG9zZScgKTtcblx0XHRpZiggJGF1dG8gKSB7XG5cdFx0XHQkYXV0byA9IHBhcnNlSW50KCAkYXV0byApO1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHQkZWxlbS5zbGlkZVVwKCAnc2xvdycsICgpID0+IHtcblx0XHRcdFx0XHQkZWxlbS5yZW1vdmUoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSwgJGF1dG8gKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEJhc2ljIFdQT25pb24gSlMgU2V0dXAuXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9zZXR1cCA9ICgpID0+IHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggd2luZG93Lndwb25pb24uY29yZS5zZXR0aW5nc19hcmdzICkgKSB7XG5cdFx0XHRsZXQgJGNvcmUgPSB3aW5kb3cud3Bvbmlvbi5jb3JlLndpbmRvd0FyZ3MoICd3cG9uaW9uX2NvcmUnLCBmYWxzZSApO1xuXHRcdFx0bGV0ICR0YW5zID0gd2luZG93Lndwb25pb24uY29yZS53aW5kb3dBcmdzKCAnd3Bvbmlvbl9pbDhuJywgZmFsc2UgKTtcblx0XHRcdGlmKCBmYWxzZSA9PT0gJGNvcmUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy53cG9uaW9uLmNvcmUuc2V0dGluZ3NfYXJncyAgICA9ICRjb3JlO1xuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS50ZXh0ICAgICAgICAgICAgID0gJHRhbnM7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLmRlYnVnX2luZm8gICAgICAgPSBudWxsO1xuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS5maWVsZF9kZWJ1Z19pbmZvID0gbnVsbDtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBXaXRoIEEgRmllbGQgQ2FsbGJhY2sgSG9vay5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEBwYXJhbSAkY2FsbGJhY2tcblx0ICogQHBhcmFtICRtb2R1bGVcblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkID0gKCAkdHlwZSwgJGNhbGxiYWNrLCAkbW9kdWxlID0gJycgKSA9PiB7XG5cdFx0JG1vZHVsZSA9ICggJycgPT09ICRtb2R1bGUgKSA/ICcnIDogJG1vZHVsZSArICdfJztcblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICR0eXBlLCAnd3Bvbmlvbl9jb3JlJywgKCAkZWxlbSApID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdCRjYWxsYmFjayggJGVsZW0gKTtcblx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBhcmd1bWVudHMsICcgXFxuJyArIGUgKyAnICBcXG5Gb3IgOiB3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICR0eXBlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiBVc2VkIG91dHNpZGUgb2YgV1BPbmlvbiBUbyBDcmVhdGVcblx0ICogQHBhcmFtICRpbml0X21ldGhvZFxuXHQgKiBAcGFyYW0gJG1ldGhvZHNcblx0ICogQHJldHVybnMge3tpbml0OiAqLCBuZXcoKTogJGNsYXNzLCBwcm90b3R5cGU6ICRjbGFzc319XG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9jcmVhdGVfZmllbGQgPSAoICRpbml0X21ldGhvZCwgJG1ldGhvZHMgPSBmYWxzZSApID0+IHtcblx0XHRsZXQgJG9yZ19jbGFzcyA9IHJlcXVpcmUoICcuLi9jb3JlL2ZpZWxkJyApLmRlZmF1bHQ7XG5cdFx0bGV0ICRjbGFzcyAgICAgPSBjbGFzcyBleHRlbmRzICRvcmdfY2xhc3Mge1xuXHRcdH07XG5cblx0XHQkY2xhc3MucHJvdG90eXBlLmluaXQgPSAkaW5pdF9tZXRob2Q7XG5cblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJG1ldGhvZHMgKSApIHtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1ldGhvZHMgKSB7XG5cdFx0XHRcdGlmKCAkbWV0aG9kcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdCRjbGFzcy5wcm90b3R5cGVbICRrZXkgXSA9ICRtZXRob2RzWyAka2V5IF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICRjbGFzcztcblx0fTtcblxuXHQvKipcblx0ICogVHJpZ2dlcnMgQSBGaWVsZCBKUyBGdW5jdGlvbiBUbyBSZW5kZXIgaXQgUHJvcGVybHlcblx0ICogQHBhcmFtICRmaWVsZF90eXBlXG5cdCAqIEBwYXJhbSAkYXJndW1lbnRcblx0ICogQHBhcmFtICRtb2R1bGVcblx0ICogQHBhcmFtICRsb2dfZXJyXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9pbml0X2ZpZWxkID0gKCAkZmllbGRfdHlwZSwgJGFyZ3VtZW50LCAkbW9kdWxlID0gJycsICRsb2dfZXJyID0gdHJ1ZSApID0+IHtcblx0XHQkbW9kdWxlID0gKCAnJyA9PT0gJG1vZHVsZSApID8gJycgOiAkbW9kdWxlICsgJ18nO1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5ob29rcy5oYXNBY3Rpb24oICd3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICRmaWVsZF90eXBlICkgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25faW5pdF8nICsgJG1vZHVsZSArICdmaWVsZF8nICsgJGZpZWxkX3R5cGUsICRhcmd1bWVudCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiggdHJ1ZSA9PT0gJGxvZ19lcnIgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdXUE9uaW9uIEZpZWxkIFR5cGUgOiAnICsgJGZpZWxkX3R5cGUgKyAnIEluaXQgRnVuY3Rpb24gTm90IEZvdW5kJywgJ1xcbkFjdGlvbiBVc2VkIDogd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkZmllbGRfdHlwZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIGpRdWVyeSApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuLyoqXG4gKiBJbWFnZSBQT1BVUCBWaWV3IENsYXNzLlxuICovXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSGFuZGxlcyBJbWFnZSBQT1BVUCBWaWV3LlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGltYWdlID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICkgKSApID8gdGhpcy5lbGVtZW50LmF0dHIoICdzcmMnICkgOiB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICk7XG5cdFx0c3dhbCgge1xuXHRcdFx0aW1hZ2VVcmw6ICRpbWFnZSxcblx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0YmFja2Ryb3A6IGByZ2JhKDAsMCwwLDAuNDQpYFxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3BvcHVwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyByYW5kX21kNSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG4vKipcbiAqIFdQIEVkaXRvciBIZWxwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIFdQIEVkaXRvciBIZWxwZXJcblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRtY2VfZWRpdG9yICA9IHRpbnlNQ0VQcmVJbml0Lm1jZUluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JHF1aWNrX3RhZ3MgID0gdGlueU1DRVByZUluaXQucXRJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRORVdfSUQgICAgICA9ICd3cG9uaW9uLXdwLWVkaXRvci0nICsgcmFuZF9tZDUoKSxcblx0XHRcdFx0JHRleHRBcmVhICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5jbG9uZSgpLFxuXHRcdFx0XHQkYWN0dWFsX0lEICAgPSAkdGV4dEFyZWEuYXR0ciggJ2lkJyApLFxuXHRcdFx0XHQkYWN0dWFsX2h0bWwgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoKSxcblx0XHRcdFx0JHJlZ2V4ICAgICAgID0gbmV3IFJlZ0V4cCggJGFjdHVhbF9JRCwgXCJnXCIgKTtcblx0XHRcdCRhY3R1YWxfaHRtbCAgICAgPSAkYWN0dWFsX2h0bWwucmVwbGFjZSggJHJlZ2V4LCAkTkVXX0lEICk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCggJGFjdHVhbF9odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLnBhcmVudCgpLmFwcGVuZCggJHRleHRBcmVhICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhOm5vdCgjJyArICRhY3R1YWxfSUQgKyAnKScgKS5yZW1vdmUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuYXR0ciggJ2lkJywgJE5FV19JRCApO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRtY2VfZWRpdG9yICkgKSB7XG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcblx0XHRcdFx0dGlueW1jZS5pbml0KCAkbWNlX2VkaXRvciApO1xuXHRcdFx0XHR0aW55TUNFLmV4ZWNDb21tYW5kKCAnbWNlQWRkRWRpdG9yJywgZmFsc2UsICcjJyArICRORVdfSUQgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkcXVpY2tfdGFncyApICkge1xuXHRcdFx0XHQkcXVpY2tfdGFncy5pZCA9ICRORVdfSUQ7XG5cdFx0XHRcdHF1aWNrdGFncyggJHF1aWNrX3RhZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBUb29sVGlwXG4gKi9cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBIYW5kbGUgRWFjaCBBbmQgRXZlcnkgU2luZ2xlIEZpZWxkIFRvb2xUaXAuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkZmlkICAgICAgICAgPSB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZmllbGQtanNpZCcgKTtcblx0XHRsZXQgJHRvb2x0aXBfa2V5ID0gZmFsc2U7XG5cdFx0aWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24taGVscCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cG9uaW9uLWhlbHAnO1xuXHRcdH0gZWxzZSBpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi13cmFwLXRvb2x0aXAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3JhcF90b29sdGlwJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJGZpZCArICd0b29sdGlwJztcblx0XHR9XG5cblx0XHRsZXQgJGFyZyA9ICggdHJ1ZSA9PT0gJHdwb25pb24udmFsaWRfanNvbiggJGZpZCApICkgPyBKU09OLnBhcnNlKCAkZmlkICkgOiB0aGlzLm9wdGlvbiggJHRvb2x0aXBfa2V5LCBmYWxzZSApO1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSB7XG5cdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcblx0XHRcdGNhbkZldGNoOiB0cnVlXG5cdFx0fTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGFyZyApIHtcblx0XHRcdGxldCAkY2xhc3NUb0NoZWNrID0gWyAnZGF0YS10aXBweScsICdkYXRhLXRpcHB5LWFyZ3MnLCAndGlwcHktYXJncycgXTtcblx0XHRcdGxldCAkZm91bmQgICAgICAgID0gZmFsc2U7XG5cdFx0XHRmb3IoIGxldCAkayBpbiAkY2xhc3NUb0NoZWNrICkge1xuXHRcdFx0XHRsZXQgJGF0dHIgPSB0aGlzLmVsZW1lbnQuYXR0ciggJGNsYXNzVG9DaGVja1sgJGsgXSApO1xuXHRcdFx0XHRpZiggJGF0dHIgKSB7XG5cdFx0XHRcdFx0aWYoICR3cG9uaW9uLnZhbGlkX2pzb24oICRhdHRyICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJnICAgPSBKU09OLnBhcnNlKCAkYXR0ciApO1xuXHRcdFx0XHRcdFx0JGZvdW5kID0gJGNsYXNzVG9DaGVja1sgJGsgXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAkYXR0ciwgZmFsc2UgKSApIHtcblx0XHRcdFx0XHRcdCRhcmcgICA9IHRoaXMub3B0aW9uKCAkYXR0ciwgZmFsc2UgKTtcblx0XHRcdFx0XHRcdCRmb3VuZCA9ICRjbGFzc1RvQ2hlY2tbICRrIF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggJGFyZyApIHtcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcblx0XHRcdGlmKCAkYXJnLmltYWdlICE9PSB1bmRlZmluZWQgJiYgJGFyZy5pbWFnZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdGxldCAkaW1hZ2UgICAgICAgICAgPSAkYXJnLmltYWdlO1xuXHRcdFx0XHQkYXJnLmludGVyYWN0aXZlICAgID0gdHJ1ZTtcblx0XHRcdFx0JGFyZy5jb250ZW50ICAgICAgICA9ICdMb2FkaW5nLi4uJztcblx0XHRcdFx0Ly8kYXJnLmh0bWwgICAgICAgICAgID0gJyN3cG90cGltZyc7XG5cdFx0XHRcdCRhcmcudXBkYXRlRHVyYXRpb24gPSAyMDAwO1xuXHRcdFx0XHQkYXJnLm9uU2hvdyAgICAgICAgID0gYXN5bmMgZnVuY3Rpb24oIHRpcCApIHtcblx0XHRcdFx0XHRpZiggc3RhdGUuaXNGZXRjaGluZyB8fCAhc3RhdGUuY2FuRmV0Y2ggKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoICAgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCAkaW1hZ2UgKTtcblx0XHRcdFx0XHRcdGNvbnN0IGJsb2IgICAgID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXHRcdFx0XHRcdFx0Y29uc3QgdXJsICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdFx0XHRpZiggdGlwLnN0YXRlLmlzVmlzaWJsZSApIHtcblx0XHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICc8ZGl2IHN0eWxlPVwibWluLXdpZHRoOjI1cHg7bWluLWhlaWdodDoyNXB4O1wiPjxpbWcgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1wiIHNyYz1cIicgKyB1cmwgKyAnXCIvPjwvZGl2PicgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoIGBGZXRjaCBmYWlsZWQuICR7ZX1gICk7XG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcub25IaWRkZW4gICAgICAgPSAoIHRpcCApID0+IHtcblx0XHRcdFx0XHRzdGF0ZS5jYW5GZXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICdMb2FkaW5nLi4uJyApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLnBvcHBlck9wdGlvbnMgID0ge1xuXHRcdFx0XHRcdG1vZGlmaWVyczoge1xuXHRcdFx0XHRcdFx0cHJldmVudE92ZXJmbG93OiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aGlkZToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYXJnID0ge307XG5cdFx0fVxuXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmcuYXBwZW5kVG8gKSApIHtcblx0XHRcdCRhcmcuYXBwZW5kVG8gPSAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyB0aGlzLmlkKCkgKyAnXScgKVsgMCBdO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0ZGVsZXRlICRhcmcuaW1hZ2U7XG5cdFx0ZGVsZXRlICRhcmcuaWNvbjtcblx0XHR0aGlzLmVsZW1lbnQudGlwcHkoIHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcsICR0b29sdGlwX2tleSApICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0b29sdGlwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJyNidWxrX2VkaXQnLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGZpbmFsX2FyZ3MgPSB7IHBvc3RfaWRzOiBbXSB9LFxuXHRcdFx0XHQkYnVsa19lZGl0ICA9ICQoICcjYnVsay1lZGl0JyApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcjYnVsay10aXRsZXMnICkuY2hpbGRyZW4oKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JGZpbmFsX2FyZ3MucG9zdF9pZHMucHVzaCggJCggdGhpcyApLmF0dHIoICdpZCcgKS5yZXBsYWNlKCAvXih0dGxlKS9pLCAnJyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRidWxrX2VkaXQuZmluZCggJy53cG9uaW9uLXF1aWNrLWVkaXQtZmllbGRzZXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJCggdGhpcyApLnNlcmlhbGl6ZU9iamVjdCgpLCAkZmluYWxfYXJncyApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJ3NhdmUtYnVsay1lZGl0Jywge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0YXN5bmM6IGZhbHNlLFxuXHRcdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0XHRcdGRhdGE6ICRmaW5hbF9hcmdzLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBXUE9uaW9uX0d1dHRlbmJlcmcge1xuXHRjb25zdHJ1Y3RvciggJGlkID0gJycsICRhcmdzID0ge30gKSB7XG5cdFx0dGhpcy5pZCAgID0gJGlkO1xuXHRcdHRoaXMuYXJncyA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmdzICk7XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5zYXZlID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRoaXMuYXJncy5zYXZlID0gKCBibG9jayApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2F2ZV9oYW5kbGVyKCBibG9jayApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5lZGl0ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRoaXMuYXJncy5lZGl0ID0gKCBibG9jayApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWRpdF9oYW5kbGVyKCBibG9jayApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR3aW5kb3cud3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlKCB0aGlzLmlkLCB0aGlzLmFyZ3MgKTtcblx0fVxuXG5cdHNhdmVfaGFuZGxlciggYmxvY2sgKSB7XG5cdH1cblxuXHRlZGl0X2hhbmRsZXIoIGJsb2NrICkge1xuXHRcdGxldCBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcblxuXHRcdGxldCAkX3Bvc3RpZHMgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5KCBwYXJzZUludCggalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS52YWwoKSApICk7XG5cdFx0YmxvY2suYXR0cmlidXRlcy5wb3N0X2lkID0gJF9wb3N0aWRzO1xuXHRcdGxldCBibG9ja19pZCAgICAgICAgICAgICA9IGJsb2NrLmF0dHJpYnV0ZXMuYmxvY2tfaWQgPSBibG9jay5hdHRyaWJ1dGVzLmJsb2NrX2lkIHx8IGJsb2NrLmNsaWVudElkO1xuXHRcdGxldCAkcmVtb3RlICAgICAgICAgICAgICA9IGVsKCAnZm9ybScsIHtcblx0XHRcdGNsYXNzTmFtZTogJ3dwb25pb24tYmxvY2stZ3JvdXAtY29udGVudCcsXG5cdFx0XHQnZGF0YS1ibG9jay1pZCc6IGJsb2NrX2lkLFxuXHRcdH0sIFtcblx0XHRcdGVsKCB3aW5kb3cud3AuY29tcG9uZW50cy5TZXJ2ZXJTaWRlUmVuZGVyLCB7XG5cdFx0XHRcdGJsb2NrOiB0aGlzLmlkLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0cG9zdF9pZDogJF9wb3N0aWRzLFxuXHRcdFx0XHRcdGJsb2NrX2lkOiBibG9ja19pZCxcblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0XSApO1xuXG5cblx0XHRsZXQgY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzLnN0eWxlICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGlmKCB0aGlzLmFyZ3Muc3R5bGUgPT09ICdkZWZhdWx0JyApIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCggZWwoICdkaXYnLCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnYWNmLWJsb2NrLWdyb3VwLWhlYWRpbmcnLFxuXHRcdFx0XHR9LCBbXG5cdFx0XHRcdFx0ZWwoICdzcGFuJywge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnZGFzaGljb25zIGRhc2hpY29ucy0nICsgdGhpcy5hcmdzLmljb25cblx0XHRcdFx0XHR9ICksXG5cdFx0XHRcdFx0JyAnLFxuXHRcdFx0XHRcdHRoaXMuYXJncy50aXRsZSxcblx0XHRcdFx0XSApICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1ibG9jay1pZD1cIicgKyBibG9ja19pZCArICdcIl0nO1xuXG5cdFx0aWYoIGpRdWVyeSggc2VsZWN0b3IgKS5sZW5ndGggPCAxICkge1xuXHRcdH1cblxuXG5cdFx0LyppZiggJCggc2VsZWN0b3IgKS5sZW5ndGggPCAxICkge1xuXHRcdFx0JCggZG9jdW1lbnQgKS5vbiggJ2FjYl9zYXZlX2ZpZWxkcycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdHJ5VXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoIGJsb2NrLmlzU2VsZWN0ZWQgfHwgJCggc2VsZWN0b3IgKS5pcyggJzpob3ZlcicgKSApIHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCggYmxvY2sudXBkYXRlVGltZW91dCApO1xuXHRcdFx0XHRcdFx0YmxvY2sudXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoIHRyeVVwZGF0ZSwgNTAwICk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YmxvY2suc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0YWNmX2ZpZWxkczogYWNmLnNlcmlhbGl6ZSggJCggc2VsZWN0b3IgKSApWyAnYWNmJyBdLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCB0cnlVcGRhdGUsIDI1MCApO1xuXHRcdFx0fSApO1xuXHRcdH0qL1xuXHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdC8vICAgYWNmLmRvX2FjdGlvbigncmVhZHknLCAkKCdbZGF0YS1ibG9jay1pZD1cIicgKyBibG9ja19pZCArICdcIl0nKSk7XG5cdFx0Ly8gfSwgNTAwKTtcblxuXHRcdGNoaWxkcmVuLnB1c2goICRyZW1vdGUgKTtcblxuXHRcdHJldHVybiBlbCggJ2RpdicsIHsgY2xhc3NOYW1lOiAnd3Bvbmlvbi1ibG9jay1ncm91cC13cmFwcGVyJyB9LCBjaGlsZHJlbiApO1xuXG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0aWYoICF3aW5kb3cud3AgfHwgIXdpbmRvdy53cC5ibG9ja3MgfHwgIXdpbmRvdy53cC5lZGl0b3IgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdFx0Ly9sZXQgJGJsb2NrcyAgICAgPSB3aW5kb3cud3AuYmxvY2tzO1xuXHRcdFx0bGV0ICR3cG9fYmxvY2tzID0gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ3V0dGVuYmVyZ19ibG9ja3MnICk7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICR3cG9fYmxvY2tzICkgJiYgd2luZG93Lndwb25pb24uXy5pc0FycmF5KCAkd3BvX2Jsb2NrcyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICR3cG9fYmxvY2tzICkge1xuXHRcdFx0XHRcdGlmKCAkd3BvX2Jsb2Nrcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdFx0bmV3IFdQT25pb25fR3V0dGVuYmVyZyggJGtleSwgJHdwb19ibG9ja3NbICRrZXkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0LyoqXG5cdCAqIEZpeGVzIE1lZGlhIFBPUFVQIE1vZGFsIFRvIFdvcmsgV2l0aCBXUG9uaW9uLlxuXHQgKi9cblx0Y29uc3QgZml4X21lZGlhX3VpID0gKCkgPT4ge1xuXHRcdGxldCAkdGFibGUgID0galF1ZXJ5KCAnLmNvbXBhdC1hdHRhY2htZW50LWZpZWxkcycgKSxcblx0XHRcdCRmaWVsZHMgPSAkdGFibGUuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKTtcblx0XHQkZmllbGRzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG5cdFx0XHQkdGFibGUuYmVmb3JlKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5odG1sKCkgKTtcblx0XHR9ICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9zZXR1cCgpO1xuXHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkdGFibGUucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHR9O1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0aWYoICQoICcuY29tcGF0LWF0dGFjaG1lbnQtZmllbGRzJyApLmxlbmd0aCA+IDAgJiYgJCggJ2JvZHknICkuaGFzQ2xhc3MoICdwb3N0LXR5cGUtYXR0YWNobWVudCcgKSApIHtcblx0XHRcdGZpeF9tZWRpYV91aSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiggdHlwZW9mIHdwLm1lZGlhICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd3AubWVkaWEuZnJhbWVzLmJyb3dzZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdHdwLm1lZGlhLmZyYW1lcy5icm93c2Uub24oICdlZGl0OmF0dGFjaG1lbnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0Zml4X21lZGlhX3VpKCk7XG5cdFx0XHRcdFx0d3AubWVkaWEuZnJhbWVzLmVkaXQub24oICdhdHRhY2htZW50OmNvbXBhdDpyZWFkeScsICgpID0+IGZpeF9tZWRpYV91aSgpICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qKlxuICogV1BPbmlvbiBNZXRhYm94IE1vZHVsZSBIYW5kbGVyLlxuICovXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHQvKipcblx0ICogSW5pdHMgTW9kdWxlLlxuXHQgKi9cblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5tZW51KCk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnaDIuYWpheC1jb250YWluZXIgYnV0dG9uJywgdGhpcy5zYXZlX2hhbmRsZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIE1ldGFib3ggTWVudSdzXG5cdCAqL1xuXHRtZW51KCkge1xuXHRcdGxldCAkZWxlbSA9IHRoaXMuZWxlbWVudDtcblx0XHQkZWxlbS5vbiggJ2NsaWNrJywgJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSBhJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdkcm9wZG93bicgKSApIHtcblx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5pcyggJzp2aXNpYmxlJyApICkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSB1bCcgKS5zbGlkZVVwKCAnZmFzdCcgKTtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJGhyZWYgICAgICAgICAgID0gd2luZG93Lndwb25pb24uaGVscGVyLnVybF9wYXJhbXMoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWhyZWYnICkgKSxcblx0XHRcdFx0XHQkcGFyZW50ICAgICAgICAgPSAnd3Bvbmlvbi10YWItJyArICRocmVmWyAncGFyZW50LWlkJyBdLFxuXHRcdFx0XHRcdCRzZWN0aW9uICAgICAgICA9ICggJGhyZWZbICdzZWN0aW9uLWlkJyBdICE9PSB1bmRlZmluZWQgKSA/ICRwYXJlbnQgKyAnLScgKyAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gOiBmYWxzZSxcblx0XHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tcGFyZW50LXdyYXBzJyApLFxuXHRcdFx0XHRcdCRjdXJyZW50ICAgICAgICA9ICRlbGVtLmZpbmQoICdkaXYjJyArICRwYXJlbnQgKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdCRwYXJlbnRfYWN0aXZlcy5oaWRlKCk7XG5cblx0XHRcdFx0aWYoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICYmICRocmVmWyAncGFyZW50LWlkJyBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICcgZGl2IycgKyAkc2VjdGlvbiApLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRjdXJyZW50LnNob3coKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGEuYWN0aXZlICcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZSAnICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51ID4gbGkgPiBhJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGFbZGF0YS13cG9uaW9uLWlkPVwid3Bvbmlvbl9tZW51XycgKyAkaHJlZlsgJ3BhcmVudC1pZCcgXSArICdcIl0nIClcblx0XHRcdFx0XHQgLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEFqYXggU2F2ZSBIYW5kbGVyLlxuXHQgKiBAcGFyYW0gZVxuXHQgKi9cblx0c2F2ZV9oYW5kbGVyKCBlICkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHBhcmVudCA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0JGJhc2UgICA9ICRwYXJlbnQucGFyZW50KCkucGFyZW50KCksXG5cdFx0XHQkaGlkZGVuID0gJHBhcmVudC5maW5kKCAnZGl2Lndwb25pb24tbWV0YWJveC1zZWN1cmUtZGF0YScgKTtcblxuXHRcdCRiYXNlLmJsb2NrKCB7IG1lc3NhZ2U6IG51bGwsIG92ZXJsYXlDU1M6IHsgYmFja2dyb3VuZDogJyMwMDAnLCBvcGFjaXR5OiAwLjcgfSB9ICk7XG5cblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXHRcdGxldCAkZmllbGRzID0gJHBhcmVudC5wYXJlbnQoKS5maW5kKCAnOmlucHV0JyApO1xuXHRcdGxldCAkdmFsdWVzID0gJGZpZWxkcy5zZXJpYWxpemUoKTtcblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblxuXHRcdCR3cG9uaW9uLmFqYXgoICdzYXZlX21ldGFib3gnLCB7IGRhdGE6ICR2YWx1ZXMgfSwgZnVuY3Rpb24oIHJlcyApIHtcblx0XHRcdCRiYXNlLmh0bWwoIHJlcyApO1xuXHRcdFx0JGJhc2UudW5ibG9jaygpO1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRiYXNlLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XG5cdCQoIGZ1bmN0aW9uKCkge1xuXHRcdCQoICdkaXYucG9zdGJveC53cG9uaW9uLW1ldGFib3gnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9NZXRhYm94X01vZHVsZSggJCggdGhpcyApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG4vKipcbiAqIFdQT25pb24gUXVpY2sgRWRpdCBNb2R1bGUgSGFuZGxlci5cbiAqL1xuY2xhc3MgV1BPbmlvbl9RdWlja19FZGl0IGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHQvKipcblx0ICogTW9kdWxlIEluaXQuXG5cdCAqL1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLnBvc3RfaWQgPSB0aGlzLmNvbnR4dDtcblx0XHRsZXQgJGlkICAgICAgPSAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKSArICdfJyArIHRoaXMucG9zdF9pZDtcblx0XHR0aGlzLnZhbHVlcyAgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRpZCwgZmFsc2UgKTtcblxuXHRcdGlmKCB0aGlzLnZhbHVlcy5odG1sICkge1xuXHRcdFx0dGhpcy52YWx1ZXMuaHRtbCA9IGpRdWVyeSggdGhpcy52YWx1ZXMuaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmh0bWwoIHRoaXMudmFsdWVzLmh0bWwuZmluZCggJz4gZGl2JyApICk7XG5cdFx0fVxuXG5cdFx0d2luZG93Lndwb25pb25fZmllbGQoIHRoaXMuZWxlbWVudCApLnJlbG9hZCgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdGxldCAkbGlzdCA9ICQoICcjdGhlLWxpc3QnICk7XG5cdFx0aWYoICRsaXN0Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkbGlzdC5vbiggJ2NsaWNrJywgJy5lZGl0aW5saW5lJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBwb3N0X2lkID0galF1ZXJ5KCB0aGlzICkuY2xvc2VzdCggJ3RyJyApLmF0dHIoICdpZCcgKTtcblx0XHRcdFx0cG9zdF9pZCAgICAgPSBwb3N0X2lkLnJlcGxhY2UoICdwb3N0LScsICcnICk7XG5cdFx0XHRcdCQoICd0ciNlZGl0LScgKyBwb3N0X2lkICkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRuZXcgV1BPbmlvbl9RdWlja19FZGl0KCBqUXVlcnkoIHRoaXMgKSwgcG9zdF9pZCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdGlvbiBmcm9tICcuLi9jb3JlL3ZhbGlkYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93ICkgPT4ge1xuXHRqUXVlcnkoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHQvKipcblx0XHQgKiBHbG9iYWwgVmFyaWFibGVcblx0XHQgKiB3aW5kb3cud3Bvbmlvbi52YyAvIHdpbmRvdy53cG9uaW9uX3ZjXG5cdFx0ICogQHR5cGUge3tmaWVsZHM6IHthYnN0cmFjdDogKHtuZXcoKj0sICo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIG5ldygqPSwgKj0sICo9KToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfSwgbmV3KCo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIHByb3RvdHlwZToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfX18Kil9fX1cblx0XHQgKi9cblx0XHR3aW5kb3cud3Bvbmlvbi52YyA9IHdpbmRvdy53cG9uaW9uX3ZjID0ge1xuXHRcdFx0ZmllbGRzOiB7XG5cdFx0XHRcdGFic3RyYWN0OiByZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvZmllbGQnICkuZGVmYXVsdCxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFNpbXBsZSBGdW5jdGlvbiBUbyBJbml0IFdQb25pb24gVkMgTW9kdWxlLlxuXHRcdCAqL1xuXHRcdHdpbmRvdy53cG9uaW9uX3ZjX2luaXQgPSAoKSA9PiB7XG5cdFx0XHRsZXQgJGVsZW1lbnQgPSBqUXVlcnkoICcud3Bvbmlvbi1mcmFtZXdvcmsud3Bvbmlvbi1tb2R1bGUtdmMnICk7XG5cblx0XHRcdGlmKCAkZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHR3cG9uaW9uX3NldHVwKCk7XG5cblx0XHRcdFx0JGVsZW1lbnQuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoIGpRdWVyeSggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fdmNfZmllbGQoIGpRdWVyeSggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSGFuZGxlcyBXUE9uaW9uIFZDIEZpZWxkIERlcGVuZGVuY3kuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkZWxlbWVudCwge30sIHtcblx0XHRcdFx0XHRsb2c6IGZhbHNlLFxuXHRcdFx0XHRcdHNob3c6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGhpZGU6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZVVwKCk7XG5cdFx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLmFkZENsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBIYW5kbGVzIFdQT25pb24gVkMgRmllbGQgVmFsaWRhdGlvbnMuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9WYWxpZGF0aW9uKCBqUXVlcnkoICcud3BiX2VkaXRfZm9ybV9lbGVtZW50cycgKSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBXUG9uaW9uIFZDIEZpZWxkIENsYXNzIEluc3N0YW5jZSBDcmVhdG9yLlxuXHRcdCAqIEBwYXJhbSAkZWxlbVxuXHRcdCAqIEBwYXJhbSAkY29udHh0XG5cdFx0ICogQHJldHVybnMge3dpbmRvdy53cG9uaW9uLnZjLmZpZWxkcy5hYnN0cmFjdH1cblx0XHQgKi9cblx0XHR3aW5kb3cud3Bvbmlvbl92Y19maWVsZCA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi52Yy5maWVsZHMuYWJzdHJhY3QoICRlbGVtLCAkY29udHh0ICk7XG5cblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiBVc2VkIG91dHNpZGUgb2YgV1BPbmlvbiBUbyBDcmVhdGUgVkMgRmllbGRcblx0XHQgKiBAcGFyYW0gJGluaXRfbWV0aG9kXG5cdFx0ICogQHBhcmFtICRtZXRob2RzXG5cdFx0ICogQHJldHVybnMge3tpbml0OiAqLCBuZXcoKTogJGNsYXNzLCBwcm90b3R5cGU6ICRjbGFzc319XG5cdFx0ICovXG5cdFx0d2luZG93Lndwb25pb25fY3JlYXRlX3ZjX2ZpZWxkID0gKCAkaW5pdF9tZXRob2QsICRtZXRob2RzID0gZmFsc2UgKSA9PiB7XG5cdFx0XHRsZXQgJG9yZ19jbGFzcyA9IHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9maWVsZCcgKS5kZWZhdWx0O1xuXHRcdFx0bGV0ICRjbGFzcyAgICAgPSBjbGFzcyBleHRlbmRzICRvcmdfY2xhc3Mge1xuXHRcdFx0fTtcblxuXHRcdFx0JGNsYXNzLnByb3RvdHlwZS5pbml0ID0gJGluaXRfbWV0aG9kO1xuXG5cdFx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJG1ldGhvZHMgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkbWV0aG9kcyApIHtcblx0XHRcdFx0XHRpZiggJG1ldGhvZHMuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdCRjbGFzcy5wcm90b3R5cGVbICRrZXkgXSA9ICRtZXRob2RzWyAka2V5IF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGNsYXNzO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBMb2FkcyBBbGwgUmVxdWlyZWQgRmllbGRzLlxuXHRcdCAqL1xuXHRcdHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9zaW5nbGUtdmFsdWUnICk7XG5cdFx0cmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL2FsbC1maWVsZHMnICk7XG5cdFx0cmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL3NlbGVjdCcgKTtcblx0XHRyZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvY2hlY2tib3gtcmFkaW8nICk7XG5cdH0gKTtcbn0gKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5pc192Y19wYXJhbV9lbGVtKCkgKSB7XG5cdFx0XHR0aGlzLmlucHV0X2NoYW5nZSgpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5pbnB1dF9jaGFuZ2UoKSApO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcsICgpID0+IHRoaXMuaW5wdXRfY2hhbmdlKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24gSG9va3MgV2l0aCA6aW5wdXQgY2hhbmdlIGV2ZW4gYW5kIHRyaWdnZXJzIHNhdmUgZnVuY3Rpb24uXG5cdCAqL1xuXHRpbnB1dF9jaGFuZ2UoKSB7XG5cdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmUoIHRoaXMuaW5wdXRfZGF0YSgpLCAnc29ydGVyX3ZhbHVlcycgKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2tleXZhbHVlX3BhaXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2JhY2tncm91bmQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3dwX2xpbmtzJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdmaWVsZHNldCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYWNjb3JkaW9uJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdncm91cCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnanF1ZXJ5X3RhYicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc29ydGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjbG9uZV9lbGVtZW50JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdmb250X3NlbGVjdG9yJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdkYXRlX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcbn0gKSggd2luZG93ICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX1ZDX0ZpZWxkIGZyb20gJy4vZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fVkNfRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmlzX3ZjX3BhcmFtX2VsZW0oKSApIHtcblx0XHRcdGlmKCB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWVsZW1lbnQtcmFkaW8nICkgJiYgMCA9PT0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1jaGVja2JveC1yYWRpby1ncm91cCcgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGUoKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAoIHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkubGVuZ3RoID4gMSApICkge1xuXHRcdFx0XHR0aGlzLmhhbmRsZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICgpID0+IHRoaXMuaGFuZGxlKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0XHRcdGxldCAkdmFsICA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuYXR0ciggJ3ZhbHVlJyApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmF0dHIoICdkYXRhLW9yZ3ZhbCcsICR2YWwgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlzLmhhbmRsZV9zaW5nbGVfY2hhbmdlKCBqUXVlcnkoIHRoaXMgKSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHRoaXMuaGFuZGxlX3NpbmdsZV9jaGFuZ2UoIGpRdWVyeSggdGhpcyApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBTaW5nbGUgQ2hlY2tib3ggQ2hhbmdlIEV2ZW50cy5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRoYW5kbGVfc2luZ2xlX2NoYW5nZSggJGVsZW0gKSB7XG5cdFx0aWYoICRlbGVtLmlzKCAnOmNoZWNrZWQnICkgKSB7XG5cdFx0XHQkZWxlbS52YWwoICRlbGVtLmF0dHIoICdkYXRhLW9yZ3ZhbCcgKSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZWxlbS52YWwoICdmYWxzZScgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBNdWx0aXBsZSBDaGVja2JveGVzXG5cdCAqL1xuXHRoYW5kbGUoKSB7XG5cdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NoZWNrYm94X3JhZGlvJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV9zZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BhbGV0dGUnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N3aXRjaGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xufSApKCB3aW5kb3cgKTtcbiIsIi8qIGdsb2JhbCB3cG9uaW9uX2luaXRfZmllbGQ6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vLi4vY29yZS9maWVsZCc7XG5cbmNvbnN0IGJhc2U2NF9lbmNvZGUgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5iYXNlNjRfZW5jb2RlO1xuY29uc3QgcmF3dXJsZW5jb2RlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLnJhd3VybGVuY29kZTtcblxuLyoqXG4gKiBDdXN0b20gVkMgQWJzdHJhY3QgRmllbGQgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udGV4dFxuXHQgKiBAcGFyYW0gJGNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQsICRjb25maWcgPSB7fSApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgVmlzdWFsIENvbXBvc2VyIFBhcmFtIG5hbWUuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IHBhcmFtX25hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5kYXRhKCAncGFyYW0tbmFtZScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgQW5kIENvbnZlcnRzIFZhbHVlIFRvIFNhdmUgaW50byBWQy5cblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHBhcmFtICR0eXBlXG5cdCAqL1xuXHRzYXZlKCAkc2F2ZV9kYXRhLCAkdHlwZSApIHtcblx0XHRpZiggJHNhdmVfZGF0YSA9PT0gbnVsbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgJHZhbHVlID0gJyc7XG5cblx0XHRpZiggJHNhdmVfZGF0YSAhPT0gJycgKSB7XG5cdFx0XHRpZiggdHlwZW9mICRzYXZlX2RhdGEgPT09ICdvYmplY3QnICYmICR0eXBlID09PSAnYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLnNpbXBsZV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdrZXlfdmFsdWVfYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLmtleV92YWx1ZV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdrZXlfdmFsdWVfbXVsdGlfYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLmtleV92YWx1ZV9tdWx0aV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdzb3J0ZXJfdmFsdWVzJyApIHtcblx0XHRcdFx0JHZhbHVlID0gdGhpcy5zb3J0ZXJfdmFsdWVzKCAkc2F2ZV9kYXRhICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMudmNfc2F2ZSggJHZhbHVlICk7XG5cdH1cblxuXHQvKipcblx0ICogU2F2ZXMgR2l2ZW4gVmFsdWUgVG8gVmlzdWFsIENvbXBvc2VyLlxuXHQgKiBAcGFyYW0gJHBhcmFtX25hbWVcblx0ICogQHBhcmFtICR2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHZjX3NhdmUoICR2YWx1ZSwgJHBhcmFtX25hbWUgPSB0aGlzLnBhcmFtX25hbWUgKSB7XG5cdFx0bGV0ICRrZXkgPSAnZGl2I3dwb25pb24tdmMtc2V0dGluZ3MnO1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoICc8ZGl2IGlkPVwid3Bvbmlvbi12Yy1zZXR0aW5nc1wiIGNsYXNzPVwiaGlkZGVuXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO3Zpc2liaWxpdHk6IGhpZGRlbjtcIiA+PC9kaXY+JyApO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdGxldCAkcGFyZW50ID0gdGhpcy5lbGVtZW50LmZpbmQoICRrZXkgKTtcblx0XHRcdGlmKCAkcGFyZW50LmZpbmQoICc+ICMnICsgJHBhcmFtX25hbWUgKyAnLndwYl92Y19wYXJhbV92YWx1ZScgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKCBqUXVlcnkoICc8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgaWQ9XCInICsgJHBhcmFtX25hbWUgKyAnXCIgbmFtZT1cIicgKyAkcGFyYW1fbmFtZSArICdcIiBjbGFzcz1cIndwYl92Y19wYXJhbV92YWx1ZVwiIC8+JyApICk7XG5cdFx0XHR9XG5cblx0XHRcdCRwYXJlbnQuZmluZCggJz4gIycgKyAkcGFyYW1fbmFtZSArICcud3BiX3ZjX3BhcmFtX3ZhbHVlJyApLnZhbCggJHZhbHVlICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIEFuIEFycmF5IEludG8gU3RyaW5nIFVzaW5nICxcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzaW1wbGVfYXJyYXkoICRzYXZlX2RhdGEgKSB7XG5cdFx0cmV0dXJuICRzYXZlX2RhdGEuam9pbiggJywnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgQW4gQXJyYXkgSW50byBLZXl2YWx1ZSBhcyBiZWxvd1xuXHQgKiBrZXk6dmFsdWV8a2V5Mjp2YWx1ZTJcblx0ICpcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGtleV92YWx1ZV9hcnJheSggJHNhdmVfZGF0YSApIHtcblx0XHRsZXQgJHIgPSBbXTtcblx0XHRqUXVlcnkuZWFjaCggJHNhdmVfZGF0YSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdGxldCAkcyA9ICRrICsgJzonICsgJHY7XG5cdFx0XHQkci5wdXNoKCAkcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gJHIuam9pbiggJ3wnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgTXVsdGlwbGUgQXJyYXkgYXMgYmVsb3dcblx0ICoga2V5OnZhbHVlLHZhbHVlMnxrZXkyOnZhbHVlMyx2YWx1ZTRcblx0ICpcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGtleV92YWx1ZV9tdWx0aV9hcnJheSggJHNhdmVfZGF0YSApIHtcblx0XHRsZXQgJHIgPSBbXTtcblx0XHRqUXVlcnkuZWFjaCggJHNhdmVfZGF0YSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdGlmKCB0eXBlb2YgJHYgPT09ICdvYmplY3QnICkge1xuXHRcdFx0XHQkdiA9ICR2LmpvaW4oICcsJyApO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICRzID0gJGsgKyAnOicgKyAkdjtcblx0XHRcdCRyLnB1c2goICRzICk7XG5cdFx0fSApO1xuXHRcdHJldHVybiAkci5qb2luKCAnfCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJHNhdmVfZGF0YVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHNvcnRlcl92YWx1ZXMoICRzYXZlX2RhdGEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZW5jb2RlX2NvbnRlbnQoIEpTT04uc3RyaW5naWZ5KCAkc2F2ZV9kYXRhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFbmNvZGVzIFN0cmluZyBJbnRvIEJhc2U2NC5cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqL1xuXHRlbmNvZGVfY29udGVudCggJGRhdGEgKSB7XG5cdFx0cmV0dXJuIGJhc2U2NF9lbmNvZGUoIHJhd3VybGVuY29kZSggJGRhdGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBnaXZlbiBlbGVtZW50IGlzIGhvb2tlZCBUbyBWaXN1YWwgQ29tcG9zZXIuXG5cdCAqIEBwYXJhbSAkcGFyZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0aXNfdmNfcGFyYW1fZWxlbSggJHBhcmVudCA9IHRoaXMuZWxlbWVudCApIHtcblx0XHRpZiggJHBhcmVudC5kYXRhKCAncGFyYW0tbmFtZScgKSA9PT0gdW5kZWZpbmVkIHx8ICRwYXJlbnQuZGF0YSggJ3BhcmFtLW5hbWUnICkgPT09ICcnICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBTaW5nbGUgRmllbGQuXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGluaXRfc2luZ2xlX2ZpZWxkKCAkdHlwZSwgJGVsZW0gKSB7XG5cdFx0d3Bvbmlvbl9pbml0X2ZpZWxkKCAkdHlwZSwgJGVsZW0sICd2YycsIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgSW5wdXQgVmFsdWVzIEludG8gSlMvUEhQIE9iamVjdC9BcnJheSBhbmQgcmV0dXJucyBpdC5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRpbnB1dF9kYXRhKCkge1xuXHRcdGxldCAkZGF0YSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0Om5vdCgud3BiX3ZjX3BhcmFtX3ZhbHVlKScgKS5zZXJpYWxpemVPYmplY3QoKTtcblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRkYXRhWyB0aGlzLnBhcmFtX25hbWUgXSApICkge1xuXHRcdFx0cmV0dXJuICRkYXRhWyB0aGlzLnBhcmFtX25hbWUgXTtcblx0XHR9XG5cdFx0cmV0dXJuICRkYXRhO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5pc192Y19wYXJhbV9lbGVtKCkgKSB7XG5cdFx0XHRsZXQgJHNlbGVjdCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0JyApO1xuXHRcdFx0aWYoICRzZWxlY3QubGVuZ3RoID09PSAxICYmICdtdWx0aXBsZScgPT09ICRzZWxlY3QuYXR0ciggJ211bHRpcGxlJyApICkge1xuXHRcdFx0XHR0aGlzLnNhdmUoICRzZWxlY3QudmFsKCksICdhcnJheScgKTtcblx0XHRcdFx0JHNlbGVjdC5vbiggJ2NoYW5nZScsICggZSApID0+IHRoaXMuc2F2ZSggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSwgJ2FycmF5JyApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4ge1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG59ICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fVkNfRmllbGQgZnJvbSAnLi9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9WQ19GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuaXNfdmNfcGFyYW1fZWxlbSgpICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5hZGRDbGFzcyggJ3dwYl92Y19wYXJhbV92YWx1ZScgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpY29uX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ2FsbGVyeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcbn0gKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggKCkgPT4ge1xuXHRcdCQoICcjd29vY29tbWVyY2UtcHJvZHVjdC1kYXRhJyApLm9uKCAnd29vY29tbWVyY2VfdmFyaWF0aW9uc19sb2FkZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAnLndwb25pb24tZnJhbWV3b3JrLndwb25pb24td29vY29tbWVyY2UtdmFyaWF0aW9uJyApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHRcdCQoICcjdmFyaWFibGVfcHJvZHVjdF9vcHRpb25zJyApLm9uKCAnd29vY29tbWVyY2VfdmFyaWF0aW9uc19hZGRlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICcud3Bvbmlvbi1mcmFtZXdvcmsud3Bvbmlvbi13b29jb21tZXJjZS12YXJpYXRpb24nICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuL2NvcmUvZGVwZW5kZW5jeSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0b3IgZnJvbSAnLi9jb3JlL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlSG9va3MgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuLy8gVlNQIEpTIEhlbHBlciBHbG9iYWwuXG53aW5kb3cudnNwX2pzX2hlbHBlciA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApO1xuXG5yZXF1aXJlKCAnLi9oZWxwZXJzL2Z1bmN0aW9ucycgKTtcblxuLy8gV1BPbmlvbiBDb3JlIFNvdXJjZS5cbndpbmRvdy53cG9uaW9uID0gd2luZG93Lndwb25pb24gfHwgT2JqZWN0LmNyZWF0ZSgge1xuXHQvKipcblx0ICogTG9kYXNoIG5vQ29uZmxpY3QgVmFyaWFibGUuXG5cdCAqL1xuXHRfOiB3aW5kb3cubG9kYXNoLm5vQ29uZmxpY3QoKSxcblxuXHQvKipcblx0ICogQ3VyYXRlZCBjb2xsZWN0aW9uIG9mIHVzZWZ1bCBKYXZhU2NyaXB0IHNuaXBwZXRzLlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3ZzcC1qcy1oZWxwZXJcblx0ICovXG5cdGhlbHBlcjogd2luZG93LnZzcF9qc19oZWxwZXIsXG5cblx0LyoqXG5cdCAqIEEgbGlnaHR3ZWlnaHQgJiBlZmZpY2llbnQgRXZlbnRNYW5hZ2VyIGZvciBKYXZhU2NyaXB0LlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0B3b3JkcHJlc3MvaG9va3Ncblx0ICovXG5cdGhvb2tzOiBjcmVhdGVIb29rcygpLFxuXG5cdC8qKlxuXHQgKiBXUG9uaW9uIE1vZHVsZXMuXG5cdCAqL1xuXHRtZXRhYm94OiByZXF1aXJlKCAnLi9tb2R1bGVzL21ldGFib3gnICkuZGVmYXVsdCxcblx0bWVkaWFfZmllbGRzOiByZXF1aXJlKCAnLi9tb2R1bGVzL21lZGlhLWZpZWxkcycgKS5kZWZhdWx0LFxuXHRidWxrX2VkaXQ6IHJlcXVpcmUoICcuL21vZHVsZXMvYnVsay1lZGl0JyApLmRlZmF1bHQsXG5cdGd1dHRlbmJlcmc6IHJlcXVpcmUoICcuL21vZHVsZXMvZ3V0dGVuYmVyZycgKS5kZWZhdWx0LFxuXHR3b29jb21tZXJjZTogcmVxdWlyZSggJy4vbW9kdWxlcy93b29jb21tZXJjZScgKS5kZWZhdWx0LFxuXHRxdWlja19lZGl0OiByZXF1aXJlKCAnLi9tb2R1bGVzL3F1aWNrLWVkaXQnICkuZGVmYXVsdCxcblx0dmlzdWFsX2NvbXBvc2VyOiByZXF1aXJlKCAnLi9tb2R1bGVzL3Zpc3VhbC1jb21wb3NlcicgKS5kZWZhdWx0LFxuXHRtb2RhbDogcmVxdWlyZSggJy4uL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwnICkuZGVmYXVsdCxcblx0YWpheGVyOiByZXF1aXJlKCAnLi9jb3JlL2FqYXhlcicgKS5XUE9uaW9uX0FqYXhlcixcblx0YWpheDogcmVxdWlyZSggJy4vY29yZS9hamF4ZXInICkuZGVmYXVsdCxcblx0ZGVidWc6IHJlcXVpcmUoICcuL2NvcmUvZGVidWcnICkuZGVmYXVsdCxcblx0Y29yZTogcmVxdWlyZSggJy4vY29yZS9jb3JlJyApLmRlZmF1bHQsXG5cdGZpZWxkX2Fic3RyYWN0OiByZXF1aXJlKCAnLi9jb3JlL2ZpZWxkJyApLmRlZmF1bHQsXG59ICk7XG5cbi8vIENvcmUgRmllbGRzLlxud2luZG93Lndwb25pb24uZmllbGRzID0gT2JqZWN0LmNyZWF0ZSgge1xuXHR0ZXh0OiByZXF1aXJlKCAnLi9maWVsZHMvdGV4dCcgKS5kZWZhdWx0LFxuXHR0ZXh0YXJlYTogcmVxdWlyZSggJy4vZmllbGRzL3RleHRhcmVhJyApLmRlZmF1bHQsXG5cdGJhY2tncm91bmQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrZ3JvdW5kJyApLmRlZmF1bHQsXG5cdGltYWdlX3NlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRzd2l0Y2hlcjogcmVxdWlyZSggJy4vZmllbGRzL3N3aXRjaGVyJyApLmRlZmF1bHQsXG5cdGNvbG9yX3BhbGV0dGU6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9wYWxldHRlJyApLmRlZmF1bHQsXG5cdHNlbGVjdDogcmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdCcgKS5kZWZhdWx0LFxuXHRzZWxlY3QyOiByZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0MicgKS5kZWZhdWx0LFxuXHRjaG9zZW46IHJlcXVpcmUoICcuL2ZpZWxkcy9jaG9zZW4nICkuZGVmYXVsdCxcblx0aWNvbl9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9pY29uX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRmb250X3NlbGVjdG9yOiByZXF1aXJlKCAnLi9maWVsZHMvZm9udF9zZWxlY3RvcicgKS5kZWZhdWx0LFxuXHRhY2NvcmRpb246IHJlcXVpcmUoICcuL2ZpZWxkcy9hY2NvcmRpb24nICkuZGVmYXVsdCxcblx0Z3JvdXA6IHJlcXVpcmUoICcuL2ZpZWxkcy9ncm91cCcgKS5kZWZhdWx0LFxuXHR3cF9lZGl0b3I6IHJlcXVpcmUoICcuL2ZpZWxkcy93cF9lZGl0b3InICkuZGVmYXVsdCxcblx0cmVsb2FkX3dwX2VkaXRvcjogcmVxdWlyZSggJy4vaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yJyApLmRlZmF1bHQsXG5cdGZpZWxkc2V0OiByZXF1aXJlKCAnLi9maWVsZHMvZmllbGRzZXQnICkuZGVmYXVsdCxcblx0aW5wdXRtYXNrOiByZXF1aXJlKCAnLi9maWVsZHMvaW5wdXRtYXNrJyApLmRlZmF1bHQsXG5cdHdwX2xpbmtzOiByZXF1aXJlKCAnLi9maWVsZHMvd3BfbGlua3MnICkuZGVmYXVsdCxcblx0Y2hlY2tib3hfcmFkaW86IHJlcXVpcmUoICcuL2ZpZWxkcy9jaGVja2JveF9yYWRpbycgKS5kZWZhdWx0LFxuXHRrZXl2YWx1ZV9wYWlyOiByZXF1aXJlKCAnLi9maWVsZHMva2V5dmFsdWVfcGFpcicgKS5kZWZhdWx0LFxuXHRjb2xvcl9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9waWNrZXInICkuZGVmYXVsdCxcblx0ZGF0ZV9waWNrZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9kYXRlX3BpY2tlcicgKS5kZWZhdWx0LFxuXHRnYWxsZXJ5OiByZXF1aXJlKCAnLi9maWVsZHMvZ2FsbGVyeScgKS5kZWZhdWx0LFxuXHRpbWFnZV9wb3B1cDogcmVxdWlyZSggJy4vaGVscGVycy9pbWFnZV9wb3B1cCcgKS5kZWZhdWx0LFxuXHR1cGxvYWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy91cGxvYWQnICkuZGVmYXVsdCxcblx0aW1hZ2VfdXBsb2FkOiByZXF1aXJlKCAnLi9maWVsZHMvaW1hZ2VfdXBsb2FkJyApLmRlZmF1bHQsXG5cdGpxdWVyeV90YWI6IHJlcXVpcmUoICcuL2ZpZWxkcy9qcXVlcnlfdGFiJyApLmRlZmF1bHQsXG5cdHRvb2x0aXA6IHJlcXVpcmUoICcuL2hlbHBlcnMvdG9vbHRpcCcgKS5kZWZhdWx0LFxuXHRjbG9uZV9lbGVtZW50OiByZXF1aXJlKCAnLi9maWVsZHMvY2xvbmVfZWxlbWVudCcgKS5kZWZhdWx0LFxuXHRzb3J0ZXI6IHJlcXVpcmUoICcuL2ZpZWxkcy9zb3J0ZXInICkuZGVmYXVsdCxcblx0Z29vZ2xlX21hcHM6IHJlcXVpcmUoICcuL2ZpZWxkcy9nb29nbGVfbWFwcycgKS5kZWZhdWx0LFxuXHR0eXBvZ3JhcGh5OiByZXF1aXJlKCAnLi9maWVsZHMvdHlwb2dyYXBoeScgKS5kZWZhdWx0LFxuXHRvZW1iZWQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9vZW1iZWQnICkuZGVmYXVsdCxcblx0aGVhZGluZzogcmVxdWlyZSggJy4vZmllbGRzL2hlYWRpbmcnICkuZGVmYXVsdCxcblx0c3ViaGVhZGluZzogcmVxdWlyZSggJy4vZmllbGRzL3N1YmhlYWRpbmcnICkuZGVmYXVsdCxcblx0amFtYm9fY29udGVudDogcmVxdWlyZSggJy4vZmllbGRzL2phbWJvX2NvbnRlbnQnICkuZGVmYXVsdCxcblx0bm90aWNlOiByZXF1aXJlKCAnLi9maWVsZHMvbm90aWNlJyApLmRlZmF1bHQsXG5cdGNvbnRlbnQ6IHJlcXVpcmUoICcuL2ZpZWxkcy9jb250ZW50JyApLmRlZmF1bHQsXG5cdGJhY2t1cDogcmVxdWlyZSggJy4vZmllbGRzL2JhY2t1cCcgKS5kZWZhdWx0LFxufSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICggKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgJCwgJHdwbyApID0+IHtcblx0Ly8gRG9jdW1lbnQgT24gTG9hZC5cblx0JCggKCkgPT4ge1xuXHRcdHdpbmRvdy53cG9uaW9uX3NldHVwKCk7XG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl90aGVtZV9pbml0JywgJCggdGhpcyApICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdH1cblx0fSApO1xuXG5cdC8vIFdpbmRvdyBPbiBMb2FkLlxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoICgpID0+IHtcblxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfaW5pdCcgKTtcblxuXHRcdGxldCAkd3BvZl9kaXYgPSAkKCAnLndwb25pb24tZnJhbWV3b3JrOm5vdCgud3Bvbmlvbi1tb2R1bGUtcXVpY2tfZWRpdC1mcmFtZXdvcmspJyApO1xuXG5cdFx0d2luZG93Lndwb25pb25fbm90aWNlKCAkd3BvZl9kaXYuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3Bfbm90aWNlLCAud3Bvbmlvbi1lbGVtZW50LW5vdGljZScgKSApO1xuXG5cdFx0d2luZG93Lndwb25pb24uY29yZS5zdWJtZW51X2luZGljYXRvciggJCggZG9jdW1lbnQgKS5maW5kKCAnLndwb25pb24tc3VibWVudS1pJyApICk7XG5cblx0XHQvLyBUcmlnZ2VycyBGaWVsZCBEZWJ1ZyBEYXRhLlxuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlID4gc3Ryb25nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcblx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LWRvd24nICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctcmlnaHQnICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gVHJpZ2dlcnMgSG9vayBXaXRoIFdpZGdldHMuXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ3dpZGdldC1hZGRlZCB3aWRnZXQtdXBkYXRlZCcsIGZ1bmN0aW9uKCBldmVudCwgJHdpZGdldCApIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkd2lkZ2V0ICkucmVsb2FkKCk7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkd2lkZ2V0ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gVHJpZ2dlcnMgV2hlbiBOZXcgTWVudSBJdGVtIEFkZGVkLlxuXHRcdCQoIGRvY3VtZW50ICkub24oICdtZW51LWl0ZW0tYWRkZWQnLCBmdW5jdGlvbiggZXZlbnQsICRtZW51ICkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRtZW51ICkucmVsb2FkKCk7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkbWVudSApO1xuXHRcdH0gKTtcblxuXG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0Ly8gUmVuZGVycyBWYWxpZGF0aW9uLlxuXHRcdFx0bmV3IFdQT25pb25fVmFsaWRhdG9yKCk7XG5cblx0XHRcdC8vIEhhbmRsZXMgRmllbGRzIGluaXQuXG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkKCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJCggdGhpcyApICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHR9XG5cblx0XHQkd3BvLmNvcmUubG9hZGluZ19zY3JlZW4oICR3cG9mX2RpdiwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0JyApO1xuXG5cdH0gKSApO1xuXG5cdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9sb2FkZWQnICk7XG5cbn0gKSggd2luZG93LCBkb2N1bWVudCwgd3AsIGpRdWVyeSwgd2luZG93Lndwb25pb24gKTtcblxuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2pzL2NvcmUvY29yZSc7XG5cbmNvbnN0IFdQT25pb25fV1BfTW9kYWwgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCgge1xuXHR0ZW1wbGF0ZXM6IHt9LFxuXG5cdGV2ZW50czoge1xuXHRcdFwiY2xpY2sgLm1lZGlhLW1vZGFsLWNsb3NlXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1jYW5jZWxcIjogXCJjbG9zZU1vZGFsXCIsXG5cdFx0XCJjbGljayAjYnRuLW9rXCI6IFwic2F2ZU1vZGFsXCIsXG5cdFx0XCJjbGljayAubWVkaWEtbWVudSBhXCI6IFwiaGFuZGxlX2xlZnRfbWVudV9jbGlja1wiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLXJvdXRlciBhXCI6IFwiaGFuZGxlX3RhYl9jbGlja1wiLFxuXHR9LFxuXG5cdGFjdGl2ZV9wYWdlOiBudWxsLFxuXG5cdGFjdGl2ZV9zZWN0aW9uOiBudWxsLFxuXG5cdGluaXRpYWxpemU6ICggb3B0aW9ucyApID0+IHtcblx0XHRvcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogZmFsc2UsXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdFx0aHRtbDogZmFsc2UsXG5cdFx0fSwgb3B0aW9ucyApO1xuXG5cdFx0dGhpcy5sZWZ0X21lbnUgPSBvcHRpb25zWyAnbGVmdF9tZW51JyBdO1xuXHRcdHRoaXMuaHRtbCAgICAgID0gb3B0aW9uc1sgJ2h0bWwnIF07XG5cdFx0dGhpcy5oaWRlX21lbnUgPSBvcHRpb25zWyAnaGlkZV9tZW51JyBdO1xuXG5cdFx0Xy5iaW5kQWxsKCB0aGlzLCAncmVuZGVyJywgJ3ByZXNlcnZlRm9jdXMnLCAnY2xvc2VNb2RhbCcsICdzYXZlTW9kYWwnLCAnZG9Ob3RoaW5nJyApO1xuXHRcdHRoaXMuaW5pdF90ZW1wbGF0ZXMoKTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9LFxuXG5cdGluaXRfdGVtcGxhdGVzOiAoKSA9PiB7XG5cdFx0bGV0ICRtICAgICAgICAgICAgICAgICAgICAgICAgICA9ICR3cG9uaW9uLm9wdGlvbiggJ21vZGFsJyApO1xuXHRcdHRoaXMudGVtcGxhdGVzLmZyYW1lX21lbnVfaXRlbSAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdmcmFtZS1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5yb3V0ZXJfbWVudV9pdGVtID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAncm91dGVyLW1lbnUtaXRlbScgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLndpbmRvdyAgICAgICAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdodG1sJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50ICAgICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3BhZ2VfY29udGVudCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnNlY3Rpb25fY29udGVudCAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdzZWN0aW9uX2NvbnRlbnQnIF0gKTtcblx0fSxcblxuXHRyZW5kZXI6ICgpID0+IHtcblx0XHQndXNlIHN0cmljdCc7XG5cdFx0dGhpcy4kZWwuYXR0ciggJ3RhYmluZGV4JywgJzAnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy53aW5kb3coKSApO1xuXG5cdFx0aWYoIHRoaXMubGVmdF9tZW51ICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmxlZnRfbWVudSwgKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0XHR0aGlzLiQoICcubWVkaWEtbWVudScgKS5hcHBlbmQoIHRoaXMudGVtcGxhdGVzLmZyYW1lX21lbnVfaXRlbSgge1xuXHRcdFx0XHRcdHVybDoga2V5LFxuXHRcdFx0XHRcdG5hbWU6IHZhbHVlLFxuXHRcdFx0XHR9ICkgKTtcblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmh0bWwgKSB7XG5cdFx0XHRfLmVhY2goIHRoaXMuaHRtbCwgKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0XHRsZXQgJGNvbnRlbnQgPSAkKCB0aGlzLnRlbXBsYXRlcy5wYWdlX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRpZDoga2V5LFxuXHRcdFx0XHRcdHRpdGxlOiB2YWx1ZVsgJ3RpdGxlJyBdLFxuXHRcdFx0XHRcdGh0bWw6IHZhbHVlWyAnaHRtbCcgXSxcblx0XHRcdFx0fSApICk7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiB2YWx1ZVsgJ3NlY3Rpb25zJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Xy5lYWNoKCB2YWx1ZVsgJ3NlY3Rpb25zJyBdLCAoIHZhbCwgayApID0+IHtcblx0XHRcdFx0XHRcdGxldCAkX2NvbnRlbnQgPSBqUXVlcnkoIHRoaXMudGVtcGxhdGVzLnNlY3Rpb25fY29udGVudCgge1xuXHRcdFx0XHRcdFx0XHRcdGlkOiBrZXkgKyBcIl9cIiArIGssXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHZhbFsgJ3RpdGxlJyBdLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWw6IHZhbFsgJ2h0bWwnIF0sXG5cdFx0XHRcdFx0XHRcdH0gKSApLFxuXHRcdFx0XHRcdFx0XHQkX21lbnUgICAgPSB0aGlzLnRlbXBsYXRlcy5yb3V0ZXJfbWVudV9pdGVtKCB7IHVybDogaywgbmFtZTogdmFsWyAndGl0bGUnIF0gfSApO1xuXG5cdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmhpZGUoKTtcblx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsWyAnc2lkZWJhcicgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRcdCRfY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuYXBwZW5kKCB2YWxbICdzaWRlYmFyJyBdICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtZnJhbWUtY29udGVudCcgKS5hcHBlbmQoICRfY29udGVudCApO1xuXHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1yb3V0ZXInICkuYXBwZW5kKCAkX21lbnUgKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXInICkuYXBwZW5kKCAkY29udGVudCApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsdWVbICdzaWRlYmFyJyBdICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5hZGRDbGFzcyggJ2hpZGRlbicgKTtcblx0XHRcdFx0XHQkdGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXInICkuYXBwZW5kKCAkY29udGVudCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdHRoaXMuJCggJy5tZWRpYS1tZW51IGE6Zmlyc3QtY2hpbGQnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gLndwb25pb24tbW9kYWwtY29udGVudDpub3QoLmhpZGRlbikgLm1lZGlhLWZyYW1lLXJvdXRlciBhOmZpcnN0LWNoaWxkJyApXG5cdFx0XHQudHJpZ2dlciggJ2NsaWNrJyApO1xuXG5cdFx0aWYoIHRoaXMuaGlkZV9tZW51ID09PSB0cnVlICkge1xuXHRcdFx0dGhpcy4kKCAnLm1lZGlhLWZyYW1lJyApLmFkZENsYXNzKCAnaGlkZS1tZW51JyApO1xuXHRcdH1cblxuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vbiggXCJmb2N1c2luXCIsIHRoaXMucHJlc2VydmVGb2N1cyApO1xuXHRcdGpRdWVyeSggJ2JvZHknICkuY3NzKCB7IFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIiB9ICkuYXBwZW5kKCB0aGlzLiRlbCApO1xuXHRcdHRoaXMuJGVsLmZvY3VzKCk7XG5cdH0sXG5cblx0aGFuZGxlX2xlZnRfbWVudV9jbGljazogKCBlICkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHRhcmdldCA9ICQoIGUudGFyZ2V0ICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLW1lbnUgYS5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JHRhcmdldC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRsZXQgJHNob3dfdGFyZ2V0ID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYjJyArICR0YXJnZXQuYXR0ciggJ2hyZWYnICkgKTtcblx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IGRpdicgKS5hZGRDbGFzcyggJ2hpZGRlbicgKTtcblx0XHQkc2hvd190YXJnZXQucmVtb3ZlQ2xhc3MoICdoaWRkZW4nICk7XG5cblx0XHRpZiggJHNob3dfdGFyZ2V0LmZpbmQoICcubWVkaWEtZnJhbWUtcm91dGVyJyApLmhhc0NsYXNzKCAnaGlkZGVuJyApICkge1xuXHRcdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lJyApLmFkZENsYXNzKCAnaGlkZS1yb3V0ZXInICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5yZW1vdmVDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH1cblx0XHR0aGlzLmFjdGl2ZV9wYWdlICAgID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKTtcblx0XHR0aGlzLmFjdGl2ZV9zZWN0aW9uID0gbnVsbDtcblx0fSxcblxuXHRoYW5kbGVfdGFiX2NsaWNrOiAoIGUgKSA9PiB7XG5cdFx0bGV0ICR0YXJnZXQgICAgICAgICA9ICQoIGUudGFyZ2V0ICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0bGV0ICRwYWdlICAgICAgICAgICA9ICQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZS1tZW51IGEuYWN0aXZlJyApLmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkYmFzZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+ICMnICsgdGhpcy5hY3RpdmVfcGFnZSApO1xuXG5cblx0XHQkdGFyZ2V0LnBhcmVudCgpLmZpbmQoICcuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JGJhc2UuZmluZCggJy53cG9uaW9uLXNlY3Rpb24tbW9kYWwtY29udGVudCcgKS5oaWRlKCk7XG5cdFx0JGJhc2UuZmluZCggJyMnICsgdGhpcy5hY3RpdmVfcGFnZSArICdfJyArIHRoaXMuYWN0aXZlX3NlY3Rpb24gKS5zaG93KCk7XG5cdH0sXG5cblx0cHJlc2VydmVGb2N1czogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGlmKCB0aGlzLiRlbFsgMCBdICE9PSBlLnRhcmdldCAmJiAhdGhpcy4kZWwuaGFzKCBlLnRhcmdldCApLmxlbmd0aCApIHtcblx0XHRcdHRoaXMuJGVsLmZvY3VzKCk7XG5cdFx0fVxuXHR9LFxuXG5cdGNsb3NlTW9kYWw6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9mZiggXCJmb2N1c2luXCIgKTtcblx0XHRqUXVlcnkoIFwiYm9keVwiICkuY3NzKCB7IFwib3ZlcmZsb3dcIjogXCJhdXRvXCIgfSApO1xuXHRcdHRoaXMucmVtb3ZlKCk7XG5cdH0sXG5cblx0c2F2ZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0dGhpcy5jbG9zZU1vZGFsKCBlICk7XG5cdH0sXG5cblx0ZG9Ob3RoaW5nOiBmdW5jdGlvbiggZSApIHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvciggJG9wdGlvbnMgPSB7fSApIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCgge1xuXHRcdFx0aWQ6IGZhbHNlLFxuXHRcdFx0ZGF0YTogZmFsc2UsXG5cdFx0XHRjbGFzc05hbWU6ICd3cG9uaW9uLW1vZGFsJyxcblx0XHRcdG1vZGFsOiB7fSxcblx0XHRcdGhpZGVfbWVudTogZmFsc2UsXG5cdFx0fSwgJG9wdGlvbnMgKTtcblxuXHRcdG5ldyBXUE9uaW9uX1dQX01vZGFsKCBfLmV4dGVuZCgge1xuXHRcdFx0bGVmdF9tZW51OiB0aGlzLmdldF9sZWZ0X21lbnUoKSxcblx0XHRcdGh0bWw6IHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sXG5cdFx0XHRoaWRlX21lbnU6IHRoaXMub3B0aW9uc1sgJ2hpZGVfbWVudScgXSxcblx0XHR9LCB0aGlzLm9wdGlvbnNbICdtb2RhbCcgXSApICk7XG5cdH1cblxuXHRnZXRfbGVmdF9tZW51KCkge1xuXHRcdGxldCAkcmV0dXJuID0gZmFsc2U7XG5cdFx0aWYoIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0gKSB7XG5cdFx0XHQkcmV0dXJuID0ge307XG5cblx0XHRcdF8uZWFjaCggdGhpcy5vcHRpb25zWyAnZGF0YScgXSwgKCAkZGF0YSwgJGtleSApID0+IHtcblx0XHRcdFx0JHJldHVyblsgJGtleSBdID0gKCB0eXBlb2YgJGRhdGFbICdtZW51X3RpdGxlJyBdICE9PSAndW5kZWZpbmVkJyApID8gJGRhdGFbICdtZW51X3RpdGxlJyBdIDogJGRhdGFbICd0aXRsZScgXTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0cmV0dXJuICRyZXR1cm47XG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9