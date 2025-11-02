'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isTemplateStringsArray(arr) {
    return Array.isArray(arr) && 'raw' in arr;
}

exports.isTemplateStringsArray = isTemplateStringsArray;
