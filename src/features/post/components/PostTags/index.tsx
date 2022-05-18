import { Chip } from '@mui/material';
import { VFC } from 'react';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';

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
        <Chip
          key={tagging.id}
          component={NextLinkComposed}
          to={pagesPath.tags._name(tagging.tag.name).$url()}
          clickable
          size="small"
          label={tagging.tag.name}
        />
      ))}
    </Wrapper>
  );
};
