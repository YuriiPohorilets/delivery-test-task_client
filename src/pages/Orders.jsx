import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { OrderList } from 'components/OrderList/OrderList';
import { OrderMenu } from 'components/OrderMenu/OrderMenu';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/order/selectors';

export const Orders = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}

      <Box
        sx={{
          display: 'flex',
          gap: '36px',
          justifyContent: { xs: 'center', md: 'space-between' },
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        <OrderList />
        <OrderMenu isLoading={isLoading} />
      </Box>
    </>
  );
};
