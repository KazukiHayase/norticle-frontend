import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { AuthnProvider } from '../../src/services/authn';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

  return (
    <>
      <Head>
        <title>tmp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthnProvider>
          <Component {...pageProps} />
      </AuthnProvider>
    </>
  );
};

export default MyApp;
