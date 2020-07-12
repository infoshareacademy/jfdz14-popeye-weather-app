import React from "react";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../App.css";
import "../CSSForComponents/LoginPage.css";
import { PopeyeImg } from "./PopeyeImg";
import { LoginPageFooter } from "./LoginFooter";
import { Input } from "./Input";
import LoginButton from "./LoginButton";
import { Divider } from "@material-ui/core";
import "../CSSForComponents/SignUpPage.css";
// import { OrLine } from "./Orline";

const SignUpPage = () => {
  return (
    <div className="loginPage">
      <PopeyeImg />
      <Input type={"email"} placeholder={"e-mail"} />
      <Divider />
      <Input type={"text"} placeholder={"Name and Surname"} />
      <Divider />
      <Input type={"text"} placeholder={"login"} />
      <Divider />
      <Input type={"password"} placeholder={"password"} />
      <Divider />
      <Input type={"password"} placeholder={"repeat password"} />

      <LoginButton className="loginButton signUpButton" children={"Sign Up"} />
      {/* dlaczego nie bierze styli z drugiego pliku? */}
      <LoginPageFooter />
    </div>
  );
};

export default SignUpPage;
