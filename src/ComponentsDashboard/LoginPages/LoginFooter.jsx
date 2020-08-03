import React from 'react';
import { Divider } from '@material-ui/core';

// import { Typography, Divider } from "@material-ui/core";
import './LoginPage.css';
import '../../App.css';

export const LoginPageFooter = () => {
  return (
    <>
      <span className="loginPageText footer">
        <Divider style={{ backgroundColor: 'white', width: '60vw' }} />
        <em>
          From
          <br /> Wirus Team
        </em>
      </span>
    </>
  );
};
