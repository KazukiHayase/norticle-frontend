import {
  Avatar as MuiAvatar,
  experimental_sx as sx,
  IconButton,
  styled,
} from '@mui/material';
import { grey } from '@mui/material/colors';

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
    flexDirection: 'column',
    gap: 1,
    position: 'absolute',
    top: 0,
    left: -80,
  }),
);

export const Avatar = styled(MuiAvatar)(
  sx({ width: 25, height: 25, border: 1, borderColor: grey[200] }),
);

export const CopyIconButton = styled(IconButton)(
  sx({ bgcolor: '#fff', width: 60, height: 60 }),
);

export const LikeIconButton = styled(IconButton)(
  sx({
    display: 'flex',
    flexDirection: 'column',
    width: 60,
    height: 60,
    bgcolor: '#fff',
    position: 'relative',
  }),
);

export const LikeIcon = styled('div')(sx({ position: 'absolute', bottom: 20 }));

export const LikedCount = styled('span')(
  sx({ position: 'absolute', bottom: 5, fontSize: 14 }),
);
