import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/authentication/operations';
import { PrivateRoutes } from 'hocs/PrivateRoutes';
import { PublicRoutes } from 'hocs/PublicRoutes';
import { Layout } from './layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogInPage = lazy(() => import('./pages/LogInPage/LogInPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="contacts" />} />
          <Route element={<PublicRoutes />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LogInPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={4000} />
    </>
  );
}
