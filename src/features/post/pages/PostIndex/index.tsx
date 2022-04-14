import { Container, Grid, Typography } from '@mui/material';
import { filter } from 'graphql-anywhere';
import { useEffect, useMemo, VFC } from 'react';

import { Pagination } from '@/components/uiParts/Pagination';
import { PostCard } from '@/features/post/components/PostCard';
import {
  PostCardFragment,
  PostCardFragmentDoc,
} from '@/features/post/components/PostCard/generated';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { FetchPostsQuery, useFetchPostsQuery } from './generated';

const limit = 10;

export const PostIndex: VFC = () => {
  const { data, loading, variables, refetch } = useFetchPostsQuery({
    variables: {
      limit,
      offset: 0,
    },
  });
  const { posts, totalPage } = useMemo(() => {
    return {
      posts: data?.posts ?? [],
      totalPage: Math.ceil(
        (data?.postsAggregate.aggregate?.count ?? 0) / limit,
      ),
    };
  }, [data]);

  useEffect(() => {
    loading ? progress.start() : progress.done();
  }, [loading]);

  const handleChangePage = (page: number) => {
    refetch({ ...variables, offset: limit * (page - 1) });
  };

  return (
    <Section>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ pb: 2 }}>
          テンプレート一覧
        </Typography>
        <Grid container spacing={{ xs: 4, md: 2 }} sx={{ pb: 8 }}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} md={6}>
              <PostCard
                post={filter<
                  PostCardFragment,
                  FetchPostsQuery['posts'][number]
                >(PostCardFragmentDoc, post)}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination totalPage={totalPage} onChange={handleChangePage} />
      </Container>
    </Section>
  );
};
