import { Chip } from '@mui/material';
import { VFC } from 'react';

import { PostTagsFragment } from './generated';
import { Wrapper } from './style';

type PostTagsProps = {
  post: PostTagsFragment;
};

export const PostTags: VFC<PostTagsProps> = ({ post }) => {
  if (!post.taggings.length) return <></>;
  return (
    <Wrapper>
      {post.taggings.map((tagging) => (
        <Chip key={tagging.id} size="small" label={tagging.tag.name} />
      ))}
    </Wrapper>
  );
};
