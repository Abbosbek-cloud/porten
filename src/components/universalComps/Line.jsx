import React from "react";

const Line = (props) => {
  const style = {
    margin: `${props.mtb}px 0`,
    border: "1px solid #fff",
    width: props.width ? props.width : "",
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="line" style={{ width: "120px", ...style }}></div>
    </div>
  );
};

export default Line;
