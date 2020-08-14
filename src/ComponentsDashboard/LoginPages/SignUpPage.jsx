import React from 'react';
import style from './LoginPage.module.css';
import { PopeyeImg } from '../Dashboards/PopeyeImg';
import { LoginPageFooter } from './LoginFooter';
import { Input } from './Input';
import LoginButton from './LoginButton';
import { NameOfApp } from '../Dashboards/NameOfApp';
import { Divider } from '@material-ui/core';
import BackButton from './BackButton';

const SignUpPage = () => {
  return (
    <div className={style.loginPage}>
      <PopeyeImg />
      <NameOfApp paragraph={'Register to use application'} />
      <Input type={'email'} placeholder={'Enter your e-mail'} />
      <Divider />
      <Input type={'text'} placeholder={'Enter your name and surname'} />
      <Divider />
      <Input type={'text'} placeholder={'Enter your login'} />
      <Divider />
      <Input type={'password'} placeholder={'Enter your password'} />
      <Divider />
      <Input type={'password'} placeholder={'Repeat your password'} />
      <LoginButton toLogIn text={'Sign Up'} urlName={'home'} />
      <BackButton />
      <LoginPageFooter />
    </div>
  );
};

export default SignUpPage;
