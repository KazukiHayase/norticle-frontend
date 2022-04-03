import { Container, Grid,Typography } from '@mui/material';
import { filter } from 'graphql-anywhere';
import { VFC } from 'react';

import { PostCard } from '@/features/post/components/PostCard';
import {
  PostCardFragment,
  PostCardFragmentDoc,
} from '@/features/post/components/PostCard/generated';
import { Section } from '@/styles';

import { FetchPostsQuery, useFetchPostsQuery } from './generated';

export const PostIndex: VFC = () => {
  const { data } = useFetchPostsQuery({
    variables: {
      offset: 0,
    },
  });
  const posts = data?.posts ?? [];

  return (
    <>
      <Section>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ pb: 2 }}>
            テンプレート一覧
          </Typography>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid key={post.id} item xs={6}>
                <PostCard
                  post={filter<
                    PostCardFragment,
                    FetchPostsQuery['posts'][number]
                  >(PostCardFragmentDoc, post)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
