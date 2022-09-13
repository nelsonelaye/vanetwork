import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <img src="/assets/volunteers.jpg" alt="volunteers" />
      <div style={{ color: "var(--main-grey)" }}>
        <h3 style={{ color: "var(--main-black)", fontSize: "25px" }}>
          Requirements
        </h3>
        <span style={{ fontSize: "18px" }}>
          Aliquam hendrerit a augue insu image pellentes que id erat quis
          sollicitud null mattis Ipsum is simply dummy typesetting industry.
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in meifn pericula euripidis.
        </span>
      </div>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  flex: 5;
  //   width: 42.5%;
  margin-right: 2%;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
`;
