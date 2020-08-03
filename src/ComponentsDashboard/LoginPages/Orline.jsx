import React from 'react';
import '../../CSSForComponents/LoginPage.css';
import '../../CSSForComponents/App.css';
import { Divider } from '@material-ui/core';

export const OrLine = () => {
  return (
    <div className="orLine">
      <Divider style={{ backgroundColor: 'white', width: '26vw' }} />
      <h1 className="loginAmpersand"> OR </h1>
      <Divider style={{ backgroundColor: 'white', width: '26vw' }} />
    </div>
  );
};
