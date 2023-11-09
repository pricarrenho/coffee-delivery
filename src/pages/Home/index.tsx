import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { useHome } from "./useHome";
import * as S from "./styles";

export function Home() {
  const { pageData } = useHome();

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
                  <S.IconImage
                    src={productInfo.icon.url}
                    width={16}
                    height={16}
                    alt={`Ícone de ${productInfo.description}`}
                  />
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
