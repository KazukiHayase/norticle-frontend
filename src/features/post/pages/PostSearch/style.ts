import { experimental_sx as sx, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

export const SearchResultText = styled('p')(
  sx({ fontSize: 18, fontWeight: 'bold' }),
);

export const SearchResultCount = styled('span')(
  sx({ pr: 1, fontSize: 24, fontWeight: 'bold' }),
);

export const SearchResultNotFound = styled('p')(
  sx({ color: grey[600], fontWeight: 'bold', textAlign: 'center' }),
);
