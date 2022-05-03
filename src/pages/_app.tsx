import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { SnackbarProvider } from 'notistack';
import { ReactElement, ReactNode } from 'react';

import { AuthorizedApolloProvider } from '@/providers/authorizedApolloProvider';
import { AuthProvider } from '@/providers/authProvider';
import { progress } from '@/services/progress';
import { theme } from '@/styles/theme';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/features/common/pages/ErrorFallback';
import { DefaultLayout } from '@/layouts/DefaultLayout';

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.done);
Router.events.on('routeChangeError', progress.done);

// https://nextjs.org/docs/basic-features/layouts#with-typescript
export type NextPageWithLayout = NextPage & {
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
        <title>norticle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ErrorBoundary
        FallbackComponent={() => (
          <DefaultLayout>
            <ErrorFallback />
          </DefaultLayout>
        )}
      >
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <AuthProvider>
            <AuthorizedApolloProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </AuthorizedApolloProvider>
          </AuthProvider>
        </SnackbarProvider>
      </ErrorBoundary>
    </>
  );
};

export default MyApp;
