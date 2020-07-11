import React from "react";
// import { Typography, Divider } from "@material-ui/core";
import styles from "../CSSForComponents/LoginPage.module.css";
import "../App.css";

export const LoginPageFooter = () => {
  return (
    <>
      <p className={styles.loginPageText}>
        {/* <Divider style={{ color: "red", width: "60vw", height: "3px" }} /> */}
        <em>
          From
          <br /> Wirus Team
        </em>
      </p>
    </>
  );
};
