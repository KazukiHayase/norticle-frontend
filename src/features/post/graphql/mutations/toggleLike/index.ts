import { useApolloClient } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useState } from 'react';

import {
  FetchPostAccessoriesDocument,
  FetchPostAccessoriesQuery,
  FetchPostAccessoriesQueryVariables,
  FetchPostDocument,
  FetchPostQuery,
  FetchPostQueryVariables,
} from '@/features/post/pages/PostDetail/generated';
import { useNotifier } from '@/hooks/useNotifier';

import { useAddLikeMutation, useDeleteLikeMutation } from './generated';

type ToggleLikeHookResult = [
  (postId: number, likeId?: number) => void,
  { loading: boolean },
];

export const useToggleLike = (): ToggleLikeHookResult => {
  const { isAuthenticated, user } = useAuth0();
  const client = useApolloClient();

  const [loading, setLoading] = useState<boolean>(false);
  const { notice } = useNotifier();
  const [addLike] = useAddLikeMutation({
    context: { disableNotification: true },
  });
  const [deleteLike] = useDeleteLikeMutation({
    context: { disableNotification: true },
  });

  // likeIdがあるかどうかでinsert/deleteを分ける
  const toggleLike: ToggleLikeHookResult[0] = useCallback(
    async (postId, likeId) => {
      setLoading(true);

      const userId = user?.sub ?? '';

      const existingPostData = client.readQuery<
        FetchPostQuery,
        FetchPostQueryVariables
      >({
        query: FetchPostDocument,
        variables: { postId },
      });
      const existingPostAccessoriesData = client.readQuery<
        FetchPostAccessoriesQuery,
        FetchPostAccessoriesQueryVariables
      >({
        query: FetchPostAccessoriesDocument,
        variables: { postId, userId },
      });

      const existingPost = existingPostData?.post;
      const existingPostAccessories = existingPostAccessoriesData?.post;
      if (!existingPost || !existingPostAccessories) {
        notice('エラーが発生しました', 'error');
        return;
      }

      const { newLikes, newLikesAggregateCount } = likeId
        ? {
            newLikes: [],
            newLikesAggregateCount:
              (existingPost.likes_aggregate.aggregate?.count ?? 0) - 1,
          }
        : {
            newLikes: [{ __typename: 'like' as const, id: 0 }],
            newLikesAggregateCount:
              (existingPost.likes_aggregate.aggregate?.count ?? 0) + 1,
          };

      client.writeQuery<FetchPostQuery, FetchPostQueryVariables>({
        query: FetchPostDocument,
        variables: { postId },
        data: {
          ...existingPostData,
          post: {
            ...existingPost,
            likes_aggregate: {
              __typename: 'like_aggregate',
              aggregate: {
                __typename: 'like_aggregate_fields',
                count: newLikesAggregateCount,
              },
            },
          },
        },
      });
      client.writeQuery<
        FetchPostAccessoriesQuery,
        FetchPostAccessoriesQueryVariables
      >({
        query: FetchPostAccessoriesDocument,
        variables: { postId, userId },
        data: {
          ...existingPostAccessoriesData,
          post: {
            ...existingPostAccessories,
            likes: newLikes,
          },
        },
      });

      try {
        likeId
          ? await deleteLike({ variables: { likeId, userId } })
          : await addLike({
              variables: { postId, userId },
            });
      } catch {
        client.writeQuery<FetchPostQuery, FetchPostQueryVariables>({
          query: FetchPostDocument,
          variables: { postId },
          data: existingPostData,
        });
        client.writeQuery<
          FetchPostAccessoriesQuery,
          FetchPostAccessoriesQueryVariables
        >({
          query: FetchPostAccessoriesDocument,
          variables: { postId, userId },
          data: existingPostAccessoriesData,
        });

        notice('エラーが発生しました', 'error');
      } finally {
        setLoading(false);
      }
    },
    [isAuthenticated, user, notice, client, addLike, deleteLike, setLoading],
  );

  return [toggleLike, { loading }];
};
