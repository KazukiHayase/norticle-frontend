import { useCallback, useState } from 'react';

import { FetchPostDocument } from '@/features/post/pages/PostDetail/generated';
import { Post } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';
import { progress } from '@/services/progress';

import { useStockPostMutation } from './generated';

type StockPostHookResult = [(postId: Post['id']) => void, { loading: boolean }];

export const useStockPost = (): StockPostHookResult => {
  const { notice } = useNotifier();
  const [loading, setLoading] = useState<boolean>(false);
  const [stockPostMutation] = useStockPostMutation({
    context: { disableNotification: true },
  });

  const stockPost: StockPostHookResult[0] = useCallback(
    async (postId) => {
      setLoading(true);
      progress.start();

      try {
        await stockPostMutation({
          variables: { postId },
          refetchQueries: [FetchPostDocument],
        });

        notice('ストックしました', 'success');
      } catch {
        notice('ストックに失敗しました', 'error');
      } finally {
        setLoading(false);
        progress.done();
      }
    },
    [stockPostMutation, notice],
  );

  return [stockPost, { loading }];
};
