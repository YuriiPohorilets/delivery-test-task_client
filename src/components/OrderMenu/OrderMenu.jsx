import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Box, Typography, Divider, TextField, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { selectCart } from 'redux/cart/selectors';
import { createOrder } from 'redux/order/operations';
import { clearCart } from 'redux/cart/slice';
import { orderSchema } from 'schemas/orderSchema';
import 'react-toastify/dist/ReactToastify.css';
import { form, inputWrapper, input, button } from 'shared/commonStyles';
import {
  wrapper,
  title,
  subtitle,
  orderList,
  orderItem,
  orderName,
  content,
  contentText,
  valueWrapper,
  value,
} from './orderMenuStyles';

export const OrderMenu = ({ isLoading }) => {
  const [amount, setAmount] = useState(0);
  const { cart } = useSelector(selectCart);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  const { handleSubmit, handleChange, resetForm, values, touched, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: orderSchema,

    onSubmit: async () => {
      dispatch(
        createOrder({
          ...values,
          products: cart,
          amount,
          shopId: '647e183b4bc4350dd1e9253d',
        })
      );

      dispatch(clearCart());
      resetForm();
      toast.success('Your order is on way to you!');
    },
  });

  const countAmount = products => {
    return products.reduce(
      (totalAmount, product) => totalAmount + product.price * product.quantity,
      0
    );
  };

  useEffect(() => {
    setAmount(countAmount(cart));
  }, [cart]);

  return (
    <Box sx={wrapper}>
      <Typography sx={title}>Make an order</Typography>

      <Box sx={{ width: '100%' }}>
        <Typography sx={subtitle}>Your order:</Typography>

        <Box component="ul" sx={orderList}>
          {cart.map(({ _id, name, price, quantity }) => (
            <Box component="li" key={_id} sx={orderItem}>
              <Typography sx={orderName}>{name}:</Typography>

              <Box sx={content}>
                <Typography sx={contentText}>x{quantity}</Typography>
                <Typography sx={contentText}>{quantity * price} UAH</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Divider />

        <Box sx={valueWrapper}>
          <Typography sx={value}>Amount:</Typography>

          <Typography sx={value}>{amount} UAH</Typography>
        </Box>

        <Divider />
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ ...form, m: 0 }}>
        <Box sx={{ ...inputWrapper, gap: '8px' }}>
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
            label="Phone"
            autoComplete="false"
            id="phone"
            type="phone"
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
            type="address"
            value={values.address}
            onChange={handleChange}
            error={touched.address && !!errors.address}
            helperText={touched.address && errors.address}
            sx={input}
          />
        </Box>

        <Button
          type="submit"
          disabled={isLoading || cart.length === 0}
          variant="contained"
          sx={button}
        >
          Order
        </Button>
      </Box>

      <ToastContainer />
    </Box>
  );
};
