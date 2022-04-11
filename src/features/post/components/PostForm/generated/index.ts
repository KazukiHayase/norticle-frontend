import * as Types from '../../../../../graphql/generated/types';

import { TagsFragment } from '../../../graphql/fragments/options/generated/tags';
import { gql } from '@apollo/client';
import { TagsFragmentDoc } from '../../../graphql/fragments/options/generated/tags';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type PostFormFragment = { __typename?: 'post' } & Pick<
  Types.Post,
  'id' | 'title' | 'description' | 'content'
> & {
    taggings: Array<
      { __typename?: 'tagging' } & Pick<Types.Tagging, 'id'> & {
          tag: { __typename?: 'tag' } & Pick<Types.Tag, 'id' | 'name'>;
        }
    >;
  };

export type FetchPostFormOptionsQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type FetchPostFormOptionsQuery = {
  __typename?: 'query_root';
} & TagsFragment;

export const PostFormFragmentDoc = gql`
  fragment PostForm on post {
    id
    title
    description
    content
    taggings {
      id
      tag {
        id
        name
      }
    }
  }
`;
export const FetchPostFormOptionsDocument = gql`
  query FetchPostFormOptions {
    ...Tags
  }
  ${TagsFragmentDoc}
`;

/**
 * __useFetchPostFormOptionsQuery__
 *
 * To run a query within a React component, call `useFetchPostFormOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPostFormOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPostFormOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchPostFormOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchPostFormOptionsQuery,
    FetchPostFormOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FetchPostFormOptionsQuery,
    FetchPostFormOptionsQueryVariables
  >(FetchPostFormOptionsDocument, options);
}
export function useFetchPostFormOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchPostFormOptionsQuery,
    FetchPostFormOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchPostFormOptionsQuery,
    FetchPostFormOptionsQueryVariables
  >(FetchPostFormOptionsDocument, options);
}
export type FetchPostFormOptionsQueryHookResult = ReturnType<
  typeof useFetchPostFormOptionsQuery
>;
export type FetchPostFormOptionsLazyQueryHookResult = ReturnType<
  typeof useFetchPostFormOptionsLazyQuery
>;
export type FetchPostFormOptionsQueryResult = Apollo.QueryResult<
  FetchPostFormOptionsQuery,
  FetchPostFormOptionsQueryVariables
>;
export function refetchFetchPostFormOptionsQuery(
  variables?: FetchPostFormOptionsQueryVariables,
) {
  return { query: FetchPostFormOptionsDocument, variables: variables };
}
