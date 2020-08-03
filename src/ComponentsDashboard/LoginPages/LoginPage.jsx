import React from 'react';
import '../../CSSForComponents/LoginPage.css';
import '../../CSSForComponents/App.css';
import { PopeyeImg } from '../Dashboards/PopeyeImg';
import { LoginPageFooter } from './LoginFooter';
import LoginButton from './LoginButton';
import { OrLine } from './Orline';
import { NameOfApp } from '../Dashboards/NameOfApp';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <PopeyeImg />
      <NameOfApp />
      <LoginButton text="Sign In" urlName={'signin'} />
      <OrLine />
      <LoginButton text="Sign Up" urlName={'signup'} />
      <LoginPageFooter />
    </div>
  );
};

export default LoginPage;
