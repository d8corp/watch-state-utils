import { type Watcher } from 'watch-state';
import type { GetWatchValue, Injector, WatchValue, WatchValueOnly } from '../../types';
export declare function inject<T extends WatchValue<any>, R>(target: T, injector: Injector<GetWatchValue<T>, R>): T extends WatchValueOnly<any> ? Watcher<R> : R;
