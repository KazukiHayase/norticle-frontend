import { onError } from '@apollo/client/link/error';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      // 本番以外ではログを出力
      if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
        console.log(`[GraphQL error]: Message: ${message}`);
      }
    });
  }

  if (networkError) {
    // 本番以外ではログを出力
    if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
      console.log(`[Network error]: ${networkError}`);
    }
  }
});
