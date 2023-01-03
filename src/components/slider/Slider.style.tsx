import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.black.darker};
  overflow: hidden;
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: inherit;
  margin: 0 30px;
  background-color: ${(props) => props.theme.blue.lighter};
  cursor: pointer;
`;

export const Wrapper = styled.div`
  height: 100%;
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  height: 100%;
`;
