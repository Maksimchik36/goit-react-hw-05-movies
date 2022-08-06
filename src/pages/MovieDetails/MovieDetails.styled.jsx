import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const WrapperMovieDetailsSt = styled.div`
padding: 20px;
`;

export const NavLinkSt = styled(NavLink)`
display: block;
font-size: 15px;
font-weight: 500;
color: black;

  &.active {
    color: #0a4dfb;
  }
`