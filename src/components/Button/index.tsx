import { ButtonProps } from "./types";
import { Trash, ShoppingCart } from "@phosphor-icons/react";
import * as S from "./styles";

export const Button = ({
  children,
  styleType,
  icon,
  ...props
}: ButtonProps) => {
  const icons = {
    trash: <Trash color="#8047F8" />,
    cart: <ShoppingCart size={22} color="#ffffff" weight="fill" />,
  };

  return (
    <S.WrapperButton $styleType={styleType} {...props}>
      {icon && icons[icon]} {children}
    </S.WrapperButton>
  );
};
