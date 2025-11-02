'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../inject/index.js');
require('../isTemplateStringsArray/index.js');
require('../strUse/index.js');
require('../use/index.js');
var isTemplateStringsArray = require('../isTemplateStringsArray/isTemplateStringsArray.js');
var strUse = require('../strUse/strUse.js');
var use = require('../use/use.js');
var inject = require('../inject/inject.js');

function $(target, ...rest) {
    var _a;
    if (isTemplateStringsArray.isTemplateStringsArray(target)) {
        return strUse.strUse(target, ...rest);
    }
    const option = (_a = rest[0]) !== null && _a !== void 0 ? _a : false;
    if (typeof option === 'boolean') {
        return use.use(target, option);
    }
    return inject.inject(target, option);
}

exports.$ = $;
