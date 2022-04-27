import React from "react";
import Line from "../universalComps/Line";

const Header = () => {
  return (
    <header>
      <div className="wrapperAll">
        <div className="logoWrapper">
          <div className="logo">
            <span className="porten add">PORTEN</span>
            <Line mtb="7" width="100%" />
            <span className="country" style={{ textTransform: "uppercase" }}>
              санкт-петербург
            </span>
          </div>
        </div>
        <div className="textWrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed
            justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis.
            Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi.
            Tortor nibh magna feugiat id nunc, dui nisl viverra.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
