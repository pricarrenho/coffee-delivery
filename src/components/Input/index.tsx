import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ name, placeholder, value, onChange }: InputProps) => {
  return (
    <S.Input
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
