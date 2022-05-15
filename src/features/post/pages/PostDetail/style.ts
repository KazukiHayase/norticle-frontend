import {
  Avatar as MuiAvatar,
  experimental_sx as sx,
  IconButton,
  styled,
} from '@mui/material';
import { grey, lightBlue, pink } from '@mui/material/colors';

export const UserInfo = styled('div')(
  sx({
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    pb: 0.5,
  }),
);

export const ActionArea = styled('div')(
  sx({
    display: 'flex',
    justifyContent: 'end',
    gap: 1,
    width: 1,
    pt: 8,
  }),
);

export const Avatar = styled(MuiAvatar)(
  sx({ width: 25, height: 25, border: 1, borderColor: grey[200] }),
);

// See: https://stackoverflow.com/questions/71451558/getting-warning-from-props-passed-in-mui-styled-components-related-to-react-not
export const LikeIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) =>
  sx({
    display: 'flex',
    flexDirection: 'column',
    width: 50,
    height: 50,
    bgcolor: isActive ? pink[100] : grey[200],
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

export const TotalLikedCount = styled('span', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) =>
  sx({
    display: 'block',
    width: 1,
    color: isActive ? pink[500] : theme.palette.action.active,
    textAlign: 'center',
  }),
);

export const CopyIconButton = styled(IconButton)(
  sx({ bgcolor: grey[200], width: 50, height: 50 }),
);

export const StockIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) =>
  sx({
    bgcolor: isActive ? lightBlue[100] : grey[200],
    width: 50,
    height: 50,
    ...(isActive
      ? {
          '& svg': {
            color: theme.palette.primary.main,
          },
        }
      : {}),
  }),
);
