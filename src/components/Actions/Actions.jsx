import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Actions = () => {
  return (
    <Container>
      <h2>Make a difference today</h2>
      <DoubleHold>
        <Card
          bg
          wh
          or
          title="Become a Volunteer"
          text="Lorem ipsum is simply free text available amet, consectetuer adipiscing
      elit. There are not many passages of ipsum."
        />
        <Card
          gr
          title="Start a Project"
          text="Lorem ipsum is simply free text available amet, consectetuer adipiscing
      elit. There are not many passages of ipsum."
        />
      </DoubleHold>
    </Container>
  );
};

export default Actions;

const Container = styled.div`
  height: 100%;
  margin: 80px 0;
  h2 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;
const DoubleHold = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
