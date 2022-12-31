import Img from "../../../atom/Img/Img";
import search from "../../../assets/search.svg";
import logo from "../../../assets/logo.svg";
import iconShoppingCart from "../../../assets/iconShoppingCart.svg";
import iconUser from "../../../assets/iconUser.svg";

import {
  Center,
  Container,
  ImgText,
  Left,
  Right,
  RightList,
  Wrapper,
} from "./Navbar.style";
import Input from "../../../atom/input/Input";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Input isInput={false} placeholder={"상품을 검색해보세요!"} />
          <Img imgSrc={search} width="28px" height="28px" />
        </Left>
        <Center>
          <Img imgSrc={logo} />
        </Center>
        <Right>
          <RightList>
            <Img imgSrc={iconShoppingCart} width="32px" height="32px" />
            <ImgText>장바구니</ImgText>
          </RightList>
          <RightList>
            <Img imgSrc={iconUser} width="32px" height="32px" />
            <ImgText>마이페이지</ImgText>
          </RightList>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
