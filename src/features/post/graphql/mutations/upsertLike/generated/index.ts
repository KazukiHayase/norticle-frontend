import * as Types from '../../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type AddLikeMutationVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
}>;

export type AddLikeMutation = { __typename?: 'mutation_root' } & {
  addLike?: Types.Maybe<
    { __typename?: 'like' } & Pick<
      Types.Like,
      'id' | 'user_id' | 'post_id' | 'count'
    >
  >;
};

export type UpdateLikeMutationVariables = Types.Exact<{
  likeId: Types.Scalars['Int'];
}>;

export type UpdateLikeMutation = { __typename?: 'mutation_root' } & {
  updateLike?: Types.Maybe<
    { __typename?: 'like' } & Pick<
      Types.Like,
      'id' | 'user_id' | 'post_id' | 'count'
    >
  >;
};

export const AddLikeDocument = gql`
  mutation AddLike($postId: Int!) {
    addLike(object: { post_id: $postId }) {
      id
      user_id
      post_id
      count
    }
  }
`;
export type AddLikeMutationFn = Apollo.MutationFunction<
  AddLikeMutation,
  AddLikeMutationVariables
>;

/**
 * __useAddLikeMutation__
 *
 * To run a mutation, you first call `useAddLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLikeMutation, { data, loading, error }] = useAddLikeMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddLikeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddLikeMutation,
    AddLikeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddLikeMutation, AddLikeMutationVariables>(
    AddLikeDocument,
    options,
  );
}
export type AddLikeMutationHookResult = ReturnType<typeof useAddLikeMutation>;
export type AddLikeMutationResult = Apollo.MutationResult<AddLikeMutation>;
export type AddLikeMutationOptions = Apollo.BaseMutationOptions<
  AddLikeMutation,
  AddLikeMutationVariables
>;
export const UpdateLikeDocument = gql`
  mutation UpdateLike($likeId: Int!) {
    updateLike(pk_columns: { id: $likeId }, _inc: { count: 1 }) {
      id
      user_id
      post_id
      count
    }
  }
`;
export type UpdateLikeMutationFn = Apollo.MutationFunction<
  UpdateLikeMutation,
  UpdateLikeMutationVariables
>;

/**
 * __useUpdateLikeMutation__
 *
 * To run a mutation, you first call `useUpdateLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLikeMutation, { data, loading, error }] = useUpdateLikeMutation({
 *   variables: {
 *      likeId: // value for 'likeId'
 *   },
 * });
 */
export function useUpdateLikeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLikeMutation,
    UpdateLikeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateLikeMutation, UpdateLikeMutationVariables>(
    UpdateLikeDocument,
    options,
  );
}
export type UpdateLikeMutationHookResult = ReturnType<
  typeof useUpdateLikeMutation
>;
export type UpdateLikeMutationResult =
  Apollo.MutationResult<UpdateLikeMutation>;
export type UpdateLikeMutationOptions = Apollo.BaseMutationOptions<
  UpdateLikeMutation,
  UpdateLikeMutationVariables
>;