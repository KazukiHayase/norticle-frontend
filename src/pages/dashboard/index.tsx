import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ReactElement } from 'react';

import { DashboardLayout } from '@/features/dashboard/layouts/DashboardLayout';
import { DashboardPosts } from '@/features/dashboard/pages/DashboardPosts';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = withAuthenticationRequired(() => {
  return <DashboardPosts />;
});

Page.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
