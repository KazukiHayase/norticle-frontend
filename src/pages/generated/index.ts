import * as Types from '../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type SampleQueryVariables = Types.Exact<{ [key: string]: never }>;

export type SampleQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Types.Users, 'id' | 'name'>>;
};

export const SampleDocument = gql`
  query Sample {
    users {
      id
      name
    }
  }
`;

/**
 * __useSampleQuery__
 *
 * To run a query within a React component, call `useSampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSampleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSampleQuery({
 *   variables: {
 *   },
 * });
 */
export function useSampleQuery(
  baseOptions?: Apollo.QueryHookOptions<SampleQuery, SampleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SampleQuery, SampleQueryVariables>(
    SampleDocument,
    options,
  );
}
export function useSampleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SampleQuery, SampleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SampleQuery, SampleQueryVariables>(
    SampleDocument,
    options,
  );
}
export type SampleQueryHookResult = ReturnType<typeof useSampleQuery>;
export type SampleLazyQueryHookResult = ReturnType<typeof useSampleLazyQuery>;
export type SampleQueryResult = Apollo.QueryResult<
  SampleQuery,
  SampleQueryVariables
>;
export function refetchSampleQuery(variables?: SampleQueryVariables) {
  return { query: SampleDocument, variables: variables };
}
