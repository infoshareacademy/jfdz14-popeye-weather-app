import React from "react";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";
import "../App.css";
import { Divider } from "@material-ui/core";

export const OrLine = () => {
  return (
    <div className="orLine">
      <Divider style={{ backgroundColor: "white", width: "26vw" }} />
      <h1 className="loginAmpersand"> OR </h1>
      <Divider style={{ backgroundColor: "white", width: "26vw" }} />
    </div>
  );
};
