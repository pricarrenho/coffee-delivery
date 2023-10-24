import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Cart } from "../Cart";
import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <Link to={"/"}>
        <S.Image
          src={Logo}
          alt="Imagem de um copo de café roxo com os escritos Coffee Delivery do lado"
        />
      </Link>

      <S.RightContent>
        <Cart />
      </S.RightContent>
    </S.Wrapper>
  );
}
