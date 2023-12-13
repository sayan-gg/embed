// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ChartSlice } from './ChartSlice';
import type { Component } from './Component';
import type { DraftElement } from './DraftElement';
import type { SpreadsheetSlice } from './SpreadsheetSlice';
import type { TextSlice } from './TextSlice';

export type ElementSlice =
    | { chart: ChartSlice }
    | 'commentPin'
    | 'cursor'
    | 'image'
    | { spreadsheet: SpreadsheetSlice }
    | { text: TextSlice }
    | 'formulaInput'
    | { draftElement: DraftElement }
    | { component: Component };
