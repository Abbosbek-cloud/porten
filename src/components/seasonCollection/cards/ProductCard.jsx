import React from "react";
import "./style.css";
import Watch from "../../assets/images/watch.png";

function ProductCard({ name, price }) {
  return (
    <div className="product">
      <div className="product-img">
        <img src={Watch} alt="" />
      </div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
