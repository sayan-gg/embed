// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DataStoreSlice } from './DataStoreSlice';
import type { ElementAttributesSlice } from './ElementAttributesSlice';
import type { FilterState } from './FilterState';
import type { SqlEditorStateSlice } from './SqlEditorStateSlice';

export interface CanvasStateSlice {
    dataStores: Record<string, DataStoreSlice>;
    inProgressStoreIds: Array<string>;
    elements: Record<string, ElementAttributesSlice>;
    sqlEditorState: SqlEditorStateSlice | null;
    filterState: FilterState;
    filterUrl: string;
    elementOrder: Array<Array<string>>;
}