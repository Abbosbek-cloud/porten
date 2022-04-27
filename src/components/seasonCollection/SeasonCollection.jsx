import React from "react";
import NewCollection from "./NewCollection";
import Watches from "./Watches";
import "./styles.css";

const SeasonCollection = () => {
  return (
    <div className="all-collection">
      <div className="conteiner-fluid">
        <div className="row">
          <div className="col-lg-6 col-12 px-0">
            <Watches />
          </div>
          <div className="col-lg-6 col-12 px-0">
            <NewCollection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonCollection;
