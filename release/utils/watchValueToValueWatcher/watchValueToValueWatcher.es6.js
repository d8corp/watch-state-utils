import { Observable } from 'watch-state';

function watchValueToValueWatcher(value) {
    if (value instanceof Observable) {
        return (() => value.value);
    }
    return value;
}

export { watchValueToValueWatcher };
