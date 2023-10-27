import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import Illustration from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

export function Success() {
  const { address } = useGlobalContext();

  return (
    <Container>
      <Header />

      <S.SuccessWrapper>
        <S.TitleWrapper>
          <S.Title>Uhu! Pedido confirmado</S.Title>
          <S.Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </S.Subtitle>
        </S.TitleWrapper>

        <S.ContentWrapper>
          <S.LeftContentWrapper>
            <S.LeftContent>
              <S.Icon $styleType={"primary"}>
                <MapPin size={16} color="#f9f8f5" weight="fill" />
              </S.Icon>

              <div>
                <S.LeftContentDescription>
                  Entrega em{" "}
                  <span>
                    {address.street}, {address.streetNumber}
                  </span>
                </S.LeftContentDescription>

                <S.LeftContentDescription>
                  {address.neighborhood} - {address.city}, {address.uf}
                </S.LeftContentDescription>
              </div>
            </S.LeftContent>

            <S.LeftContent>
              <S.Icon $styleType={"secondary"}>
                <Timer size={16} color="#f9f8f5" weight="fill" />
              </S.Icon>

              <div>
                <S.LeftContentDescription>
                  Previsão de entrega
                </S.LeftContentDescription>
                <S.LeftContentDescription>
                  <span>20 min - 30 min</span>
                </S.LeftContentDescription>
              </div>
            </S.LeftContent>

            <S.LeftContent>
              <S.Icon $styleType={"tertiary"}>
                <CurrencyDollar size={16} color="#f9f8f5" weight="bold" />
              </S.Icon>

              <div>
                <S.LeftContentDescription>
                  Pagamento na entrega
                </S.LeftContentDescription>
                <S.LeftContentDescription>
                  <span>Cartão de Crédito</span>
                </S.LeftContentDescription>
              </div>
            </S.LeftContent>
          </S.LeftContentWrapper>

          <S.Image
            src={Illustration}
            alt="Entregador em sua moto roxa indo entregar seu pedido"
          />
        </S.ContentWrapper>
      </S.SuccessWrapper>
    </Container>
  );
}
