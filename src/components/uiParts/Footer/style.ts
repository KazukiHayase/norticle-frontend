import { experimental_sx as sx, styled } from '@mui/material';

export const Logo = styled('div')(
  sx({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pb: 3,
  }),
);

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'start',
  },
}));

export const Nav = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
