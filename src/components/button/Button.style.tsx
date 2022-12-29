import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 5px;

  ${(props) => props.size && SIZES[props.size]}
  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.color && COLOR[props.color]}
`;

const SIZES = {
  l: css`
    font-size: 1.5rem;
    font-weight: 700;
    width: 220px;
    height: 68px;
  `,
  m: css`
    font-size: 1.125rem;
    font-weight: 700;
    width: 480px;
    height: 60px;
  `,
  ms: css`
    font-size: 1rem;
    font-weight: 500;
    width: 168px;
    height: 54px;
  `,
  s: css`
    font-size: 1rem;
    font-weight: 500;
    width: 80px;
    height: 40px;
  `,
  tabActiv: css`
    font-size: 1.125rem;
    font-weight: 700;
    width: 320px;
    height: 60px;
  `,
  tabMenu: css`
    font-size: 1rem;
    font-weight: 00;
    width: 250px;
    height: 50px;
  `,
};

const COLOR = {
  blue: css`
    color: ${(props) => props.theme.white.default};
    background: ${(props) => props.theme.blue.default};
    &:active,
    &:hover,
    &:focus {
      color: ${(props) => props.theme.white.default};
      background: ${(props) => props.theme.blue.darker};
    }

    &:disabled {
      opacity: 0.4;
      color: ${(props) => props.theme.white.default};
      background: ${(props) => props.theme.blue.darker};
      cursor: not-allowed;
    }
  `,
  whiteTab: css`
    color: ${(props) => props.theme.blue.default};
    background: ${(props) => props.theme.white.default};
    /* border-bottom: 3px solid; */
  `,
  whiteBtn: css`
    color: ${(props) => props.theme.black.darker};
    border: 1px solid ${(props) => props.theme.black.lighter};
    background: ${(props) => props.theme.white.default};

    &:active,
    &:hover,
    &:focus {
      color: ${(props) => props.theme.black.default};
      border: 1px solid ${(props) => props.theme.black.darker};
      background: ${(props) => props.theme.white.default};
    }
  `,
  gray: css`
    color: ${(props) => props.theme.white.default};
    background: ${(props) => props.theme.black.darker};

    &:active,
    &:hover,
    &:focus {
      color: ${(props) => props.theme.black.darker};
      border: 1px solid ${(props) => props.theme.black.lighter};
      background: ${(props) => props.theme.white.default};
    }
  `,
  tabActiv: css`
    //밑줄 추가해야함
    color: ${(props) => props.theme.blue.default};
    background: ${(props) => props.theme.white.default};

    &:active,
    &:focus {
      color: ${(props) => props.theme.blue.default};
      background: ${(props) => props.theme.white.default};
    }

    &:disabled {
      color: ${(props) => props.theme.black.darker};
      background: ${(props) => props.theme.white.default};
    }
  `,
  tabMenu: css`
    text-align: left;
    padding: 15px 20px;
    color: ${(props) => props.theme.black.default};
    background: ${(props) => props.theme.white.default};

    &:hover {
      color: ${(props) => props.theme.black.default};
      background: ${(props) => props.theme.blue.lighter};
    }

    &:active,
    &:focus {
      color: ${(props) => props.theme.white.default};
      background: ${(props) => props.theme.blue.default};
    }
  `,
};
