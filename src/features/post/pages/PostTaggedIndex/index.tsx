import { Container, Grid, Typography } from '@mui/material';
import { filter } from 'graphql-anywhere';
import { useRouter } from 'next/router';
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

import { FetchTaggedPostsQuery, useFetchTaggedPostsQuery } from './generated';
import { TaggedPostCount, TaggedPostText } from './style';

const limit = 10;

type PostTaggedIndexProps = {
  tagName: string;
  page?: number;
};

export const PostTaggedIndex: VFC<PostTaggedIndexProps> = ({
  tagName,
  page,
}) => {
  const router = useRouter();
  const currentPage = useMemo(() => page ?? 1, [page]);

  const { data, loading } = useFetchTaggedPostsQuery({
    variables: { tagName, limit, offset: (currentPage - 1) * limit },
    onCompleted: (data) => {
      // タグがない場合は404
      if (!data.tagsAggregate.aggregate?.count) {
        router.replace(pagesPath.$404.$url());
      }
    },
  });
  const { posts, totalCount, totalPage } = useMemo(() => {
    return {
      posts: data?.posts ?? [],
      totalCount: data?.postsAggregate.aggregate?.count,
      totalPage: Math.ceil(
        (data?.postsAggregate.aggregate?.count ?? 0) / limit,
      ),
    };
  }, [data]);

  useEffect(() => {
    loading ? progress.start() : progress.done();
  }, [loading]);

  return (
    <Section>
      <Container maxWidth="md">
        <Typography variant="h1">{tagName}</Typography>
        <TaggedPostText>
          <TaggedPostCount>{totalCount}</TaggedPostCount>
          件のテンプレート
        </TaggedPostText>
        <Grid container spacing={{ xs: 4, md: 2 }} sx={{ pb: 8 }}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} md={6}>
              <PostCard
                post={filter<
                  PostCardFragment,
                  FetchTaggedPostsQuery['posts'][number]
                >(PostCardFragmentDoc, post)}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination
          page={currentPage}
          totalPage={totalPage}
          prevPageLink={pagesPath.tags._name(tagName).$url({
            query: { page: currentPage - 1 },
          })}
          nextPageLink={pagesPath.tags._name(tagName).$url({
            query: { page: currentPage + 1 },
          })}
        />
      </Container>
    </Section>
  );
};
