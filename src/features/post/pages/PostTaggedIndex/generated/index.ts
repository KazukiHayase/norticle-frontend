import * as Types from '../../../../../graphql/generated/types';

import { PostCardFragment } from '../../../components/PostCard/generated/index';
import { gql } from '@apollo/client';
import { PostCardFragmentDoc } from '../../../components/PostCard/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchTaggedPostsQueryVariables = Types.Exact<{
  tagName: Types.Scalars['String'];
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
}>;

export type FetchTaggedPostsQuery = { __typename?: 'query_root' } & {
  posts: Array<{ __typename?: 'post' } & PostCardFragment>;
  postsAggregate: { __typename?: 'post_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'post_aggregate_fields' } & Pick<
        Types.PostAggregateFields,
        'count'
      >
    >;
  };
  tagsAggregate: { __typename?: 'tag_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'tag_aggregate_fields' } & Pick<
        Types.TagAggregateFields,
        'count'
      >
    >;
  };
};

export const FetchTaggedPostsDocument = gql`
  query FetchTaggedPosts($tagName: String!, $limit: Int!, $offset: Int!) {
    posts(
      where: { taggings: { tag: { name: { _eq: $tagName } } } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      ...PostCard
    }
    postsAggregate(where: { taggings: { tag: { name: { _eq: $tagName } } } }) {
      aggregate {
        count
      }
    }
    tagsAggregate(where: { name: { _eq: $tagName } }) {
      aggregate {
        count
      }
    }
  }
  ${PostCardFragmentDoc}
`;

/**
 * __useFetchTaggedPostsQuery__
 *
 * To run a query within a React component, call `useFetchTaggedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTaggedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTaggedPostsQuery({
 *   variables: {
 *      tagName: // value for 'tagName'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFetchTaggedPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchTaggedPostsQuery,
    FetchTaggedPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchTaggedPostsQuery, FetchTaggedPostsQueryVariables>(
    FetchTaggedPostsDocument,
    options,
  );
}
export function useFetchTaggedPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchTaggedPostsQuery,
    FetchTaggedPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchTaggedPostsQuery,
    FetchTaggedPostsQueryVariables
  >(FetchTaggedPostsDocument, options);
}
export type FetchTaggedPostsQueryHookResult = ReturnType<
  typeof useFetchTaggedPostsQuery
>;
export type FetchTaggedPostsLazyQueryHookResult = ReturnType<
  typeof useFetchTaggedPostsLazyQuery
>;
export type FetchTaggedPostsQueryResult = Apollo.QueryResult<
  FetchTaggedPostsQuery,
  FetchTaggedPostsQueryVariables
>;
export function refetchFetchTaggedPostsQuery(
  variables?: FetchTaggedPostsQueryVariables,
) {
  return { query: FetchTaggedPostsDocument, variables: variables };
}
