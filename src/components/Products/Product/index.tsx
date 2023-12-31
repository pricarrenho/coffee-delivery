import { PageDataProducts } from "../../../pages/Home/types";
import { Button } from "../../Button";
import { InputNumber } from "../../InputNumber";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useState } from "react";
import { formattedPrice } from "../../../utils/formatter";
import { ProductsProps } from "./type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const Product = ({ data }: ProductsProps) => {
  const { handleProducts, selectProducts } = useGlobalContext();
  const navigate = useNavigate();
  const contextProductQtd =
    selectProducts.filter((item) => item.id === data.id)[0]?.totalItens || 1;
  const [productQtd, setProductQtd] = useState(contextProductQtd);

  const handleAddProduct = (data: PageDataProducts) => {
    data.totalItens = productQtd;

    toast.success(
      <div onClick={() => navigate("/checkout")}>
        Colocado {data.title} no carrinho
      </div>,
      {
        autoClose: 3000,
        style: { fontSize: "16px" },
      }
    );

    handleProducts(data);
  };

  return (
    <S.Product key={data.id}>
      <S.ProductFirstContentWrapper>
        <S.ProductFirstContent>
          <S.Image
            src={data.image.url}
            width={120}
            height={120}
            alt={data.description}
          />

          <S.Tag>
            {data.tags.map((tag) => (
              <p key={tag.title}>{tag.title}</p>
            ))}
          </S.Tag>
        </S.ProductFirstContent>

        <S.ProductFirstContent>
          <S.Subtitle>{data.title}</S.Subtitle>

          <S.Description>{data.description}</S.Description>
        </S.ProductFirstContent>
      </S.ProductFirstContentWrapper>

      <S.ProductSecondContent>
        <S.Value>
          <span>{formattedPrice.format(Number(data.value) * productQtd)}</span>
        </S.Value>
        <InputNumber value={productQtd} onChange={setProductQtd} />
        <Button
          styleType={"tertiary"}
          icon={"cart"}
          onClick={() => handleAddProduct(data)}
          aria-label="Colocar no carrinho"
        />
      </S.ProductSecondContent>
    </S.Product>
  );
};
