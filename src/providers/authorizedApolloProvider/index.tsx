import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import { customScalarLink } from './links/customScalarLink';
import { errorLink } from './links/errorLink';
import { useAuthLink } from './links/useAuthLink';

type AuthorizedApolloProviderProps = {
  children?: React.ReactNode;
};

export const AuthorizedApolloProvider: React.VFC<AuthorizedApolloProviderProps> =
  ({ children }) => {
    const httpLink = createHttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    });
    console.log(process.env.NEXT_PUBLIC_GRAPHQL_URL);
    const authLink = useAuthLink();

    const cache = new InMemoryCache({
      // See: https://www.apollographql.com/docs/react/caching/cache-configuration/#overriding-root-operation-types-uncommon
      typePolicies: {
        query_root: {
          queryType: true,
        },
        mutation_root: {
          mutationType: true,
        },
      },
    });

    const client = new ApolloClient({
      link: ApolloLink.from([customScalarLink, authLink, errorLink, httpLink]),
      cache,
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  };
