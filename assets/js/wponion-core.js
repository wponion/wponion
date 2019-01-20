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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUFkZEhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUN1cnJlbnRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEaWRIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVEb2luZ0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhhc0hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaG9va3MvYnVpbGQtbW9kdWxlL2NyZWF0ZUhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSZW1vdmVIb29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9jcmVhdGVSdW5Ib29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2hvb2tzL2J1aWxkLW1vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVIb29rTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9ob29rcy9idWlsZC1tb2R1bGUvdmFsaWRhdGVOYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXBhcnNlLWFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL21pY3JvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2Z1bmN0aW9uX2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvaW5mby9pbmlfZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9zdHJpbmdzL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9wYXJzZV9zdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3MvcnRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvdXJsL2Jhc2U2NF9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvcmF3dXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC92YXIvaXNfY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3htbC91dGY4X2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2FycmF5X3RvX2h0bWxfYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9hcnJheV90b193aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY29weV90b19jbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvY3NzX3VuaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RldmljZV90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2RpZmZfZGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9mb3JtYXRfZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfYWZ0ZXJfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19iZWZvcmVfZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc19qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvaXNfc2FtZV9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3RhYl9mb2N1c2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL2lzX3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9pc193aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BpcGVfbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3BsYWluX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9xdWVyeV9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvcmFuZF9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvc2Nyb2xsX3Bvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy9zY3JvbGxfdG9fdG9wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RpbWVfdGFrZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdG9fanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c3AtanMtaGVscGVyL3BhcnRzL3RvX2pzX2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZzcC1qcy1oZWxwZXIvcGFydHMvdXJsX3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy92YWxpZGF0ZVNpbmdsZUpTRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnNwLWpzLWhlbHBlci9wYXJ0cy93aW5kb3dfYXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JkcHJlc3MtanMtcG9ydHMvZnVuY3Rpb25zL2FkZF9xdWVyeV9hcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29yZHByZXNzLWpzLXBvcnRzL2Z1bmN0aW9ucy90cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9mdW5jdGlvbnMvdW50cmFpbGluZ3NsYXNoaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dvcmRwcmVzcy1qcy1wb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9hamF4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9kZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2JhY2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2J1dHRvbl9zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jaGVja2JveF9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nob3Nlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2Nsb25lX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9jb2xvcl9wYWxldHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29sb3JfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2RhdGVfcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9mb250X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2dvb2dsZV9tYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9oZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvaWNvbl9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbWFnZV91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9qYW1ib19jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvanF1ZXJ5X3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL2tleXZhbHVlX3BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9vZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvc3ViaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmllbGRzL3dwX2xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2ltYWdlX3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9idWxrLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZ3V0dGVuYmVyZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tZWRpYS1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbWV0YWJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9xdWljay1lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvYWxsLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy92aXN1YWwtY29tcG9zZXIvY2hlY2tib3gtcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3Zpc3VhbC1jb21wb3Nlci9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdmlzdWFsLWNvbXBvc2VyL3NpbmdsZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy93b29jb21tZXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy93cC1wb2ludGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd3Bvbmlvbi1jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93cG9uaW9uLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9ycy9iYWNrYm9uZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiJdLCJuYW1lcyI6WyJjcmVhdGVBZGRIb29rIiwiaG9va3MiLCJhZGRIb29rIiwiaG9va05hbWUiLCJuYW1lc3BhY2UiLCJjYWxsYmFjayIsInByaW9yaXR5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlciIsImhhbmRsZXJzIiwiaSIsInNwbGljZSIsIl9fY3VycmVudCIsImZvckVhY2giLCJob29rSW5mbyIsIm5hbWUiLCJjdXJyZW50SW5kZXgiLCJydW5zIiwiY3JlYXRlQ3VycmVudEhvb2siLCJjdXJyZW50SG9vayIsImNyZWF0ZURpZEhvb2siLCJkaWRIb29rIiwiY3JlYXRlRG9pbmdIb29rIiwiZG9pbmdIb29rIiwiY3JlYXRlSGFzSG9vayIsImhhc0hvb2siLCJjcmVhdGVIb29rcyIsImFjdGlvbnMiLCJPYmplY3QiLCJjcmVhdGUiLCJmaWx0ZXJzIiwiYWRkQWN0aW9uIiwiYWRkRmlsdGVyIiwicmVtb3ZlQWN0aW9uIiwicmVtb3ZlRmlsdGVyIiwiaGFzQWN0aW9uIiwiaGFzRmlsdGVyIiwicmVtb3ZlQWxsQWN0aW9ucyIsInJlbW92ZUFsbEZpbHRlcnMiLCJkb0FjdGlvbiIsImFwcGx5RmlsdGVycyIsImN1cnJlbnRBY3Rpb24iLCJjdXJyZW50RmlsdGVyIiwiZG9pbmdBY3Rpb24iLCJkb2luZ0ZpbHRlciIsImRpZEFjdGlvbiIsImRpZEZpbHRlciIsImNyZWF0ZVJlbW92ZUhvb2siLCJyZW1vdmVBbGwiLCJyZW1vdmVIb29rIiwiaGFuZGxlcnNSZW1vdmVkIiwiX2xvb3AiLCJjcmVhdGVSdW5Ib29rIiwicmV0dXJuRmlyc3RBcmciLCJydW5Ib29rcyIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwicHVzaCIsInJlc3VsdCIsImFwcGx5IiwicG9wIiwiX2NyZWF0ZUhvb2tzIiwidmFsaWRhdGVIb29rTmFtZSIsInRlc3QiLCJ2YWxpZGF0ZU5hbWVzcGFjZSIsIkpTX1BhcnNlX0FyZ3MiLCIkYXJncyIsIiRkZWZhdWx0cyIsIiRpc19uZXN0ZWQiLCJkZWZhdWx0cyIsIm5lc3RlZCIsInBhcnNlIiwiJF9rZXkiLCIkaXNfZGVlcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtaWNyb3RpbWUiLCJnZXRBc0Zsb2F0IiwicyIsIm5vdyIsInBlcmZvcm1hbmNlIiwidGltaW5nIiwibmF2aWdhdGlvblN0YXJ0IiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJjYWxsX3VzZXJfZnVuYyIsImNiIiwicGFyYW1ldGVycyIsImNhbGxVc2VyRnVuY0FycmF5IiwicmVxdWlyZSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiY2FsbF91c2VyX2Z1bmNfYXJyYXkiLCIkZ2xvYmFsIiwid2luZG93IiwiZ2xvYmFsIiwiZnVuYyIsInNjb3BlIiwidmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4iLCJtYXRjaCIsIkZ1bmN0aW9uIiwidG9TdHJpbmciLCJldmFsIiwiRXJyb3IiLCJjcmVhdGVfZnVuY3Rpb24iLCJjb2RlIiwic3BsaXQiLCJjb25jYXQiLCJlIiwiZnVuY3Rpb25fZXhpc3RzIiwiZnVuY05hbWUiLCJpbmlfZ2V0IiwidmFybmFtZSIsIiRsb2N1dHVzIiwicGhwIiwiaW5pIiwibG9jYWxfdmFsdWUiLCJtZDUiLCJzdHIiLCJoYXNoIiwiY3J5cHRvIiwibWQ1c3VtIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsInV0ZjhFbmNvZGUiLCJ4bCIsIl9yb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsIl9hZGRVbnNpZ25lZCIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiX0YiLCJ4IiwieSIsInoiLCJfRyIsIl9IIiwiX0kiLCJfRkYiLCJhIiwiYiIsImMiLCJkIiwiYWMiLCJfR0ciLCJfSEgiLCJfSUkiLCJfY29udmVydFRvV29yZEFycmF5IiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNUZW1wMSIsImxOdW1iZXJPZldvcmRzVGVtcDIiLCJsTnVtYmVyT2ZXb3JkcyIsImxXb3JkQXJyYXkiLCJsQnl0ZVBvc2l0aW9uIiwibEJ5dGVDb3VudCIsImNoYXJDb2RlQXQiLCJfd29yZFRvSGV4Iiwid29yZFRvSGV4VmFsdWUiLCJ3b3JkVG9IZXhWYWx1ZVRlbXAiLCJsQnl0ZSIsImxDb3VudCIsInN1YnN0ciIsImsiLCJBQSIsIkJCIiwiQ0MiLCJERCIsIlMxMSIsIlMxMiIsIlMxMyIsIlMxNCIsIlMyMSIsIlMyMiIsIlMyMyIsIlMyNCIsIlMzMSIsIlMzMiIsIlMzMyIsIlMzNCIsIlM0MSIsIlM0MiIsIlM0MyIsIlM0NCIsInRlbXAiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlX3N0ciIsImFycmF5Iiwic3RyQXJyIiwiU3RyaW5nIiwicmVwbGFjZSIsInNhbCIsImoiLCJjdCIsInAiLCJsYXN0T2JqIiwiY2hyIiwidG1wIiwia2V5IiwidmFsdWUiLCJwb3N0TGVmdEJyYWNrZXRQb3MiLCJrZXlzIiwia2V5c0xlbiIsIl9maXhTdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGFyQXQiLCJpbmRleE9mIiwiaGFzT3duUHJvcGVydHkiLCJydHJpbSIsImNoYXJsaXN0IiwicmUiLCJSZWdFeHAiLCJzdHJwb3MiLCJoYXlzdGFjayIsIm5lZWRsZSIsIm9mZnNldCIsImJhc2U2NF9kZWNvZGUiLCJlbmNvZGVkRGF0YSIsImRlY29kZVVURjhzdHJpbmciLCJtYXAiLCJqb2luIiwiYXRvYiIsIkJ1ZmZlciIsImI2NCIsIm8xIiwibzIiLCJvMyIsImgxIiwiaDIiLCJoMyIsImg0IiwiYml0cyIsImRlYyIsInRtcEFyciIsImZyb21DaGFyQ29kZSIsImJhc2U2NF9lbmNvZGUiLCJzdHJpbmdUb0VuY29kZSIsImVuY29kZVVURjhzdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b1NvbGlkQnl0ZXMiLCJwMSIsImJ0b2EiLCJlbmMiLCJyIiwiaHR0cF9idWlsZF9xdWVyeSIsImZvcm1kYXRhIiwibnVtZXJpY1ByZWZpeCIsImFyZ1NlcGFyYXRvciIsImVuY1R5cGUiLCJlbmNvZGVGdW5jIiwiX2h0dHBCdWlsZFF1ZXJ5SGVscGVyIiwidmFsIiwiaXNOYU4iLCJxdWVyeSIsInBhcnNlX3VybCIsImNvbXBvbmVudCIsIm1vZGUiLCJwYXJzZXIiLCJzdHJpY3QiLCJsb29zZSIsIm0iLCJleGVjIiwidXJpIiwiJDAiLCIkMSIsIiQyIiwic291cmNlIiwicmF3dXJsZGVjb2RlIiwicmF3dXJsZW5jb2RlIiwidXJsZGVjb2RlIiwidXJsZW5jb2RlIiwiaXNfY2FsbGFibGUiLCJtaXhlZFZhciIsInN5bnRheE9ubHkiLCJjYWxsYWJsZU5hbWUiLCJtZXRob2QiLCJ2YWxpZEZ1bmN0aW9uTmFtZSIsImdldEZ1bmNOYW1lIiwiZm4iLCJ1dGY4X2VuY29kZSIsImFyZ1N0cmluZyIsInN0cmluZyIsInV0ZnRleHQiLCJzdGFydCIsImVuZCIsInN0cmluZ2wiLCJuIiwiYzEiLCJSYW5nZUVycm9yIiwiYzIiLCJwYXJzZV9hcmdzIiwiYXJyYXlfdG9faHRtbF9hdHRyIiwiYXJyYXlfdG9faHRtbCIsImFycmF5X3RvX3dpbmRvdyIsInBsYWluX29iamVjdCIsImlzX2FmdGVyX2RhdGUiLCJpc19iZWZvcmVfZGF0ZSIsImlzX3NhbWVfZGF0ZSIsImZvcm1hdF9kdXJhdGlvbiIsImRpZmZfZGF5cyIsInRpbWVfdGFrZW4iLCJpc191cmwiLCJpc190YWJfZm9jdXNlZCIsImlzX3dpbmRvd19hcmciLCJzY3JvbGxfdG9fdG9wIiwiY29weV90b19jbGlwIiwic2Nyb2xsX3BvcyIsIndpbmRvd19hcmciLCJkZXZpY2VfdHlwZSIsInBpcGVfbG9nIiwidG9fanF1ZXJ5IiwiaXNfanF1ZXJ5IiwidG9fanNfZnVuYyIsImNvdW50ZXIiLCJyYW5kX21kNSIsImNzc191bml0cyIsInVybF9wYXJhbXMiLCJxdWVyeV9zdHJpbmciLCJhcnIiLCJsaXN0SUQiLCJ0YWciLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIml0ZW0iLCIkZGF0YSIsInJldHVybl9odG1sIiwiSSIsIl8iLCJpc09iamVjdCIsIksiLCIkdmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiJGFycmF5IiwiJGtleSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdGVkIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJzZWxlY3RvciIsInN0ZXAiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJfc3RlcCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWJzIiwiZmxvb3IiLCJpc051bWJlciIsImNoZWNrUHgiLCJjaGVja1BjdCIsImNoZWNrRW0iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYXRlSW5pdGlhbCIsImRhdGVGaW5hbCIsIm1zIiwidGltZSIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJtaWxsaXNlY29uZCIsImVudHJpZXMiLCJmaWx0ZXIiLCJkYXRlQSIsImRhdGVCIiwiJGVsZW0iLCJpc1VuZGVmaW5lZCIsImlzU3RyaW5nIiwialF1ZXJ5IiwidG9JU09TdHJpbmciLCJoaWRkZW4iLCIkdXJsIiwicGF0dGVybiIsImxvZyIsImRhdGEiLCJyZWdleCIsInJlc3VsdHMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJhbmRvbSIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRpdGxlIiwidGltZUVuZCIsIiRhcmdzX2tleSIsIiRjb250ZW50c19rZXkiLCJpc0VtcHR5IiwidXJsIiwicmVkdWNlIiwidiIsIiRzdHJpbmciLCIkY29udGVudHMiLCIkX2siLCJhZGRfcXVlcnlfYXJnIiwiaHJlZiIsIiRwYXJzZWQiLCIkcXVlcnkiLCIkZnJhZ21lbnQiLCJmcmFnbWVudCIsInNwbGl0X3VybCIsImJhc2VfdXJsIiwicmVtb3ZlX3F1ZXJ5X2FyZyIsImRlZmF1bHQiLCJ0cmFpbGluZ3NsYXNoaXQiLCJ1bnRyYWlsaW5nc2xhc2hpdCIsIldQT25pb25fQWpheGVyIiwiJGFqYXhfYXJncyIsIiRhamF4X2NvbmZpZyIsImFqYXh1cmwiLCJzdWNjZXNzIiwiYWx3YXlzIiwiYWN0aW9uIiwiZGVmYXVsdF9jb25maWdzIiwicmVzcG9uc2VfZWxlbWVudCIsImJ1dHRvbiIsImVsZW1lbnQiLCJzcGlubmVyIiwiaW5zdGFuY2UiLCJhamF4X2FyZ3MiLCJ3cG9uaW9uIiwibWVyZ2UiLCJhamF4X2NvbmZpZyIsImFqYXgiLCIkY29kZSIsInNpbmdsZV9jYWxsYmFjayIsIiRjYWxsYmFjayIsImlzRnVuY3Rpb24iLCIkY2FsbGJhY2tzIiwiaGFuZGxlX2NhbGxiYWNrcyIsImJ1dHRvbl91bmxvY2siLCJidXR0b25fbG9jayIsIiRjb25maWciLCJjbG9uZSIsIiR1cmxfcGFyYW1zIiwid3AiLCJzZW5kIiwiZG9uZSIsIm9uU3VjY2VzcyIsImZhaWwiLCJvbkVycm9yIiwib25BbHdheXMiLCIkZGVmYXVsdCIsImhhc19jb25maWciLCJjb25maWciLCIkYnV0dG9uIiwid3BvX2J1dHRvbiIsImF0dHIiLCIkc3Bpbm5lciIsImFkZENsYXNzIiwicGFyZW50IiwiYXBwZW5kIiwicmVtb3ZlQXR0ciIsIm5leHQiLCJoYXNDbGFzcyIsInJlbW92ZSIsImZpbmQiLCIkIiwiJGNsYXNzIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiJF9kYXRhIiwiJF9jbGFzc19pbnN0YW5jZSIsIiRmaWQxIiwiJGZpZDIiLCIkanNfaWQiLCIkd3BvbmlvbiIsImZpZWxkSUQiLCIkX2FyZ3MiLCJmaWVsZEFyZ3MiLCJpbmxpbmVfYWpheCIsIldQT25pb24iLCIkd2hlcmVfdG9fZmluZCIsIiRpZCIsIiR2YXJfaWQiLCJpc0ZpZWxkIiwid2luZG93QXJncyIsInRleHQiLCIkaXNfc2hvdyIsImZhZGVJbiIsImZhZGVPdXQiLCIkaGFuZGxlIiwiJGpzb24iLCJkZWJ1Z19pbmZvIiwiJGRlZmluZWRfdmFycyIsInByZXZlbnREZWZhdWx0Iiwic3dhbCIsInR4dCIsImh0bWwiLCJzaG93Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2hvd0Nsb3NlQnV0dG9uIiwiYW5pbWF0aW9uIiwid2lkdGgiLCJvbkJlZm9yZU9wZW4iLCJlbmFibGVMb2FkaW5nIiwib25PcGVuIiwianNvblZpZXciLCJkaXNhYmxlTG9hZGluZyIsInRoZW4iLCJzZXR0aW5nc19hcmdzIiwib3B0aW9uIiwiaXNfZGVidWciLCJpc051bGwiLCJmaWVsZF9kZWJ1Z19pbmZvIiwiJHZhcnMiLCIkdXR4dCIsIiRtdHh0IiwiJGFjdGlvbiIsIiRvblN1Y2Nlc3MiLCIkb25FcnJvciIsIiRvbkFsd2F5cyIsIiRhamF4IiwicmVzIiwiY29tcGlsZWQiLCJvcHRpb25zIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsInZhcmlhYmxlIiwidGVtcGxhdGUiLCIkZWxlbXMiLCJlYWNoIiwiJHRvZ2dsZSIsIiRleF9jbGFzcyIsIiRlbGVtZW50IiwicGFyYW0iLCJuZXN0YWJsZSIsIiR0aGlzIiwiYmFzZSIsIiRlbCIsImluaXQiLCJydWxlc2V0IiwiZGVwcyIsImNyZWF0ZVJ1bGVzZXQiLCJkZXBSb290IiwiJF9kZXBzX2Z1bmN0aW9ucyIsInNob3ciLCJzbGlkZURvd24iLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJzbGlkZVVwIiwiY2hlY2tUYXJnZXRzIiwiZW5hYmxlIiwiV1BPbmlvbl9EZXBlbmRlbmN5IiwiJHNlbGVjdG9yIiwiJGNvbnRleHQiLCJzZXRfYXJncyIsImZpZWxkX2RlYnVnIiwianNfZXJyb3JfaGFuZGxlciIsImpzX3ZhbGlkYXRvciIsImVyciIsImFwcGVuZFRvIiwianNfZXJyb3IiLCJtYXliZV9qc192YWxpZGF0ZV9lbGVtIiwiV1BPbmlvbl9WYWxpZGF0aW9uIiwiZ2V0X2Zvcm0iLCJqc192YWxpZGF0ZV9lbGVtIiwicnVsZXMiLCIkYXJnIiwianNfZnVuYyIsIiRleGlzdHMiLCIkd3Bvbmlvbl9kZWJ1ZyIsImdldCIsImlkIiwiYWRkIiwiJGluZm8iLCIkZm91bmQiLCIkSUQiLCJ0aXBweSIsImNvbnRlbnQiLCJhcnJvdyIsImFycm93VHlwZSIsInBsYWNlbWVudCIsInRoZW1lIiwiZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCIsIiRkIiwiJG5vdGljZV90eHQiLCJoZWlnaHRBdXRvIiwiX2FyZ3MiLCIkYWpheF9rZXkiLCJwbHVnaW5faWQiLCIkdHlwZSIsIndwb25pb25faW5pdF9maWVsZCIsImluaXRfc2luZ2xlX2ZpZWxkIiwiaW5pdF9maWVsZCIsIldQT25pb25fTW9kdWxlIiwic2V0X2VsZW1lbnQiLCJzZXRfY29udHh0IiwibW9kdWxlX2luaXQiLCJlbGVtIiwiJGNvbnR4dCIsImNvbnRleHQiLCJXUE9uaW9uX1ZhbGlkYXRvciIsImZvcm0iLCJpbnZhbGlkSGFuZGxlciIsInNpYmxpbmdzIiwiYmVmb3JlIiwiaWdub3JlIiwiZXJyb3JQbGFjZW1lbnQiLCJ0cmlnZ2VyIiwiZXJyb3JDbGFzcyIsImVycm9yRWxlbWVudCIsInZhbGlkYXRlIiwiZmllbGQiLCJhY2NvcmRpb24iLCJoZWFkZXIiLCJjb2xsYXBzaWJsZSIsImFuaW1hdGUiLCJoZWlnaHRTdHlsZSIsImljb25zIiwiSUR0b0VsZW1lbnQiLCJXUE9uaW9uX0ZpZWxkIiwidyIsIndwb25pb25fcmVnaXN0ZXJfZmllbGQiLCJmaWVsZF9hYnN0cmFjdCIsInRvb2x0aXAiLCJoYW5kbGVfYmFja3VwX2ltcG9ydCIsIiRmaWxlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImZvcmNlX2Rvd25sb2FkIiwiYmxvY2tfZm9ybSIsInVuaXF1ZSIsImV4dHJhIiwiZ2V0X2V4dHJhX3ZhbHVlIiwic3dhbF9lcnJvciIsInVuYmxvY2tfZm9ybSIsIiRpbnMiLCJ0aXBweV9nZXQiLCJpbnN0YW5jZXMiLCJkZXN0cm95IiwiYmFja3VwX2lkIiwicmVzdG9yZV9iYWNrdXAiLCJtc2ciLCJ0eXBlIiwiX3RpcHB5Iiwic2hvd190b29sdGlwIiwiZXhwb3J0T2JqIiwiZXhwb3J0TmFtZSIsImRhdGFTdHIiLCJkb3dubG9hZEFuY2hvck5vZGUiLCJjbGljayIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsInJlYWRBc1RleHQiLCIkYmFja3VwaWQiLCIkYXBwZW5kVE8iLCJpbnRlcmFjdGl2ZSIsIm9uU2hvd24iLCJyZW1vdmVfYWN0aXZlX2NsYXNzIiwiYWRkX2FjdGl2ZV9jbGFzcyIsIiRlIiwiaXMiLCIkY3VzdG9tX2lucHV0IiwiJHJhZGlvcyIsIiRjaGVja2JveCIsIiRpIiwiaGFuZGxlX2FyZ3MiLCJjaG9zZW4iLCIkY2xvbmVfd3JhcCIsIiRhZGRfYnRuIiwiJGxpbWl0IiwibGltaXQiLCIkZXJvcl9tc2ciLCJlcnJvcl9tc2ciLCIkc29ydCIsInNvcnQiLCJpdGVtcyIsImhhbmRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnQiLCJ1aSIsImNzcyIsInN0b3AiLCJXUE9uaW9uQ2xvbmVyIiwiYWRkX2J0biIsImNsb25lX2VsZW0iLCJyZW1vdmVfYnRuIiwidGVtcGxhdGVBZnRlclJlbmRlciIsIndwb25pb25fZmllbGQiLCJyZWxvYWQiLCJvblJlbW92ZUFmdGVyIiwic29ydGFibGUiLCJvbkxpbWl0UmVhY2hlZCIsInByZXBlbmQiLCJ3cG9uaW9uX25vdGljZSIsInNob3dfYW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsImhpZGVfYW5pbWF0aW9uIiwid3BDb2xvclBpY2tlciIsIiRzZXR0aW5ncyIsIiR2aWV3IiwicGx1Z2lucyIsInJhbmdlUGx1Z2luIiwiaW5wdXQiLCJmbGF0cGlja3IiLCIkcmV0dXJuIiwiJF9kIiwiJHZhbCIsIiRodG1sIiwid2Vic2FmZSIsImZvbnRzIiwiYnVpbGRfb3B0aW9ucyIsInZhcmlhbnRzIiwiZ29vZ2xlX2ZvbnRzIiwiJHZhcmlhbnQiLCIkaHRtbF90ZW1wIiwiJGlucHV0IiwiJHByZXZpZXciLCJ3cF9tZWRpYV9mcmFtZSIsIiRhZGQiLCIkZWRpdCIsIiRjbGVhciIsIiRtYW5hZ2UiLCJpZHMiLCJ3aGF0Iiwic3RhdGUiLCJtZWRpYSIsImdhbGxlcnkiLCJsaWJyYXJ5IiwiZnJhbWUiLCJtdWx0aXBsZSIsIm9wZW4iLCJlZGl0Iiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJzZWxlY3RlZElkcyIsIm1vZGVscyIsImF0dGFjaG1lbnQiLCJ0b0pTT04iLCJzaXplcyIsInRodW1iIiwidGh1bWJuYWlsIiwiJHRtcCIsIiRwYXJlbnQiLCIkaW1hZ2VfaWQiLCIkayIsIiR2IiwiY3Vyc29yIiwic2Nyb2xsU2Vuc2l0aXZpdHkiLCJmb3JjZVBsYWNlaG9sZGVyU2l6ZSIsImhlbHBlciIsIm9wYWNpdHkiLCIkaXRlbSIsImhlaWdodCIsIiRtYXAiLCJkZXRhaWxzIiwiZGV0YWlsc0F0dHJpYnV0ZSIsIiRfaW5zdGFuY2UiLCJnZW9jb21wbGV0ZSIsImJpbmQiLCJsYXRMbmciLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJsYXQiLCJwYXJzZUZsb2F0IiwibG5nIiwiJGdyb3VwX3dyYXAiLCIkZXJyb3JfbXNnIiwiYmluZF9ldmVudHNfZm9yX3RpdGxlIiwicGFyc2VJbnQiLCJvblJlbW92ZSIsInVwZGF0ZV9ncm91cHNfdGl0bGUiLCIkbWFjaGVkIiwiJGhlYWRpbmciLCIkX3RoaXMiLCIkcmVtb3ZlX2J0biIsIiR3b3JrIiwiZWxlbXMiLCJwb3B1cCIsImVsbSIsImluaXRfdG9vbHRpcCIsInBvcHVwX3Rvb2x0aXAiLCIkdHAiLCIkZWxtIiwiJGluc3RhbmNlIiwiJGhlaWdodCIsIiRpY29uIiwiY2xvc2VNb2RhbCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsIiRyZXMiLCJyZXNldFZhbGlkYXRpb25NZXNzYWdlIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsIiRwb3B1cCIsImFsbG93T3V0c2lkZUNsaWNrIiwiY3VzdG9tQ2xhc3MiLCIkcG9wdXBfZWxlbSIsIiRwcmV2aWV3X2FkZCIsIm1lZGlhX2luc3RhbmNlIiwiaG9vayIsImZpcnN0IiwiYXR0cmlidXRlcyIsImlucHV0bWFzayIsIiR0aGlzX2VsZW0iLCIkdGFiIiwiZ2xvYmFsX3ZhbGlkYXRlIiwiYWZ0ZXIiLCJlcSIsImltYWdlIiwic2hvd19wcmV2aWV3IiwiZHJvcGRvd25QYXJlbnQiLCJwcm9jZXNzUmVzdWx0cyIsInRlcm1zIiwicGFyYW1zIiwicSIsInRlcm0iLCJxdWVyeV9hcmdzIiwicXVlcnlfb3B0aW9ucyIsInRyYW5zcG9ydCIsImZhaWx1cmUiLCJzZWxlY3QyIiwiJGVuYWJsZWQiLCIkZGlzYWJsZWQiLCJjb25uZWN0V2l0aCIsImZvbnRfd2VpZ2h0X3N0eWxlIiwiJGZvbnRfZmllbGQiLCIkZm9udCIsIiRmb250X3dlaWdodF9zdHlsZSIsImZvbnRfc3R5bGUiLCIkdGFnIiwiJGNvbG9yIiwiJGFsaWduIiwiJGZvbnRTaXplIiwiJGxpbmVIZWlnaHQiLCIkbGV0dGVyU3BhY2luZyIsIndlaWdodCIsIiRfYXR0cnMiLCIkdGV4dCIsIiR3ZWlnaHRfdmFsIiwiJHN0eWxlX3ZhbCIsImZyYW1lX3RpdGxlIiwidXBsb2FkX3R5cGUiLCJpbnNlcnRfdGl0bGUiLCIkdGV4dGFyZWEiLCJ3cExpbmsiLCIkZGVwIiwiY29udHJvbGxlciIsImNvbmRpdGlvbiIsIiRjb250cm9sbGVyIiwiJGNvbmRpdGlvbiIsIiRmaWVsZCIsIiRJTlBVVCIsImNvbnR4dCIsImNyZWF0ZVJ1bGUiLCJpbmNsdWRlIiwiZXh0ZW5kIiwiYW5pbWF0ZUNzcyIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25FbmQiLCJPQW5pbWF0aW9uIiwiTW96QW5pbWF0aW9uIiwiV2Via2l0QW5pbWF0aW9uIiwidCIsIm9uZSIsIiRhcmd1bWVudHMiLCJ0aXBweV9oZWxwZXIiLCJjcmVhdGVfaW5zdGFuY2UiLCIkX2luc3RhbmNlX2lkIiwiY29yZSIsInJhbmRfaWQiLCIkdGl0bGUiLCIkZGF0YV90aXBweSIsImdldF9pbnN0YW5jZSIsIiRzdGF0dXMiLCIkX2VsIiwiJGF1dG8iLCJzZXRUaW1lb3V0Iiwid3Bvbmlvbl9zZXR1cCIsIiRjb3JlIiwiJHRhbnMiLCIkbW9kdWxlIiwid3Bvbmlvbl9jcmVhdGVfZmllbGQiLCIkaW5pdF9tZXRob2QiLCIkbWV0aG9kcyIsIiRvcmdfY2xhc3MiLCIkZmllbGRfdHlwZSIsIiRhcmd1bWVudCIsIiRsb2dfZXJyIiwiJGltYWdlIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3AiLCIkbWNlX2VkaXRvciIsInRpbnlNQ0VQcmVJbml0IiwibWNlSW5pdCIsIiRxdWlja190YWdzIiwicXRJbml0IiwiJE5FV19JRCIsIiR0ZXh0QXJlYSIsIiRhY3R1YWxfSUQiLCIkYWN0dWFsX2h0bWwiLCIkcmVnZXgiLCJ0aW55bWNlIiwidGlueU1DRSIsInF1aWNrdGFncyIsIiRmaWQiLCIkdG9vbHRpcF9rZXkiLCJ2YWxpZF9qc29uIiwiaXNGZXRjaGluZyIsImNhbkZldGNoIiwiJGNsYXNzVG9DaGVjayIsIiRhdHRyIiwidXBkYXRlRHVyYXRpb24iLCJvblNob3ciLCJ0aXAiLCJyZXNwb25zZSIsImZldGNoIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImlzVmlzaWJsZSIsInNldENvbnRlbnQiLCJvbkhpZGRlbiIsInBvcHBlck9wdGlvbnMiLCJtb2RpZmllcnMiLCJwcmV2ZW50T3ZlcmZsb3ciLCJpY29uIiwiJGZpbmFsX2FyZ3MiLCJwb3N0X2lkcyIsIiRidWxrX2VkaXQiLCJjaGlsZHJlbiIsInNlcmlhbGl6ZU9iamVjdCIsImFzeW5jIiwiY2FjaGUiLCJXUE9uaW9uX0d1dHRlbmJlcmciLCJzYXZlIiwiYmxvY2siLCJzYXZlX2hhbmRsZXIiLCJlZGl0X2hhbmRsZXIiLCJibG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsIiRfcG9zdGlkcyIsInBvc3RfaWQiLCJibG9ja19pZCIsImNsaWVudElkIiwiJHJlbW90ZSIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwiZWRpdG9yIiwiJHdwb19ibG9ja3MiLCJpc0FycmF5IiwiZml4X21lZGlhX3VpIiwiJHRhYmxlIiwiJGZpZWxkcyIsImZyYW1lcyIsImJyb3dzZSIsIldQT25pb25fTWV0YWJveF9Nb2R1bGUiLCJtZW51Iiwic2xpZGVUb2dnbGUiLCIkaHJlZiIsIiRzZWN0aW9uIiwiJHBhcmVudF9hY3RpdmVzIiwiJGN1cnJlbnQiLCIkYmFzZSIsIiRoaWRkZW4iLCJtZXNzYWdlIiwib3ZlcmxheUNTUyIsIiR2YWx1ZXMiLCJzZXJpYWxpemUiLCJ1bmJsb2NrIiwiV1BPbmlvbl9RdWlja19FZGl0IiwidmFsdWVzIiwiJGxpc3QiLCJjbG9zZXN0IiwidmMiLCJ3cG9uaW9uX3ZjIiwiZmllbGRzIiwiYWJzdHJhY3QiLCJ3cG9uaW9uX3ZjX2luaXQiLCJ3cG9uaW9uX3ZjX2ZpZWxkIiwid3Bvbmlvbl9jcmVhdGVfdmNfZmllbGQiLCJpc192Y19wYXJhbV9lbGVtIiwiaW5wdXRfY2hhbmdlIiwiaW5wdXRfZGF0YSIsIldQT25pb25fVkNfRmllbGQiLCJoYW5kbGVfc2luZ2xlX2NoYW5nZSIsIiRzYXZlX2RhdGEiLCJzaW1wbGVfYXJyYXkiLCJrZXlfdmFsdWVfYXJyYXkiLCJrZXlfdmFsdWVfbXVsdGlfYXJyYXkiLCJzb3J0ZXJfdmFsdWVzIiwidmNfc2F2ZSIsIiRwYXJhbV9uYW1lIiwicGFyYW1fbmFtZSIsIiRyIiwiJHMiLCJlbmNvZGVfY29udGVudCIsIiRzZWxlY3QiLCJXUE9uaW9uX29uQXZhaWxhYmxlIiwic2VsIiwid3Bvbmlvbl93cF9wb2ludGVyX2NyZWF0ZSIsIiRwb2ludGVyc19ncm91cCIsIiRncm91cF9pZCIsIiRwb2ludGVyX2tleSIsIiRwb2ludGVyIiwiJGhhbmRsZXIiLCJwb2ludGVyV2lkdGgiLCJwb2ludGVyQ2xhc3MiLCJjbGFzcyIsImVkZ2UiLCJhbGlnbiIsImNsb3NlIiwicG9zdCIsInBvaW50ZXIiLCJidXR0b25zIiwianNuZXh0IiwiJG5leHQiLCJpY29uX2NsYXNzIiwic2V0dXAiLCIkcGlkIiwidnNwX2pzX2hlbHBlciIsImxvZGFzaCIsIm5vQ29uZmxpY3QiLCJtZXRhYm94Iiwid3BfcG9pbnRlcnMiLCJtZWRpYV9maWVsZHMiLCJidWxrX2VkaXQiLCJndXR0ZW5iZXJnIiwid29vY29tbWVyY2UiLCJxdWlja19lZGl0IiwidmlzdWFsX2NvbXBvc2VyIiwibW9kYWwiLCJhamF4ZXIiLCJkZWJ1ZyIsIiR3cG9mX2RpdiIsInN1Ym1lbnVfaW5kaWNhdG9yIiwidG9nZ2xlQ2xhc3MiLCIkd2lkZ2V0IiwiJG1lbnUiLCJXUE9uaW9uX1dQX01vZGFsIiwiQmFja2JvbmUiLCJWaWV3IiwidGVtcGxhdGVzIiwiZXZlbnRzIiwiYWN0aXZlX3BhZ2UiLCJhY3RpdmVfc2VjdGlvbiIsImluaXRpYWxpemUiLCJsZWZ0X21lbnUiLCJoaWRlX21lbnUiLCJiaW5kQWxsIiwiaW5pdF90ZW1wbGF0ZXMiLCJyZW5kZXIiLCIkbSIsImZyYW1lX21lbnVfaXRlbSIsInJvdXRlcl9tZW51X2l0ZW0iLCJwYWdlX2NvbnRlbnQiLCJzZWN0aW9uX2NvbnRlbnQiLCIkY29udGVudCIsIiRfY29udGVudCIsIiRfbWVudSIsInByZXNlcnZlRm9jdXMiLCJmb2N1cyIsImhhbmRsZV9sZWZ0X21lbnVfY2xpY2siLCIkdGFyZ2V0IiwiJHNob3dfdGFyZ2V0IiwiaGFuZGxlX3RhYl9jbGljayIsIiRwYWdlIiwiaGFzIiwidW5kZWxlZ2F0ZUV2ZW50cyIsIm9mZiIsInNhdmVNb2RhbCIsImRvTm90aGluZyIsIiRvcHRpb25zIiwiZ2V0X2xlZnRfbWVudSJdLCJtYXBw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TDtBQUNBSCxRQUFJRCxJQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCSyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0ExQixRQUFJSixJQUFJSSxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E1QixRQUFJSCxJQUFJRyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FoQyxRQUFJRCxJQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCSyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0ExQixRQUFJSixJQUFJSSxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E1QixRQUFJSCxJQUFJRyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FoQyxRQUFJRCxJQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCSyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0ExQixRQUFJSixJQUFJSSxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCTSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E1QixRQUFJSCxJQUFJRyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCTyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0E5QixRQUFJRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCUSxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FoQyxRQUFJRCxJQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCSyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0ExQixRQUFJSixJQUFJSSxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCTSxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0E1QixRQUFJSCxJQUFJRyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCTyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0E5QixRQUFJRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCUSxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FoQyxRQUFJSyxJQUFJTCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRSxJQUFJRixDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCVSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FoQyxRQUFJRyxJQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCVyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FsQyxRQUFJSSxJQUFJSixDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCWSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FwQyxRQUFJSyxJQUFJTCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRSxJQUFJRixDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCVSxHQUEzQixFQUFnQyxTQUFoQyxDQUFKO0FBQ0FoQyxRQUFJRyxJQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCVyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FsQyxRQUFJSSxJQUFJSixDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCWSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FwQyxRQUFJSyxJQUFJTCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCUyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0E5QixRQUFJRSxJQUFJRixDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCVSxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0FoQyxRQUFJRyxJQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCVyxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FsQyxRQUFJSSxJQUFJSixDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhSCxDQUFiLEVBQWdCUCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCWSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FwQyxRQUFJSyxJQUFJTCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVixFQUFFK0IsSUFBSSxFQUFOLENBQWhCLEVBQTJCUyxHQUEzQixFQUFnQyxVQUFoQyxDQUFKO0FBQ0E5QixRQUFJRSxJQUFJRixDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCVCxFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVBQTBCVSxHQUExQixFQUErQixVQUEvQixDQUFKO0FBQ0FoQyxRQUFJRyxJQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCUixFQUFFK0IsSUFBSSxDQUFOLENBQWhCLEVB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c0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsZ0VBQVQ7QUFDQUEsbUJBQU9BLENBQUUsa0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsb0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsa0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsNERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsZ0VBQVQ7QUFDQUEsbUJBQU9BLENBQUUsd0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsZ0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsd0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsd0VBQVQ7QUFDQUEsbUJBQU9BLENBQUUsc0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsd0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsc0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsa0VBQVQ7QUFDQUEsbUJBQU9BLENBQUUsZ0VBQVQ7QUFDQUEsbUJBQU9BLENBQUUsOERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsNERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsb0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsOERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsa0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsOERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsMERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsc0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsZ0VBQVQ7QUFDQUEsbUJBQU9BLENBQUUsa0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsNERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsMERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsa0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsb0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsMERBQVQ7QUFDQUEsbUJBQU9BLENBQUUsZ0VBQVQ7QUFDQUEsbUJBQU9BLENBQUUsa0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsb0RBQVQ7QUFDQUEsbUJBQU9BLENBQUUsa0RBQVQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7O0FBRUEsSUFBTTY5QixtQkFBbUJDLFNBQVNDLElBQVQsQ0FBYzNMLE1BQWQs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QjtBQUV4Qm5NLFNBQU0sS0FGa0I7QUFHeEJva0IsY0FBVyxlQUhhO0FBSXhCc0YsVUFBTyxFQUppQjtBQUt4QmlCLGNBQVc7QUFMYSxHQUFWLEVBTVp3QixRQU5ZLENBQWY7O0FBUUEsTUFBSWpDLGdCQUFKLENBQXNCaHVCLEVBQUV1aUIsTUFBRixDQUFVO0FBQy9CaU0sY0FBVyxLQUFLMEIsYUFBTCxFQURvQjtBQUUvQjdrQixTQUFNLEtBQUsyQixPQUFMLENBQWMsTUFBZCxDQUZ5QjtBQUcvQnloQixjQUFXLEtBQUt6aEIsT0FBTCxDQUFjLFdBQWQ7QUFIb0IsR0FBVixFQUluQixLQUFLQSxPQUFMLENBQWMsT0FBZCxDQUptQixDQUF0QjtBQUtBOzs7O2tDQUVlO0FBQ2YsT0FBSThMLFVBQVUsS0FBZDtBQUNBLE9BQUksS0FBSzlMLE9BQUwsQ0FBYyxNQUFkLENBQUosRUFBNkI7QUFDNUI4TCxjQUFVLEVBQVY7O0FBRUE5WSxNQUFFdU4sSUFBRixDQUFRLEtBQUtQLE9BQUwsQ0FBYyxNQUFkLENBQVIsRUFBZ0MsVUFBRW5OLEtBQUYsRUFBU1UsSUFBVCxFQUFtQjtBQUNsRHVZLGFBQVN2WSxJQUFULElBQW9CLE9BQU9WLE1BQU8sWUFBUCxDQUFQLEtBQWlDLFdBQW5DLEdBQW1EQSxNQUFPLFlBQVAsQ0FBbkQsR0FBMkVBLE1BQU8sT0FBUCxDQUE3RjtBQUNBLEtBRkQ7QUFHQTtBQUNELFVBQU9pWixPQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE1GLG1DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy93cG9uaW9uLWNvcmUuanNcIik7XG4iLCJpbXBvcnQgdmFsaWRhdGVOYW1lc3BhY2UgZnJvbSAnLi92YWxpZGF0ZU5hbWVzcGFjZS5qcyc7XG5pbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuaW1wb3J0IHsgZG9BY3Rpb24gfSBmcm9tICcuLyc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIGFkZCBhIGhvb2suXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICBGdW5jdGlvbiB0aGF0IGFkZHMgYSBuZXcgaG9vay5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBob29rIHRvIHRoZSBhcHByb3ByaWF0ZSBob29rcyBjb250YWluZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIGhvb2tOYW1lICBOYW1lIG9mIGhvb2sgdG8gYWRkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWVzcGFjZSBUaGUgdW5pcXVlIG5hbWVzcGFjZSBpZGVudGlmeWluZyB0aGUgY2FsbGJhY2sgaW4gdGhlIGZvcm0gYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAgRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBob29rIGlzIHJ1blxuICAgKiBAcGFyYW0gez9udW1iZXJ9ICBwcmlvcml0eSAgUHJpb3JpdHkgb2YgdGhpcyBob29rIChkZWZhdWx0PTEwKVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIGFkZEhvb2soaG9va05hbWUsIG5hbWVzcGFjZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDEwO1xuXG4gICAgaWYgKCF2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGJhY2spIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgaG9vayBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBWYWxpZGF0ZSBudW1lcmljIHByaW9yaXR5XG5cblxuICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIHByaW9yaXR5KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignSWYgc3BlY2lmaWVkLCB0aGUgaG9vayBwcmlvcml0eSBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICB9O1xuXG4gICAgaWYgKGhvb2tzW2hvb2tOYW1lXSkge1xuICAgICAgLy8gRmluZCB0aGUgY29ycmVjdCBpbnNlcnQgaW5kZXggb2YgdGhlIG5ldyBob29rLlxuICAgICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB3aGlsZSAoaSA8IGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbaV0ucHJpb3JpdHkgPiBwcmlvcml0eSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaSsrO1xuICAgICAgfSAvLyBJbnNlcnQgKG9yIGFwcGVuZCkgdGhlIG5ldyBob29rLlxuXG5cbiAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAwLCBoYW5kbGVyKTsgLy8gV2UgbWF5IGFsc28gYmUgY3VycmVudGx5IGV4ZWN1dGluZyB0aGlzIGhvb2suICBJZiB0aGUgY2FsbGJhY2tcbiAgICAgIC8vIHdlJ3JlIGFkZGluZyB3b3VsZCBjb21lIGFmdGVyIHRoZSBjdXJyZW50IGNhbGxiYWNrLCB0aGVyZSdzIG5vXG4gICAgICAvLyBwcm9ibGVtOyBvdGhlcndpc2Ugd2UgbmVlZCB0byBpbmNyZWFzZSB0aGUgZXhlY3V0aW9uIGluZGV4IG9mXG4gICAgICAvLyBhbnkgb3RoZXIgcnVucyBieSAxIHRvIGFjY291bnQgZm9yIHRoZSBhZGRlZCBlbGVtZW50LlxuXG4gICAgICAoaG9va3MuX19jdXJyZW50IHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChob29rSW5mbykge1xuICAgICAgICBpZiAoaG9va0luZm8ubmFtZSA9PT0gaG9va05hbWUgJiYgaG9va0luZm8uY3VycmVudEluZGV4ID49IGkpIHtcbiAgICAgICAgICBob29rSW5mby5jdXJyZW50SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGhvb2sgb2YgaXRzIHR5cGUuXG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbaGFuZGxlcl0sXG4gICAgICAgIHJ1bnM6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGhvb2tOYW1lICE9PSAnaG9va0FkZGVkJykge1xuICAgICAgZG9BY3Rpb24oJ2hvb2tBZGRlZCcsIGhvb2tOYW1lLCBuYW1lc3BhY2UsIGNhbGxiYWNrLCBwcmlvcml0eSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlQWRkSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB0aGUgbmFtZSBvZiB0aGVcbiAqIGN1cnJlbnRseSBydW5uaW5nIGhvb2ssIG9yIGBudWxsYCBpZiBubyBob29rIG9mIHRoZSBnaXZlbiB0eXBlIGlzIGN1cnJlbnRseVxuICogcnVubmluZy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICAgICAgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBob29rLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50SG9vayhob29rcykge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudGx5IHJ1bm5pbmcgaG9vaywgb3IgYG51bGxgIGlmIG5vIGhvb2sgb2ZcbiAgICogdGhlIGdpdmVuIHR5cGUgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAqXG4gICAqIEByZXR1cm4gez9zdHJpbmd9ICAgICAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSBjdXJyZW50bHkgcnVubmluZyBob29rLCBvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbnVsbGAgaWYgbm8gaG9vayBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBjdXJyZW50SG9vaygpIHtcbiAgICBpZiAoIWhvb2tzLl9fY3VycmVudCB8fCAhaG9va3MuX19jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzLl9fY3VycmVudFtob29rcy5fX2N1cnJlbnQubGVuZ3RoIC0gMV0ubmFtZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VycmVudEhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVDdXJyZW50SG9vay5qcy5tYXAiLCJpbXBvcnQgdmFsaWRhdGVIb29rTmFtZSBmcm9tICcuL3ZhbGlkYXRlSG9va05hbWUuanMnO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gaW52b2tlZCwgd2lsbCByZXR1cm4gdGhlIG51bWJlciBvZiB0aW1lcyBhXG4gKiBob29rIGhhcyBiZWVuIGNhbGxlZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgU3RvcmVkIGhvb2tzLCBrZXllZCBieSBob29rIG5hbWUuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGhvb2sncyBjYWxsIGNvdW50LlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURpZEhvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyBhbiBhY3Rpb24gaGFzIGJlZW4gZmlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIGhvb2sgbmFtZSB0byBjaGVjay5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgICBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBob29rIGhhcyBydW4uXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gZGlkSG9vayhob29rTmFtZSkge1xuICAgIGlmICghdmFsaWRhdGVIb29rTmFtZShob29rTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3NbaG9va05hbWVdICYmIGhvb2tzW2hvb2tOYW1lXS5ydW5zID8gaG9va3NbaG9va05hbWVdLnJ1bnMgOiAwO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaWRIb29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlRGlkSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB3aGV0aGVyIGEgaG9vayBpc1xuICogY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgYSBob29rIGlzIGN1cnJlbnRseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGV4ZWN1dGVkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVEb2luZ0hvb2soaG9va3MpIHtcbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBhIGhvb2sgaXMgY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHs/c3RyaW5nfSBob29rTmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBjaGVjayBmb3IuICBJZlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbWl0dGVkLCB3aWxsIGNoZWNrIGZvciBhbnkgaG9vayBiZWluZyBleGVjdXRlZC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgV2hldGhlciB0aGUgaG9vayBpcyBiZWluZyBleGVjdXRlZC5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiBkb2luZ0hvb2soaG9va05hbWUpIHtcbiAgICAvLyBJZiB0aGUgaG9va05hbWUgd2FzIG5vdCBwYXNzZWQsIGNoZWNrIGZvciBhbnkgY3VycmVudCBob29rLlxuICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGhvb2tOYW1lKSB7XG4gICAgICByZXR1cm4gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBob29rcy5fX2N1cnJlbnRbMF07XG4gICAgfSAvLyBSZXR1cm4gdGhlIF9fY3VycmVudCBob29rLlxuXG5cbiAgICByZXR1cm4gaG9va3MuX19jdXJyZW50WzBdID8gaG9va05hbWUgPT09IGhvb2tzLl9fY3VycmVudFswXS5uYW1lIDogZmFsc2U7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURvaW5nSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZURvaW5nSG9vay5qcy5tYXAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBpbnZva2VkLCB3aWxsIHJldHVybiB3aGV0aGVyIGFueSBoYW5kbGVycyBhcmVcbiAqIGF0dGFjaGVkIHRvIGEgcGFydGljdWxhciBob29rLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBob29rcyBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgYW55IGhhbmRsZXJzIGFyZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaGVkIHRvIGEgcGFydGljdWxhciBob29rLlxuICovXG5mdW5jdGlvbiBjcmVhdGVIYXNIb29rKGhvb2tzKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGhvdyBtYW55IGhhbmRsZXJzIGFyZSBhdHRhY2hlZCBmb3IgdGhlIGdpdmVuIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gIGhvb2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIGNoZWNrIGZvci5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGVyZSBhcmUgaGFuZGxlcnMgdGhhdCBhcmUgYXR0YWNoZWQgdG8gdGhlIGdpdmVuIGhvb2suXG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gaGFzSG9vayhob29rTmFtZSkge1xuICAgIHJldHVybiBob29rTmFtZSBpbiBob29rcztcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGFzSG9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUhhc0hvb2suanMubWFwIiwiaW1wb3J0IGNyZWF0ZUFkZEhvb2sgZnJvbSAnLi9jcmVhdGVBZGRIb29rJztcbmltcG9ydCBjcmVhdGVSZW1vdmVIb29rIGZyb20gJy4vY3JlYXRlUmVtb3ZlSG9vayc7XG5pbXBvcnQgY3JlYXRlSGFzSG9vayBmcm9tICcuL2NyZWF0ZUhhc0hvb2snO1xuaW1wb3J0IGNyZWF0ZVJ1bkhvb2sgZnJvbSAnLi9jcmVhdGVSdW5Ib29rJztcbmltcG9ydCBjcmVhdGVDdXJyZW50SG9vayBmcm9tICcuL2NyZWF0ZUN1cnJlbnRIb29rJztcbmltcG9ydCBjcmVhdGVEb2luZ0hvb2sgZnJvbSAnLi9jcmVhdGVEb2luZ0hvb2snO1xuaW1wb3J0IGNyZWF0ZURpZEhvb2sgZnJvbSAnLi9jcmVhdGVEaWRIb29rJztcbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgaG9va3Mgb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIGhvb2tzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvb2tzKCkge1xuICB2YXIgYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBmaWx0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgYWN0aW9ucy5fX2N1cnJlbnQgPSBbXTtcbiAgZmlsdGVycy5fX2N1cnJlbnQgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhZGRBY3Rpb246IGNyZWF0ZUFkZEhvb2soYWN0aW9ucyksXG4gICAgYWRkRmlsdGVyOiBjcmVhdGVBZGRIb29rKGZpbHRlcnMpLFxuICAgIHJlbW92ZUFjdGlvbjogY3JlYXRlUmVtb3ZlSG9vayhhY3Rpb25zKSxcbiAgICByZW1vdmVGaWx0ZXI6IGNyZWF0ZVJlbW92ZUhvb2soZmlsdGVycyksXG4gICAgaGFzQWN0aW9uOiBjcmVhdGVIYXNIb29rKGFjdGlvbnMpLFxuICAgIGhhc0ZpbHRlcjogY3JlYXRlSGFzSG9vayhmaWx0ZXJzKSxcbiAgICByZW1vdmVBbGxBY3Rpb25zOiBjcmVhdGVSZW1vdmVIb29rKGFjdGlvbnMsIHRydWUpLFxuICAgIHJlbW92ZUFsbEZpbHRlcnM6IGNyZWF0ZVJlbW92ZUhvb2soZmlsdGVycywgdHJ1ZSksXG4gICAgZG9BY3Rpb246IGNyZWF0ZVJ1bkhvb2soYWN0aW9ucyksXG4gICAgYXBwbHlGaWx0ZXJzOiBjcmVhdGVSdW5Ib29rKGZpbHRlcnMsIHRydWUpLFxuICAgIGN1cnJlbnRBY3Rpb246IGNyZWF0ZUN1cnJlbnRIb29rKGFjdGlvbnMpLFxuICAgIGN1cnJlbnRGaWx0ZXI6IGNyZWF0ZUN1cnJlbnRIb29rKGZpbHRlcnMpLFxuICAgIGRvaW5nQWN0aW9uOiBjcmVhdGVEb2luZ0hvb2soYWN0aW9ucyksXG4gICAgZG9pbmdGaWx0ZXI6IGNyZWF0ZURvaW5nSG9vayhmaWx0ZXJzKSxcbiAgICBkaWRBY3Rpb246IGNyZWF0ZURpZEhvb2soYWN0aW9ucyksXG4gICAgZGlkRmlsdGVyOiBjcmVhdGVEaWRIb29rKGZpbHRlcnMpLFxuICAgIGFjdGlvbnM6IGFjdGlvbnMsXG4gICAgZmlsdGVyczogZmlsdGVyc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb29rcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUhvb2tzLmpzLm1hcCIsImltcG9ydCB2YWxpZGF0ZU5hbWVzcGFjZSBmcm9tICcuL3ZhbGlkYXRlTmFtZXNwYWNlLmpzJztcbmltcG9ydCB2YWxpZGF0ZUhvb2tOYW1lIGZyb20gJy4vdmFsaWRhdGVIb29rTmFtZS5qcyc7XG5pbXBvcnQgeyBkb0FjdGlvbiB9IGZyb20gJy4vJztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgcmVtb3ZlIGEgc3BlY2lmaWVkIGhvb2sgb3IgYWxsXG4gKiBob29rcyBieSB0aGUgZ2l2ZW4gbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgaG9va3MgICAgICBTdG9yZWQgaG9va3MsIGtleWVkIGJ5IGhvb2sgbmFtZS5cbiAqIEBwYXJhbSAge2Jvb2xlYW59ICAgICByZW1vdmVBbGwgIFdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBjYWxsYmFja3MgZm9yIGEgaG9va05hbWUsIHdpdGhvdXQgcmVnYXJkIHRvIG5hbWVzcGFjZS4gVXNlZCB0byBjcmVhdGUgYHJlbW92ZUFsbCpgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgaG9va3MuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUmVtb3ZlSG9vayhob29rcywgcmVtb3ZlQWxsKSB7XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgKG9yIGFsbCBjYWxsYmFja3MpIGZyb20gdGhlIGhvb2sgd2l0aCBhXG4gICAqIGdpdmVuIGhvb2tOYW1lIGFuZCBuYW1lc3BhY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBob29rTmFtZSAgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gbW9kaWZ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgbmFtZXNwYWNlIFRoZSB1bmlxdWUgbmFtZXNwYWNlIGlkZW50aWZ5aW5nIHRoZSBjYWxsYmFjayBpbiB0aGUgZm9ybSBgdmVuZG9yL3BsdWdpbi9mdW5jdGlvbmAuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gICAgICAgICAgICAgVGhlIG51bWJlciBvZiBjYWxsYmFja3MgcmVtb3ZlZC5cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmVIb29rKGhvb2tOYW1lLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAoIXZhbGlkYXRlSG9va05hbWUoaG9va05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFyZW1vdmVBbGwgJiYgIXZhbGlkYXRlTmFtZXNwYWNlKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEJhaWwgaWYgbm8gaG9va3MgZXhpc3QgYnkgdGhpcyBuYW1lXG5cblxuICAgIGlmICghaG9va3NbaG9va05hbWVdKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcnNSZW1vdmVkID0gMDtcblxuICAgIGlmIChyZW1vdmVBbGwpIHtcbiAgICAgIGhhbmRsZXJzUmVtb3ZlZCA9IGhvb2tzW2hvb2tOYW1lXS5oYW5kbGVycy5sZW5ndGg7XG4gICAgICBob29rc1tob29rTmFtZV0gPSB7XG4gICAgICAgIHJ1bnM6IGhvb2tzW2hvb2tOYW1lXS5ydW5zLFxuICAgICAgICBoYW5kbGVyczogW11cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgdG8gcmVtb3ZlLlxuICAgICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgIGlmIChoYW5kbGVyc1tpXS5uYW1lc3BhY2UgPT09IG5hbWVzcGFjZSkge1xuICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBoYW5kbGVyc1JlbW92ZWQrKzsgLy8gVGhpcyBjYWxsYmFjayBtYXkgYWxzbyBiZSBwYXJ0IG9mIGEgaG9vayB0aGF0IGlzXG4gICAgICAgICAgLy8gY3VycmVudGx5IGV4ZWN1dGluZy4gIElmIHRoZSBjYWxsYmFjayB3ZSdyZSByZW1vdmluZ1xuICAgICAgICAgIC8vIGNvbWVzIGFmdGVyIHRoZSBjdXJyZW50IGNhbGxiYWNrLCB0aGVyZSdzIG5vIHByb2JsZW07XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIGV4ZWN1dGlvbiBpbmRleCBvZiBhbnlcbiAgICAgICAgICAvLyBvdGhlciBydW5zIGJ5IDEgdG8gYWNjb3VudCBmb3IgdGhlIHJlbW92ZWQgZWxlbWVudC5cblxuICAgICAgICAgIChob29rcy5fX2N1cnJlbnQgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGhvb2tJbmZvKSB7XG4gICAgICAgICAgICBpZiAoaG9va0luZm8ubmFtZSA9PT0gaG9va05hbWUgJiYgaG9va0luZm8uY3VycmVudEluZGV4ID49IGkpIHtcbiAgICAgICAgICAgICAgaG9va0luZm8uY3VycmVudEluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBfbG9vcChpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaG9va05hbWUgIT09ICdob29rUmVtb3ZlZCcpIHtcbiAgICAgIGRvQWN0aW9uKCdob29rUmVtb3ZlZCcsIGhvb2tOYW1lLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyc1JlbW92ZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlbW92ZUhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSZW1vdmVIb29rLmpzLm1hcCIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQsIHdpbGwgZXhlY3V0ZSBhbGwgY2FsbGJhY2tzXG4gKiByZWdpc3RlcmVkIHRvIGEgaG9vayBvZiB0aGUgc3BlY2lmaWVkIHR5cGUsIG9wdGlvbmFsbHkgcmV0dXJuaW5nIHRoZSBmaW5hbFxuICogdmFsdWUgb2YgdGhlIGNhbGwgY2hhaW4uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIGhvb2tzICAgICAgICAgIFN0b3JlZCBob29rcywga2V5ZWQgYnkgaG9vayBuYW1lLlxuICogQHBhcmFtICB7P2Jvb2xlYW59ICAgIHJldHVybkZpcnN0QXJnIFdoZXRoZXIgZWFjaCBob29rIGNhbGxiYWNrIGlzIGV4cGVjdGVkIHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0cyBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICAgICAgRnVuY3Rpb24gdGhhdCBydW5zIGhvb2sgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSdW5Ib29rKGhvb2tzLCByZXR1cm5GaXJzdEFyZykge1xuICAvKipcbiAgICogUnVucyBhbGwgY2FsbGJhY2tzIGZvciB0aGUgc3BlY2lmaWVkIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gcnVuLlxuICAgKiBAcGFyYW0gIHsuLi4qfSAgIGFyZ3MgICAgIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBob29rIGNhbGxiYWNrcy5cbiAgICpcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICBSZXR1cm4gdmFsdWUgb2YgcnVubmVyLCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIHJ1bkhvb2tzKGhvb2tOYW1lKSB7XG4gICAgaWYgKCFob29rc1tob29rTmFtZV0pIHtcbiAgICAgIGhvb2tzW2hvb2tOYW1lXSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICBydW5zOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGhvb2tzW2hvb2tOYW1lXS5ydW5zKys7XG4gICAgdmFyIGhhbmRsZXJzID0gaG9va3NbaG9va05hbWVdLmhhbmRsZXJzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVycyB8fCAhaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmV0dXJuRmlyc3RBcmcgPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBob29rSW5mbyA9IHtcbiAgICAgIG5hbWU6IGhvb2tOYW1lLFxuICAgICAgY3VycmVudEluZGV4OiAwXG4gICAgfTtcblxuICAgIGhvb2tzLl9fY3VycmVudC5wdXNoKGhvb2tJbmZvKTtcblxuICAgIHdoaWxlIChob29rSW5mby5jdXJyZW50SW5kZXggPCBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNbaG9va0luZm8uY3VycmVudEluZGV4XTtcbiAgICAgIHZhciByZXN1bHQgPSBoYW5kbGVyLmNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xuXG4gICAgICBpZiAocmV0dXJuRmlyc3RBcmcpIHtcbiAgICAgICAgYXJnc1swXSA9IHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaG9va0luZm8uY3VycmVudEluZGV4Kys7XG4gICAgfVxuXG4gICAgaG9va3MuX19jdXJyZW50LnBvcCgpO1xuXG4gICAgaWYgKHJldHVybkZpcnN0QXJnKSB7XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJ1bkhvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSdW5Ib29rLmpzLm1hcCIsImltcG9ydCBjcmVhdGVIb29rcyBmcm9tICcuL2NyZWF0ZUhvb2tzJztcblxudmFyIF9jcmVhdGVIb29rcyA9IGNyZWF0ZUhvb2tzKCksXG4gICAgYWRkQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmFkZEFjdGlvbixcbiAgICBhZGRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuYWRkRmlsdGVyLFxuICAgIHJlbW92ZUFjdGlvbiA9IF9jcmVhdGVIb29rcy5yZW1vdmVBY3Rpb24sXG4gICAgcmVtb3ZlRmlsdGVyID0gX2NyZWF0ZUhvb2tzLnJlbW92ZUZpbHRlcixcbiAgICBoYXNBY3Rpb24gPSBfY3JlYXRlSG9va3MuaGFzQWN0aW9uLFxuICAgIGhhc0ZpbHRlciA9IF9jcmVhdGVIb29rcy5oYXNGaWx0ZXIsXG4gICAgcmVtb3ZlQWxsQWN0aW9ucyA9IF9jcmVhdGVIb29rcy5yZW1vdmVBbGxBY3Rpb25zLFxuICAgIHJlbW92ZUFsbEZpbHRlcnMgPSBfY3JlYXRlSG9va3MucmVtb3ZlQWxsRmlsdGVycyxcbiAgICBkb0FjdGlvbiA9IF9jcmVhdGVIb29rcy5kb0FjdGlvbixcbiAgICBhcHBseUZpbHRlcnMgPSBfY3JlYXRlSG9va3MuYXBwbHlGaWx0ZXJzLFxuICAgIGN1cnJlbnRBY3Rpb24gPSBfY3JlYXRlSG9va3MuY3VycmVudEFjdGlvbixcbiAgICBjdXJyZW50RmlsdGVyID0gX2NyZWF0ZUhvb2tzLmN1cnJlbnRGaWx0ZXIsXG4gICAgZG9pbmdBY3Rpb24gPSBfY3JlYXRlSG9va3MuZG9pbmdBY3Rpb24sXG4gICAgZG9pbmdGaWx0ZXIgPSBfY3JlYXRlSG9va3MuZG9pbmdGaWx0ZXIsXG4gICAgZGlkQWN0aW9uID0gX2NyZWF0ZUhvb2tzLmRpZEFjdGlvbixcbiAgICBkaWRGaWx0ZXIgPSBfY3JlYXRlSG9va3MuZGlkRmlsdGVyLFxuICAgIGFjdGlvbnMgPSBfY3JlYXRlSG9va3MuYWN0aW9ucyxcbiAgICBmaWx0ZXJzID0gX2NyZWF0ZUhvb2tzLmZpbHRlcnM7XG5cbmV4cG9ydCB7IGNyZWF0ZUhvb2tzLCBhZGRBY3Rpb24sIGFkZEZpbHRlciwgcmVtb3ZlQWN0aW9uLCByZW1vdmVGaWx0ZXIsIGhhc0FjdGlvbiwgaGFzRmlsdGVyLCByZW1vdmVBbGxBY3Rpb25zLCByZW1vdmVBbGxGaWx0ZXJzLCBkb0FjdGlvbiwgYXBwbHlGaWx0ZXJzLCBjdXJyZW50QWN0aW9uLCBjdXJyZW50RmlsdGVyLCBkb2luZ0FjdGlvbiwgZG9pbmdGaWx0ZXIsIGRpZEFjdGlvbiwgZGlkRmlsdGVyLCBhY3Rpb25zLCBmaWx0ZXJzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFZhbGlkYXRlIGEgaG9va05hbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaG9va05hbWUgVGhlIGhvb2sgbmFtZSB0byB2YWxpZGF0ZS4gU2hvdWxkIGJlIGEgbm9uIGVtcHR5IHN0cmluZyBjb250YWluaW5nXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHkgbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzIGFuZCB1bmRlcnNjb3Jlcy4gQWxzbyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGhvb2sgbmFtZSBjYW5ub3QgYmVnaW4gd2l0aCBgX19gLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgV2hldGhlciB0aGUgaG9vayBuYW1lIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUhvb2tOYW1lKGhvb2tOYW1lKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGhvb2tOYW1lIHx8ICcnID09PSBob29rTmFtZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoL15fXy8udGVzdChob29rTmFtZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBob29rIG5hbWUgY2Fubm90IGJlZ2luIHdpdGggYF9fYC4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aMC05Xy4tXSokLy50ZXN0KGhvb2tOYW1lKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIGhvb2sgbmFtZSBjYW4gb25seSBjb250YWluIG51bWJlcnMsIGxldHRlcnMsIGRhc2hlcywgcGVyaW9kcyBhbmQgdW5kZXJzY29yZXMuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlSG9va05hbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0ZUhvb2tOYW1lLmpzLm1hcCIsIi8qKlxuICogVmFsaWRhdGUgYSBuYW1lc3BhY2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2UgdG8gdmFsaWRhdGUgLSBzaG91bGQgdGFrZSB0aGUgZm9ybVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgYHZlbmRvci9wbHVnaW4vZnVuY3Rpb25gLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgIFdoZXRoZXIgdGhlIG5hbWVzcGFjZSBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIG5hbWVzcGFjZSB8fCAnJyA9PT0gbmFtZXNwYWNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgbmFtZXNwYWNlIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghL15bYS16QS1aXVthLXpBLVowLTlfLlxcLVxcL10qJC8udGVzdChuYW1lc3BhY2UpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgbmFtZXNwYWNlIGNhbiBvbmx5IGNvbnRhaW4gbnVtYmVycywgbGV0dGVycywgZGFzaGVzLCBwZXJpb2RzLCB1bmRlcnNjb3JlcyBhbmQgc2xhc2hlcy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVOYW1lc3BhY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0ZU5hbWVzcGFjZS5qcy5tYXAiLCJjbGFzcyBKU19QYXJzZV9BcmdzIHtcclxuXHRjb25zdHJ1Y3RvciggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19uZXN0ZWQgPSBmYWxzZSApIHtcclxuXHRcdHRoaXMuYXJncyAgICAgPSAkYXJncztcclxuXHRcdHRoaXMuZGVmYXVsdHMgPSAkZGVmYXVsdHM7XHJcblx0XHR0aGlzLm5lc3RlZCAgID0gJGlzX25lc3RlZDtcclxuXHRcdHRoaXMucGFyc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLmFyZ3M7XHJcblx0fVxyXG5cclxuXHRwYXJzZSgpIHtcclxuXHRcdGZvciggbGV0ICRfa2V5IGluIHRoaXMuZGVmYXVsdHMgKSB7XHJcblx0XHRcdGlmKCB0cnVlID09PSB0aGlzLm5lc3RlZCAmJiB0eXBlb2YgIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0gPT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRcdHRoaXMuYXJnc1sgJF9rZXkgXSA9IG5ldyBKU19QYXJzZV9BcmdzKCB0aGlzLmFyZ3NbICRfa2V5IF0sIHRoaXMuZGVmYXVsdHNbICRfa2V5IF0sIHRoaXMubmVzdGVkICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3NbICRfa2V5IF0gPT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdFx0dGhpcy5hcmdzWyAkX2tleSBdID0gdGhpcy5kZWZhdWx0c1sgJF9rZXkgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggJGFyZ3MgPSB7fSwgJGRlZmF1bHRzID0ge30sICRpc19kZWVwID0gZmFsc2UgKSA9PiBuZXcgSlNfUGFyc2VfQXJncyggJGFyZ3MsICRkZWZhdWx0cywgJGlzX2RlZXAgKTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWljcm90aW1lKGdldEFzRmxvYXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9taWNyb3RpbWUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBQYXVsbyBGcmVpdGFzXG4gIC8vIGltcHJvdmVkIGJ5OiBEdW1pdHJ1IFV6dW4gKGh0dHA6Ly9kdXp1bi5tZSlcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkdGltZVN0YW1wID0gbWljcm90aW1lKHRydWUpXG4gIC8vICAgZXhhbXBsZSAxOiAkdGltZVN0YW1wID4gMTAwMDAwMDAwMCAmJiAkdGltZVN0YW1wIDwgMjAwMDAwMDAwMFxuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogL14wXFwuWzAtOV17MSw2fSBbMC05XXsxMCwxMH0kLy50ZXN0KG1pY3JvdGltZSgpKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuXG4gIHZhciBzO1xuICB2YXIgbm93O1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBub3cgPSAocGVyZm9ybWFuY2Uubm93KCkgKyBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSAvIDFlMztcbiAgICBpZiAoZ2V0QXNGbG9hdCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvLyBNYXRoLnJvdW5kKG5vdylcbiAgICBzID0gbm93IHwgMDtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBzKSAqIDFlNikgLyAxZTYgKyAnICcgKyBzO1xuICB9IGVsc2Uge1xuICAgIG5vdyA9IChEYXRlLm5vdyA/IERhdGUubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxZTM7XG4gICAgaWYgKGdldEFzRmxvYXQpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLy8gTWF0aC5yb3VuZChub3cpXG4gICAgcyA9IG5vdyB8IDA7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gcykgKiAxZTMpIC8gMWUzICsgJyAnICsgcztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pY3JvdGltZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmMoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuYy9cbiAgLy8gb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGltcHJvdmVkIGJ5OiBEaXBsb21AdCAoaHR0cDovL2RpZmFuZS5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IERlcGVuZHMgb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkgd2hpY2ggaW4gdHVybiBkZXBlbmRzIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYC5cbiAgLy8gICAgICBub3RlIDE6IFRoZSBgZXZhbGAgaW5wdXQgaXMgaG93ZXZlciBjaGVja2VkIHRvIG9ubHkgYWxsb3cgdmFsaWQgZnVuY3Rpb24gbmFtZXMsXG4gIC8vICAgICAgbm90ZSAxOiBTbyBpdCBzaG91bGQgbm90IGJlIHVuc2FmZXIgdGhhbiB1c2VzIHdpdGhvdXQgZXZhbCAoc2VlaW5nIGFzIHlvdSBjYW4pXG4gIC8vICAgICAgbm90ZSAxOiBhbHJlYWR5IHBhc3MgYW55IGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGhlcmUuXG4gIC8vICAgZXhhbXBsZSAxOiBjYWxsX3VzZXJfZnVuYygnaXNOYU4nLCAnYScpXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG5cbiAgdmFyIGNhbGxVc2VyRnVuY0FycmF5ID0gcmVxdWlyZSgnLi4vZnVuY2hhbmQvY2FsbF91c2VyX2Z1bmNfYXJyYXknKTtcbiAgcGFyYW1ldGVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBjYWxsVXNlckZ1bmNBcnJheShjYiwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbF91c2VyX2Z1bmNfYXJyYXkoY2IsIHBhcmFtZXRlcnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jYWxsX3VzZXJfZnVuY19hcnJheS9cbiAgLy8gb3JpZ2luYWwgYnk6IFRoaWFnbyBNYXRhIChodHRwOi8vdGhpYWdvbWF0YS5ibG9nLmNvbSlcbiAgLy8gIHJldmlzZWQgYnk6IEpvbiBIb2hsZVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IERpcGxvbUB0IChodHRwOi8vZGlmYW5lLmNvbS8pXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogRGVwZW5kaW5nIG9uIHRoZSBgY2JgIHRoYXQgaXMgcGFzc2VkLFxuICAvLyAgICAgIG5vdGUgMTogdGhpcyBmdW5jdGlvbiBjYW4gdXNlIGBldmFsYCBhbmQvb3IgYG5ldyBGdW5jdGlvbmAuXG4gIC8vICAgICAgbm90ZSAxOiBUaGUgYGV2YWxgIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMTogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMTogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogY2FsbF91c2VyX2Z1bmNfYXJyYXkoJ2lzTmFOJywgWydhJ10pXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiBjYWxsX3VzZXJfZnVuY19hcnJheSgnaXNOYU4nLCBbMV0pXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4gIHZhciBmdW5jO1xuICB2YXIgc2NvcGUgPSBudWxsO1xuXG4gIHZhciB2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybiA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcblxuICBpZiAodHlwZW9mIGNiID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgJGdsb2JhbFtjYl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZ1bmMgPSAkZ2xvYmFsW2NiXTtcbiAgICB9IGVsc2UgaWYgKGNiLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbihudWxsLCAncmV0dXJuICcgKyBjYikoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICAgIH1cbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2IpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgaWYgKHR5cGVvZiBjYlswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChjYlswXS5tYXRjaCh2YWxpZEpTRnVuY3Rpb25OYW1lUGF0dGVybikpIHtcbiAgICAgICAgZnVuYyA9IGV2YWwoY2JbMF0gKyBcIlsnXCIgKyBjYlsxXSArIFwiJ11cIik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jID0gY2JbMF1bY2JbMV1dO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2JbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mICRnbG9iYWxbY2JbMF1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjb3BlID0gJGdsb2JhbFtjYlswXV07XG4gICAgICB9IGVsc2UgaWYgKGNiWzBdLm1hdGNoKHZhbGlkSlNGdW5jdGlvbk5hbWVQYXR0ZXJuKSkge1xuICAgICAgICBzY29wZSA9IGV2YWwoY2JbMF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF90eXBlb2YoY2JbMF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgc2NvcGUgPSBjYlswXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZnVuYyA9IGNiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGZ1bmMgKyAnIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gZnVuYy5hcHBseShzY29wZSwgcGFyYW1ldGVycyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsbF91c2VyX2Z1bmNfYXJyYXkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZV9mdW5jdGlvbihhcmdzLCBjb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9jcmVhdGVfZnVuY3Rpb24vXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEpvaG5ueSBNYXN0IChodHRwOi8vd3d3LnBocHZyb3V3ZW4ubmwpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICBleGFtcGxlIDE6IHZhciAkZiA9IGNyZWF0ZV9mdW5jdGlvbignYSwgYicsICdyZXR1cm4gKGEgKyBiKScpXG4gIC8vICAgICAgICBleGFtcGxlIDE6ICRmKDEsIDIpXG4gIC8vICAgICAgICByZXR1cm5zIDE6IDNcblxuICB0cnkge1xuICAgIHJldHVybiBGdW5jdGlvbi5hcHBseShudWxsLCBhcmdzLnNwbGl0KCcsJykuY29uY2F0KGNvZGUpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZV9mdW5jdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnVuY3Rpb25fZXhpc3RzKGZ1bmNOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvZnVuY3Rpb25fZXhpc3RzL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IFN0ZXZlIENsYXlcbiAgLy8gaW1wcm92ZWQgYnk6IExlZ2FldiBBbmRyZXlcbiAgLy8gaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBmdW5jdGlvbl9leGlzdHMoJ2lzRmluaXRlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMVxuXG4gIHZhciAkZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG5cbiAgaWYgKHR5cGVvZiBmdW5jTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBmdW5jTmFtZSA9ICRnbG9iYWxbZnVuY05hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBmdW5jTmFtZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdW5jdGlvbl9leGlzdHMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaV9nZXQodmFybmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2luaV9nZXQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIG5vdGUgMTogVGhlIGluaSB2YWx1ZXMgbXVzdCBiZSBzZXQgYnkgaW5pX3NldCBvciBtYW51YWxseSB3aXRoaW4gYW4gaW5pIGZpbGVcbiAgLy8gICBleGFtcGxlIDE6IGluaV9zZXQoJ2RhdGUudGltZXpvbmUnLCAnQXNpYS9Ib25nX0tvbmcnKVxuICAvLyAgIGV4YW1wbGUgMTogaW5pX2dldCgnZGF0ZS50aW1lem9uZScpXG4gIC8vICAgcmV0dXJucyAxOiAnQXNpYS9Ib25nX0tvbmcnXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcbiAgJGxvY3V0dXMucGhwLmluaSA9ICRsb2N1dHVzLnBocC5pbmkgfHwge307XG5cbiAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0gJiYgJGxvY3V0dXMucGhwLmluaVt2YXJuYW1lXS5sb2NhbF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuICRsb2N1dHVzLnBocC5pbmlbdmFybmFtZV0ubG9jYWxfdmFsdWU7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pX2dldC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KHN0cikge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL21kNS9cbiAgLy8gb3JpZ2luYWwgYnk6IFdlYnRvb2xraXQuaW5mbyAoaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vKVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgbm90ZSAxOiBLZWVwIGluIG1pbmQgdGhhdCBpbiBhY2NvcmRhbmNlIHdpdGggUEhQLCB0aGUgd2hvbGUgc3RyaW5nIGlzIGJ1ZmZlcmVkIGFuZCB0aGVuXG4gIC8vICAgICAgbm90ZSAxOiBoYXNoZWQuIElmIGF2YWlsYWJsZSwgd2UnZCByZWNvbW1lbmQgdXNpbmcgTm9kZSdzIG5hdGl2ZSBjcnlwdG8gbW9kdWxlcyBkaXJlY3RseVxuICAvLyAgICAgIG5vdGUgMTogaW4gYSBzdGVhbWluZyBmYXNoaW9uIGZvciBmYXN0ZXIgYW5kIG1vcmUgZWZmaWNpZW50IGhhc2hpbmdcbiAgLy8gICBleGFtcGxlIDE6IG1kNSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnNmU2NThkNGJmY2I1OWNjMTNmOTZjMTQ0NTBhYzQwYjknXG5cbiAgdmFyIGhhc2g7XG4gIHRyeSB7XG4gICAgdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICAgIHZhciBtZDVzdW0gPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgbWQ1c3VtLnVwZGF0ZShzdHIpO1xuICAgIGhhc2ggPSBtZDVzdW0uZGlnZXN0KCdoZXgnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc2ggPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB2YXIgdXRmOEVuY29kZSA9IHJlcXVpcmUoJy4uL3htbC91dGY4X2VuY29kZScpO1xuICB2YXIgeGw7XG5cbiAgdmFyIF9yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gX3JvdGF0ZUxlZnQobFZhbHVlLCBpU2hpZnRCaXRzKSB7XG4gICAgcmV0dXJuIGxWYWx1ZSA8PCBpU2hpZnRCaXRzIHwgbFZhbHVlID4+PiAzMiAtIGlTaGlmdEJpdHM7XG4gIH07XG5cbiAgdmFyIF9hZGRVbnNpZ25lZCA9IGZ1bmN0aW9uIF9hZGRVbnNpZ25lZChsWCwgbFkpIHtcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0O1xuICAgIGxYOCA9IGxYICYgMHg4MDAwMDAwMDtcbiAgICBsWTggPSBsWSAmIDB4ODAwMDAwMDA7XG4gICAgbFg0ID0gbFggJiAweDQwMDAwMDAwO1xuICAgIGxZNCA9IGxZICYgMHg0MDAwMDAwMDtcbiAgICBsUmVzdWx0ID0gKGxYICYgMHgzRkZGRkZGRikgKyAobFkgJiAweDNGRkZGRkZGKTtcbiAgICBpZiAobFg0ICYgbFk0KSB7XG4gICAgICByZXR1cm4gbFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgfVxuICAgIGlmIChsWDQgfCBsWTQpIHtcbiAgICAgIGlmIChsUmVzdWx0ICYgMHg0MDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsUmVzdWx0IF4gbFg4IF4gbFk4O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX0YgPSBmdW5jdGlvbiBfRih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB5IHwgfnggJiB6O1xuICB9O1xuICB2YXIgX0cgPSBmdW5jdGlvbiBfRyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggJiB6IHwgeSAmIH56O1xuICB9O1xuICB2YXIgX0ggPSBmdW5jdGlvbiBfSCh4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfTtcbiAgdmFyIF9JID0gZnVuY3Rpb24gX0koeCwgeSwgeikge1xuICAgIHJldHVybiB5IF4gKHggfCB+eik7XG4gIH07XG5cbiAgdmFyIF9GRiA9IGZ1bmN0aW9uIF9GRihhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRihiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9HRyA9IGZ1bmN0aW9uIF9HRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfRyhiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9ISCA9IGZ1bmN0aW9uIF9ISChhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSChiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9JSSA9IGZ1bmN0aW9uIF9JSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgX2FkZFVuc2lnbmVkKF9hZGRVbnNpZ25lZChfSShiLCBjLCBkKSwgeCksIGFjKSk7XG4gICAgcmV0dXJuIF9hZGRVbnNpZ25lZChfcm90YXRlTGVmdChhLCBzKSwgYik7XG4gIH07XG5cbiAgdmFyIF9jb252ZXJ0VG9Xb3JkQXJyYXkgPSBmdW5jdGlvbiBfY29udmVydFRvV29yZEFycmF5KHN0cikge1xuICAgIHZhciBsV29yZENvdW50O1xuICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XG4gICAgdmFyIGxOdW1iZXJPZldvcmRzVGVtcDIgPSAobE51bWJlck9mV29yZHNUZW1wMSAtIGxOdW1iZXJPZldvcmRzVGVtcDEgJSA2NCkgLyA2NDtcbiAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNUZW1wMiArIDEpICogMTY7XG4gICAgdmFyIGxXb3JkQXJyYXkgPSBuZXcgQXJyYXkobE51bWJlck9mV29yZHMgLSAxKTtcbiAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGxCeXRlQ291bnQgPSAwO1xuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIGxCeXRlQ291bnQgJSA0KSAvIDQ7XG4gICAgICBsQnl0ZVBvc2l0aW9uID0gbEJ5dGVDb3VudCAlIDQgKiA4O1xuICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCBzdHIuY2hhckNvZGVBdChsQnl0ZUNvdW50KSA8PCBsQnl0ZVBvc2l0aW9uO1xuICAgICAgbEJ5dGVDb3VudCsrO1xuICAgIH1cbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSBsQnl0ZUNvdW50ICUgNCkgLyA0O1xuICAgIGxCeXRlUG9zaXRpb24gPSBsQnl0ZUNvdW50ICUgNCAqIDg7XG4gICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAweDgwIDw8IGxCeXRlUG9zaXRpb247XG4gICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcbiAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XG4gICAgcmV0dXJuIGxXb3JkQXJyYXk7XG4gIH07XG5cbiAgdmFyIF93b3JkVG9IZXggPSBmdW5jdGlvbiBfd29yZFRvSGV4KGxWYWx1ZSkge1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZSA9ICcnO1xuICAgIHZhciB3b3JkVG9IZXhWYWx1ZVRlbXAgPSAnJztcbiAgICB2YXIgbEJ5dGU7XG4gICAgdmFyIGxDb3VudDtcblxuICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XG4gICAgICBsQnl0ZSA9IGxWYWx1ZSA+Pj4gbENvdW50ICogOCAmIDI1NTtcbiAgICAgIHdvcmRUb0hleFZhbHVlVGVtcCA9ICcwJyArIGxCeXRlLnRvU3RyaW5nKDE2KTtcbiAgICAgIHdvcmRUb0hleFZhbHVlID0gd29yZFRvSGV4VmFsdWUgKyB3b3JkVG9IZXhWYWx1ZVRlbXAuc3Vic3RyKHdvcmRUb0hleFZhbHVlVGVtcC5sZW5ndGggLSAyLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRUb0hleFZhbHVlO1xuICB9O1xuXG4gIHZhciB4ID0gW107XG4gIHZhciBrO1xuICB2YXIgQUE7XG4gIHZhciBCQjtcbiAgdmFyIENDO1xuICB2YXIgREQ7XG4gIHZhciBhO1xuICB2YXIgYjtcbiAgdmFyIGM7XG4gIHZhciBkO1xuICB2YXIgUzExID0gNztcbiAgdmFyIFMxMiA9IDEyO1xuICB2YXIgUzEzID0gMTc7XG4gIHZhciBTMTQgPSAyMjtcbiAgdmFyIFMyMSA9IDU7XG4gIHZhciBTMjIgPSA5O1xuICB2YXIgUzIzID0gMTQ7XG4gIHZhciBTMjQgPSAyMDtcbiAgdmFyIFMzMSA9IDQ7XG4gIHZhciBTMzIgPSAxMTtcbiAgdmFyIFMzMyA9IDE2O1xuICB2YXIgUzM0ID0gMjM7XG4gIHZhciBTNDEgPSA2O1xuICB2YXIgUzQyID0gMTA7XG4gIHZhciBTNDMgPSAxNTtcbiAgdmFyIFM0NCA9IDIxO1xuXG4gIHN0ciA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgeCA9IF9jb252ZXJ0VG9Xb3JkQXJyYXkoc3RyKTtcbiAgYSA9IDB4Njc0NTIzMDE7XG4gIGIgPSAweEVGQ0RBQjg5O1xuICBjID0gMHg5OEJBRENGRTtcbiAgZCA9IDB4MTAzMjU0NzY7XG5cbiAgeGwgPSB4Lmxlbmd0aDtcbiAgZm9yIChrID0gMDsgayA8IHhsOyBrICs9IDE2KSB7XG4gICAgQUEgPSBhO1xuICAgIEJCID0gYjtcbiAgICBDQyA9IGM7XG4gICAgREQgPSBkO1xuICAgIGEgPSBfRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxXSwgUzEyLCAweEU4QzdCNzU2KTtcbiAgICBjID0gX0ZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xuICAgIGIgPSBfRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyA0XSwgUzExLCAweEY1N0MwRkFGKTtcbiAgICBkID0gX0ZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xuICAgIGMgPSBfRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyA3XSwgUzE0LCAweEZENDY5NTAxKTtcbiAgICBhID0gX0ZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xuICAgIGQgPSBfRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxMF0sIFMxMywgMHhGRkZGNUJCMSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XG4gICAgYSA9IF9GRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XG4gICAgZCA9IF9GRihkLCBhLCBiLCBjLCB4W2sgKyAxM10sIFMxMiwgMHhGRDk4NzE5Myk7XG4gICAgYyA9IF9GRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XG4gICAgYiA9IF9GRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzIxLCAweEY2MUUyNTYyKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMF0sIFMyNCwgMHhFOUI2QzdBQSk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xuICAgIGMgPSBfR0coYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMjMsIDB4RDhBMUU2ODEpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcbiAgICBkID0gX0dHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XG4gICAgYSA9IF9HRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7XG4gICAgZCA9IF9HRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcbiAgICBjID0gX0dHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xuICAgIGIgPSBfR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcbiAgICBjID0gX0hIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xuICAgIGQgPSBfSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcbiAgICBiID0gX0hIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcbiAgICBhID0gX0hIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTtcbiAgICBkID0gX0hIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xuICAgIGMgPSBfSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpO1xuICAgIGEgPSBfSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XG4gICAgZCA9IF9ISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XG4gICAgYyA9IF9ISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7XG4gICAgYiA9IF9ISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xuICAgIGQgPSBfSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XG4gICAgYiA9IF9JSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcbiAgICBhID0gX0lJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xuICAgIGMgPSBfSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7XG4gICAgYSA9IF9JSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcbiAgICBkID0gX0lJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcbiAgICBjID0gX0lJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpO1xuICAgIGIgPSBfSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xuICAgIGEgPSBfSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XG4gICAgZCA9IF9JSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7XG4gICAgYyA9IF9JSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcbiAgICBiID0gX0lJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xuICAgIGEgPSBfYWRkVW5zaWduZWQoYSwgQUEpO1xuICAgIGIgPSBfYWRkVW5zaWduZWQoYiwgQkIpO1xuICAgIGMgPSBfYWRkVW5zaWduZWQoYywgQ0MpO1xuICAgIGQgPSBfYWRkVW5zaWduZWQoZCwgREQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBfd29yZFRvSGV4KGEpICsgX3dvcmRUb0hleChiKSArIF93b3JkVG9IZXgoYykgKyBfd29yZFRvSGV4KGQpO1xuXG4gIHJldHVybiB0ZW1wLnRvTG93ZXJDYXNlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV9zdHIoc3RyLCBhcnJheSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcGFyc2Vfc3RyL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBDYWdyaSBFa2luXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBKYWNrXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gICAgICBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBidWdmaXhlZCBieTogc3RhZzAxOVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyByZWltcGxlbWVudGVkIGJ5OiBzdGFnMDE5XG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gICAgICAgICBpbnB1dCBieTogWmFpZGUgKGh0dHA6Ly96YWlkZXN0aGluZ3MuY29tLylcbiAgLy8gICAgICAgICBpbnB1dCBieTogRGF2aWQgUGVzdGEgKGh0dHA6Ly9kYXZpZHBlc3RhLmNvbS8pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGplaWNxdWVzdFxuICAvLyAgICAgIGJ1Z2ZpeGVkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICAgICAgICAgIG5vdGUgMTogV2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWQsIHdpbGwgcHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUuXG4gIC8vICAgICAgICAgICBub3RlIDE6IFdoZW4gYSBwYXJ0aWN1bGFyIGFyZ3VtZW50IGhhcyBiZWVuIHBhc3NlZCwgYW5kIHRoZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiByZXR1cm5lZCB2YWx1ZSBpcyBkaWZmZXJlbnQgcGFyc2Vfc3RyIG9mIFBIUC5cbiAgLy8gICAgICAgICAgIG5vdGUgMTogRm9yIGV4YW1wbGUsIGE9Yj1jJmQ9PT09Y1xuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHBhcnNlX3N0cignZmlyc3Q9Zm9vJnNlY29uZD1iYXInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgMTogeyBmaXJzdDogJ2ZvbycsIHNlY29uZDogJ2JhcicgfVxuICAvLyAgICAgICAgZXhhbXBsZSAyOiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3N0cignc3RyX2E9SmFjaythbmQrSmlsbCtkaWRuJTI3dCtzZWUrdGhlK3dlbGwuJywgJGFycilcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkYXJyXG4gIC8vICAgICAgICByZXR1cm5zIDI6IHsgc3RyX2E6IFwiSmFjayBhbmQgSmlsbCBkaWRuJ3Qgc2VlIHRoZSB3ZWxsLlwiIH1cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRhYmMgPSB7MzonYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDM6IHBhcnNlX3N0cignYVtiXVtcImNcIl09ZGVmJmFbcV09dCs1JywgJGFiYylcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkYWJjXG4gIC8vICAgICAgICByZXR1cm5zIDM6IHtcIjNcIjpcImFcIixcImFcIjp7XCJiXCI6e1wiY1wiOlwiZGVmXCJ9LFwicVwiOlwidCA1XCJ9fVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJGFyciA9IHt9XG4gIC8vICAgICAgICBleGFtcGxlIDQ6IHBhcnNlX3N0cignYVtdW109dmFsdWUnLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNDoge1wiYVwiOntcIjBcIjp7XCIwXCI6XCJ2YWx1ZVwifX19XG4gIC8vICAgICAgICBleGFtcGxlIDU6IHZhciAkYXJyID0ge31cbiAgLy8gICAgICAgIGV4YW1wbGUgNTogcGFyc2Vfc3RyKCdhPTEmYVtdPTInLCAkYXJyKVxuICAvLyAgICAgICAgZXhhbXBsZSA1OiB2YXIgJHJlc3VsdCA9ICRhcnJcbiAgLy8gICAgICAgIHJldHVybnMgNToge1wiYVwiOntcIjBcIjpcIjJcIn19XG5cbiAgdmFyIHN0ckFyciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL14mLywgJycpLnJlcGxhY2UoLyYkLywgJycpLnNwbGl0KCcmJyk7XG4gIHZhciBzYWwgPSBzdHJBcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBjdDtcbiAgdmFyIHA7XG4gIHZhciBsYXN0T2JqO1xuICB2YXIgb2JqO1xuICB2YXIgY2hyO1xuICB2YXIgdG1wO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciBwb3N0TGVmdEJyYWNrZXRQb3M7XG4gIHZhciBrZXlzO1xuICB2YXIga2V5c0xlbjtcblxuICB2YXIgX2ZpeFN0ciA9IGZ1bmN0aW9uIF9maXhTdHIoc3RyKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICclMjAnKSk7XG4gIH07XG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge307XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXM7XG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fTtcblxuICBpZiAoIWFycmF5KSB7XG4gICAgYXJyYXkgPSAkZ2xvYmFsO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNhbDsgaSsrKSB7XG4gICAgdG1wID0gc3RyQXJyW2ldLnNwbGl0KCc9Jyk7XG4gICAga2V5ID0gX2ZpeFN0cih0bXBbMF0pO1xuICAgIHZhbHVlID0gdG1wLmxlbmd0aCA8IDIgPyAnJyA6IF9maXhTdHIodG1wWzFdKTtcblxuICAgIHdoaWxlIChrZXkuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJ1xceDAwJykgPiAtMSkge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleS5pbmRleE9mKCdcXHgwMCcpKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICYmIGtleS5jaGFyQXQoMCkgIT09ICdbJykge1xuICAgICAga2V5cyA9IFtdO1xuICAgICAgcG9zdExlZnRCcmFja2V0UG9zID0gMDtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoa2V5LmNoYXJBdChqKSA9PT0gJ1snICYmICFwb3N0TGVmdEJyYWNrZXRQb3MpIHtcbiAgICAgICAgICBwb3N0TGVmdEJyYWNrZXRQb3MgPSBqICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY2hhckF0KGopID09PSAnXScpIHtcbiAgICAgICAgICBpZiAocG9zdExlZnRCcmFja2V0UG9zKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc2xpY2UoMCwgcG9zdExlZnRCcmFja2V0UG9zIC0gMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cihwb3N0TGVmdEJyYWNrZXRQb3MsIGogLSBwb3N0TGVmdEJyYWNrZXRQb3MpKTtcbiAgICAgICAgICAgIHBvc3RMZWZ0QnJhY2tldFBvcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGogKyAxKSAhPT0gJ1snKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIGtleXMgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGtleXNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY2hyID0ga2V5c1swXS5jaGFyQXQoaik7XG5cbiAgICAgICAgaWYgKGNociA9PT0gJyAnIHx8IGNociA9PT0gJy4nIHx8IGNociA9PT0gJ1snKSB7XG4gICAgICAgICAga2V5c1swXSA9IGtleXNbMF0uc3Vic3RyKDAsIGopICsgJ18nICsga2V5c1swXS5zdWJzdHIoaiArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNociA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqID0gYXJyYXk7XG5cbiAgICAgIGZvciAoaiA9IDAsIGtleXNMZW4gPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW47IGorKykge1xuICAgICAgICBrZXkgPSBrZXlzW2pdLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgICAgIGxhc3RPYmogPSBvYmo7XG5cbiAgICAgICAgaWYgKChrZXkgPT09ICcnIHx8IGtleSA9PT0gJyAnKSAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgLy8gSW5zZXJ0IG5ldyBkaW1lbnNpb25cbiAgICAgICAgICBjdCA9IC0xO1xuXG4gICAgICAgICAgZm9yIChwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICBpZiAoK3AgPiBjdCAmJiBwLm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgICAgICAgICAgICBjdCA9ICtwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gY3QgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJpbWl0aXZlIHZhbHVlLCByZXBsYWNlIHdpdGggb2JqZWN0XG4gICAgICAgIGlmIChPYmplY3Qob2JqW2tleV0pICE9PSBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGFzdE9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2Vfc3RyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBydHJpbShzdHIsIGNoYXJsaXN0KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcnRyaW0vXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICBpbnB1dCBieTogRXJrZWtqZXR0ZXJcbiAgLy8gICAgaW5wdXQgYnk6IHJlbVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgZXhhbXBsZSAxOiBydHJpbSgnICAgIEtldmluIHZhbiBab25uZXZlbGQgICAgJylcbiAgLy8gICByZXR1cm5zIDE6ICcgICAgS2V2aW4gdmFuIFpvbm5ldmVsZCdcblxuICBjaGFybGlzdCA9ICFjaGFybGlzdCA/ICcgXFxcXHNcXHhBMCcgOiAoY2hhcmxpc3QgKyAnJykucmVwbGFjZSgvKFtbXFxdKCkuPy8qe30rJF46XSkvZywgJ1xcXFwkMScpO1xuXG4gIHZhciByZSA9IG5ldyBSZWdFeHAoJ1snICsgY2hhcmxpc3QgKyAnXSskJywgJ2cnKTtcblxuICByZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKHJlLCAnJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnRyaW0uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cnBvcyhoYXlzdGFjaywgbmVlZGxlLCBvZmZzZXQpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9zdHJwb3MvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gYnVnZml4ZWQgYnk6IERhbmllbCBFc3RlYmFuXG4gIC8vICAgZXhhbXBsZSAxOiBzdHJwb3MoJ0tldmluIHZhbiBab25uZXZlbGQnLCAnZScsIDUpXG4gIC8vICAgcmV0dXJucyAxOiAxNFxuXG4gIHZhciBpID0gKGhheXN0YWNrICsgJycpLmluZGV4T2YobmVlZGxlLCBvZmZzZXQgfHwgMCk7XG4gIHJldHVybiBpID09PSAtMSA/IGZhbHNlIDogaTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJwb3MuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2U2NF9kZWNvZGUoZW5jb2RlZERhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9iYXNlNjRfZGVjb2RlL1xuICAvLyBvcmlnaW5hbCBieTogVHlsZXIgQWtpbnMgKGh0dHA6Ly9ydW1raW4uY29tKVxuICAvLyBpbXByb3ZlZCBieTogVGh1bmRlci5tXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgaW5wdXQgYnk6IEFtYW4gR3VwdGFcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBQZWxsZW50ZXNxdWUgTWFsZXN1YWRhXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogSW5kaWdvNzQ0XG4gIC8vICAgZXhhbXBsZSAxOiBiYXNlNjRfZGVjb2RlKCdTMlYyYVc0Z2RtRnVJRnB2Ym01bGRtVnNaQT09JylcbiAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuICAvLyAgIGV4YW1wbGUgMjogYmFzZTY0X2RlY29kZSgnWVE9PScpXG4gIC8vICAgcmV0dXJucyAyOiAnYSdcbiAgLy8gICBleGFtcGxlIDM6IGJhc2U2NF9kZWNvZGUoJzRweVRJTU9nSUd4aElHMXZaR1U9JylcbiAgLy8gICByZXR1cm5zIDM6ICfinJMgw6AgbGEgbW9kZSdcblxuICAvLyBkZWNvZGVVVEY4c3RyaW5nKClcbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZGVjb2RlIHByb3Blcmx5IFVURjggc3RyaW5nXG4gIC8vIEFkYXB0ZWQgZnJvbSBTb2x1dGlvbiAjMSBhdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgdmFyIGRlY29kZVVURjhzdHJpbmcgPSBmdW5jdGlvbiBkZWNvZGVVVEY4c3RyaW5nKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5hdG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcod2luZG93LmF0b2IoZW5jb2RlZERhdGEpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5jb2RlZERhdGEsICdiYXNlNjQnKS50b1N0cmluZygndXRmLTgnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBkZWMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghZW5jb2RlZERhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlZERhdGE7XG4gIH1cblxuICBlbmNvZGVkRGF0YSArPSAnJztcblxuICBkbyB7XG4gICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcbiAgICBoMSA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMiA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoMyA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcbiAgICBoNCA9IGI2NC5pbmRleE9mKGVuY29kZWREYXRhLmNoYXJBdChpKyspKTtcblxuICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuXG4gICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcbiAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XG4gICAgbzMgPSBiaXRzICYgMHhmZjtcblxuICAgIGlmIChoMyA9PT0gNjQpIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xuICAgIH0gZWxzZSBpZiAoaDQgPT09IDY0KSB7XG4gICAgICB0bXBBcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEFyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgZW5jb2RlZERhdGEubGVuZ3RoKTtcblxuICBkZWMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgcmV0dXJuIGRlY29kZVVURjhzdHJpbmcoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZGVjb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlNjRfZW5jb2RlKHN0cmluZ1RvRW5jb2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvYmFzZTY0X2VuY29kZS9cbiAgLy8gb3JpZ2luYWwgYnk6IFR5bGVyIEFraW5zIChodHRwOi8vcnVta2luLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEJheXJvbiBHdWV2YXJhXG4gIC8vIGltcHJvdmVkIGJ5OiBUaHVuZGVyLm1cbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IFBlbGxlbnRlc3F1ZSBNYWxlc3VhZGFcbiAgLy8gaW1wcm92ZWQgYnk6IEluZGlnbzc0NFxuICAvLyAgIGV4YW1wbGUgMTogYmFzZTY0X2VuY29kZSgnS2V2aW4gdmFuIFpvbm5ldmVsZCcpXG4gIC8vICAgcmV0dXJucyAxOiAnUzJWMmFXNGdkbUZ1SUZwdmJtNWxkbVZzWkE9PSdcbiAgLy8gICBleGFtcGxlIDI6IGJhc2U2NF9lbmNvZGUoJ2EnKVxuICAvLyAgIHJldHVybnMgMjogJ1lRPT0nXG4gIC8vICAgZXhhbXBsZSAzOiBiYXNlNjRfZW5jb2RlKCfinJMgw6AgbGEgbW9kZScpXG4gIC8vICAgcmV0dXJucyAzOiAnNHB5VElNT2dJR3hoSUcxdlpHVT0nXG5cbiAgLy8gZW5jb2RlVVRGOHN0cmluZygpXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGVuY29kZSBwcm9wZXJseSBVVEY4IHN0cmluZ1xuICAvLyBBZGFwdGVkIGZyb20gU29sdXRpb24gIzEgYXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXG4gIHZhciBlbmNvZGVVVEY4c3RyaW5nID0gZnVuY3Rpb24gZW5jb2RlVVRGOHN0cmluZyhzdHIpIHtcbiAgICAvLyBmaXJzdCB3ZSB1c2UgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGdldCBwZXJjZW50LWVuY29kZWQgVVRGLTgsXG4gICAgLy8gdGhlbiB3ZSBjb252ZXJ0IHRoZSBwZXJjZW50IGVuY29kaW5ncyBpbnRvIHJhdyBieXRlcyB3aGljaFxuICAgIC8vIGNhbiBiZSBmZWQgaW50byB0aGUgYmFzZTY0IGVuY29kaW5nIGFsZ29yaXRobS5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5idG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nVG9FbmNvZGUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB2YXIgbzE7XG4gIHZhciBvMjtcbiAgdmFyIG8zO1xuICB2YXIgaDE7XG4gIHZhciBoMjtcbiAgdmFyIGgzO1xuICB2YXIgaDQ7XG4gIHZhciBiaXRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhYyA9IDA7XG4gIHZhciBlbmMgPSAnJztcbiAgdmFyIHRtcEFyciA9IFtdO1xuXG4gIGlmICghc3RyaW5nVG9FbmNvZGUpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9FbmNvZGU7XG4gIH1cblxuICBzdHJpbmdUb0VuY29kZSA9IGVuY29kZVVURjhzdHJpbmcoc3RyaW5nVG9FbmNvZGUpO1xuXG4gIGRvIHtcbiAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXG4gICAgbzEgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzIgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgbzMgPSBzdHJpbmdUb0VuY29kZS5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICBiaXRzID0gbzEgPDwgMTYgfCBvMiA8PCA4IHwgbzM7XG5cbiAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xuICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XG4gICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xuICAgIGg0ID0gYml0cyAmIDB4M2Y7XG5cbiAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xuICAgIHRtcEFyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xuICB9IHdoaWxlIChpIDwgc3RyaW5nVG9FbmNvZGUubGVuZ3RoKTtcblxuICBlbmMgPSB0bXBBcnIuam9pbignJyk7XG5cbiAgdmFyIHIgPSBzdHJpbmdUb0VuY29kZS5sZW5ndGggJSAzO1xuXG4gIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjRfZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0dHBfYnVpbGRfcXVlcnkoZm9ybWRhdGEsIG51bWVyaWNQcmVmaXgsIGFyZ1NlcGFyYXRvciwgZW5jVHlwZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2h0dHBfYnVpbGRfcXVlcnkvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogTGVnYWV2IEFuZHJleVxuICAvLyBpbXByb3ZlZCBieTogTWljaGFlbCBXaGl0ZSAoaHR0cDovL2dldHNwcmluay5jb20pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gIHJldmlzZWQgYnk6IHN0YWcwMTlcbiAgLy8gICAgaW5wdXQgYnk6IERyZWFtZXJcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBNSU9fS09EVUtJIChodHRwOi8vbWlvLWtvZHVraS5ibG9nc3BvdC5jb20vKVxuICAvLyBpbXByb3ZlZCBieTogV2lsbCBSb3dlXG4gIC8vICAgICAgbm90ZSAxOiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwga2V5IGFuZCB2YWx1ZSBhcmUgc2tpcHBlZCBpbiB0aGVcbiAgLy8gICAgICBub3RlIDE6IGh0dHBfYnVpbGRfcXVlcnkgb2YgUEhQIHdoaWxlIGluIGxvY3V0dXMgdGhleSBhcmUgbm90LlxuICAvLyAgIGV4YW1wbGUgMTogaHR0cF9idWlsZF9xdWVyeSh7Zm9vOiAnYmFyJywgcGhwOiAnaHlwZXJ0ZXh0IHByb2Nlc3NvcicsIGJhejogJ2Jvb20nLCBjb3c6ICdtaWxrJ30sICcnLCAnJmFtcDsnKVxuICAvLyAgIHJldHVybnMgMTogJ2Zvbz1iYXImYW1wO3BocD1oeXBlcnRleHQrcHJvY2Vzc29yJmFtcDtiYXo9Ym9vbSZhbXA7Y293PW1pbGsnXG4gIC8vICAgZXhhbXBsZSAyOiBodHRwX2J1aWxkX3F1ZXJ5KHsncGhwJzogJ2h5cGVydGV4dCBwcm9jZXNzb3InLCAwOiAnZm9vJywgMTogJ2JhcicsIDI6ICdiYXonLCAzOiAnYm9vbScsICdjb3cnOiAnbWlsayd9LCAnbXl2YXJfJylcbiAgLy8gICByZXR1cm5zIDI6ICdteXZhcl8wPWZvbyZteXZhcl8xPWJhciZteXZhcl8yPWJheiZteXZhcl8zPWJvb20mcGhwPWh5cGVydGV4dCtwcm9jZXNzb3ImY293PW1pbGsnXG4gIC8vICAgZXhhbXBsZSAzOiBodHRwX2J1aWxkX3F1ZXJ5KHtmb286ICdiYXInLCBwaHA6ICdoeXBlcnRleHQgcHJvY2Vzc29yJywgYmF6OiAnYm9vbScsIGNvdzogJ21pbGsnfSwgJycsICcmYW1wOycsICdQSFBfUVVFUllfUkZDMzk4NicpXG4gIC8vICAgcmV0dXJucyAzOiAnZm9vPWJhciZhbXA7cGhwPWh5cGVydGV4dCUyMHByb2Nlc3NvciZhbXA7YmF6PWJvb20mYW1wO2Nvdz1taWxrJ1xuXG4gIHZhciBlbmNvZGVGdW5jO1xuXG4gIHN3aXRjaCAoZW5jVHlwZSkge1xuICAgIGNhc2UgJ1BIUF9RVUVSWV9SRkMzOTg2JzpcbiAgICAgIGVuY29kZUZ1bmMgPSByZXF1aXJlKCcuLi91cmwvcmF3dXJsZW5jb2RlJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BIUF9RVUVSWV9SRkMxNzM4JzpcbiAgICBkZWZhdWx0OlxuICAgICAgZW5jb2RlRnVuYyA9IHJlcXVpcmUoJy4uL3VybC91cmxlbmNvZGUnKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIHZhbHVlO1xuICB2YXIga2V5O1xuICB2YXIgdG1wID0gW107XG5cbiAgdmFyIF9odHRwQnVpbGRRdWVyeUhlbHBlciA9IGZ1bmN0aW9uIF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXksIHZhbCwgYXJnU2VwYXJhdG9yKSB7XG4gICAgdmFyIGs7XG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgIHZhbCA9ICcxJztcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gZmFsc2UpIHtcbiAgICAgIHZhbCA9ICcwJztcbiAgICB9XG4gICAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgICAgaWYgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChrIGluIHZhbCkge1xuICAgICAgICAgIGlmICh2YWxba10gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXkgKyAnWycgKyBrICsgJ10nLCB2YWxba10sIGFyZ1NlcGFyYXRvcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wLmpvaW4oYXJnU2VwYXJhdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZW5jb2RlRnVuYyhrZXkpICsgJz0nICsgZW5jb2RlRnVuYyh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcHJvY2Vzc2luZyBmb3IgaHR0cF9idWlsZF9xdWVyeSgpLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIGlmICghYXJnU2VwYXJhdG9yKSB7XG4gICAgYXJnU2VwYXJhdG9yID0gJyYnO1xuICB9XG4gIGZvciAoa2V5IGluIGZvcm1kYXRhKSB7XG4gICAgdmFsdWUgPSBmb3JtZGF0YVtrZXldO1xuICAgIGlmIChudW1lcmljUHJlZml4ICYmICFpc05hTihrZXkpKSB7XG4gICAgICBrZXkgPSBTdHJpbmcobnVtZXJpY1ByZWZpeCkgKyBrZXk7XG4gICAgfVxuICAgIHZhciBxdWVyeSA9IF9odHRwQnVpbGRRdWVyeUhlbHBlcihrZXksIHZhbHVlLCBhcmdTZXBhcmF0b3IpO1xuICAgIGlmIChxdWVyeSAhPT0gJycpIHtcbiAgICAgIHRtcC5wdXNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wLmpvaW4oYXJnU2VwYXJhdG9yKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwX2J1aWxkX3F1ZXJ5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZV91cmwoc3RyLCBjb21wb25lbnQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3BhcnNlX3VybC9cbiAgLy8gICAgICBvcmlnaW5hbCBieTogU3RldmVuIExldml0aGFuIChodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IExvcmVuem8gUGlzYW5pXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFRvbnlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICAgICAgIG5vdGUgMTogb3JpZ2luYWwgYnkgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBibG9nIHBvc3QgYXQgaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXG4gIC8vICAgICAgICAgICBub3RlIDE6IGRlbW8gYXQgaHR0cDovL3N0ZXZlbmxldml0aGFuLmNvbS9kZW1vL3BhcnNldXJpL2pzL2Fzc2V0cy9wYXJzZXVyaS5qc1xuICAvLyAgICAgICAgICAgbm90ZSAxOiBEb2VzIG5vdCByZXBsYWNlIGludmFsaWQgY2hhcmFjdGVycyB3aXRoICdfJyBhcyBpbiBQSFAsXG4gIC8vICAgICAgICAgICBub3RlIDE6IG5vciBkb2VzIGl0IHJldHVybiBmYWxzZSB3aXRoXG4gIC8vICAgICAgICAgICBub3RlIDE6IGEgc2VyaW91c2x5IG1hbGZvcm1lZCBVUkwuXG4gIC8vICAgICAgICAgICBub3RlIDE6IEJlc2lkZXMgZnVuY3Rpb24gbmFtZSwgaXMgZXNzZW50aWFsbHkgdGhlIHNhbWUgYXMgcGFyc2VVcmkgYXNcbiAgLy8gICAgICAgICAgIG5vdGUgMTogd2VsbCBhcyBvdXIgYWxsb3dpbmdcbiAgLy8gICAgICAgICAgIG5vdGUgMTogYW4gZXh0cmEgc2xhc2ggYWZ0ZXIgdGhlIHNjaGVtZS9wcm90b2NvbCAodG8gYWxsb3cgZmlsZTovLy8gYXMgaW4gUEhQKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBwYXJzZV91cmwoJ2h0dHA6Ly91c2VyOnBhc3NAaG9zdC9wYXRoP2E9diNhJylcbiAgLy8gICAgICAgIHJldHVybnMgMToge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnaG9zdCcsIHVzZXI6ICd1c2VyJywgcGFzczogJ3Bhc3MnLCBwYXRoOiAnL3BhdGgnLCBxdWVyeTogJ2E9dicsIGZyYWdtZW50OiAnYSd9XG4gIC8vICAgICAgICBleGFtcGxlIDI6IHBhcnNlX3VybCgnaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5JylcbiAgLy8gICAgICAgIHJldHVybnMgMjoge3NjaGVtZTogJ2h0dHAnLCBob3N0OiAnZW4ud2lraXBlZGlhLm9yZycsIHBhdGg6ICcvd2lraS8lMjJAJTIyXyUyOGFsYnVtJTI5J31cbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcGFyc2VfdXJsKCdodHRwczovL2hvc3QuZG9tYWluLnRsZC9hQGIuYy9mb2xkZXInKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiB7c2NoZW1lOiAnaHR0cHMnLCBob3N0OiAnaG9zdC5kb21haW4udGxkJywgcGF0aDogJy9hQGIuYy9mb2xkZXInfVxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBwYXJzZV91cmwoJ2h0dHBzOi8vZ29vZHVzZXI6c2VjcmV0cGFzc3dvcmRAd3d3LmV4YW1wbGUuY29tL2FAYi5jL2ZvbGRlcj9mb289YmFyJylcbiAgLy8gICAgICAgIHJldHVybnMgNDogeyBzY2hlbWU6ICdodHRwcycsIGhvc3Q6ICd3d3cuZXhhbXBsZS5jb20nLCBwYXRoOiAnL2FAYi5jL2ZvbGRlcicsIHF1ZXJ5OiAnZm9vPWJhcicsIHVzZXI6ICdnb29kdXNlcicsIHBhc3M6ICdzZWNyZXRwYXNzd29yZCcgfVxuXG4gIHZhciBxdWVyeTtcblxuICB2YXIgbW9kZSA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5wYXJzZV91cmwubW9kZScpIDogdW5kZWZpbmVkKSB8fCAncGhwJztcblxuICB2YXIga2V5ID0gWydzb3VyY2UnLCAnc2NoZW1lJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3MnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnZnJhZ21lbnQnXTtcblxuICAvLyBGb3IgbG9vc2Ugd2UgYWRkZWQgb25lIG9wdGlvbmFsIHNsYXNoIHRvIHBvc3Qtc2NoZW1lIHRvIGNhdGNoIGZpbGU6Ly8vIChzaG91bGQgcmVzdHJpY3QgdGhpcylcbiAgdmFyIHBhcnNlciA9IHtcbiAgICBwaHA6IG5ldyBSZWdFeHAoWycoPzooW146XFxcXC8/I10rKTopPycsICcoPzpcXFxcL1xcXFwvKCkoPzooPzooKSg/OihbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLCAnKCknLCAnKD86KCgpKD86KD86W14/I1xcXFwvXSpcXFxcLykqKSgpKD86W14/I10qKSkoPzpcXFxcPyhbXiNdKikpPyg/OiMoLiopKT8pJ10uam9pbignJykpLFxuICAgIHN0cmljdDogbmV3IFJlZ0V4cChbJyg/OihbXjpcXFxcLz8jXSspOik/JywgJyg/OlxcXFwvXFxcXC8oKD86KChbXjpAXFxcXC9dKik6PyhbXjpAXFxcXC9dKikpP0ApPyhbXjpcXFxcLz8jXSopKD86OihcXFxcZCopKT8pKT8nLCAnKCgoKD86W14/I1xcXFwvXSpcXFxcLykqKShbXj8jXSopKSg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSksXG4gICAgbG9vc2U6IG5ldyBSZWdFeHAoWycoPzooPyFbXjpAXSs6W146QFxcXFwvXSpAKShbXjpcXFxcLz8jLl0rKTopPycsICcoPzpcXFxcL1xcXFwvXFxcXC8/KT8nLCAnKCg/OigoW146QFxcXFwvXSopOj8oW146QFxcXFwvXSopKT9AKT8oW146XFxcXC8/I10qKSg/OjooXFxcXGQqKSk/KScsICcoKChcXFxcLyg/OltePyNdKD8hW14/I1xcXFwvXSpcXFxcLltePyNcXFxcLy5dKyg/Ols/I118JCkpKSpcXFxcLz8pPyhbXj8jXFxcXC9dKikpJywgJyg/OlxcXFw/KFteI10qKSk/KD86IyguKikpPyknXS5qb2luKCcnKSlcbiAgfTtcblxuICB2YXIgbSA9IHBhcnNlclttb2RlXS5leGVjKHN0cik7XG4gIHZhciB1cmkgPSB7fTtcbiAgdmFyIGkgPSAxNDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKG1baV0pIHtcbiAgICAgIHVyaVtrZXlbaV1dID0gbVtpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHVyaVtjb21wb25lbnQucmVwbGFjZSgnUEhQX1VSTF8nLCAnJykudG9Mb3dlckNhc2UoKV07XG4gIH1cblxuICBpZiAobW9kZSAhPT0gJ3BocCcpIHtcbiAgICB2YXIgbmFtZSA9ICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCcuLi9pbmZvL2luaV9nZXQnKSgnbG9jdXR1cy5wYXJzZV91cmwucXVlcnlLZXknKSA6IHVuZGVmaW5lZCkgfHwgJ3F1ZXJ5S2V5JztcbiAgICBwYXJzZXIgPSAvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2c7XG4gICAgdXJpW25hbWVdID0ge307XG4gICAgcXVlcnkgPSB1cmlba2V5WzEyXV0gfHwgJyc7XG4gICAgcXVlcnkucmVwbGFjZShwYXJzZXIsIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG4gICAgICBpZiAoJDEpIHtcbiAgICAgICAgdXJpW25hbWVdWyQxXSA9ICQyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIHVyaS5zb3VyY2U7XG4gIHJldHVybiB1cmk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2VfdXJsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByYXd1cmxkZWNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC9yYXd1cmxkZWNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IGxvdmlvXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyB0byBkZWNvZGVcbiAgLy8gICAgICAgICAgIG5vdGUgMTogZnJvbSBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiByYXd1cmxkZWNvZGUoJ0tldmluK3Zhbitab25uZXZlbGQlMjEnKVxuICAvLyAgICAgICAgcmV0dXJucyAxOiAnS2V2aW4rdmFuK1pvbm5ldmVsZCEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHJhd3VybGRlY29kZSgnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRicpXG4gIC8vICAgICAgICByZXR1cm5zIDI6ICdodHRwOi8va3Z6LmlvLydcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogcmF3dXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0QnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT0nXG5cbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCgoc3RyICsgJycpLnJlcGxhY2UoLyUoPyFbXFxkYS1mXXsyfSkvZ2ksIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQSFAgdG9sZXJhdGVzIHBvb3JseSBmb3JtZWQgZXNjYXBlIHNlcXVlbmNlc1xuICAgIHJldHVybiAnJTI1JztcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhd3VybGRlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmF3dXJsZW5jb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvcmF3dXJsZW5jb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBNaWNoYWVsIEdyaWVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEpvcmlzXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFRoaXMgcmVmbGVjdHMgUEhQIDUuMy82LjArIGJlaGF2aW9yXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb24gZXhwZWN0cyBcXFxuICAvLyAgICAgICAgICAgbm90ZSAxOiB0byBlbmNvZGUgaW50byBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiByYXd1cmxlbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQhJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluJTIwdmFuJTIwWm9ubmV2ZWxkJTIxJ1xuICAvLyAgICAgICAgZXhhbXBsZSAyOiByYXd1cmxlbmNvZGUoJ2h0dHA6Ly9rdnouaW8vJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHAlM0ElMkYlMkZrdnouaW8lMkYnXG4gIC8vICAgICAgICBleGFtcGxlIDM6IHJhd3VybGVuY29kZSgnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCcpXG4gIC8vICAgICAgICByZXR1cm5zIDM6ICdodHRwJTNBJTJGJTJGd3d3Lmdvb2dsZS5ubCUyRnNlYXJjaCUzRnElM0RMb2N1dHVzJTI2aWUlM0R1dGYtOCdcblxuICBzdHIgPSBzdHIgKyAnJztcblxuICAvLyBUaWxkZSBzaG91bGQgYmUgYWxsb3dlZCB1bmVzY2FwZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBIUCAoYXMgcmVmbGVjdGVkIGJlbG93KSxcbiAgLy8gYnV0IGlmIHlvdSB3YW50IHRvIHJlZmxlY3QgY3VycmVudFxuICAvLyBQSFAgYmVoYXZpb3IsIHlvdSB3b3VsZCBuZWVkIHRvIGFkZCBcIi5yZXBsYWNlKC9+L2csICclN0UnKTtcIiB0byB0aGUgZm9sbG93aW5nLlxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvIS9nLCAnJTIxJykucmVwbGFjZSgvJy9nLCAnJTI3JykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoL1xcKi9nLCAnJTJBJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmF3dXJsZW5jb2RlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1cmxkZWNvZGUoc3RyKSB7XG4gIC8vICAgICAgIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91cmxkZWNvZGUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBMYXJzIEZpc2NoZXJcbiAgLy8gICAgICBpbXByb3ZlZCBieTogT3JsYW5kb1xuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBBSlxuICAvLyAgICAgICAgIGlucHV0IGJ5OiB0cmF2Y1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICAgICAgIGlucHV0IGJ5OiBSYXRoZW91c1xuICAvLyAgICAgICAgIGlucHV0IGJ5OiBlLW1pa2VcbiAgLy8gICAgICAgICBpbnB1dCBieTogbG92aW9cbiAgLy8gICAgICBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBidWdmaXhlZCBieTogUm9iXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IGluZm8gb24gd2hhdCBlbmNvZGluZyBmdW5jdGlvbnMgdG8gdXNlIGZyb206XG4gIC8vICAgICAgICAgICBub3RlIDE6IGh0dHA6Ly94a3IudXMvYXJ0aWNsZXMvamF2YXNjcmlwdC9lbmNvZGUtY29tcGFyZS9cbiAgLy8gICAgICAgICAgIG5vdGUgMTogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhpcyBmdW5jdGlvbiBleHBlY3RzIHRvIGRlY29kZVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBmcm9tIFVURi04IGVuY29kZWQgc3RyaW5ncywgYXMgZm91bmQgb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogcGFnZXMgc2VydmVkIGFzIFVURi04XG4gIC8vICAgICAgICBleGFtcGxlIDE6IHVybGRlY29kZSgnS2V2aW4rdmFuK1pvbm5ldmVsZCUyMScpXG4gIC8vICAgICAgICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkISdcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogdXJsZGVjb2RlKCdodHRwJTNBJTJGJTJGa3Z6LmlvJTJGJylcbiAgLy8gICAgICAgIHJldHVybnMgMjogJ2h0dHA6Ly9rdnouaW8vJ1xuICAvLyAgICAgICAgZXhhbXBsZSAzOiB1cmxkZWNvZGUoJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04JTI2b2UlM0R1dGYtOCUyNmFxJTNEdCUyNnJscyUzRGNvbS51YnVudHUlM0Flbi1VUyUzQXVub2ZmaWNpYWwlMjZjbGllbnQlM0RmaXJlZm94LWEnKVxuICAvLyAgICAgICAgcmV0dXJucyAzOiAnaHR0cDovL3d3dy5nb29nbGUubmwvc2VhcmNoP3E9TG9jdXR1cyZpZT11dGYtOCZvZT11dGYtOCZhcT10JnJscz1jb20udWJ1bnR1OmVuLVVTOnVub2ZmaWNpYWwmY2xpZW50PWZpcmVmb3gtYSdcbiAgLy8gICAgICAgIGV4YW1wbGUgNDogdXJsZGVjb2RlKCclRTUlQTUlQkQlM180JylcbiAgLy8gICAgICAgIHJldHVybnMgNDogJ1xcdTU5N2QlM180J1xuXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHN0ciArICcnKS5yZXBsYWNlKC8lKD8hW1xcZGEtZl17Mn0pL2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUEhQIHRvbGVyYXRlcyBwb29ybHkgZm9ybWVkIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICByZXR1cm4gJyUyNSc7XG4gIH0pLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybGRlY29kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJsZW5jb2RlKHN0cikge1xuICAvLyAgICAgICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdXJsZW5jb2RlL1xuICAvLyAgICAgIG9yaWdpbmFsIGJ5OiBQaGlsaXAgUGV0ZXJzb25cbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBpbXByb3ZlZCBieTogTGFycyBGaXNjaGVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEFKXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IHRyYXZjXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IFJhdGhlb3VzXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IEpvcmlzXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgICAgICBub3RlIDE6IFRoaXMgcmVmbGVjdHMgUEhQIDUuMy82LjArIGJlaGF2aW9yXG4gIC8vICAgICAgICAgICBub3RlIDE6IFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoaXMgZnVuY3Rpb25cbiAgLy8gICAgICAgICAgIG5vdGUgMTogZXhwZWN0cyB0byBlbmNvZGUgaW50byBVVEYtOCBlbmNvZGVkIHN0cmluZ3MsIGFzIGZvdW5kIG9uXG4gIC8vICAgICAgICAgICBub3RlIDE6IHBhZ2VzIHNlcnZlZCBhcyBVVEYtOFxuICAvLyAgICAgICAgZXhhbXBsZSAxOiB1cmxlbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQhJylcbiAgLy8gICAgICAgIHJldHVybnMgMTogJ0tldmluK3Zhbitab25uZXZlbGQlMjEnXG4gIC8vICAgICAgICBleGFtcGxlIDI6IHVybGVuY29kZSgnaHR0cDovL2t2ei5pby8nKVxuICAvLyAgICAgICAgcmV0dXJucyAyOiAnaHR0cCUzQSUyRiUyRmt2ei5pbyUyRidcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogdXJsZW5jb2RlKCdodHRwOi8vd3d3Lmdvb2dsZS5ubC9zZWFyY2g/cT1Mb2N1dHVzJmllPXV0Zi04JylcbiAgLy8gICAgICAgIHJldHVybnMgMzogJ2h0dHAlM0ElMkYlMkZ3d3cuZ29vZ2xlLm5sJTJGc2VhcmNoJTNGcSUzRExvY3V0dXMlMjZpZSUzRHV0Zi04J1xuXG4gIHN0ciA9IHN0ciArICcnO1xuXG4gIC8vIFRpbGRlIHNob3VsZCBiZSBhbGxvd2VkIHVuZXNjYXBlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUEhQIChhcyByZWZsZWN0ZWQgYmVsb3cpLFxuICAvLyBidXQgaWYgeW91IHdhbnQgdG8gcmVmbGVjdCBjdXJyZW50XG4gIC8vIFBIUCBiZWhhdmlvciwgeW91IHdvdWxkIG5lZWQgdG8gYWRkIFwiLnJlcGxhY2UoL34vZywgJyU3RScpO1wiIHRvIHRoZSBmb2xsb3dpbmcuXG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8hL2csICclMjEnKS5yZXBsYWNlKC8nL2csICclMjcnKS5yZXBsYWNlKC9cXCgvZywgJyUyOCcpLnJlcGxhY2UoL1xcKS9nLCAnJTI5JykucmVwbGFjZSgvXFwqL2csICclMkEnKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmxlbmNvZGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNfY2FsbGFibGUobWl4ZWRWYXIsIHN5bnRheE9ubHksIGNhbGxhYmxlTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL2lzX2NhbGxhYmxlL1xuICAvLyBvcmlnaW5hbCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgaW5wdXQgYnk6IEZyYW7Dp29pc1xuICAvLyBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHA6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gICAgICBub3RlIDE6IFRoZSB2YXJpYWJsZSBjYWxsYWJsZU5hbWUgY2Fubm90IHdvcmsgYXMgYSBzdHJpbmcgdmFyaWFibGUgcGFzc2VkIGJ5XG4gIC8vICAgICAgbm90ZSAxOiByZWZlcmVuY2UgYXMgaW4gUEhQIChzaW5jZSBKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZ1xuICAvLyAgICAgIG5vdGUgMTogc3RyaW5ncyBieSByZWZlcmVuY2UpLCBidXQgaW5zdGVhZCB3aWxsIHRha2UgdGhlIG5hbWUgb2ZcbiAgLy8gICAgICBub3RlIDE6IGEgZ2xvYmFsIHZhcmlhYmxlIGFuZCBzZXQgdGhhdCBpbnN0ZWFkLlxuICAvLyAgICAgIG5vdGUgMTogV2hlbiB1c2VkIG9uIGFuIG9iamVjdCwgZGVwZW5kcyBvbiBhIGNvbnN0cnVjdG9yIHByb3BlcnR5XG4gIC8vICAgICAgbm90ZSAxOiBiZWluZyBrZXB0IG9uIHRoZSBvYmplY3QgcHJvdG90eXBlXG4gIC8vICAgICAgbm90ZSAyOiBEZXBlbmRpbmcgb24gdGhlIGBjYWxsYWJsZU5hbWVgIHRoYXQgaXMgcGFzc2VkLCB0aGlzIGZ1bmN0aW9uIGNhbiB1c2UgZXZhbC5cbiAgLy8gICAgICBub3RlIDI6IFRoZSBldmFsIGlucHV0IGlzIGhvd2V2ZXIgY2hlY2tlZCB0byBvbmx5IGFsbG93IHZhbGlkIGZ1bmN0aW9uIG5hbWVzLFxuICAvLyAgICAgIG5vdGUgMjogU28gaXQgc2hvdWxkIG5vdCBiZSB1bnNhZmVyIHRoYW4gdXNlcyB3aXRob3V0IGV2YWwgKHNlZWluZyBhcyB5b3UgY2FuKVxuICAvLyAgICAgIG5vdGUgMjogYWxyZWFkeSBwYXNzIGFueSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBoZXJlLlxuICAvLyAgIGV4YW1wbGUgMTogaXNfY2FsbGFibGUoJ2lzX2NhbGxhYmxlJylcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGlzX2NhbGxhYmxlKCdib2d1c0Z1bmN0aW9uJywgdHJ1ZSlcbiAgLy8gICByZXR1cm5zIDI6IHRydWUgLy8gZ2l2ZXMgdHJ1ZSBiZWNhdXNlIGRvZXMgbm90IGRvIHN0cmljdCBjaGVja2luZ1xuICAvLyAgIGV4YW1wbGUgMzogZnVuY3Rpb24gU29tZUNsYXNzICgpIHt9XG4gIC8vICAgZXhhbXBsZSAzOiBTb21lQ2xhc3MucHJvdG90eXBlLnNvbWVNZXRob2QgPSBmdW5jdGlvbiAoKXt9XG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgdGVzdE9iaiA9IG5ldyBTb21lQ2xhc3MoKVxuICAvLyAgIGV4YW1wbGUgMzogaXNfY2FsbGFibGUoW3Rlc3RPYmosICdzb21lTWV0aG9kJ10sIHRydWUsICdteVZhcicpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9IG15VmFyXG4gIC8vICAgcmV0dXJucyAzOiAnU29tZUNsYXNzOjpzb21lTWV0aG9kJ1xuICAvLyAgIGV4YW1wbGUgNDogaXNfY2FsbGFibGUoZnVuY3Rpb24gKCkge30pXG4gIC8vICAgcmV0dXJucyA0OiB0cnVlXG5cbiAgdmFyICRnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcblxuICB2YXIgdmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4gPSAvXltfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qJC87XG5cbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgbWV0aG9kID0gJyc7XG4gIHZhciB2YWxpZEZ1bmN0aW9uTmFtZSA9IGZhbHNlO1xuXG4gIHZhciBnZXRGdW5jTmFtZSA9IGZ1bmN0aW9uIGdldEZ1bmNOYW1lKGZuKSB7XG4gICAgdmFyIG5hbWUgPSAvXFxXKmZ1bmN0aW9uXFxzKyhbXFx3JF0rKVxccypcXCgvLmV4ZWMoZm4pO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcoQW5vbnltb3VzKSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzFdO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbWl4ZWRWYXIgPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gJGdsb2JhbDtcbiAgICBtZXRob2QgPSBtaXhlZFZhcjtcbiAgICBuYW1lID0gbWl4ZWRWYXI7XG4gICAgdmFsaWRGdW5jdGlvbk5hbWUgPSAhIW5hbWUubWF0Y2godmFsaWRKU0Z1bmN0aW9uTmFtZVBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtaXhlZFZhciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtaXhlZFZhcikgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgbWl4ZWRWYXIubGVuZ3RoID09PSAyICYmIF90eXBlb2YobWl4ZWRWYXJbMF0pID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbWl4ZWRWYXJbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgb2JqID0gbWl4ZWRWYXJbMF07XG4gICAgbWV0aG9kID0gbWl4ZWRWYXJbMV07XG4gICAgbmFtZSA9IChvYmouY29uc3RydWN0b3IgJiYgZ2V0RnVuY05hbWUob2JqLmNvbnN0cnVjdG9yKSkgKyAnOjonICsgbWV0aG9kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzeW50YXhPbmx5IHx8IHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChjYWxsYWJsZU5hbWUpIHtcbiAgICAgICRnbG9iYWxbY2FsbGFibGVOYW1lXSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdmFsaWRGdW5jdGlvbk5hbWUgYXZvaWRzIGV4cGxvaXRzXG4gIGlmICh2YWxpZEZ1bmN0aW9uTmFtZSAmJiB0eXBlb2YgZXZhbChtZXRob2QpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG4gICAgaWYgKGNhbGxhYmxlTmFtZSkge1xuICAgICAgJGdsb2JhbFtjYWxsYWJsZU5hbWVdID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNfY2FsbGFibGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHV0ZjhfZW5jb2RlKGFyZ1N0cmluZykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3V0ZjhfZW5jb2RlL1xuICAvLyBvcmlnaW5hbCBieTogV2VidG9vbGtpdC5pbmZvIChodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogc293YmVycnlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IFl2ZXMgU3VjYWV0XG4gIC8vIGltcHJvdmVkIGJ5OiBraXJpbGxvaWRcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcbiAgLy8gYnVnZml4ZWQgYnk6IFVscmljaFxuICAvLyBidWdmaXhlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gYnVnZml4ZWQgYnk6IGtpcmlsbG9pZFxuICAvLyAgIGV4YW1wbGUgMTogdXRmOF9lbmNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIHZhbiBab25uZXZlbGQnXG5cbiAgaWYgKGFyZ1N0cmluZyA9PT0gbnVsbCB8fCB0eXBlb2YgYXJnU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIC5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpO1xuICB2YXIgc3RyaW5nID0gYXJnU3RyaW5nICsgJyc7XG4gIHZhciB1dGZ0ZXh0ID0gJyc7XG4gIHZhciBzdGFydDtcbiAgdmFyIGVuZDtcbiAgdmFyIHN0cmluZ2wgPSAwO1xuXG4gIHN0YXJ0ID0gZW5kID0gMDtcbiAgc3RyaW5nbCA9IHN0cmluZy5sZW5ndGg7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nbDsgbisrKSB7XG4gICAgdmFyIGMxID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG4gICAgdmFyIGVuYyA9IG51bGw7XG5cbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIGVuZCsrO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAxMjcgJiYgYzEgPCAyMDQ4KSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDYgfCAxOTIsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICBlbmMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxID4+IDEyIHwgMjI0LCBjMSA+PiA2ICYgNjMgfCAxMjgsIGMxICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdXJyb2dhdGUgcGFpcnNcbiAgICAgIGlmICgoYzEgJiAweEZDMDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCB0cmFpbCBzdXJyb2dhdGUgYXQgJyArIG4pO1xuICAgICAgfVxuICAgICAgdmFyIGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoKytuKTtcbiAgICAgIGlmICgoYzIgJiAweEZDMDApICE9PSAweERDMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VubWF0Y2hlZCBsZWFkIHN1cnJvZ2F0ZSBhdCAnICsgKG4gLSAxKSk7XG4gICAgICB9XG4gICAgICBjMSA9ICgoYzEgJiAweDNGRikgPDwgMTApICsgKGMyICYgMHgzRkYpICsgMHgxMDAwMDtcbiAgICAgIGVuYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEgPj4gMTggfCAyNDAsIGMxID4+IDEyICYgNjMgfCAxMjgsIGMxID4+IDYgJiA2MyB8IDEyOCwgYzEgJiA2MyB8IDEyOCk7XG4gICAgfVxuICAgIGlmIChlbmMgIT09IG51bGwpIHtcbiAgICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICAgIHV0ZnRleHQgKz0gZW5jO1xuICAgICAgc3RhcnQgPSBlbmQgPSBuICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICB1dGZ0ZXh0ICs9IHN0cmluZy5zbGljZShzdGFydCwgc3RyaW5nbCk7XG4gIH1cblxuICByZXR1cm4gdXRmdGV4dDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4X2VuY29kZS5qcy5tYXAiLCIvLyBBcnJheSAmIE9iamVjdCBSZWxhdGVkIEZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV9hcmdzICAgICAgICAgPSByZXF1aXJlKCAnanMtcGFyc2UtYXJncycgKTtcclxubW9kdWxlLmV4cG9ydHMuYXJyYXlfdG9faHRtbF9hdHRyID0gcmVxdWlyZSggJy4vcGFydHMvYXJyYXlfdG9faHRtbF9hdHRyJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b19odG1sICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b19odG1sJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5hcnJheV90b193aW5kb3cgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9hcnJheV90b193aW5kb3cnICk7XHJcbm1vZHVsZS5leHBvcnRzLnBsYWluX29iamVjdCAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BsYWluX29iamVjdCcgKTtcclxuXHJcbi8vIERhdGUgJiBUaW1lIFJlbGF0ZWQgRnVuY3Rpb25zXHJcbm1vZHVsZS5leHBvcnRzLm1pY3JvdGltZSAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9kYXRldGltZS9taWNyb3RpbWUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2FmdGVyX2RhdGUgICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2FmdGVyX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2JlZm9yZV9kYXRlICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX2JlZm9yZV9kYXRlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc19zYW1lX2RhdGUgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9pc19zYW1lX2RhdGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLmZvcm1hdF9kdXJhdGlvbiA9IHJlcXVpcmUoICcuL3BhcnRzL2Zvcm1hdF9kdXJhdGlvbicgKTtcclxubW9kdWxlLmV4cG9ydHMuZGlmZl9kYXlzICAgICAgID0gcmVxdWlyZSggJy4vcGFydHMvZGlmZl9kYXlzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy50aW1lX3Rha2VuICAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy90aW1lX3Rha2VuJyApO1xyXG5cclxuLy8gRGF0YSBUeXBlIFZhbGlkYXRpb25cclxubW9kdWxlLmV4cG9ydHMuaXNfdXJsID0gcmVxdWlyZSggJy4vcGFydHMvaXNfdXJsLmpzJyApO1xyXG5cclxuLy8gUnVuIFRpbWUgRnVuY3Rpb24gUmVsYXRlZHMuXHJcbm1vZHVsZS5leHBvcnRzLmNhbGxfdXNlcl9mdW5jICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL2Z1bmNoYW5kL2NhbGxfdXNlcl9mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jYWxsX3VzZXJfZnVuY19hcnJheSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jYWxsX3VzZXJfZnVuY19hcnJheScgKTtcclxubW9kdWxlLmV4cG9ydHMuZnVuY3Rpb25fZXhpc3RzICAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvZnVuY2hhbmQvZnVuY3Rpb25fZXhpc3RzJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVfZnVuY3Rpb24gICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9mdW5jaGFuZC9jcmVhdGVfZnVuY3Rpb24nICk7XHJcbm1vZHVsZS5leHBvcnRzLmlzX2NhbGxhYmxlICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3Zhci9pc19jYWxsYWJsZScgKTtcclxuXHJcbi8vIEJyb3dzZXIgUmVsYXRlZFxyXG5tb2R1bGUuZXhwb3J0cy5pc190YWJfZm9jdXNlZCA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3RhYl9mb2N1c2VkJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5pc193aW5kb3dfYXJnICA9IHJlcXVpcmUoICcuL3BhcnRzL2lzX3dpbmRvd19hcmcnICk7XHJcbm1vZHVsZS5leHBvcnRzLnNjcm9sbF90b190b3AgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3RvX3RvcCcgKTtcclxubW9kdWxlLmV4cG9ydHMuY29weV90b19jbGlwICAgPSByZXF1aXJlKCAnLi9wYXJ0cy9jb3B5X3RvX2NsaXAnICk7XHJcbm1vZHVsZS5leHBvcnRzLnNjcm9sbF9wb3MgICAgID0gcmVxdWlyZSggJy4vcGFydHMvc2Nyb2xsX3BvcycgKTtcclxubW9kdWxlLmV4cG9ydHMud2luZG93X2FyZyAgICAgPSByZXF1aXJlKCAnLi9wYXJ0cy93aW5kb3dfYXJnJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5kZXZpY2VfdHlwZSAgICA9IHJlcXVpcmUoICcuL3BhcnRzL2RldmljZV90eXBlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5waXBlX2xvZyAgICAgICA9IHJlcXVpcmUoICcuL3BhcnRzL3BpcGVfbG9nJyApO1xyXG5cclxuLy8galF1ZXJ5IFJlbGF0ZWQuXHJcbm1vZHVsZS5leHBvcnRzLnRvX2pxdWVyeSA9IHJlcXVpcmUoICcuL3BhcnRzL3RvX2pxdWVyeScgKTtcclxubW9kdWxlLmV4cG9ydHMuaXNfanF1ZXJ5ID0gcmVxdWlyZSggJy4vcGFydHMvaXNfanF1ZXJ5JyApO1xyXG5cclxuLy8gT3RoZXJzXHJcbm1vZHVsZS5leHBvcnRzLnRvX2pzX2Z1bmMgPSByZXF1aXJlKCAnLi9wYXJ0cy90b19qc19mdW5jJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5tZDUgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jb3VudGVyICAgID0gcmVxdWlyZSggJy4vcGFydHMvY291bnRlcicgKTtcclxubW9kdWxlLmV4cG9ydHMucmFuZF9tZDUgICA9IHJlcXVpcmUoICcuL3BhcnRzL3JhbmRfbWQ1JyApO1xyXG5tb2R1bGUuZXhwb3J0cy5jc3NfdW5pdHMgID0gcmVxdWlyZSggJy4vcGFydHMvY3NzX3VuaXRzJyApO1xyXG5cclxuLy8gVVJMIFJlbGF0ZWQgRnVuY3Rpb25zLlxyXG5tb2R1bGUuZXhwb3J0cy51cmxfcGFyYW1zICAgID0gcmVxdWlyZSggJy4vcGFydHMvdXJsX3BhcmFtcycgKTtcclxubW9kdWxlLmV4cG9ydHMucXVlcnlfc3RyaW5nICA9IHJlcXVpcmUoICcuL3BhcnRzL3F1ZXJ5X3N0cmluZycgKTtcclxubW9kdWxlLmV4cG9ydHMucGFyc2Vfc3RyICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC9zdHJpbmdzL3BhcnNlX3N0cicgKTtcclxubW9kdWxlLmV4cG9ydHMuYmFzZTY0X2VuY29kZSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2VuY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMuYmFzZTY0X2RlY29kZSA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvYmFzZTY0X2RlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMucmF3dXJsZGVjb2RlICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcmF3dXJsZGVjb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5yYXd1cmxlbmNvZGUgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9yYXd1cmxlbmNvZGUnICk7XHJcbm1vZHVsZS5leHBvcnRzLnVybGRlY29kZSAgICAgPSByZXF1aXJlKCAnbG9jdXR1cy9waHAvdXJsL3VybGRlY29kZScgKTtcclxubW9kdWxlLmV4cG9ydHMudXJsZW5jb2RlICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvdXJsZW5jb2RlJyApO1xyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZV91cmwgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9wYXJzZV91cmwnICk7XHJcbiIsIi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gYXJyYXkgZWxlbWVudHMgaW50byA8bGk+IHRhZ3MgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgbGlzdCBvZiB0aGUgZ2l2ZW4gaWQuXHJcbiAqIFVzZSBBcnJheS5wcm90b3R5cGUubWFwKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKSwgYW5kIGFuIGFub255bW91cyBpbm5lciBjbG9zdXJlIHRvIGNyZWF0ZSBhIGxpc3Qgb2YgaHRtbCB0YWdzLlxyXG4gKiBAcGFyYW0gYXJyXHJcbiAqIEBwYXJhbSBsaXN0SURcclxuICogQHBhcmFtIHRhZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBhcnIsIGxpc3RJRCwgdGFnID0gJ2xpJyApID0+ICggZWwgPT4gKCAoIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbGlzdElEICkgKSwgKCBlbC5pbm5lckhUTUwgKz0gYXJyLm1hcCggaXRlbSA9PiBgPCR7dGFnfT4ke2l0ZW19PC8ke3RhZ30+YCApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbiggJycgKSApICkgKSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKCAkZGF0YSApID0+IHtcclxuXHRsZXQgcmV0dXJuX2h0bWwgPSAnJztcclxuXHRmb3IoIGxldCBJIGluICRkYXRhICkge1xyXG5cdFx0aWYoIF8uaXNPYmplY3QoICRkYXRhWyBJIF0gKSApIHtcclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJyAnICsgSSArICc9XCInO1xyXG5cdFx0XHRmb3IoIGxldCBLIGluICRkYXRhWyBJIF0gKSB7XHJcblx0XHRcdFx0bGV0ICR2YWx1ZSA9ICggXy5pc09iamVjdCggJGRhdGFbIEkgXVsgSyBdICkgKSA/IEpTT04uc3RyaW5naWZ5KCAkZGF0YVsgSSBdWyBLIF0gKSA6ICRkYXRhWyBJIF1bIEsgXTtcclxuXHRcdFx0XHRyZXR1cm5faHRtbCArPSAkdmFsdWUgKyAnICc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuX2h0bWwgKz0gJ1wiJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCAkdmFsdWUgPSAoIF8uaXNPYmplY3QoICRkYXRhWyBJIF0gKSApID8gSlNPTi5zdHJpbmdpZnkoICRkYXRhWyBJIF0gKSA6ICRkYXRhWyBJIF07XHJcblx0XHRcdHJldHVybl9odG1sICs9ICcgJyArIEkgKyAnPVwiJyArICR2YWx1ZSArICdcIiAnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmV0dXJuX2h0bWw7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gKCAkYXJyYXkgKSA9PiB7XHJcblx0Zm9yKCBsZXQgJGtleSBpbiAkYXJyYXkgKSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICRhcnJheVsgJGtleSBdO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ29weSBhIHN0cmluZyB0byB0aGUgY2xpcGJvYXJkLiBPbmx5IHdvcmtzIGFzIGEgcmVzdWx0IG9mIHVzZXIgYWN0aW9uIChpLmUuIGluc2lkZSBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyKS5cclxuICogQ3JlYXRlIGEgbmV3IDx0ZXh0YXJlYT4gZWxlbWVudCwgZmlsbCBpdCB3aXRoIHRoZSBzdXBwbGllZCBkYXRhIGFuZCBhZGQgaXQgdG8gdGhlIEhUTUwgZG9jdW1lbnQuXHJcbiAqIFVzZSBTZWxlY3Rpb24uZ2V0UmFuZ2VBdCgpdG8gc3RvcmUgdGhlIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBVc2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKSB0byBjb3B5IHRvIHRoZSBjbGlwYm9hcmQuXHJcbiAqIFJlbW92ZSB0aGUgPHRleHRhcmVhPiBlbGVtZW50IGZyb20gdGhlIEhUTUwgZG9jdW1lbnQuIEZpbmFsbHksIHVzZSBTZWxlY3Rpb24oKS5hZGRSYW5nZSgpIHRvIHJlY292ZXIgdGhlIG9yaWdpbmFsIHNlbGVjdGVkIHJhbmdlIChpZiBhbnkpLlxyXG4gKiBAcGFyYW0gc3RyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiB7XHJcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGV4dGFyZWEnICk7XHJcblx0ZWwudmFsdWUgPSBzdHI7XHJcblx0ZWwuc2V0QXR0cmlidXRlKCAncmVhZG9ubHknLCAnJyApO1xyXG5cdGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRlbC5zdHlsZS5sZWZ0ICAgICA9ICctOTk5OXB4JztcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbCApO1xyXG5cdGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA+IDAgPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KCAwICkgOiBmYWxzZTtcclxuXHRlbC5zZWxlY3QoKTtcclxuXHRkb2N1bWVudC5leGVjQ29tbWFuZCggJ2NvcHknICk7XHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCggZWwgKTtcclxuXHRpZiggc2VsZWN0ZWQgKSB7XHJcblx0XHRkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKCBzZWxlY3RlZCApO1xyXG5cdH1cclxufTsiLCIvKipcclxuICogQ3JlYXRlcyBhIGNvdW50ZXIgd2l0aCB0aGUgc3BlY2lmaWVkIHJhbmdlLCBzdGVwIGFuZCBkdXJhdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBzZWxlY3Rvci5cclxuICogQ2hlY2sgaWYgc3RlcCBoYXMgdGhlIHByb3BlciBzaWduIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkuXHJcbiAqIFVzZSBzZXRJbnRlcnZhbCgpIGluIGNvbWJpbmF0aW9uIHdpdGggTWF0aC5hYnMoKSBhbmQgTWF0aC5mbG9vcigpIHRvIGNhbGN1bGF0ZSB0aGUgdGltZSBiZXR3ZWVuIGVhY2ggbmV3IHRleHQgZHJhdy5cclxuICogVXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKS5pbm5lckhUTUwgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cclxuICogT21pdCB0aGUgZm91cnRoIHBhcmFtZXRlciwgc3RlcCwgdG8gdXNlIGEgZGVmYXVsdCBzdGVwIG9mIDEuIE9taXQgdGhlIGZpZnRoIHBhcmFtZXRlciwgZHVyYXRpb24sIHRvIHVzZSBhIGRlZmF1bHQgZHVyYXRpb24gb2YgMjAwMG1zLlxyXG4gKiBAcGFyYW0gc2VsZWN0b3JcclxuICogQHBhcmFtIHN0YXJ0XHJcbiAqIEBwYXJhbSBlbmRcclxuICogQHBhcmFtIHN0ZXBcclxuICogQHBhcmFtIGR1cmF0aW9uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggc2VsZWN0b3IsIHN0YXJ0LCBlbmQsIHN0ZXAgPSAxLCBkdXJhdGlvbiA9IDIwMDAgKSA9PiB7XHJcblx0bGV0IGN1cnJlbnQgPSBzdGFydCxcclxuXHRcdF9zdGVwICAgPSAoIGVuZCAtIHN0YXJ0ICkgKiBzdGVwIDwgMCA/IC1zdGVwIDogc3RlcCxcclxuXHRcdHRpbWVyICAgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHRjdXJyZW50ICs9IF9zdGVwO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApLmlubmVySFRNTCA9IGN1cnJlbnQ7XHJcblx0XHRcdGlmKCBjdXJyZW50ID49IGVuZCApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICkuaW5uZXJIVE1MID0gZW5kO1xyXG5cdFx0XHRpZiggY3VycmVudCA+PSBlbmQgKSBjbGVhckludGVydmFsKCB0aW1lciApO1xyXG5cdFx0fSwgTWF0aC5hYnMoIE1hdGguZmxvb3IoIGR1cmF0aW9uIC8gKCBlbmQgLSBzdGFydCApICkgKSApO1xyXG5cdHJldHVybiB0aW1lcjtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiB7XHJcblx0dmFyIHMgPSB2YWw7XHJcblx0aWYoIF8uaXNOdW1iZXIoIHZhbCApICkge1xyXG5cdFx0cmV0dXJuIHZhbCArICdweCc7XHJcblx0fSBlbHNlIGlmKCB2YWwuaW5kZXhPZiggJ3B4JyApID4gLTEgfHwgdmFsLmluZGV4T2YoICclJyApID4gLTEgfHwgdmFsLmluZGV4T2YoICdlbScgKSA+IC0xICkge1xyXG5cdFx0bGV0IGNoZWNrUHggID0gcy5yZXBsYWNlKCAncHgnLCAnJyApO1xyXG5cdFx0bGV0IGNoZWNrUGN0ID0gcy5yZXBsYWNlKCAnJScsICcnICk7XHJcblx0XHRsZXQgY2hlY2tFbSAgPSBzLnJlcGxhY2UoICdlbScsICcnICk7XHJcblx0XHRpZiggXy5pc051bWJlciggY2hlY2tQeCApIHx8IF8uaXNOdW1iZXIoIGNoZWNrUGN0ICkgfHwgXy5pc051bWJlciggY2hlY2tFbSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcwcHgnO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJzBweCc7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBEZXRlY3RzIHdldGhlciB0aGUgd2Vic2l0ZSBpcyBiZWluZyBvcGVuZWQgaW4gYSBtb2JpbGUgZGV2aWNlIG9yIGEgZGVza3RvcC9sYXB0b3AuXHJcbiAqIFVzZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IHByb3BlcnR5IHRvIGZpZ3VyZSBvdXQgaWYgdGhlIGRldmljZSBpcyBhIG1vYmlsZSBkZXZpY2Ugb3IgYSBkZXNrdG9wL2xhcHRvcC5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPyAnTW9iaWxlJyA6ICdEZXNrdG9wJzsiLCIvKipcclxuICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gZGF0ZXMuXHJcbiAqIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSAoaW4gZGF5cykgYmV0d2VlbiB0d28gRGF0ZSBvYmplY3RzLlxyXG4gKiBAcGFyYW0gZGF0ZUluaXRpYWxcclxuICogQHBhcmFtIGRhdGVGaW5hbFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGRhdGVJbml0aWFsLCBkYXRlRmluYWwgKSA9PiAoIGRhdGVGaW5hbCAtIGRhdGVJbml0aWFsICkgLyAoIDEwMDAgKiAzNjAwICogMjQgKTsiLCIvKipcclxuICogUmV0dXJucyB0aGUgaHVtYW4gcmVhZGFibGUgZm9ybWF0IG9mIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gKiBEaXZpZGUgbXMgd2l0aCB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIHRvIG9idGFpbiB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIGZvciBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIGFuZCBtaWxsaXNlY29uZC5cclxuICogVXNlIE9iamVjdC5lbnRyaWVzKCkgd2l0aCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKCkgdG8ga2VlcCBvbmx5IG5vbi16ZXJvIHZhbHVlcy5cclxuICogVXNlIEFycmF5LnByb3RvdHlwZS5tYXAoKSB0byBjcmVhdGUgdGhlIHN0cmluZyBmb3IgZWFjaCB2YWx1ZSwgcGx1cmFsaXppbmcgYXBwcm9wcmlhdGVseS5cclxuICogVXNlIFN0cmluZy5wcm90b3R5cGUuam9pbignLCAnKSB0byBjb21iaW5lIHRoZSB2YWx1ZXMgaW50byBhIHN0cmluZy5cclxuICogQHBhcmFtIG1zXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IG1zID0+IHtcclxuXHRpZiggbXMgPCAwICkgbXMgPSAtbXM7XHJcblx0Y29uc3QgdGltZSA9IHtcclxuXHRcdGRheTogTWF0aC5mbG9vciggbXMgLyA4NjQwMDAwMCApLFxyXG5cdFx0aG91cjogTWF0aC5mbG9vciggbXMgLyAzNjAwMDAwICkgJSAyNCxcclxuXHRcdG1pbnV0ZTogTWF0aC5mbG9vciggbXMgLyA2MDAwMCApICUgNjAsXHJcblx0XHRzZWNvbmQ6IE1hdGguZmxvb3IoIG1zIC8gMTAwMCApICUgNjAsXHJcblx0XHRtaWxsaXNlY29uZDogTWF0aC5mbG9vciggbXMgKSAlIDEwMDBcclxuXHR9O1xyXG5cdHJldHVybiBPYmplY3QuZW50cmllcyggdGltZSApXHJcblx0XHRcdFx0IC5maWx0ZXIoIHZhbCA9PiB2YWxbIDEgXSAhPT0gMCApXHJcblx0XHRcdFx0IC5tYXAoICggWyBrZXksIHZhbCBdICkgPT4gYCR7dmFsfSAke2tleX0ke3ZhbCAhPT0gMSA/ICdzJyA6ICcnfWAgKVxyXG5cdFx0XHRcdCAuam9pbiggJywgJyApO1xyXG59OyIsIi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgYWZ0ZXIgYW5vdGhlciBkYXRlLlxyXG4gKiBVc2UgdGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvciAoPikgdG8gY2hlY2sgaWYgdGhlIGZpcnN0IGRhdGUgY29tZXMgYWZ0ZXIgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPiBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIGJlZm9yZSBhbm90aGVyIGRhdGUuXHJcbiAqIFVzZSB0aGUgbGVzcyB0aGFuIG9wZXJhdG9yICg8KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBjb21lcyBiZWZvcmUgdGhlIHNlY29uZCBvbmUuXHJcbiAqIEBwYXJhbSBkYXRlQVxyXG4gKiBAcGFyYW0gZGF0ZUJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggZGF0ZUEsIGRhdGVCICkgPT4gZGF0ZUEgPCBkYXRlQjsiLCIvKipcclxuICogQ2hlY2sgaWYgZ2l2ZW4gT2JqZWN0IC8gVmFsdWUgaXMgYSBqUXVlcnkgSW5zdGFuY2UuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRlbGVtICkgPT4gKCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJGVsZW0gKSAmJiBmYWxzZSA9PT0gXy5pc1N0cmluZyggJGVsZW0gKSAmJiAkZWxlbS5qUXVlcnkgKTsiLCIvKipcclxuICogQ2hlY2sgaWYgYSBkYXRlIGlzIHRoZSBzYW1lIGFzIGFub3RoZXIgZGF0ZS5cclxuICogVXNlIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKCkgYW5kIHN0cmljdCBlcXVhbGl0eSBjaGVja2luZyAoPT09KSB0byBjaGVjayBpZiB0aGUgZmlyc3QgZGF0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgc2Vjb25kIG9uZS5cclxuICogQHBhcmFtIGRhdGVBXHJcbiAqIEBwYXJhbSBkYXRlQlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCBkYXRlQSwgZGF0ZUIgKSA9PiBkYXRlQS50b0lTT1N0cmluZygpID09PSBkYXRlQi50b0lTT1N0cmluZygpOyIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIGZvY3VzZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICogVXNlIHRoZSBEb2N1bWVudC5oaWRkZW4gcHJvcGVydHksIGludHJvZHVjZWQgYnkgdGhlIFBhZ2UgVmlzaWJpbGl0eSBBUEkgdG8gY2hlY2sgaWYgdGhlIGJyb3dzZXIgdGFiIG9mIHRoZSBwYWdlIGlzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gIWRvY3VtZW50LmhpZGRlbjsiLCJtb2R1bGUuZXhwb3J0cyA9ICggJHVybCApID0+IHtcclxuXHRsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoICdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nICsgLy8gcHJvdG9jb2xcclxuXHRcdCcoKChbYS16XFxcXGRdKFthLXpcXFxcZC1dKlthLXpcXFxcZF0pKilcXFxcLj8pK1thLXpdezIsfXwnICsgLy8gZG9tYWluIG5hbWVcclxuXHRcdCcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknICsgLy8gaXAgKHY0KSBhZGRyZXNzXHJcblx0XHQnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLWEtelxcXFxkJV8ufitdKikqJyArIC8vcG9ydFxyXG5cdFx0JyhcXFxcP1s7JmEtelxcXFxkJV8ufis9LV0qKT8nICsgLy8gcXVlcnkgc3RyaW5nXHJcblx0XHQnKFxcXFwjWy1hLXpcXFxcZF9dKik/JCcsICdpJyApO1xyXG5cdHJldHVybiAoIHBhdHRlcm4udGVzdCggJHVybCApICk7XHJcbn07IiwiLyoqXHJcbiAqIENoZWNrcyBpZiB3aW5kb3cgaGFzIGdpdmVuIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAka2V5ICkgPT4gKCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggd2luZG93WyAka2V5IF0gKSApOyIsIi8qKlxyXG4gKiBMb2dzIGEgdmFsdWUgYW5kIHJldHVybnMgaXQuXHJcbiAqIFVzZSBjb25zb2xlLmxvZyB0byBsb2cgdGhlIHN1cHBsaWVkIHZhbHVlLCBjb21iaW5lZCB3aXRoIHRoZSB8fCBvcGVyYXRvciB0byByZXR1cm4gaXQuXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBkYXRhID0+IGNvbnNvbGUubG9nKCBkYXRhICkgfHwgZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9ICgpID0+ICggdHlwZW9mIE9iamVjdC5jcmVhdGUgICE9PSAndW5kZWZpbmVkJyApID8gT2JqZWN0LmNyZWF0ZSggbnVsbCApIDoge307IiwiLyoqXHJcbiAqIFJldHVybiB2YWx1ZSBmcm9tIFF1ZXJ5U3RyaW5nXHJcbiAqIEBwYXJhbSBuYW1lXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggbmFtZSApID0+IHtcclxuXHRuYW1lICAgICAgICA9IG5hbWUucmVwbGFjZSggL1tcXFtdLywgXCJcXFxcW1wiICkucmVwbGFjZSggL1tcXF1dLywgXCJcXFxcXVwiICk7XHJcblx0dmFyIHJlZ2V4ICAgPSBuZXcgUmVnRXhwKCBcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIiApLFxyXG5cdFx0cmVzdWx0cyA9IHJlZ2V4LmV4ZWMoIGxvY2F0aW9uLnNlYXJjaCApO1xyXG5cdHJldHVybiByZXN1bHRzID09IG51bGwgPyBcIlwiIDogZGVjb2RlVVJJQ29tcG9uZW50KCByZXN1bHRzWyAxIF0ucmVwbGFjZSggL1xcKy9nLCBcIiBcIiApICk7XHJcbn07IiwiaW1wb3J0IG1kNSBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL21kNSc7XHJcblxyXG4vKipcclxuICogVW5pcXVlIHJhbmRvbSBtZDVcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gU3RyaW5nKCBtZDUoIE1hdGgucmFuZG9tKCkgKyAnLScgKyBNYXRoLnJhbmRvbSgpICsgJy0nICsgTWF0aC5yYW5kb20oKSApICk7IiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBwYWdlLlxyXG4gKiBVc2UgcGFnZVhPZmZzZXQgYW5kIHBhZ2VZT2Zmc2V0IGlmIHRoZXkgYXJlIGRlZmluZWQsIG90aGVyd2lzZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AuIFlvdSBjYW4gb21pdCBlbCB0byB1c2UgYSBkZWZhdWx0IHZhbHVlIG9mIHdpbmRvdy5cclxuICogQHBhcmFtIGVsXHJcbiAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoIGVsID0gd2luZG93ICkgPT4gKCB7XHJcblx0eDogZWwucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCA/IGVsLnBhZ2VYT2Zmc2V0IDogZWwuc2Nyb2xsTGVmdCxcclxuXHR5OiBlbC5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gZWwucGFnZVlPZmZzZXQgOiBlbC5zY3JvbGxUb3BcclxufSApOyIsIi8qKlxyXG4gKiBTbW9vdGgtc2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlLlxyXG4gKiBHZXQgZGlzdGFuY2UgZnJvbSB0b3AgdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCBvciBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcC5cclxuICogU2Nyb2xsIGJ5IGEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcC4gVXNlIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB0byBhbmltYXRlIHRoZSBzY3JvbGxpbmcuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcclxuXHRjb25zdCBjID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRpZiggYyA+IDAgKSB7XHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY3JvbGxUb1RvcCApO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKCAwLCBjIC0gYyAvIDggKTtcclxuXHR9XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAoIGNhbGxiYWNrLCB0aXRsZSA9ICdUaW1lVGFrZW4nICkgPT4ge1xyXG5cdGNvbnNvbGUudGltZSggdGl0bGUgKTtcclxuXHRjb25zdCByID0gY2FsbGJhY2soKTtcclxuXHRjb25zb2xlLnRpbWVFbmQoIHRpdGxlICk7XHJcblx0cmV0dXJuIHI7XHJcbn07IiwiaW1wb3J0IGlzX2pxdWVyeSBmcm9tICcuL2lzX2pxdWVyeSc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBHaXZlbiBTdHJpbmcgaW50byBBIGpRdWVyeSBPYmplY3QuXHJcbiAqIEBwYXJhbSAkZWxlbVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gKCAkZWxlbSApID0+IHtcclxuXHRpZiggZmFsc2UgPT09IGlzX2pxdWVyeSggJGVsZW0gKSApIHtcclxuXHRcdHJldHVybiBqUXVlcnkoICRlbGVtICk7XHJcblx0fVxyXG5cdHJldHVybiAkZWxlbTtcclxufTsiLCJpbXBvcnQgdmFsaWRhdGVKU0Z1bmMgZnJvbSAnLi92YWxpZGF0ZVNpbmdsZUpTRnVuYyc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIEVhY2ggVmFsdWUgT2YgYSBKUyBPYmplY3QgQW5kIENvbnZlcnRzIEludG8gSlMgQ2FsbGFibGUgRnVuY3Rpb24uXHJcbiAqIEBwYXJhbSAkZGF0YVxyXG4gKiBAcGFyYW0gJGFyZ3Nfa2V5XHJcbiAqIEBwYXJhbSAkY29udGVudHNfa2V5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRkYXRhLCAkYXJnc19rZXkgPSAnanNfYXJncycsICRjb250ZW50c19rZXkgPSAnanNfY29udGVudHMnICkgPT4ge1xyXG5cdGlmKCB0cnVlID09PSBfLmlzT2JqZWN0KCAkZGF0YSApICkge1xyXG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGF0YSApIHtcclxuXHRcdFx0aWYoICFfLmlzRW1wdHkoICRkYXRhWyAka2V5IF0gKSApIHtcclxuXHRcdFx0XHQkZGF0YVsgJGtleSBdID0gdmFsaWRhdGVKU0Z1bmMoICRkYXRhWyAka2V5IF0sICRhcmdzX2tleSwgJGNvbnRlbnRzX2tleSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAkZGF0YTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGN1cnJlbnQgVVJMLlxyXG4gKiBVc2UgU3RyaW5nLm1hdGNoKCkgd2l0aCBhbiBhcHByb3ByaWF0ZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZ2V0IGFsbCBrZXktdmFsdWUgcGFpcnMsXHJcbiAqIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKSB0byBtYXAgYW5kIGNvbWJpbmUgdGhlbSBpbnRvIGEgc2luZ2xlIG9iamVjdC5cclxuICogUGFzcyBsb2NhdGlvbi5zZWFyY2ggYXMgdGhlIGFyZ3VtZW50IHRvIGFwcGx5IHRvIHRoZSBjdXJyZW50IHVybC5cclxuICogQHBhcmFtIHVybFxyXG4gKiBAcmV0dXJucyB7VCB8IHt9fVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB1cmwgPT5cclxuXHQoIHVybC5tYXRjaCggLyhbXj89Jl0rKSg9KFteJl0qKSkvZyApIHx8IFtdICkucmVkdWNlKFxyXG5cdFx0KCBhLCB2ICkgPT4gKCAoIGFbIHYuc2xpY2UoIDAsIHYuaW5kZXhPZiggJz0nICkgKSBdID0gdi5zbGljZSggdi5pbmRleE9mKCAnPScgKSArIDEgKSApLCBhICksXHJcblx0XHR7fVxyXG5cdCk7IiwiLyoqXHJcbiAqIENvbnZlcnRzIEpTIFN0cmluZyBJbnRvIENhbGxhYmxlIEZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gJHN0cmluZ1xyXG4gKiBAcGFyYW0gJGFyZ3Nfa2V5XHJcbiAqIEBwYXJhbSAkY29udGVudHNfa2V5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSAoICRzdHJpbmcsICRhcmdzX2tleSA9ICdqc19hcmdzJywgJGNvbnRlbnRzX2tleSA9ICdqc19jb250ZW50cycgKSA9PiB7XHJcblx0aWYoIHRydWUgPT09IF8uaXNPYmplY3QoICRzdHJpbmcgKSAmJiBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJHN0cmluZ1sgJGFyZ3Nfa2V5IF0gKSB8fCBmYWxzZSA9PT0gXy5pc1VuZGVmaW5lZCggJHN0cmluZ1sgJGNvbnRlbnRzX2tleSBdICkgKSB7XHJcblx0XHRsZXQgJGFyZ3MgICAgID0gKCAkc3RyaW5nWyAkYXJnc19rZXkgXSA9PT0gZmFsc2UgKSA/IGZhbHNlIDogJHN0cmluZ1sgJGFyZ3Nfa2V5IF07XHJcblx0XHRsZXQgJGNvbnRlbnRzID0gKCAkc3RyaW5nWyAkY29udGVudHNfa2V5IF0gPT09IGZhbHNlICkgPyBmYWxzZSA6ICRzdHJpbmdbICRjb250ZW50c19rZXkgXTtcclxuXHRcdGlmKCAkYXJncyA9PT0gZmFsc2UgJiYgJGNvbnRlbnRzICE9PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2UgaWYoICRhcmdzICE9PSBmYWxzZSAmJiAkY29udGVudHMgIT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCAkYXJncywgJGNvbnRlbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJHN0cmluZztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuICRzdHJpbmc7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBTZXRzIEpTIE9iamVjdCBJbnRvIFdpbmRvdyBBcmdzLlxyXG4gKiBAcGFyYW0gJGtleVxyXG4gKiBAcGFyYW0gJHZhbHVlXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9ICggJGtleSwgJHZhbHVlICkgPT4ge1xyXG5cdGlmKCBfLmlzT2JqZWN0KCAka2V5ICkgKSB7XHJcblx0XHRmb3IoIGxldCAkX2sgaW4gJGtleSApIHtcclxuXHRcdFx0d2luZG93WyAkX2sgXSA9ICRrZXlbICRfayBdO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3dbICRrZXkgXSA9ICR2YWx1ZTtcclxuXHR9XHJcbn07IiwiY29uc3QgcGFyc2VfdXJsICAgICAgICA9IHJlcXVpcmUoICdsb2N1dHVzL3BocC91cmwvcGFyc2VfdXJsJyApO1xyXG5jb25zdCBwYXJzZV9zdHIgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3MvcGFyc2Vfc3RyJyApO1xyXG5jb25zdCBodHRwX2J1aWxkX3F1ZXJ5ID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3VybC9odHRwX2J1aWxkX3F1ZXJ5JyApO1xyXG5jb25zdCBzdHJwb3MgICAgICAgICAgID0gcmVxdWlyZSggJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RycG9zJyApO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIG1vZGlmaWVkIFVSTCBxdWVyeSBzdHJpbmcuXHJcbiAqXHJcbiAqIFlvdSBjYW4gcmVidWlsZCB0aGUgVVJMIGFuZCBhcHBlbmQgcXVlcnkgdmFyaWFibGVzIHRvIHRoZSBVUkwgcXVlcnkgYnkgdXNpbmcgdGhpcyBmdW5jdGlvbi5cclxuICogVGhlcmUgYXJlIHR3byB3YXlzIHRvIHVzZSB0aGlzIGZ1bmN0aW9uOyBlaXRoZXIgYSBzaW5nbGUga2V5IGFuZCB2YWx1ZSwgb3IgYW4gYXNzb2NpYXRpdmUgYXJyYXkuXHJcbiAqXHJcbiAqIFVzaW5nIGEgc2luZ2xlIGtleSBhbmQgdmFsdWU6XHJcbiAqXHJcbiAqICAgICBhZGRfcXVlcnlfYXJnKCAna2V5JywgJ3ZhbHVlJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScgKTtcclxuICpcclxuICogVXNpbmcgYW4gYXNzb2NpYXRpdmUgYXJyYXk6XHJcbiAqXHJcbiAqICAgICBhZGRfcXVlcnlfYXJnKCBhcnJheShcclxuICogICAgICAgICAna2V5MScgPT4gJ3ZhbHVlMScsXHJcbiAqICAgICAgICAgJ2tleTInID0+ICd2YWx1ZTInLFxyXG4gKiAgICAgKSwgJ2h0dHA6Ly9leGFtcGxlLmNvbScgKTtcclxuICpcclxuICogT21pdHRpbmcgdGhlIFVSTCBmcm9tIGVpdGhlciB1c2UgcmVzdWx0cyBpbiB0aGUgY3VycmVudCBVUkwgYmVpbmcgdXNlZFxyXG4gKiAodGhlIHZhbHVlIG9mIGB3aW5kb3cubG9jYXRpb24uaHJlZmApLlxyXG4gKlxyXG4gKiBWYWx1ZXMgYXJlIGV4cGVjdGVkIHRvIGJlIGVuY29kZWQgYXBwcm9wcmlhdGVseSB3aXRoIHVybGVuY29kZSgpIG9yIHJhd3VybGVuY29kZSgpLlxyXG4gKlxyXG4gKiBTZXR0aW5nIGFueSBxdWVyeSB2YXJpYWJsZSdzIHZhbHVlIHRvIGJvb2xlYW4gZmFsc2UgcmVtb3ZlcyB0aGUga2V5IChzZWUgcmVtb3ZlX3F1ZXJ5X2FyZygpKS5cclxuICpcclxuICogSW1wb3J0YW50OiBUaGUgcmV0dXJuIHZhbHVlIG9mIGFkZF9xdWVyeV9hcmcoKSBpcyBub3QgZXNjYXBlZCBieSBkZWZhdWx0LiBPdXRwdXQgc2hvdWxkIGJlXHJcbiAqIGxhdGUtZXNjYXBlZCB3aXRoIGVzY191cmwoKSBvciBzaW1pbGFyIHRvIGhlbHAgcHJldmVudCB2dWxuZXJhYmlsaXR5IHRvIGNyb3NzLXNpdGUgc2NyaXB0aW5nXHJcbiAqIChYU1MpIGF0dGFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSBrZXlcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZF9xdWVyeV9hcmcoIGtleSA9IG51bGwsIHZhbHVlID0gbnVsbCwgdXJsID0gbnVsbCApIHtcclxuXHRpZiggdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgbnVsbCA9PT0gdmFsdWUgKSB7XHJcblx0XHR1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9IGVsc2UgaWYoIHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIG51bGwgIT09IHZhbHVlICkge1xyXG5cdFx0dXJsICAgPSB2YWx1ZTtcclxuXHRcdHZhbHVlID0gbnVsbDtcclxuXHR9IGVsc2UgaWYoIG51bGwgPT09IHVybCApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHNlID09PSB1cmwgfHwgJycgPT09IHVybCB8fCB1bmRlZmluZWQgPT09IHVybCApIHtcclxuXHRcdHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHJcblx0bGV0ICRwYXJzZWQgICA9IHBhcnNlX3VybCggdXJsICksXHJcblx0XHQkcXVlcnkgICAgPSB7fSxcclxuXHRcdCRmcmFnbWVudCA9ICggJHBhcnNlZC5mcmFnbWVudCApID8gJyMnICsgJHBhcnNlZC5mcmFnbWVudCA6ICcnO1xyXG5cclxuXHRpZiggdHlwZW9mICRwYXJzZWQucXVlcnkgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0cGFyc2Vfc3RyKCAkcGFyc2VkLnF1ZXJ5LCAkcXVlcnkgKTtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyApIHtcclxuXHRcdGZvciggbGV0IGsgaW4ga2V5ICkge1xyXG5cdFx0XHRpZigga2V5WyBrIF0gKSB7XHJcblx0XHRcdFx0JHF1ZXJ5WyBrIF0gPSBrZXlbIGsgXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHQkcXVlcnlbIGtleSBdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRsZXQgc3BsaXRfdXJsID0gbnVsbCxcclxuXHRcdGJhc2VfdXJsICA9IHVybDtcclxuXHRpZiggZmFsc2UgIT09IHN0cnBvcyggdXJsLCAnPycgKSApIHtcclxuXHRcdHNwbGl0X3VybCA9IHVybC5zcGxpdCggJz8nICk7XHJcblx0XHRiYXNlX3VybCAgPSBzcGxpdF91cmxbIDAgXSB8fCB1cmw7XHJcblx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gc3RycG9zKCB1cmwsICcjJyApICkge1xyXG5cdFx0c3BsaXRfdXJsID0gdXJsLnNwbGl0KCAnIycgKTtcclxuXHRcdGJhc2VfdXJsICA9IHNwbGl0X3VybFsgMCBdIHx8IHVybDtcclxuXHR9XHJcblxyXG5cdGZvciggbGV0IGsgaW4gJHF1ZXJ5ICkge1xyXG5cdFx0aWYoIGZhbHNlID09PSAkcXVlcnlbIGsgXSApIHtcclxuXHRcdFx0ZGVsZXRlICRxdWVyeVsgayBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JHF1ZXJ5ID0gaHR0cF9idWlsZF9xdWVyeSggJHF1ZXJ5LCBudWxsLCAnJicgKTtcclxuXHQkcXVlcnkgPSAoICRxdWVyeSAhPT0gJycgKSA/ICc/JyArICRxdWVyeSA6ICRxdWVyeTtcclxuXHRyZXR1cm4gYmFzZV91cmwgKyAkcXVlcnkgKyAkZnJhZ21lbnQ7XHJcbn0iLCJpbXBvcnQgYWRkX3F1ZXJ5X2FyZyBmcm9tICcuL2FkZF9xdWVyeV9hcmcnO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYW4gaXRlbSBvciBpdGVtcyBmcm9tIGEgcXVlcnkgc3RyaW5nLlxyXG4gKiBAcGFyYW0ga2V5XHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVfcXVlcnlfYXJnKCBrZXkgPSBudWxsLCB1cmwgPSBudWxsICkge1xyXG5cdGlmKCB0eXBlb2Yga2V5ICE9PSAnb2JqZWN0JyApIHtcclxuXHRcdGtleSA9IFsga2V5IF07XHJcblx0fVxyXG5cclxuXHRmb3IoIGxldCBpIGluIGtleSApIHtcclxuXHRcdGlmKCBrZXlbIGkgXSApIHtcclxuXHRcdFx0dXJsID0gYWRkX3F1ZXJ5X2FyZygga2V5WyBpIF0sIGZhbHNlLCB1cmwgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHVybDtcclxufVxyXG4iLCJpbXBvcnQgdW50cmFpbGluZ3NsYXNoaXQgZnJvbSAnLi91bnRyYWlsaW5nc2xhc2hpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiggJHN0cmluZyApIHtcclxuXHRyZXR1cm4gdW50cmFpbGluZ3NsYXNoaXQoICRzdHJpbmcgKSArICcvXFxcXCc7XHJcbn0iLCJpbXBvcnQgcnRyaW0gZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9ydHJpbSc7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0cmFpbGluZyBmb3J3YXJkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGlmIHRoZXkgZXhpc3QuXHJcbiAqXHJcbiAqIFRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGlzIGZvciBwYXRocyBhbmQgdGh1cyBzaG91bGQgYmUgdXNlZCBmb3IgcGF0aHMuIEl0IGlzXHJcbiAqIG5vdCByZXN0cmljdGVkIHRvIHBhdGhzIGFuZCBvZmZlcnMgbm8gc3BlY2lmaWMgcGF0aCBzdXBwb3J0LlxyXG4gKiBAcGFyYW0gJHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCAkc3RyaW5nICkge1xyXG5cdHJldHVybiBydHJpbSggJHN0cmluZywgJy9cXFxcJyApO1xyXG59IiwiZXhwb3J0IGNvbnN0IGFkZF9xdWVyeV9hcmcgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9hZGRfcXVlcnlfYXJnJykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVfcXVlcnlfYXJnID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvcmVtb3ZlX3F1ZXJ5X2FyZycpLmRlZmF1bHQ7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhaWxpbmdzbGFzaGl0ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvdHJhaWxpbmdzbGFzaGl0JykuZGVmYXVsdDtcclxuXHJcbmV4cG9ydCBjb25zdCB1bnRyYWlsaW5nc2xhc2hpdCA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL3VudHJhaWxpbmdzbGFzaGl0JykuZGVmYXVsdDtcclxuXHJcblxyXG4vKipcclxuICogQXBwZW5kcyBGdW5jdGlvbiBHbG9iYWxseS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3cgKSA9PiB7XHJcblx0d2luZG93LmFkZF9xdWVyeV9hcmcgICAgID0gYWRkX3F1ZXJ5X2FyZztcclxuXHR3aW5kb3cucmVtb3ZlX3F1ZXJ5X2FyZyAgPSByZW1vdmVfcXVlcnlfYXJnO1xyXG5cdHdpbmRvdy51bnRyYWlsaW5nc2xhc2hpdCA9IHVudHJhaWxpbmdzbGFzaGl0O1xyXG5cdHdpbmRvdy50cmFpbGluZ3NsYXNoaXQgICA9IHRyYWlsaW5nc2xhc2hpdDtcclxufSApKCB3aW5kb3cgKTtcclxuIiwiaW1wb3J0IHtcblx0dG9fanF1ZXJ5LFxuXHRjYWxsX3VzZXJfZnVuYyxcblx0cGFyc2Vfc3RyLFxuXHRpc191cmwsXG5cdHVybF9wYXJhbXMsXG5cdGlzX2NhbGxhYmxlLFxuXHRjYWxsX3VzZXJfZnVuY19hcnJheSxcblx0ZnVuY3Rpb25fZXhpc3RzLFxuXHRjcmVhdGVfZnVuY3Rpb24sXG59IGZyb20gJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgeyByZW1vdmVfcXVlcnlfYXJnIH0gZnJvbSAnd29yZHByZXNzLWpzLXBvcnRzJztcblxuLyoqXG4gKiBXUE9uaW9uIEN1c3RvbSBBamF4IEhhbmRsZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBXUE9uaW9uX0FqYXhlciB7XG5cdC8qKlxuXHQgKiBAcGFyYW0gJGFqYXhfYXJnc1xuXHQgKiBAcGFyYW0gJGFqYXhfY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGFqYXhfYXJncywgJGFqYXhfY29uZmlnICkge1xuXHRcdHRoaXMuZGVmYXVsdHMgICAgICAgID0ge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHR1cmw6ICggdHlwZW9mIHdpbmRvdy5hamF4dXJsICE9PSAndW5kZWZpbmVkJyApID8gd2luZG93LmFqYXh1cmwgOiBmYWxzZSxcblx0XHRcdGRhdGE6IHt9LFxuXHRcdFx0c3VjY2VzczogZmFsc2UsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRhbHdheXM6IGZhbHNlLFxuXHRcdFx0YWN0aW9uOiBmYWxzZSxcblx0XHR9O1xuXHRcdHRoaXMuZGVmYXVsdF9jb25maWdzID0ge1xuXHRcdFx0cmVzcG9uc2VfZWxlbWVudDogZmFsc2UsXG5cdFx0XHRidXR0b246IGZhbHNlLFxuXHRcdFx0ZWxlbWVudDogZmFsc2UsXG5cdFx0XHRzcGlubmVyOiAnPHNwYW4gY2xhc3M9XCJzcGlubmVyXCI+PC9zcGFuPicsXG5cdFx0fTtcblx0XHR0aGlzLmluc3RhbmNlICAgICAgICA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dQT25pb25fQWpheGVyLmRlZmF1bHRzfVxuXHRcdCAqL1xuXHRcdHRoaXMuYWpheF9hcmdzID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggdGhpcy5kZWZhdWx0cywgJGFqYXhfYXJncyApO1xuXHRcdHRoaXMuYWpheF9jb25maWcgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB0aGlzLmRlZmF1bHRfY29uZmlncywgJGFqYXhfY29uZmlnICk7XG5cdFx0dGhpcy5hamF4KCk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBBIENhbGxhYmxlIENhbGxiYWNrIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBjb2RlIGRhdGEuXG5cdCAqXG5cdCAqIEBwYXJhbSAkY29kZVxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICovXG5cdGNyZWF0ZV9mdW5jdGlvbiggJGNvZGUgPSBmYWxzZSwgJGFyZ3MgPSAnJyApIHtcblx0XHRyZXR1cm4gdGhpcy5zaW5nbGVfY2FsbGJhY2soIGNyZWF0ZV9mdW5jdGlvbiggJGFyZ3MsICRjb2RlICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBWYWxpZGF0ZXMgJiBUcmlnZ2VycyBBIFNpbmdsZSBDYWxsYmFjayBGdW5jdGlvbi5cblx0ICogQHBhcmFtICRjYWxsYmFja1xuXHQgKi9cblx0c2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2sgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNGdW5jdGlvbiggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRjYWxsX3VzZXJfZnVuYyggJGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkY2FsbGJhY2sgKSAmJiBmYWxzZSAhPT0gZnVuY3Rpb25fZXhpc3RzKCAkY2FsbGJhY2sgKSApIHtcblx0XHRcdGNhbGxfdXNlcl9mdW5jKCAkY2FsbGJhY2sgKTtcblx0XHR9IGVsc2UgaWYoIHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFjayApICkge1xuXHRcdFx0dGhpcy5jcmVhdGVfZnVuY3Rpb24oICRjYWxsYmFjayApO1xuXHRcdH0gZWxzZSBpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggJGNhbGxiYWNrICkgKSB7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRjYWxsYmFjayApIHtcblx0XHRcdFx0aWYoICRjYWxsYmFjay5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdHRoaXMuc2luZ2xlX2NhbGxiYWNrKCAkY2FsbGJhY2tbICRrZXkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgQW4gQXJyYXkgb2YgQ2FsbGFibGUgQWpheCBGdW5jdGlvbnMuXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0aGFuZGxlX2NhbGxiYWNrcyggZGF0YSApIHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc09iamVjdCggZGF0YSApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCBkYXRhLmNhbGxiYWNrICkgKSB7XG5cdFx0XHRcdGxldCAkY2FsbGJhY2tzID0gZGF0YS5jYWxsYmFjaztcblxuXHRcdFx0XHRpZiggZmFsc2UgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNTdHJpbmcoICRjYWxsYmFja3MgKSApIHtcblx0XHRcdFx0XHR0aGlzLnNpbmdsZV9jYWxsYmFjayggJGNhbGxiYWNrcyApO1xuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkY2FsbGJhY2tzICkgKSB7XG5cdFx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkY2FsbGJhY2tzICkge1xuXHRcdFx0XHRcdFx0aWYoICRjYWxsYmFja3MuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zaW5nbGVfY2FsbGJhY2soICRjYWxsYmFja3NbICRrZXkgXSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgZGF0YS5jYWxsYmFjaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcmVkIE9uIEFqYXggb25TdWNjZXNzXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqL1xuXHRvblN1Y2Nlc3MoIGRhdGEgKSB7XG5cdFx0dGhpcy5oYW5kbGVfY2FsbGJhY2tzKCBkYXRhICk7XG5cblx0XHRpZiggZmFsc2UgIT09IHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRpZiggaXNfY2FsbGFibGUoIHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MgKSApIHtcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLnN1Y2Nlc3MsIFsgZGF0YSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJlZCBPbiBBamF4IG9uRXJyb3Jcblx0ICogQHBhcmFtIGRhdGFcblx0ICovXG5cdG9uRXJyb3IoIGRhdGEgKSB7XG5cdFx0dGhpcy5oYW5kbGVfY2FsbGJhY2tzKCBkYXRhICk7XG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmFqYXhfYXJncy5lcnJvciApIHtcblx0XHRcdGlmKCBpc19jYWxsYWJsZSggdGhpcy5hamF4X2FyZ3MuZXJyb3IgKSApIHtcblx0XHRcdFx0Y2FsbF91c2VyX2Z1bmNfYXJyYXkoIHRoaXMuYWpheF9hcmdzLmVycm9yLCBbIGRhdGEgXSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyZWQgT24gQWpheCBvbkFsd2F5c1xuXHQgKiBAcGFyYW0gZGF0YVxuXHQgKi9cblx0b25BbHdheXMoIGRhdGEgKSB7XG5cdFx0dGhpcy5idXR0b25fdW5sb2NrKCk7XG5cdFx0aWYoIGZhbHNlICE9PSB0aGlzLmFqYXhfYXJncy5hbHdheXMgKSB7XG5cdFx0XHRpZiggaXNfY2FsbGFibGUoIHRoaXMuYWpheF9hcmdzLmFsd2F5cyApICkge1xuXHRcdFx0XHRjYWxsX3VzZXJfZnVuY19hcnJheSggdGhpcy5hamF4X2FyZ3MuYWx3YXlzLCBbIGRhdGEgXSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBBbiBBamF4IFJlcXVlc3QuIEJhc2VkIE9uIFRoZSBDb25maWcuXG5cdCAqL1xuXHRhamF4KCkge1xuXHRcdHRoaXMuYnV0dG9uX2xvY2soKTtcblx0XHRsZXQgJGNvbmZpZyA9IHdpbmRvdy53cG9uaW9uLl8uY2xvbmUoIHRoaXMuYWpheF9hcmdzICk7XG5cdFx0aWYoIGZhbHNlICE9PSAkY29uZmlnLnVybCApIHtcblx0XHRcdGlmKCBmYWxzZSAhPT0gaXNfdXJsKCAkY29uZmlnLnVybCApICkge1xuXHRcdFx0XHRsZXQgJHVybF9wYXJhbXMgPSB1cmxfcGFyYW1zKCAkY29uZmlnLnVybCApO1xuXHRcdFx0XHRmb3IoIGxldCAka2V5IGluICR1cmxfcGFyYW1zICkge1xuXHRcdFx0XHRcdGlmKCAkdXJsX3BhcmFtcy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICkge1xuXHRcdFx0XHRcdFx0JGNvbmZpZy51cmwgPSByZW1vdmVfcXVlcnlfYXJnKCAka2V5LCAkY29uZmlnLnVybCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQkY29uZmlnLmRhdGEgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkY29uZmlnLmRhdGEsICR1cmxfcGFyYW1zICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJHVybF9wYXJhbXMgPSB7fTtcblx0XHRcdFx0cGFyc2Vfc3RyKCAkY29uZmlnLnVybCwgJHVybF9wYXJhbXMgKTtcblx0XHRcdFx0JGNvbmZpZy51cmwgID0gd2luZG93LmFqYXh1cmw7XG5cdFx0XHRcdCRjb25maWcuZGF0YSA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICRjb25maWcuZGF0YSwgJHVybF9wYXJhbXMgKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGNvbmZpZy51cmwgPSB3aW5kb3cuYWpheHVybDtcblx0XHR9XG5cblx0XHRpZiggZmFsc2UgIT09ICRjb25maWcuYWN0aW9uICkge1xuXHRcdFx0JGNvbmZpZy5kYXRhLmFjdGlvbiA9ICRjb25maWcuYWN0aW9uO1xuXHRcdFx0ZGVsZXRlICRjb25maWcuYWN0aW9uO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5zdWNjZXNzICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGRlbGV0ZSAkY29uZmlnLnN1Y2Nlc3M7XG5cdFx0fVxuXHRcdGlmKCB0eXBlb2YgJGNvbmZpZy5hbHdheXMgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0ZGVsZXRlICRjb25maWcuYWx3YXlzO1xuXHRcdH1cblx0XHRpZiggdHlwZW9mICRjb25maWcuZXJyb3IgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0ZGVsZXRlICRjb25maWcuZXJyb3I7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnN0YW5jZSA9IHdpbmRvdy53cC5hamF4LnNlbmQoICRjb25maWcgKTtcblx0XHR0aGlzLmluc3RhbmNlLmRvbmUoICggZGF0YSApID0+IHRoaXMub25TdWNjZXNzKCBkYXRhICkgKTtcblx0XHR0aGlzLmluc3RhbmNlLmZhaWwoICggZGF0YSApID0+IHRoaXMub25FcnJvciggZGF0YSApICk7XG5cdFx0dGhpcy5pbnN0YW5jZS5hbHdheXMoICggZGF0YSApID0+IHRoaXMub25BbHdheXMoIGRhdGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBBIENvbmZpZyBEYXRhIEV4c2l0cyBCYXNlZCBvbiBUaGUgR2l2ZW4gS2V5LlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc19jb25maWcoICRrZXkgPSAnJyApIHtcblx0XHRyZXR1cm4gKCB0eXBlb2YgdGhpcy5hamF4X2NvbmZpZ1sgJGtleSBdICE9PSAndW5kZWZpbmVkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgVGhlIENvbmZpZyBEYXRhIEJhc2VkIG9uIFRoZSBDb25maWcgS2V5LlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJGRlZmF1bHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRjb25maWcoICRrZXkgPSAnJywgJGRlZmF1bHQgPSBmYWxzZSApIHtcblx0XHRyZXR1cm4gKCB0aGlzLmhhc19jb25maWcoICRrZXkgKSApID8gdGhpcy5hamF4X2NvbmZpZ1sgJGtleSBdIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogTG9ja3MgQSBHaXZlbiBCdXR0b24gRWxlbWVudC5cblx0ICovXG5cdGJ1dHRvbl9sb2NrKCkge1xuXHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5jb25maWcoICdidXR0b24nICkgKSB7XG5cdFx0XHRsZXQgJGJ1dHRvbiA9IHRvX2pxdWVyeSggdGhpcy5jb25maWcoICdidXR0b24nICkgKTtcblx0XHRcdGlmKCAkYnV0dG9uICkge1xuXHRcdFx0XHQkYnV0dG9uLndwb19idXR0b24oICdwcm9jZXNzaW5nJyApO1xuXHRcdFx0XHQkYnV0dG9uLmF0dHIoICdkaXNhYmxlZCcsICdkaXNhYmxlZCcgKTtcblxuXHRcdFx0XHRpZiggdGhpcy5jb25maWcoICdzcGlubmVyJyApICkge1xuXHRcdFx0XHRcdGxldCAkc3Bpbm5lciA9IGpRdWVyeSggdGhpcy5jb25maWcoICdzcGlubmVyJyApICk7XG5cdFx0XHRcdFx0JHNwaW5uZXIuYWRkQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdFx0XHRcdFx0JGJ1dHRvbi5wYXJlbnQoKS5hcHBlbmQoICRzcGlubmVyICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVW5sb2NrcyBBIEdpdmVuIEJ1dHRvbiBFbGVtZW50LlxuXHQgKi9cblx0YnV0dG9uX3VubG9jaygpIHtcblx0XHRpZiggZmFsc2UgIT09IHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICkge1xuXHRcdFx0bGV0ICRidXR0b24gPSB0b19qcXVlcnkoIHRoaXMuY29uZmlnKCAnYnV0dG9uJyApICk7XG5cdFx0XHRpZiggJGJ1dHRvbiApIHtcblx0XHRcdFx0JGJ1dHRvbi53cG9fYnV0dG9uKCAnY29tcGxldGUnICk7XG5cdFx0XHRcdCRidXR0b24ucmVtb3ZlQXR0ciggJ2Rpc2FibGVkJyApO1xuXHRcdFx0XHRsZXQgJHNwaW5uZXIgPSAkYnV0dG9uLm5leHQoKTtcblx0XHRcdFx0aWYoICRzcGlubmVyLmhhc0NsYXNzKCAnc3Bpbm5lcicgKSApIHtcblx0XHRcdFx0XHQkc3Bpbm5lci5yZW1vdmUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkYnV0dG9uLnBhcmVudCgpLmZpbmQoICcuc3Bpbm5lcicgKS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggJCwgZG9jdW1lbnQgKSA9PiB7XG5cdCQoICgpID0+IHtcblx0XHRsZXQgJGNsYXNzID0gJ1tkYXRhLXdwb25pb24taW5saW5lLWFqYXhdLCAud3Bvbmlvbi1hamF4LCAud3Bvbmlvbi1hamF4LWdldCwgLndwb25pb24tYWpheC1wb3N0LCAud3Bvbmlvbi1pbmxpbmUtYWpheCwgLndwb25pb24taW5saW5lLWFqYXgtZ2V0LCAud3Bvbmlvbi1pbmxpbmUtYWpheC1wb3N0Jztcblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAkY2xhc3MsICggZSApID0+IHtcblxuXHRcdFx0bGV0ICRlbGVtICAgICAgICAgICAgPSAkKCBlLmN1cnJlbnRUYXJnZXQgKSxcblx0XHRcdFx0JF9kYXRhICAgICAgICAgICA9ICRlbGVtLmRhdGEoKSxcblx0XHRcdFx0JF9jbGFzc19pbnN0YW5jZSA9IG51bGwsXG5cdFx0XHRcdCRhcmdzICAgICAgICAgICAgPSB7XG5cdFx0XHRcdFx0dXJsOiBmYWxzZSxcblx0XHRcdFx0fTtcblxuXHRcdFx0aWYoICRlbGVtLmF0dHIoICdkYXRhLXdwb25pb24taW5saW5lLWFqYXgnICkgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRsZXQgJGZpZDEgID0gJGVsZW0uYXR0ciggJ2RhdGEtd3Bvbmlvbi1pbmxpbmUtYWpheCcgKTtcblx0XHRcdFx0bGV0ICRmaWQyICA9ICRlbGVtLmF0dHIoICdpZCcgKTtcblx0XHRcdFx0bGV0ICRqc19pZCA9ICR3cG9uaW9uLmZpZWxkSUQoICRlbGVtICk7XG5cdFx0XHRcdGxldCAkYXJncyAgPSB7fTtcblx0XHRcdFx0aWYoICRqc19pZCApIHtcblx0XHRcdFx0XHRsZXQgJF9hcmdzID0gJHdwb25pb24uZmllbGRBcmdzKCAkanNfaWQsIGZhbHNlICk7XG5cdFx0XHRcdFx0aWYoICRfYXJncy5oYXNPd25Qcm9wZXJ0eSggJ2lubGluZV9hamF4JyApICYmIGZhbHNlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkX2FyZ3MuaW5saW5lX2FqYXggKSApIHtcblx0XHRcdFx0XHRcdCRhcmdzID0gJF9hcmdzLmlubGluZV9hamF4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKCBmYWxzZSAhPT0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMSwgZmFsc2UgKSApIHtcblx0XHRcdFx0XHRsZXQgJF9hcmdzID0gJHdwb25pb24uZmllbGRBcmdzKCAkZmlkMSwgZmFsc2UgKTtcblx0XHRcdFx0XHRpZiggJF9hcmdzLmhhc093blByb3BlcnR5KCAnaW5saW5lX2FqYXgnICkgJiYgZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRfYXJncy5pbmxpbmVfYWpheCApICkge1xuXHRcdFx0XHRcdFx0JGFyZ3MgPSAkX2FyZ3MuaW5saW5lX2FqYXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRmaWQyLCBmYWxzZSApICkge1xuXHRcdFx0XHRcdGxldCAkX2FyZ3MgPSAkd3Bvbmlvbi5maWVsZEFyZ3MoICRmaWQyLCBmYWxzZSApO1xuXHRcdFx0XHRcdGlmKCAkX2FyZ3MuaGFzT3duUHJvcGVydHkoICdpbmxpbmVfYWpheCcgKSAmJiBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJF9hcmdzLmlubGluZV9hamF4ICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJncyA9ICRfYXJncy5pbmxpbmVfYWpheDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tYWpheC1nZXQnICkgfHwgJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWlubGluZS1hamF4LWdldCcgKSApIHtcblx0XHRcdFx0XHQkYXJncy5tZXRob2QgPSAnR0VUJztcblx0XHRcdFx0fSBlbHNlIGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tYWpheC1wb3N0JyApIHx8ICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1pbmxpbmUtYWpheC1wb3N0JyApICkge1xuXHRcdFx0XHRcdCRhcmdzLm1ldGhvZCA9ICdQT1NUJztcblx0XHRcdFx0fSBlbHNlIGlmKCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24tYWpheCcgKSB8fCAkZWxlbS5oYXNDbGFzcyggJ3dwb25pb24taW5saW5lLWFqYXgnICkgJiYgdHlwZW9mICRfZGF0YS5tZXRob2QgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRhcmdzLm1ldGhvZCA9ICRfZGF0YS5tZXRob2Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdHlwZW9mICRfZGF0YS51cmwgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRhcmdzLnVybCA9ICRfZGF0YS51cmw7XG5cdFx0XHRcdH0gZWxzZSBpZiggdHlwZW9mICRfZGF0YS5ocmVmICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy51cmwgPSAkX2RhdGEuaHJlZjtcblx0XHRcdFx0fSBlbHNlIGlmKCAkZWxlbS5hdHRyKCAnaHJlZicgKSApIHtcblx0XHRcdFx0XHQkYXJncy51cmwgPSAkZWxlbS5hdHRyKCAnaHJlZicgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB0eXBlb2YgJF9kYXRhWyAnYWpheC1kYXRhJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy5kYXRhID0gJF9kYXRhWyAnYWpheC1kYXRhJyBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHR5cGVvZiAkX2RhdGEuYWN0aW9uICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHQkYXJncy5hY3Rpb24gPSAkX2RhdGEuYWN0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCRfY2xhc3NfaW5zdGFuY2UgPSBuZXcgV1BPbmlvbl9BamF4ZXIoICRhcmdzLCB7XG5cdFx0XHRcdGJ1dHRvbjogJGVsZW0sXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIGpRdWVyeSwgZG9jdW1lbnQgKTtcbiIsIi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cbmltcG9ydCB7XG5cdGNhbGxfdXNlcl9mdW5jLFxuXHRpc19qcXVlcnksXG5cdGlzX3dpbmRvd19hcmcsXG5cdG1kNSxcblx0bWljcm90aW1lLFxuXHRyYW5kX21kNSxcblx0dG9fanF1ZXJ5LFxuXHR0b19qc19mdW5jLFxufSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuLyoqXG4gKiBCYXNlIFdQb25pb24gSlMgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQT25pb24ge1xuXHQvKipcblx0ICogVmFsaWRhdGVzICYgQ29udmVydHMgaW50byBDYWxsYWJsZSBKUyBGdW5jdGlvbnMuXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKiBAcmV0dXJucyB7KnwkZGF0YX1cblx0ICovXG5cdHN0YXRpYyBqc19mdW5jKCAkZGF0YSApIHtcblx0XHRyZXR1cm4gdG9fanNfZnVuYyggJGRhdGEsICd3cG9uaW9uX2pzX2FyZ3MnLCAnd3Bvbmlvbl9qc19jb250ZW50cycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZXMgQSBSYW5kb20gSUQuXG5cdCAqL1xuXHRzdGF0aWMgcmFuZF9pZCgpIHtcblx0XHRyZXR1cm4gbWQ1KCAnd3Bvbmlvbl9yYW5kXycgKyBtaWNyb3RpbWUoKSArIHJhbmRfbWQ1KCkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgSlNPTi5cblx0ICogQHBhcmFtIG9ialxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHN0YXRpYyB2YWxpZF9qc29uKCBvYmogKSB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2UoIG9iaiApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCBJRC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkSUQoICRlbGVtICkge1xuXHRcdHJldHVybiB0b19qcXVlcnkoICRlbGVtICkuYXR0ciggJ2RhdGEtd3Bvbmlvbi1qc2lkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgRmllbGQgSFRNTCBPYmplY3QgVXNpbmcgRmllbGQgSUQuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJHdoZXJlX3RvX2ZpbmRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c3RhdGljIElEdG9FbGVtZW50KCAkZWxlbSwgJHdoZXJlX3RvX2ZpbmQgPSBmYWxzZSApIHtcblx0XHRsZXQgJGlkID0gV1BPbmlvbi5maWVsZElEKCAkZWxlbSApO1xuXHRcdGlmKCBmYWxzZSAhPT0gJHdoZXJlX3RvX2ZpbmQgJiYgaXNfanF1ZXJ5KCAkd2hlcmVfdG9fZmluZCApICkge1xuXHRcdFx0cmV0dXJuICR3aGVyZV90b19maW5kLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50W2RhdGEtd3Bvbmlvbi1qc2lkPVwiJyArICRpZCArICdcIicgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGpRdWVyeSggJy53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9XCInICsgJGlkICsgJ1wiXScgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gdmFsdWUgaXMgYW4galF1ZXJ5IGluc3RhbmNlLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzdGF0aWMgaXNGaWVsZCggJGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaXNfanF1ZXJ5KCAkZWxlbSApICkgPyAoIHRoaXMuZmllbGRJRCggJGVsZW0gKSApIDogZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBXaW5kb3cgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIHdpbmRvd0FyZ3MoICR2YXJfaWQsICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0cmV0dXJuICggaXNfd2luZG93X2FyZyggJHZhcl9pZCApICkgPyB3aW5kb3dbICR2YXJfaWQgXSA6ICRkZWZhdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyAmIFJldHVybnMgRmllbGQgQXJncy5cblx0ICogQHBhcmFtICR2YXJfaWRcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGZpZWxkQXJncyggJHZhcl9pZCwgJGRlZmF1bHQgPSB7fSApIHtcblx0XHQkdmFyX2lkID0gKCB0aGlzLmlzRmllbGQoICR2YXJfaWQgKSApID8gdGhpcy5maWVsZElEKCAkdmFyX2lkICkgOiAkdmFyX2lkO1xuXHRcdHJldHVybiAoICR2YXJfaWQgKSA/IHdpbmRvdy53cG9uaW9uLl8uY2xvbmUoIHRoaXMud2luZG93QXJncyggJHZhcl9pZCwgJGRlZmF1bHQgKSApIDogJGRlZmF1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2hjZWtzIGFuZCByZXR1cm5zIGdsb2JhbCB0cmFuc2xhdGlvbiBzdHJpbmcuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljIHR4dCggJGtleSwgJGRlZmF1bHQgPSAnc3RyaW5nX2RlZmF1bHRfbm90X2ZvdW5kJyApIHtcblx0XHRyZXR1cm4gKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggV1BPbmlvbi50ZXh0WyAka2V5IF0gKSApID8gV1BPbmlvbi50ZXh0WyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIExvYWRpbmcgU2NyZWVuLlxuXHQgKiBAcGFyYW0gJGVsZW1cblx0ICogQHBhcmFtICRpc19zaG93XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGxvYWRpbmdfc2NyZWVuKCAkZWxlbSwgJGlzX3Nob3cgPSB0cnVlICkge1xuXHRcdCRlbGVtID0gdG9fanF1ZXJ5KCAkZWxlbSApLmZpbmQoICcucGFnZS1sb2FkZXInICk7XG5cdFx0aWYoIHRydWUgPT09ICRpc19zaG93ICkge1xuXHRcdFx0cmV0dXJuICRlbGVtLmZhZGVJbiggJ3Nsb3cnICk7XG5cdFx0fVxuXHRcdHJldHVybiAkZWxlbS5mYWRlT3V0KCAnc2xvdycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEdsb2JhbCBEZWJ1ZyBWaWV3IFBPUFVQLlxuXHQgKi9cblx0c3RhdGljIGdsb2JhbF9kZWJ1ZygpIHtcblx0XHRsZXQgJGhhbmRsZSA9IGpRdWVyeSggJ2Eud3Bvbmlvbi1nbG9iYWwtZGVidWctaGFuZGxlJyApLFxuXHRcdFx0JGpzb24gICA9IHt9O1xuXHRcdGlmKCBXUE9uaW9uLmRlYnVnX2luZm8gPT09IG51bGwgJiYgJGhhbmRsZS5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRkZWZpbmVkX3ZhcnMgPSBXUE9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2RlZmluZWRfdmFycycgKTtcblx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkZGVmaW5lZF92YXJzICkgKSB7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJGRlZmluZWRfdmFycyApIHtcblx0XHRcdFx0XHRpZiggJGRlZmluZWRfdmFycy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkZGVmaW5lZF92YXJzWyAka2V5IF0gKSApIHtcblx0XHRcdFx0XHRcdCRqc29uWyAkZGVmaW5lZF92YXJzWyAka2V5IF0gXSA9IFdQT25pb24ud2luZG93QXJncyggJGRlZmluZWRfdmFyc1sgJGtleSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFdQT25pb24uZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCRoYW5kbGUub24oICdjbGljaycsICggKCBlICkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3dhbCgge1xuXHRcdFx0XHR0aXRsZTogV1BPbmlvbi50eHQoICdnbG9iYWxfanNvbl9vdXRwdXQnLCAnR2xvYmFsIFdQT25pb24gRGVidWcgRGF0YScgKSxcblx0XHRcdFx0aHRtbDogalF1ZXJ5KCAnI3dwb25pb25kZWJ1Z2luZm9wb3B1cCA+IGRpdicgKSxcblx0XHRcdFx0c2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG5cdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBXUE9uaW9uLnR4dCggJ2dldF9qc29uX291dHB1dCcsICdHZXQgSlNPTiBPdXRwdXQnICksXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRvbkJlZm9yZU9wZW46ICgpID0+IHN3YWwuZW5hYmxlTG9hZGluZygpLFxuXHRcdFx0XHRvbk9wZW46ICgpID0+IHtcblx0XHRcdFx0XHRqUXVlcnkoICcjc3dhbDItY29udGVudCAjd3Bvbmlvbi1nbG9iYWwtZGVidWctY29udGVudCcgKS5qc29uVmlldyggV1BPbmlvbi5kZWJ1Z19pbmZvICk7XG5cdFx0XHRcdFx0c3dhbC5kaXNhYmxlTG9hZGluZygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRpZiggcmVzdWx0LnZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBzd2FsKCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwMHB4Jyxcblx0XHRcdFx0XHRcdGh0bWw6ICc8dGV4dGFyZWEgc3R5bGU9XCJtaW4td2lkdGg6NTUwcHg7IG1pbi1oZWlnaHQ6MzAwcHhcIj4nICsgSlNPTi5zdHJpbmdpZnkoIFdQT25pb24uZGVidWdfaW5mbyApICsgJzwvdGV4dGFyZWE+Jyxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgYW5kIFJldHJpdmVzIFZhbHVlcyBmcm9tICR3cG9uaW9uLnNldHRpbmdzXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBvcHRpb24oICRrZXksICRkZWZhdWx0ID0ge30gKSB7XG5cdFx0bGV0ICRhcmdzID0gV1BPbmlvbi5zZXR0aW5nc19hcmdzO1xuXHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3NbICRrZXkgXSApICkge1xuXHRcdFx0cmV0dXJuICRhcmdzWyAka2V5IF07XG5cdFx0fVxuXHRcdHJldHVybiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgV1BPbmlvbiBEZWJ1ZyBpcyBlbmFibGVkLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHN0YXRpYyBpc19kZWJ1ZygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdkZWJ1ZycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXIgQWxsIEZpZWxkIEpTIENvZGVzLlxuXHQgKi9cblx0c3RhdGljIGZpZWxkX2RlYnVnKCkge1xuXHRcdGlmKCBXUE9uaW9uLmlzX2RlYnVnKCkgJiYgd2luZG93Lndwb25pb24uXy5pc051bGwoIFdQT25pb24uZmllbGRfZGVidWdfaW5mbyApICkge1xuXHRcdFx0bGV0ICR2YXJzID0gV1BPbmlvbi53aW5kb3dBcmdzKCAnd3Bvbmlvbl9kZWZpbmVkX3ZhcnMnICksXG5cdFx0XHRcdCRqc29uID0ge30sXG5cdFx0XHRcdCR1dHh0ID0gV1BPbmlvbi50eHQoICd1bm1vZGlmaWVkX2RlYnVnJyApLFxuXHRcdFx0XHQkbXR4dCA9IFdQT25pb24udHh0KCAnbW9kaWZpZWRfZGVidWcnICk7XG5cblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJHZhcnMgKSB7XG5cdFx0XHRcdGlmKCAkdmFycy5oYXNPd25Qcm9wZXJ0eSggJGtleSApICYmIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkdmFyc1sgJGtleSBdICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRkYXRhICAgICAgICAgICAgICAgICAgICAgICA9IFdQT25pb24ud2luZG93QXJncyggJHZhcnNbICRrZXkgXSApO1xuXHRcdFx0XHRcdCRqc29uWyAkdmFyc1sgJGtleSBdIF0gICAgICAgICAgPSB7fTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkdXR4dCBdID0gJGRhdGEuZGVidWdfaW5mbyB8fCAkZGF0YTtcblx0XHRcdFx0XHQkanNvblsgJHZhcnNbICRrZXkgXSBdWyAkbXR4dCBdID0ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFdQT25pb24uZmllbGRfZGVidWdfaW5mbyA9ICRqc29uO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDdXN0b20gQWpheCBXcmFwcGVyIEZvciBqUXVlcnkuQWpheCgpXG5cdCAqIEBwYXJhbSAkYWN0aW9uXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKiBAcGFyYW0gJG9uU3VjY2Vzc1xuXHQgKiBAcGFyYW0gJG9uRXJyb3Jcblx0ICogQHBhcmFtICRvbkFsd2F5c1xuXHQgKi9cblx0c3RhdGljIGFqYXgoICRhY3Rpb24gPSAnJywgJGRhdGEgPSB7fSwgJG9uU3VjY2VzcyA9IGZhbHNlLCAkb25FcnJvciA9IGZhbHNlLCAkb25BbHdheXMgPSBmYWxzZSApIHtcblx0XHRsZXQgJGRlZmF1bHRzID0ge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHR1cmw6IFdQT25pb24ub3B0aW9uKCAnYWpheF91cmwnICksXG5cdFx0XHRvblN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0b25BbHdheXM6IGZhbHNlLFxuXHRcdFx0b25FcnJvcjogZmFsc2UsXG5cdFx0fTtcblxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzT2JqZWN0KCAkYWN0aW9uICkgKSB7XG5cdFx0XHQkZGF0YSA9ICRhY3Rpb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRkZWZhdWx0cy51cmwgKz0gJyYnICsgV1BPbmlvbi5vcHRpb24oICdhamF4X2FjdGlvbl9rZXknICkgKyAnPScgKyAkYWN0aW9uO1xuXHRcdH1cblxuXHRcdCRkZWZhdWx0cyAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkZGVmYXVsdHMsICRkYXRhICk7XG5cdFx0JG9uU3VjY2VzcyA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJG9uU3VjY2VzcyApIHx8IGZhbHNlID09PSAkb25TdWNjZXNzICkgPyAkZGVmYXVsdHMub25TdWNjZXNzIDogJG9uU3VjY2Vzcztcblx0XHQkb25BbHdheXMgID0gKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkb25FcnJvciApIHx8IGZhbHNlID09PSAkb25FcnJvciApID8gJGRlZmF1bHRzLm9uQWx3YXlzIDogJG9uQWx3YXlzO1xuXHRcdCRvbkVycm9yICAgPSAoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRvbkFsd2F5cyApIHx8IGZhbHNlID09PSAkb25BbHdheXMgKSA/ICRkZWZhdWx0cy5vbkVycm9yIDogJG9uRXJyb3I7XG5cdFx0bGV0ICRhamF4ICA9IGpRdWVyeS5hamF4KCAkZGVmYXVsdHMgKTtcblxuXG5cdFx0aWYoICRvblN1Y2Nlc3MgKSB7XG5cdFx0XHQkYWpheC5kb25lKCAoIHJlcyApID0+IGNhbGxfdXNlcl9mdW5jKCAkb25TdWNjZXNzLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25FcnJvciApIHtcblx0XHRcdCRhamF4LmZhaWwoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkVycm9yLCByZXMgKSApO1xuXHRcdH1cblxuXHRcdGlmKCAkb25BbHdheXMgKSB7XG5cdFx0XHQkYWpheC5hbHdheXMoICggcmVzICkgPT4gY2FsbF91c2VyX2Z1bmMoICRvbkFsd2F5cywgcmVzICkgKTtcblx0XHR9XG5cdFx0cmV0dXJuICRhamF4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgV1BPbmlvbiBUZW1wbGF0ZSBmb3IgdW5kZXJzY29yZS5cblx0ICogQHBhcmFtICRpZFxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0pOiAqfVxuXHQgKi9cblx0c3RhdGljIHRlbXBsYXRlKCAkaWQgKSB7XG5cdFx0bGV0IGNvbXBpbGVkLFxuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZXZhbHVhdGU6IC88IyhbXFxzXFxTXSs/KSM+L2csXG5cdFx0XHRcdGludGVycG9sYXRlOiAvXFx7XFx7XFx7KFtcXHNcXFNdKz8pXFx9XFx9XFx9L2csXG5cdFx0XHRcdGVzY2FwZTogL1xce1xceyhbXlxcfV0rPylcXH1cXH0oPyFcXH0pL2csXG5cdFx0XHRcdHZhcmlhYmxlOiAnZGF0YSdcblx0XHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0XHRjb21waWxlZCA9IGNvbXBpbGVkIHx8IHdpbmRvdy53cG9uaW9uLl8udGVtcGxhdGUoICRpZCwgb3B0aW9ucyApO1xuXHRcdFx0cmV0dXJuIGNvbXBpbGVkKCBkYXRhICk7XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIFdQb25pb24gU2V0dGluZ3MgLyBNZXRhYm94IFN1Ym1lbnUgSW5kaWNhdG9yLlxuXHQgKiBAcGFyYW0gJGVsZW1zXG5cdCAqL1xuXHRzdGF0aWMgc3VibWVudV9pbmRpY2F0b3IoICRlbGVtcyApIHtcblx0XHQkZWxlbXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCAkdG9nZ2xlICAgPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiAud3Bvbmlvbi1zdWJtZW51LWknICkuYXR0ciggJ2RhdGEtdG9nZ2xlLWNsYXNzJyApO1xuXHRcdFx0XHRsZXQgJGV4X2NsYXNzID0galF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdjbGFzcycgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdjbGFzcycsICR0b2dnbGUgKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJz4gLndwb25pb24tc3VibWVudS1pJyApLmF0dHIoICdkYXRhLXRvZ2dsZS1jbGFzcycsICRleF9jbGFzcyApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxufVxuIiwiLyoqXG4gKiBXUE9uaW9uIERlYnVnIENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdC8qKlxuXHQgKiBBZGQgQSBEZWJ1ZyBJbmZvIFRvIERlYnVnIEFycmF5LlxuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcGFyYW0gJHZhbHVlXG5cdCAqL1xuXHRzdGF0aWMgYWRkKCAka2V5LCAkdmFsdWUgKSB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mbyApICkge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvID0ge307XG5cdFx0fVxuXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm9bICRrZXkgXSA9ICR2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkdmFsdWUsIHRoaXMuZGVidWdfaW5mb1sgJGtleSBdICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgQSBEZWJ1ZyBJbmZvIEJhc2VkIG9uIEtleS5cblx0ICogQHBhcmFtICRrZXlcblx0ICogQHBhcmFtICRkZWZhdWx0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0c3RhdGljIGdldCggJGtleSwgJGRlZmF1bHQgPSBmYWxzZSApIHtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvICkgKSB7XG5cdFx0XHR0aGlzLmRlYnVnX2luZm8gPSB7fTtcblx0XHR9XG5cdFx0cmV0dXJuICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5kZWJ1Z19pbmZvWyAka2V5IF0gKSApID8gJGRlZmF1bHQgOiB0aGlzLmRlYnVnX2luZm9bICRrZXkgXTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fRGVwZW5kZW5jeSBmcm9tICcuLi9oZWxwZXJzL2RlcGVuZGVuY3knO1xuXG4vKipcbiAqIFdQT25pb24gRGVwZW5kZW5jeSBDbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJGVsZW1lbnRcblx0ICogQHBhcmFtIHBhcmFtXG5cdCAqIEBwYXJhbSAkY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsZW1lbnQgPSB1bmRlZmluZWQsIHBhcmFtID0ge30sICRjb25maWcgPSB7fSApIHtcblx0XHR0aGlzLnBhcmFtICAgICAgICAgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7IG5lc3RhYmxlOiBmYWxzZSwgcGFyZW50OiBmYWxzZSB9LCBwYXJhbSApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICA9IHRoaXM7XG5cdFx0dGhpcy5iYXNlICAgICAgICAgID0ge307XG5cdFx0dGhpcy5iYXNlLiRlbCAgICAgID0gJGVsZW1lbnQ7XG5cdFx0dGhpcy5iYXNlLmluaXQgICAgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5iYXNlLnJ1bGVzZXQgPSBqUXVlcnkuZGVwcy5jcmVhdGVSdWxlc2V0KCk7XG5cdFx0XHR0aGlzLmJhc2UuZGVwUm9vdCgpO1xuXHRcdFx0bGV0ICRfZGVwc19mdW5jdGlvbnMgPSB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCB7XG5cdFx0XHRcdHNob3c6ICggZWwgKSA9PiB7XG5cdFx0XHRcdFx0ZWwuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5yZW1vdmVDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRoaWRlOiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdGVsLnNsaWRlVXAoKTtcblx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLmFkZENsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxvZzogZmFsc2UsXG5cdFx0XHRcdGNoZWNrVGFyZ2V0czogZmFsc2UsXG5cdFx0XHR9LCAkY29uZmlnICk7XG5cblx0XHRcdGpRdWVyeS5kZXBzLmVuYWJsZSggdGhpcy5iYXNlLiRlbCwgdGhpcy5iYXNlLnJ1bGVzZXQsICRfZGVwc19mdW5jdGlvbnMgKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbnN0YW5jZSA9IFtdO1xuXHRcdHRoaXMuYmFzZS5kZXBSb290ICA9ICgpID0+IHtcblx0XHRcdHRoaXMuYmFzZS4kZWwuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmZpbmQoICcud3Bvbmlvbi1oYXMtZGVwZW5kZW5jeScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5iYXNlLmluc3RhbmNlID0gbmV3IFdQT25pb25fRGVwZW5kZW5jeSggalF1ZXJ5KCB0aGlzICksICR0aGlzLmJhc2UucnVsZXNldCwge1xuXHRcdFx0XHRcdFx0bmVzdGFibGU6ICR0aGlzLnBhcmFtLm5lc3RhYmxlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiAoIHRydWUgPT09ICR0aGlzLnBhcmFtLm5lc3RhYmxlICkgPyAkdGhpcy5iYXNlLiRlbCA6ICR0aGlzLnBhcmFtLnBhcmVudCxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdHRoaXMuYmFzZS5pbml0KCk7XG5cdH1cbn1cbiIsIi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cblxuY29uc3QgaXNfanF1ZXJ5ID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuaXNfanF1ZXJ5O1xuXG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAkd3Bvbmlvbl9kZWJ1ZyBmcm9tICcuL2RlYnVnJztcbmltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuL21vZHVsZSc7XG5pbXBvcnQgV1BPbmlvbl9WYWxpZGF0aW9uIGZyb20gJy4uL2NvcmUvdmFsaWRhdGlvbic7XG5cbi8qKlxuICogV1BPbmlvbiBGaWVsZCBBYnN0cmFjdCBDbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXUE9uaW9uX01vZHVsZSB7XG5cdC8qKlxuXHQgKiBXUE9uaW9uIEZpZWxkIENsYXNzIENvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udGV4dFxuXHQgKiBAcGFyYW0gJGNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQgPSBudWxsLCAkY29uZmlnID0gbnVsbCApIHtcblx0XHRzdXBlciggJHNlbGVjdG9yLCAkY29udGV4dCApO1xuXHRcdHRoaXMuc2V0X2FyZ3MoIGZhbHNlICk7XG5cdFx0dGhpcy5maWVsZF9kZWJ1ZygpO1xuXHRcdHRoaXMuY29uZmlnID0gJGNvbmZpZztcblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmpzX2Vycm9yX2hhbmRsZXIoKTtcblx0XHR0aGlzLmpzX3ZhbGlkYXRvcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uIFVzZWQgVG8gSW5pdCBGaWVsZC5cblx0ICogVGhpcyBuZWVkcyB0byBiZSBvdmVycmlkZW4gZXh0ZW5kaW5nIGNsYXNzLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGphdmFzY3JpcHQgZXJyb3IgcGxhY2VtZW50LlxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqL1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGVyci5lcnJvci5hcHBlbmRUbyggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgQW4gVHJpZ2dlciBIb29rIFRvIEhhbmRsZSBKUyBFcnJvciBQbGFjZW1lbnRcblx0ICogQHVzZSBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0gZWxlbWVudFxuXHQgKi9cblx0anNfZXJyb3JfaGFuZGxlciggZWxlbWVudCA9IHRoaXMuZWxlbWVudCApIHtcblx0XHRlbGVtZW50Lm9uKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCAnPiAud3Bvbmlvbi1maWVsZHNldCA6aW5wdXQnLCAoIGUsIGRhdGEgKSA9PiB0aGlzLmpzX2Vycm9yKCBkYXRhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdmFsaWRhdGlvbiBpcyByZXF1aXJlZCBmb3IgY3VycmVudCBmaWVsZC5cblx0ICovXG5cdGpzX3ZhbGlkYXRvcigpIHtcblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApICkgKSB7XG5cdFx0XHRpZiggZmFsc2UgIT09IHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApICkge1xuXHRcdFx0XHR0aGlzLm1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGN1cnJlbnQgcGFnZSBoYXMgZm9ybSBhbmQgZW5hYmxlIHZhbGlkYXRpb25zLlxuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRtYXliZV9qc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIFdQT25pb25fVmFsaWRhdGlvbi5nZXRfZm9ybSgpICkge1xuXHRcdFx0dGhpcy5qc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBSdWxlIFRvIEVhY2ggYW5kIGV2ZXJ5IGlucHV0IHRvIHZhbGlkYXRlIEpTIExpYi5cblx0ICogQHBhcmFtICRhcmdzXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0anNfdmFsaWRhdGVfZWxlbSggJGFyZ3MsICRlbGVtICkge1xuXHRcdGlmKCBXUE9uaW9uX1ZhbGlkYXRpb24uZ2V0X2Zvcm0oKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBmdW5jdGlvbiB1c2VkIGJ5IGVhY2ggYW5kIGV2ZXJ5IGZpZWxkLlxuXHQgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYWxzbyBjb252ZXJ0IFNpbXBsZSBKUyBmdW5jdGlvbiBjb2RlIGludG8gY2FsbGFibGUgSlMgY29kZSAmIHJldHVybnMgaXRcblx0ICogUGx1cyBpdCBhbHNvIHN0b3JlIHRoZSB2YWx1ZSBpbiBkZWJ1ZyBhcnJheSBpZiBkZWJ1ZyBlbmFibGVkLlxuXHQgKiBAcGFyYW0gJGFyZ1xuXHQgKiBAcGFyYW0gJGtleVxuXHQgKiBAcmV0dXJucyB7KnwkZGF0YX1cblx0ICovXG5cdGhhbmRsZV9hcmdzKCAkYXJnLCAka2V5ID0gZmFsc2UgKSB7XG5cdFx0bGV0ICRhcmdzICAgPSAkd3Bvbmlvbi5qc19mdW5jKCAkYXJnICksXG5cdFx0XHQkZXhpc3RzID0gJHdwb25pb25fZGVidWcuZ2V0KCB0aGlzLmlkKCksIHsgJ1BIUCBBcmdzJzoge30sICdKUyBBcmdzJzoge30gfSApO1xuXHRcdCRleGlzdHMgICAgID0gd2luZG93Lndwb25pb24uXy5tZXJnZSggeyAnUEhQIEFyZ3MnOiB7fSwgJ0pTIEFyZ3MnOiB7fSB9LCAkZXhpc3RzICk7XG5cblx0XHRpZiggZmFsc2UgPT09ICRrZXkgKSB7XG5cdFx0XHQkZXhpc3RzWyAnSlMgQXJncycgXSA9ICRhcmdzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZXhpc3RzWyAnSlMgQXJncycgXVsgJGtleSBdID0gJGFyZ3M7XG5cdFx0fVxuXHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCAkZXhpc3RzICk7XG5cdFx0cmV0dXJuICRhcmdzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgRmllbGQgRGVidWcgUE9QVVAuXG5cdCAqL1xuXHRmaWVsZF9kZWJ1ZygpIHtcblx0XHRpZiggZmFsc2UgIT09ICR3cG9uaW9uX2RlYnVnLmdldCggdGhpcy5pZCgpICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0ICRpbmZvID0gdGhpcy5vcHRpb24oICdkZWJ1Z19pbmZvJyApO1xuXG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkaW5mbyApICkge1xuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzRW1wdHkoICRpbmZvICkgKSB7XG5cdFx0XHRcdCR3cG9uaW9uX2RlYnVnLmFkZCggdGhpcy5pZCgpLCB7ICdQSFAgQXJncyc6ICRpbmZvLCAnSlMgQXJncyc6IHt9IH0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgJGZvdW5kID0gZmFsc2U7XG5cdFx0aWYoICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWZpZWxkLWRlYnVnJyApICkge1xuXHRcdFx0bGV0ICRJRCAgID0gdGhpcy5pZCgpLFxuXHRcdFx0XHQkZWxlbSA9IGpRdWVyeSggJ2Rpdi53cG9uaW9uLWVsZW1lbnRbZGF0YS13cG9uaW9uLWpzaWQ9JyArICRJRCArICddJyApO1xuXHRcdFx0aWYoICRlbGVtLmhhc0NsYXNzKCAnd3Bvbmlvbi1maWVsZC1kZWJ1ZycgKSApIHtcblx0XHRcdFx0JGZvdW5kID0gJGVsZW07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRmb3VuZCA9IHRoaXMuZWxlbWVudDtcblx0XHR9XG5cblx0XHRpZiggZmFsc2UgIT09ICRmb3VuZCApIHtcblx0XHRcdGxldCAkdGhpcyA9IHRoaXM7XG5cblx0XHRcdCRmb3VuZC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZC10aXRsZSA+IGg0JyApXG5cdFx0XHRcdCAgLnRpcHB5KCB7XG5cdFx0XHRcdFx0ICBjb250ZW50OiAkd3Bvbmlvbi50eHQoICdjbGlja190b192aWV3X2RlYnVnX2luZm8nLCAnQ2xpY2sgVG8gVmlldyBGaWVsZCBEZWJ1ZyBJbmZvJyApLFxuXHRcdFx0XHRcdCAgYXJyb3c6IHRydWUsXG5cdFx0XHRcdFx0ICBhcnJvd1R5cGU6ICdyb3VuZCcsXG5cdFx0XHRcdFx0ICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHRcdCAgdGhlbWU6ICdsaWdodCcsXG5cdFx0XHRcdFx0ICBhbmltYXRpb246ICdzY2FsZScsXG5cdFx0XHRcdFx0ICBhcHBlbmRUbzogdGhpcy5nZXRfZmllbGRfcGFyZW50X2J5X2lkKCB0aGlzLmVsZW1lbnQgKVsgMCBdLFxuXHRcdFx0XHQgIH0gKTtcblxuXHRcdFx0JGZvdW5kLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkLXRpdGxlID4gaDQnICkub24oICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0bGV0ICRkICAgICAgICAgID0gJHRoaXMuaWQoKSArICdkZWJ1Z0lORk8nLFxuXHRcdFx0XHRcdCRub3RpY2VfdHh0ID0gJzxwIGNsYXNzPVxcJ3dwb25pb24tZmllbGQtZGVidWctbm90aWNlXFwnPicgKyAkd3Bvbmlvbi5vcHRpb24oICdkZWJ1Z19ub3RpY2UnICkgKyAnPC9wPicsXG5cdFx0XHRcdFx0JGVsZW0gICAgICAgPSBqUXVlcnkoICc8ZGl2IGlkPVwiJyArICRkICsgJ1wiIGNsYXNzPVwid3Bvbmlvbi1maWVsZC1kZWJ1Zy1wb3B1cFwiID48ZGl2IGlkPVwiJyArICRkICsgJ1wiID48L2Rpdj4nICsgJG5vdGljZV90eHQgKyAnPC9kaXY+JyApO1xuXHRcdFx0XHRsZXQgJGRhdGEgICAgICAgPSAkd3Bvbmlvbl9kZWJ1Zy5nZXQoICR0aGlzLmlkKCkgKTtcblx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdGh0bWw6ICRlbGVtLFxuXHRcdFx0XHRcdHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiAkd3Bvbmlvbi50eHQoICdnZXRfanNvbl9vdXRwdXQnLCAnQXMgSlNPTicgKSxcblx0XHRcdFx0XHRzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRcdG9uT3BlbjogKCkgPT4galF1ZXJ5KCAnI3N3YWwyLWNvbnRlbnQgPiBkaXYgPiAjJyArICRkICkuanNvblZpZXcoICRkYXRhIClcblx0XHRcdFx0fSApLnRoZW4oICggcmVzdWx0ICkgPT4ge1xuXHRcdFx0XHRcdGlmKCByZXN1bHQudmFsdWUgKSB7XG5cdFx0XHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnNjAwcHgnLFxuXHRcdFx0XHRcdFx0XHRodG1sOiAnPHRleHRhcmVhIHN0eWxlPVwibWluLXdpZHRoOjU1MHB4OyBtaW4taGVpZ2h0OjMwMHB4XCI+JyArIEpTT04uc3RyaW5naWZ5KCAkd3Bvbmlvbl9kZWJ1Zy5nZXQoICR0aGlzLmlkKCkgKSApICsgJzwvdGV4dGFyZWE+J1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQkZm91bmQuZmluZCggJz4gLndwb25pb24tZmllbGRzZXQgLndwb25pb24tZmllbGQtZGVidWctY29kZS1nZW4nICkub24oICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0bGV0ICRzdHJpbmcgPSB0aGlzLm9wdGlvbiggJ2RlYnVnX2ZpZWxkX2NvZGUnICk7XG5cdFx0XHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzU3RyaW5nKCAkc3RyaW5nICkgKSB7XG5cdFx0XHRcdFx0c3dhbCgge1xuXHRcdFx0XHRcdFx0aHRtbDogJHN0cmluZyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnODAwcHgnLFxuXHRcdFx0XHRcdFx0c2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuXHRcdFx0XHRcdFx0aGVpZ2h0QXV0bzogZmFsc2UsXG5cdFx0XHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXJzIEZpZWxkIE9wdGlvbnMgRGF0YSBmcm9tIHdpbmRvdy53cG9uaW9uIGFycmF5LlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdG9wdGlvbnMoKSB7XG5cdFx0aWYoIHRoaXMuX2FyZ3MgPT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5fYXJncyA9ICR3cG9uaW9uLndpbmRvd0FyZ3MoIHRoaXMuaWQoKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYXJncztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYSBnaXZlbiBvcHRpb24ga2V5IGV4aXN0cyBhbmQgaWYgc28gdGhlbiBpdCByZXR1cm5zIGl0IHZhbHVlXG5cdCAqIG9yIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG5cdCAqIEBwYXJhbSAka2V5XG5cdCAqIEBwYXJhbSAkZGVmYXVsdFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdG9wdGlvbiggJGtleSA9ICcnLCAkZGVmYXVsdCA9IHt9ICkge1xuXHRcdGxldCAkYXJncyA9IHRoaXMub3B0aW9ucygpO1xuXHRcdHJldHVybiAoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJnc1sgJGtleSBdICkgKSA/ICRhcmdzWyAka2V5IF0gOiAkZGVmYXVsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIFdQT25pb24gSlMgRmllbGQgSURcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRpZCgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBGaWVsZCdzIE1vZHVsZSBTbHVnLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdG1vZHVsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb24oICdtb2R1bGUnLCBmYWxzZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRmllbGQncyBQbHVnaW4gU2x1Zy5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRwbHVnaW5faWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9uKCAncGx1Z2luX2lkJywgZmFsc2UgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBBbiBBamF4IEFjdGlvbi5cblx0ICogQHBhcmFtICRhY3Rpb25cblx0ICogQHBhcmFtICRkYXRhXG5cdCAqL1xuXHRhamF4KCAkYWN0aW9uID0gJycsICRkYXRhID0ge30gKSB7XG5cdFx0bGV0ICRhamF4X2tleSAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnYWpheF9hY3Rpb25fa2V5JyApO1xuXHRcdGxldCAkZGVmYXVsdCAgICAgICAgICA9IHtcblx0XHRcdHBsdWdpbl9pZDogdGhpcy5wbHVnaW5faWQoKSxcblx0XHRcdG1vZHVsZTogdGhpcy5tb2R1bGUoKSxcblx0XHR9O1xuXHRcdCRkZWZhdWx0WyAkYWpheF9rZXkgXSA9ICRhY3Rpb247XG5cdFx0JGRhdGEuZGF0YSAgICAgICAgICAgID0gKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGRhdGEuZGF0YSApICkgPyB3aW5kb3cud3Bvbmlvbi5fLm1lcmdlKCAkZGVmYXVsdCwgJGRhdGEuZGF0YSApIDogJGRlZmF1bHQ7XG5cblx0XHRyZXR1cm4gJHdwb25pb24uYWpheCggJGRhdGEgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBBIFNpbmdsZSBFbGVtZW50LlxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRpbml0X3NpbmdsZV9maWVsZCggJHR5cGUsICRlbGVtICkge1xuXHRcdHdwb25pb25faW5pdF9maWVsZCggJHR5cGUsICRlbGVtICk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdHMgQSBTaW5nbGUgRmllbGQgVHlwZVxuXHQgKiBAdXNlcyBpbml0X3NpbmdsZV9maWVsZC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKi9cblx0aW5pdF9maWVsZCggJGVsZW0sICR0eXBlICkge1xuXHRcdGlmKCAhaXNfanF1ZXJ5KCAkZWxlbSApICkge1xuXHRcdFx0JGVsZW0gPSB0aGlzLmVsZW1lbnQuZmluZCggJGVsZW0gKTtcblx0XHR9XG5cblx0XHRpZiggJGVsZW0ubGVuZ3RoID4gMCApIHtcblx0XHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHRoaXMuaW5pdF9zaW5nbGVfZmllbGQoICR0eXBlLCBqUXVlcnkoIGUgKSApICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlbG9hZHMgQWxsIEZpZWxkIFR5cGUgSW5zaWRlIFRoaXMgRmllbGQuXG5cdCAqL1xuXHRyZWxvYWQoKSB7XG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2JlZm9yZV9maWVsZHNfcmVsb2FkJyApO1xuXG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1hY2NvcmRpb24nLCAnYWNjb3JkaW9uJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja2dyb3VuZCcsICdiYWNrZ3JvdW5kJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwJywgJ2JhY2t1cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWNoZWNrYm94JywgJ2NoZWNrYm94X3JhZGlvJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtcmFkaW8nLCAnY2hlY2tib3hfcmFkaW8nICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1jbG9uZScsICdjbG9uZV9lbGVtZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGFsZXR0ZScsICdjb2xvcl9wYWxldHRlJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29sb3JfcGlja2VyJywgJ2NvbG9yX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNlbGVjdCcsICdzZWxlY3QnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1pY29uX3BpY2tlcicsICdpY29uX3BpY2tlcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJywgJ2ZvbnRfc2VsZWN0b3InICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1ncm91cCcsICdncm91cCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHQ6bm90KC53cG9uaW9uLWlucHV0bWFzayknLCAndGV4dCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXRleHRhcmVhJywgJ3RleHRhcmVhJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2Vfc2VsZWN0JywgJ2ltYWdlX3NlbGVjdCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXN3aXRjaGVyJywgJ3N3aXRjaGVyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJywgJ3dwX2VkaXRvcicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWZpZWxkc2V0JywgJ2ZpZWxkc2V0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfbGluaycsICd3cF9saW5rcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LWtleV92YWx1ZScsICdrZXl2YWx1ZV9wYWlyJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtZGF0ZV9waWNrZXInLCAnZGF0ZV9waWNrZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nYWxsZXJ5JywgJ2dhbGxlcnknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC11cGxvYWQnLCAndXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaW1hZ2UnLCAnaW1hZ2VfdXBsb2FkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtYnV0dG9uX3NldCcsICdidXR0b25fc2V0JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtdGFiJywgJ2pxdWVyeV90YWInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1nb29nbGVfbWFwcycsICdnb29nbGVfbWFwcycgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1lbGVtZW50LXNvcnRlcicsICdzb3J0ZXInICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC10eXBvZ3JhcGh5JywgJ3R5cG9ncmFwaHknICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24tZWxlbWVudC1vZW1iZWQnLCAnb2VtYmVkJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtaGVhZGluZycsICdoZWFkaW5nJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtc3ViaGVhZGluZycsICdzdWJoZWFkaW5nJyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtY29udGVudCcsICdjb250ZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtamFtYm9fY29udGVudCcsICdqYW1ib19jb250ZW50JyApO1xuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWVsZW1lbnQtbm90aWNlJywgJ25vdGljZScgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggJy53cG9uaW9uLWZpZWxkLXRvb2x0aXAnLCAndG9vbHRpcCcgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1oZWxwJywgJ3Rvb2x0aXAnICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLndwb25pb24td3JhcC10b29sdGlwJywgJ3Rvb2x0aXAnICk7XG5cblx0XHR0aGlzLmluaXRfZmllbGQoICdpbnB1dFtkYXRhLXdwb25pb24taW5wdXRtYXNrXScsICdpbnB1dG1hc2snICk7XG5cdFx0dGhpcy5pbml0X2ZpZWxkKCAnLnNlbGVjdDInLCAnc2VsZWN0MicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuY2hvc2VuJywgJ2Nob3NlbicgKTtcblx0XHR0aGlzLmluaXRfZmllbGQoICcuc2VsZWN0aXplJywgJ3NlbGVjdGl6ZScgKTtcblxuXG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX2ZpZWxkc19yZWxvYWQnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBBcmdzIERhdGEuXG5cdCAqIEBwYXJhbSAkYXJnc1xuXHQgKi9cblx0c2V0X2FyZ3MoICRhcmdzICkge1xuXHRcdHRoaXMuX2FyZ3MgPSAkYXJncztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEZpZWxkIFBhcmVudCBCeSBkYXRhLXdwb25pb24tanNpZCBhdHRyaWJ1dGUuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7KnxqUXVlcnl8SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRnZXRfZmllbGRfcGFyZW50X2J5X2lkKCAkZWxlbSApIHtcblx0XHRsZXQgJElEID0gJHdwb25pb24uZmllbGRJRCggJGVsZW0gKTtcblx0XHRyZXR1cm4galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD1cIicgKyAkSUQgKyAnXCJdJyApO1xuXHR9XG59XG4iLCIvKipcbiAqIFdQT25pb24gTW9kdWxlIEpTIENsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0LyoqXG5cdCAqIFdQT25pb24gTW9kdWxlIEpTIENsYXNzIENvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udGV4dFxuXHQgKi9cblx0Y29uc3RydWN0b3IoICRzZWxlY3RvciwgJGNvbnRleHQgPSBudWxsICkge1xuXHRcdGlmKCAhJHNlbGVjdG9yLmpRdWVyeSApIHtcblx0XHRcdCRzZWxlY3RvciA9IGpRdWVyeSggJHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0X2VsZW1lbnQoICRzZWxlY3RvciApO1xuXHRcdHRoaXMuc2V0X2NvbnR4dCggJGNvbnRleHQgKTtcblx0XHR0aGlzLm1vZHVsZV9pbml0KCk7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcnMgTW9kdWxlIEluaXQgRnVuY3Rpb24uXG5cdCAqL1xuXHRtb2R1bGVfaW5pdCgpIHtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIEVsZW1lbnQgQXJncy5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRzZXRfZWxlbWVudCggJGVsZW0gKSB7XG5cdFx0aWYoICEkZWxlbS5qUXVlcnkgKSB7XG5cdFx0XHQkZWxlbSA9IGpRdWVyeSggJGVsZW0gKTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtID0gJGVsZW07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBDb250eHQgQXJncy5cblx0ICogQHBhcmFtICRjb250eHRcblx0ICovXG5cdHNldF9jb250eHQoICRjb250eHQgKSB7XG5cdFx0dGhpcy5jb250ZXh0ID0gJGNvbnR4dDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEhvb2sgQ2xhc3MuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGhvb2soKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy53cG9uaW9uLmhvb2tzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgRWxlbWVudCBWYXJpYWJsZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldCBlbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBDb250eHQgVmFyaWFibGUuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGNvbnR4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0O1xuXHR9XG59XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBXUE9uaW9uIEZpZWxkIFZhbGlkYXRvciBIZWxwZXIgQ2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BPbmlvbl9WYWxpZGF0b3Ige1xuXHQvKipcblx0ICogSGVscGVyIENsYXNzIEZvciBXUE9uaW9uIEpTIEZpZWxkIFZhbGlkYXRpb24uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggZm9ybSA9IGZhbHNlICkge1xuXHRcdHRoaXMuZm9ybSAgPSAoIGZhbHNlID09PSBmb3JtICkgPyBXUE9uaW9uX1ZhbGlkYXRvci5nZXRfZm9ybSgpIDogZm9ybTtcblx0XHR0aGlzLnJ1bGVzID0ge1xuXHRcdFx0aW52YWxpZEhhbmRsZXI6ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnI3B1Ymxpc2gnICkucmVtb3ZlQ2xhc3MoICdidXR0b24tcHJpbWFyeS1kaXNhYmxlZCcgKTtcblx0XHRcdFx0alF1ZXJ5KCAnI2FqYXgtbG9hZGluZycgKS5hdHRyKCAnc3R5bGUnLCAnJyApO1xuXHRcdFx0XHR0aGlzLmZvcm0uc2libGluZ3MoICcjbWVzc2FnZScgKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5mb3JtLmJlZm9yZSggJzxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJlcnJvclwiPjxwPicgKyAkd3Bvbmlvbi50eHQoICd2YWxpZGF0aW9uX3N1bW1hcnknICkgKyAnPC9wPjwvZGl2PicgKTtcblx0XHRcdH0sXG5cdFx0XHRpZ25vcmU6ICcud3Bvbmlvbi1kZXBlbmRlbnQsLndwb25pb24tdmFsaWRhdGlvbi1pZ25vcmUnLFxuXHRcdFx0ZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKCBlcnJvciwgZWxlbWVudCApIHtcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKCAnd3Bvbmlvbl9qc192YWxpZGF0aW9uX21lc3NhZ2UnLCB7IGVycm9yLCBlbGVtZW50IH0gKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvckNsYXNzOiAnd3Bvbmlvbi1lcnJvcicsXG5cdFx0XHRlcnJvckVsZW1lbnQ6ICdwJ1xuXHRcdH07XG5cblx0XHRpZiggdGhpcy5mb3JtICkge1xuXHRcdFx0dGhpcy5mb3JtLnZhbGlkYXRlKCB0aGlzLnJ1bGVzICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmRzICYgUmV0dXJucyBmb3JtIERhdGEuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c3RhdGljIGdldF9mb3JtKCkge1xuXHRcdGlmKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0ud3Bvbmlvbi1mb3JtJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3lvdXItcHJvZmlsZScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jeW91ci1wcm9maWxlJyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3VwZGF0ZS1uYXYtbWVudScgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jdXBkYXRlLW5hdi1tZW51JyApO1xuXHRcdH1cblxuXHRcdGlmKCBqUXVlcnkoICdmb3JtI3Bvc3QnICkubGVuZ3RoID4gMCAmJiBqUXVlcnkoICdpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA+IDAgJiYgalF1ZXJ5KCAnaW5wdXQjb3JpZ2luYWxfcHVibGlzaCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeSggJ2Zvcm0jcG9zdCcgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKS5sZW5ndGggPiAwICkgPyBqUXVlcnkoICdmb3JtLndwb25pb24tZm9ybScgKSA6IGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hY2NvcmRpb24oIHtcblx0XHRcdFx0aGVhZGVyOiAnPiAud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0YW5pbWF0ZTogMTUwLFxuXHRcdFx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxuXHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdCdoZWFkZXInOiAnZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1yaWdodCcsXG5cdFx0XHRcdFx0J2FjdGl2ZUhlYWRlcic6ICdkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LWRvd24nXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0aWYoICFqUXVlcnkoIHRoaXMgKS5oYXNDbGFzcyggJ2lzX29wZW4nICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFjY29yZGlvbiggJ29wdGlvbicsICdhY3RpdmUnLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIEphdmFzY3JpcHQgRXJyb3IgUGxhY2VtZW50LlxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqL1xuXHRqc19lcnJvciggZXJyICkge1xuXHRcdGxldCAkZWxlbSA9ICR3cG9uaW9uLklEdG9FbGVtZW50KCBlcnIuZWxlbWVudCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYoICRlbGVtICkge1xuXHRcdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCcgKSApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2FjY29yZGlvbicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYmFja2dyb3VuZCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0ICR3cG9uaW9uIGZyb20gJy4uL2NvcmUvY29yZSc7XG5cbi8qIGdsb2JhbCBzd2FsOnRydWUgKi9cblxuLyogZ2xvYmFsIHRpcHB5OnRydWUgKi9cblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLnRvb2x0aXAoKTtcblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1cImZpbGVcIl0nICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLmhhbmRsZV9iYWNrdXBfaW1wb3J0KCBlLmN1cnJlbnRUYXJnZXQgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2EuZG93bmxvYWRfYmFja3VwJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRsZXQgJGZpbGUgPSB0aGlzLm9wdGlvbiggJ2Jhc2VfdW5pcXVlJyApO1xuXHRcdFx0JGZpbGUgICAgID0gJGZpbGUgKyAnLScgKyB0aGlzLm1vZHVsZSgpO1xuXHRcdFx0bGV0IGRhdGUgID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBzdHIgICA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArICggZGF0ZS5nZXRNb250aCgpICsgMSApICsgJy0nICsgZGF0ZS5nZXREYXRlKCkgKyAnLScgKyBkYXRlLmdldEhvdXJzKCkgKyBkYXRlLmdldE1pbnV0ZXMoKSArIGRhdGUuZ2V0U2Vjb25kcygpO1xuXHRcdFx0JGZpbGUgICAgID0gJGZpbGUgKyAnLScgKyBzdHI7XG5cdFx0XHR0aGlzLmZvcmNlX2Rvd25sb2FkKCBKU09OLnBhcnNlKCB0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfdGV4dGFyZWEgdGV4dGFyZWEnICkuaHRtbCgpICksICRmaWxlICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICdhLm5ld19iYWNrdXAgJyApLm9uKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHRcdHRoaXMuYWpheCggJ25ldy1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uU3VjY2VzczogKCBlICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoIHRydWUgKTtcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cycgKS5odG1sKCBlLmRhdGEgKTtcblx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCAnY2xpY2snLCAnLmRlbGV0ZV9iYWNrdXAnLCAoIGUgKSA9PiB7XG5cdFx0XHR0aGlzLmJsb2NrX2Zvcm0oKTtcblx0XHRcdGxldCAkaW5zID0galF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAuZGVsZXRlX2JhY2t1cCcgKS50aXBweV9nZXQoKTtcblx0XHRcdGlmKCAkaW5zLmluc3RhbmNlc1sgMCBdICkge1xuXHRcdFx0XHQkaW5zLmluc3RhbmNlc1sgMCBdLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWpheCggJ2RlbGV0ZS1tb2R1bGUtZGF0YS1iYWNrdXAnLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdFx0ZXh0cmE6IHRoaXMuZ2V0X2V4dHJhX3ZhbHVlKCksXG5cdFx0XHRcdFx0YmFja3VwX2lkOiBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLmF0dHIoICdkYXRhLWJhY2t1cGlkJyApLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0XHRpZiggZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0dGhpcy50b29sdGlwKCB0cnVlICk7XG5cdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy5iYWNrdXBfbGlzdHMnICkuaHRtbCggZS5kYXRhICk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXAoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCBlLmRhdGEgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiB0aGlzLnVuYmxvY2tfZm9ybSgpLFxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy5yZXN0b3JlX2JhY2t1cCcsICggZSApID0+IHtcblx0XHRcdHRoaXMucmVzdG9yZV9iYWNrdXAoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkuYXR0ciggJ2RhdGEtYmFja3VwaWQnICkgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oICdibHVyJywgJy5yZXN0b3JlX3RleHRhcmVhIHRleHRhcmVhJywgKCBlICkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggalF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS52YWwoKSApICk7XG5cdFx0XHRcdGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCAnJyApLmh0bWwoICcnICk7XG5cdFx0XHR9IGNhdGNoKCBlcnJvciApIHtcblx0XHRcdFx0dGhpcy5zd2FsX2Vycm9yKCB0aGlzLm9wdGlvbiggJ2ludmFsaWRfZm9ybWF0JyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlcyBTd2FsIEVycm9yIE1zZy5cblx0ICogQHBhcmFtIG1zZ1xuXHQgKi9cblx0c3dhbF9lcnJvciggbXNnICkge1xuXHRcdHN3YWwoIHtcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR0aXRsZTogbXNnXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgVG9vbFRpcCBpbnN0YW5jZS5cblx0ICogQHBhcmFtIHJlbW92ZVxuXHQgKi9cblx0dG9vbHRpcCggcmVtb3ZlID0gZmFsc2UgKSB7XG5cdFx0bGV0ICR0aGlzID0gdGhpcztcblx0XHRpZiggdHJ1ZSA9PT0gcmVtb3ZlICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcuYmFja3VwX2xpc3RzIGxpJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJGVsZW0gPSBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBhJyApWyAwIF07XG5cdFx0XHRcdCRlbGVtLl90aXBweS5kZXN0cm95KCk7XG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLmJhY2t1cF9saXN0cyBsaScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHRoaXMuc2hvd190b29sdGlwKCBqUXVlcnkoIHRoaXMgKS5maW5kKCAnPmEnICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQmxvY2tzIEEgRm9ybVxuXHQgKi9cblx0YmxvY2tfZm9ybSgpIHtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkuZmluZCggJ2J1dHRvbicgKS5hdHRyKCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnICk7XG5cdH1cblxuXHQvKipcblx0ICogVW5ibG9ja3MgYSBmb3JtXG5cdCAqL1xuXHR1bmJsb2NrX2Zvcm0oKSB7XG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLmZpbmQoICdidXR0b24nICkucmVtb3ZlQXR0ciggJ2Rpc2FibGVkJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZvcmNlcyBEb3dubG9hZCBFeHBvcnQgRGF0YS5cblx0ICogQHBhcmFtIGV4cG9ydE9ialxuXHQgKiBAcGFyYW0gZXhwb3J0TmFtZVxuXHQgKi9cblx0Zm9yY2VfZG93bmxvYWQoIGV4cG9ydE9iaiwgZXhwb3J0TmFtZSApIHtcblx0XHRsZXQgZGF0YVN0ciAgICAgICAgICAgID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudCggSlNPTi5zdHJpbmdpZnkoIGV4cG9ydE9iaiApICk7XG5cdFx0bGV0IGRvd25sb2FkQW5jaG9yTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdhJyApO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoICdocmVmJywgZGF0YVN0ciApO1xuXHRcdGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoICdkb3dubG9hZCcsIGV4cG9ydE5hbWUgKyAnLmpzb24nICk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZG93bmxvYWRBbmNob3JOb2RlICk7IC8vIHJlcXVpcmVkIGZvciBmaXJlZm94XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLmNsaWNrKCk7XG5cdFx0ZG93bmxvYWRBbmNob3JOb2RlLnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc3RvcmVzIEJhY2t1cCBEYXRhLlxuXHQgKiBAcGFyYW0gYmFja3VwX2lkXG5cdCAqL1xuXHRyZXN0b3JlX2JhY2t1cCggYmFja3VwX2lkICkge1xuXHRcdHRoaXMuYmxvY2tfZm9ybSgpO1xuXHRcdHRoaXMuYWpheCggJ3Jlc3RvcmUtbW9kdWxlLWRhdGEtYmFja3VwJywge1xuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR1bmlxdWU6IHRoaXMub3B0aW9uKCAnYmFzZV91bmlxdWUnICksXG5cdFx0XHRcdGV4dHJhOiB0aGlzLmdldF9leHRyYV92YWx1ZSgpLFxuXHRcdFx0XHRiYWNrdXBfaWQ6IGJhY2t1cF9pZCxcblx0XHRcdH0sXG5cdFx0XHRvblN1Y2Nlc3M6ICggZSApID0+IHtcblx0XHRcdFx0aWYoIGUuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRzd2FsKCB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHR0aXRsZTogZS5kYXRhLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIGUuZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25BbHdheXM6ICgpID0+IHRoaXMudW5ibG9ja19mb3JtKCksXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgQmFja3VwIEltcG9ydCBGaWxlIGFuZCByZXN0b3JlcyBpdC5cblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRoYW5kbGVfYmFja3VwX2ltcG9ydCggJGVsZW0gKSB7XG5cdFx0aWYoICRlbGVtLmZpbGVzICYmICRlbGVtLmZpbGVzWyAwIF0gKSB7XG5cdFx0XHRsZXQgJGZpbGUgPSAkZWxlbS5maWxlc1sgMCBdO1xuXG5cdFx0XHRpZiggJGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL2pzb24nICkge1xuXHRcdFx0XHR0aGlzLnN3YWxfZXJyb3IoIHRoaXMub3B0aW9uKCAnaW52YWxpZF9mb3JtYXQnICkgKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bGV0IHJlYWRlciAgICA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdHJlYWRlci5vbmxvYWQgPSAoIGUgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXN0b3JlX2JhY2t1cCggSlNPTi5wYXJzZSggZS50YXJnZXQucmVzdWx0ICkgKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoICRmaWxlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cncyBUb29sVGlwXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0c2hvd190b29sdGlwKCAkZWxlbSApIHtcblx0XHRsZXQgJGJhY2t1cGlkID0gJGVsZW0uYXR0ciggJ2RhdGEtYmFja3VwaWQnICk7XG5cdFx0bGV0ICRhcHBlbmRUTyA9IHRoaXMuZWxlbWVudFsgMCBdO1xuXHRcdHRpcHB5KCAkZWxlbVsgMCBdLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGFwcGVuZFRvOiAkYXBwZW5kVE8sXG5cdFx0XHRhcnJvd1R5cGU6ICdyb3VuZCcsXG5cdFx0XHRjb250ZW50OiAnPGJ1dHRvbiBkYXRhLWJhY2t1cGlkPVwiJyArICRiYWNrdXBpZCArICdcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZXN0b3JlX2JhY2t1cCBidXR0b24gYnV0dG9uLXNlY29uZGFyeSBidXR0b24tc21hbGxcIj48aSBjbGFzcz1cImRhc2hpY29ucy1pbWFnZS1yb3RhdGUgZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4gfCA8YnV0dG9uIGRhdGEtYmFja3VwaWQ9XCInICsgJGJhY2t1cGlkICsgJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZV9iYWNrdXAgYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNtYWxsXCI+PGkgY2xhc3M9XCJkYXNoaWNvbnMtdHJhc2ggZGFzaGljb25zXCI+PC9pPiA8L2J1dHRvbj4nLFxuXHRcdFx0aW50ZXJhY3RpdmU6IHRydWUsXG5cdFx0XHR0aGVtZTogJ3RyYW5zbHVjZW50Jyxcblx0XHRcdG9uU2hvd246ICgpID0+IHtcblx0XHRcdFx0alF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAuZGVsZXRlX2JhY2t1cCcgKS50aXBweSgge1xuXHRcdFx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdGFycm93VHlwZTogJ3NraW5ueScsXG5cdFx0XHRcdFx0YXBwZW5kVG86ICRhcHBlbmRUTyxcblx0XHRcdFx0XHRjb250ZW50OiAkd3Bvbmlvbi50eHQoICdkZWxldGUnICksXG5cdFx0XHRcdFx0dGhlbWU6ICdsaWdodC1ib3JkZXInLFxuXHRcdFx0XHRcdGludGVyYWN0aXZlOiBmYWxzZSxcblx0XHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0alF1ZXJ5KCAnZGl2LnRpcHB5LXBvcHBlciAudGlwcHktY29udGVudCAucmVzdG9yZV9iYWNrdXAnICkudGlwcHkoIHtcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdFx0XHRhcnJvd1R5cGU6ICdza2lubnknLFxuXHRcdFx0XHRcdGFwcGVuZFRvOiAkYXBwZW5kVE8sXG5cdFx0XHRcdFx0Y29udGVudDogJHdwb25pb24udHh0KCAncmVzdG9yZScgKSxcblx0XHRcdFx0XHR0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBFeHRyYSBWYWx1ZS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXRfZXh0cmFfdmFsdWUoKSB7XG5cdFx0aWYoIGpRdWVyeSggJ2Zvcm0jcG9zdCBpbnB1dCNwb3N0X0lEJyApLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkoICdmb3JtI3Bvc3QgaW5wdXQjcG9zdF9JRCcgKS52YWwoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnYmFja3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5yZW1vdmVfYWN0aXZlX2NsYXNzKCk7XG5cdFx0dGhpcy5hZGRfYWN0aXZlX2NsYXNzKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjbGljaycsICggZSApID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlX2FjdGl2ZV9jbGFzcygpO1xuXHRcdFx0dGhpcy5hZGRfYWN0aXZlX2NsYXNzKCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBBY3RpdmUgQ2xhc3MuXG5cdCAqL1xuXHRyZW1vdmVfYWN0aXZlX2NsYXNzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdGxldCAkZSA9IGpRdWVyeSggZSApO1xuXHRcdFx0aWYoICEkZS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0XHQkZS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb24oICdhY3RpdmUnICkgKTtcblx0XHRcdFx0JGUucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoIHRoaXMub3B0aW9uKCAnaW5hY3RpdmUnICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBBY3RpdmUgQ2xhc3MuXG5cdCAqL1xuXHRhZGRfYWN0aXZlX2NsYXNzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdGxldCAkZSA9IGpRdWVyeSggZSApO1xuXHRcdFx0aWYoICRlLmlzKCAnOmNoZWNrZWQnICkgKSB7XG5cdFx0XHRcdCRlLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCB0aGlzLm9wdGlvbiggJ2FjdGl2ZScgKSApO1xuXHRcdFx0XHQkZS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyggdGhpcy5vcHRpb24oICdpbmFjdGl2ZScgKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2J1dHRvbl9zZXQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkY3VzdG9tX2lucHV0ID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHRsZXQgJHJhZGlvcyAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1yYWRpb10nICk7XG5cdFx0XHRsZXQgJGNoZWNrYm94ICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXRbdHlwZT1jaGVja2JveF0nICk7XG5cblx0XHRcdCRjdXN0b21faW5wdXQuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLW5hbWUnLCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnbmFtZScgKSApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblx0XHRcdH0gKTtcblxuXG5cdFx0XHQkcmFkaW9zLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdFx0aWYoIGpRdWVyeSggZSApLmlzKCAnOmNoZWNrZWQnICkgKSB7XG5cdFx0XHRcdFx0aWYoIGpRdWVyeSggZSApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCRjdXN0b21faW5wdXQucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHRcdFx0XHRsZXQgJGkgPSBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0XHRcdFx0JGkuYXR0ciggJ25hbWUnLCAkaS5hdHRyKCAnZGF0YS1uYW1lJyApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRyYWRpb3Mub24oICdjbGljaycsICggZSApID0+IHtcblx0XHRcdFx0aWYoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdCRjdXN0b21faW5wdXQucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cdFx0XHRcdFx0bGV0ICRpID0galF1ZXJ5KCBlLmN1cnJlbnRUYXJnZXQgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApO1xuXHRcdFx0XHRcdCRpLmF0dHIoICduYW1lJywgJGkuYXR0ciggJ2RhdGEtbmFtZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdCRjaGVja2JveC5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0XHRcdGlmKCBqUXVlcnkoIGUgKS5wYXJlbnQoKS5maW5kKCAnLndwb25pb24tY3VzdG9tLXZhbHVlLWlucHV0JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkoIGUgKS5yZW1vdmVBdHRyKCAnbmFtZScgKTtcblx0XHRcdFx0XHRcdGxldCAkaSA9IGpRdWVyeSggZSApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICk7XG5cdFx0XHRcdFx0XHQkaS5hdHRyKCAnbmFtZScsICRpLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0JGNoZWNrYm94Lm9uKCAnY2xpY2snLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1jdXN0b20tdmFsdWUtaW5wdXQnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnJlbW92ZUF0dHIoICduYW1lJyApO1xuXHRcdFx0XHRcdGxldCAkaSA9IGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLWN1c3RvbS12YWx1ZS1pbnB1dCcgKTtcblx0XHRcdFx0XHQkaS5hdHRyKCAnbmFtZScsICRpLmF0dHIoICdkYXRhLW5hbWUnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NoZWNrYm94X3JhZGlvJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGFyZyA9IHRoaXMub3B0aW9uKCAnY2hvc2VuJywge30gKTtcblxuXHRcdCRhcmcgPSB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAnY2hvc2VuJyApO1xuXHRcdHRoaXMuZWxlbWVudC5jaG9zZW4oICRhcmcgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZpZWxkX2RlYnVnKCkge1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY2hvc2VuJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbi8qIGdsb2JhbCB3cG9uaW9uX2ZpZWxkOnRydWUgKi9cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRhcmcgICAgICAgID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdjbG9uZScsIHt9ICkgKTtcblx0XHRsZXQgJHRoaXMgICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGNsb25lX3dyYXAgPSAkZWxlbS5maW5kKCAnZGl2Lndwb25pb24tY2xvbmUtd3JhcCcgKSxcblx0XHRcdCRhZGRfYnRuICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbltkYXRhLXdwb25pb24tY2xvbmUtYWRkXScgKSxcblx0XHRcdC8vJHJlbW92ZV9idG4gPSAkY2xvbmVfd3JhcC5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1jbG9uZS1yZW1vdmVdJyApLFxuXHRcdFx0JGxpbWl0ICAgICAgPSAoICRhcmcubGltaXQgIT09IHVuZGVmaW5lZCApID8gJGFyZy5saW1pdCA6IGZhbHNlLFxuXHRcdFx0Ly8kaXNfdG9hc3QgICA9ICggJGFyZy50b2FzdF9lcnJvciAhPT0gdW5kZWZpbmVkICkgPyAkYXJnLnRvYXN0X2Vycm9yIDogdHJ1ZSxcblx0XHRcdCRlcm9yX21zZyAgID0gJGFyZy5lcnJvcl9tc2csXG5cdFx0XHQkc29ydCAgICAgICA9ICggJGFyZy5zb3J0ICE9PSBmYWxzZSApID8ge1xuXHRcdFx0XHRpdGVtczogJy53cG9uaW9uLWZpZWxkLWNsb25lJyxcblx0XHRcdFx0aGFuZGxlOiAnLndwb25pb24tZmllbGQtY2xvbmUtc29ydGVyJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cG9uaW9uLWNsb25lci1wbGFjZWhvbGRlcicsXG5cdFx0XHRcdHN0YXJ0OiAoIGV2ZW50LCB1aSApID0+IHVpLml0ZW0uY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsICcjZWVlZScgKSxcblx0XHRcdFx0c3RvcDogKCBldmVudCwgdWkgKSA9PiB7XG5cdFx0XHRcdFx0JGVsZW0udHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0fSxcblx0XHRcdH0gOiBmYWxzZTtcblxuXHRcdCRjbG9uZV93cmFwLldQT25pb25DbG9uZXIoIHtcblx0XHRcdGFkZF9idG46ICRhZGRfYnRuLFxuXHRcdFx0bGltaXQ6ICRsaW1pdCxcblx0XHRcdGNsb25lX2VsZW06ICcud3Bvbmlvbi1maWVsZC1jbG9uZScsXG5cdFx0XHRyZW1vdmVfYnRuOiAnLndwb25pb24tY2xvbmUtYWN0aW9uID4gLndwb25pb24tcmVtb3ZlJyxcblx0XHRcdHRlbXBsYXRlOiAkdGhpcy5vcHRpb24oICdjbG9uZV90ZW1wbGF0ZScgKSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICggJGUgKSA9PiB7XG5cdFx0XHRcdCRlbGVtLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdHdwb25pb25fZmllbGQoICRlLmZpbmQoICc+IGRpdi53cG9uaW9uLWZpZWxkLWNsb25lOmxhc3QtY2hpbGQnICkgKS5yZWxvYWQoKTtcblx0XHRcdH0sXG5cdFx0XHRvblJlbW92ZUFmdGVyOiAoKSA9PiAkZWxlbS50cmlnZ2VyKCAnY2hhbmdlJyApLFxuXHRcdFx0c29ydGFibGU6ICRzb3J0LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggJGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0JGFkZF9idG4ucGFyZW50KCkucHJlcGVuZCggalF1ZXJ5KCAkZXJvcl9tc2cgKS5oaWRlKCkgKTtcblx0XHRcdFx0XHQkYWRkX2J0bi5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggJGFkZF9idG4ucGFyZW50KCkuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2hvd19hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5zaG93LFxuXHRcdFx0aGlkZV9hbmltYXRpb246ICRhcmcuYW5pbWF0aW9ucy5oaWRlLFxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2Nsb25lX2VsZW1lbnQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2NvbG9yX3BhbGV0dGUnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0Lndwb25pb24tY29sb3ItcGlja2VyLWVsZW1lbnQnICkud3BDb2xvclBpY2tlcigpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY29sb3JfcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjb250ZW50JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggdGhpcy5vcHRpb24oICdzZXR0aW5ncycgKSApLFxuXHRcdFx0JHZpZXc7XG5cblx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRzZXR0aW5ncy50aGVtZSApICkge1xuXHRcdFx0JHZpZXcgPSAkc2V0dGluZ3MudGhlbWU7XG5cdFx0XHRkZWxldGUgJHNldHRpbmdzLnRoZW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdmlldyA9ICdkZWZhdWx0Jztcblx0XHR9XG5cblx0XHRpZiggalF1ZXJ5KCAnZGl2IycgKyB0aGlzLmlkKCkgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdC5hcHBlbmQoIGpRdWVyeSggJzxkaXYgY2xhc3M9XCJ3cG9uaW9uLWRhdGVwaWNrZXItJyArICR2aWV3ICsgJ1wiIGlkPVwiJyArIHRoaXMuaWQoKSArICdcIj48L2Rpdj4nICkgKTtcblx0XHR9XG5cblx0XHRpZiggJGVsZW0uaGFzQ2xhc3MoICd3cG9uaW9uLWRhdGVwaWNrZXItcmFuZ2UnICkgKSB7XG5cdFx0XHQkc2V0dGluZ3MuYXBwZW5kVG8gPSBqUXVlcnkoICdkaXYjJyArIHRoaXMuaWQoKSApWyAwIF07XG5cdFx0XHRpZiggJHNldHRpbmdzLnBsdWdpbnMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JHNldHRpbmdzLnBsdWdpbnMgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0JHNldHRpbmdzLnBsdWdpbnMucHVzaCggbmV3IHJhbmdlUGx1Z2luKCB7IGlucHV0OiAkZWxlbS5maW5kKCAnaW5wdXRbZGF0YS13cG9uaW9uLWRhdGVwaWNrZXItdG8tZGF0ZV0nIClbIDAgXSB9ICkgKTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dFtkYXRhLXdwb25pb24tZGF0ZXBpY2tlci1mcm9tLWRhdGVdJyApLmZsYXRwaWNrciggJHNldHRpbmdzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzZXR0aW5ncy5hcHBlbmRUbyA9IGpRdWVyeSggJ2RpdiMnICsgdGhpcy5pZCgpIClbIDAgXTtcblx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCcgKS5mbGF0cGlja3IoICRzZXR0aW5ncyApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2RhdGVfcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0bGV0ICRlbGVtID0gJHdwb25pb24uSUR0b0VsZW1lbnQoIGVyci5lbGVtZW50LCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiggJGVsZW0gKSB7XG5cdFx0XHRlcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZmllbGRzZXQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogUmV0dXJucyBXZWJzYWZlIEZvbnQgRGF0YS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQgd2Vic2FmZSgpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fd2Vic2FmZV9mb250cycgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEdvb2dsZSBGb250IERhdGEuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0IGdvb2dsZV9mb250cygpIHtcblx0XHRyZXR1cm4gJHdwb25pb24ud2luZG93QXJncyggJ3dwb25pb25fZ2ZvbnRzJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0cyBIVE1MIE9wdGlvbiBUYWcgVXNpbmcgQXJyYXkuXG5cdCAqIEBwYXJhbSBkYXRhXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRidWlsZF9vcHRpb25zKCBkYXRhICkge1xuXHRcdGxldCAkcmV0dXJuID0gJyc7XG5cdFx0Zm9yKCBsZXQgJF9kIGluIGRhdGEgKSB7XG5cdFx0XHRpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIGRhdGFbICRfZCBdICkgKSB7XG5cdFx0XHRcdCRyZXR1cm4gKz0gYDxvcHRpb24gdmFsdWU9XCIkeyRfZH1cIj4ke2RhdGFbICRfZCBdfTwvb3B0aW9uPmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkcmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdC53cG9uaW9uLWZvbnQtc2VsZWN0b3InICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB7XG5cdFx0XHRsZXQgJHZhbCAgPSBqUXVlcnkoIGUuY3VycmVudFRhcmdldCApLnZhbCgpLFxuXHRcdFx0XHQkaHRtbCA9IG51bGw7XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy53ZWJzYWZlLmZvbnRzIFsgJHZhbCBdICkgKSB7XG5cdFx0XHRcdCRodG1sID0gdGhpcy5idWlsZF9vcHRpb25zKCB0aGlzLndlYnNhZmUudmFyaWFudHMgKTtcblx0XHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKSApIHtcblx0XHRcdFx0JGh0bWwgPSB0aGlzLmJ1aWxkX29wdGlvbnMoIHRoaXMuZ29vZ2xlX2ZvbnRzWyAkdmFsIF0gKTtcblx0XHRcdH1cblx0XHRcdGxldCAkdmFyaWFudCA9IHRoaXMuZWxlbWVudC5maW5kKCAnc2VsZWN0Lndwb25pb24tdmFyaWFudC1zZWxlY3RvcicgKS5odG1sKCAkaHRtbCApO1xuXG5cdFx0XHRpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdjaG9zZW4nICkgKSB7XG5cdFx0XHRcdCR2YXJpYW50LnRyaWdnZXIoICdjaG9zZW46dXBkYXRlZCcgKTtcblx0XHRcdH0gZWxzZSBpZiggJHZhcmlhbnQuaGFzQ2xhc3MoICdzZWxlY3QyJyApICkge1xuXHRcdFx0XHQkdmFyaWFudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ZvbnRfc2VsZWN0b3InLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCRodG1sX3RlbXAgPSAkdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0JGlucHV0ICAgICA9ICRlbGVtLmZpbmQoICdpbnB1dCNpbWFnZV9pZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldycgKSxcblx0XHRcdHdwX21lZGlhX2ZyYW1lLFxuXHRcdFx0JGFkZCAgICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktYWRkXScgKSxcblx0XHRcdCRlZGl0ICAgICAgPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1nYWxsZXJ5LWVkaXRdJyApLFxuXHRcdFx0JGNsZWFyICAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWdhbGxlcnktY2xlYXJdJyApLFxuXHRcdFx0JG1hbmFnZSAgICA9IGZ1bmN0aW9uKCAkdHlwZSApIHtcblx0XHRcdFx0bGV0IGlkcyAgID0gJGlucHV0LnZhbCgpLFxuXHRcdFx0XHRcdHdoYXQgID0gKCAkdHlwZSA9PT0gJ2VkaXQnICkgPyAnZWRpdCcgOiAnYWRkJyxcblx0XHRcdFx0XHRzdGF0ZSA9ICggd2hhdCA9PT0gJ2FkZCcgJiYgIWlkcy5sZW5ndGggKSA/ICdnYWxsZXJ5JyA6ICdnYWxsZXJ5LWVkaXQnO1xuXG5cdFx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXG5cdFx0XHRcdGlmKCBzdGF0ZSA9PT0gJ2dhbGxlcnknICkge1xuXHRcdFx0XHRcdHdwX21lZGlhX2ZyYW1lID0gd3AubWVkaWEoIHtcblx0XHRcdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHRcdFx0ZnJhbWU6ICdwb3N0Jyxcblx0XHRcdFx0XHRcdHN0YXRlOiAnZ2FsbGVyeScsXG5cdFx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vcGVuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3BfbWVkaWFfZnJhbWUgPSB3cC5tZWRpYS5nYWxsZXJ5LmVkaXQoICdbZ2FsbGVyeSBpZHM9XCInICsgaWRzICsgJ1wiXScgKTtcblx0XHRcdFx0XHRpZiggd2hhdCA9PT0gJ2FkZCcgKSB7XG5cdFx0XHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5zZXRTdGF0ZSggJ2dhbGxlcnktbGlicmFyeScgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3VwZGF0ZScsIGZ1bmN0aW9uKCBzZWxlY3Rpb24gKSB7XG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkSWRzID0gc2VsZWN0aW9uLm1vZGVscy5tYXAoIGZ1bmN0aW9uKCBhdHRhY2htZW50ICkge1xuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSBhdHRhY2htZW50LnRvSlNPTigpO1xuXHRcdFx0XHRcdFx0aWYoIGl0ZW0uc2l6ZXMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgdGh1bWIgPSAoIHR5cGVvZiBpdGVtLnNpemVzLnRodW1ibmFpbCAhPT0gJ3VuZGVmaW5lZCcgKSA/IGl0ZW0uc2l6ZXMudGh1bWJuYWlsLnVybCA6IGl0ZW0udXJsLFxuXHRcdFx0XHRcdFx0XHQkdG1wICA9IGpRdWVyeSggJGh0bWxfdGVtcCApO1xuXHRcdFx0XHRcdFx0JHRtcC5hdHRyKCAnZGF0YS13cG9uaW9uLWltYWdlX2lkJywgaXRlbS5pZCApO1xuXHRcdFx0XHRcdFx0JHRtcC5maW5kKCAnaW1nJyApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgaXRlbS51cmwgKS5hdHRyKCAnc3JjJywgdGh1bWIgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG5cdFx0XHRcdFx0XHQkcHJldmlldy5hcHBlbmQoICR0bXAgKTtcblx0XHRcdFx0XHRcdCR0aGlzLmluaXRfZmllbGQoICcud3Bvbmlvbi1oZWxwJywgJ3Rvb2x0aXAnICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5pZDtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0bGV0ICRlO1xuXHRcdFx0XHRcdGZvciggJGUgaW4gc2VsZWN0ZWRJZHMgKSB7XG5cdFx0XHRcdFx0XHRpZiggc2VsZWN0ZWRJZHNbICRlIF0gPT09IGZhbHNlIHx8IHNlbGVjdGVkSWRzWyAkZSBdID09PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIHNlbGVjdGVkSWRzWyAkZSBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkaW5wdXQudmFsKCBzZWxlY3RlZElkcy5qb2luKCAnLCcgKSApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH07XG5cblx0XHQkaW5wdXQub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS52YWwoKSA9PT0gJycgKSB7XG5cdFx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdFx0XHQkZWRpdC5oaWRlKCk7XG5cdFx0XHRcdCRjbGVhci5oaWRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZWRpdC5zaG93KCk7XG5cdFx0XHRcdCRjbGVhci5zaG93KCk7XG5cdFx0XHRcdCRhZGQuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdCRhZGQub24oICdjbGljaycsICgpID0+ICRtYW5hZ2UoICdhZGQnICkgKTtcblxuXHRcdCRlZGl0Lm9uKCAnY2xpY2snLCAoKSA9PiAkbWFuYWdlKCAnZWRpdCcgKSApO1xuXG5cdFx0JGNsZWFyLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRpbnB1dC52YWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5odG1sKCAnJyApO1xuXHRcdFx0JGNsZWFyLmhpZGUoKTtcblx0XHRcdCRlZGl0LmhpZGUoKTtcblx0XHRcdCRhZGQuc2hvdygpO1xuXHRcdH0gKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaW1nJywgKCBldmVudCApID0+IHRoaXMuaW5pdF9maWVsZCggZXZlbnQudGFyZ2V0LCAnaW1hZ2VfcG9wdXAnICkgKTtcblxuXHRcdCRwcmV2aWV3Lm9uKCAnY2xpY2snLCAnaS53cG9uaW9uLWltYWdlLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICRwYXJlbnQgICA9IGpRdWVyeSggdGhpcyApLnBhcmVudCgpLFxuXHRcdFx0XHQkaW1hZ2VfaWQgPSAkcGFyZW50LmF0dHIoICdkYXRhLXdwb25pb24taW1hZ2VfaWQnICksXG5cdFx0XHRcdCR2YWx1ZSAgICA9ICRpbnB1dC52YWwoKS5zcGxpdCggJywnICk7XG5cdFx0XHRqUXVlcnkuZWFjaCggJGlucHV0LnZhbCgpLnNwbGl0KCAnLCcgKSwgZnVuY3Rpb24oICRrLCAkdiApIHtcblx0XHRcdFx0aWYoICR2ID09PSAkaW1hZ2VfaWQgKSB7XG5cdFx0XHRcdFx0JHZhbHVlLnNwbGljZSggJGssIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQkaW5wdXQudmFsKCAkdmFsdWUuam9pbiggJywnICkgKTtcblx0XHRcdCRwYXJlbnQuZmFkZU91dCggKCkgPT4gJHBhcmVudC5yZW1vdmUoKSApO1xuXHRcdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0fSApO1xuXG5cdFx0JGlucHV0LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cblx0XHRpZiggJHByZXZpZXcuaGFzQ2xhc3MoICdnYWxsZXJ5LXNvcnRhYmxlJyApICkge1xuXHRcdFx0JHByZXZpZXcuc29ydGFibGUoIHtcblx0XHRcdFx0aXRlbXM6ICc+IGRpdicsXG5cdFx0XHRcdGN1cnNvcjogJ21vdmUnLFxuXHRcdFx0XHRzY3JvbGxTZW5zaXRpdml0eTogNDAsXG5cdFx0XHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3NvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0aGVscGVyOiAnY2xvbmUnLFxuXHRcdFx0XHRvcGFjaXR5OiAwLjY1LFxuXHRcdFx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdFx0XHRsZXQgJGl0ZW0gPSB1aS5pdGVtO1xuXHRcdFx0XHRcdCRwcmV2aWV3LmZpbmQoICcuc29ydGFibGUtcGxhY2Vob2xkZXInICkuY3NzKCAnd2lkdGgnLCAkaXRlbS53aWR0aCgpICk7XG5cdFx0XHRcdFx0JHByZXZpZXcuZmluZCggJy5zb3J0YWJsZS1wbGFjZWhvbGRlcicgKS5jc3MoICdoZWlnaHQnLCAkaXRlbS5oZWlnaHQoKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ2FsbGVyeScsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsIi8qIGdsb2JhbCBnb29nbGU6dHJ1ZSAqL1xuaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRtYXAgICAgICAgICAgICAgID0gdGhpcy5vcHRpb24oICdtYXAnLCB7fSApO1xuXHRcdCRtYXAuZGV0YWlscyAgICAgICAgICA9ICcjZ21hcF9maWVsZHNfJyArIHRoaXMuaWQoKTtcblx0XHQkbWFwLmRldGFpbHNBdHRyaWJ1dGUgPSAnZGF0YS1tYXAtdmFsdWUnO1xuXHRcdGlmKCAneWVzJyA9PT0gdGhpcy5vcHRpb24oICdzaG93X21hcCcgKSApIHtcblx0XHRcdCRtYXAubWFwID0gJyNnbWFwXycgKyB0aGlzLmlkKCk7XG5cdFx0fVxuXG5cdFx0bGV0ICRfaW5zdGFuY2UgPSB0aGlzLmVsZW0uZmluZCggJ2Rpdi5zZWFyY2hib3ggPiBpbnB1dCcgKTtcblx0XHQkX2luc3RhbmNlLmdlb2NvbXBsZXRlKCB0aGlzLmhhbmRsZV9hcmdzKCAkbWFwICkgKTtcblx0XHQkX2luc3RhbmNlLmJpbmQoICdnZW9jb2RlOmRyYWdnZWQnLCAoIGV2ZW50LCBsYXRMbmcgKSA9PiB7XG5cdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcblx0XHRcdHRoaXMuZWxlbS5maW5kKCAnLm1hcF9maWVsZHMgOmlucHV0JyApLnZhbCggJycgKTtcblx0XHRcdGdlb2NvZGVyLmdlb2NvZGUoIHtcblx0XHRcdFx0J2xvY2F0aW9uJzoge1xuXHRcdFx0XHRcdGxhdDogcGFyc2VGbG9hdCggbGF0TG5nLmxhdCgpICksXG5cdFx0XHRcdFx0bG5nOiBwYXJzZUZsb2F0KCBsYXRMbmcubG5nKCkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0XHRcdFx0JF9pbnN0YW5jZS5nZW9jb21wbGV0ZSggJ2ZpbGxEZXRhaWxzJywgcmVzdWx0c1sgMCBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ29vZ2xlX21hcHMnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkdGhpcyAgICAgICA9IHRoaXMsXG5cdFx0XHQkYWRkICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IGJ1dHRvbltkYXRhLXdwb25pb24tZ3JvdXAtYWRkXScgKSxcblx0XHRcdCRncm91cF93cmFwID0gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCcgKSxcblx0XHRcdCRsaW1pdCAgICAgID0gJHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHQkZXJyb3JfbXNnICA9ICR0aGlzLm9wdGlvbiggJ2Vycm9yX21zZycgKTtcblxuXHRcdHRoaXMuaW5pdF9maWVsZCggdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC13cmFwJyApLCAnYWNjb3JkaW9uJyApO1xuXG5cdFx0JGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXAnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCBqUXVlcnkoIHRoaXMgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXHRcdHRoaXMuYmluZF9ldmVudHNfZm9yX3RpdGxlKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1ncm91cC1yZW1vdmUnICkudGlwcHkoIHtcblx0XHRcdGFwcGVuZFRvOiAoKSA9PiB0aGlzLmdldF9maWVsZF9wYXJlbnRfYnlfaWQoIHRoaXMuZWxlbWVudCApWyAwIF0sXG5cdFx0fSApO1xuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJy53cG9uaW9uLWdyb3VwLXJlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkucGFyZW50KCkuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLWNvbnRlbnQgPiAud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nIClcblx0XHRcdFx0XHRcdCAgLmNsaWNrKCk7XG5cdFx0fSApO1xuXG5cdFx0JGdyb3VwX3dyYXAuV1BPbmlvbkNsb25lcigge1xuXHRcdFx0YWRkX2J0bjogJGFkZCxcblx0XHRcdGxpbWl0OiBwYXJzZUludCggJGxpbWl0ICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1ncm91cC1hY3Rpb24gPiBidXR0b24nLFxuXHRcdFx0dGVtcGxhdGU6IHRoaXMub3B0aW9uKCAnZ3JvdXBfdGVtcGxhdGUnICksXG5cdFx0XHRvblJlbW92ZTogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0JGVsZW0ucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2xpZGVVcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0aWYoIGpRdWVyeSggJ2JvZHknICkuZmluZCggJ2xpbmsjZWRpdG9yLWJ1dHRvbnMtY3NzJyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHRqUXVlcnkoICdib2R5JyApXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwiZWRpdG9yLWJ1dHRvbnMtY3NzXCIgaHJlZj1cIicgKyAkd3Bvbmlvbi5vcHRpb24oICd3cGVkaXRvcl9idXR0b25zX2NzcycsIGZhbHNlICkgKyAnXCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJhbGxcIj4nICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51cGRhdGVfZ3JvdXBzX3RpdGxlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSxcblx0XHRcdHRlbXBsYXRlQWZ0ZXJSZW5kZXI6ICgpID0+IHtcblx0XHRcdFx0bGV0ICRkYXRhID0gJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKTtcblx0XHRcdFx0JGRhdGEuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0dGhpcy5iaW5kX2V2ZW50c19mb3JfdGl0bGUoKTtcblx0XHRcdFx0dGhpcy5pbml0X2ZpZWxkKCAkZ3JvdXBfd3JhcCwgJ2FjY29yZGlvbicgKTtcblx0XHRcdFx0Ly90aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZGF0YSApO1xuXHRcdFx0XHQkZGF0YS5maW5kKCAnLndwb25pb24tZ3JvdXAtcmVtb3ZlJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXBwZW5kVG86ICgpID0+IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50IClbIDAgXSxcblx0XHRcdFx0fSApO1xuXHRcdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJGRhdGEgKS5yZWxvYWQoKTtcblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGdyb3VwX3dyYXAuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXdyYXA6bGFzdC1jaGlsZCcgKSwgeyBuZXN0YWJsZTogdHJ1ZSB9ICk7XG5cdFx0XHRcdHRoaXMuaW5pdF9maWVsZCggJGRhdGEuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtd3BfZWRpdG9yJyApLCAncmVsb2FkX3dwX2VkaXRvcicgKTtcblx0XHRcdFx0JGRhdGEuc2xpZGVEb3duKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSxcblx0XHRcdHNvcnRhYmxlOiB7XG5cdFx0XHRcdGl0ZW1zOiAnLndwb25pb24tYWNjb3JkaW9uLXdyYXAnLFxuXHRcdFx0XHRoYW5kbGU6ICcud3Bvbmlvbi1hY2NvcmRpb24tdGl0bGUnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ3dwb25pb24tYWNjb3JkaW9uLXBsYWNlaG9sZGVyJyxcblx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRcdFx0dWkuaXRlbS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNlZWVlJyApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdG9wOiAoIGV2ZW50LCB1aSApID0+IHtcblx0XHRcdFx0XHR1aS5pdGVtLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZV9ncm91cHNfdGl0bGUoKTtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0b25MaW1pdFJlYWNoZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHQkYWRkLmJlZm9yZSggalF1ZXJ5KCAkZXJyb3JfbXNnICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0JGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0JyApLnNsaWRlRG93bigpO1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggJGFkZC5wYXJlbnQoKS5maW5kKCAnZGl2LmFsZXJ0LCBkaXYubm90aWNlJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQmluZHMgRHluYW1pYyBHcm91cCBUaXRsZSBFdmVudHMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0YmluZF9ldmVudHNfZm9yX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xuXHRcdCRlbGVtID0gKCBmYWxzZSA9PT0gJGVsZW0gKSA/IHRoaXMuZWxlbWVudC5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWdyb3VwLXdyYXAgPiAud3Bvbmlvbi1hY2NvcmRpb24td3JhcCcgKSA6ICRlbGVtO1xuXHRcdCRlbGVtLmVhY2goICggaSwgZSApID0+IHtcblx0XHRcdGxldCAkZGF0YSA9IGpRdWVyeSggZSApO1xuXG5cdFx0XHRsZXQgJG1hY2hlZCA9IHRoaXMub3B0aW9uKCAnbWF0Y2hlZF9oZWFkaW5nX2ZpZWxkcycgKTtcblx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1hY2hlZCApIHtcblx0XHRcdFx0aWYoICRtYWNoZWQuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRsZXQgJGVsZW0gPSAkZGF0YS5maW5kKCAnOmlucHV0W2RhdGEtZGVwZW5kLWlkPVwiJyArICRtYWNoZWRbICRrZXkgXSArICdcIl0nICk7XG5cdFx0XHRcdFx0aWYoICRlbGVtLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHQkZWxlbS5vbiggJ2NoYW5nZSwgYmx1cicsICgpID0+IHRoaXMudXBkYXRlX2dyb3Vwc190aXRsZSgpICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgR3JvdXAgVGl0bGVcblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHR1cGRhdGVfZ3JvdXBzX3RpdGxlKCAkZWxlbSA9IGZhbHNlICkge1xuXHRcdGxldCAkbGltaXQgPSAxO1xuXHRcdCRlbGVtICAgICAgPSAoIGZhbHNlID09PSAkZWxlbSApID8gdGhpcy5lbGVtZW50LmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24tZ3JvdXAtd3JhcCA+IC53cG9uaW9uLWFjY29yZGlvbi13cmFwJyApIDogJGVsZW07XG5cblx0XHQkZWxlbS5lYWNoKCAoIGksIGUgKSA9PiB7XG5cdFx0XHRsZXQgJGRhdGEgICAgPSBqUXVlcnkoIGUgKTtcblx0XHRcdGxldCAkaGVhZGluZyA9IHRoaXMub3B0aW9uKCAnaGVhZGluZycgKTtcblx0XHRcdGlmKCBmYWxzZSAhPT0gdGhpcy5vcHRpb24oICdoZWFkaW5nX2NvdW50ZXInICkgKSB7XG5cdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCAkaGVhZGluZywgJ1tjb3VudF0nLCAkbGltaXQgKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0ICRtYWNoZWQgPSB0aGlzLm9wdGlvbiggJ21hdGNoZWRfaGVhZGluZ19maWVsZHMnICk7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtYWNoZWQgKSB7XG5cdFx0XHRcdGlmKCAkbWFjaGVkLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0bGV0ICRlbGVtID0gJGRhdGEuZmluZCggJzppbnB1dFtkYXRhLWRlcGVuZC1pZD1cIicgKyAkbWFjaGVkWyAka2V5IF0gKyAnXCJdJyApO1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JGhlYWRpbmcgPSB3aW5kb3cud3Bvbmlvbi5fLnJlcGxhY2UoICRoZWFkaW5nLCAkbWFjaGVkWyAka2V5IF0sICRlbGVtLnZhbCgpICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkaGVhZGluZyA9PT0gJycgKSB7XG5cdFx0XHRcdCRoZWFkaW5nID0gd2luZG93Lndwb25pb24uXy5yZXBsYWNlKCB0aGlzLm9wdGlvbiggJ2RlZmF1bHRfaGVhZGluZycgKSwgJ1tjb3VudF0nLCAkbGltaXQgKTtcblx0XHRcdH1cblxuXHRcdFx0JGRhdGEuZmluZCggJz4gLndwb25pb24tYWNjb3JkaW9uLXRpdGxlIHNwYW4uaGVhZGluZycgKS5odG1sKCAkaGVhZGluZyApO1xuXHRcdFx0JGxpbWl0Kys7XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBKYXZhc2NyaXB0IEVycm9yIFBsYWNlbWVudC5cblx0ICogQHBhcmFtIGVyclxuXHQgKi9cblx0anNfZXJyb3IoIGVyciApIHtcblx0XHRsZXQgJGVsZW0gPSAkd3Bvbmlvbi5JRHRvRWxlbWVudCggZXJyLmVsZW1lbnQsIHRoaXMuZWxlbWVudCApO1xuXHRcdC8qIGlmKCAkZWxlbSApIHsgLy9lcnIuZXJyb3IuYXBwZW5kVG8oICRlbGVtLmZpbmQoICc+IC53cG9uaW9uLWZpZWxkc2V0JyApICk7IH0gKi9cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dyb3VwJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdoZWFkaW5nJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLypnbG9iYWwgc3dhbDp0cnVlKi9cblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJF90aGlzICAgICAgPSB0aGlzLFxuXHRcdFx0JGVsZW0gICAgICAgPSAkX3RoaXMuZWxlbWVudCxcblx0XHRcdCRhcmdzICAgICAgID0gJF90aGlzLm9wdGlvbnMoKSxcblx0XHRcdCRpbnB1dCAgICAgID0gJGVsZW0uZmluZCggJy53cG9uaW9uLWljb24tcGlja2VyLWlucHV0JyApLFxuXHRcdFx0JHJlbW92ZV9idG4gPSAkZWxlbS5maW5kKCAnYnV0dG9uW2RhdGEtd3Bvbmlvbi1pY29ucGlja2VyLXJlbW92ZV0nICksXG5cdFx0XHQkYWRkX2J0biAgICA9ICRlbGVtLmZpbmQoICdidXR0b25bZGF0YS13cG9uaW9uLWljb25waWNrZXItYWRkXScgKSxcblx0XHRcdCRwcmV2aWV3ICAgID0gJGVsZW0uZmluZCggJ3NwYW4ud3Bvbmlvbi1pY29uLXByZXZpZXcnICk7XG5cblx0XHRsZXQgJHdvcmsgPSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxlbXM6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0cG9wdXA6IG51bGwsXG5cdFx0XHQvKipcblx0XHRcdCAqIFN0b3JlcyBQT1BVUCBJbmZvcm1hdGlvbi5cblx0XHRcdCAqL1xuXHRcdFx0ZWxtOiBudWxsLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDcmVhdGVzIEEgTmV3IEluc3RhbmNlIGZvciBUb29sVGlwLlxuXHRcdFx0ICovXG5cdFx0XHRpbml0X3Rvb2x0aXA6ICgpID0+IHtcblx0XHRcdFx0aWYoICRhcmdzLnBvcHVwX3Rvb2x0aXAgIT09ICdmYWxzZScgKSB7XG5cdFx0XHRcdFx0bGV0ICR0cCAgICAgID0gKCB0eXBlb2YgJGFyZ3MucG9wdXBfdG9vbHRpcCA9PT0gJ29iamVjdCcgKSA/ICRhcmdzLnBvcHVwX3Rvb2x0aXAgOiB7fTtcblx0XHRcdFx0XHQkdHAuYXBwZW5kVG8gPSAkd29yay5lbG1bIDAgXTtcblx0XHRcdFx0XHRpZiggJHdvcmsuZWxlbXMubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0XHRcdCR3b3JrLmVsZW1zLnRpcHB5KCAkdHAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEluaXRzIEZvciBlYWNoIGFuZCBldmVyeSBQT1BVUC5cblx0XHRcdCAqIEBwYXJhbSAkZWxtXG5cdFx0XHQgKiBAcGFyYW0gJGluc3RhbmNlXG5cdFx0XHQgKi9cblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCAkZWxtLCAkaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR3b3JrLmVsbSAgID0gJGVsbTtcblx0XHRcdFx0JHdvcmsucG9wdXAgPSAkaW5zdGFuY2U7XG5cdFx0XHRcdCR3b3JrLmVsZW1zID0gJHdvcmsuZWxtLmZpbmQoICdzcGFuLndwb25pb24taWNvbi1wcmV2aWV3JyApO1xuXHRcdFx0XHRsZXQgJGhlaWdodCA9ICR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnICk7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnLndwb25pb24taWNvbi1waWNrZXItY29udGFpbmVyLXNjcm9sbCcgKS5jc3MoICdoZWlnaHQnLCAkaGVpZ2h0ICk7XG5cdFx0XHRcdCR3b3JrLnNlbGVjdCgpO1xuXHRcdFx0XHQkd29yay5pbnB1dCgpO1xuXHRcdFx0XHQkd29yay5lbGVtcy5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0ICRpY29uID0galF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtaWNvbicgKTtcblx0XHRcdFx0XHQkaW5wdXQudmFsKCAkaWNvbiApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdFx0c3dhbC5jbG9zZU1vZGFsKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0JHdvcmsuaW5pdF90b29sdGlwKCk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBXb3JrcyB3aXRoIFBPUFVQIElucHV0IFNlYXJjaC5cblx0XHRcdCAqL1xuXHRcdFx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd29yay5lbG0uZmluZCggJ2Rpdi53cG9uaW9uLWljb24tcGlja2VyLW1vZGVsLWhlYWRlciBpbnB1dFt0eXBlPXRleHRdJyApLm9uKCAna2V5dXAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRsZXQgJHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXHRcdFx0XHRcdCR3b3JrLmVsZW1zLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmF0dHIoICdkYXRhLWljb24nICkuc2VhcmNoKCBuZXcgUmVnRXhwKCAkdmFsLCAnaScgKSApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogSGFuZGxlcyBTZWxlY3Rib3ggaW4gcG9wdXAuXG5cdFx0XHQgKi9cblx0XHRcdHNlbGVjdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3b3JrLmVsbS5maW5kKCAnZGl2Lndwb25pb24taWNvbi1waWNrZXItbW9kZWwtaGVhZGVyIHNlbGVjdCcgKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHN3YWwuZW5hYmxlTG9hZGluZygpO1xuXHRcdFx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cdFx0XHRcdFx0JHdwb25pb24uYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0J3dwb25pb24taWNvbi1saWInOiAkdmFsLFxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZWQ6ICRhcmdzLmVuYWJsZWQsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6ICRhcmdzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCAkcmVzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiggJHJlcy5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdHN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJHdvcmsuZWxtICkuZmluZCggJyNzd2FsMi1jb250ZW50JyApLmh0bWwoICRyZXMuZGF0YSApLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcjc3dhbDItY29udGVudCAud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLmluaXQoICR3b3JrLmVsbSwgJHdvcmsucG9wdXAgKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICR3b3JrLmVsbSApLmZpbmQoICcud3Bvbmlvbi1pY29uLXBpY2tlci1jb250YWluZXItc2Nyb2xsJyApLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdCR3b3JrLnBvcHVwLnNob3dWYWxpZGF0aW9uRXJyb3IoICRyZXMuZGF0YSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0KCkgPT4gJHdvcmsucG9wdXAuc2hvd1ZhbGlkYXRpb25FcnJvciggJHdwb25pb24udHh0KCAndW5rbm93bl9hamF4X2Vycm9yJyApICksXG5cdFx0XHRcdFx0XHQoKSA9PiAkd29yay5wb3B1cC5kaXNhYmxlTG9hZGluZygpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiggJGlucHV0LnZhbCgpID09PSAnJyApIHtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIEJsdXIgRXZlbiAvIGNoYW5nZSBldmVuIGluIGlucHV0ZmllbGQuXG5cdFx0ICovXG5cdFx0JGlucHV0Lm9uKCAna2V5dXAgYmx1ciBjaGFuZ2Uga2V5cHJlc3MnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmKCAkdmFsICE9PSAnJyApIHtcblx0XHRcdFx0JHByZXZpZXcuaHRtbCggJzxpIGNsYXNzPVwiJyArICR2YWwgKyAnXCI+PC9pPicgKS5zaG93KCk7XG5cdFx0XHRcdCRyZW1vdmVfYnRuLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdFx0JHJlbW92ZV9idG4uaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXMgQWRkIEJ1dHRvbiBDbGljayBFdmVudC5cblx0XHQgKi9cblx0XHQkYWRkX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJHBvcHVwID0gc3dhbCgge1xuXHRcdFx0XHR0aXRsZTogJGVsZW0uZmluZCggJy53cG9uaW9uLWZpZWxkLXRpdGxlIGg0JyApLmh0bWwoKSxcblx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0XHRcdFx0YWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuXHRcdFx0XHRzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0d2lkdGg6ICc3MDBweCcsXG5cdFx0XHRcdGN1c3RvbUNsYXNzOiAnd3Bvbmlvbi1pY29uLXBpY2tlci1tb2RlbCcsXG5cdFx0XHRcdG9uQmVmb3JlT3BlbjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0XHRzd2FsLmVuYWJsZUxvYWRpbmcoKTtcblx0XHRcdFx0XHQkX3RoaXMuYWpheCggJ2ljb25fcGlja2VyJywge1xuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiAkYXJncy5lbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogJGFyZ3MuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b25TdWNjZXNzOiAoICRyZXMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmKCAkcmVzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cdFx0XHRcdFx0XHRcdFx0bGV0ICRwb3B1cF9lbGVtID0galF1ZXJ5KCAkZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cF9lbGVtLmZpbmQoICcjc3dhbDItY29udGVudCcgKS5odG1sKCAkcmVzLmRhdGEgKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0JHBvcHVwX2VsZW0uZmluZCggJyNzd2FsMi1jb250ZW50IC53cG9uaW9uLWljb24tcGlja2VyLWNvbnRhaW5lci1zY3JvbGwnICk7XG5cdFx0XHRcdFx0XHRcdFx0JHdvcmsuaW5pdCggJHBvcHVwX2VsZW0sICRwb3B1cCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdCRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkcmVzLmRhdGEgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uRXJyb3I6ICgpID0+ICRwb3B1cC5zaG93VmFsaWRhdGlvbkVycm9yKCAkd3Bvbmlvbi50eHQoICd1bmtub3duX2FqYXhfZXJyb3InICkgKSxcblx0XHRcdFx0XHRcdG9uQWx3YXlzOiAoKSA9PiAkcG9wdXAuZGlzYWJsZUxvYWRpbmcoKSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIFJlbW92ZSBCdXR0b24gRXZlbnQuXG5cdFx0ICovXG5cdFx0JHJlbW92ZV9idG4ub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LnZhbCggJycgKTtcblx0XHRcdCRwcmV2aWV3LmhpZGUoKTtcblx0XHRcdCRyZW1vdmVfYnRuLmhpZGUoKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2ljb25fcGlja2VyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV9zZWxlY3QnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkaW5wdXQgICAgICAgPSAkZWxlbS5maW5kKCAnaW5wdXQjaW1hZ2VfaWQnICksXG5cdFx0XHQkcHJldmlld19hZGQgPSAkZWxlbS5maW5kKCAnLndwb25pb24taW1hZ2UtcHJldmlldyAud3Bvbmlvbi1wcmV2aWV3LWFkZCcgKSxcblx0XHRcdCRwcmV2aWV3ICAgICA9ICRlbGVtLmZpbmQoICcud3Bvbmlvbi1pbWFnZS1wcmV2aWV3IC53cG9uaW9uLXByZXZpZXcnICk7XG5cblx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IG51bGw7XG5cdFx0JGlucHV0Lm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkudmFsKCkgPT09ICcnICkge1xuXHRcdFx0XHQkcHJldmlldy5oaWRlKCk7XG5cdFx0XHRcdCRwcmV2aWV3X2FkZC5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcHJldmlld19hZGQuaGlkZSgpO1xuXHRcdFx0XHQkcHJldmlldy5zaG93KCk7XG5cdFx0XHR9XG5cblx0XHRcdCR0aGlzLmhvb2suZG9BY3Rpb24oICd3cG9uaW9uX2ltYWdlX3VwbG9hZF91cGRhdGVkJywgJGlucHV0LCAkcHJldmlldywgJHByZXZpZXdfYWRkICk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXdfYWRkLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJHRoaXMubWVkaWFfaW5zdGFuY2UgKSB7XG5cdFx0XHRcdCR0aGlzLm1lZGlhX2luc3RhbmNlLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdGxpYnJhcnk6IHsgdHlwZTogJ2ltYWdlJyB9LFxuXHRcdFx0XHR0aXRsZTogJHRoaXMub3B0aW9uKCAnZnJhbWVfdGl0bGUnLCAnU2VsZWN0IEltYWdlJyApLFxuXHRcdFx0fSApO1xuXHRcdFx0JHRoaXMubWVkaWFfaW5zdGFuY2Uub24oICdzZWxlY3QnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGF0dGFjaG1lbnQgPSAkdGhpcy5tZWRpYV9pbnN0YW5jZS5zdGF0ZSgpLmdldCggJ3NlbGVjdGlvbicgKS5maXJzdCgpLmF0dHJpYnV0ZXM7XG5cdFx0XHRcdGxldCB0aHVtYm5haWwgID0gKCB0eXBlb2YgYXR0YWNobWVudC5zaXplcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0dGFjaG1lbnQuc2l6ZXMudGh1bWJuYWlsICE9PSAndW5kZWZpbmVkJyApID8gYXR0YWNobWVudC5zaXplcy50aHVtYm5haWwudXJsIDogYXR0YWNobWVudC51cmw7XG5cdFx0XHRcdCRwcmV2aWV3LmZpbmQoICdpbWcnICkuYXR0ciggJ3NyYycsIHRodW1ibmFpbCApLmF0dHIoICdkYXRhLWZ1bGxzaXplJywgYXR0YWNobWVudC51cmwgKTtcblx0XHRcdFx0JGlucHV0LnZhbCggYXR0YWNobWVudC5pZCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHR9ICk7XG5cdFx0XHQkdGhpcy5tZWRpYV9pbnN0YW5jZS5vcGVuKCk7XG5cdFx0fSApO1xuXG5cdFx0JHByZXZpZXcuZmluZCggJy53cG9uaW9uLWltYWdlLXJlbW92ZScgKS5vbiggJ2NsaWNrJywgKCkgPT4gJGlucHV0LnZhbCggJycgKS50cmlnZ2VyKCAnY2hhbmdlJyApICk7XG5cdFx0JHByZXZpZXcub24oICdjbGljaycsICdpbWcnLCAoIGV2ZW50ICkgPT4gdGhpcy5pbml0X2ZpZWxkKCBldmVudC50YXJnZXQsICdpbWFnZV9wb3B1cCcgKSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2VfdXBsb2FkJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuZWxlbWVudC5sZW5ndGggPiAwICkge1xuXHRcdFx0bGV0ICRzZXR0aW5ncyA9IHRoaXMub3B0aW9uKCAnaW5wdXRtYXNrJyApO1xuXHRcdFx0aWYoICRzZXR0aW5ncyApIHtcblx0XHRcdFx0JHNldHRpbmdzID0gdGhpcy5oYW5kbGVfYXJncyggJHNldHRpbmdzLCAnSW5wdXRNYXNrJyApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5wdXRtYXNrKCAkc2V0dGluZ3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbnB1dG1hc2snLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2phbWJvX2NvbnRlbnQnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgID0gJHRoaXMuZWxlbWVudCxcblx0XHRcdCR0aGlzX2VsZW0gPSAkZWxlbS5maW5kKCAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLXRhYi13cmFwICcgKTtcblxuXHRcdCR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkgYScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRsZXQgJF90aGlzID0galF1ZXJ5KCB0aGlzICk7XG5cdFx0XHQkX3RoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy53cG9uaW9uLXRhYi1jdXJyZW50JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdCRfdGhpcy5wYXJlbnQoKS5hZGRDbGFzcyggJ3dwb25pb24tdGFiLWN1cnJlbnQnICk7XG5cdFx0XHQkZWxlbS5maW5kKCAnLndwb25pb24tdGFiLXBhZ2UnICkuaGlkZSgpO1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLXRhYi1wYWdlJyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKTtcblx0XHRcdGxldCAkdGFiID0gJF90aGlzLmF0dHIoICdkYXRhLXRhYi1uYW1lJyApO1xuXHRcdFx0JGVsZW0uZmluZCggJ2RpdiN3cG9uaW9uLXRhYi0nICsgJHRhYiApLmFkZENsYXNzKCAnd3Bvbmlvbi10YWItY3VycmVudCcgKS5zaG93KCk7XG5cdFx0fSApO1xuXG5cdFx0aWYoICR0aGlzX2VsZW0uZmluZCggJz4gdWwud3Bvbmlvbi10YWItbWVudXMgbGkuY3VycmVudCcgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0JHRoaXNfZWxlbS5maW5kKCAnPiB1bC53cG9uaW9uLXRhYi1tZW51cyBsaS5jdXJyZW50IGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGhpc19lbGVtLmZpbmQoICc+IHVsLndwb25pb24tdGFiLW1lbnVzIGxpOmZpcnN0LWNoaWxkIGEnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2pxdWVyeV90YWInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmdsb2JhbF92YWxpZGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24ta2V5dmFsdWVfd3JhcCcgKS5XUE9uaW9uQ2xvbmVyKCB7XG5cdFx0XHRhZGRfYnRuOiB0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0ID4gLndwb25pb24ta2V5dmFsdWUtYWN0aW9uLWNvbnRhaW5lciAgPiBidXR0b25bZGF0YS13cG9uaW9uLWtleXZhbHVlLWFkZF0nICksXG5cdFx0XHRsaW1pdDogKCAtMSA9PT0gdGhpcy5vcHRpb24oICdsaW1pdCcgKSApID8gbnVsbCA6IHRoaXMub3B0aW9uKCAnbGltaXQnICksXG5cdFx0XHRjbG9uZV9lbGVtOiAnPiAud3Bvbmlvbi1maWVsZHNldCA+IC53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyxcblx0XHRcdHJlbW92ZV9idG46ICcud3Bvbmlvbi1rZXl2YWx1ZS1maWVsZCA+IGJ1dHRvbltkYXRhLXdwb25pb24ta2V5dmFsdWUtcmVtb3ZlXScsXG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy5vcHRpb24oICdodG1sX3RlbXBsYXRlJyApLFxuXHRcdFx0dGVtcGxhdGVBZnRlclJlbmRlcjogKCAkZWxlbSApID0+IHtcblx0XHRcdFx0dGhpcy5ob29rLmRvQWN0aW9uKCAnd3Bvbmlvbl9rZXlfdmFsdWVfdXBkYXRlZCcsICRlbGVtICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0XHR0aGlzLmpzX3ZhbGlkYXRlX2VsZW0oIHRoaXMub3B0aW9uKCAnanNfdmFsaWRhdGUnLCBmYWxzZSApLCAkZWxlbS5maW5kKCAnPiBkaXY6bGFzdC1jaGlsZCcgKSApO1xuXHRcdFx0fSxcblx0XHRcdG9uUmVtb3ZlOiAoICRlbGVtICkgPT4ge1xuXHRcdFx0XHQkZWxlbS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdHRoaXMuaG9vay5kb0FjdGlvbiggJ3dwb25pb25fa2V5X3ZhbHVlX3VwZGF0ZWQnLCAkZWxlbSApO1xuXHRcdFx0fSxcblx0XHRcdG9uTGltaXRSZWFjaGVkOiAoKSA9PiB7XG5cdFx0XHRcdGlmKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCcgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1rZXl2YWx1ZV93cmFwJyApLmFmdGVyKCBqUXVlcnkoIHRoaXMub3B0aW9uKCAnZXJyb3JfbXNnJyApICkuaGlkZSgpICk7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdkaXYuYWxlcnQnICkuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0d2luZG93Lndwb25pb25fbm90aWNlKCB0aGlzLmVsZW1lbnQuZmluZCggJ2Rpdi5hbGVydCwgZGl2Lm5vdGljZScgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBFcnJvciBQbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSBlcnJcblx0ICovXG5cdGpzX2Vycm9yKCBlcnIgKSB7XG5cdFx0ZXJyLmVycm9yLmFwcGVuZFRvKCBlcnIuZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgSmF2YXNjcmlwdCBWYWxpZGF0aW9uIElucHV0c1xuXHQgKiBAcGFyYW0gJGFyZ3Ncblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRqc192YWxpZGF0ZV9lbGVtKCAkYXJncywgJGVsZW0gKSB7XG5cdFx0aWYoIHRydWUgIT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRhcmdzLmtleSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDAgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3Mua2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGlmKCB0cnVlICE9PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJncy52YWx1ZSApICkge1xuXHRcdFx0JGVsZW0uZmluZCggJy53cG9uaW9uLWtleXZhbHVlLWZpZWxkJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnPiBkaXYnICkuZXEoIDEgKS5maW5kKCAnOmlucHV0JyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MudmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiggdHJ1ZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3Mua2V5ICkgJiYgdHJ1ZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZ3MudmFsdWUgKSApIHtcblx0XHRcdCRlbGVtLmZpbmQoICc6aW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJ1bGVzKCAnYWRkJywgJGFyZ3MgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdrZXl2YWx1ZV9wYWlyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdub3RpY2UnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFOdGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqTXRZekF4TVNBMk5pNHhORFUyTmpFc0lESXdNVEl2TURJdk1EWXRNVFE2TlRZNk1qY2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVEJHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJVVTVOMEUzT0VFMU9VTkZNVEZGTlRnMVJVVkJNRVU1TjBJMlFrWkJNeklpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UlVVNU4wRTNPRGsxT1VORk1URkZOVGcxUlVWQk1FVTVOMEkyUWtaQk16SWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROQ0JYYVc1a2IzZHpJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRNMk1EVTJRekpHUWtWRVJUQXhNVGsxTlVWQ1JUQXpSVUU0UWpSRU5VSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZHTkVWRFFqZzRSREF4UlRBeE1UaEJNa1JETkVVMk56aEZRa0V6UkRnaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFHQkFRRUJRUUdCUVVHQ1FZRkJna0xDQVlHQ0FzTUNnb0xDZ29NRUF3TURBd01EQkFNRGc4UUR3NE1FeE1VRkJNVEhCc2JHeHdmSHg4Zkh4OGZIeDhmQVFjSEJ3ME1EUmdRRUJnYUZSRVZHaDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHgvL3dBQVJDQUVUQVJNREFSRUFBaEVCQXhFQi84UUFpUUFCQUFNQUF3RUJBQUFBQUFBQUFBQUFBQVFGQmdFREJ3SUlBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFCQXdNREFRTUdCdzhDQXdrQUFBQUJBQUlERVFRRklSSUdNVUVUQjFGaGNZRWlNcEdoc2NGQ2doVGhVbUp5a3FLeXdpTXpjN04wRlRZa045SFRGK0pEVTVPalZEVlZGaEVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9WS0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJT3VlZUtDTXlTdURHRHFTZzZJOHZqWG1qWjIvV3EzNVFFSGV5NHQ1UGNsWS84QUZjRDhpRHNRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGTnllWGJiUlIvZnVKL0pIM1VHYjNJT2R5RHNqdkxtUDkzSzl2bURpRUVsbWN5YkJRVGtqemhwK01oQklaeWE5YlFPWkcveW1oQitJb0pNZktXLzk1Yit0cnYrSVFTWStTWTkzdkI3UE9SVWZFU2dreDVqR1NlN2NOSDQxVy9wVVFTMlBZOW9leHdjMDlIQTFCUWNvQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lNM3lxYjl2QkY5NjB1L0tOUDFVRmJpb0czTi9EQzhibU9QdER5Z0NwUWFTVGoyTWVQWllZejVXdVB6MVFSWk9MUUVmczVuQStjQW9JeitMM1k5eVpoOU5SOHlDTTdqMlZCMGpEdk9ITitjaEJHa3htU2pOSFc4bnFhVDhpRG9mSE5HYVBZNXA4aEJDRDQzSU5keDFqbTR4cEo5OXpuTjlIVDVrRm1nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWd4L0o1OStVTGYvQ1kxdjYzNnlEbmk3Qy9KaDNaRzF4UHJGUG5RYTlBUUVCQVFRTTQrT1BHVHVjMEVsdTBFanRPaURFYmtHN3hNWmp4dHV3OWRnUDVXdnpvSmFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0RBWnFmdk1yY3VIVGVRUHE2Zk1ndU9HeGt2dUpld0FOcjY2b05PZ0lDQWc0YzVyV2x6aUd0SFVuUUlLWGxrN1JqR3RCcjNqeFFqdEFDREhzSmM0TkhVbWc5YUQwcGpReGpXam8wQUQxSU9VQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRZk1rc2NiZHozQm84cFFSSk14WnMwYVM4L2dqVDQ2SUlVdWJuZHBHME04NTFLQ1ZpN21XV09hU1oxUTAxOUFwcWd3RTBwZEs5MzN6aWZoS0RZOE5ZUmkzdVAwNVNSNmdBZ25aUE4yT1BaKzFkdmxQdXhOMWQ2L0lncU1UeXQ4OThZcnNOWkZLYVJFYWJUNUNmT2cwNkNweWZKTWZaQXNEdStuN0kyZEFmT1VHU3lHY3lGKzR0a2VXeEU2Uk4wYjE3ZktndE9Vdjd1d3hzSDBoSFZ6ZlExb0NDb3c3VEpsYlJ0Sy90V0VqekJ3SlFlaklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJS3JPdGR0aGQ5RUVnK2swUVZDQWd0R2tRNEM2bEpvVEhKcjU2RUJCNS92UWFwK1R1TVp4aXlGdlJrMCsvMjZEUWJpZTMwb012SlBKSTh2a2NYdmNhdWM0a2tuMGxCODcwRm5OeVhMUzJyYll6RU1BbzV3MGM3MHU2b0t6ZWc3N0VHUzlnakd1NlJvcDYwRjF6YVVmM1NKamVqSVJVZVFsenZtUVIrSXNNbWJpTktoalh1UDVKSHpvTitnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2k1U0x2TE4vbGI3UTlTRFBVUUtJSm1mY0lPS3ZGYUY3WXdQUzU0SitKQmdBNGtnZVZCcnVUV0Y3TGpjWXkzZ2RJeUdMMnkzV2hMVzlucVFaWjl2ZE05K0Y3ZlMwaEIxRnhIWFJCeHZRTjZDNDRtd1M1NjJEaFZyZHp2V0dFajQwSHh5ZWN2emwxVTEydTJqMUFJTFhnVWU2N3VwdnZJMnRIMWovQU5sQnRVQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJ3QkJCNkhRb012UEgzY3I0ejlGeEZmUWcrV2lwSG5RT2R5OXppYlczKytlUHpHL2RRWVVTRUVFZFFhaEJjUWN4enNOQjM0ZUFLQVBhMGo0Z0VFOXZpQmtEcExiUU9iMmdCdytWeFFkZzVoaHBOTGpFeDFQdk9BWWZsYWc1YmtPQ3o2eTJqb25IeWJ3UHpYSURjUHcrN0pNR1E3ajhGN2czOU9pQ3o0OWdNZlpYN3JpM3ZtWFhzRnJHdExTUVQxT2hLRERYMDVsdlo1Q2FsNzNHdnJRYlR3K2hBeDF6UDJ5UzdQVXhvUDY2RFZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNDaXpFT3k2MzAwa0ZmWDJvSTF0SHZ1STJEdGNFRlg0aTNCKzAybHYyTlk2VDhvMC9WUVkrcUJWQXFnVlFLb0ZVSEllNGRIRWV0Qnh1UWVtOEtoRWZINEhEcks1N3orVnQvVlFYcUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ3I4ekZ1dDJ5QWFzZHFmTWZ1b0s3RzdmdHNlNDAxK09pRG5rdkZQN3pOSE95NDdtV05teWhidWFSVW55anlvTXpjZUgrYWovZFBpbUhtZHQvU1FRTGppUElZUGV0SFAvaGtQL1JxZ2dUNHpKMjRyUGF5eER5dlk1dnloQkdKSU9xRGpjZ2JrRGNnYmtIc09EZzdqRDJjVktGc0xLanprVlB4bEJOUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFSFZjeENXM2taNVI5MUJtalVHbmFFSFl5NHVHZTVJNXZvSkNEdFprcjFuU1FuMDYvS2c3NDh6ZEErMDBQK0w1RUZoYlhWek1SdmdMR242UlAzRUhaUFoybHdLVHdzbEg0YlE3NVVGZk54VGowMWQxbEdDZTF0Vy9JUWdyNXZEN0F2SkxUTkdld05jQ0I4SUtDQkw0YVJFa3hYN21qc0RvNi9HSEJCRGI0YjVFWERBNjVpTUZSdmNOMjdiMjBiVDUwSG9ER2hyUTBkR2lnOVNEbEFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVGRmUyTTR1bjdHRnpYbXJTQnBycWc1aHc5eS9WNUVZOC9WQk5pdzF1MzMzRjUrQUlKa2NFTVg3dGdiNkFnKzBCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkZ5bVJoeHVPdWIrZHJuUTJzYnBaR3NBTGkxZ3FhQWtDdnJRUU9MOHN4UEpMT1M1eDVlM3VYN0pZWmcxc2pTUlVFaHBjS083RFZCYnlQREkzUFBSb0xqVHpDcUNwNHZ5akg4a3g4bDlZeHl4d3h5bUJ6WncxcnR6V3RkVWJYUEZLUEhhZ3VFQkFRUnNsZnc0L0hYTi9NSE9odFluelNOWUFYRnJHbHgyZ2tDdW5sUVlqL3JaeFgvMnQ5LzVjUC9OUVNMSHhpNGhjekNLVDdUYUEwQWtuamJ0MS9odWtJK0JCdG81STVZMnlSdUQ0M2dPWTlwQmE1cEZRUVIxQlFmU0FnSUNBZ0lLYmpuS3Nmbi90bjJPT2FQN0ZMM012ZkJyYXUxMWJ0Yy9UVHRRWEtBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FncGViZjRqbVA2U1g5QW9QSmVOdnlIRkxYRDhxaDNUWXZJOTVCa29oMmJabnNINXJBNXZuQkhhZzlyTnpCZFkwM051OFN3VFFsOFVqZFE1cm0xQkNERWVDZitLM1g5ZEovSmlRVE0zNG0yZHBrbjR2RVdFK2F2NGlSTEhiMTJnZzBjQVd0a2NTM3RvMmlEbkJlSmRuZTVKbUt5bGhQaHNqS2FSUlhGZHJpZWpkem14dUJQWlZ2bVFiTkJUOHgveFBNLzBVLzhzb0tyd3Avd1hIL2pUL3ozb0pQaUphWXlmaU9SZmZNWWU1aGMrMmtkVGMyYjZHMDloTHFEem9LWGlHY3VjUjRXeDVTZUUzSDJRU2QxRTUyd3VqNzR0YU4xSFVBcnBvZ044Vko3a1FPeGVCdWNqR1dSbThsaExpeUdTUm9jWTl3amNIRnRhRW5hZ3ZPVWMzeG5IaERGT3g5eGtMZ0F3Mk1IdFBJSnBVK1FWMEhsN0VGSEQ0cVRXOHJQNzl4Kzh4TnJJUTF0eThQZTJ2bkRvNGo4RlVGL3l2bFJ3ZUVqekZ2YWpJV3Izc0R5eVhZQkhJUFprQjJ2RGhXZzlhQzd0NTRyaTNpdUlYYm9wbU5ramNPMXJoVUg0Q2dvOFh5dzVIbEdSd3R2YVZ0OGEwZDlmZDVvWkRRYkJIdDh1NzZYWWc0NGp5My9BUFJmM0QvU2ZaZnNNM2Nmdk84MzlmYTkxbE9pQ3Z6dmlSYTJXU2t4ZUtzSjh6a1lhaWFLM0IydElwVWJtdGtKSTdhTjA2SU9jRjRqMjE3a284WGxjZlBoc2pOcERGY0E3WGs5QUhPYkdRVDJWYWdzVHlzeDh5SEc1N1h1eExCMzlyZDk1WHZLRFZ1emFLZTY3NlI2SVBybVhLb3VOWWorNFBoKzB2ZEkyS0tEZjNlNHVxVDdXMS9SclNlaUN6eHVRaHY4WmJaQ1AyWXJtRmt3cWZkRDJoMUNmTWdxdUljcWR5T0M3dW1XbjJlMGduTU52S1hsNWxEZFM3YnNadDBJN1Q4U0MvUUVCQVFFQkFRRUJBUUVGTHpiL0VjeC9TUy9vRkJSOER4ZG5sZkRLeng5NHpmYjNEYmhyeDJqL1VTRU9IbmFkUWdxdUY1Uzh3Ti9lOEx5NzZtTnIzNHlZKzY1cEJkdEZleHc5cHZucUVEd3Bua3QrQVplZUxTU0tlNGV3L2hOdG95RUUvd2NzYmFMaTc3eHJRYm02bmYzMG4waUdhTmJYeURyNjBIejR5MmR1N2prRjhRRzNkdGNNRUVvMGNBOEhjMEhyMkErcEJ0c2ROSk5qN1dhUTFra2hqZTgrZHpRU2dyK1kvNG5tZjZLZitXVUhuWENlRlovSjhidGIyMDVQZDQ2M2tNZ1paeENUWXpiSTVwcHRtakdwRmZkUVhyUENpVzZsWWM3eUM4eXNNYmc1a0xpNW8wclVFdmZOMTgxRUZ2ejIxdDdYZ0dSdHJlTVJRUXdNWkZHMFVEV3RlMEFCQjJlRzl2RkJ3ckdDTnROOGJwSG50TG52Y1NTZ3cwdDF5cC9pVm1ickNXRUdRdmJZQ0pyYmtnQ0tLaldnc3JKRHFhZkg1MEZwazdqeGN5V1B1TEM2NC9ZdXQ3bGpvNUFIc3FBNGRSVzVPbzZqem9MdmpYRzhqSndFNERPUjkxTzVrc0lhWE5lV3RMaTZNN21Gdzlra1U5Q0N2NFR5YzJQQjc0WCtsMXg0eVFTeG5xZHRlNmIrVjdBOUNDYjRXWXVTMjQ0Y2pjNjNtWGxkZFRQUFV0SklaOE9ydldncC9ES1o4Tmh5aWFQOTVIY1NQWjZXdGVRZ28rQlhYaUJiNHFXZkFZbTF2SUxtWnpwcnVkemU5YzhVQkRxenhtZzdOTzFCTzVMWWVLdkliYUNHOHdsckM2MmxFMEU4RXNiWld1QXBvNTF3L1EvTUVGOTRodzNOcGI0Yms0WlM3eEU4WnUydDdZcGFDUnVuNFduclFjY21naDVMeTdIWVpwMzJWdFpUWGs1cFZwTTdlN2lyWHlhRWVsQlI0dmtzMWo0V1g5bzh1R1JzNVpNWXhsZmFEcFhhVVA0TFhPcCtLZzlBNGxoaGh1TzJPUG9CTEZHRFBUdGxmN1Qvd0E0b0xkQVFFQkFRRUJBUUVCQVFWSEw0SnArTDVXR0NOMHMwbHJLMk9KZ0xuT2NXbWdEUnFTZ2crRzlwZDJuQzhkYjNjTWx2Y003N2ZESzBzZTJzOGhGV3VBSXFEVkJEOFNlSlNackdOdnJGcEdYeC83UzNMUGVlMEdwWUthMTdXK2Ywb0kzaEppNzIwNHZkMjJSdEpiWjhsM0llNW5qZEc1ekhReE5ydGNBYUdoQ0Nxc2JQbVhCTHU2dDdESFB6ZUNuZVpJV1JFbVZwTkIwYUh1QnBRTzlrZzlmS2dYdGh6SG5kNWFSWkhIT3d1QnQ1TzlsamxKNzE1RlduUndZNHVwVUQyUUJXdXVpRDA1akdzYUdORkd0QURRT2dBUVZmSzRacCtNWmFHR04wczBscE0yT05nTG5PY1l5QUdnYWtsQlcrR2xuZDJmRGJHM3U0SkxlNFladDhNclhNZUt6UElxMXdCMUJRYWRCUWMrdHJtNjRoazdlMmlmUFBKRzBNaWphWHZjZDdUbzF0U1VIMXdhMnVMYmlXTWd1WW53enh3MGtpa2FXUGFkeDBMVFFoQm5lVWNkNUhqZVRqbFhHb2hjeXlzRWQvWkhxOEFBYUNvcUhCbzZhZ2l1cUNQZGNyOFFzM2J1eDJONDdQaXBwaHNrdnAzUFlHTk9oY3h6MlJiVDZLbnlhb054Z2NkY1k3RTIxbmMzVWw3Y1JOL2JYVXpuUGM5N2lTZFhFbWdyUWVaQjV6emJpV2JsNVZKYjR5R1E0elBtQjEvTEd4em1SdWlmN1JlNENqZnY5ZXFEMUszZ2l0NEk0SVdoa1VMV3h4dEhRTmFLQWZBZ3cvaGhqTCswYm5HMzFwTGJ0bnV5Nk1UUnVZSHNPN1Z1NENvUVZkclljdzRKZjNjZUx4N3N6Z0xtVHZZNFlxbVJoTkI5RVBlSFVvQ2RwQnBWQktOenovbHQ1YndpMHVPTlltSisrNW03eDhjNzZhYlFhUlBOZGFlelR5OWlEZFpiR3daTEYzV09tL2RYTVRvaWVwRzRVRHZTRHFneC9oZmhzdmJOeUY5bUlwSXIxNWlzNGhLMHRQYzJzWVkwdEJwVnAwMTdhSUt0L0Q4ako0bFNSbUNUK3d2dUdaU1NRc2QzSm1Zd25idXB0M2Q0ODFGZWlEMDlBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQkF6K1dpeEdGdk1sSlNsdEU1N1FmcFA2TWI5WnhBUWVTOFFreUhIczdoY3hmUExyYmtyWkdYRGoyT2ZMN0xqMmRkanZRU2c5cGM1cldsemlBMENwSjBBQVFkRmxmMkY5RDMxbGN4WFVJSmFaWVh0a2J1SFVibWtpdXFCZTM5aFl3OTllM01WckNTR2lXWjdZMjdqMEc1eEFyb2c3VEpHSSs4TGdJNmJ0OVJ0cDFyWHlJSUVYSStQVFRpM2h5bHBKT1NRSW1UeE9lU09vMmgxVUV1OGpobHM1NHBuYklYeHZiSytvRzFwYVE0MU9nb0VHYngyTHdtTTRUa0xYRFhmMjJ5RU55NFQ5NUhMN1JqTzRib3cxdWlDTDRSZjRYQi9HbS9TUWFtK3krSnNDMFgxN0JhRjN1aWVWa2RmUnVJUWRsbmYyTjdGMzFuY1JYTUowN3lGN1pHK1RxMGtJTUh5ei9BSFI0ei9EUDZUMEczYm04TTY4TmsyL3RqZUE3VGJDVmhscjVObGQzeElQalAvOEF3V1IvcFp2NWJrR2E4SXY4TGcvalRmcElOVmZaYkZXRzAzMTVCYUIzdTkvSXlPdm8zRWVSQjIyMTNhM1VJbXRabVR3dTkyU0p3ZTA5dWhhU0VIYWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lQT2ZGckp4enlZdmpZblpiaTltYk5kelBjMWpXUkIyeHBjWGFVcnVkOVZCejRoeThVeUhEL3N0aGs3SjArTjJTV1VVZHhFWEZzWTJGalFIVlBzZEI1VUdwNFRuUm0rTldkNjUyNmNON3E1OHZleCt5NG44YjN2V2d6ZkRSL1lPYTVuamJ2WnRidjhBMTJQSFpROVdqNnBwOVZBNW1QNzl6WEM4YmFOMXJiSDdka0IxRkIwYWZxaW4xa0ZqelRqR1N6MS9aUnoza2R0eHVDajc2THZITWxlK3AvQjJVOTBDcnRLbEJtK1JjZDhKWU1WY0MydTRJYjFzYnpDK0c1Zk8vdkdqUU9ZSFNEVjNYUkJlY0l5RjFlK0d6bjNMekxKRkRjd2g3dFNXc0RnMnA4emRFRUh3OS8yd3YveGJ6K1dnbWVGd3VqNGYwdEN3WFpkY2ZaekpVTUVsVHQzVURqU3ZYUkJYMlBBK0xXY2NrL05iKzN1c3ZjU09kTEpMZHVpWnIwMmt1aGNUVFUxUVZXSmZnTVY0ajQ2UGkxNFpNZmV0TWQzQzF6bnNCSWRSdTUzVUNnY05UUW9KM2lQWlhsOXozQldkbk02M25uaDJDZG52TWFYdjN1Rk8wTXFndDc3d2c0cS9GdWdzMlNRWHpXL3NyMHlQYzR2SFRlMG5aVHkwYUVIUnd6TzNtVTRCazRiNXhmZDQrSzR0bnlPTlhPYUlpV2x4N1NLN2ZVZytPQTVUKzFlR0UyUjJoeHRmdEVqR25vWEEreUQ2U2d5K0FtOE83eUYrUjVma1pMM01YVG5PbWljMjZEWXhVN1FERTBWMDhob09nUVNMUE5jWXdYTE1kTnhTK2tseDE5SUlNallQRXdZd1BjR3RlMHl0YldtNm8xSjA2MEtEMk5BUUVCQVFFQkFRRUJBUUVCQVFFQkFKQUZUb0FnOHE0L2ljZnpqbHVheStUaU54aTRDSUxTUGM1Z05EUmhCWVduUnJha2ZoSU5WLzBzNEgvd0RXZit2Y2Y4eEJuZUFTTzQ3elBMY1VtZFNDWnhtc2E5dTBiaFN2YTZJNi9pb0xUeElnZmo3dkQ4cWhIdDR5NGJIZFU2bTNsTkQ4cGI5WkIxK0dzVDhsa00xeXVjSGRrSnpEYVY2aUNNai9BSU5iOVZCVmM3bHRMM24xbGkrUVhUN1hBTmdFakFDV3NkSWQzdE9kMlZjTnU3czh5RG5QTThKOExpYmwxaEZhM2w5TEc1dHN5T1UzUkVoYVExeExuU05ZQWRTZ3NmRG9nK0dsd0FkUUxzSDRDVUhWNGUvN1lYLzR0NS9MUWRYRHJxOXRQQ2E3dWJLb3VvbTNMb25ORlMwZzZ1SDRvMVFWbkVNUjRhWG1HWmU1eTlqbXlraGMrN2JkWExvWE5mdVB1dEQyRjJuYnJWQkhqeUhHYmp4THcwZkg0STRiRzNmM2JwWTI3QkpJZDFYRHRJNkFWUVcvaUZsRzRyeEF3T1FleDBrZHZDWHl0WUt1N3ZjOFBJSDRMU1NnMVdSOFErSjJtTWZmUjVHRzVPMnNWdkU4T2xjN3Niczk1djFnRUdkNEpqTHUyNERsNzI3YVdTWkpseGNNYVJUMk82SUR0ZnZqVStoQjg4S3hzdVQ4S2Jxd2gvZlRpNGJFRG9DOE9xMGVzaEJFNEZrZUNQeExjZG5iT3d0Y3RaRjBVN3J5R0ZoZlJ4b1MrUWU4UGRJSnJVSUxOMlo0VS9rbGppY0RnckhKenlQclBkd1JSTVpBMXJoN1llSTNidG8xMEk3TmRVSG9DQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNENHVJSXJpQ1NDVUV4VE1kSElBUzBscmhRMGMwZ2pUdENDSGhjRmljSmFHMHhsdUxlM2M4eU9ZSE9mVjVBQkpjOHVkMEE3VUU5QlYzZkdNSGQ1ZURNVDIyN0pXMjBRM0RYeU1JMmtrVmExd2E3cjJoQk15R1BzOGpaVFdWNUdKcldkdTJXTWtpbzY5V2tFZXBCeGpjYlk0eXhpc2JHSVEyc0lJampCSnBVa25WeEpPcDdVSFJtZVA0WE5RdGh5bG95NVl5cFlYVkRtMTY3WHRJY0srWW9JT000SnhIR3lkN2FZeUpzblkrVGRNNFYwOWt5bDlQVWdsNHZqV0Z4VmhQWVdGdjNObmNGenBvdThrY0NYdERYYXZjNGlyUjJJUHJIOGV3K094Y21MczdmdXJDVVBENGQ3M1Y3d1VkN1RuRjJvODZEc3hHRnhtSXNSWTQ2SHViVnBjNFI3blAxY2FuVjVjZmpRVkZ4NGNjSnVMazNFbUxqRWhPNGhqNUkyVnJYM0dPYXo0a0V1VGh2R0h2c25qSHh4dXg3KzhzekNYUmJIMURxL3N5M2RxMGU5VkJJdk9QWWU4eWR2azdtM0VsOWFOTElKUzU0RFdtdFJ0QkRUN3g2aEJYeCtIdkRJNzM3WXpGUkNhdTRBbDVqQjgwUmQzZjVxQzludDRaN2VTM2xidWhsWVkzczFGV3VGQ05LVTBRUnNSaHNiaDdKdGxqb2U0dFd1TG14N25QMWNhblY1Y2ZqUVFzdnd2aStZbTcvSVkrT1djKzlLMHVpZTZtbnRPakxDNzFvSk9HNDVnOExHNW1NczQ3WVBvSHZiVXZjQjBEbnVKY2ZXVUZpZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0QvLzJRPT0nO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tb2VtYmVkLXByZXZpZXcnICkuYmVmb3JlKCAnPHNwYW4gY2xhc3M9XCJzcGlubmVyIHdwb25pb24tc3Bpbm5lclwiPjwvc3Bhbj4nICk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNob3dfcHJldmlldyggZSApICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBPRW1iZWQgUHJldmlldy5cblx0ICovXG5cdHNob3dfcHJldmlldygpIHtcblx0XHRsZXQgJHZhbHVlID0gdGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkudmFsKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1zcGlubmVyJyApLmFkZENsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdCR3cG9uaW9uLmFqYXgoICdvZW1iZWQtcHJldmlldycsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR2YWx1ZTogJHZhbHVlLFxuXHRcdFx0fVxuXHRcdH0sICggcmVzICkgPT4ge1xuXHRcdFx0aWYoIGZhbHNlID09PSByZXMuc3VjY2VzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHRcdC5odG1sKCAnPGltZyBjbGFzcz1cIndwb25pb24tbm8tcHJldmlld1wiIHNyYz1cIicgKyB0aGlzLmltYWdlICsgJ1wiLz4nICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLW9lbWJlZC1wcmV2aWV3JyApLmh0bWwoIHJlcy5kYXRhICk7XG5cdFx0XHR9XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1vZW1iZWQtcHJldmlldycgKVxuXHRcdFx0XHQuaHRtbCggJzxpbWcgY2xhc3M9XCJ3cG9uaW9uLW5vLXByZXZpZXdcIiBzcmM9XCInICsgdGhpcy5pbWFnZSArICdcIi8+JyApO1xuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tc3Bpbm5lcicgKS5yZW1vdmVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdvZW1iZWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NlbGVjdCcsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGxldCAkYXJnID0gdGhpcy5vcHRpb24oICdzZWxlY3QyJywge30gKTtcblx0XHRpZiggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJGFyZy5kcm9wZG93blBhcmVudCApICkge1xuXHRcdFx0JGFyZy5kcm9wZG93blBhcmVudCA9IHRoaXMuZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCggdGhpcy5lbGVtZW50ICk7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMub3B0aW9uKCAnYWpheCcgKSApIHtcblx0XHRcdCRhcmcuYWpheCA9IHtcblx0XHRcdFx0cHJvY2Vzc1Jlc3VsdHM6ICggZGF0YSApID0+IHtcblx0XHRcdFx0XHRsZXQgdGVybXMgPSBbXTtcblx0XHRcdFx0XHRpZiggZGF0YSApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBkYXRhLCBmdW5jdGlvbiggaWQsIHRleHQgKSB7XG5cdFx0XHRcdFx0XHRcdHRlcm1zLnB1c2goIHsgaWQ6IGlkLCB0ZXh0OiB0ZXh0IH0gKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHJlc3VsdHM6IHRlcm1zXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0YTogKCBwYXJhbXMgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHE6IHBhcmFtcy50ZXJtLFxuXHRcdFx0XHRcdFx0cXVlcnlfYXJnczogdGhpcy5vcHRpb24oICdxdWVyeV9hcmdzJyApLFxuXHRcdFx0XHRcdFx0cXVlcnlfb3B0aW9uczogdGhpcy5vcHRpb24oICdxdWVyeV9vcHRpb25zJyApLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRyYW5zcG9ydDogKCBwYXJhbXMsIHN1Y2Nlc3MsIGZhaWx1cmUgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYWpheCggJ2FqYXgtd3AtcXVlcnktZGF0YScsIHtcblx0XHRcdFx0XHRcdGRhdGE6IHBhcmFtcy5kYXRhLFxuXHRcdFx0XHRcdFx0b25TdWNjZXNzOiBzdWNjZXNzLFxuXHRcdFx0XHRcdFx0b25FcnJvcjogZmFpbHVyZSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0JGFyZyA9IHRoaXMuaGFuZGxlX2FyZ3MoICRhcmcsICdzZWxlY3QyJyApO1xuXHRcdHRoaXMuZWxlbWVudC5zZWxlY3QyKCAkYXJnICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmaWVsZF9kZWJ1ZygpIHtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NlbGVjdDInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR2YXIgJHRoaXMgICAgID0gdGhpcy5lbGVtZW50LFxuXHRcdFx0JGVuYWJsZWQgID0gJHRoaXMuZmluZCggJy53cG9uaW9uLWVuYWJsZWQnICksXG5cdFx0XHQkZGlzYWJsZWQgPSAkdGhpcy5maW5kKCAnLndwb25pb24tZGlzYWJsZWQnICk7XG5cblx0XHQkZW5hYmxlZC5zb3J0YWJsZSgge1xuXHRcdFx0Y29ubmVjdFdpdGg6ICRkaXNhYmxlZCxcblx0XHRcdHBsYWNlaG9sZGVyOiAndWktc29ydGFibGUtcGxhY2Vob2xkZXInLFxuXHRcdFx0dXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuXHRcdFx0XHRsZXQgJGVsID0gdWkuaXRlbS5maW5kKCAnaW5wdXQnICk7XG5cdFx0XHRcdGlmKCB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCAnd3Bvbmlvbi1lbmFibGVkJyApICkge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZGlzYWJsZWQnLCAnZW5hYmxlZCcgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC5hdHRyKCAnbmFtZScsICRlbC5hdHRyKCAnbmFtZScgKS5yZXBsYWNlKCAnZW5hYmxlZCcsICdkaXNhYmxlZCcgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoICd3cG9uaW9uLXNvcnRlci11cGRhdGVkJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIGF2b2lkIGNvbmZsaWN0XG5cdFx0JGRpc2FibGVkLnNvcnRhYmxlKCB7XG5cdFx0XHRjb25uZWN0V2l0aDogJGVuYWJsZWQsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ3VpLXNvcnRhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzb3J0ZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N1YmhlYWRpbmcnLCAoICRlbGVtICkgPT4gbmV3IHdpbmRvdy53cG9uaW9uLmZpZWxkX2Fic3RyYWN0KCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3N3aXRjaGVyJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0ZXh0JywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0ZXh0YXJlYScsICggJGVsZW0gKSA9PiBuZXcgd2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IGNzc191bml0cyBmcm9tICd2c3AtanMtaGVscGVyL3BhcnRzL2Nzc191bml0cyc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5mb250X3dlaWdodF9zdHlsZSA9IGZhbHNlO1xuXHRcdGxldCAkZWwgICAgICAgICAgICAgICAgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0bGV0ICRwcmV2aWV3ICAgICAgICAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tZm9udC1wcmV2aWV3JyApO1xuXHRcdGxldCAkdGhpcyAgICAgICAgICAgICAgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXRcblx0XHRcdFx0JGZvbnRfZmllbGQgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWZvbnRfcGlja2VyJyApLFxuXHRcdFx0XHQkZm9udCAgICAgICAgICAgICAgPSAkZm9udF9maWVsZC5maW5kKCAnLndwb25pb24tZm9udC1zZWxlY3RvcicgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRfd2VpZ2h0X3N0eWxlID0gJHRoaXMuZm9udF9zdHlsZSggJGZvbnRfZmllbGQuZmluZCggJy53cG9uaW9uLXZhcmlhbnQtc2VsZWN0b3InICkudmFsKCkgKSxcblx0XHRcdFx0JHRhZyAgICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXRhZyBzZWxlY3QnICkudmFsKCksXG5cdFx0XHRcdCRjb2xvciAgICAgICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZmllbGQtY29sb3JfcGlja2VyIGlucHV0LndwLWNvbG9yLXBpY2tlcicgKS52YWwoKSxcblx0XHRcdFx0JGFsaWduICAgICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LWFsaWduIHNlbGVjdCcgKS52YWwoKSxcblx0XHRcdFx0JGZvbnRTaXplICAgICAgICAgID0gJGVsLmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXNpemUgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdCRsaW5lSGVpZ2h0ICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1saW5lLWhlaWdodCBpbnB1dCcgKS52YWwoKSxcblx0XHRcdFx0Ly8kYmFja1VQRm9udCAgICAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtYmFja3VwLWZvbnQgc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQvLyRkaXJlY3Rpb24gICAgICAgICA9ICRlbC5maW5kKCAnLndwb25pb24tZWxlbWVudC1kaXJlY3Rpb24gc2VsZWN0JyApLnZhbCgpLFxuXHRcdFx0XHQkbGV0dGVyU3BhY2luZyAgICAgPSAkZWwuZmluZCggJy53cG9uaW9uLWVsZW1lbnQtbGV0dGVyLXNwYWNpbmcgaW5wdXQnICkudmFsKCksXG5cdFx0XHRcdGhyZWYgICAgICAgICAgICAgICA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9JyArICRmb250ICsgJzonICsgJGZvbnRfd2VpZ2h0X3N0eWxlLndlaWdodCxcblx0XHRcdFx0aHRtbCAgICAgICAgICAgICAgID0gJzxsaW5rIGhyZWY9XCInICsgaHJlZiArICdcIiBjbGFzcz1cIndwc2YtZm9udC1wcmV2aWV3LScgKyAkdGhpcy5pZCgpICsgJ1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPic7XG5cblx0XHRcdGlmKCBqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRqUXVlcnkoICcud3Bvbmlvbi1mb250LXByZXZpZXctJyArICR0aGlzLmlkKCkgKS5hdHRyKCAnaHJlZicsIGhyZWYgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggJ2hlYWQnICkuYXBwZW5kKCBodG1sICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZm9udFNpemUgPT09ICcnIHx8ICRmb250U2l6ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkZm9udFNpemUgPSAnMThweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkbGV0dGVyU3BhY2luZyA9PT0gJycgfHwgJGxldHRlclNwYWNpbmcgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0JGxldHRlclNwYWNpbmcgPSAnMXB4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYoICRsaW5lSGVpZ2h0ID09PSAnJyB8fCAkbGluZUhlaWdodCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQkbGluZUhlaWdodCA9ICcyMHB4Jztcblx0XHRcdH1cblxuXG5cdFx0XHRsZXQgJF9hdHRycyA9ICcgZm9udC1mYW1pbHk6JyArICRmb250ICsgJzsgJyArXG5cdFx0XHRcdCcgZm9udC13ZWlnaHQ6JyArICRmb250X3dlaWdodF9zdHlsZS53ZWlnaHQgKyAnOyAnICtcblx0XHRcdFx0JyBmb250LXN0eWxlOicgKyAkZm9udF93ZWlnaHRfc3R5bGUuc3R5bGUgKyAnOyAnICtcblx0XHRcdFx0JyB0ZXh0LWFsaWduOicgKyAkYWxpZ24gKyAnOyAnICtcblx0XHRcdFx0JyBjb2xvcjogJyArICRjb2xvciArICc7JyArXG5cdFx0XHRcdCcgZm9udC1zaXplOicgKyBjc3NfdW5pdHMoICRmb250U2l6ZSApICsgJzsgJyArXG5cdFx0XHRcdCcgbGV0dGVyLXNwYWNpbmc6JyArIGNzc191bml0cyggJGxldHRlclNwYWNpbmcgKSArICc7ICcgK1xuXHRcdFx0XHQnIGxpbmUtaGVpZ2h0OicgKyBjc3NfdW5pdHMoICRsaW5lSGVpZ2h0ICkgKyAnOyAnO1xuXG5cblx0XHRcdGxldCAkdGV4dCA9ICRwcmV2aWV3LnRleHQoKTtcblx0XHRcdCRwcmV2aWV3Lmh0bWwoICcnICk7XG5cdFx0XHQkcHJldmlldy5hcHBlbmQoIGpRdWVyeSggJzwnICsgJHRhZyArICc+JyArICR0ZXh0ICsgJzwvJyArICR0YWcgKyAnID4nICkgKTtcblx0XHRcdCRwcmV2aWV3LmZpbmQoICR0YWcgKS5hdHRyKCAnc3R5bGUnLCAkX2F0dHJzICk7XG5cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBQcm9wZXIgVmFsaWQgRm9udCBTdHlsZXMuXG5cdCAqIEBwYXJhbSAkaW5mb1xuXHQgKiBAcmV0dXJucyB7e3dlaWdodDogc3RyaW5nLCBzdHlsZTogc3RyaW5nfX1cblx0ICovXG5cdGZvbnRfc3R5bGUoICRpbmZvICkge1xuXHRcdGxldCAkd2VpZ2h0X3ZhbCA9ICc0MDAnLFxuXHRcdFx0JHN0eWxlX3ZhbCAgPSAnbm9ybWFsJztcblxuXHRcdHN3aXRjaCggJGluZm8gKSB7XG5cdFx0XHRjYXNlICcxMDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICcxMDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzEwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzEwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnMzAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnMzAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczMDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICczMDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzUwMCc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzUwMCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnNTAwaXRhbGljJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnNTAwJztcblx0XHRcdFx0JHN0eWxlX3ZhbCAgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc3MDAnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc3MDAnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzcwMGl0YWxpYyc6XG5cdFx0XHRcdCR3ZWlnaHRfdmFsID0gJzcwMCc7XG5cdFx0XHRcdCRzdHlsZV92YWwgID0gJ2l0YWxpYyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnOTAwJzpcblx0XHRcdFx0JHdlaWdodF92YWwgPSAnOTAwJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc5MDBpdGFsaWMnOlxuXHRcdFx0XHQkd2VpZ2h0X3ZhbCA9ICc5MDAnO1xuXHRcdFx0XHQkc3R5bGVfdmFsICA9ICdpdGFsaWMnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdCRzdHlsZV92YWwgPSAnaXRhbGljJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7IHdlaWdodDogJHdlaWdodF92YWwsIHN0eWxlOiAkc3R5bGVfdmFsIH07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd0eXBvZ3JhcGh5JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICR0aGlzICAgICA9IHRoaXMsXG5cdFx0XHQkZWxlbSAgICAgPSAkdGhpcy5lbGVtZW50LFxuXHRcdFx0JGFkZCAgICAgID0gJGVsZW0uZmluZCggJ2J1dHRvbicgKSxcblx0XHRcdCRpbnB1dCAgICA9ICRlbGVtLmZpbmQoICdpbnB1dFt0eXBlPXRleHRdJyApLFxuXHRcdFx0JHNldHRpbmdzID0gJHRoaXMub3B0aW9uKCAnc2V0dGluZ3MnLCB7XG5cdFx0XHRcdGZyYW1lX3RpdGxlOiAnVXBsb2FkJyxcblx0XHRcdFx0dXBsb2FkX3R5cGU6ICdpbWFnZScsXG5cdFx0XHRcdGluc2VydF90aXRsZTogJ1VzZScsXG5cdFx0XHR9ICksIHdwX21lZGlhX2ZyYW1lO1xuXG5cdFx0JGFkZC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmKCB0eXBlb2Ygd3AgPT09ICd1bmRlZmluZWQnIHx8ICF3cC5tZWRpYSB8fCAhd3AubWVkaWEuZ2FsbGVyeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggd3BfbWVkaWFfZnJhbWUgKSB7XG5cdFx0XHRcdHdwX21lZGlhX2ZyYW1lLm9wZW4oKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZSA9IHdwLm1lZGlhKCB7XG5cdFx0XHRcdHRpdGxlOiAkc2V0dGluZ3MuZnJhbWVfdGl0bGUsXG5cdFx0XHRcdGxpYnJhcnk6IHtcblx0XHRcdFx0XHR0eXBlOiAkc2V0dGluZ3MudXBsb2FkX3R5cGVcblx0XHRcdFx0fSxcblx0XHRcdFx0YnV0dG9uOiB7XG5cdFx0XHRcdFx0dGV4dDogJHNldHRpbmdzLmluc2VydF90aXRsZSxcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHR3cF9tZWRpYV9mcmFtZS5vbiggJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYXR0YWNobWVudCA9IHdwX21lZGlhX2ZyYW1lLnN0YXRlKCkuZ2V0KCAnc2VsZWN0aW9uJyApLmZpcnN0KCk7XG5cdFx0XHRcdCRpbnB1dC52YWwoIGF0dGFjaG1lbnQuYXR0cmlidXRlcy51cmwgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSApO1xuXHRcdFx0d3BfbWVkaWFfZnJhbWUub3BlbigpO1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfZWRpdG9yJywgKCAkZWxlbSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0gKSApICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLyogZ2xvYmFsIHN3YWw6dHJ1ZSAqL1xuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJHRoaXMgICAgID0gdGhpcyxcblx0XHRcdCRlbGVtICAgICA9ICR0aGlzLmVsZW1lbnQsXG5cdFx0XHQkdGV4dGFyZWEgPSAkZWxlbS5maW5kKCAndGV4dGFyZWEnICk7XG5cdFx0JGVsZW0uZmluZCggJyN3cG9uaW9uLXdwLWxpbmstcGlja2VyID4gYnV0dG9uJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCR0ZXh0YXJlYS52YWwoICcnICk7XG5cdFx0XHRpZiggIXdpbmRvdy53cExpbmsgKSB7XG5cdFx0XHRcdHN3YWwoIHtcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdHRpdGxlOiAkd3Bvbmlvbi50ZXh0KCAnd3BfbGlua19lcnJvcl90aXRsZScsICdXUCBMaW5rIEpTIExpYiBOb3QgRm91bmQnICksXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LndwTGluay5vcGVuKCAkdGV4dGFyZWEuYXR0ciggJ2lkJyApICk7XG5cdFx0fSApO1xuXG5cblx0XHQkdGV4dGFyZWEub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkZGF0YSA9IGpRdWVyeSggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdzcGFuLmV4YW1wbGVfb3V0cHV0IHNwYW4udmFsdWUnICkuaHRtbCggalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN1cmwnICkudmFsKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmKCAkZWxlbS5maW5kKCAnaW5wdXQjdGl0bGUnICkgKSB7XG5cdFx0XHRcdCRlbGVtLmZpbmQoICdpbnB1dCN0aXRsZScgKS52YWwoICRkYXRhLnRleHQoKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ2lucHV0I3RhcmdldCcgKS52YWwoICRkYXRhLmF0dHIoICd0YXJnZXQnICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnVybCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi51cmwgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAnaHJlZicgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggJGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKSApIHtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3NwYW4udGl0bGUgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS50ZXh0KCkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICRlbGVtLmZpbmQoICdzcGFuLnRhcmdldCBzcGFuLnZhbHVlJyApICkge1xuXHRcdFx0XHQkZWxlbS5maW5kKCAnc3Bhbi50YXJnZXQgc3Bhbi52YWx1ZScgKS5odG1sKCAkZGF0YS5hdHRyKCAndGFyZ2V0JyApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnd3BfbGlua3MnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApICkgKSggd2luZG93ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuaW1wb3J0ICR3cG9uaW9uX2RlYnVnIGZyb20gJy4uL2NvcmUvZGVidWcnO1xuXG4vKipcbiAqIFdQT25pb24gRGVwZW5kZW5jeSBIZWxwZXIgQ2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBXUE9uaW9uIERlcGVuZGVuY3kgSGVscGVyIENsYXNzLlxuXHQgKiBAcGFyYW0gJHNlbGVjdG9yXG5cdCAqIEBwYXJhbSAkY29udHh0XG5cdCAqIEBwYXJhbSAkY29uZmlnXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJHNlbGVjdG9yLCAkY29udHh0LCAkY29uZmlnICkge1xuXHRcdHN1cGVyKCAkc2VsZWN0b3IsICRjb250eHQsICRjb25maWcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0cyBEZXBlbmRlbmN5IFdvcmtlci5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRkZXAgPSB0aGlzLm9wdGlvbiggJ2RlcGVuZGVuY3knICk7XG5cdFx0Zm9yKCBsZXQgJGtleSBpbiAkZGVwLmNvbnRyb2xsZXIgKSB7XG5cdFx0XHRpZiggJGRlcC5jb250cm9sbGVyLmhhc093blByb3BlcnR5KCAka2V5ICkgJiYgJGRlcC5jb25kaXRpb24uaGFzT3duUHJvcGVydHkoICRrZXkgKSAmJiAkZGVwLnZhbHVlLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdGxldCAkY29udHJvbGxlciA9ICRkZXAuY29udHJvbGxlciBbICRrZXkgXSxcblx0XHRcdFx0XHQkY29uZGl0aW9uICA9ICRkZXAuY29uZGl0aW9uIFsgJGtleSBdLFxuXHRcdFx0XHRcdCR2YWx1ZSAgICAgID0gJGRlcC52YWx1ZSBbICRrZXkgXSxcblx0XHRcdFx0XHQkZmllbGQgICAgICA9ICdbZGF0YS1kZXBlbmQtaWQ9XCInICsgJGNvbnRyb2xsZXIgKyAnXCJdJztcblx0XHRcdFx0aWYoIGZhbHNlICE9PSB0aGlzLmNvbmZpZy5uZXN0YWJsZSApIHtcblx0XHRcdFx0XHRsZXQgJElOUFVUID0gdGhpcy5jb25maWcucGFyZW50LmZpbmQoICdbZGF0YS1kZXBlbmQtaWQ9JyArICRjb250cm9sbGVyICsgJ10nICk7XG5cdFx0XHRcdFx0aWYoICRJTlBVVC5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRcdFx0JGZpZWxkID0gJ1tkYXRhLXdwb25pb24tanNpZD1cIicgKyAkd3Bvbmlvbi5maWVsZElEKCAkSU5QVVQgKSArICdcIl06aW5wdXQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldF9jb250eHQoIHRoaXMuY29udHh0LmNyZWF0ZVJ1bGUoICRmaWVsZCwgJGNvbmRpdGlvbiwgJHZhbHVlICkgKTtcblx0XHRcdFx0dGhpcy5zZXRfY29udHh0KCB0aGlzLmNvbnR4dC5pbmNsdWRlKCB0aGlzLmVsZW1lbnQgKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQkd3Bvbmlvbl9kZWJ1Zy5hZGQoIHRoaXMuaWQoKSwgeyAnRGVwZW5kZW5jeSc6ICRkZXAsICdOZXN0YWJsZSBEZXBlbmRlbmN5JzogdGhpcy5jb25maWcubmVzdGFibGUgfSApO1xuXHR9XG5cblx0ZmllbGRfZGVidWcoKSB7XG5cdH1cbn1cblxuIiwiLyogZ2xvYmFsIGFyZ3VtZW50czp0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZTp0cnVlICovXG4vKiBnbG9iYWwgdGlwcHk6dHJ1ZSAqL1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgalF1ZXJ5ICkgPT4ge1xuXHQvKipcblx0ICogV1BPbmlvbiBSZWxhdGVkIEZ1bmN0aW9ucy5cblx0ICovXG5cdCQuZm4uZXh0ZW5kKCB7XG5cdFx0LyoqXG5cdFx0ICogQW5pbWF0ZSBDU1MgUmVsYXRlZCBGdW5jdGlvbnMuXG5cdFx0ICovXG5cdFx0YW5pbWF0ZUNzczogZnVuY3Rpb24oIGFuaW1hdGlvbk5hbWUsIGNhbGxiYWNrICkge1xuXHRcdFx0bGV0IGFuaW1hdGlvbkVuZCA9ICggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRsZXQgYW5pbWF0aW9ucyA9IHtcblx0XHRcdFx0XHRhbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuXHRcdFx0XHRcdE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcblx0XHRcdFx0XHRNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Zm9yKCBsZXQgdCBpbiBhbmltYXRpb25zICkge1xuXHRcdFx0XHRcdGlmKCBlbC5zdHlsZVsgdCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYW5pbWF0aW9uc1sgdCBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApICk7XG5cblx0XHRcdHRoaXMuYWRkQ2xhc3MoICdhbmltYXRlZCAnICsgYW5pbWF0aW9uTmFtZSApLm9uZSggYW5pbWF0aW9uRW5kLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCggdGhpcyApLnJlbW92ZUNsYXNzKCAnYW5pbWF0ZWQgJyArIGFuaW1hdGlvbk5hbWUgKTtcblx0XHRcdFx0aWYoIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRjYWxsYmFjayggJCggdGhpcyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEEgQ3VzdG9tIFdyYXAgQ2xhc3MgVG8gSGFuZGxlIFRpcHB5IEluc3RhbmNlXG5cdFx0ICogQHBhcmFtICRhcmd1bWVudHNcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHR0aXBweTogZnVuY3Rpb24oICRhcmd1bWVudHMgKSB7XG5cdFx0XHRsZXQgdGlwcHlfaGVscGVyID0ge1xuXHRcdFx0XHRjcmVhdGVfaW5zdGFuY2U6IGZ1bmN0aW9uKCAkZWxlbSwgJGFyZ3VtZW50cyApIHtcblx0XHRcdFx0XHQkYXJndW1lbnRzID0gKCB0eXBlb2YgJGFyZ3VtZW50cyA9PT0gJ3VuZGVmaW5lZCcgKSA/IHt9IDogJGFyZ3VtZW50cztcblx0XHRcdFx0XHRpZiggJGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdGxldCAkX2luc3RhbmNlX2lkID0gJ1RpcHB5JyArIHdpbmRvdy53cG9uaW9uLmNvcmUucmFuZF9pZCgpO1xuXHRcdFx0XHRcdFx0JGVsZW0uYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnLCAkX2luc3RhbmNlX2lkICk7XG5cblx0XHRcdFx0XHRcdGxldCAkdGl0bGUgICAgICA9ICRlbGVtLmF0dHIoICd0aXRsZScgKTtcblx0XHRcdFx0XHRcdGxldCAkZGF0YV90aXBweSA9ICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5JyApO1xuXG5cdFx0XHRcdFx0XHRpZiggJHRpdGxlICYmICR0aXRsZSAhPT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgJGFyZ3VtZW50cy5jb250ZW50ID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0XHQkYXJndW1lbnRzLmNvbnRlbnQgPSAkdGl0bGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYoICRkYXRhX3RpcHB5ICYmICRkYXRhX3RpcHB5ICE9PSAnJyApIHtcblx0XHRcdFx0XHRcdFx0aWYoIHR5cGVvZiAkYXJndW1lbnRzLmNvbnRlbnQgPT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRcdCRhcmd1bWVudHMuY29udGVudCA9ICRkYXRhX3RpcHB5O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdID0gdGlwcHkoICRlbGVtWyAwIF0sICRhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldF9pbnN0YW5jZTogZnVuY3Rpb24oICRlbGVtICkge1xuXHRcdFx0XHRcdGlmKCAkZWxlbS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgJF9pbnN0YW5jZV9pZCA9ICRlbGVtLmF0dHIoICdkYXRhLXRpcHB5LWluc3RhbmNlLWlkJyApO1xuXHRcdFx0XHRcdHJldHVybiAoIHVuZGVmaW5lZCAhPT0gd2luZG93WyAkX2luc3RhbmNlX2lkIF0gKSA/IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdIDogZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGlmKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dGlwcHlfaGVscGVyLmNyZWF0ZV9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICksICRhcmd1bWVudHMgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCAkc3RhdHVzID0gdGlwcHlfaGVscGVyLmNyZWF0ZV9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICksICRhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuICggdHJ1ZSA9PT0gJHN0YXR1cyApID8gdGlwcHlfaGVscGVyLmdldF9pbnN0YW5jZSggalF1ZXJ5KCB0aGlzICkgKSA6IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIEFuIEFjdGl2ZSBpbnN0YW5jZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRpcHB5X2dldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggalF1ZXJ5KCB0aGlzICkuYXR0ciggJ2RhdGEtdGlwcHktaW5zdGFuY2UtaWQnICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bGV0ICRfaW5zdGFuY2VfaWQgPSBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS10aXBweS1pbnN0YW5jZS1pZCcgKTtcblx0XHRcdHJldHVybiAoIHVuZGVmaW5lZCAhPT0gd2luZG93WyAkX2luc3RhbmNlX2lkIF0gKSA/IHdpbmRvd1sgJF9pbnN0YW5jZV9pZCBdIDogZmFsc2U7XG5cdFx0fSxcblx0fSApO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIEEgQWJzdHJhY3QgQ2xhc3MgSW5zdGFuY2UuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcGFyYW0gJGNvbnR4dFxuXHQgKiBAcmV0dXJucyB7e2FqYXgoKj0sICo9KTogKiwganNfZXJyb3IoKik6IHZvaWQsIGluaXRfZmllbGQoKj0sICopOiB2b2lkLCBzZXRfYXJncygqKTogKiwganNfdmFsaWRhdGVfZWxlbSgqPSwgKik6IHZvaWQsIGpzX2Vycm9yX2hhbmRsZXIoKj0pOiB2b2lkLCBpZCgpOiAqLCBwbHVnaW5faWQoKTogKiwgZmllbGRfZGVidWcoKTogKHVuZGVmaW5lZCksIGhhbmRsZV9hcmdzKCo9LCAqPSk6ICosIG1heWJlX2pzX3ZhbGlkYXRlX2VsZW0oKj0sICo9KTogdm9pZCwgZ2V0X2ZpZWxkX3BhcmVudF9ieV9pZCgqPSk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBvcHRpb25zKCk6ICosIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBpbml0KCksIHJlbG9hZCgpOiAqLCBtb2R1bGUoKTogKiwgc2V0X2NvbnR4dCgqKTogKiwgY29udHh0OiAqLCBlbGVtZW50OiAqLCBob29rOiAqLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICp9fCp8d2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3R9XG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9maWVsZCA9ICggJGVsZW0sICRjb250eHQgPSB7fSApID0+IG5ldyB3aW5kb3cud3Bvbmlvbi5maWVsZF9hYnN0cmFjdCggJGVsZW0sICRjb250eHQgKTtcblxuXHQvKipcblx0ICogSGFuZGxlcyBXUE9uaW9uIE5vdGljZXMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHdpbmRvdy53cG9uaW9uX25vdGljZSA9ICggJGVsZW0gKSA9PiB7XG5cdFx0aWYoICRlbGVtLmZpbmQoICcud3Bvbmlvbi1yZW1vdmUnICkubGVuZ3RoID4gMCApIHtcblx0XHRcdCRlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgJF9lbCA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5maW5kKCAnLndwb25pb24tcmVtb3ZlJyApLnRpcHB5KCB7XG5cdFx0XHRcdFx0YXBwZW5kVG86ICgpID0+IGpRdWVyeSggdGhpcyApWyAwIF0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuZmluZCggJy53cG9uaW9uLXJlbW92ZScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JF9lbC5zbGlkZVVwKCAnc2xvdycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JF9lbC5yZW1vdmUoKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHRcdHJldHVybiAkZWxlbTtcblx0XHR9XG5cblx0XHRsZXQgJGF1dG8gPSAkZWxlbS5hdHRyKCAnZGF0YS1hdXRvY2xvc2UnICk7XG5cdFx0aWYoICRhdXRvICkge1xuXHRcdFx0JGF1dG8gPSBwYXJzZUludCggJGF1dG8gKTtcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0JGVsZW0uc2xpZGVVcCggJ3Nsb3cnLCAoKSA9PiB7XG5cdFx0XHRcdFx0JGVsZW0ucmVtb3ZlKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sICRhdXRvICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBCYXNpYyBXUE9uaW9uIEpTIFNldHVwLlxuXHQgKi9cblx0d2luZG93Lndwb25pb25fc2V0dXAgPSAoKSA9PiB7XG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoIHdpbmRvdy53cG9uaW9uLmNvcmUuc2V0dGluZ3NfYXJncyApICkge1xuXHRcdFx0bGV0ICRjb3JlID0gd2luZG93Lndwb25pb24uY29yZS53aW5kb3dBcmdzKCAnd3Bvbmlvbl9jb3JlJywgZmFsc2UgKTtcblx0XHRcdGxldCAkdGFucyA9IHdpbmRvdy53cG9uaW9uLmNvcmUud2luZG93QXJncyggJ3dwb25pb25faWw4bicsIGZhbHNlICk7XG5cdFx0XHRpZiggZmFsc2UgPT09ICRjb3JlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cud3Bvbmlvbi5jb3JlLnNldHRpbmdzX2FyZ3MgICAgPSAkY29yZTtcblx0XHRcdHdpbmRvdy53cG9uaW9uLmNvcmUudGV4dCAgICAgICAgICAgICA9ICR0YW5zO1xuXHRcdFx0d2luZG93Lndwb25pb24uY29yZS5kZWJ1Z19pbmZvICAgICAgID0gbnVsbDtcblx0XHRcdHdpbmRvdy53cG9uaW9uLmNvcmUuZmllbGRfZGVidWdfaW5mbyA9IG51bGw7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgV2l0aCBBIEZpZWxkIENhbGxiYWNrIEhvb2suXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKiBAcGFyYW0gJGNhbGxiYWNrXG5cdCAqIEBwYXJhbSAkbW9kdWxlXG5cdCAqL1xuXHR3aW5kb3cud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCA9ICggJHR5cGUsICRjYWxsYmFjaywgJG1vZHVsZSA9ICcnICkgPT4ge1xuXHRcdCRtb2R1bGUgPSAoICcnID09PSAkbW9kdWxlICkgPyAnJyA6ICRtb2R1bGUgKyAnXyc7XG5cdFx0d2luZG93Lndwb25pb24uaG9va3MuYWRkQWN0aW9uKCAnd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkdHlwZSwgJ3dwb25pb25fY29yZScsICggJGVsZW0gKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQkY2FsbGJhY2soICRlbGVtICk7XG5cdFx0XHR9IGNhdGNoKCBlICkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyggYXJndW1lbnRzLCAnIFxcbicgKyBlICsgJyAgXFxuRm9yIDogd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHQvKipcblx0ICogRnVuY3Rpb24gVXNlZCBvdXRzaWRlIG9mIFdQT25pb24gVG8gQ3JlYXRlXG5cdCAqIEBwYXJhbSAkaW5pdF9tZXRob2Rcblx0ICogQHBhcmFtICRtZXRob2RzXG5cdCAqIEByZXR1cm5zIHt7aW5pdDogKiwgbmV3KCk6ICRjbGFzcywgcHJvdG90eXBlOiAkY2xhc3N9fVxuXHQgKi9cblx0d2luZG93Lndwb25pb25fY3JlYXRlX2ZpZWxkID0gKCAkaW5pdF9tZXRob2QsICRtZXRob2RzID0gZmFsc2UgKSA9PiB7XG5cdFx0bGV0ICRvcmdfY2xhc3MgPSByZXF1aXJlKCAnLi4vY29yZS9maWVsZCcgKS5kZWZhdWx0O1xuXHRcdGxldCAkY2xhc3MgICAgID0gY2xhc3MgZXh0ZW5kcyAkb3JnX2NsYXNzIHtcblx0XHR9O1xuXG5cdFx0JGNsYXNzLnByb3RvdHlwZS5pbml0ID0gJGluaXRfbWV0aG9kO1xuXG5cdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRtZXRob2RzICkgKSB7XG5cdFx0XHRmb3IoIGxldCAka2V5IGluICRtZXRob2RzICkge1xuXHRcdFx0XHRpZiggJG1ldGhvZHMuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHQkY2xhc3MucHJvdG90eXBlWyAka2V5IF0gPSAkbWV0aG9kc1sgJGtleSBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkY2xhc3M7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIEEgRmllbGQgSlMgRnVuY3Rpb24gVG8gUmVuZGVyIGl0IFByb3Blcmx5XG5cdCAqIEBwYXJhbSAkZmllbGRfdHlwZVxuXHQgKiBAcGFyYW0gJGFyZ3VtZW50XG5cdCAqIEBwYXJhbSAkbW9kdWxlXG5cdCAqIEBwYXJhbSAkbG9nX2VyclxuXHQgKi9cblx0d2luZG93Lndwb25pb25faW5pdF9maWVsZCA9ICggJGZpZWxkX3R5cGUsICRhcmd1bWVudCwgJG1vZHVsZSA9ICcnLCAkbG9nX2VyciA9IHRydWUgKSA9PiB7XG5cdFx0JG1vZHVsZSA9ICggJycgPT09ICRtb2R1bGUgKSA/ICcnIDogJG1vZHVsZSArICdfJztcblx0XHRpZiggd2luZG93Lndwb25pb24uaG9va3MuaGFzQWN0aW9uKCAnd3Bvbmlvbl9pbml0XycgKyAkbW9kdWxlICsgJ2ZpZWxkXycgKyAkZmllbGRfdHlwZSApICkge1xuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2luaXRfJyArICRtb2R1bGUgKyAnZmllbGRfJyArICRmaWVsZF90eXBlLCAkYXJndW1lbnQgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoIHRydWUgPT09ICRsb2dfZXJyICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnV1BPbmlvbiBGaWVsZCBUeXBlIDogJyArICRmaWVsZF90eXBlICsgJyBJbml0IEZ1bmN0aW9uIE5vdCBGb3VuZCcsICdcXG5BY3Rpb24gVXNlZCA6IHdwb25pb25faW5pdF8nICsgJG1vZHVsZSArICdmaWVsZF8nICsgJGZpZWxkX3R5cGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCBqUXVlcnkgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fRmllbGQgZnJvbSAnLi4vY29yZS9maWVsZCc7XG5cbi8qKlxuICogSW1hZ2UgUE9QVVAgVmlldyBDbGFzcy5cbiAqL1xuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEhhbmRsZXMgSW1hZ2UgUE9QVVAgVmlldy5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0bGV0ICRpbWFnZSA9ICggd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApICkgKSA/IHRoaXMuZWxlbWVudC5hdHRyKCAnc3JjJyApIDogdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZ1bGxzaXplJyApO1xuXHRcdHN3YWwoIHtcblx0XHRcdGltYWdlVXJsOiAkaW1hZ2UsXG5cdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcblx0XHRcdGJhY2tkcm9wOiBgcmdiYSgwLDAsMCwwLjQ0KWBcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHcgKSA9PiB3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV9wb3B1cCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uL2NvcmUvZmllbGQnO1xuaW1wb3J0IHsgcmFuZF9tZDUgfSBmcm9tICd2c3AtanMtaGVscGVyL2luZGV4JztcblxuLyoqXG4gKiBXUCBFZGl0b3IgSGVscGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV1BPbmlvbl9GaWVsZCB7XG5cdC8qKlxuXHQgKiBXUCBFZGl0b3IgSGVscGVyXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdGxldCAkbWNlX2VkaXRvciAgPSB0aW55TUNFUHJlSW5pdC5tY2VJbml0WyB0aGlzLm9wdGlvbiggJ3dwZWRpdG9yX2lkJyApIF0sXG5cdFx0XHRcdCRxdWlja190YWdzICA9IHRpbnlNQ0VQcmVJbml0LnF0SW5pdFsgdGhpcy5vcHRpb24oICd3cGVkaXRvcl9pZCcgKSBdLFxuXHRcdFx0XHQkTkVXX0lEICAgICAgPSAnd3Bvbmlvbi13cC1lZGl0b3ItJyArIHJhbmRfbWQ1KCksXG5cdFx0XHRcdCR0ZXh0QXJlYSAgICA9IHRoaXMuZWxlbWVudC5maW5kKCAndGV4dGFyZWEnICkuY2xvbmUoKSxcblx0XHRcdFx0JGFjdHVhbF9JRCAgID0gJHRleHRBcmVhLmF0dHIoICdpZCcgKSxcblx0XHRcdFx0JGFjdHVhbF9odG1sID0gdGhpcy5lbGVtZW50LmZpbmQoICcud3Bvbmlvbi1maWVsZHNldCcgKS5odG1sKCksXG5cdFx0XHRcdCRyZWdleCAgICAgICA9IG5ldyBSZWdFeHAoICRhY3R1YWxfSUQsIFwiZ1wiICk7XG5cdFx0XHQkYWN0dWFsX2h0bWwgICAgID0gJGFjdHVhbF9odG1sLnJlcGxhY2UoICRyZWdleCwgJE5FV19JRCApO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJy53cG9uaW9uLWZpZWxkc2V0JyApLmh0bWwoICRhY3R1YWxfaHRtbCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYScgKS5wYXJlbnQoKS5hcHBlbmQoICR0ZXh0QXJlYSApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICd0ZXh0YXJlYTpub3QoIycgKyAkYWN0dWFsX0lEICsgJyknICkucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ3RleHRhcmVhJyApLmF0dHIoICdpZCcsICRORVdfSUQgKTtcblxuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkbWNlX2VkaXRvciApICkge1xuXHRcdFx0XHQkbWNlX2VkaXRvci5zZWxlY3RvciA9ICcjJyArICRORVdfSUQ7XG5cdFx0XHRcdHRpbnltY2UuaW5pdCggJG1jZV9lZGl0b3IgKTtcblx0XHRcdFx0dGlueU1DRS5leGVjQ29tbWFuZCggJ21jZUFkZEVkaXRvcicsIGZhbHNlLCAnIycgKyAkTkVXX0lEICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWxzZSA9PT0gd2luZG93Lndwb25pb24uXy5pc1VuZGVmaW5lZCggJHF1aWNrX3RhZ3MgKSApIHtcblx0XHRcdFx0JHF1aWNrX3RhZ3MuaWQgPSAkTkVXX0lEO1xuXHRcdFx0XHRxdWlja3RhZ3MoICRxdWlja190YWdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgV1BPbmlvbl9GaWVsZCBmcm9tICcuLi9jb3JlL2ZpZWxkJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG4vKipcbiAqIFdQT25pb24gRmllbGQgVG9vbFRpcFxuICovXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICogSGFuZGxlIEVhY2ggQW5kIEV2ZXJ5IFNpbmdsZSBGaWVsZCBUb29sVGlwLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgJGZpZCAgICAgICAgID0gdGhpcy5lbGVtZW50LmF0dHIoICdkYXRhLWZpZWxkLWpzaWQnICk7XG5cdFx0bGV0ICR0b29sdGlwX2tleSA9IGZhbHNlO1xuXHRcdGlmKCB0cnVlID09PSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoICd3cG9uaW9uLWhlbHAnICkgKSB7XG5cdFx0XHQkdG9vbHRpcF9rZXkgPSAnd3Bvbmlvbi1oZWxwJztcblx0XHR9IGVsc2UgaWYoIHRydWUgPT09IHRoaXMuZWxlbWVudC5oYXNDbGFzcyggJ3dwb25pb24td3JhcC10b29sdGlwJyApICkge1xuXHRcdFx0JHRvb2x0aXBfa2V5ID0gJ3dyYXBfdG9vbHRpcCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b29sdGlwX2tleSA9ICRmaWQgKyAndG9vbHRpcCc7XG5cdFx0fVxuXG5cdFx0bGV0ICRhcmcgPSAoIHRydWUgPT09ICR3cG9uaW9uLnZhbGlkX2pzb24oICRmaWQgKSApID8gSlNPTi5wYXJzZSggJGZpZCApIDogdGhpcy5vcHRpb24oICR0b29sdGlwX2tleSwgZmFsc2UgKTtcblxuXHRcdGNvbnN0IHN0YXRlID0ge1xuXHRcdFx0aXNGZXRjaGluZzogZmFsc2UsXG5cdFx0XHRjYW5GZXRjaDogdHJ1ZVxuXHRcdH07XG5cblx0XHRpZiggZmFsc2UgPT09ICRhcmcgKSB7XG5cdFx0XHRsZXQgJGNsYXNzVG9DaGVjayA9IFsgJ2RhdGEtdGlwcHknLCAnZGF0YS10aXBweS1hcmdzJywgJ3RpcHB5LWFyZ3MnIF07XG5cdFx0XHRsZXQgJGZvdW5kICAgICAgICA9IGZhbHNlO1xuXHRcdFx0Zm9yKCBsZXQgJGsgaW4gJGNsYXNzVG9DaGVjayApIHtcblx0XHRcdFx0bGV0ICRhdHRyID0gdGhpcy5lbGVtZW50LmF0dHIoICRjbGFzc1RvQ2hlY2tbICRrIF0gKTtcblx0XHRcdFx0aWYoICRhdHRyICkge1xuXHRcdFx0XHRcdGlmKCAkd3Bvbmlvbi52YWxpZF9qc29uKCAkYXR0ciApICkge1xuXHRcdFx0XHRcdFx0JGFyZyAgID0gSlNPTi5wYXJzZSggJGF0dHIgKTtcblx0XHRcdFx0XHRcdCRmb3VuZCA9ICRjbGFzc1RvQ2hlY2tbICRrIF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYoIGZhbHNlICE9PSB0aGlzLm9wdGlvbiggJGF0dHIsIGZhbHNlICkgKSB7XG5cdFx0XHRcdFx0XHQkYXJnICAgPSB0aGlzLm9wdGlvbiggJGF0dHIsIGZhbHNlICk7XG5cdFx0XHRcdFx0XHQkZm91bmQgPSAkY2xhc3NUb0NoZWNrWyAkayBdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoICRhcmcgKSB7XG5cdFx0XHQkYXJnLnBlcmZvcm1hbmNlID0gZmFsc2U7XG5cdFx0XHRpZiggJGFyZy5pbWFnZSAhPT0gdW5kZWZpbmVkICYmICRhcmcuaW1hZ2UgIT09IGZhbHNlICkge1xuXHRcdFx0XHRsZXQgJGltYWdlICAgICAgICAgID0gJGFyZy5pbWFnZTtcblx0XHRcdFx0JGFyZy5pbnRlcmFjdGl2ZSAgICA9IHRydWU7XG5cdFx0XHRcdCRhcmcuY29udGVudCAgICAgICAgPSAnTG9hZGluZy4uLic7XG5cdFx0XHRcdC8vJGFyZy5odG1sICAgICAgICAgICA9ICcjd3BvdHBpbWcnO1xuXHRcdFx0XHQkYXJnLnVwZGF0ZUR1cmF0aW9uID0gMjAwMDtcblx0XHRcdFx0JGFyZy5vblNob3cgICAgICAgICA9IGFzeW5jIGZ1bmN0aW9uKCB0aXAgKSB7XG5cdFx0XHRcdFx0aWYoIHN0YXRlLmlzRmV0Y2hpbmcgfHwgIXN0YXRlLmNhbkZldGNoICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdGF0ZS5pc0ZldGNoaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRzdGF0ZS5jYW5GZXRjaCAgID0gZmFsc2U7XG5cblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggJGltYWdlICk7XG5cdFx0XHRcdFx0XHRjb25zdCBibG9iICAgICA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcblx0XHRcdFx0XHRcdGNvbnN0IHVybCAgICAgID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXHRcdFx0XHRcdFx0aWYoIHRpcC5zdGF0ZS5pc1Zpc2libGUgKSB7XG5cdFx0XHRcdFx0XHRcdHRpcC5zZXRDb250ZW50KCAnPGRpdiBzdHlsZT1cIm1pbi13aWR0aDoyNXB4O21pbi1oZWlnaHQ6MjVweDtcIj48aW1nIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTtcIiBzcmM9XCInICsgdXJsICsgJ1wiLz48L2Rpdj4nICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBjYXRjaCggZSApIHtcblx0XHRcdFx0XHRcdHRpcC5zZXRDb250ZW50KCBgRmV0Y2ggZmFpbGVkLiAke2V9YCApO1xuXHRcdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0XHRzdGF0ZS5pc0ZldGNoaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHQkYXJnLm9uSGlkZGVuICAgICAgID0gKCB0aXAgKSA9PiB7XG5cdFx0XHRcdFx0c3RhdGUuY2FuRmV0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdHRpcC5zZXRDb250ZW50KCAnTG9hZGluZy4uLicgKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JGFyZy5wb3BwZXJPcHRpb25zICA9IHtcblx0XHRcdFx0XHRtb2RpZmllcnM6IHtcblx0XHRcdFx0XHRcdHByZXZlbnRPdmVyZmxvdzoge1xuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGhpZGU6IHtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JGFyZyA9IHt9O1xuXHRcdH1cblxuXHRcdGlmKCB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkYXJnLmFwcGVuZFRvICkgKSB7XG5cdFx0XHQkYXJnLmFwcGVuZFRvID0gKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5KCAnZGl2Lndwb25pb24tZWxlbWVudFtkYXRhLXdwb25pb24tanNpZD0nICsgdGhpcy5pZCgpICsgJ10nIClbIDAgXTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGRlbGV0ZSAkYXJnLmltYWdlO1xuXHRcdGRlbGV0ZSAkYXJnLmljb247XG5cdFx0dGhpcy5lbGVtZW50LnRpcHB5KCB0aGlzLmhhbmRsZV9hcmdzKCAkYXJnLCAkdG9vbHRpcF9rZXkgKSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4gdy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAndG9vbHRpcCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICkgKSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCApID0+IHtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdCQoIGRvY3VtZW50ICkub24oICdjbGljaycsICcjYnVsa19lZGl0JywgKCkgPT4ge1xuXHRcdFx0bGV0ICRmaW5hbF9hcmdzID0geyBwb3N0X2lkczogW10gfSxcblx0XHRcdFx0JGJ1bGtfZWRpdCAgPSAkKCAnI2J1bGstZWRpdCcgKTtcblxuXHRcdFx0JGJ1bGtfZWRpdC5maW5kKCAnI2J1bGstdGl0bGVzJyApLmNoaWxkcmVuKCkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRmaW5hbF9hcmdzLnBvc3RfaWRzLnB1c2goICQoIHRoaXMgKS5hdHRyKCAnaWQnICkucmVwbGFjZSggL14odHRsZSkvaSwgJycgKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQkYnVsa19lZGl0LmZpbmQoICcud3Bvbmlvbi1xdWljay1lZGl0LWZpZWxkc2V0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkZmluYWxfYXJncyA9IHdpbmRvdy53cG9uaW9uLl8ubWVyZ2UoICQoIHRoaXMgKS5zZXJpYWxpemVPYmplY3QoKSwgJGZpbmFsX2FyZ3MgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuICR3cG9uaW9uLmFqYXgoICdzYXZlLWJ1bGstZWRpdCcsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGFzeW5jOiBmYWxzZSxcblx0XHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiAkZmluYWxfYXJncyxcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuY2xhc3MgV1BPbmlvbl9HdXR0ZW5iZXJnIHtcblx0Y29uc3RydWN0b3IoICRpZCA9ICcnLCAkYXJncyA9IHt9ICkge1xuXHRcdHRoaXMuaWQgICA9ICRpZDtcblx0XHR0aGlzLmFyZ3MgPSAkd3Bvbmlvbi5qc19mdW5jKCAkYXJncyApO1xuXG5cdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3Muc2F2ZSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHR0aGlzLmFyZ3Muc2F2ZSA9ICggYmxvY2sgKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNhdmVfaGFuZGxlciggYmxvY2sgKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiB0aGlzLmFyZ3MuZWRpdCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHR0aGlzLmFyZ3MuZWRpdCA9ICggYmxvY2sgKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVkaXRfaGFuZGxlciggYmxvY2sgKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0d2luZG93LndwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSggdGhpcy5pZCwgdGhpcy5hcmdzICk7XG5cdH1cblxuXHRzYXZlX2hhbmRsZXIoIGJsb2NrICkge1xuXHR9XG5cblx0ZWRpdF9oYW5kbGVyKCBibG9jayApIHtcblx0XHRsZXQgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG5cblx0XHRsZXQgJF9wb3N0aWRzICAgICAgICAgICAgPSBKU09OLnN0cmluZ2lmeSggcGFyc2VJbnQoIGpRdWVyeSggJ2lucHV0I3Bvc3RfSUQnICkudmFsKCkgKSApO1xuXHRcdGJsb2NrLmF0dHJpYnV0ZXMucG9zdF9pZCA9ICRfcG9zdGlkcztcblx0XHRsZXQgYmxvY2tfaWQgICAgICAgICAgICAgPSBibG9jay5hdHRyaWJ1dGVzLmJsb2NrX2lkID0gYmxvY2suYXR0cmlidXRlcy5ibG9ja19pZCB8fCBibG9jay5jbGllbnRJZDtcblx0XHRsZXQgJHJlbW90ZSAgICAgICAgICAgICAgPSBlbCggJ2Zvcm0nLCB7XG5cdFx0XHRjbGFzc05hbWU6ICd3cG9uaW9uLWJsb2NrLWdyb3VwLWNvbnRlbnQnLFxuXHRcdFx0J2RhdGEtYmxvY2staWQnOiBibG9ja19pZCxcblx0XHR9LCBbXG5cdFx0XHRlbCggd2luZG93LndwLmNvbXBvbmVudHMuU2VydmVyU2lkZVJlbmRlciwge1xuXHRcdFx0XHRibG9jazogdGhpcy5pZCxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdHBvc3RfaWQ6ICRfcG9zdGlkcyxcblx0XHRcdFx0XHRibG9ja19pZDogYmxvY2tfaWQsXG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdF0gKTtcblxuXG5cdFx0bGV0IGNoaWxkcmVuID0gW107XG5cblx0XHRpZiggdHlwZW9mIHRoaXMuYXJncy5zdHlsZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRpZiggdGhpcy5hcmdzLnN0eWxlID09PSAnZGVmYXVsdCcgKSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goIGVsKCAnZGl2Jywge1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ2FjZi1ibG9jay1ncm91cC1oZWFkaW5nJyxcblx0XHRcdFx0fSwgW1xuXHRcdFx0XHRcdGVsKCAnc3BhbicsIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtJyArIHRoaXMuYXJncy5pY29uXG5cdFx0XHRcdFx0fSApLFxuXHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHR0aGlzLmFyZ3MudGl0bGUsXG5cdFx0XHRcdF0gKSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBzZWxlY3RvciA9ICdmb3JtW2RhdGEtYmxvY2staWQ9XCInICsgYmxvY2tfaWQgKyAnXCJdJztcblxuXHRcdGlmKCBqUXVlcnkoIHNlbGVjdG9yICkubGVuZ3RoIDwgMSApIHtcblx0XHR9XG5cblxuXHRcdC8qaWYoICQoIHNlbGVjdG9yICkubGVuZ3RoIDwgMSApIHtcblx0XHRcdCQoIGRvY3VtZW50ICkub24oICdhY2Jfc2F2ZV9maWVsZHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHRyeVVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKCBibG9jay5pc1NlbGVjdGVkIHx8ICQoIHNlbGVjdG9yICkuaXMoICc6aG92ZXInICkgKSB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIGJsb2NrLnVwZGF0ZVRpbWVvdXQgKTtcblx0XHRcdFx0XHRcdGJsb2NrLnVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCB0cnlVcGRhdGUsIDUwMCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJsb2NrLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdGFjZl9maWVsZHM6IGFjZi5zZXJpYWxpemUoICQoIHNlbGVjdG9yICkgKVsgJ2FjZicgXSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0c2V0VGltZW91dCggdHJ5VXBkYXRlLCAyNTAgKTtcblx0XHRcdH0gKTtcblx0XHR9Ki9cblx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHQvLyAgIGFjZi5kb19hY3Rpb24oJ3JlYWR5JywgJCgnW2RhdGEtYmxvY2staWQ9XCInICsgYmxvY2tfaWQgKyAnXCJdJykpO1xuXHRcdC8vIH0sIDUwMCk7XG5cblx0XHRjaGlsZHJlbi5wdXNoKCAkcmVtb3RlICk7XG5cblx0XHRyZXR1cm4gZWwoICdkaXYnLCB7IGNsYXNzTmFtZTogJ3dwb25pb24tYmxvY2stZ3JvdXAtd3JhcHBlcicgfSwgY2hpbGRyZW4gKTtcblxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XG5cdCQoIGZ1bmN0aW9uKCkge1xuXHRcdGlmKCAhd2luZG93LndwIHx8ICF3aW5kb3cud3AuYmxvY2tzIHx8ICF3aW5kb3cud3AuZWRpdG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRcdC8vbGV0ICRibG9ja3MgICAgID0gd2luZG93LndwLmJsb2Nrcztcblx0XHRcdGxldCAkd3BvX2Jsb2NrcyA9ICR3cG9uaW9uLndpbmRvd0FyZ3MoICd3cG9uaW9uX2d1dHRlbmJlcmdfYmxvY2tzJyApO1xuXHRcdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkd3BvX2Jsb2NrcyApICYmIHdpbmRvdy53cG9uaW9uLl8uaXNBcnJheSggJHdwb19ibG9ja3MgKSApIHtcblx0XHRcdFx0Zm9yKCBsZXQgJGtleSBpbiAkd3BvX2Jsb2NrcyApIHtcblx0XHRcdFx0XHRpZiggJHdwb19ibG9ja3MuaGFzT3duUHJvcGVydHkoICRrZXkgKSApIHtcblx0XHRcdFx0XHRcdG5ldyBXUE9uaW9uX0d1dHRlbmJlcmcoICRrZXksICR3cG9fYmxvY2tzWyAka2V5IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgd3AgKSA9PiB7XG5cdC8qKlxuXHQgKiBGaXhlcyBNZWRpYSBQT1BVUCBNb2RhbCBUbyBXb3JrIFdpdGggV1Bvbmlvbi5cblx0ICovXG5cdGNvbnN0IGZpeF9tZWRpYV91aSA9ICgpID0+IHtcblx0XHRsZXQgJHRhYmxlICA9IGpRdWVyeSggJy5jb21wYXQtYXR0YWNobWVudC1maWVsZHMnICksXG5cdFx0XHQkZmllbGRzID0gJHRhYmxlLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICk7XG5cdFx0JGZpZWxkcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0JHRhYmxlLmJlZm9yZSggalF1ZXJ5KCB0aGlzICkucGFyZW50KCkuaHRtbCgpICk7XG5cdFx0fSApO1xuXG5cdFx0d2luZG93Lndwb25pb25fc2V0dXAoKTtcblx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJHRhYmxlLnBhcmVudCgpLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkgKS5yZWxvYWQoKTtcblx0fTtcblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCkgPT4ge1xuXHRcdGlmKCAkKCAnLmNvbXBhdC1hdHRhY2htZW50LWZpZWxkcycgKS5sZW5ndGggPiAwICYmICQoICdib2R5JyApLmhhc0NsYXNzKCAncG9zdC10eXBlLWF0dGFjaG1lbnQnICkgKSB7XG5cdFx0XHRmaXhfbWVkaWFfdWkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoIHR5cGVvZiB3cC5tZWRpYSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdwLm1lZGlhLmZyYW1lcy5icm93c2UgIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHR3cC5tZWRpYS5mcmFtZXMuYnJvd3NlLm9uKCAnZWRpdDphdHRhY2htZW50JywgKCkgPT4ge1xuXHRcdFx0XHRcdGZpeF9tZWRpYV91aSgpO1xuXHRcdFx0XHRcdHdwLm1lZGlhLmZyYW1lcy5lZGl0Lm9uKCAnYXR0YWNobWVudDpjb21wYXQ6cmVhZHknLCAoKSA9PiBmaXhfbWVkaWFfdWkoKSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59ICkoIHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd3AgKTtcblxuIiwiaW1wb3J0IFdQT25pb25fTW9kdWxlIGZyb20gJy4uL2NvcmUvbW9kdWxlJztcbmltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG4vKipcbiAqIFdQT25pb24gTWV0YWJveCBNb2R1bGUgSGFuZGxlci5cbiAqL1xuY2xhc3MgV1BPbmlvbl9NZXRhYm94X01vZHVsZSBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0LyoqXG5cdCAqIEluaXRzIE1vZHVsZS5cblx0ICovXG5cdG1vZHVsZV9pbml0KCkge1xuXHRcdHRoaXMubWVudSgpO1xuXHRcdHRoaXMuZWxlbWVudC5vbiggJ2NsaWNrJywgJ2gyLmFqYXgtY29udGFpbmVyIGJ1dHRvbicsIHRoaXMuc2F2ZV9oYW5kbGVyICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBNZXRhYm94IE1lbnUnc1xuXHQgKi9cblx0bWVudSgpIHtcblx0XHRsZXQgJGVsZW0gPSB0aGlzLmVsZW1lbnQ7XG5cdFx0JGVsZW0ub24oICdjbGljaycsICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgbGkgYScsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYoIGpRdWVyeSggdGhpcyApLmhhc0NsYXNzKCAnZHJvcGRvd24nICkgKSB7XG5cdFx0XHRcdGlmKCBqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuaXMoICc6dmlzaWJsZScgKSApIHtcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5uZXh0KCAndWwnICkuc2xpZGVUb2dnbGUoICdmYXN0JyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtLmZpbmQoICd1bC53cG9uaW9uLW1ldGFib3gtcGFyZW50LW1lbnUgbGkgdWwnICkuc2xpZGVVcCggJ2Zhc3QnICk7XG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCggJ3VsJyApLnNsaWRlVG9nZ2xlKCAnZmFzdCcgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0ICRocmVmICAgICAgICAgICA9IHdpbmRvdy53cG9uaW9uLmhlbHBlci51cmxfcGFyYW1zKCBqUXVlcnkoIHRoaXMgKS5hdHRyKCAnZGF0YS1ocmVmJyApICksXG5cdFx0XHRcdFx0JHBhcmVudCAgICAgICAgID0gJ3dwb25pb24tdGFiLScgKyAkaHJlZlsgJ3BhcmVudC1pZCcgXSxcblx0XHRcdFx0XHQkc2VjdGlvbiAgICAgICAgPSAoICRocmVmWyAnc2VjdGlvbi1pZCcgXSAhPT0gdW5kZWZpbmVkICkgPyAkcGFyZW50ICsgJy0nICsgJGhyZWZbICdzZWN0aW9uLWlkJyBdIDogZmFsc2UsXG5cdFx0XHRcdFx0JHBhcmVudF9hY3RpdmVzID0gJGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLXBhcmVudC13cmFwcycgKSxcblx0XHRcdFx0XHQkY3VycmVudCAgICAgICAgPSAkZWxlbS5maW5kKCAnZGl2IycgKyAkcGFyZW50ICk7XG5cblx0XHRcdFx0JGVsZW0uZmluZCggJ2Rpdi53cG9uaW9uLXNlY3Rpb24td3JhcHMnICkuaGlkZSgpO1xuXHRcdFx0XHQkcGFyZW50X2FjdGl2ZXMuaGlkZSgpO1xuXG5cdFx0XHRcdGlmKCAkaHJlZlsgJ3NlY3Rpb24taWQnIF0gIT09IHVuZGVmaW5lZCAmJiAkaHJlZlsgJ3BhcmVudC1pZCcgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdCRjdXJyZW50LmZpbmQoICdkaXYud3Bvbmlvbi1zZWN0aW9uLXdyYXBzJyApLmhpZGUoKTtcblx0XHRcdFx0XHQkY3VycmVudC5maW5kKCAnIGRpdiMnICsgJHNlY3Rpb24gKS5zaG93KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkY3VycmVudC5zaG93KCk7XG5cblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhLmFjdGl2ZSAnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUgJyApO1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSA+IGxpID4gYScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdFx0JGVsZW0uZmluZCggJ3VsLndwb25pb24tbWV0YWJveC1wYXJlbnQtbWVudSBhW2RhdGEtd3Bvbmlvbi1pZD1cIndwb25pb25fbWVudV8nICsgJGhyZWZbICdwYXJlbnQtaWQnIF0gKyAnXCJdJyApXG5cdFx0XHRcdFx0IC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBBamF4IFNhdmUgSGFuZGxlci5cblx0ICogQHBhcmFtIGVcblx0ICovXG5cdHNhdmVfaGFuZGxlciggZSApIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICRwYXJlbnQgPSBqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKSxcblx0XHRcdCRiYXNlICAgPSAkcGFyZW50LnBhcmVudCgpLnBhcmVudCgpLFxuXHRcdFx0JGhpZGRlbiA9ICRwYXJlbnQuZmluZCggJ2Rpdi53cG9uaW9uLW1ldGFib3gtc2VjdXJlLWRhdGEnICk7XG5cblx0XHQkYmFzZS5ibG9jayggeyBtZXNzYWdlOiBudWxsLCBvdmVybGF5Q1NTOiB7IGJhY2tncm91bmQ6ICcjMDAwJywgb3BhY2l0eTogMC43IH0gfSApO1xuXG5cdFx0JGhpZGRlbi5maW5kKCAnaW5wdXQnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5hdHRyKCAnbmFtZScsIGpRdWVyeSggdGhpcyApLmF0dHIoICdpZCcgKSApO1xuXHRcdH0gKTtcblx0XHRsZXQgJGZpZWxkcyA9ICRwYXJlbnQucGFyZW50KCkuZmluZCggJzppbnB1dCcgKTtcblx0XHRsZXQgJHZhbHVlcyA9ICRmaWVsZHMuc2VyaWFsaXplKCk7XG5cdFx0JGhpZGRlbi5maW5kKCAnaW5wdXQnICkucmVtb3ZlQXR0ciggJ25hbWUnICk7XG5cblx0XHQkd3Bvbmlvbi5hamF4KCAnc2F2ZV9tZXRhYm94JywgeyBkYXRhOiAkdmFsdWVzIH0sIGZ1bmN0aW9uKCByZXMgKSB7XG5cdFx0XHQkYmFzZS5odG1sKCByZXMgKTtcblx0XHRcdCRiYXNlLnVuYmxvY2soKTtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkYmFzZS5maW5kKCAnLndwb25pb24tZnJhbWV3b3JrJyApICkucmVsb2FkKCk7XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3aW5kb3csIGRvY3VtZW50LCAkICkgPT4ge1xuXHQkKCBmdW5jdGlvbigpIHtcblx0XHQkKCAnZGl2LnBvc3Rib3gud3Bvbmlvbi1tZXRhYm94JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmV3IFdQT25pb25fTWV0YWJveF9Nb2R1bGUoICQoIHRoaXMgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggd2luZG93LCBkb2N1bWVudCwgalF1ZXJ5ICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX01vZHVsZSBmcm9tICcuLi9jb3JlL21vZHVsZSc7XG5pbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vY29yZS9jb3JlJztcblxuLyoqXG4gKiBXUE9uaW9uIFF1aWNrIEVkaXQgTW9kdWxlIEhhbmRsZXIuXG4gKi9cbmNsYXNzIFdQT25pb25fUXVpY2tfRWRpdCBleHRlbmRzIFdQT25pb25fTW9kdWxlIHtcblx0LyoqXG5cdCAqIE1vZHVsZSBJbml0LlxuXHQgKi9cblx0bW9kdWxlX2luaXQoKSB7XG5cdFx0dGhpcy5wb3N0X2lkID0gdGhpcy5jb250eHQ7XG5cdFx0bGV0ICRpZCAgICAgID0gJHdwb25pb24uZmllbGRJRCggdGhpcy5lbGVtZW50ICkgKyAnXycgKyB0aGlzLnBvc3RfaWQ7XG5cdFx0dGhpcy52YWx1ZXMgID0gJHdwb25pb24uZmllbGRBcmdzKCAkaWQsIGZhbHNlICk7XG5cblx0XHRpZiggdGhpcy52YWx1ZXMuaHRtbCApIHtcblx0XHRcdHRoaXMudmFsdWVzLmh0bWwgPSBqUXVlcnkoIHRoaXMudmFsdWVzLmh0bWwgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnQoKS5odG1sKCB0aGlzLnZhbHVlcy5odG1sLmZpbmQoICc+IGRpdicgKSApO1xuXHRcdH1cblxuXHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCB0aGlzLmVsZW1lbnQgKS5yZWxvYWQoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCBkb2N1bWVudCwgJCwgd3AgKSA9PiB7XG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRsZXQgJGxpc3QgPSAkKCAnI3RoZS1saXN0JyApO1xuXHRcdGlmKCAkbGlzdC5sZW5ndGggPiAwICkge1xuXHRcdFx0JGxpc3Qub24oICdjbGljaycsICcuZWRpdGlubGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgcG9zdF9pZCA9IGpRdWVyeSggdGhpcyApLmNsb3Nlc3QoICd0cicgKS5hdHRyKCAnaWQnICk7XG5cdFx0XHRcdHBvc3RfaWQgICAgID0gcG9zdF9pZC5yZXBsYWNlKCAncG9zdC0nLCAnJyApO1xuXHRcdFx0XHQkKCAndHIjZWRpdC0nICsgcG9zdF9pZCApLmZpbmQoICcud3Bvbmlvbi1mcmFtZXdvcmsnICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bmV3IFdQT25pb25fUXVpY2tfRWRpdCggalF1ZXJ5KCB0aGlzICksIHBvc3RfaWQgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdwICk7XG5cbiIsImltcG9ydCBXUE9uaW9uX0RlcGVuZGVuY3kgZnJvbSAnLi4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRpb24gZnJvbSAnLi4vY29yZS92YWxpZGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdyApID0+IHtcblx0alF1ZXJ5KCB3aW5kb3cgKS5vbiggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0LyoqXG5cdFx0ICogR2xvYmFsIFZhcmlhYmxlXG5cdFx0ICogd2luZG93Lndwb25pb24udmMgLyB3aW5kb3cud3Bvbmlvbl92Y1xuXHRcdCAqIEB0eXBlIHt7ZmllbGRzOiB7YWJzdHJhY3Q6ICh7bmV3KCo9LCAqPSwgKj0pOiB7cGFyYW1fbmFtZTogKiwgc2F2ZSgqPSwgKik6ICh1bmRlZmluZWQpLCB2Y19zYXZlKCo9LCAqPSk6IGJvb2xlYW4sIHNpbXBsZV9hcnJheSgqKTogKiwga2V5X3ZhbHVlX2FycmF5KCo9KTogc3RyaW5nLCBrZXlfdmFsdWVfbXVsdGlfYXJyYXkoKj0pOiBzdHJpbmcsIHNvcnRlcl92YWx1ZXMoKj0pOiAqLCBlbmNvZGVfY29udGVudCgqPSk6ICosIGlzX3ZjX3BhcmFtX2VsZW0oKj0pOiBib29sZWFuLCBpbml0X3NpbmdsZV9maWVsZDogeygqPSwgKj0pOiB2b2lkLCAoKj0sICo9KTogdm9pZH0sIGluaXQoKSwganNfZXJyb3IoKik6IHZvaWQsIGpzX2Vycm9yX2hhbmRsZXIoKj0pOiB2b2lkLCBqc192YWxpZGF0b3IoKTogdm9pZCwgbWF5YmVfanNfdmFsaWRhdGVfZWxlbSgqPSwgKj0pOiB2b2lkLCBqc192YWxpZGF0ZV9lbGVtKCo9LCAqKTogdm9pZCwgaGFuZGxlX2FyZ3MoKj0sICo9KTogKCp8JGRhdGEpLCBmaWVsZF9kZWJ1ZygpOiAodW5kZWZpbmVkKSwgb3B0aW9ucygpOiAqLCBvcHRpb24oKj0sICo9KTogKiwgaWQoKTogKiwgbW9kdWxlKCk6ICosIHBsdWdpbl9pZCgpOiAqLCBhamF4KCo9LCAqPSk6ICosIGluaXRfZmllbGQoKj0sICo9KTogdm9pZCwgcmVsb2FkKCk6ICosIHNldF9hcmdzKCopOiAqLCBnZXRfZmllbGRfcGFyZW50X2J5X2lkKCo9KTogKCp8alF1ZXJ5fEhUTUxFbGVtZW50KSwgbW9kdWxlX2luaXQoKSwgc2V0X2VsZW1lbnQoKj0pOiAqLCBzZXRfY29udHh0KCopOiAqLCBob29rOiAqLCBlbGVtZW50OiAqLCBjb250eHQ6ICp9LCBuZXcoKj0sICo9LCAqPSk6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn0sIG5ldygqPSwgKj0pOiB7cGFyYW1fbmFtZTogKiwgc2F2ZSgqPSwgKik6ICh1bmRlZmluZWQpLCB2Y19zYXZlKCo9LCAqPSk6IGJvb2xlYW4sIHNpbXBsZV9hcnJheSgqKTogKiwga2V5X3ZhbHVlX2FycmF5KCo9KTogc3RyaW5nLCBrZXlfdmFsdWVfbXVsdGlfYXJyYXkoKj0pOiBzdHJpbmcsIHNvcnRlcl92YWx1ZXMoKj0pOiAqLCBlbmNvZGVfY29udGVudCgqPSk6ICosIGlzX3ZjX3BhcmFtX2VsZW0oKj0pOiBib29sZWFuLCBpbml0X3NpbmdsZV9maWVsZDogeygqPSwgKj0pOiB2b2lkLCAoKj0sICo9KTogdm9pZH0sIGluaXQoKSwganNfZXJyb3IoKik6IHZvaWQsIGpzX2Vycm9yX2hhbmRsZXIoKj0pOiB2b2lkLCBqc192YWxpZGF0b3IoKTogdm9pZCwgbWF5YmVfanNfdmFsaWRhdGVfZWxlbSgqPSwgKj0pOiB2b2lkLCBqc192YWxpZGF0ZV9lbGVtKCo9LCAqKTogdm9pZCwgaGFuZGxlX2FyZ3MoKj0sICo9KTogKCp8JGRhdGEpLCBmaWVsZF9kZWJ1ZygpOiAodW5kZWZpbmVkKSwgb3B0aW9ucygpOiAqLCBvcHRpb24oKj0sICo9KTogKiwgaWQoKTogKiwgbW9kdWxlKCk6ICosIHBsdWdpbl9pZCgpOiAqLCBhamF4KCo9LCAqPSk6ICosIGluaXRfZmllbGQoKj0sICo9KTogdm9pZCwgcmVsb2FkKCk6ICosIHNldF9hcmdzKCopOiAqLCBnZXRfZmllbGRfcGFyZW50X2J5X2lkKCo9KTogKCp8alF1ZXJ5fEhUTUxFbGVtZW50KSwgbW9kdWxlX2luaXQoKSwgc2V0X2VsZW1lbnQoKj0pOiAqLCBzZXRfY29udHh0KCopOiAqLCBob29rOiAqLCBlbGVtZW50OiAqLCBjb250eHQ6ICp9LCBwcm90b3R5cGU6IHtwYXJhbV9uYW1lOiAqLCBzYXZlKCo9LCAqKTogKHVuZGVmaW5lZCksIHZjX3NhdmUoKj0sICo9KTogYm9vbGVhbiwgc2ltcGxlX2FycmF5KCopOiAqLCBrZXlfdmFsdWVfYXJyYXkoKj0pOiBzdHJpbmcsIGtleV92YWx1ZV9tdWx0aV9hcnJheSgqPSk6IHN0cmluZywgc29ydGVyX3ZhbHVlcygqPSk6ICosIGVuY29kZV9jb250ZW50KCo9KTogKiwgaXNfdmNfcGFyYW1fZWxlbSgqPSk6IGJvb2xlYW4sIGluaXRfc2luZ2xlX2ZpZWxkOiB7KCo9LCAqPSk6IHZvaWQsICgqPSwgKj0pOiB2b2lkfSwgaW5pdCgpLCBqc19lcnJvcigqKTogdm9pZCwganNfZXJyb3JfaGFuZGxlcigqPSk6IHZvaWQsIGpzX3ZhbGlkYXRvcigpOiB2b2lkLCBtYXliZV9qc192YWxpZGF0ZV9lbGVtKCo9LCAqPSk6IHZvaWQsIGpzX3ZhbGlkYXRlX2VsZW0oKj0sICopOiB2b2lkLCBoYW5kbGVfYXJncygqPSwgKj0pOiAoKnwkZGF0YSksIGZpZWxkX2RlYnVnKCk6ICh1bmRlZmluZWQpLCBvcHRpb25zKCk6ICosIG9wdGlvbigqPSwgKj0pOiAqLCBpZCgpOiAqLCBtb2R1bGUoKTogKiwgcGx1Z2luX2lkKCk6ICosIGFqYXgoKj0sICo9KTogKiwgaW5pdF9maWVsZCgqPSwgKj0pOiB2b2lkLCByZWxvYWQoKTogKiwgc2V0X2FyZ3MoKik6ICosIGdldF9maWVsZF9wYXJlbnRfYnlfaWQoKj0pOiAoKnxqUXVlcnl8SFRNTEVsZW1lbnQpLCBtb2R1bGVfaW5pdCgpLCBzZXRfZWxlbWVudCgqPSk6ICosIHNldF9jb250eHQoKik6ICosIGhvb2s6ICosIGVsZW1lbnQ6ICosIGNvbnR4dDogKn19fCopfX19XG5cdFx0ICovXG5cdFx0d2luZG93Lndwb25pb24udmMgPSB3aW5kb3cud3Bvbmlvbl92YyA9IHtcblx0XHRcdGZpZWxkczoge1xuXHRcdFx0XHRhYnN0cmFjdDogcmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL2ZpZWxkJyApLmRlZmF1bHQsXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTaW1wbGUgRnVuY3Rpb24gVG8gSW5pdCBXUG9uaW9uIFZDIE1vZHVsZS5cblx0XHQgKi9cblx0XHR3aW5kb3cud3Bvbmlvbl92Y19pbml0ID0gKCkgPT4ge1xuXHRcdFx0bGV0ICRlbGVtZW50ID0galF1ZXJ5KCAnLndwb25pb24tZnJhbWV3b3JrLndwb25pb24tbW9kdWxlLXZjJyApO1xuXG5cdFx0XHRpZiggJGVsZW1lbnQubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0d3Bvbmlvbl9zZXR1cCgpO1xuXG5cdFx0XHRcdCRlbGVtZW50LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCBqUXVlcnkoIHRoaXMgKSApLnJlbG9hZCgpO1xuXHRcdFx0XHRcdHdpbmRvdy53cG9uaW9uX3ZjX2ZpZWxkKCBqUXVlcnkoIHRoaXMgKSApLnJlbG9hZCgpO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEhhbmRsZXMgV1BPbmlvbiBWQyBGaWVsZCBEZXBlbmRlbmN5LlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJGVsZW1lbnQsIHt9LCB7XG5cdFx0XHRcdFx0bG9nOiBmYWxzZSxcblx0XHRcdFx0XHRzaG93OiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdFx0ZWwucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2xpZGVEb3duKCk7XG5cdFx0XHRcdFx0XHRlbC5maW5kKCAnOmlucHV0JyApLnJlbW92ZUNsYXNzKCAnd3Bvbmlvbi1kZXBlbmRlbnQnICk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRoaWRlOiAoIGVsICkgPT4ge1xuXHRcdFx0XHRcdFx0ZWwucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2xpZGVVcCgpO1xuXHRcdFx0XHRcdFx0ZWwuZmluZCggJzppbnB1dCcgKS5hZGRDbGFzcyggJ3dwb25pb24tZGVwZW5kZW50JyApO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSGFuZGxlcyBXUE9uaW9uIFZDIEZpZWxkIFZhbGlkYXRpb25zLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0bmV3IFdQT25pb25fVmFsaWRhdGlvbiggalF1ZXJ5KCAnLndwYl9lZGl0X2Zvcm1fZWxlbWVudHMnICkgKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogV1BvbmlvbiBWQyBGaWVsZCBDbGFzcyBJbnNzdGFuY2UgQ3JlYXRvci5cblx0XHQgKiBAcGFyYW0gJGVsZW1cblx0XHQgKiBAcGFyYW0gJGNvbnR4dFxuXHRcdCAqIEByZXR1cm5zIHt3aW5kb3cud3Bvbmlvbi52Yy5maWVsZHMuYWJzdHJhY3R9XG5cdFx0ICovXG5cdFx0d2luZG93Lndwb25pb25fdmNfZmllbGQgPSAoICRlbGVtLCAkY29udHh0ID0ge30gKSA9PiBuZXcgd2luZG93Lndwb25pb24udmMuZmllbGRzLmFic3RyYWN0KCAkZWxlbSwgJGNvbnR4dCApO1xuXG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gVXNlZCBvdXRzaWRlIG9mIFdQT25pb24gVG8gQ3JlYXRlIFZDIEZpZWxkXG5cdFx0ICogQHBhcmFtICRpbml0X21ldGhvZFxuXHRcdCAqIEBwYXJhbSAkbWV0aG9kc1xuXHRcdCAqIEByZXR1cm5zIHt7aW5pdDogKiwgbmV3KCk6ICRjbGFzcywgcHJvdG90eXBlOiAkY2xhc3N9fVxuXHRcdCAqL1xuXHRcdHdpbmRvdy53cG9uaW9uX2NyZWF0ZV92Y19maWVsZCA9ICggJGluaXRfbWV0aG9kLCAkbWV0aG9kcyA9IGZhbHNlICkgPT4ge1xuXHRcdFx0bGV0ICRvcmdfY2xhc3MgPSByZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvZmllbGQnICkuZGVmYXVsdDtcblx0XHRcdGxldCAkY2xhc3MgICAgID0gY2xhc3MgZXh0ZW5kcyAkb3JnX2NsYXNzIHtcblx0XHRcdH07XG5cblx0XHRcdCRjbGFzcy5wcm90b3R5cGUuaW5pdCA9ICRpbml0X21ldGhvZDtcblxuXHRcdFx0aWYoIHdpbmRvdy53cG9uaW9uLl8uaXNPYmplY3QoICRtZXRob2RzICkgKSB7XG5cdFx0XHRcdGZvciggbGV0ICRrZXkgaW4gJG1ldGhvZHMgKSB7XG5cdFx0XHRcdFx0aWYoICRtZXRob2RzLmhhc093blByb3BlcnR5KCAka2V5ICkgKSB7XG5cdFx0XHRcdFx0XHQkY2xhc3MucHJvdG90eXBlWyAka2V5IF0gPSAkbWV0aG9kc1sgJGtleSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICRjbGFzcztcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogTG9hZHMgQWxsIFJlcXVpcmVkIEZpZWxkcy5cblx0XHQgKi9cblx0XHRyZXF1aXJlKCAnLi92aXN1YWwtY29tcG9zZXIvc2luZ2xlLXZhbHVlJyApO1xuXHRcdHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9hbGwtZmllbGRzJyApO1xuXHRcdHJlcXVpcmUoICcuL3Zpc3VhbC1jb21wb3Nlci9zZWxlY3QnICk7XG5cdFx0cmVxdWlyZSggJy4vdmlzdWFsLWNvbXBvc2VyL2NoZWNrYm94LXJhZGlvJyApO1xuXHR9ICk7XG59ICkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFdQT25pb25fVkNfRmllbGQgZnJvbSAnLi9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9WQ19GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuaXNfdmNfcGFyYW1fZWxlbSgpICkge1xuXHRcdFx0dGhpcy5pbnB1dF9jaGFuZ2UoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5vbiggJ2NoYW5nZScsICgpID0+IHRoaXMuaW5wdXRfY2hhbmdlKCkgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5vbiggJ3dwb25pb24tc29ydGVyLXVwZGF0ZWQnLCAoKSA9PiB0aGlzLmlucHV0X2NoYW5nZSgpICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uIEhvb2tzIFdpdGggOmlucHV0IGNoYW5nZSBldmVuIGFuZCB0cmlnZ2VycyBzYXZlIGZ1bmN0aW9uLlxuXHQgKi9cblx0aW5wdXRfY2hhbmdlKCkge1xuXHRcdHRoaXMuc2F2ZSggdGhpcy5pbnB1dF9kYXRhKCksICdzb3J0ZXJfdmFsdWVzJyApO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCAnOmlucHV0JyApLm9uKCAnY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlKCB0aGlzLmlucHV0X2RhdGEoKSwgJ3NvcnRlcl92YWx1ZXMnICk7XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4ge1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdrZXl2YWx1ZV9wYWlyJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdiYWNrZ3JvdW5kJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICd3cF9saW5rcycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZmllbGRzZXQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2FjY29yZGlvbicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZ3JvdXAnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2pxdWVyeV90YWInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3NvcnRlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnY2xvbmVfZWxlbWVudCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZm9udF9zZWxlY3RvcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnZGF0ZV9waWNrZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG59ICkoIHdpbmRvdyApO1xuXG4iLCJpbXBvcnQgV1BPbmlvbl9WQ19GaWVsZCBmcm9tICcuL2ZpZWxkJztcblxuY2xhc3MgZmllbGQgZXh0ZW5kcyBXUE9uaW9uX1ZDX0ZpZWxkIHtcblx0LyoqXG5cdCAqIEluaXRzIEZpZWxkLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiggdGhpcy5pc192Y19wYXJhbV9lbGVtKCkgKSB7XG5cdFx0XHRpZiggdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCAnd3Bvbmlvbi1lbGVtZW50LXJhZGlvJyApICYmIDAgPT09IHRoaXMuZWxlbWVudC5maW5kKCAnLndwb25pb24tY2hlY2tib3gtcmFkaW8tZ3JvdXAnICkubGVuZ3RoICkge1xuXHRcdFx0XHR0aGlzLmhhbmRsZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dCcgKS5vbiggJ2NoYW5nZScsICgpID0+IHRoaXMuaGFuZGxlKCkgKTtcblx0XHRcdH0gZWxzZSBpZiggKCB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmxlbmd0aCA+IDEgKSApIHtcblx0XHRcdFx0dGhpcy5oYW5kbGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICc6aW5wdXQnICkub24oICdjaGFuZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZSgpICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgJHRoaXMgPSB0aGlzO1xuXHRcdFx0XHRsZXQgJHZhbCAgPSB0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmF0dHIoICd2YWx1ZScgKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoICdpbnB1dCcgKS5hdHRyKCAnZGF0YS1vcmd2YWwnLCAkdmFsICk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkdGhpcy5oYW5kbGVfc2luZ2xlX2NoYW5nZSggalF1ZXJ5KCB0aGlzICkgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCggJ2lucHV0JyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlzLmhhbmRsZV9zaW5nbGVfY2hhbmdlKCBqUXVlcnkoIHRoaXMgKSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgU2luZ2xlIENoZWNrYm94IENoYW5nZSBFdmVudHMuXG5cdCAqIEBwYXJhbSAkZWxlbVxuXHQgKi9cblx0aGFuZGxlX3NpbmdsZV9jaGFuZ2UoICRlbGVtICkge1xuXHRcdGlmKCAkZWxlbS5pcyggJzpjaGVja2VkJyApICkge1xuXHRcdFx0JGVsZW0udmFsKCAkZWxlbS5hdHRyKCAnZGF0YS1vcmd2YWwnICkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGVsZW0udmFsKCAnZmFsc2UnICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgTXVsdGlwbGUgQ2hlY2tib3hlc1xuXHQgKi9cblx0aGFuZGxlKCkge1xuXHRcdHRoaXMuc2F2ZSggdGhpcy5pbnB1dF9kYXRhKCksICdzb3J0ZXJfdmFsdWVzJyApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4ge1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjaGVja2JveF9yYWRpbycsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaW1hZ2Vfc2VsZWN0JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdjb2xvcl9wYWxldHRlJywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdzd2l0Y2hlcicsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcbn0gKSggd2luZG93ICk7XG4iLCIvKiBnbG9iYWwgd3Bvbmlvbl9pbml0X2ZpZWxkOnRydWUgKi9cbmltcG9ydCBXUE9uaW9uX0ZpZWxkIGZyb20gJy4uLy4uL2NvcmUvZmllbGQnO1xuXG5jb25zdCBiYXNlNjRfZW5jb2RlID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICkuYmFzZTY0X2VuY29kZTtcbmNvbnN0IHJhd3VybGVuY29kZSAgPSByZXF1aXJlKCAndnNwLWpzLWhlbHBlci9pbmRleCcgKS5yYXd1cmxlbmNvZGU7XG5cbi8qKlxuICogQ3VzdG9tIFZDIEFic3RyYWN0IEZpZWxkIENsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFdQT25pb25fRmllbGQge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRzZWxlY3RvclxuXHQgKiBAcGFyYW0gJGNvbnRleHRcblx0ICogQHBhcmFtICRjb25maWdcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkc2VsZWN0b3IsICRjb250ZXh0LCAkY29uZmlnID0ge30gKSB7XG5cdFx0c3VwZXIoICRzZWxlY3RvciwgJGNvbnRleHQsICRjb25maWcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIFZpc3VhbCBDb21wb3NlciBQYXJhbSBuYW1lLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldCBwYXJhbV9uYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuZGF0YSggJ3BhcmFtLW5hbWUnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIEFuZCBDb252ZXJ0cyBWYWx1ZSBUbyBTYXZlIGludG8gVkMuXG5cdCAqIEBwYXJhbSAkc2F2ZV9kYXRhXG5cdCAqIEBwYXJhbSAkdHlwZVxuXHQgKi9cblx0c2F2ZSggJHNhdmVfZGF0YSwgJHR5cGUgKSB7XG5cdFx0aWYoICRzYXZlX2RhdGEgPT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0ICR2YWx1ZSA9ICcnO1xuXG5cdFx0aWYoICRzYXZlX2RhdGEgIT09ICcnICkge1xuXHRcdFx0aWYoIHR5cGVvZiAkc2F2ZV9kYXRhID09PSAnb2JqZWN0JyAmJiAkdHlwZSA9PT0gJ2FycmF5JyApIHtcblx0XHRcdFx0JHZhbHVlID0gdGhpcy5zaW1wbGVfYXJyYXkoICRzYXZlX2RhdGEgKTtcblx0XHRcdH0gZWxzZSBpZiggdHlwZW9mICRzYXZlX2RhdGEgPT09ICdvYmplY3QnICYmICR0eXBlID09PSAna2V5X3ZhbHVlX2FycmF5JyApIHtcblx0XHRcdFx0JHZhbHVlID0gdGhpcy5rZXlfdmFsdWVfYXJyYXkoICRzYXZlX2RhdGEgKTtcblx0XHRcdH0gZWxzZSBpZiggdHlwZW9mICRzYXZlX2RhdGEgPT09ICdvYmplY3QnICYmICR0eXBlID09PSAna2V5X3ZhbHVlX211bHRpX2FycmF5JyApIHtcblx0XHRcdFx0JHZhbHVlID0gdGhpcy5rZXlfdmFsdWVfbXVsdGlfYXJyYXkoICRzYXZlX2RhdGEgKTtcblx0XHRcdH0gZWxzZSBpZiggdHlwZW9mICRzYXZlX2RhdGEgPT09ICdvYmplY3QnICYmICR0eXBlID09PSAnc29ydGVyX3ZhbHVlcycgKSB7XG5cdFx0XHRcdCR2YWx1ZSA9IHRoaXMuc29ydGVyX3ZhbHVlcyggJHNhdmVfZGF0YSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnZjX3NhdmUoICR2YWx1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNhdmVzIEdpdmVuIFZhbHVlIFRvIFZpc3VhbCBDb21wb3Nlci5cblx0ICogQHBhcmFtICRwYXJhbV9uYW1lXG5cdCAqIEBwYXJhbSAkdmFsdWVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHR2Y19zYXZlKCAkdmFsdWUsICRwYXJhbV9uYW1lID0gdGhpcy5wYXJhbV9uYW1lICkge1xuXHRcdGxldCAka2V5ID0gJ2RpdiN3cG9uaW9uLXZjLXNldHRpbmdzJztcblx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICRrZXkgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKCAnPGRpdiBpZD1cIndwb25pb24tdmMtc2V0dGluZ3NcIiBjbGFzcz1cImhpZGRlblwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTt2aXNpYmlsaXR5OiBoaWRkZW47XCIgPjwvZGl2PicgKTtcblx0XHR9XG5cblx0XHRpZiggdGhpcy5lbGVtZW50LmZpbmQoICRrZXkgKS5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRsZXQgJHBhcmVudCA9IHRoaXMuZWxlbWVudC5maW5kKCAka2V5ICk7XG5cdFx0XHRpZiggJHBhcmVudC5maW5kKCAnPiAjJyArICRwYXJhbV9uYW1lICsgJy53cGJfdmNfcGFyYW1fdmFsdWUnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZCggalF1ZXJ5KCAnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlwiIGlkPVwiJyArICRwYXJhbV9uYW1lICsgJ1wiIG5hbWU9XCInICsgJHBhcmFtX25hbWUgKyAnXCIgY2xhc3M9XCJ3cGJfdmNfcGFyYW1fdmFsdWVcIiAvPicgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHQkcGFyZW50LmZpbmQoICc+ICMnICsgJHBhcmFtX25hbWUgKyAnLndwYl92Y19wYXJhbV92YWx1ZScgKS52YWwoICR2YWx1ZSApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBBbiBBcnJheSBJbnRvIFN0cmluZyBVc2luZyAsXG5cdCAqIEBwYXJhbSAkc2F2ZV9kYXRhXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0c2ltcGxlX2FycmF5KCAkc2F2ZV9kYXRhICkge1xuXHRcdHJldHVybiAkc2F2ZV9kYXRhLmpvaW4oICcsJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIEFuIEFycmF5IEludG8gS2V5dmFsdWUgYXMgYmVsb3dcblx0ICoga2V5OnZhbHVlfGtleTI6dmFsdWUyXG5cdCAqXG5cdCAqIEBwYXJhbSAkc2F2ZV9kYXRhXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRrZXlfdmFsdWVfYXJyYXkoICRzYXZlX2RhdGEgKSB7XG5cdFx0bGV0ICRyID0gW107XG5cdFx0alF1ZXJ5LmVhY2goICRzYXZlX2RhdGEsIGZ1bmN0aW9uKCAkaywgJHYgKSB7XG5cdFx0XHRsZXQgJHMgPSAkayArICc6JyArICR2O1xuXHRcdFx0JHIucHVzaCggJHMgKTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuICRyLmpvaW4oICd8JyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIE11bHRpcGxlIEFycmF5IGFzIGJlbG93XG5cdCAqIGtleTp2YWx1ZSx2YWx1ZTJ8a2V5Mjp2YWx1ZTMsdmFsdWU0XG5cdCAqXG5cdCAqIEBwYXJhbSAkc2F2ZV9kYXRhXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRrZXlfdmFsdWVfbXVsdGlfYXJyYXkoICRzYXZlX2RhdGEgKSB7XG5cdFx0bGV0ICRyID0gW107XG5cdFx0alF1ZXJ5LmVhY2goICRzYXZlX2RhdGEsIGZ1bmN0aW9uKCAkaywgJHYgKSB7XG5cdFx0XHRpZiggdHlwZW9mICR2ID09PSAnb2JqZWN0JyApIHtcblx0XHRcdFx0JHYgPSAkdi5qb2luKCAnLCcgKTtcblx0XHRcdH1cblx0XHRcdGxldCAkcyA9ICRrICsgJzonICsgJHY7XG5cdFx0XHQkci5wdXNoKCAkcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gJHIuam9pbiggJ3wnICk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRzYXZlX2RhdGFcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzb3J0ZXJfdmFsdWVzKCAkc2F2ZV9kYXRhICkge1xuXHRcdHJldHVybiB0aGlzLmVuY29kZV9jb250ZW50KCBKU09OLnN0cmluZ2lmeSggJHNhdmVfZGF0YSApICk7XG5cdH1cblxuXHQvKipcblx0ICogRW5jb2RlcyBTdHJpbmcgSW50byBCYXNlNjQuXG5cdCAqIEBwYXJhbSAkZGF0YVxuXHQgKi9cblx0ZW5jb2RlX2NvbnRlbnQoICRkYXRhICkge1xuXHRcdHJldHVybiBiYXNlNjRfZW5jb2RlKCByYXd1cmxlbmNvZGUoICRkYXRhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgZ2l2ZW4gZWxlbWVudCBpcyBob29rZWQgVG8gVmlzdWFsIENvbXBvc2VyLlxuXHQgKiBAcGFyYW0gJHBhcmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGlzX3ZjX3BhcmFtX2VsZW0oICRwYXJlbnQgPSB0aGlzLmVsZW1lbnQgKSB7XG5cdFx0aWYoICRwYXJlbnQuZGF0YSggJ3BhcmFtLW5hbWUnICkgPT09IHVuZGVmaW5lZCB8fCAkcGFyZW50LmRhdGEoICdwYXJhbS1uYW1lJyApID09PSAnJyApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdHMgU2luZ2xlIEZpZWxkLlxuXHQgKiBAcGFyYW0gJHR5cGVcblx0ICogQHBhcmFtICRlbGVtXG5cdCAqL1xuXHRpbml0X3NpbmdsZV9maWVsZCggJHR5cGUsICRlbGVtICkge1xuXHRcdHdwb25pb25faW5pdF9maWVsZCggJHR5cGUsICRlbGVtLCAndmMnLCBmYWxzZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIElucHV0IFZhbHVlcyBJbnRvIEpTL1BIUCBPYmplY3QvQXJyYXkgYW5kIHJldHVybnMgaXQuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0aW5wdXRfZGF0YSgpIHtcblx0XHRsZXQgJGRhdGEgPSB0aGlzLmVsZW1lbnQuZmluZCggJzppbnB1dDpub3QoLndwYl92Y19wYXJhbV92YWx1ZSknICkuc2VyaWFsaXplT2JqZWN0KCk7XG5cdFx0aWYoIGZhbHNlID09PSB3aW5kb3cud3Bvbmlvbi5fLmlzVW5kZWZpbmVkKCAkZGF0YVsgdGhpcy5wYXJhbV9uYW1lIF0gKSApIHtcblx0XHRcdHJldHVybiAkZGF0YVsgdGhpcy5wYXJhbV9uYW1lIF07XG5cdFx0fVxuXHRcdHJldHVybiAkZGF0YTtcblx0fVxufVxuIiwiaW1wb3J0IFdQT25pb25fVkNfRmllbGQgZnJvbSAnLi9maWVsZCc7XG5cbmNsYXNzIGZpZWxkIGV4dGVuZHMgV1BPbmlvbl9WQ19GaWVsZCB7XG5cdC8qKlxuXHQgKiBJbml0cyBGaWVsZC5cblx0ICovXG5cdGluaXQoKSB7XG5cdFx0aWYoIHRoaXMuaXNfdmNfcGFyYW1fZWxlbSgpICkge1xuXHRcdFx0bGV0ICRzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmluZCggJ3NlbGVjdCcgKTtcblx0XHRcdGlmKCAkc2VsZWN0Lmxlbmd0aCA9PT0gMSAmJiAnbXVsdGlwbGUnID09PSAkc2VsZWN0LmF0dHIoICdtdWx0aXBsZScgKSApIHtcblx0XHRcdFx0dGhpcy5zYXZlKCAkc2VsZWN0LnZhbCgpLCAnYXJyYXknICk7XG5cdFx0XHRcdCRzZWxlY3Qub24oICdjaGFuZ2UnLCAoIGUgKSA9PiB0aGlzLnNhdmUoIGpRdWVyeSggZS5jdXJyZW50VGFyZ2V0ICkudmFsKCksICdhcnJheScgKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoICggdyApID0+IHtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnc2VsZWN0JywgKCAkZWxlbSApID0+IG5ldyBmaWVsZCggJGVsZW0gKSwgJ3ZjJyApO1xufSApKCB3aW5kb3cgKTtcbiIsImltcG9ydCBXUE9uaW9uX1ZDX0ZpZWxkIGZyb20gJy4vZmllbGQnO1xuXG5jbGFzcyBmaWVsZCBleHRlbmRzIFdQT25pb25fVkNfRmllbGQge1xuXHQvKipcblx0ICogSW5pdHMgRmllbGQuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGlmKCB0aGlzLmlzX3ZjX3BhcmFtX2VsZW0oKSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCAnaW5wdXQnICkuYWRkQ2xhc3MoICd3cGJfdmNfcGFyYW1fdmFsdWUnICk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICggKCB3ICkgPT4ge1xuXHR3Lndwb25pb25fcmVnaXN0ZXJfZmllbGQoICdpbWFnZV91cGxvYWQnLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ3VwbG9hZCcsICggJGVsZW0gKSA9PiBuZXcgZmllbGQoICRlbGVtICksICd2YycgKTtcblx0dy53cG9uaW9uX3JlZ2lzdGVyX2ZpZWxkKCAnaWNvbl9waWNrZXInLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG5cdHcud3Bvbmlvbl9yZWdpc3Rlcl9maWVsZCggJ2dhbGxlcnknLCAoICRlbGVtICkgPT4gbmV3IGZpZWxkKCAkZWxlbSApLCAndmMnICk7XG59ICkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCAoIHdpbmRvdywgZG9jdW1lbnQsICQgKSA9PiB7XG5cdCQoICgpID0+IHtcblx0XHQkKCAnI3dvb2NvbW1lcmNlLXByb2R1Y3QtZGF0YScgKS5vbiggJ3dvb2NvbW1lcmNlX3ZhcmlhdGlvbnNfbG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJy53cG9uaW9uLWZyYW1ld29yay53cG9uaW9uLXdvb2NvbW1lcmNlLXZhcmlhdGlvbicgKS5yZWxvYWQoKTtcblx0XHR9ICk7XG5cblx0XHQkKCAnI3ZhcmlhYmxlX3Byb2R1Y3Rfb3B0aW9ucycgKS5vbiggJ3dvb2NvbW1lcmNlX3ZhcmlhdGlvbnNfYWRkZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAnLndwb25pb24tZnJhbWV3b3JrLndwb25pb24td29vY29tbWVyY2UtdmFyaWF0aW9uJyApLnJlbG9hZCgpO1xuXHRcdH0gKTtcblx0fSApO1xufSApKCB3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkgKTtcbiIsImltcG9ydCAkd3BvbmlvbiBmcm9tICcuLi9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoICggd2luZG93LCAkICkgPT4ge1xuXHQkLmZuLldQT25pb25fb25BdmFpbGFibGUgPSBmdW5jdGlvbiggZm4gKSB7XG5cdFx0bGV0IHNlbCA9IHRoaXMuc2VsZWN0b3IsXG5cdFx0XHR0aW1lcjtcblx0XHRpZiggdGhpcy5sZW5ndGggPiAwICkge1xuXHRcdFx0Zm4uY2FsbCggdGhpcyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lciA9IHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoICQoIHNlbCApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0Zm4uY2FsbCggJCggc2VsICkgKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKCB0aW1lciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAzMDAgKTtcblx0XHR9XG5cdH07XG5cblx0d2luZG93Lndwb25pb25fd3BfcG9pbnRlcl9jcmVhdGUgPSAoKSA9PiB7XG5cblx0fTtcblxuXG5cdCQoIHdpbmRvdyApLm9uKCAnbG9hZCcsICgpID0+IHtcblx0XHRsZXQgJHBvaW50ZXJzX2dyb3VwID0gJHdwb25pb24ud2luZG93QXJncyggJ3dwX3BvaW50ZXJzJywgZmFsc2UgKTtcblxuXHRcdGlmKCAkcG9pbnRlcnNfZ3JvdXAgKSB7XG5cdFx0XHRmb3IoIGxldCAkZ3JvdXBfaWQgaW4gJHBvaW50ZXJzX2dyb3VwICkge1xuXHRcdFx0XHRpZiggISRwb2ludGVyc19ncm91cC5oYXNPd25Qcm9wZXJ0eSggJGdyb3VwX2lkICkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IoIGxldCAkcG9pbnRlcl9rZXkgaW4gJHBvaW50ZXJzX2dyb3VwWyAkZ3JvdXBfaWQgXSApIHtcblx0XHRcdFx0XHRpZiggISRwb2ludGVyc19ncm91cFsgJGdyb3VwX2lkIF0uaGFzT3duUHJvcGVydHkoICRwb2ludGVyX2tleSApICkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0ICRwb2ludGVyID0gJHBvaW50ZXJzX2dyb3VwWyAkZ3JvdXBfaWQgXVsgJHBvaW50ZXJfa2V5IF07XG5cblxuXHRcdFx0XHRcdCQoICRwb2ludGVyLnNlbGVjdG9yICkuV1BPbmlvbl9vbkF2YWlsYWJsZSggKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoICEkcG9pbnRlci5zaG93ICkge1xuXHRcdFx0XHRcdFx0XHQkcG9pbnRlci5zaG93ID0gJ29wZW4nO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgJGhhbmRsZXIgPSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICc8aDM+JyArICRwb2ludGVyLnRpdGxlICsgJzwvaDM+PHA+JyArICRwb2ludGVyLnRleHQgKyAnPC9wPicsXG5cdFx0XHRcdFx0XHRcdHBvaW50ZXJXaWR0aDogcGFyc2VJbnQoICRwb2ludGVyLndpZHRoICksXG5cdFx0XHRcdFx0XHRcdHBvaW50ZXJDbGFzczogJ3dwLXBvaW50ZXIgcG9pbnRlcnBsdXMnICsgJHBvaW50ZXIuY2xhc3MsXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0ZWRnZTogJHBvaW50ZXIuZWRnZSxcblx0XHRcdFx0XHRcdFx0XHRhbGlnbjogJHBvaW50ZXIuYWxpZ25cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0Y2xvc2U6ICgpID0+ICQucG9zdCggd2luZG93LmFqYXh1cmwsIHtcblx0XHRcdFx0XHRcdFx0XHRwb2ludGVyOiAkcG9pbnRlcl9rZXksXG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAnZGlzbWlzcy13cC1wb2ludGVyJ1xuXHRcdFx0XHRcdFx0XHR9ICksXG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHQkaGFuZGxlci5idXR0b25zID0gZnVuY3Rpb24oIGV2ZW50LCB0ICkge1xuXHRcdFx0XHRcdFx0XHRsZXQgJGJ1dHRvbjtcblx0XHRcdFx0XHRcdFx0aWYoICRwb2ludGVyLmpzbmV4dCApIHtcblx0XHRcdFx0XHRcdFx0XHRsZXQganNuZXh0ID0gbmV3IEZ1bmN0aW9uKCAndCcsICckJywgJHBvaW50ZXIuanNuZXh0ICk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGpzbmV4dCggdCwgalF1ZXJ5ICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiggJHBvaW50ZXIubmV4dCApIHtcblx0XHRcdFx0XHRcdFx0XHQkYnV0dG9uID0galF1ZXJ5KCAnPGEgaWQ9XCJwb2ludGVyLWNsb3NlXCIgY2xhc3M9XCJidXR0b24gYWN0aW9uXCI+TmV4dDwvYT4nICk7XG5cdFx0XHRcdFx0XHRcdFx0JGJ1dHRvbi5iaW5kKCAnY2xpY2sucG9pbnRlcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dC5lbGVtZW50LnBvaW50ZXIoICdjbG9zZScgKTtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCAkbmV4dCA9ICRwb2ludGVyc19ncm91cFsgJGdyb3VwX2lkIF1bICRwb2ludGVyLm5leHQgXTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIGZhbHNlID09PSAkbmV4dC5wYXJlbnQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJG5leHQuc2VsZWN0b3IgKS5wb2ludGVyKCAnb3BlbicgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiggZmFsc2UgPT09IHdpbmRvdy53cG9uaW9uLl8uaXNVbmRlZmluZWQoICRuZXh0Lmluc3RhbmNlICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJG5leHQuc2VsZWN0b3IgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5wb2ludGVyKCAkbmV4dC5pbnN0YW5jZSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnBvaW50ZXIoICdvcGVuJyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggJG5leHQuaWNvbl9jbGFzcyAhPT0gJycgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQoICcucHAtJyArICRwb2ludGVyLm5leHQgKyAnIC5wcC1wb2ludGVyLWNvbnRlbnQgaDMnIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoICdkYXNoaWNvbnMtYmVmb3JlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCAkbmV4dC5pY29uX2NsYXNzICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAkYnV0dG9uO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxldCBjbG9zZSAgPSAnRGlzbWlzcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRidXR0b24gPSBqUXVlcnkoICc8YSBjbGFzcz1cImNsb3NlXCIgaHJlZj1cIiNcIj4nICsgY2xvc2UgKyAnPC9hPicgKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYnV0dG9uLmJpbmQoICdjbGljay5wb2ludGVyJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0LmVsZW1lbnQucG9pbnRlciggJ2Nsb3NlJyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdGlmKCBmYWxzZSA9PT0gJHBvaW50ZXIucGFyZW50ICkge1xuXHRcdFx0XHRcdFx0XHRsZXQgc2V0dXAgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0JCggJHBvaW50ZXIuc2VsZWN0b3IgKS5wb2ludGVyKCAkaGFuZGxlciApLnBvaW50ZXIoICRwb2ludGVyLnNob3cgKTtcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c2V0dXAoKTtcblx0XHRcdFx0XHRcdFx0JGhhbmRsZXIgPSBudWxsO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0JHBvaW50ZXJzX2dyb3VwWyAkZ3JvdXBfaWQgXVsgJHBvaW50ZXJfa2V5IF0uaW5zdGFuY2UgPSAkaGFuZGxlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yKCBsZXQgJGlkIGluICRwb2ludGVyc19ncm91cCApIHtcblx0XHRcdFx0aWYoICRwb2ludGVyc19ncm91cC5oYXNPd25Qcm9wZXJ0eSggJGlkICkgKSB7XG5cdFx0XHRcdFx0Zm9yKCBsZXQgJHBpZCBpbiAkcG9pbnRlcnNfZ3JvdXBbICRpZCBdICkge1xuXHRcdFx0XHRcdFx0aWYoICRwb2ludGVyc19ncm91cFsgJGlkIF0uaGFzT3duUHJvcGVydHkoICRwaWQgKSApIHtcblx0XHRcdFx0XHRcdFx0bGV0ICRwb2ludGVyID0gJHBvaW50ZXJzX2dyb3VwWyAkaWQgXVsgJHBpZCBdO1xuXG5cdFx0XHRcdFx0XHRcdGlmKCAkcG9pbnRlcnNfZ3JvdXBbICRpZCBdWyAkcG9pbnRlci5uZXh0IF0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly9cdGpRdWVyeSggJHBvaW50ZXJzX2dyb3VwWyAkaWQgXVsgJHBvaW50ZXIubmV4dCBdLnNlbGVjdG9yICkucG9pbnRlciggJ2Nsb3NlJyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59ICkoIHdpbmRvdywgalF1ZXJ5ICk7XG4iLCJpbXBvcnQgV1BPbmlvbl9EZXBlbmRlbmN5IGZyb20gJy4vY29yZS9kZXBlbmRlbmN5JztcbmltcG9ydCBXUE9uaW9uX1ZhbGlkYXRvciBmcm9tICcuL2NvcmUvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVIb29rcyB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG4vLyBWU1AgSlMgSGVscGVyIEdsb2JhbC5cbndpbmRvdy52c3BfanNfaGVscGVyID0gcmVxdWlyZSggJ3ZzcC1qcy1oZWxwZXIvaW5kZXgnICk7XG5cbnJlcXVpcmUoICcuL2hlbHBlcnMvZnVuY3Rpb25zJyApO1xuXG4vLyBXUE9uaW9uIENvcmUgU291cmNlLlxud2luZG93Lndwb25pb24gPSB3aW5kb3cud3BvbmlvbiB8fCBPYmplY3QuY3JlYXRlKCB7XG5cdC8qKlxuXHQgKiBMb2Rhc2ggbm9Db25mbGljdCBWYXJpYWJsZS5cblx0ICovXG5cdF86IHdpbmRvdy5sb2Rhc2gubm9Db25mbGljdCgpLFxuXG5cdC8qKlxuXHQgKiBDdXJhdGVkIGNvbGxlY3Rpb24gb2YgdXNlZnVsIEphdmFTY3JpcHQgc25pcHBldHMuXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvdnNwLWpzLWhlbHBlclxuXHQgKi9cblx0aGVscGVyOiB3aW5kb3cudnNwX2pzX2hlbHBlcixcblxuXHQvKipcblx0ICogQSBsaWdodHdlaWdodCAmIGVmZmljaWVudCBFdmVudE1hbmFnZXIgZm9yIEphdmFTY3JpcHQuXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQHdvcmRwcmVzcy9ob29rc1xuXHQgKi9cblx0aG9va3M6IGNyZWF0ZUhvb2tzKCksXG59ICk7XG5cbi8qKlxuICogV1BvbmlvbiBNb2R1bGVzLlxuICovXG53aW5kb3cud3Bvbmlvbi5tZXRhYm94ID0gcmVxdWlyZSggJy4vbW9kdWxlcy9tZXRhYm94JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi53cF9wb2ludGVycyAgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL3dwLXBvaW50ZXJzJyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi5tZWRpYV9maWVsZHMgICAgPSByZXF1aXJlKCAnLi9tb2R1bGVzL21lZGlhLWZpZWxkcycgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24uYnVsa19lZGl0ICAgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9idWxrLWVkaXQnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLmd1dHRlbmJlcmcgICAgICA9IHJlcXVpcmUoICcuL21vZHVsZXMvZ3V0dGVuYmVyZycgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24ud29vY29tbWVyY2UgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy93b29jb21tZXJjZScgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24ucXVpY2tfZWRpdCAgICAgID0gcmVxdWlyZSggJy4vbW9kdWxlcy9xdWljay1lZGl0JyApLmRlZmF1bHQ7XG53aW5kb3cud3Bvbmlvbi52aXN1YWxfY29tcG9zZXIgPSByZXF1aXJlKCAnLi9tb2R1bGVzL3Zpc3VhbC1jb21wb3NlcicgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24ubW9kYWwgICAgICAgICAgID0gcmVxdWlyZSggJy4uL3ZlbmRvcnMvYmFja2JvbmUtbW9kYWwnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLmFqYXhlciAgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvYWpheGVyJyApLldQT25pb25fQWpheGVyO1xud2luZG93Lndwb25pb24uYWpheCAgICAgICAgICAgID0gcmVxdWlyZSggJy4vY29yZS9hamF4ZXInICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLmRlYnVnICAgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvZGVidWcnICkuZGVmYXVsdDtcbndpbmRvdy53cG9uaW9uLmNvcmUgICAgICAgICAgICA9IHJlcXVpcmUoICcuL2NvcmUvY29yZScgKS5kZWZhdWx0O1xud2luZG93Lndwb25pb24uZmllbGRfYWJzdHJhY3QgID0gcmVxdWlyZSggJy4vY29yZS9maWVsZCcgKS5kZWZhdWx0O1xuXG5yZXF1aXJlKCAnLi93cG9uaW9uLWZpZWxkcycgKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoICggd2luZG93LCBkb2N1bWVudCwgd3AsICQgKSA9PiB7XG5cdC8vIERvY3VtZW50IE9uIExvYWQuXG5cdCQoICgpID0+IHtcblx0XHR3aW5kb3cud3Bvbmlvbl9zZXR1cCgpO1xuXHRcdGxldCAkd3BvZl9kaXYgPSAkKCAnLndwb25pb24tZnJhbWV3b3JrOm5vdCgud3Bvbmlvbi1tb2R1bGUtcXVpY2tfZWRpdC1mcmFtZXdvcmspJyApO1xuXHRcdGlmKCAkd3BvZl9kaXYubGVuZ3RoID4gMCApIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfdGhlbWVfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdFx0JHdwb2ZfZGl2LmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fdGhlbWVfaW5pdCcsICQoIHRoaXMgKSApO1xuXHRcdFx0fSApO1xuXHRcdFx0d2luZG93Lndwb25pb24uaG9va3MuZG9BY3Rpb24oICd3cG9uaW9uX2FmdGVyX3RoZW1lX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHR9XG5cdH0gKTtcblxuXHQvLyBXaW5kb3cgT24gTG9hZC5cblx0JCggd2luZG93ICkub24oICdsb2FkJywgKCAoKSA9PiB7XG5cblx0XHR3aW5kb3cud3Bvbmlvbi5ob29rcy5kb0FjdGlvbiggJ3dwb25pb25fYmVmb3JlX2luaXQnICk7XG5cblx0XHRsZXQgJHdwb2ZfZGl2ID0gJCggJy53cG9uaW9uLWZyYW1ld29yazpub3QoLndwb25pb24tbW9kdWxlLXF1aWNrX2VkaXQtZnJhbWV3b3JrKScgKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uX25vdGljZSggJHdwb2ZfZGl2LmZpbmQoICcud3Bvbmlvbi1lbGVtZW50LXdwX25vdGljZSwgLndwb25pb24tZWxlbWVudC1ub3RpY2UnICkgKTtcblxuXHRcdHdpbmRvdy53cG9uaW9uLmNvcmUuc3VibWVudV9pbmRpY2F0b3IoICQoIGRvY3VtZW50ICkuZmluZCggJy53cG9uaW9uLXN1Ym1lbnUtaScgKSApO1xuXG5cdFx0Ly8gVHJpZ2dlcnMgRmllbGQgRGVidWcgRGF0YS5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAnLndwb25pb24tZmllbGQtZGVidWctY29kZSA+IHN0cm9uZycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyggJ2Rhc2hpY29ucy1hcnJvdy1kb3duJyApLnRvZ2dsZUNsYXNzKCAnZGFzaGljb25zLWFycm93LXJpZ2h0JyApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFRyaWdnZXJzIEhvb2sgV2l0aCBXaWRnZXRzLlxuXHRcdCQoIGRvY3VtZW50ICkub24oICd3aWRnZXQtYWRkZWQgd2lkZ2V0LXVwZGF0ZWQnLCBmdW5jdGlvbiggZXZlbnQsICR3aWRnZXQgKSB7XG5cdFx0XHR3aW5kb3cud3Bvbmlvbl9maWVsZCggJHdpZGdldCApLnJlbG9hZCgpO1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJHdpZGdldCApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFRyaWdnZXJzIFdoZW4gTmV3IE1lbnUgSXRlbSBBZGRlZC5cblx0XHQkKCBkb2N1bWVudCApLm9uKCAnbWVudS1pdGVtLWFkZGVkJywgZnVuY3Rpb24oIGV2ZW50LCAkbWVudSApIHtcblx0XHRcdHdpbmRvdy53cG9uaW9uX2ZpZWxkKCAkbWVudSApLnJlbG9hZCgpO1xuXHRcdFx0bmV3IFdQT25pb25fRGVwZW5kZW5jeSggJG1lbnUgKTtcblx0XHR9ICk7XG5cblx0XHRpZiggJHdwb2ZfZGl2Lmxlbmd0aCA+IDAgKSB7XG5cdFx0XHQvLyBSZW5kZXJzIFZhbGlkYXRpb24uXG5cdFx0XHRuZXcgV1BPbmlvbl9WYWxpZGF0b3IoKTtcblxuXHRcdFx0Ly8gSGFuZGxlcyBGaWVsZHMgaW5pdC5cblx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9iZWZvcmVfZmllbGRzX2luaXQnLCAkd3BvZl9kaXYgKTtcblx0XHRcdCR3cG9mX2Rpdi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0d2luZG93Lndwb25pb25fZmllbGQoICQoIHRoaXMgKSApLnJlbG9hZCgpO1xuXHRcdFx0XHRuZXcgV1BPbmlvbl9EZXBlbmRlbmN5KCAkKCB0aGlzICkgKTtcblx0XHRcdH0gKTtcblx0XHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9hZnRlcl9maWVsZHNfaW5pdCcsICR3cG9mX2RpdiApO1xuXHRcdH1cblxuXHRcdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9pbml0JyApO1xuXG5cdH0gKSApO1xuXG5cdHdpbmRvdy53cG9uaW9uLmhvb2tzLmRvQWN0aW9uKCAnd3Bvbmlvbl9sb2FkZWQnICk7XG5cbn0gKSggd2luZG93LCBkb2N1bWVudCwgd3AsIGpRdWVyeSApO1xuIiwicmVxdWlyZSggJy4vZmllbGRzL3RleHQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvdGV4dGFyZWEnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvYnV0dG9uX3NldCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrZ3JvdW5kJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2ltYWdlX3NlbGVjdCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9zd2l0Y2hlcicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9jb2xvcl9wYWxldHRlJyApO1xucmVxdWlyZSggJy4vZmllbGRzL3NlbGVjdCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9zZWxlY3QyJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2Nob3NlbicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9pY29uX3BpY2tlcicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9mb250X3NlbGVjdG9yJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2FjY29yZGlvbicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9ncm91cCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy93cF9lZGl0b3InICk7XG5yZXF1aXJlKCAnLi9oZWxwZXJzL3JlbG9hZF93cF9lZGl0b3InICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvZmllbGRzZXQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvaW5wdXRtYXNrJyApO1xucmVxdWlyZSggJy4vZmllbGRzL3dwX2xpbmtzJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2NoZWNrYm94X3JhZGlvJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2tleXZhbHVlX3BhaXInICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvY29sb3JfcGlja2VyJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2RhdGVfcGlja2VyJyApO1xucmVxdWlyZSggJy4vZmllbGRzL2dhbGxlcnknICk7XG5yZXF1aXJlKCAnLi9oZWxwZXJzL2ltYWdlX3BvcHVwJyApO1xucmVxdWlyZSggJy4vZmllbGRzL3VwbG9hZCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9pbWFnZV91cGxvYWQnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvanF1ZXJ5X3RhYicgKTtcbnJlcXVpcmUoICcuL2hlbHBlcnMvdG9vbHRpcCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9jbG9uZV9lbGVtZW50JyApO1xucmVxdWlyZSggJy4vZmllbGRzL3NvcnRlcicgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9nb29nbGVfbWFwcycgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy90eXBvZ3JhcGh5JyApO1xucmVxdWlyZSggJy4vZmllbGRzL29lbWJlZCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9oZWFkaW5nJyApO1xucmVxdWlyZSggJy4vZmllbGRzL3N1YmhlYWRpbmcnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvamFtYm9fY29udGVudCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9ub3RpY2UnICk7XG5yZXF1aXJlKCAnLi9maWVsZHMvY29udGVudCcgKTtcbnJlcXVpcmUoICcuL2ZpZWxkcy9iYWNrdXAnICk7XG4iLCJpbXBvcnQgJHdwb25pb24gZnJvbSAnLi4vanMvY29yZS9jb3JlJztcblxuY29uc3QgV1BPbmlvbl9XUF9Nb2RhbCA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKCB7XG5cdHRlbXBsYXRlczoge30sXG5cblx0ZXZlbnRzOiB7XG5cdFx0XCJjbGljayAubWVkaWEtbW9kYWwtY2xvc2VcIjogXCJjbG9zZU1vZGFsXCIsXG5cdFx0XCJjbGljayAjYnRuLWNhbmNlbFwiOiBcImNsb3NlTW9kYWxcIixcblx0XHRcImNsaWNrICNidG4tb2tcIjogXCJzYXZlTW9kYWxcIixcblx0XHRcImNsaWNrIC5tZWRpYS1tZW51IGFcIjogXCJoYW5kbGVfbGVmdF9tZW51X2NsaWNrXCIsXG5cdFx0XCJjbGljayAubWVkaWEtcm91dGVyIGFcIjogXCJoYW5kbGVfdGFiX2NsaWNrXCIsXG5cdH0sXG5cblx0YWN0aXZlX3BhZ2U6IG51bGwsXG5cblx0YWN0aXZlX3NlY3Rpb246IG51bGwsXG5cblx0aW5pdGlhbGl6ZTogKCBvcHRpb25zICkgPT4ge1xuXHRcdG9wdGlvbnMgPSBfLmV4dGVuZCgge1xuXHRcdFx0bGVmdF9tZW51OiBmYWxzZSxcblx0XHRcdGhpZGVfbWVudTogZmFsc2UsXG5cdFx0XHRodG1sOiBmYWxzZSxcblx0XHR9LCBvcHRpb25zICk7XG5cblx0XHR0aGlzLmxlZnRfbWVudSA9IG9wdGlvbnNbICdsZWZ0X21lbnUnIF07XG5cdFx0dGhpcy5odG1sICAgICAgPSBvcHRpb25zWyAnaHRtbCcgXTtcblx0XHR0aGlzLmhpZGVfbWVudSA9IG9wdGlvbnNbICdoaWRlX21lbnUnIF07XG5cblx0XHRfLmJpbmRBbGwoIHRoaXMsICdyZW5kZXInLCAncHJlc2VydmVGb2N1cycsICdjbG9zZU1vZGFsJywgJ3NhdmVNb2RhbCcsICdkb05vdGhpbmcnICk7XG5cdFx0dGhpcy5pbml0X3RlbXBsYXRlcygpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH0sXG5cblx0aW5pdF90ZW1wbGF0ZXM6ICgpID0+IHtcblx0XHRsZXQgJG0gICAgICAgICAgICAgICAgICAgICAgICAgID0gJHdwb25pb24ub3B0aW9uKCAnbW9kYWwnICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ2ZyYW1lLW1lbnUtaXRlbScgXSApO1xuXHRcdHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0gPSAkd3Bvbmlvbi50ZW1wbGF0ZSggJG1bICdyb3V0ZXItbWVudS1pdGVtJyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMud2luZG93ICAgICAgICAgICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ2h0bWwnIF0gKTtcblx0XHR0aGlzLnRlbXBsYXRlcy5wYWdlX2NvbnRlbnQgICAgID0gJHdwb25pb24udGVtcGxhdGUoICRtWyAncGFnZV9jb250ZW50JyBdICk7XG5cdFx0dGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50ICA9ICR3cG9uaW9uLnRlbXBsYXRlKCAkbVsgJ3NlY3Rpb25fY29udGVudCcgXSApO1xuXHR9LFxuXG5cdHJlbmRlcjogKCkgPT4ge1xuXHRcdCd1c2Ugc3RyaWN0Jztcblx0XHR0aGlzLiRlbC5hdHRyKCAndGFiaW5kZXgnLCAnMCcgKS5hcHBlbmQoIHRoaXMudGVtcGxhdGVzLndpbmRvdygpICk7XG5cblx0XHRpZiggdGhpcy5sZWZ0X21lbnUgKSB7XG5cdFx0XHRfLmVhY2goIHRoaXMubGVmdF9tZW51LCAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRcdHRoaXMuJCggJy5tZWRpYS1tZW51JyApLmFwcGVuZCggdGhpcy50ZW1wbGF0ZXMuZnJhbWVfbWVudV9pdGVtKCB7XG5cdFx0XHRcdFx0dXJsOiBrZXksXG5cdFx0XHRcdFx0bmFtZTogdmFsdWUsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuaHRtbCApIHtcblx0XHRcdF8uZWFjaCggdGhpcy5odG1sLCAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRcdGxldCAkY29udGVudCA9ICQoIHRoaXMudGVtcGxhdGVzLnBhZ2VfY29udGVudCgge1xuXHRcdFx0XHRcdGlkOiBrZXksXG5cdFx0XHRcdFx0dGl0bGU6IHZhbHVlWyAndGl0bGUnIF0sXG5cdFx0XHRcdFx0aHRtbDogdmFsdWVbICdodG1sJyBdLFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2VjdGlvbnMnIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRfLmVhY2goIHZhbHVlWyAnc2VjdGlvbnMnIF0sICggdmFsLCBrICkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICRfY29udGVudCA9IGpRdWVyeSggdGhpcy50ZW1wbGF0ZXMuc2VjdGlvbl9jb250ZW50KCB7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGtleSArIFwiX1wiICsgayxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogdmFsWyAndGl0bGUnIF0sXG5cdFx0XHRcdFx0XHRcdFx0aHRtbDogdmFsWyAnaHRtbCcgXSxcblx0XHRcdFx0XHRcdFx0fSApICksXG5cdFx0XHRcdFx0XHRcdCRfbWVudSAgICA9IHRoaXMudGVtcGxhdGVzLnJvdXRlcl9tZW51X2l0ZW0oIHsgdXJsOiBrLCBuYW1lOiB2YWxbICd0aXRsZScgXSB9ICk7XG5cblx0XHRcdFx0XHRcdCRfY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuaGlkZSgpO1xuXHRcdFx0XHRcdFx0aWYoIHR5cGVvZiB2YWxbICdzaWRlYmFyJyBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdFx0JF9jb250ZW50LmZpbmQoICcubWVkaWEtc2lkZWJhcicgKS5hcHBlbmQoIHZhbFsgJ3NpZGViYXInIF0gKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1mcmFtZS1jb250ZW50JyApLmFwcGVuZCggJF9jb250ZW50ICk7XG5cdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXJvdXRlcicgKS5hcHBlbmQoICRfbWVudSApO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicgKS5hcHBlbmQoICRjb250ZW50ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGNvbnRlbnQuZmluZCggJy5tZWRpYS1zaWRlYmFyJyApLmhpZGUoKTtcblx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlWyAnc2lkZWJhcicgXSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0XHRcdGlmKCB2YWx1ZVsgJ3NpZGViYXInIF0gIT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHQkY29udGVudC5maW5kKCAnLm1lZGlhLXNpZGViYXInICkuYXBwZW5kKCB2YWx1ZVsgJ3NpZGViYXInIF0gKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRjb250ZW50LmZpbmQoICcubWVkaWEtZnJhbWUtcm91dGVyJyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdFx0XHRcdCR0aGlzLiQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicgKS5hcHBlbmQoICRjb250ZW50ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0dGhpcy4kKCAnLm1lZGlhLW1lbnUgYTpmaXJzdC1jaGlsZCcgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cdFx0dGhpcy4kKCAnLndwb25pb24tbW9kYWwtY29udGVudC1jb250YWluZXIgPiAud3Bvbmlvbi1tb2RhbC1jb250ZW50Om5vdCguaGlkZGVuKSAubWVkaWEtZnJhbWUtcm91dGVyIGE6Zmlyc3QtY2hpbGQnIClcblx0XHRcdC50cmlnZ2VyKCAnY2xpY2snICk7XG5cblx0XHRpZiggdGhpcy5oaWRlX21lbnUgPT09IHRydWUgKSB7XG5cdFx0XHR0aGlzLiQoICcubWVkaWEtZnJhbWUnICkuYWRkQ2xhc3MoICdoaWRlLW1lbnUnICk7XG5cdFx0fVxuXG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9uKCBcImZvY3VzaW5cIiwgdGhpcy5wcmVzZXJ2ZUZvY3VzICk7XG5cdFx0alF1ZXJ5KCAnYm9keScgKS5jc3MoIHsgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiIH0gKS5hcHBlbmQoIHRoaXMuJGVsICk7XG5cdFx0dGhpcy4kZWwuZm9jdXMoKTtcblx0fSxcblxuXHRoYW5kbGVfbGVmdF9tZW51X2NsaWNrOiAoIGUgKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCAkdGFyZ2V0ID0gJCggZS50YXJnZXQgKTtcblx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtbWVudSBhLmFjdGl2ZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkdGFyZ2V0LmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXHRcdGxldCAkc2hvd190YXJnZXQgPSAkKCB0aGlzLiRlbCApLmZpbmQoICcud3Bvbmlvbi1tb2RhbC1jb250ZW50LWNvbnRhaW5lciA+IGRpdiMnICsgJHRhcmdldC5hdHRyKCAnaHJlZicgKSApO1xuXHRcdCQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gZGl2JyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuXHRcdCRzaG93X3RhcmdldC5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKTtcblxuXHRcdGlmKCAkc2hvd190YXJnZXQuZmluZCggJy5tZWRpYS1mcmFtZS1yb3V0ZXInICkuaGFzQ2xhc3MoICdoaWRkZW4nICkgKSB7XG5cdFx0XHQkKCB0aGlzLiRlbCApLmZpbmQoICcubWVkaWEtZnJhbWUnICkuYWRkQ2xhc3MoICdoaWRlLXJvdXRlcicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lJyApLnJlbW92ZUNsYXNzKCAnaGlkZS1yb3V0ZXInICk7XG5cdFx0fVxuXHRcdHRoaXMuYWN0aXZlX3BhZ2UgICAgPSAkdGFyZ2V0LmF0dHIoICdocmVmJyApO1xuXHRcdHRoaXMuYWN0aXZlX3NlY3Rpb24gPSBudWxsO1xuXHR9LFxuXG5cdGhhbmRsZV90YWJfY2xpY2s6ICggZSApID0+IHtcblx0XHRsZXQgJHRhcmdldCAgICAgICAgID0gJCggZS50YXJnZXQgKTtcblx0XHR0aGlzLmFjdGl2ZV9zZWN0aW9uID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKTtcblx0XHRsZXQgJHBhZ2UgICAgICAgICAgID0gJCggdGhpcy4kZWwgKS5maW5kKCAnLm1lZGlhLWZyYW1lLW1lbnUgYS5hY3RpdmUnICkuYXR0ciggJ2hyZWYnICk7XG5cdFx0bGV0ICRiYXNlICAgICAgICAgICA9ICQoIHRoaXMuJGVsICkuZmluZCggJy53cG9uaW9uLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyID4gIycgKyB0aGlzLmFjdGl2ZV9wYWdlICk7XG5cblxuXHRcdCR0YXJnZXQucGFyZW50KCkuZmluZCggJy5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cdFx0JHRhcmdldC5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHQkYmFzZS5maW5kKCAnLndwb25pb24tc2VjdGlvbi1tb2RhbC1jb250ZW50JyApLmhpZGUoKTtcblx0XHQkYmFzZS5maW5kKCAnIycgKyB0aGlzLmFjdGl2ZV9wYWdlICsgJ18nICsgdGhpcy5hY3RpdmVfc2VjdGlvbiApLnNob3coKTtcblx0fSxcblxuXHRwcmVzZXJ2ZUZvY3VzOiAoIGUgKSA9PiB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0aWYoIHRoaXMuJGVsWyAwIF0gIT09IGUudGFyZ2V0ICYmICF0aGlzLiRlbC5oYXMoIGUudGFyZ2V0ICkubGVuZ3RoICkge1xuXHRcdFx0dGhpcy4kZWwuZm9jdXMoKTtcblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VNb2RhbDogKCBlICkgPT4ge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnVuZGVsZWdhdGVFdmVudHMoKTtcblx0XHRqUXVlcnkoIGRvY3VtZW50ICkub2ZmKCBcImZvY3VzaW5cIiApO1xuXHRcdGpRdWVyeSggXCJib2R5XCIgKS5jc3MoIHsgXCJvdmVyZmxvd1wiOiBcImF1dG9cIiB9ICk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fSxcblxuXHRzYXZlTW9kYWw6ICggZSApID0+IHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHR0aGlzLmNsb3NlTW9kYWwoIGUgKTtcblx0fSxcblxuXHRkb05vdGhpbmc6IGZ1bmN0aW9uKCBlICkge1xuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCAkb3B0aW9ucyA9IHt9ICkge1xuXHRcdHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKCB7XG5cdFx0XHRpZDogZmFsc2UsXG5cdFx0XHRkYXRhOiBmYWxzZSxcblx0XHRcdGNsYXNzTmFtZTogJ3dwb25pb24tbW9kYWwnLFxuXHRcdFx0bW9kYWw6IHt9LFxuXHRcdFx0aGlkZV9tZW51OiBmYWxzZSxcblx0XHR9LCAkb3B0aW9ucyApO1xuXG5cdFx0bmV3IFdQT25pb25fV1BfTW9kYWwoIF8uZXh0ZW5kKCB7XG5cdFx0XHRsZWZ0X21lbnU6IHRoaXMuZ2V0X2xlZnRfbWVudSgpLFxuXHRcdFx0aHRtbDogdGhpcy5vcHRpb25zWyAnZGF0YScgXSxcblx0XHRcdGhpZGVfbWVudTogdGhpcy5vcHRpb25zWyAnaGlkZV9tZW51JyBdLFxuXHRcdH0sIHRoaXMub3B0aW9uc1sgJ21vZGFsJyBdICkgKTtcblx0fVxuXG5cdGdldF9sZWZ0X21lbnUoKSB7XG5cdFx0bGV0ICRyZXR1cm4gPSBmYWxzZTtcblx0XHRpZiggdGhpcy5vcHRpb25zWyAnZGF0YScgXSApIHtcblx0XHRcdCRyZXR1cm4gPSB7fTtcblxuXHRcdFx0Xy5lYWNoKCB0aGlzLm9wdGlvbnNbICdkYXRhJyBdLCAoICRkYXRhLCAka2V5ICkgPT4ge1xuXHRcdFx0XHQkcmV0dXJuWyAka2V5IF0gPSAoIHR5cGVvZiAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gIT09ICd1bmRlZmluZWQnICkgPyAkZGF0YVsgJ21lbnVfdGl0bGUnIF0gOiAkZGF0YVsgJ3RpdGxlJyBdO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRyZXR1cm4gJHJldHVybjtcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=