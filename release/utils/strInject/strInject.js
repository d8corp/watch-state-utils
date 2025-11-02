'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
require('../strUse/index.js');
var strUse = require('../strUse/strUse.js');

function strInject(strings, ...values) {
    if (values.some((target) => target instanceof watchState.Observable || target instanceof Function)) {
        // @ts-expect-error TODO: check types
        return () => strUse.strUse(strings, ...values);
    }
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }
    }
    // @ts-expect-error TODO: check types
    return result;
}

exports.strInject = strInject;
