import { ReactElement } from "react";
import { PageDataProducts } from "../pages/Home/types";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  selectProducts: ProductsData[];
  handleProducts: (value: ProductsData) => void;
};

export type ProductsData = PageDataProducts;
