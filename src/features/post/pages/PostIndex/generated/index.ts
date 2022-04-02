import * as Types from '../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchPostsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type FetchPostsQuery = { __typename?: 'query_root' } & {
  posts: Array<
    { __typename?: 'post' } & Pick<
      Types.Post,
      'id' | 'title' | 'content' | 'description'
    >
  >;
};

export const FetchPostsDocument = gql`
  query FetchPosts {
    posts {
      id
      title
      content
      description
    }
  }
`;

/**
 * __useFetchPostsQuery__
 *
 * To run a query within a React component, call `useFetchPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchPostsQuery,
    FetchPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchPostsQuery, FetchPostsQueryVariables>(
    FetchPostsDocument,
    options,
  );
}
export function useFetchPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchPostsQuery,
    FetchPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchPostsQuery, FetchPostsQueryVariables>(
    FetchPostsDocument,
    options,
  );
}
export type FetchPostsQueryHookResult = ReturnType<typeof useFetchPostsQuery>;
export type FetchPostsLazyQueryHookResult = ReturnType<
  typeof useFetchPostsLazyQuery
>;
export type FetchPostsQueryResult = Apollo.QueryResult<
  FetchPostsQuery,
  FetchPostsQueryVariables
>;
export function refetchFetchPostsQuery(variables?: FetchPostsQueryVariables) {
  return { query: FetchPostsDocument, variables: variables };
}
