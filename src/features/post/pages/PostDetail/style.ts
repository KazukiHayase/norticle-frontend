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

export const Sidebar = styled('div')(
  sx({ position: 'absolute', top: 0, left: -70 }),
);

export const Avatar = styled(MuiAvatar)(
  sx({ width: 25, height: 25, border: 1, borderColor: grey[200] }),
);

export const CopyIconButton = styled(IconButton)(
  sx({ bgcolor: '#fff', width: 50, height: 50 }),
);
