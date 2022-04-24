import { useAuth0 } from '@auth0/auth0-react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Container,
  Divider,
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

import { ConfirmModal } from '@/components/uiParts/ConfirmModal';
import { NextLinkComposed } from '@/components/uiParts/Link';
import { Pagination } from '@/components/uiParts/Pagination';
import { useDeletePost } from '@/features/dashboard/graphql/mutations/deletePost';
import { Post } from '@/graphql/generated/types';
import { useModal } from '@/hooks/useModal';
import { pagesPath } from '@/lib/$path';
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

  const confirmModal = useModal(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
  const [selectedPost, setSelectedPost] = useState<Pick<Post, 'id' | 'title'>>({
    id: 0,
    title: '',
  });

  const { data, loading, variables, refetch } = useFetchPostsForDashboardQuery({
    variables: {
      userId: user?.sub ?? '',
      limit,
      offset: 0,
    },
  });
  const [deletePost] = useDeletePost();

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

  const handleClickMenu = (
    event: MouseEvent<HTMLButtonElement>,
    post: Pick<Post, 'id' | 'title'>,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedPost(post);
  };

  const handleCloseMenu = () => {
    setAnchorEl(undefined);
  };

  const handleClickDeleteButton = () => {
    setAnchorEl(undefined);
    confirmModal.open();
  };

  const handleClickDeleteConfirmButton = () => {
    deletePost(selectedPost.id);
    confirmModal.close();
  };

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
                <Box sx={{ width: 1 }}>
                  <Typography
                    variant="h3"
                    component={NextLinkComposed}
                    to={pagesPath.post._id(post.id).edit.$url()}
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
          <Pagination totalPage={totalPage} onChange={handleChangePage} />
        </Container>
      </Section>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleCloseMenu}>
        <MenuItem
          component={NextLinkComposed}
          to={pagesPath.post._id(selectedPost.id).edit.$url()}
        >
          <Typography>編集する</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClickDeleteButton}>
          <Typography color="error">削除する</Typography>
        </MenuItem>
      </Menu>
      <ConfirmModal
        modal={confirmModal}
        title="投稿を削除しますか？"
        message={`${selectedPost.title}を削除しようとしています。\n削除した投稿は復元できません。`}
        action="削除する"
        handleAction={handleClickDeleteConfirmButton}
      />
    </>
  );
};
