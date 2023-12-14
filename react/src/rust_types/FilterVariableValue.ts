// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DateFilterValue } from './DateFilterValue';
import type { SearchFilterValue } from './SearchFilterValue';
import type { SelectFilterValue } from './SelectFilterValue';

export type FilterVariableValue =
    | { type: 'search'; filter: SearchFilterValue }
    | { type: 'date'; filter: DateFilterValue }
    | { type: 'select'; filter: SelectFilterValue }
    | { type: 'null' };
