import React from 'react';
import '../../CSSForComponents/LoginPage.css';
import '../../CSSForComponents/SignUpPage.css';

export const Input = ({ type, placeholder }) => {
  return <input className="input" type={type} placeholder={placeholder}></input>;
};
