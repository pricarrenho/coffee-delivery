import { ShoppingCart } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

export const Cart = () => {
  const { selectProducts } = useGlobalContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (selectProducts.length > 0) {
      navigate("/checkout");
    } else {
      navigate("/");
    }
  };

  return (
    <S.Wrapper onClick={handleClick}>
      {selectProducts.length > 0 && (
        <S.ItensWrapper>
          <S.ItensNumber>{selectProducts.length}</S.ItensNumber>
        </S.ItensWrapper>
      )}

      <ShoppingCart size={22} color="#C47F17" weight="fill" />
    </S.Wrapper>
  );
};
