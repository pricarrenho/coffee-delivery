import * as S from "./styles";

import { CreditCard } from "phosphor-react";
import { SelectProps } from "./types";
import { useEffect, useState } from "react";

export const Select = ({ option, select, ...props }: SelectProps) => {
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    setIsSelect(select === option);
  }, [select, option]);

  return (
    <S.SelectWrapper $isSelect={isSelect} {...props}>
      <CreditCard size={16} color="#8047f8" />
      <S.OptionName>{option}</S.OptionName>
    </S.SelectWrapper>
  );
};
