import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Shops } from 'pages/Shops';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/shops" element={<Shops />}>
          <Route path="/shops/:shopId" element={<ProductsList />} />
        </Route>

        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
