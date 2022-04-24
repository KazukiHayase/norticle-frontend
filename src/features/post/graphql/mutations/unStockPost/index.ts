import { useCallback, useState } from 'react';

import { FetchPostDocument } from '@/features/post/pages/PostDetail/generated';
import { Stock } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';
import { progress } from '@/services/progress';

import { useUnStockPostMutation } from './generated';

type UnStockPostHookResult = [
  (stockId: Stock['id']) => void,
  { loading: boolean },
];

export const useUnStockPost = (): UnStockPostHookResult => {
  const { notice } = useNotifier();
  const [loading, setLoading] = useState<boolean>(false);
  const [unStockPostMutation] = useUnStockPostMutation();

  const unStockPost: UnStockPostHookResult[0] = useCallback(
    async (stockId) => {
      setLoading(true);
      progress.start();

      try {
        await unStockPostMutation({
          variables: { stockId },
          refetchQueries: [FetchPostDocument],
        });

        notice('ストック解除しました', 'success');
      } catch {
        notice('ストック解除に失敗しました', 'error');
      } finally {
        setLoading(false);
        progress.done();
      }
    },
    [unStockPostMutation, notice],
  );

  return [unStockPost, { loading }];
};
