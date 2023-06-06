import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Box, Typography, Divider, TextField, Button } from '@mui/material';
import { selectCart } from 'redux/cart/selectors';
import { createOrder } from 'redux/order/operations';
import { orderSchema } from 'schemas/orderSchema';
import { form, inputWrapper, input, button } from 'shared/commonStyles';

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

      resetForm();
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
    <Box
      sx={{
        p: '16px',
        maxHeight: '610px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        flex: '1 0 auto',

        bgcolor: 'secondary.main',
        borderRadius: '8px',
        boxShadow: 2,

        overflowY: 'auto',
      }}
    >
      <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>Make an order</Typography>

      <Box sx={{ width: '100%' }}>
        <Typography sx={{ fontWeight: 700, fontSize: '18px', mb: '8px' }}>Your order:</Typography>

        <Box component="ul" sx={{ mb: '16px' }}>
          {cart.map(({ _id, name, price, quantity, owner }) => (
            <Box
              component="li"
              key={_id}
              sx={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ flex: '1 0 auto' }}>{name}:</Typography>

              <Box
                sx={{ display: 'flex', gap: '16px', flex: '1 0 160px', justifyContent: 'flex-end' }}
              >
                <Typography sx={{ width: '80px', textAlign: 'right' }}>x{quantity}</Typography>
                <Typography sx={{ width: '80px', textAlign: 'right' }}>
                  {quantity * price} UAH
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Divider />

        <Box sx={{ my: '16px', display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
          <Typography sx={{ fontSize: '18px', color: 'primary.darker', fontWeight: 700 }}>
            Amount:
          </Typography>

          <Typography sx={{ fontSize: '18px', color: 'primary.darker', fontWeight: 700 }}>
            {amount} UAH
          </Typography>
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
    </Box>
  );
};
