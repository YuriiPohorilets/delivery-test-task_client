import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from 'redux/shops/operations';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Products = () => {
  const dispatch = useDispatch();
  const { shopId } = useParams();

  useEffect(() => {
    dispatch(getProducts(shopId));
  }, [dispatch, shopId]);

  return <ProductsList />;
};
