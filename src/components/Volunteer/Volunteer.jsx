import React, { Component } from "react";
import styled from "styled-components";

import Banner from "../Banner/Banner";
import Detail from "./Detail/Detail";
import Form from "./Form/Form";
class Volunteer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Banner page="Volunteer" />
        <Main>
          <Detail />
          <Form />
        </Main>
      </React.Fragment>
    );
  }
}

export default Volunteer;

const Main = styled.main`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;
