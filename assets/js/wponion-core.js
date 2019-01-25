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

			element.on('wponion_js_validation_message', '> .row > .wponion-fieldset :input', function (e, data) {
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

				$found.find('> .row > .wponion-fieldset .wponion-field-debug-code-gen').on('click', function () {
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
				err.error.appendTo($elem.find('> .row > .wponion-fieldset'));
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
				err.error.appendTo($elem.find('> .row > .wponion-fieldset'));
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
			    $add = this.element.find('> .row > .wponion-fieldset > button[data-wponion-group-add]'),
			    $group_wrap = this.element.find('> .row > .wponion-fieldset > .wponion-group-wrap'),
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
				jQuery(this).parent().parent().find('> .wponion-accordion-content .row > .wponion-group-action > button').click();
			});

			$group_wrap.WPOnionCloner({
				add_btn: $add,
				limit: parseInt($limit),
				clone_elem: '> .wponion-fieldset > .wponion-accordion-wrap',
				remove_btn: '.wponion-group-action > button',
				template: this.option('group_template'),
				onRemove: function onRemove($elem) {
					$elem.parent().parent().parent().parent().slideUp(function () {
						jQuery(this).remove();
					});
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

			$elem = false === $elem ? this.element.find('> .row > .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap') : $elem;
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
			$elem = false === $elem ? this.element.find('> .row > .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap') : $elem;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = __webpack_require__(/*! ../core/field */ "./src/js/core/field.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_WPOnion_Field) {
	_inherits(Field, _WPOnion_Field);

	function Field() {
		_classCallCheck(this, Field);

		return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
	}

	_createClass(Field, [{
		key: 'init',
		value: function init() {
			var $this = this;
			this.element.find('img').each(function () {
				if (jQuery(this)[0].complete) {
					if (jQuery(this).parent().parent().hasClass('wponion-checkbox-radio-tooltip')) {
						jQuery(this).parent().parent().addClass('wponion-field-tooltip');
						$this.init_field(jQuery(this).parent().parent(), 'tooltip');
					}
				} else {
					jQuery(this).on('load', function () {
						if (jQuery(this).parent().parent().hasClass('wponion-checkbox-radio-tooltip')) {
							jQuery(this).parent().parent().addClass('wponion-field-tooltip');
							$this.init_field(jQuery(this).parent().parent(), 'tooltip');
						}
					});
				}
			});
		}
	}]);

	return Field;
}(_field2.default);

exports.default = function (w) {
	return w.wponion_register_field('image_select', function ($elem) {
		return new Field($elem);
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
				add_btn: this.element.find('> .row > .wponion-fieldset > .wponion-keyvalue-action-container  > button[data-wponion-keyvalue-add]'),
				limit: -1 === this.option('limit') ? null : this.option('limit'),
				clone_elem: '> .row > .wponion-fieldset > .wponion-keyvalue-field',
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

			this.image = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTBGNEVDQjg4RDAxRTAxMThBMkRDNEU2NzhFQkEzRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5N0E3OEE1OUNFMTFFNTg1RUVBMEU5N0I2QkZBMzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUU5N0E3ODk1OUNFMTFFNTg1RUVBMEU5N0I2QkZBMzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNCBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDM2MDU2QzJGQkVERTAxMTk1NUVCRTAzRUE4QjRENUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEVGNEVDQjg4RDAxRTAxMThBMkRDNEU2NzhFQkEzRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAETARMDAREAAhEBAxEB/8QAiQABAAMAAwEBAAAAAAAAAAAAAAQFBgEDBwIIAQEAAAAAAAAAAAAAAAAAAAAAEAABAwMDAQMGBw8CAwkAAAABAAIDEQQFIRIGMUETB1FhcYEiMpGhscFCghThUmJykqKywiMzc7N0FTYkN9HTF+JDU5OjVDVVFhEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/VKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOueeKCMySuDGDqSg6I8vjXmjZ2/Wq35QEHey4t5PclY/8AFcD8iDsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFNyeXbbRR/fuJ/JH3UGb3IOdyDsjvLmP93K9vmDiEElmcybBQTkjzhp+MhBIZya9bQOZG/ymhB+IoJMfKW/95b+trv+IQSY+SY93vB7PORUfESgkx5jGSe7cNH41W/pUQS2PY9oexwc09HA1BQcoCAgICAgICAgICAgICAgICAgICAgICAgIM3yqb9vBF960u/KNP1UFbioG3N/DC8bmOPtDygCpQaSTj2MePZYYz5WuPz1QRZOLQEfs5nA+cAoIz+L3Y9yZh9NR8yCM7j2VB0jDvOHN+chBGkxmSjNHW8nqaT8iDofHNGaPY5p8hBCD43INdx1jm4xpJ99znN9HT5kFmgICAgICAgICAgICAgICAgICAgICAgICAgx/J59+ULf/CY1v636yDni7C/Jh3ZG1xPrFPnQa9AQEBAQQM4+OPGTuc0Elu0EjtOiDEbkG7xMZjxtuw9dgP5WvzoJaAgICAgICAgICAgICAgICAgICAgICAgICDAZqfvMrcuHTeQPq6fMguOGxkvuJewANr66oNOgICAg4c5rWlziGtHUnQIKXlk7RjGtBr3jxQjtACDHsJc4NHUmg9aD0pjQxjWjo0AD1IOUBAQEBAQEBAQEBAQEBAQEBAQEBAQfMkscbdz3Bo8pQRJMxZs0aS8/gjT46IIUubndpG0M851KCVi7mWWOaSZ1Q019ApqgwE0pdK933zifhKDY8NYRi3uP05SR6gAgnZPN2OPZ+1dvlPuxN1d6/IgqMTyt898YrsNZFKaREabT5CfOg06CpyfJMfZAsDu+n7I2dAfOUGSyGcyF+4tkeWxE6RN0b17fKgtOUv7uwxsH0hHVzfQ1oCCow7TJlbRtK/tWEjzBwJQejICAgICAgICAgICAgICAgICAgICAgIKrOtdthd9EEg+k0QVCAgtGkQ4C6lJoTHJr56EBB5/vQap+TuMZxiyFvRk0+/26DQbie30oMvJPJI8vkcXvcauc4kkn0lB870FnNyXLS2rbYzEMAo5w0c70u6oKzeg77EGS9gjGu6Rop60F1zaUf3SJjejIRUeQlzvmQR+IsMmbiNKhjXuP5JHzoN+gICAgICAgICAgICAgICAgICAgICAgi5SLvLN/lb7Q9SDPUQKIJmfcIOKvFaF7YwPS54J+JBgA4kgeVBruTWF7LjcYy3gdIyGL2y3WhLW9nqQZZ9vdM9+F7fS0hB1FxHXRBxvQN6C44mwS562DhVrdzvWGEj40Hxyecvzl1U12u2j1AILXgUe67upvvI2tH1j/ANlBtUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBwBBB6HQoMvPH3cr4z9FxFfQg+WipHnQOdy9zibW3++ePzG/dQYUSEEEdQahBcQcxzsNB34eAKAPa0j4gEE9viBkDpLbQOb2gBw+VxQdg5hhpNLjEx1PvOAYflag5bkOCz6y2jonHybwPzXIDcPw+7JMGQ7j8F7g39OiCz49gMfZX7ri3vmXXsFrGtLSQT1OhKDDX05lvZ5Cal73GvrQbTw+hAx1zP2yS7PUxoP66DVICAgICAgICAgICAgICAgICAgICAgICCizEOy6300kFfX2oI1tHvuI2DtcEFX4i3B+02lv2NY6T8o0/VQY+qBVAqgVQKoFUHIe4dHEetBxuQem8KhEfH4HDrK57z+Vt/VQXqAgICAgICAgICAgICAgICAgICAgICAgr8zFut2yAasdqfMfuoK7G7ftse401+OiDnkvFP7zNHOy47mWNmyhbuaRUnyjyoMzceH+aj/dPimHmdt/SQQLjiPIYPetHP/hkP/RqggT4zJ24rPayxDyvY5vyhBGJIOqDjcgbkDcgbkHsODg7jD2cVKFsLKjzkVPxlBNQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEHVcxCW3kZ5R91BmjUGnaEHYy4uGe5I5voJCDtZkr1nSQn06/Kg748zdA+00P+L5EFhbXVzMRvgLGn6RP3EHZPZ2lwKTwslH4bQ75UFfNxTj01d1lGCe1tW/IQgr5vD7AvJLTNGewNcCB8IKCBL4aREkxX7mjsDo6/GHBBDb4b5EXDA65iMFRvcN27b20bT50HoDGhrQ0dGig9SDlAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFFe2M4un7GFzXmrSBprqg5hw9y/V5EY8/VBNiw1u333F5+AIJkcEMX7tgb6Ag+0BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBFymRhxuOub+drnQ2sbpZGsALi1gqaAkCvrQQOL8sxPJLOS5x5e3uX7JYZg1sjSRUEhpcKO7DVBbyPDI3PPRoLjTzCqCp4vyjH8kx8l9YxyxwxymBzZw1rtzWtdUbXPFKPHaguEBAQRslfw4/HXN/MHOhtYnzSNYAXFrGlx2gkCunlQYj/rZxX/2t9/5cP/NQSLHxi4hczCKT7TaA0Aknjbt1/hukI+BBto5I5Y2yRuD43gOY9pBa5pFQQR1BQfSAgICAgIKbjnKsfn/tn2OOaP7FL3MvfBrau11btc/TTtQXKAgICAgICAgICAgICAgICAgpebf4jmP6SX9AoPJeNvyHFLXD8qh3TYvI95Bkoh2bZnsH5rA5vnBHag9rNzBdY03Nu8SwTQl8UjdQ5rm1BCDEeCf+K3X9dJ/JiQTM34m2dpkn4vEWE+av4iRLHb12gg0cAWtkcS3to2iDnBeJdne5JmKylhPhsjKaRRXFdriejdzmxuBPZVvmQbNBT8x/xPM/0U/8soKrwp/wXH/jT/z3oJPiJaYyfiORffMYe5hc+2kdTc2b6G09hLqDzoKXiGcucR4Wx5SeE3H2QSd1E52wuj74taN1HUArpogN8VJ7kQOxeBucjGWRm8lhLiyGSRocY9wjcHFtaEnagvOUc3xnHhDFOx9xkLgAw2MHtPIJpU+QV0Hl7EFHD4qTW8rP79x+8xNrIQ1ty8Pe2vnDo4j8FUF/yvlRweEjzFvajIWr3sDyyXYBHIPZkB2vDhWg9aC7t54ri3iuIXbopmNkjcO1rhUH4Cgo8Xyw5HlGRwtvaVt8a0d9fd5oZDQbBHt8u76XYg44jy3/APRf3D/SfZfsM3cfvO839fa91lOiCvzviRa2WSkxeKsJ8zkYaiaK3B2tIpUbmtkJI7aN06IOcF4j217ko8XlcfPhsjNpDFcA7Xk9AHObGQT2VagsTysx8yHG57XuxLB39rd95XvKDVuzaKe676R6IPrmXKouNYj+4Ph+0vdI2KKDf3e4uqT7W1/RrSeiCzxuQhv8ZbZCP2YrmFkwqfdD2h1CfMgquIcqdyOC7umWn2e0gnMNvKXl5lDdS7bsZt0I7T8SC/QEBAQEBAQEBAQEFLzb/Ecx/SS/oFBR8DxdnlfDKzx94zfb3Dbhrx2j/USEOHnadQgquF5S8wN/e8Ly76mNr34yY+65pBdtFexw9pvnqEDwpnkt+AZeeLSSKe4ew/hNtoyEE/wcsbaLi77xrQbm6nf30n0iGaNbXyDr60Hz4y2du7jkF8QG3dtcMEEo0cA8Hc0Hr2A+pBtsdNJNj7WaQ1kkhje8+dzQSgr+Y/4nmf6Kf+WUHnXCeFZ/J8btb205Pd463kMgZZxCTYzbI5pptmjGpFfdQXrPCiW6lYc7yC8ysMbg5kLi5o0rUEvfN181EFvz21t7XgGRtreMRQQwMZFG0UDWte0ABB2eG9vFBwrGCNtN8bpHntLnvcSSgw0t1yp/iVmbrCWEGQvbYCJrbkgCKKjWgsrJDqafH50Fpk7jxcyWPuLC64/Yut7ljo5AHsqA4dRW5Oo6jzoLvjXG8jJwE4DOR91O5ksIaXNeWtLi6M7mFw9kkU9CCv4Tyc2PB74X+l1x4yQSxnqdte6b+V7A9CCb4WYuS244cjc63mXlddTPPUtJIZ8OrvWgp/DKZ8NhyiaP95HcSPZ6WteQgo+BXXiBb4qWfAYm1vILmZzprudze9c8UBDqzxmg7NO1BO5LYeKvIbaCG8wlrC62lE0E8EsbZWuApo51w/Q/MEF94hw3Npb4bk4ZS7xE8Zu2t7YpaCRun4WnrQccmgh5Ly7HYZp32VtZTXk5pVpM7e7irXyaEelBR4vks1j4WX9o8uGRs5ZMYxlfaDpXaUP4LXOp+Kg9A4lhhhuO2OPoBLFGDPTtlf7T/wA4oLdAQEBAQEBAQEBAQVHL4Jp+L5WGCN0s0lrK2OJgLnOcWmgDRqSgg+G9pd2nC8db3cMlvcM77fDK0se2s8hFWuAIqDVBD8SeJSZrGNvrFpGXx/7S3LPee0GpYKa17W+f0oI3hJi7204vd22RtJbZ8l3Ie5njdG5zHQxNrtcAaGhCCqsbPmXBLu6t7DHPzeCneZIWREmVpNB0aHuBpQO9kg9fKgXthzHnd5aRZHHOwuBt5O9ljlJ715FWnRwY4upUD2QBWuuiD05jGsaGNFGtADQOgAQVfK4Zp+MZaGGN0s0lpM2ONgLnOcYyAGgaklBW+Glnd2fDbG3u4JLe4YZt8MrXMeKzPIq1wB1BQadBQc+trm64hk7e2ifPPJG0MijaXvcd7To1tSUH1wa2uLbiWMguYnwzxw0kikaWPadx0LTQhBneUcd5HjeTjlXGohcyysEd/ZHq8AAaCoqHBo6agiuqCPdcr8Qs3bux2N47Pipphskvp3PYGNOhcxz2RbT6KnyaoNxgcdcY7E21nc3Ul7cRN/bXUznPc97iSdXEmgrQeZB5zzbiWbl5VJb4yGQ4zPmB1/LGxzmRuif7Re4Cjfv9eqD1K3git4I4IWhkULWxxtHQNaKAfAgw/hhjL+0bnG31pLbtnuy6MTRuYHsO7Vu4CoQVdrYcw4Jf3ceLx7szgLmTvY4YqmRhNB9EPeHUoCdpBpVBKNzz/lt5bwi0uONYmJ++5m7x8c76abQaRPNdaezTy9iDdZbGwZLF3WOm/dXMToiepG4UDvSDqgx/hfhsvbNyF9mIpIr15is4hK0tPc2sYY0tBpVp017aIKt/D8jJ4lSRmCT+wvuGZSSQsd3JmYwnbupt3d481FeiD09AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBAz+WixGFvMlJSltE57QfpP6Mb9ZxAQeS8QkyHHs7hcxfPLrbkrZGXDj2OfL7Lj2ddjvQSg9pc5rWlziA0CpJ0AAQdFlf2F9D31lcxXUIJaZYXtkbuHUbmkiuqBe39hYw99e3MVrCSGiWZ7Y27j0G5xArog7TJGI+8LgI6bt9Rtp1rXyIIEXI+PTTi3hylpJOSQImTxOeSOo2h1UEu8jhls54pnbIXxvbK+oG1paQ41OgoEGbx2LwmM4TkLXDXf22yENy4T95HL7RjO4bow1uiCL4Rf4XB/Gm/SQam+y+JsC0X17BaF3uieVkdfRuIQdlnf2N7F31ncRXMJ07yF7ZG+Tq0kIMHyz/AHR4z/DP6T0G3bm8M68Nk2/tjeA7TbCVhlr5Nld3xIPjP/8AwWR/pZv5bkGa8Iv8Lg/jTfpINVfZbFWG0315BaB3u9/IyOvo3EeRB2213a3UImtZmTwu92SJwe09uhaSEHagICAgICAgICAgICAgICAgIPOfFrJxzyYvjYnZbi9mbNdzPc1jWRB2xpcXaUrud9VBz4hy8UyHD/sthk7J0+N2SWUUdxEXFsY2FjQHVPsdB5UGp4TnRm+NWd6526cN7q58vex+y4n8b3vWgzfDR/YOa5njbvZtbv8A12PHZQ9Wj6pp9VA5mP79zXC8baN1rbH7dkB1FB0afqin1kFjzTjGSz1/ZRz3kdtxuCj76LvHMle+p/B2U90CrtKlBm+Rcd8JYMVcC2u4Ib1sbzC+G5fO/vGjQOYHSDV3XRBecIyF1e+Gzn3LzLJFDcwh7tSWsDg2p8zdEEHw9/2wv/xbz+WgmeFwuj4f0tCwXZdcfZzJUMElTt3UDjSvXRBX2PA+LWcck/Nb+3usvcSOdLJLduiZr02kuhcTTU1QVWJfgMV4j46Pi14ZMfetMd3C1znsBIdRu53UCgcNTQoJ3iPZXl9z3BWdnM63nnh2CdnvMaXv3uFO0Mqgt77wg4q/Fugs2SQXzW/sr0yPc4vHTe0nZTy0aEHRwzO3mU4Bk4b5xfd4+K4tnyONXOaIiWlx7SK7fUg+OA5T+1eGE2R2hxtftEjGnoXA+yD6Sgy+Am8O7yF+R5fkZL3MXTnOmic26DYxU7QDE0V08hoOgQSLPNcYwXLMdNxS+klx19IIMjYPEwYwPcGte0ytbWm6o1J060KD2NAQEBAQEBAQEBAQEBAQEBAJAFToAg8q4/icfzjluay+TiNxi4CILSPc5gNDRhBYWnRrakfhINV/0s4H/wDWf+vcf8xBneASO47zPLcUmdSCZxmsa9u0bhSva6I6/ioLTxIgfj7vD8qhHt4y4bHdU6m3lND8pb9ZB1+GsT8lkM1yucHdkJzDaV6iCMj/AINb9VBVc7ltL3n1li+QXT7XANgEjACWsdId3tOd2VcNu7s8yDnPM8J8Libl1hFa3l9LG5tsyOU3REhaQ1xLnSNYAdSgsfDog+GlwAdQLsH4CUHV4e/7YX/4t5/LQdXDrq9tPCa7ubKouom3LonNFS0g6uH4o1QVnEMR4aXmGZe5y9jmykhc+7bdXLoXNfuPutD2F2nbrVBHjyHGbjxLw0fH4I4bG3f3bpY27BJId1XDtI6AVQW/iFlG4rxAwOQex0kdvCXytYKu7vc8PIH4LSSg1WR8Q+J2mMffR5GG5O2sVvE8Olc7sbs95v1gEGd4JjLu24Dl727aWSZJlxcMaRT2O6IDtfvjU+hB88KxsuT8Kbqwh/fTi4bEDoC8Oq0eshBE4FkeCPxLcdnbOwtctZF0U7ryGFhfRxoS+Qe8PdIJrUILN2Z4U/kljicDgrHJzyPrPdwRRMZA1rh7YeI3bto10I7NdUHoCAgICAgICAgICAgICAgICD4uIIriCSCUExTMdHIAS0lrhQ0c0gjTtCCHhcFicJaG0xluLe3c8yOYHOfV5ABJc8ud0A7UE9BV3fGMHd5eDMT227JW20Q3DXyMI2kkVa1wa7r2hBMyGPs8jZTWV5GJrWdu2WMkio69WkEepBxjcbY4yxisbGIQ2sIIjjBJpUknVxJOp7UHRmeP4XNQthyloy5YypYXVDm167XtIcK+YoIOM4JxHGyd7aYyJsnY+TdM4V09kyl9PUgl4vjWFxVhPYWFv3NncFzpou8kcCXtDXavc4irR2IPrH8ew+OxcmLs7furCUPD4d73V7wUd7TnF2o86DsxGFxmIsRY46HubVpc4R7nP1canV5cfjQVFx4ccJuLk3EmLjEhO4hj5I2VrX3GOaz4kEuThvGHvsnjHxxux7+8szCXRbH1Dq/sy3dq0e9VBIvOPYe8ydvk7m3El9aNLIJS54DWmtRtBDT7x6hBXx+HvDI737YzFRCau4Al5jB80Rd3f5qC9nt4Z7eS3lbuhlYY3s1FWuFCNKU0QRsRhsbh7Jtljoe4tWuLmx7nP1canV5cfjQQsvwvi+Ym7/IY+OWc+9K0uie6mntOjLC71oJOG45g8LG5mMs47YPoHvbUvcB0DnuJcfWUFigICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD//2Q==';
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
				if ($arg.dropdownParent.length === 0) {
					$arg.dropdownParent = jQuery('body');
				}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUFkZEhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUN1cnJlbnRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEaWRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEb2luZ0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhhc0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSZW1vdmVIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSdW5Ib29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVIb29rTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVOYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvaW5mby9pbmlfZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3htbC91dGY4X2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b193aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY29weV90b19jbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RldmljZV90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RpZmZfZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9mb3JtYXRfZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfYWZ0ZXJfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19iZWZvcmVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfc2FtZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3RhYl9mb2N1c2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc193aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BpcGVfbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BsYWluX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9xdWVyeV9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcmFuZF9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3Bvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9zY3JvbGxfdG9fdG9wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RpbWVfdGFrZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdG9fanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pzX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdXJsX3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy92YWxpZGF0ZVNpbmdsZUpTRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JkcHJlc3MtanMtcG9ydHMvZnVuY3Rpb25zL2FkZF9xdWVyeV9hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29yZHByZXNzLWpzLXBvcnRzL2Z1bmN0aW9ucy90cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvdW50cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9hamF4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2J1dHRvbl9zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2RhdGVfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9mb250X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2dvb2dsZV9tYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9oZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaWNvbl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qYW1ib19jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3ViaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2ltYWdlX3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9idWxrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZ3V0dGVuYmVyZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZWRpYS1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbWV0YWJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9xdWljay1lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvYWxsLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvY2hlY2tib3gtcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL3NpbmdsZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy93b29jb21tZXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy93cC1wb2ludGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9ycy9iYWNrYm9uZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiJdLCJuYW1lcyI6WyJjcmVhdGVBZGRIb29rIiwiaG9va3MiLCJhZGRIb29rIiwiaG9va05hbWUiLCJuYW1lc3BhY2UiLCJjYWxsYmFjayIsInByaW9yaXR5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlciIsImhhbmRsZXJzIiwiaSIsInNwbGljZSIsIl9fY3VycmVudCIsImZvckVhY2giLCJob29rSW5mbyIsIm5hbWUiLCJjdXJyZW50SW5kZXgiLCJydW5zIiwiY3JlYXRlQ3VycmVudEhvb2siLCJjdXJyZW50SG9vayIsImNyZWF0ZURpZEhvb2siLCJkaWRIb29rIiwiY3JlYXRlRG9pbmdIb29rIiwiZG9pbmdIb29rIiwiY3JlYXRlSGFzSG9vayIsImhhc0hvb2siLCJjcmVhdGVIb29rcyIsImFjdGlvbnMiLCJPYmplY3QiLCJjcmVhdGUiLCJmaWx0ZXJzIiwiYWRkQWN0aW9uIiwiYWRkRmlsdGVyIiwicmVtb3ZlQWN0aW9uIiwicmVtb3ZlRmlsdGVyIiwiaGFzQWN0aW9uIiwiaGFzRmlsdGVyIiwicmVtb3ZlQWxsQWN0aW9ucyIsInJlbW92ZUFsbEZpbHRlcnMiLCJkb0FjdGlvbiIsImFwcGx5RmlsdGVycyIsImN1cnJlbnRBY3Rpb24iLCJjdXJyZW50RmlsdGVyIiwiZG9pbmdBY3Rpb24iLCJkb2luZ0ZpbHRlciIsImRpZEFjdGlvbiIsImRpZEZpbHRlciIsImNyZWF0ZVJlbW92ZUhvb2siLCJyZW1vdmVBbGwiLCJyZW1vdmVIb29rIiwiaGFuZGxlcnNSZW1vdmVkIiwiX2xvb3AiLCJjcmVhdGVSdW5Ib29rIiwicmV0dXJuRmlyc3RBcmciLCJydW5Ib29rcyIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwicHVzaCIsInJlc3VsdCIsImFwcGx5IiwicG9wIiwiX2NyZWF0ZUhvb2tzIiwidmFsaWRhdGVIb29rTmFtZSIsInRlc3QiLCJ2YWxpZGF0ZU5hbWVzcGFjZSIsIkpTX1BhcnNlX0FyZ3MiLCIkYXJncyIsIiRkZWZhdWx0cyIsIiRpc19uZXN0ZWQiLCJkZWZhdWx0cyIsIm5lc3RlZCIsInBhcnNlIiwiJF9rZXkiLCIkaXNfZGVlcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtaWNyb3RpbWUiLCJnZXRBc0Zsb2F0IiwicyIsIm5vdyIsInBlcmZvcm1hbmNlIiwidGltaW5nIiwibmF2aWdhdGlvblN0YXJ0IiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJjYWxsX3VzZXJfZnVuYyIsImNiIiwicGFyYW1ldGVycyIsImNhbGxVc2VyRnVuY0FycmF5IiwicmVxdWlyZSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiY2FsbF91c2VyX2Z1bmNfYXJyYXkiLCIkZ2xvYmFsIiwid2luZG93IiwiZ2xvYmFsIiwiZnVuYyIsInNjb3BlIiwidmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4iLCJtYXRjaCIsIkZ1bmN0aW9uIiwidG9TdHJpbmciLCJldmFsIiwiRXJyb3IiLCJjcmVhdGVfZnVuY3Rpb24iLCJjb2RlIiwic3BsaXQiLCJjb25jYXQiLCJlIiwiZnVuY3Rpb25fZXhpc3RzIiwiZnVuY05hbWUiLCJpbmlfZ2V0IiwidmFybmFtZSIsIiRsb2N1dHVzIiwicGhwIiwiaW5pIiwibG9jYWxfdmFsdWUiLCJtZDUiLCJzdHIiLCJoYXNoIiwiY3J5cHRvIiwibWQ1c3VtIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsInV0ZjhFbmNvZGUiLCJ4bCIsIl9yb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsIl9hZGRVbnNpZ25lZCIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiX0YiLCJ4IiwieSIsInoiLCJfRyIsIl9IIiwiX0kiLCJfRkYiLCJhIiwiYiIsImMiLCJkIiwiYWMiLCJfR0ciLCJfSEgiLCJfSUkiLCJfY29udmVydFRvV29yZEFycmF5IiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNUZW1wMSIsImxOdW1iZXJPZldvcmRzVGVtcDIiLCJsTnVtYmVyT2ZXb3JkcyIsImxXb3JkQXJyYXkiLCJsQnl0ZVBvc2l0aW9uIiwibEJ5dGVDb3VudCIsImNoYXJDb2RlQXQiLCJfd29yZFRvSGV4Iiwid29yZFRvSGV4VmFsdWUiLCJ3b3JkVG9IZXhWYWx1ZVRlbXAiLCJsQnl0ZSIsImxDb3VudCIsInN1YnN0ciIsImsiLCJBQSIsIkJCIiwiQ0MiLCJERCIsIlMxMSIsIlMxMiIsIlMxMyIsIlMxNCIsIlMyMSIsIlMyMiIsIlMyMyIsIlMyNCIsIlMzMSIsIlMzMiIsIlMzMyIsIlMzNCIsIlM0MSIsIlM0MiIsIlM0MyIsIlM0NCIsInRlbXAiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlX3N0ciIsImFycmF5Iiwic3RyQXJyIiwiU3RyaW5nIiwicmVwbGFjZSIsInNhbCIsImoiLCJjdCIsInAiLCJsYXN0T2JqIiwiY2hyIiwidG1wIiwia2V5IiwidmFsdWUiLCJwb3N0TGVmdEJyYWNrZXRQb3MiLCJrZXlzIiwia2V5c0xlbiIsIl9maXhTdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGFyQXQiLCJpbmRleE9mIiwiaGFzT3duUHJvcGVydHkiLCJydHJpbSIsImNoYXJsaXN0IiwicmUiLCJSZWdFeHAiLCJzdHJwb3MiLCJoYXlzdGFjayIsIm5lZWRsZSIsIm9mZnNldCIsImJhc2U2NF9kZWNvZGUiLCJlbmNvZGVkRGF0YSIsImRlY29kZVVURjhzdHJpbmciLCJtYXAiLCJqb2luIiwiYXRvYiIsIkJ1ZmZlciIsImI2NCIsIm8xIiwibzIiLCJvMyIsImgxIiwiaDIiLCJoMyIsImg0IiwiYml0cyIsImRlYyIsInRtcEFyciIsImZyb21DaGFyQ29kZSIsImJhc2U2NF9lbmNvZGUiLCJzdHJpbmdUb0VuY29kZSIsImVuY29kZVVURjhzdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b1NvbGlkQnl0ZXMiLCJwMSIsImJ0b2EiLCJlbmMiLCJyIiwiaHR0cF9idWlsZF9xdWVyeSIsImZvcm1kYXRhIiwibnVtZXJpY1ByZWZpeCIsImFyZ1NlcGFyYXRvciIsImVuY1R5cGUiLCJlbmNvZGVGdW5jIiwiX2h0dHBCdWlsZFF1ZXJ5SGVscGVyIiwidmFsIiwiaXNOYU4iLCJxdWVyeSIsInBhcnNlX3VybCIsImNvbXBvbmVudCIsIm1vZGUiLCJwYXJzZXIiLCJzdHJpY3QiLCJsb29zZSIsIm0iLCJleGVjIiwidXJpIiwiJDAiLCIkMSIsIiQyIiwic291cmNlIiwicmF3dXJsZGVjb2RlIiwicmF3dXJsZW5jb2RlIiwidXJsZGVjb2RlIiwidXJsZW5jb2RlIiwiaXNfY2FsbGFibGUiLCJtaXhlZFZhciIsInN5bnRheE9ubHkiLCJjYWxsYWJsZU5hbWUiLCJtZXRob2QiLCJ2YWxpZEZ1bmN0aW9uTmFtZSIsImdldEZ1bmNOYW1lIiwiZm4iLCJ1dGY4X2VuY29kZSIsImFyZ1N0cmluZyIsInN0cmluZyIsInV0ZnRleHQiLCJzdGFydCIsImVuZCIsInN0cmluZ2wiLCJuIiwiYzEiLCJSYW5nZUVycm9yIiwiYzIiLCJwYXJzZV9hcmdzIiwiYXJyYXlfdG9faHRtbF9hdHRyIiwiYXJyYXlfdG9faHRtbCIsImFycmF5X3RvX3dpbmRvdyIsInBsYWluX29iamVjdCIsImlzX2FmdGVyX2RhdGUiLCJpc19iZWZvcmVfZGF0ZSIsImlzX3NhbWVfZGF0ZSIsImZvcm1hdF9kdXJhdGlvbiIsImRpZmZfZGF5cyIsInRpbWVfdGFrZW4iLCJpc191cmwiLCJpc190YWJfZm9jdXNlZCIsImlzX3dpbmRvd19hcmciLCJzY3JvbGxfdG9fdG9wIiwiY29weV90b19jbGlwIiwic2Nyb2xsX3BvcyIsIndpbmRvd19hcmciLCJkZXZpY2VfdHlwZSIsInBpcGVfbG9nIiwidG9fanF1ZXJ5IiwiaXNfanF1ZXJ5IiwidG9fanNfZnVuYyIsImNvdW50ZXIiLCJyYW5kX21kNSIsImNzc191bml0cyIsInVybF9wYXJhbXMiLCJxdWVyeV9zdHJpbmciLCJhcnIiLCJsaXN0SUQiLCJ0YWciLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIml0ZW0iLCIkZGF0YSIsInJldHVybl9odG1sIiwiSSIsIl8iLCJpc09iamVjdCIsIksiLCIkdmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiJGFycmF5IiwiJGtleSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdGVkIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJzZWxlY3RvciIsInN0ZXAiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJfc3RlcCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWJzIiwiZmxvb3IiLCJpc051bWJlciIsImNoZWNrUHgiLCJjaGVja1BjdCIsImNoZWNrRW0iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYXRlSW5pdGlhbCIsImRhdGVGaW5hbCIsIm1zIiwidGltZSIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJtaWxsaXNlY29uZCIsImVudHJpZXMiLCJmaWx0ZXIiLCJkYXRlQSIsImRhdGVCIiwiJGVsZW0iLCJpc1VuZGVmaW5lZCIsImlzU3RyaW5nIiwialF1ZXJ5IiwidG9JU09TdHJpbmciLCJoaWRkZW4iLCIkdXJsIiwicGF0dGVybiIsImxvZyIsImRhdGEiLCJyZWdleCIsInJlc3VsdHMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJhbmRvbSIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRpdGxlIiwidGltZUVuZCIsIiRhcmdzX2tleSIsIiRjb250ZW50c19rZXkiLCJpc0VtcHR5IiwidXJsIiwicmVkdWNlIiwidiIsIiRzdHJpbmciLCIkY29udGVudHMiLCIkX2siLCJhZGRfcXVlcnlfYXJnIiwiaHJlZiIsIiRwYXJzZWQiLCIkcXVlcnkiLCIkZnJhZ21lbnQiLCJmcmFnbWVudCIsInNwbGl0X3VybCIsImJhc2VfdXJsIiwicmVtb3ZlX3F1ZXJ5X2FyZyIsImRlZmF1bHQiLCJ0cmFpbGluZ3NsYXNoaXQiLCJ1bnRyYWlsaW5nc2xhc2hpdCIsIldQT25pb25fQWpheGVyIiwiJGFqYXhfYXJncyIsIiRhamF4X2NvbmZpZyIsImFqYXh1cmwiLCJzdWNjZXNzIiwiYWx3YXlzIiwiYWN0aW9uIiwiZGVmYXVsdF9jb25maWdzIiwicmVzcG9uc2VfZWxlbWVudCIsImJ1dHRvbiIsImVsZW1lbnQiLCJzcGlubmVyIiwiaW5zdGFuY2UiLCJhamF4X2FyZ3MiLCJ3cG9uaW9uIiwibWVyZ2UiLCJhamF4X2NvbmZpZyIsImFqYXgiLCIkY29kZSIsInNpbmdsZV9jYWxsYmFjayIsIiRjYWxsYmFjayIsImlzRnVuY3Rpb24iLCIkY2FsbGJhY2tzIiwiaGFuZGxlX2NhbGxiYWNrcyIsImJ1dHRvbl91bmxvY2siLCJidXR0b25fbG9jayIsIiRjb25maWciLCJjbG9uZSIsIiR1cmxfcGFyYW1zIiwid3AiLCJzZW5kIiwiZG9uZSIsIm9uU3VjY2VzcyIsImZhaWwiLCJvbkVycm9yIiwib25BbHdheXMiLCIkZGVmYXVsdCIsImhhc19jb25maWciLCJjb25maWciLCIkYnV0dG9uIiwid3BvX2J1dHRvbiIsImF0dHIiLCIkc3Bpbm5lciIsImFkZENsYXNzIiwicGFyZW50IiwiYXBwZW5kIiwicmVtb3ZlQXR0ciIsIm5leHQiLCJoYXNDbGFzcyIsInJlbW92ZSIsImZpbmQiLCIkIiwiJGNsYXNzIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiJF9kYXRhIiwiJF9jbGFzc19pbnN0YW5jZSIsIiRmaWQxIiwiJGZpZDIiLCIkanNfaWQiLCIkd3BvbmlvbiIsImZpZWxkSUQiLCIkX2FyZ3MiLCJmaWVsZEFyZ3MiLCJpbmxpbmVfYWpheCIsIldQT25pb24iLCIkd2hlcmVfdG9fZmluZCIsIiRpZCIsIiR2YXJfaWQiLCJpc0ZpZWxkIiwid2luZG93QXJncyIsInRleHQiLCIkaXNfc2hvdyIsImZhZGVJbiIsImZhZGVPdXQiLCIkaGFuZGxlIiwiJGpzb24iLCJkZWJ1Z19pbmZvIiwiJGRlZmluZWRfdmFycyIsInByZXZlbnREZWZhdWx0Iiwic3dhbCIsInR4dCIsImh0bWwiLCJzaG93Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2hvd0Nsb3NlQnV0dG9uIiwiYW5pbWF0aW9uIiwid2lkdGgiLCJvbkJlZm9yZU9wZW4iLCJlbmFibGVMb2FkaW5nIiwib25PcGVuIiwianNvblZpZXciLCJkaXNhYmxlTG9hZGluZyIsInRoZW4iLCJzZXR0aW5nc19hcmdzIiwib3B0aW9uIiwiaXNfZGVidWciLCJpc051bGwiLCJmaWVsZF9kZWJ1Z19pbmZvIiwiJHZhcnMiLCIkdXR4dCIsIiRtdHh0IiwiJGFjdGlvbiIsIiRvblN1Y2Nlc3MiLCIkb25FcnJvciIsIiRvbkFsd2F5cyIsIiRhamF4IiwicmVzIiwiY29tcGlsZWQiLCJvcHRpb25zIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsInZhcmlhYmxlIiwidGVtcGxhdGUiLCIkZWxlbXMiLCJlYWNoIiwiJHRvZ2dsZSIsIiRleF9jbGFzcyIsIiRlbGVtZW50IiwicGFyYW0iLCJuZXN0YWJsZSIsIiR0aGlzIiwiYmFzZSIsIiRlbCIsImluaXQiLCJydWxlc2V0IiwiZGVwcyIsImNyZWF0ZVJ1bGVzZXQiLCJkZXBSb290IiwiJF9kZXBzX2Z1bmN0aW9ucyIsInNob3ciLCJzbGlkZURvd24iLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJzbGlkZVVwIiwiY2hlY2tUYXJnZXRzIiwiZW5hYmxlIiwiV1BPbmlvbl9EZXBlbmRlbmN5IiwiJHNlbGVjdG9yIiwiJGNvbnRleHQiLCJzZXRfYXJncyIsImZpZWxkX2RlYnVnIiwianNfZXJyb3JfaGFuZGxlciIsImpzX3ZhbGlkYXRvciIsImVyciIsImFwcGVuZFRvIiwianNfZXJyb3IiLCJtYXliZV9qc192YWxpZGF0ZV9lbGVtIiwiV1BPbmlvbl9WYWxpZGF0aW9uIiwiZ2V0X2Zvcm0iLCJqc192YWxpZGF0ZV9lbGVtIiwicnVsZXMiLCIkYXJnIiwianNfZnVuYyIsIiRleGlzdHMiLCIkd3Bvbmlvbl9kZWJ1ZyIsImdldCIsImlkIiwiYWRkIiwiJGluZm8iLCIkZm91bmQiLCIkSUQiLCJ0aXBweSIsImNvbnRlbnQiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCIsIiRkIiwiJG5vdGljZV90eHQiLCJoZWlnaHRBdXRvIiwiX2FyZ3MiLCIkYWpheF9rZXkiLCJwbHVnaW5faWQiLCIkdHlwZSIsIndwb25pb25faW5pdF9maWVsZCIsImluaXRfc2luZ2xlX2ZpZWxkIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwic2V0X2VsZW1lbnQiLCJzZXRfY29udHh0IiwibW9kdWxlX2luaXQiLCJlbGVtIiwiJGNvbnR4dCIsImNvbnRleHQiLCJXUE9uaW9uX1ZhbGlkYXRvciIsImZvcm0iLCJpbnZhbGlkSGFuZGxlciIsInNpYmxpbmdzIiwiYmVmb3JlIiwiaWdub3JlIiwiZXJyb3JQbGFjZW1lbnQiLCJ0cmlnZ2VyIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsInZhbGlkYXRlIiwiZmllbGQiLCJhY2NvcmRpb24iLCJoZWFkZXIiLCJjb2xsYXBzaWJsZSIsImFuaW1hdGUiLCJoZWlnaHRTdHlsZSIsImljb25zIiwiSUR0b0VsZW1lbnQiLCJXUE9uaW9uX0ZpZWxkIiwidyIsIndwb25pb25fcmVnaXN0ZXJfZmllbGQiLCJmaWVsZF9hYnN0cmFjdCIsInRvb2x0aXAiLCJoYW5kbGVfYmFja3VwX2ltcG9ydCIsIiRmaWxlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImZvcmNlX2Rvd25sb2FkIiwiYmxvY2tfZm9ybSIsInVuaXF1ZSIsImV4dHJhIiwiZ2V0X2V4dHJhX3ZhbHVlIiwic3dhbF9lcnJvciIsInVuYmxvY2tfZm9ybSIsIiRpbnMiLCJ0aXBweV9nZXQiLCJpbnN0YW5jZXMiLCJkZXN0cm95IiwiYmFja3VwX2lkIiwicmVzdG9yZV9iYWNrdXAiLCJtc2ciLCJ0eXBlIiwiX3RpcHB5Iiwic2hvd190b29sdGlwIiwiZXhwb3J0T2JqIiwiZXhwb3J0TmFtZSIsImRhdGFTdHIiLCJkb3dubG9hZEFuY2hvck5vZGUiLCJjbGljayIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsInJlYWRBc1RleHQiLCIkYmFja3VwaWQiLCIkYXBwZW5kVE8iLCJpbnRlcmFjdGl2ZSIsIm9uU2hvd24iLCJyZW1vdmVfYWN0aXZlX2NsYXNzIiwiYWRkX2FjdGl2ZV9jbGFzcyIsIiRlIiwiaXMiLCIkY3VzdG9tX2lucHV0IiwiJHJhZGlvcyIsIiRjaGVja2JveCIsIiRpIiwiaGFuZGxlX2FyZ3MiLCJjaG9zZW4iLCIkY2xvbmVfd3JhcCIsIiRhZGRfYnRuIiwiJGxpbWl0IiwibGltaXQiLCIkZXJvcl9tc2ciLCJlcnJvcl9tc2ciLCIkc29ydCIsInNvcnQiLCJpdGVtcyIsImhhbmRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJ1aSIsImNzcyIsInN0b3AiLCJXUE9uaW9uQ2xvbmVyIiwiYWRkX2J0biIsImNsb25lX2VsZW0iLCJyZW1vdmVfYnRuIiwidGVtcGxhdGVBZnRlclJlbmRlciIsIndwb25pb25fZmllbGQiLCJyZWxvYWQiLCJvblJlbW92ZUFmdGVyIiwic29ydGFibGUiLCJvbkxpbWl0UmVhY2hlZCIsInByZXBlbmQiLCJ3cG9uaW9uX25vdGljZSIsInNob3dfYW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsImhpZGVfYW5pbWF0aW9uIiwid3BDb2xvclBpY2tlciIsIiRzZXR0aW5ncyIsIiR2aWV3IiwicGx1Z2lucyIsInJhbmdlUGx1Z2luIiwiaW5wdXQiLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsIiRodG1sIiwid2Vic2FmZSIsImZvbnRzIiwiYnVpbGRfb3B0aW9ucyIsInZhcmlhbnRzIiwiZ29vZ2xlX2ZvbnRzIiwiJHZhcmlhbnQiLCIkaHRtbF90ZW1wIiwiJGlucHV0IiwiJHByZXZpZXciLCJ3cF9tZWRpYV9mcmFtZSIsIiRhZGQiLCIkZWRpdCIsIiRjbGVhciIsIiRtYW5hZ2UiLCJpZHMiLCJ3aGF0Iiwic3RhdGUiLCJtZWRpYSIsImdhbGxlcnkiLCJsaWJyYXJ5IiwiZnJhbWUiLCJtdWx0aXBsZSIsIm9wZW4iLCJlZGl0Iiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJzZWxlY3RlZElkcyIsIm1vZGVscyIsImF0dGFjaG1lbnQiLCJ0b0pTT04iLCJzaXplcyIsInRodW1iIiwidGh1bWJuYWlsIiwiJHRtcCIsIiRwYXJlbnQiLCIkaW1hZ2VfaWQiLCIkayIsIiR2IiwiY3Vyc29yIiwic2Nyb2xsU2Vuc2l0aXZpdHkiLCJmb3JjZVBsYWNlaG9sZGVyU2l6ZSIsImhlbHBlciIsIm9wYWNpdHkiLCIkaXRlbSIsImhlaWdodCIsIiRtYXAiLCJkZXRhaWxzIiwiZGV0YWlsc0F0dHJpYnV0ZSIsIiRfaW5zdGFuY2UiLCJnZW9jb21wbGV0ZSIsImJpbmQiLCJsYXRMbmciLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJsYXQiLCJwYXJzZUZsb2F0IiwibG5nIiwiJGdyb3VwX3dyYXAiLCIkZXJyb3JfbXNnIiwiYmluZF9ldmVudHNfZm9yX3RpdGxlIiwicGFyc2VJbnQiLCJvblJlbW92ZSIsInVwZGF0ZV9ncm91cHNfdGl0bGUiLCIkbWFjaGVkIiwiJGhlYWRpbmciLCIkX3RoaXMiLCIkcmVtb3ZlX2J0biIsIiR3b3JrIiwiZWxlbXMiLCJwb3B1cCIsImVsbSIsImluaXRfdG9vbHRpcCIsInBvcHVwX3Rvb2x0aXAiLCIkdHAiLCIkZWxtIiwiJGluc3RhbmNlIiwiJGhlaWdodCIsIiRpY29uIiwiY2xvc2VNb2RhbCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsIiRyZXMiLCJyZXNldFZhbGlkYXRpb25NZXNzYWdlIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsIiRwb3B1cCIsImFsbG93T3V0c2lkZUNsaWNrIiwiY3VzdG9tQ2xhc3MiLCIkcG9wdXBfZWxlbSIsIkZpZWxkIiwiY29tcGxldGUiLCIkcHJldmlld19hZGQiLCJtZWRpYV9pbnN0YW5jZSIsImhvb2siLCJmaXJzdCIsImF0dHJpYnV0ZXMiLCJpbnB1dG1hc2siLCIkdGhpc19lbGVtIiwiJHRhYiIsImdsb2JhbF92YWxpZGF0ZSIsImFmdGVyIiwiZXEiLCJpbWFnZSIsInNob3dfcHJldmlldyIsImRyb3Bkb3duUGFyZW50IiwicHJvY2Vzc1Jlc3VsdHMiLCJ0ZXJtcyIsInBhcmFtcyIsInEiLCJ0ZXJtIiwicXVlcnlfYXJncyIsInF1ZXJ5X29wdGlvbnMiLCJ0cmFuc3BvcnQiLCJmYWlsdXJlIiwic2VsZWN0MiIsIiRlbmFibGVkIiwiJGRpc2FibGVkIiwiY29ubmVjdFdpdGgiLCJmb250X3dlaWdodF9zdHlsZSIsIiRmb250X2ZpZWxkIiwiJGZvbnQiLCIkZm9udF93ZWlnaHRfc3R5bGUiLCJmb250X3N0eWxlIiwiJHRhZyIsIiRjb2xvciIsIiRhbGlnbiIsIiRmb250U2l6ZSIsIiRsaW5lSGVpZ2h0IiwiJGxldHRlclNwYWNpbmciLCJ3ZWlnaHQiLCIkX2F0dHJzIiwiJHRleHQiLCIkd2VpZ2h0X3ZhbCIsIiRzdHlsZV92YWwiLCJmcmFtZV90aXRsZSIsInVwbG9hZF90eXBlIiwiaW5zZXJ0X3RpdGxlIiwiJHRleHRhcmVhIiwid3BMaW5rIiwiJGRlcCIsImNvbnRyb2xsZXIiLCJjb25kaXRpb24iLCIkY29udHJvbGxlciIsIiRjb25kaXRpb24iLCIkZmllbGQiLCIkSU5QVVQiLCJjb250eHQiLCJjcmVhdGVSdWxlIiwiaW5jbHVkZSIsImV4dGVuZCIsImFuaW1hdGVDc3MiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRW5kIiwiT0FuaW1hdGlvbiIsIk1vekFuaW1hdGlvbiIsIldlYmtpdEFuaW1hdGlvbiIsInQiLCJvbmUiLCIkYXJndW1lbnRzIiwidGlwcHlfaGVscGVyIiwiY3JlYXRlX2luc3RhbmNlIiwiJF9pbnN0YW5jZV9pZCIsImNvcmUiLCJyYW5kX2lkIiwiJHRpdGxlIiwiJGRhdGFfdGlwcHkiLCJnZXRfaW5zdGFuY2UiLCIkc3RhdHVzIiwiJF9lbCIsIiRhdXRvIiwic2V0VGltZW91dCIsIndwb25pb25fc2V0dXAiLCIkY29yZSIsIiR0YW5zIiwiJG1vZHVsZSIsIndwb25pb25fY3JlYXRlX2ZpZWxkIiwiJGluaXRfbWV0aG9kIiwiJG1ldGhvZHMiLCIkb3JnX2NsYXNzIiwiJGZpZWxkX3R5cGUiLCIkYXJndW1lbnQiLCIkbG9nX2VyciIsIiRpbWFnZSIsImltYWdlVXJsIiwiYmFja2dyb3VuZCIsImJhY2tkcm9wIiwiJG1jZV9lZGl0b3IiLCJ0aW55TUNFUHJlSW5pdCIsIm1jZUluaXQiLCIkcXVpY2tfdGFncyIsInF0SW5pdCIsIiRORVdfSUQiLCIkdGV4dEFyZWEiLCIkYWN0dWFsX0lEIiwiJGFjdHVhbF9odG1sIiwiJHJlZ2V4IiwidGlueW1jZSIsInRpbnlNQ0UiLCJxdWlja3RhZ3MiLCIkZmlkIiwiJHRvb2x0aXBfa2V5IiwidmFsaWRfanNvbiIsImlzRmV0Y2hpbmciLCJjYW5GZXRjaCIsIiRjbGFzc1RvQ2hlY2siLCIkYXR0ciIsInVwZGF0ZUR1cmF0aW9uIiwib25TaG93IiwidGlwIiwicmVzcG9uc2UiLCJmZXRjaCIsImJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpc1Zpc2libGUiLCJzZXRDb250ZW50Iiwib25IaWRkZW4iLCJwb3BwZXJPcHRpb25zIiwibW9kaWZpZXJzIiwicHJldmVudE92ZXJmbG93IiwiaWNvbiIsIiRmaW5hbF9hcmdzIiwicG9zdF9pZHMiLCIkYnVsa19lZGl0IiwiY2hpbGRyZW4iLCJzZXJpYWxpemVPYmplY3QiLCJhc3luYyIsImNhY2hlIiwiV1BPbmlvbl9HdXR0ZW5iZXJnIiwic2F2ZSIsImJsb2NrIiwic2F2ZV9oYW5kbGVyIiwiZWRpdF9oYW5kbGVyIiwiYmxvY2tzIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCIkX3Bvc3RpZHMiLCJwb3N0X2lkIiwiYmxvY2tfaWQiLCJjbGllbnRJZCIsIiRyZW1vdGUiLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiU2VydmVyU2lkZVJlbmRlciIsImVkaXRvciIsIiR3cG9fYmxvY2tzIiwiaXNBcnJheSIsImZpeF9tZWRpYV91aSIsIiR0YWJsZSIsIiRmaWVsZHMiLCJmcmFtZXMiLCJicm93c2UiLCJXUE9uaW9uX01ldGFib3hfTW9kdWxlIiwibWVudSIsInNsaWRlVG9nZ2xlIiwiJGhyZWYiLCIkc2VjdGlvbiIsIiRwYXJlbnRfYWN0aXZlcyIsIiRjdXJyZW50IiwiJGJhc2UiLCIkaGlkZGVuIiwibWVzc2FnZSIsIm92ZXJsYXlDU1MiLCIkdmFsdWVzIiwic2VyaWFsaXplIiwidW5ibG9jayIsIldQT25pb25fUXVpY2tfRWRpdCIsInZhbHVlcyIsIiRsaXN0IiwiY2xvc2VzdCIsInZjIiwid3Bvbmlvbl92YyIsImZpZWxkcyIsImFic3RyYWN0Iiwid3Bvbmlvbl92Y19pbml0Iiwid3Bvbmlvbl92Y19maWVsZCIsIndwb25pb25fY3JlYXRlX3ZjX2ZpZWxkIiwiaXNfdmNfcGFyYW1fZWxlbSIsImlucHV0X2NoYW5nZSIsImlucHV0X2RhdGEiLCJXUE9uaW9uX1ZDX0ZpZWxkIiwiaGFuZGxlX3NpbmdsZV9jaGFuZ2UiLCIkc2F2ZV9kYXRhIiwic2ltcGxlX2FycmF5Iiwia2V5X3ZhbHVlX2FycmF5Iiwia2V5X3ZhbHVlX211bHRpX2FycmF5Iiwic29ydGVyX3ZhbHVlcyIsInZjX3NhdmUiLCIkcGFyYW1fbmFtZSIsInBhcmFtX25hbWUiLCIkciIsIiRzIiwiZW5jb2RlX2NvbnRlbnQiLCIkc2VsZWN0IiwiV1BPbmlvbl9vbkF2YWlsYWJsZSIsInNlbCIsIndwb25pb25fd3BfcG9pbnRlcl9jcmVhdGUiLCIkcG9pbnRlcnNfZ3JvdXAiLCIkZ3JvdXBfaWQiLCIkcG9pbnRlcl9rZXkiLCIkcG9pbnRlciIsIiRoYW5kbGVyIiwicG9pbnRlcldpZHRoIiwicG9pbnRlckNsYXNzIiwiY2xhc3MiLCJlZGdlIiwiYWxpZ24iLCJjbG9zZSIsInBvc3QiLCJwb2ludGVyIiwiYnV0dG9ucyIsImpzbmV4dCIsIiRuZXh0IiwiaWNvbl9jbGFzcyIsInNldHVwIiwiJHBpZCIsInZzcF9qc19oZWxwZXIiLCJsb2Rhc2giLCJub0NvbmZsaWN0IiwibWV0YWJveCIsIndwX3BvaW50ZXJzIiwibWVkaWFfZmllbGRzIiwiYnVsa19lZGl0IiwiZ3V0dGVuYmVyZyIsIndvb2NvbW1lcmNlIiwicXVpY2tfZWRpdCIsInZpc3VhbF9jb21wb3NlciIsIm1vZGFsIiwiYWpheGVyIiwiZGVidWciLCIkd3BvZl9kaXYiLCJzdWJtZW51X2luZGljYXRvciIsInRvZ2dsZUNsYXNzIiwiJHdpZGdldCIsIiRtZW51IiwiV1BPbmlvbl9XUF9Nb2RhbCIsIkJhY2tib25lIiwiVmlldyIsInRlbXBsYXRlcyIsImV2ZW50cyIsImFjdGl2ZV9wYWdlIiwiYWN0aXZlX3NlY3Rpb24iLCJpbml0aWFsaXplIiwibGVmdF9tZW51IiwiaGlkZV9tZW51IiwiYmluZEFsbCIsImluaXRfdGVtcGxhdGVzIiwicmVuZGVyIiwiJG0iLCJmcmFtZV9tZW51X2l0ZW0iLCJyb3V0ZXJfbWVudV9pdGVtIiwicGFnZV9jb250ZW50Iiwic2VjdGlvbl9jb250ZW50IiwiJGNvbnRlbnQiLCIkX2NvbnRlbnQiLCIkX21lbnUiLCJwcmVzZXJ2ZUZvY3VzIiwiZm9jdXMiLCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrIiwiJHRhcmdldCIsIiRzaG93X3RhcmdldCIsImhhbmRsZV90YWJfY2xpY2siLCIkcGFnZSIsImhhcyIsInVuZGVsZWdhdGVFdmVudHMiLCJvZmYiLCJzYXZlTW9kYWwiLCJkb05vdGhpbmciLCIkb3B0aW9ucyIsImdl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TDtBQUNBMEIsU0FBS3pCLENBQUw7QUFDQUgsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQkssR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk0sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk8sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlEsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQkssR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk0sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk8sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlEsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQkssR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk0sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk8sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlEsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQkssR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk0sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk8sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlEsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlUsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlcsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlUsR0FBM0IsRUFBZ0MsU0FBaEMsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlcsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlUsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlcsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlMsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlUsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStC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Q0FBLG1CQUFPQSxDQUFFLHNEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLG9EQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDREQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHdEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHdEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHNEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHdEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHNEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDhEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDREQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLG9EQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDhEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDhEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDBEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLHNEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDREQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDBEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLG9EQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLDBEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGdFQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLG9EQUFUO0FBQ0FBLG1CQUFPQSxDQUFFLGtEQUFULEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOzs7Ozs7OztBQUVBLElBQU0rOUIsbUJBQW1CQyxTQUFTQyxJ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VTtBQUN4QnhTLE9BQUksS0FEb0I7QUFFeEJuTSxTQUFNLEtBRmtCO0FBR3hCc2tCLGNBQVcsZUFIYTtBQUl4QnNGLFVBQU8sRUFKaUI7QUFLeEJpQixjQUFXO0FBTGEsR0FBVixFQU1ad0IsUUFOWSxDQUFmOztBQVFBLE1BQUlqQyxnQkFBSixDQUFzQmx1QixFQUFFeWlCLE1BQUYsQ0FBVTtBQUMvQmlNLGNBQVcsS0FBSzBCLGFBQUwsRUFEb0I7QUFFL0Iva0IsU0FBTSxLQUFLMkIsT0FBTCxDQUFjLE1BQWQsQ0FGeUI7QUFHL0IyaEIsY0FBVyxLQUFLM2hCLE9BQUwsQ0FBYyxXQUFkO0FBSG9CLEdBQVYsRUFJbkIsS0FBS0EsT0FBTCxDQUFjLE9BQWQsQ0FKbUIsQ0FBdEI7QUFLQTs7OztrQ0FFZTtBQUNmLE9BQUk4TCxVQUFVLEtBQWQ7QUFDQSxPQUFJLEtBQUs5TCxPQUFMLENBQWMsTUFBZCxDQUFKLEVBQTZCO0FBQzVCOEwsY0FBVSxFQUFWOztBQUVBOVksTUFBRXVOLElBQUYsQ0FBUSxLQUFLUCxPQUFMLENBQWMsTUFBZCxDQUFSLEVBQWdDLFVBQUVuTixLQUFGLEVBQVNVLElBQVQsRUFBbUI7QUFDbER1WSxhQUFTdlksSUFBVCxJQUFvQixPQUFPVixNQUFPLFlBQVAsQ0FBUCxLQUFpQyxXQUFuQyxHQUFtREEsTUFBTyxZQUFQLENBQW5ELEdBQTJFQSxNQUFPLE9BQVAsQ0FBN0Y7QUFDQSxLQUZEO0FBR0E7QUFDRCxVQUFPaVosT0FBUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNRixtQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzXCIpO1xuIiwiaW1wb3J0IHZhbGlkYXRlTmFtZXNwYWNlIGZyb20gJy4vdmFsaWRhdGVOYW1lc3BhY2UuanMnO1xuaW1wb3J0IHZhbGlkYXRlSG9va05hbWUgZnJvbSAnLi92YWxpZGF0ZUhvb2tOYW1lLmpzJztcbmltcG9ydCB7IGRvQWN0aW9uIH0gZnJvbSAnLi8nO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCBhZGQgYSBob29rLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCBhZGRzIGEgbmV3IGhvb2suXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQWRkSG9vayhob29rcykge1xuICAvKipcbiAgICogQWRkcyB0aGUgaG9vayB0byB0aGUgYXBwcm9wcmlhdGUgaG9va3MgY29udGFpbmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICBob29rTmFtZSAgTmFtZSBvZiBob29rIHRvIGFkZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gICBuYW1lc3BhY2UgVGhlIHVuaXF1ZSBuYW1lc3BhY2UgaWRlbnRpZnlpbmcgdGhlIGNhbGxiYWNrIGluIHRoZSBmb3JtIGB2ZW5kb3IvcGx1Z2luL2Z1bmN0aW9uYC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaG9vayBpcyBydW5cbiAgICogQHBhcmFtIHs/bnVtYmVyfSAgcHJpb3JpdHkgIFByaW9yaXR5IG9mIHRoaXMgaG9vayAoZGVmYXVsdD0xMClcbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBhZGRIb29rKGhvb2tOYW1lLCBuYW1lc3BhY2UsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAxMDtcblxuICAgIGlmICghdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkYXRlTmFtZXNwYWNlKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxiYWNrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVmFsaWRhdGUgbnVtZXJpYyBwcmlvcml0eVxuXG5cbiAgICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiBwcmlvcml0eSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0lmIHNwZWNpZmllZCwgdGhlIGhvb2sgcHJpb3JpdHkgbXVzdCBiZSBhIG51bWJlci4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlciA9IHtcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgfTtcblxuICAgIGlmIChob29rc1tob29rTmFtZV0pIHtcbiAgICAgIC8vIEZpbmQgdGhlIGNvcnJlY3QgaW5zZXJ0IGluZGV4IG9mIHRoZSBuZXcgaG9vay5cbiAgICAgIHZhciBoYW5kbGVycyA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycztcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgd2hpbGUgKGkgPCBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGhhbmRsZXJzW2ldLnByaW9yaXR5ID4gcHJpb3JpdHkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGkrKztcbiAgICAgIH0gLy8gSW5zZXJ0IChvciBhcHBlbmQpIHRoZSBuZXcgaG9vay5cblxuXG4gICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMCwgaGFuZGxlcik7IC8vIFdlIG1heSBhbHNvIGJlIGN1cnJlbnRseSBleGVjdXRpbmcgdGhpcyBob29rLiAgSWYgdGhlIGNhbGxiYWNrXG4gICAgICAvLyB3ZSdyZSBhZGRpbmcgd291bGQgY29tZSBhZnRlciB0aGUgY3VycmVudCBjYWxsYmFjaywgdGhlcmUncyBub1xuICAgICAgLy8gcHJvYmxlbTsgb3RoZXJ3aXNlIHdlIG5lZWQgdG8gaW5jcmVhc2UgdGhlIGV4ZWN1dGlvbiBpbmRleCBvZlxuICAgICAgLy8gYW55IG90aGVyIHJ1bnMgYnkgMSB0byBhY2NvdW50IGZvciB0aGUgYWRkZWQgZWxlbWVudC5cblxuICAgICAgKGhvb2tzLl9fY3VycmVudCB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoaG9va0luZm8pIHtcbiAgICAgICAgaWYgKGhvb2tJbmZvLm5hbWUgPT09IGhvb2tOYW1lICYmIGhvb2tJbmZvLmN1cnJlbnRJbmRleCA+PSBpKSB7XG4gICAgICAgICAgaG9va0luZm8uY3VycmVudEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBob29rIG9mIGl0cyB0eXBlLlxuICAgICAgaG9va3NbaG9va05hbWVdID0ge1xuICAgICAgICBoYW5kbGVyczogW2hhbmRsZXJdLFxuICAgICAgICBydW5zOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChob29rTmFtZSAhPT0gJ2hvb2tBZGRlZCcpIHtcbiAgICAgIGRvQWN0aW9uKCdob29rQWRkZWQnLCBob29rTmFtZSwgbmFtZXNwYWNlLCBjYWxsYmFjaywgcHJpb3JpdHkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUFkZEhvb2suanMubWFwIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gdGhlIG5hbWUgb2YgdGhlXG4gKiBjdXJyZW50bHkgcnVubmluZyBob29rLCBvciBgbnVsbGAgaWYgbm8gaG9vayBvZiB0aGUgZ2l2ZW4gdHlwZSBpcyBjdXJyZW50bHlcbiAqIHJ1bm5pbmcuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzICAgICAgICAgIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnQgaG9vay5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3VycmVudEhvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnRseSBydW5uaW5nIGhvb2ssIG9yIGBudWxsYCBpZiBubyBob29rIG9mXG4gICAqIHRoZSBnaXZlbiB0eXBlIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHs/c3RyaW5nfSAgICAgICAgICAgICBUaGUgbmFtZSBvZiB0aGUgY3VycmVudGx5IHJ1bm5pbmcgaG9vaywgb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYG51bGxgIGlmIG5vIGhvb2sgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmVudEhvb2soKSB7XG4gICAgaWYgKCFob29rcy5fX2N1cnJlbnQgfHwgIWhvb2tzLl9fY3VycmVudC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBob29rcy5fX2N1cnJlbnRbaG9va3MuX19jdXJyZW50Lmxlbmd0aCAtIDFdLm5hbWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUN1cnJlbnRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlQ3VycmVudEhvb2suanMubWFwIiwiaW1wb3J0IHZhbGlkYXRlSG9va05hbWUgZnJvbSAnLi92YWxpZGF0ZUhvb2tOYW1lLmpzJztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmV0dXJuIHRoZSBudW1iZXIgb2YgdGltZXMgYVxuICogaG9vayBoYXMgYmVlbiBjYWxsZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBob29rJ3MgY2FsbCBjb3VudC5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEaWRIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdGltZXMgYW4gYWN0aW9uIGhhcyBiZWVuIGZpcmVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGhvb2tOYW1lIFRoZSBob29rIG5hbWUgdG8gY2hlY2suXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gICAgICAgICAgVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgaG9vayBoYXMgcnVuLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGRpZEhvb2soaG9va05hbWUpIHtcbiAgICBpZiAoIXZhbGlkYXRlSG9va05hbWUoaG9va05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzW2hvb2tOYW1lXSAmJiBob29rc1tob29rTmFtZV0ucnVucyA/IGhvb2tzW2hvb2tOYW1lXS5ydW5zIDogMDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlkSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZURpZEhvb2suanMubWFwIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gd2hldGhlciBhIGhvb2sgaXNcbiAqIGN1cnJlbnRseSBiZWluZyBleGVjdXRlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGV0aGVyIGEgaG9vayBpcyBjdXJyZW50bHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBiZWluZyBleGVjdXRlZC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRG9pbmdIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgYSBob29rIGlzIGN1cnJlbnRseSBiZWluZyBleGVjdXRlZC5cbiAgICpcbiAgICogQHBhcmFtICB7P3N0cmluZ30gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gY2hlY2sgZm9yLiAgSWZcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgb21pdHRlZCwgd2lsbCBjaGVjayBmb3IgYW55IGhvb2sgYmVpbmcgZXhlY3V0ZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGhvb2sgaXMgYmVpbmcgZXhlY3V0ZWQuXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gZG9pbmdIb29rKGhvb2tOYW1lKSB7XG4gICAgLy8gSWYgdGhlIGhvb2tOYW1lIHdhcyBub3QgcGFzc2VkLCBjaGVjayBmb3IgYW55IGN1cnJlbnQgaG9vay5cbiAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBob29rTmFtZSkge1xuICAgICAgcmV0dXJuICd1bmRlZmluZWQnICE9PSB0eXBlb2YgaG9va3MuX19jdXJyZW50WzBdO1xuICAgIH0gLy8gUmV0dXJuIHRoZSBfX2N1cnJlbnQgaG9vay5cblxuXG4gICAgcmV0dXJuIGhvb2tzLl9fY3VycmVudFswXSA/IGhvb2tOYW1lID09PSBob29rcy5fX2N1cnJlbnRbMF0ubmFtZSA6IGZhbHNlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEb2luZ0hvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVEb2luZ0hvb2suanMubWFwIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gd2hldGhlciBhbnkgaGFuZGxlcnMgYXJlXG4gKiBhdHRhY2hlZCB0byBhIHBhcnRpY3VsYXIgaG9vay5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGV0aGVyIGFueSBoYW5kbGVycyBhcmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hlZCB0byBhIHBhcnRpY3VsYXIgaG9vay5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGFzSG9vayhob29rcykge1xuICAvKipcbiAgICogUmV0dXJucyBob3cgbWFueSBoYW5kbGVycyBhcmUgYXR0YWNoZWQgZm9yIHRoZSBnaXZlbiBob29rLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICBob29rTmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBjaGVjayBmb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlcmUgYXJlIGhhbmRsZXJzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIHRoZSBnaXZlbiBob29rLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGhhc0hvb2soaG9va05hbWUpIHtcbiAgICByZXR1cm4gaG9va05hbWUgaW4gaG9va3M7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhhc0hvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVIYXNIb29rLmpzLm1hcCIsImltcG9ydCBjcmVhdGVBZGRIb29rIGZyb20gJy4vY3JlYXRlQWRkSG9vayc7XG5pbXBvcnQgY3JlYXRlUmVtb3ZlSG9vayBmcm9tICcuL2NyZWF0ZVJlbW92ZUhvb2snO1xuaW1wb3J0IGNyZWF0ZUhhc0hvb2sgZnJvbSAnLi9jcmVhdGVIYXNIb29rJztcbmltcG9ydCBjcmVhdGVSdW5Ib29rIGZyb20gJy4vY3JlYXRlUnVuSG9vayc7XG5pbXBvcnQgY3JlYXRlQ3VycmVudEhvb2sgZnJvbSAnLi9jcmVhdGVDdXJyZW50SG9vayc7XG5pbXBvcnQgY3JlYXRlRG9pbmdIb29rIGZyb20gJy4vY3JlYXRlRG9pbmdIb29rJztcbmltcG9ydCBjcmVhdGVEaWRIb29rIGZyb20gJy4vY3JlYXRlRGlkSG9vayc7XG4vKipcbiAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIGhvb2tzIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBob29rcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVIb29rcygpIHtcbiAgdmFyIGFjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgZmlsdGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGFjdGlvbnMuX19jdXJyZW50ID0gW107XG4gIGZpbHRlcnMuX19jdXJyZW50ID0gW107XG4gIHJldHVybiB7XG4gICAgYWRkQWN0aW9uOiBjcmVhdGVBZGRIb29rKGFjdGlvbnMpLFxuICAgIGFkZEZpbHRlcjogY3JlYXRlQWRkSG9vayhmaWx0ZXJzKSxcbiAgICByZW1vdmVBY3Rpb246IGNyZWF0ZVJlbW92ZUhvb2soYWN0aW9ucyksXG4gICAgcmVtb3ZlRmlsdGVyOiBjcmVhdGVSZW1vdmVIb29rKGZpbHRlcnMpLFxuICAgIGhhc0FjdGlvbjogY3JlYXRlSGFzSG9vayhhY3Rpb25zKSxcbiAgICBoYXNGaWx0ZXI6IGNyZWF0ZUhhc0hvb2soZmlsdGVycyksXG4gICAgcmVtb3ZlQWxsQWN0aW9uczogY3JlYXRlUmVtb3ZlSG9vayhhY3Rpb25zLCB0cnVlKSxcbiAgICByZW1vdmVBbGxGaWx0ZXJzOiBjcmVhdGVSZW1vdmVIb29rKGZpbHRlcnMsIHRydWUpLFxuICAgIGRvQWN0aW9uOiBjcmVhdGVSdW5Ib29rKGFjdGlvbnMpLFxuICAgIGFwcGx5RmlsdGVyczogY3JlYXRlUnVuSG9vayhmaWx0ZXJzLCB0cnVlKSxcbiAgICBjdXJyZW50QWN0aW9uOiBjcmVhdGVDdXJyZW50SG9vayhhY3Rpb25zKSxcbiAgICBjdXJyZW50RmlsdGVyOiBjcmVhdGVDdXJyZW50SG9vayhmaWx0ZXJzKSxcbiAgICBkb2luZ0FjdGlvbjogY3JlYXRlRG9pbmdIb29rKGFjdGlvbnMpLFxuICAgIGRvaW5nRmlsdGVyOiBjcmVhdGVEb2luZ0hvb2soZmlsdGVycyksXG4gICAgZGlkQWN0aW9uOiBjcmVhdGVEaWRIb29rKGFjdGlvbnMpLFxuICAgIGRpZEZpbHRlcjogY3JlYXRlRGlkSG9vayhmaWx0ZXJzKSxcbiAgICBhY3Rpb25zOiBhY3Rpb25zLFxuICAgIGZpbHRlcnM6IGZpbHRlcnNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9va3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVIb29rcy5qcy5tYXAiLCJpbXBvcnQgdmFsaWRhdGVOYW1lc3BhY2UgZnJvbSAnLi92YWxpZGF0ZU5hbWVzcGFjZS5qcyc7XG5pbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuaW1wb3J0IHsgZG9BY3Rpb24gfSBmcm9tICcuLyc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJlbW92ZSBhIHNwZWNpZmllZCBob29rIG9yIGFsbFxuICogaG9va3MgYnkgdGhlIGdpdmVuIG5hbWUuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzICAgICAgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKiBAcGFyYW0gIHtib29sZWFufSAgICAgcmVtb3ZlQWxsICBXaGV0aGVyIHRvIHJlbW92ZSBhbGwgY2FsbGJhY2tzIGZvciBhIGhvb2tOYW1lLCB3aXRob3V0IHJlZ2FyZCB0byBuYW1lc3BhY2UuIFVzZWQgdG8gY3JlYXRlIGByZW1vdmVBbGwqYCBmdW5jdGlvbnMuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgRnVuY3Rpb24gdGhhdCByZW1vdmVzIGhvb2tzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUhvb2soaG9va3MsIHJlbW92ZUFsbCkge1xuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGNhbGxiYWNrIChvciBhbGwgY2FsbGJhY2tzKSBmcm9tIHRoZSBob29rIHdpdGggYVxuICAgKiBnaXZlbiBob29rTmFtZSBhbmQgbmFtZXNwYWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgaG9va05hbWUgIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIG1vZGlmeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgIG5hbWVzcGFjZSBUaGUgdW5pcXVlIG5hbWVzcGFjZSBpZGVudGlmeWluZyB0aGUgY2FsbGJhY2sgaW4gdGhlIGZvcm0gYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgICAgICAgIFRoZSBudW1iZXIgb2YgY2FsbGJhY2tzIHJlbW92ZWQuXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gcmVtb3ZlSG9vayhob29rTmFtZSwgbmFtZXNwYWNlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcmVtb3ZlQWxsICYmICF2YWxpZGF0ZU5hbWVzcGFjZShuYW1lc3BhY2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBCYWlsIGlmIG5vIGhvb2tzIGV4aXN0IGJ5IHRoaXMgbmFtZVxuXG5cbiAgICBpZiAoIWhvb2tzW2hvb2tOYW1lXSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZXJzUmVtb3ZlZCA9IDA7XG5cbiAgICBpZiAocmVtb3ZlQWxsKSB7XG4gICAgICBoYW5kbGVyc1JlbW92ZWQgPSBob29rc1tob29rTmFtZV0uaGFuZGxlcnMubGVuZ3RoO1xuICAgICAgaG9va3NbaG9va05hbWVdID0ge1xuICAgICAgICBydW5zOiBob29rc1tob29rTmFtZV0ucnVucyxcbiAgICAgICAgaGFuZGxlcnM6IFtdXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcnkgdG8gZmluZCB0aGUgc3BlY2lmaWVkIGNhbGxiYWNrIHRvIHJlbW92ZS5cbiAgICAgIHZhciBoYW5kbGVycyA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycztcblxuICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbaV0ubmFtZXNwYWNlID09PSBuYW1lc3BhY2UpIHtcbiAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgaGFuZGxlcnNSZW1vdmVkKys7IC8vIFRoaXMgY2FsbGJhY2sgbWF5IGFsc28gYmUgcGFydCBvZiBhIGhvb2sgdGhhdCBpc1xuICAgICAgICAgIC8vIGN1cnJlbnRseSBleGVjdXRpbmcuICBJZiB0aGUgY2FsbGJhY2sgd2UncmUgcmVtb3ZpbmdcbiAgICAgICAgICAvLyBjb21lcyBhZnRlciB0aGUgY3VycmVudCBjYWxsYmFjaywgdGhlcmUncyBubyBwcm9ibGVtO1xuICAgICAgICAgIC8vIG90aGVyd2lzZSB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBleGVjdXRpb24gaW5kZXggb2YgYW55XG4gICAgICAgICAgLy8gb3RoZXIgcnVucyBieSAxIHRvIGFjY291bnQgZm9yIHRoZSByZW1vdmVkIGVsZW1lbnQuXG5cbiAgICAgICAgICAoaG9va3MuX19jdXJyZW50IHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChob29rSW5mbykge1xuICAgICAgICAgICAgaWYgKGhvb2tJbmZvLm5hbWUgPT09IGhvb2tOYW1lICYmIGhvb2tJbmZvLmN1cnJlbnRJbmRleCA+PSBpKSB7XG4gICAgICAgICAgICAgIGhvb2tJbmZvLmN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBpID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhvb2tOYW1lICE9PSAnaG9va1JlbW92ZWQnKSB7XG4gICAgICBkb0FjdGlvbignaG9va1JlbW92ZWQnLCBob29rTmFtZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcnNSZW1vdmVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZW1vdmVIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlUmVtb3ZlSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIGV4ZWN1dGUgYWxsIGNhbGxiYWNrc1xuICogcmVnaXN0ZXJlZCB0byBhIGhvb2sgb2YgdGhlIHNwZWNpZmllZCB0eXBlLCBvcHRpb25hbGx5IHJldHVybmluZyB0aGUgZmluYWxcbiAqIHZhbHVlIG9mIHRoZSBjYWxsIGNoYWluLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyAgICAgICAgICBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqIEBwYXJhbSAgez9ib29sZWFufSAgICByZXR1cm5GaXJzdEFyZyBXaGV0aGVyIGVhY2ggaG9vayBjYWxsYmFjayBpcyBleHBlY3RlZCB0b1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdHMgZmlyc3QgYXJndW1lbnQuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgICAgIEZ1bmN0aW9uIHRoYXQgcnVucyBob29rIGNhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUnVuSG9vayhob29rcywgcmV0dXJuRmlyc3RBcmcpIHtcbiAgLyoqXG4gICAqIFJ1bnMgYWxsIGNhbGxiYWNrcyBmb3IgdGhlIHNwZWNpZmllZCBob29rLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGhvb2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIHJ1bi5cbiAgICogQHBhcmFtICB7Li4uKn0gICBhcmdzICAgICBBcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgaG9vayBjYWxsYmFja3MuXG4gICAqXG4gICAqIEByZXR1cm4geyp9ICAgICAgICAgICAgICAgUmV0dXJuIHZhbHVlIG9mIHJ1bm5lciwgaWYgYXBwbGljYWJsZS5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBydW5Ib29rcyhob29rTmFtZSkge1xuICAgIGlmICghaG9va3NbaG9va05hbWVdKSB7XG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgcnVuczogMFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBob29rc1tob29rTmFtZV0ucnVucysrO1xuICAgIHZhciBoYW5kbGVycyA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICghaGFuZGxlcnMgfHwgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJldHVybkZpcnN0QXJnID8gYXJnc1swXSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgaG9va0luZm8gPSB7XG4gICAgICBuYW1lOiBob29rTmFtZSxcbiAgICAgIGN1cnJlbnRJbmRleDogMFxuICAgIH07XG5cbiAgICBob29rcy5fX2N1cnJlbnQucHVzaChob29rSW5mbyk7XG5cbiAgICB3aGlsZSAoaG9va0luZm8uY3VycmVudEluZGV4IDwgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IGhhbmRsZXJzW2hvb2tJbmZvLmN1cnJlbnRJbmRleF07XG4gICAgICB2YXIgcmVzdWx0ID0gaGFuZGxlci5jYWxsYmFjay5hcHBseShudWxsLCBhcmdzKTtcblxuICAgICAgaWYgKHJldHVybkZpcnN0QXJnKSB7XG4gICAgICAgIGFyZ3NbMF0gPSByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGhvb2tJbmZvLmN1cnJlbnRJbmRleCsrO1xuICAgIH1cblxuICAgIGhvb2tzLl9fY3VycmVudC5wb3AoKTtcblxuICAgIGlmIChyZXR1cm5GaXJzdEFyZykge1xuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSdW5Ib29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlUnVuSG9vay5qcy5tYXAiLCJpbXBvcnQgY3JlYXRlSG9va3MgZnJvbSAnLi9jcmVhdGVIb29rcyc7XG5cbnZhciBfY3JlYXRlSG9va3MgPSBjcmVhdGVIb29rcygpLFxuICAgIGFkZEFjdGlvbiA9IF9jcmVhdGVIb29rcy5hZGRBY3Rpb24sXG4gICAgYWRkRmlsdGVyID0gX2NyZWF0ZUhvb2tzLmFkZEZpbHRlcixcbiAgICByZW1vdmVBY3Rpb24gPSBfY3JlYXRlSG9va3MucmVtb3ZlQWN0aW9uLFxuICAgIHJlbW92ZUZpbHRlciA9IF9jcmVhdGVIb29rcy5yZW1vdmVGaWx0ZXIsXG4gICAgaGFzQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmhhc0FjdGlvbixcbiAgICBoYXNGaWx0ZXIgPSBfY3JlYXRlSG9va3MuaGFzRmlsdGVyLFxuICAgIHJlbW92ZUFsbEFjdGlvbnMgPSBfY3JlYXRlSG9va3MucmVtb3ZlQWxsQWN0aW9ucyxcbiAgICByZW1vdmVBbGxGaWx0ZXJzID0gX2NyZWF0ZUhvb2tzLnJlbW92ZUFsbEZpbHRlcnMsXG4gICAgZG9BY3Rpb24gPSBfY3JlYXRlSG9va3MuZG9BY3Rpb24sXG4gICAgYXBwbHlGaWx0ZXJzID0gX2NyZWF0ZUhvb2tzLmFwcGx5RmlsdGVycyxcbiAgICBjdXJyZW50QWN0aW9uID0gX2NyZWF0ZUhvb2tzLmN1cnJlbnRBY3Rpb24sXG4gICAgY3VycmVudEZpbHRlciA9IF9jcmVhdGVIb29rcy5jdXJyZW50RmlsdGVyLFxuICAgIGRvaW5nQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmRvaW5nQWN0aW9uLFxuICAgIGRvaW5nRmlsdGVyID0gX2NyZWF0ZUhvb2tzLmRvaW5nRmlsdGVyLFxuICAgIGRpZEFjdGlvbiA9IF9jcmVhdGVIb29rcy5kaWRBY3Rpb24sXG4gICAgZGlkRmlsdGVyID0gX2NyZWF0ZUhvb2tzLmRpZEZpbHRlcixcbiAgICBhY3Rpb25zID0gX2NyZWF0ZUhvb2tzLmFjdGlvbnMsXG4gICAgZmlsdGVycyA9IF9jcmVhdGVIb29rcy5maWx0ZXJzO1xuXG5leHBvcnQgeyBjcmVhdGVIb29rcywgYWRkQWN0aW9uLCBhZGRGaWx0ZXIsIHJlbW92ZUFjdGlvbiwgcmVtb3ZlRmlsdGVyLCBoYXNBY3Rpb24sIGhhc0ZpbHRlciwgcmVtb3ZlQWxsQWN0aW9ucywgcmVtb3ZlQWxsRmlsdGVycywgZG9BY3Rpb24sIGFwcGx5RmlsdGVycywgY3VycmVudEFjdGlvbiwgY3VycmVudEZpbHRlciwgZG9pbmdBY3Rpb24sIGRvaW5nRmlsdGVyLCBkaWRBY3Rpb24sIGRpZEZpbHRlciwgYWN0aW9ucywgZmlsdGVycyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBWYWxpZGF0ZSBhIGhvb2tOYW1lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGhvb2tOYW1lIFRoZSBob29rIG5hbWUgdG8gdmFsaWRhdGUuIFNob3VsZCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgY29udGFpbmluZ1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5IG51bWJlcnMsIGxldHRlcnMsIGRhc2hlcywgcGVyaW9kcyBhbmQgdW5kZXJzY29yZXMuIEFsc28sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBob29rIG5hbWUgY2Fubm90IGJlZ2luIHdpdGggYF9fYC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgIFdoZXRoZXIgdGhlIGhvb2sgbmFtZSBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkge1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBob29rTmFtZSB8fCAnJyA9PT0gaG9va05hbWUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKC9eX18vLnRlc3QoaG9va05hbWUpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgaG9vayBuYW1lIGNhbm5vdCBiZWdpbiB3aXRoIGBfX2AuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWjAtOV8uLV0qJC8udGVzdChob29rTmFtZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIG5hbWUgY2FuIG9ubHkgY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzLCBkYXNoZXMsIHBlcmlvZHMgYW5kIHVuZGVyc2NvcmVzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZUhvb2tOYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsaWRhdGVIb29rTmFtZS5qcy5tYXAiLCIvKipcbiAqIFZhbGlkYXRlIGEgbmFtZXNwYWNlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHRvIHZhbGlkYXRlIC0gc2hvdWxkIHRha2UgdGhlIGZvcm1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB2ZW5kb3IvcGx1Z2luL2Z1bmN0aW9uYC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICBXaGV0aGVyIHRoZSBuYW1lc3BhY2UgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBuYW1lc3BhY2UgfHwgJycgPT09IG5hbWVzcGFjZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIG5hbWVzcGFjZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aMC05Xy5cXC1cXC9dKiQvLnRlc3QobmFtZXNwYWNlKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIG5hbWVzcGFjZSBjYW4gb25seSBjb250YWluIG51bWJlcnMsIGxldHRlcnMsIGRhc2hlcywgcGVyaW9kcywgdW5kZXJzY29yZXMgYW5kIHNsYXNoZXMuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlTmFtZXNwYWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsaWRhdGVOYW1lc3BhY2UuanMubWFwIiwiY2xhc3MgSlNfUGFyc2VfQXJncyB7XHJcblx0Y29uc3RydWN0b3IoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfbmVzdGVkID0gZmFsc2UgKSB7XHJcblx0XHR0aGlzLmFyZ3MgICAgID0gJGFyZ3M7XHJcblx0XHR0aGlzLmRlZmF1bHRzID0gJGRlZmF1bHRzO1xyXG5cdFx0dGhpcy5uZXN0ZWQgICA9ICRpc19uZXN0ZWQ7XHJcblx0XHR0aGlzLnBhcnNlKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmdzO1xyXG5cdH1cclxuXHJcblx0cGFyc2UoKSB7XHJcblx0XHRmb3IoIGxldCAkX2tleSBpbiB0aGlzLmRlZmF1bHRzICkge1xyXG5cdFx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5uZXN0ZWQgJiYgdHlwZW9mICB0aGlzLmRlZmF1bHRzWyAkX2tleSBdID09PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0XHR0aGlzLmFyZ3NbICRfa2V5IF0gPSBuZXcgSlNfUGFyc2VfQXJncyggdGhpcy5hcmdzWyAkX2tleSBdLCB0aGlzLmRlZmF1bHRzWyAkX2tleSBdLCB0aGlzLm5lc3RlZCApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzWyAkX2tleSBdID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IHRoaXMuZGVmYXVsdHNbICRfa2V5IF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICRhcmdzID0ge30sICRkZWZhdWx0cyA9IHt9LCAkaXNfZGVlcCA9IGZhbHNlICkgPT4gbmV3IEpTX1BhcnNlX0FyZ3MoICRhcmdzLCAkZGVmYXVsdHMsICRpc19kZWVwICk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1pY3JvdGltZShnZXRBc0Zsb2F0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvbWljcm90aW1lL1xuICAvLyBvcmlnaW5hbCBieTogUGF1bG8gRnJlaXRhc1xuICAvLyBpbXByb3ZlZCBieTogRHVtaXRydSBVenVuIChodHRwOi8vZHV6dW4ubWUpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHRpbWVTdGFtcCA9IG1pY3JvdGltZSh0cnVlKVxuICAvLyAgIGV4YW1wbGUgMTogJHRpbWVTdGFtcCA+IDEwMDAwMDAwMDAgJiYgJHRpbWVTdGFtcCA8IDIwMDAwMDAwMDBcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IC9eMFxcLlswLTldezEsNn0gWzAtOV17MTAsMTB9JC8udGVzdChtaWNyb3RpbWUoKSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcblxuICB2YXIgcztcbiAgdmFyIG5vdztcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbm93ID0gKHBlcmZvcm1hbmNlLm5vdygpICsgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTYpIC8gMWU2ICsgJyAnICsgcztcbiAgfSBlbHNlIHtcbiAgICBub3cgPSAoRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMWUzO1xuICAgIGlmIChnZXRBc0Zsb2F0KSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8vIE1hdGgucm91bmQobm93KVxuICAgIHMgPSBub3cgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIHMpICogMWUzKSAvIDFlMyArICcgJyArIHM7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWNyb3RpbWUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jKGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmMvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogRGlwbG9tQHQgKGh0dHA6Ly9kaWZhbmUuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBEZXBlbmRzIG9uIGNhbGxfdXNlcl9mdW5jX2FycmF5IHdoaWNoIGluIHR1cm4gZGVwZW5kcyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmMoJ2lzTmFOJywgJ2EnKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuXG4gIHZhciBjYWxsVXNlckZ1bmNBcnJheSA9IHJlcXVpcmUoJy4uL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5Jyk7XG4gIHBhcmFtZXRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gY2FsbFVzZXJGdW5jQXJyYXkoY2IsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxfdXNlcl9mdW5jX2FycmF5KGNiLCBwYXJhbWV0ZXJzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY2FsbF91c2VyX2Z1bmNfYXJyYXkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUaGlhZ28gTWF0YSAoaHR0cDovL3RoaWFnb21hdGEuYmxvZy5jb20pXG4gIC8vICByZXZpc2VkIGJ5OiBKb24gSG9obGVcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZGluZyBvbiB0aGUgYGNiYCB0aGF0IGlzIHBhc3NlZCxcbiAgLy8gICAgICBub3RlIDE6IHRoaXMgZnVuY3Rpb24gY2FuIHVzZSBgZXZhbGAgYW5kL29yIGBuZXcgRnVuY3Rpb25gLlxuICAvLyAgICAgIG5vdGUgMTogVGhlIGBldmFsYCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDE6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDE6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGNhbGxfdXNlcl9mdW5jX2FycmF5KCdpc05hTicsIFsnYSddKVxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWzFdKVxuICAvLyAgIHJldHVybnMgMjogZmFsc2VcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuICB2YXIgZnVuYztcbiAgdmFyIHNjb3BlID0gbnVsbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmdW5jID0gJGdsb2JhbFtjYl07XG4gICAgfSBlbHNlIGlmIChjYi5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgIGZ1bmMgPSBuZXcgRnVuY3Rpb24obnVsbCwgJ3JldHVybiAnICsgY2IpKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LWZ1bmNcbiAgICB9XG4gIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNiKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoY2JbMF0ubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pKSB7XG4gICAgICAgIGZ1bmMgPSBldmFsKGNiWzBdICsgXCJbJ1wiICsgY2JbMV0gKyBcIiddXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZnVuYyA9IGNiWzBdW2NiWzFdXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNiWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiAkZ2xvYmFsW2NiWzBdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY29wZSA9ICRnbG9iYWxbY2JbMF1dO1xuICAgICAgfSBlbHNlIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgc2NvcGUgPSBldmFsKGNiWzBdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKGNiWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNjb3BlID0gY2JbMF07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZ1bmMgPSBjYjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihmdW5jICsgJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmMuYXBwbHkoc2NvcGUsIHBhcmFtZXRlcnMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGxfdXNlcl9mdW5jX2FycmF5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVfZnVuY3Rpb24oYXJncywgY29kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvY3JlYXRlX2Z1bmN0aW9uL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBKb2hubnkgTWFzdCAoaHR0cDovL3d3dy5waHB2cm91d2VuLm5sKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGYgPSBjcmVhdGVfZnVuY3Rpb24oJ2EsIGInLCAncmV0dXJuIChhICsgYiknKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiAkZigxLCAyKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAzXG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJncy5zcGxpdCgnLCcpLmNvbmNhdChjb2RlKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVfZnVuY3Rpb24uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZ1bmN0aW9uX2V4aXN0cyhmdW5jTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Z1bmN0aW9uX2V4aXN0cy9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBTdGV2ZSBDbGF5XG4gIC8vIGltcHJvdmVkIGJ5OiBMZWdhZXYgQW5kcmV5XG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogZnVuY3Rpb25fZXhpc3RzKCdpc0Zpbml0ZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgICAgICB0ZXN0OiBza2lwLTFcblxuICB2YXIgJGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuXG4gIGlmICh0eXBlb2YgZnVuY05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgZnVuY05hbWUgPSAkZ2xvYmFsW2Z1bmNOYW1lXTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgZnVuY05hbWUgPT09ICdmdW5jdGlvbic7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnVuY3Rpb25fZXhpc3RzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmlfZ2V0KHZhcm5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pbmlfZ2V0L1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSBpbmkgdmFsdWVzIG11c3QgYmUgc2V0IGJ5IGluaV9zZXQgb3IgbWFudWFsbHkgd2l0aGluIGFuIGluaSBmaWxlXG4gIC8vICAgZXhhbXBsZSAxOiBpbmlfc2V0KCdkYXRlLnRpbWV6b25lJywgJ0FzaWEvSG9uZ19Lb25nJylcbiAgLy8gICBleGFtcGxlIDE6IGluaV9nZXQoJ2RhdGUudGltZXpvbmUnKVxuICAvLyAgIHJldHVybnMgMTogJ0FzaWEvSG9uZ19Lb25nJ1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG4gICRsb2N1dHVzLnBocC5pbmkgPSAkbG9jdXR1cy5waHAuaW5pIHx8IHt9O1xuXG4gIGlmICgkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdICYmICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICgkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiAkbG9jdXR1cy5waHAuaW5pW3Zhcm5hbWVdLmxvY2FsX3ZhbHVlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaV9nZXQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1kNShzdHIpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9tZDUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBXZWJ0b29sa2l0LmluZm8gKGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvLylcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIG5vdGUgMTogS2VlcCBpbiBtaW5kIHRoYXQgaW4gYWNjb3JkYW5jZSB3aXRoIFBIUCwgdGhlIHdob2xlIHN0cmluZyBpcyBidWZmZXJlZCBhbmQgdGhlblxuICAvLyAgICAgIG5vdGUgMTogaGFzaGVkLiBJZiBhdmFpbGFibGUsIHdlJ2QgcmVjb21tZW5kIHVzaW5nIE5vZGUncyBuYXRpdmUgY3J5cHRvIG1vZHVsZXMgZGlyZWN0bHlcbiAgLy8gICAgICBub3RlIDE6IGluIGEgc3RlYW1pbmcgZmFzaGlvbiBmb3IgZmFzdGVyIGFuZCBtb3JlIGVmZmljaWVudCBoYXNoaW5nXG4gIC8vICAgZXhhbXBsZSAxOiBtZDUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJzZlNjU4ZDRiZmNiNTljYzEzZjk2YzE0NDUwYWM0MGI5J1xuXG4gIHZhciBoYXNoO1xuICB0cnkge1xuICAgIHZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgICB2YXIgbWQ1c3VtID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpO1xuICAgIG1kNXN1bS51cGRhdGUoc3RyKTtcbiAgICBoYXNoID0gbWQ1c3VtLmRpZ2VzdCgnaGV4Jyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYXNoID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgdmFyIHV0ZjhFbmNvZGUgPSByZXF1aXJlKCcuLi94bWwvdXRmOF9lbmNvZGUnKTtcbiAgdmFyIHhsO1xuXG4gIHZhciBfcm90YXRlTGVmdCA9IGZ1bmN0aW9uIF9yb3RhdGVMZWZ0KGxWYWx1ZSwgaVNoaWZ0Qml0cykge1xuICAgIHJldHVybiBsVmFsdWUgPDwgaVNoaWZ0Qml0cyB8IGxWYWx1ZSA+Pj4gMzIgLSBpU2hpZnRCaXRzO1xuICB9O1xuXG4gIHZhciBfYWRkVW5zaWduZWQgPSBmdW5jdGlvbiBfYWRkVW5zaWduZWQobFgsIGxZKSB7XG4gICAgdmFyIGxYNCwgbFk0LCBsWDgsIGxZOCwgbFJlc3VsdDtcbiAgICBsWDggPSBsWCAmIDB4ODAwMDAwMDA7XG4gICAgbFk4ID0gbFkgJiAweDgwMDAwMDAwO1xuICAgIGxYNCA9IGxYICYgMHg0MDAwMDAwMDtcbiAgICBsWTQgPSBsWSAmIDB4NDAwMDAwMDA7XG4gICAgbFJlc3VsdCA9IChsWCAmIDB4M0ZGRkZGRkYpICsgKGxZICYgMHgzRkZGRkZGRik7XG4gICAgaWYgKGxYNCAmIGxZNCkge1xuICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweDgwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgICBpZiAobFg0IHwgbFk0KSB7XG4gICAgICBpZiAobFJlc3VsdCAmIDB4NDAwMDAwMDApIHtcbiAgICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweEMwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxSZXN1bHQgXiAweDQwMDAwMDAwIF4gbFg4IF4gbFk4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIGxYOCBeIGxZODtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9GID0gZnVuY3Rpb24gX0YoeCwgeSwgeikge1xuICAgIHJldHVybiB4ICYgeSB8IH54ICYgejtcbiAgfTtcbiAgdmFyIF9HID0gZnVuY3Rpb24gX0coeCwgeSwgeikge1xuICAgIHJldHVybiB4ICYgeiB8IHkgJiB+ejtcbiAgfTtcbiAgdmFyIF9IID0gZnVuY3Rpb24gX0goeCwgeSwgeikge1xuICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH07XG4gIHZhciBfSSA9IGZ1bmN0aW9uIF9JKHgsIHksIHopIHtcbiAgICByZXR1cm4geSBeICh4IHwgfnopO1xuICB9O1xuXG4gIHZhciBfRkYgPSBmdW5jdGlvbiBfRkYoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0YoYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfR0cgPSBmdW5jdGlvbiBfR0coYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0coYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfSEggPSBmdW5jdGlvbiBfSEgoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0goYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfSUkgPSBmdW5jdGlvbiBfSUkoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIF9hZGRVbnNpZ25lZChfYWRkVW5zaWduZWQoX0koYiwgYywgZCksIHgpLCBhYykpO1xuICAgIHJldHVybiBfYWRkVW5zaWduZWQoX3JvdGF0ZUxlZnQoYSwgcyksIGIpO1xuICB9O1xuXG4gIHZhciBfY29udmVydFRvV29yZEFycmF5ID0gZnVuY3Rpb24gX2NvbnZlcnRUb1dvcmRBcnJheShzdHIpIHtcbiAgICB2YXIgbFdvcmRDb3VudDtcbiAgICB2YXIgbE1lc3NhZ2VMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc1RlbXAxID0gbE1lc3NhZ2VMZW5ndGggKyA4O1xuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc1RlbXAyID0gKGxOdW1iZXJPZldvcmRzVGVtcDEgLSBsTnVtYmVyT2ZXb3Jkc1RlbXAxICUgNjQpIC8gNjQ7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzID0gKGxOdW1iZXJPZldvcmRzVGVtcDIgKyAxKSAqIDE2O1xuICAgIHZhciBsV29yZEFycmF5ID0gbmV3IEFycmF5KGxOdW1iZXJPZldvcmRzIC0gMSk7XG4gICAgdmFyIGxCeXRlUG9zaXRpb24gPSAwO1xuICAgIHZhciBsQnl0ZUNvdW50ID0gMDtcbiAgICB3aGlsZSAobEJ5dGVDb3VudCA8IGxNZXNzYWdlTGVuZ3RoKSB7XG4gICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgICAgbEJ5dGVQb3NpdGlvbiA9IGxCeXRlQ291bnQgJSA0ICogODtcbiAgICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgc3RyLmNoYXJDb2RlQXQobEJ5dGVDb3VudCkgPDwgbEJ5dGVQb3NpdGlvbjtcbiAgICAgIGxCeXRlQ291bnQrKztcbiAgICB9XG4gICAgbFdvcmRDb3VudCA9IChsQnl0ZUNvdW50IC0gbEJ5dGVDb3VudCAlIDQpIC8gNDtcbiAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgMHg4MCA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAyXSA9IGxNZXNzYWdlTGVuZ3RoIDw8IDM7XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDFdID0gbE1lc3NhZ2VMZW5ndGggPj4+IDI5O1xuICAgIHJldHVybiBsV29yZEFycmF5O1xuICB9O1xuXG4gIHZhciBfd29yZFRvSGV4ID0gZnVuY3Rpb24gX3dvcmRUb0hleChsVmFsdWUpIHtcbiAgICB2YXIgd29yZFRvSGV4VmFsdWUgPSAnJztcbiAgICB2YXIgd29yZFRvSGV4VmFsdWVUZW1wID0gJyc7XG4gICAgdmFyIGxCeXRlO1xuICAgIHZhciBsQ291bnQ7XG5cbiAgICBmb3IgKGxDb3VudCA9IDA7IGxDb3VudCA8PSAzOyBsQ291bnQrKykge1xuICAgICAgbEJ5dGUgPSBsVmFsdWUgPj4+IGxDb3VudCAqIDggJiAyNTU7XG4gICAgICB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnMCcgKyBsQnl0ZS50b1N0cmluZygxNik7XG4gICAgICB3b3JkVG9IZXhWYWx1ZSA9IHdvcmRUb0hleFZhbHVlICsgd29yZFRvSGV4VmFsdWVUZW1wLnN1YnN0cih3b3JkVG9IZXhWYWx1ZVRlbXAubGVuZ3RoIC0gMiwgMik7XG4gICAgfVxuICAgIHJldHVybiB3b3JkVG9IZXhWYWx1ZTtcbiAgfTtcblxuICB2YXIgeCA9IFtdO1xuICB2YXIgaztcbiAgdmFyIEFBO1xuICB2YXIgQkI7XG4gIHZhciBDQztcbiAgdmFyIEREO1xuICB2YXIgYTtcbiAgdmFyIGI7XG4gIHZhciBjO1xuICB2YXIgZDtcbiAgdmFyIFMxMSA9IDc7XG4gIHZhciBTMTIgPSAxMjtcbiAgdmFyIFMxMyA9IDE3O1xuICB2YXIgUzE0ID0gMjI7XG4gIHZhciBTMjEgPSA1O1xuICB2YXIgUzIyID0gOTtcbiAgdmFyIFMyMyA9IDE0O1xuICB2YXIgUzI0ID0gMjA7XG4gIHZhciBTMzEgPSA0O1xuICB2YXIgUzMyID0gMTE7XG4gIHZhciBTMzMgPSAxNjtcbiAgdmFyIFMzNCA9IDIzO1xuICB2YXIgUzQxID0gNjtcbiAgdmFyIFM0MiA9IDEwO1xuICB2YXIgUzQzID0gMTU7XG4gIHZhciBTNDQgPSAyMTtcblxuICBzdHIgPSB1dGY4RW5jb2RlKHN0cik7XG4gIHggPSBfY29udmVydFRvV29yZEFycmF5KHN0cik7XG4gIGEgPSAweDY3NDUyMzAxO1xuICBiID0gMHhFRkNEQUI4OTtcbiAgYyA9IDB4OThCQURDRkU7XG4gIGQgPSAweDEwMzI1NDc2O1xuXG4gIHhsID0geC5sZW5ndGg7XG4gIGZvciAoayA9IDA7IGsgPCB4bDsgayArPSAxNikge1xuICAgIEFBID0gYTtcbiAgICBCQiA9IGI7XG4gICAgQ0MgPSBjO1xuICAgIEREID0gZDtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTMTEsIDB4RDc2QUE0NzgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgMV0sIFMxMiwgMHhFOEM3Qjc1Nik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzEzLCAweDI0MjA3MERCKTtcbiAgICBiID0gX0ZGKGIsIGMsIGQsIGEsIHhbayArIDNdLCBTMTQsIDB4QzFCRENFRUUpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgNF0sIFMxMSwgMHhGNTdDMEZBRik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyA1XSwgUzEyLCAweDQ3ODdDNjJBKTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTMTMsIDB4QTgzMDQ2MTMpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgN10sIFMxNCwgMHhGRDQ2OTUwMSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzExLCAweDY5ODA5OEQ4KTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDldLCBTMTIsIDB4OEI0NEY3QUYpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTMTMsIDB4RkZGRjVCQjEpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgMTFdLCBTMTQsIDB4ODk1Q0Q3QkUpO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTMTEsIDB4NkI5MDExMjIpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgMTNdLCBTMTIsIDB4RkQ5ODcxOTMpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTMTMsIDB4QTY3OTQzOEUpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgMTVdLCBTMTQsIDB4NDlCNDA4MjEpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgMV0sIFMyMSwgMHhGNjFFMjU2Mik7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyA2XSwgUzIyLCAweEMwNDBCMzQwKTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzIzLCAweDI2NUU1QTUxKTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDBdLCBTMjQsIDB4RTlCNkM3QUEpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgNV0sIFMyMSwgMHhENjJGMTA1RCk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAxMF0sIFMyMiwgMHgyNDQxNDUzKTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzIzLCAweEQ4QTFFNjgxKTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDRdLCBTMjQsIDB4RTdEM0ZCQzgpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgOV0sIFMyMSwgMHgyMUUxQ0RFNik7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAxNF0sIFMyMiwgMHhDMzM3MDdENik7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyAzXSwgUzIzLCAweEY0RDUwRDg3KTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDhdLCBTMjQsIDB4NDU1QTE0RUQpO1xuICAgIGEgPSBfR0coYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMjEsIDB4QTlFM0U5MDUpO1xuICAgIGQgPSBfR0coZCwgYSwgYiwgYywgeFtrICsgMl0sIFMyMiwgMHhGQ0VGQTNGOCk7XG4gICAgYyA9IF9HRyhjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzIzLCAweDY3NkYwMkQ5KTtcbiAgICBiID0gX0dHKGIsIGMsIGQsIGEsIHhbayArIDEyXSwgUzI0LCAweDhEMkE0QzhBKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDVdLCBTMzEsIDB4RkZGQTM5NDIpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgOF0sIFMzMiwgMHg4NzcxRjY4MSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxMV0sIFMzMywgMHg2RDlENjEyMik7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAxNF0sIFMzNCwgMHhGREU1MzgwQyk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzMxLCAweEE0QkVFQTQ0KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDRdLCBTMzIsIDB4NEJERUNGQTkpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgN10sIFMzMywgMHhGNkJCNEI2MCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAxMF0sIFMzNCwgMHhCRUJGQkM3MCk7XG4gICAgYSA9IF9ISChhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMzMSwgMHgyODlCN0VDNik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAwXSwgUzMyLCAweEVBQTEyN0ZBKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMzMsIDB4RDRFRjMwODUpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgNl0sIFMzNCwgMHg0ODgxRDA1KTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDldLCBTMzEsIDB4RDlENEQwMzkpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgMTJdLCBTMzIsIDB4RTZEQjk5RTUpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMzMsIDB4MUZBMjdDRjgpO1xuICAgIGIgPSBfSEgoYiwgYywgZCwgYSwgeFtrICsgMl0sIFMzNCwgMHhDNEFDNTY2NSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyAwXSwgUzQxLCAweEY0MjkyMjQ0KTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDddLCBTNDIsIDB4NDMyQUZGOTcpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTNDMsIDB4QUI5NDIzQTcpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgNV0sIFM0NCwgMHhGQzkzQTAzOSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFM0MSwgMHg2NTVCNTlDMyk7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAzXSwgUzQyLCAweDhGMENDQzkyKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzQzLCAweEZGRUZGNDdEKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDFdLCBTNDQsIDB4ODU4NDVERDEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgOF0sIFM0MSwgMHg2RkE4N0U0Rik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxNV0sIFM0MiwgMHhGRTJDRTZFMCk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyA2XSwgUzQzLCAweEEzMDE0MzE0KTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDEzXSwgUzQ0LCAweDRFMDgxMUExKTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTNDEsIDB4Rjc1MzdFODIpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgMTFdLCBTNDIsIDB4QkQzQUYyMzUpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMl0sIFM0MywgMHgyQUQ3RDJCQik7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA5XSwgUzQ0LCAweEVCODZEMzkxKTtcbiAgICBhID0gX2FkZFVuc2lnbmVkKGEsIEFBKTtcbiAgICBiID0gX2FkZFVuc2lnbmVkKGIsIEJCKTtcbiAgICBjID0gX2FkZFVuc2lnbmVkKGMsIENDKTtcbiAgICBkID0gX2FkZFVuc2lnbmVkKGQsIEREKTtcbiAgfVxuXG4gIHZhciB0ZW1wID0gX3dvcmRUb0hleChhKSArIF93b3JkVG9IZXgoYikgKyBfd29yZFRvSGV4KGMpICsgX3dvcmRUb0hleChkKTtcblxuICByZXR1cm4gdGVtcC50b0xvd2VyQ2FzZSgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1kNS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2Vfc3RyKHN0ciwgYXJyYXkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3N0ci9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogQ2FncmkgRWtpblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogSmFja1xuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogTUlPX0tPRFVLSSAoaHR0cDovL21pby1rb2R1a2kuYmxvZ3Nwb3QuY29tLylcbiAgLy8gcmVpbXBsZW1lbnRlZCBieTogc3RhZzAxOVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBEcmVhbWVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFphaWRlIChodHRwOi8vemFpZGVzdGhpbmdzLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERhdmlkIFBlc3RhIChodHRwOi8vZGF2aWRwZXN0YS5jb20vKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBqZWljcXVlc3RcbiAgLy8gICAgICBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gbm8gYXJndW1lbnQgaXMgc3BlY2lmaWVkLCB3aWxsIHB1dCB2YXJpYWJsZXMgaW4gZ2xvYmFsIHNjb3BlLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBXaGVuIGEgcGFydGljdWxhciBhcmd1bWVudCBoYXMgYmVlbiBwYXNzZWQsIGFuZCB0aGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogcmV0dXJuZWQgdmFsdWUgaXMgZGlmZmVyZW50IHBhcnNlX3N0ciBvZiBQSFAuXG4gIC8vICAgICAgICAgICBub3RlIDE6IEZvciBleGFtcGxlLCBhPWI9YyZkPT09PWNcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV9zdHIoJ2ZpcnN0PWZvbyZzZWNvbmQ9YmFyJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDE6IHsgZmlyc3Q6ICdmb28nLCBzZWNvbmQ6ICdiYXInIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiBwYXJzZV9zdHIoJ3N0cl9hPUphY2srYW5kK0ppbGwrZGlkbiUyN3Qrc2VlK3RoZSt3ZWxsLicsICRhcnIpXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGFyclxuICAvLyAgICAgICAgcmV0dXJucyAyOiB7IHN0cl9hOiBcIkphY2sgYW5kIEppbGwgZGlkbid0IHNlZSB0aGUgd2VsbC5cIiB9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHZhciAkYWJjID0gezM6J2EnfVxuICAvLyAgICAgICAgZXhhbXBsZSAzOiBwYXJzZV9zdHIoJ2FbYl1bXCJjXCJdPWRlZiZhW3FdPXQrNScsICRhYmMpXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGFiY1xuICAvLyAgICAgICAgcmV0dXJucyAzOiB7XCIzXCI6XCJhXCIsXCJhXCI6e1wiYlwiOntcImNcIjpcImRlZlwifSxcInFcIjpcInQgNVwifX1cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdmFyICRhcnIgPSB7fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV9zdHIoJ2FbXVtdPXZhbHVlJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDQ6IHtcImFcIjp7XCIwXCI6e1wiMFwiOlwidmFsdWVcIn19fVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHBhcnNlX3N0cignYT0xJmFbXT0yJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgNTogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDU6IHtcImFcIjp7XCIwXCI6XCIyXCJ9fVxuXG4gIHZhciBzdHJBcnIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC9eJi8sICcnKS5yZXBsYWNlKC8mJC8sICcnKS5zcGxpdCgnJicpO1xuICB2YXIgc2FsID0gc3RyQXJyLmxlbmd0aDtcbiAgdmFyIGk7XG4gIHZhciBqO1xuICB2YXIgY3Q7XG4gIHZhciBwO1xuICB2YXIgbGFzdE9iajtcbiAgdmFyIG9iajtcbiAgdmFyIGNocjtcbiAgdmFyIHRtcDtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgcG9zdExlZnRCcmFja2V0UG9zO1xuICB2YXIga2V5cztcbiAgdmFyIGtleXNMZW47XG5cbiAgdmFyIF9maXhTdHIgPSBmdW5jdGlvbiBfZml4U3RyKHN0cikge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xuICB9O1xuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9O1xuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzO1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge307XG5cbiAgaWYgKCFhcnJheSkge1xuICAgIGFycmF5ID0gJGdsb2JhbDtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBzYWw7IGkrKykge1xuICAgIHRtcCA9IHN0ckFycltpXS5zcGxpdCgnPScpO1xuICAgIGtleSA9IF9maXhTdHIodG1wWzBdKTtcbiAgICB2YWx1ZSA9IHRtcC5sZW5ndGggPCAyID8gJycgOiBfZml4U3RyKHRtcFsxXSk7XG5cbiAgICB3aGlsZSAoa2V5LmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgaWYgKGtleS5pbmRleE9mKCdcXHgwMCcpID4gLTEpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgwLCBrZXkuaW5kZXhPZignXFx4MDAnKSk7XG4gICAgfVxuXG4gICAgaWYgKGtleSAmJiBrZXkuY2hhckF0KDApICE9PSAnWycpIHtcbiAgICAgIGtleXMgPSBbXTtcbiAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGtleS5jaGFyQXQoaikgPT09ICdbJyAmJiAhcG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gaiArIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ10nKSB7XG4gICAgICAgICAgaWYgKHBvc3RMZWZ0QnJhY2tldFBvcykge1xuICAgICAgICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5LnNsaWNlKDAsIHBvc3RMZWZ0QnJhY2tldFBvcyAtIDEpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIocG9zdExlZnRCcmFja2V0UG9zLCBqIC0gcG9zdExlZnRCcmFja2V0UG9zKSk7XG4gICAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSAwO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChqICsgMSkgIT09ICdbJykge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICBrZXlzID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBrZXlzWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNociA9IGtleXNbMF0uY2hhckF0KGopO1xuXG4gICAgICAgIGlmIChjaHIgPT09ICcgJyB8fCBjaHIgPT09ICcuJyB8fCBjaHIgPT09ICdbJykge1xuICAgICAgICAgIGtleXNbMF0gPSBrZXlzWzBdLnN1YnN0cigwLCBqKSArICdfJyArIGtleXNbMF0uc3Vic3RyKGogKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHIgPT09ICdbJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9iaiA9IGFycmF5O1xuXG4gICAgICBmb3IgKGogPSAwLCBrZXlzTGVuID0ga2V5cy5sZW5ndGg7IGogPCBrZXlzTGVuOyBqKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tqXS5yZXBsYWNlKC9eWydcIl0vLCAnJykucmVwbGFjZSgvWydcIl0kLywgJycpO1xuICAgICAgICBsYXN0T2JqID0gb2JqO1xuXG4gICAgICAgIGlmICgoa2V5ID09PSAnJyB8fCBrZXkgPT09ICcgJykgJiYgaiAhPT0gMCkge1xuICAgICAgICAgIC8vIEluc2VydCBuZXcgZGltZW5zaW9uXG4gICAgICAgICAgY3QgPSAtMTtcblxuICAgICAgICAgIGZvciAocCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgaWYgKCtwID4gY3QgJiYgcC5tYXRjaCgvXlxcZCskL2cpKSB7XG4gICAgICAgICAgICAgICAgY3QgPSArcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGtleSA9IGN0ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHByaW1pdGl2ZSB2YWx1ZSwgcmVwbGFjZSB3aXRoIG9iamVjdFxuICAgICAgICBpZiAoT2JqZWN0KG9ialtrZXldKSAhPT0gb2JqW2tleV0pIHtcbiAgICAgICAgICBvYmpba2V5XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gb2JqW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxhc3RPYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlX3N0ci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcnRyaW0oc3RyLCBjaGFybGlzdCkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3J0cmltL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEVya2VramV0dGVyXG4gIC8vICAgIGlucHV0IGJ5OiByZW1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgIGV4YW1wbGUgMTogcnRyaW0oJyAgICBLZXZpbiB2YW4gWm9ubmV2ZWxkICAgICcpXG4gIC8vICAgcmV0dXJucyAxOiAnICAgIEtldmluIHZhbiBab25uZXZlbGQnXG5cbiAgY2hhcmxpc3QgPSAhY2hhcmxpc3QgPyAnIFxcXFxzXFx4QTAnIDogKGNoYXJsaXN0ICsgJycpLnJlcGxhY2UoLyhbW1xcXSgpLj8vKnt9KyReOl0pL2csICdcXFxcJDEnKTtcblxuICB2YXIgcmUgPSBuZXcgUmVnRXhwKCdbJyArIGNoYXJsaXN0ICsgJ10rJCcsICdnJyk7XG5cbiAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZShyZSwgJycpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ0cmltLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJwb3MoaGF5c3RhY2ssIG5lZWRsZSwgb2Zmc2V0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvc3RycG9zL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBEYW5pZWwgRXN0ZWJhblxuICAvLyAgIGV4YW1wbGUgMTogc3RycG9zKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJywgJ2UnLCA1KVxuICAvLyAgIHJldHVybnMgMTogMTRcblxuICB2YXIgaSA9IChoYXlzdGFjayArICcnKS5pbmRleE9mKG5lZWRsZSwgb2Zmc2V0IHx8IDApO1xuICByZXR1cm4gaSA9PT0gLTEgPyBmYWxzZSA6IGk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RycG9zLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZGVjb2RlKGVuY29kZWREYXRhKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2RlY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IFRodW5kZXIubVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBBbWFuIEd1cHRhXG4gIC8vICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBidWdmaXhlZCBieTogUGVsbGVudGVzcXVlIE1hbGVzdWFkYVxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2RlY29kZSgnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PScpXG4gIC8vICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9kZWNvZGUoJ1lRPT0nKVxuICAvLyAgIHJldHVybnMgMjogJ2EnXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZGVjb2RlKCc0cHlUSU1PZ0lHeGhJRzF2WkdVPScpXG4gIC8vICAgcmV0dXJucyAzOiAn4pyTIMOgIGxhIG1vZGUnXG5cbiAgLy8gZGVjb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGRlY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBkZWNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZGVjb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBHb2luZyBiYWNrd2FyZHM6IGZyb20gYnl0ZXN0cmVhbSwgdG8gcGVyY2VudC1lbmNvZGluZywgdG8gb3JpZ2luYWwgc3RyaW5nLlxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYXRvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVVEY4c3RyaW5nKHdpbmRvdy5hdG9iKGVuY29kZWREYXRhKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGVuY29kZWREYXRhLCAnYmFzZTY0JykudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gIH1cblxuICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgdmFyIG8xO1xuICB2YXIgbzI7XG4gIHZhciBvMztcbiAgdmFyIGgxO1xuICB2YXIgaDI7XG4gIHZhciBoMztcbiAgdmFyIGg0O1xuICB2YXIgYml0cztcbiAgdmFyIGkgPSAwO1xuICB2YXIgYWMgPSAwO1xuICB2YXIgZGVjID0gJyc7XG4gIHZhciB0bXBBcnIgPSBbXTtcblxuICBpZiAoIWVuY29kZWREYXRhKSB7XG4gICAgcmV0dXJuIGVuY29kZWREYXRhO1xuICB9XG5cbiAgZW5jb2RlZERhdGEgKz0gJyc7XG5cbiAgZG8ge1xuICAgIC8vIHVucGFjayBmb3VyIGhleGV0cyBpbnRvIHRocmVlIG9jdGV0cyB1c2luZyBpbmRleCBwb2ludHMgaW4gYjY0XG4gICAgaDEgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDIgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDMgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG4gICAgaDQgPSBiNjQuaW5kZXhPZihlbmNvZGVkRGF0YS5jaGFyQXQoaSsrKSk7XG5cbiAgICBiaXRzID0gaDEgPDwgMTggfCBoMiA8PCAxMiB8IGgzIDw8IDYgfCBoNDtcblxuICAgIG8xID0gYml0cyA+PiAxNiAmIDB4ZmY7XG4gICAgbzIgPSBiaXRzID4+IDggJiAweGZmO1xuICAgIG8zID0gYml0cyAmIDB4ZmY7XG5cbiAgICBpZiAoaDMgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xKTtcbiAgICB9IGVsc2UgaWYgKGg0ID09PSA2NCkge1xuICAgICAgdG1wQXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSwgbzIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMiwgbzMpO1xuICAgIH1cbiAgfSB3aGlsZSAoaSA8IGVuY29kZWREYXRhLmxlbmd0aCk7XG5cbiAgZGVjID0gdG1wQXJyLmpvaW4oJycpO1xuXG4gIHJldHVybiBkZWNvZGVVVEY4c3RyaW5nKGRlYy5yZXBsYWNlKC9cXDArJC8sICcnKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0X2RlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTY0X2VuY29kZShzdHJpbmdUb0VuY29kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2Jhc2U2NF9lbmNvZGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBUeWxlciBBa2lucyAoaHR0cDovL3J1bWtpbi5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBCYXlyb24gR3VldmFyYVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGltcHJvdmVkIGJ5OiBJbmRpZ283NDRcbiAgLy8gICBleGFtcGxlIDE6IGJhc2U2NF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ1MyVjJhVzRnZG1GdUlGcHZibTVsZG1Wc1pBPT0nXG4gIC8vICAgZXhhbXBsZSAyOiBiYXNlNjRfZW5jb2RlKCdhJylcbiAgLy8gICByZXR1cm5zIDI6ICdZUT09J1xuICAvLyAgIGV4YW1wbGUgMzogYmFzZTY0X2VuY29kZSgn4pyTIMOgIGxhIG1vZGUnKVxuICAvLyAgIHJldHVybnMgMzogJzRweVRJTU9nSUd4aElHMXZaR1U9J1xuXG4gIC8vIGVuY29kZVVURjhzdHJpbmcoKVxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0byBlbmNvZGUgcHJvcGVybHkgVVRGOCBzdHJpbmdcbiAgLy8gQWRhcHRlZCBmcm9tIFNvbHV0aW9uICMxIGF0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZ1xuICB2YXIgZW5jb2RlVVRGOHN0cmluZyA9IGZ1bmN0aW9uIGVuY29kZVVURjhzdHJpbmcoc3RyKSB7XG4gICAgLy8gZmlyc3Qgd2UgdXNlIGVuY29kZVVSSUNvbXBvbmVudCB0byBnZXQgcGVyY2VudC1lbmNvZGVkIFVURi04LFxuICAgIC8vIHRoZW4gd2UgY29udmVydCB0aGUgcGVyY2VudCBlbmNvZGluZ3MgaW50byByYXcgYnl0ZXMgd2hpY2hcbiAgICAvLyBjYW4gYmUgZmVkIGludG8gdGhlIGJhc2U2NCBlbmNvZGluZyBhbGdvcml0aG0uXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIHRvU29saWRCeXRlcyhtYXRjaCwgcDEpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcgKyBwMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShlbmNvZGVVVEY4c3RyaW5nKHN0cmluZ1RvRW5jb2RlKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKHN0cmluZ1RvRW5jb2RlKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIH1cblxuICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgdmFyIG8xO1xuICB2YXIgbzI7XG4gIHZhciBvMztcbiAgdmFyIGgxO1xuICB2YXIgaDI7XG4gIHZhciBoMztcbiAgdmFyIGg0O1xuICB2YXIgYml0cztcbiAgdmFyIGkgPSAwO1xuICB2YXIgYWMgPSAwO1xuICB2YXIgZW5jID0gJyc7XG4gIHZhciB0bXBBcnIgPSBbXTtcblxuICBpZiAoIXN0cmluZ1RvRW5jb2RlKSB7XG4gICAgcmV0dXJuIHN0cmluZ1RvRW5jb2RlO1xuICB9XG5cbiAgc3RyaW5nVG9FbmNvZGUgPSBlbmNvZGVVVEY4c3RyaW5nKHN0cmluZ1RvRW5jb2RlKTtcblxuICBkbyB7XG4gICAgLy8gcGFjayB0aHJlZSBvY3RldHMgaW50byBmb3VyIGhleGV0c1xuICAgIG8xID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuICAgIG8yID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuICAgIG8zID0gc3RyaW5nVG9FbmNvZGUuY2hhckNvZGVBdChpKyspO1xuXG4gICAgYml0cyA9IG8xIDw8IDE2IHwgbzIgPDwgOCB8IG8zO1xuXG4gICAgaDEgPSBiaXRzID4+IDE4ICYgMHgzZjtcbiAgICBoMiA9IGJpdHMgPj4gMTIgJiAweDNmO1xuICAgIGgzID0gYml0cyA+PiA2ICYgMHgzZjtcbiAgICBoNCA9IGJpdHMgJiAweDNmO1xuXG4gICAgLy8gdXNlIGhleGV0cyB0byBpbmRleCBpbnRvIGI2NCwgYW5kIGFwcGVuZCByZXN1bHQgdG8gZW5jb2RlZCBzdHJpbmdcbiAgICB0bXBBcnJbYWMrK10gPSBiNjQuY2hhckF0KGgxKSArIGI2NC5jaGFyQXQoaDIpICsgYjY0LmNoYXJBdChoMykgKyBiNjQuY2hhckF0KGg0KTtcbiAgfSB3aGlsZSAoaSA8IHN0cmluZ1RvRW5jb2RlLmxlbmd0aCk7XG5cbiAgZW5jID0gdG1wQXJyLmpvaW4oJycpO1xuXG4gIHZhciByID0gc3RyaW5nVG9FbmNvZGUubGVuZ3RoICUgMztcblxuICByZXR1cm4gKHIgPyBlbmMuc2xpY2UoMCwgciAtIDMpIDogZW5jKSArICc9PT0nLnNsaWNlKHIgfHwgMyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0X2VuY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodHRwX2J1aWxkX3F1ZXJ5KGZvcm1kYXRhLCBudW1lcmljUHJlZml4LCBhcmdTZXBhcmF0b3IsIGVuY1R5cGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9odHRwX2J1aWxkX3F1ZXJ5L1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICByZXZpc2VkIGJ5OiBzdGFnMDE5XG4gIC8vICAgIGlucHV0IGJ5OiBEcmVhbWVyXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogTUlPX0tPRFVLSSAoaHR0cDovL21pby1rb2R1a2kuYmxvZ3Nwb3QuY29tLylcbiAgLy8gaW1wcm92ZWQgYnk6IFdpbGwgUm93ZVxuICAvLyAgICAgIG5vdGUgMTogSWYgdGhlIHZhbHVlIGlzIG51bGwsIGtleSBhbmQgdmFsdWUgYXJlIHNraXBwZWQgaW4gdGhlXG4gIC8vICAgICAgbm90ZSAxOiBodHRwX2J1aWxkX3F1ZXJ5IG9mIFBIUCB3aGlsZSBpbiBsb2N1dHVzIHRoZXkgYXJlIG5vdC5cbiAgLy8gICBleGFtcGxlIDE6IGh0dHBfYnVpbGRfcXVlcnkoe2ZvbzogJ2JhcicsIHBocDogJ2h5cGVydGV4dCBwcm9jZXNzb3InLCBiYXo6ICdib29tJywgY293OiAnbWlsayd9LCAnJywgJyZhbXA7JylcbiAgLy8gICByZXR1cm5zIDE6ICdmb289YmFyJmFtcDtwaHA9aHlwZXJ0ZXh0K3Byb2Nlc3NvciZhbXA7YmF6PWJvb20mYW1wO2Nvdz1taWxrJ1xuICAvLyAgIGV4YW1wbGUgMjogaHR0cF9idWlsZF9xdWVyeSh7J3BocCc6ICdoeXBlcnRleHQgcHJvY2Vzc29yJywgMDogJ2ZvbycsIDE6ICdiYXInLCAyOiAnYmF6JywgMzogJ2Jvb20nLCAnY293JzogJ21pbGsnfSwgJ215dmFyXycpXG4gIC8vICAgcmV0dXJucyAyOiAnbXl2YXJfMD1mb28mbXl2YXJfMT1iYXImbXl2YXJfMj1iYXombXl2YXJfMz1ib29tJnBocD1oeXBlcnRleHQrcHJvY2Vzc29yJmNvdz1taWxrJ1xuICAvLyAgIGV4YW1wbGUgMzogaHR0cF9idWlsZF9xdWVyeSh7Zm9vOiAnYmFyJywgcGhwOiAnaHlwZXJ0ZXh0IHByb2Nlc3NvcicsIGJhejogJ2Jvb20nLCBjb3c6ICdtaWxrJ30sICcnLCAnJmFtcDsnLCAnUEhQX1FVRVJZX1JGQzM5ODYnKVxuICAvLyAgIHJldHVybnMgMzogJ2Zvbz1iYXImYW1wO3BocD1oeXBlcnRleHQlMjBwcm9jZXNzb3ImYW1wO2Jhej1ib29tJmFtcDtjb3c9bWlsaydcblxuICB2YXIgZW5jb2RlRnVuYztcblxuICBzd2l0Y2ggKGVuY1R5cGUpIHtcbiAgICBjYXNlICdQSFBfUVVFUllfUkZDMzk4Nic6XG4gICAgICBlbmNvZGVGdW5jID0gcmVxdWlyZSgnLi4vdXJsL3Jhd3VybGVuY29kZScpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQSFBfUVVFUllfUkZDMTczOCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGVuY29kZUZ1bmMgPSByZXF1aXJlKCcuLi91cmwvdXJsZW5jb2RlJyk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHZhciB2YWx1ZTtcbiAgdmFyIGtleTtcbiAgdmFyIHRtcCA9IFtdO1xuXG4gIHZhciBfaHR0cEJ1aWxkUXVlcnlIZWxwZXIgPSBmdW5jdGlvbiBfaHR0cEJ1aWxkUXVlcnlIZWxwZXIoa2V5LCB2YWwsIGFyZ1NlcGFyYXRvcikge1xuICAgIHZhciBrO1xuICAgIHZhciB0bXAgPSBbXTtcbiAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICB2YWwgPSAnMSc7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09IGZhbHNlKSB7XG4gICAgICB2YWwgPSAnMCc7XG4gICAgfVxuICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgIGlmICgodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoayBpbiB2YWwpIHtcbiAgICAgICAgICBpZiAodmFsW2tdICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0bXAucHVzaChfaHR0cEJ1aWxkUXVlcnlIZWxwZXIoa2V5ICsgJ1snICsgayArICddJywgdmFsW2tdLCBhcmdTZXBhcmF0b3IpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcC5qb2luKGFyZ1NlcGFyYXRvcik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZUZ1bmMoa2V5KSArICc9JyArIGVuY29kZUZ1bmModmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgZm9yIGh0dHBfYnVpbGRfcXVlcnkoKS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICBpZiAoIWFyZ1NlcGFyYXRvcikge1xuICAgIGFyZ1NlcGFyYXRvciA9ICcmJztcbiAgfVxuICBmb3IgKGtleSBpbiBmb3JtZGF0YSkge1xuICAgIHZhbHVlID0gZm9ybWRhdGFba2V5XTtcbiAgICBpZiAobnVtZXJpY1ByZWZpeCAmJiAhaXNOYU4oa2V5KSkge1xuICAgICAga2V5ID0gU3RyaW5nKG51bWVyaWNQcmVmaXgpICsga2V5O1xuICAgIH1cbiAgICB2YXIgcXVlcnkgPSBfaHR0cEJ1aWxkUXVlcnlIZWxwZXIoa2V5LCB2YWx1ZSwgYXJnU2VwYXJhdG9yKTtcbiAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICB0bXAucHVzaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRtcC5qb2luKGFyZ1NlcGFyYXRvcik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cF9idWlsZF9xdWVyeS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VfdXJsKHN0ciwgY29tcG9uZW50KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9wYXJzZV91cmwvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IFN0ZXZlbiBMZXZpdGhhbiAoaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBMb3JlbnpvIFBpc2FuaVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBUb255XG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IG9yaWdpbmFsIGJ5IGh0dHA6Ly9zdGV2ZW5sZXZpdGhhbi5jb20vZGVtby9wYXJzZXVyaS9qcy9hc3NldHMvcGFyc2V1cmkuanNcbiAgLy8gICAgICAgICAgIG5vdGUgMTogYmxvZyBwb3N0IGF0IGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9wYXJzZXVyaVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBkZW1vIGF0IGh0dHA6Ly9zdGV2ZW5sZXZpdGhhbi5jb20vZGVtby9wYXJzZXVyaS9qcy9hc3NldHMvcGFyc2V1cmkuanNcbiAgLy8gICAgICAgICAgIG5vdGUgMTogRG9lcyBub3QgcmVwbGFjZSBpbnZhbGlkIGNoYXJhY3RlcnMgd2l0aCAnXycgYXMgaW4gUEhQLFxuICAvLyAgICAgICAgICAgbm90ZSAxOiBub3IgZG9lcyBpdCByZXR1cm4gZmFsc2Ugd2l0aFxuICAvLyAgICAgICAgICAgbm90ZSAxOiBhIHNlcmlvdXNseSBtYWxmb3JtZWQgVVJMLlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBCZXNpZGVzIGZ1bmN0aW9uIG5hbWUsIGlzIGVzc2VudGlhbGx5IHRoZSBzYW1lIGFzIHBhcnNlVXJpIGFzXG4gIC8vICAgICAgICAgICBub3RlIDE6IHdlbGwgYXMgb3VyIGFsbG93aW5nXG4gIC8vICAgICAgICAgICBub3RlIDE6IGFuIGV4dHJhIHNsYXNoIGFmdGVyIHRoZSBzY2hlbWUvcHJvdG9jb2wgKHRvIGFsbG93IGZpbGU6Ly8vIGFzIGluIFBIUClcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcGFyc2VfdXJsKCdodHRwOi8vdXNlcjpwYXNzQGhvc3QvcGF0aD9hPXYjYScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6IHtzY2hlbWU6ICdodHRwJywgaG9zdDogJ2hvc3QnLCB1c2VyOiAndXNlcicsIHBhc3M6ICdwYXNzJywgcGF0aDogJy9wYXRoJywgcXVlcnk6ICdhPXYnLCBmcmFnbWVudDogJ2EnfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiBwYXJzZV91cmwoJ2h0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvJTIyQCUyMl8lMjhhbGJ1bSUyOScpXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHtzY2hlbWU6ICdodHRwJywgaG9zdDogJ2VuLndpa2lwZWRpYS5vcmcnLCBwYXRoOiAnL3dpa2kvJTIyQCUyMl8lMjhhbGJ1bSUyOSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3VybCgnaHR0cHM6Ly9ob3N0LmRvbWFpbi50bGQvYUBiLmMvZm9sZGVyJylcbiAgLy8gICAgICAgIHJldHVybnMgMzoge3NjaGVtZTogJ2h0dHBzJywgaG9zdDogJ2hvc3QuZG9tYWluLnRsZCcsIHBhdGg6ICcvYUBiLmMvZm9sZGVyJ31cbiAgLy8gICAgICAgIGV4YW1wbGUgNDogcGFyc2VfdXJsKCdodHRwczovL2dvb2R1c2VyOnNlY3JldHBhc3N3b3JkQHd3dy5leGFtcGxlLmNvbS9hQGIuYy9mb2xkZXI/Zm9vPWJhcicpXG4gIC8vICAgICAgICByZXR1cm5zIDQ6IHsgc2NoZW1lOiAnaHR0cHMnLCBob3N0OiAnd3d3LmV4YW1wbGUuY29tJywgcGF0aDogJy9hQGIuYy9mb2xkZXInLCBxdWVyeTogJ2Zvbz1iYXInLCB1c2VyOiAnZ29vZHVzZXInLCBwYXNzOiAnc2VjcmV0cGFzc3dvcmQnIH1cblxuICB2YXIgcXVlcnk7XG5cbiAgdmFyIG1vZGUgPSAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnLi4vaW5mby9pbmlfZ2V0JykoJ2xvY3V0dXMucGFyc2VfdXJsLm1vZGUnKSA6IHVuZGVmaW5lZCkgfHwgJ3BocCc7XG5cbiAgdmFyIGtleSA9IFsnc291cmNlJywgJ3NjaGVtZScsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2ZyYWdtZW50J107XG5cbiAgLy8gRm9yIGxvb3NlIHdlIGFkZGVkIG9uZSBvcHRpb25hbCBzbGFzaCB0byBwb3N0LXNjaGVtZSB0byBjYXRjaCBmaWxlOi8vLyAoc2hvdWxkIHJlc3RyaWN0IHRoaXMpXG4gIHZhciBwYXJzZXIgPSB7XG4gICAgcGhwOiBuZXcgUmVnRXhwKFsnKD86KFteOlxcXFwvPyNdKyk6KT8nLCAnKD86XFxcXC9cXFxcLygpKD86KD86KCkoPzooW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KSk/JywgJygpJywgJyg/OigoKSg/Oig/OltePyNcXFxcL10qXFxcXC8pKikoKSg/OltePyNdKikpKD86XFxcXD8oW14jXSopKT8oPzojKC4qKSk/KSddLmpvaW4oJycpKSxcbiAgICBzdHJpY3Q6IG5ldyBSZWdFeHAoWycoPzooW146XFxcXC8/I10rKTopPycsICcoPzpcXFxcL1xcXFwvKCg/OigoW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KSk/JywgJygoKCg/OltePyNcXFxcL10qXFxcXC8pKikoW14/I10qKSkoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ10uam9pbignJykpLFxuICAgIGxvb3NlOiBuZXcgUmVnRXhwKFsnKD86KD8hW146QF0rOlteOkBcXFxcL10qQCkoW146XFxcXC8/Iy5dKyk6KT8nLCAnKD86XFxcXC9cXFxcL1xcXFwvPyk/JywgJygoPzooKFteOkBcXFxcL10qKTo/KFteOkBcXFxcL10qKSk/QCk/KFteOlxcXFwvPyNdKikoPzo6KFxcXFxkKikpPyknLCAnKCgoXFxcXC8oPzpbXj8jXSg/IVtePyNcXFxcL10qXFxcXC5bXj8jXFxcXC8uXSsoPzpbPyNdfCQpKSkqXFxcXC8/KT8oW14/I1xcXFwvXSopKScsICcoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ10uam9pbignJykpXG4gIH07XG5cbiAgdmFyIG0gPSBwYXJzZXJbbW9kZV0uZXhlYyhzdHIpO1xuICB2YXIgdXJpID0ge307XG4gIHZhciBpID0gMTQ7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChtW2ldKSB7XG4gICAgICB1cmlba2V5W2ldXSA9IG1baV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIHJldHVybiB1cmlbY29tcG9uZW50LnJlcGxhY2UoJ1BIUF9VUkxfJywgJycpLnRvTG93ZXJDYXNlKCldO1xuICB9XG5cbiAgaWYgKG1vZGUgIT09ICdwaHAnKSB7XG4gICAgdmFyIG5hbWUgPSAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnLi4vaW5mby9pbmlfZ2V0JykoJ2xvY3V0dXMucGFyc2VfdXJsLnF1ZXJ5S2V5JykgOiB1bmRlZmluZWQpIHx8ICdxdWVyeUtleSc7XG4gICAgcGFyc2VyID0gLyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nO1xuICAgIHVyaVtuYW1lXSA9IHt9O1xuICAgIHF1ZXJ5ID0gdXJpW2tleVsxMl1dIHx8ICcnO1xuICAgIHF1ZXJ5LnJlcGxhY2UocGFyc2VyLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgICAgaWYgKCQxKSB7XG4gICAgICAgIHVyaVtuYW1lXVskMV0gPSAkMjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSB1cmkuc291cmNlO1xuICByZXR1cm4gdXJpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlX3VybC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmF3dXJsZGVjb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcmF3dXJsZGVjb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBsb3Zpb1xuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGlzIGZ1bmN0aW9uIGV4cGVjdHMgdG8gZGVjb2RlXG4gIC8vICAgICAgICAgICBub3RlIDE6IGZyb20gVVRGLTggZW5jb2RlZCBzdHJpbmdzLCBhcyBmb3VuZCBvblxuICAvLyAgICAgICAgICAgbm90ZSAxOiBwYWdlcyBzZXJ2ZWQgYXMgVVRGLThcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcmF3dXJsZGVjb2RlKCdLZXZpbit2YW4rWm9ubmV2ZWxkJTIxJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluK3Zhbitab25uZXZlbGQhJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiByYXd1cmxkZWNvZGUoJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiAnaHR0cDovL2t2ei5pby8nXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHJhd3VybGRlY29kZSgnaHR0cCUzQSUyRiUyRnd3dy5nb29nbGUubmwlMkZzZWFyY2glM0ZxJTNETG9jdXR1cyUyNmllJTNEJylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHA6Ly93d3cuZ29vZ2xlLm5sL3NlYXJjaD9xPUxvY3V0dXMmaWU9J1xuXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHN0ciArICcnKS5yZXBsYWNlKC8lKD8hW1xcZGEtZl17Mn0pL2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUEhQIHRvbGVyYXRlcyBwb29ybHkgZm9ybWVkIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICByZXR1cm4gJyUyNSc7XG4gIH0pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYXd1cmxkZWNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJhd3VybGVuY29kZShzdHIpIHtcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3Jhd3VybGVuY29kZS9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogdHJhdmNcbiAgLy8gICAgICAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogTWljaGFlbCBHcmllclxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBKb3Jpc1xuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBUaGlzIHJlZmxlY3RzIFBIUCA1LjMvNi4wKyBiZWhhdmlvclxuICAvLyAgICAgICAgICAgbm90ZSAxOiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGlzIGZ1bmN0aW9uIGV4cGVjdHMgXFxcbiAgLy8gICAgICAgICAgIG5vdGUgMTogdG8gZW5jb2RlIGludG8gVVRGLTggZW5jb2RlZCBzdHJpbmdzLCBhcyBmb3VuZCBvblxuICAvLyAgICAgICAgICAgbm90ZSAxOiBwYWdlcyBzZXJ2ZWQgYXMgVVRGLThcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogcmF3dXJsZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkIScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbiUyMHZhbiUyMFpvbm5ldmVsZCUyMSdcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogcmF3dXJsZW5jb2RlKCdodHRwOi8va3Z6LmlvLycpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwJTNBJTJGJTJGa3Z6LmlvJTJGJ1xuICAvLyAgICAgICAgZXhhbXBsZSAzOiByYXd1cmxlbmNvZGUoJ2h0dHA6Ly93d3cuZ29vZ2xlLm5sL3NlYXJjaD9xPUxvY3V0dXMmaWU9dXRmLTgnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cCUzQSUyRiUyRnd3dy5nb29nbGUubmwlMkZzZWFyY2glM0ZxJTNETG9jdXR1cyUyNmllJTNEdXRmLTgnXG5cbiAgc3RyID0gc3RyICsgJyc7XG5cbiAgLy8gVGlsZGUgc2hvdWxkIGJlIGFsbG93ZWQgdW5lc2NhcGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQSFAgKGFzIHJlZmxlY3RlZCBiZWxvdyksXG4gIC8vIGJ1dCBpZiB5b3Ugd2FudCB0byByZWZsZWN0IGN1cnJlbnRcbiAgLy8gUEhQIGJlaGF2aW9yLCB5b3Ugd291bGQgbmVlZCB0byBhZGQgXCIucmVwbGFjZSgvfi9nLCAnJTdFJyk7XCIgdG8gdGhlIGZvbGxvd2luZy5cbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyEvZywgJyUyMScpLnJlcGxhY2UoLycvZywgJyUyNycpLnJlcGxhY2UoL1xcKC9nLCAnJTI4JykucmVwbGFjZSgvXFwpL2csICclMjknKS5yZXBsYWNlKC9cXCovZywgJyUyQScpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhd3VybGVuY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJsZGVjb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXJsZGVjb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBQaGlsaXAgUGV0ZXJzb25cbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogTGFycyBGaXNjaGVyXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE9ybGFuZG9cbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogQUpcbiAgLy8gICAgICAgICBpbnB1dCBieTogdHJhdmNcbiAgLy8gICAgICAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICBpbnB1dCBieTogUmF0aGVvdXNcbiAgLy8gICAgICAgICBpbnB1dCBieTogZS1taWtlXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGxvdmlvXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IFJvYlxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBpbmZvIG9uIHdoYXQgZW5jb2RpbmcgZnVuY3Rpb25zIHRvIHVzZSBmcm9tOlxuICAvLyAgICAgICAgICAgbm90ZSAxOiBodHRwOi8veGtyLnVzL2FydGljbGVzL2phdmFzY3JpcHQvZW5jb2RlLWNvbXBhcmUvXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyB0byBkZWNvZGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogZnJvbSBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB1cmxkZWNvZGUoJ0tldmluK3Zhbitab25uZXZlbGQlMjEnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAnS2V2aW4gdmFuIFpvbm5ldmVsZCEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHVybGRlY29kZSgnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRicpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwOi8va3Z6LmlvLydcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0R1dGYtOCUyNm9lJTNEdXRmLTglMjZhcSUzRHQlMjZybHMlM0Rjb20udWJ1bnR1JTNBZW4tVVMlM0F1bm9mZmljaWFsJTI2Y2xpZW50JTNEZmlyZWZveC1hJylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHA6Ly93d3cuZ29vZ2xlLm5sL3NlYXJjaD9xPUxvY3V0dXMmaWU9dXRmLTgmb2U9dXRmLTgmYXE9dCZybHM9Y29tLnVidW50dTplbi1VUzp1bm9mZmljaWFsJmNsaWVudD1maXJlZm94LWEnXG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHVybGRlY29kZSgnJUU1JUE1JUJEJTNfNCcpXG4gIC8vICAgICAgICByZXR1cm5zIDQ6ICdcXHU1OTdkJTNfNCdcblxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KChzdHIgKyAnJykucmVwbGFjZSgvJSg/IVtcXGRhLWZdezJ9KS9naSwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFBIUCB0b2xlcmF0ZXMgcG9vcmx5IGZvcm1lZCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgcmV0dXJuICclMjUnO1xuICB9KS5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmxkZWNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVybGVuY29kZShzdHIpIHtcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VybGVuY29kZS9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogUGhpbGlwIFBldGVyc29uXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IExhcnMgRmlzY2hlclxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBBSlxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBKb3Jpc1xuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBUaGlzIHJlZmxlY3RzIFBIUCA1LjMvNi4wKyBiZWhhdmlvclxuICAvLyAgICAgICAgICAgbm90ZSAxOiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGlzIGZ1bmN0aW9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IGV4cGVjdHMgdG8gZW5jb2RlIGludG8gVVRGLTggZW5jb2RlZCBzdHJpbmdzLCBhcyBmb3VuZCBvblxuICAvLyAgICAgICAgICAgbm90ZSAxOiBwYWdlcyBzZXJ2ZWQgYXMgVVRGLThcbiAgLy8gICAgICAgIGV4YW1wbGUgMTogdXJsZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkIScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbit2YW4rWm9ubmV2ZWxkJTIxJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiB1cmxlbmNvZGUoJ2h0dHA6Ly9rdnouaW8vJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHVybGVuY29kZSgnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCcpXG4gIC8vICAgICAgICByZXR1cm5zIDM6ICdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0R1dGYtOCdcblxuICBzdHIgPSBzdHIgKyAnJztcblxuICAvLyBUaWxkZSBzaG91bGQgYmUgYWxsb3dlZCB1bmVzY2FwZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBIUCAoYXMgcmVmbGVjdGVkIGJlbG93KSxcbiAgLy8gYnV0IGlmIHlvdSB3YW50IHRvIHJlZmxlY3QgY3VycmVudFxuICAvLyBQSFAgYmVoYXZpb3IsIHlvdSB3b3VsZCBuZWVkIHRvIGFkZCBcIi5yZXBsYWNlKC9+L2csICclN0UnKTtcIiB0byB0aGUgZm9sbG93aW5nLlxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvIS9nLCAnJTIxJykucmVwbGFjZSgvJy9nLCAnJTI3JykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoL1xcKi9nLCAnJTJBJykucmVwbGFjZSgvJTIwL2csICcrJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJsZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzX2NhbGxhYmxlKG1peGVkVmFyLCBzeW50YXhPbmx5LCBjYWxsYWJsZU5hbWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9pc19jYWxsYWJsZS9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgIGlucHV0IGJ5OiBGcmFuw6dvaXNcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgdmFyaWFibGUgY2FsbGFibGVOYW1lIGNhbm5vdCB3b3JrIGFzIGEgc3RyaW5nIHZhcmlhYmxlIHBhc3NlZCBieVxuICAvLyAgICAgIG5vdGUgMTogcmVmZXJlbmNlIGFzIGluIFBIUCAoc2luY2UgSmF2YVNjcmlwdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmdcbiAgLy8gICAgICBub3RlIDE6IHN0cmluZ3MgYnkgcmVmZXJlbmNlKSwgYnV0IGluc3RlYWQgd2lsbCB0YWtlIHRoZSBuYW1lIG9mXG4gIC8vICAgICAgbm90ZSAxOiBhIGdsb2JhbCB2YXJpYWJsZSBhbmQgc2V0IHRoYXQgaW5zdGVhZC5cbiAgLy8gICAgICBub3RlIDE6IFdoZW4gdXNlZCBvbiBhbiBvYmplY3QsIGRlcGVuZHMgb24gYSBjb25zdHJ1Y3RvciBwcm9wZXJ0eVxuICAvLyAgICAgIG5vdGUgMTogYmVpbmcga2VwdCBvbiB0aGUgb2JqZWN0IHByb3RvdHlwZVxuICAvLyAgICAgIG5vdGUgMjogRGVwZW5kaW5nIG9uIHRoZSBgY2FsbGFibGVOYW1lYCB0aGF0IGlzIHBhc3NlZCwgdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGV2YWwuXG4gIC8vICAgICAgbm90ZSAyOiBUaGUgZXZhbCBpbnB1dCBpcyBob3dldmVyIGNoZWNrZWQgdG8gb25seSBhbGxvdyB2YWxpZCBmdW5jdGlvbiBuYW1lcyxcbiAgLy8gICAgICBub3RlIDI6IFNvIGl0IHNob3VsZCBub3QgYmUgdW5zYWZlciB0aGFuIHVzZXMgd2l0aG91dCBldmFsIChzZWVpbmcgYXMgeW91IGNhbilcbiAgLy8gICAgICBub3RlIDI6IGFscmVhZHkgcGFzcyBhbnkgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaGVyZS5cbiAgLy8gICBleGFtcGxlIDE6IGlzX2NhbGxhYmxlKCdpc19jYWxsYWJsZScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBpc19jYWxsYWJsZSgnYm9ndXNGdW5jdGlvbicsIHRydWUpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlIC8vIGdpdmVzIHRydWUgYmVjYXVzZSBkb2VzIG5vdCBkbyBzdHJpY3QgY2hlY2tpbmdcbiAgLy8gICBleGFtcGxlIDM6IGZ1bmN0aW9uIFNvbWVDbGFzcyAoKSB7fVxuICAvLyAgIGV4YW1wbGUgMzogU29tZUNsYXNzLnByb3RvdHlwZS5zb21lTWV0aG9kID0gZnVuY3Rpb24gKCl7fVxuICAvLyAgIGV4YW1wbGUgMzogdmFyIHRlc3RPYmogPSBuZXcgU29tZUNsYXNzKClcbiAgLy8gICBleGFtcGxlIDM6IGlzX2NhbGxhYmxlKFt0ZXN0T2JqLCAnc29tZU1ldGhvZCddLCB0cnVlLCAnbXlWYXInKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSBteVZhclxuICAvLyAgIHJldHVybnMgMzogJ1NvbWVDbGFzczo6c29tZU1ldGhvZCdcbiAgLy8gICBleGFtcGxlIDQ6IGlzX2NhbGxhYmxlKGZ1bmN0aW9uICgpIHt9KVxuICAvLyAgIHJldHVybnMgNDogdHJ1ZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgdmFyIHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuXG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIG1ldGhvZCA9ICcnO1xuICB2YXIgdmFsaWRGdW5jdGlvbk5hbWUgPSBmYWxzZTtcblxuICB2YXIgZ2V0RnVuY05hbWUgPSBmdW5jdGlvbiBnZXRGdW5jTmFtZShmbikge1xuICAgIHZhciBuYW1lID0gL1xcVypmdW5jdGlvblxccysoW1xcdyRdKylcXHMqXFwoLy5leGVjKGZuKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnKEFub255bW91cyknO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVsxXTtcbiAgfTtcblxuICBpZiAodHlwZW9mIG1peGVkVmFyID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9ICRnbG9iYWw7XG4gICAgbWV0aG9kID0gbWl4ZWRWYXI7XG4gICAgbmFtZSA9IG1peGVkVmFyO1xuICAgIHZhbGlkRnVuY3Rpb25OYW1lID0gISFuYW1lLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWl4ZWRWYXIpID09PSAnW29iamVjdCBBcnJheV0nICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMiAmJiBfdHlwZW9mKG1peGVkVmFyWzBdKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1peGVkVmFyWzFdID09PSAnc3RyaW5nJykge1xuICAgIG9iaiA9IG1peGVkVmFyWzBdO1xuICAgIG1ldGhvZCA9IG1peGVkVmFyWzFdO1xuICAgIG5hbWUgPSAob2JqLmNvbnN0cnVjdG9yICYmIGdldEZ1bmNOYW1lKG9iai5jb25zdHJ1Y3RvcikpICsgJzo6JyArIG1ldGhvZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3ludGF4T25seSB8fCB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoY2FsbGFibGVOYW1lKSB7XG4gICAgICAkZ2xvYmFsW2NhbGxhYmxlTmFtZV0gPSBuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHZhbGlkRnVuY3Rpb25OYW1lIGF2b2lkcyBleHBsb2l0c1xuICBpZiAodmFsaWRGdW5jdGlvbk5hbWUgJiYgdHlwZW9mIGV2YWwobWV0aG9kKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX2NhbGxhYmxlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1dGY4X2VuY29kZShhcmdTdHJpbmcpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91dGY4X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IHNvd2JlcnJ5XG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBZdmVzIFN1Y2FldFxuICAvLyBpbXByb3ZlZCBieToga2lyaWxsb2lkXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBVbHJpY2hcbiAgLy8gYnVnZml4ZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cDovL2Jsb2cua3VrYXdza2kucGwpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gICBleGFtcGxlIDE6IHV0ZjhfZW5jb2RlKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXG4gIGlmIChhcmdTdHJpbmcgPT09IG51bGwgfHwgdHlwZW9mIGFyZ1N0cmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyAucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpLnJlcGxhY2UoL1xcci9nLCBcIlxcblwiKTtcbiAgdmFyIHN0cmluZyA9IGFyZ1N0cmluZyArICcnO1xuICB2YXIgdXRmdGV4dCA9ICcnO1xuICB2YXIgc3RhcnQ7XG4gIHZhciBlbmQ7XG4gIHZhciBzdHJpbmdsID0gMDtcblxuICBzdGFydCA9IGVuZCA9IDA7XG4gIHN0cmluZ2wgPSBzdHJpbmcubGVuZ3RoO1xuICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZ2w7IG4rKykge1xuICAgIHZhciBjMSA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuICAgIHZhciBlbmMgPSBudWxsO1xuXG4gICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICBlbmQrKztcbiAgICB9IGVsc2UgaWYgKGMxID4gMTI3ICYmIGMxIDwgMjA0OCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiA2IHwgMTkyLCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2UgaWYgKChjMSAmIDB4RjgwMCkgIT09IDB4RDgwMCkge1xuICAgICAgZW5jID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSA+PiAxMiB8IDIyNCwgYzEgPj4gNiAmIDYzIHwgMTI4LCBjMSAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vycm9nYXRlIHBhaXJzXG4gICAgICBpZiAoKGMxICYgMHhGQzAwKSAhPT0gMHhEODAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgdHJhaWwgc3Vycm9nYXRlIGF0ICcgKyBuKTtcbiAgICAgIH1cbiAgICAgIHZhciBjMiA9IHN0cmluZy5jaGFyQ29kZUF0KCsrbik7XG4gICAgICBpZiAoKGMyICYgMHhGQzAwKSAhPT0gMHhEQzAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdVbm1hdGNoZWQgbGVhZCBzdXJyb2dhdGUgYXQgJyArIChuIC0gMSkpO1xuICAgICAgfVxuICAgICAgYzEgPSAoKGMxICYgMHgzRkYpIDw8IDEwKSArIChjMiAmIDB4M0ZGKSArIDB4MTAwMDA7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDE4IHwgMjQwLCBjMSA+PiAxMiAmIDYzIHwgMTI4LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH1cbiAgICBpZiAoZW5jICE9PSBudWxsKSB7XG4gICAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICB9XG4gICAgICB1dGZ0ZXh0ICs9IGVuYztcbiAgICAgIHN0YXJ0ID0gZW5kID0gbiArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgdXRmdGV4dCArPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIHN0cmluZ2wpO1xuICB9XG5cbiAgcmV0dXJuIHV0ZnRleHQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRmOF9lbmNvZGUuanMubWFwIiwiLy8gQXJyYXkgJiBPYmplY3QgUmVsYXRlZCBGdW5jdGlvbnNcclxubW9kdWxlLmV4cG9ydHMucGFyc2VfYXJncyAgICAgICAgID0gcmVxdWlyZSggJ2pzLXBhcnNlLWFyZ3MnICk7XHJcbm1vZHVsZS5leHBvcnRzLmFycmF5X3RvX2h0bWxfYXR0ciA9IHJlcXVpcmUoICcuL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0cicgKTtcclxubW9kdWxlLmV4cG9ydHMuYXJyYXlfdG9faHRtbCAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbCcgKTtcclxubW9kdWxlLmV4cG9ydHMuYXJyYXlfdG9fd2luZG93ICAgID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9fd2luZG93JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5wbGFpbl9vYmplY3QgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9wbGFpbl9vYmplY3QnICk7XHJcblxyXG4vLyBEYXRlICYgVGltZSBSZWxhdGVkIEZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cy5taWNyb3RpbWUgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZGF0ZXRpbWUvbWljcm90aW1lJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19hZnRlcl9kYXRlICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19hZnRlcl9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19iZWZvcmVfZGF0ZSAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19iZWZvcmVfZGF0ZScgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfc2FtZV9kYXRlICAgID0gcmVxdWlyZSggJy4vcGFydHMvaXNfc2FtZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRfZHVyYXRpb24gPSByZXF1aXJlKCAnLi9wYXJ0cy9mb3JtYXRfZHVyYXRpb24nICk7XHJcbm1vZHVsZS5leHBvcnRzLmRpZmZfZGF5cyAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RpZmZfZGF5cycgKTtcclxubW9kdWxlLmV4cG9ydHMudGltZV90YWtlbiAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvdGltZV90YWtlbicgKTtcclxuXHJcbi8vIERhdGEgVHlwZSBWYWxpZGF0aW9uXHJcbm1vZHVsZS5leHBvcnRzLmlzX3VybCA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3VybC5qcycgKTtcclxuXHJcbi8vIFJ1biBUaW1lIEZ1bmN0aW9uIFJlbGF0ZWRzLlxyXG5tb2R1bGUuZXhwb3J0cy5jYWxsX3VzZXJfZnVuYyAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHMuY2FsbF91c2VyX2Z1bmNfYXJyYXkgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknICk7XHJcbm1vZHVsZS5leHBvcnRzLmZ1bmN0aW9uX2V4aXN0cyAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cycgKTtcclxubW9kdWxlLmV4cG9ydHMuY3JlYXRlX2Z1bmN0aW9uICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvY3JlYXRlX2Z1bmN0aW9uJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19jYWxsYWJsZSAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUnICk7XHJcblxyXG4vLyBCcm93c2VyIFJlbGF0ZWRcclxubW9kdWxlLmV4cG9ydHMuaXNfdGFiX2ZvY3VzZWQgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc190YWJfZm9jdXNlZCcgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfd2luZG93X2FyZyAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc193aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5zY3JvbGxfdG9fdG9wICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF90b190b3AnICk7XHJcbm1vZHVsZS5leHBvcnRzLmNvcHlfdG9fY2xpcCAgID0gcmVxdWlyZSggJy4vcGFydHMvY29weV90b19jbGlwJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5zY3JvbGxfcG9zICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3Njcm9sbF9wb3MnICk7XHJcbm1vZHVsZS5leHBvcnRzLndpbmRvd19hcmcgICAgID0gcmVxdWlyZSggJy4vcGFydHMvd2luZG93X2FyZycgKTtcclxubW9kdWxlLmV4cG9ydHMuZGV2aWNlX3R5cGUgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9kZXZpY2VfdHlwZScgKTtcclxubW9kdWxlLmV4cG9ydHMucGlwZV9sb2cgICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9waXBlX2xvZycgKTtcclxuXHJcbi8vIGpRdWVyeSBSZWxhdGVkLlxyXG5tb2R1bGUuZXhwb3J0cy50b19qcXVlcnkgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qcXVlcnknICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2pxdWVyeSA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2pxdWVyeScgKTtcclxuXHJcbi8vIE90aGVyc1xyXG5tb2R1bGUuZXhwb3J0cy50b19qc19mdW5jID0gcmVxdWlyZSggJy4vcGFydHMvdG9fanNfZnVuYycgKTtcclxubW9kdWxlLmV4cG9ydHMubWQ1ICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNScgKTtcclxubW9kdWxlLmV4cG9ydHMuY291bnRlciAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2NvdW50ZXInICk7XHJcbm1vZHVsZS5leHBvcnRzLnJhbmRfbWQ1ICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9yYW5kX21kNScgKTtcclxubW9kdWxlLmV4cG9ydHMuY3NzX3VuaXRzICA9IHJlcXVpcmUoICcuL3BhcnRzL2Nzc191bml0cycgKTtcclxuXHJcbi8vIFVSTCBSZWxhdGVkIEZ1bmN0aW9ucy5cclxubW9kdWxlLmV4cG9ydHMudXJsX3BhcmFtcyAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3VybF9wYXJhbXMnICk7XHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5X3N0cmluZyAgPSByZXF1aXJlKCAnLi9wYXJ0cy9xdWVyeV9zdHJpbmcnICk7XHJcbm1vZHVsZS5leHBvcnRzLnBhcnNlX3N0ciAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHInICk7XHJcbm1vZHVsZS5leHBvcnRzLmJhc2U2NF9lbmNvZGUgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmJhc2U2NF9kZWNvZGUgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9kZWNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnJhd3VybGRlY29kZSAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3Jhd3VybGRlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMucmF3dXJsZW5jb2RlICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy51cmxkZWNvZGUgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC91cmxkZWNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnVybGVuY29kZSAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGVuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMucGFyc2VfdXJsICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG4iLCIvKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGFycmF5IGVsZW1lbnRzIGludG8gPGxpPiB0YWdzIGFuZCBhcHBlbmRzIHRoZW0gdG8gdGhlIGxpc3Qgb2YgdGhlIGdpdmVuIGlkLlxyXG4gKiBVc2UgQXJyYXkucHJvdG90eXBlLm1hcCgpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCksIGFuZCBhbiBhbm9ueW1vdXMgaW5uZXIgY2xvc3VyZSB0byBjcmVhdGUgYSBsaXN0IG9mIGh0bWwgdGFncy5cclxuICogQHBhcmFtIGFyclxyXG4gKiBAcGFyYW0gbGlzdElEXHJcbiAqIEBwYXJhbSB0YWdcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggYXJyLCBsaXN0SUQsIHRhZyA9ICdsaScgKSA9PiAoIGVsID0+ICggKCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjJyArIGxpc3RJRCApICksICggZWwuaW5uZXJIVE1MICs9IGFyci5tYXAoIGl0ZW0gPT4gYDwke3RhZ30+JHtpdGVtfTwvJHt0YWd9PmAgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oICcnICkgKSApICkoKTsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJGRhdGEgKSA9PiB7XHJcblx0bGV0IHJldHVybl9odG1sID0gJyc7XHJcblx0Zm9yKCBsZXQgSSBpbiAkZGF0YSApIHtcclxuXHRcdGlmKCBfLmlzT2JqZWN0KCAkZGF0YVsgSSBdICkgKSB7XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJztcclxuXHRcdFx0Zm9yKCBsZXQgSyBpbiAkZGF0YVsgSSBdICkge1xyXG5cdFx0XHRcdGxldCAkdmFsdWUgPSAoIF8uaXNPYmplY3QoICRkYXRhWyBJIF1bIEsgXSApICkgPyBKU09OLnN0cmluZ2lmeSggJGRhdGFbIEkgXVsgSyBdICkgOiAkZGF0YVsgSSBdWyBLIF07XHJcblx0XHRcdFx0cmV0dXJuX2h0bWwgKz0gJHZhbHVlICsgJyAnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybl9odG1sICs9ICdcIic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgJHZhbHVlID0gKCBfLmlzT2JqZWN0KCAkZGF0YVsgSSBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdICkgOiAkZGF0YVsgSSBdO1xyXG5cdFx0XHRyZXR1cm5faHRtbCArPSAnICcgKyBJICsgJz1cIicgKyAkdmFsdWUgKyAnXCIgJztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJldHVybl9odG1sO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9ICggJGFycmF5ICkgPT4ge1xyXG5cdGZvciggbGV0ICRrZXkgaW4gJGFycmF5ICkge1xyXG5cdFx0d2luZG93WyAka2V5IF0gPSAkYXJyYXlbICRrZXkgXTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENvcHkgYSBzdHJpbmcgdG8gdGhlIGNsaXBib2FyZC4gT25seSB3b3JrcyBhcyBhIHJlc3VsdCBvZiB1c2VyIGFjdGlvbiAoaS5lLiBpbnNpZGUgYSBjbGljayBldmVudCBsaXN0ZW5lcikuXHJcbiAqIENyZWF0ZSBhIG5ldyA8dGV4dGFyZWE+IGVsZW1lbnQsIGZpbGwgaXQgd2l0aCB0aGUgc3VwcGxpZWQgZGF0YSBhbmQgYWRkIGl0IHRvIHRoZSBIVE1MIGRvY3VtZW50LlxyXG4gKiBVc2UgU2VsZWN0aW9uLmdldFJhbmdlQXQoKXRvIHN0b3JlIHRoZSBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogVXNlIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JykgdG8gY29weSB0byB0aGUgY2xpcGJvYXJkLlxyXG4gKiBSZW1vdmUgdGhlIDx0ZXh0YXJlYT4gZWxlbWVudCBmcm9tIHRoZSBIVE1MIGRvY3VtZW50LiBGaW5hbGx5LCB1c2UgU2VsZWN0aW9uKCkuYWRkUmFuZ2UoKSB0byByZWNvdmVyIHRoZSBvcmlnaW5hbCBzZWxlY3RlZCByYW5nZSAoaWYgYW55KS5cclxuICogQHBhcmFtIHN0clxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xyXG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RleHRhcmVhJyApO1xyXG5cdGVsLnZhbHVlID0gc3RyO1xyXG5cdGVsLnNldEF0dHJpYnV0ZSggJ3JlYWRvbmx5JywgJycgKTtcclxuXHRlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0ZWwuc3R5bGUubGVmdCAgICAgPSAnLTk5OTlweCc7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZWwgKTtcclxuXHRjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJhbmdlQ291bnQgPiAwID8gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCggMCApIDogZmFsc2U7XHJcblx0ZWwuc2VsZWN0KCk7XHJcblx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoICdjb3B5JyApO1xyXG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoIGVsICk7XHJcblx0aWYoIHNlbGVjdGVkICkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZSggc2VsZWN0ZWQgKTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZXMgYSBjb3VudGVyIHdpdGggdGhlIHNwZWNpZmllZCByYW5nZSwgc3RlcCBhbmQgZHVyYXRpb24gZm9yIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3IuXHJcbiAqIENoZWNrIGlmIHN0ZXAgaGFzIHRoZSBwcm9wZXIgc2lnbiBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5LlxyXG4gKiBVc2Ugc2V0SW50ZXJ2YWwoKSBpbiBjb21iaW5hdGlvbiB3aXRoIE1hdGguYWJzKCkgYW5kIE1hdGguZmxvb3IoKSB0byBjYWxjdWxhdGUgdGhlIHRpbWUgYmV0d2VlbiBlYWNoIG5ldyB0ZXh0IGRyYXcuXHJcbiAqIFVzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCkuaW5uZXJIVE1MIHRvIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQuXHJcbiAqIE9taXQgdGhlIGZvdXJ0aCBwYXJhbWV0ZXIsIHN0ZXAsIHRvIHVzZSBhIGRlZmF1bHQgc3RlcCBvZiAxLiBPbWl0IHRoZSBmaWZ0aCBwYXJhbWV0ZXIsIGR1cmF0aW9uLCB0byB1c2UgYSBkZWZhdWx0IGR1cmF0aW9uIG9mIDIwMDBtcy5cclxuICogQHBhcmFtIHNlbGVjdG9yXHJcbiAqIEBwYXJhbSBzdGFydFxyXG4gKiBAcGFyYW0gZW5kXHJcbiAqIEBwYXJhbSBzdGVwXHJcbiAqIEBwYXJhbSBkdXJhdGlvblxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIHNlbGVjdG9yLCBzdGFydCwgZW5kLCBzdGVwID0gMSwgZHVyYXRpb24gPSAyMDAwICkgPT4ge1xyXG5cdGxldCBjdXJyZW50ID0gc3RhcnQsXHJcblx0XHRfc3RlcCAgID0gKCBlbmQgLSBzdGFydCApICogc3RlcCA8IDAgPyAtc3RlcCA6IHN0ZXAsXHJcblx0XHR0aW1lciAgID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHRcdFx0Y3VycmVudCArPSBfc3RlcDtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKS5pbm5lckhUTUwgPSBjdXJyZW50O1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGVuZDtcclxuXHRcdFx0aWYoIGN1cnJlbnQgPj0gZW5kICkgY2xlYXJJbnRlcnZhbCggdGltZXIgKTtcclxuXHRcdH0sIE1hdGguYWJzKCBNYXRoLmZsb29yKCBkdXJhdGlvbiAvICggZW5kIC0gc3RhcnQgKSApICkgKTtcclxuXHRyZXR1cm4gdGltZXI7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4ge1xyXG5cdHZhciBzID0gdmFsO1xyXG5cdGlmKCBfLmlzTnVtYmVyKCB2YWwgKSApIHtcclxuXHRcdHJldHVybiB2YWwgKyAncHgnO1xyXG5cdH0gZWxzZSBpZiggdmFsLmluZGV4T2YoICdweCcgKSA+IC0xIHx8IHZhbC5pbmRleE9mKCAnJScgKSA+IC0xIHx8IHZhbC5pbmRleE9mKCAnZW0nICkgPiAtMSApIHtcclxuXHRcdGxldCBjaGVja1B4ICA9IHMucmVwbGFjZSggJ3B4JywgJycgKTtcclxuXHRcdGxldCBjaGVja1BjdCA9IHMucmVwbGFjZSggJyUnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrRW0gID0gcy5yZXBsYWNlKCAnZW0nLCAnJyApO1xyXG5cdFx0aWYoIF8uaXNOdW1iZXIoIGNoZWNrUHggKSB8fCBfLmlzTnVtYmVyKCBjaGVja1BjdCApIHx8IF8uaXNOdW1iZXIoIGNoZWNrRW0gKSApIHtcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAnMHB4JztcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuICcwcHgnO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogRGV0ZWN0cyB3ZXRoZXIgdGhlIHdlYnNpdGUgaXMgYmVpbmcgb3BlbmVkIGluIGEgbW9iaWxlIGRldmljZSBvciBhIGRlc2t0b3AvbGFwdG9wLlxyXG4gKiBVc2UgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gdGVzdCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCBwcm9wZXJ0eSB0byBmaWd1cmUgb3V0IGlmIHRoZSBkZXZpY2UgaXMgYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApID8gJ01vYmlsZScgOiAnRGVza3RvcCc7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgKGluIGRheXMpIGJldHdlZW4gdHdvIGRhdGVzLlxyXG4gKiBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgKGluIGRheXMpIGJldHdlZW4gdHdvIERhdGUgb2JqZWN0cy5cclxuICogQHBhcmFtIGRhdGVJbml0aWFsXHJcbiAqIEBwYXJhbSBkYXRlRmluYWxcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlSW5pdGlhbCwgZGF0ZUZpbmFsICkgPT4gKCBkYXRlRmluYWwgLSBkYXRlSW5pdGlhbCApIC8gKCAxMDAwICogMzYwMCAqIDI0ICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGh1bWFuIHJlYWRhYmxlIGZvcm1hdCBvZiB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICogRGl2aWRlIG1zIHdpdGggdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyB0byBvYnRhaW4gdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyBmb3IgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCBhbmQgbWlsbGlzZWNvbmQuXHJcbiAqIFVzZSBPYmplY3QuZW50cmllcygpIHdpdGggQXJyYXkucHJvdG90eXBlLmZpbHRlcigpIHRvIGtlZXAgb25seSBub24temVybyB2YWx1ZXMuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCkgdG8gY3JlYXRlIHRoZSBzdHJpbmcgZm9yIGVhY2ggdmFsdWUsIHBsdXJhbGl6aW5nIGFwcHJvcHJpYXRlbHkuXHJcbiAqIFVzZSBTdHJpbmcucHJvdG90eXBlLmpvaW4oJywgJykgdG8gY29tYmluZSB0aGUgdmFsdWVzIGludG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBtc1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBtcyA9PiB7XHJcblx0aWYoIG1zIDwgMCApIG1zID0gLW1zO1xyXG5cdGNvbnN0IHRpbWUgPSB7XHJcblx0XHRkYXk6IE1hdGguZmxvb3IoIG1zIC8gODY0MDAwMDAgKSxcclxuXHRcdGhvdXI6IE1hdGguZmxvb3IoIG1zIC8gMzYwMDAwMCApICUgMjQsXHJcblx0XHRtaW51dGU6IE1hdGguZmxvb3IoIG1zIC8gNjAwMDAgKSAlIDYwLFxyXG5cdFx0c2Vjb25kOiBNYXRoLmZsb29yKCBtcyAvIDEwMDAgKSAlIDYwLFxyXG5cdFx0bWlsbGlzZWNvbmQ6IE1hdGguZmxvb3IoIG1zICkgJSAxMDAwXHJcblx0fTtcclxuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoIHRpbWUgKVxyXG5cdFx0XHRcdCAuZmlsdGVyKCB2YWwgPT4gdmFsWyAxIF0gIT09IDAgKVxyXG5cdFx0XHRcdCAubWFwKCAoIFsga2V5LCB2YWwgXSApID0+IGAke3ZhbH0gJHtrZXl9JHt2YWwgIT09IDEgPyAncycgOiAnJ31gIClcclxuXHRcdFx0XHQgLmpvaW4oICcsICcgKTtcclxufTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGFmdGVyIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIHRoZSBncmVhdGVyIHRoYW4gb3BlcmF0b3IgKD4pIHRvIGNoZWNrIGlmIHRoZSBmaXJzdCBkYXRlIGNvbWVzIGFmdGVyIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBID4gZGF0ZUI7IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyBiZWZvcmUgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGxlc3MgdGhhbiBvcGVyYXRvciAoPCkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYmVmb3JlIHRoZSBzZWNvbmQgb25lLlxyXG4gKiBAcGFyYW0gZGF0ZUFcclxuICogQHBhcmFtIGRhdGVCXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVBLCBkYXRlQiApID0+IGRhdGVBIDwgZGF0ZUI7IiwiLyoqXHJcbiAqIENoZWNrIGlmIGdpdmVuIE9iamVjdCAvIFZhbHVlIGlzIGEgalF1ZXJ5IEluc3RhbmNlLlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+ICggZmFsc2UgPT09IF8uaXNVbmRlZmluZWQoICRlbGVtICkgJiYgZmFsc2UgPT09IF8uaXNTdHJpbmcoICRlbGVtICkgJiYgJGVsZW0ualF1ZXJ5ICk7IiwiLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSBpcyB0aGUgc2FtZSBhcyBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpIGFuZCBzdHJpY3QgZXF1YWxpdHkgY2hlY2tpbmcgKD09PSkgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgaXMgdGhlIHNhbWUgYXMgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEudG9JU09TdHJpbmcoKSA9PT0gZGF0ZUIudG9JU09TdHJpbmcoKTsiLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyBmb2N1c2VkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqIFVzZSB0aGUgRG9jdW1lbnQuaGlkZGVuIHByb3BlcnR5LCBpbnRyb2R1Y2VkIGJ5IHRoZSBQYWdlIFZpc2liaWxpdHkgQVBJIHRvIGNoZWNrIGlmIHRoZSBicm93c2VyIHRhYiBvZiB0aGUgcGFnZSBpcyB2aXNpYmxlIG9yIGhpZGRlbi5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+ICFkb2N1bWVudC5oaWRkZW47IiwibW9kdWxlLmV4cG9ydHMgPSAoICR1cmwgKSA9PiB7XHJcblx0bGV0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCAnXihodHRwcz86XFxcXC9cXFxcLyk/JyArIC8vIHByb3RvY29sXHJcblx0XHQnKCgoW2EtelxcXFxkXShbYS16XFxcXGQtXSpbYS16XFxcXGRdKSopXFxcXC4/KStbYS16XXsyLH18JyArIC8vIGRvbWFpbiBuYW1lXHJcblx0XHQnKChcXFxcZHsxLDN9XFxcXC4pezN9XFxcXGR7MSwzfSkpJyArIC8vIGlwICh2NCkgYWRkcmVzc1xyXG5cdFx0JyhcXFxcOlxcXFxkKyk/KFxcXFwvWy1hLXpcXFxcZCVfLn4rXSopKicgKyAvL3BvcnRcclxuXHRcdCcoXFxcXD9bOyZhLXpcXFxcZCVfLn4rPS1dKik/JyArIC8vIHF1ZXJ5IHN0cmluZ1xyXG5cdFx0JyhcXFxcI1stYS16XFxcXGRfXSopPyQnLCAnaScgKTtcclxuXHRyZXR1cm4gKCBwYXR0ZXJuLnRlc3QoICR1cmwgKSApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVja3MgaWYgd2luZG93IGhhcyBnaXZlbiB2YXJpYWJsZS5cclxuICogQHBhcmFtICRrZXlcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSApID0+ICggZmFsc2UgPT09IF8uaXNVbmRlZmluZWQoIHdpbmRvd1sgJGtleSBdICkgKTsiLCIvKipcclxuICogTG9ncyBhIHZhbHVlIGFuZCByZXR1cm5zIGl0LlxyXG4gKiBVc2UgY29uc29sZS5sb2cgdG8gbG9nIHRoZSBzdXBwbGllZCB2YWx1ZSwgY29tYmluZWQgd2l0aCB0aGUgfHwgb3BlcmF0b3IgdG8gcmV0dXJuIGl0LlxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZGF0YSA9PiBjb25zb2xlLmxvZyggZGF0YSApIHx8IGRhdGE7IiwibW9kdWxlLmV4cG9ydHMgPSAoKSA9PiAoIHR5cGVvZiBPYmplY3QuY3JlYXRlICAhPT0gJ3VuZGVmaW5lZCcgKSA/IE9iamVjdC5jcmVhdGUoIG51bGwgKSA6IHt9OyIsIi8qKlxyXG4gKiBSZXR1cm4gdmFsdWUgZnJvbSBRdWVyeVN0cmluZ1xyXG4gKiBAcGFyYW0gbmFtZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIG5hbWUgKSA9PiB7XHJcblx0bmFtZSAgICAgICAgPSBuYW1lLnJlcGxhY2UoIC9bXFxbXS8sIFwiXFxcXFtcIiApLnJlcGxhY2UoIC9bXFxdXS8sIFwiXFxcXF1cIiApO1xyXG5cdHZhciByZWdleCAgID0gbmV3IFJlZ0V4cCggXCJbXFxcXD8mXVwiICsgbmFtZSArIFwiPShbXiYjXSopXCIgKSxcclxuXHRcdHJlc3VsdHMgPSByZWdleC5leGVjKCBsb2NhdGlvbi5zZWFyY2ggKTtcclxuXHRyZXR1cm4gcmVzdWx0cyA9PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudCggcmVzdWx0c1sgMSBdLnJlcGxhY2UoIC9cXCsvZywgXCIgXCIgKSApO1xyXG59OyIsImltcG9ydCBtZDUgZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9tZDUnO1xyXG5cclxuLyoqXHJcbiAqIFVuaXF1ZSByYW5kb20gbWQ1XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IFN0cmluZyggbWQ1KCBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSArICctJyArIE1hdGgucmFuZG9tKCkgKSApOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgcGFnZS5cclxuICogVXNlIHBhZ2VYT2Zmc2V0IGFuZCBwYWdlWU9mZnNldCBpZiB0aGV5IGFyZSBkZWZpbmVkLCBvdGhlcndpc2Ugc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wLiBZb3UgY2FuIG9taXQgZWwgdG8gdXNlIGEgZGVmYXVsdCB2YWx1ZSBvZiB3aW5kb3cuXHJcbiAqIEBwYXJhbSBlbFxyXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBlbCA9IHdpbmRvdyApID0+ICgge1xyXG5cdHg6IGVsLnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBlbC5wYWdlWE9mZnNldCA6IGVsLnNjcm9sbExlZnQsXHJcblx0eTogZWwucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VZT2Zmc2V0IDogZWwuc2Nyb2xsVG9wXHJcbn0gKTsiLCIvKipcclxuICogU21vb3RoLXNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS5cclxuICogR2V0IGRpc3RhbmNlIGZyb20gdG9wIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3Agb3IgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AuXHJcbiAqIFNjcm9sbCBieSBhIGZyYWN0aW9uIG9mIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3AuIFVzZSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgdG8gYW5pbWF0ZSB0aGUgc2Nyb2xsaW5nLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0aWYoIGMgPiAwICkge1xyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggc2Nyb2xsVG9Ub3AgKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbyggMCwgYyAtIGMgLyA4ICk7XHJcblx0fVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gKCBjYWxsYmFjaywgdGl0bGUgPSAnVGltZVRha2VuJyApID0+IHtcclxuXHRjb25zb2xlLnRpbWUoIHRpdGxlICk7XHJcblx0Y29uc3QgciA9IGNhbGxiYWNrKCk7XHJcblx0Y29uc29sZS50aW1lRW5kKCB0aXRsZSApO1xyXG5cdHJldHVybiByO1xyXG59OyIsImltcG9ydCBpc19qcXVlcnkgZnJvbSAnLi9pc19qcXVlcnknO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgR2l2ZW4gU3RyaW5nIGludG8gQSBqUXVlcnkgT2JqZWN0LlxyXG4gKiBAcGFyYW0gJGVsZW1cclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGVsZW0gKSA9PiB7XHJcblx0aWYoIGZhbHNlID09PSBpc19qcXVlcnkoICRlbGVtICkgKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5KCAkZWxlbSApO1xyXG5cdH1cclxuXHRyZXR1cm4gJGVsZW07XHJcbn07IiwiaW1wb3J0IHZhbGlkYXRlSlNGdW5jIGZyb20gJy4vdmFsaWRhdGVTaW5nbGVKU0Z1bmMnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBFYWNoIFZhbHVlIE9mIGEgSlMgT2JqZWN0IEFuZCBDb252ZXJ0cyBJbnRvIEpTIENhbGxhYmxlIEZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gJGRhdGFcclxuICogQHBhcmFtICRhcmdzX2tleVxyXG4gKiBAcGFyYW0gJGNvbnRlbnRzX2tleVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSwgJGFyZ3Nfa2V5ID0gJ2pzX2FyZ3MnLCAkY29udGVudHNfa2V5ID0gJ2pzX2NvbnRlbnRzJyApID0+IHtcclxuXHRpZiggdHJ1ZSA9PT0gXy5pc09iamVjdCggJGRhdGEgKSApIHtcclxuXHRcdGZvciggbGV0ICRrZXkgaW4gJGRhdGEgKSB7XHJcblx0XHRcdGlmKCAhXy5pc0VtcHR5KCAkZGF0YVsgJGtleSBdICkgKSB7XHJcblx0XHRcdFx0JGRhdGFbICRrZXkgXSA9IHZhbGlkYXRlSlNGdW5jKCAkZGF0YVsgJGtleSBdLCAkYXJnc19rZXksICRjb250ZW50c19rZXkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gJGRhdGE7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBjdXJyZW50IFVSTC5cclxuICogVXNlIFN0cmluZy5tYXRjaCgpIHdpdGggYW4gYXBwcm9wcmlhdGUgcmVndWxhciBleHByZXNzaW9uIHRvIGdldCBhbGwga2V5LXZhbHVlIHBhaXJzLFxyXG4gKiBBcnJheS5wcm90b3R5cGUucmVkdWNlKCkgdG8gbWFwIGFuZCBjb21iaW5lIHRoZW0gaW50byBhIHNpbmdsZSBvYmplY3QuXHJcbiAqIFBhc3MgbG9jYXRpb24uc2VhcmNoIGFzIHRoZSBhcmd1bWVudCB0byBhcHBseSB0byB0aGUgY3VycmVudCB1cmwuXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge1QgfCB7fX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gdXJsID0+XHJcblx0KCB1cmwubWF0Y2goIC8oW14/PSZdKykoPShbXiZdKikpL2cgKSB8fCBbXSApLnJlZHVjZShcclxuXHRcdCggYSwgdiApID0+ICggKCBhWyB2LnNsaWNlKCAwLCB2LmluZGV4T2YoICc9JyApICkgXSA9IHYuc2xpY2UoIHYuaW5kZXhPZiggJz0nICkgKyAxICkgKSwgYSApLFxyXG5cdFx0e31cclxuXHQpOyIsIi8qKlxyXG4gKiBDb252ZXJ0cyBKUyBTdHJpbmcgSW50byBDYWxsYWJsZSBGdW5jdGlvbi5cclxuICogQHBhcmFtICRzdHJpbmdcclxuICogQHBhcmFtICRhcmdzX2tleVxyXG4gKiBAcGFyYW0gJGNvbnRlbnRzX2tleVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkc3RyaW5nLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBfLmlzT2JqZWN0KCAkc3RyaW5nICkgJiYgZmFsc2UgPT09IF8uaXNVbmRlZmluZWQoICRzdHJpbmdbICRhcmdzX2tleSBdICkgfHwgZmFsc2UgPT09IF8uaXNVbmRlZmluZWQoICRzdHJpbmdbICRjb250ZW50c19rZXkgXSApICkge1xyXG5cdFx0bGV0ICRhcmdzICAgICA9ICggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRhcmdzX2tleSBdO1xyXG5cdFx0bGV0ICRjb250ZW50cyA9ICggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdID09PSBmYWxzZSApID8gZmFsc2UgOiAkc3RyaW5nWyAkY29udGVudHNfa2V5IF07XHJcblx0XHRpZiggJGFyZ3MgPT09IGZhbHNlICYmICRjb250ZW50cyAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIGlmKCAkYXJncyAhPT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGFyZ3MsICRjb250ZW50cyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICRzdHJpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkc3RyaW5nO1xyXG59O1xyXG4iLCIvKipcclxuICogU2V0cyBKUyBPYmplY3QgSW50byBXaW5kb3cgQXJncy5cclxuICogQHBhcmFtICRrZXlcclxuICogQHBhcmFtICR2YWx1ZVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRrZXksICR2YWx1ZSApID0+IHtcclxuXHRpZiggXy5pc09iamVjdCggJGtleSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJF9rIGluICRrZXkgKSB7XHJcblx0XHRcdHdpbmRvd1sgJF9rIF0gPSAka2V5WyAkX2sgXTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93WyAka2V5IF0gPSAkdmFsdWU7XHJcblx0fVxyXG59OyIsImNvbnN0IHBhcnNlX3VybCAgICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3BhcnNlX3VybCcgKTtcclxuY29uc3QgcGFyc2Vfc3RyICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxuY29uc3QgaHR0cF9idWlsZF9xdWVyeSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvaHR0cF9idWlsZF9xdWVyeScgKTtcclxuY29uc3Qgc3RycG9zICAgICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3N0cnBvcycgKTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSBtb2RpZmllZCBVUkwgcXVlcnkgc3RyaW5nLlxyXG4gKlxyXG4gKiBZb3UgY2FuIHJlYnVpbGQgdGhlIFVSTCBhbmQgYXBwZW5kIHF1ZXJ5IHZhcmlhYmxlcyB0byB0aGUgVVJMIHF1ZXJ5IGJ5IHVzaW5nIHRoaXMgZnVuY3Rpb24uXHJcbiAqIFRoZXJlIGFyZSB0d28gd2F5cyB0byB1c2UgdGhpcyBmdW5jdGlvbjsgZWl0aGVyIGEgc2luZ2xlIGtleSBhbmQgdmFsdWUsIG9yIGFuIGFzc29jaWF0aXZlIGFycmF5LlxyXG4gKlxyXG4gKiBVc2luZyBhIHNpbmdsZSBrZXkgYW5kIHZhbHVlOlxyXG4gKlxyXG4gKiAgICAgYWRkX3F1ZXJ5X2FyZyggJ2tleScsICd2YWx1ZScsICdodHRwOi8vZXhhbXBsZS5jb20nICk7XHJcbiAqXHJcbiAqIFVzaW5nIGFuIGFzc29jaWF0aXZlIGFycmF5OlxyXG4gKlxyXG4gKiAgICAgYWRkX3F1ZXJ5X2FyZyggYXJyYXkoXHJcbiAqICAgICAgICAgJ2tleTEnID0+ICd2YWx1ZTEnLFxyXG4gKiAgICAgICAgICdrZXkyJyA9PiAndmFsdWUyJyxcclxuICogICAgICksICdodHRwOi8vZXhhbXBsZS5jb20nICk7XHJcbiAqXHJcbiAqIE9taXR0aW5nIHRoZSBVUkwgZnJvbSBlaXRoZXIgdXNlIHJlc3VsdHMgaW4gdGhlIGN1cnJlbnQgVVJMIGJlaW5nIHVzZWRcclxuICogKHRoZSB2YWx1ZSBvZiBgd2luZG93LmxvY2F0aW9uLmhyZWZgKS5cclxuICpcclxuICogVmFsdWVzIGFyZSBleHBlY3RlZCB0byBiZSBlbmNvZGVkIGFwcHJvcHJpYXRlbHkgd2l0aCB1cmxlbmNvZGUoKSBvciByYXd1cmxlbmNvZGUoKS5cclxuICpcclxuICogU2V0dGluZyBhbnkgcXVlcnkgdmFyaWFibGUncyB2YWx1ZSB0byBib29sZWFuIGZhbHNlIHJlbW92ZXMgdGhlIGtleSAoc2VlIHJlbW92ZV9xdWVyeV9hcmcoKSkuXHJcbiAqXHJcbiAqIEltcG9ydGFudDogVGhlIHJldHVybiB2YWx1ZSBvZiBhZGRfcXVlcnlfYXJnKCkgaXMgbm90IGVzY2FwZWQgYnkgZGVmYXVsdC4gT3V0cHV0IHNob3VsZCBiZVxyXG4gKiBsYXRlLWVzY2FwZWQgd2l0aCBlc2NfdXJsKCkgb3Igc2ltaWxhciB0byBoZWxwIHByZXZlbnQgdnVsbmVyYWJpbGl0eSB0byBjcm9zcy1zaXRlIHNjcmlwdGluZ1xyXG4gKiAoWFNTKSBhdHRhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ga2V5XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcGFyYW0gdXJsXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRfcXVlcnlfYXJnKCBrZXkgPSBudWxsLCB2YWx1ZSA9IG51bGwsIHVybCA9IG51bGwgKSB7XHJcblx0aWYoIHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIG51bGwgPT09IHZhbHVlICkge1xyXG5cdFx0dXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0fSBlbHNlIGlmKCB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiBudWxsICE9PSB2YWx1ZSApIHtcclxuXHRcdHVybCAgID0gdmFsdWU7XHJcblx0XHR2YWx1ZSA9IG51bGw7XHJcblx0fSBlbHNlIGlmKCBudWxsID09PSB1cmwgKSB7XHJcblx0XHR1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWxzZSA9PT0gdXJsIHx8ICcnID09PSB1cmwgfHwgdW5kZWZpbmVkID09PSB1cmwgKSB7XHJcblx0XHR1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9XHJcblxyXG5cdGxldCAkcGFyc2VkICAgPSBwYXJzZV91cmwoIHVybCApLFxyXG5cdFx0JHF1ZXJ5ICAgID0ge30sXHJcblx0XHQkZnJhZ21lbnQgPSAoICRwYXJzZWQuZnJhZ21lbnQgKSA/ICcjJyArICRwYXJzZWQuZnJhZ21lbnQgOiAnJztcclxuXHJcblx0aWYoIHR5cGVvZiAkcGFyc2VkLnF1ZXJ5ICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdHBhcnNlX3N0ciggJHBhcnNlZC5xdWVyeSwgJHF1ZXJ5ICk7XHJcblx0fVxyXG5cclxuXHRpZiggdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHRmb3IoIGxldCBrIGluIGtleSApIHtcclxuXHRcdFx0aWYoIGtleVsgayBdICkge1xyXG5cdFx0XHRcdCRxdWVyeVsgayBdID0ga2V5WyBrIF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0JHF1ZXJ5WyBrZXkgXSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0bGV0IHNwbGl0X3VybCA9IG51bGwsXHJcblx0XHRiYXNlX3VybCAgPSB1cmw7XHJcblx0aWYoIGZhbHNlICE9PSBzdHJwb3MoIHVybCwgJz8nICkgKSB7XHJcblx0XHRzcGxpdF91cmwgPSB1cmwuc3BsaXQoICc/JyApO1xyXG5cdFx0YmFzZV91cmwgID0gc3BsaXRfdXJsWyAwIF0gfHwgdXJsO1xyXG5cdH0gZWxzZSBpZiggZmFsc2UgIT09IHN0cnBvcyggdXJsLCAnIycgKSApIHtcclxuXHRcdHNwbGl0X3VybCA9IHVybC5zcGxpdCggJyMnICk7XHJcblx0XHRiYXNlX3VybCAgPSBzcGxpdF91cmxbIDAgXSB8fCB1cmw7XHJcblx0fVxyXG5cclxuXHRmb3IoIGxldCBrIGluICRxdWVyeSApIHtcclxuXHRcdGlmKCBmYWxzZSA9PT0gJHF1ZXJ5WyBrIF0gKSB7XHJcblx0XHRcdGRlbGV0ZSAkcXVlcnlbIGsgXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCRxdWVyeSA9IGh0dHBfYnVpbGRfcXVlcnkoICRxdWVyeSwgbnVsbCwgJyYnICk7XHJcblx0JHF1ZXJ5ID0gKCAkcXVlcnkgIT09ICcnICkgPyAnPycgKyAkcXVlcnkgOiAkcXVlcnk7XHJcblx0cmV0dXJuIGJhc2VfdXJsICsgJHF1ZXJ5ICsgJGZyYWdtZW50O1xyXG59IiwiaW1wb3J0IGFkZF9xdWVyeV9hcmcgZnJvbSAnLi9hZGRfcXVlcnlfYXJnJztcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGFuIGl0ZW0gb3IgaXRlbXMgZnJvbSBhIHF1ZXJ5IHN0cmluZy5cclxuICogQHBhcmFtIGtleVxyXG4gKiBAcGFyYW0gdXJsXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlX3F1ZXJ5X2FyZygga2V5ID0gbnVsbCwgdXJsID0gbnVsbCApIHtcclxuXHRpZiggdHlwZW9mIGtleSAhPT0gJ29iamVjdCcgKSB7XHJcblx0XHRrZXkgPSBbIGtleSBdO1xyXG5cdH1cclxuXHJcblx0Zm9yKCBsZXQgaSBpbiBrZXkgKSB7XHJcblx0XHRpZigga2V5WyBpIF0gKSB7XHJcblx0XHRcdHVybCA9IGFkZF9xdWVyeV9hcmcoIGtleVsgaSBdLCBmYWxzZSwgdXJsICk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB1cmw7XHJcbn1cclxuIiwiaW1wb3J0IHVudHJhaWxpbmdzbGFzaGl0IGZyb20gJy4vdW50cmFpbGluZ3NsYXNoaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oICRzdHJpbmcgKSB7XHJcblx0cmV0dXJuIHVudHJhaWxpbmdzbGFzaGl0KCAkc3RyaW5nICkgKyAnL1xcXFwnO1xyXG59IiwiaW1wb3J0IHJ0cmltIGZyb20gJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0nO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdHJhaWxpbmcgZm9yd2FyZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpZiB0aGV5IGV4aXN0LlxyXG4gKlxyXG4gKiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBpcyBmb3IgcGF0aHMgYW5kIHRodXMgc2hvdWxkIGJlIHVzZWQgZm9yIHBhdGhzLiBJdCBpc1xyXG4gKiBub3QgcmVzdHJpY3RlZCB0byBwYXRocyBhbmQgb2ZmZXJzIG5vIHNwZWNpZmljIHBhdGggc3VwcG9ydC5cclxuICogQHBhcmFtICRzdHJpbmdcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiggJHN0cmluZyApIHtcclxuXHRyZXR1cm4gcnRyaW0oICRzdHJpbmcsICcvXFxcXCcgKTtcclxufSIsImV4cG9ydCBjb25zdCBhZGRfcXVlcnlfYXJnID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvYWRkX3F1ZXJ5X2FyZycpLmRlZmF1bHQ7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlX3F1ZXJ5X2FyZyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3JlbW92ZV9xdWVyeV9hcmcnKS5kZWZhdWx0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWlsaW5nc2xhc2hpdCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3RyYWlsaW5nc2xhc2hpdCcpLmRlZmF1bHQ7XHJcblxyXG5leHBvcnQgY29uc3QgdW50cmFpbGluZ3NsYXNoaXQgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy91bnRyYWlsaW5nc2xhc2hpdCcpLmRlZmF1bHQ7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFwcGVuZHMgRnVuY3Rpb24gR2xvYmFsbHkuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93ICkgPT4ge1xyXG5cdHdpbmRvdy5hZGRfcXVlcnlfYXJnICAgICA9IGFkZF9xdWVyeV9hcmc7XHJcblx0d2luZG93LnJlbW92ZV9xdWVyeV9hcmcgID0gcmVtb3ZlX3F1ZXJ5X2FyZztcclxuXHR3aW5kb3cudW50cmFpbGluZ3NsYXNoaXQgPSB1bnRyYWlsaW5nc2xhc2hpdDtcclxuXHR3aW5kb3cudHJhaWxpbmdzbGFzaGl0ICAgPSB0cmFpbGluZ3NsYXNoaXQ7XHJcbn0gKSggd2luZG93ICk7XHJcbiIsImltcG9ydCB7XG5cdHRvX2pxdWVyeSxcblx0Y2FsbF91c2VyX2Z1bmMsXG5cdHBhcnNlX3N0cixcblx0aXNfdXJsLFxuXHR1cmxfcGFyYW1zLFxuXHRpc19jYWxsYWJsZSxcblx0Y2FsbF91c2VyX2Z1bmNfYXJyYXksXG5cdGZ1bmN0aW9uX2V4aXN0cyxcblx0Y3JlYXRlX2Z1bmN0aW9uLFxufSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHsgcmVtb3ZlX3F1ZXJ5X2FyZyB9IGZyb20gJ3dvcmRwcmVzcy1qcy1wb3J0cyc7XG5cbi8qKlxuICogV1BPbmlvbiBDdXN0b20gQWpheCBIYW5kbGVyLlxuICovXG5leHBvcnQgY2xhc3MgV1BPbmlvbl9BamF4ZXIge1xuXHQvKipcblx0ICogQHBhcmFtICRhamF4X2FyZ3Ncblx0ICogQHBhcmFtICRhamF4X2NvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRhamF4X2FyZ3MsICRhamF4X2NvbmZpZyApIHtcblx0XHR0aGlzLmRlZmF1bHRzICAgICAgICA9IHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0dXJsOiAoIHR5cGVvZiB3aW5kb3cuYWpheHVybCAhPT0gJ3VuZGVmaW5lZCcgKSA/IHdpbmRvdy5hamF4dXJsIDogZmFsc2UsXG5cdFx0XHRkYXRhOiB7fSxcblx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0YWx3YXlzOiBmYWxzZSxcblx0XHRcdGFjdGlvbjogZmFsc2UsXG5cdFx0fTtcblx0XHR0aGlzLmRlZmF1bHRfY29uZmlncyA9IHtcblx0XHRcdHJlc3BvbnNlX2VsZW1lbnQ6IGZhbHNlLFxuXHRcdFx0YnV0dG9uOiBmYWxzZSxcblx0XHRcdGVsZW1lbnQ6IGZhbHNlLFxuXHRcdFx0c3Bpbm5lcjogJzxzcGFuIGNsYXNzPVwic3Bpbm5lclwiPjwvc3Bhbj4nLFxuXHRcdH07XG5cdFx0dGhpcy5pbnN0YW5jZSAgICAgICAgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXUE9uaW9uX0FqYXhlci5kZWZhdWx0c31cblx0XHQgKi9cblx0XHR0aGlzLmFqYXhfYXJncyA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHRoaXMuZGVmYXVsdHMsICRhamF4X2FyZ3MgKTtcblx0XHR0aGlzLmFqYXhfY29uZmlnID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggdGhpcy5kZWZhdWx0X2NvbmZpZ3MsICRhamF4X2NvbmZpZyApO1xuXHRcdHRoaXMuYWpheCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgQSBDYWxsYWJsZSBDYWxsYmFjayBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgY29kZSBkYXRhLlxuXHQgKlxuXHQgKiBAcGFyYW0gJGNvZGVcblx0ICogQHBhcmFtICRhcmdzXG5cdCAqL1xuXHRjcmVhdGVfZnVuY3Rpb24oICRjb2RlID0gZmFsc2UsICRhcmdzID0gJycgKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2luZ2xlX2NhbGxiYWNrKCBjcmVhdGVfZnVuY3Rpb24oICRhcmdzLCAkY29kZSApICk7XG5cdH1cblxuXHQvKipcblx0ICogVmFsaWRhdGVzICYgVHJpZ2dlcnMgQSBTaW5nbGUgQ2FsbGJhY2sgRnVuY3Rpb24uXG5cdCAqIEBwYXJhbSAkY2FsbGJhY2tcblx0ICovXG5cdHNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrICkge1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzRnVuY3Rpb24oICRjYWxsYmFjayApICkge1xuXHRcdFx0Y2FsbF91c2VyX2Z1bmMoICRjYWxsYmFjayApO1xuXHRcdH0gZWxzZSBpZiggd2luZG93Lndwb25pb24uXy5pc1N0cmluZyggJGNhbGxiYWNrICkgJiYgZmFsc2UgIT09IGZ1bmN0aW9uX2V4aXN0cyggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRjYWxsX3VzZXJfZnVuYyggJGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdHRoaXMuY3JlYXRlX2Z1bmN0aW9uKCAkY2FsbGJhY2sgKTtcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRjYWxsYmFjayApICkge1xuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkY2FsbGJhY2sgKSB7XG5cdFx0XHRcdGlmKCAkY2FsbGJhY2suaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrWyAka2V5IF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEFuIEFycmF5IG9mIENhbGxhYmxlIEFqYXggRnVuY3Rpb25zLlxuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGhhbmRsZV9jYWxsYmFja3MoIGRhdGEgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoIGRhdGEgKSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggZGF0YS5jYWxsYmFjayApICkge1xuXHRcdFx0XHRsZXQgJGNhbGxiYWNrcyA9IGRhdGEuY2FsbGJhY2s7XG5cblx0XHRcdFx0aWYoIGZhbHNlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkY2FsbGJhY2tzICkgKSB7XG5cdFx0XHRcdFx0dGhpcy5zaW5nbGVfY2FsbGJhY2soICRjYWxsYmFja3MgKTtcblx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGNhbGxiYWNrcyApICkge1xuXHRcdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGNhbGxiYWNrcyApIHtcblx0XHRcdFx0XHRcdGlmKCAkY2FsbGJhY2tzLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tzWyAka2V5IF0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIGRhdGEuY2FsbGJhY2s7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJlZCBPbiBBamF4IG9uU3VjY2Vzc1xuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0b25TdWNjZXNzKCBkYXRhICkge1xuXHRcdHRoaXMuaGFuZGxlX2NhbGxiYWNrcyggZGF0YSApO1xuXG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmFqYXhfYXJncy5zdWNjZXNzICkge1xuXHRcdFx0aWYoIGlzX2NhbGxhYmxlKCB0aGlzLmFqYXhfYXJncy5zdWNjZXNzICkgKSB7XG5cdFx0XHRcdGNhbGxfdXNlcl9mdW5jX2FycmF5KCB0aGlzLmFqYXhfYXJncy5zdWNjZXNzLCBbIGRhdGEgXSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyZWQgT24gQWpheCBvbkVycm9yXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRvbkVycm9yKCBkYXRhICkge1xuXHRcdHRoaXMuaGFuZGxlX2NhbGxiYWNrcyggZGF0YSApO1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5hamF4X2FyZ3MuZXJyb3IgKSB7XG5cdFx0XHRpZiggaXNfY2FsbGFibGUoIHRoaXMuYWpheF9hcmdzLmVycm9yICkgKSB7XG5cdFx0XHRcdGNhbGxfdXNlcl9mdW5jX2FycmF5KCB0aGlzLmFqYXhfYXJncy5lcnJvciwgWyBkYXRhIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcmVkIE9uIEFqYXggb25BbHdheXNcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdG9uQWx3YXlzKCBkYXRhICkge1xuXHRcdHRoaXMuYnV0dG9uX3VubG9jaygpO1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5hamF4X2FyZ3MuYWx3YXlzICkge1xuXHRcdFx0aWYoIGlzX2NhbGxhYmxlKCB0aGlzLmFqYXhfYXJncy5hbHdheXMgKSApIHtcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLmFsd2F5cywgWyBkYXRhIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcnMgQW4gQWpheCBSZXF1ZXN0LiBCYXNlZCBPbiBUaGUgQ29uZmlnLlxuXHQgKi9cblx0YWpheCgpIHtcblx0XHR0aGlzLmJ1dHRvbl9sb2NrKCk7XG5cdFx0bGV0ICRjb25maWcgPSB3aW5kb3cud3Bvbmlvbi5fLmNsb25lKCB0aGlzLmFqYXhfYXJncyApO1xuXHRcdGlmKCBmYWxzZSAhPT0gJGNvbmZpZy51cmwgKSB7XG5cdFx0XHRpZiggZmFsc2UgIT09IGlzX3VybCggJGNvbmZpZy51cmwgKSApIHtcblx0XHRcdFx0bGV0ICR1cmxfcGFyYW1zID0gdXJsX3BhcmFtcyggJGNvbmZpZy51cmwgKTtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkdXJsX3BhcmFtcyApIHtcblx0XHRcdFx0XHRpZiggJHVybF9wYXJhbXMuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdCRjb25maWcudXJsID0gcmVtb3ZlX3F1ZXJ5X2FyZyggJGtleSwgJGNvbmZpZy51cmwgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0JGNvbmZpZy5kYXRhID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJGNvbmZpZy5kYXRhLCAkdXJsX3BhcmFtcyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0ICR1cmxfcGFyYW1zID0ge307XG5cdFx0XHRcdHBhcnNlX3N0ciggJGNvbmZpZy51cmwsICR1cmxfcGFyYW1zICk7XG5cdFx0XHRcdCRjb25maWcudXJsICA9IHdpbmRvdy5hamF4dXJsO1xuXHRcdFx0XHQkY29uZmlnLmRhdGEgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkY29uZmlnLmRhdGEsICR1cmxfcGFyYW1zICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRjb25maWcudXJsID0gd2luZG93LmFqYXh1cmw7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHNlICE9PSAkY29uZmlnLmFjdGlvbiApIHtcblx0XHRcdCRjb25maWcuZGF0YS5hY3Rpb24gPSAkY29uZmlnLmFjdGlvbjtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLmFjdGlvbjtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mICRjb25maWcuc3VjY2VzcyAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRkZWxldGUgJGNvbmZpZy5zdWNjZXNzO1xuXHRcdH1cblx0XHRpZiggdHlwZW9mICRjb25maWcuYWx3YXlzICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLmFsd2F5cztcblx0XHR9XG5cdFx0aWYoIHR5cGVvZiAkY29uZmlnLmVycm9yICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLmVycm9yO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5zdGFuY2UgPSB3aW5kb3cud3AuYWpheC5zZW5kKCAkY29uZmlnICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5kb25lKCAoIGRhdGEgKSA9PiB0aGlzLm9uU3VjY2VzcyggZGF0YSApICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5mYWlsKCAoIGRhdGEgKSA9PiB0aGlzLm9uRXJyb3IoIGRhdGEgKSApO1xuXHRcdHRoaXMuaW5zdGFuY2UuYWx3YXlzKCAoIGRhdGEgKSA9PiB0aGlzLm9uQWx3YXlzKCBkYXRhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgQSBDb25maWcgRGF0YSBFeHNpdHMgQmFzZWQgb24gVGhlIEdpdmVuIEtleS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNfY29uZmlnKCAka2V5ID0gJycgKSB7XG5cdFx0cmV0dXJuICggdHlwZW9mIHRoaXMuYWpheF9jb25maWdbICRrZXkgXSAhPT0gJ3VuZGVmaW5lZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIFRoZSBDb25maWcgRGF0YSBCYXNlZCBvbiBUaGUgQ29uZmlnIEtleS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0Y29uZmlnKCAka2V5ID0gJycsICRkZWZhdWx0ID0gZmFsc2UgKSB7XG5cdFx0cmV0dXJuICggdGhpcy5oYXNfY29uZmlnKCAka2V5ICkgKSA/IHRoaXMuYWpheF9jb25maWdbICRrZXkgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIExvY2tzIEEgR2l2ZW4gQnV0dG9uIEVsZW1lbnQuXG5cdCAqL1xuXHRidXR0b25fbG9jaygpIHtcblx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICkge1xuXHRcdFx0bGV0ICRidXR0b24gPSB0b19qcXVlcnkoIHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICk7XG5cdFx0XHRpZiggJGJ1dHRvbiApIHtcblx0XHRcdFx0JGJ1dHRvbi53cG9fYnV0dG9uKCAncHJvY2Vzc2luZycgKTtcblx0XHRcdFx0JGJ1dHRvbi5hdHRyKCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnICk7XG5cblx0XHRcdFx0aWYoIHRoaXMuY29uZmlnKCAnc3Bpbm5lcicgKSApIHtcblx0XHRcdFx0XHRsZXQgJHNwaW5uZXIgPSBqUXVlcnkoIHRoaXMuY29uZmlnKCAnc3Bpbm5lcicgKSApO1xuXHRcdFx0XHRcdCRzcGlubmVyLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdFx0XHRcdCRidXR0b24ucGFyZW50KCkuYXBwZW5kKCAkc3Bpbm5lciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVubG9ja3MgQSBHaXZlbiBCdXR0b24gRWxlbWVudC5cblx0ICovXG5cdGJ1dHRvbl91bmxvY2soKSB7XG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZyggJ2J1dHRvbicgKSApIHtcblx0XHRcdGxldCAkYnV0dG9uID0gdG9fanF1ZXJ5KCB0aGlzLmNvbmZpZyggJ2J1dHRvbicgKSApO1xuXHRcdFx0aWYoICRidXR0b24gKSB7XG5cdFx0XHRcdCRidXR0b24ud3BvX2J1dHRvbiggJ2NvbXBsZXRlJyApO1xuXHRcdFx0XHQkYnV0dG9uLnJlbW92ZUF0dHIoICdkaXNhYmxlZCcgKTtcblx0XHRcdFx0bGV0ICRzcGlubmVyID0gJGJ1dHRvbi5uZXh0KCk7XG5cdFx0XHRcdGlmKCAkc3Bpbm5lci5oYXNDbGFzcyggJ3NwaW5uZXInICkgKSB7XG5cdFx0XHRcdFx0JHNwaW5uZXIucmVtb3ZlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGJ1dHRvbi5wYXJlbnQoKS5maW5kKCAnLnNwaW5uZXInICkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoICQsIGRvY3VtZW50ICkgPT4ge1xuXHQkKCAoKSA9PiB7XG5cdFx0bGV0ICRjbGFzcyA9ICdbZGF0YS13cG9uaW9uLWlubGluZS1hamF4XSwgLndwb25pb24tYWpheCwgLndwb25pb24tYWpheC1nZXQsIC53cG9uaW9uLWFqYXgtcG9zdCwgLndwb25pb24taW5saW5lLWFqYXgsIC53cG9uaW9uLWlubGluZS1hamF4LWdldCwgLndwb25pb24taW5saW5lLWFqYXgtcG9zdCc7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJGNsYXNzLCAoIGUgKSA9PiB7XG5cblx0XHRcdGxldCAkZWxlbSAgICAgICAgICAgID0gJCggZS5jdXJyZW50VGFyZ2V0ICksXG5cdFx0XHRcdCRfZGF0YSAgICAgICAgICAgPSAkZWxlbS5kYXRhKCksXG5cdFx0XHRcdCRfY2xhc3NfaW5zdGFuY2UgPSBudWxsLFxuXHRcdFx0XHQkYXJncyAgICAgICAgICAgID0ge1xuXHRcdFx0XHRcdHVybDogZmFsc2UsXG5cdFx0XHRcdH07XG5cblx0XHRcdGlmKCAkZWxlbS5hdHRyKCAnZGF0YS13cG9uaW9uLWlubGluZS1hamF4JyApICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0bGV0ICRmaWQxICA9ICRlbGVtLmF0dHIoICdkYXRhLXdwb25pb24taW5saW5lLWFqYXgnICk7XG5cdFx0XHRcdGxldCAkZmlkMiAgPSAkZWxlbS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdGxldCAkanNfaWQgPSAkd3Bvbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdFx0XHRsZXQgJGFyZ3MgID0ge307XG5cdFx0XHRcdGlmKCAkanNfaWQgKSB7XG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGpzX2lkLCBmYWxzZSApO1xuXHRcdFx0XHRcdGlmKCAkX2FyZ3MuaGFzT3duUHJvcGVydHkoICdpbmxpbmVfYWpheCcgKSAmJiBmYWxzZSAhPT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJF9hcmdzLmlubGluZV9hamF4ICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgIT09ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDEsIGZhbHNlICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDEsIGZhbHNlICk7XG5cdFx0XHRcdFx0aWYoICRfYXJncy5oYXNPd25Qcm9wZXJ0eSggJ2lubGluZV9hamF4JyApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkX2FyZ3MuaW5saW5lX2FqYXggKSApIHtcblx0XHRcdFx0XHRcdCRhcmdzID0gJF9hcmdzLmlubGluZV9hamF4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMiwgZmFsc2UgKSApIHtcblx0XHRcdFx0XHRsZXQgJF9hcmdzID0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMiwgZmFsc2UgKTtcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xuXHRcdFx0XHRcdFx0JGFyZ3MgPSAkX2FyZ3MuaW5saW5lX2FqYXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgtZ2V0JyApIHx8ICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1pbmxpbmUtYWpheC1nZXQnICkgKSB7XG5cdFx0XHRcdFx0JGFyZ3MubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgtcG9zdCcgKSB8fCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24taW5saW5lLWFqYXgtcG9zdCcgKSApIHtcblx0XHRcdFx0XHQkYXJncy5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgnICkgfHwgJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWlubGluZS1hamF4JyApICYmIHR5cGVvZiAkX2RhdGEubWV0aG9kICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy5tZXRob2QgPSAkX2RhdGEubWV0aG9kO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHR5cGVvZiAkX2RhdGEudXJsICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy51cmwgPSAkX2RhdGEudXJsO1xuXHRcdFx0XHR9IGVsc2UgaWYoIHR5cGVvZiAkX2RhdGEuaHJlZiAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJF9kYXRhLmhyZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uYXR0ciggJ2hyZWYnICkgKSB7XG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJGVsZW0uYXR0ciggJ2hyZWYnICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdHlwZW9mICRfZGF0YVsgJ2FqYXgtZGF0YScgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MuZGF0YSA9ICRfZGF0YVsgJ2FqYXgtZGF0YScgXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB0eXBlb2YgJF9kYXRhLmFjdGlvbiAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGFyZ3MuYWN0aW9uID0gJF9kYXRhLmFjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQkX2NsYXNzX2luc3RhbmNlID0gbmV3IFdQT25pb25fQWpheGVyKCAkYXJncywge1xuXHRcdFx0XHRidXR0b246ICRlbGVtLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCBqUXVlcnksIGRvY3VtZW50ICk7XG4iLCIvKiBnbG9iYWwgc3dhbDp0cnVlICovXG5pbXBvcnQge1xuXHRjYWxsX3VzZXJfZnVuYyxcblx0aXNfanF1ZXJ5LFxuXHRpc193aW5kb3dfYXJnLFxuXHRtZDUsXG5cdG1pY3JvdGltZSxcblx0cmFuZF9tZDUsXG5cdHRvX2pxdWVyeSxcblx0dG9fanNfZnVuYyxcbn0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XG5cbi8qKlxuICogQmFzZSBXUG9uaW9uIEpTIENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uIHtcblx0LyoqXG5cdCAqIFZhbGlkYXRlcyAmIENvbnZlcnRzIGludG8gQ2FsbGFibGUgSlMgRnVuY3Rpb25zLlxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICogQHJldHVybnMgeyp8JGRhdGF9XG5cdCAqL1xuXHRzdGF0aWMganNfZnVuYyggJGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRvX2pzX2Z1bmMoICRkYXRhLCAnd3Bvbmlvbl9qc19hcmdzJywgJ3dwb25pb25fanNfY29udGVudHMnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGVzIEEgUmFuZG9tIElELlxuXHQgKi9cblx0c3RhdGljIHJhbmRfaWQoKSB7XG5cdFx0cmV0dXJuIG1kNSggJ3dwb25pb25fcmFuZF8nICsgbWljcm90aW1lKCkgKyByYW5kX21kNSgpICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIEpTT04uXG5cdCAqIEBwYXJhbSBvYmpcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgdmFsaWRfanNvbiggb2JqICkge1xuXHRcdHRyeSB7XG5cdFx0XHRKU09OLnBhcnNlKCBvYmogKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZElEKCAkZWxlbSApIHtcblx0XHRyZXR1cm4gdG9fanF1ZXJ5KCAkZWxlbSApLmF0dHIoICdkYXRhLXdwb25pb24tanNpZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIEZpZWxkIEhUTUwgT2JqZWN0IFVzaW5nIEZpZWxkIElELlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICR3aGVyZV90b19maW5kXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHN0YXRpYyBJRHRvRWxlbWVudCggJGVsZW0sICR3aGVyZV90b19maW5kID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRpZCA9IFdQT25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRpZiggZmFsc2UgIT09ICR3aGVyZV90b19maW5kICYmIGlzX2pxdWVyeSggJHdoZXJlX3RvX2ZpbmQgKSApIHtcblx0XHRcdHJldHVybiAkd2hlcmVfdG9fZmluZC5maW5kKCAnLndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkaWQgKyAnXCInICk7XG5cdFx0fVxuXHRcdHJldHVybiBqUXVlcnkoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIl0nICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGdpdmVuIHZhbHVlIGlzIGFuIGpRdWVyeSBpbnN0YW5jZS5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGlzRmllbGQoICRlbGVtICkge1xuXHRcdHJldHVybiAoIGlzX2pxdWVyeSggJGVsZW0gKSApID8gKCB0aGlzLmZpZWxkSUQoICRlbGVtICkgKSA6IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgV2luZG93IEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyB3aW5kb3dBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdHJldHVybiAoIGlzX3dpbmRvd19hcmcoICR2YXJfaWQgKSApID8gd2luZG93WyAkdmFyX2lkIF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgJiBSZXR1cm5zIEZpZWxkIEFyZ3MuXG5cdCAqIEBwYXJhbSAkdmFyX2lkXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBmaWVsZEFyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0JHZhcl9pZCA9ICggdGhpcy5pc0ZpZWxkKCAkdmFyX2lkICkgKSA/IHRoaXMuZmllbGRJRCggJHZhcl9pZCApIDogJHZhcl9pZDtcblx0XHRyZXR1cm4gKCAkdmFyX2lkICkgPyB3aW5kb3cud3Bvbmlvbi5fLmNsb25lKCB0aGlzLndpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ICkgKSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoY2VrcyBhbmQgcmV0dXJucyBnbG9iYWwgdHJhbnNsYXRpb24gc3RyaW5nLlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyB0eHQoICRrZXksICRkZWZhdWx0ID0gJ3N0cmluZ19kZWZhdWx0X25vdF9mb3VuZCcgKSB7XG5cdFx0cmV0dXJuICggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIFdQT25pb24udGV4dFsgJGtleSBdICkgKSA/IFdQT25pb24udGV4dFsgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBMb2FkaW5nIFNjcmVlbi5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkaXNfc2hvd1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBsb2FkaW5nX3NjcmVlbiggJGVsZW0sICRpc19zaG93ID0gdHJ1ZSApIHtcblx0XHQkZWxlbSA9IHRvX2pxdWVyeSggJGVsZW0gKS5maW5kKCAnLnBhZ2UtbG9hZGVyJyApO1xuXHRcdGlmKCB0cnVlID09PSAkaXNfc2hvdyApIHtcblx0XHRcdHJldHVybiAkZWxlbS5mYWRlSW4oICdzbG93JyApO1xuXHRcdH1cblx0XHRyZXR1cm4gJGVsZW0uZmFkZU91dCggJ3Nsb3cnICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBHbG9iYWwgRGVidWcgVmlldyBQT1BVUC5cblx0ICovXG5cdHN0YXRpYyBnbG9iYWxfZGVidWcoKSB7XG5cdFx0bGV0ICRoYW5kbGUgPSBqUXVlcnkoICdhLndwb25pb24tZ2xvYmFsLWRlYnVnLWhhbmRsZScgKSxcblx0XHRcdCRqc29uICAgPSB7fTtcblx0XHRpZiggV1BPbmlvbi5kZWJ1Z19pbmZvID09PSBudWxsICYmICRoYW5kbGUubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkZGVmaW5lZF92YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICk7XG5cdFx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGRlZmluZWRfdmFycyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICRkZWZpbmVkX3ZhcnMgKSB7XG5cdFx0XHRcdFx0aWYoICRkZWZpbmVkX3ZhcnMuaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGRlZmluZWRfdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0XHQkanNvblsgJGRlZmluZWRfdmFyc1sgJGtleSBdIF0gPSBXUE9uaW9uLndpbmRvd0FyZ3MoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRXUE9uaW9uLmRlYnVnX2luZm8gPSAkanNvbjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkaGFuZGxlLm9uKCAnY2xpY2snLCAoICggZSApID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHN3YWwoIHtcblx0XHRcdFx0dGl0bGU6IFdQT25pb24udHh0KCAnZ2xvYmFsX2pzb25fb3V0cHV0JywgJ0dsb2JhbCBXUE9uaW9uIERlYnVnIERhdGEnICksXG5cdFx0XHRcdGh0bWw6IGpRdWVyeSggJyN3cG9uaW9uZGVidWdpbmZvcG9wdXAgPiBkaXYnICksXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogV1BPbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnR2V0IEpTT04gT3V0cHV0JyApLFxuXHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHR3aWR0aDogJzgwMHB4Jyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoKSA9PiBzd2FsLmVuYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0b25PcGVuOiAoKSA9PiB7XG5cdFx0XHRcdFx0alF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgI3dwb25pb24tZ2xvYmFsLWRlYnVnLWNvbnRlbnQnICkuanNvblZpZXcoIFdQT25pb24uZGVidWdfaW5mbyApO1xuXHRcdFx0XHRcdHN3YWwuZGlzYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0gKS50aGVuKCAoIHJlc3VsdCApID0+IHtcblx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gc3dhbCgge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRodG1sOiAnPHRleHRhcmVhIHN0eWxlPVwibWluLXdpZHRoOjU1MHB4OyBtaW4taGVpZ2h0OjMwMHB4XCI+JyArIEpTT04uc3RyaW5naWZ5KCBXUE9uaW9uLmRlYnVnX2luZm8gKSArICc8L3RleHRhcmVhPicsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGFuZCBSZXRyaXZlcyBWYWx1ZXMgZnJvbSAkd3Bvbmlvbi5zZXR0aW5nc1xuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgb3B0aW9uKCAka2V5LCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IFdQT25pb24uc2V0dGluZ3NfYXJncztcblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApIHtcblx0XHRcdHJldHVybiAkYXJnc1sgJGtleSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0cnVlIGlmIFdQT25pb24gRGVidWcgaXMgZW5hYmxlZC5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNfZGVidWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnZGVidWcnICk7XG5cdH1cblxuXHQvKipcblx0ICogR2F0aGVyIEFsbCBGaWVsZCBKUyBDb2Rlcy5cblx0ICovXG5cdHN0YXRpYyBmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggV1BPbmlvbi5pc19kZWJ1ZygpICYmIHdpbmRvdy53cG9uaW9uLl8uaXNOdWxsKCBXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gKSApIHtcblx0XHRcdGxldCAkdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApLFxuXHRcdFx0XHQkanNvbiA9IHt9LFxuXHRcdFx0XHQkdXR4dCA9IFdQT25pb24udHh0KCAndW5tb2RpZmllZF9kZWJ1ZycgKSxcblx0XHRcdFx0JG10eHQgPSBXUE9uaW9uLnR4dCggJ21vZGlmaWVkX2RlYnVnJyApO1xuXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICR2YXJzICkge1xuXHRcdFx0XHRpZiggJHZhcnMuaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHZhcnNbICRrZXkgXSApICkge1xuXHRcdFx0XHRcdGxldCAkZGF0YSAgICAgICAgICAgICAgICAgICAgICAgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICR2YXJzWyAka2V5IF0gKTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdICAgICAgICAgID0ge307XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJHV0eHQgXSA9ICRkYXRhLmRlYnVnX2luZm8gfHwgJGRhdGE7XG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJG10eHQgXSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRXUE9uaW9uLmZpZWxkX2RlYnVnX2luZm8gPSAkanNvbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3VzdG9tIEFqYXggV3JhcHBlciBGb3IgalF1ZXJ5LkFqYXgoKVxuXHQgKiBAcGFyYW0gJGFjdGlvblxuXHQgKiBAcGFyYW0gJGRhdGFcblx0ICogQHBhcmFtICRvblN1Y2Nlc3Ncblx0ICogQHBhcmFtICRvbkVycm9yXG5cdCAqIEBwYXJhbSAkb25BbHdheXNcblx0ICovXG5cdHN0YXRpYyBhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30sICRvblN1Y2Nlc3MgPSBmYWxzZSwgJG9uRXJyb3IgPSBmYWxzZSwgJG9uQWx3YXlzID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRkZWZhdWx0cyA9IHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0dXJsOiBXUE9uaW9uLm9wdGlvbiggJ2FqYXhfdXJsJyApLFxuXHRcdFx0b25TdWNjZXNzOiBmYWxzZSxcblx0XHRcdG9uQWx3YXlzOiBmYWxzZSxcblx0XHRcdG9uRXJyb3I6IGZhbHNlLFxuXHRcdH07XG5cblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGFjdGlvbiApICkge1xuXHRcdFx0JGRhdGEgPSAkYWN0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZGVmYXVsdHMudXJsICs9ICcmJyArIFdQT25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApICsgJz0nICsgJGFjdGlvbjtcblx0XHR9XG5cblx0XHQkZGVmYXVsdHMgID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJGRlZmF1bHRzLCAkZGF0YSApO1xuXHRcdCRvblN1Y2Nlc3MgPSAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRvblN1Y2Nlc3MgKSB8fCBmYWxzZSA9PT0gJG9uU3VjY2VzcyApID8gJGRlZmF1bHRzLm9uU3VjY2VzcyA6ICRvblN1Y2Nlc3M7XG5cdFx0JG9uQWx3YXlzICA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG9uRXJyb3IgKSB8fCBmYWxzZSA9PT0gJG9uRXJyb3IgKSA/ICRkZWZhdWx0cy5vbkFsd2F5cyA6ICRvbkFsd2F5cztcblx0XHQkb25FcnJvciAgID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkb25BbHdheXMgKSB8fCBmYWxzZSA9PT0gJG9uQWx3YXlzICkgPyAkZGVmYXVsdHMub25FcnJvciA6ICRvbkVycm9yO1xuXHRcdGxldCAkYWpheCAgPSBqUXVlcnkuYWpheCggJGRlZmF1bHRzICk7XG5cblxuXHRcdGlmKCAkb25TdWNjZXNzICkge1xuXHRcdFx0JGFqYXguZG9uZSggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uU3VjY2VzcywgcmVzICkgKTtcblx0XHR9XG5cblx0XHRpZiggJG9uRXJyb3IgKSB7XG5cdFx0XHQkYWpheC5mYWlsKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25FcnJvciwgcmVzICkgKTtcblx0XHR9XG5cblx0XHRpZiggJG9uQWx3YXlzICkge1xuXHRcdFx0JGFqYXguYWx3YXlzKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25BbHdheXMsIHJlcyApICk7XG5cdFx0fVxuXHRcdHJldHVybiAkYWpheDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFdQT25pb24gVGVtcGxhdGUgZm9yIHVuZGVyc2NvcmUuXG5cdCAqIEBwYXJhbSAkaWRcblx0ICogQHJldHVybnMge2Z1bmN0aW9uKCo9KTogKn1cblx0ICovXG5cdHN0YXRpYyB0ZW1wbGF0ZSggJGlkICkge1xuXHRcdGxldCBjb21waWxlZCxcblx0XHRcdG9wdGlvbnMgPSB7XG5cdFx0XHRcdGV2YWx1YXRlOiAvPCMoW1xcc1xcU10rPykjPi9nLFxuXHRcdFx0XHRpbnRlcnBvbGF0ZTogL1xce1xce1xceyhbXFxzXFxTXSs/KVxcfVxcfVxcfS9nLFxuXHRcdFx0XHRlc2NhcGU6IC9cXHtcXHsoW15cXH1dKz8pXFx9XFx9KD8hXFx9KS9nLFxuXHRcdFx0XHR2YXJpYWJsZTogJ2RhdGEnXG5cdFx0XHR9O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhICkge1xuXHRcdFx0Y29tcGlsZWQgPSBjb21waWxlZCB8fCB3aW5kb3cud3Bvbmlvbi5fLnRlbXBsYXRlKCAkaWQsIG9wdGlvbnMgKTtcblx0XHRcdHJldHVybiBjb21waWxlZCggZGF0YSApO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBXUG9uaW9uIFNldHRpbmdzIC8gTWV0YWJveCBTdWJtZW51IEluZGljYXRvci5cblx0ICogQHBhcmFtICRlbGVtc1xuXHQgKi9cblx0c3RhdGljIHN1Ym1lbnVfaW5kaWNhdG9yKCAkZWxlbXMgKSB7XG5cdFx0JGVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJHRvZ2dsZSAgID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdkYXRhLXRvZ2dsZS1jbGFzcycgKTtcblx0XHRcdFx0bGV0ICRleF9jbGFzcyA9IGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnY2xhc3MnICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnY2xhc3MnLCAkdG9nZ2xlICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnZGF0YS10b2dnbGUtY2xhc3MnLCAkZXhfY2xhc3MgKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cbn1cbiIsIi8qKlxuICogV1BPbmlvbiBEZWJ1ZyBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHQvKipcblx0ICogQWRkIEEgRGVidWcgSW5mbyBUbyBEZWJ1ZyBBcnJheS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICR2YWx1ZVxuXHQgKi9cblx0c3RhdGljIGFkZCggJGtleSwgJHZhbHVlICkge1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm8gKSApIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xuXHRcdH1cblxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSAkdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVidWdfaW5mb1sgJGtleSBdID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJHZhbHVlLCB0aGlzLmRlYnVnX2luZm9bICRrZXkgXSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIEEgRGVidWcgSW5mbyBCYXNlZCBvbiBLZXkuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHN0YXRpYyBnZXQoICRrZXksICRkZWZhdWx0ID0gZmFsc2UgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXHRcdHJldHVybiAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSA/ICRkZWZhdWx0IDogdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF07XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vaGVscGVycy9kZXBlbmRlbmN5JztcblxuLyoqXG4gKiBXUE9uaW9uIERlcGVuZGVuY3kgQ2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRlbGVtZW50XG5cdCAqIEBwYXJhbSBwYXJhbVxuXHQgKiBAcGFyYW0gJGNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRlbGVtZW50ID0gdW5kZWZpbmVkLCBwYXJhbSA9IHt9LCAkY29uZmlnID0ge30gKSB7XG5cdFx0dGhpcy5wYXJhbSAgICAgICAgID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggeyBuZXN0YWJsZTogZmFsc2UsIHBhcmVudDogZmFsc2UgfSwgcGFyYW0gKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuYmFzZSAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuYmFzZS4kZWwgICAgICA9ICRlbGVtZW50O1xuXHRcdHRoaXMuYmFzZS5pbml0ICAgICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS5ydWxlc2V0ID0galF1ZXJ5LmRlcHMuY3JlYXRlUnVsZXNldCgpO1xuXHRcdFx0dGhpcy5iYXNlLmRlcFJvb3QoKTtcblx0XHRcdGxldCAkX2RlcHNfZnVuY3Rpb25zID0gd2luZG93Lndwb25pb24uXy5tZXJnZSgge1xuXHRcdFx0XHRzaG93OiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdGVsLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0aGlkZTogKCBlbCApID0+IHtcblx0XHRcdFx0XHRlbC5zbGlkZVVwKCk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5hZGRDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsb2c6IGZhbHNlLFxuXHRcdFx0XHRjaGVja1RhcmdldHM6IGZhbHNlLFxuXHRcdFx0fSwgJGNvbmZpZyApO1xuXG5cdFx0XHRqUXVlcnkuZGVwcy5lbmFibGUoIHRoaXMuYmFzZS4kZWwsIHRoaXMuYmFzZS5ydWxlc2V0LCAkX2RlcHNfZnVuY3Rpb25zICk7XG5cdFx0fTtcblx0XHR0aGlzLmJhc2UuaW5zdGFuY2UgPSBbXTtcblx0XHR0aGlzLmJhc2UuZGVwUm9vdCAgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmJhc2UuJGVsLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24taGFzLWRlcGVuZGVuY3knICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHRoaXMuYmFzZS5pbnN0YW5jZSA9IG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koIGpRdWVyeSggdGhpcyApLCAkdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0XHRcdG5lc3RhYmxlOiAkdGhpcy5wYXJhbS5uZXN0YWJsZSxcblx0XHRcdFx0XHRcdHBhcmVudDogKCB0cnVlID09PSAkdGhpcy5wYXJhbS5uZXN0YWJsZSApID8gJHRoaXMuYmFzZS4kZWwgOiAkdGhpcy5wYXJhbS5wYXJlbnQsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fTtcblx0XHR0aGlzLmJhc2UuaW5pdCgpO1xuXHR9XG59XG4iLCIvKiBnbG9iYWwgc3dhbDp0cnVlICovXG5cbmNvbnN0IGlzX2pxdWVyeSA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2pxdWVyeTtcblxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi9kZWJ1Zyc7XG5pbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi9tb2R1bGUnO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdGlvbiBmcm9tICcuLi9jb3JlL3ZhbGlkYXRpb24nO1xuXG4vKipcbiAqIFdQT25pb24gRmllbGQgQWJzdHJhY3QgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHQvKipcblx0ICogV1BPbmlvbiBGaWVsZCBDbGFzcyBDb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtICRzZWxlY3RvclxuXHQgKiBAcGFyYW0gJGNvbnRleHRcblx0ICogQHBhcmFtICRjb25maWdcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0ID0gbnVsbCwgJGNvbmZpZyA9IG51bGwgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQgKTtcblx0XHR0aGlzLnNldF9hcmdzKCBmYWxzZSApO1xuXHRcdHRoaXMuZmllbGRfZGVidWcoKTtcblx0XHR0aGlzLmNvbmZpZyA9ICRjb25maWc7XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5qc19lcnJvcl9oYW5kbGVyKCk7XG5cdFx0dGhpcy5qc192YWxpZGF0b3IoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiBVc2VkIFRvIEluaXQgRmllbGQuXG5cdCAqIFRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGV4dGVuZGluZyBjbGFzcy5cblx0ICovXG5cdGluaXQoKSB7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBqYXZhc2NyaXB0IGVycm9yIHBsYWNlbWVudC5cblx0ICogQHBhcmFtIGVyclxuXHQgKi9cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIEFuIFRyaWdnZXIgSG9vayBUbyBIYW5kbGUgSlMgRXJyb3IgUGxhY2VtZW50XG5cdCAqIEB1c2UgY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIGVsZW1lbnRcblx0ICovXG5cdGpzX2Vycm9yX2hhbmRsZXIoIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudC5vbiggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgJz4gLnJvdyA+IC53cG9uaW9uLWZpZWxkc2V0IDppbnB1dCcsICggZSwgZGF0YSApID0+IHRoaXMuanNfZXJyb3IoIGRhdGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB2YWxpZGF0aW9uIGlzIHJlcXVpcmVkIGZvciBjdXJyZW50IGZpZWxkLlxuXHQgKi9cblx0anNfdmFsaWRhdG9yKCkge1xuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSApIHtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICkgKSB7XG5cdFx0XHRcdHRoaXMubWF5YmVfanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgY3VycmVudCBwYWdlIGhhcyBmb3JtIGFuZCBlbmFibGUgdmFsaWRhdGlvbnMuXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XG5cdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIFJ1bGUgVG8gRWFjaCBhbmQgZXZlcnkgaW5wdXQgdG8gdmFsaWRhdGUgSlMgTGliLlxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIFdQT25pb25fVmFsaWRhdGlvbi5nZXRfZm9ybSgpICkge1xuXHRcdFx0JGVsZW0uZmluZCggJzppbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucnVsZXMoICdhZGQnLCAkYXJncyApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIHVzZWQgYnkgZWFjaCBhbmQgZXZlcnkgZmllbGQuXG5cdCAqIFRoaXMgZnVuY3Rpb24gd2lsbCBhbHNvIGNvbnZlcnQgU2ltcGxlIEpTIGZ1bmN0aW9uIGNvZGUgaW50byBjYWxsYWJsZSBKUyBjb2RlICYgcmV0dXJucyBpdFxuXHQgKiBQbHVzIGl0IGFsc28gc3RvcmUgdGhlIHZhbHVlIGluIGRlYnVnIGFycmF5IGlmIGRlYnVnIGVuYWJsZWQuXG5cdCAqIEBwYXJhbSAkYXJnXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEByZXR1cm5zIHsqfCRkYXRhfVxuXHQgKi9cblx0aGFuZGxlX2FyZ3MoICRhcmcsICRrZXkgPSBmYWxzZSApIHtcblx0XHRsZXQgJGFyZ3MgICA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmcgKSxcblx0XHRcdCRleGlzdHMgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9ICk7XG5cdFx0JGV4aXN0cyAgICAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7ICdQSFAgQXJncyc6IHt9LCAnSlMgQXJncyc6IHt9IH0sICRleGlzdHMgKTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGtleSApIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdID0gJGFyZ3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdWyAka2V5IF0gPSAkYXJncztcblx0XHR9XG5cdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksICRleGlzdHMgKTtcblx0XHRyZXR1cm4gJGFyZ3M7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBGaWVsZCBEZWJ1ZyBQT1BVUC5cblx0ICovXG5cdGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdwb25pb25fZGVidWcuZ2V0KCB0aGlzLmlkKCkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgJGluZm8gPSB0aGlzLm9wdGlvbiggJ2RlYnVnX2luZm8nICk7XG5cblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRpbmZvICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNFbXB0eSggJGluZm8gKSApIHtcblx0XHRcdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ1BIUCBBcmdzJzogJGluZm8sICdKUyBBcmdzJzoge30gfSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCAkZm91bmQgPSBmYWxzZTtcblx0XHRpZiggIXRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24tZmllbGQtZGVidWcnICkgKSB7XG5cdFx0XHRsZXQgJElEICAgPSB0aGlzLmlkKCksXG5cdFx0XHRcdCRlbGVtID0galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD0nICsgJElEICsgJ10nICk7XG5cdFx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0XHQkZm91bmQgPSAkZWxlbTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGZvdW5kID0gdGhpcy5lbGVtZW50O1xuXHRcdH1cblxuXHRcdGlmKCBmYWxzZSAhPT0gJGZvdW5kICkge1xuXHRcdFx0bGV0ICR0aGlzID0gdGhpcztcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkLXRpdGxlID4gaDQnIClcblx0XHRcdFx0ICAudGlwcHkoIHtcblx0XHRcdFx0XHQgIGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ2NsaWNrX3RvX3ZpZXdfZGVidWdfaW5mbycsICdDbGljayBUbyBWaWV3IEZpZWxkIERlYnVnIEluZm8nICksXG5cdFx0XHRcdFx0ICBhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHQgIGFycm93VHlwZTogJ3JvdW5kJyxcblx0XHRcdFx0XHQgIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdFx0ICB0aGVtZTogJ2xpZ2h0Jyxcblx0XHRcdFx0XHQgIGFuaW1hdGlvbjogJ3NjYWxlJyxcblx0XHRcdFx0XHQgIGFwcGVuZFRvOiB0aGlzLmdldF9maWVsZF9wYXJlbnRfYnlfaWQoIHRoaXMuZWxlbWVudCApWyAwIF0sXG5cdFx0XHRcdCAgfSApO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRsZXQgJGQgICAgICAgICAgPSAkdGhpcy5pZCgpICsgJ2RlYnVnSU5GTycsXG5cdFx0XHRcdFx0JG5vdGljZV90eHQgPSAnPHAgY2xhc3M9XFwnd3Bvbmlvbi1maWVsZC1kZWJ1Zy1ub3RpY2VcXCc+JyArICR3cG9uaW9uLm9wdGlvbiggJ2RlYnVnX25vdGljZScgKSArICc8L3A+Jyxcblx0XHRcdFx0XHQkZWxlbSAgICAgICA9IGpRdWVyeSggJzxkaXYgaWQ9XCInICsgJGQgKyAnXCIgY2xhc3M9XCJ3cG9uaW9uLWZpZWxkLWRlYnVnLXBvcHVwXCIgPjxkaXYgaWQ9XCInICsgJGQgKyAnXCIgPjwvZGl2PicgKyAkbm90aWNlX3R4dCArICc8L2Rpdj4nICk7XG5cdFx0XHRcdGxldCAkZGF0YSAgICAgICA9ICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApO1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0aHRtbDogJGVsZW0sXG5cdFx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6ICR3cG9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdBcyBKU09OJyApLFxuXHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0d2lkdGg6ICc4MDBweCcsXG5cdFx0XHRcdFx0b25PcGVuOiAoKSA9PiBqUXVlcnkoICcjc3dhbDItY29udGVudCA+IGRpdiA+ICMnICsgJGQgKS5qc29uVmlldyggJGRhdGEgKVxuXHRcdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIHJlc3VsdC52YWx1ZSApIHtcblx0XHRcdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXG5cdFx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoICR3cG9uaW9uX2RlYnVnLmdldCggJHRoaXMuaWQoKSApICkgKyAnPC90ZXh0YXJlYT4nXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGRzZXQgLndwb25pb24tZmllbGQtZGVidWctY29kZS1nZW4nICkub24oICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0bGV0ICRzdHJpbmcgPSB0aGlzLm9wdGlvbiggJ2RlYnVnX2ZpZWxkX2NvZGUnICk7XG5cdFx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkc3RyaW5nICkgKSB7XG5cdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0aHRtbDogJHN0cmluZyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdFx0aGVpZ2h0QXV0bzogZmFsc2UsXG5cdFx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXJzIEZpZWxkIE9wdGlvbnMgRGF0YSBmcm9tIHdpbmRvdy53cG9uaW9uIGFycmF5LlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdG9wdGlvbnMoKSB7XG5cdFx0aWYoIHRoaXMuX2FyZ3MgPT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5fYXJncyA9ICR3cG9uaW9uLndpbmRvd0FyZ3MoIHRoaXMuaWQoKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYXJncztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYSBnaXZlbiBvcHRpb24ga2V5IGV4aXN0cyBhbmQgaWYgc28gdGhlbiBpdCByZXR1cm5zIGl0IHZhbHVlXG5cdCAqIG9yIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdG9wdGlvbiggJGtleSA9ICcnLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IHRoaXMub3B0aW9ucygpO1xuXHRcdHJldHVybiAoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSA/ICRhcmdzWyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIFdQT25pb24gSlMgRmllbGQgSURcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRpZCgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCdzIE1vZHVsZSBTbHVnLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdG1vZHVsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdtb2R1bGUnLCBmYWxzZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQncyBQbHVnaW4gU2x1Zy5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRwbHVnaW5faWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAncGx1Z2luX2lkJywgZmFsc2UgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBBbiBBamF4IEFjdGlvbi5cblx0ICogQHBhcmFtICRhY3Rpb25cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqL1xuXHRhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30gKSB7XG5cdFx0bGV0ICRhamF4X2tleSAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApO1xuXHRcdGxldCAkZGVmYXVsdCAgICAgICAgICA9IHtcblx0XHRcdHBsdWdpbl9pZDogdGhpcy5wbHVnaW5faWQoKSxcblx0XHRcdG1vZHVsZTogdGhpcy5tb2R1bGUoKSxcblx0XHR9O1xuXHRcdCRkZWZhdWx0WyAkYWpheF9rZXkgXSA9ICRhY3Rpb247XG5cdFx0JGRhdGEuZGF0YSAgICAgICAgICAgID0gKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGRhdGEuZGF0YSApICkgPyB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkZGVmYXVsdCwgJGRhdGEuZGF0YSApIDogJGRlZmF1bHQ7XG5cblx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJGRhdGEgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBBIFNpbmdsZSBFbGVtZW50LlxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRpbml0X3NpbmdsZV9maWVsZCggJHR5cGUsICRlbGVtICkge1xuXHRcdHdwb25pb25faW5pdF9maWVsZCggJHR5cGUsICRlbGVtICk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdHMgQSBTaW5nbGUgRmllbGQgVHlwZVxuXHQgKiBAdXNlcyBpbml0X3NpbmdsZV9maWVsZC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKi9cblx0aW5pdF9maWVsZCggJGVsZW0sICR0eXBlICkge1xuXHRcdGlmKCAhaXNfanF1ZXJ5KCAkZWxlbSApICkge1xuXHRcdFx0JGVsZW0gPSB0aGlzLmVsZW1lbnQuZmluZCggJGVsZW0gKTtcblx0XHR9XG5cblx0XHRpZiggJGVsZW0ubGVuZ3RoID4gMCApIHtcblx0XHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHRoaXMuaW5pdF9zaW5nbGVfZmllbGQoICR0eXBlLCBqUXVlcnkoIGUgKSApICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlbG9hZHMgQWxsIEZpZWxkIFR5cGUgSW5zaWRlIFRoaXMgRmllbGQuXG5cdCAqL1xuXHRyZWxvYWQoKSB7XG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfcmVsb2FkJyApO1xuXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1hY2NvcmRpb24nLCAnYWNjb3JkaW9uJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja2dyb3VuZCcsICdiYWNrZ3JvdW5kJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwJywgJ2JhY2t1cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNoZWNrYm94JywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtcmFkaW8nLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jbG9uZScsICdjbG9uZV9lbGVtZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGFsZXR0ZScsICdjb2xvcl9wYWxldHRlJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGlja2VyJywgJ2NvbG9yX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNlbGVjdCcsICdzZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pY29uX3BpY2tlcicsICdpY29uX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJywgJ2ZvbnRfc2VsZWN0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1ncm91cCcsICdncm91cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHQ6bm90KC53cG9uaW9uLWlucHV0bWFzayknLCAndGV4dCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHRhcmVhJywgJ3RleHRhcmVhJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2Vfc2VsZWN0JywgJ2ltYWdlX3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN3aXRjaGVyJywgJ3N3aXRjaGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJywgJ3dwX2VkaXRvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZpZWxkc2V0JywgJ2ZpZWxkc2V0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfbGluaycsICd3cF9saW5rcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWtleV92YWx1ZScsICdrZXl2YWx1ZV9wYWlyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZGF0ZV9waWNrZXInLCAnZGF0ZV9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nYWxsZXJ5JywgJ2dhbGxlcnknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC11cGxvYWQnLCAndXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2UnLCAnaW1hZ2VfdXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYnV0dG9uX3NldCcsICdidXR0b25fc2V0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGFiJywgJ2pxdWVyeV90YWInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nb29nbGVfbWFwcycsICdnb29nbGVfbWFwcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNvcnRlcicsICdzb3J0ZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10eXBvZ3JhcGh5JywgJ3R5cG9ncmFwaHknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1vZW1iZWQnLCAnb2VtYmVkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaGVhZGluZycsICdoZWFkaW5nJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3ViaGVhZGluZycsICdzdWJoZWFkaW5nJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29udGVudCcsICdjb250ZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtamFtYm9fY29udGVudCcsICdqYW1ib19jb250ZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtbm90aWNlJywgJ25vdGljZScgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWZpZWxkLXRvb2x0aXAnLCAndG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1oZWxwJywgJ3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24td3JhcC10b29sdGlwJywgJ3Rvb2x0aXAnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoICdpbnB1dFtkYXRhLXdwb25pb24taW5wdXRtYXNrXScsICdpbnB1dG1hc2snICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdDInLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuY2hvc2VuJywgJ2Nob3NlbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuc2VsZWN0aXplJywgJ3NlbGVjdGl6ZScgKTtcblxuXG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBBcmdzIERhdGEuXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKi9cblx0c2V0X2FyZ3MoICRhcmdzICkge1xuXHRcdHRoaXMuX2FyZ3MgPSAkYXJncztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkIFBhcmVudCBCeSBkYXRhLXdwb25pb24tanNpZCBhdHRyaWJ1dGUuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7KnxqUXVlcnl8SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRnZXRfZmllbGRfcGFyZW50X2J5X2lkKCAkZWxlbSApIHtcblx0XHRsZXQgJElEID0gJHdwb25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRyZXR1cm4galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkSUQgKyAnXCJdJyApO1xuXHR9XG59XG4iLCIvKipcbiAqIFdQT25pb24gTW9kdWxlIEpTIENsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0LyoqXG5cdCAqIFdQT25pb24gTW9kdWxlIEpTIENsYXNzIENvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udGV4dFxuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQgPSBudWxsICkge1xuXHRcdGlmKCAhJHNlbGVjdG9yLmpRdWVyeSApIHtcblx0XHRcdCRzZWxlY3RvciA9IGpRdWVyeSggJHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0X2VsZW1lbnQoICRzZWxlY3RvciApO1xuXHRcdHRoaXMuc2V0X2NvbnR4dCggJGNvbnRleHQgKTtcblx0XHR0aGlzLm1vZHVsZV9pbml0KCk7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcnMgTW9kdWxlIEluaXQgRnVuY3Rpb24uXG5cdCAqL1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIEVsZW1lbnQgQXJncy5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRzZXRfZWxlbWVudCggJGVsZW0gKSB7XG5cdFx0aWYoICEkZWxlbS5qUXVlcnkgKSB7XG5cdFx0XHQkZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtID0gJGVsZW07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBDb250eHQgQXJncy5cblx0ICogQHBhcmFtICRjb250eHRcblx0ICovXG5cdHNldF9jb250eHQoICRjb250eHQgKSB7XG5cdFx0dGhpcy5jb250ZXh0ID0gJGNvbnR4dDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEhvb2sgQ2xhc3MuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGhvb2soKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy53cG9uaW9uLmhvb2tzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRWxlbWVudCBWYXJpYWJsZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldCBlbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBDb250eHQgVmFyaWFibGUuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGNvbnR4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0O1xuXHR9XG59XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBXUE9uaW9uIEZpZWxkIFZhbGlkYXRvciBIZWxwZXIgQ2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbl9WYWxpZGF0b3Ige1xuXHQvKipcblx0ICogSGVscGVyIENsYXNzIEZvciBXUE9uaW9uIEpTIEZpZWxkIFZhbGlkYXRpb24uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggZm9ybSA9IGZhbHNlICkge1xuXHRcdHRoaXMuZm9ybSAgPSAoIGZhbHNlID09PSBmb3JtICkgPyBXUE9uaW9uX1ZhbGlkYXRvci5nZXRfZm9ybSgpIDogZm9ybTtcblx0XHR0aGlzLnJ1bGVzID0ge1xuXHRcdFx0aW52YWxpZEhhbmRsZXI6ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnI3B1Ymxpc2gnICkucmVtb3ZlQ2xhc3MoICdidXR0b24tcHJpbWFyeS1kaXNhYmxlZCcgKTtcblx0XHRcdFx0alF1ZXJ5KCAnI2FqYXgtbG9hZGluZycgKS5hdHRyKCAnc3R5bGUnLCAnJyApO1xuXHRcdFx0XHR0aGlzLmZvcm0uc2libGluZ3MoICcjbWVzc2FnZScgKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5mb3JtLmJlZm9yZSggJzxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJlcnJvclwiPjxwPicgKyAkd3Bvbmlvbi50eHQoICd2YWxpZGF0aW9uX3N1bW1hcnknICkgKyAnPC9wPjwvZGl2PicgKTtcblx0XHRcdH0sXG5cdFx0XHRpZ25vcmU6ICcud3Bvbmlvbi1kZXBlbmRlbnQsLndwb25pb24tdmFsaWRhdGlvbi1pZ25vcmUnLFxuXHRcdFx0ZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKCBlcnJvciwgZWxlbWVudCApIHtcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCB7IGVycm9yLCBlbGVtZW50IH0gKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvckNsYXNzOiAnd3Bvbmlvbi1lcnJvcicsXG5cdFx0XHRlcnJvckVsZW1lbnQ6ICdwJ1xuXHRcdH07XG5cblx0XHRpZiggdGhpcy5mb3JtICkge1xuXHRcdFx0dGhpcy5mb3JtLnZhbGlkYXRlKCB0aGlzLnJ1bGVzICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmRzICYgUmV0dXJucyBmb3JtIERhdGEuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGdldF9mb3JtKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3VwZGF0ZS1uYXYtbWVudScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jdXBkYXRlLW5hdi1tZW51JyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QnICkubGVuZ3RoID4gMCAmJiBqUXVlcnkoICdpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjb3JpZ2luYWxfcHVibGlzaCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jcG9zdCcgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkgPyBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKSA6IGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oIHtcblx0XHRcdFx0aGVhZGVyOiAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0YW5pbWF0ZTogMTUwLFxuXHRcdFx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxuXHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdCdoZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1yaWdodCcsXG5cdFx0XHRcdFx0J2FjdGl2ZUhlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LWRvd24nXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0aWYoICFqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2lzX29wZW4nICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFjY29yZGlvbiggJ29wdGlvbicsICdhY3RpdmUnLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgRXJyb3IgUGxhY2VtZW50LlxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqL1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdhY2NvcmRpb24nLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2JhY2tncm91bmQnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXG5cbi8qIGdsb2JhbCB0aXBweTp0cnVlICovXG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy50b29sdGlwKCk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyApLm9uKCAnY2hhbmdlJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVfYmFja3VwX2ltcG9ydCggZS5jdXJyZW50VGFyZ2V0ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdhLmRvd25sb2FkX2JhY2t1cCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0bGV0ICRmaWxlID0gdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKTtcblx0XHRcdCRmaWxlICAgICA9ICRmaWxlICsgJy0nICsgdGhpcy5tb2R1bGUoKTtcblx0XHRcdGxldCBkYXRlICA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgc3RyICAgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyAoIGRhdGUuZ2V0TW9udGgoKSArIDEgKSArICctJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy0nICsgZGF0ZS5nZXRIb3VycygpICsgZGF0ZS5nZXRNaW51dGVzKCkgKyBkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdCRmaWxlICAgICA9ICRmaWxlICsgJy0nICsgc3RyO1xuXHRcdFx0dGhpcy5mb3JjZV9kb3dubG9hZCggSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX3RleHRhcmVhIHRleHRhcmVhJyApLmh0bWwoKSApLCAkZmlsZSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnYS5uZXdfYmFja3VwICcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5ibG9ja19mb3JtKCk7XG5cdFx0XHR0aGlzLmFqYXgoICduZXctbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCB0cnVlICk7XG5cdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMnICkuaHRtbCggZS5kYXRhICk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy5kZWxldGVfYmFja3VwJywgKCBlICkgPT4ge1xuXHRcdFx0dGhpcy5ibG9ja19mb3JtKCk7XG5cdFx0XHRsZXQgJGlucyA9IGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLmRlbGV0ZV9iYWNrdXAnICkudGlwcHlfZ2V0KCk7XG5cdFx0XHRpZiggJGlucy5pbnN0YW5jZXNbIDAgXSApIHtcblx0XHRcdFx0JGlucy5pbnN0YW5jZXNbIDAgXS5kZXN0cm95KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFqYXgoICdkZWxldGUtbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHRcdGJhY2t1cF9pZDogalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzJyApLmh0bWwoIGUuZGF0YSApO1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggZS5kYXRhICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvbkFsd2F5czogKCkgPT4gdGhpcy51bmJsb2NrX2Zvcm0oKSxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcucmVzdG9yZV9iYWNrdXAnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLnJlc3RvcmVfYmFja3VwKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnYmx1cicsICcucmVzdG9yZV90ZXh0YXJlYSB0ZXh0YXJlYScsICggZSApID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIEpTT04ucGFyc2UoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCkgKSApO1xuXHRcdFx0XHRqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCggJycgKS5odG1sKCAnJyApO1xuXHRcdFx0fSBjYXRjaCggZXJyb3IgKSB7XG5cdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggdGhpcy5vcHRpb24oICdpbnZhbGlkX2Zvcm1hdCcgKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZXMgU3dhbCBFcnJvciBNc2cuXG5cdCAqIEBwYXJhbSBtc2dcblx0ICovXG5cdHN3YWxfZXJyb3IoIG1zZyApIHtcblx0XHRzd2FsKCB7XG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0dGl0bGU6IG1zZ1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFRvb2xUaXAgaW5zdGFuY2UuXG5cdCAqIEBwYXJhbSByZW1vdmVcblx0ICovXG5cdHRvb2x0aXAoIHJlbW92ZSA9IGZhbHNlICkge1xuXHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0aWYoIHRydWUgPT09IHJlbW92ZSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cyBsaScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0ICRlbGVtID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gYScgKVsgMCBdO1xuXHRcdFx0XHQkZWxlbS5fdGlwcHkuZGVzdHJveSgpO1xuXHRcdFx0fSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMgbGknICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR0aGlzLnNob3dfdG9vbHRpcCggalF1ZXJ5KCB0aGlzICkuZmluZCggJz5hJyApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEJsb2NrcyBBIEZvcm1cblx0ICovXG5cdGJsb2NrX2Zvcm0oKSB7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLmZpbmQoICdidXR0b24nICkuYXR0ciggJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuYmxvY2tzIGEgZm9ybVxuXHQgKi9cblx0dW5ibG9ja19mb3JtKCkge1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLnJlbW92ZUF0dHIoICdkaXNhYmxlZCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb3JjZXMgRG93bmxvYWQgRXhwb3J0IERhdGEuXG5cdCAqIEBwYXJhbSBleHBvcnRPYmpcblx0ICogQHBhcmFtIGV4cG9ydE5hbWVcblx0ICovXG5cdGZvcmNlX2Rvd25sb2FkKCBleHBvcnRPYmosIGV4cG9ydE5hbWUgKSB7XG5cdFx0bGV0IGRhdGFTdHIgICAgICAgICAgICA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoIEpTT04uc3RyaW5naWZ5KCBleHBvcnRPYmogKSApO1xuXHRcdGxldCBkb3dubG9hZEFuY2hvck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYScgKTtcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCAnaHJlZicsIGRhdGFTdHIgKTtcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCAnZG93bmxvYWQnLCBleHBvcnROYW1lICsgJy5qc29uJyApO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRvd25sb2FkQW5jaG9yTm9kZSApOyAvLyByZXF1aXJlZCBmb3IgZmlyZWZveFxuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5jbGljaygpO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5yZW1vdmUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXN0b3JlcyBCYWNrdXAgRGF0YS5cblx0ICogQHBhcmFtIGJhY2t1cF9pZFxuXHQgKi9cblx0cmVzdG9yZV9iYWNrdXAoIGJhY2t1cF9pZCApIHtcblx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHR0aGlzLmFqYXgoICdyZXN0b3JlLW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dW5pcXVlOiB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApLFxuXHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcblx0XHRcdFx0YmFja3VwX2lkOiBiYWNrdXBfaWQsXG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGUuZGF0YSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEJhY2t1cCBJbXBvcnQgRmlsZSBhbmQgcmVzdG9yZXMgaXQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0aGFuZGxlX2JhY2t1cF9pbXBvcnQoICRlbGVtICkge1xuXHRcdGlmKCAkZWxlbS5maWxlcyAmJiAkZWxlbS5maWxlc1sgMCBdICkge1xuXHRcdFx0bGV0ICRmaWxlID0gJGVsZW0uZmlsZXNbIDAgXTtcblxuXHRcdFx0aWYoICRmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi9qc29uJyApIHtcblx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCB0aGlzLm9wdGlvbiggJ2ludmFsaWRfZm9ybWF0JyApICk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGxldCByZWFkZXIgICAgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0XHRyZWFkZXIub25sb2FkID0gKCBlICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIEpTT04ucGFyc2UoIGUudGFyZ2V0LnJlc3VsdCApICk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCAkZmlsZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93J3MgVG9vbFRpcFxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdHNob3dfdG9vbHRpcCggJGVsZW0gKSB7XG5cdFx0bGV0ICRiYWNrdXBpZCA9ICRlbGVtLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApO1xuXHRcdGxldCAkYXBwZW5kVE8gPSB0aGlzLmVsZW1lbnRbIDAgXTtcblx0XHR0aXBweSggJGVsZW1bIDAgXSwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRhcHBlbmRUbzogJGFwcGVuZFRPLFxuXHRcdFx0YXJyb3dUeXBlOiAncm91bmQnLFxuXHRcdFx0Y29udGVudDogJzxidXR0b24gZGF0YS1iYWNrdXBpZD1cIicgKyAkYmFja3VwaWQgKyAnXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzdG9yZV9iYWNrdXAgYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNtYWxsXCI+PGkgY2xhc3M9XCJkYXNoaWNvbnMtaW1hZ2Utcm90YXRlIGRhc2hpY29uc1wiPjwvaT4gPC9idXR0b24+IHwgPGJ1dHRvbiBkYXRhLWJhY2t1cGlkPVwiJyArICRiYWNrdXBpZCArICdcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGVfYmFja3VwIGJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5IGJ1dHRvbi1zbWFsbFwiPjxpIGNsYXNzPVwiZGFzaGljb25zLXRyYXNoIGRhc2hpY29uc1wiPjwvaT4gPC9idXR0b24+Jyxcblx0XHRcdGludGVyYWN0aXZlOiB0cnVlLFxuXHRcdFx0dGhlbWU6ICd0cmFuc2x1Y2VudCcsXG5cdFx0XHRvblNob3duOiAoKSA9PiB7XG5cdFx0XHRcdGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLmRlbGV0ZV9iYWNrdXAnICkudGlwcHkoIHtcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHRhcnJvd1R5cGU6ICdza2lubnknLFxuXHRcdFx0XHRcdGFwcGVuZFRvOiAkYXBwZW5kVE8sXG5cdFx0XHRcdFx0Y29udGVudDogJHdwb25pb24udHh0KCAnZGVsZXRlJyApLFxuXHRcdFx0XHRcdHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZTogZmFsc2UsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLnJlc3RvcmVfYmFja3VwJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0YXJyb3dUeXBlOiAnc2tpbm55Jyxcblx0XHRcdFx0XHRhcHBlbmRUbzogJGFwcGVuZFRPLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICR3cG9uaW9uLnR4dCggJ3Jlc3RvcmUnICksXG5cdFx0XHRcdFx0dGhlbWU6ICdsaWdodC1ib3JkZXInLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sXG5cdFx0XHRwbGFjZW1lbnQ6ICdyaWdodCcsXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRXh0cmEgVmFsdWUuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0X2V4dHJhX3ZhbHVlKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QgaW5wdXQjcG9zdF9JRCcgKS5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSNwb3N0IGlucHV0I3Bvc3RfSUQnICkudmFsKCk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2JhY2t1cCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMucmVtb3ZlX2FjdGl2ZV9jbGFzcygpO1xuXHRcdHRoaXMuYWRkX2FjdGl2ZV9jbGFzcygpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZV9hY3RpdmVfY2xhc3MoKTtcblx0XHRcdHRoaXMuYWRkX2FjdGl2ZV9jbGFzcygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgQWN0aXZlIENsYXNzLlxuXHQgKi9cblx0cmVtb3ZlX2FjdGl2ZV9jbGFzcygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGUgPSBqUXVlcnkoIGUgKTtcblx0XHRcdGlmKCAhJGUuaXMoICc6Y2hlY2tlZCcgKSApIHtcblx0XHRcdFx0JGUucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9uKCAnYWN0aXZlJyApICk7XG5cdFx0XHRcdCRlLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCB0aGlzLm9wdGlvbiggJ2luYWN0aXZlJyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgQWN0aXZlIENsYXNzLlxuXHQgKi9cblx0YWRkX2FjdGl2ZV9jbGFzcygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGUgPSBqUXVlcnkoIGUgKTtcblx0XHRcdGlmKCAkZS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0XHQkZS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyggdGhpcy5vcHRpb24oICdhY3RpdmUnICkgKTtcblx0XHRcdFx0JGUucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9uKCAnaW5hY3RpdmUnICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdidXR0b25fc2V0JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJGN1c3RvbV9pbnB1dCA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0bGV0ICRyYWRpb3MgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dJyApO1xuXHRcdFx0bGV0ICRjaGVja2JveCAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyApO1xuXG5cdFx0XHQkY3VzdG9tX2lucHV0LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1uYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ25hbWUnICkgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHR9ICk7XG5cblxuXHRcdFx0JHJhZGlvcy5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkY3VzdG9tX2lucHV0LnJlbW92ZUF0dHIoICduYW1lJyApO1xuXHRcdFx0XHRcdFx0bGV0ICRpID0galF1ZXJ5KCBlICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdFx0XHRcdCRpLmF0dHIoICduYW1lJywgJGkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkcmFkaW9zLm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHQkY3VzdG9tX2lucHV0LnJlbW92ZUF0dHIoICduYW1lJyApO1xuXHRcdFx0XHRcdGxldCAkaSA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdFx0XHQkaS5hdHRyKCAnbmFtZScsICRpLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkY2hlY2tib3guZWFjaCggKCBpLCBlICkgPT4ge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCBlICkuaXMoICc6Y2hlY2tlZCcgKSApIHtcblx0XHRcdFx0XHRpZiggalF1ZXJ5KCBlICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5KCBlICkucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHRcdFx0XHRsZXQgJGkgPSBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0XHRcdFx0JGkuYXR0ciggJ25hbWUnLCAkaS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRjaGVja2JveC5vbiggJ2NsaWNrJywgKCBlICkgPT4ge1xuXHRcdFx0XHRpZiggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblx0XHRcdFx0XHRsZXQgJGkgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHRcdFx0JGkuYXR0ciggJ25hbWUnLCAkaS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjaGVja2JveF9yYWRpbycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgPSB0aGlzLm9wdGlvbiggJ2Nob3NlbicsIHt9ICk7XG5cblx0XHQkYXJnID0gdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJ2Nob3NlbicgKTtcblx0XHR0aGlzLmVsZW1lbnQuY2hvc2VuKCAkYXJnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2Nob3NlbicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG4vKiBnbG9iYWwgd3Bvbmlvbl9maWVsZDp0cnVlICovXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnICAgICAgICA9IHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnY2xvbmUnLCB7fSApICk7XG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRjbG9uZV93cmFwID0gJGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLWNsb25lLXdyYXAnICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLWFkZF0nICksXG5cdFx0XHQvLyRyZW1vdmVfYnRuID0gJGNsb25lX3dyYXAuZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtcmVtb3ZlXScgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gKCAkYXJnLmxpbWl0ICE9PSB1bmRlZmluZWQgKSA/ICRhcmcubGltaXQgOiBmYWxzZSxcblx0XHRcdC8vJGlzX3RvYXN0ICAgPSAoICRhcmcudG9hc3RfZXJyb3IgIT09IHVuZGVmaW5lZCApID8gJGFyZy50b2FzdF9lcnJvciA6IHRydWUsXG5cdFx0XHQkZXJvcl9tc2cgICA9ICRhcmcuZXJyb3JfbXNnLFxuXHRcdFx0JHNvcnQgICAgICAgPSAoICRhcmcuc29ydCAhPT0gZmFsc2UgKSA/IHtcblx0XHRcdFx0aXRlbXM6ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRcdGhhbmRsZTogJy53cG9uaW9uLWZpZWxkLWNsb25lLXNvcnRlcicsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnd3Bvbmlvbi1jbG9uZXItcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRzdGFydDogKCBldmVudCwgdWkgKSA9PiB1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICksXG5cdFx0XHRcdHN0b3A6ICggZXZlbnQsIHVpICkgPT4ge1xuXHRcdFx0XHRcdCRlbGVtLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdFx0dWkuaXRlbS5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9IDogZmFsc2U7XG5cblx0XHQkY2xvbmVfd3JhcC5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiAkYWRkX2J0bixcblx0XHRcdGxpbWl0OiAkbGltaXQsXG5cdFx0XHRjbG9uZV9lbGVtOiAnLndwb25pb24tZmllbGQtY2xvbmUnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWNsb25lLWFjdGlvbiA+IC53cG9uaW9uLXJlbW92ZScsXG5cdFx0XHR0ZW1wbGF0ZTogJHRoaXMub3B0aW9uKCAnY2xvbmVfdGVtcGxhdGUnICksXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlICkgPT4ge1xuXHRcdFx0XHQkZWxlbS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR3cG9uaW9uX2ZpZWxkKCAkZS5maW5kKCAnPiBkaXYud3Bvbmlvbi1maWVsZC1jbG9uZTpsYXN0LWNoaWxkJyApICkucmVsb2FkKCk7XG5cdFx0XHR9LFxuXHRcdFx0b25SZW1vdmVBZnRlcjogKCkgPT4gJGVsZW0udHJpZ2dlciggJ2NoYW5nZScgKSxcblx0XHRcdHNvcnRhYmxlOiAkc29ydCxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoICRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLnByZXBlbmQoIGpRdWVyeSggJGVyb3JfbXNnICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UoICRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQsIGRpdi5ub3RpY2UnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHNob3dfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuc2hvdyxcblx0XHRcdGhpZGVfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuaGlkZSxcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjbG9uZV9lbGVtZW50JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjb2xvcl9wYWxldHRlJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWNvbG9yLXBpY2tlci1lbGVtZW50JyApLndwQ29sb3JQaWNrZXIoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY29udGVudCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnICksXG5cdFx0XHQkdmlldztcblxuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHNldHRpbmdzLnRoZW1lICkgKSB7XG5cdFx0XHQkdmlldyA9ICRzZXR0aW5ncy50aGVtZTtcblx0XHRcdGRlbGV0ZSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR2aWV3ID0gJ2RlZmF1bHQnO1xuXHRcdH1cblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdC5hcHBlbmQoIGpRdWVyeSggJzxkaXYgY2xhc3M9XCJ3cG9uaW9uLWRhdGVwaWNrZXItJyArICR2aWV3ICsgJ1wiIGlkPVwiJyArIHRoaXMuaWQoKSArICdkYXRlcGlja2VyXCI+PC9kaXY+JyApICk7XG5cdFx0fVxuXG5cdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1kYXRlcGlja2VyLXJhbmdlJyApICkge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKVsgMCBdO1xuXHRcdFx0aWYoICRzZXR0aW5ncy5wbHVnaW5zID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zID0gW107XG5cdFx0XHR9XG5cblx0XHRcdCRzZXR0aW5ncy5wbHVnaW5zLnB1c2goIG5ldyByYW5nZVBsdWdpbiggeyBpbnB1dDogJGVsZW0uZmluZCggJ2lucHV0W2RhdGEtd3Bvbmlvbi1kYXRlcGlja2VyLXRvLWRhdGVdJyApWyAwIF0gfSApICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItZnJvbS1kYXRlXScgKVxuXHRcdFx0XHQgLmZsYXRwaWNrciggdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnZGF0ZV9waWNrZXInICkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKVsgMCBdO1xuXHRcdFx0JGVsZW0uZmluZCggJ2lucHV0JyApLmZsYXRwaWNrciggdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnZGF0ZV9waWNrZXInICkgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdkYXRlX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgRXJyb3IgUGxhY2VtZW50LlxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqL1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGRzZXQnICkgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdmaWVsZHNldCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBSZXR1cm5zIFdlYnNhZmUgRm9udCBEYXRhLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldCB3ZWJzYWZlKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl93ZWJzYWZlX2ZvbnRzJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgR29vZ2xlIEZvbnQgRGF0YS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQgZ29vZ2xlX2ZvbnRzKCkge1xuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9nZm9udHMnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRzIEhUTUwgT3B0aW9uIFRhZyBVc2luZyBBcnJheS5cblx0ICogQHBhcmFtIGRhdGFcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGJ1aWxkX29wdGlvbnMoIGRhdGEgKSB7XG5cdFx0bGV0ICRyZXR1cm4gPSAnJztcblx0XHRmb3IoIGxldCAkX2QgaW4gZGF0YSApIHtcblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggZGF0YVsgJF9kIF0gKSApIHtcblx0XHRcdFx0JHJldHVybiArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7JF9kfVwiPiR7ZGF0YVsgJF9kIF19PC9vcHRpb24+YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tZm9udC1zZWxlY3RvcicgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHtcblx0XHRcdGxldCAkdmFsICA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCksXG5cdFx0XHRcdCRodG1sID0gbnVsbDtcblxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLndlYnNhZmUuZm9udHMgWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMud2Vic2FmZS52YXJpYW50cyApO1xuXHRcdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5nb29nbGVfZm9udHNbICR2YWwgXSApICkge1xuXHRcdFx0XHQkaHRtbCA9IHRoaXMuYnVpbGRfb3B0aW9ucyggdGhpcy5nb29nbGVfZm9udHNbICR2YWwgXSApO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICR2YXJpYW50ID0gdGhpcy5lbGVtZW50LmZpbmQoICdzZWxlY3Qud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLmh0bWwoICRodG1sICk7XG5cblx0XHRcdGlmKCAkdmFyaWFudC5oYXNDbGFzcyggJ2Nob3NlbicgKSApIHtcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2Nob3Nlbjp1cGRhdGVkJyApO1xuXHRcdFx0fSBlbHNlIGlmKCAkdmFyaWFudC5oYXNDbGFzcyggJ3NlbGVjdDInICkgKSB7XG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZm9udF9zZWxlY3RvcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGh0bWxfdGVtcCA9ICR0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXG5cdFx0XHQkaW5wdXQgICAgID0gJGVsZW0uZmluZCggJ2lucHV0I2ltYWdlX2lkJyApLFxuXHRcdFx0JHByZXZpZXcgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3JyApLFxuXHRcdFx0d3BfbWVkaWFfZnJhbWUsXG5cdFx0XHQkYWRkICAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1hZGRdJyApLFxuXHRcdFx0JGVkaXQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktZWRpdF0nICksXG5cdFx0XHQkY2xlYXIgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1jbGVhcl0nICksXG5cdFx0XHQkbWFuYWdlICAgID0gZnVuY3Rpb24oICR0eXBlICkge1xuXHRcdFx0XHRsZXQgaWRzICAgPSAkaW5wdXQudmFsKCksXG5cdFx0XHRcdFx0d2hhdCAgPSAoICR0eXBlID09PSAnZWRpdCcgKSA/ICdlZGl0JyA6ICdhZGQnLFxuXHRcdFx0XHRcdHN0YXRlID0gKCB3aGF0ID09PSAnYWRkJyAmJiAhaWRzLmxlbmd0aCApID8gJ2dhbGxlcnknIDogJ2dhbGxlcnktZWRpdCc7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cblx0XHRcdFx0aWYoIHN0YXRlID09PSAnZ2FsbGVyeScgKSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdFx0XHRmcmFtZTogJ3Bvc3QnLFxuXHRcdFx0XHRcdFx0c3RhdGU6ICdnYWxsZXJ5Jyxcblx0XHRcdFx0XHRcdG11bHRpcGxlOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhLmdhbGxlcnkuZWRpdCggJ1tnYWxsZXJ5IGlkcz1cIicgKyBpZHMgKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCB3aGF0ID09PSAnYWRkJyApIHtcblx0XHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lLnNldFN0YXRlKCAnZ2FsbGVyeS1saWJyYXJ5JyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAndXBkYXRlJywgZnVuY3Rpb24oIHNlbGVjdGlvbiApIHtcblx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRJZHMgPSBzZWxlY3Rpb24ubW9kZWxzLm1hcCggZnVuY3Rpb24oIGF0dGFjaG1lbnQgKSB7XG5cdFx0XHRcdFx0XHRsZXQgaXRlbSA9IGF0dGFjaG1lbnQudG9KU09OKCk7XG5cdFx0XHRcdFx0XHRpZiggaXRlbS5zaXplcyA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCB0aHVtYiA9ICggdHlwZW9mIGl0ZW0uc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gaXRlbS5zaXplcy50aHVtYm5haWwudXJsIDogaXRlbS51cmwsXG5cdFx0XHRcdFx0XHRcdCR0bXAgID0galF1ZXJ5KCAkaHRtbF90ZW1wICk7XG5cdFx0XHRcdFx0XHQkdG1wLmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnLCBpdGVtLmlkICk7XG5cdFx0XHRcdFx0XHQkdG1wLmZpbmQoICdpbWcnICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBpdGVtLnVybCApLmF0dHIoICdzcmMnLCB0aHVtYiApLnJlbW92ZUNsYXNzKCAnaGlkZScgKTtcblx0XHRcdFx0XHRcdCRwcmV2aWV3LmFwcGVuZCggJHRtcCApO1xuXHRcdFx0XHRcdFx0JHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWhlbHAnLCAndG9vbHRpcCcgKTtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmlkO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRsZXQgJGU7XG5cdFx0XHRcdFx0Zm9yKCAkZSBpbiBzZWxlY3RlZElkcyApIHtcblx0XHRcdFx0XHRcdGlmKCBzZWxlY3RlZElkc1sgJGUgXSA9PT0gZmFsc2UgfHwgc2VsZWN0ZWRJZHNbICRlIF0gPT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgc2VsZWN0ZWRJZHNbICRlIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRpbnB1dC52YWwoIHNlbGVjdGVkSWRzLmpvaW4oICcsJyApICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fTtcblxuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLnZhbCgpID09PSAnJyApIHtcblx0XHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRlZGl0LnNob3coKTtcblx0XHRcdFx0JGNsZWFyLnNob3coKTtcblx0XHRcdFx0JGFkZC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgKCkgPT4gJG1hbmFnZSggJ2FkZCcgKSApO1xuXG5cdFx0JGVkaXQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdlZGl0JyApICk7XG5cblx0XHQkY2xlYXIub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkY2xlYXIuaGlkZSgpO1xuXHRcdFx0JGVkaXQuaGlkZSgpO1xuXHRcdFx0JGFkZC5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpLndwb25pb24taW1hZ2UtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBhcmVudCAgID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXG5cdFx0XHRcdCRpbWFnZV9pZCA9ICRwYXJlbnQuYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbWFnZV9pZCcgKSxcblx0XHRcdFx0JHZhbHVlICAgID0gJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKTtcblx0XHRcdGpRdWVyeS5lYWNoKCAkaW5wdXQudmFsKCkuc3BsaXQoICcsJyApLCBmdW5jdGlvbiggJGssICR2ICkge1xuXHRcdFx0XHRpZiggJHYgPT09ICRpbWFnZV9pZCApIHtcblx0XHRcdFx0XHQkdmFsdWUuc3BsaWNlKCAkaywgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRpbnB1dC52YWwoICR2YWx1ZS5qb2luKCAnLCcgKSApO1xuXHRcdFx0JHBhcmVudC5mYWRlT3V0KCAoKSA9PiAkcGFyZW50LnJlbW92ZSgpICk7XG5cdFx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHR9ICk7XG5cblx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcblxuXHRcdGlmKCAkcHJldmlldy5oYXNDbGFzcyggJ2dhbGxlcnktc29ydGFibGUnICkgKSB7XG5cdFx0XHQkcHJldmlldy5zb3J0YWJsZSgge1xuXHRcdFx0XHRpdGVtczogJz4gZGl2Jyxcblx0XHRcdFx0Y3Vyc29yOiAnbW92ZScsXG5cdFx0XHRcdHNjcm9sbFNlbnNpdGl2aXR5OiA0MCxcblx0XHRcdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0XHRoZWxwZXI6ICdjbG9uZScsXG5cdFx0XHRcdG9wYWNpdHk6IDAuNjUsXG5cdFx0XHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRcdGxldCAkaXRlbSA9IHVpLml0ZW07XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICd3aWR0aCcsICRpdGVtLndpZHRoKCkgKTtcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ2hlaWdodCcsICRpdGVtLmhlaWdodCgpICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdnYWxsZXJ5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiLyogZ2xvYmFsIGdvb2dsZTp0cnVlICovXG5pbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJG1hcCAgICAgICAgICAgICAgPSB0aGlzLm9wdGlvbiggJ21hcCcsIHt9ICk7XG5cdFx0JG1hcC5kZXRhaWxzICAgICAgICAgID0gJyNnbWFwX2ZpZWxkc18nICsgdGhpcy5pZCgpO1xuXHRcdCRtYXAuZGV0YWlsc0F0dHJpYnV0ZSA9ICdkYXRhLW1hcC12YWx1ZSc7XG5cdFx0aWYoICd5ZXMnID09PSB0aGlzLm9wdGlvbiggJ3Nob3dfbWFwJyApICkge1xuXHRcdFx0JG1hcC5tYXAgPSAnI2dtYXBfJyArIHRoaXMuaWQoKTtcblx0XHR9XG5cblx0XHRsZXQgJF9pbnN0YW5jZSA9IHRoaXMuZWxlbS5maW5kKCAnZGl2LnNlYXJjaGJveCA+IGlucHV0JyApO1xuXHRcdCRfaW5zdGFuY2UuZ2VvY29tcGxldGUoIHRoaXMuaGFuZGxlX2FyZ3MoICRtYXAgKSApO1xuXHRcdCRfaW5zdGFuY2UuYmluZCggJ2dlb2NvZGU6ZHJhZ2dlZCcsICggZXZlbnQsIGxhdExuZyApID0+IHtcblx0XHRcdGxldCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXHRcdFx0dGhpcy5lbGVtLmZpbmQoICcubWFwX2ZpZWxkcyA6aW5wdXQnICkudmFsKCAnJyApO1xuXHRcdFx0Z2VvY29kZXIuZ2VvY29kZSgge1xuXHRcdFx0XHQnbG9jYXRpb24nOiB7XG5cdFx0XHRcdFx0bGF0OiBwYXJzZUZsb2F0KCBsYXRMbmcubGF0KCkgKSxcblx0XHRcdFx0XHRsbmc6IHBhcnNlRmxvYXQoIGxhdExuZy5sbmcoKSApXG5cdFx0XHRcdH1cblx0XHRcdH0sIGZ1bmN0aW9uKCByZXN1bHRzICkge1xuXHRcdFx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCAnZmlsbERldGFpbHMnLCByZXN1bHRzWyAwIF0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdnb29nbGVfbWFwcycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICAgID0gdGhpcyxcblx0XHRcdCRhZGQgICAgICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC5yb3cgPiAud3Bvbmlvbi1maWVsZHNldCA+IGJ1dHRvbltkYXRhLXdwb25pb24tZ3JvdXAtYWRkXScgKSxcblx0XHRcdCRncm91cF93cmFwID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC5yb3cgPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAnICksXG5cdFx0XHQkbGltaXQgICAgICA9ICR0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0JGVycm9yX21zZyAgPSAkdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtd3JhcCcgKSwgJ2FjY29yZGlvbicgKTtcblxuXHRcdCRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksIHsgbmVzdGFibGU6IHRydWUgfSApO1xuXHRcdH0gKTtcblx0XHR0aGlzLmJpbmRfZXZlbnRzX2Zvcl90aXRsZSgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCB7XG5cdFx0XHRhcHBlbmRUbzogKCkgPT4gdGhpcy5nZXRfZmllbGRfcGFyZW50X2J5X2lkKCB0aGlzLmVsZW1lbnQgKVsgMCBdLFxuXHRcdH0gKTtcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnLCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi1jb250ZW50IC5yb3cgPiAud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nIClcblx0XHRcdFx0LmNsaWNrKCk7XG5cdFx0fSApO1xuXG5cdFx0JGdyb3VwX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZCxcblx0XHRcdGxpbWl0OiBwYXJzZUludCggJGxpbWl0ICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnZ3JvdXBfdGVtcGxhdGUnICksXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2xpZGVVcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRkYXRhID0gJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKTtcblx0XHRcdFx0JGRhdGEuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0dGhpcy5iaW5kX2V2ZW50c19mb3JfdGl0bGUoKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZ3JvdXBfd3JhcCwgJ2FjY29yZGlvbicgKTtcblx0XHRcdFx0Ly90aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZGF0YSApO1xuXHRcdFx0XHQkZGF0YS5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXBwZW5kVG86ICgpID0+IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcblx0XHRcdFx0fSApO1xuXHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJGRhdGEgKS5yZWxvYWQoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGRhdGEuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJyApLCAncmVsb2FkX3dwX2VkaXRvcicgKTtcblx0XHRcdFx0JGRhdGEuc2xpZGVEb3duKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSxcblx0XHRcdHNvcnRhYmxlOiB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tYWNjb3JkaW9uLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHQkYWRkLmJlZm9yZSggalF1ZXJ5KCAkZXJyb3JfbXNnICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0JGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0LCBkaXYubm90aWNlJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQmluZHMgRHluYW1pYyBHcm91cCBUaXRsZSBFdmVudHMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0YmluZF9ldmVudHNfZm9yX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xuXHRcdCRlbGVtID0gKCBmYWxzZSA9PT0gJGVsZW0gKSA/IHRoaXMuZWxlbWVudC5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1ncm91cC13cmFwID4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkgOiAkZWxlbTtcblx0XHQkZWxlbS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGUgKTtcblxuXHRcdFx0bGV0ICRtYWNoZWQgPSB0aGlzLm9wdGlvbiggJ21hdGNoZWRfaGVhZGluZ19maWVsZHMnICk7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtYWNoZWQgKSB7XG5cdFx0XHRcdGlmKCAkbWFjaGVkLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRlbGVtID0gJGRhdGEuZmluZCggJzppbnB1dFtkYXRhLWRlcGVuZC1pZD1cIicgKyAkbWFjaGVkWyAka2V5IF0gKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JGVsZW0ub24oICdjaGFuZ2UsIGJsdXInLCAoKSA9PiB0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIEdyb3VwIFRpdGxlXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0dXBkYXRlX2dyb3Vwc190aXRsZSggJGVsZW0gPSBmYWxzZSApIHtcblx0XHRsZXQgJGxpbWl0ID0gMTtcblx0XHQkZWxlbSAgICAgID0gKCBmYWxzZSA9PT0gJGVsZW0gKSA/IHRoaXMuZWxlbWVudC5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1ncm91cC13cmFwID4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkgOiAkZWxlbTtcblxuXHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdGxldCAkZGF0YSAgICA9IGpRdWVyeSggZSApO1xuXHRcdFx0bGV0ICRoZWFkaW5nID0gdGhpcy5vcHRpb24oICdoZWFkaW5nJyApO1xuXHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJ2hlYWRpbmdfY291bnRlcicgKSApIHtcblx0XHRcdFx0JGhlYWRpbmcgPSB3aW5kb3cud3Bvbmlvbi5fLnJlcGxhY2UoICRoZWFkaW5nLCAnW2NvdW50XScsICRsaW1pdCApO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgJG1hY2hlZCA9IHRoaXMub3B0aW9uKCAnbWF0Y2hlZF9oZWFkaW5nX2ZpZWxkcycgKTtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1hY2hlZCApIHtcblx0XHRcdFx0aWYoICRtYWNoZWQuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRsZXQgJGVsZW0gPSAkZGF0YS5maW5kKCAnOmlucHV0W2RhdGEtZGVwZW5kLWlkPVwiJyArICRtYWNoZWRbICRrZXkgXSArICdcIl0nICk7XG5cdFx0XHRcdFx0aWYoICRlbGVtLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkaGVhZGluZyA9IHdpbmRvdy53cG9uaW9uLl8ucmVwbGFjZSggJGhlYWRpbmcsICRtYWNoZWRbICRrZXkgXSwgJGVsZW0udmFsKCkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoICRoZWFkaW5nID09PSAnJyApIHtcblx0XHRcdFx0JGhlYWRpbmcgPSB3aW5kb3cud3Bvbmlvbi5fLnJlcGxhY2UoIHRoaXMub3B0aW9uKCAnZGVmYXVsdF9oZWFkaW5nJyApLCAnW2NvdW50XScsICRsaW1pdCApO1xuXHRcdFx0fVxuXG5cdFx0XHQkZGF0YS5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUgc3Bhbi5oZWFkaW5nJyApLmh0bWwoICRoZWFkaW5nICk7XG5cdFx0XHQkbGltaXQrKztcblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgRXJyb3IgUGxhY2VtZW50LlxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqL1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0LyogaWYoICRlbGVtICkgeyAvL2Vyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQnICkgKTsgfSAqL1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ3JvdXAnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2hlYWRpbmcnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG4vKmdsb2JhbCBzd2FsOnRydWUqL1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkX3RoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgICA9ICRfdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFyZ3MgICAgICAgPSAkX3RoaXMub3B0aW9ucygpLFxuXHRcdFx0JGlucHV0ICAgICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItaW5wdXQnICksXG5cdFx0XHQkcmVtb3ZlX2J0biA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItcmVtb3ZlXScgKSxcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24taWNvbnBpY2tlci1hZGRdJyApLFxuXHRcdFx0JHByZXZpZXcgICAgPSAkZWxlbS5maW5kKCAnc3Bhbi53cG9uaW9uLWljb24tcHJldmlldycgKTtcblxuXHRcdGxldCAkd29yayA9IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRlbGVtczogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRwb3B1cDogbnVsbCxcblx0XHRcdC8qKlxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxuXHRcdFx0ICovXG5cdFx0XHRlbG06IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgQSBOZXcgSW5zdGFuY2UgZm9yIFRvb2xUaXAuXG5cdFx0XHQgKi9cblx0XHRcdGluaXRfdG9vbHRpcDogKCkgPT4ge1xuXHRcdFx0XHRpZiggJGFyZ3MucG9wdXBfdG9vbHRpcCAhPT0gJ2ZhbHNlJyApIHtcblx0XHRcdFx0XHRsZXQgJHRwICAgICAgPSAoIHR5cGVvZiAkYXJncy5wb3B1cF90b29sdGlwID09PSAnb2JqZWN0JyApID8gJGFyZ3MucG9wdXBfdG9vbHRpcCA6IHt9O1xuXHRcdFx0XHRcdCR0cC5hcHBlbmRUbyA9ICR3b3JrLmVsbVsgMCBdO1xuXHRcdFx0XHRcdGlmKCAkd29yay5lbGVtcy5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JHdvcmsuZWxlbXMudGlwcHkoICR0cCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSW5pdHMgRm9yIGVhY2ggYW5kIGV2ZXJ5IFBPUFVQLlxuXHRcdFx0ICogQHBhcmFtICRlbG1cblx0XHRcdCAqIEBwYXJhbSAkaW5zdGFuY2Vcblx0XHRcdCAqL1xuXHRcdFx0aW5pdDogZnVuY3Rpb24oICRlbG0sICRpbnN0YW5jZSApIHtcblx0XHRcdFx0JHdvcmsuZWxtICAgPSAkZWxtO1xuXHRcdFx0XHQkd29yay5wb3B1cCA9ICRpbnN0YW5jZTtcblx0XHRcdFx0JHdvcmsuZWxlbXMgPSAkd29yay5lbG0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cdFx0XHRcdGxldCAkaGVpZ2h0ID0gJHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcgKTtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcsICRoZWlnaHQgKTtcblx0XHRcdFx0JHdvcmsuc2VsZWN0KCk7XG5cdFx0XHRcdCR3b3JrLmlucHV0KCk7XG5cdFx0XHRcdCR3b3JrLmVsZW1zLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJGljb24gPSBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1pY29uJyApO1xuXHRcdFx0XHRcdCRpbnB1dC52YWwoICRpY29uICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0XHRzd2FsLmNsb3NlTW9kYWwoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQkd29yay5pbml0X3Rvb2x0aXAoKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFdvcmtzIHdpdGggUE9QVVAgSW5wdXQgU2VhcmNoLlxuXHRcdFx0ICovXG5cdFx0XHRpbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0nICkub24oICdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdvcmsuZWxlbXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKS5zZWFyY2goIG5ldyBSZWdFeHAoICR2YWwsICdpJyApICkgPCAwICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYW5kbGVzIFNlbGVjdGJveCBpbiBwb3B1cC5cblx0XHRcdCAqL1xuXHRcdFx0c2VsZWN0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICdkaXYud3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbC1oZWFkZXIgc2VsZWN0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblx0XHRcdFx0XHQkd3Bvbmlvbi5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0XHQnd3Bvbmlvbi1pY29uLWxpYic6ICR2YWwsXG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogJGFyZ3MuZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHdvcmsuZWxtLCAkd29yay5wb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHJlcy5kYXRhICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLmRpc2FibGVMb2FkaW5nKClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmKCAkaW5wdXQudmFsKCkgPT09ICcnICkge1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQmx1ciBFdmVuIC8gY2hhbmdlIGV2ZW4gaW4gaW5wdXRmaWVsZC5cblx0XHQgKi9cblx0XHQkaW5wdXQub24oICdrZXl1cCBibHVyIGNoYW5nZSBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYoICR2YWwgIT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnPGkgY2xhc3M9XCInICsgJHZhbCArICdcIj48L2k+JyApLnNob3coKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBBZGQgQnV0dG9uIENsaWNrIEV2ZW50LlxuXHRcdCAqL1xuXHRcdCRhZGRfYnRuLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkcG9wdXAgPSBzd2FsKCB7XG5cdFx0XHRcdHRpdGxlOiAkZWxlbS5maW5kKCAnLndwb25pb24tZmllbGQtdGl0bGUgaDQnICkuaHRtbCgpLFxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHRhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHR3aWR0aDogJzcwMHB4Jyxcblx0XHRcdFx0Y3VzdG9tQ2xhc3M6ICd3cG9uaW9uLWljb24tcGlja2VyLW1vZGVsJyxcblx0XHRcdFx0b25CZWZvcmVPcGVuOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdCRfdGhpcy5hamF4KCAnaWNvbl9waWNrZXInLCB7XG5cdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiAkYXJncy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvblN1Y2Nlc3M6ICggJHJlcyApID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRzd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHBvcHVwX2VsZW0gPSBqUXVlcnkoICRlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkcG9wdXBfZWxlbSwgJHBvcHVwICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25FcnJvcjogKCkgPT4gJHBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICR3cG9uaW9uLnR4dCggJ3Vua25vd25fYWpheF9lcnJvcicgKSApLFxuXHRcdFx0XHRcdFx0b25BbHdheXM6ICgpID0+ICRwb3B1cC5kaXNhYmxlTG9hZGluZygpLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgUmVtb3ZlIEJ1dHRvbiBFdmVudC5cblx0XHQgKi9cblx0XHQkcmVtb3ZlX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQudmFsKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuaGlkZSgpO1xuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaWNvbl9waWNrZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgRmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW1nJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApWyAwIF0uY29tcGxldGUgKSB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tY2hlY2tib3gtcmFkaW8tdG9vbHRpcCcgKSApIHtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyggJ3dwb25pb24tZmllbGQtdG9vbHRpcCcgKTtcblx0XHRcdFx0XHQkdGhpcy5pbml0X2ZpZWxkKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKSwgJ3Rvb2x0aXAnICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLm9uKCAnbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tY2hlY2tib3gtcmFkaW8tdG9vbHRpcCcgKSApIHtcblx0XHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCAnd3Bvbmlvbi1maWVsZC10b29sdGlwJyApO1xuXHRcdFx0XHRcdFx0JHRoaXMuaW5pdF9maWVsZCggalF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCksICd0b29sdGlwJyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3NlbGVjdCcsICggJGVsZW0gKSA9PiBuZXcgRmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRpbnB1dCAgICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3X2FkZCA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXctYWRkJyApLFxuXHRcdFx0JHByZXZpZXcgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWltYWdlLXByZXZpZXcgLndwb25pb24tcHJldmlldycgKTtcblxuXHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gbnVsbDtcblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHByZXZpZXdfYWRkLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3LnNob3coKTtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25faW1hZ2VfdXBsb2FkX3VwZGF0ZWQnLCAkaW5wdXQsICRwcmV2aWV3LCAkcHJldmlld19hZGQgKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlld19hZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkdGhpcy5tZWRpYV9pbnN0YW5jZSApIHtcblx0XHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub3BlbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gd3AubWVkaWEoIHtcblx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXG5cdFx0XHRcdHRpdGxlOiAkdGhpcy5vcHRpb24oICdmcmFtZV90aXRsZScsICdTZWxlY3QgSW1hZ2UnICksXG5cdFx0XHR9ICk7XG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9ICR0aGlzLm1lZGlhX2luc3RhbmNlLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCkuYXR0cmlidXRlcztcblx0XHRcdFx0bGV0IHRodW1ibmFpbCAgPSAoIHR5cGVvZiBhdHRhY2htZW50LnNpemVzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwgIT09ICd1bmRlZmluZWQnICkgPyBhdHRhY2htZW50LnNpemVzLnRodW1ibmFpbC51cmwgOiBhdHRhY2htZW50LnVybDtcblx0XHRcdFx0JHByZXZpZXcuZmluZCggJ2ltZycgKS5hdHRyKCAnc3JjJywgdGh1bWJuYWlsICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBhdHRhY2htZW50LnVybCApO1xuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmlkICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gKTtcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcblx0XHR9ICk7XG5cblx0XHQkcHJldmlldy5maW5kKCAnLndwb25pb24taW1hZ2UtcmVtb3ZlJyApLm9uKCAnY2xpY2snLCAoKSA9PiAkaW5wdXQudmFsKCAnJyApLnRyaWdnZXIoICdjaGFuZ2UnICkgKTtcblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2ltZycsICggZXZlbnQgKSA9PiB0aGlzLmluaXRfZmllbGQoIGV2ZW50LnRhcmdldCwgJ2ltYWdlX3BvcHVwJyApICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV91cGxvYWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRsZXQgJHNldHRpbmdzID0gdGhpcy5vcHRpb24oICdpbnB1dG1hc2snICk7XG5cdFx0XHRpZiggJHNldHRpbmdzICkge1xuXHRcdFx0XHQkc2V0dGluZ3MgPSB0aGlzLmhhbmRsZV9hcmdzKCAkc2V0dGluZ3MsICdJbnB1dE1hc2snICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5pbnB1dG1hc2soICRzZXR0aW5ncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2lucHV0bWFzaycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnamFtYm9fY29udGVudCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHRoaXNfZWxlbSA9ICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tdGFiLXdyYXAgJyApO1xuXG5cdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaSBhJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCAkX3RoaXMgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tdGFiLWN1cnJlbnQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0JF90aGlzLnBhcmVudCgpLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRlbGVtLmZpbmQoICcud3Bvbmlvbi10YWItcGFnZScgKS5oaWRlKCk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xuXHRcdFx0bGV0ICR0YWIgPSAkX3RoaXMuYXR0ciggJ2RhdGEtdGFiLW5hbWUnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnZGl2I3dwb25pb24tdGFiLScgKyAkdGFiICkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApLnNob3coKTtcblx0XHR9ICk7XG5cblx0XHRpZiggJHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQgYScgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGk6Zmlyc3QtY2hpbGQgYScgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnanF1ZXJ5X3RhYicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZ2xvYmFsX3ZhbGlkYXRlID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46IHRoaXMuZWxlbWVudC5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi1rZXl2YWx1ZS1hY3Rpb24tY29udGFpbmVyICA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtYWRkXScgKSxcblx0XHRcdGxpbWl0OiAoIC0xID09PSB0aGlzLm9wdGlvbiggJ2xpbWl0JyApICkgPyBudWxsIDogdGhpcy5vcHRpb24oICdsaW1pdCcgKSxcblx0XHRcdGNsb25lX2VsZW06ICc+IC5yb3cgPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtcmVtb3ZlXScsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZWxlbS5maW5kKCAnPiBkaXY6bGFzdC1jaGlsZCcgKSApO1xuXHRcdFx0fSxcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLmFmdGVyKCBqUXVlcnkoIHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQnICkuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fbm90aWNlKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCBlcnIuZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBWYWxpZGF0aW9uIElucHV0c1xuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIHRydWUgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLmtleSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDAgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3Mua2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGlmKCB0cnVlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDEgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MudmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiggdHJ1ZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgJiYgdHJ1ZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdrZXl2YWx1ZV9wYWlyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdub3RpY2UnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFOdGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqTXRZekF4TVNBMk5pNHhORFUyTmpFc0lESXdNVEl2TURJdk1EWXRNVFE2TlRZNk1qY2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVEJHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJVVTVOMEUzT0VFMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlVVNU4wRTNPRGsxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROQ0JYYVc1a2IzZHpJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRNMk1EVTJRekpHUWtWRVJUQXhNVGsxTlVWQ1JUQXpSVUU0UWpSRU5VSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFHQkFRRUJRUUdCUVVHQ1FZRkJna0xDQVlHQ0FzTUNnb0xDZ29NRUF3TURBd01EQkFNRGc4UUR3NE1FeE1VRkJNVEhCc2JHeHdmSHg4Zkh4OGZIeDhmQVFjSEJ3ME1EUmdRRUJnYUZSRVZHaDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHgvL3dBQVJDQUVUQVJNREFSRUFBaEVCQXhFQi84UUFpUUFCQUFNQUF3RUJBQUFBQUFBQUFBQUFBQVFGQmdFREJ3SUlBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFCQXdNREFRTUdCdzhDQXdrQUFBQUJBQUlERVFRRklSSUdNVUVUQjFGaGNZRWlNcEdoc2NGQ2doVGhVbUp5a3FLeXdpTXpjN04wRlRZa045SFRGK0pEVTVPalZEVlZGaEVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9WS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJT3VlZUtDTXlTdURHRHFTZzZJOHZqWG1qWjIvV3EzNVFFSGV5NHQ1UGNsWS84QUZjRDhpRHNRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGTnllWGJiUlIvZnVKL0pIM1VHYjNJT2R5RHNqdkxtUDkzSzl2bURpRUVsbWN5YkJRVGtqemhwK01oQklaeWE5YlFPWkcveW1oQitJb0pNZktXLzk1Yit0cnYrSVFTWStTWTkzdkI3UE9SVWZFU2dreDVqR1NlN2NOSDQxVy9wVVFTMlBZOW9leHdjMDlIQTFCUWNvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lNM3lxYjl2QkY5NjB1L0tOUDFVRmJpb0czTi9EQzhibU9QdER5Z0NwUWFTVGoyTWVQWllZejVXdVB6MVFSWk9MUUVmczVuQStjQW9JeitMM1k5eVpoOU5SOHlDTTdqMlZCMGpEdk9ITitjaEJHa3htU2pOSFc4bnFhVDhpRG9mSE5HYVBZNXA4aEJDRDQzSU5keDFqbTR4cEo5OXpuTjlIVDVrRm1nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWd4L0o1OStVTGYvQ1kxdjYzNnlEbmk3Qy9KaDNaRzF4UHJGUG5RYTlBUUVCQVFRTTQrT1BHVHVjMEVsdTBFanRPaURFYmtHN3hNWmp4dHV3OWRnUDVXdnpvSmFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0RBWnFmdk1yY3VIVGVRUHE2Zk1ndU9HeGt2dUpld0FOcjY2b05PZ0lDQWc0YzVyV2x6aUd0SFVuUUlLWGxrN1JqR3RCcjNqeFFqdEFDREhzSmM0TkhVbWc5YUQwcGpReGpXam8wQUQxSU9VQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRZk1rc2NiZHozQm84cFFSSk14WnMwYVM4L2dqVDQ2SUlVdWJuZHBHME04NTFLQ1ZpN21XV09hU1oxUTAxOUFwcWd3RTBwZEs5MzN6aWZoS0RZOE5ZUmkzdVAwNVNSNmdBZ25aUE4yT1BaKzFkdmxQdXhOMWQ2L0lncU1UeXQ4OThZcnNOWkZLYVJFYWJUNUNmT2cwNkNweWZKTWZaQXNEdStuN0kyZEFmT1VHU3lHY3lGKzR0a2VXeEU2Uk4wYjE3ZktndE9Vdjd1d3hzSDBoSFZ6ZlExb0NDb3c3VEpsYlJ0Sy90V0VqekJ3SlFlaklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJS3JPdGR0aGQ5RUVnK2swUVZDQWd0R2tRNEM2bEpvVEhKcjU2RUJCNS92UWFwK1R1TVp4aXlGdlJrMCsvMjZEUWJpZTMwb012SlBKSTh2a2NYdmNhdWM0a2tuMGxCODcwRm5OeVhMUzJyYll6RU1BbzV3MGM3MHU2b0t6ZWc3N0VHUzlnakd1NlJvcDYwRjF6YVVmM1NKamVqSVJVZVFsenZtUVIrSXNNbWJpTktoalh1UDVKSHpvTitnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2k1U0x2TE4vbGI3UTlTRFBVUUtJSm1mY0lPS3ZGYUY3WXdQUzU0SitKQmdBNGtnZVZCcnVUV0Y3TGpjWXkzZ2RJeUdMMnkzV2hMVzlucVFaWjl2ZE05K0Y3ZlMwaEIxRnhIWFJCeHZRTjZDNDRtd1M1NjJEaFZyZHp2V0dFajQwSHh5ZWN2emwxVTEydTJqMUFJTFhnVWU2N3VwdnZJMnRIMWovQU5sQnRVQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJ3QkJCNkhRb012UEgzY3I0ejlGeEZmUWcrV2lwSG5RT2R5OXppYlczKytlUHpHL2RRWVVTRUVFZFFhaEJjUWN4enNOQjM0ZUFLQVBhMGo0Z0VFOXZpQmtEcExiUU9iMmdCdytWeFFkZzVoaHBOTGpFeDFQdk9BWWZsYWc1YmtPQ3o2eTJqb25IeWJ3UHpYSURjUHcrN0pNR1E3ajhGN2czOU9pQ3o0OWdNZlpYN3JpM3ZtWFhzRnJHdExTUVQxT2hLRERYMDVsdlo1Q2FsNzNHdnJRYlR3K2hBeDF6UDJ5UzdQVXhvUDY2RFZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNDaXpFT3k2MzAwa0ZmWDJvSTF0SHZ1STJEdGNFRlg0aTNCKzAybHYyTlk2VDhvMC9WUVkrcUJWQXFnVlFLb0ZVSEllNGRIRWV0Qnh1UWVtOEtoRWZINEhEcks1N3orVnQvVlFYcUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3I4ekZ1dDJ5QWFzZHFmTWZ1b0s3RzdmdHNlNDAxK09pRG5rdkZQN3pOSE95NDdtV05teWhidWFSVW55anlvTXpjZUgrYWovZFBpbUhtZHQvU1FRTGppUElZUGV0SFAvaGtQL1JxZ2dUNHpKMjRyUGF5eER5dlk1dnloQkdKSU9xRGpjZ2JrRGNnYmtIc09EZzdqRDJjVktGc0xLanprVlB4bEJOUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFSFZjeENXM2taNVI5MUJtalVHbmFFSFl5NHVHZTVJNXZvSkNEdFprcjFuU1FuMDYvS2c3NDh6ZEErMDBQK0w1RUZoYlhWek1SdmdMR242UlAzRUhaUFoybHdLVHdzbEg0YlE3NVVGZk54VGowMWQxbEdDZTF0Vy9JUWdyNXZEN0F2SkxUTkdld05jQ0I4SUtDQkw0YVJFa3hYN21qc0RvNi9HSEJCRGI0YjVFWERBNjVpTUZSdmNOMjdiMjBiVDUwSG9ER2hyUTBkR2lnOVNEbEFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGRmUyTTR1bjdHRnpYbXJTQnBycWc1aHc5eS9WNUVZOC9WQk5pdzF1MzMzRjUrQUlKa2NFTVg3dGdiNkFnKzBCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkZ5bVJoeHVPdWIrZHJuUTJzYnBaR3NBTGkxZ3FhQWtDdnJRUU9MOHN4UEpMT1M1eDVlM3VYN0pZWmcxc2pTUlVFaHBjS083RFZCYnlQREkzUFBSb0xqVHpDcUNwNHZ5akg4a3g4bDlZeHl4d3h5bUJ6WncxcnR6V3RkVWJYUEZLUEhhZ3VFQkFRUnNsZnc0L0hYTi9NSE9odFluelNOWUFYRnJHbHgyZ2tDdW5sUVlqL3JaeFgvMnQ5LzVjUC9OUVNMSHhpNGhjekNLVDdUYUEwQWtuamJ0MS9odWtJK0JCdG81STVZMnlSdUQ0M2dPWTlwQmE1cEZRUVIxQlFmU0FnSUNBZ0lLYmpuS3Nmbi90bjJPT2FQN0ZMM012ZkJyYXUxMWJ0Yy9UVHRRWEtBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FncGViZjRqbVA2U1g5QW9QSmVOdnlIRkxYRDhxaDNUWXZJOTVCa29oMmJabnNINXJBNXZuQkhhZzlyTnpCZFkwM051OFN3VFFsOFVqZFE1cm0xQkNERWVDZitLM1g5ZEovSmlRVE0zNG0yZHBrbjR2RVdFK2F2NGlSTEhiMTJnZzBjQVd0a2NTM3RvMmlEbkJlSmRuZTVKbUt5bGhQaHNqS2FSUlhGZHJpZWpkem14dUJQWlZ2bVFiTkJUOHgveFBNLzBVLzhzb0tyd3Avd1hIL2pUL3ozb0pQaUphWXlmaU9SZmZNWWU1aGMrMmtkVGMyYjZHMDloTHFEem9LWGlHY3VjUjRXeDVTZUUzSDJRU2QxRTUyd3VqNzR0YU4xSFVBcnBvZ044Vko3a1FPeGVCdWNqR1dSbThsaExpeUdTUm9jWTl3amNIRnRhRW5hZ3ZPVWMzeG5IaERGT3g5eGtMZ0F3Mk1IdFBJSnBVK1FWMEhsN0VGSEQ0cVRXOHJQNzl4Kzh4TnJJUTF0eThQZTJ2bkRvNGo4RlVGL3l2bFJ3ZUVqekZ2YWpJV3Izc0R5eVhZQkhJUFprQjJ2RGhXZzlhQzd0NTRyaTNpdUlYYm9wbU5ramNPMXJoVUg0Q2dvOFh5dzVIbEdSd3R2YVZ0OGEwZDlmZDVvWkRRYkJIdDh1NzZYWWc0NGp5My9BUFJmM0QvU2ZaZnNNM2Nmdk84MzlmYTkxbE9pQ3Z6dmlSYTJXU2t4ZUtzSjh6a1lhaWFLM0IydElwVWJtdGtKSTdhTjA2SU9jRjRqMjE3a284WGxjZlBoc2pOcERGY0E3WGs5QUhPYkdRVDJWYWdzVHlzeDh5SEc1N1h1eExCMzlyZDk1WHZLRFZ1emFLZTY3NlI2SVBybVhLb3VOWWorNFBoKzB2ZEkyS0tEZjNlNHVxVDdXMS9SclNlaUN6eHVRaHY4WmJaQ1AyWXJtRmt3cWZkRDJoMUNmTWdxdUljcWR5T0M3dW1XbjJlMGduTU52S1hsNWxEZFM3YnNadDBJN1Q4U0MvUUVCQVFFQkFRRUJBUUVGTHpiL0VjeC9TUy9vRkJSOER4ZG5sZkRLeng5NHpmYjNEYmhyeDJqL1VTRU9IbmFkUWdxdUY1Uzh3Ti9lOEx5NzZtTnIzNHlZKzY1cEJkdEZleHc5cHZucUVEd3Bua3QrQVplZUxTU0tlNGV3L2hOdG95RUUvd2NzYmFMaTc3eHJRYm02bmYzMG4waUdhTmJYeURyNjBIejR5MmR1N2prRjhRRzNkdGNNRUVvMGNBOEhjMEhyMkErcEJ0c2ROSk5qN1dhUTFra2hqZTgrZHpRU2dyK1kvNG5tZjZLZitXVUhuWENlRlovSjhidGIyMDVQZDQ2M2tNZ1paeENUWXpiSTVwcHRtakdwRmZkUVhyUENpVzZsWWM3eUM4eXNNYmc1a0xpNW8wclVFdmZOMTgxRUZ2ejIxdDdYZ0dSdHJlTVJRUXdNWkZHMFVEV3RlMEFCQjJlRzl2RkJ3ckdDTnROOGJwSG50TG52Y1NTZ3cwdDF5cC9pVm1ickNXRUdRdmJZQ0pyYmtnQ0tLaldnc3JKRHFhZkg1MEZwazdqeGN5V1B1TEM2NC9ZdXQ3bGpvNUFIc3FBNGRSVzVPbzZqem9MdmpYRzhqSndFNERPUjkxTzVrc0lhWE5lV3RMaTZNN21Gdzlra1U5Q0N2NFR5YzJQQjc0WCtsMXg0eVFTeG5xZHRlNmIrVjdBOUNDYjRXWXVTMjQ0Y2pjNjNtWGxkZFRQUFV0SklaOE9ydldncC9ES1o4Tmh5aWFQOTVIY1NQWjZXdGVRZ28rQlhYaUJiNHFXZkFZbTF2SUxtWnpwcnVkemU5YzhVQkRxenhtZzdOTzFCTzVMWWVLdkliYUNHOHdsckM2MmxFMEU4RXNiWld1QXBvNTF3L1EvTUVGOTRodzNOcGI0Yms0WlM3eEU4WnUydDdZcGFDUnVuNFduclFjY21naDVMeTdIWVpwMzJWdFpUWGs1cFZwTTdlN2lyWHlhRWVsQlI0dmtzMWo0V1g5bzh1R1JzNVpNWXhsZmFEcFhhVVA0TFhPcCtLZzlBNGxoaGh1TzJPUG9CTEZHRFBUdGxmN1Qvd0E0b0xkQVFFQkFRRUJBUUVCQVFWSEw0SnArTDVXR0NOMHMwbHJLMk9KZ0xuT2NXbWdEUnFTZ2crRzlwZDJuQzhkYjNjTWx2Y003N2ZESzBzZTJzOGhGV3VBSXFEVkJEOFNlSlNackdOdnJGcEdYeC83UzNMUGVlMEdwWUthMTdXK2Ywb0kzaEppNzIwNHZkMjJSdEpiWjhsM0llNW5qZEc1ekhReE5ydGNBYUdoQ0Nxc2JQbVhCTHU2dDdESFB6ZUNuZVpJV1JFbVZwTkIwYUh1QnBRTzlrZzlmS2dYdGh6SG5kNWFSWkhIT3d1QnQ1TzlsamxKNzE1RlduUndZNHVwVUQyUUJXdXVpRDA1akdzYUdORkd0QURRT2dBUVZmSzRacCtNWmFHR04wczBscE0yT05nTG5PY1l5QUdnYWtsQlcrR2xuZDJmRGJHM3U0SkxlNFladDhNclhNZUt6UElxMXdCMUJRYWRCUWMrdHJtNjRoazdlMmlmUFBKRzBNaWphWHZjZDdUbzF0U1VIMXdhMnVMYmlXTWd1WW53enh3MGtpa2FXUGFkeDBMVFFoQm5lVWNkNUhqZVRqbFhHb2hjeXlzRWQvWkhxOEFBYUNvcUhCbzZhZ2l1cUNQZGNyOFFzM2J1eDJONDdQaXBwaHNrdnAzUFlHTk9oY3h6MlJiVDZLbnlhb054Z2NkY1k3RTIxbmMzVWw3Y1JOL2JYVXpuUGM5N2lTZFhFbWdyUWVaQjV6emJpV2JsNVZKYjR5R1E0elBtQjEvTEd4em1SdWlmN1JlNENqZnY5ZXFEMUszZ2l0NEk0SVdoa1VMV3h4dEhRTmFLQWZBZ3cvaGhqTCswYm5HMzFwTGJ0bnV5Nk1UUnVZSHNPN1Z1NENvUVZkclljdzRKZjNjZUx4N3N6Z0xtVHZZNFlxbVJoTkI5RVBlSFVvQ2RwQnBWQktOenovbHQ1YndpMHVPTlltSisrNW03eDhjNzZhYlFhUlBOZGFlelR5OWlEZFpiR3daTEYzV09tL2RYTVRvaWVwRzRVRHZTRHFneC9oZmhzdmJOeUY5bUlwSXIxNWlzNGhLMHRQYzJzWVkwdEJwVnAwMTdhSUt0L0Q4ako0bFNSbUNUK3d2dUdaU1NRc2QzSm1Zd25idXB0M2Q0ODFGZWlEMDlBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkF6K1dpeEdGdk1sSlNsdEU1N1FmcFA2TWI5WnhBUWVTOFFreUhIczdoY3hmUExyYmtyWkdYRGoyT2ZMN0xqMmRkanZRU2c5cGM1cldsemlBMENwSjBBQVFkRmxmMkY5RDMxbGN4WFVJSmFaWVh0a2J1SFVibWtpdXFCZTM5aFl3OTllM01WckNTR2lXWjdZMjdqMEc1eEFyb2c3VEpHSSs4TGdJNmJ0OVJ0cDFyWHlJSUVYSStQVFRpM2h5bHBKT1NRSW1UeE9lU09vMmgxVUV1OGpobHM1NHBuYklYeHZiSytvRzFwYVE0MU9nb0VHYngyTHdtTTRUa0xYRFhmMjJ5RU55NFQ5NUhMN1JqTzRib3cxdWlDTDRSZjRYQi9HbS9TUWFtK3krSnNDMFgxN0JhRjN1aWVWa2RmUnVJUWRsbmYyTjdGMzFuY1JYTUowN3lGN1pHK1RxMGtJTUh5ei9BSFI0ei9EUDZUMEczYm04TTY4TmsyL3RqZUE3VGJDVmhscjVObGQzeElQalAvOEF3V1IvcFp2NWJrR2E4SXY4TGcvalRmcElOVmZaYkZXRzAzMTVCYUIzdTkvSXlPdm8zRWVSQjIyMTNhM1VJbXRabVR3dTkyU0p3ZTA5dWhhU0VIYWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lQT2ZGckp4enlZdmpZblpiaTltYk5kelBjMWpXUkIyeHBjWGFVcnVkOVZCejRoeThVeUhEL3N0aGs3SjArTjJTV1VVZHhFWEZzWTJGalFIVlBzZEI1VUdwNFRuUm0rTldkNjUyNmNON3E1OHZleCt5NG44YjN2V2d6ZkRSL1lPYTVuamJ2WnRidjhBMTJQSFpROVdqNnBwOVZBNW1QNzl6WEM4YmFOMXJiSDdka0IxRkIwYWZxaW4xa0ZqelRqR1N6MS9aUnoza2R0eHVDajc2THZITWxlK3AvQjJVOTBDcnRLbEJtK1JjZDhKWU1WY0MydTRJYjFzYnpDK0c1Zk8vdkdqUU9ZSFNEVjNYUkJlY0l5RjFlK0d6bjNMekxKRkRjd2g3dFNXc0RnMnA4emRFRUh3OS8yd3YveGJ6K1dnbWVGd3VqNGYwdEN3WFpkY2ZaekpVTUVsVHQzVURqU3ZYUkJYMlBBK0xXY2NrL05iKzN1c3ZjU09kTEpMZHVpWnIwMmt1aGNUVFUxUVZXSmZnTVY0ajQ2UGkxNFpNZmV0TWQzQzF6bnNCSWRSdTUzVUNnY05UUW9KM2lQWlhsOXozQldkbk02M25uaDJDZG52TWFYdjN1Rk8wTXFndDc3d2c0cS9GdWdzMlNRWHpXL3NyMHlQYzR2SFRlMG5aVHkwYUVIUnd6TzNtVTRCazRiNXhmZDQrSzR0bnlPTlhPYUlpV2x4N1NLN2ZVZytPQTVUKzFlR0UyUjJoeHRmdEVqR25vWEEreUQ2U2d5K0FtOE83eUYrUjVma1pMM01YVG5PbWljMjZEWXhVN1FERTBWMDhob09nUVNMUE5jWXdYTE1kTnhTK2tseDE5SUlNallQRXdZd1BjR3RlMHl0YldtNm8xSjA2MEtEMk5BUUVCQVFFQkFRRUJBUUVCQVFFQkFKQUZUb0FnOHE0L2ljZnpqbHVheStUaU54aTRDSUxTUGM1Z05EUmhCWVduUnJha2ZoSU5WLzBzNEgvd0RXZit2Y2Y4eEJuZUFTTzQ3elBMY1VtZFNDWnhtc2E5dTBiaFN2YTZJNi9pb0xUeElnZmo3dkQ4cWhIdDR5NGJIZFU2bTNsTkQ4cGI5WkIxK0dzVDhsa00xeXVjSGRrSnpEYVY2aUNNai9BSU5iOVZCVmM3bHRMM24xbGkrUVhUN1hBTmdFakFDV3NkSWQzdE9kMlZjTnU3czh5RG5QTThKOExpYmwxaEZhM2w5TEc1dHN5T1UzUkVoYVExeExuU05ZQWRTZ3NmRG9nK0dsd0FkUUxzSDRDVUhWNGUvN1lYLzR0NS9MUWRYRHJxOXRQQ2E3dWJLb3VvbTNMb25ORlMwZzZ1SDRvMVFWbkVNUjRhWG1HWmU1eTlqbXlraGMrN2JkWExvWE5mdVB1dEQyRjJuYnJWQkhqeUhHYmp4THcwZkg0STRiRzNmM2JwWTI3QkpJZDFYRHRJNkFWUVcvaUZsRzRyeEF3T1FleDBrZHZDWHl0WUt1N3ZjOFBJSDRMU1NnMVdSOFErSjJtTWZmUjVHRzVPMnNWdkU4T2xjN3Niczk1djFnRUdkNEpqTHUyNERsNzI3YVdTWkpseGNNYVJUMk82SUR0ZnZqVStoQjg4S3hzdVQ4S2Jxd2gvZlRpNGJFRG9DOE9xMGVzaEJFNEZrZUNQeExjZG5iT3d0Y3RaRjBVN3J5R0ZoZlJ4b1MrUWU4UGRJSnJVSUxOMlo0VS9rbGppY0RnckhKenlQclBkd1JSTVpBMXJoN1llSTNidG8xMEk3TmRVSG9DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNENHVJSXJpQ1NDVUV4VE1kSElBUzBscmhRMGMwZ2pUdENDSGhjRmljSmFHMHhsdUxlM2M4eU9ZSE9mVjVBQkpjOHVkMEE3VUU5QlYzZkdNSGQ1ZURNVDIyN0pXMjBRM0RYeU1JMmtrVmExd2E3cjJoQk15R1BzOGpaVFdWNUdKcldkdTJXTWtpbzY5V2tFZXBCeGpjYlk0eXhpc2JHSVEyc0lJampCSnBVa25WeEpPcDdVSFJtZVA0WE5RdGh5bG95NVl5cFlYVkRtMTY3WHRJY0srWW9JT000SnhIR3lkN2FZeUpzblkrVGRNNFYwOWt5bDlQVWdsNHZqV0Z4VmhQWVdGdjNObmNGenBvdThrY0NYdERYYXZjNGlyUjJJUHJIOGV3K094Y21MczdmdXJDVVBENGQ3M1Y3d1VkN1RuRjJvODZEc3hHRnhtSXNSWTQ2SHViVnBjNFI3blAxY2FuVjVjZmpRVkZ4NGNjSnVMazNFbUxqRWhPNGhqNUkyVnJYM0dPYXo0a0V1VGh2R0h2c25qSHh4dXg3KzhzekNYUmJIMURxL3N5M2RxMGU5VkJJdk9QWWU4eWR2azdtM0VsOWFOTElKUzU0RFdtdFJ0QkRUN3g2aEJYeCtIdkRJNzM3WXpGUkNhdTRBbDVqQjgwUmQzZjVxQzludDRaN2VTM2xidWhsWVkzczFGV3VGQ05LVTBRUnNSaHNiaDdKdGxqb2U0dFd1TG14N25QMWNhblY1Y2ZqUVFzdnd2aStZbTcvSVkrT1djKzlLMHVpZTZtbnRPakxDNzFvSk9HNDVnOExHNW1NczQ3WVBvSHZiVXZjQjBEbnVKY2ZXVUZpZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0QvLzJRPT0nO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuYmVmb3JlKCAnPHNwYW4gY2xhc3M9XCJzcGlubmVyIHdwb25pb24tc3Bpbm5lclwiPjwvc3Bhbj4nICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNob3dfcHJldmlldyggZSApICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBPRW1iZWQgUHJldmlldy5cblx0ICovXG5cdHNob3dfcHJldmlldygpIHtcblx0XHRsZXQgJHZhbHVlID0gdGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkudmFsKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdCR3cG9uaW9uLmFqYXgoICdvZW1iZWQtcHJldmlldycsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR2YWx1ZTogJHZhbHVlLFxuXHRcdFx0fVxuXHRcdH0sICggcmVzICkgPT4ge1xuXHRcdFx0aWYoIGZhbHNlID09PSByZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmh0bWwoIHJlcy5kYXRhICk7XG5cdFx0XHR9XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5yZW1vdmVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdvZW1iZWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NlbGVjdCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3QyJywge30gKTtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZy5kcm9wZG93blBhcmVudCApICkge1xuXHRcdFx0JGFyZy5kcm9wZG93blBhcmVudCA9IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50ICk7XG5cdFx0XHRpZiggJGFyZy5kcm9wZG93blBhcmVudC5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdCRhcmcuZHJvcGRvd25QYXJlbnQgPSBqUXVlcnkoICdib2R5JyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCB0aGlzLm9wdGlvbiggJ2FqYXgnICkgKSB7XG5cdFx0XHQkYXJnLmFqYXggPSB7XG5cdFx0XHRcdHByb2Nlc3NSZXN1bHRzOiAoIGRhdGEgKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHRlcm1zID0gW107XG5cdFx0XHRcdFx0aWYoIGRhdGEgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCggZGF0YSwgZnVuY3Rpb24oIGlkLCB0ZXh0ICkge1xuXHRcdFx0XHRcdFx0XHR0ZXJtcy5wdXNoKCB7IGlkOiBpZCwgdGV4dDogdGV4dCB9ICk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRyZXN1bHRzOiB0ZXJtc1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6ICggcGFyYW1zICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRxOiBwYXJhbXMudGVybSxcblx0XHRcdFx0XHRcdHF1ZXJ5X2FyZ3M6IHRoaXMub3B0aW9uKCAncXVlcnlfYXJncycgKSxcblx0XHRcdFx0XHRcdHF1ZXJ5X29wdGlvbnM6IHRoaXMub3B0aW9uKCAncXVlcnlfb3B0aW9ucycgKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0cmFuc3BvcnQ6ICggcGFyYW1zLCBzdWNjZXNzLCBmYWlsdXJlICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFqYXgoICdhamF4LXdwLXF1ZXJ5LWRhdGEnLCB7XG5cdFx0XHRcdFx0XHRkYXRhOiBwYXJhbXMuZGF0YSxcblx0XHRcdFx0XHRcdG9uU3VjY2Vzczogc3VjY2Vzcyxcblx0XHRcdFx0XHRcdG9uRXJyb3I6IGZhaWx1cmUsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdCRhcmcgPSB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmVsZW1lbnQuc2VsZWN0MiggJGFyZyApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzZWxlY3QyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dmFyICR0aGlzICAgICA9IHRoaXMuZWxlbWVudCxcblx0XHRcdCRlbmFibGVkICA9ICR0aGlzLmZpbmQoICcud3Bvbmlvbi1lbmFibGVkJyApLFxuXHRcdFx0JGRpc2FibGVkID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWRpc2FibGVkJyApO1xuXG5cdFx0JGVuYWJsZWQuc29ydGFibGUoIHtcblx0XHRcdGNvbm5lY3RXaXRoOiAkZGlzYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdHVwZGF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0bGV0ICRlbCA9IHVpLml0ZW0uZmluZCggJ2lucHV0JyApO1xuXHRcdFx0XHRpZiggdWkuaXRlbS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tZW5hYmxlZCcgKSApIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2Rpc2FibGVkJywgJ2VuYWJsZWQnICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwuYXR0ciggJ25hbWUnLCAkZWwuYXR0ciggJ25hbWUnICkucmVwbGFjZSggJ2VuYWJsZWQnLCAnZGlzYWJsZWQnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkdGhpcy50cmlnZ2VyKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBhdm9pZCBjb25mbGljdFxuXHRcdCRkaXNhYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRlbmFibGVkLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICd1aS1zb3J0YWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc29ydGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzdWJoZWFkaW5nJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzd2l0Y2hlcicsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndGV4dCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndGV4dGFyZWEnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBjc3NfdW5pdHMgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZm9udF93ZWlnaHRfc3R5bGUgPSBmYWxzZTtcblx0XHRsZXQgJGVsICAgICAgICAgICAgICAgID0gdGhpcy5lbGVtZW50O1xuXHRcdGxldCAkcHJldmlldyAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZvbnQtcHJldmlldycgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgICAgICAgID0gdGhpcztcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0XG5cdFx0XHRcdCRmb250X2ZpZWxkICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicgKSxcblx0XHRcdFx0JGZvbnQgICAgICAgICAgICAgID0gJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkudmFsKCksXG5cdFx0XHRcdCRmb250X3dlaWdodF9zdHlsZSA9ICR0aGlzLmZvbnRfc3R5bGUoICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLnZhbCgpICksXG5cdFx0XHRcdCR0YWcgICAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC10YWcgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkY29sb3IgICAgICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWZpZWxkLWNvbG9yX3BpY2tlciBpbnB1dC53cC1jb2xvci1waWNrZXInICkudmFsKCksXG5cdFx0XHRcdCRhbGlnbiAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1hbGlnbiBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRmb250U2l6ZSAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1zaXplIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGluZUhlaWdodCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGluZS1oZWlnaHQgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdC8vJGJhY2tVUEZvbnQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2t1cC1mb250IHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0Ly8kZGlyZWN0aW9uICAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtZGlyZWN0aW9uIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxldHRlci1zcGFjaW5nIGlucHV0JyApLnZhbCgpLFxuXHRcdFx0XHRocmVmICAgICAgICAgICAgICAgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PScgKyAkZm9udCArICc6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQsXG5cdFx0XHRcdGh0bWwgICAgICAgICAgICAgICA9ICc8bGluayBocmVmPVwiJyArIGhyZWYgKyAnXCIgY2xhc3M9XCJ3cHNmLWZvbnQtcHJldmlldy0nICsgJHRoaXMuaWQoKSArICdcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz4nO1xuXG5cdFx0XHRpZiggalF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0alF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkuYXR0ciggJ2hyZWYnLCBocmVmICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoICdoZWFkJyApLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGZvbnRTaXplID09PSAnJyB8fCAkZm9udFNpemUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGZvbnRTaXplID0gJzE4cHgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGxldHRlclNwYWNpbmcgPT09ICcnIHx8ICRsZXR0ZXJTcGFjaW5nID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nID0gJzFweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGluZUhlaWdodCA9PT0gJycgfHwgJGxpbmVIZWlnaHQgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxpbmVIZWlnaHQgPSAnMjBweCc7XG5cdFx0XHR9XG5cblxuXHRcdFx0bGV0ICRfYXR0cnMgPSAnIGZvbnQtZmFtaWx5OicgKyAkZm9udCArICc7ICcgK1xuXHRcdFx0XHQnIGZvbnQtd2VpZ2h0OicgKyAkZm9udF93ZWlnaHRfc3R5bGUud2VpZ2h0ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC1zdHlsZTonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLnN0eWxlICsgJzsgJyArXG5cdFx0XHRcdCcgdGV4dC1hbGlnbjonICsgJGFsaWduICsgJzsgJyArXG5cdFx0XHRcdCcgY29sb3I6ICcgKyAkY29sb3IgKyAnOycgK1xuXHRcdFx0XHQnIGZvbnQtc2l6ZTonICsgY3NzX3VuaXRzKCAkZm9udFNpemUgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxldHRlci1zcGFjaW5nOicgKyBjc3NfdW5pdHMoICRsZXR0ZXJTcGFjaW5nICkgKyAnOyAnICtcblx0XHRcdFx0JyBsaW5lLWhlaWdodDonICsgY3NzX3VuaXRzKCAkbGluZUhlaWdodCApICsgJzsgJztcblxuXG5cdFx0XHRsZXQgJHRleHQgPSAkcHJldmlldy50ZXh0KCk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JHByZXZpZXcuYXBwZW5kKCBqUXVlcnkoICc8JyArICR0YWcgKyAnPicgKyAkdGV4dCArICc8LycgKyAkdGFnICsgJyA+JyApICk7XG5cdFx0XHQkcHJldmlldy5maW5kKCAkdGFnICkuYXR0ciggJ3N0eWxlJywgJF9hdHRycyApO1xuXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgUHJvcGVyIFZhbGlkIEZvbnQgU3R5bGVzLlxuXHQgKiBAcGFyYW0gJGluZm9cblx0ICogQHJldHVybnMge3t3ZWlnaHQ6IHN0cmluZywgc3R5bGU6IHN0cmluZ319XG5cdCAqL1xuXHRmb250X3N0eWxlKCAkaW5mbyApIHtcblx0XHRsZXQgJHdlaWdodF92YWwgPSAnNDAwJyxcblx0XHRcdCRzdHlsZV92YWwgID0gJ25vcm1hbCc7XG5cblx0XHRzd2l0Y2goICRpbmZvICkge1xuXHRcdFx0Y2FzZSAnMTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICcxMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzMwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzMwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc1MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzkwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzkwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpdGFsaWMnOlxuXHRcdFx0XHQkc3R5bGVfdmFsID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4geyB3ZWlnaHQ6ICR3ZWlnaHRfdmFsLCBzdHlsZTogJHN0eWxlX3ZhbCB9O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndHlwb2dyYXBoeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRhZGQgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b24nICksXG5cdFx0XHQkaW5wdXQgICAgPSAkZWxlbS5maW5kKCAnaW5wdXRbdHlwZT10ZXh0XScgKSxcblx0XHRcdCRzZXR0aW5ncyA9ICR0aGlzLm9wdGlvbiggJ3NldHRpbmdzJywge1xuXHRcdFx0XHRmcmFtZV90aXRsZTogJ1VwbG9hZCcsXG5cdFx0XHRcdHVwbG9hZF90eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRpbnNlcnRfdGl0bGU6ICdVc2UnLFxuXHRcdFx0fSApLCB3cF9tZWRpYV9mcmFtZTtcblxuXHRcdCRhZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHdwX21lZGlhX2ZyYW1lICkge1xuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xuXHRcdFx0XHR0aXRsZTogJHNldHRpbmdzLmZyYW1lX3RpdGxlLFxuXHRcdFx0XHRsaWJyYXJ5OiB7XG5cdFx0XHRcdFx0dHlwZTogJHNldHRpbmdzLnVwbG9hZF90eXBlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRcdHRleHQ6ICRzZXR0aW5ncy5pbnNlcnRfdGl0bGUsXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0d3BfbWVkaWFfZnJhbWUub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSB3cF9tZWRpYV9mcmFtZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpO1xuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmF0dHJpYnV0ZXMudXJsICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gKTtcblx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd1cGxvYWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3dwX2VkaXRvcicsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHRleHRhcmVhID0gJGVsZW0uZmluZCggJ3RleHRhcmVhJyApO1xuXHRcdCRlbGVtLmZpbmQoICcjd3Bvbmlvbi13cC1saW5rLXBpY2tlciA+IGJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGV4dGFyZWEudmFsKCAnJyApO1xuXHRcdFx0aWYoICF3aW5kb3cud3BMaW5rICkge1xuXHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHR0aXRsZTogJHdwb25pb24udGV4dCggJ3dwX2xpbmtfZXJyb3JfdGl0bGUnLCAnV1AgTGluayBKUyBMaWIgTm90IEZvdW5kJyApLFxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy53cExpbmsub3BlbiggJHRleHRhcmVhLmF0dHIoICdpZCcgKSApO1xuXHRcdH0gKTtcblxuXG5cdFx0JHRleHRhcmVhLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi5leGFtcGxlX291dHB1dCBzcGFuLnZhbHVlJyApLmh0bWwoIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdXJsJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkudmFsKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0aXRsZScgKS52YWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQjdGFyZ2V0JyApLnZhbCggJGRhdGEuYXR0ciggJ3RhcmdldCcgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd3cF9saW5rcycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi4vY29yZS9kZWJ1Zyc7XG5cbi8qKlxuICogV1BPbmlvbiBEZXBlbmRlbmN5IEhlbHBlciBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIFdQT25pb24gRGVwZW5kZW5jeSBIZWxwZXIgQ2xhc3MuXG5cdCAqIEBwYXJhbSAkc2VsZWN0b3Jcblx0ICogQHBhcmFtICRjb250eHRcblx0ICogQHBhcmFtICRjb25maWdcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIERlcGVuZGVuY3kgV29ya2VyLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGRlcCA9IHRoaXMub3B0aW9uKCAnZGVwZW5kZW5jeScgKTtcblx0XHRmb3IoIGxldCAka2V5IGluICRkZXAuY29udHJvbGxlciApIHtcblx0XHRcdGlmKCAkZGVwLmNvbnRyb2xsZXIuaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiAkZGVwLmNvbmRpdGlvbi5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmICRkZXAudmFsdWUuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0bGV0ICRjb250cm9sbGVyID0gJGRlcC5jb250cm9sbGVyIFsgJGtleSBdLFxuXHRcdFx0XHRcdCRjb25kaXRpb24gID0gJGRlcC5jb25kaXRpb24gWyAka2V5IF0sXG5cdFx0XHRcdFx0JHZhbHVlICAgICAgPSAkZGVwLnZhbHVlIFsgJGtleSBdLFxuXHRcdFx0XHRcdCRmaWVsZCAgICAgID0gJ1tkYXRhLWRlcGVuZC1pZD1cIicgKyAkY29udHJvbGxlciArICdcIl0nO1xuXHRcdFx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnLm5lc3RhYmxlICkge1xuXHRcdFx0XHRcdGxldCAkSU5QVVQgPSB0aGlzLmNvbmZpZy5wYXJlbnQuZmluZCggJ1tkYXRhLWRlcGVuZC1pZD0nICsgJGNvbnRyb2xsZXIgKyAnXScgKTtcblx0XHRcdFx0XHRpZiggJElOUFVULmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkZmllbGQgPSAnW2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICR3cG9uaW9uLmZpZWxkSUQoICRJTlBVVCApICsgJ1wiXTppbnB1dCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0X2NvbnR4dCggdGhpcy5jb250eHQuY3JlYXRlUnVsZSggJGZpZWxkLCAkY29uZGl0aW9uLCAkdmFsdWUgKSApO1xuXHRcdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmluY2x1ZGUoIHRoaXMuZWxlbWVudCApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCB7ICdEZXBlbmRlbmN5JzogJGRlcCwgJ05lc3RhYmxlIERlcGVuZGVuY3knOiB0aGlzLmNvbmZpZy5uZXN0YWJsZSB9ICk7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG4iLCIvKiBnbG9iYWwgYXJndW1lbnRzOnRydWUgKi9cbi8qIGdsb2JhbCBjb25zb2xlOnRydWUgKi9cbi8qIGdsb2JhbCB0aXBweTp0cnVlICovXG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCBqUXVlcnkgKSA9PiB7XG5cdC8qKlxuXHQgKiBXUE9uaW9uIFJlbGF0ZWQgRnVuY3Rpb25zLlxuXHQgKi9cblx0JC5mbi5leHRlbmQoIHtcblx0XHQvKipcblx0XHQgKiBBbmltYXRlIENTUyBSZWxhdGVkIEZ1bmN0aW9ucy5cblx0XHQgKi9cblx0XHRhbmltYXRlQ3NzOiBmdW5jdGlvbiggYW5pbWF0aW9uTmFtZSwgY2FsbGJhY2sgKSB7XG5cdFx0XHRsZXQgYW5pbWF0aW9uRW5kID0gKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdGxldCBhbmltYXRpb25zID0ge1xuXHRcdFx0XHRcdGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG5cdFx0XHRcdFx0T0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdFx0V2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRmb3IoIGxldCB0IGluIGFuaW1hdGlvbnMgKSB7XG5cdFx0XHRcdFx0aWYoIGVsLnN0eWxlWyB0IF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBhbmltYXRpb25zWyB0IF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICkoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICkgKTtcblxuXHRcdFx0dGhpcy5hZGRDbGFzcyggJ2FuaW1hdGVkICcgKyBhbmltYXRpb25OYW1lICkub25lKCBhbmltYXRpb25FbmQsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCB0aGlzICkucmVtb3ZlQ2xhc3MoICdhbmltYXRlZCAnICsgYW5pbWF0aW9uTmFtZSApO1xuXHRcdFx0XHRpZiggdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCAkKCB0aGlzICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQSBDdXN0b20gV3JhcCBDbGFzcyBUbyBIYW5kbGUgVGlwcHkgSW5zdGFuY2Vcblx0XHQgKiBAcGFyYW0gJGFyZ3VtZW50c1xuXHRcdCAqIEByZXR1cm5zIHsqfVxuXHRcdCAqL1xuXHRcdHRpcHB5OiBmdW5jdGlvbiggJGFyZ3VtZW50cyApIHtcblx0XHRcdGxldCB0aXBweV9oZWxwZXIgPSB7XG5cdFx0XHRcdGNyZWF0ZV9pbnN0YW5jZTogZnVuY3Rpb24oICRlbGVtLCAkYXJndW1lbnRzICkge1xuXHRcdFx0XHRcdCRhcmd1bWVudHMgPSAoIHR5cGVvZiAkYXJndW1lbnRzID09PSAndW5kZWZpbmVkJyApID8ge30gOiAkYXJndW1lbnRzO1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0bGV0ICRfaW5zdGFuY2VfaWQgPSAnVGlwcHknICsgd2luZG93Lndwb25pb24uY29yZS5yYW5kX2lkKCk7XG5cdFx0XHRcdFx0XHQkZWxlbS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcsICRfaW5zdGFuY2VfaWQgKTtcblxuXHRcdFx0XHRcdFx0bGV0ICR0aXRsZSAgICAgID0gJGVsZW0uYXR0ciggJ3RpdGxlJyApO1xuXHRcdFx0XHRcdFx0bGV0ICRkYXRhX3RpcHB5ID0gJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHknICk7XG5cblx0XHRcdFx0XHRcdGlmKCAkdGl0bGUgJiYgJHRpdGxlICE9PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0aWYoIHR5cGVvZiAkYXJndW1lbnRzLmNvbnRlbnQgPT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRcdCRhcmd1bWVudHMuY29udGVudCA9ICR0aXRsZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiggJGRhdGFfdGlwcHkgJiYgJGRhdGFfdGlwcHkgIT09ICcnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mICRhcmd1bWVudHMuY29udGVudCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0XHRcdFx0JGFyZ3VtZW50cy5jb250ZW50ID0gJGRhdGFfdGlwcHk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0d2luZG93WyAkX2luc3RhbmNlX2lkIF0gPSB0aXBweSggJGVsZW1bIDAgXSwgJGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0X2luc3RhbmNlOiBmdW5jdGlvbiggJGVsZW0gKSB7XG5cdFx0XHRcdFx0aWYoICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCAkX2luc3RhbmNlX2lkID0gJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICk7XG5cdFx0XHRcdFx0cmV0dXJuICggdW5kZWZpbmVkICE9PSB3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSApID8gd2luZG93WyAkX2luc3RhbmNlX2lkIF0gOiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0aWYoIHRoaXMubGVuZ3RoID4gMSApIHtcblx0XHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aXBweV9oZWxwZXIuY3JlYXRlX2luc3RhbmNlKCBqUXVlcnkoIHRoaXMgKSwgJGFyZ3VtZW50cyApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0ICRzdGF0dXMgPSB0aXBweV9oZWxwZXIuY3JlYXRlX2luc3RhbmNlKCBqUXVlcnkoIHRoaXMgKSwgJGFyZ3VtZW50cyApO1xuXHRcdFx0XHRyZXR1cm4gKCB0cnVlID09PSAkc3RhdHVzICkgPyB0aXBweV9oZWxwZXIuZ2V0X2luc3RhbmNlKCBqUXVlcnkoIHRoaXMgKSApIDogZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgQW4gQWN0aXZlIGluc3RhbmNlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGlwcHlfZ2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRsZXQgJF9pbnN0YW5jZV9pZCA9IGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApO1xuXHRcdFx0cmV0dXJuICggdW5kZWZpbmVkICE9PSB3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSApID8gd2luZG93WyAkX2luc3RhbmNlX2lkIF0gOiBmYWxzZTtcblx0XHR9LFxuXHR9ICk7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgQSBBYnN0cmFjdCBDbGFzcyBJbnN0YW5jZS5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkY29udHh0XG5cdCAqIEByZXR1cm5zIHt7YWpheCgqPSwgKj0pOiAqLCBqc19lcnJvcigqKTogdm9pZCwgaW5pdF9maWVsZCgqPSwgKik6IHZvaWQsIHNldF9hcmdzKCopOiAqLCBqc192YWxpZGF0ZV9lbGVtKCo9LCAqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGlkKCk6ICosIHBsdWdpbl9pZCgpOiAqLCBmaWVsZF9kZWJ1ZygpOiAodW5kZWZpbmVkKSwgaGFuZGxlX2FyZ3MoKj0sICo9KTogKiwgbWF5YmVfanNfdmFsaWRhdGVfZWxlbSgqPSwgKj0pOiB2b2lkLCBnZXRfZmllbGRfcGFyZW50X2J5X2lkKCo9KTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIG9wdGlvbnMoKTogKiwganNfdmFsaWRhdG9yKCk6IHZvaWQsIGluaXQoKSwgcmVsb2FkKCk6ICosIG1vZHVsZSgpOiAqLCBzZXRfY29udHh0KCopOiAqLCBjb250eHQ6ICosIGVsZW1lbnQ6ICosIGhvb2s6ICosIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKn18Knx3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdH1cblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX2ZpZWxkID0gKCAkZWxlbSwgJGNvbnR4dCA9IHt9ICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSwgJGNvbnR4dCApO1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFdQT25pb24gTm90aWNlcy5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0d2luZG93Lndwb25pb25fbm90aWNlID0gKCAkZWxlbSApID0+IHtcblx0XHRpZiggJGVsZW0uZmluZCggJy53cG9uaW9uLXJlbW92ZScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0JGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCAkX2VsID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1yZW1vdmUnICkudGlwcHkoIHtcblx0XHRcdFx0XHRhcHBlbmRUbzogKCkgPT4galF1ZXJ5KCB0aGlzIClbIDAgXSxcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24tcmVtb3ZlJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkX2VsLnNsaWRlVXAoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkX2VsLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdFx0cmV0dXJuICRlbGVtO1xuXHRcdH1cblxuXHRcdGxldCAkYXV0byA9ICRlbGVtLmF0dHIoICdkYXRhLWF1dG9jbG9zZScgKTtcblx0XHRpZiggJGF1dG8gKSB7XG5cdFx0XHQkYXV0byA9IHBhcnNlSW50KCAkYXV0byApO1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHQkZWxlbS5zbGlkZVVwKCAnc2xvdycsICgpID0+IHtcblx0XHRcdFx0XHQkZWxlbS5yZW1vdmUoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSwgJGF1dG8gKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEJhc2ljIFdQT25pb24gSlMgU2V0dXAuXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9zZXR1cCA9ICgpID0+IHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggd2luZG93Lndwb25pb24uY29yZS5zZXR0aW5nc19hcmdzICkgKSB7XG5cdFx0XHRsZXQgJGNvcmUgPSB3aW5kb3cud3Bvbmlvbi5jb3JlLndpbmRvd0FyZ3MoICd3cG9uaW9uX2NvcmUnLCBmYWxzZSApO1xuXHRcdFx0bGV0ICR0YW5zID0gd2luZG93Lndwb25pb24uY29yZS53aW5kb3dBcmdzKCAnd3Bvbmlvbl9pbDhuJywgZmFsc2UgKTtcblx0XHRcdGlmKCBmYWxzZSA9PT0gJGNvcmUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy53cG9uaW9uLmNvcmUuc2V0dGluZ3NfYXJncyAgICA9ICRjb3JlO1xuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS50ZXh0ICAgICAgICAgICAgID0gJHRhbnM7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLmRlYnVnX2luZm8gICAgICAgPSBudWxsO1xuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS5maWVsZF9kZWJ1Z19pbmZvID0gbnVsbDtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBXaXRoIEEgRmllbGQgQ2FsbGJhY2sgSG9vay5cblx0ICogQHBhcmFtICR0eXBlXG5cdCAqIEBwYXJhbSAkY2FsbGJhY2tcblx0ICogQHBhcmFtICRtb2R1bGVcblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkID0gKCAkdHlwZSwgJGNhbGxiYWNrLCAkbW9kdWxlID0gJycgKSA9PiB7XG5cdFx0JG1vZHVsZSA9ICggJycgPT09ICRtb2R1bGUgKSA/ICcnIDogJG1vZHVsZSArICdfJztcblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5hZGRBY3Rpb24oICd3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICR0eXBlLCAnd3Bvbmlvbl9jb3JlJywgKCAkZWxlbSApID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdCRjYWxsYmFjayggJGVsZW0gKTtcblx0XHRcdH0gY2F0Y2goIGUgKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCBhcmd1bWVudHMsICcgXFxuJyArIGUgKyAnICBcXG5Gb3IgOiB3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICR0eXBlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiBVc2VkIG91dHNpZGUgb2YgV1BPbmlvbiBUbyBDcmVhdGVcblx0ICogQHBhcmFtICRpbml0X21ldGhvZFxuXHQgKiBAcGFyYW0gJG1ldGhvZHNcblx0ICogQHJldHVybnMge3tpbml0OiAqLCBuZXcoKTogJGNsYXNzLCBwcm90b3R5cGU6ICRjbGFzc319XG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9jcmVhdGVfZmllbGQgPSAoICRpbml0X21ldGhvZCwgJG1ldGhvZHMgPSBmYWxzZSApID0+IHtcblx0XHRsZXQgJG9yZ19jbGFzcyA9IHJlcXVpcmUoICcuLi9jb3JlL2ZpZWxkJyApLmRlZmF1bHQ7XG5cdFx0bGV0ICRjbGFzcyAgICAgPSBjbGFzcyBleHRlbmRzICRvcmdfY2xhc3Mge1xuXHRcdH07XG5cblx0XHQkY2xhc3MucHJvdG90eXBlLmluaXQgPSAkaW5pdF9tZXRob2Q7XG5cblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJG1ldGhvZHMgKSApIHtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1ldGhvZHMgKSB7XG5cdFx0XHRcdGlmKCAkbWV0aG9kcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdCRjbGFzcy5wcm90b3R5cGVbICRrZXkgXSA9ICRtZXRob2RzWyAka2V5IF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICRjbGFzcztcblx0fTtcblxuXHQvKipcblx0ICogVHJpZ2dlcnMgQSBGaWVsZCBKUyBGdW5jdGlvbiBUbyBSZW5kZXIgaXQgUHJvcGVybHlcblx0ICogQHBhcmFtICRmaWVsZF90eXBlXG5cdCAqIEBwYXJhbSAkYXJndW1lbnRcblx0ICogQHBhcmFtICRtb2R1bGVcblx0ICogQHBhcmFtICRsb2dfZXJyXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9pbml0X2ZpZWxkID0gKCAkZmllbGRfdHlwZSwgJGFyZ3VtZW50LCAkbW9kdWxlID0gJycsICRsb2dfZXJyID0gdHJ1ZSApID0+IHtcblx0XHQkbW9kdWxlID0gKCAnJyA9PT0gJG1vZHVsZSApID8gJycgOiAkbW9kdWxlICsgJ18nO1xuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5ob29rcy5oYXNBY3Rpb24oICd3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICRmaWVsZF90eXBlICkgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25faW5pdF8nICsgJG1vZHVsZSArICdmaWVsZF8nICsgJGZpZWxkX3R5cGUsICRhcmd1bWVudCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiggdHJ1ZSA9PT0gJGxvZ19lcnIgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdXUE9uaW9uIEZpZWxkIFR5cGUgOiAnICsgJGZpZWxkX3R5cGUgKyAnIEluaXQgRnVuY3Rpb24gTm90IEZvdW5kJywgJ1xcbkFjdGlvbiBVc2VkIDogd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkZmllbGRfdHlwZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIGpRdWVyeSApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuLyoqXG4gKiBJbWFnZSBQT1BVUCBWaWV3IENsYXNzLlxuICovXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSGFuZGxlcyBJbWFnZSBQT1BVUCBWaWV3LlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGltYWdlID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICkgKSApID8gdGhpcy5lbGVtZW50LmF0dHIoICdzcmMnICkgOiB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICk7XG5cdFx0c3dhbCgge1xuXHRcdFx0aW1hZ2VVcmw6ICRpbWFnZSxcblx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuXHRcdFx0YmFja2Ryb3A6IGByZ2JhKDAsMCwwLDAuNDQpYFxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3BvcHVwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgeyByYW5kX21kNSB9IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuXG4vKipcbiAqIFdQIEVkaXRvciBIZWxwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIFdQIEVkaXRvciBIZWxwZXJcblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRtY2VfZWRpdG9yICA9IHRpbnlNQ0VQcmVJbml0Lm1jZUluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcblx0XHRcdFx0JHF1aWNrX3RhZ3MgID0gdGlueU1DRVByZUluaXQucXRJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRORVdfSUQgICAgICA9ICd3cG9uaW9uLXdwLWVkaXRvci0nICsgcmFuZF9tZDUoKSxcblx0XHRcdFx0JHRleHRBcmVhICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5jbG9uZSgpLFxuXHRcdFx0XHQkYWN0dWFsX0lEICAgPSAkdGV4dEFyZWEuYXR0ciggJ2lkJyApLFxuXHRcdFx0XHQkYWN0dWFsX2h0bWwgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoKSxcblx0XHRcdFx0JHJlZ2V4ICAgICAgID0gbmV3IFJlZ0V4cCggJGFjdHVhbF9JRCwgXCJnXCIgKTtcblx0XHRcdCRhY3R1YWxfaHRtbCAgICAgPSAkYWN0dWFsX2h0bWwucmVwbGFjZSggJHJlZ2V4LCAkTkVXX0lEICk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCggJGFjdHVhbF9odG1sICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLnBhcmVudCgpLmFwcGVuZCggJHRleHRBcmVhICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhOm5vdCgjJyArICRhY3R1YWxfSUQgKyAnKScgKS5yZW1vdmUoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuYXR0ciggJ2lkJywgJE5FV19JRCApO1xuXG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRtY2VfZWRpdG9yICkgKSB7XG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcblx0XHRcdFx0dGlueW1jZS5pbml0KCAkbWNlX2VkaXRvciApO1xuXHRcdFx0XHR0aW55TUNFLmV4ZWNDb21tYW5kKCAnbWNlQWRkRWRpdG9yJywgZmFsc2UsICcjJyArICRORVdfSUQgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkcXVpY2tfdGFncyApICkge1xuXHRcdFx0XHQkcXVpY2tfdGFncy5pZCA9ICRORVdfSUQ7XG5cdFx0XHRcdHF1aWNrdGFncyggJHF1aWNrX3RhZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBUb29sVGlwXG4gKi9cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBIYW5kbGUgRWFjaCBBbmQgRXZlcnkgU2luZ2xlIEZpZWxkIFRvb2xUaXAuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkZmlkICAgICAgICAgPSB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZmllbGQtanNpZCcgKTtcblx0XHRsZXQgJHRvb2x0aXBfa2V5ID0gZmFsc2U7XG5cdFx0aWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24taGVscCcgKSApIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cG9uaW9uLWhlbHAnO1xuXHRcdH0gZWxzZSBpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi13cmFwLXRvb2x0aXAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3JhcF90b29sdGlwJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJGZpZCArICd0b29sdGlwJztcblx0XHR9XG5cblx0XHRsZXQgJGFyZyA9ICggdHJ1ZSA9PT0gJHdwb25pb24udmFsaWRfanNvbiggJGZpZCApICkgPyBKU09OLnBhcnNlKCAkZmlkICkgOiB0aGlzLm9wdGlvbiggJHRvb2x0aXBfa2V5LCBmYWxzZSApO1xuXG5cdFx0Y29uc3Qgc3RhdGUgPSB7XG5cdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcblx0XHRcdGNhbkZldGNoOiB0cnVlXG5cdFx0fTtcblxuXHRcdGlmKCBmYWxzZSA9PT0gJGFyZyApIHtcblx0XHRcdGxldCAkY2xhc3NUb0NoZWNrID0gWyAnZGF0YS10aXBweScsICdkYXRhLXRpcHB5LWFyZ3MnLCAndGlwcHktYXJncycgXTtcblx0XHRcdGxldCAkZm91bmQgICAgICAgID0gZmFsc2U7XG5cdFx0XHRmb3IoIGxldCAkayBpbiAkY2xhc3NUb0NoZWNrICkge1xuXHRcdFx0XHRsZXQgJGF0dHIgPSB0aGlzLmVsZW1lbnQuYXR0ciggJGNsYXNzVG9DaGVja1sgJGsgXSApO1xuXHRcdFx0XHRpZiggJGF0dHIgKSB7XG5cdFx0XHRcdFx0aWYoICR3cG9uaW9uLnZhbGlkX2pzb24oICRhdHRyICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJnICAgPSBKU09OLnBhcnNlKCAkYXR0ciApO1xuXHRcdFx0XHRcdFx0JGZvdW5kID0gJGNsYXNzVG9DaGVja1sgJGsgXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAkYXR0ciwgZmFsc2UgKSApIHtcblx0XHRcdFx0XHRcdCRhcmcgICA9IHRoaXMub3B0aW9uKCAkYXR0ciwgZmFsc2UgKTtcblx0XHRcdFx0XHRcdCRmb3VuZCA9ICRjbGFzc1RvQ2hlY2tbICRrIF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggJGFyZyApIHtcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcblx0XHRcdGlmKCAkYXJnLmltYWdlICE9PSB1bmRlZmluZWQgJiYgJGFyZy5pbWFnZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdGxldCAkaW1hZ2UgICAgICAgICAgPSAkYXJnLmltYWdlO1xuXHRcdFx0XHQkYXJnLmludGVyYWN0aXZlICAgID0gdHJ1ZTtcblx0XHRcdFx0JGFyZy5jb250ZW50ICAgICAgICA9ICdMb2FkaW5nLi4uJztcblx0XHRcdFx0Ly8kYXJnLmh0bWwgICAgICAgICAgID0gJyN3cG90cGltZyc7XG5cdFx0XHRcdCRhcmcudXBkYXRlRHVyYXRpb24gPSAyMDAwO1xuXHRcdFx0XHQkYXJnLm9uU2hvdyAgICAgICAgID0gYXN5bmMgZnVuY3Rpb24oIHRpcCApIHtcblx0XHRcdFx0XHRpZiggc3RhdGUuaXNGZXRjaGluZyB8fCAhc3RhdGUuY2FuRmV0Y2ggKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoICAgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCAkaW1hZ2UgKTtcblx0XHRcdFx0XHRcdGNvbnN0IGJsb2IgICAgID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXHRcdFx0XHRcdFx0Y29uc3QgdXJsICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdFx0XHRpZiggdGlwLnN0YXRlLmlzVmlzaWJsZSApIHtcblx0XHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICc8ZGl2IHN0eWxlPVwibWluLXdpZHRoOjI1cHg7bWluLWhlaWdodDoyNXB4O1wiPjxpbWcgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1wiIHNyYz1cIicgKyB1cmwgKyAnXCIvPjwvZGl2PicgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoIGBGZXRjaCBmYWlsZWQuICR7ZX1gICk7XG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdCRhcmcub25IaWRkZW4gICAgICAgPSAoIHRpcCApID0+IHtcblx0XHRcdFx0XHRzdGF0ZS5jYW5GZXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0dGlwLnNldENvbnRlbnQoICdMb2FkaW5nLi4uJyApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLnBvcHBlck9wdGlvbnMgID0ge1xuXHRcdFx0XHRcdG1vZGlmaWVyczoge1xuXHRcdFx0XHRcdFx0cHJldmVudE92ZXJmbG93OiB7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aGlkZToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYXJnID0ge307XG5cdFx0fVxuXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmcuYXBwZW5kVG8gKSApIHtcblx0XHRcdCRhcmcuYXBwZW5kVG8gPSAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyB0aGlzLmlkKCkgKyAnXScgKVsgMCBdO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0ZGVsZXRlICRhcmcuaW1hZ2U7XG5cdFx0ZGVsZXRlICRhcmcuaWNvbjtcblx0XHR0aGlzLmVsZW1lbnQudGlwcHkoIHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcsICR0b29sdGlwX2tleSApICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0b29sdGlwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJyNidWxrX2VkaXQnLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGZpbmFsX2FyZ3MgPSB7IHBvc3RfaWRzOiBbXSB9LFxuXHRcdFx0XHQkYnVsa19lZGl0ICA9ICQoICcjYnVsay1lZGl0JyApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcjYnVsay10aXRsZXMnICkuY2hpbGRyZW4oKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JGZpbmFsX2FyZ3MucG9zdF9pZHMucHVzaCggJCggdGhpcyApLmF0dHIoICdpZCcgKS5yZXBsYWNlKCAvXih0dGxlKS9pLCAnJyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRidWxrX2VkaXQuZmluZCggJy53cG9uaW9uLXF1aWNrLWVkaXQtZmllbGRzZXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJCggdGhpcyApLnNlcmlhbGl6ZU9iamVjdCgpLCAkZmluYWxfYXJncyApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJ3NhdmUtYnVsay1lZGl0Jywge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0YXN5bmM6IGZhbHNlLFxuXHRcdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0XHRcdGRhdGE6ICRmaW5hbF9hcmdzLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBXUE9uaW9uX0d1dHRlbmJlcmcge1xuXHRjb25zdHJ1Y3RvciggJGlkID0gJycsICRhcmdzID0ge30gKSB7XG5cdFx0dGhpcy5pZCAgID0gJGlkO1xuXHRcdHRoaXMuYXJncyA9ICR3cG9uaW9uLmpzX2Z1bmMoICRhcmdzICk7XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5zYXZlID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRoaXMuYXJncy5zYXZlID0gKCBibG9jayApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2F2ZV9oYW5kbGVyKCBibG9jayApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5lZGl0ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHRoaXMuYXJncy5lZGl0ID0gKCBibG9jayApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWRpdF9oYW5kbGVyKCBibG9jayApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR3aW5kb3cud3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlKCB0aGlzLmlkLCB0aGlzLmFyZ3MgKTtcblx0fVxuXG5cdHNhdmVfaGFuZGxlciggYmxvY2sgKSB7XG5cdH1cblxuXHRlZGl0X2hhbmRsZXIoIGJsb2NrICkge1xuXHRcdGxldCBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcblxuXHRcdGxldCAkX3Bvc3RpZHMgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5KCBwYXJzZUludCggalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS52YWwoKSApICk7XG5cdFx0YmxvY2suYXR0cmlidXRlcy5wb3N0X2lkID0gJF9wb3N0aWRzO1xuXHRcdGxldCBibG9ja19pZCAgICAgICAgICAgICA9IGJsb2NrLmF0dHJpYnV0ZXMuYmxvY2tfaWQgPSBibG9jay5hdHRyaWJ1dGVzLmJsb2NrX2lkIHx8IGJsb2NrLmNsaWVudElkO1xuXHRcdGxldCAkcmVtb3RlICAgICAgICAgICAgICA9IGVsKCAnZm9ybScsIHtcblx0XHRcdGNsYXNzTmFtZTogJ3dwb25pb24tYmxvY2stZ3JvdXAtY29udGVudCcsXG5cdFx0XHQnZGF0YS1ibG9jay1pZCc6IGJsb2NrX2lkLFxuXHRcdH0sIFtcblx0XHRcdGVsKCB3aW5kb3cud3AuY29tcG9uZW50cy5TZXJ2ZXJTaWRlUmVuZGVyLCB7XG5cdFx0XHRcdGJsb2NrOiB0aGlzLmlkLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0cG9zdF9pZDogJF9wb3N0aWRzLFxuXHRcdFx0XHRcdGJsb2NrX2lkOiBibG9ja19pZCxcblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0XSApO1xuXG5cblx0XHRsZXQgY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmKCB0eXBlb2YgdGhpcy5hcmdzLnN0eWxlICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGlmKCB0aGlzLmFyZ3Muc3R5bGUgPT09ICdkZWZhdWx0JyApIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCggZWwoICdkaXYnLCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnYWNmLWJsb2NrLWdyb3VwLWhlYWRpbmcnLFxuXHRcdFx0XHR9LCBbXG5cdFx0XHRcdFx0ZWwoICdzcGFuJywge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnZGFzaGljb25zIGRhc2hpY29ucy0nICsgdGhpcy5hcmdzLmljb25cblx0XHRcdFx0XHR9ICksXG5cdFx0XHRcdFx0JyAnLFxuXHRcdFx0XHRcdHRoaXMuYXJncy50aXRsZSxcblx0XHRcdFx0XSApICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1ibG9jay1pZD1cIicgKyBibG9ja19pZCArICdcIl0nO1xuXG5cdFx0aWYoIGpRdWVyeSggc2VsZWN0b3IgKS5sZW5ndGggPCAxICkge1xuXHRcdH1cblxuXG5cdFx0LyppZiggJCggc2VsZWN0b3IgKS5sZW5ndGggPCAxICkge1xuXHRcdFx0JCggZG9jdW1lbnQgKS5vbiggJ2FjYl9zYXZlX2ZpZWxkcycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdHJ5VXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoIGJsb2NrLmlzU2VsZWN0ZWQgfHwgJCggc2VsZWN0b3IgKS5pcyggJzpob3ZlcicgKSApIHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCggYmxvY2sudXBkYXRlVGltZW91dCApO1xuXHRcdFx0XHRcdFx0YmxvY2sudXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoIHRyeVVwZGF0ZSwgNTAwICk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YmxvY2suc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0YWNmX2ZpZWxkczogYWNmLnNlcmlhbGl6ZSggJCggc2VsZWN0b3IgKSApWyAnYWNmJyBdLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCB0cnlVcGRhdGUsIDI1MCApO1xuXHRcdFx0fSApO1xuXHRcdH0qL1xuXHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdC8vICAgYWNmLmRvX2FjdGlvbigncmVhZHknLCAkKCdbZGF0YS1ibG9jay1pZD1cIicgKyBibG9ja19pZCArICdcIl0nKSk7XG5cdFx0Ly8gfSwgNTAwKTtcblxuXHRcdGNoaWxkcmVuLnB1c2goICRyZW1vdGUgKTtcblxuXHRcdHJldHVybiBlbCggJ2RpdicsIHsgY2xhc3NOYW1lOiAnd3Bvbmlvbi1ibG9jay1ncm91cC13cmFwcGVyJyB9LCBjaGlsZHJlbiApO1xuXG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0aWYoICF3aW5kb3cud3AgfHwgIXdpbmRvdy53cC5ibG9ja3MgfHwgIXdpbmRvdy53cC5lZGl0b3IgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdFx0Ly9sZXQgJGJsb2NrcyAgICAgPSB3aW5kb3cud3AuYmxvY2tzO1xuXHRcdFx0bGV0ICR3cG9fYmxvY2tzID0gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ3V0dGVuYmVyZ19ibG9ja3MnICk7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICR3cG9fYmxvY2tzICkgJiYgd2luZG93Lndwb25pb24uXy5pc0FycmF5KCAkd3BvX2Jsb2NrcyApICkge1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICR3cG9fYmxvY2tzICkge1xuXHRcdFx0XHRcdGlmKCAkd3BvX2Jsb2Nrcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdFx0bmV3IFdQT25pb25fR3V0dGVuYmVyZyggJGtleSwgJHdwb19ibG9ja3NbICRrZXkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0LyoqXG5cdCAqIEZpeGVzIE1lZGlhIFBPUFVQIE1vZGFsIFRvIFdvcmsgV2l0aCBXUG9uaW9uLlxuXHQgKi9cblx0Y29uc3QgZml4X21lZGlhX3VpID0gKCkgPT4ge1xuXHRcdGxldCAkdGFibGUgID0galF1ZXJ5KCAnLmNvbXBhdC1hdHRhY2htZW50LWZpZWxkcycgKSxcblx0XHRcdCRmaWVsZHMgPSAkdGFibGUuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKTtcblx0XHQkZmllbGRzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG5cdFx0XHQkdGFibGUuYmVmb3JlKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5odG1sKCkgKTtcblx0XHR9ICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9zZXR1cCgpO1xuXHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkdGFibGUucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKSApLnJlbG9hZCgpO1xuXHR9O1xuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0aWYoICQoICcuY29tcGF0LWF0dGFjaG1lbnQtZmllbGRzJyApLmxlbmd0aCA+IDAgJiYgJCggJ2JvZHknICkuaGFzQ2xhc3MoICdwb3N0LXR5cGUtYXR0YWNobWVudCcgKSApIHtcblx0XHRcdGZpeF9tZWRpYV91aSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiggdHlwZW9mIHdwLm1lZGlhICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd3AubWVkaWEuZnJhbWVzLmJyb3dzZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdHdwLm1lZGlhLmZyYW1lcy5icm93c2Uub24oICdlZGl0OmF0dGFjaG1lbnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0Zml4X21lZGlhX3VpKCk7XG5cdFx0XHRcdFx0d3AubWVkaWEuZnJhbWVzLmVkaXQub24oICdhdHRhY2htZW50OmNvbXBhdDpyZWFkeScsICgpID0+IGZpeF9tZWRpYV91aSgpICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9Nb2R1bGUgZnJvbSAnLi4vY29yZS9tb2R1bGUnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qKlxuICogV1BPbmlvbiBNZXRhYm94IE1vZHVsZSBIYW5kbGVyLlxuICovXG5jbGFzcyBXUE9uaW9uX01ldGFib3hfTW9kdWxlIGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHQvKipcblx0ICogSW5pdHMgTW9kdWxlLlxuXHQgKi9cblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5tZW51KCk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnaDIuYWpheC1jb250YWluZXIgYnV0dG9uJywgdGhpcy5zYXZlX2hhbmRsZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIE1ldGFib3ggTWVudSdzXG5cdCAqL1xuXHRtZW51KCkge1xuXHRcdGxldCAkZWxlbSA9IHRoaXMuZWxlbWVudDtcblx0XHQkZWxlbS5vbiggJ2NsaWNrJywgJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSBhJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuaGFzQ2xhc3MoICdkcm9wZG93bicgKSApIHtcblx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5pcyggJzp2aXNpYmxlJyApICkge1xuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoICd1bCcgKS5zbGlkZVRvZ2dsZSggJ2Zhc3QnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBsaSB1bCcgKS5zbGlkZVVwKCAnZmFzdCcgKTtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJGhyZWYgICAgICAgICAgID0gd2luZG93Lndwb25pb24uaGVscGVyLnVybF9wYXJhbXMoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWhyZWYnICkgKSxcblx0XHRcdFx0XHQkcGFyZW50ICAgICAgICAgPSAnd3Bvbmlvbi10YWItJyArICRocmVmWyAnY29udGFpbmVyLWlkJyBdLFxuXHRcdFx0XHRcdCRzZWN0aW9uICAgICAgICA9ICggJGhyZWZbICdzdWItY29udGFpbmVyLWlkJyBdICE9PSB1bmRlZmluZWQgKSA/ICRwYXJlbnQgKyAnLScgKyAkaHJlZlsgJ3N1Yi1jb250YWluZXItaWQnIF0gOiBmYWxzZSxcblx0XHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tcGFyZW50LXdyYXBzJyApLFxuXHRcdFx0XHRcdCRjdXJyZW50ICAgICAgICA9ICRlbGVtLmZpbmQoICdkaXYjJyArICRwYXJlbnQgKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tc2VjdGlvbi13cmFwcycgKS5oaWRlKCk7XG5cdFx0XHRcdCRwYXJlbnRfYWN0aXZlcy5oaWRlKCk7XG5cblx0XHRcdFx0aWYoICRocmVmWyAnc3ViLWNvbnRhaW5lci1pZCcgXSAhPT0gdW5kZWZpbmVkICYmICRocmVmWyAnY29udGFpbmVyLWlkJyBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0JGN1cnJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICcgZGl2IycgKyAkc2VjdGlvbiApLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRjdXJyZW50LnNob3coKTtcblxuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGEuYWN0aXZlICcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZSAnICk7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51ID4gbGkgPiBhJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0XHQkZWxlbS5maW5kKCAndWwud3Bvbmlvbi1tZXRhYm94LXBhcmVudC1tZW51IGFbZGF0YS13cG9uaW9uLWlkPVwid3Bvbmlvbl9tZW51XycgKyAkaHJlZlsgJ2NvbnRhaW5lci1pZCcgXSArICdcIl0nIClcblx0XHRcdFx0XHQgLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEFqYXggU2F2ZSBIYW5kbGVyLlxuXHQgKiBAcGFyYW0gZVxuXHQgKi9cblx0c2F2ZV9oYW5kbGVyKCBlICkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHBhcmVudCA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0JGJhc2UgICA9ICRwYXJlbnQucGFyZW50KCkucGFyZW50KCksXG5cdFx0XHQkaGlkZGVuID0gJHBhcmVudC5maW5kKCAnZGl2Lndwb25pb24tbWV0YWJveC1zZWN1cmUtZGF0YScgKTtcblxuXHRcdCRiYXNlLmJsb2NrKCB7IG1lc3NhZ2U6IG51bGwsIG92ZXJsYXlDU1M6IHsgYmFja2dyb3VuZDogJyMwMDAnLCBvcGFjaXR5OiAwLjcgfSB9ICk7XG5cblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICduYW1lJywgalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXHRcdGxldCAkZmllbGRzID0gJHBhcmVudC5wYXJlbnQoKS5maW5kKCAnOmlucHV0JyApO1xuXHRcdGxldCAkdmFsdWVzID0gJGZpZWxkcy5zZXJpYWxpemUoKTtcblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblxuXHRcdCR3cG9uaW9uLmFqYXgoICdzYXZlX21ldGFib3gnLCB7IGRhdGE6ICR2YWx1ZXMgfSwgZnVuY3Rpb24oIHJlcyApIHtcblx0XHRcdCRiYXNlLmh0bWwoIHJlcyApO1xuXHRcdFx0JGJhc2UudW5ibG9jaygpO1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRiYXNlLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XG5cdCQoIGZ1bmN0aW9uKCkge1xuXHRcdCQoICdkaXYucG9zdGJveC53cG9uaW9uLW1ldGFib3gnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9NZXRhYm94X01vZHVsZSggJCggdGhpcyApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG4vKipcbiAqIFdQT25pb24gUXVpY2sgRWRpdCBNb2R1bGUgSGFuZGxlci5cbiAqL1xuY2xhc3MgV1BPbmlvbl9RdWlja19FZGl0IGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xuXHQvKipcblx0ICogTW9kdWxlIEluaXQuXG5cdCAqL1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0XHR0aGlzLnBvc3RfaWQgPSB0aGlzLmNvbnR4dDtcblx0XHRsZXQgJGlkICAgICAgPSAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKSArICdfJyArIHRoaXMucG9zdF9pZDtcblx0XHR0aGlzLnZhbHVlcyAgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRpZCwgZmFsc2UgKTtcblxuXHRcdGlmKCB0aGlzLnZhbHVlcy5odG1sICkge1xuXHRcdFx0dGhpcy52YWx1ZXMuaHRtbCA9IGpRdWVyeSggdGhpcy52YWx1ZXMuaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudCgpLmh0bWwoIHRoaXMudmFsdWVzLmh0bWwuZmluZCggJz4gZGl2JyApICk7XG5cdFx0fVxuXG5cdFx0d2luZG93Lndwb25pb25fZmllbGQoIHRoaXMuZWxlbWVudCApLnJlbG9hZCgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdGxldCAkbGlzdCA9ICQoICcjdGhlLWxpc3QnICk7XG5cdFx0aWYoICRsaXN0Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQkbGlzdC5vbiggJ2NsaWNrJywgJy5lZGl0aW5saW5lJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBwb3N0X2lkID0galF1ZXJ5KCB0aGlzICkuY2xvc2VzdCggJ3RyJyApLmF0dHIoICdpZCcgKTtcblx0XHRcdFx0cG9zdF9pZCAgICAgPSBwb3N0X2lkLnJlcGxhY2UoICdwb3N0LScsICcnICk7XG5cdFx0XHRcdCQoICd0ciNlZGl0LScgKyBwb3N0X2lkICkuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRuZXcgV1BPbmlvbl9RdWlja19FZGl0KCBqUXVlcnkoIHRoaXMgKSwgcG9zdF9pZCApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdGlvbiBmcm9tICcuLi9jb3JlL3ZhbGlkYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93ICkgPT4ge1xuXHRqUXVlcnkoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHQvKipcblx0XHQgKiBHbG9iYWwgVmFyaWFibGVcblx0XHQgKiB3aW5kb3cud3Bvbmlvbi52YyAvIHdpbmRvdy53cG9uaW9uX3ZjXG5cdFx0ICogQHR5cGUge3tmaWVsZHM6IHthYnN0cmFjdDogKHtuZXcoKj0sICo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIG5ldygqPSwgKj0sICo9KToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfSwgbmV3KCo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIHByb3RvdHlwZToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfX18Kil9fX1cblx0XHQgKi9cblx0XHR3aW5kb3cud3Bvbmlvbi52YyA9IHdpbmRvdy53cG9uaW9uX3ZjID0ge1xuXHRcdFx0ZmllbGRzOiB7XG5cdFx0XHRcdGFic3RyYWN0OiByZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvZmllbGQnICkuZGVmYXVsdCxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFNpbXBsZSBGdW5jdGlvbiBUbyBJbml0IFdQb25pb24gVkMgTW9kdWxlLlxuXHRcdCAqL1xuXHRcdHdpbmRvdy53cG9uaW9uX3ZjX2luaXQgPSAoKSA9PiB7XG5cdFx0XHRsZXQgJGVsZW1lbnQgPSBqUXVlcnkoICcud3Bvbmlvbi1mcmFtZXdvcmsud3Bvbmlvbi1tb2R1bGUtdmMnICk7XG5cblx0XHRcdGlmKCAkZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHR3cG9uaW9uX3NldHVwKCk7XG5cblx0XHRcdFx0JGVsZW1lbnQuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoIGpRdWVyeSggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fdmNfZmllbGQoIGpRdWVyeSggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSGFuZGxlcyBXUE9uaW9uIFZDIEZpZWxkIERlcGVuZGVuY3kuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkZWxlbWVudCwge30sIHtcblx0XHRcdFx0XHRsb2c6IGZhbHNlLFxuXHRcdFx0XHRcdHNob3c6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHRcdGVsLmZpbmQoICc6aW5wdXQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLWRlcGVuZGVudCcgKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGhpZGU6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZVVwKCk7XG5cdFx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLmFkZENsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBIYW5kbGVzIFdQT25pb24gVkMgRmllbGQgVmFsaWRhdGlvbnMuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9WYWxpZGF0aW9uKCBqUXVlcnkoICcud3BiX2VkaXRfZm9ybV9lbGVtZW50cycgKSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBXUG9uaW9uIFZDIEZpZWxkIENsYXNzIEluc3N0YW5jZSBDcmVhdG9yLlxuXHRcdCAqIEBwYXJhbSAkZWxlbVxuXHRcdCAqIEBwYXJhbSAkY29udHh0XG5cdFx0ICogQHJldHVybnMge3dpbmRvdy53cG9uaW9uLnZjLmZpZWxkcy5hYnN0cmFjdH1cblx0XHQgKi9cblx0XHR3aW5kb3cud3Bvbmlvbl92Y19maWVsZCA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi52Yy5maWVsZHMuYWJzdHJhY3QoICRlbGVtLCAkY29udHh0ICk7XG5cblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiBVc2VkIG91dHNpZGUgb2YgV1BPbmlvbiBUbyBDcmVhdGUgVkMgRmllbGRcblx0XHQgKiBAcGFyYW0gJGluaXRfbWV0aG9kXG5cdFx0ICogQHBhcmFtICRtZXRob2RzXG5cdFx0ICogQHJldHVybnMge3tpbml0OiAqLCBuZXcoKTogJGNsYXNzLCBwcm90b3R5cGU6ICRjbGFzc319XG5cdFx0ICovXG5cdFx0d2luZG93Lndwb25pb25fY3JlYXRlX3ZjX2ZpZWxkID0gKCAkaW5pdF9tZXRob2QsICRtZXRob2RzID0gZmFsc2UgKSA9PiB7XG5cdFx0XHRsZXQgJG9yZ19jbGFzcyA9IHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9maWVsZCcgKS5kZWZhdWx0O1xuXHRcdFx0bGV0ICRjbGFzcyAgICAgPSBjbGFzcyBleHRlbmRzICRvcmdfY2xhc3Mge1xuXHRcdFx0fTtcblxuXHRcdFx0JGNsYXNzLnByb3RvdHlwZS5pbml0ID0gJGluaXRfbWV0aG9kO1xuXG5cdFx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJG1ldGhvZHMgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkbWV0aG9kcyApIHtcblx0XHRcdFx0XHRpZiggJG1ldGhvZHMuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdCRjbGFzcy5wcm90b3R5cGVbICRrZXkgXSA9ICRtZXRob2RzWyAka2V5IF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGNsYXNzO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBMb2FkcyBBbGwgUmVxdWlyZWQgRmllbGRzLlxuXHRcdCAqL1xuXHRcdHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9zaW5nbGUtdmFsdWUnICk7XG5cdFx0cmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL2FsbC1maWVsZHMnICk7XG5cdFx0cmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL3NlbGVjdCcgKTtcblx0XHRyZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvY2hlY2tib3gtcmFkaW8nICk7XG5cdH0gKTtcbn0gKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5pc192Y19wYXJhbV9lbGVtKCkgKSB7XG5cdFx0XHR0aGlzLmlucHV0X2NoYW5nZSgpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5pbnB1dF9jaGFuZ2UoKSApO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcsICgpID0+IHRoaXMuaW5wdXRfY2hhbmdlKCkgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24gSG9va3MgV2l0aCA6aW5wdXQgY2hhbmdlIGV2ZW4gYW5kIHRyaWdnZXJzIHNhdmUgZnVuY3Rpb24uXG5cdCAqL1xuXHRpbnB1dF9jaGFuZ2UoKSB7XG5cdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmUoIHRoaXMuaW5wdXRfZGF0YSgpLCAnc29ydGVyX3ZhbHVlcycgKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2tleXZhbHVlX3BhaXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2JhY2tncm91bmQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3dwX2xpbmtzJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdmaWVsZHNldCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYWNjb3JkaW9uJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdncm91cCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnanF1ZXJ5X3RhYicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc29ydGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjbG9uZV9lbGVtZW50JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdmb250X3NlbGVjdG9yJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdkYXRlX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcbn0gKSggd2luZG93ICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX1ZDX0ZpZWxkIGZyb20gJy4vZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fVkNfRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmlzX3ZjX3BhcmFtX2VsZW0oKSApIHtcblx0XHRcdGlmKCB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWVsZW1lbnQtcmFkaW8nICkgJiYgMCA9PT0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1jaGVja2JveC1yYWRpby1ncm91cCcgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGUoKSApO1xuXHRcdFx0fSBlbHNlIGlmKCAoIHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkubGVuZ3RoID4gMSApICkge1xuXHRcdFx0XHR0aGlzLmhhbmRsZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICgpID0+IHRoaXMuaGFuZGxlKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cdFx0XHRcdGxldCAkdmFsICA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuYXR0ciggJ3ZhbHVlJyApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmF0dHIoICdkYXRhLW9yZ3ZhbCcsICR2YWwgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlzLmhhbmRsZV9zaW5nbGVfY2hhbmdlKCBqUXVlcnkoIHRoaXMgKSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHRoaXMuaGFuZGxlX3NpbmdsZV9jaGFuZ2UoIGpRdWVyeSggdGhpcyApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBTaW5nbGUgQ2hlY2tib3ggQ2hhbmdlIEV2ZW50cy5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRoYW5kbGVfc2luZ2xlX2NoYW5nZSggJGVsZW0gKSB7XG5cdFx0aWYoICRlbGVtLmlzKCAnOmNoZWNrZWQnICkgKSB7XG5cdFx0XHQkZWxlbS52YWwoICRlbGVtLmF0dHIoICdkYXRhLW9yZ3ZhbCcgKSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZWxlbS52YWwoICdmYWxzZScgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBNdWx0aXBsZSBDaGVja2JveGVzXG5cdCAqL1xuXHRoYW5kbGUoKSB7XG5cdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NoZWNrYm94X3JhZGlvJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV9zZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BhbGV0dGUnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N3aXRjaGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xufSApKCB3aW5kb3cgKTtcbiIsIi8qIGdsb2JhbCB3cG9uaW9uX2luaXRfZmllbGQ6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vLi4vY29yZS9maWVsZCc7XG5cbmNvbnN0IGJhc2U2NF9lbmNvZGUgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5iYXNlNjRfZW5jb2RlO1xuY29uc3QgcmF3dXJsZW5jb2RlICA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLnJhd3VybGVuY29kZTtcblxuLyoqXG4gKiBDdXN0b20gVkMgQWJzdHJhY3QgRmllbGQgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udGV4dFxuXHQgKiBAcGFyYW0gJGNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQsICRjb25maWcgPSB7fSApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgVmlzdWFsIENvbXBvc2VyIFBhcmFtIG5hbWUuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IHBhcmFtX25hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5kYXRhKCAncGFyYW0tbmFtZScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgQW5kIENvbnZlcnRzIFZhbHVlIFRvIFNhdmUgaW50byBWQy5cblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHBhcmFtICR0eXBlXG5cdCAqL1xuXHRzYXZlKCAkc2F2ZV9kYXRhLCAkdHlwZSApIHtcblx0XHRpZiggJHNhdmVfZGF0YSA9PT0gbnVsbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgJHZhbHVlID0gJyc7XG5cblx0XHRpZiggJHNhdmVfZGF0YSAhPT0gJycgKSB7XG5cdFx0XHRpZiggdHlwZW9mICRzYXZlX2RhdGEgPT09ICdvYmplY3QnICYmICR0eXBlID09PSAnYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLnNpbXBsZV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdrZXlfdmFsdWVfYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLmtleV92YWx1ZV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdrZXlfdmFsdWVfbXVsdGlfYXJyYXknICkge1xuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLmtleV92YWx1ZV9tdWx0aV9hcnJheSggJHNhdmVfZGF0YSApO1xuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdzb3J0ZXJfdmFsdWVzJyApIHtcblx0XHRcdFx0JHZhbHVlID0gdGhpcy5zb3J0ZXJfdmFsdWVzKCAkc2F2ZV9kYXRhICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMudmNfc2F2ZSggJHZhbHVlICk7XG5cdH1cblxuXHQvKipcblx0ICogU2F2ZXMgR2l2ZW4gVmFsdWUgVG8gVmlzdWFsIENvbXBvc2VyLlxuXHQgKiBAcGFyYW0gJHBhcmFtX25hbWVcblx0ICogQHBhcmFtICR2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHZjX3NhdmUoICR2YWx1ZSwgJHBhcmFtX25hbWUgPSB0aGlzLnBhcmFtX25hbWUgKSB7XG5cdFx0bGV0ICRrZXkgPSAnZGl2I3dwb25pb24tdmMtc2V0dGluZ3MnO1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoICc8ZGl2IGlkPVwid3Bvbmlvbi12Yy1zZXR0aW5nc1wiIGNsYXNzPVwiaGlkZGVuXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO3Zpc2liaWxpdHk6IGhpZGRlbjtcIiA+PC9kaXY+JyApO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdGxldCAkcGFyZW50ID0gdGhpcy5lbGVtZW50LmZpbmQoICRrZXkgKTtcblx0XHRcdGlmKCAkcGFyZW50LmZpbmQoICc+ICMnICsgJHBhcmFtX25hbWUgKyAnLndwYl92Y19wYXJhbV92YWx1ZScgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKCBqUXVlcnkoICc8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgaWQ9XCInICsgJHBhcmFtX25hbWUgKyAnXCIgbmFtZT1cIicgKyAkcGFyYW1fbmFtZSArICdcIiBjbGFzcz1cIndwYl92Y19wYXJhbV92YWx1ZVwiIC8+JyApICk7XG5cdFx0XHR9XG5cblx0XHRcdCRwYXJlbnQuZmluZCggJz4gIycgKyAkcGFyYW1fbmFtZSArICcud3BiX3ZjX3BhcmFtX3ZhbHVlJyApLnZhbCggJHZhbHVlICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIEFuIEFycmF5IEludG8gU3RyaW5nIFVzaW5nICxcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzaW1wbGVfYXJyYXkoICRzYXZlX2RhdGEgKSB7XG5cdFx0cmV0dXJuICRzYXZlX2RhdGEuam9pbiggJywnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgQW4gQXJyYXkgSW50byBLZXl2YWx1ZSBhcyBiZWxvd1xuXHQgKiBrZXk6dmFsdWV8a2V5Mjp2YWx1ZTJcblx0ICpcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGtleV92YWx1ZV9hcnJheSggJHNhdmVfZGF0YSApIHtcblx0XHRsZXQgJHIgPSBbXTtcblx0XHRqUXVlcnkuZWFjaCggJHNhdmVfZGF0YSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdGxldCAkcyA9ICRrICsgJzonICsgJHY7XG5cdFx0XHQkci5wdXNoKCAkcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gJHIuam9pbiggJ3wnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgTXVsdGlwbGUgQXJyYXkgYXMgYmVsb3dcblx0ICoga2V5OnZhbHVlLHZhbHVlMnxrZXkyOnZhbHVlMyx2YWx1ZTRcblx0ICpcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGtleV92YWx1ZV9tdWx0aV9hcnJheSggJHNhdmVfZGF0YSApIHtcblx0XHRsZXQgJHIgPSBbXTtcblx0XHRqUXVlcnkuZWFjaCggJHNhdmVfZGF0YSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdGlmKCB0eXBlb2YgJHYgPT09ICdvYmplY3QnICkge1xuXHRcdFx0XHQkdiA9ICR2LmpvaW4oICcsJyApO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICRzID0gJGsgKyAnOicgKyAkdjtcblx0XHRcdCRyLnB1c2goICRzICk7XG5cdFx0fSApO1xuXHRcdHJldHVybiAkci5qb2luKCAnfCcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJHNhdmVfZGF0YVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHNvcnRlcl92YWx1ZXMoICRzYXZlX2RhdGEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZW5jb2RlX2NvbnRlbnQoIEpTT04uc3RyaW5naWZ5KCAkc2F2ZV9kYXRhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFbmNvZGVzIFN0cmluZyBJbnRvIEJhc2U2NC5cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqL1xuXHRlbmNvZGVfY29udGVudCggJGRhdGEgKSB7XG5cdFx0cmV0dXJuIGJhc2U2NF9lbmNvZGUoIHJhd3VybGVuY29kZSggJGRhdGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBnaXZlbiBlbGVtZW50IGlzIGhvb2tlZCBUbyBWaXN1YWwgQ29tcG9zZXIuXG5cdCAqIEBwYXJhbSAkcGFyZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0aXNfdmNfcGFyYW1fZWxlbSggJHBhcmVudCA9IHRoaXMuZWxlbWVudCApIHtcblx0XHRpZiggJHBhcmVudC5kYXRhKCAncGFyYW0tbmFtZScgKSA9PT0gdW5kZWZpbmVkIHx8ICRwYXJlbnQuZGF0YSggJ3BhcmFtLW5hbWUnICkgPT09ICcnICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBTaW5nbGUgRmllbGQuXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGluaXRfc2luZ2xlX2ZpZWxkKCAkdHlwZSwgJGVsZW0gKSB7XG5cdFx0d3Bvbmlvbl9pbml0X2ZpZWxkKCAkdHlwZSwgJGVsZW0sICd2YycsIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgSW5wdXQgVmFsdWVzIEludG8gSlMvUEhQIE9iamVjdC9BcnJheSBhbmQgcmV0dXJucyBpdC5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRpbnB1dF9kYXRhKCkge1xuXHRcdGxldCAkZGF0YSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0Om5vdCgud3BiX3ZjX3BhcmFtX3ZhbHVlKScgKS5zZXJpYWxpemVPYmplY3QoKTtcblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRkYXRhWyB0aGlzLnBhcmFtX25hbWUgXSApICkge1xuXHRcdFx0cmV0dXJuICRkYXRhWyB0aGlzLnBhcmFtX25hbWUgXTtcblx0XHR9XG5cdFx0cmV0dXJuICRkYXRhO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5pc192Y19wYXJhbV9lbGVtKCkgKSB7XG5cdFx0XHRsZXQgJHNlbGVjdCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0JyApO1xuXHRcdFx0aWYoICRzZWxlY3QubGVuZ3RoID09PSAxICYmICdtdWx0aXBsZScgPT09ICRzZWxlY3QuYXR0ciggJ211bHRpcGxlJyApICkge1xuXHRcdFx0XHR0aGlzLnNhdmUoICRzZWxlY3QudmFsKCksICdhcnJheScgKTtcblx0XHRcdFx0JHNlbGVjdC5vbiggJ2NoYW5nZScsICggZSApID0+IHRoaXMuc2F2ZSggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSwgJ2FycmF5JyApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4ge1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG59ICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fVkNfRmllbGQgZnJvbSAnLi9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9WQ19GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuaXNfdmNfcGFyYW1fZWxlbSgpICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5hZGRDbGFzcyggJ3dwYl92Y19wYXJhbV92YWx1ZScgKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ltYWdlX3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpY29uX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ2FsbGVyeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcbn0gKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggKCkgPT4ge1xuXHRcdCQoICcjd29vY29tbWVyY2UtcHJvZHVjdC1kYXRhJyApLm9uKCAnd29vY29tbWVyY2VfdmFyaWF0aW9uc19sb2FkZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAnLndwb25pb24tZnJhbWV3b3JrLndwb25pb24td29vY29tbWVyY2UtdmFyaWF0aW9uJyApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblxuXHRcdCQoICcjdmFyaWFibGVfcHJvZHVjdF9vcHRpb25zJyApLm9uKCAnd29vY29tbWVyY2VfdmFyaWF0aW9uc19hZGRlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICcud3Bvbmlvbi1mcmFtZXdvcmsud3Bvbmlvbi13b29jb21tZXJjZS12YXJpYXRpb24nICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xuIiwiaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csICQgKSA9PiB7XG5cdCQuZm4uV1BPbmlvbl9vbkF2YWlsYWJsZSA9IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRsZXQgc2VsID0gdGhpcy5zZWxlY3Rvcixcblx0XHRcdHRpbWVyO1xuXHRcdGlmKCB0aGlzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRmbi5jYWxsKCB0aGlzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWVyID0gc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggJCggc2VsICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRmbi5jYWxsKCAkKCBzZWwgKSApO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoIHRpbWVyICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDMwMCApO1xuXHRcdH1cblx0fTtcblxuXHR3aW5kb3cud3Bvbmlvbl93cF9wb2ludGVyX2NyZWF0ZSA9ICgpID0+IHtcblxuXHR9O1xuXG5cblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdGxldCAkcG9pbnRlcnNfZ3JvdXAgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3BfcG9pbnRlcnMnLCBmYWxzZSApO1xuXG5cdFx0aWYoICRwb2ludGVyc19ncm91cCApIHtcblx0XHRcdGZvciggbGV0ICRncm91cF9pZCBpbiAkcG9pbnRlcnNfZ3JvdXAgKSB7XG5cdFx0XHRcdGlmKCAhJHBvaW50ZXJzX2dyb3VwLmhhc093blByb3BlcnR5KCAkZ3JvdXBfaWQgKSApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciggbGV0ICRwb2ludGVyX2tleSBpbiAkcG9pbnRlcnNfZ3JvdXBbICRncm91cF9pZCBdICkge1xuXHRcdFx0XHRcdGlmKCAhJHBvaW50ZXJzX2dyb3VwWyAkZ3JvdXBfaWQgXS5oYXNPd25Qcm9wZXJ0eSggJHBvaW50ZXJfa2V5ICkgKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgJHBvaW50ZXIgPSAkcG9pbnRlcnNfZ3JvdXBbICRncm91cF9pZCBdWyAkcG9pbnRlcl9rZXkgXTtcblxuXG5cdFx0XHRcdFx0JCggJHBvaW50ZXIuc2VsZWN0b3IgKS5XUE9uaW9uX29uQXZhaWxhYmxlKCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiggISRwb2ludGVyLnNob3cgKSB7XG5cdFx0XHRcdFx0XHRcdCRwb2ludGVyLnNob3cgPSAnb3Blbic7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCAkaGFuZGxlciA9IHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJzxoMz4nICsgJHBvaW50ZXIudGl0bGUgKyAnPC9oMz48cD4nICsgJHBvaW50ZXIudGV4dCArICc8L3A+Jyxcblx0XHRcdFx0XHRcdFx0cG9pbnRlcldpZHRoOiBwYXJzZUludCggJHBvaW50ZXIud2lkdGggKSxcblx0XHRcdFx0XHRcdFx0cG9pbnRlckNsYXNzOiAnd3AtcG9pbnRlciBwb2ludGVycGx1cycgKyAkcG9pbnRlci5jbGFzcyxcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0XHRlZGdlOiAkcG9pbnRlci5lZGdlLFxuXHRcdFx0XHRcdFx0XHRcdGFsaWduOiAkcG9pbnRlci5hbGlnblxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRjbG9zZTogKCkgPT4gJC5wb3N0KCB3aW5kb3cuYWpheHVybCwge1xuXHRcdFx0XHRcdFx0XHRcdHBvaW50ZXI6ICRwb2ludGVyX2tleSxcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdkaXNtaXNzLXdwLXBvaW50ZXInXG5cdFx0XHRcdFx0XHRcdH0gKSxcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdCRoYW5kbGVyLmJ1dHRvbnMgPSBmdW5jdGlvbiggZXZlbnQsIHQgKSB7XG5cdFx0XHRcdFx0XHRcdGxldCAkYnV0dG9uO1xuXHRcdFx0XHRcdFx0XHRpZiggJHBvaW50ZXIuanNuZXh0ICkge1xuXHRcdFx0XHRcdFx0XHRcdGxldCBqc25leHQgPSBuZXcgRnVuY3Rpb24oICd0JywgJyQnLCAkcG9pbnRlci5qc25leHQgKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ganNuZXh0KCB0LCBqUXVlcnkgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmKCAkcG9pbnRlci5uZXh0ICkge1xuXHRcdFx0XHRcdFx0XHRcdCRidXR0b24gPSBqUXVlcnkoICc8YSBpZD1cInBvaW50ZXItY2xvc2VcIiBjbGFzcz1cImJ1dHRvbiBhY3Rpb25cIj5OZXh0PC9hPicgKTtcblx0XHRcdFx0XHRcdFx0XHQkYnV0dG9uLmJpbmQoICdjbGljay5wb2ludGVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0LmVsZW1lbnQucG9pbnRlciggJ2Nsb3NlJyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0ICRuZXh0ID0gJHBvaW50ZXJzX2dyb3VwWyAkZ3JvdXBfaWQgXVsgJHBvaW50ZXIubmV4dCBdO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggZmFsc2UgPT09ICRuZXh0LnBhcmVudCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkbmV4dC5zZWxlY3RvciApLnBvaW50ZXIoICdvcGVuJyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG5leHQuaW5zdGFuY2UgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkbmV4dC5zZWxlY3RvciApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnBvaW50ZXIoICRuZXh0Lmluc3RhbmNlIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucG9pbnRlciggJ29wZW4nICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCAkbmV4dC5pY29uX2NsYXNzICE9PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JCggJy5wcC0nICsgJHBvaW50ZXIubmV4dCArICcgLnBwLXBvaW50ZXItY29udGVudCBoMycgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyggJ2Rhc2hpY29ucy1iZWZvcmUnIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoICRuZXh0Lmljb25fY2xhc3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICRidXR0b247XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGNsb3NlICA9ICdEaXNtaXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdGJ1dHRvbiA9IGpRdWVyeSggJzxhIGNsYXNzPVwiY2xvc2VcIiBocmVmPVwiI1wiPicgKyBjbG9zZSArICc8L2E+JyApO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBidXR0b24uYmluZCggJ2NsaWNrLnBvaW50ZXInLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHQuZWxlbWVudC5wb2ludGVyKCAnY2xvc2UnICk7XG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0aWYoIGZhbHNlID09PSAkcG9pbnRlci5wYXJlbnQgKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBzZXR1cCA9ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHQkKCAkcG9pbnRlci5zZWxlY3RvciApLnBvaW50ZXIoICRoYW5kbGVyICkucG9pbnRlciggJHBvaW50ZXIuc2hvdyApO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRzZXR1cCgpO1xuXHRcdFx0XHRcdFx0XHQkaGFuZGxlciA9IG51bGw7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkcG9pbnRlcnNfZ3JvdXBbICRncm91cF9pZCBdWyAkcG9pbnRlcl9rZXkgXS5pbnN0YW5jZSA9ICRoYW5kbGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IoIGxldCAkaWQgaW4gJHBvaW50ZXJzX2dyb3VwICkge1xuXHRcdFx0XHRpZiggJHBvaW50ZXJzX2dyb3VwLmhhc093blByb3BlcnR5KCAkaWQgKSApIHtcblx0XHRcdFx0XHRmb3IoIGxldCAkcGlkIGluICRwb2ludGVyc19ncm91cFsgJGlkIF0gKSB7XG5cdFx0XHRcdFx0XHRpZiggJHBvaW50ZXJzX2dyb3VwWyAkaWQgXS5oYXNPd25Qcm9wZXJ0eSggJHBpZCApICkge1xuXHRcdFx0XHRcdFx0XHRsZXQgJHBvaW50ZXIgPSAkcG9pbnRlcnNfZ3JvdXBbICRpZCBdWyAkcGlkIF07XG5cblx0XHRcdFx0XHRcdFx0aWYoICRwb2ludGVyc19ncm91cFsgJGlkIF1bICRwb2ludGVyLm5leHQgXSApIHtcblx0XHRcdFx0XHRcdFx0XHQvL1x0alF1ZXJ5KCAkcG9pbnRlcnNfZ3JvdXBbICRpZCBdWyAkcG9pbnRlci5uZXh0IF0uc2VsZWN0b3IgKS5wb2ludGVyKCAnY2xvc2UnICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn0gKSggd2luZG93LCBqUXVlcnkgKTtcbiIsImltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi9jb3JlL2RlcGVuZGVuY3knO1xuaW1wb3J0IFdQT25pb25fVmFsaWRhdG9yIGZyb20gJy4vY29yZS92YWxpZGF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZUhvb2tzIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbi8vIFZTUCBKUyBIZWxwZXIgR2xvYmFsLlxud2luZG93LnZzcF9qc19oZWxwZXIgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKTtcblxucmVxdWlyZSggJy4vaGVscGVycy9mdW5jdGlvbnMnICk7XG5cbi8vIFdQT25pb24gQ29yZSBTb3VyY2UuXG53aW5kb3cud3BvbmlvbiA9IHdpbmRvdy53cG9uaW9uIHx8IE9iamVjdC5jcmVhdGUoIHtcblx0LyoqXG5cdCAqIExvZGFzaCBub0NvbmZsaWN0IFZhcmlhYmxlLlxuXHQgKi9cblx0Xzogd2luZG93LmxvZGFzaC5ub0NvbmZsaWN0KCksXG5cblx0LyoqXG5cdCAqIEN1cmF0ZWQgY29sbGVjdGlvbiBvZiB1c2VmdWwgSmF2YVNjcmlwdCBzbmlwcGV0cy5cblx0ICogQHNlZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS92c3AtanMtaGVscGVyXG5cdCAqL1xuXHRoZWxwZXI6IHdpbmRvdy52c3BfanNfaGVscGVyLFxuXG5cdC8qKlxuXHQgKiBBIGxpZ2h0d2VpZ2h0ICYgZWZmaWNpZW50IEV2ZW50TWFuYWdlciBmb3IgSmF2YVNjcmlwdC5cblx0ICogQHNlZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9Ad29yZHByZXNzL2hvb2tzXG5cdCAqL1xuXHRob29rczogY3JlYXRlSG9va3MoKSxcbn0gKTtcblxuLyoqXG4gKiBXUG9uaW9uIE1vZHVsZXMuXG4gKi9cbndpbmRvdy53cG9uaW9uLm1ldGFib3ggPSByZXF1aXJlKCAnLi9tb2R1bGVzL21ldGFib3gnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLndwX3BvaW50ZXJzICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvd3AtcG9pbnRlcnMnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLm1lZGlhX2ZpZWxkcyAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvbWVkaWEtZmllbGRzJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5idWxrX2VkaXQgICAgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL2J1bGstZWRpdCcgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24uZ3V0dGVuYmVyZyAgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9ndXR0ZW5iZXJnJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi53b29jb21tZXJjZSAgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL3dvb2NvbW1lcmNlJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5xdWlja19lZGl0ICAgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL3F1aWNrLWVkaXQnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLnZpc3VhbF9jb21wb3NlciA9IHJlcXVpcmUoICcuL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5tb2RhbCAgICAgICAgICAgPSByZXF1aXJlKCAnLi4vdmVuZG9ycy9iYWNrYm9uZS1tb2RhbCcgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24uYWpheGVyICAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9hamF4ZXInICkuV1BPbmlvbl9BamF4ZXI7XG53aW5kb3cud3Bvbmlvbi5hamF4ICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2FqYXhlcicgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24uZGVidWcgICAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9kZWJ1ZycgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24uY29yZSAgICAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9jb3JlJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCAgPSByZXF1aXJlKCAnLi9jb3JlL2ZpZWxkJyApLmRlZmF1bHQ7XG5cbnJlcXVpcmUoICcuL3dwb25pb24tZmllbGRzJyApO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICggKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgJCApID0+IHtcblx0Ly8gRG9jdW1lbnQgT24gTG9hZC5cblx0JCggKCkgPT4ge1xuXHRcdHdpbmRvdy53cG9uaW9uX3NldHVwKCk7XG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl90aGVtZV9pbml0JywgJCggdGhpcyApICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdH1cblx0fSApO1xuXG5cdC8vIFdpbmRvdyBPbiBMb2FkLlxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoICgpID0+IHtcblxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfaW5pdCcgKTtcblxuXHRcdGxldCAkd3BvZl9kaXYgPSAkKCAnLndwb25pb24tZnJhbWV3b3JrOm5vdCgud3Bvbmlvbi1tb2R1bGUtcXVpY2tfZWRpdC1mcmFtZXdvcmspJyApO1xuXG5cdFx0d2luZG93Lndwb25pb25fbm90aWNlKCAkd3BvZl9kaXYuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3Bfbm90aWNlLCAud3Bvbmlvbi1lbGVtZW50LW5vdGljZScgKSApO1xuXG5cdFx0d2luZG93Lndwb25pb24uY29yZS5zdWJtZW51X2luZGljYXRvciggJCggZG9jdW1lbnQgKS5maW5kKCAnLndwb25pb24tc3VibWVudS1pJyApICk7XG5cblx0XHQvLyBUcmlnZ2VycyBGaWVsZCBEZWJ1ZyBEYXRhLlxuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlID4gc3Ryb25nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcblx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LWRvd24nICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctcmlnaHQnICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gVHJpZ2dlcnMgSG9vayBXaXRoIFdpZGdldHMuXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ3dpZGdldC1hZGRlZCB3aWRnZXQtdXBkYXRlZCcsIGZ1bmN0aW9uKCBldmVudCwgJHdpZGdldCApIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkd2lkZ2V0ICkucmVsb2FkKCk7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkd2lkZ2V0ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gVHJpZ2dlcnMgV2hlbiBOZXcgTWVudSBJdGVtIEFkZGVkLlxuXHRcdCQoIGRvY3VtZW50ICkub24oICdtZW51LWl0ZW0tYWRkZWQnLCBmdW5jdGlvbiggZXZlbnQsICRtZW51ICkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRtZW51ICkucmVsb2FkKCk7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkbWVudSApO1xuXHRcdH0gKTtcblxuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdC8vIFJlbmRlcnMgVmFsaWRhdGlvbi5cblx0XHRcdG5ldyBXUE9uaW9uX1ZhbGlkYXRvcigpO1xuXG5cdFx0XHQvLyBIYW5kbGVzIEZpZWxkcyBpbml0LlxuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJCggdGhpcyApICkucmVsb2FkKCk7XG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2luaXQnICk7XG5cblx0fSApICk7XG5cblx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2xvYWRlZCcgKTtcblxufSApKCB3aW5kb3csIGRvY3VtZW50LCB3cCwgalF1ZXJ5ICk7XG4iLCJyZXF1aXJlKCAnLi9maWVsZHMvdGV4dCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy90ZXh0YXJlYScgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9idXR0b25fc2V0JyApO1xucmVxdWlyZSggJy4vZmllbGRzL2JhY2tncm91bmQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvaW1hZ2Vfc2VsZWN0JyApO1xucmVxdWlyZSggJy4vZmllbGRzL3N3aXRjaGVyJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BhbGV0dGUnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvc2VsZWN0JyApO1xucmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdDInICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvY2hvc2VuJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2ljb25fcGlja2VyJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2ZvbnRfc2VsZWN0b3InICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvYWNjb3JkaW9uJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2dyb3VwJyApO1xucmVxdWlyZSggJy4vZmllbGRzL3dwX2VkaXRvcicgKTtcbnJlcXVpcmUoICcuL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvcicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9maWVsZHNldCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9pbnB1dG1hc2snICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvd3BfbGlua3MnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvY2hlY2tib3hfcmFkaW8nICk7XG5yZXF1aXJlKCAnLi9maWVsZHMva2V5dmFsdWVfcGFpcicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9waWNrZXInICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvZGF0ZV9waWNrZXInICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvZ2FsbGVyeScgKTtcbnJlcXVpcmUoICcuL2hlbHBlcnMvaW1hZ2VfcG9wdXAnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvdXBsb2FkJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3VwbG9hZCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9qcXVlcnlfdGFiJyApO1xucmVxdWlyZSggJy4vaGVscGVycy90b29sdGlwJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2Nsb25lX2VsZW1lbnQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvc29ydGVyJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2dvb2dsZV9tYXBzJyApO1xucmVxdWlyZSggJy4vZmllbGRzL3R5cG9ncmFwaHknICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvb2VtYmVkJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2hlYWRpbmcnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvc3ViaGVhZGluZycgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9qYW1ib19jb250ZW50JyApO1xucmVxdWlyZSggJy4vZmllbGRzL25vdGljZScgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9jb250ZW50JyApO1xucmVxdWlyZSggJy4vZmllbGRzL2JhY2t1cCcgKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9qcy9jb3JlL2NvcmUnO1xuXG5jb25zdCBXUE9uaW9uX1dQX01vZGFsID0gQmFja2JvbmUuVmlldy5leHRlbmQoIHtcblx0dGVtcGxhdGVzOiB7fSxcblxuXHRldmVudHM6IHtcblx0XHRcImNsaWNrIC5tZWRpYS1tb2RhbC1jbG9zZVwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tY2FuY2VsXCI6IFwiY2xvc2VNb2RhbFwiLFxuXHRcdFwiY2xpY2sgI2J0bi1va1wiOiBcInNhdmVNb2RhbFwiLFxuXHRcdFwiY2xpY2sgLm1lZGlhLW1lbnUgYVwiOiBcImhhbmRsZV9sZWZ0X21lbnVfY2xpY2tcIixcblx0XHRcImNsaWNrIC5tZWRpYS1yb3V0ZXIgYVwiOiBcImhhbmRsZV90YWJfY2xpY2tcIixcblx0fSxcblxuXHRhY3RpdmVfcGFnZTogbnVsbCxcblxuXHRhY3RpdmVfc2VjdGlvbjogbnVsbCxcblxuXHRpbml0aWFsaXplOiAoIG9wdGlvbnMgKSA9PiB7XG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IGZhbHNlLFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHRcdGh0bWw6IGZhbHNlLFxuXHRcdH0sIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMubGVmdF9tZW51ID0gb3B0aW9uc1sgJ2xlZnRfbWVudScgXTtcblx0XHR0aGlzLmh0bWwgICAgICA9IG9wdGlvbnNbICdodG1sJyBdO1xuXHRcdHRoaXMuaGlkZV9tZW51ID0gb3B0aW9uc1sgJ2hpZGVfbWVudScgXTtcblxuXHRcdF8uYmluZEFsbCggdGhpcywgJ3JlbmRlcicsICdwcmVzZXJ2ZUZvY3VzJywgJ2Nsb3NlTW9kYWwnLCAnc2F2ZU1vZGFsJywgJ2RvTm90aGluZycgKTtcblx0XHR0aGlzLmluaXRfdGVtcGxhdGVzKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblxuXHRpbml0X3RlbXBsYXRlczogKCkgPT4ge1xuXHRcdGxldCAkbSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdtb2RhbCcgKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0gID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnZnJhbWUtbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3JvdXRlci1tZW51LWl0ZW0nIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy53aW5kb3cgICAgICAgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnaHRtbCcgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCAgICAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdwYWdlX2NvbnRlbnQnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnc2VjdGlvbl9jb250ZW50JyBdICk7XG5cdH0sXG5cblx0cmVuZGVyOiAoKSA9PiB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdHRoaXMuJGVsLmF0dHIoICd0YWJpbmRleCcsICcwJyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMud2luZG93KCkgKTtcblxuXHRcdGlmKCB0aGlzLmxlZnRfbWVudSApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5sZWZ0X21lbnUsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy5mcmFtZV9tZW51X2l0ZW0oIHtcblx0XHRcdFx0XHR1cmw6IGtleSxcblx0XHRcdFx0XHRuYW1lOiB2YWx1ZSxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRpZiggdGhpcy5odG1sICkge1xuXHRcdFx0Xy5lYWNoKCB0aGlzLmh0bWwsICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdFx0bGV0ICRjb250ZW50ID0gJCggdGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50KCB7XG5cdFx0XHRcdFx0aWQ6IGtleSxcblx0XHRcdFx0XHR0aXRsZTogdmFsdWVbICd0aXRsZScgXSxcblx0XHRcdFx0XHRodG1sOiB2YWx1ZVsgJ2h0bWwnIF0sXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzZWN0aW9ucycgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdF8uZWFjaCggdmFsdWVbICdzZWN0aW9ucycgXSwgKCB2YWwsIGsgKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJF9jb250ZW50ID0galF1ZXJ5KCB0aGlzLnRlbXBsYXRlcy5zZWN0aW9uX2NvbnRlbnQoIHtcblx0XHRcdFx0XHRcdFx0XHRpZDoga2V5ICsgXCJfXCIgKyBrLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiB2YWxbICd0aXRsZScgXSxcblx0XHRcdFx0XHRcdFx0XHRodG1sOiB2YWxbICdodG1sJyBdLFxuXHRcdFx0XHRcdFx0XHR9ICkgKSxcblx0XHRcdFx0XHRcdFx0JF9tZW51ICAgID0gdGhpcy50ZW1wbGF0ZXMucm91dGVyX21lbnVfaXRlbSggeyB1cmw6IGssIG5hbWU6IHZhbFsgJ3RpdGxlJyBdIH0gKTtcblxuXHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbFsgJ3NpZGViYXInIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWVbICdzaWRlYmFyJyBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLWZyYW1lLWNvbnRlbnQnICkuYXBwZW5kKCAkX2NvbnRlbnQgKTtcblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtcm91dGVyJyApLmFwcGVuZCggJF9tZW51ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWVbICdzaWRlYmFyJyBdICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbHVlWyAnc2lkZWJhcicgXSApLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0XHRcdFx0JHRoaXMuJCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyApLmFwcGVuZCggJGNvbnRlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0aGlzLiQoICcubWVkaWEtbWVudSBhOmZpcnN0LWNoaWxkJyApLnRyaWdnZXIoICdjbGljaycgKTtcblx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IC53cG9uaW9uLW1vZGFsLWNvbnRlbnQ6bm90KC5oaWRkZW4pIC5tZWRpYS1mcmFtZS1yb3V0ZXIgYTpmaXJzdC1jaGlsZCcgKVxuXHRcdFx0LnRyaWdnZXIoICdjbGljaycgKTtcblxuXHRcdGlmKCB0aGlzLmhpZGVfbWVudSA9PT0gdHJ1ZSApIHtcblx0XHRcdHRoaXMuJCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtbWVudScgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub24oIFwiZm9jdXNpblwiLCB0aGlzLnByZXNlcnZlRm9jdXMgKTtcblx0XHRqUXVlcnkoICdib2R5JyApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSApLmFwcGVuZCggdGhpcy4kZWwgKTtcblx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHR9LFxuXG5cdGhhbmRsZV9sZWZ0X21lbnVfY2xpY2s6ICggZSApID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR0YXJnZXQgPSAkKCBlLnRhcmdldCApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1tZW51IGEuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0bGV0ICRzaG93X3RhcmdldCA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2IycgKyAkdGFyZ2V0LmF0dHIoICdocmVmJyApICk7XG5cdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG5cdFx0JHNob3dfdGFyZ2V0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuXG5cdFx0aWYoICRzaG93X3RhcmdldC5maW5kKCAnLm1lZGlhLWZyYW1lLXJvdXRlcicgKS5oYXNDbGFzcyggJ2hpZGRlbicgKSApIHtcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkucmVtb3ZlQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9XG5cdFx0dGhpcy5hY3RpdmVfcGFnZSAgICA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9IG51bGw7XG5cdH0sXG5cblx0aGFuZGxlX3RhYl9jbGljazogKCBlICkgPT4ge1xuXHRcdGxldCAkdGFyZ2V0ICAgICAgICAgPSAkKCBlLnRhcmdldCApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdGxldCAkcGFnZSAgICAgICAgICAgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUtbWVudSBhLmFjdGl2ZScgKS5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJGJhc2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKTtcblxuXG5cdFx0JHRhcmdldC5wYXJlbnQoKS5maW5kKCAnLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdCRiYXNlLmZpbmQoICcud3Bvbmlvbi1zZWN0aW9uLW1vZGFsLWNvbnRlbnQnICkuaGlkZSgpO1xuXHRcdCRiYXNlLmZpbmQoICcjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKyAnXycgKyB0aGlzLmFjdGl2ZV9zZWN0aW9uICkuc2hvdygpO1xuXHR9LFxuXG5cdHByZXNlcnZlRm9jdXM6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRpZiggdGhpcy4kZWxbIDAgXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsLmhhcyggZS50YXJnZXQgKS5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLiRlbC5mb2N1cygpO1xuXHRcdH1cblx0fSxcblxuXHRjbG9zZU1vZGFsOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vZmYoIFwiZm9jdXNpblwiICk7XG5cdFx0alF1ZXJ5KCBcImJvZHlcIiApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiYXV0b1wiIH0gKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9LFxuXG5cdHNhdmVNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHRoaXMuY2xvc2VNb2RhbCggZSApO1xuXHR9LFxuXG5cdGRvTm90aGluZzogZnVuY3Rpb24oIGUgKSB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoICRvcHRpb25zID0ge30gKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gXy5leHRlbmQoIHtcblx0XHRcdGlkOiBmYWxzZSxcblx0XHRcdGRhdGE6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1tb2RhbCcsXG5cdFx0XHRtb2RhbDoge30sXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxuXHRcdH0sICRvcHRpb25zICk7XG5cblx0XHRuZXcgV1BPbmlvbl9XUF9Nb2RhbCggXy5leHRlbmQoIHtcblx0XHRcdGxlZnRfbWVudTogdGhpcy5nZXRfbGVmdF9tZW51KCksXG5cdFx0XHRodG1sOiB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLFxuXHRcdFx0aGlkZV9tZW51OiB0aGlzLm9wdGlvbnNbICdoaWRlX21lbnUnIF0sXG5cdFx0fSwgdGhpcy5vcHRpb25zWyAnbW9kYWwnIF0gKSApO1xuXHR9XG5cblx0Z2V0X2xlZnRfbWVudSgpIHtcblx0XHRsZXQgJHJldHVybiA9IGZhbHNlO1xuXHRcdGlmKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdICkge1xuXHRcdFx0JHJldHVybiA9IHt9O1xuXG5cdFx0XHRfLmVhY2goIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0sICggJGRhdGEsICRrZXkgKSA9PiB7XG5cdFx0XHRcdCRyZXR1cm5bICRrZXkgXSA9ICggdHlwZW9mICRkYXRhWyAnbWVudV90aXRsZScgXSAhPT0gJ3VuZGVmaW5lZCcgKSA/ICRkYXRhWyAnbWVudV90aXRsZScgXSA6ICRkYXRhWyAndGl0bGUnIF07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==