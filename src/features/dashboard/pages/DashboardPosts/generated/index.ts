import * as Types from '../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchPostsForDashboardQueryVariables = Types.Exact<{
  userId: Types.Scalars['String'];
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
}>;

export type FetchPostsForDashboardQuery = { __typename?: 'query_root' } & {
  posts: Array<
    { __typename?: 'post' } & Pick<
      Types.Post,
      'id' | 'title' | 'createdAt' | 'updatedAt'
    >
  >;
  postsAggregate: { __typename?: 'post_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'post_aggregate_fields' } & Pick<
        Types.PostAggregateFields,
        'count'
      >
    >;
  };
};

export const FetchPostsForDashboardDocument = gql`
  query FetchPostsForDashboard($userId: String!, $limit: Int!, $offset: Int!) {
    posts(
      where: { userId: { _eq: $userId } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      id
      title
      createdAt
      updatedAt
    }
    postsAggregate {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useFetchPostsForDashboardQuery__
 *
 * To run a query within a React component, call `useFetchPostsForDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPostsForDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPostsForDashboardQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFetchPostsForDashboardQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchPostsForDashboardQuery,
    FetchPostsForDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FetchPostsForDashboardQuery,
    FetchPostsForDashboardQueryVariables
  >(FetchPostsForDashboardDocument, options);
}
export function useFetchPostsForDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchPostsForDashboardQuery,
    FetchPostsForDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchPostsForDashboardQuery,
    FetchPostsForDashboardQueryVariables
  >(FetchPostsForDashboardDocument, options);
}
export type FetchPostsForDashboardQueryHookResult = ReturnType<
  typeof useFetchPostsForDashboardQuery
>;
export type FetchPostsForDashboardLazyQueryHookResult = ReturnType<
  typeof useFetchPostsForDashboardLazyQuery
>;
export type FetchPostsForDashboardQueryResult = Apollo.QueryResult<
  FetchPostsForDashboardQuery,
  FetchPostsForDashboardQueryVariables
>;
export function refetchFetchPostsForDashboardQuery(
  variables?: FetchPostsForDashboardQueryVariables,
) {
  return { query: FetchPostsForDashboardDocument, variables: variables };
}
