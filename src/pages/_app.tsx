import 'nprogress/nprogress.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import nprogress from 'nprogress';
import { ReactElement, ReactNode } from 'react';

import { AuthorizedApolloProvider } from '@/providers/authorizedApolloProvider';
import { AuthnProvider } from '@/services/authn';
import { theme } from '@/styles/theme';

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });
Router.events.on('routeChangeStart', nprogress.start);
Router.events.on('routeChangeComplete', nprogress.done);
Router.events.on('routeChangeError', nprogress.done);

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
