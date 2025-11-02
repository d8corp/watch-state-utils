import { Observable } from 'watch-state'

import type { WatchValue } from '../../types'

export function use<T> (target: WatchValue<T>, update = false): T {
  if (target instanceof Observable) {
    return target.value
  }

  return typeof target === 'function' ? (target as any)(update) : target
}
