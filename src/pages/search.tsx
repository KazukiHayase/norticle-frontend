import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import { ReactElement } from 'react';

import { PostSearch } from '@/features/post/pages/PostSearch';
import {
  SearchPostsDocument,
  SearchPostsQuery,
  SearchPostsQueryVariables,
} from '@/features/post/pages/PostSearch/generated';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { addApolloState,initializeApolloClient } from '@/lib/apolloClient';

export type OptionalQuery = {
  q?: string;
  page?: number;
};

export const getServerSideProps: GetServerSideProps<{
  keyword?: string;
  page: number;
}> = async ({ query }) => {
  const pageQuery = parseInt(query.page as string, 10);
  const page = isNaN(pageQuery) ? 1 : pageQuery;
  const keyword = query.q;
  if (typeof keyword !== 'string') {
    return {
      props: {
        page: 1,
      },
    };
  }

  const apolloClient = initializeApolloClient();
  await apolloClient.query<SearchPostsQuery, SearchPostsQueryVariables>({
    query: SearchPostsDocument,
    variables: {
      ilike: `%${keyword}%`,
      offset: (page - 1) * 10,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      keyword,
      page,
    },
  });
};

const Page = ({
  keyword,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostSearch keyword={keyword} page={page} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
