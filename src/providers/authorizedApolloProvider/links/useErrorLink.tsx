import { onError } from '@apollo/client/link/error';

import { useNotifier } from '@/hooks/useNotifier';

export const useErrorLink = () => {
  const { notice } = useNotifier();

  return onError(({ graphQLErrors, networkError, operation }) => {
    const enableNotification = !operation.getContext().disableNotification;

    if (graphQLErrors) {
      if (enableNotification) notice('予期せぬエラーが発生しました', 'error');

      graphQLErrors.forEach(({ message }) => {
        // 本番以外ではログを出力
        if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
          console.log(`[GraphQL error]: Message: ${message}`);
        }
      });
    }

    if (networkError) {
      if (enableNotification) notice('予期せぬエラーが発生しました', 'error');

      // 本番以外ではログを出力
      if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
        console.log(`[Network error]: ${networkError}`);
      }
    }
  });
};
