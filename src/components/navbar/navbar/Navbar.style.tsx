import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
  background-color: ${(props) => props.theme.black.lighter};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 22px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 22px;
  height: 46px;
  flex: 1;
  border: 2px solid ${(props) => props.theme.blue.default};
  background-color: ${(props) => props.theme.white.default};
  border-radius: 50px;
`;

export const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const Right = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const RightList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 26px;
`;

export const ImgText = styled.p`
  color: ${(props) => props.theme.black.darker};
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 4px;
`;
