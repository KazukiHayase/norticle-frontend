import * as Types from '../../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type UnStockPostMutationVariables = Types.Exact<{
  stockId: Types.Scalars['Int'];
}>;

export type UnStockPostMutation = { __typename?: 'mutation_root' } & {
  deleteStock?: Types.Maybe<{ __typename?: 'stock' } & Pick<Types.Stock, 'id'>>;
};

export const UnStockPostDocument = gql`
  mutation UnStockPost($stockId: Int!) {
    deleteStock(id: $stockId) {
      id
    }
  }
`;
export type UnStockPostMutationFn = Apollo.MutationFunction<
  UnStockPostMutation,
  UnStockPostMutationVariables
>;

/**
 * __useUnStockPostMutation__
 *
 * To run a mutation, you first call `useUnStockPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnStockPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unStockPostMutation, { data, loading, error }] = useUnStockPostMutation({
 *   variables: {
 *      stockId: // value for 'stockId'
 *   },
 * });
 */
export function useUnStockPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnStockPostMutation,
    UnStockPostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UnStockPostMutation, UnStockPostMutationVariables>(
    UnStockPostDocument,
    options,
  );
}
export type UnStockPostMutationHookResult = ReturnType<
  typeof useUnStockPostMutation
>;
export type UnStockPostMutationResult =
  Apollo.MutationResult<UnStockPostMutation>;
export type UnStockPostMutationOptions = Apollo.BaseMutationOptions<
  UnStockPostMutation,
  UnStockPostMutationVariables
>;
