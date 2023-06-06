import { Box, LinearProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box sx={{ width: '100%', mb: '24px' }}>
      <LinearProgress />
    </Box>
  );
};
