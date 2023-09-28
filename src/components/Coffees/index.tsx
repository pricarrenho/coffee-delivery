import * as S from "./styles";
import ExpressoTradicional from "../../assets/expresso.png";
import { Button } from "../Button";

export const Coffees = () => {
  return (
    <S.Wrapper>
      <S.Title>Nossos cafés</S.Title>

      <S.Content>
        <S.Coffee>
          <S.CoffeeFirstContent>
            <S.Image src={ExpressoTradicional} alt="" />

            <S.Tag>
              <p>Tradicional</p>
            </S.Tag>

            <S.Subtitle>Expresso Tradicional</S.Subtitle>

            <S.Description>
              O tradicional café feito com água quente e grãos moídos
            </S.Description>
          </S.CoffeeFirstContent>

          <S.CoffeeSecondContent>
            <S.Value>
              R$ <span>9,90</span>
            </S.Value>
            <p>- 1 +</p>
            <Button styleType={"tertiary"} icon={"cart"} />
          </S.CoffeeSecondContent>
        </S.Coffee>

        <S.Coffee>
          <S.CoffeeFirstContent>
            <S.Image src={ExpressoTradicional} alt="" />

            <S.Tag>
              <p>Tradicional</p>
            </S.Tag>
            <S.Subtitle>Expresso Tradicional</S.Subtitle>

            <S.Description>
              O tradicional café feito com água quente e grãos moídos
            </S.Description>
          </S.CoffeeFirstContent>

          <S.CoffeeSecondContent>
            <S.Value>
              R$ <span>9,90</span>
            </S.Value>
            <p>- 1 +</p>
            <Button styleType={"tertiary"} icon={"cart"} />
          </S.CoffeeSecondContent>
        </S.Coffee>

        <S.Coffee>
          <S.CoffeeFirstContent>
            <S.Image src={ExpressoTradicional} alt="" />

            <S.Tag>
              <p>Tradicional</p>
            </S.Tag>

            <S.Subtitle>Expresso Tradicional</S.Subtitle>

            <S.Description>
              O tradicional café feito com água quente e grãos moídos
            </S.Description>
          </S.CoffeeFirstContent>

          <S.CoffeeSecondContent>
            <S.Value>
              R$ <span>9,90</span>
            </S.Value>
            <p>- 1 +</p>
            <Button styleType={"tertiary"} icon={"cart"} />
          </S.CoffeeSecondContent>
        </S.Coffee>

        <S.Coffee>
          <S.CoffeeFirstContent>
            <S.Image src={ExpressoTradicional} alt="" />

            <S.Tag>
              <p>Tradicional</p>
            </S.Tag>

            <S.Subtitle>Expresso Tradicional</S.Subtitle>

            <S.Description>
              O tradicional café feito com água quente e grãos moídos
            </S.Description>
          </S.CoffeeFirstContent>

          <S.CoffeeSecondContent>
            <S.Value>
              R$ <span>9,90</span>
            </S.Value>
            <p>- 1 +</p>
            <Button styleType={"tertiary"} icon={"cart"} />
          </S.CoffeeSecondContent>
        </S.Coffee>
      </S.Content>
    </S.Wrapper>
  );
};
