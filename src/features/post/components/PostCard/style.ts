import { experimental_sx as sx, styled, Typography } from '@mui/material';

export const PostContent = styled(Typography)(
  sx({
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 10,
    WebkitBoxOrient: 'vertical',
  }),
);
