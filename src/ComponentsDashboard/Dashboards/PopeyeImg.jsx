import React from 'react';
import '../../CSSForComponents/LoginPage.css';
import '../../CSSForComponents/App.css';
import PopeyeLogo from '../../images/hiclipart.com.png';

export const PopeyeImg = () => {
  return (
    <>
      <img alt="logo of popeye weather app" src={PopeyeLogo} className="loginImage" />
    </>
  );
};
