import { Container, Grid, Typography } from '@mui/material';
import { filter } from 'graphql-anywhere';
import { useEffect, useMemo, VFC } from 'react';

import { Pagination } from '@/components/uiParts/Pagination';
import { PostCard } from '@/features/post/components/PostCard';
import {
  PostCardFragment,
  PostCardFragmentDoc,
} from '@/features/post/components/PostCard/generated';
import { pagesPath } from '@/lib/$path';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { FetchNewPostsQuery, useFetchNewPostsQuery } from './generated';

const limit = 10;

type PostNewProps = {
  page?: number;
};

export const PostNew: VFC<PostNewProps> = ({ page }) => {
  const currentPage = useMemo(() => page ?? 1, [page]);
  const { data, loading } = useFetchNewPostsQuery({
    variables: {
      limit,
      offset: (currentPage - 1) * limit,
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

  return (
    <>
      <Section>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ pb: 3 }}>
            💫 新着
          </Typography>
          <Grid container spacing={{ xs: 4, md: 2 }} sx={{ pb: 8 }}>
            {posts.map((post) => (
              <Grid key={post.id} item xs={12} md={6}>
                <PostCard
                  post={filter<
                    PostCardFragment,
                    FetchNewPostsQuery['posts'][number]
                  >(PostCardFragmentDoc, post)}
                />
              </Grid>
            ))}
          </Grid>
          <Pagination
            page={currentPage}
            totalPage={totalPage}
            prevPageLink={pagesPath.posts.$url({
              query: { page: currentPage - 1 },
            })}
            nextPageLink={pagesPath.posts.$url({
              query: { page: currentPage + 1 },
            })}
          />
        </Container>
      </Section>
    </>
  );
};
