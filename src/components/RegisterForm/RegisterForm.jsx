import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Box, TextField, Button } from '@mui/material';
import { register } from 'redux/auth/operations';
import { registerSchema } from 'schemas/registerSchema';
import { form, inputWrapper, input, button } from 'shared/commonStyles';

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
            sx={input}
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
            sx={input}
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
            sx={input}
          />
        </Box>

        <Button type="submit" variant="contained" disabled={isLoading} sx={button}>
          Register
        </Button>
      </Box>
    </>
  );
};
