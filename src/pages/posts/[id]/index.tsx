import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next/types';
import { ReactElement } from 'react';

import { PostDetail } from '@/features/post/pages/PostDetail';
import {
  FetchPostDocument,
  FetchPostQuery,
  FetchPostQueryVariables,
} from '@/features/post/pages/PostDetail/generated';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { addApolloState, initializeApolloClient } from '@/lib/apolloClient';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<{ postId: number }> = async ({
  params,
}) => {
  const postId =
    params?.id && typeof params.id === 'string'
      ? parseInt(params.id, 10)
      : undefined;
  if (!postId || isNaN(postId)) {
    return {
      notFound: true,
    };
  }

  const apolloClient = initializeApolloClient();
  const res = await apolloClient.query<FetchPostQuery, FetchPostQueryVariables>(
    {
      query: FetchPostDocument,
      variables: {
        postId,
      },
    },
  );

  const pageProps = res.data.post
    ? {
        props: {
          postId,
        },
        revalidate: 60,
      }
    : {
        notFound: true,
      };

  return addApolloState(apolloClient, pageProps);
};

const Page = ({ postId }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <PostDetail postId={postId} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
