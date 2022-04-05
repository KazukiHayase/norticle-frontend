import * as Types from '../../../../../graphql/generated/types';

import { PostFormFragment } from '../../../components/PostForm/generated/index';
import { gql } from '@apollo/client';
import { PostFormFragmentDoc } from '../../../components/PostForm/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchPostForEditQueryVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
}>;

export type FetchPostForEditQuery = { __typename?: 'query_root' } & {
  post?: Types.Maybe<
    { __typename?: 'post' } & Pick<Types.Post, 'userId'> & PostFormFragment
  >;
};

export const FetchPostForEditDocument = gql`
  query FetchPostForEdit($postId: Int!) {
    post(id: $postId) {
      userId
      ...PostForm
    }
  }
  ${PostFormFragmentDoc}
`;

/**
 * __useFetchPostForEditQuery__
 *
 * To run a query within a React component, call `useFetchPostForEditQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPostForEditQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPostForEditQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useFetchPostForEditQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchPostForEditQuery,
    FetchPostForEditQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchPostForEditQuery, FetchPostForEditQueryVariables>(
    FetchPostForEditDocument,
    options,
  );
}
export function useFetchPostForEditLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchPostForEditQuery,
    FetchPostForEditQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchPostForEditQuery,
    FetchPostForEditQueryVariables
  >(FetchPostForEditDocument, options);
}
export type FetchPostForEditQueryHookResult = ReturnType<
  typeof useFetchPostForEditQuery
>;
export type FetchPostForEditLazyQueryHookResult = ReturnType<
  typeof useFetchPostForEditLazyQuery
>;
export type FetchPostForEditQueryResult = Apollo.QueryResult<
  FetchPostForEditQuery,
  FetchPostForEditQueryVariables
>;
export function refetchFetchPostForEditQuery(
  variables?: FetchPostForEditQueryVariables,
) {
  return { query: FetchPostForEditDocument, variables: variables };
}
