import React from "react";
import styles from "../CSSForComponents/LoginPage.module.css";
import "../App.css";
import { PopeyeImg } from "./PopeyeImg";
import { LoginPageFooter } from "./LoginFooter";
import LoginButton from "./LoginButton";

const OrLine = () => {
  return <h1 className="loginAmpersand"> -- OR --</h1>;
};

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <PopeyeImg />
      <LoginButton children={"Sign In"} />
      <OrLine />
      <LoginButton children={"Sign Up"} />
      <LoginPageFooter />
    </div>
  );
};

export default LoginPage;
