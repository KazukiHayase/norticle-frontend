import * as Types from '../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type FetchStockedPostsQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
}>;

export type FetchStockedPostsQuery = { __typename?: 'query_root' } & {
  stocks: Array<
    { __typename?: 'stock' } & Pick<Types.Stock, 'id'> & {
        post: { __typename?: 'post' } & Pick<
          Types.Post,
          'id' | 'title' | 'content' | 'createdAt' | 'updatedAt'
        >;
      }
  >;
  stocksAggregate: { __typename?: 'stock_aggregate' } & {
    aggregate?: Types.Maybe<
      { __typename?: 'stock_aggregate_fields' } & Pick<
        Types.StockAggregateFields,
        'count'
      >
    >;
  };
};

export const FetchStockedPostsDocument = gql`
  query FetchStockedPosts($limit: Int!, $offset: Int!) {
    stocks(limit: $limit, offset: $offset, order_by: { createdAt: desc }) {
      id
      post {
        id
        title
        content
        createdAt
        updatedAt
      }
    }
    stocksAggregate {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useFetchStockedPostsQuery__
 *
 * To run a query within a React component, call `useFetchStockedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchStockedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchStockedPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFetchStockedPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchStockedPostsQuery,
    FetchStockedPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FetchStockedPostsQuery,
    FetchStockedPostsQueryVariables
  >(FetchStockedPostsDocument, options);
}
export function useFetchStockedPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchStockedPostsQuery,
    FetchStockedPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchStockedPostsQuery,
    FetchStockedPostsQueryVariables
  >(FetchStockedPostsDocument, options);
}
export type FetchStockedPostsQueryHookResult = ReturnType<
  typeof useFetchStockedPostsQuery
>;
export type FetchStockedPostsLazyQueryHookResult = ReturnType<
  typeof useFetchStockedPostsLazyQuery
>;
export type FetchStockedPostsQueryResult = Apollo.QueryResult<
  FetchStockedPostsQuery,
  FetchStockedPostsQueryVariables
>;
export function refetchFetchStockedPostsQuery(
  variables?: FetchStockedPostsQueryVariables,
) {
  return { query: FetchStockedPostsDocument, variables: variables };
}
