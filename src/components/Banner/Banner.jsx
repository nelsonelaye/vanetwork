import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Banner = ({ page }) => {
  return (
    <Container>
      <div>
        <NavigationLink to="/">Home</NavigationLink> / <span>{page}</span>
      </div>
      <h2>Volunteer</h2>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  //   align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  padding: 30px;
  padding-top: 100px;
  background-color: var(--main-black);

  div {
    color: var(--white);
    font-weight: 600;
    font-size: 16px;
    opacity: 0.6;
  }

  h2 {
    color: var(--white);
    margin-top: 10px;
    font-size: 40px;
  }
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 500ms ease;
  :hover {
    color: var(--orange);
  }
`;
