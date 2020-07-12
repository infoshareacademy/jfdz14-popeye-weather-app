import React from "react";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";
import "../App.css";
import PopeyeLogo from "../images/hiclipart.com.png";

export const PopeyeImg = ({ children }) => {
  return (
    <>
      <img
        alt="logo of popeye weather app"
        src={PopeyeLogo}
        className="loginImage"
      />
      {/* <p className="loginPageText">{children}</p> */}
    </>
  );
};
