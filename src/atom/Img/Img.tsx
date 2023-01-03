import { ImgStyled } from "./Img.style";

export interface ImgProps {
  width?: string;
  height?: string;
  imgSrc?: string;
  imgAlt?: string;
  borderRadius?: string;
  position?: string;
}

function Img({
  width,
  height,
  imgSrc,
  imgAlt,
  borderRadius,
  position,
}: ImgProps) {
  return (
    <ImgStyled
      width={width}
      height={height}
      src={imgSrc}
      alt={imgAlt}
      borderRadius={borderRadius}
      position={position}
    ></ImgStyled>
  );
}

export default Img;
