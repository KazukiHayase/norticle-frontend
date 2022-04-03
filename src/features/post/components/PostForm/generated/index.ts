import * as Types from '../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
export type PostFormFragment = { __typename?: 'post' } & Pick<
  Types.Post,
  'id' | 'title' | 'description' | 'content'
>;

export const PostFormFragmentDoc = gql`
  fragment PostForm on post {
    id
    title
    description
    content
  }
`;
