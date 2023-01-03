import styled from "styled-components";
import { LabelProps } from "./Label";

export const LabelStyled = styled.label<LabelProps>`
  color: ${(props) => props.theme.black.darker};
  font-weight: 400;
  font-size: 1rem;
`;

export const LabelText = styled.p`
  margin-bottom: 10px;
`;
