import React from "react";
import Line from "../universalComps/Line";
import "./style.css";

const Collection = () => {
  const styleOfBtn = {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "23px",
    textAlign: "center",
    letterSpacing: "0.1em",
    textrTansform: "uppercase",
    color: "#FFFFFF",
  };

  const styles = {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    textAlign: "center",
    color: "#FFFFFF",
  };
  return (
    <div className="row collection">
      <div className="col-12 col-lg-5 bg-images"></div>
      <div className="col-12 col-lg-7">
        <div className="collectionInfo">
          <h1 className="title">коллекция 2018</h1>
          <Line width="120px" mtb={40} />
          <p
            style={{
              width: "400px",
              textAlign: "center",
              marginInline: "auto",
              ...styles,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
            ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
            nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque
            magna consectetur. Amet convallis quis gravida facilisis vulputate.
            Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit
            quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent
            viverra nulla nullam natoque volutpat curabitur auctor. Viverra
            viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam
            a aliquam egestas leo orci pharetra sed diam.{" "}
          </p>
          <a style={{ ...styleOfBtn }} href="/">
            посмотреть коллекцию
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collection;
