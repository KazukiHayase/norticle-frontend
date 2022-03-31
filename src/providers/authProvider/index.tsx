import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import Router from 'next/router';
import { ReactNode } from 'react';

type AuthProviderProps = {
  readonly children: ReactNode;
};

export const AuthProvider: React.VFC<AuthProviderProps> = ({ children }) => {
  // TODO: エラー時の対応
  // const { isLoading, error } = useAuth0();

  const options: Auth0ProviderOptions = {
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '',
    audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
    redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
    cacheLocation: 'localstorage',
    onRedirectCallback: (appState) => {
      Router.replace(appState?.returnTo || '/');
    },
  };

  return <Auth0Provider {...options}>{children}</Auth0Provider>;
};
