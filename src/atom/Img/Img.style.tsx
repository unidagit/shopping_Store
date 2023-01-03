import styled from "styled-components";
import { ImgProps } from "./Img";

export const ImgStyled = styled.img<ImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
`;
