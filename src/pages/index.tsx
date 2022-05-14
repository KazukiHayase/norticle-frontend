import { ReactElement } from 'react';

import { PostIndex } from '@/features/post/pages/PostIndex';
import { FetchPostsDocument } from '@/features/post/pages/PostIndex/generated';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { addApolloState, initializeApolloClient } from '@/lib/apolloClient';

// TODO: ISRにする
export const getServerSideProps = async () => {
  const apolloClient = initializeApolloClient({});

  await apolloClient.query({
    query: FetchPostsDocument,
    variables: {
      limit: 6,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

const IndexPage = () => {
  return <PostIndex />;
};

IndexPage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default IndexPage;
