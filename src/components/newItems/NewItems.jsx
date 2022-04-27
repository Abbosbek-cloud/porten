import React from "react";
import ProductCard from "../seasonCollection/cards/ProductCard";
import Line from "../universalComps/Line";
import newProducts from "../data/newData";
import "./style.css";

const NewItems = () => {
  return (
    <div className="neItems pt-5">
      <h1 className="title">новые поступления</h1>
      <Line width="120px" mtb={40} />
      <div className="container pb-5">
        <div className="row">
          {newProducts.map(({ name, price }) => (
            <div className="col-6 col-lg-3 mb-5">
              <ProductCard name={name} price={price} />
            </div>
          ))}
        </div>
        <div className="row pt-3">
          {newProducts.map(({ name, price }) => (
            <div className="col-6 col-lg-3">
              <ProductCard name={name} price={price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewItems;
