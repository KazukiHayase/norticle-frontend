---
to: "<%= haveStyle ? `${path}/style.ts` : null %>"
---
import { styled } from '@mui/system';

export const MyComponent = styled('div')({
  padding: 8,
  borderRadius: 4,
});
