import { Button, Container, Grid, Typography } from '@mui/material';
import { filter } from 'graphql-anywhere';
import { useEffect, useMemo, useState, VFC } from 'react';

import { PostCard } from '@/features/post/components/PostCard';
import {
  PostCardFragment,
  PostCardFragmentDoc,
} from '@/features/post/components/PostCard/generated';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { FetchPostsQuery, useFetchPostsQuery } from './generated';
import { PaginationWrapper } from './style';

export const PostIndex: VFC = () => {
  const limit = 10;
  const [page, setPage] = useState<number>(1);

  const { data, loading } = useFetchPostsQuery({
    variables: {
      limit,
      offset: limit * (page - 1),
    },
  });
  const { posts, lastPage } = useMemo(() => {
    return {
      posts: data?.posts ?? [],
      lastPage: Math.ceil((data?.postsAggregate.aggregate?.count ?? 0) / limit),
    };
  }, [data]);

  useEffect(() => {
    loading ? progress.start() : progress.done();
  }, [loading]);

  return (
    <>
      <Section>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ pb: 2 }}>
            テンプレート一覧
          </Typography>
          <Grid container spacing={2} sx={{ pb: 8 }}>
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
          <PaginationWrapper>
            {page > 1 && (
              <Button
                variant="contained"
                color="inherit"
                sx={{ fontWeight: 'bold' }}
                onClick={() => setPage(page - 1)}
              >
                前のページ
              </Button>
            )}
            {page < lastPage && (
              <Button
                variant="contained"
                color="info"
                sx={{ fontWeight: 'bold' }}
                onClick={() => setPage(page + 1)}
              >
                次のページ
              </Button>
            )}
          </PaginationWrapper>
        </Container>
      </Section>
    </>
  );
};
