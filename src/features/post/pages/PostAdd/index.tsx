import { Container, Paper } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { VFC } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { PostForm } from '@/features/post/components/PostForm';
import { useAddPost } from '@/features/post/graphql/mutations/addPost';
import { Section } from '@/styles';

export const PostAdd: VFC = () => {
  const [addPost, { loading }] = useAddPost();
  const onSubmit: SubmitHandler<PostForm> = ({
    title,
    description,
    content,
    tags,
  }) => {
    addPost({ title, description, content }, tags);
  };

  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 3 }}>
          <PostForm
            submitText="投稿する"
            submitting={loading}
            onSubmit={onSubmit}
          />
        </Paper>
      </Container>
    </Section>
  );
};
