import { type Watcher } from 'watch-state';
import { type WatchValue, type WatchValueOnly } from '../../types';
export declare function injectPx<T extends WatchValue<undefined | number | number[]>>(value?: T): T extends WatchValueOnly<any> ? Watcher<string> : string;
