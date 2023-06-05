import { Container as MuiContainer } from '@mui/material';

export const Container = ({ children }) => {
  return (
    <MuiContainer sx={{ mx: 'auto', px: '15px', maxWidth: '1200px' }}>{children}</MuiContainer>
  );
};
