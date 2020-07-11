import React from "react";
import { Typography, Divider } from "@material-ui/core";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../App.css";

export const LoginPageFooter = () => {
  return (
    <>
      <Typography
        variant="h4"
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "Baloo2",
          position: "fixed",
          bottom: 20,
          left: "calc(50% - 90px)",
        }}
      >
        {/* <Divider style={{ color: "red", width: "60vw", height: "3px" }} /> */}
        <em>
          From
          <br /> Wirus Team
        </em>
      </Typography>
    </>
  );
};
