import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import { VFC } from 'react';

export const Header: VFC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  console.log(isAuthenticated);

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Image src="/images/logo.png" width={150} height={50} />
          {isAuthenticated ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => logout()}
              sx={{ fontWeight: 'bold' }}
            >
              ログアウト
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={loginWithRedirect}
              sx={{ fontWeight: 'bold' }}
            >
              ログイン
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
