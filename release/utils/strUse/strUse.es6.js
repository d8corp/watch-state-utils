import '../use/index.es6.js';
import { use } from '../use/use.es6.js';

function strUse(strings, ...values) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += use(values[i]);
        }
    }
    return result;
}

export { strUse };
