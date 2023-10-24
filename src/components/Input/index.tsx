import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ name, placeholder }: InputProps) => {
  return <S.Input name={name} type="text" placeholder={placeholder} />;
};
