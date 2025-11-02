import { type WatchValue } from '../../types'
import { use } from '../use'

export function strUse (strings: TemplateStringsArray, ...values: WatchValue<string | number>[]): string {
  let result = ''

  for (let i = 0; i < strings.length; i++) {
    result += strings[i]

    if (i < values.length) {
      result += use(values[i])
    }
  }

  return result
}
