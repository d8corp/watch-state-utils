import { Observable, type Watcher } from 'watch-state'

import { type WatchValue } from '../../types'

export function watchValueToValueWatcher <T extends WatchValue<any>> (value: T): T extends Observable<infer V> ? Watcher<V> : T {
  if (value instanceof Observable) {
    return (() => value.value) as any
  }

  return value as any
}
