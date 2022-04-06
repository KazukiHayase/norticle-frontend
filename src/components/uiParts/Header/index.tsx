import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { VFC } from 'react';

import { Link } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';

import { Logo } from './style';

export const Header: VFC = () => {
  const router = useRouter();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link href={pagesPath.$url()}>
            <Logo>
              <Image src="/images/logo.png" width={120} height={40} />
            </Logo>
          </Link>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {isAuthenticated ? (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => logout()}
                  sx={{ fontWeight: 'bold' }}
                >
                  ログアウト
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push(pagesPath.post.add.$url())}
                  sx={{ fontWeight: 'bold' }}
                >
                  投稿する
                </Button>
              </>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
