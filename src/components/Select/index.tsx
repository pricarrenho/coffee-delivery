import * as S from "./styles";

import { CreditCard } from "phosphor-react";
import { SelectProps } from "./types";

export const Select = ({ children }: SelectProps) => {
  return (
    <S.SelectWrapper>
      <CreditCard size={16} color="#8047f8" />
      <S.OptionName>{children}</S.OptionName>
    </S.SelectWrapper>
  );
};
