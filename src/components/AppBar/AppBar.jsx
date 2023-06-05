import { AppBar as MuiAppBar, Box } from '@mui/material';
import { Container } from 'components/Container/Container';
import { NavBar } from 'components/NavBar/NavBar';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { Logo } from 'components/Logo/Logo';

export const AppBar = () => {
  return (
    <MuiAppBar position="static" sx={{ p: '14px' }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <Logo />
          <NavBar />
          <AuthBar />
        </Box>
      </Container>
    </MuiAppBar>
  );
};
