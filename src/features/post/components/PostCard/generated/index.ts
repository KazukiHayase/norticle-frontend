import * as Types from '../../../../../graphql/generated/types';

import { PostTagsFragment } from '../../PostTags/generated/index';
import { gql } from '@apollo/client';
import { PostTagsFragmentDoc } from '../../PostTags/generated/index';
export type PostCardFragment = { __typename?: 'post' } & Pick<
  Types.Post,
  'id' | 'title' | 'content' | 'createdAt'
> & {
    user: { __typename?: 'user' } & Pick<Types.User, 'id' | 'name' | 'picture'>;
    likes_aggregate: { __typename?: 'like_aggregate' } & {
      aggregate?: Types.Maybe<
        { __typename?: 'like_aggregate_fields' } & Pick<
          Types.LikeAggregateFields,
          'count'
        >
      >;
    };
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
    likes_aggregate {
      aggregate {
        count
      }
    }
    ...PostTags
  }
  ${PostTagsFragmentDoc}
`;
