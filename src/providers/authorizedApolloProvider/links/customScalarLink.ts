import { withScalars } from 'apollo-link-scalars';
import { buildClientSchema, IntrospectionQuery } from 'graphql';
import introspectionResult from 'graphql.schema.json';

import { Maybe } from '@/graphql/generated/types';
import { formatDate } from '@/services/date';

// CustomScalarをTSの型に変換するためのApolloLink
// See: https://github.com/apollographql/apollo-client/issues/8857, https://github.com/eturino/apollo-link-scalars
export const customScalarLink = withScalars({
  schema: buildClientSchema(
    introspectionResult as unknown as IntrospectionQuery,
  ),
  typesMap: {
    date: {
      serialize: (parsed: Maybe<Date>) => {
        return parsed && formatDate(parsed, 'dateISO');
      },
      parseValue: (raw: Maybe<string>) => {
        return raw && new Date(raw);
      },
    },
    timetz: {
      serialize: (parsed: Maybe<Date>) => {
        return parsed && formatDate(parsed, 'timeISO');
      },
      parseValue: (raw: string) => {
        return raw && new Date(raw);
      },
    },
    timestamptz: {
      serialize: (parsed: Maybe<Date>) => {
        return parsed && formatDate(parsed, 'datetimeISO');
      },
      parseValue: (raw: string) => {
        return raw && new Date(raw);
      },
    },
  },
});
