import "./product.css";
import Card from "../card/Card";
const Product = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="">
            <Card title={item.name} img={item.url} price={item.currentPrice} />
          </div>
        );
      })}
    </>
  );
};

export default Product;
