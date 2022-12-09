import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, ThemeProvider } from '@mui/material';

import App from './App.js';

import './sass/main.scss';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
