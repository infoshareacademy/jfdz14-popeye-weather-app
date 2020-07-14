import React from "react";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";
import "../CSSForComponents/SignUpPage.css";

const LoginButton = ({ text }) => {
  return <button className="loginButton">{text}</button>;
};

export default LoginButton;
