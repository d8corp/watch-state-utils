import { Observable } from 'watch-state';

function use(target, update = false) {
    if (target instanceof Observable) {
        return target.value;
    }
    return typeof target === 'function' ? target(update) : target;
}

export { use };
