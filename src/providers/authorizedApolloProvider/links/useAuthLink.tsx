import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';

// auth0からアクセストークンを取得してヘッダーに設定するApolloLink
// See: https://github.com/apollographql/apollo-client/issues/4990#issuecomment-504447592
export const useAuthLink = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  return setContext(async (_, { headers, ...context }) => {
    const token = isAuthenticated ? await getAccessTokenSilently() : '';
    return {
      headers: {
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
          ? {
              'x-hasura-admin-secret':
                process.env.NEXT_PUBLIC_X_HASURA_ADMIN_SECRET,
            }
          : {}),
      },
      ...context,
    };
  });
};
