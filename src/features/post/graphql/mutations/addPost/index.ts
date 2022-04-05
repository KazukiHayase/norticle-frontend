import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { refetchFetchPostsQuery } from '@/features/post/pages/PostIndex/generated';
import { PostInsertInput } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import { progress } from '@/services/progress';

import { useAddPostMutation } from './generated';

type AddPostHookResult = [
  (post: Pick<PostInsertInput, 'title' | 'description' | 'content'>) => void,
];

export const useAddPost = (): AddPostHookResult => {
  const router = useRouter();
  const { notice } = useNotifier();
  const [addPostMutation] = useAddPostMutation({
    refetchQueries: [refetchFetchPostsQuery({ limit: 10, offset: 0 })],
  });

  const addPost: AddPostHookResult[0] = useCallback(async (post) => {
    progress.start();
    try {
      await addPostMutation({
        variables: {
          post,
        },
      });

      router.push(pagesPath.$url());
      notice('投稿しました', 'success');
    } catch {
      notice('投稿に失敗しました', 'error');
    } finally {
      progress.done();
    }
  }, []);

  return [addPost];
};
