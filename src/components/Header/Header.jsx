import { HeaderSt, NavLinkSt, NavWrapSt } from './Header.styled';

const Header = () => {
  return <HeaderSt>
    <NavWrapSt>
      <NavLinkSt to="/" style={{ marginRight: "20px"}}>HOME</NavLinkSt>
      <NavLinkSt to="/movies">MOVIES</NavLinkSt>
    </NavWrapSt>
  </HeaderSt>
}

export default Header;