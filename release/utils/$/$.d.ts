import { type Watcher } from 'watch-state';
import { type GetWatchValue, type Injector, type WatchValue, type WatchValueOnly } from '../../types';
export declare function $(strings: TemplateStringsArray, ...values: WatchValue<string | number>[]): string;
export declare function $<T>(target: WatchValue<T>, update?: boolean): T;
export declare function $<T extends WatchValue<any>, R>(target: T, injector: Injector<GetWatchValue<T>, R>): T extends WatchValueOnly<any> ? Watcher<R> : R;
