// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DateFilterPreset } from './DateFilterPreset'
import type { LastDatePart } from './LastDatePart'

export type DateFilterValue =
  | { type: 'preset'; preset: DateFilterPreset }
  | { type: 'dateRange'; from: string; to: string }
  | { type: 'last'; count: number; datePart: LastDatePart }