import React from "react";
import styles from "../CSSForComponents/LoginPage.module.css";
import "../App.css";
import PopeyeLogo from "../images/popeyeLogo.jpg";

export const PopeyeImg = () => {
  return <img alt="" src={PopeyeLogo} className={styles.loginImage} />;
};
