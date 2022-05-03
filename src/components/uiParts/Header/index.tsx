import { useAuth0 } from '@auth0/auth0-react';
import {
  faBookBookmark,
  faMagnifyingGlass,
  faNoteSticky,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import { useState, VFC } from 'react';
import { MouseEvent } from 'react';

import { Link, NextLinkComposed } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';

import { Logo } from './style';
import { Avatar, MenuItemContent } from './style';

export const Header: VFC = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);

  const handleClickUserIcon = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(undefined);
  };

  const handleClickLogoutButton = () => {
    logout({ returnTo: process.env.NEXT_PUBLIC_AUTH0_LOGOUT_REDIRECT_URI });
  };

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container>
        <Toolbar disableGutters>
          <Link href={pagesPath.$url()}>
            <Logo>
              <Image src="/images/logo.png" width={120} height={40} />
            </Logo>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              component={NextLinkComposed}
              to={pagesPath.search.$url()}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20} />
            </IconButton>
            {isAuthenticated ? (
              <>
                <Avatar
                  src={user && user.picture}
                  onClick={handleClickUserIcon}
                />
                <Button
                  variant="contained"
                  color="primary"
                  component={NextLinkComposed}
                  to={pagesPath.posts.add.$url()}
                  sx={{ fontWeight: 'bold' }}
                >
                  投稿する
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={!!anchorEl}
                  onClose={handleCloseMenu}
                  disableAutoFocusItem
                  sx={{ py: 0 }}
                >
                  <MenuItem
                    component={NextLinkComposed}
                    to={pagesPath.dashboard.$url()}
                    onClick={handleCloseMenu}
                  >
                    <MenuItemContent>
                      <FontAwesomeIcon
                        icon={faNoteSticky}
                        style={{ color: grey[700] }}
                      />
                      <Typography fontSize={14}>投稿一覧</Typography>
                    </MenuItemContent>
                  </MenuItem>
                  <MenuItem
                    component={NextLinkComposed}
                    to={pagesPath.dashboard.stocks.$url()}
                    onClick={handleCloseMenu}
                  >
                    <MenuItemContent>
                      <FontAwesomeIcon
                        icon={faBookBookmark}
                        style={{ color: grey[700] }}
                      />
                      <Typography fontSize={14}>ストック一覧</Typography>
                    </MenuItemContent>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClickLogoutButton}>
                    <MenuItemContent>
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        style={{ color: grey[700] }}
                      />
                      <Typography fontSize={14}>ログアウト</Typography>
                    </MenuItemContent>
                  </MenuItem>
                </Menu>
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
