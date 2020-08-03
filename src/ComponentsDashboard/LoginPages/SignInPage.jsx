import React from 'react';
import '../../CSSForComponents/App.css';
import '../../CSSForComponents/LoginPage.css';
import { PopeyeImg } from '../Dashboards/PopeyeImg';
import { LoginPageFooter } from './LoginFooter';
import { Input } from './Input';
import LoginButton from './LoginButton';
import { NameOfApp } from '../Dashboards/NameOfApp';
import { Divider } from '@material-ui/core';
import '../../CSSForComponents/SignUpPage.css';
// import { OrLine } from "./Orline";

const SignInPage = () => {
  return (
    <div className="loginPage">
      <PopeyeImg />
      <NameOfApp paragraph={'Sign in to use application'} />
      <Input type={'text'} placeholder={'login'} />
      <Divider />
      <Input type={'password'} placeholder={'password'} />
      <LoginButton className="loginButton signUpButton" text={'Sign In'} urlName={'home'} />
      {/* dlaczego nie bierze styli z drugiego pliku? */}
      <LoginPageFooter />
    </div>
  );
};

export default SignInPage;
