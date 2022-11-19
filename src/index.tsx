import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 390,
      md: 768,
      lg: 1080,
      xl: 1440,
    },
  }
});

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
