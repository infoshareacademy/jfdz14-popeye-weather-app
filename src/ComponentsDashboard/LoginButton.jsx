import React from "react";
import { useHistory } from "react-router-dom";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";
import "../CSSForComponents/SignUpPage.css";

const LoginButton = ({ text, urlName }) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/${urlName}`);
  };
  return (
    <button onClick={handleClick} className="loginButton" toWhere={urlName}>
      {text}
    </button>
  );
};

export default LoginButton;
