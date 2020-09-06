import React from 'react';
import { Link } from 'react-router-dom';
import style from './LoginPage.module.css';

const LoginButton = ({ text, urlName, toLogIn, onSubmit }) => {
  return (
    <Link
      className={
        !toLogIn ? `${style.loginButton}` : `${style.loginButton} ${style.loginButtonSignUpIn}`
      }
      to={urlName}
    >
      {text}
    </Link>
  );
};

export default LoginButton;
