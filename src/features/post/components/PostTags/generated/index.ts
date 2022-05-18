import * as Types from '../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
export type PostTagsFragment = { __typename?: 'post' } & {
  taggings: Array<
    { __typename?: 'tagging' } & Pick<Types.Tagging, 'id'> & {
        tag: { __typename?: 'tag' } & Pick<Types.Tag, 'id' | 'name'>;
      }
  >;
};

export const PostTagsFragmentDoc = gql`
  fragment PostTags on post {
    taggings {
      id
      tag {
        id
        name
      }
    }
  }
`;
