import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('enter a valid email').required('email is required'),
  password: Yup.string().required('password is required'),
});
