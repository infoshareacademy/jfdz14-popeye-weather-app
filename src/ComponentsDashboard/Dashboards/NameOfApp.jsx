import React from 'react';
import style from './dashboard.module.css';

export const NameOfApp = ({ paragraph }) => {
  return (
    <div className={style.nameOfApp}>
      <h1 className={style.loginPageText}>Popeye Weather</h1>
      <p className={style.nameOfAppPara}>{paragraph}</p>
    </div>
  );
};
