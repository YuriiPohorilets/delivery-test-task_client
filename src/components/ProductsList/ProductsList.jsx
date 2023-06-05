// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductsList = () => {
  // const [products, setProducts] = useState([]);
  const { shopId } = useParams();

  // useEffect(() => {}, [shopId]);

  return (
    <>
      <div>{shopId}</div>
    </>
  );
};
