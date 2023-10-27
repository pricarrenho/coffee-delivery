import { ReactElement } from "react";
import { PageDataProducts } from "../pages/Home/types";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  selectProducts: ProductsData[];
  handleProducts: (value: ProductsData) => void;
  address: AddressProps;
  handleAddress: (value: AddressProps) => void;
};

export type ProductsData = PageDataProducts;

export type AddressProps = {
  street: string;
  streetNumber: string;
  neighborhood: string;
  city: string;
  uf: string;
};
