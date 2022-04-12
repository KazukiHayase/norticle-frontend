import * as Types from '../../../../../../graphql/generated/types';

import { PostFormFragment } from '../../../../components/PostForm/generated/index';
import { gql } from '@apollo/client';
import { PostFormFragmentDoc } from '../../../../components/PostForm/generated/index';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type UpdatePostMutationVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
  post: Types.PostSetInput;
  taggings: Array<Types.TaggingInsertInput> | Types.TaggingInsertInput;
}>;

export type UpdatePostMutation = { __typename?: 'mutation_root' } & {
  updatePost?: Types.Maybe<
    { __typename?: 'post' } & Pick<Types.Post, 'id'> & PostFormFragment
  >;
  deleteTaggings?: Types.Maybe<
    { __typename?: 'tagging_mutation_response' } & {
      returning: Array<{ __typename?: 'tagging' } & Pick<Types.Tagging, 'id'>>;
    }
  >;
  addTaggings?: Types.Maybe<
    { __typename?: 'tagging_mutation_response' } & {
      returning: Array<
        { __typename?: 'tagging' } & Pick<
          Types.Tagging,
          'id' | 'post_id' | 'tag_id'
        >
      >;
    }
  >;
};

export const UpdatePostDocument = gql`
  mutation UpdatePost(
    $postId: Int!
    $post: post_set_input!
    $taggings: [tagging_insert_input!]!
  ) {
    updatePost(pk_columns: { id: $postId }, _set: $post) {
      id
      ...PostForm
    }
    deleteTaggings(where: { post_id: { _eq: $postId } }) {
      returning {
        id
      }
    }
    addTaggings(objects: $taggings) {
      returning {
        id
        post_id
        tag_id
      }
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
 *      taggings: // value for 'taggings'
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
