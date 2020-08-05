import React from 'react';
import style from './dashboard.module.css';
import PopeyeLogo from '../../images/hiclipart.com.png';

export const SmallImg = () => {
  return (
    <>
      <img alt="logo of popeye weather app" src={PopeyeLogo} className={style.loginImage} />
    </>
  );
};
