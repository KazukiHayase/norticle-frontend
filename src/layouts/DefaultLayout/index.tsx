import { ReactNode } from 'react';

import { Header } from '@/components/Header';

type DefaultLayoutProps = {
  readonly children: ReactNode;
};

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
