import { type Observer, scope } from 'watch-state'

/**
 * Returns a function equivalent to the given one, but when called,
 * it executes within the context of a specific observer.
 *
 * This means that the observer context is temporarily set to the given watcher during the function call,
 * then restored afterward.
 * */
export function withScope<F extends Function> (target: F, watcher: Observer = scope.activeWatcher): F {
  return function (...args: any[]) {
    const prevWatcher = scope.activeWatcher
    scope.activeWatcher = watcher
    const result = target.apply(this, args)
    scope.activeWatcher = prevWatcher
    return result
  } as unknown as F
}
