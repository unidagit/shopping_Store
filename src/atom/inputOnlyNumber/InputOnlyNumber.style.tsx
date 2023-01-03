import styled from "styled-components";
import { InputNumberProps } from "./InputOnlyNumber";

export const InputOnlyNumberStyled = styled.input<InputNumberProps>`
  width: 100%;
  border: none;
  padding: 16px 17px;
`;

export const InputOnlyNumberBox = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  border: 1px solid ${(props) => props.theme.black.lighter};
  border-radius: 5px;

  & > span {
    display: block;
    height: 54px;
    color: ${(props) => props.theme.white.default};
    background-color: ${(props) => props.theme.black.lighter};
    text-align: center;
    padding: 19px;
  }
`;
