import "./card.css";

const Card = ({ title, img, price }) => {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <img src={img} className="card-img" alt="card-img" />
      <p className="price">{price}</p>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
};

export default Card;
