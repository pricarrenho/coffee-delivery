import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { useHome } from "./useHome";
import * as S from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
  const { pageData } = useHome();

  const icons = {
    coffee: <Coffee size={20} color="#ffffff" weight="fill" />,
    time: <Timer size={20} color="#ffffff" weight="fill" />,
    package: <Package size={20} color="#ffffff" weight="fill" />,
    shoppingCart: <ShoppingCart size={20} color="#ffffff" weight="fill" />,
  };

  return (
    <Container>
      <Header />

      <S.Wrapper>
        <S.LeftContent>
          <S.TitleContent>
            <S.Title>{pageData?.title}</S.Title>
            <S.Subtitle>{pageData?.subtitle}</S.Subtitle>
          </S.TitleContent>

          <S.ServicesContentContainer>
            {pageData?.productInfos.map((productInfo) => (
              <S.ServiceContent key={productInfo.id}>
                <S.IconContainer $styleType={productInfo.color}>
                  {icons[productInfo.icon.name]}
                </S.IconContainer>
                <S.ServiceDescription>
                  {productInfo.description}
                </S.ServiceDescription>
              </S.ServiceContent>
            ))}
          </S.ServicesContentContainer>
        </S.LeftContent>

        <S.Image
          src={pageData?.image.url}
          width={476}
          height={360}
          alt="Imagem de um copo de café para viagem, escrito Coffee Delivery. Em volta dele tem grãos de café inteiros e moídos. Tudo isso com um fundo amarelo e um risco preto fazendo meia lua por volta"
        />
      </S.Wrapper>

      <Products data={pageData?.products} />
    </Container>
  );
}
