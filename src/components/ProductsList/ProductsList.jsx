import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/shops/selectors';
import { ToastContainer } from 'react-toastify';
import { List } from '@mui/material';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import { list } from './productsListStyles';

export const ProductsList = () => {
  const products = useSelector(selectProducts);

  return (
    <List sx={list}>
      {products.map(product => (
        <ProductsItem key={product._id} product={product} />
      ))}

      <ToastContainer />
    </List>
  );
};
