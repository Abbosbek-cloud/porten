import React from "react";
import Line from "../universalComps/Line";

const NewCollection = () => {
  return (
    <div className="newCollection">
      <div className="collectionInfo">
        <h3 className="title">Новая коллекция</h3>
        <Line width="120px" />
        <a className="catalog" href="/">
          Каталог
        </a>
      </div>
    </div>
  );
};

export default NewCollection;
