import React from "react";
import "../CSSForComponents/Dashboard.css";
import { SmallImg } from "./SmallImg";

const TextInHeader = ({ text }) => {
  return (
    <div className="textInHeader">
      <span>{text}</span>
    </div>
  );
};

export const AppHeader = () => {
  return (
    <div className="header">
      <SmallImg />
      <TextInHeader text={"Hello, Katarzyna"} />
    </div>
  );
};
