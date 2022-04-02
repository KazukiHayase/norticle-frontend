import * as Types from '../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
export type PostCardFragment = { __typename?: 'post' } & Pick<
  Types.Post,
  'id' | 'title' | 'content' | 'createdAt'
> & { user: { __typename?: 'user' } & Pick<Types.User, 'name'> };

export const PostCardFragmentDoc = gql`
  fragment PostCard on post {
    id
    title
    content
    createdAt
    user {
      name
    }
  }
`;
