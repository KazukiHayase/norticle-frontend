import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { DashboardLayout } from '@/features/dashboard/layouts/DashboardLayout';
import { DashboardStockedPosts } from '@/features/dashboard/pages/DashboardStockedPosts';
import { NextPageWithLayout } from '@/pages/_app';

export type OptionalQuery = {
  page?: number;
};

const Page: NextPageWithLayout = withAuthenticationRequired(() => {
  const router = useRouter();
  const isReady = router.isReady;
  if (!isReady) return <></>;

  const page = parseInt(router.query.page as string, 10);

  return <DashboardStockedPosts page={isNaN(page) ? undefined : page} />;
});

Page.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
