import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardHeader } from '@mui/material';
import { filter } from 'graphql-anywhere';

import { PostTags } from '@/features/post/components/PostTags';
import {
  PostTagsFragment,
  PostTagsFragmentDoc,
} from '@/features/post/components/PostTags/generated';
import { pagesPath } from '@/lib/$path';
import { fromNow } from '@/services/date';

import { PostCardFragment } from './generated';
import { Avatar, Content, Like, SubHeader,Title } from './style';

type PostCardProps = {
  post: PostCardFragment;
};

export const PostCard: React.VFC<PostCardProps> = ({ post }) => {
  const totalLikeCount = post.likes.reduce(
    (count, acc) => count + acc.count,
    0,
  );

  return (
    <Card sx={{ height: 1 }}>
      <CardHeader
        avatar={<Avatar src={post.user.picture} />}
        title={post.user.name}
        subheader={
          <SubHeader>
            <span>{fromNow(post.createdAt)}</span>
            <Like>
              <FontAwesomeIcon icon={faHeart} />
              {totalLikeCount}
            </Like>
          </SubHeader>
        }
      />
      <CardContent>
        <Title to={pagesPath.post._id(post.id).$url()}>{post.title}</Title>
        <PostTags
          post={filter<PostTagsFragment, PostCardFragment>(
            PostTagsFragmentDoc,
            post,
          )}
        />
        <Content to={pagesPath.post._id(post.id).$url()}>
          {post.content}
        </Content>
      </CardContent>
    </Card>
  );
};
