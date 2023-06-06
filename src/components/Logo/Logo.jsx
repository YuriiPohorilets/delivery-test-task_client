import { Box } from '@mui/material';
import LogoImg from 'img/logo.png';

export const Logo = () => {
  return (
    <Box>
      <img src={LogoImg} alt="Logo" width={200} height={70} loading="lazy" />
    </Box>
  );
};
