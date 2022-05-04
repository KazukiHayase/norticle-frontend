import { useCallback, useState } from 'react';

import {
  FetchPostDocument,
  FetchPostQuery,
  FetchPostQueryVariables,
} from '@/features/post/pages/PostDetail/generated';
import { Post } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';

import { useStockPostMutation } from './generated';
import { useApolloClient } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';

type StockPostHookResult = [(postId: Post['id']) => void, { loading: boolean }];

export const useStockPost = (): StockPostHookResult => {
  const { isAuthenticated, user } = useAuth0();
  const { notice } = useNotifier();
  const client = useApolloClient();

  const [loading, setLoading] = useState<boolean>(false);
  const [stockPostMutation] = useStockPostMutation({
    context: { disableNotification: true },
  });

  const stockPost: StockPostHookResult[0] = useCallback(
    async (postId) => {
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
            stocks: [{ __typename: 'stock', id: 0 }],
          },
        },
      });

      try {
        await stockPostMutation({
          variables: { postId },
          refetchQueries: [FetchPostDocument],
        });

        notice('ストックしました', 'success');
      } catch {
        client.writeQuery<FetchPostQuery, FetchPostQueryVariables>({
          query: FetchPostDocument,
          variables: { postId, userId, isLoggedIn: isAuthenticated },
          data: existingData,
        });
        notice('エラーが発生しました', 'error');
      } finally {
        setLoading(false);
      }
    },
    [stockPostMutation, notice],
  );

  return [stockPost, { loading }];
};
