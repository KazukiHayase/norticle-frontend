import {
  Avatar as MuiAvatar,
  experimental_sx as sx,
  IconButton,
  styled,
} from '@mui/material';
import { grey, pink } from '@mui/material/colors';

export const UserInfo = styled('div')(
  sx({
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    pb: 0.5,
  }),
);

export const ActionArea = styled('div')(({ theme }) =>
  sx({
    [theme.breakpoints.down('md')]: {
      width: 1,
      pt: 3,
    },
    [theme.breakpoints.up('md')]: {
      height: 1,
      position: 'absolute',
      top: 0,
      left: -70,
    },
  }),
);

export const ActionAreaInner = styled('div')(({ theme }) =>
  sx({
    display: 'flex',
    justifyContent: 'end',
    gap: 1,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      position: 'sticky',
      top: 50,
    },
  }),
);

export const Avatar = styled(MuiAvatar)(
  sx({ width: 25, height: 25, border: 1, borderColor: grey[200] }),
);

export const LikeIconButton = styled(IconButton)<{ isActive: boolean }>(
  ({ isActive }) =>
    sx({
      display: 'flex',
      flexDirection: 'column',
      width: 50,
      height: 50,
      bgcolor: isActive ? pink[100] : { xs: grey[200], md: 'white' },
      position: 'relative',
      ...(isActive
        ? {
            '& svg': {
              color: pink[500],
            },
            '& span': {
              color: pink[500],
            },
          }
        : {}),
    }),
);

export const LikeIcon = styled('div')(sx({ position: 'absolute', bottom: 15 }));

export const LikedCount = styled('span')(
  sx({
    position: 'absolute',
    bottom: 5,
    fontSize: 12,
  }),
);

export const TotalLikedCount = styled('span')<{ isActive: boolean }>(
  ({ theme, isActive }) =>
    sx({
      display: 'block',
      width: 1,
      color: isActive ? pink[500] : theme.palette.action.active,
      textAlign: 'center',
    }),
);

export const CopyIconButton = styled(IconButton)(
  sx({ bgcolor: { xs: grey[200], md: 'white' }, width: 50, height: 50 }),
);
