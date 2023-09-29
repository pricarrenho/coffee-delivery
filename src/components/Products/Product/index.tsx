import { PageDataProducts } from "../../../pages/Home/types";
import { Button } from "../../Button";
import * as S from "./styles";

type ProductsProps = {
  data: PageDataProducts;
};

export const Product = ({ data }: ProductsProps) => {
  return (
    <S.Product key={data.id}>
      <S.ProductFirstContent>
        <S.Image src={data.coffeeImage.url} alt="" />

        <S.Tag>
          {data.tags.map((tag) => (
            <p key={tag.title}>{tag.title}</p>
          ))}
        </S.Tag>

        <S.Subtitle>{data.title}</S.Subtitle>

        <S.Description>{data.description}</S.Description>
      </S.ProductFirstContent>

      <S.ProductSecondContent>
        <S.Value>
          R$ <span>{data.value}</span>
        </S.Value>
        <p>- 1 +</p>
        <Button styleType={"tertiary"} icon={"cart"} />
      </S.ProductSecondContent>
    </S.Product>
  );
};
