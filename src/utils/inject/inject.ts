import { Observable, type Watcher } from 'watch-state'

import type { GetWatchValue, Injector, WatchValue, WatchValueOnly } from '../../types'
import { use } from '../use'

export function inject<T extends WatchValue<any>, R> (
  target: T,
  injector: Injector<GetWatchValue<T>, R>,
): T extends WatchValueOnly<any> ? Watcher<R> : R {
  if (target instanceof Observable || target instanceof Function) {
    // @ts-expect-error TODO: check types
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return (update: boolean) => injector(use(target, update))
  }

  // @ts-expect-error TODO: check types
  return injector(target)
}
