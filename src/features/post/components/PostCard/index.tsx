import { Card, CardActionArea, CardContent, CardHeader } from '@mui/material';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';
import { fromNow } from '@/services/date';

import { PostCardFragment } from './generated';
import { PostContent, PostTitle } from './style';
import { Avatar } from './style';

type PostCardProps = {
  post: PostCardFragment;
};

export const PostCard: React.VFC<PostCardProps> = ({ post }) => {
  return (
    <Card>
      <CardActionArea
        component={NextLinkComposed}
        to={pagesPath.post._id(post.id).$url()}
      >
        <CardHeader
          avatar={<Avatar src={post.user.picture} />}
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
