import { type Watcher } from 'watch-state'

import { type GetWatchValue, type Injector, type WatchValue, type WatchValueOnly } from '../../types'
import { inject } from '../inject'
import { isTemplateStringsArray } from '../isTemplateStringsArray'
import { strUse } from '../strUse'
import { use } from '../use'

export function $ (strings: TemplateStringsArray, ...values: WatchValue<string | number>[]): string
export function $<T> (target: WatchValue<T>, update?: boolean): T
export function $<T extends WatchValue<any>, R> (target: T, injector: Injector<GetWatchValue<T>, R>): T extends WatchValueOnly<any> ? Watcher<R> : R
export function $ (target: WatchValue<any> | TemplateStringsArray, ...rest: any[]): any {
  if (isTemplateStringsArray(target)) {
    return strUse(target, ...(rest as WatchValue<string | number>[]))
  }

  const option = rest[0] ?? false

  if (typeof option === 'boolean') {
    return use(target, option)
  }

  return inject(target, option as Injector<any, any>)
}
