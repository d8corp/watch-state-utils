'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

/**
 * Returns a function equivalent to the given one, but when called,
 * it executes within the context of a specific observer.
 *
 * This means that the observer context is temporarily set to the given watcher during the function call,
 * then restored afterward.
 * */
function withScope(target, watcher = watchState.scope.activeWatcher) {
    return function (...args) {
        const prevWatcher = watchState.scope.activeWatcher;
        watchState.scope.activeWatcher = watcher;
        const result = target.apply(this, args);
        watchState.scope.activeWatcher = prevWatcher;
        return result;
    };
}

exports.withScope = withScope;
