import { useSelector } from 'react-redux';
import { selectShops } from 'redux/shops/selectors';
import { List } from '@mui/material';
import { ShopsItem } from 'components/ShopsItem/ShopsItem';

export const ShopsList = () => {
  const shops = useSelector(selectShops);

  return (
    <List>
      {shops.map(({ _id, name, location, imgUrl }) => (
        <ShopsItem key={_id} name={name} location={location} imgUrl={imgUrl} id={_id} />
      ))}
    </List>
  );
};
