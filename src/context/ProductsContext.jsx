import { createContext, useState, useEffect } from "react";
import clothes from "../assets/clothing.json";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [boys, setBoys] = useState([]);
  const [girls, setGirls] = useState([]);

  useEffect(() => {
    const boysItems = [];
    const girlsItems = [];

    clothes.forEach((item) => {
      if (item.category === "boys") {
        boysItems.push(item);
      } else if (item.category === "girls") {
        girlsItems.push(item);
      }
    });

    setBoys(boysItems);
    setGirls(girlsItems);
  }, []);

  return (
    <ProductContext.Provider value={{ boys, girls }}>
      {children}
    </ProductContext.Provider>
  );
}
