import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { useEffect, useMemo, VFC } from 'react';

import { EditButton } from '@/components/uiParts/Button/EditButton';
import { pagesPath } from '@/lib/$path';
import { formatDate } from '@/services/date';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { useFetchPostQuery } from './generated';
import { UserInfo } from './style';

type PostDetailProps = {
  postId: number;
};

export const PostDetail: VFC<PostDetailProps> = ({ postId }) => {
  const router = useRouter();
  const { user } = useAuth0();
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

  if (loading || !post) return <></>;

  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container maxWidth="md">
        {user?.sub === post.user.id && (
          <Box sx={{ pb: 2 }}>
            <EditButton
              onClick={() =>
                router.push(pagesPath.post._id(postId).edit.$url())
              }
            />
          </Box>
        )}
        <Paper sx={{ p: 3 }}>
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
