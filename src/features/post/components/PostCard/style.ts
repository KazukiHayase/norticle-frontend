import { experimental_sx as sx, styled, Typography } from '@mui/material';

export const PostTitle = styled(Typography)(
  sx({
    display: '-webkit-box',
    mb: 2,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  }),
);

export const PostContent = styled(Typography)(
  sx({
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 10,
    WebkitBoxOrient: 'vertical',
  }),
);
