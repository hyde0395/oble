import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FarBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000ox) / 2);
  z-index: 10;
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }

  `;
export const Bars = styled(FarBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    postition: adsolute;
    top: 0;
    right: 0;
    transform: ;
  }
`;
