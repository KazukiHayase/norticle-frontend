import { useCallback, useState } from 'react';

import { useNotifier } from '@/hooks/useNotifier';

import { useAddLikeMutation, useDeleteLikeMutation } from './generated';
import { useAuth0 } from '@auth0/auth0-react';

type ToggleLikeHookResult = [
  (postId: number, likeId?: number) => void,
  { loading: boolean },
];

export const useToggleLike = (): ToggleLikeHookResult => {
  const { user } = useAuth0();

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

      try {
        likeId
          ? await deleteLike({ variables: { likeId, userId } })
          : await addLike({
              variables: { postId, userId },
            });
      } catch {
        notice('エラーが発生しました', 'error');
      } finally {
        setLoading(false);
      }
    },
    [addLike, deleteLike, notice, setLoading],
  );

  return [toggleLike, { loading }];
};
