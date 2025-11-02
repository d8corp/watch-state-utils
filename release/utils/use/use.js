'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

function use(target, update = false) {
    if (target instanceof watchState.Observable) {
        return target.value;
    }
    return typeof target === 'function' ? target(update) : target;
}

exports.use = use;
