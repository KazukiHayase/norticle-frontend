import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Container, Grid, InputAdornment, TextField } from '@mui/material';
import { filter } from 'graphql-anywhere';
import { useEffect, useMemo, VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Pagination } from '@/components/uiParts/Pagination';
import { PostCard } from '@/features/post/components/PostCard';
import {
  PostCardFragment,
  PostCardFragmentDoc,
} from '@/features/post/components/PostCard/generated';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import {
  SearchPostsQuery,
  SearchPostsQueryVariables,
  useSearchPostsLazyQuery,
} from './generated';
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
const defaultVariables: SearchPostsQueryVariables = {
  where: {},
  limit,
  offset: 0,
};

export const PostSearch: VFC = () => {
  const { register, handleSubmit, getValues } = useForm<PostSearchForm>({
    resolver: yupResolver(postSearchFormSchema),
  });

  const [searchPosts, { data, called, loading, variables }] =
    useSearchPostsLazyQuery({
      variables: defaultVariables,
    });
  const searchPostsVariables = variables ?? defaultVariables;
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
    called && loading ? progress.start() : progress.done();
  }, [called, loading]);

  const handleSubmitPostSearchForm: SubmitHandler<PostSearchForm> = ({
    keyword,
  }) => {
    searchPosts({
      variables: {
        ...searchPostsVariables,
        where: {
          _or: [
            {
              title: { _ilike: `%${keyword}%` },
            },
            {
              content: { _ilike: `%${keyword}%` },
            },
          ],
        },
        offset: 0,
      },
    });
  };

  const handleChangePage = (page: number) => {
    searchPosts({
      variables: { ...searchPostsVariables, offset: limit * (page - 1) },
    });
  };

  return (
    <Section>
      <Container maxWidth="md">
        <Box sx={{ pb: 8 }}>
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
            <Pagination totalPage={totalPage} onChange={handleChangePage} />
          </>
        ) : called ? (
          <SearchResultNotFound>
            「{getValues('keyword')}」
            に一致するテンプレートは見つかりませんでした
          </SearchResultNotFound>
        ) : (
          <></>
        )}
      </Container>
    </Section>
  );
};
