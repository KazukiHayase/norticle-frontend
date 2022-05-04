import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import {
  Auth0Provider,
  Auth0ProviderOptions,
  useAuth0,
} from '@auth0/auth0-react';
import Router from 'next/router';
import { ReactNode, useEffect } from 'react';

type AuthProviderProps = {
  readonly children: ReactNode;
};

export const AuthProvider: React.VFC<AuthProviderProps> = ({ children }) => {
  const { isLoading, error } = useAuth0();
  const { notice } = useNotifier();

  useEffect(() => {
    if (!isLoading && error) {
      notice('ログインに失敗しました', 'error');

      // 本番以外ではログを出力
      if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production') {
        console.log(`[Auth0 error]: Message: ${error.message}`);
      }
    }
  }, [isLoading, error]);

  const options: Auth0ProviderOptions = {
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '',
    audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
    redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
    cacheLocation: 'localstorage',
    onRedirectCallback: (appState) => {
      Router.replace(appState?.returnTo ?? pagesPath.$url());
    },
  };

  return <Auth0Provider {...options}>{children}</Auth0Provider>;
};
