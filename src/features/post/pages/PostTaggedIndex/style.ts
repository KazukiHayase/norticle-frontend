import { experimental_sx as sx, styled } from '@mui/material';

export const TaggedPostText = styled('p')(
  sx({ fontSize: 18, fontWeight: 'bold' }),
);

export const TaggedPostCount = styled('span')(
  sx({ pr: 1, fontSize: 24, fontWeight: 'bold' }),
);
