import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import { ReactElement } from 'react';

import { PostTaggedIndex } from '@/features/post/pages/PostTaggedIndex';
import {
  FetchTaggedPostsDocument,
  FetchTaggedPostsQuery,
  FetchTaggedPostsQueryVariables,
} from '@/features/post/pages/PostTaggedIndex/generated';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { addApolloState, initializeApolloClient } from '@/lib/apolloClient';

export type OptionalQuery = {
  page?: number;
};

export const getServerSideProps: GetServerSideProps<{
  tagName: string;
  page: number;
}> = async ({ params, query }) => {
  const pageQuery = parseInt(query.page as string, 10);
  const page = isNaN(pageQuery) ? 1 : pageQuery;
  const tagName = params?.name;
  if (!tagName || typeof tagName !== 'string') {
    return {
      notFound: true,
    };
  }

  const apolloClient = initializeApolloClient();
  const res = await apolloClient.query<
    FetchTaggedPostsQuery,
    FetchTaggedPostsQueryVariables
  >({
    query: FetchTaggedPostsDocument,
    variables: {
      tagName,
      offset: (page - 1) * 10,
    },
  });

  const pageProps = res.data.tagsAggregate.aggregate?.count
    ? {
        props: {
          tagName,
          page,
        },
      }
    : {
        notFound: true,
      };

  return addApolloState(apolloClient, pageProps);
};

const Page = ({
  tagName,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostTaggedIndex tagName={tagName} page={page} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
