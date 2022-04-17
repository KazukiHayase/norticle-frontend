import * as Types from '../../../../../graphql/generated/types';

import { PostTagsFragment } from '../../PostTags/generated/index';
import { gql } from '@apollo/client';
import { PostTagsFragmentDoc } from '../../PostTags/generated/index';
export type PostCardFragment = { __typename?: 'post' } & Pick<
  Types.Post,
  'id' | 'title' | 'content' | 'createdAt'
> & {
    user: { __typename?: 'user' } & Pick<Types.User, 'id' | 'name' | 'picture'>;
    likes: Array<{ __typename?: 'like' } & Pick<Types.Like, 'id' | 'count'>>;
  } & PostTagsFragment;

export const PostCardFragmentDoc = gql`
  fragment PostCard on post {
    id
    title
    content
    createdAt
    user {
      id
      name
      picture
    }
    likes {
      id
      count
    }
    ...PostTags
  }
  ${PostTagsFragmentDoc}
`;
