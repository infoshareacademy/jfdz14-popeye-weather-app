import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import './SignUpPage.css';

const LoginButton = ({ text, urlName }) => {
  return (
    <Link className="loginButton" to={urlName}>
      {text}
    </Link>
  );
};

export default LoginButton;
