import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Box, TextField, Button } from '@mui/material';
import { login } from 'redux/auth/operations';
import { loginSchema } from 'schemas/loginSchema';
import { form, inputWrapper, input, button } from 'shared/commonStyles';

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
    <Box component="form" onSubmit={handleSubmit} sx={form}>
      <Box sx={inputWrapper}>
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
          sx={input}
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
          sx={input}
        />
      </Box>

      <Button type="submit" variant="contained" disabled={isLoading} sx={button}>
        Login
      </Button>
    </Box>
  );
};
