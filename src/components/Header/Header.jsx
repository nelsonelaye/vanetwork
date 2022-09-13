import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
// import logo from ""

const Header = ({ bg, tx, fx }) => {
  return (
    <Container bg={bg} tx={tx} fx={fx}>
      <img src="/assets/logo-2.png" alt="vanetwork logo" />
      <Nav />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  position: ${({ fx }) => (fx ? "fixed" : "initial")};
  height: 90px;
  background-color: ${({ bg }) => (bg ? "var(--main-black)" : "var(--white)")};
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  color: ${({ tx }) => (tx ? "var(--main-black)" : "var(--white)")};
`;
