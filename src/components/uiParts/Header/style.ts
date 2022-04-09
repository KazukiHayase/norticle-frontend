import {
  Avatar as MuiAvatar,
  experimental_sx as sx,
  styled,
} from '@mui/material';
import { grey } from '@mui/material/colors';

export const Logo = styled('div')(
  sx({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

export const MenuItemContent = styled('div')(
  sx({
    display: 'flex',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

export const Avatar = styled(MuiAvatar)(
  sx({ cursor: 'pointer', border: 1, borderColor: grey[200] }),
);
