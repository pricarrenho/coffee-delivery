import { ReactElement } from "react";
import { PageDataProducts } from "../pages/Home/types";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  selectProducts: ProductsData[];
  handleProducts: (value: ProductsData) => void;
  handleRemoveProduct: (value: ProductsData) => void;
  handleRemoveProducts: () => void;
  checkoutForm: CheckoutFormProps;
  handleCheckoutForm: (value: CheckoutFormProps) => void;
};

export type ProductsData = PageDataProducts;

export type CheckoutFormProps = {
  street: string;
  streetNumber: string;
  neighborhood: string;
  city: string;
  uf: string;
  payment: string;
};
