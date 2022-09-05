import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from './redux/authentication/operations';
import { PrivateRoutes } from 'routes/PrivateRoutes';
import { PublicRoutes } from 'routes/PublicRoutes';
import { Layout } from './Layout/Layout';
import { LogInPage } from './pages/LogInPage/LogInPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

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
      <ToastContainer autoClose={3000} />
    </>
  );
}
