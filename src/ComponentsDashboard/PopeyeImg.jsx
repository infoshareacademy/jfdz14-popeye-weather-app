import React from "react";
import styles from "../CSSForComponents/LoginPage.module.css";
import "../App.css";
import PopeyeLogo from "../images/popeyeLogo.jpg";

export const PopeyeImg = () => {
  return (
    <>
      <img
        alt="logo of popeye weather app"
        src={PopeyeLogo}
        className={styles.loginImage}
      />
      <p className={styles.loginPageText}>Popeye Weather</p>
    </>
  );
};
