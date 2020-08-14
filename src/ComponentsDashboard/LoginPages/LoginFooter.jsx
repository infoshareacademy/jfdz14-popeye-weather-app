import React from 'react';
import { Divider } from '@material-ui/core';
import style from './LoginPage.module.css';
// import { Typography, Divider } from "@material-ui/core";

export const LoginPageFooter = () => {
  return (
    <>
      <span className={`${style.loginPageText} ${style.footer}`}>
        <Divider style={{ backgroundColor: 'white', width: '60vw' }} />
        <p>
          From
          <br /> Wirus Team
        </p>
      </span>
    </>
  );
};
