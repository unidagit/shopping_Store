import { InputStyled, InputStyledSearch } from "./Input.style";

export interface InputProps {
  isInput?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  className?: string;
  id?: string;
  type?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  isInput = true,
  inputRef,
  placeholder,
  className,
  id,
  type,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      {isInput ? (
        <InputStyled
          ref={inputRef}
          placeholder={placeholder}
          className={className}
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        ></InputStyled>
      ) : (
        <InputStyledSearch
          ref={inputRef}
          placeholder={placeholder}
          className={className}
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        ></InputStyledSearch>
      )}
    </>
  );
}

export default Input;
