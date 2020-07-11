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
      alignItems="center"
      direction="column"
      justify="center"
      // style={{ minHeight: "100vh" }}
    >
      <Grid item xs>
        <PopeyeImg />
      </Grid>
      <Grid item xs>
        <input className={styles.loginInput} placeholder="Sign In"></input>
      </Grid>
      <Grid item xs>
        <OrLine />
      </Grid>
      <Grid item xs>
        <input className={styles.loginInput} placeholder="Sign Up"></input>
      </Grid>
      <Divider bottom />

      <Grid item xs>
        <LoginPageFooter />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
