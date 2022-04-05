import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { PostInsertInput } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import { progress } from '@/services/progress';

import { useUpdatePostMutation } from './generated';

type UpdatePostHookResult = [
  (
    postId: number,
    post: Pick<PostInsertInput, 'title' | 'description' | 'content'>,
  ) => void,
];

export const useUpdatePost = (): UpdatePostHookResult => {
  const router = useRouter();
  const { notice } = useNotifier();
  const [updatePostMutation] = useUpdatePostMutation();

  const updatePost: UpdatePostHookResult[0] = useCallback(
    async (postId, post) => {
      progress.start();
      console.log(postId);
      console.log(post);
      try {
        await updatePostMutation({
          variables: {
            postId,
            post,
          },
        });

        router.push(pagesPath.post._id(postId).$url());
        notice('更新しました', 'success');
      } catch {
        notice('更新に失敗しました', 'error');
      } finally {
        progress.done();
      }
    },
    [],
  );

  return [updatePost];
};
