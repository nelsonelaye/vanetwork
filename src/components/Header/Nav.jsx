import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <Container>
      <Navs>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/volunteer">Volunteer</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/ngo">NGO</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/about">About</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/contact">Contact</NavigationLink>
        </li>
      </Navs>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: inherit;
`;

const Navs = styled.ul`
  text-decoration: none;
  list-style-type: none;
  display: flex;

  li {
    margin: 0 15px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 500ms ease;

    :hover {
      ::before {
        content: "";

        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background-color: var(--main-grey);
        bottom: 5px;
      }
    }
  }
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: var(--orange);
    ::before {
      content: "";
      color: white;
      position: absolute;
      width: 100%;
      height: 6px;
      border-radius: 10px;
      background-color: var(--main-grey);
      bottom: 5px;
      left: 0;
    }
  }
`;
