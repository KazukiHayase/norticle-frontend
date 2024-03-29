import { useAuth0 } from '@auth0/auth0-react';
import { Container, Paper } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { filter } from 'graphql-anywhere';
import { useRouter } from 'next/router';
import { useEffect, useMemo, VFC } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { PostForm } from '@/features/post/components/PostForm';
import {
  PostFormFragment,
  PostFormFragmentDoc,
} from '@/features/post/components/PostForm/generated';
import { useUpdatePost } from '@/features/post/graphql/mutations/updatePost';
import { pagesPath } from '@/lib/$path';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { FetchPostForEditQuery, useFetchPostForEditQuery } from './generated';

type PostEditProps = {
  postId: number;
};

export const PostEdit: VFC<PostEditProps> = ({ postId }) => {
  const router = useRouter();
  const { user } = useAuth0();
  const { data, loading: fetchPostLoading } = useFetchPostForEditQuery({
    variables: { postId },
    onCompleted: (data) => {
      if (!data.post) {
        router.replace(pagesPath.$404.$url());
        return;
      }
      if (!user || user.sub !== data.post.userId) {
        router.replace(pagesPath.$403.$url());
        return;
      }
    },
  });
  const [updatePost, { loading: updatePostLoading }] = useUpdatePost();

  const post = useMemo(() => data?.post, [data]);

  useEffect(() => {
    fetchPostLoading ? progress.start() : progress.done();
  }, [fetchPostLoading]);

  const onSubmit: SubmitHandler<PostForm> = ({
    title,
    description,
    content,
    tags,
  }) => {
    updatePost(postId, { title, description, content }, tags);
  };

  if (fetchPostLoading || !post) return <></>;
  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 3 }}>
          <PostForm
            post={filter<
              PostFormFragment,
              NonNullable<FetchPostForEditQuery['post']>
            >(PostFormFragmentDoc, post)}
            submitText="更新する"
            submitting={updatePostLoading}
            onSubmit={onSubmit}
          />
        </Paper>
      </Container>
    </Section>
  );
};
