import { useMemo } from 'react';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { customScalarLink } from '@/providers/authorizedApolloProvider/links/customScalarLink';
import { serialize } from 'superjson';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      customScalarLink,
      new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL, // Server URL (must be absolute)
      }),
    ]),
    cache: new InMemoryCache({
      // typePolicies is not required to use Apollo with Next.js - only for doing pagination.
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
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null,
) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s)),
        ),
      ],
    });

    // console.log('===========initialState==============');
    // console.dir(initialState);
    // console.log('===========existingCache==============');
    // console.dir(existingCache);
    // console.log('===========data==============');
    // console.dir(data);
    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
    // console.log('_apolloClient.cache');
    // console.dir(_apolloClient.cache);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any,
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  // MEMO: ここではちゃんとdate型
  // const serializedProps = serialize(pageProps.props);
  // console.log('=======serializedProps======');
  // console.dir(serializedProps);

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  // ここの時点ですでに文字列になってる
  // console.log('=======state========');
  // console.dir(state);
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
