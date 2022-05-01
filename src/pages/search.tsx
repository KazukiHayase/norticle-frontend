import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { PostSearch } from '@/features/post/pages/PostSearch';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';

export type OptionalQuery = {
  q?: string;
  page?: number;
};

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const isReady = router.isReady;
  if (!isReady) return <></>;

  const keyword = router.query.q;
  const page = parseInt(router.query.page as string, 10);

  return (
    <PostSearch
      keyword={typeof keyword === 'string' ? keyword : undefined}
      page={isNaN(page) ? undefined : page}
    />
  );
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
