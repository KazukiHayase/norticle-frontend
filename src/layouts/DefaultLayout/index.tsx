import { Divider } from '@mui/material';
import { ReactNode } from 'react';

import { Header } from '@/components/uiParts/Header';

type DefaultLayoutProps = {
  readonly children: ReactNode;
};

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Divider />
      {children}
    </>
  );
};
