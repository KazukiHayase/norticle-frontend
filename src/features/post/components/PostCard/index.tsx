import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';

import { pagesPath } from '@/lib/$path';
import { fromNow } from '@/services/date';

import { PostCardFragment } from './generated';
import { PostContent, PostTitle } from './style';

type PostCardProps = {
  post: PostCardFragment;
};

export const PostCard: React.VFC<PostCardProps> = ({ post }) => {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(pagesPath.post._id(post.id).$url())}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              src={post.user.picture}
              sx={{ border: 1, borderColor: grey[200] }}
            />
          }
          title={post.user.name}
          subheader={fromNow(post.createdAt)}
        />
        <CardContent>
          <PostTitle variant="h3">{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
