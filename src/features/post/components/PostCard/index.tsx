import { Card, CardActionArea, CardContent, CardHeader } from '@mui/material';
import { filter } from 'graphql-anywhere';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { PostTags } from '@/features/post/components/PostTags';
import {
  PostTagsFragment,
  PostTagsFragmentDoc,
} from '@/features/post/components/PostTags/generated';
import { pagesPath } from '@/lib/$path';
import { fromNow } from '@/services/date';

import { PostCardFragment } from './generated';
import { Avatar, PostContent, PostTitle } from './style';

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
          <PostTags
            post={filter<PostTagsFragment, PostCardFragment>(
              PostTagsFragmentDoc,
              post,
            )}
          />
          <PostContent>{post.content}</PostContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
