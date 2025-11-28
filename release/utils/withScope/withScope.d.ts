import { type Observer } from 'watch-state';
/**
 * Returns a function equivalent to the given one, but when called,
 * it executes within the context of a specific observer.
 *
 * This means that the observer context is temporarily set to the given watcher during the function call,
 * then restored afterward.
 * */
export declare function withScope<F extends Function>(target: F, watcher?: Observer): F;
