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
  breakpoints: {
    values: {
      xs: 0,
      sm: 390,
      md: 1080,
      lg: 1440,
      xl: 1536,
    },
  },
  typography: {
    h3: {
      fontWeight: 700,
      fontSize: '40px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '70px',
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
