import React from "react";
import "../CSSForComponents/Dashboard.css";
// import { NameOfApp } from "./NameOfApp";

import { AppHeader } from "./AppHeader";
import { InvitationMessage } from "./InvitationMessage";
import { DashboardList } from "./DashboardList";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <AppHeader />
      <InvitationMessage
        className="dashboardMessage"
        message={
          <>
            <span>
              Dear Katarzyna,
              <br />
            </span>{" "}
            <span>in our application you can:</span>
          </>
        }
      />
      <DashboardList children={"home page"} />
    </div>
  );
};

// export default Dashboard;
