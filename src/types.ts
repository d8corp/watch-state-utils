import { type Observable, type Watcher } from 'watch-state'

export type ValueWatcher <T> = T | Watcher<T>
export type WatchValueOnly <T> = Watcher<T> | Observable<T>
export type WatchValue <T> = WatchValueOnly<T> | T
export type GetWatchValue <T extends WatchValue<any>> = T extends WatchValue<infer R> ? R : never
export type Injector<T, R> = (value: T) => R
