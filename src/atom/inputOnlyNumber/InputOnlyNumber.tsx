import React, { useState } from "react";
import { InputProps } from "../input/Input";
import {
  InputOnlyNumberBox,
  InputOnlyNumberStyled,
} from "./InputOnlyNumber.style";

export interface InputNumberProps extends InputProps {
  handleonChange?: (value: string) => void;
}

function InputOnlyNumber({ handleonChange }: InputNumberProps) {
  const [commaNumber, setCommaNumber] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const commaValue = Number(value.replaceAll(",", ""));
    setCommaNumber(commaValue.toLocaleString());
  };

  return (
    <InputOnlyNumberBox>
      <InputOnlyNumberStyled
        value={commaNumber}
        onChange={onChange}
      ></InputOnlyNumberStyled>
      <span>원</span>
    </InputOnlyNumberBox>
  );
}

export default InputOnlyNumber;
