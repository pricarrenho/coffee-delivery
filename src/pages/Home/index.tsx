import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Image from "../../assets/imagemHome.png";
import * as S from "./styles";

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
            <S.ServicesContent>
              <S.ServiceContent>
                <ShoppingCart />
                <S.ServiceDescription>
                  Compra simples e segura
                </S.ServiceDescription>
              </S.ServiceContent>

              <S.ServiceContent>
                <Package />
                <S.ServiceDescription>
                  Embalagem mantém o café intacto
                </S.ServiceDescription>
              </S.ServiceContent>
            </S.ServicesContent>

            <S.ServicesContent>
              <S.ServiceContent>
                <Timer />
                <S.ServiceDescription>
                  Entrega rápida e rastreada
                </S.ServiceDescription>
              </S.ServiceContent>

              <S.ServiceContent>
                <Coffee />
                <S.ServiceDescription>
                  O café chega fresquinho até você
                </S.ServiceDescription>
              </S.ServiceContent>
            </S.ServicesContent>
          </S.ServicesContentContainer>
        </S.LeftContent>

        <S.RightContent>
          <S.Image src={Image} alt="" />
        </S.RightContent>
      </S.Wrapper>
    </Container>
  );
}
