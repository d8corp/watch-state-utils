import { Observable } from 'watch-state';
import '../strUse/index.es6.js';
import { strUse } from '../strUse/strUse.es6.js';

function strInject(strings, ...values) {
    if (values.some((target) => target instanceof Observable || target instanceof Function)) {
        // @ts-expect-error TODO: check types
        return () => strUse(strings, ...values);
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

export { strInject };
