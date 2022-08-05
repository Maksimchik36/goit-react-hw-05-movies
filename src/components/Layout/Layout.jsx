import { Outlet } from 'react-router-dom';
import { LayoutSt, NavLinkSt, NavWrapSt } from './Layout.styled';

const Layout = () => {
  return <LayoutSt>
    <NavWrapSt>
      <NavLinkSt to="/" style={{ marginRight: "20px", textDecoration: "none"}}>HOME</NavLinkSt>
      <NavLinkSt to="/movies" style={{ textDecoration: "none"}}>MOVIES</NavLinkSt>
    </NavWrapSt>
    <Outlet />
  </LayoutSt>
}

export default Layout;