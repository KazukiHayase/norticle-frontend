import { useCallback, useState } from 'react';

import { FetchPostsForDashboardDocument } from '@/features/dashboard/pages/DashboardPosts/generated';
import { useNotifier } from '@/hooks/useNotifier';
import { progress } from '@/services/progress';

import { useDeletePostMutation } from './generated';

type DeletePostHookResult = [(postId: number) => void, { loading: boolean }];

export const useDeletePost = (): DeletePostHookResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const { notice } = useNotifier();
  const [deletePostMutation] = useDeletePostMutation({
    refetchQueries: [FetchPostsForDashboardDocument],
  });

  const deletePost: DeletePostHookResult[0] = useCallback(
    async (postId) => {
      setLoading(true);
      progress.start();

      try {
        await deletePostMutation({
          variables: {
            postId,
          },
        });

        notice('削除しました', 'success');
      } catch {
        notice('削除に失敗しました', 'error');
      } finally {
        setLoading(false);
        progress.done();
      }
    },
    [deletePostMutation, notice],
  );

  return [deletePost, { loading }];
};
