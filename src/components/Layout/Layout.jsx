import { Link, Outlet } from 'react-router-dom';
import { LayoutSt } from './Layout.styled';

const Layout = () => {
  return <LayoutSt>
    <nav>
      <Link to="/" style={{ "marginRight": "20px"}}>Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
    <Outlet />
  </LayoutSt>
}

export default Layout;