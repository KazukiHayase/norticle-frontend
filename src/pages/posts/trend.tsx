import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import { ReactElement } from 'react';

import { PostTrend } from '@/features/post/pages/PostTrend';
import {
  FetchTrendPostsDocument,
  FetchTrendPostsQuery,
  FetchTrendPostsQueryVariables,
} from '@/features/post/pages/PostTrend/generated';
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

  const apolloClient = initializeApolloClient();
  const res = await apolloClient.query<
    FetchTrendPostsQuery,
    FetchTrendPostsQueryVariables
  >({
    query: FetchTrendPostsDocument,
    variables: {
      offset: (page - 1) * 10,
    },
  });

  const pageProps = res.data.posts.length
    ? {
        props: {
          page,
        },
      }
    : {
        notFound: true,
      };

  return addApolloState(apolloClient, pageProps);
};

const Page = ({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostTrend page={page} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
