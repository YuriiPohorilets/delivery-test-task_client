import { Box } from '@mui/material';
import { OrderList } from 'components/OrderList/OrderList';
import { OrderMenu } from 'components/OrderMenu/OrderMenu';

export const Orders = () => {
  return (
    <Box sx={{ display: 'flex', gap: '36px' }}>
      <OrderList />
      <OrderMenu />
    </Box>
  );
};
