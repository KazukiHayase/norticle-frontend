import * as Types from '../../../../../../graphql/generated/types';

import { gql } from '@apollo/client';
export type TagsFragment = { __typename?: 'query_root' } & {
  tags: Array<{ __typename?: 'tag' } & Pick<Types.Tag, 'id' | 'name'>>;
};

export const TagsFragmentDoc = gql`
  fragment Tags on query_root {
    tags {
      id
      name
    }
  }
`;
