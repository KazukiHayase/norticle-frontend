import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { FetchPostsDocument } from '@/features/post/pages/PostIndex/generated';
import { FetchNewPostsDocument } from '@/features/post/pages/PostNew/generated';
import { Post, Tag, TaggingInsertInput } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import { progress } from '@/services/progress';

import { useAddPostMutation } from './generated';

type AddPostHookResult = [
  (
    post: Pick<Post, 'title' | 'description' | 'content'>,
    tags: Pick<Tag, 'name'>[],
  ) => void,
  { loading: boolean },
];

export const useAddPost = (): AddPostHookResult => {
  const router = useRouter();
  const { notice } = useNotifier();
  const [loading, setLoading] = useState<boolean>(false);
  const [addPostMutation] = useAddPostMutation({
    context: { disableNotification: true },
    refetchQueries: [FetchPostsDocument, FetchNewPostsDocument],
  });

  const addPost: AddPostHookResult[0] = useCallback(
    async (post, tags) => {
      setLoading(true);
      progress.start();

      const taggingInputs: TaggingInsertInput[] = tags.map(({ name }) => {
        return {
          tag: {
            data: { name },
            on_conflict: {
              constraint: 'tags_name_key',
              update_columns: ['updatedAt'],
            },
          },
        };
      });

      try {
        await addPostMutation({
          variables: {
            post: {
              ...post,
              taggings: {
                data: taggingInputs,
              },
            },
          },
        });

        router.push(pagesPath.$url());
        notice('投稿しました', 'success');
      } catch {
        notice('投稿に失敗しました', 'error');
      } finally {
        setLoading(false);
        progress.done();
      }
    },
    [addPostMutation, router, notice],
  );

  return [addPost, { loading }];
};
