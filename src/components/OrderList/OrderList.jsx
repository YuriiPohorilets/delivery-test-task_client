import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import { selectCart } from 'redux/cart/selectors';
import { OrderItem } from 'components/OrderItem/OrderItem';

export const OrderList = () => {
  const { cart } = useSelector(selectCart);

  return (
    <List
      sx={{
        p: 0,
        flex: '1 0 auto',
        display: 'flex',
        maxWidth: '834px',
        flexWrap: 'wrap',
        gap: '16px',
        maxHeight: '610px',
        overflowY: 'auto',
      }}
    >
      {cart.map(product => (
        <OrderItem key={product._id} product={product} />
      ))}
    </List>
  );
};
