import React from "react";
import Line from "../universalComps/Line";
import "./style.css";

const NewBrand = () => {
  return (
    <>
      <div className="newBrand">
        <div className="brandHeader">
          <h1 className="title">наши бренды</h1>
          <Line width="120px" mtb="40" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <img
                src="images/coco.png"
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div className="col-12 col-lg-3">
              <img
                src="images/coco.png"
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div className="col-12 col-lg-3">
              <img
                src="images/coco.png"
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div className="col-12 col-lg-3">
              <img
                src="images/coco.png"
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h1>О магазине</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                semper viverra nunc cursus tortor lectus nunc nulla nibh.
                Egestas amet consectetur vel vitae aliquam dictum suspendisse.
                Lobortis eget consequat, tellus et et sed turpis. Pretium
                quisque vitae, amet, porttitor odio ultricies massa pharetra
                leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h1>Категории</h1>
              <div className="wrapper d-flex justify-content-between">
                <span>часы</span>
                <span>браслеты</span>
                <span>ремни</span>
                <span>ювелирные изделия</span>
                <span>запонки</span>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <h1>РАссылка</h1>
              <div className="wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                  semper viverra nunc cursus tortor lectus nunc nulla nibh.
                </p>
                <form>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="ВАША ПОЧТА"
                  />
                  <button>ПОДПИСАТЬСЯ</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBrand;
