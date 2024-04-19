import React from "react";
import "./DisplayCard.css";
import item1 from "../../assets/t11.webp";

const DisplayCard = ({ product }) => {
  return (
    <div className="card-container">
      <div className="cardItem-img">
        <img src={item1} alt={product.title} />
      </div>
      <div className="cardItem-desc">
        <p className="cardItem-title">{product.title}</p>
        <p className="cardItem-Pricing">
          <span style={{ textDecoration: "line-through" }}>
            &#8377;{product.price}
          </span>
          <span style={{ color: "green", fontWeight: "bold", fontSize: "10px", marginLeft: "4px" }}>
            ( {product.discountPercentage}% off)
          </span>
        </p>
        {/* Render offer price directly */}
        {product.price && (
          <p className="item-offerPrice">Offer Price: &#8377;{product.price - (product.price * product.discountPercentage / 100)}</p>
        )}
      </div>
      <div className="card-Navigation"></div>
    </div>
  );
};

export default DisplayCard;
