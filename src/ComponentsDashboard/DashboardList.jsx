import React from "react";
import {
  HomeOutlined,
  SearchOutlined,
  LocationOnOutlined,
  StarBorderOutlined,
  NotificationsActiveOutlined,
} from "@material-ui/icons";
import "../CSSForComponents/Dashboard.css";

export const DashboardList = () => {
  return (
    <>
      <div className="listElement">
        <HomeOutlined />
        <span className="dashboardMessage">Home Page</span>{" "}
      </div>
      <div className="listElement">
        <LocationOnOutlined />
        <span className="dashboardMessage">
          Information about weather in your current location
        </span>{" "}
      </div>
      <div className="listElement">
        <SearchOutlined />
        <span className="dashboardMessage">
          Search for different locations and review weather
        </span>{" "}
      </div>
      <div className="listElement">
        <StarBorderOutlined />
        <span className="dashboardMessage">
          Review your favorites locations
        </span>{" "}
      </div>
      <div className="listElement">
        <NotificationsActiveOutlined />
        <span className="dashboardMessage">Set notifications</span>{" "}
      </div>
    </>
  );
};
