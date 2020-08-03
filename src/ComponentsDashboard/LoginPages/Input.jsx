import React from 'react';
import './LoginPage.css';
import './SignUpPage.css';

export const Input = ({ type, placeholder }) => {
  return <input className="input" type={type} placeholder={placeholder}></input>;
};
