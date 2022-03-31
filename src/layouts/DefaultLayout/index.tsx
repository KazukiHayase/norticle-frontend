import { AppBar, Box, Toolbar } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';

type DefaultLayoutProps = {
  readonly children: ReactNode;
};

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Image src="/images/logo.png" width={100} height={50} />
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
};
