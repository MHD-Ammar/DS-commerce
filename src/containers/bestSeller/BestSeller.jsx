import React, { useEffect, useState } from "react";
import "./bestseller.css";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import SlideShow from "../../componentes/slider/SlideShow";
import Card from "../../componentes/card/Card";
function BestSeller() {
  const { boys, girls } = useContext(ProductContext);
  const [bestProducts, setBestProducts] = useState([]);
  useEffect(() => {
    setBestProducts(boys.concat(girls).filter((item) => item.numOfSales > 25));
  }, [boys, girls]);
  let data = (
    <SlideShow>
      <Card></Card>
      {bestProducts?.map((item) => (
        <div key={item.name}>
          <Card title={item.name} img={item.url} price={item.currentPrice} />
        </div>
      ))}
    </SlideShow>
  );
  console.log(data);

  //   if (bestProducts.length > 3) setFalg(true);

  return (
    <div className="bestSeller">
      <div className="bestSeller__title">
        <h1>Best Seller</h1>
      </div>
      {data}
    </div>
  );
}

export default BestSeller;
