'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
require('../use/index.js');
var use = require('../use/use.js');

function inject(target, injector) {
    if (target instanceof watchState.Observable || target instanceof Function) {
        // @ts-expect-error TODO: check types
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return (update) => injector(use.use(target, update));
    }
    // @ts-expect-error TODO: check types
    return injector(target);
}

exports.inject = inject;
