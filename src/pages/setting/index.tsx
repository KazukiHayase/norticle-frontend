import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ReactElement } from 'react';

import { DashboardLayout } from '@/features/dashboard/layouts/DashboardLayout';
import { SettingLayout } from '@/features/setting/layouts/SettingLayout';
import { SettingUser } from '@/features/setting/pages/SettingUser';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = withAuthenticationRequired(() => {
  return <SettingUser />;
});

Page.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout>
      <SettingLayout>{page}</SettingLayout>
    </DashboardLayout>
  );
};

export default Page;
