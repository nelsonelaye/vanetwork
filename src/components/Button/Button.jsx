import React from "react";
import styled from "styled-components";

const Button = ({ text, gr, wh, or }) => {
  return (
    <Btn gr={gr} wh={wh} or={or}>
      {text}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  background-color: ${({ gr }) => (gr ? "var(--main-black)" : "var(--orange)")};
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  padding: 15px 50px;
  outline: none;
  border-radius: 1px;
  border: 0;
  cursor: pointer;
  transition: all 500ms ease-in;

  :hover {
    background-color: ${({ wh }) =>
      wh ? "var(--white)" : "var(--main-black)"};
    color: ${({ or }) => (or ? "var(--orange)" : "var(--main-black)")};
  }
`;
