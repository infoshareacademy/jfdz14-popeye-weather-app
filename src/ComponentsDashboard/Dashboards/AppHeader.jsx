import React from 'react';
import style from './AppContent.module.css';
import { SmallImg } from './SmallImg';

export const TextInHeader = ({ text }) => {
  return (
    <div className={style.textInHeader}>
      <span>{text}</span>
    </div>
  );
};

export const AppHeader = ({ text }) => {
  return (
    <div className={style.header}>
      <SmallImg />
      <TextInHeader text={'Popeye Weather'} className={style.textInHeader}/>
    </div>
  );
};
