import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { useGlobalContext } from "../../context/GlobalContext";
import { CoffeeItem } from "./CoffeeItem";
import { formattedPrice } from "../../utils/formatter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export function Checkout() {
  const { selectProducts, handleCheckoutForm } = useGlobalContext();
  const navigate = useNavigate();

  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [payment, setPayment] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  const paymentOptions = ["Crédito", "Débito", "Dinheiro"];

  const valueOfProduct = selectProducts.map((item) =>
    Number((item.totalItens * Number(item.value)).toFixed(2))
  );

  let totalValueOfProducts = 0;

  for (let index = 0; index < valueOfProduct.length; index++) {
    totalValueOfProducts += valueOfProduct[index];
  }

  const totalValue = totalValueOfProducts + 3.5;

  const checkoutInformation = {
    street: street,
    streetNumber: streetNumber,
    neighborhood: neighborhood,
    city: city,
    uf: uf,
    payment: payment,
  };

  const checkInformation =
    checkoutInformation.street !== "" &&
    checkoutInformation.streetNumber !== "" &&
    checkoutInformation.neighborhood !== "" &&
    checkoutInformation.city !== "" &&
    checkoutInformation.uf !== "" &&
    checkoutInformation.payment !== "";

  useEffect(() => {
    if (checkInformation) {
      setIsDisabled(false);
    }
  }, [checkInformation]);

  const handleConfirmation = () => {
    handleCheckoutForm(checkoutInformation);

    navigate("/success");
  };

  const handlePaymentOptions = (value: string) => {
    setPayment(value);
  };

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

            <S.ContentFormCEP>
              <Input
                name="cep"
                placeholder="CEP"
                value={cep}
                onChange={setCep}
              />
            </S.ContentFormCEP>

            <S.ContentFormStreet>
              <Input
                name="street"
                placeholder="Rua"
                value={street}
                onChange={setStreet}
              />

              <Input
                name="number"
                placeholder="Número"
                value={streetNumber}
                onChange={setStreetNumber}
              />
            </S.ContentFormStreet>

            <S.ContentFormCity>
              <Input
                name="neighborhood"
                placeholder="Bairro"
                value={neighborhood}
                onChange={setNeighborhood}
              />
              <Input
                name="city"
                placeholder="Cidade"
                value={city}
                onChange={setCity}
              />
              <Input name="uf" placeholder="UF" value={uf} onChange={setUf} />
            </S.ContentFormCity>
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
              {paymentOptions.map((item) => (
                <Select
                  option={item}
                  key={item}
                  onClick={() => handlePaymentOptions(item)}
                />
              ))}
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
                <S.CheckoutValuePrice>
                  {formattedPrice.format(totalValueOfProducts)}
                </S.CheckoutValuePrice>
              </S.CheckoutValueContent>

              <S.CheckoutValueContent>
                <S.CheckoutValueName>Entrega</S.CheckoutValueName>
                <S.CheckoutValuePrice>R$3,50</S.CheckoutValuePrice>
              </S.CheckoutValueContent>

              <S.CheckoutValueContent>
                <S.CheckoutValueTotal>Total</S.CheckoutValueTotal>
                <S.CheckoutValueTotal>
                  {formattedPrice.format(totalValue)}
                </S.CheckoutValueTotal>
              </S.CheckoutValueContent>
            </S.CheckoutValueWrapper>

            <Button
              styleType="primary"
              onClick={handleConfirmation}
              disabled={isDisabled}
            >
              confirmar pedido
            </Button>
          </S.CoffeeWrapper>
        </S.RightContent>
      </S.CheckoutWrapper>
    </Container>
  );
}
