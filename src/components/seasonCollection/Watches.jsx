import React from "react";
import Line from "../universalComps/Line";
import ProductCard from "./cards/ProductCard";
import data from "../data/data";

const Watches = () => {
  return (
    <div className="seasonProd">
      <div className="title">
        <h3 className="text-center title">СЕЗОН 2020/21</h3>
        <Line mtb="40" width="120px" />
      </div>
      <div className="product">
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-md-4 col-12">
                <ProductCard name={item.name} price={item.price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
