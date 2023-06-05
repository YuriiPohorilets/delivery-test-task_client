import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Box, TextField, Button } from '@mui/material';
import { register } from 'redux/auth/operations';
import { registerSchema } from 'schemas/registerSchema';

const initialValues = {
  email: '',
  password: '',
  name: '',
  phone: '',
  address: '',
};

export const RegisterForm = ({ isLoading }) => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: async () => {
      dispatch(register(values));
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

          <TextField
            variant="outlined"
            label="Name"
            autoComplete="false"
            id="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
            sx={{ maxWidth: '100%', flex: '1 0 auto' }}
          />

          <TextField
            variant="outlined"
            label="Phone"
            autoComplete="false"
            id="phone"
            type="text"
            value={values.phone}
            onChange={handleChange}
            error={touched.phone && !!errors.phone}
            helperText={touched.phone && errors.phone}
            sx={{ maxWidth: '100%', flex: '1 0 auto' }}
          />

          <TextField
            variant="outlined"
            label="Address"
            autoComplete="false"
            id="address"
            type="text"
            value={values.address}
            onChange={handleChange}
            error={touched.address && !!errors.address}
            helperText={touched.address && errors.address}
            sx={{ maxWidth: '100%', flex: '1 0 auto' }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{ p: '8px 16px', width: '100%', textTransform: 'none', fontSize: '18px' }}
        >
          Register
        </Button>
      </Box>
    </>
  );
};
