import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

import { pagesPath } from '@/lib/$path';
import { fromNow } from '@/services/date';

import { PostCardFragment } from './generated';
import { PostContent } from './style';

type PostCardProps = {
  post: PostCardFragment;
};

export const PostCard: React.VFC<PostCardProps> = ({ post }) => {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(pagesPath.post._id(post.id).$url())}>
      <CardActionArea>
        <CardHeader
          avatar={<Avatar />}
          title={post.user.name}
          subheader={fromNow(post.createdAt)}
        />
        <CardContent>
          <Typography variant="h3" sx={{ pb: 1 }}>
            {post.title}
          </Typography>
          <PostContent>{post.content}</PostContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
