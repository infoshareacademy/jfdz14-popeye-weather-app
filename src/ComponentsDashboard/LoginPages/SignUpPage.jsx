import React from 'react';
import style from './LoginPage.module.css';

import { PopeyeImg } from '../Dashboards/PopeyeImg';
import { LoginPageFooter } from './LoginFooter';
import { Input } from './Input';
import LoginButton from './LoginButton';
import { NameOfApp } from '../Dashboards/NameOfApp';
import { Divider } from '@material-ui/core';

const SignUpPage = () => {
  return (
    <div className={style.loginPage}>
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
      <LoginButton text={'Sign Up'} urlName={'home'} />
      <LoginPageFooter />
    </div>
  );
};

export default SignUpPage;
