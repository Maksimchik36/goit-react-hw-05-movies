import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutSt = styled.div`
padding: 20px;
`;

export const NavWrap = styled.nav`
padding: 20px;
background-color: #d9afd1;
`;

export const NavLinkSt = styled(NavLink)`
font-size: 25px;
font-weight: 700;
color: black;

  &.active {
    color: #83faec;
  }
`