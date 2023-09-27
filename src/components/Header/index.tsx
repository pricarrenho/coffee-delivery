import Logo from "../../assets/logo.png";
import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <S.Image
        src={Logo}
        alt="Imagem de um copo de café roxo com os escritos Coffee Delivery do lado"
      />

      <S.RightContent>
        <p>Input?</p>
        <p>Carrinho?</p>
      </S.RightContent>
    </S.Wrapper>
  );
}
