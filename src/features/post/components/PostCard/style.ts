import {
  Avatar as MuiAvatar,
  experimental_sx as sx,
  styled,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';

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

export const Avatar = styled(MuiAvatar)(
  sx({ border: 1, borderColor: grey[200] }),
);
