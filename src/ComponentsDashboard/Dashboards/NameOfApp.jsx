import React from 'react';
import '../LoginPages/LoginPage.css';

export const NameOfApp = ({ paragraph }) => {
  return (
    <div className="nameOfApp ">
      <h1 className="loginPageText">Popeye Weather</h1>
      <p className="nameOfApp--para">{paragraph}</p>
    </div>
  );
};
