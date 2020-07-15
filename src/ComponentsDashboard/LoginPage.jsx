import React from "react";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";
import "../App.css";
import { PopeyeImg } from "./PopeyeImg";
import { LoginPageFooter } from "./LoginFooter";
import LoginButton from "./LoginButton";

// import { Divider } from "@material-ui/core";
import { OrLine } from "./Orline";
import { NameOfApp } from "./NameOfApp";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <PopeyeImg />
      <NameOfApp />
      <LoginButton text="Sign In" urlName={"signin"} />
      <OrLine />
      <LoginButton text="Sign Up" urlName={"signup"} />
      <LoginPageFooter />
    </div>
  );
};

export default LoginPage;
