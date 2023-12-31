import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({ name, placeholder, value, onChange }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.Label htmlFor={name}>{placeholder}</S.Label>
      <S.Input
        name={name}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </S.InputWrapper>
  );
};
