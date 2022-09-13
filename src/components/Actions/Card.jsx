import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { AiOutlineFileSearch } from "react-icons/ai";

const Card = ({ text, title, bg, gr, wh, or }) => {
  return (
    <Container bg={bg}>
      <Top>
        <Icon />
        <h3>{title}</h3>
      </Top>
      <span>{text}</span>
      <Button text="Discover Projects" gr={gr} wh or={or} />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  min-height: 380px;
  width: 350px;
  background-color: ${({ bg }) => (bg ? "var(--main-black)" : "var(--orange)")};
  padding: 30px;
  margin: 20px 30px;
  border-radius: 5px;

  span {
    color: var(--secondary-white);
    display: inline-block;
    margin-bottom: 30px;
    font-size: 18px;
  }
`;

const Top = styled.div`
  color: var(--white);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 30px;
  }
`;

const Icon = styled(AiOutlineFileSearch)`
  font-size: 50px;
  margin-right: 10px;
`;
