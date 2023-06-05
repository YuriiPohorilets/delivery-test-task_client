import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from 'redux/shops/selectors';
import { getProducts } from 'redux/shops/operations';

export const Products = () => {
  const dispatch = useDispatch();
  const { shopId } = useParams();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts(shopId));
  }, [dispatch, shopId]);

  console.log(products);

  return <div>Products page</div>;
};
