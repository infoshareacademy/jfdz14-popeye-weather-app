import React from "react";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";

const LoginButton = ({ children }) => {
  return <button className="loginButton">{children}</button>;
};

export default LoginButton;
