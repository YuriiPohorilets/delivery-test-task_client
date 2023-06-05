import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Box, TextField, Button } from '@mui/material';
import { login } from 'redux/auth/operations';
import { loginSchema } from 'schemas/loginSchema';

const initialValues = {
  email: 'demo-user@gmail.com',
  password: 'demoUSER-123',
};

export const LoginForm = ({ isLoading }) => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,

    onSubmit: async () => {
      dispatch(login(values));
    },
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mb: '24px', width: '100%', maxWidth: '500px' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            mb: '24px',
            minWidth: '100%',
          }}
        >
          <TextField
            variant="outlined"
            label="Email"
            autoComplete="false"
            id="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            sx={{ maxWidth: '100%', flex: '1 0 auto' }}
          />

          <TextField
            variant="outlined"
            label="Password"
            autoComplete="false"
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
            sx={{ maxWidth: '100%', flex: '1 0 auto' }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{ p: '8px 16px', width: '100%', textTransform: 'none', fontSize: '18px' }}
        >
          Login
        </Button>
      </Box>
    </>
  );
};
