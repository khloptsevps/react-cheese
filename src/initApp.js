import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

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
    yellow: {
      main: '#f4b204',
    },
    orange: {
      main: '#ed6c03',
    },
    gray: {
      main: '#938e88',
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
