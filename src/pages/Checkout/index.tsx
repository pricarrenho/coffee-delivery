import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Select } from "../../components/Select";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";
import { CoffeeItem } from "./CoffeeItem";

export function Checkout() {
  const { selectProducts } = useGlobalContext();

  return (
    <Container>
      <Header />

      <S.CheckoutWrapper>
        <S.LeftContent>
          <S.Title>Complete seu pedido</S.Title>

          <S.AddressAndPaymentWrapper>
            <S.AddressAndPaymentContent>
              <MapPinLine size={22} color="#c47f17" />

              <div>
                <S.AddressAndPaymentTitle>
                  Endereço de Entrega
                </S.AddressAndPaymentTitle>
                <S.AddressAndPaymentDescription>
                  Informe o endereço onde deseja receber seu pedido
                </S.AddressAndPaymentDescription>
              </div>
            </S.AddressAndPaymentContent>

            <S.InputWidth>
              <Input name="cep" placeholder="CEP" />
            </S.InputWidth>

            <Input name="street" placeholder="Rua" />

            <S.ContentForm>
              <Input name="number" placeholder="Número" />
              <Input name="complement" placeholder="Complemento" />
            </S.ContentForm>

            <S.ContentForm>
              <Input name="neighborhood" placeholder="Bairro" />
              <Input name="city" placeholder="Cidade" />
              <Input name="uf" placeholder="UF" />
            </S.ContentForm>
          </S.AddressAndPaymentWrapper>

          <S.AddressAndPaymentWrapper>
            <S.AddressAndPaymentContent>
              <CurrencyDollar size={22} color="#8047f8" />

              <div>
                <S.AddressAndPaymentTitle>Pagamento</S.AddressAndPaymentTitle>
                <S.AddressAndPaymentDescription>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </S.AddressAndPaymentDescription>
              </div>
            </S.AddressAndPaymentContent>

            <S.OptionsPayment>
              <Select children="Cartão de crédito" />
              <Select children="Cartão de débito" />
              <Select children="Dinheiro" />
            </S.OptionsPayment>
          </S.AddressAndPaymentWrapper>
        </S.LeftContent>

        <S.RightContent>
          <S.Title>Cafés selecionados</S.Title>

          <S.CoffeeWrapper>
            {selectProducts.map((product) => (
              <CoffeeItem product={product} key={product.id} />
            ))}

            <S.CheckoutValueWrapper>
              <S.CheckoutValueContent>
                <S.CheckoutValueName>Total de itens</S.CheckoutValueName>
                <S.CheckoutValueName>R$ 29,70</S.CheckoutValueName>
              </S.CheckoutValueContent>

              <S.CheckoutValueContent>
                <S.CheckoutValueName>Entrega</S.CheckoutValueName>
                <S.CheckoutValueName>R$3,50</S.CheckoutValueName>
              </S.CheckoutValueContent>

              <S.CheckoutValueContent>
                <S.CheckoutValueTotal>Total</S.CheckoutValueTotal>
                <S.CheckoutValueTotal>R$33,20</S.CheckoutValueTotal>
              </S.CheckoutValueContent>
            </S.CheckoutValueWrapper>

            <Link to={"/success"}>
              <Button styleType="primary">confirmar pedido</Button>
            </Link>
          </S.CoffeeWrapper>
        </S.RightContent>
      </S.CheckoutWrapper>
    </Container>
  );
}
