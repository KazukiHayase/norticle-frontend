import * as Types from '../../../../../graphql/generated/types';

import { PostCardFragment } from '../../../components/PostCard/generated/index';
import { gql } from '@apollo/client';
import { PostCardFragmentDoc } from '../../../components/PostCard/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type SearchPostsQueryVariables = Types.Exact<{
  where: Types.PostBoolExp;
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
}>;

export type SearchPostsQuery = { __typename?: 'query_root' } & {
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

export const SearchPostsDocument = gql`
  query SearchPosts($where: post_bool_exp!, $limit: Int!, $offset: Int!) {
    posts(
      where: $where
      limit: $limit
      offset: $offset
      order_by: { likes_aggregate: { count: desc } }
    ) {
      ...PostCard
    }
    postsAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
  ${PostCardFragmentDoc}
`;

/**
 * __useSearchPostsQuery__
 *
 * To run a query within a React component, call `useSearchPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPostsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSearchPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchPostsQuery,
    SearchPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchPostsQuery, SearchPostsQueryVariables>(
    SearchPostsDocument,
    options,
  );
}
export function useSearchPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchPostsQuery,
    SearchPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchPostsQuery, SearchPostsQueryVariables>(
    SearchPostsDocument,
    options,
  );
}
export type SearchPostsQueryHookResult = ReturnType<typeof useSearchPostsQuery>;
export type SearchPostsLazyQueryHookResult = ReturnType<
  typeof useSearchPostsLazyQuery
>;
export type SearchPostsQueryResult = Apollo.QueryResult<
  SearchPostsQuery,
  SearchPostsQueryVariables
>;
export function refetchSearchPostsQuery(variables?: SearchPostsQueryVariables) {
  return { query: SearchPostsDocument, variables: variables };
}
