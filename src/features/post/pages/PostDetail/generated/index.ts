import * as Types from '../../../../../graphql/generated/types';

import { PostTagsFragment } from '../../../components/PostTags/generated/index';
import { gql } from '@apollo/client';
import { PostTagsFragmentDoc } from '../../../components/PostTags/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchPostQueryVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
  userId: Types.Scalars['String'];
  isLoggedIn?: Types.Maybe<Types.Scalars['Boolean']>;
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
        likes?: Types.Maybe<
          Array<{ __typename?: 'like' } & Pick<Types.Like, 'id'>>
        >;
        stocks?: Types.Maybe<
          Array<{ __typename?: 'stock' } & Pick<Types.Stock, 'id'>>
        >;
      } & PostTagsFragment
  >;
};

export const FetchPostDocument = gql`
  query FetchPost(
    $postId: Int!
    $userId: String!
    $isLoggedIn: Boolean = false
  ) {
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
      likes(where: { userId: { _eq: $userId } }) @include(if: $isLoggedIn) {
        id
      }
      stocks @include(if: $isLoggedIn) {
        id
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
 *      userId: // value for 'userId'
 *      isLoggedIn: // value for 'isLoggedIn'
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
