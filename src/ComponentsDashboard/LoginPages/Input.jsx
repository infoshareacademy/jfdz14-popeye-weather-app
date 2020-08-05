import React from 'react';
import style from './LoginPage.module.css';

export const Input = ({ type, placeholder }) => {
  return <input className={style.input} type={type} placeholder={placeholder}></input>;
};
