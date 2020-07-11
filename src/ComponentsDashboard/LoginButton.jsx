import React from "react";
import styles from "../CSSForComponents/LoginPage.module.css";

const LoginButton = ({ children }) => {
  return <button className={styles.loginButton}>{children}</button>;
};

export default LoginButton;
