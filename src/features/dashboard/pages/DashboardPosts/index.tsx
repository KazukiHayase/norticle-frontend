import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { useEffect, useMemo, VFC } from 'react';

import { Pagination } from '@/components/uiParts/Pagination';
import { formatDate } from '@/services/date';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { useFetchPostsForDashboardQuery } from './generated';

type DashboardPostsProps = {
  tmp?: string;
};

export const DashboardPosts: VFC<DashboardPostsProps> = () => {
  const limit = 10;
  const { user } = useAuth0();

  const { data, loading, variables, refetch } = useFetchPostsForDashboardQuery({
    variables: {
      userId: user?.sub ?? '',
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
    <>
      <Section sx={{ bgcolor: blueGrey[50] }}>
        <Container maxWidth="md">
          <Stack spacing={2} sx={{ pb: 8 }}>
            {posts.map((post) => (
              <Paper
                key={post.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 3,
                }}
              >
                <Box>
                  <Typography variant="h3" sx={{ pb: 1 }}>
                    {post.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography fontSize={14} color={grey[700]}>
                      作成日: {formatDate(post.createdAt, 'date')}
                    </Typography>
                    <Typography fontSize={14} color={grey[700]}>
                      更新日: {formatDate(post.updatedAt, 'date')}
                    </Typography>
                  </Box>
                </Box>
                <Box>編集・削除</Box>
              </Paper>
            ))}
          </Stack>
          <Pagination totalPage={totalPage} onChange={handleChangePage} />
        </Container>
      </Section>
    </>
  );
};
