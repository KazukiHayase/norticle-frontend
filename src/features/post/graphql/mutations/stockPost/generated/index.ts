import * as Types from '../../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type StockPostMutationVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
}>;

export type StockPostMutation = { __typename?: 'mutation_root' } & {
  addStock?: Types.Maybe<{ __typename?: 'stock' } & Pick<Types.Stock, 'id'>>;
};

export const StockPostDocument = gql`
  mutation StockPost($postId: Int!) {
    addStock(object: { post_id: $postId }) {
      id
    }
  }
`;
export type StockPostMutationFn = Apollo.MutationFunction<
  StockPostMutation,
  StockPostMutationVariables
>;

/**
 * __useStockPostMutation__
 *
 * To run a mutation, you first call `useStockPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStockPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stockPostMutation, { data, loading, error }] = useStockPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useStockPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StockPostMutation,
    StockPostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<StockPostMutation, StockPostMutationVariables>(
    StockPostDocument,
    options,
  );
}
export type StockPostMutationHookResult = ReturnType<
  typeof useStockPostMutation
>;
export type StockPostMutationResult = Apollo.MutationResult<StockPostMutation>;
export type StockPostMutationOptions = Apollo.BaseMutationOptions<
  StockPostMutation,
  StockPostMutationVariables
>;
