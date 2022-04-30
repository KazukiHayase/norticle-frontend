import { styled, Typography } from '@mui/material';

export const H1 = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
}));

export const H2 = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
}));

export const P = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));
