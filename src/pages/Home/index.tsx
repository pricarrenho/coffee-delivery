import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Image from "../../assets/imagemHome.png";
import * as S from "./styles";
import { Coffees } from "../../components/Coffees";

export function Home() {
  return (
    <Container>
      <Header />

      <S.Wrapper>
        <S.LeftContent>
          <S.TitleContent>
            <S.Title>
              Encontre o café perfeito para qualquer hora do dia
            </S.Title>
            <S.Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </S.Subtitle>
          </S.TitleContent>

          <S.ServicesContentContainer>
            <S.ServiceContent>
              <S.IconContainer $styleType={"yellowDark"}>
                <ShoppingCart size={20} color="#ffffff" weight="fill" />
              </S.IconContainer>
              <S.ServiceDescription>
                Compra simples e segura
              </S.ServiceDescription>
            </S.ServiceContent>

            <S.ServiceContent>
              <S.IconContainer $styleType={"gray"}>
                <Package size={20} color="#ffffff" weight="fill" />
              </S.IconContainer>
              <S.ServiceDescription>
                Embalagem mantém o café intacto
              </S.ServiceDescription>
            </S.ServiceContent>

            <S.ServiceContent>
              <S.IconContainer $styleType={"yellow"}>
                <Timer size={20} color="#ffffff" weight="fill" />
              </S.IconContainer>
              <S.ServiceDescription>
                Entrega rápida e rastreada
              </S.ServiceDescription>
            </S.ServiceContent>

            <S.ServiceContent>
              <S.IconContainer $styleType={"purple"}>
                <Coffee size={20} color="#ffffff" weight="fill" />
              </S.IconContainer>
              <S.ServiceDescription>
                O café chega fresquinho até você
              </S.ServiceDescription>
            </S.ServiceContent>
          </S.ServicesContentContainer>
        </S.LeftContent>

        <S.Image src={Image} alt="" />
      </S.Wrapper>

      <Coffees />
    </Container>
  );
}
