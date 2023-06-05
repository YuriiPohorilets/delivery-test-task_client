import { useSelector } from 'react-redux';
import { selectCart } from 'redux/cart/selectors';
import { OrderItem } from 'components/OrderItem/OrderItem';

export const OrderList = () => {
  const { cart } = useSelector(selectCart);

  return (
    <div>
      {cart.map(product => (
        <OrderItem key={product._id} product={product} />
      ))}
    </div>
  );
};
