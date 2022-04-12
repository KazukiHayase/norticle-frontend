import * as Types from '../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
export type PostCardFragment = { __typename?: 'post' } & Pick<
  Types.Post,
  'id' | 'title' | 'content' | 'createdAt'
> & {
    user: { __typename?: 'user' } & Pick<Types.User, 'id' | 'name' | 'picture'>;
    taggings: Array<
      { __typename?: 'tagging' } & Pick<Types.Tagging, 'id'> & {
          tag: { __typename?: 'tag' } & Pick<Types.Tag, 'id' | 'name'>;
        }
    >;
  };

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
    taggings {
      id
      tag {
        id
        name
      }
    }
  }
`;
