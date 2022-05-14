import { ApolloProvider } from '@apollo/client';

import { useApollo } from '@/lib/apolloClient';

type AuthorizedApolloProviderProps = {
  pageProps: any;
  children?: React.ReactNode;
};

export const AuthorizedApolloProvider: React.VFC<AuthorizedApolloProviderProps> =
  ({ pageProps, children }) => {
    const client = useApollo(pageProps);

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  };
