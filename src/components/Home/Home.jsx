import React, { Component } from "react";
import Hero from "./Hero/Hero";
import DoubleActions from "../Actions/Actions";
import styled from "styled-components";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Hero />
        <DoubleActions />
      </Container>
    );
  }
}

export default Home;

const Container = styled.div``;
