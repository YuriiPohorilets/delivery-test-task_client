import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Title } from 'components/Title/Title';
import { Loader } from 'components/Loader/Loader';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

export const Register = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Title>Sign up to continue</Title>

      {isLoading && <Loader />}

      <RegisterForm isLoading={isLoading} />

      {error && <Typography sx={{ color: 'red', mb: '18px' }}>{error.message}</Typography>}
    </Box>
  );
};
