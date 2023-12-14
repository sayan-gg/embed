// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { FilterByCondition } from './FilterByCondition';
import type { FilterByValue } from './FilterByValue';
import type { GlobalFilter } from './GlobalFilter';

export type RuleFilter =
    | { type: 'FilterByCondition'; filter: FilterByCondition }
    | { type: 'FilterByValue'; filter: FilterByValue }
    | { type: 'GlobalFilter'; filter: GlobalFilter };
