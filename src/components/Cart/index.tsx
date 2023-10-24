import { ShoppingCart } from "@phosphor-icons/react";
import * as S from "./styles";

export const Cart = () => {
  return (
    <S.Wrapper to={"/checkout"}>
      <ShoppingCart size={22} color="#C47F17" weight="fill" />
    </S.Wrapper>
  );
};
