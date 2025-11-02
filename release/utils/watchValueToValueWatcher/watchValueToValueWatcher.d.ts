import { Observable, type Watcher } from 'watch-state';
import { type WatchValue } from '../../types';
export declare function watchValueToValueWatcher<T extends WatchValue<any>>(value: T): T extends Observable<infer V> ? Watcher<V> : T;
