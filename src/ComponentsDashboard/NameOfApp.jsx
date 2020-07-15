import React from "react";
import "../CSSForComponents/LoginPage.css";

export const NameOfApp = ({ paragraph }) => {
  return (
    <div className="nameOfApp ">
      <h1 className="loginPageText">Popeye Weather</h1>
      <p className="nameOfApp--para">{paragraph}</p>
    </div>
  );
};
