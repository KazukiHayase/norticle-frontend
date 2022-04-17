import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ReactElement } from 'react';

import { DashboardLayout } from '@/features/dashboard/layouts/DashboardLayout';
import { SettingLayout } from '@/features/setting/layouts/SettingLayout';
import { SettingAccount } from '@/features/setting/pages/SettingAccount';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = withAuthenticationRequired(() => {
  return <SettingAccount />;
});

Page.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout>
      <SettingLayout>{page}</SettingLayout>
    </DashboardLayout>
  );
};

export default Page;
