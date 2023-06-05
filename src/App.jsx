import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Products } from 'pages/Products';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />

        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
