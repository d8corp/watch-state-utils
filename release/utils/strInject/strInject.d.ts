import { type Watcher } from 'watch-state';
import type { WatchValue, WatchValueOnly } from '../../types';
export declare function strInject<T extends WatchValue<string | number>>(strings: TemplateStringsArray, ...values: T[]): T extends WatchValueOnly<any> ? Watcher<string> : string;
