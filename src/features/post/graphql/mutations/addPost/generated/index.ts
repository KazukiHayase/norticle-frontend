import * as Types from '../../../../../../graphql/generated/types';

import { PostFormFragment } from '../../../../components/PostForm/generated/index';
import { gql } from '@apollo/client';
import { PostFormFragmentDoc } from '../../../../components/PostForm/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type AddPostMutationVariables = Types.Exact<{
  post: Types.PostInsertInput;
}>;

export type AddPostMutation = { __typename?: 'mutation_root' } & {
  addPost?: Types.Maybe<
    { __typename?: 'post' } & Pick<Types.Post, 'id'> & PostFormFragment
  >;
};

export const AddPostDocument = gql`
  mutation AddPost($post: post_insert_input!) {
    addPost(object: $post) {
      id
      ...PostForm
    }
  }
  ${PostFormFragmentDoc}
`;
export type AddPostMutationFn = Apollo.MutationFunction<
  AddPostMutation,
  AddPostMutationVariables
>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useAddPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddPostMutation,
    AddPostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(
    AddPostDocument,
    options,
  );
}
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<
  AddPostMutation,
  AddPostMutationVariables
>;
