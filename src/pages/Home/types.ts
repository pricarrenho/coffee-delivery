export type IconContainerType = "yellowDark" | "yellow" | "gray" | "purple";

export type PageData = {
  title: string;
  subtitle: string;
  image: PageDataImage;
  productInfos: PageDataProductInfos[];
  products: PageDataProducts[];
};

export type PageDataImage = {
  url: string;
};

export type PageDataProductInfos = {
  id: string;
  description: string;
  icon: PageDataImage;
};

export type PageDataProducts = {
  id: string;
  title: string;
  description: string;
  value: string;
  coffeeImage: PageDataImage;
  tags: PageDataProductsTag[];
};

export type PageDataProductsTag = {
  title: string;
};
