// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AggregationField } from './AggregationField';
import type { CohortOptions } from './CohortOptions';
import type { SqlDialect } from './SqlDialect';
import type { SqlFormula } from './SqlFormula';
import type { SqlJoinContext } from './SqlJoinContext';
import type { UniqueValuesOptions } from './UniqueValuesOptions';
import type { ValueField } from './ValueField';

export type StoreType =
    | 'text'
    | { sqlJoinSource: { context: SqlJoinContext } }
    | {
          sqlPivotSource: {
              source_id: string;
              column_fields: Array<AggregationField>;
              row_fields: Array<AggregationField>;
              value_fields: Array<ValueField>;
          };
      }
    | {
          sqlSource: {
              database: string | null;
              schema: string;
              table: string;
              warehouse_auth_id: string;
              sql_dialect: SqlDialect;
              primary_key_ids: Array<string>;
          };
      }
    | { sqlCloneSource: { source_id: string } }
    | { sqlTextFormula: { formula: SqlFormula } }
    | { sqlSpreadsheet: { schema: string; table: string; warehouse_auth_id: string; initial_query: string } }
    | { sqlCohort: { source_id: string; options: CohortOptions } }
    | { sqlUniqueValues: { source_id: string; options: UniqueValuesOptions } };
