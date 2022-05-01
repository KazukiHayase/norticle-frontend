import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import {
  PostInsertInput,
  Tag,
  TaggingInsertInput,
} from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import { progress } from '@/services/progress';

import { useUpdatePostMutation } from './generated';

type UpdatePostHookResult = [
  (
    postId: number,
    post: Pick<PostInsertInput, 'title' | 'description' | 'content'>,
    tags: Pick<Tag, 'name'>[],
  ) => void,
  { loading: boolean },
];

export const useUpdatePost = (): UpdatePostHookResult => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { notice } = useNotifier();
  const [updatePostMutation] = useUpdatePostMutation();

  const updatePost: UpdatePostHookResult[0] = useCallback(
    async (postId, post, tags) => {
      setLoading(true);
      progress.start();

      const taggings: TaggingInsertInput[] = tags.map((tag) => {
        return {
          post_id: postId,
          tag: {
            data: {
              name: tag.name,
            },
            on_conflict: {
              constraint: 'tags_name_key',
              update_columns: ['updatedAt'],
            },
          },
        };
      });

      try {
        await updatePostMutation({
          variables: {
            postId,
            post,
            taggings,
          },
        });

        router.push(pagesPath.posts._id(postId).$url());
        notice('更新しました', 'success');
      } catch {
        notice('更新に失敗しました', 'error');
      } finally {
        setLoading(false);
        progress.done();
      }
    },
    [updatePostMutation, router, notice],
  );

  return [updatePost, { loading }];
};
