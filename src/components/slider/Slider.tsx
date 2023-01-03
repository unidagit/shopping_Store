import { Arrow, Container, ImgContainer, Slide, Wrapper } from "./Slider.style";
import arrowLeft from "../../../src/assets/arrowLeft.svg";
import arrowRight from "../../../src/assets/arrowRight.svg";
import banner1 from "../../../src/assets/banner1.jpg";
import Img from "../../atom/Img/Img";

function Slider() {
  return (
    <Container>
      <Arrow>
        <Img imgSrc={arrowLeft} />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Img imgSrc={banner1} />
          </ImgContainer>
        </Slide>
      </Wrapper>
      <Arrow>
        <Img imgSrc={arrowRight} />
      </Arrow>
    </Container>
  );
}

export default Slider;
