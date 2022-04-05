import * as Types from '../../../../../../graphql/generated/types';

import { PostFormFragment } from '../../../../components/PostForm/generated/index';
import { gql } from '@apollo/client';
import { PostFormFragmentDoc } from '../../../../components/PostForm/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type UpdatePostMutationVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
  post: Types.PostSetInput;
}>;

export type UpdatePostMutation = { __typename?: 'mutation_root' } & {
  updatePost?: Types.Maybe<
    { __typename?: 'post' } & Pick<Types.Post, 'id'> & PostFormFragment
  >;
};

export const UpdatePostDocument = gql`
  mutation UpdatePost($postId: Int!, $post: post_set_input!) {
    updatePost(pk_columns: { id: $postId }, _set: $post) {
      id
      ...PostForm
    }
  }
  ${PostFormFragmentDoc}
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      post: // value for 'post'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    options,
  );
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>;
export type UpdatePostMutationResult =
  Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;
