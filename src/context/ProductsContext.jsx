import { createContext, useState, useEffect } from "react";
import clothes from "../assets/clothing.json";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [boys, setBoys] = useState([]);
  const [girls, setGirls] = useState([]);

  useEffect(() => {
    clothes.forEach((cloth) => {
      if (cloth.category === "boys") setBoys((prev) => [...prev, cloth]);
      else setGirls((prev) => [...prev, cloth]);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ boys, girls }}>
      {children}
    </ProductContext.Provider>
  );
}
