import * as Types from '../../../../../graphql/generated/types';

import { PostCardFragment } from '../../../components/PostCard/generated/index';
import { gql } from '@apollo/client';
import { PostCardFragmentDoc } from '../../../components/PostCard/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchTrendPostsQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
}>;

export type FetchTrendPostsQuery = { __typename?: 'query_root' } & {
  posts: Array<{ __typename?: 'post' } & PostCardFragment>;
  postsAggregate: { __typename?: 'post_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'post_aggregate_fields' } & Pick<
        Types.PostAggregateFields,
        'count'
      >
    >;
  };
};

export const FetchTrendPostsDocument = gql`
  query FetchTrendPosts($limit: Int!, $offset: Int!) {
    posts(
      limit: $limit
      offset: $offset
      order_by: { likes_aggregate: { sum: { count: desc_nulls_last } } }
    ) {
      ...PostCard
    }
    postsAggregate {
      aggregate {
        count
      }
    }
  }
  ${PostCardFragmentDoc}
`;

/**
 * __useFetchTrendPostsQuery__
 *
 * To run a query within a React component, call `useFetchTrendPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTrendPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTrendPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFetchTrendPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchTrendPostsQuery,
    FetchTrendPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchTrendPostsQuery, FetchTrendPostsQueryVariables>(
    FetchTrendPostsDocument,
    options,
  );
}
export function useFetchTrendPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchTrendPostsQuery,
    FetchTrendPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchTrendPostsQuery,
    FetchTrendPostsQueryVariables
  >(FetchTrendPostsDocument, options);
}
export type FetchTrendPostsQueryHookResult = ReturnType<
  typeof useFetchTrendPostsQuery
>;
export type FetchTrendPostsLazyQueryHookResult = ReturnType<
  typeof useFetchTrendPostsLazyQuery
>;
export type FetchTrendPostsQueryResult = Apollo.QueryResult<
  FetchTrendPostsQuery,
  FetchTrendPostsQueryVariables
>;
export function refetchFetchTrendPostsQuery(
  variables?: FetchTrendPostsQueryVariables,
) {
  return { query: FetchTrendPostsDocument, variables: variables };
}
