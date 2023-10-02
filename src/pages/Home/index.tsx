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
                  <img src={productInfo.icon.url} alt="" />
                </S.IconContainer>
                <S.ServiceDescription>
                  {productInfo.description}
                </S.ServiceDescription>
              </S.ServiceContent>
            ))}
          </S.ServicesContentContainer>
        </S.LeftContent>

        <S.Image src={pageData?.image.url} alt="" />
      </S.Wrapper>

      <Products data={pageData?.products} />
    </Container>
  );
}
