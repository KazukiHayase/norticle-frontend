import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        '.itemImageManageModalDragItem': {
          zIndex: 1300,
          opacity: '0.7',
        },
      },
    },
  },
});
