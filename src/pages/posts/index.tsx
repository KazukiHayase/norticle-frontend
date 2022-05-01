import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { PostNew } from '@/features/post/pages/PostNew';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';

export type OptionalQuery = {
  page?: number;
};

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const isReady = router.isReady;
  if (!isReady) return <></>;

  const page = parseInt(router.query.page as string, 10);

  return <PostNew page={isNaN(page) ? undefined : page} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
