import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { MouseEvent } from 'react';
import { useEffect, useMemo, useState, VFC } from 'react';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { Pagination } from '@/components/uiParts/Pagination';
import { Post } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import { formatDate } from '@/services/date';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { useFetchStockedPostsQuery } from './generated';

const limit = 10;

type DashboardStockedPostsProps = {
  page?: number;
};

export const DashboardStockedPosts: VFC<DashboardStockedPostsProps> = ({
  page,
}) => {
  const { notice } = useNotifier();

  const currentPage = useMemo(() => page ?? 1, [page]);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
  const [selectedPost, setSelectedPost] = useState<
    Pick<Post, 'id' | 'title' | 'content'>
  >({
    id: 0,
    title: '',
    content: '',
  });

  const { data, loading } = useFetchStockedPostsQuery({
    variables: {
      limit,
      offset: (currentPage - 1) * limit,
    },
  });

  const { posts, totalPage } = useMemo(() => {
    return {
      posts: data?.stocks.map((stock) => stock.post) ?? [],
      totalPage: Math.ceil(
        (data?.stocksAggregate.aggregate?.count ?? 0) / limit,
      ),
    };
  }, [data]);

  useEffect(() => {
    loading ? progress.start() : progress.done();
  }, [loading]);

  const handleClickMenu = (
    event: MouseEvent<HTMLButtonElement>,
    post: Pick<Post, 'id' | 'title' | 'content'>,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedPost(post);
  };

  const handleCloseMenu = () => {
    setAnchorEl(undefined);
  };

  const handleClickCopyButton = () => {
    setAnchorEl(undefined);
    navigator.clipboard
      .writeText(selectedPost.content)
      .then(() => notice('コピーしました', 'success'));
  };

  return (
    <>
      <Section sx={{ bgcolor: blueGrey[50] }}>
        <Container maxWidth="md">
          <Stack spacing={2} sx={{ pb: 8 }}>
            {/* TODO: DashboardPostsのカードと共通化できそう */}
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
                <Box sx={{ width: 1 }}>
                  <Typography
                    variant="h3"
                    component={NextLinkComposed}
                    to={pagesPath.posts._id(post.id).$url()}
                    sx={{ display: 'block', width: 1 }}
                  >
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
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton onClick={(e) => handleClickMenu(e, post)}>
                    <FontAwesomeIcon icon={faEllipsis} fontSize={20} />
                  </IconButton>
                </Box>
              </Paper>
            ))}
          </Stack>
          <Pagination
            page={currentPage}
            totalPage={totalPage}
            prevPageLink={pagesPath.dashboard.stocks.$url({
              query: { page: currentPage - 1 },
            })}
            nextPageLink={pagesPath.dashboard.stocks.$url({
              query: { page: currentPage + 1 },
            })}
          />
        </Container>
      </Section>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleCloseMenu}>
        <MenuItem onClick={handleClickCopyButton}>
          <Typography>テンプレートをコピー</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
