import React from "react";
import { Home } from "@material-ui/icons";
import "../CSSForComponents/Dashboard.css";

const ListElement = () => {
  return <Home />;
};

export const DashboardList = () => {
  return (
    <>
      <Home>
        {" "}
        <span className="dashboardMessage">Home Page</span>{" "}
      </Home>
    </>
  );
};
