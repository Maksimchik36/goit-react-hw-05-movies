import { Outlet } from 'react-router-dom';
import { LayoutSt, NavLinkSt, NavWrap } from './Layout.styled';

const Layout = () => {
  return <LayoutSt>
    <NavWrap>
      <NavLinkSt to="/" style={{ marginRight: "20px", textDecoration: "none"}}>HOME</NavLinkSt>
      <NavLinkSt to="/movies" style={{ textDecoration: "none"}}>MOVIES</NavLinkSt>
    </NavWrap>
    <Outlet />
  </LayoutSt>
}

export default Layout;