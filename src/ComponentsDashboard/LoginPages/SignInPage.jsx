import React from 'react';
import style from './LoginPage.module.css';
import { PopeyeImg } from '../Dashboards/PopeyeImg';
import { LoginPageFooter } from './LoginFooter';
import { Input } from './Input';
import LoginButton from './LoginButton';
import { NameOfApp } from '../Dashboards/NameOfApp';
import { Divider } from '@material-ui/core';
import BackButton from './BackButton';

const SignInPage = () => {
  return (
    <div className={style.loginPage}>
      <PopeyeImg />
      <NameOfApp paragraph={'Sign in to use application'} />
      <Input type={'text'} placeholder={'login'} />
      <Divider />
      <Input type={'password'} placeholder={'password'} />
      <LoginButton toLogIn text={'Sign In'} urlName={'home'} />
      <BackButton />
      <LoginPageFooter />
    </div>
  );
};

export default SignInPage;
