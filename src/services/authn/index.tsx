import {
  AppState,
  Auth0Provider,
  Auth0ProviderOptions,
  useAuth0,
  User,
  withAuthenticationRequired,
} from '@auth0/auth0-react';
import Router from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export const auth0Config: Pick<
  Auth0ProviderOptions,
  'clientId' | 'domain' | 'audience' | 'redirectUri'
> = {
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '',
  audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
  redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
};

const auth0ProviderOptions: Auth0ProviderOptions = {
  ...auth0Config,
  cacheLocation: 'localstorage',
  // https://github.com/auth0/auth0-react/blob/master/EXAMPLES.md#3-protecting-a-route-in-a-nextjs-app-in-spa-mode
  onRedirectCallback: (appState: AppState) => {
    Router.replace(appState?.returnTo || '/');
  },
};
export const AuthnProvider: React.FC = ({ children }) => (
  <Auth0Provider {...auth0ProviderOptions}>
    <AuthnProviderInner>{children}</AuthnProviderInner>
  </Auth0Provider>
);

const AuthnProviderInner: React.FC = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (!isLoading && error) {
    return <>ERROR: {error.message}</>;
  }
  return <>{children}</>;
};

export const withAuthn: typeof withAuthenticationRequired = (component) =>
  withAuthenticationRequired(component, {
    onRedirecting: () => <div>loading</div>,
  });

export const useAccessToken = (): {
  isLoading: boolean;
  accessToken?: string;
} => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (!isAuthenticated) return;
    const getToken = async () => {
      const token = await getAccessTokenSilently({
        audience: auth0Config.audience,
      });
      setAccessToken(token);
      setIsLoading(false);
    };
    getToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return { isLoading: false };
  }

  return { isLoading, accessToken };
};

export const useAuthn = (): { user?: User; logout: () => void } => {
  const { user, logout: auth0Logout } = useAuth0();
  const logout = useCallback(
    () => auth0Logout({ client_id: auth0Config.clientId }),
    [auth0Logout],
  );
  return {
    user,
    logout,
  };
};
