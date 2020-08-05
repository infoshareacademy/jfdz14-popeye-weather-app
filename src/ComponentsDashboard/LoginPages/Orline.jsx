import React from 'react';
import style from './LoginPage.module.css';
import { Divider } from '@material-ui/core';

export const OrLine = () => {
  return (
    <div className={style.orLine}>
      <Divider style={{ backgroundColor: 'white', width: '26vw' }} />
      <h1 className={style.loginAmpersand}> OR </h1>
      <Divider style={{ backgroundColor: 'white', width: '26vw' }} />
    </div>
  );
};
