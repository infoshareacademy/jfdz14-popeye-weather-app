import React from "react";
import {Link} from "react-router-dom";
// import styles from "../CSSForComponents/LoginPage.module.css";
import "../CSSForComponents/LoginPage.css";
import "../CSSForComponents/SignUpPage.css";

const LoginButton = ({text, urlName}) => {
    return <Link className="loginButton" to={urlName}>
        {text}
    </Link>;

};

export default LoginButton;
