import React from 'react';
import '../../CSSForComponents/Dashboard.css';
import PopeyeLogo from '../../images/hiclipart.com.png';

export const SmallImg = () => {
  return (
    <>
      <img alt="logo of popeye weather app" src={PopeyeLogo} className="loginImage" />
    </>
  );
};
