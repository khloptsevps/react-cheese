import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { orange } from '@mui/material/colors';

import store from './redux/store';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    htmlFontSize: 10,
    fontSize: 16,
  },
  palette: {
    primary: {
      main: 'rgba(244, 178, 4)',
    },
    secondary: {
      main: orange[700],
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          color: '#000',
          '&:hover': {
            backgroundColor: 'rgba(244, 178, 4, 0.7)',
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 250,
          objectFit: 'cover',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          right: '-1px',
          top: 13,
          padding: '6px',
          border: '1px solid #FFF',
        },
      },
    },
  },
});

const initApp = () => {
  const app = (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
  return app;
};

export default initApp;
