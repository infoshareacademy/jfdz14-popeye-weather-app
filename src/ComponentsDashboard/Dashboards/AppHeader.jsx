import React from 'react';
import style from './AppContent.module.css';
import { SmallImg } from './SmallImg';

const TextInHeader = ({ text }) => {
  return (
    <div className={style.textInHeader}>
      <span>{text}</span>
    </div>
  );
};

export const AppHeader = () => {
  return (
    <div className={style.header}>
      <SmallImg />
      <TextInHeader text={'Hello, Katarzyna'} />
    </div>
  );
};
