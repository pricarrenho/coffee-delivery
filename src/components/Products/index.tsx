import { PageDataProducts } from "../../pages/Home/types";
import { Product } from "./Product";
import * as S from "./styles";

type ProductsProps = {
  data?: PageDataProducts[];
};

export const Products = ({ data }: ProductsProps) => {
  return (
    <S.Wrapper>
      <S.Title>Nossos cafés</S.Title>

      <S.Content>
        {data?.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </S.Content>
    </S.Wrapper>
  );
};
