// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AggregationField } from './AggregationField';
import type { ChartType } from './ChartType';
import type { SeriesFormat } from './SeriesFormat';
import type { SqlDialect } from './SqlDialect';
import type { StackType } from './StackType';
import type { ValueField } from './ValueField';

export interface ChartOptions {
    domainColumnId: string | null;
    seriesColumnIds: Array<string> | null;
    chartType: ChartType | null;
    stackType: StackType | null;
    seriesFormats: Array<SeriesFormat> | null;
    cumulative: boolean | null;
    horizontal: boolean | null;
    aggregate: boolean | null;
    xAxisTitle: string | null;
    yAxisTitle: string | null;
    title: string | null;
    rowFields: Array<AggregationField> | null;
    valueFields: Array<ValueField> | null;
    sqlDialect: SqlDialect | null;
}
