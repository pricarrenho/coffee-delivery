import { createContext, useContext, useState } from "react";
import {
  AddressProps,
  GlobalContextType,
  GlobalProviderProps,
  ProductsData,
} from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [selectProducts, setSelectProducts] = useState<ProductsData[]>([]);
  const [address, setAddress] = useState<AddressProps>({
    street: "",
    streetNumber: "",
    neighborhood: "",
    city: "",
    uf: "",
  });

  const handleProducts = (value: ProductsData) => {
    let newObj = [];

    if (selectProducts.find((element) => element.title === value.title)) {
      newObj = selectProducts.map((item) =>
        item.id === value.id ? value : item
      );
    } else {
      newObj = [...selectProducts, value];
    }

    setSelectProducts(newObj);
  };

  const handleAddress = (value: AddressProps) => {
    setAddress(value);
  };

  return (
    <GlobalContext.Provider
      value={{ selectProducts, handleProducts, address, handleAddress }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
