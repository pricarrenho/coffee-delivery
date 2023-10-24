import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { InputNumber } from "../../components/InputNumber";
import { Button } from "../../components/Button";
import { useHome } from "../Home/useHome";
import * as S from "./styles";
import { Link } from "react-router-dom";

export function Checkout() {
  const { pageData } = useHome();

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
            </S.ContentForm>

            <S.InputWidth>
              <Input name="uf" placeholder="UF" />
            </S.InputWidth>
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

            <div>Aqui</div>
          </S.AddressAndPaymentWrapper>
        </S.LeftContent>

        <S.RightContent>
          <S.Title>Cafés selecionados</S.Title>

          <S.CoffeeWrapper>
            <S.CheckoutCoffeeWrapper>
              <S.CheckoutCoffee>
                <S.Image src={pageData?.products[0].image.url} alt="" />

                <div>
                  <S.CheckoutCoffeeName>
                    {pageData?.products[0].title}
                  </S.CheckoutCoffeeName>

                  <S.CheckoutCoffeeButtons>
                    <InputNumber />
                    <Button styleType="secondary" icon="trash">
                      Remover
                    </Button>
                  </S.CheckoutCoffeeButtons>
                </div>
              </S.CheckoutCoffee>

              <S.CheckoutCoffeeValue>
                R$ {pageData?.products[0].value}
              </S.CheckoutCoffeeValue>
            </S.CheckoutCoffeeWrapper>

            <S.CheckoutCoffeeWrapper>
              <S.CheckoutCoffee>
                <S.Image src={pageData?.products[6].image.url} alt="" />

                <div>
                  <S.CheckoutCoffeeName>
                    {pageData?.products[6].title}
                  </S.CheckoutCoffeeName>

                  <S.CheckoutCoffeeButtons>
                    <InputNumber />
                    <Button styleType="secondary" icon="trash">
                      Remover
                    </Button>
                  </S.CheckoutCoffeeButtons>
                </div>
              </S.CheckoutCoffee>

              <S.CheckoutCoffeeValue>
                R$ {pageData?.products[6].value}
              </S.CheckoutCoffeeValue>
            </S.CheckoutCoffeeWrapper>

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
