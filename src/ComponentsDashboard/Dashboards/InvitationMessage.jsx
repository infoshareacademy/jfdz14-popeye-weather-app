import React from 'react';
import style from './AppContent.module.css';

export const InvitationMessage = ({ message }) => {
  return (
    <>
      <span className={`${style.textInHeader} ${style.dashboardMessage}`}>{message}</span>
    </>
  );
};
