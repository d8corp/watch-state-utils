import { Observable } from 'watch-state';
import '../use/index.es6.js';
import { use } from '../use/use.es6.js';

function inject(target, injector) {
    if (target instanceof Observable || target instanceof Function) {
        // @ts-expect-error TODO: check types
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return (update) => injector(use(target, update));
    }
    // @ts-expect-error TODO: check types
    return injector(target);
}

export { inject };
