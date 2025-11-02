import { Observable, type Watcher } from 'watch-state'

import type { WatchValue, WatchValueOnly } from '../../types'
import { strUse } from '../strUse'

export function strInject<T extends WatchValue<string | number>> (
  strings: TemplateStringsArray,
  ...values: T[]
): T extends WatchValueOnly<any> ? Watcher<string> : string {
  if (values.some((target) => target instanceof Observable || target instanceof Function)) {
    // @ts-expect-error TODO: check types
    return () => strUse(strings, ...values)
  }

  let result = ''

  for (let i = 0; i < strings.length; i++) {
    result += strings[i]

    if (i < values.length) {
      result += (values as string[])[i]
    }
  }
  // @ts-expect-error TODO: check types
  return result
}
