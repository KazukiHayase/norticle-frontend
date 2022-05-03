import { useCallback, useState } from 'react';

import { FetchPostDocument } from '@/features/post/pages/PostDetail/generated';
import { useNotifier } from '@/hooks/useNotifier';

import { useAddLikeMutation, useUpdateLikeMutation } from './generated';

type UpsertLikeHookResult = [
  (postId: number, likeId?: number) => void,
  { loading: boolean },
];

export const useUpsertLike = (): UpsertLikeHookResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const { notice } = useNotifier();
  const [addLike] = useAddLikeMutation();
  const [updateLike] = useUpdateLikeMutation({
    context: { disableNotification: true },
  });

  // likeIdがパラメーターに含まれているかどうかで、insert/updateを使い分ける
  const upsertLike: UpsertLikeHookResult[0] = useCallback(
    async (postId, likeId) => {
      setLoading(true);

      try {
        likeId
          ? await updateLike({ variables: { likeId } })
          : await addLike({
              variables: { postId },
              refetchQueries: [FetchPostDocument],
            });
      } catch {
        notice('エラーが発生しました', 'error');
      } finally {
        setLoading(false);
      }
    },
    [addLike, updateLike, notice, setLoading],
  );

  return [upsertLike, { loading }];
};
