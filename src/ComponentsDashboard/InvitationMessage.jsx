import React from "react";
import "../CSSForComponents/Dashboard.css";

export const InvitationMessage = ({ message }) => {
  return (
    <>
      <span className="textInHeader dashboardMessage">{message}</span>
    </>
  );
};
