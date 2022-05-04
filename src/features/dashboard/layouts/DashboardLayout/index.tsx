import { Divider } from '@mui/material';
import { ReactNode } from 'react';

import { Footer } from '@/components/uiParts/Footer';
import { Header } from '@/components/uiParts/Header';
import { DashboardNav } from '@/features/dashboard/components/DashboardNav';

type DashboardLayoutProps = {
  readonly children: ReactNode;
};

export const DashboardLayout: React.VFC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <DashboardNav />
      {children}
      <Divider />
      <Footer />
    </>
  );
};
