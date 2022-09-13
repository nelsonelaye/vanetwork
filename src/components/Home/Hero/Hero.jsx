import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
const Hero = () => {
  return (
    <Container>
      <Bg></Bg>
      <div>
        <span>Africa's #1 network of volunteers and NGOs</span>
        <h1>
          Contribute to positive <br />
          social-economic cause today
        </h1>
        <Button text="Find Projects" wh or />
      </div>
    </Container>
  );
};

export default Hero;

const Bg = styled.div`

 
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(30, 55, 55, .75);
  }

`;
const Container = styled.div`
  background-image: url("/assets/volunteers.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--main-black);
  min-height: 100vh;
  height: 100%;
  width: 100%;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  // ::after {
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   background-color: rgba(110, 122, 122, 0.3);
  // }

  div {
    width: 1200px;
    padding-top: 180px;
    z-index: 10;

    span {
      font-size: 17px;
      letter-spacing: 0.05em;
      font-weight: 600;
      z-index: 10;
      background-color: rgba(110, 122, 122, 0.25);
      padding: 5px 15px;
    }
    h1 {
      font-size: 80px;
      line-height: 90px;
      font-weight: 800;
      margin-top: 10px;
      z-index: 10;
    }
  }
`;
