import { useEffect, useState } from "react";
import { PageData } from "./types";
import { getHomePage } from "../../service/homePage/getHomePage";

export const useHome = () => {
  const [pageData, setPageData] = useState<PageData>();

  useEffect(() => {
    getHomePage().then((result) => {
      setPageData(result as PageData);
    });
  }, []);

  return { pageData };
};
