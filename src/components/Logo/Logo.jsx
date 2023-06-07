import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import LogoImg from 'img/logo.png';

export const Logo = () => {
  return (
    <Box sx={{ width: '200px' }}>
      <Link to="/">
        <img src={LogoImg} alt="Logo" width={200} height={70} loading="lazy" />
      </Link>
    </Box>
  );
};
