import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Container, Grid, InputAdornment, TextField } from '@mui/material';
import { filter } from 'graphql-anywhere';
import { useRouter } from 'next/router';
import { useEffect, useMemo, VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Pagination } from '@/components/uiParts/Pagination';
import { PostCard } from '@/features/post/components/PostCard';
import {
  PostCardFragment,
  PostCardFragmentDoc,
} from '@/features/post/components/PostCard/generated';
import { pagesPath } from '@/lib/$path';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { SearchPostsQuery, useSearchPostsQuery } from './generated';
import {
  SearchResultCount,
  SearchResultNotFound,
  SearchResultText,
} from './style';

type PostSearchForm = {
  keyword: string;
};
const postSearchFormSchema = yup.object({
  keyword: yup.string().required(),
});

const limit = 10;

type PostSearchProps = {
  keyword?: string;
  page?: number;
};

export const PostSearch: VFC<PostSearchProps> = ({ keyword, page }) => {
  const router = useRouter();
  const currentPage = useMemo(() => page ?? 1, [page]);

  const { register, handleSubmit } = useForm<PostSearchForm>({
    defaultValues: { keyword },
    resolver: yupResolver(postSearchFormSchema),
  });

  const { data, loading } = useSearchPostsQuery({
    skip: !keyword,
    variables: {
      where: {
        _or: [
          {
            title: { _ilike: `%${keyword}%` },
          },
          {
            content: { _ilike: `%${keyword}%` },
          },
          { taggings: { tag: { name: { _ilike: `%${keyword}%` } } } },
        ],
      },
      limit,
      offset: (currentPage - 1) * limit,
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

  const handleSubmitPostSearchForm: SubmitHandler<PostSearchForm> = ({
    keyword,
  }) => {
    router.push(pagesPath.search.$url({ query: { q: keyword } }));
  };

  return (
    <Section>
      <Container maxWidth="md" sx={{ minHeight: 500 }}>
        <Box sx={{ w: 1, pb: 8 }}>
          <form onSubmit={handleSubmit(handleSubmitPostSearchForm)}>
            <TextField
              fullWidth
              placeholder="キーワードを入力..."
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={handleSubmit(handleSubmitPostSearchForm)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20} />
                  </InputAdornment>
                ),
              }}
              {...register('keyword')}
            />
          </form>
        </Box>
        {posts.length ? (
          <>
            <SearchResultText>
              <SearchResultCount>{totalCount}</SearchResultCount>
              件のテンプレートがヒットしました
            </SearchResultText>
            <Grid container spacing={{ xs: 4, md: 2 }} sx={{ pb: 8 }}>
              {posts.map((post) => (
                <Grid key={post.id} item xs={12} md={6}>
                  <PostCard
                    post={filter<
                      PostCardFragment,
                      SearchPostsQuery['posts'][number]
                    >(PostCardFragmentDoc, post)}
                  />
                </Grid>
              ))}
            </Grid>
            <Pagination
              page={currentPage}
              totalPage={totalPage}
              prevPageLink={pagesPath.search.$url({
                query: { q: keyword, page: currentPage - 1 },
              })}
              nextPageLink={pagesPath.search.$url({
                query: { q: keyword, page: currentPage + 1 },
              })}
            />
          </>
        ) : !loading && keyword ? (
          <SearchResultNotFound>
            「{keyword}」 に一致するテンプレートは見つかりませんでした
          </SearchResultNotFound>
        ) : (
          <></>
        )}
      </Container>
    </Section>
  );
};
