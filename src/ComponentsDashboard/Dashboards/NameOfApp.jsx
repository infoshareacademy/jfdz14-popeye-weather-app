import React from 'react';
import style from './AppContent.module.css';

export const NameOfApp = ({ paragraph }) => {
  return (
    <div>
      <h1 className={style.loginPageText}>Popeye Weather</h1>
      <p className={style.nameOfAppPara}>{paragraph}</p>
    </div>
  );
};
