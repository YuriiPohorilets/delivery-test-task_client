// import { useSelector } from 'react-redux';
// import { selectProducts } from 'redux/shops/selectors';
import { List } from '@mui/material';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';

export const ProductsList = () => {
  // const products = useSelector(selectProducts);
  const products = [
    {
      _id: '1',
      name: 'Burger',
      price: 150,
      Kcal: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '2',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '3',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '4',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '5',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '6',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '7',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '8',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '9',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
    {
      _id: '10',
      name: 'Burger',
      price: 150,
      description: '',
      imgUrl:
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
      owner: '',
    },
  ];

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
      {products.map(product => (
        <ProductsItem key={product._id} product={product} />
      ))}
    </List>
  );
};
