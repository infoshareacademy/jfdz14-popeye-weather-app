import React from "react";
import { Grid } from "@material-ui/core";
import styles from "../CSSForComponents/LoginPage.module.css";
import "../App.css";
import PopeyeLogo from "../images/popeyeLogo.jpg";

const OrLine = () => {
  return <h1 className="loginAmpersand"> -- OR --</h1>;
};

const PopeyeImg = () => {
  return <img alt="" src={PopeyeLogo} className={styles.loginImage} />;
};

const LoginPageFooter = () => {
  return (
    <>
      <p className="loginAmpersand">
        From <br />
        Wirus Team
      </p>
    </>
  );
};
const LoginPage = () => {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        direction="column"
        justify="space-evenly"
        // style={{ minHeight: "100%" }}
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
        <Grid container direction="column">
          <Grid item xs></Grid>
          <Grid item xs>
            <LoginPageFooter />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
