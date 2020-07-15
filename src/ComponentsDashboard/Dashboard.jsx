import React from "react";
import "../CSSForComponents/Dashboard.css";
// import { NameOfApp } from "./NameOfApp";

import { AppHeader } from "./AppHeader";
import { InvitationMessage } from "./InvitationMessage";
import { DashboardList } from "./DashboardList";
import { ChartOne } from "./ChartOne";
import { ChartTwo } from "./ChartTwo";

export const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <AppHeader />
        <InvitationMessage
          message={
            <>
              <div className="dashboardInvitation">
                Dear Katarzyna,
                <br />
                in our application you can:
              </div>
            </>
          }
        />
        <DashboardList />
      </div>
      <div className="chartsBackground">
        <ChartOne />
        <ChartTwo />
      </div>
    </>
  );
};

// export default Dashboard;
