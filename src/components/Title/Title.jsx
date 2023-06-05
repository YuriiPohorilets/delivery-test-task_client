import { Typography } from '@mui/material';

export const Title = ({ children }) => {
  return (
    <Typography
      component="h2"
      sx={{ mb: '24px', fontSize: '32px', color: 'primary.darker', fontWeight: 700 }}
    >
      {children}
    </Typography>
  );
};
