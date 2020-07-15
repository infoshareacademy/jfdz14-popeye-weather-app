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
  );
};

// export default Dashboard;
