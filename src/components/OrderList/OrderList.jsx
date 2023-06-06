import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import { selectCart } from 'redux/cart/selectors';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { list } from './orderListStyles';

export const OrderList = () => {
  const { cart } = useSelector(selectCart);

  return (
    <List sx={list}>
      {cart.map(product => (
        <OrderItem key={product._id} product={product} />
      ))}
    </List>
  );
};
