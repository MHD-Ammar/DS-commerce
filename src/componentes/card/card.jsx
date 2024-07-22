import img from "../../assets/card.jpg";
import "./card.css"
const Card = () => {
  return (
    
    <div className="card">
      <h1 className="title">Seraphina Lace Gown</h1>
      <img src={img} className="card-img" alt="card-img" />
      <p className="description">
        Elevate your evening in the Seraphina Lace Gown, a masterpiece of
        sophistication and allure. Crafted from luxurious floral lace, this gown
        features
      </p>
      <p className="price">$599</p>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
};

export default Card;
