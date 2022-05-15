import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import { ReactElement } from 'react';

import { PostNew } from '@/features/post/pages/PostNew';
import {
  FetchNewPostsDocument,
  FetchNewPostsQuery,
  FetchNewPostsQueryVariables,
} from '@/features/post/pages/PostNew/generated';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { addApolloState, initializeApolloClient } from '@/lib/apolloClient';

export type OptionalQuery = {
  page?: number;
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const pageQuery = parseInt(query.page as string, 10);
  const page = isNaN(pageQuery) ? 1 : pageQuery;

  const apolloClient = initializeApolloClient({});
  const res = await apolloClient.query<
    FetchNewPostsQuery,
    FetchNewPostsQueryVariables
  >({
    query: FetchNewPostsDocument,
    variables: {
      offset: (page - 1) * 10,
    },
  });

  if (!res.data.posts.length) {
    return {
      props: { page },
      notFound: true,
    };
  }

  const pageProps = res.data.posts.length
    ? {
        props: {
          page,
        },
      }
    : {
        props: { page },
        notFound: true,
      };

  return addApolloState(apolloClient, pageProps);
};

const Page = ({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostNew page={page} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
