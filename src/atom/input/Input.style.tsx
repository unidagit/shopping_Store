import styled from "styled-components";
import { InputProps } from "./Input";

export const InputStyled = styled.input<InputProps>`
  width: 100%;
  height: 54px;
  border: 1px solid ${(props) => props.theme.black.lighter};
  border-radius: 5px;
  padding: 16px 17px;
  font-size: 1rem;
`;

export const InputStyledSearch = styled.input<InputProps>`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
`;
