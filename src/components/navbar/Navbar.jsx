import React from "react";
import "./style.css";
import Search from "../assets/icons/search.png";
import Exit from "../assets/icons/ic_sharp-log-in.png";
import Call from "../assets/icons/call.png";
import Cart from "../assets/icons/cart.png";

const Navbar = () => {
  const imgStyle = {
    width: "14px",
    height: "14px",
  };

  const callAfter = {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    color: "#969696",
  };
  return (
    <>
      <nav>
        <div className="container pb-2 pt-2 d-flex justify-content-between align-items-center">
          <div className="url d-flex align-items-center">
            <img
              style={{ ...imgStyle, marginRight: "5px" }}
              src={Call}
              alt="Call"
            />
            <p style={callAfter}>
              8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00
            </p>
          </div>
          <div className="register d-flex align-items-center">
            <ul
              style={callAfter}
              className="list-unstyled d-flex align-items-center"
            >
              <li>
                <img src={Exit} alt="exit" />
                <a
                  style={{
                    ...callAfter,
                    paddingInline: "5px",
                    marginTop: "5px",
                  }}
                  href="/"
                >
                  Войти
                </a>
              </li>
              /
              <li>
                <a
                  style={{
                    ...callAfter,
                    paddingInline: "5px",
                    marginTop: "5px",
                  }}
                  href="/"
                >
                  Регистрация
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="navHeader">
        <div className="container d-flex justify-content-between">
          <div className="logoName d-flex align-items-center">
            <span className="porten">PORTEN</span>
          </div>
          <ul className="list-unstyled d-flex align-items-center">
            <li>
              <a className="upper active" href="/">
                Понравилось
              </a>
            </li>
            <li>
              <a className="upper" href="/">
                личный кабинет
              </a>
            </li>
            <li>
              <a className="upper" href="/">
                настройки
              </a>
            </li>
            <li>
              <img className="cartImg" src={Cart} alt="" />
            </li>
            <li>
              <img className="searchImg" src={Search} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
