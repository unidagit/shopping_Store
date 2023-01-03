import { LabelStyled, LabelText } from "./Label.style";

export interface LabelProps {
  htmlFor?: string;
  label?: string;
  children?: React.ReactNode;
}

function Label({ htmlFor, label, children }: LabelProps) {
  return (
    <LabelStyled htmlFor={htmlFor}>
      <LabelText>{label}</LabelText>
      {children}
    </LabelStyled>
  );
}

export default Label;
