import { fetchCurrentUser } from './redux/auth/auth-operations';
import { Wrapper } from './App.styled';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import AppBar from './components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
const HomeView = lazy(() => import('./views/Homeview/HomeView'));
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
          <AppBar />

          <Suspense
            fallback={
              <p>
                <CircularProgress disableShrink />
              </p>
            }
          >
            <Routes>
              <Route
                path="register"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />

              <Route path="/" element={<HomeView />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Toaster />
          </Suspense>
        </>
      )}
    </Wrapper>
  );
}
