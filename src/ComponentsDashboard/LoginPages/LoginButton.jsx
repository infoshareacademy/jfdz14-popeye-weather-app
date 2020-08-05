import React from 'react';
import { Link } from 'react-router-dom';
import style from './LoginPage.module.css';

const LoginButton = ({ text, urlName }) => {
  return (
    <Link className={style.loginButton} to={urlName}>
      {text}
    </Link>
  );
};

export default LoginButton;
