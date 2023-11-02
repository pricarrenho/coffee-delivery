import * as S from "./styles";

import { CreditCard } from "phosphor-react";
import { SelectProps } from "./types";

export const Select = ({ option, ...props }: SelectProps) => {
  return (
    <S.SelectWrapper {...props}>
      <CreditCard size={16} color="#8047f8" />
      <S.OptionName>{option}</S.OptionName>
    </S.SelectWrapper>
  );
};
