import * as Types from '../../../../../graphql/generated/types';

import { PostTagsFragment } from '../../../components/PostTags/generated/index';
import { gql } from '@apollo/client';
import { PostTagsFragmentDoc } from '../../../components/PostTags/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchPostQueryVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
}>;

export type FetchPostQuery = { __typename?: 'query_root' } & {
  post?: Types.Maybe<
    { __typename?: 'post' } & Pick<
      Types.Post,
      'id' | 'title' | 'description' | 'content' | 'createdAt' | 'updatedAt'
    > & {
        user: { __typename?: 'user' } & Pick<
          Types.User,
          'id' | 'name' | 'picture'
        >;
        likes_aggregate: { __typename?: 'like_aggregate' } & {
          aggregate?: Types.Maybe<
            { __typename?: 'like_aggregate_fields' } & Pick<
              Types.LikeAggregateFields,
              'count'
            >
          >;
        };
      } & PostTagsFragment
  >;
};

export type FetchPostAccessoriesQueryVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
  userId: Types.Scalars['String'];
}>;

export type FetchPostAccessoriesQuery = { __typename?: 'query_root' } & {
  post?: Types.Maybe<
    { __typename?: 'post' } & Pick<Types.Post, 'id'> & {
        likes: Array<{ __typename?: 'like' } & Pick<Types.Like, 'id'>>;
        stocks: Array<{ __typename?: 'stock' } & Pick<Types.Stock, 'id'>>;
      }
  >;
};

export const FetchPostDocument = gql`
  query FetchPost($postId: Int!) {
    post(id: $postId) {
      id
      title
      description
      content
      createdAt
      updatedAt
      user {
        id
        name
        picture
      }
      likes_aggregate {
        aggregate {
          count
        }
      }
      ...PostTags
    }
  }
  ${PostTagsFragmentDoc}
`;

/**
 * __useFetchPostQuery__
 *
 * To run a query within a React component, call `useFetchPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useFetchPostQuery(
  baseOptions: Apollo.QueryHookOptions<FetchPostQuery, FetchPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchPostQuery, FetchPostQueryVariables>(
    FetchPostDocument,
    options,
  );
}
export function useFetchPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchPostQuery,
    FetchPostQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchPostQuery, FetchPostQueryVariables>(
    FetchPostDocument,
    options,
  );
}
export type FetchPostQueryHookResult = ReturnType<typeof useFetchPostQuery>;
export type FetchPostLazyQueryHookResult = ReturnType<
  typeof useFetchPostLazyQuery
>;
export type FetchPostQueryResult = Apollo.QueryResult<
  FetchPostQuery,
  FetchPostQueryVariables
>;
export function refetchFetchPostQuery(variables?: FetchPostQueryVariables) {
  return { query: FetchPostDocument, variables: variables };
}
export const FetchPostAccessoriesDocument = gql`
  query FetchPostAccessories($postId: Int!, $userId: String!) {
    post(id: $postId) {
      id
      likes(where: { userId: { _eq: $userId } }) {
        id
      }
      stocks(where: { userId: { _eq: $userId } }) {
        id
      }
    }
  }
`;

/**
 * __useFetchPostAccessoriesQuery__
 *
 * To run a query within a React component, call `useFetchPostAccessoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPostAccessoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPostAccessoriesQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFetchPostAccessoriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchPostAccessoriesQuery,
    FetchPostAccessoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FetchPostAccessoriesQuery,
    FetchPostAccessoriesQueryVariables
  >(FetchPostAccessoriesDocument, options);
}
export function useFetchPostAccessoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchPostAccessoriesQuery,
    FetchPostAccessoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchPostAccessoriesQuery,
    FetchPostAccessoriesQueryVariables
  >(FetchPostAccessoriesDocument, options);
}
export type FetchPostAccessoriesQueryHookResult = ReturnType<
  typeof useFetchPostAccessoriesQuery
>;
export type FetchPostAccessoriesLazyQueryHookResult = ReturnType<
  typeof useFetchPostAccessoriesLazyQuery
>;
export type FetchPostAccessoriesQueryResult = Apollo.QueryResult<
  FetchPostAccessoriesQuery,
  FetchPostAccessoriesQueryVariables
>;
export function refetchFetchPostAccessoriesQuery(
  variables?: FetchPostAccessoriesQueryVariables,
) {
  return { query: FetchPostAccessoriesDocument, variables: variables };
}
