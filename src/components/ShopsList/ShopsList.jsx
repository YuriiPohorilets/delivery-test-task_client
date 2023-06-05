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
        gap: '16px',
        alignItems: 'center',
        p: '16px',
        bgcolor: 'secondary.main',
        borderRadius: '8px',
        boxShadow: 3,
        maxHeight: '610px',
        overflowY: 'auto',
      }}
    >
      {shops.map(shop => (
        <ShopsItem key={shop._id} shop={shop} />
      ))}
    </List>
  );
};
