import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './common/Container/Container';
import { Header } from './common/Header/Header';

export const Layout = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading page...</div>}>
        <Header></Header>
        <Outlet />
      </Suspense>
    </Container>
  );
};
