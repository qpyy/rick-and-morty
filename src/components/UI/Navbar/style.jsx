import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
  background-color: #fff;
  box-shadow: -1px 2px 14px 4px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: -1px 2px 14px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -1px 2px 14px 4px rgba(0, 0, 0, 0.1);

  a {
    font-family: Karla;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }

  ul {
    z-index: 1;
    display: flex;
    background-color: #fff;
    list-style: none;
    margin: 0;
    padding: 0;

    &.open {
      display: flex;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;

    a {
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
    }

    ul {
      display: none;
      position: absolute;
      top: 60px;
      right: 0;
      left: 0;
      bottom: 0;
      flex-direction: column;
      min-width: 100%;
      min-height: 120vh;
      margin-bottom: 0.25rem;

      box-shadow: -1px 7px 14px 4px rgba(0, 0, 0, 0.1) inset;
      -webkit-box-shadow: -1px 7px 14px 4px rgba(0, 0, 0, 0.1) inset;
      -moz-box-shadow: -1px 7px 14px 4px rgba(0, 0, 0, 0.1) inset;
    }

    ul li {
      text-align: center;
      padding-top: 40px;
      width: 100%;
    }
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  padding: 0.5rem;

  &:visited {
    color: #000000;
  }

  &.active {
    color: #02afc5;
  }

  &:hover {
    color: #000000b3;
  }
`;

const StyledImage = styled.img`
  width: 46px;
  height: 49px;

  @media (max-width: 480px) {
    margin-left: 10%;
  }
`;

const StyledMenu = styled.img`
  display: none;
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
  width: 2.25rem;
  height: 2.25rem;

  @media (max-width: 480px) {
    display: flex;
    margin-right: 10%;
  }
`;

export { StyledNavbar, StyledLink, StyledImage, StyledMenu };
