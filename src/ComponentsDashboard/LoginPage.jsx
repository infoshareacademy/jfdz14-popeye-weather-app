import React from "react";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";
import "../App.css";
import { PopeyeImg } from "./PopeyeImg";
import { LoginPageFooter } from "./LoginFooter";
import LoginButton from "./LoginButton";
// import { Divider } from "@material-ui/core";
import { OrLine } from "./Orline";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <PopeyeImg />
      <LoginButton children={"Sign In"} />
      <OrLine />
      <LoginButton children={"Sign Up"} />
      <LoginPageFooter />
    </div>
  );
};

export default LoginPage;
