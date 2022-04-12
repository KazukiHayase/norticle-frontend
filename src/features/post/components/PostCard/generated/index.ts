import * as Types from '../../../../../graphql/generated/types';

import { PostTagsFragment } from '../../PostTags/generated/index';
import { gql } from '@apollo/client';
import { PostTagsFragmentDoc } from '../../PostTags/generated/index';
export type PostCardFragment = { __typename?: 'post' } & Pick<
  Types.Post,
  'id' | 'title' | 'content' | 'createdAt'
> & {
    user: { __typename?: 'user' } & Pick<Types.User, 'id' | 'name' | 'picture'>;
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
    ...PostTags
  }
  ${PostTagsFragmentDoc}
`;
