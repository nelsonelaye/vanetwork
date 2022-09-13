import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
class Form extends Component {
  state = {};
  render() {
    return (
      <FormHold>
        <input placeholder="First Name" type="text" required />
        <input placeholder="Last Name" type="text" required />
        <input placeholder="Phone Number" type="text" required />
        <input placeholder="Email Address" type="email" required />
        <input placeholder="Occupation" type="text" required />
        <input placeholder="Bio" type="text" />
        <input placeholder="Password" type="password" required />
        <Button text="Submit" type="submit" />
      </FormHold>
    );
  }
}

export default Form;

const FormHold = styled.form`
  flex: 5;

  padding: auto;
  margin-left: 2%;

  input {
    width: 100%;
    outline: none;
    border: 0;
    border-radius: 3px;
    height: 60px;
    background-color: var(--secondary-white);
    padding: 1px 30px;
    margin-bottom: 20px;
    ::placeholder {
      color: var(--main-black);
      font-size: 14px;
    }
  }
`;
