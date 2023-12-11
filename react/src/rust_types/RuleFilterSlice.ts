// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { FilterByConditionSlice } from './FilterByConditionSlice'
import type { FilterByValue } from './FilterByValue'
import type { GlobalFilter } from './GlobalFilter'

export type RuleFilterSlice =
  | { type: 'FilterByCondition'; filter: FilterByConditionSlice }
  | { type: 'FilterByValue'; filter: FilterByValue }
  | { type: 'GlobalFilter'; filter: GlobalFilter }