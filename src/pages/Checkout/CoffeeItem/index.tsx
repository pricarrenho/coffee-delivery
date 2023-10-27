import { InputNumber } from "../../../components/InputNumber";
import { Button } from "../../../components/Button";
import * as S from "../styles";
import { PageDataProducts } from "../../Home/types";
import { formattedPrice } from "../../../utils/formatter";
import { useGlobalContext } from "../../../context/GlobalContext";

type CoffeeItemProps = {
  product: PageDataProducts;
};

export function CoffeeItem({ product }: CoffeeItemProps) {
  const { handleProducts } = useGlobalContext();

  const handleChangeProductQtd = (value: number) => {
    handleProducts({ ...product, totalItens: value });
  };

  return (
    <S.CheckoutCoffeeWrapper>
      <S.CheckoutCoffee>
        <S.Image src={product.image.url} alt="" />

        <div>
          <S.CheckoutCoffeeName>{product.title}</S.CheckoutCoffeeName>

          <S.CheckoutCoffeeButtons>
            <InputNumber
              value={product.totalItens}
              onChange={handleChangeProductQtd}
            />
            <Button styleType="secondary" icon="trash">
              Remover
            </Button>
          </S.CheckoutCoffeeButtons>
        </div>
      </S.CheckoutCoffee>

      <S.CheckoutCoffeeValue>
        {formattedPrice.format(Number(product.value) * product.totalItens)}
      </S.CheckoutCoffeeValue>
    </S.CheckoutCoffeeWrapper>
  );
}
