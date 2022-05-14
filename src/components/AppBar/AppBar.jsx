import { Header } from './AppBar.styled';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  return <Header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Header>;
}
