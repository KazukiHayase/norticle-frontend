import { Container, Grid, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { filter } from 'graphql-anywhere';
import { useEffect, useMemo, VFC } from 'react';

import { PostCard } from '@/features/post/components/PostCard';
import {
  PostCardFragment,
  PostCardFragmentDoc,
} from '@/features/post/components/PostCard/generated';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { FetchPostsQuery, useFetchPostsQuery } from './generated';

const limit = 6;

export const PostIndex: VFC = () => {
  const { data, loading } = useFetchPostsQuery({
    variables: {
      limit,
    },
  });
  const { newPosts, trendPosts } = useMemo(() => {
    return {
      newPosts: data?.newPosts ?? [],
      trendPosts: data?.trendPosts ?? [],
    };
  }, [data]);

  useEffect(() => {
    loading ? progress.start() : progress.done();
  }, [loading]);

  return (
    <>
      <Section>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ pb: 3 }}>
            💫 新着
          </Typography>
          <Grid container spacing={{ xs: 4, md: 2 }} sx={{ pb: 8 }}>
            {newPosts.map((post) => (
              <Grid key={post.id} item xs={12} md={6}>
                <PostCard
                  post={filter<
                    PostCardFragment,
                    FetchPostsQuery['newPosts'][number]
                  >(PostCardFragmentDoc, post)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
      <Section sx={{ bgcolor: blueGrey[50] }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ pb: 3 }}>
            🎉 トレンド
          </Typography>
          <Grid container spacing={{ xs: 4, md: 2 }} sx={{ pb: 8 }}>
            {trendPosts.map((post) => (
              <Grid key={post.id} item xs={12} md={6}>
                <PostCard
                  post={filter<
                    PostCardFragment,
                    FetchPostsQuery['trendPosts'][number]
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
