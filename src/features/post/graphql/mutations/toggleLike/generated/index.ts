import * as Types from '../../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type AddLikeMutationVariables = Types.Exact<{
  postId: Types.Scalars['Int'];
  userId: Types.Scalars['String'];
}>;

export type AddLikeMutation = { __typename?: 'mutation_root' } & {
  addLike?: Types.Maybe<
    { __typename?: 'like' } & Pick<Types.Like, 'id'> & {
        post: { __typename?: 'post' } & Pick<Types.Post, 'id'> & {
            likes: Array<{ __typename?: 'like' } & Pick<Types.Like, 'id'>>;
            likes_aggregate: { __typename?: 'like_aggregate' } & {
              aggregate?: Types.Maybe<
                { __typename?: 'like_aggregate_fields' } & Pick<
                  Types.LikeAggregateFields,
                  'count'
                >
              >;
            };
          };
      }
  >;
};

export type DeleteLikeMutationVariables = Types.Exact<{
  likeId: Types.Scalars['Int'];
  userId: Types.Scalars['String'];
}>;

export type DeleteLikeMutation = { __typename?: 'mutation_root' } & {
  deleteLike?: Types.Maybe<
    { __typename?: 'like' } & Pick<Types.Like, 'id'> & {
        post: { __typename?: 'post' } & Pick<Types.Post, 'id'> & {
            likes: Array<{ __typename?: 'like' } & Pick<Types.Like, 'id'>>;
            likes_aggregate: { __typename?: 'like_aggregate' } & {
              aggregate?: Types.Maybe<
                { __typename?: 'like_aggregate_fields' } & Pick<
                  Types.LikeAggregateFields,
                  'count'
                >
              >;
            };
          };
      }
  >;
};

export const AddLikeDocument = gql`
  mutation AddLike($postId: Int!, $userId: String!) {
    addLike(object: { postId: $postId }) {
      id
      post {
        id
        likes(where: { userId: { _eq: $userId } }) {
          id
        }
        likes_aggregate {
          aggregate {
            count
          }
        }
      }
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
 *      userId: // value for 'userId'
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
export const DeleteLikeDocument = gql`
  mutation DeleteLike($likeId: Int!, $userId: String!) {
    deleteLike(id: $likeId) {
      id
      post {
        id
        likes(where: { userId: { _eq: $userId } }) {
          id
        }
        likes_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;
export type DeleteLikeMutationFn = Apollo.MutationFunction<
  DeleteLikeMutation,
  DeleteLikeMutationVariables
>;

/**
 * __useDeleteLikeMutation__
 *
 * To run a mutation, you first call `useDeleteLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLikeMutation, { data, loading, error }] = useDeleteLikeMutation({
 *   variables: {
 *      likeId: // value for 'likeId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteLikeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteLikeMutation,
    DeleteLikeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteLikeMutation, DeleteLikeMutationVariables>(
    DeleteLikeDocument,
    options,
  );
}
export type DeleteLikeMutationHookResult = ReturnType<
  typeof useDeleteLikeMutation
>;
export type DeleteLikeMutationResult =
  Apollo.MutationResult<DeleteLikeMutation>;
export type DeleteLikeMutationOptions = Apollo.BaseMutationOptions<
  DeleteLikeMutation,
  DeleteLikeMutationVariables
>;
