import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
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
    typography: {
      // TODO: レスポンシブ対応
      h1: {
        fontSize: '2.2rem',
        fontWeight: 'bold',
      },
    },
  }),
);
