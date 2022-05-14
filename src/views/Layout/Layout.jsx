import { Outlet } from 'react-router-dom';
import AppBar from '../../components/AppBar/AppBar';
import HomeView from 'views/Homeview/HomeView';
export default function Layout() {
  return (
    <div>
      <AppBar />
      <HomeView />
      <Outlet />
    </div>
  );
}
