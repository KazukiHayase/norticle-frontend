import { useApolloClient } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useState } from 'react';

import {
  FetchPostDocument,
  FetchPostQuery,
  FetchPostQueryVariables,
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
  const { isAuthenticated, user } = useAuth0();
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
        FetchPostQuery,
        FetchPostQueryVariables
      >({
        query: FetchPostDocument,
        variables: { postId, userId, isLoggedIn: isAuthenticated },
      });
      const existingPost = existingData?.post;
      if (!existingPost) {
        notice('エラーが発生しました', 'error');
        return;
      }

      client.writeQuery<FetchPostQuery, FetchPostQueryVariables>({
        query: FetchPostDocument,
        variables: { postId, userId, isLoggedIn: isAuthenticated },
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
          refetchQueries: [FetchPostDocument],
        });

        notice('ストック解除しました', 'success');
      } catch {
        client.writeQuery<FetchPostQuery, FetchPostQueryVariables>({
          query: FetchPostDocument,
          variables: { postId, userId, isLoggedIn: isAuthenticated },
          data: existingData,
        });
        notice('ストック解除に失敗しました', 'error');
      } finally {
        setLoading(false);
      }
    },
    [isAuthenticated, user, notice, client, unStockPostMutation],
  );

  return [unStockPost, { loading }];
};
