import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { useAuth0 } from '@auth0/auth0-react';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

import { useNotifier } from '@/hooks/useNotifier';
import { customScalarLink } from '@/providers/authorizedApolloProvider/links/customScalarLink';

const isServer = typeof window === 'undefined';
const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = (apolloLinks?: ApolloLink[]) => {
  const httpLink = createHttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URL });
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
          console.log(`[GraphQL error]: Message: ${message}`);
        }
      });
    }

    if (networkError) {
      if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
        console.log(`[Network error]: ${networkError}`);
      }
    }
  });

  return new ApolloClient({
    ssrMode: isServer,
    link: ApolloLink.from([
      ...(apolloLinks ?? []),
      customScalarLink,
      errorLink,
      httpLink,
    ]),
    cache: new InMemoryCache({
      // See: https://www.apollographql.com/docs/react/caching/cache-configuration/#overriding-root-operation-types-uncommon
      typePolicies: {
        query_root: {
          queryType: true,
        },
        mutation_root: {
          mutationType: true,
        },
      },
    }),
  });
};

export const initializeApolloClient = ({
  initialState,
  apolloLinks,
}: {
  initialState?: NormalizedCacheObject;
  apolloLinks?: ApolloLink[];
}) => {
  const _apolloClient = apolloClient ?? createApolloClient(apolloLinks);

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s)),
        ),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (isServer) return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any,
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
};

// TODO: 型安全にする
export function useApollo(pageProps: any) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { notice } = useNotifier();

  const authLink = setContext(async (_, { headers, ...context }) => {
    const token = isAuthenticated ? await getAccessTokenSilently() : '';
    return {
      headers: {
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      ...context,
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    const enableNotification = !operation.getContext().disableNotification;

    if (graphQLErrors || networkError) {
      if (enableNotification) notice('予期せぬエラーが発生しました', 'error');
    }
  });

  const state = pageProps[APOLLO_STATE_PROP_NAME];

  const client = useMemo(
    () =>
      initializeApolloClient({
        initialState: state,
        apolloLinks: [authLink, errorLink],
      }),
    [state, authLink, errorLink],
  );

  return client;
}
