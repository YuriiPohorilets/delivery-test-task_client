import { AppBar as MuiAppBar, Box } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/Container/Container';
import { NavBar } from 'components/NavBar/NavBar';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Logo } from 'components/Logo/Logo';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MuiAppBar position="static" sx={{ p: '14px', boxShadow: 3 }}>
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

          {isLoggedIn ? <UserMenu /> : <AuthBar />}
        </Box>
      </Container>
    </MuiAppBar>
  );
};
