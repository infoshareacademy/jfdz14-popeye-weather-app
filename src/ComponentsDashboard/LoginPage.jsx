import React from "react";
import { Grid, Divider } from "@material-ui/core";
import styles from "../CSSForComponents/LoginPage.module.css";
import "../App.css";
import { PopeyeImg } from "./PopeyeImg";
import { LoginPageFooter } from "./LoginFooter";

const OrLine = () => {
  return <h1 className="loginAmpersand"> -- OR --</h1>;
};

const LoginPage = () => {
  return (
    <Grid
      container
      // spacing={0}
      align="center"
      // alignContent="center"
      // direction="column"
      justify="center"
      // style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <PopeyeImg />
      </Grid>
      <Grid item xs={12}>
        <input className={styles.loginInput} placeholder="Sign In"></input>
      </Grid>
      <Grid item xs={12}>
        <OrLine />
      </Grid>
      <Grid item xs={12}>
        <input className={styles.loginInput} placeholder="Sign Up"></input>
      </Grid>
      <Divider />

      <Grid item xs={12}>
        <LoginPageFooter />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
