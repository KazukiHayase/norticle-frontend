import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { ReactElement, ReactNode } from 'react';

import { AuthorizedApolloProvider } from '@/providers/authorizedApolloProvider';
import { AuthnProvider } from '@/services/authn';
import { progress } from '@/services/progress';
import { theme } from '@/styles/theme';

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.start);
Router.events.on('routeChangeError', progress.done);

// https://nextjs.org/docs/basic-features/layouts#with-typescript
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>tmp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthnProvider>
        <AuthorizedApolloProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </AuthorizedApolloProvider>
      </AuthnProvider>
    </>
  );
};

export default MyApp;
