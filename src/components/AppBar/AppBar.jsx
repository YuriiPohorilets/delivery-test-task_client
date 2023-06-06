import { AppBar as MuiAppBar, Box } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/Container/Container';
import { NavBar } from 'components/NavBar/NavBar';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Logo } from 'components/Logo/Logo';
import { appBar, headerWrapper } from './appBarStyles';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MuiAppBar position="static" sx={appBar}>
      <Container>
        <Box sx={headerWrapper}>
          <Box sx={{ display: 'flex', gap: '80px' }}>
            <Logo />
            <NavBar />
          </Box>

          {isLoggedIn ? <UserMenu /> : <AuthBar />}
        </Box>
      </Container>
    </MuiAppBar>
  );
};
