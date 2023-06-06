import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';
import { Shops } from 'pages/Shops';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Products } from 'pages/Products';
import { Home } from 'pages/Home';
import { ShopPlaceholder } from 'components/ShopPlaceholder/ShopPlaceholder';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Orders } from 'pages/Orders';
import { PrivateRoute } from 'components/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={<RestrictedRoute component={Register} redirectTo="/shops" />}
        />
        <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/shops" />} />

        <Route path="/orders" element={<PrivateRoute component={Orders} redirectTo="/shops" />} />

        <Route path="/shops" element={<Shops />}>
          <Route index element={<ShopPlaceholder />} />
          <Route path="/shops/:shopId" element={<Products />} />
        </Route>

        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
