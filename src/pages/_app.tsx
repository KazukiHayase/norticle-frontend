import { AppProps } from 'next/app';
import Head from 'next/head';

import { AuthorizedApolloProvider } from '@/providers/authorizedApolloProvider';
import { AuthnProvider } from '@/services/authn';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>tmp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthnProvider>
        <AuthorizedApolloProvider>
          <Component {...pageProps} />
        </AuthorizedApolloProvider>
      </AuthnProvider>
    </>
  );
};

export default MyApp;
