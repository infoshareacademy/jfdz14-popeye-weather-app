import React from "react";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";
import "../CSSForComponents/SignUpPage.css";

export const Input = ({ type, placeholder }) => {
  return (
    <input className="input" type={type} placeholder={placeholder}></input>
  );
};
