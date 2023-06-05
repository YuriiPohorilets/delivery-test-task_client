import { useSelector } from 'react-redux';
import { selectShops } from 'redux/shops/selectors';
import { List } from '@mui/material';
import { ShopsItem } from 'components/ShopsItem/ShopsItem';

export const ShopsList = () => {
  const shops = useSelector(selectShops);

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'center',
        p: '16px',
        bgcolor: 'primary.main',
        borderRadius: '8px',
        boxShadow: 3,
        maxHeight: '610px',
        overflowY: 'auto',
      }}
    >
      {shops.map(({ _id, name, location, imgUrl }) => (
        <ShopsItem key={_id} name={name} location={location} imgUrl={imgUrl} id={_id} />
      ))}
    </List>
  );
};
