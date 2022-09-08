import { Outlet } from 'react-router-dom';
import { Container } from './common/Container/Container';
import { Header } from './common/Header/Header';

export const Layout = () => {
  return (
    <Container>
      <Header></Header>
      <Outlet />
    </Container>
  );
};
