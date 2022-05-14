import { fetchCurrentUser } from './redux/auth/auth-operations';
import { Wrapper } from './App.styled';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import { Toaster } from 'react-hot-toast';
const Layout = lazy(() => import('views/Layout/Layout'));
const Errorview = lazy(() => import('./views/Errorview/Errorview'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(state => state.isFetchingCurrent);
  return (
    <Wrapper>
      {isFetchingCurrentUser ? (
        <h1>Show React Skeleton</h1>
      ) : (
        <>
          <Suspense
            fallback={
              <p>
                <CircularProgress disableShrink />
              </p>
            }
          >
            <Routes>
              <Route path="*" element={<Errorview />} />
              <Route path="/" element={<Layout />}>
                <Route
                  path="register"
                  element={<PublicRoute component={RegisterView} restricted />}
                />
                <Route
                  path="login"
                  element={<PublicRoute component={LoginView} restricted />}
                />
                <Route
                  path="404"
                  element={<PublicRoute component={Errorview} />}
                />

                <Route
                  path="contacts"
                  element={<PrivateRoute component={ContactsView} />}
                />
              </Route>
            </Routes>
            <Toaster />
          </Suspense>
        </>
      )}
    </Wrapper>
  );
}
