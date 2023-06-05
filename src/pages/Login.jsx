import { useSelector } from 'react-redux';
import { Box, Typography, LinearProgress } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from 'components/Title/Title';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

export const Login = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Title>Sign in to continue</Title>

      {isLoading && (
        <Box sx={{ width: '70%', mb: '24px' }}>
          <LinearProgress />
        </Box>
      )}

      <LoginForm isLoading={isLoading} />

      {error && <Typography sx={{ color: 'red', mb: '18px' }}>{error.message}</Typography>}

      <Typography sx={{ fontSize: '12px', fontStyle: 'italic' }}>
        *you can also use a demo credentials
      </Typography>
    </Box>
  );
};
