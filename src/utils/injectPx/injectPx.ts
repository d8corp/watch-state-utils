import { type Watcher } from 'watch-state'

import { type WatchValue, type WatchValueOnly } from '../../types'
import { inject } from '../inject'

export function injectPx <T extends WatchValue<undefined | number | number[]>> (
  value?: T,
): T extends WatchValueOnly<any> ? Watcher<string> : string {
  return inject(value, value => (
    typeof value === 'number'
      ? `${value}px`
      : Array.isArray(value)
        ? value.join('px ') + 'px'
        : ''
  ))
}
