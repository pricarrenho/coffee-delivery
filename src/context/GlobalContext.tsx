import { createContext, useContext, useState } from "react";
import {
  CheckoutFormProps,
  GlobalContextType,
  GlobalProviderProps,
  ProductsData,
} from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [selectProducts, setSelectProducts] = useState<ProductsData[]>([]);
  const [checkoutForm, setCheckoutForm] = useState<CheckoutFormProps>({
    street: "",
    streetNumber: "",
    neighborhood: "",
    city: "",
    uf: "",
    payment: "",
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

  const handleRemoveProduct = (value: ProductsData) => {
    const newObj = selectProducts.filter((item) => item !== value);

    setSelectProducts(newObj);
  };

  const handleRemoveProducts = () => {
    setSelectProducts([]);
  };

  const handleCheckoutForm = (value: CheckoutFormProps) => {
    setCheckoutForm(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        selectProducts,
        handleProducts,
        handleRemoveProduct,
        handleRemoveProducts,
        checkoutForm,
        handleCheckoutForm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
