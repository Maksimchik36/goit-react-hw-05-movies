import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderSt = styled.div`
padding: 20px;
`;

export const NavWrapSt = styled.nav`
padding: 20px;
background-color: #d9afd1;
`;

export const NavLinkSt = styled(NavLink)`
font-size: 25px;
font-weight: 700;
color: black;
text-decoration: none;

  &.active {
    color: #83faec;
  }
`