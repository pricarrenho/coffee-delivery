import { InputNumberProps } from "./types";
import * as S from "./styles";

export const InputNumber = ({ value, onChange }: InputNumberProps) => {
  const handleDecrementProduct = () => {
    if (value === 1) return;

    onChange(value - 1);
  };

  const handleIncreaseProduct = () => {
    onChange(value + 1);
  };

  return (
    <S.Wrapper>
      <S.InputNumberBtn onClick={handleDecrementProduct}>-</S.InputNumberBtn>
      <S.InputNumber
        type="number"
        name="numberOfProducts"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <S.InputNumberBtn onClick={handleIncreaseProduct}>+</S.InputNumberBtn>
    </S.Wrapper>
  );
};
