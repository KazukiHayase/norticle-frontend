import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Chip,
} from '@mui/material';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';
import { fromNow } from '@/services/date';

import { PostCardFragment } from './generated';
import { Avatar, PostContent, PostTitle, TagWrapper } from './style';

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
          {!!post.taggings.length && (
            <TagWrapper>
              {post.taggings.map((tagging) => (
                <Chip key={tagging.id} size="small" label={tagging.tag.name} />
              ))}
            </TagWrapper>
          )}
          <PostContent>{post.content}</PostContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
