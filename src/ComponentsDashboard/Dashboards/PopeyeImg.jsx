import React from 'react';
import style from './dashboard.module.css';
import PopeyeLogo from '../../images/hiclipart.com.png';

export const PopeyeImg = () => {
  return (
    <>
      <img alt="logo of popeye weather app" src={PopeyeLogo} className={style.loginImage} />
    </>
  );
};
