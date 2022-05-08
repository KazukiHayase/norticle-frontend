import { ReactElement, useMemo } from 'react';

import { PostIndex } from '@/features/post/pages/PostIndex';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { addApolloState, initializeApollo } from '@/lib/apolloClient';
import { GetServerSidePropsContext } from 'next';
import { FetchPostsDocument } from '@/features/post/pages/PostIndex/generated';

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FetchPostsDocument,
    variables: {
      limit: 6,
    },
  });

  // ここで返しているcreatedAtとかがdatetime型のままだから怒られている
  // ここの時点ではすでにapolloLinkは通っている
  return addApolloState(apolloClient, {
    props: {},
  });
};

const IndexPage = () => {
  // ここではちゃんとdate型
  return <PostIndex />;
};

IndexPage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default IndexPage;
