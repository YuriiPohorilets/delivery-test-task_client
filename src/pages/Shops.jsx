import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { SideBar } from 'components/SideBar/SideBar';
import { Loader } from 'components/Loader/Loader';
import { getShops } from 'redux/shops/operations';
import { selectIsLoading } from 'redux/shops/selectors';

export const Shops = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}

      <Box sx={{ display: 'flex', gap: '36px', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        <SideBar />

        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
