import { useState } from "react";
import * as S from "./styles";

export const InputNumber = () => {
  const [numberOfProducts, seNumberOfProducts] = useState(1);

  const handleDecrementProduct = () => {
    if (numberOfProducts === 1) return;

    seNumberOfProducts(numberOfProducts - 1);
  };

  const handleIncreaseProduct = () => {
    seNumberOfProducts(numberOfProducts + 1);
  };

  return (
    <S.Wrapper>
      <S.InputNumberBtn onClick={handleDecrementProduct}>-</S.InputNumberBtn>
      <S.InputNumber
        type="number"
        name="numberOfProducts"
        value={numberOfProducts}
        onChange={(e) => seNumberOfProducts(Number(e.target.value))}
      />
      <S.InputNumberBtn onClick={handleIncreaseProduct}>+</S.InputNumberBtn>
    </S.Wrapper>
  );
};
