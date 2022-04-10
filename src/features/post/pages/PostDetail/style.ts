import { experimental_sx as sx, IconButton, styled } from '@mui/material';

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

export const CopyIconButton = styled(IconButton)(
  sx({ bgcolor: '#fff', width: 50, height: 50 }),
);
