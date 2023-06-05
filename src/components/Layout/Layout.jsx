import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Container>
        <Wrapper>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Wrapper>
      </Container>
    </>
  );
};
