// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ElementModel } from './ElementModel';
import type { FilterVariableValue } from './FilterVariableValue';

export interface GetChartDataRequest {
    chart_element: ElementModel;
    saved_model_id: string;
    variables: Record<string, FilterVariableValue> | null;
}
