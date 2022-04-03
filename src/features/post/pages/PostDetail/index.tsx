import { Avatar, Box, Paper,Typography } from '@mui/material';
import { Container } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { VFC } from 'react';

import { Section } from '@/styles';

import { UserInfo } from './style';

type PostDetailProps = {
  postId: number;
};

export const PostDetail: VFC<PostDetailProps> = ({ postId }) => {
  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container
        maxWidth="md"
        component={Paper}
        sx={{ py: 3, bgcolor: 'white' }}
      >
        <Box sx={{ pb: 3 }}>
          <UserInfo>
            <Avatar sx={{ width: 25, height: 25 }} />
            <Typography fontSize={14} fontWeight="bold">
              ユーザー名
            </Typography>
          </UserInfo>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography fontSize={14} color={grey[700]}>
              作成日: 2022/04/03
            </Typography>
            <Typography fontSize={14} color={grey[700]}>
              更新日: 2022/04/03
            </Typography>
          </Box>
        </Box>
        <Typography variant="h1" sx={{ pb: 1 }}>
          タイトル {postId}
        </Typography>
        <Typography variant="subtitle1" sx={{ pb: 3 }}>
          説明説明説明説明説明説明説明説明説明説明説明説明 説明説明説明
          説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明
        </Typography>
        <Typography variant="body1">
          コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
        </Typography>
      </Container>
    </Section>
  );
};
