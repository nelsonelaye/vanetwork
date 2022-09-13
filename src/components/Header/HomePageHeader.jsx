import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
// import logo from ""

const HomePageHeader = ({ sc }) => {
  return (
    <Container sc={sc}>
      <img src="/assets/logo-2.png" alt="vanetwork logo" />
      <Nav />
    </Container>
  );
};

export default HomePageHeader;

const Container = styled.div`
  width: 100%;
  position: fixed;
  height: 90px;
  background-color: ${({ sc }) => (sc ? "var(--main-black)" : "transparent")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  color: var(--white);
  z-index: 100;
`;
