import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0269b4',
      darker: '#222746',
      light: '#ffffff',
      accent: '#d10a14',
    },

    neutral: {
      main: 'rgba(2, 106, 180, 0.2)',
      darker: 'rgba(34, 39, 70, 0.4)',
      light: 'rgba(255, 255, 255, 0.4)',
      accent: 'rgba(209, 10, 20, 0.4)',
    },

    secondary: {
      main: '#ffffff',
    },
  },

  typography: {
    fontFamily: ['Comic Neue', 'sans-serif'].join(','),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
