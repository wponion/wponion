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

/***/ "./src/js/core/base.js":
/*!*****************************!*\
  !*** ./src/js/core/base.js ***!
  \*****************************/
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
				el.hide();
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
				$this.base.instance.push(new _dependency2.default(jQuery(this), $this.base.ruleset, {
					nestable: $this.param.nestable,
					parent: true === $this.param.nestable ? $this.base.$el : $this.param.parent
				}));
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

				$found.find('> .row > .wponion-field-title > h4').tippy({
					content: _core2.default.txt('click_to_view_debug_info', 'Click To View Field Debug Info'),
					arrow: true,
					arrowType: 'round',
					placement: 'bottom',
					theme: 'light',
					animation: 'scale',
					appendTo: this.get_field_parent_by_id(this.element)[0]
				});

				$found.find('> .row > .wponion-field-title > h4').on('click', function () {
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

var _base = __webpack_require__(/*! ./base */ "./src/js/core/base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WPOnion Module JS Class
 */
var _class = function (_Base) {
	_inherits(_class, _Base);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'ui_menu_handler',
		value: function ui_menu_handler() {
			var _this2 = this;

			this.element.find('.wponion-menu > ul a').on('click', function (e) {
				e.preventDefault();
				var $elem = jQuery(e.currentTarget);

				if ($elem.hasClass('dropdown')) {
					if ($elem.parent().find('> ul').is(':visible')) {
						$elem.parent().find('> ul').slideToggle();
					} else {
						_this2.element.find('.wponion-menu > ul ul').slideUp();
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
							_this2.element.find('div.wponion-container-wraps').addClass('hidden');
							$lookup.removeClass('hidden');
							_this2.element.find('.wponion-menu .active').removeClass('active');
							$elem.addClass('active');
							$elem.parent().parent().parent().find('> a').addClass('active');
						} else {
							window.location.href = $elem.attr('href');
						}
					} else {
						window.location.href = $elem.attr('href');
					}
				}
			});
		}
	}]);

	return _class;
}(_base2.default);

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

				$custom_input.moveAttr('name', 'data-name');

				$radios.each(function (i, e) {
					if (jQuery(e).is(':checked')) {
						if (jQuery(e).parent().find('.wponion-custom-value-input').length > 0) {
							$custom_input.moveAttr('name', 'data-name');
							jQuery(e).parent().find('.wponion-custom-value-input').moveAttr('data-name', 'name');
						}
					}
				});

				$radios.on('click', function (e) {
					$custom_input.moveAttr('name', 'data-name');
					if (jQuery(e.currentTarget).parent().find('.wponion-custom-value-input').length > 0) {
						jQuery(e.currentTarget).parent().find('.wponion-custom-value-input').moveAttr('data-name', 'name');
					}
				});

				$checkbox.each(function (i, e) {
					if (jQuery(e).parent().find('.wponion-custom-value-input').length > 0) {
						if (jQuery(e).is(':checked')) {
							jQuery(e).moveAttr('name', 'data-name');
							jQuery(e).parent().find('.wponion-custom-value-input').moveAttr('data-name', 'name');
						} else {
							jQuery(e).moveAttr('name', 'data-name');
							jQuery(e).parent().find('.wponion-custom-value-input').moveAttr('name', 'data-name');
						}
					}
				});

				$checkbox.on('click', function (e) {
					if (jQuery(e.currentTarget).parent().find('.wponion-custom-value-input').length > 0) {
						if (jQuery(e.currentTarget).is(':checked')) {
							jQuery(e.currentTarget).moveAttr('name', 'data-name');
							jQuery(e.currentTarget).parent().find('.wponion-custom-value-input').moveAttr('data-name', 'name');
						} else {
							jQuery(e.currentTarget).parent().find('.wponion-custom-value-input').moveAttr('name', 'data-name');
						}
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
						$tp = _core2.default.js_func($tp);
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
				sortable: {
					items: '.wponion-keyvalue-field',
					handle: '.sortable-handler',
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
					var $a = this.contxt.createRule($field, $condition, $value);
					$a.include(this.element);
					this.set_contxt($a);
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
				if (typeof $existing !== 'undefined' || $existing !== undefined) {
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
		if ($elem.length > 1) {
			$elem.each(function () {
				wponion_notice(jQuery(this));
			});
		} else {
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
				var $left = $auto / 1000;
				if ($elem.find('.wpo-counter').length === 1) {
					var $runnder = setInterval(function () {
						$elem.find('.wpo-counter').html($left);
						$left -= 1;
						if ($left < 0) {
							clearInterval($runnder);
							$elem.find('.wpo-counter').html('0');
						}
					}, 900);
				}
				setTimeout(function () {
					$elem.slideUp('slow', function () {
						$elem.remove();
					});
				}, $auto);
			}
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

			if (false === window.wponion._.isUndefined($arg.followCursor) && true === $arg.followCursor && window.wponion._.isUndefined($arg.appendTo)) {
				$arg.appendTo = function () {
					return document.body;
				};
			} else if (window.wponion._.isUndefined($arg.appendTo)) {
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
				$final_args = window.wponion._.merge($(this).serializeJSON(), $final_args);
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
			this.ui_menu_handler();
			this.element.on('click', 'h2.ajax-container button', this.save_handler);
			jQuery(document).on('postbox-moved', function (event, $element) {
				var $id = jQuery($element).attr('id');
				if (jQuery('#postbox-container-1 ').find('#' + $id).length > 0) {
					jQuery($element).addClass('wponion-metabox-side-metabox');
					jQuery($element).addClass('wponion-metabox-side');
				} else {
					jQuery($element).removeClass('wponion-metabox-side-metabox');
					jQuery($element).removeClass('wponion-metabox-side');
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

/***/ "./src/js/modules/settings.js":
/*!************************************!*\
  !*** ./src/js/modules/settings.js ***!
  \************************************/
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

/**
 *
 */
var WPOnion_Settings_Module = function (_WPOnion_Module) {
	_inherits(WPOnion_Settings_Module, _WPOnion_Module);

	function WPOnion_Settings_Module() {
		_classCallCheck(this, WPOnion_Settings_Module);

		return _possibleConstructorReturn(this, (WPOnion_Settings_Module.__proto__ || Object.getPrototypeOf(WPOnion_Settings_Module)).apply(this, arguments));
	}

	_createClass(WPOnion_Settings_Module, [{
		key: 'module_init',

		/**
   * Inits Module.
   */
		value: function module_init() {
			this.ui_menu_handler();
		}
	}]);

	return WPOnion_Settings_Module;
}(_module2.default);

exports.default = function (window, document, $) {
	$(function () {
		$('div.wponion-framework.wponion-settings').each(function () {
			new WPOnion_Settings_Module($(this), false);
		});
	});
}(window, document, jQuery);

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
			var $data = this.element.find(':input:not(.wpb_vc_param_value)').serializeJSON();
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
window.wponion.settings = __webpack_require__(/*! ./modules/settings */ "./src/js/modules/settings.js").default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUFkZEhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUN1cnJlbnRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEaWRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEb2luZ0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhhc0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSZW1vdmVIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSdW5Ib29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVIb29rTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVOYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvaW5mby9pbmlfZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3htbC91dGY4X2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b193aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY29weV90b19jbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RldmljZV90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RpZmZfZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9mb3JtYXRfZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfYWZ0ZXJfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19iZWZvcmVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfc2FtZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3RhYl9mb2N1c2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc193aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BpcGVfbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BsYWluX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9xdWVyeV9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcmFuZF9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3Bvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9zY3JvbGxfdG9fdG9wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RpbWVfdGFrZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdG9fanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pzX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdXJsX3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy92YWxpZGF0ZVNpbmdsZUpTRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JkcHJlc3MtanMtcG9ydHMvZnVuY3Rpb25zL2FkZF9xdWVyeV9hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29yZHByZXNzLWpzLXBvcnRzL2Z1bmN0aW9ucy90cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvdW50cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9hamF4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2RlYnVnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYmFja3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYnV0dG9uX3NldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NoZWNrYm94X3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2hvc2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY2xvbmVfZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2NvbG9yX3BhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZGF0ZV9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9maWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ZvbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ29vZ2xlX21hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pY29uX3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ltYWdlX3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2ltYWdlX3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2lucHV0bWFzay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2phbWJvX2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qcXVlcnlfdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMva2V5dmFsdWVfcGFpci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL25vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL29lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3NlbGVjdDIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zdWJoZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvd3BfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZGVwZW5kZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvaW1hZ2VfcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvcmVsb2FkX3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2J1bGstZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9ndXR0ZW5iZXJnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21lZGlhLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZXRhYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3F1aWNrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9hbGwtZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9jaGVja2JveC1yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvc2luZ2xlLXZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3dvb2NvbW1lcmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3dwLXBvaW50ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dwb25pb24tZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3JzL2JhY2tib25lLW1vZGFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIl0sIm5hbWVzIjpbImNyZWF0ZUFkZEhvb2siLCJob29rcyIsImFkZEhvb2siLCJob29rTmFtZSIsIm5hbWVzcGFjZSIsImNhbGxiYWNrIiwicHJpb3JpdHkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVyIiwiaGFuZGxlcnMiLCJpIiwic3BsaWNlIiwiX19jdXJyZW50IiwiZm9yRWFjaCIsImhvb2tJbmZvIiwibmFtZSIsImN1cnJlbnRJbmRleCIsInJ1bnMiLCJjcmVhdGVDdXJyZW50SG9vayIsImN1cnJlbnRIb29rIiwiY3JlYXRlRGlkSG9vayIsImRpZEhvb2siLCJjcmVhdGVEb2luZ0hvb2siLCJkb2luZ0hvb2siLCJjcmVhdGVIYXNIb29rIiwiaGFzSG9vayIsImNyZWF0ZUhvb2tzIiwiYWN0aW9ucyIsIk9iamVjdCIsImNyZWF0ZSIsImZpbHRlcnMiLCJhZGRBY3Rpb24iLCJhZGRGaWx0ZXIiLCJyZW1vdmVBY3Rpb24iLCJyZW1vdmVGaWx0ZXIiLCJoYXNBY3Rpb24iLCJoYXNGaWx0ZXIiLCJyZW1vdmVBbGxBY3Rpb25zIiwicmVtb3ZlQWxsRmlsdGVycyIsImRvQWN0aW9uIiwiYXBwbHlGaWx0ZXJzIiwiY3VycmVudEFjdGlvbiIsImN1cnJlbnRGaWx0ZXIiLCJkb2luZ0FjdGlvbiIsImRvaW5nRmlsdGVyIiwiZGlkQWN0aW9uIiwiZGlkRmlsdGVyIiwiY3JlYXRlUmVtb3ZlSG9vayIsInJlbW92ZUFsbCIsInJlbW92ZUhvb2siLCJoYW5kbGVyc1JlbW92ZWQiLCJfbG9vcCIsImNyZWF0ZVJ1bkhvb2siLCJyZXR1cm5GaXJzdEFyZyIsInJ1bkhvb2tzIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJwdXNoIiwicmVzdWx0IiwiYXBwbHkiLCJwb3AiLCJfY3JlYXRlSG9va3MiLCJ2YWxpZGF0ZUhvb2tOYW1lIiwidGVzdCIsInZhbGlkYXRlTmFtZXNwYWNlIiwiSlNfUGFyc2VfQXJncyIsIiRhcmdzIiwiJGRlZmF1bHRzIiwiJGlzX25lc3RlZCIsImRlZmF1bHRzIiwibmVzdGVkIiwicGFyc2UiLCIkX2tleSIsIiRpc19kZWVwIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1pY3JvdGltZSIsImdldEFzRmxvYXQiLCJzIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aW1pbmciLCJuYXZpZ2F0aW9uU3RhcnQiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwiZ2V0VGltZSIsImNhbGxfdXNlcl9mdW5jIiwiY2IiLCJwYXJhbWV0ZXJzIiwiY2FsbFVzZXJGdW5jQXJyYXkiLCJyZXF1aXJlIiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJjYWxsX3VzZXJfZnVuY19hcnJheSIsIiRnbG9iYWwiLCJ3aW5kb3ciLCJnbG9iYWwiLCJmdW5jIiwic2NvcGUiLCJ2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiIsIm1hdGNoIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsImV2YWwiLCJFcnJvciIsImNyZWF0ZV9mdW5jdGlvbiIsImNvZGUiLCJzcGxpdCIsImNvbmNhdCIsImUiLCJmdW5jdGlvbl9leGlzdHMiLCJmdW5jTmFtZSIsImluaV9nZXQiLCJ2YXJuYW1lIiwiJGxvY3V0dXMiLCJwaHAiLCJpbmkiLCJsb2NhbF92YWx1ZSIsIm1kNSIsInN0ciIsImhhc2giLCJjcnlwdG8iLCJtZDVzdW0iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwidXRmOEVuY29kZSIsInhsIiwiX3JvdGF0ZUxlZnQiLCJsVmFsdWUiLCJpU2hpZnRCaXRzIiwiX2FkZFVuc2lnbmVkIiwibFgiLCJsWSIsImxYNCIsImxZNCIsImxYOCIsImxZOCIsImxSZXN1bHQiLCJfRiIsIngiLCJ5IiwieiIsIl9HIiwiX0giLCJfSSIsIl9GRiIsImEiLCJiIiwiYyIsImQiLCJhYyIsIl9HRyIsIl9ISCIsIl9JSSIsIl9jb252ZXJ0VG9Xb3JkQXJyYXkiLCJsV29yZENvdW50IiwibE1lc3NhZ2VMZW5ndGgiLCJsTnVtYmVyT2ZXb3Jkc1RlbXAxIiwibE51bWJlck9mV29yZHNUZW1wMiIsImxOdW1iZXJPZldvcmRzIiwibFdvcmRBcnJheSIsImxCeXRlUG9zaXRpb24iLCJsQnl0ZUNvdW50IiwiY2hhckNvZGVBdCIsIl93b3JkVG9IZXgiLCJ3b3JkVG9IZXhWYWx1ZSIsIndvcmRUb0hleFZhbHVlVGVtcCIsImxCeXRlIiwibENvdW50Iiwic3Vic3RyIiwiayIsIkFBIiwiQkIiLCJDQyIsIkREIiwiUzExIiwiUzEyIiwiUzEzIiwiUzE0IiwiUzIxIiwiUzIyIiwiUzIzIiwiUzI0IiwiUzMxIiwiUzMyIiwiUzMzIiwiUzM0IiwiUzQxIiwiUzQyIiwiUzQzIiwiUzQ0IiwidGVtcCIsInRvTG93ZXJDYXNlIiwicGFyc2Vfc3RyIiwiYXJyYXkiLCJzdHJBcnIiLCJTdHJpbmciLCJyZXBsYWNlIiwic2FsIiwiaiIsImN0IiwicCIsImxhc3RPYmoiLCJjaHIiLCJ0bXAiLCJrZXkiLCJ2YWx1ZSIsInBvc3RMZWZ0QnJhY2tldFBvcyIsImtleXMiLCJrZXlzTGVuIiwiX2ZpeFN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXJBdCIsImluZGV4T2YiLCJoYXNPd25Qcm9wZXJ0eSIsInJ0cmltIiwiY2hhcmxpc3QiLCJyZSIsIlJlZ0V4cCIsInN0cnBvcyIsImhheXN0YWNrIiwibmVlZGxlIiwib2Zmc2V0IiwiYmFzZTY0X2RlY29kZSIsImVuY29kZWREYXRhIiwiZGVjb2RlVVRGOHN0cmluZyIsIm1hcCIsImpvaW4iLCJhdG9iIiwiQnVmZmVyIiwiYjY0IiwibzEiLCJvMiIsIm8zIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJiaXRzIiwiZGVjIiwidG1wQXJyIiwiZnJvbUNoYXJDb2RlIiwiYmFzZTY0X2VuY29kZSIsInN0cmluZ1RvRW5jb2RlIiwiZW5jb2RlVVRGOHN0cmluZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvU29saWRCeXRlcyIsInAxIiwiYnRvYSIsImVuYyIsInIiLCJodHRwX2J1aWxkX3F1ZXJ5IiwiZm9ybWRhdGEiLCJudW1lcmljUHJlZml4IiwiYXJnU2VwYXJhdG9yIiwiZW5jVHlwZSIsImVuY29kZUZ1bmMiLCJfaHR0cEJ1aWxkUXVlcnlIZWxwZXIiLCJ2YWwiLCJpc05hTiIsInF1ZXJ5IiwicGFyc2VfdXJsIiwiY29tcG9uZW50IiwibW9kZSIsInBhcnNlciIsInN0cmljdCIsImxvb3NlIiwibSIsImV4ZWMiLCJ1cmkiLCIkMCIsIiQxIiwiJDIiLCJzb3VyY2UiLCJyYXd1cmxkZWNvZGUiLCJyYXd1cmxlbmNvZGUiLCJ1cmxkZWNvZGUiLCJ1cmxlbmNvZGUiLCJpc19jYWxsYWJsZSIsIm1peGVkVmFyIiwic3ludGF4T25seSIsImNhbGxhYmxlTmFtZSIsIm1ldGhvZCIsInZhbGlkRnVuY3Rpb25OYW1lIiwiZ2V0RnVuY05hbWUiLCJmbiIsInV0ZjhfZW5jb2RlIiwiYXJnU3RyaW5nIiwic3RyaW5nIiwidXRmdGV4dCIsInN0YXJ0IiwiZW5kIiwic3RyaW5nbCIsIm4iLCJjMSIsIlJhbmdlRXJyb3IiLCJjMiIsInBhcnNlX2FyZ3MiLCJhcnJheV90b19odG1sX2F0dHIiLCJhcnJheV90b19odG1sIiwiYXJyYXlfdG9fd2luZG93IiwicGxhaW5fb2JqZWN0IiwiaXNfYWZ0ZXJfZGF0ZSIsImlzX2JlZm9yZV9kYXRlIiwiaXNfc2FtZV9kYXRlIiwiZm9ybWF0X2R1cmF0aW9uIiwiZGlmZl9kYXlzIiwidGltZV90YWtlbiIsImlzX3VybCIsImlzX3RhYl9mb2N1c2VkIiwiaXNfd2luZG93X2FyZyIsInNjcm9sbF90b190b3AiLCJjb3B5X3RvX2NsaXAiLCJzY3JvbGxfcG9zIiwid2luZG93X2FyZyIsImRldmljZV90eXBlIiwicGlwZV9sb2ciLCJ0b19qcXVlcnkiLCJpc19qcXVlcnkiLCJ0b19qc19mdW5jIiwiY291bnRlciIsInJhbmRfbWQ1IiwiY3NzX3VuaXRzIiwidXJsX3BhcmFtcyIsInF1ZXJ5X3N0cmluZyIsImFyciIsImxpc3RJRCIsInRhZyIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiaXRlbSIsIiRkYXRhIiwicmV0dXJuX2h0bWwiLCJJIiwiXyIsImlzT2JqZWN0IiwiSyIsIiR2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCIkYXJyYXkiLCIka2V5IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInNlbGVjdG9yIiwic3RlcCIsImR1cmF0aW9uIiwiY3VycmVudCIsIl9zdGVwIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJhYnMiLCJmbG9vciIsImlzTnVtYmVyIiwiY2hlY2tQeCIsImNoZWNrUGN0IiwiY2hlY2tFbSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRhdGVJbml0aWFsIiwiZGF0ZUZpbmFsIiwibXMiLCJ0aW1lIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIm1pbGxpc2Vjb25kIiwiZW50cmllcyIsImZpbHRlciIsImRhdGVBIiwiZGF0ZUIiLCIkZWxlbSIsImlzVW5kZWZpbmVkIiwiaXNTdHJpbmciLCJqUXVlcnkiLCJ0b0lTT1N0cmluZyIsImhpZGRlbiIsIiR1cmwiLCJwYXR0ZXJuIiwibG9nIiwiZGF0YSIsInJlZ2V4IiwicmVzdWx0cyIsImxvY2F0aW9uIiwic2VhcmNoIiwicmFuZG9tIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidGl0bGUiLCJ0aW1lRW5kIiwiJGFyZ3Nfa2V5IiwiJGNvbnRlbnRzX2tleSIsImlzRW1wdHkiLCJ1cmwiLCJyZWR1Y2UiLCJ2IiwiJHN0cmluZyIsIiRjb250ZW50cyIsIiRfayIsImFkZF9xdWVyeV9hcmciLCJocmVmIiwiJHBhcnNlZCIsIiRxdWVyeSIsIiRmcmFnbWVudCIsImZyYWdtZW50Iiwic3BsaXRfdXJsIiwiYmFzZV91cmwiLCJyZW1vdmVfcXVlcnlfYXJnIiwiZGVmYXVsdCIsInRyYWlsaW5nc2xhc2hpdCIsInVudHJhaWxpbmdzbGFzaGl0IiwiV1BPbmlvbl9BamF4ZXIiLCIkYWpheF9hcmdzIiwiJGFqYXhfY29uZmlnIiwiYWpheHVybCIsInN1Y2Nlc3MiLCJhbHdheXMiLCJhY3Rpb24iLCJkZWZhdWx0X2NvbmZpZ3MiLCJyZXNwb25zZV9lbGVtZW50IiwiYnV0dG9uIiwiZWxlbWVudCIsInNwaW5uZXIiLCJpbnN0YW5jZSIsImFqYXhfYXJncyIsIndwb25pb24iLCJtZXJnZSIsImFqYXhfY29uZmlnIiwiYWpheCIsIiRjb2RlIiwic2luZ2xlX2NhbGxiYWNrIiwiJGNhbGxiYWNrIiwiaXNGdW5jdGlvbiIsIiRjYWxsYmFja3MiLCJoYW5kbGVfY2FsbGJhY2tzIiwiYnV0dG9uX3VubG9jayIsImJ1dHRvbl9sb2NrIiwiJGNvbmZpZyIsImNsb25lIiwiJHVybF9wYXJhbXMiLCJ3cCIsInNlbmQiLCJkb25lIiwib25TdWNjZXNzIiwiZmFpbCIsIm9uRXJyb3IiLCJvbkFsd2F5cyIsIiRkZWZhdWx0IiwiaGFzX2NvbmZpZyIsImNvbmZpZyIsIiRidXR0b24iLCJ3cG9fYnV0dG9uIiwiYXR0ciIsIiRzcGlubmVyIiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJhcHBlbmQiLCJyZW1vdmVBdHRyIiwibmV4dCIsImhhc0NsYXNzIiwicmVtb3ZlIiwiZmluZCIsIiQiLCIkY2xhc3MiLCJvbiIsImN1cnJlbnRUYXJnZXQiLCIkX2RhdGEiLCIkX2NsYXNzX2luc3RhbmNlIiwiJGZpZDEiLCIkZmlkMiIsIiRqc19pZCIsIiR3cG9uaW9uIiwiZmllbGRJRCIsIiRfYXJncyIsImZpZWxkQXJncyIsImlubGluZV9hamF4IiwiJHNlbGVjdG9yIiwiJGNvbnRleHQiLCJzZXRfZWxlbWVudCIsInNldF9jb250eHQiLCJtb2R1bGVfaW5pdCIsImVsZW0iLCIkY29udHh0IiwiY29udGV4dCIsIldQT25pb24iLCIkd2hlcmVfdG9fZmluZCIsIiRpZCIsIiR2YXJfaWQiLCJpc0ZpZWxkIiwid2luZG93QXJncyIsInRleHQiLCIkaXNfc2hvdyIsImZhZGVJbiIsImZhZGVPdXQiLCIkaGFuZGxlIiwiJGpzb24iLCJkZWJ1Z19pbmZvIiwiJGRlZmluZWRfdmFycyIsInByZXZlbnREZWZhdWx0Iiwic3dhbCIsInR4dCIsImh0bWwiLCJzaG93Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2hvd0Nsb3NlQnV0dG9uIiwiYW5pbWF0aW9uIiwid2lkdGgiLCJvbkJlZm9yZU9wZW4iLCJlbmFibGVMb2FkaW5nIiwib25PcGVuIiwianNvblZpZXciLCJkaXNhYmxlTG9hZGluZyIsInRoZW4iLCJzZXR0aW5nc19hcmdzIiwib3B0aW9uIiwiaXNfZGVidWciLCJpc051bGwiLCJmaWVsZF9kZWJ1Z19pbmZvIiwiJHZhcnMiLCIkdXR4dCIsIiRtdHh0IiwiJGFjdGlvbiIsIiRvblN1Y2Nlc3MiLCIkb25FcnJvciIsIiRvbkFsd2F5cyIsIiRhamF4IiwicmVzIiwiY29tcGlsZWQiLCJvcHRpb25zIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsInZhcmlhYmxlIiwidGVtcGxhdGUiLCIkZWxlbXMiLCJlYWNoIiwiJHRvZ2dsZSIsIiRleF9jbGFzcyIsIiRlbGVtZW50IiwicGFyYW0iLCJuZXN0YWJsZSIsIiR0aGlzIiwiYmFzZSIsIiRlbCIsImluaXQiLCJydWxlc2V0IiwiZGVwcyIsImNyZWF0ZVJ1bGVzZXQiLCJkZXBSb290IiwiJF9kZXBzX2Z1bmN0aW9ucyIsInNob3ciLCJzbGlkZURvd24iLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJjaGVja1RhcmdldHMiLCJlbmFibGUiLCJXUE9uaW9uX0RlcGVuZGVuY3kiLCJzZXRfYXJncyIsImZpZWxkX2RlYnVnIiwianNfZXJyb3JfaGFuZGxlciIsImpzX3ZhbGlkYXRvciIsImVyciIsImFwcGVuZFRvIiwianNfZXJyb3IiLCJtYXliZV9qc192YWxpZGF0ZV9lbGVtIiwiV1BPbmlvbl9WYWxpZGF0aW9uIiwiZ2V0X2Zvcm0iLCJqc192YWxpZGF0ZV9lbGVtIiwicnVsZXMiLCIkYXJnIiwianNfZnVuYyIsIiRleGlzdHMiLCIkd3Bvbmlvbl9kZWJ1ZyIsImdldCIsImlkIiwiYWRkIiwiJGluZm8iLCIkZm91bmQiLCIkSUQiLCJ0aXBweSIsImNvbnRlbnQiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCIsIiRkIiwiJG5vdGljZV90eHQiLCJoZWlnaHRBdXRvIiwiX2FyZ3MiLCIkYWpheF9rZXkiLCJwbHVnaW5faWQiLCIkdHlwZSIsIndwb25pb25faW5pdF9maWVsZCIsImluaXRfc2luZ2xlX2ZpZWxkIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwiaXMiLCJzbGlkZVRvZ2dsZSIsInNsaWRlVXAiLCIkaHJlZiIsImhlbHBlciIsIiRsb29rdXAiLCJCYXNlIiwiV1BPbmlvbl9WYWxpZGF0b3IiLCJmb3JtIiwiaW52YWxpZEhhbmRsZXIiLCJzaWJsaW5ncyIsImJlZm9yZSIsImlnbm9yZSIsImVycm9yUGxhY2VtZW50IiwidHJpZ2dlciIsImVycm9yQ2xhc3MiLCJlcnJvckVsZW1lbnQiLCJ2YWxpZGF0ZSIsImZpZWxkIiwiYWNjb3JkaW9uIiwiaGVhZGVyIiwiY29sbGFwc2libGUiLCJhbmltYXRlIiwiaGVpZ2h0U3R5bGUiLCJpY29ucyIsIklEdG9FbGVtZW50IiwiV1BPbmlvbl9GaWVsZCIsInciLCJ3cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkIiwiZmllbGRfYWJzdHJhY3QiLCJ0b29sdGlwIiwiaGFuZGxlX2JhY2t1cF9pbXBvcnQiLCIkZmlsZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmb3JjZV9kb3dubG9hZCIsImJsb2NrX2Zvcm0iLCJ1bmlxdWUiLCJleHRyYSIsImdldF9leHRyYV92YWx1ZSIsInN3YWxfZXJyb3IiLCJ1bmJsb2NrX2Zvcm0iLCIkaW5zIiwidGlwcHlfZ2V0IiwiaW5zdGFuY2VzIiwiZGVzdHJveSIsImJhY2t1cF9pZCIsInJlc3RvcmVfYmFja3VwIiwibXNnIiwidHlwZSIsIl90aXBweSIsInNob3dfdG9vbHRpcCIsImV4cG9ydE9iaiIsImV4cG9ydE5hbWUiLCJkYXRhU3RyIiwiZG93bmxvYWRBbmNob3JOb2RlIiwiY2xpY2siLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZWFkQXNUZXh0IiwiJGJhY2t1cGlkIiwiJGFwcGVuZFRPIiwiaW50ZXJhY3RpdmUiLCJvblNob3duIiwicmVtb3ZlX2FjdGl2ZV9jbGFzcyIsImFkZF9hY3RpdmVfY2xhc3MiLCIkZSIsIiRjdXN0b21faW5wdXQiLCIkcmFkaW9zIiwiJGNoZWNrYm94IiwibW92ZUF0dHIiLCJoYW5kbGVfYXJncyIsImNob3NlbiIsIiRjbG9uZV93cmFwIiwiJGFkZF9idG4iLCIkbGltaXQiLCJsaW1pdCIsIiRlcm9yX21zZyIsImVycm9yX21zZyIsIiRzb3J0Iiwic29ydCIsIml0ZW1zIiwiaGFuZGxlIiwicGxhY2Vob2xkZXIiLCJldmVudCIsInVpIiwiY3NzIiwic3RvcCIsIldQT25pb25DbG9uZXIiLCJhZGRfYnRuIiwiY2xvbmVfZWxlbSIsInJlbW92ZV9idG4iLCJ0ZW1wbGF0ZUFmdGVyUmVuZGVyIiwid3Bvbmlvbl9maWVsZCIsInJlbG9hZCIsIm9uUmVtb3ZlQWZ0ZXIiLCJzb3J0YWJsZSIsIm9uTGltaXRSZWFjaGVkIiwicHJlcGVuZCIsIndwb25pb25fbm90aWNlIiwic2hvd19hbmltYXRpb24iLCJhbmltYXRpb25zIiwiaGlkZV9hbmltYXRpb24iLCJ3cENvbG9yUGlja2VyIiwiJHNldHRpbmdzIiwiJHZpZXciLCJwbHVnaW5zIiwicmFuZ2VQbHVnaW4iLCJpbnB1dCIsImZsYXRwaWNrciIsIiRyZXR1cm4iLCIkX2QiLCIkdmFsIiwiJGh0bWwiLCJ3ZWJzYWZlIiwiZm9udHMiLCJidWlsZF9vcHRpb25zIiwidmFyaWFudHMiLCJnb29nbGVfZm9udHMiLCIkdmFyaWFudCIsIiRodG1sX3RlbXAiLCIkaW5wdXQiLCIkcHJldmlldyIsIndwX21lZGlhX2ZyYW1lIiwiJGFkZCIsIiRlZGl0IiwiJGNsZWFyIiwiJG1hbmFnZSIsImlkcyIsIndoYXQiLCJzdGF0ZSIsIm1lZGlhIiwiZ2FsbGVyeSIsImxpYnJhcnkiLCJmcmFtZSIsIm11bHRpcGxlIiwib3BlbiIsImVkaXQiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsInNlbGVjdGVkSWRzIiwibW9kZWxzIiwiYXR0YWNobWVudCIsInRvSlNPTiIsInNpemVzIiwidGh1bWIiLCJ0aHVtYm5haWwiLCIkdG1wIiwiJHBhcmVudCIsIiRpbWFnZV9pZCIsIiRrIiwiJHYiLCJjdXJzb3IiLCJzY3JvbGxTZW5zaXRpdml0eSIsImZvcmNlUGxhY2Vob2xkZXJTaXplIiwib3BhY2l0eSIsIiRpdGVtIiwiaGVpZ2h0IiwiJG1hcCIsImRldGFpbHMiLCJkZXRhaWxzQXR0cmlidXRlIiwiJF9pbnN0YW5jZSIsImdlb2NvbXBsZXRlIiwiYmluZCIsImxhdExuZyIsImdlb2NvZGVyIiwiZ29vZ2xlIiwibWFwcyIsIkdlb2NvZGVyIiwiZ2VvY29kZSIsImxhdCIsInBhcnNlRmxvYXQiLCJsbmciLCIkZ3JvdXBfd3JhcCIsIiRlcnJvcl9tc2ciLCJiaW5kX2V2ZW50c19mb3JfdGl0bGUiLCJwYXJzZUludCIsIm9uUmVtb3ZlIiwidXBkYXRlX2dyb3Vwc190aXRsZSIsIiRtYWNoZWQiLCIkaGVhZGluZyIsIiRfdGhpcyIsIiRyZW1vdmVfYnRuIiwiJHdvcmsiLCJlbGVtcyIsInBvcHVwIiwiZWxtIiwiaW5pdF90b29sdGlwIiwicG9wdXBfdG9vbHRpcCIsIiR0cCIsIiRlcCIsImNsb25lRGVlcCIsIiRlbG0iLCIkaW5zdGFuY2UiLCIkaGVpZ2h0IiwiJGljb24iLCJjbG9zZU1vZGFsIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiJHJlcyIsInJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwiJHBvcHVwIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjdXN0b21DbGFzcyIsIiRwb3B1cF9lbGVtIiwiRmllbGQiLCJjb21wbGV0ZSIsIiRwcmV2aWV3X2FkZCIsIm1lZGlhX2luc3RhbmNlIiwiaG9vayIsImZpcnN0IiwiYXR0cmlidXRlcyIsImlucHV0bWFzayIsIiR0aGlzX2VsZW0iLCIkdGFiIiwiZ2xvYmFsX3ZhbGlkYXRlIiwiYWZ0ZXIiLCJlcSIsImltYWdlIiwic2hvd19wcmV2aWV3IiwiZHJvcGRvd25QYXJlbnQiLCJwcm9jZXNzUmVzdWx0cyIsInRlcm1zIiwicGFyYW1zIiwicSIsInRlcm0iLCJxdWVyeV9hcmdzIiwicXVlcnlfb3B0aW9ucyIsInRyYW5zcG9ydCIsImZhaWx1cmUiLCJzZWxlY3QyIiwiJGVuYWJsZWQiLCIkZGlzYWJsZWQiLCJjb25uZWN0V2l0aCIsImZvbnRfd2VpZ2h0X3N0eWxlIiwiJGZvbnRfZmllbGQiLCIkZm9udCIsIiRmb250X3dlaWdodF9zdHlsZSIsImZvbnRfc3R5bGUiLCIkdGFnIiwiJGNvbG9yIiwiJGFsaWduIiwiJGZvbnRTaXplIiwiJGxpbmVIZWlnaHQiLCIkbGV0dGVyU3BhY2luZyIsIndlaWdodCIsIiRfYXR0cnMiLCIkdGV4dCIsIiR3ZWlnaHRfdmFsIiwiJHN0eWxlX3ZhbCIsImZyYW1lX3RpdGxlIiwidXBsb2FkX3R5cGUiLCJpbnNlcnRfdGl0bGUiLCIkdGV4dGFyZWEiLCJ3cExpbmsiLCIkZGVwIiwiY29udHJvbGxlciIsImNvbmRpdGlvbiIsIiRjb250cm9sbGVyIiwiJGNvbmRpdGlvbiIsIiRmaWVsZCIsIiRJTlBVVCIsIiRhIiwiY29udHh0IiwiY3JlYXRlUnVsZSIsImluY2x1ZGUiLCJleHRlbmQiLCJhbmltYXRlQ3NzIiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkVuZCIsIk9BbmltYXRpb24iLCJNb3pBbmltYXRpb24iLCJXZWJraXRBbmltYXRpb24iLCJ0Iiwib25lIiwiJGFyZ3VtZW50cyIsInRpcHB5X2hlbHBlciIsImNyZWF0ZV9pbnN0YW5jZSIsIiRfaW5zdGFuY2VfaWQiLCJjb3JlIiwicmFuZF9pZCIsIiR0aXRsZSIsIiRkYXRhX3RpcHB5IiwiZ2V0X2luc3RhbmNlIiwiJHN0YXR1cyIsImNvcHlBdHRyIiwiZnJvbSIsInRvIiwiJGV4aXN0aW5nIiwiJF9lbCIsIiRhdXRvIiwiJGxlZnQiLCIkcnVubmRlciIsInNldFRpbWVvdXQiLCJ3cG9uaW9uX3NldHVwIiwiJGNvcmUiLCIkdGFucyIsIiRtb2R1bGUiLCJ3cG9uaW9uX2NyZWF0ZV9maWVsZCIsIiRpbml0X21ldGhvZCIsIiRtZXRob2RzIiwiJG9yZ19jbGFzcyIsIiRmaWVsZF90eXBlIiwiJGFyZ3VtZW50IiwiJGxvZ19lcnIiLCIkaW1hZ2UiLCJpbWFnZVVybCIsImJhY2tncm91bmQiLCJiYWNrZHJvcCIsIiRtY2VfZWRpdG9yIiwidGlueU1DRVByZUluaXQiLCJtY2VJbml0IiwiJHF1aWNrX3RhZ3MiLCJxdEluaXQiLCIkTkVXX0lEIiwiJHRleHRBcmVhIiwiJGFjdHVhbF9JRCIsIiRhY3R1YWxfaHRtbCIsIiRyZWdleCIsInRpbnltY2UiLCJ0aW55TUNFIiwicXVpY2t0YWdzIiwiJGZpZCIsIiR0b29sdGlwX2tleSIsInZhbGlkX2pzb24iLCJpc0ZldGNoaW5nIiwiY2FuRmV0Y2giLCIkY2xhc3NUb0NoZWNrIiwiJGF0dHIiLCJ1cGRhdGVEdXJhdGlvbiIsIm9uU2hvdyIsInRpcCIsInJlc3BvbnNlIiwiZmV0Y2giLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNWaXNpYmxlIiwic2V0Q29udGVudCIsIm9uSGlkZGVuIiwicG9wcGVyT3B0aW9ucyIsIm1vZGlmaWVycyIsInByZXZlbnRPdmVyZmxvdyIsImZvbGxvd0N1cnNvciIsImljb24iLCIkZmluYWxfYXJncyIsInBvc3RfaWRzIiwiJGJ1bGtfZWRpdCIsImNoaWxkcmVuIiwic2VyaWFsaXplSlNPTiIsImFzeW5jIiwiY2FjaGUiLCJXUE9uaW9uX0d1dHRlbmJlcmciLCJzYXZlIiwiYmxvY2siLCJzYXZlX2hhbmRsZXIiLCJlZGl0X2hhbmRsZXIiLCJibG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsIiRfcG9zdGlkcyIsInBvc3RfaWQiLCJibG9ja19pZCIsImNsaWVudElkIiwiJHJlbW90ZSIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwiZWRpdG9yIiwiJHdwb19ibG9ja3MiLCJpc0FycmF5IiwiZml4X21lZGlhX3VpIiwiJHRhYmxlIiwiJGZpZWxkcyIsImZyYW1lcyIsImJyb3dzZSIsIldQT25pb25fTWV0YWJveF9Nb2R1bGUiLCJ1aV9tZW51X2hhbmRsZXIiLCIkYmFzZSIsIiRoaWRkZW4iLCJtZXNzYWdlIiwib3ZlcmxheUNTUyIsIiR2YWx1ZXMiLCJzZXJpYWxpemUiLCJ1bmJsb2NrIiwiV1BPbmlvbl9RdWlja19FZGl0IiwidmFsdWVzIiwiJGxpc3QiLCJjbG9zZXN0IiwiV1BPbmlvbl9TZXR0aW5nc19Nb2R1bGUiLCJ2YyIsIndwb25pb25fdmMiLCJmaWVsZHMiLCJhYnN0cmFjdCIsIndwb25pb25fdmNfaW5pdCIsIndwb25pb25fdmNfZmllbGQiLCJ3cG9uaW9uX2NyZWF0ZV92Y19maWVsZCIsImlzX3ZjX3BhcmFtX2VsZW0iLCJpbnB1dF9jaGFuZ2UiLCJpbnB1dF9kYXRhIiwiV1BPbmlvbl9WQ19GaWVsZCIsImhhbmRsZV9zaW5nbGVfY2hhbmdlIiwiJHNhdmVfZGF0YSIsInNpbXBsZV9hcnJheSIsImtleV92YWx1ZV9hcnJheSIsImtleV92YWx1ZV9tdWx0aV9hcnJheSIsInNvcnRlcl92YWx1ZXMiLCJ2Y19zYXZlIiwiJHBhcmFtX25hbWUiLCJwYXJhbV9uYW1lIiwiJHIiLCIkcyIsImVuY29kZV9jb250ZW50IiwiJHNlbGVjdCIsIldQT25pb25fb25BdmFpbGFibGUiLCJzZWwiLCJ3cG9uaW9uX3dwX3BvaW50ZXJfY3JlYXRlIiwiJHBvaW50ZXJzX2dyb3VwIiwiJGdyb3VwX2lkIiwiJHBvaW50ZXJfa2V5IiwiJHBvaW50ZXIiLCIkaGFuZGxlciIsInBvaW50ZXJXaWR0aCIsInBvaW50ZXJDbGFzcyIsImNsYXNzIiwiZWRnZSIsImFsaWduIiwiY2xvc2UiLCJwb3N0IiwicG9pbnRlciIsImJ1dHRvbnMiLCJqc25leHQiLCIkbmV4dCIsImljb25fY2xhc3MiLCJzZXR1cCIsIiRwaWQiLCJ2c3BfanNfaGVscGVyIiwibG9kYXNoIiwibm9Db25mbGljdCIsInNldHRpbmdzIiwibWV0YWJveCIsIndwX3BvaW50ZXJzIiwibWVkaWFfZmllbGRzIiwiYnVsa19lZGl0IiwiZ3V0dGVuYmVyZyIsIndvb2NvbW1lcmNlIiwicXVpY2tfZWRpdCIsInZpc3VhbF9jb21wb3NlciIsIm1vZGFsIiwiYWpheGVyIiwiZGVidWciLCIkd3BvZl9kaXYiLCJzdWJtZW51X2luZGljYXRvciIsInRvZ2dsZUNsYXNzIiwiJHdpZGdldCIsIiRtZW51IiwiV1BPbmlvbl9XUF9Nb2RhbCIsIkJhY2tib25lIiwiVmlldyIsInRlbXBsYXRlcyIsImV2ZW50cyIsImFjdGl2ZV9wYWdlIiwiYWN0aXZlX3NlY3Rpb24iLCJpbml0aWFsaXplIiwibGVmdF9tZW51IiwiaGlkZV9tZW51IiwiYmluZEFsbCIsImluaXRfdGVtcGxhdGVzIiwicmVuZGVyIiwiJG0iLCJmcmFtZV9tZW51X2l0ZW0iLCJyb3V0ZXJfbWVudV9pdGVtIiwicGFnZV9jb250ZW50Iiwic2VjdGlvbl9jb250ZW50IiwiJGNvbnRlbnQiLCIkX2NvbnRlbnQiLCIkX21lbnUiLCJwcmVzZXJ2ZUZvY3VzIiwiZm9jdXMiLCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrIiwiJHRhcmdldCIsIiRzaG93X3RhcmdldCIsImhhbmRsZV90YWJfY2xpY2siLCIkcGFnZSIsImhhcyIsInVuZGVsZWdhdGVFdmVudHMiLCJvZmYiLCJzYXZlTW9kYWwiLCJkb05vdGhpbmciLCIkb3B0aW9ucyIsImdldF9sZWZ0X21lbnUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBUUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUI7Ozs7Ozs7O0FBUUEsU0FBTyxTQUFTQyxPQUFULENBQWlCQyxRQUFqQixFQUEyQkMsU0FBM0IsRUFBc0NDLFFBQXRDLEVBQWdEO0FBQ3JELFFBQUlDLFdBQVdDLFVBQVVDLE1BQVYs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MUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk8sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlEsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQkssR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQk0sR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk8sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlEsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUQsSUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQkssR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBMUIsUUFBSUosSUFBSUksQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk0sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBNUIsUUFBSUgsSUFBSUcsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQk8sR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBOUIsUUFBSUYsSUFBSUUsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlEsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlUsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlcsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlUsR0FBM0IsRUFBZ0MsU0FBaEMsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlcsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlMsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBOUIsUUFBSUUsSUFBSUYsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlQsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlUsR0FBM0IsRUFBZ0MsVUFBaEMsQ0FBSjtBQUNBaEMsUUFBSUcsSUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQlIsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlcsR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBbEMsUUFBSUksSUFBSUosQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQlAsRUFBRStCLElBQUksQ0FBTixDQUFoQixFQUEwQlksR0FBMUIsRUFBK0IsVUFBL0IsQ0FBSjtBQUNBcEMsUUFBSUssSUFBSUwsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQlYsRUFBRStCLElBQUksRUFBTixDQUFoQixFQUEyQlMsR0FBM0IsRUFBZ0Ms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QUluQixLQUFLQSxPQUFMLENBQWMsT0FBZCxDQUptQixDQUF0QjtBQUtBOzs7O2tDQUVlO0FBQ2YsT0FBSTJMLFVBQVUsS0FBZDtBQUNBLE9BQUksS0FBSzNMLE9BQUwsQ0FBYyxNQUFkLENBQUosRUFBNkI7QUFDNUIyTCxjQUFVLEVBQVY7O0FBRUFuWixNQUFFK04sSUFBRixDQUFRLEtBQUtQLE9BQUwsQ0FBYyxNQUFkLENBQVIsRUFBZ0MsVUFBRTNOLEtBQUYsRUFBU1UsSUFBVCxFQUFtQjtBQUNsRDRZLGFBQVM1WSxJQUFULElBQW9CLE9BQU9WLE1BQU8sWUFBUCxDQUFQLEtBQWlDLFdBQW5DLEdBQW1EQSxNQUFPLFlBQVAsQ0FBbkQsR0FBMkVBLE1BQU8sT0FBUCxDQUE3RjtBQUNBLEtBRkQ7QUFHQTtBQUNELFVBQU9zWixPQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE1GLG1DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy93cG9uaW9uLWNvcmUuanNcIik7XG4iLCJpbXBvcnQgdmFsaWRhdGVOYW1lc3BhY2UgZnJvbSAnLi92YWxpZGF0ZU5hbWVzcGFjZS5qcyc7XG5pbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuaW1wb3J0IHsgZG9BY3Rpb24gfSBmcm9tICcuLyc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIGFkZCBhIGhvb2suXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICBGdW5jdGlvbiB0aGF0IGFkZHMgYSBuZXcgaG9vay5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBob29rIHRvIHRoZSBhcHByb3ByaWF0ZSBob29rcyBjb250YWluZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIGhvb2tOYW1lICBOYW1lIG9mIGhvb2sgdG8gYWRkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWVzcGFjZSBUaGUgdW5pcXVlIG5hbWVzcGFjZSBpZGVudGlmeWluZyB0aGUgY2FsbGJhY2sgaW4gdGhlIGZvcm0gYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAgRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBob29rIGlzIHJ1blxuICAgKiBAcGFyYW0gez9udW1iZXJ9ICBwcmlvcml0eSAgUHJpb3JpdHkgb2YgdGhpcyBob29rIChkZWZhdWx0PTEwKVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGFkZEhvb2soaG9va05hbWUsIG5hbWVzcGFjZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDEwO1xuXG4gICAgaWYgKCF2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGJhY2spIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgaG9vayBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBWYWxpZGF0ZSBudW1lcmljIHByaW9yaXR5XG5cblxuICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIHByaW9yaXR5KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignSWYgc3BlY2lmaWVkLCB0aGUgaG9vayBwcmlvcml0eSBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICB9O1xuXG4gICAgaWYgKGhvb2tzW2hvb2tOYW1lXSkge1xuICAgICAgLy8gRmluZCB0aGUgY29ycmVjdCBpbnNlcnQgaW5kZXggb2YgdGhlIG5ldyBob29rLlxuICAgICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB3aGlsZSAoaSA8IGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbaV0ucHJpb3JpdHkgPiBwcmlvcml0eSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaSsrO1xuICAgICAgfSAvLyBJbnNlcnQgKG9yIGFwcGVuZCkgdGhlIG5ldyBob29rLlxuXG5cbiAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAwLCBoYW5kbGVyKTsgLy8gV2UgbWF5IGFsc28gYmUgY3VycmVudGx5IGV4ZWN1dGluZyB0aGlzIGhvb2suICBJZiB0aGUgY2FsbGJhY2tcbiAgICAgIC8vIHdlJ3JlIGFkZGluZyB3b3VsZCBjb21lIGFmdGVyIHRoZSBjdXJyZW50IGNhbGxiYWNrLCB0aGVyZSdzIG5vXG4gICAgICAvLyBwcm9ibGVtOyBvdGhlcndpc2Ugd2UgbmVlZCB0byBpbmNyZWFzZSB0aGUgZXhlY3V0aW9uIGluZGV4IG9mXG4gICAgICAvLyBhbnkgb3RoZXIgcnVucyBieSAxIHRvIGFjY291bnQgZm9yIHRoZSBhZGRlZCBlbGVtZW50LlxuXG4gICAgICAoaG9va3MuX19jdXJyZW50IHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChob29rSW5mbykge1xuICAgICAgICBpZiAoaG9va0luZm8ubmFtZSA9PT0gaG9va05hbWUgJiYgaG9va0luZm8uY3VycmVudEluZGV4ID49IGkpIHtcbiAgICAgICAgICBob29rSW5mby5jdXJyZW50SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGhvb2sgb2YgaXRzIHR5cGUuXG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbaGFuZGxlcl0sXG4gICAgICAgIHJ1bnM6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGhvb2tOYW1lICE9PSAnaG9va0FkZGVkJykge1xuICAgICAgZG9BY3Rpb24oJ2hvb2tBZGRlZCcsIGhvb2tOYW1lLCBuYW1lc3BhY2UsIGNhbGxiYWNrLCBwcmlvcml0eSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlQWRkSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB0aGUgbmFtZSBvZiB0aGVcbiAqIGN1cnJlbnRseSBydW5uaW5nIGhvb2ssIG9yIGBudWxsYCBpZiBubyBob29rIG9mIHRoZSBnaXZlbiB0eXBlIGlzIGN1cnJlbnRseVxuICogcnVubmluZy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICAgICAgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBob29rLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50SG9vayhob29rcykge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudGx5IHJ1bm5pbmcgaG9vaywgb3IgYG51bGxgIGlmIG5vIGhvb2sgb2ZcbiAgICogdGhlIGdpdmVuIHR5cGUgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAqXG4gICAqIEByZXR1cm4gez9zdHJpbmd9ICAgICAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSBjdXJyZW50bHkgcnVubmluZyBob29rLCBvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbnVsbGAgaWYgbm8gaG9vayBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBjdXJyZW50SG9vaygpIHtcbiAgICBpZiAoIWhvb2tzLl9fY3VycmVudCB8fCAhaG9va3MuX19jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzLl9fY3VycmVudFtob29rcy5fX2N1cnJlbnQubGVuZ3RoIC0gMV0ubmFtZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VycmVudEhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVDdXJyZW50SG9vay5qcy5tYXAiLCJpbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gdGhlIG51bWJlciBvZiB0aW1lcyBhXG4gKiBob29rIGhhcyBiZWVuIGNhbGxlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGhvb2sncyBjYWxsIGNvdW50LlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURpZEhvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyBhbiBhY3Rpb24gaGFzIGJlZW4gZmlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIGhvb2sgbmFtZSB0byBjaGVjay5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgICBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBob29rIGhhcyBydW4uXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gZGlkSG9vayhob29rTmFtZSkge1xuICAgIGlmICghdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3NbaG9va05hbWVdICYmIGhvb2tzW2hvb2tOYW1lXS5ydW5zID8gaG9va3NbaG9va05hbWVdLnJ1bnMgOiAwO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaWRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlRGlkSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB3aGV0aGVyIGEgaG9vayBpc1xuICogY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgYSBob29rIGlzIGN1cnJlbnRseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGV4ZWN1dGVkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVEb2luZ0hvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBhIGhvb2sgaXMgY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHs/c3RyaW5nfSBob29rTmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBjaGVjayBmb3IuICBJZlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbWl0dGVkLCB3aWxsIGNoZWNrIGZvciBhbnkgaG9vayBiZWluZyBleGVjdXRlZC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgV2hldGhlciB0aGUgaG9vayBpcyBiZWluZyBleGVjdXRlZC5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBkb2luZ0hvb2soaG9va05hbWUpIHtcbiAgICAvLyBJZiB0aGUgaG9va05hbWUgd2FzIG5vdCBwYXNzZWQsIGNoZWNrIGZvciBhbnkgY3VycmVudCBob29rLlxuICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGhvb2tOYW1lKSB7XG4gICAgICByZXR1cm4gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBob29rcy5fX2N1cnJlbnRbMF07XG4gICAgfSAvLyBSZXR1cm4gdGhlIF9fY3VycmVudCBob29rLlxuXG5cbiAgICByZXR1cm4gaG9va3MuX19jdXJyZW50WzBdID8gaG9va05hbWUgPT09IGhvb2tzLl9fY3VycmVudFswXS5uYW1lIDogZmFsc2U7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURvaW5nSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZURvaW5nSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB3aGV0aGVyIGFueSBoYW5kbGVycyBhcmVcbiAqIGF0dGFjaGVkIHRvIGEgcGFydGljdWxhciBob29rLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgYW55IGhhbmRsZXJzIGFyZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaGVkIHRvIGEgcGFydGljdWxhciBob29rLlxuICovXG5mdW5jdGlvbiBjcmVhdGVIYXNIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGhvdyBtYW55IGhhbmRsZXJzIGFyZSBhdHRhY2hlZCBmb3IgdGhlIGdpdmVuIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gIGhvb2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIGNoZWNrIGZvci5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGVyZSBhcmUgaGFuZGxlcnMgdGhhdCBhcmUgYXR0YWNoZWQgdG8gdGhlIGdpdmVuIGhvb2suXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gaGFzSG9vayhob29rTmFtZSkge1xuICAgIHJldHVybiBob29rTmFtZSBpbiBob29rcztcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGFzSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUhhc0hvb2suanMubWFwIiwiaW1wb3J0IGNyZWF0ZUFkZEhvb2sgZnJvbSAnLi9jcmVhdGVBZGRIb29rJztcbmltcG9ydCBjcmVhdGVSZW1vdmVIb29rIGZyb20gJy4vY3JlYXRlUmVtb3ZlSG9vayc7XG5pbXBvcnQgY3JlYXRlSGFzSG9vayBmcm9tICcuL2NyZWF0ZUhhc0hvb2snO1xuaW1wb3J0IGNyZWF0ZVJ1bkhvb2sgZnJvbSAnLi9jcmVhdGVSdW5Ib29rJztcbmltcG9ydCBjcmVhdGVDdXJyZW50SG9vayBmcm9tICcuL2NyZWF0ZUN1cnJlbnRIb29rJztcbmltcG9ydCBjcmVhdGVEb2luZ0hvb2sgZnJvbSAnLi9jcmVhdGVEb2luZ0hvb2snO1xuaW1wb3J0IGNyZWF0ZURpZEhvb2sgZnJvbSAnLi9jcmVhdGVEaWRIb29rJztcbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgaG9va3Mgb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIGhvb2tzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvb2tzKCkge1xuICB2YXIgYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBmaWx0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgYWN0aW9ucy5fX2N1cnJlbnQgPSBbXTtcbiAgZmlsdGVycy5fX2N1cnJlbnQgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhZGRBY3Rpb246IGNyZWF0ZUFkZEhvb2soYWN0aW9ucyksXG4gICAgYWRkRmlsdGVyOiBjcmVhdGVBZGRIb29rKGZpbHRlcnMpLFxuICAgIHJlbW92ZUFjdGlvbjogY3JlYXRlUmVtb3ZlSG9vayhhY3Rpb25zKSxcbiAgICByZW1vdmVGaWx0ZXI6IGNyZWF0ZVJlbW92ZUhvb2soZmlsdGVycyksXG4gICAgaGFzQWN0aW9uOiBjcmVhdGVIYXNIb29rKGFjdGlvbnMpLFxuICAgIGhhc0ZpbHRlcjogY3JlYXRlSGFzSG9vayhmaWx0ZXJzKSxcbiAgICByZW1vdmVBbGxBY3Rpb25zOiBjcmVhdGVSZW1vdmVIb29rKGFjdGlvbnMsIHRydWUpLFxuICAgIHJlbW92ZUFsbEZpbHRlcnM6IGNyZWF0ZVJlbW92ZUhvb2soZmlsdGVycywgdHJ1ZSksXG4gICAgZG9BY3Rpb246IGNyZWF0ZVJ1bkhvb2soYWN0aW9ucyksXG4gICAgYXBwbHlGaWx0ZXJzOiBjcmVhdGVSdW5Ib29rKGZpbHRlcnMsIHRydWUpLFxuICAgIGN1cnJlbnRBY3Rpb246IGNyZWF0ZUN1cnJlbnRIb29rKGFjdGlvbnMpLFxuICAgIGN1cnJlbnRGaWx0ZXI6IGNyZWF0ZUN1cnJlbnRIb29rKGZpbHRlcnMpLFxuICAgIGRvaW5nQWN0aW9uOiBjcmVhdGVEb2luZ0hvb2soYWN0aW9ucyksXG4gICAgZG9pbmdGaWx0ZXI6IGNyZWF0ZURvaW5nSG9vayhmaWx0ZXJzKSxcbiAgICBkaWRBY3Rpb246IGNyZWF0ZURpZEhvb2soYWN0aW9ucyksXG4gICAgZGlkRmlsdGVyOiBjcmVhdGVEaWRIb29rKGZpbHRlcnMpLFxuICAgIGFjdGlvbnM6IGFjdGlvbnMsXG4gICAgZmlsdGVyczogZmlsdGVyc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb29rcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUhvb2tzLmpzLm1hcCIsImltcG9ydCB2YWxpZGF0ZU5hbWVzcGFjZSBmcm9tICcuL3ZhbGlkYXRlTmFtZXNwYWNlLmpzJztcbmltcG9ydCB2YWxpZGF0ZUhvb2tOYW1lIGZyb20gJy4vdmFsaWRhdGVIb29rTmFtZS5qcyc7XG5pbXBvcnQgeyBkb0FjdGlvbiB9IGZyb20gJy4vJztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmVtb3ZlIGEgc3BlY2lmaWVkIGhvb2sgb3IgYWxsXG4gKiBob29rcyBieSB0aGUgZ2l2ZW4gbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqIEBwYXJhbSAge2Jvb2xlYW59ICAgICByZW1vdmVBbGwgIFdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBjYWxsYmFja3MgZm9yIGEgaG9va05hbWUsIHdpdGhvdXQgcmVnYXJkIHRvIG5hbWVzcGFjZS4gVXNlZCB0byBjcmVhdGUgYHJlbW92ZUFsbCpgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgaG9va3MuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUmVtb3ZlSG9vayhob29rcywgcmVtb3ZlQWxsKSB7XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgKG9yIGFsbCBjYWxsYmFja3MpIGZyb20gdGhlIGhvb2sgd2l0aCBhXG4gICAqIGdpdmVuIGhvb2tOYW1lIGFuZCBuYW1lc3BhY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBob29rTmFtZSAgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gbW9kaWZ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgbmFtZXNwYWNlIFRoZSB1bmlxdWUgbmFtZXNwYWNlIGlkZW50aWZ5aW5nIHRoZSBjYWxsYmFjayBpbiB0aGUgZm9ybSBgdmVuZG9yL3BsdWdpbi9mdW5jdGlvbmAuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gICAgICAgICAgICAgVGhlIG51bWJlciBvZiBjYWxsYmFja3MgcmVtb3ZlZC5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmVIb29rKGhvb2tOYW1lLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAoIXZhbGlkYXRlSG9va05hbWUoaG9va05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFyZW1vdmVBbGwgJiYgIXZhbGlkYXRlTmFtZXNwYWNlKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEJhaWwgaWYgbm8gaG9va3MgZXhpc3QgYnkgdGhpcyBuYW1lXG5cblxuICAgIGlmICghaG9va3NbaG9va05hbWVdKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcnNSZW1vdmVkID0gMDtcblxuICAgIGlmIChyZW1vdmVBbGwpIHtcbiAgICAgIGhhbmRsZXJzUmVtb3ZlZCA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycy5sZW5ndGg7XG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIHJ1bnM6IGhvb2tzW2hvb2tOYW1lXS5ydW5zLFxuICAgICAgICBoYW5kbGVyczogW11cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgdG8gcmVtb3ZlLlxuICAgICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgIGlmIChoYW5kbGVyc1tpXS5uYW1lc3BhY2UgPT09IG5hbWVzcGFjZSkge1xuICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBoYW5kbGVyc1JlbW92ZWQrKzsgLy8gVGhpcyBjYWxsYmFjayBtYXkgYWxzbyBiZSBwYXJ0IG9mIGEgaG9vayB0aGF0IGlzXG4gICAgICAgICAgLy8gY3VycmVudGx5IGV4ZWN1dGluZy4gIElmIHRoZSBjYWxsYmFjayB3ZSdyZSByZW1vdmluZ1xuICAgICAgICAgIC8vIGNvbWVzIGFmdGVyIHRoZSBjdXJyZW50IGNhbGxiYWNrLCB0aGVyZSdzIG5vIHByb2JsZW07XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIGV4ZWN1dGlvbiBpbmRleCBvZiBhbnlcbiAgICAgICAgICAvLyBvdGhlciBydW5zIGJ5IDEgdG8gYWNjb3VudCBmb3IgdGhlIHJlbW92ZWQgZWxlbWVudC5cblxuICAgICAgICAgIChob29rcy5fX2N1cnJlbnQgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGhvb2tJbmZvKSB7XG4gICAgICAgICAgICBpZiAoaG9va0luZm8ubmFtZSA9PT0gaG9va05hbWUgJiYgaG9va0luZm8uY3VycmVudEluZGV4ID49IGkpIHtcbiAgICAgICAgICAgICAgaG9va0luZm8uY3VycmVudEluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBfbG9vcChpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaG9va05hbWUgIT09ICdob29rUmVtb3ZlZCcpIHtcbiAgICAgIGRvQWN0aW9uKCdob29rUmVtb3ZlZCcsIGhvb2tOYW1lLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyc1JlbW92ZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlbW92ZUhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSZW1vdmVIb29rLmpzLm1hcCIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgZXhlY3V0ZSBhbGwgY2FsbGJhY2tzXG4gKiByZWdpc3RlcmVkIHRvIGEgaG9vayBvZiB0aGUgc3BlY2lmaWVkIHR5cGUsIG9wdGlvbmFsbHkgcmV0dXJuaW5nIHRoZSBmaW5hbFxuICogdmFsdWUgb2YgdGhlIGNhbGwgY2hhaW4uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzICAgICAgICAgIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICogQHBhcmFtICB7P2Jvb2xlYW59ICAgIHJldHVybkZpcnN0QXJnIFdoZXRoZXIgZWFjaCBob29rIGNhbGxiYWNrIGlzIGV4cGVjdGVkIHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0cyBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICAgICAgRnVuY3Rpb24gdGhhdCBydW5zIGhvb2sgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSdW5Ib29rKGhvb2tzLCByZXR1cm5GaXJzdEFyZykge1xuICAvKipcbiAgICogUnVucyBhbGwgY2FsbGJhY2tzIGZvciB0aGUgc3BlY2lmaWVkIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gcnVuLlxuICAgKiBAcGFyYW0gIHsuLi4qfSAgIGFyZ3MgICAgIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBob29rIGNhbGxiYWNrcy5cbiAgICpcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICBSZXR1cm4gdmFsdWUgb2YgcnVubmVyLCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIHJ1bkhvb2tzKGhvb2tOYW1lKSB7XG4gICAgaWYgKCFob29rc1tob29rTmFtZV0pIHtcbiAgICAgIGhvb2tzW2hvb2tOYW1lXSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICBydW5zOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGhvb2tzW2hvb2tOYW1lXS5ydW5zKys7XG4gICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVycyB8fCAhaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmV0dXJuRmlyc3RBcmcgPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBob29rSW5mbyA9IHtcbiAgICAgIG5hbWU6IGhvb2tOYW1lLFxuICAgICAgY3VycmVudEluZGV4OiAwXG4gICAgfTtcblxuICAgIGhvb2tzLl9fY3VycmVudC5wdXNoKGhvb2tJbmZvKTtcblxuICAgIHdoaWxlIChob29rSW5mby5jdXJyZW50SW5kZXggPCBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNbaG9va0luZm8uY3VycmVudEluZGV4XTtcbiAgICAgIHZhciByZXN1bHQgPSBoYW5kbGVyLmNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xuXG4gICAgICBpZiAocmV0dXJuRmlyc3RBcmcpIHtcbiAgICAgICAgYXJnc1swXSA9IHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaG9va0luZm8uY3VycmVudEluZGV4Kys7XG4gICAgfVxuXG4gICAgaG9va3MuX19jdXJyZW50LnBvcCgpO1xuXG4gICAgaWYgKHJldHVybkZpcnN0QXJnKSB7XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJ1bkhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSdW5Ib29rLmpzLm1hcCIsImltcG9ydCBjcmVhdGVIb29rcyBmcm9tICcuL2NyZWF0ZUhvb2tzJztcblxudmFyIF9jcmVhdGVIb29rcyA9IGNyZWF0ZUhvb2tzKCksXG4gICAgYWRkQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmFkZEFjdGlvbixcbiAgICBhZGRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuYWRkRmlsdGVyLFxuICAgIHJlbW92ZUFjdGlvbiA9IF9jcmVhdGVIb29rcy5yZW1vdmVBY3Rpb24sXG4gICAgcmVtb3ZlRmlsdGVyID0gX2NyZWF0ZUhvb2tzLnJlbW92ZUZpbHRlcixcbiAgICBoYXNBY3Rpb24gPSBfY3JlYXRlSG9va3MuaGFzQWN0aW9uLFxuICAgIGhhc0ZpbHRlciA9IF9jcmVhdGVIb29rcy5oYXNGaWx0ZXIsXG4gICAgcmVtb3ZlQWxsQWN0aW9ucyA9IF9jcmVhdGVIb29rcy5yZW1vdmVBbGxBY3Rpb25zLFxuICAgIHJlbW92ZUFsbEZpbHRlcnMgPSBfY3JlYXRlSG9va3MucmVtb3ZlQWxsRmlsdGVycyxcbiAgICBkb0FjdGlvbiA9IF9jcmVhdGVIb29rcy5kb0FjdGlvbixcbiAgICBhcHBseUZpbHRlcnMgPSBfY3JlYXRlSG9va3MuYXBwbHlGaWx0ZXJzLFxuICAgIGN1cnJlbnRBY3Rpb24gPSBfY3JlYXRlSG9va3MuY3VycmVudEFjdGlvbixcbiAgICBjdXJyZW50RmlsdGVyID0gX2NyZWF0ZUhvb2tzLmN1cnJlbnRGaWx0ZXIsXG4gICAgZG9pbmdBY3Rpb24gPSBfY3JlYXRlSG9va3MuZG9pbmdBY3Rpb24sXG4gICAgZG9pbmdGaWx0ZXIgPSBfY3JlYXRlSG9va3MuZG9pbmdGaWx0ZXIsXG4gICAgZGlkQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmRpZEFjdGlvbixcbiAgICBkaWRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuZGlkRmlsdGVyLFxuICAgIGFjdGlvbnMgPSBfY3JlYXRlSG9va3MuYWN0aW9ucyxcbiAgICBmaWx0ZXJzID0gX2NyZWF0ZUhvb2tzLmZpbHRlcnM7XG5cbmV4cG9ydCB7IGNyZWF0ZUhvb2tzLCBhZGRBY3Rpb24sIGFkZEZpbHRlciwgcmVtb3ZlQWN0aW9uLCByZW1vdmVGaWx0ZXIsIGhhc0FjdGlvbiwgaGFzRmlsdGVyLCByZW1vdmVBbGxBY3Rpb25zLCByZW1vdmVBbGxGaWx0ZXJzLCBkb0FjdGlvbiwgYXBwbHlGaWx0ZXJzLCBjdXJyZW50QWN0aW9uLCBjdXJyZW50RmlsdGVyLCBkb2luZ0FjdGlvbiwgZG9pbmdGaWx0ZXIsIGRpZEFjdGlvbiwgZGlkRmlsdGVyLCBhY3Rpb25zLCBmaWx0ZXJzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFZhbGlkYXRlIGEgaG9va05hbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIGhvb2sgbmFtZSB0byB2YWxpZGF0ZS4gU2hvdWxkIGJlIGEgbm9uIGVtcHR5IHN0cmluZyBjb250YWluaW5nXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHkgbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzIGFuZCB1bmRlcnNjb3Jlcy4gQWxzbyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGhvb2sgbmFtZSBjYW5ub3QgYmVnaW4gd2l0aCBgX19gLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgV2hldGhlciB0aGUgaG9vayBuYW1lIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGhvb2tOYW1lIHx8ICcnID09PSBob29rTmFtZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoL15fXy8udGVzdChob29rTmFtZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIG5hbWUgY2Fubm90IGJlZ2luIHdpdGggYF9fYC4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aMC05Xy4tXSokLy50ZXN0KGhvb2tOYW1lKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBjYW4gb25seSBjb250YWluIG51bWJlcnMsIGxldHRlcnMsIGRhc2hlcywgcGVyaW9kcyBhbmQgdW5kZXJzY29yZXMuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlSG9va05hbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0ZUhvb2tOYW1lLmpzLm1hcCIsIi8qKlxuICogVmFsaWRhdGUgYSBuYW1lc3BhY2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2UgdG8gdmFsaWRhdGUgLSBzaG91bGQgdGFrZSB0aGUgZm9ybVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgIFdoZXRoZXIgdGhlIG5hbWVzcGFjZSBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIG5hbWVzcGFjZSB8fCAnJyA9PT0gbmFtZXNwYWNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgbmFtZXNwYWNlIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghL15bYS16QS1aXVthLXpBLVowLTlfLlxcLVxcL10qJC8udGVzdChuYW1lc3BhY2UpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgbmFtZXNwYWNlIGNhbiBvbmx5IGNvbnRhaW4gbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzLCB1bmRlcnNjb3JlcyBhbmQgc2xhc2hlcy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVOYW1lc3BhY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0ZU5hbWVzcGFjZS5qcy5tYXAiLCJjbGFzcyBKU19QYXJzZV9BcmdzIHtcclxuXHRjb25zdHJ1Y3RvciggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19uZXN0ZWQgPSBmYWxzZSApIHtcclxuXHRcdHRoaXMuYXJncyAgICAgPSAkYXJncztcclxuXHRcdHRoaXMuZGVmYXVsdHMgPSAkZGVmYXVsdHM7XHJcblx0XHR0aGlzLm5lc3RlZCAgID0gJGlzX25lc3RlZDtcclxuXHRcdHRoaXMucGFyc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLmFyZ3M7XHJcblx0fVxyXG5cclxuXHRwYXJzZSgpIHtcclxuXHRcdGZvciggbGV0ICRfa2V5IGluIHRoaXMuZGVmYXVsdHMgKSB7XHJcblx0XHRcdGlmKCB0cnVlID09PSB0aGlzLm5lc3RlZCAmJiB0eXBlb2YgIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0gPT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IG5ldyBKU19QYXJzZV9BcmdzKCB0aGlzLmFyZ3NbICRfa2V5IF0sIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0sIHRoaXMubmVzdGVkICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3NbICRfa2V5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gdGhpcy5kZWZhdWx0c1sgJF9rZXkgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19kZWVwID0gZmFsc2UgKSA9PiBuZXcgSlNfUGFyc2VfQXJncyggJGFyZ3MsICRkZWZhdWx0cywgJGlzX2RlZXAgKTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWljcm90aW1lKGdldEFzRmxvYXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9taWNyb3RpbWUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGltcHJvdmVkIGJ5OiBEdW1pdHJ1IFV6dW4gKGh0dHA6Ly9kdXp1bi5tZSlcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gbWljcm90aW1lKHRydWUpXG4gIC8vICAgZXhhbXBsZSAxOiAkdGltZVN0YW1wID4gMTAwMDAwMDAwMCAmJiAkdGltZVN0YW1wIDwgMjAwMDAwMDAwMFxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogL14wXFwuWzAtOV17MSw2fSBbMC05XXsxMCwxMH0kLy50ZXN0KG1pY3JvdGltZSgpKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBzO1xuICB2YXIgbm93O1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBub3cgPSAocGVyZm9ybWFuY2Uubm93KCkgKyBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlNikgLyAxZTYgKyAnICcgKyBzO1xuICB9IGVsc2Uge1xuICAgIG5vdyA9IChEYXRlLm5vdyA/IERhdGUubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTMpIC8gMWUzICsgJyAnICsgcztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pY3JvdGltZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmMoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZHMgb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkgd2hpY2ggaW4gdHVybiBkZXBlbmRzIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuYygnaXNOYU4nLCAnYScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgdmFyIGNhbGxVc2VyRnVuY0FycmF5ID0gcmVxdWlyZSgnLi4vZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknKTtcbiAgcGFyYW1ldGVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBjYWxsVXNlckZ1bmNBcnJheShjYiwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuY19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IFRoaWFnbyBNYXRhIChodHRwOi8vdGhpYWdvbWF0YS5ibG9nLmNvbSlcbiAgLy8gIHJldmlzZWQgYnk6IEpvbiBIb2hsZVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kaW5nIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYCBhbmQvb3IgYG5ldyBGdW5jdGlvbmAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWydhJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbMV0pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gIHZhciBmdW5jO1xuICB2YXIgc2NvcGUgPSBudWxsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICBpZiAodHlwZW9mIGNiID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZ1bmMgPSAkZ2xvYmFsW2NiXTtcbiAgICB9IGVsc2UgaWYgKGNiLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbihudWxsLCAncmV0dXJuICcgKyBjYikoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICAgIH1cbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2IpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgZnVuYyA9IGV2YWwoY2JbMF0gKyBcIlsnXCIgKyBjYlsxXSArIFwiJ11cIik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jID0gY2JbMF1bY2JbMV1dO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JbMF1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjb3BlID0gJGdsb2JhbFtjYlswXV07XG4gICAgICB9IGVsc2UgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBzY29wZSA9IGV2YWwoY2JbMF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF90eXBlb2YoY2JbMF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgc2NvcGUgPSBjYlswXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZnVuYyA9IGNiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGZ1bmMgKyAnIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gZnVuYy5hcHBseShzY29wZSwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmNfYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZV9mdW5jdGlvbihhcmdzLCBjb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jcmVhdGVfZnVuY3Rpb24vXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEpvaG5ueSBNYXN0IChodHRwOi8vd3d3LnBocHZyb3V3ZW4ubmwpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkZiA9IGNyZWF0ZV9mdW5jdGlvbignYSwgYicsICdyZXR1cm4gKGEgKyBiKScpXG4gIC8vICAgICAgICBleGFtcGxlIDE6ICRmKDEsIDIpXG4gIC8vICAgICAgICByZXR1cm5zIDE6IDNcblxuICB0cnkge1xuICAgIHJldHVybiBGdW5jdGlvbi5hcHBseShudWxsLCBhcmdzLnNwbGl0KCcsJykuY29uY2F0KGNvZGUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZV9mdW5jdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnVuY3Rpb25fZXhpc3RzKGZ1bmNOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZnVuY3Rpb25fZXhpc3RzL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFN0ZXZlIENsYXlcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBmdW5jdGlvbl9leGlzdHMoJ2lzRmluaXRlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgaWYgKHR5cGVvZiBmdW5jTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBmdW5jTmFtZSA9ICRnbG9iYWxbZnVuY05hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBmdW5jTmFtZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdW5jdGlvbl9leGlzdHMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaV9nZXQodmFybmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luaV9nZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIGluaSB2YWx1ZXMgbXVzdCBiZSBzZXQgYnkgaW5pX3NldCBvciBtYW51YWxseSB3aXRoaW4gYW4gaW5pIGZpbGVcbiAgLy8gICBleGFtcGxlIDE6IGluaV9zZXQoJ2RhdGUudGltZXpvbmUnLCAnQXNpYS9Ib25nX0tvbmcnKVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX2dldCgnZGF0ZS50aW1lem9uZScpXG4gIC8vICAgcmV0dXJucyAxOiAnQXNpYS9Ib25nX0tvbmcnXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcbiAgJGxvY3V0dXMucGhwLmluaSA9ICRsb2N1dHVzLnBocC5pbmkgfHwge307XG5cbiAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0gJiYgJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWU7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pX2dldC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21kNS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiBLZWVwIGluIG1pbmQgdGhhdCBpbiBhY2NvcmRhbmNlIHdpdGggUEhQLCB0aGUgd2hvbGUgc3RyaW5nIGlzIGJ1ZmZlcmVkIGFuZCB0aGVuXG4gIC8vICAgICAgbm90ZSAxOiBoYXNoZWQuIElmIGF2YWlsYWJsZSwgd2UnZCByZWNvbW1lbmQgdXNpbmcgTm9kZSdzIG5hdGl2ZSBjcnlwdG8gbW9kdWxlcyBkaXJlY3RseVxuICAvLyAgICAgIG5vdGUgMTogaW4gYSBzdGVhbWluZyBmYXNoaW9uIGZvciBmYXN0ZXIgYW5kIG1vcmUgZWZmaWNpZW50IGhhc2hpbmdcbiAgLy8gICBleGFtcGxlIDE6IG1kNSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnNmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjknXG5cbiAgdmFyIGhhc2g7XG4gIHRyeSB7XG4gICAgdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIHZhciBtZDVzdW0gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgbWQ1c3VtLnVwZGF0ZShzdHIpO1xuICAgIGhhc2ggPSBtZDVzdW0uZGlnZXN0KCdoZXgnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB2YXIgdXRmOEVuY29kZSA9IHJlcXVpcmUoJy4uL3htbC91dGY4X2VuY29kZScpO1xuICB2YXIgeGw7XG5cbiAgdmFyIF9yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gX3JvdGF0ZUxlZnQobFZhbHVlLCBpU2hpZnRCaXRzKSB7XG4gICAgcmV0dXJuIGxWYWx1ZSA8PCBpU2hpZnRCaXRzIHwgbFZhbHVlID4+PiAzMiAtIGlTaGlmdEJpdHM7XG4gIH07XG5cbiAgdmFyIF9hZGRVbnNpZ25lZCA9IGZ1bmN0aW9uIF9hZGRVbnNpZ25lZChsWCwgbFkpIHtcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0O1xuICAgIGxYOCA9IGxYICYgMHg4MDAwMDAwMDtcbiAgICBsWTggPSBsWSAmIDB4ODAwMDAwMDA7XG4gICAgbFg0ID0gbFggJiAweDQwMDAwMDAwO1xuICAgIGxZNCA9IGxZICYgMHg0MDAwMDAwMDtcbiAgICBsUmVzdWx0ID0gKGxYICYgMHgzRkZGRkZGRikgKyAobFkgJiAweDNGRkZGRkZGKTtcbiAgICBpZiAobFg0ICYgbFk0KSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgfVxuICAgIGlmIChsWDQgfCBsWTQpIHtcbiAgICAgIGlmIChsUmVzdWx0ICYgMHg0MDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX0YgPSBmdW5jdGlvbiBfRih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB5IHwgfnggJiB6O1xuICB9O1xuICB2YXIgX0cgPSBmdW5jdGlvbiBfRyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB6IHwgeSAmIH56O1xuICB9O1xuICB2YXIgX0ggPSBmdW5jdGlvbiBfSCh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfTtcbiAgdmFyIF9JID0gZnVuY3Rpb24gX0koeCwgeSwgeikge1xuICAgIHJldHVybiB5IF4gKHggfCB+eik7XG4gIH07XG5cbiAgdmFyIF9GRiA9IGZ1bmN0aW9uIF9GRihhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRihiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9HRyA9IGZ1bmN0aW9uIF9HRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRyhiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9ISCA9IGZ1bmN0aW9uIF9ISChhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSChiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9JSSA9IGZ1bmN0aW9uIF9JSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSShiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9jb252ZXJ0VG9Xb3JkQXJyYXkgPSBmdW5jdGlvbiBfY29udmVydFRvV29yZEFycmF5KHN0cikge1xuICAgIHZhciBsV29yZENvdW50O1xuICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDIgPSAobE51bWJlck9mV29yZHNUZW1wMSAtIGxOdW1iZXJPZldvcmRzVGVtcDEgJSA2NCkgLyA2NDtcbiAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNUZW1wMiArIDEpICogMTY7XG4gICAgdmFyIGxXb3JkQXJyYXkgPSBuZXcgQXJyYXkobE51bWJlck9mV29yZHMgLSAxKTtcbiAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGxCeXRlQ291bnQgPSAwO1xuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCBzdHIuY2hhckNvZGVBdChsQnl0ZUNvdW50KSA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgICAgbEJ5dGVDb3VudCsrO1xuICAgIH1cbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAweDgwIDw8IGxCeXRlUG9zaXRpb247XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XG4gICAgcmV0dXJuIGxXb3JkQXJyYXk7XG4gIH07XG5cbiAgdmFyIF93b3JkVG9IZXggPSBmdW5jdGlvbiBfd29yZFRvSGV4KGxWYWx1ZSkge1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZSA9ICcnO1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnJztcbiAgICB2YXIgbEJ5dGU7XG4gICAgdmFyIGxDb3VudDtcblxuICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XG4gICAgICBsQnl0ZSA9IGxWYWx1ZSA+Pj4gbENvdW50ICogOCAmIDI1NTtcbiAgICAgIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcwJyArIGxCeXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgIHdvcmRUb0hleFZhbHVlID0gd29yZFRvSGV4VmFsdWUgKyB3b3JkVG9IZXhWYWx1ZVRlbXAuc3Vic3RyKHdvcmRUb0hleFZhbHVlVGVtcC5sZW5ndGggLSAyLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRUb0hleFZhbHVlO1xuICB9O1xuXG4gIHZhciB4ID0gW107XG4gIHZhciBrO1xuICB2YXIgQUE7XG4gIHZhciBCQjtcbiAgdmFyIENDO1xuICB2YXIgREQ7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgUzExID0gNztcbiAgdmFyIFMxMiA9IDEyO1xuICB2YXIgUzEzID0gMTc7XG4gIHZhciBTMTQgPSAyMjtcbiAgdmFyIFMyMSA9IDU7XG4gIHZhciBTMjIgPSA5O1xuICB2YXIgUzIzID0gMTQ7XG4gIHZhciBTMjQgPSAyMDtcbiAgdmFyIFMzMSA9IDQ7XG4gIHZhciBTMzIgPSAxMTtcbiAgdmFyIFMzMyA9IDE2O1xuICB2YXIgUzM0ID0gMjM7XG4gIHZhciBTNDEgPSA2O1xuICB2YXIgUzQyID0gMTA7XG4gIHZhciBTNDMgPSAxNTtcbiAgdmFyIFM0NCA9IDIxO1xuXG4gIHN0ciA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgeCA9IF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKTtcbiAgYSA9IDB4Njc0NTIzMDE7XG4gIGIgPSAweEVGQ0RBQjg5O1xuICBjID0gMHg5OEJBRENGRTtcbiAgZCA9IDB4MTAzMjU0NzY7XG5cbiAgeGwgPSB4Lmxlbmd0aDtcbiAgZm9yIChrID0gMDsgayA8IHhsOyBrICs9IDE2KSB7XG4gICAgQUEgPSBhO1xuICAgIEJCID0gYjtcbiAgICBDQyA9IGM7XG4gICAgREQgPSBkO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxXSwgUzEyLCAweEU4QzdCNzU2KTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzExLCAweEY1N0MwRkFGKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyA3XSwgUzE0LCAweEZENDY5NTAxKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFMxMywgMHhGRkZGNUJCMSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxM10sIFMxMiwgMHhGRDk4NzE5Myk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzIxLCAweEY2MUUyNTYyKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMF0sIFMyNCwgMHhFOUI2QzdBQSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMjMsIDB4RDhBMUU2ODEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgQUEpO1xuICAgIGIgPSBfYWRkVW5zaWduZWQoYiwgQkIpO1xuICAgIGMgPSBfYWRkVW5zaWduZWQoYywgQ0MpO1xuICAgIGQgPSBfYWRkVW5zaWduZWQoZCwgREQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBfd29yZFRvSGV4KGEpICsgX3dvcmRUb0hleChiKSArIF93b3JkVG9IZXgoYykgKyBfd29yZFRvSGV4KGQpO1xuXG4gIHJldHVybiB0ZW1wLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV9zdHIoc3RyLCBhcnJheSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2Vfc3RyL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBDYWdyaSBFa2luXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogc3RhZzAxOVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogWmFpZGUgKGh0dHA6Ly96YWlkZXN0aGluZ3MuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogRGF2aWQgUGVzdGEgKGh0dHA6Ly9kYXZpZHBlc3RhLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGplaWNxdWVzdFxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWQsIHdpbGwgcHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUuXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gYSBwYXJ0aWN1bGFyIGFyZ3VtZW50IGhhcyBiZWVuIHBhc3NlZCwgYW5kIHRoZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiByZXR1cm5lZCB2YWx1ZSBpcyBkaWZmZXJlbnQgcGFyc2Vfc3RyIG9mIFBIUC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogRm9yIGV4YW1wbGUsIGE9Yj1jJmQ9PT09Y1xuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3N0cignZmlyc3Q9Zm9vJnNlY29uZD1iYXInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMTogeyBmaXJzdDogJ2ZvbycsIHNlY29uZDogJ2JhcicgfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3N0cignc3RyX2E9SmFjaythbmQrSmlsbCtkaWRuJTI3dCtzZWUrdGhlK3dlbGwuJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHsgc3RyX2E6IFwiSmFjayBhbmQgSmlsbCBkaWRuJ3Qgc2VlIHRoZSB3ZWxsLlwiIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRhYmMgPSB7MzonYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3N0cignYVtiXVtcImNcIl09ZGVmJmFbcV09dCs1JywgJGFiYylcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkYWJjXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtcIjNcIjpcImFcIixcImFcIjp7XCJiXCI6e1wiY1wiOlwiZGVmXCJ9LFwicVwiOlwidCA1XCJ9fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3N0cignYVtdW109dmFsdWUnLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNDoge1wiYVwiOntcIjBcIjp7XCIwXCI6XCJ2YWx1ZVwifX19XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogcGFyc2Vfc3RyKCdhPTEmYVtdPTInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNToge1wiYVwiOntcIjBcIjpcIjJcIn19XG5cbiAgdmFyIHN0ckFyciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL14mLywgJycpLnJlcGxhY2UoLyYkLywgJycpLnNwbGl0KCcmJyk7XG4gIHZhciBzYWwgPSBzdHJBcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBjdDtcbiAgdmFyIHA7XG4gIHZhciBsYXN0T2JqO1xuICB2YXIgb2JqO1xuICB2YXIgY2hyO1xuICB2YXIgdG1wO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBwb3N0TGVmdEJyYWNrZXRQb3M7XG4gIHZhciBrZXlzO1xuICB2YXIga2V5c0xlbjtcblxuICB2YXIgX2ZpeFN0ciA9IGZ1bmN0aW9uIF9maXhTdHIoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gIH07XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgYXJyYXkgPSAkZ2xvYmFsO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNhbDsgaSsrKSB7XG4gICAgdG1wID0gc3RyQXJyW2ldLnNwbGl0KCc9Jyk7XG4gICAga2V5ID0gX2ZpeFN0cih0bXBbMF0pO1xuICAgIHZhbHVlID0gdG1wLmxlbmd0aCA8IDIgPyAnJyA6IF9maXhTdHIodG1wWzFdKTtcblxuICAgIHdoaWxlIChrZXkuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJ1xceDAwJykgPiAtMSkge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCdcXHgwMCcpKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICYmIGtleS5jaGFyQXQoMCkgIT09ICdbJykge1xuICAgICAga2V5cyA9IFtdO1xuICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ1snICYmICFwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSBqICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY2hhckF0KGopID09PSAnXScpIHtcbiAgICAgICAgICBpZiAocG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc2xpY2UoMCwgcG9zdExlZnRCcmFja2V0UG9zIC0gMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cihwb3N0TGVmdEJyYWNrZXRQb3MsIGogLSBwb3N0TGVmdEJyYWNrZXRQb3MpKTtcbiAgICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGogKyAxKSAhPT0gJ1snKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleXNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY2hyID0ga2V5c1swXS5jaGFyQXQoaik7XG5cbiAgICAgICAgaWYgKGNociA9PT0gJyAnIHx8IGNociA9PT0gJy4nIHx8IGNociA9PT0gJ1snKSB7XG4gICAgICAgICAga2V5c1swXSA9IGtleXNbMF0uc3Vic3RyKDAsIGopICsgJ18nICsga2V5c1swXS5zdWJzdHIoaiArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNociA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqID0gYXJyYXk7XG5cbiAgICAgIGZvciAoaiA9IDAsIGtleXNMZW4gPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW47IGorKykge1xuICAgICAgICBrZXkgPSBrZXlzW2pdLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgICAgIGxhc3RPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKChrZXkgPT09ICcnIHx8IGtleSA9PT0gJyAnKSAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgLy8gSW5zZXJ0IG5ldyBkaW1lbnNpb25cbiAgICAgICAgICBjdCA9IC0xO1xuXG4gICAgICAgICAgZm9yIChwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICBpZiAoK3AgPiBjdCAmJiBwLm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgICAgICAgICAgICBjdCA9ICtwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gY3QgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJpbWl0aXZlIHZhbHVlLCByZXBsYWNlIHdpdGggb2JqZWN0XG4gICAgICAgIGlmIChPYmplY3Qob2JqW2tleV0pICE9PSBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGFzdE9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vfc3RyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBydHJpbShzdHIsIGNoYXJsaXN0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcnRyaW0vXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogRXJrZWtqZXR0ZXJcbiAgLy8gICAgaW5wdXQgYnk6IHJlbVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBydHJpbSgnICAgIEtldmluIHZhbiBab25uZXZlbGQgICAgJylcbiAgLy8gICByZXR1cm5zIDE6ICcgICAgS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICBjaGFybGlzdCA9ICFjaGFybGlzdCA/ICcgXFxcXHNcXHhBMCcgOiAoY2hhcmxpc3QgKyAnJykucmVwbGFjZSgvKFtbXFxdKCkuPy8qe30rJF46XSkvZywgJ1xcXFwkMScpO1xuXG4gIHZhciByZSA9IG5ldyBSZWdFeHAoJ1snICsgY2hhcmxpc3QgKyAnXSskJywgJ2cnKTtcblxuICByZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKHJlLCAnJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnRyaW0uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cnBvcyhoYXlzdGFjaywgbmVlZGxlLCBvZmZzZXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJwb3MvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IERhbmllbCBFc3RlYmFuXG4gIC8vICAgZXhhbXBsZSAxOiBzdHJwb3MoJ0tldmluIHZhbiBab25uZXZlbGQnLCAnZScsIDUpXG4gIC8vICAgcmV0dXJucyAxOiAxNFxuXG4gIHZhciBpID0gKGhheXN0YWNrICsgJycpLmluZGV4T2YobmVlZGxlLCBvZmZzZXQgfHwgMCk7XG4gIHJldHVybiBpID09PSAtMSA/IGZhbHNlIDogaTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJwb3MuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9kZWNvZGUoZW5jb2RlZERhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZGVjb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEFtYW4gR3VwdGFcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZGVjb2RlKCdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09JylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2RlY29kZSgnWVE9PScpXG4gIC8vICAgcmV0dXJucyAyOiAnYSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9kZWNvZGUoJzRweVRJTU9nSUd4aElHMXZaR1U9JylcbiAgLy8gICByZXR1cm5zIDM6ICfinJMgw6AgbGEgbW9kZSdcblxuICAvLyBkZWNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZGVjb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGRlY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBkZWNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hdG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcod2luZG93LmF0b2IoZW5jb2RlZERhdGEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5jb2RlZERhdGEsICdiYXNlNjQnKS50b1N0cmluZygndXRmLTgnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBkZWMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlZERhdGE7XG4gIH1cblxuICBlbmNvZGVkRGF0YSArPSAnJztcblxuICBkbyB7XG4gICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcbiAgICBoMSA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMiA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMyA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoNCA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcblxuICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuXG4gICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcbiAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XG4gICAgbzMgPSBiaXRzICYgMHhmZjtcblxuICAgIGlmIChoMyA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xuICAgIH0gZWxzZSBpZiAoaDQgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgZW5jb2RlZERhdGEubGVuZ3RoKTtcblxuICBkZWMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZW5jb2RlKHN0cmluZ1RvRW5jb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJheXJvbiBHdWV2YXJhXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PSdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9lbmNvZGUoJ2EnKVxuICAvLyAgIHJldHVybnMgMjogJ1lRPT0nXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZW5jb2RlKCfinJMgw6AgbGEgbW9kZScpXG4gIC8vICAgcmV0dXJucyAzOiAnNHB5VElNT2dJR3hoSUcxdlpHVT0nXG5cbiAgLy8gZW5jb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGVuY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBlbmNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZW5jb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBmaXJzdCB3ZSB1c2UgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGdldCBwZXJjZW50LWVuY29kZWQgVVRGLTgsXG4gICAgLy8gdGhlbiB3ZSBjb252ZXJ0IHRoZSBwZXJjZW50IGVuY29kaW5ncyBpbnRvIHJhdyBieXRlcyB3aGljaFxuICAgIC8vIGNhbiBiZSBmZWQgaW50byB0aGUgYmFzZTY0IGVuY29kaW5nIGFsZ29yaXRobS5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5idG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nVG9FbmNvZGUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBlbmMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghc3RyaW5nVG9FbmNvZGUpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9FbmNvZGU7XG4gIH1cblxuICBzdHJpbmdUb0VuY29kZSA9IGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpO1xuXG4gIGRvIHtcbiAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXG4gICAgbzEgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzIgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzMgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICBiaXRzID0gbzEgPDwgMTYgfCBvMiA8PCA4IHwgbzM7XG5cbiAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xuICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XG4gICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xuICAgIGg0ID0gYml0cyAmIDB4M2Y7XG5cbiAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xuICAgIHRtcEFyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xuICB9IHdoaWxlIChpIDwgc3RyaW5nVG9FbmNvZGUubGVuZ3RoKTtcblxuICBlbmMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgdmFyIHIgPSBzdHJpbmdUb0VuY29kZS5sZW5ndGggJSAzO1xuXG4gIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0dHBfYnVpbGRfcXVlcnkoZm9ybWRhdGEsIG51bWVyaWNQcmVmaXgsIGFyZ1NlcGFyYXRvciwgZW5jVHlwZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2h0dHBfYnVpbGRfcXVlcnkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gIHJldmlzZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogV2lsbCBSb3dlXG4gIC8vICAgICAgbm90ZSAxOiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwga2V5IGFuZCB2YWx1ZSBhcmUgc2tpcHBlZCBpbiB0aGVcbiAgLy8gICAgICBub3RlIDE6IGh0dHBfYnVpbGRfcXVlcnkgb2YgUEhQIHdoaWxlIGluIGxvY3V0dXMgdGhleSBhcmUgbm90LlxuICAvLyAgIGV4YW1wbGUgMTogaHR0cF9idWlsZF9xdWVyeSh7Zm9vOiAnYmFyJywgcGhwOiAnaHlwZXJ0ZXh0IHByb2Nlc3NvcicsIGJhejogJ2Jvb20nLCBjb3c6ICdtaWxrJ30sICcnLCAnJmFtcDsnKVxuICAvLyAgIHJldHVybnMgMTogJ2Zvbz1iYXImYW1wO3BocD1oeXBlcnRleHQrcHJvY2Vzc29yJmFtcDtiYXo9Ym9vbSZhbXA7Y293PW1pbGsnXG4gIC8vICAgZXhhbXBsZSAyOiBodHRwX2J1aWxkX3F1ZXJ5KHsncGhwJzogJ2h5cGVydGV4dCBwcm9jZXNzb3InLCAwOiAnZm9vJywgMTogJ2JhcicsIDI6ICdiYXonLCAzOiAnYm9vbScsICdjb3cnOiAnbWlsayd9LCAnbXl2YXJfJylcbiAgLy8gICByZXR1cm5zIDI6ICdteXZhcl8wPWZvbyZteXZhcl8xPWJhciZteXZhcl8yPWJheiZteXZhcl8zPWJvb20mcGhwPWh5cGVydGV4dCtwcm9jZXNzb3ImY293PW1pbGsnXG4gIC8vICAgZXhhbXBsZSAzOiBodHRwX2J1aWxkX3F1ZXJ5KHtmb286ICdiYXInLCBwaHA6ICdoeXBlcnRleHQgcHJvY2Vzc29yJywgYmF6OiAnYm9vbScsIGNvdzogJ21pbGsnfSwgJycsICcmYW1wOycsICdQSFBfUVVFUllfUkZDMzk4NicpXG4gIC8vICAgcmV0dXJucyAzOiAnZm9vPWJhciZhbXA7cGhwPWh5cGVydGV4dCUyMHByb2Nlc3NvciZhbXA7YmF6PWJvb20mYW1wO2Nvdz1taWxrJ1xuXG4gIHZhciBlbmNvZGVGdW5jO1xuXG4gIHN3aXRjaCAoZW5jVHlwZSkge1xuICAgIGNhc2UgJ1BIUF9RVUVSWV9SRkMzOTg2JzpcbiAgICAgIGVuY29kZUZ1bmMgPSByZXF1aXJlKCcuLi91cmwvcmF3dXJsZW5jb2RlJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BIUF9RVUVSWV9SRkMxNzM4JzpcbiAgICBkZWZhdWx0OlxuICAgICAgZW5jb2RlRnVuYyA9IHJlcXVpcmUoJy4uL3VybC91cmxlbmNvZGUnKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIHZhbHVlO1xuICB2YXIga2V5O1xuICB2YXIgdG1wID0gW107XG5cbiAgdmFyIF9odHRwQnVpbGRRdWVyeUhlbHBlciA9IGZ1bmN0aW9uIF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXksIHZhbCwgYXJnU2VwYXJhdG9yKSB7XG4gICAgdmFyIGs7XG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgIHZhbCA9ICcxJztcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gZmFsc2UpIHtcbiAgICAgIHZhbCA9ICcwJztcbiAgICB9XG4gICAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgICAgaWYgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChrIGluIHZhbCkge1xuICAgICAgICAgIGlmICh2YWxba10gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXkgKyAnWycgKyBrICsgJ10nLCB2YWxba10sIGFyZ1NlcGFyYXRvcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wLmpvaW4oYXJnU2VwYXJhdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZW5jb2RlRnVuYyhrZXkpICsgJz0nICsgZW5jb2RlRnVuYyh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcHJvY2Vzc2luZyBmb3IgaHR0cF9idWlsZF9xdWVyeSgpLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIGlmICghYXJnU2VwYXJhdG9yKSB7XG4gICAgYXJnU2VwYXJhdG9yID0gJyYnO1xuICB9XG4gIGZvciAoa2V5IGluIGZvcm1kYXRhKSB7XG4gICAgdmFsdWUgPSBmb3JtZGF0YVtrZXldO1xuICAgIGlmIChudW1lcmljUHJlZml4ICYmICFpc05hTihrZXkpKSB7XG4gICAgICBrZXkgPSBTdHJpbmcobnVtZXJpY1ByZWZpeCkgKyBrZXk7XG4gICAgfVxuICAgIHZhciBxdWVyeSA9IF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXksIHZhbHVlLCBhcmdTZXBhcmF0b3IpO1xuICAgIGlmIChxdWVyeSAhPT0gJycpIHtcbiAgICAgIHRtcC5wdXNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wLmpvaW4oYXJnU2VwYXJhdG9yKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwX2J1aWxkX3F1ZXJ5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV91cmwoc3RyLCBjb21wb25lbnQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3VybC9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogU3RldmVuIExldml0aGFuIChodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IExvcmVuem8gUGlzYW5pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFRvbnlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogb3JpZ2luYWwgYnkgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBibG9nIHBvc3QgYXQgaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXG4gIC8vICAgICAgICAgICBub3RlIDE6IGRlbW8gYXQgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBEb2VzIG5vdCByZXBsYWNlIGludmFsaWQgY2hhcmFjdGVycyB3aXRoICdfJyBhcyBpbiBQSFAsXG4gIC8vICAgICAgICAgICBub3RlIDE6IG5vciBkb2VzIGl0IHJldHVybiBmYWxzZSB3aXRoXG4gIC8vICAgICAgICAgICBub3RlIDE6IGEgc2VyaW91c2x5IG1hbGZvcm1lZCBVUkwuXG4gIC8vICAgICAgICAgICBub3RlIDE6IEJlc2lkZXMgZnVuY3Rpb24gbmFtZSwgaXMgZXNzZW50aWFsbHkgdGhlIHNhbWUgYXMgcGFyc2VVcmkgYXNcbiAgLy8gICAgICAgICAgIG5vdGUgMTogd2VsbCBhcyBvdXIgYWxsb3dpbmdcbiAgLy8gICAgICAgICAgIG5vdGUgMTogYW4gZXh0cmEgc2xhc2ggYWZ0ZXIgdGhlIHNjaGVtZS9wcm90b2NvbCAodG8gYWxsb3cgZmlsZTovLy8gYXMgaW4gUEhQKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV91cmwoJ2h0dHA6Ly91c2VyOnBhc3NAaG9zdC9wYXRoP2E9diNhJylcbiAgLy8gICAgICAgIHJldHVybnMgMToge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnaG9zdCcsIHVzZXI6ICd1c2VyJywgcGFzczogJ3Bhc3MnLCBwYXRoOiAnL3BhdGgnLCBxdWVyeTogJ2E9dicsIGZyYWdtZW50OiAnYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3VybCgnaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5JylcbiAgLy8gICAgICAgIHJldHVybnMgMjoge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnZW4ud2lraXBlZGlhLm9yZycsIHBhdGg6ICcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5J31cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcGFyc2VfdXJsKCdodHRwczovL2hvc3QuZG9tYWluLnRsZC9hQGIuYy9mb2xkZXInKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiB7c2NoZW1lOiAnaHR0cHMnLCBob3N0OiAnaG9zdC5kb21haW4udGxkJywgcGF0aDogJy9hQGIuYy9mb2xkZXInfVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV91cmwoJ2h0dHBzOi8vZ29vZHVzZXI6c2VjcmV0cGFzc3dvcmRAd3d3LmV4YW1wbGUuY29tL2FAYi5jL2ZvbGRlcj9mb289YmFyJylcbiAgLy8gICAgICAgIHJldHVybnMgNDogeyBzY2hlbWU6ICdodHRwcycsIGhvc3Q6ICd3d3cuZXhhbXBsZS5jb20nLCBwYXRoOiAnL2FAYi5jL2ZvbGRlcicsIHF1ZXJ5OiAnZm9vPWJhcicsIHVzZXI6ICdnb29kdXNlcicsIHBhc3M6ICdzZWNyZXRwYXNzd29yZCcgfVxuXG4gIHZhciBxdWVyeTtcblxuICB2YXIgbW9kZSA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5wYXJzZV91cmwubW9kZScpIDogdW5kZWZpbmVkKSB8fCAncGhwJztcblxuICB2YXIga2V5ID0gWydzb3VyY2UnLCAnc2NoZW1lJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3MnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnZnJhZ21lbnQnXTtcblxuICAvLyBGb3IgbG9vc2Ugd2UgYWRkZWQgb25lIG9wdGlvbmFsIHNsYXNoIHRvIHBvc3Qtc2NoZW1lIHRvIGNhdGNoIGZpbGU6Ly8vIChzaG91bGQgcmVzdHJpY3QgdGhpcylcbiAgdmFyIHBhcnNlciA9IHtcbiAgICBwaHA6IG5ldyBSZWdFeHAoWycoPzooW146XFxcXC8/I10rKTopPycsICcoPzpcXFxcL1xcXFwvKCkoPzooPzooKSg/OihbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLCAnKCknLCAnKD86KCgpKD86KD86W14/I1xcXFwvXSpcXFxcLykqKSgpKD86W14/I10qKSkoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ10uam9pbignJykpLFxuICAgIHN0cmljdDogbmV3IFJlZ0V4cChbJyg/OihbXjpcXFxcLz8jXSspOik/JywgJyg/OlxcXFwvXFxcXC8oKD86KChbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLCAnKCgoKD86W14/I1xcXFwvXSpcXFxcLykqKShbXj8jXSopKSg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSksXG4gICAgbG9vc2U6IG5ldyBSZWdFeHAoWycoPzooPyFbXjpAXSs6W146QFxcXFwvXSpAKShbXjpcXFxcLz8jLl0rKTopPycsICcoPzpcXFxcL1xcXFwvXFxcXC8/KT8nLCAnKCg/OigoW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KScsICcoKChcXFxcLyg/OltePyNdKD8hW14/I1xcXFwvXSpcXFxcLltePyNcXFxcLy5dKyg/Ols/I118JCkpKSpcXFxcLz8pPyhbXj8jXFxcXC9dKikpJywgJyg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSlcbiAgfTtcblxuICB2YXIgbSA9IHBhcnNlclttb2RlXS5leGVjKHN0cik7XG4gIHZhciB1cmkgPSB7fTtcbiAgdmFyIGkgPSAxNDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKG1baV0pIHtcbiAgICAgIHVyaVtrZXlbaV1dID0gbVtpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHVyaVtjb21wb25lbnQucmVwbGFjZSgnUEhQX1VSTF8nLCAnJykudG9Mb3dlckNhc2UoKV07XG4gIH1cblxuICBpZiAobW9kZSAhPT0gJ3BocCcpIHtcbiAgICB2YXIgbmFtZSA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5wYXJzZV91cmwucXVlcnlLZXknKSA6IHVuZGVmaW5lZCkgfHwgJ3F1ZXJ5S2V5JztcbiAgICBwYXJzZXIgPSAvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2c7XG4gICAgdXJpW25hbWVdID0ge307XG4gICAgcXVlcnkgPSB1cmlba2V5WzEyXV0gfHwgJyc7XG4gICAgcXVlcnkucmVwbGFjZShwYXJzZXIsIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG4gICAgICBpZiAoJDEpIHtcbiAgICAgICAgdXJpW25hbWVdWyQxXSA9ICQyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIHVyaS5zb3VyY2U7XG4gIHJldHVybiB1cmk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2VfdXJsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByYXd1cmxkZWNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9yYXd1cmxkZWNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGxvdmlvXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyB0byBkZWNvZGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogZnJvbSBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiByYXd1cmxkZWNvZGUoJ0tldmluK3Zhbitab25uZXZlbGQlMjEnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAnS2V2aW4rdmFuK1pvbm5ldmVsZCEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHJhd3VybGRlY29kZSgnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRicpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwOi8va3Z6LmlvLydcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcmF3dXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0QnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT0nXG5cbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCgoc3RyICsgJycpLnJlcGxhY2UoLyUoPyFbXFxkYS1mXXsyfSkvZ2ksIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQSFAgdG9sZXJhdGVzIHBvb3JseSBmb3JtZWQgZXNjYXBlIHNlcXVlbmNlc1xuICAgIHJldHVybiAnJTI1JztcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhd3VybGRlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmF3dXJsZW5jb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcmF3dXJsZW5jb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBNaWNoYWVsIEdyaWVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEpvcmlzXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFRoaXMgcmVmbGVjdHMgUEhQIDUuMy82LjArIGJlaGF2aW9yXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyBcXFxuICAvLyAgICAgICAgICAgbm90ZSAxOiB0byBlbmNvZGUgaW50byBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiByYXd1cmxlbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQhJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluJTIwdmFuJTIwWm9ubmV2ZWxkJTIxJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiByYXd1cmxlbmNvZGUoJ2h0dHA6Ly9rdnouaW8vJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHJhd3VybGVuY29kZSgnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCcpXG4gIC8vICAgICAgICByZXR1cm5zIDM6ICdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0R1dGYtOCdcblxuICBzdHIgPSBzdHIgKyAnJztcblxuICAvLyBUaWxkZSBzaG91bGQgYmUgYWxsb3dlZCB1bmVzY2FwZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBIUCAoYXMgcmVmbGVjdGVkIGJlbG93KSxcbiAgLy8gYnV0IGlmIHlvdSB3YW50IHRvIHJlZmxlY3QgY3VycmVudFxuICAvLyBQSFAgYmVoYXZpb3IsIHlvdSB3b3VsZCBuZWVkIHRvIGFkZCBcIi5yZXBsYWNlKC9+L2csICclN0UnKTtcIiB0byB0aGUgZm9sbG93aW5nLlxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvIS9nLCAnJTIxJykucmVwbGFjZSgvJy9nLCAnJTI3JykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoL1xcKi9nLCAnJTJBJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmF3dXJsZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1cmxkZWNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91cmxkZWNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBMYXJzIEZpc2NoZXJcbiAgLy8gICAgICBpbXByb3ZlZCBieTogT3JsYW5kb1xuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBBSlxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBlLW1pa2VcbiAgLy8gICAgICAgICBpbnB1dCBieTogbG92aW9cbiAgLy8gICAgICBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBidWdmaXhlZCBieTogUm9iXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IGluZm8gb24gd2hhdCBlbmNvZGluZyBmdW5jdGlvbnMgdG8gdXNlIGZyb206XG4gIC8vICAgICAgICAgICBub3RlIDE6IGh0dHA6Ly94a3IudXMvYXJ0aWNsZXMvamF2YXNjcmlwdC9lbmNvZGUtY29tcGFyZS9cbiAgLy8gICAgICAgICAgIG5vdGUgMTogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhpcyBmdW5jdGlvbiBleHBlY3RzIHRvIGRlY29kZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBmcm9tIFVURi04IGVuY29kZWQgc3RyaW5ncywgYXMgZm91bmQgb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogcGFnZXMgc2VydmVkIGFzIFVURi04XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHVybGRlY29kZSgnS2V2aW4rdmFuK1pvbm5ldmVsZCUyMScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkISdcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGa3Z6LmlvJTJGJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHA6Ly9rdnouaW8vJ1xuICAvLyAgICAgICAgZXhhbXBsZSAzOiB1cmxkZWNvZGUoJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04JTI2b2UlM0R1dGYtOCUyNmFxJTNEdCUyNnJscyUzRGNvbS51YnVudHUlM0Flbi1VUyUzQXVub2ZmaWNpYWwlMjZjbGllbnQlM0RmaXJlZm94LWEnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCZvZT11dGYtOCZhcT10JnJscz1jb20udWJ1bnR1OmVuLVVTOnVub2ZmaWNpYWwmY2xpZW50PWZpcmVmb3gtYSdcbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdXJsZGVjb2RlKCclRTUlQTUlQkQlM180JylcbiAgLy8gICAgICAgIHJldHVybnMgNDogJ1xcdTU5N2QlM180J1xuXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHN0ciArICcnKS5yZXBsYWNlKC8lKD8hW1xcZGEtZl17Mn0pL2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUEhQIHRvbGVyYXRlcyBwb29ybHkgZm9ybWVkIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICByZXR1cm4gJyUyNSc7XG4gIH0pLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybGRlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJsZW5jb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXJsZW5jb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBQaGlsaXAgUGV0ZXJzb25cbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogTGFycyBGaXNjaGVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEFKXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEpvcmlzXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFRoaXMgcmVmbGVjdHMgUEhQIDUuMy82LjArIGJlaGF2aW9yXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogZXhwZWN0cyB0byBlbmNvZGUgaW50byBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB1cmxlbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQhJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluK3Zhbitab25uZXZlbGQlMjEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHVybGVuY29kZSgnaHR0cDovL2t2ei5pby8nKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiAnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRidcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdXJsZW5jb2RlKCdodHRwOi8vd3d3Lmdvb2dsZS5ubC9zZWFyY2g/cT1Mb2N1dHVzJmllPXV0Zi04JylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04J1xuXG4gIHN0ciA9IHN0ciArICcnO1xuXG4gIC8vIFRpbGRlIHNob3VsZCBiZSBhbGxvd2VkIHVuZXNjYXBlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUEhQIChhcyByZWZsZWN0ZWQgYmVsb3cpLFxuICAvLyBidXQgaWYgeW91IHdhbnQgdG8gcmVmbGVjdCBjdXJyZW50XG4gIC8vIFBIUCBiZWhhdmlvciwgeW91IHdvdWxkIG5lZWQgdG8gYWRkIFwiLnJlcGxhY2UoL34vZywgJyU3RScpO1wiIHRvIHRoZSBmb2xsb3dpbmcuXG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8hL2csICclMjEnKS5yZXBsYWNlKC8nL2csICclMjcnKS5yZXBsYWNlKC9cXCgvZywgJyUyOCcpLnJlcGxhY2UoL1xcKS9nLCAnJTI5JykucmVwbGFjZSgvXFwqL2csICclMkEnKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmxlbmNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfY2FsbGFibGUobWl4ZWRWYXIsIHN5bnRheE9ubHksIGNhbGxhYmxlTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2NhbGxhYmxlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IEZyYW7Dp29pc1xuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSB2YXJpYWJsZSBjYWxsYWJsZU5hbWUgY2Fubm90IHdvcmsgYXMgYSBzdHJpbmcgdmFyaWFibGUgcGFzc2VkIGJ5XG4gIC8vICAgICAgbm90ZSAxOiByZWZlcmVuY2UgYXMgaW4gUEhQIChzaW5jZSBKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZ1xuICAvLyAgICAgIG5vdGUgMTogc3RyaW5ncyBieSByZWZlcmVuY2UpLCBidXQgaW5zdGVhZCB3aWxsIHRha2UgdGhlIG5hbWUgb2ZcbiAgLy8gICAgICBub3RlIDE6IGEgZ2xvYmFsIHZhcmlhYmxlIGFuZCBzZXQgdGhhdCBpbnN0ZWFkLlxuICAvLyAgICAgIG5vdGUgMTogV2hlbiB1c2VkIG9uIGFuIG9iamVjdCwgZGVwZW5kcyBvbiBhIGNvbnN0cnVjdG9yIHByb3BlcnR5XG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyBrZXB0IG9uIHRoZSBvYmplY3QgcHJvdG90eXBlXG4gIC8vICAgICAgbm90ZSAyOiBEZXBlbmRpbmcgb24gdGhlIGBjYWxsYWJsZU5hbWVgIHRoYXQgaXMgcGFzc2VkLCB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgZXZhbC5cbiAgLy8gICAgICBub3RlIDI6IFRoZSBldmFsIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMjogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMjogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogaXNfY2FsbGFibGUoJ2lzX2NhbGxhYmxlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2NhbGxhYmxlKCdib2d1c0Z1bmN0aW9uJywgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWUgLy8gZ2l2ZXMgdHJ1ZSBiZWNhdXNlIGRvZXMgbm90IGRvIHN0cmljdCBjaGVja2luZ1xuICAvLyAgIGV4YW1wbGUgMzogZnVuY3Rpb24gU29tZUNsYXNzICgpIHt9XG4gIC8vICAgZXhhbXBsZSAzOiBTb21lQ2xhc3MucHJvdG90eXBlLnNvbWVNZXRob2QgPSBmdW5jdGlvbiAoKXt9XG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgdGVzdE9iaiA9IG5ldyBTb21lQ2xhc3MoKVxuICAvLyAgIGV4YW1wbGUgMzogaXNfY2FsbGFibGUoW3Rlc3RPYmosICdzb21lTWV0aG9kJ10sIHRydWUsICdteVZhcicpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9IG15VmFyXG4gIC8vICAgcmV0dXJucyAzOiAnU29tZUNsYXNzOjpzb21lTWV0aG9kJ1xuICAvLyAgIGV4YW1wbGUgNDogaXNfY2FsbGFibGUoZnVuY3Rpb24gKCkge30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgbWV0aG9kID0gJyc7XG4gIHZhciB2YWxpZEZ1bmN0aW9uTmFtZSA9IGZhbHNlO1xuXG4gIHZhciBnZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIGdldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gJGdsb2JhbDtcbiAgICBtZXRob2QgPSBtaXhlZFZhcjtcbiAgICBuYW1lID0gbWl4ZWRWYXI7XG4gICAgdmFsaWRGdW5jdGlvbk5hbWUgPSAhIW5hbWUubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAyICYmIF90eXBlb2YobWl4ZWRWYXJbMF0pID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbWl4ZWRWYXJbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gbWl4ZWRWYXJbMF07XG4gICAgbWV0aG9kID0gbWl4ZWRWYXJbMV07XG4gICAgbmFtZSA9IChvYmouY29uc3RydWN0b3IgJiYgZ2V0RnVuY05hbWUob2JqLmNvbnN0cnVjdG9yKSkgKyAnOjonICsgbWV0aG9kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzeW50YXhPbmx5IHx8IHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdmFsaWRGdW5jdGlvbk5hbWUgYXZvaWRzIGV4cGxvaXRzXG4gIGlmICh2YWxpZEZ1bmN0aW9uTmFtZSAmJiB0eXBlb2YgZXZhbChtZXRob2QpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfY2FsbGFibGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHV0ZjhfZW5jb2RlKGFyZ1N0cmluZykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3V0ZjhfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc293YmVycnlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IFl2ZXMgU3VjYWV0XG4gIC8vIGltcHJvdmVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFVscmljaFxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyAgIGV4YW1wbGUgMTogdXRmOF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgaWYgKGFyZ1N0cmluZyA9PT0gbnVsbCB8fCB0eXBlb2YgYXJnU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIC5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpO1xuICB2YXIgc3RyaW5nID0gYXJnU3RyaW5nICsgJyc7XG4gIHZhciB1dGZ0ZXh0ID0gJyc7XG4gIHZhciBzdGFydDtcbiAgdmFyIGVuZDtcbiAgdmFyIHN0cmluZ2wgPSAwO1xuXG4gIHN0YXJ0ID0gZW5kID0gMDtcbiAgc3RyaW5nbCA9IHN0cmluZy5sZW5ndGg7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nbDsgbisrKSB7XG4gICAgdmFyIGMxID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG4gICAgdmFyIGVuYyA9IG51bGw7XG5cbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIGVuZCsrO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAxMjcgJiYgYzEgPCAyMDQ4KSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDYgfCAxOTIsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDEyIHwgMjI0LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdXJyb2dhdGUgcGFpcnNcbiAgICAgIGlmICgoYzEgJiAweEZDMDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCB0cmFpbCBzdXJyb2dhdGUgYXQgJyArIG4pO1xuICAgICAgfVxuICAgICAgdmFyIGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoKytuKTtcbiAgICAgIGlmICgoYzIgJiAweEZDMDApICE9PSAweERDMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCBsZWFkIHN1cnJvZ2F0ZSBhdCAnICsgKG4gLSAxKSk7XG4gICAgICB9XG4gICAgICBjMSA9ICgoYzEgJiAweDNGRikgPDwgMTApICsgKGMyICYgMHgzRkYpICsgMHgxMDAwMDtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTggfCAyNDAsIGMxID4+IDEyICYgNjMgfCAxMjgsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfVxuICAgIGlmIChlbmMgIT09IG51bGwpIHtcbiAgICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICAgIHV0ZnRleHQgKz0gZW5jO1xuICAgICAgc3RhcnQgPSBlbmQgPSBuICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgc3RyaW5nbCk7XG4gIH1cblxuICByZXR1cm4gdXRmdGV4dDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4X2VuY29kZS5qcy5tYXAiLCIvLyBBcnJheSAmIE9iamVjdCBSZWxhdGVkIEZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV9hcmdzICAgICAgICAgPSByZXF1aXJlKCAnanMtcGFyc2UtYXJncycgKTtcclxubW9kdWxlLmV4cG9ydHMuYXJyYXlfdG9faHRtbF9hdHRyID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbF9hdHRyJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b19odG1sICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b193aW5kb3cgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b193aW5kb3cnICk7XHJcbm1vZHVsZS5leHBvcnRzLnBsYWluX29iamVjdCAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BsYWluX29iamVjdCcgKTtcclxuXHJcbi8vIERhdGUgJiBUaW1lIFJlbGF0ZWQgRnVuY3Rpb25zXHJcbm1vZHVsZS5leHBvcnRzLm1pY3JvdGltZSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2FmdGVyX2RhdGUgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2FmdGVyX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2JlZm9yZV9kYXRlICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2JlZm9yZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19zYW1lX2RhdGUgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19zYW1lX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmZvcm1hdF9kdXJhdGlvbiA9IHJlcXVpcmUoICcuL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbicgKTtcclxubW9kdWxlLmV4cG9ydHMuZGlmZl9kYXlzICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGlmZl9kYXlzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy50aW1lX3Rha2VuICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5cclxuLy8gRGF0YSBUeXBlIFZhbGlkYXRpb25cclxubW9kdWxlLmV4cG9ydHMuaXNfdXJsID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdXJsLmpzJyApO1xyXG5cclxuLy8gUnVuIFRpbWUgRnVuY3Rpb24gUmVsYXRlZHMuXHJcbm1vZHVsZS5leHBvcnRzLmNhbGxfdXNlcl9mdW5jICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jYWxsX3VzZXJfZnVuY19hcnJheSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHMuZnVuY3Rpb25fZXhpc3RzICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVfZnVuY3Rpb24gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24nICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2NhbGxhYmxlICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19jYWxsYWJsZScgKTtcclxuXHJcbi8vIEJyb3dzZXIgUmVsYXRlZFxyXG5tb2R1bGUuZXhwb3J0cy5pc190YWJfZm9jdXNlZCA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3RhYl9mb2N1c2VkJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc193aW5kb3dfYXJnICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzLnNjcm9sbF90b190b3AgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3RvX3RvcCcgKTtcclxubW9kdWxlLmV4cG9ydHMuY29weV90b19jbGlwICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3B5X3RvX2NsaXAnICk7XHJcbm1vZHVsZS5leHBvcnRzLnNjcm9sbF9wb3MgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3BvcycgKTtcclxubW9kdWxlLmV4cG9ydHMud2luZG93X2FyZyAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5kZXZpY2VfdHlwZSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RldmljZV90eXBlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5waXBlX2xvZyAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BpcGVfbG9nJyApO1xyXG5cclxuLy8galF1ZXJ5IFJlbGF0ZWQuXHJcbm1vZHVsZS5leHBvcnRzLnRvX2pxdWVyeSA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfanF1ZXJ5ID0gcmVxdWlyZSggJy4vcGFydHMvaXNfanF1ZXJ5JyApO1xyXG5cclxuLy8gT3RoZXJzXHJcbm1vZHVsZS5leHBvcnRzLnRvX2pzX2Z1bmMgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qc19mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5tZDUgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jb3VudGVyICAgID0gcmVxdWlyZSggJy4vcGFydHMvY291bnRlcicgKTtcclxubW9kdWxlLmV4cG9ydHMucmFuZF9tZDUgICA9IHJlcXVpcmUoICcuL3BhcnRzL3JhbmRfbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jc3NfdW5pdHMgID0gcmVxdWlyZSggJy4vcGFydHMvY3NzX3VuaXRzJyApO1xyXG5cclxuLy8gVVJMIFJlbGF0ZWQgRnVuY3Rpb25zLlxyXG5tb2R1bGUuZXhwb3J0cy51cmxfcGFyYW1zICAgID0gcmVxdWlyZSggJy4vcGFydHMvdXJsX3BhcmFtcycgKTtcclxubW9kdWxlLmV4cG9ydHMucXVlcnlfc3RyaW5nICA9IHJlcXVpcmUoICcuL3BhcnRzL3F1ZXJ5X3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHMucGFyc2Vfc3RyICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxubW9kdWxlLmV4cG9ydHMuYmFzZTY0X2VuY29kZSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2VuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMuYmFzZTY0X2RlY29kZSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMucmF3dXJsZGVjb2RlICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5yYXd1cmxlbmNvZGUgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxlbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnVybGRlY29kZSAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGRlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMudXJsZW5jb2RlICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV91cmwgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9wYXJzZV91cmwnICk7XHJcbiIsIi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gYXJyYXkgZWxlbWVudHMgaW50byA8bGk+IHRhZ3MgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgbGlzdCBvZiB0aGUgZ2l2ZW4gaWQuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKSwgYW5kIGFuIGFub255bW91cyBpbm5lciBjbG9zdXJlIHRvIGNyZWF0ZSBhIGxpc3Qgb2YgaHRtbCB0YWdzLlxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBsaXN0SURcclxuICogQHBhcmFtIHRhZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBhcnIsIGxpc3RJRCwgdGFnID0gJ2xpJyApID0+ICggZWwgPT4gKCAoIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbGlzdElEICkgKSwgKCBlbC5pbm5lckhUTUwgKz0gYXJyLm1hcCggaXRlbSA9PiBgPCR7dGFnfT4ke2l0ZW19PC8ke3RhZ30+YCApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbiggJycgKSApICkgKSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IHtcclxuXHRsZXQgcmV0dXJuX2h0bWwgPSAnJztcclxuXHRmb3IoIGxldCBJIGluICRkYXRhICkge1xyXG5cdFx0aWYoIF8uaXNPYmplY3QoICRkYXRhWyBJIF0gKSApIHtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInO1xyXG5cdFx0XHRmb3IoIGxldCBLIGluICRkYXRhWyBJIF0gKSB7XHJcblx0XHRcdFx0bGV0ICR2YWx1ZSA9ICggXy5pc09iamVjdCggJGRhdGFbIEkgXVsgSyBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdWyBLIF0gKSA6ICRkYXRhWyBJIF1bIEsgXTtcclxuXHRcdFx0XHRyZXR1cm5faHRtbCArPSAkdmFsdWUgKyAnICc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJ1wiJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCAkdmFsdWUgPSAoIF8uaXNPYmplY3QoICRkYXRhWyBJIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF0gKSA6ICRkYXRhWyBJIF07XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJyArICR2YWx1ZSArICdcIiAnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmV0dXJuX2h0bWw7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gKCAkYXJyYXkgKSA9PiB7XHJcblx0Zm9yKCBsZXQgJGtleSBpbiAkYXJyYXkgKSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICRhcnJheVsgJGtleSBdO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ29weSBhIHN0cmluZyB0byB0aGUgY2xpcGJvYXJkLiBPbmx5IHdvcmtzIGFzIGEgcmVzdWx0IG9mIHVzZXIgYWN0aW9uIChpLmUuIGluc2lkZSBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyKS5cclxuICogQ3JlYXRlIGEgbmV3IDx0ZXh0YXJlYT4gZWxlbWVudCwgZmlsbCBpdCB3aXRoIHRoZSBzdXBwbGllZCBkYXRhIGFuZCBhZGQgaXQgdG8gdGhlIEhUTUwgZG9jdW1lbnQuXHJcbiAqIFVzZSBTZWxlY3Rpb24uZ2V0UmFuZ2VBdCgpdG8gc3RvcmUgdGhlIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBVc2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKSB0byBjb3B5IHRvIHRoZSBjbGlwYm9hcmQuXHJcbiAqIFJlbW92ZSB0aGUgPHRleHRhcmVhPiBlbGVtZW50IGZyb20gdGhlIEhUTUwgZG9jdW1lbnQuIEZpbmFsbHksIHVzZSBTZWxlY3Rpb24oKS5hZGRSYW5nZSgpIHRvIHJlY292ZXIgdGhlIG9yaWdpbmFsIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBAcGFyYW0gc3RyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiB7XHJcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGV4dGFyZWEnICk7XHJcblx0ZWwudmFsdWUgPSBzdHI7XHJcblx0ZWwuc2V0QXR0cmlidXRlKCAncmVhZG9ubHknLCAnJyApO1xyXG5cdGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRlbC5zdHlsZS5sZWZ0ICAgICA9ICctOTk5OXB4JztcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbCApO1xyXG5cdGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA+IDAgPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KCAwICkgOiBmYWxzZTtcclxuXHRlbC5zZWxlY3QoKTtcclxuXHRkb2N1bWVudC5leGVjQ29tbWFuZCggJ2NvcHknICk7XHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCggZWwgKTtcclxuXHRpZiggc2VsZWN0ZWQgKSB7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKCBzZWxlY3RlZCApO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBhIGNvdW50ZXIgd2l0aCB0aGUgc3BlY2lmaWVkIHJhbmdlLCBzdGVwIGFuZCBkdXJhdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBzZWxlY3Rvci5cclxuICogQ2hlY2sgaWYgc3RlcCBoYXMgdGhlIHByb3BlciBzaWduIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkuXHJcbiAqIFVzZSBzZXRJbnRlcnZhbCgpIGluIGNvbWJpbmF0aW9uIHdpdGggTWF0aC5hYnMoKSBhbmQgTWF0aC5mbG9vcigpIHRvIGNhbGN1bGF0ZSB0aGUgdGltZSBiZXR3ZWVuIGVhY2ggbmV3IHRleHQgZHJhdy5cclxuICogVXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKS5pbm5lckhUTUwgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cclxuICogT21pdCB0aGUgZm91cnRoIHBhcmFtZXRlciwgc3RlcCwgdG8gdXNlIGEgZGVmYXVsdCBzdGVwIG9mIDEuIE9taXQgdGhlIGZpZnRoIHBhcmFtZXRlciwgZHVyYXRpb24sIHRvIHVzZSBhIGRlZmF1bHQgZHVyYXRpb24gb2YgMjAwMG1zLlxyXG4gKiBAcGFyYW0gc2VsZWN0b3JcclxuICogQHBhcmFtIHN0YXJ0XHJcbiAqIEBwYXJhbSBlbmRcclxuICogQHBhcmFtIHN0ZXBcclxuICogQHBhcmFtIGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggc2VsZWN0b3IsIHN0YXJ0LCBlbmQsIHN0ZXAgPSAxLCBkdXJhdGlvbiA9IDIwMDAgKSA9PiB7XHJcblx0bGV0IGN1cnJlbnQgPSBzdGFydCxcclxuXHRcdF9zdGVwICAgPSAoIGVuZCAtIHN0YXJ0ICkgKiBzdGVwIDwgMCA/IC1zdGVwIDogc3RlcCxcclxuXHRcdHRpbWVyICAgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHRjdXJyZW50ICs9IF9zdGVwO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGN1cnJlbnQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gZW5kO1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBjbGVhckludGVydmFsKCB0aW1lciApO1xyXG5cdFx0fSwgTWF0aC5hYnMoIE1hdGguZmxvb3IoIGR1cmF0aW9uIC8gKCBlbmQgLSBzdGFydCApICkgKSApO1xyXG5cdHJldHVybiB0aW1lcjtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB7XHJcblx0dmFyIHMgPSB2YWw7XHJcblx0aWYoIF8uaXNOdW1iZXIoIHZhbCApICkge1xyXG5cdFx0cmV0dXJuIHZhbCArICdweCc7XHJcblx0fSBlbHNlIGlmKCB2YWwuaW5kZXhPZiggJ3B4JyApID4gLTEgfHwgdmFsLmluZGV4T2YoICclJyApID4gLTEgfHwgdmFsLmluZGV4T2YoICdlbScgKSA+IC0xICkge1xyXG5cdFx0bGV0IGNoZWNrUHggID0gcy5yZXBsYWNlKCAncHgnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrUGN0ID0gcy5yZXBsYWNlKCAnJScsICcnICk7XHJcblx0XHRsZXQgY2hlY2tFbSAgPSBzLnJlcGxhY2UoICdlbScsICcnICk7XHJcblx0XHRpZiggXy5pc051bWJlciggY2hlY2tQeCApIHx8IF8uaXNOdW1iZXIoIGNoZWNrUGN0ICkgfHwgXy5pc051bWJlciggY2hlY2tFbSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcwcHgnO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJzBweCc7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBEZXRlY3RzIHdldGhlciB0aGUgd2Vic2l0ZSBpcyBiZWluZyBvcGVuZWQgaW4gYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIFVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IHByb3BlcnR5IHRvIGZpZ3VyZSBvdXQgaWYgdGhlIGRldmljZSBpcyBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPyAnTW9iaWxlJyA6ICdEZXNrdG9wJzsiLCIvKipcclxuICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gZGF0ZXMuXHJcbiAqIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gRGF0ZSBvYmplY3RzLlxyXG4gKiBAcGFyYW0gZGF0ZUluaXRpYWxcclxuICogQHBhcmFtIGRhdGVGaW5hbFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVJbml0aWFsLCBkYXRlRmluYWwgKSA9PiAoIGRhdGVGaW5hbCAtIGRhdGVJbml0aWFsICkgLyAoIDEwMDAgKiAzNjAwICogMjQgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgaHVtYW4gcmVhZGFibGUgZm9ybWF0IG9mIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gKiBEaXZpZGUgbXMgd2l0aCB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIHRvIG9idGFpbiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIGZvciBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIGFuZCBtaWxsaXNlY29uZC5cclxuICogVXNlIE9iamVjdC5lbnRyaWVzKCkgd2l0aCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKCkgdG8ga2VlcCBvbmx5IG5vbi16ZXJvIHZhbHVlcy5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSB0byBjcmVhdGUgdGhlIHN0cmluZyBmb3IgZWFjaCB2YWx1ZSwgcGx1cmFsaXppbmcgYXBwcm9wcmlhdGVseS5cclxuICogVXNlIFN0cmluZy5wcm90b3R5cGUuam9pbignLCAnKSB0byBjb21iaW5lIHRoZSB2YWx1ZXMgaW50byBhIHN0cmluZy5cclxuICogQHBhcmFtIG1zXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IG1zID0+IHtcclxuXHRpZiggbXMgPCAwICkgbXMgPSAtbXM7XHJcblx0Y29uc3QgdGltZSA9IHtcclxuXHRcdGRheTogTWF0aC5mbG9vciggbXMgLyA4NjQwMDAwMCApLFxyXG5cdFx0aG91cjogTWF0aC5mbG9vciggbXMgLyAzNjAwMDAwICkgJSAyNCxcclxuXHRcdG1pbnV0ZTogTWF0aC5mbG9vciggbXMgLyA2MDAwMCApICUgNjAsXHJcblx0XHRzZWNvbmQ6IE1hdGguZmxvb3IoIG1zIC8gMTAwMCApICUgNjAsXHJcblx0XHRtaWxsaXNlY29uZDogTWF0aC5mbG9vciggbXMgKSAlIDEwMDBcclxuXHR9O1xyXG5cdHJldHVybiBPYmplY3QuZW50cmllcyggdGltZSApXHJcblx0XHRcdFx0IC5maWx0ZXIoIHZhbCA9PiB2YWxbIDEgXSAhPT0gMCApXHJcblx0XHRcdFx0IC5tYXAoICggWyBrZXksIHZhbCBdICkgPT4gYCR7dmFsfSAke2tleX0ke3ZhbCAhPT0gMSA/ICdzJyA6ICcnfWAgKVxyXG5cdFx0XHRcdCAuam9pbiggJywgJyApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYWZ0ZXIgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvciAoPikgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYWZ0ZXIgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPiBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGJlZm9yZSBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgbGVzcyB0aGFuIG9wZXJhdG9yICg8KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBiZWZvcmUgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPCBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgZ2l2ZW4gT2JqZWN0IC8gVmFsdWUgaXMgYSBqUXVlcnkgSW5zdGFuY2UuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4gKCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJGVsZW0gKSAmJiBmYWxzZSA9PT0gXy5pc1N0cmluZyggJGVsZW0gKSAmJiAkZWxlbS5qUXVlcnkgKTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIHRoZSBzYW1lIGFzIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKCkgYW5kIHN0cmljdCBlcXVhbGl0eSBjaGVja2luZyAoPT09KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQS50b0lTT1N0cmluZygpID09PSBkYXRlQi50b0lTT1N0cmluZygpOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIGZvY3VzZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBEb2N1bWVudC5oaWRkZW4gcHJvcGVydHksIGludHJvZHVjZWQgYnkgdGhlIFBhZ2UgVmlzaWJpbGl0eSBBUEkgdG8gY2hlY2sgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gIWRvY3VtZW50LmhpZGRlbjsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJHVybCApID0+IHtcclxuXHRsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoICdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nICsgLy8gcHJvdG9jb2xcclxuXHRcdCcoKChbYS16XFxcXGRdKFthLXpcXFxcZC1dKlthLXpcXFxcZF0pKilcXFxcLj8pK1thLXpdezIsfXwnICsgLy8gZG9tYWluIG5hbWVcclxuXHRcdCcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknICsgLy8gaXAgKHY0KSBhZGRyZXNzXHJcblx0XHQnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLWEtelxcXFxkJV8ufitdKikqJyArIC8vcG9ydFxyXG5cdFx0JyhcXFxcP1s7JmEtelxcXFxkJV8ufis9LV0qKT8nICsgLy8gcXVlcnkgc3RyaW5nXHJcblx0XHQnKFxcXFwjWy1hLXpcXFxcZF9dKik/JCcsICdpJyApO1xyXG5cdHJldHVybiAoIHBhdHRlcm4udGVzdCggJHVybCApICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrcyBpZiB3aW5kb3cgaGFzIGdpdmVuIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5ICkgPT4gKCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggd2luZG93WyAka2V5IF0gKSApOyIsIi8qKlxyXG4gKiBMb2dzIGEgdmFsdWUgYW5kIHJldHVybnMgaXQuXHJcbiAqIFVzZSBjb25zb2xlLmxvZyB0byBsb2cgdGhlIHN1cHBsaWVkIHZhbHVlLCBjb21iaW5lZCB3aXRoIHRoZSB8fCBvcGVyYXRvciB0byByZXR1cm4gaXQuXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBkYXRhID0+IGNvbnNvbGUubG9nKCBkYXRhICkgfHwgZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9ICgpID0+ICggdHlwZW9mIE9iamVjdC5jcmVhdGUgICE9PSAndW5kZWZpbmVkJyApID8gT2JqZWN0LmNyZWF0ZSggbnVsbCApIDoge307IiwiLyoqXHJcbiAqIFJldHVybiB2YWx1ZSBmcm9tIFF1ZXJ5U3RyaW5nXHJcbiAqIEBwYXJhbSBuYW1lXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggbmFtZSApID0+IHtcclxuXHRuYW1lICAgICAgICA9IG5hbWUucmVwbGFjZSggL1tcXFtdLywgXCJcXFxcW1wiICkucmVwbGFjZSggL1tcXF1dLywgXCJcXFxcXVwiICk7XHJcblx0dmFyIHJlZ2V4ICAgPSBuZXcgUmVnRXhwKCBcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIiApLFxyXG5cdFx0cmVzdWx0cyA9IHJlZ2V4LmV4ZWMoIGxvY2F0aW9uLnNlYXJjaCApO1xyXG5cdHJldHVybiByZXN1bHRzID09IG51bGwgPyBcIlwiIDogZGVjb2RlVVJJQ29tcG9uZW50KCByZXN1bHRzWyAxIF0ucmVwbGFjZSggL1xcKy9nLCBcIiBcIiApICk7XHJcbn07IiwiaW1wb3J0IG1kNSBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNSc7XHJcblxyXG4vKipcclxuICogVW5pcXVlIHJhbmRvbSBtZDVcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gU3RyaW5nKCBtZDUoIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSApICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBwYWdlLlxyXG4gKiBVc2UgcGFnZVhPZmZzZXQgYW5kIHBhZ2VZT2Zmc2V0IGlmIHRoZXkgYXJlIGRlZmluZWQsIG90aGVyd2lzZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AuIFlvdSBjYW4gb21pdCBlbCB0byB1c2UgYSBkZWZhdWx0IHZhbHVlIG9mIHdpbmRvdy5cclxuICogQHBhcmFtIGVsXHJcbiAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGVsID0gd2luZG93ICkgPT4gKCB7XHJcblx0eDogZWwucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VYT2Zmc2V0IDogZWwuc2Nyb2xsTGVmdCxcclxuXHR5OiBlbC5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVlPZmZzZXQgOiBlbC5zY3JvbGxUb3BcclxufSApOyIsIi8qKlxyXG4gKiBTbW9vdGgtc2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlLlxyXG4gKiBHZXQgZGlzdGFuY2UgZnJvbSB0b3AgdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCBvciBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcC5cclxuICogU2Nyb2xsIGJ5IGEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcC4gVXNlIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB0byBhbmltYXRlIHRoZSBzY3JvbGxpbmcuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcclxuXHRjb25zdCBjID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRpZiggYyA+IDAgKSB7XHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY3JvbGxUb1RvcCApO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKCAwLCBjIC0gYyAvIDggKTtcclxuXHR9XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAoIGNhbGxiYWNrLCB0aXRsZSA9ICdUaW1lVGFrZW4nICkgPT4ge1xyXG5cdGNvbnNvbGUudGltZSggdGl0bGUgKTtcclxuXHRjb25zdCByID0gY2FsbGJhY2soKTtcclxuXHRjb25zb2xlLnRpbWVFbmQoIHRpdGxlICk7XHJcblx0cmV0dXJuIHI7XHJcbn07IiwiaW1wb3J0IGlzX2pxdWVyeSBmcm9tICcuL2lzX2pxdWVyeSc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBHaXZlbiBTdHJpbmcgaW50byBBIGpRdWVyeSBPYmplY3QuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+IHtcclxuXHRpZiggZmFsc2UgPT09IGlzX2pxdWVyeSggJGVsZW0gKSApIHtcclxuXHRcdHJldHVybiBqUXVlcnkoICRlbGVtICk7XHJcblx0fVxyXG5cdHJldHVybiAkZWxlbTtcclxufTsiLCJpbXBvcnQgdmFsaWRhdGVKU0Z1bmMgZnJvbSAnLi92YWxpZGF0ZVNpbmdsZUpTRnVuYyc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIEVhY2ggVmFsdWUgT2YgYSBKUyBPYmplY3QgQW5kIENvbnZlcnRzIEludG8gSlMgQ2FsbGFibGUgRnVuY3Rpb24uXHJcbiAqIEBwYXJhbSAkZGF0YVxyXG4gKiBAcGFyYW0gJGFyZ3Nfa2V5XHJcbiAqIEBwYXJhbSAkY29udGVudHNfa2V5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBfLmlzT2JqZWN0KCAkZGF0YSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGF0YSApIHtcclxuXHRcdFx0aWYoICFfLmlzRW1wdHkoICRkYXRhWyAka2V5IF0gKSApIHtcclxuXHRcdFx0XHQkZGF0YVsgJGtleSBdID0gdmFsaWRhdGVKU0Z1bmMoICRkYXRhWyAka2V5IF0sICRhcmdzX2tleSwgJGNvbnRlbnRzX2tleSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkZGF0YTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGN1cnJlbnQgVVJMLlxyXG4gKiBVc2UgU3RyaW5nLm1hdGNoKCkgd2l0aCBhbiBhcHByb3ByaWF0ZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZ2V0IGFsbCBrZXktdmFsdWUgcGFpcnMsXHJcbiAqIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKSB0byBtYXAgYW5kIGNvbWJpbmUgdGhlbSBpbnRvIGEgc2luZ2xlIG9iamVjdC5cclxuICogUGFzcyBsb2NhdGlvbi5zZWFyY2ggYXMgdGhlIGFyZ3VtZW50IHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHVybC5cclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7VCB8IHt9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB1cmwgPT5cclxuXHQoIHVybC5tYXRjaCggLyhbXj89Jl0rKSg9KFteJl0qKSkvZyApIHx8IFtdICkucmVkdWNlKFxyXG5cdFx0KCBhLCB2ICkgPT4gKCAoIGFbIHYuc2xpY2UoIDAsIHYuaW5kZXhPZiggJz0nICkgKSBdID0gdi5zbGljZSggdi5pbmRleE9mKCAnPScgKSArIDEgKSApLCBhICksXHJcblx0XHR7fVxyXG5cdCk7IiwiLyoqXHJcbiAqIENvbnZlcnRzIEpTIFN0cmluZyBJbnRvIENhbGxhYmxlIEZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gJHN0cmluZ1xyXG4gKiBAcGFyYW0gJGFyZ3Nfa2V5XHJcbiAqIEBwYXJhbSAkY29udGVudHNfa2V5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRzdHJpbmcsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IF8uaXNPYmplY3QoICRzdHJpbmcgKSAmJiBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gKSB8fCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdICkgKSB7XHJcblx0XHRsZXQgJGFyZ3MgICAgID0gKCAkc3RyaW5nWyAkYXJnc19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGFyZ3Nfa2V5IF07XHJcblx0XHRsZXQgJGNvbnRlbnRzID0gKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRjb250ZW50c19rZXkgXTtcclxuXHRcdGlmKCAkYXJncyA9PT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2UgaWYoICRhcmdzICE9PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkYXJncywgJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJHN0cmluZztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRzdHJpbmc7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBTZXRzIEpTIE9iamVjdCBJbnRvIFdpbmRvdyBBcmdzLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcGFyYW0gJHZhbHVlXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSwgJHZhbHVlICkgPT4ge1xyXG5cdGlmKCBfLmlzT2JqZWN0KCAka2V5ICkgKSB7XHJcblx0XHRmb3IoIGxldCAkX2sgaW4gJGtleSApIHtcclxuXHRcdFx0d2luZG93WyAkX2sgXSA9ICRrZXlbICRfayBdO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICR2YWx1ZTtcclxuXHR9XHJcbn07IiwiY29uc3QgcGFyc2VfdXJsICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG5jb25zdCBwYXJzZV9zdHIgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcGFyc2Vfc3RyJyApO1xyXG5jb25zdCBodHRwX2J1aWxkX3F1ZXJ5ID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5JyApO1xyXG5jb25zdCBzdHJwb3MgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zJyApO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIG1vZGlmaWVkIFVSTCBxdWVyeSBzdHJpbmcuXHJcbiAqXHJcbiAqIFlvdSBjYW4gcmVidWlsZCB0aGUgVVJMIGFuZCBhcHBlbmQgcXVlcnkgdmFyaWFibGVzIHRvIHRoZSBVUkwgcXVlcnkgYnkgdXNpbmcgdGhpcyBmdW5jdGlvbi5cclxuICogVGhlcmUgYXJlIHR3byB3YXlzIHRvIHVzZSB0aGlzIGZ1bmN0aW9uOyBlaXRoZXIgYSBzaW5nbGUga2V5IGFuZCB2YWx1ZSwgb3IgYW4gYXNzb2NpYXRpdmUgYXJyYXkuXHJcbiAqXHJcbiAqIFVzaW5nIGEgc2luZ2xlIGtleSBhbmQgdmFsdWU6XHJcbiAqXHJcbiAqICAgICBhZGRfcXVlcnlfYXJnKCAna2V5JywgJ3ZhbHVlJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScgKTtcclxuICpcclxuICogVXNpbmcgYW4gYXNzb2NpYXRpdmUgYXJyYXk6XHJcbiAqXHJcbiAqICAgICBhZGRfcXVlcnlfYXJnKCBhcnJheShcclxuICogICAgICAgICAna2V5MScgPT4gJ3ZhbHVlMScsXHJcbiAqICAgICAgICAgJ2tleTInID0+ICd2YWx1ZTInLFxyXG4gKiAgICAgKSwgJ2h0dHA6Ly9leGFtcGxlLmNvbScgKTtcclxuICpcclxuICogT21pdHRpbmcgdGhlIFVSTCBmcm9tIGVpdGhlciB1c2UgcmVzdWx0cyBpbiB0aGUgY3VycmVudCBVUkwgYmVpbmcgdXNlZFxyXG4gKiAodGhlIHZhbHVlIG9mIGB3aW5kb3cubG9jYXRpb24uaHJlZmApLlxyXG4gKlxyXG4gKiBWYWx1ZXMgYXJlIGV4cGVjdGVkIHRvIGJlIGVuY29kZWQgYXBwcm9wcmlhdGVseSB3aXRoIHVybGVuY29kZSgpIG9yIHJhd3VybGVuY29kZSgpLlxyXG4gKlxyXG4gKiBTZXR0aW5nIGFueSBxdWVyeSB2YXJpYWJsZSdzIHZhbHVlIHRvIGJvb2xlYW4gZmFsc2UgcmVtb3ZlcyB0aGUga2V5IChzZWUgcmVtb3ZlX3F1ZXJ5X2FyZygpKS5cclxuICpcclxuICogSW1wb3J0YW50OiBUaGUgcmV0dXJuIHZhbHVlIG9mIGFkZF9xdWVyeV9hcmcoKSBpcyBub3QgZXNjYXBlZCBieSBkZWZhdWx0LiBPdXRwdXQgc2hvdWxkIGJlXHJcbiAqIGxhdGUtZXNjYXBlZCB3aXRoIGVzY191cmwoKSBvciBzaW1pbGFyIHRvIGhlbHAgcHJldmVudCB2dWxuZXJhYmlsaXR5IHRvIGNyb3NzLXNpdGUgc2NyaXB0aW5nXHJcbiAqIChYU1MpIGF0dGFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSBrZXlcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZF9xdWVyeV9hcmcoIGtleSA9IG51bGwsIHZhbHVlID0gbnVsbCwgdXJsID0gbnVsbCApIHtcclxuXHRpZiggdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgbnVsbCA9PT0gdmFsdWUgKSB7XHJcblx0XHR1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9IGVsc2UgaWYoIHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIG51bGwgIT09IHZhbHVlICkge1xyXG5cdFx0dXJsICAgPSB2YWx1ZTtcclxuXHRcdHZhbHVlID0gbnVsbDtcclxuXHR9IGVsc2UgaWYoIG51bGwgPT09IHVybCApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHNlID09PSB1cmwgfHwgJycgPT09IHVybCB8fCB1bmRlZmluZWQgPT09IHVybCApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHJcblx0bGV0ICRwYXJzZWQgICA9IHBhcnNlX3VybCggdXJsICksXHJcblx0XHQkcXVlcnkgICAgPSB7fSxcclxuXHRcdCRmcmFnbWVudCA9ICggJHBhcnNlZC5mcmFnbWVudCApID8gJyMnICsgJHBhcnNlZC5mcmFnbWVudCA6ICcnO1xyXG5cclxuXHRpZiggdHlwZW9mICRwYXJzZWQucXVlcnkgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0cGFyc2Vfc3RyKCAkcGFyc2VkLnF1ZXJ5LCAkcXVlcnkgKTtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyApIHtcclxuXHRcdGZvciggbGV0IGsgaW4ga2V5ICkge1xyXG5cdFx0XHRpZigga2V5WyBrIF0gKSB7XHJcblx0XHRcdFx0JHF1ZXJ5WyBrIF0gPSBrZXlbIGsgXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHQkcXVlcnlbIGtleSBdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRsZXQgc3BsaXRfdXJsID0gbnVsbCxcclxuXHRcdGJhc2VfdXJsICA9IHVybDtcclxuXHRpZiggZmFsc2UgIT09IHN0cnBvcyggdXJsLCAnPycgKSApIHtcclxuXHRcdHNwbGl0X3VybCA9IHVybC5zcGxpdCggJz8nICk7XHJcblx0XHRiYXNlX3VybCAgPSBzcGxpdF91cmxbIDAgXSB8fCB1cmw7XHJcblx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gc3RycG9zKCB1cmwsICcjJyApICkge1xyXG5cdFx0c3BsaXRfdXJsID0gdXJsLnNwbGl0KCAnIycgKTtcclxuXHRcdGJhc2VfdXJsICA9IHNwbGl0X3VybFsgMCBdIHx8IHVybDtcclxuXHR9XHJcblxyXG5cdGZvciggbGV0IGsgaW4gJHF1ZXJ5ICkge1xyXG5cdFx0aWYoIGZhbHNlID09PSAkcXVlcnlbIGsgXSApIHtcclxuXHRcdFx0ZGVsZXRlICRxdWVyeVsgayBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JHF1ZXJ5ID0gaHR0cF9idWlsZF9xdWVyeSggJHF1ZXJ5LCBudWxsLCAnJicgKTtcclxuXHQkcXVlcnkgPSAoICRxdWVyeSAhPT0gJycgKSA/ICc/JyArICRxdWVyeSA6ICRxdWVyeTtcclxuXHRyZXR1cm4gYmFzZV91cmwgKyAkcXVlcnkgKyAkZnJhZ21lbnQ7XHJcbn0iLCJpbXBvcnQgYWRkX3F1ZXJ5X2FyZyBmcm9tICcuL2FkZF9xdWVyeV9hcmcnO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYW4gaXRlbSBvciBpdGVtcyBmcm9tIGEgcXVlcnkgc3RyaW5nLlxyXG4gKiBAcGFyYW0ga2V5XHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVfcXVlcnlfYXJnKCBrZXkgPSBudWxsLCB1cmwgPSBudWxsICkge1xyXG5cdGlmKCB0eXBlb2Yga2V5ICE9PSAnb2JqZWN0JyApIHtcclxuXHRcdGtleSA9IFsga2V5IF07XHJcblx0fVxyXG5cclxuXHRmb3IoIGxldCBpIGluIGtleSApIHtcclxuXHRcdGlmKCBrZXlbIGkgXSApIHtcclxuXHRcdFx0dXJsID0gYWRkX3F1ZXJ5X2FyZygga2V5WyBpIF0sIGZhbHNlLCB1cmwgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHVybDtcclxufVxyXG4iLCJpbXBvcnQgdW50cmFpbGluZ3NsYXNoaXQgZnJvbSAnLi91bnRyYWlsaW5nc2xhc2hpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiggJHN0cmluZyApIHtcclxuXHRyZXR1cm4gdW50cmFpbGluZ3NsYXNoaXQoICRzdHJpbmcgKSArICcvXFxcXCc7XHJcbn0iLCJpbXBvcnQgcnRyaW0gZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9ydHJpbSc7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0cmFpbGluZyBmb3J3YXJkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGlmIHRoZXkgZXhpc3QuXHJcbiAqXHJcbiAqIFRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGlzIGZvciBwYXRocyBhbmQgdGh1cyBzaG91bGQgYmUgdXNlZCBmb3IgcGF0aHMuIEl0IGlzXHJcbiAqIG5vdCByZXN0cmljdGVkIHRvIHBhdGhzIGFuZCBvZmZlcnMgbm8gc3BlY2lmaWMgcGF0aCBzdXBwb3J0LlxyXG4gKiBAcGFyYW0gJHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCAkc3RyaW5nICkge1xyXG5cdHJldHVybiBydHJpbSggJHN0cmluZywgJy9cXFxcJyApO1xyXG59IiwiZXhwb3J0IGNvbnN0IGFkZF9xdWVyeV9hcmcgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9hZGRfcXVlcnlfYXJnJykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVfcXVlcnlfYXJnID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZycpLmRlZmF1bHQ7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhaWxpbmdzbGFzaGl0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvdHJhaWxpbmdzbGFzaGl0JykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCB1bnRyYWlsaW5nc2xhc2hpdCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3VudHJhaWxpbmdzbGFzaGl0JykuZGVmYXVsdDtcclxuXHJcblxyXG4vKipcclxuICogQXBwZW5kcyBGdW5jdGlvbiBHbG9iYWxseS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3cgKSA9PiB7XHJcblx0d2luZG93LmFkZF9xdWVyeV9hcmcgICAgID0gYWRkX3F1ZXJ5X2FyZztcclxuXHR3aW5kb3cucmVtb3ZlX3F1ZXJ5X2FyZyAgPSByZW1vdmVfcXVlcnlfYXJnO1xyXG5cdHdpbmRvdy51bnRyYWlsaW5nc2xhc2hpdCA9IHVudHJhaWxpbmdzbGFzaGl0O1xyXG5cdHdpbmRvdy50cmFpbGluZ3NsYXNoaXQgICA9IHRyYWlsaW5nc2xhc2hpdDtcclxufSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IHtcclxuXHR0b19qcXVlcnksXHJcblx0Y2FsbF91c2VyX2Z1bmMsXHJcblx0cGFyc2Vfc3RyLFxyXG5cdGlzX3VybCxcclxuXHR1cmxfcGFyYW1zLFxyXG5cdGlzX2NhbGxhYmxlLFxyXG5cdGNhbGxfdXNlcl9mdW5jX2FycmF5LFxyXG5cdGZ1bmN0aW9uX2V4aXN0cyxcclxuXHRjcmVhdGVfZnVuY3Rpb24sXHJcbn0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XHJcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xyXG5pbXBvcnQgeyByZW1vdmVfcXVlcnlfYXJnIH0gZnJvbSAnd29yZHByZXNzLWpzLXBvcnRzJztcclxuXHJcbi8qKlxyXG4gKiBXUE9uaW9uIEN1c3RvbSBBamF4IEhhbmRsZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV1BPbmlvbl9BamF4ZXIge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSAkYWpheF9hcmdzXHJcblx0ICogQHBhcmFtICRhamF4X2NvbmZpZ1xyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCAkYWpheF9hcmdzLCAkYWpheF9jb25maWcgKSB7XHJcblx0XHR0aGlzLmRlZmF1bHRzICAgICAgICA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdHVybDogKCB0eXBlb2Ygd2luZG93LmFqYXh1cmwgIT09ICd1bmRlZmluZWQnICkgPyB3aW5kb3cuYWpheHVybCA6IGZhbHNlLFxyXG5cdFx0XHRkYXRhOiB7fSxcclxuXHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdGVycm9yOiBmYWxzZSxcclxuXHRcdFx0YWx3YXlzOiBmYWxzZSxcclxuXHRcdFx0YWN0aW9uOiBmYWxzZSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmRlZmF1bHRfY29uZmlncyA9IHtcclxuXHRcdFx0cmVzcG9uc2VfZWxlbWVudDogZmFsc2UsXHJcblx0XHRcdGJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdGVsZW1lbnQ6IGZhbHNlLFxyXG5cdFx0XHRzcGlubmVyOiAnPHNwYW4gY2xhc3M9XCJzcGlubmVyXCI+PC9zcGFuPicsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5pbnN0YW5jZSAgICAgICAgPSBudWxsO1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7V1BPbmlvbl9BamF4ZXIuZGVmYXVsdHN9XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuYWpheF9hcmdzID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggdGhpcy5kZWZhdWx0cywgJGFqYXhfYXJncyApO1xyXG5cdFx0dGhpcy5hamF4X2NvbmZpZyA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHRoaXMuZGVmYXVsdF9jb25maWdzLCAkYWpheF9jb25maWcgKTtcclxuXHRcdHRoaXMuYWpheCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBBIENhbGxhYmxlIENhbGxiYWNrIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBjb2RlIGRhdGEuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gJGNvZGVcclxuXHQgKiBAcGFyYW0gJGFyZ3NcclxuXHQgKi9cclxuXHRjcmVhdGVfZnVuY3Rpb24oICRjb2RlID0gZmFsc2UsICRhcmdzID0gJycgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zaW5nbGVfY2FsbGJhY2soIGNyZWF0ZV9mdW5jdGlvbiggJGFyZ3MsICRjb2RlICkgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbGlkYXRlcyAmIFRyaWdnZXJzIEEgU2luZ2xlIENhbGxiYWNrIEZ1bmN0aW9uLlxyXG5cdCAqIEBwYXJhbSAkY2FsbGJhY2tcclxuXHQgKi9cclxuXHRzaW5nbGVfY2FsbGJhY2soICRjYWxsYmFjayApIHtcclxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzRnVuY3Rpb24oICRjYWxsYmFjayApICkge1xyXG5cdFx0XHRjYWxsX3VzZXJfZnVuYyggJGNhbGxiYWNrICk7XHJcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFjayApICYmIGZhbHNlICE9PSBmdW5jdGlvbl9leGlzdHMoICRjYWxsYmFjayApICkge1xyXG5cdFx0XHRjYWxsX3VzZXJfZnVuYyggJGNhbGxiYWNrICk7XHJcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFjayApICkge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZV9mdW5jdGlvbiggJGNhbGxiYWNrICk7XHJcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRjYWxsYmFjayApICkge1xyXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRjYWxsYmFjayApIHtcclxuXHRcdFx0XHRpZiggJGNhbGxiYWNrLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrWyAka2V5IF0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgQW4gQXJyYXkgb2YgQ2FsbGFibGUgQWpheCBGdW5jdGlvbnMuXHJcblx0ICogQHBhcmFtIGRhdGFcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRoYW5kbGVfY2FsbGJhY2tzKCBkYXRhICkge1xyXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoIGRhdGEgKSApIHtcclxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCBkYXRhLmNhbGxiYWNrICkgKSB7XHJcblx0XHRcdFx0bGV0ICRjYWxsYmFja3MgPSBkYXRhLmNhbGxiYWNrO1xyXG5cclxuXHRcdFx0XHRpZiggZmFsc2UgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFja3MgKSApIHtcclxuXHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tzICk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGNhbGxiYWNrcyApICkge1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkY2FsbGJhY2tzICkge1xyXG5cdFx0XHRcdFx0XHRpZiggJGNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tzWyAka2V5IF0gKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkZWxldGUgZGF0YS5jYWxsYmFjaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUcmlnZ2VyZWQgT24gQWpheCBvblN1Y2Nlc3NcclxuXHQgKiBAcGFyYW0gZGF0YVxyXG5cdCAqL1xyXG5cdG9uU3VjY2VzcyggZGF0YSApIHtcclxuXHRcdHRoaXMuaGFuZGxlX2NhbGxiYWNrcyggZGF0YSApO1xyXG5cclxuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5hamF4X2FyZ3Muc3VjY2VzcyApIHtcclxuXHRcdFx0aWYoIGlzX2NhbGxhYmxlKCB0aGlzLmFqYXhfYXJncy5zdWNjZXNzICkgKSB7XHJcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MsIFsgZGF0YSBdICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRyaWdnZXJlZCBPbiBBamF4IG9uRXJyb3JcclxuXHQgKiBAcGFyYW0gZGF0YVxyXG5cdCAqL1xyXG5cdG9uRXJyb3IoIGRhdGEgKSB7XHJcblx0XHR0aGlzLmhhbmRsZV9jYWxsYmFja3MoIGRhdGEgKTtcclxuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5hamF4X2FyZ3MuZXJyb3IgKSB7XHJcblx0XHRcdGlmKCBpc19jYWxsYWJsZSggdGhpcy5hamF4X2FyZ3MuZXJyb3IgKSApIHtcclxuXHRcdFx0XHRjYWxsX3VzZXJfZnVuY19hcnJheSggdGhpcy5hamF4X2FyZ3MuZXJyb3IsIFsgZGF0YSBdICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRyaWdnZXJlZCBPbiBBamF4IG9uQWx3YXlzXHJcblx0ICogQHBhcmFtIGRhdGFcclxuXHQgKi9cclxuXHRvbkFsd2F5cyggZGF0YSApIHtcclxuXHRcdHRoaXMuYnV0dG9uX3VubG9jaygpO1xyXG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmFqYXhfYXJncy5hbHdheXMgKSB7XHJcblx0XHRcdGlmKCBpc19jYWxsYWJsZSggdGhpcy5hamF4X2FyZ3MuYWx3YXlzICkgKSB7XHJcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLmFsd2F5cywgWyBkYXRhIF0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVHJpZ2dlcnMgQW4gQWpheCBSZXF1ZXN0LiBCYXNlZCBPbiBUaGUgQ29uZmlnLlxyXG5cdCAqL1xyXG5cdGFqYXgoKSB7XHJcblx0XHR0aGlzLmJ1dHRvbl9sb2NrKCk7XHJcblx0XHRsZXQgJGNvbmZpZyA9IHdpbmRvdy53cG9uaW9uLl8uY2xvbmUoIHRoaXMuYWpheF9hcmdzICk7XHJcblx0XHRpZiggZmFsc2UgIT09ICRjb25maWcudXJsICkge1xyXG5cdFx0XHRpZiggZmFsc2UgIT09IGlzX3VybCggJGNvbmZpZy51cmwgKSApIHtcclxuXHRcdFx0XHRsZXQgJHVybF9wYXJhbXMgPSB1cmxfcGFyYW1zKCAkY29uZmlnLnVybCApO1xyXG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHVybF9wYXJhbXMgKSB7XHJcblx0XHRcdFx0XHRpZiggJHVybF9wYXJhbXMuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcclxuXHRcdFx0XHRcdFx0JGNvbmZpZy51cmwgPSByZW1vdmVfcXVlcnlfYXJnKCAka2V5LCAkY29uZmlnLnVybCApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQkY29uZmlnLmRhdGEgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkY29uZmlnLmRhdGEsICR1cmxfcGFyYW1zICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0ICR1cmxfcGFyYW1zID0ge307XHJcblx0XHRcdFx0cGFyc2Vfc3RyKCAkY29uZmlnLnVybCwgJHVybF9wYXJhbXMgKTtcclxuXHRcdFx0XHQkY29uZmlnLnVybCAgPSB3aW5kb3cuYWpheHVybDtcclxuXHRcdFx0XHQkY29uZmlnLmRhdGEgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkY29uZmlnLmRhdGEsICR1cmxfcGFyYW1zICk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRjb25maWcudXJsID0gd2luZG93LmFqYXh1cmw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIGZhbHNlICE9PSAkY29uZmlnLmFjdGlvbiApIHtcclxuXHRcdFx0JGNvbmZpZy5kYXRhLmFjdGlvbiA9ICRjb25maWcuYWN0aW9uO1xyXG5cdFx0XHRkZWxldGUgJGNvbmZpZy5hY3Rpb247XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIHR5cGVvZiAkY29uZmlnLnN1Y2Nlc3MgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRkZWxldGUgJGNvbmZpZy5zdWNjZXNzO1xyXG5cdFx0fVxyXG5cdFx0aWYoIHR5cGVvZiAkY29uZmlnLmFsd2F5cyAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdGRlbGV0ZSAkY29uZmlnLmFsd2F5cztcclxuXHRcdH1cclxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5lcnJvciAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdGRlbGV0ZSAkY29uZmlnLmVycm9yO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSB3aW5kb3cud3AuYWpheC5zZW5kKCAkY29uZmlnICk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmRvbmUoICggZGF0YSApID0+IHRoaXMub25TdWNjZXNzKCBkYXRhICkgKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuZmFpbCggKCBkYXRhICkgPT4gdGhpcy5vbkVycm9yKCBkYXRhICkgKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWx3YXlzKCAoIGRhdGEgKSA9PiB0aGlzLm9uQWx3YXlzKCBkYXRhICkgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyBpZiBBIENvbmZpZyBEYXRhIEV4c2l0cyBCYXNlZCBvbiBUaGUgR2l2ZW4gS2V5LlxyXG5cdCAqIEBwYXJhbSAka2V5XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aGFzX2NvbmZpZyggJGtleSA9ICcnICkge1xyXG5cdFx0cmV0dXJuICggdHlwZW9mIHRoaXMuYWpheF9jb25maWdbICRrZXkgXSAhPT0gJ3VuZGVmaW5lZCcgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgVGhlIENvbmZpZyBEYXRhIEJhc2VkIG9uIFRoZSBDb25maWcgS2V5LlxyXG5cdCAqIEBwYXJhbSAka2V5XHJcblx0ICogQHBhcmFtICRkZWZhdWx0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0Y29uZmlnKCAka2V5ID0gJycsICRkZWZhdWx0ID0gZmFsc2UgKSB7XHJcblx0XHRyZXR1cm4gKCB0aGlzLmhhc19jb25maWcoICRrZXkgKSApID8gdGhpcy5hamF4X2NvbmZpZ1sgJGtleSBdIDogJGRlZmF1bHQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2NrcyBBIEdpdmVuIEJ1dHRvbiBFbGVtZW50LlxyXG5cdCAqL1xyXG5cdGJ1dHRvbl9sb2NrKCkge1xyXG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZyggJ2J1dHRvbicgKSApIHtcclxuXHRcdFx0bGV0ICRidXR0b24gPSB0b19qcXVlcnkoIHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICk7XHJcblx0XHRcdGlmKCAkYnV0dG9uICkge1xyXG5cdFx0XHRcdCRidXR0b24ud3BvX2J1dHRvbiggJ3Byb2Nlc3NpbmcnICk7XHJcblx0XHRcdFx0JGJ1dHRvbi5hdHRyKCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnICk7XHJcblxyXG5cdFx0XHRcdGlmKCB0aGlzLmNvbmZpZyggJ3NwaW5uZXInICkgKSB7XHJcblx0XHRcdFx0XHRsZXQgJHNwaW5uZXIgPSBqUXVlcnkoIHRoaXMuY29uZmlnKCAnc3Bpbm5lcicgKSApO1xyXG5cdFx0XHRcdFx0JHNwaW5uZXIuYWRkQ2xhc3MoICdpcy1hY3RpdmUnICk7XHJcblx0XHRcdFx0XHQkYnV0dG9uLnBhcmVudCgpLmFwcGVuZCggJHNwaW5uZXIgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVubG9ja3MgQSBHaXZlbiBCdXR0b24gRWxlbWVudC5cclxuXHQgKi9cclxuXHRidXR0b25fdW5sb2NrKCkge1xyXG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZyggJ2J1dHRvbicgKSApIHtcclxuXHRcdFx0bGV0ICRidXR0b24gPSB0b19qcXVlcnkoIHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICk7XHJcblx0XHRcdGlmKCAkYnV0dG9uICkge1xyXG5cdFx0XHRcdCRidXR0b24ud3BvX2J1dHRvbiggJ2NvbXBsZXRlJyApO1xyXG5cdFx0XHRcdCRidXR0b24ucmVtb3ZlQXR0ciggJ2Rpc2FibGVkJyApO1xyXG5cdFx0XHRcdGxldCAkc3Bpbm5lciA9ICRidXR0b24ubmV4dCgpO1xyXG5cdFx0XHRcdGlmKCAkc3Bpbm5lci5oYXNDbGFzcyggJ3NwaW5uZXInICkgKSB7XHJcblx0XHRcdFx0XHQkc3Bpbm5lci5yZW1vdmUoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JGJ1dHRvbi5wYXJlbnQoKS5maW5kKCAnLnNwaW5uZXInICkucmVtb3ZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggJCwgZG9jdW1lbnQgKSA9PiB7XHJcblx0JCggKCkgPT4ge1xyXG5cdFx0bGV0ICRjbGFzcyA9ICdbZGF0YS13cG9uaW9uLWlubGluZS1hamF4XSwgLndwb25pb24tYWpheCwgLndwb25pb24tYWpheC1nZXQsIC53cG9uaW9uLWFqYXgtcG9zdCwgLndwb25pb24taW5saW5lLWFqYXgsIC53cG9uaW9uLWlubGluZS1hamF4LWdldCwgLndwb25pb24taW5saW5lLWFqYXgtcG9zdCc7XHJcblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAkY2xhc3MsICggZSApID0+IHtcclxuXHJcblx0XHRcdGxldCAkZWxlbSAgICAgICAgICAgID0gJCggZS5jdXJyZW50VGFyZ2V0ICksXHJcblx0XHRcdFx0JF9kYXRhICAgICAgICAgICA9ICRlbGVtLmRhdGEoKSxcclxuXHRcdFx0XHQkX2NsYXNzX2luc3RhbmNlID0gbnVsbCxcclxuXHRcdFx0XHQkYXJncyAgICAgICAgICAgID0ge1xyXG5cdFx0XHRcdFx0dXJsOiBmYWxzZSxcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYoICRlbGVtLmF0dHIoICdkYXRhLXdwb25pb24taW5saW5lLWFqYXgnICkgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdGxldCAkZmlkMSAgPSAkZWxlbS5hdHRyKCAnZGF0YS13cG9uaW9uLWlubGluZS1hamF4JyApO1xyXG5cdFx0XHRcdGxldCAkZmlkMiAgPSAkZWxlbS5hdHRyKCAnaWQnICk7XHJcblx0XHRcdFx0bGV0ICRqc19pZCA9ICR3cG9uaW9uLmZpZWxkSUQoICRlbGVtICk7XHJcblx0XHRcdFx0bGV0ICRhcmdzICA9IHt9O1xyXG5cdFx0XHRcdGlmKCAkanNfaWQgKSB7XHJcblx0XHRcdFx0XHRsZXQgJF9hcmdzID0gJHdwb25pb24uZmllbGRBcmdzKCAkanNfaWQsIGZhbHNlICk7XHJcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xyXG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRmaWQxLCBmYWxzZSApICkge1xyXG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDEsIGZhbHNlICk7XHJcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xyXG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRmaWQyLCBmYWxzZSApICkge1xyXG5cdFx0XHRcdFx0bGV0ICRfYXJncyA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGZpZDIsIGZhbHNlICk7XHJcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xyXG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1hamF4LWdldCcgKSB8fCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24taW5saW5lLWFqYXgtZ2V0JyApICkge1xyXG5cdFx0XHRcdFx0JGFyZ3MubWV0aG9kID0gJ0dFVCc7XHJcblx0XHRcdFx0fSBlbHNlIGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tYWpheC1wb3N0JyApIHx8ICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1pbmxpbmUtYWpheC1wb3N0JyApICkge1xyXG5cdFx0XHRcdFx0JGFyZ3MubWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWFqYXgnICkgfHwgJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWlubGluZS1hamF4JyApICYmIHR5cGVvZiAkX2RhdGEubWV0aG9kICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRcdCRhcmdzLm1ldGhvZCA9ICRfZGF0YS5tZXRob2Q7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiggdHlwZW9mICRfZGF0YS51cmwgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJF9kYXRhLnVybDtcclxuXHRcdFx0XHR9IGVsc2UgaWYoIHR5cGVvZiAkX2RhdGEuaHJlZiAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0XHQkYXJncy51cmwgPSAkX2RhdGEuaHJlZjtcclxuXHRcdFx0XHR9IGVsc2UgaWYoICRlbGVtLmF0dHIoICdocmVmJyApICkge1xyXG5cdFx0XHRcdFx0JGFyZ3MudXJsID0gJGVsZW0uYXR0ciggJ2hyZWYnICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiggdHlwZW9mICRfZGF0YVsgJ2FqYXgtZGF0YScgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0XHQkYXJncy5kYXRhID0gJF9kYXRhWyAnYWpheC1kYXRhJyBdO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoIHR5cGVvZiAkX2RhdGEuYWN0aW9uICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRcdCRhcmdzLmFjdGlvbiA9ICRfZGF0YS5hY3Rpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkX2NsYXNzX2luc3RhbmNlID0gbmV3IFdQT25pb25fQWpheGVyKCAkYXJncywge1xyXG5cdFx0XHRcdGJ1dHRvbjogJGVsZW0sXHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0gKSggalF1ZXJ5LCBkb2N1bWVudCApO1xyXG4iLCIvKipcclxuICogV1BPbmlvbiBNb2R1bGUgSlMgQ2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHQvKipcclxuXHQgKiBXUE9uaW9uIE1vZHVsZSBKUyBDbGFzcyBDb25zdHJ1Y3Rvci5cclxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXHJcblx0ICogQHBhcmFtICRjb250ZXh0XHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQgPSBudWxsICkge1xyXG5cdFx0aWYoICEkc2VsZWN0b3IualF1ZXJ5ICkge1xyXG5cdFx0XHQkc2VsZWN0b3IgPSBqUXVlcnkoICRzZWxlY3RvciApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZXRfZWxlbWVudCggJHNlbGVjdG9yICk7XHJcblx0XHR0aGlzLnNldF9jb250eHQoICRjb250ZXh0ICk7XHJcblx0XHR0aGlzLm1vZHVsZV9pbml0KCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUcmlnZ2VycyBNb2R1bGUgSW5pdCBGdW5jdGlvbi5cclxuXHQgKi9cclxuXHRtb2R1bGVfaW5pdCgpIHtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgRWxlbWVudCBBcmdzLlxyXG5cdCAqIEBwYXJhbSAkZWxlbVxyXG5cdCAqL1xyXG5cdHNldF9lbGVtZW50KCAkZWxlbSApIHtcclxuXHRcdGlmKCAhJGVsZW0ualF1ZXJ5ICkge1xyXG5cdFx0XHQkZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZWxlbSA9ICRlbGVtO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIENvbnR4dCBBcmdzLlxyXG5cdCAqIEBwYXJhbSAkY29udHh0XHJcblx0ICovXHJcblx0c2V0X2NvbnR4dCggJGNvbnR4dCApIHtcclxuXHRcdHRoaXMuY29udGV4dCA9ICRjb250eHQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgSG9vayBDbGFzcy5cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRnZXQgaG9vaygpIHtcclxuXHRcdHJldHVybiB3aW5kb3cud3Bvbmlvbi5ob29rcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgRWxlbWVudCBWYXJpYWJsZVxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdGdldCBlbGVtZW50KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWxlbTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgQ29udHh0IFZhcmlhYmxlLlxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdGdldCBjb250eHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0O1xyXG5cdH1cclxufVxyXG4iLCIvKiBnbG9iYWwgc3dhbDp0cnVlICovXHJcbmltcG9ydCB7XHJcblx0Y2FsbF91c2VyX2Z1bmMsXHJcblx0aXNfanF1ZXJ5LFxyXG5cdGlzX3dpbmRvd19hcmcsXHJcblx0bWQ1LFxyXG5cdG1pY3JvdGltZSxcclxuXHRyYW5kX21kNSxcclxuXHR0b19qcXVlcnksXHJcblx0dG9fanNfZnVuYyxcclxufSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBCYXNlIFdQb25pb24gSlMgQ2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUE9uaW9uIHtcclxuXHQvKipcclxuXHQgKiBWYWxpZGF0ZXMgJiBDb252ZXJ0cyBpbnRvIENhbGxhYmxlIEpTIEZ1bmN0aW9ucy5cclxuXHQgKiBAcGFyYW0gJGRhdGFcclxuXHQgKiBAcmV0dXJucyB7KnwkZGF0YX1cclxuXHQgKi9cclxuXHRzdGF0aWMganNfZnVuYyggJGRhdGEgKSB7XHJcblx0XHRyZXR1cm4gdG9fanNfZnVuYyggJGRhdGEsICd3cG9uaW9uX2pzX2FyZ3MnLCAnd3Bvbmlvbl9qc19jb250ZW50cycgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBBIFJhbmRvbSBJRC5cclxuXHQgKi9cclxuXHRzdGF0aWMgcmFuZF9pZCgpIHtcclxuXHRcdHJldHVybiBtZDUoICd3cG9uaW9uX3JhbmRfJyArIG1pY3JvdGltZSgpICsgcmFuZF9tZDUoKSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIGlmIGdpdmVuIHN0cmluZyBpcyBhIHZhbGlkIEpTT04uXHJcblx0ICogQHBhcmFtIG9ialxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHN0YXRpYyB2YWxpZF9qc29uKCBvYmogKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRKU09OLnBhcnNlKCBvYmogKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGNhdGNoKCBlICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIEZpZWxkIElELlxyXG5cdCAqIEBwYXJhbSAkZWxlbVxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBmaWVsZElEKCAkZWxlbSApIHtcclxuXHRcdHJldHVybiB0b19qcXVlcnkoICRlbGVtICkuYXR0ciggJ2RhdGEtd3Bvbmlvbi1qc2lkJyApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyBGaWVsZCBIVE1MIE9iamVjdCBVc2luZyBGaWVsZCBJRC5cclxuXHQgKiBAcGFyYW0gJGVsZW1cclxuXHQgKiBAcGFyYW0gJHdoZXJlX3RvX2ZpbmRcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKiBAY29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRzdGF0aWMgSUR0b0VsZW1lbnQoICRlbGVtLCAkd2hlcmVfdG9fZmluZCA9IGZhbHNlICkge1xyXG5cdFx0bGV0ICRpZCA9IFdQT25pb24uZmllbGRJRCggJGVsZW0gKTtcclxuXHRcdGlmKCBmYWxzZSAhPT0gJHdoZXJlX3RvX2ZpbmQgJiYgaXNfanF1ZXJ5KCAkd2hlcmVfdG9fZmluZCApICkge1xyXG5cdFx0XHRyZXR1cm4gJHdoZXJlX3RvX2ZpbmQuZmluZCggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiJyApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGpRdWVyeSggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiXScgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyBpZiBnaXZlbiB2YWx1ZSBpcyBhbiBqUXVlcnkgaW5zdGFuY2UuXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0c3RhdGljIGlzRmllbGQoICRlbGVtICkge1xyXG5cdFx0cmV0dXJuICggaXNfanF1ZXJ5KCAkZWxlbSApICkgPyAoIHRoaXMuZmllbGRJRCggJGVsZW0gKSApIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIFdpbmRvdyBBcmdzLlxyXG5cdCAqIEBwYXJhbSAkdmFyX2lkXHJcblx0ICogQHBhcmFtICRkZWZhdWx0XHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0c3RhdGljIHdpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XHJcblx0XHRyZXR1cm4gKCBpc193aW5kb3dfYXJnKCAkdmFyX2lkICkgKSA/IHdpbmRvd1sgJHZhcl9pZCBdIDogJGRlZmF1bHQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgJiBSZXR1cm5zIEZpZWxkIEFyZ3MuXHJcblx0ICogQHBhcmFtICR2YXJfaWRcclxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRzdGF0aWMgZmllbGRBcmdzKCAkdmFyX2lkLCAkZGVmYXVsdCA9IHt9ICkge1xyXG5cdFx0JHZhcl9pZCA9ICggdGhpcy5pc0ZpZWxkKCAkdmFyX2lkICkgKSA/IHRoaXMuZmllbGRJRCggJHZhcl9pZCApIDogJHZhcl9pZDtcclxuXHRcdHJldHVybiAoICR2YXJfaWQgKSA/IHdpbmRvdy53cG9uaW9uLl8uY2xvbmUoIHRoaXMud2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgKSApIDogJGRlZmF1bHQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGNla3MgYW5kIHJldHVybnMgZ2xvYmFsIHRyYW5zbGF0aW9uIHN0cmluZy5cclxuXHQgKiBAcGFyYW0gJGtleVxyXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0c3RhdGljIHR4dCggJGtleSwgJGRlZmF1bHQgPSAnc3RyaW5nX2RlZmF1bHRfbm90X2ZvdW5kJyApIHtcclxuXHRcdHJldHVybiAoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCBXUE9uaW9uLnRleHRbICRrZXkgXSApICkgPyBXUE9uaW9uLnRleHRbICRrZXkgXSA6ICRkZWZhdWx0O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBMb2FkaW5nIFNjcmVlbi5cclxuXHQgKiBAcGFyYW0gJGVsZW1cclxuXHQgKiBAcGFyYW0gJGlzX3Nob3dcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRzdGF0aWMgbG9hZGluZ19zY3JlZW4oICRlbGVtLCAkaXNfc2hvdyA9IHRydWUgKSB7XHJcblx0XHQkZWxlbSA9IHRvX2pxdWVyeSggJGVsZW0gKS5maW5kKCAnLnBhZ2UtbG9hZGVyJyApO1xyXG5cdFx0aWYoIHRydWUgPT09ICRpc19zaG93ICkge1xyXG5cdFx0XHRyZXR1cm4gJGVsZW0uZmFkZUluKCAnc2xvdycgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAkZWxlbS5mYWRlT3V0KCAnc2xvdycgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgR2xvYmFsIERlYnVnIFZpZXcgUE9QVVAuXHJcblx0ICovXHJcblx0c3RhdGljIGdsb2JhbF9kZWJ1ZygpIHtcclxuXHRcdGxldCAkaGFuZGxlID0galF1ZXJ5KCAnYS53cG9uaW9uLWdsb2JhbC1kZWJ1Zy1oYW5kbGUnICksXHJcblx0XHRcdCRqc29uICAgPSB7fTtcclxuXHRcdGlmKCBXUE9uaW9uLmRlYnVnX2luZm8gPT09IG51bGwgJiYgJGhhbmRsZS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRsZXQgJGRlZmluZWRfdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApO1xyXG5cdFx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGRlZmluZWRfdmFycyApICkge1xyXG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGRlZmluZWRfdmFycyApIHtcclxuXHRcdFx0XHRcdGlmKCAkZGVmaW5lZF92YXJzLmhhc093blByb3BlcnR5KCAka2V5ICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApICkge1xyXG5cdFx0XHRcdFx0XHQkanNvblsgJGRlZmluZWRfdmFyc1sgJGtleSBdIF0gPSBXUE9uaW9uLndpbmRvd0FyZ3MoICRkZWZpbmVkX3ZhcnNbICRrZXkgXSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRXUE9uaW9uLmRlYnVnX2luZm8gPSAkanNvbjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCRoYW5kbGUub24oICdjbGljaycsICggKCBlICkgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHN3YWwoIHtcclxuXHRcdFx0XHR0aXRsZTogV1BPbmlvbi50eHQoICdnbG9iYWxfanNvbl9vdXRwdXQnLCAnR2xvYmFsIFdQT25pb24gRGVidWcgRGF0YScgKSxcclxuXHRcdFx0XHRodG1sOiBqUXVlcnkoICcjd3BvbmlvbmRlYnVnaW5mb3BvcHVwID4gZGl2JyApLFxyXG5cdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxyXG5cdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBXUE9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdHZXQgSlNPTiBPdXRwdXQnICksXHJcblx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxyXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCkgPT4gc3dhbC5lbmFibGVMb2FkaW5nKCksXHJcblx0XHRcdFx0b25PcGVuOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRqUXVlcnkoICcjc3dhbDItY29udGVudCAjd3Bvbmlvbi1nbG9iYWwtZGVidWctY29udGVudCcgKS5qc29uVmlldyggV1BPbmlvbi5kZWJ1Z19pbmZvICk7XHJcblx0XHRcdFx0XHRzd2FsLmRpc2FibGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xyXG5cdFx0XHRcdGlmKCByZXN1bHQudmFsdWUgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc3dhbCgge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4JyxcclxuXHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggV1BPbmlvbi5kZWJ1Z19pbmZvICkgKyAnPC90ZXh0YXJlYT4nLFxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0fSApICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgYW5kIFJldHJpdmVzIFZhbHVlcyBmcm9tICR3cG9uaW9uLnNldHRpbmdzXHJcblx0ICogQHBhcmFtICRrZXlcclxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRzdGF0aWMgb3B0aW9uKCAka2V5LCAkZGVmYXVsdCA9IHt9ICkge1xyXG5cdFx0bGV0ICRhcmdzID0gV1BPbmlvbi5zZXR0aW5nc19hcmdzO1xyXG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSB7XHJcblx0XHRcdHJldHVybiAkYXJnc1sgJGtleSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICRkZWZhdWx0O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0cnVlIGlmIFdQT25pb24gRGVidWcgaXMgZW5hYmxlZC5cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRzdGF0aWMgaXNfZGVidWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdkZWJ1ZycgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdhdGhlciBBbGwgRmllbGQgSlMgQ29kZXMuXHJcblx0ICovXHJcblx0c3RhdGljIGZpZWxkX2RlYnVnKCkge1xyXG5cdFx0aWYoIFdQT25pb24uaXNfZGVidWcoKSAmJiB3aW5kb3cud3Bvbmlvbi5fLmlzTnVsbCggV1BPbmlvbi5maWVsZF9kZWJ1Z19pbmZvICkgKSB7XHJcblx0XHRcdGxldCAkdmFycyA9IFdQT25pb24ud2luZG93QXJncyggJ3dwb25pb25fZGVmaW5lZF92YXJzJyApLFxyXG5cdFx0XHRcdCRqc29uID0ge30sXHJcblx0XHRcdFx0JHV0eHQgPSBXUE9uaW9uLnR4dCggJ3VubW9kaWZpZWRfZGVidWcnICksXHJcblx0XHRcdFx0JG10eHQgPSBXUE9uaW9uLnR4dCggJ21vZGlmaWVkX2RlYnVnJyApO1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkdmFycyApIHtcclxuXHRcdFx0XHRpZiggJHZhcnMuaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHZhcnNbICRrZXkgXSApICkge1xyXG5cdFx0XHRcdFx0bGV0ICRkYXRhICAgICAgICAgICAgICAgICAgICAgICA9IFdQT25pb24ud2luZG93QXJncyggJHZhcnNbICRrZXkgXSApO1xyXG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXSAgICAgICAgICA9IHt9O1xyXG5cdFx0XHRcdFx0JGpzb25bICR2YXJzWyAka2V5IF0gXVsgJHV0eHQgXSA9ICRkYXRhLmRlYnVnX2luZm8gfHwgJGRhdGE7XHJcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkbXR4dCBdID0ge307XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFdQT25pb24uZmllbGRfZGVidWdfaW5mbyA9ICRqc29uO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3VzdG9tIEFqYXggV3JhcHBlciBGb3IgalF1ZXJ5LkFqYXgoKVxyXG5cdCAqIEBwYXJhbSAkYWN0aW9uXHJcblx0ICogQHBhcmFtICRkYXRhXHJcblx0ICogQHBhcmFtICRvblN1Y2Nlc3NcclxuXHQgKiBAcGFyYW0gJG9uRXJyb3JcclxuXHQgKiBAcGFyYW0gJG9uQWx3YXlzXHJcblx0ICovXHJcblx0c3RhdGljIGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSwgJG9uU3VjY2VzcyA9IGZhbHNlLCAkb25FcnJvciA9IGZhbHNlLCAkb25BbHdheXMgPSBmYWxzZSApIHtcclxuXHRcdGxldCAkZGVmYXVsdHMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHR1cmw6IFdQT25pb24ub3B0aW9uKCAnYWpheF91cmwnICksXHJcblx0XHRcdG9uU3VjY2VzczogZmFsc2UsXHJcblx0XHRcdG9uQWx3YXlzOiBmYWxzZSxcclxuXHRcdFx0b25FcnJvcjogZmFsc2UsXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkYWN0aW9uICkgKSB7XHJcblx0XHRcdCRkYXRhID0gJGFjdGlvbjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRkZWZhdWx0cy51cmwgKz0gJyYnICsgV1BPbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICkgKyAnPScgKyAkYWN0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRkZWZhdWx0cyAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkZGVmYXVsdHMsICRkYXRhICk7XHJcblx0XHQkb25TdWNjZXNzID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkb25TdWNjZXNzICkgfHwgZmFsc2UgPT09ICRvblN1Y2Nlc3MgKSA/ICRkZWZhdWx0cy5vblN1Y2Nlc3MgOiAkb25TdWNjZXNzO1xyXG5cdFx0JG9uQWx3YXlzICA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG9uRXJyb3IgKSB8fCBmYWxzZSA9PT0gJG9uRXJyb3IgKSA/ICRkZWZhdWx0cy5vbkFsd2F5cyA6ICRvbkFsd2F5cztcclxuXHRcdCRvbkVycm9yICAgPSAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRvbkFsd2F5cyApIHx8IGZhbHNlID09PSAkb25BbHdheXMgKSA/ICRkZWZhdWx0cy5vbkVycm9yIDogJG9uRXJyb3I7XHJcblx0XHRsZXQgJGFqYXggID0galF1ZXJ5LmFqYXgoICRkZWZhdWx0cyApO1xyXG5cclxuXHJcblx0XHRpZiggJG9uU3VjY2VzcyApIHtcclxuXHRcdFx0JGFqYXguZG9uZSggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uU3VjY2VzcywgcmVzICkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggJG9uRXJyb3IgKSB7XHJcblx0XHRcdCRhamF4LmZhaWwoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkVycm9yLCByZXMgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCAkb25BbHdheXMgKSB7XHJcblx0XHRcdCRhamF4LmFsd2F5cyggKCByZXMgKSA9PiBjYWxsX3VzZXJfZnVuYyggJG9uQWx3YXlzLCByZXMgKSApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICRhamF4O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBXUE9uaW9uIFRlbXBsYXRlIGZvciB1bmRlcnNjb3JlLlxyXG5cdCAqIEBwYXJhbSAkaWRcclxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0pOiAqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyB0ZW1wbGF0ZSggJGlkICkge1xyXG5cdFx0bGV0IGNvbXBpbGVkLFxyXG5cdFx0XHRvcHRpb25zID0ge1xyXG5cdFx0XHRcdGV2YWx1YXRlOiAvPCMoW1xcc1xcU10rPykjPi9nLFxyXG5cdFx0XHRcdGludGVycG9sYXRlOiAvXFx7XFx7XFx7KFtcXHNcXFNdKz8pXFx9XFx9XFx9L2csXHJcblx0XHRcdFx0ZXNjYXBlOiAvXFx7XFx7KFteXFx9XSs/KVxcfVxcfSg/IVxcfSkvZyxcclxuXHRcdFx0XHR2YXJpYWJsZTogJ2RhdGEnXHJcblx0XHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cdFx0XHRjb21waWxlZCA9IGNvbXBpbGVkIHx8IHdpbmRvdy53cG9uaW9uLl8udGVtcGxhdGUoICRpZCwgb3B0aW9ucyApO1xyXG5cdFx0XHRyZXR1cm4gY29tcGlsZWQoIGRhdGEgKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIFdQb25pb24gU2V0dGluZ3MgLyBNZXRhYm94IFN1Ym1lbnUgSW5kaWNhdG9yLlxyXG5cdCAqIEBwYXJhbSAkZWxlbXNcclxuXHQgKi9cclxuXHRzdGF0aWMgc3VibWVudV9pbmRpY2F0b3IoICRlbGVtcyApIHtcclxuXHRcdCRlbGVtcy5lYWNoKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCAkdG9nZ2xlICAgPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2RhdGEtdG9nZ2xlLWNsYXNzJyApO1xyXG5cdFx0XHRcdGxldCAkZXhfY2xhc3MgPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2NsYXNzJyApO1xyXG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IC53cG9uaW9uLXN1Ym1lbnUtaScgKS5hdHRyKCAnY2xhc3MnLCAkdG9nZ2xlICk7XHJcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdkYXRhLXRvZ2dsZS1jbGFzcycsICRleF9jbGFzcyApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG59XHJcbiIsIi8qKlxyXG4gKiBXUE9uaW9uIERlYnVnIENsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cdC8qKlxyXG5cdCAqIEFkZCBBIERlYnVnIEluZm8gVG8gRGVidWcgQXJyYXkuXHJcblx0ICogQHBhcmFtICRrZXlcclxuXHQgKiBAcGFyYW0gJHZhbHVlXHJcblx0ICovXHJcblx0c3RhdGljIGFkZCggJGtleSwgJHZhbHVlICkge1xyXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xyXG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApIHtcclxuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSAkdmFsdWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICR2YWx1ZSwgdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgQSBEZWJ1ZyBJbmZvIEJhc2VkIG9uIEtleS5cclxuXHQgKiBAcGFyYW0gJGtleVxyXG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXQoICRrZXksICRkZWZhdWx0ID0gZmFsc2UgKSB7XHJcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XHJcblx0XHRcdHRoaXMuZGVidWdfaW5mbyA9IHt9O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApID8gJGRlZmF1bHQgOiB0aGlzLmRlYnVnX2luZm9bICRrZXkgXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9oZWxwZXJzL2RlcGVuZGVuY3knO1xuXG4vKipcbiAqIFdQT25pb24gRGVwZW5kZW5jeSBDbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJGVsZW1lbnRcblx0ICogQHBhcmFtIHBhcmFtXG5cdCAqIEBwYXJhbSAkY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsZW1lbnQgPSB1bmRlZmluZWQsIHBhcmFtID0ge30sICRjb25maWcgPSB7fSApIHtcblx0XHR0aGlzLnBhcmFtICAgICAgICAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7IG5lc3RhYmxlOiBmYWxzZSwgcGFyZW50OiBmYWxzZSB9LCBwYXJhbSApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5iYXNlICAgICAgICAgID0ge307XG5cdFx0dGhpcy5iYXNlLiRlbCAgICAgID0gJGVsZW1lbnQ7XG5cdFx0dGhpcy5iYXNlLmluaXQgICAgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLnJ1bGVzZXQgPSBqUXVlcnkuZGVwcy5jcmVhdGVSdWxlc2V0KCk7XG5cdFx0XHR0aGlzLmJhc2UuZGVwUm9vdCgpO1xuXHRcdFx0bGV0ICRfZGVwc19mdW5jdGlvbnMgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7XG5cdFx0XHRcdHNob3c6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0ZWwuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRoaWRlOiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdGVsLmhpZGUoKTtcblx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLmFkZENsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxvZzogZmFsc2UsXG5cdFx0XHRcdGNoZWNrVGFyZ2V0czogZmFsc2UsXG5cdFx0XHR9LCAkY29uZmlnICk7XG5cblx0XHRcdGpRdWVyeS5kZXBzLmVuYWJsZSggdGhpcy5iYXNlLiRlbCwgdGhpcy5iYXNlLnJ1bGVzZXQsICRfZGVwc19mdW5jdGlvbnMgKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbnN0YW5jZSA9IFtdO1xuXHRcdHRoaXMuYmFzZS5kZXBSb290ICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS4kZWwuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1oYXMtZGVwZW5kZW5jeScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5iYXNlLmluc3RhbmNlLnB1c2goIG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koIGpRdWVyeSggdGhpcyApLCAkdGhpcy5iYXNlLnJ1bGVzZXQsIHtcblx0XHRcdFx0XHRcdG5lc3RhYmxlOiAkdGhpcy5wYXJhbS5uZXN0YWJsZSxcblx0XHRcdFx0XHRcdHBhcmVudDogKCB0cnVlID09PSAkdGhpcy5wYXJhbS5uZXN0YWJsZSApID8gJHRoaXMuYmFzZS4kZWwgOiAkdGhpcy5wYXJhbS5wYXJlbnQsXG5cdFx0XHRcdFx0fSApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbml0KCk7XG5cdH1cbn1cbiIsIi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cclxuXHJcbmNvbnN0IGlzX2pxdWVyeSA9IHJlcXVpcmUoICd2c3AtanMtaGVscGVyL2luZGV4JyApLmlzX2pxdWVyeTtcclxuXHJcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xyXG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi9kZWJ1Zyc7XHJcbmltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuL21vZHVsZSc7XHJcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRpb24gZnJvbSAnLi4vY29yZS92YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBXUE9uaW9uIEZpZWxkIEFic3RyYWN0IENsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XHJcblx0LyoqXHJcblx0ICogV1BPbmlvbiBGaWVsZCBDbGFzcyBDb25zdHJ1Y3Rvci5cclxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXHJcblx0ICogQHBhcmFtICRjb250ZXh0XHJcblx0ICogQHBhcmFtICRjb25maWdcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCA9IG51bGwsICRjb25maWcgPSBudWxsICkge1xyXG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQgKTtcclxuXHRcdHRoaXMuc2V0X2FyZ3MoIGZhbHNlICk7XHJcblx0XHR0aGlzLmZpZWxkX2RlYnVnKCk7XHJcblx0XHR0aGlzLmNvbmZpZyA9ICRjb25maWc7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuanNfZXJyb3JfaGFuZGxlcigpO1xyXG5cdFx0dGhpcy5qc192YWxpZGF0b3IoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIFVzZWQgVG8gSW5pdCBGaWVsZC5cclxuXHQgKiBUaGlzIG5lZWRzIHRvIGJlIG92ZXJyaWRlbiBleHRlbmRpbmcgY2xhc3MuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgamF2YXNjcmlwdCBlcnJvciBwbGFjZW1lbnQuXHJcblx0ICogQHBhcmFtIGVyclxyXG5cdCAqL1xyXG5cdGpzX2Vycm9yKCBlcnIgKSB7XHJcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgQW4gVHJpZ2dlciBIb29rIFRvIEhhbmRsZSBKUyBFcnJvciBQbGFjZW1lbnRcclxuXHQgKiBAdXNlIGNvbnN0cnVjdG9yXHJcblx0ICogQHBhcmFtIGVsZW1lbnRcclxuXHQgKi9cclxuXHRqc19lcnJvcl9oYW5kbGVyKCBlbGVtZW50ID0gdGhpcy5lbGVtZW50ICkge1xyXG5cdFx0ZWxlbWVudC5vbiggJ3dwb25pb25fanNfdmFsaWRhdGlvbl9tZXNzYWdlJywgJz4gLnJvdyA+IC53cG9uaW9uLWZpZWxkc2V0IDppbnB1dCcsICggZSwgZGF0YSApID0+IHRoaXMuanNfZXJyb3IoIGRhdGEgKSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIGlmIHZhbGlkYXRpb24gaXMgcmVxdWlyZWQgZm9yIGN1cnJlbnQgZmllbGQuXHJcblx0ICovXHJcblx0anNfdmFsaWRhdG9yKCkge1xyXG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLm9wdGlvbiggJ2pzX3ZhbGlkYXRlJywgZmFsc2UgKSApICkge1xyXG5cdFx0XHRpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApICkge1xyXG5cdFx0XHRcdHRoaXMubWF5YmVfanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksIHRoaXMuZWxlbWVudCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgaWYgY3VycmVudCBwYWdlIGhhcyBmb3JtIGFuZCBlbmFibGUgdmFsaWRhdGlvbnMuXHJcblx0ICogQHBhcmFtICRhcmdzXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICovXHJcblx0bWF5YmVfanNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xyXG5cdFx0aWYoIFdQT25pb25fVmFsaWRhdGlvbi5nZXRfZm9ybSgpICkge1xyXG5cdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBSdWxlIFRvIEVhY2ggYW5kIGV2ZXJ5IGlucHV0IHRvIHZhbGlkYXRlIEpTIExpYi5cclxuXHQgKiBAcGFyYW0gJGFyZ3NcclxuXHQgKiBAcGFyYW0gJGVsZW1cclxuXHQgKi9cclxuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XHJcblx0XHRpZiggV1BPbmlvbl9WYWxpZGF0aW9uLmdldF9mb3JtKCkgKSB7XHJcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucnVsZXMoICdhZGQnLCAkYXJncyApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHVzZWQgYnkgZWFjaCBhbmQgZXZlcnkgZmllbGQuXHJcblx0ICogVGhpcyBmdW5jdGlvbiB3aWxsIGFsc28gY29udmVydCBTaW1wbGUgSlMgZnVuY3Rpb24gY29kZSBpbnRvIGNhbGxhYmxlIEpTIGNvZGUgJiByZXR1cm5zIGl0XHJcblx0ICogUGx1cyBpdCBhbHNvIHN0b3JlIHRoZSB2YWx1ZSBpbiBkZWJ1ZyBhcnJheSBpZiBkZWJ1ZyBlbmFibGVkLlxyXG5cdCAqIEBwYXJhbSAkYXJnXHJcblx0ICogQHBhcmFtICRrZXlcclxuXHQgKiBAcmV0dXJucyB7KnwkZGF0YX1cclxuXHQgKi9cclxuXHRoYW5kbGVfYXJncyggJGFyZywgJGtleSA9IGZhbHNlICkge1xyXG5cdFx0bGV0ICRhcmdzICAgPSAkd3Bvbmlvbi5qc19mdW5jKCAkYXJnICksXHJcblx0XHRcdCRleGlzdHMgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSwgeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9ICk7XHJcblx0XHQkZXhpc3RzICAgICA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoIHsgJ1BIUCBBcmdzJzoge30sICdKUyBBcmdzJzoge30gfSwgJGV4aXN0cyApO1xyXG5cclxuXHRcdGlmKCBmYWxzZSA9PT0gJGtleSApIHtcclxuXHRcdFx0JGV4aXN0c1sgJ0pTIEFyZ3MnIF0gPSAkYXJncztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRleGlzdHNbICdKUyBBcmdzJyBdWyAka2V5IF0gPSAkYXJncztcclxuXHRcdH1cclxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCAkZXhpc3RzICk7XHJcblx0XHRyZXR1cm4gJGFyZ3M7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIEZpZWxkIERlYnVnIFBPUFVQLlxyXG5cdCAqL1xyXG5cdGZpZWxkX2RlYnVnKCkge1xyXG5cdFx0aWYoIGZhbHNlICE9PSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoIHRoaXMuaWQoKSApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0ICRpbmZvID0gdGhpcy5vcHRpb24oICdkZWJ1Z19pbmZvJyApO1xyXG5cclxuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGluZm8gKSApIHtcclxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzRW1wdHkoICRpbmZvICkgKSB7XHJcblx0XHRcdFx0JHdwb25pb25fZGVidWcuYWRkKCB0aGlzLmlkKCksIHsgJ1BIUCBBcmdzJzogJGluZm8sICdKUyBBcmdzJzoge30gfSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0ICRmb3VuZCA9IGZhbHNlO1xyXG5cdFx0aWYoICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xyXG5cdFx0XHRsZXQgJElEICAgPSB0aGlzLmlkKCksXHJcblx0XHRcdFx0JGVsZW0gPSBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPScgKyAkSUQgKyAnXScgKTtcclxuXHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcclxuXHRcdFx0XHQkZm91bmQgPSAkZWxlbTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGZvdW5kID0gdGhpcy5lbGVtZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCBmYWxzZSAhPT0gJGZvdW5kICkge1xyXG5cdFx0XHRsZXQgJHRoaXMgPSB0aGlzO1xyXG5cclxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC5yb3cgPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApXHJcblx0XHRcdFx0ICAudGlwcHkoIHtcclxuXHRcdFx0XHRcdCAgY29udGVudDogJHdwb25pb24udHh0KCAnY2xpY2tfdG9fdmlld19kZWJ1Z19pbmZvJywgJ0NsaWNrIFRvIFZpZXcgRmllbGQgRGVidWcgSW5mbycgKSxcclxuXHRcdFx0XHRcdCAgYXJyb3c6IHRydWUsXHJcblx0XHRcdFx0XHQgIGFycm93VHlwZTogJ3JvdW5kJyxcclxuXHRcdFx0XHRcdCAgcGxhY2VtZW50OiAnYm90dG9tJyxcclxuXHRcdFx0XHRcdCAgdGhlbWU6ICdsaWdodCcsXHJcblx0XHRcdFx0XHQgIGFuaW1hdGlvbjogJ3NjYWxlJyxcclxuXHRcdFx0XHRcdCAgYXBwZW5kVG86IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcclxuXHRcdFx0XHQgIH0gKTtcclxuXHJcblx0XHRcdCRmb3VuZC5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGQtdGl0bGUgPiBoNCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCAkZCAgICAgICAgICA9ICR0aGlzLmlkKCkgKyAnZGVidWdJTkZPJyxcclxuXHRcdFx0XHRcdCRub3RpY2VfdHh0ID0gJzxwIGNsYXNzPVxcJ3dwb25pb24tZmllbGQtZGVidWctbm90aWNlXFwnPicgKyAkd3Bvbmlvbi5vcHRpb24oICdkZWJ1Z19ub3RpY2UnICkgKyAnPC9wPicsXHJcblx0XHRcdFx0XHQkZWxlbSAgICAgICA9IGpRdWVyeSggJzxkaXYgaWQ9XCInICsgJGQgKyAnXCIgY2xhc3M9XCJ3cG9uaW9uLWZpZWxkLWRlYnVnLXBvcHVwXCIgPjxkaXYgaWQ9XCInICsgJGQgKyAnXCIgPjwvZGl2PicgKyAkbm90aWNlX3R4dCArICc8L2Rpdj4nICk7XHJcblx0XHRcdFx0bGV0ICRkYXRhICAgICAgID0gJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICk7XHJcblx0XHRcdFx0c3dhbCgge1xyXG5cdFx0XHRcdFx0aHRtbDogJGVsZW0sXHJcblx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcclxuXHRcdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiAkd3Bvbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnQXMgSlNPTicgKSxcclxuXHRcdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdFx0XHR3aWR0aDogJzgwMHB4JyxcclxuXHRcdFx0XHRcdG9uT3BlbjogKCkgPT4galF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgPiBkaXYgPiAjJyArICRkICkuanNvblZpZXcoICRkYXRhIClcclxuXHRcdFx0XHR9ICkudGhlbiggKCByZXN1bHQgKSA9PiB7XHJcblx0XHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xyXG5cdFx0XHRcdFx0XHRzd2FsKCB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICc2MDBweCcsXHJcblx0XHRcdFx0XHRcdFx0aHRtbDogJzx0ZXh0YXJlYSBzdHlsZT1cIm1pbi13aWR0aDo1NTBweDsgbWluLWhlaWdodDozMDBweFwiPicgKyBKU09OLnN0cmluZ2lmeSggJHdwb25pb25fZGVidWcuZ2V0KCAkdGhpcy5pZCgpICkgKSArICc8L3RleHRhcmVhPidcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC5yb3cgPiAud3Bvbmlvbi1maWVsZHNldCAud3Bvbmlvbi1maWVsZC1kZWJ1Zy1jb2RlLWdlbicgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCAkc3RyaW5nID0gdGhpcy5vcHRpb24oICdkZWJ1Z19maWVsZF9jb2RlJyApO1xyXG5cdFx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkc3RyaW5nICkgKSB7XHJcblx0XHRcdFx0XHRzd2FsKCB7XHJcblx0XHRcdFx0XHRcdGh0bWw6ICRzdHJpbmcsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxyXG5cdFx0XHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcblx0XHRcdFx0XHRcdGhlaWdodEF1dG86IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHYXRoZXJzIEZpZWxkIE9wdGlvbnMgRGF0YSBmcm9tIHdpbmRvdy53cG9uaW9uIGFycmF5LlxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdG9wdGlvbnMoKSB7XHJcblx0XHRpZiggdGhpcy5fYXJncyA9PT0gZmFsc2UgKSB7XHJcblx0XHRcdHRoaXMuX2FyZ3MgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCB0aGlzLmlkKCkgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9hcmdzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIGlmIGEgZ2l2ZW4gb3B0aW9uIGtleSBleGlzdHMgYW5kIGlmIHNvIHRoZW4gaXQgcmV0dXJucyBpdCB2YWx1ZVxyXG5cdCAqIG9yIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXHJcblx0ICogQHBhcmFtICRrZXlcclxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRvcHRpb24oICRrZXkgPSAnJywgJGRlZmF1bHQgPSB7fSApIHtcclxuXHRcdGxldCAkYXJncyA9IHRoaXMub3B0aW9ucygpO1xyXG5cdFx0cmV0dXJuICggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzWyAka2V5IF0gKSApID8gJGFyZ3NbICRrZXkgXSA6ICRkZWZhdWx0O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBXUE9uaW9uIEpTIEZpZWxkIElEXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0aWQoKSB7XHJcblx0XHRyZXR1cm4gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIEZpZWxkJ3MgTW9kdWxlIFNsdWcuXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0bW9kdWxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAnbW9kdWxlJywgZmFsc2UgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgRmllbGQncyBQbHVnaW4gU2x1Zy5cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRwbHVnaW5faWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdwbHVnaW5faWQnLCBmYWxzZSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVHJpZ2dlcnMgQW4gQWpheCBBY3Rpb24uXHJcblx0ICogQHBhcmFtICRhY3Rpb25cclxuXHQgKiBAcGFyYW0gJGRhdGFcclxuXHQgKi9cclxuXHRhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30gKSB7XHJcblx0XHRsZXQgJGFqYXhfa2V5ICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICk7XHJcblx0XHRsZXQgJGRlZmF1bHQgICAgICAgICAgPSB7XHJcblx0XHRcdHBsdWdpbl9pZDogdGhpcy5wbHVnaW5faWQoKSxcclxuXHRcdFx0bW9kdWxlOiB0aGlzLm1vZHVsZSgpLFxyXG5cdFx0fTtcclxuXHRcdCRkZWZhdWx0WyAkYWpheF9rZXkgXSA9ICRhY3Rpb247XHJcblx0XHQkZGF0YS5kYXRhICAgICAgICAgICAgPSAoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkZGF0YS5kYXRhICkgKSA/IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICRkZWZhdWx0LCAkZGF0YS5kYXRhICkgOiAkZGVmYXVsdDtcclxuXHJcblx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJGRhdGEgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEEgU2luZ2xlIEVsZW1lbnQuXHJcblx0ICogQHBhcmFtICR0eXBlXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICovXHJcblx0aW5pdF9zaW5nbGVfZmllbGQoICR0eXBlLCAkZWxlbSApIHtcclxuXHRcdHdwb25pb25faW5pdF9maWVsZCggJHR5cGUsICRlbGVtICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbml0cyBBIFNpbmdsZSBGaWVsZCBUeXBlXHJcblx0ICogQHVzZXMgaW5pdF9zaW5nbGVfZmllbGQuXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICogQHBhcmFtICR0eXBlXHJcblx0ICovXHJcblx0aW5pdF9maWVsZCggJGVsZW0sICR0eXBlICkge1xyXG5cdFx0aWYoICFpc19qcXVlcnkoICRlbGVtICkgKSB7XHJcblx0XHRcdCRlbGVtID0gdGhpcy5lbGVtZW50LmZpbmQoICRlbGVtICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoICRlbGVtLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHRoaXMuaW5pdF9zaW5nbGVfZmllbGQoICR0eXBlLCBqUXVlcnkoIGUgKSApICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWxvYWRzIEFsbCBGaWVsZCBUeXBlIEluc2lkZSBUaGlzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdHJlbG9hZCgpIHtcclxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX3JlbG9hZCcgKTtcclxuXHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWFjY29yZGlvbicsICdhY2NvcmRpb24nICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2tncm91bmQnLCAnYmFja2dyb3VuZCcgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwJywgJ2JhY2t1cCcgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY2hlY2tib3gnLCAnY2hlY2tib3hfcmFkaW8nICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXJhZGlvJywgJ2NoZWNrYm94X3JhZGlvJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jbG9uZScsICdjbG9uZV9lbGVtZW50JyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jb2xvcl9wYWxldHRlJywgJ2NvbG9yX3BhbGV0dGUnICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNvbG9yX3BpY2tlcicsICdjb2xvcl9waWNrZXInICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNlbGVjdCcsICdzZWxlY3QnICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWljb25fcGlja2VyJywgJ2ljb25fcGlja2VyJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1mb250X3BpY2tlcicsICdmb250X3NlbGVjdG9yJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1ncm91cCcsICdncm91cCcgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGV4dDpub3QoLndwb25pb24taW5wdXRtYXNrKScsICd0ZXh0JyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10ZXh0YXJlYScsICd0ZXh0YXJlYScgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2Vfc2VsZWN0JywgJ2ltYWdlX3NlbGVjdCcgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3dpdGNoZXInLCAnc3dpdGNoZXInICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXdwX2VkaXRvcicsICd3cF9lZGl0b3InICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZpZWxkc2V0JywgJ2ZpZWxkc2V0JyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC13cF9saW5rJywgJ3dwX2xpbmtzJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1rZXlfdmFsdWUnLCAna2V5dmFsdWVfcGFpcicgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZGF0ZV9waWNrZXInLCAnZGF0ZV9waWNrZXInICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWdhbGxlcnknLCAnZ2FsbGVyeScgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdXBsb2FkJywgJ3VwbG9hZCcgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2UnLCAnaW1hZ2VfdXBsb2FkJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1idXR0b25fc2V0JywgJ2J1dHRvbl9zZXQnICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRhYicsICdqcXVlcnlfdGFiJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nb29nbGVfbWFwcycsICdnb29nbGVfbWFwcycgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc29ydGVyJywgJ3NvcnRlcicgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdHlwb2dyYXBoeScsICd0eXBvZ3JhcGh5JyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1vZW1iZWQnLCAnb2VtYmVkJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1oZWFkaW5nJywgJ2hlYWRpbmcnICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN1YmhlYWRpbmcnLCAnc3ViaGVhZGluZycgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29udGVudCcsICdjb250ZW50JyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1qYW1ib19jb250ZW50JywgJ2phbWJvX2NvbnRlbnQnICk7XHJcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LW5vdGljZScsICdub3RpY2UnICk7XHJcblxyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZmllbGQtdG9vbHRpcCcsICd0b29sdGlwJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24taGVscCcsICd0b29sdGlwJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24td3JhcC10b29sdGlwJywgJ3Rvb2x0aXAnICk7XHJcblxyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnaW5wdXRbZGF0YS13cG9uaW9uLWlucHV0bWFza10nLCAnaW5wdXRtYXNrJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdDInLCAnc2VsZWN0MicgKTtcclxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy5jaG9zZW4nLCAnY2hvc2VuJyApO1xyXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdGl6ZScsICdzZWxlY3RpemUnICk7XHJcblxyXG5cclxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfcmVsb2FkJyApO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIEFyZ3MgRGF0YS5cclxuXHQgKiBAcGFyYW0gJGFyZ3NcclxuXHQgKi9cclxuXHRzZXRfYXJncyggJGFyZ3MgKSB7XHJcblx0XHR0aGlzLl9hcmdzID0gJGFyZ3M7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgRmllbGQgUGFyZW50IEJ5IGRhdGEtd3Bvbmlvbi1qc2lkIGF0dHJpYnV0ZS5cclxuXHQgKiBAcGFyYW0gJGVsZW1cclxuXHQgKiBAcmV0dXJucyB7KnxqUXVlcnl8SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0Z2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggJGVsZW0gKSB7XHJcblx0XHRsZXQgJElEID0gJHdwb25pb24uZmllbGRJRCggJGVsZW0gKTtcclxuXHRcdHJldHVybiBqUXVlcnkoICdkaXYud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRJRCArICdcIl0nICk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG4vKipcclxuICogV1BPbmlvbiBNb2R1bGUgSlMgQ2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcblxyXG5cdHVpX21lbnVfaGFuZGxlcigpIHtcclxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tbWVudSA+IHVsIGEnICkub24oICdjbGljaycsICggZSApID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRsZXQgJGVsZW0gPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApO1xyXG5cclxuXHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnZHJvcGRvd24nICkgKSB7XHJcblx0XHRcdFx0aWYoICRlbGVtLnBhcmVudCgpLmZpbmQoICc+IHVsJyApLmlzKCAnOnZpc2libGUnICkgKSB7XHJcblx0XHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5maW5kKCAnPiB1bCcgKS5zbGlkZVRvZ2dsZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW1lbnUgPiB1bCB1bCcgKS5zbGlkZVVwKCk7XHJcblx0XHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5maW5kKCAnPiB1bCcgKS5zbGlkZVRvZ2dsZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0ICRocmVmID0gd2luZG93Lndwb25pb24uaGVscGVyLnVybF9wYXJhbXMoICRlbGVtLmF0dHIoICdocmVmJyApICk7XHJcblx0XHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkaHJlZlsgJ2NvbnRhaW5lci1pZCcgXSApICkge1xyXG5cdFx0XHRcdFx0bGV0ICRsb29rdXAgPSAnZGl2I3dwb25pb24tdGFiLScgKyAkaHJlZlsgJ2NvbnRhaW5lci1pZCcgXTtcclxuXHRcdFx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGhyZWZbICdzdWItY29udGFpbmVyLWlkJyBdICkgKSB7XHJcblx0XHRcdFx0XHRcdCRsb29rdXAgPSAkbG9va3VwICsgJy0nICsgJGhyZWZbICdzdWItY29udGFpbmVyLWlkJyBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCRsb29rdXAgPSBqUXVlcnkoICRsb29rdXAgKTtcclxuXHRcdFx0XHRcdGlmKCAkbG9va3VwLmxlbmd0aCA9PT0gMSApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdkaXYud3Bvbmlvbi1jb250YWluZXItd3JhcHMnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XHJcblx0XHRcdFx0XHRcdCRsb29rdXAucmVtb3ZlQ2xhc3MoICdoaWRkZW4nICk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tbWVudSAuYWN0aXZlJyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xyXG5cdFx0XHRcdFx0XHQkZWxlbS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcclxuXHRcdFx0XHRcdFx0JGVsZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCggJz4gYScgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJGVsZW0uYXR0ciggJ2hyZWYnICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJGVsZW0uYXR0ciggJ2hyZWYnICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFdQT25pb24gRmllbGQgVmFsaWRhdG9yIEhlbHBlciBDbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbl9WYWxpZGF0b3Ige1xyXG5cdC8qKlxyXG5cdCAqIEhlbHBlciBDbGFzcyBGb3IgV1BPbmlvbiBKUyBGaWVsZCBWYWxpZGF0aW9uLlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCBmb3JtID0gZmFsc2UgKSB7XHJcblx0XHR0aGlzLmZvcm0gID0gKCBmYWxzZSA9PT0gZm9ybSApID8gV1BPbmlvbl9WYWxpZGF0b3IuZ2V0X2Zvcm0oKSA6IGZvcm07XHJcblx0XHR0aGlzLnJ1bGVzID0ge1xyXG5cdFx0XHRpbnZhbGlkSGFuZGxlcjogKCkgPT4ge1xyXG5cdFx0XHRcdGpRdWVyeSggJyNwdWJsaXNoJyApLnJlbW92ZUNsYXNzKCAnYnV0dG9uLXByaW1hcnktZGlzYWJsZWQnICk7XHJcblx0XHRcdFx0alF1ZXJ5KCAnI2FqYXgtbG9hZGluZycgKS5hdHRyKCAnc3R5bGUnLCAnJyApO1xyXG5cdFx0XHRcdHRoaXMuZm9ybS5zaWJsaW5ncyggJyNtZXNzYWdlJyApLnJlbW92ZSgpO1xyXG5cdFx0XHRcdHRoaXMuZm9ybS5iZWZvcmUoICc8ZGl2IGlkPVwibWVzc2FnZVwiIGNsYXNzPVwiZXJyb3JcIj48cD4nICsgJHdwb25pb24udHh0KCAndmFsaWRhdGlvbl9zdW1tYXJ5JyApICsgJzwvcD48L2Rpdj4nICk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGlnbm9yZTogJy53cG9uaW9uLWRlcGVuZGVudCwud3Bvbmlvbi12YWxpZGF0aW9uLWlnbm9yZScsXHJcblx0XHRcdGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiggZXJyb3IsIGVsZW1lbnQgKSB7XHJcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCB7IGVycm9yLCBlbGVtZW50IH0gKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3JDbGFzczogJ3dwb25pb24tZXJyb3InLFxyXG5cdFx0XHRlcnJvckVsZW1lbnQ6ICdwJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiggdGhpcy5mb3JtICkge1xyXG5cdFx0XHR0aGlzLmZvcm0udmFsaWRhdGUoIHRoaXMucnVsZXMgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbmRzICYgUmV0dXJucyBmb3JtIERhdGEuXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0c3RhdGljIGdldF9mb3JtKCkge1xyXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggalF1ZXJ5KCAnZm9ybSN5b3VyLXByb2ZpbGUnICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3VwZGF0ZS1uYXYtbWVudScgKS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRyZXR1cm4galF1ZXJ5KCAnZm9ybSN1cGRhdGUtbmF2LW1lbnUnICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jcG9zdCcgKS5sZW5ndGggPiAwICYmIGpRdWVyeSggJ2lucHV0I3Bvc3RfSUQnICkubGVuZ3RoID4gMCAmJiBqUXVlcnkoICdpbnB1dCNvcmlnaW5hbF9wdWJsaXNoJyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3Bvc3QnICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICggalF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkubGVuZ3RoID4gMCApID8galF1ZXJ5KCAnZm9ybS53cG9uaW9uLWZvcm0nICkgOiBmYWxzZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0alF1ZXJ5KCB0aGlzICkuYWNjb3JkaW9uKCB7XHJcblx0XHRcdFx0aGVhZGVyOiAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxyXG5cdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxyXG5cdFx0XHRcdGFuaW1hdGU6IDE1MCxcclxuXHRcdFx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxyXG5cdFx0XHRcdGljb25zOiB7XHJcblx0XHRcdFx0XHQnaGVhZGVyJzogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctcmlnaHQnLFxyXG5cdFx0XHRcdFx0J2FjdGl2ZUhlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LWRvd24nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRpZiggIWpRdWVyeSggdGhpcyApLmhhc0NsYXNzKCAnaXNfb3BlbicgKSApIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oICdvcHRpb24nLCAnYWN0aXZlJywgZmFsc2UgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBKYXZhc2NyaXB0IEVycm9yIFBsYWNlbWVudC5cclxuXHQgKiBAcGFyYW0gZXJyXHJcblx0ICovXHJcblx0anNfZXJyb3IoIGVyciApIHtcclxuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XHJcblx0XHRpZiggJGVsZW0gKSB7XHJcblx0XHRcdGVyci5lcnJvci5hcHBlbmRUbyggJGVsZW0uZmluZCggJz4gLnJvdyA+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2FjY29yZGlvbicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdiYWNrZ3JvdW5kJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XHJcblxyXG4vKiBnbG9iYWwgc3dhbDp0cnVlICovXHJcblxyXG4vKiBnbG9iYWwgdGlwcHk6dHJ1ZSAqL1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy50b29sdGlwKCk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dFt0eXBlPVwiZmlsZVwiXScgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHtcclxuXHRcdFx0dGhpcy5oYW5kbGVfYmFja3VwX2ltcG9ydCggZS5jdXJyZW50VGFyZ2V0ICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdhLmRvd25sb2FkX2JhY2t1cCcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRsZXQgJGZpbGUgPSB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApO1xyXG5cdFx0XHQkZmlsZSAgICAgPSAkZmlsZSArICctJyArIHRoaXMubW9kdWxlKCk7XHJcblx0XHRcdGxldCBkYXRlICA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdGxldCBzdHIgICA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArICggZGF0ZS5nZXRNb250aCgpICsgMSApICsgJy0nICsgZGF0ZS5nZXREYXRlKCkgKyAnLScgKyBkYXRlLmdldEhvdXJzKCkgKyBkYXRlLmdldE1pbnV0ZXMoKSArIGRhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHQkZmlsZSAgICAgPSAkZmlsZSArICctJyArIHN0cjtcclxuXHRcdFx0dGhpcy5mb3JjZV9kb3dubG9hZCggSlNPTi5wYXJzZSggdGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX3RleHRhcmVhIHRleHRhcmVhJyApLmh0bWwoKSApLCAkZmlsZSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnYS5uZXdfYmFja3VwICcgKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcclxuXHRcdFx0dGhpcy5hamF4KCAnbmV3LW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXHJcblx0XHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xyXG5cdFx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCB0cnVlICk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cycgKS5odG1sKCBlLmRhdGEgKTtcclxuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcuZGVsZXRlX2JhY2t1cCcsICggZSApID0+IHtcclxuXHRcdFx0dGhpcy5ibG9ja19mb3JtKCk7XHJcblx0XHRcdGxldCAkaW5zID0galF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAuZGVsZXRlX2JhY2t1cCcgKS50aXBweV9nZXQoKTtcclxuXHRcdFx0aWYoICRpbnMuaW5zdGFuY2VzWyAwIF0gKSB7XHJcblx0XHRcdFx0JGlucy5pbnN0YW5jZXNbIDAgXS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5hamF4KCAnZGVsZXRlLW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXHJcblx0XHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcclxuXHRcdFx0XHRcdGJhY2t1cF9pZDogalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5hdHRyKCAnZGF0YS1iYWNrdXBpZCcgKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xyXG5cdFx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCB0cnVlICk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cycgKS5odG1sKCBlLmRhdGEgKTtcclxuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLmVsZW1lbnQub24oICdjbGljaycsICcucmVzdG9yZV9iYWNrdXAnLCAoIGUgKSA9PiB7XHJcblx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkuYXR0ciggJ2RhdGEtYmFja3VwaWQnICkgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLmVsZW1lbnQub24oICdibHVyJywgJy5yZXN0b3JlX3RleHRhcmVhIHRleHRhcmVhJywgKCBlICkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIEpTT04ucGFyc2UoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCkgKSApO1xyXG5cdFx0XHRcdGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCAnJyApLmh0bWwoICcnICk7XHJcblx0XHRcdH0gY2F0Y2goIGVycm9yICkge1xyXG5cdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggdGhpcy5vcHRpb24oICdpbnZhbGlkX2Zvcm1hdCcgKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZXMgU3dhbCBFcnJvciBNc2cuXHJcblx0ICogQHBhcmFtIG1zZ1xyXG5cdCAqL1xyXG5cdHN3YWxfZXJyb3IoIG1zZyApIHtcclxuXHRcdHN3YWwoIHtcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0dGl0bGU6IG1zZ1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBUb29sVGlwIGluc3RhbmNlLlxyXG5cdCAqIEBwYXJhbSByZW1vdmVcclxuXHQgKi9cclxuXHR0b29sdGlwKCByZW1vdmUgPSBmYWxzZSApIHtcclxuXHRcdGxldCAkdGhpcyA9IHRoaXM7XHJcblx0XHRpZiggdHJ1ZSA9PT0gcmVtb3ZlICkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMgbGknICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0ICRlbGVtID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gYScgKVsgMCBdO1xyXG5cdFx0XHRcdCRlbGVtLl90aXBweS5kZXN0cm95KCk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cyBsaScgKS5lYWNoKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkdGhpcy5zaG93X3Rvb2x0aXAoIGpRdWVyeSggdGhpcyApLmZpbmQoICc+YScgKSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBCbG9ja3MgQSBGb3JtXHJcblx0ICovXHJcblx0YmxvY2tfZm9ybSgpIHtcclxuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLmF0dHIoICdkaXNhYmxlZCcsICdkaXNhYmxlZCcgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVuYmxvY2tzIGEgZm9ybVxyXG5cdCAqL1xyXG5cdHVuYmxvY2tfZm9ybSgpIHtcclxuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5maW5kKCAnYnV0dG9uJyApLnJlbW92ZUF0dHIoICdkaXNhYmxlZCcgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZvcmNlcyBEb3dubG9hZCBFeHBvcnQgRGF0YS5cclxuXHQgKiBAcGFyYW0gZXhwb3J0T2JqXHJcblx0ICogQHBhcmFtIGV4cG9ydE5hbWVcclxuXHQgKi9cclxuXHRmb3JjZV9kb3dubG9hZCggZXhwb3J0T2JqLCBleHBvcnROYW1lICkge1xyXG5cdFx0bGV0IGRhdGFTdHIgICAgICAgICAgICA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoIEpTT04uc3RyaW5naWZ5KCBleHBvcnRPYmogKSApO1xyXG5cdFx0bGV0IGRvd25sb2FkQW5jaG9yTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdhJyApO1xyXG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnNldEF0dHJpYnV0ZSggJ2hyZWYnLCBkYXRhU3RyICk7XHJcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKCAnZG93bmxvYWQnLCBleHBvcnROYW1lICsgJy5qc29uJyApO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZG93bmxvYWRBbmNob3JOb2RlICk7IC8vIHJlcXVpcmVkIGZvciBmaXJlZm94XHJcblx0XHRkb3dubG9hZEFuY2hvck5vZGUuY2xpY2soKTtcclxuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc3RvcmVzIEJhY2t1cCBEYXRhLlxyXG5cdCAqIEBwYXJhbSBiYWNrdXBfaWRcclxuXHQgKi9cclxuXHRyZXN0b3JlX2JhY2t1cCggYmFja3VwX2lkICkge1xyXG5cdFx0dGhpcy5ibG9ja19mb3JtKCk7XHJcblx0XHR0aGlzLmFqYXgoICdyZXN0b3JlLW1vZHVsZS1kYXRhLWJhY2t1cCcsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHVuaXF1ZTogdGhpcy5vcHRpb24oICdiYXNlX3VuaXF1ZScgKSxcclxuXHRcdFx0XHRleHRyYTogdGhpcy5nZXRfZXh0cmFfdmFsdWUoKSxcclxuXHRcdFx0XHRiYWNrdXBfaWQ6IGJhY2t1cF9pZCxcclxuXHRcdFx0fSxcclxuXHRcdFx0b25TdWNjZXNzOiAoIGUgKSA9PiB7XHJcblx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdHN3YWwoIHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogZS5kYXRhLFxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIEJhY2t1cCBJbXBvcnQgRmlsZSBhbmQgcmVzdG9yZXMgaXQuXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICovXHJcblx0aGFuZGxlX2JhY2t1cF9pbXBvcnQoICRlbGVtICkge1xyXG5cdFx0aWYoICRlbGVtLmZpbGVzICYmICRlbGVtLmZpbGVzWyAwIF0gKSB7XHJcblx0XHRcdGxldCAkZmlsZSA9ICRlbGVtLmZpbGVzWyAwIF07XHJcblxyXG5cdFx0XHRpZiggJGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL2pzb24nICkge1xyXG5cdFx0XHRcdHRoaXMuc3dhbF9lcnJvciggdGhpcy5vcHRpb24oICdpbnZhbGlkX2Zvcm1hdCcgKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgcmVhZGVyICAgID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdFx0XHRyZWFkZXIub25sb2FkID0gKCBlICkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggZS50YXJnZXQucmVzdWx0ICkgKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCAkZmlsZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTaG93J3MgVG9vbFRpcFxyXG5cdCAqIEBwYXJhbSAkZWxlbVxyXG5cdCAqL1xyXG5cdHNob3dfdG9vbHRpcCggJGVsZW0gKSB7XHJcblx0XHRsZXQgJGJhY2t1cGlkID0gJGVsZW0uYXR0ciggJ2RhdGEtYmFja3VwaWQnICk7XHJcblx0XHRsZXQgJGFwcGVuZFRPID0gdGhpcy5lbGVtZW50WyAwIF07XHJcblx0XHR0aXBweSggJGVsZW1bIDAgXSwge1xyXG5cdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0YXBwZW5kVG86ICRhcHBlbmRUTyxcclxuXHRcdFx0YXJyb3dUeXBlOiAncm91bmQnLFxyXG5cdFx0XHRjb250ZW50OiAnPGJ1dHRvbiBkYXRhLWJhY2t1cGlkPVwiJyArICRiYWNrdXBpZCArICdcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZXN0b3JlX2JhY2t1cCBidXR0b24gYnV0dG9uLXNlY29uZGFyeSBidXR0b24tc21hbGxcIj48aSBjbGFzcz1cImRhc2hpY29ucy1pbWFnZS1yb3RhdGUgZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4gfCA8YnV0dG9uIGRhdGEtYmFja3VwaWQ9XCInICsgJGJhY2t1cGlkICsgJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZV9iYWNrdXAgYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNtYWxsXCI+PGkgY2xhc3M9XCJkYXNoaWNvbnMtdHJhc2ggZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4nLFxyXG5cdFx0XHRpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuXHRcdFx0dGhlbWU6ICd0cmFuc2x1Y2VudCcsXHJcblx0XHRcdG9uU2hvd246ICgpID0+IHtcclxuXHRcdFx0XHRqUXVlcnkoICdkaXYudGlwcHktcG9wcGVyIC50aXBweS1jb250ZW50IC5kZWxldGVfYmFja3VwJyApLnRpcHB5KCB7XHJcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdGFycm93VHlwZTogJ3NraW5ueScsXHJcblx0XHRcdFx0XHRhcHBlbmRUbzogJGFwcGVuZFRPLFxyXG5cdFx0XHRcdFx0Y29udGVudDogJHdwb25pb24udHh0KCAnZGVsZXRlJyApLFxyXG5cdFx0XHRcdFx0dGhlbWU6ICdsaWdodC1ib3JkZXInLFxyXG5cdFx0XHRcdFx0aW50ZXJhY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdGpRdWVyeSggJ2Rpdi50aXBweS1wb3BwZXIgLnRpcHB5LWNvbnRlbnQgLnJlc3RvcmVfYmFja3VwJyApLnRpcHB5KCB7XHJcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdGFycm93VHlwZTogJ3NraW5ueScsXHJcblx0XHRcdFx0XHRhcHBlbmRUbzogJGFwcGVuZFRPLFxyXG5cdFx0XHRcdFx0Y29udGVudDogJHdwb25pb24udHh0KCAncmVzdG9yZScgKSxcclxuXHRcdFx0XHRcdHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcclxuXHRcdFx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGFjZW1lbnQ6ICdyaWdodCcsXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIEV4dHJhIFZhbHVlLlxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdGdldF9leHRyYV92YWx1ZSgpIHtcclxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QgaW5wdXQjcG9zdF9JRCcgKS5sZW5ndGggPT09IDEgKSB7XHJcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3Bvc3QgaW5wdXQjcG9zdF9JRCcgKS52YWwoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYmFja3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSW5pdHMgRmllbGQuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMucmVtb3ZlX2FjdGl2ZV9jbGFzcygpO1xyXG5cdFx0dGhpcy5hZGRfYWN0aXZlX2NsYXNzKCk7XHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NsaWNrJywgKCBlICkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlbW92ZV9hY3RpdmVfY2xhc3MoKTtcclxuXHRcdFx0dGhpcy5hZGRfYWN0aXZlX2NsYXNzKCk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmUgQWN0aXZlIENsYXNzLlxyXG5cdCAqL1xyXG5cdHJlbW92ZV9hY3RpdmVfY2xhc3MoKSB7XHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5lYWNoKCAoIGksIGUgKSA9PiB7XHJcblx0XHRcdGxldCAkZSA9IGpRdWVyeSggZSApO1xyXG5cdFx0XHRpZiggISRlLmlzKCAnOmNoZWNrZWQnICkgKSB7XHJcblx0XHRcdFx0JGUucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoIHRoaXMub3B0aW9uKCAnYWN0aXZlJyApICk7XHJcblx0XHRcdFx0JGUucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoIHRoaXMub3B0aW9uKCAnaW5hY3RpdmUnICkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBBY3RpdmUgQ2xhc3MuXHJcblx0ICovXHJcblx0YWRkX2FjdGl2ZV9jbGFzcygpIHtcclxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLmVhY2goICggaSwgZSApID0+IHtcclxuXHRcdFx0bGV0ICRlID0galF1ZXJ5KCBlICk7XHJcblx0XHRcdGlmKCAkZS5pcyggJzpjaGVja2VkJyApICkge1xyXG5cdFx0XHRcdCRlLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCB0aGlzLm9wdGlvbiggJ2FjdGl2ZScgKSApO1xyXG5cdFx0XHRcdCRlLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbiggJ2luYWN0aXZlJyApICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYnV0dG9uX3NldCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0bGV0ICRjdXN0b21faW5wdXQgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcclxuXHRcdFx0bGV0ICRyYWRpb3MgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0W3R5cGU9cmFkaW9dJyApO1xyXG5cdFx0XHRsZXQgJGNoZWNrYm94ICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1jaGVja2JveF0nICk7XHJcblxyXG5cdFx0XHQkY3VzdG9tX2lucHV0Lm1vdmVBdHRyKCAnbmFtZScsICdkYXRhLW5hbWUnICk7XHJcblxyXG5cdFx0XHQkcmFkaW9zLmVhY2goICggaSwgZSApID0+IHtcclxuXHRcdFx0XHRpZiggalF1ZXJ5KCBlICkuaXMoICc6Y2hlY2tlZCcgKSApIHtcclxuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHRcdCRjdXN0b21faW5wdXQubW92ZUF0dHIoICduYW1lJywgJ2RhdGEtbmFtZScgKTtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCBlICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKS5tb3ZlQXR0ciggJ2RhdGEtbmFtZScsICduYW1lJyApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0JHJhZGlvcy5vbiggJ2NsaWNrJywgKCBlICkgPT4ge1xyXG5cdFx0XHRcdCRjdXN0b21faW5wdXQubW92ZUF0dHIoICduYW1lJywgJ2RhdGEtbmFtZScgKTtcclxuXHRcdFx0XHRpZiggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkoIGUuY3VycmVudFRhcmdldCApXHJcblx0XHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0XHQuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKVxyXG5cdFx0XHRcdFx0XHQubW92ZUF0dHIoICdkYXRhLW5hbWUnLCAnbmFtZScgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdCRjaGVja2JveC5lYWNoKCAoIGksIGUgKSA9PiB7XHJcblx0XHRcdFx0aWYoIGpRdWVyeSggZSApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5pcyggJzpjaGVja2VkJyApICkge1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkoIGUgKS5tb3ZlQXR0ciggJ25hbWUnLCAnZGF0YS1uYW1lJyApO1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLm1vdmVBdHRyKCAnZGF0YS1uYW1lJywgJ25hbWUnICk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkoIGUgKS5tb3ZlQXR0ciggJ25hbWUnLCAnZGF0YS1uYW1lJyApO1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLm1vdmVBdHRyKCAnbmFtZScsICdkYXRhLW5hbWUnICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHQkY2hlY2tib3gub24oICdjbGljaycsICggZSApID0+IHtcclxuXHRcdFx0XHRpZiggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHRpZiggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5pcyggJzpjaGVja2VkJyApICkge1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLm1vdmVBdHRyKCAnbmFtZScsICdkYXRhLW5hbWUnICk7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0IClcclxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdFx0XHQuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKVxyXG5cdFx0XHRcdFx0XHRcdC5tb3ZlQXR0ciggJ2RhdGEtbmFtZScsICduYW1lJyApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKVxyXG5cdFx0XHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0XHRcdC5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApXHJcblx0XHRcdFx0XHRcdFx0Lm1vdmVBdHRyKCAnbmFtZScsICdkYXRhLW5hbWUnICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NoZWNrYm94X3JhZGlvJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG5cclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnY2hvc2VuJywge30gKTtcclxuXHJcblx0XHQkYXJnID0gdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJ2Nob3NlbicgKTtcclxuXHRcdHRoaXMuZWxlbWVudC5jaG9zZW4oICRhcmcgKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0ZmllbGRfZGVidWcoKSB7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2Nob3NlbicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG4vKiBnbG9iYWwgd3Bvbmlvbl9maWVsZDp0cnVlICovXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSW5pdHMgRmllbGQuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdGxldCAkYXJnICAgICAgICA9IHRoaXMuaGFuZGxlX2FyZ3MoIHRoaXMub3B0aW9uKCAnY2xvbmUnLCB7fSApICk7XHJcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxyXG5cdFx0XHQkZWxlbSAgICAgICA9ICR0aGlzLmVsZW1lbnQsXHJcblx0XHRcdCRjbG9uZV93cmFwID0gJGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLWNsb25lLXdyYXAnICksXHJcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtYWRkXScgKSxcclxuXHRcdFx0Ly8kcmVtb3ZlX2J0biA9ICRjbG9uZV93cmFwLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWNsb25lLXJlbW92ZV0nICksXHJcblx0XHRcdCRsaW1pdCAgICAgID0gKCAkYXJnLmxpbWl0ICE9PSB1bmRlZmluZWQgKSA/ICRhcmcubGltaXQgOiBmYWxzZSxcclxuXHRcdFx0Ly8kaXNfdG9hc3QgICA9ICggJGFyZy50b2FzdF9lcnJvciAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLnRvYXN0X2Vycm9yIDogdHJ1ZSxcclxuXHRcdFx0JGVyb3JfbXNnICAgPSAkYXJnLmVycm9yX21zZyxcclxuXHRcdFx0JHNvcnQgICAgICAgPSAoICRhcmcuc29ydCAhPT0gZmFsc2UgKSA/IHtcclxuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcclxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1maWVsZC1jbG9uZS1zb3J0ZXInLFxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnd3Bvbmlvbi1jbG9uZXItcGxhY2Vob2xkZXInLFxyXG5cdFx0XHRcdHN0YXJ0OiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKSxcclxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcclxuXHRcdFx0XHRcdCRlbGVtLnRyaWdnZXIoICdjaGFuZ2UnICk7XHJcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9IDogZmFsc2U7XHJcblxyXG5cdFx0JGNsb25lX3dyYXAuV1BPbmlvbkNsb25lcigge1xyXG5cdFx0XHRhZGRfYnRuOiAkYWRkX2J0bixcclxuXHRcdFx0bGltaXQ6ICRsaW1pdCxcclxuXHRcdFx0Y2xvbmVfZWxlbTogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcclxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWNsb25lLWFjdGlvbiA+IC53cG9uaW9uLXJlbW92ZScsXHJcblx0XHRcdHRlbXBsYXRlOiAkdGhpcy5vcHRpb24oICdjbG9uZV90ZW1wbGF0ZScgKSxcclxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZSApID0+IHtcclxuXHRcdFx0XHQkZWxlbS50cmlnZ2VyKCAnY2hhbmdlJyApO1xyXG5cdFx0XHRcdHdwb25pb25fZmllbGQoICRlLmZpbmQoICc+IGRpdi53cG9uaW9uLWZpZWxkLWNsb25lOmxhc3QtY2hpbGQnICkgKS5yZWxvYWQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25SZW1vdmVBZnRlcjogKCkgPT4gJGVsZW0udHJpZ2dlciggJ2NoYW5nZScgKSxcclxuXHRcdFx0c29ydGFibGU6ICRzb3J0LFxyXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYoICRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkucHJlcGVuZCggalF1ZXJ5KCAkZXJvcl9tc2cgKS5oaWRlKCkgKTtcclxuXHRcdFx0XHRcdCRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuc2xpZGVEb3duKCk7XHJcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UoICRhZGRfYnRuLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQsIGRpdi5ub3RpY2UnICkgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dfYW5pbWF0aW9uOiAkYXJnLmFuaW1hdGlvbnMuc2hvdyxcclxuXHRcdFx0aGlkZV9hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5oaWRlLFxyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjbG9uZV9lbGVtZW50JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BhbGV0dGUnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dC53cG9uaW9uLWNvbG9yLXBpY2tlci1lbGVtZW50JyApLndwQ29sb3JQaWNrZXIoKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY29sb3JfcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbnRlbnQnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXHJcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXHJcblx0XHRcdCRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnICksXHJcblx0XHRcdCR2aWV3O1xyXG5cclxuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHNldHRpbmdzLnRoZW1lICkgKSB7XHJcblx0XHRcdCR2aWV3ID0gJHNldHRpbmdzLnRoZW1lO1xyXG5cdFx0XHRkZWxldGUgJHNldHRpbmdzLnRoZW1lO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHZpZXcgPSAnZGVmYXVsdCc7XHJcblx0XHR9XHJcblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKS5sZW5ndGggPT09IDAgKSB7XHJcblx0XHRcdGpRdWVyeSggJ2JvZHknIClcclxuXHRcdFx0XHQuYXBwZW5kKCBqUXVlcnkoICc8ZGl2IGNsYXNzPVwid3Bvbmlvbi1kYXRlcGlja2VyLScgKyAkdmlldyArICdcIiBpZD1cIicgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlclwiPjwvZGl2PicgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tZGF0ZXBpY2tlci1yYW5nZScgKSApIHtcclxuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKVsgMCBdO1xyXG5cdFx0XHRpZiggJHNldHRpbmdzLnBsdWdpbnMgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHQkc2V0dGluZ3MucGx1Z2lucyA9IFtdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkc2V0dGluZ3MucGx1Z2lucy5wdXNoKCBuZXcgcmFuZ2VQbHVnaW4oIHsgaW5wdXQ6ICRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci10by1kYXRlXScgKVsgMCBdIH0gKSApO1xyXG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItZnJvbS1kYXRlXScgKVxyXG5cdFx0XHRcdCAuZmxhdHBpY2tyKCB0aGlzLmhhbmRsZV9hcmdzKCAkc2V0dGluZ3MsICdkYXRlX3BpY2tlcicgKSApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHNldHRpbmdzLmFwcGVuZFRvID0galF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKyAnZGF0ZXBpY2tlcicgKVsgMCBdO1xyXG5cdFx0XHQkZWxlbS5maW5kKCAnaW5wdXQnICkuZmxhdHBpY2tyKCB0aGlzLmhhbmRsZV9hcmdzKCAkc2V0dGluZ3MsICdkYXRlX3BpY2tlcicgKSApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdkYXRlX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgRXJyb3IgUGxhY2VtZW50LlxyXG5cdCAqIEBwYXJhbSBlcnJcclxuXHQgKi9cclxuXHRqc19lcnJvciggZXJyICkge1xyXG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcclxuXHRcdGlmKCAkZWxlbSApIHtcclxuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGRzZXQnICkgKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZmllbGRzZXQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBXZWJzYWZlIEZvbnQgRGF0YS5cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRnZXQgd2Vic2FmZSgpIHtcclxuXHRcdHJldHVybiAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl93ZWJzYWZlX2ZvbnRzJyApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBHb29nbGUgRm9udCBEYXRhLlxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdGdldCBnb29nbGVfZm9udHMoKSB7XHJcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ2ZvbnRzJyApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRzIEhUTUwgT3B0aW9uIFRhZyBVc2luZyBBcnJheS5cclxuXHQgKiBAcGFyYW0gZGF0YVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0YnVpbGRfb3B0aW9ucyggZGF0YSApIHtcclxuXHRcdGxldCAkcmV0dXJuID0gJyc7XHJcblx0XHRmb3IoIGxldCAkX2QgaW4gZGF0YSApIHtcclxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCBkYXRhWyAkX2QgXSApICkge1xyXG5cdFx0XHRcdCRyZXR1cm4gKz0gYDxvcHRpb24gdmFsdWU9XCIkeyRfZH1cIj4ke2RhdGFbICRfZCBdfTwvb3B0aW9uPmA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAkcmV0dXJuO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5pdHMgRmllbGQuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tZm9udC1zZWxlY3RvcicgKS5vbiggJ2NoYW5nZScsICggZSApID0+IHtcclxuXHRcdFx0bGV0ICR2YWwgID0galF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSxcclxuXHRcdFx0XHQkaHRtbCA9IG51bGw7XHJcblxyXG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMud2Vic2FmZS5mb250cyBbICR2YWwgXSApICkge1xyXG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLndlYnNhZmUudmFyaWFudHMgKTtcclxuXHRcdFx0fSBlbHNlIGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5nb29nbGVfZm9udHNbICR2YWwgXSApICkge1xyXG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLmdvb2dsZV9mb250c1sgJHZhbCBdICk7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0ICR2YXJpYW50ID0gdGhpcy5lbGVtZW50LmZpbmQoICdzZWxlY3Qud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLmh0bWwoICRodG1sICk7XHJcblxyXG5cdFx0XHRpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdjaG9zZW4nICkgKSB7XHJcblx0XHRcdFx0JHZhcmlhbnQudHJpZ2dlciggJ2Nob3Nlbjp1cGRhdGVkJyApO1xyXG5cdFx0XHR9IGVsc2UgaWYoICR2YXJpYW50Lmhhc0NsYXNzKCAnc2VsZWN0MicgKSApIHtcclxuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ZvbnRfc2VsZWN0b3InLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0bGV0ICR0aGlzICAgICAgPSB0aGlzLFxyXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcclxuXHRcdFx0JGh0bWxfdGVtcCA9ICR0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXHJcblx0XHRcdCRpbnB1dCAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXHJcblx0XHRcdCRwcmV2aWV3ICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldycgKSxcclxuXHRcdFx0d3BfbWVkaWFfZnJhbWUsXHJcblx0XHRcdCRhZGQgICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWFkZF0nICksXHJcblx0XHRcdCRlZGl0ICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWVkaXRdJyApLFxyXG5cdFx0XHQkY2xlYXIgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tZ2FsbGVyeS1jbGVhcl0nICksXHJcblx0XHRcdCRtYW5hZ2UgICAgPSBmdW5jdGlvbiggJHR5cGUgKSB7XHJcblx0XHRcdFx0bGV0IGlkcyAgID0gJGlucHV0LnZhbCgpLFxyXG5cdFx0XHRcdFx0d2hhdCAgPSAoICR0eXBlID09PSAnZWRpdCcgKSA/ICdlZGl0JyA6ICdhZGQnLFxyXG5cdFx0XHRcdFx0c3RhdGUgPSAoIHdoYXQgPT09ICdhZGQnICYmICFpZHMubGVuZ3RoICkgPyAnZ2FsbGVyeScgOiAnZ2FsbGVyeS1lZGl0JztcclxuXHJcblx0XHRcdFx0aWYoIHR5cGVvZiB3cCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdwLm1lZGlhIHx8ICF3cC5tZWRpYS5nYWxsZXJ5ICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcclxuXHJcblx0XHRcdFx0aWYoIHN0YXRlID09PSAnZ2FsbGVyeScgKSB7XHJcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XHJcblx0XHRcdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxyXG5cdFx0XHRcdFx0XHRmcmFtZTogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0XHRzdGF0ZTogJ2dhbGxlcnknLFxyXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhLmdhbGxlcnkuZWRpdCggJ1tnYWxsZXJ5IGlkcz1cIicgKyBpZHMgKyAnXCJdJyApO1xyXG5cdFx0XHRcdFx0aWYoIHdoYXQgPT09ICdhZGQnICkge1xyXG5cdFx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5zZXRTdGF0ZSggJ2dhbGxlcnktbGlicmFyeScgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9uKCAndXBkYXRlJywgZnVuY3Rpb24oIHNlbGVjdGlvbiApIHtcclxuXHRcdFx0XHRcdGxldCBzZWxlY3RlZElkcyA9IHNlbGVjdGlvbi5tb2RlbHMubWFwKCBmdW5jdGlvbiggYXR0YWNobWVudCApIHtcclxuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSBhdHRhY2htZW50LnRvSlNPTigpO1xyXG5cdFx0XHRcdFx0XHRpZiggaXRlbS5zaXplcyA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0bGV0IHRodW1iID0gKCB0eXBlb2YgaXRlbS5zaXplcy50aHVtYm5haWwgIT09ICd1bmRlZmluZWQnICkgPyBpdGVtLnNpemVzLnRodW1ibmFpbC51cmwgOiBpdGVtLnVybCxcclxuXHRcdFx0XHRcdFx0XHQkdG1wICA9IGpRdWVyeSggJGh0bWxfdGVtcCApO1xyXG5cdFx0XHRcdFx0XHQkdG1wLmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnLCBpdGVtLmlkICk7XHJcblx0XHRcdFx0XHRcdCR0bXAuZmluZCggJ2ltZycgKS5hdHRyKCAnZGF0YS1mdWxsc2l6ZScsIGl0ZW0udXJsICkuYXR0ciggJ3NyYycsIHRodW1iICkucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xyXG5cdFx0XHRcdFx0XHQkcHJldmlldy5hcHBlbmQoICR0bXAgKTtcclxuXHRcdFx0XHRcdFx0JHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWhlbHAnLCAndG9vbHRpcCcgKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0uaWQ7XHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRsZXQgJGU7XHJcblx0XHRcdFx0XHRmb3IoICRlIGluIHNlbGVjdGVkSWRzICkge1xyXG5cdFx0XHRcdFx0XHRpZiggc2VsZWN0ZWRJZHNbICRlIF0gPT09IGZhbHNlIHx8IHNlbGVjdGVkSWRzWyAkZSBdID09PSAnJyApIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgc2VsZWN0ZWRJZHNbICRlIF07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCRpbnB1dC52YWwoIHNlbGVjdGVkSWRzLmpvaW4oICcsJyApICkudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XHJcblx0XHRcdFx0JGFkZC5zaG93KCk7XHJcblx0XHRcdFx0JGVkaXQuaGlkZSgpO1xyXG5cdFx0XHRcdCRjbGVhci5oaWRlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGVkaXQuc2hvdygpO1xyXG5cdFx0XHRcdCRjbGVhci5zaG93KCk7XHJcblx0XHRcdFx0JGFkZC5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHQkYWRkLm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnYWRkJyApICk7XHJcblxyXG5cdFx0JGVkaXQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdlZGl0JyApICk7XHJcblxyXG5cdFx0JGNsZWFyLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcclxuXHRcdFx0JHByZXZpZXcuaHRtbCggJycgKTtcclxuXHRcdFx0JGNsZWFyLmhpZGUoKTtcclxuXHRcdFx0JGVkaXQuaGlkZSgpO1xyXG5cdFx0XHQkYWRkLnNob3coKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHQkcHJldmlldy5vbiggJ2NsaWNrJywgJ2ltZycsICggZXZlbnQgKSA9PiB0aGlzLmluaXRfZmllbGQoIGV2ZW50LnRhcmdldCwgJ2ltYWdlX3BvcHVwJyApICk7XHJcblxyXG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpLndwb25pb24taW1hZ2UtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCAkcGFyZW50ICAgPSBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKSxcclxuXHRcdFx0XHQkaW1hZ2VfaWQgPSAkcGFyZW50LmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnICksXHJcblx0XHRcdFx0JHZhbHVlICAgID0gJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKTtcclxuXHRcdFx0alF1ZXJ5LmVhY2goICRpbnB1dC52YWwoKS5zcGxpdCggJywnICksIGZ1bmN0aW9uKCAkaywgJHYgKSB7XHJcblx0XHRcdFx0aWYoICR2ID09PSAkaW1hZ2VfaWQgKSB7XHJcblx0XHRcdFx0XHQkdmFsdWUuc3BsaWNlKCAkaywgMSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0JGlucHV0LnZhbCggJHZhbHVlLmpvaW4oICcsJyApICk7XHJcblx0XHRcdCRwYXJlbnQuZmFkZU91dCggKCkgPT4gJHBhcmVudC5yZW1vdmUoKSApO1xyXG5cdFx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHQkaW5wdXQudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHJcblx0XHRpZiggJHByZXZpZXcuaGFzQ2xhc3MoICdnYWxsZXJ5LXNvcnRhYmxlJyApICkge1xyXG5cdFx0XHQkcHJldmlldy5zb3J0YWJsZSgge1xyXG5cdFx0XHRcdGl0ZW1zOiAnPiBkaXYnLFxyXG5cdFx0XHRcdGN1cnNvcjogJ21vdmUnLFxyXG5cdFx0XHRcdHNjcm9sbFNlbnNpdGl2aXR5OiA0MCxcclxuXHRcdFx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3NvcnRhYmxlLXBsYWNlaG9sZGVyJyxcclxuXHRcdFx0XHRoZWxwZXI6ICdjbG9uZScsXHJcblx0XHRcdFx0b3BhY2l0eTogMC42NSxcclxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuXHRcdFx0XHRcdGxldCAkaXRlbSA9IHVpLml0ZW07XHJcblx0XHRcdFx0XHQkcHJldmlldy5maW5kKCAnLnNvcnRhYmxlLXBsYWNlaG9sZGVyJyApLmNzcyggJ3dpZHRoJywgJGl0ZW0ud2lkdGgoKSApO1xyXG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICdoZWlnaHQnLCAkaXRlbS5oZWlnaHQoKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdnYWxsZXJ5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCIvKiBnbG9iYWwgZ29vZ2xlOnRydWUgKi9cclxuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJG1hcCAgICAgICAgICAgICAgPSB0aGlzLm9wdGlvbiggJ21hcCcsIHt9ICk7XHJcblx0XHQkbWFwLmRldGFpbHMgICAgICAgICAgPSAnI2dtYXBfZmllbGRzXycgKyB0aGlzLmlkKCk7XHJcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xyXG5cdFx0aWYoICd5ZXMnID09PSB0aGlzLm9wdGlvbiggJ3Nob3dfbWFwJyApICkge1xyXG5cdFx0XHQkbWFwLm1hcCA9ICcjZ21hcF8nICsgdGhpcy5pZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCAkX2luc3RhbmNlID0gdGhpcy5lbGVtLmZpbmQoICdkaXYuc2VhcmNoYm94ID4gaW5wdXQnICk7XHJcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcclxuXHRcdCRfaW5zdGFuY2UuYmluZCggJ2dlb2NvZGU6ZHJhZ2dlZCcsICggZXZlbnQsIGxhdExuZyApID0+IHtcclxuXHRcdFx0bGV0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcclxuXHRcdFx0Z2VvY29kZXIuZ2VvY29kZSgge1xyXG5cdFx0XHRcdCdsb2NhdGlvbic6IHtcclxuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXHJcblx0XHRcdFx0XHRsbmc6IHBhcnNlRmxvYXQoIGxhdExuZy5sbmcoKSApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcclxuXHRcdFx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCAnZmlsbERldGFpbHMnLCByZXN1bHRzWyAwIF0gKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdnb29nbGVfbWFwcycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcclxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxyXG5cdFx0XHQkYWRkICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAucm93ID4gLndwb25pb24tZmllbGRzZXQgPiBidXR0b25bZGF0YS13cG9uaW9uLWdyb3VwLWFkZF0nICksXHJcblx0XHRcdCRncm91cF93cmFwID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC5yb3cgPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAnICksXHJcblx0XHRcdCRsaW1pdCAgICAgID0gJHRoaXMub3B0aW9uKCAnbGltaXQnICksXHJcblx0XHRcdCRlcnJvcl9tc2cgID0gJHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApO1xyXG5cclxuXHRcdHRoaXMuaW5pdF9maWVsZCggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC13cmFwJyApLCAnYWNjb3JkaW9uJyApO1xyXG5cclxuXHRcdCRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XHJcblx0XHR9ICk7XHJcblx0XHR0aGlzLmJpbmRfZXZlbnRzX2Zvcl90aXRsZSgpO1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoIHtcclxuXHRcdFx0YXBwZW5kVG86ICgpID0+IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcclxuXHRcdH0gKTtcclxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWdyb3VwLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRqUXVlcnkoIHRoaXMgKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5maW5kKCAnPiAud3Bvbmlvbi1hY2NvcmRpb24tY29udGVudCAucm93ID4gLndwb25pb24tZ3JvdXAtYWN0aW9uID4gYnV0dG9uJyApXHJcblx0XHRcdFx0LmNsaWNrKCk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0JGdyb3VwX3dyYXAuV1BPbmlvbkNsb25lcigge1xyXG5cdFx0XHRhZGRfYnRuOiAkYWRkLFxyXG5cdFx0XHRsaW1pdDogcGFyc2VJbnQoICRsaW1pdCApLFxyXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcclxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWdyb3VwLWFjdGlvbiA+IGJ1dHRvbicsXHJcblx0XHRcdHRlbXBsYXRlOiB0aGlzLm9wdGlvbiggJ2dyb3VwX3RlbXBsYXRlJyApLFxyXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcclxuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zbGlkZVVwKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZSgpO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCkgPT4ge1xyXG5cdFx0XHRcdGxldCAkZGF0YSA9ICRncm91cF93cmFwLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwOmxhc3QtY2hpbGQnICk7XHJcblx0XHRcdFx0JGRhdGEuaGlkZSgpO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlX2dyb3Vwc190aXRsZSgpO1xyXG5cdFx0XHRcdHRoaXMuYmluZF9ldmVudHNfZm9yX3RpdGxlKCk7XHJcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZ3JvdXBfd3JhcCwgJ2FjY29yZGlvbicgKTtcclxuXHRcdFx0XHQvL3RoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRkYXRhICk7XHJcblx0XHRcdFx0JGRhdGEuZmluZCggJy53cG9uaW9uLWdyb3VwLXJlbW92ZScgKS50aXBweSgge1xyXG5cdFx0XHRcdFx0YXBwZW5kVG86ICgpID0+IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICRkYXRhICkucmVsb2FkKCk7XHJcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XHJcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZGF0YS5maW5kKCAnLndwb25pb24tZWxlbWVudC13cF9lZGl0b3InICksICdyZWxvYWRfd3BfZWRpdG9yJyApO1xyXG5cdFx0XHRcdCRkYXRhLnNsaWRlRG93bigpO1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzb3J0YWJsZToge1xyXG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxyXG5cdFx0XHRcdGhhbmRsZTogJy53cG9uaW9uLWFjY29yZGlvbi10aXRsZScsXHJcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWFjY29yZGlvbi1wbGFjZWhvbGRlcicsXHJcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcblx0XHRcdFx0XHR1aS5pdGVtLmNzcyggJ2JhY2tncm91bmQtY29sb3InLCAnI2VlZWUnICk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcclxuXHRcdFx0XHRcdHVpLml0ZW0ucmVtb3ZlQXR0ciggJ3N0eWxlJyApO1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkxpbWl0UmVhY2hlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYoICRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XHJcblx0XHRcdFx0XHQkYWRkLmJlZm9yZSggalF1ZXJ5KCAkZXJyb3JfbXNnICkuaGlkZSgpICk7XHJcblx0XHRcdFx0XHQkYWRkLnBhcmVudCgpLmZpbmQoICdkaXYuYWxlcnQnICkuc2xpZGVEb3duKCk7XHJcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UoICRhZGQucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQmluZHMgRHluYW1pYyBHcm91cCBUaXRsZSBFdmVudHMuXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICovXHJcblx0YmluZF9ldmVudHNfZm9yX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xyXG5cdFx0JGVsZW0gPSAoIGZhbHNlID09PSAkZWxlbSApID8gdGhpcy5lbGVtZW50LmZpbmQoICc+IC5yb3cgPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKSA6ICRlbGVtO1xyXG5cdFx0JGVsZW0uZWFjaCggKCBpLCBlICkgPT4ge1xyXG5cdFx0XHRsZXQgJGRhdGEgPSBqUXVlcnkoIGUgKTtcclxuXHJcblx0XHRcdGxldCAkbWFjaGVkID0gdGhpcy5vcHRpb24oICdtYXRjaGVkX2hlYWRpbmdfZmllbGRzJyApO1xyXG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtYWNoZWQgKSB7XHJcblx0XHRcdFx0aWYoICRtYWNoZWQuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcclxuXHRcdFx0XHRcdGxldCAkZWxlbSA9ICRkYXRhLmZpbmQoICc6aW5wdXRbZGF0YS1kZXBlbmQtaWQ9XCInICsgJG1hY2hlZFsgJGtleSBdICsgJ1wiXScgKTtcclxuXHRcdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdFx0XHQkZWxlbS5vbiggJ2NoYW5nZSwgYmx1cicsICgpID0+IHRoaXMudXBkYXRlX2dyb3Vwc190aXRsZSgpICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIEdyb3VwIFRpdGxlXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICovXHJcblx0dXBkYXRlX2dyb3Vwc190aXRsZSggJGVsZW0gPSBmYWxzZSApIHtcclxuXHRcdGxldCAkbGltaXQgPSAxO1xyXG5cdFx0JGVsZW0gICAgICA9ICggZmFsc2UgPT09ICRlbGVtICkgPyB0aGlzLmVsZW1lbnQuZmluZCggJz4gLnJvdyA+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApIDogJGVsZW07XHJcblxyXG5cdFx0JGVsZW0uZWFjaCggKCBpLCBlICkgPT4ge1xyXG5cdFx0XHRsZXQgJGRhdGEgICAgPSBqUXVlcnkoIGUgKTtcclxuXHRcdFx0bGV0ICRoZWFkaW5nID0gdGhpcy5vcHRpb24oICdoZWFkaW5nJyApO1xyXG5cdFx0XHRpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAnaGVhZGluZ19jb3VudGVyJyApICkge1xyXG5cdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCAkaGVhZGluZywgJ1tjb3VudF0nLCAkbGltaXQgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0ICRtYWNoZWQgPSB0aGlzLm9wdGlvbiggJ21hdGNoZWRfaGVhZGluZ19maWVsZHMnICk7XHJcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1hY2hlZCApIHtcclxuXHRcdFx0XHRpZiggJG1hY2hlZC5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xyXG5cdFx0XHRcdFx0bGV0ICRlbGVtID0gJGRhdGEuZmluZCggJzppbnB1dFtkYXRhLWRlcGVuZC1pZD1cIicgKyAkbWFjaGVkWyAka2V5IF0gKyAnXCJdJyApO1xyXG5cdFx0XHRcdFx0aWYoICRlbGVtLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCAkaGVhZGluZywgJG1hY2hlZFsgJGtleSBdLCAkZWxlbS52YWwoKSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoICRoZWFkaW5nID09PSAnJyApIHtcclxuXHRcdFx0XHQkaGVhZGluZyA9IHdpbmRvdy53cG9uaW9uLl8ucmVwbGFjZSggdGhpcy5vcHRpb24oICdkZWZhdWx0X2hlYWRpbmcnICksICdbY291bnRdJywgJGxpbWl0ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRkYXRhLmZpbmQoICc+IC53cG9uaW9uLWFjY29yZGlvbi10aXRsZSBzcGFuLmhlYWRpbmcnICkuaHRtbCggJGhlYWRpbmcgKTtcclxuXHRcdFx0JGxpbWl0Kys7XHJcblx0XHR9ICk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBKYXZhc2NyaXB0IEVycm9yIFBsYWNlbWVudC5cclxuXHQgKiBAcGFyYW0gZXJyXHJcblx0ICovXHJcblx0anNfZXJyb3IoIGVyciApIHtcclxuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XHJcblx0XHQvKiBpZiggJGVsZW0gKSB7IC8vZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApOyB9ICovXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dyb3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2hlYWRpbmcnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbi8qZ2xvYmFsIHN3YWw6dHJ1ZSovXHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJF90aGlzICAgICAgPSB0aGlzLFxyXG5cdFx0XHQkZWxlbSAgICAgICA9ICRfdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkYXJncyAgICAgICA9ICRfdGhpcy5vcHRpb25zKCksXHJcblx0XHRcdCRpbnB1dCAgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWlucHV0JyApLFxyXG5cdFx0XHQkcmVtb3ZlX2J0biA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItcmVtb3ZlXScgKSxcclxuXHRcdFx0JGFkZF9idG4gICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLWFkZF0nICksXHJcblx0XHRcdCRwcmV2aWV3ICAgID0gJGVsZW0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XHJcblxyXG5cdFx0bGV0ICR3b3JrID0ge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogU3RvcmVzIFBPUFVQIEluZm9ybWF0aW9uLlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0ZWxlbXM6IG51bGwsXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBTdG9yZXMgUE9QVVAgSW5mb3JtYXRpb24uXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRwb3B1cDogbnVsbCxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cclxuXHRcdFx0ICovXHJcblx0XHRcdGVsbTogbnVsbCxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIENyZWF0ZXMgQSBOZXcgSW5zdGFuY2UgZm9yIFRvb2xUaXAuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpbml0X3Rvb2x0aXA6ICgpID0+IHtcclxuXHRcdFx0XHRpZiggJGFyZ3MucG9wdXBfdG9vbHRpcCAhPT0gJ2ZhbHNlJyApIHtcclxuXHRcdFx0XHRcdGxldCAkdHAgICAgICA9ICggdHlwZW9mICRhcmdzLnBvcHVwX3Rvb2x0aXAgPT09ICdvYmplY3QnICkgPyAkYXJncy5wb3B1cF90b29sdGlwIDoge307XHJcblx0XHRcdFx0XHQkdHAuYXBwZW5kVG8gPSAkd29yay5lbG1bIDAgXTtcclxuXHRcdFx0XHRcdCR0cCAgICAgICAgICA9ICR3cG9uaW9uLmpzX2Z1bmMoICR0cCApO1xyXG5cdFx0XHRcdFx0aWYoICR3b3JrLmVsZW1zLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHRcdCR3b3JrLmVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCAkZXAgPSB3aW5kb3cud3Bvbmlvbi5fLmNsb25lRGVlcCggJHRwICk7XHJcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkudGlwcHkoICRlcCApO1xyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogSW5pdHMgRm9yIGVhY2ggYW5kIGV2ZXJ5IFBPUFVQLlxyXG5cdFx0XHQgKiBAcGFyYW0gJGVsbVxyXG5cdFx0XHQgKiBAcGFyYW0gJGluc3RhbmNlXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpbml0OiBmdW5jdGlvbiggJGVsbSwgJGluc3RhbmNlICkge1xyXG5cdFx0XHRcdCR3b3JrLmVsbSAgID0gJGVsbTtcclxuXHRcdFx0XHQkd29yay5wb3B1cCA9ICRpbnN0YW5jZTtcclxuXHRcdFx0XHQkd29yay5lbGVtcyA9ICR3b3JrLmVsbS5maW5kKCAnc3Bhbi53cG9uaW9uLWljb24tcHJldmlldycgKTtcclxuXHRcdFx0XHRsZXQgJGhlaWdodCA9ICR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnICk7XHJcblx0XHRcdFx0JHdvcmsuZWxtLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLmNzcyggJ2hlaWdodCcsICRoZWlnaHQgKTtcclxuXHRcdFx0XHQkd29yay5zZWxlY3QoKTtcclxuXHRcdFx0XHQkd29yay5pbnB1dCgpO1xyXG5cdFx0XHRcdCR3b3JrLmVsZW1zLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxldCAkaWNvbiA9IGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICk7XHJcblx0XHRcdFx0XHQkaW5wdXQudmFsKCAkaWNvbiApLnRyaWdnZXIoICdjaGFuZ2UnICk7XHJcblx0XHRcdFx0XHRzd2FsLmNsb3NlTW9kYWwoKTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0JHdvcmsuaW5pdF90b29sdGlwKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBXb3JrcyB3aXRoIFBPUFVQIElucHV0IFNlYXJjaC5cclxuXHRcdFx0ICovXHJcblx0XHRcdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBpbnB1dFt0eXBlPXRleHRdJyApLm9uKCAna2V5dXAnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XHJcblx0XHRcdFx0XHQkd29yay5lbGVtcy5lYWNoKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICkuc2VhcmNoKCBuZXcgUmVnRXhwKCAkdmFsLCAnaScgKSApIDwgMCApIHtcclxuXHRcdFx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogSGFuZGxlcyBTZWxlY3Rib3ggaW4gcG9wdXAuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRzZWxlY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIHNlbGVjdCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c3dhbC5lbmFibGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xyXG5cdFx0XHRcdFx0JHdwb25pb24uYWpheCggJ2ljb25fcGlja2VyJywge1xyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdCd3cG9uaW9uLWljb24tbGliJzogJHZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHQoICRyZXMgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYoICRyZXMuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnI3N3YWwyLWNvbnRlbnQgLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICR3b3JrLmVsbSwgJHdvcmsucG9wdXAgKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkd29yay5lbG0gKS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXHJcblx0XHRcdFx0XHRcdCgpID0+ICR3b3JrLnBvcHVwLmRpc2FibGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKCAkaW5wdXQudmFsKCkgPT09ICcnICkge1xyXG5cdFx0XHQkcmVtb3ZlX2J0bi5oaWRlKCk7XHJcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhhbmRsZXMgQmx1ciBFdmVuIC8gY2hhbmdlIGV2ZW4gaW4gaW5wdXRmaWVsZC5cclxuXHRcdCAqL1xyXG5cdFx0JGlucHV0Lm9uKCAna2V5dXAgYmx1ciBjaGFuZ2Uga2V5cHJlc3MnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0ICR2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcclxuXHJcblx0XHRcdGlmKCAkdmFsICE9PSAnJyApIHtcclxuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnPGkgY2xhc3M9XCInICsgJHZhbCArICdcIj48L2k+JyApLnNob3coKTtcclxuXHRcdFx0XHQkcmVtb3ZlX2J0bi5zaG93KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHByZXZpZXcuaGlkZSgpO1xyXG5cdFx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlcyBBZGQgQnV0dG9uIENsaWNrIEV2ZW50LlxyXG5cdFx0ICovXHJcblx0XHQkYWRkX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCAkcG9wdXAgPSBzd2FsKCB7XHJcblx0XHRcdFx0dGl0bGU6ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1maWVsZC10aXRsZSBoNCcgKS5odG1sKCksXHJcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcclxuXHRcdFx0XHRhbGxvd091dHNpZGVDbGljazogZmFsc2UsXHJcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuXHRcdFx0XHR3aWR0aDogJzcwMHB4JyxcclxuXHRcdFx0XHRjdXN0b21DbGFzczogJ3dwb25pb24taWNvbi1waWNrZXItbW9kZWwnLFxyXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCAkZWxlbSApID0+IHtcclxuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0JF90aGlzLmFqYXgoICdpY29uX3BpY2tlcicsIHtcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRvblN1Y2Nlc3M6ICggJHJlcyApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHBvcHVwX2VsZW0gPSBqUXVlcnkoICRlbGVtICk7XHJcblx0XHRcdFx0XHRcdFx0XHQkcG9wdXBfZWxlbS5maW5kKCAnI3N3YWwyLWNvbnRlbnQnICkuaHRtbCggJHJlcy5kYXRhICkuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XHJcblx0XHRcdFx0XHRcdFx0XHQkd29yay5pbml0KCAkcG9wdXBfZWxlbSwgJHBvcHVwICk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG9uRXJyb3I6ICgpID0+ICRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcclxuXHRcdFx0XHRcdFx0b25BbHdheXM6ICgpID0+ICRwb3B1cC5kaXNhYmxlTG9hZGluZygpLFxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlcyBSZW1vdmUgQnV0dG9uIEV2ZW50LlxyXG5cdFx0ICovXHJcblx0XHQkcmVtb3ZlX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XHJcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcclxuXHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpY29uX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBGaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJHRoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbWcnICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKVsgMCBdLmNvbXBsZXRlICkge1xyXG5cdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tY2hlY2tib3gtcmFkaW8tdG9vbHRpcCcgKSApIHtcclxuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCAnd3Bvbmlvbi1maWVsZC10b29sdGlwJyApO1xyXG5cdFx0XHRcdFx0JHRoaXMuaW5pdF9maWVsZCggalF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCksICd0b29sdGlwJyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5vbiggJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyggJ3dwb25pb24tY2hlY2tib3gtcmFkaW8tdG9vbHRpcCcgKSApIHtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoICd3cG9uaW9uLWZpZWxkLXRvb2x0aXAnICk7XHJcblx0XHRcdFx0XHRcdCR0aGlzLmluaXRfZmllbGQoIGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLCAndG9vbHRpcCcgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2Vfc2VsZWN0JywgKCAkZWxlbSApID0+IG5ldyBGaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSW5pdHMgRmllbGQuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdGxldCAkdGhpcyAgICAgICAgPSB0aGlzLFxyXG5cdFx0XHQkZWxlbSAgICAgICAgPSAkdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkaW5wdXQgICAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXHJcblx0XHRcdCRwcmV2aWV3X2FkZCA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXctYWRkJyApLFxyXG5cdFx0XHQkcHJldmlldyAgICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3JyApO1xyXG5cclxuXHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlID0gbnVsbDtcclxuXHRcdCRpbnB1dC5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xyXG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcclxuXHRcdFx0XHQkcHJldmlld19hZGQuc2hvdygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5oaWRlKCk7XHJcblx0XHRcdFx0JHByZXZpZXcuc2hvdygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbWFnZV91cGxvYWRfdXBkYXRlZCcsICRpbnB1dCwgJHByZXZpZXcsICRwcmV2aWV3X2FkZCApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdCRwcmV2aWV3X2FkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkdGhpcy5tZWRpYV9pbnN0YW5jZSApIHtcclxuXHRcdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IHdwLm1lZGlhKCB7XHJcblx0XHRcdFx0bGlicmFyeTogeyB0eXBlOiAnaW1hZ2UnIH0sXHJcblx0XHRcdFx0dGl0bGU6ICR0aGlzLm9wdGlvbiggJ2ZyYW1lX3RpdGxlJywgJ1NlbGVjdCBJbWFnZScgKSxcclxuXHRcdFx0fSApO1xyXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gJHRoaXMubWVkaWFfaW5zdGFuY2Uuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKS5hdHRyaWJ1dGVzO1xyXG5cdFx0XHRcdGxldCB0aHVtYm5haWwgID0gKCB0eXBlb2YgYXR0YWNobWVudC5zaXplcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwudXJsIDogYXR0YWNobWVudC51cmw7XHJcblx0XHRcdFx0JHByZXZpZXcuZmluZCggJ2ltZycgKS5hdHRyKCAnc3JjJywgdGh1bWJuYWlsICkuYXR0ciggJ2RhdGEtZnVsbHNpemUnLCBhdHRhY2htZW50LnVybCApO1xyXG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuaWQgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHQkcHJldmlldy5maW5kKCAnLndwb25pb24taW1hZ2UtcmVtb3ZlJyApLm9uKCAnY2xpY2snLCAoKSA9PiAkaW5wdXQudmFsKCAnJyApLnRyaWdnZXIoICdjaGFuZ2UnICkgKTtcclxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2VfdXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSW5pdHMgRmllbGQuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0bGV0ICRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnaW5wdXRtYXNrJyApO1xyXG5cdFx0XHRpZiggJHNldHRpbmdzICkge1xyXG5cdFx0XHRcdCRzZXR0aW5ncyA9IHRoaXMuaGFuZGxlX2FyZ3MoICRzZXR0aW5ncywgJ0lucHV0TWFzaycgKTtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5wdXRtYXNrKCAkc2V0dGluZ3MgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbnB1dG1hc2snLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnamFtYm9fY29udGVudCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXHJcblx0XHRcdCRlbGVtICAgICAgPSAkdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkdGhpc19lbGVtID0gJGVsZW0uZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgPiAud3Bvbmlvbi10YWItd3JhcCAnICk7XHJcblxyXG5cdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaSBhJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRsZXQgJF90aGlzID0galF1ZXJ5KCB0aGlzICk7XHJcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tdGFiLWN1cnJlbnQnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xyXG5cdFx0XHQkX3RoaXMucGFyZW50KCkuYWRkQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xyXG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkuaGlkZSgpO1xyXG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLXRhYi1jdXJyZW50JyApO1xyXG5cdFx0XHRsZXQgJHRhYiA9ICRfdGhpcy5hdHRyKCAnZGF0YS10YWItbmFtZScgKTtcclxuXHRcdFx0JGVsZW0uZmluZCggJ2RpdiN3cG9uaW9uLXRhYi0nICsgJHRhYiApLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKS5zaG93KCk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aWYoICR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCcgKS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpLmN1cnJlbnQgYScgKS50cmlnZ2VyKCAnY2xpY2snICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpOmZpcnN0LWNoaWxkIGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdqcXVlcnlfdGFiJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmdsb2JhbF92YWxpZGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiB0aGlzLmVsZW1lbnQuZmluZCggJz4gLnJvdyA+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtYWN0aW9uLWNvbnRhaW5lciAgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLWFkZF0nICksXG5cdFx0XHRzb3J0YWJsZToge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyxcblx0XHRcdFx0aGFuZGxlOiAnLnNvcnRhYmxlLWhhbmRsZXInLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tYWNjb3JkaW9uLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0bGltaXQ6ICggLTEgPT09IHRoaXMub3B0aW9uKCAnbGltaXQnICkgKSA/IG51bGwgOiB0aGlzLm9wdGlvbiggJ2xpbWl0JyApLFxuXHRcdFx0Y2xvbmVfZWxlbTogJz4gLnJvdyA+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtZmllbGQnLFxuXHRcdFx0cmVtb3ZlX2J0bjogJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkID4gYnV0dG9uW2RhdGEtd3Bvbmlvbi1rZXl2YWx1ZS1yZW1vdmVdJyxcblx0XHRcdHRlbXBsYXRlOiB0aGlzLm9wdGlvbiggJ2h0bWxfdGVtcGxhdGUnICksXG5cdFx0XHR0ZW1wbGF0ZUFmdGVyUmVuZGVyOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2tleV92YWx1ZV91cGRhdGVkJywgJGVsZW0gKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdHRoaXMuanNfdmFsaWRhdGVfZWxlbSggdGhpcy5vcHRpb24oICdqc192YWxpZGF0ZScsIGZhbHNlICksICRlbGVtLmZpbmQoICc+IGRpdjpsYXN0LWNoaWxkJyApICk7XG5cdFx0XHR9LFxuXHRcdFx0b25SZW1vdmU6ICggJGVsZW0gKSA9PiB7XG5cdFx0XHRcdCRlbGVtLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6ICgpID0+IHtcblx0XHRcdFx0aWYoIHRoaXMuZWxlbWVudC5maW5kKCAnZGl2LmFsZXJ0JyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWtleXZhbHVlX3dyYXAnICkuYWZ0ZXIoIGpRdWVyeSggdGhpcy5vcHRpb24oICdlcnJvcl9tc2cnICkgKS5oaWRlKCkgKTtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5zbGlkZURvd24oKTtcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UoIHRoaXMuZWxlbWVudC5maW5kKCAnZGl2LmFsZXJ0LCBkaXYubm90aWNlJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBKYXZhc2NyaXB0IEVycm9yIFBsYWNlbWVudC5cblx0ICogQHBhcmFtIGVyclxuXHQgKi9cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oIGVyci5lbGVtZW50LnBhcmVudCgpLnBhcmVudCgpICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBKYXZhc2NyaXB0IFZhbGlkYXRpb24gSW5wdXRzXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICovXG5cdGpzX3ZhbGlkYXRlX2VsZW0oICRhcmdzLCAkZWxlbSApIHtcblx0XHRpZiggdHJ1ZSAhPT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMCApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy5rZXkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0aWYoIHRydWUgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLnZhbHVlICkgKSB7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24ta2V5dmFsdWUtZmllbGQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICc+IGRpdicgKS5lcSggMSApLmZpbmQoICc6aW5wdXQnICkucnVsZXMoICdhZGQnLCAkYXJncy52YWx1ZSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJncy5rZXkgKSAmJiB0cnVlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJzppbnB1dCcgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucnVsZXMoICdhZGQnLCAkYXJncyApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2tleXZhbHVlX3BhaXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ25vdGljZScsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5pbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80UUFZUlhocFpnQUFTVWtxQUFnQUFBQUFBQUFBQUFBQUFQL3NBQkZFZFdOcmVRQUJBQVFBQUFBOEFBRC80UU50YUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THdBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpNdFl6QXhNU0EyTmk0eE5EVTJOakVzSURJd01USXZNREl2TURZdE1UUTZOVFk2TWpjZ0lDQWdJQ0FnSUNJK0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0UxTlBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZiVzB2SWlCNGJXeHVjenB6ZEZKbFpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMM05VZVhCbEwxSmxjMjkxY21ObFVtVm1JeUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiWEJOVFRwUGNtbG5hVzVoYkVSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9UQkdORVZEUWpnNFJEQXhSVEF4TVRoQk1rUkRORVUyTnpoRlFrRXpSRGdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UlVVNU4wRTNPRUUxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSVVU1TjBFM09EazFPVU5GTVRGRk5UZzFSVVZCTUVVNU4wSTJRa1pCTXpJaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5DQlhhVzVrYjNkeklqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZORE0yTURVMlF6SkdRa1ZFUlRBeE1UazFOVVZDUlRBelJVRTRRalJFTlVJaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9FVkdORVZEUWpnNFJEQXhSVEF4TVRoQk1rUkRORVUyTnpoRlFrRXpSRGdpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo3LzdnQU9RV1J2WW1VQVpNQUFBQUFCLzlzQWhBQUdCQVFFQlFRR0JRVUdDUVlGQmdrTENBWUdDQXNNQ2dvTENnb01FQXdNREF3TURCQU1EZzhRRHc0TUV4TVVGQk1USEJzYkd4d2ZIeDhmSHg4Zkh4OGZBUWNIQncwTURSZ1FFQmdhRlJFVkdoOGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeC8vd0FBUkNBRVRBUk1EQVJFQUFoRUJBeEVCLzhRQWlRQUJBQU1BQXdFQkFBQUFBQUFBQUFBQUFBUUZCZ0VEQndJSUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVBQUJBd01EQVFNR0J3OENBd2tBQUFBQkFBSURFUVFGSVJJR01VRVRCMUZoY1lFaU1wR2hzY0ZDZ2hUaFVtSnlrcUt5d2lNemM3TjBGVFlrTjlIVEYrSkRVNU9qVkRWVkZoRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFQL2FBQXdEQVFBQ0VRTVJBRDhBL1ZLQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lPdWVlS0NNeVN1REdEcVNnNkk4dmpYbWpaMi9XcTM1UUVIZXk0dDVQY2xZLzhBRmNEOGlEc1FFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUZOeWVYYmJSUi9mdUovSkgzVUdiM0lPZHlEc2p2TG1QOTNLOXZtRGlFRWxtY3liQlFUa2p6aHArTWhCSVp5YTliUU9aRy95bWhCK0lvSk1mS1cvOTViK3RyditJUVNZK1NZOTN2QjdQT1JVZkVTZ2t4NWpHU2U3Y05INDFXL3BVUVMyUFk5b2V4d2MwOUhBMUJRY29DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSU0zeXFiOXZCRjk2MHUvS05QMVVGYmlvRzNOL0RDOGJtT1B0RHlnQ3BRYVNUajJNZVBaWVl6NVd1UHoxUVJaT0xRRWZzNW5BK2NBb0l6K0wzWTl5Wmg5TlI4eUNNN2oyVkIwakR2T0hOK2NoQkdreG1Tak5IVzhucWFUOGlEb2ZITkdhUFk1cDhoQkNENDNJTmR4MWptNHhwSjk5em5OOUhUNWtGbWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3gvSjU5K1VMZi9DWTF2NjM2eURuaTdDL0poM1pHMXhQckZQblFhOUFRRUJBUVFNNCtPUEdUdWMwRWx1MEVqdE9pREVia0c3eE1aanh0dXc5ZGdQNVd2em9KYUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDREFacWZ2TXJjdUhUZVFQcTZmTWd1T0d4a3Z1SmV3QU5yNjZvTk9nSUNBZzRjNXJXbHppR3RIVW5RSUtYbGs3UmpHdEJyM2p4UWp0QUNESHNKYzROSFVtZzlhRDBwalF4aldqbzBBRDFJT1VCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFmTWtzY2JkejNCbzhwUVJKTXhaczBhUzgvZ2pUNDZJSVV1Ym5kcEcwTTg1MUtDVmk3bVdXT2FTWjFRMDE5QXBxZ3dFMHBkSzkzM3ppZmhLRFk4TllSaTN1UDA1U1I2Z0FnblpQTjJPUForMWR2bFB1eE4xZDYvSWdxTVR5dDg5OFlyc05aRkthUkVhYlQ1Q2ZPZzA2Q3B5ZkpNZlpBc0R1K243STJkQWZPVUdTeUdjeUYrNHRrZVd4RTZSTjBiMTdmS2d0T1V2N3V3eHNIMGhIVnpmUTFvQ0NvdzdUSmxiUnRLL3RXRWp6QndKUWVqSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lLck90ZHRoZDlFRWcrazBRVkNBZ3RHa1E0QzZsSm9USEpyNTZFQkI1L3ZRYXArVHVNWnhpeUZ2UmswKy8yNkRRYmllMzBvTXZKUEpJOHZrY1h2Y2F1YzRra24wbEI4NzBGbk55WExTMnJiWXpFTUFvNXcwYzcwdTZvS3plZzc3RUdTOWdqR3U2Um9wNjBGMXphVWYzU0pqZWpJUlVlUWx6dm1RUitJc01tYmlOS2hqWHVQNUpIem9OK2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnaTVTTHZMTi9sYjdROVNEUFVRS0lKbWZjSU9LdkZhRjdZd1BTNTRKK0pCZ0E0a2dlVkJydVRXRjdMamNZeTNnZEl5R0wyeTNXaExXOW5xUVpaOXZkTTkrRjdmUzBoQjFGeEhYUkJ4dlFONkM0NG13UzU2MkRoVnJkenZXR0VqNDBIeHllY3Z6bDFVMTJ1MmoxQUlMWGdVZTY3dXB2dkkydEgxai9BTmxCdFVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQndCQkI2SFFvTXZQSDNjcjR6OUZ4RmZRZytXaXBIblFPZHk5emliVzMrK2VQekcvZFFZVVNFRUVkUWFoQmNRY3h6c05CMzRlQUtBUGEwajRnRUU5dmlCa0RwTGJRT2IyZ0J3K1Z4UWRnNWhocE5MakV4MVB2T0FZZmxhZzVia09DejZ5Mmpvbkh5YndQelhJRGNQdys3Sk1HUTdqOEY3ZzM5T2lDejQ5Z01mWlg3cmkzdm1YWHNGckd0TFNRVDFPaEtERFgwNWx2WjVDYWw3M0d2clFiVHcraEF4MXpQMnlTN1BVeG9QNjZEVklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0NpekVPeTYzMDBrRmZYMm9JMXRIdnVJMkR0Y0VGWDRpM0IrMDJsdjJOWTZUOG8wL1ZRWStxQlZBcWdWUUtvRlVISWU0ZEhFZXRCeHVRZW04S2hFZkg0SERySzU3eitWdC9WUVhxQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Fncjh6RnV0MnlBYXNkcWZNZnVvSzdHN2Z0c2U0MDErT2lEbmt2RlA3ek5IT3k0N21XTm15aGJ1YVJVbnlqeW9NemNlSCthai9kUGltSG1kdC9TUVFMamlQSVlQZXRIUC9oa1AvUnFnZ1Q0ekoyNHJQYXl4RHl2WTV2eWhCR0pJT3FEamNnYmtEY2dia0hzT0RnN2pEMmNWS0ZzTEtqemtWUHhsQk5RRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVIVmN4Q1cza1o1UjkxQm1qVUduYUVIWXk0dUdlNUk1dm9KQ0R0WmtyMW5TUW4wNi9LZzc0OHpkQSswMFArTDVFRmhiWFZ6TVJ2Z0xHbjZSUDNFSFpQWjJsd0tUd3NsSDRiUTc1VUZmTnhUajAxZDFsR0NlMXRXL0lRZ3I1dkQ3QXZKTFROR2V3TmNDQjhJS0NCTDRhUkVreFg3bWpzRG82L0dIQkJEYjRiNUVYREE2NWlNRlJ2Y04yN2IyMGJUNTBIb0RHaHJRMGRHaWc5U0RsQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUZGZTJNNHVuN0dGelhtclNCcHJxZzVodzl5L1Y1RVk4L1ZCTml3MXUzMzNGNStBSUprY0VNWDd0Z2I2QWcrMEJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJCRnltUmh4dU91Yitkcm5RMnNicFpHc0FMaTFncWFBa0N2clFRT0w4c3hQSkxPUzV4NWUzdVg3SllaZzFzalNSVUVocGNLTzdEVkJieVBESTNQUFJvTGpUekNxQ3A0dnlqSDhreDhsOVl4eXh3eHltQnpadzFydHpXdGRVYlhQRktQSGFndUVCQVFSc2xmdzQvSFhOL01IT2h0WW56U05ZQVhGckdseDJna0N1bmxRWWovclp4WC8ydDkvNWNQL05RU0xIeGk0aGN6Q0tUN1RhQTBBa25qYnQxL2h1a0krQkJ0bzVJNVkyeVJ1RDQzZ09ZOXBCYTVwRlFRUjFCUWZTQWdJQ0FnSUtiam5Lc2ZuL3RuMk9PYVA3RkwzTXZmQnJhdTExYnRjL1RUdFFYS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdwZWJmNGptUDZTWDlBb1BKZU52eUhGTFhEOHFoM1RZdkk5NUJrb2gyYlpuc0g1ckE1dm5CSGFnOXJOekJkWTAzTnU4U3dUUWw4VWpkUTVybTFCQ0RFZUNmK0szWDlkSi9KaVFUTTM0bTJkcGtuNHZFV0UrYXY0aVJMSGIxMmdnMGNBV3RrY1MzdG8yaURuQmVKZG5lNUptS3lsaFBoc2pLYVJSWEZkcmllamR6bXh1QlBaVnZtUWJOQlQ4eC94UE0vMFUvOHNvS3J3cC93WEgvalQvejNvSlBpSmFZeWZpT1JmZk1ZZTVoYysya2RUYzJiNkcwOWhMcUR6b0tYaUdjdWNSNFd4NVNlRTNIMlFTZDFFNTJ3dWo3NHRhTjFIVUFycG9nTjhWSjdrUU94ZUJ1Y2pHV1JtOGxoTGl5R1NSb2NZOXdqY0hGdGFFbmFndk9VYzN4bkhoREZPeDl4a0xnQXcyTUh0UElKcFUrUVYwSGw3RUZIRDRxVFc4clA3OXgrOHhOcklRMXR5OFBlMnZuRG80ajhGVUYveXZsUndlRWp6RnZhaklXcjNzRHl5WFlCSElQWmtCMnZEaFdnOWFDN3Q1NHJpM2l1SVhib3BtTmtqY08xcmhVSDRDZ284WHl3NUhsR1J3dHZhVnQ4YTBkOWZkNW9aRFFiQkh0OHU3NlhZZzQ0ankzL0FQUmYzRC9TZlpmc00zY2Z2TzgzOWZhOTFsT2lDdnp2aVJhMldTa3hlS3NKOHprWWFpYUszQjJ0SXBVYm10a0pJN2FOMDZJT2NGNGoyMTdrbzhYbGNmUGhzak5wREZjQTdYazlBSE9iR1FUMlZhZ3NUeXN4OHlIRzU3WHV4TEIzOXJkOTVYdktEVnV6YUtlNjc2UjZJUHJtWEtvdU5Zais0UGgrMHZkSTJLS0RmM2U0dXFUN1cxL1JyU2VpQ3p4dVFodjhaYlpDUDJZcm1Ga3dxZmREMmgxQ2ZNZ3F1SWNxZHlPQzd1bVduMmUwZ25NTnZLWGw1bERkUzdic1p0MEk3VDhTQy9RRUJBUUVCQVFFQkFRRUZMemIvRWN4L1NTL29GQlI4RHhkbmxmREt6eDk0emZiM0RiaHJ4MmovVVNFT0huYWRRZ3F1RjVTOHdOL2U4THk3Nm1OcjM0eVkrNjVwQmR0RmV4dzlwdm5xRUR3cG5rdCtBWmVlTFNTS2U0ZXcvaE50b3lFRS93Y3NiYUxpNzd4clFibTZuZjMwbjBpR2FOYlh5RHI2MEh6NHkyZHU3amtGOFFHM2R0Y01FRW8wY0E4SGMwSHIyQStwQnRzZE5KTmo3V2FRMWtraGplOCtkelFTZ3IrWS80bm1mNktmK1dVSG5YQ2VGWi9KOGJ0YjIwNVBkNDYza01nWlp4Q1RZemJJNXBwdG1qR3BGZmRRWHJQQ2lXNmxZYzd5Qzh5c01iZzVrTGk1bzByVUV2Zk4xODFFRnZ6MjF0N1hnR1J0cmVNUlFRd01aRkcwVURXdGUwQUJCMmVHOXZGQndyR0NOdE44YnBIbnRMbnZjU1NndzB0MXlwL2lWbWJyQ1dFR1F2YllDSnJia2dDS0tqV2dzckpEcWFmSDUwRnBrN2p4Y3lXUHVMQzY0L1l1dDdsam81QUhzcUE0ZFJXNU9vNmp6b0x2alhHOGpKd0U0RE9SOTFPNWtzSWFYTmVXdExpNk03bUZ3OWtrVTlDQ3Y0VHljMlBCNzRYK2wxeDR5UVN4bnFkdGU2YitWN0E5Q0NiNFdZdVMyNDRjamM2M21YbGRkVFBQVXRKSVo4T3J2V2dwL0RLWjhOaHlpYVA5NUhjU1BaNld0ZVFnbytCWFhpQmI0cVdmQVltMXZJTG1aenBydWR6ZTljOFVCRHF6eG1nN05PMUJPNUxZZUt2SWJhQ0c4d2xyQzYybEUwRThFc2JaV3VBcG81MXcvUS9NRUY5NGh3M05wYjRiazRaUzd4RThadTJ0N1lwYUNSdW40V25yUWNjbWdoNUx5N0hZWnAzMlZ0WlRYazVwVnBNN2U3aXJYeWFFZWxCUjR2a3MxajRXWDlvOHVHUnM1Wk1ZeGxmYURwWGFVUDRMWE9wK0tnOUE0bGhoaHVPMk9Qb0JMRkdEUFR0bGY3VC93QTRvTGRBUUVCQVFFQkFRRUJBUVZITDRKcCtMNVdHQ04wczBscksyT0pnTG5PY1dtZ0RScVNnZytHOXBkMm5DOGRiM2NNbHZjTTc3ZkRLMHNlMnM4aEZXdUFJcURWQkQ4U2VKU1pyR052ckZwR1h4LzdTM0xQZWUwR3BZS2ExN1crZjBvSTNoSmk3MjA0dmQyMlJ0SmJaOGwzSWU1bmpkRzV6SFF4TnJ0Y0FhR2hDQ3FzYlBtWEJMdTZ0N0RIUHplQ25lWklXUkVtVnBOQjBhSHVCcFFPOWtnOWZLZ1h0aHpIbmQ1YVJaSEhPd3VCdDVPOWxqbEo3MTVGV25Sd1k0dXBVRDJRQld1dWlEMDVqR3NhR05GR3RBRFFPZ0FRVmZLNFpwK01aYUdHTjBzMGxwTTJPTmdMbk9jWXlBR2dha2xCVytHbG5kMmZEYkczdTRKTGU0WVp0OE1yWE1lS3pQSXExd0IxQlFhZEJRYyt0cm02NGhrN2UyaWZQUEpHME1pamFYdmNkN1RvMXRTVUgxd2EydUxiaVdNZ3VZbnd6eHcwa2lrYVdQYWR4MExUUWhCbmVVY2Q1SGplVGpsWEdvaGN5eXNFZC9aSHE4QUFhQ29xSEJvNmFnaXVxQ1BkY3I4UXMzYnV4Mk40N1BpcHBoc2t2cDNQWUdOT2hjeHoyUmJUNktueWFvTnhnY2RjWTdFMjFuYzNVbDdjUk4vYlhVem5QYzk3aVNkWEVtZ3JRZVpCNXp6YmlXYmw1VkpiNHlHUTR6UG1CMS9MR3h6bVJ1aWY3UmU0Q2pmdjllcUQxSzNnaXQ0STRJV2hrVUxXeHh0SFFOYUtBZkFndy9oaGpMKzBibkczMXBMYnRudXk2TVRSdVlIc083VnU0Q29RVmRyWWN3NEpmM2NlTHg3c3pnTG1Udlk0WXFtUmhOQjlFUGVIVW9DZHBCcFZCS056ei9sdDVid2kwdU9OWW1KKys1bTd4OGM3NmFiUWFSUE5kYWV6VHk5aURkWmJHd1pMRjNXT20vZFhNVG9pZXBHNFVEdlNEcWd4L2hmaHN2Yk55RjltSXBJcjE1aXM0aEswdFBjMnNZWTB0QnBWcDAxN2FJS3QvRDhqSjRsU1JtQ1Qrd3Z1R1pTU1FzZDNKbVl3bmJ1cHQzZDQ4MUZlaUQwOUFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJCQXorV2l4R0Z2TWxKU2x0RTU3UWZwUDZNYjlaeEFRZVM4UWt5SEhzN2hjeGZQTHJia3JaR1hEajJPZkw3TGoyZGRqdlFTZzlwYzVyV2x6aUEwQ3BKMEFBUWRGbGYyRjlEMzFsY3hYVUlKYVpZWHRrYnVIVWJta2l1cUJlMzloWXc5OWUzTVZyQ1NHaVdaN1kyN2owRzV4QXJvZzdUSkdJKzhMZ0k2YnQ5UnRwMXJYeUlJRVhJK1BUVGkzaHlscEpPU1FJbVR4T2VTT28yaDFVRXU4amhsczU0cG5iSVh4dmJLK29HMXBhUTQxT2dvRUdieDJMd21NNFRrTFhEWGYyMnlFTnk0VDk1SEw3UmpPNGJvdzF1aUNMNFJmNFhCL0dtL1NRYW0reStKc0MwWDE3QmFGM3VpZVZrZGZSdUlRZGxuZjJON0YzMW5jUlhNSjA3eUY3WkcrVHEwa0lNSHl6L0FIUjR6L0RQNlQwRzNibThNNjhOazIvdGplQTdUYkNWaGxyNU5sZDN4SVBqUC84QXdXUi9wWnY1YmtHYThJdjhMZy9qVGZwSU5WZlpiRldHMDMxNUJhQjN1OS9JeU92bzNFZVJCMjIxM2EzVUltdFptVHd1OTJTSndlMDl1aGFTRUhhZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSVBPZkZySnh6eVl2alluWmJpOW1iTmR6UGMxaldSQjJ4cGNYYVVydWQ5VkJ6NGh5OFV5SEQvc3RoazdKMCtOMlNXVVVkeEVYRnNZMkZqUUhWUHNkQjVVR3A0VG5SbStOV2Q2NTI2Y043cTU4dmV4K3k0bjhiM3ZXZ3pmRFIvWU9hNW5qYnZadGJ2OEExMlBIWlE5V2o2cHA5VkE1bVA3OXpYQzhiYU4xcmJIN2RrQjFGQjBhZnFpbjFrRmp6VGpHU3oxL1pSejNrZHR4dUNqNzZMdkhNbGUrcC9CMlU5MENydEtsQm0rUmNkOEpZTVZjQzJ1NEliMXNiekMrRzVmTy92R2pRT1lIU0RWM1hSQmVjSXlGMWUrR3puM0x6TEpGRGN3aDd0U1dzRGcycDh6ZEVFSHc5LzJ3di94YnorV2dtZUZ3dWo0ZjB0Q3dYWmRjZlp6SlVNRWxUdDNVRGpTdlhSQlgyUEErTFdjY2svTmIrM3VzdmNTT2RMSkxkdWlacjAya3VoY1RUVTFRVldKZmdNVjRqNDZQaTE0Wk1mZXRNZDNDMXpuc0JJZFJ1NTNVQ2djTlRRb0ozaVBaWGw5ejNCV2RuTTYzbm5oMkNkbnZNYVh2M3VGTzBNcWd0Nzd3ZzRxL0Z1Z3MyU1FYelcvc3IweVBjNHZIVGUwblpUeTBhRUhSd3pPM21VNEJrNGI1eGZkNCtLNHRueU9OWE9hSWlXbHg3U0s3ZlVnK09BNVQrMWVHRTJSMmh4dGZ0RWpHbm9YQSt5RDZTZ3krQW04Tzd5RitSNWZrWkwzTVhUbk9taWMyNkRZeFU3UURFMFYwOGhvT2dRU0xQTmNZd1hMTWROeFMra2x4MTlJSU1qWVBFd1l3UGNHdGUweXRiV202bzFKMDYwS0QyTkFRRUJBUUVCQVFFQkFRRUJBUUVCQUpBRlRvQWc4cTQvaWNmempsdWF5K1RpTnhpNENJTFNQYzVnTkRSaEJZV25ScmFrZmhJTlYvMHM0SC93RFdmK3ZjZjh4Qm5lQVNPNDd6UExjVW1kU0NaeG1zYTl1MGJoU3ZhNkk2L2lvTFR4SWdmajd2RDhxaEh0NHk0YkhkVTZtM2xORDhwYjlaQjErR3NUOGxrTTF5dWNIZGtKekRhVjZpQ01qL0FJTmI5VkJWYzdsdEwzbjFsaStRWFQ3WEFOZ0VqQUNXc2RJZDN0T2QyVmNOdTdzOHlEblBNOEo4TGlibDFoRmEzbDlMRzV0c3lPVTNSRWhhUTF4TG5TTllBZFNnc2ZEb2crR2x3QWRRTHNINENVSFY0ZS83WVgvNHQ1L0xRZFhEcnE5dFBDYTd1YktvdW9tM0xvbk5GUzBnNnVING8xUVZuRU1SNGFYbUdaZTV5OWpteWtoYys3YmRYTG9YTmZ1UHV0RDJGMm5iclZCSGp5SEdianhMdzBmSDRJNGJHM2YzYnBZMjdCSklkMVhEdEk2QVZRVy9pRmxHNHJ4QXdPUWV4MGtkdkNYeXRZS3U3dmM4UElINExTU2cxV1I4UStKMm1NZmZSNUdHNU8yc1Z2RThPbGM3c2JzOTV2MWdFR2Q0SmpMdTI0RGw3MjdhV1NaSmx4Y01hUlQyTzZJRHRmdmpVK2hCODhLeHN1VDhLYnF3aC9mVGk0YkVEb0M4T3EwZXNoQkU0RmtlQ1B4TGNkbmJPd3RjdFpGMFU3cnlHRmhmUnhvUytRZThQZElKclVJTE4yWjRVL2tsamljRGdySEp6eVByUGR3UlJNWkExcmg3WWVJM2J0bzEwSTdOZFVIb0NBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0Q0dUlJcmlDU0NVRXhUTWRISUFTMGxyaFEwYzBnalR0Q0NIaGNGaWNKYUcweGx1TGUzYzh5T1lIT2ZWNUFCSmM4dWQwQTdVRTlCVjNmR01IZDVlRE1UMjI3SlcyMFEzRFh5TUkya2tWYTF3YTdyMmhCTXlHUHM4alpUV1Y1R0pyV2R1MldNa2lvNjlXa0VlcEJ4amNiWTR5eGlzYkdJUTJzSUlqakJKcFVrblZ4Sk9wN1VIUm1lUDRYTlF0aHlsb3k1WXlwWVhWRG0xNjdYdEljSytZb0lPTTRKeEhHeWQ3YVl5SnNuWStUZE00VjA5a3lsOVBVZ2w0dmpXRnhWaFBZV0Z2M05uY0Z6cG91OGtjQ1h0RFhhdmM0aXJSMklQckg4ZXcrT3hjbUxzN2Z1ckNVUEQ0ZDczVjd3VWQ3VG5GMm84NkRzeEdGeG1Jc1JZNDZIdWJWcGM0UjduUDFjYW5WNWNmalFWRng0Y2NKdUxrM0VtTGpFaE80aGo1STJWclgzR09hejRrRXVUaHZHSHZzbmpIeHh1eDcrOHN6Q1hSYkgxRHEvc3kzZHEwZTlWQkl2T1BZZTh5ZHZrN20zRWw5YU5MSUpTNTREV210UnRCRFQ3eDZoQlh4K0h2REk3MzdZekZSQ2F1NEFsNWpCODBSZDNmNXFDOW50NFo3ZVMzbGJ1aGxZWTNzMUZXdUZDTktVMFFSc1Joc2JoN0p0bGpvZTR0V3VMbXg3blAxY2FuVjVjZmpRUXN2d3ZpK1ltNy9JWStPV2MrOUswdWllNm1udE9qTEM3MW9KT0c0NWc4TEc1bU1zNDdZUG9IdmJVdmNCMERudUpjZldVRmlnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDRC8vMlE9PSc7XHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmJlZm9yZSggJzxzcGFuIGNsYXNzPVwic3Bpbm5lciB3cG9uaW9uLXNwaW5uZXJcIj48L3NwYW4+JyApO1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNob3dfcHJldmlldyggZSApICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIE9FbWJlZCBQcmV2aWV3LlxyXG5cdCAqL1xyXG5cdHNob3dfcHJldmlldygpIHtcclxuXHRcdGxldCAkdmFsdWUgPSB0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS52YWwoKTtcclxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5hZGRDbGFzcyggJ2lzLWFjdGl2ZScgKTtcclxuXHRcdCR3cG9uaW9uLmFqYXgoICdvZW1iZWQtcHJldmlldycsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR2YWx1ZTogJHZhbHVlLFxyXG5cdFx0XHR9XHJcblx0XHR9LCAoIHJlcyApID0+IHtcclxuXHRcdFx0aWYoIGZhbHNlID09PSByZXMuc3VjY2VzcyApIHtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApXHJcblx0XHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuaHRtbCggcmVzLmRhdGEgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApXHJcblx0XHRcdFx0Lmh0bWwoICc8aW1nIGNsYXNzPVwid3Bvbmlvbi1uby1wcmV2aWV3XCIgc3JjPVwiJyArIHRoaXMuaW1hZ2UgKyAnXCIvPicgKTtcclxuXHRcdH0sICgpID0+IHtcclxuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLnJlbW92ZUNsYXNzKCAnaXMtYWN0aXZlJyApO1xyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdvZW1iZWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc2VsZWN0JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSW5pdHMgRmllbGQuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3QyJywge30gKTtcclxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJnLmRyb3Bkb3duUGFyZW50ICkgKSB7XHJcblx0XHRcdCRhcmcuZHJvcGRvd25QYXJlbnQgPSB0aGlzLmdldF9maWVsZF9wYXJlbnRfYnlfaWQoIHRoaXMuZWxlbWVudCApO1xyXG5cdFx0XHRpZiggJGFyZy5kcm9wZG93blBhcmVudC5sZW5ndGggPT09IDAgKSB7XHJcblx0XHRcdFx0JGFyZy5kcm9wZG93blBhcmVudCA9IGpRdWVyeSggJ2JvZHknICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiggdGhpcy5vcHRpb24oICdhamF4JyApICkge1xyXG5cdFx0XHQkYXJnLmFqYXggPSB7XHJcblx0XHRcdFx0cHJvY2Vzc1Jlc3VsdHM6ICggZGF0YSApID0+IHtcclxuXHRcdFx0XHRcdGxldCB0ZXJtcyA9IFtdO1xyXG5cdFx0XHRcdFx0aWYoIGRhdGEgKSB7XHJcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBkYXRhLCBmdW5jdGlvbiggaWQsIHRleHQgKSB7XHJcblx0XHRcdFx0XHRcdFx0dGVybXMucHVzaCggeyBpZDogaWQsIHRleHQ6IHRleHQgfSApO1xyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHRzOiB0ZXJtc1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRhdGE6ICggcGFyYW1zICkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0cTogcGFyYW1zLnRlcm0sXHJcblx0XHRcdFx0XHRcdHF1ZXJ5X2FyZ3M6IHRoaXMub3B0aW9uKCAncXVlcnlfYXJncycgKSxcclxuXHRcdFx0XHRcdFx0cXVlcnlfb3B0aW9uczogdGhpcy5vcHRpb24oICdxdWVyeV9vcHRpb25zJyApLFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHRyYW5zcG9ydDogKCBwYXJhbXMsIHN1Y2Nlc3MsIGZhaWx1cmUgKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hamF4KCAnYWpheC13cC1xdWVyeS1kYXRhJywge1xyXG5cdFx0XHRcdFx0XHRkYXRhOiBwYXJhbXMuZGF0YSxcclxuXHRcdFx0XHRcdFx0b25TdWNjZXNzOiBzdWNjZXNzLFxyXG5cdFx0XHRcdFx0XHRvbkVycm9yOiBmYWlsdXJlLFxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHQkYXJnID0gdGhpcy5oYW5kbGVfYXJncyggJGFyZywgJ3NlbGVjdDInICk7XHJcblx0XHR0aGlzLmVsZW1lbnQuc2VsZWN0MiggJGFyZyApO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRmaWVsZF9kZWJ1ZygpIHtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc2VsZWN0MicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHR2YXIgJHRoaXMgICAgID0gdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkZW5hYmxlZCAgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZW5hYmxlZCcgKSxcclxuXHRcdFx0JGRpc2FibGVkID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWRpc2FibGVkJyApO1xyXG5cclxuXHRcdCRlbmFibGVkLnNvcnRhYmxlKCB7XHJcblx0XHRcdGNvbm5lY3RXaXRoOiAkZGlzYWJsZWQsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxyXG5cdFx0XHR1cGRhdGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcblx0XHRcdFx0bGV0ICRlbCA9IHVpLml0ZW0uZmluZCggJ2lucHV0JyApO1xyXG5cdFx0XHRcdGlmKCB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCAnd3Bvbmlvbi1lbmFibGVkJyApICkge1xyXG5cdFx0XHRcdFx0JGVsLmF0dHIoICduYW1lJywgJGVsLmF0dHIoICduYW1lJyApLnJlcGxhY2UoICdkaXNhYmxlZCcsICdlbmFibGVkJyApICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZW5hYmxlZCcsICdkaXNhYmxlZCcgKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQkdGhpcy50cmlnZ2VyKCAnd3Bvbmlvbi1zb3J0ZXItdXBkYXRlZCcgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdC8vIGF2b2lkIGNvbmZsaWN0XHJcblx0XHQkZGlzYWJsZWQuc29ydGFibGUoIHtcclxuXHRcdFx0Y29ubmVjdFdpdGg6ICRlbmFibGVkLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcclxuXHRcdH0gKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc29ydGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N1YmhlYWRpbmcnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc3dpdGNoZXInLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndGV4dCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0ZXh0YXJlYScsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcbmltcG9ydCBjc3NfdW5pdHMgZnJvbSAndnNwLWpzLWhlbHBlci9wYXJ0cy9jc3NfdW5pdHMnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5mb250X3dlaWdodF9zdHlsZSA9IGZhbHNlO1xyXG5cdFx0bGV0ICRlbCAgICAgICAgICAgICAgICA9IHRoaXMuZWxlbWVudDtcclxuXHRcdGxldCAkcHJldmlldyAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZvbnQtcHJldmlldycgKTtcclxuXHRcdGxldCAkdGhpcyAgICAgICAgICAgICAgPSB0aGlzO1xyXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0XHJcblx0XHRcdFx0JGZvbnRfZmllbGQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJyApLFxyXG5cdFx0XHRcdCRmb250ICAgICAgICAgICAgICA9ICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi1mb250LXNlbGVjdG9yJyApLnZhbCgpLFxyXG5cdFx0XHRcdCRmb250X3dlaWdodF9zdHlsZSA9ICR0aGlzLmZvbnRfc3R5bGUoICRmb250X2ZpZWxkLmZpbmQoICcud3Bvbmlvbi12YXJpYW50LXNlbGVjdG9yJyApLnZhbCgpICksXHJcblx0XHRcdFx0JHRhZyAgICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXRhZyBzZWxlY3QnICkudmFsKCksXHJcblx0XHRcdFx0JGNvbG9yICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1maWVsZC1jb2xvcl9waWNrZXIgaW5wdXQud3AtY29sb3ItcGlja2VyJyApLnZhbCgpLFxyXG5cdFx0XHRcdCRhbGlnbiAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1hbGlnbiBzZWxlY3QnICkudmFsKCksXHJcblx0XHRcdFx0JGZvbnRTaXplICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXNpemUgaW5wdXQnICkudmFsKCksXHJcblx0XHRcdFx0JGxpbmVIZWlnaHQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWxpbmUtaGVpZ2h0IGlucHV0JyApLnZhbCgpLFxyXG5cdFx0XHRcdC8vJGJhY2tVUEZvbnQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWJhY2t1cC1mb250IHNlbGVjdCcgKS52YWwoKSxcclxuXHRcdFx0XHQvLyRkaXJlY3Rpb24gICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1kaXJlY3Rpb24gc2VsZWN0JyApLnZhbCgpLFxyXG5cdFx0XHRcdCRsZXR0ZXJTcGFjaW5nICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1sZXR0ZXItc3BhY2luZyBpbnB1dCcgKS52YWwoKSxcclxuXHRcdFx0XHRocmVmICAgICAgICAgICAgICAgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PScgKyAkZm9udCArICc6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQsXHJcblx0XHRcdFx0aHRtbCAgICAgICAgICAgICAgID0gJzxsaW5rIGhyZWY9XCInICsgaHJlZiArICdcIiBjbGFzcz1cIndwc2YtZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICsgJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPic7XHJcblxyXG5cdFx0XHRpZiggalF1ZXJ5KCAnLndwb25pb24tZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHRqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5hdHRyKCAnaHJlZicsIGhyZWYgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRqUXVlcnkoICdoZWFkJyApLmFwcGVuZCggaHRtbCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGZvbnRTaXplID09PSAnJyB8fCAkZm9udFNpemUgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHQkZm9udFNpemUgPSAnMThweCc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkbGV0dGVyU3BhY2luZyA9PT0gJycgfHwgJGxldHRlclNwYWNpbmcgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyA9ICcxcHgnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGxpbmVIZWlnaHQgPT09ICcnIHx8ICRsaW5lSGVpZ2h0ID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0JGxpbmVIZWlnaHQgPSAnMjBweCc7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRsZXQgJF9hdHRycyA9ICcgZm9udC1mYW1pbHk6JyArICRmb250ICsgJzsgJyArXHJcblx0XHRcdFx0JyBmb250LXdlaWdodDonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCArICc7ICcgK1xyXG5cdFx0XHRcdCcgZm9udC1zdHlsZTonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLnN0eWxlICsgJzsgJyArXHJcblx0XHRcdFx0JyB0ZXh0LWFsaWduOicgKyAkYWxpZ24gKyAnOyAnICtcclxuXHRcdFx0XHQnIGNvbG9yOiAnICsgJGNvbG9yICsgJzsnICtcclxuXHRcdFx0XHQnIGZvbnQtc2l6ZTonICsgY3NzX3VuaXRzKCAkZm9udFNpemUgKSArICc7ICcgK1xyXG5cdFx0XHRcdCcgbGV0dGVyLXNwYWNpbmc6JyArIGNzc191bml0cyggJGxldHRlclNwYWNpbmcgKSArICc7ICcgK1xyXG5cdFx0XHRcdCcgbGluZS1oZWlnaHQ6JyArIGNzc191bml0cyggJGxpbmVIZWlnaHQgKSArICc7ICc7XHJcblxyXG5cclxuXHRcdFx0bGV0ICR0ZXh0ID0gJHByZXZpZXcudGV4dCgpO1xyXG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xyXG5cdFx0XHQkcHJldmlldy5hcHBlbmQoIGpRdWVyeSggJzwnICsgJHRhZyArICc+JyArICR0ZXh0ICsgJzwvJyArICR0YWcgKyAnID4nICkgKTtcclxuXHRcdFx0JHByZXZpZXcuZmluZCggJHRhZyApLmF0dHIoICdzdHlsZScsICRfYXR0cnMgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIFByb3BlciBWYWxpZCBGb250IFN0eWxlcy5cclxuXHQgKiBAcGFyYW0gJGluZm9cclxuXHQgKiBAcmV0dXJucyB7e3dlaWdodDogc3RyaW5nLCBzdHlsZTogc3RyaW5nfX1cclxuXHQgKi9cclxuXHRmb250X3N0eWxlKCAkaW5mbyApIHtcclxuXHRcdGxldCAkd2VpZ2h0X3ZhbCA9ICc0MDAnLFxyXG5cdFx0XHQkc3R5bGVfdmFsICA9ICdub3JtYWwnO1xyXG5cclxuXHRcdHN3aXRjaCggJGluZm8gKSB7XHJcblx0XHRcdGNhc2UgJzEwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMTAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnMTAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzMwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnMzAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzUwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnNTAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc1MDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzcwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNzAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnNzAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzkwMCc6XHJcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnOTAwaXRhbGljJzpcclxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xyXG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2l0YWxpYyc6XHJcblx0XHRcdFx0JHN0eWxlX3ZhbCA9ICdpdGFsaWMnO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHsgd2VpZ2h0OiAkd2VpZ2h0X3ZhbCwgc3R5bGU6ICRzdHlsZV92YWwgfTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndHlwb2dyYXBoeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xyXG5cdC8qKlxyXG5cdCAqIEluaXRzIEZpZWxkLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcclxuXHRcdFx0JGVsZW0gICAgID0gJHRoaXMuZWxlbWVudCxcclxuXHRcdFx0JGFkZCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbicgKSxcclxuXHRcdFx0JGlucHV0ICAgID0gJGVsZW0uZmluZCggJ2lucHV0W3R5cGU9dGV4dF0nICksXHJcblx0XHRcdCRzZXR0aW5ncyA9ICR0aGlzLm9wdGlvbiggJ3NldHRpbmdzJywge1xyXG5cdFx0XHRcdGZyYW1lX3RpdGxlOiAnVXBsb2FkJyxcclxuXHRcdFx0XHR1cGxvYWRfdHlwZTogJ2ltYWdlJyxcclxuXHRcdFx0XHRpbnNlcnRfdGl0bGU6ICdVc2UnLFxyXG5cdFx0XHR9ICksIHdwX21lZGlhX2ZyYW1lO1xyXG5cclxuXHRcdCRhZGQub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRpZiggdHlwZW9mIHdwID09PSAndW5kZWZpbmVkJyB8fCAhd3AubWVkaWEgfHwgIXdwLm1lZGlhLmdhbGxlcnkgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggd3BfbWVkaWFfZnJhbWUgKSB7XHJcblx0XHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYSgge1xyXG5cdFx0XHRcdHRpdGxlOiAkc2V0dGluZ3MuZnJhbWVfdGl0bGUsXHJcblx0XHRcdFx0bGlicmFyeToge1xyXG5cdFx0XHRcdFx0dHlwZTogJHNldHRpbmdzLnVwbG9hZF90eXBlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRidXR0b246IHtcclxuXHRcdFx0XHRcdHRleHQ6ICRzZXR0aW5ncy5pbnNlcnRfdGl0bGUsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCBhdHRhY2htZW50ID0gd3BfbWVkaWFfZnJhbWUuc3RhdGUoKS5nZXQoICdzZWxlY3Rpb24nICkuZmlyc3QoKTtcclxuXHRcdFx0XHQkaW5wdXQudmFsKCBhdHRhY2htZW50LmF0dHJpYnV0ZXMudXJsICkudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd3cF9lZGl0b3InLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXHJcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXHJcblx0XHRcdCR0ZXh0YXJlYSA9ICRlbGVtLmZpbmQoICd0ZXh0YXJlYScgKTtcclxuXHRcdCRlbGVtLmZpbmQoICcjd3Bvbmlvbi13cC1saW5rLXBpY2tlciA+IGJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCR0ZXh0YXJlYS52YWwoICcnICk7XHJcblx0XHRcdGlmKCAhd2luZG93LndwTGluayApIHtcclxuXHRcdFx0XHRzd2FsKCB7XHJcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICR3cG9uaW9uLnRleHQoICd3cF9saW5rX2Vycm9yX3RpdGxlJywgJ1dQIExpbmsgSlMgTGliIE5vdCBGb3VuZCcgKSxcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdpbmRvdy53cExpbmsub3BlbiggJHRleHRhcmVhLmF0dHIoICdpZCcgKSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHJcblx0XHQkdGV4dGFyZWEub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0ICRkYXRhID0galF1ZXJ5KCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xyXG5cclxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkgKSB7XHJcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4uZXhhbXBsZV9vdXRwdXQgc3Bhbi52YWx1ZScgKS5odG1sKCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3VybCcgKS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkudmFsKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RpdGxlJyApLnZhbCggJGRhdGEudGV4dCgpICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGFyZ2V0JyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKS52YWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnVybCBzcGFuLnZhbHVlJyApLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udXJsIHNwYW4udmFsdWUnICkuaHRtbCggJGRhdGEuYXR0ciggJ2hyZWYnICkgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRpdGxlIHNwYW4udmFsdWUnICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50aXRsZSBzcGFuLnZhbHVlJyApLmh0bWwoICRkYXRhLnRleHQoKSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGFyZ2V0IHNwYW4udmFsdWUnICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfbGlua3MnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5pbXBvcnQgJHdwb25pb25fZGVidWcgZnJvbSAnLi4vY29yZS9kZWJ1Zyc7XG5cbi8qKlxuICogV1BPbmlvbiBEZXBlbmRlbmN5IEhlbHBlciBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIFdQT25pb24gRGVwZW5kZW5jeSBIZWxwZXIgQ2xhc3MuXG5cdCAqIEBwYXJhbSAkc2VsZWN0b3Jcblx0ICogQHBhcmFtICRjb250eHRcblx0ICogQHBhcmFtICRjb25maWdcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnR4dCwgJGNvbmZpZyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIERlcGVuZGVuY3kgV29ya2VyLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGRlcCA9IHRoaXMub3B0aW9uKCAnZGVwZW5kZW5jeScgKTtcblx0XHRmb3IoIGxldCAka2V5IGluICRkZXAuY29udHJvbGxlciApIHtcblx0XHRcdGlmKCAkZGVwLmNvbnRyb2xsZXIuaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiAkZGVwLmNvbmRpdGlvbi5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmICRkZXAudmFsdWUuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0bGV0ICRjb250cm9sbGVyID0gJGRlcC5jb250cm9sbGVyIFsgJGtleSBdLFxuXHRcdFx0XHRcdCRjb25kaXRpb24gID0gJGRlcC5jb25kaXRpb24gWyAka2V5IF0sXG5cdFx0XHRcdFx0JHZhbHVlICAgICAgPSAkZGVwLnZhbHVlIFsgJGtleSBdLFxuXHRcdFx0XHRcdCRmaWVsZCAgICAgID0gJ1tkYXRhLWRlcGVuZC1pZD1cIicgKyAkY29udHJvbGxlciArICdcIl0nO1xuXHRcdFx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnLm5lc3RhYmxlICkge1xuXHRcdFx0XHRcdGxldCAkSU5QVVQgPSB0aGlzLmNvbmZpZy5wYXJlbnQuZmluZCggJ1tkYXRhLWRlcGVuZC1pZD0nICsgJGNvbnRyb2xsZXIgKyAnXScgKTtcblx0XHRcdFx0XHRpZiggJElOUFVULmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkZmllbGQgPSAnW2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICR3cG9uaW9uLmZpZWxkSUQoICRJTlBVVCApICsgJ1wiXTppbnB1dCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCAkYSA9IHRoaXMuY29udHh0LmNyZWF0ZVJ1bGUoICRmaWVsZCwgJGNvbmRpdGlvbiwgJHZhbHVlICk7XG5cdFx0XHRcdCRhLmluY2x1ZGUoIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0XHR0aGlzLnNldF9jb250eHQoICRhICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCB7ICdEZXBlbmRlbmN5JzogJGRlcCwgJ05lc3RhYmxlIERlcGVuZGVuY3knOiB0aGlzLmNvbmZpZy5uZXN0YWJsZSB9ICk7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG4iLCIvKiBnbG9iYWwgYXJndW1lbnRzOnRydWUgKi9cclxuLyogZ2xvYmFsIGNvbnNvbGU6dHJ1ZSAqL1xyXG4vKiBnbG9iYWwgdGlwcHk6dHJ1ZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQsIGpRdWVyeSApID0+IHtcclxuXHQvKipcclxuXHQgKiBXUE9uaW9uIFJlbGF0ZWQgRnVuY3Rpb25zLlxyXG5cdCAqL1xyXG5cdCQuZm4uZXh0ZW5kKCB7XHJcblx0XHQvKipcclxuXHRcdCAqIEFuaW1hdGUgQ1NTIFJlbGF0ZWQgRnVuY3Rpb25zLlxyXG5cdFx0ICovXHJcblx0XHRhbmltYXRlQ3NzOiBmdW5jdGlvbiggYW5pbWF0aW9uTmFtZSwgY2FsbGJhY2sgKSB7XHJcblx0XHRcdGxldCBhbmltYXRpb25FbmQgPSAoIGZ1bmN0aW9uKCBlbCApIHtcclxuXHRcdFx0XHRsZXQgYW5pbWF0aW9ucyA9IHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXHJcblx0XHRcdFx0XHRPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXHJcblx0XHRcdFx0XHRNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxyXG5cdFx0XHRcdFx0V2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRmb3IoIGxldCB0IGluIGFuaW1hdGlvbnMgKSB7XHJcblx0XHRcdFx0XHRpZiggZWwuc3R5bGVbIHQgXSAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYW5pbWF0aW9uc1sgdCBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApICk7XHJcblxyXG5cdFx0XHR0aGlzLmFkZENsYXNzKCAnYW5pbWF0ZWQgJyArIGFuaW1hdGlvbk5hbWUgKS5vbmUoIGFuaW1hdGlvbkVuZCwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCggdGhpcyApLnJlbW92ZUNsYXNzKCAnYW5pbWF0ZWQgJyArIGFuaW1hdGlvbk5hbWUgKTtcclxuXHRcdFx0XHRpZiggdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2soICQoIHRoaXMgKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBDdXN0b20gV3JhcCBDbGFzcyBUbyBIYW5kbGUgVGlwcHkgSW5zdGFuY2VcclxuXHRcdCAqIEBwYXJhbSAkYXJndW1lbnRzXHJcblx0XHQgKiBAcmV0dXJucyB7Kn1cclxuXHRcdCAqL1xyXG5cdFx0dGlwcHk6IGZ1bmN0aW9uKCAkYXJndW1lbnRzICkge1xyXG5cdFx0XHRsZXQgdGlwcHlfaGVscGVyID0ge1xyXG5cdFx0XHRcdGNyZWF0ZV9pbnN0YW5jZTogZnVuY3Rpb24oICRlbGVtLCAkYXJndW1lbnRzICkge1xyXG5cdFx0XHRcdFx0JGFyZ3VtZW50cyA9ICggdHlwZW9mICRhcmd1bWVudHMgPT09ICd1bmRlZmluZWQnICkgPyB7fSA6ICRhcmd1bWVudHM7XHJcblx0XHRcdFx0XHRpZiggJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRcdFx0bGV0ICRfaW5zdGFuY2VfaWQgPSAnVGlwcHknICsgd2luZG93Lndwb25pb24uY29yZS5yYW5kX2lkKCk7XHJcblx0XHRcdFx0XHRcdCRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJywgJF9pbnN0YW5jZV9pZCApO1xyXG5cclxuXHRcdFx0XHRcdFx0bGV0ICR0aXRsZSAgICAgID0gJGVsZW0uYXR0ciggJ3RpdGxlJyApO1xyXG5cdFx0XHRcdFx0XHRsZXQgJGRhdGFfdGlwcHkgPSAkZWxlbS5hdHRyKCAnZGF0YS10aXBweScgKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCAkdGl0bGUgJiYgJHRpdGxlICE9PSAnJyApIHtcclxuXHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mICRhcmd1bWVudHMuY29udGVudCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkYXJndW1lbnRzLmNvbnRlbnQgPSAkdGl0bGU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiggJGRhdGFfdGlwcHkgJiYgJGRhdGFfdGlwcHkgIT09ICcnICkge1xyXG5cdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgJGFyZ3VtZW50cy5jb250ZW50ID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRhcmd1bWVudHMuY29udGVudCA9ICRkYXRhX3RpcHB5O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0d2luZG93WyAkX2luc3RhbmNlX2lkIF0gPSB0aXBweSggJGVsZW1bIDAgXSwgJGFyZ3VtZW50cyApO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGdldF9pbnN0YW5jZTogZnVuY3Rpb24oICRlbGVtICkge1xyXG5cdFx0XHRcdFx0aWYoICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxldCAkX2luc3RhbmNlX2lkID0gJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gKCB1bmRlZmluZWQgIT09IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdICkgPyB3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSA6IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmKCB0aGlzLmxlbmd0aCA+IDEgKSB7XHJcblx0XHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRpcHB5X2hlbHBlci5jcmVhdGVfaW5zdGFuY2UoIGpRdWVyeSggdGhpcyApLCAkYXJndW1lbnRzICk7XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCAkc3RhdHVzID0gdGlwcHlfaGVscGVyLmNyZWF0ZV9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICksICRhcmd1bWVudHMgKTtcclxuXHRcdFx0XHRyZXR1cm4gKCB0cnVlID09PSAkc3RhdHVzICkgPyB0aXBweV9oZWxwZXIuZ2V0X2luc3RhbmNlKCBqUXVlcnkoIHRoaXMgKSApIDogZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIEFuIEFjdGl2ZSBpbnN0YW5jZVxyXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0XHQgKi9cclxuXHRcdHRpcHB5X2dldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKSA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgJF9pbnN0YW5jZV9pZCA9IGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApO1xyXG5cdFx0XHRyZXR1cm4gKCB1bmRlZmluZWQgIT09IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdICkgPyB3aW5kb3dbICRfaW5zdGFuY2VfaWQgXSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENvcHkgRWxlbWVudCBBdHRyIFRvIEFub3RoZXIgQXR0ci5cclxuXHRcdCAqIEBwYXJhbSBmcm9tXHJcblx0XHQgKiBAcGFyYW0gdG9cclxuXHRcdCAqL1xyXG5cdFx0Y29weUF0dHI6IGZ1bmN0aW9uKCBmcm9tLCB0byApIHtcclxuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmxlbmd0aCA+IDEgKSB7XHJcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5jb3B5QXR0ciggZnJvbSwgdG8gKTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyICRleGlzdGluZyA9IGpRdWVyeSggdGhpcyApLmF0dHIoIGZyb20gKTtcclxuXHRcdFx0XHRpZiggdHlwZW9mICRleGlzdGluZyAhPT0gJ3VuZGVmaW5lZCcgfHwgJGV4aXN0aW5nICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCB0bywgJGV4aXN0aW5nICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTW92ZSBFbGVtZW50IEF0dHIgVG8gQW5vdGhlciBBdHRyLlxyXG5cdFx0ICogQHBhcmFtIGZyb21cclxuXHRcdCAqIEBwYXJhbSB0b1xyXG5cdFx0ICovXHJcblx0XHRtb3ZlQXR0cjogZnVuY3Rpb24oIGZyb20sIHRvICkge1xyXG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkubGVuZ3RoID4gMSApIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5lYWNoKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGpRdWVyeSggdGhpcyApLm1vdmVBdHRyKCBmcm9tLCB0byApO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5jb3B5QXR0ciggZnJvbSwgdG8gKTtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmVBdHRyKCBmcm9tICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgQSBBYnN0cmFjdCBDbGFzcyBJbnN0YW5jZS5cclxuXHQgKiBAcGFyYW0gJGVsZW1cclxuXHQgKiBAcGFyYW0gJGNvbnR4dFxyXG5cdCAqIEByZXR1cm5zIHt7YWpheCgqPSwgKj0pOiAqLCBqc19lcnJvcigqKTogdm9pZCwgaW5pdF9maWVsZCgqPSwgKik6IHZvaWQsIHNldF9hcmdzKCopOiAqLCBqc192YWxpZGF0ZV9lbGVtKCo9LCAqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGlkKCk6ICosIHBsdWdpbl9pZCgpOiAqLCBmaWVsZF9kZWJ1ZygpOiAodW5kZWZpbmVkKSwgaGFuZGxlX2FyZ3MoKj0sICo9KTogKiwgbWF5YmVfanNfdmFsaWRhdGVfZWxlbSgqPSwgKj0pOiB2b2lkLCBnZXRfZmllbGRfcGFyZW50X2J5X2lkKCo9KTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIG9wdGlvbnMoKTogKiwganNfdmFsaWRhdG9yKCk6IHZvaWQsIGluaXQoKSwgcmVsb2FkKCk6ICosIG1vZHVsZSgpOiAqLCBzZXRfY29udHh0KCopOiAqLCBjb250eHQ6ICosIGVsZW1lbnQ6ICosIGhvb2s6ICosIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKn18Knx3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdH1cclxuXHQgKi9cclxuXHR3aW5kb3cud3Bvbmlvbl9maWVsZCA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0sICRjb250eHQgKTtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBXUE9uaW9uIE5vdGljZXMuXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0d2luZG93Lndwb25pb25fbm90aWNlID0gKCAkZWxlbSApID0+IHtcclxuXHRcdGlmKCAkZWxlbS5sZW5ndGggPiAxICkge1xyXG5cdFx0XHQkZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR3cG9uaW9uX25vdGljZSggalF1ZXJ5KCB0aGlzICkgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICcud3Bvbmlvbi1yZW1vdmUnICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHQkZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxldCAkX2VsID0galF1ZXJ5KCB0aGlzICk7XHJcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24tcmVtb3ZlJyApLnRpcHB5KCB7XHJcblx0XHRcdFx0XHRcdGFwcGVuZFRvOiAoKSA9PiBqUXVlcnkoIHRoaXMgKVsgMCBdLFxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJy53cG9uaW9uLXJlbW92ZScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCRfZWwuc2xpZGVVcCggJ3Nsb3cnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHQkX2VsLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdHJldHVybiAkZWxlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0ICRhdXRvID0gJGVsZW0uYXR0ciggJ2RhdGEtYXV0b2Nsb3NlJyApO1xyXG5cdFx0XHRpZiggJGF1dG8gKSB7XHJcblx0XHRcdFx0JGF1dG8gICAgID0gcGFyc2VJbnQoICRhdXRvICk7XHJcblx0XHRcdFx0bGV0ICRsZWZ0ID0gJGF1dG8gLyAxMDAwO1xyXG5cdFx0XHRcdGlmKCAkZWxlbS5maW5kKCAnLndwby1jb3VudGVyJyApLmxlbmd0aCA9PT0gMSApIHtcclxuXHRcdFx0XHRcdGxldCAkcnVubmRlciA9IHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JGVsZW0uZmluZCggJy53cG8tY291bnRlcicgKS5odG1sKCAkbGVmdCApO1xyXG5cdFx0XHRcdFx0XHQkbGVmdCAtPSAxO1xyXG5cdFx0XHRcdFx0XHRpZiggJGxlZnQgPCAwICkge1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoICRydW5uZGVyICk7XHJcblx0XHRcdFx0XHRcdFx0JGVsZW0uZmluZCggJy53cG8tY291bnRlcicgKS5odG1sKCAnMCcgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSwgOTAwICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHRcdCRlbGVtLnNsaWRlVXAoICdzbG93JywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHQkZWxlbS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9LCAkYXV0byApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQmFzaWMgV1BPbmlvbiBKUyBTZXR1cC5cclxuXHQgKi9cclxuXHR3aW5kb3cud3Bvbmlvbl9zZXR1cCA9ICgpID0+IHtcclxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB3aW5kb3cud3Bvbmlvbi5jb3JlLnNldHRpbmdzX2FyZ3MgKSApIHtcclxuXHRcdFx0bGV0ICRjb3JlID0gd2luZG93Lndwb25pb24uY29yZS53aW5kb3dBcmdzKCAnd3Bvbmlvbl9jb3JlJywgZmFsc2UgKTtcclxuXHRcdFx0bGV0ICR0YW5zID0gd2luZG93Lndwb25pb24uY29yZS53aW5kb3dBcmdzKCAnd3Bvbmlvbl9pbDhuJywgZmFsc2UgKTtcclxuXHRcdFx0aWYoIGZhbHNlID09PSAkY29yZSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS5zZXR0aW5nc19hcmdzICAgID0gJGNvcmU7XHJcblx0XHRcdHdpbmRvdy53cG9uaW9uLmNvcmUudGV4dCAgICAgICAgICAgICA9ICR0YW5zO1xyXG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLmRlYnVnX2luZm8gICAgICAgPSBudWxsO1xyXG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLmZpZWxkX2RlYnVnX2luZm8gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZ2lzdGVycyBXaXRoIEEgRmllbGQgQ2FsbGJhY2sgSG9vay5cclxuXHQgKiBAcGFyYW0gJHR5cGVcclxuXHQgKiBAcGFyYW0gJGNhbGxiYWNrXHJcblx0ICogQHBhcmFtICRtb2R1bGVcclxuXHQgKi9cclxuXHR3aW5kb3cud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCA9ICggJHR5cGUsICRjYWxsYmFjaywgJG1vZHVsZSA9ICcnICkgPT4ge1xyXG5cdFx0JG1vZHVsZSA9ICggJycgPT09ICRtb2R1bGUgKSA/ICcnIDogJG1vZHVsZSArICdfJztcclxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmFkZEFjdGlvbiggJ3dwb25pb25faW5pdF8nICsgJG1vZHVsZSArICdmaWVsZF8nICsgJHR5cGUsICd3cG9uaW9uX2NvcmUnLCAoICRlbGVtICkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdCRjYWxsYmFjayggJGVsZW0gKTtcclxuXHRcdFx0fSBjYXRjaCggZSApIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYXJndW1lbnRzLCAnIFxcbicgKyBlICsgJyAgXFxuRm9yIDogd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkdHlwZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gVXNlZCBvdXRzaWRlIG9mIFdQT25pb24gVG8gQ3JlYXRlXHJcblx0ICogQHBhcmFtICRpbml0X21ldGhvZFxyXG5cdCAqIEBwYXJhbSAkbWV0aG9kc1xyXG5cdCAqIEByZXR1cm5zIHt7aW5pdDogKiwgbmV3KCk6ICRjbGFzcywgcHJvdG90eXBlOiAkY2xhc3N9fVxyXG5cdCAqL1xyXG5cdHdpbmRvdy53cG9uaW9uX2NyZWF0ZV9maWVsZCA9ICggJGluaXRfbWV0aG9kLCAkbWV0aG9kcyA9IGZhbHNlICkgPT4ge1xyXG5cdFx0bGV0ICRvcmdfY2xhc3MgPSByZXF1aXJlKCAnLi4vY29yZS9maWVsZCcgKS5kZWZhdWx0O1xyXG5cdFx0bGV0ICRjbGFzcyAgICAgPSBjbGFzcyBleHRlbmRzICRvcmdfY2xhc3Mge1xyXG5cdFx0fTtcclxuXHJcblx0XHQkY2xhc3MucHJvdG90eXBlLmluaXQgPSAkaW5pdF9tZXRob2Q7XHJcblxyXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRtZXRob2RzICkgKSB7XHJcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1ldGhvZHMgKSB7XHJcblx0XHRcdFx0aWYoICRtZXRob2RzLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XHJcblx0XHRcdFx0XHQkY2xhc3MucHJvdG90eXBlWyAka2V5IF0gPSAkbWV0aG9kc1sgJGtleSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICRjbGFzcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBUcmlnZ2VycyBBIEZpZWxkIEpTIEZ1bmN0aW9uIFRvIFJlbmRlciBpdCBQcm9wZXJseVxyXG5cdCAqIEBwYXJhbSAkZmllbGRfdHlwZVxyXG5cdCAqIEBwYXJhbSAkYXJndW1lbnRcclxuXHQgKiBAcGFyYW0gJG1vZHVsZVxyXG5cdCAqIEBwYXJhbSAkbG9nX2VyclxyXG5cdCAqL1xyXG5cdHdpbmRvdy53cG9uaW9uX2luaXRfZmllbGQgPSAoICRmaWVsZF90eXBlLCAkYXJndW1lbnQsICRtb2R1bGUgPSAnJywgJGxvZ19lcnIgPSB0cnVlICkgPT4ge1xyXG5cdFx0JG1vZHVsZSA9ICggJycgPT09ICRtb2R1bGUgKSA/ICcnIDogJG1vZHVsZSArICdfJztcclxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5ob29rcy5oYXNBY3Rpb24oICd3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICRmaWVsZF90eXBlICkgKSB7XHJcblx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkZmllbGRfdHlwZSwgJGFyZ3VtZW50ICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiggdHJ1ZSA9PT0gJGxvZ19lcnIgKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1dQT25pb24gRmllbGQgVHlwZSA6ICcgKyAkZmllbGRfdHlwZSArICcgSW5pdCBGdW5jdGlvbiBOb3QgRm91bmQnLCAnXFxuQWN0aW9uIFVzZWQgOiB3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICRmaWVsZF90eXBlICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIGpRdWVyeSApO1xyXG5cclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcblxyXG4vKipcclxuICogSW1hZ2UgUE9QVVAgVmlldyBDbGFzcy5cclxuICovXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBJbWFnZSBQT1BVUCBWaWV3LlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJGltYWdlID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICkgKSApID8gdGhpcy5lbGVtZW50LmF0dHIoICdzcmMnICkgOiB0aGlzLmVsZW1lbnQuYXR0ciggJ2RhdGEtZnVsbHNpemUnICk7XHJcblx0XHRzd2FsKCB7XHJcblx0XHRcdGltYWdlVXJsOiAkaW1hZ2UsXHJcblx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXHJcblx0XHRcdGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0YmFja2Ryb3A6IGByZ2JhKDAsMCwwLDAuNDQpYFxyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV9wb3B1cCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XHJcbmltcG9ydCB7IHJhbmRfbWQ1IH0gZnJvbSAndnNwLWpzLWhlbHBlci9pbmRleCc7XHJcblxyXG4vKipcclxuICogV1AgRWRpdG9yIEhlbHBlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBXUCBFZGl0b3IgSGVscGVyXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0bGV0ICRtY2VfZWRpdG9yICA9IHRpbnlNQ0VQcmVJbml0Lm1jZUluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcclxuXHRcdFx0XHQkcXVpY2tfdGFncyAgPSB0aW55TUNFUHJlSW5pdC5xdEluaXRbIHRoaXMub3B0aW9uKCAnd3BlZGl0b3JfaWQnICkgXSxcclxuXHRcdFx0XHQkTkVXX0lEICAgICAgPSAnd3Bvbmlvbi13cC1lZGl0b3ItJyArIHJhbmRfbWQ1KCksXHJcblx0XHRcdFx0JHRleHRBcmVhICAgID0gdGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5jbG9uZSgpLFxyXG5cdFx0XHRcdCRhY3R1YWxfSUQgICA9ICR0ZXh0QXJlYS5hdHRyKCAnaWQnICksXHJcblx0XHRcdFx0JGFjdHVhbF9odG1sID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKS5odG1sKCksXHJcblx0XHRcdFx0JHJlZ2V4ICAgICAgID0gbmV3IFJlZ0V4cCggJGFjdHVhbF9JRCwgXCJnXCIgKTtcclxuXHRcdFx0JGFjdHVhbF9odG1sICAgICA9ICRhY3R1YWxfaHRtbC5yZXBsYWNlKCAkcmVnZXgsICRORVdfSUQgKTtcclxuXHJcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZmllbGRzZXQnICkuaHRtbCggJGFjdHVhbF9odG1sICk7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkucGFyZW50KCkuYXBwZW5kKCAkdGV4dEFyZWEgKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYTpub3QoIycgKyAkYWN0dWFsX0lEICsgJyknICkucmVtb3ZlKCk7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuYXR0ciggJ2lkJywgJE5FV19JRCApO1xyXG5cclxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkbWNlX2VkaXRvciApICkge1xyXG5cdFx0XHRcdCRtY2VfZWRpdG9yLnNlbGVjdG9yID0gJyMnICsgJE5FV19JRDtcclxuXHRcdFx0XHR0aW55bWNlLmluaXQoICRtY2VfZWRpdG9yICk7XHJcblx0XHRcdFx0dGlueU1DRS5leGVjQ29tbWFuZCggJ21jZUFkZEVkaXRvcicsIGZhbHNlLCAnIycgKyAkTkVXX0lEICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHF1aWNrX3RhZ3MgKSApIHtcclxuXHRcdFx0XHQkcXVpY2tfdGFncy5pZCA9ICRORVdfSUQ7XHJcblx0XHRcdFx0cXVpY2t0YWdzKCAkcXVpY2tfdGFncyApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xyXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBXUE9uaW9uIEZpZWxkIFRvb2xUaXBcclxuICovXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSGFuZGxlIEVhY2ggQW5kIEV2ZXJ5IFNpbmdsZSBGaWVsZCBUb29sVGlwLlxyXG5cdCAqL1xyXG5cdGluaXQoKSB7XHJcblx0XHRsZXQgJGZpZCAgICAgICAgID0gdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZpZWxkLWpzaWQnICk7XHJcblx0XHRsZXQgJHRvb2x0aXBfa2V5ID0gZmFsc2U7XHJcblx0XHRpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1oZWxwJyApICkge1xyXG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3Bvbmlvbi1oZWxwJztcclxuXHRcdH0gZWxzZSBpZiggdHJ1ZSA9PT0gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi13cmFwLXRvb2x0aXAnICkgKSB7XHJcblx0XHRcdCR0b29sdGlwX2tleSA9ICd3cmFwX3Rvb2x0aXAnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJGZpZCArICd0b29sdGlwJztcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgJGFyZyA9ICggdHJ1ZSA9PT0gJHdwb25pb24udmFsaWRfanNvbiggJGZpZCApICkgPyBKU09OLnBhcnNlKCAkZmlkICkgOiB0aGlzLm9wdGlvbiggJHRvb2x0aXBfa2V5LCBmYWxzZSApO1xyXG5cclxuXHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRpc0ZldGNoaW5nOiBmYWxzZSxcclxuXHRcdFx0Y2FuRmV0Y2g6IHRydWVcclxuXHRcdH07XHJcblxyXG5cdFx0aWYoIGZhbHNlID09PSAkYXJnICkge1xyXG5cdFx0XHRsZXQgJGNsYXNzVG9DaGVjayA9IFsgJ2RhdGEtdGlwcHknLCAnZGF0YS10aXBweS1hcmdzJywgJ3RpcHB5LWFyZ3MnIF07XHJcblx0XHRcdGxldCAkZm91bmQgICAgICAgID0gZmFsc2U7XHJcblx0XHRcdGZvciggbGV0ICRrIGluICRjbGFzc1RvQ2hlY2sgKSB7XHJcblx0XHRcdFx0bGV0ICRhdHRyID0gdGhpcy5lbGVtZW50LmF0dHIoICRjbGFzc1RvQ2hlY2tbICRrIF0gKTtcclxuXHRcdFx0XHRpZiggJGF0dHIgKSB7XHJcblx0XHRcdFx0XHRpZiggJHdwb25pb24udmFsaWRfanNvbiggJGF0dHIgKSApIHtcclxuXHRcdFx0XHRcdFx0JGFyZyAgID0gSlNPTi5wYXJzZSggJGF0dHIgKTtcclxuXHRcdFx0XHRcdFx0JGZvdW5kID0gJGNsYXNzVG9DaGVja1sgJGsgXTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJGF0dHIsIGZhbHNlICkgKSB7XHJcblx0XHRcdFx0XHRcdCRhcmcgICA9IHRoaXMub3B0aW9uKCAkYXR0ciwgZmFsc2UgKTtcclxuXHRcdFx0XHRcdFx0JGZvdW5kID0gJGNsYXNzVG9DaGVja1sgJGsgXTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoICRhcmcgKSB7XHJcblx0XHRcdCRhcmcucGVyZm9ybWFuY2UgPSBmYWxzZTtcclxuXHRcdFx0aWYoICRhcmcuaW1hZ2UgIT09IHVuZGVmaW5lZCAmJiAkYXJnLmltYWdlICE9PSBmYWxzZSApIHtcclxuXHRcdFx0XHRsZXQgJGltYWdlICAgICAgICAgID0gJGFyZy5pbWFnZTtcclxuXHRcdFx0XHQkYXJnLmludGVyYWN0aXZlICAgID0gdHJ1ZTtcclxuXHRcdFx0XHQkYXJnLmNvbnRlbnQgICAgICAgID0gJ0xvYWRpbmcuLi4nO1xyXG5cdFx0XHRcdC8vJGFyZy5odG1sICAgICAgICAgICA9ICcjd3BvdHBpbWcnO1xyXG5cdFx0XHRcdCRhcmcudXBkYXRlRHVyYXRpb24gPSAyMDAwO1xyXG5cdFx0XHRcdCRhcmcub25TaG93ICAgICAgICAgPSBhc3luYyBmdW5jdGlvbiggdGlwICkge1xyXG5cdFx0XHRcdFx0aWYoIHN0YXRlLmlzRmV0Y2hpbmcgfHwgIXN0YXRlLmNhbkZldGNoICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzdGF0ZS5pc0ZldGNoaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoICAgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCAkaW1hZ2UgKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgYmxvYiAgICAgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHVybCAgICAgID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xyXG5cdFx0XHRcdFx0XHRpZiggdGlwLnN0YXRlLmlzVmlzaWJsZSApIHtcclxuXHRcdFx0XHRcdFx0XHR0aXAuc2V0Q29udGVudCggJzxkaXYgc3R5bGU9XCJtaW4td2lkdGg6MjVweDttaW4taGVpZ2h0OjI1cHg7XCI+PGltZyBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7XCIgc3JjPVwiJyArIHVybCArICdcIi8+PC9kaXY+JyApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGNhdGNoKCBlICkge1xyXG5cdFx0XHRcdFx0XHR0aXAuc2V0Q29udGVudCggYEZldGNoIGZhaWxlZC4gJHtlfWAgKTtcclxuXHRcdFx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0XHRcdHN0YXRlLmlzRmV0Y2hpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdCRhcmcub25IaWRkZW4gICAgICAgPSAoIHRpcCApID0+IHtcclxuXHRcdFx0XHRcdHN0YXRlLmNhbkZldGNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRpcC5zZXRDb250ZW50KCAnTG9hZGluZy4uLicgKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdCRhcmcucG9wcGVyT3B0aW9ucyAgPSB7XHJcblx0XHRcdFx0XHRtb2RpZmllcnM6IHtcclxuXHRcdFx0XHRcdFx0cHJldmVudE92ZXJmbG93OiB7XHJcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0aGlkZToge1xyXG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGFyZyA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZy5mb2xsb3dDdXJzb3IgKSAmJiB0cnVlID09PSAkYXJnLmZvbGxvd0N1cnNvciAmJiB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJnLmFwcGVuZFRvICkgKSB7XHJcblx0XHRcdCRhcmcuYXBwZW5kVG8gPSAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmJvZHk7XHJcblx0XHRcdH07XHJcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmcuYXBwZW5kVG8gKSApIHtcclxuXHRcdFx0JGFyZy5hcHBlbmRUbyA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD0nICsgdGhpcy5pZCgpICsgJ10nIClbIDAgXTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWxldGUgJGFyZy5pbWFnZTtcclxuXHRcdGRlbGV0ZSAkYXJnLmljb247XHJcblx0XHR0aGlzLmVsZW1lbnQudGlwcHkoIHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcsICR0b29sdGlwX2tleSApICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3Rvb2x0aXAnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XHJcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XHJcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xyXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJyNidWxrX2VkaXQnLCAoKSA9PiB7XHJcblx0XHRcdGxldCAkZmluYWxfYXJncyA9IHsgcG9zdF9pZHM6IFtdIH0sXHJcblx0XHRcdFx0JGJ1bGtfZWRpdCAgPSAkKCAnI2J1bGstZWRpdCcgKTtcclxuXHJcblx0XHRcdCRidWxrX2VkaXQuZmluZCggJyNidWxrLXRpdGxlcycgKS5jaGlsZHJlbigpLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRmaW5hbF9hcmdzLnBvc3RfaWRzLnB1c2goICQoIHRoaXMgKS5hdHRyKCAnaWQnICkucmVwbGFjZSggL14odHRsZSkvaSwgJycgKSApO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcud3Bvbmlvbi1xdWljay1lZGl0LWZpZWxkc2V0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRmaW5hbF9hcmdzID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggJCggdGhpcyApLnNlcmlhbGl6ZUpTT04oKSwgJGZpbmFsX2FyZ3MgKTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICdzYXZlLWJ1bGstZWRpdCcsIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRhc3luYzogZmFsc2UsXHJcblx0XHRcdFx0Y2FjaGU6IGZhbHNlLFxyXG5cdFx0XHRcdGRhdGE6ICRmaW5hbF9hcmdzLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xyXG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcclxuXHJcbmNsYXNzIFdQT25pb25fR3V0dGVuYmVyZyB7XHJcblx0Y29uc3RydWN0b3IoICRpZCA9ICcnLCAkYXJncyA9IHt9ICkge1xyXG5cdFx0dGhpcy5pZCAgID0gJGlkO1xyXG5cdFx0dGhpcy5hcmdzID0gJHdwb25pb24uanNfZnVuYyggJGFyZ3MgKTtcclxuXHJcblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5zYXZlID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0dGhpcy5hcmdzLnNhdmUgPSAoIGJsb2NrICkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNhdmVfaGFuZGxlciggYmxvY2sgKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5lZGl0ID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0dGhpcy5hcmdzLmVkaXQgPSAoIGJsb2NrICkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmVkaXRfaGFuZGxlciggYmxvY2sgKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cud3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlKCB0aGlzLmlkLCB0aGlzLmFyZ3MgKTtcclxuXHR9XHJcblxyXG5cdHNhdmVfaGFuZGxlciggYmxvY2sgKSB7XHJcblx0fVxyXG5cclxuXHRlZGl0X2hhbmRsZXIoIGJsb2NrICkge1xyXG5cdFx0bGV0IGVsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xyXG5cclxuXHRcdGxldCAkX3Bvc3RpZHMgICAgICAgICAgICA9IEpTT04uc3RyaW5naWZ5KCBwYXJzZUludCggalF1ZXJ5KCAnaW5wdXQjcG9zdF9JRCcgKS52YWwoKSApICk7XHJcblx0XHRibG9jay5hdHRyaWJ1dGVzLnBvc3RfaWQgPSAkX3Bvc3RpZHM7XHJcblx0XHRsZXQgYmxvY2tfaWQgICAgICAgICAgICAgPSBibG9jay5hdHRyaWJ1dGVzLmJsb2NrX2lkID0gYmxvY2suYXR0cmlidXRlcy5ibG9ja19pZCB8fCBibG9jay5jbGllbnRJZDtcclxuXHRcdGxldCAkcmVtb3RlICAgICAgICAgICAgICA9IGVsKCAnZm9ybScsIHtcclxuXHRcdFx0Y2xhc3NOYW1lOiAnd3Bvbmlvbi1ibG9jay1ncm91cC1jb250ZW50JyxcclxuXHRcdFx0J2RhdGEtYmxvY2staWQnOiBibG9ja19pZCxcclxuXHRcdH0sIFtcclxuXHRcdFx0ZWwoIHdpbmRvdy53cC5jb21wb25lbnRzLlNlcnZlclNpZGVSZW5kZXIsIHtcclxuXHRcdFx0XHRibG9jazogdGhpcy5pZCxcclxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdFx0XHRwb3N0X2lkOiAkX3Bvc3RpZHMsXHJcblx0XHRcdFx0XHRibG9ja19pZDogYmxvY2tfaWQsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IClcclxuXHRcdF0gKTtcclxuXHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gW107XHJcblxyXG5cdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3Muc3R5bGUgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRpZiggdGhpcy5hcmdzLnN0eWxlID09PSAnZGVmYXVsdCcgKSB7XHJcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCggZWwoICdkaXYnLCB7XHJcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdhY2YtYmxvY2stZ3JvdXAtaGVhZGluZycsXHJcblx0XHRcdFx0fSwgW1xyXG5cdFx0XHRcdFx0ZWwoICdzcGFuJywge1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdkYXNoaWNvbnMgZGFzaGljb25zLScgKyB0aGlzLmFyZ3MuaWNvblxyXG5cdFx0XHRcdFx0fSApLFxyXG5cdFx0XHRcdFx0JyAnLFxyXG5cdFx0XHRcdFx0dGhpcy5hcmdzLnRpdGxlLFxyXG5cdFx0XHRcdF0gKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1ibG9jay1pZD1cIicgKyBibG9ja19pZCArICdcIl0nO1xyXG5cclxuXHRcdGlmKCBqUXVlcnkoIHNlbGVjdG9yICkubGVuZ3RoIDwgMSApIHtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyppZiggJCggc2VsZWN0b3IgKS5sZW5ndGggPCAxICkge1xyXG5cdFx0XHQkKCBkb2N1bWVudCApLm9uKCAnYWNiX3NhdmVfZmllbGRzJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHRyeVVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYoIGJsb2NrLmlzU2VsZWN0ZWQgfHwgJCggc2VsZWN0b3IgKS5pcyggJzpob3ZlcicgKSApIHtcclxuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCBibG9jay51cGRhdGVUaW1lb3V0ICk7XHJcblx0XHRcdFx0XHRcdGJsb2NrLnVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCB0cnlVcGRhdGUsIDUwMCApO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YmxvY2suc2V0QXR0cmlidXRlcygge1xyXG5cdFx0XHRcdFx0XHRhY2ZfZmllbGRzOiBhY2Yuc2VyaWFsaXplKCAkKCBzZWxlY3RvciApIClbICdhY2YnIF0sXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggdHJ5VXBkYXRlLCAyNTAgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fSovXHJcblx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vICAgYWNmLmRvX2FjdGlvbigncmVhZHknLCAkKCdbZGF0YS1ibG9jay1pZD1cIicgKyBibG9ja19pZCArICdcIl0nKSk7XHJcblx0XHQvLyB9LCA1MDApO1xyXG5cclxuXHRcdGNoaWxkcmVuLnB1c2goICRyZW1vdGUgKTtcclxuXHJcblx0XHRyZXR1cm4gZWwoICdkaXYnLCB7IGNsYXNzTmFtZTogJ3dwb25pb24tYmxvY2stZ3JvdXAtd3JhcHBlcicgfSwgY2hpbGRyZW4gKTtcclxuXHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XHJcblx0JCggZnVuY3Rpb24oKSB7XHJcblx0XHRpZiggIXdpbmRvdy53cCB8fCAhd2luZG93LndwLmJsb2NrcyB8fCAhd2luZG93LndwLmVkaXRvciApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcclxuXHRcdFx0Ly9sZXQgJGJsb2NrcyAgICAgPSB3aW5kb3cud3AuYmxvY2tzO1xyXG5cdFx0XHRsZXQgJHdwb19ibG9ja3MgPSAkd3Bvbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9ndXR0ZW5iZXJnX2Jsb2NrcycgKTtcclxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkd3BvX2Jsb2NrcyApICYmIHdpbmRvdy53cG9uaW9uLl8uaXNBcnJheSggJHdwb19ibG9ja3MgKSApIHtcclxuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICR3cG9fYmxvY2tzICkge1xyXG5cdFx0XHRcdFx0aWYoICR3cG9fYmxvY2tzLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XHJcblx0XHRcdFx0XHRcdG5ldyBXUE9uaW9uX0d1dHRlbmJlcmcoICRrZXksICR3cG9fYmxvY2tzWyAka2V5IF0gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcclxuXHQvKipcclxuXHQgKiBGaXhlcyBNZWRpYSBQT1BVUCBNb2RhbCBUbyBXb3JrIFdpdGggV1Bvbmlvbi5cclxuXHQgKi9cclxuXHRjb25zdCBmaXhfbWVkaWFfdWkgPSAoKSA9PiB7XHJcblx0XHRsZXQgJHRhYmxlICA9IGpRdWVyeSggJy5jb21wYXQtYXR0YWNobWVudC1maWVsZHMnICksXHJcblx0XHRcdCRmaWVsZHMgPSAkdGFibGUuZmluZCggJy53cG9uaW9uLWZyYW1ld29yaycgKTtcclxuXHRcdCRmaWVsZHMuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG5cdFx0XHQkdGFibGUuYmVmb3JlKCBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5odG1sKCkgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHR3aW5kb3cud3Bvbmlvbl9zZXR1cCgpO1xyXG5cdFx0d2luZG93Lndwb25pb25fZmllbGQoICR0YWJsZS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApICkucmVsb2FkKCk7XHJcblx0fTtcclxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRpZiggJCggJy5jb21wYXQtYXR0YWNobWVudC1maWVsZHMnICkubGVuZ3RoID4gMCAmJiAkKCAnYm9keScgKS5oYXNDbGFzcyggJ3Bvc3QtdHlwZS1hdHRhY2htZW50JyApICkge1xyXG5cdFx0XHRmaXhfbWVkaWFfdWkoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmKCB0eXBlb2Ygd3AubWVkaWEgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3cC5tZWRpYS5mcmFtZXMuYnJvd3NlICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHR3cC5tZWRpYS5mcmFtZXMuYnJvd3NlLm9uKCAnZWRpdDphdHRhY2htZW50JywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0Zml4X21lZGlhX3VpKCk7XHJcblx0XHRcdFx0XHR3cC5tZWRpYS5mcmFtZXMuZWRpdC5vbiggJ2F0dGFjaG1lbnQ6Y29tcGF0OnJlYWR5JywgKCkgPT4gZml4X21lZGlhX3VpKCkgKTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9ICk7XHJcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xyXG5cclxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcclxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XHJcblxyXG4vKipcclxuICogV1BPbmlvbiBNZXRhYm94IE1vZHVsZSBIYW5kbGVyLlxyXG4gKi9cclxuY2xhc3MgV1BPbmlvbl9NZXRhYm94X01vZHVsZSBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBNb2R1bGUuXHJcblx0ICovXHJcblx0bW9kdWxlX2luaXQoKSB7XHJcblx0XHR0aGlzLnVpX21lbnVfaGFuZGxlcigpO1xyXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnaDIuYWpheC1jb250YWluZXIgYnV0dG9uJywgdGhpcy5zYXZlX2hhbmRsZXIgKTtcclxuXHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vbiggJ3Bvc3Rib3gtbW92ZWQnLCBmdW5jdGlvbiggZXZlbnQsICRlbGVtZW50ICkge1xyXG5cdFx0XHRsZXQgJGlkID0galF1ZXJ5KCAkZWxlbWVudCApLmF0dHIoICdpZCcgKTtcclxuXHRcdFx0aWYoIGpRdWVyeSggJyNwb3N0Ym94LWNvbnRhaW5lci0xICcgKS5maW5kKCAnIycgKyAkaWQgKS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdGpRdWVyeSggJGVsZW1lbnQgKS5hZGRDbGFzcyggJ3dwb25pb24tbWV0YWJveC1zaWRlLW1ldGFib3gnICk7XHJcblx0XHRcdFx0alF1ZXJ5KCAkZWxlbWVudCApLmFkZENsYXNzKCAnd3Bvbmlvbi1tZXRhYm94LXNpZGUnICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0alF1ZXJ5KCAkZWxlbWVudCApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi1tZXRhYm94LXNpZGUtbWV0YWJveCcgKTtcclxuXHRcdFx0XHRqUXVlcnkoICRlbGVtZW50ICkucmVtb3ZlQ2xhc3MoICd3cG9uaW9uLW1ldGFib3gtc2lkZScgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBBamF4IFNhdmUgSGFuZGxlci5cclxuXHQgKiBAcGFyYW0gZVxyXG5cdCAqL1xyXG5cdHNhdmVfaGFuZGxlciggZSApIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCAkcGFyZW50ID0galF1ZXJ5KCB0aGlzICkucGFyZW50KCksXHJcblx0XHRcdCRiYXNlICAgPSAkcGFyZW50LnBhcmVudCgpLnBhcmVudCgpLFxyXG5cdFx0XHQkaGlkZGVuID0gJHBhcmVudC5maW5kKCAnZGl2Lndwb25pb24tbWV0YWJveC1zZWN1cmUtZGF0YScgKTtcclxuXHJcblx0XHQkYmFzZS5ibG9jayggeyBtZXNzYWdlOiBudWxsLCBvdmVybGF5Q1NTOiB7IGJhY2tncm91bmQ6ICcjMDAwJywgb3BhY2l0eTogMC43IH0gfSApO1xyXG5cclxuXHRcdCRoaWRkZW4uZmluZCggJ2lucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCAnbmFtZScsIGpRdWVyeSggdGhpcyApLmF0dHIoICdpZCcgKSApO1xyXG5cdFx0fSApO1xyXG5cdFx0bGV0ICRmaWVsZHMgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoICc6aW5wdXQnICk7XHJcblx0XHRsZXQgJHZhbHVlcyA9ICRmaWVsZHMuc2VyaWFsaXplKCk7XHJcblx0XHQkaGlkZGVuLmZpbmQoICdpbnB1dCcgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcclxuXHJcblx0XHQkd3Bvbmlvbi5hamF4KCAnc2F2ZV9tZXRhYm94JywgeyBkYXRhOiAkdmFsdWVzIH0sIGZ1bmN0aW9uKCByZXMgKSB7XHJcblx0XHRcdCRiYXNlLmh0bWwoIHJlcyApO1xyXG5cdFx0XHQkYmFzZS51bmJsb2NrKCk7XHJcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkYmFzZS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApICkucmVsb2FkKCk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcclxuXHQkKCBmdW5jdGlvbigpIHtcclxuXHRcdCQoICdkaXYucG9zdGJveC53cG9uaW9uLW1ldGFib3gnICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdG5ldyBXUE9uaW9uX01ldGFib3hfTW9kdWxlKCAkKCB0aGlzICksIGZhbHNlICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSApO1xyXG5cclxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcclxuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XHJcblxyXG4vKipcclxuICogV1BPbmlvbiBRdWljayBFZGl0IE1vZHVsZSBIYW5kbGVyLlxyXG4gKi9cclxuY2xhc3MgV1BPbmlvbl9RdWlja19FZGl0IGV4dGVuZHMgV1BPbmlvbl9Nb2R1bGUge1xyXG5cdC8qKlxyXG5cdCAqIE1vZHVsZSBJbml0LlxyXG5cdCAqL1xyXG5cdG1vZHVsZV9pbml0KCkge1xyXG5cdFx0dGhpcy5wb3N0X2lkID0gdGhpcy5jb250eHQ7XHJcblx0XHRsZXQgJGlkICAgICAgPSAkd3Bvbmlvbi5maWVsZElEKCB0aGlzLmVsZW1lbnQgKSArICdfJyArIHRoaXMucG9zdF9pZDtcclxuXHRcdHRoaXMudmFsdWVzICA9ICR3cG9uaW9uLmZpZWxkQXJncyggJGlkLCBmYWxzZSApO1xyXG5cclxuXHRcdGlmKCB0aGlzLnZhbHVlcy5odG1sICkge1xyXG5cdFx0XHR0aGlzLnZhbHVlcy5odG1sID0galF1ZXJ5KCB0aGlzLnZhbHVlcy5odG1sICk7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5odG1sKCB0aGlzLnZhbHVlcy5odG1sLmZpbmQoICc+IGRpdicgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCB0aGlzLmVsZW1lbnQgKS5yZWxvYWQoKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkLCB3cCApID0+IHtcclxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRsZXQgJGxpc3QgPSAkKCAnI3RoZS1saXN0JyApO1xyXG5cdFx0aWYoICRsaXN0Lmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdCRsaXN0Lm9uKCAnY2xpY2snLCAnLmVkaXRpbmxpbmUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgcG9zdF9pZCA9IGpRdWVyeSggdGhpcyApLmNsb3Nlc3QoICd0cicgKS5hdHRyKCAnaWQnICk7XHJcblx0XHRcdFx0cG9zdF9pZCAgICAgPSBwb3N0X2lkLnJlcGxhY2UoICdwb3N0LScsICcnICk7XHJcblx0XHRcdFx0JCggJ3RyI2VkaXQtJyArIHBvc3RfaWQgKS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bmV3IFdQT25pb25fUXVpY2tfRWRpdCggalF1ZXJ5KCB0aGlzICksIHBvc3RfaWQgKTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3cCApO1xyXG5cclxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgV1BPbmlvbl9TZXR0aW5nc19Nb2R1bGUgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XHJcblx0LyoqXHJcblx0ICogSW5pdHMgTW9kdWxlLlxyXG5cdCAqL1xyXG5cdG1vZHVsZV9pbml0KCkge1xyXG5cdFx0dGhpcy51aV9tZW51X2hhbmRsZXIoKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xyXG5cdCQoIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCggJ2Rpdi53cG9uaW9uLWZyYW1ld29yay53cG9uaW9uLXNldHRpbmdzJyApLmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRuZXcgV1BPbmlvbl9TZXR0aW5nc19Nb2R1bGUoICQoIHRoaXMgKSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XHJcblxyXG4iLCJpbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4uL2NvcmUvZGVwZW5kZW5jeSc7XHJcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRpb24gZnJvbSAnLi4vY29yZS92YWxpZGF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3cgKSA9PiB7XHJcblx0alF1ZXJ5KCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHQvKipcclxuXHRcdCAqIEdsb2JhbCBWYXJpYWJsZVxyXG5cdFx0ICogd2luZG93Lndwb25pb24udmMgLyB3aW5kb3cud3Bvbmlvbl92Y1xyXG5cdFx0ICogQHR5cGUge3tmaWVsZHM6IHthYnN0cmFjdDogKHtuZXcoKj0sICo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIG5ldygqPSwgKj0sICo9KToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfSwgbmV3KCo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIHByb3RvdHlwZToge3BhcmFtX25hbWU6ICosIHNhdmUoKj0sICopOiAodW5kZWZpbmVkKSwgdmNfc2F2ZSgqPSwgKj0pOiBib29sZWFuLCBzaW1wbGVfYXJyYXkoKik6ICosIGtleV92YWx1ZV9hcnJheSgqPSk6IHN0cmluZywga2V5X3ZhbHVlX211bHRpX2FycmF5KCo9KTogc3RyaW5nLCBzb3J0ZXJfdmFsdWVzKCo9KTogKiwgZW5jb2RlX2NvbnRlbnQoKj0pOiAqLCBpc192Y19wYXJhbV9lbGVtKCo9KTogYm9vbGVhbiwgaW5pdF9zaW5nbGVfZmllbGQ6IHsoKj0sICo9KTogdm9pZCwgKCo9LCAqPSk6IHZvaWR9LCBpbml0KCksIGpzX2Vycm9yKCopOiB2b2lkLCBqc19lcnJvcl9oYW5kbGVyKCo9KTogdm9pZCwganNfdmFsaWRhdG9yKCk6IHZvaWQsIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICgqfCRkYXRhKSwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIG9wdGlvbnMoKTogKiwgb3B0aW9uKCo9LCAqPSk6ICosIGlkKCk6ICosIG1vZHVsZSgpOiAqLCBwbHVnaW5faWQoKTogKiwgYWpheCgqPSwgKj0pOiAqLCBpbml0X2ZpZWxkKCo9LCAqPSk6IHZvaWQsIHJlbG9hZCgpOiAqLCBzZXRfYXJncygqKTogKiwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICgqfGpRdWVyeXxIVE1MRWxlbWVudCksIG1vZHVsZV9pbml0KCksIHNldF9lbGVtZW50KCo9KTogKiwgc2V0X2NvbnR4dCgqKTogKiwgaG9vazogKiwgZWxlbWVudDogKiwgY29udHh0OiAqfX18Kil9fX1cclxuXHRcdCAqL1xyXG5cdFx0d2luZG93Lndwb25pb24udmMgPSB3aW5kb3cud3Bvbmlvbl92YyA9IHtcclxuXHRcdFx0ZmllbGRzOiB7XHJcblx0XHRcdFx0YWJzdHJhY3Q6IHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9maWVsZCcgKS5kZWZhdWx0LFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNpbXBsZSBGdW5jdGlvbiBUbyBJbml0IFdQb25pb24gVkMgTW9kdWxlLlxyXG5cdFx0ICovXHJcblx0XHR3aW5kb3cud3Bvbmlvbl92Y19pbml0ID0gKCkgPT4ge1xyXG5cdFx0XHRsZXQgJGVsZW1lbnQgPSBqUXVlcnkoICcud3Bvbmlvbi1mcmFtZXdvcmsud3Bvbmlvbi1tb2R1bGUtdmMnICk7XHJcblxyXG5cdFx0XHRpZiggJGVsZW1lbnQubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHR3cG9uaW9uX3NldHVwKCk7XHJcblxyXG5cdFx0XHRcdCRlbGVtZW50LmVhY2goIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoIGpRdWVyeSggdGhpcyApICkucmVsb2FkKCk7XHJcblx0XHRcdFx0XHR3aW5kb3cud3Bvbmlvbl92Y19maWVsZCggalF1ZXJ5KCB0aGlzICkgKS5yZWxvYWQoKTtcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdC8qKlxyXG5cdFx0XHRcdCAqIEhhbmRsZXMgV1BPbmlvbiBWQyBGaWVsZCBEZXBlbmRlbmN5LlxyXG5cdFx0XHRcdCAqL1xyXG5cdFx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICRlbGVtZW50LCB7fSwge1xyXG5cdFx0XHRcdFx0bG9nOiBmYWxzZSxcclxuXHRcdFx0XHRcdHNob3c6ICggZWwgKSA9PiB7XHJcblx0XHRcdFx0XHRcdGVsLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnNsaWRlRG93bigpO1xyXG5cdFx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aGlkZTogKCBlbCApID0+IHtcclxuXHRcdFx0XHRcdFx0ZWwucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2xpZGVVcCgpO1xyXG5cdFx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLmFkZENsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0LyoqXHJcblx0XHRcdFx0ICogSGFuZGxlcyBXUE9uaW9uIFZDIEZpZWxkIFZhbGlkYXRpb25zLlxyXG5cdFx0XHRcdCAqL1xyXG5cdFx0XHRcdG5ldyBXUE9uaW9uX1ZhbGlkYXRpb24oIGpRdWVyeSggJy53cGJfZWRpdF9mb3JtX2VsZW1lbnRzJyApICk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBXUG9uaW9uIFZDIEZpZWxkIENsYXNzIEluc3N0YW5jZSBDcmVhdG9yLlxyXG5cdFx0ICogQHBhcmFtICRlbGVtXHJcblx0XHQgKiBAcGFyYW0gJGNvbnR4dFxyXG5cdFx0ICogQHJldHVybnMge3dpbmRvdy53cG9uaW9uLnZjLmZpZWxkcy5hYnN0cmFjdH1cclxuXHRcdCAqL1xyXG5cdFx0d2luZG93Lndwb25pb25fdmNfZmllbGQgPSAoICRlbGVtLCAkY29udHh0ID0ge30gKSA9PiBuZXcgd2luZG93Lndwb25pb24udmMuZmllbGRzLmFic3RyYWN0KCAkZWxlbSwgJGNvbnR4dCApO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRnVuY3Rpb24gVXNlZCBvdXRzaWRlIG9mIFdQT25pb24gVG8gQ3JlYXRlIFZDIEZpZWxkXHJcblx0XHQgKiBAcGFyYW0gJGluaXRfbWV0aG9kXHJcblx0XHQgKiBAcGFyYW0gJG1ldGhvZHNcclxuXHRcdCAqIEByZXR1cm5zIHt7aW5pdDogKiwgbmV3KCk6ICRjbGFzcywgcHJvdG90eXBlOiAkY2xhc3N9fVxyXG5cdFx0ICovXHJcblx0XHR3aW5kb3cud3Bvbmlvbl9jcmVhdGVfdmNfZmllbGQgPSAoICRpbml0X21ldGhvZCwgJG1ldGhvZHMgPSBmYWxzZSApID0+IHtcclxuXHRcdFx0bGV0ICRvcmdfY2xhc3MgPSByZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvZmllbGQnICkuZGVmYXVsdDtcclxuXHRcdFx0bGV0ICRjbGFzcyAgICAgPSBjbGFzcyBleHRlbmRzICRvcmdfY2xhc3Mge1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JGNsYXNzLnByb3RvdHlwZS5pbml0ID0gJGluaXRfbWV0aG9kO1xyXG5cclxuXHRcdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRtZXRob2RzICkgKSB7XHJcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkbWV0aG9kcyApIHtcclxuXHRcdFx0XHRcdGlmKCAkbWV0aG9kcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xyXG5cdFx0XHRcdFx0XHQkY2xhc3MucHJvdG90eXBlWyAka2V5IF0gPSAkbWV0aG9kc1sgJGtleSBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gJGNsYXNzO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIExvYWRzIEFsbCBSZXF1aXJlZCBGaWVsZHMuXHJcblx0XHQgKi9cclxuXHRcdHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9zaW5nbGUtdmFsdWUnICk7XHJcblx0XHRyZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvYWxsLWZpZWxkcycgKTtcclxuXHRcdHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9zZWxlY3QnICk7XHJcblx0XHRyZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvY2hlY2tib3gtcmFkaW8nICk7XHJcblx0fSApO1xyXG59ICkoIHdpbmRvdyApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9WQ19GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSW5pdHMgRmllbGQuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdGlmKCB0aGlzLmlzX3ZjX3BhcmFtX2VsZW0oKSApIHtcclxuXHRcdFx0dGhpcy5pbnB1dF9jaGFuZ2UoKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5pbnB1dF9jaGFuZ2UoKSApO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQub24oICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJywgKCkgPT4gdGhpcy5pbnB1dF9jaGFuZ2UoKSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gSG9va3MgV2l0aCA6aW5wdXQgY2hhbmdlIGV2ZW4gYW5kIHRyaWdnZXJzIHNhdmUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0aW5wdXRfY2hhbmdlKCkge1xyXG5cdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XHJcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHtcclxuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdrZXl2YWx1ZV9wYWlyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xyXG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2JhY2tncm91bmQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfbGlua3MnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZmllbGRzZXQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYWNjb3JkaW9uJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xyXG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dyb3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xyXG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2pxdWVyeV90YWInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc29ydGVyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xyXG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2Nsb25lX2VsZW1lbnQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZm9udF9zZWxlY3RvcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcclxuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdkYXRlX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcclxufSApKCB3aW5kb3cgKTtcclxuXHJcbiIsImltcG9ydCBXUE9uaW9uX1ZDX0ZpZWxkIGZyb20gJy4vZmllbGQnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0aWYoIHRoaXMuaXNfdmNfcGFyYW1fZWxlbSgpICkge1xyXG5cdFx0XHRpZiggdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1lbGVtZW50LXJhZGlvJyApICYmIDAgPT09IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tY2hlY2tib3gtcmFkaW8tZ3JvdXAnICkubGVuZ3RoICkge1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlKCk7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZSgpICk7XHJcblx0XHRcdH0gZWxzZSBpZiggKCB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmxlbmd0aCA+IDEgKSApIHtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZSgpO1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5oYW5kbGUoKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XHJcblx0XHRcdFx0bGV0ICR2YWwgID0gdGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5hdHRyKCAndmFsdWUnICk7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5hdHRyKCAnZGF0YS1vcmd2YWwnLCAkdmFsICk7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JHRoaXMuaGFuZGxlX3NpbmdsZV9jaGFuZ2UoIGpRdWVyeSggdGhpcyApICk7XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkdGhpcy5oYW5kbGVfc2luZ2xlX2NoYW5nZSggalF1ZXJ5KCB0aGlzICkgKTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgU2luZ2xlIENoZWNrYm94IENoYW5nZSBFdmVudHMuXHJcblx0ICogQHBhcmFtICRlbGVtXHJcblx0ICovXHJcblx0aGFuZGxlX3NpbmdsZV9jaGFuZ2UoICRlbGVtICkge1xyXG5cdFx0aWYoICRlbGVtLmlzKCAnOmNoZWNrZWQnICkgKSB7XHJcblx0XHRcdCRlbGVtLnZhbCggJGVsZW0uYXR0ciggJ2RhdGEtb3JndmFsJyApICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkZWxlbS52YWwoICdmYWxzZScgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgTXVsdGlwbGUgQ2hlY2tib3hlc1xyXG5cdCAqL1xyXG5cdGhhbmRsZSgpIHtcclxuXHRcdHRoaXMuc2F2ZSggdGhpcy5pbnB1dF9kYXRhKCksICdzb3J0ZXJfdmFsdWVzJyApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY2hlY2tib3hfcmFkaW8nLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2Vfc2VsZWN0JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xyXG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BhbGV0dGUnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc3dpdGNoZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcbn0gKSggd2luZG93ICk7XHJcbiIsIi8qIGdsb2JhbCB3cG9uaW9uX2luaXRfZmllbGQ6dHJ1ZSAqL1xyXG5pbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi8uLi9jb3JlL2ZpZWxkJztcclxuXHJcbmNvbnN0IGJhc2U2NF9lbmNvZGUgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5iYXNlNjRfZW5jb2RlO1xyXG5jb25zdCByYXd1cmxlbmNvZGUgID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkucmF3dXJsZW5jb2RlO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWQyBBYnN0cmFjdCBGaWVsZCBDbGFzcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXHJcblx0ICogQHBhcmFtICRjb250ZXh0XHJcblx0ICogQHBhcmFtICRjb25maWdcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udGV4dCwgJGNvbmZpZyA9IHt9ICkge1xyXG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQsICRjb25maWcgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgVmlzdWFsIENvbXBvc2VyIFBhcmFtIG5hbWUuXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0Z2V0IHBhcmFtX25hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmRhdGEoICdwYXJhbS1uYW1lJyApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIEFuZCBDb252ZXJ0cyBWYWx1ZSBUbyBTYXZlIGludG8gVkMuXHJcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcclxuXHQgKiBAcGFyYW0gJHR5cGVcclxuXHQgKi9cclxuXHRzYXZlKCAkc2F2ZV9kYXRhLCAkdHlwZSApIHtcclxuXHRcdGlmKCAkc2F2ZV9kYXRhID09PSBudWxsICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0ICR2YWx1ZSA9ICcnO1xyXG5cclxuXHRcdGlmKCAkc2F2ZV9kYXRhICE9PSAnJyApIHtcclxuXHRcdFx0aWYoIHR5cGVvZiAkc2F2ZV9kYXRhID09PSAnb2JqZWN0JyAmJiAkdHlwZSA9PT0gJ2FycmF5JyApIHtcclxuXHRcdFx0XHQkdmFsdWUgPSB0aGlzLnNpbXBsZV9hcnJheSggJHNhdmVfZGF0YSApO1xyXG5cdFx0XHR9IGVsc2UgaWYoIHR5cGVvZiAkc2F2ZV9kYXRhID09PSAnb2JqZWN0JyAmJiAkdHlwZSA9PT0gJ2tleV92YWx1ZV9hcnJheScgKSB7XHJcblx0XHRcdFx0JHZhbHVlID0gdGhpcy5rZXlfdmFsdWVfYXJyYXkoICRzYXZlX2RhdGEgKTtcclxuXHRcdFx0fSBlbHNlIGlmKCB0eXBlb2YgJHNhdmVfZGF0YSA9PT0gJ29iamVjdCcgJiYgJHR5cGUgPT09ICdrZXlfdmFsdWVfbXVsdGlfYXJyYXknICkge1xyXG5cdFx0XHRcdCR2YWx1ZSA9IHRoaXMua2V5X3ZhbHVlX211bHRpX2FycmF5KCAkc2F2ZV9kYXRhICk7XHJcblx0XHRcdH0gZWxzZSBpZiggdHlwZW9mICRzYXZlX2RhdGEgPT09ICdvYmplY3QnICYmICR0eXBlID09PSAnc29ydGVyX3ZhbHVlcycgKSB7XHJcblx0XHRcdFx0JHZhbHVlID0gdGhpcy5zb3J0ZXJfdmFsdWVzKCAkc2F2ZV9kYXRhICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMudmNfc2F2ZSggJHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTYXZlcyBHaXZlbiBWYWx1ZSBUbyBWaXN1YWwgQ29tcG9zZXIuXHJcblx0ICogQHBhcmFtICRwYXJhbV9uYW1lXHJcblx0ICogQHBhcmFtICR2YWx1ZVxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHZjX3NhdmUoICR2YWx1ZSwgJHBhcmFtX25hbWUgPSB0aGlzLnBhcmFtX25hbWUgKSB7XHJcblx0XHRsZXQgJGtleSA9ICdkaXYjd3Bvbmlvbi12Yy1zZXR0aW5ncyc7XHJcblx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICRrZXkgKS5sZW5ndGggPT09IDAgKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoICc8ZGl2IGlkPVwid3Bvbmlvbi12Yy1zZXR0aW5nc1wiIGNsYXNzPVwiaGlkZGVuXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO3Zpc2liaWxpdHk6IGhpZGRlbjtcIiA+PC9kaXY+JyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApLmxlbmd0aCA9PT0gMSApIHtcclxuXHRcdFx0bGV0ICRwYXJlbnQgPSB0aGlzLmVsZW1lbnQuZmluZCggJGtleSApO1xyXG5cdFx0XHRpZiggJHBhcmVudC5maW5kKCAnPiAjJyArICRwYXJhbV9uYW1lICsgJy53cGJfdmNfcGFyYW1fdmFsdWUnICkubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKCBqUXVlcnkoICc8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgaWQ9XCInICsgJHBhcmFtX25hbWUgKyAnXCIgbmFtZT1cIicgKyAkcGFyYW1fbmFtZSArICdcIiBjbGFzcz1cIndwYl92Y19wYXJhbV92YWx1ZVwiIC8+JyApICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRwYXJlbnQuZmluZCggJz4gIycgKyAkcGFyYW1fbmFtZSArICcud3BiX3ZjX3BhcmFtX3ZhbHVlJyApLnZhbCggJHZhbHVlICk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVydHMgQW4gQXJyYXkgSW50byBTdHJpbmcgVXNpbmcgLFxyXG5cdCAqIEBwYXJhbSAkc2F2ZV9kYXRhXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0c2ltcGxlX2FycmF5KCAkc2F2ZV9kYXRhICkge1xyXG5cdFx0cmV0dXJuICRzYXZlX2RhdGEuam9pbiggJywnICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDb252ZXJ0cyBBbiBBcnJheSBJbnRvIEtleXZhbHVlIGFzIGJlbG93XHJcblx0ICoga2V5OnZhbHVlfGtleTI6dmFsdWUyXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gJHNhdmVfZGF0YVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0a2V5X3ZhbHVlX2FycmF5KCAkc2F2ZV9kYXRhICkge1xyXG5cdFx0bGV0ICRyID0gW107XHJcblx0XHRqUXVlcnkuZWFjaCggJHNhdmVfZGF0YSwgZnVuY3Rpb24oICRrLCAkdiApIHtcclxuXHRcdFx0bGV0ICRzID0gJGsgKyAnOicgKyAkdjtcclxuXHRcdFx0JHIucHVzaCggJHMgKTtcclxuXHRcdH0gKTtcclxuXHRcdHJldHVybiAkci5qb2luKCAnfCcgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnZlcnRzIE11bHRpcGxlIEFycmF5IGFzIGJlbG93XHJcblx0ICoga2V5OnZhbHVlLHZhbHVlMnxrZXkyOnZhbHVlMyx2YWx1ZTRcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAkc2F2ZV9kYXRhXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRrZXlfdmFsdWVfbXVsdGlfYXJyYXkoICRzYXZlX2RhdGEgKSB7XHJcblx0XHRsZXQgJHIgPSBbXTtcclxuXHRcdGpRdWVyeS5lYWNoKCAkc2F2ZV9kYXRhLCBmdW5jdGlvbiggJGssICR2ICkge1xyXG5cdFx0XHRpZiggdHlwZW9mICR2ID09PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0XHQkdiA9ICR2LmpvaW4oICcsJyApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCAkcyA9ICRrICsgJzonICsgJHY7XHJcblx0XHRcdCRyLnB1c2goICRzICk7XHJcblx0XHR9ICk7XHJcblx0XHRyZXR1cm4gJHIuam9pbiggJ3wnICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAkc2F2ZV9kYXRhXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0c29ydGVyX3ZhbHVlcyggJHNhdmVfZGF0YSApIHtcclxuXHRcdHJldHVybiB0aGlzLmVuY29kZV9jb250ZW50KCBKU09OLnN0cmluZ2lmeSggJHNhdmVfZGF0YSApICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBFbmNvZGVzIFN0cmluZyBJbnRvIEJhc2U2NC5cclxuXHQgKiBAcGFyYW0gJGRhdGFcclxuXHQgKi9cclxuXHRlbmNvZGVfY29udGVudCggJGRhdGEgKSB7XHJcblx0XHRyZXR1cm4gYmFzZTY0X2VuY29kZSggcmF3dXJsZW5jb2RlKCAkZGF0YSApICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gZWxlbWVudCBpcyBob29rZWQgVG8gVmlzdWFsIENvbXBvc2VyLlxyXG5cdCAqIEBwYXJhbSAkcGFyZW50XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNfdmNfcGFyYW1fZWxlbSggJHBhcmVudCA9IHRoaXMuZWxlbWVudCApIHtcclxuXHRcdGlmKCAkcGFyZW50LmRhdGEoICdwYXJhbS1uYW1lJyApID09PSB1bmRlZmluZWQgfHwgJHBhcmVudC5kYXRhKCAncGFyYW0tbmFtZScgKSA9PT0gJycgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5pdHMgU2luZ2xlIEZpZWxkLlxyXG5cdCAqIEBwYXJhbSAkdHlwZVxyXG5cdCAqIEBwYXJhbSAkZWxlbVxyXG5cdCAqL1xyXG5cdGluaXRfc2luZ2xlX2ZpZWxkKCAkdHlwZSwgJGVsZW0gKSB7XHJcblx0XHR3cG9uaW9uX2luaXRfZmllbGQoICR0eXBlLCAkZWxlbSwgJ3ZjJywgZmFsc2UgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnZlcnRzIElucHV0IFZhbHVlcyBJbnRvIEpTL1BIUCBPYmplY3QvQXJyYXkgYW5kIHJldHVybnMgaXQuXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0aW5wdXRfZGF0YSgpIHtcclxuXHRcdGxldCAkZGF0YSA9IHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0Om5vdCgud3BiX3ZjX3BhcmFtX3ZhbHVlKScgKS5zZXJpYWxpemVKU09OKCk7XHJcblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRkYXRhWyB0aGlzLnBhcmFtX25hbWUgXSApICkge1xyXG5cdFx0XHRyZXR1cm4gJGRhdGFbIHRoaXMucGFyYW1fbmFtZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICRkYXRhO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcclxuXHJcbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9WQ19GaWVsZCB7XHJcblx0LyoqXHJcblx0ICogSW5pdHMgRmllbGQuXHJcblx0ICovXHJcblx0aW5pdCgpIHtcclxuXHRcdGlmKCB0aGlzLmlzX3ZjX3BhcmFtX2VsZW0oKSApIHtcclxuXHRcdFx0bGV0ICRzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdCcgKTtcclxuXHRcdFx0aWYoICRzZWxlY3QubGVuZ3RoID09PSAxICYmICdtdWx0aXBsZScgPT09ICRzZWxlY3QuYXR0ciggJ211bHRpcGxlJyApICkge1xyXG5cdFx0XHRcdHRoaXMuc2F2ZSggJHNlbGVjdC52YWwoKSwgJ2FycmF5JyApO1xyXG5cdFx0XHRcdCRzZWxlY3Qub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNhdmUoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCksICdhcnJheScgKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHtcclxuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XHJcbn0gKSggd2luZG93ICk7XHJcbiIsImltcG9ydCBXUE9uaW9uX1ZDX0ZpZWxkIGZyb20gJy4vZmllbGQnO1xyXG5cclxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcclxuXHQvKipcclxuXHQgKiBJbml0cyBGaWVsZC5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0aWYoIHRoaXMuaXNfdmNfcGFyYW1fZWxlbSgpICkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmFkZENsYXNzKCAnd3BiX3ZjX3BhcmFtX3ZhbHVlJyApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB7XHJcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2VfdXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xyXG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcclxuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpY29uX3BpY2tlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcclxuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdnYWxsZXJ5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xyXG59ICkoIHdpbmRvdyApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcclxuXHQkKCAoKSA9PiB7XHJcblx0XHQkKCAnI3dvb2NvbW1lcmNlLXByb2R1Y3QtZGF0YScgKS5vbiggJ3dvb2NvbW1lcmNlX3ZhcmlhdGlvbnNfbG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAnLndwb25pb24tZnJhbWV3b3JrLndwb25pb24td29vY29tbWVyY2UtdmFyaWF0aW9uJyApLnJlbG9hZCgpO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdCQoICcjdmFyaWFibGVfcHJvZHVjdF9vcHRpb25zJyApLm9uKCAnd29vY29tbWVyY2VfdmFyaWF0aW9uc19hZGRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJy53cG9uaW9uLWZyYW1ld29yay53cG9uaW9uLXdvb2NvbW1lcmNlLXZhcmlhdGlvbicgKS5yZWxvYWQoKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XHJcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgJCApID0+IHtcclxuXHQkLmZuLldQT25pb25fb25BdmFpbGFibGUgPSBmdW5jdGlvbiggZm4gKSB7XHJcblx0XHRsZXQgc2VsID0gdGhpcy5zZWxlY3RvcixcclxuXHRcdFx0dGltZXI7XHJcblx0XHRpZiggdGhpcy5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRmbi5jYWxsKCB0aGlzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aW1lciA9IHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiggJCggc2VsICkubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHRcdGZuLmNhbGwoICQoIHNlbCApICk7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKCB0aW1lciApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMzAwICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0d2luZG93Lndwb25pb25fd3BfcG9pbnRlcl9jcmVhdGUgPSAoKSA9PiB7XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRsZXQgJHBvaW50ZXJzX2dyb3VwID0gJHdwb25pb24ud2luZG93QXJncyggJ3dwX3BvaW50ZXJzJywgZmFsc2UgKTtcclxuXHJcblx0XHRpZiggJHBvaW50ZXJzX2dyb3VwICkge1xyXG5cdFx0XHRmb3IoIGxldCAkZ3JvdXBfaWQgaW4gJHBvaW50ZXJzX2dyb3VwICkge1xyXG5cdFx0XHRcdGlmKCAhJHBvaW50ZXJzX2dyb3VwLmhhc093blByb3BlcnR5KCAkZ3JvdXBfaWQgKSApIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Zm9yKCBsZXQgJHBvaW50ZXJfa2V5IGluICRwb2ludGVyc19ncm91cFsgJGdyb3VwX2lkIF0gKSB7XHJcblx0XHRcdFx0XHRpZiggISRwb2ludGVyc19ncm91cFsgJGdyb3VwX2lkIF0uaGFzT3duUHJvcGVydHkoICRwb2ludGVyX2tleSApICkge1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgJHBvaW50ZXIgPSAkcG9pbnRlcnNfZ3JvdXBbICRncm91cF9pZCBdWyAkcG9pbnRlcl9rZXkgXTtcclxuXHJcblxyXG5cdFx0XHRcdFx0JCggJHBvaW50ZXIuc2VsZWN0b3IgKS5XUE9uaW9uX29uQXZhaWxhYmxlKCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKCAhJHBvaW50ZXIuc2hvdyApIHtcclxuXHRcdFx0XHRcdFx0XHQkcG9pbnRlci5zaG93ID0gJ29wZW4nO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgJGhhbmRsZXIgPSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJzxoMz4nICsgJHBvaW50ZXIudGl0bGUgKyAnPC9oMz48cD4nICsgJHBvaW50ZXIudGV4dCArICc8L3A+JyxcclxuXHRcdFx0XHRcdFx0XHRwb2ludGVyV2lkdGg6IHBhcnNlSW50KCAkcG9pbnRlci53aWR0aCApLFxyXG5cdFx0XHRcdFx0XHRcdHBvaW50ZXJDbGFzczogJ3dwLXBvaW50ZXIgcG9pbnRlcnBsdXMnICsgJHBvaW50ZXIuY2xhc3MsXHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRcdGVkZ2U6ICRwb2ludGVyLmVkZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRhbGlnbjogJHBvaW50ZXIuYWxpZ25cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGNsb3NlOiAoKSA9PiAkLnBvc3QoIHdpbmRvdy5hamF4dXJsLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRwb2ludGVyOiAkcG9pbnRlcl9rZXksXHJcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdkaXNtaXNzLXdwLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0fSApLFxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0JGhhbmRsZXIuYnV0dG9ucyA9IGZ1bmN0aW9uKCBldmVudCwgdCApIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgJGJ1dHRvbjtcclxuXHRcdFx0XHRcdFx0XHRpZiggJHBvaW50ZXIuanNuZXh0ICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGpzbmV4dCA9IG5ldyBGdW5jdGlvbiggJ3QnLCAnJCcsICRwb2ludGVyLmpzbmV4dCApO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGpzbmV4dCggdCwgalF1ZXJ5ICk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmKCAkcG9pbnRlci5uZXh0ICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JGJ1dHRvbiA9IGpRdWVyeSggJzxhIGlkPVwicG9pbnRlci1jbG9zZVwiIGNsYXNzPVwiYnV0dG9uIGFjdGlvblwiPk5leHQ8L2E+JyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0JGJ1dHRvbi5iaW5kKCAnY2xpY2sucG9pbnRlcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0LmVsZW1lbnQucG9pbnRlciggJ2Nsb3NlJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgJG5leHQgPSAkcG9pbnRlcnNfZ3JvdXBbICRncm91cF9pZCBdWyAkcG9pbnRlci5uZXh0IF07XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggZmFsc2UgPT09ICRuZXh0LnBhcmVudCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICRuZXh0LnNlbGVjdG9yICkucG9pbnRlciggJ29wZW4nICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRuZXh0Lmluc3RhbmNlICkgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCAkbmV4dC5zZWxlY3RvciApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucG9pbnRlciggJG5leHQuaW5zdGFuY2UgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnBvaW50ZXIoICdvcGVuJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggJG5leHQuaWNvbl9jbGFzcyAhPT0gJycgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JCggJy5wcC0nICsgJHBvaW50ZXIubmV4dCArICcgLnBwLXBvaW50ZXItY29udGVudCBoMycgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCAnZGFzaGljb25zLWJlZm9yZScgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCAkbmV4dC5pY29uX2NsYXNzICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAkYnV0dG9uO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgY2xvc2UgID0gJ0Rpc21pc3MnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRidXR0b24gPSBqUXVlcnkoICc8YSBjbGFzcz1cImNsb3NlXCIgaHJlZj1cIiNcIj4nICsgY2xvc2UgKyAnPC9hPicgKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBidXR0b24uYmluZCggJ2NsaWNrLnBvaW50ZXInLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0LmVsZW1lbnQucG9pbnRlciggJ2Nsb3NlJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0aWYoIGZhbHNlID09PSAkcG9pbnRlci5wYXJlbnQgKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHNldHVwID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCggJHBvaW50ZXIuc2VsZWN0b3IgKS5wb2ludGVyKCAkaGFuZGxlciApLnBvaW50ZXIoICRwb2ludGVyLnNob3cgKTtcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdHNldHVwKCk7XHJcblx0XHRcdFx0XHRcdFx0JGhhbmRsZXIgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdCRwb2ludGVyc19ncm91cFsgJGdyb3VwX2lkIF1bICRwb2ludGVyX2tleSBdLmluc3RhbmNlID0gJGhhbmRsZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciggbGV0ICRpZCBpbiAkcG9pbnRlcnNfZ3JvdXAgKSB7XHJcblx0XHRcdFx0aWYoICRwb2ludGVyc19ncm91cC5oYXNPd25Qcm9wZXJ0eSggJGlkICkgKSB7XHJcblx0XHRcdFx0XHRmb3IoIGxldCAkcGlkIGluICRwb2ludGVyc19ncm91cFsgJGlkIF0gKSB7XHJcblx0XHRcdFx0XHRcdGlmKCAkcG9pbnRlcnNfZ3JvdXBbICRpZCBdLmhhc093blByb3BlcnR5KCAkcGlkICkgKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0ICRwb2ludGVyID0gJHBvaW50ZXJzX2dyb3VwWyAkaWQgXVsgJHBpZCBdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggJHBvaW50ZXJzX2dyb3VwWyAkaWQgXVsgJHBvaW50ZXIubmV4dCBdICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cdGpRdWVyeSggJHBvaW50ZXJzX2dyb3VwWyAkaWQgXVsgJHBvaW50ZXIubmV4dCBdLnNlbGVjdG9yICkucG9pbnRlciggJ2Nsb3NlJyApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gKTtcclxufSApKCB3aW5kb3csIGpRdWVyeSApO1xyXG4iLCJpbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRvciBmcm9tICcuL2NvcmUvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVIb29rcyB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG4vLyBWU1AgSlMgSGVscGVyIEdsb2JhbC5cbndpbmRvdy52c3BfanNfaGVscGVyID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICk7XG5cbnJlcXVpcmUoICcuL2hlbHBlcnMvZnVuY3Rpb25zJyApO1xuXG4vLyBXUE9uaW9uIENvcmUgU291cmNlLlxud2luZG93Lndwb25pb24gPSB3aW5kb3cud3BvbmlvbiB8fCBPYmplY3QuY3JlYXRlKCB7XG5cdC8qKlxuXHQgKiBMb2Rhc2ggbm9Db25mbGljdCBWYXJpYWJsZS5cblx0ICovXG5cdF86IHdpbmRvdy5sb2Rhc2gubm9Db25mbGljdCgpLFxuXG5cdC8qKlxuXHQgKiBDdXJhdGVkIGNvbGxlY3Rpb24gb2YgdXNlZnVsIEphdmFTY3JpcHQgc25pcHBldHMuXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvdnNwLWpzLWhlbHBlclxuXHQgKi9cblx0aGVscGVyOiB3aW5kb3cudnNwX2pzX2hlbHBlcixcblxuXHQvKipcblx0ICogQSBsaWdodHdlaWdodCAmIGVmZmljaWVudCBFdmVudE1hbmFnZXIgZm9yIEphdmFTY3JpcHQuXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQHdvcmRwcmVzcy9ob29rc1xuXHQgKi9cblx0aG9va3M6IGNyZWF0ZUhvb2tzKCksXG59ICk7XG5cbi8qKlxuICogV1BvbmlvbiBNb2R1bGVzLlxuICovXG53aW5kb3cud3Bvbmlvbi5zZXR0aW5ncyA9IHJlcXVpcmUoICcuL21vZHVsZXMvc2V0dGluZ3MnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLm1ldGFib3ggICAgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvbWV0YWJveCcgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24ud3BfcG9pbnRlcnMgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy93cC1wb2ludGVycycgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24ubWVkaWFfZmllbGRzICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9tZWRpYS1maWVsZHMnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLmJ1bGtfZWRpdCAgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvYnVsay1lZGl0JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5ndXR0ZW5iZXJnICAgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL2d1dHRlbmJlcmcnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLndvb2NvbW1lcmNlICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvd29vY29tbWVyY2UnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLnF1aWNrX2VkaXQgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvcXVpY2stZWRpdCcgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24udmlzdWFsX2NvbXBvc2VyID0gcmVxdWlyZSggJy4vbW9kdWxlcy92aXN1YWwtY29tcG9zZXInICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLm1vZGFsICAgICAgICAgICA9IHJlcXVpcmUoICcuLi92ZW5kb3JzL2JhY2tib25lLW1vZGFsJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5hamF4ZXIgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2FqYXhlcicgKS5XUE9uaW9uX0FqYXhlcjtcbndpbmRvdy53cG9uaW9uLmFqYXggICAgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvYWpheGVyJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5kZWJ1ZyAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2RlYnVnJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5jb3JlICAgICAgICAgICAgPSByZXF1aXJlKCAnLi9jb3JlL2NvcmUnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0ICA9IHJlcXVpcmUoICcuL2NvcmUvZmllbGQnICkuZGVmYXVsdDtcblxucmVxdWlyZSggJy4vd3Bvbmlvbi1maWVsZHMnICk7XG5cbm1vZHVsZS5leHBvcnRzID0gKCAoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCAkICkgPT4ge1xuXHQvLyBEb2N1bWVudCBPbiBMb2FkLlxuXHQkKCAoKSA9PiB7XG5cdFx0d2luZG93Lndwb25pb25fc2V0dXAoKTtcblx0XHRsZXQgJHdwb2ZfZGl2ID0gJCggJy53cG9uaW9uLWZyYW1ld29yazpub3QoLndwb25pb24tbW9kdWxlLXF1aWNrX2VkaXQtZnJhbWV3b3JrKScgKTtcblx0XHRpZiggJHdwb2ZfZGl2Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX3RoZW1lX2luaXQnLCAkKCB0aGlzICkgKTtcblx0XHRcdH0gKTtcblx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl90aGVtZV9pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Ly8gV2luZG93IE9uIExvYWQuXG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICggKCkgPT4ge1xuXG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9pbml0JyApO1xuXG5cdFx0bGV0ICR3cG9mX2RpdiA9ICQoICcud3Bvbmlvbi1mcmFtZXdvcms6bm90KC53cG9uaW9uLW1vZHVsZS1xdWlja19lZGl0LWZyYW1ld29yayknICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbl9ub3RpY2UoICR3cG9mX2Rpdi5maW5kKCAnLndwb25pb24tZWxlbWVudC13cF9ub3RpY2UsIC53cG9uaW9uLWVsZW1lbnQtbm90aWNlJyApICk7XG5cblx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLnN1Ym1lbnVfaW5kaWNhdG9yKCAkKCBkb2N1bWVudCApLmZpbmQoICcud3Bvbmlvbi1zdWJtZW51LWknICkgKTtcblxuXHRcdC8vIFRyaWdnZXJzIEZpZWxkIERlYnVnIERhdGEuXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWZpZWxkLWRlYnVnLWNvZGUgPiBzdHJvbmcnLCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkudG9nZ2xlQ2xhc3MoICdkYXNoaWNvbnMtYXJyb3ctZG93bicgKS50b2dnbGVDbGFzcyggJ2Rhc2hpY29ucy1hcnJvdy1yaWdodCcgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBUcmlnZ2VycyBIb29rIFdpdGggV2lkZ2V0cy5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnd2lkZ2V0LWFkZGVkIHdpZGdldC11cGRhdGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkd2lkZ2V0ICkge1xuXHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICR3aWRnZXQgKS5yZWxvYWQoKTtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICR3aWRnZXQgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBUcmlnZ2VycyBXaGVuIE5ldyBNZW51IEl0ZW0gQWRkZWQuXG5cdFx0JCggZG9jdW1lbnQgKS5vbiggJ21lbnUtaXRlbS1hZGRlZCcsIGZ1bmN0aW9uKCBldmVudCwgJG1lbnUgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJG1lbnUgKS5yZWxvYWQoKTtcblx0XHRcdG5ldyBXUE9uaW9uX0RlcGVuZGVuY3koICRtZW51ICk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR3cG9mX2Rpdi5sZW5ndGggPiAwICkge1xuXHRcdFx0Ly8gUmVuZGVycyBWYWxpZGF0aW9uLlxuXHRcdFx0bmV3IFdQT25pb25fVmFsaWRhdG9yKCk7XG5cblx0XHRcdC8vIEhhbmRsZXMgRmllbGRzIGluaXQuXG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2ZpZWxkc19pbml0JywgJHdwb2ZfZGl2ICk7XG5cdFx0XHQkd3BvZl9kaXYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkKCB0aGlzICkgKS5yZWxvYWQoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJCggdGhpcyApICk7XG5cdFx0XHR9ICk7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYWZ0ZXJfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHR9XG5cblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25faW5pdCcgKTtcblxuXHR9ICkgKTtcblxuXHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fbG9hZGVkJyApO1xuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIHdwLCBqUXVlcnkgKTtcbiIsInJlcXVpcmUoICcuL2ZpZWxkcy90ZXh0JyApO1xyXG5yZXF1aXJlKCAnLi9maWVsZHMvdGV4dGFyZWEnICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9idXR0b25fc2V0JyApO1xyXG5yZXF1aXJlKCAnLi9maWVsZHMvYmFja2dyb3VuZCcgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3NlbGVjdCcgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL3N3aXRjaGVyJyApO1xyXG5yZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGFsZXR0ZScgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdCcgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdDInICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9jaG9zZW4nICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9pY29uX3BpY2tlcicgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2ZvbnRfc2VsZWN0b3InICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9hY2NvcmRpb24nICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9ncm91cCcgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL3dwX2VkaXRvcicgKTtcclxucmVxdWlyZSggJy4vaGVscGVycy9yZWxvYWRfd3BfZWRpdG9yJyApO1xyXG5yZXF1aXJlKCAnLi9maWVsZHMvZmllbGRzZXQnICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9pbnB1dG1hc2snICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy93cF9saW5rcycgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2NoZWNrYm94X3JhZGlvJyApO1xyXG5yZXF1aXJlKCAnLi9maWVsZHMva2V5dmFsdWVfcGFpcicgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2NvbG9yX3BpY2tlcicgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2RhdGVfcGlja2VyJyApO1xyXG5yZXF1aXJlKCAnLi9maWVsZHMvZ2FsbGVyeScgKTtcclxucmVxdWlyZSggJy4vaGVscGVycy9pbWFnZV9wb3B1cCcgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL3VwbG9hZCcgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3VwbG9hZCcgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2pxdWVyeV90YWInICk7XHJcbnJlcXVpcmUoICcuL2hlbHBlcnMvdG9vbHRpcCcgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2Nsb25lX2VsZW1lbnQnICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9zb3J0ZXInICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9nb29nbGVfbWFwcycgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL3R5cG9ncmFwaHknICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9vZW1iZWQnICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9oZWFkaW5nJyApO1xyXG5yZXF1aXJlKCAnLi9maWVsZHMvc3ViaGVhZGluZycgKTtcclxucmVxdWlyZSggJy4vZmllbGRzL2phbWJvX2NvbnRlbnQnICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9ub3RpY2UnICk7XHJcbnJlcXVpcmUoICcuL2ZpZWxkcy9jb250ZW50JyApO1xyXG5yZXF1aXJlKCAnLi9maWVsZHMvYmFja3VwJyApO1xyXG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vanMvY29yZS9jb3JlJztcclxuXHJcbmNvbnN0IFdQT25pb25fV1BfTW9kYWwgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCgge1xyXG5cdHRlbXBsYXRlczoge30sXHJcblxyXG5cdGV2ZW50czoge1xyXG5cdFx0XCJjbGljayAubWVkaWEtbW9kYWwtY2xvc2VcIjogXCJjbG9zZU1vZGFsXCIsXHJcblx0XHRcImNsaWNrICNidG4tY2FuY2VsXCI6IFwiY2xvc2VNb2RhbFwiLFxyXG5cdFx0XCJjbGljayAjYnRuLW9rXCI6IFwic2F2ZU1vZGFsXCIsXHJcblx0XHRcImNsaWNrIC5tZWRpYS1tZW51IGFcIjogXCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrXCIsXHJcblx0XHRcImNsaWNrIC5tZWRpYS1yb3V0ZXIgYVwiOiBcImhhbmRsZV90YWJfY2xpY2tcIixcclxuXHR9LFxyXG5cclxuXHRhY3RpdmVfcGFnZTogbnVsbCxcclxuXHJcblx0YWN0aXZlX3NlY3Rpb246IG51bGwsXHJcblxyXG5cdGluaXRpYWxpemU6ICggb3B0aW9ucyApID0+IHtcclxuXHRcdG9wdGlvbnMgPSBfLmV4dGVuZCgge1xyXG5cdFx0XHRsZWZ0X21lbnU6IGZhbHNlLFxyXG5cdFx0XHRoaWRlX21lbnU6IGZhbHNlLFxyXG5cdFx0XHRodG1sOiBmYWxzZSxcclxuXHRcdH0sIG9wdGlvbnMgKTtcclxuXHJcblx0XHR0aGlzLmxlZnRfbWVudSA9IG9wdGlvbnNbICdsZWZ0X21lbnUnIF07XHJcblx0XHR0aGlzLmh0bWwgICAgICA9IG9wdGlvbnNbICdodG1sJyBdO1xyXG5cdFx0dGhpcy5oaWRlX21lbnUgPSBvcHRpb25zWyAnaGlkZV9tZW51JyBdO1xyXG5cclxuXHRcdF8uYmluZEFsbCggdGhpcywgJ3JlbmRlcicsICdwcmVzZXJ2ZUZvY3VzJywgJ2Nsb3NlTW9kYWwnLCAnc2F2ZU1vZGFsJywgJ2RvTm90aGluZycgKTtcclxuXHRcdHRoaXMuaW5pdF90ZW1wbGF0ZXMoKTtcclxuXHRcdHRoaXMucmVuZGVyKCk7XHJcblx0fSxcclxuXHJcblx0aW5pdF90ZW1wbGF0ZXM6ICgpID0+IHtcclxuXHRcdGxldCAkbSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAkd3Bvbmlvbi5vcHRpb24oICdtb2RhbCcgKTtcclxuXHRcdHRoaXMudGVtcGxhdGVzLmZyYW1lX21lbnVfaXRlbSAgPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdmcmFtZS1tZW51LWl0ZW0nIF0gKTtcclxuXHRcdHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0gPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdyb3V0ZXItbWVudS1pdGVtJyBdICk7XHJcblx0XHR0aGlzLnRlbXBsYXRlcy53aW5kb3cgICAgICAgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAnaHRtbCcgXSApO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZXMucGFnZV9jb250ZW50ICAgICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3BhZ2VfY29udGVudCcgXSApO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50ICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3NlY3Rpb25fY29udGVudCcgXSApO1xyXG5cdH0sXHJcblxyXG5cdHJlbmRlcjogKCkgPT4ge1xyXG5cdFx0J3VzZSBzdHJpY3QnO1xyXG5cdFx0dGhpcy4kZWwuYXR0ciggJ3RhYmluZGV4JywgJzAnICkuYXBwZW5kKCB0aGlzLnRlbXBsYXRlcy53aW5kb3coKSApO1xyXG5cclxuXHRcdGlmKCB0aGlzLmxlZnRfbWVudSApIHtcclxuXHRcdFx0Xy5lYWNoKCB0aGlzLmxlZnRfbWVudSwgKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuJCggJy5tZWRpYS1tZW51JyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtKCB7XHJcblx0XHRcdFx0XHR1cmw6IGtleSxcclxuXHRcdFx0XHRcdG5hbWU6IHZhbHVlLFxyXG5cdFx0XHRcdH0gKSApO1xyXG5cdFx0XHR9IClcclxuXHRcdH1cclxuXHJcblx0XHRpZiggdGhpcy5odG1sICkge1xyXG5cdFx0XHRfLmVhY2goIHRoaXMuaHRtbCwgKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0XHRcdGxldCAkY29udGVudCA9ICQoIHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCgge1xyXG5cdFx0XHRcdFx0aWQ6IGtleSxcclxuXHRcdFx0XHRcdHRpdGxlOiB2YWx1ZVsgJ3RpdGxlJyBdLFxyXG5cdFx0XHRcdFx0aHRtbDogdmFsdWVbICdodG1sJyBdLFxyXG5cdFx0XHRcdH0gKSApO1xyXG5cclxuXHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2VjdGlvbnMnIF0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0Xy5lYWNoKCB2YWx1ZVsgJ3NlY3Rpb25zJyBdLCAoIHZhbCwgayApID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0ICRfY29udGVudCA9IGpRdWVyeSggdGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50KCB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDoga2V5ICsgXCJfXCIgKyBrLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHZhbFsgJ3RpdGxlJyBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0aHRtbDogdmFsWyAnaHRtbCcgXSxcclxuXHRcdFx0XHRcdFx0XHR9ICkgKSxcclxuXHRcdFx0XHRcdFx0XHQkX21lbnUgICAgPSB0aGlzLnRlbXBsYXRlcy5yb3V0ZXJfbWVudV9pdGVtKCB7IHVybDogaywgbmFtZTogdmFsWyAndGl0bGUnIF0gfSApO1xyXG5cclxuXHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsWyAnc2lkZWJhcicgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkX2NvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmFwcGVuZCggdmFsWyAnc2lkZWJhcicgXSApLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtZnJhbWUtY29udGVudCcgKS5hcHBlbmQoICRfY29udGVudCApO1xyXG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXJvdXRlcicgKS5hcHBlbmQoICRfbWVudSApO1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXInICkuYXBwZW5kKCAkY29udGVudCApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IFwidW5kZWZpbmVkXCIgKSB7XHJcblx0XHRcdFx0XHRcdGlmKCB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IGZhbHNlICkge1xyXG5cdFx0XHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbHVlWyAnc2lkZWJhcicgXSApLnNob3coKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XHJcblx0XHRcdFx0XHQkdGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXInICkuYXBwZW5kKCAkY29udGVudCApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gKVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJCggJy5tZWRpYS1tZW51IGE6Zmlyc3QtY2hpbGQnICkudHJpZ2dlciggJ2NsaWNrJyApO1xyXG5cdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAud3Bvbmlvbi1tb2RhbC1jb250ZW50Om5vdCguaGlkZGVuKSAubWVkaWEtZnJhbWUtcm91dGVyIGE6Zmlyc3QtY2hpbGQnIClcclxuXHRcdFx0LnRyaWdnZXIoICdjbGljaycgKTtcclxuXHJcblx0XHRpZiggdGhpcy5oaWRlX21lbnUgPT09IHRydWUgKSB7XHJcblx0XHRcdHRoaXMuJCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtbWVudScgKTtcclxuXHRcdH1cclxuXHJcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub24oIFwiZm9jdXNpblwiLCB0aGlzLnByZXNlcnZlRm9jdXMgKTtcclxuXHRcdGpRdWVyeSggJ2JvZHknICkuY3NzKCB7IFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIiB9ICkuYXBwZW5kKCB0aGlzLiRlbCApO1xyXG5cdFx0dGhpcy4kZWwuZm9jdXMoKTtcclxuXHR9LFxyXG5cclxuXHRoYW5kbGVfbGVmdF9tZW51X2NsaWNrOiAoIGUgKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgJHRhcmdldCA9ICQoIGUudGFyZ2V0ICk7XHJcblx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtbWVudSBhLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcclxuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XHJcblx0XHRsZXQgJHNob3dfdGFyZ2V0ID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiBkaXYjJyArICR0YXJnZXQuYXR0ciggJ2hyZWYnICkgKTtcclxuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2JyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xyXG5cdFx0JHNob3dfdGFyZ2V0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xyXG5cclxuXHRcdGlmKCAkc2hvd190YXJnZXQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuaGFzQ2xhc3MoICdoaWRkZW4nICkgKSB7XHJcblx0XHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy5tZWRpYS1mcmFtZScgKS5hZGRDbGFzcyggJ2hpZGUtcm91dGVyJyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lJyApLnJlbW92ZUNsYXNzKCAnaGlkZS1yb3V0ZXInICk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmFjdGl2ZV9wYWdlICAgID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKTtcclxuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSBudWxsO1xyXG5cdH0sXHJcblxyXG5cdGhhbmRsZV90YWJfY2xpY2s6ICggZSApID0+IHtcclxuXHRcdGxldCAkdGFyZ2V0ICAgICAgICAgPSAkKCBlLnRhcmdldCApO1xyXG5cdFx0dGhpcy5hY3RpdmVfc2VjdGlvbiA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnICk7XHJcblx0XHRsZXQgJHBhZ2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lLW1lbnUgYS5hY3RpdmUnICkuYXR0ciggJ2hyZWYnICk7XHJcblx0XHRsZXQgJGJhc2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKTtcclxuXHJcblxyXG5cdFx0JHRhcmdldC5wYXJlbnQoKS5maW5kKCAnLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcclxuXHRcdCR0YXJnZXQuYWRkQ2xhc3MoICdhY3RpdmUnICk7XHJcblx0XHQkYmFzZS5maW5kKCAnLndwb25pb24tc2VjdGlvbi1tb2RhbC1jb250ZW50JyApLmhpZGUoKTtcclxuXHRcdCRiYXNlLmZpbmQoICcjJyArIHRoaXMuYWN0aXZlX3BhZ2UgKyAnXycgKyB0aGlzLmFjdGl2ZV9zZWN0aW9uICkuc2hvdygpO1xyXG5cdH0sXHJcblxyXG5cdHByZXNlcnZlRm9jdXM6ICggZSApID0+IHtcclxuXHRcdFwidXNlIHN0cmljdFwiO1xyXG5cdFx0aWYoIHRoaXMuJGVsWyAwIF0gIT09IGUudGFyZ2V0ICYmICF0aGlzLiRlbC5oYXMoIGUudGFyZ2V0ICkubGVuZ3RoICkge1xyXG5cdFx0XHR0aGlzLiRlbC5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGNsb3NlTW9kYWw6ICggZSApID0+IHtcclxuXHRcdFwidXNlIHN0cmljdFwiO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XHJcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub2ZmKCBcImZvY3VzaW5cIiApO1xyXG5cdFx0alF1ZXJ5KCBcImJvZHlcIiApLmNzcyggeyBcIm92ZXJmbG93XCI6IFwiYXV0b1wiIH0gKTtcclxuXHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0fSxcclxuXHJcblx0c2F2ZU1vZGFsOiAoIGUgKSA9PiB7XHJcblx0XHRcInVzZSBzdHJpY3RcIjtcclxuXHRcdHRoaXMuY2xvc2VNb2RhbCggZSApO1xyXG5cdH0sXHJcblxyXG5cdGRvTm90aGluZzogZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcInVzZSBzdHJpY3RcIjtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcbn0gKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHRjb25zdHJ1Y3RvciggJG9wdGlvbnMgPSB7fSApIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKCB7XHJcblx0XHRcdGlkOiBmYWxzZSxcclxuXHRcdFx0ZGF0YTogZmFsc2UsXHJcblx0XHRcdGNsYXNzTmFtZTogJ3dwb25pb24tbW9kYWwnLFxyXG5cdFx0XHRtb2RhbDoge30sXHJcblx0XHRcdGhpZGVfbWVudTogZmFsc2UsXHJcblx0XHR9LCAkb3B0aW9ucyApO1xyXG5cclxuXHRcdG5ldyBXUE9uaW9uX1dQX01vZGFsKCBfLmV4dGVuZCgge1xyXG5cdFx0XHRsZWZ0X21lbnU6IHRoaXMuZ2V0X2xlZnRfbWVudSgpLFxyXG5cdFx0XHRodG1sOiB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLFxyXG5cdFx0XHRoaWRlX21lbnU6IHRoaXMub3B0aW9uc1sgJ2hpZGVfbWVudScgXSxcclxuXHRcdH0sIHRoaXMub3B0aW9uc1sgJ21vZGFsJyBdICkgKTtcclxuXHR9XHJcblxyXG5cdGdldF9sZWZ0X21lbnUoKSB7XHJcblx0XHRsZXQgJHJldHVybiA9IGZhbHNlO1xyXG5cdFx0aWYoIHRoaXMub3B0aW9uc1sgJ2RhdGEnIF0gKSB7XHJcblx0XHRcdCRyZXR1cm4gPSB7fTtcclxuXHJcblx0XHRcdF8uZWFjaCggdGhpcy5vcHRpb25zWyAnZGF0YScgXSwgKCAkZGF0YSwgJGtleSApID0+IHtcclxuXHRcdFx0XHQkcmV0dXJuWyAka2V5IF0gPSAoIHR5cGVvZiAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gIT09ICd1bmRlZmluZWQnICkgPyAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gOiAkZGF0YVsgJ3RpdGxlJyBdO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJHJldHVybjtcclxuXHR9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=