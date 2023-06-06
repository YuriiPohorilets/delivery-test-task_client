import { useSelector } from 'react-redux';
import { List, Typography } from '@mui/material';
import { selectCart } from 'redux/cart/selectors';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { list } from './orderListStyles';

export const OrderList = () => {
  const { cart } = useSelector(selectCart);

  return (
    <>
      {cart.length !== 0 ? (
        <List sx={list}>
          {cart.map(product => (
            <OrderItem key={product._id} product={product} />
          ))}
        </List>
      ) : (
        <Typography sx={{ fontSize: '32px', flex: '1 0 auto', color: 'primary.darker' }}>
          Your cart is empty!
        </Typography>
      )}
    </>
  );
};
