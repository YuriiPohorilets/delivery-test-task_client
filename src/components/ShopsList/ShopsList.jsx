import { useSelector } from 'react-redux';
import { selectShops } from 'redux/shops/selectors';
import { List } from '@mui/material';
import { ShopsItem } from 'components/ShopsItem/ShopsItem';
import { list } from './shopsListStyles';

export const ShopsList = () => {
  const shops = useSelector(selectShops);

  return (
    <List sx={list}>
      {shops.map(shop => (
        <ShopsItem key={shop._id} shop={shop} />
      ))}
    </List>
  );
};
