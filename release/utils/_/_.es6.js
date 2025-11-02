import '../inject/index.es6.js';
import '../isTemplateStringsArray/index.es6.js';
import '../strUse/index.es6.js';
import '../use/index.es6.js';
import { isTemplateStringsArray } from '../isTemplateStringsArray/isTemplateStringsArray.es6.js';
import { strUse } from '../strUse/strUse.es6.js';
import { use } from '../use/use.es6.js';
import { inject } from '../inject/inject.es6.js';

function $(target, ...rest) {
    var _a;
    if (isTemplateStringsArray(target)) {
        return strUse(target, ...rest);
    }
    const option = (_a = rest[0]) !== null && _a !== void 0 ? _a : false;
    if (typeof option === 'boolean') {
        return use(target, option);
    }
    return inject(target, option);
}

export { $ };
