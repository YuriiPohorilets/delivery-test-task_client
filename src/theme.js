import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A4D0A4',
      darker: '#617A55',
      light: '#FFF8D6',
      accent: '#F7E1AE',
      text: '#2b2b2b',
    },

    neutral: {
      main: 'rgba(164, 208, 164, 0.3)',
      darker: 'rgba(97, 122, 85, 0.4)',
      light: 'rgba(255, 255, 255, 0.4)',
      accent: 'rgba(247, 225, 174, 0.4)',
    },

    secondary: {
      main: '#ffffff',
    },
  },

  typography: {
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
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
