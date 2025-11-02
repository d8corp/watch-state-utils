'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../use/index.js');
var use = require('../use/use.js');

function strUse(strings, ...values) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += use.use(values[i]);
        }
    }
    return result;
}

exports.strUse = strUse;
