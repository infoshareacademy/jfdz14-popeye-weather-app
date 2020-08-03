import React from 'react';
import './Dashboard.css';

export const InvitationMessage = ({ message }) => {
  return (
    <>
      <span className="textInHeader dashboardMessage">{message}</span>
    </>
  );
};
