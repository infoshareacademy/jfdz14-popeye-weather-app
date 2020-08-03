import React from 'react';

import '../../App.css';
import './LoginPage.css';
import { PopeyeImg } from '../Dashboards/PopeyeImg';
import { LoginPageFooter } from './LoginFooter';
import { Input } from './Input';
import LoginButton from './LoginButton';
import { NameOfApp } from '../Dashboards/NameOfApp';
import { Divider } from '@material-ui/core';
import './SignUpPage.css';
// import { OrLine } from "./Orline";

const SignUpPage = () => {
  return (
    <div className="loginPage">
      <PopeyeImg />
      <NameOfApp paragraph={'Register to use application'} />
      <Input type={'email'} placeholder={'e-mail'} />
      <Divider />
      <Input type={'text'} placeholder={'Name and Surname'} />
      <Divider />
      <Input type={'text'} placeholder={'login'} />
      <Divider />
      <Input type={'password'} placeholder={'password'} />
      <Divider />
      <Input type={'password'} placeholder={'repeat password'} />

      <LoginButton className="loginButton signUpButton" text={'Sign Up'} urlName={'home'} />
      {/* dlaczego nie bierze styli z drugiego pliku? */}
      <LoginPageFooter />
    </div>
  );
};

export default SignUpPage;
