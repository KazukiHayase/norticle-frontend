import {
  Avatar as MuiAvatar,
  experimental_sx as sx,
  styled,
} from '@mui/material';
import { grey } from '@mui/material/colors';

import { NextLinkComposed } from '@/components/uiParts/Link';

export const Title = styled(NextLinkComposed)(({ theme }) => ({
  ...theme.typography.h3,
  display: '-webkit-box',
  marginBottom: theme.spacing(2),
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
}));

export const Content = styled(NextLinkComposed)(({ theme }) => ({
  ...theme.typography.body1,
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 10,
  WebkitBoxOrient: 'vertical',
}));

export const SubHeader = styled('div')(sx({ display: 'flex', gap: 1 }));

export const Avatar = styled(MuiAvatar)(
  sx({ border: 1, borderColor: grey[200] }),
);

export const Like = styled('span')(
  sx({ display: 'flex', alignItems: 'center', gap: 0.3 }),
);

export const TagWrapper = styled('div')(
  sx({ display: 'flex', flexWrap: 'wrap', gap: 0.5, pb: 2 }),
);
