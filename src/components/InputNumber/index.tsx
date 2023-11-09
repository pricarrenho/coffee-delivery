import { InputNumberProps } from "./types";
import * as S from "./styles";
import { toast } from "react-toastify";

export const InputNumber = ({ value, onChange }: InputNumberProps) => {
  const handleDecrementProduct = () => {
    if (value === 1) return;

    onChange(value - 1);
  };

  const handleIncreaseProduct = () => {
    if (value >= 10) {
      toast.error("Permitido apenas 10 itens por produto", {
        style: { fontSize: "16px" },
      });

      return;
    }

    onChange(value + 1);
  };

  return (
    <S.Wrapper>
      <S.InputNumberBtn onClick={handleDecrementProduct}>-</S.InputNumberBtn>
      <S.InputNumber
        type="number"
        name="numberOfProducts"
        aria-label={`${value.toString()} produto selecionado`}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <S.InputNumberBtn onClick={handleIncreaseProduct}>+</S.InputNumberBtn>
    </S.Wrapper>
  );
};
