// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ChartMargin } from './ChartMargin';
import type { ChartType } from './ChartType';
import type { ChartVersion } from './ChartVersion';
import type { ColorDimension } from './ColorDimension';
import type { ColorTheme } from './ColorTheme';
import type { SeriesConfig } from './SeriesConfig';
import type { SeriesFormat } from './SeriesFormat';
import type { StackType } from './StackType';
import type { Trendline } from './Trendline';

export interface ChartConfig {
    chartType: ChartType;
    domainColumnId: string;
    seriesColumnIds: Array<string>;
    stackType: StackType | null;
    seriesFormats: Array<SeriesFormat> | null;
    cumulative: boolean;
    xAxisTitle: string | null;
    yAxisTitle: string | null;
    trendline: Trendline | null;
    horizontal: boolean;
    showBarTotals: boolean;
    colorTheme: ColorTheme;
    colorDimension: ColorDimension;
    highlightColumnId: string | null;
    colorBackgroundColumnId: string | null;
    margin: ChartMargin | null;
    seriesConfigs: Record<string, SeriesConfig>;
    version: ChartVersion;
}
