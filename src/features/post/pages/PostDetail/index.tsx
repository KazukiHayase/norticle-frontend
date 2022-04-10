import { useAuth0 } from '@auth0/auth0-react';
import { faCopy,faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Box, Button, Paper, Tooltip, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { useEffect, useMemo, VFC } from 'react';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import { formatDate } from '@/services/date';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { useFetchPostQuery } from './generated';
import { CopyIconButton,Sidebar, UserInfo } from './style';

type PostDetailProps = {
  postId: number;
};

export const PostDetail: VFC<PostDetailProps> = ({ postId }) => {
  const router = useRouter();
  const { user } = useAuth0();
  const { notice } = useNotifier();

  const { data, loading } = useFetchPostQuery({
    variables: { postId },
    onCompleted: (data) => {
      if (!data.post) router.replace(pagesPath.$404.$url());
    },
  });

  const post = useMemo(() => data?.post, [data]);

  useEffect(() => {
    loading ? progress.start() : progress.done();
  }, [loading]);

  const handleClickCopyIcon = () => {
    navigator.clipboard
      .writeText(post?.content ?? '')
      .then(() => notice('コピーしました', 'success'));
  };

  if (loading || !post) return <></>;

  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container maxWidth="md">
        {user && user.sub === post.user.id && (
          <Box sx={{ pb: 2 }}>
            <Button
              color="inherit"
              size="small"
              variant="contained"
              startIcon={
                <FontAwesomeIcon icon={faPen} style={{ fontSize: 14 }} />
              }
              component={NextLinkComposed}
              to={pagesPath.post._id(postId).edit.$url()}
            >
              編集
            </Button>
          </Box>
        )}
        <Paper sx={{ p: 3, position: 'relative' }}>
          <Sidebar>
            <Tooltip title="テンプレートをコピー" placement="top" arrow>
              <CopyIconButton onClick={handleClickCopyIcon}>
                <FontAwesomeIcon icon={faCopy} fontSize={20} />
              </CopyIconButton>
            </Tooltip>
          </Sidebar>
          <Box sx={{ pb: 3 }}>
            <UserInfo>
              <Avatar sx={{ width: 25, height: 25 }} />
              <Typography fontSize={14} fontWeight="bold">
                {post.user.name}
              </Typography>
            </UserInfo>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography fontSize={14} color={grey[700]}>
                作成日: {formatDate(post.createdAt, 'date')}
              </Typography>
              <Typography fontSize={14} color={grey[700]}>
                更新日: {formatDate(post.updatedAt, 'date')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h1" sx={{ pb: 1 }}>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ pb: 8 }}>
            {post.description}
          </Typography>
          <Typography variant="body1">{post.content}</Typography>
        </Paper>
      </Container>
    </Section>
  );
};
