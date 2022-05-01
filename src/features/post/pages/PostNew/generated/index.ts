import * as Types from '../../../../../graphql/generated/types';

import { PostCardFragment } from '../../../components/PostCard/generated/index';
import { gql } from '@apollo/client';
import { PostCardFragmentDoc } from '../../../components/PostCard/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchNewPostsQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
}>;

export type FetchNewPostsQuery = { __typename?: 'query_root' } & {
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

export const FetchNewPostsDocument = gql`
  query FetchNewPosts($limit: Int!, $offset: Int!) {
    posts(limit: $limit, offset: $offset, order_by: { createdAt: desc }) {
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
 * __useFetchNewPostsQuery__
 *
 * To run a query within a React component, call `useFetchNewPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchNewPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchNewPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFetchNewPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchNewPostsQuery,
    FetchNewPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchNewPostsQuery, FetchNewPostsQueryVariables>(
    FetchNewPostsDocument,
    options,
  );
}
export function useFetchNewPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchNewPostsQuery,
    FetchNewPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchNewPostsQuery, FetchNewPostsQueryVariables>(
    FetchNewPostsDocument,
    options,
  );
}
export type FetchNewPostsQueryHookResult = ReturnType<
  typeof useFetchNewPostsQuery
>;
export type FetchNewPostsLazyQueryHookResult = ReturnType<
  typeof useFetchNewPostsLazyQuery
>;
export type FetchNewPostsQueryResult = Apollo.QueryResult<
  FetchNewPostsQuery,
  FetchNewPostsQueryVariables
>;
export function refetchFetchNewPostsQuery(
  variables?: FetchNewPostsQueryVariables,
) {
  return { query: FetchNewPostsDocument, variables: variables };
}
