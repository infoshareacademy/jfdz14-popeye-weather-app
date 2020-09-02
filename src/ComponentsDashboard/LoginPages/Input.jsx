import React from 'react';
import style from './LoginPage.module.css';

export const Input = ({ type, placeholder, onChange, value }) => {
  return <input className={style.input} type={type} placeholder={placeholder} onChnage={onChange} value={value}></input>;
};
