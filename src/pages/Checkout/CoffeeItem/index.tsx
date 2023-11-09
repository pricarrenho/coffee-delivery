import { InputNumber } from "../../../components/InputNumber";
import { Button } from "../../../components/Button";
import { PageDataProducts } from "../../Home/types";
import { formattedPrice } from "../../../utils/formatter";
import { useGlobalContext } from "../../../context/GlobalContext";
import * as S from "./styles";

type CoffeeItemProps = {
  product: PageDataProducts;
};

export function CoffeeItem({ product }: CoffeeItemProps) {
  const { handleProducts, handleRemoveProduct } = useGlobalContext();

  const handleChangeProductQtd = (value: number) => {
    handleProducts({ ...product, totalItens: value });
  };

  const handleRemoveItem = () => {
    handleRemoveProduct(product);
  };

  return (
    <S.CheckoutCoffeeWrapper>
      <S.CheckoutCoffee>
        <S.Image
          src={product.image.url}
          width={64}
          height={64}
          alt={product.description}
        />

        <div>
          <S.CheckoutCoffeeName>{product.title}</S.CheckoutCoffeeName>

          <S.CheckoutCoffeeButtons>
            <InputNumber
              value={product.totalItens}
              onChange={handleChangeProductQtd}
            />
            <Button
              onClick={handleRemoveItem}
              styleType="secondary"
              icon="trash"
            >
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
