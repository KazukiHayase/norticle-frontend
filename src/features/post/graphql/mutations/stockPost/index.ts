import { useApolloClient } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useState } from 'react';

import {
  FetchPostAccessoriesDocument,
  FetchPostAccessoriesQuery,
  FetchPostAccessoriesQueryVariables,
} from '@/features/post/pages/PostDetail/generated';
import { Post } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';

import { useStockPostMutation } from './generated';

type StockPostHookResult = [(postId: Post['id']) => void, { loading: boolean }];

export const useStockPost = (): StockPostHookResult => {
  const { user } = useAuth0();
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
            stocks: [{ __typename: 'stock', id: 0 }],
          },
        },
      });

      try {
        await stockPostMutation({
          variables: { postId },
          refetchQueries: [FetchPostAccessoriesDocument],
        });

        notice('ストックしました', 'success');
      } catch {
        client.writeQuery<
          FetchPostAccessoriesQuery,
          FetchPostAccessoriesQueryVariables
        >({
          query: FetchPostAccessoriesDocument,
          variables: { postId, userId },
          data: existingData,
        });
        notice('エラーが発生しました', 'error');
      } finally {
        setLoading(false);
      }
    },
    [user, notice, client, stockPostMutation],
  );

  return [stockPost, { loading }];
};
