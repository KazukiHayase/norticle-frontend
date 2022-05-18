import { useApolloClient } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useState } from 'react';

import {
  FetchPostAccessoriesDocument,
  FetchPostAccessoriesQuery,
  FetchPostAccessoriesQueryVariables,
} from '@/features/post/pages/PostDetail/generated';
import { Post, Stock } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';

import { useUnStockPostMutation } from './generated';

type UnStockPostHookResult = [
  (postId: Post['id'], stockId: Stock['id']) => void,
  { loading: boolean },
];

// TODO: likeみたいにstockとunStockを１つのhookにまとめる
export const useUnStockPost = (): UnStockPostHookResult => {
  const { user } = useAuth0();
  const { notice } = useNotifier();
  const client = useApolloClient();

  const [loading, setLoading] = useState<boolean>(false);
  const [unStockPostMutation] = useUnStockPostMutation({
    context: { disableNotification: true },
  });

  const unStockPost: UnStockPostHookResult[0] = useCallback(
    async (postId, stockId) => {
      setLoading(true);

      const userId = user?.sub ?? '';
      const existingData = client.readQuery<
        FetchPostAccessoriesQuery,
        FetchPostAccessoriesQueryVariables
      >({
        query: FetchPostAccessoriesDocument,
        variables: { postId, userId },
      });
      const existingPost = existingData?.post;
      if (!existingPost) {
        notice('エラーが発生しました', 'error');
        return;
      }

      client.writeQuery<
        FetchPostAccessoriesQuery,
        FetchPostAccessoriesQueryVariables
      >({
        query: FetchPostAccessoriesDocument,
        variables: { postId, userId },
        data: {
          ...existingData,
          post: {
            ...existingPost,
            stocks: [],
          },
        },
      });

      try {
        await unStockPostMutation({
          variables: { stockId },
          refetchQueries: [FetchPostAccessoriesDocument],
        });

        notice('ストック解除しました', 'success');
      } catch {
        client.writeQuery<
          FetchPostAccessoriesQuery,
          FetchPostAccessoriesQueryVariables
        >({
          query: FetchPostAccessoriesDocument,
          variables: { postId, userId },
          data: existingData,
        });
        notice('ストック解除に失敗しました', 'error');
      } finally {
        setLoading(false);
      }
    },
    [user, notice, client, unStockPostMutation],
  );

  return [unStockPost, { loading }];
};
