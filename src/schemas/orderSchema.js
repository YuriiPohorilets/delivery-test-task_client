import * as Yup from 'yup';

const phonePattern = /^380\d{9}$/;

export const orderSchema = Yup.object().shape({
  email: Yup.string().email('enter a valid email').required('email is required'),
  name: Yup.string().min(2).max(64).required('name is required'),
  phone: Yup.string()
    .matches(phonePattern, { message: 'phone format must be: 380998887766' })
    .required('phone is required'),
  address: Yup.string().min(2).required('address is required'),
});
