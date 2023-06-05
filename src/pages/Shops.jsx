import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { getShops } from 'redux/shops/operations';
import { SideBar } from 'components/SideBar/SideBar';

export const Shops = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', gap: '36px' }}>
      <SideBar />

      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};
