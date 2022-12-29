import { ButtonStyled } from "./Button.style";

export interface ButtonProps {
  disabled?: boolean;
  size?: "l" | "m" | "ms" | "s" | "tabActiv" | "tabMenu";
  color?: "blue" | "whiteTab" | "whiteBtn" | "gray" | "tabActiv" | "tabMenu";
  children?: React.ReactNode;
}

function Button({ disabled, size, color, children }: ButtonProps) {
  return (
    <ButtonStyled disabled={disabled} size={size} color={color}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
