import { Box, Typography } from '@mui/material';

export const Logo = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: '32px', fontWeight: 700, color: 'primary.light' }}>
        <Typography
          component={'span'}
          sx={{ color: 'primary.darker', fontSize: '40px', fontWeight: 700 }}
        >
          D
        </Typography>
        elivery
      </Typography>
    </Box>
  );
};
